var CD = Object.defineProperty;
var yx = (p) => {
  throw TypeError(p);
};
var xD = (p, c, f) => c in p ? CD(p, c, { enumerable: !0, configurable: !0, writable: !0, value: f }) : p[c] = f;
var xn = (p, c, f) => xD(p, typeof c != "symbol" ? c + "" : c, f), RD = (p, c, f) => c.has(p) || yx("Cannot " + f);
var gx = (p, c, f) => c.has(p) ? yx("Cannot add the same private member more than once") : c instanceof WeakSet ? c.add(p) : c.set(p, f);
var yy = (p, c, f) => (RD(p, c, "access private method"), f);
var wl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bE(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var vE = { exports: {} }, dh = {}, mE = { exports: {} }, Dt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sx;
function bD() {
  if (Sx) return Dt;
  Sx = 1;
  var p = Symbol.for("react.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), w = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), $ = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), F = Symbol.iterator;
  function I(k) {
    return k === null || typeof k != "object" ? null : (k = F && k[F] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, K = Object.assign, X = {};
  function Ce(k, Z, xe) {
    this.props = k, this.context = Z, this.refs = X, this.updater = xe || oe;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(k, Z) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, Z, "setState");
  }, Ce.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function ut() {
  }
  ut.prototype = Ce.prototype;
  function ft(k, Z, xe) {
    this.props = k, this.context = Z, this.refs = X, this.updater = xe || oe;
  }
  var Ye = ft.prototype = new ut();
  Ye.constructor = ft, K(Ye, Ce.prototype), Ye.isPureReactComponent = !0;
  var Ae = Array.isArray, gt = Object.prototype.hasOwnProperty, _e = { current: null }, Ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rt(k, Z, xe) {
    var Pe, Be = {}, at = null, et = null;
    if (Z != null) for (Pe in Z.ref !== void 0 && (et = Z.ref), Z.key !== void 0 && (at = "" + Z.key), Z) gt.call(Z, Pe) && !Ge.hasOwnProperty(Pe) && (Be[Pe] = Z[Pe]);
    var mt = arguments.length - 2;
    if (mt === 1) Be.children = xe;
    else if (1 < mt) {
      for (var st = Array(mt), Ht = 0; Ht < mt; Ht++) st[Ht] = arguments[Ht + 2];
      Be.children = st;
    }
    if (k && k.defaultProps) for (Pe in mt = k.defaultProps, mt) Be[Pe] === void 0 && (Be[Pe] = mt[Pe]);
    return { $$typeof: p, type: k, key: at, ref: et, props: Be, _owner: _e.current };
  }
  function tn(k, Z) {
    return { $$typeof: p, type: k.type, key: Z, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Gt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === p;
  }
  function P(k) {
    var Z = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(xe) {
      return Z[xe];
    });
  }
  var re = /\/+/g;
  function me(k, Z) {
    return typeof k == "object" && k !== null && k.key != null ? P("" + k.key) : Z.toString(36);
  }
  function ue(k, Z, xe, Pe, Be) {
    var at = typeof k;
    (at === "undefined" || at === "boolean") && (k = null);
    var et = !1;
    if (k === null) et = !0;
    else switch (at) {
      case "string":
      case "number":
        et = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case p:
          case c:
            et = !0;
        }
    }
    if (et) return et = k, Be = Be(et), k = Pe === "" ? "." + me(et, 0) : Pe, Ae(Be) ? (xe = "", k != null && (xe = k.replace(re, "$&/") + "/"), ue(Be, Z, xe, "", function(Ht) {
      return Ht;
    })) : Be != null && (Gt(Be) && (Be = tn(Be, xe + (!Be.key || et && et.key === Be.key ? "" : ("" + Be.key).replace(re, "$&/") + "/") + k)), Z.push(Be)), 1;
    if (et = 0, Pe = Pe === "" ? "." : Pe + ":", Ae(k)) for (var mt = 0; mt < k.length; mt++) {
      at = k[mt];
      var st = Pe + me(at, mt);
      et += ue(at, Z, xe, st, Be);
    }
    else if (st = I(k), typeof st == "function") for (k = st.call(k), mt = 0; !(at = k.next()).done; ) at = at.value, st = Pe + me(at, mt++), et += ue(at, Z, xe, st, Be);
    else if (at === "object") throw Z = String(k), Error("Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead.");
    return et;
  }
  function Se(k, Z, xe) {
    if (k == null) return k;
    var Pe = [], Be = 0;
    return ue(k, Pe, "", "", function(at) {
      return Z.call(xe, at, Be++);
    }), Pe;
  }
  function pe(k) {
    if (k._status === -1) {
      var Z = k._result;
      Z = Z(), Z.then(function(xe) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = xe);
      }, function(xe) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = xe);
      }), k._status === -1 && (k._status = 0, k._result = Z);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ve = { current: null }, q = { transition: null }, se = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: q, ReactCurrentOwner: _e };
  return Dt.Children = { map: Se, forEach: function(k, Z, xe) {
    Se(k, function() {
      Z.apply(this, arguments);
    }, xe);
  }, count: function(k) {
    var Z = 0;
    return Se(k, function() {
      Z++;
    }), Z;
  }, toArray: function(k) {
    return Se(k, function(Z) {
      return Z;
    }) || [];
  }, only: function(k) {
    if (!Gt(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Dt.Component = Ce, Dt.Fragment = f, Dt.Profiler = E, Dt.PureComponent = ft, Dt.StrictMode = v, Dt.Suspense = U, Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, Dt.cloneElement = function(k, Z, xe) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Pe = K({}, k.props), Be = k.key, at = k.ref, et = k._owner;
    if (Z != null) {
      if (Z.ref !== void 0 && (at = Z.ref, et = _e.current), Z.key !== void 0 && (Be = "" + Z.key), k.type && k.type.defaultProps) var mt = k.type.defaultProps;
      for (st in Z) gt.call(Z, st) && !Ge.hasOwnProperty(st) && (Pe[st] = Z[st] === void 0 && mt !== void 0 ? mt[st] : Z[st]);
    }
    var st = arguments.length - 2;
    if (st === 1) Pe.children = xe;
    else if (1 < st) {
      mt = Array(st);
      for (var Ht = 0; Ht < st; Ht++) mt[Ht] = arguments[Ht + 2];
      Pe.children = mt;
    }
    return { $$typeof: p, type: k.type, key: Be, ref: at, props: Pe, _owner: et };
  }, Dt.createContext = function(k) {
    return k = { $$typeof: w, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: x, _context: k }, k.Consumer = k;
  }, Dt.createElement = rt, Dt.createFactory = function(k) {
    var Z = rt.bind(null, k);
    return Z.type = k, Z;
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(k) {
    return { $$typeof: g, render: k };
  }, Dt.isValidElement = Gt, Dt.lazy = function(k) {
    return { $$typeof: z, _payload: { _status: -1, _result: k }, _init: pe };
  }, Dt.memo = function(k, Z) {
    return { $$typeof: $, type: k, compare: Z === void 0 ? null : Z };
  }, Dt.startTransition = function(k) {
    var Z = q.transition;
    q.transition = {};
    try {
      k();
    } finally {
      q.transition = Z;
    }
  }, Dt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Dt.useCallback = function(k, Z) {
    return ve.current.useCallback(k, Z);
  }, Dt.useContext = function(k) {
    return ve.current.useContext(k);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(k) {
    return ve.current.useDeferredValue(k);
  }, Dt.useEffect = function(k, Z) {
    return ve.current.useEffect(k, Z);
  }, Dt.useId = function() {
    return ve.current.useId();
  }, Dt.useImperativeHandle = function(k, Z, xe) {
    return ve.current.useImperativeHandle(k, Z, xe);
  }, Dt.useInsertionEffect = function(k, Z) {
    return ve.current.useInsertionEffect(k, Z);
  }, Dt.useLayoutEffect = function(k, Z) {
    return ve.current.useLayoutEffect(k, Z);
  }, Dt.useMemo = function(k, Z) {
    return ve.current.useMemo(k, Z);
  }, Dt.useReducer = function(k, Z, xe) {
    return ve.current.useReducer(k, Z, xe);
  }, Dt.useRef = function(k) {
    return ve.current.useRef(k);
  }, Dt.useState = function(k) {
    return ve.current.useState(k);
  }, Dt.useSyncExternalStore = function(k, Z, xe) {
    return ve.current.useSyncExternalStore(k, Z, xe);
  }, Dt.useTransition = function() {
    return ve.current.useTransition();
  }, Dt.version = "18.2.0", Dt;
}
var yh = { exports: {} };
yh.exports;
var Ex;
function TD() {
  return Ex || (Ex = 1, function(p, c) {
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
      var v = "18.2.0", E = Symbol.for("react.element"), x = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), z = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), ut = Symbol.iterator, ft = "@@iterator";
      function Ye(C) {
        if (C === null || typeof C != "object")
          return null;
        var O = ut && C[ut] || C[ft];
        return typeof O == "function" ? O : null;
      }
      var Ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, gt = {
        transition: null
      }, _e = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, rt = {}, tn = null;
      function Gt(C) {
        tn = C;
      }
      rt.setExtraStackFrame = function(C) {
        tn = C;
      }, rt.getCurrentStack = null, rt.getStackAddendum = function() {
        var C = "";
        tn && (C += tn);
        var O = rt.getCurrentStack;
        return O && (C += O() || ""), C;
      };
      var P = !1, re = !1, me = !1, ue = !1, Se = !1, pe = {
        ReactCurrentDispatcher: Ae,
        ReactCurrentBatchConfig: gt,
        ReactCurrentOwner: Ge
      };
      pe.ReactDebugCurrentFrame = rt, pe.ReactCurrentActQueue = _e;
      function ve(C) {
        {
          for (var O = arguments.length, Y = new Array(O > 1 ? O - 1 : 0), J = 1; J < O; J++)
            Y[J - 1] = arguments[J];
          se("warn", C, Y);
        }
      }
      function q(C) {
        {
          for (var O = arguments.length, Y = new Array(O > 1 ? O - 1 : 0), J = 1; J < O; J++)
            Y[J - 1] = arguments[J];
          se("error", C, Y);
        }
      }
      function se(C, O, Y) {
        {
          var J = pe.ReactDebugCurrentFrame, ye = J.getStackAddendum();
          ye !== "" && (O += "%s", Y = Y.concat([ye]));
          var He = Y.map(function(Le) {
            return String(Le);
          });
          He.unshift("Warning: " + O), Function.prototype.apply.call(console[C], console, He);
        }
      }
      var k = {};
      function Z(C, O) {
        {
          var Y = C.constructor, J = Y && (Y.displayName || Y.name) || "ReactClass", ye = J + "." + O;
          if (k[ye])
            return;
          q("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", O, J), k[ye] = !0;
        }
      }
      var xe = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(C) {
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
        enqueueForceUpdate: function(C, O, Y) {
          Z(C, "forceUpdate");
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
        enqueueReplaceState: function(C, O, Y, J) {
          Z(C, "replaceState");
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
        enqueueSetState: function(C, O, Y, J) {
          Z(C, "setState");
        }
      }, Pe = Object.assign, Be = {};
      Object.freeze(Be);
      function at(C, O, Y) {
        this.props = C, this.context = O, this.refs = Be, this.updater = Y || xe;
      }
      at.prototype.isReactComponent = {}, at.prototype.setState = function(C, O) {
        if (typeof C != "object" && typeof C != "function" && C != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, O, "setState");
      }, at.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate");
      };
      {
        var et = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, mt = function(C, O) {
          Object.defineProperty(at.prototype, C, {
            get: function() {
              ve("%s(...) is deprecated in plain JavaScript React classes. %s", O[0], O[1]);
            }
          });
        };
        for (var st in et)
          et.hasOwnProperty(st) && mt(st, et[st]);
      }
      function Ht() {
      }
      Ht.prototype = at.prototype;
      function Rn(C, O, Y) {
        this.props = C, this.context = O, this.refs = Be, this.updater = Y || xe;
      }
      var Wn = Rn.prototype = new Ht();
      Wn.constructor = Rn, Pe(Wn, at.prototype), Wn.isPureReactComponent = !0;
      function Yr() {
        var C = {
          current: null
        };
        return Object.seal(C), C;
      }
      var wr = Array.isArray;
      function bn(C) {
        return wr(C);
      }
      function or(C) {
        {
          var O = typeof Symbol == "function" && Symbol.toStringTag, Y = O && C[Symbol.toStringTag] || C.constructor.name || "Object";
          return Y;
        }
      }
      function Qn(C) {
        try {
          return Hn(C), !1;
        } catch {
          return !0;
        }
      }
      function Hn(C) {
        return "" + C;
      }
      function Bn(C) {
        if (Qn(C))
          return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(C)), Hn(C);
      }
      function Dr(C, O, Y) {
        var J = C.displayName;
        if (J)
          return J;
        var ye = O.displayName || O.name || "";
        return ye !== "" ? Y + "(" + ye + ")" : Y;
      }
      function Cr(C) {
        return C.displayName || "Context";
      }
      function qn(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case w:
            return "Fragment";
          case x:
            return "Portal";
          case U:
            return "Profiler";
          case g:
            return "StrictMode";
          case I:
            return "Suspense";
          case oe:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case z:
              var O = C;
              return Cr(O) + ".Consumer";
            case $:
              var Y = C;
              return Cr(Y._context) + ".Provider";
            case F:
              return Dr(C, C.render, "ForwardRef");
            case K:
              var J = C.displayName || null;
              return J !== null ? J : qn(C.type) || "Memo";
            case X: {
              var ye = C, He = ye._payload, Le = ye._init;
              try {
                return qn(Le(He));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ha = Object.prototype.hasOwnProperty, va = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, xr, ma, ur;
      ur = {};
      function Lr(C) {
        if (ha.call(C, "ref")) {
          var O = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function vn(C) {
        if (ha.call(C, "key")) {
          var O = Object.getOwnPropertyDescriptor(C, "key").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function ya(C, O) {
        var Y = function() {
          xr || (xr = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        Y.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: Y,
          configurable: !0
        });
      }
      function ga(C, O) {
        var Y = function() {
          ma || (ma = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        Y.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: Y,
          configurable: !0
        });
      }
      function Sa(C) {
        if (typeof C.ref == "string" && Ge.current && C.__self && Ge.current.stateNode !== C.__self) {
          var O = qn(Ge.current.type);
          ur[O] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O, C.ref), ur[O] = !0);
        }
      }
      var Re = function(C, O, Y, J, ye, He, Le) {
        var lt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: E,
          // Built-in properties that belong on the element
          type: C,
          key: O,
          ref: Y,
          props: Le,
          // Record the component responsible for creating this element.
          _owner: He
        };
        return lt._store = {}, Object.defineProperty(lt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(lt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.defineProperty(lt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ye
        }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
      };
      function qe(C, O, Y) {
        var J, ye = {}, He = null, Le = null, lt = null, wt = null;
        if (O != null) {
          Lr(O) && (Le = O.ref, Sa(O)), vn(O) && (Bn(O.key), He = "" + O.key), lt = O.__self === void 0 ? null : O.__self, wt = O.__source === void 0 ? null : O.__source;
          for (J in O)
            ha.call(O, J) && !va.hasOwnProperty(J) && (ye[J] = O[J]);
        }
        var Vt = arguments.length - 2;
        if (Vt === 1)
          ye.children = Y;
        else if (Vt > 1) {
          for (var Wt = Array(Vt), Qt = 0; Qt < Vt; Qt++)
            Wt[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(Wt), ye.children = Wt;
        }
        if (C && C.defaultProps) {
          var qt = C.defaultProps;
          for (J in qt)
            ye[J] === void 0 && (ye[J] = qt[J]);
        }
        if (He || Le) {
          var fn = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          He && ya(ye, fn), Le && ga(ye, fn);
        }
        return Re(C, He, Le, lt, wt, Ge.current, ye);
      }
      function St(C, O) {
        var Y = Re(C.type, O, C.ref, C._self, C._source, C._owner, C.props);
        return Y;
      }
      function Bt(C, O, Y) {
        if (C == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
        var J, ye = Pe({}, C.props), He = C.key, Le = C.ref, lt = C._self, wt = C._source, Vt = C._owner;
        if (O != null) {
          Lr(O) && (Le = O.ref, Vt = Ge.current), vn(O) && (Bn(O.key), He = "" + O.key);
          var Wt;
          C.type && C.type.defaultProps && (Wt = C.type.defaultProps);
          for (J in O)
            ha.call(O, J) && !va.hasOwnProperty(J) && (O[J] === void 0 && Wt !== void 0 ? ye[J] = Wt[J] : ye[J] = O[J]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          ye.children = Y;
        else if (Qt > 1) {
          for (var qt = Array(Qt), fn = 0; fn < Qt; fn++)
            qt[fn] = arguments[fn + 2];
          ye.children = qt;
        }
        return Re(C.type, He, Le, lt, wt, Vt, ye);
      }
      function At(C) {
        return typeof C == "object" && C !== null && C.$$typeof === E;
      }
      var Nn = ".", yn = ":";
      function Rr(C) {
        var O = /[=:]/g, Y = {
          "=": "=0",
          ":": "=2"
        }, J = C.replace(O, function(ye) {
          return Y[ye];
        });
        return "$" + J;
      }
      var Yt = !1, er = /\/+/g;
      function $t(C) {
        return C.replace(er, "$&/");
      }
      function nn(C, O) {
        return typeof C == "object" && C !== null && C.key != null ? (Bn(C.key), Rr("" + C.key)) : O.toString(36);
      }
      function ri(C, O, Y, J, ye) {
        var He = typeof C;
        (He === "undefined" || He === "boolean") && (C = null);
        var Le = !1;
        if (C === null)
          Le = !0;
        else
          switch (He) {
            case "string":
            case "number":
              Le = !0;
              break;
            case "object":
              switch (C.$$typeof) {
                case E:
                case x:
                  Le = !0;
              }
          }
        if (Le) {
          var lt = C, wt = ye(lt), Vt = J === "" ? Nn + nn(lt, 0) : J;
          if (bn(wt)) {
            var Wt = "";
            Vt != null && (Wt = $t(Vt) + "/"), ri(wt, O, Wt, "", function(vd) {
              return vd;
            });
          } else wt != null && (At(wt) && (wt.key && (!lt || lt.key !== wt.key) && Bn(wt.key), wt = St(
            wt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Y + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (wt.key && (!lt || lt.key !== wt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              $t("" + wt.key) + "/"
            ) : "") + Vt
          )), O.push(wt));
          return 1;
        }
        var Qt, qt, fn = 0, Nt = J === "" ? Nn : J + yn;
        if (bn(C))
          for (var Dl = 0; Dl < C.length; Dl++)
            Qt = C[Dl], qt = Nt + nn(Qt, Dl), fn += ri(Qt, O, Y, qt, ye);
        else {
          var su = Ye(C);
          if (typeof su == "function") {
            var gs = C;
            su === gs.entries && (Yt || ve("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var Ss = su.call(gs), Gi, Es = 0; !(Gi = Ss.next()).done; )
              Qt = Gi.value, qt = Nt + nn(Qt, Es++), fn += ri(Qt, O, Y, qt, ye);
          } else if (He === "object") {
            var ws = String(C);
            throw new Error("Objects are not valid as a React child (found: " + (ws === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : ws) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return fn;
      }
      function Ma(C, O, Y) {
        if (C == null)
          return C;
        var J = [], ye = 0;
        return ri(C, J, "", "", function(He) {
          return O.call(Y, He, ye++);
        }), J;
      }
      function Cl(C) {
        var O = 0;
        return Ma(C, function() {
          O++;
        }), O;
      }
      function co(C, O, Y) {
        Ma(C, function() {
          O.apply(this, arguments);
        }, Y);
      }
      function fo(C) {
        return Ma(C, function(O) {
          return O;
        }) || [];
      }
      function xl(C) {
        if (!At(C))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return C;
      }
      function ai(C) {
        var O = {
          $$typeof: z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: C,
          _currentValue2: C,
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
        O.Provider = {
          $$typeof: $,
          _context: O
        };
        var Y = !1, J = !1, ye = !1;
        {
          var He = {
            $$typeof: z,
            _context: O
          };
          Object.defineProperties(He, {
            Provider: {
              get: function() {
                return J || (J = !0, q("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), O.Provider;
              },
              set: function(Le) {
                O.Provider = Le;
              }
            },
            _currentValue: {
              get: function() {
                return O._currentValue;
              },
              set: function(Le) {
                O._currentValue = Le;
              }
            },
            _currentValue2: {
              get: function() {
                return O._currentValue2;
              },
              set: function(Le) {
                O._currentValue2 = Le;
              }
            },
            _threadCount: {
              get: function() {
                return O._threadCount;
              },
              set: function(Le) {
                O._threadCount = Le;
              }
            },
            Consumer: {
              get: function() {
                return Y || (Y = !0, q("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), O.Consumer;
              }
            },
            displayName: {
              get: function() {
                return O.displayName;
              },
              set: function(Le) {
                ye || (ve("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Le), ye = !0);
              }
            }
          }), O.Consumer = He;
        }
        return O._currentRenderer = null, O._currentRenderer2 = null, O;
      }
      var ii = -1, Aa = 0, $i = 1, Wr = 2;
      function Qr(C) {
        if (C._status === ii) {
          var O = C._result, Y = O();
          if (Y.then(function(He) {
            if (C._status === Aa || C._status === ii) {
              var Le = C;
              Le._status = $i, Le._result = He;
            }
          }, function(He) {
            if (C._status === Aa || C._status === ii) {
              var Le = C;
              Le._status = Wr, Le._result = He;
            }
          }), C._status === ii) {
            var J = C;
            J._status = Aa, J._result = Y;
          }
        }
        if (C._status === $i) {
          var ye = C._result;
          return ye === void 0 && q(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ye), "default" in ye || q(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ye), ye.default;
        } else
          throw C._result;
      }
      function Ea(C) {
        var O = {
          // We use these fields to store the result.
          _status: ii,
          _result: C
        }, Y = {
          $$typeof: X,
          _payload: O,
          _init: Qr
        };
        {
          var J, ye;
          Object.defineProperties(Y, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(He) {
                q("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = He, Object.defineProperty(Y, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ye;
              },
              set: function(He) {
                q("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ye = He, Object.defineProperty(Y, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Y;
      }
      function Vi(C) {
        C != null && C.$$typeof === K ? q("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof C != "function" ? q("forwardRef requires a render function but was given %s.", C === null ? "null" : typeof C) : C.length !== 0 && C.length !== 2 && q("forwardRef render functions accept exactly two parameters: props and ref. %s", C.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), C != null && (C.defaultProps != null || C.propTypes != null) && q("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var O = {
          $$typeof: F,
          render: C
        };
        {
          var Y;
          Object.defineProperty(O, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(J) {
              Y = J, !C.name && !C.displayName && (C.displayName = J);
            }
          });
        }
        return O;
      }
      var D;
      D = Symbol.for("react.module.reference");
      function ce(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === w || C === U || Se || C === g || C === I || C === oe || ue || C === Ce || P || re || me || typeof C == "object" && C !== null && (C.$$typeof === X || C.$$typeof === K || C.$$typeof === $ || C.$$typeof === z || C.$$typeof === F || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        C.$$typeof === D || C.getModuleId !== void 0));
      }
      function be(C, O) {
        ce(C) || q("memo: The first argument must be a component. Instead received: %s", C === null ? "null" : typeof C);
        var Y = {
          $$typeof: K,
          type: C,
          compare: O === void 0 ? null : O
        };
        {
          var J;
          Object.defineProperty(Y, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(ye) {
              J = ye, !C.name && !C.displayName && (C.displayName = ye);
            }
          });
        }
        return Y;
      }
      function Te() {
        var C = Ae.current;
        return C === null && q(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), C;
      }
      function xt(C) {
        var O = Te();
        if (C._context !== void 0) {
          var Y = C._context;
          Y.Consumer === C ? q("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Y.Provider === C && q("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return O.useContext(C);
      }
      function kt(C) {
        var O = Te();
        return O.useState(C);
      }
      function yt(C, O, Y) {
        var J = Te();
        return J.useReducer(C, O, Y);
      }
      function Ke(C) {
        var O = Te();
        return O.useRef(C);
      }
      function $n(C, O) {
        var Y = Te();
        return Y.useEffect(C, O);
      }
      function rn(C, O) {
        var Y = Te();
        return Y.useInsertionEffect(C, O);
      }
      function an(C, O) {
        var Y = Te();
        return Y.useLayoutEffect(C, O);
      }
      function br(C, O) {
        var Y = Te();
        return Y.useCallback(C, O);
      }
      function yi(C, O) {
        var Y = Te();
        return Y.useMemo(C, O);
      }
      function ln(C, O, Y) {
        var J = Te();
        return J.useImperativeHandle(C, O, Y);
      }
      function qr(C, O) {
        {
          var Y = Te();
          return Y.useDebugValue(C, O);
        }
      }
      function os() {
        var C = Te();
        return C.useTransition();
      }
      function gi(C) {
        var O = Te();
        return O.useDeferredValue(C);
      }
      function Et() {
        var C = Te();
        return C.useId();
      }
      function po(C, O, Y) {
        var J = Te();
        return J.useSyncExternalStore(C, O, Y);
      }
      var Ii = 0, Rl, Gr, us, Nr, ss, cs, fs;
      function ho() {
      }
      ho.__reactDisabledLog = !0;
      function tu() {
        {
          if (Ii === 0) {
            Rl = console.log, Gr = console.info, us = console.warn, Nr = console.error, ss = console.group, cs = console.groupCollapsed, fs = console.groupEnd;
            var C = {
              configurable: !0,
              enumerable: !0,
              value: ho,
              writable: !0
            };
            Object.defineProperties(console, {
              info: C,
              log: C,
              warn: C,
              error: C,
              group: C,
              groupCollapsed: C,
              groupEnd: C
            });
          }
          Ii++;
        }
      }
      function Yi() {
        {
          if (Ii--, Ii === 0) {
            var C = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Pe({}, C, {
                value: Rl
              }),
              info: Pe({}, C, {
                value: Gr
              }),
              warn: Pe({}, C, {
                value: us
              }),
              error: Pe({}, C, {
                value: Nr
              }),
              group: Pe({}, C, {
                value: ss
              }),
              groupCollapsed: Pe({}, C, {
                value: cs
              }),
              groupEnd: Pe({}, C, {
                value: fs
              })
            });
          }
          Ii < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Si = pe.ReactCurrentDispatcher, za;
      function bl(C, O, Y) {
        {
          if (za === void 0)
            try {
              throw Error();
            } catch (ye) {
              var J = ye.stack.trim().match(/\n( *(at )?)/);
              za = J && J[1] || "";
            }
          return `
` + za + C;
        }
      }
      var Ei = !1, vo;
      {
        var mo = typeof WeakMap == "function" ? WeakMap : Map;
        vo = new mo();
      }
      function Tl(C, O) {
        if (!C || Ei)
          return "";
        {
          var Y = vo.get(C);
          if (Y !== void 0)
            return Y;
        }
        var J;
        Ei = !0;
        var ye = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var He;
        He = Si.current, Si.current = null, tu();
        try {
          if (O) {
            var Le = function() {
              throw Error();
            };
            if (Object.defineProperty(Le.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Le, []);
              } catch (Nt) {
                J = Nt;
              }
              Reflect.construct(C, [], Le);
            } else {
              try {
                Le.call();
              } catch (Nt) {
                J = Nt;
              }
              C.call(Le.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Nt) {
              J = Nt;
            }
            C();
          }
        } catch (Nt) {
          if (Nt && J && typeof Nt.stack == "string") {
            for (var lt = Nt.stack.split(`
`), wt = J.stack.split(`
`), Vt = lt.length - 1, Wt = wt.length - 1; Vt >= 1 && Wt >= 0 && lt[Vt] !== wt[Wt]; )
              Wt--;
            for (; Vt >= 1 && Wt >= 0; Vt--, Wt--)
              if (lt[Vt] !== wt[Wt]) {
                if (Vt !== 1 || Wt !== 1)
                  do
                    if (Vt--, Wt--, Wt < 0 || lt[Vt] !== wt[Wt]) {
                      var Qt = `
` + lt[Vt].replace(" at new ", " at ");
                      return C.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", C.displayName)), typeof C == "function" && vo.set(C, Qt), Qt;
                    }
                  while (Vt >= 1 && Wt >= 0);
                break;
              }
          }
        } finally {
          Ei = !1, Si.current = He, Yi(), Error.prepareStackTrace = ye;
        }
        var qt = C ? C.displayName || C.name : "", fn = qt ? bl(qt) : "";
        return typeof C == "function" && vo.set(C, fn), fn;
      }
      function ds(C, O, Y) {
        return Tl(C, !1);
      }
      function ps(C) {
        var O = C.prototype;
        return !!(O && O.isReactComponent);
      }
      function Tt(C, O, Y) {
        if (C == null)
          return "";
        if (typeof C == "function")
          return Tl(C, ps(C));
        if (typeof C == "string")
          return bl(C);
        switch (C) {
          case I:
            return bl("Suspense");
          case oe:
            return bl("SuspenseList");
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case F:
              return ds(C.render);
            case K:
              return Tt(C.type, O, Y);
            case X: {
              var J = C, ye = J._payload, He = J._init;
              try {
                return Tt(He(ye), O, Y);
              } catch {
              }
            }
          }
        return "";
      }
      var hs = {}, nu = pe.ReactDebugCurrentFrame;
      function kl(C) {
        if (C) {
          var O = C._owner, Y = Tt(C.type, C._source, O ? O.type : null);
          nu.setExtraStackFrame(Y);
        } else
          nu.setExtraStackFrame(null);
      }
      function vs(C, O, Y, J, ye) {
        {
          var He = Function.call.bind(ha);
          for (var Le in C)
            if (He(C, Le)) {
              var lt = void 0;
              try {
                if (typeof C[Le] != "function") {
                  var wt = Error((J || "React class") + ": " + Y + " type `" + Le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw wt.name = "Invariant Violation", wt;
                }
                lt = C[Le](O, Le, J, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Vt) {
                lt = Vt;
              }
              lt && !(lt instanceof Error) && (kl(ye), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", Y, Le, typeof lt), kl(null)), lt instanceof Error && !(lt.message in hs) && (hs[lt.message] = !0, kl(ye), q("Failed %s type: %s", Y, lt.message), kl(null));
            }
        }
      }
      function Lt(C) {
        if (C) {
          var O = C._owner, Y = Tt(C.type, C._source, O ? O.type : null);
          Gt(Y);
        } else
          Gt(null);
      }
      var ru;
      ru = !1;
      function yo() {
        if (Ge.current) {
          var C = qn(Ge.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
      function ct(C) {
        if (C !== void 0) {
          var O = C.fileName.replace(/^.*[\\\/]/, ""), Y = C.lineNumber;
          return `

Check your code at ` + O + ":" + Y + ".";
        }
        return "";
      }
      function li(C) {
        return C != null ? ct(C.__source) : "";
      }
      var gn = {};
      function Kr(C) {
        var O = yo();
        if (!O) {
          var Y = typeof C == "string" ? C : C.displayName || C.name;
          Y && (O = `

Check the top-level render call using <` + Y + ">.");
        }
        return O;
      }
      function Ua(C, O) {
        if (!(!C._store || C._store.validated || C.key != null)) {
          C._store.validated = !0;
          var Y = Kr(O);
          if (!gn[Y]) {
            gn[Y] = !0;
            var J = "";
            C && C._owner && C._owner !== Ge.current && (J = " It was passed a child from " + qn(C._owner.type) + "."), Lt(C), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, J), Lt(null);
          }
        }
      }
      function _l(C, O) {
        if (typeof C == "object") {
          if (bn(C))
            for (var Y = 0; Y < C.length; Y++) {
              var J = C[Y];
              At(J) && Ua(J, O);
            }
          else if (At(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var ye = Ye(C);
            if (typeof ye == "function" && ye !== C.entries)
              for (var He = ye.call(C), Le; !(Le = He.next()).done; )
                At(Le.value) && Ua(Le.value, O);
          }
        }
      }
      function cn(C) {
        {
          var O = C.type;
          if (O == null || typeof O == "string")
            return;
          var Y;
          if (typeof O == "function")
            Y = O.propTypes;
          else if (typeof O == "object" && (O.$$typeof === F || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          O.$$typeof === K))
            Y = O.propTypes;
          else
            return;
          if (Y) {
            var J = qn(O);
            vs(Y, C.props, "prop", J, C);
          } else if (O.PropTypes !== void 0 && !ru) {
            ru = !0;
            var ye = qn(O);
            q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
          }
          typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Sn(C) {
        {
          for (var O = Object.keys(C.props), Y = 0; Y < O.length; Y++) {
            var J = O[Y];
            if (J !== "children" && J !== "key") {
              Lt(C), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), Lt(null);
              break;
            }
          }
          C.ref !== null && (Lt(C), q("Invalid attribute `ref` supplied to `React.Fragment`."), Lt(null));
        }
      }
      function ms(C, O, Y) {
        var J = ce(C);
        if (!J) {
          var ye = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = li(O);
          He ? ye += He : ye += yo();
          var Le;
          C === null ? Le = "null" : bn(C) ? Le = "array" : C !== void 0 && C.$$typeof === E ? (Le = "<" + (qn(C.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof C, q("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, ye);
        }
        var lt = qe.apply(this, arguments);
        if (lt == null)
          return lt;
        if (J)
          for (var wt = 2; wt < arguments.length; wt++)
            _l(arguments[wt], C);
        return C === w ? Sn(lt) : cn(lt), lt;
      }
      var sr = !1;
      function Xr(C) {
        var O = ms.bind(null, C);
        return O.type = C, sr || (sr = !0, ve("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(O, "type", {
          enumerable: !1,
          get: function() {
            return ve("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: C
            }), C;
          }
        }), O;
      }
      function oi(C, O, Y) {
        for (var J = Bt.apply(this, arguments), ye = 2; ye < arguments.length; ye++)
          _l(arguments[ye], J.type);
        return cn(J), J;
      }
      function au(C, O) {
        var Y = gt.transition;
        gt.transition = {};
        var J = gt.transition;
        gt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          C();
        } finally {
          if (gt.transition = Y, Y === null && J._updatedFibers) {
            var ye = J._updatedFibers.size;
            ye > 10 && ve("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var go = !1, So = null;
      function Ol(C) {
        if (So === null)
          try {
            var O = ("require" + Math.random()).slice(0, 7), Y = p && p[O];
            So = Y.call(p, "timers").setImmediate;
          } catch {
            So = function(ye) {
              go === !1 && (go = !0, typeof MessageChannel > "u" && q("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var He = new MessageChannel();
              He.port1.onmessage = ye, He.port2.postMessage(void 0);
            };
          }
        return So(C);
      }
      var Fa = 0, Wi = !1;
      function iu(C) {
        {
          var O = Fa;
          Fa++, _e.current === null && (_e.current = []);
          var Y = _e.isBatchingLegacy, J;
          try {
            if (_e.isBatchingLegacy = !0, J = C(), !Y && _e.didScheduleLegacyUpdate) {
              var ye = _e.current;
              ye !== null && (_e.didScheduleLegacyUpdate = !1, qi(ye));
            }
          } catch (qt) {
            throw Qi(O), qt;
          } finally {
            _e.isBatchingLegacy = Y;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var He = J, Le = !1, lt = {
              then: function(qt, fn) {
                Le = !0, He.then(function(Nt) {
                  Qi(O), Fa === 0 ? lu(Nt, qt, fn) : qt(Nt);
                }, function(Nt) {
                  Qi(O), fn(Nt);
                });
              }
            };
            return !Wi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Le || (Wi = !0, q("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), lt;
          } else {
            var wt = J;
            if (Qi(O), Fa === 0) {
              var Vt = _e.current;
              Vt !== null && (qi(Vt), _e.current = null);
              var Wt = {
                then: function(qt, fn) {
                  _e.current === null ? (_e.current = [], lu(wt, qt, fn)) : qt(wt);
                }
              };
              return Wt;
            } else {
              var Qt = {
                then: function(qt, fn) {
                  qt(wt);
                }
              };
              return Qt;
            }
          }
        }
      }
      function Qi(C) {
        C !== Fa - 1 && q("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Fa = C;
      }
      function lu(C, O, Y) {
        {
          var J = _e.current;
          if (J !== null)
            try {
              qi(J), Ol(function() {
                J.length === 0 ? (_e.current = null, O(C)) : lu(C, O, Y);
              });
            } catch (ye) {
              Y(ye);
            }
          else
            O(C);
        }
      }
      var wi = !1;
      function qi(C) {
        if (!wi) {
          wi = !0;
          var O = 0;
          try {
            for (; O < C.length; O++) {
              var Y = C[O];
              do
                Y = Y(!0);
              while (Y !== null);
            }
            C.length = 0;
          } catch (J) {
            throw C = C.slice(O + 1), J;
          } finally {
            wi = !1;
          }
        }
      }
      var ou = ms, ys = oi, ui = Xr, uu = {
        map: Ma,
        forEach: co,
        count: Cl,
        toArray: fo,
        only: xl
      };
      c.Children = uu, c.Component = at, c.Fragment = w, c.Profiler = U, c.PureComponent = Rn, c.StrictMode = g, c.Suspense = I, c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pe, c.cloneElement = ys, c.createContext = ai, c.createElement = ou, c.createFactory = ui, c.createRef = Yr, c.forwardRef = Vi, c.isValidElement = At, c.lazy = Ea, c.memo = be, c.startTransition = au, c.unstable_act = iu, c.useCallback = br, c.useContext = xt, c.useDebugValue = qr, c.useDeferredValue = gi, c.useEffect = $n, c.useId = Et, c.useImperativeHandle = ln, c.useInsertionEffect = rn, c.useLayoutEffect = an, c.useMemo = yi, c.useReducer = yt, c.useRef = Ke, c.useState = kt, c.useSyncExternalStore = po, c.useTransition = os, c.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(yh, yh.exports)), yh.exports;
}
var kD = {};
kD.NODE_ENV === "production" ? mE.exports = bD() : mE.exports = TD();
var Ir = mE.exports;
const _D = /* @__PURE__ */ bE(Ir);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wx;
function OD() {
  if (wx) return dh;
  wx = 1;
  var p = Ir, c = Symbol.for("react.element"), f = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, E = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(g, U, $) {
    var z, F = {}, I = null, oe = null;
    $ !== void 0 && (I = "" + $), U.key !== void 0 && (I = "" + U.key), U.ref !== void 0 && (oe = U.ref);
    for (z in U) v.call(U, z) && !x.hasOwnProperty(z) && (F[z] = U[z]);
    if (g && g.defaultProps) for (z in U = g.defaultProps, U) F[z] === void 0 && (F[z] = U[z]);
    return { $$typeof: c, type: g, key: I, ref: oe, props: F, _owner: E.current };
  }
  return dh.Fragment = f, dh.jsx = w, dh.jsxs = w, dh;
}
var ph = {}, Cx;
function DD() {
  if (Cx) return ph;
  Cx = 1;
  var p = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return p.NODE_ENV !== "production" && function() {
    var c = Ir, f = Symbol.for("react.element"), v = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), U = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), X = Symbol.iterator, Ce = "@@iterator";
    function ut(D) {
      if (D === null || typeof D != "object")
        return null;
      var ce = X && D[X] || D[Ce];
      return typeof ce == "function" ? ce : null;
    }
    var ft = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ye(D) {
      {
        for (var ce = arguments.length, be = new Array(ce > 1 ? ce - 1 : 0), Te = 1; Te < ce; Te++)
          be[Te - 1] = arguments[Te];
        Ae("error", D, be);
      }
    }
    function Ae(D, ce, be) {
      {
        var Te = ft.ReactDebugCurrentFrame, xt = Te.getStackAddendum();
        xt !== "" && (ce += "%s", be = be.concat([xt]));
        var kt = be.map(function(yt) {
          return String(yt);
        });
        kt.unshift("Warning: " + ce), Function.prototype.apply.call(console[D], console, kt);
      }
    }
    var gt = !1, _e = !1, Ge = !1, rt = !1, tn = !1, Gt;
    Gt = Symbol.for("react.module.reference");
    function P(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === E || D === w || tn || D === x || D === z || D === F || rt || D === K || gt || _e || Ge || typeof D == "object" && D !== null && (D.$$typeof === oe || D.$$typeof === I || D.$$typeof === g || D.$$typeof === U || D.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === Gt || D.getModuleId !== void 0));
    }
    function re(D, ce, be) {
      var Te = D.displayName;
      if (Te)
        return Te;
      var xt = ce.displayName || ce.name || "";
      return xt !== "" ? be + "(" + xt + ")" : be;
    }
    function me(D) {
      return D.displayName || "Context";
    }
    function ue(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && Ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case E:
          return "Fragment";
        case v:
          return "Portal";
        case w:
          return "Profiler";
        case x:
          return "StrictMode";
        case z:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case U:
            var ce = D;
            return me(ce) + ".Consumer";
          case g:
            var be = D;
            return me(be._context) + ".Provider";
          case $:
            return re(D, D.render, "ForwardRef");
          case I:
            var Te = D.displayName || null;
            return Te !== null ? Te : ue(D.type) || "Memo";
          case oe: {
            var xt = D, kt = xt._payload, yt = xt._init;
            try {
              return ue(yt(kt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Se = Object.assign, pe = 0, ve, q, se, k, Z, xe, Pe;
    function Be() {
    }
    Be.__reactDisabledLog = !0;
    function at() {
      {
        if (pe === 0) {
          ve = console.log, q = console.info, se = console.warn, k = console.error, Z = console.group, xe = console.groupCollapsed, Pe = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: Be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        pe++;
      }
    }
    function et() {
      {
        if (pe--, pe === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Se({}, D, {
              value: ve
            }),
            info: Se({}, D, {
              value: q
            }),
            warn: Se({}, D, {
              value: se
            }),
            error: Se({}, D, {
              value: k
            }),
            group: Se({}, D, {
              value: Z
            }),
            groupCollapsed: Se({}, D, {
              value: xe
            }),
            groupEnd: Se({}, D, {
              value: Pe
            })
          });
        }
        pe < 0 && Ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mt = ft.ReactCurrentDispatcher, st;
    function Ht(D, ce, be) {
      {
        if (st === void 0)
          try {
            throw Error();
          } catch (xt) {
            var Te = xt.stack.trim().match(/\n( *(at )?)/);
            st = Te && Te[1] || "";
          }
        return `
` + st + D;
      }
    }
    var Rn = !1, Wn;
    {
      var Yr = typeof WeakMap == "function" ? WeakMap : Map;
      Wn = new Yr();
    }
    function wr(D, ce) {
      if (!D || Rn)
        return "";
      {
        var be = Wn.get(D);
        if (be !== void 0)
          return be;
      }
      var Te;
      Rn = !0;
      var xt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var kt;
      kt = mt.current, mt.current = null, at();
      try {
        if (ce) {
          var yt = function() {
            throw Error();
          };
          if (Object.defineProperty(yt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(yt, []);
            } catch (qr) {
              Te = qr;
            }
            Reflect.construct(D, [], yt);
          } else {
            try {
              yt.call();
            } catch (qr) {
              Te = qr;
            }
            D.call(yt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qr) {
            Te = qr;
          }
          D();
        }
      } catch (qr) {
        if (qr && Te && typeof qr.stack == "string") {
          for (var Ke = qr.stack.split(`
`), $n = Te.stack.split(`
`), rn = Ke.length - 1, an = $n.length - 1; rn >= 1 && an >= 0 && Ke[rn] !== $n[an]; )
            an--;
          for (; rn >= 1 && an >= 0; rn--, an--)
            if (Ke[rn] !== $n[an]) {
              if (rn !== 1 || an !== 1)
                do
                  if (rn--, an--, an < 0 || Ke[rn] !== $n[an]) {
                    var br = `
` + Ke[rn].replace(" at new ", " at ");
                    return D.displayName && br.includes("<anonymous>") && (br = br.replace("<anonymous>", D.displayName)), typeof D == "function" && Wn.set(D, br), br;
                  }
                while (rn >= 1 && an >= 0);
              break;
            }
        }
      } finally {
        Rn = !1, mt.current = kt, et(), Error.prepareStackTrace = xt;
      }
      var yi = D ? D.displayName || D.name : "", ln = yi ? Ht(yi) : "";
      return typeof D == "function" && Wn.set(D, ln), ln;
    }
    function bn(D, ce, be) {
      return wr(D, !1);
    }
    function or(D) {
      var ce = D.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function Qn(D, ce, be) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return wr(D, or(D));
      if (typeof D == "string")
        return Ht(D);
      switch (D) {
        case z:
          return Ht("Suspense");
        case F:
          return Ht("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case $:
            return bn(D.render);
          case I:
            return Qn(D.type, ce, be);
          case oe: {
            var Te = D, xt = Te._payload, kt = Te._init;
            try {
              return Qn(kt(xt), ce, be);
            } catch {
            }
          }
        }
      return "";
    }
    var Hn = Object.prototype.hasOwnProperty, Bn = {}, Dr = ft.ReactDebugCurrentFrame;
    function Cr(D) {
      if (D) {
        var ce = D._owner, be = Qn(D.type, D._source, ce ? ce.type : null);
        Dr.setExtraStackFrame(be);
      } else
        Dr.setExtraStackFrame(null);
    }
    function qn(D, ce, be, Te, xt) {
      {
        var kt = Function.call.bind(Hn);
        for (var yt in D)
          if (kt(D, yt)) {
            var Ke = void 0;
            try {
              if (typeof D[yt] != "function") {
                var $n = Error((Te || "React class") + ": " + be + " type `" + yt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[yt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $n.name = "Invariant Violation", $n;
              }
              Ke = D[yt](ce, yt, Te, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rn) {
              Ke = rn;
            }
            Ke && !(Ke instanceof Error) && (Cr(xt), Ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", be, yt, typeof Ke), Cr(null)), Ke instanceof Error && !(Ke.message in Bn) && (Bn[Ke.message] = !0, Cr(xt), Ye("Failed %s type: %s", be, Ke.message), Cr(null));
          }
      }
    }
    var ha = Array.isArray;
    function va(D) {
      return ha(D);
    }
    function xr(D) {
      {
        var ce = typeof Symbol == "function" && Symbol.toStringTag, be = ce && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return be;
      }
    }
    function ma(D) {
      try {
        return ur(D), !1;
      } catch {
        return !0;
      }
    }
    function ur(D) {
      return "" + D;
    }
    function Lr(D) {
      if (ma(D))
        return Ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(D)), ur(D);
    }
    var vn = ft.ReactCurrentOwner, ya = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ga, Sa, Re;
    Re = {};
    function qe(D) {
      if (Hn.call(D, "ref")) {
        var ce = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function St(D) {
      if (Hn.call(D, "key")) {
        var ce = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function Bt(D, ce) {
      if (typeof D.ref == "string" && vn.current && ce && vn.current.stateNode !== ce) {
        var be = ue(vn.current.type);
        Re[be] || (Ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ue(vn.current.type), D.ref), Re[be] = !0);
      }
    }
    function At(D, ce) {
      {
        var be = function() {
          ga || (ga = !0, Ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        be.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function Nn(D, ce) {
      {
        var be = function() {
          Sa || (Sa = !0, Ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        be.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var yn = function(D, ce, be, Te, xt, kt, yt) {
      var Ke = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: D,
        key: ce,
        ref: be,
        props: yt,
        // Record the component responsible for creating this element.
        _owner: kt
      };
      return Ke._store = {}, Object.defineProperty(Ke._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ke, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(Ke, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xt
      }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
    };
    function Rr(D, ce, be, Te, xt) {
      {
        var kt, yt = {}, Ke = null, $n = null;
        be !== void 0 && (Lr(be), Ke = "" + be), St(ce) && (Lr(ce.key), Ke = "" + ce.key), qe(ce) && ($n = ce.ref, Bt(ce, xt));
        for (kt in ce)
          Hn.call(ce, kt) && !ya.hasOwnProperty(kt) && (yt[kt] = ce[kt]);
        if (D && D.defaultProps) {
          var rn = D.defaultProps;
          for (kt in rn)
            yt[kt] === void 0 && (yt[kt] = rn[kt]);
        }
        if (Ke || $n) {
          var an = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Ke && At(yt, an), $n && Nn(yt, an);
        }
        return yn(D, Ke, $n, xt, Te, vn.current, yt);
      }
    }
    var Yt = ft.ReactCurrentOwner, er = ft.ReactDebugCurrentFrame;
    function $t(D) {
      if (D) {
        var ce = D._owner, be = Qn(D.type, D._source, ce ? ce.type : null);
        er.setExtraStackFrame(be);
      } else
        er.setExtraStackFrame(null);
    }
    var nn;
    nn = !1;
    function ri(D) {
      return typeof D == "object" && D !== null && D.$$typeof === f;
    }
    function Ma() {
      {
        if (Yt.current) {
          var D = ue(Yt.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function Cl(D) {
      return "";
    }
    var co = {};
    function fo(D) {
      {
        var ce = Ma();
        if (!ce) {
          var be = typeof D == "string" ? D : D.displayName || D.name;
          be && (ce = `

Check the top-level render call using <` + be + ">.");
        }
        return ce;
      }
    }
    function xl(D, ce) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var be = fo(ce);
        if (co[be])
          return;
        co[be] = !0;
        var Te = "";
        D && D._owner && D._owner !== Yt.current && (Te = " It was passed a child from " + ue(D._owner.type) + "."), $t(D), Ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Te), $t(null);
      }
    }
    function ai(D, ce) {
      {
        if (typeof D != "object")
          return;
        if (va(D))
          for (var be = 0; be < D.length; be++) {
            var Te = D[be];
            ri(Te) && xl(Te, ce);
          }
        else if (ri(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var xt = ut(D);
          if (typeof xt == "function" && xt !== D.entries)
            for (var kt = xt.call(D), yt; !(yt = kt.next()).done; )
              ri(yt.value) && xl(yt.value, ce);
        }
      }
    }
    function ii(D) {
      {
        var ce = D.type;
        if (ce == null || typeof ce == "string")
          return;
        var be;
        if (typeof ce == "function")
          be = ce.propTypes;
        else if (typeof ce == "object" && (ce.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ce.$$typeof === I))
          be = ce.propTypes;
        else
          return;
        if (be) {
          var Te = ue(ce);
          qn(be, D.props, "prop", Te, D);
        } else if (ce.PropTypes !== void 0 && !nn) {
          nn = !0;
          var xt = ue(ce);
          Ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xt || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && Ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Aa(D) {
      {
        for (var ce = Object.keys(D.props), be = 0; be < ce.length; be++) {
          var Te = ce[be];
          if (Te !== "children" && Te !== "key") {
            $t(D), Ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), $t(null);
            break;
          }
        }
        D.ref !== null && ($t(D), Ye("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    function $i(D, ce, be, Te, xt, kt) {
      {
        var yt = P(D);
        if (!yt) {
          var Ke = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ke += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $n = Cl();
          $n ? Ke += $n : Ke += Ma();
          var rn;
          D === null ? rn = "null" : va(D) ? rn = "array" : D !== void 0 && D.$$typeof === f ? (rn = "<" + (ue(D.type) || "Unknown") + " />", Ke = " Did you accidentally export a JSX literal instead of a component?") : rn = typeof D, Ye("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rn, Ke);
        }
        var an = Rr(D, ce, be, xt, kt);
        if (an == null)
          return an;
        if (yt) {
          var br = ce.children;
          if (br !== void 0)
            if (Te)
              if (va(br)) {
                for (var yi = 0; yi < br.length; yi++)
                  ai(br[yi], D);
                Object.freeze && Object.freeze(br);
              } else
                Ye("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ai(br, D);
        }
        return D === E ? Aa(an) : ii(an), an;
      }
    }
    function Wr(D, ce, be) {
      return $i(D, ce, be, !0);
    }
    function Qr(D, ce, be) {
      return $i(D, ce, be, !1);
    }
    var Ea = Qr, Vi = Wr;
    ph.Fragment = E, ph.jsx = Ea, ph.jsxs = Vi;
  }(), ph;
}
var LD = {};
LD.NODE_ENV === "production" ? vE.exports = OD() : vE.exports = DD();
var Ct = vE.exports, gh = {}, yE = { exports: {} }, ti = {}, gy = { exports: {} }, lE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xx;
function ND() {
  return xx || (xx = 1, function(p) {
    function c(q, se) {
      var k = q.length;
      q.push(se);
      e: for (; 0 < k; ) {
        var Z = k - 1 >>> 1, xe = q[Z];
        if (0 < E(xe, se)) q[Z] = se, q[k] = xe, k = Z;
        else break e;
      }
    }
    function f(q) {
      return q.length === 0 ? null : q[0];
    }
    function v(q) {
      if (q.length === 0) return null;
      var se = q[0], k = q.pop();
      if (k !== se) {
        q[0] = k;
        e: for (var Z = 0, xe = q.length, Pe = xe >>> 1; Z < Pe; ) {
          var Be = 2 * (Z + 1) - 1, at = q[Be], et = Be + 1, mt = q[et];
          if (0 > E(at, k)) et < xe && 0 > E(mt, at) ? (q[Z] = mt, q[et] = k, Z = et) : (q[Z] = at, q[Be] = k, Z = Be);
          else if (et < xe && 0 > E(mt, k)) q[Z] = mt, q[et] = k, Z = et;
          else break e;
        }
      }
      return se;
    }
    function E(q, se) {
      var k = q.sortIndex - se.sortIndex;
      return k !== 0 ? k : q.id - se.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      p.unstable_now = function() {
        return x.now();
      };
    } else {
      var w = Date, g = w.now();
      p.unstable_now = function() {
        return w.now() - g;
      };
    }
    var U = [], $ = [], z = 1, F = null, I = 3, oe = !1, K = !1, X = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, ut = typeof clearTimeout == "function" ? clearTimeout : null, ft = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ye(q) {
      for (var se = f($); se !== null; ) {
        if (se.callback === null) v($);
        else if (se.startTime <= q) v($), se.sortIndex = se.expirationTime, c(U, se);
        else break;
        se = f($);
      }
    }
    function Ae(q) {
      if (X = !1, Ye(q), !K) if (f(U) !== null) K = !0, pe(gt);
      else {
        var se = f($);
        se !== null && ve(Ae, se.startTime - q);
      }
    }
    function gt(q, se) {
      K = !1, X && (X = !1, ut(rt), rt = -1), oe = !0;
      var k = I;
      try {
        for (Ye(se), F = f(U); F !== null && (!(F.expirationTime > se) || q && !P()); ) {
          var Z = F.callback;
          if (typeof Z == "function") {
            F.callback = null, I = F.priorityLevel;
            var xe = Z(F.expirationTime <= se);
            se = p.unstable_now(), typeof xe == "function" ? F.callback = xe : F === f(U) && v(U), Ye(se);
          } else v(U);
          F = f(U);
        }
        if (F !== null) var Pe = !0;
        else {
          var Be = f($);
          Be !== null && ve(Ae, Be.startTime - se), Pe = !1;
        }
        return Pe;
      } finally {
        F = null, I = k, oe = !1;
      }
    }
    var _e = !1, Ge = null, rt = -1, tn = 5, Gt = -1;
    function P() {
      return !(p.unstable_now() - Gt < tn);
    }
    function re() {
      if (Ge !== null) {
        var q = p.unstable_now();
        Gt = q;
        var se = !0;
        try {
          se = Ge(!0, q);
        } finally {
          se ? me() : (_e = !1, Ge = null);
        }
      } else _e = !1;
    }
    var me;
    if (typeof ft == "function") me = function() {
      ft(re);
    };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), Se = ue.port2;
      ue.port1.onmessage = re, me = function() {
        Se.postMessage(null);
      };
    } else me = function() {
      Ce(re, 0);
    };
    function pe(q) {
      Ge = q, _e || (_e = !0, me());
    }
    function ve(q, se) {
      rt = Ce(function() {
        q(p.unstable_now());
      }, se);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, p.unstable_continueExecution = function() {
      K || oe || (K = !0, pe(gt));
    }, p.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : tn = 0 < q ? Math.floor(1e3 / q) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, p.unstable_getFirstCallbackNode = function() {
      return f(U);
    }, p.unstable_next = function(q) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var se = 3;
          break;
        default:
          se = I;
      }
      var k = I;
      I = se;
      try {
        return q();
      } finally {
        I = k;
      }
    }, p.unstable_pauseExecution = function() {
    }, p.unstable_requestPaint = function() {
    }, p.unstable_runWithPriority = function(q, se) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var k = I;
      I = q;
      try {
        return se();
      } finally {
        I = k;
      }
    }, p.unstable_scheduleCallback = function(q, se, k) {
      var Z = p.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? Z + k : Z) : k = Z, q) {
        case 1:
          var xe = -1;
          break;
        case 2:
          xe = 250;
          break;
        case 5:
          xe = 1073741823;
          break;
        case 4:
          xe = 1e4;
          break;
        default:
          xe = 5e3;
      }
      return xe = k + xe, q = { id: z++, callback: se, priorityLevel: q, startTime: k, expirationTime: xe, sortIndex: -1 }, k > Z ? (q.sortIndex = k, c($, q), f(U) === null && q === f($) && (X ? (ut(rt), rt = -1) : X = !0, ve(Ae, k - Z))) : (q.sortIndex = xe, c(U, q), K || oe || (K = !0, pe(gt))), q;
    }, p.unstable_shouldYield = P, p.unstable_wrapCallback = function(q) {
      var se = I;
      return function() {
        var k = I;
        I = se;
        try {
          return q.apply(this, arguments);
        } finally {
          I = k;
        }
      };
    };
  }(lE)), lE;
}
var oE = {}, Rx;
function MD() {
  return Rx || (Rx = 1, function(p) {
    var c = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    c.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = !1, v = !1, E = 5;
      function x(Re, qe) {
        var St = Re.length;
        Re.push(qe), U(Re, qe, St);
      }
      function w(Re) {
        return Re.length === 0 ? null : Re[0];
      }
      function g(Re) {
        if (Re.length === 0)
          return null;
        var qe = Re[0], St = Re.pop();
        return St !== qe && (Re[0] = St, $(Re, St, 0)), qe;
      }
      function U(Re, qe, St) {
        for (var Bt = St; Bt > 0; ) {
          var At = Bt - 1 >>> 1, Nn = Re[At];
          if (z(Nn, qe) > 0)
            Re[At] = qe, Re[Bt] = Nn, Bt = At;
          else
            return;
        }
      }
      function $(Re, qe, St) {
        for (var Bt = St, At = Re.length, Nn = At >>> 1; Bt < Nn; ) {
          var yn = (Bt + 1) * 2 - 1, Rr = Re[yn], Yt = yn + 1, er = Re[Yt];
          if (z(Rr, qe) < 0)
            Yt < At && z(er, Rr) < 0 ? (Re[Bt] = er, Re[Yt] = qe, Bt = Yt) : (Re[Bt] = Rr, Re[yn] = qe, Bt = yn);
          else if (Yt < At && z(er, qe) < 0)
            Re[Bt] = er, Re[Yt] = qe, Bt = Yt;
          else
            return;
        }
      }
      function z(Re, qe) {
        var St = Re.sortIndex - qe.sortIndex;
        return St !== 0 ? St : Re.id - qe.id;
      }
      var F = 1, I = 2, oe = 3, K = 4, X = 5;
      function Ce(Re, qe) {
      }
      var ut = typeof performance == "object" && typeof performance.now == "function";
      if (ut) {
        var ft = performance;
        p.unstable_now = function() {
          return ft.now();
        };
      } else {
        var Ye = Date, Ae = Ye.now();
        p.unstable_now = function() {
          return Ye.now() - Ae;
        };
      }
      var gt = 1073741823, _e = -1, Ge = 250, rt = 5e3, tn = 1e4, Gt = gt, P = [], re = [], me = 1, ue = null, Se = oe, pe = !1, ve = !1, q = !1, se = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function xe(Re) {
        for (var qe = w(re); qe !== null; ) {
          if (qe.callback === null)
            g(re);
          else if (qe.startTime <= Re)
            g(re), qe.sortIndex = qe.expirationTime, x(P, qe);
          else
            return;
          qe = w(re);
        }
      }
      function Pe(Re) {
        if (q = !1, xe(Re), !ve)
          if (w(P) !== null)
            ve = !0, Lr(Be);
          else {
            var qe = w(re);
            qe !== null && vn(Pe, qe.startTime - Re);
          }
      }
      function Be(Re, qe) {
        ve = !1, q && (q = !1, ya()), pe = !0;
        var St = Se;
        try {
          var Bt;
          if (!v) return at(Re, qe);
        } finally {
          ue = null, Se = St, pe = !1;
        }
      }
      function at(Re, qe) {
        var St = qe;
        for (xe(St), ue = w(P); ue !== null && !f && !(ue.expirationTime > St && (!Re || Cr())); ) {
          var Bt = ue.callback;
          if (typeof Bt == "function") {
            ue.callback = null, Se = ue.priorityLevel;
            var At = ue.expirationTime <= St, Nn = Bt(At);
            St = p.unstable_now(), typeof Nn == "function" ? ue.callback = Nn : ue === w(P) && g(P), xe(St);
          } else
            g(P);
          ue = w(P);
        }
        if (ue !== null)
          return !0;
        var yn = w(re);
        return yn !== null && vn(Pe, yn.startTime - St), !1;
      }
      function et(Re, qe) {
        switch (Re) {
          case F:
          case I:
          case oe:
          case K:
          case X:
            break;
          default:
            Re = oe;
        }
        var St = Se;
        Se = Re;
        try {
          return qe();
        } finally {
          Se = St;
        }
      }
      function mt(Re) {
        var qe;
        switch (Se) {
          case F:
          case I:
          case oe:
            qe = oe;
            break;
          default:
            qe = Se;
            break;
        }
        var St = Se;
        Se = qe;
        try {
          return Re();
        } finally {
          Se = St;
        }
      }
      function st(Re) {
        var qe = Se;
        return function() {
          var St = Se;
          Se = qe;
          try {
            return Re.apply(this, arguments);
          } finally {
            Se = St;
          }
        };
      }
      function Ht(Re, qe, St) {
        var Bt = p.unstable_now(), At;
        if (typeof St == "object" && St !== null) {
          var Nn = St.delay;
          typeof Nn == "number" && Nn > 0 ? At = Bt + Nn : At = Bt;
        } else
          At = Bt;
        var yn;
        switch (Re) {
          case F:
            yn = _e;
            break;
          case I:
            yn = Ge;
            break;
          case X:
            yn = Gt;
            break;
          case K:
            yn = tn;
            break;
          case oe:
          default:
            yn = rt;
            break;
        }
        var Rr = At + yn, Yt = {
          id: me++,
          callback: qe,
          priorityLevel: Re,
          startTime: At,
          expirationTime: Rr,
          sortIndex: -1
        };
        return At > Bt ? (Yt.sortIndex = At, x(re, Yt), w(P) === null && Yt === w(re) && (q ? ya() : q = !0, vn(Pe, At - Bt))) : (Yt.sortIndex = Rr, x(P, Yt), !ve && !pe && (ve = !0, Lr(Be))), Yt;
      }
      function Rn() {
      }
      function Wn() {
        !ve && !pe && (ve = !0, Lr(Be));
      }
      function Yr() {
        return w(P);
      }
      function wr(Re) {
        Re.callback = null;
      }
      function bn() {
        return Se;
      }
      var or = !1, Qn = null, Hn = -1, Bn = E, Dr = -1;
      function Cr() {
        var Re = p.unstable_now() - Dr;
        return !(Re < Bn);
      }
      function qn() {
      }
      function ha(Re) {
        if (Re < 0 || Re > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Re > 0 ? Bn = Math.floor(1e3 / Re) : Bn = E;
      }
      var va = function() {
        if (Qn !== null) {
          var Re = p.unstable_now();
          Dr = Re;
          var qe = !0, St = !0;
          try {
            St = Qn(qe, Re);
          } finally {
            St ? xr() : (or = !1, Qn = null);
          }
        } else
          or = !1;
      }, xr;
      if (typeof Z == "function")
        xr = function() {
          Z(va);
        };
      else if (typeof MessageChannel < "u") {
        var ma = new MessageChannel(), ur = ma.port2;
        ma.port1.onmessage = va, xr = function() {
          ur.postMessage(null);
        };
      } else
        xr = function() {
          se(va, 0);
        };
      function Lr(Re) {
        Qn = Re, or || (or = !0, xr());
      }
      function vn(Re, qe) {
        Hn = se(function() {
          Re(p.unstable_now());
        }, qe);
      }
      function ya() {
        k(Hn), Hn = -1;
      }
      var ga = qn, Sa = null;
      p.unstable_IdlePriority = X, p.unstable_ImmediatePriority = F, p.unstable_LowPriority = K, p.unstable_NormalPriority = oe, p.unstable_Profiling = Sa, p.unstable_UserBlockingPriority = I, p.unstable_cancelCallback = wr, p.unstable_continueExecution = Wn, p.unstable_forceFrameRate = ha, p.unstable_getCurrentPriorityLevel = bn, p.unstable_getFirstCallbackNode = Yr, p.unstable_next = mt, p.unstable_pauseExecution = Rn, p.unstable_requestPaint = ga, p.unstable_runWithPriority = et, p.unstable_scheduleCallback = Ht, p.unstable_shouldYield = Cr, p.unstable_wrapCallback = st, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(oE)), oE;
}
var bx;
function Kx() {
  if (bx) return gy.exports;
  bx = 1;
  var p = {};
  return p.NODE_ENV === "production" ? gy.exports = ND() : gy.exports = MD(), gy.exports;
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
var Tx;
function AD() {
  if (Tx) return ti;
  Tx = 1;
  var p = Ir, c = Kx();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var v = /* @__PURE__ */ new Set(), E = {};
  function x(n, r) {
    w(n, r), w(n + "Capture", r);
  }
  function w(n, r) {
    for (E[n] = r, n = 0; n < r.length; n++) v.add(r[n]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = Object.prototype.hasOwnProperty, $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, F = {};
  function I(n) {
    return U.call(F, n) ? !0 : U.call(z, n) ? !1 : $.test(n) ? F[n] = !0 : (z[n] = !0, !1);
  }
  function oe(n, r, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function K(n, r, l, u) {
    if (r === null || typeof r > "u" || oe(n, r, l, u)) return !0;
    if (u) return !1;
    if (l !== null) switch (l.type) {
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
  function X(n, r, l, u, d, m, R) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = d, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = R;
  }
  var Ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ce[n] = new X(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ce[r] = new X(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ce[n] = new X(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ce[n] = new X(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ce[n] = new X(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ce[n] = new X(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ce[n] = new X(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ce[n] = new X(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ce[n] = new X(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ut = /[\-:]([a-z])/g;
  function ft(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ut,
      ft
    );
    Ce[r] = new X(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ut, ft);
    Ce[r] = new X(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ut, ft);
    Ce[r] = new X(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ce[n] = new X(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ce.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ce[n] = new X(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ye(n, r, l, u) {
    var d = Ce.hasOwnProperty(r) ? Ce[r] : null;
    (d !== null ? d.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (K(r, l, d, u) && (l = null), u || d === null ? I(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : d.mustUseProperty ? n[d.propertyName] = l === null ? d.type === 3 ? !1 : "" : l : (r = d.attributeName, u = d.attributeNamespace, l === null ? n.removeAttribute(r) : (d = d.type, l = d === 3 || d === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Ae = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gt = Symbol.for("react.element"), _e = Symbol.for("react.portal"), Ge = Symbol.for("react.fragment"), rt = Symbol.for("react.strict_mode"), tn = Symbol.for("react.profiler"), Gt = Symbol.for("react.provider"), P = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), Se = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ve = Symbol.for("react.offscreen"), q = Symbol.iterator;
  function se(n) {
    return n === null || typeof n != "object" ? null : (n = q && n[q] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var k = Object.assign, Z;
  function xe(n) {
    if (Z === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      Z = r && r[1] || "";
    }
    return `
` + Z + n;
  }
  var Pe = !1;
  function Be(n, r) {
    if (!n || Pe) return "";
    Pe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (G) {
          var u = G;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (G) {
          u = G;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (G) {
          u = G;
        }
        n();
      }
    } catch (G) {
      if (G && u && typeof G.stack == "string") {
        for (var d = G.stack.split(`
`), m = u.stack.split(`
`), R = d.length - 1, _ = m.length - 1; 1 <= R && 0 <= _ && d[R] !== m[_]; ) _--;
        for (; 1 <= R && 0 <= _; R--, _--) if (d[R] !== m[_]) {
          if (R !== 1 || _ !== 1)
            do
              if (R--, _--, 0 > _ || d[R] !== m[_]) {
                var L = `
` + d[R].replace(" at new ", " at ");
                return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
              }
            while (1 <= R && 0 <= _);
          break;
        }
      }
    } finally {
      Pe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? xe(n) : "";
  }
  function at(n) {
    switch (n.tag) {
      case 5:
        return xe(n.type);
      case 16:
        return xe("Lazy");
      case 13:
        return xe("Suspense");
      case 19:
        return xe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Be(n.type, !1), n;
      case 11:
        return n = Be(n.type.render, !1), n;
      case 1:
        return n = Be(n.type, !0), n;
      default:
        return "";
    }
  }
  function et(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ge:
        return "Fragment";
      case _e:
        return "Portal";
      case tn:
        return "Profiler";
      case rt:
        return "StrictMode";
      case me:
        return "Suspense";
      case ue:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case P:
        return (n.displayName || "Context") + ".Consumer";
      case Gt:
        return (n._context.displayName || "Context") + ".Provider";
      case re:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Se:
        return r = n.displayName || null, r !== null ? r : et(n.type) || "Memo";
      case pe:
        r = n._payload, n = n._init;
        try {
          return et(n(r));
        } catch {
        }
    }
    return null;
  }
  function mt(n) {
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
        return r === rt ? "StrictMode" : "Mode";
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
  function st(n) {
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
  function Ht(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Rn(n) {
    var r = Ht(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var d = l.get, m = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(R) {
        u = "" + R, m.call(this, R);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(R) {
        u = "" + R;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Wn(n) {
    n._valueTracker || (n._valueTracker = Rn(n));
  }
  function Yr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = Ht(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function wr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function bn(n, r) {
    var l = r.checked;
    return k({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function or(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = st(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Qn(n, r) {
    r = r.checked, r != null && Ye(n, "checked", r, !1);
  }
  function Hn(n, r) {
    Qn(n, r);
    var l = st(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Dr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Dr(n, r.type, st(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Bn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Dr(n, r, l) {
    (r !== "number" || wr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Cr = Array.isArray;
  function qn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var d = 0; d < l.length; d++) r["$" + l[d]] = !0;
      for (l = 0; l < n.length; l++) d = r.hasOwnProperty("$" + n[l].value), n[l].selected !== d && (n[l].selected = d), d && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + st(l), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === l) {
          n[d].selected = !0, u && (n[d].defaultSelected = !0);
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ha(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(f(91));
    return k({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function va(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(f(92));
        if (Cr(l)) {
          if (1 < l.length) throw Error(f(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: st(l) };
  }
  function xr(n, r) {
    var l = st(r.value), u = st(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function ma(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ur(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Lr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ur(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var vn, ya = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, d);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (vn = vn || document.createElement("div"), vn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = vn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ga(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Sa = {
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
  }, Re = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Sa).forEach(function(n) {
    Re.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Sa[r] = Sa[n];
    });
  });
  function qe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Sa.hasOwnProperty(n) && Sa[n] ? ("" + r).trim() : r + "px";
  }
  function St(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, d = qe(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, d) : n[l] = d;
    }
  }
  var Bt = k({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function At(n, r) {
    if (r) {
      if (Bt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(f(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(f(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(f(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(f(62));
    }
  }
  function Nn(n, r) {
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
  var yn = null;
  function Rr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, er = null, $t = null;
  function nn(n) {
    if (n = xi(n)) {
      if (typeof Yt != "function") throw Error(f(280));
      var r = n.stateNode;
      r && (r = Hc(r), Yt(n.stateNode, n.type, r));
    }
  }
  function ri(n) {
    er ? $t ? $t.push(n) : $t = [n] : er = n;
  }
  function Ma() {
    if (er) {
      var n = er, r = $t;
      if ($t = er = null, nn(n), r) for (n = 0; n < r.length; n++) nn(r[n]);
    }
  }
  function Cl(n, r) {
    return n(r);
  }
  function co() {
  }
  var fo = !1;
  function xl(n, r, l) {
    if (fo) return n(r, l);
    fo = !0;
    try {
      return Cl(n, r, l);
    } finally {
      fo = !1, (er !== null || $t !== null) && (co(), Ma());
    }
  }
  function ai(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = Hc(l);
    if (u === null) return null;
    l = u[r];
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
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(f(231, r, typeof l));
    return l;
  }
  var ii = !1;
  if (g) try {
    var Aa = {};
    Object.defineProperty(Aa, "passive", { get: function() {
      ii = !0;
    } }), window.addEventListener("test", Aa, Aa), window.removeEventListener("test", Aa, Aa);
  } catch {
    ii = !1;
  }
  function $i(n, r, l, u, d, m, R, _, L) {
    var G = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, G);
    } catch (fe) {
      this.onError(fe);
    }
  }
  var Wr = !1, Qr = null, Ea = !1, Vi = null, D = { onError: function(n) {
    Wr = !0, Qr = n;
  } };
  function ce(n, r, l, u, d, m, R, _, L) {
    Wr = !1, Qr = null, $i.apply(D, arguments);
  }
  function be(n, r, l, u, d, m, R, _, L) {
    if (ce.apply(this, arguments), Wr) {
      if (Wr) {
        var G = Qr;
        Wr = !1, Qr = null;
      } else throw Error(f(198));
      Ea || (Ea = !0, Vi = G);
    }
  }
  function Te(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function xt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function kt(n) {
    if (Te(n) !== n) throw Error(f(188));
  }
  function yt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Te(n), r === null) throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var d = l.return;
      if (d === null) break;
      var m = d.alternate;
      if (m === null) {
        if (u = d.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (d.child === m.child) {
        for (m = d.child; m; ) {
          if (m === l) return kt(d), n;
          if (m === u) return kt(d), r;
          m = m.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== u.return) l = d, u = m;
      else {
        for (var R = !1, _ = d.child; _; ) {
          if (_ === l) {
            R = !0, l = d, u = m;
            break;
          }
          if (_ === u) {
            R = !0, u = d, l = m;
            break;
          }
          _ = _.sibling;
        }
        if (!R) {
          for (_ = m.child; _; ) {
            if (_ === l) {
              R = !0, l = m, u = d;
              break;
            }
            if (_ === u) {
              R = !0, u = m, l = d;
              break;
            }
            _ = _.sibling;
          }
          if (!R) throw Error(f(189));
        }
      }
      if (l.alternate !== u) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ke(n) {
    return n = yt(n), n !== null ? $n(n) : null;
  }
  function $n(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = $n(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var rn = c.unstable_scheduleCallback, an = c.unstable_cancelCallback, br = c.unstable_shouldYield, yi = c.unstable_requestPaint, ln = c.unstable_now, qr = c.unstable_getCurrentPriorityLevel, os = c.unstable_ImmediatePriority, gi = c.unstable_UserBlockingPriority, Et = c.unstable_NormalPriority, po = c.unstable_LowPriority, Ii = c.unstable_IdlePriority, Rl = null, Gr = null;
  function us(n) {
    if (Gr && typeof Gr.onCommitFiberRoot == "function") try {
      Gr.onCommitFiberRoot(Rl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : fs, ss = Math.log, cs = Math.LN2;
  function fs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ss(n) / cs | 0) | 0;
  }
  var ho = 64, tu = 4194304;
  function Yi(n) {
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
  function Si(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var u = 0, d = n.suspendedLanes, m = n.pingedLanes, R = l & 268435455;
    if (R !== 0) {
      var _ = R & ~d;
      _ !== 0 ? u = Yi(_) : (m &= R, m !== 0 && (u = Yi(m)));
    } else R = l & ~d, R !== 0 ? u = Yi(R) : m !== 0 && (u = Yi(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & d) && (d = u & -u, m = r & -r, d >= m || d === 16 && (m & 4194240) !== 0)) return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - Nr(r), d = 1 << l, u |= n[l], r &= ~d;
    return u;
  }
  function za(n, r) {
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
  function bl(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, d = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var R = 31 - Nr(m), _ = 1 << R, L = d[R];
      L === -1 ? (!(_ & l) || _ & u) && (d[R] = za(_, r)) : L <= r && (n.expiredLanes |= _), m &= ~_;
    }
  }
  function Ei(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function vo() {
    var n = ho;
    return ho <<= 1, !(ho & 4194240) && (ho = 64), n;
  }
  function mo(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Tl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = l;
  }
  function ds(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var d = 31 - Nr(l), m = 1 << d;
      r[d] = 0, u[d] = -1, n[d] = -1, l &= ~m;
    }
  }
  function ps(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Nr(l), d = 1 << u;
      d & r | n[u] & r && (n[u] |= r), l &= ~d;
    }
  }
  var Tt = 0;
  function hs(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nu, kl, vs, Lt, ru, yo = !1, ct = [], li = null, gn = null, Kr = null, Ua = /* @__PURE__ */ new Map(), _l = /* @__PURE__ */ new Map(), cn = [], Sn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ms(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        li = null;
        break;
      case "dragenter":
      case "dragleave":
        gn = null;
        break;
      case "mouseover":
      case "mouseout":
        Kr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ua.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _l.delete(r.pointerId);
    }
  }
  function sr(n, r, l, u, d, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: m, targetContainers: [d] }, r !== null && (r = xi(r), r !== null && kl(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function Xr(n, r, l, u, d) {
    switch (r) {
      case "focusin":
        return li = sr(li, n, r, l, u, d), !0;
      case "dragenter":
        return gn = sr(gn, n, r, l, u, d), !0;
      case "mouseover":
        return Kr = sr(Kr, n, r, l, u, d), !0;
      case "pointerover":
        var m = d.pointerId;
        return Ua.set(m, sr(Ua.get(m) || null, n, r, l, u, d)), !0;
      case "gotpointercapture":
        return m = d.pointerId, _l.set(m, sr(_l.get(m) || null, n, r, l, u, d)), !0;
    }
    return !1;
  }
  function oi(n) {
    var r = nl(n.target);
    if (r !== null) {
      var l = Te(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = xt(l), r !== null) {
            n.blockedOn = r, ru(n.priority, function() {
              vs(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function au(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ou(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        yn = u, l.target.dispatchEvent(u), yn = null;
      } else return r = xi(l), r !== null && kl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function go(n, r, l) {
    au(n) && l.delete(r);
  }
  function So() {
    yo = !1, li !== null && au(li) && (li = null), gn !== null && au(gn) && (gn = null), Kr !== null && au(Kr) && (Kr = null), Ua.forEach(go), _l.forEach(go);
  }
  function Ol(n, r) {
    n.blockedOn === r && (n.blockedOn = null, yo || (yo = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, So)));
  }
  function Fa(n) {
    function r(d) {
      return Ol(d, n);
    }
    if (0 < ct.length) {
      Ol(ct[0], n);
      for (var l = 1; l < ct.length; l++) {
        var u = ct[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (li !== null && Ol(li, n), gn !== null && Ol(gn, n), Kr !== null && Ol(Kr, n), Ua.forEach(r), _l.forEach(r), l = 0; l < cn.length; l++) u = cn[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < cn.length && (l = cn[0], l.blockedOn === null); ) oi(l), l.blockedOn === null && cn.shift();
  }
  var Wi = Ae.ReactCurrentBatchConfig, iu = !0;
  function Qi(n, r, l, u) {
    var d = Tt, m = Wi.transition;
    Wi.transition = null;
    try {
      Tt = 1, wi(n, r, l, u);
    } finally {
      Tt = d, Wi.transition = m;
    }
  }
  function lu(n, r, l, u) {
    var d = Tt, m = Wi.transition;
    Wi.transition = null;
    try {
      Tt = 4, wi(n, r, l, u);
    } finally {
      Tt = d, Wi.transition = m;
    }
  }
  function wi(n, r, l, u) {
    if (iu) {
      var d = ou(n, r, l, u);
      if (d === null) kd(n, r, u, qi, l), ms(n, u);
      else if (Xr(d, n, r, l, u)) u.stopPropagation();
      else if (ms(n, u), r & 4 && -1 < Sn.indexOf(n)) {
        for (; d !== null; ) {
          var m = xi(d);
          if (m !== null && nu(m), m = ou(n, r, l, u), m === null && kd(n, r, u, qi, l), m === d) break;
          d = m;
        }
        d !== null && u.stopPropagation();
      } else kd(n, r, u, null, l);
    }
  }
  var qi = null;
  function ou(n, r, l, u) {
    if (qi = null, n = Rr(u), n = nl(n), n !== null) if (r = Te(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = xt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return qi = n, null;
  }
  function ys(n) {
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
        switch (qr()) {
          case os:
            return 1;
          case gi:
            return 4;
          case Et:
          case po:
            return 16;
          case Ii:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ui = null, uu = null, C = null;
  function O() {
    if (C) return C;
    var n, r = uu, l = r.length, u, d = "value" in ui ? ui.value : ui.textContent, m = d.length;
    for (n = 0; n < l && r[n] === d[n]; n++) ;
    var R = l - n;
    for (u = 1; u <= R && r[l - u] === d[m - u]; u++) ;
    return C = d.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Y(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function J() {
    return !0;
  }
  function ye() {
    return !1;
  }
  function He(n) {
    function r(l, u, d, m, R) {
      this._reactName = l, this._targetInst = d, this.type = u, this.nativeEvent = m, this.target = R, this.currentTarget = null;
      for (var _ in n) n.hasOwnProperty(_) && (l = n[_], this[_] = l ? l(m) : m[_]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? J : ye, this.isPropagationStopped = ye, this;
    }
    return k(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = J);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = J);
    }, persist: function() {
    }, isPersistent: J }), r;
  }
  var Le = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, lt = He(Le), wt = k({}, Le, { view: 0, detail: 0 }), Vt = He(wt), Wt, Qt, qt, fn = k({}, wt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Dc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== qt && (qt && n.type === "mousemove" ? (Wt = n.screenX - qt.screenX, Qt = n.screenY - qt.screenY) : Qt = Wt = 0, qt = n), Wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Qt;
  } }), Nt = He(fn), Dl = k({}, fn, { dataTransfer: 0 }), su = He(Dl), gs = k({}, wt, { relatedTarget: 0 }), Ss = He(gs), Gi = k({}, Le, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Es = He(Gi), ws = k({}, Le, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), vd = He(ws), zy = k({}, Le, { data: 0 }), _h = He(zy), Oh = {
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
  }, md = {
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
  }, Dh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Dh[n]) ? !!r[n] : !1;
  }
  function Dc() {
    return Lh;
  }
  var Uy = k({}, wt, { key: function(n) {
    if (n.key) {
      var r = Oh[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Y(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? md[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Dc, charCode: function(n) {
    return n.type === "keypress" ? Y(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Y(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ki = He(Uy), Fy = k({}, fn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lc = He(Fy), yd = k({}, wt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Dc }), gd = He(yd), jy = k({}, Le, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Nc = He(jy), Nh = k({}, fn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zr = He(Nh), Xi = [9, 13, 27, 32], Tn = g && "CompositionEvent" in window, wa = null;
  g && "documentMode" in document && (wa = document.documentMode);
  var Sd = g && "TextEvent" in window && !wa, Cs = g && (!Tn || wa && 8 < wa && 11 >= wa), Mh = " ", cu = !1;
  function Ah(n, r) {
    switch (n) {
      case "keyup":
        return Xi.indexOf(r.keyCode) !== -1;
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
  function zh(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Ll = !1;
  function Py(n, r) {
    switch (n) {
      case "compositionend":
        return zh(r);
      case "keypress":
        return r.which !== 32 ? null : (cu = !0, Mh);
      case "textInput":
        return n = r.data, n === Mh && cu ? null : n;
      default:
        return null;
    }
  }
  function Hy(n, r) {
    if (Ll) return n === "compositionend" || !Tn && Ah(n, r) ? (n = O(), C = uu = ui = null, Ll = !1, n) : null;
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
        return Cs && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var By = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ed(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!By[n.type] : r === "textarea";
  }
  function Uh(n, r, l, u) {
    ri(u), r = jc(r, "onChange"), 0 < r.length && (l = new lt("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var xs = null, Rs = null;
  function Fh(n) {
    Jh(n, 0);
  }
  function Zi(n) {
    var r = hu(n);
    if (Yr(r)) return n;
  }
  function wd(n, r) {
    if (n === "change") return r;
  }
  var Cd = !1;
  if (g) {
    var Mc;
    if (g) {
      var xd = "oninput" in document;
      if (!xd) {
        var jh = document.createElement("div");
        jh.setAttribute("oninput", "return;"), xd = typeof jh.oninput == "function";
      }
      Mc = xd;
    } else Mc = !1;
    Cd = Mc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ph() {
    xs && (xs.detachEvent("onpropertychange", Hh), Rs = xs = null);
  }
  function Hh(n) {
    if (n.propertyName === "value" && Zi(Rs)) {
      var r = [];
      Uh(r, Rs, n, Rr(n)), xl(Fh, r);
    }
  }
  function $y(n, r, l) {
    n === "focusin" ? (Ph(), xs = r, Rs = l, xs.attachEvent("onpropertychange", Hh)) : n === "focusout" && Ph();
  }
  function Vy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zi(Rs);
  }
  function Iy(n, r) {
    if (n === "click") return Zi(r);
  }
  function Yy(n, r) {
    if (n === "input" || n === "change") return Zi(r);
  }
  function Bh(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var si = typeof Object.is == "function" ? Object.is : Bh;
  function fu(n, r) {
    if (si(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var d = l[u];
      if (!U.call(r, d) || !si(n[d], r[d])) return !1;
    }
    return !0;
  }
  function $h(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Vh(n, r) {
    var l = $h(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r) return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = $h(l);
    }
  }
  function Ih(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ih(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Yh() {
    for (var n = window, r = wr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = wr(n.document);
    }
    return r;
  }
  function bs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Eo(n) {
    var r = Yh(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Ih(l.ownerDocument.documentElement, l)) {
      if (u !== null && bs(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = l.textContent.length, m = Math.min(u.start, d);
          u = u.end === void 0 ? m : Math.min(u.end, d), !n.extend && m > u && (d = u, u = m, m = d), d = Vh(l, m);
          var R = Vh(
            l,
            u
          );
          d && R && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== R.node || n.focusOffset !== R.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), n.removeAllRanges(), m > u ? (n.addRange(r), n.extend(R.node, R.offset)) : (r.setEnd(R.node, R.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ac = g && "documentMode" in document && 11 >= document.documentMode, wo = null, Nl = null, Ts = null, Rd = !1;
  function Wh(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Rd || wo == null || wo !== wr(u) || (u = wo, "selectionStart" in u && bs(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Ts && fu(Ts, u) || (Ts = u, u = jc(Nl, "onSelect"), 0 < u.length && (r = new lt("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = wo)));
  }
  function zc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var du = { animationend: zc("Animation", "AnimationEnd"), animationiteration: zc("Animation", "AnimationIteration"), animationstart: zc("Animation", "AnimationStart"), transitionend: zc("Transition", "TransitionEnd") }, Uc = {}, Qh = {};
  g && (Qh = document.createElement("div").style, "AnimationEvent" in window || (delete du.animationend.animation, delete du.animationiteration.animation, delete du.animationstart.animation), "TransitionEvent" in window || delete du.transitionend.transition);
  function ks(n) {
    if (Uc[n]) return Uc[n];
    if (!du[n]) return n;
    var r = du[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Qh) return Uc[n] = r[l];
    return n;
  }
  var Tr = ks("animationend"), bd = ks("animationiteration"), qh = ks("animationstart"), Gh = ks("transitionend"), Kh = /* @__PURE__ */ new Map(), Xh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ml(n, r) {
    Kh.set(n, r), x(r, [n]);
  }
  for (var Fc = 0; Fc < Xh.length; Fc++) {
    var _s = Xh[Fc], Os = _s.toLowerCase(), Wy = _s[0].toUpperCase() + _s.slice(1);
    Ml(Os, "on" + Wy);
  }
  Ml(Tr, "onAnimationEnd"), Ml(bd, "onAnimationIteration"), Ml(qh, "onAnimationStart"), Ml("dblclick", "onDoubleClick"), Ml("focusin", "onFocus"), Ml("focusout", "onBlur"), Ml(Gh, "onTransitionEnd"), w("onMouseEnter", ["mouseout", "mouseover"]), w("onMouseLeave", ["mouseout", "mouseover"]), w("onPointerEnter", ["pointerout", "pointerover"]), w("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));
  function Zh(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, be(u, r, void 0, n), n.currentTarget = null;
  }
  function Jh(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], d = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var R = u.length - 1; 0 <= R; R--) {
          var _ = u[R], L = _.instance, G = _.currentTarget;
          if (_ = _.listener, L !== m && d.isPropagationStopped()) break e;
          Zh(d, _, G), m = L;
        }
        else for (R = 0; R < u.length; R++) {
          if (_ = u[R], L = _.instance, G = _.currentTarget, _ = _.listener, L !== m && d.isPropagationStopped()) break e;
          Zh(d, _, G), m = L;
        }
      }
    }
    if (Ea) throw n = Vi, Ea = !1, Vi = null, n;
  }
  function Zt(n, r) {
    var l = r[zd];
    l === void 0 && (l = r[zd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (Td(r, n, 2, !1), l.add(u));
  }
  function Ds(n, r, l) {
    var u = 0;
    r && (u |= 4), Td(l, n, u, r);
  }
  var el = "_reactListening" + Math.random().toString(36).slice(2);
  function Ci(n) {
    if (!n[el]) {
      n[el] = !0, v.forEach(function(l) {
        l !== "selectionchange" && (Qy.has(l) || Ds(l, !1, n), Ds(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[el] || (r[el] = !0, Ds("selectionchange", !1, r));
    }
  }
  function Td(n, r, l, u) {
    switch (ys(r)) {
      case 1:
        var d = Qi;
        break;
      case 4:
        d = lu;
        break;
      default:
        d = wi;
    }
    l = d.bind(null, r, l, n), d = void 0, !ii || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), u ? d !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: d }) : n.addEventListener(r, l, !0) : d !== void 0 ? n.addEventListener(r, l, { passive: d }) : n.addEventListener(r, l, !1);
  }
  function kd(n, r, l, u, d) {
    var m = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var R = u.tag;
      if (R === 3 || R === 4) {
        var _ = u.stateNode.containerInfo;
        if (_ === d || _.nodeType === 8 && _.parentNode === d) break;
        if (R === 4) for (R = u.return; R !== null; ) {
          var L = R.tag;
          if ((L === 3 || L === 4) && (L = R.stateNode.containerInfo, L === d || L.nodeType === 8 && L.parentNode === d)) return;
          R = R.return;
        }
        for (; _ !== null; ) {
          if (R = nl(_), R === null) return;
          if (L = R.tag, L === 5 || L === 6) {
            u = m = R;
            continue e;
          }
          _ = _.parentNode;
        }
      }
      u = u.return;
    }
    xl(function() {
      var G = m, fe = Rr(l), de = [];
      e: {
        var le = Kh.get(n);
        if (le !== void 0) {
          var Oe = lt, Ue = n;
          switch (n) {
            case "keypress":
              if (Y(l) === 0) break e;
            case "keydown":
            case "keyup":
              Oe = Ki;
              break;
            case "focusin":
              Ue = "focus", Oe = Ss;
              break;
            case "focusout":
              Ue = "blur", Oe = Ss;
              break;
            case "beforeblur":
            case "afterblur":
              Oe = Ss;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Oe = Nt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Oe = su;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Oe = gd;
              break;
            case Tr:
            case bd:
            case qh:
              Oe = Es;
              break;
            case Gh:
              Oe = Nc;
              break;
            case "scroll":
              Oe = Vt;
              break;
            case "wheel":
              Oe = Zr;
              break;
            case "copy":
            case "cut":
            case "paste":
              Oe = vd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Oe = Lc;
          }
          var $e = (r & 4) !== 0, jn = !$e && n === "scroll", j = $e ? le !== null ? le + "Capture" : null : le;
          $e = [];
          for (var M = G, V; M !== null; ) {
            V = M;
            var ge = V.stateNode;
            if (V.tag === 5 && ge !== null && (V = ge, j !== null && (ge = ai(M, j), ge != null && $e.push(pu(M, ge, V)))), jn) break;
            M = M.return;
          }
          0 < $e.length && (le = new Oe(le, Ue, null, l, fe), de.push({ event: le, listeners: $e }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", Oe = n === "mouseout" || n === "pointerout", le && l !== yn && (Ue = l.relatedTarget || l.fromElement) && (nl(Ue) || Ue[ci])) break e;
          if ((Oe || le) && (le = fe.window === fe ? fe : (le = fe.ownerDocument) ? le.defaultView || le.parentWindow : window, Oe ? (Ue = l.relatedTarget || l.toElement, Oe = G, Ue = Ue ? nl(Ue) : null, Ue !== null && (jn = Te(Ue), Ue !== jn || Ue.tag !== 5 && Ue.tag !== 6) && (Ue = null)) : (Oe = null, Ue = G), Oe !== Ue)) {
            if ($e = Nt, ge = "onMouseLeave", j = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && ($e = Lc, ge = "onPointerLeave", j = "onPointerEnter", M = "pointer"), jn = Oe == null ? le : hu(Oe), V = Ue == null ? le : hu(Ue), le = new $e(ge, M + "leave", Oe, l, fe), le.target = jn, le.relatedTarget = V, ge = null, nl(fe) === G && ($e = new $e(j, M + "enter", Ue, l, fe), $e.target = V, $e.relatedTarget = jn, ge = $e), jn = ge, Oe && Ue) t: {
              for ($e = Oe, j = Ue, M = 0, V = $e; V; V = Co(V)) M++;
              for (V = 0, ge = j; ge; ge = Co(ge)) V++;
              for (; 0 < M - V; ) $e = Co($e), M--;
              for (; 0 < V - M; ) j = Co(j), V--;
              for (; M--; ) {
                if ($e === j || j !== null && $e === j.alternate) break t;
                $e = Co($e), j = Co(j);
              }
              $e = null;
            }
            else $e = null;
            Oe !== null && _d(de, le, Oe, $e, !1), Ue !== null && jn !== null && _d(de, jn, Ue, $e, !0);
          }
        }
        e: {
          if (le = G ? hu(G) : window, Oe = le.nodeName && le.nodeName.toLowerCase(), Oe === "select" || Oe === "input" && le.type === "file") var Ie = wd;
          else if (Ed(le)) if (Cd) Ie = Yy;
          else {
            Ie = Vy;
            var nt = $y;
          }
          else (Oe = le.nodeName) && Oe.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ie = Iy);
          if (Ie && (Ie = Ie(n, G))) {
            Uh(de, Ie, l, fe);
            break e;
          }
          nt && nt(n, le, G), n === "focusout" && (nt = le._wrapperState) && nt.controlled && le.type === "number" && Dr(le, "number", le.value);
        }
        switch (nt = G ? hu(G) : window, n) {
          case "focusin":
            (Ed(nt) || nt.contentEditable === "true") && (wo = nt, Nl = G, Ts = null);
            break;
          case "focusout":
            Ts = Nl = wo = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rd = !1, Wh(de, l, fe);
            break;
          case "selectionchange":
            if (Ac) break;
          case "keydown":
          case "keyup":
            Wh(de, l, fe);
        }
        var Fe;
        if (Tn) e: {
          switch (n) {
            case "compositionstart":
              var it = "onCompositionStart";
              break e;
            case "compositionend":
              it = "onCompositionEnd";
              break e;
            case "compositionupdate":
              it = "onCompositionUpdate";
              break e;
          }
          it = void 0;
        }
        else Ll ? Ah(n, l) && (it = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (it = "onCompositionStart");
        it && (Cs && l.locale !== "ko" && (Ll || it !== "onCompositionStart" ? it === "onCompositionEnd" && Ll && (Fe = O()) : (ui = fe, uu = "value" in ui ? ui.value : ui.textContent, Ll = !0)), nt = jc(G, it), 0 < nt.length && (it = new _h(it, n, null, l, fe), de.push({ event: it, listeners: nt }), Fe ? it.data = Fe : (Fe = zh(l), Fe !== null && (it.data = Fe)))), (Fe = Sd ? Py(n, l) : Hy(n, l)) && (G = jc(G, "onBeforeInput"), 0 < G.length && (fe = new _h("onBeforeInput", "beforeinput", null, l, fe), de.push({ event: fe, listeners: G }), fe.data = Fe));
      }
      Jh(de, r);
    });
  }
  function pu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function jc(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var d = n, m = d.stateNode;
      d.tag === 5 && m !== null && (d = m, m = ai(n, l), m != null && u.unshift(pu(n, m, d)), m = ai(n, r), m != null && u.push(pu(n, m, d))), n = n.return;
    }
    return u;
  }
  function Co(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function _d(n, r, l, u, d) {
    for (var m = r._reactName, R = []; l !== null && l !== u; ) {
      var _ = l, L = _.alternate, G = _.stateNode;
      if (L !== null && L === u) break;
      _.tag === 5 && G !== null && (_ = G, d ? (L = ai(l, m), L != null && R.unshift(pu(l, L, _))) : d || (L = ai(l, m), L != null && R.push(pu(l, L, _)))), l = l.return;
    }
    R.length !== 0 && n.push({ event: r, listeners: R });
  }
  var ev = /\r\n?/g, Od = /\u0000|\uFFFD/g;
  function tv(n) {
    return (typeof n == "string" ? n : "" + n).replace(ev, `
`).replace(Od, "");
  }
  function Ls(n, r, l) {
    if (r = tv(r), tv(n) !== r && l) throw Error(f(425));
  }
  function Pc() {
  }
  var Dd = null, Ld = null;
  function xo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ns = typeof setTimeout == "function" ? setTimeout : void 0, Ms = typeof clearTimeout == "function" ? clearTimeout : void 0, Nd = typeof Promise == "function" ? Promise : void 0, nv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nd < "u" ? function(n) {
    return Nd.resolve(null).then(n).catch(Md);
  } : Ns;
  function Md(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ad(n, r) {
    var l = r, u = 0;
    do {
      var d = l.nextSibling;
      if (n.removeChild(l), d && d.nodeType === 8) if (l = d.data, l === "/$") {
        if (u === 0) {
          n.removeChild(d), Fa(r);
          return;
        }
        u--;
      } else l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = d;
    } while (l);
    Fa(r);
  }
  function Ca(n) {
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
  function As(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var tl = Math.random().toString(36).slice(2), ja = "__reactFiber$" + tl, zs = "__reactProps$" + tl, ci = "__reactContainer$" + tl, zd = "__reactEvents$" + tl, qy = "__reactListeners$" + tl, Gy = "__reactHandles$" + tl;
  function nl(n) {
    var r = n[ja];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ci] || l[ja]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = As(n); n !== null; ) {
          if (l = n[ja]) return l;
          n = As(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function xi(n) {
    return n = n[ja] || n[ci], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function hu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(f(33));
  }
  function Hc(n) {
    return n[zs] || null;
  }
  var Xe = [], fi = -1;
  function Jt(n) {
    return { current: n };
  }
  function Ve(n) {
    0 > fi || (n.current = Xe[fi], Xe[fi] = null, fi--);
  }
  function zt(n, r) {
    fi++, Xe[fi] = n.current, n.current = r;
  }
  var Pa = {}, tr = Jt(Pa), dt = Jt(!1), Mr = Pa;
  function xa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Pa;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var d = {}, m;
    for (m in l) d[m] = r[m];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Vn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Jr() {
    Ve(dt), Ve(tr);
  }
  function Ri(n, r, l) {
    if (tr.current !== Pa) throw Error(f(168));
    zt(tr, r), zt(dt, l);
  }
  function Al(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var d in u) if (!(d in r)) throw Error(f(108, mt(n) || "Unknown", d));
    return k({}, l, u);
  }
  function Ro(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Pa, Mr = tr.current, zt(tr, n), zt(dt, dt.current), !0;
  }
  function rv(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(f(169));
    l ? (n = Al(n, r, Mr), u.__reactInternalMemoizedMergedChildContext = n, Ve(dt), Ve(tr), zt(tr, n)) : Ve(dt), zt(dt, l);
  }
  var rl = null, zl = !1, cr = !1;
  function Bc(n) {
    rl === null ? rl = [n] : rl.push(n);
  }
  function av(n) {
    zl = !0, Bc(n);
  }
  function bi() {
    if (!cr && rl !== null) {
      cr = !0;
      var n = 0, r = Tt;
      try {
        var l = rl;
        for (Tt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        rl = null, zl = !1;
      } catch (d) {
        throw rl !== null && (rl = rl.slice(n + 1)), rn(os, bi), d;
      } finally {
        Tt = r, cr = !1;
      }
    }
    return null;
  }
  var Ha = [], Ul = 0, Ba = null, bo = 0, ea = [], ta = 0, di = null, na = 1, fr = "";
  function To(n, r) {
    Ha[Ul++] = bo, Ha[Ul++] = Ba, Ba = n, bo = r;
  }
  function Fl(n, r, l) {
    ea[ta++] = na, ea[ta++] = fr, ea[ta++] = di, di = n;
    var u = na;
    n = fr;
    var d = 32 - Nr(u) - 1;
    u &= ~(1 << d), l += 1;
    var m = 32 - Nr(r) + d;
    if (30 < m) {
      var R = d - d % 5;
      m = (u & (1 << R) - 1).toString(32), u >>= R, d -= R, na = 1 << 32 - Nr(r) + d | l << d | u, fr = m + n;
    } else na = 1 << m | l << d | u, fr = n;
  }
  function $c(n) {
    n.return !== null && (To(n, 1), Fl(n, 1, 0));
  }
  function Vc(n) {
    for (; n === Ba; ) Ba = Ha[--Ul], Ha[Ul] = null, bo = Ha[--Ul], Ha[Ul] = null;
    for (; n === di; ) di = ea[--ta], ea[ta] = null, fr = ea[--ta], ea[ta] = null, na = ea[--ta], ea[ta] = null;
  }
  var Ra = null, ba = null, dn = !1, $a = null;
  function Ud(n, r) {
    var l = Ga(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Fd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ra = n, ba = Ca(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ra = n, ba = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = di !== null ? { id: na, overflow: fr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ga(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ra = n, ba = null, !0) : !1;
      default:
        return !1;
    }
  }
  function jd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ic(n) {
    if (dn) {
      var r = ba;
      if (r) {
        var l = r;
        if (!Fd(n, r)) {
          if (jd(n)) throw Error(f(418));
          r = Ca(l.nextSibling);
          var u = Ra;
          r && Fd(n, r) ? Ud(u, l) : (n.flags = n.flags & -4097 | 2, dn = !1, Ra = n);
        }
      } else {
        if (jd(n)) throw Error(f(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Ra = n;
      }
    }
  }
  function Pd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Ra = n;
  }
  function Yc(n) {
    if (n !== Ra) return !1;
    if (!dn) return Pd(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !xo(n.type, n.memoizedProps)), r && (r = ba)) {
      if (jd(n)) throw iv(), Error(f(418));
      for (; r; ) Ud(n, r), r = Ca(r.nextSibling);
    }
    if (Pd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ba = Ca(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ba = null;
      }
    } else ba = Ra ? Ca(n.stateNode.nextSibling) : null;
    return !0;
  }
  function iv() {
    for (var n = ba; n; ) n = Ca(n.nextSibling);
  }
  function vu() {
    ba = Ra = null, dn = !1;
  }
  function In(n) {
    $a === null ? $a = [n] : $a.push(n);
  }
  var Ky = Ae.ReactCurrentBatchConfig;
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = k({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var mu = Jt(null), Ti = null, yu = null, Us = null;
  function Hd() {
    Us = yu = Ti = null;
  }
  function Bd(n) {
    var r = mu.current;
    Ve(mu), n._currentValue = r;
  }
  function jl(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Mn(n, r) {
    Ti = n, Us = yu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (la = !0), n.firstContext = null);
  }
  function Ee(n) {
    var r = n._currentValue;
    if (Us !== n) if (n = { context: n, memoizedValue: r, next: null }, yu === null) {
      if (Ti === null) throw Error(f(308));
      yu = n, Ti.dependencies = { lanes: 0, firstContext: n };
    } else yu = yu.next = n;
    return r;
  }
  var kr = null;
  function Ta(n) {
    kr === null ? kr = [n] : kr.push(n);
  }
  function lv(n, r, l, u) {
    var d = r.interleaved;
    return d === null ? (l.next = l, Ta(r)) : (l.next = d.next, d.next = l), r.interleaved = l, al(n, u);
  }
  function al(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Pl = !1;
  function $d(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ov(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function on(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Hl(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, Rt & 2) {
      var d = u.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), u.pending = r, al(n, l);
    }
    return d = u.interleaved, d === null ? (r.next = r, Ta(u)) : (r.next = d.next, d.next = r), u.interleaved = r, al(n, l);
  }
  function Wc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ps(n, l);
    }
  }
  function uv(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var d = null, m = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var R = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          m === null ? d = m = R : m = m.next = R, l = l.next;
        } while (l !== null);
        m === null ? d = m = r : m = m.next = r;
      } else d = m = r;
      l = { baseState: u.baseState, firstBaseUpdate: d, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Fs(n, r, l, u) {
    var d = n.updateQueue;
    Pl = !1;
    var m = d.firstBaseUpdate, R = d.lastBaseUpdate, _ = d.shared.pending;
    if (_ !== null) {
      d.shared.pending = null;
      var L = _, G = L.next;
      L.next = null, R === null ? m = G : R.next = G, R = L;
      var fe = n.alternate;
      fe !== null && (fe = fe.updateQueue, _ = fe.lastBaseUpdate, _ !== R && (_ === null ? fe.firstBaseUpdate = G : _.next = G, fe.lastBaseUpdate = L));
    }
    if (m !== null) {
      var de = d.baseState;
      R = 0, fe = G = L = null, _ = m;
      do {
        var le = _.lane, Oe = _.eventTime;
        if ((u & le) === le) {
          fe !== null && (fe = fe.next = {
            eventTime: Oe,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var Ue = n, $e = _;
            switch (le = r, Oe = l, $e.tag) {
              case 1:
                if (Ue = $e.payload, typeof Ue == "function") {
                  de = Ue.call(Oe, de, le);
                  break e;
                }
                de = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = $e.payload, le = typeof Ue == "function" ? Ue.call(Oe, de, le) : Ue, le == null) break e;
                de = k({}, de, le);
                break e;
              case 2:
                Pl = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (n.flags |= 64, le = d.effects, le === null ? d.effects = [_] : le.push(_));
        } else Oe = { eventTime: Oe, lane: le, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, fe === null ? (G = fe = Oe, L = de) : fe = fe.next = Oe, R |= le;
        if (_ = _.next, _ === null) {
          if (_ = d.shared.pending, _ === null) break;
          le = _, _ = le.next, le.next = null, d.lastBaseUpdate = le, d.shared.pending = null;
        }
      } while (!0);
      if (fe === null && (L = de), d.baseState = L, d.firstBaseUpdate = G, d.lastBaseUpdate = fe, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          R |= d.lane, d = d.next;
        while (d !== r);
      } else m === null && (d.shared.lanes = 0);
      jo |= R, n.lanes = R, n.memoizedState = de;
    }
  }
  function gu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], d = u.callback;
      if (d !== null) {
        if (u.callback = null, u = l, typeof d != "function") throw Error(f(191, d));
        d.call(u);
      }
    }
  }
  var ko = new p.Component().refs;
  function Vd(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : k({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Te(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = ar(), d = ul(n), m = on(u, d);
    m.payload = r, l != null && (m.callback = l), r = Hl(n, m, d), r !== null && (wn(r, n, d, u), Wc(r, n, d));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = ar(), d = ul(n), m = on(u, d);
    m.tag = 1, m.payload = r, l != null && (m.callback = l), r = Hl(n, m, d), r !== null && (wn(r, n, d, u), Wc(r, n, d));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = ar(), u = ul(n), d = on(l, u);
    d.tag = 2, r != null && (d.callback = r), r = Hl(n, d, u), r !== null && (wn(r, n, u, l), Wc(r, n, u));
  } };
  function sv(n, r, l, u, d, m, R) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, R) : r.prototype && r.prototype.isPureReactComponent ? !fu(l, u) || !fu(d, m) : !0;
  }
  function cv(n, r, l) {
    var u = !1, d = Pa, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Ee(m) : (d = Vn(r) ? Mr : tr.current, u = r.contextTypes, m = (u = u != null) ? xa(n, d) : Pa), r = new r(l, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function fv(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Qc.enqueueReplaceState(r, r.state, null);
  }
  function Id(n, r, l, u) {
    var d = n.stateNode;
    d.props = l, d.state = n.memoizedState, d.refs = ko, $d(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? d.context = Ee(m) : (m = Vn(r) ? Mr : tr.current, d.context = xa(n, m)), d.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Vd(n, r, m, l), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && Qc.enqueueReplaceState(d, d.state, null), Fs(n, l, d, u), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Su(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(f(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(f(147, n));
        var d = u, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(R) {
          var _ = d.refs;
          _ === ko && (_ = d.refs = {}), R === null ? delete _[m] : _[m] = R;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(f(284));
      if (!l._owner) throw Error(f(290, n));
    }
    return n;
  }
  function js(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function dv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function pv(n) {
    function r(j, M) {
      if (n) {
        var V = j.deletions;
        V === null ? (j.deletions = [M], j.flags |= 16) : V.push(M);
      }
    }
    function l(j, M) {
      if (!n) return null;
      for (; M !== null; ) r(j, M), M = M.sibling;
      return null;
    }
    function u(j, M) {
      for (j = /* @__PURE__ */ new Map(); M !== null; ) M.key !== null ? j.set(M.key, M) : j.set(M.index, M), M = M.sibling;
      return j;
    }
    function d(j, M) {
      return j = ql(j, M), j.index = 0, j.sibling = null, j;
    }
    function m(j, M, V) {
      return j.index = V, n ? (V = j.alternate, V !== null ? (V = V.index, V < M ? (j.flags |= 2, M) : V) : (j.flags |= 2, M)) : (j.flags |= 1048576, M);
    }
    function R(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function _(j, M, V, ge) {
      return M === null || M.tag !== 6 ? (M = Of(V, j.mode, ge), M.return = j, M) : (M = d(M, V), M.return = j, M);
    }
    function L(j, M, V, ge) {
      var Ie = V.type;
      return Ie === Ge ? fe(j, M, V.props.children, ge, V.key) : M !== null && (M.elementType === Ie || typeof Ie == "object" && Ie !== null && Ie.$$typeof === pe && dv(Ie) === M.type) ? (ge = d(M, V.props), ge.ref = Su(j, M, V), ge.return = j, ge) : (ge = kf(V.type, V.key, V.props, null, j.mode, ge), ge.ref = Su(j, M, V), ge.return = j, ge);
    }
    function G(j, M, V, ge) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== V.containerInfo || M.stateNode.implementation !== V.implementation ? (M = rc(V, j.mode, ge), M.return = j, M) : (M = d(M, V.children || []), M.return = j, M);
    }
    function fe(j, M, V, ge, Ie) {
      return M === null || M.tag !== 7 ? (M = $o(V, j.mode, ge, Ie), M.return = j, M) : (M = d(M, V), M.return = j, M);
    }
    function de(j, M, V) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = Of("" + M, j.mode, V), M.return = j, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case gt:
            return V = kf(M.type, M.key, M.props, null, j.mode, V), V.ref = Su(j, null, M), V.return = j, V;
          case _e:
            return M = rc(M, j.mode, V), M.return = j, M;
          case pe:
            var ge = M._init;
            return de(j, ge(M._payload), V);
        }
        if (Cr(M) || se(M)) return M = $o(M, j.mode, V, null), M.return = j, M;
        js(j, M);
      }
      return null;
    }
    function le(j, M, V, ge) {
      var Ie = M !== null ? M.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number") return Ie !== null ? null : _(j, M, "" + V, ge);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case gt:
            return V.key === Ie ? L(j, M, V, ge) : null;
          case _e:
            return V.key === Ie ? G(j, M, V, ge) : null;
          case pe:
            return Ie = V._init, le(
              j,
              M,
              Ie(V._payload),
              ge
            );
        }
        if (Cr(V) || se(V)) return Ie !== null ? null : fe(j, M, V, ge, null);
        js(j, V);
      }
      return null;
    }
    function Oe(j, M, V, ge, Ie) {
      if (typeof ge == "string" && ge !== "" || typeof ge == "number") return j = j.get(V) || null, _(M, j, "" + ge, Ie);
      if (typeof ge == "object" && ge !== null) {
        switch (ge.$$typeof) {
          case gt:
            return j = j.get(ge.key === null ? V : ge.key) || null, L(M, j, ge, Ie);
          case _e:
            return j = j.get(ge.key === null ? V : ge.key) || null, G(M, j, ge, Ie);
          case pe:
            var nt = ge._init;
            return Oe(j, M, V, nt(ge._payload), Ie);
        }
        if (Cr(ge) || se(ge)) return j = j.get(V) || null, fe(M, j, ge, Ie, null);
        js(M, ge);
      }
      return null;
    }
    function Ue(j, M, V, ge) {
      for (var Ie = null, nt = null, Fe = M, it = M = 0, Zn = null; Fe !== null && it < V.length; it++) {
        Fe.index > it ? (Zn = Fe, Fe = null) : Zn = Fe.sibling;
        var Ut = le(j, Fe, V[it], ge);
        if (Ut === null) {
          Fe === null && (Fe = Zn);
          break;
        }
        n && Fe && Ut.alternate === null && r(j, Fe), M = m(Ut, M, it), nt === null ? Ie = Ut : nt.sibling = Ut, nt = Ut, Fe = Zn;
      }
      if (it === V.length) return l(j, Fe), dn && To(j, it), Ie;
      if (Fe === null) {
        for (; it < V.length; it++) Fe = de(j, V[it], ge), Fe !== null && (M = m(Fe, M, it), nt === null ? Ie = Fe : nt.sibling = Fe, nt = Fe);
        return dn && To(j, it), Ie;
      }
      for (Fe = u(j, Fe); it < V.length; it++) Zn = Oe(Fe, j, it, V[it], ge), Zn !== null && (n && Zn.alternate !== null && Fe.delete(Zn.key === null ? it : Zn.key), M = m(Zn, M, it), nt === null ? Ie = Zn : nt.sibling = Zn, nt = Zn);
      return n && Fe.forEach(function(sl) {
        return r(j, sl);
      }), dn && To(j, it), Ie;
    }
    function $e(j, M, V, ge) {
      var Ie = se(V);
      if (typeof Ie != "function") throw Error(f(150));
      if (V = Ie.call(V), V == null) throw Error(f(151));
      for (var nt = Ie = null, Fe = M, it = M = 0, Zn = null, Ut = V.next(); Fe !== null && !Ut.done; it++, Ut = V.next()) {
        Fe.index > it ? (Zn = Fe, Fe = null) : Zn = Fe.sibling;
        var sl = le(j, Fe, Ut.value, ge);
        if (sl === null) {
          Fe === null && (Fe = Zn);
          break;
        }
        n && Fe && sl.alternate === null && r(j, Fe), M = m(sl, M, it), nt === null ? Ie = sl : nt.sibling = sl, nt = sl, Fe = Zn;
      }
      if (Ut.done) return l(
        j,
        Fe
      ), dn && To(j, it), Ie;
      if (Fe === null) {
        for (; !Ut.done; it++, Ut = V.next()) Ut = de(j, Ut.value, ge), Ut !== null && (M = m(Ut, M, it), nt === null ? Ie = Ut : nt.sibling = Ut, nt = Ut);
        return dn && To(j, it), Ie;
      }
      for (Fe = u(j, Fe); !Ut.done; it++, Ut = V.next()) Ut = Oe(Fe, j, it, Ut.value, ge), Ut !== null && (n && Ut.alternate !== null && Fe.delete(Ut.key === null ? it : Ut.key), M = m(Ut, M, it), nt === null ? Ie = Ut : nt.sibling = Ut, nt = Ut);
      return n && Fe.forEach(function(vg) {
        return r(j, vg);
      }), dn && To(j, it), Ie;
    }
    function jn(j, M, V, ge) {
      if (typeof V == "object" && V !== null && V.type === Ge && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case gt:
            e: {
              for (var Ie = V.key, nt = M; nt !== null; ) {
                if (nt.key === Ie) {
                  if (Ie = V.type, Ie === Ge) {
                    if (nt.tag === 7) {
                      l(j, nt.sibling), M = d(nt, V.props.children), M.return = j, j = M;
                      break e;
                    }
                  } else if (nt.elementType === Ie || typeof Ie == "object" && Ie !== null && Ie.$$typeof === pe && dv(Ie) === nt.type) {
                    l(j, nt.sibling), M = d(nt, V.props), M.ref = Su(j, nt, V), M.return = j, j = M;
                    break e;
                  }
                  l(j, nt);
                  break;
                } else r(j, nt);
                nt = nt.sibling;
              }
              V.type === Ge ? (M = $o(V.props.children, j.mode, ge, V.key), M.return = j, j = M) : (ge = kf(V.type, V.key, V.props, null, j.mode, ge), ge.ref = Su(j, M, V), ge.return = j, j = ge);
            }
            return R(j);
          case _e:
            e: {
              for (nt = V.key; M !== null; ) {
                if (M.key === nt) if (M.tag === 4 && M.stateNode.containerInfo === V.containerInfo && M.stateNode.implementation === V.implementation) {
                  l(j, M.sibling), M = d(M, V.children || []), M.return = j, j = M;
                  break e;
                } else {
                  l(j, M);
                  break;
                }
                else r(j, M);
                M = M.sibling;
              }
              M = rc(V, j.mode, ge), M.return = j, j = M;
            }
            return R(j);
          case pe:
            return nt = V._init, jn(j, M, nt(V._payload), ge);
        }
        if (Cr(V)) return Ue(j, M, V, ge);
        if (se(V)) return $e(j, M, V, ge);
        js(j, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, M !== null && M.tag === 6 ? (l(j, M.sibling), M = d(M, V), M.return = j, j = M) : (l(j, M), M = Of(V, j.mode, ge), M.return = j, j = M), R(j)) : l(j, M);
    }
    return jn;
  }
  var Eu = pv(!0), hv = pv(!1), Ps = {}, ki = Jt(Ps), wu = Jt(Ps), Hs = Jt(Ps);
  function Bl(n) {
    if (n === Ps) throw Error(f(174));
    return n;
  }
  function Yd(n, r) {
    switch (zt(Hs, r), zt(wu, n), zt(ki, Ps), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Lr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Lr(r, n);
    }
    Ve(ki), zt(ki, r);
  }
  function Cu() {
    Ve(ki), Ve(wu), Ve(Hs);
  }
  function qc(n) {
    Bl(Hs.current);
    var r = Bl(ki.current), l = Lr(r, n.type);
    r !== l && (zt(wu, n), zt(ki, l));
  }
  function Ze(n) {
    wu.current === n && (Ve(ki), Ve(wu));
  }
  var We = Jt(0);
  function Mt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
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
  var kn = [];
  function Va() {
    for (var n = 0; n < kn.length; n++) kn[n]._workInProgressVersionPrimary = null;
    kn.length = 0;
  }
  var Bs = Ae.ReactCurrentDispatcher, Wd = Ae.ReactCurrentBatchConfig, _o = 0, En = null, An = null, ne = null, zn = !1, tt = !1, _i = 0, il = 0;
  function _n() {
    throw Error(f(321));
  }
  function Ia(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!si(n[l], r[l])) return !1;
    return !0;
  }
  function Oo(n, r, l, u, d, m) {
    if (_o = m, En = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Bs.current = n === null || n.memoizedState === null ? Xy : Zy, n = l(u, d), tt) {
      m = 0;
      do {
        if (tt = !1, _i = 0, 25 <= m) throw Error(f(301));
        m += 1, ne = An = null, r.updateQueue = null, Bs.current = Jy, n = l(u, d);
      } while (tt);
    }
    if (Bs.current = sf, r = An !== null && An.next !== null, _o = 0, ne = An = En = null, zn = !1, r) throw Error(f(300));
    return n;
  }
  function $l() {
    var n = _i !== 0;
    return _i = 0, n;
  }
  function aa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ne === null ? En.memoizedState = ne = n : ne = ne.next = n, ne;
  }
  function ia() {
    if (An === null) {
      var n = En.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = An.next;
    var r = ne === null ? En.memoizedState : ne.next;
    if (r !== null) ne = r, An = n;
    else {
      if (n === null) throw Error(f(310));
      An = n, n = { memoizedState: An.memoizedState, baseState: An.baseState, baseQueue: An.baseQueue, queue: An.queue, next: null }, ne === null ? En.memoizedState = ne = n : ne = ne.next = n;
    }
    return ne;
  }
  function Do(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function $s(n) {
    var r = ia(), l = r.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = n;
    var u = An, d = u.baseQueue, m = l.pending;
    if (m !== null) {
      if (d !== null) {
        var R = d.next;
        d.next = m.next, m.next = R;
      }
      u.baseQueue = d = m, l.pending = null;
    }
    if (d !== null) {
      m = d.next, u = u.baseState;
      var _ = R = null, L = null, G = m;
      do {
        var fe = G.lane;
        if ((_o & fe) === fe) L !== null && (L = L.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), u = G.hasEagerState ? G.eagerState : n(u, G.action);
        else {
          var de = {
            lane: fe,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          };
          L === null ? (_ = L = de, R = u) : L = L.next = de, En.lanes |= fe, jo |= fe;
        }
        G = G.next;
      } while (G !== null && G !== m);
      L === null ? R = u : L.next = _, si(u, r.memoizedState) || (la = !0), r.memoizedState = u, r.baseState = R, r.baseQueue = L, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      d = n;
      do
        m = d.lane, En.lanes |= m, jo |= m, d = d.next;
      while (d !== n);
    } else d === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Vs(n) {
    var r = ia(), l = r.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, d = l.pending, m = r.memoizedState;
    if (d !== null) {
      l.pending = null;
      var R = d = d.next;
      do
        m = n(m, R.action), R = R.next;
      while (R !== d);
      si(m, r.memoizedState) || (la = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), l.lastRenderedState = m;
    }
    return [m, u];
  }
  function Gc() {
  }
  function Kc(n, r) {
    var l = En, u = ia(), d = r(), m = !si(u.memoizedState, d);
    if (m && (u.memoizedState = d, la = !0), u = u.queue, Is(Jc.bind(null, l, u, n), [n]), u.getSnapshot !== r || m || ne !== null && ne.memoizedState.tag & 1) {
      if (l.flags |= 2048, Lo(9, Zc.bind(null, l, u, d, r), void 0, null), Dn === null) throw Error(f(349));
      _o & 30 || Xc(l, r, d);
    }
    return d;
  }
  function Xc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Zc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, ef(r) && tf(n);
  }
  function Jc(n, r, l) {
    return l(function() {
      ef(r) && tf(n);
    });
  }
  function ef(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !si(n, l);
    } catch {
      return !0;
    }
  }
  function tf(n) {
    var r = al(n, 1);
    r !== null && wn(r, n, 1, -1);
  }
  function nf(n) {
    var r = aa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Do, lastRenderedState: n }, r.queue = n, n = n.dispatch = uf.bind(null, En, n), [r.memoizedState, n];
  }
  function Lo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function rf() {
    return ia().memoizedState;
  }
  function xu(n, r, l, u) {
    var d = aa();
    En.flags |= n, d.memoizedState = Lo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function No(n, r, l, u) {
    var d = ia();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (An !== null) {
      var R = An.memoizedState;
      if (m = R.destroy, u !== null && Ia(u, R.deps)) {
        d.memoizedState = Lo(r, l, m, u);
        return;
      }
    }
    En.flags |= n, d.memoizedState = Lo(1 | r, l, m, u);
  }
  function Mo(n, r) {
    return xu(8390656, 8, n, r);
  }
  function Is(n, r) {
    return No(2048, 8, n, r);
  }
  function af(n, r) {
    return No(4, 2, n, r);
  }
  function lf(n, r) {
    return No(4, 4, n, r);
  }
  function of(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Qd(n, r, l) {
    return l = l != null ? l.concat([n]) : null, No(4, 4, of.bind(null, r, n), l);
  }
  function Ao() {
  }
  function qd(n, r) {
    var l = ia();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ia(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Ru(n, r) {
    var l = ia();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ia(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Vl(n, r, l) {
    return _o & 21 ? (si(l, r) || (l = vo(), En.lanes |= l, jo |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, la = !0), n.memoizedState = l);
  }
  function ka(n, r) {
    var l = Tt;
    Tt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Wd.transition;
    Wd.transition = {};
    try {
      n(!1), r();
    } finally {
      Tt = l, Wd.transition = u;
    }
  }
  function vv() {
    return ia().memoizedState;
  }
  function un(n, r, l) {
    var u = ul(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Ys(n)) bu(r, l);
    else if (l = lv(n, r, l, u), l !== null) {
      var d = ar();
      wn(l, n, u, d), Ws(l, r, u);
    }
  }
  function uf(n, r, l) {
    var u = ul(n), d = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Ys(n)) bu(r, d);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var R = r.lastRenderedState, _ = m(R, l);
        if (d.hasEagerState = !0, d.eagerState = _, si(_, R)) {
          var L = r.interleaved;
          L === null ? (d.next = d, Ta(r)) : (d.next = L.next, L.next = d), r.interleaved = d;
          return;
        }
      } catch {
      } finally {
      }
      l = lv(n, r, d, u), l !== null && (d = ar(), wn(l, n, u, d), Ws(l, r, u));
    }
  }
  function Ys(n) {
    var r = n.alternate;
    return n === En || r !== null && r === En;
  }
  function bu(n, r) {
    tt = zn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ws(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ps(n, l);
    }
  }
  var sf = { readContext: Ee, useCallback: _n, useContext: _n, useEffect: _n, useImperativeHandle: _n, useInsertionEffect: _n, useLayoutEffect: _n, useMemo: _n, useReducer: _n, useRef: _n, useState: _n, useDebugValue: _n, useDeferredValue: _n, useTransition: _n, useMutableSource: _n, useSyncExternalStore: _n, useId: _n, unstable_isNewReconciler: !1 }, Xy = { readContext: Ee, useCallback: function(n, r) {
    return aa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ee, useEffect: Mo, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, xu(
      4194308,
      4,
      of.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return xu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return xu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = aa();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = aa();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = un.bind(null, En, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = aa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: nf, useDebugValue: Ao, useDeferredValue: function(n) {
    return aa().memoizedState = n;
  }, useTransition: function() {
    var n = nf(!1), r = n[0];
    return n = ka.bind(null, n[1]), aa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = En, d = aa();
    if (dn) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else {
      if (l = r(), Dn === null) throw Error(f(349));
      _o & 30 || Xc(u, r, l);
    }
    d.memoizedState = l;
    var m = { value: l, getSnapshot: r };
    return d.queue = m, Mo(Jc.bind(
      null,
      u,
      m,
      n
    ), [n]), u.flags |= 2048, Lo(9, Zc.bind(null, u, m, l, r), void 0, null), l;
  }, useId: function() {
    var n = aa(), r = Dn.identifierPrefix;
    if (dn) {
      var l = fr, u = na;
      l = (u & ~(1 << 32 - Nr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = _i++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = il++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Zy = {
    readContext: Ee,
    useCallback: qd,
    useContext: Ee,
    useEffect: Is,
    useImperativeHandle: Qd,
    useInsertionEffect: af,
    useLayoutEffect: lf,
    useMemo: Ru,
    useReducer: $s,
    useRef: rf,
    useState: function() {
      return $s(Do);
    },
    useDebugValue: Ao,
    useDeferredValue: function(n) {
      var r = ia();
      return Vl(r, An.memoizedState, n);
    },
    useTransition: function() {
      var n = $s(Do)[0], r = ia().memoizedState;
      return [n, r];
    },
    useMutableSource: Gc,
    useSyncExternalStore: Kc,
    useId: vv,
    unstable_isNewReconciler: !1
  }, Jy = { readContext: Ee, useCallback: qd, useContext: Ee, useEffect: Is, useImperativeHandle: Qd, useInsertionEffect: af, useLayoutEffect: lf, useMemo: Ru, useReducer: Vs, useRef: rf, useState: function() {
    return Vs(Do);
  }, useDebugValue: Ao, useDeferredValue: function(n) {
    var r = ia();
    return An === null ? r.memoizedState = n : Vl(r, An.memoizedState, n);
  }, useTransition: function() {
    var n = Vs(Do)[0], r = ia().memoizedState;
    return [n, r];
  }, useMutableSource: Gc, useSyncExternalStore: Kc, useId: vv, unstable_isNewReconciler: !1 };
  function Il(n, r) {
    try {
      var l = "", u = r;
      do
        l += at(u), u = u.return;
      while (u);
      var d = l;
    } catch (m) {
      d = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: d, digest: null };
  }
  function Gd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Qs(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var mv = typeof WeakMap == "function" ? WeakMap : Map;
  function yv(n, r, l) {
    l = on(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      wf || (wf = !0, ap = u), Qs(n, r);
    }, l;
  }
  function gv(n, r, l) {
    l = on(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = r.value;
      l.payload = function() {
        return u(d);
      }, l.callback = function() {
        Qs(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Qs(n, r), typeof u != "function" && (Qa === null ? Qa = /* @__PURE__ */ new Set([this]) : Qa.add(this));
      var R = r.stack;
      this.componentDidCatch(r.value, { componentStack: R !== null ? R : "" });
    }), l;
  }
  function qs(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new mv();
      var d = /* @__PURE__ */ new Set();
      u.set(r, d);
    } else d = u.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), u.set(r, d));
    d.has(l) || (d.add(l), n = sg.bind(null, n, r, l), r.then(n, n));
  }
  function Sv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Kd(n, r, l, u, d) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = d, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = on(-1, 1), r.tag = 2, Hl(l, r, 1))), l.lanes |= 1), n);
  }
  var Ev = Ae.ReactCurrentOwner, la = !1;
  function Un(n, r, l, u) {
    r.child = n === null ? hv(r, null, l, u) : Eu(r, n.child, l, u);
  }
  function Tu(n, r, l, u, d) {
    l = l.render;
    var m = r.ref;
    return Mn(r, d), u = Oo(n, r, l, u, m, d), l = $l(), n !== null && !la ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Fn(n, r, d)) : (dn && l && $c(r), r.flags |= 1, Un(n, r, u, d), r.child);
  }
  function Yl(n, r, l, u, d) {
    if (n === null) {
      var m = l.type;
      return typeof m == "function" && !sp(m) && m.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = m, cf(n, r, m, u, d)) : (n = kf(l.type, null, u, r, r.mode, d), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & d)) {
      var R = m.memoizedProps;
      if (l = l.compare, l = l !== null ? l : fu, l(R, u) && n.ref === r.ref) return Fn(n, r, d);
    }
    return r.flags |= 1, n = ql(m, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function cf(n, r, l, u, d) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (fu(m, u) && n.ref === r.ref) if (la = !1, r.pendingProps = u = m, (n.lanes & d) !== 0) n.flags & 131072 && (la = !0);
      else return r.lanes = n.lanes, Fn(n, r, d);
    }
    return vt(n, r, l, u, d);
  }
  function oa(n, r, l) {
    var u = r.pendingProps, d = u.children, m = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, zt(Uu, ua), ua |= l;
    else {
      if (!(l & 1073741824)) return n = m !== null ? m.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, zt(Uu, ua), ua |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : l, zt(Uu, ua), ua |= u;
    }
    else m !== null ? (u = m.baseLanes | l, r.memoizedState = null) : u = l, zt(Uu, ua), ua |= u;
    return Un(n, r, d, l), r.child;
  }
  function zo(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function vt(n, r, l, u, d) {
    var m = Vn(l) ? Mr : tr.current;
    return m = xa(r, m), Mn(r, d), l = Oo(n, r, l, u, m, d), u = $l(), n !== null && !la ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Fn(n, r, d)) : (dn && u && $c(r), r.flags |= 1, Un(n, r, l, d), r.child);
  }
  function Gs(n, r, l, u, d) {
    if (Vn(l)) {
      var m = !0;
      Ro(r);
    } else m = !1;
    if (Mn(r, d), r.stateNode === null) Xs(n, r), cv(r, l, u), Id(r, l, u, d), u = !0;
    else if (n === null) {
      var R = r.stateNode, _ = r.memoizedProps;
      R.props = _;
      var L = R.context, G = l.contextType;
      typeof G == "object" && G !== null ? G = Ee(G) : (G = Vn(l) ? Mr : tr.current, G = xa(r, G));
      var fe = l.getDerivedStateFromProps, de = typeof fe == "function" || typeof R.getSnapshotBeforeUpdate == "function";
      de || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (_ !== u || L !== G) && fv(r, R, u, G), Pl = !1;
      var le = r.memoizedState;
      R.state = le, Fs(r, u, R, d), L = r.memoizedState, _ !== u || le !== L || dt.current || Pl ? (typeof fe == "function" && (Vd(r, l, fe, u), L = r.memoizedState), (_ = Pl || sv(r, l, _, u, le, L, G)) ? (de || typeof R.UNSAFE_componentWillMount != "function" && typeof R.componentWillMount != "function" || (typeof R.componentWillMount == "function" && R.componentWillMount(), typeof R.UNSAFE_componentWillMount == "function" && R.UNSAFE_componentWillMount()), typeof R.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof R.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), R.props = u, R.state = L, R.context = G, u = _) : (typeof R.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      R = r.stateNode, ov(n, r), _ = r.memoizedProps, G = r.type === r.elementType ? _ : ra(r.type, _), R.props = G, de = r.pendingProps, le = R.context, L = l.contextType, typeof L == "object" && L !== null ? L = Ee(L) : (L = Vn(l) ? Mr : tr.current, L = xa(r, L));
      var Oe = l.getDerivedStateFromProps;
      (fe = typeof Oe == "function" || typeof R.getSnapshotBeforeUpdate == "function") || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (_ !== de || le !== L) && fv(r, R, u, L), Pl = !1, le = r.memoizedState, R.state = le, Fs(r, u, R, d);
      var Ue = r.memoizedState;
      _ !== de || le !== Ue || dt.current || Pl ? (typeof Oe == "function" && (Vd(r, l, Oe, u), Ue = r.memoizedState), (G = Pl || sv(r, l, G, u, le, Ue, L) || !1) ? (fe || typeof R.UNSAFE_componentWillUpdate != "function" && typeof R.componentWillUpdate != "function" || (typeof R.componentWillUpdate == "function" && R.componentWillUpdate(u, Ue, L), typeof R.UNSAFE_componentWillUpdate == "function" && R.UNSAFE_componentWillUpdate(u, Ue, L)), typeof R.componentDidUpdate == "function" && (r.flags |= 4), typeof R.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof R.componentDidUpdate != "function" || _ === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ue), R.props = u, R.state = Ue, R.context = L, u = G) : (typeof R.componentDidUpdate != "function" || _ === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return ff(n, r, l, u, m, d);
  }
  function ff(n, r, l, u, d, m) {
    zo(n, r);
    var R = (r.flags & 128) !== 0;
    if (!u && !R) return d && rv(r, l, !1), Fn(n, r, m);
    u = r.stateNode, Ev.current = r;
    var _ = R && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && R ? (r.child = Eu(r, n.child, null, m), r.child = Eu(r, null, _, m)) : Un(n, r, _, m), r.memoizedState = u.state, d && rv(r, l, !0), r.child;
  }
  function eg(n) {
    var r = n.stateNode;
    r.pendingContext ? Ri(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ri(n, r.context, !1), Yd(n, r.containerInfo);
  }
  function wv(n, r, l, u, d) {
    return vu(), In(d), r.flags |= 256, Un(n, r, l, u), r.child;
  }
  var Ks = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Uo(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Cv(n, r, l) {
    var u = r.pendingProps, d = We.current, m = !1, R = (r.flags & 128) !== 0, _;
    if ((_ = R) || (_ = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), _ ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), zt(We, d & 1), n === null)
      return Ic(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (R = u.children, n = u.fallback, m ? (u = r.mode, m = r.child, R = { mode: "hidden", children: R }, !(u & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = R) : m = _f(R, u, 0, null), n = $o(n, u, l, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = Uo(l), r.memoizedState = Ks, n) : df(r, R));
    if (d = n.memoizedState, d !== null && (_ = d.dehydrated, _ !== null)) return Xd(n, r, R, u, _, d, l);
    if (m) {
      m = u.fallback, R = r.mode, d = n.child, _ = d.sibling;
      var L = { mode: "hidden", children: u.children };
      return !(R & 1) && r.child !== d ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = ql(d, L), u.subtreeFlags = d.subtreeFlags & 14680064), _ !== null ? m = ql(_, m) : (m = $o(m, R, l, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, R = n.child.memoizedState, R = R === null ? Uo(l) : { baseLanes: R.baseLanes | l, cachePool: null, transitions: R.transitions }, m.memoizedState = R, m.childLanes = n.childLanes & ~l, r.memoizedState = Ks, u;
    }
    return m = n.child, n = m.sibling, u = ql(m, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function df(n, r) {
    return r = _f({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function pf(n, r, l, u) {
    return u !== null && In(u), Eu(r, n.child, null, l), n = df(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Xd(n, r, l, u, d, m, R) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = Gd(Error(f(422))), pf(n, r, R, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, d = r.mode, u = _f({ mode: "visible", children: u.children }, d, 0, null), m = $o(m, d, R, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, r.mode & 1 && Eu(r, n.child, null, R), r.child.memoizedState = Uo(R), r.memoizedState = Ks, m);
    if (!(r.mode & 1)) return pf(n, r, R, null);
    if (d.data === "$!") {
      if (u = d.nextSibling && d.nextSibling.dataset, u) var _ = u.dgst;
      return u = _, m = Error(f(419)), u = Gd(m, u, void 0), pf(n, r, R, u);
    }
    if (_ = (R & n.childLanes) !== 0, la || _) {
      if (u = Dn, u !== null) {
        switch (R & -R) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
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
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = d & (u.suspendedLanes | R) ? 0 : d, d !== 0 && d !== m.retryLane && (m.retryLane = d, al(n, d), wn(u, n, d, -1));
      }
      return nc(), u = Gd(Error(f(421))), pf(n, r, R, u);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = n.child, r = up.bind(null, n), d._reactRetry = r, null) : (n = m.treeContext, ba = Ca(d.nextSibling), Ra = r, dn = !0, $a = null, n !== null && (ea[ta++] = na, ea[ta++] = fr, ea[ta++] = di, na = n.id, fr = n.overflow, di = r), r = df(r, u.children), r.flags |= 4096, r);
  }
  function xv(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), jl(n.return, r, l);
  }
  function hf(n, r, l, u, d) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: d } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = l, m.tailMode = d);
  }
  function Zd(n, r, l) {
    var u = r.pendingProps, d = u.revealOrder, m = u.tail;
    if (Un(n, r, u.children, l), u = We.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && xv(n, l, r);
        else if (n.tag === 19) xv(n, l, r);
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
      u &= 1;
    }
    if (zt(We, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (d) {
      case "forwards":
        for (l = r.child, d = null; l !== null; ) n = l.alternate, n !== null && Mt(n) === null && (d = l), l = l.sibling;
        l = d, l === null ? (d = r.child, r.child = null) : (d = l.sibling, l.sibling = null), hf(r, !1, d, l, m);
        break;
      case "backwards":
        for (l = null, d = r.child, r.child = null; d !== null; ) {
          if (n = d.alternate, n !== null && Mt(n) === null) {
            r.child = d;
            break;
          }
          n = d.sibling, d.sibling = l, l = d, d = n;
        }
        hf(r, !0, l, null, m);
        break;
      case "together":
        hf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Xs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Fn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), jo |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, l = ql(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = ql(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ll(n, r, l) {
    switch (r.tag) {
      case 3:
        eg(r), vu();
        break;
      case 5:
        qc(r);
        break;
      case 1:
        Vn(r.type) && Ro(r);
        break;
      case 4:
        Yd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, d = r.memoizedProps.value;
        zt(mu, u._currentValue), u._currentValue = d;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (zt(We, We.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Cv(n, r, l) : (zt(We, We.current & 1), n = Fn(n, r, l), n !== null ? n.sibling : null);
        zt(We, We.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u) return Zd(n, r, l);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), zt(We, We.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, oa(n, r, l);
    }
    return Fn(n, r, l);
  }
  var Oi, ku, _u, Ya;
  Oi = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ku = function() {
  }, _u = function(n, r, l, u) {
    var d = n.memoizedProps;
    if (d !== u) {
      n = r.stateNode, Bl(ki.current);
      var m = null;
      switch (l) {
        case "input":
          d = bn(n, d), u = bn(n, u), m = [];
          break;
        case "select":
          d = k({}, d, { value: void 0 }), u = k({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          d = ha(n, d), u = ha(n, u), m = [];
          break;
        default:
          typeof d.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Pc);
      }
      At(l, u);
      var R;
      l = null;
      for (G in d) if (!u.hasOwnProperty(G) && d.hasOwnProperty(G) && d[G] != null) if (G === "style") {
        var _ = d[G];
        for (R in _) _.hasOwnProperty(R) && (l || (l = {}), l[R] = "");
      } else G !== "dangerouslySetInnerHTML" && G !== "children" && G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && G !== "autoFocus" && (E.hasOwnProperty(G) ? m || (m = []) : (m = m || []).push(G, null));
      for (G in u) {
        var L = u[G];
        if (_ = d != null ? d[G] : void 0, u.hasOwnProperty(G) && L !== _ && (L != null || _ != null)) if (G === "style") if (_) {
          for (R in _) !_.hasOwnProperty(R) || L && L.hasOwnProperty(R) || (l || (l = {}), l[R] = "");
          for (R in L) L.hasOwnProperty(R) && _[R] !== L[R] && (l || (l = {}), l[R] = L[R]);
        } else l || (m || (m = []), m.push(
          G,
          l
        )), l = L;
        else G === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, _ = _ ? _.__html : void 0, L != null && _ !== L && (m = m || []).push(G, L)) : G === "children" ? typeof L != "string" && typeof L != "number" || (m = m || []).push(G, "" + L) : G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && (E.hasOwnProperty(G) ? (L != null && G === "onScroll" && Zt("scroll", n), m || _ === L || (m = [])) : (m = m || []).push(G, L));
      }
      l && (m = m || []).push("style", l);
      var G = m;
      (r.updateQueue = G) && (r.flags |= 4);
    }
  }, Ya = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function On(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var u = null; l !== null; ) l.alternate !== null && (u = l), l = l.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function _r(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r) for (var d = n.child; d !== null; ) l |= d.lanes | d.childLanes, u |= d.subtreeFlags & 14680064, u |= d.flags & 14680064, d.return = n, d = d.sibling;
    else for (d = n.child; d !== null; ) l |= d.lanes | d.childLanes, u |= d.subtreeFlags, u |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function tg(n, r, l) {
    var u = r.pendingProps;
    switch (Vc(r), r.tag) {
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
        return _r(r), null;
      case 1:
        return Vn(r.type) && Jr(), _r(r), null;
      case 3:
        return u = r.stateNode, Cu(), Ve(dt), Ve(tr), Va(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Yc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, $a !== null && (ip($a), $a = null))), ku(n, r), _r(r), null;
      case 5:
        Ze(r);
        var d = Bl(Hs.current);
        if (l = r.type, n !== null && r.stateNode != null) _u(n, r, l, u, d), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(f(166));
            return _r(r), null;
          }
          if (n = Bl(ki.current), Yc(r)) {
            u = r.stateNode, l = r.type;
            var m = r.memoizedProps;
            switch (u[ja] = r, u[zs] = m, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Zt("cancel", u), Zt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Zt("load", u);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Ji.length; d++) Zt(Ji[d], u);
                break;
              case "source":
                Zt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Zt(
                  "error",
                  u
                ), Zt("load", u);
                break;
              case "details":
                Zt("toggle", u);
                break;
              case "input":
                or(u, m), Zt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, Zt("invalid", u);
                break;
              case "textarea":
                va(u, m), Zt("invalid", u);
            }
            At(l, m), d = null;
            for (var R in m) if (m.hasOwnProperty(R)) {
              var _ = m[R];
              R === "children" ? typeof _ == "string" ? u.textContent !== _ && (m.suppressHydrationWarning !== !0 && Ls(u.textContent, _, n), d = ["children", _]) : typeof _ == "number" && u.textContent !== "" + _ && (m.suppressHydrationWarning !== !0 && Ls(
                u.textContent,
                _,
                n
              ), d = ["children", "" + _]) : E.hasOwnProperty(R) && _ != null && R === "onScroll" && Zt("scroll", u);
            }
            switch (l) {
              case "input":
                Wn(u), Bn(u, m, !0);
                break;
              case "textarea":
                Wn(u), ma(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (u.onclick = Pc);
            }
            u = d, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            R = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ur(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = R.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = R.createElement(l, { is: u.is }) : (n = R.createElement(l), l === "select" && (R = n, u.multiple ? R.multiple = !0 : u.size && (R.size = u.size))) : n = R.createElementNS(n, l), n[ja] = r, n[zs] = u, Oi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (R = Nn(l, u), l) {
                case "dialog":
                  Zt("cancel", n), Zt("close", n), d = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Zt("load", n), d = u;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Ji.length; d++) Zt(Ji[d], n);
                  d = u;
                  break;
                case "source":
                  Zt("error", n), d = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Zt(
                    "error",
                    n
                  ), Zt("load", n), d = u;
                  break;
                case "details":
                  Zt("toggle", n), d = u;
                  break;
                case "input":
                  or(n, u), d = bn(n, u), Zt("invalid", n);
                  break;
                case "option":
                  d = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, d = k({}, u, { value: void 0 }), Zt("invalid", n);
                  break;
                case "textarea":
                  va(n, u), d = ha(n, u), Zt("invalid", n);
                  break;
                default:
                  d = u;
              }
              At(l, d), _ = d;
              for (m in _) if (_.hasOwnProperty(m)) {
                var L = _[m];
                m === "style" ? St(n, L) : m === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && ya(n, L)) : m === "children" ? typeof L == "string" ? (l !== "textarea" || L !== "") && ga(n, L) : typeof L == "number" && ga(n, "" + L) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (E.hasOwnProperty(m) ? L != null && m === "onScroll" && Zt("scroll", n) : L != null && Ye(n, m, L, R));
              }
              switch (l) {
                case "input":
                  Wn(n), Bn(n, u, !1);
                  break;
                case "textarea":
                  Wn(n), ma(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + st(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, m = u.value, m != null ? qn(n, !!u.multiple, m, !1) : u.defaultValue != null && qn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (n.onclick = Pc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return _r(r), null;
      case 6:
        if (n && r.stateNode != null) Ya(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(f(166));
          if (l = Bl(Hs.current), Bl(ki.current), Yc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[ja] = r, (m = u.nodeValue !== l) && (n = Ra, n !== null)) switch (n.tag) {
              case 3:
                Ls(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ls(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[ja] = r, r.stateNode = u;
        }
        return _r(r), null;
      case 13:
        if (Ve(We), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && ba !== null && r.mode & 1 && !(r.flags & 128)) iv(), vu(), r.flags |= 98560, m = !1;
          else if (m = Yc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(f(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(f(317));
              m[ja] = r;
            } else vu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _r(r), m = !1;
          } else $a !== null && (ip($a), $a = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || We.current & 1 ? Kn === 0 && (Kn = 3) : nc())), r.updateQueue !== null && (r.flags |= 4), _r(r), null);
      case 4:
        return Cu(), ku(n, r), n === null && Ci(r.stateNode.containerInfo), _r(r), null;
      case 10:
        return Bd(r.type._context), _r(r), null;
      case 17:
        return Vn(r.type) && Jr(), _r(r), null;
      case 19:
        if (Ve(We), m = r.memoizedState, m === null) return _r(r), null;
        if (u = (r.flags & 128) !== 0, R = m.rendering, R === null) if (u) On(m, !1);
        else {
          if (Kn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (R = Mt(n), R !== null) {
              for (r.flags |= 128, On(m, !1), u = R.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) m = l, n = u, m.flags &= 14680066, R = m.alternate, R === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = R.childLanes, m.lanes = R.lanes, m.child = R.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = R.memoizedProps, m.memoizedState = R.memoizedState, m.updateQueue = R.updateQueue, m.type = R.type, n = R.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return zt(We, We.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && ln() > ju && (r.flags |= 128, u = !0, On(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Mt(R), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), On(m, !0), m.tail === null && m.tailMode === "hidden" && !R.alternate && !dn) return _r(r), null;
          } else 2 * ln() - m.renderingStartTime > ju && l !== 1073741824 && (r.flags |= 128, u = !0, On(m, !1), r.lanes = 4194304);
          m.isBackwards ? (R.sibling = r.child, r.child = R) : (l = m.last, l !== null ? l.sibling = R : r.child = R, m.last = R);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = ln(), r.sibling = null, l = We.current, zt(We, u ? l & 1 | 2 : l & 1), r) : (_r(r), null);
      case 22:
      case 23:
        return bf(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ua & 1073741824 && (_r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function ng(n, r) {
    switch (Vc(r), r.tag) {
      case 1:
        return Vn(r.type) && Jr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Cu(), Ve(dt), Ve(tr), Va(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ze(r), null;
      case 13:
        if (Ve(We), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(f(340));
          vu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ve(We), null;
      case 4:
        return Cu(), null;
      case 10:
        return Bd(r.type._context), null;
      case 22:
      case 23:
        return bf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ou = !1, dr = !1, vf = typeof WeakSet == "function" ? WeakSet : Set, ze = null;
  function Du(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (u) {
      Ln(n, r, u);
    }
    else l.current = null;
  }
  function Jd(n, r, l) {
    try {
      l();
    } catch (u) {
      Ln(n, r, u);
    }
  }
  var mf = !1;
  function rg(n, r) {
    if (Dd = iu, n = Yh(), bs(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var u = l.getSelection && l.getSelection();
        if (u && u.rangeCount !== 0) {
          l = u.anchorNode;
          var d = u.anchorOffset, m = u.focusNode;
          u = u.focusOffset;
          try {
            l.nodeType, m.nodeType;
          } catch {
            l = null;
            break e;
          }
          var R = 0, _ = -1, L = -1, G = 0, fe = 0, de = n, le = null;
          t: for (; ; ) {
            for (var Oe; de !== l || d !== 0 && de.nodeType !== 3 || (_ = R + d), de !== m || u !== 0 && de.nodeType !== 3 || (L = R + u), de.nodeType === 3 && (R += de.nodeValue.length), (Oe = de.firstChild) !== null; )
              le = de, de = Oe;
            for (; ; ) {
              if (de === n) break t;
              if (le === l && ++G === d && (_ = R), le === m && ++fe === u && (L = R), (Oe = de.nextSibling) !== null) break;
              de = le, le = de.parentNode;
            }
            de = Oe;
          }
          l = _ === -1 || L === -1 ? null : { start: _, end: L };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ld = { focusedElem: n, selectionRange: l }, iu = !1, ze = r; ze !== null; ) if (r = ze, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ze = n;
    else for (; ze !== null; ) {
      r = ze;
      try {
        var Ue = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ue !== null) {
              var $e = Ue.memoizedProps, jn = Ue.memoizedState, j = r.stateNode, M = j.getSnapshotBeforeUpdate(r.elementType === r.type ? $e : ra(r.type, $e), jn);
              j.__reactInternalSnapshotBeforeUpdate = M;
            }
            break;
          case 3:
            var V = r.stateNode.containerInfo;
            V.nodeType === 1 ? V.textContent = "" : V.nodeType === 9 && V.documentElement && V.removeChild(V.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(f(163));
        }
      } catch (ge) {
        Ln(r, r.return, ge);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ze = n;
        break;
      }
      ze = r.return;
    }
    return Ue = mf, mf = !1, Ue;
  }
  function Lu(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var d = u = u.next;
      do {
        if ((d.tag & n) === n) {
          var m = d.destroy;
          d.destroy = void 0, m !== void 0 && Jd(r, l, m);
        }
        d = d.next;
      } while (d !== u);
    }
  }
  function yf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function gf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Rv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Rv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ja], delete r[zs], delete r[zd], delete r[qy], delete r[Gy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function ep(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function bv(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || ep(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Zs(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Pc));
    else if (u !== 4 && (n = n.child, n !== null)) for (Zs(n, r, l), n = n.sibling; n !== null; ) Zs(n, r, l), n = n.sibling;
  }
  function Nu(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Nu(n, r, l), n = n.sibling; n !== null; ) Nu(n, r, l), n = n.sibling;
  }
  var mn = null, nr = !1;
  function Ar(n, r, l) {
    for (l = l.child; l !== null; ) Mu(n, r, l), l = l.sibling;
  }
  function Mu(n, r, l) {
    if (Gr && typeof Gr.onCommitFiberUnmount == "function") try {
      Gr.onCommitFiberUnmount(Rl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        dr || Du(l, r);
      case 6:
        var u = mn, d = nr;
        mn = null, Ar(n, r, l), mn = u, nr = d, mn !== null && (nr ? (n = mn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : mn.removeChild(l.stateNode));
        break;
      case 18:
        mn !== null && (nr ? (n = mn, l = l.stateNode, n.nodeType === 8 ? Ad(n.parentNode, l) : n.nodeType === 1 && Ad(n, l), Fa(n)) : Ad(mn, l.stateNode));
        break;
      case 4:
        u = mn, d = nr, mn = l.stateNode.containerInfo, nr = !0, Ar(n, r, l), mn = u, nr = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!dr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          d = u = u.next;
          do {
            var m = d, R = m.destroy;
            m = m.tag, R !== void 0 && (m & 2 || m & 4) && Jd(l, r, R), d = d.next;
          } while (d !== u);
        }
        Ar(n, r, l);
        break;
      case 1:
        if (!dr && (Du(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (_) {
          Ln(l, r, _);
        }
        Ar(n, r, l);
        break;
      case 21:
        Ar(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (dr = (u = dr) || l.memoizedState !== null, Ar(n, r, l), dr = u) : Ar(n, r, l);
        break;
      default:
        Ar(n, r, l);
    }
  }
  function Au(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new vf()), r.forEach(function(u) {
        var d = cg.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(d, d));
      });
    }
  }
  function rr(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var d = l[u];
      try {
        var m = n, R = r, _ = R;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 5:
              mn = _.stateNode, nr = !1;
              break e;
            case 3:
              mn = _.stateNode.containerInfo, nr = !0;
              break e;
            case 4:
              mn = _.stateNode.containerInfo, nr = !0;
              break e;
          }
          _ = _.return;
        }
        if (mn === null) throw Error(f(160));
        Mu(m, R, d), mn = null, nr = !1;
        var L = d.alternate;
        L !== null && (L.return = null), d.return = null;
      } catch (G) {
        Ln(d, r, G);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Tv(r, n), r = r.sibling;
  }
  function Tv(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (rr(r, n), Di(n), u & 4) {
          try {
            Lu(3, n, n.return), yf(3, n);
          } catch ($e) {
            Ln(n, n.return, $e);
          }
          try {
            Lu(5, n, n.return);
          } catch ($e) {
            Ln(n, n.return, $e);
          }
        }
        break;
      case 1:
        rr(r, n), Di(n), u & 512 && l !== null && Du(l, l.return);
        break;
      case 5:
        if (rr(r, n), Di(n), u & 512 && l !== null && Du(l, l.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            ga(d, "");
          } catch ($e) {
            Ln(n, n.return, $e);
          }
        }
        if (u & 4 && (d = n.stateNode, d != null)) {
          var m = n.memoizedProps, R = l !== null ? l.memoizedProps : m, _ = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null) try {
            _ === "input" && m.type === "radio" && m.name != null && Qn(d, m), Nn(_, R);
            var G = Nn(_, m);
            for (R = 0; R < L.length; R += 2) {
              var fe = L[R], de = L[R + 1];
              fe === "style" ? St(d, de) : fe === "dangerouslySetInnerHTML" ? ya(d, de) : fe === "children" ? ga(d, de) : Ye(d, fe, de, G);
            }
            switch (_) {
              case "input":
                Hn(d, m);
                break;
              case "textarea":
                xr(d, m);
                break;
              case "select":
                var le = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!m.multiple;
                var Oe = m.value;
                Oe != null ? qn(d, !!m.multiple, Oe, !1) : le !== !!m.multiple && (m.defaultValue != null ? qn(
                  d,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : qn(d, !!m.multiple, m.multiple ? [] : "", !1));
            }
            d[zs] = m;
          } catch ($e) {
            Ln(n, n.return, $e);
          }
        }
        break;
      case 6:
        if (rr(r, n), Di(n), u & 4) {
          if (n.stateNode === null) throw Error(f(162));
          d = n.stateNode, m = n.memoizedProps;
          try {
            d.nodeValue = m;
          } catch ($e) {
            Ln(n, n.return, $e);
          }
        }
        break;
      case 3:
        if (rr(r, n), Di(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Fa(r.containerInfo);
        } catch ($e) {
          Ln(n, n.return, $e);
        }
        break;
      case 4:
        rr(r, n), Di(n);
        break;
      case 13:
        rr(r, n), Di(n), d = n.child, d.flags & 8192 && (m = d.memoizedState !== null, d.stateNode.isHidden = m, !m || d.alternate !== null && d.alternate.memoizedState !== null || (Ef = ln())), u & 4 && Au(n);
        break;
      case 22:
        if (fe = l !== null && l.memoizedState !== null, n.mode & 1 ? (dr = (G = dr) || fe, rr(r, n), dr = G) : rr(r, n), Di(n), u & 8192) {
          if (G = n.memoizedState !== null, (n.stateNode.isHidden = G) && !fe && n.mode & 1) for (ze = n, fe = n.child; fe !== null; ) {
            for (de = ze = fe; ze !== null; ) {
              switch (le = ze, Oe = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lu(4, le, le.return);
                  break;
                case 1:
                  Du(le, le.return);
                  var Ue = le.stateNode;
                  if (typeof Ue.componentWillUnmount == "function") {
                    u = le, l = le.return;
                    try {
                      r = u, Ue.props = r.memoizedProps, Ue.state = r.memoizedState, Ue.componentWillUnmount();
                    } catch ($e) {
                      Ln(u, l, $e);
                    }
                  }
                  break;
                case 5:
                  Du(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    kv(de);
                    continue;
                  }
              }
              Oe !== null ? (Oe.return = le, ze = Oe) : kv(de);
            }
            fe = fe.sibling;
          }
          e: for (fe = null, de = n; ; ) {
            if (de.tag === 5) {
              if (fe === null) {
                fe = de;
                try {
                  d = de.stateNode, G ? (m = d.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (_ = de.stateNode, L = de.memoizedProps.style, R = L != null && L.hasOwnProperty("display") ? L.display : null, _.style.display = qe("display", R));
                } catch ($e) {
                  Ln(n, n.return, $e);
                }
              }
            } else if (de.tag === 6) {
              if (fe === null) try {
                de.stateNode.nodeValue = G ? "" : de.memoizedProps;
              } catch ($e) {
                Ln(n, n.return, $e);
              }
            } else if ((de.tag !== 22 && de.tag !== 23 || de.memoizedState === null || de === n) && de.child !== null) {
              de.child.return = de, de = de.child;
              continue;
            }
            if (de === n) break e;
            for (; de.sibling === null; ) {
              if (de.return === null || de.return === n) break e;
              fe === de && (fe = null), de = de.return;
            }
            fe === de && (fe = null), de.sibling.return = de.return, de = de.sibling;
          }
        }
        break;
      case 19:
        rr(r, n), Di(n), u & 4 && Au(n);
        break;
      case 21:
        break;
      default:
        rr(
          r,
          n
        ), Di(n);
    }
  }
  function Di(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (ep(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(f(160));
        }
        switch (u.tag) {
          case 5:
            var d = u.stateNode;
            u.flags & 32 && (ga(d, ""), u.flags &= -33);
            var m = bv(n);
            Nu(n, m, d);
            break;
          case 3:
          case 4:
            var R = u.stateNode.containerInfo, _ = bv(n);
            Zs(n, _, R);
            break;
          default:
            throw Error(f(161));
        }
      } catch (L) {
        Ln(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ag(n, r, l) {
    ze = n, tp(n);
  }
  function tp(n, r, l) {
    for (var u = (n.mode & 1) !== 0; ze !== null; ) {
      var d = ze, m = d.child;
      if (d.tag === 22 && u) {
        var R = d.memoizedState !== null || Ou;
        if (!R) {
          var _ = d.alternate, L = _ !== null && _.memoizedState !== null || dr;
          _ = Ou;
          var G = dr;
          if (Ou = R, (dr = L) && !G) for (ze = d; ze !== null; ) R = ze, L = R.child, R.tag === 22 && R.memoizedState !== null ? np(d) : L !== null ? (L.return = R, ze = L) : np(d);
          for (; m !== null; ) ze = m, tp(m), m = m.sibling;
          ze = d, Ou = _, dr = G;
        }
        zu(n);
      } else d.subtreeFlags & 8772 && m !== null ? (m.return = d, ze = m) : zu(n);
    }
  }
  function zu(n) {
    for (; ze !== null; ) {
      var r = ze;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              dr || yf(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !dr) if (l === null) u.componentDidMount();
              else {
                var d = r.elementType === r.type ? l.memoizedProps : ra(r.type, l.memoizedProps);
                u.componentDidUpdate(d, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && gu(r, m, u);
              break;
            case 3:
              var R = r.updateQueue;
              if (R !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                gu(r, R, l);
              }
              break;
            case 5:
              var _ = r.stateNode;
              if (l === null && r.flags & 4) {
                l = _;
                var L = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    L.autoFocus && l.focus();
                    break;
                  case "img":
                    L.src && (l.src = L.src);
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
                var G = r.alternate;
                if (G !== null) {
                  var fe = G.memoizedState;
                  if (fe !== null) {
                    var de = fe.dehydrated;
                    de !== null && Fa(de);
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
          dr || r.flags & 512 && gf(r);
        } catch (le) {
          Ln(r, r.return, le);
        }
      }
      if (r === n) {
        ze = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ze = l;
        break;
      }
      ze = r.return;
    }
  }
  function kv(n) {
    for (; ze !== null; ) {
      var r = ze;
      if (r === n) {
        ze = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ze = l;
        break;
      }
      ze = r.return;
    }
  }
  function np(n) {
    for (; ze !== null; ) {
      var r = ze;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              yf(4, r);
            } catch (L) {
              Ln(r, l, L);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var d = r.return;
              try {
                u.componentDidMount();
              } catch (L) {
                Ln(r, d, L);
              }
            }
            var m = r.return;
            try {
              gf(r);
            } catch (L) {
              Ln(r, m, L);
            }
            break;
          case 5:
            var R = r.return;
            try {
              gf(r);
            } catch (L) {
              Ln(r, R, L);
            }
        }
      } catch (L) {
        Ln(r, r.return, L);
      }
      if (r === n) {
        ze = null;
        break;
      }
      var _ = r.sibling;
      if (_ !== null) {
        _.return = r.return, ze = _;
        break;
      }
      ze = r.return;
    }
  }
  var ig = Math.ceil, Fo = Ae.ReactCurrentDispatcher, Sf = Ae.ReactCurrentOwner, Wa = Ae.ReactCurrentBatchConfig, Rt = 0, Dn = null, pn = null, Gn = 0, ua = 0, Uu = Jt(0), Kn = 0, Js = null, jo = 0, Fu = 0, rp = 0, Wl = null, Or = null, Ef = 0, ju = 1 / 0, ol = null, wf = !1, ap = null, Qa = null, Pu = !1, qa = null, Cf = 0, ec = 0, xf = null, tc = -1, Po = 0;
  function ar() {
    return Rt & 6 ? ln() : tc !== -1 ? tc : tc = ln();
  }
  function ul(n) {
    return n.mode & 1 ? Rt & 2 && Gn !== 0 ? Gn & -Gn : Ky.transition !== null ? (Po === 0 && (Po = vo()), Po) : (n = Tt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ys(n.type)), n) : 1;
  }
  function wn(n, r, l, u) {
    if (50 < ec) throw ec = 0, xf = null, Error(f(185));
    Tl(n, l, u), (!(Rt & 2) || n !== Dn) && (n === Dn && (!(Rt & 2) && (Fu |= l), Kn === 4 && Li(n, Gn)), Xn(n, u), l === 1 && Rt === 0 && !(r.mode & 1) && (ju = ln() + 500, zl && bi()));
  }
  function Xn(n, r) {
    var l = n.callbackNode;
    bl(n, r);
    var u = Si(n, n === Dn ? Gn : 0);
    if (u === 0) l !== null && an(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && an(l), r === 1) n.tag === 0 ? av(Hu.bind(null, n)) : Bc(Hu.bind(null, n)), nv(function() {
        !(Rt & 6) && bi();
      }), l = null;
      else {
        switch (hs(u)) {
          case 1:
            l = os;
            break;
          case 4:
            l = gi;
            break;
          case 16:
            l = Et;
            break;
          case 536870912:
            l = Ii;
            break;
          default:
            l = Et;
        }
        l = zv(l, Rf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Rf(n, r) {
    if (tc = -1, Po = 0, Rt & 6) throw Error(f(327));
    var l = n.callbackNode;
    if (Bu() && n.callbackNode !== l) return null;
    var u = Si(n, n === Dn ? Gn : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = Tf(n, u);
    else {
      r = u;
      var d = Rt;
      Rt |= 2;
      var m = Ov();
      (Dn !== n || Gn !== r) && (ol = null, ju = ln() + 500, Bo(n, r));
      do
        try {
          og();
          break;
        } catch (_) {
          _v(n, _);
        }
      while (!0);
      Hd(), Fo.current = m, Rt = d, pn !== null ? r = 0 : (Dn = null, Gn = 0, r = Kn);
    }
    if (r !== 0) {
      if (r === 2 && (d = Ei(n), d !== 0 && (u = d, r = Ho(n, d))), r === 1) throw l = Js, Bo(n, 0), Li(n, u), Xn(n, ln()), l;
      if (r === 6) Li(n, u);
      else {
        if (d = n.current.alternate, !(u & 30) && !lp(d) && (r = Tf(n, u), r === 2 && (m = Ei(n), m !== 0 && (u = m, r = Ho(n, m))), r === 1)) throw l = Js, Bo(n, 0), Li(n, u), Xn(n, ln()), l;
        switch (n.finishedWork = d, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            Ql(n, Or, ol);
            break;
          case 3:
            if (Li(n, u), (u & 130023424) === u && (r = Ef + 500 - ln(), 10 < r)) {
              if (Si(n, 0) !== 0) break;
              if (d = n.suspendedLanes, (d & u) !== u) {
                ar(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = Ns(Ql.bind(null, n, Or, ol), r);
              break;
            }
            Ql(n, Or, ol);
            break;
          case 4:
            if (Li(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, d = -1; 0 < u; ) {
              var R = 31 - Nr(u);
              m = 1 << R, R = r[R], R > d && (d = R), u &= ~m;
            }
            if (u = d, u = ln() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * ig(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Ns(Ql.bind(null, n, Or, ol), u);
              break;
            }
            Ql(n, Or, ol);
            break;
          case 5:
            Ql(n, Or, ol);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return Xn(n, ln()), n.callbackNode === l ? Rf.bind(null, n) : null;
  }
  function Ho(n, r) {
    var l = Wl;
    return n.current.memoizedState.isDehydrated && (Bo(n, r).flags |= 256), n = Tf(n, r), n !== 2 && (r = Or, Or = l, r !== null && ip(r)), n;
  }
  function ip(n) {
    Or === null ? Or = n : Or.push.apply(Or, n);
  }
  function lp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var u = 0; u < l.length; u++) {
          var d = l[u], m = d.getSnapshot;
          d = d.value;
          try {
            if (!si(m(), d)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
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
  function Li(n, r) {
    for (r &= ~rp, r &= ~Fu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Nr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Hu(n) {
    if (Rt & 6) throw Error(f(327));
    Bu();
    var r = Si(n, 0);
    if (!(r & 1)) return Xn(n, ln()), null;
    var l = Tf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Ei(n);
      u !== 0 && (r = u, l = Ho(n, u));
    }
    if (l === 1) throw l = Js, Bo(n, 0), Li(n, r), Xn(n, ln()), l;
    if (l === 6) throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ql(n, Or, ol), Xn(n, ln()), null;
  }
  function op(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (ju = ln() + 500, zl && bi());
    }
  }
  function Ni(n) {
    qa !== null && qa.tag === 0 && !(Rt & 6) && Bu();
    var r = Rt;
    Rt |= 1;
    var l = Wa.transition, u = Tt;
    try {
      if (Wa.transition = null, Tt = 1, n) return n();
    } finally {
      Tt = u, Wa.transition = l, Rt = r, !(Rt & 6) && bi();
    }
  }
  function bf() {
    ua = Uu.current, Ve(Uu);
  }
  function Bo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ms(l)), pn !== null) for (l = pn.return; l !== null; ) {
      var u = l;
      switch (Vc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Jr();
          break;
        case 3:
          Cu(), Ve(dt), Ve(tr), Va();
          break;
        case 5:
          Ze(u);
          break;
        case 4:
          Cu();
          break;
        case 13:
          Ve(We);
          break;
        case 19:
          Ve(We);
          break;
        case 10:
          Bd(u.type._context);
          break;
        case 22:
        case 23:
          bf();
      }
      l = l.return;
    }
    if (Dn = n, pn = n = ql(n.current, null), Gn = ua = r, Kn = 0, Js = null, rp = Fu = jo = 0, Or = Wl = null, kr !== null) {
      for (r = 0; r < kr.length; r++) if (l = kr[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var d = u.next, m = l.pending;
        if (m !== null) {
          var R = m.next;
          m.next = d, u.next = R;
        }
        l.pending = u;
      }
      kr = null;
    }
    return n;
  }
  function _v(n, r) {
    do {
      var l = pn;
      try {
        if (Hd(), Bs.current = sf, zn) {
          for (var u = En.memoizedState; u !== null; ) {
            var d = u.queue;
            d !== null && (d.pending = null), u = u.next;
          }
          zn = !1;
        }
        if (_o = 0, ne = An = En = null, tt = !1, _i = 0, Sf.current = null, l === null || l.return === null) {
          Kn = 1, Js = r, pn = null;
          break;
        }
        e: {
          var m = n, R = l.return, _ = l, L = r;
          if (r = Gn, _.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var G = L, fe = _, de = fe.tag;
            if (!(fe.mode & 1) && (de === 0 || de === 11 || de === 15)) {
              var le = fe.alternate;
              le ? (fe.updateQueue = le.updateQueue, fe.memoizedState = le.memoizedState, fe.lanes = le.lanes) : (fe.updateQueue = null, fe.memoizedState = null);
            }
            var Oe = Sv(R);
            if (Oe !== null) {
              Oe.flags &= -257, Kd(Oe, R, _, m, r), Oe.mode & 1 && qs(m, G, r), r = Oe, L = G;
              var Ue = r.updateQueue;
              if (Ue === null) {
                var $e = /* @__PURE__ */ new Set();
                $e.add(L), r.updateQueue = $e;
              } else Ue.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                qs(m, G, r), nc();
                break e;
              }
              L = Error(f(426));
            }
          } else if (dn && _.mode & 1) {
            var jn = Sv(R);
            if (jn !== null) {
              !(jn.flags & 65536) && (jn.flags |= 256), Kd(jn, R, _, m, r), In(Il(L, _));
              break e;
            }
          }
          m = L = Il(L, _), Kn !== 4 && (Kn = 2), Wl === null ? Wl = [m] : Wl.push(m), m = R;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var j = yv(m, L, r);
                uv(m, j);
                break e;
              case 1:
                _ = L;
                var M = m.type, V = m.stateNode;
                if (!(m.flags & 128) && (typeof M.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (Qa === null || !Qa.has(V)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var ge = gv(m, _, r);
                  uv(m, ge);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Lv(l);
      } catch (Ie) {
        r = Ie, pn === l && l !== null && (pn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ov() {
    var n = Fo.current;
    return Fo.current = sf, n === null ? sf : n;
  }
  function nc() {
    (Kn === 0 || Kn === 3 || Kn === 2) && (Kn = 4), Dn === null || !(jo & 268435455) && !(Fu & 268435455) || Li(Dn, Gn);
  }
  function Tf(n, r) {
    var l = Rt;
    Rt |= 2;
    var u = Ov();
    (Dn !== n || Gn !== r) && (ol = null, Bo(n, r));
    do
      try {
        lg();
        break;
      } catch (d) {
        _v(n, d);
      }
    while (!0);
    if (Hd(), Rt = l, Fo.current = u, pn !== null) throw Error(f(261));
    return Dn = null, Gn = 0, Kn;
  }
  function lg() {
    for (; pn !== null; ) Dv(pn);
  }
  function og() {
    for (; pn !== null && !br(); ) Dv(pn);
  }
  function Dv(n) {
    var r = Av(n.alternate, n, ua);
    n.memoizedProps = n.pendingProps, r === null ? Lv(n) : pn = r, Sf.current = null;
  }
  function Lv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ng(l, r), l !== null) {
          l.flags &= 32767, pn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Kn = 6, pn = null;
          return;
        }
      } else if (l = tg(l, r, ua), l !== null) {
        pn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        pn = r;
        return;
      }
      pn = r = n;
    } while (r !== null);
    Kn === 0 && (Kn = 5);
  }
  function Ql(n, r, l) {
    var u = Tt, d = Wa.transition;
    try {
      Wa.transition = null, Tt = 1, ug(n, r, l, u);
    } finally {
      Wa.transition = d, Tt = u;
    }
    return null;
  }
  function ug(n, r, l, u) {
    do
      Bu();
    while (qa !== null);
    if (Rt & 6) throw Error(f(327));
    l = n.finishedWork;
    var d = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = l.lanes | l.childLanes;
    if (ds(n, m), n === Dn && (pn = Dn = null, Gn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Pu || (Pu = !0, zv(Et, function() {
      return Bu(), null;
    })), m = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || m) {
      m = Wa.transition, Wa.transition = null;
      var R = Tt;
      Tt = 1;
      var _ = Rt;
      Rt |= 4, Sf.current = null, rg(n, l), Tv(l, n), Eo(Ld), iu = !!Dd, Ld = Dd = null, n.current = l, ag(l), yi(), Rt = _, Tt = R, Wa.transition = m;
    } else n.current = l;
    if (Pu && (Pu = !1, qa = n, Cf = d), m = n.pendingLanes, m === 0 && (Qa = null), us(l.stateNode), Xn(n, ln()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) d = r[l], u(d.value, { componentStack: d.stack, digest: d.digest });
    if (wf) throw wf = !1, n = ap, ap = null, n;
    return Cf & 1 && n.tag !== 0 && Bu(), m = n.pendingLanes, m & 1 ? n === xf ? ec++ : (ec = 0, xf = n) : ec = 0, bi(), null;
  }
  function Bu() {
    if (qa !== null) {
      var n = hs(Cf), r = Wa.transition, l = Tt;
      try {
        if (Wa.transition = null, Tt = 16 > n ? 16 : n, qa === null) var u = !1;
        else {
          if (n = qa, qa = null, Cf = 0, Rt & 6) throw Error(f(331));
          var d = Rt;
          for (Rt |= 4, ze = n.current; ze !== null; ) {
            var m = ze, R = m.child;
            if (ze.flags & 16) {
              var _ = m.deletions;
              if (_ !== null) {
                for (var L = 0; L < _.length; L++) {
                  var G = _[L];
                  for (ze = G; ze !== null; ) {
                    var fe = ze;
                    switch (fe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lu(8, fe, m);
                    }
                    var de = fe.child;
                    if (de !== null) de.return = fe, ze = de;
                    else for (; ze !== null; ) {
                      fe = ze;
                      var le = fe.sibling, Oe = fe.return;
                      if (Rv(fe), fe === G) {
                        ze = null;
                        break;
                      }
                      if (le !== null) {
                        le.return = Oe, ze = le;
                        break;
                      }
                      ze = Oe;
                    }
                  }
                }
                var Ue = m.alternate;
                if (Ue !== null) {
                  var $e = Ue.child;
                  if ($e !== null) {
                    Ue.child = null;
                    do {
                      var jn = $e.sibling;
                      $e.sibling = null, $e = jn;
                    } while ($e !== null);
                  }
                }
                ze = m;
              }
            }
            if (m.subtreeFlags & 2064 && R !== null) R.return = m, ze = R;
            else e: for (; ze !== null; ) {
              if (m = ze, m.flags & 2048) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Lu(9, m, m.return);
              }
              var j = m.sibling;
              if (j !== null) {
                j.return = m.return, ze = j;
                break e;
              }
              ze = m.return;
            }
          }
          var M = n.current;
          for (ze = M; ze !== null; ) {
            R = ze;
            var V = R.child;
            if (R.subtreeFlags & 2064 && V !== null) V.return = R, ze = V;
            else e: for (R = M; ze !== null; ) {
              if (_ = ze, _.flags & 2048) try {
                switch (_.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yf(9, _);
                }
              } catch (Ie) {
                Ln(_, _.return, Ie);
              }
              if (_ === R) {
                ze = null;
                break e;
              }
              var ge = _.sibling;
              if (ge !== null) {
                ge.return = _.return, ze = ge;
                break e;
              }
              ze = _.return;
            }
          }
          if (Rt = d, bi(), Gr && typeof Gr.onPostCommitFiberRoot == "function") try {
            Gr.onPostCommitFiberRoot(Rl, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Tt = l, Wa.transition = r;
      }
    }
    return !1;
  }
  function Nv(n, r, l) {
    r = Il(l, r), r = yv(n, r, 1), n = Hl(n, r, 1), r = ar(), n !== null && (Tl(n, 1, r), Xn(n, r));
  }
  function Ln(n, r, l) {
    if (n.tag === 3) Nv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Nv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Qa === null || !Qa.has(u))) {
          n = Il(l, n), n = gv(r, n, 1), r = Hl(r, n, 1), n = ar(), r !== null && (Tl(r, 1, n), Xn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function sg(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = ar(), n.pingedLanes |= n.suspendedLanes & l, Dn === n && (Gn & l) === l && (Kn === 4 || Kn === 3 && (Gn & 130023424) === Gn && 500 > ln() - Ef ? Bo(n, 0) : rp |= l), Xn(n, r);
  }
  function Mv(n, r) {
    r === 0 && (n.mode & 1 ? (r = tu, tu <<= 1, !(tu & 130023424) && (tu = 4194304)) : r = 1);
    var l = ar();
    n = al(n, r), n !== null && (Tl(n, r, l), Xn(n, l));
  }
  function up(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Mv(n, l);
  }
  function cg(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, d = n.memoizedState;
        d !== null && (l = d.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    u !== null && u.delete(r), Mv(n, l);
  }
  var Av;
  Av = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || dt.current) la = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return la = !1, ll(n, r, l);
      la = !!(n.flags & 131072);
    }
    else la = !1, dn && r.flags & 1048576 && Fl(r, bo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Xs(n, r), n = r.pendingProps;
        var d = xa(r, tr.current);
        Mn(r, l), d = Oo(null, r, u, n, d, l);
        var m = $l();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Vn(u) ? (m = !0, Ro(r)) : m = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, $d(r), d.updater = Qc, r.stateNode = d, d._reactInternals = r, Id(r, u, n, l), r = ff(null, r, u, !0, m, l)) : (r.tag = 0, dn && m && $c(r), Un(null, r, d, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Xs(n, r), n = r.pendingProps, d = u._init, u = d(u._payload), r.type = u, d = r.tag = fg(u), n = ra(u, n), d) {
            case 0:
              r = vt(null, r, u, n, l);
              break e;
            case 1:
              r = Gs(null, r, u, n, l);
              break e;
            case 11:
              r = Tu(null, r, u, n, l);
              break e;
            case 14:
              r = Yl(null, r, u, ra(u.type, n), l);
              break e;
          }
          throw Error(f(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), vt(n, r, u, d, l);
      case 1:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), Gs(n, r, u, d, l);
      case 3:
        e: {
          if (eg(r), n === null) throw Error(f(387));
          u = r.pendingProps, m = r.memoizedState, d = m.element, ov(n, r), Fs(r, u, null, l);
          var R = r.memoizedState;
          if (u = R.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: R.cache, pendingSuspenseBoundaries: R.pendingSuspenseBoundaries, transitions: R.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            d = Il(Error(f(423)), r), r = wv(n, r, u, l, d);
            break e;
          } else if (u !== d) {
            d = Il(Error(f(424)), r), r = wv(n, r, u, l, d);
            break e;
          } else for (ba = Ca(r.stateNode.containerInfo.firstChild), Ra = r, dn = !0, $a = null, l = hv(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (vu(), u === d) {
              r = Fn(n, r, l);
              break e;
            }
            Un(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return qc(r), n === null && Ic(r), u = r.type, d = r.pendingProps, m = n !== null ? n.memoizedProps : null, R = d.children, xo(u, d) ? R = null : m !== null && xo(u, m) && (r.flags |= 32), zo(n, r), Un(n, r, R, l), r.child;
      case 6:
        return n === null && Ic(r), null;
      case 13:
        return Cv(n, r, l);
      case 4:
        return Yd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Eu(r, null, u, l) : Un(n, r, u, l), r.child;
      case 11:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), Tu(n, r, u, d, l);
      case 7:
        return Un(n, r, r.pendingProps, l), r.child;
      case 8:
        return Un(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Un(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, d = r.pendingProps, m = r.memoizedProps, R = d.value, zt(mu, u._currentValue), u._currentValue = R, m !== null) if (si(m.value, R)) {
            if (m.children === d.children && !dt.current) {
              r = Fn(n, r, l);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var _ = m.dependencies;
            if (_ !== null) {
              R = m.child;
              for (var L = _.firstContext; L !== null; ) {
                if (L.context === u) {
                  if (m.tag === 1) {
                    L = on(-1, l & -l), L.tag = 2;
                    var G = m.updateQueue;
                    if (G !== null) {
                      G = G.shared;
                      var fe = G.pending;
                      fe === null ? L.next = L : (L.next = fe.next, fe.next = L), G.pending = L;
                    }
                  }
                  m.lanes |= l, L = m.alternate, L !== null && (L.lanes |= l), jl(
                    m.return,
                    l,
                    r
                  ), _.lanes |= l;
                  break;
                }
                L = L.next;
              }
            } else if (m.tag === 10) R = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (R = m.return, R === null) throw Error(f(341));
              R.lanes |= l, _ = R.alternate, _ !== null && (_.lanes |= l), jl(R, l, r), R = m.sibling;
            } else R = m.child;
            if (R !== null) R.return = m;
            else for (R = m; R !== null; ) {
              if (R === r) {
                R = null;
                break;
              }
              if (m = R.sibling, m !== null) {
                m.return = R.return, R = m;
                break;
              }
              R = R.return;
            }
            m = R;
          }
          Un(n, r, d.children, l), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, u = r.pendingProps.children, Mn(r, l), d = Ee(d), u = u(d), r.flags |= 1, Un(n, r, u, l), r.child;
      case 14:
        return u = r.type, d = ra(u, r.pendingProps), d = ra(u.type, d), Yl(n, r, u, d, l);
      case 15:
        return cf(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), Xs(n, r), r.tag = 1, Vn(u) ? (n = !0, Ro(r)) : n = !1, Mn(r, l), cv(r, u, d), Id(r, u, d, l), ff(null, r, u, !0, n, l);
      case 19:
        return Zd(n, r, l);
      case 22:
        return oa(n, r, l);
    }
    throw Error(f(156, r.tag));
  };
  function zv(n, r) {
    return rn(n, r);
  }
  function Uv(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ga(n, r, l, u) {
    return new Uv(n, r, l, u);
  }
  function sp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function fg(n) {
    if (typeof n == "function") return sp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === re) return 11;
      if (n === Se) return 14;
    }
    return 2;
  }
  function ql(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ga(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function kf(n, r, l, u, d, m) {
    var R = 2;
    if (u = n, typeof n == "function") sp(n) && (R = 1);
    else if (typeof n == "string") R = 5;
    else e: switch (n) {
      case Ge:
        return $o(l.children, d, m, r);
      case rt:
        R = 8, d |= 8;
        break;
      case tn:
        return n = Ga(12, l, r, d | 2), n.elementType = tn, n.lanes = m, n;
      case me:
        return n = Ga(13, l, r, d), n.elementType = me, n.lanes = m, n;
      case ue:
        return n = Ga(19, l, r, d), n.elementType = ue, n.lanes = m, n;
      case ve:
        return _f(l, d, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Gt:
            R = 10;
            break e;
          case P:
            R = 9;
            break e;
          case re:
            R = 11;
            break e;
          case Se:
            R = 14;
            break e;
          case pe:
            R = 16, u = null;
            break e;
        }
        throw Error(f(130, n == null ? n : typeof n, ""));
    }
    return r = Ga(R, l, r, d), r.elementType = n, r.type = u, r.lanes = m, r;
  }
  function $o(n, r, l, u) {
    return n = Ga(7, n, u, r), n.lanes = l, n;
  }
  function _f(n, r, l, u) {
    return n = Ga(22, n, u, r), n.elementType = ve, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Of(n, r, l) {
    return n = Ga(6, n, null, r), n.lanes = l, n;
  }
  function rc(n, r, l) {
    return r = Ga(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ac(n, r, l, u, d) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mo(0), this.expirationTimes = mo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mo(0), this.identifierPrefix = u, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function cp(n, r, l, u, d, m, R, _, L) {
    return n = new ac(n, r, l, _, L), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Ga(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $d(m), n;
  }
  function Fv(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _e, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function fp(n) {
    if (!n) return Pa;
    n = n._reactInternals;
    e: {
      if (Te(n) !== n || n.tag !== 1) throw Error(f(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Vn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(f(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Vn(l)) return Al(n, l, r);
    }
    return r;
  }
  function dp(n, r, l, u, d, m, R, _, L) {
    return n = cp(l, u, !0, n, d, m, R, _, L), n.context = fp(null), l = n.current, u = ar(), d = ul(l), m = on(u, d), m.callback = r ?? null, Hl(l, m, d), n.current.lanes = d, Tl(n, d, u), Xn(n, u), n;
  }
  function Df(n, r, l, u) {
    var d = r.current, m = ar(), R = ul(d);
    return l = fp(l), r.context === null ? r.context = l : r.pendingContext = l, r = on(m, R), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Hl(d, r, R), n !== null && (wn(n, d, R, m), Wc(n, d, R)), R;
  }
  function ic(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function jv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pp(n, r) {
    jv(n, r), (n = n.alternate) && jv(n, r);
  }
  function dg() {
    return null;
  }
  var hp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Lf(n) {
    this._internalRoot = n;
  }
  lc.prototype.render = Lf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(f(409));
    Df(n, r, null, null);
  }, lc.prototype.unmount = Lf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ni(function() {
        Df(null, n, null, null);
      }), r[ci] = null;
    }
  };
  function lc(n) {
    this._internalRoot = n;
  }
  lc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Lt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < cn.length && r !== 0 && r < cn[l].priority; l++) ;
      cn.splice(l, 0, n), l === 0 && oi(n);
    }
  };
  function Gl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Nf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Pv() {
  }
  function pg(n, r, l, u, d) {
    if (d) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var G = ic(R);
          m.call(G);
        };
      }
      var R = dp(r, u, n, 0, null, !1, !1, "", Pv);
      return n._reactRootContainer = R, n[ci] = R.current, Ci(n.nodeType === 8 ? n.parentNode : n), Ni(), R;
    }
    for (; d = n.lastChild; ) n.removeChild(d);
    if (typeof u == "function") {
      var _ = u;
      u = function() {
        var G = ic(L);
        _.call(G);
      };
    }
    var L = cp(n, 0, !1, null, null, !1, !1, "", Pv);
    return n._reactRootContainer = L, n[ci] = L.current, Ci(n.nodeType === 8 ? n.parentNode : n), Ni(function() {
      Df(r, L, l, u);
    }), L;
  }
  function Mf(n, r, l, u, d) {
    var m = l._reactRootContainer;
    if (m) {
      var R = m;
      if (typeof d == "function") {
        var _ = d;
        d = function() {
          var L = ic(R);
          _.call(L);
        };
      }
      Df(r, R, n, d);
    } else R = pg(l, r, n, d, u);
    return ic(R);
  }
  nu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Yi(r.pendingLanes);
          l !== 0 && (ps(r, l | 1), Xn(r, ln()), !(Rt & 6) && (ju = ln() + 500, bi()));
        }
        break;
      case 13:
        Ni(function() {
          var u = al(n, 1);
          if (u !== null) {
            var d = ar();
            wn(u, n, 1, d);
          }
        }), pp(n, 1);
    }
  }, kl = function(n) {
    if (n.tag === 13) {
      var r = al(n, 134217728);
      if (r !== null) {
        var l = ar();
        wn(r, n, 134217728, l);
      }
      pp(n, 134217728);
    }
  }, vs = function(n) {
    if (n.tag === 13) {
      var r = ul(n), l = al(n, r);
      if (l !== null) {
        var u = ar();
        wn(l, n, r, u);
      }
      pp(n, r);
    }
  }, Lt = function() {
    return Tt;
  }, ru = function(n, r) {
    var l = Tt;
    try {
      return Tt = n, r();
    } finally {
      Tt = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Hn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var d = Hc(u);
              if (!d) throw Error(f(90));
              Yr(u), Hn(u, d);
            }
          }
        }
        break;
      case "textarea":
        xr(n, l);
        break;
      case "select":
        r = l.value, r != null && qn(n, !!l.multiple, r, !1);
    }
  }, Cl = op, co = Ni;
  var hg = { usingClientEntryPoint: !1, Events: [xi, hu, Hc, ri, Ma, op] }, oc = { findFiberByHostInstance: nl, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Hv = { bundleType: oc.bundleType, version: oc.version, rendererPackageName: oc.rendererPackageName, rendererConfig: oc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ae.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ke(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: oc.findFiberByHostInstance || dg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Af = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Af.isDisabled && Af.supportsFiber) try {
      Rl = Af.inject(Hv), Gr = Af;
    } catch {
    }
  }
  return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hg, ti.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gl(r)) throw Error(f(200));
    return Fv(n, r, null, l);
  }, ti.createRoot = function(n, r) {
    if (!Gl(n)) throw Error(f(299));
    var l = !1, u = "", d = hp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = cp(n, 1, !1, null, null, l, !1, u, d), n[ci] = r.current, Ci(n.nodeType === 8 ? n.parentNode : n), new Lf(r);
  }, ti.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = Ke(r), n = n === null ? null : n.stateNode, n;
  }, ti.flushSync = function(n) {
    return Ni(n);
  }, ti.hydrate = function(n, r, l) {
    if (!Nf(r)) throw Error(f(200));
    return Mf(null, n, r, !0, l);
  }, ti.hydrateRoot = function(n, r, l) {
    if (!Gl(n)) throw Error(f(405));
    var u = l != null && l.hydratedSources || null, d = !1, m = "", R = hp;
    if (l != null && (l.unstable_strictMode === !0 && (d = !0), l.identifierPrefix !== void 0 && (m = l.identifierPrefix), l.onRecoverableError !== void 0 && (R = l.onRecoverableError)), r = dp(r, null, n, 1, l ?? null, d, !1, m, R), n[ci] = r.current, Ci(n), u) for (n = 0; n < u.length; n++) l = u[n], d = l._getVersion, d = d(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, d] : r.mutableSourceEagerHydrationData.push(
      l,
      d
    );
    return new lc(r);
  }, ti.render = function(n, r, l) {
    if (!Nf(r)) throw Error(f(200));
    return Mf(null, n, r, !1, l);
  }, ti.unmountComponentAtNode = function(n) {
    if (!Nf(n)) throw Error(f(40));
    return n._reactRootContainer ? (Ni(function() {
      Mf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ci] = null;
      });
    }), !0) : !1;
  }, ti.unstable_batchedUpdates = op, ti.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Nf(l)) throw Error(f(200));
    if (n == null || n._reactInternals === void 0) throw Error(f(38));
    return Mf(n, r, l, !1, u);
  }, ti.version = "18.2.0-next-9e3b772b8-20220608", ti;
}
var ni = {}, kx;
function zD() {
  if (kx) return ni;
  kx = 1;
  var p = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return p.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = Ir, f = Kx(), v = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function x(e) {
      E = e;
    }
    function w(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function g(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("error", e, a);
      }
    }
    function U(e, t, a) {
      {
        var i = v.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(h) {
          return String(h);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var $ = 0, z = 1, F = 2, I = 3, oe = 4, K = 5, X = 6, Ce = 7, ut = 8, ft = 9, Ye = 10, Ae = 11, gt = 12, _e = 13, Ge = 14, rt = 15, tn = 16, Gt = 17, P = 18, re = 19, me = 21, ue = 22, Se = 23, pe = 24, ve = 25, q = !0, se = !1, k = !1, Z = !1, xe = !1, Pe = !0, Be = !1, at = !1, et = !0, mt = !0, st = !0, Ht = /* @__PURE__ */ new Set(), Rn = {}, Wn = {};
    function Yr(e, t) {
      wr(e, t), wr(e + "Capture", t);
    }
    function wr(e, t) {
      Rn[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Rn[e] = t;
      {
        var a = e.toLowerCase();
        Wn[a] = e, e === "onDoubleClick" && (Wn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ht.add(t[i]);
    }
    var bn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", or = Object.prototype.hasOwnProperty;
    function Qn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Hn(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function Dr(e, t) {
      if (Hn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Qn(e)), Bn(e);
    }
    function Cr(e) {
      if (Hn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qn(e)), Bn(e);
    }
    function qn(e, t) {
      if (Hn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Qn(e)), Bn(e);
    }
    function ha(e, t) {
      if (Hn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Qn(e)), Bn(e);
    }
    function va(e) {
      if (Hn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Qn(e)), Bn(e);
    }
    function xr(e) {
      if (Hn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Qn(e)), Bn(e);
    }
    var ma = 0, ur = 1, Lr = 2, vn = 3, ya = 4, ga = 5, Sa = 6, Re = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", qe = Re + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", St = new RegExp("^[" + Re + "][" + qe + "]*$"), Bt = {}, At = {};
    function Nn(e) {
      return or.call(At, e) ? !0 : or.call(Bt, e) ? !1 : St.test(e) ? (At[e] = !0, !0) : (Bt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function yn(e, t, a) {
      return t !== null ? t.type === ma : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Rr(e, t, a, i) {
      if (a !== null && a.type === ma)
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
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Yt(e, t, a, i) {
      if (t === null || typeof t > "u" || Rr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case vn:
            return !t;
          case ya:
            return t === !1;
          case ga:
            return isNaN(t);
          case Sa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function er(e) {
      return nn.hasOwnProperty(e) ? nn[e] : null;
    }
    function $t(e, t, a, i, o, s, h) {
      this.acceptsBooleans = t === Lr || t === vn || t === ya, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = h;
    }
    var nn = {}, ri = [
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
    ri.forEach(function(e) {
      nn[e] = new $t(
        e,
        ma,
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
      nn[t] = new $t(
        t,
        ur,
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
      nn[e] = new $t(
        e,
        Lr,
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
      nn[e] = new $t(
        e,
        Lr,
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
      nn[e] = new $t(
        e,
        vn,
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
      nn[e] = new $t(
        e,
        vn,
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
      nn[e] = new $t(
        e,
        ya,
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
      nn[e] = new $t(
        e,
        Sa,
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
      nn[e] = new $t(
        e,
        ga,
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
    var Ma = /[\-\:]([a-z])/g, Cl = function(e) {
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
      var t = e.replace(Ma, Cl);
      nn[t] = new $t(
        t,
        ur,
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
      var t = e.replace(Ma, Cl);
      nn[t] = new $t(
        t,
        ur,
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
      var t = e.replace(Ma, Cl);
      nn[t] = new $t(
        t,
        ur,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      nn[e] = new $t(
        e,
        ur,
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
    var co = "xlinkHref";
    nn[co] = new $t(
      "xlinkHref",
      ur,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      nn[e] = new $t(
        e,
        ur,
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
    var fo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, xl = !1;
    function ai(e) {
      !xl && fo.test(e) && (xl = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ii(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Dr(a, t), i.sanitizeURL && ai("" + a);
        var s = i.attributeName, h = null;
        if (i.type === ya) {
          if (e.hasAttribute(s)) {
            var y = e.getAttribute(s);
            return y === "" ? !0 : Yt(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(s)) {
          if (Yt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === vn)
            return a;
          h = e.getAttribute(s);
        }
        return Yt(t, a, i, !1) ? h === null ? a : h : h === "" + a ? a : h;
      }
    }
    function Aa(e, t, a, i) {
      {
        if (!Nn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Dr(a, t), o === "" + a ? a : o;
      }
    }
    function $i(e, t, a, i) {
      var o = er(t);
      if (!yn(t, o, i)) {
        if (Yt(t, a, o, i) && (a = null), i || o === null) {
          if (Nn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Dr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var h = o.mustUseProperty;
        if (h) {
          var y = o.propertyName;
          if (a === null) {
            var S = o.type;
            e[y] = S === vn ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var b = o.attributeName, T = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(b);
        else {
          var A = o.type, N;
          A === vn || A === ya && a === !0 ? N = "" : (Dr(a, b), N = "" + a, o.sanitizeURL && ai(N.toString())), T ? e.setAttributeNS(T, b, N) : e.setAttribute(b, N);
        }
      }
    }
    var Wr = Symbol.for("react.element"), Qr = Symbol.for("react.portal"), Ea = Symbol.for("react.fragment"), Vi = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), ce = Symbol.for("react.provider"), be = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), xt = Symbol.for("react.suspense"), kt = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), $n = Symbol.for("react.scope"), rn = Symbol.for("react.debug_trace_mode"), an = Symbol.for("react.offscreen"), br = Symbol.for("react.legacy_hidden"), yi = Symbol.for("react.cache"), ln = Symbol.for("react.tracing_marker"), qr = Symbol.iterator, os = "@@iterator";
    function gi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qr && e[qr] || e[os];
      return typeof t == "function" ? t : null;
    }
    var Et = Object.assign, po = 0, Ii, Rl, Gr, us, Nr, ss, cs;
    function fs() {
    }
    fs.__reactDisabledLog = !0;
    function ho() {
      {
        if (po === 0) {
          Ii = console.log, Rl = console.info, Gr = console.warn, us = console.error, Nr = console.group, ss = console.groupCollapsed, cs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fs,
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
        po++;
      }
    }
    function tu() {
      {
        if (po--, po === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Et({}, e, {
              value: Ii
            }),
            info: Et({}, e, {
              value: Rl
            }),
            warn: Et({}, e, {
              value: Gr
            }),
            error: Et({}, e, {
              value: us
            }),
            group: Et({}, e, {
              value: Nr
            }),
            groupCollapsed: Et({}, e, {
              value: ss
            }),
            groupEnd: Et({}, e, {
              value: cs
            })
          });
        }
        po < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Yi = v.ReactCurrentDispatcher, Si;
    function za(e, t, a) {
      {
        if (Si === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            Si = i && i[1] || "";
          }
        return `
` + Si + e;
      }
    }
    var bl = !1, Ei;
    {
      var vo = typeof WeakMap == "function" ? WeakMap : Map;
      Ei = new vo();
    }
    function mo(e, t) {
      if (!e || bl)
        return "";
      {
        var a = Ei.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      bl = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Yi.current, Yi.current = null, ho();
      try {
        if (t) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (Q) {
              i = Q;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (Q) {
              i = Q;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            i = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && i && typeof Q.stack == "string") {
          for (var y = Q.stack.split(`
`), S = i.stack.split(`
`), b = y.length - 1, T = S.length - 1; b >= 1 && T >= 0 && y[b] !== S[T]; )
            T--;
          for (; b >= 1 && T >= 0; b--, T--)
            if (y[b] !== S[T]) {
              if (b !== 1 || T !== 1)
                do
                  if (b--, T--, T < 0 || y[b] !== S[T]) {
                    var A = `
` + y[b].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && Ei.set(e, A), A;
                  }
                while (b >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        bl = !1, Yi.current = s, tu(), Error.prepareStackTrace = o;
      }
      var N = e ? e.displayName || e.name : "", W = N ? za(N) : "";
      return typeof e == "function" && Ei.set(e, W), W;
    }
    function Tl(e, t, a) {
      return mo(e, !0);
    }
    function ds(e, t, a) {
      return mo(e, !1);
    }
    function ps(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Tt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return mo(e, ps(e));
      if (typeof e == "string")
        return za(e);
      switch (e) {
        case xt:
          return za("Suspense");
        case kt:
          return za("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Te:
            return ds(e.render);
          case yt:
            return Tt(e.type, t, a);
          case Ke: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Tt(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function hs(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case K:
          return za(e.type);
        case tn:
          return za("Lazy");
        case _e:
          return za("Suspense");
        case re:
          return za("SuspenseList");
        case $:
        case F:
        case rt:
          return ds(e.type);
        case Ae:
          return ds(e.type.render);
        case z:
          return Tl(e.type);
        default:
          return "";
      }
    }
    function nu(e) {
      try {
        var t = "", a = e;
        do
          t += hs(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function kl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function vs(e) {
      return e.displayName || "Context";
    }
    function Lt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ea:
          return "Fragment";
        case Qr:
          return "Portal";
        case D:
          return "Profiler";
        case Vi:
          return "StrictMode";
        case xt:
          return "Suspense";
        case kt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case be:
            var t = e;
            return vs(t) + ".Consumer";
          case ce:
            var a = e;
            return vs(a._context) + ".Provider";
          case Te:
            return kl(e, e.render, "ForwardRef");
          case yt:
            var i = e.displayName || null;
            return i !== null ? i : Lt(e.type) || "Memo";
          case Ke: {
            var o = e, s = o._payload, h = o._init;
            try {
              return Lt(h(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ru(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function yo(e) {
      return e.displayName || "Context";
    }
    function ct(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case pe:
          return "Cache";
        case ft:
          var i = a;
          return yo(i) + ".Consumer";
        case Ye:
          var o = a;
          return yo(o._context) + ".Provider";
        case P:
          return "DehydratedFragment";
        case Ae:
          return ru(a, a.render, "ForwardRef");
        case Ce:
          return "Fragment";
        case K:
          return a;
        case oe:
          return "Portal";
        case I:
          return "Root";
        case X:
          return "Text";
        case tn:
          return Lt(a);
        case ut:
          return a === Vi ? "StrictMode" : "Mode";
        case ue:
          return "Offscreen";
        case gt:
          return "Profiler";
        case me:
          return "Scope";
        case _e:
          return "Suspense";
        case re:
          return "SuspenseList";
        case ve:
          return "TracingMarker";
        case z:
        case $:
        case Gt:
        case F:
        case Ge:
        case rt:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var li = v.ReactDebugCurrentFrame, gn = null, Kr = !1;
    function Ua() {
      {
        if (gn === null)
          return null;
        var e = gn._debugOwner;
        if (e !== null && typeof e < "u")
          return ct(e);
      }
      return null;
    }
    function _l() {
      return gn === null ? "" : nu(gn);
    }
    function cn() {
      li.getCurrentStack = null, gn = null, Kr = !1;
    }
    function Sn(e) {
      li.getCurrentStack = e === null ? null : _l, gn = e, Kr = !1;
    }
    function ms() {
      return gn;
    }
    function sr(e) {
      Kr = e;
    }
    function Xr(e) {
      return "" + e;
    }
    function oi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return xr(e), e;
        default:
          return "";
      }
    }
    var au = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function go(e, t) {
      au[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function So(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ol(e) {
      return e._valueTracker;
    }
    function Fa(e) {
      e._valueTracker = null;
    }
    function Wi(e) {
      var t = "";
      return e && (So(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function iu(e) {
      var t = So(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      xr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(y) {
            xr(y), i = "" + y, s.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var h = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            xr(y), i = "" + y;
          },
          stopTracking: function() {
            Fa(e), delete e[t];
          }
        };
        return h;
      }
    }
    function Qi(e) {
      Ol(e) || (e._valueTracker = iu(e));
    }
    function lu(e) {
      if (!e)
        return !1;
      var t = Ol(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Wi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function wi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var qi = !1, ou = !1, ys = !1, ui = !1;
    function uu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function C(e, t) {
      var a = e, i = t.checked, o = Et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function O(e, t) {
      go("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ou && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component", t.type), ou = !0), t.value !== void 0 && t.defaultValue !== void 0 && !qi && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component", t.type), qi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: oi(t.value != null ? t.value : i),
        controlled: uu(t)
      };
    }
    function Y(e, t) {
      var a = e, i = t.checked;
      i != null && $i(a, "checked", i, !1);
    }
    function J(e, t) {
      var a = e;
      {
        var i = uu(t);
        !a._wrapperState.controlled && i && !ui && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ui = !0), a._wrapperState.controlled && !i && !ys && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ys = !0);
      }
      Y(e, t);
      var o = oi(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Xr(o)) : a.value !== Xr(o) && (a.value = Xr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? lt(a, t.type, o) : t.hasOwnProperty("defaultValue") && lt(a, t.type, oi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ye(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var h = Xr(i._wrapperState.initialValue);
        a || h !== i.value && (i.value = h), i.defaultValue = h;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function He(e, t) {
      var a = e;
      J(a, t), Le(a, t);
    }
    function Le(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Dr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var h = o[s];
          if (!(h === e || h.form !== e.form)) {
            var y = rm(h);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            lu(h), J(h, y);
          }
        }
      }
    }
    function lt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || wi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Xr(e._wrapperState.initialValue) : e.defaultValue !== Xr(a) && (e.defaultValue = Xr(a)));
    }
    var wt = !1, Vt = !1, Wt = !1;
    function Qt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Vt || (Vt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Wt || (Wt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !wt && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), wt = !0);
    }
    function qt(e, t) {
      t.value != null && e.setAttribute("value", Xr(oi(t.value)));
    }
    var fn = Array.isArray;
    function Nt(e) {
      return fn(e);
    }
    var Dl;
    Dl = !1;
    function su() {
      var e = Ua();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var gs = ["value", "defaultValue"];
    function Ss(e) {
      {
        go("select", e);
        for (var t = 0; t < gs.length; t++) {
          var a = gs[t];
          if (e[a] != null) {
            var i = Nt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, su()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, su());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, h = {}, y = 0; y < s.length; y++)
          h["$" + s[y]] = !0;
        for (var S = 0; S < o.length; S++) {
          var b = h.hasOwnProperty("$" + o[S].value);
          o[S].selected !== b && (o[S].selected = b), b && i && (o[S].defaultSelected = !0);
        }
      } else {
        for (var T = Xr(oi(a)), A = null, N = 0; N < o.length; N++) {
          if (o[N].value === T) {
            o[N].selected = !0, i && (o[N].defaultSelected = !0);
            return;
          }
          A === null && !o[N].disabled && (A = o[N]);
        }
        A !== null && (A.selected = !0);
      }
    }
    function Es(e, t) {
      return Et({}, t, {
        value: void 0
      });
    }
    function ws(e, t) {
      var a = e;
      Ss(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Dl && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Dl = !0);
    }
    function vd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Gi(a, !!t.multiple, i, !1) : t.defaultValue != null && Gi(a, !!t.multiple, t.defaultValue, !0);
    }
    function zy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Gi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Gi(a, !!t.multiple, t.defaultValue, !0) : Gi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function _h(e, t) {
      var a = e, i = t.value;
      i != null && Gi(a, !!t.multiple, i, !1);
    }
    var Oh = !1;
    function md(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Xr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Dh(e, t) {
      var a = e;
      go("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Oh && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component"), Oh = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Nt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: oi(i)
      };
    }
    function Lh(e, t) {
      var a = e, i = oi(t.value), o = oi(t.defaultValue);
      if (i != null) {
        var s = Xr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Xr(o));
    }
    function Dc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Uy(e, t) {
      Lh(e, t);
    }
    var Ki = "http://www.w3.org/1999/xhtml", Fy = "http://www.w3.org/1998/Math/MathML", Lc = "http://www.w3.org/2000/svg";
    function yd(e) {
      switch (e) {
        case "svg":
          return Lc;
        case "math":
          return Fy;
        default:
          return Ki;
      }
    }
    function gd(e, t) {
      return e == null || e === Ki ? yd(t) : e === Lc && t === "foreignObject" ? Ki : e;
    }
    var jy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Nc, Nh = jy(function(e, t) {
      if (e.namespaceURI === Lc && !("innerHTML" in e)) {
        Nc = Nc || document.createElement("div"), Nc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Nc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Zr = 1, Xi = 3, Tn = 8, wa = 9, Sd = 11, Cs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Xi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Mh = {
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
    }, cu = {
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
    function Ah(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var zh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(cu).forEach(function(e) {
      zh.forEach(function(t) {
        cu[Ah(t, e)] = cu[e];
      });
    });
    function Ll(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(cu.hasOwnProperty(e) && cu[e]) ? t + "px" : (ha(t, e), ("" + t).trim());
    }
    var Py = /([A-Z])/g, Hy = /^ms-/;
    function By(e) {
      return e.replace(Py, "-$1").toLowerCase().replace(Hy, "-ms-");
    }
    var Ed = function() {
    };
    {
      var Uh = /^(?:webkit|moz|o)[A-Z]/, xs = /^-ms-/, Rs = /-(.)/g, Fh = /;\s*$/, Zi = {}, wd = {}, Cd = !1, Mc = !1, xd = function(e) {
        return e.replace(Rs, function(t, a) {
          return a.toUpperCase();
        });
      }, jh = function(e) {
        Zi.hasOwnProperty(e) && Zi[e] || (Zi[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          xd(e.replace(xs, "ms-"))
        ));
      }, Ph = function(e) {
        Zi.hasOwnProperty(e) && Zi[e] || (Zi[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Hh = function(e, t) {
        wd.hasOwnProperty(t) && wd[t] || (wd[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Fh, "")));
      }, $y = function(e, t) {
        Cd || (Cd = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Vy = function(e, t) {
        Mc || (Mc = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Ed = function(e, t) {
        e.indexOf("-") > -1 ? jh(e) : Uh.test(e) ? Ph(e) : Fh.test(t) && Hh(e, t), typeof t == "number" && (isNaN(t) ? $y(e, t) : isFinite(t) || Vy(e, t));
      };
    }
    var Iy = Ed;
    function Yy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : By(i)) + ":", t += Ll(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Bh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Iy(i, t[i]);
          var s = Ll(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function si(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function fu(e) {
      var t = {};
      for (var a in e)
        for (var i = Mh[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function $h(e, t) {
      {
        if (!t)
          return;
        var a = fu(e), i = fu(t), o = {};
        for (var s in a) {
          var h = a[s], y = i[s];
          if (y && h !== y) {
            var S = h + "," + y;
            if (o[S])
              continue;
            o[S] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", si(e[h]) ? "Removing" : "Updating", h, y);
          }
        }
      }
    }
    var Vh = {
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
    }, Ih = Et({
      menuitem: !0
    }, Vh), Yh = "__html";
    function bs(e, t) {
      if (t) {
        if (Ih[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Yh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Eo(e, t) {
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
    var Ac = {
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
    }, wo = {
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
    }, Nl = {}, Ts = new RegExp("^(aria)-[" + qe + "]*$"), Rd = new RegExp("^(aria)[A-Z][" + qe + "]*$");
    function Wh(e, t) {
      {
        if (or.call(Nl, t) && Nl[t])
          return !0;
        if (Rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = wo.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Nl[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Nl[t] = !0, !0;
        }
        if (Ts.test(t)) {
          var o = t.toLowerCase(), s = wo.hasOwnProperty(o) ? o : null;
          if (s == null)
            return Nl[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Nl[t] = !0, !0;
        }
      }
      return !0;
    }
    function zc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = Wh(e, i);
          o || a.push(i);
        }
        var s = a.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function du(e, t) {
      Eo(e, t) || zc(e, t);
    }
    var Uc = !1;
    function Qh(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Uc && (Uc = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ks = function() {
    };
    {
      var Tr = {}, bd = /^on./, qh = /^on[^A-Z]/, Gh = new RegExp("^(aria)-[" + qe + "]*$"), Kh = new RegExp("^(aria)[A-Z][" + qe + "]*$");
      ks = function(e, t, a, i) {
        if (or.call(Tr, t) && Tr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Tr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, h = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = h.hasOwnProperty(o) ? h[o] : null;
          if (y != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, y), Tr[t] = !0, !0;
          if (bd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Tr[t] = !0, !0;
        } else if (bd.test(t))
          return qh.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Tr[t] = !0, !0;
        if (Gh.test(t) || Kh.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Tr[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Tr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Tr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Tr[t] = !0, !0;
        var S = er(t), b = S !== null && S.type === ma;
        if (Ac.hasOwnProperty(o)) {
          var T = Ac[o];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), Tr[t] = !0, !0;
        } else if (!b && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Tr[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, S, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Tr[t] = !0, !0) : b ? !0 : Rr(t, a, S, !1) ? (Tr[t] = !0, !1) : ((a === "false" || a === "true") && S !== null && S.type === vn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Tr[t] = !0), !0);
      };
    }
    var Xh = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = ks(e, o, t[o], a);
          s || i.push(o);
        }
        var h = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e);
      }
    };
    function Ml(e, t, a) {
      Eo(e, t) || Xh(e, t, a);
    }
    var Fc = 1, _s = 2, Os = 4, Wy = Fc | _s | Os, Ji = null;
    function Qy(e) {
      Ji !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ji = e;
    }
    function Zh() {
      Ji === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ji = null;
    }
    function Jh(e) {
      return e === Ji;
    }
    function Zt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Xi ? t.parentNode : t;
    }
    var Ds = null, el = null, Ci = null;
    function Td(e) {
      var t = Iu(e);
      if (t) {
        if (typeof Ds != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = rm(a);
          Ds(t.stateNode, t.type, i);
        }
      }
    }
    function kd(e) {
      Ds = e;
    }
    function pu(e) {
      el ? Ci ? Ci.push(e) : Ci = [e] : el = e;
    }
    function jc() {
      return el !== null || Ci !== null;
    }
    function Co() {
      if (el) {
        var e = el, t = Ci;
        if (el = null, Ci = null, Td(e), t)
          for (var a = 0; a < t.length; a++)
            Td(t[a]);
      }
    }
    var _d = function(e, t) {
      return e(t);
    }, ev = function() {
    }, Od = !1;
    function tv() {
      var e = jc();
      e && (ev(), Co());
    }
    function Ls(e, t, a) {
      if (Od)
        return e(t, a);
      Od = !0;
      try {
        return _d(e, t, a);
      } finally {
        Od = !1, tv();
      }
    }
    function Pc(e, t, a) {
      _d = e, ev = a;
    }
    function Dd(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ld(e, t, a) {
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
          return !!(a.disabled && Dd(t));
        default:
          return !1;
      }
    }
    function xo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = rm(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Ld(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var Ns = !1;
    if (bn)
      try {
        var Ms = {};
        Object.defineProperty(Ms, "passive", {
          get: function() {
            Ns = !0;
          }
        }), window.addEventListener("test", Ms, Ms), window.removeEventListener("test", Ms, Ms);
      } catch {
        Ns = !1;
      }
    function Nd(e, t, a, i, o, s, h, y, S) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (T) {
        this.onError(T);
      }
    }
    var nv = Nd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Md = document.createElement("react");
      nv = function(t, a, i, o, s, h, y, S, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), A = !1, N = !0, W = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function ee() {
          Md.removeEventListener(te, Je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var Ne = Array.prototype.slice.call(arguments, 3);
        function Je() {
          A = !0, ee(), a.apply(i, Ne), N = !1;
        }
        var Qe, Ot = !1, bt = !1;
        function H(B) {
          if (Qe = B.error, Ot = !0, Qe === null && B.colno === 0 && B.lineno === 0 && (bt = !0), B.defaultPrevented && Qe != null && typeof Qe == "object")
            try {
              Qe._suppressLogging = !0;
            } catch {
            }
        }
        var te = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", H), Md.addEventListener(te, Je, !1), T.initEvent(te, !1, !1), Md.dispatchEvent(T), Q && Object.defineProperty(window, "event", Q), A && N && (Ot ? bt && (Qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Qe)), window.removeEventListener("error", H), !A)
          return ee(), Nd.apply(this, arguments);
      };
    }
    var Ad = nv, Ca = !1, As = null, tl = !1, ja = null, zs = {
      onError: function(e) {
        Ca = !0, As = e;
      }
    };
    function ci(e, t, a, i, o, s, h, y, S) {
      Ca = !1, As = null, Ad.apply(zs, arguments);
    }
    function zd(e, t, a, i, o, s, h, y, S) {
      if (ci.apply(this, arguments), Ca) {
        var b = nl();
        tl || (tl = !0, ja = b);
      }
    }
    function qy() {
      if (tl) {
        var e = ja;
        throw tl = !1, ja = null, e;
      }
    }
    function Gy() {
      return Ca;
    }
    function nl() {
      if (Ca) {
        var e = As;
        return Ca = !1, As = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xi(e) {
      return e._reactInternals;
    }
    function hu(e) {
      return e._reactInternals !== void 0;
    }
    function Hc(e, t) {
      e._reactInternals = t;
    }
    var Xe = (
      /*                      */
      0
    ), fi = (
      /*                */
      1
    ), Jt = (
      /*                    */
      2
    ), Ve = (
      /*                       */
      4
    ), zt = (
      /*                */
      16
    ), Pa = (
      /*                 */
      32
    ), tr = (
      /*                     */
      64
    ), dt = (
      /*                   */
      128
    ), Mr = (
      /*            */
      256
    ), xa = (
      /*                          */
      512
    ), Vn = (
      /*                     */
      1024
    ), Jr = (
      /*                      */
      2048
    ), Ri = (
      /*                    */
      4096
    ), Al = (
      /*                   */
      8192
    ), Ro = (
      /*             */
      16384
    ), rv = Jr | Ve | tr | xa | Vn | Ro, rl = (
      /*               */
      32767
    ), zl = (
      /*                   */
      32768
    ), cr = (
      /*                */
      65536
    ), Bc = (
      /* */
      131072
    ), av = (
      /*                       */
      1048576
    ), bi = (
      /*                    */
      2097152
    ), Ha = (
      /*                 */
      4194304
    ), Ul = (
      /*                */
      8388608
    ), Ba = (
      /*               */
      16777216
    ), bo = (
      /*              */
      33554432
    ), ea = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ve | Vn | 0
    ), ta = Jt | Ve | zt | Pa | xa | Ri | Al, di = Ve | tr | xa | Al, na = Jr | zt, fr = Ha | Ul | bi, To = v.ReactCurrentOwner;
    function Fl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Jt | Ri)) !== Xe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === I ? a : null;
    }
    function $c(e) {
      if (e.tag === _e) {
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
    function Vc(e) {
      return e.tag === I ? e.stateNode.containerInfo : null;
    }
    function Ra(e) {
      return Fl(e) === e;
    }
    function ba(e) {
      {
        var t = To.current;
        if (t !== null && t.tag === z) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ct(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = xi(e);
      return o ? Fl(o) === o : !1;
    }
    function dn(e) {
      if (Fl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function $a(e) {
      var t = e.alternate;
      if (!t) {
        var a = Fl(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var h = s.alternate;
        if (h === null) {
          var y = s.return;
          if (y !== null) {
            i = o = y;
            continue;
          }
          break;
        }
        if (s.child === h.child) {
          for (var S = s.child; S; ) {
            if (S === i)
              return dn(s), e;
            if (S === o)
              return dn(s), t;
            S = S.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = h;
        else {
          for (var b = !1, T = s.child; T; ) {
            if (T === i) {
              b = !0, i = s, o = h;
              break;
            }
            if (T === o) {
              b = !0, o = s, i = h;
              break;
            }
            T = T.sibling;
          }
          if (!b) {
            for (T = h.child; T; ) {
              if (T === i) {
                b = !0, i = h, o = s;
                break;
              }
              if (T === o) {
                b = !0, o = h, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!b)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== I)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ud(e) {
      var t = $a(e);
      return t !== null ? Fd(t) : null;
    }
    function Fd(e) {
      if (e.tag === K || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Fd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function jd(e) {
      var t = $a(e);
      return t !== null ? Ic(t) : null;
    }
    function Ic(e) {
      if (e.tag === K || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== oe) {
          var a = Ic(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Pd = f.unstable_scheduleCallback, Yc = f.unstable_cancelCallback, iv = f.unstable_shouldYield, vu = f.unstable_requestPaint, In = f.unstable_now, Ky = f.unstable_getCurrentPriorityLevel, ra = f.unstable_ImmediatePriority, mu = f.unstable_UserBlockingPriority, Ti = f.unstable_NormalPriority, yu = f.unstable_LowPriority, Us = f.unstable_IdlePriority, Hd = f.unstable_yieldValue, Bd = f.unstable_setDisableYieldValue, jl = null, Mn = null, Ee = null, kr = !1, Ta = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function lv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        et && (e = Et({}, e, {
          getLaneLabelMap: Wc,
          injectProfilingHooks: Hl
        })), jl = t.inject(e), Mn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function al(e, t) {
      if (Mn && typeof Mn.onScheduleFiberRoot == "function")
        try {
          Mn.onScheduleFiberRoot(jl, e, t);
        } catch (a) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Pl(e, t) {
      if (Mn && typeof Mn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & dt) === dt;
          if (mt) {
            var i;
            switch (t) {
              case Fn:
                i = ra;
                break;
              case ll:
                i = mu;
                break;
              case Oi:
                i = Ti;
                break;
              case ku:
                i = Us;
                break;
              default:
                i = Ti;
                break;
            }
            Mn.onCommitFiberRoot(jl, e, i, a);
          }
        } catch (o) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", o));
        }
    }
    function $d(e) {
      if (Mn && typeof Mn.onPostCommitFiberRoot == "function")
        try {
          Mn.onPostCommitFiberRoot(jl, e);
        } catch (t) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ov(e) {
      if (Mn && typeof Mn.onCommitFiberUnmount == "function")
        try {
          Mn.onCommitFiberUnmount(jl, e);
        } catch (t) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function on(e) {
      if (typeof Hd == "function" && (Bd(e), x(e)), Mn && typeof Mn.setStrictMode == "function")
        try {
          Mn.setStrictMode(jl, e);
        } catch (t) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Hl(e) {
      Ee = e;
    }
    function Wc() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < An; a++) {
          var i = vv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function uv(e) {
      Ee !== null && typeof Ee.markCommitStarted == "function" && Ee.markCommitStarted(e);
    }
    function Fs() {
      Ee !== null && typeof Ee.markCommitStopped == "function" && Ee.markCommitStopped();
    }
    function gu(e) {
      Ee !== null && typeof Ee.markComponentRenderStarted == "function" && Ee.markComponentRenderStarted(e);
    }
    function ko() {
      Ee !== null && typeof Ee.markComponentRenderStopped == "function" && Ee.markComponentRenderStopped();
    }
    function Vd(e) {
      Ee !== null && typeof Ee.markComponentPassiveEffectMountStarted == "function" && Ee.markComponentPassiveEffectMountStarted(e);
    }
    function Qc() {
      Ee !== null && typeof Ee.markComponentPassiveEffectMountStopped == "function" && Ee.markComponentPassiveEffectMountStopped();
    }
    function sv(e) {
      Ee !== null && typeof Ee.markComponentPassiveEffectUnmountStarted == "function" && Ee.markComponentPassiveEffectUnmountStarted(e);
    }
    function cv() {
      Ee !== null && typeof Ee.markComponentPassiveEffectUnmountStopped == "function" && Ee.markComponentPassiveEffectUnmountStopped();
    }
    function fv(e) {
      Ee !== null && typeof Ee.markComponentLayoutEffectMountStarted == "function" && Ee.markComponentLayoutEffectMountStarted(e);
    }
    function Id() {
      Ee !== null && typeof Ee.markComponentLayoutEffectMountStopped == "function" && Ee.markComponentLayoutEffectMountStopped();
    }
    function Su(e) {
      Ee !== null && typeof Ee.markComponentLayoutEffectUnmountStarted == "function" && Ee.markComponentLayoutEffectUnmountStarted(e);
    }
    function js() {
      Ee !== null && typeof Ee.markComponentLayoutEffectUnmountStopped == "function" && Ee.markComponentLayoutEffectUnmountStopped();
    }
    function dv(e, t, a) {
      Ee !== null && typeof Ee.markComponentErrored == "function" && Ee.markComponentErrored(e, t, a);
    }
    function pv(e, t, a) {
      Ee !== null && typeof Ee.markComponentSuspended == "function" && Ee.markComponentSuspended(e, t, a);
    }
    function Eu(e) {
      Ee !== null && typeof Ee.markLayoutEffectsStarted == "function" && Ee.markLayoutEffectsStarted(e);
    }
    function hv() {
      Ee !== null && typeof Ee.markLayoutEffectsStopped == "function" && Ee.markLayoutEffectsStopped();
    }
    function Ps(e) {
      Ee !== null && typeof Ee.markPassiveEffectsStarted == "function" && Ee.markPassiveEffectsStarted(e);
    }
    function ki() {
      Ee !== null && typeof Ee.markPassiveEffectsStopped == "function" && Ee.markPassiveEffectsStopped();
    }
    function wu(e) {
      Ee !== null && typeof Ee.markRenderStarted == "function" && Ee.markRenderStarted(e);
    }
    function Hs() {
      Ee !== null && typeof Ee.markRenderYielded == "function" && Ee.markRenderYielded();
    }
    function Bl() {
      Ee !== null && typeof Ee.markRenderStopped == "function" && Ee.markRenderStopped();
    }
    function Yd(e) {
      Ee !== null && typeof Ee.markRenderScheduled == "function" && Ee.markRenderScheduled(e);
    }
    function Cu(e, t) {
      Ee !== null && typeof Ee.markForceUpdateScheduled == "function" && Ee.markForceUpdateScheduled(e, t);
    }
    function qc(e, t) {
      Ee !== null && typeof Ee.markStateUpdateScheduled == "function" && Ee.markStateUpdateScheduled(e, t);
    }
    var Ze = (
      /*                         */
      0
    ), We = (
      /*                 */
      1
    ), Mt = (
      /*                    */
      2
    ), kn = (
      /*               */
      8
    ), Va = (
      /*              */
      16
    ), Bs = Math.clz32 ? Math.clz32 : En, Wd = Math.log, _o = Math.LN2;
    function En(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Wd(t) / _o | 0) | 0;
    }
    var An = 31, ne = (
      /*                        */
      0
    ), zn = (
      /*                          */
      0
    ), tt = (
      /*                        */
      1
    ), _i = (
      /*    */
      2
    ), il = (
      /*             */
      4
    ), _n = (
      /*            */
      8
    ), Ia = (
      /*                     */
      16
    ), Oo = (
      /*                */
      32
    ), $l = (
      /*                       */
      4194240
    ), aa = (
      /*                        */
      64
    ), ia = (
      /*                        */
      128
    ), Do = (
      /*                        */
      256
    ), $s = (
      /*                        */
      512
    ), Vs = (
      /*                        */
      1024
    ), Gc = (
      /*                        */
      2048
    ), Kc = (
      /*                        */
      4096
    ), Xc = (
      /*                        */
      8192
    ), Zc = (
      /*                        */
      16384
    ), Jc = (
      /*                       */
      32768
    ), ef = (
      /*                       */
      65536
    ), tf = (
      /*                       */
      131072
    ), nf = (
      /*                       */
      262144
    ), Lo = (
      /*                       */
      524288
    ), rf = (
      /*                       */
      1048576
    ), xu = (
      /*                       */
      2097152
    ), No = (
      /*                            */
      130023424
    ), Mo = (
      /*                             */
      4194304
    ), Is = (
      /*                             */
      8388608
    ), af = (
      /*                             */
      16777216
    ), lf = (
      /*                             */
      33554432
    ), of = (
      /*                             */
      67108864
    ), Qd = Mo, Ao = (
      /*          */
      134217728
    ), qd = (
      /*                          */
      268435455
    ), Ru = (
      /*               */
      268435456
    ), Vl = (
      /*                        */
      536870912
    ), ka = (
      /*                   */
      1073741824
    );
    function vv(e) {
      {
        if (e & tt)
          return "Sync";
        if (e & _i)
          return "InputContinuousHydration";
        if (e & il)
          return "InputContinuous";
        if (e & _n)
          return "DefaultHydration";
        if (e & Ia)
          return "Default";
        if (e & Oo)
          return "TransitionHydration";
        if (e & $l)
          return "Transition";
        if (e & No)
          return "Retry";
        if (e & Ao)
          return "SelectiveHydration";
        if (e & Ru)
          return "IdleHydration";
        if (e & Vl)
          return "Idle";
        if (e & ka)
          return "Offscreen";
      }
    }
    var un = -1, uf = aa, Ys = Mo;
    function bu(e) {
      switch (Un(e)) {
        case tt:
          return tt;
        case _i:
          return _i;
        case il:
          return il;
        case _n:
          return _n;
        case Ia:
          return Ia;
        case Oo:
          return Oo;
        case aa:
        case ia:
        case Do:
        case $s:
        case Vs:
        case Gc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case Lo:
        case rf:
        case xu:
          return e & $l;
        case Mo:
        case Is:
        case af:
        case lf:
        case of:
          return e & No;
        case Ao:
          return Ao;
        case Ru:
          return Ru;
        case Vl:
          return Vl;
        case ka:
          return ka;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ws(e, t) {
      var a = e.pendingLanes;
      if (a === ne)
        return ne;
      var i = ne, o = e.suspendedLanes, s = e.pingedLanes, h = a & qd;
      if (h !== ne) {
        var y = h & ~o;
        if (y !== ne)
          i = bu(y);
        else {
          var S = h & s;
          S !== ne && (i = bu(S));
        }
      } else {
        var b = a & ~o;
        b !== ne ? i = bu(b) : s !== ne && (i = bu(s));
      }
      if (i === ne)
        return ne;
      if (t !== ne && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === ne) {
        var T = Un(i), A = Un(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= A || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Ia && (A & $l) !== ne
        )
          return t;
      }
      (i & il) !== ne && (i |= a & Ia);
      var N = e.entangledLanes;
      if (N !== ne)
        for (var W = e.entanglements, Q = i & N; Q > 0; ) {
          var ee = Yl(Q), Ne = 1 << ee;
          i |= W[ee], Q &= ~Ne;
        }
      return i;
    }
    function sf(e, t) {
      for (var a = e.eventTimes, i = un; t > 0; ) {
        var o = Yl(t), s = 1 << o, h = a[o];
        h > i && (i = h), t &= ~s;
      }
      return i;
    }
    function Xy(e, t) {
      switch (e) {
        case tt:
        case _i:
        case il:
          return t + 250;
        case _n:
        case Ia:
        case Oo:
        case aa:
        case ia:
        case Do:
        case $s:
        case Vs:
        case Gc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case Lo:
        case rf:
        case xu:
          return t + 5e3;
        case Mo:
        case Is:
        case af:
        case lf:
        case of:
          return un;
        case Ao:
        case Ru:
        case Vl:
        case ka:
          return un;
        default:
          return g("Should have found matching lanes. This is a bug in React."), un;
      }
    }
    function Zy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, h = a; h > 0; ) {
        var y = Yl(h), S = 1 << y, b = s[y];
        b === un ? ((S & i) === ne || (S & o) !== ne) && (s[y] = Xy(S, t)) : b <= t && (e.expiredLanes |= S), h &= ~S;
      }
    }
    function Jy(e) {
      return bu(e.pendingLanes);
    }
    function Il(e) {
      var t = e.pendingLanes & ~ka;
      return t !== ne ? t : t & ka ? ka : ne;
    }
    function Gd(e) {
      return (e & tt) !== ne;
    }
    function Qs(e) {
      return (e & qd) !== ne;
    }
    function mv(e) {
      return (e & No) === e;
    }
    function yv(e) {
      var t = tt | il | Ia;
      return (e & t) === ne;
    }
    function gv(e) {
      return (e & $l) === e;
    }
    function qs(e, t) {
      var a = _i | il | _n | Ia;
      return (t & a) !== ne;
    }
    function Sv(e, t) {
      return (t & e.expiredLanes) !== ne;
    }
    function Kd(e) {
      return (e & $l) !== ne;
    }
    function Ev() {
      var e = uf;
      return uf <<= 1, (uf & $l) === ne && (uf = aa), e;
    }
    function la() {
      var e = Ys;
      return Ys <<= 1, (Ys & No) === ne && (Ys = Mo), e;
    }
    function Un(e) {
      return e & -e;
    }
    function Tu(e) {
      return Un(e);
    }
    function Yl(e) {
      return 31 - Bs(e);
    }
    function cf(e) {
      return Yl(e);
    }
    function oa(e, t) {
      return (e & t) !== ne;
    }
    function zo(e, t) {
      return (e & t) === t;
    }
    function vt(e, t) {
      return e | t;
    }
    function Gs(e, t) {
      return e & ~t;
    }
    function ff(e, t) {
      return e & t;
    }
    function eg(e) {
      return e;
    }
    function wv(e, t) {
      return e !== zn && e < t ? e : t;
    }
    function Ks(e) {
      for (var t = [], a = 0; a < An; a++)
        t.push(e);
      return t;
    }
    function Uo(e, t, a) {
      e.pendingLanes |= t, t !== Vl && (e.suspendedLanes = ne, e.pingedLanes = ne);
      var i = e.eventTimes, o = cf(t);
      i[o] = a;
    }
    function Cv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Yl(i), s = 1 << o;
        a[o] = un, i &= ~s;
      }
    }
    function df(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function pf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ne, e.pingedLanes = ne, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, h = a; h > 0; ) {
        var y = Yl(h), S = 1 << y;
        i[y] = ne, o[y] = un, s[y] = un, h &= ~S;
      }
    }
    function Xd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Yl(o), h = 1 << s;
        // Is this one of the newly entangled lanes?
        h & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~h;
      }
    }
    function xv(e, t) {
      var a = Un(t), i;
      switch (a) {
        case il:
          i = _i;
          break;
        case Ia:
          i = _n;
          break;
        case aa:
        case ia:
        case Do:
        case $s:
        case Vs:
        case Gc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case tf:
        case nf:
        case Lo:
        case rf:
        case xu:
        case Mo:
        case Is:
        case af:
        case lf:
        case of:
          i = Oo;
          break;
        case Vl:
          i = Ru;
          break;
        default:
          i = zn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== zn ? zn : i;
    }
    function hf(e, t, a) {
      if (Ta)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = cf(a), s = 1 << o, h = i[o];
          h.add(t), a &= ~s;
        }
    }
    function Zd(e, t) {
      if (Ta)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = cf(t), s = 1 << o, h = a[o];
          h.size > 0 && (h.forEach(function(y) {
            var S = y.alternate;
            (S === null || !i.has(S)) && i.add(y);
          }), h.clear()), t &= ~s;
        }
    }
    function Xs(e, t) {
      return null;
    }
    var Fn = tt, ll = il, Oi = Ia, ku = Vl, _u = zn;
    function Ya() {
      return _u;
    }
    function On(e) {
      _u = e;
    }
    function _r(e, t) {
      var a = _u;
      try {
        return _u = e, t();
      } finally {
        _u = a;
      }
    }
    function tg(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ng(e, t) {
      return e > t ? e : t;
    }
    function Ou(e, t) {
      return e !== 0 && e < t;
    }
    function dr(e) {
      var t = Un(e);
      return Ou(Fn, t) ? Ou(ll, t) ? Qs(t) ? Oi : ku : ll : Fn;
    }
    function vf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ze;
    function Du(e) {
      ze = e;
    }
    function Jd(e) {
      ze(e);
    }
    var mf;
    function rg(e) {
      mf = e;
    }
    var Lu;
    function yf(e) {
      Lu = e;
    }
    var gf;
    function Rv(e) {
      gf = e;
    }
    var ep;
    function bv(e) {
      ep = e;
    }
    var Zs = !1, Nu = [], mn = null, nr = null, Ar = null, Mu = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), rr = [], Tv = [
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
    function Di(e) {
      return Tv.indexOf(e) > -1;
    }
    function ag(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function tp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          mn = null;
          break;
        case "dragenter":
        case "dragleave":
          nr = null;
          break;
        case "mouseover":
        case "mouseout":
          Ar = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Mu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Au.delete(i);
          break;
        }
      }
    }
    function zu(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var h = ag(t, a, i, o, s);
        if (t !== null) {
          var y = Iu(t);
          y !== null && mf(y);
        }
        return h;
      }
      e.eventSystemFlags |= i;
      var S = e.targetContainers;
      return o !== null && S.indexOf(o) === -1 && S.push(o), e;
    }
    function kv(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return mn = zu(mn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var h = o;
          return nr = zu(nr, e, t, a, i, h), !0;
        }
        case "mouseover": {
          var y = o;
          return Ar = zu(Ar, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var S = o, b = S.pointerId;
          return Mu.set(b, zu(Mu.get(b) || null, e, t, a, i, S)), !0;
        }
        case "gotpointercapture": {
          var T = o, A = T.pointerId;
          return Au.set(A, zu(Au.get(A) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function np(e) {
      var t = cc(e.target);
      if (t !== null) {
        var a = Fl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === _e) {
            var o = $c(a);
            if (o !== null) {
              e.blockedOn = o, ep(e.priority, function() {
                Lu(a);
              });
              return;
            }
          } else if (i === I) {
            var s = a.stateNode;
            if (vf(s)) {
              e.blockedOn = Vc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ig(e) {
      for (var t = gf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < rr.length && Ou(t, rr[i].priority); i++)
        ;
      rr.splice(i, 0, a), i === 0 && np(a);
    }
    function Fo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Or(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          Qy(s), o.target.dispatchEvent(s), Zh();
        } else {
          var h = Iu(i);
          return h !== null && mf(h), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Sf(e, t, a) {
      Fo(e) && a.delete(t);
    }
    function Wa() {
      Zs = !1, mn !== null && Fo(mn) && (mn = null), nr !== null && Fo(nr) && (nr = null), Ar !== null && Fo(Ar) && (Ar = null), Mu.forEach(Sf), Au.forEach(Sf);
    }
    function Rt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Zs || (Zs = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Wa)));
    }
    function Dn(e) {
      if (Nu.length > 0) {
        Rt(Nu[0], e);
        for (var t = 1; t < Nu.length; t++) {
          var a = Nu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      mn !== null && Rt(mn, e), nr !== null && Rt(nr, e), Ar !== null && Rt(Ar, e);
      var i = function(y) {
        return Rt(y, e);
      };
      Mu.forEach(i), Au.forEach(i);
      for (var o = 0; o < rr.length; o++) {
        var s = rr[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; rr.length > 0; ) {
        var h = rr[0];
        if (h.blockedOn !== null)
          break;
        np(h), h.blockedOn === null && rr.shift();
      }
    }
    var pn = v.ReactCurrentBatchConfig, Gn = !0;
    function ua(e) {
      Gn = !!e;
    }
    function Uu() {
      return Gn;
    }
    function Kn(e, t, a) {
      var i = Ef(t), o;
      switch (i) {
        case Fn:
          o = Js;
          break;
        case ll:
          o = jo;
          break;
        case Oi:
        default:
          o = Fu;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Js(e, t, a, i) {
      var o = Ya(), s = pn.transition;
      pn.transition = null;
      try {
        On(Fn), Fu(e, t, a, i);
      } finally {
        On(o), pn.transition = s;
      }
    }
    function jo(e, t, a, i) {
      var o = Ya(), s = pn.transition;
      pn.transition = null;
      try {
        On(ll), Fu(e, t, a, i);
      } finally {
        On(o), pn.transition = s;
      }
    }
    function Fu(e, t, a, i) {
      Gn && rp(e, t, a, i);
    }
    function rp(e, t, a, i) {
      var o = Or(e, t, a, i);
      if (o === null) {
        Cg(e, t, i, Wl, a), tp(e, i);
        return;
      }
      if (kv(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (tp(e, i), t & Os && Di(e)) {
        for (; o !== null; ) {
          var s = Iu(o);
          s !== null && Jd(s);
          var h = Or(e, t, a, i);
          if (h === null && Cg(e, t, i, Wl, a), h === o)
            break;
          o = h;
        }
        o !== null && i.stopPropagation();
        return;
      }
      Cg(e, t, i, null, a);
    }
    var Wl = null;
    function Or(e, t, a, i) {
      Wl = null;
      var o = Zt(i), s = cc(o);
      if (s !== null) {
        var h = Fl(s);
        if (h === null)
          s = null;
        else {
          var y = h.tag;
          if (y === _e) {
            var S = $c(h);
            if (S !== null)
              return S;
            s = null;
          } else if (y === I) {
            var b = h.stateNode;
            if (vf(b))
              return Vc(h);
            s = null;
          } else h !== s && (s = null);
        }
      }
      return Wl = s, null;
    }
    function Ef(e) {
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
          return Fn;
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
          return ll;
        case "message": {
          var t = Ky();
          switch (t) {
            case ra:
              return Fn;
            case mu:
              return ll;
            case Ti:
            case yu:
              return Oi;
            case Us:
              return ku;
            default:
              return Oi;
          }
        }
        default:
          return Oi;
      }
    }
    function ju(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ol(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function wf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function ap(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Qa = null, Pu = null, qa = null;
    function Cf(e) {
      return Qa = e, Pu = tc(), !0;
    }
    function ec() {
      Qa = null, Pu = null, qa = null;
    }
    function xf() {
      if (qa)
        return qa;
      var e, t = Pu, a = t.length, i, o = tc(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var h = a - e;
      for (i = 1; i <= h && t[a - i] === o[s - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return qa = o.slice(e, y), qa;
    }
    function tc() {
      return "value" in Qa ? Qa.value : Qa.textContent;
    }
    function Po(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ar() {
      return !0;
    }
    function ul() {
      return !1;
    }
    function wn(e) {
      function t(a, i, o, s, h) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = h, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var S = e[y];
            S ? this[y] = S(s) : this[y] = s[y];
          }
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return b ? this.isDefaultPrevented = ar : this.isDefaultPrevented = ul, this.isPropagationStopped = ul, this;
      }
      return Et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ar);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ar);
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
        isPersistent: ar
      }), t;
    }
    var Xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Rf = wn(Xn), Ho = Et({}, Xn, {
      view: 0,
      detail: 0
    }), ip = wn(Ho), lp, Li, Hu;
    function op(e) {
      e !== Hu && (Hu && e.type === "mousemove" ? (lp = e.screenX - Hu.screenX, Li = e.screenY - Hu.screenY) : (lp = 0, Li = 0), Hu = e);
    }
    var Ni = Et({}, Ho, {
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
      getModifierState: up,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (op(e), lp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Li;
      }
    }), bf = wn(Ni), Bo = Et({}, Ni, {
      dataTransfer: 0
    }), _v = wn(Bo), Ov = Et({}, Ho, {
      relatedTarget: 0
    }), nc = wn(Ov), Tf = Et({}, Xn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), lg = wn(Tf), og = Et({}, Xn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Dv = wn(og), Lv = Et({}, Xn, {
      data: 0
    }), Ql = wn(Lv), ug = Ql, Bu = {
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
    }, Nv = {
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
    function Ln(e) {
      if (e.key) {
        var t = Bu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Po(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Nv[e.keyCode] || "Unidentified" : "";
    }
    var sg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Mv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = sg[e];
      return i ? !!a[i] : !1;
    }
    function up(e) {
      return Mv;
    }
    var cg = Et({}, Ho, {
      key: Ln,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: up,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Po(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Po(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Av = wn(cg), zv = Et({}, Ni, {
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
    }), Uv = wn(zv), Ga = Et({}, Ho, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: up
    }), sp = wn(Ga), fg = Et({}, Xn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ql = wn(fg), kf = Et({}, Ni, {
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
    }), $o = wn(kf), _f = [9, 13, 27, 32], Of = 229, rc = bn && "CompositionEvent" in window, ac = null;
    bn && "documentMode" in document && (ac = document.documentMode);
    var cp = bn && "TextEvent" in window && !ac, Fv = bn && (!rc || ac && ac > 8 && ac <= 11), fp = 32, dp = String.fromCharCode(fp);
    function Df() {
      Yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Yr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Yr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Yr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ic = !1;
    function jv(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function pp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function dg(e, t) {
      return e === "keydown" && t.keyCode === Of;
    }
    function hp(e, t) {
      switch (e) {
        case "keyup":
          return _f.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Of;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Lf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function lc(e) {
      return e.locale === "ko";
    }
    var Gl = !1;
    function Nf(e, t, a, i, o) {
      var s, h;
      if (rc ? s = pp(t) : Gl ? hp(t, i) && (s = "onCompositionEnd") : dg(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Fv && !lc(i) && (!Gl && s === "onCompositionStart" ? Gl = Cf(o) : s === "onCompositionEnd" && Gl && (h = xf()));
      var y = Iv(a, s);
      if (y.length > 0) {
        var S = new Ql(s, t, null, i, o);
        if (e.push({
          event: S,
          listeners: y
        }), h)
          S.data = h;
        else {
          var b = Lf(i);
          b !== null && (S.data = b);
        }
      }
    }
    function Pv(e, t) {
      switch (e) {
        case "compositionend":
          return Lf(t);
        case "keypress":
          var a = t.which;
          return a !== fp ? null : (ic = !0, dp);
        case "textInput":
          var i = t.data;
          return i === dp && ic ? null : i;
        default:
          return null;
      }
    }
    function pg(e, t) {
      if (Gl) {
        if (e === "compositionend" || !rc && hp(e, t)) {
          var a = xf();
          return ec(), Gl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!jv(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Fv && !lc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Mf(e, t, a, i, o) {
      var s;
      if (cp ? s = Pv(t, i) : s = pg(t, i), !s)
        return null;
      var h = Iv(a, "onBeforeInput");
      if (h.length > 0) {
        var y = new ug("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: y,
          listeners: h
        }), y.data = s;
      }
    }
    function hg(e, t, a, i, o, s, h) {
      Nf(e, t, a, i, o), Mf(e, t, a, i, o);
    }
    var oc = {
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
    function Hv(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!oc[e.type] : t === "textarea";
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
    function Af(e) {
      if (!bn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Yr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      pu(i);
      var o = Iv(t, "onChange");
      if (o.length > 0) {
        var s = new Rf("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var l = null, u = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      r(t, u, e, Zt(e)), Ls(R, t);
    }
    function R(e) {
      GE(e, 0);
    }
    function _(e) {
      var t = Hf(e);
      if (lu(t))
        return e;
    }
    function L(e, t) {
      if (e === "change")
        return t;
    }
    var G = !1;
    bn && (G = Af("input") && (!document.documentMode || document.documentMode > 9));
    function fe(e, t) {
      l = e, u = t, l.attachEvent("onpropertychange", le);
    }
    function de() {
      l && (l.detachEvent("onpropertychange", le), l = null, u = null);
    }
    function le(e) {
      e.propertyName === "value" && _(u) && m(e);
    }
    function Oe(e, t, a) {
      e === "focusin" ? (de(), fe(t, a)) : e === "focusout" && de();
    }
    function Ue(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return _(u);
    }
    function $e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function jn(e, t) {
      if (e === "click")
        return _(t);
    }
    function j(e, t) {
      if (e === "input" || e === "change")
        return _(t);
    }
    function M(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || lt(e, "number", e.value);
    }
    function V(e, t, a, i, o, s, h) {
      var y = a ? Hf(a) : window, S, b;
      if (d(y) ? S = L : Hv(y) ? G ? S = j : (S = Ue, b = Oe) : $e(y) && (S = jn), S) {
        var T = S(t, a);
        if (T) {
          r(e, T, i, o);
          return;
        }
      }
      b && b(t, y, a), t === "focusout" && M(y);
    }
    function ge() {
      wr("onMouseEnter", ["mouseout", "mouseover"]), wr("onMouseLeave", ["mouseout", "mouseover"]), wr("onPointerEnter", ["pointerout", "pointerover"]), wr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ie(e, t, a, i, o, s, h) {
      var y = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
      if (y && !Jh(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (cc(b) || _p(b)))
          return;
      }
      if (!(!S && !y)) {
        var T;
        if (o.window === o)
          T = o;
        else {
          var A = o.ownerDocument;
          A ? T = A.defaultView || A.parentWindow : T = window;
        }
        var N, W;
        if (S) {
          var Q = i.relatedTarget || i.toElement;
          if (N = a, W = Q ? cc(Q) : null, W !== null) {
            var ee = Fl(W);
            (W !== ee || W.tag !== K && W.tag !== X) && (W = null);
          }
        } else
          N = null, W = a;
        if (N !== W) {
          var Ne = bf, Je = "onMouseLeave", Qe = "onMouseEnter", Ot = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ne = Uv, Je = "onPointerLeave", Qe = "onPointerEnter", Ot = "pointer");
          var bt = N == null ? T : Hf(N), H = W == null ? T : Hf(W), te = new Ne(Je, Ot + "leave", N, i, o);
          te.target = bt, te.relatedTarget = H;
          var B = null, he = cc(o);
          if (he === a) {
            var Me = new Ne(Qe, Ot + "enter", W, i, o);
            Me.target = H, Me.relatedTarget = bt, B = Me;
          }
          tb(e, te, B, N, W);
        }
      }
    }
    function nt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Fe = typeof Object.is == "function" ? Object.is : nt;
    function it(e, t) {
      if (Fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!or.call(t, s) || !Fe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Zn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ut(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function sl(e, t) {
      for (var a = Zn(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Xi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Zn(Ut(a));
      }
    }
    function vg(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, h = i.focusNode, y = i.focusOffset;
      try {
        o.nodeType, h.nodeType;
      } catch {
        return null;
      }
      return zR(e, o, s, h, y);
    }
    function zR(e, t, a, i, o) {
      var s = 0, h = -1, y = -1, S = 0, b = 0, T = e, A = null;
      e: for (; ; ) {
        for (var N = null; T === t && (a === 0 || T.nodeType === Xi) && (h = s + a), T === i && (o === 0 || T.nodeType === Xi) && (y = s + o), T.nodeType === Xi && (s += T.nodeValue.length), (N = T.firstChild) !== null; )
          A = T, T = N;
        for (; ; ) {
          if (T === e)
            break e;
          if (A === t && ++S === a && (h = s), A === i && ++b === o && (y = s), (N = T.nextSibling) !== null)
            break;
          T = A, A = T.parentNode;
        }
        T = N;
      }
      return h === -1 || y === -1 ? null : {
        start: h,
        end: y
      };
    }
    function UR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, h = Math.min(t.start, s), y = t.end === void 0 ? h : Math.min(t.end, s);
        if (!o.extend && h > y) {
          var S = y;
          y = h, h = S;
        }
        var b = sl(e, h), T = sl(e, y);
        if (b && T) {
          if (o.rangeCount === 1 && o.anchorNode === b.node && o.anchorOffset === b.offset && o.focusNode === T.node && o.focusOffset === T.offset)
            return;
          var A = a.createRange();
          A.setStart(b.node, b.offset), o.removeAllRanges(), h > y ? (o.addRange(A), o.extend(T.node, T.offset)) : (A.setEnd(T.node, T.offset), o.addRange(A));
        }
      }
    }
    function FE(e) {
      return e && e.nodeType === Xi;
    }
    function jE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : FE(e) ? !1 : FE(t) ? jE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function FR(e) {
      return e && e.ownerDocument && jE(e.ownerDocument.documentElement, e);
    }
    function jR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function PE() {
      for (var e = window, t = wi(); t instanceof e.HTMLIFrameElement; ) {
        if (jR(t))
          e = t.contentWindow;
        else
          return t;
        t = wi(e.document);
      }
      return t;
    }
    function mg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function PR() {
      var e = PE();
      return {
        focusedElem: e,
        selectionRange: mg(e) ? BR(e) : null
      };
    }
    function HR(e) {
      var t = PE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && FR(a)) {
        i !== null && mg(a) && $R(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Zr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var h = 0; h < o.length; h++) {
          var y = o[h];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function BR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = vg(e), t || {
        start: 0,
        end: 0
      };
    }
    function $R(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : UR(e, t);
    }
    var VR = bn && "documentMode" in document && document.documentMode <= 11;
    function IR() {
      Yr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var zf = null, yg = null, vp = null, gg = !1;
    function YR(e) {
      if ("selectionStart" in e && mg(e))
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
    function WR(e) {
      return e.window === e ? e.document : e.nodeType === wa ? e : e.ownerDocument;
    }
    function HE(e, t, a) {
      var i = WR(a);
      if (!(gg || zf == null || zf !== wi(i))) {
        var o = YR(zf);
        if (!vp || !it(vp, o)) {
          vp = o;
          var s = Iv(yg, "onSelect");
          if (s.length > 0) {
            var h = new Rf("onSelect", "select", null, t, a);
            e.push({
              event: h,
              listeners: s
            }), h.target = zf;
          }
        }
      }
    }
    function QR(e, t, a, i, o, s, h) {
      var y = a ? Hf(a) : window;
      switch (t) {
        case "focusin":
          (Hv(y) || y.contentEditable === "true") && (zf = y, yg = a, vp = null);
          break;
        case "focusout":
          zf = null, yg = null, vp = null;
          break;
        case "mousedown":
          gg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gg = !1, HE(e, i, o);
          break;
        case "selectionchange":
          if (VR)
            break;
        case "keydown":
        case "keyup":
          HE(e, i, o);
      }
    }
    function Bv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Uf = {
      animationend: Bv("Animation", "AnimationEnd"),
      animationiteration: Bv("Animation", "AnimationIteration"),
      animationstart: Bv("Animation", "AnimationStart"),
      transitionend: Bv("Transition", "TransitionEnd")
    }, Sg = {}, BE = {};
    bn && (BE = document.createElement("div").style, "AnimationEvent" in window || (delete Uf.animationend.animation, delete Uf.animationiteration.animation, delete Uf.animationstart.animation), "TransitionEvent" in window || delete Uf.transitionend.transition);
    function $v(e) {
      if (Sg[e])
        return Sg[e];
      if (!Uf[e])
        return e;
      var t = Uf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in BE)
          return Sg[e] = t[a];
      return e;
    }
    var $E = $v("animationend"), VE = $v("animationiteration"), IE = $v("animationstart"), YE = $v("transitionend"), WE = /* @__PURE__ */ new Map(), QE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function $u(e, t) {
      WE.set(e, t), Yr(t, [e]);
    }
    function qR() {
      for (var e = 0; e < QE.length; e++) {
        var t = QE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        $u(a, "on" + i);
      }
      $u($E, "onAnimationEnd"), $u(VE, "onAnimationIteration"), $u(IE, "onAnimationStart"), $u("dblclick", "onDoubleClick"), $u("focusin", "onFocus"), $u("focusout", "onBlur"), $u(YE, "onTransitionEnd");
    }
    function GR(e, t, a, i, o, s, h) {
      var y = WE.get(t);
      if (y !== void 0) {
        var S = Rf, b = t;
        switch (t) {
          case "keypress":
            if (Po(i) === 0)
              return;
          case "keydown":
          case "keyup":
            S = Av;
            break;
          case "focusin":
            b = "focus", S = nc;
            break;
          case "focusout":
            b = "blur", S = nc;
            break;
          case "beforeblur":
          case "afterblur":
            S = nc;
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
            S = bf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = _v;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = sp;
            break;
          case $E:
          case VE:
          case IE:
            S = lg;
            break;
          case YE:
            S = ql;
            break;
          case "scroll":
            S = ip;
            break;
          case "wheel":
            S = $o;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Dv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Uv;
            break;
        }
        var T = (s & Os) !== 0;
        {
          var A = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = JR(a, y, i.type, T, A);
          if (N.length > 0) {
            var W = new S(y, b, null, i, o);
            e.push({
              event: W,
              listeners: N
            });
          }
        }
      }
    }
    qR(), ge(), n(), IR(), Df();
    function KR(e, t, a, i, o, s, h) {
      GR(e, t, a, i, o, s);
      var y = (s & Wy) === 0;
      y && (Ie(e, t, a, i, o), V(e, t, a, i, o), QR(e, t, a, i, o), hg(e, t, a, i, o));
    }
    var mp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Eg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(mp));
    function qE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, zd(i, t, void 0, e), e.currentTarget = null;
    }
    function XR(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], h = s.instance, y = s.currentTarget, S = s.listener;
          if (h !== i && e.isPropagationStopped())
            return;
          qE(e, S, y), i = h;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var T = t[b], A = T.instance, N = T.currentTarget, W = T.listener;
          if (A !== i && e.isPropagationStopped())
            return;
          qE(e, W, N), i = A;
        }
    }
    function GE(e, t) {
      for (var a = (t & Os) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, h = o.listeners;
        XR(s, h, a);
      }
      qy();
    }
    function ZR(e, t, a, i, o) {
      var s = Zt(a), h = [];
      KR(h, e, i, a, s, t), GE(h, t);
    }
    function Cn(e, t) {
      Eg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = _T(t), o = nb(e);
      i.has(o) || (KE(t, e, _s, a), i.add(o));
    }
    function wg(e, t, a) {
      Eg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Os), KE(a, e, i, t);
    }
    var Vv = "_reactListening" + Math.random().toString(36).slice(2);
    function yp(e) {
      if (!e[Vv]) {
        e[Vv] = !0, Ht.forEach(function(a) {
          a !== "selectionchange" && (Eg.has(a) || wg(a, !1, e), wg(a, !0, e));
        });
        var t = e.nodeType === wa ? e : e.ownerDocument;
        t !== null && (t[Vv] || (t[Vv] = !0, wg("selectionchange", !1, t)));
      }
    }
    function KE(e, t, a, i, o) {
      var s = Kn(e, t, a), h = void 0;
      Ns && (t === "touchstart" || t === "touchmove" || t === "wheel") && (h = !0), e = e, i ? h !== void 0 ? wf(e, t, s, h) : ol(e, t, s) : h !== void 0 ? ap(e, t, s, h) : ju(e, t, s);
    }
    function XE(e, t) {
      return e === t || e.nodeType === Tn && e.parentNode === t;
    }
    function Cg(e, t, a, i, o) {
      var s = i;
      if (!(t & Fc) && !(t & _s)) {
        var h = o;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var S = y.tag;
            if (S === I || S === oe) {
              var b = y.stateNode.containerInfo;
              if (XE(b, h))
                break;
              if (S === oe)
                for (var T = y.return; T !== null; ) {
                  var A = T.tag;
                  if (A === I || A === oe) {
                    var N = T.stateNode.containerInfo;
                    if (XE(N, h))
                      return;
                  }
                  T = T.return;
                }
              for (; b !== null; ) {
                var W = cc(b);
                if (W === null)
                  return;
                var Q = W.tag;
                if (Q === K || Q === X) {
                  y = s = W;
                  continue e;
                }
                b = b.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      Ls(function() {
        return ZR(e, t, a, s);
      });
    }
    function gp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function JR(e, t, a, i, o, s) {
      for (var h = t !== null ? t + "Capture" : null, y = i ? h : t, S = [], b = e, T = null; b !== null; ) {
        var A = b, N = A.stateNode, W = A.tag;
        if (W === K && N !== null && (T = N, y !== null)) {
          var Q = xo(b, y);
          Q != null && S.push(gp(b, Q, T));
        }
        if (o)
          break;
        b = b.return;
      }
      return S;
    }
    function Iv(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, h = s.stateNode, y = s.tag;
        if (y === K && h !== null) {
          var S = h, b = xo(o, a);
          b != null && i.unshift(gp(o, b, S));
          var T = xo(o, t);
          T != null && i.push(gp(o, T, S));
        }
        o = o.return;
      }
      return i;
    }
    function Ff(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== K);
      return e || null;
    }
    function eb(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Ff(s))
        o++;
      for (var h = 0, y = i; y; y = Ff(y))
        h++;
      for (; o - h > 0; )
        a = Ff(a), o--;
      for (; h - o > 0; )
        i = Ff(i), h--;
      for (var S = o; S--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ff(a), i = Ff(i);
      }
      return null;
    }
    function ZE(e, t, a, i, o) {
      for (var s = t._reactName, h = [], y = a; y !== null && y !== i; ) {
        var S = y, b = S.alternate, T = S.stateNode, A = S.tag;
        if (b !== null && b === i)
          break;
        if (A === K && T !== null) {
          var N = T;
          if (o) {
            var W = xo(y, s);
            W != null && h.unshift(gp(y, W, N));
          } else if (!o) {
            var Q = xo(y, s);
            Q != null && h.push(gp(y, Q, N));
          }
        }
        y = y.return;
      }
      h.length !== 0 && e.push({
        event: t,
        listeners: h
      });
    }
    function tb(e, t, a, i, o) {
      var s = i && o ? eb(i, o) : null;
      i !== null && ZE(e, t, i, s, !1), o !== null && a !== null && ZE(e, a, o, s, !0);
    }
    function nb(e, t) {
      return e + "__bubble";
    }
    var Ka = !1, Sp = "dangerouslySetInnerHTML", Yv = "suppressContentEditableWarning", Vu = "suppressHydrationWarning", JE = "autoFocus", uc = "children", sc = "style", Wv = "__html", xg, Qv, Ep, e1, qv, t1, n1;
    xg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Qv = function(e, t) {
      du(e, t), Qh(e, t), Ml(e, t, {
        registrationNameDependencies: Rn,
        possibleRegistrationNames: Wn
      });
    }, t1 = bn && !document.documentMode, Ep = function(e, t, a) {
      if (!Ka) {
        var i = Gv(a), o = Gv(t);
        o !== i && (Ka = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, e1 = function(e) {
      if (!Ka) {
        Ka = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, qv = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, n1 = function(e, t) {
      var a = e.namespaceURI === Ki ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var rb = /\r\n?/g, ab = /\u0000|\uFFFD/g;
    function Gv(e) {
      va(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(rb, `
`).replace(ab, "");
    }
    function Kv(e, t, a, i) {
      var o = Gv(t), s = Gv(e);
      if (s !== o && (i && (Ka || (Ka = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && q))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function r1(e) {
      return e.nodeType === wa ? e : e.ownerDocument;
    }
    function ib() {
    }
    function Xv(e) {
      e.onclick = ib;
    }
    function lb(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var h = i[s];
          if (s === sc)
            h && Object.freeze(h), Bh(t, h);
          else if (s === Sp) {
            var y = h ? h[Wv] : void 0;
            y != null && Nh(t, y);
          } else if (s === uc)
            if (typeof h == "string") {
              var S = e !== "textarea" || h !== "";
              S && Cs(t, h);
            } else typeof h == "number" && Cs(t, "" + h);
          else s === Yv || s === Vu || s === JE || (Rn.hasOwnProperty(s) ? h != null && (typeof h != "function" && qv(s, h), s === "onScroll" && Cn("scroll", t)) : h != null && $i(t, s, h, o));
        }
    }
    function ob(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], h = t[o + 1];
        s === sc ? Bh(e, h) : s === Sp ? Nh(e, h) : s === uc ? Cs(e, h) : $i(e, s, h, i);
      }
    }
    function ub(e, t, a, i) {
      var o, s = r1(a), h, y = i;
      if (y === Ki && (y = yd(e)), y === Ki) {
        if (o = Eo(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var S = s.createElement("div");
          S.innerHTML = "<script><\/script>";
          var b = S.firstChild;
          h = S.removeChild(b);
        } else if (typeof t.is == "string")
          h = s.createElement(e, {
            is: t.is
          });
        else if (h = s.createElement(e), e === "select") {
          var T = h;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        h = s.createElementNS(y, e);
      return y === Ki && !o && Object.prototype.toString.call(h) === "[object HTMLUnknownElement]" && !or.call(xg, e) && (xg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), h;
    }
    function sb(e, t) {
      return r1(t).createTextNode(e);
    }
    function cb(e, t, a, i) {
      var o = Eo(t, a);
      Qv(t, a);
      var s;
      switch (t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var h = 0; h < mp.length; h++)
            Cn(mp[h], e);
          s = a;
          break;
        case "source":
          Cn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e), s = a;
          break;
        case "details":
          Cn("toggle", e), s = a;
          break;
        case "input":
          O(e, a), s = C(e, a), Cn("invalid", e);
          break;
        case "option":
          Qt(e, a), s = a;
          break;
        case "select":
          ws(e, a), s = Es(e, a), Cn("invalid", e);
          break;
        case "textarea":
          Dh(e, a), s = md(e, a), Cn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (bs(t, s), lb(t, e, i, s, o), t) {
        case "input":
          Qi(e), ye(e, a, !1);
          break;
        case "textarea":
          Qi(e), Dc(e);
          break;
        case "option":
          qt(e, a);
          break;
        case "select":
          vd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Xv(e);
          break;
      }
    }
    function fb(e, t, a, i, o) {
      Qv(t, i);
      var s = null, h, y;
      switch (t) {
        case "input":
          h = C(e, a), y = C(e, i), s = [];
          break;
        case "select":
          h = Es(e, a), y = Es(e, i), s = [];
          break;
        case "textarea":
          h = md(e, a), y = md(e, i), s = [];
          break;
        default:
          h = a, y = i, typeof h.onClick != "function" && typeof y.onClick == "function" && Xv(e);
          break;
      }
      bs(t, y);
      var S, b, T = null;
      for (S in h)
        if (!(y.hasOwnProperty(S) || !h.hasOwnProperty(S) || h[S] == null))
          if (S === sc) {
            var A = h[S];
            for (b in A)
              A.hasOwnProperty(b) && (T || (T = {}), T[b] = "");
          } else S === Sp || S === uc || S === Yv || S === Vu || S === JE || (Rn.hasOwnProperty(S) ? s || (s = []) : (s = s || []).push(S, null));
      for (S in y) {
        var N = y[S], W = h != null ? h[S] : void 0;
        if (!(!y.hasOwnProperty(S) || N === W || N == null && W == null))
          if (S === sc)
            if (N && Object.freeze(N), W) {
              for (b in W)
                W.hasOwnProperty(b) && (!N || !N.hasOwnProperty(b)) && (T || (T = {}), T[b] = "");
              for (b in N)
                N.hasOwnProperty(b) && W[b] !== N[b] && (T || (T = {}), T[b] = N[b]);
            } else
              T || (s || (s = []), s.push(S, T)), T = N;
          else if (S === Sp) {
            var Q = N ? N[Wv] : void 0, ee = W ? W[Wv] : void 0;
            Q != null && ee !== Q && (s = s || []).push(S, Q);
          } else S === uc ? (typeof N == "string" || typeof N == "number") && (s = s || []).push(S, "" + N) : S === Yv || S === Vu || (Rn.hasOwnProperty(S) ? (N != null && (typeof N != "function" && qv(S, N), S === "onScroll" && Cn("scroll", e)), !s && W !== N && (s = [])) : (s = s || []).push(S, N));
      }
      return T && ($h(T, y[sc]), (s = s || []).push(sc, T)), s;
    }
    function db(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && Y(e, o);
      var s = Eo(a, i), h = Eo(a, o);
      switch (ob(e, t, s, h), a) {
        case "input":
          J(e, o);
          break;
        case "textarea":
          Lh(e, o);
          break;
        case "select":
          zy(e, o);
          break;
      }
    }
    function pb(e) {
      {
        var t = e.toLowerCase();
        return Ac.hasOwnProperty(t) && Ac[t] || null;
      }
    }
    function hb(e, t, a, i, o, s, h) {
      var y, S;
      switch (y = Eo(t, a), Qv(t, a), t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < mp.length; b++)
            Cn(mp[b], e);
          break;
        case "source":
          Cn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e);
          break;
        case "details":
          Cn("toggle", e);
          break;
        case "input":
          O(e, a), Cn("invalid", e);
          break;
        case "option":
          Qt(e, a);
          break;
        case "select":
          ws(e, a), Cn("invalid", e);
          break;
        case "textarea":
          Dh(e, a), Cn("invalid", e);
          break;
      }
      bs(t, a);
      {
        S = /* @__PURE__ */ new Set();
        for (var T = e.attributes, A = 0; A < T.length; A++) {
          var N = T[A].name.toLowerCase();
          switch (N) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              S.add(T[A].name);
          }
        }
      }
      var W = null;
      for (var Q in a)
        if (a.hasOwnProperty(Q)) {
          var ee = a[Q];
          if (Q === uc)
            typeof ee == "string" ? e.textContent !== ee && (a[Vu] !== !0 && Kv(e.textContent, ee, s, h), W = [uc, ee]) : typeof ee == "number" && e.textContent !== "" + ee && (a[Vu] !== !0 && Kv(e.textContent, ee, s, h), W = [uc, "" + ee]);
          else if (Rn.hasOwnProperty(Q))
            ee != null && (typeof ee != "function" && qv(Q, ee), Q === "onScroll" && Cn("scroll", e));
          else if (h && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Ne = void 0, Je = y && Be ? null : er(Q);
            if (a[Vu] !== !0) {
              if (!(Q === Yv || Q === Vu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === Sp) {
                  var Qe = e.innerHTML, Ot = ee ? ee[Wv] : void 0;
                  if (Ot != null) {
                    var bt = n1(e, Ot);
                    bt !== Qe && Ep(Q, Qe, bt);
                  }
                } else if (Q === sc) {
                  if (S.delete(Q), t1) {
                    var H = Yy(ee);
                    Ne = e.getAttribute("style"), H !== Ne && Ep(Q, Ne, H);
                  }
                } else if (y && !Be)
                  S.delete(Q.toLowerCase()), Ne = Aa(e, Q, ee), ee !== Ne && Ep(Q, Ne, ee);
                else if (!yn(Q, Je, y) && !Yt(Q, ee, Je, y)) {
                  var te = !1;
                  if (Je !== null)
                    S.delete(Je.attributeName), Ne = ii(e, Q, ee, Je);
                  else {
                    var B = i;
                    if (B === Ki && (B = yd(t)), B === Ki)
                      S.delete(Q.toLowerCase());
                    else {
                      var he = pb(Q);
                      he !== null && he !== Q && (te = !0, S.delete(he)), S.delete(Q);
                    }
                    Ne = Aa(e, Q, ee);
                  }
                  var Me = Be;
                  !Me && ee !== Ne && !te && Ep(Q, Ne, ee);
                }
              }
            }
          }
        }
      switch (h && // $FlowFixMe - Should be inferred as not undefined.
      S.size > 0 && a[Vu] !== !0 && e1(S), t) {
        case "input":
          Qi(e), ye(e, a, !0);
          break;
        case "textarea":
          Qi(e), Dc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Xv(e);
          break;
      }
      return W;
    }
    function vb(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Rg(e, t) {
      {
        if (Ka)
          return;
        Ka = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function bg(e, t) {
      {
        if (Ka)
          return;
        Ka = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Tg(e, t, a) {
      {
        if (Ka)
          return;
        Ka = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function kg(e, t) {
      {
        if (t === "" || Ka)
          return;
        Ka = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mb(e, t, a) {
      switch (t) {
        case "input":
          He(e, a);
          return;
        case "textarea":
          Uy(e, a);
          return;
        case "select":
          _h(e, a);
          return;
      }
    }
    var wp = function() {
    }, Cp = function() {
    };
    {
      var yb = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], a1 = [
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
      ], gb = a1.concat(["button"]), Sb = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], i1 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Cp = function(e, t) {
        var a = Et({}, e || i1), i = {
          tag: t
        };
        return a1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), gb.indexOf(t) !== -1 && (a.pTagInButtonScope = null), yb.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Eb = function(e, t) {
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
            return Sb.indexOf(t) === -1;
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
      }, wb = function(e, t) {
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
      }, l1 = {};
      wp = function(e, t, a) {
        a = a || i1;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Eb(e, o) ? null : i, h = s ? null : wb(e, a), y = s || h;
        if (y) {
          var S = y.tag, b = !!s + "|" + e + "|" + S;
          if (!l1[b]) {
            l1[b] = !0;
            var T = e, A = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", A = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var N = "";
              S === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, S, A, N);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, S);
          }
        }
      };
    }
    var Zv = "suppressHydrationWarning", Jv = "$", em = "/$", xp = "$?", Rp = "$!", Cb = "style", _g = null, Og = null;
    function xb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case wa:
        case Sd: {
          t = i === wa ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : gd(null, "");
          break;
        }
        default: {
          var s = i === Tn ? e.parentNode : e, h = s.namespaceURI || null;
          t = s.tagName, a = gd(h, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), S = Cp(null, y);
        return {
          namespace: a,
          ancestorInfo: S
        };
      }
    }
    function Rb(e, t, a) {
      {
        var i = e, o = gd(i.namespace, t), s = Cp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function SM(e) {
      return e;
    }
    function bb(e) {
      _g = Uu(), Og = PR();
      var t = null;
      return ua(!1), t;
    }
    function Tb(e) {
      HR(Og), ua(_g), _g = null, Og = null;
    }
    function kb(e, t, a, i, o) {
      var s;
      {
        var h = i;
        if (wp(e, null, h.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, S = Cp(h.ancestorInfo, e);
          wp(null, y, S);
        }
        s = h.namespace;
      }
      var b = ub(e, t, a, s);
      return kp(o, b), Fg(b, t), b;
    }
    function _b(e, t) {
      e.appendChild(t);
    }
    function Ob(e, t, a, i, o) {
      switch (cb(e, t, a, i), t) {
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
    function Db(e, t, a, i, o, s) {
      {
        var h = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, S = Cp(h.ancestorInfo, t);
          wp(null, y, S);
        }
      }
      return fb(e, t, a, i);
    }
    function Dg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Lb(e, t, a, i) {
      {
        var o = a;
        wp(null, e, o.ancestorInfo);
      }
      var s = sb(e, t);
      return kp(i, s), s;
    }
    function Nb() {
      var e = window.event;
      return e === void 0 ? Oi : Ef(e.type);
    }
    var Lg = typeof setTimeout == "function" ? setTimeout : void 0, Mb = typeof clearTimeout == "function" ? clearTimeout : void 0, Ng = -1, o1 = typeof Promise == "function" ? Promise : void 0, Ab = typeof queueMicrotask == "function" ? queueMicrotask : typeof o1 < "u" ? function(e) {
      return o1.resolve(null).then(e).catch(zb);
    } : Lg;
    function zb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ub(e, t, a, i) {
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
    function Fb(e, t, a, i, o, s) {
      db(e, t, a, i, o), Fg(e, o);
    }
    function u1(e) {
      Cs(e, "");
    }
    function jb(e, t, a) {
      e.nodeValue = a;
    }
    function Pb(e, t) {
      e.appendChild(t);
    }
    function Hb(e, t) {
      var a;
      e.nodeType === Tn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Xv(a);
    }
    function Bb(e, t, a) {
      e.insertBefore(t, a);
    }
    function $b(e, t, a) {
      e.nodeType === Tn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Vb(e, t) {
      e.removeChild(t);
    }
    function Ib(e, t) {
      e.nodeType === Tn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Mg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Tn) {
          var s = o.data;
          if (s === em)
            if (i === 0) {
              e.removeChild(o), Dn(t);
              return;
            } else
              i--;
          else (s === Jv || s === xp || s === Rp) && i++;
        }
        a = o;
      } while (a);
      Dn(t);
    }
    function Yb(e, t) {
      e.nodeType === Tn ? Mg(e.parentNode, t) : e.nodeType === Zr && Mg(e, t), Dn(e);
    }
    function Wb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Qb(e) {
      e.nodeValue = "";
    }
    function qb(e, t) {
      e = e;
      var a = t[Cb], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ll("display", i);
    }
    function Gb(e, t) {
      e.nodeValue = t;
    }
    function Kb(e) {
      e.nodeType === Zr ? e.textContent = "" : e.nodeType === wa && e.documentElement && e.removeChild(e.documentElement);
    }
    function Xb(e, t, a) {
      return e.nodeType !== Zr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Zb(e, t) {
      return t === "" || e.nodeType !== Xi ? null : e;
    }
    function Jb(e) {
      return e.nodeType !== Tn ? null : e;
    }
    function s1(e) {
      return e.data === xp;
    }
    function Ag(e) {
      return e.data === Rp;
    }
    function eT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function tT(e, t) {
      e._reactRetry = t;
    }
    function tm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Zr || t === Xi)
          break;
        if (t === Tn) {
          var a = e.data;
          if (a === Jv || a === Rp || a === xp)
            break;
          if (a === em)
            return null;
        }
      }
      return e;
    }
    function bp(e) {
      return tm(e.nextSibling);
    }
    function nT(e) {
      return tm(e.firstChild);
    }
    function rT(e) {
      return tm(e.firstChild);
    }
    function aT(e) {
      return tm(e.nextSibling);
    }
    function iT(e, t, a, i, o, s, h) {
      kp(s, e), Fg(e, a);
      var y;
      {
        var S = o;
        y = S.namespace;
      }
      var b = (s.mode & We) !== Ze;
      return hb(e, t, a, y, i, b, h);
    }
    function lT(e, t, a, i) {
      return kp(a, e), a.mode & We, vb(e, t);
    }
    function oT(e, t) {
      kp(t, e);
    }
    function uT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Tn) {
          var i = t.data;
          if (i === em) {
            if (a === 0)
              return bp(t);
            a--;
          } else (i === Jv || i === Rp || i === xp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function c1(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Tn) {
          var i = t.data;
          if (i === Jv || i === Rp || i === xp) {
            if (a === 0)
              return t;
            a--;
          } else i === em && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function sT(e) {
      Dn(e);
    }
    function cT(e) {
      Dn(e);
    }
    function fT(e) {
      return e !== "head" && e !== "body";
    }
    function dT(e, t, a, i) {
      var o = !0;
      Kv(t.nodeValue, a, i, o);
    }
    function pT(e, t, a, i, o, s) {
      if (t[Zv] !== !0) {
        var h = !0;
        Kv(i.nodeValue, o, s, h);
      }
    }
    function hT(e, t) {
      t.nodeType === Zr ? Rg(e, t) : t.nodeType === Tn || bg(e, t);
    }
    function vT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Zr ? Rg(a, t) : t.nodeType === Tn || bg(a, t));
      }
    }
    function mT(e, t, a, i, o) {
      (o || t[Zv] !== !0) && (i.nodeType === Zr ? Rg(a, i) : i.nodeType === Tn || bg(a, i));
    }
    function yT(e, t, a) {
      Tg(e, t);
    }
    function gT(e, t) {
      kg(e, t);
    }
    function ST(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Tg(i, t);
      }
    }
    function ET(e, t) {
      {
        var a = e.parentNode;
        a !== null && kg(a, t);
      }
    }
    function wT(e, t, a, i, o, s) {
      (s || t[Zv] !== !0) && Tg(a, i);
    }
    function CT(e, t, a, i, o) {
      (o || t[Zv] !== !0) && kg(a, i);
    }
    function xT(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function RT(e) {
      yp(e);
    }
    var jf = Math.random().toString(36).slice(2), Pf = "__reactFiber$" + jf, zg = "__reactProps$" + jf, Tp = "__reactContainer$" + jf, Ug = "__reactEvents$" + jf, bT = "__reactListeners$" + jf, TT = "__reactHandles$" + jf;
    function kT(e) {
      delete e[Pf], delete e[zg], delete e[Ug], delete e[bT], delete e[TT];
    }
    function kp(e, t) {
      t[Pf] = e;
    }
    function nm(e, t) {
      t[Tp] = e;
    }
    function f1(e) {
      e[Tp] = null;
    }
    function _p(e) {
      return !!e[Tp];
    }
    function cc(e) {
      var t = e[Pf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Tp] || a[Pf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = c1(e); o !== null; ) {
              var s = o[Pf];
              if (s)
                return s;
              o = c1(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Iu(e) {
      var t = e[Pf] || e[Tp];
      return t && (t.tag === K || t.tag === X || t.tag === _e || t.tag === I) ? t : null;
    }
    function Hf(e) {
      if (e.tag === K || e.tag === X)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function rm(e) {
      return e[zg] || null;
    }
    function Fg(e, t) {
      e[zg] = t;
    }
    function _T(e) {
      var t = e[Ug];
      return t === void 0 && (t = e[Ug] = /* @__PURE__ */ new Set()), t;
    }
    var d1 = {}, p1 = v.ReactDebugCurrentFrame;
    function am(e) {
      if (e) {
        var t = e._owner, a = Tt(e.type, e._source, t ? t.type : null);
        p1.setExtraStackFrame(a);
      } else
        p1.setExtraStackFrame(null);
    }
    function cl(e, t, a, i, o) {
      {
        var s = Function.call.bind(or);
        for (var h in e)
          if (s(e, h)) {
            var y = void 0;
            try {
              if (typeof e[h] != "function") {
                var S = Error((i || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              y = e[h](t, h, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              y = b;
            }
            y && !(y instanceof Error) && (am(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, h, typeof y), am(null)), y instanceof Error && !(y.message in d1) && (d1[y.message] = !0, am(o), g("Failed %s type: %s", a, y.message), am(null));
          }
      }
    }
    var jg = [], im;
    im = [];
    var Vo = -1;
    function Yu(e) {
      return {
        current: e
      };
    }
    function sa(e, t) {
      if (Vo < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== im[Vo] && g("Unexpected Fiber popped."), e.current = jg[Vo], jg[Vo] = null, im[Vo] = null, Vo--;
    }
    function ca(e, t, a) {
      Vo++, jg[Vo] = e.current, im[Vo] = a, e.current = t;
    }
    var Pg;
    Pg = {};
    var pi = {};
    Object.freeze(pi);
    var Io = Yu(pi), Kl = Yu(!1), Hg = pi;
    function Bf(e, t, a) {
      return a && Xl(t) ? Hg : Io.current;
    }
    function h1(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function $f(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return pi;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var h in i)
          s[h] = t[h];
        {
          var y = ct(e) || "Unknown";
          cl(i, s, "context", y);
        }
        return o && h1(e, t, s), s;
      }
    }
    function lm() {
      return Kl.current;
    }
    function Xl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function om(e) {
      sa(Kl, e), sa(Io, e);
    }
    function Bg(e) {
      sa(Kl, e), sa(Io, e);
    }
    function v1(e, t, a) {
      {
        if (Io.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca(Io, t, e), ca(Kl, a, e);
      }
    }
    function m1(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ct(e) || "Unknown";
            Pg[s] || (Pg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var h = i.getChildContext();
        for (var y in h)
          if (!(y in o))
            throw new Error((ct(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var S = ct(e) || "Unknown";
          cl(o, h, "child context", S);
        }
        return Et({}, a, h);
      }
    }
    function um(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return Hg = Io.current, ca(Io, a, e), ca(Kl, Kl.current, e), !0;
      }
    }
    function y1(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = m1(e, t, Hg);
          i.__reactInternalMemoizedMergedChildContext = o, sa(Kl, e), sa(Io, e), ca(Io, o, e), ca(Kl, a, e);
        } else
          sa(Kl, e), ca(Kl, a, e);
      }
    }
    function OT(e) {
      {
        if (!Ra(e) || e.tag !== z)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case I:
              return t.stateNode.context;
            case z: {
              var a = t.type;
              if (Xl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Wu = 0, sm = 1, Yo = null, $g = !1, Vg = !1;
    function g1(e) {
      Yo === null ? Yo = [e] : Yo.push(e);
    }
    function DT(e) {
      $g = !0, g1(e);
    }
    function S1() {
      $g && Qu();
    }
    function Qu() {
      if (!Vg && Yo !== null) {
        Vg = !0;
        var e = 0, t = Ya();
        try {
          var a = !0, i = Yo;
          for (On(Fn); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Yo = null, $g = !1;
        } catch (s) {
          throw Yo !== null && (Yo = Yo.slice(e + 1)), Pd(ra, Qu), s;
        } finally {
          On(t), Vg = !1;
        }
      }
      return null;
    }
    var Vf = [], If = 0, cm = null, fm = 0, Mi = [], Ai = 0, fc = null, Wo = 1, Qo = "";
    function LT(e) {
      return pc(), (e.flags & av) !== Xe;
    }
    function NT(e) {
      return pc(), fm;
    }
    function MT() {
      var e = Qo, t = Wo, a = t & ~AT(t);
      return a.toString(32) + e;
    }
    function dc(e, t) {
      pc(), Vf[If++] = fm, Vf[If++] = cm, cm = e, fm = t;
    }
    function E1(e, t, a) {
      pc(), Mi[Ai++] = Wo, Mi[Ai++] = Qo, Mi[Ai++] = fc, fc = e;
      var i = Wo, o = Qo, s = dm(i) - 1, h = i & ~(1 << s), y = a + 1, S = dm(t) + s;
      if (S > 30) {
        var b = s - s % 5, T = (1 << b) - 1, A = (h & T).toString(32), N = h >> b, W = s - b, Q = dm(t) + W, ee = y << W, Ne = ee | N, Je = A + o;
        Wo = 1 << Q | Ne, Qo = Je;
      } else {
        var Qe = y << s, Ot = Qe | h, bt = o;
        Wo = 1 << S | Ot, Qo = bt;
      }
    }
    function Ig(e) {
      pc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        dc(e, a), E1(e, a, i);
      }
    }
    function dm(e) {
      return 32 - Bs(e);
    }
    function AT(e) {
      return 1 << dm(e) - 1;
    }
    function Yg(e) {
      for (; e === cm; )
        cm = Vf[--If], Vf[If] = null, fm = Vf[--If], Vf[If] = null;
      for (; e === fc; )
        fc = Mi[--Ai], Mi[Ai] = null, Qo = Mi[--Ai], Mi[Ai] = null, Wo = Mi[--Ai], Mi[Ai] = null;
    }
    function zT() {
      return pc(), fc !== null ? {
        id: Wo,
        overflow: Qo
      } : null;
    }
    function UT(e, t) {
      pc(), Mi[Ai++] = Wo, Mi[Ai++] = Qo, Mi[Ai++] = fc, Wo = t.id, Qo = t.overflow, fc = e;
    }
    function pc() {
      Ur() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, zi = null, fl = !1, hc = !1, qu = null;
    function FT() {
      fl && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function w1() {
      hc = !0;
    }
    function jT() {
      return hc;
    }
    function PT(e) {
      var t = e.stateNode.containerInfo;
      return zi = rT(t), zr = e, fl = !0, qu = null, hc = !1, !0;
    }
    function HT(e, t, a) {
      return zi = aT(t), zr = e, fl = !0, qu = null, hc = !1, a !== null && UT(e, a), !0;
    }
    function C1(e, t) {
      switch (e.tag) {
        case I: {
          hT(e.stateNode.containerInfo, t);
          break;
        }
        case K: {
          var a = (e.mode & We) !== Ze;
          mT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case _e: {
          var i = e.memoizedState;
          i.dehydrated !== null && vT(i.dehydrated, t);
          break;
        }
      }
    }
    function x1(e, t) {
      C1(e, t);
      var a = VO();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= zt) : i.push(a);
    }
    function Wg(e, t) {
      {
        if (hc)
          return;
        switch (e.tag) {
          case I: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case K:
                var i = t.type;
                t.pendingProps, yT(a, i);
                break;
              case X:
                var o = t.pendingProps;
                gT(a, o);
                break;
            }
            break;
          }
          case K: {
            var s = e.type, h = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case K: {
                var S = t.type, b = t.pendingProps, T = (e.mode & We) !== Ze;
                wT(
                  s,
                  h,
                  y,
                  S,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case X: {
                var A = t.pendingProps, N = (e.mode & We) !== Ze;
                CT(
                  s,
                  h,
                  y,
                  A,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
            }
            break;
          }
          case _e: {
            var W = e.memoizedState, Q = W.dehydrated;
            if (Q !== null) switch (t.tag) {
              case K:
                var ee = t.type;
                t.pendingProps, ST(Q, ee);
                break;
              case X:
                var Ne = t.pendingProps;
                ET(Q, Ne);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function R1(e, t) {
      t.flags = t.flags & ~Ri | Jt, Wg(e, t);
    }
    function b1(e, t) {
      switch (e.tag) {
        case K: {
          var a = e.type;
          e.pendingProps;
          var i = Xb(t, a);
          return i !== null ? (e.stateNode = i, zr = e, zi = nT(i), !0) : !1;
        }
        case X: {
          var o = e.pendingProps, s = Zb(t, o);
          return s !== null ? (e.stateNode = s, zr = e, zi = null, !0) : !1;
        }
        case _e: {
          var h = Jb(t);
          if (h !== null) {
            var y = {
              dehydrated: h,
              treeContext: zT(),
              retryLane: ka
            };
            e.memoizedState = y;
            var S = IO(h);
            return S.return = e, e.child = S, zr = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Qg(e) {
      return (e.mode & We) !== Ze && (e.flags & dt) === Xe;
    }
    function qg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Gg(e) {
      if (fl) {
        var t = zi;
        if (!t) {
          Qg(e) && (Wg(zr, e), qg()), R1(zr, e), fl = !1, zr = e;
          return;
        }
        var a = t;
        if (!b1(e, t)) {
          Qg(e) && (Wg(zr, e), qg()), t = bp(a);
          var i = zr;
          if (!t || !b1(e, t)) {
            R1(zr, e), fl = !1, zr = e;
            return;
          }
          x1(i, a);
        }
      }
    }
    function BT(e, t, a) {
      var i = e.stateNode, o = !hc, s = iT(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function $T(e) {
      var t = e.stateNode, a = e.memoizedProps, i = lT(t, a, e);
      if (i) {
        var o = zr;
        if (o !== null)
          switch (o.tag) {
            case I: {
              var s = o.stateNode.containerInfo, h = (o.mode & We) !== Ze;
              dT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                h
              );
              break;
            }
            case K: {
              var y = o.type, S = o.memoizedProps, b = o.stateNode, T = (o.mode & We) !== Ze;
              pT(
                y,
                S,
                b,
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
    function VT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      oT(a, e);
    }
    function IT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return uT(a);
    }
    function T1(e) {
      for (var t = e.return; t !== null && t.tag !== K && t.tag !== I && t.tag !== _e; )
        t = t.return;
      zr = t;
    }
    function pm(e) {
      if (e !== zr)
        return !1;
      if (!fl)
        return T1(e), fl = !0, !1;
      if (e.tag !== I && (e.tag !== K || fT(e.type) && !Dg(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (Qg(e))
            k1(e), qg();
          else
            for (; t; )
              x1(e, t), t = bp(t);
      }
      return T1(e), e.tag === _e ? zi = IT(e) : zi = zr ? bp(e.stateNode) : null, !0;
    }
    function YT() {
      return fl && zi !== null;
    }
    function k1(e) {
      for (var t = zi; t; )
        C1(e, t), t = bp(t);
    }
    function Yf() {
      zr = null, zi = null, fl = !1, hc = !1;
    }
    function _1() {
      qu !== null && (CC(qu), qu = null);
    }
    function Ur() {
      return fl;
    }
    function Kg(e) {
      qu === null ? qu = [e] : qu.push(e);
    }
    var WT = v.ReactCurrentBatchConfig, QT = null;
    function qT() {
      return WT.transition;
    }
    var dl = {
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
      var GT = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & kn && (t = a), a = a.return;
        return t;
      }, vc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Op = [], Dp = [], Lp = [], Np = [], Mp = [], Ap = [], mc = /* @__PURE__ */ new Set();
      dl.recordUnsafeLifecycleWarnings = function(e, t) {
        mc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & kn && typeof t.UNSAFE_componentWillMount == "function" && Dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Np.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Mp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillUpdate == "function" && Ap.push(e));
      }, dl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(N) {
          e.add(ct(N) || "Component"), mc.add(N.type);
        }), Op = []);
        var t = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(N) {
          t.add(ct(N) || "Component"), mc.add(N.type);
        }), Dp = []);
        var a = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(N) {
          a.add(ct(N) || "Component"), mc.add(N.type);
        }), Lp = []);
        var i = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(N) {
          i.add(ct(N) || "Component"), mc.add(N.type);
        }), Np = []);
        var o = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(N) {
          o.add(ct(N) || "Component"), mc.add(N.type);
        }), Mp = []);
        var s = /* @__PURE__ */ new Set();
        if (Ap.length > 0 && (Ap.forEach(function(N) {
          s.add(ct(N) || "Component"), mc.add(N.type);
        }), Ap = []), t.size > 0) {
          var h = vc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, h);
        }
        if (i.size > 0) {
          var y = vc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var S = vc(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, S);
        }
        if (e.size > 0) {
          var b = vc(e);
          w(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var T = vc(a);
          w(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (o.size > 0) {
          var A = vc(o);
          w(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
      };
      var hm = /* @__PURE__ */ new Map(), O1 = /* @__PURE__ */ new Set();
      dl.recordLegacyContextWarning = function(e, t) {
        var a = GT(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!O1.has(e.type)) {
          var i = hm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], hm.set(a, i)), i.push(e));
        }
      }, dl.flushLegacyContextWarning = function() {
        hm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ct(s) || "Component"), O1.add(s.type);
            });
            var o = vc(i);
            try {
              Sn(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              cn();
            }
          }
        });
      }, dl.discardPendingWarnings = function() {
        Op = [], Dp = [], Lp = [], Np = [], Mp = [], Ap = [], hm = /* @__PURE__ */ new Map();
      };
    }
    function pl(e, t) {
      if (e && e.defaultProps) {
        var a = Et({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var Xg = Yu(null), Zg;
    Zg = {};
    var vm = null, Wf = null, Jg = null, mm = !1;
    function ym() {
      vm = null, Wf = null, Jg = null, mm = !1;
    }
    function D1() {
      mm = !0;
    }
    function L1() {
      mm = !1;
    }
    function N1(e, t, a) {
      ca(Xg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Zg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Zg;
    }
    function e0(e, t) {
      var a = Xg.current;
      sa(Xg, t), e._currentValue = a;
    }
    function t0(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (zo(i.childLanes, t) ? o !== null && !zo(o.childLanes, t) && (o.childLanes = vt(o.childLanes, t)) : (i.childLanes = vt(i.childLanes, t), o !== null && (o.childLanes = vt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function KT(e, t, a) {
      XT(e, t, a);
    }
    function XT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var h = s.firstContext; h !== null; ) {
            if (h.context === t) {
              if (i.tag === z) {
                var y = Tu(a), S = qo(un, y);
                S.tag = Sm;
                var b = i.updateQueue;
                if (b !== null) {
                  var T = b.shared, A = T.pending;
                  A === null ? S.next = S : (S.next = A.next, A.next = S), T.pending = S;
                }
              }
              i.lanes = vt(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = vt(N.lanes, a)), t0(i.return, a, e), s.lanes = vt(s.lanes, a);
              break;
            }
            h = h.next;
          }
        } else if (i.tag === Ye)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === P) {
          var W = i.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = vt(W.lanes, a);
          var Q = W.alternate;
          Q !== null && (Q.lanes = vt(Q.lanes, a)), t0(W, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var ee = o.sibling;
            if (ee !== null) {
              ee.return = o.return, o = ee;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Qf(e, t) {
      vm = e, Wf = null, Jg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && qp(), a.firstContext = null);
      }
    }
    function ir(e) {
      mm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Jg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Wf === null) {
          if (vm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Wf = a, vm.dependencies = {
            lanes: ne,
            firstContext: a
          };
        } else
          Wf = Wf.next = a;
      }
      return t;
    }
    var yc = null;
    function n0(e) {
      yc === null ? yc = [e] : yc.push(e);
    }
    function ZT() {
      if (yc !== null) {
        for (var e = 0; e < yc.length; e++) {
          var t = yc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        yc = null;
      }
    }
    function M1(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, n0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, gm(e, i);
    }
    function JT(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, n0(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function ek(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, n0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, gm(e, i);
    }
    function Xa(e, t) {
      return gm(e, t);
    }
    var tk = gm;
    function gm(e, t) {
      e.lanes = vt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = vt(a.lanes, t)), a === null && (e.flags & (Jt | Ri)) !== Xe && AC(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = vt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = vt(a.childLanes, t) : (o.flags & (Jt | Ri)) !== Xe && AC(e), i = o, o = o.return;
      if (i.tag === I) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var A1 = 0, z1 = 1, Sm = 2, r0 = 3, Em = !1, a0, wm;
    a0 = !1, wm = null;
    function i0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ne
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function U1(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function qo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: A1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Gu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (wm === o && !a0 && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), a0 = !0), tO()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, tk(e, a);
      } else
        return ek(e, o, t, a);
    }
    function Cm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Kd(a)) {
          var s = o.lanes;
          s = ff(s, e.pendingLanes);
          var h = vt(s, a);
          o.lanes = h, Xd(e, h);
        }
      }
    }
    function l0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, h = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var S = y;
            do {
              var b = {
                eventTime: S.eventTime,
                lane: S.lane,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null
              };
              h === null ? s = h = b : (h.next = b, h = b), S = S.next;
            } while (S !== null);
            h === null ? s = h = t : (h.next = t, h = t);
          } else
            s = h = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: h,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function nk(e, t, a, i, o, s) {
      switch (a.tag) {
        case z1: {
          var h = a.payload;
          if (typeof h == "function") {
            D1();
            var y = h.call(s, i, o);
            {
              if (e.mode & kn) {
                on(!0);
                try {
                  h.call(s, i, o);
                } finally {
                  on(!1);
                }
              }
              L1();
            }
            return y;
          }
          return h;
        }
        case r0:
          e.flags = e.flags & ~cr | dt;
        case A1: {
          var S = a.payload, b;
          if (typeof S == "function") {
            D1(), b = S.call(s, i, o);
            {
              if (e.mode & kn) {
                on(!0);
                try {
                  S.call(s, i, o);
                } finally {
                  on(!1);
                }
              }
              L1();
            }
          } else
            b = S;
          return b == null ? i : Et({}, i, b);
        }
        case Sm:
          return Em = !0, i;
      }
      return i;
    }
    function xm(e, t, a, i) {
      var o = e.updateQueue;
      Em = !1, wm = o.shared;
      var s = o.firstBaseUpdate, h = o.lastBaseUpdate, y = o.shared.pending;
      if (y !== null) {
        o.shared.pending = null;
        var S = y, b = S.next;
        S.next = null, h === null ? s = b : h.next = b, h = S;
        var T = e.alternate;
        if (T !== null) {
          var A = T.updateQueue, N = A.lastBaseUpdate;
          N !== h && (N === null ? A.firstBaseUpdate = b : N.next = b, A.lastBaseUpdate = S);
        }
      }
      if (s !== null) {
        var W = o.baseState, Q = ne, ee = null, Ne = null, Je = null, Qe = s;
        do {
          var Ot = Qe.lane, bt = Qe.eventTime;
          if (zo(i, Ot)) {
            if (Je !== null) {
              var te = {
                eventTime: bt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zn,
                tag: Qe.tag,
                payload: Qe.payload,
                callback: Qe.callback,
                next: null
              };
              Je = Je.next = te;
            }
            W = nk(e, o, Qe, W, t, a);
            var B = Qe.callback;
            if (B !== null && // If the update was already committed, we should not queue its
            // callback again.
            Qe.lane !== zn) {
              e.flags |= tr;
              var he = o.effects;
              he === null ? o.effects = [Qe] : he.push(Qe);
            }
          } else {
            var H = {
              eventTime: bt,
              lane: Ot,
              tag: Qe.tag,
              payload: Qe.payload,
              callback: Qe.callback,
              next: null
            };
            Je === null ? (Ne = Je = H, ee = W) : Je = Je.next = H, Q = vt(Q, Ot);
          }
          if (Qe = Qe.next, Qe === null) {
            if (y = o.shared.pending, y === null)
              break;
            var Me = y, ke = Me.next;
            Me.next = null, Qe = ke, o.lastBaseUpdate = Me, o.shared.pending = null;
          }
        } while (!0);
        Je === null && (ee = W), o.baseState = ee, o.firstBaseUpdate = Ne, o.lastBaseUpdate = Je;
        var ot = o.shared.interleaved;
        if (ot !== null) {
          var ht = ot;
          do
            Q = vt(Q, ht.lane), ht = ht.next;
          while (ht !== ot);
        } else s === null && (o.shared.lanes = ne);
        lh(Q), e.lanes = Q, e.memoizedState = W;
      }
      wm = null;
    }
    function rk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function F1() {
      Em = !1;
    }
    function Rm() {
      return Em;
    }
    function j1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], h = s.callback;
          h !== null && (s.callback = null, rk(h, a));
        }
    }
    var o0 = {}, P1 = new c.Component().refs, u0, s0, c0, f0, d0, H1, bm, p0, h0, v0;
    {
      u0 = /* @__PURE__ */ new Set(), s0 = /* @__PURE__ */ new Set(), c0 = /* @__PURE__ */ new Set(), f0 = /* @__PURE__ */ new Set(), p0 = /* @__PURE__ */ new Set(), d0 = /* @__PURE__ */ new Set(), h0 = /* @__PURE__ */ new Set(), v0 = /* @__PURE__ */ new Set();
      var B1 = /* @__PURE__ */ new Set();
      bm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          B1.has(a) || (B1.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, H1 = function(e, t) {
        if (t === void 0) {
          var a = Lt(e) || "Component";
          d0.has(a) || (d0.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(o0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(o0);
    }
    function m0(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & kn) {
          on(!0);
          try {
            s = a(i, o);
          } finally {
            on(!1);
          }
        }
        H1(t, s);
      }
      var h = s == null ? o : Et({}, o, s);
      if (e.memoizedState = h, e.lanes === ne) {
        var y = e.updateQueue;
        y.baseState = h;
      }
    }
    var y0 = {
      isMounted: ba,
      enqueueSetState: function(e, t, a) {
        var i = xi(e), o = Da(), s = rs(i), h = qo(o, s);
        h.payload = t, a != null && (bm(a, "setState"), h.callback = a);
        var y = Gu(i, h, s);
        y !== null && (Er(y, i, s, o), Cm(y, i, s)), qc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = xi(e), o = Da(), s = rs(i), h = qo(o, s);
        h.tag = z1, h.payload = t, a != null && (bm(a, "replaceState"), h.callback = a);
        var y = Gu(i, h, s);
        y !== null && (Er(y, i, s, o), Cm(y, i, s)), qc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = xi(e), i = Da(), o = rs(a), s = qo(i, o);
        s.tag = Sm, t != null && (bm(t, "forceUpdate"), s.callback = t);
        var h = Gu(a, s, o);
        h !== null && (Er(h, a, o, i), Cm(h, a, o)), Cu(a, o);
      }
    };
    function $1(e, t, a, i, o, s, h) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var S = y.shouldComponentUpdate(i, s, h);
        {
          if (e.mode & kn) {
            on(!0);
            try {
              S = y.shouldComponentUpdate(i, s, h);
            } finally {
              on(!1);
            }
          }
          S === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Lt(t) || "Component");
        }
        return S;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !it(a, i) || !it(o, s) : !0;
    }
    function ak(e, t, a) {
      var i = e.stateNode;
      {
        var o = Lt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !h0.has(t) && (h0.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Lt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var h = i.props !== a;
        i.props !== void 0 && h && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !c0.has(t) && (c0.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Lt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var y = i.state;
        y && (typeof y != "object" || Nt(y)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function V1(e, t) {
      t.updater = y0, e.stateNode = t, Hc(t, e), t._reactInternalInstance = o0;
    }
    function I1(e, t, a) {
      var i = !1, o = pi, s = pi, h = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          h === null || h !== void 0 && h.$$typeof === be && h._context === void 0
        );
        if (!y && !v0.has(t)) {
          v0.add(t);
          var S = "";
          h === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof h != "object" ? S = " However, it is set to a " + typeof h + "." : h.$$typeof === ce ? S = " Did you accidentally pass the Context.Provider instead?" : h._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(h).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Lt(t) || "Component", S);
        }
      }
      if (typeof h == "object" && h !== null)
        s = ir(h);
      else {
        o = Bf(e, t, !0);
        var b = t.contextTypes;
        i = b != null, s = i ? $f(e, o) : pi;
      }
      var T = new t(a, s);
      if (e.mode & kn) {
        on(!0);
        try {
          T = new t(a, s);
        } finally {
          on(!1);
        }
      }
      var A = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      V1(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && A === null) {
          var N = Lt(t) || "Component";
          s0.has(N) || (s0.add(N), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, T.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var W = null, Q = null, ee = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ee = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (ee = "UNSAFE_componentWillUpdate"), W !== null || Q !== null || ee !== null) {
            var Ne = Lt(t) || "Component", Je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            f0.has(Ne) || (f0.add(Ne), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ne, Je, W !== null ? `
  ` + W : "", Q !== null ? `
  ` + Q : "", ee !== null ? `
  ` + ee : ""));
          }
        }
      }
      return i && h1(e, o, s), T;
    }
    function ik(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ct(e) || "Component"), y0.enqueueReplaceState(t, t.state, null));
    }
    function Y1(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = ct(e) || "Component";
          u0.has(s) || (u0.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        y0.enqueueReplaceState(t, t.state, null);
      }
    }
    function g0(e, t, a, i) {
      ak(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = P1, i0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = ir(s);
      else {
        var h = Bf(e, t, !0);
        o.context = $f(e, h);
      }
      {
        if (o.state === a) {
          var y = Lt(t) || "Component";
          p0.has(y) || (p0.add(y), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & kn && dl.recordLegacyContextWarning(e, o), dl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var S = t.getDerivedStateFromProps;
      if (typeof S == "function" && (m0(e, t, S, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (ik(e, o), xm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var b = Ve;
        b |= Ha, (e.mode & Va) !== Ze && (b |= Ba), e.flags |= b;
      }
    }
    function lk(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var h = o.context, y = t.contextType, S = pi;
      if (typeof y == "object" && y !== null)
        S = ir(y);
      else {
        var b = Bf(e, t, !0);
        S = $f(e, b);
      }
      var T = t.getDerivedStateFromProps, A = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !A && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || h !== S) && Y1(e, o, a, S), F1();
      var N = e.memoizedState, W = o.state = N;
      if (xm(e, a, o, i), W = e.memoizedState, s === a && N === W && !lm() && !Rm()) {
        if (typeof o.componentDidMount == "function") {
          var Q = Ve;
          Q |= Ha, (e.mode & Va) !== Ze && (Q |= Ba), e.flags |= Q;
        }
        return !1;
      }
      typeof T == "function" && (m0(e, t, T, a), W = e.memoizedState);
      var ee = Rm() || $1(e, t, s, a, N, W, S);
      if (ee) {
        if (!A && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Ne = Ve;
          Ne |= Ha, (e.mode & Va) !== Ze && (Ne |= Ba), e.flags |= Ne;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Je = Ve;
          Je |= Ha, (e.mode & Va) !== Ze && (Je |= Ba), e.flags |= Je;
        }
        e.memoizedProps = a, e.memoizedState = W;
      }
      return o.props = a, o.state = W, o.context = S, ee;
    }
    function ok(e, t, a, i, o) {
      var s = t.stateNode;
      U1(e, t);
      var h = t.memoizedProps, y = t.type === t.elementType ? h : pl(t.type, h);
      s.props = y;
      var S = t.pendingProps, b = s.context, T = a.contextType, A = pi;
      if (typeof T == "object" && T !== null)
        A = ir(T);
      else {
        var N = Bf(t, a, !0);
        A = $f(t, N);
      }
      var W = a.getDerivedStateFromProps, Q = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Q && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (h !== S || b !== A) && Y1(t, s, i, A), F1();
      var ee = t.memoizedState, Ne = s.state = ee;
      if (xm(t, i, s, o), Ne = t.memoizedState, h === S && ee === Ne && !lm() && !Rm() && !k)
        return typeof s.componentDidUpdate == "function" && (h !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Ve), typeof s.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Vn), !1;
      typeof W == "function" && (m0(t, a, W, i), Ne = t.memoizedState);
      var Je = Rm() || $1(t, a, y, i, ee, Ne, A) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      k;
      return Je ? (!Q && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ne, A), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ne, A)), typeof s.componentDidUpdate == "function" && (t.flags |= Ve), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Vn)) : (typeof s.componentDidUpdate == "function" && (h !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Ve), typeof s.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Vn), t.memoizedProps = i, t.memoizedState = Ne), s.props = i, s.state = Ne, s.context = A, Je;
    }
    var S0, E0, w0, C0, x0, W1 = function(e, t) {
    };
    S0 = !1, E0 = !1, w0 = {}, C0 = {}, x0 = {}, W1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ct(t) || "Component";
        C0[a] || (C0[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function zp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & kn || at) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = ct(e) || "Component";
          w0[o] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), w0[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, h;
          if (s) {
            var y = s;
            if (y.tag !== z)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            h = y.stateNode;
          }
          if (!h)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var S = h;
          qn(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var T = function(A) {
            var N = S.refs;
            N === P1 && (N = S.refs = {}), A === null ? delete N[b] : N[b] = A;
          };
          return T._stringRef = b, T;
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
    function Tm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function km(e) {
      {
        var t = ct(e) || "Component";
        if (x0[t])
          return;
        x0[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Q1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function q1(e) {
      function t(H, te) {
        if (e) {
          var B = H.deletions;
          B === null ? (H.deletions = [te], H.flags |= zt) : B.push(te);
        }
      }
      function a(H, te) {
        if (!e)
          return null;
        for (var B = te; B !== null; )
          t(H, B), B = B.sibling;
        return null;
      }
      function i(H, te) {
        for (var B = /* @__PURE__ */ new Map(), he = te; he !== null; )
          he.key !== null ? B.set(he.key, he) : B.set(he.index, he), he = he.sibling;
        return B;
      }
      function o(H, te) {
        var B = bc(H, te);
        return B.index = 0, B.sibling = null, B;
      }
      function s(H, te, B) {
        if (H.index = B, !e)
          return H.flags |= av, te;
        var he = H.alternate;
        if (he !== null) {
          var Me = he.index;
          return Me < te ? (H.flags |= Jt, te) : Me;
        } else
          return H.flags |= Jt, te;
      }
      function h(H) {
        return e && H.alternate === null && (H.flags |= Jt), H;
      }
      function y(H, te, B, he) {
        if (te === null || te.tag !== X) {
          var Me = KS(B, H.mode, he);
          return Me.return = H, Me;
        } else {
          var ke = o(te, B);
          return ke.return = H, ke;
        }
      }
      function S(H, te, B, he) {
        var Me = B.type;
        if (Me === Ea)
          return T(H, te, B.props.children, he, B.key);
        if (te !== null && (te.elementType === Me || // Keep this check inline so it only runs on the false path:
        jC(te, B) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Me == "object" && Me !== null && Me.$$typeof === Ke && Q1(Me) === te.type)) {
          var ke = o(te, B.props);
          return ke.ref = zp(H, te, B), ke.return = H, ke._debugSource = B._source, ke._debugOwner = B._owner, ke;
        }
        var ot = GS(B, H.mode, he);
        return ot.ref = zp(H, te, B), ot.return = H, ot;
      }
      function b(H, te, B, he) {
        if (te === null || te.tag !== oe || te.stateNode.containerInfo !== B.containerInfo || te.stateNode.implementation !== B.implementation) {
          var Me = XS(B, H.mode, he);
          return Me.return = H, Me;
        } else {
          var ke = o(te, B.children || []);
          return ke.return = H, ke;
        }
      }
      function T(H, te, B, he, Me) {
        if (te === null || te.tag !== Ce) {
          var ke = is(B, H.mode, he, Me);
          return ke.return = H, ke;
        } else {
          var ot = o(te, B);
          return ot.return = H, ot;
        }
      }
      function A(H, te, B) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var he = KS("" + te, H.mode, B);
          return he.return = H, he;
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case Wr: {
              var Me = GS(te, H.mode, B);
              return Me.ref = zp(H, null, te), Me.return = H, Me;
            }
            case Qr: {
              var ke = XS(te, H.mode, B);
              return ke.return = H, ke;
            }
            case Ke: {
              var ot = te._payload, ht = te._init;
              return A(H, ht(ot), B);
            }
          }
          if (Nt(te) || gi(te)) {
            var Xt = is(te, H.mode, B, null);
            return Xt.return = H, Xt;
          }
          Tm(H, te);
        }
        return typeof te == "function" && km(H), null;
      }
      function N(H, te, B, he) {
        var Me = te !== null ? te.key : null;
        if (typeof B == "string" && B !== "" || typeof B == "number")
          return Me !== null ? null : y(H, te, "" + B, he);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Wr:
              return B.key === Me ? S(H, te, B, he) : null;
            case Qr:
              return B.key === Me ? b(H, te, B, he) : null;
            case Ke: {
              var ke = B._payload, ot = B._init;
              return N(H, te, ot(ke), he);
            }
          }
          if (Nt(B) || gi(B))
            return Me !== null ? null : T(H, te, B, he, null);
          Tm(H, B);
        }
        return typeof B == "function" && km(H), null;
      }
      function W(H, te, B, he, Me) {
        if (typeof he == "string" && he !== "" || typeof he == "number") {
          var ke = H.get(B) || null;
          return y(te, ke, "" + he, Me);
        }
        if (typeof he == "object" && he !== null) {
          switch (he.$$typeof) {
            case Wr: {
              var ot = H.get(he.key === null ? B : he.key) || null;
              return S(te, ot, he, Me);
            }
            case Qr: {
              var ht = H.get(he.key === null ? B : he.key) || null;
              return b(te, ht, he, Me);
            }
            case Ke:
              var Xt = he._payload, Ft = he._init;
              return W(H, te, B, Ft(Xt), Me);
          }
          if (Nt(he) || gi(he)) {
            var Jn = H.get(B) || null;
            return T(te, Jn, he, Me, null);
          }
          Tm(te, he);
        }
        return typeof he == "function" && km(te), null;
      }
      function Q(H, te, B) {
        {
          if (typeof H != "object" || H === null)
            return te;
          switch (H.$$typeof) {
            case Wr:
            case Qr:
              W1(H, B);
              var he = H.key;
              if (typeof he != "string")
                break;
              if (te === null) {
                te = /* @__PURE__ */ new Set(), te.add(he);
                break;
              }
              if (!te.has(he)) {
                te.add(he);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", he);
              break;
            case Ke:
              var Me = H._payload, ke = H._init;
              Q(ke(Me), te, B);
              break;
          }
        }
        return te;
      }
      function ee(H, te, B, he) {
        for (var Me = null, ke = 0; ke < B.length; ke++) {
          var ot = B[ke];
          Me = Q(ot, Me, H);
        }
        for (var ht = null, Xt = null, Ft = te, Jn = 0, jt = 0, Yn = null; Ft !== null && jt < B.length; jt++) {
          Ft.index > jt ? (Yn = Ft, Ft = null) : Yn = Ft.sibling;
          var da = N(H, Ft, B[jt], he);
          if (da === null) {
            Ft === null && (Ft = Yn);
            break;
          }
          e && Ft && da.alternate === null && t(H, Ft), Jn = s(da, Jn, jt), Xt === null ? ht = da : Xt.sibling = da, Xt = da, Ft = Yn;
        }
        if (jt === B.length) {
          if (a(H, Ft), Ur()) {
            var Vr = jt;
            dc(H, Vr);
          }
          return ht;
        }
        if (Ft === null) {
          for (; jt < B.length; jt++) {
            var vi = A(H, B[jt], he);
            vi !== null && (Jn = s(vi, Jn, jt), Xt === null ? ht = vi : Xt.sibling = vi, Xt = vi);
          }
          if (Ur()) {
            var La = jt;
            dc(H, La);
          }
          return ht;
        }
        for (var Na = i(H, Ft); jt < B.length; jt++) {
          var pa = W(Na, H, jt, B[jt], he);
          pa !== null && (e && pa.alternate !== null && Na.delete(pa.key === null ? jt : pa.key), Jn = s(pa, Jn, jt), Xt === null ? ht = pa : Xt.sibling = pa, Xt = pa);
        }
        if (e && Na.forEach(function(cd) {
          return t(H, cd);
        }), Ur()) {
          var eu = jt;
          dc(H, eu);
        }
        return ht;
      }
      function Ne(H, te, B, he) {
        var Me = gi(B);
        if (typeof Me != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          B[Symbol.toStringTag] === "Generator" && (E0 || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), E0 = !0), B.entries === Me && (S0 || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), S0 = !0);
          var ke = Me.call(B);
          if (ke)
            for (var ot = null, ht = ke.next(); !ht.done; ht = ke.next()) {
              var Xt = ht.value;
              ot = Q(Xt, ot, H);
            }
        }
        var Ft = Me.call(B);
        if (Ft == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, jt = null, Yn = te, da = 0, Vr = 0, vi = null, La = Ft.next(); Yn !== null && !La.done; Vr++, La = Ft.next()) {
          Yn.index > Vr ? (vi = Yn, Yn = null) : vi = Yn.sibling;
          var Na = N(H, Yn, La.value, he);
          if (Na === null) {
            Yn === null && (Yn = vi);
            break;
          }
          e && Yn && Na.alternate === null && t(H, Yn), da = s(Na, da, Vr), jt === null ? Jn = Na : jt.sibling = Na, jt = Na, Yn = vi;
        }
        if (La.done) {
          if (a(H, Yn), Ur()) {
            var pa = Vr;
            dc(H, pa);
          }
          return Jn;
        }
        if (Yn === null) {
          for (; !La.done; Vr++, La = Ft.next()) {
            var eu = A(H, La.value, he);
            eu !== null && (da = s(eu, da, Vr), jt === null ? Jn = eu : jt.sibling = eu, jt = eu);
          }
          if (Ur()) {
            var cd = Vr;
            dc(H, cd);
          }
          return Jn;
        }
        for (var fh = i(H, Yn); !La.done; Vr++, La = Ft.next()) {
          var io = W(fh, H, Vr, La.value, he);
          io !== null && (e && io.alternate !== null && fh.delete(io.key === null ? Vr : io.key), da = s(io, da, Vr), jt === null ? Jn = io : jt.sibling = io, jt = io);
        }
        if (e && fh.forEach(function(wD) {
          return t(H, wD);
        }), Ur()) {
          var ED = Vr;
          dc(H, ED);
        }
        return Jn;
      }
      function Je(H, te, B, he) {
        if (te !== null && te.tag === X) {
          a(H, te.sibling);
          var Me = o(te, B);
          return Me.return = H, Me;
        }
        a(H, te);
        var ke = KS(B, H.mode, he);
        return ke.return = H, ke;
      }
      function Qe(H, te, B, he) {
        for (var Me = B.key, ke = te; ke !== null; ) {
          if (ke.key === Me) {
            var ot = B.type;
            if (ot === Ea) {
              if (ke.tag === Ce) {
                a(H, ke.sibling);
                var ht = o(ke, B.props.children);
                return ht.return = H, ht._debugSource = B._source, ht._debugOwner = B._owner, ht;
              }
            } else if (ke.elementType === ot || // Keep this check inline so it only runs on the false path:
            jC(ke, B) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ot == "object" && ot !== null && ot.$$typeof === Ke && Q1(ot) === ke.type) {
              a(H, ke.sibling);
              var Xt = o(ke, B.props);
              return Xt.ref = zp(H, ke, B), Xt.return = H, Xt._debugSource = B._source, Xt._debugOwner = B._owner, Xt;
            }
            a(H, ke);
            break;
          } else
            t(H, ke);
          ke = ke.sibling;
        }
        if (B.type === Ea) {
          var Ft = is(B.props.children, H.mode, he, B.key);
          return Ft.return = H, Ft;
        } else {
          var Jn = GS(B, H.mode, he);
          return Jn.ref = zp(H, te, B), Jn.return = H, Jn;
        }
      }
      function Ot(H, te, B, he) {
        for (var Me = B.key, ke = te; ke !== null; ) {
          if (ke.key === Me)
            if (ke.tag === oe && ke.stateNode.containerInfo === B.containerInfo && ke.stateNode.implementation === B.implementation) {
              a(H, ke.sibling);
              var ot = o(ke, B.children || []);
              return ot.return = H, ot;
            } else {
              a(H, ke);
              break;
            }
          else
            t(H, ke);
          ke = ke.sibling;
        }
        var ht = XS(B, H.mode, he);
        return ht.return = H, ht;
      }
      function bt(H, te, B, he) {
        var Me = typeof B == "object" && B !== null && B.type === Ea && B.key === null;
        if (Me && (B = B.props.children), typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Wr:
              return h(Qe(H, te, B, he));
            case Qr:
              return h(Ot(H, te, B, he));
            case Ke:
              var ke = B._payload, ot = B._init;
              return bt(H, te, ot(ke), he);
          }
          if (Nt(B))
            return ee(H, te, B, he);
          if (gi(B))
            return Ne(H, te, B, he);
          Tm(H, B);
        }
        return typeof B == "string" && B !== "" || typeof B == "number" ? h(Je(H, te, "" + B, he)) : (typeof B == "function" && km(H), a(H, te));
      }
      return bt;
    }
    var qf = q1(!0), G1 = q1(!1);
    function uk(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = bc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = bc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function sk(e, t) {
      for (var a = e.child; a !== null; )
        jO(a, t), a = a.sibling;
    }
    var Up = {}, Ku = Yu(Up), Fp = Yu(Up), _m = Yu(Up);
    function Om(e) {
      if (e === Up)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function K1() {
      var e = Om(_m.current);
      return e;
    }
    function R0(e, t) {
      ca(_m, t, e), ca(Fp, e, e), ca(Ku, Up, e);
      var a = xb(t);
      sa(Ku, e), ca(Ku, a, e);
    }
    function Gf(e) {
      sa(Ku, e), sa(Fp, e), sa(_m, e);
    }
    function b0() {
      var e = Om(Ku.current);
      return e;
    }
    function X1(e) {
      Om(_m.current);
      var t = Om(Ku.current), a = Rb(t, e.type);
      t !== a && (ca(Fp, e, e), ca(Ku, a, e));
    }
    function T0(e) {
      Fp.current === e && (sa(Ku, e), sa(Fp, e));
    }
    var ck = 0, Z1 = 1, J1 = 1, jp = 2, hl = Yu(ck);
    function k0(e, t) {
      return (e & t) !== 0;
    }
    function Kf(e) {
      return e & Z1;
    }
    function _0(e, t) {
      return e & Z1 | t;
    }
    function fk(e, t) {
      return e | t;
    }
    function Xu(e, t) {
      ca(hl, t, e);
    }
    function Xf(e) {
      sa(hl, e);
    }
    function dk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Dm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === _e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || s1(i) || Ag(i))
              return t;
          }
        } else if (t.tag === re && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & dt) !== Xe;
          if (o)
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
    var Za = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), Zl = (
      /*  */
      2
    ), hr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), O0 = [];
    function D0() {
      for (var e = 0; e < O0.length; e++) {
        var t = O0[e];
        t._workInProgressVersionPrimary = null;
      }
      O0.length = 0;
    }
    function pk(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var De = v.ReactCurrentDispatcher, Pp = v.ReactCurrentBatchConfig, L0, Zf;
    L0 = /* @__PURE__ */ new Set();
    var gc = ne, Kt = null, vr = null, mr = null, Lm = !1, Hp = !1, Bp = 0, hk = 0, vk = 25, ae = null, Ui = null, Zu = -1, N0 = !1;
    function It() {
      {
        var e = ae;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function we() {
      {
        var e = ae;
        Ui !== null && (Zu++, Ui[Zu] !== e && mk(e));
      }
    }
    function Jf(e) {
      e != null && !Nt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof e);
    }
    function mk(e) {
      {
        var t = ct(Kt);
        if (!L0.has(t) && (L0.add(t), Ui !== null)) {
          for (var a = "", i = 30, o = 0; o <= Zu; o++) {
            for (var s = Ui[o], h = o === Zu ? e : s, y = o + 1 + ". " + s; y.length < i; )
              y += " ";
            y += h + `
`, a += y;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function fa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function M0(e, t) {
      if (N0)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ae), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ae, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Fe(e[a], t[a]))
          return !1;
      return !0;
    }
    function ed(e, t, a, i, o, s) {
      gc = s, Kt = t, Ui = e !== null ? e._debugHookTypes : null, Zu = -1, N0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ne, e !== null && e.memoizedState !== null ? De.current = ww : Ui !== null ? De.current = Ew : De.current = Sw;
      var h = a(i, o);
      if (Hp) {
        var y = 0;
        do {
          if (Hp = !1, Bp = 0, y >= vk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, N0 = !1, vr = null, mr = null, t.updateQueue = null, Zu = -1, De.current = Cw, h = a(i, o);
        } while (Hp);
      }
      De.current = Im, t._debugHookTypes = Ui;
      var S = vr !== null && vr.next !== null;
      if (gc = ne, Kt = null, vr = null, mr = null, ae = null, Ui = null, Zu = -1, e !== null && (e.flags & fr) !== (t.flags & fr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & We) !== Ze && g("Internal React error: Expected static flag was missing. Please notify the React team."), Lm = !1, S)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return h;
    }
    function td() {
      var e = Bp !== 0;
      return Bp = 0, e;
    }
    function ew(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Va) !== Ze ? t.flags &= ~(bo | Ba | Jr | Ve) : t.flags &= ~(Jr | Ve), e.lanes = Gs(e.lanes, a);
    }
    function tw() {
      if (De.current = Im, Lm) {
        for (var e = Kt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Lm = !1;
      }
      gc = ne, Kt = null, vr = null, mr = null, Ui = null, Zu = -1, ae = null, hw = !1, Hp = !1, Bp = 0;
    }
    function Jl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? Kt.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function Fi() {
      var e;
      if (vr === null) {
        var t = Kt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = vr.next;
      var a;
      if (mr === null ? a = Kt.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, vr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        vr = e;
        var i = {
          memoizedState: vr.memoizedState,
          baseState: vr.baseState,
          baseQueue: vr.baseQueue,
          queue: vr.queue,
          next: null
        };
        mr === null ? Kt.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function nw() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function A0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function z0(e, t, a) {
      var i = Jl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ne,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var h = s.dispatch = Ek.bind(null, Kt, s);
      return [i.memoizedState, h];
    }
    function U0(e, t, a) {
      var i = Fi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = vr, h = s.baseQueue, y = o.pending;
      if (y !== null) {
        if (h !== null) {
          var S = h.next, b = y.next;
          h.next = b, y.next = S;
        }
        s.baseQueue !== h && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = h = y, o.pending = null;
      }
      if (h !== null) {
        var T = h.next, A = s.baseState, N = null, W = null, Q = null, ee = T;
        do {
          var Ne = ee.lane;
          if (zo(gc, Ne)) {
            if (Q !== null) {
              var Qe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zn,
                action: ee.action,
                hasEagerState: ee.hasEagerState,
                eagerState: ee.eagerState,
                next: null
              };
              Q = Q.next = Qe;
            }
            if (ee.hasEagerState)
              A = ee.eagerState;
            else {
              var Ot = ee.action;
              A = e(A, Ot);
            }
          } else {
            var Je = {
              lane: Ne,
              action: ee.action,
              hasEagerState: ee.hasEagerState,
              eagerState: ee.eagerState,
              next: null
            };
            Q === null ? (W = Q = Je, N = A) : Q = Q.next = Je, Kt.lanes = vt(Kt.lanes, Ne), lh(Ne);
          }
          ee = ee.next;
        } while (ee !== null && ee !== T);
        Q === null ? N = A : Q.next = W, Fe(A, i.memoizedState) || qp(), i.memoizedState = A, i.baseState = N, i.baseQueue = Q, o.lastRenderedState = A;
      }
      var bt = o.interleaved;
      if (bt !== null) {
        var H = bt;
        do {
          var te = H.lane;
          Kt.lanes = vt(Kt.lanes, te), lh(te), H = H.next;
        } while (H !== bt);
      } else h === null && (o.lanes = ne);
      var B = o.dispatch;
      return [i.memoizedState, B];
    }
    function F0(e, t, a) {
      var i = Fi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, h = o.pending, y = i.memoizedState;
      if (h !== null) {
        o.pending = null;
        var S = h.next, b = S;
        do {
          var T = b.action;
          y = e(y, T), b = b.next;
        } while (b !== S);
        Fe(y, i.memoizedState) || qp(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), o.lastRenderedState = y;
      }
      return [y, s];
    }
    function EM(e, t, a) {
    }
    function wM(e, t, a) {
    }
    function j0(e, t, a) {
      var i = Kt, o = Jl(), s, h = Ur();
      if (h) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Zf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      } else {
        if (s = t(), !Zf) {
          var y = t();
          Fe(s, y) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
        }
        var S = uy();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        qs(S, gc) || rw(i, t, s);
      }
      o.memoizedState = s;
      var b = {
        value: s,
        getSnapshot: t
      };
      return o.queue = b, Um(iw.bind(null, i, b, e), [e]), i.flags |= Jr, $p(pr | Fr, aw.bind(null, i, b, s, t), void 0, null), s;
    }
    function Nm(e, t, a) {
      var i = Kt, o = Fi(), s = t();
      if (!Zf) {
        var h = t();
        Fe(s, h) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      }
      var y = o.memoizedState, S = !Fe(y, s);
      S && (o.memoizedState = s, qp());
      var b = o.queue;
      if (Ip(iw.bind(null, i, b, e), [e]), b.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= Jr, $p(pr | Fr, aw.bind(null, i, b, s, t), void 0, null);
        var T = uy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        qs(T, gc) || rw(i, t, s);
      }
      return s;
    }
    function rw(e, t, a) {
      e.flags |= Ro;
      var i = {
        getSnapshot: t,
        value: a
      }, o = Kt.updateQueue;
      if (o === null)
        o = nw(), Kt.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function aw(e, t, a, i) {
      t.value = a, t.getSnapshot = i, lw(t) && ow(e);
    }
    function iw(e, t, a) {
      var i = function() {
        lw(t) && ow(e);
      };
      return a(i);
    }
    function lw(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Fe(a, i);
      } catch {
        return !0;
      }
    }
    function ow(e) {
      var t = Xa(e, tt);
      t !== null && Er(t, e, tt, un);
    }
    function Mm(e) {
      var t = Jl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ne,
        dispatch: null,
        lastRenderedReducer: A0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = wk.bind(null, Kt, a);
      return [t.memoizedState, i];
    }
    function P0(e) {
      return U0(A0);
    }
    function H0(e) {
      return F0(A0);
    }
    function $p(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Kt.updateQueue;
      if (s === null)
        s = nw(), Kt.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var h = s.lastEffect;
        if (h === null)
          s.lastEffect = o.next = o;
        else {
          var y = h.next;
          h.next = o, o.next = y, s.lastEffect = o;
        }
      }
      return o;
    }
    function B0(e) {
      var t = Jl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Am(e) {
      var t = Fi();
      return t.memoizedState;
    }
    function Vp(e, t, a, i) {
      var o = Jl(), s = i === void 0 ? null : i;
      Kt.flags |= e, o.memoizedState = $p(pr | t, a, void 0, s);
    }
    function zm(e, t, a, i) {
      var o = Fi(), s = i === void 0 ? null : i, h = void 0;
      if (vr !== null) {
        var y = vr.memoizedState;
        if (h = y.destroy, s !== null) {
          var S = y.deps;
          if (M0(s, S)) {
            o.memoizedState = $p(t, a, h, s);
            return;
          }
        }
      }
      Kt.flags |= e, o.memoizedState = $p(pr | t, a, h, s);
    }
    function Um(e, t) {
      return (Kt.mode & Va) !== Ze ? Vp(bo | Jr | Ul, Fr, e, t) : Vp(Jr | Ul, Fr, e, t);
    }
    function Ip(e, t) {
      return zm(Jr, Fr, e, t);
    }
    function $0(e, t) {
      return Vp(Ve, Zl, e, t);
    }
    function Fm(e, t) {
      return zm(Ve, Zl, e, t);
    }
    function V0(e, t) {
      var a = Ve;
      return a |= Ha, (Kt.mode & Va) !== Ze && (a |= Ba), Vp(a, hr, e, t);
    }
    function jm(e, t) {
      return zm(Ve, hr, e, t);
    }
    function uw(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function I0(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Ve;
      return o |= Ha, (Kt.mode & Va) !== Ze && (o |= Ba), Vp(o, hr, uw.bind(null, t, e), i);
    }
    function Pm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return zm(Ve, hr, uw.bind(null, t, e), i);
    }
    function yk(e, t) {
    }
    var Hm = yk;
    function Y0(e, t) {
      var a = Jl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Bm(e, t) {
      var a = Fi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (M0(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function W0(e, t) {
      var a = Jl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function $m(e, t) {
      var a = Fi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (M0(i, s))
          return o[0];
      }
      var h = e();
      return a.memoizedState = [h, i], h;
    }
    function Q0(e) {
      var t = Jl();
      return t.memoizedState = e, e;
    }
    function sw(e) {
      var t = Fi(), a = vr, i = a.memoizedState;
      return fw(t, i, e);
    }
    function cw(e) {
      var t = Fi();
      if (vr === null)
        return t.memoizedState = e, e;
      var a = vr.memoizedState;
      return fw(t, a, e);
    }
    function fw(e, t, a) {
      var i = !yv(gc);
      if (i) {
        if (!Fe(a, t)) {
          var o = Ev();
          Kt.lanes = vt(Kt.lanes, o), lh(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, qp()), e.memoizedState = a, a;
    }
    function gk(e, t, a) {
      var i = Ya();
      On(tg(i, ll)), e(!0);
      var o = Pp.transition;
      Pp.transition = {};
      var s = Pp.transition;
      Pp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (On(i), Pp.transition = o, o === null && s._updatedFibers) {
          var h = s._updatedFibers.size;
          h > 10 && w("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function q0() {
      var e = Mm(!1), t = e[0], a = e[1], i = gk.bind(null, a), o = Jl();
      return o.memoizedState = i, [t, i];
    }
    function dw() {
      var e = P0(), t = e[0], a = Fi(), i = a.memoizedState;
      return [t, i];
    }
    function pw() {
      var e = H0(), t = e[0], a = Fi(), i = a.memoizedState;
      return [t, i];
    }
    var hw = !1;
    function Sk() {
      return hw;
    }
    function G0() {
      var e = Jl(), t = uy(), a = t.identifierPrefix, i;
      if (Ur()) {
        var o = MT();
        i = ":" + a + "R" + o;
        var s = Bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var h = hk++;
        i = ":" + a + "r" + h.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Vm() {
      var e = Fi(), t = e.memoizedState;
      return t;
    }
    function Ek(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = rs(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (vw(e))
        mw(t, o);
      else {
        var s = M1(e, t, o, i);
        if (s !== null) {
          var h = Da();
          Er(s, e, i, h), yw(s, t, i);
        }
      }
      gw(e, i);
    }
    function wk(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = rs(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (vw(e))
        mw(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === ne && (s === null || s.lanes === ne)) {
          var h = t.lastRenderedReducer;
          if (h !== null) {
            var y;
            y = De.current, De.current = vl;
            try {
              var S = t.lastRenderedState, b = h(S, a);
              if (o.hasEagerState = !0, o.eagerState = b, Fe(b, S)) {
                JT(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              De.current = y;
            }
          }
        }
        var T = M1(e, t, o, i);
        if (T !== null) {
          var A = Da();
          Er(T, e, i, A), yw(T, t, i);
        }
      }
      gw(e, i);
    }
    function vw(e) {
      var t = e.alternate;
      return e === Kt || t !== null && t === Kt;
    }
    function mw(e, t) {
      Hp = Lm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function yw(e, t, a) {
      if (Kd(a)) {
        var i = t.lanes;
        i = ff(i, e.pendingLanes);
        var o = vt(i, a);
        t.lanes = o, Xd(e, o);
      }
    }
    function gw(e, t, a) {
      qc(e, t);
    }
    var Im = {
      readContext: ir,
      useCallback: fa,
      useContext: fa,
      useEffect: fa,
      useImperativeHandle: fa,
      useInsertionEffect: fa,
      useLayoutEffect: fa,
      useMemo: fa,
      useReducer: fa,
      useRef: fa,
      useState: fa,
      useDebugValue: fa,
      useDeferredValue: fa,
      useTransition: fa,
      useMutableSource: fa,
      useSyncExternalStore: fa,
      useId: fa,
      unstable_isNewReconciler: se
    }, Sw = null, Ew = null, ww = null, Cw = null, eo = null, vl = null, Ym = null;
    {
      var K0 = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, pt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Sw = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", It(), Jf(t), Y0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", It(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", It(), Jf(t), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", It(), Jf(a), I0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", It(), Jf(t), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", It(), Jf(t), V0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", It(), Jf(t);
          var a = De.current;
          De.current = eo;
          try {
            return W0(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", It();
          var i = De.current;
          De.current = eo;
          try {
            return z0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", It(), B0(e);
        },
        useState: function(e) {
          ae = "useState", It();
          var t = De.current;
          De.current = eo;
          try {
            return Mm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", It(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", It(), Q0(e);
        },
        useTransition: function() {
          return ae = "useTransition", It(), q0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", It(), j0(e, t, a);
        },
        useId: function() {
          return ae = "useId", It(), G0();
        },
        unstable_isNewReconciler: se
      }, Ew = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", we(), Y0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", we(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", we(), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", we(), I0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", we(), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", we(), V0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", we();
          var a = De.current;
          De.current = eo;
          try {
            return W0(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", we();
          var i = De.current;
          De.current = eo;
          try {
            return z0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", we(), B0(e);
        },
        useState: function(e) {
          ae = "useState", we();
          var t = De.current;
          De.current = eo;
          try {
            return Mm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", we(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", we(), Q0(e);
        },
        useTransition: function() {
          return ae = "useTransition", we(), q0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", we(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", we(), j0(e, t, a);
        },
        useId: function() {
          return ae = "useId", we(), G0();
        },
        unstable_isNewReconciler: se
      }, ww = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", we(), Bm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", we(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", we(), Ip(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", we(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", we(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", we(), jm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", we();
          var a = De.current;
          De.current = vl;
          try {
            return $m(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", we();
          var i = De.current;
          De.current = vl;
          try {
            return U0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", we(), Am();
        },
        useState: function(e) {
          ae = "useState", we();
          var t = De.current;
          De.current = vl;
          try {
            return P0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", we(), Hm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", we(), sw(e);
        },
        useTransition: function() {
          return ae = "useTransition", we(), dw();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", we(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", we(), Nm(e, t);
        },
        useId: function() {
          return ae = "useId", we(), Vm();
        },
        unstable_isNewReconciler: se
      }, Cw = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", we(), Bm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", we(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", we(), Ip(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", we(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", we(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", we(), jm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", we();
          var a = De.current;
          De.current = Ym;
          try {
            return $m(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", we();
          var i = De.current;
          De.current = Ym;
          try {
            return F0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", we(), Am();
        },
        useState: function(e) {
          ae = "useState", we();
          var t = De.current;
          De.current = Ym;
          try {
            return H0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", we(), Hm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", we(), cw(e);
        },
        useTransition: function() {
          return ae = "useTransition", we(), pw();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", we(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", we(), Nm(e, t);
        },
        useId: function() {
          return ae = "useId", we(), Vm();
        },
        unstable_isNewReconciler: se
      }, eo = {
        readContext: function(e) {
          return K0(), ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", pt(), It(), Y0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", pt(), It(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", pt(), It(), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", pt(), It(), I0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", pt(), It(), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", pt(), It(), V0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", pt(), It();
          var a = De.current;
          De.current = eo;
          try {
            return W0(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", pt(), It();
          var i = De.current;
          De.current = eo;
          try {
            return z0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", pt(), It(), B0(e);
        },
        useState: function(e) {
          ae = "useState", pt(), It();
          var t = De.current;
          De.current = eo;
          try {
            return Mm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", pt(), It(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", pt(), It(), Q0(e);
        },
        useTransition: function() {
          return ae = "useTransition", pt(), It(), q0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", pt(), It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", pt(), It(), j0(e, t, a);
        },
        useId: function() {
          return ae = "useId", pt(), It(), G0();
        },
        unstable_isNewReconciler: se
      }, vl = {
        readContext: function(e) {
          return K0(), ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", pt(), we(), Bm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", pt(), we(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", pt(), we(), Ip(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", pt(), we(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", pt(), we(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", pt(), we(), jm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", pt(), we();
          var a = De.current;
          De.current = vl;
          try {
            return $m(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", pt(), we();
          var i = De.current;
          De.current = vl;
          try {
            return U0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", pt(), we(), Am();
        },
        useState: function(e) {
          ae = "useState", pt(), we();
          var t = De.current;
          De.current = vl;
          try {
            return P0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", pt(), we(), Hm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", pt(), we(), sw(e);
        },
        useTransition: function() {
          return ae = "useTransition", pt(), we(), dw();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", pt(), we(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", pt(), we(), Nm(e, t);
        },
        useId: function() {
          return ae = "useId", pt(), we(), Vm();
        },
        unstable_isNewReconciler: se
      }, Ym = {
        readContext: function(e) {
          return K0(), ir(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", pt(), we(), Bm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", pt(), we(), ir(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", pt(), we(), Ip(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", pt(), we(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", pt(), we(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", pt(), we(), jm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", pt(), we();
          var a = De.current;
          De.current = vl;
          try {
            return $m(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", pt(), we();
          var i = De.current;
          De.current = vl;
          try {
            return F0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", pt(), we(), Am();
        },
        useState: function(e) {
          ae = "useState", pt(), we();
          var t = De.current;
          De.current = vl;
          try {
            return H0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", pt(), we(), Hm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", pt(), we(), cw(e);
        },
        useTransition: function() {
          return ae = "useTransition", pt(), we(), pw();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", pt(), we(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", pt(), we(), Nm(e, t);
        },
        useId: function() {
          return ae = "useId", pt(), we(), Vm();
        },
        unstable_isNewReconciler: se
      };
    }
    var Ju = f.unstable_now, xw = 0, Wm = -1, Yp = -1, Qm = -1, X0 = !1, qm = !1;
    function Rw() {
      return X0;
    }
    function Ck() {
      qm = !0;
    }
    function xk() {
      X0 = !1, qm = !1;
    }
    function Rk() {
      X0 = qm, qm = !1;
    }
    function bw() {
      return xw;
    }
    function Tw() {
      xw = Ju();
    }
    function Z0(e) {
      Yp = Ju(), e.actualStartTime < 0 && (e.actualStartTime = Ju());
    }
    function kw(e) {
      Yp = -1;
    }
    function Gm(e, t) {
      if (Yp >= 0) {
        var a = Ju() - Yp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Yp = -1;
      }
    }
    function to(e) {
      if (Wm >= 0) {
        var t = Ju() - Wm;
        Wm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case gt:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function J0(e) {
      if (Qm >= 0) {
        var t = Ju() - Qm;
        Qm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case gt:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function no() {
      Wm = Ju();
    }
    function eS() {
      Qm = Ju();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Sc(e, t) {
      return {
        value: e,
        source: t,
        stack: nu(t),
        digest: null
      };
    }
    function nS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function bk(e, t) {
      return !0;
    }
    function rS(e, t) {
      try {
        var a = bk(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, h = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === z)
            return;
          console.error(i);
        }
        var y = o ? ct(o) : null, S = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === I)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = ct(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var A = S + `
` + h + `

` + ("" + b);
        console.error(A);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var Tk = typeof WeakMap == "function" ? WeakMap : Map;
    function _w(e, t, a) {
      var i = qo(un, a);
      i.tag = r0, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        gO(o), rS(e, t);
      }, i;
    }
    function aS(e, t, a) {
      var i = qo(un, a);
      i.tag = r0;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          PC(e), rS(e, t);
        };
      }
      var h = e.stateNode;
      return h !== null && typeof h.componentDidCatch == "function" && (i.callback = function() {
        PC(e), rS(e, t), typeof o != "function" && mO(this);
        var S = t.value, b = t.stack;
        this.componentDidCatch(S, {
          componentStack: b !== null ? b : ""
        }), typeof o != "function" && (oa(e.lanes, tt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ct(e) || "Unknown"));
      }), i;
    }
    function Ow(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new Tk(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = SO.bind(null, e, t, a);
        Ta && oh(e, a), t.then(s, s);
      }
    }
    function kk(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function _k(e, t) {
      var a = e.tag;
      if ((e.mode & We) === Ze && (a === $ || a === Ae || a === rt)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Dw(e) {
      var t = e;
      do {
        if (t.tag === _e && dk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Lw(e, t, a, i, o) {
      if ((e.mode & We) === Ze) {
        if (e === t)
          e.flags |= cr;
        else {
          if (e.flags |= dt, a.flags |= Bc, a.flags &= ~(rv | zl), a.tag === z) {
            var s = a.alternate;
            if (s === null)
              a.tag = Gt;
            else {
              var h = qo(un, tt);
              h.tag = Sm, Gu(a, h, tt);
            }
          }
          a.lanes = vt(a.lanes, tt);
        }
        return e;
      }
      return e.flags |= cr, e.lanes = o, e;
    }
    function Ok(e, t, a, i, o) {
      if (a.flags |= zl, Ta && oh(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        _k(a), Ur() && a.mode & We && w1();
        var h = Dw(t);
        if (h !== null) {
          h.flags &= ~Mr, Lw(h, t, a, e, o), h.mode & We && Ow(e, s, o), kk(h, e, s);
          return;
        } else {
          if (!Gd(o)) {
            Ow(e, s, o), FS();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (Ur() && a.mode & We) {
        w1();
        var S = Dw(t);
        if (S !== null) {
          (S.flags & cr) === Xe && (S.flags |= Mr), Lw(S, t, a, e, o), Kg(Sc(i, a));
          return;
        }
      }
      i = Sc(i, a), uO(i);
      var b = t;
      do {
        switch (b.tag) {
          case I: {
            var T = i;
            b.flags |= cr;
            var A = Tu(o);
            b.lanes = vt(b.lanes, A);
            var N = _w(b, T, A);
            l0(b, N);
            return;
          }
          case z:
            var W = i, Q = b.type, ee = b.stateNode;
            if ((b.flags & dt) === Xe && (typeof Q.getDerivedStateFromError == "function" || ee !== null && typeof ee.componentDidCatch == "function" && !DC(ee))) {
              b.flags |= cr;
              var Ne = Tu(o);
              b.lanes = vt(b.lanes, Ne);
              var Je = aS(b, W, Ne);
              l0(b, Je);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function Dk() {
      return null;
    }
    var Wp = v.ReactCurrentOwner, ml = !1, iS, Qp, lS, oS, uS, Ec, sS, Km;
    iS = {}, Qp = {}, lS = {}, oS = {}, uS = {}, Ec = !1, sS = {}, Km = {};
    function _a(e, t, a, i) {
      e === null ? t.child = G1(t, null, a, i) : t.child = qf(t, e.child, a, i);
    }
    function Lk(e, t, a, i) {
      t.child = qf(t, e.child, null, i), t.child = qf(t, null, a, i);
    }
    function Nw(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && cl(
          s,
          i,
          // Resolved props
          "prop",
          Lt(a)
        );
      }
      var h = a.render, y = t.ref, S, b;
      Qf(t, o), gu(t);
      {
        if (Wp.current = t, sr(!0), S = ed(e, t, h, i, y, o), b = td(), t.mode & kn) {
          on(!0);
          try {
            S = ed(e, t, h, i, y, o), b = td();
          } finally {
            on(!1);
          }
        }
        sr(!1);
      }
      return ko(), e !== null && !ml ? (ew(e, t, o), Go(e, t, o)) : (Ur() && b && Ig(t), t.flags |= fi, _a(e, t, S, o), t.child);
    }
    function Mw(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (UO(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var h = s;
          return h = sd(s), t.tag = rt, t.type = h, dS(t, s), Aw(e, t, h, i, o);
        }
        {
          var y = s.propTypes;
          y && cl(
            y,
            i,
            // Resolved props
            "prop",
            Lt(s)
          );
        }
        var S = qS(a.type, null, i, t, t.mode, o);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var b = a.type, T = b.propTypes;
        T && cl(
          T,
          i,
          // Resolved props
          "prop",
          Lt(b)
        );
      }
      var A = e.child, N = gS(e, o);
      if (!N) {
        var W = A.memoizedProps, Q = a.compare;
        if (Q = Q !== null ? Q : it, Q(W, i) && e.ref === t.ref)
          return Go(e, t, o);
      }
      t.flags |= fi;
      var ee = bc(A, i);
      return ee.ref = t.ref, ee.return = t, t.child = ee, ee;
    }
    function Aw(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ke) {
          var h = s, y = h._payload, S = h._init;
          try {
            s = S(y);
          } catch {
            s = null;
          }
          var b = s && s.propTypes;
          b && cl(
            b,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Lt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (it(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ml = !1, t.pendingProps = i = T, gS(e, o))
            (e.flags & Bc) !== Xe && (ml = !0);
          else return t.lanes = e.lanes, Go(e, t, o);
      }
      return cS(e, t, a, i, o);
    }
    function zw(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Z)
        if ((t.mode & We) === Ze) {
          var h = {
            baseLanes: ne,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = h, sy(t, a);
        } else if (oa(a, ka)) {
          var A = {
            baseLanes: ne,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = A;
          var N = s !== null ? s.baseLanes : a;
          sy(t, N);
        } else {
          var y = null, S;
          if (s !== null) {
            var b = s.baseLanes;
            S = vt(b, a);
          } else
            S = a;
          t.lanes = t.childLanes = ka;
          var T = {
            baseLanes: S,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, sy(t, S), null;
        }
      else {
        var W;
        s !== null ? (W = vt(s.baseLanes, a), t.memoizedState = null) : W = a, sy(t, W);
      }
      return _a(e, t, o, a), t.child;
    }
    function Nk(e, t, a) {
      var i = t.pendingProps;
      return _a(e, t, i, a), t.child;
    }
    function Mk(e, t, a) {
      var i = t.pendingProps.children;
      return _a(e, t, i, a), t.child;
    }
    function Ak(e, t, a) {
      {
        t.flags |= Ve;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return _a(e, t, s, a), t.child;
    }
    function Uw(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= xa, t.flags |= bi);
    }
    function cS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && cl(
          s,
          i,
          // Resolved props
          "prop",
          Lt(a)
        );
      }
      var h;
      {
        var y = Bf(t, a, !0);
        h = $f(t, y);
      }
      var S, b;
      Qf(t, o), gu(t);
      {
        if (Wp.current = t, sr(!0), S = ed(e, t, a, i, h, o), b = td(), t.mode & kn) {
          on(!0);
          try {
            S = ed(e, t, a, i, h, o), b = td();
          } finally {
            on(!1);
          }
        }
        sr(!1);
      }
      return ko(), e !== null && !ml ? (ew(e, t, o), Go(e, t, o)) : (Ur() && b && Ig(t), t.flags |= fi, _a(e, t, S, o), t.child);
    }
    function Fw(e, t, a, i, o) {
      {
        switch (XO(t)) {
          case !1: {
            var s = t.stateNode, h = t.type, y = new h(t.memoizedProps, s.context), S = y.state;
            s.updater.enqueueSetState(s, S, null);
            break;
          }
          case !0: {
            t.flags |= dt, t.flags |= cr;
            var b = new Error("Simulated error coming from DevTools"), T = Tu(o);
            t.lanes = vt(t.lanes, T);
            var A = aS(t, Sc(b, t), T);
            l0(t, A);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var N = a.propTypes;
          N && cl(
            N,
            i,
            // Resolved props
            "prop",
            Lt(a)
          );
        }
      }
      var W;
      Xl(a) ? (W = !0, um(t)) : W = !1, Qf(t, o);
      var Q = t.stateNode, ee;
      Q === null ? (Zm(e, t), I1(t, a, i), g0(t, a, i, o), ee = !0) : e === null ? ee = lk(t, a, i, o) : ee = ok(e, t, a, i, o);
      var Ne = fS(e, t, a, ee, W, o);
      {
        var Je = t.stateNode;
        ee && Je.props !== i && (Ec || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ct(t) || "a component"), Ec = !0);
      }
      return Ne;
    }
    function fS(e, t, a, i, o, s) {
      Uw(e, t);
      var h = (t.flags & dt) !== Xe;
      if (!i && !h)
        return o && y1(t, a, !1), Go(e, t, s);
      var y = t.stateNode;
      Wp.current = t;
      var S;
      if (h && typeof a.getDerivedStateFromError != "function")
        S = null, kw();
      else {
        gu(t);
        {
          if (sr(!0), S = y.render(), t.mode & kn) {
            on(!0);
            try {
              y.render();
            } finally {
              on(!1);
            }
          }
          sr(!1);
        }
        ko();
      }
      return t.flags |= fi, e !== null && h ? Lk(e, t, S, s) : _a(e, t, S, s), t.memoizedState = y.state, o && y1(t, a, !0), t.child;
    }
    function jw(e) {
      var t = e.stateNode;
      t.pendingContext ? v1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && v1(e, t.context, !1), R0(e, t.containerInfo);
    }
    function zk(e, t, a) {
      if (jw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      U1(e, t), xm(t, i, null, a);
      var h = t.memoizedState;
      t.stateNode;
      var y = h.element;
      if (o.isDehydrated) {
        var S = {
          element: y,
          isDehydrated: !1,
          cache: h.cache,
          pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
          transitions: h.transitions
        }, b = t.updateQueue;
        if (b.baseState = S, t.memoizedState = S, t.flags & Mr) {
          var T = Sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Pw(e, t, y, a, T);
        } else if (y !== s) {
          var A = Sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Pw(e, t, y, a, A);
        } else {
          PT(t);
          var N = G1(t, null, y, a);
          t.child = N;
          for (var W = N; W; )
            W.flags = W.flags & ~Jt | Ri, W = W.sibling;
        }
      } else {
        if (Yf(), y === s)
          return Go(e, t, a);
        _a(e, t, y, a);
      }
      return t.child;
    }
    function Pw(e, t, a, i, o) {
      return Yf(), Kg(o), t.flags |= Mr, _a(e, t, a, i), t.child;
    }
    function Uk(e, t, a) {
      X1(t), e === null && Gg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, h = o.children, y = Dg(i, o);
      return y ? h = null : s !== null && Dg(i, s) && (t.flags |= Pa), Uw(e, t), _a(e, t, h, a), t.child;
    }
    function Fk(e, t) {
      return e === null && Gg(t), null;
    }
    function jk(e, t, a, i) {
      Zm(e, t);
      var o = t.pendingProps, s = a, h = s._payload, y = s._init, S = y(h);
      t.type = S;
      var b = t.tag = FO(S), T = pl(S, o), A;
      switch (b) {
        case $:
          return dS(t, S), t.type = S = sd(S), A = cS(null, t, S, T, i), A;
        case z:
          return t.type = S = $S(S), A = Fw(null, t, S, T, i), A;
        case Ae:
          return t.type = S = VS(S), A = Nw(null, t, S, T, i), A;
        case Ge: {
          if (t.type !== t.elementType) {
            var N = S.propTypes;
            N && cl(
              N,
              T,
              // Resolved for outer only
              "prop",
              Lt(S)
            );
          }
          return A = Mw(
            null,
            t,
            S,
            pl(S.type, T),
            // The inner type can have defaults too
            i
          ), A;
        }
      }
      var W = "";
      throw S !== null && typeof S == "object" && S.$$typeof === Ke && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function Pk(e, t, a, i, o) {
      Zm(e, t), t.tag = z;
      var s;
      return Xl(a) ? (s = !0, um(t)) : s = !1, Qf(t, o), I1(t, a, i), g0(t, a, i, o), fS(null, t, a, !0, s, o);
    }
    function Hk(e, t, a, i) {
      Zm(e, t);
      var o = t.pendingProps, s;
      {
        var h = Bf(t, a, !1);
        s = $f(t, h);
      }
      Qf(t, i);
      var y, S;
      gu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = Lt(a) || "Unknown";
          iS[b] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), iS[b] = !0);
        }
        t.mode & kn && dl.recordLegacyContextWarning(t, null), sr(!0), Wp.current = t, y = ed(null, t, a, o, s, i), S = td(), sr(!1);
      }
      if (ko(), t.flags |= fi, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var T = Lt(a) || "Unknown";
        Qp[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Qp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var A = Lt(a) || "Unknown";
          Qp[A] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), Qp[A] = !0);
        }
        t.tag = z, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return Xl(a) ? (N = !0, um(t)) : N = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, i0(t), V1(t, y), g0(t, a, o, i), fS(null, t, a, !0, N, i);
      } else {
        if (t.tag = $, t.mode & kn) {
          on(!0);
          try {
            y = ed(null, t, a, o, s, i), S = td();
          } finally {
            on(!1);
          }
        }
        return Ur() && S && Ig(t), _a(null, t, y, i), dS(t, a), t.child;
      }
    }
    function dS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ua();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), uS[o] || (uS[o] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var h = Lt(t) || "Unknown";
          oS[h] || (g("%s: Function components do not support getDerivedStateFromProps.", h), oS[h] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = Lt(t) || "Unknown";
          lS[y] || (g("%s: Function components do not support contextType.", y), lS[y] = !0);
        }
      }
    }
    var pS = {
      dehydrated: null,
      treeContext: null,
      retryLane: zn
    };
    function hS(e) {
      return {
        baseLanes: e,
        cachePool: Dk(),
        transitions: null
      };
    }
    function Bk(e, t) {
      var a = null;
      return {
        baseLanes: vt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function $k(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return k0(e, jp);
    }
    function Vk(e, t) {
      return Gs(e.childLanes, t);
    }
    function Hw(e, t, a) {
      var i = t.pendingProps;
      ZO(t) && (t.flags |= dt);
      var o = hl.current, s = !1, h = (t.flags & dt) !== Xe;
      if (h || $k(o, e) ? (s = !0, t.flags &= ~dt) : (e === null || e.memoizedState !== null) && (o = fk(o, J1)), o = Kf(o), Xu(t, o), e === null) {
        Gg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var S = y.dehydrated;
          if (S !== null)
            return qk(t, S);
        }
        var b = i.children, T = i.fallback;
        if (s) {
          var A = Ik(t, b, T, a), N = t.child;
          return N.memoizedState = hS(a), t.memoizedState = pS, A;
        } else
          return vS(t, b);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var Q = W.dehydrated;
          if (Q !== null)
            return Gk(e, t, h, i, Q, W, a);
        }
        if (s) {
          var ee = i.fallback, Ne = i.children, Je = Wk(e, t, Ne, ee, a), Qe = t.child, Ot = e.child.memoizedState;
          return Qe.memoizedState = Ot === null ? hS(a) : Bk(Ot, a), Qe.childLanes = Vk(e, a), t.memoizedState = pS, Je;
        } else {
          var bt = i.children, H = Yk(e, t, bt, a);
          return t.memoizedState = null, H;
        }
      }
    }
    function vS(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = mS(o, i);
      return s.return = e, e.child = s, s;
    }
    function Ik(e, t, a, i) {
      var o = e.mode, s = e.child, h = {
        mode: "hidden",
        children: t
      }, y, S;
      return (o & We) === Ze && s !== null ? (y = s, y.childLanes = ne, y.pendingProps = h, e.mode & Mt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), S = is(a, o, i, null)) : (y = mS(h, o), S = is(a, o, i, null)), y.return = e, S.return = e, y.sibling = S, e.child = y, S;
    }
    function mS(e, t, a) {
      return BC(e, t, ne, null);
    }
    function Bw(e, t) {
      return bc(e, t);
    }
    function Yk(e, t, a, i) {
      var o = e.child, s = o.sibling, h = Bw(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & We) === Ze && (h.lanes = i), h.return = t, h.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= zt) : y.push(s);
      }
      return t.child = h, h;
    }
    function Wk(e, t, a, i, o) {
      var s = t.mode, h = e.child, y = h.sibling, S = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & We) === Ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== h
      ) {
        var T = t.child;
        b = T, b.childLanes = ne, b.pendingProps = S, t.mode & Mt && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = h.selfBaseDuration, b.treeBaseDuration = h.treeBaseDuration), t.deletions = null;
      } else
        b = Bw(h, S), b.subtreeFlags = h.subtreeFlags & fr;
      var A;
      return y !== null ? A = bc(y, i) : (A = is(i, s, o, null), A.flags |= Jt), A.return = t, b.return = t, b.sibling = A, t.child = b, A;
    }
    function Xm(e, t, a, i) {
      i !== null && Kg(i), qf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, h = vS(t, s);
      return h.flags |= Jt, t.memoizedState = null, h;
    }
    function Qk(e, t, a, i, o) {
      var s = t.mode, h = {
        mode: "visible",
        children: a
      }, y = mS(h, s), S = is(i, s, o, null);
      return S.flags |= Jt, y.return = t, S.return = t, y.sibling = S, t.child = y, (t.mode & We) !== Ze && qf(t, e.child, null, o), S;
    }
    function qk(e, t, a) {
      return (e.mode & We) === Ze ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = tt) : Ag(t) ? e.lanes = _n : e.lanes = ka, null;
    }
    function Gk(e, t, a, i, o, s, h) {
      if (a)
        if (t.flags & Mr) {
          t.flags &= ~Mr;
          var H = nS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Xm(e, t, h, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= dt, null;
          var te = i.children, B = i.fallback, he = Qk(e, t, te, B, h), Me = t.child;
          return Me.memoizedState = hS(h), t.memoizedState = pS, he;
        }
      else {
        if (FT(), (t.mode & We) === Ze)
          return Xm(
            e,
            t,
            h,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ag(o)) {
          var y, S, b;
          {
            var T = eT(o);
            y = T.digest, S = T.message, b = T.stack;
          }
          var A;
          S ? A = new Error(S) : A = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = nS(A, y, b);
          return Xm(e, t, h, N);
        }
        var W = oa(h, e.childLanes);
        if (ml || W) {
          var Q = uy();
          if (Q !== null) {
            var ee = xv(Q, h);
            if (ee !== zn && ee !== s.retryLane) {
              s.retryLane = ee;
              var Ne = un;
              Xa(e, ee), Er(Q, e, ee, Ne);
            }
          }
          FS();
          var Je = nS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Xm(e, t, h, Je);
        } else if (s1(o)) {
          t.flags |= dt, t.child = e.child;
          var Qe = EO.bind(null, e);
          return tT(o, Qe), null;
        } else {
          HT(t, o, s.treeContext);
          var Ot = i.children, bt = vS(t, Ot);
          return bt.flags |= Ri, bt;
        }
      }
    }
    function $w(e, t, a) {
      e.lanes = vt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = vt(i.lanes, t)), t0(e.return, t, a);
    }
    function Kk(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === _e) {
          var o = i.memoizedState;
          o !== null && $w(i, a, e);
        } else if (i.tag === re)
          $w(i, a, e);
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
    function Xk(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Dm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Zk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !sS[e])
        if (sS[e] = !0, typeof e == "string")
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
    function Jk(e, t) {
      e !== void 0 && !Km[e] && (e !== "collapsed" && e !== "hidden" ? (Km[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Km[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Vw(e, t) {
      {
        var a = Nt(e), i = !a && typeof gi(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function e_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Nt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Vw(e[a], a))
              return;
        } else {
          var i = gi(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), h = 0; !s.done; s = o.next()) {
                if (!Vw(s.value, h))
                  return;
                h++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function yS(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function Iw(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, h = i.children;
      Zk(o), Jk(s, o), e_(h, o), _a(e, t, h, a);
      var y = hl.current, S = k0(y, jp);
      if (S)
        y = _0(y, jp), t.flags |= dt;
      else {
        var b = e !== null && (e.flags & dt) !== Xe;
        b && Kk(t, t.child, a), y = Kf(y);
      }
      if (Xu(t, y), (t.mode & We) === Ze)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = Xk(t.child), A;
            T === null ? (A = t.child, t.child = null) : (A = T.sibling, T.sibling = null), yS(
              t,
              !1,
              // isBackwards
              A,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var N = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var Q = W.alternate;
              if (Q !== null && Dm(Q) === null) {
                t.child = W;
                break;
              }
              var ee = W.sibling;
              W.sibling = N, N = W, W = ee;
            }
            yS(
              t,
              !0,
              // isBackwards
              N,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            yS(
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
    function t_(e, t, a) {
      R0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = qf(t, null, i, a) : _a(e, t, i, a), t.child;
    }
    var Yw = !1;
    function n_(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, h = t.memoizedProps, y = s.value;
      {
        "value" in s || Yw || (Yw = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var S = t.type.propTypes;
        S && cl(S, s, "prop", "Context.Provider");
      }
      if (N1(t, o, y), h !== null) {
        var b = h.value;
        if (Fe(b, y)) {
          if (h.children === s.children && !lm())
            return Go(e, t, a);
        } else
          KT(t, o, a);
      }
      var T = s.children;
      return _a(e, t, T, a), t.child;
    }
    var Ww = !1;
    function r_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Ww || (Ww = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Qf(t, a);
      var h = ir(i);
      gu(t);
      var y;
      return Wp.current = t, sr(!0), y = s(h), sr(!1), ko(), t.flags |= fi, _a(e, t, y, a), t.child;
    }
    function qp() {
      ml = !0;
    }
    function Zm(e, t) {
      (t.mode & We) === Ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Jt);
    }
    function Go(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), kw(), lh(t.lanes), oa(a, t.childLanes) ? (uk(e, t), t.child) : null;
    }
    function a_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= zt) : s.push(e), a.flags |= Jt, a;
      }
    }
    function gS(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function i_(e, t, a) {
      switch (t.tag) {
        case I:
          jw(t), t.stateNode, Yf();
          break;
        case K:
          X1(t);
          break;
        case z: {
          var i = t.type;
          Xl(i) && um(t);
          break;
        }
        case oe:
          R0(t, t.stateNode.containerInfo);
          break;
        case Ye: {
          var o = t.memoizedProps.value, s = t.type._context;
          N1(t, s, o);
          break;
        }
        case gt:
          {
            var h = oa(a, t.childLanes);
            h && (t.flags |= Ve);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case _e: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return Xu(t, Kf(hl.current)), t.flags |= dt, null;
            var b = t.child, T = b.childLanes;
            if (oa(a, T))
              return Hw(e, t, a);
            Xu(t, Kf(hl.current));
            var A = Go(e, t, a);
            return A !== null ? A.sibling : null;
          } else
            Xu(t, Kf(hl.current));
          break;
        }
        case re: {
          var N = (e.flags & dt) !== Xe, W = oa(a, t.childLanes);
          if (N) {
            if (W)
              return Iw(e, t, a);
            t.flags |= dt;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), Xu(t, hl.current), W)
            break;
          return null;
        }
        case ue:
        case Se:
          return t.lanes = ne, zw(e, t, a);
      }
      return Go(e, t, a);
    }
    function Qw(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return a_(e, t, qS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || lm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ml = !0;
        else {
          var s = gS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & dt) === Xe)
            return ml = !1, i_(e, t, a);
          (e.flags & Bc) !== Xe ? ml = !0 : ml = !1;
        }
      } else if (ml = !1, Ur() && LT(t)) {
        var h = t.index, y = NT();
        E1(t, y, h);
      }
      switch (t.lanes = ne, t.tag) {
        case F:
          return Hk(e, t, t.type, a);
        case tn: {
          var S = t.elementType;
          return jk(e, t, S, a);
        }
        case $: {
          var b = t.type, T = t.pendingProps, A = t.elementType === b ? T : pl(b, T);
          return cS(e, t, b, A, a);
        }
        case z: {
          var N = t.type, W = t.pendingProps, Q = t.elementType === N ? W : pl(N, W);
          return Fw(e, t, N, Q, a);
        }
        case I:
          return zk(e, t, a);
        case K:
          return Uk(e, t, a);
        case X:
          return Fk(e, t);
        case _e:
          return Hw(e, t, a);
        case oe:
          return t_(e, t, a);
        case Ae: {
          var ee = t.type, Ne = t.pendingProps, Je = t.elementType === ee ? Ne : pl(ee, Ne);
          return Nw(e, t, ee, Je, a);
        }
        case Ce:
          return Nk(e, t, a);
        case ut:
          return Mk(e, t, a);
        case gt:
          return Ak(e, t, a);
        case Ye:
          return n_(e, t, a);
        case ft:
          return r_(e, t, a);
        case Ge: {
          var Qe = t.type, Ot = t.pendingProps, bt = pl(Qe, Ot);
          if (t.type !== t.elementType) {
            var H = Qe.propTypes;
            H && cl(
              H,
              bt,
              // Resolved for outer only
              "prop",
              Lt(Qe)
            );
          }
          return bt = pl(Qe.type, bt), Mw(e, t, Qe, bt, a);
        }
        case rt:
          return Aw(e, t, t.type, t.pendingProps, a);
        case Gt: {
          var te = t.type, B = t.pendingProps, he = t.elementType === te ? B : pl(te, B);
          return Pk(e, t, te, he, a);
        }
        case re:
          return Iw(e, t, a);
        case me:
          break;
        case ue:
          return zw(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function nd(e) {
      e.flags |= Ve;
    }
    function qw(e) {
      e.flags |= xa, e.flags |= bi;
    }
    var Gw, SS, Kw, Xw;
    Gw = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === K || o.tag === X)
          _b(e, o.stateNode);
        else if (o.tag !== oe) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, SS = function(e, t) {
    }, Kw = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var h = t.stateNode, y = b0(), S = Db(h, a, s, i, o, y);
        t.updateQueue = S, S && nd(t);
      }
    }, Xw = function(e, t, a, i) {
      a !== i && nd(t);
    };
    function Gp(e, t) {
      if (!Ur())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ne, i = Xe;
      if (t) {
        if ((e.mode & Mt) !== Ze) {
          for (var S = e.selfBaseDuration, b = e.child; b !== null; )
            a = vt(a, vt(b.lanes, b.childLanes)), i |= b.subtreeFlags & fr, i |= b.flags & fr, S += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = S;
        } else
          for (var T = e.child; T !== null; )
            a = vt(a, vt(T.lanes, T.childLanes)), i |= T.subtreeFlags & fr, i |= T.flags & fr, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== Ze) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, h = e.child; h !== null; )
            a = vt(a, vt(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, o += h.actualDuration, s += h.treeBaseDuration, h = h.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var y = e.child; y !== null; )
            a = vt(a, vt(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function l_(e, t, a) {
      if (YT() && (t.mode & We) !== Ze && (t.flags & dt) === Xe)
        return k1(t), Yf(), t.flags |= Mr | zl | cr, !1;
      var i = pm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (VT(t), jr(t), (t.mode & Mt) !== Ze) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Yf(), (t.flags & dt) === Xe && (t.memoizedState = null), t.flags |= Ve, jr(t), (t.mode & Mt) !== Ze) {
            var h = a !== null;
            if (h) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return _1(), !0;
    }
    function Zw(e, t, a) {
      var i = t.pendingProps;
      switch (Yg(t), t.tag) {
        case F:
        case tn:
        case rt:
        case $:
        case Ae:
        case Ce:
        case ut:
        case gt:
        case ft:
        case Ge:
          return jr(t), null;
        case z: {
          var o = t.type;
          return Xl(o) && om(t), jr(t), null;
        }
        case I: {
          var s = t.stateNode;
          if (Gf(t), Bg(t), D0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var h = pm(t);
            if (h)
              nd(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Mr) !== Xe) && (t.flags |= Vn, _1());
            }
          }
          return SS(e, t), jr(t), null;
        }
        case K: {
          T0(t);
          var S = K1(), b = t.type;
          if (e !== null && t.stateNode != null)
            Kw(e, t, b, i, S), e.ref !== t.ref && qw(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return jr(t), null;
            }
            var T = b0(), A = pm(t);
            if (A)
              BT(t, S, T) && nd(t);
            else {
              var N = kb(b, i, S, T, t);
              Gw(N, t, !1, !1), t.stateNode = N, Ob(N, b, i, S) && nd(t);
            }
            t.ref !== null && qw(t);
          }
          return jr(t), null;
        }
        case X: {
          var W = i;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            Xw(e, t, Q, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ee = K1(), Ne = b0(), Je = pm(t);
            Je ? $T(t) && nd(t) : t.stateNode = Lb(W, ee, Ne, t);
          }
          return jr(t), null;
        }
        case _e: {
          Xf(t);
          var Qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ot = l_(e, t, Qe);
            if (!Ot)
              return t.flags & cr ? t : null;
          }
          if ((t.flags & dt) !== Xe)
            return t.lanes = a, (t.mode & Mt) !== Ze && tS(t), t;
          var bt = Qe !== null, H = e !== null && e.memoizedState !== null;
          if (bt !== H && bt) {
            var te = t.child;
            if (te.flags |= Al, (t.mode & We) !== Ze) {
              var B = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !xe);
              B || k0(hl.current, J1) ? oO() : FS();
            }
          }
          var he = t.updateQueue;
          if (he !== null && (t.flags |= Ve), jr(t), (t.mode & Mt) !== Ze && bt) {
            var Me = t.child;
            Me !== null && (t.treeBaseDuration -= Me.treeBaseDuration);
          }
          return null;
        }
        case oe:
          return Gf(t), SS(e, t), e === null && RT(t.stateNode.containerInfo), jr(t), null;
        case Ye:
          var ke = t.type._context;
          return e0(ke, t), jr(t), null;
        case Gt: {
          var ot = t.type;
          return Xl(ot) && om(t), jr(t), null;
        }
        case re: {
          Xf(t);
          var ht = t.memoizedState;
          if (ht === null)
            return jr(t), null;
          var Xt = (t.flags & dt) !== Xe, Ft = ht.rendering;
          if (Ft === null)
            if (Xt)
              Gp(ht, !1);
            else {
              var Jn = sO() && (e === null || (e.flags & dt) === Xe);
              if (!Jn)
                for (var jt = t.child; jt !== null; ) {
                  var Yn = Dm(jt);
                  if (Yn !== null) {
                    Xt = !0, t.flags |= dt, Gp(ht, !1);
                    var da = Yn.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= Ve), t.subtreeFlags = Xe, sk(t, a), Xu(t, _0(hl.current, jp)), t.child;
                  }
                  jt = jt.sibling;
                }
              ht.tail !== null && In() > SC() && (t.flags |= dt, Xt = !0, Gp(ht, !1), t.lanes = Qd);
            }
          else {
            if (!Xt) {
              var Vr = Dm(Ft);
              if (Vr !== null) {
                t.flags |= dt, Xt = !0;
                var vi = Vr.updateQueue;
                if (vi !== null && (t.updateQueue = vi, t.flags |= Ve), Gp(ht, !0), ht.tail === null && ht.tailMode === "hidden" && !Ft.alternate && !Ur())
                  return jr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              In() * 2 - ht.renderingStartTime > SC() && a !== ka && (t.flags |= dt, Xt = !0, Gp(ht, !1), t.lanes = Qd);
            }
            if (ht.isBackwards)
              Ft.sibling = t.child, t.child = Ft;
            else {
              var La = ht.last;
              La !== null ? La.sibling = Ft : t.child = Ft, ht.last = Ft;
            }
          }
          if (ht.tail !== null) {
            var Na = ht.tail;
            ht.rendering = Na, ht.tail = Na.sibling, ht.renderingStartTime = In(), Na.sibling = null;
            var pa = hl.current;
            return Xt ? pa = _0(pa, jp) : pa = Kf(pa), Xu(t, pa), Na;
          }
          return jr(t), null;
        }
        case me:
          break;
        case ue:
        case Se: {
          US(t);
          var eu = t.memoizedState, cd = eu !== null;
          if (e !== null) {
            var fh = e.memoizedState, io = fh !== null;
            io !== cd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Z && (t.flags |= Al);
          }
          return !cd || (t.mode & We) === Ze ? jr(t) : oa(ao, ka) && (jr(t), t.subtreeFlags & (Jt | Ve) && (t.flags |= Al)), null;
        }
        case pe:
          return null;
        case ve:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function o_(e, t, a) {
      switch (Yg(t), t.tag) {
        case z: {
          var i = t.type;
          Xl(i) && om(t);
          var o = t.flags;
          return o & cr ? (t.flags = o & ~cr | dt, (t.mode & Mt) !== Ze && tS(t), t) : null;
        }
        case I: {
          t.stateNode, Gf(t), Bg(t), D0();
          var s = t.flags;
          return (s & cr) !== Xe && (s & dt) === Xe ? (t.flags = s & ~cr | dt, t) : null;
        }
        case K:
          return T0(t), null;
        case _e: {
          Xf(t);
          var h = t.memoizedState;
          if (h !== null && h.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Yf();
          }
          var y = t.flags;
          return y & cr ? (t.flags = y & ~cr | dt, (t.mode & Mt) !== Ze && tS(t), t) : null;
        }
        case re:
          return Xf(t), null;
        case oe:
          return Gf(t), null;
        case Ye:
          var S = t.type._context;
          return e0(S, t), null;
        case ue:
        case Se:
          return US(t), null;
        case pe:
          return null;
        default:
          return null;
      }
    }
    function Jw(e, t, a) {
      switch (Yg(t), t.tag) {
        case z: {
          var i = t.type.childContextTypes;
          i != null && om(t);
          break;
        }
        case I: {
          t.stateNode, Gf(t), Bg(t), D0();
          break;
        }
        case K: {
          T0(t);
          break;
        }
        case oe:
          Gf(t);
          break;
        case _e:
          Xf(t);
          break;
        case re:
          Xf(t);
          break;
        case Ye:
          var o = t.type._context;
          e0(o, t);
          break;
        case ue:
        case Se:
          US(t);
          break;
      }
    }
    var eC = null;
    eC = /* @__PURE__ */ new Set();
    var Jm = !1, Pr = !1, u_ = typeof WeakSet == "function" ? WeakSet : Set, je = null, rd = null, ad = null;
    function s_(e) {
      ci(null, function() {
        throw e;
      }), nl();
    }
    var c_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          no(), t.componentWillUnmount();
        } finally {
          to(e);
        }
      else
        t.componentWillUnmount();
    };
    function tC(e, t) {
      try {
        es(hr, e);
      } catch (a) {
        hn(e, t, a);
      }
    }
    function ES(e, t, a) {
      try {
        c_(e, a);
      } catch (i) {
        hn(e, t, i);
      }
    }
    function f_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        hn(e, t, i);
      }
    }
    function nC(e, t) {
      try {
        aC(e);
      } catch (a) {
        hn(e, t, a);
      }
    }
    function id(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (mt && st && e.mode & Mt)
              try {
                no(), i = a(null);
              } finally {
                to(e);
              }
            else
              i = a(null);
          } catch (o) {
            hn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          a.current = null;
    }
    function ey(e, t, a) {
      try {
        a();
      } catch (i) {
        hn(e, t, i);
      }
    }
    var rC = !1;
    function d_(e, t) {
      bb(e.containerInfo), je = t, p_();
      var a = rC;
      return rC = !1, a;
    }
    function p_() {
      for (; je !== null; ) {
        var e = je, t = e.child;
        (e.subtreeFlags & ea) !== Xe && t !== null ? (t.return = e, je = t) : h_();
      }
    }
    function h_() {
      for (; je !== null; ) {
        var e = je;
        Sn(e);
        try {
          v_(e);
        } catch (a) {
          hn(e, e.return, a);
        }
        cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, je = t;
          return;
        }
        je = e.return;
      }
    }
    function v_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Vn) !== Xe) {
        switch (Sn(e), e.tag) {
          case $:
          case Ae:
          case rt:
            break;
          case z: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ec && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(e) || "instance"));
              var h = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : pl(e.type, i), o);
              {
                var y = eC;
                h === void 0 && !y.has(e.type) && (y.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ct(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          }
          case I: {
            {
              var S = e.stateNode;
              Kb(S.containerInfo);
            }
            break;
          }
          case K:
          case X:
          case oe:
          case Gt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        cn();
      }
    }
    function yl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, h = s;
        do {
          if ((h.tag & e) === e) {
            var y = h.destroy;
            h.destroy = void 0, y !== void 0 && ((e & Fr) !== Za ? sv(t) : (e & hr) !== Za && Su(t), (e & Zl) !== Za && uh(!0), ey(t, a, y), (e & Zl) !== Za && uh(!1), (e & Fr) !== Za ? cv() : (e & hr) !== Za && js());
          }
          h = h.next;
        } while (h !== s);
      }
    }
    function es(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Za ? Vd(t) : (e & hr) !== Za && fv(t);
            var h = s.create;
            (e & Zl) !== Za && uh(!0), s.destroy = h(), (e & Zl) !== Za && uh(!1), (e & Fr) !== Za ? Qc() : (e & hr) !== Za && Id();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var S = void 0;
                (s.tag & hr) !== Xe ? S = "useLayoutEffect" : (s.tag & Zl) !== Xe ? S = "useInsertionEffect" : S = "useEffect";
                var b = void 0;
                y === null ? b = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? b = `

It looks like you wrote ` + S + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + S + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : b = " You returned: " + y, g("%s must not return anything besides a function, which is used for clean-up.%s", S, b);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function m_(e, t) {
      if ((t.flags & Ve) !== Xe)
        switch (t.tag) {
          case gt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, h = bw(), y = t.alternate === null ? "mount" : "update";
            Rw() && (y = "nested-update"), typeof s == "function" && s(o, y, a, h);
            var S = t.return;
            e: for (; S !== null; ) {
              switch (S.tag) {
                case I:
                  var b = S.stateNode;
                  b.passiveEffectDuration += a;
                  break e;
                case gt:
                  var T = S.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
              }
              S = S.return;
            }
            break;
          }
        }
    }
    function y_(e, t, a, i) {
      if ((a.flags & di) !== Xe)
        switch (a.tag) {
          case $:
          case Ae:
          case rt: {
            if (!Pr)
              if (a.mode & Mt)
                try {
                  no(), es(hr | pr, a);
                } finally {
                  to(a);
                }
              else
                es(hr | pr, a);
            break;
          }
          case z: {
            var o = a.stateNode;
            if (a.flags & Ve && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & Mt)
                  try {
                    no(), o.componentDidMount();
                  } finally {
                    to(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : pl(a.type, t.memoizedProps), h = t.memoizedState;
                if (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & Mt)
                  try {
                    no(), o.componentDidUpdate(s, h, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    to(a);
                  }
                else
                  o.componentDidUpdate(s, h, o.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), j1(a, y, o));
            break;
          }
          case I: {
            var S = a.updateQueue;
            if (S !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case K:
                    b = a.child.stateNode;
                    break;
                  case z:
                    b = a.child.stateNode;
                    break;
                }
              j1(a, S, b);
            }
            break;
          }
          case K: {
            var T = a.stateNode;
            if (t === null && a.flags & Ve) {
              var A = a.type, N = a.memoizedProps;
              Ub(T, A, N);
            }
            break;
          }
          case X:
            break;
          case oe:
            break;
          case gt: {
            {
              var W = a.memoizedProps, Q = W.onCommit, ee = W.onRender, Ne = a.stateNode.effectDuration, Je = bw(), Qe = t === null ? "mount" : "update";
              Rw() && (Qe = "nested-update"), typeof ee == "function" && ee(a.memoizedProps.id, Qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Je);
              {
                typeof Q == "function" && Q(a.memoizedProps.id, Qe, Ne, Je), hO(a);
                var Ot = a.return;
                e: for (; Ot !== null; ) {
                  switch (Ot.tag) {
                    case I:
                      var bt = Ot.stateNode;
                      bt.effectDuration += Ne;
                      break e;
                    case gt:
                      var H = Ot.stateNode;
                      H.effectDuration += Ne;
                      break e;
                  }
                  Ot = Ot.return;
                }
              }
            }
            break;
          }
          case _e: {
            b_(e, a);
            break;
          }
          case re:
          case Gt:
          case me:
          case ue:
          case Se:
          case ve:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & xa && aC(a);
    }
    function g_(e) {
      switch (e.tag) {
        case $:
        case Ae:
        case rt: {
          if (e.mode & Mt)
            try {
              no(), tC(e, e.return);
            } finally {
              to(e);
            }
          else
            tC(e, e.return);
          break;
        }
        case z: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && f_(e, e.return, t), nC(e, e.return);
          break;
        }
        case K: {
          nC(e, e.return);
          break;
        }
      }
    }
    function S_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === K) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Wb(o) : qb(i.stateNode, i.memoizedProps);
            } catch (h) {
              hn(e, e.return, h);
            }
          }
        } else if (i.tag === X) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Qb(s) : Gb(s, i.memoizedProps);
            } catch (h) {
              hn(e, e.return, h);
            }
        } else if (!((i.tag === ue || i.tag === Se) && i.memoizedState !== null && i !== e)) {
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
    function aC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case K:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & Mt)
            try {
              no(), o = t(i);
            } finally {
              to(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ct(e)), t.current = i;
      }
    }
    function E_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function iC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, iC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === K) {
          var a = e.stateNode;
          a !== null && kT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function w_(e) {
      for (var t = e.return; t !== null; ) {
        if (lC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function lC(e) {
      return e.tag === K || e.tag === I || e.tag === oe;
    }
    function oC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || lC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== K && t.tag !== X && t.tag !== P; ) {
          if (t.flags & Jt || t.child === null || t.tag === oe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Jt))
          return t.stateNode;
      }
    }
    function C_(e) {
      var t = w_(e);
      switch (t.tag) {
        case K: {
          var a = t.stateNode;
          t.flags & Pa && (u1(a), t.flags &= ~Pa);
          var i = oC(e);
          CS(e, i, a);
          break;
        }
        case I:
        case oe: {
          var o = t.stateNode.containerInfo, s = oC(e);
          wS(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, o = i === K || i === X;
      if (o) {
        var s = e.stateNode;
        t ? $b(a, s, t) : Hb(a, s);
      } else if (i !== oe) {
        var h = e.child;
        if (h !== null) {
          wS(h, t, a);
          for (var y = h.sibling; y !== null; )
            wS(y, t, a), y = y.sibling;
        }
      }
    }
    function CS(e, t, a) {
      var i = e.tag, o = i === K || i === X;
      if (o) {
        var s = e.stateNode;
        t ? Bb(a, s, t) : Pb(a, s);
      } else if (i !== oe) {
        var h = e.child;
        if (h !== null) {
          CS(h, t, a);
          for (var y = h.sibling; y !== null; )
            CS(y, t, a), y = y.sibling;
        }
      }
    }
    var Hr = null, gl = !1;
    function x_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case K: {
              Hr = i.stateNode, gl = !1;
              break e;
            }
            case I: {
              Hr = i.stateNode.containerInfo, gl = !0;
              break e;
            }
            case oe: {
              Hr = i.stateNode.containerInfo, gl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Hr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        uC(e, t, a), Hr = null, gl = !1;
      }
      E_(a);
    }
    function ts(e, t, a) {
      for (var i = a.child; i !== null; )
        uC(e, t, i), i = i.sibling;
    }
    function uC(e, t, a) {
      switch (ov(a), a.tag) {
        case K:
          Pr || id(a, t);
        case X: {
          {
            var i = Hr, o = gl;
            Hr = null, ts(e, t, a), Hr = i, gl = o, Hr !== null && (gl ? Ib(Hr, a.stateNode) : Vb(Hr, a.stateNode));
          }
          return;
        }
        case P: {
          Hr !== null && (gl ? Yb(Hr, a.stateNode) : Mg(Hr, a.stateNode));
          return;
        }
        case oe: {
          {
            var s = Hr, h = gl;
            Hr = a.stateNode.containerInfo, gl = !0, ts(e, t, a), Hr = s, gl = h;
          }
          return;
        }
        case $:
        case Ae:
        case Ge:
        case rt: {
          if (!Pr) {
            var y = a.updateQueue;
            if (y !== null) {
              var S = y.lastEffect;
              if (S !== null) {
                var b = S.next, T = b;
                do {
                  var A = T, N = A.destroy, W = A.tag;
                  N !== void 0 && ((W & Zl) !== Za ? ey(a, t, N) : (W & hr) !== Za && (Su(a), a.mode & Mt ? (no(), ey(a, t, N), to(a)) : ey(a, t, N), js())), T = T.next;
                } while (T !== b);
              }
            }
          }
          ts(e, t, a);
          return;
        }
        case z: {
          if (!Pr) {
            id(a, t);
            var Q = a.stateNode;
            typeof Q.componentWillUnmount == "function" && ES(a, t, Q);
          }
          ts(e, t, a);
          return;
        }
        case me: {
          ts(e, t, a);
          return;
        }
        case ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & We
          ) {
            var ee = Pr;
            Pr = ee || a.memoizedState !== null, ts(e, t, a), Pr = ee;
          } else
            ts(e, t, a);
          break;
        }
        default: {
          ts(e, t, a);
          return;
        }
      }
    }
    function R_(e) {
      e.memoizedState;
    }
    function b_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && cT(s);
          }
        }
      }
    }
    function sC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new u_()), t.forEach(function(i) {
          var o = wO.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ta)
              if (rd !== null && ad !== null)
                oh(ad, rd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function T_(e, t, a) {
      rd = a, ad = e, Sn(t), cC(t, e), Sn(t), rd = null, ad = null;
    }
    function Sl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            x_(e, t, s);
          } catch (S) {
            hn(s, t, S);
          }
        }
      var h = ms();
      if (t.subtreeFlags & ta)
        for (var y = t.child; y !== null; )
          Sn(y), cC(y, e), y = y.sibling;
      Sn(h);
    }
    function cC(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case $:
        case Ae:
        case Ge:
        case rt: {
          if (Sl(t, e), ro(e), o & Ve) {
            try {
              yl(Zl | pr, e, e.return), es(Zl | pr, e);
            } catch (ot) {
              hn(e, e.return, ot);
            }
            if (e.mode & Mt) {
              try {
                no(), yl(hr | pr, e, e.return);
              } catch (ot) {
                hn(e, e.return, ot);
              }
              to(e);
            } else
              try {
                yl(hr | pr, e, e.return);
              } catch (ot) {
                hn(e, e.return, ot);
              }
          }
          return;
        }
        case z: {
          Sl(t, e), ro(e), o & xa && i !== null && id(i, i.return);
          return;
        }
        case K: {
          Sl(t, e), ro(e), o & xa && i !== null && id(i, i.return);
          {
            if (e.flags & Pa) {
              var s = e.stateNode;
              try {
                u1(s);
              } catch (ot) {
                hn(e, e.return, ot);
              }
            }
            if (o & Ve) {
              var h = e.stateNode;
              if (h != null) {
                var y = e.memoizedProps, S = i !== null ? i.memoizedProps : y, b = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Fb(h, T, b, S, y, e);
                  } catch (ot) {
                    hn(e, e.return, ot);
                  }
              }
            }
          }
          return;
        }
        case X: {
          if (Sl(t, e), ro(e), o & Ve) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var A = e.stateNode, N = e.memoizedProps, W = i !== null ? i.memoizedProps : N;
            try {
              jb(A, W, N);
            } catch (ot) {
              hn(e, e.return, ot);
            }
          }
          return;
        }
        case I: {
          if (Sl(t, e), ro(e), o & Ve && i !== null) {
            var Q = i.memoizedState;
            if (Q.isDehydrated)
              try {
                sT(t.containerInfo);
              } catch (ot) {
                hn(e, e.return, ot);
              }
          }
          return;
        }
        case oe: {
          Sl(t, e), ro(e);
          return;
        }
        case _e: {
          Sl(t, e), ro(e);
          var ee = e.child;
          if (ee.flags & Al) {
            var Ne = ee.stateNode, Je = ee.memoizedState, Qe = Je !== null;
            if (Ne.isHidden = Qe, Qe) {
              var Ot = ee.alternate !== null && ee.alternate.memoizedState !== null;
              Ot || lO();
            }
          }
          if (o & Ve) {
            try {
              R_(e);
            } catch (ot) {
              hn(e, e.return, ot);
            }
            sC(e);
          }
          return;
        }
        case ue: {
          var bt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & We
          ) {
            var H = Pr;
            Pr = H || bt, Sl(t, e), Pr = H;
          } else
            Sl(t, e);
          if (ro(e), o & Al) {
            var te = e.stateNode, B = e.memoizedState, he = B !== null, Me = e;
            if (te.isHidden = he, he && !bt && (Me.mode & We) !== Ze) {
              je = Me;
              for (var ke = Me.child; ke !== null; )
                je = ke, __(ke), ke = ke.sibling;
            }
            S_(Me, he);
          }
          return;
        }
        case re: {
          Sl(t, e), ro(e), o & Ve && sC(e);
          return;
        }
        case me:
          return;
        default: {
          Sl(t, e), ro(e);
          return;
        }
      }
    }
    function ro(e) {
      var t = e.flags;
      if (t & Jt) {
        try {
          C_(e);
        } catch (a) {
          hn(e, e.return, a);
        }
        e.flags &= ~Jt;
      }
      t & Ri && (e.flags &= ~Ri);
    }
    function k_(e, t, a) {
      rd = a, ad = t, je = e, fC(e, t, a), rd = null, ad = null;
    }
    function fC(e, t, a) {
      for (var i = (e.mode & We) !== Ze; je !== null; ) {
        var o = je, s = o.child;
        if (o.tag === ue && i) {
          var h = o.memoizedState !== null, y = h || Jm;
          if (y) {
            xS(e, t, a);
            continue;
          } else {
            var S = o.alternate, b = S !== null && S.memoizedState !== null, T = b || Pr, A = Jm, N = Pr;
            Jm = y, Pr = T, Pr && !N && (je = o, O_(o));
            for (var W = s; W !== null; )
              je = W, fC(
                W,
                // New root; bubble back up to here and stop.
                t,
                a
              ), W = W.sibling;
            je = o, Jm = A, Pr = N, xS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & di) !== Xe && s !== null ? (s.return = o, je = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; je !== null; ) {
        var i = je;
        if ((i.flags & di) !== Xe) {
          var o = i.alternate;
          Sn(i);
          try {
            y_(t, o, i, a);
          } catch (h) {
            hn(i, i.return, h);
          }
          cn();
        }
        if (i === e) {
          je = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, je = s;
          return;
        }
        je = i.return;
      }
    }
    function __(e) {
      for (; je !== null; ) {
        var t = je, a = t.child;
        switch (t.tag) {
          case $:
          case Ae:
          case Ge:
          case rt: {
            if (t.mode & Mt)
              try {
                no(), yl(hr, t, t.return);
              } finally {
                to(t);
              }
            else
              yl(hr, t, t.return);
            break;
          }
          case z: {
            id(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && ES(t, t.return, i);
            break;
          }
          case K: {
            id(t, t.return);
            break;
          }
          case ue: {
            var o = t.memoizedState !== null;
            if (o) {
              dC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, je = a) : dC(e);
      }
    }
    function dC(e) {
      for (; je !== null; ) {
        var t = je;
        if (t === e) {
          je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, je = a;
          return;
        }
        je = t.return;
      }
    }
    function O_(e) {
      for (; je !== null; ) {
        var t = je, a = t.child;
        if (t.tag === ue) {
          var i = t.memoizedState !== null;
          if (i) {
            pC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, je = a) : pC(e);
      }
    }
    function pC(e) {
      for (; je !== null; ) {
        var t = je;
        Sn(t);
        try {
          g_(t);
        } catch (i) {
          hn(t, t.return, i);
        }
        if (cn(), t === e) {
          je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, je = a;
          return;
        }
        je = t.return;
      }
    }
    function D_(e, t, a, i) {
      je = t, L_(t, e, a, i);
    }
    function L_(e, t, a, i) {
      for (; je !== null; ) {
        var o = je, s = o.child;
        (o.subtreeFlags & na) !== Xe && s !== null ? (s.return = o, je = s) : N_(e, t, a, i);
      }
    }
    function N_(e, t, a, i) {
      for (; je !== null; ) {
        var o = je;
        if ((o.flags & Jr) !== Xe) {
          Sn(o);
          try {
            M_(t, o, a, i);
          } catch (h) {
            hn(o, o.return, h);
          }
          cn();
        }
        if (o === e) {
          je = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, je = s;
          return;
        }
        je = o.return;
      }
    }
    function M_(e, t, a, i) {
      switch (t.tag) {
        case $:
        case Ae:
        case rt: {
          if (t.mode & Mt) {
            eS();
            try {
              es(Fr | pr, t);
            } finally {
              J0(t);
            }
          } else
            es(Fr | pr, t);
          break;
        }
      }
    }
    function A_(e) {
      je = e, z_();
    }
    function z_() {
      for (; je !== null; ) {
        var e = je, t = e.child;
        if ((je.flags & zt) !== Xe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              je = o, j_(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var h = s.child;
                if (h !== null) {
                  s.child = null;
                  do {
                    var y = h.sibling;
                    h.sibling = null, h = y;
                  } while (h !== null);
                }
              }
            }
            je = e;
          }
        }
        (e.subtreeFlags & na) !== Xe && t !== null ? (t.return = e, je = t) : U_();
      }
    }
    function U_() {
      for (; je !== null; ) {
        var e = je;
        (e.flags & Jr) !== Xe && (Sn(e), F_(e), cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, je = t;
          return;
        }
        je = e.return;
      }
    }
    function F_(e) {
      switch (e.tag) {
        case $:
        case Ae:
        case rt: {
          e.mode & Mt ? (eS(), yl(Fr | pr, e, e.return), J0(e)) : yl(Fr | pr, e, e.return);
          break;
        }
      }
    }
    function j_(e, t) {
      for (; je !== null; ) {
        var a = je;
        Sn(a), H_(a, t), cn();
        var i = a.child;
        i !== null ? (i.return = a, je = i) : P_(e);
      }
    }
    function P_(e) {
      for (; je !== null; ) {
        var t = je, a = t.sibling, i = t.return;
        if (iC(t), t === e) {
          je = null;
          return;
        }
        if (a !== null) {
          a.return = i, je = a;
          return;
        }
        je = i;
      }
    }
    function H_(e, t) {
      switch (e.tag) {
        case $:
        case Ae:
        case rt: {
          e.mode & Mt ? (eS(), yl(Fr, e, t), J0(e)) : yl(Fr, e, t);
          break;
        }
      }
    }
    function B_(e) {
      switch (e.tag) {
        case $:
        case Ae:
        case rt: {
          try {
            es(hr | pr, e);
          } catch (a) {
            hn(e, e.return, a);
          }
          break;
        }
        case z: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            hn(e, e.return, a);
          }
          break;
        }
      }
    }
    function $_(e) {
      switch (e.tag) {
        case $:
        case Ae:
        case rt: {
          try {
            es(Fr | pr, e);
          } catch (t) {
            hn(e, e.return, t);
          }
          break;
        }
      }
    }
    function V_(e) {
      switch (e.tag) {
        case $:
        case Ae:
        case rt: {
          try {
            yl(hr | pr, e, e.return);
          } catch (a) {
            hn(e, e.return, a);
          }
          break;
        }
        case z: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && ES(e, e.return, t);
          break;
        }
      }
    }
    function I_(e) {
      switch (e.tag) {
        case $:
        case Ae:
        case rt:
          try {
            yl(Fr | pr, e, e.return);
          } catch (t) {
            hn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Kp = Symbol.for;
      Kp("selector.component"), Kp("selector.has_pseudo_class"), Kp("selector.role"), Kp("selector.test_id"), Kp("selector.text");
    }
    var Y_ = [];
    function W_() {
      Y_.forEach(function(e) {
        return e();
      });
    }
    var Q_ = v.ReactCurrentActQueue;
    function q_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function hC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Q_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var G_ = Math.ceil, RS = v.ReactCurrentDispatcher, bS = v.ReactCurrentOwner, Br = v.ReactCurrentBatchConfig, El = v.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), vC = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Ko = 0, Xp = 1, wc = 2, ty = 3, Zp = 4, mC = 5, TS = 6, _t = yr, Oa = null, Pn = null, gr = ne, ao = ne, kS = Yu(ne), Sr = Ko, Jp = null, ny = ne, eh = ne, ry = ne, th = null, Ja = null, _S = 0, yC = 500, gC = 1 / 0, K_ = 500, Xo = null;
    function nh() {
      gC = In() + K_;
    }
    function SC() {
      return gC;
    }
    var ay = !1, OS = null, ld = null, Cc = !1, ns = null, rh = ne, DS = [], LS = null, X_ = 50, ah = 0, NS = null, MS = !1, iy = !1, Z_ = 50, od = 0, ly = null, ih = un, oy = ne, EC = !1;
    function uy() {
      return Oa;
    }
    function Da() {
      return (_t & ($r | ji)) !== yr ? In() : (ih !== un || (ih = In()), ih);
    }
    function rs(e) {
      var t = e.mode;
      if ((t & We) === Ze)
        return tt;
      if ((_t & $r) !== yr && gr !== ne)
        return Tu(gr);
      var a = qT() !== QT;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return oy === zn && (oy = Ev()), oy;
      }
      var o = Ya();
      if (o !== zn)
        return o;
      var s = Nb();
      return s;
    }
    function J_(e) {
      var t = e.mode;
      return (t & We) === Ze ? tt : la();
    }
    function Er(e, t, a, i) {
      xO(), EC && g("useInsertionEffect must not schedule updates."), MS && (iy = !0), Uo(e, a, i), (_t & $r) !== ne && e === Oa ? TO(t) : (Ta && hf(e, t, a), kO(t), e === Oa && ((_t & $r) === yr && (eh = vt(eh, a)), Sr === Zp && as(e, gr)), ei(e, i), a === tt && _t === yr && (t.mode & We) === Ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !El.isBatchingLegacy && (nh(), S1()));
    }
    function eO(e, t, a) {
      var i = e.current;
      i.lanes = t, Uo(e, t, a), ei(e, a);
    }
    function tO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (_t & $r) !== yr
      );
    }
    function ei(e, t) {
      var a = e.callbackNode;
      Zy(e, t);
      var i = Ws(e, e === Oa ? gr : ne);
      if (i === ne) {
        a !== null && UC(a), e.callbackNode = null, e.callbackPriority = zn;
        return;
      }
      var o = Un(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(El.current !== null && a !== HS)) {
        a == null && s !== tt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && UC(a);
      var h;
      if (o === tt)
        e.tag === Wu ? (El.isBatchingLegacy !== null && (El.didScheduleLegacyUpdate = !0), DT(xC.bind(null, e))) : g1(xC.bind(null, e)), El.current !== null ? El.current.push(Qu) : Ab(function() {
          (_t & ($r | ji)) === yr && Qu();
        }), h = null;
      else {
        var y;
        switch (dr(i)) {
          case Fn:
            y = ra;
            break;
          case ll:
            y = mu;
            break;
          case Oi:
            y = Ti;
            break;
          case ku:
            y = Us;
            break;
          default:
            y = Ti;
            break;
        }
        h = BS(y, wC.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = h;
    }
    function wC(e, t) {
      if (xk(), ih = un, oy = ne, (_t & ($r | ji)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Jo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Ws(e, e === Oa ? gr : ne);
      if (o === ne)
        return null;
      var s = !qs(e, o) && !Sv(e, o) && !t, h = s ? fO(e, o) : cy(e, o);
      if (h !== Ko) {
        if (h === wc) {
          var y = Il(e);
          y !== ne && (o = y, h = AS(e, y));
        }
        if (h === Xp) {
          var S = Jp;
          throw xc(e, ne), as(e, o), ei(e, In()), S;
        }
        if (h === TS)
          as(e, o);
        else {
          var b = !qs(e, o), T = e.current.alternate;
          if (b && !rO(T)) {
            if (h = cy(e, o), h === wc) {
              var A = Il(e);
              A !== ne && (o = A, h = AS(e, A));
            }
            if (h === Xp) {
              var N = Jp;
              throw xc(e, ne), as(e, o), ei(e, In()), N;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, nO(e, h, o);
        }
      }
      return ei(e, In()), e.callbackNode === a ? wC.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = th;
      if (vf(e)) {
        var i = xc(e, t);
        i.flags |= Mr, xT(e.containerInfo);
      }
      var o = cy(e, t);
      if (o !== wc) {
        var s = Ja;
        Ja = a, s !== null && CC(s);
      }
      return o;
    }
    function CC(e) {
      Ja === null ? Ja = e : Ja.push.apply(Ja, e);
    }
    function nO(e, t, a) {
      switch (t) {
        case Ko:
        case Xp:
          throw new Error("Root did not complete. This is a bug in React.");
        case wc: {
          Rc(e, Ja, Xo);
          break;
        }
        case ty: {
          if (as(e, a), mv(a) && // do not delay if we're inside an act() scope
          !FC()) {
            var i = _S + yC - In();
            if (i > 10) {
              var o = Ws(e, ne);
              if (o !== ne)
                break;
              var s = e.suspendedLanes;
              if (!zo(s, a)) {
                Da(), df(e, s);
                break;
              }
              e.timeoutHandle = Lg(Rc.bind(null, e, Ja, Xo), i);
              break;
            }
          }
          Rc(e, Ja, Xo);
          break;
        }
        case Zp: {
          if (as(e, a), gv(a))
            break;
          if (!FC()) {
            var h = sf(e, a), y = h, S = In() - y, b = CO(S) - S;
            if (b > 10) {
              e.timeoutHandle = Lg(Rc.bind(null, e, Ja, Xo), b);
              break;
            }
          }
          Rc(e, Ja, Xo);
          break;
        }
        case mC: {
          Rc(e, Ja, Xo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function rO(e) {
      for (var t = e; ; ) {
        if (t.flags & Ro) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], h = s.getSnapshot, y = s.value;
                try {
                  if (!Fe(h(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var S = t.child;
        if (t.subtreeFlags & Ro && S !== null) {
          S.return = t, t = S;
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
    function as(e, t) {
      t = Gs(t, ry), t = Gs(t, eh), Cv(e, t);
    }
    function xC(e) {
      if (Rk(), (_t & ($r | ji)) !== yr)
        throw new Error("Should not already be working.");
      Jo();
      var t = Ws(e, ne);
      if (!oa(t, tt))
        return ei(e, In()), null;
      var a = cy(e, t);
      if (e.tag !== Wu && a === wc) {
        var i = Il(e);
        i !== ne && (t = i, a = AS(e, i));
      }
      if (a === Xp) {
        var o = Jp;
        throw xc(e, ne), as(e, t), ei(e, In()), o;
      }
      if (a === TS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Rc(e, Ja, Xo), ei(e, In()), null;
    }
    function aO(e, t) {
      t !== ne && (Xd(e, vt(t, tt)), ei(e, In()), (_t & ($r | ji)) === yr && (nh(), Qu()));
    }
    function zS(e, t) {
      var a = _t;
      _t |= vC;
      try {
        return e(t);
      } finally {
        _t = a, _t === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !El.isBatchingLegacy && (nh(), S1());
      }
    }
    function iO(e, t, a, i, o) {
      var s = Ya(), h = Br.transition;
      try {
        return Br.transition = null, On(Fn), e(t, a, i, o);
      } finally {
        On(s), Br.transition = h, _t === yr && nh();
      }
    }
    function Zo(e) {
      ns !== null && ns.tag === Wu && (_t & ($r | ji)) === yr && Jo();
      var t = _t;
      _t |= vC;
      var a = Br.transition, i = Ya();
      try {
        return Br.transition = null, On(Fn), e ? e() : void 0;
      } finally {
        On(i), Br.transition = a, _t = t, (_t & ($r | ji)) === yr && Qu();
      }
    }
    function RC() {
      return (_t & ($r | ji)) !== yr;
    }
    function sy(e, t) {
      ca(kS, ao, e), ao = vt(ao, t);
    }
    function US(e) {
      ao = kS.current, sa(kS, e);
    }
    function xc(e, t) {
      e.finishedWork = null, e.finishedLanes = ne;
      var a = e.timeoutHandle;
      if (a !== Ng && (e.timeoutHandle = Ng, Mb(a)), Pn !== null)
        for (var i = Pn.return; i !== null; ) {
          var o = i.alternate;
          Jw(o, i), i = i.return;
        }
      Oa = e;
      var s = bc(e.current, null);
      return Pn = s, gr = ao = t, Sr = Ko, Jp = null, ny = ne, eh = ne, ry = ne, th = null, Ja = null, ZT(), dl.discardPendingWarnings(), s;
    }
    function bC(e, t) {
      do {
        var a = Pn;
        try {
          if (ym(), tw(), cn(), bS.current = null, a === null || a.return === null) {
            Sr = Xp, Jp = t, Pn = null;
            return;
          }
          if (mt && a.mode & Mt && Gm(a, !0), et)
            if (ko(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              pv(a, i, gr);
            } else
              dv(a, t, gr);
          Ok(e, a.return, a, t, gr), OC(a);
        } catch (o) {
          t = o, Pn === a && a !== null ? (a = a.return, Pn = a) : a = Pn;
          continue;
        }
        return;
      } while (!0);
    }
    function TC() {
      var e = RS.current;
      return RS.current = Im, e === null ? Im : e;
    }
    function kC(e) {
      RS.current = e;
    }
    function lO() {
      _S = In();
    }
    function lh(e) {
      ny = vt(e, ny);
    }
    function oO() {
      Sr === Ko && (Sr = ty);
    }
    function FS() {
      (Sr === Ko || Sr === ty || Sr === wc) && (Sr = Zp), Oa !== null && (Qs(ny) || Qs(eh)) && as(Oa, gr);
    }
    function uO(e) {
      Sr !== Zp && (Sr = wc), th === null ? th = [e] : th.push(e);
    }
    function sO() {
      return Sr === Ko;
    }
    function cy(e, t) {
      var a = _t;
      _t |= $r;
      var i = TC();
      if (Oa !== e || gr !== t) {
        if (Ta) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (oh(e, gr), o.clear()), Zd(e, t);
        }
        Xo = Xs(), xc(e, t);
      }
      wu(t);
      do
        try {
          cO();
          break;
        } catch (s) {
          bC(e, s);
        }
      while (!0);
      if (ym(), _t = a, kC(i), Pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Bl(), Oa = null, gr = ne, Sr;
    }
    function cO() {
      for (; Pn !== null; )
        _C(Pn);
    }
    function fO(e, t) {
      var a = _t;
      _t |= $r;
      var i = TC();
      if (Oa !== e || gr !== t) {
        if (Ta) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (oh(e, gr), o.clear()), Zd(e, t);
        }
        Xo = Xs(), nh(), xc(e, t);
      }
      wu(t);
      do
        try {
          dO();
          break;
        } catch (s) {
          bC(e, s);
        }
      while (!0);
      return ym(), kC(i), _t = a, Pn !== null ? (Hs(), Ko) : (Bl(), Oa = null, gr = ne, Sr);
    }
    function dO() {
      for (; Pn !== null && !iv(); )
        _C(Pn);
    }
    function _C(e) {
      var t = e.alternate;
      Sn(e);
      var a;
      (e.mode & Mt) !== Ze ? (Z0(e), a = jS(t, e, ao), Gm(e, !0)) : a = jS(t, e, ao), cn(), e.memoizedProps = e.pendingProps, a === null ? OC(e) : Pn = a, bS.current = null;
    }
    function OC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & zl) === Xe) {
          Sn(t);
          var o = void 0;
          if ((t.mode & Mt) === Ze ? o = Zw(a, t, ao) : (Z0(t), o = Zw(a, t, ao), Gm(t, !1)), cn(), o !== null) {
            Pn = o;
            return;
          }
        } else {
          var s = o_(a, t);
          if (s !== null) {
            s.flags &= rl, Pn = s;
            return;
          }
          if ((t.mode & Mt) !== Ze) {
            Gm(t, !1);
            for (var h = t.actualDuration, y = t.child; y !== null; )
              h += y.actualDuration, y = y.sibling;
            t.actualDuration = h;
          }
          if (i !== null)
            i.flags |= zl, i.subtreeFlags = Xe, i.deletions = null;
          else {
            Sr = TS, Pn = null;
            return;
          }
        }
        var S = t.sibling;
        if (S !== null) {
          Pn = S;
          return;
        }
        t = i, Pn = t;
      } while (t !== null);
      Sr === Ko && (Sr = mC);
    }
    function Rc(e, t, a) {
      var i = Ya(), o = Br.transition;
      try {
        Br.transition = null, On(Fn), pO(e, t, a, i);
      } finally {
        Br.transition = o, On(i);
      }
      return null;
    }
    function pO(e, t, a, i) {
      do
        Jo();
      while (ns !== null);
      if (RO(), (_t & ($r | ji)) !== yr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (uv(s), o === null)
        return Fs(), null;
      if (s === ne && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ne, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = zn;
      var h = vt(o.lanes, o.childLanes);
      pf(e, h), e === Oa && (Oa = null, Pn = null, gr = ne), ((o.subtreeFlags & na) !== Xe || (o.flags & na) !== Xe) && (Cc || (Cc = !0, LS = a, BS(Ti, function() {
        return Jo(), null;
      })));
      var y = (o.subtreeFlags & (ea | ta | di | na)) !== Xe, S = (o.flags & (ea | ta | di | na)) !== Xe;
      if (y || S) {
        var b = Br.transition;
        Br.transition = null;
        var T = Ya();
        On(Fn);
        var A = _t;
        _t |= ji, bS.current = null, d_(e, o), Tw(), T_(e, o, s), Tb(e.containerInfo), e.current = o, Eu(s), k_(o, e, s), hv(), vu(), _t = A, On(T), Br.transition = b;
      } else
        e.current = o, Tw();
      var N = Cc;
      if (Cc ? (Cc = !1, ns = e, rh = s) : (od = 0, ly = null), h = e.pendingLanes, h === ne && (ld = null), N || MC(e.current, !1), Pl(o.stateNode, i), Ta && e.memoizedUpdaters.clear(), W_(), ei(e, In()), t !== null)
        for (var W = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var ee = t[Q], Ne = ee.stack, Je = ee.digest;
          W(ee.value, {
            componentStack: Ne,
            digest: Je
          });
        }
      if (ay) {
        ay = !1;
        var Qe = OS;
        throw OS = null, Qe;
      }
      return oa(rh, tt) && e.tag !== Wu && Jo(), h = e.pendingLanes, oa(h, tt) ? (Ck(), e === NS ? ah++ : (ah = 0, NS = e)) : ah = 0, Qu(), Fs(), null;
    }
    function Jo() {
      if (ns !== null) {
        var e = dr(rh), t = ng(Oi, e), a = Br.transition, i = Ya();
        try {
          return Br.transition = null, On(t), vO();
        } finally {
          On(i), Br.transition = a;
        }
      }
      return !1;
    }
    function hO(e) {
      DS.push(e), Cc || (Cc = !0, BS(Ti, function() {
        return Jo(), null;
      }));
    }
    function vO() {
      if (ns === null)
        return !1;
      var e = LS;
      LS = null;
      var t = ns, a = rh;
      if (ns = null, rh = ne, (_t & ($r | ji)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      MS = !0, iy = !1, Ps(a);
      var i = _t;
      _t |= ji, A_(t.current), D_(t, t.current, a, e);
      {
        var o = DS;
        DS = [];
        for (var s = 0; s < o.length; s++) {
          var h = o[s];
          m_(t, h);
        }
      }
      ki(), MC(t.current, !0), _t = i, Qu(), iy ? t === ly ? od++ : (od = 0, ly = t) : od = 0, MS = !1, iy = !1, $d(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function DC(e) {
      return ld !== null && ld.has(e);
    }
    function mO(e) {
      ld === null ? ld = /* @__PURE__ */ new Set([e]) : ld.add(e);
    }
    function yO(e) {
      ay || (ay = !0, OS = e);
    }
    var gO = yO;
    function LC(e, t, a) {
      var i = Sc(a, t), o = _w(e, i, tt), s = Gu(e, o, tt), h = Da();
      s !== null && (Uo(s, tt, h), ei(s, h));
    }
    function hn(e, t, a) {
      if (s_(a), uh(!1), e.tag === I) {
        LC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === I) {
          LC(i, e, a);
          return;
        } else if (i.tag === z) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !DC(s)) {
            var h = Sc(a, e), y = aS(i, h, tt), S = Gu(i, y, tt), b = Da();
            S !== null && (Uo(S, tt, b), ei(S, b));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function SO(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Da();
      df(e, a), _O(e), Oa === e && zo(gr, a) && (Sr === Zp || Sr === ty && mv(gr) && In() - _S < yC ? xc(e, ne) : ry = vt(ry, a)), ei(e, o);
    }
    function NC(e, t) {
      t === zn && (t = J_(e));
      var a = Da(), i = Xa(e, t);
      i !== null && (Uo(i, t, a), ei(i, a));
    }
    function EO(e) {
      var t = e.memoizedState, a = zn;
      t !== null && (a = t.retryLane), NC(e, a);
    }
    function wO(e, t) {
      var a = zn, i;
      switch (e.tag) {
        case _e:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case re:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), NC(e, a);
    }
    function CO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : G_(e / 1960) * 1960;
    }
    function xO() {
      if (ah > X_)
        throw ah = 0, NS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      od > Z_ && (od = 0, ly = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function RO() {
      dl.flushLegacyContextWarning(), dl.flushPendingUnsafeLifecycleWarnings();
    }
    function MC(e, t) {
      Sn(e), fy(e, Ba, V_), t && fy(e, bo, I_), fy(e, Ba, B_), t && fy(e, bo, $_), cn();
    }
    function fy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Xe ? i = i.child : ((i.flags & t) !== Xe && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var dy = null;
    function AC(e) {
      {
        if ((_t & $r) !== yr || !(e.mode & We))
          return;
        var t = e.tag;
        if (t !== F && t !== I && t !== z && t !== $ && t !== Ae && t !== Ge && t !== rt)
          return;
        var a = ct(e) || "ReactComponent";
        if (dy !== null) {
          if (dy.has(a))
            return;
          dy.add(a);
        } else
          dy = /* @__PURE__ */ new Set([a]);
        var i = gn;
        try {
          Sn(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Sn(e) : cn();
        }
      }
    }
    var jS;
    {
      var bO = null;
      jS = function(e, t, a) {
        var i = $C(bO, t);
        try {
          return Qw(e, t, a);
        } catch (s) {
          if (jT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (ym(), tw(), Jw(e, t), $C(t, i), t.mode & Mt && Z0(t), ci(null, Qw, null, e, t, a), Gy()) {
            var o = nl();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var zC = !1, PS;
    PS = /* @__PURE__ */ new Set();
    function TO(e) {
      if (Kr && !Sk())
        switch (e.tag) {
          case $:
          case Ae:
          case rt: {
            var t = Pn && ct(Pn) || "Unknown", a = t;
            if (!PS.has(a)) {
              PS.add(a);
              var i = ct(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case z: {
            zC || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), zC = !0);
            break;
          }
        }
    }
    function oh(e, t) {
      if (Ta) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          hf(e, i, t);
        });
      }
    }
    var HS = {};
    function BS(e, t) {
      {
        var a = El.current;
        return a !== null ? (a.push(t), HS) : Pd(e, t);
      }
    }
    function UC(e) {
      if (e !== HS)
        return Yc(e);
    }
    function FC() {
      return El.current !== null;
    }
    function kO(e) {
      {
        if (e.mode & We) {
          if (!hC())
            return;
        } else if (!q_() || _t !== yr || e.tag !== $ && e.tag !== Ae && e.tag !== rt)
          return;
        if (El.current === null) {
          var t = gn;
          try {
            Sn(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ct(e));
          } finally {
            t ? Sn(e) : cn();
          }
        }
      }
    }
    function _O(e) {
      e.tag !== Wu && hC() && El.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function uh(e) {
      EC = e;
    }
    var Pi = null, ud = null, OO = function(e) {
      Pi = e;
    };
    function sd(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $S(e) {
      return sd(e);
    }
    function VS(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = sd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Te,
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
    function jC(e, t) {
      {
        if (Pi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case z: {
            typeof i == "function" && (o = !0);
            break;
          }
          case $: {
            (typeof i == "function" || s === Ke) && (o = !0);
            break;
          }
          case Ae: {
            (s === Te || s === Ke) && (o = !0);
            break;
          }
          case Ge:
          case rt: {
            (s === yt || s === Ke) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var h = Pi(a);
          if (h !== void 0 && h === Pi(i))
            return !0;
        }
        return !1;
      }
    }
    function PC(e) {
      {
        if (Pi === null || typeof WeakSet != "function")
          return;
        ud === null && (ud = /* @__PURE__ */ new WeakSet()), ud.add(e);
      }
    }
    var DO = function(e, t) {
      {
        if (Pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Jo(), Zo(function() {
          IS(e.current, i, a);
        });
      }
    }, LO = function(e, t) {
      {
        if (e.context !== pi)
          return;
        Jo(), Zo(function() {
          sh(t, e, null, null);
        });
      }
    };
    function IS(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, h = e.tag, y = e.type, S = null;
        switch (h) {
          case $:
          case rt:
          case z:
            S = y;
            break;
          case Ae:
            S = y.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, T = !1;
        if (S !== null) {
          var A = Pi(S);
          A !== void 0 && (a.has(A) ? T = !0 : t.has(A) && (h === z ? T = !0 : b = !0));
        }
        if (ud !== null && (ud.has(e) || i !== null && ud.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || b) {
          var N = Xa(e, tt);
          N !== null && Er(N, e, tt, un);
        }
        o !== null && !T && IS(o, t, a), s !== null && IS(s, t, a);
      }
    }
    var NO = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return YS(e.current, i, a), a;
      }
    };
    function YS(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, h = e.type, y = null;
        switch (s) {
          case $:
          case rt:
          case z:
            y = h;
            break;
          case Ae:
            y = h.render;
            break;
        }
        var S = !1;
        y !== null && t.has(y) && (S = !0), S ? MO(e, a) : i !== null && YS(i, t, a), o !== null && YS(o, t, a);
      }
    }
    function MO(e, t) {
      {
        var a = AO(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case K:
              t.add(i.stateNode);
              return;
            case oe:
              t.add(i.stateNode.containerInfo);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function AO(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === K)
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
    var WS;
    {
      WS = !1;
      try {
        var HC = Object.preventExtensions({});
      } catch {
        WS = !0;
      }
    }
    function zO(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Xe, this.subtreeFlags = Xe, this.deletions = null, this.lanes = ne, this.childLanes = ne, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !WS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var hi = function(e, t, a, i) {
      return new zO(e, t, a, i);
    };
    function QS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function UO(e) {
      return typeof e == "function" && !QS(e) && e.defaultProps === void 0;
    }
    function FO(e) {
      if (typeof e == "function")
        return QS(e) ? z : $;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Te)
          return Ae;
        if (t === yt)
          return Ge;
      }
      return F;
    }
    function bc(e, t) {
      var a = e.alternate;
      a === null ? (a = hi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Xe, a.subtreeFlags = Xe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & fr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case F:
        case $:
        case rt:
          a.type = sd(e.type);
          break;
        case z:
          a.type = $S(e.type);
          break;
        case Ae:
          a.type = VS(e.type);
          break;
      }
      return a;
    }
    function jO(e, t) {
      e.flags &= fr | Jt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ne, e.lanes = t, e.child = null, e.subtreeFlags = Xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Xe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function PO(e, t, a) {
      var i;
      return e === sm ? (i = We, t === !0 && (i |= kn, i |= Va)) : i = Ze, Ta && (i |= Mt), hi(I, null, null, i);
    }
    function qS(e, t, a, i, o, s) {
      var h = F, y = e;
      if (typeof e == "function")
        QS(e) ? (h = z, y = $S(y)) : y = sd(y);
      else if (typeof e == "string")
        h = K;
      else
        e: switch (e) {
          case Ea:
            return is(a.children, o, s, t);
          case Vi:
            h = ut, o |= kn, (o & We) !== Ze && (o |= Va);
            break;
          case D:
            return HO(a, o, s, t);
          case xt:
            return BO(a, o, s, t);
          case kt:
            return $O(a, o, s, t);
          case an:
            return BC(a, o, s, t);
          case br:
          case $n:
          case yi:
          case ln:
          case rn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ce:
                  h = Ye;
                  break e;
                case be:
                  h = ft;
                  break e;
                case Te:
                  h = Ae, y = VS(y);
                  break e;
                case yt:
                  h = Ge;
                  break e;
                case Ke:
                  h = tn, y = null;
                  break e;
              }
            var S = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var b = i ? ct(i) : null;
              b && (S += `

Check the render method of \`` + b + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
          }
        }
      var T = hi(h, a, t, o);
      return T.elementType = e, T.type = y, T.lanes = s, T._debugOwner = i, T;
    }
    function GS(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, h = e.props, y = qS(o, s, h, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function is(e, t, a, i) {
      var o = hi(Ce, e, i, t);
      return o.lanes = a, o;
    }
    function HO(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = hi(gt, e, i, t | Mt);
      return o.elementType = D, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function BO(e, t, a, i) {
      var o = hi(_e, e, i, t);
      return o.elementType = xt, o.lanes = a, o;
    }
    function $O(e, t, a, i) {
      var o = hi(re, e, i, t);
      return o.elementType = kt, o.lanes = a, o;
    }
    function BC(e, t, a, i) {
      var o = hi(ue, e, i, t);
      o.elementType = an, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function KS(e, t, a) {
      var i = hi(X, e, null, t);
      return i.lanes = a, i;
    }
    function VO() {
      var e = hi(K, null, null, Ze);
      return e.elementType = "DELETED", e;
    }
    function IO(e) {
      var t = hi(P, null, null, Ze);
      return t.stateNode = e, t;
    }
    function XS(e, t, a) {
      var i = e.children !== null ? e.children : [], o = hi(oe, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function $C(e, t) {
      return e === null && (e = hi(F, null, null, Ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function YO(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ng, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = zn, this.eventTimes = Ks(ne), this.expirationTimes = Ks(un), this.pendingLanes = ne, this.suspendedLanes = ne, this.pingedLanes = ne, this.expiredLanes = ne, this.mutableReadLanes = ne, this.finishedLanes = ne, this.entangledLanes = ne, this.entanglements = Ks(ne), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], h = 0; h < An; h++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case sm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Wu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function VC(e, t, a, i, o, s, h, y, S, b) {
      var T = new YO(e, t, a, y, S), A = PO(t, s);
      T.current = A, A.stateNode = T;
      {
        var N = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        A.memoizedState = N;
      }
      return i0(A), T;
    }
    var ZS = "18.2.0";
    function WO(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Cr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Qr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var JS, eE;
    JS = !1, eE = {};
    function IC(e) {
      if (!e)
        return pi;
      var t = xi(e), a = OT(t);
      if (t.tag === z) {
        var i = t.type;
        if (Xl(i))
          return m1(t, i, a);
      }
      return a;
    }
    function QO(e, t) {
      {
        var a = xi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Ud(a);
        if (o === null)
          return null;
        if (o.mode & kn) {
          var s = ct(a) || "Component";
          if (!eE[s]) {
            eE[s] = !0;
            var h = gn;
            try {
              Sn(o), a.mode & kn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              h ? Sn(h) : cn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function YC(e, t, a, i, o, s, h, y) {
      var S = !1, b = null;
      return VC(e, t, S, b, a, i, o, s, h);
    }
    function WC(e, t, a, i, o, s, h, y, S, b) {
      var T = !0, A = VC(a, i, T, e, o, s, h, y, S);
      A.context = IC(null);
      var N = A.current, W = Da(), Q = rs(N), ee = qo(W, Q);
      return ee.callback = t ?? null, Gu(N, ee, Q), eO(A, Q, W), A;
    }
    function sh(e, t, a, i) {
      al(t, e);
      var o = t.current, s = Da(), h = rs(o);
      Yd(h);
      var y = IC(a);
      t.context === null ? t.context = y : t.pendingContext = y, Kr && gn !== null && !JS && (JS = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ct(gn) || "Unknown"));
      var S = qo(s, h);
      S.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), S.callback = i);
      var b = Gu(o, S, h);
      return b !== null && (Er(b, o, h, s), Cm(b, o, h)), h;
    }
    function py(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case K:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function qO(e) {
      switch (e.tag) {
        case I: {
          var t = e.stateNode;
          if (vf(t)) {
            var a = Jy(t);
            aO(t, a);
          }
          break;
        }
        case _e: {
          Zo(function() {
            var o = Xa(e, tt);
            if (o !== null) {
              var s = Da();
              Er(o, e, tt, s);
            }
          });
          var i = tt;
          tE(e, i);
          break;
        }
      }
    }
    function QC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = wv(a.retryLane, t));
    }
    function tE(e, t) {
      QC(e, t);
      var a = e.alternate;
      a && QC(a, t);
    }
    function GO(e) {
      if (e.tag === _e) {
        var t = Ao, a = Xa(e, t);
        if (a !== null) {
          var i = Da();
          Er(a, e, t, i);
        }
        tE(e, t);
      }
    }
    function KO(e) {
      if (e.tag === _e) {
        var t = rs(e), a = Xa(e, t);
        if (a !== null) {
          var i = Da();
          Er(a, e, t, i);
        }
        tE(e, t);
      }
    }
    function qC(e) {
      var t = jd(e);
      return t === null ? null : t.stateNode;
    }
    var GC = function(e) {
      return null;
    };
    function XO(e) {
      return GC(e);
    }
    var KC = function(e) {
      return !1;
    };
    function ZO(e) {
      return KC(e);
    }
    var XC = null, ZC = null, JC = null, ex = null, tx = null, nx = null, rx = null, ax = null, ix = null;
    {
      var lx = function(e, t, a) {
        var i = t[a], o = Nt(e) ? e.slice() : Et({}, e);
        return a + 1 === t.length ? (Nt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = lx(e[i], t, a + 1), o);
      }, ox = function(e, t) {
        return lx(e, t, 0);
      }, ux = function(e, t, a, i) {
        var o = t[i], s = Nt(e) ? e.slice() : Et({}, e);
        if (i + 1 === t.length) {
          var h = a[i];
          s[h] = s[o], Nt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = ux(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, sx = function(e, t, a) {
        if (t.length !== a.length) {
          w("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              w("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return ux(e, t, a, 0);
      }, cx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = Nt(e) ? e.slice() : Et({}, e);
        return s[o] = cx(e[o], t, a + 1, i), s;
      }, fx = function(e, t, a) {
        return cx(e, t, 0, a);
      }, nE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      XC = function(e, t, a, i) {
        var o = nE(e, t);
        if (o !== null) {
          var s = fx(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Et({}, e.memoizedProps);
          var h = Xa(e, tt);
          h !== null && Er(h, e, tt, un);
        }
      }, ZC = function(e, t, a) {
        var i = nE(e, t);
        if (i !== null) {
          var o = ox(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = Et({}, e.memoizedProps);
          var s = Xa(e, tt);
          s !== null && Er(s, e, tt, un);
        }
      }, JC = function(e, t, a, i) {
        var o = nE(e, t);
        if (o !== null) {
          var s = sx(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Et({}, e.memoizedProps);
          var h = Xa(e, tt);
          h !== null && Er(h, e, tt, un);
        }
      }, ex = function(e, t, a) {
        e.pendingProps = fx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, tt);
        i !== null && Er(i, e, tt, un);
      }, tx = function(e, t) {
        e.pendingProps = ox(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Xa(e, tt);
        a !== null && Er(a, e, tt, un);
      }, nx = function(e, t, a) {
        e.pendingProps = sx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, tt);
        i !== null && Er(i, e, tt, un);
      }, rx = function(e) {
        var t = Xa(e, tt);
        t !== null && Er(t, e, tt, un);
      }, ax = function(e) {
        GC = e;
      }, ix = function(e) {
        KC = e;
      };
    }
    function JO(e) {
      var t = Ud(e);
      return t === null ? null : t.stateNode;
    }
    function eD(e) {
      return null;
    }
    function tD() {
      return gn;
    }
    function nD(e) {
      var t = e.findFiberByHostInstance, a = v.ReactCurrentDispatcher;
      return lv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: XC,
        overrideHookStateDeletePath: ZC,
        overrideHookStateRenamePath: JC,
        overrideProps: ex,
        overridePropsDeletePath: tx,
        overridePropsRenamePath: nx,
        setErrorHandler: ax,
        setSuspenseHandler: ix,
        scheduleUpdate: rx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: JO,
        findFiberByHostInstance: t || eD,
        // React Refresh
        findHostInstancesForRefresh: NO,
        scheduleRefresh: DO,
        scheduleRoot: LO,
        setRefreshHandler: OO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: tD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ZS
      });
    }
    var dx = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function rE(e) {
      this._internalRoot = e;
    }
    hy.prototype.render = rE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : vy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Tn) {
          var i = qC(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      sh(e, t, null, null);
    }, hy.prototype.unmount = rE.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        RC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Zo(function() {
          sh(null, e, null, null);
        }), f1(t);
      }
    };
    function rD(e, t) {
      if (!vy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      px(e);
      var a = !1, i = !1, o = "", s = dx;
      t != null && (t.hydrate ? w("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Wr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var h = YC(e, sm, null, a, i, o, s);
      nm(h.current, e);
      var y = e.nodeType === Tn ? e.parentNode : e;
      return yp(y), new rE(h);
    }
    function hy(e) {
      this._internalRoot = e;
    }
    function aD(e) {
      e && ig(e);
    }
    hy.prototype.unstable_scheduleHydration = aD;
    function iD(e, t, a) {
      if (!vy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      px(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, h = !1, y = "", S = dx;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError));
      var b = WC(t, null, e, sm, i, s, h, y, S);
      if (nm(b.current, e), yp(e), o)
        for (var T = 0; T < o.length; T++) {
          var A = o[T];
          pk(b, A);
        }
      return new hy(b);
    }
    function vy(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === wa || e.nodeType === Sd || !Pe));
    }
    function ch(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === wa || e.nodeType === Sd || e.nodeType === Tn && e.nodeValue === " react-mount-point-unstable "));
    }
    function px(e) {
      e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), _p(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var lD = v.ReactCurrentOwner, hx;
    hx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Tn) {
        var t = qC(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = aE(e), o = !!(i && Iu(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function aE(e) {
      return e ? e.nodeType === wa ? e.documentElement : e.firstChild : null;
    }
    function vx() {
    }
    function oD(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var N = py(h);
            s.call(N);
          };
        }
        var h = WC(
          t,
          i,
          e,
          Wu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          vx
        );
        e._reactRootContainer = h, nm(h.current, e);
        var y = e.nodeType === Tn ? e.parentNode : e;
        return yp(y), Zo(), h;
      } else {
        for (var S; S = e.lastChild; )
          e.removeChild(S);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var N = py(T);
            b.call(N);
          };
        }
        var T = YC(
          e,
          Wu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          vx
        );
        e._reactRootContainer = T, nm(T.current, e);
        var A = e.nodeType === Tn ? e.parentNode : e;
        return yp(A), Zo(function() {
          sh(t, T, a, i);
        }), T;
      }
    }
    function uD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function my(e, t, a, i, o) {
      hx(a), uD(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, h;
      if (!s)
        h = oD(a, t, e, o, i);
      else {
        if (h = s, typeof o == "function") {
          var y = o;
          o = function() {
            var S = py(h);
            y.call(S);
          };
        }
        sh(t, h, e, o);
      }
      return py(h);
    }
    function sD(e) {
      {
        var t = lD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Lt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Zr ? e : QO(e, "findDOMNode");
    }
    function cD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ch(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = _p(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return my(null, e, t, !0, a);
    }
    function fD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ch(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = _p(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return my(null, e, t, !1, a);
    }
    function dD(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ch(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !hu(e))
        throw new Error("parentComponent must be a valid React Component");
      return my(e, t, a, !1, i);
    }
    function pD(e) {
      if (!ch(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = _p(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = aE(e), i = a && !Iu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Zo(function() {
          my(null, null, e, !1, function() {
            e._reactRootContainer = null, f1(e);
          });
        }), !0;
      } else {
        {
          var o = aE(e), s = !!(o && Iu(o)), h = e.nodeType === Zr && ch(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", h ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Du(qO), rg(GO), yf(KO), Rv(Ya), bv(_r), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), kd(mb), Pc(zS, iO, Zo);
    function hD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!vy(t))
        throw new Error("Target container is not a DOM element.");
      return WO(e, t, null, a);
    }
    function vD(e, t, a, i) {
      return dD(e, t, a, i);
    }
    var iE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Iu, Hf, rm, pu, Co, zS]
    };
    function mD(e, t) {
      return iE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), rD(e, t);
    }
    function yD(e, t, a) {
      return iE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), iD(e, t, a);
    }
    function gD(e) {
      return RC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Zo(e);
    }
    var SD = nD({
      findFiberByHostInstance: cc,
      bundleType: 1,
      version: ZS,
      rendererPackageName: "react-dom"
    });
    if (!SD && bn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var mx = window.location.protocol;
      /^(https?|file):$/.test(mx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (mx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iE, ni.createPortal = hD, ni.createRoot = mD, ni.findDOMNode = sD, ni.flushSync = gD, ni.hydrate = cD, ni.hydrateRoot = yD, ni.render = fD, ni.unmountComponentAtNode = pD, ni.unstable_batchedUpdates = zS, ni.unstable_renderSubtreeIntoContainer = vD, ni.version = ZS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), ni;
}
var Xx = {};
function Zx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (Xx.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zx);
    } catch (p) {
      console.error(p);
    }
  }
}
Xx.NODE_ENV === "production" ? (Zx(), yE.exports = AD()) : yE.exports = zD();
var UD = yE.exports, FD = {}, hh = UD;
if (FD.NODE_ENV === "production")
  gh.createRoot = hh.createRoot, gh.hydrateRoot = hh.hydrateRoot;
else {
  var Sy = hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  gh.createRoot = function(p, c) {
    Sy.usingClientEntryPoint = !0;
    try {
      return hh.createRoot(p, c);
    } finally {
      Sy.usingClientEntryPoint = !1;
    }
  }, gh.hydrateRoot = function(p, c, f) {
    Sy.usingClientEntryPoint = !0;
    try {
      return hh.hydrateRoot(p, c, f);
    } finally {
      Sy.usingClientEntryPoint = !1;
    }
  };
}
function Jx(p, c) {
  return function() {
    return p.apply(c, arguments);
  };
}
const { toString: jD } = Object.prototype, { getPrototypeOf: TE } = Object, Oy = /* @__PURE__ */ ((p) => (c) => {
  const f = jD.call(c);
  return p[f] || (p[f] = f.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), so = (p) => (p = p.toLowerCase(), (c) => Oy(c) === p), Dy = (p) => (c) => typeof c === p, { isArray: hd } = Array, Ch = Dy("undefined");
function PD(p) {
  return p !== null && !Ch(p) && p.constructor !== null && !Ch(p.constructor) && Hi(p.constructor.isBuffer) && p.constructor.isBuffer(p);
}
const eR = so("ArrayBuffer");
function HD(p) {
  let c;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? c = ArrayBuffer.isView(p) : c = p && p.buffer && eR(p.buffer), c;
}
const BD = Dy("string"), Hi = Dy("function"), tR = Dy("number"), Ly = (p) => p !== null && typeof p == "object", $D = (p) => p === !0 || p === !1, xy = (p) => {
  if (Oy(p) !== "object")
    return !1;
  const c = TE(p);
  return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(Symbol.toStringTag in p) && !(Symbol.iterator in p);
}, VD = so("Date"), ID = so("File"), YD = so("Blob"), WD = so("FileList"), QD = (p) => Ly(p) && Hi(p.pipe), qD = (p) => {
  let c;
  return p && (typeof FormData == "function" && p instanceof FormData || Hi(p.append) && ((c = Oy(p)) === "formdata" || // detect form-data instance
  c === "object" && Hi(p.toString) && p.toString() === "[object FormData]"));
}, GD = so("URLSearchParams"), KD = (p) => p.trim ? p.trim() : p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xh(p, c, { allOwnKeys: f = !1 } = {}) {
  if (p === null || typeof p > "u")
    return;
  let v, E;
  if (typeof p != "object" && (p = [p]), hd(p))
    for (v = 0, E = p.length; v < E; v++)
      c.call(null, p[v], v, p);
  else {
    const x = f ? Object.getOwnPropertyNames(p) : Object.keys(p), w = x.length;
    let g;
    for (v = 0; v < w; v++)
      g = x[v], c.call(null, p[g], g, p);
  }
}
function nR(p, c) {
  c = c.toLowerCase();
  const f = Object.keys(p);
  let v = f.length, E;
  for (; v-- > 0; )
    if (E = f[v], c === E.toLowerCase())
      return E;
  return null;
}
const rR = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, aR = (p) => !Ch(p) && p !== rR;
function gE() {
  const { caseless: p } = aR(this) && this || {}, c = {}, f = (v, E) => {
    const x = p && nR(c, E) || E;
    xy(c[x]) && xy(v) ? c[x] = gE(c[x], v) : xy(v) ? c[x] = gE({}, v) : hd(v) ? c[x] = v.slice() : c[x] = v;
  };
  for (let v = 0, E = arguments.length; v < E; v++)
    arguments[v] && xh(arguments[v], f);
  return c;
}
const XD = (p, c, f, { allOwnKeys: v } = {}) => (xh(c, (E, x) => {
  f && Hi(E) ? p[x] = Jx(E, f) : p[x] = E;
}, { allOwnKeys: v }), p), ZD = (p) => (p.charCodeAt(0) === 65279 && (p = p.slice(1)), p), JD = (p, c, f, v) => {
  p.prototype = Object.create(c.prototype, v), p.prototype.constructor = p, Object.defineProperty(p, "super", {
    value: c.prototype
  }), f && Object.assign(p.prototype, f);
}, eL = (p, c, f, v) => {
  let E, x, w;
  const g = {};
  if (c = c || {}, p == null) return c;
  do {
    for (E = Object.getOwnPropertyNames(p), x = E.length; x-- > 0; )
      w = E[x], (!v || v(w, p, c)) && !g[w] && (c[w] = p[w], g[w] = !0);
    p = f !== !1 && TE(p);
  } while (p && (!f || f(p, c)) && p !== Object.prototype);
  return c;
}, tL = (p, c, f) => {
  p = String(p), (f === void 0 || f > p.length) && (f = p.length), f -= c.length;
  const v = p.indexOf(c, f);
  return v !== -1 && v === f;
}, nL = (p) => {
  if (!p) return null;
  if (hd(p)) return p;
  let c = p.length;
  if (!tR(c)) return null;
  const f = new Array(c);
  for (; c-- > 0; )
    f[c] = p[c];
  return f;
}, rL = /* @__PURE__ */ ((p) => (c) => p && c instanceof p)(typeof Uint8Array < "u" && TE(Uint8Array)), aL = (p, c) => {
  const v = (p && p[Symbol.iterator]).call(p);
  let E;
  for (; (E = v.next()) && !E.done; ) {
    const x = E.value;
    c.call(p, x[0], x[1]);
  }
}, iL = (p, c) => {
  let f;
  const v = [];
  for (; (f = p.exec(c)) !== null; )
    v.push(f);
  return v;
}, lL = so("HTMLFormElement"), oL = (p) => p.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(f, v, E) {
    return v.toUpperCase() + E;
  }
), _x = (({ hasOwnProperty: p }) => (c, f) => p.call(c, f))(Object.prototype), uL = so("RegExp"), iR = (p, c) => {
  const f = Object.getOwnPropertyDescriptors(p), v = {};
  xh(f, (E, x) => {
    let w;
    (w = c(E, x, p)) !== !1 && (v[x] = w || E);
  }), Object.defineProperties(p, v);
}, sL = (p) => {
  iR(p, (c, f) => {
    if (Hi(p) && ["arguments", "caller", "callee"].indexOf(f) !== -1)
      return !1;
    const v = p[f];
    if (Hi(v)) {
      if (c.enumerable = !1, "writable" in c) {
        c.writable = !1;
        return;
      }
      c.set || (c.set = () => {
        throw Error("Can not rewrite read-only method '" + f + "'");
      });
    }
  });
}, cL = (p, c) => {
  const f = {}, v = (E) => {
    E.forEach((x) => {
      f[x] = !0;
    });
  };
  return hd(p) ? v(p) : v(String(p).split(c)), f;
}, fL = () => {
}, dL = (p, c) => (p = +p, Number.isFinite(p) ? p : c), uE = "abcdefghijklmnopqrstuvwxyz", Ox = "0123456789", lR = {
  DIGIT: Ox,
  ALPHA: uE,
  ALPHA_DIGIT: uE + uE.toUpperCase() + Ox
}, pL = (p = 16, c = lR.ALPHA_DIGIT) => {
  let f = "";
  const { length: v } = c;
  for (; p--; )
    f += c[Math.random() * v | 0];
  return f;
};
function hL(p) {
  return !!(p && Hi(p.append) && p[Symbol.toStringTag] === "FormData" && p[Symbol.iterator]);
}
const vL = (p) => {
  const c = new Array(10), f = (v, E) => {
    if (Ly(v)) {
      if (c.indexOf(v) >= 0)
        return;
      if (!("toJSON" in v)) {
        c[E] = v;
        const x = hd(v) ? [] : {};
        return xh(v, (w, g) => {
          const U = f(w, E + 1);
          !Ch(U) && (x[g] = U);
        }), c[E] = void 0, x;
      }
    }
    return v;
  };
  return f(p, 0);
}, mL = so("AsyncFunction"), yL = (p) => p && (Ly(p) || Hi(p)) && Hi(p.then) && Hi(p.catch), ie = {
  isArray: hd,
  isArrayBuffer: eR,
  isBuffer: PD,
  isFormData: qD,
  isArrayBufferView: HD,
  isString: BD,
  isNumber: tR,
  isBoolean: $D,
  isObject: Ly,
  isPlainObject: xy,
  isUndefined: Ch,
  isDate: VD,
  isFile: ID,
  isBlob: YD,
  isRegExp: uL,
  isFunction: Hi,
  isStream: QD,
  isURLSearchParams: GD,
  isTypedArray: rL,
  isFileList: WD,
  forEach: xh,
  merge: gE,
  extend: XD,
  trim: KD,
  stripBOM: ZD,
  inherits: JD,
  toFlatObject: eL,
  kindOf: Oy,
  kindOfTest: so,
  endsWith: tL,
  toArray: nL,
  forEachEntry: aL,
  matchAll: iL,
  isHTMLForm: lL,
  hasOwnProperty: _x,
  hasOwnProp: _x,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: iR,
  freezeMethods: sL,
  toObjectSet: cL,
  toCamelCase: oL,
  noop: fL,
  toFiniteNumber: dL,
  findKey: nR,
  global: rR,
  isContextDefined: aR,
  ALPHABET: lR,
  generateString: pL,
  isSpecCompliantForm: hL,
  toJSONObject: vL,
  isAsyncFn: mL,
  isThenable: yL
};
function Pt(p, c, f, v, E) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = p, this.name = "AxiosError", c && (this.code = c), f && (this.config = f), v && (this.request = v), E && (this.response = E);
}
ie.inherits(Pt, Error, {
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
      config: ie.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const oR = Pt.prototype, uR = {};
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
].forEach((p) => {
  uR[p] = { value: p };
});
Object.defineProperties(Pt, uR);
Object.defineProperty(oR, "isAxiosError", { value: !0 });
Pt.from = (p, c, f, v, E, x) => {
  const w = Object.create(oR);
  return ie.toFlatObject(p, w, function(U) {
    return U !== Error.prototype;
  }, (g) => g !== "isAxiosError"), Pt.call(w, p.message, c, f, v, E), w.cause = p, w.name = p.name, x && Object.assign(w, x), w;
};
const gL = null;
function SE(p) {
  return ie.isPlainObject(p) || ie.isArray(p);
}
function sR(p) {
  return ie.endsWith(p, "[]") ? p.slice(0, -2) : p;
}
function Dx(p, c, f) {
  return p ? p.concat(c).map(function(E, x) {
    return E = sR(E), !f && x ? "[" + E + "]" : E;
  }).join(f ? "." : "") : c;
}
function SL(p) {
  return ie.isArray(p) && !p.some(SE);
}
const EL = ie.toFlatObject(ie, {}, null, function(c) {
  return /^is[A-Z]/.test(c);
});
function Ny(p, c, f) {
  if (!ie.isObject(p))
    throw new TypeError("target must be an object");
  c = c || new FormData(), f = ie.toFlatObject(f, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(X, Ce) {
    return !ie.isUndefined(Ce[X]);
  });
  const v = f.metaTokens, E = f.visitor || z, x = f.dots, w = f.indexes, U = (f.Blob || typeof Blob < "u" && Blob) && ie.isSpecCompliantForm(c);
  if (!ie.isFunction(E))
    throw new TypeError("visitor must be a function");
  function $(K) {
    if (K === null) return "";
    if (ie.isDate(K))
      return K.toISOString();
    if (!U && ie.isBlob(K))
      throw new Pt("Blob is not supported. Use a Buffer instead.");
    return ie.isArrayBuffer(K) || ie.isTypedArray(K) ? U && typeof Blob == "function" ? new Blob([K]) : Buffer.from(K) : K;
  }
  function z(K, X, Ce) {
    let ut = K;
    if (K && !Ce && typeof K == "object") {
      if (ie.endsWith(X, "{}"))
        X = v ? X : X.slice(0, -2), K = JSON.stringify(K);
      else if (ie.isArray(K) && SL(K) || (ie.isFileList(K) || ie.endsWith(X, "[]")) && (ut = ie.toArray(K)))
        return X = sR(X), ut.forEach(function(Ye, Ae) {
          !(ie.isUndefined(Ye) || Ye === null) && c.append(
            // eslint-disable-next-line no-nested-ternary
            w === !0 ? Dx([X], Ae, x) : w === null ? X : X + "[]",
            $(Ye)
          );
        }), !1;
    }
    return SE(K) ? !0 : (c.append(Dx(Ce, X, x), $(K)), !1);
  }
  const F = [], I = Object.assign(EL, {
    defaultVisitor: z,
    convertValue: $,
    isVisitable: SE
  });
  function oe(K, X) {
    if (!ie.isUndefined(K)) {
      if (F.indexOf(K) !== -1)
        throw Error("Circular reference detected in " + X.join("."));
      F.push(K), ie.forEach(K, function(ut, ft) {
        (!(ie.isUndefined(ut) || ut === null) && E.call(
          c,
          ut,
          ie.isString(ft) ? ft.trim() : ft,
          X,
          I
        )) === !0 && oe(ut, X ? X.concat(ft) : [ft]);
      }), F.pop();
    }
  }
  if (!ie.isObject(p))
    throw new TypeError("data must be an object");
  return oe(p), c;
}
function Lx(p) {
  const c = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g, function(v) {
    return c[v];
  });
}
function kE(p, c) {
  this._pairs = [], p && Ny(p, this, c);
}
const cR = kE.prototype;
cR.append = function(c, f) {
  this._pairs.push([c, f]);
};
cR.toString = function(c) {
  const f = c ? function(v) {
    return c.call(this, v, Lx);
  } : Lx;
  return this._pairs.map(function(E) {
    return f(E[0]) + "=" + f(E[1]);
  }, "").join("&");
};
function wL(p) {
  return encodeURIComponent(p).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function fR(p, c, f) {
  if (!c)
    return p;
  const v = f && f.encode || wL, E = f && f.serialize;
  let x;
  if (E ? x = E(c, f) : x = ie.isURLSearchParams(c) ? c.toString() : new kE(c, f).toString(v), x) {
    const w = p.indexOf("#");
    w !== -1 && (p = p.slice(0, w)), p += (p.indexOf("?") === -1 ? "?" : "&") + x;
  }
  return p;
}
class Nx {
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
  use(c, f, v) {
    return this.handlers.push({
      fulfilled: c,
      rejected: f,
      synchronous: v ? v.synchronous : !1,
      runWhen: v ? v.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(c) {
    this.handlers[c] && (this.handlers[c] = null);
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
  forEach(c) {
    ie.forEach(this.handlers, function(v) {
      v !== null && c(v);
    });
  }
}
const dR = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, CL = typeof URLSearchParams < "u" ? URLSearchParams : kE, xL = typeof FormData < "u" ? FormData : null, RL = typeof Blob < "u" ? Blob : null, bL = {
  isBrowser: !0,
  classes: {
    URLSearchParams: CL,
    FormData: xL,
    Blob: RL
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, pR = typeof window < "u" && typeof document < "u", TL = ((p) => pR && ["ReactNative", "NativeScript", "NS"].indexOf(p) < 0)(typeof navigator < "u" && navigator.product), kL = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", _L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: pR,
  hasStandardBrowserEnv: TL,
  hasStandardBrowserWebWorkerEnv: kL
}, Symbol.toStringTag, { value: "Module" })), lo = {
  ..._L,
  ...bL
};
function OL(p, c) {
  return Ny(p, new lo.classes.URLSearchParams(), Object.assign({
    visitor: function(f, v, E, x) {
      return lo.isNode && ie.isBuffer(f) ? (this.append(v, f.toString("base64")), !1) : x.defaultVisitor.apply(this, arguments);
    }
  }, c));
}
function DL(p) {
  return ie.matchAll(/\w+|\[(\w*)]/g, p).map((c) => c[0] === "[]" ? "" : c[1] || c[0]);
}
function LL(p) {
  const c = {}, f = Object.keys(p);
  let v;
  const E = f.length;
  let x;
  for (v = 0; v < E; v++)
    x = f[v], c[x] = p[x];
  return c;
}
function hR(p) {
  function c(f, v, E, x) {
    let w = f[x++];
    const g = Number.isFinite(+w), U = x >= f.length;
    return w = !w && ie.isArray(E) ? E.length : w, U ? (ie.hasOwnProp(E, w) ? E[w] = [E[w], v] : E[w] = v, !g) : ((!E[w] || !ie.isObject(E[w])) && (E[w] = []), c(f, v, E[w], x) && ie.isArray(E[w]) && (E[w] = LL(E[w])), !g);
  }
  if (ie.isFormData(p) && ie.isFunction(p.entries)) {
    const f = {};
    return ie.forEachEntry(p, (v, E) => {
      c(DL(v), E, f, 0);
    }), f;
  }
  return null;
}
function NL(p, c, f) {
  if (ie.isString(p))
    try {
      return (c || JSON.parse)(p), ie.trim(p);
    } catch (v) {
      if (v.name !== "SyntaxError")
        throw v;
    }
  return (f || JSON.stringify)(p);
}
const Rh = {
  transitional: dR,
  adapter: ["xhr", "http"],
  transformRequest: [function(c, f) {
    const v = f.getContentType() || "", E = v.indexOf("application/json") > -1, x = ie.isObject(c);
    if (x && ie.isHTMLForm(c) && (c = new FormData(c)), ie.isFormData(c))
      return E && E ? JSON.stringify(hR(c)) : c;
    if (ie.isArrayBuffer(c) || ie.isBuffer(c) || ie.isStream(c) || ie.isFile(c) || ie.isBlob(c))
      return c;
    if (ie.isArrayBufferView(c))
      return c.buffer;
    if (ie.isURLSearchParams(c))
      return f.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), c.toString();
    let g;
    if (x) {
      if (v.indexOf("application/x-www-form-urlencoded") > -1)
        return OL(c, this.formSerializer).toString();
      if ((g = ie.isFileList(c)) || v.indexOf("multipart/form-data") > -1) {
        const U = this.env && this.env.FormData;
        return Ny(
          g ? { "files[]": c } : c,
          U && new U(),
          this.formSerializer
        );
      }
    }
    return x || E ? (f.setContentType("application/json", !1), NL(c)) : c;
  }],
  transformResponse: [function(c) {
    const f = this.transitional || Rh.transitional, v = f && f.forcedJSONParsing, E = this.responseType === "json";
    if (c && ie.isString(c) && (v && !this.responseType || E)) {
      const w = !(f && f.silentJSONParsing) && E;
      try {
        return JSON.parse(c);
      } catch (g) {
        if (w)
          throw g.name === "SyntaxError" ? Pt.from(g, Pt.ERR_BAD_RESPONSE, this, null, this.response) : g;
      }
    }
    return c;
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
    FormData: lo.classes.FormData,
    Blob: lo.classes.Blob
  },
  validateStatus: function(c) {
    return c >= 200 && c < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
ie.forEach(["delete", "get", "head", "post", "put", "patch"], (p) => {
  Rh.headers[p] = {};
});
const ML = ie.toObjectSet([
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
]), AL = (p) => {
  const c = {};
  let f, v, E;
  return p && p.split(`
`).forEach(function(w) {
    E = w.indexOf(":"), f = w.substring(0, E).trim().toLowerCase(), v = w.substring(E + 1).trim(), !(!f || c[f] && ML[f]) && (f === "set-cookie" ? c[f] ? c[f].push(v) : c[f] = [v] : c[f] = c[f] ? c[f] + ", " + v : v);
  }), c;
}, Mx = Symbol("internals");
function vh(p) {
  return p && String(p).trim().toLowerCase();
}
function Ry(p) {
  return p === !1 || p == null ? p : ie.isArray(p) ? p.map(Ry) : String(p);
}
function zL(p) {
  const c = /* @__PURE__ */ Object.create(null), f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let v;
  for (; v = f.exec(p); )
    c[v[1]] = v[2];
  return c;
}
const UL = (p) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(p.trim());
function sE(p, c, f, v, E) {
  if (ie.isFunction(v))
    return v.call(this, c, f);
  if (E && (c = f), !!ie.isString(c)) {
    if (ie.isString(v))
      return c.indexOf(v) !== -1;
    if (ie.isRegExp(v))
      return v.test(c);
  }
}
function FL(p) {
  return p.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, f, v) => f.toUpperCase() + v);
}
function jL(p, c) {
  const f = ie.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((v) => {
    Object.defineProperty(p, v + f, {
      value: function(E, x, w) {
        return this[v].call(this, c, E, x, w);
      },
      configurable: !0
    });
  });
}
class Bi {
  constructor(c) {
    c && this.set(c);
  }
  set(c, f, v) {
    const E = this;
    function x(g, U, $) {
      const z = vh(U);
      if (!z)
        throw new Error("header name must be a non-empty string");
      const F = ie.findKey(E, z);
      (!F || E[F] === void 0 || $ === !0 || $ === void 0 && E[F] !== !1) && (E[F || U] = Ry(g));
    }
    const w = (g, U) => ie.forEach(g, ($, z) => x($, z, U));
    return ie.isPlainObject(c) || c instanceof this.constructor ? w(c, f) : ie.isString(c) && (c = c.trim()) && !UL(c) ? w(AL(c), f) : c != null && x(f, c, v), this;
  }
  get(c, f) {
    if (c = vh(c), c) {
      const v = ie.findKey(this, c);
      if (v) {
        const E = this[v];
        if (!f)
          return E;
        if (f === !0)
          return zL(E);
        if (ie.isFunction(f))
          return f.call(this, E, v);
        if (ie.isRegExp(f))
          return f.exec(E);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, f) {
    if (c = vh(c), c) {
      const v = ie.findKey(this, c);
      return !!(v && this[v] !== void 0 && (!f || sE(this, this[v], v, f)));
    }
    return !1;
  }
  delete(c, f) {
    const v = this;
    let E = !1;
    function x(w) {
      if (w = vh(w), w) {
        const g = ie.findKey(v, w);
        g && (!f || sE(v, v[g], g, f)) && (delete v[g], E = !0);
      }
    }
    return ie.isArray(c) ? c.forEach(x) : x(c), E;
  }
  clear(c) {
    const f = Object.keys(this);
    let v = f.length, E = !1;
    for (; v--; ) {
      const x = f[v];
      (!c || sE(this, this[x], x, c, !0)) && (delete this[x], E = !0);
    }
    return E;
  }
  normalize(c) {
    const f = this, v = {};
    return ie.forEach(this, (E, x) => {
      const w = ie.findKey(v, x);
      if (w) {
        f[w] = Ry(E), delete f[x];
        return;
      }
      const g = c ? FL(x) : String(x).trim();
      g !== x && delete f[x], f[g] = Ry(E), v[g] = !0;
    }), this;
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const f = /* @__PURE__ */ Object.create(null);
    return ie.forEach(this, (v, E) => {
      v != null && v !== !1 && (f[E] = c && ie.isArray(v) ? v.join(", ") : v);
    }), f;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([c, f]) => c + ": " + f).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(c) {
    return c instanceof this ? c : new this(c);
  }
  static concat(c, ...f) {
    const v = new this(c);
    return f.forEach((E) => v.set(E)), v;
  }
  static accessor(c) {
    const v = (this[Mx] = this[Mx] = {
      accessors: {}
    }).accessors, E = this.prototype;
    function x(w) {
      const g = vh(w);
      v[g] || (jL(E, w), v[g] = !0);
    }
    return ie.isArray(c) ? c.forEach(x) : x(c), this;
  }
}
Bi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ie.reduceDescriptors(Bi.prototype, ({ value: p }, c) => {
  let f = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => p,
    set(v) {
      this[f] = v;
    }
  };
});
ie.freezeMethods(Bi);
function cE(p, c) {
  const f = this || Rh, v = c || f, E = Bi.from(v.headers);
  let x = v.data;
  return ie.forEach(p, function(g) {
    x = g.call(f, x, E.normalize(), c ? c.status : void 0);
  }), E.normalize(), x;
}
function vR(p) {
  return !!(p && p.__CANCEL__);
}
function bh(p, c, f) {
  Pt.call(this, p ?? "canceled", Pt.ERR_CANCELED, c, f), this.name = "CanceledError";
}
ie.inherits(bh, Pt, {
  __CANCEL__: !0
});
function PL(p, c, f) {
  const v = f.config.validateStatus;
  !f.status || !v || v(f.status) ? p(f) : c(new Pt(
    "Request failed with status code " + f.status,
    [Pt.ERR_BAD_REQUEST, Pt.ERR_BAD_RESPONSE][Math.floor(f.status / 100) - 4],
    f.config,
    f.request,
    f
  ));
}
const HL = lo.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(p, c, f, v, E, x) {
      const w = [p + "=" + encodeURIComponent(c)];
      ie.isNumber(f) && w.push("expires=" + new Date(f).toGMTString()), ie.isString(v) && w.push("path=" + v), ie.isString(E) && w.push("domain=" + E), x === !0 && w.push("secure"), document.cookie = w.join("; ");
    },
    read(p) {
      const c = document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"));
      return c ? decodeURIComponent(c[3]) : null;
    },
    remove(p) {
      this.write(p, "", Date.now() - 864e5);
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
function BL(p) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(p);
}
function $L(p, c) {
  return c ? p.replace(/\/+$/, "") + "/" + c.replace(/^\/+/, "") : p;
}
function mR(p, c) {
  return p && !BL(c) ? $L(p, c) : c;
}
const VL = lo.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const c = /(msie|trident)/i.test(navigator.userAgent), f = document.createElement("a");
    let v;
    function E(x) {
      let w = x;
      return c && (f.setAttribute("href", w), w = f.href), f.setAttribute("href", w), {
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
    return v = E(window.location.href), function(w) {
      const g = ie.isString(w) ? E(w) : w;
      return g.protocol === v.protocol && g.host === v.host;
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
function IL(p) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(p);
  return c && c[1] || "";
}
function YL(p, c) {
  p = p || 10;
  const f = new Array(p), v = new Array(p);
  let E = 0, x = 0, w;
  return c = c !== void 0 ? c : 1e3, function(U) {
    const $ = Date.now(), z = v[x];
    w || (w = $), f[E] = U, v[E] = $;
    let F = x, I = 0;
    for (; F !== E; )
      I += f[F++], F = F % p;
    if (E = (E + 1) % p, E === x && (x = (x + 1) % p), $ - w < c)
      return;
    const oe = z && $ - z;
    return oe ? Math.round(I * 1e3 / oe) : void 0;
  };
}
function Ax(p, c) {
  let f = 0;
  const v = YL(50, 250);
  return (E) => {
    const x = E.loaded, w = E.lengthComputable ? E.total : void 0, g = x - f, U = v(g), $ = x <= w;
    f = x;
    const z = {
      loaded: x,
      total: w,
      progress: w ? x / w : void 0,
      bytes: g,
      rate: U || void 0,
      estimated: U && w && $ ? (w - x) / U : void 0,
      event: E
    };
    z[c ? "download" : "upload"] = !0, p(z);
  };
}
const WL = typeof XMLHttpRequest < "u", QL = WL && function(p) {
  return new Promise(function(f, v) {
    let E = p.data;
    const x = Bi.from(p.headers).normalize();
    let { responseType: w, withXSRFToken: g } = p, U;
    function $() {
      p.cancelToken && p.cancelToken.unsubscribe(U), p.signal && p.signal.removeEventListener("abort", U);
    }
    let z;
    if (ie.isFormData(E)) {
      if (lo.hasStandardBrowserEnv || lo.hasStandardBrowserWebWorkerEnv)
        x.setContentType(!1);
      else if ((z = x.getContentType()) !== !1) {
        const [X, ...Ce] = z ? z.split(";").map((ut) => ut.trim()).filter(Boolean) : [];
        x.setContentType([X || "multipart/form-data", ...Ce].join("; "));
      }
    }
    let F = new XMLHttpRequest();
    if (p.auth) {
      const X = p.auth.username || "", Ce = p.auth.password ? unescape(encodeURIComponent(p.auth.password)) : "";
      x.set("Authorization", "Basic " + btoa(X + ":" + Ce));
    }
    const I = mR(p.baseURL, p.url);
    F.open(p.method.toUpperCase(), fR(I, p.params, p.paramsSerializer), !0), F.timeout = p.timeout;
    function oe() {
      if (!F)
        return;
      const X = Bi.from(
        "getAllResponseHeaders" in F && F.getAllResponseHeaders()
      ), ut = {
        data: !w || w === "text" || w === "json" ? F.responseText : F.response,
        status: F.status,
        statusText: F.statusText,
        headers: X,
        config: p,
        request: F
      };
      PL(function(Ye) {
        f(Ye), $();
      }, function(Ye) {
        v(Ye), $();
      }, ut), F = null;
    }
    if ("onloadend" in F ? F.onloadend = oe : F.onreadystatechange = function() {
      !F || F.readyState !== 4 || F.status === 0 && !(F.responseURL && F.responseURL.indexOf("file:") === 0) || setTimeout(oe);
    }, F.onabort = function() {
      F && (v(new Pt("Request aborted", Pt.ECONNABORTED, p, F)), F = null);
    }, F.onerror = function() {
      v(new Pt("Network Error", Pt.ERR_NETWORK, p, F)), F = null;
    }, F.ontimeout = function() {
      let Ce = p.timeout ? "timeout of " + p.timeout + "ms exceeded" : "timeout exceeded";
      const ut = p.transitional || dR;
      p.timeoutErrorMessage && (Ce = p.timeoutErrorMessage), v(new Pt(
        Ce,
        ut.clarifyTimeoutError ? Pt.ETIMEDOUT : Pt.ECONNABORTED,
        p,
        F
      )), F = null;
    }, lo.hasStandardBrowserEnv && (g && ie.isFunction(g) && (g = g(p)), g || g !== !1 && VL(I))) {
      const X = p.xsrfHeaderName && p.xsrfCookieName && HL.read(p.xsrfCookieName);
      X && x.set(p.xsrfHeaderName, X);
    }
    E === void 0 && x.setContentType(null), "setRequestHeader" in F && ie.forEach(x.toJSON(), function(Ce, ut) {
      F.setRequestHeader(ut, Ce);
    }), ie.isUndefined(p.withCredentials) || (F.withCredentials = !!p.withCredentials), w && w !== "json" && (F.responseType = p.responseType), typeof p.onDownloadProgress == "function" && F.addEventListener("progress", Ax(p.onDownloadProgress, !0)), typeof p.onUploadProgress == "function" && F.upload && F.upload.addEventListener("progress", Ax(p.onUploadProgress)), (p.cancelToken || p.signal) && (U = (X) => {
      F && (v(!X || X.type ? new bh(null, p, F) : X), F.abort(), F = null);
    }, p.cancelToken && p.cancelToken.subscribe(U), p.signal && (p.signal.aborted ? U() : p.signal.addEventListener("abort", U)));
    const K = IL(I);
    if (K && lo.protocols.indexOf(K) === -1) {
      v(new Pt("Unsupported protocol " + K + ":", Pt.ERR_BAD_REQUEST, p));
      return;
    }
    F.send(E || null);
  });
}, EE = {
  http: gL,
  xhr: QL
};
ie.forEach(EE, (p, c) => {
  if (p) {
    try {
      Object.defineProperty(p, "name", { value: c });
    } catch {
    }
    Object.defineProperty(p, "adapterName", { value: c });
  }
});
const zx = (p) => `- ${p}`, qL = (p) => ie.isFunction(p) || p === null || p === !1, yR = {
  getAdapter: (p) => {
    p = ie.isArray(p) ? p : [p];
    const { length: c } = p;
    let f, v;
    const E = {};
    for (let x = 0; x < c; x++) {
      f = p[x];
      let w;
      if (v = f, !qL(f) && (v = EE[(w = String(f)).toLowerCase()], v === void 0))
        throw new Pt(`Unknown adapter '${w}'`);
      if (v)
        break;
      E[w || "#" + x] = v;
    }
    if (!v) {
      const x = Object.entries(E).map(
        ([g, U]) => `adapter ${g} ` + (U === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let w = c ? x.length > 1 ? `since :
` + x.map(zx).join(`
`) : " " + zx(x[0]) : "as no adapter specified";
      throw new Pt(
        "There is no suitable adapter to dispatch the request " + w,
        "ERR_NOT_SUPPORT"
      );
    }
    return v;
  },
  adapters: EE
};
function fE(p) {
  if (p.cancelToken && p.cancelToken.throwIfRequested(), p.signal && p.signal.aborted)
    throw new bh(null, p);
}
function Ux(p) {
  return fE(p), p.headers = Bi.from(p.headers), p.data = cE.call(
    p,
    p.transformRequest
  ), ["post", "put", "patch"].indexOf(p.method) !== -1 && p.headers.setContentType("application/x-www-form-urlencoded", !1), yR.getAdapter(p.adapter || Rh.adapter)(p).then(function(v) {
    return fE(p), v.data = cE.call(
      p,
      p.transformResponse,
      v
    ), v.headers = Bi.from(v.headers), v;
  }, function(v) {
    return vR(v) || (fE(p), v && v.response && (v.response.data = cE.call(
      p,
      p.transformResponse,
      v.response
    ), v.response.headers = Bi.from(v.response.headers))), Promise.reject(v);
  });
}
const Fx = (p) => p instanceof Bi ? p.toJSON() : p;
function fd(p, c) {
  c = c || {};
  const f = {};
  function v($, z, F) {
    return ie.isPlainObject($) && ie.isPlainObject(z) ? ie.merge.call({ caseless: F }, $, z) : ie.isPlainObject(z) ? ie.merge({}, z) : ie.isArray(z) ? z.slice() : z;
  }
  function E($, z, F) {
    if (ie.isUndefined(z)) {
      if (!ie.isUndefined($))
        return v(void 0, $, F);
    } else return v($, z, F);
  }
  function x($, z) {
    if (!ie.isUndefined(z))
      return v(void 0, z);
  }
  function w($, z) {
    if (ie.isUndefined(z)) {
      if (!ie.isUndefined($))
        return v(void 0, $);
    } else return v(void 0, z);
  }
  function g($, z, F) {
    if (F in c)
      return v($, z);
    if (F in p)
      return v(void 0, $);
  }
  const U = {
    url: x,
    method: x,
    data: x,
    baseURL: w,
    transformRequest: w,
    transformResponse: w,
    paramsSerializer: w,
    timeout: w,
    timeoutMessage: w,
    withCredentials: w,
    withXSRFToken: w,
    adapter: w,
    responseType: w,
    xsrfCookieName: w,
    xsrfHeaderName: w,
    onUploadProgress: w,
    onDownloadProgress: w,
    decompress: w,
    maxContentLength: w,
    maxBodyLength: w,
    beforeRedirect: w,
    transport: w,
    httpAgent: w,
    httpsAgent: w,
    cancelToken: w,
    socketPath: w,
    responseEncoding: w,
    validateStatus: g,
    headers: ($, z) => E(Fx($), Fx(z), !0)
  };
  return ie.forEach(Object.keys(Object.assign({}, p, c)), function(z) {
    const F = U[z] || E, I = F(p[z], c[z], z);
    ie.isUndefined(I) && F !== g || (f[z] = I);
  }), f;
}
const gR = "1.6.2", _E = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((p, c) => {
  _E[p] = function(v) {
    return typeof v === p || "a" + (c < 1 ? "n " : " ") + p;
  };
});
const jx = {};
_E.transitional = function(c, f, v) {
  function E(x, w) {
    return "[Axios v" + gR + "] Transitional option '" + x + "'" + w + (v ? ". " + v : "");
  }
  return (x, w, g) => {
    if (c === !1)
      throw new Pt(
        E(w, " has been removed" + (f ? " in " + f : "")),
        Pt.ERR_DEPRECATED
      );
    return f && !jx[w] && (jx[w] = !0, console.warn(
      E(
        w,
        " has been deprecated since v" + f + " and will be removed in the near future"
      )
    )), c ? c(x, w, g) : !0;
  };
};
function GL(p, c, f) {
  if (typeof p != "object")
    throw new Pt("options must be an object", Pt.ERR_BAD_OPTION_VALUE);
  const v = Object.keys(p);
  let E = v.length;
  for (; E-- > 0; ) {
    const x = v[E], w = c[x];
    if (w) {
      const g = p[x], U = g === void 0 || w(g, x, p);
      if (U !== !0)
        throw new Pt("option " + x + " must be " + U, Pt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (f !== !0)
      throw new Pt("Unknown option " + x, Pt.ERR_BAD_OPTION);
  }
}
const wE = {
  assertOptions: GL,
  validators: _E
}, ls = wE.validators;
class Tc {
  constructor(c) {
    this.defaults = c, this.interceptors = {
      request: new Nx(),
      response: new Nx()
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
  request(c, f) {
    typeof c == "string" ? (f = f || {}, f.url = c) : f = c || {}, f = fd(this.defaults, f);
    const { transitional: v, paramsSerializer: E, headers: x } = f;
    v !== void 0 && wE.assertOptions(v, {
      silentJSONParsing: ls.transitional(ls.boolean),
      forcedJSONParsing: ls.transitional(ls.boolean),
      clarifyTimeoutError: ls.transitional(ls.boolean)
    }, !1), E != null && (ie.isFunction(E) ? f.paramsSerializer = {
      serialize: E
    } : wE.assertOptions(E, {
      encode: ls.function,
      serialize: ls.function
    }, !0)), f.method = (f.method || this.defaults.method || "get").toLowerCase();
    let w = x && ie.merge(
      x.common,
      x[f.method]
    );
    x && ie.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (K) => {
        delete x[K];
      }
    ), f.headers = Bi.concat(w, x);
    const g = [];
    let U = !0;
    this.interceptors.request.forEach(function(X) {
      typeof X.runWhen == "function" && X.runWhen(f) === !1 || (U = U && X.synchronous, g.unshift(X.fulfilled, X.rejected));
    });
    const $ = [];
    this.interceptors.response.forEach(function(X) {
      $.push(X.fulfilled, X.rejected);
    });
    let z, F = 0, I;
    if (!U) {
      const K = [Ux.bind(this), void 0];
      for (K.unshift.apply(K, g), K.push.apply(K, $), I = K.length, z = Promise.resolve(f); F < I; )
        z = z.then(K[F++], K[F++]);
      return z;
    }
    I = g.length;
    let oe = f;
    for (F = 0; F < I; ) {
      const K = g[F++], X = g[F++];
      try {
        oe = K(oe);
      } catch (Ce) {
        X.call(this, Ce);
        break;
      }
    }
    try {
      z = Ux.call(this, oe);
    } catch (K) {
      return Promise.reject(K);
    }
    for (F = 0, I = $.length; F < I; )
      z = z.then($[F++], $[F++]);
    return z;
  }
  getUri(c) {
    c = fd(this.defaults, c);
    const f = mR(c.baseURL, c.url);
    return fR(f, c.params, c.paramsSerializer);
  }
}
ie.forEach(["delete", "get", "head", "options"], function(c) {
  Tc.prototype[c] = function(f, v) {
    return this.request(fd(v || {}, {
      method: c,
      url: f,
      data: (v || {}).data
    }));
  };
});
ie.forEach(["post", "put", "patch"], function(c) {
  function f(v) {
    return function(x, w, g) {
      return this.request(fd(g || {}, {
        method: c,
        headers: v ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: x,
        data: w
      }));
    };
  }
  Tc.prototype[c] = f(), Tc.prototype[c + "Form"] = f(!0);
});
class OE {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let f;
    this.promise = new Promise(function(x) {
      f = x;
    });
    const v = this;
    this.promise.then((E) => {
      if (!v._listeners) return;
      let x = v._listeners.length;
      for (; x-- > 0; )
        v._listeners[x](E);
      v._listeners = null;
    }), this.promise.then = (E) => {
      let x;
      const w = new Promise((g) => {
        v.subscribe(g), x = g;
      }).then(E);
      return w.cancel = function() {
        v.unsubscribe(x);
      }, w;
    }, c(function(x, w, g) {
      v.reason || (v.reason = new bh(x, w, g), f(v.reason));
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
  subscribe(c) {
    if (this.reason) {
      c(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(c) : this._listeners = [c];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(c) {
    if (!this._listeners)
      return;
    const f = this._listeners.indexOf(c);
    f !== -1 && this._listeners.splice(f, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let c;
    return {
      token: new OE(function(E) {
        c = E;
      }),
      cancel: c
    };
  }
}
function KL(p) {
  return function(f) {
    return p.apply(null, f);
  };
}
function XL(p) {
  return ie.isObject(p) && p.isAxiosError === !0;
}
const CE = {
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
Object.entries(CE).forEach(([p, c]) => {
  CE[c] = p;
});
function SR(p) {
  const c = new Tc(p), f = Jx(Tc.prototype.request, c);
  return ie.extend(f, Tc.prototype, c, { allOwnKeys: !0 }), ie.extend(f, c, null, { allOwnKeys: !0 }), f.create = function(E) {
    return SR(fd(p, E));
  }, f;
}
const lr = SR(Rh);
lr.Axios = Tc;
lr.CanceledError = bh;
lr.CancelToken = OE;
lr.isCancel = vR;
lr.VERSION = gR;
lr.toFormData = Ny;
lr.AxiosError = Pt;
lr.Cancel = lr.CanceledError;
lr.all = function(c) {
  return Promise.all(c);
};
lr.spread = KL;
lr.isAxiosError = XL;
lr.mergeConfig = fd;
lr.AxiosHeaders = Bi;
lr.formToJSON = (p) => hR(ie.isHTMLForm(p) ? new FormData(p) : p);
lr.getAdapter = yR.getAdapter;
lr.HttpStatusCode = CE;
lr.default = lr;
var ER = {}, dd = {};
Object.defineProperty(dd, "__esModule", { value: !0 });
dd.cssValue = dd.parseLengthAndUnit = void 0;
var ZL = {
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
function wR(p) {
  if (typeof p == "number")
    return {
      value: p,
      unit: "px"
    };
  var c, f = (p.match(/^[0-9.]*/) || "").toString();
  f.includes(".") ? c = parseFloat(f) : c = parseInt(f, 10);
  var v = (p.match(/[^0-9]*$/) || "").toString();
  return ZL[v] ? {
    value: c,
    unit: v
  } : (console.warn("React Spinners: ".concat(p, " is not a valid css value. Defaulting to ").concat(c, "px.")), {
    value: c,
    unit: "px"
  });
}
dd.parseLengthAndUnit = wR;
function JL(p) {
  var c = wR(p);
  return "".concat(c.value).concat(c.unit);
}
dd.cssValue = JL;
var My = {};
Object.defineProperty(My, "__esModule", { value: !0 });
My.createAnimation = void 0;
var eN = function(p, c, f) {
  var v = "react-spinners-".concat(p, "-").concat(f);
  if (typeof window > "u" || !window.document)
    return v;
  var E = document.createElement("style");
  document.head.appendChild(E);
  var x = E.sheet, w = `
    @keyframes `.concat(v, ` {
      `).concat(c, `
    }
  `);
  return x && x.insertRule(w, 0), v;
};
My.createAnimation = eN;
var by = wl && wl.__assign || function() {
  return by = Object.assign || function(p) {
    for (var c, f = 1, v = arguments.length; f < v; f++) {
      c = arguments[f];
      for (var E in c) Object.prototype.hasOwnProperty.call(c, E) && (p[E] = c[E]);
    }
    return p;
  }, by.apply(this, arguments);
}, tN = wl && wl.__createBinding || (Object.create ? function(p, c, f, v) {
  v === void 0 && (v = f);
  var E = Object.getOwnPropertyDescriptor(c, f);
  (!E || ("get" in E ? !c.__esModule : E.writable || E.configurable)) && (E = { enumerable: !0, get: function() {
    return c[f];
  } }), Object.defineProperty(p, v, E);
} : function(p, c, f, v) {
  v === void 0 && (v = f), p[v] = c[f];
}), nN = wl && wl.__setModuleDefault || (Object.create ? function(p, c) {
  Object.defineProperty(p, "default", { enumerable: !0, value: c });
} : function(p, c) {
  p.default = c;
}), rN = wl && wl.__importStar || function(p) {
  if (p && p.__esModule) return p;
  var c = {};
  if (p != null) for (var f in p) f !== "default" && Object.prototype.hasOwnProperty.call(p, f) && tN(c, p, f);
  return nN(c, p), c;
}, aN = wl && wl.__rest || function(p, c) {
  var f = {};
  for (var v in p) Object.prototype.hasOwnProperty.call(p, v) && c.indexOf(v) < 0 && (f[v] = p[v]);
  if (p != null && typeof Object.getOwnPropertySymbols == "function")
    for (var E = 0, v = Object.getOwnPropertySymbols(p); E < v.length; E++)
      c.indexOf(v[E]) < 0 && Object.prototype.propertyIsEnumerable.call(p, v[E]) && (f[v[E]] = p[v[E]]);
  return f;
};
Object.defineProperty(ER, "__esModule", { value: !0 });
var Ey = rN(Ir), dE = dd, iN = My, lN = (0, iN.createAnimation)("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function oN(p) {
  var c = p.loading, f = c === void 0 ? !0 : c, v = p.color, E = v === void 0 ? "#000000" : v, x = p.speedMultiplier, w = x === void 0 ? 1 : x, g = p.cssOverride, U = g === void 0 ? {} : g, $ = p.size, z = $ === void 0 ? 15 : $, F = p.margin, I = F === void 0 ? 2 : F, oe = aN(p, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), K = by({ display: "inherit" }, U), X = function(Ce) {
    return {
      backgroundColor: E,
      width: (0, dE.cssValue)(z),
      height: (0, dE.cssValue)(z),
      margin: (0, dE.cssValue)(I),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(lN, " ").concat(0.75 / w, "s ").concat(Ce * 0.12 / w, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return f ? Ey.createElement(
    "span",
    by({ style: K }, oe),
    Ey.createElement("span", { style: X(1) }),
    Ey.createElement("span", { style: X(2) }),
    Ey.createElement("span", { style: X(3) })
  ) : null;
}
var uN = ER.default = oN, CR = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(p) {
  (function() {
    var c = {}.hasOwnProperty;
    function f() {
      for (var x = "", w = 0; w < arguments.length; w++) {
        var g = arguments[w];
        g && (x = E(x, v(g)));
      }
      return x;
    }
    function v(x) {
      if (typeof x == "string" || typeof x == "number")
        return x;
      if (typeof x != "object")
        return "";
      if (Array.isArray(x))
        return f.apply(null, x);
      if (x.toString !== Object.prototype.toString && !x.toString.toString().includes("[native code]"))
        return x.toString();
      var w = "";
      for (var g in x)
        c.call(x, g) && x[g] && (w = E(w, g));
      return w;
    }
    function E(x, w) {
      return w ? x ? x + " " + w : x + w : x;
    }
    p.exports ? (f.default = f, p.exports = f) : window.classNames = f;
  })();
})(CR);
var sN = CR.exports;
const cN = /* @__PURE__ */ bE(sN);
function DE() {
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
let Oc = DE();
function xR(p) {
  Oc = p;
}
const RR = /[&<>"']/, fN = new RegExp(RR.source, "g"), bR = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, dN = new RegExp(bR.source, "g"), pN = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Px = (p) => pN[p];
function mi(p, c) {
  if (c) {
    if (RR.test(p))
      return p.replace(fN, Px);
  } else if (bR.test(p))
    return p.replace(dN, Px);
  return p;
}
const hN = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function vN(p) {
  return p.replace(hN, (c, f) => (f = f.toLowerCase(), f === "colon" ? ":" : f.charAt(0) === "#" ? f.charAt(1) === "x" ? String.fromCharCode(parseInt(f.substring(2), 16)) : String.fromCharCode(+f.substring(1)) : ""));
}
const mN = /(^|[^\[])\^/g;
function sn(p, c) {
  let f = typeof p == "string" ? p : p.source;
  c = c || "";
  const v = {
    replace: (E, x) => {
      let w = typeof x == "string" ? x : x.source;
      return w = w.replace(mN, "$1"), f = f.replace(E, w), v;
    },
    getRegex: () => new RegExp(f, c)
  };
  return v;
}
function Hx(p) {
  try {
    p = encodeURI(p).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return p;
}
const Eh = { exec: () => null };
function Bx(p, c) {
  const f = p.replace(/\|/g, (x, w, g) => {
    let U = !1, $ = w;
    for (; --$ >= 0 && g[$] === "\\"; )
      U = !U;
    return U ? "|" : " |";
  }), v = f.split(/ \|/);
  let E = 0;
  if (v[0].trim() || v.shift(), v.length > 0 && !v[v.length - 1].trim() && v.pop(), c)
    if (v.length > c)
      v.splice(c);
    else
      for (; v.length < c; )
        v.push("");
  for (; E < v.length; E++)
    v[E] = v[E].trim().replace(/\\\|/g, "|");
  return v;
}
function wy(p, c, f) {
  const v = p.length;
  if (v === 0)
    return "";
  let E = 0;
  for (; E < v; ) {
    const x = p.charAt(v - E - 1);
    if (x === c && !f)
      E++;
    else if (x !== c && f)
      E++;
    else
      break;
  }
  return p.slice(0, v - E);
}
function yN(p, c) {
  if (p.indexOf(c[1]) === -1)
    return -1;
  let f = 0;
  for (let v = 0; v < p.length; v++)
    if (p[v] === "\\")
      v++;
    else if (p[v] === c[0])
      f++;
    else if (p[v] === c[1] && (f--, f < 0))
      return v;
  return -1;
}
function $x(p, c, f, v) {
  const E = c.href, x = c.title ? mi(c.title) : null, w = p[1].replace(/\\([\[\]])/g, "$1");
  if (p[0].charAt(0) !== "!") {
    v.state.inLink = !0;
    const g = {
      type: "link",
      raw: f,
      href: E,
      title: x,
      text: w,
      tokens: v.inlineTokens(w)
    };
    return v.state.inLink = !1, g;
  }
  return {
    type: "image",
    raw: f,
    href: E,
    title: x,
    text: mi(w)
  };
}
function gN(p, c) {
  const f = p.match(/^(\s+)(?:```)/);
  if (f === null)
    return c;
  const v = f[1];
  return c.split(`
`).map((E) => {
    const x = E.match(/^\s+/);
    if (x === null)
      return E;
    const [w] = x;
    return w.length >= v.length ? E.slice(v.length) : E;
  }).join(`
`);
}
class Ty {
  // set by the lexer
  constructor(c) {
    xn(this, "options");
    xn(this, "rules");
    // set by the lexer
    xn(this, "lexer");
    this.options = c || Oc;
  }
  space(c) {
    const f = this.rules.block.newline.exec(c);
    if (f && f[0].length > 0)
      return {
        type: "space",
        raw: f[0]
      };
  }
  code(c) {
    const f = this.rules.block.code.exec(c);
    if (f) {
      const v = f[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: f[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? v : wy(v, `
`)
      };
    }
  }
  fences(c) {
    const f = this.rules.block.fences.exec(c);
    if (f) {
      const v = f[0], E = gN(v, f[3] || "");
      return {
        type: "code",
        raw: v,
        lang: f[2] ? f[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : f[2],
        text: E
      };
    }
  }
  heading(c) {
    const f = this.rules.block.heading.exec(c);
    if (f) {
      let v = f[2].trim();
      if (/#$/.test(v)) {
        const E = wy(v, "#");
        (this.options.pedantic || !E || / $/.test(E)) && (v = E.trim());
      }
      return {
        type: "heading",
        raw: f[0],
        depth: f[1].length,
        text: v,
        tokens: this.lexer.inline(v)
      };
    }
  }
  hr(c) {
    const f = this.rules.block.hr.exec(c);
    if (f)
      return {
        type: "hr",
        raw: f[0]
      };
  }
  blockquote(c) {
    const f = this.rules.block.blockquote.exec(c);
    if (f) {
      const v = wy(f[0].replace(/^ *>[ \t]?/gm, ""), `
`), E = this.lexer.state.top;
      this.lexer.state.top = !0;
      const x = this.lexer.blockTokens(v);
      return this.lexer.state.top = E, {
        type: "blockquote",
        raw: f[0],
        tokens: x,
        text: v
      };
    }
  }
  list(c) {
    let f = this.rules.block.list.exec(c);
    if (f) {
      let v = f[1].trim();
      const E = v.length > 1, x = {
        type: "list",
        raw: "",
        ordered: E,
        start: E ? +v.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      v = E ? `\\d{1,9}\\${v.slice(-1)}` : `\\${v}`, this.options.pedantic && (v = E ? v : "[*+-]");
      const w = new RegExp(`^( {0,3}${v})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let g = "", U = "", $ = !1;
      for (; c; ) {
        let z = !1;
        if (!(f = w.exec(c)) || this.rules.block.hr.test(c))
          break;
        g = f[0], c = c.substring(g.length);
        let F = f[2].split(`
`, 1)[0].replace(/^\t+/, (ut) => " ".repeat(3 * ut.length)), I = c.split(`
`, 1)[0], oe = 0;
        this.options.pedantic ? (oe = 2, U = F.trimStart()) : (oe = f[2].search(/[^ ]/), oe = oe > 4 ? 1 : oe, U = F.slice(oe), oe += f[1].length);
        let K = !1;
        if (!F && /^ *$/.test(I) && (g += I + `
`, c = c.substring(I.length + 1), z = !0), !z) {
          const ut = new RegExp(`^ {0,${Math.min(3, oe - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), ft = new RegExp(`^ {0,${Math.min(3, oe - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), Ye = new RegExp(`^ {0,${Math.min(3, oe - 1)}}(?:\`\`\`|~~~)`), Ae = new RegExp(`^ {0,${Math.min(3, oe - 1)}}#`);
          for (; c; ) {
            const gt = c.split(`
`, 1)[0];
            if (I = gt, this.options.pedantic && (I = I.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), Ye.test(I) || Ae.test(I) || ut.test(I) || ft.test(c))
              break;
            if (I.search(/[^ ]/) >= oe || !I.trim())
              U += `
` + I.slice(oe);
            else {
              if (K || F.search(/[^ ]/) >= 4 || Ye.test(F) || Ae.test(F) || ft.test(F))
                break;
              U += `
` + I;
            }
            !K && !I.trim() && (K = !0), g += gt + `
`, c = c.substring(gt.length + 1), F = I.slice(oe);
          }
        }
        x.loose || ($ ? x.loose = !0 : /\n *\n *$/.test(g) && ($ = !0));
        let X = null, Ce;
        this.options.gfm && (X = /^\[[ xX]\] /.exec(U), X && (Ce = X[0] !== "[ ] ", U = U.replace(/^\[[ xX]\] +/, ""))), x.items.push({
          type: "list_item",
          raw: g,
          task: !!X,
          checked: Ce,
          loose: !1,
          text: U,
          tokens: []
        }), x.raw += g;
      }
      x.items[x.items.length - 1].raw = g.trimEnd(), x.items[x.items.length - 1].text = U.trimEnd(), x.raw = x.raw.trimEnd();
      for (let z = 0; z < x.items.length; z++)
        if (this.lexer.state.top = !1, x.items[z].tokens = this.lexer.blockTokens(x.items[z].text, []), !x.loose) {
          const F = x.items[z].tokens.filter((oe) => oe.type === "space"), I = F.length > 0 && F.some((oe) => /\n.*\n/.test(oe.raw));
          x.loose = I;
        }
      if (x.loose)
        for (let z = 0; z < x.items.length; z++)
          x.items[z].loose = !0;
      return x;
    }
  }
  html(c) {
    const f = this.rules.block.html.exec(c);
    if (f)
      return {
        type: "html",
        block: !0,
        raw: f[0],
        pre: f[1] === "pre" || f[1] === "script" || f[1] === "style",
        text: f[0]
      };
  }
  def(c) {
    const f = this.rules.block.def.exec(c);
    if (f) {
      const v = f[1].toLowerCase().replace(/\s+/g, " "), E = f[2] ? f[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", x = f[3] ? f[3].substring(1, f[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : f[3];
      return {
        type: "def",
        tag: v,
        raw: f[0],
        href: E,
        title: x
      };
    }
  }
  table(c) {
    const f = this.rules.block.table.exec(c);
    if (!f || !/[:|]/.test(f[2]))
      return;
    const v = Bx(f[1]), E = f[2].replace(/^\||\| *$/g, "").split("|"), x = f[3] && f[3].trim() ? f[3].replace(/\n[ \t]*$/, "").split(`
`) : [], w = {
      type: "table",
      raw: f[0],
      header: [],
      align: [],
      rows: []
    };
    if (v.length === E.length) {
      for (const g of E)
        /^ *-+: *$/.test(g) ? w.align.push("right") : /^ *:-+: *$/.test(g) ? w.align.push("center") : /^ *:-+ *$/.test(g) ? w.align.push("left") : w.align.push(null);
      for (const g of v)
        w.header.push({
          text: g,
          tokens: this.lexer.inline(g)
        });
      for (const g of x)
        w.rows.push(Bx(g, w.header.length).map((U) => ({
          text: U,
          tokens: this.lexer.inline(U)
        })));
      return w;
    }
  }
  lheading(c) {
    const f = this.rules.block.lheading.exec(c);
    if (f)
      return {
        type: "heading",
        raw: f[0],
        depth: f[2].charAt(0) === "=" ? 1 : 2,
        text: f[1],
        tokens: this.lexer.inline(f[1])
      };
  }
  paragraph(c) {
    const f = this.rules.block.paragraph.exec(c);
    if (f) {
      const v = f[1].charAt(f[1].length - 1) === `
` ? f[1].slice(0, -1) : f[1];
      return {
        type: "paragraph",
        raw: f[0],
        text: v,
        tokens: this.lexer.inline(v)
      };
    }
  }
  text(c) {
    const f = this.rules.block.text.exec(c);
    if (f)
      return {
        type: "text",
        raw: f[0],
        text: f[0],
        tokens: this.lexer.inline(f[0])
      };
  }
  escape(c) {
    const f = this.rules.inline.escape.exec(c);
    if (f)
      return {
        type: "escape",
        raw: f[0],
        text: mi(f[1])
      };
  }
  tag(c) {
    const f = this.rules.inline.tag.exec(c);
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
  link(c) {
    const f = this.rules.inline.link.exec(c);
    if (f) {
      const v = f[2].trim();
      if (!this.options.pedantic && /^</.test(v)) {
        if (!/>$/.test(v))
          return;
        const w = wy(v.slice(0, -1), "\\");
        if ((v.length - w.length) % 2 === 0)
          return;
      } else {
        const w = yN(f[2], "()");
        if (w > -1) {
          const U = (f[0].indexOf("!") === 0 ? 5 : 4) + f[1].length + w;
          f[2] = f[2].substring(0, w), f[0] = f[0].substring(0, U).trim(), f[3] = "";
        }
      }
      let E = f[2], x = "";
      if (this.options.pedantic) {
        const w = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(E);
        w && (E = w[1], x = w[3]);
      } else
        x = f[3] ? f[3].slice(1, -1) : "";
      return E = E.trim(), /^</.test(E) && (this.options.pedantic && !/>$/.test(v) ? E = E.slice(1) : E = E.slice(1, -1)), $x(f, {
        href: E && E.replace(this.rules.inline.anyPunctuation, "$1"),
        title: x && x.replace(this.rules.inline.anyPunctuation, "$1")
      }, f[0], this.lexer);
    }
  }
  reflink(c, f) {
    let v;
    if ((v = this.rules.inline.reflink.exec(c)) || (v = this.rules.inline.nolink.exec(c))) {
      const E = (v[2] || v[1]).replace(/\s+/g, " "), x = f[E.toLowerCase()];
      if (!x) {
        const w = v[0].charAt(0);
        return {
          type: "text",
          raw: w,
          text: w
        };
      }
      return $x(v, x, v[0], this.lexer);
    }
  }
  emStrong(c, f, v = "") {
    let E = this.rules.inline.emStrongLDelim.exec(c);
    if (!E || E[3] && v.match(/[\p{L}\p{N}]/u))
      return;
    if (!(E[1] || E[2] || "") || !v || this.rules.inline.punctuation.exec(v)) {
      const w = [...E[0]].length - 1;
      let g, U, $ = w, z = 0;
      const F = E[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (F.lastIndex = 0, f = f.slice(-1 * c.length + w); (E = F.exec(f)) != null; ) {
        if (g = E[1] || E[2] || E[3] || E[4] || E[5] || E[6], !g)
          continue;
        if (U = [...g].length, E[3] || E[4]) {
          $ += U;
          continue;
        } else if ((E[5] || E[6]) && w % 3 && !((w + U) % 3)) {
          z += U;
          continue;
        }
        if ($ -= U, $ > 0)
          continue;
        U = Math.min(U, U + $ + z);
        const I = [...E[0]][0].length, oe = c.slice(0, w + E.index + I + U);
        if (Math.min(w, U) % 2) {
          const X = oe.slice(1, -1);
          return {
            type: "em",
            raw: oe,
            text: X,
            tokens: this.lexer.inlineTokens(X)
          };
        }
        const K = oe.slice(2, -2);
        return {
          type: "strong",
          raw: oe,
          text: K,
          tokens: this.lexer.inlineTokens(K)
        };
      }
    }
  }
  codespan(c) {
    const f = this.rules.inline.code.exec(c);
    if (f) {
      let v = f[2].replace(/\n/g, " ");
      const E = /[^ ]/.test(v), x = /^ /.test(v) && / $/.test(v);
      return E && x && (v = v.substring(1, v.length - 1)), v = mi(v, !0), {
        type: "codespan",
        raw: f[0],
        text: v
      };
    }
  }
  br(c) {
    const f = this.rules.inline.br.exec(c);
    if (f)
      return {
        type: "br",
        raw: f[0]
      };
  }
  del(c) {
    const f = this.rules.inline.del.exec(c);
    if (f)
      return {
        type: "del",
        raw: f[0],
        text: f[2],
        tokens: this.lexer.inlineTokens(f[2])
      };
  }
  autolink(c) {
    const f = this.rules.inline.autolink.exec(c);
    if (f) {
      let v, E;
      return f[2] === "@" ? (v = mi(f[1]), E = "mailto:" + v) : (v = mi(f[1]), E = v), {
        type: "link",
        raw: f[0],
        text: v,
        href: E,
        tokens: [
          {
            type: "text",
            raw: v,
            text: v
          }
        ]
      };
    }
  }
  url(c) {
    var v;
    let f;
    if (f = this.rules.inline.url.exec(c)) {
      let E, x;
      if (f[2] === "@")
        E = mi(f[0]), x = "mailto:" + E;
      else {
        let w;
        do
          w = f[0], f[0] = ((v = this.rules.inline._backpedal.exec(f[0])) == null ? void 0 : v[0]) ?? "";
        while (w !== f[0]);
        E = mi(f[0]), f[1] === "www." ? x = "http://" + f[0] : x = f[0];
      }
      return {
        type: "link",
        raw: f[0],
        text: E,
        href: x,
        tokens: [
          {
            type: "text",
            raw: E,
            text: E
          }
        ]
      };
    }
  }
  inlineText(c) {
    const f = this.rules.inline.text.exec(c);
    if (f) {
      let v;
      return this.lexer.state.inRawBlock ? v = f[0] : v = mi(f[0]), {
        type: "text",
        raw: f[0],
        text: v
      };
    }
  }
}
const SN = /^(?: *(?:\n|$))+/, EN = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, wN = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Th = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, CN = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, TR = /(?:[*+-]|\d{1,9}[.)])/, kR = sn(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, TR).getRegex(), LE = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, xN = /^[^\n]+/, NE = /(?!\s*\])(?:\\.|[^\[\]\\])+/, RN = sn(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", NE).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), bN = sn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, TR).getRegex(), Ay = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ME = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, TN = sn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", ME).replace("tag", Ay).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), _R = sn(LE).replace("hr", Th).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ay).getRegex(), kN = sn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", _R).getRegex(), AE = {
  blockquote: kN,
  code: EN,
  def: RN,
  fences: wN,
  heading: CN,
  hr: Th,
  html: TN,
  lheading: kR,
  list: bN,
  newline: SN,
  paragraph: _R,
  table: Eh,
  text: xN
}, Vx = sn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Th).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ay).getRegex(), _N = {
  ...AE,
  table: Vx,
  paragraph: sn(LE).replace("hr", Th).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Vx).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ay).getRegex()
}, ON = {
  ...AE,
  html: sn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ME).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Eh,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: sn(LE).replace("hr", Th).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", kR).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, OR = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, DN = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, DR = /^( {2,}|\\)\n(?!\s*$)/, LN = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, kh = "\\p{P}\\p{S}", NN = sn(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, kh).getRegex(), MN = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, AN = sn(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, kh).getRegex(), zN = sn("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, kh).getRegex(), UN = sn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, kh).getRegex(), FN = sn(/\\([punct])/, "gu").replace(/punct/g, kh).getRegex(), jN = sn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), PN = sn(ME).replace("(?:-->|$)", "-->").getRegex(), HN = sn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", PN).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ky = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, BN = sn(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", ky).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), LR = sn(/^!?\[(label)\]\[(ref)\]/).replace("label", ky).replace("ref", NE).getRegex(), NR = sn(/^!?\[(ref)\](?:\[\])?/).replace("ref", NE).getRegex(), $N = sn("reflink|nolink(?!\\()", "g").replace("reflink", LR).replace("nolink", NR).getRegex(), zE = {
  _backpedal: Eh,
  // only used for GFM url
  anyPunctuation: FN,
  autolink: jN,
  blockSkip: MN,
  br: DR,
  code: DN,
  del: Eh,
  emStrongLDelim: AN,
  emStrongRDelimAst: zN,
  emStrongRDelimUnd: UN,
  escape: OR,
  link: BN,
  nolink: NR,
  punctuation: NN,
  reflink: LR,
  reflinkSearch: $N,
  tag: HN,
  text: LN,
  url: Eh
}, VN = {
  ...zE,
  link: sn(/^!?\[(label)\]\((.*?)\)/).replace("label", ky).getRegex(),
  reflink: sn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ky).getRegex()
}, xE = {
  ...zE,
  escape: sn(OR).replace("])", "~|])").getRegex(),
  url: sn(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, IN = {
  ...xE,
  br: sn(DR).replace("{2,}", "*").getRegex(),
  text: sn(xE.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Cy = {
  normal: AE,
  gfm: _N,
  pedantic: ON
}, mh = {
  normal: zE,
  gfm: xE,
  breaks: IN,
  pedantic: VN
};
class oo {
  constructor(c) {
    xn(this, "tokens");
    xn(this, "options");
    xn(this, "state");
    xn(this, "tokenizer");
    xn(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = c || Oc, this.options.tokenizer = this.options.tokenizer || new Ty(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const f = {
      block: Cy.normal,
      inline: mh.normal
    };
    this.options.pedantic ? (f.block = Cy.pedantic, f.inline = mh.pedantic) : this.options.gfm && (f.block = Cy.gfm, this.options.breaks ? f.inline = mh.breaks : f.inline = mh.gfm), this.tokenizer.rules = f;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Cy,
      inline: mh
    };
  }
  /**
   * Static Lex Method
   */
  static lex(c, f) {
    return new oo(f).lex(c);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(c, f) {
    return new oo(f).inlineTokens(c);
  }
  /**
   * Preprocessing
   */
  lex(c) {
    c = c.replace(/\r\n|\r/g, `
`), this.blockTokens(c, this.tokens);
    for (let f = 0; f < this.inlineQueue.length; f++) {
      const v = this.inlineQueue[f];
      this.inlineTokens(v.src, v.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(c, f = []) {
    this.options.pedantic ? c = c.replace(/\t/g, "    ").replace(/^ +$/gm, "") : c = c.replace(/^( *)(\t+)/gm, (g, U, $) => U + "    ".repeat($.length));
    let v, E, x, w;
    for (; c; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((g) => (v = g.call({ lexer: this }, c, f)) ? (c = c.substring(v.raw.length), f.push(v), !0) : !1))) {
        if (v = this.tokenizer.space(c)) {
          c = c.substring(v.raw.length), v.raw.length === 1 && f.length > 0 ? f[f.length - 1].raw += `
` : f.push(v);
          continue;
        }
        if (v = this.tokenizer.code(c)) {
          c = c.substring(v.raw.length), E = f[f.length - 1], E && (E.type === "paragraph" || E.type === "text") ? (E.raw += `
` + v.raw, E.text += `
` + v.text, this.inlineQueue[this.inlineQueue.length - 1].src = E.text) : f.push(v);
          continue;
        }
        if (v = this.tokenizer.fences(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.heading(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.hr(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.blockquote(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.list(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.html(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.def(c)) {
          c = c.substring(v.raw.length), E = f[f.length - 1], E && (E.type === "paragraph" || E.type === "text") ? (E.raw += `
` + v.raw, E.text += `
` + v.raw, this.inlineQueue[this.inlineQueue.length - 1].src = E.text) : this.tokens.links[v.tag] || (this.tokens.links[v.tag] = {
            href: v.href,
            title: v.title
          });
          continue;
        }
        if (v = this.tokenizer.table(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.lheading(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (x = c, this.options.extensions && this.options.extensions.startBlock) {
          let g = 1 / 0;
          const U = c.slice(1);
          let $;
          this.options.extensions.startBlock.forEach((z) => {
            $ = z.call({ lexer: this }, U), typeof $ == "number" && $ >= 0 && (g = Math.min(g, $));
          }), g < 1 / 0 && g >= 0 && (x = c.substring(0, g + 1));
        }
        if (this.state.top && (v = this.tokenizer.paragraph(x))) {
          E = f[f.length - 1], w && E.type === "paragraph" ? (E.raw += `
` + v.raw, E.text += `
` + v.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = E.text) : f.push(v), w = x.length !== c.length, c = c.substring(v.raw.length);
          continue;
        }
        if (v = this.tokenizer.text(c)) {
          c = c.substring(v.raw.length), E = f[f.length - 1], E && E.type === "text" ? (E.raw += `
` + v.raw, E.text += `
` + v.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = E.text) : f.push(v);
          continue;
        }
        if (c) {
          const g = "Infinite loop on byte: " + c.charCodeAt(0);
          if (this.options.silent) {
            console.error(g);
            break;
          } else
            throw new Error(g);
        }
      }
    return this.state.top = !0, f;
  }
  inline(c, f = []) {
    return this.inlineQueue.push({ src: c, tokens: f }), f;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(c, f = []) {
    let v, E, x, w = c, g, U, $;
    if (this.tokens.links) {
      const z = Object.keys(this.tokens.links);
      if (z.length > 0)
        for (; (g = this.tokenizer.rules.inline.reflinkSearch.exec(w)) != null; )
          z.includes(g[0].slice(g[0].lastIndexOf("[") + 1, -1)) && (w = w.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + w.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (g = this.tokenizer.rules.inline.blockSkip.exec(w)) != null; )
      w = w.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + w.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (g = this.tokenizer.rules.inline.anyPunctuation.exec(w)) != null; )
      w = w.slice(0, g.index) + "++" + w.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; c; )
      if (U || ($ = ""), U = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((z) => (v = z.call({ lexer: this }, c, f)) ? (c = c.substring(v.raw.length), f.push(v), !0) : !1))) {
        if (v = this.tokenizer.escape(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.tag(c)) {
          c = c.substring(v.raw.length), E = f[f.length - 1], E && v.type === "text" && E.type === "text" ? (E.raw += v.raw, E.text += v.text) : f.push(v);
          continue;
        }
        if (v = this.tokenizer.link(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.reflink(c, this.tokens.links)) {
          c = c.substring(v.raw.length), E = f[f.length - 1], E && v.type === "text" && E.type === "text" ? (E.raw += v.raw, E.text += v.text) : f.push(v);
          continue;
        }
        if (v = this.tokenizer.emStrong(c, w, $)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.codespan(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.br(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.del(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (v = this.tokenizer.autolink(c)) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (!this.state.inLink && (v = this.tokenizer.url(c))) {
          c = c.substring(v.raw.length), f.push(v);
          continue;
        }
        if (x = c, this.options.extensions && this.options.extensions.startInline) {
          let z = 1 / 0;
          const F = c.slice(1);
          let I;
          this.options.extensions.startInline.forEach((oe) => {
            I = oe.call({ lexer: this }, F), typeof I == "number" && I >= 0 && (z = Math.min(z, I));
          }), z < 1 / 0 && z >= 0 && (x = c.substring(0, z + 1));
        }
        if (v = this.tokenizer.inlineText(x)) {
          c = c.substring(v.raw.length), v.raw.slice(-1) !== "_" && ($ = v.raw.slice(-1)), U = !0, E = f[f.length - 1], E && E.type === "text" ? (E.raw += v.raw, E.text += v.text) : f.push(v);
          continue;
        }
        if (c) {
          const z = "Infinite loop on byte: " + c.charCodeAt(0);
          if (this.options.silent) {
            console.error(z);
            break;
          } else
            throw new Error(z);
        }
      }
    return f;
  }
}
class _y {
  constructor(c) {
    xn(this, "options");
    this.options = c || Oc;
  }
  code(c, f, v) {
    var x;
    const E = (x = (f || "").match(/^\S*/)) == null ? void 0 : x[0];
    return c = c.replace(/\n$/, "") + `
`, E ? '<pre><code class="language-' + mi(E) + '">' + (v ? c : mi(c, !0)) + `</code></pre>
` : "<pre><code>" + (v ? c : mi(c, !0)) + `</code></pre>
`;
  }
  blockquote(c) {
    return `<blockquote>
${c}</blockquote>
`;
  }
  html(c, f) {
    return c;
  }
  heading(c, f, v) {
    return `<h${f}>${c}</h${f}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(c, f, v) {
    const E = f ? "ol" : "ul", x = f && v !== 1 ? ' start="' + v + '"' : "";
    return "<" + E + x + `>
` + c + "</" + E + `>
`;
  }
  listitem(c, f, v) {
    return `<li>${c}</li>
`;
  }
  checkbox(c) {
    return "<input " + (c ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(c) {
    return `<p>${c}</p>
`;
  }
  table(c, f) {
    return f && (f = `<tbody>${f}</tbody>`), `<table>
<thead>
` + c + `</thead>
` + f + `</table>
`;
  }
  tablerow(c) {
    return `<tr>
${c}</tr>
`;
  }
  tablecell(c, f) {
    const v = f.header ? "th" : "td";
    return (f.align ? `<${v} align="${f.align}">` : `<${v}>`) + c + `</${v}>
`;
  }
  /**
   * span level renderer
   */
  strong(c) {
    return `<strong>${c}</strong>`;
  }
  em(c) {
    return `<em>${c}</em>`;
  }
  codespan(c) {
    return `<code>${c}</code>`;
  }
  br() {
    return "<br>";
  }
  del(c) {
    return `<del>${c}</del>`;
  }
  link(c, f, v) {
    const E = Hx(c);
    if (E === null)
      return v;
    c = E;
    let x = '<a href="' + c + '"';
    return f && (x += ' title="' + f + '"'), x += ">" + v + "</a>", x;
  }
  image(c, f, v) {
    const E = Hx(c);
    if (E === null)
      return v;
    c = E;
    let x = `<img src="${c}" alt="${v}"`;
    return f && (x += ` title="${f}"`), x += ">", x;
  }
  text(c) {
    return c;
  }
}
class UE {
  // no need for block level renderers
  strong(c) {
    return c;
  }
  em(c) {
    return c;
  }
  codespan(c) {
    return c;
  }
  del(c) {
    return c;
  }
  html(c) {
    return c;
  }
  text(c) {
    return c;
  }
  link(c, f, v) {
    return "" + v;
  }
  image(c, f, v) {
    return "" + v;
  }
  br() {
    return "";
  }
}
class uo {
  constructor(c) {
    xn(this, "options");
    xn(this, "renderer");
    xn(this, "textRenderer");
    this.options = c || Oc, this.options.renderer = this.options.renderer || new _y(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new UE();
  }
  /**
   * Static Parse Method
   */
  static parse(c, f) {
    return new uo(f).parse(c);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(c, f) {
    return new uo(f).parseInline(c);
  }
  /**
   * Parse Loop
   */
  parse(c, f = !0) {
    let v = "";
    for (let E = 0; E < c.length; E++) {
      const x = c[E];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[x.type]) {
        const w = x, g = this.options.extensions.renderers[w.type].call({ parser: this }, w);
        if (g !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(w.type)) {
          v += g || "";
          continue;
        }
      }
      switch (x.type) {
        case "space":
          continue;
        case "hr": {
          v += this.renderer.hr();
          continue;
        }
        case "heading": {
          const w = x;
          v += this.renderer.heading(this.parseInline(w.tokens), w.depth, vN(this.parseInline(w.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const w = x;
          v += this.renderer.code(w.text, w.lang, !!w.escaped);
          continue;
        }
        case "table": {
          const w = x;
          let g = "", U = "";
          for (let z = 0; z < w.header.length; z++)
            U += this.renderer.tablecell(this.parseInline(w.header[z].tokens), { header: !0, align: w.align[z] });
          g += this.renderer.tablerow(U);
          let $ = "";
          for (let z = 0; z < w.rows.length; z++) {
            const F = w.rows[z];
            U = "";
            for (let I = 0; I < F.length; I++)
              U += this.renderer.tablecell(this.parseInline(F[I].tokens), { header: !1, align: w.align[I] });
            $ += this.renderer.tablerow(U);
          }
          v += this.renderer.table(g, $);
          continue;
        }
        case "blockquote": {
          const w = x, g = this.parse(w.tokens);
          v += this.renderer.blockquote(g);
          continue;
        }
        case "list": {
          const w = x, g = w.ordered, U = w.start, $ = w.loose;
          let z = "";
          for (let F = 0; F < w.items.length; F++) {
            const I = w.items[F], oe = I.checked, K = I.task;
            let X = "";
            if (I.task) {
              const Ce = this.renderer.checkbox(!!oe);
              $ ? I.tokens.length > 0 && I.tokens[0].type === "paragraph" ? (I.tokens[0].text = Ce + " " + I.tokens[0].text, I.tokens[0].tokens && I.tokens[0].tokens.length > 0 && I.tokens[0].tokens[0].type === "text" && (I.tokens[0].tokens[0].text = Ce + " " + I.tokens[0].tokens[0].text)) : I.tokens.unshift({
                type: "text",
                text: Ce + " "
              }) : X += Ce + " ";
            }
            X += this.parse(I.tokens, $), z += this.renderer.listitem(X, K, !!oe);
          }
          v += this.renderer.list(z, g, U);
          continue;
        }
        case "html": {
          const w = x;
          v += this.renderer.html(w.text, w.block);
          continue;
        }
        case "paragraph": {
          const w = x;
          v += this.renderer.paragraph(this.parseInline(w.tokens));
          continue;
        }
        case "text": {
          let w = x, g = w.tokens ? this.parseInline(w.tokens) : w.text;
          for (; E + 1 < c.length && c[E + 1].type === "text"; )
            w = c[++E], g += `
` + (w.tokens ? this.parseInline(w.tokens) : w.text);
          v += f ? this.renderer.paragraph(g) : g;
          continue;
        }
        default: {
          const w = 'Token with "' + x.type + '" type was not found.';
          if (this.options.silent)
            return console.error(w), "";
          throw new Error(w);
        }
      }
    }
    return v;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(c, f) {
    f = f || this.renderer;
    let v = "";
    for (let E = 0; E < c.length; E++) {
      const x = c[E];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[x.type]) {
        const w = this.options.extensions.renderers[x.type].call({ parser: this }, x);
        if (w !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(x.type)) {
          v += w || "";
          continue;
        }
      }
      switch (x.type) {
        case "escape": {
          const w = x;
          v += f.text(w.text);
          break;
        }
        case "html": {
          const w = x;
          v += f.html(w.text);
          break;
        }
        case "link": {
          const w = x;
          v += f.link(w.href, w.title, this.parseInline(w.tokens, f));
          break;
        }
        case "image": {
          const w = x;
          v += f.image(w.href, w.title, w.text);
          break;
        }
        case "strong": {
          const w = x;
          v += f.strong(this.parseInline(w.tokens, f));
          break;
        }
        case "em": {
          const w = x;
          v += f.em(this.parseInline(w.tokens, f));
          break;
        }
        case "codespan": {
          const w = x;
          v += f.codespan(w.text);
          break;
        }
        case "br": {
          v += f.br();
          break;
        }
        case "del": {
          const w = x;
          v += f.del(this.parseInline(w.tokens, f));
          break;
        }
        case "text": {
          const w = x;
          v += f.text(w.text);
          break;
        }
        default: {
          const w = 'Token with "' + x.type + '" type was not found.';
          if (this.options.silent)
            return console.error(w), "";
          throw new Error(w);
        }
      }
    }
    return v;
  }
}
class wh {
  constructor(c) {
    xn(this, "options");
    this.options = c || Oc;
  }
  /**
   * Process markdown before marked
   */
  preprocess(c) {
    return c;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(c) {
    return c;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(c) {
    return c;
  }
}
xn(wh, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var _c, RE, MR;
class YN {
  constructor(...c) {
    gx(this, _c);
    xn(this, "defaults", DE());
    xn(this, "options", this.setOptions);
    xn(this, "parse", yy(this, _c, RE).call(this, oo.lex, uo.parse));
    xn(this, "parseInline", yy(this, _c, RE).call(this, oo.lexInline, uo.parseInline));
    xn(this, "Parser", uo);
    xn(this, "Renderer", _y);
    xn(this, "TextRenderer", UE);
    xn(this, "Lexer", oo);
    xn(this, "Tokenizer", Ty);
    xn(this, "Hooks", wh);
    this.use(...c);
  }
  /**
   * Run callback for every token
   */
  walkTokens(c, f) {
    var E, x;
    let v = [];
    for (const w of c)
      switch (v = v.concat(f.call(this, w)), w.type) {
        case "table": {
          const g = w;
          for (const U of g.header)
            v = v.concat(this.walkTokens(U.tokens, f));
          for (const U of g.rows)
            for (const $ of U)
              v = v.concat(this.walkTokens($.tokens, f));
          break;
        }
        case "list": {
          const g = w;
          v = v.concat(this.walkTokens(g.items, f));
          break;
        }
        default: {
          const g = w;
          (x = (E = this.defaults.extensions) == null ? void 0 : E.childTokens) != null && x[g.type] ? this.defaults.extensions.childTokens[g.type].forEach((U) => {
            const $ = g[U].flat(1 / 0);
            v = v.concat(this.walkTokens($, f));
          }) : g.tokens && (v = v.concat(this.walkTokens(g.tokens, f)));
        }
      }
    return v;
  }
  use(...c) {
    const f = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return c.forEach((v) => {
      const E = { ...v };
      if (E.async = this.defaults.async || E.async || !1, v.extensions && (v.extensions.forEach((x) => {
        if (!x.name)
          throw new Error("extension name required");
        if ("renderer" in x) {
          const w = f.renderers[x.name];
          w ? f.renderers[x.name] = function(...g) {
            let U = x.renderer.apply(this, g);
            return U === !1 && (U = w.apply(this, g)), U;
          } : f.renderers[x.name] = x.renderer;
        }
        if ("tokenizer" in x) {
          if (!x.level || x.level !== "block" && x.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const w = f[x.level];
          w ? w.unshift(x.tokenizer) : f[x.level] = [x.tokenizer], x.start && (x.level === "block" ? f.startBlock ? f.startBlock.push(x.start) : f.startBlock = [x.start] : x.level === "inline" && (f.startInline ? f.startInline.push(x.start) : f.startInline = [x.start]));
        }
        "childTokens" in x && x.childTokens && (f.childTokens[x.name] = x.childTokens);
      }), E.extensions = f), v.renderer) {
        const x = this.defaults.renderer || new _y(this.defaults);
        for (const w in v.renderer) {
          if (!(w in x))
            throw new Error(`renderer '${w}' does not exist`);
          if (w === "options")
            continue;
          const g = w, U = v.renderer[g], $ = x[g];
          x[g] = (...z) => {
            let F = U.apply(x, z);
            return F === !1 && (F = $.apply(x, z)), F || "";
          };
        }
        E.renderer = x;
      }
      if (v.tokenizer) {
        const x = this.defaults.tokenizer || new Ty(this.defaults);
        for (const w in v.tokenizer) {
          if (!(w in x))
            throw new Error(`tokenizer '${w}' does not exist`);
          if (["options", "rules", "lexer"].includes(w))
            continue;
          const g = w, U = v.tokenizer[g], $ = x[g];
          x[g] = (...z) => {
            let F = U.apply(x, z);
            return F === !1 && (F = $.apply(x, z)), F;
          };
        }
        E.tokenizer = x;
      }
      if (v.hooks) {
        const x = this.defaults.hooks || new wh();
        for (const w in v.hooks) {
          if (!(w in x))
            throw new Error(`hook '${w}' does not exist`);
          if (w === "options")
            continue;
          const g = w, U = v.hooks[g], $ = x[g];
          wh.passThroughHooks.has(w) ? x[g] = (z) => {
            if (this.defaults.async)
              return Promise.resolve(U.call(x, z)).then((I) => $.call(x, I));
            const F = U.call(x, z);
            return $.call(x, F);
          } : x[g] = (...z) => {
            let F = U.apply(x, z);
            return F === !1 && (F = $.apply(x, z)), F;
          };
        }
        E.hooks = x;
      }
      if (v.walkTokens) {
        const x = this.defaults.walkTokens, w = v.walkTokens;
        E.walkTokens = function(g) {
          let U = [];
          return U.push(w.call(this, g)), x && (U = U.concat(x.call(this, g))), U;
        };
      }
      this.defaults = { ...this.defaults, ...E };
    }), this;
  }
  setOptions(c) {
    return this.defaults = { ...this.defaults, ...c }, this;
  }
  lexer(c, f) {
    return oo.lex(c, f ?? this.defaults);
  }
  parser(c, f) {
    return uo.parse(c, f ?? this.defaults);
  }
}
_c = new WeakSet(), RE = function(c, f) {
  return (v, E) => {
    const x = { ...E }, w = { ...this.defaults, ...x };
    this.defaults.async === !0 && x.async === !1 && (w.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), w.async = !0);
    const g = yy(this, _c, MR).call(this, !!w.silent, !!w.async);
    if (typeof v > "u" || v === null)
      return g(new Error("marked(): input parameter is undefined or null"));
    if (typeof v != "string")
      return g(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(v) + ", string expected"));
    if (w.hooks && (w.hooks.options = w), w.async)
      return Promise.resolve(w.hooks ? w.hooks.preprocess(v) : v).then((U) => c(U, w)).then((U) => w.hooks ? w.hooks.processAllTokens(U) : U).then((U) => w.walkTokens ? Promise.all(this.walkTokens(U, w.walkTokens)).then(() => U) : U).then((U) => f(U, w)).then((U) => w.hooks ? w.hooks.postprocess(U) : U).catch(g);
    try {
      w.hooks && (v = w.hooks.preprocess(v));
      let U = c(v, w);
      w.hooks && (U = w.hooks.processAllTokens(U)), w.walkTokens && this.walkTokens(U, w.walkTokens);
      let $ = f(U, w);
      return w.hooks && ($ = w.hooks.postprocess($)), $;
    } catch (U) {
      return g(U);
    }
  };
}, MR = function(c, f) {
  return (v) => {
    if (v.message += `
Please report this to https://github.com/markedjs/marked.`, c) {
      const E = "<p>An error occurred:</p><pre>" + mi(v.message + "", !0) + "</pre>";
      return f ? Promise.resolve(E) : E;
    }
    if (f)
      return Promise.reject(v);
    throw v;
  };
};
const kc = new YN();
function en(p, c) {
  return kc.parse(p, c);
}
en.options = en.setOptions = function(p) {
  return kc.setOptions(p), en.defaults = kc.defaults, xR(en.defaults), en;
};
en.getDefaults = DE;
en.defaults = Oc;
en.use = function(...p) {
  return kc.use(...p), en.defaults = kc.defaults, xR(en.defaults), en;
};
en.walkTokens = function(p, c) {
  return kc.walkTokens(p, c);
};
en.parseInline = kc.parseInline;
en.Parser = uo;
en.parser = uo.parse;
en.Renderer = _y;
en.TextRenderer = UE;
en.Lexer = oo;
en.lexer = oo.lex;
en.Tokenizer = Ty;
en.Hooks = wh;
en.parse = en;
en.options;
en.setOptions;
en.use;
en.walkTokens;
en.parseInline;
uo.parse;
oo.lex;
var AR = { exports: {} };
(function(p) {
  (function(c, f) {
    p.exports ? p.exports = f() : c.moo = f();
  })(wl, function() {
    var c = Object.prototype.hasOwnProperty, f = Object.prototype.toString, v = typeof new RegExp().sticky == "boolean";
    function E(P) {
      return P && f.call(P) === "[object RegExp]";
    }
    function x(P) {
      return P && typeof P == "object" && !E(P) && !Array.isArray(P);
    }
    function w(P) {
      return P.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function g(P) {
      var re = new RegExp("|" + P);
      return re.exec("").length - 1;
    }
    function U(P) {
      return "(" + P + ")";
    }
    function $(P) {
      if (!P.length) return "(?!)";
      var re = P.map(function(me) {
        return "(?:" + me + ")";
      }).join("|");
      return "(?:" + re + ")";
    }
    function z(P) {
      if (typeof P == "string")
        return "(?:" + w(P) + ")";
      if (E(P)) {
        if (P.ignoreCase) throw new Error("RegExp /i flag not allowed");
        if (P.global) throw new Error("RegExp /g flag is implied");
        if (P.sticky) throw new Error("RegExp /y flag is implied");
        if (P.multiline) throw new Error("RegExp /m flag is implied");
        return P.source;
      } else
        throw new Error("Not a pattern: " + P);
    }
    function F(P, re) {
      return P.length > re ? P : Array(re - P.length + 1).join(" ") + P;
    }
    function I(P, re) {
      for (var me = P.length, ue = 0; ; ) {
        var Se = P.lastIndexOf(`
`, me - 1);
        if (Se === -1 || (ue++, me = Se, ue === re) || me === 0)
          break;
      }
      var pe = ue < re ? 0 : me + 1;
      return P.substring(pe).split(`
`);
    }
    function oe(P) {
      for (var re = Object.getOwnPropertyNames(P), me = [], ue = 0; ue < re.length; ue++) {
        var Se = re[ue], pe = P[Se], ve = [].concat(pe);
        if (Se === "include") {
          for (var q = 0; q < ve.length; q++)
            me.push({ include: ve[q] });
          continue;
        }
        var se = [];
        ve.forEach(function(k) {
          x(k) ? (se.length && me.push(X(Se, se)), me.push(X(Se, k)), se = []) : se.push(k);
        }), se.length && me.push(X(Se, se));
      }
      return me;
    }
    function K(P) {
      for (var re = [], me = 0; me < P.length; me++) {
        var ue = P[me];
        if (ue.include) {
          for (var Se = [].concat(ue.include), pe = 0; pe < Se.length; pe++)
            re.push({ include: Se[pe] });
          continue;
        }
        if (!ue.type)
          throw new Error("Rule has no type: " + JSON.stringify(ue));
        re.push(X(ue.type, ue));
      }
      return re;
    }
    function X(P, re) {
      if (x(re) || (re = { match: re }), re.include)
        throw new Error("Matching rules cannot also include states");
      var me = {
        defaultType: P,
        lineBreaks: !!re.error || !!re.fallback,
        pop: !1,
        next: null,
        push: null,
        error: !1,
        fallback: !1,
        value: null,
        type: null,
        shouldThrow: !1
      };
      for (var ue in re)
        c.call(re, ue) && (me[ue] = re[ue]);
      if (typeof me.type == "string" && P !== me.type)
        throw new Error("Type transform cannot be a string (type '" + me.type + "' for token '" + P + "')");
      var Se = me.match;
      return me.match = Array.isArray(Se) ? Se : Se ? [Se] : [], me.match.sort(function(pe, ve) {
        return E(pe) && E(ve) ? 0 : E(ve) ? -1 : E(pe) ? 1 : ve.length - pe.length;
      }), me;
    }
    function Ce(P) {
      return Array.isArray(P) ? K(P) : oe(P);
    }
    var ut = X("error", { lineBreaks: !0, shouldThrow: !0 });
    function ft(P, re) {
      for (var me = null, ue = /* @__PURE__ */ Object.create(null), Se = !0, pe = null, ve = [], q = [], se = 0; se < P.length; se++)
        P[se].fallback && (Se = !1);
      for (var se = 0; se < P.length; se++) {
        var k = P[se];
        if (k.include)
          throw new Error("Inheritance is not allowed in stateless lexers");
        if (k.error || k.fallback) {
          if (me)
            throw !k.fallback == !me.fallback ? new Error("Multiple " + (k.fallback ? "fallback" : "error") + " rules not allowed (for token '" + k.defaultType + "')") : new Error("fallback and error are mutually exclusive (for token '" + k.defaultType + "')");
          me = k;
        }
        var Z = k.match.slice();
        if (Se)
          for (; Z.length && typeof Z[0] == "string" && Z[0].length === 1; ) {
            var xe = Z.shift();
            ue[xe.charCodeAt(0)] = k;
          }
        if (k.pop || k.push || k.next) {
          if (!re)
            throw new Error("State-switching options are not allowed in stateless lexers (for token '" + k.defaultType + "')");
          if (k.fallback)
            throw new Error("State-switching options are not allowed on fallback tokens (for token '" + k.defaultType + "')");
        }
        if (Z.length !== 0) {
          Se = !1, ve.push(k);
          for (var Pe = 0; Pe < Z.length; Pe++) {
            var Be = Z[Pe];
            if (E(Be)) {
              if (pe === null)
                pe = Be.unicode;
              else if (pe !== Be.unicode && k.fallback === !1)
                throw new Error("If one rule is /u then all must be");
            }
          }
          var at = $(Z.map(z)), et = new RegExp(at);
          if (et.test(""))
            throw new Error("RegExp matches empty string: " + et);
          var mt = g(at);
          if (mt > 0)
            throw new Error("RegExp has capture groups: " + et + `
Use (?: … ) instead`);
          if (!k.lineBreaks && et.test(`
`))
            throw new Error("Rule should declare lineBreaks: " + et);
          q.push(U(at));
        }
      }
      var st = me && me.fallback, Ht = v && !st ? "ym" : "gm", Rn = v || st ? "" : "|";
      pe === !0 && (Ht += "u");
      var Wn = new RegExp($(q) + Rn, Ht);
      return { regexp: Wn, groups: ve, fast: ue, error: me || ut };
    }
    function Ye(P) {
      var re = ft(Ce(P));
      return new Ge({ start: re }, "start");
    }
    function Ae(P, re, me) {
      var ue = P && (P.push || P.next);
      if (ue && !me[ue])
        throw new Error("Missing state '" + ue + "' (in token '" + P.defaultType + "' of state '" + re + "')");
      if (P && P.pop && +P.pop != 1)
        throw new Error("pop must be 1 (in token '" + P.defaultType + "' of state '" + re + "')");
    }
    function gt(P, re) {
      var me = P.$all ? Ce(P.$all) : [];
      delete P.$all;
      var ue = Object.getOwnPropertyNames(P);
      re || (re = ue[0]);
      for (var Se = /* @__PURE__ */ Object.create(null), pe = 0; pe < ue.length; pe++) {
        var ve = ue[pe];
        Se[ve] = Ce(P[ve]).concat(me);
      }
      for (var pe = 0; pe < ue.length; pe++)
        for (var ve = ue[pe], q = Se[ve], se = /* @__PURE__ */ Object.create(null), k = 0; k < q.length; k++) {
          var Z = q[k];
          if (Z.include) {
            var xe = [k, 1];
            if (Z.include !== ve && !se[Z.include]) {
              se[Z.include] = !0;
              var Pe = Se[Z.include];
              if (!Pe)
                throw new Error("Cannot include nonexistent state '" + Z.include + "' (in state '" + ve + "')");
              for (var Be = 0; Be < Pe.length; Be++) {
                var at = Pe[Be];
                q.indexOf(at) === -1 && xe.push(at);
              }
            }
            q.splice.apply(q, xe), k--;
          }
        }
      for (var et = /* @__PURE__ */ Object.create(null), pe = 0; pe < ue.length; pe++) {
        var ve = ue[pe];
        et[ve] = ft(Se[ve], !0);
      }
      for (var pe = 0; pe < ue.length; pe++) {
        for (var mt = ue[pe], st = et[mt], Ht = st.groups, k = 0; k < Ht.length; k++)
          Ae(Ht[k], mt, et);
        for (var Rn = Object.getOwnPropertyNames(st.fast), k = 0; k < Rn.length; k++)
          Ae(st.fast[Rn[k]], mt, et);
      }
      return new Ge(et, re);
    }
    function _e(P) {
      for (var re = typeof Map < "u", me = re ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null), ue = Object.getOwnPropertyNames(P), Se = 0; Se < ue.length; Se++) {
        var pe = ue[Se], ve = P[pe], q = Array.isArray(ve) ? ve : [ve];
        q.forEach(function(se) {
          if (typeof se != "string")
            throw new Error("keyword must be string (in keyword '" + pe + "')");
          re ? me.set(se, pe) : me[se] = pe;
        });
      }
      return function(se) {
        return re ? me.get(se) : me[se];
      };
    }
    var Ge = function(P, re) {
      this.startState = re, this.states = P, this.buffer = "", this.stack = [], this.reset();
    };
    Ge.prototype.reset = function(P, re) {
      return this.buffer = P || "", this.index = 0, this.line = re ? re.line : 1, this.col = re ? re.col : 1, this.queuedToken = re ? re.queuedToken : null, this.queuedText = re ? re.queuedText : "", this.queuedThrow = re ? re.queuedThrow : null, this.setState(re ? re.state : this.startState), this.stack = re && re.stack ? re.stack.slice() : [], this;
    }, Ge.prototype.save = function() {
      return {
        line: this.line,
        col: this.col,
        state: this.state,
        stack: this.stack.slice(),
        queuedToken: this.queuedToken,
        queuedText: this.queuedText,
        queuedThrow: this.queuedThrow
      };
    }, Ge.prototype.setState = function(P) {
      if (!(!P || this.state === P)) {
        this.state = P;
        var re = this.states[P];
        this.groups = re.groups, this.error = re.error, this.re = re.regexp, this.fast = re.fast;
      }
    }, Ge.prototype.popState = function() {
      this.setState(this.stack.pop());
    }, Ge.prototype.pushState = function(P) {
      this.stack.push(this.state), this.setState(P);
    };
    var rt = v ? function(P, re) {
      return P.exec(re);
    } : function(P, re) {
      var me = P.exec(re);
      return me[0].length === 0 ? null : me;
    };
    Ge.prototype._getGroup = function(P) {
      for (var re = this.groups.length, me = 0; me < re; me++)
        if (P[me + 1] !== void 0)
          return this.groups[me];
      throw new Error("Cannot find token type for matched text");
    };
    function tn() {
      return this.value;
    }
    if (Ge.prototype.next = function() {
      var P = this.index;
      if (this.queuedGroup) {
        var re = this._token(this.queuedGroup, this.queuedText, P);
        return this.queuedGroup = null, this.queuedText = "", re;
      }
      var me = this.buffer;
      if (P !== me.length) {
        var ve = this.fast[me.charCodeAt(P)];
        if (ve)
          return this._token(ve, me.charAt(P), P);
        var ue = this.re;
        ue.lastIndex = P;
        var Se = rt(ue, me), pe = this.error;
        if (Se == null)
          return this._token(pe, me.slice(P, me.length), P);
        var ve = this._getGroup(Se), q = Se[0];
        return pe.fallback && Se.index !== P ? (this.queuedGroup = ve, this.queuedText = q, this._token(pe, me.slice(P, Se.index), P)) : this._token(ve, q, P);
      }
    }, Ge.prototype._token = function(P, re, me) {
      var ue = 0;
      if (P.lineBreaks) {
        var Se = /\n/g, pe = 1;
        if (re === `
`)
          ue = 1;
        else
          for (; Se.exec(re); )
            ue++, pe = Se.lastIndex;
      }
      var ve = {
        type: typeof P.type == "function" && P.type(re) || P.defaultType,
        value: typeof P.value == "function" ? P.value(re) : re,
        text: re,
        toString: tn,
        offset: me,
        lineBreaks: ue,
        line: this.line,
        col: this.col
      }, q = re.length;
      if (this.index += q, this.line += ue, ue !== 0 ? this.col = q - pe + 1 : this.col += q, P.shouldThrow) {
        var se = new Error(this.formatError(ve, "invalid syntax"));
        throw se;
      }
      return P.pop ? this.popState() : P.push ? this.pushState(P.push) : P.next && this.setState(P.next), ve;
    }, typeof Symbol < "u" && Symbol.iterator) {
      var Gt = function(P) {
        this.lexer = P;
      };
      Gt.prototype.next = function() {
        var P = this.lexer.next();
        return { value: P, done: !P };
      }, Gt.prototype[Symbol.iterator] = function() {
        return this;
      }, Ge.prototype[Symbol.iterator] = function() {
        return new Gt(this);
      };
    }
    return Ge.prototype.formatError = function(P, re) {
      if (P == null)
        var me = this.buffer.slice(this.index), P = {
          text: me,
          offset: this.index,
          lineBreaks: me.indexOf(`
`) === -1 ? 0 : 1,
          line: this.line,
          col: this.col
        };
      var ue = 2, Se = Math.max(P.line - ue, 1), pe = P.line + ue, ve = String(pe).length, q = I(
        this.buffer,
        this.line - P.line + ue + 1
      ).slice(0, 5), se = [];
      se.push(re + " at line " + P.line + " col " + P.col + ":"), se.push("");
      for (var k = 0; k < q.length; k++) {
        var Z = q[k], xe = Se + k;
        se.push(F(String(xe), ve) + "  " + Z), xe === P.line && se.push(F("", ve + P.col + 1) + "^");
      }
      return se.join(`
`);
    }, Ge.prototype.clone = function() {
      return new Ge(this.states, this.state);
    }, Ge.prototype.has = function(P) {
      return !0;
    }, {
      compile: Ye,
      states: gt,
      error: Object.freeze({ error: !0 }),
      fallback: Object.freeze({ fallback: !0 }),
      keywords: _e
    };
  });
})(AR);
var WN = AR.exports;
const pd = /* @__PURE__ */ bE(WN), Ix = pd.compile({
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
    value: (p) => `"${p.slice(1, -1)}"`
  },
  /**
   * Matches identifiers that may include Unicode characters and escape
   * sequences.
   */
  Identifier: /(?:\x23)?(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/u
});
function QN(p, c = {}) {
  const f = p.trim().replace(/[\,]+$/, "");
  if (f === "")
    return "{}";
  if (!qN(f))
    throw new TypeError("Unexpected input format");
  let v = "";
  Ix.reset(f);
  for (const E of Ix)
    if (!(E.type === "WhiteSpace" || E.type === "Lines")) {
      switch (E.type) {
        case "Identifier":
          E.value = `"${c[E.value] || E.value}"`;
          break;
        case "ObjectKey":
          E.value.slice(0, 1) === "[" && E.value.slice(-1) === "]" ? E.value = `"${c[E.value.slice(1, -1)] || E.value.slice(1, -1)}"` : E.value = `"${E.value}"`;
          break;
      }
      v += E.value;
    }
  return v.replace(/\,([\}\]])/g, "$1");
}
function qN(p) {
  return p.startsWith("{") && p.endsWith("}") || p.startsWith("[") && p.endsWith("]");
}
const GN = /[ \t\v\f\ufeff]+/, KN = /(?:(?![\s\x00\x22\x27\x3E\x2F\x3D\x00-\x1F\x7F-\x9F])[^\s\x00-\x1F\x7F-\x9F\x22\x27\x3E\x2F\x3D])+/, XN = /[\.#](?:(?!-?\d)(?:[a-zA-Z0-9\xA0-\uFFFF_-])+)/, ZN = new RegExp("(?<==)(?:true|false)"), JN = new RegExp("(?<==)-?(?:(?:0[xX][\\da-fA-F](?:_?[\\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|-?0n|-?[1-9](?:_?\\d)*n|(?:(?:0(?!\\d)|0\\d*[89]\\d*|[1-9](?:_?\\d)*)(?:\\.(?:\\d(?:_?\\d)*)?)?|\\.\\d(?:_?\\d)*)(?:[eE][+-]?\\d(?:_?\\d)*)?|-?0[0-7]+)"), eM = new RegExp(`(?<==)'(?!.*&[0-9a-zA-Z]+;)[^'\\\\]*(?:\\\\.|\\\\n[^"\\\\]*|&[^0-9a-zA-Z;]*)*'`), tM = new RegExp('(?<==)"(?!.*&[0-9a-zA-Z]+;)[^"\\\\]*(?:\\\\.|\\\\n[^"\\\\]*|&[^0-9a-zA-Z;]*)*"'), nM = new RegExp("(?<==)[^\"\\s'`=<>\\x00]+");
function pE(p) {
  const c = typeof p == "string" && /^(['"]).*?\1$/.test(p) ? (
    // omit quotes
    p.slice(1, -1)
  ) : p;
  return c.startsWith("[") && c.endsWith("]") || c.startsWith("{") && c.endsWith("}") ? JSON.parse(QN(c)) : c;
}
function rM(p) {
  let c = "";
  for (const f in p) {
    const v = p[f];
    switch (typeof v) {
      case "object":
        c += ` ${f}='${JSON.stringify(v)}'`;
        break;
      case "string":
        c += ` ${f}="${v}"`;
        break;
      case "number":
      case "boolean":
        c += ` ${f}=${v}`;
        break;
    }
  }
  return c.slice(1);
}
const Yx = pd.states({
  main: {
    WhiteSpace: GN,
    AttributeShorthand: XN,
    BooleanLiteral: {
      match: ZN,
      value(p) {
        return p === "true";
      }
    },
    NumericLiteral: {
      match: JN,
      value(p) {
        const c = Number(p);
        return Number.isNaN(c) ? Number(p.replace(/_|n$/g, "")) : Number(p);
      }
    },
    SingleQuotedValue: {
      match: eM,
      value: pE,
      type: () => "StringLiteral"
    },
    DoubleQuotedLiteral: {
      match: tM,
      value: pE,
      type: () => "StringLiteral"
    },
    UnquotedLiteral: {
      match: nM,
      value: pE,
      type: () => "StringLiteral"
    },
    AttributeName: KN,
    Separator: "="
  }
});
function aM(p) {
  let c = null;
  const f = Yx.reset(p), v = {};
  Object.defineProperties(v, {
    toString: {
      writable: !1,
      enumerable: !1,
      configurable: !1,
      value: () => rM(v)
    },
    getTokens: {
      writable: !1,
      enumerable: !1,
      configurable: !1,
      value: () => Array.from(Yx.reset(p))
    }
  });
  const E = [];
  for (const { type: x, value: w } of f)
    switch (x) {
      case "AttributeName":
        c = w, v[c] = c;
        break;
      case "AttributeShorthand":
        const g = w[0];
        g === "." ? E.push(w.slice(1)) : g === "#" && (v.id = w.slice(1));
        break;
      case "BooleanLiteral":
      case "NumericLiteral":
      case "StringLiteral":
        c && (c === "class" && E.push(w), v[c] = w, c = null);
        break;
    }
  return E.length && (v.class = E.join(" ")), v;
}
const Wx = (p) => p.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function iM(p, ...c) {
  if (typeof p == "string")
    return Wx(p);
  let f = p[0];
  for (const [v, E] of c.entries())
    f = f + Wx(String(E)) + p[v + 1];
  return f;
}
class lM extends Error {
  constructor(c) {
    super(`Missing a value for ${c ? `the placeholder: ${c}` : "a placeholder"}`, c), this.name = "MissingValueError", this.key = c;
  }
}
function oM(p, c, { ignoreMissing: f = !1, transform: v = ({ value: E }) => E } = {}) {
  if (typeof p != "string")
    throw new TypeError(`Expected a \`string\` in the first argument, got \`${typeof p}\``);
  if (typeof c != "object")
    throw new TypeError(`Expected an \`object\` or \`Array\` in the second argument, got \`${typeof c}\``);
  const E = (U, $) => {
    let z = c;
    for (const I of $.split("."))
      z = z ? z[I] : void 0;
    const F = v({ value: z, key: $ });
    if (F === void 0) {
      if (f)
        return U;
      throw new lM($);
    }
    return String(F);
  }, x = (U) => (...$) => iM(U(...$)), w = /{{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}}/gi;
  w.test(p) && (p = p.replace(w, x(E)));
  const g = /{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}/gi;
  return p.replace(g, E);
}
const uM = `
<figure class='preview'>
  <figcaption>{title}</figcaption>
  <div class='preview-showcase'>
    {preview}
  </div>
  <div class='preview-code'>
    {code}
  </div>
</figure>
`, Qx = /[ \t]*preview(?:=([""])?.*?\1)?$|preview(?:=([""])?.*?\1)?[ \t]*/g;
function sM(p) {
  return pd.compile({
    placeholder: /\{code\}/,
    text: pd.fallback
  }).reset(p);
}
function cM(p) {
  const c = pd.compile({
    placeholder: {
      match: /{[ \t]*?(?:[a-zA-Z_][\w\d\.]*?|[\d][\w\d\.]+)[ \t]*?}/,
      value(v) {
        return v.replace(/[ \t]+/g, "");
      }
    },
    chunk: pd.fallback
  }).reset(p);
  let f = "";
  for (const v of c)
    f += v.value;
  return f;
}
function fM(p, c) {
  return {
    type: "html",
    block: !0,
    pre: !1,
    raw: p,
    text: c
  };
}
function dM(p, c) {
  var f, v, E;
  const {
    data: x,
    attrs: w,
    index: g,
    parent: U,
    template: $ = uM,
    transformer: z = (Ce) => Ce
  } = c, F = sM($), I = (f = p.raw) == null ? void 0 : f.split(`
`)[0].replace(Qx, "");
  p.raw = (v = p.raw) == null ? void 0 : v.split(`
`).splice(0, 1, I).join(`
`), p.lang = (E = p.lang) == null ? void 0 : E.replace(Qx, "");
  const oe = z(p.text, w, x), K = {
    ...x,
    ...w,
    preview: oe
  }, X = [];
  for (const { type: Ce, text: ut } of F)
    if (Ce === "placeholder")
      X.push(p);
    else if (Ce === "text") {
      const ft = cM(ut), Ye = oM(ft, K, {
        ignoreMissing: !0
      });
      X.push(fM(ft, Ye));
    }
  U.splice(g, 1, ...X);
}
function pM(p = {}) {
  return {
    extensions: [
      {
        name: "fences",
        level: "block",
        tokenizer(c, f) {
          const v = {};
          this.lexer.options.hooks && this.lexer.options.hooks !== null && "data" in this.lexer.options.hooks && Object.assign(v, this.lexer.options.hooks.data), f.forEach((E, x) => {
            var w;
            if (E.type !== "code" || !E.lang)
              return;
            const g = (w = E.lang) == null ? void 0 : w.split(" "), { preview: U, ...$ } = aM(E.lang);
            U && dM(E, {
              index: x,
              parent: f,
              data: v,
              attrs: { lang: g, ...$ },
              ...p
            });
          });
        }
      }
    ]
  };
}
function Sh(p, c) {
  return {
    content: p,
    role: c
  };
}
function qx(p) {
  document.getElementById(`message-text-${p}`).focus();
}
function hM({ iconColor: p }) {
  return /* @__PURE__ */ Ct.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Ct.jsx("path", { d: "m60.875 276.5 99.766 53.922 174.7-143.03-161.79 206.74v77.512l72.832-96.914 115.88 63.434v0.003906c5.7188 3.1289 12.594 3.3203 18.477 0.51563 5.8828-2.8086 10.059-8.2734 11.219-14.688l69.797-384.68-400.35 201.14c-4.4648 2.2227-7.957 6.0117-9.8047 10.645-1.8477 4.6328-1.9219 9.7852-0.21094 14.469 1.7109 4.6875 5.0859 8.5781 9.4883 10.93z", fill: p }) });
}
function vM({ iconColor: p }) {
  return /* @__PURE__ */ Ct.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Ct.jsx("path", { d: "m227.5 256-86.512 86.516c-7.8711 7.8594-7.8711 20.637 0 28.496 7.8594 7.8672 20.633 7.8672 28.492 0l86.516-86.516 86.516 86.516c7.8594 7.8672 20.637 7.8672 28.496 0 7.8672-7.8594 7.8672-20.637 0-28.496l-86.516-86.516 86.516-86.516c7.8672-7.8594 7.8672-20.633 0-28.492-7.8594-7.8711-20.637-7.8711-28.496 0l-86.516 86.512-86.516-86.512c-7.8594-7.8711-20.633-7.8711-28.492 0-7.8711 7.8594-7.8711 20.633 0 28.492z", fill: p, fillRule: "evenodd" }) });
}
const Gx = ({ iconColor: p, toggleChat: c, widgetID: f, width: v, height: E, sticky: x }) => {
  const [w, g] = Ir.useState(twChatMessages[f]), [U, $] = Ir.useState(""), [z, F] = Ir.useState(!1), [I, oe] = Ir.useState(0), [K, X] = Ir.useState(0), [Ce, ut] = Ir.useState([]), ft = Ir.useRef(null), Ye = Ir.useRef(null), Ae = window.twChatPluginSettings, gt = window.twChatWidgetSettings[f], _e = Ae.tw_chat_max_characters, rt = getComputedStyle(document.documentElement).getPropertyValue("--tw-chat-header-close-color").trim();
  Ir.useEffect(() => {
    window.twChatWidgetSettings[f].thread_id === void 0 ? gt.tw_chat_suggested_answers && ut(gt.tw_chat_suggested_answers.split(",")) : (oe(window.twChatWidgetSettings[f].thread_id), window.twChatWidgetSettings[f].suggestedAnswers && ut(window.twChatWidgetSettings[f].suggestedAnswers)), x && qx(f);
  }, []), Ir.useEffect(() => {
    ft.current && Ye.current && ft.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, [w]);
  const tn = (pe, ve) => {
    pe && pe.preventDefault(), F(!0);
    const q = ve || U, se = {
      widget_id: f,
      message: q
    }, k = {
      headers: {
        "X-WP-Nonce": Ae.nonce
      }
    };
    I && (se.thread_id = I), twChatMessages[f] = [...w, Sh(q, "user")], g(twChatMessages[f]), lr.post(
      `${Ae.root}tw-chat-assistant/v1/chat-response/`,
      se,
      k
    ).then((Z) => {
      const xe = Z.data.message;
      let Pe;
      if (xe.length > 0) {
        try {
          const at = JSON.parse(xe);
          Pe = at.message, at.suggestedAnswers && ut(at.suggestedAnswers), window.twChatWidgetSettings[f].suggestedAnswers = at.suggestedAnswers;
        } catch {
          Pe = xe;
        }
        const Be = Pe.replace(/(?:\r\n|\r|\n)/g, "<br />").replace(/【.*?†source】/g, "");
        g([...twChatMessages[f], Sh(Be, "assistant")]), twChatMessages[f] = [...twChatMessages[f], Sh(Be, "assistant")];
      }
      $(""), X(0), F(!1), window.twChatWidgetSettings[f].thread_id = Z.data.thread_id, oe(Z.data.thread_id), qx(f);
    }).catch((Z) => {
      console.error("Error fetching messages:", Z), g([...twChatMessages[f], Sh(Ae.tw_chat_error_message, "error")]), F(!1);
    });
  }, Gt = (pe) => {
    const ve = pe.target.value;
    let q = ve.length;
    _e && q > _e && (pe.target.value = ve.slice(0, _e), q = _e), $(pe.target.value), X(q);
  }, P = (pe) => {
    ut([]), tn(null, pe);
  }, re = () => w.map((pe, ve) => {
    const q = ve === w.length - 1;
    return /* @__PURE__ */ Ct.jsx(
      "p",
      {
        ref: q ? ft : null,
        id: `tw-chat-message-${f}-${ve}`,
        className: `message ${pe.role}`,
        children: /* @__PURE__ */ Ct.jsx("span", { dangerouslySetInnerHTML: {
          __html: en.use(pM).parse(pe.content)
        } })
      },
      ve
    );
  }), me = () => Ce.length > 0 ? /* @__PURE__ */ Ct.jsx("div", { className: "tw-chat-suggested-answers", children: Ce.map((pe, ve) => /* @__PURE__ */ Ct.jsx("button", { onClick: () => P(pe), children: pe }, ve)) }) : /* @__PURE__ */ Ct.jsxs(
    "form",
    {
      onSubmit: tn,
      className: z ? "tw-chat-form tw-chat-visibility-0" : "tw-chat-form",
      children: [
        /* @__PURE__ */ Ct.jsxs("div", { className: "tw-chat-input-container", children: [
          /* @__PURE__ */ Ct.jsx("label", { htmlFor: `message-text-${f}`, children: "Send Message" }),
          /* @__PURE__ */ Ct.jsx("input", { placeholder: "Enter your message...", id: `message-text-${f}`, type: "text", onChange: Gt, value: U, name: "message", required: "required" }),
          _e && /* @__PURE__ */ Ct.jsx("div", { className: "tw-chat-char-count", children: /* @__PURE__ */ Ct.jsxs("span", { className: K == _e ? "tw-chat-max-characters" : "", children: [
            K,
            " / ",
            _e,
            " characters"
          ] }) })
        ] }),
        /* @__PURE__ */ Ct.jsxs("button", { children: [
          /* @__PURE__ */ Ct.jsx(hM, { iconColor: p }),
          /* @__PURE__ */ Ct.jsx("span", { className: "sr-only", children: "Send Message" })
        ] })
      ]
    }
  ), ue = cN(
    "tw-chat-interface",
    { sticky: x },
    { embedded: !x }
  );
  let Se = {};
  return v && (Se.width = v), E && (Se.height = E), /* @__PURE__ */ Ct.jsxs("div", { className: ue, style: Se, children: [
    /* @__PURE__ */ Ct.jsxs("div", { className: "tw-chat-header", children: [
      Ae.tw_chat_logo_url && /* @__PURE__ */ Ct.jsx("img", { className: "logo", src: Ae.tw_chat_logo_url, alt: "Chat widget logo" }),
      /* @__PURE__ */ Ct.jsx("span", { children: window.twChatWidgetSettings[f].tw_chat_widget_name }),
      x == 1 && /* @__PURE__ */ Ct.jsx(
        "button",
        {
          className: "close",
          onClick: () => c(),
          "aria-label": "Close chat interface",
          children: /* @__PURE__ */ Ct.jsx(vM, { iconColor: rt })
        }
      )
    ] }),
    /* @__PURE__ */ Ct.jsxs("div", { ref: Ye, className: "tw-chat-messages", id: `tw-chat-messages-${f}`, children: [
      re(),
      z && /* @__PURE__ */ Ct.jsx("div", { className: "waiting-indicator", children: /* @__PURE__ */ Ct.jsx(uN, { color: "#333" }) })
    ] }),
    me(),
    /* @__PURE__ */ Ct.jsx("div", { className: "tw-chat-disclaimer-container", children: Ae.tw_chat_disclaimer && /* @__PURE__ */ Ct.jsx("div", { dangerouslySetInnerHTML: { __html: Ae.tw_chat_disclaimer } }) })
  ] });
};
function mM({ iconColor: p }) {
  return /* @__PURE__ */ Ct.jsx("svg", { role: "img", className: "tw-chat-icon", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Ct.jsx("path", { d: "m512 179.3c0 55.102-26.008 104.11-66.41 135.45-28.969 22.477-151 107.22-190.54 107.22l8.6211-71.371h-92.371c-94.645 0-171.3-76.695-171.3-171.3v-7.9961c0-94.625 76.656-171.3 171.3-171.3h169.41c94.594 0 171.29 76.676 171.29 171.3zm-384.48-28.574c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.609 0 28.266-12.691 28.266-28.297 0.007813-15.621-12.648-28.277-28.266-28.277zm128.48 0c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.617 0 28.277-12.691 28.277-28.297-0.011719-15.621-12.66-28.277-28.277-28.277zm128.48 0c-15.641 0-28.266 12.656-28.266 28.277 0 15.605 12.633 28.297 28.266 28.297 15.617 0 28.266-12.691 28.266-28.297-0.003907-15.621-12.648-28.277-28.266-28.277z", fill: p }) });
}
const yM = getComputedStyle(document.documentElement), hE = yM.getPropertyValue("--tw-chat-icon-color").trim();
function gM({ widgetID: p, sticky: c }) {
  const [f, v] = Ir.useState(!1), E = window.twChatPluginSettings.tw_chat_button_text || "Chat", x = window.twChatWidgetSettings[p].tw_chat_width || null, w = window.twChatWidgetSettings[p].tw_chat_height || null, g = () => {
    v(!f);
  }, U = () => /* @__PURE__ */ Ct.jsxs("div", { className: "tw-chat-container", children: [
    /* @__PURE__ */ Ct.jsx("div", { className: f ? "" : "tw-chat-visibility-0", children: /* @__PURE__ */ Ct.jsx(Gx, { widgetID: p, iconColor: hE, toggleChat: g, sticky: c }) }),
    /* @__PURE__ */ Ct.jsxs("button", { className: "tw-chat-bubble", onClick: g, "aria-label": "Open chat interface", children: [
      /* @__PURE__ */ Ct.jsx(mM, { iconColor: hE }),
      E
    ] })
  ] });
  return /* @__PURE__ */ Ct.jsx(Ct.Fragment, { children: c ? /* @__PURE__ */ Ct.jsx(U, {}) : /* @__PURE__ */ Ct.jsx(Gx, { widgetID: p, iconColor: hE, toggleChat: g, width: x, height: w, sticky: c }) });
}
window.twChatMessages = window.twChatMessages || {};
window.twChatWidgetSettings = window.twChatWidgetSettings || {};
window.twChatInitWidget = function(p, c) {
  const f = document.getElementById(`tw-chat-widget-${p}`);
  twChatWidgetSettings[p] = JSON.parse(document.getElementById(`tw-chat-widget-data-${p}`).textContent), twChatMessages[p] = [Sh(twChatWidgetSettings[p].tw_chat_greeting, "assistant")], gh.createRoot(f).render(
    /* @__PURE__ */ Ct.jsx(_D.StrictMode, { children: /* @__PURE__ */ Ct.jsx(gM, { widgetID: p, sticky: c }) })
  );
};
