var RL = Object.defineProperty;
var hR = (u) => {
  throw TypeError(u);
};
var TL = (u, l, c) => l in u ? RL(u, l, { enumerable: !0, configurable: !0, writable: !0, value: c }) : u[l] = c;
var tr = (u, l, c) => TL(u, typeof l != "symbol" ? l + "" : l, c), kL = (u, l, c) => l.has(u) || hR("Cannot " + c);
var vR = (u, l, c) => l.has(u) ? hR("Cannot add the same private member more than once") : l instanceof WeakSet ? l.add(u) : l.set(u, c);
var mg = (u, l, c) => (kL(u, l, "access private method"), c);
function pb(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function OL(u) {
  if (u.__esModule) return u;
  var l = u.default;
  if (typeof l == "function") {
    var c = function d() {
      return this instanceof d ? Reflect.construct(l, arguments, this.constructor) : l.apply(this, arguments);
    };
    c.prototype = l.prototype;
  } else c = {};
  return Object.defineProperty(c, "__esModule", { value: !0 }), Object.keys(u).forEach(function(d) {
    var m = Object.getOwnPropertyDescriptor(u, d);
    Object.defineProperty(c, d, m.get ? m : {
      enumerable: !0,
      get: function() {
        return u[d];
      }
    });
  }), c;
}
var $w = { exports: {} }, rv = {}, Bw = { exports: {} }, Xt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mR;
function DL() {
  if (mR) return Xt;
  mR = 1;
  var u = Symbol.for("react.element"), l = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), S = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), R = Symbol.iterator;
  function D(L) {
    return L === null || typeof L != "object" ? null : (L = R && L[R] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var j = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, U = Object.assign, H = {};
  function oe(L, F, J) {
    this.props = L, this.context = F, this.refs = H, this.updater = J || j;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(L, F) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, F, "setState");
  }, oe.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function ve() {
  }
  ve.prototype = oe.prototype;
  function xe(L, F, J) {
    this.props = L, this.context = F, this.refs = H, this.updater = J || j;
  }
  var fe = xe.prototype = new ve();
  fe.constructor = xe, U(fe, oe.prototype), fe.isPureReactComponent = !0;
  var Re = Array.isArray, X = Object.prototype.hasOwnProperty, Ae = { current: null }, tt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(L, F, J) {
    var _e, be = {}, Pe = null, Be = null;
    if (F != null) for (_e in F.ref !== void 0 && (Be = F.ref), F.key !== void 0 && (Pe = "" + F.key), F) X.call(F, _e) && !tt.hasOwnProperty(_e) && (be[_e] = F[_e]);
    var Le = arguments.length - 2;
    if (Le === 1) be.children = J;
    else if (1 < Le) {
      for (var Fe = Array(Le), Ge = 0; Ge < Le; Ge++) Fe[Ge] = arguments[Ge + 2];
      be.children = Fe;
    }
    if (L && L.defaultProps) for (_e in Le = L.defaultProps, Le) be[_e] === void 0 && (be[_e] = Le[_e]);
    return { $$typeof: u, type: L, key: Pe, ref: Be, props: be, _owner: Ae.current };
  }
  function we(L, F) {
    return { $$typeof: u, type: L.type, key: F, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function ke(L) {
    return typeof L == "object" && L !== null && L.$$typeof === u;
  }
  function Oe(L) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(J) {
      return F[J];
    });
  }
  var ge = /\/+/g;
  function Ne(L, F) {
    return typeof L == "object" && L !== null && L.key != null ? Oe("" + L.key) : F.toString(36);
  }
  function Z(L, F, J, _e, be) {
    var Pe = typeof L;
    (Pe === "undefined" || Pe === "boolean") && (L = null);
    var Be = !1;
    if (L === null) Be = !0;
    else switch (Pe) {
      case "string":
      case "number":
        Be = !0;
        break;
      case "object":
        switch (L.$$typeof) {
          case u:
          case l:
            Be = !0;
        }
    }
    if (Be) return Be = L, be = be(Be), L = _e === "" ? "." + Ne(Be, 0) : _e, Re(be) ? (J = "", L != null && (J = L.replace(ge, "$&/") + "/"), Z(be, F, J, "", function(Ge) {
      return Ge;
    })) : be != null && (ke(be) && (be = we(be, J + (!be.key || Be && Be.key === be.key ? "" : ("" + be.key).replace(ge, "$&/") + "/") + L)), F.push(be)), 1;
    if (Be = 0, _e = _e === "" ? "." : _e + ":", Re(L)) for (var Le = 0; Le < L.length; Le++) {
      Pe = L[Le];
      var Fe = _e + Ne(Pe, Le);
      Be += Z(Pe, F, J, Fe, be);
    }
    else if (Fe = D(L), typeof Fe == "function") for (L = Fe.call(L), Le = 0; !(Pe = L.next()).done; ) Pe = Pe.value, Fe = _e + Ne(Pe, Le++), Be += Z(Pe, F, J, Fe, be);
    else if (Pe === "object") throw F = String(L), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return Be;
  }
  function ie(L, F, J) {
    if (L == null) return L;
    var _e = [], be = 0;
    return Z(L, _e, "", "", function(Pe) {
      return F.call(J, Pe, be++);
    }), _e;
  }
  function de(L) {
    if (L._status === -1) {
      var F = L._result;
      F = F(), F.then(function(J) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = J);
      }, function(J) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = J);
      }), L._status === -1 && (L._status = 0, L._result = F);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var ue = { current: null }, N = { transition: null }, re = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: N, ReactCurrentOwner: Ae };
  return Xt.Children = { map: ie, forEach: function(L, F, J) {
    ie(L, function() {
      F.apply(this, arguments);
    }, J);
  }, count: function(L) {
    var F = 0;
    return ie(L, function() {
      F++;
    }), F;
  }, toArray: function(L) {
    return ie(L, function(F) {
      return F;
    }) || [];
  }, only: function(L) {
    if (!ke(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, Xt.Component = oe, Xt.Fragment = c, Xt.Profiler = m, Xt.PureComponent = xe, Xt.StrictMode = d, Xt.Suspense = x, Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, Xt.cloneElement = function(L, F, J) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var _e = U({}, L.props), be = L.key, Pe = L.ref, Be = L._owner;
    if (F != null) {
      if (F.ref !== void 0 && (Pe = F.ref, Be = Ae.current), F.key !== void 0 && (be = "" + F.key), L.type && L.type.defaultProps) var Le = L.type.defaultProps;
      for (Fe in F) X.call(F, Fe) && !tt.hasOwnProperty(Fe) && (_e[Fe] = F[Fe] === void 0 && Le !== void 0 ? Le[Fe] : F[Fe]);
    }
    var Fe = arguments.length - 2;
    if (Fe === 1) _e.children = J;
    else if (1 < Fe) {
      Le = Array(Fe);
      for (var Ge = 0; Ge < Fe; Ge++) Le[Ge] = arguments[Ge + 2];
      _e.children = Le;
    }
    return { $$typeof: u, type: L.type, key: be, ref: Pe, props: _e, _owner: Be };
  }, Xt.createContext = function(L) {
    return L = { $$typeof: S, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: g, _context: L }, L.Consumer = L;
  }, Xt.createElement = q, Xt.createFactory = function(L) {
    var F = q.bind(null, L);
    return F.type = L, F;
  }, Xt.createRef = function() {
    return { current: null };
  }, Xt.forwardRef = function(L) {
    return { $$typeof: y, render: L };
  }, Xt.isValidElement = ke, Xt.lazy = function(L) {
    return { $$typeof: k, _payload: { _status: -1, _result: L }, _init: de };
  }, Xt.memo = function(L, F) {
    return { $$typeof: O, type: L, compare: F === void 0 ? null : F };
  }, Xt.startTransition = function(L) {
    var F = N.transition;
    N.transition = {};
    try {
      L();
    } finally {
      N.transition = F;
    }
  }, Xt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Xt.useCallback = function(L, F) {
    return ue.current.useCallback(L, F);
  }, Xt.useContext = function(L) {
    return ue.current.useContext(L);
  }, Xt.useDebugValue = function() {
  }, Xt.useDeferredValue = function(L) {
    return ue.current.useDeferredValue(L);
  }, Xt.useEffect = function(L, F) {
    return ue.current.useEffect(L, F);
  }, Xt.useId = function() {
    return ue.current.useId();
  }, Xt.useImperativeHandle = function(L, F, J) {
    return ue.current.useImperativeHandle(L, F, J);
  }, Xt.useInsertionEffect = function(L, F) {
    return ue.current.useInsertionEffect(L, F);
  }, Xt.useLayoutEffect = function(L, F) {
    return ue.current.useLayoutEffect(L, F);
  }, Xt.useMemo = function(L, F) {
    return ue.current.useMemo(L, F);
  }, Xt.useReducer = function(L, F, J) {
    return ue.current.useReducer(L, F, J);
  }, Xt.useRef = function(L) {
    return ue.current.useRef(L);
  }, Xt.useState = function(L) {
    return ue.current.useState(L);
  }, Xt.useSyncExternalStore = function(L, F, J) {
    return ue.current.useSyncExternalStore(L, F, J);
  }, Xt.useTransition = function() {
    return ue.current.useTransition();
  }, Xt.version = "18.2.0", Xt;
}
var sv = { exports: {} };
sv.exports;
var yR;
function AL() {
  return yR || (yR = 1, function(u, l) {
    var c = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    c.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.2.0", m = Symbol.for("react.element"), g = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), k = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), ve = Symbol.iterator, xe = "@@iterator";
      function fe(C) {
        if (C === null || typeof C != "object")
          return null;
        var P = ve && C[ve] || C[xe];
        return typeof P == "function" ? P : null;
      }
      var Re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, X = {
        transition: null
      }, Ae = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, tt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, q = {}, we = null;
      function ke(C) {
        we = C;
      }
      q.setExtraStackFrame = function(C) {
        we = C;
      }, q.getCurrentStack = null, q.getStackAddendum = function() {
        var C = "";
        we && (C += we);
        var P = q.getCurrentStack;
        return P && (C += P() || ""), C;
      };
      var Oe = !1, ge = !1, Ne = !1, Z = !1, ie = !1, de = {
        ReactCurrentDispatcher: Re,
        ReactCurrentBatchConfig: X,
        ReactCurrentOwner: tt
      };
      de.ReactDebugCurrentFrame = q, de.ReactCurrentActQueue = Ae;
      function ue(C) {
        {
          for (var P = arguments.length, ee = new Array(P > 1 ? P - 1 : 0), le = 1; le < P; le++)
            ee[le - 1] = arguments[le];
          re("warn", C, ee);
        }
      }
      function N(C) {
        {
          for (var P = arguments.length, ee = new Array(P > 1 ? P - 1 : 0), le = 1; le < P; le++)
            ee[le - 1] = arguments[le];
          re("error", C, ee);
        }
      }
      function re(C, P, ee) {
        {
          var le = de.ReactDebugCurrentFrame, ze = le.getStackAddendum();
          ze !== "" && (P += "%s", ee = ee.concat([ze]));
          var ot = ee.map(function(Je) {
            return String(Je);
          });
          ot.unshift("Warning: " + P), Function.prototype.apply.call(console[C], console, ot);
        }
      }
      var L = {};
      function F(C, P) {
        {
          var ee = C.constructor, le = ee && (ee.displayName || ee.name) || "ReactClass", ze = le + "." + P;
          if (L[ze])
            return;
          N("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", P, le), L[ze] = !0;
        }
      }
      var J = {
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
        enqueueForceUpdate: function(C, P, ee) {
          F(C, "forceUpdate");
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
        enqueueReplaceState: function(C, P, ee, le) {
          F(C, "replaceState");
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
        enqueueSetState: function(C, P, ee, le) {
          F(C, "setState");
        }
      }, _e = Object.assign, be = {};
      Object.freeze(be);
      function Pe(C, P, ee) {
        this.props = C, this.context = P, this.refs = be, this.updater = ee || J;
      }
      Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(C, P) {
        if (typeof C != "object" && typeof C != "function" && C != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, P, "setState");
      }, Pe.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate");
      };
      {
        var Be = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Le = function(C, P) {
          Object.defineProperty(Pe.prototype, C, {
            get: function() {
              ue("%s(...) is deprecated in plain JavaScript React classes. %s", P[0], P[1]);
            }
          });
        };
        for (var Fe in Be)
          Be.hasOwnProperty(Fe) && Le(Fe, Be[Fe]);
      }
      function Ge() {
      }
      Ge.prototype = Pe.prototype;
      function ht(C, P, ee) {
        this.props = C, this.context = P, this.refs = be, this.updater = ee || J;
      }
      var vt = ht.prototype = new Ge();
      vt.constructor = ht, _e(vt, Pe.prototype), vt.isPureReactComponent = !0;
      function $t() {
        var C = {
          current: null
        };
        return Object.seal(C), C;
      }
      var Me = Array.isArray;
      function _t(C) {
        return Me(C);
      }
      function _n(C) {
        {
          var P = typeof Symbol == "function" && Symbol.toStringTag, ee = P && C[Symbol.toStringTag] || C.constructor.name || "Object";
          return ee;
        }
      }
      function cn(C) {
        try {
          return En(C), !1;
        } catch {
          return !0;
        }
      }
      function En(C) {
        return "" + C;
      }
      function Lt(C) {
        if (cn(C))
          return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _n(C)), En(C);
      }
      function dr(C, P, ee) {
        var le = C.displayName;
        if (le)
          return le;
        var ze = P.displayName || P.name || "";
        return ze !== "" ? ee + "(" + ze + ")" : ee;
      }
      function rr(C) {
        return C.displayName || "Context";
      }
      function jn(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case S:
            return "Fragment";
          case g:
            return "Portal";
          case x:
            return "Profiler";
          case y:
            return "StrictMode";
          case D:
            return "Suspense";
          case j:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case k:
              var P = C;
              return rr(P) + ".Consumer";
            case O:
              var ee = C;
              return rr(ee._context) + ".Provider";
            case R:
              return dr(C, C.render, "ForwardRef");
            case U:
              var le = C.displayName || null;
              return le !== null ? le : jn(C.type) || "Memo";
            case H: {
              var ze = C, ot = ze._payload, Je = ze._init;
              try {
                return jn(Je(ot));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var _r = Object.prototype.hasOwnProperty, Lr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Yn, ar, qn;
      qn = {};
      function Qn(C) {
        if (_r.call(C, "ref")) {
          var P = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (P && P.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function un(C) {
        if (_r.call(C, "key")) {
          var P = Object.getOwnPropertyDescriptor(C, "key").get;
          if (P && P.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function Rr(C, P) {
        var ee = function() {
          Yn || (Yn = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        ee.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: ee,
          configurable: !0
        });
      }
      function wr(C, P) {
        var ee = function() {
          ar || (ar = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        ee.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: ee,
          configurable: !0
        });
      }
      function Tr(C) {
        if (typeof C.ref == "string" && tt.current && C.__self && tt.current.stateNode !== C.__self) {
          var P = jn(tt.current.type);
          qn[P] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P, C.ref), qn[P] = !0);
        }
      }
      var je = function(C, P, ee, le, ze, ot, Je) {
        var Ct = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: m,
          // Built-in properties that belong on the element
          type: C,
          key: P,
          ref: ee,
          props: Je,
          // Record the component responsible for creating this element.
          _owner: ot
        };
        return Ct._store = {}, Object.defineProperty(Ct._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ct, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: le
        }), Object.defineProperty(Ct, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ze
        }), Object.freeze && (Object.freeze(Ct.props), Object.freeze(Ct)), Ct;
      };
      function Ve(C, P, ee) {
        var le, ze = {}, ot = null, Je = null, Ct = null, Ft = null;
        if (P != null) {
          Qn(P) && (Je = P.ref, Tr(P)), un(P) && (Lt(P.key), ot = "" + P.key), Ct = P.__self === void 0 ? null : P.__self, Ft = P.__source === void 0 ? null : P.__source;
          for (le in P)
            _r.call(P, le) && !Lr.hasOwnProperty(le) && (ze[le] = P[le]);
        }
        var hn = arguments.length - 2;
        if (hn === 1)
          ze.children = ee;
        else if (hn > 1) {
          for (var yn = Array(hn), gn = 0; gn < hn; gn++)
            yn[gn] = arguments[gn + 2];
          Object.freeze && Object.freeze(yn), ze.children = yn;
        }
        if (C && C.defaultProps) {
          var Sn = C.defaultProps;
          for (le in Sn)
            ze[le] === void 0 && (ze[le] = Sn[le]);
        }
        if (ot || Je) {
          var Fn = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          ot && Rr(ze, Fn), Je && wr(ze, Fn);
        }
        return je(C, ot, Je, Ct, Ft, tt.current, ze);
      }
      function Tt(C, P) {
        var ee = je(C.type, P, C.ref, C._self, C._source, C._owner, C.props);
        return ee;
      }
      function Wt(C, P, ee) {
        if (C == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
        var le, ze = _e({}, C.props), ot = C.key, Je = C.ref, Ct = C._self, Ft = C._source, hn = C._owner;
        if (P != null) {
          Qn(P) && (Je = P.ref, hn = tt.current), un(P) && (Lt(P.key), ot = "" + P.key);
          var yn;
          C.type && C.type.defaultProps && (yn = C.type.defaultProps);
          for (le in P)
            _r.call(P, le) && !Lr.hasOwnProperty(le) && (P[le] === void 0 && yn !== void 0 ? ze[le] = yn[le] : ze[le] = P[le]);
        }
        var gn = arguments.length - 2;
        if (gn === 1)
          ze.children = ee;
        else if (gn > 1) {
          for (var Sn = Array(gn), Fn = 0; Fn < gn; Fn++)
            Sn[Fn] = arguments[Fn + 2];
          ze.children = Sn;
        }
        return je(C.type, ot, Je, Ct, Ft, hn, ze);
      }
      function Ht(C) {
        return typeof C == "object" && C !== null && C.$$typeof === m;
      }
      var Rn = ".", fn = ":";
      function Gn(C) {
        var P = /[=:]/g, ee = {
          "=": "=0",
          ":": "=2"
        }, le = C.replace(P, function(ze) {
          return ee[ze];
        });
        return "$" + le;
      }
      var Yt = !1, Vn = /\/+/g;
      function Qt(C) {
        return C.replace(Vn, "$&/");
      }
      function Dt(C, P) {
        return typeof C == "object" && C !== null && C.key != null ? (Lt(C.key), Gn("" + C.key)) : P.toString(36);
      }
      function In(C, P, ee, le, ze) {
        var ot = typeof C;
        (ot === "undefined" || ot === "boolean") && (C = null);
        var Je = !1;
        if (C === null)
          Je = !0;
        else
          switch (ot) {
            case "string":
            case "number":
              Je = !0;
              break;
            case "object":
              switch (C.$$typeof) {
                case m:
                case g:
                  Je = !0;
              }
          }
        if (Je) {
          var Ct = C, Ft = ze(Ct), hn = le === "" ? Rn + Dt(Ct, 0) : le;
          if (_t(Ft)) {
            var yn = "";
            hn != null && (yn = Qt(hn) + "/"), In(Ft, P, yn, "", function(op) {
              return op;
            });
          } else Ft != null && (Ht(Ft) && (Ft.key && (!Ct || Ct.key !== Ft.key) && Lt(Ft.key), Ft = Tt(
            Ft,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            ee + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ft.key && (!Ct || Ct.key !== Ft.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Qt("" + Ft.key) + "/"
            ) : "") + hn
          )), P.push(Ft));
          return 1;
        }
        var gn, Sn, Fn = 0, Zt = le === "" ? Rn : le + fn;
        if (_t(C))
          for (var qo = 0; qo < C.length; qo++)
            gn = C[qo], Sn = Zt + Dt(gn, qo), Fn += In(gn, P, ee, Sn, ze);
        else {
          var Ou = fe(C);
          if (typeof Ou == "function") {
            var Vs = C;
            Ou === Vs.entries && (Yt || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var Is = Ou.call(Vs), so, Ws = 0; !(so = Is.next()).done; )
              gn = so.value, Sn = Zt + Dt(gn, Ws++), Fn += In(gn, P, ee, Sn, ze);
          } else if (ot === "object") {
            var Ys = String(C);
            throw new Error("Objects are not valid as a React child (found: " + (Ys === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : Ys) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Fn;
      }
      function lt(C, P, ee) {
        if (C == null)
          return C;
        var le = [], ze = 0;
        return In(C, le, "", "", function(ot) {
          return P.call(ee, ot, ze++);
        }), le;
      }
      function jt(C) {
        var P = 0;
        return lt(C, function() {
          P++;
        }), P;
      }
      function pr(C, P, ee) {
        lt(C, function() {
          P.apply(this, arguments);
        }, ee);
      }
      function ra(C) {
        return lt(C, function(P) {
          return P;
        }) || [];
      }
      function Ie(C) {
        if (!Ht(C))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return C;
      }
      function ft(C) {
        var P = {
          $$typeof: k,
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
        P.Provider = {
          $$typeof: O,
          _context: P
        };
        var ee = !1, le = !1, ze = !1;
        {
          var ot = {
            $$typeof: k,
            _context: P
          };
          Object.defineProperties(ot, {
            Provider: {
              get: function() {
                return le || (le = !0, N("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), P.Provider;
              },
              set: function(Je) {
                P.Provider = Je;
              }
            },
            _currentValue: {
              get: function() {
                return P._currentValue;
              },
              set: function(Je) {
                P._currentValue = Je;
              }
            },
            _currentValue2: {
              get: function() {
                return P._currentValue2;
              },
              set: function(Je) {
                P._currentValue2 = Je;
              }
            },
            _threadCount: {
              get: function() {
                return P._threadCount;
              },
              set: function(Je) {
                P._threadCount = Je;
              }
            },
            Consumer: {
              get: function() {
                return ee || (ee = !0, N("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), P.Consumer;
              }
            },
            displayName: {
              get: function() {
                return P.displayName;
              },
              set: function(Je) {
                ze || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Je), ze = !0);
              }
            }
          }), P.Consumer = ot;
        }
        return P._currentRenderer = null, P._currentRenderer2 = null, P;
      }
      var mt = -1, sn = 0, Dn = 1, zn = 2;
      function Un(C) {
        if (C._status === mt) {
          var P = C._result, ee = P();
          if (ee.then(function(ot) {
            if (C._status === sn || C._status === mt) {
              var Je = C;
              Je._status = Dn, Je._result = ot;
            }
          }, function(ot) {
            if (C._status === sn || C._status === mt) {
              var Je = C;
              Je._status = zn, Je._result = ot;
            }
          }), C._status === mt) {
            var le = C;
            le._status = sn, le._result = ee;
          }
        }
        if (C._status === Dn) {
          var ze = C._result;
          return ze === void 0 && N(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ze), "default" in ze || N(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ze), ze.default;
        } else
          throw C._result;
      }
      function mn(C) {
        var P = {
          // We use these fields to store the result.
          _status: mt,
          _result: C
        }, ee = {
          $$typeof: H,
          _payload: P,
          _init: Un
        };
        {
          var le, ze;
          Object.defineProperties(ee, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return le;
              },
              set: function(ot) {
                N("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), le = ot, Object.defineProperty(ee, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ze;
              },
              set: function(ot) {
                N("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ze = ot, Object.defineProperty(ee, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return ee;
      }
      function ir(C) {
        C != null && C.$$typeof === U ? N("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof C != "function" ? N("forwardRef requires a render function but was given %s.", C === null ? "null" : typeof C) : C.length !== 0 && C.length !== 2 && N("forwardRef render functions accept exactly two parameters: props and ref. %s", C.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), C != null && (C.defaultProps != null || C.propTypes != null) && N("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var P = {
          $$typeof: R,
          render: C
        };
        {
          var ee;
          Object.defineProperty(P, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ee;
            },
            set: function(le) {
              ee = le, !C.name && !C.displayName && (C.displayName = le);
            }
          });
        }
        return P;
      }
      var z;
      z = Symbol.for("react.module.reference");
      function Se(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === S || C === x || ie || C === y || C === D || C === j || Z || C === oe || Oe || ge || Ne || typeof C == "object" && C !== null && (C.$$typeof === H || C.$$typeof === U || C.$$typeof === O || C.$$typeof === k || C.$$typeof === R || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        C.$$typeof === z || C.getModuleId !== void 0));
      }
      function We(C, P) {
        Se(C) || N("memo: The first argument must be a component. Instead received: %s", C === null ? "null" : typeof C);
        var ee = {
          $$typeof: U,
          type: C,
          compare: P === void 0 ? null : P
        };
        {
          var le;
          Object.defineProperty(ee, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return le;
            },
            set: function(ze) {
              le = ze, !C.name && !C.displayName && (C.displayName = ze);
            }
          });
        }
        return ee;
      }
      function Ye() {
        var C = Re.current;
        return C === null && N(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), C;
      }
      function Ut(C) {
        var P = Ye();
        if (C._context !== void 0) {
          var ee = C._context;
          ee.Consumer === C ? N("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : ee.Provider === C && N("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return P.useContext(C);
      }
      function Bt(C) {
        var P = Ye();
        return P.useState(C);
      }
      function At(C, P, ee) {
        var le = Ye();
        return le.useReducer(C, P, ee);
      }
      function $e(C) {
        var P = Ye();
        return P.useRef(C);
      }
      function dn(C, P) {
        var ee = Ye();
        return ee.useEffect(C, P);
      }
      function pn(C, P) {
        var ee = Ye();
        return ee.useInsertionEffect(C, P);
      }
      function tn(C, P) {
        var ee = Ye();
        return ee.useLayoutEffect(C, P);
      }
      function Mr(C, P) {
        var ee = Ye();
        return ee.useCallback(C, P);
      }
      function ma(C, P) {
        var ee = Ye();
        return ee.useMemo(C, P);
      }
      function An(C, P, ee) {
        var le = Ye();
        return le.useImperativeHandle(C, P, ee);
      }
      function ya(C, P) {
        {
          var ee = Ye();
          return ee.useDebugValue(C, P);
        }
      }
      function Ns() {
        var C = Ye();
        return C.useTransition();
      }
      function Li(C) {
        var P = Ye();
        return P.useDeferredValue(C);
      }
      function Pt() {
        var C = Ye();
        return C.useId();
      }
      function Dl(C, P, ee) {
        var le = Ye();
        return le.useSyncExternalStore(C, P, ee);
      }
      var ao = 0, $o, ga, Ls, aa, Ms, js, zs;
      function Al() {
      }
      Al.__reactDisabledLog = !0;
      function wu() {
        {
          if (ao === 0) {
            $o = console.log, ga = console.info, Ls = console.warn, aa = console.error, Ms = console.group, js = console.groupCollapsed, zs = console.groupEnd;
            var C = {
              configurable: !0,
              enumerable: !0,
              value: Al,
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
          ao++;
        }
      }
      function io() {
        {
          if (ao--, ao === 0) {
            var C = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: _e({}, C, {
                value: $o
              }),
              info: _e({}, C, {
                value: ga
              }),
              warn: _e({}, C, {
                value: Ls
              }),
              error: _e({}, C, {
                value: aa
              }),
              group: _e({}, C, {
                value: Ms
              }),
              groupCollapsed: _e({}, C, {
                value: js
              }),
              groupEnd: _e({}, C, {
                value: zs
              })
            });
          }
          ao < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Mi = de.ReactCurrentDispatcher, Ka;
      function Bo(C, P, ee) {
        {
          if (Ka === void 0)
            try {
              throw Error();
            } catch (ze) {
              var le = ze.stack.trim().match(/\n( *(at )?)/);
              Ka = le && le[1] || "";
            }
          return `
` + Ka + C;
        }
      }
      var ji = !1, Nl;
      {
        var Ll = typeof WeakMap == "function" ? WeakMap : Map;
        Nl = new Ll();
      }
      function Vo(C, P) {
        if (!C || ji)
          return "";
        {
          var ee = Nl.get(C);
          if (ee !== void 0)
            return ee;
        }
        var le;
        ji = !0;
        var ze = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ot;
        ot = Mi.current, Mi.current = null, wu();
        try {
          if (P) {
            var Je = function() {
              throw Error();
            };
            if (Object.defineProperty(Je.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Je, []);
              } catch (Zt) {
                le = Zt;
              }
              Reflect.construct(C, [], Je);
            } else {
              try {
                Je.call();
              } catch (Zt) {
                le = Zt;
              }
              C.call(Je.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Zt) {
              le = Zt;
            }
            C();
          }
        } catch (Zt) {
          if (Zt && le && typeof Zt.stack == "string") {
            for (var Ct = Zt.stack.split(`
`), Ft = le.stack.split(`
`), hn = Ct.length - 1, yn = Ft.length - 1; hn >= 1 && yn >= 0 && Ct[hn] !== Ft[yn]; )
              yn--;
            for (; hn >= 1 && yn >= 0; hn--, yn--)
              if (Ct[hn] !== Ft[yn]) {
                if (hn !== 1 || yn !== 1)
                  do
                    if (hn--, yn--, yn < 0 || Ct[hn] !== Ft[yn]) {
                      var gn = `
` + Ct[hn].replace(" at new ", " at ");
                      return C.displayName && gn.includes("<anonymous>") && (gn = gn.replace("<anonymous>", C.displayName)), typeof C == "function" && Nl.set(C, gn), gn;
                    }
                  while (hn >= 1 && yn >= 0);
                break;
              }
          }
        } finally {
          ji = !1, Mi.current = ot, io(), Error.prepareStackTrace = ze;
        }
        var Sn = C ? C.displayName || C.name : "", Fn = Sn ? Bo(Sn) : "";
        return typeof C == "function" && Nl.set(C, Fn), Fn;
      }
      function Us(C, P, ee) {
        return Vo(C, !1);
      }
      function Ps(C) {
        var P = C.prototype;
        return !!(P && P.isReactComponent);
      }
      function qt(C, P, ee) {
        if (C == null)
          return "";
        if (typeof C == "function")
          return Vo(C, Ps(C));
        if (typeof C == "string")
          return Bo(C);
        switch (C) {
          case D:
            return Bo("Suspense");
          case j:
            return Bo("SuspenseList");
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case R:
              return Us(C.render);
            case U:
              return qt(C.type, P, ee);
            case H: {
              var le = C, ze = le._payload, ot = le._init;
              try {
                return qt(ot(ze), P, ee);
              } catch {
              }
            }
          }
        return "";
      }
      var Fs = {}, bu = de.ReactDebugCurrentFrame;
      function Io(C) {
        if (C) {
          var P = C._owner, ee = qt(C.type, C._source, P ? P.type : null);
          bu.setExtraStackFrame(ee);
        } else
          bu.setExtraStackFrame(null);
      }
      function Hs(C, P, ee, le, ze) {
        {
          var ot = Function.call.bind(_r);
          for (var Je in C)
            if (ot(C, Je)) {
              var Ct = void 0;
              try {
                if (typeof C[Je] != "function") {
                  var Ft = Error((le || "React class") + ": " + ee + " type `" + Je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ft.name = "Invariant Violation", Ft;
                }
                Ct = C[Je](P, Je, le, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (hn) {
                Ct = hn;
              }
              Ct && !(Ct instanceof Error) && (Io(ze), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", ee, Je, typeof Ct), Io(null)), Ct instanceof Error && !(Ct.message in Fs) && (Fs[Ct.message] = !0, Io(ze), N("Failed %s type: %s", ee, Ct.message), Io(null));
            }
        }
      }
      function Jt(C) {
        if (C) {
          var P = C._owner, ee = qt(C.type, C._source, P ? P.type : null);
          ke(ee);
        } else
          ke(null);
      }
      var Cu;
      Cu = !1;
      function Ml() {
        if (tt.current) {
          var C = jn(tt.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
      function Rt(C) {
        if (C !== void 0) {
          var P = C.fileName.replace(/^.*[\\\/]/, ""), ee = C.lineNumber;
          return `

Check your code at ` + P + ":" + ee + ".";
        }
        return "";
      }
      function Si(C) {
        return C != null ? Rt(C.__source) : "";
      }
      var Kn = {};
      function Sa(C) {
        var P = Ml();
        if (!P) {
          var ee = typeof C == "string" ? C : C.displayName || C.name;
          ee && (P = `

Check the top-level render call using <` + ee + ">.");
        }
        return P;
      }
      function Xa(C, P) {
        if (!(!C._store || C._store.validated || C.key != null)) {
          C._store.validated = !0;
          var ee = Sa(P);
          if (!Kn[ee]) {
            Kn[ee] = !0;
            var le = "";
            C && C._owner && C._owner !== tt.current && (le = " It was passed a child from " + jn(C._owner.type) + "."), Jt(C), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, le), Jt(null);
          }
        }
      }
      function Wo(C, P) {
        if (typeof C == "object") {
          if (_t(C))
            for (var ee = 0; ee < C.length; ee++) {
              var le = C[ee];
              Ht(le) && Xa(le, P);
            }
          else if (Ht(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var ze = fe(C);
            if (typeof ze == "function" && ze !== C.entries)
              for (var ot = ze.call(C), Je; !(Je = ot.next()).done; )
                Ht(Je.value) && Xa(Je.value, P);
          }
        }
      }
      function Pn(C) {
        {
          var P = C.type;
          if (P == null || typeof P == "string")
            return;
          var ee;
          if (typeof P == "function")
            ee = P.propTypes;
          else if (typeof P == "object" && (P.$$typeof === R || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          P.$$typeof === U))
            ee = P.propTypes;
          else
            return;
          if (ee) {
            var le = jn(P);
            Hs(ee, C.props, "prop", le, C);
          } else if (P.PropTypes !== void 0 && !Cu) {
            Cu = !0;
            var ze = jn(P);
            N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ze || "Unknown");
          }
          typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Xn(C) {
        {
          for (var P = Object.keys(C.props), ee = 0; ee < P.length; ee++) {
            var le = P[ee];
            if (le !== "children" && le !== "key") {
              Jt(C), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), Jt(null);
              break;
            }
          }
          C.ref !== null && (Jt(C), N("Invalid attribute `ref` supplied to `React.Fragment`."), Jt(null));
        }
      }
      function $s(C, P, ee) {
        var le = Se(C);
        if (!le) {
          var ze = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = Si(P);
          ot ? ze += ot : ze += Ml();
          var Je;
          C === null ? Je = "null" : _t(C) ? Je = "array" : C !== void 0 && C.$$typeof === m ? (Je = "<" + (jn(C.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : Je = typeof C, N("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Je, ze);
        }
        var Ct = Ve.apply(this, arguments);
        if (Ct == null)
          return Ct;
        if (le)
          for (var Ft = 2; Ft < arguments.length; Ft++)
            Wo(arguments[Ft], C);
        return C === S ? Xn(Ct) : Pn(Ct), Ct;
      }
      var Hr = !1;
      function Ea(C) {
        var P = $s.bind(null, C);
        return P.type = C, Hr || (Hr = !0, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(P, "type", {
          enumerable: !1,
          get: function() {
            return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: C
            }), C;
          }
        }), P;
      }
      function Ei(C, P, ee) {
        for (var le = Wt.apply(this, arguments), ze = 2; ze < arguments.length; ze++)
          Wo(arguments[ze], le.type);
        return Pn(le), le;
      }
      function xu(C, P) {
        var ee = X.transition;
        X.transition = {};
        var le = X.transition;
        X.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          C();
        } finally {
          if (X.transition = ee, ee === null && le._updatedFibers) {
            var ze = le._updatedFibers.size;
            ze > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), le._updatedFibers.clear();
          }
        }
      }
      var jl = !1, zl = null;
      function Yo(C) {
        if (zl === null)
          try {
            var P = ("require" + Math.random()).slice(0, 7), ee = u && u[P];
            zl = ee.call(u, "timers").setImmediate;
          } catch {
            zl = function(ze) {
              jl === !1 && (jl = !0, typeof MessageChannel > "u" && N("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ot = new MessageChannel();
              ot.port1.onmessage = ze, ot.port2.postMessage(void 0);
            };
          }
        return zl(C);
      }
      var Ja = 0, oo = !1;
      function _u(C) {
        {
          var P = Ja;
          Ja++, Ae.current === null && (Ae.current = []);
          var ee = Ae.isBatchingLegacy, le;
          try {
            if (Ae.isBatchingLegacy = !0, le = C(), !ee && Ae.didScheduleLegacyUpdate) {
              var ze = Ae.current;
              ze !== null && (Ae.didScheduleLegacyUpdate = !1, uo(ze));
            }
          } catch (Sn) {
            throw lo(P), Sn;
          } finally {
            Ae.isBatchingLegacy = ee;
          }
          if (le !== null && typeof le == "object" && typeof le.then == "function") {
            var ot = le, Je = !1, Ct = {
              then: function(Sn, Fn) {
                Je = !0, ot.then(function(Zt) {
                  lo(P), Ja === 0 ? Ru(Zt, Sn, Fn) : Sn(Zt);
                }, function(Zt) {
                  lo(P), Fn(Zt);
                });
              }
            };
            return !oo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Je || (oo = !0, N("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ct;
          } else {
            var Ft = le;
            if (lo(P), Ja === 0) {
              var hn = Ae.current;
              hn !== null && (uo(hn), Ae.current = null);
              var yn = {
                then: function(Sn, Fn) {
                  Ae.current === null ? (Ae.current = [], Ru(Ft, Sn, Fn)) : Sn(Ft);
                }
              };
              return yn;
            } else {
              var gn = {
                then: function(Sn, Fn) {
                  Sn(Ft);
                }
              };
              return gn;
            }
          }
        }
      }
      function lo(C) {
        C !== Ja - 1 && N("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ja = C;
      }
      function Ru(C, P, ee) {
        {
          var le = Ae.current;
          if (le !== null)
            try {
              uo(le), Yo(function() {
                le.length === 0 ? (Ae.current = null, P(C)) : Ru(C, P, ee);
              });
            } catch (ze) {
              ee(ze);
            }
          else
            P(C);
        }
      }
      var zi = !1;
      function uo(C) {
        if (!zi) {
          zi = !0;
          var P = 0;
          try {
            for (; P < C.length; P++) {
              var ee = C[P];
              do
                ee = ee(!0);
              while (ee !== null);
            }
            C.length = 0;
          } catch (le) {
            throw C = C.slice(P + 1), le;
          } finally {
            zi = !1;
          }
        }
      }
      var Tu = $s, Bs = Ei, wi = Ea, ku = {
        map: lt,
        forEach: pr,
        count: jt,
        toArray: ra,
        only: Ie
      };
      l.Children = ku, l.Component = Pe, l.Fragment = S, l.Profiler = x, l.PureComponent = ht, l.StrictMode = y, l.Suspense = D, l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = de, l.cloneElement = Bs, l.createContext = ft, l.createElement = Tu, l.createFactory = wi, l.createRef = $t, l.forwardRef = ir, l.isValidElement = Ht, l.lazy = mn, l.memo = We, l.startTransition = xu, l.unstable_act = _u, l.useCallback = Mr, l.useContext = Ut, l.useDebugValue = ya, l.useDeferredValue = Li, l.useEffect = dn, l.useId = Pt, l.useImperativeHandle = An, l.useInsertionEffect = pn, l.useLayoutEffect = tn, l.useMemo = ma, l.useReducer = At, l.useRef = $e, l.useState = Bt, l.useSyncExternalStore = Dl, l.useTransition = Ns, l.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sv, sv.exports)), sv.exports;
}
var NL = {};
NL.NODE_ENV === "production" ? Bw.exports = DL() : Bw.exports = AL();
var me = Bw.exports;
const Cl = /* @__PURE__ */ pb(me);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gR;
function LL() {
  if (gR) return rv;
  gR = 1;
  var u = me, l = Symbol.for("react.element"), c = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, m = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(y, x, O) {
    var k, R = {}, D = null, j = null;
    O !== void 0 && (D = "" + O), x.key !== void 0 && (D = "" + x.key), x.ref !== void 0 && (j = x.ref);
    for (k in x) d.call(x, k) && !g.hasOwnProperty(k) && (R[k] = x[k]);
    if (y && y.defaultProps) for (k in x = y.defaultProps, x) R[k] === void 0 && (R[k] = x[k]);
    return { $$typeof: l, type: y, key: D, ref: j, props: R, _owner: m.current };
  }
  return rv.Fragment = c, rv.jsx = S, rv.jsxs = S, rv;
}
var av = {}, SR;
function ML() {
  if (SR) return av;
  SR = 1;
  var u = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return u.NODE_ENV !== "production" && function() {
    var l = me, c = Symbol.for("react.element"), d = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), x = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), H = Symbol.iterator, oe = "@@iterator";
    function ve(z) {
      if (z === null || typeof z != "object")
        return null;
      var Se = H && z[H] || z[oe];
      return typeof Se == "function" ? Se : null;
    }
    var xe = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function fe(z) {
      {
        for (var Se = arguments.length, We = new Array(Se > 1 ? Se - 1 : 0), Ye = 1; Ye < Se; Ye++)
          We[Ye - 1] = arguments[Ye];
        Re("error", z, We);
      }
    }
    function Re(z, Se, We) {
      {
        var Ye = xe.ReactDebugCurrentFrame, Ut = Ye.getStackAddendum();
        Ut !== "" && (Se += "%s", We = We.concat([Ut]));
        var Bt = We.map(function(At) {
          return String(At);
        });
        Bt.unshift("Warning: " + Se), Function.prototype.apply.call(console[z], console, Bt);
      }
    }
    var X = !1, Ae = !1, tt = !1, q = !1, we = !1, ke;
    ke = Symbol.for("react.module.reference");
    function Oe(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === m || z === S || we || z === g || z === k || z === R || q || z === U || X || Ae || tt || typeof z == "object" && z !== null && (z.$$typeof === j || z.$$typeof === D || z.$$typeof === y || z.$$typeof === x || z.$$typeof === O || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === ke || z.getModuleId !== void 0));
    }
    function ge(z, Se, We) {
      var Ye = z.displayName;
      if (Ye)
        return Ye;
      var Ut = Se.displayName || Se.name || "";
      return Ut !== "" ? We + "(" + Ut + ")" : We;
    }
    function Ne(z) {
      return z.displayName || "Context";
    }
    function Z(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && fe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
        return z.displayName || z.name || null;
      if (typeof z == "string")
        return z;
      switch (z) {
        case m:
          return "Fragment";
        case d:
          return "Portal";
        case S:
          return "Profiler";
        case g:
          return "StrictMode";
        case k:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case x:
            var Se = z;
            return Ne(Se) + ".Consumer";
          case y:
            var We = z;
            return Ne(We._context) + ".Provider";
          case O:
            return ge(z, z.render, "ForwardRef");
          case D:
            var Ye = z.displayName || null;
            return Ye !== null ? Ye : Z(z.type) || "Memo";
          case j: {
            var Ut = z, Bt = Ut._payload, At = Ut._init;
            try {
              return Z(At(Bt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ie = Object.assign, de = 0, ue, N, re, L, F, J, _e;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Pe() {
      {
        if (de === 0) {
          ue = console.log, N = console.info, re = console.warn, L = console.error, F = console.group, J = console.groupCollapsed, _e = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: z,
            log: z,
            warn: z,
            error: z,
            group: z,
            groupCollapsed: z,
            groupEnd: z
          });
        }
        de++;
      }
    }
    function Be() {
      {
        if (de--, de === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ie({}, z, {
              value: ue
            }),
            info: ie({}, z, {
              value: N
            }),
            warn: ie({}, z, {
              value: re
            }),
            error: ie({}, z, {
              value: L
            }),
            group: ie({}, z, {
              value: F
            }),
            groupCollapsed: ie({}, z, {
              value: J
            }),
            groupEnd: ie({}, z, {
              value: _e
            })
          });
        }
        de < 0 && fe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Le = xe.ReactCurrentDispatcher, Fe;
    function Ge(z, Se, We) {
      {
        if (Fe === void 0)
          try {
            throw Error();
          } catch (Ut) {
            var Ye = Ut.stack.trim().match(/\n( *(at )?)/);
            Fe = Ye && Ye[1] || "";
          }
        return `
` + Fe + z;
      }
    }
    var ht = !1, vt;
    {
      var $t = typeof WeakMap == "function" ? WeakMap : Map;
      vt = new $t();
    }
    function Me(z, Se) {
      if (!z || ht)
        return "";
      {
        var We = vt.get(z);
        if (We !== void 0)
          return We;
      }
      var Ye;
      ht = !0;
      var Ut = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Bt;
      Bt = Le.current, Le.current = null, Pe();
      try {
        if (Se) {
          var At = function() {
            throw Error();
          };
          if (Object.defineProperty(At.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(At, []);
            } catch (ya) {
              Ye = ya;
            }
            Reflect.construct(z, [], At);
          } else {
            try {
              At.call();
            } catch (ya) {
              Ye = ya;
            }
            z.call(At.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ya) {
            Ye = ya;
          }
          z();
        }
      } catch (ya) {
        if (ya && Ye && typeof ya.stack == "string") {
          for (var $e = ya.stack.split(`
`), dn = Ye.stack.split(`
`), pn = $e.length - 1, tn = dn.length - 1; pn >= 1 && tn >= 0 && $e[pn] !== dn[tn]; )
            tn--;
          for (; pn >= 1 && tn >= 0; pn--, tn--)
            if ($e[pn] !== dn[tn]) {
              if (pn !== 1 || tn !== 1)
                do
                  if (pn--, tn--, tn < 0 || $e[pn] !== dn[tn]) {
                    var Mr = `
` + $e[pn].replace(" at new ", " at ");
                    return z.displayName && Mr.includes("<anonymous>") && (Mr = Mr.replace("<anonymous>", z.displayName)), typeof z == "function" && vt.set(z, Mr), Mr;
                  }
                while (pn >= 1 && tn >= 0);
              break;
            }
        }
      } finally {
        ht = !1, Le.current = Bt, Be(), Error.prepareStackTrace = Ut;
      }
      var ma = z ? z.displayName || z.name : "", An = ma ? Ge(ma) : "";
      return typeof z == "function" && vt.set(z, An), An;
    }
    function _t(z, Se, We) {
      return Me(z, !1);
    }
    function _n(z) {
      var Se = z.prototype;
      return !!(Se && Se.isReactComponent);
    }
    function cn(z, Se, We) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return Me(z, _n(z));
      if (typeof z == "string")
        return Ge(z);
      switch (z) {
        case k:
          return Ge("Suspense");
        case R:
          return Ge("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case O:
            return _t(z.render);
          case D:
            return cn(z.type, Se, We);
          case j: {
            var Ye = z, Ut = Ye._payload, Bt = Ye._init;
            try {
              return cn(Bt(Ut), Se, We);
            } catch {
            }
          }
        }
      return "";
    }
    var En = Object.prototype.hasOwnProperty, Lt = {}, dr = xe.ReactDebugCurrentFrame;
    function rr(z) {
      if (z) {
        var Se = z._owner, We = cn(z.type, z._source, Se ? Se.type : null);
        dr.setExtraStackFrame(We);
      } else
        dr.setExtraStackFrame(null);
    }
    function jn(z, Se, We, Ye, Ut) {
      {
        var Bt = Function.call.bind(En);
        for (var At in z)
          if (Bt(z, At)) {
            var $e = void 0;
            try {
              if (typeof z[At] != "function") {
                var dn = Error((Ye || "React class") + ": " + We + " type `" + At + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[At] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw dn.name = "Invariant Violation", dn;
              }
              $e = z[At](Se, At, Ye, We, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pn) {
              $e = pn;
            }
            $e && !($e instanceof Error) && (rr(Ut), fe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ye || "React class", We, At, typeof $e), rr(null)), $e instanceof Error && !($e.message in Lt) && (Lt[$e.message] = !0, rr(Ut), fe("Failed %s type: %s", We, $e.message), rr(null));
          }
      }
    }
    var _r = Array.isArray;
    function Lr(z) {
      return _r(z);
    }
    function Yn(z) {
      {
        var Se = typeof Symbol == "function" && Symbol.toStringTag, We = Se && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return We;
      }
    }
    function ar(z) {
      try {
        return qn(z), !1;
      } catch {
        return !0;
      }
    }
    function qn(z) {
      return "" + z;
    }
    function Qn(z) {
      if (ar(z))
        return fe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yn(z)), qn(z);
    }
    var un = xe.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wr, Tr, je;
    je = {};
    function Ve(z) {
      if (En.call(z, "ref")) {
        var Se = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (Se && Se.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function Tt(z) {
      if (En.call(z, "key")) {
        var Se = Object.getOwnPropertyDescriptor(z, "key").get;
        if (Se && Se.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function Wt(z, Se) {
      if (typeof z.ref == "string" && un.current && Se && un.current.stateNode !== Se) {
        var We = Z(un.current.type);
        je[We] || (fe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(un.current.type), z.ref), je[We] = !0);
      }
    }
    function Ht(z, Se) {
      {
        var We = function() {
          wr || (wr = !0, fe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Se));
        };
        We.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: We,
          configurable: !0
        });
      }
    }
    function Rn(z, Se) {
      {
        var We = function() {
          Tr || (Tr = !0, fe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Se));
        };
        We.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: We,
          configurable: !0
        });
      }
    }
    var fn = function(z, Se, We, Ye, Ut, Bt, At) {
      var $e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: z,
        key: Se,
        ref: We,
        props: At,
        // Record the component responsible for creating this element.
        _owner: Bt
      };
      return $e._store = {}, Object.defineProperty($e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($e, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ye
      }), Object.defineProperty($e, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ut
      }), Object.freeze && (Object.freeze($e.props), Object.freeze($e)), $e;
    };
    function Gn(z, Se, We, Ye, Ut) {
      {
        var Bt, At = {}, $e = null, dn = null;
        We !== void 0 && (Qn(We), $e = "" + We), Tt(Se) && (Qn(Se.key), $e = "" + Se.key), Ve(Se) && (dn = Se.ref, Wt(Se, Ut));
        for (Bt in Se)
          En.call(Se, Bt) && !Rr.hasOwnProperty(Bt) && (At[Bt] = Se[Bt]);
        if (z && z.defaultProps) {
          var pn = z.defaultProps;
          for (Bt in pn)
            At[Bt] === void 0 && (At[Bt] = pn[Bt]);
        }
        if ($e || dn) {
          var tn = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          $e && Ht(At, tn), dn && Rn(At, tn);
        }
        return fn(z, $e, dn, Ut, Ye, un.current, At);
      }
    }
    var Yt = xe.ReactCurrentOwner, Vn = xe.ReactDebugCurrentFrame;
    function Qt(z) {
      if (z) {
        var Se = z._owner, We = cn(z.type, z._source, Se ? Se.type : null);
        Vn.setExtraStackFrame(We);
      } else
        Vn.setExtraStackFrame(null);
    }
    var Dt;
    Dt = !1;
    function In(z) {
      return typeof z == "object" && z !== null && z.$$typeof === c;
    }
    function lt() {
      {
        if (Yt.current) {
          var z = Z(Yt.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function jt(z) {
      return "";
    }
    var pr = {};
    function ra(z) {
      {
        var Se = lt();
        if (!Se) {
          var We = typeof z == "string" ? z : z.displayName || z.name;
          We && (Se = `

Check the top-level render call using <` + We + ">.");
        }
        return Se;
      }
    }
    function Ie(z, Se) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var We = ra(Se);
        if (pr[We])
          return;
        pr[We] = !0;
        var Ye = "";
        z && z._owner && z._owner !== Yt.current && (Ye = " It was passed a child from " + Z(z._owner.type) + "."), Qt(z), fe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', We, Ye), Qt(null);
      }
    }
    function ft(z, Se) {
      {
        if (typeof z != "object")
          return;
        if (Lr(z))
          for (var We = 0; We < z.length; We++) {
            var Ye = z[We];
            In(Ye) && Ie(Ye, Se);
          }
        else if (In(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var Ut = ve(z);
          if (typeof Ut == "function" && Ut !== z.entries)
            for (var Bt = Ut.call(z), At; !(At = Bt.next()).done; )
              In(At.value) && Ie(At.value, Se);
        }
      }
    }
    function mt(z) {
      {
        var Se = z.type;
        if (Se == null || typeof Se == "string")
          return;
        var We;
        if (typeof Se == "function")
          We = Se.propTypes;
        else if (typeof Se == "object" && (Se.$$typeof === O || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Se.$$typeof === D))
          We = Se.propTypes;
        else
          return;
        if (We) {
          var Ye = Z(Se);
          jn(We, z.props, "prop", Ye, z);
        } else if (Se.PropTypes !== void 0 && !Dt) {
          Dt = !0;
          var Ut = Z(Se);
          fe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ut || "Unknown");
        }
        typeof Se.getDefaultProps == "function" && !Se.getDefaultProps.isReactClassApproved && fe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sn(z) {
      {
        for (var Se = Object.keys(z.props), We = 0; We < Se.length; We++) {
          var Ye = Se[We];
          if (Ye !== "children" && Ye !== "key") {
            Qt(z), fe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ye), Qt(null);
            break;
          }
        }
        z.ref !== null && (Qt(z), fe("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    function Dn(z, Se, We, Ye, Ut, Bt) {
      {
        var At = Oe(z);
        if (!At) {
          var $e = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && ($e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var dn = jt();
          dn ? $e += dn : $e += lt();
          var pn;
          z === null ? pn = "null" : Lr(z) ? pn = "array" : z !== void 0 && z.$$typeof === c ? (pn = "<" + (Z(z.type) || "Unknown") + " />", $e = " Did you accidentally export a JSX literal instead of a component?") : pn = typeof z, fe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pn, $e);
        }
        var tn = Gn(z, Se, We, Ut, Bt);
        if (tn == null)
          return tn;
        if (At) {
          var Mr = Se.children;
          if (Mr !== void 0)
            if (Ye)
              if (Lr(Mr)) {
                for (var ma = 0; ma < Mr.length; ma++)
                  ft(Mr[ma], z);
                Object.freeze && Object.freeze(Mr);
              } else
                fe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(Mr, z);
        }
        return z === m ? sn(tn) : mt(tn), tn;
      }
    }
    function zn(z, Se, We) {
      return Dn(z, Se, We, !0);
    }
    function Un(z, Se, We) {
      return Dn(z, Se, We, !1);
    }
    var mn = Un, ir = zn;
    av.Fragment = m, av.jsx = mn, av.jsxs = ir;
  }(), av;
}
var jL = {};
jL.NODE_ENV === "production" ? $w.exports = LL() : $w.exports = ML();
var B = $w.exports, cv = {}, Vw = { exports: {} }, mi = {}, yg = { exports: {} }, Cw = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ER;
function zL() {
  return ER || (ER = 1, function(u) {
    function l(N, re) {
      var L = N.length;
      N.push(re);
      e: for (; 0 < L; ) {
        var F = L - 1 >>> 1, J = N[F];
        if (0 < m(J, re)) N[F] = re, N[L] = J, L = F;
        else break e;
      }
    }
    function c(N) {
      return N.length === 0 ? null : N[0];
    }
    function d(N) {
      if (N.length === 0) return null;
      var re = N[0], L = N.pop();
      if (L !== re) {
        N[0] = L;
        e: for (var F = 0, J = N.length, _e = J >>> 1; F < _e; ) {
          var be = 2 * (F + 1) - 1, Pe = N[be], Be = be + 1, Le = N[Be];
          if (0 > m(Pe, L)) Be < J && 0 > m(Le, Pe) ? (N[F] = Le, N[Be] = L, F = Be) : (N[F] = Pe, N[be] = L, F = be);
          else if (Be < J && 0 > m(Le, L)) N[F] = Le, N[Be] = L, F = Be;
          else break e;
        }
      }
      return re;
    }
    function m(N, re) {
      var L = N.sortIndex - re.sortIndex;
      return L !== 0 ? L : N.id - re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var g = performance;
      u.unstable_now = function() {
        return g.now();
      };
    } else {
      var S = Date, y = S.now();
      u.unstable_now = function() {
        return S.now() - y;
      };
    }
    var x = [], O = [], k = 1, R = null, D = 3, j = !1, U = !1, H = !1, oe = typeof setTimeout == "function" ? setTimeout : null, ve = typeof clearTimeout == "function" ? clearTimeout : null, xe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function fe(N) {
      for (var re = c(O); re !== null; ) {
        if (re.callback === null) d(O);
        else if (re.startTime <= N) d(O), re.sortIndex = re.expirationTime, l(x, re);
        else break;
        re = c(O);
      }
    }
    function Re(N) {
      if (H = !1, fe(N), !U) if (c(x) !== null) U = !0, de(X);
      else {
        var re = c(O);
        re !== null && ue(Re, re.startTime - N);
      }
    }
    function X(N, re) {
      U = !1, H && (H = !1, ve(q), q = -1), j = !0;
      var L = D;
      try {
        for (fe(re), R = c(x); R !== null && (!(R.expirationTime > re) || N && !Oe()); ) {
          var F = R.callback;
          if (typeof F == "function") {
            R.callback = null, D = R.priorityLevel;
            var J = F(R.expirationTime <= re);
            re = u.unstable_now(), typeof J == "function" ? R.callback = J : R === c(x) && d(x), fe(re);
          } else d(x);
          R = c(x);
        }
        if (R !== null) var _e = !0;
        else {
          var be = c(O);
          be !== null && ue(Re, be.startTime - re), _e = !1;
        }
        return _e;
      } finally {
        R = null, D = L, j = !1;
      }
    }
    var Ae = !1, tt = null, q = -1, we = 5, ke = -1;
    function Oe() {
      return !(u.unstable_now() - ke < we);
    }
    function ge() {
      if (tt !== null) {
        var N = u.unstable_now();
        ke = N;
        var re = !0;
        try {
          re = tt(!0, N);
        } finally {
          re ? Ne() : (Ae = !1, tt = null);
        }
      } else Ae = !1;
    }
    var Ne;
    if (typeof xe == "function") Ne = function() {
      xe(ge);
    };
    else if (typeof MessageChannel < "u") {
      var Z = new MessageChannel(), ie = Z.port2;
      Z.port1.onmessage = ge, Ne = function() {
        ie.postMessage(null);
      };
    } else Ne = function() {
      oe(ge, 0);
    };
    function de(N) {
      tt = N, Ae || (Ae = !0, Ne());
    }
    function ue(N, re) {
      q = oe(function() {
        N(u.unstable_now());
      }, re);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, u.unstable_continueExecution = function() {
      U || j || (U = !0, de(X));
    }, u.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : we = 0 < N ? Math.floor(1e3 / N) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, u.unstable_getFirstCallbackNode = function() {
      return c(x);
    }, u.unstable_next = function(N) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = D;
      }
      var L = D;
      D = re;
      try {
        return N();
      } finally {
        D = L;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(N, re) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var L = D;
      D = N;
      try {
        return re();
      } finally {
        D = L;
      }
    }, u.unstable_scheduleCallback = function(N, re, L) {
      var F = u.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? F + L : F) : L = F, N) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = L + J, N = { id: k++, callback: re, priorityLevel: N, startTime: L, expirationTime: J, sortIndex: -1 }, L > F ? (N.sortIndex = L, l(O, N), c(x) === null && N === c(O) && (H ? (ve(q), q = -1) : H = !0, ue(Re, L - F))) : (N.sortIndex = J, l(x, N), U || j || (U = !0, de(X))), N;
    }, u.unstable_shouldYield = Oe, u.unstable_wrapCallback = function(N) {
      var re = D;
      return function() {
        var L = D;
        D = re;
        try {
          return N.apply(this, arguments);
        } finally {
          D = L;
        }
      };
    };
  }(Cw)), Cw;
}
var xw = {}, wR;
function UL() {
  return wR || (wR = 1, function(u) {
    var l = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    l.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var c = !1, d = !1, m = 5;
      function g(je, Ve) {
        var Tt = je.length;
        je.push(Ve), x(je, Ve, Tt);
      }
      function S(je) {
        return je.length === 0 ? null : je[0];
      }
      function y(je) {
        if (je.length === 0)
          return null;
        var Ve = je[0], Tt = je.pop();
        return Tt !== Ve && (je[0] = Tt, O(je, Tt, 0)), Ve;
      }
      function x(je, Ve, Tt) {
        for (var Wt = Tt; Wt > 0; ) {
          var Ht = Wt - 1 >>> 1, Rn = je[Ht];
          if (k(Rn, Ve) > 0)
            je[Ht] = Ve, je[Wt] = Rn, Wt = Ht;
          else
            return;
        }
      }
      function O(je, Ve, Tt) {
        for (var Wt = Tt, Ht = je.length, Rn = Ht >>> 1; Wt < Rn; ) {
          var fn = (Wt + 1) * 2 - 1, Gn = je[fn], Yt = fn + 1, Vn = je[Yt];
          if (k(Gn, Ve) < 0)
            Yt < Ht && k(Vn, Gn) < 0 ? (je[Wt] = Vn, je[Yt] = Ve, Wt = Yt) : (je[Wt] = Gn, je[fn] = Ve, Wt = fn);
          else if (Yt < Ht && k(Vn, Ve) < 0)
            je[Wt] = Vn, je[Yt] = Ve, Wt = Yt;
          else
            return;
        }
      }
      function k(je, Ve) {
        var Tt = je.sortIndex - Ve.sortIndex;
        return Tt !== 0 ? Tt : je.id - Ve.id;
      }
      var R = 1, D = 2, j = 3, U = 4, H = 5;
      function oe(je, Ve) {
      }
      var ve = typeof performance == "object" && typeof performance.now == "function";
      if (ve) {
        var xe = performance;
        u.unstable_now = function() {
          return xe.now();
        };
      } else {
        var fe = Date, Re = fe.now();
        u.unstable_now = function() {
          return fe.now() - Re;
        };
      }
      var X = 1073741823, Ae = -1, tt = 250, q = 5e3, we = 1e4, ke = X, Oe = [], ge = [], Ne = 1, Z = null, ie = j, de = !1, ue = !1, N = !1, re = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function J(je) {
        for (var Ve = S(ge); Ve !== null; ) {
          if (Ve.callback === null)
            y(ge);
          else if (Ve.startTime <= je)
            y(ge), Ve.sortIndex = Ve.expirationTime, g(Oe, Ve);
          else
            return;
          Ve = S(ge);
        }
      }
      function _e(je) {
        if (N = !1, J(je), !ue)
          if (S(Oe) !== null)
            ue = !0, Qn(be);
          else {
            var Ve = S(ge);
            Ve !== null && un(_e, Ve.startTime - je);
          }
      }
      function be(je, Ve) {
        ue = !1, N && (N = !1, Rr()), de = !0;
        var Tt = ie;
        try {
          var Wt;
          if (!d) return Pe(je, Ve);
        } finally {
          Z = null, ie = Tt, de = !1;
        }
      }
      function Pe(je, Ve) {
        var Tt = Ve;
        for (J(Tt), Z = S(Oe); Z !== null && !c && !(Z.expirationTime > Tt && (!je || rr())); ) {
          var Wt = Z.callback;
          if (typeof Wt == "function") {
            Z.callback = null, ie = Z.priorityLevel;
            var Ht = Z.expirationTime <= Tt, Rn = Wt(Ht);
            Tt = u.unstable_now(), typeof Rn == "function" ? Z.callback = Rn : Z === S(Oe) && y(Oe), J(Tt);
          } else
            y(Oe);
          Z = S(Oe);
        }
        if (Z !== null)
          return !0;
        var fn = S(ge);
        return fn !== null && un(_e, fn.startTime - Tt), !1;
      }
      function Be(je, Ve) {
        switch (je) {
          case R:
          case D:
          case j:
          case U:
          case H:
            break;
          default:
            je = j;
        }
        var Tt = ie;
        ie = je;
        try {
          return Ve();
        } finally {
          ie = Tt;
        }
      }
      function Le(je) {
        var Ve;
        switch (ie) {
          case R:
          case D:
          case j:
            Ve = j;
            break;
          default:
            Ve = ie;
            break;
        }
        var Tt = ie;
        ie = Ve;
        try {
          return je();
        } finally {
          ie = Tt;
        }
      }
      function Fe(je) {
        var Ve = ie;
        return function() {
          var Tt = ie;
          ie = Ve;
          try {
            return je.apply(this, arguments);
          } finally {
            ie = Tt;
          }
        };
      }
      function Ge(je, Ve, Tt) {
        var Wt = u.unstable_now(), Ht;
        if (typeof Tt == "object" && Tt !== null) {
          var Rn = Tt.delay;
          typeof Rn == "number" && Rn > 0 ? Ht = Wt + Rn : Ht = Wt;
        } else
          Ht = Wt;
        var fn;
        switch (je) {
          case R:
            fn = Ae;
            break;
          case D:
            fn = tt;
            break;
          case H:
            fn = ke;
            break;
          case U:
            fn = we;
            break;
          case j:
          default:
            fn = q;
            break;
        }
        var Gn = Ht + fn, Yt = {
          id: Ne++,
          callback: Ve,
          priorityLevel: je,
          startTime: Ht,
          expirationTime: Gn,
          sortIndex: -1
        };
        return Ht > Wt ? (Yt.sortIndex = Ht, g(ge, Yt), S(Oe) === null && Yt === S(ge) && (N ? Rr() : N = !0, un(_e, Ht - Wt))) : (Yt.sortIndex = Gn, g(Oe, Yt), !ue && !de && (ue = !0, Qn(be))), Yt;
      }
      function ht() {
      }
      function vt() {
        !ue && !de && (ue = !0, Qn(be));
      }
      function $t() {
        return S(Oe);
      }
      function Me(je) {
        je.callback = null;
      }
      function _t() {
        return ie;
      }
      var _n = !1, cn = null, En = -1, Lt = m, dr = -1;
      function rr() {
        var je = u.unstable_now() - dr;
        return !(je < Lt);
      }
      function jn() {
      }
      function _r(je) {
        if (je < 0 || je > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        je > 0 ? Lt = Math.floor(1e3 / je) : Lt = m;
      }
      var Lr = function() {
        if (cn !== null) {
          var je = u.unstable_now();
          dr = je;
          var Ve = !0, Tt = !0;
          try {
            Tt = cn(Ve, je);
          } finally {
            Tt ? Yn() : (_n = !1, cn = null);
          }
        } else
          _n = !1;
      }, Yn;
      if (typeof F == "function")
        Yn = function() {
          F(Lr);
        };
      else if (typeof MessageChannel < "u") {
        var ar = new MessageChannel(), qn = ar.port2;
        ar.port1.onmessage = Lr, Yn = function() {
          qn.postMessage(null);
        };
      } else
        Yn = function() {
          re(Lr, 0);
        };
      function Qn(je) {
        cn = je, _n || (_n = !0, Yn());
      }
      function un(je, Ve) {
        En = re(function() {
          je(u.unstable_now());
        }, Ve);
      }
      function Rr() {
        L(En), En = -1;
      }
      var wr = jn, Tr = null;
      u.unstable_IdlePriority = H, u.unstable_ImmediatePriority = R, u.unstable_LowPriority = U, u.unstable_NormalPriority = j, u.unstable_Profiling = Tr, u.unstable_UserBlockingPriority = D, u.unstable_cancelCallback = Me, u.unstable_continueExecution = vt, u.unstable_forceFrameRate = _r, u.unstable_getCurrentPriorityLevel = _t, u.unstable_getFirstCallbackNode = $t, u.unstable_next = Le, u.unstable_pauseExecution = ht, u.unstable_requestPaint = wr, u.unstable_runWithPriority = Be, u.unstable_scheduleCallback = Ge, u.unstable_shouldYield = rr, u.unstable_wrapCallback = Fe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(xw)), xw;
}
var bR;
function C1() {
  if (bR) return yg.exports;
  bR = 1;
  var u = {};
  return u.NODE_ENV === "production" ? yg.exports = zL() : yg.exports = UL(), yg.exports;
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
var CR;
function PL() {
  if (CR) return mi;
  CR = 1;
  var u = me, l = C1();
  function c(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), m = {};
  function g(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (m[n] = r, n = 0; n < r.length; n++) d.add(r[n]);
  }
  var y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, R = {};
  function D(n) {
    return x.call(R, n) ? !0 : x.call(k, n) ? !1 : O.test(n) ? R[n] = !0 : (k[n] = !0, !1);
  }
  function j(n, r, o, f) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function U(n, r, o, f) {
    if (r === null || typeof r > "u" || j(n, r, o, f)) return !0;
    if (f) return !1;
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
  function H(n, r, o, f, h, E, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = h, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = E, this.removeEmptyString = _;
  }
  var oe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    oe[n] = new H(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    oe[r] = new H(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    oe[n] = new H(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    oe[n] = new H(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    oe[n] = new H(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    oe[n] = new H(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    oe[n] = new H(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    oe[n] = new H(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    oe[n] = new H(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ve = /[\-:]([a-z])/g;
  function xe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ve,
      xe
    );
    oe[r] = new H(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ve, xe);
    oe[r] = new H(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ve, xe);
    oe[r] = new H(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    oe[n] = new H(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), oe.xlinkHref = new H("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    oe[n] = new H(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function fe(n, r, o, f) {
    var h = oe.hasOwnProperty(r) ? oe[r] : null;
    (h !== null ? h.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (U(r, o, h, f) && (o = null), f || h === null ? D(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : h.mustUseProperty ? n[h.propertyName] = o === null ? h.type === 3 ? !1 : "" : o : (r = h.attributeName, f = h.attributeNamespace, o === null ? n.removeAttribute(r) : (h = h.type, o = h === 3 || h === 4 && o === !0 ? "" : "" + o, f ? n.setAttributeNS(f, r, o) : n.setAttribute(r, o))));
  }
  var Re = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, X = Symbol.for("react.element"), Ae = Symbol.for("react.portal"), tt = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), we = Symbol.for("react.profiler"), ke = Symbol.for("react.provider"), Oe = Symbol.for("react.context"), ge = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), N = Symbol.iterator;
  function re(n) {
    return n === null || typeof n != "object" ? null : (n = N && n[N] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var L = Object.assign, F;
  function J(n) {
    if (F === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      F = r && r[1] || "";
    }
    return `
` + F + n;
  }
  var _e = !1;
  function be(n, r) {
    if (!n || _e) return "";
    _e = !0;
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
        } catch (ae) {
          var f = ae;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (ae) {
          f = ae;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (ae) {
          f = ae;
        }
        n();
      }
    } catch (ae) {
      if (ae && f && typeof ae.stack == "string") {
        for (var h = ae.stack.split(`
`), E = f.stack.split(`
`), _ = h.length - 1, M = E.length - 1; 1 <= _ && 0 <= M && h[_] !== E[M]; ) M--;
        for (; 1 <= _ && 0 <= M; _--, M--) if (h[_] !== E[M]) {
          if (_ !== 1 || M !== 1)
            do
              if (_--, M--, 0 > M || h[_] !== E[M]) {
                var $ = `
` + h[_].replace(" at new ", " at ");
                return n.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", n.displayName)), $;
              }
            while (1 <= _ && 0 <= M);
          break;
        }
      }
    } finally {
      _e = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? J(n) : "";
  }
  function Pe(n) {
    switch (n.tag) {
      case 5:
        return J(n.type);
      case 16:
        return J("Lazy");
      case 13:
        return J("Suspense");
      case 19:
        return J("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = be(n.type, !1), n;
      case 11:
        return n = be(n.type.render, !1), n;
      case 1:
        return n = be(n.type, !0), n;
      default:
        return "";
    }
  }
  function Be(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case tt:
        return "Fragment";
      case Ae:
        return "Portal";
      case we:
        return "Profiler";
      case q:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case Z:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Oe:
        return (n.displayName || "Context") + ".Consumer";
      case ke:
        return (n._context.displayName || "Context") + ".Provider";
      case ge:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ie:
        return r = n.displayName || null, r !== null ? r : Be(n.type) || "Memo";
      case de:
        r = n._payload, n = n._init;
        try {
          return Be(n(r));
        } catch {
        }
    }
    return null;
  }
  function Le(n) {
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
        return Be(r);
      case 8:
        return r === q ? "StrictMode" : "Mode";
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
  function Fe(n) {
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
  function Ge(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ht(n) {
    var r = Ge(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var h = o.get, E = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(_) {
        f = "" + _, E.call(this, _);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(_) {
        f = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function vt(n) {
    n._valueTracker || (n._valueTracker = ht(n));
  }
  function $t(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), f = "";
    return n && (f = Ge(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Me(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function _t(n, r) {
    var o = r.checked;
    return L({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function _n(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    o = Fe(r.value != null ? r.value : o), n._wrapperState = { initialChecked: f, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function cn(n, r) {
    r = r.checked, r != null && fe(n, "checked", r, !1);
  }
  function En(n, r) {
    cn(n, r);
    var o = Fe(r.value), f = r.type;
    if (o != null) f === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? dr(n, r.type, o) : r.hasOwnProperty("defaultValue") && dr(n, r.type, Fe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Lt(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function dr(n, r, o) {
    (r !== "number" || Me(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var rr = Array.isArray;
  function jn(n, r, o, f) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < o.length; h++) r["$" + o[h]] = !0;
      for (o = 0; o < n.length; o++) h = r.hasOwnProperty("$" + n[o].value), n[o].selected !== h && (n[o].selected = h), h && f && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Fe(o), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === o) {
          n[h].selected = !0, f && (n[h].defaultSelected = !0);
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function _r(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(c(91));
    return L({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Lr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(c(92));
        if (rr(o)) {
          if (1 < o.length) throw Error(c(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Fe(o) };
  }
  function Yn(n, r) {
    var o = Fe(r.value), f = Fe(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), f != null && (n.defaultValue = "" + f);
  }
  function ar(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function qn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? qn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var un, Rr = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, f, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, f, h);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (un = un || document.createElement("div"), un.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = un.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function wr(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Tr = {
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
  }, je = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Tr).forEach(function(n) {
    je.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Tr[r] = Tr[n];
    });
  });
  function Ve(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Tr.hasOwnProperty(n) && Tr[n] ? ("" + r).trim() : r + "px";
  }
  function Tt(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var f = o.indexOf("--") === 0, h = Ve(o, r[o], f);
      o === "float" && (o = "cssFloat"), f ? n.setProperty(o, h) : n[o] = h;
    }
  }
  var Wt = L({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ht(n, r) {
    if (r) {
      if (Wt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(c(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(c(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(c(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(c(62));
    }
  }
  function Rn(n, r) {
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
  function Gn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, Vn = null, Qt = null;
  function Dt(n) {
    if (n = Pi(n)) {
      if (typeof Yt != "function") throw Error(c(280));
      var r = n.stateNode;
      r && (r = Cf(r), Yt(n.stateNode, n.type, r));
    }
  }
  function In(n) {
    Vn ? Qt ? Qt.push(n) : Qt = [n] : Vn = n;
  }
  function lt() {
    if (Vn) {
      var n = Vn, r = Qt;
      if (Qt = Vn = null, Dt(n), r) for (n = 0; n < r.length; n++) Dt(r[n]);
    }
  }
  function jt(n, r) {
    return n(r);
  }
  function pr() {
  }
  var ra = !1;
  function Ie(n, r, o) {
    if (ra) return n(r, o);
    ra = !0;
    try {
      return jt(n, r, o);
    } finally {
      ra = !1, (Vn !== null || Qt !== null) && (pr(), lt());
    }
  }
  function ft(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var f = Cf(o);
    if (f === null) return null;
    o = f[r];
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
        (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(c(231, r, typeof o));
    return o;
  }
  var mt = !1;
  if (y) try {
    var sn = {};
    Object.defineProperty(sn, "passive", { get: function() {
      mt = !0;
    } }), window.addEventListener("test", sn, sn), window.removeEventListener("test", sn, sn);
  } catch {
    mt = !1;
  }
  function Dn(n, r, o, f, h, E, _, M, $) {
    var ae = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, ae);
    } catch (Ce) {
      this.onError(Ce);
    }
  }
  var zn = !1, Un = null, mn = !1, ir = null, z = { onError: function(n) {
    zn = !0, Un = n;
  } };
  function Se(n, r, o, f, h, E, _, M, $) {
    zn = !1, Un = null, Dn.apply(z, arguments);
  }
  function We(n, r, o, f, h, E, _, M, $) {
    if (Se.apply(this, arguments), zn) {
      if (zn) {
        var ae = Un;
        zn = !1, Un = null;
      } else throw Error(c(198));
      mn || (mn = !0, ir = ae);
    }
  }
  function Ye(n) {
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
  function Ut(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Bt(n) {
    if (Ye(n) !== n) throw Error(c(188));
  }
  function At(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ye(n), r === null) throw Error(c(188));
      return r !== n ? null : n;
    }
    for (var o = n, f = r; ; ) {
      var h = o.return;
      if (h === null) break;
      var E = h.alternate;
      if (E === null) {
        if (f = h.return, f !== null) {
          o = f;
          continue;
        }
        break;
      }
      if (h.child === E.child) {
        for (E = h.child; E; ) {
          if (E === o) return Bt(h), n;
          if (E === f) return Bt(h), r;
          E = E.sibling;
        }
        throw Error(c(188));
      }
      if (o.return !== f.return) o = h, f = E;
      else {
        for (var _ = !1, M = h.child; M; ) {
          if (M === o) {
            _ = !0, o = h, f = E;
            break;
          }
          if (M === f) {
            _ = !0, f = h, o = E;
            break;
          }
          M = M.sibling;
        }
        if (!_) {
          for (M = E.child; M; ) {
            if (M === o) {
              _ = !0, o = E, f = h;
              break;
            }
            if (M === f) {
              _ = !0, f = E, o = h;
              break;
            }
            M = M.sibling;
          }
          if (!_) throw Error(c(189));
        }
      }
      if (o.alternate !== f) throw Error(c(190));
    }
    if (o.tag !== 3) throw Error(c(188));
    return o.stateNode.current === o ? n : r;
  }
  function $e(n) {
    return n = At(n), n !== null ? dn(n) : null;
  }
  function dn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = dn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var pn = l.unstable_scheduleCallback, tn = l.unstable_cancelCallback, Mr = l.unstable_shouldYield, ma = l.unstable_requestPaint, An = l.unstable_now, ya = l.unstable_getCurrentPriorityLevel, Ns = l.unstable_ImmediatePriority, Li = l.unstable_UserBlockingPriority, Pt = l.unstable_NormalPriority, Dl = l.unstable_LowPriority, ao = l.unstable_IdlePriority, $o = null, ga = null;
  function Ls(n) {
    if (ga && typeof ga.onCommitFiberRoot == "function") try {
      ga.onCommitFiberRoot($o, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var aa = Math.clz32 ? Math.clz32 : zs, Ms = Math.log, js = Math.LN2;
  function zs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ms(n) / js | 0) | 0;
  }
  var Al = 64, wu = 4194304;
  function io(n) {
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
  function Mi(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var f = 0, h = n.suspendedLanes, E = n.pingedLanes, _ = o & 268435455;
    if (_ !== 0) {
      var M = _ & ~h;
      M !== 0 ? f = io(M) : (E &= _, E !== 0 && (f = io(E)));
    } else _ = o & ~h, _ !== 0 ? f = io(_) : E !== 0 && (f = io(E));
    if (f === 0) return 0;
    if (r !== 0 && r !== f && !(r & h) && (h = f & -f, E = r & -r, h >= E || h === 16 && (E & 4194240) !== 0)) return r;
    if (f & 4 && (f |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= f; 0 < r; ) o = 31 - aa(r), h = 1 << o, f |= n[o], r &= ~h;
    return f;
  }
  function Ka(n, r) {
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
  function Bo(n, r) {
    for (var o = n.suspendedLanes, f = n.pingedLanes, h = n.expirationTimes, E = n.pendingLanes; 0 < E; ) {
      var _ = 31 - aa(E), M = 1 << _, $ = h[_];
      $ === -1 ? (!(M & o) || M & f) && (h[_] = Ka(M, r)) : $ <= r && (n.expiredLanes |= M), E &= ~M;
    }
  }
  function ji(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Nl() {
    var n = Al;
    return Al <<= 1, !(Al & 4194240) && (Al = 64), n;
  }
  function Ll(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Vo(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - aa(r), n[r] = o;
  }
  function Us(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var h = 31 - aa(o), E = 1 << h;
      r[h] = 0, f[h] = -1, n[h] = -1, o &= ~E;
    }
  }
  function Ps(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var f = 31 - aa(o), h = 1 << f;
      h & r | n[f] & r && (n[f] |= r), o &= ~h;
    }
  }
  var qt = 0;
  function Fs(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var bu, Io, Hs, Jt, Cu, Ml = !1, Rt = [], Si = null, Kn = null, Sa = null, Xa = /* @__PURE__ */ new Map(), Wo = /* @__PURE__ */ new Map(), Pn = [], Xn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function $s(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Si = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        Xa.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wo.delete(r.pointerId);
    }
  }
  function Hr(n, r, o, f, h, E) {
    return n === null || n.nativeEvent !== E ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: f, nativeEvent: E, targetContainers: [h] }, r !== null && (r = Pi(r), r !== null && Io(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function Ea(n, r, o, f, h) {
    switch (r) {
      case "focusin":
        return Si = Hr(Si, n, r, o, f, h), !0;
      case "dragenter":
        return Kn = Hr(Kn, n, r, o, f, h), !0;
      case "mouseover":
        return Sa = Hr(Sa, n, r, o, f, h), !0;
      case "pointerover":
        var E = h.pointerId;
        return Xa.set(E, Hr(Xa.get(E) || null, n, r, o, f, h)), !0;
      case "gotpointercapture":
        return E = h.pointerId, Wo.set(E, Hr(Wo.get(E) || null, n, r, o, f, h)), !0;
    }
    return !1;
  }
  function Ei(n) {
    var r = yo(n.target);
    if (r !== null) {
      var o = Ye(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Ut(o), r !== null) {
            n.blockedOn = r, Cu(n.priority, function() {
              Hs(o);
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
  function xu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = Tu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var f = new o.constructor(o.type, o);
        fn = f, o.target.dispatchEvent(f), fn = null;
      } else return r = Pi(o), r !== null && Io(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function jl(n, r, o) {
    xu(n) && o.delete(r);
  }
  function zl() {
    Ml = !1, Si !== null && xu(Si) && (Si = null), Kn !== null && xu(Kn) && (Kn = null), Sa !== null && xu(Sa) && (Sa = null), Xa.forEach(jl), Wo.forEach(jl);
  }
  function Yo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ml || (Ml = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, zl)));
  }
  function Ja(n) {
    function r(h) {
      return Yo(h, n);
    }
    if (0 < Rt.length) {
      Yo(Rt[0], n);
      for (var o = 1; o < Rt.length; o++) {
        var f = Rt[o];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (Si !== null && Yo(Si, n), Kn !== null && Yo(Kn, n), Sa !== null && Yo(Sa, n), Xa.forEach(r), Wo.forEach(r), o = 0; o < Pn.length; o++) f = Pn[o], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Pn.length && (o = Pn[0], o.blockedOn === null); ) Ei(o), o.blockedOn === null && Pn.shift();
  }
  var oo = Re.ReactCurrentBatchConfig, _u = !0;
  function lo(n, r, o, f) {
    var h = qt, E = oo.transition;
    oo.transition = null;
    try {
      qt = 1, zi(n, r, o, f);
    } finally {
      qt = h, oo.transition = E;
    }
  }
  function Ru(n, r, o, f) {
    var h = qt, E = oo.transition;
    oo.transition = null;
    try {
      qt = 4, zi(n, r, o, f);
    } finally {
      qt = h, oo.transition = E;
    }
  }
  function zi(n, r, o, f) {
    if (_u) {
      var h = Tu(n, r, o, f);
      if (h === null) gp(n, r, f, uo, o), $s(n, f);
      else if (Ea(h, n, r, o, f)) f.stopPropagation();
      else if ($s(n, f), r & 4 && -1 < Xn.indexOf(n)) {
        for (; h !== null; ) {
          var E = Pi(h);
          if (E !== null && bu(E), E = Tu(n, r, o, f), E === null && gp(n, r, f, uo, o), E === h) break;
          h = E;
        }
        h !== null && f.stopPropagation();
      } else gp(n, r, f, null, o);
    }
  }
  var uo = null;
  function Tu(n, r, o, f) {
    if (uo = null, n = Gn(f), n = yo(n), n !== null) if (r = Ye(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = Ut(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uo = n, null;
  }
  function Bs(n) {
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
        switch (ya()) {
          case Ns:
            return 1;
          case Li:
            return 4;
          case Pt:
          case Dl:
            return 16;
          case ao:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var wi = null, ku = null, C = null;
  function P() {
    if (C) return C;
    var n, r = ku, o = r.length, f, h = "value" in wi ? wi.value : wi.textContent, E = h.length;
    for (n = 0; n < o && r[n] === h[n]; n++) ;
    var _ = o - n;
    for (f = 1; f <= _ && r[o - f] === h[E - f]; f++) ;
    return C = h.slice(n, 1 < f ? 1 - f : void 0);
  }
  function ee(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function le() {
    return !0;
  }
  function ze() {
    return !1;
  }
  function ot(n) {
    function r(o, f, h, E, _) {
      this._reactName = o, this._targetInst = h, this.type = f, this.nativeEvent = E, this.target = _, this.currentTarget = null;
      for (var M in n) n.hasOwnProperty(M) && (o = n[M], this[M] = o ? o(E) : E[M]);
      return this.isDefaultPrevented = (E.defaultPrevented != null ? E.defaultPrevented : E.returnValue === !1) ? le : ze, this.isPropagationStopped = ze, this;
    }
    return L(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = le);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = le);
    }, persist: function() {
    }, isPersistent: le }), r;
  }
  var Je = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ct = ot(Je), Ft = L({}, Je, { view: 0, detail: 0 }), hn = ot(Ft), yn, gn, Sn, Fn = L({}, Ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Sn && (Sn && n.type === "mousemove" ? (yn = n.screenX - Sn.screenX, gn = n.screenY - Sn.screenY) : gn = yn = 0, Sn = n), yn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : gn;
  } }), Zt = ot(Fn), qo = L({}, Fn, { dataTransfer: 0 }), Ou = ot(qo), Vs = L({}, Ft, { relatedTarget: 0 }), Is = ot(Vs), so = L({}, Je, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ws = ot(so), Ys = L({}, Je, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), op = ot(Ys), Jg = L({}, Je, { data: 0 }), Tv = ot(Jg), kv = {
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
  }, lp = {
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
  }, Ov = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Dv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Ov[n]) ? !!r[n] : !1;
  }
  function pf() {
    return Dv;
  }
  var Zg = L({}, Ft, { key: function(n) {
    if (n.key) {
      var r = kv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = ee(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? lp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pf, charCode: function(n) {
    return n.type === "keypress" ? ee(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ee(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), co = ot(Zg), e0 = L({}, Fn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hf = ot(e0), up = L({}, Ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pf }), sp = ot(up), t0 = L({}, Je, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vf = ot(t0), Av = L({}, Fn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wa = ot(Av), fo = [9, 13, 27, 32], or = y && "CompositionEvent" in window, Pa = null;
  y && "documentMode" in document && (Pa = document.documentMode);
  var cp = y && "TextEvent" in window && !Pa, qs = y && (!or || Pa && 8 < Pa && 11 >= Pa), Nv = " ", Du = !1;
  function Lv(n, r) {
    switch (n) {
      case "keyup":
        return fo.indexOf(r.keyCode) !== -1;
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
  function Mv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Qo = !1;
  function n0(n, r) {
    switch (n) {
      case "compositionend":
        return Mv(r);
      case "keypress":
        return r.which !== 32 ? null : (Du = !0, Nv);
      case "textInput":
        return n = r.data, n === Nv && Du ? null : n;
      default:
        return null;
    }
  }
  function r0(n, r) {
    if (Qo) return n === "compositionend" || !or && Lv(n, r) ? (n = P(), C = ku = wi = null, Qo = !1, n) : null;
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
        return qs && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var a0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!a0[n.type] : r === "textarea";
  }
  function jv(n, r, o, f) {
    In(f), r = wf(r, "onChange"), 0 < r.length && (o = new Ct("onChange", "change", null, o, f), n.push({ event: o, listeners: r }));
  }
  var Qs = null, Gs = null;
  function zv(n) {
    Jv(n, 0);
  }
  function po(n) {
    var r = Mu(n);
    if ($t(r)) return n;
  }
  function dp(n, r) {
    if (n === "change") return r;
  }
  var pp = !1;
  if (y) {
    var mf;
    if (y) {
      var hp = "oninput" in document;
      if (!hp) {
        var Uv = document.createElement("div");
        Uv.setAttribute("oninput", "return;"), hp = typeof Uv.oninput == "function";
      }
      mf = hp;
    } else mf = !1;
    pp = mf && (!document.documentMode || 9 < document.documentMode);
  }
  function Pv() {
    Qs && (Qs.detachEvent("onpropertychange", Fv), Gs = Qs = null);
  }
  function Fv(n) {
    if (n.propertyName === "value" && po(Gs)) {
      var r = [];
      jv(r, Gs, n, Gn(n)), Ie(zv, r);
    }
  }
  function i0(n, r, o) {
    n === "focusin" ? (Pv(), Qs = r, Gs = o, Qs.attachEvent("onpropertychange", Fv)) : n === "focusout" && Pv();
  }
  function o0(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return po(Gs);
  }
  function l0(n, r) {
    if (n === "click") return po(r);
  }
  function u0(n, r) {
    if (n === "input" || n === "change") return po(r);
  }
  function Hv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var bi = typeof Object.is == "function" ? Object.is : Hv;
  function Au(n, r) {
    if (bi(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), f = Object.keys(r);
    if (o.length !== f.length) return !1;
    for (f = 0; f < o.length; f++) {
      var h = o[f];
      if (!x.call(r, h) || !bi(n[h], r[h])) return !1;
    }
    return !0;
  }
  function $v(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Bv(n, r) {
    var o = $v(n);
    n = 0;
    for (var f; o; ) {
      if (o.nodeType === 3) {
        if (f = n + o.textContent.length, n <= r && f >= r) return { node: o, offset: r - n };
        n = f;
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
      o = $v(o);
    }
  }
  function Vv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Vv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Iv() {
    for (var n = window, r = Me(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = Me(n.document);
    }
    return r;
  }
  function Ks(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Ul(n) {
    var r = Iv(), o = n.focusedElem, f = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Vv(o.ownerDocument.documentElement, o)) {
      if (f !== null && Ks(o)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = o.textContent.length, E = Math.min(f.start, h);
          f = f.end === void 0 ? E : Math.min(f.end, h), !n.extend && E > f && (h = f, f = E, E = h), h = Bv(o, E);
          var _ = Bv(
            o,
            f
          );
          h && _ && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(h.node, h.offset), n.removeAllRanges(), E > f ? (n.addRange(r), n.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var yf = y && "documentMode" in document && 11 >= document.documentMode, Pl = null, Go = null, Xs = null, vp = !1;
  function Wv(n, r, o) {
    var f = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    vp || Pl == null || Pl !== Me(f) || (f = Pl, "selectionStart" in f && Ks(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), Xs && Au(Xs, f) || (Xs = f, f = wf(Go, "onSelect"), 0 < f.length && (r = new Ct("onSelect", "select", null, r, o), n.push({ event: r, listeners: f }), r.target = Pl)));
  }
  function gf(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Nu = { animationend: gf("Animation", "AnimationEnd"), animationiteration: gf("Animation", "AnimationIteration"), animationstart: gf("Animation", "AnimationStart"), transitionend: gf("Transition", "TransitionEnd") }, Sf = {}, Yv = {};
  y && (Yv = document.createElement("div").style, "AnimationEvent" in window || (delete Nu.animationend.animation, delete Nu.animationiteration.animation, delete Nu.animationstart.animation), "TransitionEvent" in window || delete Nu.transitionend.transition);
  function Js(n) {
    if (Sf[n]) return Sf[n];
    if (!Nu[n]) return n;
    var r = Nu[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in Yv) return Sf[n] = r[o];
    return n;
  }
  var Zr = Js("animationend"), mp = Js("animationiteration"), qv = Js("animationstart"), Qv = Js("transitionend"), Gv = /* @__PURE__ */ new Map(), Kv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ko(n, r) {
    Gv.set(n, r), g(r, [n]);
  }
  for (var Ef = 0; Ef < Kv.length; Ef++) {
    var Zs = Kv[Ef], ec = Zs.toLowerCase(), s0 = Zs[0].toUpperCase() + Zs.slice(1);
    Ko(ec, "on" + s0);
  }
  Ko(Zr, "onAnimationEnd"), Ko(mp, "onAnimationIteration"), Ko(qv, "onAnimationStart"), Ko("dblclick", "onDoubleClick"), Ko("focusin", "onFocus"), Ko("focusout", "onBlur"), Ko(Qv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), g("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), g("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), g("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), g("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), g("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), g("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), c0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));
  function Xv(n, r, o) {
    var f = n.type || "unknown-event";
    n.currentTarget = o, We(f, r, void 0, n), n.currentTarget = null;
  }
  function Jv(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var f = n[o], h = f.event;
      f = f.listeners;
      e: {
        var E = void 0;
        if (r) for (var _ = f.length - 1; 0 <= _; _--) {
          var M = f[_], $ = M.instance, ae = M.currentTarget;
          if (M = M.listener, $ !== E && h.isPropagationStopped()) break e;
          Xv(h, M, ae), E = $;
        }
        else for (_ = 0; _ < f.length; _++) {
          if (M = f[_], $ = M.instance, ae = M.currentTarget, M = M.listener, $ !== E && h.isPropagationStopped()) break e;
          Xv(h, M, ae), E = $;
        }
      }
    }
    if (mn) throw n = ir, mn = !1, ir = null, n;
  }
  function Tn(n, r) {
    var o = r[Rp];
    o === void 0 && (o = r[Rp] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    o.has(f) || (yp(r, n, 2, !1), o.add(f));
  }
  function tc(n, r, o) {
    var f = 0;
    r && (f |= 4), yp(o, n, f, r);
  }
  var vo = "_reactListening" + Math.random().toString(36).slice(2);
  function Ui(n) {
    if (!n[vo]) {
      n[vo] = !0, d.forEach(function(o) {
        o !== "selectionchange" && (c0.has(o) || tc(o, !1, n), tc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[vo] || (r[vo] = !0, tc("selectionchange", !1, r));
    }
  }
  function yp(n, r, o, f) {
    switch (Bs(r)) {
      case 1:
        var h = lo;
        break;
      case 4:
        h = Ru;
        break;
      default:
        h = zi;
    }
    o = h.bind(null, r, o, n), h = void 0, !mt || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), f ? h !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: h }) : n.addEventListener(r, o, !0) : h !== void 0 ? n.addEventListener(r, o, { passive: h }) : n.addEventListener(r, o, !1);
  }
  function gp(n, r, o, f, h) {
    var E = f;
    if (!(r & 1) && !(r & 2) && f !== null) e: for (; ; ) {
      if (f === null) return;
      var _ = f.tag;
      if (_ === 3 || _ === 4) {
        var M = f.stateNode.containerInfo;
        if (M === h || M.nodeType === 8 && M.parentNode === h) break;
        if (_ === 4) for (_ = f.return; _ !== null; ) {
          var $ = _.tag;
          if (($ === 3 || $ === 4) && ($ = _.stateNode.containerInfo, $ === h || $.nodeType === 8 && $.parentNode === h)) return;
          _ = _.return;
        }
        for (; M !== null; ) {
          if (_ = yo(M), _ === null) return;
          if ($ = _.tag, $ === 5 || $ === 6) {
            f = E = _;
            continue e;
          }
          M = M.parentNode;
        }
      }
      f = f.return;
    }
    Ie(function() {
      var ae = E, Ce = Gn(o), Te = [];
      e: {
        var Ee = Gv.get(n);
        if (Ee !== void 0) {
          var Ke = Ct, rt = n;
          switch (n) {
            case "keypress":
              if (ee(o) === 0) break e;
            case "keydown":
            case "keyup":
              Ke = co;
              break;
            case "focusin":
              rt = "focus", Ke = Is;
              break;
            case "focusout":
              rt = "blur", Ke = Is;
              break;
            case "beforeblur":
            case "afterblur":
              Ke = Is;
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
              Ke = Zt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ke = Ou;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ke = sp;
              break;
            case Zr:
            case mp:
            case qv:
              Ke = Ws;
              break;
            case Qv:
              Ke = vf;
              break;
            case "scroll":
              Ke = hn;
              break;
            case "wheel":
              Ke = wa;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ke = op;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ke = hf;
          }
          var ut = (r & 4) !== 0, Sr = !ut && n === "scroll", Y = ut ? Ee !== null ? Ee + "Capture" : null : Ee;
          ut = [];
          for (var I = ae, K; I !== null; ) {
            K = I;
            var Ue = K.stateNode;
            if (K.tag === 5 && Ue !== null && (K = Ue, Y !== null && (Ue = ft(I, Y), Ue != null && ut.push(Lu(I, Ue, K)))), Sr) break;
            I = I.return;
          }
          0 < ut.length && (Ee = new Ke(Ee, rt, null, o, Ce), Te.push({ event: Ee, listeners: ut }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Ee = n === "mouseover" || n === "pointerover", Ke = n === "mouseout" || n === "pointerout", Ee && o !== fn && (rt = o.relatedTarget || o.fromElement) && (yo(rt) || rt[Ci])) break e;
          if ((Ke || Ee) && (Ee = Ce.window === Ce ? Ce : (Ee = Ce.ownerDocument) ? Ee.defaultView || Ee.parentWindow : window, Ke ? (rt = o.relatedTarget || o.toElement, Ke = ae, rt = rt ? yo(rt) : null, rt !== null && (Sr = Ye(rt), rt !== Sr || rt.tag !== 5 && rt.tag !== 6) && (rt = null)) : (Ke = null, rt = ae), Ke !== rt)) {
            if (ut = Zt, Ue = "onMouseLeave", Y = "onMouseEnter", I = "mouse", (n === "pointerout" || n === "pointerover") && (ut = hf, Ue = "onPointerLeave", Y = "onPointerEnter", I = "pointer"), Sr = Ke == null ? Ee : Mu(Ke), K = rt == null ? Ee : Mu(rt), Ee = new ut(Ue, I + "leave", Ke, o, Ce), Ee.target = Sr, Ee.relatedTarget = K, Ue = null, yo(Ce) === ae && (ut = new ut(Y, I + "enter", rt, o, Ce), ut.target = K, ut.relatedTarget = Sr, Ue = ut), Sr = Ue, Ke && rt) t: {
              for (ut = Ke, Y = rt, I = 0, K = ut; K; K = Fl(K)) I++;
              for (K = 0, Ue = Y; Ue; Ue = Fl(Ue)) K++;
              for (; 0 < I - K; ) ut = Fl(ut), I--;
              for (; 0 < K - I; ) Y = Fl(Y), K--;
              for (; I--; ) {
                if (ut === Y || Y !== null && ut === Y.alternate) break t;
                ut = Fl(ut), Y = Fl(Y);
              }
              ut = null;
            }
            else ut = null;
            Ke !== null && Sp(Te, Ee, Ke, ut, !1), rt !== null && Sr !== null && Sp(Te, Sr, rt, ut, !0);
          }
        }
        e: {
          if (Ee = ae ? Mu(ae) : window, Ke = Ee.nodeName && Ee.nodeName.toLowerCase(), Ke === "select" || Ke === "input" && Ee.type === "file") var ct = dp;
          else if (fp(Ee)) if (pp) ct = u0;
          else {
            ct = o0;
            var wt = i0;
          }
          else (Ke = Ee.nodeName) && Ke.toLowerCase() === "input" && (Ee.type === "checkbox" || Ee.type === "radio") && (ct = l0);
          if (ct && (ct = ct(n, ae))) {
            jv(Te, ct, o, Ce);
            break e;
          }
          wt && wt(n, Ee, ae), n === "focusout" && (wt = Ee._wrapperState) && wt.controlled && Ee.type === "number" && dr(Ee, "number", Ee.value);
        }
        switch (wt = ae ? Mu(ae) : window, n) {
          case "focusin":
            (fp(wt) || wt.contentEditable === "true") && (Pl = wt, Go = ae, Xs = null);
            break;
          case "focusout":
            Xs = Go = Pl = null;
            break;
          case "mousedown":
            vp = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vp = !1, Wv(Te, o, Ce);
            break;
          case "selectionchange":
            if (yf) break;
          case "keydown":
          case "keyup":
            Wv(Te, o, Ce);
        }
        var at;
        if (or) e: {
          switch (n) {
            case "compositionstart":
              var bt = "onCompositionStart";
              break e;
            case "compositionend":
              bt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              bt = "onCompositionUpdate";
              break e;
          }
          bt = void 0;
        }
        else Qo ? Lv(n, o) && (bt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (bt = "onCompositionStart");
        bt && (qs && o.locale !== "ko" && (Qo || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && Qo && (at = P()) : (wi = Ce, ku = "value" in wi ? wi.value : wi.textContent, Qo = !0)), wt = wf(ae, bt), 0 < wt.length && (bt = new Tv(bt, n, null, o, Ce), Te.push({ event: bt, listeners: wt }), at ? bt.data = at : (at = Mv(o), at !== null && (bt.data = at)))), (at = cp ? n0(n, o) : r0(n, o)) && (ae = wf(ae, "onBeforeInput"), 0 < ae.length && (Ce = new Tv("onBeforeInput", "beforeinput", null, o, Ce), Te.push({ event: Ce, listeners: ae }), Ce.data = at));
      }
      Jv(Te, r);
    });
  }
  function Lu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function wf(n, r) {
    for (var o = r + "Capture", f = []; n !== null; ) {
      var h = n, E = h.stateNode;
      h.tag === 5 && E !== null && (h = E, E = ft(n, o), E != null && f.unshift(Lu(n, E, h)), E = ft(n, r), E != null && f.push(Lu(n, E, h))), n = n.return;
    }
    return f;
  }
  function Fl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Sp(n, r, o, f, h) {
    for (var E = r._reactName, _ = []; o !== null && o !== f; ) {
      var M = o, $ = M.alternate, ae = M.stateNode;
      if ($ !== null && $ === f) break;
      M.tag === 5 && ae !== null && (M = ae, h ? ($ = ft(o, E), $ != null && _.unshift(Lu(o, $, M))) : h || ($ = ft(o, E), $ != null && _.push(Lu(o, $, M)))), o = o.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var Zv = /\r\n?/g, Ep = /\u0000|\uFFFD/g;
  function em(n) {
    return (typeof n == "string" ? n : "" + n).replace(Zv, `
`).replace(Ep, "");
  }
  function nc(n, r, o) {
    if (r = em(r), em(n) !== r && o) throw Error(c(425));
  }
  function bf() {
  }
  var wp = null, bp = null;
  function Hl(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var rc = typeof setTimeout == "function" ? setTimeout : void 0, ac = typeof clearTimeout == "function" ? clearTimeout : void 0, Cp = typeof Promise == "function" ? Promise : void 0, tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cp < "u" ? function(n) {
    return Cp.resolve(null).then(n).catch(xp);
  } : rc;
  function xp(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function _p(n, r) {
    var o = r, f = 0;
    do {
      var h = o.nextSibling;
      if (n.removeChild(o), h && h.nodeType === 8) if (o = h.data, o === "/$") {
        if (f === 0) {
          n.removeChild(h), Ja(r);
          return;
        }
        f--;
      } else o !== "$" && o !== "$?" && o !== "$!" || f++;
      o = h;
    } while (o);
    Ja(r);
  }
  function Fa(n) {
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
  function ic(n) {
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
  var mo = Math.random().toString(36).slice(2), Za = "__reactFiber$" + mo, oc = "__reactProps$" + mo, Ci = "__reactContainer$" + mo, Rp = "__reactEvents$" + mo, f0 = "__reactListeners$" + mo, d0 = "__reactHandles$" + mo;
  function yo(n) {
    var r = n[Za];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ci] || o[Za]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = ic(n); n !== null; ) {
          if (o = n[Za]) return o;
          n = ic(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Pi(n) {
    return n = n[Za] || n[Ci], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Mu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(c(33));
  }
  function Cf(n) {
    return n[oc] || null;
  }
  var yt = [], xi = -1;
  function kn(n) {
    return { current: n };
  }
  function st(n) {
    0 > xi || (n.current = yt[xi], yt[xi] = null, xi--);
  }
  function nn(n, r) {
    xi++, yt[xi] = n.current, n.current = r;
  }
  var ei = {}, jr = kn(ei), kt = kn(!1), ia = ei;
  function Ha(n, r) {
    var o = n.type.contextTypes;
    if (!o) return ei;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r) return f.__reactInternalMemoizedMaskedChildContext;
    var h = {}, E;
    for (E in o) h[E] = r[E];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function br(n) {
    return n = n.childContextTypes, n != null;
  }
  function ba() {
    st(kt), st(jr);
  }
  function Fi(n, r, o) {
    if (jr.current !== ei) throw Error(c(168));
    nn(jr, r), nn(kt, o);
  }
  function Xo(n, r, o) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function") return o;
    f = f.getChildContext();
    for (var h in f) if (!(h in r)) throw Error(c(108, Le(n) || "Unknown", h));
    return L({}, o, f);
  }
  function $l(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ei, ia = jr.current, nn(jr, n), nn(kt, kt.current), !0;
  }
  function nm(n, r, o) {
    var f = n.stateNode;
    if (!f) throw Error(c(169));
    o ? (n = Xo(n, r, ia), f.__reactInternalMemoizedMergedChildContext = n, st(kt), st(jr), nn(jr, n)) : st(kt), nn(kt, o);
  }
  var go = null, Jo = !1, $r = !1;
  function xf(n) {
    go === null ? go = [n] : go.push(n);
  }
  function rm(n) {
    Jo = !0, xf(n);
  }
  function Hi() {
    if (!$r && go !== null) {
      $r = !0;
      var n = 0, r = qt;
      try {
        var o = go;
        for (qt = 1; n < o.length; n++) {
          var f = o[n];
          do
            f = f(!0);
          while (f !== null);
        }
        go = null, Jo = !1;
      } catch (h) {
        throw go !== null && (go = go.slice(n + 1)), pn(Ns, Hi), h;
      } finally {
        qt = r, $r = !1;
      }
    }
    return null;
  }
  var ti = [], Zo = 0, ni = null, Bl = 0, Ca = [], xa = 0, _i = null, _a = 1, Br = "";
  function Vl(n, r) {
    ti[Zo++] = Bl, ti[Zo++] = ni, ni = n, Bl = r;
  }
  function el(n, r, o) {
    Ca[xa++] = _a, Ca[xa++] = Br, Ca[xa++] = _i, _i = n;
    var f = _a;
    n = Br;
    var h = 32 - aa(f) - 1;
    f &= ~(1 << h), o += 1;
    var E = 32 - aa(r) + h;
    if (30 < E) {
      var _ = h - h % 5;
      E = (f & (1 << _) - 1).toString(32), f >>= _, h -= _, _a = 1 << 32 - aa(r) + h | o << h | f, Br = E + n;
    } else _a = 1 << E | o << h | f, Br = n;
  }
  function _f(n) {
    n.return !== null && (Vl(n, 1), el(n, 1, 0));
  }
  function Rf(n) {
    for (; n === ni; ) ni = ti[--Zo], ti[Zo] = null, Bl = ti[--Zo], ti[Zo] = null;
    for (; n === _i; ) _i = Ca[--xa], Ca[xa] = null, Br = Ca[--xa], Ca[xa] = null, _a = Ca[--xa], Ca[xa] = null;
  }
  var $a = null, Ba = null, Hn = !1, ri = null;
  function Tp(n, r) {
    var o = ci(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function kp(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, $a = n, Ba = Fa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, $a = n, Ba = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = _i !== null ? { id: _a, overflow: Br } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ci(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, $a = n, Ba = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Op(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Tf(n) {
    if (Hn) {
      var r = Ba;
      if (r) {
        var o = r;
        if (!kp(n, r)) {
          if (Op(n)) throw Error(c(418));
          r = Fa(o.nextSibling);
          var f = $a;
          r && kp(n, r) ? Tp(f, o) : (n.flags = n.flags & -4097 | 2, Hn = !1, $a = n);
        }
      } else {
        if (Op(n)) throw Error(c(418));
        n.flags = n.flags & -4097 | 2, Hn = !1, $a = n;
      }
    }
  }
  function Dp(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    $a = n;
  }
  function kf(n) {
    if (n !== $a) return !1;
    if (!Hn) return Dp(n), Hn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Hl(n.type, n.memoizedProps)), r && (r = Ba)) {
      if (Op(n)) throw am(), Error(c(418));
      for (; r; ) Tp(n, r), r = Fa(r.nextSibling);
    }
    if (Dp(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Ba = Fa(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ba = null;
      }
    } else Ba = $a ? Fa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function am() {
    for (var n = Ba; n; ) n = Fa(n.nextSibling);
  }
  function ju() {
    Ba = $a = null, Hn = !1;
  }
  function Cr(n) {
    ri === null ? ri = [n] : ri.push(n);
  }
  var p0 = Re.ReactCurrentBatchConfig;
  function Ra(n, r) {
    if (n && n.defaultProps) {
      r = L({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var zu = kn(null), $i = null, Uu = null, lc = null;
  function Ap() {
    lc = Uu = $i = null;
  }
  function Np(n) {
    var r = zu.current;
    st(zu), n._currentValue = r;
  }
  function tl(n, r, o) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function hr(n, r) {
    $i = n, lc = Uu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Oa = !0), n.firstContext = null);
  }
  function He(n) {
    var r = n._currentValue;
    if (lc !== n) if (n = { context: n, memoizedValue: r, next: null }, Uu === null) {
      if ($i === null) throw Error(c(308));
      Uu = n, $i.dependencies = { lanes: 0, firstContext: n };
    } else Uu = Uu.next = n;
    return r;
  }
  var ea = null;
  function Va(n) {
    ea === null ? ea = [n] : ea.push(n);
  }
  function im(n, r, o, f) {
    var h = r.interleaved;
    return h === null ? (o.next = o, Va(r)) : (o.next = h.next, h.next = o), r.interleaved = o, So(n, f);
  }
  function So(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var nl = !1;
  function Lp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function om(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Nn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function rl(n, r, o) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (f = f.shared, Vt & 2) {
      var h = f.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), f.pending = r, So(n, o);
    }
    return h = f.interleaved, h === null ? (r.next = r, Va(f)) : (r.next = h.next, h.next = r), f.interleaved = r, So(n, o);
  }
  function Of(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, o |= f, r.lanes = o, Ps(n, o);
    }
  }
  function lm(n, r) {
    var o = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, o === f)) {
      var h = null, E = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var _ = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          E === null ? h = E = _ : E = E.next = _, o = o.next;
        } while (o !== null);
        E === null ? h = E = r : E = E.next = r;
      } else h = E = r;
      o = { baseState: f.baseState, firstBaseUpdate: h, lastBaseUpdate: E, shared: f.shared, effects: f.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function uc(n, r, o, f) {
    var h = n.updateQueue;
    nl = !1;
    var E = h.firstBaseUpdate, _ = h.lastBaseUpdate, M = h.shared.pending;
    if (M !== null) {
      h.shared.pending = null;
      var $ = M, ae = $.next;
      $.next = null, _ === null ? E = ae : _.next = ae, _ = $;
      var Ce = n.alternate;
      Ce !== null && (Ce = Ce.updateQueue, M = Ce.lastBaseUpdate, M !== _ && (M === null ? Ce.firstBaseUpdate = ae : M.next = ae, Ce.lastBaseUpdate = $));
    }
    if (E !== null) {
      var Te = h.baseState;
      _ = 0, Ce = ae = $ = null, M = E;
      do {
        var Ee = M.lane, Ke = M.eventTime;
        if ((f & Ee) === Ee) {
          Ce !== null && (Ce = Ce.next = {
            eventTime: Ke,
            lane: 0,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          });
          e: {
            var rt = n, ut = M;
            switch (Ee = r, Ke = o, ut.tag) {
              case 1:
                if (rt = ut.payload, typeof rt == "function") {
                  Te = rt.call(Ke, Te, Ee);
                  break e;
                }
                Te = rt;
                break e;
              case 3:
                rt.flags = rt.flags & -65537 | 128;
              case 0:
                if (rt = ut.payload, Ee = typeof rt == "function" ? rt.call(Ke, Te, Ee) : rt, Ee == null) break e;
                Te = L({}, Te, Ee);
                break e;
              case 2:
                nl = !0;
            }
          }
          M.callback !== null && M.lane !== 0 && (n.flags |= 64, Ee = h.effects, Ee === null ? h.effects = [M] : Ee.push(M));
        } else Ke = { eventTime: Ke, lane: Ee, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, Ce === null ? (ae = Ce = Ke, $ = Te) : Ce = Ce.next = Ke, _ |= Ee;
        if (M = M.next, M === null) {
          if (M = h.shared.pending, M === null) break;
          Ee = M, M = Ee.next, Ee.next = null, h.lastBaseUpdate = Ee, h.shared.pending = null;
        }
      } while (!0);
      if (Ce === null && ($ = Te), h.baseState = $, h.firstBaseUpdate = ae, h.lastBaseUpdate = Ce, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          _ |= h.lane, h = h.next;
        while (h !== r);
      } else E === null && (h.shared.lanes = 0);
      tu |= _, n.lanes = _, n.memoizedState = Te;
    }
  }
  function Pu(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var f = n[r], h = f.callback;
      if (h !== null) {
        if (f.callback = null, f = o, typeof h != "function") throw Error(c(191, h));
        h.call(f);
      }
    }
  }
  var Il = new u.Component().refs;
  function Mp(n, r, o, f) {
    r = n.memoizedState, o = o(f, r), o = o == null ? r : L({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Df = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ye(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var f = Pr(), h = Co(n), E = Nn(f, h);
    E.payload = r, o != null && (E.callback = o), r = rl(n, E, h), r !== null && (Zn(r, n, h, f), Of(r, n, h));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var f = Pr(), h = Co(n), E = Nn(f, h);
    E.tag = 1, E.payload = r, o != null && (E.callback = o), r = rl(n, E, h), r !== null && (Zn(r, n, h, f), Of(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = Pr(), f = Co(n), h = Nn(o, f);
    h.tag = 2, r != null && (h.callback = r), r = rl(n, h, f), r !== null && (Zn(r, n, f, o), Of(r, n, f));
  } };
  function um(n, r, o, f, h, E, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, E, _) : r.prototype && r.prototype.isPureReactComponent ? !Au(o, f) || !Au(h, E) : !0;
  }
  function sm(n, r, o) {
    var f = !1, h = ei, E = r.contextType;
    return typeof E == "object" && E !== null ? E = He(E) : (h = br(r) ? ia : jr.current, f = r.contextTypes, E = (f = f != null) ? Ha(n, h) : ei), r = new r(o, E), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Df, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = E), r;
  }
  function cm(n, r, o, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, f), r.state !== n && Df.enqueueReplaceState(r, r.state, null);
  }
  function jp(n, r, o, f) {
    var h = n.stateNode;
    h.props = o, h.state = n.memoizedState, h.refs = Il, Lp(n);
    var E = r.contextType;
    typeof E == "object" && E !== null ? h.context = He(E) : (E = br(r) ? ia : jr.current, h.context = Ha(n, E)), h.state = n.memoizedState, E = r.getDerivedStateFromProps, typeof E == "function" && (Mp(n, r, E, o), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && Df.enqueueReplaceState(h, h.state, null), uc(n, o, h, f), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Fu(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(c(309));
          var f = o.stateNode;
        }
        if (!f) throw Error(c(147, n));
        var h = f, E = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === E ? r.ref : (r = function(_) {
          var M = h.refs;
          M === Il && (M = h.refs = {}), _ === null ? delete M[E] : M[E] = _;
        }, r._stringRef = E, r);
      }
      if (typeof n != "string") throw Error(c(284));
      if (!o._owner) throw Error(c(290, n));
    }
    return n;
  }
  function sc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function fm(n) {
    var r = n._init;
    return r(n._payload);
  }
  function dm(n) {
    function r(Y, I) {
      if (n) {
        var K = Y.deletions;
        K === null ? (Y.deletions = [I], Y.flags |= 16) : K.push(I);
      }
    }
    function o(Y, I) {
      if (!n) return null;
      for (; I !== null; ) r(Y, I), I = I.sibling;
      return null;
    }
    function f(Y, I) {
      for (Y = /* @__PURE__ */ new Map(); I !== null; ) I.key !== null ? Y.set(I.key, I) : Y.set(I.index, I), I = I.sibling;
      return Y;
    }
    function h(Y, I) {
      return Y = fl(Y, I), Y.index = 0, Y.sibling = null, Y;
    }
    function E(Y, I, K) {
      return Y.index = K, n ? (K = Y.alternate, K !== null ? (K = K.index, K < I ? (Y.flags |= 2, I) : K) : (Y.flags |= 2, I)) : (Y.flags |= 1048576, I);
    }
    function _(Y) {
      return n && Y.alternate === null && (Y.flags |= 2), Y;
    }
    function M(Y, I, K, Ue) {
      return I === null || I.tag !== 6 ? (I = fd(K, Y.mode, Ue), I.return = Y, I) : (I = h(I, K), I.return = Y, I);
    }
    function $(Y, I, K, Ue) {
      var ct = K.type;
      return ct === tt ? Ce(Y, I, K.props.children, Ue, K.key) : I !== null && (I.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === de && fm(ct) === I.type) ? (Ue = h(I, K.props), Ue.ref = Fu(Y, I, K), Ue.return = Y, Ue) : (Ue = sd(K.type, K.key, K.props, null, Y.mode, Ue), Ue.ref = Fu(Y, I, K), Ue.return = Y, Ue);
    }
    function ae(Y, I, K, Ue) {
      return I === null || I.tag !== 4 || I.stateNode.containerInfo !== K.containerInfo || I.stateNode.implementation !== K.implementation ? (I = kc(K, Y.mode, Ue), I.return = Y, I) : (I = h(I, K.children || []), I.return = Y, I);
    }
    function Ce(Y, I, K, Ue, ct) {
      return I === null || I.tag !== 7 ? (I = iu(K, Y.mode, Ue, ct), I.return = Y, I) : (I = h(I, K), I.return = Y, I);
    }
    function Te(Y, I, K) {
      if (typeof I == "string" && I !== "" || typeof I == "number") return I = fd("" + I, Y.mode, K), I.return = Y, I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case X:
            return K = sd(I.type, I.key, I.props, null, Y.mode, K), K.ref = Fu(Y, null, I), K.return = Y, K;
          case Ae:
            return I = kc(I, Y.mode, K), I.return = Y, I;
          case de:
            var Ue = I._init;
            return Te(Y, Ue(I._payload), K);
        }
        if (rr(I) || re(I)) return I = iu(I, Y.mode, K, null), I.return = Y, I;
        sc(Y, I);
      }
      return null;
    }
    function Ee(Y, I, K, Ue) {
      var ct = I !== null ? I.key : null;
      if (typeof K == "string" && K !== "" || typeof K == "number") return ct !== null ? null : M(Y, I, "" + K, Ue);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case X:
            return K.key === ct ? $(Y, I, K, Ue) : null;
          case Ae:
            return K.key === ct ? ae(Y, I, K, Ue) : null;
          case de:
            return ct = K._init, Ee(
              Y,
              I,
              ct(K._payload),
              Ue
            );
        }
        if (rr(K) || re(K)) return ct !== null ? null : Ce(Y, I, K, Ue, null);
        sc(Y, K);
      }
      return null;
    }
    function Ke(Y, I, K, Ue, ct) {
      if (typeof Ue == "string" && Ue !== "" || typeof Ue == "number") return Y = Y.get(K) || null, M(I, Y, "" + Ue, ct);
      if (typeof Ue == "object" && Ue !== null) {
        switch (Ue.$$typeof) {
          case X:
            return Y = Y.get(Ue.key === null ? K : Ue.key) || null, $(I, Y, Ue, ct);
          case Ae:
            return Y = Y.get(Ue.key === null ? K : Ue.key) || null, ae(I, Y, Ue, ct);
          case de:
            var wt = Ue._init;
            return Ke(Y, I, K, wt(Ue._payload), ct);
        }
        if (rr(Ue) || re(Ue)) return Y = Y.get(K) || null, Ce(I, Y, Ue, ct, null);
        sc(I, Ue);
      }
      return null;
    }
    function rt(Y, I, K, Ue) {
      for (var ct = null, wt = null, at = I, bt = I = 0, Ar = null; at !== null && bt < K.length; bt++) {
        at.index > bt ? (Ar = at, at = null) : Ar = at.sibling;
        var rn = Ee(Y, at, K[bt], Ue);
        if (rn === null) {
          at === null && (at = Ar);
          break;
        }
        n && at && rn.alternate === null && r(Y, at), I = E(rn, I, bt), wt === null ? ct = rn : wt.sibling = rn, wt = rn, at = Ar;
      }
      if (bt === K.length) return o(Y, at), Hn && Vl(Y, bt), ct;
      if (at === null) {
        for (; bt < K.length; bt++) at = Te(Y, K[bt], Ue), at !== null && (I = E(at, I, bt), wt === null ? ct = at : wt.sibling = at, wt = at);
        return Hn && Vl(Y, bt), ct;
      }
      for (at = f(Y, at); bt < K.length; bt++) Ar = Ke(at, Y, bt, K[bt], Ue), Ar !== null && (n && Ar.alternate !== null && at.delete(Ar.key === null ? bt : Ar.key), I = E(Ar, I, bt), wt === null ? ct = Ar : wt.sibling = Ar, wt = Ar);
      return n && at.forEach(function(xo) {
        return r(Y, xo);
      }), Hn && Vl(Y, bt), ct;
    }
    function ut(Y, I, K, Ue) {
      var ct = re(K);
      if (typeof ct != "function") throw Error(c(150));
      if (K = ct.call(K), K == null) throw Error(c(151));
      for (var wt = ct = null, at = I, bt = I = 0, Ar = null, rn = K.next(); at !== null && !rn.done; bt++, rn = K.next()) {
        at.index > bt ? (Ar = at, at = null) : Ar = at.sibling;
        var xo = Ee(Y, at, rn.value, Ue);
        if (xo === null) {
          at === null && (at = Ar);
          break;
        }
        n && at && xo.alternate === null && r(Y, at), I = E(xo, I, bt), wt === null ? ct = xo : wt.sibling = xo, wt = xo, at = Ar;
      }
      if (rn.done) return o(
        Y,
        at
      ), Hn && Vl(Y, bt), ct;
      if (at === null) {
        for (; !rn.done; bt++, rn = K.next()) rn = Te(Y, rn.value, Ue), rn !== null && (I = E(rn, I, bt), wt === null ? ct = rn : wt.sibling = rn, wt = rn);
        return Hn && Vl(Y, bt), ct;
      }
      for (at = f(Y, at); !rn.done; bt++, rn = K.next()) rn = Ke(at, Y, bt, rn.value, Ue), rn !== null && (n && rn.alternate !== null && at.delete(rn.key === null ? bt : rn.key), I = E(rn, I, bt), wt === null ? ct = rn : wt.sibling = rn, wt = rn);
      return n && at.forEach(function(N0) {
        return r(Y, N0);
      }), Hn && Vl(Y, bt), ct;
    }
    function Sr(Y, I, K, Ue) {
      if (typeof K == "object" && K !== null && K.type === tt && K.key === null && (K = K.props.children), typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case X:
            e: {
              for (var ct = K.key, wt = I; wt !== null; ) {
                if (wt.key === ct) {
                  if (ct = K.type, ct === tt) {
                    if (wt.tag === 7) {
                      o(Y, wt.sibling), I = h(wt, K.props.children), I.return = Y, Y = I;
                      break e;
                    }
                  } else if (wt.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === de && fm(ct) === wt.type) {
                    o(Y, wt.sibling), I = h(wt, K.props), I.ref = Fu(Y, wt, K), I.return = Y, Y = I;
                    break e;
                  }
                  o(Y, wt);
                  break;
                } else r(Y, wt);
                wt = wt.sibling;
              }
              K.type === tt ? (I = iu(K.props.children, Y.mode, Ue, K.key), I.return = Y, Y = I) : (Ue = sd(K.type, K.key, K.props, null, Y.mode, Ue), Ue.ref = Fu(Y, I, K), Ue.return = Y, Y = Ue);
            }
            return _(Y);
          case Ae:
            e: {
              for (wt = K.key; I !== null; ) {
                if (I.key === wt) if (I.tag === 4 && I.stateNode.containerInfo === K.containerInfo && I.stateNode.implementation === K.implementation) {
                  o(Y, I.sibling), I = h(I, K.children || []), I.return = Y, Y = I;
                  break e;
                } else {
                  o(Y, I);
                  break;
                }
                else r(Y, I);
                I = I.sibling;
              }
              I = kc(K, Y.mode, Ue), I.return = Y, Y = I;
            }
            return _(Y);
          case de:
            return wt = K._init, Sr(Y, I, wt(K._payload), Ue);
        }
        if (rr(K)) return rt(Y, I, K, Ue);
        if (re(K)) return ut(Y, I, K, Ue);
        sc(Y, K);
      }
      return typeof K == "string" && K !== "" || typeof K == "number" ? (K = "" + K, I !== null && I.tag === 6 ? (o(Y, I.sibling), I = h(I, K), I.return = Y, Y = I) : (o(Y, I), I = fd(K, Y.mode, Ue), I.return = Y, Y = I), _(Y)) : o(Y, I);
    }
    return Sr;
  }
  var Hu = dm(!0), pm = dm(!1), cc = {}, Bi = kn(cc), $u = kn(cc), fc = kn(cc);
  function al(n) {
    if (n === cc) throw Error(c(174));
    return n;
  }
  function zp(n, r) {
    switch (nn(fc, r), nn($u, n), nn(Bi, cc), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Qn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Qn(r, n);
    }
    st(Bi), nn(Bi, r);
  }
  function Bu() {
    st(Bi), st($u), st(fc);
  }
  function Af(n) {
    al(fc.current);
    var r = al(Bi.current), o = Qn(r, n.type);
    r !== o && (nn($u, n), nn(Bi, o));
  }
  function gt(n) {
    $u.current === n && (st(Bi), st($u));
  }
  var dt = kn(0);
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
  var lr = [];
  function ai() {
    for (var n = 0; n < lr.length; n++) lr[n]._workInProgressVersionPrimary = null;
    lr.length = 0;
  }
  var dc = Re.ReactCurrentDispatcher, Up = Re.ReactCurrentBatchConfig, Wl = 0, Jn = null, vr = null, pe = null, mr = !1, Et = !1, Vi = 0, Eo = 0;
  function ur() {
    throw Error(c(321));
  }
  function ii(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!bi(n[o], r[o])) return !1;
    return !0;
  }
  function Yl(n, r, o, f, h, E) {
    if (Wl = E, Jn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, dc.current = n === null || n.memoizedState === null ? h0 : v0, n = o(f, h), Et) {
      E = 0;
      do {
        if (Et = !1, Vi = 0, 25 <= E) throw Error(c(301));
        E += 1, pe = vr = null, r.updateQueue = null, dc.current = m0, n = o(f, h);
      } while (Et);
    }
    if (dc.current = Wf, r = vr !== null && vr.next !== null, Wl = 0, pe = vr = Jn = null, mr = !1, r) throw Error(c(300));
    return n;
  }
  function il() {
    var n = Vi !== 0;
    return Vi = 0, n;
  }
  function Ta() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return pe === null ? Jn.memoizedState = pe = n : pe = pe.next = n, pe;
  }
  function ka() {
    if (vr === null) {
      var n = Jn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = vr.next;
    var r = pe === null ? Jn.memoizedState : pe.next;
    if (r !== null) pe = r, vr = n;
    else {
      if (n === null) throw Error(c(310));
      vr = n, n = { memoizedState: vr.memoizedState, baseState: vr.baseState, baseQueue: vr.baseQueue, queue: vr.queue, next: null }, pe === null ? Jn.memoizedState = pe = n : pe = pe.next = n;
    }
    return pe;
  }
  function ql(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function pc(n) {
    var r = ka(), o = r.queue;
    if (o === null) throw Error(c(311));
    o.lastRenderedReducer = n;
    var f = vr, h = f.baseQueue, E = o.pending;
    if (E !== null) {
      if (h !== null) {
        var _ = h.next;
        h.next = E.next, E.next = _;
      }
      f.baseQueue = h = E, o.pending = null;
    }
    if (h !== null) {
      E = h.next, f = f.baseState;
      var M = _ = null, $ = null, ae = E;
      do {
        var Ce = ae.lane;
        if ((Wl & Ce) === Ce) $ !== null && ($ = $.next = { lane: 0, action: ae.action, hasEagerState: ae.hasEagerState, eagerState: ae.eagerState, next: null }), f = ae.hasEagerState ? ae.eagerState : n(f, ae.action);
        else {
          var Te = {
            lane: Ce,
            action: ae.action,
            hasEagerState: ae.hasEagerState,
            eagerState: ae.eagerState,
            next: null
          };
          $ === null ? (M = $ = Te, _ = f) : $ = $.next = Te, Jn.lanes |= Ce, tu |= Ce;
        }
        ae = ae.next;
      } while (ae !== null && ae !== E);
      $ === null ? _ = f : $.next = M, bi(f, r.memoizedState) || (Oa = !0), r.memoizedState = f, r.baseState = _, r.baseQueue = $, o.lastRenderedState = f;
    }
    if (n = o.interleaved, n !== null) {
      h = n;
      do
        E = h.lane, Jn.lanes |= E, tu |= E, h = h.next;
      while (h !== n);
    } else h === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function hc(n) {
    var r = ka(), o = r.queue;
    if (o === null) throw Error(c(311));
    o.lastRenderedReducer = n;
    var f = o.dispatch, h = o.pending, E = r.memoizedState;
    if (h !== null) {
      o.pending = null;
      var _ = h = h.next;
      do
        E = n(E, _.action), _ = _.next;
      while (_ !== h);
      bi(E, r.memoizedState) || (Oa = !0), r.memoizedState = E, r.baseQueue === null && (r.baseState = E), o.lastRenderedState = E;
    }
    return [E, f];
  }
  function Nf() {
  }
  function Lf(n, r) {
    var o = Jn, f = ka(), h = r(), E = !bi(f.memoizedState, h);
    if (E && (f.memoizedState = h, Oa = !0), f = f.queue, vc(zf.bind(null, o, f, n), [n]), f.getSnapshot !== r || E || pe !== null && pe.memoizedState.tag & 1) {
      if (o.flags |= 2048, Ql(9, jf.bind(null, o, f, h, r), void 0, null), cr === null) throw Error(c(349));
      Wl & 30 || Mf(o, r, h);
    }
    return h;
  }
  function Mf(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Jn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Jn.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function jf(n, r, o, f) {
    r.value = o, r.getSnapshot = f, Uf(r) && Pf(n);
  }
  function zf(n, r, o) {
    return o(function() {
      Uf(r) && Pf(n);
    });
  }
  function Uf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !bi(n, o);
    } catch {
      return !0;
    }
  }
  function Pf(n) {
    var r = So(n, 1);
    r !== null && Zn(r, n, 1, -1);
  }
  function Ff(n) {
    var r = Ta();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ql, lastRenderedState: n }, r.queue = n, n = n.dispatch = If.bind(null, Jn, n), [r.memoizedState, n];
  }
  function Ql(n, r, o, f) {
    return n = { tag: n, create: r, destroy: o, deps: f, next: null }, r = Jn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Jn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (f = o.next, o.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function Hf() {
    return ka().memoizedState;
  }
  function Vu(n, r, o, f) {
    var h = Ta();
    Jn.flags |= n, h.memoizedState = Ql(1 | r, o, void 0, f === void 0 ? null : f);
  }
  function Gl(n, r, o, f) {
    var h = ka();
    f = f === void 0 ? null : f;
    var E = void 0;
    if (vr !== null) {
      var _ = vr.memoizedState;
      if (E = _.destroy, f !== null && ii(f, _.deps)) {
        h.memoizedState = Ql(r, o, E, f);
        return;
      }
    }
    Jn.flags |= n, h.memoizedState = Ql(1 | r, o, E, f);
  }
  function Kl(n, r) {
    return Vu(8390656, 8, n, r);
  }
  function vc(n, r) {
    return Gl(2048, 8, n, r);
  }
  function $f(n, r) {
    return Gl(4, 2, n, r);
  }
  function Bf(n, r) {
    return Gl(4, 4, n, r);
  }
  function Vf(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Pp(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Gl(4, 4, Vf.bind(null, r, n), o);
  }
  function Xl() {
  }
  function Fp(n, r) {
    var o = ka();
    r = r === void 0 ? null : r;
    var f = o.memoizedState;
    return f !== null && r !== null && ii(r, f[1]) ? f[0] : (o.memoizedState = [n, r], n);
  }
  function Iu(n, r) {
    var o = ka();
    r = r === void 0 ? null : r;
    var f = o.memoizedState;
    return f !== null && r !== null && ii(r, f[1]) ? f[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function ol(n, r, o) {
    return Wl & 21 ? (bi(o, r) || (o = Nl(), Jn.lanes |= o, tu |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Oa = !0), n.memoizedState = o);
  }
  function Ia(n, r) {
    var o = qt;
    qt = o !== 0 && 4 > o ? o : 4, n(!0);
    var f = Up.transition;
    Up.transition = {};
    try {
      n(!1), r();
    } finally {
      qt = o, Up.transition = f;
    }
  }
  function hm() {
    return ka().memoizedState;
  }
  function Ln(n, r, o) {
    var f = Co(n);
    if (o = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null }, mc(n)) Wu(r, o);
    else if (o = im(n, r, o, f), o !== null) {
      var h = Pr();
      Zn(o, n, f, h), yc(o, r, f);
    }
  }
  function If(n, r, o) {
    var f = Co(n), h = { lane: f, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (mc(n)) Wu(r, h);
    else {
      var E = n.alternate;
      if (n.lanes === 0 && (E === null || E.lanes === 0) && (E = r.lastRenderedReducer, E !== null)) try {
        var _ = r.lastRenderedState, M = E(_, o);
        if (h.hasEagerState = !0, h.eagerState = M, bi(M, _)) {
          var $ = r.interleaved;
          $ === null ? (h.next = h, Va(r)) : (h.next = $.next, $.next = h), r.interleaved = h;
          return;
        }
      } catch {
      } finally {
      }
      o = im(n, r, h, f), o !== null && (h = Pr(), Zn(o, n, f, h), yc(o, r, f));
    }
  }
  function mc(n) {
    var r = n.alternate;
    return n === Jn || r !== null && r === Jn;
  }
  function Wu(n, r) {
    Et = mr = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function yc(n, r, o) {
    if (o & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, o |= f, r.lanes = o, Ps(n, o);
    }
  }
  var Wf = { readContext: He, useCallback: ur, useContext: ur, useEffect: ur, useImperativeHandle: ur, useInsertionEffect: ur, useLayoutEffect: ur, useMemo: ur, useReducer: ur, useRef: ur, useState: ur, useDebugValue: ur, useDeferredValue: ur, useTransition: ur, useMutableSource: ur, useSyncExternalStore: ur, useId: ur, unstable_isNewReconciler: !1 }, h0 = { readContext: He, useCallback: function(n, r) {
    return Ta().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: He, useEffect: Kl, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Vu(
      4194308,
      4,
      Vf.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Vu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Vu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Ta();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var f = Ta();
    return r = o !== void 0 ? o(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = Ln.bind(null, Jn, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = Ta();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ff, useDebugValue: Xl, useDeferredValue: function(n) {
    return Ta().memoizedState = n;
  }, useTransition: function() {
    var n = Ff(!1), r = n[0];
    return n = Ia.bind(null, n[1]), Ta().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var f = Jn, h = Ta();
    if (Hn) {
      if (o === void 0) throw Error(c(407));
      o = o();
    } else {
      if (o = r(), cr === null) throw Error(c(349));
      Wl & 30 || Mf(f, r, o);
    }
    h.memoizedState = o;
    var E = { value: o, getSnapshot: r };
    return h.queue = E, Kl(zf.bind(
      null,
      f,
      E,
      n
    ), [n]), f.flags |= 2048, Ql(9, jf.bind(null, f, E, o, r), void 0, null), o;
  }, useId: function() {
    var n = Ta(), r = cr.identifierPrefix;
    if (Hn) {
      var o = Br, f = _a;
      o = (f & ~(1 << 32 - aa(f) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Vi++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = Eo++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, v0 = {
    readContext: He,
    useCallback: Fp,
    useContext: He,
    useEffect: vc,
    useImperativeHandle: Pp,
    useInsertionEffect: $f,
    useLayoutEffect: Bf,
    useMemo: Iu,
    useReducer: pc,
    useRef: Hf,
    useState: function() {
      return pc(ql);
    },
    useDebugValue: Xl,
    useDeferredValue: function(n) {
      var r = ka();
      return ol(r, vr.memoizedState, n);
    },
    useTransition: function() {
      var n = pc(ql)[0], r = ka().memoizedState;
      return [n, r];
    },
    useMutableSource: Nf,
    useSyncExternalStore: Lf,
    useId: hm,
    unstable_isNewReconciler: !1
  }, m0 = { readContext: He, useCallback: Fp, useContext: He, useEffect: vc, useImperativeHandle: Pp, useInsertionEffect: $f, useLayoutEffect: Bf, useMemo: Iu, useReducer: hc, useRef: Hf, useState: function() {
    return hc(ql);
  }, useDebugValue: Xl, useDeferredValue: function(n) {
    var r = ka();
    return vr === null ? r.memoizedState = n : ol(r, vr.memoizedState, n);
  }, useTransition: function() {
    var n = hc(ql)[0], r = ka().memoizedState;
    return [n, r];
  }, useMutableSource: Nf, useSyncExternalStore: Lf, useId: hm, unstable_isNewReconciler: !1 };
  function ll(n, r) {
    try {
      var o = "", f = r;
      do
        o += Pe(f), f = f.return;
      while (f);
      var h = o;
    } catch (E) {
      h = `
Error generating stack: ` + E.message + `
` + E.stack;
    }
    return { value: n, source: r, stack: h, digest: null };
  }
  function Hp(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function gc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var vm = typeof WeakMap == "function" ? WeakMap : Map;
  function mm(n, r, o) {
    o = Nn(-1, o), o.tag = 3, o.payload = { element: null };
    var f = r.value;
    return o.callback = function() {
      rd || (rd = !0, Gp = f), gc(n, r);
    }, o;
  }
  function ym(n, r, o) {
    o = Nn(-1, o), o.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = r.value;
      o.payload = function() {
        return f(h);
      }, o.callback = function() {
        gc(n, r);
      };
    }
    var E = n.stateNode;
    return E !== null && typeof E.componentDidCatch == "function" && (o.callback = function() {
      gc(n, r), typeof f != "function" && (ui === null ? ui = /* @__PURE__ */ new Set([this]) : ui.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), o;
  }
  function Sc(n, r, o) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new vm();
      var h = /* @__PURE__ */ new Set();
      f.set(r, h);
    } else h = f.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(r, h));
    h.has(o) || (h.add(o), n = R0.bind(null, n, r, o), r.then(n, n));
  }
  function gm(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function $p(n, r, o, f, h) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = h, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Nn(-1, 1), r.tag = 2, rl(o, r, 1))), o.lanes |= 1), n);
  }
  var Sm = Re.ReactCurrentOwner, Oa = !1;
  function yr(n, r, o, f) {
    r.child = n === null ? pm(r, null, o, f) : Hu(r, n.child, o, f);
  }
  function Yu(n, r, o, f, h) {
    o = o.render;
    var E = r.ref;
    return hr(r, h), f = Yl(n, r, o, f, E, h), o = il(), n !== null && !Oa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, gr(n, r, h)) : (Hn && o && _f(r), r.flags |= 1, yr(n, r, f, h), r.child);
  }
  function ul(n, r, o, f, h) {
    if (n === null) {
      var E = o.type;
      return typeof E == "function" && !eh(E) && E.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = E, Yf(n, r, E, f, h)) : (n = sd(o.type, null, f, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (E = n.child, !(n.lanes & h)) {
      var _ = E.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Au, o(_, f) && n.ref === r.ref) return gr(n, r, h);
    }
    return r.flags |= 1, n = fl(E, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Yf(n, r, o, f, h) {
    if (n !== null) {
      var E = n.memoizedProps;
      if (Au(E, f) && n.ref === r.ref) if (Oa = !1, r.pendingProps = f = E, (n.lanes & h) !== 0) n.flags & 131072 && (Oa = !0);
      else return r.lanes = n.lanes, gr(n, r, h);
    }
    return Mt(n, r, o, f, h);
  }
  function Da(n, r, o) {
    var f = r.pendingProps, h = f.children, E = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nn(ns, Aa), Aa |= o;
    else {
      if (!(o & 1073741824)) return n = E !== null ? E.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, nn(ns, Aa), Aa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = E !== null ? E.baseLanes : o, nn(ns, Aa), Aa |= f;
    }
    else E !== null ? (f = E.baseLanes | o, r.memoizedState = null) : f = o, nn(ns, Aa), Aa |= f;
    return yr(n, r, h, o), r.child;
  }
  function Jl(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Mt(n, r, o, f, h) {
    var E = br(o) ? ia : jr.current;
    return E = Ha(r, E), hr(r, h), o = Yl(n, r, o, f, E, h), f = il(), n !== null && !Oa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, gr(n, r, h)) : (Hn && f && _f(r), r.flags |= 1, yr(n, r, o, h), r.child);
  }
  function Ec(n, r, o, f, h) {
    if (br(o)) {
      var E = !0;
      $l(r);
    } else E = !1;
    if (hr(r, h), r.stateNode === null) bc(n, r), sm(r, o, f), jp(r, o, f, h), f = !0;
    else if (n === null) {
      var _ = r.stateNode, M = r.memoizedProps;
      _.props = M;
      var $ = _.context, ae = o.contextType;
      typeof ae == "object" && ae !== null ? ae = He(ae) : (ae = br(o) ? ia : jr.current, ae = Ha(r, ae));
      var Ce = o.getDerivedStateFromProps, Te = typeof Ce == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      Te || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (M !== f || $ !== ae) && cm(r, _, f, ae), nl = !1;
      var Ee = r.memoizedState;
      _.state = Ee, uc(r, f, _, h), $ = r.memoizedState, M !== f || Ee !== $ || kt.current || nl ? (typeof Ce == "function" && (Mp(r, o, Ce, f), $ = r.memoizedState), (M = nl || um(r, o, M, f, Ee, $, ae)) ? (Te || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = $), _.props = f, _.state = $, _.context = ae, f = M) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      _ = r.stateNode, om(n, r), M = r.memoizedProps, ae = r.type === r.elementType ? M : Ra(r.type, M), _.props = ae, Te = r.pendingProps, Ee = _.context, $ = o.contextType, typeof $ == "object" && $ !== null ? $ = He($) : ($ = br(o) ? ia : jr.current, $ = Ha(r, $));
      var Ke = o.getDerivedStateFromProps;
      (Ce = typeof Ke == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (M !== Te || Ee !== $) && cm(r, _, f, $), nl = !1, Ee = r.memoizedState, _.state = Ee, uc(r, f, _, h);
      var rt = r.memoizedState;
      M !== Te || Ee !== rt || kt.current || nl ? (typeof Ke == "function" && (Mp(r, o, Ke, f), rt = r.memoizedState), (ae = nl || um(r, o, ae, f, Ee, rt, $) || !1) ? (Ce || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(f, rt, $), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(f, rt, $)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || M === n.memoizedProps && Ee === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && Ee === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = rt), _.props = f, _.state = rt, _.context = $, f = ae) : (typeof _.componentDidUpdate != "function" || M === n.memoizedProps && Ee === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && Ee === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return qf(n, r, o, f, E, h);
  }
  function qf(n, r, o, f, h, E) {
    Jl(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!f && !_) return h && nm(r, o, !1), gr(n, r, E);
    f = r.stateNode, Sm.current = r;
    var M = _ && typeof o.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && _ ? (r.child = Hu(r, n.child, null, E), r.child = Hu(r, null, M, E)) : yr(n, r, M, E), r.memoizedState = f.state, h && nm(r, o, !0), r.child;
  }
  function y0(n) {
    var r = n.stateNode;
    r.pendingContext ? Fi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Fi(n, r.context, !1), zp(n, r.containerInfo);
  }
  function Em(n, r, o, f, h) {
    return ju(), Cr(h), r.flags |= 256, yr(n, r, o, f), r.child;
  }
  var wc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function wm(n, r, o) {
    var f = r.pendingProps, h = dt.current, E = !1, _ = (r.flags & 128) !== 0, M;
    if ((M = _) || (M = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), M ? (E = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), nn(dt, h & 1), n === null)
      return Tf(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (_ = f.children, n = f.fallback, E ? (f = r.mode, E = r.child, _ = { mode: "hidden", children: _ }, !(f & 1) && E !== null ? (E.childLanes = 0, E.pendingProps = _) : E = cd(_, f, 0, null), n = iu(n, f, o, null), E.return = r, n.return = r, E.sibling = n, r.child = E, r.child.memoizedState = Zl(o), r.memoizedState = wc, n) : Qf(r, _));
    if (h = n.memoizedState, h !== null && (M = h.dehydrated, M !== null)) return Bp(n, r, _, f, M, h, o);
    if (E) {
      E = f.fallback, _ = r.mode, h = n.child, M = h.sibling;
      var $ = { mode: "hidden", children: f.children };
      return !(_ & 1) && r.child !== h ? (f = r.child, f.childLanes = 0, f.pendingProps = $, r.deletions = null) : (f = fl(h, $), f.subtreeFlags = h.subtreeFlags & 14680064), M !== null ? E = fl(M, E) : (E = iu(E, _, o, null), E.flags |= 2), E.return = r, f.return = r, f.sibling = E, r.child = f, f = E, E = r.child, _ = n.child.memoizedState, _ = _ === null ? Zl(o) : { baseLanes: _.baseLanes | o, cachePool: null, transitions: _.transitions }, E.memoizedState = _, E.childLanes = n.childLanes & ~o, r.memoizedState = wc, f;
    }
    return E = n.child, n = E.sibling, f = fl(E, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = o), f.return = r, f.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function Qf(n, r) {
    return r = cd({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Gf(n, r, o, f) {
    return f !== null && Cr(f), Hu(r, n.child, null, o), n = Qf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Bp(n, r, o, f, h, E, _) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, f = Hp(Error(c(422))), Gf(n, r, _, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (E = f.fallback, h = r.mode, f = cd({ mode: "visible", children: f.children }, h, 0, null), E = iu(E, h, _, null), E.flags |= 2, f.return = r, E.return = r, f.sibling = E, r.child = f, r.mode & 1 && Hu(r, n.child, null, _), r.child.memoizedState = Zl(_), r.memoizedState = wc, E);
    if (!(r.mode & 1)) return Gf(n, r, _, null);
    if (h.data === "$!") {
      if (f = h.nextSibling && h.nextSibling.dataset, f) var M = f.dgst;
      return f = M, E = Error(c(419)), f = Hp(E, f, void 0), Gf(n, r, _, f);
    }
    if (M = (_ & n.childLanes) !== 0, Oa || M) {
      if (f = cr, f !== null) {
        switch (_ & -_) {
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
        h = h & (f.suspendedLanes | _) ? 0 : h, h !== 0 && h !== E.retryLane && (E.retryLane = h, So(n, h), Zn(f, n, h, -1));
      }
      return Tc(), f = Hp(Error(c(421))), Gf(n, r, _, f);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Zp.bind(null, n), h._reactRetry = r, null) : (n = E.treeContext, Ba = Fa(h.nextSibling), $a = r, Hn = !0, ri = null, n !== null && (Ca[xa++] = _a, Ca[xa++] = Br, Ca[xa++] = _i, _a = n.id, Br = n.overflow, _i = r), r = Qf(r, f.children), r.flags |= 4096, r);
  }
  function bm(n, r, o) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), tl(n.return, r, o);
  }
  function Kf(n, r, o, f, h) {
    var E = n.memoizedState;
    E === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: o, tailMode: h } : (E.isBackwards = r, E.rendering = null, E.renderingStartTime = 0, E.last = f, E.tail = o, E.tailMode = h);
  }
  function Vp(n, r, o) {
    var f = r.pendingProps, h = f.revealOrder, E = f.tail;
    if (yr(n, r, f.children, o), f = dt.current, f & 2) f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && bm(n, o, r);
        else if (n.tag === 19) bm(n, o, r);
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
      f &= 1;
    }
    if (nn(dt, f), !(r.mode & 1)) r.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (o = r.child, h = null; o !== null; ) n = o.alternate, n !== null && en(n) === null && (h = o), o = o.sibling;
        o = h, o === null ? (h = r.child, r.child = null) : (h = o.sibling, o.sibling = null), Kf(r, !1, h, o, E);
        break;
      case "backwards":
        for (o = null, h = r.child, r.child = null; h !== null; ) {
          if (n = h.alternate, n !== null && en(n) === null) {
            r.child = h;
            break;
          }
          n = h.sibling, h.sibling = o, o = h, h = n;
        }
        Kf(r, !0, o, null, E);
        break;
      case "together":
        Kf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function bc(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function gr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), tu |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, o = fl(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = fl(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function wo(n, r, o) {
    switch (r.tag) {
      case 3:
        y0(r), ju();
        break;
      case 5:
        Af(r);
        break;
      case 1:
        br(r.type) && $l(r);
        break;
      case 4:
        zp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, h = r.memoizedProps.value;
        nn(zu, f._currentValue), f._currentValue = h;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (nn(dt, dt.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? wm(n, r, o) : (nn(dt, dt.current & 1), n = gr(n, r, o), n !== null ? n.sibling : null);
        nn(dt, dt.current & 1);
        break;
      case 19:
        if (f = (o & r.childLanes) !== 0, n.flags & 128) {
          if (f) return Vp(n, r, o);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), nn(dt, dt.current), f) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Da(n, r, o);
    }
    return gr(n, r, o);
  }
  var Ii, qu, Qu, oi;
  Ii = function(n, r) {
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
  }, qu = function() {
  }, Qu = function(n, r, o, f) {
    var h = n.memoizedProps;
    if (h !== f) {
      n = r.stateNode, al(Bi.current);
      var E = null;
      switch (o) {
        case "input":
          h = _t(n, h), f = _t(n, f), E = [];
          break;
        case "select":
          h = L({}, h, { value: void 0 }), f = L({}, f, { value: void 0 }), E = [];
          break;
        case "textarea":
          h = _r(n, h), f = _r(n, f), E = [];
          break;
        default:
          typeof h.onClick != "function" && typeof f.onClick == "function" && (n.onclick = bf);
      }
      Ht(o, f);
      var _;
      o = null;
      for (ae in h) if (!f.hasOwnProperty(ae) && h.hasOwnProperty(ae) && h[ae] != null) if (ae === "style") {
        var M = h[ae];
        for (_ in M) M.hasOwnProperty(_) && (o || (o = {}), o[_] = "");
      } else ae !== "dangerouslySetInnerHTML" && ae !== "children" && ae !== "suppressContentEditableWarning" && ae !== "suppressHydrationWarning" && ae !== "autoFocus" && (m.hasOwnProperty(ae) ? E || (E = []) : (E = E || []).push(ae, null));
      for (ae in f) {
        var $ = f[ae];
        if (M = h != null ? h[ae] : void 0, f.hasOwnProperty(ae) && $ !== M && ($ != null || M != null)) if (ae === "style") if (M) {
          for (_ in M) !M.hasOwnProperty(_) || $ && $.hasOwnProperty(_) || (o || (o = {}), o[_] = "");
          for (_ in $) $.hasOwnProperty(_) && M[_] !== $[_] && (o || (o = {}), o[_] = $[_]);
        } else o || (E || (E = []), E.push(
          ae,
          o
        )), o = $;
        else ae === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, M = M ? M.__html : void 0, $ != null && M !== $ && (E = E || []).push(ae, $)) : ae === "children" ? typeof $ != "string" && typeof $ != "number" || (E = E || []).push(ae, "" + $) : ae !== "suppressContentEditableWarning" && ae !== "suppressHydrationWarning" && (m.hasOwnProperty(ae) ? ($ != null && ae === "onScroll" && Tn("scroll", n), E || M === $ || (E = [])) : (E = E || []).push(ae, $));
      }
      o && (E = E || []).push("style", o);
      var ae = E;
      (r.updateQueue = ae) && (r.flags |= 4);
    }
  }, oi = function(n, r, o, f) {
    o !== f && (r.flags |= 4);
  };
  function sr(n, r) {
    if (!Hn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var f = null; o !== null; ) o.alternate !== null && (f = o), o = o.sibling;
        f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
    }
  }
  function ta(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, f = 0;
    if (r) for (var h = n.child; h !== null; ) o |= h.lanes | h.childLanes, f |= h.subtreeFlags & 14680064, f |= h.flags & 14680064, h.return = n, h = h.sibling;
    else for (h = n.child; h !== null; ) o |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= f, n.childLanes = o, r;
  }
  function g0(n, r, o) {
    var f = r.pendingProps;
    switch (Rf(r), r.tag) {
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
        return ta(r), null;
      case 1:
        return br(r.type) && ba(), ta(r), null;
      case 3:
        return f = r.stateNode, Bu(), st(kt), st(jr), ai(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (kf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ri !== null && (Kp(ri), ri = null))), qu(n, r), ta(r), null;
      case 5:
        gt(r);
        var h = al(fc.current);
        if (o = r.type, n !== null && r.stateNode != null) Qu(n, r, o, f, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null) throw Error(c(166));
            return ta(r), null;
          }
          if (n = al(Bi.current), kf(r)) {
            f = r.stateNode, o = r.type;
            var E = r.memoizedProps;
            switch (f[Za] = r, f[oc] = E, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Tn("cancel", f), Tn("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                Tn("load", f);
                break;
              case "video":
              case "audio":
                for (h = 0; h < ho.length; h++) Tn(ho[h], f);
                break;
              case "source":
                Tn("error", f);
                break;
              case "img":
              case "image":
              case "link":
                Tn(
                  "error",
                  f
                ), Tn("load", f);
                break;
              case "details":
                Tn("toggle", f);
                break;
              case "input":
                _n(f, E), Tn("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!E.multiple }, Tn("invalid", f);
                break;
              case "textarea":
                Lr(f, E), Tn("invalid", f);
            }
            Ht(o, E), h = null;
            for (var _ in E) if (E.hasOwnProperty(_)) {
              var M = E[_];
              _ === "children" ? typeof M == "string" ? f.textContent !== M && (E.suppressHydrationWarning !== !0 && nc(f.textContent, M, n), h = ["children", M]) : typeof M == "number" && f.textContent !== "" + M && (E.suppressHydrationWarning !== !0 && nc(
                f.textContent,
                M,
                n
              ), h = ["children", "" + M]) : m.hasOwnProperty(_) && M != null && _ === "onScroll" && Tn("scroll", f);
            }
            switch (o) {
              case "input":
                vt(f), Lt(f, E, !0);
                break;
              case "textarea":
                vt(f), ar(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof E.onClick == "function" && (f.onclick = bf);
            }
            f = h, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            _ = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = qn(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = _.createElement(o, { is: f.is }) : (n = _.createElement(o), o === "select" && (_ = n, f.multiple ? _.multiple = !0 : f.size && (_.size = f.size))) : n = _.createElementNS(n, o), n[Za] = r, n[oc] = f, Ii(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (_ = Rn(o, f), o) {
                case "dialog":
                  Tn("cancel", n), Tn("close", n), h = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Tn("load", n), h = f;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < ho.length; h++) Tn(ho[h], n);
                  h = f;
                  break;
                case "source":
                  Tn("error", n), h = f;
                  break;
                case "img":
                case "image":
                case "link":
                  Tn(
                    "error",
                    n
                  ), Tn("load", n), h = f;
                  break;
                case "details":
                  Tn("toggle", n), h = f;
                  break;
                case "input":
                  _n(n, f), h = _t(n, f), Tn("invalid", n);
                  break;
                case "option":
                  h = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, h = L({}, f, { value: void 0 }), Tn("invalid", n);
                  break;
                case "textarea":
                  Lr(n, f), h = _r(n, f), Tn("invalid", n);
                  break;
                default:
                  h = f;
              }
              Ht(o, h), M = h;
              for (E in M) if (M.hasOwnProperty(E)) {
                var $ = M[E];
                E === "style" ? Tt(n, $) : E === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, $ != null && Rr(n, $)) : E === "children" ? typeof $ == "string" ? (o !== "textarea" || $ !== "") && wr(n, $) : typeof $ == "number" && wr(n, "" + $) : E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && E !== "autoFocus" && (m.hasOwnProperty(E) ? $ != null && E === "onScroll" && Tn("scroll", n) : $ != null && fe(n, E, $, _));
              }
              switch (o) {
                case "input":
                  vt(n), Lt(n, f, !1);
                  break;
                case "textarea":
                  vt(n), ar(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + Fe(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, E = f.value, E != null ? jn(n, !!f.multiple, E, !1) : f.defaultValue != null && jn(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = bf);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return ta(r), null;
      case 6:
        if (n && r.stateNode != null) oi(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null) throw Error(c(166));
          if (o = al(fc.current), al(Bi.current), kf(r)) {
            if (f = r.stateNode, o = r.memoizedProps, f[Za] = r, (E = f.nodeValue !== o) && (n = $a, n !== null)) switch (n.tag) {
              case 3:
                nc(f.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && nc(f.nodeValue, o, (n.mode & 1) !== 0);
            }
            E && (r.flags |= 4);
          } else f = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(f), f[Za] = r, r.stateNode = f;
        }
        return ta(r), null;
      case 13:
        if (st(dt), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Hn && Ba !== null && r.mode & 1 && !(r.flags & 128)) am(), ju(), r.flags |= 98560, E = !1;
          else if (E = kf(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!E) throw Error(c(318));
              if (E = r.memoizedState, E = E !== null ? E.dehydrated : null, !E) throw Error(c(317));
              E[Za] = r;
            } else ju(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ta(r), E = !1;
          } else ri !== null && (Kp(ri), ri = null), E = !0;
          if (!E) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || dt.current & 1 ? Or === 0 && (Or = 3) : Tc())), r.updateQueue !== null && (r.flags |= 4), ta(r), null);
      case 4:
        return Bu(), qu(n, r), n === null && Ui(r.stateNode.containerInfo), ta(r), null;
      case 10:
        return Np(r.type._context), ta(r), null;
      case 17:
        return br(r.type) && ba(), ta(r), null;
      case 19:
        if (st(dt), E = r.memoizedState, E === null) return ta(r), null;
        if (f = (r.flags & 128) !== 0, _ = E.rendering, _ === null) if (f) sr(E, !1);
        else {
          if (Or !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (_ = en(n), _ !== null) {
              for (r.flags |= 128, sr(E, !1), f = _.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = o, o = r.child; o !== null; ) E = o, n = f, E.flags &= 14680066, _ = E.alternate, _ === null ? (E.childLanes = 0, E.lanes = n, E.child = null, E.subtreeFlags = 0, E.memoizedProps = null, E.memoizedState = null, E.updateQueue = null, E.dependencies = null, E.stateNode = null) : (E.childLanes = _.childLanes, E.lanes = _.lanes, E.child = _.child, E.subtreeFlags = 0, E.deletions = null, E.memoizedProps = _.memoizedProps, E.memoizedState = _.memoizedState, E.updateQueue = _.updateQueue, E.type = _.type, n = _.dependencies, E.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return nn(dt, dt.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          E.tail !== null && An() > as && (r.flags |= 128, f = !0, sr(E, !1), r.lanes = 4194304);
        }
        else {
          if (!f) if (n = en(_), n !== null) {
            if (r.flags |= 128, f = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), sr(E, !0), E.tail === null && E.tailMode === "hidden" && !_.alternate && !Hn) return ta(r), null;
          } else 2 * An() - E.renderingStartTime > as && o !== 1073741824 && (r.flags |= 128, f = !0, sr(E, !1), r.lanes = 4194304);
          E.isBackwards ? (_.sibling = r.child, r.child = _) : (o = E.last, o !== null ? o.sibling = _ : r.child = _, E.last = _);
        }
        return E.tail !== null ? (r = E.tail, E.rendering = r, E.tail = r.sibling, E.renderingStartTime = An(), r.sibling = null, o = dt.current, nn(dt, f ? o & 1 | 2 : o & 1), r) : (ta(r), null);
      case 22:
      case 23:
        return ld(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? Aa & 1073741824 && (ta(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ta(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function S0(n, r) {
    switch (Rf(r), r.tag) {
      case 1:
        return br(r.type) && ba(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Bu(), st(kt), st(jr), ai(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return gt(r), null;
      case 13:
        if (st(dt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(c(340));
          ju();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return st(dt), null;
      case 4:
        return Bu(), null;
      case 10:
        return Np(r.type._context), null;
      case 22:
      case 23:
        return ld(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Gu = !1, Vr = !1, Xf = typeof WeakSet == "function" ? WeakSet : Set, nt = null;
  function Ku(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (f) {
      fr(n, r, f);
    }
    else o.current = null;
  }
  function Ip(n, r, o) {
    try {
      o();
    } catch (f) {
      fr(n, r, f);
    }
  }
  var Jf = !1;
  function E0(n, r) {
    if (wp = _u, n = Iv(), Ks(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var f = o.getSelection && o.getSelection();
        if (f && f.rangeCount !== 0) {
          o = f.anchorNode;
          var h = f.anchorOffset, E = f.focusNode;
          f = f.focusOffset;
          try {
            o.nodeType, E.nodeType;
          } catch {
            o = null;
            break e;
          }
          var _ = 0, M = -1, $ = -1, ae = 0, Ce = 0, Te = n, Ee = null;
          t: for (; ; ) {
            for (var Ke; Te !== o || h !== 0 && Te.nodeType !== 3 || (M = _ + h), Te !== E || f !== 0 && Te.nodeType !== 3 || ($ = _ + f), Te.nodeType === 3 && (_ += Te.nodeValue.length), (Ke = Te.firstChild) !== null; )
              Ee = Te, Te = Ke;
            for (; ; ) {
              if (Te === n) break t;
              if (Ee === o && ++ae === h && (M = _), Ee === E && ++Ce === f && ($ = _), (Ke = Te.nextSibling) !== null) break;
              Te = Ee, Ee = Te.parentNode;
            }
            Te = Ke;
          }
          o = M === -1 || $ === -1 ? null : { start: M, end: $ };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (bp = { focusedElem: n, selectionRange: o }, _u = !1, nt = r; nt !== null; ) if (r = nt, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, nt = n;
    else for (; nt !== null; ) {
      r = nt;
      try {
        var rt = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (rt !== null) {
              var ut = rt.memoizedProps, Sr = rt.memoizedState, Y = r.stateNode, I = Y.getSnapshotBeforeUpdate(r.elementType === r.type ? ut : Ra(r.type, ut), Sr);
              Y.__reactInternalSnapshotBeforeUpdate = I;
            }
            break;
          case 3:
            var K = r.stateNode.containerInfo;
            K.nodeType === 1 ? K.textContent = "" : K.nodeType === 9 && K.documentElement && K.removeChild(K.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(c(163));
        }
      } catch (Ue) {
        fr(r, r.return, Ue);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, nt = n;
        break;
      }
      nt = r.return;
    }
    return rt = Jf, Jf = !1, rt;
  }
  function Xu(n, r, o) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & n) === n) {
          var E = h.destroy;
          h.destroy = void 0, E !== void 0 && Ip(r, o, E);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function Zf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var f = o.create;
          o.destroy = f();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function ed(n) {
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
  function Cm(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Cm(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Za], delete r[oc], delete r[Rp], delete r[f0], delete r[d0])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Wp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function xm(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Wp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Cc(n, r, o) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = bf));
    else if (f !== 4 && (n = n.child, n !== null)) for (Cc(n, r, o), n = n.sibling; n !== null; ) Cc(n, r, o), n = n.sibling;
  }
  function Ju(n, r, o) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null)) for (Ju(n, r, o), n = n.sibling; n !== null; ) Ju(n, r, o), n = n.sibling;
  }
  var Wn = null, zr = !1;
  function oa(n, r, o) {
    for (o = o.child; o !== null; ) Zu(n, r, o), o = o.sibling;
  }
  function Zu(n, r, o) {
    if (ga && typeof ga.onCommitFiberUnmount == "function") try {
      ga.onCommitFiberUnmount($o, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Vr || Ku(o, r);
      case 6:
        var f = Wn, h = zr;
        Wn = null, oa(n, r, o), Wn = f, zr = h, Wn !== null && (zr ? (n = Wn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Wn.removeChild(o.stateNode));
        break;
      case 18:
        Wn !== null && (zr ? (n = Wn, o = o.stateNode, n.nodeType === 8 ? _p(n.parentNode, o) : n.nodeType === 1 && _p(n, o), Ja(n)) : _p(Wn, o.stateNode));
        break;
      case 4:
        f = Wn, h = zr, Wn = o.stateNode.containerInfo, zr = !0, oa(n, r, o), Wn = f, zr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Vr && (f = o.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          h = f = f.next;
          do {
            var E = h, _ = E.destroy;
            E = E.tag, _ !== void 0 && (E & 2 || E & 4) && Ip(o, r, _), h = h.next;
          } while (h !== f);
        }
        oa(n, r, o);
        break;
      case 1:
        if (!Vr && (Ku(o, r), f = o.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = o.memoizedProps, f.state = o.memoizedState, f.componentWillUnmount();
        } catch (M) {
          fr(o, r, M);
        }
        oa(n, r, o);
        break;
      case 21:
        oa(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Vr = (f = Vr) || o.memoizedState !== null, oa(n, r, o), Vr = f) : oa(n, r, o);
        break;
      default:
        oa(n, r, o);
    }
  }
  function es(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Xf()), r.forEach(function(f) {
        var h = T0.bind(null, n, f);
        o.has(f) || (o.add(f), f.then(h, h));
      });
    }
  }
  function Ur(n, r) {
    var o = r.deletions;
    if (o !== null) for (var f = 0; f < o.length; f++) {
      var h = o[f];
      try {
        var E = n, _ = r, M = _;
        e: for (; M !== null; ) {
          switch (M.tag) {
            case 5:
              Wn = M.stateNode, zr = !1;
              break e;
            case 3:
              Wn = M.stateNode.containerInfo, zr = !0;
              break e;
            case 4:
              Wn = M.stateNode.containerInfo, zr = !0;
              break e;
          }
          M = M.return;
        }
        if (Wn === null) throw Error(c(160));
        Zu(E, _, h), Wn = null, zr = !1;
        var $ = h.alternate;
        $ !== null && ($.return = null), h.return = null;
      } catch (ae) {
        fr(h, r, ae);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) _m(r, n), r = r.sibling;
  }
  function _m(n, r) {
    var o = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ur(r, n), Wi(n), f & 4) {
          try {
            Xu(3, n, n.return), Zf(3, n);
          } catch (ut) {
            fr(n, n.return, ut);
          }
          try {
            Xu(5, n, n.return);
          } catch (ut) {
            fr(n, n.return, ut);
          }
        }
        break;
      case 1:
        Ur(r, n), Wi(n), f & 512 && o !== null && Ku(o, o.return);
        break;
      case 5:
        if (Ur(r, n), Wi(n), f & 512 && o !== null && Ku(o, o.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            wr(h, "");
          } catch (ut) {
            fr(n, n.return, ut);
          }
        }
        if (f & 4 && (h = n.stateNode, h != null)) {
          var E = n.memoizedProps, _ = o !== null ? o.memoizedProps : E, M = n.type, $ = n.updateQueue;
          if (n.updateQueue = null, $ !== null) try {
            M === "input" && E.type === "radio" && E.name != null && cn(h, E), Rn(M, _);
            var ae = Rn(M, E);
            for (_ = 0; _ < $.length; _ += 2) {
              var Ce = $[_], Te = $[_ + 1];
              Ce === "style" ? Tt(h, Te) : Ce === "dangerouslySetInnerHTML" ? Rr(h, Te) : Ce === "children" ? wr(h, Te) : fe(h, Ce, Te, ae);
            }
            switch (M) {
              case "input":
                En(h, E);
                break;
              case "textarea":
                Yn(h, E);
                break;
              case "select":
                var Ee = h._wrapperState.wasMultiple;
                h._wrapperState.wasMultiple = !!E.multiple;
                var Ke = E.value;
                Ke != null ? jn(h, !!E.multiple, Ke, !1) : Ee !== !!E.multiple && (E.defaultValue != null ? jn(
                  h,
                  !!E.multiple,
                  E.defaultValue,
                  !0
                ) : jn(h, !!E.multiple, E.multiple ? [] : "", !1));
            }
            h[oc] = E;
          } catch (ut) {
            fr(n, n.return, ut);
          }
        }
        break;
      case 6:
        if (Ur(r, n), Wi(n), f & 4) {
          if (n.stateNode === null) throw Error(c(162));
          h = n.stateNode, E = n.memoizedProps;
          try {
            h.nodeValue = E;
          } catch (ut) {
            fr(n, n.return, ut);
          }
        }
        break;
      case 3:
        if (Ur(r, n), Wi(n), f & 4 && o !== null && o.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (ut) {
          fr(n, n.return, ut);
        }
        break;
      case 4:
        Ur(r, n), Wi(n);
        break;
      case 13:
        Ur(r, n), Wi(n), h = n.child, h.flags & 8192 && (E = h.memoizedState !== null, h.stateNode.isHidden = E, !E || h.alternate !== null && h.alternate.memoizedState !== null || (nd = An())), f & 4 && es(n);
        break;
      case 22:
        if (Ce = o !== null && o.memoizedState !== null, n.mode & 1 ? (Vr = (ae = Vr) || Ce, Ur(r, n), Vr = ae) : Ur(r, n), Wi(n), f & 8192) {
          if (ae = n.memoizedState !== null, (n.stateNode.isHidden = ae) && !Ce && n.mode & 1) for (nt = n, Ce = n.child; Ce !== null; ) {
            for (Te = nt = Ce; nt !== null; ) {
              switch (Ee = nt, Ke = Ee.child, Ee.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xu(4, Ee, Ee.return);
                  break;
                case 1:
                  Ku(Ee, Ee.return);
                  var rt = Ee.stateNode;
                  if (typeof rt.componentWillUnmount == "function") {
                    f = Ee, o = Ee.return;
                    try {
                      r = f, rt.props = r.memoizedProps, rt.state = r.memoizedState, rt.componentWillUnmount();
                    } catch (ut) {
                      fr(f, o, ut);
                    }
                  }
                  break;
                case 5:
                  Ku(Ee, Ee.return);
                  break;
                case 22:
                  if (Ee.memoizedState !== null) {
                    Rm(Te);
                    continue;
                  }
              }
              Ke !== null ? (Ke.return = Ee, nt = Ke) : Rm(Te);
            }
            Ce = Ce.sibling;
          }
          e: for (Ce = null, Te = n; ; ) {
            if (Te.tag === 5) {
              if (Ce === null) {
                Ce = Te;
                try {
                  h = Te.stateNode, ae ? (E = h.style, typeof E.setProperty == "function" ? E.setProperty("display", "none", "important") : E.display = "none") : (M = Te.stateNode, $ = Te.memoizedProps.style, _ = $ != null && $.hasOwnProperty("display") ? $.display : null, M.style.display = Ve("display", _));
                } catch (ut) {
                  fr(n, n.return, ut);
                }
              }
            } else if (Te.tag === 6) {
              if (Ce === null) try {
                Te.stateNode.nodeValue = ae ? "" : Te.memoizedProps;
              } catch (ut) {
                fr(n, n.return, ut);
              }
            } else if ((Te.tag !== 22 && Te.tag !== 23 || Te.memoizedState === null || Te === n) && Te.child !== null) {
              Te.child.return = Te, Te = Te.child;
              continue;
            }
            if (Te === n) break e;
            for (; Te.sibling === null; ) {
              if (Te.return === null || Te.return === n) break e;
              Ce === Te && (Ce = null), Te = Te.return;
            }
            Ce === Te && (Ce = null), Te.sibling.return = Te.return, Te = Te.sibling;
          }
        }
        break;
      case 19:
        Ur(r, n), Wi(n), f & 4 && es(n);
        break;
      case 21:
        break;
      default:
        Ur(
          r,
          n
        ), Wi(n);
    }
  }
  function Wi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Wp(o)) {
              var f = o;
              break e;
            }
            o = o.return;
          }
          throw Error(c(160));
        }
        switch (f.tag) {
          case 5:
            var h = f.stateNode;
            f.flags & 32 && (wr(h, ""), f.flags &= -33);
            var E = xm(n);
            Ju(n, E, h);
            break;
          case 3:
          case 4:
            var _ = f.stateNode.containerInfo, M = xm(n);
            Cc(n, M, _);
            break;
          default:
            throw Error(c(161));
        }
      } catch ($) {
        fr(n, n.return, $);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function w0(n, r, o) {
    nt = n, Yp(n);
  }
  function Yp(n, r, o) {
    for (var f = (n.mode & 1) !== 0; nt !== null; ) {
      var h = nt, E = h.child;
      if (h.tag === 22 && f) {
        var _ = h.memoizedState !== null || Gu;
        if (!_) {
          var M = h.alternate, $ = M !== null && M.memoizedState !== null || Vr;
          M = Gu;
          var ae = Vr;
          if (Gu = _, (Vr = $) && !ae) for (nt = h; nt !== null; ) _ = nt, $ = _.child, _.tag === 22 && _.memoizedState !== null ? qp(h) : $ !== null ? ($.return = _, nt = $) : qp(h);
          for (; E !== null; ) nt = E, Yp(E), E = E.sibling;
          nt = h, Gu = M, Vr = ae;
        }
        ts(n);
      } else h.subtreeFlags & 8772 && E !== null ? (E.return = h, nt = E) : ts(n);
    }
  }
  function ts(n) {
    for (; nt !== null; ) {
      var r = nt;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Vr || Zf(5, r);
              break;
            case 1:
              var f = r.stateNode;
              if (r.flags & 4 && !Vr) if (o === null) f.componentDidMount();
              else {
                var h = r.elementType === r.type ? o.memoizedProps : Ra(r.type, o.memoizedProps);
                f.componentDidUpdate(h, o.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
              }
              var E = r.updateQueue;
              E !== null && Pu(r, E, f);
              break;
            case 3:
              var _ = r.updateQueue;
              if (_ !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                Pu(r, _, o);
              }
              break;
            case 5:
              var M = r.stateNode;
              if (o === null && r.flags & 4) {
                o = M;
                var $ = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    $.autoFocus && o.focus();
                    break;
                  case "img":
                    $.src && (o.src = $.src);
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
                var ae = r.alternate;
                if (ae !== null) {
                  var Ce = ae.memoizedState;
                  if (Ce !== null) {
                    var Te = Ce.dehydrated;
                    Te !== null && Ja(Te);
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
              throw Error(c(163));
          }
          Vr || r.flags & 512 && ed(r);
        } catch (Ee) {
          fr(r, r.return, Ee);
        }
      }
      if (r === n) {
        nt = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, nt = o;
        break;
      }
      nt = r.return;
    }
  }
  function Rm(n) {
    for (; nt !== null; ) {
      var r = nt;
      if (r === n) {
        nt = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, nt = o;
        break;
      }
      nt = r.return;
    }
  }
  function qp(n) {
    for (; nt !== null; ) {
      var r = nt;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Zf(4, r);
            } catch ($) {
              fr(r, o, $);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = r.return;
              try {
                f.componentDidMount();
              } catch ($) {
                fr(r, h, $);
              }
            }
            var E = r.return;
            try {
              ed(r);
            } catch ($) {
              fr(r, E, $);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              ed(r);
            } catch ($) {
              fr(r, _, $);
            }
        }
      } catch ($) {
        fr(r, r.return, $);
      }
      if (r === n) {
        nt = null;
        break;
      }
      var M = r.sibling;
      if (M !== null) {
        M.return = r.return, nt = M;
        break;
      }
      nt = r.return;
    }
  }
  var b0 = Math.ceil, eu = Re.ReactCurrentDispatcher, td = Re.ReactCurrentOwner, li = Re.ReactCurrentBatchConfig, Vt = 0, cr = null, $n = null, kr = 0, Aa = 0, ns = kn(0), Or = 0, xc = null, tu = 0, rs = 0, Qp = 0, sl = null, na = null, nd = 0, as = 1 / 0, bo = null, rd = !1, Gp = null, ui = null, is = !1, si = null, ad = 0, _c = 0, id = null, Rc = -1, nu = 0;
  function Pr() {
    return Vt & 6 ? An() : Rc !== -1 ? Rc : Rc = An();
  }
  function Co(n) {
    return n.mode & 1 ? Vt & 2 && kr !== 0 ? kr & -kr : p0.transition !== null ? (nu === 0 && (nu = Nl()), nu) : (n = qt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Bs(n.type)), n) : 1;
  }
  function Zn(n, r, o, f) {
    if (50 < _c) throw _c = 0, id = null, Error(c(185));
    Vo(n, o, f), (!(Vt & 2) || n !== cr) && (n === cr && (!(Vt & 2) && (rs |= o), Or === 4 && Yi(n, kr)), Dr(n, f), o === 1 && Vt === 0 && !(r.mode & 1) && (as = An() + 500, Jo && Hi()));
  }
  function Dr(n, r) {
    var o = n.callbackNode;
    Bo(n, r);
    var f = Mi(n, n === cr ? kr : 0);
    if (f === 0) o !== null && tn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (o != null && tn(o), r === 1) n.tag === 0 ? rm(os.bind(null, n)) : xf(os.bind(null, n)), tm(function() {
        !(Vt & 6) && Hi();
      }), o = null;
      else {
        switch (Fs(f)) {
          case 1:
            o = Ns;
            break;
          case 4:
            o = Li;
            break;
          case 16:
            o = Pt;
            break;
          case 536870912:
            o = ao;
            break;
          default:
            o = Pt;
        }
        o = Mm(o, od.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function od(n, r) {
    if (Rc = -1, nu = 0, Vt & 6) throw Error(c(327));
    var o = n.callbackNode;
    if (ls() && n.callbackNode !== o) return null;
    var f = Mi(n, n === cr ? kr : 0);
    if (f === 0) return null;
    if (f & 30 || f & n.expiredLanes || r) r = ud(n, f);
    else {
      r = f;
      var h = Vt;
      Vt |= 2;
      var E = km();
      (cr !== n || kr !== r) && (bo = null, as = An() + 500, au(n, r));
      do
        try {
          x0();
          break;
        } catch (M) {
          Tm(n, M);
        }
      while (!0);
      Ap(), eu.current = E, Vt = h, $n !== null ? r = 0 : (cr = null, kr = 0, r = Or);
    }
    if (r !== 0) {
      if (r === 2 && (h = ji(n), h !== 0 && (f = h, r = ru(n, h))), r === 1) throw o = xc, au(n, 0), Yi(n, f), Dr(n, An()), o;
      if (r === 6) Yi(n, f);
      else {
        if (h = n.current.alternate, !(f & 30) && !Xp(h) && (r = ud(n, f), r === 2 && (E = ji(n), E !== 0 && (f = E, r = ru(n, E))), r === 1)) throw o = xc, au(n, 0), Yi(n, f), Dr(n, An()), o;
        switch (n.finishedWork = h, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            cl(n, na, bo);
            break;
          case 3:
            if (Yi(n, f), (f & 130023424) === f && (r = nd + 500 - An(), 10 < r)) {
              if (Mi(n, 0) !== 0) break;
              if (h = n.suspendedLanes, (h & f) !== f) {
                Pr(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = rc(cl.bind(null, n, na, bo), r);
              break;
            }
            cl(n, na, bo);
            break;
          case 4:
            if (Yi(n, f), (f & 4194240) === f) break;
            for (r = n.eventTimes, h = -1; 0 < f; ) {
              var _ = 31 - aa(f);
              E = 1 << _, _ = r[_], _ > h && (h = _), f &= ~E;
            }
            if (f = h, f = An() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * b0(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = rc(cl.bind(null, n, na, bo), f);
              break;
            }
            cl(n, na, bo);
            break;
          case 5:
            cl(n, na, bo);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return Dr(n, An()), n.callbackNode === o ? od.bind(null, n) : null;
  }
  function ru(n, r) {
    var o = sl;
    return n.current.memoizedState.isDehydrated && (au(n, r).flags |= 256), n = ud(n, r), n !== 2 && (r = na, na = o, r !== null && Kp(r)), n;
  }
  function Kp(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function Xp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var f = 0; f < o.length; f++) {
          var h = o[f], E = h.getSnapshot;
          h = h.value;
          try {
            if (!bi(E(), h)) return !1;
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
  function Yi(n, r) {
    for (r &= ~Qp, r &= ~rs, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - aa(r), f = 1 << o;
      n[o] = -1, r &= ~f;
    }
  }
  function os(n) {
    if (Vt & 6) throw Error(c(327));
    ls();
    var r = Mi(n, 0);
    if (!(r & 1)) return Dr(n, An()), null;
    var o = ud(n, r);
    if (n.tag !== 0 && o === 2) {
      var f = ji(n);
      f !== 0 && (r = f, o = ru(n, f));
    }
    if (o === 1) throw o = xc, au(n, 0), Yi(n, r), Dr(n, An()), o;
    if (o === 6) throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, cl(n, na, bo), Dr(n, An()), null;
  }
  function Jp(n, r) {
    var o = Vt;
    Vt |= 1;
    try {
      return n(r);
    } finally {
      Vt = o, Vt === 0 && (as = An() + 500, Jo && Hi());
    }
  }
  function qi(n) {
    si !== null && si.tag === 0 && !(Vt & 6) && ls();
    var r = Vt;
    Vt |= 1;
    var o = li.transition, f = qt;
    try {
      if (li.transition = null, qt = 1, n) return n();
    } finally {
      qt = f, li.transition = o, Vt = r, !(Vt & 6) && Hi();
    }
  }
  function ld() {
    Aa = ns.current, st(ns);
  }
  function au(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, ac(o)), $n !== null) for (o = $n.return; o !== null; ) {
      var f = o;
      switch (Rf(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && ba();
          break;
        case 3:
          Bu(), st(kt), st(jr), ai();
          break;
        case 5:
          gt(f);
          break;
        case 4:
          Bu();
          break;
        case 13:
          st(dt);
          break;
        case 19:
          st(dt);
          break;
        case 10:
          Np(f.type._context);
          break;
        case 22:
        case 23:
          ld();
      }
      o = o.return;
    }
    if (cr = n, $n = n = fl(n.current, null), kr = Aa = r, Or = 0, xc = null, Qp = rs = tu = 0, na = sl = null, ea !== null) {
      for (r = 0; r < ea.length; r++) if (o = ea[r], f = o.interleaved, f !== null) {
        o.interleaved = null;
        var h = f.next, E = o.pending;
        if (E !== null) {
          var _ = E.next;
          E.next = h, f.next = _;
        }
        o.pending = f;
      }
      ea = null;
    }
    return n;
  }
  function Tm(n, r) {
    do {
      var o = $n;
      try {
        if (Ap(), dc.current = Wf, mr) {
          for (var f = Jn.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          mr = !1;
        }
        if (Wl = 0, pe = vr = Jn = null, Et = !1, Vi = 0, td.current = null, o === null || o.return === null) {
          Or = 1, xc = r, $n = null;
          break;
        }
        e: {
          var E = n, _ = o.return, M = o, $ = r;
          if (r = kr, M.flags |= 32768, $ !== null && typeof $ == "object" && typeof $.then == "function") {
            var ae = $, Ce = M, Te = Ce.tag;
            if (!(Ce.mode & 1) && (Te === 0 || Te === 11 || Te === 15)) {
              var Ee = Ce.alternate;
              Ee ? (Ce.updateQueue = Ee.updateQueue, Ce.memoizedState = Ee.memoizedState, Ce.lanes = Ee.lanes) : (Ce.updateQueue = null, Ce.memoizedState = null);
            }
            var Ke = gm(_);
            if (Ke !== null) {
              Ke.flags &= -257, $p(Ke, _, M, E, r), Ke.mode & 1 && Sc(E, ae, r), r = Ke, $ = ae;
              var rt = r.updateQueue;
              if (rt === null) {
                var ut = /* @__PURE__ */ new Set();
                ut.add($), r.updateQueue = ut;
              } else rt.add($);
              break e;
            } else {
              if (!(r & 1)) {
                Sc(E, ae, r), Tc();
                break e;
              }
              $ = Error(c(426));
            }
          } else if (Hn && M.mode & 1) {
            var Sr = gm(_);
            if (Sr !== null) {
              !(Sr.flags & 65536) && (Sr.flags |= 256), $p(Sr, _, M, E, r), Cr(ll($, M));
              break e;
            }
          }
          E = $ = ll($, M), Or !== 4 && (Or = 2), sl === null ? sl = [E] : sl.push(E), E = _;
          do {
            switch (E.tag) {
              case 3:
                E.flags |= 65536, r &= -r, E.lanes |= r;
                var Y = mm(E, $, r);
                lm(E, Y);
                break e;
              case 1:
                M = $;
                var I = E.type, K = E.stateNode;
                if (!(E.flags & 128) && (typeof I.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && (ui === null || !ui.has(K)))) {
                  E.flags |= 65536, r &= -r, E.lanes |= r;
                  var Ue = ym(E, M, r);
                  lm(E, Ue);
                  break e;
                }
            }
            E = E.return;
          } while (E !== null);
        }
        Dm(o);
      } catch (ct) {
        r = ct, $n === o && o !== null && ($n = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function km() {
    var n = eu.current;
    return eu.current = Wf, n === null ? Wf : n;
  }
  function Tc() {
    (Or === 0 || Or === 3 || Or === 2) && (Or = 4), cr === null || !(tu & 268435455) && !(rs & 268435455) || Yi(cr, kr);
  }
  function ud(n, r) {
    var o = Vt;
    Vt |= 2;
    var f = km();
    (cr !== n || kr !== r) && (bo = null, au(n, r));
    do
      try {
        C0();
        break;
      } catch (h) {
        Tm(n, h);
      }
    while (!0);
    if (Ap(), Vt = o, eu.current = f, $n !== null) throw Error(c(261));
    return cr = null, kr = 0, Or;
  }
  function C0() {
    for (; $n !== null; ) Om($n);
  }
  function x0() {
    for (; $n !== null && !Mr(); ) Om($n);
  }
  function Om(n) {
    var r = Lm(n.alternate, n, Aa);
    n.memoizedProps = n.pendingProps, r === null ? Dm(n) : $n = r, td.current = null;
  }
  function Dm(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = S0(o, r), o !== null) {
          o.flags &= 32767, $n = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Or = 6, $n = null;
          return;
        }
      } else if (o = g0(o, r, Aa), o !== null) {
        $n = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        $n = r;
        return;
      }
      $n = r = n;
    } while (r !== null);
    Or === 0 && (Or = 5);
  }
  function cl(n, r, o) {
    var f = qt, h = li.transition;
    try {
      li.transition = null, qt = 1, _0(n, r, o, f);
    } finally {
      li.transition = h, qt = f;
    }
    return null;
  }
  function _0(n, r, o, f) {
    do
      ls();
    while (si !== null);
    if (Vt & 6) throw Error(c(327));
    o = n.finishedWork;
    var h = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var E = o.lanes | o.childLanes;
    if (Us(n, E), n === cr && ($n = cr = null, kr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || is || (is = !0, Mm(Pt, function() {
      return ls(), null;
    })), E = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || E) {
      E = li.transition, li.transition = null;
      var _ = qt;
      qt = 1;
      var M = Vt;
      Vt |= 4, td.current = null, E0(n, o), _m(o, n), Ul(bp), _u = !!wp, bp = wp = null, n.current = o, w0(o), ma(), Vt = M, qt = _, li.transition = E;
    } else n.current = o;
    if (is && (is = !1, si = n, ad = h), E = n.pendingLanes, E === 0 && (ui = null), Ls(o.stateNode), Dr(n, An()), r !== null) for (f = n.onRecoverableError, o = 0; o < r.length; o++) h = r[o], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (rd) throw rd = !1, n = Gp, Gp = null, n;
    return ad & 1 && n.tag !== 0 && ls(), E = n.pendingLanes, E & 1 ? n === id ? _c++ : (_c = 0, id = n) : _c = 0, Hi(), null;
  }
  function ls() {
    if (si !== null) {
      var n = Fs(ad), r = li.transition, o = qt;
      try {
        if (li.transition = null, qt = 16 > n ? 16 : n, si === null) var f = !1;
        else {
          if (n = si, si = null, ad = 0, Vt & 6) throw Error(c(331));
          var h = Vt;
          for (Vt |= 4, nt = n.current; nt !== null; ) {
            var E = nt, _ = E.child;
            if (nt.flags & 16) {
              var M = E.deletions;
              if (M !== null) {
                for (var $ = 0; $ < M.length; $++) {
                  var ae = M[$];
                  for (nt = ae; nt !== null; ) {
                    var Ce = nt;
                    switch (Ce.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xu(8, Ce, E);
                    }
                    var Te = Ce.child;
                    if (Te !== null) Te.return = Ce, nt = Te;
                    else for (; nt !== null; ) {
                      Ce = nt;
                      var Ee = Ce.sibling, Ke = Ce.return;
                      if (Cm(Ce), Ce === ae) {
                        nt = null;
                        break;
                      }
                      if (Ee !== null) {
                        Ee.return = Ke, nt = Ee;
                        break;
                      }
                      nt = Ke;
                    }
                  }
                }
                var rt = E.alternate;
                if (rt !== null) {
                  var ut = rt.child;
                  if (ut !== null) {
                    rt.child = null;
                    do {
                      var Sr = ut.sibling;
                      ut.sibling = null, ut = Sr;
                    } while (ut !== null);
                  }
                }
                nt = E;
              }
            }
            if (E.subtreeFlags & 2064 && _ !== null) _.return = E, nt = _;
            else e: for (; nt !== null; ) {
              if (E = nt, E.flags & 2048) switch (E.tag) {
                case 0:
                case 11:
                case 15:
                  Xu(9, E, E.return);
              }
              var Y = E.sibling;
              if (Y !== null) {
                Y.return = E.return, nt = Y;
                break e;
              }
              nt = E.return;
            }
          }
          var I = n.current;
          for (nt = I; nt !== null; ) {
            _ = nt;
            var K = _.child;
            if (_.subtreeFlags & 2064 && K !== null) K.return = _, nt = K;
            else e: for (_ = I; nt !== null; ) {
              if (M = nt, M.flags & 2048) try {
                switch (M.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zf(9, M);
                }
              } catch (ct) {
                fr(M, M.return, ct);
              }
              if (M === _) {
                nt = null;
                break e;
              }
              var Ue = M.sibling;
              if (Ue !== null) {
                Ue.return = M.return, nt = Ue;
                break e;
              }
              nt = M.return;
            }
          }
          if (Vt = h, Hi(), ga && typeof ga.onPostCommitFiberRoot == "function") try {
            ga.onPostCommitFiberRoot($o, n);
          } catch {
          }
          f = !0;
        }
        return f;
      } finally {
        qt = o, li.transition = r;
      }
    }
    return !1;
  }
  function Am(n, r, o) {
    r = ll(o, r), r = mm(n, r, 1), n = rl(n, r, 1), r = Pr(), n !== null && (Vo(n, 1, r), Dr(n, r));
  }
  function fr(n, r, o) {
    if (n.tag === 3) Am(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Am(r, n, o);
        break;
      } else if (r.tag === 1) {
        var f = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (ui === null || !ui.has(f))) {
          n = ll(o, n), n = ym(r, n, 1), r = rl(r, n, 1), n = Pr(), r !== null && (Vo(r, 1, n), Dr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function R0(n, r, o) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = Pr(), n.pingedLanes |= n.suspendedLanes & o, cr === n && (kr & o) === o && (Or === 4 || Or === 3 && (kr & 130023424) === kr && 500 > An() - nd ? au(n, 0) : Qp |= o), Dr(n, r);
  }
  function Nm(n, r) {
    r === 0 && (n.mode & 1 ? (r = wu, wu <<= 1, !(wu & 130023424) && (wu = 4194304)) : r = 1);
    var o = Pr();
    n = So(n, r), n !== null && (Vo(n, r, o), Dr(n, o));
  }
  function Zp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Nm(n, o);
  }
  function T0(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, h = n.memoizedState;
        h !== null && (o = h.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    f !== null && f.delete(r), Nm(n, o);
  }
  var Lm;
  Lm = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || kt.current) Oa = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return Oa = !1, wo(n, r, o);
      Oa = !!(n.flags & 131072);
    }
    else Oa = !1, Hn && r.flags & 1048576 && el(r, Bl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        bc(n, r), n = r.pendingProps;
        var h = Ha(r, jr.current);
        hr(r, o), h = Yl(null, r, f, n, h, o);
        var E = il();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, br(f) ? (E = !0, $l(r)) : E = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Lp(r), h.updater = Df, r.stateNode = h, h._reactInternals = r, jp(r, f, n, o), r = qf(null, r, f, !0, E, o)) : (r.tag = 0, Hn && E && _f(r), yr(null, r, h, o), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (bc(n, r), n = r.pendingProps, h = f._init, f = h(f._payload), r.type = f, h = r.tag = k0(f), n = Ra(f, n), h) {
            case 0:
              r = Mt(null, r, f, n, o);
              break e;
            case 1:
              r = Ec(null, r, f, n, o);
              break e;
            case 11:
              r = Yu(null, r, f, n, o);
              break e;
            case 14:
              r = ul(null, r, f, Ra(f.type, n), o);
              break e;
          }
          throw Error(c(
            306,
            f,
            ""
          ));
        }
        return r;
      case 0:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : Ra(f, h), Mt(n, r, f, h, o);
      case 1:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : Ra(f, h), Ec(n, r, f, h, o);
      case 3:
        e: {
          if (y0(r), n === null) throw Error(c(387));
          f = r.pendingProps, E = r.memoizedState, h = E.element, om(n, r), uc(r, f, null, o);
          var _ = r.memoizedState;
          if (f = _.element, E.isDehydrated) if (E = { element: f, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = E, r.memoizedState = E, r.flags & 256) {
            h = ll(Error(c(423)), r), r = Em(n, r, f, o, h);
            break e;
          } else if (f !== h) {
            h = ll(Error(c(424)), r), r = Em(n, r, f, o, h);
            break e;
          } else for (Ba = Fa(r.stateNode.containerInfo.firstChild), $a = r, Hn = !0, ri = null, o = pm(r, null, f, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (ju(), f === h) {
              r = gr(n, r, o);
              break e;
            }
            yr(n, r, f, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Af(r), n === null && Tf(r), f = r.type, h = r.pendingProps, E = n !== null ? n.memoizedProps : null, _ = h.children, Hl(f, h) ? _ = null : E !== null && Hl(f, E) && (r.flags |= 32), Jl(n, r), yr(n, r, _, o), r.child;
      case 6:
        return n === null && Tf(r), null;
      case 13:
        return wm(n, r, o);
      case 4:
        return zp(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = Hu(r, null, f, o) : yr(n, r, f, o), r.child;
      case 11:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : Ra(f, h), Yu(n, r, f, h, o);
      case 7:
        return yr(n, r, r.pendingProps, o), r.child;
      case 8:
        return yr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return yr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (f = r.type._context, h = r.pendingProps, E = r.memoizedProps, _ = h.value, nn(zu, f._currentValue), f._currentValue = _, E !== null) if (bi(E.value, _)) {
            if (E.children === h.children && !kt.current) {
              r = gr(n, r, o);
              break e;
            }
          } else for (E = r.child, E !== null && (E.return = r); E !== null; ) {
            var M = E.dependencies;
            if (M !== null) {
              _ = E.child;
              for (var $ = M.firstContext; $ !== null; ) {
                if ($.context === f) {
                  if (E.tag === 1) {
                    $ = Nn(-1, o & -o), $.tag = 2;
                    var ae = E.updateQueue;
                    if (ae !== null) {
                      ae = ae.shared;
                      var Ce = ae.pending;
                      Ce === null ? $.next = $ : ($.next = Ce.next, Ce.next = $), ae.pending = $;
                    }
                  }
                  E.lanes |= o, $ = E.alternate, $ !== null && ($.lanes |= o), tl(
                    E.return,
                    o,
                    r
                  ), M.lanes |= o;
                  break;
                }
                $ = $.next;
              }
            } else if (E.tag === 10) _ = E.type === r.type ? null : E.child;
            else if (E.tag === 18) {
              if (_ = E.return, _ === null) throw Error(c(341));
              _.lanes |= o, M = _.alternate, M !== null && (M.lanes |= o), tl(_, o, r), _ = E.sibling;
            } else _ = E.child;
            if (_ !== null) _.return = E;
            else for (_ = E; _ !== null; ) {
              if (_ === r) {
                _ = null;
                break;
              }
              if (E = _.sibling, E !== null) {
                E.return = _.return, _ = E;
                break;
              }
              _ = _.return;
            }
            E = _;
          }
          yr(n, r, h.children, o), r = r.child;
        }
        return r;
      case 9:
        return h = r.type, f = r.pendingProps.children, hr(r, o), h = He(h), f = f(h), r.flags |= 1, yr(n, r, f, o), r.child;
      case 14:
        return f = r.type, h = Ra(f, r.pendingProps), h = Ra(f.type, h), ul(n, r, f, h, o);
      case 15:
        return Yf(n, r, r.type, r.pendingProps, o);
      case 17:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : Ra(f, h), bc(n, r), r.tag = 1, br(f) ? (n = !0, $l(r)) : n = !1, hr(r, o), sm(r, f, h), jp(r, f, h, o), qf(null, r, f, !0, n, o);
      case 19:
        return Vp(n, r, o);
      case 22:
        return Da(n, r, o);
    }
    throw Error(c(156, r.tag));
  };
  function Mm(n, r) {
    return pn(n, r);
  }
  function jm(n, r, o, f) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ci(n, r, o, f) {
    return new jm(n, r, o, f);
  }
  function eh(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function k0(n) {
    if (typeof n == "function") return eh(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ge) return 11;
      if (n === ie) return 14;
    }
    return 2;
  }
  function fl(n, r) {
    var o = n.alternate;
    return o === null ? (o = ci(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function sd(n, r, o, f, h, E) {
    var _ = 2;
    if (f = n, typeof n == "function") eh(n) && (_ = 1);
    else if (typeof n == "string") _ = 5;
    else e: switch (n) {
      case tt:
        return iu(o.children, h, E, r);
      case q:
        _ = 8, h |= 8;
        break;
      case we:
        return n = ci(12, o, r, h | 2), n.elementType = we, n.lanes = E, n;
      case Ne:
        return n = ci(13, o, r, h), n.elementType = Ne, n.lanes = E, n;
      case Z:
        return n = ci(19, o, r, h), n.elementType = Z, n.lanes = E, n;
      case ue:
        return cd(o, h, E, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case ke:
            _ = 10;
            break e;
          case Oe:
            _ = 9;
            break e;
          case ge:
            _ = 11;
            break e;
          case ie:
            _ = 14;
            break e;
          case de:
            _ = 16, f = null;
            break e;
        }
        throw Error(c(130, n == null ? n : typeof n, ""));
    }
    return r = ci(_, o, r, h), r.elementType = n, r.type = f, r.lanes = E, r;
  }
  function iu(n, r, o, f) {
    return n = ci(7, n, f, r), n.lanes = o, n;
  }
  function cd(n, r, o, f) {
    return n = ci(22, n, f, r), n.elementType = ue, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function fd(n, r, o) {
    return n = ci(6, n, null, r), n.lanes = o, n;
  }
  function kc(n, r, o) {
    return r = ci(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Oc(n, r, o, f, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ll(0), this.expirationTimes = Ll(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ll(0), this.identifierPrefix = f, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function th(n, r, o, f, h, E, _, M, $) {
    return n = new Oc(n, r, o, M, $), r === 1 ? (r = 1, E === !0 && (r |= 8)) : r = 0, E = ci(3, null, null, r), n.current = E, E.stateNode = n, E.memoizedState = { element: f, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lp(E), n;
  }
  function zm(n, r, o) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ae, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: o };
  }
  function nh(n) {
    if (!n) return ei;
    n = n._reactInternals;
    e: {
      if (Ye(n) !== n || n.tag !== 1) throw Error(c(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (br(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(c(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (br(o)) return Xo(n, o, r);
    }
    return r;
  }
  function rh(n, r, o, f, h, E, _, M, $) {
    return n = th(o, f, !0, n, h, E, _, M, $), n.context = nh(null), o = n.current, f = Pr(), h = Co(o), E = Nn(f, h), E.callback = r ?? null, rl(o, E, h), n.current.lanes = h, Vo(n, h, f), Dr(n, f), n;
  }
  function dd(n, r, o, f) {
    var h = r.current, E = Pr(), _ = Co(h);
    return o = nh(o), r.context === null ? r.context = o : r.pendingContext = o, r = Nn(E, _), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = rl(h, r, _), n !== null && (Zn(n, h, _, E), Of(n, h, _)), _;
  }
  function Dc(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Um(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function ah(n, r) {
    Um(n, r), (n = n.alternate) && Um(n, r);
  }
  function O0() {
    return null;
  }
  var ih = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function pd(n) {
    this._internalRoot = n;
  }
  Ac.prototype.render = pd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(c(409));
    dd(n, r, null, null);
  }, Ac.prototype.unmount = pd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      qi(function() {
        dd(null, n, null, null);
      }), r[Ci] = null;
    }
  };
  function Ac(n) {
    this._internalRoot = n;
  }
  Ac.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Jt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Pn.length && r !== 0 && r < Pn[o].priority; o++) ;
      Pn.splice(o, 0, n), o === 0 && Ei(n);
    }
  };
  function dl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Pm() {
  }
  function D0(n, r, o, f, h) {
    if (h) {
      if (typeof f == "function") {
        var E = f;
        f = function() {
          var ae = Dc(_);
          E.call(ae);
        };
      }
      var _ = rh(r, f, n, 0, null, !1, !1, "", Pm);
      return n._reactRootContainer = _, n[Ci] = _.current, Ui(n.nodeType === 8 ? n.parentNode : n), qi(), _;
    }
    for (; h = n.lastChild; ) n.removeChild(h);
    if (typeof f == "function") {
      var M = f;
      f = function() {
        var ae = Dc($);
        M.call(ae);
      };
    }
    var $ = th(n, 0, !1, null, null, !1, !1, "", Pm);
    return n._reactRootContainer = $, n[Ci] = $.current, Ui(n.nodeType === 8 ? n.parentNode : n), qi(function() {
      dd(r, $, o, f);
    }), $;
  }
  function vd(n, r, o, f, h) {
    var E = o._reactRootContainer;
    if (E) {
      var _ = E;
      if (typeof h == "function") {
        var M = h;
        h = function() {
          var $ = Dc(_);
          M.call($);
        };
      }
      dd(r, _, n, h);
    } else _ = D0(o, r, n, h, f);
    return Dc(_);
  }
  bu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = io(r.pendingLanes);
          o !== 0 && (Ps(r, o | 1), Dr(r, An()), !(Vt & 6) && (as = An() + 500, Hi()));
        }
        break;
      case 13:
        qi(function() {
          var f = So(n, 1);
          if (f !== null) {
            var h = Pr();
            Zn(f, n, 1, h);
          }
        }), ah(n, 1);
    }
  }, Io = function(n) {
    if (n.tag === 13) {
      var r = So(n, 134217728);
      if (r !== null) {
        var o = Pr();
        Zn(r, n, 134217728, o);
      }
      ah(n, 134217728);
    }
  }, Hs = function(n) {
    if (n.tag === 13) {
      var r = Co(n), o = So(n, r);
      if (o !== null) {
        var f = Pr();
        Zn(o, n, r, f);
      }
      ah(n, r);
    }
  }, Jt = function() {
    return qt;
  }, Cu = function(n, r) {
    var o = qt;
    try {
      return qt = n, r();
    } finally {
      qt = o;
    }
  }, Yt = function(n, r, o) {
    switch (r) {
      case "input":
        if (En(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var f = o[r];
            if (f !== n && f.form === n.form) {
              var h = Cf(f);
              if (!h) throw Error(c(90));
              $t(f), En(f, h);
            }
          }
        }
        break;
      case "textarea":
        Yn(n, o);
        break;
      case "select":
        r = o.value, r != null && jn(n, !!o.multiple, r, !1);
    }
  }, jt = Jp, pr = qi;
  var A0 = { usingClientEntryPoint: !1, Events: [Pi, Mu, Cf, In, lt, Jp] }, Nc = { findFiberByHostInstance: yo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Fm = { bundleType: Nc.bundleType, version: Nc.version, rendererPackageName: Nc.rendererPackageName, rendererConfig: Nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Re.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = $e(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Nc.findFiberByHostInstance || O0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var md = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!md.isDisabled && md.supportsFiber) try {
      $o = md.inject(Fm), ga = md;
    } catch {
    }
  }
  return mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A0, mi.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!dl(r)) throw Error(c(200));
    return zm(n, r, null, o);
  }, mi.createRoot = function(n, r) {
    if (!dl(n)) throw Error(c(299));
    var o = !1, f = "", h = ih;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = th(n, 1, !1, null, null, o, !1, f, h), n[Ci] = r.current, Ui(n.nodeType === 8 ? n.parentNode : n), new pd(r);
  }, mi.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : (n = Object.keys(n).join(","), Error(c(268, n)));
    return n = $e(r), n = n === null ? null : n.stateNode, n;
  }, mi.flushSync = function(n) {
    return qi(n);
  }, mi.hydrate = function(n, r, o) {
    if (!hd(r)) throw Error(c(200));
    return vd(null, n, r, !0, o);
  }, mi.hydrateRoot = function(n, r, o) {
    if (!dl(n)) throw Error(c(405));
    var f = o != null && o.hydratedSources || null, h = !1, E = "", _ = ih;
    if (o != null && (o.unstable_strictMode === !0 && (h = !0), o.identifierPrefix !== void 0 && (E = o.identifierPrefix), o.onRecoverableError !== void 0 && (_ = o.onRecoverableError)), r = rh(r, null, n, 1, o ?? null, h, !1, E, _), n[Ci] = r.current, Ui(n), f) for (n = 0; n < f.length; n++) o = f[n], h = o._getVersion, h = h(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, h] : r.mutableSourceEagerHydrationData.push(
      o,
      h
    );
    return new Ac(r);
  }, mi.render = function(n, r, o) {
    if (!hd(r)) throw Error(c(200));
    return vd(null, n, r, !1, o);
  }, mi.unmountComponentAtNode = function(n) {
    if (!hd(n)) throw Error(c(40));
    return n._reactRootContainer ? (qi(function() {
      vd(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ci] = null;
      });
    }), !0) : !1;
  }, mi.unstable_batchedUpdates = Jp, mi.unstable_renderSubtreeIntoContainer = function(n, r, o, f) {
    if (!hd(o)) throw Error(c(200));
    if (n == null || n._reactInternals === void 0) throw Error(c(38));
    return vd(n, r, o, !1, f);
  }, mi.version = "18.2.0-next-9e3b772b8-20220608", mi;
}
var yi = {}, xR;
function FL() {
  if (xR) return yi;
  xR = 1;
  var u = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return u.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var l = me, c = C1(), d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, m = !1;
    function g(e) {
      m = e;
    }
    function S(e) {
      if (!m) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        x("warn", e, a);
      }
    }
    function y(e) {
      if (!m) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        x("error", e, a);
      }
    }
    function x(e, t, a) {
      {
        var i = d.ReactDebugCurrentFrame, s = i.getStackAddendum();
        s !== "" && (t += "%s", a = a.concat([s]));
        var p = a.map(function(v) {
          return String(v);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var O = 0, k = 1, R = 2, D = 3, j = 4, U = 5, H = 6, oe = 7, ve = 8, xe = 9, fe = 10, Re = 11, X = 12, Ae = 13, tt = 14, q = 15, we = 16, ke = 17, Oe = 18, ge = 19, Ne = 21, Z = 22, ie = 23, de = 24, ue = 25, N = !0, re = !1, L = !1, F = !1, J = !1, _e = !0, be = !1, Pe = !1, Be = !0, Le = !0, Fe = !0, Ge = /* @__PURE__ */ new Set(), ht = {}, vt = {};
    function $t(e, t) {
      Me(e, t), Me(e + "Capture", t);
    }
    function Me(e, t) {
      ht[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ht[e] = t;
      {
        var a = e.toLowerCase();
        vt[a] = e, e === "onDoubleClick" && (vt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ge.add(t[i]);
    }
    var _t = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _n = Object.prototype.hasOwnProperty;
    function cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function En(e) {
      try {
        return Lt(e), !1;
      } catch {
        return !0;
      }
    }
    function Lt(e) {
      return "" + e;
    }
    function dr(e, t) {
      if (En(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, cn(e)), Lt(e);
    }
    function rr(e) {
      if (En(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cn(e)), Lt(e);
    }
    function jn(e, t) {
      if (En(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, cn(e)), Lt(e);
    }
    function _r(e, t) {
      if (En(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, cn(e)), Lt(e);
    }
    function Lr(e) {
      if (En(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", cn(e)), Lt(e);
    }
    function Yn(e) {
      if (En(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", cn(e)), Lt(e);
    }
    var ar = 0, qn = 1, Qn = 2, un = 3, Rr = 4, wr = 5, Tr = 6, je = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ve = je + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Tt = new RegExp("^[" + je + "][" + Ve + "]*$"), Wt = {}, Ht = {};
    function Rn(e) {
      return _n.call(Ht, e) ? !0 : _n.call(Wt, e) ? !1 : Tt.test(e) ? (Ht[e] = !0, !0) : (Wt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function fn(e, t, a) {
      return t !== null ? t.type === ar : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Gn(e, t, a, i) {
      if (a !== null && a.type === ar)
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
          var s = e.toLowerCase().slice(0, 5);
          return s !== "data-" && s !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Yt(e, t, a, i) {
      if (t === null || typeof t > "u" || Gn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case un:
            return !t;
          case Rr:
            return t === !1;
          case wr:
            return isNaN(t);
          case Tr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Vn(e) {
      return Dt.hasOwnProperty(e) ? Dt[e] : null;
    }
    function Qt(e, t, a, i, s, p, v) {
      this.acceptsBooleans = t === Qn || t === un || t === Rr, this.attributeName = i, this.attributeNamespace = s, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = v;
    }
    var Dt = {}, In = [
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
    In.forEach(function(e) {
      Dt[e] = new Qt(
        e,
        ar,
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
      Dt[t] = new Qt(
        t,
        qn,
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
      Dt[e] = new Qt(
        e,
        Qn,
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
      Dt[e] = new Qt(
        e,
        Qn,
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
      Dt[e] = new Qt(
        e,
        un,
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
      Dt[e] = new Qt(
        e,
        un,
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
      Dt[e] = new Qt(
        e,
        Rr,
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
      Dt[e] = new Qt(
        e,
        Tr,
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
      Dt[e] = new Qt(
        e,
        wr,
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
    var lt = /[\-\:]([a-z])/g, jt = function(e) {
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
      var t = e.replace(lt, jt);
      Dt[t] = new Qt(
        t,
        qn,
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
      var t = e.replace(lt, jt);
      Dt[t] = new Qt(
        t,
        qn,
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
      var t = e.replace(lt, jt);
      Dt[t] = new Qt(
        t,
        qn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Dt[e] = new Qt(
        e,
        qn,
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
    var pr = "xlinkHref";
    Dt[pr] = new Qt(
      "xlinkHref",
      qn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Dt[e] = new Qt(
        e,
        qn,
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
    var ra = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ie = !1;
    function ft(e) {
      !Ie && ra.test(e) && (Ie = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function mt(e, t, a, i) {
      if (i.mustUseProperty) {
        var s = i.propertyName;
        return e[s];
      } else {
        dr(a, t), i.sanitizeURL && ft("" + a);
        var p = i.attributeName, v = null;
        if (i.type === Rr) {
          if (e.hasAttribute(p)) {
            var w = e.getAttribute(p);
            return w === "" ? !0 : Yt(t, a, i, !1) ? w : w === "" + a ? a : w;
          }
        } else if (e.hasAttribute(p)) {
          if (Yt(t, a, i, !1))
            return e.getAttribute(p);
          if (i.type === un)
            return a;
          v = e.getAttribute(p);
        }
        return Yt(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function sn(e, t, a, i) {
      {
        if (!Rn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var s = e.getAttribute(t);
        return dr(a, t), s === "" + a ? a : s;
      }
    }
    function Dn(e, t, a, i) {
      var s = Vn(t);
      if (!fn(t, s, i)) {
        if (Yt(t, a, s, i) && (a = null), i || s === null) {
          if (Rn(t)) {
            var p = t;
            a === null ? e.removeAttribute(p) : (dr(a, t), e.setAttribute(p, "" + a));
          }
          return;
        }
        var v = s.mustUseProperty;
        if (v) {
          var w = s.propertyName;
          if (a === null) {
            var b = s.type;
            e[w] = b === un ? !1 : "";
          } else
            e[w] = a;
          return;
        }
        var T = s.attributeName, A = s.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var W = s.type, V;
          W === un || W === Rr && a === !0 ? V = "" : (dr(a, T), V = "" + a, s.sanitizeURL && ft(V.toString())), A ? e.setAttributeNS(A, T, V) : e.setAttribute(T, V);
        }
      }
    }
    var zn = Symbol.for("react.element"), Un = Symbol.for("react.portal"), mn = Symbol.for("react.fragment"), ir = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), Se = Symbol.for("react.provider"), We = Symbol.for("react.context"), Ye = Symbol.for("react.forward_ref"), Ut = Symbol.for("react.suspense"), Bt = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), dn = Symbol.for("react.scope"), pn = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), Mr = Symbol.for("react.legacy_hidden"), ma = Symbol.for("react.cache"), An = Symbol.for("react.tracing_marker"), ya = Symbol.iterator, Ns = "@@iterator";
    function Li(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ya && e[ya] || e[Ns];
      return typeof t == "function" ? t : null;
    }
    var Pt = Object.assign, Dl = 0, ao, $o, ga, Ls, aa, Ms, js;
    function zs() {
    }
    zs.__reactDisabledLog = !0;
    function Al() {
      {
        if (Dl === 0) {
          ao = console.log, $o = console.info, ga = console.warn, Ls = console.error, aa = console.group, Ms = console.groupCollapsed, js = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: zs,
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
        Dl++;
      }
    }
    function wu() {
      {
        if (Dl--, Dl === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Pt({}, e, {
              value: ao
            }),
            info: Pt({}, e, {
              value: $o
            }),
            warn: Pt({}, e, {
              value: ga
            }),
            error: Pt({}, e, {
              value: Ls
            }),
            group: Pt({}, e, {
              value: aa
            }),
            groupCollapsed: Pt({}, e, {
              value: Ms
            }),
            groupEnd: Pt({}, e, {
              value: js
            })
          });
        }
        Dl < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var io = d.ReactCurrentDispatcher, Mi;
    function Ka(e, t, a) {
      {
        if (Mi === void 0)
          try {
            throw Error();
          } catch (s) {
            var i = s.stack.trim().match(/\n( *(at )?)/);
            Mi = i && i[1] || "";
          }
        return `
` + Mi + e;
      }
    }
    var Bo = !1, ji;
    {
      var Nl = typeof WeakMap == "function" ? WeakMap : Map;
      ji = new Nl();
    }
    function Ll(e, t) {
      if (!e || Bo)
        return "";
      {
        var a = ji.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Bo = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = io.current, io.current = null, Al();
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
            } catch (ne) {
              i = ne;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (ne) {
              i = ne;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            i = ne;
          }
          e();
        }
      } catch (ne) {
        if (ne && i && typeof ne.stack == "string") {
          for (var w = ne.stack.split(`
`), b = i.stack.split(`
`), T = w.length - 1, A = b.length - 1; T >= 1 && A >= 0 && w[T] !== b[A]; )
            A--;
          for (; T >= 1 && A >= 0; T--, A--)
            if (w[T] !== b[A]) {
              if (T !== 1 || A !== 1)
                do
                  if (T--, A--, A < 0 || w[T] !== b[A]) {
                    var W = `
` + w[T].replace(" at new ", " at ");
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && ji.set(e, W), W;
                  }
                while (T >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        Bo = !1, io.current = p, wu(), Error.prepareStackTrace = s;
      }
      var V = e ? e.displayName || e.name : "", te = V ? Ka(V) : "";
      return typeof e == "function" && ji.set(e, te), te;
    }
    function Vo(e, t, a) {
      return Ll(e, !0);
    }
    function Us(e, t, a) {
      return Ll(e, !1);
    }
    function Ps(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function qt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ll(e, Ps(e));
      if (typeof e == "string")
        return Ka(e);
      switch (e) {
        case Ut:
          return Ka("Suspense");
        case Bt:
          return Ka("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ye:
            return Us(e.render);
          case At:
            return qt(e.type, t, a);
          case $e: {
            var i = e, s = i._payload, p = i._init;
            try {
              return qt(p(s), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Fs(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case U:
          return Ka(e.type);
        case we:
          return Ka("Lazy");
        case Ae:
          return Ka("Suspense");
        case ge:
          return Ka("SuspenseList");
        case O:
        case R:
        case q:
          return Us(e.type);
        case Re:
          return Us(e.type.render);
        case k:
          return Vo(e.type);
        default:
          return "";
      }
    }
    function bu(e) {
      try {
        var t = "", a = e;
        do
          t += Fs(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Io(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var s = t.displayName || t.name || "";
      return s !== "" ? a + "(" + s + ")" : a;
    }
    function Hs(e) {
      return e.displayName || "Context";
    }
    function Jt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case mn:
          return "Fragment";
        case Un:
          return "Portal";
        case z:
          return "Profiler";
        case ir:
          return "StrictMode";
        case Ut:
          return "Suspense";
        case Bt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case We:
            var t = e;
            return Hs(t) + ".Consumer";
          case Se:
            var a = e;
            return Hs(a._context) + ".Provider";
          case Ye:
            return Io(e, e.render, "ForwardRef");
          case At:
            var i = e.displayName || null;
            return i !== null ? i : Jt(e.type) || "Memo";
          case $e: {
            var s = e, p = s._payload, v = s._init;
            try {
              return Jt(v(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Cu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Ml(e) {
      return e.displayName || "Context";
    }
    function Rt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case de:
          return "Cache";
        case xe:
          var i = a;
          return Ml(i) + ".Consumer";
        case fe:
          var s = a;
          return Ml(s._context) + ".Provider";
        case Oe:
          return "DehydratedFragment";
        case Re:
          return Cu(a, a.render, "ForwardRef");
        case oe:
          return "Fragment";
        case U:
          return a;
        case j:
          return "Portal";
        case D:
          return "Root";
        case H:
          return "Text";
        case we:
          return Jt(a);
        case ve:
          return a === ir ? "StrictMode" : "Mode";
        case Z:
          return "Offscreen";
        case X:
          return "Profiler";
        case Ne:
          return "Scope";
        case Ae:
          return "Suspense";
        case ge:
          return "SuspenseList";
        case ue:
          return "TracingMarker";
        case k:
        case O:
        case ke:
        case R:
        case tt:
        case q:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Si = d.ReactDebugCurrentFrame, Kn = null, Sa = !1;
    function Xa() {
      {
        if (Kn === null)
          return null;
        var e = Kn._debugOwner;
        if (e !== null && typeof e < "u")
          return Rt(e);
      }
      return null;
    }
    function Wo() {
      return Kn === null ? "" : bu(Kn);
    }
    function Pn() {
      Si.getCurrentStack = null, Kn = null, Sa = !1;
    }
    function Xn(e) {
      Si.getCurrentStack = e === null ? null : Wo, Kn = e, Sa = !1;
    }
    function $s() {
      return Kn;
    }
    function Hr(e) {
      Sa = e;
    }
    function Ea(e) {
      return "" + e;
    }
    function Ei(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Yn(e), e;
        default:
          return "";
      }
    }
    var xu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function jl(e, t) {
      xu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function zl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Yo(e) {
      return e._valueTracker;
    }
    function Ja(e) {
      e._valueTracker = null;
    }
    function oo(e) {
      var t = "";
      return e && (zl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function _u(e) {
      var t = zl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Yn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var s = a.get, p = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return s.call(this);
          },
          set: function(w) {
            Yn(w), i = "" + w, p.call(this, w);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(w) {
            Yn(w), i = "" + w;
          },
          stopTracking: function() {
            Ja(e), delete e[t];
          }
        };
        return v;
      }
    }
    function lo(e) {
      Yo(e) || (e._valueTracker = _u(e));
    }
    function Ru(e) {
      if (!e)
        return !1;
      var t = Yo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = oo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function zi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var uo = !1, Tu = !1, Bs = !1, wi = !1;
    function ku(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function C(e, t) {
      var a = e, i = t.checked, s = Pt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return s;
    }
    function P(e, t) {
      jl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Tu && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Xa() || "A component", t.type), Tu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !uo && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Xa() || "A component", t.type), uo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ei(t.value != null ? t.value : i),
        controlled: ku(t)
      };
    }
    function ee(e, t) {
      var a = e, i = t.checked;
      i != null && Dn(a, "checked", i, !1);
    }
    function le(e, t) {
      var a = e;
      {
        var i = ku(t);
        !a._wrapperState.controlled && i && !wi && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), wi = !0), a._wrapperState.controlled && !i && !Bs && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Bs = !0);
      }
      ee(e, t);
      var s = Ei(t.value), p = t.type;
      if (s != null)
        p === "number" ? (s === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != s) && (a.value = Ea(s)) : a.value !== Ea(s) && (a.value = Ea(s));
      else if (p === "submit" || p === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ct(a, t.type, s) : t.hasOwnProperty("defaultValue") && Ct(a, t.type, Ei(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ze(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var s = t.type, p = s === "submit" || s === "reset";
        if (p && (t.value === void 0 || t.value === null))
          return;
        var v = Ea(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var w = i.name;
      w !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, w !== "" && (i.name = w);
    }
    function ot(e, t) {
      var a = e;
      le(a, t), Je(a, t);
    }
    function Je(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        dr(a, "name");
        for (var s = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), p = 0; p < s.length; p++) {
          var v = s[p];
          if (!(v === e || v.form !== e.form)) {
            var w = ny(v);
            if (!w)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ru(v), le(v, w);
          }
        }
      }
    }
    function Ct(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || zi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ea(e._wrapperState.initialValue) : e.defaultValue !== Ea(a) && (e.defaultValue = Ea(a)));
    }
    var Ft = !1, hn = !1, yn = !1;
    function gn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? l.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || hn || (hn = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (yn || (yn = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ft && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ft = !0);
    }
    function Sn(e, t) {
      t.value != null && e.setAttribute("value", Ea(Ei(t.value)));
    }
    var Fn = Array.isArray;
    function Zt(e) {
      return Fn(e);
    }
    var qo;
    qo = !1;
    function Ou() {
      var e = Xa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Vs = ["value", "defaultValue"];
    function Is(e) {
      {
        jl("select", e);
        for (var t = 0; t < Vs.length; t++) {
          var a = Vs[t];
          if (e[a] != null) {
            var i = Zt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ou()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ou());
          }
        }
      }
    }
    function so(e, t, a, i) {
      var s = e.options;
      if (t) {
        for (var p = a, v = {}, w = 0; w < p.length; w++)
          v["$" + p[w]] = !0;
        for (var b = 0; b < s.length; b++) {
          var T = v.hasOwnProperty("$" + s[b].value);
          s[b].selected !== T && (s[b].selected = T), T && i && (s[b].defaultSelected = !0);
        }
      } else {
        for (var A = Ea(Ei(a)), W = null, V = 0; V < s.length; V++) {
          if (s[V].value === A) {
            s[V].selected = !0, i && (s[V].defaultSelected = !0);
            return;
          }
          W === null && !s[V].disabled && (W = s[V]);
        }
        W !== null && (W.selected = !0);
      }
    }
    function Ws(e, t) {
      return Pt({}, t, {
        value: void 0
      });
    }
    function Ys(e, t) {
      var a = e;
      Is(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !qo && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qo = !0);
    }
    function op(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? so(a, !!t.multiple, i, !1) : t.defaultValue != null && so(a, !!t.multiple, t.defaultValue, !0);
    }
    function Jg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var s = t.value;
      s != null ? so(a, !!t.multiple, s, !1) : i !== !!t.multiple && (t.defaultValue != null ? so(a, !!t.multiple, t.defaultValue, !0) : so(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Tv(e, t) {
      var a = e, i = t.value;
      i != null && so(a, !!t.multiple, i, !1);
    }
    var kv = !1;
    function lp(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Pt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ea(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ov(e, t) {
      var a = e;
      jl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !kv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Xa() || "A component"), kv = !0);
      var i = t.value;
      if (i == null) {
        var s = t.children, p = t.defaultValue;
        if (s != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (p != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Zt(s)) {
              if (s.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              s = s[0];
            }
            p = s;
          }
        }
        p == null && (p = ""), i = p;
      }
      a._wrapperState = {
        initialValue: Ei(i)
      };
    }
    function Dv(e, t) {
      var a = e, i = Ei(t.value), s = Ei(t.defaultValue);
      if (i != null) {
        var p = Ea(i);
        p !== a.value && (a.value = p), t.defaultValue == null && a.defaultValue !== p && (a.defaultValue = p);
      }
      s != null && (a.defaultValue = Ea(s));
    }
    function pf(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Zg(e, t) {
      Dv(e, t);
    }
    var co = "http://www.w3.org/1999/xhtml", e0 = "http://www.w3.org/1998/Math/MathML", hf = "http://www.w3.org/2000/svg";
    function up(e) {
      switch (e) {
        case "svg":
          return hf;
        case "math":
          return e0;
        default:
          return co;
      }
    }
    function sp(e, t) {
      return e == null || e === co ? up(t) : e === hf && t === "foreignObject" ? co : e;
    }
    var t0 = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, s) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, s);
        });
      } : e;
    }, vf, Av = t0(function(e, t) {
      if (e.namespaceURI === hf && !("innerHTML" in e)) {
        vf = vf || document.createElement("div"), vf.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = vf.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), wa = 1, fo = 3, or = 8, Pa = 9, cp = 11, qs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === fo) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Nv = {
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
    }, Du = {
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
    function Lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Mv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Du).forEach(function(e) {
      Mv.forEach(function(t) {
        Du[Lv(t, e)] = Du[e];
      });
    });
    function Qo(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Du.hasOwnProperty(e) && Du[e]) ? t + "px" : (_r(t, e), ("" + t).trim());
    }
    var n0 = /([A-Z])/g, r0 = /^ms-/;
    function a0(e) {
      return e.replace(n0, "-$1").toLowerCase().replace(r0, "-ms-");
    }
    var fp = function() {
    };
    {
      var jv = /^(?:webkit|moz|o)[A-Z]/, Qs = /^-ms-/, Gs = /-(.)/g, zv = /;\s*$/, po = {}, dp = {}, pp = !1, mf = !1, hp = function(e) {
        return e.replace(Gs, function(t, a) {
          return a.toUpperCase();
        });
      }, Uv = function(e) {
        po.hasOwnProperty(e) && po[e] || (po[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          hp(e.replace(Qs, "ms-"))
        ));
      }, Pv = function(e) {
        po.hasOwnProperty(e) && po[e] || (po[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Fv = function(e, t) {
        dp.hasOwnProperty(t) && dp[t] || (dp[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(zv, "")));
      }, i0 = function(e, t) {
        pp || (pp = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, o0 = function(e, t) {
        mf || (mf = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      fp = function(e, t) {
        e.indexOf("-") > -1 ? Uv(e) : jv.test(e) ? Pv(e) : zv.test(t) && Fv(e, t), typeof t == "number" && (isNaN(t) ? i0(e, t) : isFinite(t) || o0(e, t));
      };
    }
    var l0 = fp;
    function u0(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var s = e[i];
            if (s != null) {
              var p = i.indexOf("--") === 0;
              t += a + (p ? i : a0(i)) + ":", t += Qo(i, s, p), a = ";";
            }
          }
        return t || null;
      }
    }
    function Hv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var s = i.indexOf("--") === 0;
          s || l0(i, t[i]);
          var p = Qo(i, t[i], s);
          i === "float" && (i = "cssFloat"), s ? a.setProperty(i, p) : a[i] = p;
        }
    }
    function bi(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Au(e) {
      var t = {};
      for (var a in e)
        for (var i = Nv[a] || [a], s = 0; s < i.length; s++)
          t[i[s]] = a;
      return t;
    }
    function $v(e, t) {
      {
        if (!t)
          return;
        var a = Au(e), i = Au(t), s = {};
        for (var p in a) {
          var v = a[p], w = i[p];
          if (w && v !== w) {
            var b = v + "," + w;
            if (s[b])
              continue;
            s[b] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", bi(e[v]) ? "Removing" : "Updating", v, w);
          }
        }
      }
    }
    var Bv = {
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
    }, Vv = Pt({
      menuitem: !0
    }, Bv), Iv = "__html";
    function Ks(e, t) {
      if (t) {
        if (Vv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Iv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ul(e, t) {
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
    var yf = {
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
    }, Pl = {
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
    }, Go = {}, Xs = new RegExp("^(aria)-[" + Ve + "]*$"), vp = new RegExp("^(aria)[A-Z][" + Ve + "]*$");
    function Wv(e, t) {
      {
        if (_n.call(Go, t) && Go[t])
          return !0;
        if (vp.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Pl.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Go[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Go[t] = !0, !0;
        }
        if (Xs.test(t)) {
          var s = t.toLowerCase(), p = Pl.hasOwnProperty(s) ? s : null;
          if (p == null)
            return Go[t] = !0, !1;
          if (t !== p)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), Go[t] = !0, !0;
        }
      }
      return !0;
    }
    function gf(e, t) {
      {
        var a = [];
        for (var i in t) {
          var s = Wv(e, i);
          s || a.push(i);
        }
        var p = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
      }
    }
    function Nu(e, t) {
      Ul(e, t) || gf(e, t);
    }
    var Sf = !1;
    function Yv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Sf && (Sf = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Js = function() {
    };
    {
      var Zr = {}, mp = /^on./, qv = /^on[^A-Z]/, Qv = new RegExp("^(aria)-[" + Ve + "]*$"), Gv = new RegExp("^(aria)[A-Z][" + Ve + "]*$");
      Js = function(e, t, a, i) {
        if (_n.call(Zr, t) && Zr[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Zr[t] = !0, !0;
        if (i != null) {
          var p = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var w = v.hasOwnProperty(s) ? v[s] : null;
          if (w != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, w), Zr[t] = !0, !0;
          if (mp.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Zr[t] = !0, !0;
        } else if (mp.test(t))
          return qv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Zr[t] = !0, !0;
        if (Qv.test(t) || Gv.test(t))
          return !0;
        if (s === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Zr[t] = !0, !0;
        if (s === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Zr[t] = !0, !0;
        if (s === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Zr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Zr[t] = !0, !0;
        var b = Vn(t), T = b !== null && b.type === ar;
        if (yf.hasOwnProperty(s)) {
          var A = yf[s];
          if (A !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, A), Zr[t] = !0, !0;
        } else if (!T && t !== s)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), Zr[t] = !0, !0;
        return typeof a == "boolean" && Gn(t, a, b, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Zr[t] = !0, !0) : T ? !0 : Gn(t, a, b, !1) ? (Zr[t] = !0, !1) : ((a === "false" || a === "true") && b !== null && b.type === un && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Zr[t] = !0), !0);
      };
    }
    var Kv = function(e, t, a) {
      {
        var i = [];
        for (var s in t) {
          var p = Js(e, s, t[s], a);
          p || i.push(s);
        }
        var v = i.map(function(w) {
          return "`" + w + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Ko(e, t, a) {
      Ul(e, t) || Kv(e, t, a);
    }
    var Ef = 1, Zs = 2, ec = 4, s0 = Ef | Zs | ec, ho = null;
    function c0(e) {
      ho !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ho = e;
    }
    function Xv() {
      ho === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ho = null;
    }
    function Jv(e) {
      return e === ho;
    }
    function Tn(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === fo ? t.parentNode : t;
    }
    var tc = null, vo = null, Ui = null;
    function yp(e) {
      var t = cs(e);
      if (t) {
        if (typeof tc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = ny(a);
          tc(t.stateNode, t.type, i);
        }
      }
    }
    function gp(e) {
      tc = e;
    }
    function Lu(e) {
      vo ? Ui ? Ui.push(e) : Ui = [e] : vo = e;
    }
    function wf() {
      return vo !== null || Ui !== null;
    }
    function Fl() {
      if (vo) {
        var e = vo, t = Ui;
        if (vo = null, Ui = null, yp(e), t)
          for (var a = 0; a < t.length; a++)
            yp(t[a]);
      }
    }
    var Sp = function(e, t) {
      return e(t);
    }, Zv = function() {
    }, Ep = !1;
    function em() {
      var e = wf();
      e && (Zv(), Fl());
    }
    function nc(e, t, a) {
      if (Ep)
        return e(t, a);
      Ep = !0;
      try {
        return Sp(e, t, a);
      } finally {
        Ep = !1, em();
      }
    }
    function bf(e, t, a) {
      Sp = e, Zv = a;
    }
    function wp(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function bp(e, t, a) {
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
          return !!(a.disabled && wp(t));
        default:
          return !1;
      }
    }
    function Hl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = ny(a);
      if (i === null)
        return null;
      var s = i[t];
      if (bp(t, e.type, i))
        return null;
      if (s && typeof s != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof s + "` type.");
      return s;
    }
    var rc = !1;
    if (_t)
      try {
        var ac = {};
        Object.defineProperty(ac, "passive", {
          get: function() {
            rc = !0;
          }
        }), window.addEventListener("test", ac, ac), window.removeEventListener("test", ac, ac);
      } catch {
        rc = !1;
      }
    function Cp(e, t, a, i, s, p, v, w, b) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch (A) {
        this.onError(A);
      }
    }
    var tm = Cp;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var xp = document.createElement("react");
      tm = function(t, a, i, s, p, v, w, b, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var A = document.createEvent("Event"), W = !1, V = !0, te = window.event, ne = Object.getOwnPropertyDescriptor(window, "event");
        function se() {
          xp.removeEventListener(ce, St, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = te);
        }
        var Ze = Array.prototype.slice.call(arguments, 3);
        function St() {
          W = !0, se(), a.apply(i, Ze), V = !1;
        }
        var pt, Kt = !1, It = !1;
        function Q(G) {
          if (pt = G.error, Kt = !0, pt === null && G.colno === 0 && G.lineno === 0 && (It = !0), G.defaultPrevented && pt != null && typeof pt == "object")
            try {
              pt._suppressLogging = !0;
            } catch {
            }
        }
        var ce = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Q), xp.addEventListener(ce, St, !1), A.initEvent(ce, !1, !1), xp.dispatchEvent(A), ne && Object.defineProperty(window, "event", ne), W && V && (Kt ? It && (pt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : pt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(pt)), window.removeEventListener("error", Q), !W)
          return se(), Cp.apply(this, arguments);
      };
    }
    var _p = tm, Fa = !1, ic = null, mo = !1, Za = null, oc = {
      onError: function(e) {
        Fa = !0, ic = e;
      }
    };
    function Ci(e, t, a, i, s, p, v, w, b) {
      Fa = !1, ic = null, _p.apply(oc, arguments);
    }
    function Rp(e, t, a, i, s, p, v, w, b) {
      if (Ci.apply(this, arguments), Fa) {
        var T = yo();
        mo || (mo = !0, Za = T);
      }
    }
    function f0() {
      if (mo) {
        var e = Za;
        throw mo = !1, Za = null, e;
      }
    }
    function d0() {
      return Fa;
    }
    function yo() {
      if (Fa) {
        var e = ic;
        return Fa = !1, ic = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pi(e) {
      return e._reactInternals;
    }
    function Mu(e) {
      return e._reactInternals !== void 0;
    }
    function Cf(e, t) {
      e._reactInternals = t;
    }
    var yt = (
      /*                      */
      0
    ), xi = (
      /*                */
      1
    ), kn = (
      /*                    */
      2
    ), st = (
      /*                       */
      4
    ), nn = (
      /*                */
      16
    ), ei = (
      /*                 */
      32
    ), jr = (
      /*                     */
      64
    ), kt = (
      /*                   */
      128
    ), ia = (
      /*            */
      256
    ), Ha = (
      /*                          */
      512
    ), br = (
      /*                     */
      1024
    ), ba = (
      /*                      */
      2048
    ), Fi = (
      /*                    */
      4096
    ), Xo = (
      /*                   */
      8192
    ), $l = (
      /*             */
      16384
    ), nm = ba | st | jr | Ha | br | $l, go = (
      /*               */
      32767
    ), Jo = (
      /*                   */
      32768
    ), $r = (
      /*                */
      65536
    ), xf = (
      /* */
      131072
    ), rm = (
      /*                       */
      1048576
    ), Hi = (
      /*                    */
      2097152
    ), ti = (
      /*                 */
      4194304
    ), Zo = (
      /*                */
      8388608
    ), ni = (
      /*               */
      16777216
    ), Bl = (
      /*              */
      33554432
    ), Ca = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      st | br | 0
    ), xa = kn | st | nn | ei | Ha | Fi | Xo, _i = st | jr | Ha | Xo, _a = ba | nn, Br = ti | Zo | Hi, Vl = d.ReactCurrentOwner;
    function el(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (kn | Fi)) !== yt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === D ? a : null;
    }
    function _f(e) {
      if (e.tag === Ae) {
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
    function Rf(e) {
      return e.tag === D ? e.stateNode.containerInfo : null;
    }
    function $a(e) {
      return el(e) === e;
    }
    function Ba(e) {
      {
        var t = Vl.current;
        if (t !== null && t.tag === k) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Rt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var s = Pi(e);
      return s ? el(s) === s : !1;
    }
    function Hn(e) {
      if (el(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ri(e) {
      var t = e.alternate;
      if (!t) {
        var a = el(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, s = t; ; ) {
        var p = i.return;
        if (p === null)
          break;
        var v = p.alternate;
        if (v === null) {
          var w = p.return;
          if (w !== null) {
            i = s = w;
            continue;
          }
          break;
        }
        if (p.child === v.child) {
          for (var b = p.child; b; ) {
            if (b === i)
              return Hn(p), e;
            if (b === s)
              return Hn(p), t;
            b = b.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== s.return)
          i = p, s = v;
        else {
          for (var T = !1, A = p.child; A; ) {
            if (A === i) {
              T = !0, i = p, s = v;
              break;
            }
            if (A === s) {
              T = !0, s = p, i = v;
              break;
            }
            A = A.sibling;
          }
          if (!T) {
            for (A = v.child; A; ) {
              if (A === i) {
                T = !0, i = v, s = p;
                break;
              }
              if (A === s) {
                T = !0, s = v, i = p;
                break;
              }
              A = A.sibling;
            }
            if (!T)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== s)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== D)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Tp(e) {
      var t = ri(e);
      return t !== null ? kp(t) : null;
    }
    function kp(e) {
      if (e.tag === U || e.tag === H)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = kp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Op(e) {
      var t = ri(e);
      return t !== null ? Tf(t) : null;
    }
    function Tf(e) {
      if (e.tag === U || e.tag === H)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== j) {
          var a = Tf(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Dp = c.unstable_scheduleCallback, kf = c.unstable_cancelCallback, am = c.unstable_shouldYield, ju = c.unstable_requestPaint, Cr = c.unstable_now, p0 = c.unstable_getCurrentPriorityLevel, Ra = c.unstable_ImmediatePriority, zu = c.unstable_UserBlockingPriority, $i = c.unstable_NormalPriority, Uu = c.unstable_LowPriority, lc = c.unstable_IdlePriority, Ap = c.unstable_yieldValue, Np = c.unstable_setDisableYieldValue, tl = null, hr = null, He = null, ea = !1, Va = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function im(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Be && (e = Pt({}, e, {
          getLaneLabelMap: Of,
          injectProfilingHooks: rl
        })), tl = t.inject(e), hr = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function So(e, t) {
      if (hr && typeof hr.onScheduleFiberRoot == "function")
        try {
          hr.onScheduleFiberRoot(tl, e, t);
        } catch (a) {
          ea || (ea = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function nl(e, t) {
      if (hr && typeof hr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & kt) === kt;
          if (Le) {
            var i;
            switch (t) {
              case gr:
                i = Ra;
                break;
              case wo:
                i = zu;
                break;
              case Ii:
                i = $i;
                break;
              case qu:
                i = lc;
                break;
              default:
                i = $i;
                break;
            }
            hr.onCommitFiberRoot(tl, e, i, a);
          }
        } catch (s) {
          ea || (ea = !0, y("React instrumentation encountered an error: %s", s));
        }
    }
    function Lp(e) {
      if (hr && typeof hr.onPostCommitFiberRoot == "function")
        try {
          hr.onPostCommitFiberRoot(tl, e);
        } catch (t) {
          ea || (ea = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function om(e) {
      if (hr && typeof hr.onCommitFiberUnmount == "function")
        try {
          hr.onCommitFiberUnmount(tl, e);
        } catch (t) {
          ea || (ea = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Nn(e) {
      if (typeof Ap == "function" && (Np(e), g(e)), hr && typeof hr.setStrictMode == "function")
        try {
          hr.setStrictMode(tl, e);
        } catch (t) {
          ea || (ea = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function rl(e) {
      He = e;
    }
    function Of() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < vr; a++) {
          var i = hm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function lm(e) {
      He !== null && typeof He.markCommitStarted == "function" && He.markCommitStarted(e);
    }
    function uc() {
      He !== null && typeof He.markCommitStopped == "function" && He.markCommitStopped();
    }
    function Pu(e) {
      He !== null && typeof He.markComponentRenderStarted == "function" && He.markComponentRenderStarted(e);
    }
    function Il() {
      He !== null && typeof He.markComponentRenderStopped == "function" && He.markComponentRenderStopped();
    }
    function Mp(e) {
      He !== null && typeof He.markComponentPassiveEffectMountStarted == "function" && He.markComponentPassiveEffectMountStarted(e);
    }
    function Df() {
      He !== null && typeof He.markComponentPassiveEffectMountStopped == "function" && He.markComponentPassiveEffectMountStopped();
    }
    function um(e) {
      He !== null && typeof He.markComponentPassiveEffectUnmountStarted == "function" && He.markComponentPassiveEffectUnmountStarted(e);
    }
    function sm() {
      He !== null && typeof He.markComponentPassiveEffectUnmountStopped == "function" && He.markComponentPassiveEffectUnmountStopped();
    }
    function cm(e) {
      He !== null && typeof He.markComponentLayoutEffectMountStarted == "function" && He.markComponentLayoutEffectMountStarted(e);
    }
    function jp() {
      He !== null && typeof He.markComponentLayoutEffectMountStopped == "function" && He.markComponentLayoutEffectMountStopped();
    }
    function Fu(e) {
      He !== null && typeof He.markComponentLayoutEffectUnmountStarted == "function" && He.markComponentLayoutEffectUnmountStarted(e);
    }
    function sc() {
      He !== null && typeof He.markComponentLayoutEffectUnmountStopped == "function" && He.markComponentLayoutEffectUnmountStopped();
    }
    function fm(e, t, a) {
      He !== null && typeof He.markComponentErrored == "function" && He.markComponentErrored(e, t, a);
    }
    function dm(e, t, a) {
      He !== null && typeof He.markComponentSuspended == "function" && He.markComponentSuspended(e, t, a);
    }
    function Hu(e) {
      He !== null && typeof He.markLayoutEffectsStarted == "function" && He.markLayoutEffectsStarted(e);
    }
    function pm() {
      He !== null && typeof He.markLayoutEffectsStopped == "function" && He.markLayoutEffectsStopped();
    }
    function cc(e) {
      He !== null && typeof He.markPassiveEffectsStarted == "function" && He.markPassiveEffectsStarted(e);
    }
    function Bi() {
      He !== null && typeof He.markPassiveEffectsStopped == "function" && He.markPassiveEffectsStopped();
    }
    function $u(e) {
      He !== null && typeof He.markRenderStarted == "function" && He.markRenderStarted(e);
    }
    function fc() {
      He !== null && typeof He.markRenderYielded == "function" && He.markRenderYielded();
    }
    function al() {
      He !== null && typeof He.markRenderStopped == "function" && He.markRenderStopped();
    }
    function zp(e) {
      He !== null && typeof He.markRenderScheduled == "function" && He.markRenderScheduled(e);
    }
    function Bu(e, t) {
      He !== null && typeof He.markForceUpdateScheduled == "function" && He.markForceUpdateScheduled(e, t);
    }
    function Af(e, t) {
      He !== null && typeof He.markStateUpdateScheduled == "function" && He.markStateUpdateScheduled(e, t);
    }
    var gt = (
      /*                         */
      0
    ), dt = (
      /*                 */
      1
    ), en = (
      /*                    */
      2
    ), lr = (
      /*               */
      8
    ), ai = (
      /*              */
      16
    ), dc = Math.clz32 ? Math.clz32 : Jn, Up = Math.log, Wl = Math.LN2;
    function Jn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Up(t) / Wl | 0) | 0;
    }
    var vr = 31, pe = (
      /*                        */
      0
    ), mr = (
      /*                          */
      0
    ), Et = (
      /*                        */
      1
    ), Vi = (
      /*    */
      2
    ), Eo = (
      /*             */
      4
    ), ur = (
      /*            */
      8
    ), ii = (
      /*                     */
      16
    ), Yl = (
      /*                */
      32
    ), il = (
      /*                       */
      4194240
    ), Ta = (
      /*                        */
      64
    ), ka = (
      /*                        */
      128
    ), ql = (
      /*                        */
      256
    ), pc = (
      /*                        */
      512
    ), hc = (
      /*                        */
      1024
    ), Nf = (
      /*                        */
      2048
    ), Lf = (
      /*                        */
      4096
    ), Mf = (
      /*                        */
      8192
    ), jf = (
      /*                        */
      16384
    ), zf = (
      /*                       */
      32768
    ), Uf = (
      /*                       */
      65536
    ), Pf = (
      /*                       */
      131072
    ), Ff = (
      /*                       */
      262144
    ), Ql = (
      /*                       */
      524288
    ), Hf = (
      /*                       */
      1048576
    ), Vu = (
      /*                       */
      2097152
    ), Gl = (
      /*                            */
      130023424
    ), Kl = (
      /*                             */
      4194304
    ), vc = (
      /*                             */
      8388608
    ), $f = (
      /*                             */
      16777216
    ), Bf = (
      /*                             */
      33554432
    ), Vf = (
      /*                             */
      67108864
    ), Pp = Kl, Xl = (
      /*          */
      134217728
    ), Fp = (
      /*                          */
      268435455
    ), Iu = (
      /*               */
      268435456
    ), ol = (
      /*                        */
      536870912
    ), Ia = (
      /*                   */
      1073741824
    );
    function hm(e) {
      {
        if (e & Et)
          return "Sync";
        if (e & Vi)
          return "InputContinuousHydration";
        if (e & Eo)
          return "InputContinuous";
        if (e & ur)
          return "DefaultHydration";
        if (e & ii)
          return "Default";
        if (e & Yl)
          return "TransitionHydration";
        if (e & il)
          return "Transition";
        if (e & Gl)
          return "Retry";
        if (e & Xl)
          return "SelectiveHydration";
        if (e & Iu)
          return "IdleHydration";
        if (e & ol)
          return "Idle";
        if (e & Ia)
          return "Offscreen";
      }
    }
    var Ln = -1, If = Ta, mc = Kl;
    function Wu(e) {
      switch (yr(e)) {
        case Et:
          return Et;
        case Vi:
          return Vi;
        case Eo:
          return Eo;
        case ur:
          return ur;
        case ii:
          return ii;
        case Yl:
          return Yl;
        case Ta:
        case ka:
        case ql:
        case pc:
        case hc:
        case Nf:
        case Lf:
        case Mf:
        case jf:
        case zf:
        case Uf:
        case Pf:
        case Ff:
        case Ql:
        case Hf:
        case Vu:
          return e & il;
        case Kl:
        case vc:
        case $f:
        case Bf:
        case Vf:
          return e & Gl;
        case Xl:
          return Xl;
        case Iu:
          return Iu;
        case ol:
          return ol;
        case Ia:
          return Ia;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function yc(e, t) {
      var a = e.pendingLanes;
      if (a === pe)
        return pe;
      var i = pe, s = e.suspendedLanes, p = e.pingedLanes, v = a & Fp;
      if (v !== pe) {
        var w = v & ~s;
        if (w !== pe)
          i = Wu(w);
        else {
          var b = v & p;
          b !== pe && (i = Wu(b));
        }
      } else {
        var T = a & ~s;
        T !== pe ? i = Wu(T) : p !== pe && (i = Wu(p));
      }
      if (i === pe)
        return pe;
      if (t !== pe && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & s) === pe) {
        var A = yr(i), W = yr(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          A >= W || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          A === ii && (W & il) !== pe
        )
          return t;
      }
      (i & Eo) !== pe && (i |= a & ii);
      var V = e.entangledLanes;
      if (V !== pe)
        for (var te = e.entanglements, ne = i & V; ne > 0; ) {
          var se = ul(ne), Ze = 1 << se;
          i |= te[se], ne &= ~Ze;
        }
      return i;
    }
    function Wf(e, t) {
      for (var a = e.eventTimes, i = Ln; t > 0; ) {
        var s = ul(t), p = 1 << s, v = a[s];
        v > i && (i = v), t &= ~p;
      }
      return i;
    }
    function h0(e, t) {
      switch (e) {
        case Et:
        case Vi:
        case Eo:
          return t + 250;
        case ur:
        case ii:
        case Yl:
        case Ta:
        case ka:
        case ql:
        case pc:
        case hc:
        case Nf:
        case Lf:
        case Mf:
        case jf:
        case zf:
        case Uf:
        case Pf:
        case Ff:
        case Ql:
        case Hf:
        case Vu:
          return t + 5e3;
        case Kl:
        case vc:
        case $f:
        case Bf:
        case Vf:
          return Ln;
        case Xl:
        case Iu:
        case ol:
        case Ia:
          return Ln;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Ln;
      }
    }
    function v0(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, s = e.pingedLanes, p = e.expirationTimes, v = a; v > 0; ) {
        var w = ul(v), b = 1 << w, T = p[w];
        T === Ln ? ((b & i) === pe || (b & s) !== pe) && (p[w] = h0(b, t)) : T <= t && (e.expiredLanes |= b), v &= ~b;
      }
    }
    function m0(e) {
      return Wu(e.pendingLanes);
    }
    function ll(e) {
      var t = e.pendingLanes & ~Ia;
      return t !== pe ? t : t & Ia ? Ia : pe;
    }
    function Hp(e) {
      return (e & Et) !== pe;
    }
    function gc(e) {
      return (e & Fp) !== pe;
    }
    function vm(e) {
      return (e & Gl) === e;
    }
    function mm(e) {
      var t = Et | Eo | ii;
      return (e & t) === pe;
    }
    function ym(e) {
      return (e & il) === e;
    }
    function Sc(e, t) {
      var a = Vi | Eo | ur | ii;
      return (t & a) !== pe;
    }
    function gm(e, t) {
      return (t & e.expiredLanes) !== pe;
    }
    function $p(e) {
      return (e & il) !== pe;
    }
    function Sm() {
      var e = If;
      return If <<= 1, (If & il) === pe && (If = Ta), e;
    }
    function Oa() {
      var e = mc;
      return mc <<= 1, (mc & Gl) === pe && (mc = Kl), e;
    }
    function yr(e) {
      return e & -e;
    }
    function Yu(e) {
      return yr(e);
    }
    function ul(e) {
      return 31 - dc(e);
    }
    function Yf(e) {
      return ul(e);
    }
    function Da(e, t) {
      return (e & t) !== pe;
    }
    function Jl(e, t) {
      return (e & t) === t;
    }
    function Mt(e, t) {
      return e | t;
    }
    function Ec(e, t) {
      return e & ~t;
    }
    function qf(e, t) {
      return e & t;
    }
    function y0(e) {
      return e;
    }
    function Em(e, t) {
      return e !== mr && e < t ? e : t;
    }
    function wc(e) {
      for (var t = [], a = 0; a < vr; a++)
        t.push(e);
      return t;
    }
    function Zl(e, t, a) {
      e.pendingLanes |= t, t !== ol && (e.suspendedLanes = pe, e.pingedLanes = pe);
      var i = e.eventTimes, s = Yf(t);
      i[s] = a;
    }
    function wm(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var s = ul(i), p = 1 << s;
        a[s] = Ln, i &= ~p;
      }
    }
    function Qf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Gf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = pe, e.pingedLanes = pe, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, s = e.eventTimes, p = e.expirationTimes, v = a; v > 0; ) {
        var w = ul(v), b = 1 << w;
        i[w] = pe, s[w] = Ln, p[w] = Ln, v &= ~b;
      }
    }
    function Bp(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, s = a; s; ) {
        var p = ul(s), v = 1 << p;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[p] & t && (i[p] |= t), s &= ~v;
      }
    }
    function bm(e, t) {
      var a = yr(t), i;
      switch (a) {
        case Eo:
          i = Vi;
          break;
        case ii:
          i = ur;
          break;
        case Ta:
        case ka:
        case ql:
        case pc:
        case hc:
        case Nf:
        case Lf:
        case Mf:
        case jf:
        case zf:
        case Uf:
        case Pf:
        case Ff:
        case Ql:
        case Hf:
        case Vu:
        case Kl:
        case vc:
        case $f:
        case Bf:
        case Vf:
          i = Yl;
          break;
        case ol:
          i = Iu;
          break;
        default:
          i = mr;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== mr ? mr : i;
    }
    function Kf(e, t, a) {
      if (Va)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var s = Yf(a), p = 1 << s, v = i[s];
          v.add(t), a &= ~p;
        }
    }
    function Vp(e, t) {
      if (Va)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var s = Yf(t), p = 1 << s, v = a[s];
          v.size > 0 && (v.forEach(function(w) {
            var b = w.alternate;
            (b === null || !i.has(b)) && i.add(w);
          }), v.clear()), t &= ~p;
        }
    }
    function bc(e, t) {
      return null;
    }
    var gr = Et, wo = Eo, Ii = ii, qu = ol, Qu = mr;
    function oi() {
      return Qu;
    }
    function sr(e) {
      Qu = e;
    }
    function ta(e, t) {
      var a = Qu;
      try {
        return Qu = e, t();
      } finally {
        Qu = a;
      }
    }
    function g0(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function S0(e, t) {
      return e > t ? e : t;
    }
    function Gu(e, t) {
      return e !== 0 && e < t;
    }
    function Vr(e) {
      var t = yr(e);
      return Gu(gr, t) ? Gu(wo, t) ? gc(t) ? Ii : qu : wo : gr;
    }
    function Xf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var nt;
    function Ku(e) {
      nt = e;
    }
    function Ip(e) {
      nt(e);
    }
    var Jf;
    function E0(e) {
      Jf = e;
    }
    var Xu;
    function Zf(e) {
      Xu = e;
    }
    var ed;
    function Cm(e) {
      ed = e;
    }
    var Wp;
    function xm(e) {
      Wp = e;
    }
    var Cc = !1, Ju = [], Wn = null, zr = null, oa = null, Zu = /* @__PURE__ */ new Map(), es = /* @__PURE__ */ new Map(), Ur = [], _m = [
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
    function Wi(e) {
      return _m.indexOf(e) > -1;
    }
    function w0(e, t, a, i, s) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: s,
        targetContainers: [i]
      };
    }
    function Yp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Wn = null;
          break;
        case "dragenter":
        case "dragleave":
          zr = null;
          break;
        case "mouseover":
        case "mouseout":
          oa = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Zu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          es.delete(i);
          break;
        }
      }
    }
    function ts(e, t, a, i, s, p) {
      if (e === null || e.nativeEvent !== p) {
        var v = w0(t, a, i, s, p);
        if (t !== null) {
          var w = cs(t);
          w !== null && Jf(w);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var b = e.targetContainers;
      return s !== null && b.indexOf(s) === -1 && b.push(s), e;
    }
    function Rm(e, t, a, i, s) {
      switch (t) {
        case "focusin": {
          var p = s;
          return Wn = ts(Wn, e, t, a, i, p), !0;
        }
        case "dragenter": {
          var v = s;
          return zr = ts(zr, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var w = s;
          return oa = ts(oa, e, t, a, i, w), !0;
        }
        case "pointerover": {
          var b = s, T = b.pointerId;
          return Zu.set(T, ts(Zu.get(T) || null, e, t, a, i, b)), !0;
        }
        case "gotpointercapture": {
          var A = s, W = A.pointerId;
          return es.set(W, ts(es.get(W) || null, e, t, a, i, A)), !0;
        }
      }
      return !1;
    }
    function qp(e) {
      var t = jc(e.target);
      if (t !== null) {
        var a = el(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ae) {
            var s = _f(a);
            if (s !== null) {
              e.blockedOn = s, Wp(e.priority, function() {
                Xu(a);
              });
              return;
            }
          } else if (i === D) {
            var p = a.stateNode;
            if (Xf(p)) {
              e.blockedOn = Rf(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function b0(e) {
      for (var t = ed(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ur.length && Gu(t, Ur[i].priority); i++)
        ;
      Ur.splice(i, 0, a), i === 0 && qp(a);
    }
    function eu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = na(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var s = e.nativeEvent, p = new s.constructor(s.type, s);
          c0(p), s.target.dispatchEvent(p), Xv();
        } else {
          var v = cs(i);
          return v !== null && Jf(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function td(e, t, a) {
      eu(e) && a.delete(t);
    }
    function li() {
      Cc = !1, Wn !== null && eu(Wn) && (Wn = null), zr !== null && eu(zr) && (zr = null), oa !== null && eu(oa) && (oa = null), Zu.forEach(td), es.forEach(td);
    }
    function Vt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Cc || (Cc = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, li)));
    }
    function cr(e) {
      if (Ju.length > 0) {
        Vt(Ju[0], e);
        for (var t = 1; t < Ju.length; t++) {
          var a = Ju[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Wn !== null && Vt(Wn, e), zr !== null && Vt(zr, e), oa !== null && Vt(oa, e);
      var i = function(w) {
        return Vt(w, e);
      };
      Zu.forEach(i), es.forEach(i);
      for (var s = 0; s < Ur.length; s++) {
        var p = Ur[s];
        p.blockedOn === e && (p.blockedOn = null);
      }
      for (; Ur.length > 0; ) {
        var v = Ur[0];
        if (v.blockedOn !== null)
          break;
        qp(v), v.blockedOn === null && Ur.shift();
      }
    }
    var $n = d.ReactCurrentBatchConfig, kr = !0;
    function Aa(e) {
      kr = !!e;
    }
    function ns() {
      return kr;
    }
    function Or(e, t, a) {
      var i = nd(t), s;
      switch (i) {
        case gr:
          s = xc;
          break;
        case wo:
          s = tu;
          break;
        case Ii:
        default:
          s = rs;
          break;
      }
      return s.bind(null, t, a, e);
    }
    function xc(e, t, a, i) {
      var s = oi(), p = $n.transition;
      $n.transition = null;
      try {
        sr(gr), rs(e, t, a, i);
      } finally {
        sr(s), $n.transition = p;
      }
    }
    function tu(e, t, a, i) {
      var s = oi(), p = $n.transition;
      $n.transition = null;
      try {
        sr(wo), rs(e, t, a, i);
      } finally {
        sr(s), $n.transition = p;
      }
    }
    function rs(e, t, a, i) {
      kr && Qp(e, t, a, i);
    }
    function Qp(e, t, a, i) {
      var s = na(e, t, a, i);
      if (s === null) {
        F0(e, t, i, sl, a), Yp(e, i);
        return;
      }
      if (Rm(s, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Yp(e, i), t & ec && Wi(e)) {
        for (; s !== null; ) {
          var p = cs(s);
          p !== null && Ip(p);
          var v = na(e, t, a, i);
          if (v === null && F0(e, t, i, sl, a), v === s)
            break;
          s = v;
        }
        s !== null && i.stopPropagation();
        return;
      }
      F0(e, t, i, null, a);
    }
    var sl = null;
    function na(e, t, a, i) {
      sl = null;
      var s = Tn(i), p = jc(s);
      if (p !== null) {
        var v = el(p);
        if (v === null)
          p = null;
        else {
          var w = v.tag;
          if (w === Ae) {
            var b = _f(v);
            if (b !== null)
              return b;
            p = null;
          } else if (w === D) {
            var T = v.stateNode;
            if (Xf(T))
              return Rf(v);
            p = null;
          } else v !== p && (p = null);
        }
      }
      return sl = p, null;
    }
    function nd(e) {
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
          return gr;
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
          return wo;
        case "message": {
          var t = p0();
          switch (t) {
            case Ra:
              return gr;
            case zu:
              return wo;
            case $i:
            case Uu:
              return Ii;
            case lc:
              return qu;
            default:
              return Ii;
          }
        }
        default:
          return Ii;
      }
    }
    function as(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function bo(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function rd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Gp(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ui = null, is = null, si = null;
    function ad(e) {
      return ui = e, is = Rc(), !0;
    }
    function _c() {
      ui = null, is = null, si = null;
    }
    function id() {
      if (si)
        return si;
      var e, t = is, a = t.length, i, s = Rc(), p = s.length;
      for (e = 0; e < a && t[e] === s[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === s[p - i]; i++)
        ;
      var w = i > 1 ? 1 - i : void 0;
      return si = s.slice(e, w), si;
    }
    function Rc() {
      return "value" in ui ? ui.value : ui.textContent;
    }
    function nu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Pr() {
      return !0;
    }
    function Co() {
      return !1;
    }
    function Zn(e) {
      function t(a, i, s, p, v) {
        this._reactName = a, this._targetInst = s, this.type = i, this.nativeEvent = p, this.target = v, this.currentTarget = null;
        for (var w in e)
          if (e.hasOwnProperty(w)) {
            var b = e[w];
            b ? this[w] = b(p) : this[w] = p[w];
          }
        var T = p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1;
        return T ? this.isDefaultPrevented = Pr : this.isDefaultPrevented = Co, this.isPropagationStopped = Co, this;
      }
      return Pt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Pr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Pr);
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
        isPersistent: Pr
      }), t;
    }
    var Dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, od = Zn(Dr), ru = Pt({}, Dr, {
      view: 0,
      detail: 0
    }), Kp = Zn(ru), Xp, Yi, os;
    function Jp(e) {
      e !== os && (os && e.type === "mousemove" ? (Xp = e.screenX - os.screenX, Yi = e.screenY - os.screenY) : (Xp = 0, Yi = 0), os = e);
    }
    var qi = Pt({}, ru, {
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
      getModifierState: Zp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Jp(e), Xp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Yi;
      }
    }), ld = Zn(qi), au = Pt({}, qi, {
      dataTransfer: 0
    }), Tm = Zn(au), km = Pt({}, ru, {
      relatedTarget: 0
    }), Tc = Zn(km), ud = Pt({}, Dr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), C0 = Zn(ud), x0 = Pt({}, Dr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Om = Zn(x0), Dm = Pt({}, Dr, {
      data: 0
    }), cl = Zn(Dm), _0 = cl, ls = {
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
    }, Am = {
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
    function fr(e) {
      if (e.key) {
        var t = ls[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = nu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Am[e.keyCode] || "Unidentified" : "";
    }
    var R0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Nm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = R0[e];
      return i ? !!a[i] : !1;
    }
    function Zp(e) {
      return Nm;
    }
    var T0 = Pt({}, ru, {
      key: fr,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? nu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? nu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Lm = Zn(T0), Mm = Pt({}, qi, {
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
    }), jm = Zn(Mm), ci = Pt({}, ru, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zp
    }), eh = Zn(ci), k0 = Pt({}, Dr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), fl = Zn(k0), sd = Pt({}, qi, {
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
    }), iu = Zn(sd), cd = [9, 13, 27, 32], fd = 229, kc = _t && "CompositionEvent" in window, Oc = null;
    _t && "documentMode" in document && (Oc = document.documentMode);
    var th = _t && "TextEvent" in window && !Oc, zm = _t && (!kc || Oc && Oc > 8 && Oc <= 11), nh = 32, rh = String.fromCharCode(nh);
    function dd() {
      $t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $t("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $t("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $t("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Dc = !1;
    function Um(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ah(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function O0(e, t) {
      return e === "keydown" && t.keyCode === fd;
    }
    function ih(e, t) {
      switch (e) {
        case "keyup":
          return cd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== fd;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ac(e) {
      return e.locale === "ko";
    }
    var dl = !1;
    function hd(e, t, a, i, s) {
      var p, v;
      if (kc ? p = ah(t) : dl ? ih(t, i) && (p = "onCompositionEnd") : O0(t, i) && (p = "onCompositionStart"), !p)
        return null;
      zm && !Ac(i) && (!dl && p === "onCompositionStart" ? dl = ad(s) : p === "onCompositionEnd" && dl && (v = id()));
      var w = Vm(a, p);
      if (w.length > 0) {
        var b = new cl(p, t, null, i, s);
        if (e.push({
          event: b,
          listeners: w
        }), v)
          b.data = v;
        else {
          var T = pd(i);
          T !== null && (b.data = T);
        }
      }
    }
    function Pm(e, t) {
      switch (e) {
        case "compositionend":
          return pd(t);
        case "keypress":
          var a = t.which;
          return a !== nh ? null : (Dc = !0, rh);
        case "textInput":
          var i = t.data;
          return i === rh && Dc ? null : i;
        default:
          return null;
      }
    }
    function D0(e, t) {
      if (dl) {
        if (e === "compositionend" || !kc && ih(e, t)) {
          var a = id();
          return _c(), dl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Um(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return zm && !Ac(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vd(e, t, a, i, s) {
      var p;
      if (th ? p = Pm(t, i) : p = D0(t, i), !p)
        return null;
      var v = Vm(a, "onBeforeInput");
      if (v.length > 0) {
        var w = new _0("onBeforeInput", "beforeinput", null, i, s);
        e.push({
          event: w,
          listeners: v
        }), w.data = p;
      }
    }
    function A0(e, t, a, i, s, p, v) {
      hd(e, t, a, i, s), vd(e, t, a, i, s);
    }
    var Nc = {
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
    function Fm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Nc[e.type] : t === "textarea";
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
    function md(e) {
      if (!_t)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      $t("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Lu(i);
      var s = Vm(t, "onChange");
      if (s.length > 0) {
        var p = new od("onChange", "change", null, a, i);
        e.push({
          event: p,
          listeners: s
        });
      }
    }
    var o = null, f = null;
    function h(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function E(e) {
      var t = [];
      r(t, f, e, Tn(e)), nc(_, t);
    }
    function _(e) {
      Yb(e, 0);
    }
    function M(e) {
      var t = bd(e);
      if (Ru(t))
        return e;
    }
    function $(e, t) {
      if (e === "change")
        return t;
    }
    var ae = !1;
    _t && (ae = md("input") && (!document.documentMode || document.documentMode > 9));
    function Ce(e, t) {
      o = e, f = t, o.attachEvent("onpropertychange", Ee);
    }
    function Te() {
      o && (o.detachEvent("onpropertychange", Ee), o = null, f = null);
    }
    function Ee(e) {
      e.propertyName === "value" && M(f) && E(e);
    }
    function Ke(e, t, a) {
      e === "focusin" ? (Te(), Ce(t, a)) : e === "focusout" && Te();
    }
    function rt(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return M(f);
    }
    function ut(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Sr(e, t) {
      if (e === "click")
        return M(t);
    }
    function Y(e, t) {
      if (e === "input" || e === "change")
        return M(t);
    }
    function I(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ct(e, "number", e.value);
    }
    function K(e, t, a, i, s, p, v) {
      var w = a ? bd(a) : window, b, T;
      if (h(w) ? b = $ : Fm(w) ? ae ? b = Y : (b = rt, T = Ke) : ut(w) && (b = Sr), b) {
        var A = b(t, a);
        if (A) {
          r(e, A, i, s);
          return;
        }
      }
      T && T(t, w, a), t === "focusout" && I(w);
    }
    function Ue() {
      Me("onMouseEnter", ["mouseout", "mouseover"]), Me("onMouseLeave", ["mouseout", "mouseover"]), Me("onPointerEnter", ["pointerout", "pointerover"]), Me("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ct(e, t, a, i, s, p, v) {
      var w = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (w && !Jv(i)) {
        var T = i.relatedTarget || i.fromElement;
        if (T && (jc(T) || Sh(T)))
          return;
      }
      if (!(!b && !w)) {
        var A;
        if (s.window === s)
          A = s;
        else {
          var W = s.ownerDocument;
          W ? A = W.defaultView || W.parentWindow : A = window;
        }
        var V, te;
        if (b) {
          var ne = i.relatedTarget || i.toElement;
          if (V = a, te = ne ? jc(ne) : null, te !== null) {
            var se = el(te);
            (te !== se || te.tag !== U && te.tag !== H) && (te = null);
          }
        } else
          V = null, te = a;
        if (V !== te) {
          var Ze = ld, St = "onMouseLeave", pt = "onMouseEnter", Kt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ze = jm, St = "onPointerLeave", pt = "onPointerEnter", Kt = "pointer");
          var It = V == null ? A : bd(V), Q = te == null ? A : bd(te), ce = new Ze(St, Kt + "leave", V, i, s);
          ce.target = It, ce.relatedTarget = Q;
          var G = null, De = jc(s);
          if (De === a) {
            var et = new Ze(pt, Kt + "enter", te, i, s);
            et.target = Q, et.relatedTarget = It, G = et;
          }
          ik(e, ce, G, V, te);
        }
      }
    }
    function wt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var at = typeof Object.is == "function" ? Object.is : wt;
    function bt(e, t) {
      if (at(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var s = 0; s < a.length; s++) {
        var p = a[s];
        if (!_n.call(t, p) || !at(e[p], t[p]))
          return !1;
      }
      return !0;
    }
    function Ar(e) {
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
    function xo(e, t) {
      for (var a = Ar(e), i = 0, s = 0; a; ) {
        if (a.nodeType === fo) {
          if (s = i + a.textContent.length, i <= t && s >= t)
            return {
              node: a,
              offset: t - i
            };
          i = s;
        }
        a = Ar(rn(a));
      }
    }
    function N0(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var s = i.anchorNode, p = i.anchorOffset, v = i.focusNode, w = i.focusOffset;
      try {
        s.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return FT(e, s, p, v, w);
    }
    function FT(e, t, a, i, s) {
      var p = 0, v = -1, w = -1, b = 0, T = 0, A = e, W = null;
      e: for (; ; ) {
        for (var V = null; A === t && (a === 0 || A.nodeType === fo) && (v = p + a), A === i && (s === 0 || A.nodeType === fo) && (w = p + s), A.nodeType === fo && (p += A.nodeValue.length), (V = A.firstChild) !== null; )
          W = A, A = V;
        for (; ; ) {
          if (A === e)
            break e;
          if (W === t && ++b === a && (v = p), W === i && ++T === s && (w = p), (V = A.nextSibling) !== null)
            break;
          A = W, W = A.parentNode;
        }
        A = V;
      }
      return v === -1 || w === -1 ? null : {
        start: v,
        end: w
      };
    }
    function HT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var s = i.getSelection(), p = e.textContent.length, v = Math.min(t.start, p), w = t.end === void 0 ? v : Math.min(t.end, p);
        if (!s.extend && v > w) {
          var b = w;
          w = v, v = b;
        }
        var T = xo(e, v), A = xo(e, w);
        if (T && A) {
          if (s.rangeCount === 1 && s.anchorNode === T.node && s.anchorOffset === T.offset && s.focusNode === A.node && s.focusOffset === A.offset)
            return;
          var W = a.createRange();
          W.setStart(T.node, T.offset), s.removeAllRanges(), v > w ? (s.addRange(W), s.extend(A.node, A.offset)) : (W.setEnd(A.node, A.offset), s.addRange(W));
        }
      }
    }
    function Mb(e) {
      return e && e.nodeType === fo;
    }
    function jb(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Mb(e) ? !1 : Mb(t) ? jb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function $T(e) {
      return e && e.ownerDocument && jb(e.ownerDocument.documentElement, e);
    }
    function BT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function zb() {
      for (var e = window, t = zi(); t instanceof e.HTMLIFrameElement; ) {
        if (BT(t))
          e = t.contentWindow;
        else
          return t;
        t = zi(e.document);
      }
      return t;
    }
    function L0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function VT() {
      var e = zb();
      return {
        focusedElem: e,
        selectionRange: L0(e) ? WT(e) : null
      };
    }
    function IT(e) {
      var t = zb(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && $T(a)) {
        i !== null && L0(a) && YT(a, i);
        for (var s = [], p = a; p = p.parentNode; )
          p.nodeType === wa && s.push({
            element: p,
            left: p.scrollLeft,
            top: p.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < s.length; v++) {
          var w = s[v];
          w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
        }
      }
    }
    function WT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = N0(e), t || {
        start: 0,
        end: 0
      };
    }
    function YT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : HT(e, t);
    }
    var qT = _t && "documentMode" in document && document.documentMode <= 11;
    function QT() {
      $t("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var yd = null, M0 = null, oh = null, j0 = !1;
    function GT(e) {
      if ("selectionStart" in e && L0(e))
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
    function KT(e) {
      return e.window === e ? e.document : e.nodeType === Pa ? e : e.ownerDocument;
    }
    function Ub(e, t, a) {
      var i = KT(a);
      if (!(j0 || yd == null || yd !== zi(i))) {
        var s = GT(yd);
        if (!oh || !bt(oh, s)) {
          oh = s;
          var p = Vm(M0, "onSelect");
          if (p.length > 0) {
            var v = new od("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: p
            }), v.target = yd;
          }
        }
      }
    }
    function XT(e, t, a, i, s, p, v) {
      var w = a ? bd(a) : window;
      switch (t) {
        case "focusin":
          (Fm(w) || w.contentEditable === "true") && (yd = w, M0 = a, oh = null);
          break;
        case "focusout":
          yd = null, M0 = null, oh = null;
          break;
        case "mousedown":
          j0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          j0 = !1, Ub(e, i, s);
          break;
        case "selectionchange":
          if (qT)
            break;
        case "keydown":
        case "keyup":
          Ub(e, i, s);
      }
    }
    function Hm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var gd = {
      animationend: Hm("Animation", "AnimationEnd"),
      animationiteration: Hm("Animation", "AnimationIteration"),
      animationstart: Hm("Animation", "AnimationStart"),
      transitionend: Hm("Transition", "TransitionEnd")
    }, z0 = {}, Pb = {};
    _t && (Pb = document.createElement("div").style, "AnimationEvent" in window || (delete gd.animationend.animation, delete gd.animationiteration.animation, delete gd.animationstart.animation), "TransitionEvent" in window || delete gd.transitionend.transition);
    function $m(e) {
      if (z0[e])
        return z0[e];
      if (!gd[e])
        return e;
      var t = gd[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in Pb)
          return z0[e] = t[a];
      return e;
    }
    var Fb = $m("animationend"), Hb = $m("animationiteration"), $b = $m("animationstart"), Bb = $m("transitionend"), Vb = /* @__PURE__ */ new Map(), Ib = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function us(e, t) {
      Vb.set(e, t), $t(t, [e]);
    }
    function JT() {
      for (var e = 0; e < Ib.length; e++) {
        var t = Ib[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        us(a, "on" + i);
      }
      us(Fb, "onAnimationEnd"), us(Hb, "onAnimationIteration"), us($b, "onAnimationStart"), us("dblclick", "onDoubleClick"), us("focusin", "onFocus"), us("focusout", "onBlur"), us(Bb, "onTransitionEnd");
    }
    function ZT(e, t, a, i, s, p, v) {
      var w = Vb.get(t);
      if (w !== void 0) {
        var b = od, T = t;
        switch (t) {
          case "keypress":
            if (nu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            b = Lm;
            break;
          case "focusin":
            T = "focus", b = Tc;
            break;
          case "focusout":
            T = "blur", b = Tc;
            break;
          case "beforeblur":
          case "afterblur":
            b = Tc;
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
            b = ld;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = Tm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = eh;
            break;
          case Fb:
          case Hb:
          case $b:
            b = C0;
            break;
          case Bb:
            b = fl;
            break;
          case "scroll":
            b = Kp;
            break;
          case "wheel":
            b = iu;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = Om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = jm;
            break;
        }
        var A = (p & ec) !== 0;
        {
          var W = !A && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", V = rk(a, w, i.type, A, W);
          if (V.length > 0) {
            var te = new b(w, T, null, i, s);
            e.push({
              event: te,
              listeners: V
            });
          }
        }
      }
    }
    JT(), Ue(), n(), QT(), dd();
    function ek(e, t, a, i, s, p, v) {
      ZT(e, t, a, i, s, p);
      var w = (p & s0) === 0;
      w && (ct(e, t, a, i, s), K(e, t, a, i, s), XT(e, t, a, i, s), A0(e, t, a, i, s));
    }
    var lh = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], U0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(lh));
    function Wb(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Rp(i, t, void 0, e), e.currentTarget = null;
    }
    function tk(e, t, a) {
      var i;
      if (a)
        for (var s = t.length - 1; s >= 0; s--) {
          var p = t[s], v = p.instance, w = p.currentTarget, b = p.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          Wb(e, b, w), i = v;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var A = t[T], W = A.instance, V = A.currentTarget, te = A.listener;
          if (W !== i && e.isPropagationStopped())
            return;
          Wb(e, te, V), i = W;
        }
    }
    function Yb(e, t) {
      for (var a = (t & ec) !== 0, i = 0; i < e.length; i++) {
        var s = e[i], p = s.event, v = s.listeners;
        tk(p, v, a);
      }
      f0();
    }
    function nk(e, t, a, i, s) {
      var p = Tn(a), v = [];
      ek(v, e, i, a, p, t), Yb(v, t);
    }
    function er(e, t) {
      U0.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = NO(t), s = ok(e);
      i.has(s) || (qb(t, e, Zs, a), i.add(s));
    }
    function P0(e, t, a) {
      U0.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ec), qb(a, e, i, t);
    }
    var Bm = "_reactListening" + Math.random().toString(36).slice(2);
    function uh(e) {
      if (!e[Bm]) {
        e[Bm] = !0, Ge.forEach(function(a) {
          a !== "selectionchange" && (U0.has(a) || P0(a, !1, e), P0(a, !0, e));
        });
        var t = e.nodeType === Pa ? e : e.ownerDocument;
        t !== null && (t[Bm] || (t[Bm] = !0, P0("selectionchange", !1, t)));
      }
    }
    function qb(e, t, a, i, s) {
      var p = Or(e, t, a), v = void 0;
      rc && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? rd(e, t, p, v) : bo(e, t, p) : v !== void 0 ? Gp(e, t, p, v) : as(e, t, p);
    }
    function Qb(e, t) {
      return e === t || e.nodeType === or && e.parentNode === t;
    }
    function F0(e, t, a, i, s) {
      var p = i;
      if (!(t & Ef) && !(t & Zs)) {
        var v = s;
        if (i !== null) {
          var w = i;
          e: for (; ; ) {
            if (w === null)
              return;
            var b = w.tag;
            if (b === D || b === j) {
              var T = w.stateNode.containerInfo;
              if (Qb(T, v))
                break;
              if (b === j)
                for (var A = w.return; A !== null; ) {
                  var W = A.tag;
                  if (W === D || W === j) {
                    var V = A.stateNode.containerInfo;
                    if (Qb(V, v))
                      return;
                  }
                  A = A.return;
                }
              for (; T !== null; ) {
                var te = jc(T);
                if (te === null)
                  return;
                var ne = te.tag;
                if (ne === U || ne === H) {
                  w = p = te;
                  continue e;
                }
                T = T.parentNode;
              }
            }
            w = w.return;
          }
        }
      }
      nc(function() {
        return nk(e, t, a, p);
      });
    }
    function sh(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function rk(e, t, a, i, s, p) {
      for (var v = t !== null ? t + "Capture" : null, w = i ? v : t, b = [], T = e, A = null; T !== null; ) {
        var W = T, V = W.stateNode, te = W.tag;
        if (te === U && V !== null && (A = V, w !== null)) {
          var ne = Hl(T, w);
          ne != null && b.push(sh(T, ne, A));
        }
        if (s)
          break;
        T = T.return;
      }
      return b;
    }
    function Vm(e, t) {
      for (var a = t + "Capture", i = [], s = e; s !== null; ) {
        var p = s, v = p.stateNode, w = p.tag;
        if (w === U && v !== null) {
          var b = v, T = Hl(s, a);
          T != null && i.unshift(sh(s, T, b));
          var A = Hl(s, t);
          A != null && i.push(sh(s, A, b));
        }
        s = s.return;
      }
      return i;
    }
    function Sd(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== U);
      return e || null;
    }
    function ak(e, t) {
      for (var a = e, i = t, s = 0, p = a; p; p = Sd(p))
        s++;
      for (var v = 0, w = i; w; w = Sd(w))
        v++;
      for (; s - v > 0; )
        a = Sd(a), s--;
      for (; v - s > 0; )
        i = Sd(i), v--;
      for (var b = s; b--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Sd(a), i = Sd(i);
      }
      return null;
    }
    function Gb(e, t, a, i, s) {
      for (var p = t._reactName, v = [], w = a; w !== null && w !== i; ) {
        var b = w, T = b.alternate, A = b.stateNode, W = b.tag;
        if (T !== null && T === i)
          break;
        if (W === U && A !== null) {
          var V = A;
          if (s) {
            var te = Hl(w, p);
            te != null && v.unshift(sh(w, te, V));
          } else if (!s) {
            var ne = Hl(w, p);
            ne != null && v.push(sh(w, ne, V));
          }
        }
        w = w.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function ik(e, t, a, i, s) {
      var p = i && s ? ak(i, s) : null;
      i !== null && Gb(e, t, i, p, !1), s !== null && a !== null && Gb(e, a, s, p, !0);
    }
    function ok(e, t) {
      return e + "__bubble";
    }
    var fi = !1, ch = "dangerouslySetInnerHTML", Im = "suppressContentEditableWarning", ss = "suppressHydrationWarning", Kb = "autoFocus", Lc = "children", Mc = "style", Wm = "__html", H0, Ym, fh, Xb, qm, Jb, Zb;
    H0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ym = function(e, t) {
      Nu(e, t), Yv(e, t), Ko(e, t, {
        registrationNameDependencies: ht,
        possibleRegistrationNames: vt
      });
    }, Jb = _t && !document.documentMode, fh = function(e, t, a) {
      if (!fi) {
        var i = Qm(a), s = Qm(t);
        s !== i && (fi = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(s), JSON.stringify(i)));
      }
    }, Xb = function(e) {
      if (!fi) {
        fi = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, qm = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Zb = function(e, t) {
      var a = e.namespaceURI === co ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var lk = /\r\n?/g, uk = /\u0000|\uFFFD/g;
    function Qm(e) {
      Lr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(lk, `
`).replace(uk, "");
    }
    function Gm(e, t, a, i) {
      var s = Qm(t), p = Qm(e);
      if (p !== s && (i && (fi || (fi = !0, y('Text content did not match. Server: "%s" Client: "%s"', p, s))), a && N))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function eC(e) {
      return e.nodeType === Pa ? e : e.ownerDocument;
    }
    function sk() {
    }
    function Km(e) {
      e.onclick = sk;
    }
    function ck(e, t, a, i, s) {
      for (var p in i)
        if (i.hasOwnProperty(p)) {
          var v = i[p];
          if (p === Mc)
            v && Object.freeze(v), Hv(t, v);
          else if (p === ch) {
            var w = v ? v[Wm] : void 0;
            w != null && Av(t, w);
          } else if (p === Lc)
            if (typeof v == "string") {
              var b = e !== "textarea" || v !== "";
              b && qs(t, v);
            } else typeof v == "number" && qs(t, "" + v);
          else p === Im || p === ss || p === Kb || (ht.hasOwnProperty(p) ? v != null && (typeof v != "function" && qm(p, v), p === "onScroll" && er("scroll", t)) : v != null && Dn(t, p, v, s));
        }
    }
    function fk(e, t, a, i) {
      for (var s = 0; s < t.length; s += 2) {
        var p = t[s], v = t[s + 1];
        p === Mc ? Hv(e, v) : p === ch ? Av(e, v) : p === Lc ? qs(e, v) : Dn(e, p, v, i);
      }
    }
    function dk(e, t, a, i) {
      var s, p = eC(a), v, w = i;
      if (w === co && (w = up(e)), w === co) {
        if (s = Ul(e, t), !s && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var b = p.createElement("div");
          b.innerHTML = "<script><\/script>";
          var T = b.firstChild;
          v = b.removeChild(T);
        } else if (typeof t.is == "string")
          v = p.createElement(e, {
            is: t.is
          });
        else if (v = p.createElement(e), e === "select") {
          var A = v;
          t.multiple ? A.multiple = !0 : t.size && (A.size = t.size);
        }
      } else
        v = p.createElementNS(w, e);
      return w === co && !s && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !_n.call(H0, e) && (H0[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function pk(e, t) {
      return eC(t).createTextNode(e);
    }
    function hk(e, t, a, i) {
      var s = Ul(t, a);
      Ym(t, a);
      var p;
      switch (t) {
        case "dialog":
          er("cancel", e), er("close", e), p = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          er("load", e), p = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < lh.length; v++)
            er(lh[v], e);
          p = a;
          break;
        case "source":
          er("error", e), p = a;
          break;
        case "img":
        case "image":
        case "link":
          er("error", e), er("load", e), p = a;
          break;
        case "details":
          er("toggle", e), p = a;
          break;
        case "input":
          P(e, a), p = C(e, a), er("invalid", e);
          break;
        case "option":
          gn(e, a), p = a;
          break;
        case "select":
          Ys(e, a), p = Ws(e, a), er("invalid", e);
          break;
        case "textarea":
          Ov(e, a), p = lp(e, a), er("invalid", e);
          break;
        default:
          p = a;
      }
      switch (Ks(t, p), ck(t, e, i, p, s), t) {
        case "input":
          lo(e), ze(e, a, !1);
          break;
        case "textarea":
          lo(e), pf(e);
          break;
        case "option":
          Sn(e, a);
          break;
        case "select":
          op(e, a);
          break;
        default:
          typeof p.onClick == "function" && Km(e);
          break;
      }
    }
    function vk(e, t, a, i, s) {
      Ym(t, i);
      var p = null, v, w;
      switch (t) {
        case "input":
          v = C(e, a), w = C(e, i), p = [];
          break;
        case "select":
          v = Ws(e, a), w = Ws(e, i), p = [];
          break;
        case "textarea":
          v = lp(e, a), w = lp(e, i), p = [];
          break;
        default:
          v = a, w = i, typeof v.onClick != "function" && typeof w.onClick == "function" && Km(e);
          break;
      }
      Ks(t, w);
      var b, T, A = null;
      for (b in v)
        if (!(w.hasOwnProperty(b) || !v.hasOwnProperty(b) || v[b] == null))
          if (b === Mc) {
            var W = v[b];
            for (T in W)
              W.hasOwnProperty(T) && (A || (A = {}), A[T] = "");
          } else b === ch || b === Lc || b === Im || b === ss || b === Kb || (ht.hasOwnProperty(b) ? p || (p = []) : (p = p || []).push(b, null));
      for (b in w) {
        var V = w[b], te = v != null ? v[b] : void 0;
        if (!(!w.hasOwnProperty(b) || V === te || V == null && te == null))
          if (b === Mc)
            if (V && Object.freeze(V), te) {
              for (T in te)
                te.hasOwnProperty(T) && (!V || !V.hasOwnProperty(T)) && (A || (A = {}), A[T] = "");
              for (T in V)
                V.hasOwnProperty(T) && te[T] !== V[T] && (A || (A = {}), A[T] = V[T]);
            } else
              A || (p || (p = []), p.push(b, A)), A = V;
          else if (b === ch) {
            var ne = V ? V[Wm] : void 0, se = te ? te[Wm] : void 0;
            ne != null && se !== ne && (p = p || []).push(b, ne);
          } else b === Lc ? (typeof V == "string" || typeof V == "number") && (p = p || []).push(b, "" + V) : b === Im || b === ss || (ht.hasOwnProperty(b) ? (V != null && (typeof V != "function" && qm(b, V), b === "onScroll" && er("scroll", e)), !p && te !== V && (p = [])) : (p = p || []).push(b, V));
      }
      return A && ($v(A, w[Mc]), (p = p || []).push(Mc, A)), p;
    }
    function mk(e, t, a, i, s) {
      a === "input" && s.type === "radio" && s.name != null && ee(e, s);
      var p = Ul(a, i), v = Ul(a, s);
      switch (fk(e, t, p, v), a) {
        case "input":
          le(e, s);
          break;
        case "textarea":
          Dv(e, s);
          break;
        case "select":
          Jg(e, s);
          break;
      }
    }
    function yk(e) {
      {
        var t = e.toLowerCase();
        return yf.hasOwnProperty(t) && yf[t] || null;
      }
    }
    function gk(e, t, a, i, s, p, v) {
      var w, b;
      switch (w = Ul(t, a), Ym(t, a), t) {
        case "dialog":
          er("cancel", e), er("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          er("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < lh.length; T++)
            er(lh[T], e);
          break;
        case "source":
          er("error", e);
          break;
        case "img":
        case "image":
        case "link":
          er("error", e), er("load", e);
          break;
        case "details":
          er("toggle", e);
          break;
        case "input":
          P(e, a), er("invalid", e);
          break;
        case "option":
          gn(e, a);
          break;
        case "select":
          Ys(e, a), er("invalid", e);
          break;
        case "textarea":
          Ov(e, a), er("invalid", e);
          break;
      }
      Ks(t, a);
      {
        b = /* @__PURE__ */ new Set();
        for (var A = e.attributes, W = 0; W < A.length; W++) {
          var V = A[W].name.toLowerCase();
          switch (V) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              b.add(A[W].name);
          }
        }
      }
      var te = null;
      for (var ne in a)
        if (a.hasOwnProperty(ne)) {
          var se = a[ne];
          if (ne === Lc)
            typeof se == "string" ? e.textContent !== se && (a[ss] !== !0 && Gm(e.textContent, se, p, v), te = [Lc, se]) : typeof se == "number" && e.textContent !== "" + se && (a[ss] !== !0 && Gm(e.textContent, se, p, v), te = [Lc, "" + se]);
          else if (ht.hasOwnProperty(ne))
            se != null && (typeof se != "function" && qm(ne, se), ne === "onScroll" && er("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof w == "boolean") {
            var Ze = void 0, St = w && be ? null : Vn(ne);
            if (a[ss] !== !0) {
              if (!(ne === Im || ne === ss || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              ne === "value" || ne === "checked" || ne === "selected")) {
                if (ne === ch) {
                  var pt = e.innerHTML, Kt = se ? se[Wm] : void 0;
                  if (Kt != null) {
                    var It = Zb(e, Kt);
                    It !== pt && fh(ne, pt, It);
                  }
                } else if (ne === Mc) {
                  if (b.delete(ne), Jb) {
                    var Q = u0(se);
                    Ze = e.getAttribute("style"), Q !== Ze && fh(ne, Ze, Q);
                  }
                } else if (w && !be)
                  b.delete(ne.toLowerCase()), Ze = sn(e, ne, se), se !== Ze && fh(ne, Ze, se);
                else if (!fn(ne, St, w) && !Yt(ne, se, St, w)) {
                  var ce = !1;
                  if (St !== null)
                    b.delete(St.attributeName), Ze = mt(e, ne, se, St);
                  else {
                    var G = i;
                    if (G === co && (G = up(t)), G === co)
                      b.delete(ne.toLowerCase());
                    else {
                      var De = yk(ne);
                      De !== null && De !== ne && (ce = !0, b.delete(De)), b.delete(ne);
                    }
                    Ze = sn(e, ne, se);
                  }
                  var et = be;
                  !et && se !== Ze && !ce && fh(ne, Ze, se);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && a[ss] !== !0 && Xb(b), t) {
        case "input":
          lo(e), ze(e, a, !0);
          break;
        case "textarea":
          lo(e), pf(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Km(e);
          break;
      }
      return te;
    }
    function Sk(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function $0(e, t) {
      {
        if (fi)
          return;
        fi = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function B0(e, t) {
      {
        if (fi)
          return;
        fi = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function V0(e, t, a) {
      {
        if (fi)
          return;
        fi = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function I0(e, t) {
      {
        if (t === "" || fi)
          return;
        fi = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Ek(e, t, a) {
      switch (t) {
        case "input":
          ot(e, a);
          return;
        case "textarea":
          Zg(e, a);
          return;
        case "select":
          Tv(e, a);
          return;
      }
    }
    var dh = function() {
    }, ph = function() {
    };
    {
      var wk = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], tC = [
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
      ], bk = tC.concat(["button"]), Ck = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], nC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ph = function(e, t) {
        var a = Pt({}, e || nC), i = {
          tag: t
        };
        return tC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), bk.indexOf(t) !== -1 && (a.pTagInButtonScope = null), wk.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var xk = function(e, t) {
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
            return Ck.indexOf(t) === -1;
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
      }, _k = function(e, t) {
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
      }, rC = {};
      dh = function(e, t, a) {
        a = a || nC;
        var i = a.current, s = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var p = xk(e, s) ? null : i, v = p ? null : _k(e, a), w = p || v;
        if (w) {
          var b = w.tag, T = !!p + "|" + e + "|" + b;
          if (!rC[T]) {
            rC[T] = !0;
            var A = e, W = "";
            if (e === "#text" ? /\S/.test(t) ? A = "Text nodes" : (A = "Whitespace text nodes", W = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : A = "<" + e + ">", p) {
              var V = "";
              b === "table" && e === "tr" && (V += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", A, b, W, V);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", A, b);
          }
        }
      };
    }
    var Xm = "suppressHydrationWarning", Jm = "$", Zm = "/$", hh = "$?", vh = "$!", Rk = "style", W0 = null, Y0 = null;
    function Tk(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Pa:
        case cp: {
          t = i === Pa ? "#document" : "#fragment";
          var s = e.documentElement;
          a = s ? s.namespaceURI : sp(null, "");
          break;
        }
        default: {
          var p = i === or ? e.parentNode : e, v = p.namespaceURI || null;
          t = p.tagName, a = sp(v, t);
          break;
        }
      }
      {
        var w = t.toLowerCase(), b = ph(null, w);
        return {
          namespace: a,
          ancestorInfo: b
        };
      }
    }
    function kk(e, t, a) {
      {
        var i = e, s = sp(i.namespace, t), p = ph(i.ancestorInfo, t);
        return {
          namespace: s,
          ancestorInfo: p
        };
      }
    }
    function dF(e) {
      return e;
    }
    function Ok(e) {
      W0 = ns(), Y0 = VT();
      var t = null;
      return Aa(!1), t;
    }
    function Dk(e) {
      IT(Y0), Aa(W0), W0 = null, Y0 = null;
    }
    function Ak(e, t, a, i, s) {
      var p;
      {
        var v = i;
        if (dh(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var w = "" + t.children, b = ph(v.ancestorInfo, e);
          dh(null, w, b);
        }
        p = v.namespace;
      }
      var T = dk(e, t, a, p);
      return gh(s, T), eS(T, t), T;
    }
    function Nk(e, t) {
      e.appendChild(t);
    }
    function Lk(e, t, a, i, s) {
      switch (hk(e, t, a, i), t) {
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
    function Mk(e, t, a, i, s, p) {
      {
        var v = p;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var w = "" + i.children, b = ph(v.ancestorInfo, t);
          dh(null, w, b);
        }
      }
      return vk(e, t, a, i);
    }
    function q0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function jk(e, t, a, i) {
      {
        var s = a;
        dh(null, e, s.ancestorInfo);
      }
      var p = pk(e, t);
      return gh(i, p), p;
    }
    function zk() {
      var e = window.event;
      return e === void 0 ? Ii : nd(e.type);
    }
    var Q0 = typeof setTimeout == "function" ? setTimeout : void 0, Uk = typeof clearTimeout == "function" ? clearTimeout : void 0, G0 = -1, aC = typeof Promise == "function" ? Promise : void 0, Pk = typeof queueMicrotask == "function" ? queueMicrotask : typeof aC < "u" ? function(e) {
      return aC.resolve(null).then(e).catch(Fk);
    } : Q0;
    function Fk(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Hk(e, t, a, i) {
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
    function $k(e, t, a, i, s, p) {
      mk(e, t, a, i, s), eS(e, s);
    }
    function iC(e) {
      qs(e, "");
    }
    function Bk(e, t, a) {
      e.nodeValue = a;
    }
    function Vk(e, t) {
      e.appendChild(t);
    }
    function Ik(e, t) {
      var a;
      e.nodeType === or ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Km(a);
    }
    function Wk(e, t, a) {
      e.insertBefore(t, a);
    }
    function Yk(e, t, a) {
      e.nodeType === or ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function qk(e, t) {
      e.removeChild(t);
    }
    function Qk(e, t) {
      e.nodeType === or ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function K0(e, t) {
      var a = t, i = 0;
      do {
        var s = a.nextSibling;
        if (e.removeChild(a), s && s.nodeType === or) {
          var p = s.data;
          if (p === Zm)
            if (i === 0) {
              e.removeChild(s), cr(t);
              return;
            } else
              i--;
          else (p === Jm || p === hh || p === vh) && i++;
        }
        a = s;
      } while (a);
      cr(t);
    }
    function Gk(e, t) {
      e.nodeType === or ? K0(e.parentNode, t) : e.nodeType === wa && K0(e, t), cr(e);
    }
    function Kk(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Xk(e) {
      e.nodeValue = "";
    }
    function Jk(e, t) {
      e = e;
      var a = t[Rk], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Qo("display", i);
    }
    function Zk(e, t) {
      e.nodeValue = t;
    }
    function eO(e) {
      e.nodeType === wa ? e.textContent = "" : e.nodeType === Pa && e.documentElement && e.removeChild(e.documentElement);
    }
    function tO(e, t, a) {
      return e.nodeType !== wa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function nO(e, t) {
      return t === "" || e.nodeType !== fo ? null : e;
    }
    function rO(e) {
      return e.nodeType !== or ? null : e;
    }
    function oC(e) {
      return e.data === hh;
    }
    function X0(e) {
      return e.data === vh;
    }
    function aO(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, s;
      return t && (a = t.dgst, i = t.msg, s = t.stck), {
        message: i,
        digest: a,
        stack: s
      };
    }
    function iO(e, t) {
      e._reactRetry = t;
    }
    function ey(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === wa || t === fo)
          break;
        if (t === or) {
          var a = e.data;
          if (a === Jm || a === vh || a === hh)
            break;
          if (a === Zm)
            return null;
        }
      }
      return e;
    }
    function mh(e) {
      return ey(e.nextSibling);
    }
    function oO(e) {
      return ey(e.firstChild);
    }
    function lO(e) {
      return ey(e.firstChild);
    }
    function uO(e) {
      return ey(e.nextSibling);
    }
    function sO(e, t, a, i, s, p, v) {
      gh(p, e), eS(e, a);
      var w;
      {
        var b = s;
        w = b.namespace;
      }
      var T = (p.mode & dt) !== gt;
      return gk(e, t, a, w, i, T, v);
    }
    function cO(e, t, a, i) {
      return gh(a, e), a.mode & dt, Sk(e, t);
    }
    function fO(e, t) {
      gh(t, e);
    }
    function dO(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === or) {
          var i = t.data;
          if (i === Zm) {
            if (a === 0)
              return mh(t);
            a--;
          } else (i === Jm || i === vh || i === hh) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function lC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === or) {
          var i = t.data;
          if (i === Jm || i === vh || i === hh) {
            if (a === 0)
              return t;
            a--;
          } else i === Zm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function pO(e) {
      cr(e);
    }
    function hO(e) {
      cr(e);
    }
    function vO(e) {
      return e !== "head" && e !== "body";
    }
    function mO(e, t, a, i) {
      var s = !0;
      Gm(t.nodeValue, a, i, s);
    }
    function yO(e, t, a, i, s, p) {
      if (t[Xm] !== !0) {
        var v = !0;
        Gm(i.nodeValue, s, p, v);
      }
    }
    function gO(e, t) {
      t.nodeType === wa ? $0(e, t) : t.nodeType === or || B0(e, t);
    }
    function SO(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === wa ? $0(a, t) : t.nodeType === or || B0(a, t));
      }
    }
    function EO(e, t, a, i, s) {
      (s || t[Xm] !== !0) && (i.nodeType === wa ? $0(a, i) : i.nodeType === or || B0(a, i));
    }
    function wO(e, t, a) {
      V0(e, t);
    }
    function bO(e, t) {
      I0(e, t);
    }
    function CO(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && V0(i, t);
      }
    }
    function xO(e, t) {
      {
        var a = e.parentNode;
        a !== null && I0(a, t);
      }
    }
    function _O(e, t, a, i, s, p) {
      (p || t[Xm] !== !0) && V0(a, i);
    }
    function RO(e, t, a, i, s) {
      (s || t[Xm] !== !0) && I0(a, i);
    }
    function TO(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function kO(e) {
      uh(e);
    }
    var Ed = Math.random().toString(36).slice(2), wd = "__reactFiber$" + Ed, J0 = "__reactProps$" + Ed, yh = "__reactContainer$" + Ed, Z0 = "__reactEvents$" + Ed, OO = "__reactListeners$" + Ed, DO = "__reactHandles$" + Ed;
    function AO(e) {
      delete e[wd], delete e[J0], delete e[Z0], delete e[OO], delete e[DO];
    }
    function gh(e, t) {
      t[wd] = e;
    }
    function ty(e, t) {
      t[yh] = e;
    }
    function uC(e) {
      e[yh] = null;
    }
    function Sh(e) {
      return !!e[yh];
    }
    function jc(e) {
      var t = e[wd];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[yh] || a[wd], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var s = lC(e); s !== null; ) {
              var p = s[wd];
              if (p)
                return p;
              s = lC(s);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function cs(e) {
      var t = e[wd] || e[yh];
      return t && (t.tag === U || t.tag === H || t.tag === Ae || t.tag === D) ? t : null;
    }
    function bd(e) {
      if (e.tag === U || e.tag === H)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function ny(e) {
      return e[J0] || null;
    }
    function eS(e, t) {
      e[J0] = t;
    }
    function NO(e) {
      var t = e[Z0];
      return t === void 0 && (t = e[Z0] = /* @__PURE__ */ new Set()), t;
    }
    var sC = {}, cC = d.ReactDebugCurrentFrame;
    function ry(e) {
      if (e) {
        var t = e._owner, a = qt(e.type, e._source, t ? t.type : null);
        cC.setExtraStackFrame(a);
      } else
        cC.setExtraStackFrame(null);
    }
    function _o(e, t, a, i, s) {
      {
        var p = Function.call.bind(_n);
        for (var v in e)
          if (p(e, v)) {
            var w = void 0;
            try {
              if (typeof e[v] != "function") {
                var b = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              w = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              w = T;
            }
            w && !(w instanceof Error) && (ry(s), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof w), ry(null)), w instanceof Error && !(w.message in sC) && (sC[w.message] = !0, ry(s), y("Failed %s type: %s", a, w.message), ry(null));
          }
      }
    }
    var tS = [], ay;
    ay = [];
    var ou = -1;
    function fs(e) {
      return {
        current: e
      };
    }
    function Na(e, t) {
      if (ou < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== ay[ou] && y("Unexpected Fiber popped."), e.current = tS[ou], tS[ou] = null, ay[ou] = null, ou--;
    }
    function La(e, t, a) {
      ou++, tS[ou] = e.current, ay[ou] = a, e.current = t;
    }
    var nS;
    nS = {};
    var Ri = {};
    Object.freeze(Ri);
    var lu = fs(Ri), pl = fs(!1), rS = Ri;
    function Cd(e, t, a) {
      return a && hl(t) ? rS : lu.current;
    }
    function fC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function xd(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ri;
        var s = e.stateNode;
        if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
          return s.__reactInternalMemoizedMaskedChildContext;
        var p = {};
        for (var v in i)
          p[v] = t[v];
        {
          var w = Rt(e) || "Unknown";
          _o(i, p, "context", w);
        }
        return s && fC(e, t, p), p;
      }
    }
    function iy() {
      return pl.current;
    }
    function hl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function oy(e) {
      Na(pl, e), Na(lu, e);
    }
    function aS(e) {
      Na(pl, e), Na(lu, e);
    }
    function dC(e, t, a) {
      {
        if (lu.current !== Ri)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        La(lu, t, e), La(pl, a, e);
      }
    }
    function pC(e, t, a) {
      {
        var i = e.stateNode, s = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var p = Rt(e) || "Unknown";
            nS[p] || (nS[p] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var w in v)
          if (!(w in s))
            throw new Error((Rt(e) || "Unknown") + '.getChildContext(): key "' + w + '" is not defined in childContextTypes.');
        {
          var b = Rt(e) || "Unknown";
          _o(s, v, "child context", b);
        }
        return Pt({}, a, v);
      }
    }
    function ly(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ri;
        return rS = lu.current, La(lu, a, e), La(pl, pl.current, e), !0;
      }
    }
    function hC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var s = pC(e, t, rS);
          i.__reactInternalMemoizedMergedChildContext = s, Na(pl, e), Na(lu, e), La(lu, s, e), La(pl, a, e);
        } else
          Na(pl, e), La(pl, a, e);
      }
    }
    function LO(e) {
      {
        if (!$a(e) || e.tag !== k)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case D:
              return t.stateNode.context;
            case k: {
              var a = t.type;
              if (hl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ds = 0, uy = 1, uu = null, iS = !1, oS = !1;
    function vC(e) {
      uu === null ? uu = [e] : uu.push(e);
    }
    function MO(e) {
      iS = !0, vC(e);
    }
    function mC() {
      iS && ps();
    }
    function ps() {
      if (!oS && uu !== null) {
        oS = !0;
        var e = 0, t = oi();
        try {
          var a = !0, i = uu;
          for (sr(gr); e < i.length; e++) {
            var s = i[e];
            do
              s = s(a);
            while (s !== null);
          }
          uu = null, iS = !1;
        } catch (p) {
          throw uu !== null && (uu = uu.slice(e + 1)), Dp(Ra, ps), p;
        } finally {
          sr(t), oS = !1;
        }
      }
      return null;
    }
    var _d = [], Rd = 0, sy = null, cy = 0, Qi = [], Gi = 0, zc = null, su = 1, cu = "";
    function jO(e) {
      return Pc(), (e.flags & rm) !== yt;
    }
    function zO(e) {
      return Pc(), cy;
    }
    function UO() {
      var e = cu, t = su, a = t & ~PO(t);
      return a.toString(32) + e;
    }
    function Uc(e, t) {
      Pc(), _d[Rd++] = cy, _d[Rd++] = sy, sy = e, cy = t;
    }
    function yC(e, t, a) {
      Pc(), Qi[Gi++] = su, Qi[Gi++] = cu, Qi[Gi++] = zc, zc = e;
      var i = su, s = cu, p = fy(i) - 1, v = i & ~(1 << p), w = a + 1, b = fy(t) + p;
      if (b > 30) {
        var T = p - p % 5, A = (1 << T) - 1, W = (v & A).toString(32), V = v >> T, te = p - T, ne = fy(t) + te, se = w << te, Ze = se | V, St = W + s;
        su = 1 << ne | Ze, cu = St;
      } else {
        var pt = w << p, Kt = pt | v, It = s;
        su = 1 << b | Kt, cu = It;
      }
    }
    function lS(e) {
      Pc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Uc(e, a), yC(e, a, i);
      }
    }
    function fy(e) {
      return 32 - dc(e);
    }
    function PO(e) {
      return 1 << fy(e) - 1;
    }
    function uS(e) {
      for (; e === sy; )
        sy = _d[--Rd], _d[Rd] = null, cy = _d[--Rd], _d[Rd] = null;
      for (; e === zc; )
        zc = Qi[--Gi], Qi[Gi] = null, cu = Qi[--Gi], Qi[Gi] = null, su = Qi[--Gi], Qi[Gi] = null;
    }
    function FO() {
      return Pc(), zc !== null ? {
        id: su,
        overflow: cu
      } : null;
    }
    function HO(e, t) {
      Pc(), Qi[Gi++] = su, Qi[Gi++] = cu, Qi[Gi++] = zc, su = t.id, cu = t.overflow, zc = e;
    }
    function Pc() {
      ua() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var la = null, Ki = null, Ro = !1, Fc = !1, hs = null;
    function $O() {
      Ro && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function gC() {
      Fc = !0;
    }
    function BO() {
      return Fc;
    }
    function VO(e) {
      var t = e.stateNode.containerInfo;
      return Ki = lO(t), la = e, Ro = !0, hs = null, Fc = !1, !0;
    }
    function IO(e, t, a) {
      return Ki = uO(t), la = e, Ro = !0, hs = null, Fc = !1, a !== null && HO(e, a), !0;
    }
    function SC(e, t) {
      switch (e.tag) {
        case D: {
          gO(e.stateNode.containerInfo, t);
          break;
        }
        case U: {
          var a = (e.mode & dt) !== gt;
          EO(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ae: {
          var i = e.memoizedState;
          i.dehydrated !== null && SO(i.dehydrated, t);
          break;
        }
      }
    }
    function EC(e, t) {
      SC(e, t);
      var a = qN();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= nn) : i.push(a);
    }
    function sS(e, t) {
      {
        if (Fc)
          return;
        switch (e.tag) {
          case D: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case U:
                var i = t.type;
                t.pendingProps, wO(a, i);
                break;
              case H:
                var s = t.pendingProps;
                bO(a, s);
                break;
            }
            break;
          }
          case U: {
            var p = e.type, v = e.memoizedProps, w = e.stateNode;
            switch (t.tag) {
              case U: {
                var b = t.type, T = t.pendingProps, A = (e.mode & dt) !== gt;
                _O(
                  p,
                  v,
                  w,
                  b,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  A
                );
                break;
              }
              case H: {
                var W = t.pendingProps, V = (e.mode & dt) !== gt;
                RO(
                  p,
                  v,
                  w,
                  W,
                  // TODO: Delete this argument when we remove the legacy root API.
                  V
                );
                break;
              }
            }
            break;
          }
          case Ae: {
            var te = e.memoizedState, ne = te.dehydrated;
            if (ne !== null) switch (t.tag) {
              case U:
                var se = t.type;
                t.pendingProps, CO(ne, se);
                break;
              case H:
                var Ze = t.pendingProps;
                xO(ne, Ze);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function wC(e, t) {
      t.flags = t.flags & ~Fi | kn, sS(e, t);
    }
    function bC(e, t) {
      switch (e.tag) {
        case U: {
          var a = e.type;
          e.pendingProps;
          var i = tO(t, a);
          return i !== null ? (e.stateNode = i, la = e, Ki = oO(i), !0) : !1;
        }
        case H: {
          var s = e.pendingProps, p = nO(t, s);
          return p !== null ? (e.stateNode = p, la = e, Ki = null, !0) : !1;
        }
        case Ae: {
          var v = rO(t);
          if (v !== null) {
            var w = {
              dehydrated: v,
              treeContext: FO(),
              retryLane: Ia
            };
            e.memoizedState = w;
            var b = QN(v);
            return b.return = e, e.child = b, la = e, Ki = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function cS(e) {
      return (e.mode & dt) !== gt && (e.flags & kt) === yt;
    }
    function fS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function dS(e) {
      if (Ro) {
        var t = Ki;
        if (!t) {
          cS(e) && (sS(la, e), fS()), wC(la, e), Ro = !1, la = e;
          return;
        }
        var a = t;
        if (!bC(e, t)) {
          cS(e) && (sS(la, e), fS()), t = mh(a);
          var i = la;
          if (!t || !bC(e, t)) {
            wC(la, e), Ro = !1, la = e;
            return;
          }
          EC(i, a);
        }
      }
    }
    function WO(e, t, a) {
      var i = e.stateNode, s = !Fc, p = sO(i, e.type, e.memoizedProps, t, a, e, s);
      return e.updateQueue = p, p !== null;
    }
    function YO(e) {
      var t = e.stateNode, a = e.memoizedProps, i = cO(t, a, e);
      if (i) {
        var s = la;
        if (s !== null)
          switch (s.tag) {
            case D: {
              var p = s.stateNode.containerInfo, v = (s.mode & dt) !== gt;
              mO(
                p,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case U: {
              var w = s.type, b = s.memoizedProps, T = s.stateNode, A = (s.mode & dt) !== gt;
              yO(
                w,
                b,
                T,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                A
              );
              break;
            }
          }
      }
      return i;
    }
    function qO(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      fO(a, e);
    }
    function QO(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return dO(a);
    }
    function CC(e) {
      for (var t = e.return; t !== null && t.tag !== U && t.tag !== D && t.tag !== Ae; )
        t = t.return;
      la = t;
    }
    function dy(e) {
      if (e !== la)
        return !1;
      if (!Ro)
        return CC(e), Ro = !0, !1;
      if (e.tag !== D && (e.tag !== U || vO(e.type) && !q0(e.type, e.memoizedProps))) {
        var t = Ki;
        if (t)
          if (cS(e))
            xC(e), fS();
          else
            for (; t; )
              EC(e, t), t = mh(t);
      }
      return CC(e), e.tag === Ae ? Ki = QO(e) : Ki = la ? mh(e.stateNode) : null, !0;
    }
    function GO() {
      return Ro && Ki !== null;
    }
    function xC(e) {
      for (var t = Ki; t; )
        SC(e, t), t = mh(t);
    }
    function Td() {
      la = null, Ki = null, Ro = !1, Fc = !1;
    }
    function _C() {
      hs !== null && (S_(hs), hs = null);
    }
    function ua() {
      return Ro;
    }
    function pS(e) {
      hs === null ? hs = [e] : hs.push(e);
    }
    var KO = d.ReactCurrentBatchConfig, XO = null;
    function JO() {
      return KO.transition;
    }
    var To = {
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
      var ZO = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & lr && (t = a), a = a.return;
        return t;
      }, Hc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Eh = [], wh = [], bh = [], Ch = [], xh = [], _h = [], $c = /* @__PURE__ */ new Set();
      To.recordUnsafeLifecycleWarnings = function(e, t) {
        $c.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Eh.push(e), e.mode & lr && typeof t.UNSAFE_componentWillMount == "function" && wh.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && bh.push(e), e.mode & lr && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ch.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && xh.push(e), e.mode & lr && typeof t.UNSAFE_componentWillUpdate == "function" && _h.push(e));
      }, To.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Eh.length > 0 && (Eh.forEach(function(V) {
          e.add(Rt(V) || "Component"), $c.add(V.type);
        }), Eh = []);
        var t = /* @__PURE__ */ new Set();
        wh.length > 0 && (wh.forEach(function(V) {
          t.add(Rt(V) || "Component"), $c.add(V.type);
        }), wh = []);
        var a = /* @__PURE__ */ new Set();
        bh.length > 0 && (bh.forEach(function(V) {
          a.add(Rt(V) || "Component"), $c.add(V.type);
        }), bh = []);
        var i = /* @__PURE__ */ new Set();
        Ch.length > 0 && (Ch.forEach(function(V) {
          i.add(Rt(V) || "Component"), $c.add(V.type);
        }), Ch = []);
        var s = /* @__PURE__ */ new Set();
        xh.length > 0 && (xh.forEach(function(V) {
          s.add(Rt(V) || "Component"), $c.add(V.type);
        }), xh = []);
        var p = /* @__PURE__ */ new Set();
        if (_h.length > 0 && (_h.forEach(function(V) {
          p.add(Rt(V) || "Component"), $c.add(V.type);
        }), _h = []), t.size > 0) {
          var v = Hc(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var w = Hc(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, w);
        }
        if (p.size > 0) {
          var b = Hc(p);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var T = Hc(e);
          S(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var A = Hc(a);
          S(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
        if (s.size > 0) {
          var W = Hc(s);
          S(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, W);
        }
      };
      var py = /* @__PURE__ */ new Map(), RC = /* @__PURE__ */ new Set();
      To.recordLegacyContextWarning = function(e, t) {
        var a = ZO(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!RC.has(e.type)) {
          var i = py.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], py.set(a, i)), i.push(e));
        }
      }, To.flushLegacyContextWarning = function() {
        py.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(p) {
              i.add(Rt(p) || "Component"), RC.add(p.type);
            });
            var s = Hc(i);
            try {
              Xn(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s);
            } finally {
              Pn();
            }
          }
        });
      }, To.discardPendingWarnings = function() {
        Eh = [], wh = [], bh = [], Ch = [], xh = [], _h = [], py = /* @__PURE__ */ new Map();
      };
    }
    function ko(e, t) {
      if (e && e.defaultProps) {
        var a = Pt({}, t), i = e.defaultProps;
        for (var s in i)
          a[s] === void 0 && (a[s] = i[s]);
        return a;
      }
      return t;
    }
    var hS = fs(null), vS;
    vS = {};
    var hy = null, kd = null, mS = null, vy = !1;
    function my() {
      hy = null, kd = null, mS = null, vy = !1;
    }
    function TC() {
      vy = !0;
    }
    function kC() {
      vy = !1;
    }
    function OC(e, t, a) {
      La(hS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== vS && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = vS;
    }
    function yS(e, t) {
      var a = hS.current;
      Na(hS, t), e._currentValue = a;
    }
    function gS(e, t, a) {
      for (var i = e; i !== null; ) {
        var s = i.alternate;
        if (Jl(i.childLanes, t) ? s !== null && !Jl(s.childLanes, t) && (s.childLanes = Mt(s.childLanes, t)) : (i.childLanes = Mt(i.childLanes, t), s !== null && (s.childLanes = Mt(s.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function eD(e, t, a) {
      tD(e, t, a);
    }
    function tD(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var s = void 0, p = i.dependencies;
        if (p !== null) {
          s = i.child;
          for (var v = p.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === k) {
                var w = Yu(a), b = fu(Ln, w);
                b.tag = gy;
                var T = i.updateQueue;
                if (T !== null) {
                  var A = T.shared, W = A.pending;
                  W === null ? b.next = b : (b.next = W.next, W.next = b), A.pending = b;
                }
              }
              i.lanes = Mt(i.lanes, a);
              var V = i.alternate;
              V !== null && (V.lanes = Mt(V.lanes, a)), gS(i.return, a, e), p.lanes = Mt(p.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === fe)
          s = i.type === e.type ? null : i.child;
        else if (i.tag === Oe) {
          var te = i.return;
          if (te === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          te.lanes = Mt(te.lanes, a);
          var ne = te.alternate;
          ne !== null && (ne.lanes = Mt(ne.lanes, a)), gS(te, a, e), s = i.sibling;
        } else
          s = i.child;
        if (s !== null)
          s.return = i;
        else
          for (s = i; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            var se = s.sibling;
            if (se !== null) {
              se.return = s.return, s = se;
              break;
            }
            s = s.return;
          }
        i = s;
      }
    }
    function Od(e, t) {
      hy = e, kd = null, mS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Da(a.lanes, t) && Fh(), a.firstContext = null);
      }
    }
    function Fr(e) {
      vy && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (mS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kd === null) {
          if (hy === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kd = a, hy.dependencies = {
            lanes: pe,
            firstContext: a
          };
        } else
          kd = kd.next = a;
      }
      return t;
    }
    var Bc = null;
    function SS(e) {
      Bc === null ? Bc = [e] : Bc.push(e);
    }
    function nD() {
      if (Bc !== null) {
        for (var e = 0; e < Bc.length; e++) {
          var t = Bc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, s = t.pending;
            if (s !== null) {
              var p = s.next;
              s.next = i, a.next = p;
            }
            t.pending = a;
          }
        }
        Bc = null;
      }
    }
    function DC(e, t, a, i) {
      var s = t.interleaved;
      return s === null ? (a.next = a, SS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, yy(e, i);
    }
    function rD(e, t, a, i) {
      var s = t.interleaved;
      s === null ? (a.next = a, SS(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
    }
    function aD(e, t, a, i) {
      var s = t.interleaved;
      return s === null ? (a.next = a, SS(t)) : (a.next = s.next, s.next = a), t.interleaved = a, yy(e, i);
    }
    function di(e, t) {
      return yy(e, t);
    }
    var iD = yy;
    function yy(e, t) {
      e.lanes = Mt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Mt(a.lanes, t)), a === null && (e.flags & (kn | Fi)) !== yt && A_(e);
      for (var i = e, s = e.return; s !== null; )
        s.childLanes = Mt(s.childLanes, t), a = s.alternate, a !== null ? a.childLanes = Mt(a.childLanes, t) : (s.flags & (kn | Fi)) !== yt && A_(e), i = s, s = s.return;
      if (i.tag === D) {
        var p = i.stateNode;
        return p;
      } else
        return null;
    }
    var AC = 0, NC = 1, gy = 2, ES = 3, Sy = !1, wS, Ey;
    wS = !1, Ey = null;
    function bS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: pe
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function LC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var s = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = s;
      }
    }
    function fu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: AC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function vs(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var s = i.shared;
      if (Ey === s && !wS && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), wS = !0), iN()) {
        var p = s.pending;
        return p === null ? t.next = t : (t.next = p.next, p.next = t), s.pending = t, iD(e, a);
      } else
        return aD(e, s, t, a);
    }
    function wy(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var s = i.shared;
        if ($p(a)) {
          var p = s.lanes;
          p = qf(p, e.pendingLanes);
          var v = Mt(p, a);
          s.lanes = v, Bp(e, v);
        }
      }
    }
    function CS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var s = i.updateQueue;
        if (a === s) {
          var p = null, v = null, w = a.firstBaseUpdate;
          if (w !== null) {
            var b = w;
            do {
              var T = {
                eventTime: b.eventTime,
                lane: b.lane,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null
              };
              v === null ? p = v = T : (v.next = T, v = T), b = b.next;
            } while (b !== null);
            v === null ? p = v = t : (v.next = t, v = t);
          } else
            p = v = t;
          a = {
            baseState: s.baseState,
            firstBaseUpdate: p,
            lastBaseUpdate: v,
            shared: s.shared,
            effects: s.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var A = a.lastBaseUpdate;
      A === null ? a.firstBaseUpdate = t : A.next = t, a.lastBaseUpdate = t;
    }
    function oD(e, t, a, i, s, p) {
      switch (a.tag) {
        case NC: {
          var v = a.payload;
          if (typeof v == "function") {
            TC();
            var w = v.call(p, i, s);
            {
              if (e.mode & lr) {
                Nn(!0);
                try {
                  v.call(p, i, s);
                } finally {
                  Nn(!1);
                }
              }
              kC();
            }
            return w;
          }
          return v;
        }
        case ES:
          e.flags = e.flags & ~$r | kt;
        case AC: {
          var b = a.payload, T;
          if (typeof b == "function") {
            TC(), T = b.call(p, i, s);
            {
              if (e.mode & lr) {
                Nn(!0);
                try {
                  b.call(p, i, s);
                } finally {
                  Nn(!1);
                }
              }
              kC();
            }
          } else
            T = b;
          return T == null ? i : Pt({}, i, T);
        }
        case gy:
          return Sy = !0, i;
      }
      return i;
    }
    function by(e, t, a, i) {
      var s = e.updateQueue;
      Sy = !1, Ey = s.shared;
      var p = s.firstBaseUpdate, v = s.lastBaseUpdate, w = s.shared.pending;
      if (w !== null) {
        s.shared.pending = null;
        var b = w, T = b.next;
        b.next = null, v === null ? p = T : v.next = T, v = b;
        var A = e.alternate;
        if (A !== null) {
          var W = A.updateQueue, V = W.lastBaseUpdate;
          V !== v && (V === null ? W.firstBaseUpdate = T : V.next = T, W.lastBaseUpdate = b);
        }
      }
      if (p !== null) {
        var te = s.baseState, ne = pe, se = null, Ze = null, St = null, pt = p;
        do {
          var Kt = pt.lane, It = pt.eventTime;
          if (Jl(i, Kt)) {
            if (St !== null) {
              var ce = {
                eventTime: It,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mr,
                tag: pt.tag,
                payload: pt.payload,
                callback: pt.callback,
                next: null
              };
              St = St.next = ce;
            }
            te = oD(e, s, pt, te, t, a);
            var G = pt.callback;
            if (G !== null && // If the update was already committed, we should not queue its
            // callback again.
            pt.lane !== mr) {
              e.flags |= jr;
              var De = s.effects;
              De === null ? s.effects = [pt] : De.push(pt);
            }
          } else {
            var Q = {
              eventTime: It,
              lane: Kt,
              tag: pt.tag,
              payload: pt.payload,
              callback: pt.callback,
              next: null
            };
            St === null ? (Ze = St = Q, se = te) : St = St.next = Q, ne = Mt(ne, Kt);
          }
          if (pt = pt.next, pt === null) {
            if (w = s.shared.pending, w === null)
              break;
            var et = w, Qe = et.next;
            et.next = null, pt = Qe, s.lastBaseUpdate = et, s.shared.pending = null;
          }
        } while (!0);
        St === null && (se = te), s.baseState = se, s.firstBaseUpdate = Ze, s.lastBaseUpdate = St;
        var xt = s.shared.interleaved;
        if (xt !== null) {
          var Nt = xt;
          do
            ne = Mt(ne, Nt.lane), Nt = Nt.next;
          while (Nt !== xt);
        } else p === null && (s.shared.lanes = pe);
        Xh(ne), e.lanes = ne, e.memoizedState = te;
      }
      Ey = null;
    }
    function lD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function MC() {
      Sy = !1;
    }
    function Cy() {
      return Sy;
    }
    function jC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var s = 0; s < i.length; s++) {
          var p = i[s], v = p.callback;
          v !== null && (p.callback = null, lD(v, a));
        }
    }
    var xS = {}, zC = new l.Component().refs, _S, RS, TS, kS, OS, UC, xy, DS, AS, NS;
    {
      _S = /* @__PURE__ */ new Set(), RS = /* @__PURE__ */ new Set(), TS = /* @__PURE__ */ new Set(), kS = /* @__PURE__ */ new Set(), DS = /* @__PURE__ */ new Set(), OS = /* @__PURE__ */ new Set(), AS = /* @__PURE__ */ new Set(), NS = /* @__PURE__ */ new Set();
      var PC = /* @__PURE__ */ new Set();
      xy = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          PC.has(a) || (PC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, UC = function(e, t) {
        if (t === void 0) {
          var a = Jt(e) || "Component";
          OS.has(a) || (OS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(xS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(xS);
    }
    function LS(e, t, a, i) {
      var s = e.memoizedState, p = a(i, s);
      {
        if (e.mode & lr) {
          Nn(!0);
          try {
            p = a(i, s);
          } finally {
            Nn(!1);
          }
        }
        UC(t, p);
      }
      var v = p == null ? s : Pt({}, s, p);
      if (e.memoizedState = v, e.lanes === pe) {
        var w = e.updateQueue;
        w.baseState = v;
      }
    }
    var MS = {
      isMounted: Ba,
      enqueueSetState: function(e, t, a) {
        var i = Pi(e), s = qa(), p = Cs(i), v = fu(s, p);
        v.payload = t, a != null && (xy(a, "setState"), v.callback = a);
        var w = vs(i, v, p);
        w !== null && (Xr(w, i, p, s), wy(w, i, p)), Af(i, p);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Pi(e), s = qa(), p = Cs(i), v = fu(s, p);
        v.tag = NC, v.payload = t, a != null && (xy(a, "replaceState"), v.callback = a);
        var w = vs(i, v, p);
        w !== null && (Xr(w, i, p, s), wy(w, i, p)), Af(i, p);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Pi(e), i = qa(), s = Cs(a), p = fu(i, s);
        p.tag = gy, t != null && (xy(t, "forceUpdate"), p.callback = t);
        var v = vs(a, p, s);
        v !== null && (Xr(v, a, s, i), wy(v, a, s)), Bu(a, s);
      }
    };
    function FC(e, t, a, i, s, p, v) {
      var w = e.stateNode;
      if (typeof w.shouldComponentUpdate == "function") {
        var b = w.shouldComponentUpdate(i, p, v);
        {
          if (e.mode & lr) {
            Nn(!0);
            try {
              b = w.shouldComponentUpdate(i, p, v);
            } finally {
              Nn(!1);
            }
          }
          b === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Jt(t) || "Component");
        }
        return b;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !bt(a, i) || !bt(s, p) : !0;
    }
    function uD(e, t, a) {
      var i = e.stateNode;
      {
        var s = Jt(t) || "Component", p = i.render;
        p || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), t.contextType && t.contextTypes && !AS.has(t) && (AS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Jt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var v = i.props !== a;
        i.props !== void 0 && v && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !TS.has(t) && (TS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Jt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var w = i.state;
        w && (typeof w != "object" || Zt(w)) && y("%s.state: must be set to an object or null", s), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function HC(e, t) {
      t.updater = MS, e.stateNode = t, Cf(t, e), t._reactInternalInstance = xS;
    }
    function $C(e, t, a) {
      var i = !1, s = Ri, p = Ri, v = t.contextType;
      if ("contextType" in t) {
        var w = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === We && v._context === void 0
        );
        if (!w && !NS.has(t)) {
          NS.add(t);
          var b = "";
          v === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? b = " However, it is set to a " + typeof v + "." : v.$$typeof === Se ? b = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Jt(t) || "Component", b);
        }
      }
      if (typeof v == "object" && v !== null)
        p = Fr(v);
      else {
        s = Cd(e, t, !0);
        var T = t.contextTypes;
        i = T != null, p = i ? xd(e, s) : Ri;
      }
      var A = new t(a, p);
      if (e.mode & lr) {
        Nn(!0);
        try {
          A = new t(a, p);
        } finally {
          Nn(!1);
        }
      }
      var W = e.memoizedState = A.state !== null && A.state !== void 0 ? A.state : null;
      HC(e, A);
      {
        if (typeof t.getDerivedStateFromProps == "function" && W === null) {
          var V = Jt(t) || "Component";
          RS.has(V) || (RS.add(V), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", V, A.state === null ? "null" : "undefined", V));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof A.getSnapshotBeforeUpdate == "function") {
          var te = null, ne = null, se = null;
          if (typeof A.componentWillMount == "function" && A.componentWillMount.__suppressDeprecationWarning !== !0 ? te = "componentWillMount" : typeof A.UNSAFE_componentWillMount == "function" && (te = "UNSAFE_componentWillMount"), typeof A.componentWillReceiveProps == "function" && A.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ne = "componentWillReceiveProps" : typeof A.UNSAFE_componentWillReceiveProps == "function" && (ne = "UNSAFE_componentWillReceiveProps"), typeof A.componentWillUpdate == "function" && A.componentWillUpdate.__suppressDeprecationWarning !== !0 ? se = "componentWillUpdate" : typeof A.UNSAFE_componentWillUpdate == "function" && (se = "UNSAFE_componentWillUpdate"), te !== null || ne !== null || se !== null) {
            var Ze = Jt(t) || "Component", St = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            kS.has(Ze) || (kS.add(Ze), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ze, St, te !== null ? `
  ` + te : "", ne !== null ? `
  ` + ne : "", se !== null ? `
  ` + se : ""));
          }
        }
      }
      return i && fC(e, s, p), A;
    }
    function sD(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Rt(e) || "Component"), MS.enqueueReplaceState(t, t.state, null));
    }
    function BC(e, t, a, i) {
      var s = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== s) {
        {
          var p = Rt(e) || "Component";
          _S.has(p) || (_S.add(p), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", p));
        }
        MS.enqueueReplaceState(t, t.state, null);
      }
    }
    function jS(e, t, a, i) {
      uD(e, t, a);
      var s = e.stateNode;
      s.props = a, s.state = e.memoizedState, s.refs = zC, bS(e);
      var p = t.contextType;
      if (typeof p == "object" && p !== null)
        s.context = Fr(p);
      else {
        var v = Cd(e, t, !0);
        s.context = xd(e, v);
      }
      {
        if (s.state === a) {
          var w = Jt(t) || "Component";
          DS.has(w) || (DS.add(w), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", w));
        }
        e.mode & lr && To.recordLegacyContextWarning(e, s), To.recordUnsafeLifecycleWarnings(e, s);
      }
      s.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (LS(e, t, b, a), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (sD(e, s), by(e, a, s, i), s.state = e.memoizedState), typeof s.componentDidMount == "function") {
        var T = st;
        T |= ti, (e.mode & ai) !== gt && (T |= ni), e.flags |= T;
      }
    }
    function cD(e, t, a, i) {
      var s = e.stateNode, p = e.memoizedProps;
      s.props = p;
      var v = s.context, w = t.contextType, b = Ri;
      if (typeof w == "object" && w !== null)
        b = Fr(w);
      else {
        var T = Cd(e, t, !0);
        b = xd(e, T);
      }
      var A = t.getDerivedStateFromProps, W = typeof A == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !W && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (p !== a || v !== b) && BC(e, s, a, b), MC();
      var V = e.memoizedState, te = s.state = V;
      if (by(e, a, s, i), te = e.memoizedState, p === a && V === te && !iy() && !Cy()) {
        if (typeof s.componentDidMount == "function") {
          var ne = st;
          ne |= ti, (e.mode & ai) !== gt && (ne |= ni), e.flags |= ne;
        }
        return !1;
      }
      typeof A == "function" && (LS(e, t, A, a), te = e.memoizedState);
      var se = Cy() || FC(e, t, p, a, V, te, b);
      if (se) {
        if (!W && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function") {
          var Ze = st;
          Ze |= ti, (e.mode & ai) !== gt && (Ze |= ni), e.flags |= Ze;
        }
      } else {
        if (typeof s.componentDidMount == "function") {
          var St = st;
          St |= ti, (e.mode & ai) !== gt && (St |= ni), e.flags |= St;
        }
        e.memoizedProps = a, e.memoizedState = te;
      }
      return s.props = a, s.state = te, s.context = b, se;
    }
    function fD(e, t, a, i, s) {
      var p = t.stateNode;
      LC(e, t);
      var v = t.memoizedProps, w = t.type === t.elementType ? v : ko(t.type, v);
      p.props = w;
      var b = t.pendingProps, T = p.context, A = a.contextType, W = Ri;
      if (typeof A == "object" && A !== null)
        W = Fr(A);
      else {
        var V = Cd(t, a, !0);
        W = xd(t, V);
      }
      var te = a.getDerivedStateFromProps, ne = typeof te == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      !ne && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function") && (v !== b || T !== W) && BC(t, p, i, W), MC();
      var se = t.memoizedState, Ze = p.state = se;
      if (by(t, i, p, s), Ze = t.memoizedState, v === b && se === Ze && !iy() && !Cy() && !L)
        return typeof p.componentDidUpdate == "function" && (v !== e.memoizedProps || se !== e.memoizedState) && (t.flags |= st), typeof p.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || se !== e.memoizedState) && (t.flags |= br), !1;
      typeof te == "function" && (LS(t, a, te, i), Ze = t.memoizedState);
      var St = Cy() || FC(t, a, w, i, se, Ze, W) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      L;
      return St ? (!ne && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function") && (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(i, Ze, W), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(i, Ze, W)), typeof p.componentDidUpdate == "function" && (t.flags |= st), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= br)) : (typeof p.componentDidUpdate == "function" && (v !== e.memoizedProps || se !== e.memoizedState) && (t.flags |= st), typeof p.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || se !== e.memoizedState) && (t.flags |= br), t.memoizedProps = i, t.memoizedState = Ze), p.props = i, p.state = Ze, p.context = W, St;
    }
    var zS, US, PS, FS, HS, VC = function(e, t) {
    };
    zS = !1, US = !1, PS = {}, FS = {}, HS = {}, VC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Rt(t) || "Component";
        FS[a] || (FS[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Rh(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & lr || Pe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var s = Rt(e) || "Component";
          PS[s] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), PS[s] = !0);
        }
        if (a._owner) {
          var p = a._owner, v;
          if (p) {
            var w = p;
            if (w.tag !== k)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = w.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var b = v;
          jn(i, "ref");
          var T = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var A = function(W) {
            var V = b.refs;
            V === zC && (V = b.refs = {}), W === null ? delete V[T] : V[T] = W;
          };
          return A._stringRef = T, A;
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
    function _y(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ry(e) {
      {
        var t = Rt(e) || "Component";
        if (HS[t])
          return;
        HS[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function IC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function WC(e) {
      function t(Q, ce) {
        if (e) {
          var G = Q.deletions;
          G === null ? (Q.deletions = [ce], Q.flags |= nn) : G.push(ce);
        }
      }
      function a(Q, ce) {
        if (!e)
          return null;
        for (var G = ce; G !== null; )
          t(Q, G), G = G.sibling;
        return null;
      }
      function i(Q, ce) {
        for (var G = /* @__PURE__ */ new Map(), De = ce; De !== null; )
          De.key !== null ? G.set(De.key, De) : G.set(De.index, De), De = De.sibling;
        return G;
      }
      function s(Q, ce) {
        var G = Kc(Q, ce);
        return G.index = 0, G.sibling = null, G;
      }
      function p(Q, ce, G) {
        if (Q.index = G, !e)
          return Q.flags |= rm, ce;
        var De = Q.alternate;
        if (De !== null) {
          var et = De.index;
          return et < ce ? (Q.flags |= kn, ce) : et;
        } else
          return Q.flags |= kn, ce;
      }
      function v(Q) {
        return e && Q.alternate === null && (Q.flags |= kn), Q;
      }
      function w(Q, ce, G, De) {
        if (ce === null || ce.tag !== H) {
          var et = pw(G, Q.mode, De);
          return et.return = Q, et;
        } else {
          var Qe = s(ce, G);
          return Qe.return = Q, Qe;
        }
      }
      function b(Q, ce, G, De) {
        var et = G.type;
        if (et === mn)
          return A(Q, ce, G.props.children, De, G.key);
        if (ce !== null && (ce.elementType === et || // Keep this check inline so it only runs on the false path:
        j_(ce, G) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof et == "object" && et !== null && et.$$typeof === $e && IC(et) === ce.type)) {
          var Qe = s(ce, G.props);
          return Qe.ref = Rh(Q, ce, G), Qe.return = Q, Qe._debugSource = G._source, Qe._debugOwner = G._owner, Qe;
        }
        var xt = dw(G, Q.mode, De);
        return xt.ref = Rh(Q, ce, G), xt.return = Q, xt;
      }
      function T(Q, ce, G, De) {
        if (ce === null || ce.tag !== j || ce.stateNode.containerInfo !== G.containerInfo || ce.stateNode.implementation !== G.implementation) {
          var et = hw(G, Q.mode, De);
          return et.return = Q, et;
        } else {
          var Qe = s(ce, G.children || []);
          return Qe.return = Q, Qe;
        }
      }
      function A(Q, ce, G, De, et) {
        if (ce === null || ce.tag !== oe) {
          var Qe = _s(G, Q.mode, De, et);
          return Qe.return = Q, Qe;
        } else {
          var xt = s(ce, G);
          return xt.return = Q, xt;
        }
      }
      function W(Q, ce, G) {
        if (typeof ce == "string" && ce !== "" || typeof ce == "number") {
          var De = pw("" + ce, Q.mode, G);
          return De.return = Q, De;
        }
        if (typeof ce == "object" && ce !== null) {
          switch (ce.$$typeof) {
            case zn: {
              var et = dw(ce, Q.mode, G);
              return et.ref = Rh(Q, null, ce), et.return = Q, et;
            }
            case Un: {
              var Qe = hw(ce, Q.mode, G);
              return Qe.return = Q, Qe;
            }
            case $e: {
              var xt = ce._payload, Nt = ce._init;
              return W(Q, Nt(xt), G);
            }
          }
          if (Zt(ce) || Li(ce)) {
            var bn = _s(ce, Q.mode, G, null);
            return bn.return = Q, bn;
          }
          _y(Q, ce);
        }
        return typeof ce == "function" && Ry(Q), null;
      }
      function V(Q, ce, G, De) {
        var et = ce !== null ? ce.key : null;
        if (typeof G == "string" && G !== "" || typeof G == "number")
          return et !== null ? null : w(Q, ce, "" + G, De);
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case zn:
              return G.key === et ? b(Q, ce, G, De) : null;
            case Un:
              return G.key === et ? T(Q, ce, G, De) : null;
            case $e: {
              var Qe = G._payload, xt = G._init;
              return V(Q, ce, xt(Qe), De);
            }
          }
          if (Zt(G) || Li(G))
            return et !== null ? null : A(Q, ce, G, De, null);
          _y(Q, G);
        }
        return typeof G == "function" && Ry(Q), null;
      }
      function te(Q, ce, G, De, et) {
        if (typeof De == "string" && De !== "" || typeof De == "number") {
          var Qe = Q.get(G) || null;
          return w(ce, Qe, "" + De, et);
        }
        if (typeof De == "object" && De !== null) {
          switch (De.$$typeof) {
            case zn: {
              var xt = Q.get(De.key === null ? G : De.key) || null;
              return b(ce, xt, De, et);
            }
            case Un: {
              var Nt = Q.get(De.key === null ? G : De.key) || null;
              return T(ce, Nt, De, et);
            }
            case $e:
              var bn = De._payload, an = De._init;
              return te(Q, ce, G, an(bn), et);
          }
          if (Zt(De) || Li(De)) {
            var Nr = Q.get(G) || null;
            return A(ce, Nr, De, et, null);
          }
          _y(ce, De);
        }
        return typeof De == "function" && Ry(ce), null;
      }
      function ne(Q, ce, G) {
        {
          if (typeof Q != "object" || Q === null)
            return ce;
          switch (Q.$$typeof) {
            case zn:
            case Un:
              VC(Q, G);
              var De = Q.key;
              if (typeof De != "string")
                break;
              if (ce === null) {
                ce = /* @__PURE__ */ new Set(), ce.add(De);
                break;
              }
              if (!ce.has(De)) {
                ce.add(De);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", De);
              break;
            case $e:
              var et = Q._payload, Qe = Q._init;
              ne(Qe(et), ce, G);
              break;
          }
        }
        return ce;
      }
      function se(Q, ce, G, De) {
        for (var et = null, Qe = 0; Qe < G.length; Qe++) {
          var xt = G[Qe];
          et = ne(xt, et, Q);
        }
        for (var Nt = null, bn = null, an = ce, Nr = 0, on = 0, xr = null; an !== null && on < G.length; on++) {
          an.index > on ? (xr = an, an = null) : xr = an.sibling;
          var ja = V(Q, an, G[on], De);
          if (ja === null) {
            an === null && (an = xr);
            break;
          }
          e && an && ja.alternate === null && t(Q, an), Nr = p(ja, Nr, on), bn === null ? Nt = ja : bn.sibling = ja, bn = ja, an = xr;
        }
        if (on === G.length) {
          if (a(Q, an), ua()) {
            var va = on;
            Uc(Q, va);
          }
          return Nt;
        }
        if (an === null) {
          for (; on < G.length; on++) {
            var ki = W(Q, G[on], De);
            ki !== null && (Nr = p(ki, Nr, on), bn === null ? Nt = ki : bn.sibling = ki, bn = ki);
          }
          if (ua()) {
            var Qa = on;
            Uc(Q, Qa);
          }
          return Nt;
        }
        for (var Ga = i(Q, an); on < G.length; on++) {
          var za = te(Ga, Q, on, G[on], De);
          za !== null && (e && za.alternate !== null && Ga.delete(za.key === null ? on : za.key), Nr = p(za, Nr, on), bn === null ? Nt = za : bn.sibling = za, bn = za);
        }
        if (e && Ga.forEach(function(Yd) {
          return t(Q, Yd);
        }), ua()) {
          var yu = on;
          Uc(Q, yu);
        }
        return Nt;
      }
      function Ze(Q, ce, G, De) {
        var et = Li(G);
        if (typeof et != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          G[Symbol.toStringTag] === "Generator" && (US || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), US = !0), G.entries === et && (zS || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), zS = !0);
          var Qe = et.call(G);
          if (Qe)
            for (var xt = null, Nt = Qe.next(); !Nt.done; Nt = Qe.next()) {
              var bn = Nt.value;
              xt = ne(bn, xt, Q);
            }
        }
        var an = et.call(G);
        if (an == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Nr = null, on = null, xr = ce, ja = 0, va = 0, ki = null, Qa = an.next(); xr !== null && !Qa.done; va++, Qa = an.next()) {
          xr.index > va ? (ki = xr, xr = null) : ki = xr.sibling;
          var Ga = V(Q, xr, Qa.value, De);
          if (Ga === null) {
            xr === null && (xr = ki);
            break;
          }
          e && xr && Ga.alternate === null && t(Q, xr), ja = p(Ga, ja, va), on === null ? Nr = Ga : on.sibling = Ga, on = Ga, xr = ki;
        }
        if (Qa.done) {
          if (a(Q, xr), ua()) {
            var za = va;
            Uc(Q, za);
          }
          return Nr;
        }
        if (xr === null) {
          for (; !Qa.done; va++, Qa = an.next()) {
            var yu = W(Q, Qa.value, De);
            yu !== null && (ja = p(yu, ja, va), on === null ? Nr = yu : on.sibling = yu, on = yu);
          }
          if (ua()) {
            var Yd = va;
            Uc(Q, Yd);
          }
          return Nr;
        }
        for (var nv = i(Q, xr); !Qa.done; va++, Qa = an.next()) {
          var bl = te(nv, Q, va, Qa.value, De);
          bl !== null && (e && bl.alternate !== null && nv.delete(bl.key === null ? va : bl.key), ja = p(bl, ja, va), on === null ? Nr = bl : on.sibling = bl, on = bl);
        }
        if (e && nv.forEach(function(_L) {
          return t(Q, _L);
        }), ua()) {
          var xL = va;
          Uc(Q, xL);
        }
        return Nr;
      }
      function St(Q, ce, G, De) {
        if (ce !== null && ce.tag === H) {
          a(Q, ce.sibling);
          var et = s(ce, G);
          return et.return = Q, et;
        }
        a(Q, ce);
        var Qe = pw(G, Q.mode, De);
        return Qe.return = Q, Qe;
      }
      function pt(Q, ce, G, De) {
        for (var et = G.key, Qe = ce; Qe !== null; ) {
          if (Qe.key === et) {
            var xt = G.type;
            if (xt === mn) {
              if (Qe.tag === oe) {
                a(Q, Qe.sibling);
                var Nt = s(Qe, G.props.children);
                return Nt.return = Q, Nt._debugSource = G._source, Nt._debugOwner = G._owner, Nt;
              }
            } else if (Qe.elementType === xt || // Keep this check inline so it only runs on the false path:
            j_(Qe, G) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof xt == "object" && xt !== null && xt.$$typeof === $e && IC(xt) === Qe.type) {
              a(Q, Qe.sibling);
              var bn = s(Qe, G.props);
              return bn.ref = Rh(Q, Qe, G), bn.return = Q, bn._debugSource = G._source, bn._debugOwner = G._owner, bn;
            }
            a(Q, Qe);
            break;
          } else
            t(Q, Qe);
          Qe = Qe.sibling;
        }
        if (G.type === mn) {
          var an = _s(G.props.children, Q.mode, De, G.key);
          return an.return = Q, an;
        } else {
          var Nr = dw(G, Q.mode, De);
          return Nr.ref = Rh(Q, ce, G), Nr.return = Q, Nr;
        }
      }
      function Kt(Q, ce, G, De) {
        for (var et = G.key, Qe = ce; Qe !== null; ) {
          if (Qe.key === et)
            if (Qe.tag === j && Qe.stateNode.containerInfo === G.containerInfo && Qe.stateNode.implementation === G.implementation) {
              a(Q, Qe.sibling);
              var xt = s(Qe, G.children || []);
              return xt.return = Q, xt;
            } else {
              a(Q, Qe);
              break;
            }
          else
            t(Q, Qe);
          Qe = Qe.sibling;
        }
        var Nt = hw(G, Q.mode, De);
        return Nt.return = Q, Nt;
      }
      function It(Q, ce, G, De) {
        var et = typeof G == "object" && G !== null && G.type === mn && G.key === null;
        if (et && (G = G.props.children), typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case zn:
              return v(pt(Q, ce, G, De));
            case Un:
              return v(Kt(Q, ce, G, De));
            case $e:
              var Qe = G._payload, xt = G._init;
              return It(Q, ce, xt(Qe), De);
          }
          if (Zt(G))
            return se(Q, ce, G, De);
          if (Li(G))
            return Ze(Q, ce, G, De);
          _y(Q, G);
        }
        return typeof G == "string" && G !== "" || typeof G == "number" ? v(St(Q, ce, "" + G, De)) : (typeof G == "function" && Ry(Q), a(Q, ce));
      }
      return It;
    }
    var Dd = WC(!0), YC = WC(!1);
    function dD(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Kc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Kc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function pD(e, t) {
      for (var a = e.child; a !== null; )
        BN(a, t), a = a.sibling;
    }
    var Th = {}, ms = fs(Th), kh = fs(Th), Ty = fs(Th);
    function ky(e) {
      if (e === Th)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function qC() {
      var e = ky(Ty.current);
      return e;
    }
    function $S(e, t) {
      La(Ty, t, e), La(kh, e, e), La(ms, Th, e);
      var a = Tk(t);
      Na(ms, e), La(ms, a, e);
    }
    function Ad(e) {
      Na(ms, e), Na(kh, e), Na(Ty, e);
    }
    function BS() {
      var e = ky(ms.current);
      return e;
    }
    function QC(e) {
      ky(Ty.current);
      var t = ky(ms.current), a = kk(t, e.type);
      t !== a && (La(kh, e, e), La(ms, a, e));
    }
    function VS(e) {
      kh.current === e && (Na(ms, e), Na(kh, e));
    }
    var hD = 0, GC = 1, KC = 1, Oh = 2, Oo = fs(hD);
    function IS(e, t) {
      return (e & t) !== 0;
    }
    function Nd(e) {
      return e & GC;
    }
    function WS(e, t) {
      return e & GC | t;
    }
    function vD(e, t) {
      return e | t;
    }
    function ys(e, t) {
      La(Oo, t, e);
    }
    function Ld(e) {
      Na(Oo, e);
    }
    function mD(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Oy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ae) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || oC(i) || X0(i))
              return t;
          }
        } else if (t.tag === ge && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var s = (t.flags & kt) !== yt;
          if (s)
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
    var pi = (
      /*   */
      0
    ), Ir = (
      /* */
      1
    ), vl = (
      /*  */
      2
    ), Wr = (
      /*    */
      4
    ), sa = (
      /*   */
      8
    ), YS = [];
    function qS() {
      for (var e = 0; e < YS.length; e++) {
        var t = YS[e];
        t._workInProgressVersionPrimary = null;
      }
      YS.length = 0;
    }
    function yD(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Xe = d.ReactCurrentDispatcher, Dh = d.ReactCurrentBatchConfig, QS, Md;
    QS = /* @__PURE__ */ new Set();
    var Vc = pe, wn = null, Yr = null, qr = null, Dy = !1, Ah = !1, Nh = 0, gD = 0, SD = 25, he = null, Xi = null, gs = -1, GS = !1;
    function vn() {
      {
        var e = he;
        Xi === null ? Xi = [e] : Xi.push(e);
      }
    }
    function qe() {
      {
        var e = he;
        Xi !== null && (gs++, Xi[gs] !== e && ED(e));
      }
    }
    function jd(e) {
      e != null && !Zt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", he, typeof e);
    }
    function ED(e) {
      {
        var t = Rt(wn);
        if (!QS.has(t) && (QS.add(t), Xi !== null)) {
          for (var a = "", i = 30, s = 0; s <= gs; s++) {
            for (var p = Xi[s], v = s === gs ? e : p, w = s + 1 + ". " + p; w.length < i; )
              w += " ";
            w += v + `
`, a += w;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Ma() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function KS(e, t) {
      if (GS)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", he), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, he, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!at(e[a], t[a]))
          return !1;
      return !0;
    }
    function zd(e, t, a, i, s, p) {
      Vc = p, wn = t, Xi = e !== null ? e._debugHookTypes : null, gs = -1, GS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = pe, e !== null && e.memoizedState !== null ? Xe.current = gx : Xi !== null ? Xe.current = yx : Xe.current = mx;
      var v = a(i, s);
      if (Ah) {
        var w = 0;
        do {
          if (Ah = !1, Nh = 0, w >= SD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          w += 1, GS = !1, Yr = null, qr = null, t.updateQueue = null, gs = -1, Xe.current = Sx, v = a(i, s);
        } while (Ah);
      }
      Xe.current = Vy, t._debugHookTypes = Xi;
      var b = Yr !== null && Yr.next !== null;
      if (Vc = pe, wn = null, Yr = null, qr = null, he = null, Xi = null, gs = -1, e !== null && (e.flags & Br) !== (t.flags & Br) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & dt) !== gt && y("Internal React error: Expected static flag was missing. Please notify the React team."), Dy = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function Ud() {
      var e = Nh !== 0;
      return Nh = 0, e;
    }
    function XC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ai) !== gt ? t.flags &= ~(Bl | ni | ba | st) : t.flags &= ~(ba | st), e.lanes = Ec(e.lanes, a);
    }
    function JC() {
      if (Xe.current = Vy, Dy) {
        for (var e = wn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dy = !1;
      }
      Vc = pe, wn = null, Yr = null, qr = null, Xi = null, gs = -1, he = null, fx = !1, Ah = !1, Nh = 0;
    }
    function ml() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return qr === null ? wn.memoizedState = qr = e : qr = qr.next = e, qr;
    }
    function Ji() {
      var e;
      if (Yr === null) {
        var t = wn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Yr.next;
      var a;
      if (qr === null ? a = wn.memoizedState : a = qr.next, a !== null)
        qr = a, a = qr.next, Yr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Yr = e;
        var i = {
          memoizedState: Yr.memoizedState,
          baseState: Yr.baseState,
          baseQueue: Yr.baseQueue,
          queue: Yr.queue,
          next: null
        };
        qr === null ? wn.memoizedState = qr = i : qr = qr.next = i;
      }
      return qr;
    }
    function ZC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function XS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function JS(e, t, a) {
      var i = ml(), s;
      a !== void 0 ? s = a(t) : s = t, i.memoizedState = i.baseState = s;
      var p = {
        pending: null,
        interleaved: null,
        lanes: pe,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      };
      i.queue = p;
      var v = p.dispatch = xD.bind(null, wn, p);
      return [i.memoizedState, v];
    }
    function ZS(e, t, a) {
      var i = Ji(), s = i.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var p = Yr, v = p.baseQueue, w = s.pending;
      if (w !== null) {
        if (v !== null) {
          var b = v.next, T = w.next;
          v.next = T, w.next = b;
        }
        p.baseQueue !== v && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), p.baseQueue = v = w, s.pending = null;
      }
      if (v !== null) {
        var A = v.next, W = p.baseState, V = null, te = null, ne = null, se = A;
        do {
          var Ze = se.lane;
          if (Jl(Vc, Ze)) {
            if (ne !== null) {
              var pt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mr,
                action: se.action,
                hasEagerState: se.hasEagerState,
                eagerState: se.eagerState,
                next: null
              };
              ne = ne.next = pt;
            }
            if (se.hasEagerState)
              W = se.eagerState;
            else {
              var Kt = se.action;
              W = e(W, Kt);
            }
          } else {
            var St = {
              lane: Ze,
              action: se.action,
              hasEagerState: se.hasEagerState,
              eagerState: se.eagerState,
              next: null
            };
            ne === null ? (te = ne = St, V = W) : ne = ne.next = St, wn.lanes = Mt(wn.lanes, Ze), Xh(Ze);
          }
          se = se.next;
        } while (se !== null && se !== A);
        ne === null ? V = W : ne.next = te, at(W, i.memoizedState) || Fh(), i.memoizedState = W, i.baseState = V, i.baseQueue = ne, s.lastRenderedState = W;
      }
      var It = s.interleaved;
      if (It !== null) {
        var Q = It;
        do {
          var ce = Q.lane;
          wn.lanes = Mt(wn.lanes, ce), Xh(ce), Q = Q.next;
        } while (Q !== It);
      } else v === null && (s.lanes = pe);
      var G = s.dispatch;
      return [i.memoizedState, G];
    }
    function eE(e, t, a) {
      var i = Ji(), s = i.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var p = s.dispatch, v = s.pending, w = i.memoizedState;
      if (v !== null) {
        s.pending = null;
        var b = v.next, T = b;
        do {
          var A = T.action;
          w = e(w, A), T = T.next;
        } while (T !== b);
        at(w, i.memoizedState) || Fh(), i.memoizedState = w, i.baseQueue === null && (i.baseState = w), s.lastRenderedState = w;
      }
      return [w, p];
    }
    function pF(e, t, a) {
    }
    function hF(e, t, a) {
    }
    function tE(e, t, a) {
      var i = wn, s = ml(), p, v = ua();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        p = a(), Md || p !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Md = !0);
      } else {
        if (p = t(), !Md) {
          var w = t();
          at(p, w) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Md = !0);
        }
        var b = lg();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Sc(b, Vc) || ex(i, t, p);
      }
      s.memoizedState = p;
      var T = {
        value: p,
        getSnapshot: t
      };
      return s.queue = T, jy(nx.bind(null, i, T, e), [e]), i.flags |= ba, Lh(Ir | sa, tx.bind(null, i, T, p, t), void 0, null), p;
    }
    function Ay(e, t, a) {
      var i = wn, s = Ji(), p = t();
      if (!Md) {
        var v = t();
        at(p, v) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Md = !0);
      }
      var w = s.memoizedState, b = !at(w, p);
      b && (s.memoizedState = p, Fh());
      var T = s.queue;
      if (jh(nx.bind(null, i, T, e), [e]), T.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      qr !== null && qr.memoizedState.tag & Ir) {
        i.flags |= ba, Lh(Ir | sa, tx.bind(null, i, T, p, t), void 0, null);
        var A = lg();
        if (A === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Sc(A, Vc) || ex(i, t, p);
      }
      return p;
    }
    function ex(e, t, a) {
      e.flags |= $l;
      var i = {
        getSnapshot: t,
        value: a
      }, s = wn.updateQueue;
      if (s === null)
        s = ZC(), wn.updateQueue = s, s.stores = [i];
      else {
        var p = s.stores;
        p === null ? s.stores = [i] : p.push(i);
      }
    }
    function tx(e, t, a, i) {
      t.value = a, t.getSnapshot = i, rx(t) && ax(e);
    }
    function nx(e, t, a) {
      var i = function() {
        rx(t) && ax(e);
      };
      return a(i);
    }
    function rx(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !at(a, i);
      } catch {
        return !0;
      }
    }
    function ax(e) {
      var t = di(e, Et);
      t !== null && Xr(t, e, Et, Ln);
    }
    function Ny(e) {
      var t = ml();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: pe,
        dispatch: null,
        lastRenderedReducer: XS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = _D.bind(null, wn, a);
      return [t.memoizedState, i];
    }
    function nE(e) {
      return ZS(XS);
    }
    function rE(e) {
      return eE(XS);
    }
    function Lh(e, t, a, i) {
      var s = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, p = wn.updateQueue;
      if (p === null)
        p = ZC(), wn.updateQueue = p, p.lastEffect = s.next = s;
      else {
        var v = p.lastEffect;
        if (v === null)
          p.lastEffect = s.next = s;
        else {
          var w = v.next;
          v.next = s, s.next = w, p.lastEffect = s;
        }
      }
      return s;
    }
    function aE(e) {
      var t = ml();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Ly(e) {
      var t = Ji();
      return t.memoizedState;
    }
    function Mh(e, t, a, i) {
      var s = ml(), p = i === void 0 ? null : i;
      wn.flags |= e, s.memoizedState = Lh(Ir | t, a, void 0, p);
    }
    function My(e, t, a, i) {
      var s = Ji(), p = i === void 0 ? null : i, v = void 0;
      if (Yr !== null) {
        var w = Yr.memoizedState;
        if (v = w.destroy, p !== null) {
          var b = w.deps;
          if (KS(p, b)) {
            s.memoizedState = Lh(t, a, v, p);
            return;
          }
        }
      }
      wn.flags |= e, s.memoizedState = Lh(Ir | t, a, v, p);
    }
    function jy(e, t) {
      return (wn.mode & ai) !== gt ? Mh(Bl | ba | Zo, sa, e, t) : Mh(ba | Zo, sa, e, t);
    }
    function jh(e, t) {
      return My(ba, sa, e, t);
    }
    function iE(e, t) {
      return Mh(st, vl, e, t);
    }
    function zy(e, t) {
      return My(st, vl, e, t);
    }
    function oE(e, t) {
      var a = st;
      return a |= ti, (wn.mode & ai) !== gt && (a |= ni), Mh(a, Wr, e, t);
    }
    function Uy(e, t) {
      return My(st, Wr, e, t);
    }
    function ix(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var s = t;
        s.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(s).join(", ") + "}");
        var p = e();
        return s.current = p, function() {
          s.current = null;
        };
      }
    }
    function lE(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, s = st;
      return s |= ti, (wn.mode & ai) !== gt && (s |= ni), Mh(s, Wr, ix.bind(null, t, e), i);
    }
    function Py(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return My(st, Wr, ix.bind(null, t, e), i);
    }
    function wD(e, t) {
    }
    var Fy = wD;
    function uE(e, t) {
      var a = ml(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Hy(e, t) {
      var a = Ji(), i = t === void 0 ? null : t, s = a.memoizedState;
      if (s !== null && i !== null) {
        var p = s[1];
        if (KS(i, p))
          return s[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function sE(e, t) {
      var a = ml(), i = t === void 0 ? null : t, s = e();
      return a.memoizedState = [s, i], s;
    }
    function $y(e, t) {
      var a = Ji(), i = t === void 0 ? null : t, s = a.memoizedState;
      if (s !== null && i !== null) {
        var p = s[1];
        if (KS(i, p))
          return s[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function cE(e) {
      var t = ml();
      return t.memoizedState = e, e;
    }
    function ox(e) {
      var t = Ji(), a = Yr, i = a.memoizedState;
      return ux(t, i, e);
    }
    function lx(e) {
      var t = Ji();
      if (Yr === null)
        return t.memoizedState = e, e;
      var a = Yr.memoizedState;
      return ux(t, a, e);
    }
    function ux(e, t, a) {
      var i = !mm(Vc);
      if (i) {
        if (!at(a, t)) {
          var s = Sm();
          wn.lanes = Mt(wn.lanes, s), Xh(s), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Fh()), e.memoizedState = a, a;
    }
    function bD(e, t, a) {
      var i = oi();
      sr(g0(i, wo)), e(!0);
      var s = Dh.transition;
      Dh.transition = {};
      var p = Dh.transition;
      Dh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (sr(i), Dh.transition = s, s === null && p._updatedFibers) {
          var v = p._updatedFibers.size;
          v > 10 && S("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
        }
      }
    }
    function fE() {
      var e = Ny(!1), t = e[0], a = e[1], i = bD.bind(null, a), s = ml();
      return s.memoizedState = i, [t, i];
    }
    function sx() {
      var e = nE(), t = e[0], a = Ji(), i = a.memoizedState;
      return [t, i];
    }
    function cx() {
      var e = rE(), t = e[0], a = Ji(), i = a.memoizedState;
      return [t, i];
    }
    var fx = !1;
    function CD() {
      return fx;
    }
    function dE() {
      var e = ml(), t = lg(), a = t.identifierPrefix, i;
      if (ua()) {
        var s = UO();
        i = ":" + a + "R" + s;
        var p = Nh++;
        p > 0 && (i += "H" + p.toString(32)), i += ":";
      } else {
        var v = gD++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function By() {
      var e = Ji(), t = e.memoizedState;
      return t;
    }
    function xD(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Cs(e), s = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (dx(e))
        px(t, s);
      else {
        var p = DC(e, t, s, i);
        if (p !== null) {
          var v = qa();
          Xr(p, e, i, v), hx(p, t, i);
        }
      }
      vx(e, i);
    }
    function _D(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Cs(e), s = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (dx(e))
        px(t, s);
      else {
        var p = e.alternate;
        if (e.lanes === pe && (p === null || p.lanes === pe)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var w;
            w = Xe.current, Xe.current = Do;
            try {
              var b = t.lastRenderedState, T = v(b, a);
              if (s.hasEagerState = !0, s.eagerState = T, at(T, b)) {
                rD(e, t, s, i);
                return;
              }
            } catch {
            } finally {
              Xe.current = w;
            }
          }
        }
        var A = DC(e, t, s, i);
        if (A !== null) {
          var W = qa();
          Xr(A, e, i, W), hx(A, t, i);
        }
      }
      vx(e, i);
    }
    function dx(e) {
      var t = e.alternate;
      return e === wn || t !== null && t === wn;
    }
    function px(e, t) {
      Ah = Dy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function hx(e, t, a) {
      if ($p(a)) {
        var i = t.lanes;
        i = qf(i, e.pendingLanes);
        var s = Mt(i, a);
        t.lanes = s, Bp(e, s);
      }
    }
    function vx(e, t, a) {
      Af(e, t);
    }
    var Vy = {
      readContext: Fr,
      useCallback: Ma,
      useContext: Ma,
      useEffect: Ma,
      useImperativeHandle: Ma,
      useInsertionEffect: Ma,
      useLayoutEffect: Ma,
      useMemo: Ma,
      useReducer: Ma,
      useRef: Ma,
      useState: Ma,
      useDebugValue: Ma,
      useDeferredValue: Ma,
      useTransition: Ma,
      useMutableSource: Ma,
      useSyncExternalStore: Ma,
      useId: Ma,
      unstable_isNewReconciler: re
    }, mx = null, yx = null, gx = null, Sx = null, yl = null, Do = null, Iy = null;
    {
      var pE = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ot = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      mx = {
        readContext: function(e) {
          return Fr(e);
        },
        useCallback: function(e, t) {
          return he = "useCallback", vn(), jd(t), uE(e, t);
        },
        useContext: function(e) {
          return he = "useContext", vn(), Fr(e);
        },
        useEffect: function(e, t) {
          return he = "useEffect", vn(), jd(t), jy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return he = "useImperativeHandle", vn(), jd(a), lE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return he = "useInsertionEffect", vn(), jd(t), iE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", vn(), jd(t), oE(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", vn(), jd(t);
          var a = Xe.current;
          Xe.current = yl;
          try {
            return sE(e, t);
          } finally {
            Xe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          he = "useReducer", vn();
          var i = Xe.current;
          Xe.current = yl;
          try {
            return JS(e, t, a);
          } finally {
            Xe.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", vn(), aE(e);
        },
        useState: function(e) {
          he = "useState", vn();
          var t = Xe.current;
          Xe.current = yl;
          try {
            return Ny(e);
          } finally {
            Xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", vn(), void 0;
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", vn(), cE(e);
        },
        useTransition: function() {
          return he = "useTransition", vn(), fE();
        },
        useMutableSource: function(e, t, a) {
          return he = "useMutableSource", vn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return he = "useSyncExternalStore", vn(), tE(e, t, a);
        },
        useId: function() {
          return he = "useId", vn(), dE();
        },
        unstable_isNewReconciler: re
      }, yx = {
        readContext: function(e) {
          return Fr(e);
        },
        useCallback: function(e, t) {
          return he = "useCallback", qe(), uE(e, t);
        },
        useContext: function(e) {
          return he = "useContext", qe(), Fr(e);
        },
        useEffect: function(e, t) {
          return he = "useEffect", qe(), jy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return he = "useImperativeHandle", qe(), lE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return he = "useInsertionEffect", qe(), iE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", qe(), oE(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", qe();
          var a = Xe.current;
          Xe.current = yl;
          try {
            return sE(e, t);
          } finally {
            Xe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          he = "useReducer", qe();
          var i = Xe.current;
          Xe.current = yl;
          try {
            return JS(e, t, a);
          } finally {
            Xe.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", qe(), aE(e);
        },
        useState: function(e) {
          he = "useState", qe();
          var t = Xe.current;
          Xe.current = yl;
          try {
            return Ny(e);
          } finally {
            Xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", qe(), void 0;
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", qe(), cE(e);
        },
        useTransition: function() {
          return he = "useTransition", qe(), fE();
        },
        useMutableSource: function(e, t, a) {
          return he = "useMutableSource", qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return he = "useSyncExternalStore", qe(), tE(e, t, a);
        },
        useId: function() {
          return he = "useId", qe(), dE();
        },
        unstable_isNewReconciler: re
      }, gx = {
        readContext: function(e) {
          return Fr(e);
        },
        useCallback: function(e, t) {
          return he = "useCallback", qe(), Hy(e, t);
        },
        useContext: function(e) {
          return he = "useContext", qe(), Fr(e);
        },
        useEffect: function(e, t) {
          return he = "useEffect", qe(), jh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return he = "useImperativeHandle", qe(), Py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return he = "useInsertionEffect", qe(), zy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", qe(), Uy(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", qe();
          var a = Xe.current;
          Xe.current = Do;
          try {
            return $y(e, t);
          } finally {
            Xe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          he = "useReducer", qe();
          var i = Xe.current;
          Xe.current = Do;
          try {
            return ZS(e, t, a);
          } finally {
            Xe.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", qe(), Ly();
        },
        useState: function(e) {
          he = "useState", qe();
          var t = Xe.current;
          Xe.current = Do;
          try {
            return nE(e);
          } finally {
            Xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", qe(), Fy();
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", qe(), ox(e);
        },
        useTransition: function() {
          return he = "useTransition", qe(), sx();
        },
        useMutableSource: function(e, t, a) {
          return he = "useMutableSource", qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return he = "useSyncExternalStore", qe(), Ay(e, t);
        },
        useId: function() {
          return he = "useId", qe(), By();
        },
        unstable_isNewReconciler: re
      }, Sx = {
        readContext: function(e) {
          return Fr(e);
        },
        useCallback: function(e, t) {
          return he = "useCallback", qe(), Hy(e, t);
        },
        useContext: function(e) {
          return he = "useContext", qe(), Fr(e);
        },
        useEffect: function(e, t) {
          return he = "useEffect", qe(), jh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return he = "useImperativeHandle", qe(), Py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return he = "useInsertionEffect", qe(), zy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", qe(), Uy(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", qe();
          var a = Xe.current;
          Xe.current = Iy;
          try {
            return $y(e, t);
          } finally {
            Xe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          he = "useReducer", qe();
          var i = Xe.current;
          Xe.current = Iy;
          try {
            return eE(e, t, a);
          } finally {
            Xe.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", qe(), Ly();
        },
        useState: function(e) {
          he = "useState", qe();
          var t = Xe.current;
          Xe.current = Iy;
          try {
            return rE(e);
          } finally {
            Xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", qe(), Fy();
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", qe(), lx(e);
        },
        useTransition: function() {
          return he = "useTransition", qe(), cx();
        },
        useMutableSource: function(e, t, a) {
          return he = "useMutableSource", qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return he = "useSyncExternalStore", qe(), Ay(e, t);
        },
        useId: function() {
          return he = "useId", qe(), By();
        },
        unstable_isNewReconciler: re
      }, yl = {
        readContext: function(e) {
          return pE(), Fr(e);
        },
        useCallback: function(e, t) {
          return he = "useCallback", Ot(), vn(), uE(e, t);
        },
        useContext: function(e) {
          return he = "useContext", Ot(), vn(), Fr(e);
        },
        useEffect: function(e, t) {
          return he = "useEffect", Ot(), vn(), jy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return he = "useImperativeHandle", Ot(), vn(), lE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return he = "useInsertionEffect", Ot(), vn(), iE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", Ot(), vn(), oE(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", Ot(), vn();
          var a = Xe.current;
          Xe.current = yl;
          try {
            return sE(e, t);
          } finally {
            Xe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          he = "useReducer", Ot(), vn();
          var i = Xe.current;
          Xe.current = yl;
          try {
            return JS(e, t, a);
          } finally {
            Xe.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", Ot(), vn(), aE(e);
        },
        useState: function(e) {
          he = "useState", Ot(), vn();
          var t = Xe.current;
          Xe.current = yl;
          try {
            return Ny(e);
          } finally {
            Xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", Ot(), vn(), void 0;
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", Ot(), vn(), cE(e);
        },
        useTransition: function() {
          return he = "useTransition", Ot(), vn(), fE();
        },
        useMutableSource: function(e, t, a) {
          return he = "useMutableSource", Ot(), vn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return he = "useSyncExternalStore", Ot(), vn(), tE(e, t, a);
        },
        useId: function() {
          return he = "useId", Ot(), vn(), dE();
        },
        unstable_isNewReconciler: re
      }, Do = {
        readContext: function(e) {
          return pE(), Fr(e);
        },
        useCallback: function(e, t) {
          return he = "useCallback", Ot(), qe(), Hy(e, t);
        },
        useContext: function(e) {
          return he = "useContext", Ot(), qe(), Fr(e);
        },
        useEffect: function(e, t) {
          return he = "useEffect", Ot(), qe(), jh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return he = "useImperativeHandle", Ot(), qe(), Py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return he = "useInsertionEffect", Ot(), qe(), zy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", Ot(), qe(), Uy(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", Ot(), qe();
          var a = Xe.current;
          Xe.current = Do;
          try {
            return $y(e, t);
          } finally {
            Xe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          he = "useReducer", Ot(), qe();
          var i = Xe.current;
          Xe.current = Do;
          try {
            return ZS(e, t, a);
          } finally {
            Xe.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", Ot(), qe(), Ly();
        },
        useState: function(e) {
          he = "useState", Ot(), qe();
          var t = Xe.current;
          Xe.current = Do;
          try {
            return nE(e);
          } finally {
            Xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", Ot(), qe(), Fy();
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", Ot(), qe(), ox(e);
        },
        useTransition: function() {
          return he = "useTransition", Ot(), qe(), sx();
        },
        useMutableSource: function(e, t, a) {
          return he = "useMutableSource", Ot(), qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return he = "useSyncExternalStore", Ot(), qe(), Ay(e, t);
        },
        useId: function() {
          return he = "useId", Ot(), qe(), By();
        },
        unstable_isNewReconciler: re
      }, Iy = {
        readContext: function(e) {
          return pE(), Fr(e);
        },
        useCallback: function(e, t) {
          return he = "useCallback", Ot(), qe(), Hy(e, t);
        },
        useContext: function(e) {
          return he = "useContext", Ot(), qe(), Fr(e);
        },
        useEffect: function(e, t) {
          return he = "useEffect", Ot(), qe(), jh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return he = "useImperativeHandle", Ot(), qe(), Py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return he = "useInsertionEffect", Ot(), qe(), zy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", Ot(), qe(), Uy(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", Ot(), qe();
          var a = Xe.current;
          Xe.current = Do;
          try {
            return $y(e, t);
          } finally {
            Xe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          he = "useReducer", Ot(), qe();
          var i = Xe.current;
          Xe.current = Do;
          try {
            return eE(e, t, a);
          } finally {
            Xe.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", Ot(), qe(), Ly();
        },
        useState: function(e) {
          he = "useState", Ot(), qe();
          var t = Xe.current;
          Xe.current = Do;
          try {
            return rE(e);
          } finally {
            Xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", Ot(), qe(), Fy();
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", Ot(), qe(), lx(e);
        },
        useTransition: function() {
          return he = "useTransition", Ot(), qe(), cx();
        },
        useMutableSource: function(e, t, a) {
          return he = "useMutableSource", Ot(), qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return he = "useSyncExternalStore", Ot(), qe(), Ay(e, t);
        },
        useId: function() {
          return he = "useId", Ot(), qe(), By();
        },
        unstable_isNewReconciler: re
      };
    }
    var Ss = c.unstable_now, Ex = 0, Wy = -1, zh = -1, Yy = -1, hE = !1, qy = !1;
    function wx() {
      return hE;
    }
    function RD() {
      qy = !0;
    }
    function TD() {
      hE = !1, qy = !1;
    }
    function kD() {
      hE = qy, qy = !1;
    }
    function bx() {
      return Ex;
    }
    function Cx() {
      Ex = Ss();
    }
    function vE(e) {
      zh = Ss(), e.actualStartTime < 0 && (e.actualStartTime = Ss());
    }
    function xx(e) {
      zh = -1;
    }
    function Qy(e, t) {
      if (zh >= 0) {
        var a = Ss() - zh;
        e.actualDuration += a, t && (e.selfBaseDuration = a), zh = -1;
      }
    }
    function gl(e) {
      if (Wy >= 0) {
        var t = Ss() - Wy;
        Wy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case D:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case X:
              var s = a.stateNode;
              s.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function mE(e) {
      if (Yy >= 0) {
        var t = Ss() - Yy;
        Yy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case D:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case X:
              var s = a.stateNode;
              s !== null && (s.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Sl() {
      Wy = Ss();
    }
    function yE() {
      Yy = Ss();
    }
    function gE(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ic(e, t) {
      return {
        value: e,
        source: t,
        stack: bu(t),
        digest: null
      };
    }
    function SE(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function OD(e, t) {
      return !0;
    }
    function EE(e, t) {
      try {
        var a = OD(e, t);
        if (a === !1)
          return;
        var i = t.value, s = t.source, p = t.stack, v = p !== null ? p : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === k)
            return;
          console.error(i);
        }
        var w = s ? Rt(s) : null, b = w ? "The above error occurred in the <" + w + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === D)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var A = Rt(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + A + ".");
        }
        var W = b + `
` + v + `

` + ("" + T);
        console.error(W);
      } catch (V) {
        setTimeout(function() {
          throw V;
        });
      }
    }
    var DD = typeof WeakMap == "function" ? WeakMap : Map;
    function _x(e, t, a) {
      var i = fu(Ln, a);
      i.tag = ES, i.payload = {
        element: null
      };
      var s = t.value;
      return i.callback = function() {
        bN(s), EE(e, t);
      }, i;
    }
    function wE(e, t, a) {
      var i = fu(Ln, a);
      i.tag = ES;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var p = t.value;
        i.payload = function() {
          return s(p);
        }, i.callback = function() {
          z_(e), EE(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        z_(e), EE(e, t), typeof s != "function" && EN(this);
        var b = t.value, T = t.stack;
        this.componentDidCatch(b, {
          componentStack: T !== null ? T : ""
        }), typeof s != "function" && (Da(e.lanes, Et) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Rt(e) || "Unknown"));
      }), i;
    }
    function Rx(e, t, a) {
      var i = e.pingCache, s;
      if (i === null ? (i = e.pingCache = new DD(), s = /* @__PURE__ */ new Set(), i.set(t, s)) : (s = i.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(t, s))), !s.has(a)) {
        s.add(a);
        var p = CN.bind(null, e, t, a);
        Va && Jh(e, a), t.then(p, p);
      }
    }
    function AD(e, t, a, i) {
      var s = e.updateQueue;
      if (s === null) {
        var p = /* @__PURE__ */ new Set();
        p.add(a), e.updateQueue = p;
      } else
        s.add(a);
    }
    function ND(e, t) {
      var a = e.tag;
      if ((e.mode & dt) === gt && (a === O || a === Re || a === q)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Tx(e) {
      var t = e;
      do {
        if (t.tag === Ae && mD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function kx(e, t, a, i, s) {
      if ((e.mode & dt) === gt) {
        if (e === t)
          e.flags |= $r;
        else {
          if (e.flags |= kt, a.flags |= xf, a.flags &= ~(nm | Jo), a.tag === k) {
            var p = a.alternate;
            if (p === null)
              a.tag = ke;
            else {
              var v = fu(Ln, Et);
              v.tag = gy, vs(a, v, Et);
            }
          }
          a.lanes = Mt(a.lanes, Et);
        }
        return e;
      }
      return e.flags |= $r, e.lanes = s, e;
    }
    function LD(e, t, a, i, s) {
      if (a.flags |= Jo, Va && Jh(e, s), i !== null && typeof i == "object" && typeof i.then == "function") {
        var p = i;
        ND(a), ua() && a.mode & dt && gC();
        var v = Tx(t);
        if (v !== null) {
          v.flags &= ~ia, kx(v, t, a, e, s), v.mode & dt && Rx(e, p, s), AD(v, e, p);
          return;
        } else {
          if (!Hp(s)) {
            Rx(e, p, s), ew();
            return;
          }
          var w = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = w;
        }
      } else if (ua() && a.mode & dt) {
        gC();
        var b = Tx(t);
        if (b !== null) {
          (b.flags & $r) === yt && (b.flags |= ia), kx(b, t, a, e, s), pS(Ic(i, a));
          return;
        }
      }
      i = Ic(i, a), dN(i);
      var T = t;
      do {
        switch (T.tag) {
          case D: {
            var A = i;
            T.flags |= $r;
            var W = Yu(s);
            T.lanes = Mt(T.lanes, W);
            var V = _x(T, A, W);
            CS(T, V);
            return;
          }
          case k:
            var te = i, ne = T.type, se = T.stateNode;
            if ((T.flags & kt) === yt && (typeof ne.getDerivedStateFromError == "function" || se !== null && typeof se.componentDidCatch == "function" && !T_(se))) {
              T.flags |= $r;
              var Ze = Yu(s);
              T.lanes = Mt(T.lanes, Ze);
              var St = wE(T, te, Ze);
              CS(T, St);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function MD() {
      return null;
    }
    var Uh = d.ReactCurrentOwner, Ao = !1, bE, Ph, CE, xE, _E, Wc, RE, Gy;
    bE = {}, Ph = {}, CE = {}, xE = {}, _E = {}, Wc = !1, RE = {}, Gy = {};
    function Wa(e, t, a, i) {
      e === null ? t.child = YC(t, null, a, i) : t.child = Dd(t, e.child, a, i);
    }
    function jD(e, t, a, i) {
      t.child = Dd(t, e.child, null, i), t.child = Dd(t, null, a, i);
    }
    function Ox(e, t, a, i, s) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && _o(
          p,
          i,
          // Resolved props
          "prop",
          Jt(a)
        );
      }
      var v = a.render, w = t.ref, b, T;
      Od(t, s), Pu(t);
      {
        if (Uh.current = t, Hr(!0), b = zd(e, t, v, i, w, s), T = Ud(), t.mode & lr) {
          Nn(!0);
          try {
            b = zd(e, t, v, i, w, s), T = Ud();
          } finally {
            Nn(!1);
          }
        }
        Hr(!1);
      }
      return Il(), e !== null && !Ao ? (XC(e, t, s), du(e, t, s)) : (ua() && T && lS(t), t.flags |= xi, Wa(e, t, b, s), t.child);
    }
    function Dx(e, t, a, i, s) {
      if (e === null) {
        var p = a.type;
        if (HN(p) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = p;
          return v = Wd(p), t.tag = q, t.type = v, OE(t, p), Ax(e, t, v, i, s);
        }
        {
          var w = p.propTypes;
          w && _o(
            w,
            i,
            // Resolved props
            "prop",
            Jt(p)
          );
        }
        var b = fw(a.type, null, i, t, t.mode, s);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var T = a.type, A = T.propTypes;
        A && _o(
          A,
          i,
          // Resolved props
          "prop",
          Jt(T)
        );
      }
      var W = e.child, V = jE(e, s);
      if (!V) {
        var te = W.memoizedProps, ne = a.compare;
        if (ne = ne !== null ? ne : bt, ne(te, i) && e.ref === t.ref)
          return du(e, t, s);
      }
      t.flags |= xi;
      var se = Kc(W, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function Ax(e, t, a, i, s) {
      if (t.type !== t.elementType) {
        var p = t.elementType;
        if (p.$$typeof === $e) {
          var v = p, w = v._payload, b = v._init;
          try {
            p = b(w);
          } catch {
            p = null;
          }
          var T = p && p.propTypes;
          T && _o(
            T,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Jt(p)
          );
        }
      }
      if (e !== null) {
        var A = e.memoizedProps;
        if (bt(A, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ao = !1, t.pendingProps = i = A, jE(e, s))
            (e.flags & xf) !== yt && (Ao = !0);
          else return t.lanes = e.lanes, du(e, t, s);
      }
      return TE(e, t, a, i, s);
    }
    function Nx(e, t, a) {
      var i = t.pendingProps, s = i.children, p = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || F)
        if ((t.mode & dt) === gt) {
          var v = {
            baseLanes: pe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, ug(t, a);
        } else if (Da(a, Ia)) {
          var W = {
            baseLanes: pe,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = W;
          var V = p !== null ? p.baseLanes : a;
          ug(t, V);
        } else {
          var w = null, b;
          if (p !== null) {
            var T = p.baseLanes;
            b = Mt(T, a);
          } else
            b = a;
          t.lanes = t.childLanes = Ia;
          var A = {
            baseLanes: b,
            cachePool: w,
            transitions: null
          };
          return t.memoizedState = A, t.updateQueue = null, ug(t, b), null;
        }
      else {
        var te;
        p !== null ? (te = Mt(p.baseLanes, a), t.memoizedState = null) : te = a, ug(t, te);
      }
      return Wa(e, t, s, a), t.child;
    }
    function zD(e, t, a) {
      var i = t.pendingProps;
      return Wa(e, t, i, a), t.child;
    }
    function UD(e, t, a) {
      var i = t.pendingProps.children;
      return Wa(e, t, i, a), t.child;
    }
    function PD(e, t, a) {
      {
        t.flags |= st;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var s = t.pendingProps, p = s.children;
      return Wa(e, t, p, a), t.child;
    }
    function Lx(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ha, t.flags |= Hi);
    }
    function TE(e, t, a, i, s) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && _o(
          p,
          i,
          // Resolved props
          "prop",
          Jt(a)
        );
      }
      var v;
      {
        var w = Cd(t, a, !0);
        v = xd(t, w);
      }
      var b, T;
      Od(t, s), Pu(t);
      {
        if (Uh.current = t, Hr(!0), b = zd(e, t, a, i, v, s), T = Ud(), t.mode & lr) {
          Nn(!0);
          try {
            b = zd(e, t, a, i, v, s), T = Ud();
          } finally {
            Nn(!1);
          }
        }
        Hr(!1);
      }
      return Il(), e !== null && !Ao ? (XC(e, t, s), du(e, t, s)) : (ua() && T && lS(t), t.flags |= xi, Wa(e, t, b, s), t.child);
    }
    function Mx(e, t, a, i, s) {
      {
        switch (tL(t)) {
          case !1: {
            var p = t.stateNode, v = t.type, w = new v(t.memoizedProps, p.context), b = w.state;
            p.updater.enqueueSetState(p, b, null);
            break;
          }
          case !0: {
            t.flags |= kt, t.flags |= $r;
            var T = new Error("Simulated error coming from DevTools"), A = Yu(s);
            t.lanes = Mt(t.lanes, A);
            var W = wE(t, Ic(T, t), A);
            CS(t, W);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var V = a.propTypes;
          V && _o(
            V,
            i,
            // Resolved props
            "prop",
            Jt(a)
          );
        }
      }
      var te;
      hl(a) ? (te = !0, ly(t)) : te = !1, Od(t, s);
      var ne = t.stateNode, se;
      ne === null ? (Xy(e, t), $C(t, a, i), jS(t, a, i, s), se = !0) : e === null ? se = cD(t, a, i, s) : se = fD(e, t, a, i, s);
      var Ze = kE(e, t, a, se, te, s);
      {
        var St = t.stateNode;
        se && St.props !== i && (Wc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Rt(t) || "a component"), Wc = !0);
      }
      return Ze;
    }
    function kE(e, t, a, i, s, p) {
      Lx(e, t);
      var v = (t.flags & kt) !== yt;
      if (!i && !v)
        return s && hC(t, a, !1), du(e, t, p);
      var w = t.stateNode;
      Uh.current = t;
      var b;
      if (v && typeof a.getDerivedStateFromError != "function")
        b = null, xx();
      else {
        Pu(t);
        {
          if (Hr(!0), b = w.render(), t.mode & lr) {
            Nn(!0);
            try {
              w.render();
            } finally {
              Nn(!1);
            }
          }
          Hr(!1);
        }
        Il();
      }
      return t.flags |= xi, e !== null && v ? jD(e, t, b, p) : Wa(e, t, b, p), t.memoizedState = w.state, s && hC(t, a, !0), t.child;
    }
    function jx(e) {
      var t = e.stateNode;
      t.pendingContext ? dC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && dC(e, t.context, !1), $S(e, t.containerInfo);
    }
    function FD(e, t, a) {
      if (jx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, s = t.memoizedState, p = s.element;
      LC(e, t), by(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var w = v.element;
      if (s.isDehydrated) {
        var b = {
          element: w,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, T = t.updateQueue;
        if (T.baseState = b, t.memoizedState = b, t.flags & ia) {
          var A = Ic(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return zx(e, t, w, a, A);
        } else if (w !== p) {
          var W = Ic(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return zx(e, t, w, a, W);
        } else {
          VO(t);
          var V = YC(t, null, w, a);
          t.child = V;
          for (var te = V; te; )
            te.flags = te.flags & ~kn | Fi, te = te.sibling;
        }
      } else {
        if (Td(), w === p)
          return du(e, t, a);
        Wa(e, t, w, a);
      }
      return t.child;
    }
    function zx(e, t, a, i, s) {
      return Td(), pS(s), t.flags |= ia, Wa(e, t, a, i), t.child;
    }
    function HD(e, t, a) {
      QC(t), e === null && dS(t);
      var i = t.type, s = t.pendingProps, p = e !== null ? e.memoizedProps : null, v = s.children, w = q0(i, s);
      return w ? v = null : p !== null && q0(i, p) && (t.flags |= ei), Lx(e, t), Wa(e, t, v, a), t.child;
    }
    function $D(e, t) {
      return e === null && dS(t), null;
    }
    function BD(e, t, a, i) {
      Xy(e, t);
      var s = t.pendingProps, p = a, v = p._payload, w = p._init, b = w(v);
      t.type = b;
      var T = t.tag = $N(b), A = ko(b, s), W;
      switch (T) {
        case O:
          return OE(t, b), t.type = b = Wd(b), W = TE(null, t, b, A, i), W;
        case k:
          return t.type = b = iw(b), W = Mx(null, t, b, A, i), W;
        case Re:
          return t.type = b = ow(b), W = Ox(null, t, b, A, i), W;
        case tt: {
          if (t.type !== t.elementType) {
            var V = b.propTypes;
            V && _o(
              V,
              A,
              // Resolved for outer only
              "prop",
              Jt(b)
            );
          }
          return W = Dx(
            null,
            t,
            b,
            ko(b.type, A),
            // The inner type can have defaults too
            i
          ), W;
        }
      }
      var te = "";
      throw b !== null && typeof b == "object" && b.$$typeof === $e && (te = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + te));
    }
    function VD(e, t, a, i, s) {
      Xy(e, t), t.tag = k;
      var p;
      return hl(a) ? (p = !0, ly(t)) : p = !1, Od(t, s), $C(t, a, i), jS(t, a, i, s), kE(null, t, a, !0, p, s);
    }
    function ID(e, t, a, i) {
      Xy(e, t);
      var s = t.pendingProps, p;
      {
        var v = Cd(t, a, !1);
        p = xd(t, v);
      }
      Od(t, i);
      var w, b;
      Pu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = Jt(a) || "Unknown";
          bE[T] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), bE[T] = !0);
        }
        t.mode & lr && To.recordLegacyContextWarning(t, null), Hr(!0), Uh.current = t, w = zd(null, t, a, s, p, i), b = Ud(), Hr(!1);
      }
      if (Il(), t.flags |= xi, typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0) {
        var A = Jt(a) || "Unknown";
        Ph[A] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), Ph[A] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0
      ) {
        {
          var W = Jt(a) || "Unknown";
          Ph[W] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", W, W, W), Ph[W] = !0);
        }
        t.tag = k, t.memoizedState = null, t.updateQueue = null;
        var V = !1;
        return hl(a) ? (V = !0, ly(t)) : V = !1, t.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null, bS(t), HC(t, w), jS(t, a, s, i), kE(null, t, a, !0, V, i);
      } else {
        if (t.tag = O, t.mode & lr) {
          Nn(!0);
          try {
            w = zd(null, t, a, s, p, i), b = Ud();
          } finally {
            Nn(!1);
          }
        }
        return ua() && b && lS(t), Wa(null, t, w, i), OE(t, a), t.child;
      }
    }
    function OE(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Xa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var s = i || "", p = e._debugSource;
          p && (s = p.fileName + ":" + p.lineNumber), _E[s] || (_E[s] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Jt(t) || "Unknown";
          xE[v] || (y("%s: Function components do not support getDerivedStateFromProps.", v), xE[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var w = Jt(t) || "Unknown";
          CE[w] || (y("%s: Function components do not support contextType.", w), CE[w] = !0);
        }
      }
    }
    var DE = {
      dehydrated: null,
      treeContext: null,
      retryLane: mr
    };
    function AE(e) {
      return {
        baseLanes: e,
        cachePool: MD(),
        transitions: null
      };
    }
    function WD(e, t) {
      var a = null;
      return {
        baseLanes: Mt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function YD(e, t, a, i) {
      if (t !== null) {
        var s = t.memoizedState;
        if (s === null)
          return !1;
      }
      return IS(e, Oh);
    }
    function qD(e, t) {
      return Ec(e.childLanes, t);
    }
    function Ux(e, t, a) {
      var i = t.pendingProps;
      nL(t) && (t.flags |= kt);
      var s = Oo.current, p = !1, v = (t.flags & kt) !== yt;
      if (v || YD(s, e) ? (p = !0, t.flags &= ~kt) : (e === null || e.memoizedState !== null) && (s = vD(s, KC)), s = Nd(s), ys(t, s), e === null) {
        dS(t);
        var w = t.memoizedState;
        if (w !== null) {
          var b = w.dehydrated;
          if (b !== null)
            return JD(t, b);
        }
        var T = i.children, A = i.fallback;
        if (p) {
          var W = QD(t, T, A, a), V = t.child;
          return V.memoizedState = AE(a), t.memoizedState = DE, W;
        } else
          return NE(t, T);
      } else {
        var te = e.memoizedState;
        if (te !== null) {
          var ne = te.dehydrated;
          if (ne !== null)
            return ZD(e, t, v, i, ne, te, a);
        }
        if (p) {
          var se = i.fallback, Ze = i.children, St = KD(e, t, Ze, se, a), pt = t.child, Kt = e.child.memoizedState;
          return pt.memoizedState = Kt === null ? AE(a) : WD(Kt, a), pt.childLanes = qD(e, a), t.memoizedState = DE, St;
        } else {
          var It = i.children, Q = GD(e, t, It, a);
          return t.memoizedState = null, Q;
        }
      }
    }
    function NE(e, t, a) {
      var i = e.mode, s = {
        mode: "visible",
        children: t
      }, p = LE(s, i);
      return p.return = e, e.child = p, p;
    }
    function QD(e, t, a, i) {
      var s = e.mode, p = e.child, v = {
        mode: "hidden",
        children: t
      }, w, b;
      return (s & dt) === gt && p !== null ? (w = p, w.childLanes = pe, w.pendingProps = v, e.mode & en && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = 0, w.treeBaseDuration = 0), b = _s(a, s, i, null)) : (w = LE(v, s), b = _s(a, s, i, null)), w.return = e, b.return = e, w.sibling = b, e.child = w, b;
    }
    function LE(e, t, a) {
      return P_(e, t, pe, null);
    }
    function Px(e, t) {
      return Kc(e, t);
    }
    function GD(e, t, a, i) {
      var s = e.child, p = s.sibling, v = Px(s, {
        mode: "visible",
        children: a
      });
      if ((t.mode & dt) === gt && (v.lanes = i), v.return = t, v.sibling = null, p !== null) {
        var w = t.deletions;
        w === null ? (t.deletions = [p], t.flags |= nn) : w.push(p);
      }
      return t.child = v, v;
    }
    function KD(e, t, a, i, s) {
      var p = t.mode, v = e.child, w = v.sibling, b = {
        mode: "hidden",
        children: a
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (p & dt) === gt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var A = t.child;
        T = A, T.childLanes = pe, T.pendingProps = b, t.mode & en && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = v.selfBaseDuration, T.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        T = Px(v, b), T.subtreeFlags = v.subtreeFlags & Br;
      var W;
      return w !== null ? W = Kc(w, i) : (W = _s(i, p, s, null), W.flags |= kn), W.return = t, T.return = t, T.sibling = W, t.child = T, W;
    }
    function Ky(e, t, a, i) {
      i !== null && pS(i), Dd(t, e.child, null, a);
      var s = t.pendingProps, p = s.children, v = NE(t, p);
      return v.flags |= kn, t.memoizedState = null, v;
    }
    function XD(e, t, a, i, s) {
      var p = t.mode, v = {
        mode: "visible",
        children: a
      }, w = LE(v, p), b = _s(i, p, s, null);
      return b.flags |= kn, w.return = t, b.return = t, w.sibling = b, t.child = w, (t.mode & dt) !== gt && Dd(t, e.child, null, s), b;
    }
    function JD(e, t, a) {
      return (e.mode & dt) === gt ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Et) : X0(t) ? e.lanes = ur : e.lanes = Ia, null;
    }
    function ZD(e, t, a, i, s, p, v) {
      if (a)
        if (t.flags & ia) {
          t.flags &= ~ia;
          var Q = SE(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Ky(e, t, v, Q);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= kt, null;
          var ce = i.children, G = i.fallback, De = XD(e, t, ce, G, v), et = t.child;
          return et.memoizedState = AE(v), t.memoizedState = DE, De;
        }
      else {
        if ($O(), (t.mode & dt) === gt)
          return Ky(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (X0(s)) {
          var w, b, T;
          {
            var A = aO(s);
            w = A.digest, b = A.message, T = A.stack;
          }
          var W;
          b ? W = new Error(b) : W = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var V = SE(W, w, T);
          return Ky(e, t, v, V);
        }
        var te = Da(v, e.childLanes);
        if (Ao || te) {
          var ne = lg();
          if (ne !== null) {
            var se = bm(ne, v);
            if (se !== mr && se !== p.retryLane) {
              p.retryLane = se;
              var Ze = Ln;
              di(e, se), Xr(ne, e, se, Ze);
            }
          }
          ew();
          var St = SE(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Ky(e, t, v, St);
        } else if (oC(s)) {
          t.flags |= kt, t.child = e.child;
          var pt = xN.bind(null, e);
          return iO(s, pt), null;
        } else {
          IO(t, s, p.treeContext);
          var Kt = i.children, It = NE(t, Kt);
          return It.flags |= Fi, It;
        }
      }
    }
    function Fx(e, t, a) {
      e.lanes = Mt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Mt(i.lanes, t)), gS(e.return, t, a);
    }
    function eA(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ae) {
          var s = i.memoizedState;
          s !== null && Fx(i, a, e);
        } else if (i.tag === ge)
          Fx(i, a, e);
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
    function tA(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Oy(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function nA(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !RE[e])
        if (RE[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function rA(e, t) {
      e !== void 0 && !Gy[e] && (e !== "collapsed" && e !== "hidden" ? (Gy[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Gy[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Hx(e, t) {
      {
        var a = Zt(e), i = !a && typeof Li(e) == "function";
        if (a || i) {
          var s = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", s, t, s), !1;
        }
      }
      return !0;
    }
    function aA(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Zt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Hx(e[a], a))
              return;
        } else {
          var i = Li(e);
          if (typeof i == "function") {
            var s = i.call(e);
            if (s)
              for (var p = s.next(), v = 0; !p.done; p = s.next()) {
                if (!Hx(p.value, v))
                  return;
                v++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function ME(e, t, a, i, s) {
      var p = e.memoizedState;
      p === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: s
      } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = i, p.tail = a, p.tailMode = s);
    }
    function $x(e, t, a) {
      var i = t.pendingProps, s = i.revealOrder, p = i.tail, v = i.children;
      nA(s), rA(p, s), aA(v, s), Wa(e, t, v, a);
      var w = Oo.current, b = IS(w, Oh);
      if (b)
        w = WS(w, Oh), t.flags |= kt;
      else {
        var T = e !== null && (e.flags & kt) !== yt;
        T && eA(t, t.child, a), w = Nd(w);
      }
      if (ys(t, w), (t.mode & dt) === gt)
        t.memoizedState = null;
      else
        switch (s) {
          case "forwards": {
            var A = tA(t.child), W;
            A === null ? (W = t.child, t.child = null) : (W = A.sibling, A.sibling = null), ME(
              t,
              !1,
              // isBackwards
              W,
              A,
              p
            );
            break;
          }
          case "backwards": {
            var V = null, te = t.child;
            for (t.child = null; te !== null; ) {
              var ne = te.alternate;
              if (ne !== null && Oy(ne) === null) {
                t.child = te;
                break;
              }
              var se = te.sibling;
              te.sibling = V, V = te, te = se;
            }
            ME(
              t,
              !0,
              // isBackwards
              V,
              null,
              // last
              p
            );
            break;
          }
          case "together": {
            ME(
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
    function iA(e, t, a) {
      $S(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Dd(t, null, i, a) : Wa(e, t, i, a), t.child;
    }
    var Bx = !1;
    function oA(e, t, a) {
      var i = t.type, s = i._context, p = t.pendingProps, v = t.memoizedProps, w = p.value;
      {
        "value" in p || Bx || (Bx = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && _o(b, p, "prop", "Context.Provider");
      }
      if (OC(t, s, w), v !== null) {
        var T = v.value;
        if (at(T, w)) {
          if (v.children === p.children && !iy())
            return du(e, t, a);
        } else
          eD(t, s, a);
      }
      var A = p.children;
      return Wa(e, t, A, a), t.child;
    }
    var Vx = !1;
    function lA(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Vx || (Vx = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var s = t.pendingProps, p = s.children;
      typeof p != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Od(t, a);
      var v = Fr(i);
      Pu(t);
      var w;
      return Uh.current = t, Hr(!0), w = p(v), Hr(!1), Il(), t.flags |= xi, Wa(e, t, w, a), t.child;
    }
    function Fh() {
      Ao = !0;
    }
    function Xy(e, t) {
      (t.mode & dt) === gt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= kn);
    }
    function du(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), xx(), Xh(t.lanes), Da(a, t.childLanes) ? (dD(e, t), t.child) : null;
    }
    function uA(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var s = i.child;
          if (s === null)
            throw new Error("Expected parent to have a child.");
          for (; s.sibling !== t; )
            if (s = s.sibling, s === null)
              throw new Error("Expected to find the previous sibling.");
          s.sibling = a;
        }
        var p = i.deletions;
        return p === null ? (i.deletions = [e], i.flags |= nn) : p.push(e), a.flags |= kn, a;
      }
    }
    function jE(e, t) {
      var a = e.lanes;
      return !!Da(a, t);
    }
    function sA(e, t, a) {
      switch (t.tag) {
        case D:
          jx(t), t.stateNode, Td();
          break;
        case U:
          QC(t);
          break;
        case k: {
          var i = t.type;
          hl(i) && ly(t);
          break;
        }
        case j:
          $S(t, t.stateNode.containerInfo);
          break;
        case fe: {
          var s = t.memoizedProps.value, p = t.type._context;
          OC(t, p, s);
          break;
        }
        case X:
          {
            var v = Da(a, t.childLanes);
            v && (t.flags |= st);
            {
              var w = t.stateNode;
              w.effectDuration = 0, w.passiveEffectDuration = 0;
            }
          }
          break;
        case Ae: {
          var b = t.memoizedState;
          if (b !== null) {
            if (b.dehydrated !== null)
              return ys(t, Nd(Oo.current)), t.flags |= kt, null;
            var T = t.child, A = T.childLanes;
            if (Da(a, A))
              return Ux(e, t, a);
            ys(t, Nd(Oo.current));
            var W = du(e, t, a);
            return W !== null ? W.sibling : null;
          } else
            ys(t, Nd(Oo.current));
          break;
        }
        case ge: {
          var V = (e.flags & kt) !== yt, te = Da(a, t.childLanes);
          if (V) {
            if (te)
              return $x(e, t, a);
            t.flags |= kt;
          }
          var ne = t.memoizedState;
          if (ne !== null && (ne.rendering = null, ne.tail = null, ne.lastEffect = null), ys(t, Oo.current), te)
            break;
          return null;
        }
        case Z:
        case ie:
          return t.lanes = pe, Nx(e, t, a);
      }
      return du(e, t, a);
    }
    function Ix(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return uA(e, t, fw(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, s = t.pendingProps;
        if (i !== s || iy() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ao = !0;
        else {
          var p = jE(e, a);
          if (!p && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & kt) === yt)
            return Ao = !1, sA(e, t, a);
          (e.flags & xf) !== yt ? Ao = !0 : Ao = !1;
        }
      } else if (Ao = !1, ua() && jO(t)) {
        var v = t.index, w = zO();
        yC(t, w, v);
      }
      switch (t.lanes = pe, t.tag) {
        case R:
          return ID(e, t, t.type, a);
        case we: {
          var b = t.elementType;
          return BD(e, t, b, a);
        }
        case O: {
          var T = t.type, A = t.pendingProps, W = t.elementType === T ? A : ko(T, A);
          return TE(e, t, T, W, a);
        }
        case k: {
          var V = t.type, te = t.pendingProps, ne = t.elementType === V ? te : ko(V, te);
          return Mx(e, t, V, ne, a);
        }
        case D:
          return FD(e, t, a);
        case U:
          return HD(e, t, a);
        case H:
          return $D(e, t);
        case Ae:
          return Ux(e, t, a);
        case j:
          return iA(e, t, a);
        case Re: {
          var se = t.type, Ze = t.pendingProps, St = t.elementType === se ? Ze : ko(se, Ze);
          return Ox(e, t, se, St, a);
        }
        case oe:
          return zD(e, t, a);
        case ve:
          return UD(e, t, a);
        case X:
          return PD(e, t, a);
        case fe:
          return oA(e, t, a);
        case xe:
          return lA(e, t, a);
        case tt: {
          var pt = t.type, Kt = t.pendingProps, It = ko(pt, Kt);
          if (t.type !== t.elementType) {
            var Q = pt.propTypes;
            Q && _o(
              Q,
              It,
              // Resolved for outer only
              "prop",
              Jt(pt)
            );
          }
          return It = ko(pt.type, It), Dx(e, t, pt, It, a);
        }
        case q:
          return Ax(e, t, t.type, t.pendingProps, a);
        case ke: {
          var ce = t.type, G = t.pendingProps, De = t.elementType === ce ? G : ko(ce, G);
          return VD(e, t, ce, De, a);
        }
        case ge:
          return $x(e, t, a);
        case Ne:
          break;
        case Z:
          return Nx(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pd(e) {
      e.flags |= st;
    }
    function Wx(e) {
      e.flags |= Ha, e.flags |= Hi;
    }
    var Yx, zE, qx, Qx;
    Yx = function(e, t, a, i) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === U || s.tag === H)
          Nk(e, s.stateNode);
        else if (s.tag !== j) {
          if (s.child !== null) {
            s.child.return = s, s = s.child;
            continue;
          }
        }
        if (s === t)
          return;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === t)
            return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, zE = function(e, t) {
    }, qx = function(e, t, a, i, s) {
      var p = e.memoizedProps;
      if (p !== i) {
        var v = t.stateNode, w = BS(), b = Mk(v, a, p, i, s, w);
        t.updateQueue = b, b && Pd(t);
      }
    }, Qx = function(e, t, a, i) {
      a !== i && Pd(t);
    };
    function Hh(e, t) {
      if (!ua())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var s = e.tail, p = null; s !== null; )
              s.alternate !== null && (p = s), s = s.sibling;
            p === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : p.sibling = null;
            break;
          }
        }
    }
    function ca(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = pe, i = yt;
      if (t) {
        if ((e.mode & en) !== gt) {
          for (var b = e.selfBaseDuration, T = e.child; T !== null; )
            a = Mt(a, Mt(T.lanes, T.childLanes)), i |= T.subtreeFlags & Br, i |= T.flags & Br, b += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = b;
        } else
          for (var A = e.child; A !== null; )
            a = Mt(a, Mt(A.lanes, A.childLanes)), i |= A.subtreeFlags & Br, i |= A.flags & Br, A.return = e, A = A.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & en) !== gt) {
          for (var s = e.actualDuration, p = e.selfBaseDuration, v = e.child; v !== null; )
            a = Mt(a, Mt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, s += v.actualDuration, p += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = s, e.treeBaseDuration = p;
        } else
          for (var w = e.child; w !== null; )
            a = Mt(a, Mt(w.lanes, w.childLanes)), i |= w.subtreeFlags, i |= w.flags, w.return = e, w = w.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function cA(e, t, a) {
      if (GO() && (t.mode & dt) !== gt && (t.flags & kt) === yt)
        return xC(t), Td(), t.flags |= ia | Jo | $r, !1;
      var i = dy(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (qO(t), ca(t), (t.mode & en) !== gt) {
            var s = a !== null;
            if (s) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Td(), (t.flags & kt) === yt && (t.memoizedState = null), t.flags |= st, ca(t), (t.mode & en) !== gt) {
            var v = a !== null;
            if (v) {
              var w = t.child;
              w !== null && (t.treeBaseDuration -= w.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return _C(), !0;
    }
    function Gx(e, t, a) {
      var i = t.pendingProps;
      switch (uS(t), t.tag) {
        case R:
        case we:
        case q:
        case O:
        case Re:
        case oe:
        case ve:
        case X:
        case xe:
        case tt:
          return ca(t), null;
        case k: {
          var s = t.type;
          return hl(s) && oy(t), ca(t), null;
        }
        case D: {
          var p = t.stateNode;
          if (Ad(t), aS(t), qS(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), e === null || e.child === null) {
            var v = dy(t);
            if (v)
              Pd(t);
            else if (e !== null) {
              var w = e.memoizedState;
              // Check if this is a client root
              (!w.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ia) !== yt) && (t.flags |= br, _C());
            }
          }
          return zE(e, t), ca(t), null;
        }
        case U: {
          VS(t);
          var b = qC(), T = t.type;
          if (e !== null && t.stateNode != null)
            qx(e, t, T, i, b), e.ref !== t.ref && Wx(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return ca(t), null;
            }
            var A = BS(), W = dy(t);
            if (W)
              WO(t, b, A) && Pd(t);
            else {
              var V = Ak(T, i, b, A, t);
              Yx(V, t, !1, !1), t.stateNode = V, Lk(V, T, i, b) && Pd(t);
            }
            t.ref !== null && Wx(t);
          }
          return ca(t), null;
        }
        case H: {
          var te = i;
          if (e && t.stateNode != null) {
            var ne = e.memoizedProps;
            Qx(e, t, ne, te);
          } else {
            if (typeof te != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var se = qC(), Ze = BS(), St = dy(t);
            St ? YO(t) && Pd(t) : t.stateNode = jk(te, se, Ze, t);
          }
          return ca(t), null;
        }
        case Ae: {
          Ld(t);
          var pt = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Kt = cA(e, t, pt);
            if (!Kt)
              return t.flags & $r ? t : null;
          }
          if ((t.flags & kt) !== yt)
            return t.lanes = a, (t.mode & en) !== gt && gE(t), t;
          var It = pt !== null, Q = e !== null && e.memoizedState !== null;
          if (It !== Q && It) {
            var ce = t.child;
            if (ce.flags |= Xo, (t.mode & dt) !== gt) {
              var G = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !J);
              G || IS(Oo.current, KC) ? fN() : ew();
            }
          }
          var De = t.updateQueue;
          if (De !== null && (t.flags |= st), ca(t), (t.mode & en) !== gt && It) {
            var et = t.child;
            et !== null && (t.treeBaseDuration -= et.treeBaseDuration);
          }
          return null;
        }
        case j:
          return Ad(t), zE(e, t), e === null && kO(t.stateNode.containerInfo), ca(t), null;
        case fe:
          var Qe = t.type._context;
          return yS(Qe, t), ca(t), null;
        case ke: {
          var xt = t.type;
          return hl(xt) && oy(t), ca(t), null;
        }
        case ge: {
          Ld(t);
          var Nt = t.memoizedState;
          if (Nt === null)
            return ca(t), null;
          var bn = (t.flags & kt) !== yt, an = Nt.rendering;
          if (an === null)
            if (bn)
              Hh(Nt, !1);
            else {
              var Nr = pN() && (e === null || (e.flags & kt) === yt);
              if (!Nr)
                for (var on = t.child; on !== null; ) {
                  var xr = Oy(on);
                  if (xr !== null) {
                    bn = !0, t.flags |= kt, Hh(Nt, !1);
                    var ja = xr.updateQueue;
                    return ja !== null && (t.updateQueue = ja, t.flags |= st), t.subtreeFlags = yt, pD(t, a), ys(t, WS(Oo.current, Oh)), t.child;
                  }
                  on = on.sibling;
                }
              Nt.tail !== null && Cr() > m_() && (t.flags |= kt, bn = !0, Hh(Nt, !1), t.lanes = Pp);
            }
          else {
            if (!bn) {
              var va = Oy(an);
              if (va !== null) {
                t.flags |= kt, bn = !0;
                var ki = va.updateQueue;
                if (ki !== null && (t.updateQueue = ki, t.flags |= st), Hh(Nt, !0), Nt.tail === null && Nt.tailMode === "hidden" && !an.alternate && !ua())
                  return ca(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Cr() * 2 - Nt.renderingStartTime > m_() && a !== Ia && (t.flags |= kt, bn = !0, Hh(Nt, !1), t.lanes = Pp);
            }
            if (Nt.isBackwards)
              an.sibling = t.child, t.child = an;
            else {
              var Qa = Nt.last;
              Qa !== null ? Qa.sibling = an : t.child = an, Nt.last = an;
            }
          }
          if (Nt.tail !== null) {
            var Ga = Nt.tail;
            Nt.rendering = Ga, Nt.tail = Ga.sibling, Nt.renderingStartTime = Cr(), Ga.sibling = null;
            var za = Oo.current;
            return bn ? za = WS(za, Oh) : za = Nd(za), ys(t, za), Ga;
          }
          return ca(t), null;
        }
        case Ne:
          break;
        case Z:
        case ie: {
          ZE(t);
          var yu = t.memoizedState, Yd = yu !== null;
          if (e !== null) {
            var nv = e.memoizedState, bl = nv !== null;
            bl !== Yd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !F && (t.flags |= Xo);
          }
          return !Yd || (t.mode & dt) === gt ? ca(t) : Da(wl, Ia) && (ca(t), t.subtreeFlags & (kn | st) && (t.flags |= Xo)), null;
        }
        case de:
          return null;
        case ue:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function fA(e, t, a) {
      switch (uS(t), t.tag) {
        case k: {
          var i = t.type;
          hl(i) && oy(t);
          var s = t.flags;
          return s & $r ? (t.flags = s & ~$r | kt, (t.mode & en) !== gt && gE(t), t) : null;
        }
        case D: {
          t.stateNode, Ad(t), aS(t), qS();
          var p = t.flags;
          return (p & $r) !== yt && (p & kt) === yt ? (t.flags = p & ~$r | kt, t) : null;
        }
        case U:
          return VS(t), null;
        case Ae: {
          Ld(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Td();
          }
          var w = t.flags;
          return w & $r ? (t.flags = w & ~$r | kt, (t.mode & en) !== gt && gE(t), t) : null;
        }
        case ge:
          return Ld(t), null;
        case j:
          return Ad(t), null;
        case fe:
          var b = t.type._context;
          return yS(b, t), null;
        case Z:
        case ie:
          return ZE(t), null;
        case de:
          return null;
        default:
          return null;
      }
    }
    function Kx(e, t, a) {
      switch (uS(t), t.tag) {
        case k: {
          var i = t.type.childContextTypes;
          i != null && oy(t);
          break;
        }
        case D: {
          t.stateNode, Ad(t), aS(t), qS();
          break;
        }
        case U: {
          VS(t);
          break;
        }
        case j:
          Ad(t);
          break;
        case Ae:
          Ld(t);
          break;
        case ge:
          Ld(t);
          break;
        case fe:
          var s = t.type._context;
          yS(s, t);
          break;
        case Z:
        case ie:
          ZE(t);
          break;
      }
    }
    var Xx = null;
    Xx = /* @__PURE__ */ new Set();
    var Jy = !1, fa = !1, dA = typeof WeakSet == "function" ? WeakSet : Set, it = null, Fd = null, Hd = null;
    function pA(e) {
      Ci(null, function() {
        throw e;
      }), yo();
    }
    var hA = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & en)
        try {
          Sl(), t.componentWillUnmount();
        } finally {
          gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Jx(e, t) {
      try {
        Es(Wr, e);
      } catch (a) {
        Bn(e, t, a);
      }
    }
    function UE(e, t, a) {
      try {
        hA(e, a);
      } catch (i) {
        Bn(e, t, i);
      }
    }
    function vA(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Bn(e, t, i);
      }
    }
    function Zx(e, t) {
      try {
        t_(e);
      } catch (a) {
        Bn(e, t, a);
      }
    }
    function $d(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Le && Fe && e.mode & en)
              try {
                Sl(), i = a(null);
              } finally {
                gl(e);
              }
            else
              i = a(null);
          } catch (s) {
            Bn(e, t, s);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Rt(e));
        } else
          a.current = null;
    }
    function Zy(e, t, a) {
      try {
        a();
      } catch (i) {
        Bn(e, t, i);
      }
    }
    var e_ = !1;
    function mA(e, t) {
      Ok(e.containerInfo), it = t, yA();
      var a = e_;
      return e_ = !1, a;
    }
    function yA() {
      for (; it !== null; ) {
        var e = it, t = e.child;
        (e.subtreeFlags & Ca) !== yt && t !== null ? (t.return = e, it = t) : gA();
      }
    }
    function gA() {
      for (; it !== null; ) {
        var e = it;
        Xn(e);
        try {
          SA(e);
        } catch (a) {
          Bn(e, e.return, a);
        }
        Pn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, it = t;
          return;
        }
        it = e.return;
      }
    }
    function SA(e) {
      var t = e.alternate, a = e.flags;
      if ((a & br) !== yt) {
        switch (Xn(e), e.tag) {
          case O:
          case Re:
          case q:
            break;
          case k: {
            if (t !== null) {
              var i = t.memoizedProps, s = t.memoizedState, p = e.stateNode;
              e.type === e.elementType && !Wc && (p.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(e) || "instance"), p.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(e) || "instance"));
              var v = p.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ko(e.type, i), s);
              {
                var w = Xx;
                v === void 0 && !w.has(e.type) && (w.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Rt(e)));
              }
              p.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case D: {
            {
              var b = e.stateNode;
              eO(b.containerInfo);
            }
            break;
          }
          case U:
          case H:
          case j:
          case ke:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Pn();
      }
    }
    function No(e, t, a) {
      var i = t.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var p = s.next, v = p;
        do {
          if ((v.tag & e) === e) {
            var w = v.destroy;
            v.destroy = void 0, w !== void 0 && ((e & sa) !== pi ? um(t) : (e & Wr) !== pi && Fu(t), (e & vl) !== pi && Zh(!0), Zy(t, a, w), (e & vl) !== pi && Zh(!1), (e & sa) !== pi ? sm() : (e & Wr) !== pi && sc());
          }
          v = v.next;
        } while (v !== p);
      }
    }
    function Es(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var s = i.next, p = s;
        do {
          if ((p.tag & e) === e) {
            (e & sa) !== pi ? Mp(t) : (e & Wr) !== pi && cm(t);
            var v = p.create;
            (e & vl) !== pi && Zh(!0), p.destroy = v(), (e & vl) !== pi && Zh(!1), (e & sa) !== pi ? Df() : (e & Wr) !== pi && jp();
            {
              var w = p.destroy;
              if (w !== void 0 && typeof w != "function") {
                var b = void 0;
                (p.tag & Wr) !== yt ? b = "useLayoutEffect" : (p.tag & vl) !== yt ? b = "useInsertionEffect" : b = "useEffect";
                var T = void 0;
                w === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof w.then == "function" ? T = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + w, y("%s must not return anything besides a function, which is used for clean-up.%s", b, T);
              }
            }
          }
          p = p.next;
        } while (p !== s);
      }
    }
    function EA(e, t) {
      if ((t.flags & st) !== yt)
        switch (t.tag) {
          case X: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, s = i.id, p = i.onPostCommit, v = bx(), w = t.alternate === null ? "mount" : "update";
            wx() && (w = "nested-update"), typeof p == "function" && p(s, w, a, v);
            var b = t.return;
            e: for (; b !== null; ) {
              switch (b.tag) {
                case D:
                  var T = b.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
                case X:
                  var A = b.stateNode;
                  A.passiveEffectDuration += a;
                  break e;
              }
              b = b.return;
            }
            break;
          }
        }
    }
    function wA(e, t, a, i) {
      if ((a.flags & _i) !== yt)
        switch (a.tag) {
          case O:
          case Re:
          case q: {
            if (!fa)
              if (a.mode & en)
                try {
                  Sl(), Es(Wr | Ir, a);
                } finally {
                  gl(a);
                }
              else
                Es(Wr | Ir, a);
            break;
          }
          case k: {
            var s = a.stateNode;
            if (a.flags & st && !fa)
              if (t === null)
                if (a.type === a.elementType && !Wc && (s.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(a) || "instance"), s.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(a) || "instance")), a.mode & en)
                  try {
                    Sl(), s.componentDidMount();
                  } finally {
                    gl(a);
                  }
                else
                  s.componentDidMount();
              else {
                var p = a.elementType === a.type ? t.memoizedProps : ko(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Wc && (s.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(a) || "instance"), s.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(a) || "instance")), a.mode & en)
                  try {
                    Sl(), s.componentDidUpdate(p, v, s.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    gl(a);
                  }
                else
                  s.componentDidUpdate(p, v, s.__reactInternalSnapshotBeforeUpdate);
              }
            var w = a.updateQueue;
            w !== null && (a.type === a.elementType && !Wc && (s.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(a) || "instance"), s.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(a) || "instance")), jC(a, w, s));
            break;
          }
          case D: {
            var b = a.updateQueue;
            if (b !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case U:
                    T = a.child.stateNode;
                    break;
                  case k:
                    T = a.child.stateNode;
                    break;
                }
              jC(a, b, T);
            }
            break;
          }
          case U: {
            var A = a.stateNode;
            if (t === null && a.flags & st) {
              var W = a.type, V = a.memoizedProps;
              Hk(A, W, V);
            }
            break;
          }
          case H:
            break;
          case j:
            break;
          case X: {
            {
              var te = a.memoizedProps, ne = te.onCommit, se = te.onRender, Ze = a.stateNode.effectDuration, St = bx(), pt = t === null ? "mount" : "update";
              wx() && (pt = "nested-update"), typeof se == "function" && se(a.memoizedProps.id, pt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, St);
              {
                typeof ne == "function" && ne(a.memoizedProps.id, pt, Ze, St), gN(a);
                var Kt = a.return;
                e: for (; Kt !== null; ) {
                  switch (Kt.tag) {
                    case D:
                      var It = Kt.stateNode;
                      It.effectDuration += Ze;
                      break e;
                    case X:
                      var Q = Kt.stateNode;
                      Q.effectDuration += Ze;
                      break e;
                  }
                  Kt = Kt.return;
                }
              }
            }
            break;
          }
          case Ae: {
            OA(e, a);
            break;
          }
          case ge:
          case ke:
          case Ne:
          case Z:
          case ie:
          case ue:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      fa || a.flags & Ha && t_(a);
    }
    function bA(e) {
      switch (e.tag) {
        case O:
        case Re:
        case q: {
          if (e.mode & en)
            try {
              Sl(), Jx(e, e.return);
            } finally {
              gl(e);
            }
          else
            Jx(e, e.return);
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && vA(e, e.return, t), Zx(e, e.return);
          break;
        }
        case U: {
          Zx(e, e.return);
          break;
        }
      }
    }
    function CA(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === U) {
          if (a === null) {
            a = i;
            try {
              var s = i.stateNode;
              t ? Kk(s) : Jk(i.stateNode, i.memoizedProps);
            } catch (v) {
              Bn(e, e.return, v);
            }
          }
        } else if (i.tag === H) {
          if (a === null)
            try {
              var p = i.stateNode;
              t ? Xk(p) : Zk(p, i.memoizedProps);
            } catch (v) {
              Bn(e, e.return, v);
            }
        } else if (!((i.tag === Z || i.tag === ie) && i.memoizedState !== null && i !== e)) {
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
    function t_(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case U:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var s;
          if (e.mode & en)
            try {
              Sl(), s = t(i);
            } finally {
              gl(e);
            }
          else
            s = t(i);
          typeof s == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Rt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Rt(e)), t.current = i;
      }
    }
    function xA(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function n_(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, n_(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === U) {
          var a = e.stateNode;
          a !== null && AO(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function _A(e) {
      for (var t = e.return; t !== null; ) {
        if (r_(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function r_(e) {
      return e.tag === U || e.tag === D || e.tag === j;
    }
    function a_(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || r_(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== U && t.tag !== H && t.tag !== Oe; ) {
          if (t.flags & kn || t.child === null || t.tag === j)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & kn))
          return t.stateNode;
      }
    }
    function RA(e) {
      var t = _A(e);
      switch (t.tag) {
        case U: {
          var a = t.stateNode;
          t.flags & ei && (iC(a), t.flags &= ~ei);
          var i = a_(e);
          FE(e, i, a);
          break;
        }
        case D:
        case j: {
          var s = t.stateNode.containerInfo, p = a_(e);
          PE(e, p, s);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function PE(e, t, a) {
      var i = e.tag, s = i === U || i === H;
      if (s) {
        var p = e.stateNode;
        t ? Yk(a, p, t) : Ik(a, p);
      } else if (i !== j) {
        var v = e.child;
        if (v !== null) {
          PE(v, t, a);
          for (var w = v.sibling; w !== null; )
            PE(w, t, a), w = w.sibling;
        }
      }
    }
    function FE(e, t, a) {
      var i = e.tag, s = i === U || i === H;
      if (s) {
        var p = e.stateNode;
        t ? Wk(a, p, t) : Vk(a, p);
      } else if (i !== j) {
        var v = e.child;
        if (v !== null) {
          FE(v, t, a);
          for (var w = v.sibling; w !== null; )
            FE(w, t, a), w = w.sibling;
        }
      }
    }
    var da = null, Lo = !1;
    function TA(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case U: {
              da = i.stateNode, Lo = !1;
              break e;
            }
            case D: {
              da = i.stateNode.containerInfo, Lo = !0;
              break e;
            }
            case j: {
              da = i.stateNode.containerInfo, Lo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (da === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        i_(e, t, a), da = null, Lo = !1;
      }
      xA(a);
    }
    function ws(e, t, a) {
      for (var i = a.child; i !== null; )
        i_(e, t, i), i = i.sibling;
    }
    function i_(e, t, a) {
      switch (om(a), a.tag) {
        case U:
          fa || $d(a, t);
        case H: {
          {
            var i = da, s = Lo;
            da = null, ws(e, t, a), da = i, Lo = s, da !== null && (Lo ? Qk(da, a.stateNode) : qk(da, a.stateNode));
          }
          return;
        }
        case Oe: {
          da !== null && (Lo ? Gk(da, a.stateNode) : K0(da, a.stateNode));
          return;
        }
        case j: {
          {
            var p = da, v = Lo;
            da = a.stateNode.containerInfo, Lo = !0, ws(e, t, a), da = p, Lo = v;
          }
          return;
        }
        case O:
        case Re:
        case tt:
        case q: {
          if (!fa) {
            var w = a.updateQueue;
            if (w !== null) {
              var b = w.lastEffect;
              if (b !== null) {
                var T = b.next, A = T;
                do {
                  var W = A, V = W.destroy, te = W.tag;
                  V !== void 0 && ((te & vl) !== pi ? Zy(a, t, V) : (te & Wr) !== pi && (Fu(a), a.mode & en ? (Sl(), Zy(a, t, V), gl(a)) : Zy(a, t, V), sc())), A = A.next;
                } while (A !== T);
              }
            }
          }
          ws(e, t, a);
          return;
        }
        case k: {
          if (!fa) {
            $d(a, t);
            var ne = a.stateNode;
            typeof ne.componentWillUnmount == "function" && UE(a, t, ne);
          }
          ws(e, t, a);
          return;
        }
        case Ne: {
          ws(e, t, a);
          return;
        }
        case Z: {
          if (
            // TODO: Remove this dead flag
            a.mode & dt
          ) {
            var se = fa;
            fa = se || a.memoizedState !== null, ws(e, t, a), fa = se;
          } else
            ws(e, t, a);
          break;
        }
        default: {
          ws(e, t, a);
          return;
        }
      }
    }
    function kA(e) {
      e.memoizedState;
    }
    function OA(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var s = i.memoizedState;
          if (s !== null) {
            var p = s.dehydrated;
            p !== null && hO(p);
          }
        }
      }
    }
    function o_(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new dA()), t.forEach(function(i) {
          var s = _N.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Va)
              if (Fd !== null && Hd !== null)
                Jh(Hd, Fd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(s, s);
          }
        });
      }
    }
    function DA(e, t, a) {
      Fd = a, Hd = e, Xn(t), l_(t, e), Xn(t), Fd = null, Hd = null;
    }
    function Mo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var s = 0; s < i.length; s++) {
          var p = i[s];
          try {
            TA(e, t, p);
          } catch (b) {
            Bn(p, t, b);
          }
        }
      var v = $s();
      if (t.subtreeFlags & xa)
        for (var w = t.child; w !== null; )
          Xn(w), l_(w, e), w = w.sibling;
      Xn(v);
    }
    function l_(e, t, a) {
      var i = e.alternate, s = e.flags;
      switch (e.tag) {
        case O:
        case Re:
        case tt:
        case q: {
          if (Mo(t, e), El(e), s & st) {
            try {
              No(vl | Ir, e, e.return), Es(vl | Ir, e);
            } catch (xt) {
              Bn(e, e.return, xt);
            }
            if (e.mode & en) {
              try {
                Sl(), No(Wr | Ir, e, e.return);
              } catch (xt) {
                Bn(e, e.return, xt);
              }
              gl(e);
            } else
              try {
                No(Wr | Ir, e, e.return);
              } catch (xt) {
                Bn(e, e.return, xt);
              }
          }
          return;
        }
        case k: {
          Mo(t, e), El(e), s & Ha && i !== null && $d(i, i.return);
          return;
        }
        case U: {
          Mo(t, e), El(e), s & Ha && i !== null && $d(i, i.return);
          {
            if (e.flags & ei) {
              var p = e.stateNode;
              try {
                iC(p);
              } catch (xt) {
                Bn(e, e.return, xt);
              }
            }
            if (s & st) {
              var v = e.stateNode;
              if (v != null) {
                var w = e.memoizedProps, b = i !== null ? i.memoizedProps : w, T = e.type, A = e.updateQueue;
                if (e.updateQueue = null, A !== null)
                  try {
                    $k(v, A, T, b, w, e);
                  } catch (xt) {
                    Bn(e, e.return, xt);
                  }
              }
            }
          }
          return;
        }
        case H: {
          if (Mo(t, e), El(e), s & st) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var W = e.stateNode, V = e.memoizedProps, te = i !== null ? i.memoizedProps : V;
            try {
              Bk(W, te, V);
            } catch (xt) {
              Bn(e, e.return, xt);
            }
          }
          return;
        }
        case D: {
          if (Mo(t, e), El(e), s & st && i !== null) {
            var ne = i.memoizedState;
            if (ne.isDehydrated)
              try {
                pO(t.containerInfo);
              } catch (xt) {
                Bn(e, e.return, xt);
              }
          }
          return;
        }
        case j: {
          Mo(t, e), El(e);
          return;
        }
        case Ae: {
          Mo(t, e), El(e);
          var se = e.child;
          if (se.flags & Xo) {
            var Ze = se.stateNode, St = se.memoizedState, pt = St !== null;
            if (Ze.isHidden = pt, pt) {
              var Kt = se.alternate !== null && se.alternate.memoizedState !== null;
              Kt || cN();
            }
          }
          if (s & st) {
            try {
              kA(e);
            } catch (xt) {
              Bn(e, e.return, xt);
            }
            o_(e);
          }
          return;
        }
        case Z: {
          var It = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & dt
          ) {
            var Q = fa;
            fa = Q || It, Mo(t, e), fa = Q;
          } else
            Mo(t, e);
          if (El(e), s & Xo) {
            var ce = e.stateNode, G = e.memoizedState, De = G !== null, et = e;
            if (ce.isHidden = De, De && !It && (et.mode & dt) !== gt) {
              it = et;
              for (var Qe = et.child; Qe !== null; )
                it = Qe, NA(Qe), Qe = Qe.sibling;
            }
            CA(et, De);
          }
          return;
        }
        case ge: {
          Mo(t, e), El(e), s & st && o_(e);
          return;
        }
        case Ne:
          return;
        default: {
          Mo(t, e), El(e);
          return;
        }
      }
    }
    function El(e) {
      var t = e.flags;
      if (t & kn) {
        try {
          RA(e);
        } catch (a) {
          Bn(e, e.return, a);
        }
        e.flags &= ~kn;
      }
      t & Fi && (e.flags &= ~Fi);
    }
    function AA(e, t, a) {
      Fd = a, Hd = t, it = e, u_(e, t, a), Fd = null, Hd = null;
    }
    function u_(e, t, a) {
      for (var i = (e.mode & dt) !== gt; it !== null; ) {
        var s = it, p = s.child;
        if (s.tag === Z && i) {
          var v = s.memoizedState !== null, w = v || Jy;
          if (w) {
            HE(e, t, a);
            continue;
          } else {
            var b = s.alternate, T = b !== null && b.memoizedState !== null, A = T || fa, W = Jy, V = fa;
            Jy = w, fa = A, fa && !V && (it = s, LA(s));
            for (var te = p; te !== null; )
              it = te, u_(
                te,
                // New root; bubble back up to here and stop.
                t,
                a
              ), te = te.sibling;
            it = s, Jy = W, fa = V, HE(e, t, a);
            continue;
          }
        }
        (s.subtreeFlags & _i) !== yt && p !== null ? (p.return = s, it = p) : HE(e, t, a);
      }
    }
    function HE(e, t, a) {
      for (; it !== null; ) {
        var i = it;
        if ((i.flags & _i) !== yt) {
          var s = i.alternate;
          Xn(i);
          try {
            wA(t, s, i, a);
          } catch (v) {
            Bn(i, i.return, v);
          }
          Pn();
        }
        if (i === e) {
          it = null;
          return;
        }
        var p = i.sibling;
        if (p !== null) {
          p.return = i.return, it = p;
          return;
        }
        it = i.return;
      }
    }
    function NA(e) {
      for (; it !== null; ) {
        var t = it, a = t.child;
        switch (t.tag) {
          case O:
          case Re:
          case tt:
          case q: {
            if (t.mode & en)
              try {
                Sl(), No(Wr, t, t.return);
              } finally {
                gl(t);
              }
            else
              No(Wr, t, t.return);
            break;
          }
          case k: {
            $d(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && UE(t, t.return, i);
            break;
          }
          case U: {
            $d(t, t.return);
            break;
          }
          case Z: {
            var s = t.memoizedState !== null;
            if (s) {
              s_(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, it = a) : s_(e);
      }
    }
    function s_(e) {
      for (; it !== null; ) {
        var t = it;
        if (t === e) {
          it = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, it = a;
          return;
        }
        it = t.return;
      }
    }
    function LA(e) {
      for (; it !== null; ) {
        var t = it, a = t.child;
        if (t.tag === Z) {
          var i = t.memoizedState !== null;
          if (i) {
            c_(e);
            continue;
          }
        }
        a !== null ? (a.return = t, it = a) : c_(e);
      }
    }
    function c_(e) {
      for (; it !== null; ) {
        var t = it;
        Xn(t);
        try {
          bA(t);
        } catch (i) {
          Bn(t, t.return, i);
        }
        if (Pn(), t === e) {
          it = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, it = a;
          return;
        }
        it = t.return;
      }
    }
    function MA(e, t, a, i) {
      it = t, jA(t, e, a, i);
    }
    function jA(e, t, a, i) {
      for (; it !== null; ) {
        var s = it, p = s.child;
        (s.subtreeFlags & _a) !== yt && p !== null ? (p.return = s, it = p) : zA(e, t, a, i);
      }
    }
    function zA(e, t, a, i) {
      for (; it !== null; ) {
        var s = it;
        if ((s.flags & ba) !== yt) {
          Xn(s);
          try {
            UA(t, s, a, i);
          } catch (v) {
            Bn(s, s.return, v);
          }
          Pn();
        }
        if (s === e) {
          it = null;
          return;
        }
        var p = s.sibling;
        if (p !== null) {
          p.return = s.return, it = p;
          return;
        }
        it = s.return;
      }
    }
    function UA(e, t, a, i) {
      switch (t.tag) {
        case O:
        case Re:
        case q: {
          if (t.mode & en) {
            yE();
            try {
              Es(sa | Ir, t);
            } finally {
              mE(t);
            }
          } else
            Es(sa | Ir, t);
          break;
        }
      }
    }
    function PA(e) {
      it = e, FA();
    }
    function FA() {
      for (; it !== null; ) {
        var e = it, t = e.child;
        if ((it.flags & nn) !== yt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var s = a[i];
              it = s, BA(s, e);
            }
            {
              var p = e.alternate;
              if (p !== null) {
                var v = p.child;
                if (v !== null) {
                  p.child = null;
                  do {
                    var w = v.sibling;
                    v.sibling = null, v = w;
                  } while (v !== null);
                }
              }
            }
            it = e;
          }
        }
        (e.subtreeFlags & _a) !== yt && t !== null ? (t.return = e, it = t) : HA();
      }
    }
    function HA() {
      for (; it !== null; ) {
        var e = it;
        (e.flags & ba) !== yt && (Xn(e), $A(e), Pn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, it = t;
          return;
        }
        it = e.return;
      }
    }
    function $A(e) {
      switch (e.tag) {
        case O:
        case Re:
        case q: {
          e.mode & en ? (yE(), No(sa | Ir, e, e.return), mE(e)) : No(sa | Ir, e, e.return);
          break;
        }
      }
    }
    function BA(e, t) {
      for (; it !== null; ) {
        var a = it;
        Xn(a), IA(a, t), Pn();
        var i = a.child;
        i !== null ? (i.return = a, it = i) : VA(e);
      }
    }
    function VA(e) {
      for (; it !== null; ) {
        var t = it, a = t.sibling, i = t.return;
        if (n_(t), t === e) {
          it = null;
          return;
        }
        if (a !== null) {
          a.return = i, it = a;
          return;
        }
        it = i;
      }
    }
    function IA(e, t) {
      switch (e.tag) {
        case O:
        case Re:
        case q: {
          e.mode & en ? (yE(), No(sa, e, t), mE(e)) : No(sa, e, t);
          break;
        }
      }
    }
    function WA(e) {
      switch (e.tag) {
        case O:
        case Re:
        case q: {
          try {
            Es(Wr | Ir, e);
          } catch (a) {
            Bn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Bn(e, e.return, a);
          }
          break;
        }
      }
    }
    function YA(e) {
      switch (e.tag) {
        case O:
        case Re:
        case q: {
          try {
            Es(sa | Ir, e);
          } catch (t) {
            Bn(e, e.return, t);
          }
          break;
        }
      }
    }
    function qA(e) {
      switch (e.tag) {
        case O:
        case Re:
        case q: {
          try {
            No(Wr | Ir, e, e.return);
          } catch (a) {
            Bn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && UE(e, e.return, t);
          break;
        }
      }
    }
    function QA(e) {
      switch (e.tag) {
        case O:
        case Re:
        case q:
          try {
            No(sa | Ir, e, e.return);
          } catch (t) {
            Bn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var $h = Symbol.for;
      $h("selector.component"), $h("selector.has_pseudo_class"), $h("selector.role"), $h("selector.test_id"), $h("selector.text");
    }
    var GA = [];
    function KA() {
      GA.forEach(function(e) {
        return e();
      });
    }
    var XA = d.ReactCurrentActQueue;
    function JA(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function f_() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && XA.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ZA = Math.ceil, $E = d.ReactCurrentDispatcher, BE = d.ReactCurrentOwner, pa = d.ReactCurrentBatchConfig, jo = d.ReactCurrentActQueue, Qr = (
      /*             */
      0
    ), d_ = (
      /*               */
      1
    ), ha = (
      /*                */
      2
    ), Zi = (
      /*                */
      4
    ), pu = 0, Bh = 1, Yc = 2, eg = 3, Vh = 4, p_ = 5, VE = 6, Gt = Qr, Ya = null, Er = null, Gr = pe, wl = pe, IE = fs(pe), Kr = pu, Ih = null, tg = pe, Wh = pe, ng = pe, Yh = null, hi = null, WE = 0, h_ = 500, v_ = 1 / 0, eN = 500, hu = null;
    function qh() {
      v_ = Cr() + eN;
    }
    function m_() {
      return v_;
    }
    var rg = !1, YE = null, Bd = null, qc = !1, bs = null, Qh = pe, qE = [], QE = null, tN = 50, Gh = 0, GE = null, KE = !1, ag = !1, nN = 50, Vd = 0, ig = null, Kh = Ln, og = pe, y_ = !1;
    function lg() {
      return Ya;
    }
    function qa() {
      return (Gt & (ha | Zi)) !== Qr ? Cr() : (Kh !== Ln || (Kh = Cr()), Kh);
    }
    function Cs(e) {
      var t = e.mode;
      if ((t & dt) === gt)
        return Et;
      if ((Gt & ha) !== Qr && Gr !== pe)
        return Yu(Gr);
      var a = JO() !== XO;
      if (a) {
        if (pa.transition !== null) {
          var i = pa.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return og === mr && (og = Sm()), og;
      }
      var s = oi();
      if (s !== mr)
        return s;
      var p = zk();
      return p;
    }
    function rN(e) {
      var t = e.mode;
      return (t & dt) === gt ? Et : Oa();
    }
    function Xr(e, t, a, i) {
      TN(), y_ && y("useInsertionEffect must not schedule updates."), KE && (ag = !0), Zl(e, a, i), (Gt & ha) !== pe && e === Ya ? DN(t) : (Va && Kf(e, t, a), AN(t), e === Ya && ((Gt & ha) === Qr && (Wh = Mt(Wh, a)), Kr === Vh && xs(e, Gr)), vi(e, i), a === Et && Gt === Qr && (t.mode & dt) === gt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !jo.isBatchingLegacy && (qh(), mC()));
    }
    function aN(e, t, a) {
      var i = e.current;
      i.lanes = t, Zl(e, t, a), vi(e, a);
    }
    function iN(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Gt & ha) !== Qr
      );
    }
    function vi(e, t) {
      var a = e.callbackNode;
      v0(e, t);
      var i = yc(e, e === Ya ? Gr : pe);
      if (i === pe) {
        a !== null && L_(a), e.callbackNode = null, e.callbackPriority = mr;
        return;
      }
      var s = yr(i), p = e.callbackPriority;
      if (p === s && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(jo.current !== null && a !== rw)) {
        a == null && p !== Et && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && L_(a);
      var v;
      if (s === Et)
        e.tag === ds ? (jo.isBatchingLegacy !== null && (jo.didScheduleLegacyUpdate = !0), MO(E_.bind(null, e))) : vC(E_.bind(null, e)), jo.current !== null ? jo.current.push(ps) : Pk(function() {
          (Gt & (ha | Zi)) === Qr && ps();
        }), v = null;
      else {
        var w;
        switch (Vr(i)) {
          case gr:
            w = Ra;
            break;
          case wo:
            w = zu;
            break;
          case Ii:
            w = $i;
            break;
          case qu:
            w = lc;
            break;
          default:
            w = $i;
            break;
        }
        v = aw(w, g_.bind(null, e));
      }
      e.callbackPriority = s, e.callbackNode = v;
    }
    function g_(e, t) {
      if (TD(), Kh = Ln, og = pe, (Gt & (ha | Zi)) !== Qr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = mu();
      if (i && e.callbackNode !== a)
        return null;
      var s = yc(e, e === Ya ? Gr : pe);
      if (s === pe)
        return null;
      var p = !Sc(e, s) && !gm(e, s) && !t, v = p ? vN(e, s) : sg(e, s);
      if (v !== pu) {
        if (v === Yc) {
          var w = ll(e);
          w !== pe && (s = w, v = XE(e, w));
        }
        if (v === Bh) {
          var b = Ih;
          throw Qc(e, pe), xs(e, s), vi(e, Cr()), b;
        }
        if (v === VE)
          xs(e, s);
        else {
          var T = !Sc(e, s), A = e.current.alternate;
          if (T && !lN(A)) {
            if (v = sg(e, s), v === Yc) {
              var W = ll(e);
              W !== pe && (s = W, v = XE(e, W));
            }
            if (v === Bh) {
              var V = Ih;
              throw Qc(e, pe), xs(e, s), vi(e, Cr()), V;
            }
          }
          e.finishedWork = A, e.finishedLanes = s, oN(e, v, s);
        }
      }
      return vi(e, Cr()), e.callbackNode === a ? g_.bind(null, e) : null;
    }
    function XE(e, t) {
      var a = Yh;
      if (Xf(e)) {
        var i = Qc(e, t);
        i.flags |= ia, TO(e.containerInfo);
      }
      var s = sg(e, t);
      if (s !== Yc) {
        var p = hi;
        hi = a, p !== null && S_(p);
      }
      return s;
    }
    function S_(e) {
      hi === null ? hi = e : hi.push.apply(hi, e);
    }
    function oN(e, t, a) {
      switch (t) {
        case pu:
        case Bh:
          throw new Error("Root did not complete. This is a bug in React.");
        case Yc: {
          Gc(e, hi, hu);
          break;
        }
        case eg: {
          if (xs(e, a), vm(a) && // do not delay if we're inside an act() scope
          !M_()) {
            var i = WE + h_ - Cr();
            if (i > 10) {
              var s = yc(e, pe);
              if (s !== pe)
                break;
              var p = e.suspendedLanes;
              if (!Jl(p, a)) {
                qa(), Qf(e, p);
                break;
              }
              e.timeoutHandle = Q0(Gc.bind(null, e, hi, hu), i);
              break;
            }
          }
          Gc(e, hi, hu);
          break;
        }
        case Vh: {
          if (xs(e, a), ym(a))
            break;
          if (!M_()) {
            var v = Wf(e, a), w = v, b = Cr() - w, T = RN(b) - b;
            if (T > 10) {
              e.timeoutHandle = Q0(Gc.bind(null, e, hi, hu), T);
              break;
            }
          }
          Gc(e, hi, hu);
          break;
        }
        case p_: {
          Gc(e, hi, hu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function lN(e) {
      for (var t = e; ; ) {
        if (t.flags & $l) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var s = 0; s < i.length; s++) {
                var p = i[s], v = p.getSnapshot, w = p.value;
                try {
                  if (!at(v(), w))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var b = t.child;
        if (t.subtreeFlags & $l && b !== null) {
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
    function xs(e, t) {
      t = Ec(t, ng), t = Ec(t, Wh), wm(e, t);
    }
    function E_(e) {
      if (kD(), (Gt & (ha | Zi)) !== Qr)
        throw new Error("Should not already be working.");
      mu();
      var t = yc(e, pe);
      if (!Da(t, Et))
        return vi(e, Cr()), null;
      var a = sg(e, t);
      if (e.tag !== ds && a === Yc) {
        var i = ll(e);
        i !== pe && (t = i, a = XE(e, i));
      }
      if (a === Bh) {
        var s = Ih;
        throw Qc(e, pe), xs(e, t), vi(e, Cr()), s;
      }
      if (a === VE)
        throw new Error("Root did not complete. This is a bug in React.");
      var p = e.current.alternate;
      return e.finishedWork = p, e.finishedLanes = t, Gc(e, hi, hu), vi(e, Cr()), null;
    }
    function uN(e, t) {
      t !== pe && (Bp(e, Mt(t, Et)), vi(e, Cr()), (Gt & (ha | Zi)) === Qr && (qh(), ps()));
    }
    function JE(e, t) {
      var a = Gt;
      Gt |= d_;
      try {
        return e(t);
      } finally {
        Gt = a, Gt === Qr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !jo.isBatchingLegacy && (qh(), mC());
      }
    }
    function sN(e, t, a, i, s) {
      var p = oi(), v = pa.transition;
      try {
        return pa.transition = null, sr(gr), e(t, a, i, s);
      } finally {
        sr(p), pa.transition = v, Gt === Qr && qh();
      }
    }
    function vu(e) {
      bs !== null && bs.tag === ds && (Gt & (ha | Zi)) === Qr && mu();
      var t = Gt;
      Gt |= d_;
      var a = pa.transition, i = oi();
      try {
        return pa.transition = null, sr(gr), e ? e() : void 0;
      } finally {
        sr(i), pa.transition = a, Gt = t, (Gt & (ha | Zi)) === Qr && ps();
      }
    }
    function w_() {
      return (Gt & (ha | Zi)) !== Qr;
    }
    function ug(e, t) {
      La(IE, wl, e), wl = Mt(wl, t);
    }
    function ZE(e) {
      wl = IE.current, Na(IE, e);
    }
    function Qc(e, t) {
      e.finishedWork = null, e.finishedLanes = pe;
      var a = e.timeoutHandle;
      if (a !== G0 && (e.timeoutHandle = G0, Uk(a)), Er !== null)
        for (var i = Er.return; i !== null; ) {
          var s = i.alternate;
          Kx(s, i), i = i.return;
        }
      Ya = e;
      var p = Kc(e.current, null);
      return Er = p, Gr = wl = t, Kr = pu, Ih = null, tg = pe, Wh = pe, ng = pe, Yh = null, hi = null, nD(), To.discardPendingWarnings(), p;
    }
    function b_(e, t) {
      do {
        var a = Er;
        try {
          if (my(), JC(), Pn(), BE.current = null, a === null || a.return === null) {
            Kr = Bh, Ih = t, Er = null;
            return;
          }
          if (Le && a.mode & en && Qy(a, !0), Be)
            if (Il(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              dm(a, i, Gr);
            } else
              fm(a, t, Gr);
          LD(e, a.return, a, t, Gr), R_(a);
        } catch (s) {
          t = s, Er === a && a !== null ? (a = a.return, Er = a) : a = Er;
          continue;
        }
        return;
      } while (!0);
    }
    function C_() {
      var e = $E.current;
      return $E.current = Vy, e === null ? Vy : e;
    }
    function x_(e) {
      $E.current = e;
    }
    function cN() {
      WE = Cr();
    }
    function Xh(e) {
      tg = Mt(e, tg);
    }
    function fN() {
      Kr === pu && (Kr = eg);
    }
    function ew() {
      (Kr === pu || Kr === eg || Kr === Yc) && (Kr = Vh), Ya !== null && (gc(tg) || gc(Wh)) && xs(Ya, Gr);
    }
    function dN(e) {
      Kr !== Vh && (Kr = Yc), Yh === null ? Yh = [e] : Yh.push(e);
    }
    function pN() {
      return Kr === pu;
    }
    function sg(e, t) {
      var a = Gt;
      Gt |= ha;
      var i = C_();
      if (Ya !== e || Gr !== t) {
        if (Va) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Jh(e, Gr), s.clear()), Vp(e, t);
        }
        hu = bc(), Qc(e, t);
      }
      $u(t);
      do
        try {
          hN();
          break;
        } catch (p) {
          b_(e, p);
        }
      while (!0);
      if (my(), Gt = a, x_(i), Er !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return al(), Ya = null, Gr = pe, Kr;
    }
    function hN() {
      for (; Er !== null; )
        __(Er);
    }
    function vN(e, t) {
      var a = Gt;
      Gt |= ha;
      var i = C_();
      if (Ya !== e || Gr !== t) {
        if (Va) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Jh(e, Gr), s.clear()), Vp(e, t);
        }
        hu = bc(), qh(), Qc(e, t);
      }
      $u(t);
      do
        try {
          mN();
          break;
        } catch (p) {
          b_(e, p);
        }
      while (!0);
      return my(), x_(i), Gt = a, Er !== null ? (fc(), pu) : (al(), Ya = null, Gr = pe, Kr);
    }
    function mN() {
      for (; Er !== null && !am(); )
        __(Er);
    }
    function __(e) {
      var t = e.alternate;
      Xn(e);
      var a;
      (e.mode & en) !== gt ? (vE(e), a = tw(t, e, wl), Qy(e, !0)) : a = tw(t, e, wl), Pn(), e.memoizedProps = e.pendingProps, a === null ? R_(e) : Er = a, BE.current = null;
    }
    function R_(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Jo) === yt) {
          Xn(t);
          var s = void 0;
          if ((t.mode & en) === gt ? s = Gx(a, t, wl) : (vE(t), s = Gx(a, t, wl), Qy(t, !1)), Pn(), s !== null) {
            Er = s;
            return;
          }
        } else {
          var p = fA(a, t);
          if (p !== null) {
            p.flags &= go, Er = p;
            return;
          }
          if ((t.mode & en) !== gt) {
            Qy(t, !1);
            for (var v = t.actualDuration, w = t.child; w !== null; )
              v += w.actualDuration, w = w.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= Jo, i.subtreeFlags = yt, i.deletions = null;
          else {
            Kr = VE, Er = null;
            return;
          }
        }
        var b = t.sibling;
        if (b !== null) {
          Er = b;
          return;
        }
        t = i, Er = t;
      } while (t !== null);
      Kr === pu && (Kr = p_);
    }
    function Gc(e, t, a) {
      var i = oi(), s = pa.transition;
      try {
        pa.transition = null, sr(gr), yN(e, t, a, i);
      } finally {
        pa.transition = s, sr(i);
      }
      return null;
    }
    function yN(e, t, a, i) {
      do
        mu();
      while (bs !== null);
      if (kN(), (Gt & (ha | Zi)) !== Qr)
        throw new Error("Should not already be working.");
      var s = e.finishedWork, p = e.finishedLanes;
      if (lm(p), s === null)
        return uc(), null;
      if (p === pe && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = pe, s === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = mr;
      var v = Mt(s.lanes, s.childLanes);
      Gf(e, v), e === Ya && (Ya = null, Er = null, Gr = pe), ((s.subtreeFlags & _a) !== yt || (s.flags & _a) !== yt) && (qc || (qc = !0, QE = a, aw($i, function() {
        return mu(), null;
      })));
      var w = (s.subtreeFlags & (Ca | xa | _i | _a)) !== yt, b = (s.flags & (Ca | xa | _i | _a)) !== yt;
      if (w || b) {
        var T = pa.transition;
        pa.transition = null;
        var A = oi();
        sr(gr);
        var W = Gt;
        Gt |= Zi, BE.current = null, mA(e, s), Cx(), DA(e, s, p), Dk(e.containerInfo), e.current = s, Hu(p), AA(s, e, p), pm(), ju(), Gt = W, sr(A), pa.transition = T;
      } else
        e.current = s, Cx();
      var V = qc;
      if (qc ? (qc = !1, bs = e, Qh = p) : (Vd = 0, ig = null), v = e.pendingLanes, v === pe && (Bd = null), V || D_(e.current, !1), nl(s.stateNode, i), Va && e.memoizedUpdaters.clear(), KA(), vi(e, Cr()), t !== null)
        for (var te = e.onRecoverableError, ne = 0; ne < t.length; ne++) {
          var se = t[ne], Ze = se.stack, St = se.digest;
          te(se.value, {
            componentStack: Ze,
            digest: St
          });
        }
      if (rg) {
        rg = !1;
        var pt = YE;
        throw YE = null, pt;
      }
      return Da(Qh, Et) && e.tag !== ds && mu(), v = e.pendingLanes, Da(v, Et) ? (RD(), e === GE ? Gh++ : (Gh = 0, GE = e)) : Gh = 0, ps(), uc(), null;
    }
    function mu() {
      if (bs !== null) {
        var e = Vr(Qh), t = S0(Ii, e), a = pa.transition, i = oi();
        try {
          return pa.transition = null, sr(t), SN();
        } finally {
          sr(i), pa.transition = a;
        }
      }
      return !1;
    }
    function gN(e) {
      qE.push(e), qc || (qc = !0, aw($i, function() {
        return mu(), null;
      }));
    }
    function SN() {
      if (bs === null)
        return !1;
      var e = QE;
      QE = null;
      var t = bs, a = Qh;
      if (bs = null, Qh = pe, (Gt & (ha | Zi)) !== Qr)
        throw new Error("Cannot flush passive effects while already rendering.");
      KE = !0, ag = !1, cc(a);
      var i = Gt;
      Gt |= Zi, PA(t.current), MA(t, t.current, a, e);
      {
        var s = qE;
        qE = [];
        for (var p = 0; p < s.length; p++) {
          var v = s[p];
          EA(t, v);
        }
      }
      Bi(), D_(t.current, !0), Gt = i, ps(), ag ? t === ig ? Vd++ : (Vd = 0, ig = t) : Vd = 0, KE = !1, ag = !1, Lp(t);
      {
        var w = t.current.stateNode;
        w.effectDuration = 0, w.passiveEffectDuration = 0;
      }
      return !0;
    }
    function T_(e) {
      return Bd !== null && Bd.has(e);
    }
    function EN(e) {
      Bd === null ? Bd = /* @__PURE__ */ new Set([e]) : Bd.add(e);
    }
    function wN(e) {
      rg || (rg = !0, YE = e);
    }
    var bN = wN;
    function k_(e, t, a) {
      var i = Ic(a, t), s = _x(e, i, Et), p = vs(e, s, Et), v = qa();
      p !== null && (Zl(p, Et, v), vi(p, v));
    }
    function Bn(e, t, a) {
      if (pA(a), Zh(!1), e.tag === D) {
        k_(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === D) {
          k_(i, e, a);
          return;
        } else if (i.tag === k) {
          var s = i.type, p = i.stateNode;
          if (typeof s.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && !T_(p)) {
            var v = Ic(a, e), w = wE(i, v, Et), b = vs(i, w, Et), T = qa();
            b !== null && (Zl(b, Et, T), vi(b, T));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function CN(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var s = qa();
      Qf(e, a), NN(e), Ya === e && Jl(Gr, a) && (Kr === Vh || Kr === eg && vm(Gr) && Cr() - WE < h_ ? Qc(e, pe) : ng = Mt(ng, a)), vi(e, s);
    }
    function O_(e, t) {
      t === mr && (t = rN(e));
      var a = qa(), i = di(e, t);
      i !== null && (Zl(i, t, a), vi(i, a));
    }
    function xN(e) {
      var t = e.memoizedState, a = mr;
      t !== null && (a = t.retryLane), O_(e, a);
    }
    function _N(e, t) {
      var a = mr, i;
      switch (e.tag) {
        case Ae:
          i = e.stateNode;
          var s = e.memoizedState;
          s !== null && (a = s.retryLane);
          break;
        case ge:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), O_(e, a);
    }
    function RN(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ZA(e / 1960) * 1960;
    }
    function TN() {
      if (Gh > tN)
        throw Gh = 0, GE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Vd > nN && (Vd = 0, ig = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function kN() {
      To.flushLegacyContextWarning(), To.flushPendingUnsafeLifecycleWarnings();
    }
    function D_(e, t) {
      Xn(e), cg(e, ni, qA), t && cg(e, Bl, QA), cg(e, ni, WA), t && cg(e, Bl, YA), Pn();
    }
    function cg(e, t, a) {
      for (var i = e, s = null; i !== null; ) {
        var p = i.subtreeFlags & t;
        i !== s && i.child !== null && p !== yt ? i = i.child : ((i.flags & t) !== yt && a(i), i.sibling !== null ? i = i.sibling : i = s = i.return);
      }
    }
    var fg = null;
    function A_(e) {
      {
        if ((Gt & ha) !== Qr || !(e.mode & dt))
          return;
        var t = e.tag;
        if (t !== R && t !== D && t !== k && t !== O && t !== Re && t !== tt && t !== q)
          return;
        var a = Rt(e) || "ReactComponent";
        if (fg !== null) {
          if (fg.has(a))
            return;
          fg.add(a);
        } else
          fg = /* @__PURE__ */ new Set([a]);
        var i = Kn;
        try {
          Xn(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xn(e) : Pn();
        }
      }
    }
    var tw;
    {
      var ON = null;
      tw = function(e, t, a) {
        var i = F_(ON, t);
        try {
          return Ix(e, t, a);
        } catch (p) {
          if (BO() || p !== null && typeof p == "object" && typeof p.then == "function")
            throw p;
          if (my(), JC(), Kx(e, t), F_(t, i), t.mode & en && vE(t), Ci(null, Ix, null, e, t, a), d0()) {
            var s = yo();
            typeof s == "object" && s !== null && s._suppressLogging && typeof p == "object" && p !== null && !p._suppressLogging && (p._suppressLogging = !0);
          }
          throw p;
        }
      };
    }
    var N_ = !1, nw;
    nw = /* @__PURE__ */ new Set();
    function DN(e) {
      if (Sa && !CD())
        switch (e.tag) {
          case O:
          case Re:
          case q: {
            var t = Er && Rt(Er) || "Unknown", a = t;
            if (!nw.has(a)) {
              nw.add(a);
              var i = Rt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case k: {
            N_ || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), N_ = !0);
            break;
          }
        }
    }
    function Jh(e, t) {
      if (Va) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Kf(e, i, t);
        });
      }
    }
    var rw = {};
    function aw(e, t) {
      {
        var a = jo.current;
        return a !== null ? (a.push(t), rw) : Dp(e, t);
      }
    }
    function L_(e) {
      if (e !== rw)
        return kf(e);
    }
    function M_() {
      return jo.current !== null;
    }
    function AN(e) {
      {
        if (e.mode & dt) {
          if (!f_())
            return;
        } else if (!JA() || Gt !== Qr || e.tag !== O && e.tag !== Re && e.tag !== q)
          return;
        if (jo.current === null) {
          var t = Kn;
          try {
            Xn(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Rt(e));
          } finally {
            t ? Xn(e) : Pn();
          }
        }
      }
    }
    function NN(e) {
      e.tag !== ds && f_() && jo.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Zh(e) {
      y_ = e;
    }
    var eo = null, Id = null, LN = function(e) {
      eo = e;
    };
    function Wd(e) {
      {
        if (eo === null)
          return e;
        var t = eo(e);
        return t === void 0 ? e : t.current;
      }
    }
    function iw(e) {
      return Wd(e);
    }
    function ow(e) {
      {
        if (eo === null)
          return e;
        var t = eo(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Wd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ye,
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
    function j_(e, t) {
      {
        if (eo === null)
          return !1;
        var a = e.elementType, i = t.type, s = !1, p = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case k: {
            typeof i == "function" && (s = !0);
            break;
          }
          case O: {
            (typeof i == "function" || p === $e) && (s = !0);
            break;
          }
          case Re: {
            (p === Ye || p === $e) && (s = !0);
            break;
          }
          case tt:
          case q: {
            (p === At || p === $e) && (s = !0);
            break;
          }
          default:
            return !1;
        }
        if (s) {
          var v = eo(a);
          if (v !== void 0 && v === eo(i))
            return !0;
        }
        return !1;
      }
    }
    function z_(e) {
      {
        if (eo === null || typeof WeakSet != "function")
          return;
        Id === null && (Id = /* @__PURE__ */ new WeakSet()), Id.add(e);
      }
    }
    var MN = function(e, t) {
      {
        if (eo === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        mu(), vu(function() {
          lw(e.current, i, a);
        });
      }
    }, jN = function(e, t) {
      {
        if (e.context !== Ri)
          return;
        mu(), vu(function() {
          ev(t, e, null, null);
        });
      }
    };
    function lw(e, t, a) {
      {
        var i = e.alternate, s = e.child, p = e.sibling, v = e.tag, w = e.type, b = null;
        switch (v) {
          case O:
          case q:
          case k:
            b = w;
            break;
          case Re:
            b = w.render;
            break;
        }
        if (eo === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, A = !1;
        if (b !== null) {
          var W = eo(b);
          W !== void 0 && (a.has(W) ? A = !0 : t.has(W) && (v === k ? A = !0 : T = !0));
        }
        if (Id !== null && (Id.has(e) || i !== null && Id.has(i)) && (A = !0), A && (e._debugNeedsRemount = !0), A || T) {
          var V = di(e, Et);
          V !== null && Xr(V, e, Et, Ln);
        }
        s !== null && !A && lw(s, t, a), p !== null && lw(p, t, a);
      }
    }
    var zN = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(s) {
          return s.current;
        }));
        return uw(e.current, i, a), a;
      }
    };
    function uw(e, t, a) {
      {
        var i = e.child, s = e.sibling, p = e.tag, v = e.type, w = null;
        switch (p) {
          case O:
          case q:
          case k:
            w = v;
            break;
          case Re:
            w = v.render;
            break;
        }
        var b = !1;
        w !== null && t.has(w) && (b = !0), b ? UN(e, a) : i !== null && uw(i, t, a), s !== null && uw(s, t, a);
      }
    }
    function UN(e, t) {
      {
        var a = PN(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case U:
              t.add(i.stateNode);
              return;
            case j:
              t.add(i.stateNode.containerInfo);
              return;
            case D:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function PN(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === U)
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
    var sw;
    {
      sw = !1;
      try {
        var U_ = Object.preventExtensions({});
      } catch {
        sw = !0;
      }
    }
    function FN(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = yt, this.subtreeFlags = yt, this.deletions = null, this.lanes = pe, this.childLanes = pe, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !sw && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ti = function(e, t, a, i) {
      return new FN(e, t, a, i);
    };
    function cw(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function HN(e) {
      return typeof e == "function" && !cw(e) && e.defaultProps === void 0;
    }
    function $N(e) {
      if (typeof e == "function")
        return cw(e) ? k : O;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ye)
          return Re;
        if (t === At)
          return tt;
      }
      return R;
    }
    function Kc(e, t) {
      var a = e.alternate;
      a === null ? (a = Ti(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = yt, a.subtreeFlags = yt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Br, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case R:
        case O:
        case q:
          a.type = Wd(e.type);
          break;
        case k:
          a.type = iw(e.type);
          break;
        case Re:
          a.type = ow(e.type);
          break;
      }
      return a;
    }
    function BN(e, t) {
      e.flags &= Br | kn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = pe, e.lanes = t, e.child = null, e.subtreeFlags = yt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = yt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function VN(e, t, a) {
      var i;
      return e === uy ? (i = dt, t === !0 && (i |= lr, i |= ai)) : i = gt, Va && (i |= en), Ti(D, null, null, i);
    }
    function fw(e, t, a, i, s, p) {
      var v = R, w = e;
      if (typeof e == "function")
        cw(e) ? (v = k, w = iw(w)) : w = Wd(w);
      else if (typeof e == "string")
        v = U;
      else
        e: switch (e) {
          case mn:
            return _s(a.children, s, p, t);
          case ir:
            v = ve, s |= lr, (s & dt) !== gt && (s |= ai);
            break;
          case z:
            return IN(a, s, p, t);
          case Ut:
            return WN(a, s, p, t);
          case Bt:
            return YN(a, s, p, t);
          case tn:
            return P_(a, s, p, t);
          case Mr:
          case dn:
          case ma:
          case An:
          case pn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Se:
                  v = fe;
                  break e;
                case We:
                  v = xe;
                  break e;
                case Ye:
                  v = Re, w = ow(w);
                  break e;
                case At:
                  v = tt;
                  break e;
                case $e:
                  v = we, w = null;
                  break e;
              }
            var b = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var T = i ? Rt(i) : null;
              T && (b += `

Check the render method of \`` + T + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
          }
        }
      var A = Ti(v, a, t, s);
      return A.elementType = e, A.type = w, A.lanes = p, A._debugOwner = i, A;
    }
    function dw(e, t, a) {
      var i = null;
      i = e._owner;
      var s = e.type, p = e.key, v = e.props, w = fw(s, p, v, i, t, a);
      return w._debugSource = e._source, w._debugOwner = e._owner, w;
    }
    function _s(e, t, a, i) {
      var s = Ti(oe, e, i, t);
      return s.lanes = a, s;
    }
    function IN(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var s = Ti(X, e, i, t | en);
      return s.elementType = z, s.lanes = a, s.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, s;
    }
    function WN(e, t, a, i) {
      var s = Ti(Ae, e, i, t);
      return s.elementType = Ut, s.lanes = a, s;
    }
    function YN(e, t, a, i) {
      var s = Ti(ge, e, i, t);
      return s.elementType = Bt, s.lanes = a, s;
    }
    function P_(e, t, a, i) {
      var s = Ti(Z, e, i, t);
      s.elementType = tn, s.lanes = a;
      var p = {
        isHidden: !1
      };
      return s.stateNode = p, s;
    }
    function pw(e, t, a) {
      var i = Ti(H, e, null, t);
      return i.lanes = a, i;
    }
    function qN() {
      var e = Ti(U, null, null, gt);
      return e.elementType = "DELETED", e;
    }
    function QN(e) {
      var t = Ti(Oe, null, null, gt);
      return t.stateNode = e, t;
    }
    function hw(e, t, a) {
      var i = e.children !== null ? e.children : [], s = Ti(j, i, e.key, t);
      return s.lanes = a, s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, s;
    }
    function F_(e, t) {
      return e === null && (e = Ti(R, null, null, gt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function GN(e, t, a, i, s) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = G0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = mr, this.eventTimes = wc(pe), this.expirationTimes = wc(Ln), this.pendingLanes = pe, this.suspendedLanes = pe, this.pingedLanes = pe, this.expiredLanes = pe, this.mutableReadLanes = pe, this.finishedLanes = pe, this.entangledLanes = pe, this.entanglements = wc(pe), this.identifierPrefix = i, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var p = this.pendingUpdatersLaneMap = [], v = 0; v < vr; v++)
          p.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case uy:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ds:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function H_(e, t, a, i, s, p, v, w, b, T) {
      var A = new GN(e, t, a, w, b), W = VN(t, p);
      A.current = W, W.stateNode = A;
      {
        var V = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        W.memoizedState = V;
      }
      return bS(W), A;
    }
    var vw = "18.2.0";
    function KN(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return rr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Un,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var mw, yw;
    mw = !1, yw = {};
    function $_(e) {
      if (!e)
        return Ri;
      var t = Pi(e), a = LO(t);
      if (t.tag === k) {
        var i = t.type;
        if (hl(i))
          return pC(t, i, a);
      }
      return a;
    }
    function XN(e, t) {
      {
        var a = Pi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var s = Tp(a);
        if (s === null)
          return null;
        if (s.mode & lr) {
          var p = Rt(a) || "Component";
          if (!yw[p]) {
            yw[p] = !0;
            var v = Kn;
            try {
              Xn(s), a.mode & lr ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, p) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, p);
            } finally {
              v ? Xn(v) : Pn();
            }
          }
        }
        return s.stateNode;
      }
    }
    function B_(e, t, a, i, s, p, v, w) {
      var b = !1, T = null;
      return H_(e, t, b, T, a, i, s, p, v);
    }
    function V_(e, t, a, i, s, p, v, w, b, T) {
      var A = !0, W = H_(a, i, A, e, s, p, v, w, b);
      W.context = $_(null);
      var V = W.current, te = qa(), ne = Cs(V), se = fu(te, ne);
      return se.callback = t ?? null, vs(V, se, ne), aN(W, ne, te), W;
    }
    function ev(e, t, a, i) {
      So(t, e);
      var s = t.current, p = qa(), v = Cs(s);
      zp(v);
      var w = $_(a);
      t.context === null ? t.context = w : t.pendingContext = w, Sa && Kn !== null && !mw && (mw = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Rt(Kn) || "Unknown"));
      var b = fu(p, v);
      b.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), b.callback = i);
      var T = vs(s, b, v);
      return T !== null && (Xr(T, s, v, p), wy(T, s, v)), v;
    }
    function dg(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case U:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function JN(e) {
      switch (e.tag) {
        case D: {
          var t = e.stateNode;
          if (Xf(t)) {
            var a = m0(t);
            uN(t, a);
          }
          break;
        }
        case Ae: {
          vu(function() {
            var s = di(e, Et);
            if (s !== null) {
              var p = qa();
              Xr(s, e, Et, p);
            }
          });
          var i = Et;
          gw(e, i);
          break;
        }
      }
    }
    function I_(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Em(a.retryLane, t));
    }
    function gw(e, t) {
      I_(e, t);
      var a = e.alternate;
      a && I_(a, t);
    }
    function ZN(e) {
      if (e.tag === Ae) {
        var t = Xl, a = di(e, t);
        if (a !== null) {
          var i = qa();
          Xr(a, e, t, i);
        }
        gw(e, t);
      }
    }
    function eL(e) {
      if (e.tag === Ae) {
        var t = Cs(e), a = di(e, t);
        if (a !== null) {
          var i = qa();
          Xr(a, e, t, i);
        }
        gw(e, t);
      }
    }
    function W_(e) {
      var t = Op(e);
      return t === null ? null : t.stateNode;
    }
    var Y_ = function(e) {
      return null;
    };
    function tL(e) {
      return Y_(e);
    }
    var q_ = function(e) {
      return !1;
    };
    function nL(e) {
      return q_(e);
    }
    var Q_ = null, G_ = null, K_ = null, X_ = null, J_ = null, Z_ = null, eR = null, tR = null, nR = null;
    {
      var rR = function(e, t, a) {
        var i = t[a], s = Zt(e) ? e.slice() : Pt({}, e);
        return a + 1 === t.length ? (Zt(s) ? s.splice(i, 1) : delete s[i], s) : (s[i] = rR(e[i], t, a + 1), s);
      }, aR = function(e, t) {
        return rR(e, t, 0);
      }, iR = function(e, t, a, i) {
        var s = t[i], p = Zt(e) ? e.slice() : Pt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          p[v] = p[s], Zt(p) ? p.splice(s, 1) : delete p[s];
        } else
          p[s] = iR(
            // $FlowFixMe number or string is fine here
            e[s],
            t,
            a,
            i + 1
          );
        return p;
      }, oR = function(e, t, a) {
        if (t.length !== a.length) {
          S("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              S("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return iR(e, t, a, 0);
      }, lR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var s = t[a], p = Zt(e) ? e.slice() : Pt({}, e);
        return p[s] = lR(e[s], t, a + 1, i), p;
      }, uR = function(e, t, a) {
        return lR(e, t, 0, a);
      }, Sw = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Q_ = function(e, t, a, i) {
        var s = Sw(e, t);
        if (s !== null) {
          var p = uR(s.memoizedState, a, i);
          s.memoizedState = p, s.baseState = p, e.memoizedProps = Pt({}, e.memoizedProps);
          var v = di(e, Et);
          v !== null && Xr(v, e, Et, Ln);
        }
      }, G_ = function(e, t, a) {
        var i = Sw(e, t);
        if (i !== null) {
          var s = aR(i.memoizedState, a);
          i.memoizedState = s, i.baseState = s, e.memoizedProps = Pt({}, e.memoizedProps);
          var p = di(e, Et);
          p !== null && Xr(p, e, Et, Ln);
        }
      }, K_ = function(e, t, a, i) {
        var s = Sw(e, t);
        if (s !== null) {
          var p = oR(s.memoizedState, a, i);
          s.memoizedState = p, s.baseState = p, e.memoizedProps = Pt({}, e.memoizedProps);
          var v = di(e, Et);
          v !== null && Xr(v, e, Et, Ln);
        }
      }, X_ = function(e, t, a) {
        e.pendingProps = uR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = di(e, Et);
        i !== null && Xr(i, e, Et, Ln);
      }, J_ = function(e, t) {
        e.pendingProps = aR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = di(e, Et);
        a !== null && Xr(a, e, Et, Ln);
      }, Z_ = function(e, t, a) {
        e.pendingProps = oR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = di(e, Et);
        i !== null && Xr(i, e, Et, Ln);
      }, eR = function(e) {
        var t = di(e, Et);
        t !== null && Xr(t, e, Et, Ln);
      }, tR = function(e) {
        Y_ = e;
      }, nR = function(e) {
        q_ = e;
      };
    }
    function rL(e) {
      var t = Tp(e);
      return t === null ? null : t.stateNode;
    }
    function aL(e) {
      return null;
    }
    function iL() {
      return Kn;
    }
    function oL(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return im({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Q_,
        overrideHookStateDeletePath: G_,
        overrideHookStateRenamePath: K_,
        overrideProps: X_,
        overridePropsDeletePath: J_,
        overridePropsRenamePath: Z_,
        setErrorHandler: tR,
        setSuspenseHandler: nR,
        scheduleUpdate: eR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: rL,
        findFiberByHostInstance: t || aL,
        // React Refresh
        findHostInstancesForRefresh: zN,
        scheduleRefresh: MN,
        scheduleRoot: jN,
        setRefreshHandler: LN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: iL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: vw
      });
    }
    var sR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Ew(e) {
      this._internalRoot = e;
    }
    pg.prototype.render = Ew.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : hg(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== or) {
          var i = W_(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      ev(e, t, null, null);
    }, pg.prototype.unmount = Ew.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        w_() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), vu(function() {
          ev(null, e, null, null);
        }), uC(t);
      }
    };
    function lL(e, t) {
      if (!hg(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      cR(e);
      var a = !1, i = !1, s = "", p = sR;
      t != null && (t.hydrate ? S("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === zn && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (p = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = B_(e, uy, null, a, i, s, p);
      ty(v.current, e);
      var w = e.nodeType === or ? e.parentNode : e;
      return uh(w), new Ew(v);
    }
    function pg(e) {
      this._internalRoot = e;
    }
    function uL(e) {
      e && b0(e);
    }
    pg.prototype.unstable_scheduleHydration = uL;
    function sL(e, t, a) {
      if (!hg(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      cR(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, s = a != null && a.hydratedSources || null, p = !1, v = !1, w = "", b = sR;
      a != null && (a.unstable_strictMode === !0 && (p = !0), a.identifierPrefix !== void 0 && (w = a.identifierPrefix), a.onRecoverableError !== void 0 && (b = a.onRecoverableError));
      var T = V_(t, null, e, uy, i, p, v, w, b);
      if (ty(T.current, e), uh(e), s)
        for (var A = 0; A < s.length; A++) {
          var W = s[A];
          yD(T, W);
        }
      return new pg(T);
    }
    function hg(e) {
      return !!(e && (e.nodeType === wa || e.nodeType === Pa || e.nodeType === cp || !_e));
    }
    function tv(e) {
      return !!(e && (e.nodeType === wa || e.nodeType === Pa || e.nodeType === cp || e.nodeType === or && e.nodeValue === " react-mount-point-unstable "));
    }
    function cR(e) {
      e.nodeType === wa && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Sh(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var cL = d.ReactCurrentOwner, fR;
    fR = function(e) {
      if (e._reactRootContainer && e.nodeType !== or) {
        var t = W_(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = ww(e), s = !!(i && cs(i));
      s && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === wa && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function ww(e) {
      return e ? e.nodeType === Pa ? e.documentElement : e.firstChild : null;
    }
    function dR() {
    }
    function fL(e, t, a, i, s) {
      if (s) {
        if (typeof i == "function") {
          var p = i;
          i = function() {
            var V = dg(v);
            p.call(V);
          };
        }
        var v = V_(
          t,
          i,
          e,
          ds,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          dR
        );
        e._reactRootContainer = v, ty(v.current, e);
        var w = e.nodeType === or ? e.parentNode : e;
        return uh(w), vu(), v;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof i == "function") {
          var T = i;
          i = function() {
            var V = dg(A);
            T.call(V);
          };
        }
        var A = B_(
          e,
          ds,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          dR
        );
        e._reactRootContainer = A, ty(A.current, e);
        var W = e.nodeType === or ? e.parentNode : e;
        return uh(W), vu(function() {
          ev(t, A, a, i);
        }), A;
      }
    }
    function dL(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function vg(e, t, a, i, s) {
      fR(a), dL(s === void 0 ? null : s, "render");
      var p = a._reactRootContainer, v;
      if (!p)
        v = fL(a, t, e, s, i);
      else {
        if (v = p, typeof s == "function") {
          var w = s;
          s = function() {
            var b = dg(v);
            w.call(b);
          };
        }
        ev(t, v, e, s);
      }
      return dg(v);
    }
    function pL(e) {
      {
        var t = cL.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === wa ? e : XN(e, "findDOMNode");
    }
    function hL(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Sh(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return vg(null, e, t, !0, a);
    }
    function vL(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Sh(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return vg(null, e, t, !1, a);
    }
    function mL(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Mu(e))
        throw new Error("parentComponent must be a valid React Component");
      return vg(e, t, a, !1, i);
    }
    function yL(e) {
      if (!tv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Sh(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = ww(e), i = a && !cs(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return vu(function() {
          vg(null, null, e, !1, function() {
            e._reactRootContainer = null, uC(e);
          });
        }), !0;
      } else {
        {
          var s = ww(e), p = !!(s && cs(s)), v = e.nodeType === wa && tv(e.parentNode) && !!e.parentNode._reactRootContainer;
          p && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ku(JN), E0(ZN), Zf(eL), Cm(oi), xm(ta), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gp(Ek), bf(JE, sN, vu);
    function gL(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hg(t))
        throw new Error("Target container is not a DOM element.");
      return KN(e, t, null, a);
    }
    function SL(e, t, a, i) {
      return mL(e, t, a, i);
    }
    var bw = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [cs, bd, ny, Lu, Fl, JE]
    };
    function EL(e, t) {
      return bw.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lL(e, t);
    }
    function wL(e, t, a) {
      return bw.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), sL(e, t, a);
    }
    function bL(e) {
      return w_() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), vu(e);
    }
    var CL = oL({
      findFiberByHostInstance: jc,
      bundleType: 1,
      version: vw,
      rendererPackageName: "react-dom"
    });
    if (!CL && _t && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var pR = window.location.protocol;
      /^(https?|file):$/.test(pR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (pR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    yi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bw, yi.createPortal = gL, yi.createRoot = EL, yi.findDOMNode = pL, yi.flushSync = bL, yi.hydrate = hL, yi.hydrateRoot = wL, yi.render = vL, yi.unmountComponentAtNode = yL, yi.unstable_batchedUpdates = JE, yi.unstable_renderSubtreeIntoContainer = SL, yi.version = vw, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), yi;
}
var x1 = {};
function _1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (x1.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_1);
    } catch (u) {
      console.error(u);
    }
  }
}
x1.NODE_ENV === "production" ? (_1(), Vw.exports = PL()) : Vw.exports = FL();
var R1 = Vw.exports, HL = {}, iv = R1;
if (HL.NODE_ENV === "production")
  cv.createRoot = iv.createRoot, cv.hydrateRoot = iv.hydrateRoot;
else {
  var gg = iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  cv.createRoot = function(u, l) {
    gg.usingClientEntryPoint = !0;
    try {
      return iv.createRoot(u, l);
    } finally {
      gg.usingClientEntryPoint = !1;
    }
  }, cv.hydrateRoot = function(u, l, c) {
    gg.usingClientEntryPoint = !0;
    try {
      return iv.hydrateRoot(u, l, c);
    } finally {
      gg.usingClientEntryPoint = !1;
    }
  };
}
function $L({ tabs: u }) {
  const [l, c] = me.useState(0), d = (g) => {
    c(g);
  }, m = (g) => {
    g.key === "ArrowRight" ? c((S) => (S + 1) % u.length) : g.key === "ArrowLeft" && c((S) => (S - 1 + u.length) % u.length);
  };
  return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsx("div", { className: "nav-tab-wrapper", role: "tablist", children: u.map((g, S) => /* @__PURE__ */ B.jsx(
      "button",
      {
        className: l === S ? "nav-tab nav-tab-active" : "nav-tab",
        role: "tab",
        "aria-selected": l === S,
        "aria-controls": `tabpanel-${S}`,
        id: `tab-${S}`,
        tabIndex: l === S ? 0 : -1,
        onClick: () => d(S),
        onKeyDown: m,
        children: g.title
      },
      S
    )) }),
    u.map((g, S) => {
      const y = g.content;
      return /* @__PURE__ */ B.jsxs(
        "div",
        {
          className: "tabs-content",
          role: "tabpanel",
          id: `tabpanel-${S}`,
          "aria-labelledby": `tab-${S}`,
          hidden: l !== S,
          tabIndex: 0,
          children: [
            /* @__PURE__ */ B.jsx(y, {}),
            " "
          ]
        },
        S
      );
    })
  ] });
}
function T1(u, l) {
  return function() {
    return u.apply(l, arguments);
  };
}
const { toString: BL } = Object.prototype, { getPrototypeOf: hb } = Object, Bg = /* @__PURE__ */ ((u) => (l) => {
  const c = BL.call(l);
  return u[c] || (u[c] = c.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ol = (u) => (u = u.toLowerCase(), (l) => Bg(l) === u), Vg = (u) => (l) => typeof l === u, { isArray: tp } = Array, pv = Vg("undefined");
function VL(u) {
  return u !== null && !pv(u) && u.constructor !== null && !pv(u.constructor) && no(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const k1 = Ol("ArrayBuffer");
function IL(u) {
  let l;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? l = ArrayBuffer.isView(u) : l = u && u.buffer && k1(u.buffer), l;
}
const WL = Vg("string"), no = Vg("function"), O1 = Vg("number"), Ig = (u) => u !== null && typeof u == "object", YL = (u) => u === !0 || u === !1, Rg = (u) => {
  if (Bg(u) !== "object")
    return !1;
  const l = hb(u);
  return (l === null || l === Object.prototype || Object.getPrototypeOf(l) === null) && !(Symbol.toStringTag in u) && !(Symbol.iterator in u);
}, qL = Ol("Date"), QL = Ol("File"), GL = Ol("Blob"), KL = Ol("FileList"), XL = (u) => Ig(u) && no(u.pipe), JL = (u) => {
  let l;
  return u && (typeof FormData == "function" && u instanceof FormData || no(u.append) && ((l = Bg(u)) === "formdata" || // detect form-data instance
  l === "object" && no(u.toString) && u.toString() === "[object FormData]"));
}, ZL = Ol("URLSearchParams"), eM = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function yv(u, l, { allOwnKeys: c = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let d, m;
  if (typeof u != "object" && (u = [u]), tp(u))
    for (d = 0, m = u.length; d < m; d++)
      l.call(null, u[d], d, u);
  else {
    const g = c ? Object.getOwnPropertyNames(u) : Object.keys(u), S = g.length;
    let y;
    for (d = 0; d < S; d++)
      y = g[d], l.call(null, u[y], y, u);
  }
}
function D1(u, l) {
  l = l.toLowerCase();
  const c = Object.keys(u);
  let d = c.length, m;
  for (; d-- > 0; )
    if (m = c[d], l === m.toLowerCase())
      return m;
  return null;
}
const A1 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, N1 = (u) => !pv(u) && u !== A1;
function Iw() {
  const { caseless: u } = N1(this) && this || {}, l = {}, c = (d, m) => {
    const g = u && D1(l, m) || m;
    Rg(l[g]) && Rg(d) ? l[g] = Iw(l[g], d) : Rg(d) ? l[g] = Iw({}, d) : tp(d) ? l[g] = d.slice() : l[g] = d;
  };
  for (let d = 0, m = arguments.length; d < m; d++)
    arguments[d] && yv(arguments[d], c);
  return l;
}
const tM = (u, l, c, { allOwnKeys: d } = {}) => (yv(l, (m, g) => {
  c && no(m) ? u[g] = T1(m, c) : u[g] = m;
}, { allOwnKeys: d }), u), nM = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), rM = (u, l, c, d) => {
  u.prototype = Object.create(l.prototype, d), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: l.prototype
  }), c && Object.assign(u.prototype, c);
}, aM = (u, l, c, d) => {
  let m, g, S;
  const y = {};
  if (l = l || {}, u == null) return l;
  do {
    for (m = Object.getOwnPropertyNames(u), g = m.length; g-- > 0; )
      S = m[g], (!d || d(S, u, l)) && !y[S] && (l[S] = u[S], y[S] = !0);
    u = c !== !1 && hb(u);
  } while (u && (!c || c(u, l)) && u !== Object.prototype);
  return l;
}, iM = (u, l, c) => {
  u = String(u), (c === void 0 || c > u.length) && (c = u.length), c -= l.length;
  const d = u.indexOf(l, c);
  return d !== -1 && d === c;
}, oM = (u) => {
  if (!u) return null;
  if (tp(u)) return u;
  let l = u.length;
  if (!O1(l)) return null;
  const c = new Array(l);
  for (; l-- > 0; )
    c[l] = u[l];
  return c;
}, lM = /* @__PURE__ */ ((u) => (l) => u && l instanceof u)(typeof Uint8Array < "u" && hb(Uint8Array)), uM = (u, l) => {
  const d = (u && u[Symbol.iterator]).call(u);
  let m;
  for (; (m = d.next()) && !m.done; ) {
    const g = m.value;
    l.call(u, g[0], g[1]);
  }
}, sM = (u, l) => {
  let c;
  const d = [];
  for (; (c = u.exec(l)) !== null; )
    d.push(c);
  return d;
}, cM = Ol("HTMLFormElement"), fM = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(c, d, m) {
    return d.toUpperCase() + m;
  }
), _R = (({ hasOwnProperty: u }) => (l, c) => u.call(l, c))(Object.prototype), dM = Ol("RegExp"), L1 = (u, l) => {
  const c = Object.getOwnPropertyDescriptors(u), d = {};
  yv(c, (m, g) => {
    let S;
    (S = l(m, g, u)) !== !1 && (d[g] = S || m);
  }), Object.defineProperties(u, d);
}, pM = (u) => {
  L1(u, (l, c) => {
    if (no(u) && ["arguments", "caller", "callee"].indexOf(c) !== -1)
      return !1;
    const d = u[c];
    if (no(d)) {
      if (l.enumerable = !1, "writable" in l) {
        l.writable = !1;
        return;
      }
      l.set || (l.set = () => {
        throw Error("Can not rewrite read-only method '" + c + "'");
      });
    }
  });
}, hM = (u, l) => {
  const c = {}, d = (m) => {
    m.forEach((g) => {
      c[g] = !0;
    });
  };
  return tp(u) ? d(u) : d(String(u).split(l)), c;
}, vM = () => {
}, mM = (u, l) => (u = +u, Number.isFinite(u) ? u : l), _w = "abcdefghijklmnopqrstuvwxyz", RR = "0123456789", M1 = {
  DIGIT: RR,
  ALPHA: _w,
  ALPHA_DIGIT: _w + _w.toUpperCase() + RR
}, yM = (u = 16, l = M1.ALPHA_DIGIT) => {
  let c = "";
  const { length: d } = l;
  for (; u--; )
    c += l[Math.random() * d | 0];
  return c;
};
function gM(u) {
  return !!(u && no(u.append) && u[Symbol.toStringTag] === "FormData" && u[Symbol.iterator]);
}
const SM = (u) => {
  const l = new Array(10), c = (d, m) => {
    if (Ig(d)) {
      if (l.indexOf(d) >= 0)
        return;
      if (!("toJSON" in d)) {
        l[m] = d;
        const g = tp(d) ? [] : {};
        return yv(d, (S, y) => {
          const x = c(S, m + 1);
          !pv(x) && (g[y] = x);
        }), l[m] = void 0, g;
      }
    }
    return d;
  };
  return c(u, 0);
}, EM = Ol("AsyncFunction"), wM = (u) => u && (Ig(u) || no(u)) && no(u.then) && no(u.catch), ye = {
  isArray: tp,
  isArrayBuffer: k1,
  isBuffer: VL,
  isFormData: JL,
  isArrayBufferView: IL,
  isString: WL,
  isNumber: O1,
  isBoolean: YL,
  isObject: Ig,
  isPlainObject: Rg,
  isUndefined: pv,
  isDate: qL,
  isFile: QL,
  isBlob: GL,
  isRegExp: dM,
  isFunction: no,
  isStream: XL,
  isURLSearchParams: ZL,
  isTypedArray: lM,
  isFileList: KL,
  forEach: yv,
  merge: Iw,
  extend: tM,
  trim: eM,
  stripBOM: nM,
  inherits: rM,
  toFlatObject: aM,
  kindOf: Bg,
  kindOfTest: Ol,
  endsWith: iM,
  toArray: oM,
  forEachEntry: uM,
  matchAll: sM,
  isHTMLForm: cM,
  hasOwnProperty: _R,
  hasOwnProp: _R,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: L1,
  freezeMethods: pM,
  toObjectSet: hM,
  toCamelCase: fM,
  noop: vM,
  toFiniteNumber: mM,
  findKey: D1,
  global: A1,
  isContextDefined: N1,
  ALPHABET: M1,
  generateString: yM,
  isSpecCompliantForm: gM,
  toJSONObject: SM,
  isAsyncFn: EM,
  isThenable: wM
};
function ln(u, l, c, d, m) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", l && (this.code = l), c && (this.config = c), d && (this.request = d), m && (this.response = m);
}
ye.inherits(ln, Error, {
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
      config: ye.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const j1 = ln.prototype, z1 = {};
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
].forEach((u) => {
  z1[u] = { value: u };
});
Object.defineProperties(ln, z1);
Object.defineProperty(j1, "isAxiosError", { value: !0 });
ln.from = (u, l, c, d, m, g) => {
  const S = Object.create(j1);
  return ye.toFlatObject(u, S, function(x) {
    return x !== Error.prototype;
  }, (y) => y !== "isAxiosError"), ln.call(S, u.message, l, c, d, m), S.cause = u, S.name = u.name, g && Object.assign(S, g), S;
};
const bM = null;
function Ww(u) {
  return ye.isPlainObject(u) || ye.isArray(u);
}
function U1(u) {
  return ye.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function TR(u, l, c) {
  return u ? u.concat(l).map(function(m, g) {
    return m = U1(m), !c && g ? "[" + m + "]" : m;
  }).join(c ? "." : "") : l;
}
function CM(u) {
  return ye.isArray(u) && !u.some(Ww);
}
const xM = ye.toFlatObject(ye, {}, null, function(l) {
  return /^is[A-Z]/.test(l);
});
function Wg(u, l, c) {
  if (!ye.isObject(u))
    throw new TypeError("target must be an object");
  l = l || new FormData(), c = ye.toFlatObject(c, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(H, oe) {
    return !ye.isUndefined(oe[H]);
  });
  const d = c.metaTokens, m = c.visitor || k, g = c.dots, S = c.indexes, x = (c.Blob || typeof Blob < "u" && Blob) && ye.isSpecCompliantForm(l);
  if (!ye.isFunction(m))
    throw new TypeError("visitor must be a function");
  function O(U) {
    if (U === null) return "";
    if (ye.isDate(U))
      return U.toISOString();
    if (!x && ye.isBlob(U))
      throw new ln("Blob is not supported. Use a Buffer instead.");
    return ye.isArrayBuffer(U) || ye.isTypedArray(U) ? x && typeof Blob == "function" ? new Blob([U]) : Buffer.from(U) : U;
  }
  function k(U, H, oe) {
    let ve = U;
    if (U && !oe && typeof U == "object") {
      if (ye.endsWith(H, "{}"))
        H = d ? H : H.slice(0, -2), U = JSON.stringify(U);
      else if (ye.isArray(U) && CM(U) || (ye.isFileList(U) || ye.endsWith(H, "[]")) && (ve = ye.toArray(U)))
        return H = U1(H), ve.forEach(function(fe, Re) {
          !(ye.isUndefined(fe) || fe === null) && l.append(
            // eslint-disable-next-line no-nested-ternary
            S === !0 ? TR([H], Re, g) : S === null ? H : H + "[]",
            O(fe)
          );
        }), !1;
    }
    return Ww(U) ? !0 : (l.append(TR(oe, H, g), O(U)), !1);
  }
  const R = [], D = Object.assign(xM, {
    defaultVisitor: k,
    convertValue: O,
    isVisitable: Ww
  });
  function j(U, H) {
    if (!ye.isUndefined(U)) {
      if (R.indexOf(U) !== -1)
        throw Error("Circular reference detected in " + H.join("."));
      R.push(U), ye.forEach(U, function(ve, xe) {
        (!(ye.isUndefined(ve) || ve === null) && m.call(
          l,
          ve,
          ye.isString(xe) ? xe.trim() : xe,
          H,
          D
        )) === !0 && j(ve, H ? H.concat(xe) : [xe]);
      }), R.pop();
    }
  }
  if (!ye.isObject(u))
    throw new TypeError("data must be an object");
  return j(u), l;
}
function kR(u) {
  const l = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function(d) {
    return l[d];
  });
}
function vb(u, l) {
  this._pairs = [], u && Wg(u, this, l);
}
const P1 = vb.prototype;
P1.append = function(l, c) {
  this._pairs.push([l, c]);
};
P1.toString = function(l) {
  const c = l ? function(d) {
    return l.call(this, d, kR);
  } : kR;
  return this._pairs.map(function(m) {
    return c(m[0]) + "=" + c(m[1]);
  }, "").join("&");
};
function _M(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function F1(u, l, c) {
  if (!l)
    return u;
  const d = c && c.encode || _M, m = c && c.serialize;
  let g;
  if (m ? g = m(l, c) : g = ye.isURLSearchParams(l) ? l.toString() : new vb(l, c).toString(d), g) {
    const S = u.indexOf("#");
    S !== -1 && (u = u.slice(0, S)), u += (u.indexOf("?") === -1 ? "?" : "&") + g;
  }
  return u;
}
class OR {
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
  use(l, c, d) {
    return this.handlers.push({
      fulfilled: l,
      rejected: c,
      synchronous: d ? d.synchronous : !1,
      runWhen: d ? d.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(l) {
    this.handlers[l] && (this.handlers[l] = null);
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
  forEach(l) {
    ye.forEach(this.handlers, function(d) {
      d !== null && l(d);
    });
  }
}
const H1 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, RM = typeof URLSearchParams < "u" ? URLSearchParams : vb, TM = typeof FormData < "u" ? FormData : null, kM = typeof Blob < "u" ? Blob : null, OM = {
  isBrowser: !0,
  classes: {
    URLSearchParams: RM,
    FormData: TM,
    Blob: kM
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, $1 = typeof window < "u" && typeof document < "u", DM = ((u) => $1 && ["ReactNative", "NativeScript", "NS"].indexOf(u) < 0)(typeof navigator < "u" && navigator.product), AM = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", NM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $1,
  hasStandardBrowserEnv: DM,
  hasStandardBrowserWebWorkerEnv: AM
}, Symbol.toStringTag, { value: "Module" })), xl = {
  ...NM,
  ...OM
};
function LM(u, l) {
  return Wg(u, new xl.classes.URLSearchParams(), Object.assign({
    visitor: function(c, d, m, g) {
      return xl.isNode && ye.isBuffer(c) ? (this.append(d, c.toString("base64")), !1) : g.defaultVisitor.apply(this, arguments);
    }
  }, l));
}
function MM(u) {
  return ye.matchAll(/\w+|\[(\w*)]/g, u).map((l) => l[0] === "[]" ? "" : l[1] || l[0]);
}
function jM(u) {
  const l = {}, c = Object.keys(u);
  let d;
  const m = c.length;
  let g;
  for (d = 0; d < m; d++)
    g = c[d], l[g] = u[g];
  return l;
}
function B1(u) {
  function l(c, d, m, g) {
    let S = c[g++];
    if (S === "__proto__") return !0;
    const y = Number.isFinite(+S), x = g >= c.length;
    return S = !S && ye.isArray(m) ? m.length : S, x ? (ye.hasOwnProp(m, S) ? m[S] = [m[S], d] : m[S] = d, !y) : ((!m[S] || !ye.isObject(m[S])) && (m[S] = []), l(c, d, m[S], g) && ye.isArray(m[S]) && (m[S] = jM(m[S])), !y);
  }
  if (ye.isFormData(u) && ye.isFunction(u.entries)) {
    const c = {};
    return ye.forEachEntry(u, (d, m) => {
      l(MM(d), m, c, 0);
    }), c;
  }
  return null;
}
function zM(u, l, c) {
  if (ye.isString(u))
    try {
      return (l || JSON.parse)(u), ye.trim(u);
    } catch (d) {
      if (d.name !== "SyntaxError")
        throw d;
    }
  return (c || JSON.stringify)(u);
}
const gv = {
  transitional: H1,
  adapter: ["xhr", "http"],
  transformRequest: [function(l, c) {
    const d = c.getContentType() || "", m = d.indexOf("application/json") > -1, g = ye.isObject(l);
    if (g && ye.isHTMLForm(l) && (l = new FormData(l)), ye.isFormData(l))
      return m ? JSON.stringify(B1(l)) : l;
    if (ye.isArrayBuffer(l) || ye.isBuffer(l) || ye.isStream(l) || ye.isFile(l) || ye.isBlob(l))
      return l;
    if (ye.isArrayBufferView(l))
      return l.buffer;
    if (ye.isURLSearchParams(l))
      return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), l.toString();
    let y;
    if (g) {
      if (d.indexOf("application/x-www-form-urlencoded") > -1)
        return LM(l, this.formSerializer).toString();
      if ((y = ye.isFileList(l)) || d.indexOf("multipart/form-data") > -1) {
        const x = this.env && this.env.FormData;
        return Wg(
          y ? { "files[]": l } : l,
          x && new x(),
          this.formSerializer
        );
      }
    }
    return g || m ? (c.setContentType("application/json", !1), zM(l)) : l;
  }],
  transformResponse: [function(l) {
    const c = this.transitional || gv.transitional, d = c && c.forcedJSONParsing, m = this.responseType === "json";
    if (l && ye.isString(l) && (d && !this.responseType || m)) {
      const S = !(c && c.silentJSONParsing) && m;
      try {
        return JSON.parse(l);
      } catch (y) {
        if (S)
          throw y.name === "SyntaxError" ? ln.from(y, ln.ERR_BAD_RESPONSE, this, null, this.response) : y;
      }
    }
    return l;
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
    FormData: xl.classes.FormData,
    Blob: xl.classes.Blob
  },
  validateStatus: function(l) {
    return l >= 200 && l < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
ye.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  gv.headers[u] = {};
});
const UM = ye.toObjectSet([
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
]), PM = (u) => {
  const l = {};
  let c, d, m;
  return u && u.split(`
`).forEach(function(S) {
    m = S.indexOf(":"), c = S.substring(0, m).trim().toLowerCase(), d = S.substring(m + 1).trim(), !(!c || l[c] && UM[c]) && (c === "set-cookie" ? l[c] ? l[c].push(d) : l[c] = [d] : l[c] = l[c] ? l[c] + ", " + d : d);
  }), l;
}, DR = Symbol("internals");
function ov(u) {
  return u && String(u).trim().toLowerCase();
}
function Tg(u) {
  return u === !1 || u == null ? u : ye.isArray(u) ? u.map(Tg) : String(u);
}
function FM(u) {
  const l = /* @__PURE__ */ Object.create(null), c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let d;
  for (; d = c.exec(u); )
    l[d[1]] = d[2];
  return l;
}
const HM = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function Rw(u, l, c, d, m) {
  if (ye.isFunction(d))
    return d.call(this, l, c);
  if (m && (l = c), !!ye.isString(l)) {
    if (ye.isString(d))
      return l.indexOf(d) !== -1;
    if (ye.isRegExp(d))
      return d.test(l);
  }
}
function $M(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (l, c, d) => c.toUpperCase() + d);
}
function BM(u, l) {
  const c = ye.toCamelCase(" " + l);
  ["get", "set", "has"].forEach((d) => {
    Object.defineProperty(u, d + c, {
      value: function(m, g, S) {
        return this[d].call(this, l, m, g, S);
      },
      configurable: !0
    });
  });
}
class ro {
  constructor(l) {
    l && this.set(l);
  }
  set(l, c, d) {
    const m = this;
    function g(y, x, O) {
      const k = ov(x);
      if (!k)
        throw new Error("header name must be a non-empty string");
      const R = ye.findKey(m, k);
      (!R || m[R] === void 0 || O === !0 || O === void 0 && m[R] !== !1) && (m[R || x] = Tg(y));
    }
    const S = (y, x) => ye.forEach(y, (O, k) => g(O, k, x));
    return ye.isPlainObject(l) || l instanceof this.constructor ? S(l, c) : ye.isString(l) && (l = l.trim()) && !HM(l) ? S(PM(l), c) : l != null && g(c, l, d), this;
  }
  get(l, c) {
    if (l = ov(l), l) {
      const d = ye.findKey(this, l);
      if (d) {
        const m = this[d];
        if (!c)
          return m;
        if (c === !0)
          return FM(m);
        if (ye.isFunction(c))
          return c.call(this, m, d);
        if (ye.isRegExp(c))
          return c.exec(m);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(l, c) {
    if (l = ov(l), l) {
      const d = ye.findKey(this, l);
      return !!(d && this[d] !== void 0 && (!c || Rw(this, this[d], d, c)));
    }
    return !1;
  }
  delete(l, c) {
    const d = this;
    let m = !1;
    function g(S) {
      if (S = ov(S), S) {
        const y = ye.findKey(d, S);
        y && (!c || Rw(d, d[y], y, c)) && (delete d[y], m = !0);
      }
    }
    return ye.isArray(l) ? l.forEach(g) : g(l), m;
  }
  clear(l) {
    const c = Object.keys(this);
    let d = c.length, m = !1;
    for (; d--; ) {
      const g = c[d];
      (!l || Rw(this, this[g], g, l, !0)) && (delete this[g], m = !0);
    }
    return m;
  }
  normalize(l) {
    const c = this, d = {};
    return ye.forEach(this, (m, g) => {
      const S = ye.findKey(d, g);
      if (S) {
        c[S] = Tg(m), delete c[g];
        return;
      }
      const y = l ? $M(g) : String(g).trim();
      y !== g && delete c[g], c[y] = Tg(m), d[y] = !0;
    }), this;
  }
  concat(...l) {
    return this.constructor.concat(this, ...l);
  }
  toJSON(l) {
    const c = /* @__PURE__ */ Object.create(null);
    return ye.forEach(this, (d, m) => {
      d != null && d !== !1 && (c[m] = l && ye.isArray(d) ? d.join(", ") : d);
    }), c;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([l, c]) => l + ": " + c).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(l) {
    return l instanceof this ? l : new this(l);
  }
  static concat(l, ...c) {
    const d = new this(l);
    return c.forEach((m) => d.set(m)), d;
  }
  static accessor(l) {
    const d = (this[DR] = this[DR] = {
      accessors: {}
    }).accessors, m = this.prototype;
    function g(S) {
      const y = ov(S);
      d[y] || (BM(m, S), d[y] = !0);
    }
    return ye.isArray(l) ? l.forEach(g) : g(l), this;
  }
}
ro.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ye.reduceDescriptors(ro.prototype, ({ value: u }, l) => {
  let c = l[0].toUpperCase() + l.slice(1);
  return {
    get: () => u,
    set(d) {
      this[c] = d;
    }
  };
});
ye.freezeMethods(ro);
function Tw(u, l) {
  const c = this || gv, d = l || c, m = ro.from(d.headers);
  let g = d.data;
  return ye.forEach(u, function(y) {
    g = y.call(c, g, m.normalize(), l ? l.status : void 0);
  }), m.normalize(), g;
}
function V1(u) {
  return !!(u && u.__CANCEL__);
}
function Sv(u, l, c) {
  ln.call(this, u ?? "canceled", ln.ERR_CANCELED, l, c), this.name = "CanceledError";
}
ye.inherits(Sv, ln, {
  __CANCEL__: !0
});
function VM(u, l, c) {
  const d = c.config.validateStatus;
  !c.status || !d || d(c.status) ? u(c) : l(new ln(
    "Request failed with status code " + c.status,
    [ln.ERR_BAD_REQUEST, ln.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4],
    c.config,
    c.request,
    c
  ));
}
const IM = xl.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, l, c, d, m, g) {
      const S = [u + "=" + encodeURIComponent(l)];
      ye.isNumber(c) && S.push("expires=" + new Date(c).toGMTString()), ye.isString(d) && S.push("path=" + d), ye.isString(m) && S.push("domain=" + m), g === !0 && S.push("secure"), document.cookie = S.join("; ");
    },
    read(u) {
      const l = document.cookie.match(new RegExp("(^|;\\s*)(" + u + ")=([^;]*)"));
      return l ? decodeURIComponent(l[3]) : null;
    },
    remove(u) {
      this.write(u, "", Date.now() - 864e5);
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
function WM(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function YM(u, l) {
  return l ? u.replace(/\/?\/$/, "") + "/" + l.replace(/^\/+/, "") : u;
}
function I1(u, l) {
  return u && !WM(l) ? YM(u, l) : l;
}
const qM = xl.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const l = /(msie|trident)/i.test(navigator.userAgent), c = document.createElement("a");
    let d;
    function m(g) {
      let S = g;
      return l && (c.setAttribute("href", S), S = c.href), c.setAttribute("href", S), {
        href: c.href,
        protocol: c.protocol ? c.protocol.replace(/:$/, "") : "",
        host: c.host,
        search: c.search ? c.search.replace(/^\?/, "") : "",
        hash: c.hash ? c.hash.replace(/^#/, "") : "",
        hostname: c.hostname,
        port: c.port,
        pathname: c.pathname.charAt(0) === "/" ? c.pathname : "/" + c.pathname
      };
    }
    return d = m(window.location.href), function(S) {
      const y = ye.isString(S) ? m(S) : S;
      return y.protocol === d.protocol && y.host === d.host;
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
function QM(u) {
  const l = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return l && l[1] || "";
}
function GM(u, l) {
  u = u || 10;
  const c = new Array(u), d = new Array(u);
  let m = 0, g = 0, S;
  return l = l !== void 0 ? l : 1e3, function(x) {
    const O = Date.now(), k = d[g];
    S || (S = O), c[m] = x, d[m] = O;
    let R = g, D = 0;
    for (; R !== m; )
      D += c[R++], R = R % u;
    if (m = (m + 1) % u, m === g && (g = (g + 1) % u), O - S < l)
      return;
    const j = k && O - k;
    return j ? Math.round(D * 1e3 / j) : void 0;
  };
}
function AR(u, l) {
  let c = 0;
  const d = GM(50, 250);
  return (m) => {
    const g = m.loaded, S = m.lengthComputable ? m.total : void 0, y = g - c, x = d(y), O = g <= S;
    c = g;
    const k = {
      loaded: g,
      total: S,
      progress: S ? g / S : void 0,
      bytes: y,
      rate: x || void 0,
      estimated: x && S && O ? (S - g) / x : void 0,
      event: m
    };
    k[l ? "download" : "upload"] = !0, u(k);
  };
}
const KM = typeof XMLHttpRequest < "u", XM = KM && function(u) {
  return new Promise(function(c, d) {
    let m = u.data;
    const g = ro.from(u.headers).normalize();
    let { responseType: S, withXSRFToken: y } = u, x;
    function O() {
      u.cancelToken && u.cancelToken.unsubscribe(x), u.signal && u.signal.removeEventListener("abort", x);
    }
    let k;
    if (ye.isFormData(m)) {
      if (xl.hasStandardBrowserEnv || xl.hasStandardBrowserWebWorkerEnv)
        g.setContentType(!1);
      else if ((k = g.getContentType()) !== !1) {
        const [H, ...oe] = k ? k.split(";").map((ve) => ve.trim()).filter(Boolean) : [];
        g.setContentType([H || "multipart/form-data", ...oe].join("; "));
      }
    }
    let R = new XMLHttpRequest();
    if (u.auth) {
      const H = u.auth.username || "", oe = u.auth.password ? unescape(encodeURIComponent(u.auth.password)) : "";
      g.set("Authorization", "Basic " + btoa(H + ":" + oe));
    }
    const D = I1(u.baseURL, u.url);
    R.open(u.method.toUpperCase(), F1(D, u.params, u.paramsSerializer), !0), R.timeout = u.timeout;
    function j() {
      if (!R)
        return;
      const H = ro.from(
        "getAllResponseHeaders" in R && R.getAllResponseHeaders()
      ), ve = {
        data: !S || S === "text" || S === "json" ? R.responseText : R.response,
        status: R.status,
        statusText: R.statusText,
        headers: H,
        config: u,
        request: R
      };
      VM(function(fe) {
        c(fe), O();
      }, function(fe) {
        d(fe), O();
      }, ve), R = null;
    }
    if ("onloadend" in R ? R.onloadend = j : R.onreadystatechange = function() {
      !R || R.readyState !== 4 || R.status === 0 && !(R.responseURL && R.responseURL.indexOf("file:") === 0) || setTimeout(j);
    }, R.onabort = function() {
      R && (d(new ln("Request aborted", ln.ECONNABORTED, u, R)), R = null);
    }, R.onerror = function() {
      d(new ln("Network Error", ln.ERR_NETWORK, u, R)), R = null;
    }, R.ontimeout = function() {
      let oe = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded";
      const ve = u.transitional || H1;
      u.timeoutErrorMessage && (oe = u.timeoutErrorMessage), d(new ln(
        oe,
        ve.clarifyTimeoutError ? ln.ETIMEDOUT : ln.ECONNABORTED,
        u,
        R
      )), R = null;
    }, xl.hasStandardBrowserEnv && (y && ye.isFunction(y) && (y = y(u)), y || y !== !1 && qM(D))) {
      const H = u.xsrfHeaderName && u.xsrfCookieName && IM.read(u.xsrfCookieName);
      H && g.set(u.xsrfHeaderName, H);
    }
    m === void 0 && g.setContentType(null), "setRequestHeader" in R && ye.forEach(g.toJSON(), function(oe, ve) {
      R.setRequestHeader(ve, oe);
    }), ye.isUndefined(u.withCredentials) || (R.withCredentials = !!u.withCredentials), S && S !== "json" && (R.responseType = u.responseType), typeof u.onDownloadProgress == "function" && R.addEventListener("progress", AR(u.onDownloadProgress, !0)), typeof u.onUploadProgress == "function" && R.upload && R.upload.addEventListener("progress", AR(u.onUploadProgress)), (u.cancelToken || u.signal) && (x = (H) => {
      R && (d(!H || H.type ? new Sv(null, u, R) : H), R.abort(), R = null);
    }, u.cancelToken && u.cancelToken.subscribe(x), u.signal && (u.signal.aborted ? x() : u.signal.addEventListener("abort", x)));
    const U = QM(D);
    if (U && xl.protocols.indexOf(U) === -1) {
      d(new ln("Unsupported protocol " + U + ":", ln.ERR_BAD_REQUEST, u));
      return;
    }
    R.send(m || null);
  });
}, Yw = {
  http: bM,
  xhr: XM
};
ye.forEach(Yw, (u, l) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: l });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: l });
  }
});
const NR = (u) => `- ${u}`, JM = (u) => ye.isFunction(u) || u === null || u === !1, W1 = {
  getAdapter: (u) => {
    u = ye.isArray(u) ? u : [u];
    const { length: l } = u;
    let c, d;
    const m = {};
    for (let g = 0; g < l; g++) {
      c = u[g];
      let S;
      if (d = c, !JM(c) && (d = Yw[(S = String(c)).toLowerCase()], d === void 0))
        throw new ln(`Unknown adapter '${S}'`);
      if (d)
        break;
      m[S || "#" + g] = d;
    }
    if (!d) {
      const g = Object.entries(m).map(
        ([y, x]) => `adapter ${y} ` + (x === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let S = l ? g.length > 1 ? `since :
` + g.map(NR).join(`
`) : " " + NR(g[0]) : "as no adapter specified";
      throw new ln(
        "There is no suitable adapter to dispatch the request " + S,
        "ERR_NOT_SUPPORT"
      );
    }
    return d;
  },
  adapters: Yw
};
function kw(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Sv(null, u);
}
function LR(u) {
  return kw(u), u.headers = ro.from(u.headers), u.data = Tw.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), W1.getAdapter(u.adapter || gv.adapter)(u).then(function(d) {
    return kw(u), d.data = Tw.call(
      u,
      u.transformResponse,
      d
    ), d.headers = ro.from(d.headers), d;
  }, function(d) {
    return V1(d) || (kw(u), d && d.response && (d.response.data = Tw.call(
      u,
      u.transformResponse,
      d.response
    ), d.response.headers = ro.from(d.response.headers))), Promise.reject(d);
  });
}
const MR = (u) => u instanceof ro ? u.toJSON() : u;
function Xd(u, l) {
  l = l || {};
  const c = {};
  function d(O, k, R) {
    return ye.isPlainObject(O) && ye.isPlainObject(k) ? ye.merge.call({ caseless: R }, O, k) : ye.isPlainObject(k) ? ye.merge({}, k) : ye.isArray(k) ? k.slice() : k;
  }
  function m(O, k, R) {
    if (ye.isUndefined(k)) {
      if (!ye.isUndefined(O))
        return d(void 0, O, R);
    } else return d(O, k, R);
  }
  function g(O, k) {
    if (!ye.isUndefined(k))
      return d(void 0, k);
  }
  function S(O, k) {
    if (ye.isUndefined(k)) {
      if (!ye.isUndefined(O))
        return d(void 0, O);
    } else return d(void 0, k);
  }
  function y(O, k, R) {
    if (R in l)
      return d(O, k);
    if (R in u)
      return d(void 0, O);
  }
  const x = {
    url: g,
    method: g,
    data: g,
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
    validateStatus: y,
    headers: (O, k) => m(MR(O), MR(k), !0)
  };
  return ye.forEach(Object.keys(Object.assign({}, u, l)), function(k) {
    const R = x[k] || m, D = R(u[k], l[k], k);
    ye.isUndefined(D) && R !== y || (c[k] = D);
  }), c;
}
const Y1 = "1.6.7", mb = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, l) => {
  mb[u] = function(d) {
    return typeof d === u || "a" + (l < 1 ? "n " : " ") + u;
  };
});
const jR = {};
mb.transitional = function(l, c, d) {
  function m(g, S) {
    return "[Axios v" + Y1 + "] Transitional option '" + g + "'" + S + (d ? ". " + d : "");
  }
  return (g, S, y) => {
    if (l === !1)
      throw new ln(
        m(S, " has been removed" + (c ? " in " + c : "")),
        ln.ERR_DEPRECATED
      );
    return c && !jR[S] && (jR[S] = !0, console.warn(
      m(
        S,
        " has been deprecated since v" + c + " and will be removed in the near future"
      )
    )), l ? l(g, S, y) : !0;
  };
};
function ZM(u, l, c) {
  if (typeof u != "object")
    throw new ln("options must be an object", ln.ERR_BAD_OPTION_VALUE);
  const d = Object.keys(u);
  let m = d.length;
  for (; m-- > 0; ) {
    const g = d[m], S = l[g];
    if (S) {
      const y = u[g], x = y === void 0 || S(y, g, u);
      if (x !== !0)
        throw new ln("option " + g + " must be " + x, ln.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0)
      throw new ln("Unknown option " + g, ln.ERR_BAD_OPTION);
  }
}
const qw = {
  assertOptions: ZM,
  validators: mb
}, Rs = qw.validators;
class Zc {
  constructor(l) {
    this.defaults = l, this.interceptors = {
      request: new OR(),
      response: new OR()
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
  async request(l, c) {
    try {
      return await this._request(l, c);
    } catch (d) {
      if (d instanceof Error) {
        let m;
        Error.captureStackTrace ? Error.captureStackTrace(m = {}) : m = new Error();
        const g = m.stack ? m.stack.replace(/^.+\n/, "") : "";
        d.stack ? g && !String(d.stack).endsWith(g.replace(/^.+\n.+\n/, "")) && (d.stack += `
` + g) : d.stack = g;
      }
      throw d;
    }
  }
  _request(l, c) {
    typeof l == "string" ? (c = c || {}, c.url = l) : c = l || {}, c = Xd(this.defaults, c);
    const { transitional: d, paramsSerializer: m, headers: g } = c;
    d !== void 0 && qw.assertOptions(d, {
      silentJSONParsing: Rs.transitional(Rs.boolean),
      forcedJSONParsing: Rs.transitional(Rs.boolean),
      clarifyTimeoutError: Rs.transitional(Rs.boolean)
    }, !1), m != null && (ye.isFunction(m) ? c.paramsSerializer = {
      serialize: m
    } : qw.assertOptions(m, {
      encode: Rs.function,
      serialize: Rs.function
    }, !0)), c.method = (c.method || this.defaults.method || "get").toLowerCase();
    let S = g && ye.merge(
      g.common,
      g[c.method]
    );
    g && ye.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (U) => {
        delete g[U];
      }
    ), c.headers = ro.concat(S, g);
    const y = [];
    let x = !0;
    this.interceptors.request.forEach(function(H) {
      typeof H.runWhen == "function" && H.runWhen(c) === !1 || (x = x && H.synchronous, y.unshift(H.fulfilled, H.rejected));
    });
    const O = [];
    this.interceptors.response.forEach(function(H) {
      O.push(H.fulfilled, H.rejected);
    });
    let k, R = 0, D;
    if (!x) {
      const U = [LR.bind(this), void 0];
      for (U.unshift.apply(U, y), U.push.apply(U, O), D = U.length, k = Promise.resolve(c); R < D; )
        k = k.then(U[R++], U[R++]);
      return k;
    }
    D = y.length;
    let j = c;
    for (R = 0; R < D; ) {
      const U = y[R++], H = y[R++];
      try {
        j = U(j);
      } catch (oe) {
        H.call(this, oe);
        break;
      }
    }
    try {
      k = LR.call(this, j);
    } catch (U) {
      return Promise.reject(U);
    }
    for (R = 0, D = O.length; R < D; )
      k = k.then(O[R++], O[R++]);
    return k;
  }
  getUri(l) {
    l = Xd(this.defaults, l);
    const c = I1(l.baseURL, l.url);
    return F1(c, l.params, l.paramsSerializer);
  }
}
ye.forEach(["delete", "get", "head", "options"], function(l) {
  Zc.prototype[l] = function(c, d) {
    return this.request(Xd(d || {}, {
      method: l,
      url: c,
      data: (d || {}).data
    }));
  };
});
ye.forEach(["post", "put", "patch"], function(l) {
  function c(d) {
    return function(g, S, y) {
      return this.request(Xd(y || {}, {
        method: l,
        headers: d ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: g,
        data: S
      }));
    };
  }
  Zc.prototype[l] = c(), Zc.prototype[l + "Form"] = c(!0);
});
class yb {
  constructor(l) {
    if (typeof l != "function")
      throw new TypeError("executor must be a function.");
    let c;
    this.promise = new Promise(function(g) {
      c = g;
    });
    const d = this;
    this.promise.then((m) => {
      if (!d._listeners) return;
      let g = d._listeners.length;
      for (; g-- > 0; )
        d._listeners[g](m);
      d._listeners = null;
    }), this.promise.then = (m) => {
      let g;
      const S = new Promise((y) => {
        d.subscribe(y), g = y;
      }).then(m);
      return S.cancel = function() {
        d.unsubscribe(g);
      }, S;
    }, l(function(g, S, y) {
      d.reason || (d.reason = new Sv(g, S, y), c(d.reason));
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
  subscribe(l) {
    if (this.reason) {
      l(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(l) : this._listeners = [l];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(l) {
    if (!this._listeners)
      return;
    const c = this._listeners.indexOf(l);
    c !== -1 && this._listeners.splice(c, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let l;
    return {
      token: new yb(function(m) {
        l = m;
      }),
      cancel: l
    };
  }
}
function ej(u) {
  return function(c) {
    return u.apply(null, c);
  };
}
function tj(u) {
  return ye.isObject(u) && u.isAxiosError === !0;
}
const Qw = {
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
Object.entries(Qw).forEach(([u, l]) => {
  Qw[l] = u;
});
function q1(u) {
  const l = new Zc(u), c = T1(Zc.prototype.request, l);
  return ye.extend(c, Zc.prototype, l, { allOwnKeys: !0 }), ye.extend(c, l, null, { allOwnKeys: !0 }), c.create = function(m) {
    return q1(Xd(u, m));
  }, c;
}
const nr = q1(gv);
nr.Axios = Zc;
nr.CanceledError = Sv;
nr.CancelToken = yb;
nr.isCancel = V1;
nr.VERSION = Y1;
nr.toFormData = Wg;
nr.AxiosError = ln;
nr.Cancel = nr.CanceledError;
nr.all = function(l) {
  return Promise.all(l);
};
nr.spread = ej;
nr.isAxiosError = tj;
nr.mergeConfig = Xd;
nr.AxiosHeaders = ro;
nr.formToJSON = (u) => B1(ye.isHTMLForm(u) ? new FormData(u) : u);
nr.getAdapter = W1.getAdapter;
nr.HttpStatusCode = Qw;
nr.default = nr;
let nj = { data: "" }, rj = (u) => typeof window == "object" ? ((u ? u.querySelector("#_goober") : window._goober) || Object.assign((u || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : u || nj, aj = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, ij = /\/\*[^]*?\*\/|  +/g, zR = /\n+/g, Ts = (u, l) => {
  let c = "", d = "", m = "";
  for (let g in u) {
    let S = u[g];
    g[0] == "@" ? g[1] == "i" ? c = g + " " + S + ";" : d += g[1] == "f" ? Ts(S, g) : g + "{" + Ts(S, g[1] == "k" ? "" : l) + "}" : typeof S == "object" ? d += Ts(S, l ? l.replace(/([^,])+/g, (y) => g.replace(/(^:.*)|([^,])+/g, (x) => /&/.test(x) ? x.replace(/&/g, y) : y ? y + " " + x : x)) : g) : S != null && (g = /^--/.test(g) ? g : g.replace(/[A-Z]/g, "-$&").toLowerCase(), m += Ts.p ? Ts.p(g, S) : g + ":" + S + ";");
  }
  return c + (l && m ? l + "{" + m + "}" : m) + d;
}, gu = {}, Q1 = (u) => {
  if (typeof u == "object") {
    let l = "";
    for (let c in u) l += c + Q1(u[c]);
    return l;
  }
  return u;
}, oj = (u, l, c, d, m) => {
  let g = Q1(u), S = gu[g] || (gu[g] = ((x) => {
    let O = 0, k = 11;
    for (; O < x.length; ) k = 101 * k + x.charCodeAt(O++) >>> 0;
    return "go" + k;
  })(g));
  if (!gu[S]) {
    let x = g !== u ? u : ((O) => {
      let k, R, D = [{}];
      for (; k = aj.exec(O.replace(ij, "")); ) k[4] ? D.shift() : k[3] ? (R = k[3].replace(zR, " ").trim(), D.unshift(D[0][R] = D[0][R] || {})) : D[0][k[1]] = k[2].replace(zR, " ").trim();
      return D[0];
    })(u);
    gu[S] = Ts(m ? { ["@keyframes " + S]: x } : x, c ? "" : "." + S);
  }
  let y = c && gu.g ? gu.g : null;
  return c && (gu.g = gu[S]), ((x, O, k, R) => {
    R ? O.data = O.data.replace(R, x) : O.data.indexOf(x) === -1 && (O.data = k ? x + O.data : O.data + x);
  })(gu[S], l, d, y), S;
}, lj = (u, l, c) => u.reduce((d, m, g) => {
  let S = l[g];
  if (S && S.call) {
    let y = S(c), x = y && y.props && y.props.className || /^go/.test(y) && y;
    S = x ? "." + x : y && typeof y == "object" ? y.props ? "" : Ts(y, "") : y === !1 ? "" : y;
  }
  return d + m + (S ?? "");
}, "");
function Yg(u) {
  let l = this || {}, c = u.call ? u(l.p) : u;
  return oj(c.unshift ? c.raw ? lj(c, [].slice.call(arguments, 1), l.p) : c.reduce((d, m) => Object.assign(d, m && m.call ? m(l.p) : m), {}) : c, rj(l.target), l.g, l.o, l.k);
}
let G1, Gw, Kw;
Yg.bind({ g: 1 });
let Su = Yg.bind({ k: 1 });
function uj(u, l, c, d) {
  Ts.p = l, G1 = u, Gw = c, Kw = d;
}
function As(u, l) {
  let c = this || {};
  return function() {
    let d = arguments;
    function m(g, S) {
      let y = Object.assign({}, g), x = y.className || m.className;
      c.p = Object.assign({ theme: Gw && Gw() }, y), c.o = / *go\d+/.test(x), y.className = Yg.apply(c, d) + (x ? " " + x : "");
      let O = u;
      return u[0] && (O = y.as || u, delete y.as), Kw && O[0] && Kw(y), G1(O, y);
    }
    return m;
  };
}
var sj = (u) => typeof u == "function", Ag = (u, l) => sj(u) ? u(l) : u, cj = /* @__PURE__ */ (() => {
  let u = 0;
  return () => (++u).toString();
})(), K1 = /* @__PURE__ */ (() => {
  let u;
  return () => {
    if (u === void 0 && typeof window < "u") {
      let l = matchMedia("(prefers-reduced-motion: reduce)");
      u = !l || l.matches;
    }
    return u;
  };
})(), fj = 20, kg = /* @__PURE__ */ new Map(), dj = 1e3, UR = (u) => {
  if (kg.has(u)) return;
  let l = setTimeout(() => {
    kg.delete(u), ff({ type: 4, toastId: u });
  }, dj);
  kg.set(u, l);
}, pj = (u) => {
  let l = kg.get(u);
  l && clearTimeout(l);
}, Xw = (u, l) => {
  switch (l.type) {
    case 0:
      return { ...u, toasts: [l.toast, ...u.toasts].slice(0, fj) };
    case 1:
      return l.toast.id && pj(l.toast.id), { ...u, toasts: u.toasts.map((g) => g.id === l.toast.id ? { ...g, ...l.toast } : g) };
    case 2:
      let { toast: c } = l;
      return u.toasts.find((g) => g.id === c.id) ? Xw(u, { type: 1, toast: c }) : Xw(u, { type: 0, toast: c });
    case 3:
      let { toastId: d } = l;
      return d ? UR(d) : u.toasts.forEach((g) => {
        UR(g.id);
      }), { ...u, toasts: u.toasts.map((g) => g.id === d || d === void 0 ? { ...g, visible: !1 } : g) };
    case 4:
      return l.toastId === void 0 ? { ...u, toasts: [] } : { ...u, toasts: u.toasts.filter((g) => g.id !== l.toastId) };
    case 5:
      return { ...u, pausedAt: l.time };
    case 6:
      let m = l.time - (u.pausedAt || 0);
      return { ...u, pausedAt: void 0, toasts: u.toasts.map((g) => ({ ...g, pauseDuration: g.pauseDuration + m })) };
  }
}, Og = [], Dg = { toasts: [], pausedAt: void 0 }, ff = (u) => {
  Dg = Xw(Dg, u), Og.forEach((l) => {
    l(Dg);
  });
}, hj = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, vj = (u = {}) => {
  let [l, c] = me.useState(Dg);
  me.useEffect(() => (Og.push(c), () => {
    let m = Og.indexOf(c);
    m > -1 && Og.splice(m, 1);
  }), [l]);
  let d = l.toasts.map((m) => {
    var g, S;
    return { ...u, ...u[m.type], ...m, duration: m.duration || ((g = u[m.type]) == null ? void 0 : g.duration) || (u == null ? void 0 : u.duration) || hj[m.type], style: { ...u.style, ...(S = u[m.type]) == null ? void 0 : S.style, ...m.style } };
  });
  return { ...l, toasts: d };
}, mj = (u, l = "blank", c) => ({ createdAt: Date.now(), visible: !0, type: l, ariaProps: { role: "status", "aria-live": "polite" }, message: u, pauseDuration: 0, ...c, id: (c == null ? void 0 : c.id) || cj() }), Ev = (u) => (l, c) => {
  let d = mj(l, u, c);
  return ff({ type: 2, toast: d }), d.id;
}, Ai = (u, l) => Ev("blank")(u, l);
Ai.error = Ev("error");
Ai.success = Ev("success");
Ai.loading = Ev("loading");
Ai.custom = Ev("custom");
Ai.dismiss = (u) => {
  ff({ type: 3, toastId: u });
};
Ai.remove = (u) => ff({ type: 4, toastId: u });
Ai.promise = (u, l, c) => {
  let d = Ai.loading(l.loading, { ...c, ...c == null ? void 0 : c.loading });
  return u.then((m) => (Ai.success(Ag(l.success, m), { id: d, ...c, ...c == null ? void 0 : c.success }), m)).catch((m) => {
    Ai.error(Ag(l.error, m), { id: d, ...c, ...c == null ? void 0 : c.error });
  }), u;
};
var yj = (u, l) => {
  ff({ type: 1, toast: { id: u, height: l } });
}, gj = () => {
  ff({ type: 5, time: Date.now() });
}, Sj = (u) => {
  let { toasts: l, pausedAt: c } = vj(u);
  me.useEffect(() => {
    if (c) return;
    let g = Date.now(), S = l.map((y) => {
      if (y.duration === 1 / 0) return;
      let x = (y.duration || 0) + y.pauseDuration - (g - y.createdAt);
      if (x < 0) {
        y.visible && Ai.dismiss(y.id);
        return;
      }
      return setTimeout(() => Ai.dismiss(y.id), x);
    });
    return () => {
      S.forEach((y) => y && clearTimeout(y));
    };
  }, [l, c]);
  let d = me.useCallback(() => {
    c && ff({ type: 6, time: Date.now() });
  }, [c]), m = me.useCallback((g, S) => {
    let { reverseOrder: y = !1, gutter: x = 8, defaultPosition: O } = S || {}, k = l.filter((j) => (j.position || O) === (g.position || O) && j.height), R = k.findIndex((j) => j.id === g.id), D = k.filter((j, U) => U < R && j.visible).length;
    return k.filter((j) => j.visible).slice(...y ? [D + 1] : [0, D]).reduce((j, U) => j + (U.height || 0) + x, 0);
  }, [l]);
  return { toasts: l, handlers: { updateHeight: yj, startPause: gj, endPause: d, calculateOffset: m } };
}, Ej = Su`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, wj = Su`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, bj = Su`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, Cj = As("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(u) => u.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ej} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${wj} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(u) => u.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${bj} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, xj = Su`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, _j = As("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(u) => u.secondary || "#e0e0e0"};
  border-right-color: ${(u) => u.primary || "#616161"};
  animation: ${xj} 1s linear infinite;
`, Rj = Su`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Tj = Su`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, kj = As("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(u) => u.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Rj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Tj} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(u) => u.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, Oj = As("div")`
  position: absolute;
`, Dj = As("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Aj = Su`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Nj = As("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Aj} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Lj = ({ toast: u }) => {
  let { icon: l, type: c, iconTheme: d } = u;
  return l !== void 0 ? typeof l == "string" ? me.createElement(Nj, null, l) : l : c === "blank" ? null : me.createElement(Dj, null, me.createElement(_j, { ...d }), c !== "loading" && me.createElement(Oj, null, c === "error" ? me.createElement(Cj, { ...d }) : me.createElement(kj, { ...d })));
}, Mj = (u) => `
0% {transform: translate3d(0,${u * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, jj = (u) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${u * -150}%,-1px) scale(.6); opacity:0;}
`, zj = "0%{opacity:0;} 100%{opacity:1;}", Uj = "0%{opacity:1;} 100%{opacity:0;}", Pj = As("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Fj = As("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Hj = (u, l) => {
  let c = u.includes("top") ? 1 : -1, [d, m] = K1() ? [zj, Uj] : [Mj(c), jj(c)];
  return { animation: l ? `${Su(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Su(m)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, $j = me.memo(({ toast: u, position: l, style: c, children: d }) => {
  let m = u.height ? Hj(u.position || l || "top-center", u.visible) : { opacity: 0 }, g = me.createElement(Lj, { toast: u }), S = me.createElement(Fj, { ...u.ariaProps }, Ag(u.message, u));
  return me.createElement(Pj, { className: u.className, style: { ...m, ...c, ...u.style } }, typeof d == "function" ? d({ icon: g, message: S }) : me.createElement(me.Fragment, null, g, S));
});
uj(me.createElement);
var Bj = ({ id: u, className: l, style: c, onHeightUpdate: d, children: m }) => {
  let g = me.useCallback((S) => {
    if (S) {
      let y = () => {
        let x = S.getBoundingClientRect().height;
        d(u, x);
      };
      y(), new MutationObserver(y).observe(S, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [u, d]);
  return me.createElement("div", { ref: g, className: l, style: c }, m);
}, Vj = (u, l) => {
  let c = u.includes("top"), d = c ? { top: 0 } : { bottom: 0 }, m = u.includes("center") ? { justifyContent: "center" } : u.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: K1() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${l * (c ? 1 : -1)}px)`, ...d, ...m };
}, Ij = Yg`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, Sg = 16, Wj = ({ reverseOrder: u, position: l = "top-center", toastOptions: c, gutter: d, children: m, containerStyle: g, containerClassName: S }) => {
  let { toasts: y, handlers: x } = Sj(c);
  return me.createElement("div", { style: { position: "fixed", zIndex: 9999, top: Sg, left: Sg, right: Sg, bottom: Sg, pointerEvents: "none", ...g }, className: S, onMouseEnter: x.startPause, onMouseLeave: x.endPause }, y.map((O) => {
    let k = O.position || l, R = x.calculateOffset(O, { reverseOrder: u, gutter: d, defaultPosition: l }), D = Vj(k, R);
    return me.createElement(Bj, { id: O.id, key: O.id, onHeightUpdate: x.updateHeight, className: O.visible ? Ij : "", style: D }, O.type === "custom" ? Ag(O.message, O) : m ? m(O) : me.createElement($j, { toast: O, position: k }));
  }));
}, gi = Ai, Jr = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
let Yj = 0;
function X1(u, l) {
  const c = `atom${++Yj}`, d = {
    toString: () => c
  };
  return typeof u == "function" ? d.read = u : (d.init = u, d.read = qj, d.write = Qj), d;
}
function qj(u) {
  return u(this);
}
function Qj(u, l, c) {
  return l(
    this,
    typeof c == "function" ? c(u(this)) : c
  );
}
const Ow = (u, l) => u.unstable_is ? u.unstable_is(l) : l === u, Dw = (u) => "init" in u, Aw = (u) => !!u.write, Ng = /* @__PURE__ */ new WeakMap(), Gj = (u, l) => {
  Ng.set(u, l), u.catch(() => {
  }).finally(() => Ng.delete(u));
}, PR = (u, l) => {
  const c = Ng.get(u);
  c && (Ng.delete(u), c(l));
}, FR = (u, l) => {
  u.status = "fulfilled", u.value = l;
}, HR = (u, l) => {
  u.status = "rejected", u.reason = l;
}, Kj = (u) => typeof (u == null ? void 0 : u.then) == "function", lv = (u, l) => !!u && "v" in u && "v" in l && Object.is(u.v, l.v), $R = (u, l) => !!u && "e" in u && "e" in l && Object.is(u.e, l.e), qd = (u) => !!u && "v" in u && u.v instanceof Promise, Xj = (u, l) => "v" in u && "v" in l && u.v.orig && u.v.orig === l.v.orig, Eg = (u) => {
  if ("e" in u)
    throw u.e;
  return u.v;
}, J1 = () => {
  const u = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new Map();
  let d, m;
  (Jr ? "production" : void 0) !== "production" && (d = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set());
  const g = (q) => u.get(q), S = (q, we) => {
    (Jr ? "production" : void 0) !== "production" && Object.freeze(we);
    const ke = g(q);
    if (u.set(q, we), c.has(q) || c.set(q, ke), qd(ke)) {
      const Oe = "v" in we ? we.v instanceof Promise ? we.v : Promise.resolve(we.v) : Promise.reject(we.e);
      ke.v !== Oe && PR(ke.v, Oe);
    }
  }, y = (q, we, ke, Oe) => {
    const ge = new Map(
      Oe ? we.d : null
    );
    let Ne = !1;
    ke.forEach((Z, ie) => {
      !Z && Ow(q, ie) && (Z = we), Z ? (ge.set(ie, Z), we.d.get(ie) !== Z && (Ne = !0)) : (Jr ? "production" : void 0) !== "production" && console.warn("[Bug] atom state not found");
    }), (Ne || we.d.size !== ge.size) && (we.d = ge);
  }, x = (q, we, ke, Oe) => {
    const ge = g(q), Ne = {
      d: (ge == null ? void 0 : ge.d) || /* @__PURE__ */ new Map(),
      v: we
    };
    if (ke && y(
      q,
      Ne,
      ke,
      Oe
    ), lv(ge, Ne) && ge.d === Ne.d)
      return ge;
    if (qd(ge) && qd(Ne) && Xj(ge, Ne)) {
      if (ge.d === Ne.d)
        return ge;
      Ne.v = ge.v;
    }
    return S(q, Ne), Ne;
  }, O = (q, we, ke, Oe) => {
    if (Kj(we)) {
      let ge;
      const Ne = () => {
        const ie = g(q);
        if (!qd(ie) || ie.v !== Z)
          return;
        const de = x(
          q,
          Z,
          ke
        );
        l.has(q) && ie.d !== de.d && X(q, de, ie.d);
      }, Z = new Promise((ie, de) => {
        let ue = !1;
        we.then(
          (N) => {
            ue || (ue = !0, FR(Z, N), ie(N), Ne());
          },
          (N) => {
            ue || (ue = !0, HR(Z, N), de(N), Ne());
          }
        ), ge = (N) => {
          ue || (ue = !0, N.then(
            (re) => FR(Z, re),
            (re) => HR(Z, re)
          ), ie(N));
        };
      });
      return Z.orig = we, Z.status = "pending", Gj(Z, (ie) => {
        ie && ge(ie), Oe == null || Oe();
      }), x(q, Z, ke, !0);
    }
    return x(q, we, ke);
  }, k = (q, we, ke) => {
    const Oe = g(q), ge = {
      d: (Oe == null ? void 0 : Oe.d) || /* @__PURE__ */ new Map(),
      e: we
    };
    return ke && y(q, ge, ke), $R(Oe, ge) && Oe.d === ge.d ? Oe : (S(q, ge), ge);
  }, R = (q, we) => {
    const ke = g(q);
    if (!we && ke && (l.has(q) || Array.from(ke.d).every(([ue, N]) => {
      if (ue === q)
        return !0;
      const re = R(ue);
      return re === N || lv(re, N);
    })))
      return ke;
    const Oe = /* @__PURE__ */ new Map();
    let ge = !0;
    const Ne = (ue) => {
      if (Ow(q, ue)) {
        const re = g(ue);
        if (re)
          return Oe.set(ue, re), Eg(re);
        if (Dw(ue))
          return Oe.set(ue, void 0), ue.init;
        throw new Error("no atom init");
      }
      const N = R(ue);
      return Oe.set(ue, N), Eg(N);
    };
    let Z, ie;
    const de = {
      get signal() {
        return Z || (Z = new AbortController()), Z.signal;
      },
      get setSelf() {
        return (Jr ? "production" : void 0) !== "production" && !Aw(q) && console.warn("setSelf function cannot be used with read-only atom"), !ie && Aw(q) && (ie = (...ue) => {
          if ((Jr ? "production" : void 0) !== "production" && ge && console.warn("setSelf function cannot be called in sync"), !ge)
            return xe(q, ...ue);
        }), ie;
      }
    };
    try {
      const ue = q.read(Ne, de);
      return O(
        q,
        ue,
        Oe,
        () => Z == null ? void 0 : Z.abort()
      );
    } catch (ue) {
      return k(q, ue, Oe);
    } finally {
      ge = !1;
    }
  }, D = (q) => Eg(R(q)), j = (q) => {
    let we = l.get(q);
    return we || (we = fe(q)), we;
  }, U = (q, we) => !we.l.size && (!we.t.size || we.t.size === 1 && we.t.has(q)), H = (q) => {
    const we = l.get(q);
    we && U(q, we) && Re(q);
  }, oe = (q) => {
    const we = (Z) => {
      var ie;
      const de = new Set((ie = l.get(Z)) == null ? void 0 : ie.t);
      return c.forEach((ue, N) => {
        var re;
        (re = g(N)) != null && re.d.has(Z) && de.add(N);
      }), de;
    }, ke = new Array(), Oe = /* @__PURE__ */ new Set(), ge = (Z) => {
      if (!Oe.has(Z)) {
        Oe.add(Z);
        for (const ie of we(Z))
          Z !== ie && ge(ie);
        ke.push(Z);
      }
    };
    ge(q);
    const Ne = /* @__PURE__ */ new Set([q]);
    for (let Z = ke.length - 1; Z >= 0; --Z) {
      const ie = ke[Z], de = g(ie);
      if (!de)
        continue;
      let ue = !1;
      for (const N of de.d.keys())
        if (N !== ie && Ne.has(N)) {
          ue = !0;
          break;
        }
      if (ue) {
        const N = R(ie, !0);
        lv(de, N) || Ne.add(ie);
      }
    }
  }, ve = (q, ...we) => {
    let ke = !0;
    const Oe = (Z) => Eg(R(Z)), ge = (Z, ...ie) => {
      let de;
      if (Ow(q, Z)) {
        if (!Dw(Z))
          throw new Error("atom not writable");
        const ue = g(Z), N = O(Z, ie[0]);
        lv(ue, N) || oe(Z);
      } else
        de = ve(Z, ...ie);
      if (!ke) {
        const ue = Ae();
        (Jr ? "production" : void 0) !== "production" && d.forEach(
          (N) => N({ type: "async-write", flushed: ue })
        );
      }
      return de;
    }, Ne = q.write(Oe, ge, ...we);
    return ke = !1, Ne;
  }, xe = (q, ...we) => {
    const ke = ve(q, ...we), Oe = Ae();
    return (Jr ? "production" : void 0) !== "production" && d.forEach(
      (ge) => ge({ type: "write", flushed: Oe })
    ), ke;
  }, fe = (q, we, ke) => {
    var Oe;
    const ge = ke || [];
    (Oe = g(q)) == null || Oe.d.forEach((Z, ie) => {
      const de = l.get(ie);
      de ? de.t.add(q) : ie !== q && fe(ie, q, ge);
    }), R(q);
    const Ne = {
      t: new Set(we && [we]),
      l: /* @__PURE__ */ new Set()
    };
    if (l.set(q, Ne), (Jr ? "production" : void 0) !== "production" && m.add(q), Aw(q) && q.onMount) {
      const { onMount: Z } = q;
      ge.push(() => {
        const ie = Z((...de) => xe(q, ...de));
        ie && (Ne.u = ie);
      });
    }
    return ke || ge.forEach((Z) => Z()), Ne;
  }, Re = (q) => {
    var we;
    const ke = (we = l.get(q)) == null ? void 0 : we.u;
    ke && ke(), l.delete(q), (Jr ? "production" : void 0) !== "production" && m.delete(q);
    const Oe = g(q);
    Oe ? (qd(Oe) && PR(Oe.v), Oe.d.forEach((ge, Ne) => {
      if (Ne !== q) {
        const Z = l.get(Ne);
        Z && (Z.t.delete(q), U(Ne, Z) && Re(Ne));
      }
    })) : (Jr ? "production" : void 0) !== "production" && console.warn("[Bug] could not find atom state to unmount", q);
  }, X = (q, we, ke) => {
    const Oe = new Set(we.d.keys()), ge = /* @__PURE__ */ new Set();
    ke == null || ke.forEach((Ne, Z) => {
      if (Oe.has(Z)) {
        Oe.delete(Z);
        return;
      }
      ge.add(Z);
      const ie = l.get(Z);
      ie && ie.t.delete(q);
    }), Oe.forEach((Ne) => {
      const Z = l.get(Ne);
      Z ? Z.t.add(q) : l.has(q) && fe(Ne, q);
    }), ge.forEach((Ne) => {
      const Z = l.get(Ne);
      Z && U(Ne, Z) && Re(Ne);
    });
  }, Ae = () => {
    let q;
    for ((Jr ? "production" : void 0) !== "production" && (q = /* @__PURE__ */ new Set()); c.size; ) {
      const we = Array.from(c);
      c.clear(), we.forEach(([ke, Oe]) => {
        const ge = g(ke);
        if (ge) {
          const Ne = l.get(ke);
          Ne && ge.d !== (Oe == null ? void 0 : Oe.d) && X(ke, ge, Oe == null ? void 0 : Oe.d), Ne && !// TODO This seems pretty hacky. Hope to fix it.
          // Maybe we could `mountDependencies` in `setAtomState`?
          (!qd(Oe) && (lv(Oe, ge) || $R(Oe, ge))) && (Ne.l.forEach((Z) => Z()), (Jr ? "production" : void 0) !== "production" && q.add(ke));
        } else (Jr ? "production" : void 0) !== "production" && console.warn("[Bug] no atom state to flush");
      });
    }
    if ((Jr ? "production" : void 0) !== "production")
      return q;
  }, tt = (q, we) => {
    const ke = j(q), Oe = Ae(), ge = ke.l;
    return ge.add(we), (Jr ? "production" : void 0) !== "production" && d.forEach(
      (Ne) => Ne({ type: "sub", flushed: Oe })
    ), () => {
      ge.delete(we), H(q), (Jr ? "production" : void 0) !== "production" && d.forEach((Ne) => Ne({ type: "unsub" }));
    };
  };
  return (Jr ? "production" : void 0) !== "production" ? {
    get: D,
    set: xe,
    sub: tt,
    // store dev methods (these are tentative and subject to change without notice)
    dev_subscribe_store: (q, we) => {
      if (we !== 2)
        throw new Error("The current StoreListener revision is 2.");
      return d.add(q), () => {
        d.delete(q);
      };
    },
    dev_get_mounted_atoms: () => m.values(),
    dev_get_atom_state: (q) => u.get(q),
    dev_get_mounted: (q) => l.get(q),
    dev_restore_atoms: (q) => {
      for (const [ke, Oe] of q)
        Dw(ke) && (O(ke, Oe), oe(ke));
      const we = Ae();
      d.forEach(
        (ke) => ke({ type: "restore", flushed: we })
      );
    }
  } : {
    get: D,
    set: xe,
    sub: tt
  };
};
let Nw;
(Jr ? "production" : void 0) !== "production" && (typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__ == "number" ? ++globalThis.__NUMBER_OF_JOTAI_INSTANCES__ : globalThis.__NUMBER_OF_JOTAI_INSTANCES__ = 1);
const Jj = () => (Nw || ((Jr ? "production" : void 0) !== "production" && globalThis.__NUMBER_OF_JOTAI_INSTANCES__ !== 1 && console.warn(
  "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
), Nw = J1()), Nw);
var Zj = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Z1 = me.createContext(void 0), eT = (u) => me.useContext(Z1) || Jj(), ez = ({
  children: u,
  store: l
}) => {
  const c = me.useRef();
  return !l && !c.current && (c.current = J1()), me.createElement(
    Z1.Provider,
    {
      value: l || c.current
    },
    u
  );
}, tz = (u) => typeof (u == null ? void 0 : u.then) == "function", nz = Cl.use || ((u) => {
  if (u.status === "pending")
    throw u;
  if (u.status === "fulfilled")
    return u.value;
  throw u.status === "rejected" ? u.reason : (u.status = "pending", u.then(
    (l) => {
      u.status = "fulfilled", u.value = l;
    },
    (l) => {
      u.status = "rejected", u.reason = l;
    }
  ), u);
});
function rz(u, l) {
  const c = eT(), [[d, m, g], S] = me.useReducer(
    (O) => {
      const k = c.get(u);
      return Object.is(O[0], k) && O[1] === c && O[2] === u ? O : [k, c, u];
    },
    void 0,
    () => [c.get(u), c, u]
  );
  let y = d;
  return (m !== c || g !== u) && (S(), y = c.get(u)), me.useEffect(() => {
    const O = c.sub(u, () => {
      S();
    });
    return S(), O;
  }, [c, u, void 0]), me.useDebugValue(y), tz(y) ? nz(y) : y;
}
function az(u, l) {
  const c = eT();
  return me.useCallback(
    (...m) => {
      if ((Zj ? "production" : void 0) !== "production" && !("write" in u))
        throw new Error("not writable atom");
      return c.set(u, ...m);
    },
    [c, u]
  );
}
function gb(u, l) {
  return [
    rz(u),
    // We do wrong type assertion here, which results in throwing an error.
    az(u)
  ];
}
const tT = X1([]), nT = X1(twChatSettings.chat_widgets ? twChatSettings.chat_widgets : []);
var Jw = { exports: {} }, af = {}, Zw = { exports: {} }, wg = { exports: {} }, Cn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BR;
function iz() {
  if (BR) return Cn;
  BR = 1;
  var u = typeof Symbol == "function" && Symbol.for, l = u ? Symbol.for("react.element") : 60103, c = u ? Symbol.for("react.portal") : 60106, d = u ? Symbol.for("react.fragment") : 60107, m = u ? Symbol.for("react.strict_mode") : 60108, g = u ? Symbol.for("react.profiler") : 60114, S = u ? Symbol.for("react.provider") : 60109, y = u ? Symbol.for("react.context") : 60110, x = u ? Symbol.for("react.async_mode") : 60111, O = u ? Symbol.for("react.concurrent_mode") : 60111, k = u ? Symbol.for("react.forward_ref") : 60112, R = u ? Symbol.for("react.suspense") : 60113, D = u ? Symbol.for("react.suspense_list") : 60120, j = u ? Symbol.for("react.memo") : 60115, U = u ? Symbol.for("react.lazy") : 60116, H = u ? Symbol.for("react.block") : 60121, oe = u ? Symbol.for("react.fundamental") : 60117, ve = u ? Symbol.for("react.responder") : 60118, xe = u ? Symbol.for("react.scope") : 60119;
  function fe(X) {
    if (typeof X == "object" && X !== null) {
      var Ae = X.$$typeof;
      switch (Ae) {
        case l:
          switch (X = X.type, X) {
            case x:
            case O:
            case d:
            case g:
            case m:
            case R:
              return X;
            default:
              switch (X = X && X.$$typeof, X) {
                case y:
                case k:
                case U:
                case j:
                case S:
                  return X;
                default:
                  return Ae;
              }
          }
        case c:
          return Ae;
      }
    }
  }
  function Re(X) {
    return fe(X) === O;
  }
  return Cn.AsyncMode = x, Cn.ConcurrentMode = O, Cn.ContextConsumer = y, Cn.ContextProvider = S, Cn.Element = l, Cn.ForwardRef = k, Cn.Fragment = d, Cn.Lazy = U, Cn.Memo = j, Cn.Portal = c, Cn.Profiler = g, Cn.StrictMode = m, Cn.Suspense = R, Cn.isAsyncMode = function(X) {
    return Re(X) || fe(X) === x;
  }, Cn.isConcurrentMode = Re, Cn.isContextConsumer = function(X) {
    return fe(X) === y;
  }, Cn.isContextProvider = function(X) {
    return fe(X) === S;
  }, Cn.isElement = function(X) {
    return typeof X == "object" && X !== null && X.$$typeof === l;
  }, Cn.isForwardRef = function(X) {
    return fe(X) === k;
  }, Cn.isFragment = function(X) {
    return fe(X) === d;
  }, Cn.isLazy = function(X) {
    return fe(X) === U;
  }, Cn.isMemo = function(X) {
    return fe(X) === j;
  }, Cn.isPortal = function(X) {
    return fe(X) === c;
  }, Cn.isProfiler = function(X) {
    return fe(X) === g;
  }, Cn.isStrictMode = function(X) {
    return fe(X) === m;
  }, Cn.isSuspense = function(X) {
    return fe(X) === R;
  }, Cn.isValidElementType = function(X) {
    return typeof X == "string" || typeof X == "function" || X === d || X === O || X === g || X === m || X === R || X === D || typeof X == "object" && X !== null && (X.$$typeof === U || X.$$typeof === j || X.$$typeof === S || X.$$typeof === y || X.$$typeof === k || X.$$typeof === oe || X.$$typeof === ve || X.$$typeof === xe || X.$$typeof === H);
  }, Cn.typeOf = fe, Cn;
}
var xn = {}, VR;
function oz() {
  if (VR) return xn;
  VR = 1;
  var u = {};
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return u.NODE_ENV !== "production" && function() {
    var l = typeof Symbol == "function" && Symbol.for, c = l ? Symbol.for("react.element") : 60103, d = l ? Symbol.for("react.portal") : 60106, m = l ? Symbol.for("react.fragment") : 60107, g = l ? Symbol.for("react.strict_mode") : 60108, S = l ? Symbol.for("react.profiler") : 60114, y = l ? Symbol.for("react.provider") : 60109, x = l ? Symbol.for("react.context") : 60110, O = l ? Symbol.for("react.async_mode") : 60111, k = l ? Symbol.for("react.concurrent_mode") : 60111, R = l ? Symbol.for("react.forward_ref") : 60112, D = l ? Symbol.for("react.suspense") : 60113, j = l ? Symbol.for("react.suspense_list") : 60120, U = l ? Symbol.for("react.memo") : 60115, H = l ? Symbol.for("react.lazy") : 60116, oe = l ? Symbol.for("react.block") : 60121, ve = l ? Symbol.for("react.fundamental") : 60117, xe = l ? Symbol.for("react.responder") : 60118, fe = l ? Symbol.for("react.scope") : 60119;
    function Re(Me) {
      return typeof Me == "string" || typeof Me == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Me === m || Me === k || Me === S || Me === g || Me === D || Me === j || typeof Me == "object" && Me !== null && (Me.$$typeof === H || Me.$$typeof === U || Me.$$typeof === y || Me.$$typeof === x || Me.$$typeof === R || Me.$$typeof === ve || Me.$$typeof === xe || Me.$$typeof === fe || Me.$$typeof === oe);
    }
    function X(Me) {
      if (typeof Me == "object" && Me !== null) {
        var _t = Me.$$typeof;
        switch (_t) {
          case c:
            var _n = Me.type;
            switch (_n) {
              case O:
              case k:
              case m:
              case S:
              case g:
              case D:
                return _n;
              default:
                var cn = _n && _n.$$typeof;
                switch (cn) {
                  case x:
                  case R:
                  case H:
                  case U:
                  case y:
                    return cn;
                  default:
                    return _t;
                }
            }
          case d:
            return _t;
        }
      }
    }
    var Ae = O, tt = k, q = x, we = y, ke = c, Oe = R, ge = m, Ne = H, Z = U, ie = d, de = S, ue = g, N = D, re = !1;
    function L(Me) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(Me) || X(Me) === O;
    }
    function F(Me) {
      return X(Me) === k;
    }
    function J(Me) {
      return X(Me) === x;
    }
    function _e(Me) {
      return X(Me) === y;
    }
    function be(Me) {
      return typeof Me == "object" && Me !== null && Me.$$typeof === c;
    }
    function Pe(Me) {
      return X(Me) === R;
    }
    function Be(Me) {
      return X(Me) === m;
    }
    function Le(Me) {
      return X(Me) === H;
    }
    function Fe(Me) {
      return X(Me) === U;
    }
    function Ge(Me) {
      return X(Me) === d;
    }
    function ht(Me) {
      return X(Me) === S;
    }
    function vt(Me) {
      return X(Me) === g;
    }
    function $t(Me) {
      return X(Me) === D;
    }
    xn.AsyncMode = Ae, xn.ConcurrentMode = tt, xn.ContextConsumer = q, xn.ContextProvider = we, xn.Element = ke, xn.ForwardRef = Oe, xn.Fragment = ge, xn.Lazy = Ne, xn.Memo = Z, xn.Portal = ie, xn.Profiler = de, xn.StrictMode = ue, xn.Suspense = N, xn.isAsyncMode = L, xn.isConcurrentMode = F, xn.isContextConsumer = J, xn.isContextProvider = _e, xn.isElement = be, xn.isForwardRef = Pe, xn.isFragment = Be, xn.isLazy = Le, xn.isMemo = Fe, xn.isPortal = Ge, xn.isProfiler = ht, xn.isStrictMode = vt, xn.isSuspense = $t, xn.isValidElementType = Re, xn.typeOf = X;
  }(), xn;
}
var IR;
function rT() {
  if (IR) return wg.exports;
  IR = 1;
  var u = {};
  return u.NODE_ENV === "production" ? wg.exports = iz() : wg.exports = oz(), wg.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Lw, WR;
function lz() {
  if (WR) return Lw;
  WR = 1;
  var u = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
  function d(g) {
    if (g == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(g);
  }
  function m() {
    try {
      if (!Object.assign)
        return !1;
      var g = new String("abc");
      if (g[5] = "de", Object.getOwnPropertyNames(g)[0] === "5")
        return !1;
      for (var S = {}, y = 0; y < 10; y++)
        S["_" + String.fromCharCode(y)] = y;
      var x = Object.getOwnPropertyNames(S).map(function(k) {
        return S[k];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var O = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(k) {
        O[k] = k;
      }), Object.keys(Object.assign({}, O)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Lw = m() ? Object.assign : function(g, S) {
    for (var y, x = d(g), O, k = 1; k < arguments.length; k++) {
      y = Object(arguments[k]);
      for (var R in y)
        l.call(y, R) && (x[R] = y[R]);
      if (u) {
        O = u(y);
        for (var D = 0; D < O.length; D++)
          c.call(y, O[D]) && (x[O[D]] = y[O[D]]);
      }
    }
    return x;
  }, Lw;
}
var Mw, YR;
function Sb() {
  if (YR) return Mw;
  YR = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mw = u, Mw;
}
var jw, qR;
function aT() {
  return qR || (qR = 1, jw = Function.call.bind(Object.prototype.hasOwnProperty)), jw;
}
var zw, QR;
function uz() {
  if (QR) return zw;
  QR = 1;
  var u = {}, l = function() {
  };
  if (u.NODE_ENV !== "production") {
    var c = Sb(), d = {}, m = aT();
    l = function(S) {
      var y = "Warning: " + S;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function g(S, y, x, O, k) {
    if (u.NODE_ENV !== "production") {
      for (var R in S)
        if (m(S, R)) {
          var D;
          try {
            if (typeof S[R] != "function") {
              var j = Error(
                (O || "React class") + ": " + x + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw j.name = "Invariant Violation", j;
            }
            D = S[R](y, R, O, x, null, c);
          } catch (H) {
            D = H;
          }
          if (D && !(D instanceof Error) && l(
            (O || "React class") + ": type specification of " + x + " `" + R + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof D + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), D instanceof Error && !(D.message in d)) {
            d[D.message] = !0;
            var U = k ? k() : "";
            l(
              "Failed " + x + " type: " + D.message + (U ?? "")
            );
          }
        }
    }
  }
  return g.resetWarningCache = function() {
    u.NODE_ENV !== "production" && (d = {});
  }, zw = g, zw;
}
var Uw, GR;
function sz() {
  if (GR) return Uw;
  GR = 1;
  var u = {}, l = rT(), c = lz(), d = Sb(), m = aT(), g = uz(), S = function() {
  };
  u.NODE_ENV !== "production" && (S = function(x) {
    var O = "Warning: " + x;
    typeof console < "u" && console.error(O);
    try {
      throw new Error(O);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return Uw = function(x, O) {
    var k = typeof Symbol == "function" && Symbol.iterator, R = "@@iterator";
    function D(F) {
      var J = F && (k && F[k] || F[R]);
      if (typeof J == "function")
        return J;
    }
    var j = "<<anonymous>>", U = {
      array: xe("array"),
      bigint: xe("bigint"),
      bool: xe("boolean"),
      func: xe("function"),
      number: xe("number"),
      object: xe("object"),
      string: xe("string"),
      symbol: xe("symbol"),
      any: fe(),
      arrayOf: Re,
      element: X(),
      elementType: Ae(),
      instanceOf: tt,
      node: Oe(),
      objectOf: we,
      oneOf: q,
      oneOfType: ke,
      shape: Ne,
      exact: Z
    };
    function H(F, J) {
      return F === J ? F !== 0 || 1 / F === 1 / J : F !== F && J !== J;
    }
    function oe(F, J) {
      this.message = F, this.data = J && typeof J == "object" ? J : {}, this.stack = "";
    }
    oe.prototype = Error.prototype;
    function ve(F) {
      if (u.NODE_ENV !== "production")
        var J = {}, _e = 0;
      function be(Be, Le, Fe, Ge, ht, vt, $t) {
        if (Ge = Ge || j, vt = vt || Fe, $t !== d) {
          if (O) {
            var Me = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Me.name = "Invariant Violation", Me;
          } else if (u.NODE_ENV !== "production" && typeof console < "u") {
            var _t = Ge + ":" + Fe;
            !J[_t] && // Avoid spamming the console because they are often not actionable except for lib authors
            _e < 3 && (S(
              "You are manually calling a React.PropTypes validation function for the `" + vt + "` prop on `" + Ge + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), J[_t] = !0, _e++);
          }
        }
        return Le[Fe] == null ? Be ? Le[Fe] === null ? new oe("The " + ht + " `" + vt + "` is marked as required " + ("in `" + Ge + "`, but its value is `null`.")) : new oe("The " + ht + " `" + vt + "` is marked as required in " + ("`" + Ge + "`, but its value is `undefined`.")) : null : F(Le, Fe, Ge, ht, vt);
      }
      var Pe = be.bind(null, !1);
      return Pe.isRequired = be.bind(null, !0), Pe;
    }
    function xe(F) {
      function J(_e, be, Pe, Be, Le, Fe) {
        var Ge = _e[be], ht = ue(Ge);
        if (ht !== F) {
          var vt = N(Ge);
          return new oe(
            "Invalid " + Be + " `" + Le + "` of type " + ("`" + vt + "` supplied to `" + Pe + "`, expected ") + ("`" + F + "`."),
            { expectedType: F }
          );
        }
        return null;
      }
      return ve(J);
    }
    function fe() {
      return ve(y);
    }
    function Re(F) {
      function J(_e, be, Pe, Be, Le) {
        if (typeof F != "function")
          return new oe("Property `" + Le + "` of component `" + Pe + "` has invalid PropType notation inside arrayOf.");
        var Fe = _e[be];
        if (!Array.isArray(Fe)) {
          var Ge = ue(Fe);
          return new oe("Invalid " + Be + " `" + Le + "` of type " + ("`" + Ge + "` supplied to `" + Pe + "`, expected an array."));
        }
        for (var ht = 0; ht < Fe.length; ht++) {
          var vt = F(Fe, ht, Pe, Be, Le + "[" + ht + "]", d);
          if (vt instanceof Error)
            return vt;
        }
        return null;
      }
      return ve(J);
    }
    function X() {
      function F(J, _e, be, Pe, Be) {
        var Le = J[_e];
        if (!x(Le)) {
          var Fe = ue(Le);
          return new oe("Invalid " + Pe + " `" + Be + "` of type " + ("`" + Fe + "` supplied to `" + be + "`, expected a single ReactElement."));
        }
        return null;
      }
      return ve(F);
    }
    function Ae() {
      function F(J, _e, be, Pe, Be) {
        var Le = J[_e];
        if (!l.isValidElementType(Le)) {
          var Fe = ue(Le);
          return new oe("Invalid " + Pe + " `" + Be + "` of type " + ("`" + Fe + "` supplied to `" + be + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return ve(F);
    }
    function tt(F) {
      function J(_e, be, Pe, Be, Le) {
        if (!(_e[be] instanceof F)) {
          var Fe = F.name || j, Ge = L(_e[be]);
          return new oe("Invalid " + Be + " `" + Le + "` of type " + ("`" + Ge + "` supplied to `" + Pe + "`, expected ") + ("instance of `" + Fe + "`."));
        }
        return null;
      }
      return ve(J);
    }
    function q(F) {
      if (!Array.isArray(F))
        return u.NODE_ENV !== "production" && (arguments.length > 1 ? S(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : S("Invalid argument supplied to oneOf, expected an array.")), y;
      function J(_e, be, Pe, Be, Le) {
        for (var Fe = _e[be], Ge = 0; Ge < F.length; Ge++)
          if (H(Fe, F[Ge]))
            return null;
        var ht = JSON.stringify(F, function($t, Me) {
          var _t = N(Me);
          return _t === "symbol" ? String(Me) : Me;
        });
        return new oe("Invalid " + Be + " `" + Le + "` of value `" + String(Fe) + "` " + ("supplied to `" + Pe + "`, expected one of " + ht + "."));
      }
      return ve(J);
    }
    function we(F) {
      function J(_e, be, Pe, Be, Le) {
        if (typeof F != "function")
          return new oe("Property `" + Le + "` of component `" + Pe + "` has invalid PropType notation inside objectOf.");
        var Fe = _e[be], Ge = ue(Fe);
        if (Ge !== "object")
          return new oe("Invalid " + Be + " `" + Le + "` of type " + ("`" + Ge + "` supplied to `" + Pe + "`, expected an object."));
        for (var ht in Fe)
          if (m(Fe, ht)) {
            var vt = F(Fe, ht, Pe, Be, Le + "." + ht, d);
            if (vt instanceof Error)
              return vt;
          }
        return null;
      }
      return ve(J);
    }
    function ke(F) {
      if (!Array.isArray(F))
        return u.NODE_ENV !== "production" && S("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var J = 0; J < F.length; J++) {
        var _e = F[J];
        if (typeof _e != "function")
          return S(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + re(_e) + " at index " + J + "."
          ), y;
      }
      function be(Pe, Be, Le, Fe, Ge) {
        for (var ht = [], vt = 0; vt < F.length; vt++) {
          var $t = F[vt], Me = $t(Pe, Be, Le, Fe, Ge, d);
          if (Me == null)
            return null;
          Me.data && m(Me.data, "expectedType") && ht.push(Me.data.expectedType);
        }
        var _t = ht.length > 0 ? ", expected one of type [" + ht.join(", ") + "]" : "";
        return new oe("Invalid " + Fe + " `" + Ge + "` supplied to " + ("`" + Le + "`" + _t + "."));
      }
      return ve(be);
    }
    function Oe() {
      function F(J, _e, be, Pe, Be) {
        return ie(J[_e]) ? null : new oe("Invalid " + Pe + " `" + Be + "` supplied to " + ("`" + be + "`, expected a ReactNode."));
      }
      return ve(F);
    }
    function ge(F, J, _e, be, Pe) {
      return new oe(
        (F || "React class") + ": " + J + " type `" + _e + "." + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Pe + "`."
      );
    }
    function Ne(F) {
      function J(_e, be, Pe, Be, Le) {
        var Fe = _e[be], Ge = ue(Fe);
        if (Ge !== "object")
          return new oe("Invalid " + Be + " `" + Le + "` of type `" + Ge + "` " + ("supplied to `" + Pe + "`, expected `object`."));
        for (var ht in F) {
          var vt = F[ht];
          if (typeof vt != "function")
            return ge(Pe, Be, Le, ht, N(vt));
          var $t = vt(Fe, ht, Pe, Be, Le + "." + ht, d);
          if ($t)
            return $t;
        }
        return null;
      }
      return ve(J);
    }
    function Z(F) {
      function J(_e, be, Pe, Be, Le) {
        var Fe = _e[be], Ge = ue(Fe);
        if (Ge !== "object")
          return new oe("Invalid " + Be + " `" + Le + "` of type `" + Ge + "` " + ("supplied to `" + Pe + "`, expected `object`."));
        var ht = c({}, _e[be], F);
        for (var vt in ht) {
          var $t = F[vt];
          if (m(F, vt) && typeof $t != "function")
            return ge(Pe, Be, Le, vt, N($t));
          if (!$t)
            return new oe(
              "Invalid " + Be + " `" + Le + "` key `" + vt + "` supplied to `" + Pe + "`.\nBad object: " + JSON.stringify(_e[be], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(F), null, "  ")
            );
          var Me = $t(Fe, vt, Pe, Be, Le + "." + vt, d);
          if (Me)
            return Me;
        }
        return null;
      }
      return ve(J);
    }
    function ie(F) {
      switch (typeof F) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !F;
        case "object":
          if (Array.isArray(F))
            return F.every(ie);
          if (F === null || x(F))
            return !0;
          var J = D(F);
          if (J) {
            var _e = J.call(F), be;
            if (J !== F.entries) {
              for (; !(be = _e.next()).done; )
                if (!ie(be.value))
                  return !1;
            } else
              for (; !(be = _e.next()).done; ) {
                var Pe = be.value;
                if (Pe && !ie(Pe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function de(F, J) {
      return F === "symbol" ? !0 : J ? J["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && J instanceof Symbol : !1;
    }
    function ue(F) {
      var J = typeof F;
      return Array.isArray(F) ? "array" : F instanceof RegExp ? "object" : de(J, F) ? "symbol" : J;
    }
    function N(F) {
      if (typeof F > "u" || F === null)
        return "" + F;
      var J = ue(F);
      if (J === "object") {
        if (F instanceof Date)
          return "date";
        if (F instanceof RegExp)
          return "regexp";
      }
      return J;
    }
    function re(F) {
      var J = N(F);
      switch (J) {
        case "array":
        case "object":
          return "an " + J;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + J;
        default:
          return J;
      }
    }
    function L(F) {
      return !F.constructor || !F.constructor.name ? j : F.constructor.name;
    }
    return U.checkPropTypes = g, U.resetWarningCache = g.resetWarningCache, U.PropTypes = U, U;
  }, Uw;
}
var Pw, KR;
function cz() {
  if (KR) return Pw;
  KR = 1;
  var u = Sb();
  function l() {
  }
  function c() {
  }
  return c.resetWarningCache = l, Pw = function() {
    function d(S, y, x, O, k, R) {
      if (R !== u) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
      }
    }
    d.isRequired = d;
    function m() {
      return d;
    }
    var g = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: m,
      element: d,
      elementType: d,
      instanceOf: m,
      node: d,
      objectOf: m,
      oneOf: m,
      oneOfType: m,
      shape: m,
      exact: m,
      checkPropTypes: c,
      resetWarningCache: l
    };
    return g.PropTypes = g, g;
  }, Pw;
}
var fz = {};
if (fz.NODE_ENV !== "production") {
  var dz = rT(), pz = !0;
  Zw.exports = sz()(dz.isElement, pz);
} else
  Zw.exports = cz()();
var iT = Zw.exports, eb = { exports: {} }, Fo = {}, tb = { exports: {} };
(function(u, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = k;
  /*!
   * Adapted from jQuery UI core
   *
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */
  var c = "none", d = "contents", m = /input|select|textarea|button|object|iframe/;
  function g(R, D) {
    return D.getPropertyValue("overflow") !== "visible" || // if 'overflow: visible' set, check if there is actually any overflow
    R.scrollWidth <= 0 && R.scrollHeight <= 0;
  }
  function S(R) {
    var D = R.offsetWidth <= 0 && R.offsetHeight <= 0;
    if (D && !R.innerHTML) return !0;
    try {
      var j = window.getComputedStyle(R), U = j.getPropertyValue("display");
      return D ? U !== d && g(R, j) : U === c;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function y(R) {
    for (var D = R, j = R.getRootNode && R.getRootNode(); D && D !== document.body; ) {
      if (j && D === j && (D = j.host.parentNode), S(D)) return !1;
      D = D.parentNode;
    }
    return !0;
  }
  function x(R, D) {
    var j = R.nodeName.toLowerCase(), U = m.test(j) && !R.disabled || j === "a" && R.href || D;
    return U && y(R);
  }
  function O(R) {
    var D = R.getAttribute("tabindex");
    D === null && (D = void 0);
    var j = isNaN(D);
    return (j || D >= 0) && x(R, !j);
  }
  function k(R) {
    var D = [].slice.call(R.querySelectorAll("*"), 0).reduce(function(j, U) {
      return j.concat(U.shadowRoot ? k(U.shadowRoot) : [U]);
    }, []);
    return D.filter(O);
  }
  u.exports = l.default;
})(tb, tb.exports);
var oT = tb.exports, hz = {};
Object.defineProperty(Fo, "__esModule", {
  value: !0
});
Fo.resetState = gz;
Fo.log = Sz;
Fo.handleBlur = hv;
Fo.handleFocus = vv;
Fo.markForFocusLater = Ez;
Fo.returnFocus = wz;
Fo.popWithoutFocus = bz;
Fo.setupScopedFocus = Cz;
Fo.teardownScopedFocus = xz;
var vz = oT, mz = yz(vz);
function yz(u) {
  return u && u.__esModule ? u : { default: u };
}
var of = [], Gd = null, nb = !1;
function gz() {
  of = [];
}
function Sz() {
  hz.NODE_ENV !== "production" && (console.log("focusManager ----------"), of.forEach(function(u) {
    var l = u || {};
    console.log(l.nodeName, l.className, l.id);
  }), console.log("end focusManager ----------"));
}
function hv() {
  nb = !0;
}
function vv() {
  if (nb) {
    if (nb = !1, !Gd)
      return;
    setTimeout(function() {
      if (!Gd.contains(document.activeElement)) {
        var u = (0, mz.default)(Gd)[0] || Gd;
        u.focus();
      }
    }, 0);
  }
}
function Ez() {
  of.push(document.activeElement);
}
function wz() {
  var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, l = null;
  try {
    of.length !== 0 && (l = of.pop(), l.focus({ preventScroll: u }));
    return;
  } catch {
    console.warn(["You tried to return focus to", l, "but it is not in the DOM anymore"].join(" "));
  }
}
function bz() {
  of.length > 0 && of.pop();
}
function Cz(u) {
  Gd = u, window.addEventListener ? (window.addEventListener("blur", hv, !1), document.addEventListener("focus", vv, !0)) : (window.attachEvent("onBlur", hv), document.attachEvent("onFocus", vv));
}
function xz() {
  Gd = null, window.addEventListener ? (window.removeEventListener("blur", hv), document.removeEventListener("focus", vv)) : (window.detachEvent("onBlur", hv), document.detachEvent("onFocus", vv));
}
var rb = { exports: {} };
(function(u, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  }), l.default = S;
  var c = oT, d = m(c);
  function m(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function g() {
    var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return y.activeElement.shadowRoot ? g(y.activeElement.shadowRoot) : y.activeElement;
  }
  function S(y, x) {
    var O = (0, d.default)(y);
    if (!O.length) {
      x.preventDefault();
      return;
    }
    var k = void 0, R = x.shiftKey, D = O[0], j = O[O.length - 1], U = g();
    if (y === U) {
      if (!R) return;
      k = j;
    }
    if (j === U && !R && (k = D), D === U && R && (k = j), k) {
      x.preventDefault(), k.focus();
      return;
    }
    var H = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), oe = H != null && H[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (oe) {
      var ve = O.indexOf(U);
      if (ve > -1 && (ve += R ? -1 : 1), k = O[ve], typeof k > "u") {
        x.preventDefault(), k = R ? j : D, k.focus();
        return;
      }
      x.preventDefault(), k.focus();
    }
  }
  u.exports = l.default;
})(rb, rb.exports);
var _z = rb.exports, Ho = {}, Rz = {}, Tz = Rz.NODE_ENV !== "production", lT = function() {
};
if (Tz) {
  var kz = function(l, c) {
    var d = arguments.length;
    c = new Array(d > 1 ? d - 1 : 0);
    for (var m = 1; m < d; m++)
      c[m - 1] = arguments[m];
    var g = 0, S = "Warning: " + l.replace(/%s/g, function() {
      return c[g++];
    });
    typeof console < "u" && console.error(S);
    try {
      throw new Error(S);
    } catch {
    }
  };
  lT = function(u, l, c) {
    var d = arguments.length;
    c = new Array(d > 2 ? d - 2 : 0);
    for (var m = 2; m < d; m++)
      c[m - 2] = arguments[m];
    if (l === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    u || kz.apply(null, [l].concat(c));
  };
}
var Oz = lT, Uo = {}, uT = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(u) {
  (function() {
    var l = !!(typeof window < "u" && window.document && window.document.createElement), c = {
      canUseDOM: l,
      canUseWorkers: typeof Worker < "u",
      canUseEventListeners: l && !!(window.addEventListener || window.attachEvent),
      canUseViewport: l && !!window.screen
    };
    u.exports ? u.exports = c : window.ExecutionEnvironment = c;
  })();
})(uT);
var Dz = uT.exports;
Object.defineProperty(Uo, "__esModule", {
  value: !0
});
Uo.canUseDOM = Uo.SafeNodeList = Uo.SafeHTMLCollection = void 0;
var Az = Dz, Nz = Lz(Az);
function Lz(u) {
  return u && u.__esModule ? u : { default: u };
}
var qg = Nz.default, Mz = qg.canUseDOM ? window.HTMLElement : {};
Uo.SafeHTMLCollection = qg.canUseDOM ? window.HTMLCollection : {};
Uo.SafeNodeList = qg.canUseDOM ? window.NodeList : {};
Uo.canUseDOM = qg.canUseDOM;
Uo.default = Mz;
var jz = {};
Object.defineProperty(Ho, "__esModule", {
  value: !0
});
Ho.resetState = Hz;
Ho.log = $z;
Ho.assertNodeList = sT;
Ho.setElement = Bz;
Ho.validateElement = Eb;
Ho.hide = Vz;
Ho.show = Iz;
Ho.documentNotReadyOrSSRTesting = Wz;
var zz = Oz, Uz = Fz(zz), Pz = Uo;
function Fz(u) {
  return u && u.__esModule ? u : { default: u };
}
var Oi = null;
function Hz() {
  Oi && (Oi.removeAttribute ? Oi.removeAttribute("aria-hidden") : Oi.length != null ? Oi.forEach(function(u) {
    return u.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(Oi).forEach(function(u) {
    return u.removeAttribute("aria-hidden");
  })), Oi = null;
}
function $z() {
  if (jz.NODE_ENV !== "production") {
    var u = Oi || {};
    console.log("ariaAppHider ----------"), console.log(u.nodeName, u.className, u.id), console.log("end ariaAppHider ----------");
  }
}
function sT(u, l) {
  if (!u || !u.length)
    throw new Error("react-modal: No elements were found for selector " + l + ".");
}
function Bz(u) {
  var l = u;
  if (typeof l == "string" && Pz.canUseDOM) {
    var c = document.querySelectorAll(l);
    sT(c, l), l = c;
  }
  return Oi = l || Oi, Oi;
}
function Eb(u) {
  var l = u || Oi;
  return l ? Array.isArray(l) || l instanceof HTMLCollection || l instanceof NodeList ? l : [l] : ((0, Uz.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function Vz(u) {
  var l = !0, c = !1, d = void 0;
  try {
    for (var m = Eb(u)[Symbol.iterator](), g; !(l = (g = m.next()).done); l = !0) {
      var S = g.value;
      S.setAttribute("aria-hidden", "true");
    }
  } catch (y) {
    c = !0, d = y;
  } finally {
    try {
      !l && m.return && m.return();
    } finally {
      if (c)
        throw d;
    }
  }
}
function Iz(u) {
  var l = !0, c = !1, d = void 0;
  try {
    for (var m = Eb(u)[Symbol.iterator](), g; !(l = (g = m.next()).done); l = !0) {
      var S = g.value;
      S.removeAttribute("aria-hidden");
    }
  } catch (y) {
    c = !0, d = y;
  } finally {
    try {
      !l && m.return && m.return();
    } finally {
      if (c)
        throw d;
    }
  }
}
function Wz() {
  Oi = null;
}
var np = {}, Yz = {};
Object.defineProperty(np, "__esModule", {
  value: !0
});
np.resetState = qz;
np.log = Qz;
var ef = {}, tf = {};
function XR(u, l) {
  u.classList.remove(l);
}
function qz() {
  var u = document.getElementsByTagName("html")[0];
  for (var l in ef)
    XR(u, ef[l]);
  var c = document.body;
  for (var d in tf)
    XR(c, tf[d]);
  ef = {}, tf = {};
}
function Qz() {
  if (Yz.NODE_ENV !== "production") {
    var u = document.getElementsByTagName("html")[0].className, l = `Show tracked classes:

`;
    l += "<html /> (" + u + `):
  `;
    for (var c in ef)
      l += "  " + c + " " + ef[c] + `
  `;
    u = document.body.className, l += `

doc.body (` + u + `):
  `;
    for (var d in tf)
      l += "  " + d + " " + tf[d] + `
  `;
    l += `
`, console.log(l);
  }
}
var Gz = function(l, c) {
  return l[c] || (l[c] = 0), l[c] += 1, c;
}, Kz = function(l, c) {
  return l[c] && (l[c] -= 1), c;
}, Xz = function(l, c, d) {
  d.forEach(function(m) {
    Gz(c, m), l.add(m);
  });
}, Jz = function(l, c, d) {
  d.forEach(function(m) {
    Kz(c, m), c[m] === 0 && l.remove(m);
  });
};
np.add = function(l, c) {
  return Xz(l.classList, l.nodeName.toLowerCase() == "html" ? ef : tf, c.split(" "));
};
np.remove = function(l, c) {
  return Jz(l.classList, l.nodeName.toLowerCase() == "html" ? ef : tf, c.split(" "));
};
var rp = {}, JR = {};
Object.defineProperty(rp, "__esModule", {
  value: !0
});
rp.log = eU;
rp.resetState = tU;
function Zz(u, l) {
  if (!(u instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
var cT = function u() {
  var l = this;
  Zz(this, u), this.register = function(c) {
    if (l.openInstances.indexOf(c) !== -1) {
      JR.NODE_ENV !== "production" && console.warn("React-Modal: Cannot register modal instance that's already open");
      return;
    }
    l.openInstances.push(c), l.emit("register");
  }, this.deregister = function(c) {
    var d = l.openInstances.indexOf(c);
    if (d === -1) {
      JR.NODE_ENV !== "production" && console.warn("React-Modal: Unable to deregister " + c + " as it was never registered");
      return;
    }
    l.openInstances.splice(d, 1), l.emit("deregister");
  }, this.subscribe = function(c) {
    l.subscribers.push(c);
  }, this.emit = function(c) {
    l.subscribers.forEach(function(d) {
      return d(
        c,
        // shallow copy to avoid accidental mutation
        l.openInstances.slice()
      );
    });
  }, this.openInstances = [], this.subscribers = [];
}, Lg = new cT();
function eU() {
  console.log("portalOpenInstances ----------"), console.log(Lg.openInstances.length), Lg.openInstances.forEach(function(u) {
    return console.log(u);
  }), console.log("end portalOpenInstances ----------");
}
function tU() {
  Lg = new cT();
}
rp.default = Lg;
var wb = {}, nU = {};
Object.defineProperty(wb, "__esModule", {
  value: !0
});
wb.resetState = oU;
wb.log = lU;
var rU = rp, aU = iU(rU);
function iU(u) {
  return u && u.__esModule ? u : { default: u };
}
var Ua = void 0, zo = void 0, nf = [];
function oU() {
  for (var u = [Ua, zo], l = 0; l < u.length; l++) {
    var c = u[l];
    c && c.parentNode && c.parentNode.removeChild(c);
  }
  Ua = zo = null, nf = [];
}
function lU() {
  console.log("bodyTrap ----------"), console.log(nf.length);
  for (var u = [Ua, zo], l = 0; l < u.length; l++) {
    var c = u[l], d = c || {};
    console.log(d.nodeName, d.className, d.id);
  }
  console.log("edn bodyTrap ----------");
}
function ZR() {
  if (nf.length === 0) {
    nU.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  nf[nf.length - 1].focusContent();
}
function uU(u, l) {
  !Ua && !zo && (Ua = document.createElement("div"), Ua.setAttribute("data-react-modal-body-trap", ""), Ua.style.position = "absolute", Ua.style.opacity = "0", Ua.setAttribute("tabindex", "0"), Ua.addEventListener("focus", ZR), zo = Ua.cloneNode(), zo.addEventListener("focus", ZR)), nf = l, nf.length > 0 ? (document.body.firstChild !== Ua && document.body.insertBefore(Ua, document.body.firstChild), document.body.lastChild !== zo && document.body.appendChild(zo)) : (Ua.parentElement && Ua.parentElement.removeChild(Ua), zo.parentElement && zo.parentElement.removeChild(zo));
}
aU.default.subscribe(uU);
(function(u, l) {
  var c = {};
  Object.defineProperty(l, "__esModule", {
    value: !0
  });
  var d = Object.assign || function(ie) {
    for (var de = 1; de < arguments.length; de++) {
      var ue = arguments[de];
      for (var N in ue)
        Object.prototype.hasOwnProperty.call(ue, N) && (ie[N] = ue[N]);
    }
    return ie;
  }, m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(ie) {
    return typeof ie;
  } : function(ie) {
    return ie && typeof Symbol == "function" && ie.constructor === Symbol && ie !== Symbol.prototype ? "symbol" : typeof ie;
  }, g = /* @__PURE__ */ function() {
    function ie(de, ue) {
      for (var N = 0; N < ue.length; N++) {
        var re = ue[N];
        re.enumerable = re.enumerable || !1, re.configurable = !0, "value" in re && (re.writable = !0), Object.defineProperty(de, re.key, re);
      }
    }
    return function(de, ue, N) {
      return ue && ie(de.prototype, ue), N && ie(de, N), de;
    };
  }(), S = me, y = iT, x = Ae(y), O = Fo, k = X(O), R = _z, D = Ae(R), j = Ho, U = X(j), H = np, oe = X(H), ve = Uo, xe = Ae(ve), fe = rp, Re = Ae(fe);
  function X(ie) {
    if (ie && ie.__esModule)
      return ie;
    var de = {};
    if (ie != null)
      for (var ue in ie)
        Object.prototype.hasOwnProperty.call(ie, ue) && (de[ue] = ie[ue]);
    return de.default = ie, de;
  }
  function Ae(ie) {
    return ie && ie.__esModule ? ie : { default: ie };
  }
  function tt(ie, de) {
    if (!(ie instanceof de))
      throw new TypeError("Cannot call a class as a function");
  }
  function q(ie, de) {
    if (!ie)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return de && (typeof de == "object" || typeof de == "function") ? de : ie;
  }
  function we(ie, de) {
    if (typeof de != "function" && de !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof de);
    ie.prototype = Object.create(de && de.prototype, { constructor: { value: ie, enumerable: !1, writable: !0, configurable: !0 } }), de && (Object.setPrototypeOf ? Object.setPrototypeOf(ie, de) : ie.__proto__ = de);
  }
  var ke = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, Oe = function(de) {
    return de.code === "Tab" || de.keyCode === 9;
  }, ge = function(de) {
    return de.code === "Escape" || de.keyCode === 27;
  }, Ne = 0, Z = function(ie) {
    we(de, ie);
    function de(ue) {
      tt(this, de);
      var N = q(this, (de.__proto__ || Object.getPrototypeOf(de)).call(this, ue));
      return N.setOverlayRef = function(re) {
        N.overlay = re, N.props.overlayRef && N.props.overlayRef(re);
      }, N.setContentRef = function(re) {
        N.content = re, N.props.contentRef && N.props.contentRef(re);
      }, N.afterClose = function() {
        var re = N.props, L = re.appElement, F = re.ariaHideApp, J = re.htmlOpenClassName, _e = re.bodyOpenClassName, be = re.parentSelector, Pe = be && be().ownerDocument || document;
        _e && oe.remove(Pe.body, _e), J && oe.remove(Pe.getElementsByTagName("html")[0], J), F && Ne > 0 && (Ne -= 1, Ne === 0 && U.show(L)), N.props.shouldFocusAfterRender && (N.props.shouldReturnFocusAfterClose ? (k.returnFocus(N.props.preventScroll), k.teardownScopedFocus()) : k.popWithoutFocus()), N.props.onAfterClose && N.props.onAfterClose(), Re.default.deregister(N);
      }, N.open = function() {
        N.beforeOpen(), N.state.afterOpen && N.state.beforeClose ? (clearTimeout(N.closeTimer), N.setState({ beforeClose: !1 })) : (N.props.shouldFocusAfterRender && (k.setupScopedFocus(N.node), k.markForFocusLater()), N.setState({ isOpen: !0 }, function() {
          N.openAnimationFrame = requestAnimationFrame(function() {
            N.setState({ afterOpen: !0 }), N.props.isOpen && N.props.onAfterOpen && N.props.onAfterOpen({
              overlayEl: N.overlay,
              contentEl: N.content
            });
          });
        }));
      }, N.close = function() {
        N.props.closeTimeoutMS > 0 ? N.closeWithTimeout() : N.closeWithoutTimeout();
      }, N.focusContent = function() {
        return N.content && !N.contentHasFocus() && N.content.focus({ preventScroll: !0 });
      }, N.closeWithTimeout = function() {
        var re = Date.now() + N.props.closeTimeoutMS;
        N.setState({ beforeClose: !0, closesAt: re }, function() {
          N.closeTimer = setTimeout(N.closeWithoutTimeout, N.state.closesAt - Date.now());
        });
      }, N.closeWithoutTimeout = function() {
        N.setState({
          beforeClose: !1,
          isOpen: !1,
          afterOpen: !1,
          closesAt: null
        }, N.afterClose);
      }, N.handleKeyDown = function(re) {
        Oe(re) && (0, D.default)(N.content, re), N.props.shouldCloseOnEsc && ge(re) && (re.stopPropagation(), N.requestClose(re));
      }, N.handleOverlayOnClick = function(re) {
        N.shouldClose === null && (N.shouldClose = !0), N.shouldClose && N.props.shouldCloseOnOverlayClick && (N.ownerHandlesClose() ? N.requestClose(re) : N.focusContent()), N.shouldClose = null;
      }, N.handleContentOnMouseUp = function() {
        N.shouldClose = !1;
      }, N.handleOverlayOnMouseDown = function(re) {
        !N.props.shouldCloseOnOverlayClick && re.target == N.overlay && re.preventDefault();
      }, N.handleContentOnClick = function() {
        N.shouldClose = !1;
      }, N.handleContentOnMouseDown = function() {
        N.shouldClose = !1;
      }, N.requestClose = function(re) {
        return N.ownerHandlesClose() && N.props.onRequestClose(re);
      }, N.ownerHandlesClose = function() {
        return N.props.onRequestClose;
      }, N.shouldBeClosed = function() {
        return !N.state.isOpen && !N.state.beforeClose;
      }, N.contentHasFocus = function() {
        return document.activeElement === N.content || N.content.contains(document.activeElement);
      }, N.buildClassName = function(re, L) {
        var F = (typeof L > "u" ? "undefined" : m(L)) === "object" ? L : {
          base: ke[re],
          afterOpen: ke[re] + "--after-open",
          beforeClose: ke[re] + "--before-close"
        }, J = F.base;
        return N.state.afterOpen && (J = J + " " + F.afterOpen), N.state.beforeClose && (J = J + " " + F.beforeClose), typeof L == "string" && L ? J + " " + L : J;
      }, N.attributesFromObject = function(re, L) {
        return Object.keys(L).reduce(function(F, J) {
          return F[re + "-" + J] = L[J], F;
        }, {});
      }, N.state = {
        afterOpen: !1,
        beforeClose: !1
      }, N.shouldClose = null, N.moveFromContentToOverlay = null, N;
    }
    return g(de, [{
      key: "componentDidMount",
      value: function() {
        this.props.isOpen && this.open();
      }
    }, {
      key: "componentDidUpdate",
      value: function(N, re) {
        c.NODE_ENV !== "production" && (N.bodyOpenClassName !== this.props.bodyOpenClassName && console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), N.htmlOpenClassName !== this.props.htmlOpenClassName && console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.')), this.props.isOpen && !N.isOpen ? this.open() : !this.props.isOpen && N.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !re.isOpen && this.focusContent();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
      }
    }, {
      key: "beforeOpen",
      value: function() {
        var N = this.props, re = N.appElement, L = N.ariaHideApp, F = N.htmlOpenClassName, J = N.bodyOpenClassName, _e = N.parentSelector, be = _e && _e().ownerDocument || document;
        J && oe.add(be.body, J), F && oe.add(be.getElementsByTagName("html")[0], F), L && (Ne += 1, U.hide(re)), Re.default.register(this);
      }
      // Don't steal focus from inner elements
    }, {
      key: "render",
      value: function() {
        var N = this.props, re = N.id, L = N.className, F = N.overlayClassName, J = N.defaultStyles, _e = N.children, be = L ? {} : J.content, Pe = F ? {} : J.overlay;
        if (this.shouldBeClosed())
          return null;
        var Be = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", F),
          style: d({}, Pe, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        }, Le = d({
          id: re,
          ref: this.setContentRef,
          style: d({}, be, this.props.style.content),
          className: this.buildClassName("content", L),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.attributesFromObject("aria", d({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
          "data-testid": this.props.testId
        }), Fe = this.props.contentElement(Le, _e);
        return this.props.overlayElement(Be, Fe);
      }
    }]), de;
  }(S.Component);
  Z.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  }, Z.propTypes = {
    isOpen: x.default.bool.isRequired,
    defaultStyles: x.default.shape({
      content: x.default.object,
      overlay: x.default.object
    }),
    style: x.default.shape({
      content: x.default.object,
      overlay: x.default.object
    }),
    className: x.default.oneOfType([x.default.string, x.default.object]),
    overlayClassName: x.default.oneOfType([x.default.string, x.default.object]),
    parentSelector: x.default.func,
    bodyOpenClassName: x.default.string,
    htmlOpenClassName: x.default.string,
    ariaHideApp: x.default.bool,
    appElement: x.default.oneOfType([x.default.instanceOf(xe.default), x.default.instanceOf(ve.SafeHTMLCollection), x.default.instanceOf(ve.SafeNodeList), x.default.arrayOf(x.default.instanceOf(xe.default))]),
    onAfterOpen: x.default.func,
    onAfterClose: x.default.func,
    onRequestClose: x.default.func,
    closeTimeoutMS: x.default.number,
    shouldFocusAfterRender: x.default.bool,
    shouldCloseOnOverlayClick: x.default.bool,
    shouldReturnFocusAfterClose: x.default.bool,
    preventScroll: x.default.bool,
    role: x.default.string,
    contentLabel: x.default.string,
    aria: x.default.object,
    data: x.default.object,
    children: x.default.node,
    shouldCloseOnEsc: x.default.bool,
    overlayRef: x.default.func,
    contentRef: x.default.func,
    id: x.default.string,
    overlayElement: x.default.func,
    contentElement: x.default.func,
    testId: x.default.string
  }, l.default = Z, u.exports = l.default;
})(eb, eb.exports);
var sU = eb.exports;
function fT() {
  var u = this.constructor.getDerivedStateFromProps(this.props, this.state);
  u != null && this.setState(u);
}
function dT(u) {
  function l(c) {
    var d = this.constructor.getDerivedStateFromProps(u, c);
    return d ?? null;
  }
  this.setState(l.bind(this));
}
function pT(u, l) {
  try {
    var c = this.props, d = this.state;
    this.props = u, this.state = l, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      c,
      d
    );
  } finally {
    this.props = c, this.state = d;
  }
}
fT.__suppressDeprecationWarning = !0;
dT.__suppressDeprecationWarning = !0;
pT.__suppressDeprecationWarning = !0;
function cU(u) {
  var l = u.prototype;
  if (!l || !l.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof u.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function")
    return u;
  var c = null, d = null, m = null;
  if (typeof l.componentWillMount == "function" ? c = "componentWillMount" : typeof l.UNSAFE_componentWillMount == "function" && (c = "UNSAFE_componentWillMount"), typeof l.componentWillReceiveProps == "function" ? d = "componentWillReceiveProps" : typeof l.UNSAFE_componentWillReceiveProps == "function" && (d = "UNSAFE_componentWillReceiveProps"), typeof l.componentWillUpdate == "function" ? m = "componentWillUpdate" : typeof l.UNSAFE_componentWillUpdate == "function" && (m = "UNSAFE_componentWillUpdate"), c !== null || d !== null || m !== null) {
    var g = u.displayName || u.name, S = typeof u.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + g + " uses " + S + " but also contains the following legacy lifecycles:" + (c !== null ? `
  ` + c : "") + (d !== null ? `
  ` + d : "") + (m !== null ? `
  ` + m : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof u.getDerivedStateFromProps == "function" && (l.componentWillMount = fT, l.componentWillReceiveProps = dT), typeof l.getSnapshotBeforeUpdate == "function") {
    if (typeof l.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    l.componentWillUpdate = pT;
    var y = l.componentDidUpdate;
    l.componentDidUpdate = function(O, k, R) {
      var D = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : R;
      y.call(this, O, k, D);
    };
  }
  return u;
}
const fU = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: cU
}, Symbol.toStringTag, { value: "Module" })), dU = /* @__PURE__ */ OL(fU);
var pU = {};
Object.defineProperty(af, "__esModule", {
  value: !0
});
af.bodyOpenClassName = af.portalClassName = void 0;
var e1 = Object.assign || function(u) {
  for (var l = 1; l < arguments.length; l++) {
    var c = arguments[l];
    for (var d in c)
      Object.prototype.hasOwnProperty.call(c, d) && (u[d] = c[d]);
  }
  return u;
}, hU = /* @__PURE__ */ function() {
  function u(l, c) {
    for (var d = 0; d < c.length; d++) {
      var m = c[d];
      m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(l, m.key, m);
    }
  }
  return function(l, c, d) {
    return c && u(l.prototype, c), d && u(l, d), l;
  };
}(), hT = me, Mg = wv(hT), vU = R1, jg = wv(vU), mU = iT, zt = wv(mU), yU = sU, t1 = wv(yU), gU = Ho, SU = wU(gU), ks = Uo, n1 = wv(ks), EU = dU;
function wU(u) {
  if (u && u.__esModule)
    return u;
  var l = {};
  if (u != null)
    for (var c in u)
      Object.prototype.hasOwnProperty.call(u, c) && (l[c] = u[c]);
  return l.default = u, l;
}
function wv(u) {
  return u && u.__esModule ? u : { default: u };
}
function bU(u, l) {
  if (!(u instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function r1(u, l) {
  if (!u)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return l && (typeof l == "object" || typeof l == "function") ? l : u;
}
function CU(u, l) {
  if (typeof l != "function" && l !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof l);
  u.prototype = Object.create(l && l.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : u.__proto__ = l);
}
var xU = af.portalClassName = "ReactModalPortal", _U = af.bodyOpenClassName = "ReactModal__Body--open", Xc = ks.canUseDOM && jg.default.createPortal !== void 0, ab = function(l) {
  return document.createElement(l);
}, a1 = function() {
  return Xc ? jg.default.createPortal : jg.default.unstable_renderSubtreeIntoContainer;
};
function bg(u) {
  return u();
}
var ap = function(u) {
  CU(l, u);
  function l() {
    var c, d, m, g;
    bU(this, l);
    for (var S = arguments.length, y = Array(S), x = 0; x < S; x++)
      y[x] = arguments[x];
    return g = (d = (m = r1(this, (c = l.__proto__ || Object.getPrototypeOf(l)).call.apply(c, [this].concat(y))), m), m.removePortal = function() {
      !Xc && jg.default.unmountComponentAtNode(m.node);
      var O = bg(m.props.parentSelector);
      O && O.contains(m.node) ? O.removeChild(m.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, m.portalRef = function(O) {
      m.portal = O;
    }, m.renderPortal = function(O) {
      var k = a1(), R = k(m, Mg.default.createElement(t1.default, e1({ defaultStyles: l.defaultStyles }, O)), m.node);
      m.portalRef(R);
    }, d), r1(m, g);
  }
  return hU(l, [{
    key: "componentDidMount",
    value: function() {
      if (ks.canUseDOM) {
        Xc || (this.node = ab("div")), this.node.className = this.props.portalClassName;
        var d = bg(this.props.parentSelector);
        d.appendChild(this.node), !Xc && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(d) {
      var m = bg(d.parentSelector), g = bg(this.props.parentSelector);
      return { prevParent: m, nextParent: g };
    }
  }, {
    key: "componentDidUpdate",
    value: function(d, m, g) {
      if (ks.canUseDOM) {
        var S = this.props, y = S.isOpen, x = S.portalClassName;
        d.portalClassName !== x && (this.node.className = x);
        var O = g.prevParent, k = g.nextParent;
        k !== O && (O.removeChild(this.node), k.appendChild(this.node)), !(!d.isOpen && !y) && !Xc && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!ks.canUseDOM || !this.node || !this.portal)) {
        var d = this.portal.state, m = Date.now(), g = d.isOpen && this.props.closeTimeoutMS && (d.closesAt || m + this.props.closeTimeoutMS);
        g ? (d.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, g - m)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!ks.canUseDOM || !Xc)
        return null;
      !this.node && Xc && (this.node = ab("div"));
      var d = a1();
      return d(Mg.default.createElement(t1.default, e1({
        ref: this.portalRef,
        defaultStyles: l.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(d) {
      SU.setElement(d);
    }
    /* eslint-disable react/no-unused-prop-types */
    /* eslint-enable react/no-unused-prop-types */
  }]), l;
}(hT.Component);
ap.propTypes = {
  isOpen: zt.default.bool.isRequired,
  style: zt.default.shape({
    content: zt.default.object,
    overlay: zt.default.object
  }),
  portalClassName: zt.default.string,
  bodyOpenClassName: zt.default.string,
  htmlOpenClassName: zt.default.string,
  className: zt.default.oneOfType([zt.default.string, zt.default.shape({
    base: zt.default.string.isRequired,
    afterOpen: zt.default.string.isRequired,
    beforeClose: zt.default.string.isRequired
  })]),
  overlayClassName: zt.default.oneOfType([zt.default.string, zt.default.shape({
    base: zt.default.string.isRequired,
    afterOpen: zt.default.string.isRequired,
    beforeClose: zt.default.string.isRequired
  })]),
  appElement: zt.default.oneOfType([zt.default.instanceOf(n1.default), zt.default.instanceOf(ks.SafeHTMLCollection), zt.default.instanceOf(ks.SafeNodeList), zt.default.arrayOf(zt.default.instanceOf(n1.default))]),
  onAfterOpen: zt.default.func,
  onRequestClose: zt.default.func,
  closeTimeoutMS: zt.default.number,
  ariaHideApp: zt.default.bool,
  shouldFocusAfterRender: zt.default.bool,
  shouldCloseOnOverlayClick: zt.default.bool,
  shouldReturnFocusAfterClose: zt.default.bool,
  preventScroll: zt.default.bool,
  parentSelector: zt.default.func,
  aria: zt.default.object,
  data: zt.default.object,
  role: zt.default.string,
  contentLabel: zt.default.string,
  shouldCloseOnEsc: zt.default.bool,
  overlayRef: zt.default.func,
  contentRef: zt.default.func,
  id: zt.default.string,
  overlayElement: zt.default.func,
  contentElement: zt.default.func
};
ap.defaultProps = {
  isOpen: !1,
  portalClassName: xU,
  bodyOpenClassName: _U,
  role: "dialog",
  ariaHideApp: !0,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: !0,
  shouldCloseOnEsc: !0,
  shouldCloseOnOverlayClick: !0,
  shouldReturnFocusAfterClose: !0,
  preventScroll: !1,
  parentSelector: function() {
    return document.body;
  },
  overlayElement: function(l, c) {
    return Mg.default.createElement(
      "div",
      l,
      c
    );
  },
  contentElement: function(l, c) {
    return Mg.default.createElement(
      "div",
      l,
      c
    );
  }
};
ap.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
(0, EU.polyfill)(ap);
pU.NODE_ENV !== "production" && (ap.setCreateHTMLElement = function(u) {
  return ab = u;
});
af.default = ap;
(function(u, l) {
  Object.defineProperty(l, "__esModule", {
    value: !0
  });
  var c = af, d = m(c);
  function m(g) {
    return g && g.__esModule ? g : { default: g };
  }
  l.default = d.default, u.exports = l.default;
})(Jw, Jw.exports);
var RU = Jw.exports;
const Qg = /* @__PURE__ */ pb(RU), Jd = Math.min, rf = Math.max, zg = Math.round, Cg = Math.floor, Os = (u) => ({
  x: u,
  y: u
}), TU = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, kU = {
  start: "end",
  end: "start"
};
function ib(u, l, c) {
  return rf(u, Jd(l, c));
}
function bv(u, l) {
  return typeof u == "function" ? u(l) : u;
}
function lf(u) {
  return u.split("-")[0];
}
function Cv(u) {
  return u.split("-")[1];
}
function vT(u) {
  return u === "x" ? "y" : "x";
}
function bb(u) {
  return u === "y" ? "height" : "width";
}
function Zd(u) {
  return ["top", "bottom"].includes(lf(u)) ? "y" : "x";
}
function Cb(u) {
  return vT(Zd(u));
}
function OU(u, l, c) {
  c === void 0 && (c = !1);
  const d = Cv(u), m = Cb(u), g = bb(m);
  let S = m === "x" ? d === (c ? "end" : "start") ? "right" : "left" : d === "start" ? "bottom" : "top";
  return l.reference[g] > l.floating[g] && (S = Ug(S)), [S, Ug(S)];
}
function DU(u) {
  const l = Ug(u);
  return [ob(u), l, ob(l)];
}
function ob(u) {
  return u.replace(/start|end/g, (l) => kU[l]);
}
function AU(u, l, c) {
  const d = ["left", "right"], m = ["right", "left"], g = ["top", "bottom"], S = ["bottom", "top"];
  switch (u) {
    case "top":
    case "bottom":
      return c ? l ? m : d : l ? d : m;
    case "left":
    case "right":
      return l ? g : S;
    default:
      return [];
  }
}
function NU(u, l, c, d) {
  const m = Cv(u);
  let g = AU(lf(u), c === "start", d);
  return m && (g = g.map((S) => S + "-" + m), l && (g = g.concat(g.map(ob)))), g;
}
function Ug(u) {
  return u.replace(/left|right|bottom|top/g, (l) => TU[l]);
}
function LU(u) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...u
  };
}
function mT(u) {
  return typeof u != "number" ? LU(u) : {
    top: u,
    right: u,
    bottom: u,
    left: u
  };
}
function Pg(u) {
  const {
    x: l,
    y: c,
    width: d,
    height: m
  } = u;
  return {
    width: d,
    height: m,
    top: c,
    left: l,
    right: l + d,
    bottom: c + m,
    x: l,
    y: c
  };
}
function i1(u, l, c) {
  let {
    reference: d,
    floating: m
  } = u;
  const g = Zd(l), S = Cb(l), y = bb(S), x = lf(l), O = g === "y", k = d.x + d.width / 2 - m.width / 2, R = d.y + d.height / 2 - m.height / 2, D = d[y] / 2 - m[y] / 2;
  let j;
  switch (x) {
    case "top":
      j = {
        x: k,
        y: d.y - m.height
      };
      break;
    case "bottom":
      j = {
        x: k,
        y: d.y + d.height
      };
      break;
    case "right":
      j = {
        x: d.x + d.width,
        y: R
      };
      break;
    case "left":
      j = {
        x: d.x - m.width,
        y: R
      };
      break;
    default:
      j = {
        x: d.x,
        y: d.y
      };
  }
  switch (Cv(l)) {
    case "start":
      j[S] -= D * (c && O ? -1 : 1);
      break;
    case "end":
      j[S] += D * (c && O ? -1 : 1);
      break;
  }
  return j;
}
const MU = async (u, l, c) => {
  const {
    placement: d = "bottom",
    strategy: m = "absolute",
    middleware: g = [],
    platform: S
  } = c, y = g.filter(Boolean), x = await (S.isRTL == null ? void 0 : S.isRTL(l));
  let O = await S.getElementRects({
    reference: u,
    floating: l,
    strategy: m
  }), {
    x: k,
    y: R
  } = i1(O, d, x), D = d, j = {}, U = 0;
  for (let H = 0; H < y.length; H++) {
    const {
      name: oe,
      fn: ve
    } = y[H], {
      x: xe,
      y: fe,
      data: Re,
      reset: X
    } = await ve({
      x: k,
      y: R,
      initialPlacement: d,
      placement: D,
      strategy: m,
      middlewareData: j,
      rects: O,
      platform: S,
      elements: {
        reference: u,
        floating: l
      }
    });
    k = xe ?? k, R = fe ?? R, j = {
      ...j,
      [oe]: {
        ...j[oe],
        ...Re
      }
    }, X && U <= 50 && (U++, typeof X == "object" && (X.placement && (D = X.placement), X.rects && (O = X.rects === !0 ? await S.getElementRects({
      reference: u,
      floating: l,
      strategy: m
    }) : X.rects), {
      x: k,
      y: R
    } = i1(O, D, x)), H = -1);
  }
  return {
    x: k,
    y: R,
    placement: D,
    strategy: m,
    middlewareData: j
  };
};
async function yT(u, l) {
  var c;
  l === void 0 && (l = {});
  const {
    x: d,
    y: m,
    platform: g,
    rects: S,
    elements: y,
    strategy: x
  } = u, {
    boundary: O = "clippingAncestors",
    rootBoundary: k = "viewport",
    elementContext: R = "floating",
    altBoundary: D = !1,
    padding: j = 0
  } = bv(l, u), U = mT(j), oe = y[D ? R === "floating" ? "reference" : "floating" : R], ve = Pg(await g.getClippingRect({
    element: (c = await (g.isElement == null ? void 0 : g.isElement(oe))) == null || c ? oe : oe.contextElement || await (g.getDocumentElement == null ? void 0 : g.getDocumentElement(y.floating)),
    boundary: O,
    rootBoundary: k,
    strategy: x
  })), xe = R === "floating" ? {
    x: d,
    y: m,
    width: S.floating.width,
    height: S.floating.height
  } : S.reference, fe = await (g.getOffsetParent == null ? void 0 : g.getOffsetParent(y.floating)), Re = await (g.isElement == null ? void 0 : g.isElement(fe)) ? await (g.getScale == null ? void 0 : g.getScale(fe)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, X = Pg(g.convertOffsetParentRelativeRectToViewportRelativeRect ? await g.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: y,
    rect: xe,
    offsetParent: fe,
    strategy: x
  }) : xe);
  return {
    top: (ve.top - X.top + U.top) / Re.y,
    bottom: (X.bottom - ve.bottom + U.bottom) / Re.y,
    left: (ve.left - X.left + U.left) / Re.x,
    right: (X.right - ve.right + U.right) / Re.x
  };
}
const jU = (u) => ({
  name: "arrow",
  options: u,
  async fn(l) {
    const {
      x: c,
      y: d,
      placement: m,
      rects: g,
      platform: S,
      elements: y,
      middlewareData: x
    } = l, {
      element: O,
      padding: k = 0
    } = bv(u, l) || {};
    if (O == null)
      return {};
    const R = mT(k), D = {
      x: c,
      y: d
    }, j = Cb(m), U = bb(j), H = await S.getDimensions(O), oe = j === "y", ve = oe ? "top" : "left", xe = oe ? "bottom" : "right", fe = oe ? "clientHeight" : "clientWidth", Re = g.reference[U] + g.reference[j] - D[j] - g.floating[U], X = D[j] - g.reference[j], Ae = await (S.getOffsetParent == null ? void 0 : S.getOffsetParent(O));
    let tt = Ae ? Ae[fe] : 0;
    (!tt || !await (S.isElement == null ? void 0 : S.isElement(Ae))) && (tt = y.floating[fe] || g.floating[U]);
    const q = Re / 2 - X / 2, we = tt / 2 - H[U] / 2 - 1, ke = Jd(R[ve], we), Oe = Jd(R[xe], we), ge = ke, Ne = tt - H[U] - Oe, Z = tt / 2 - H[U] / 2 + q, ie = ib(ge, Z, Ne), de = !x.arrow && Cv(m) != null && Z !== ie && g.reference[U] / 2 - (Z < ge ? ke : Oe) - H[U] / 2 < 0, ue = de ? Z < ge ? Z - ge : Z - Ne : 0;
    return {
      [j]: D[j] + ue,
      data: {
        [j]: ie,
        centerOffset: Z - ie - ue,
        ...de && {
          alignmentOffset: ue
        }
      },
      reset: de
    };
  }
}), zU = function(u) {
  return u === void 0 && (u = {}), {
    name: "flip",
    options: u,
    async fn(l) {
      var c, d;
      const {
        placement: m,
        middlewareData: g,
        rects: S,
        initialPlacement: y,
        platform: x,
        elements: O
      } = l, {
        mainAxis: k = !0,
        crossAxis: R = !0,
        fallbackPlacements: D,
        fallbackStrategy: j = "bestFit",
        fallbackAxisSideDirection: U = "none",
        flipAlignment: H = !0,
        ...oe
      } = bv(u, l);
      if ((c = g.arrow) != null && c.alignmentOffset)
        return {};
      const ve = lf(m), xe = Zd(y), fe = lf(y) === y, Re = await (x.isRTL == null ? void 0 : x.isRTL(O.floating)), X = D || (fe || !H ? [Ug(y)] : DU(y)), Ae = U !== "none";
      !D && Ae && X.push(...NU(y, H, U, Re));
      const tt = [y, ...X], q = await yT(l, oe), we = [];
      let ke = ((d = g.flip) == null ? void 0 : d.overflows) || [];
      if (k && we.push(q[ve]), R) {
        const Z = OU(m, S, Re);
        we.push(q[Z[0]], q[Z[1]]);
      }
      if (ke = [...ke, {
        placement: m,
        overflows: we
      }], !we.every((Z) => Z <= 0)) {
        var Oe, ge;
        const Z = (((Oe = g.flip) == null ? void 0 : Oe.index) || 0) + 1, ie = tt[Z];
        if (ie)
          return {
            data: {
              index: Z,
              overflows: ke
            },
            reset: {
              placement: ie
            }
          };
        let de = (ge = ke.filter((ue) => ue.overflows[0] <= 0).sort((ue, N) => ue.overflows[1] - N.overflows[1])[0]) == null ? void 0 : ge.placement;
        if (!de)
          switch (j) {
            case "bestFit": {
              var Ne;
              const ue = (Ne = ke.filter((N) => {
                if (Ae) {
                  const re = Zd(N.placement);
                  return re === xe || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  re === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((re) => re > 0).reduce((re, L) => re + L, 0)]).sort((N, re) => N[1] - re[1])[0]) == null ? void 0 : Ne[0];
              ue && (de = ue);
              break;
            }
            case "initialPlacement":
              de = y;
              break;
          }
        if (m !== de)
          return {
            reset: {
              placement: de
            }
          };
      }
      return {};
    }
  };
};
async function UU(u, l) {
  const {
    placement: c,
    platform: d,
    elements: m
  } = u, g = await (d.isRTL == null ? void 0 : d.isRTL(m.floating)), S = lf(c), y = Cv(c), x = Zd(c) === "y", O = ["left", "top"].includes(S) ? -1 : 1, k = g && x ? -1 : 1, R = bv(l, u);
  let {
    mainAxis: D,
    crossAxis: j,
    alignmentAxis: U
  } = typeof R == "number" ? {
    mainAxis: R,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...R
  };
  return y && typeof U == "number" && (j = y === "end" ? U * -1 : U), x ? {
    x: j * k,
    y: D * O
  } : {
    x: D * O,
    y: j * k
  };
}
const PU = function(u) {
  return u === void 0 && (u = 0), {
    name: "offset",
    options: u,
    async fn(l) {
      var c, d;
      const {
        x: m,
        y: g,
        placement: S,
        middlewareData: y
      } = l, x = await UU(l, u);
      return S === ((c = y.offset) == null ? void 0 : c.placement) && (d = y.arrow) != null && d.alignmentOffset ? {} : {
        x: m + x.x,
        y: g + x.y,
        data: {
          ...x,
          placement: S
        }
      };
    }
  };
}, FU = function(u) {
  return u === void 0 && (u = {}), {
    name: "shift",
    options: u,
    async fn(l) {
      const {
        x: c,
        y: d,
        placement: m
      } = l, {
        mainAxis: g = !0,
        crossAxis: S = !1,
        limiter: y = {
          fn: (oe) => {
            let {
              x: ve,
              y: xe
            } = oe;
            return {
              x: ve,
              y: xe
            };
          }
        },
        ...x
      } = bv(u, l), O = {
        x: c,
        y: d
      }, k = await yT(l, x), R = Zd(lf(m)), D = vT(R);
      let j = O[D], U = O[R];
      if (g) {
        const oe = D === "y" ? "top" : "left", ve = D === "y" ? "bottom" : "right", xe = j + k[oe], fe = j - k[ve];
        j = ib(xe, j, fe);
      }
      if (S) {
        const oe = R === "y" ? "top" : "left", ve = R === "y" ? "bottom" : "right", xe = U + k[oe], fe = U - k[ve];
        U = ib(xe, U, fe);
      }
      const H = y.fn({
        ...l,
        [D]: j,
        [R]: U
      });
      return {
        ...H,
        data: {
          x: H.x - c,
          y: H.y - d
        }
      };
    }
  };
};
function ip(u) {
  return gT(u) ? (u.nodeName || "").toLowerCase() : "#document";
}
function Ni(u) {
  var l;
  return (u == null || (l = u.ownerDocument) == null ? void 0 : l.defaultView) || window;
}
function Eu(u) {
  var l;
  return (l = (gT(u) ? u.ownerDocument : u.document) || window.document) == null ? void 0 : l.documentElement;
}
function gT(u) {
  return u instanceof Node || u instanceof Ni(u).Node;
}
function Tl(u) {
  return u instanceof Element || u instanceof Ni(u).Element;
}
function kl(u) {
  return u instanceof HTMLElement || u instanceof Ni(u).HTMLElement;
}
function o1(u) {
  return typeof ShadowRoot > "u" ? !1 : u instanceof ShadowRoot || u instanceof Ni(u).ShadowRoot;
}
function xv(u) {
  const {
    overflow: l,
    overflowX: c,
    overflowY: d,
    display: m
  } = Po(u);
  return /auto|scroll|overlay|hidden|clip/.test(l + d + c) && !["inline", "contents"].includes(m);
}
function HU(u) {
  return ["table", "td", "th"].includes(ip(u));
}
function Gg(u) {
  return [":popover-open", ":modal"].some((l) => {
    try {
      return u.matches(l);
    } catch {
      return !1;
    }
  });
}
function xb(u) {
  const l = _b(), c = Po(u);
  return c.transform !== "none" || c.perspective !== "none" || (c.containerType ? c.containerType !== "normal" : !1) || !l && (c.backdropFilter ? c.backdropFilter !== "none" : !1) || !l && (c.filter ? c.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((d) => (c.willChange || "").includes(d)) || ["paint", "layout", "strict", "content"].some((d) => (c.contain || "").includes(d));
}
function $U(u) {
  let l = Ds(u);
  for (; kl(l) && !ep(l); ) {
    if (Gg(l))
      return null;
    if (xb(l))
      return l;
    l = Ds(l);
  }
  return null;
}
function _b() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ep(u) {
  return ["html", "body", "#document"].includes(ip(u));
}
function Po(u) {
  return Ni(u).getComputedStyle(u);
}
function Kg(u) {
  return Tl(u) ? {
    scrollLeft: u.scrollLeft,
    scrollTop: u.scrollTop
  } : {
    scrollLeft: u.scrollX,
    scrollTop: u.scrollY
  };
}
function Ds(u) {
  if (ip(u) === "html")
    return u;
  const l = (
    // Step into the shadow DOM of the parent of a slotted node.
    u.assignedSlot || // DOM Element detected.
    u.parentNode || // ShadowRoot detected.
    o1(u) && u.host || // Fallback.
    Eu(u)
  );
  return o1(l) ? l.host : l;
}
function ST(u) {
  const l = Ds(u);
  return ep(l) ? u.ownerDocument ? u.ownerDocument.body : u.body : kl(l) && xv(l) ? l : ST(l);
}
function mv(u, l, c) {
  var d;
  l === void 0 && (l = []), c === void 0 && (c = !0);
  const m = ST(u), g = m === ((d = u.ownerDocument) == null ? void 0 : d.body), S = Ni(m);
  return g ? l.concat(S, S.visualViewport || [], xv(m) ? m : [], S.frameElement && c ? mv(S.frameElement) : []) : l.concat(m, mv(m, [], c));
}
function ET(u) {
  const l = Po(u);
  let c = parseFloat(l.width) || 0, d = parseFloat(l.height) || 0;
  const m = kl(u), g = m ? u.offsetWidth : c, S = m ? u.offsetHeight : d, y = zg(c) !== g || zg(d) !== S;
  return y && (c = g, d = S), {
    width: c,
    height: d,
    $: y
  };
}
function Rb(u) {
  return Tl(u) ? u : u.contextElement;
}
function Kd(u) {
  const l = Rb(u);
  if (!kl(l))
    return Os(1);
  const c = l.getBoundingClientRect(), {
    width: d,
    height: m,
    $: g
  } = ET(l);
  let S = (g ? zg(c.width) : c.width) / d, y = (g ? zg(c.height) : c.height) / m;
  return (!S || !Number.isFinite(S)) && (S = 1), (!y || !Number.isFinite(y)) && (y = 1), {
    x: S,
    y
  };
}
const BU = /* @__PURE__ */ Os(0);
function wT(u) {
  const l = Ni(u);
  return !_b() || !l.visualViewport ? BU : {
    x: l.visualViewport.offsetLeft,
    y: l.visualViewport.offsetTop
  };
}
function VU(u, l, c) {
  return l === void 0 && (l = !1), !c || l && c !== Ni(u) ? !1 : l;
}
function uf(u, l, c, d) {
  l === void 0 && (l = !1), c === void 0 && (c = !1);
  const m = u.getBoundingClientRect(), g = Rb(u);
  let S = Os(1);
  l && (d ? Tl(d) && (S = Kd(d)) : S = Kd(u));
  const y = VU(g, c, d) ? wT(g) : Os(0);
  let x = (m.left + y.x) / S.x, O = (m.top + y.y) / S.y, k = m.width / S.x, R = m.height / S.y;
  if (g) {
    const D = Ni(g), j = d && Tl(d) ? Ni(d) : d;
    let U = D, H = U.frameElement;
    for (; H && d && j !== U; ) {
      const oe = Kd(H), ve = H.getBoundingClientRect(), xe = Po(H), fe = ve.left + (H.clientLeft + parseFloat(xe.paddingLeft)) * oe.x, Re = ve.top + (H.clientTop + parseFloat(xe.paddingTop)) * oe.y;
      x *= oe.x, O *= oe.y, k *= oe.x, R *= oe.y, x += fe, O += Re, U = Ni(H), H = U.frameElement;
    }
  }
  return Pg({
    width: k,
    height: R,
    x,
    y: O
  });
}
function IU(u) {
  let {
    elements: l,
    rect: c,
    offsetParent: d,
    strategy: m
  } = u;
  const g = m === "fixed", S = Eu(d), y = l ? Gg(l.floating) : !1;
  if (d === S || y && g)
    return c;
  let x = {
    scrollLeft: 0,
    scrollTop: 0
  }, O = Os(1);
  const k = Os(0), R = kl(d);
  if ((R || !R && !g) && ((ip(d) !== "body" || xv(S)) && (x = Kg(d)), kl(d))) {
    const D = uf(d);
    O = Kd(d), k.x = D.x + d.clientLeft, k.y = D.y + d.clientTop;
  }
  return {
    width: c.width * O.x,
    height: c.height * O.y,
    x: c.x * O.x - x.scrollLeft * O.x + k.x,
    y: c.y * O.y - x.scrollTop * O.y + k.y
  };
}
function WU(u) {
  return Array.from(u.getClientRects());
}
function bT(u) {
  return uf(Eu(u)).left + Kg(u).scrollLeft;
}
function YU(u) {
  const l = Eu(u), c = Kg(u), d = u.ownerDocument.body, m = rf(l.scrollWidth, l.clientWidth, d.scrollWidth, d.clientWidth), g = rf(l.scrollHeight, l.clientHeight, d.scrollHeight, d.clientHeight);
  let S = -c.scrollLeft + bT(u);
  const y = -c.scrollTop;
  return Po(d).direction === "rtl" && (S += rf(l.clientWidth, d.clientWidth) - m), {
    width: m,
    height: g,
    x: S,
    y
  };
}
function qU(u, l) {
  const c = Ni(u), d = Eu(u), m = c.visualViewport;
  let g = d.clientWidth, S = d.clientHeight, y = 0, x = 0;
  if (m) {
    g = m.width, S = m.height;
    const O = _b();
    (!O || O && l === "fixed") && (y = m.offsetLeft, x = m.offsetTop);
  }
  return {
    width: g,
    height: S,
    x: y,
    y: x
  };
}
function QU(u, l) {
  const c = uf(u, !0, l === "fixed"), d = c.top + u.clientTop, m = c.left + u.clientLeft, g = kl(u) ? Kd(u) : Os(1), S = u.clientWidth * g.x, y = u.clientHeight * g.y, x = m * g.x, O = d * g.y;
  return {
    width: S,
    height: y,
    x,
    y: O
  };
}
function l1(u, l, c) {
  let d;
  if (l === "viewport")
    d = qU(u, c);
  else if (l === "document")
    d = YU(Eu(u));
  else if (Tl(l))
    d = QU(l, c);
  else {
    const m = wT(u);
    d = {
      ...l,
      x: l.x - m.x,
      y: l.y - m.y
    };
  }
  return Pg(d);
}
function CT(u, l) {
  const c = Ds(u);
  return c === l || !Tl(c) || ep(c) ? !1 : Po(c).position === "fixed" || CT(c, l);
}
function GU(u, l) {
  const c = l.get(u);
  if (c)
    return c;
  let d = mv(u, [], !1).filter((y) => Tl(y) && ip(y) !== "body"), m = null;
  const g = Po(u).position === "fixed";
  let S = g ? Ds(u) : u;
  for (; Tl(S) && !ep(S); ) {
    const y = Po(S), x = xb(S);
    !x && y.position === "fixed" && (m = null), (g ? !x && !m : !x && y.position === "static" && !!m && ["absolute", "fixed"].includes(m.position) || xv(S) && !x && CT(u, S)) ? d = d.filter((k) => k !== S) : m = y, S = Ds(S);
  }
  return l.set(u, d), d;
}
function KU(u) {
  let {
    element: l,
    boundary: c,
    rootBoundary: d,
    strategy: m
  } = u;
  const S = [...c === "clippingAncestors" ? Gg(l) ? [] : GU(l, this._c) : [].concat(c), d], y = S[0], x = S.reduce((O, k) => {
    const R = l1(l, k, m);
    return O.top = rf(R.top, O.top), O.right = Jd(R.right, O.right), O.bottom = Jd(R.bottom, O.bottom), O.left = rf(R.left, O.left), O;
  }, l1(l, y, m));
  return {
    width: x.right - x.left,
    height: x.bottom - x.top,
    x: x.left,
    y: x.top
  };
}
function XU(u) {
  const {
    width: l,
    height: c
  } = ET(u);
  return {
    width: l,
    height: c
  };
}
function JU(u, l, c) {
  const d = kl(l), m = Eu(l), g = c === "fixed", S = uf(u, !0, g, l);
  let y = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const x = Os(0);
  if (d || !d && !g)
    if ((ip(l) !== "body" || xv(m)) && (y = Kg(l)), d) {
      const R = uf(l, !0, g, l);
      x.x = R.x + l.clientLeft, x.y = R.y + l.clientTop;
    } else m && (x.x = bT(m));
  const O = S.left + y.scrollLeft - x.x, k = S.top + y.scrollTop - x.y;
  return {
    x: O,
    y: k,
    width: S.width,
    height: S.height
  };
}
function Fw(u) {
  return Po(u).position === "static";
}
function u1(u, l) {
  return !kl(u) || Po(u).position === "fixed" ? null : l ? l(u) : u.offsetParent;
}
function xT(u, l) {
  const c = Ni(u);
  if (Gg(u))
    return c;
  if (!kl(u)) {
    let m = Ds(u);
    for (; m && !ep(m); ) {
      if (Tl(m) && !Fw(m))
        return m;
      m = Ds(m);
    }
    return c;
  }
  let d = u1(u, l);
  for (; d && HU(d) && Fw(d); )
    d = u1(d, l);
  return d && ep(d) && Fw(d) && !xb(d) ? c : d || $U(u) || c;
}
const ZU = async function(u) {
  const l = this.getOffsetParent || xT, c = this.getDimensions, d = await c(u.floating);
  return {
    reference: JU(u.reference, await l(u.floating), u.strategy),
    floating: {
      x: 0,
      y: 0,
      width: d.width,
      height: d.height
    }
  };
};
function eP(u) {
  return Po(u).direction === "rtl";
}
const tP = {
  convertOffsetParentRelativeRectToViewportRelativeRect: IU,
  getDocumentElement: Eu,
  getClippingRect: KU,
  getOffsetParent: xT,
  getElementRects: ZU,
  getClientRects: WU,
  getDimensions: XU,
  getScale: Kd,
  isElement: Tl,
  isRTL: eP
};
function nP(u, l) {
  let c = null, d;
  const m = Eu(u);
  function g() {
    var y;
    clearTimeout(d), (y = c) == null || y.disconnect(), c = null;
  }
  function S(y, x) {
    y === void 0 && (y = !1), x === void 0 && (x = 1), g();
    const {
      left: O,
      top: k,
      width: R,
      height: D
    } = u.getBoundingClientRect();
    if (y || l(), !R || !D)
      return;
    const j = Cg(k), U = Cg(m.clientWidth - (O + R)), H = Cg(m.clientHeight - (k + D)), oe = Cg(O), xe = {
      rootMargin: -j + "px " + -U + "px " + -H + "px " + -oe + "px",
      threshold: rf(0, Jd(1, x)) || 1
    };
    let fe = !0;
    function Re(X) {
      const Ae = X[0].intersectionRatio;
      if (Ae !== x) {
        if (!fe)
          return S();
        Ae ? S(!1, Ae) : d = setTimeout(() => {
          S(!1, 1e-7);
        }, 1e3);
      }
      fe = !1;
    }
    try {
      c = new IntersectionObserver(Re, {
        ...xe,
        // Handle <iframe>s
        root: m.ownerDocument
      });
    } catch {
      c = new IntersectionObserver(Re, xe);
    }
    c.observe(u);
  }
  return S(!0), g;
}
function rP(u, l, c, d) {
  d === void 0 && (d = {});
  const {
    ancestorScroll: m = !0,
    ancestorResize: g = !0,
    elementResize: S = typeof ResizeObserver == "function",
    layoutShift: y = typeof IntersectionObserver == "function",
    animationFrame: x = !1
  } = d, O = Rb(u), k = m || g ? [...O ? mv(O) : [], ...mv(l)] : [];
  k.forEach((ve) => {
    m && ve.addEventListener("scroll", c, {
      passive: !0
    }), g && ve.addEventListener("resize", c);
  });
  const R = O && y ? nP(O, c) : null;
  let D = -1, j = null;
  S && (j = new ResizeObserver((ve) => {
    let [xe] = ve;
    xe && xe.target === O && j && (j.unobserve(l), cancelAnimationFrame(D), D = requestAnimationFrame(() => {
      var fe;
      (fe = j) == null || fe.observe(l);
    })), c();
  }), O && !x && j.observe(O), j.observe(l));
  let U, H = x ? uf(u) : null;
  x && oe();
  function oe() {
    const ve = uf(u);
    H && (ve.x !== H.x || ve.y !== H.y || ve.width !== H.width || ve.height !== H.height) && c(), H = ve, U = requestAnimationFrame(oe);
  }
  return c(), () => {
    var ve;
    k.forEach((xe) => {
      m && xe.removeEventListener("scroll", c), g && xe.removeEventListener("resize", c);
    }), R == null || R(), (ve = j) == null || ve.disconnect(), j = null, x && cancelAnimationFrame(U);
  };
}
const aP = PU, iP = FU, oP = zU, lP = jU, s1 = (u, l, c) => {
  const d = /* @__PURE__ */ new Map(), m = {
    platform: tP,
    ...c
  }, g = {
    ...m.platform,
    _c: d
  };
  return MU(u, l, {
    ...m,
    platform: g
  });
};
var _T = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(u) {
  (function() {
    var l = {}.hasOwnProperty;
    function c() {
      for (var g = "", S = 0; S < arguments.length; S++) {
        var y = arguments[S];
        y && (g = m(g, d(y)));
      }
      return g;
    }
    function d(g) {
      if (typeof g == "string" || typeof g == "number")
        return g;
      if (typeof g != "object")
        return "";
      if (Array.isArray(g))
        return c.apply(null, g);
      if (g.toString !== Object.prototype.toString && !g.toString.toString().includes("[native code]"))
        return g.toString();
      var S = "";
      for (var y in g)
        l.call(g, y) && g[y] && (S = m(S, y));
      return S;
    }
    function m(g, S) {
      return S ? g ? g + " " + S : g + S : g;
    }
    u.exports ? (c.default = c, u.exports = c) : window.classNames = c;
  })();
})(_T);
var uP = _T.exports;
const lb = /* @__PURE__ */ pb(uP);
var c1 = {};
const sP = "react-tooltip-core-styles", cP = "react-tooltip-base-styles", f1 = { core: !1, base: !1 };
function d1({ css: u, id: l = cP, type: c = "base", ref: d }) {
  var m, g;
  if (!u || typeof document > "u" || f1[c] || c === "core" && typeof process < "u" && (!((m = process == null ? void 0 : c1) === null || m === void 0) && m.REACT_TOOLTIP_DISABLE_CORE_STYLES) || c !== "base" && typeof process < "u" && (!((g = process == null ? void 0 : c1) === null || g === void 0) && g.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
  c === "core" && (l = sP), d || (d = {});
  const { insertAt: S } = d;
  if (document.getElementById(l)) return;
  const y = document.head || document.getElementsByTagName("head")[0], x = document.createElement("style");
  x.id = l, x.type = "text/css", S === "top" && y.firstChild ? y.insertBefore(x, y.firstChild) : y.appendChild(x), x.styleSheet ? x.styleSheet.cssText = u : x.appendChild(document.createTextNode(u)), f1[c] = !0;
}
const p1 = async ({ elementReference: u = null, tooltipReference: l = null, tooltipArrowReference: c = null, place: d = "top", offset: m = 10, strategy: g = "absolute", middlewares: S = [aP(Number(m)), oP({ fallbackAxisSideDirection: "start" }), iP({ padding: 5 })], border: y }) => {
  if (!u) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: d };
  if (l === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: d };
  const x = S;
  return c ? (x.push(lP({ element: c, padding: 5 })), s1(u, l, { placement: d, strategy: g, middleware: x }).then(({ x: O, y: k, placement: R, middlewareData: D }) => {
    var j, U;
    const H = { left: `${O}px`, top: `${k}px`, border: y }, { x: oe, y: ve } = (j = D.arrow) !== null && j !== void 0 ? j : { x: 0, y: 0 }, xe = (U = { top: "bottom", right: "left", bottom: "top", left: "right" }[R.split("-")[0]]) !== null && U !== void 0 ? U : "bottom", fe = y && { borderBottom: y, borderRight: y };
    let Re = 0;
    if (y) {
      const X = `${y}`.match(/(\d+)px/);
      Re = X != null && X[1] ? Number(X[1]) : 1;
    }
    return { tooltipStyles: H, tooltipArrowStyles: { left: oe != null ? `${oe}px` : "", top: ve != null ? `${ve}px` : "", right: "", bottom: "", ...fe, [xe]: `-${4 + Re}px` }, place: R };
  })) : s1(u, l, { placement: "bottom", strategy: g, middleware: x }).then(({ x: O, y: k, placement: R }) => ({ tooltipStyles: { left: `${O}px`, top: `${k}px` }, tooltipArrowStyles: {}, place: R }));
}, h1 = (u, l) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(u, l), v1 = (u, l, c) => {
  let d = null;
  const m = function(...g) {
    const S = () => {
      d = null;
    };
    !d && (u.apply(this, g), d = setTimeout(S, l));
  };
  return m.cancel = () => {
    d && (clearTimeout(d), d = null);
  }, m;
}, m1 = (u) => u !== null && !Array.isArray(u) && typeof u == "object", ub = (u, l) => {
  if (u === l) return !0;
  if (Array.isArray(u) && Array.isArray(l)) return u.length === l.length && u.every((m, g) => ub(m, l[g]));
  if (Array.isArray(u) !== Array.isArray(l)) return !1;
  if (!m1(u) || !m1(l)) return u === l;
  const c = Object.keys(u), d = Object.keys(l);
  return c.length === d.length && c.every((m) => ub(u[m], l[m]));
}, fP = (u) => {
  if (!(u instanceof HTMLElement || u instanceof SVGElement)) return !1;
  const l = getComputedStyle(u);
  return ["overflow", "overflow-x", "overflow-y"].some((c) => {
    const d = l.getPropertyValue(c);
    return d === "auto" || d === "scroll";
  });
}, y1 = (u) => {
  if (!u) return null;
  let l = u.parentElement;
  for (; l; ) {
    if (fP(l)) return l;
    l = l.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, dP = typeof window < "u" ? me.useLayoutEffect : me.useEffect, to = (u) => {
  u.current && (clearTimeout(u.current), u.current = null);
}, pP = "DEFAULT_TOOLTIP_ID", hP = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, vP = me.createContext({ getTooltipData: () => hP });
function RT(u = pP) {
  return me.useContext(vP).getTooltipData(u);
}
var Qd = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, Hw = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const mP = ({ forwardRef: u, id: l, className: c, classNameArrow: d, variant: m = "dark", anchorId: g, anchorSelect: S, place: y = "top", offset: x = 10, events: O = ["hover"], openOnClick: k = !1, positionStrategy: R = "absolute", middlewares: D, wrapper: j, delayShow: U = 0, delayHide: H = 0, float: oe = !1, hidden: ve = !1, noArrow: xe = !1, clickable: fe = !1, closeOnEsc: Re = !1, closeOnScroll: X = !1, closeOnResize: Ae = !1, openEvents: tt, closeEvents: q, globalCloseEvents: we, imperativeModeOnly: ke, style: Oe, position: ge, afterShow: Ne, afterHide: Z, content: ie, contentWrapperRef: de, isOpen: ue, defaultIsOpen: N = !1, setIsOpen: re, activeAnchor: L, setActiveAnchor: F, border: J, opacity: _e, arrowColor: be, role: Pe = "tooltip" }) => {
  var Be;
  const Le = me.useRef(null), Fe = me.useRef(null), Ge = me.useRef(null), ht = me.useRef(null), vt = me.useRef(null), [$t, Me] = me.useState({ tooltipStyles: {}, tooltipArrowStyles: {}, place: y }), [_t, _n] = me.useState(!1), [cn, En] = me.useState(!1), [Lt, dr] = me.useState(null), rr = me.useRef(!1), jn = me.useRef(null), { anchorRefs: _r, setActiveAnchor: Lr } = RT(l), Yn = me.useRef(!1), [ar, qn] = me.useState([]), Qn = me.useRef(!1), un = k || O.includes("click"), Rr = un || (tt == null ? void 0 : tt.click) || (tt == null ? void 0 : tt.dblclick) || (tt == null ? void 0 : tt.mousedown), wr = tt ? { ...tt } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !tt && un && Object.assign(wr, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const Tr = q ? { ...q } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !q && un && Object.assign(Tr, { mouseleave: !1, blur: !1, mouseout: !1 });
  const je = we ? { ...we } : { escape: Re || !1, scroll: X || !1, resize: Ae || !1, clickOutsideAnchor: Rr || !1 };
  ke && (Object.assign(wr, { mouseenter: !1, focus: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Tr, { mouseleave: !1, blur: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(je, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), dP(() => (Qn.current = !0, () => {
    Qn.current = !1;
  }), []);
  const Ve = (Ie) => {
    Qn.current && (Ie && En(!0), setTimeout(() => {
      Qn.current && (re == null || re(Ie), ue === void 0 && _n(Ie));
    }, 10));
  };
  me.useEffect(() => {
    if (ue === void 0) return () => null;
    ue && En(!0);
    const Ie = setTimeout(() => {
      _n(ue);
    }, 10);
    return () => {
      clearTimeout(Ie);
    };
  }, [ue]), me.useEffect(() => {
    if (_t !== rr.current) if (to(vt), rr.current = _t, _t) Ne == null || Ne();
    else {
      const Ie = ((ft) => {
        const mt = ft.match(/^([\d.]+)(ms|s)$/);
        if (!mt) return 0;
        const [, sn, Dn] = mt;
        return Number(sn) * (Dn === "ms" ? 1 : 1e3);
      })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
      vt.current = setTimeout(() => {
        En(!1), dr(null), Z == null || Z();
      }, Ie + 25);
    }
  }, [_t]);
  const Tt = (Ie) => {
    Me((ft) => ub(ft, Ie) ? ft : Ie);
  }, Wt = (Ie = U) => {
    to(Ge), cn ? Ve(!0) : Ge.current = setTimeout(() => {
      Ve(!0);
    }, Ie);
  }, Ht = (Ie = H) => {
    to(ht), ht.current = setTimeout(() => {
      Yn.current || Ve(!1);
    }, Ie);
  }, Rn = (Ie) => {
    var ft;
    if (!Ie) return;
    const mt = (ft = Ie.currentTarget) !== null && ft !== void 0 ? ft : Ie.target;
    if (!(mt != null && mt.isConnected)) return F(null), void Lr({ current: null });
    U ? Wt() : Ve(!0), F(mt), Lr({ current: mt }), to(ht);
  }, fn = () => {
    fe ? Ht(H || 100) : H ? Ht() : Ve(!1), to(Ge);
  }, Gn = ({ x: Ie, y: ft }) => {
    var mt;
    const sn = { getBoundingClientRect: () => ({ x: Ie, y: ft, width: 0, height: 0, top: ft, left: Ie, right: Ie, bottom: ft }) };
    p1({ place: (mt = Lt == null ? void 0 : Lt.place) !== null && mt !== void 0 ? mt : y, offset: x, elementReference: sn, tooltipReference: Le.current, tooltipArrowReference: Fe.current, strategy: R, middlewares: D, border: J }).then((Dn) => {
      Tt(Dn);
    });
  }, Yt = (Ie) => {
    if (!Ie) return;
    const ft = Ie, mt = { x: ft.clientX, y: ft.clientY };
    Gn(mt), jn.current = mt;
  }, Vn = (Ie) => {
    var ft;
    if (!_t) return;
    const mt = Ie.target;
    mt.isConnected && (!((ft = Le.current) === null || ft === void 0) && ft.contains(mt) || [document.querySelector(`[id='${g}']`), ...ar].some((sn) => sn == null ? void 0 : sn.contains(mt)) || (Ve(!1), to(Ge)));
  }, Qt = v1(Rn, 50), Dt = v1(fn, 50), In = (Ie) => {
    Dt.cancel(), Qt(Ie);
  }, lt = () => {
    Qt.cancel(), Dt();
  }, jt = me.useCallback(() => {
    var Ie, ft;
    const mt = (Ie = Lt == null ? void 0 : Lt.position) !== null && Ie !== void 0 ? Ie : ge;
    mt ? Gn(mt) : oe ? jn.current && Gn(jn.current) : L != null && L.isConnected && p1({ place: (ft = Lt == null ? void 0 : Lt.place) !== null && ft !== void 0 ? ft : y, offset: x, elementReference: L, tooltipReference: Le.current, tooltipArrowReference: Fe.current, strategy: R, middlewares: D, border: J }).then((sn) => {
      Qn.current && Tt(sn);
    });
  }, [_t, L, ie, Oe, y, Lt == null ? void 0 : Lt.place, x, R, ge, Lt == null ? void 0 : Lt.position, oe]);
  me.useEffect(() => {
    var Ie, ft;
    const mt = new Set(_r);
    ar.forEach(($e) => {
      mt.add({ current: $e });
    });
    const sn = document.querySelector(`[id='${g}']`);
    sn && mt.add({ current: sn });
    const Dn = () => {
      Ve(!1);
    }, zn = y1(L), Un = y1(Le.current);
    je.scroll && (window.addEventListener("scroll", Dn), zn == null || zn.addEventListener("scroll", Dn), Un == null || Un.addEventListener("scroll", Dn));
    let mn = null;
    je.resize ? window.addEventListener("resize", Dn) : L && Le.current && (mn = rP(L, Le.current, jt, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const ir = ($e) => {
      $e.key === "Escape" && Ve(!1);
    };
    je.escape && window.addEventListener("keydown", ir), je.clickOutsideAnchor && window.addEventListener("click", Vn);
    const z = [], Se = ($e) => {
      _t && ($e == null ? void 0 : $e.target) === L || Rn($e);
    }, We = ($e) => {
      _t && ($e == null ? void 0 : $e.target) === L && fn();
    }, Ye = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], Ut = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(wr).forEach(([$e, dn]) => {
      dn && (Ye.includes($e) ? z.push({ event: $e, listener: In }) : Ut.includes($e) && z.push({ event: $e, listener: Se }));
    }), Object.entries(Tr).forEach(([$e, dn]) => {
      dn && (Ye.includes($e) ? z.push({ event: $e, listener: lt }) : Ut.includes($e) && z.push({ event: $e, listener: We }));
    }), oe && z.push({ event: "pointermove", listener: Yt });
    const Bt = () => {
      Yn.current = !0;
    }, At = () => {
      Yn.current = !1, fn();
    };
    return fe && !Rr && ((Ie = Le.current) === null || Ie === void 0 || Ie.addEventListener("mouseenter", Bt), (ft = Le.current) === null || ft === void 0 || ft.addEventListener("mouseleave", At)), z.forEach(({ event: $e, listener: dn }) => {
      mt.forEach((pn) => {
        var tn;
        (tn = pn.current) === null || tn === void 0 || tn.addEventListener($e, dn);
      });
    }), () => {
      var $e, dn;
      je.scroll && (window.removeEventListener("scroll", Dn), zn == null || zn.removeEventListener("scroll", Dn), Un == null || Un.removeEventListener("scroll", Dn)), je.resize ? window.removeEventListener("resize", Dn) : mn == null || mn(), je.clickOutsideAnchor && window.removeEventListener("click", Vn), je.escape && window.removeEventListener("keydown", ir), fe && !Rr && (($e = Le.current) === null || $e === void 0 || $e.removeEventListener("mouseenter", Bt), (dn = Le.current) === null || dn === void 0 || dn.removeEventListener("mouseleave", At)), z.forEach(({ event: pn, listener: tn }) => {
        mt.forEach((Mr) => {
          var ma;
          (ma = Mr.current) === null || ma === void 0 || ma.removeEventListener(pn, tn);
        });
      });
    };
  }, [L, jt, cn, _r, ar, tt, q, we, un, U, H]), me.useEffect(() => {
    var Ie, ft;
    let mt = (ft = (Ie = Lt == null ? void 0 : Lt.anchorSelect) !== null && Ie !== void 0 ? Ie : S) !== null && ft !== void 0 ? ft : "";
    !mt && l && (mt = `[data-tooltip-id='${l.replace(/'/g, "\\'")}']`);
    const sn = new MutationObserver((Dn) => {
      const zn = [], Un = [];
      Dn.forEach((mn) => {
        if (mn.type === "attributes" && mn.attributeName === "data-tooltip-id" && (mn.target.getAttribute("data-tooltip-id") === l ? zn.push(mn.target) : mn.oldValue === l && Un.push(mn.target)), mn.type === "childList") {
          if (L) {
            const ir = [...mn.removedNodes].filter((z) => z.nodeType === 1);
            if (mt) try {
              Un.push(...ir.filter((z) => z.matches(mt))), Un.push(...ir.flatMap((z) => [...z.querySelectorAll(mt)]));
            } catch {
            }
            ir.some((z) => {
              var Se;
              return !!(!((Se = z == null ? void 0 : z.contains) === null || Se === void 0) && Se.call(z, L)) && (En(!1), Ve(!1), F(null), to(Ge), to(ht), !0);
            });
          }
          if (mt) try {
            const ir = [...mn.addedNodes].filter((z) => z.nodeType === 1);
            zn.push(...ir.filter((z) => z.matches(mt))), zn.push(...ir.flatMap((z) => [...z.querySelectorAll(mt)]));
          } catch {
          }
        }
      }), (zn.length || Un.length) && qn((mn) => [...mn.filter((ir) => !Un.includes(ir)), ...zn]);
    });
    return sn.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      sn.disconnect();
    };
  }, [l, S, Lt == null ? void 0 : Lt.anchorSelect, L]), me.useEffect(() => {
    jt();
  }, [jt]), me.useEffect(() => {
    if (!(de != null && de.current)) return () => null;
    const Ie = new ResizeObserver(() => {
      setTimeout(() => jt());
    });
    return Ie.observe(de.current), () => {
      Ie.disconnect();
    };
  }, [ie, de == null ? void 0 : de.current]), me.useEffect(() => {
    var Ie;
    const ft = document.querySelector(`[id='${g}']`), mt = [...ar, ft];
    L && mt.includes(L) || F((Ie = ar[0]) !== null && Ie !== void 0 ? Ie : ft);
  }, [g, ar, L]), me.useEffect(() => (N && Ve(!0), () => {
    to(Ge), to(ht);
  }), []), me.useEffect(() => {
    var Ie;
    let ft = (Ie = Lt == null ? void 0 : Lt.anchorSelect) !== null && Ie !== void 0 ? Ie : S;
    if (!ft && l && (ft = `[data-tooltip-id='${l.replace(/'/g, "\\'")}']`), ft) try {
      const mt = Array.from(document.querySelectorAll(ft));
      qn(mt);
    } catch {
      qn([]);
    }
  }, [l, S, Lt == null ? void 0 : Lt.anchorSelect]), me.useEffect(() => {
    Ge.current && (to(Ge), Wt(U));
  }, [U]);
  const pr = (Be = Lt == null ? void 0 : Lt.content) !== null && Be !== void 0 ? Be : ie, ra = _t && Object.keys($t.tooltipStyles).length > 0;
  return me.useImperativeHandle(u, () => ({ open: (Ie) => {
    if (Ie != null && Ie.anchorSelect) try {
      document.querySelector(Ie.anchorSelect);
    } catch {
      return void console.warn(`[react-tooltip] "${Ie.anchorSelect}" is not a valid CSS selector`);
    }
    dr(Ie ?? null), Ie != null && Ie.delay ? Wt(Ie.delay) : Ve(!0);
  }, close: (Ie) => {
    Ie != null && Ie.delay ? Ht(Ie.delay) : Ve(!1);
  }, activeAnchor: L, place: $t.place, isOpen: !!(cn && !ve && pr && ra) })), cn && !ve && pr ? Cl.createElement(j, { id: l, role: Pe, className: lb("react-tooltip", Qd.tooltip, Hw.tooltip, Hw[m], c, `react-tooltip__place-${$t.place}`, Qd[ra ? "show" : "closing"], ra ? "react-tooltip__show" : "react-tooltip__closing", R === "fixed" && Qd.fixed, fe && Qd.clickable), onTransitionEnd: (Ie) => {
    to(vt), _t || Ie.propertyName !== "opacity" || (En(!1), dr(null), Z == null || Z());
  }, style: { ...Oe, ...$t.tooltipStyles, opacity: _e !== void 0 && ra ? _e : void 0 }, ref: Le }, pr, Cl.createElement(j, { className: lb("react-tooltip-arrow", Qd.arrow, Hw.arrow, d, xe && Qd.noArrow), style: { ...$t.tooltipArrowStyles, background: be ? `linear-gradient(to right bottom, transparent 50%, ${be} 50%)` : void 0 }, ref: Fe })) : null;
}, yP = ({ content: u }) => Cl.createElement("span", { dangerouslySetInnerHTML: { __html: u } }), Jc = Cl.forwardRef(({ id: u, anchorId: l, anchorSelect: c, content: d, html: m, render: g, className: S, classNameArrow: y, variant: x = "dark", place: O = "top", offset: k = 10, wrapper: R = "div", children: D = null, events: j = ["hover"], openOnClick: U = !1, positionStrategy: H = "absolute", middlewares: oe, delayShow: ve = 0, delayHide: xe = 0, float: fe = !1, hidden: Re = !1, noArrow: X = !1, clickable: Ae = !1, closeOnEsc: tt = !1, closeOnScroll: q = !1, closeOnResize: we = !1, openEvents: ke, closeEvents: Oe, globalCloseEvents: ge, imperativeModeOnly: Ne = !1, style: Z, position: ie, isOpen: de, defaultIsOpen: ue = !1, disableStyleInjection: N = !1, border: re, opacity: L, arrowColor: F, setIsOpen: J, afterShow: _e, afterHide: be, role: Pe = "tooltip" }, Be) => {
  const [Le, Fe] = me.useState(d), [Ge, ht] = me.useState(m), [vt, $t] = me.useState(O), [Me, _t] = me.useState(x), [_n, cn] = me.useState(k), [En, Lt] = me.useState(ve), [dr, rr] = me.useState(xe), [jn, _r] = me.useState(fe), [Lr, Yn] = me.useState(Re), [ar, qn] = me.useState(R), [Qn, un] = me.useState(j), [Rr, wr] = me.useState(H), [Tr, je] = me.useState(null), [Ve, Tt] = me.useState(null), Wt = me.useRef(N), { anchorRefs: Ht, activeAnchor: Rn } = RT(u), fn = (Dt) => Dt == null ? void 0 : Dt.getAttributeNames().reduce((In, lt) => {
    var jt;
    return lt.startsWith("data-tooltip-") && (In[lt.replace(/^data-tooltip-/, "")] = (jt = Dt == null ? void 0 : Dt.getAttribute(lt)) !== null && jt !== void 0 ? jt : null), In;
  }, {}), Gn = (Dt) => {
    const In = { place: (lt) => {
      var jt;
      $t((jt = lt) !== null && jt !== void 0 ? jt : O);
    }, content: (lt) => {
      Fe(lt ?? d);
    }, html: (lt) => {
      ht(lt ?? m);
    }, variant: (lt) => {
      var jt;
      _t((jt = lt) !== null && jt !== void 0 ? jt : x);
    }, offset: (lt) => {
      cn(lt === null ? k : Number(lt));
    }, wrapper: (lt) => {
      var jt;
      qn((jt = lt) !== null && jt !== void 0 ? jt : R);
    }, events: (lt) => {
      const jt = lt == null ? void 0 : lt.split(" ");
      un(jt ?? j);
    }, "position-strategy": (lt) => {
      var jt;
      wr((jt = lt) !== null && jt !== void 0 ? jt : H);
    }, "delay-show": (lt) => {
      Lt(lt === null ? ve : Number(lt));
    }, "delay-hide": (lt) => {
      rr(lt === null ? xe : Number(lt));
    }, float: (lt) => {
      _r(lt === null ? fe : lt === "true");
    }, hidden: (lt) => {
      Yn(lt === null ? Re : lt === "true");
    }, "class-name": (lt) => {
      je(lt);
    } };
    Object.values(In).forEach((lt) => lt(null)), Object.entries(Dt).forEach(([lt, jt]) => {
      var pr;
      (pr = In[lt]) === null || pr === void 0 || pr.call(In, jt);
    });
  };
  me.useEffect(() => {
    Fe(d);
  }, [d]), me.useEffect(() => {
    ht(m);
  }, [m]), me.useEffect(() => {
    $t(O);
  }, [O]), me.useEffect(() => {
    _t(x);
  }, [x]), me.useEffect(() => {
    cn(k);
  }, [k]), me.useEffect(() => {
    Lt(ve);
  }, [ve]), me.useEffect(() => {
    rr(xe);
  }, [xe]), me.useEffect(() => {
    _r(fe);
  }, [fe]), me.useEffect(() => {
    Yn(Re);
  }, [Re]), me.useEffect(() => {
    wr(H);
  }, [H]), me.useEffect(() => {
    Wt.current !== N && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [N]), me.useEffect(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: N === "core", disableBase: N } }));
  }, []), me.useEffect(() => {
    var Dt;
    const In = new Set(Ht);
    let lt = c;
    if (!lt && u && (lt = `[data-tooltip-id='${u.replace(/'/g, "\\'")}']`), lt) try {
      document.querySelectorAll(lt).forEach((ft) => {
        In.add({ current: ft });
      });
    } catch {
      console.warn(`[react-tooltip] "${lt}" is not a valid CSS selector`);
    }
    const jt = document.querySelector(`[id='${l}']`);
    if (jt && In.add({ current: jt }), !In.size) return () => null;
    const pr = (Dt = Ve ?? jt) !== null && Dt !== void 0 ? Dt : Rn.current, ra = new MutationObserver((ft) => {
      ft.forEach((mt) => {
        var sn;
        if (!pr || mt.type !== "attributes" || !(!((sn = mt.attributeName) === null || sn === void 0) && sn.startsWith("data-tooltip-"))) return;
        const Dn = fn(pr);
        Gn(Dn);
      });
    }), Ie = { attributes: !0, childList: !1, subtree: !1 };
    if (pr) {
      const ft = fn(pr);
      Gn(ft), ra.observe(pr, Ie);
    }
    return () => {
      ra.disconnect();
    };
  }, [Ht, Rn, Ve, l, c]), me.useEffect(() => {
    Z != null && Z.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), re && !h1("border", `${re}`) && console.warn(`[react-tooltip] "${re}" is not a valid \`border\`.`), Z != null && Z.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), L && !h1("opacity", `${L}`) && console.warn(`[react-tooltip] "${L}" is not a valid \`opacity\`.`);
  }, []);
  let Yt = D;
  const Vn = me.useRef(null);
  if (g) {
    const Dt = g({ content: (Ve == null ? void 0 : Ve.getAttribute("data-tooltip-content")) || Le || null, activeAnchor: Ve });
    Yt = Dt ? Cl.createElement("div", { ref: Vn, className: "react-tooltip-content-wrapper" }, Dt) : null;
  } else Le && (Yt = Le);
  Ge && (Yt = Cl.createElement(yP, { content: Ge }));
  const Qt = { forwardRef: Be, id: u, anchorId: l, anchorSelect: c, className: lb(S, Tr), classNameArrow: y, content: Yt, contentWrapperRef: Vn, place: vt, variant: Me, offset: _n, wrapper: ar, events: Qn, openOnClick: U, positionStrategy: Rr, middlewares: oe, delayShow: En, delayHide: dr, float: jn, hidden: Lr, noArrow: X, clickable: Ae, closeOnEsc: tt, closeOnScroll: q, closeOnResize: we, openEvents: ke, closeEvents: Oe, globalCloseEvents: ge, imperativeModeOnly: Ne, style: Z, position: ie, isOpen: de, defaultIsOpen: ue, border: re, opacity: L, arrowColor: F, setIsOpen: J, afterShow: _e, afterHide: be, activeAnchor: Ve, setActiveAnchor: (Dt) => Tt(Dt), role: Pe };
  return Cl.createElement(mP, { ...Qt });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (u) => {
  u.detail.disableCore || d1({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), u.detail.disableBase || d1({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const gP = {
  headers: {
    "Content-Type": "multipart/form-data"
    // Set content type for FormData
  }
}, sb = `${window.twChatSettings.plugin_dir_url}treyworks-chat.log`;
function SP(u, l) {
  nr.get(sb).then(u).catch(l);
}
function EP(u, l) {
  nr.post(twChatSettings.ajax_url, {
    action: "clear_log",
    _ajax_nonce: twChatSettings.ajax_nonce
  }, gP).then(u).catch(l);
}
function wP({ isOpen: u, onRequestClose: l }) {
  const [c, d] = me.useState("");
  me.useEffect(() => {
    u && m();
  }, [u]);
  const m = function() {
    SP(g, S);
  }, g = function(k) {
    d(k.data);
  }, S = function(k) {
    console.error("Error fetching log data:", k), gi.error("Error fetching log data.");
  }, y = function() {
    console.log("Clearing"), window.confirm("Are you sure you want to clear the log file?") && EP(x, O);
  }, x = function(k) {
    gi.success("Log file cleared"), m();
  }, O = function(k) {
    gi.error("Error clearing log file");
  };
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: /* @__PURE__ */ B.jsxs(
    Qg,
    {
      isOpen: u,
      onRequestClose: l,
      contentLabel: "Log File Viewer",
      className: "tw-chat-admin-modal",
      overlayClassName: "tw-chat-admin-overlay",
      children: [
        /* @__PURE__ */ B.jsxs("h2", { className: "tw-chat-admin-modal-header", children: [
          "Log File Viewer",
          /* @__PURE__ */ B.jsx("button", { onClick: l, children: /* @__PURE__ */ B.jsx("span", { className: "dashicons dashicons-no-alt" }) })
        ] }),
        /* @__PURE__ */ B.jsxs("div", { className: "tw-chat-admin-modal-content", children: [
          /* @__PURE__ */ B.jsxs("p", { children: [
            /* @__PURE__ */ B.jsx("strong", { children: "Location: " }),
            /* @__PURE__ */ B.jsx(
              "a",
              {
                href: sb,
                download: "treyworks-chat.log",
                "data-tooltip-id": "download-tooltip",
                "data-tooltip-content": "Click to download log file.",
                "data-tooltip-place": "top",
                children: sb
              }
            ),
            /* @__PURE__ */ B.jsx(Jc, { id: "download-tooltip" })
          ] }),
          /* @__PURE__ */ B.jsxs("p", { children: [
            /* @__PURE__ */ B.jsx("a", { href: "#", className: "button button-primary", onClick: m, children: "Refresh" }),
            " ",
            /* @__PURE__ */ B.jsx("a", { href: "#", className: "button button-secondary", onClick: y, children: "Clear Log" })
          ] }),
          /* @__PURE__ */ B.jsx("pre", { dangerouslySetInnerHTML: { __html: c } })
        ] })
      ]
    }
  ) });
}
function bP() {
  const [u, l] = me.useState({
    tw_chat_button_text: twChatSettings.tw_chat_button_text,
    // tw_chat_assistant_name: twChatSettings.tw_chat_assistant_name,
    tw_chat_openai_key: twChatSettings.tw_chat_openai_key,
    // tw_chat_assistant_id: twChatSettings.tw_chat_assistant_id,
    // tw_chat_greeting: twChatSettings.tw_chat_greeting,
    tw_chat_disclaimer: twChatSettings.tw_chat_disclaimer,
    tw_chat_error_message: twChatSettings.tw_chat_error_message,
    tw_chat_is_enabled: twChatSettings.tw_chat_is_enabled,
    tw_chat_is_debug: twChatSettings.tw_chat_is_debug,
    tw_chat_max_characters: twChatSettings.tw_chat_max_characters,
    tw_chat_global_widget_id: twChatSettings.tw_chat_global_widget_id,
    tw_chat_logo_url: twChatSettings.tw_chat_logo_url
  }), [c, d] = me.useState(!1), [m, g] = gb(nT), [S, y] = me.useState(!1), x = function(R) {
    R.preventDefault(), d(!0), nr.post(twChatSettings.ajax_url, {
      action: "save_settings",
      _ajax_nonce: twChatSettings.ajax_nonce,
      data: u
    }, {
      headers: {
        "Content-Type": "multipart/form-data"
        // Set content type for FormData
      }
    }).then(function(D) {
      gi.success("Settings saved successfully!"), d(!1), console.log("Settings saved successfully!");
    }).catch(function(D) {
      gi.error("There was an error saving settings."), console.log(`Error saving settings: ${D}`);
    });
  }, O = function(R) {
    const { name: D, value: j } = R.target;
    let U = u;
    U[D] = j, l(U);
  }, k = function(R) {
    const { name: D, value: j, checked: U } = R.target;
    let H = u;
    U ? (console.log(R.target.value), H[D] = j) : H[D] = "", l(H);
  };
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: /* @__PURE__ */ B.jsxs("form", { id: "tw-chat-settings-form", onSubmit: x, children: [
    /* @__PURE__ */ B.jsx("p", { children: "Enter your OpenAI API key to connect to your account." }),
    /* @__PURE__ */ B.jsx("table", { className: "form-table", children: /* @__PURE__ */ B.jsx("tbody", { children: /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
      /* @__PURE__ */ B.jsx("th", { scope: "row", children: "OpenAI Key" }),
      /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_openai_key", onChange: O, defaultValue: u.tw_chat_openai_key }) })
    ] }) }) }),
    /* @__PURE__ */ B.jsx("p", { children: "Global settings for chat widget functionality." }),
    /* @__PURE__ */ B.jsx("table", { className: "form-table", children: /* @__PURE__ */ B.jsxs("tbody", { children: [
      /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Custom Logo URL" }),
        /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_logo_url", onChange: O, defaultValue: u.tw_chat_logo_url }) })
      ] }),
      /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Disclaimer" }),
        /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("textarea", { className: "regular-text", name: "tw_chat_disclaimer", rows: "5", onChange: O, defaultValue: u.tw_chat_disclaimer }) })
      ] }),
      /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Maximum Characters Allowed" }),
        /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("input", { className: "regular-text", type: "number", name: "tw_chat_max_characters", onChange: O, defaultValue: u.tw_chat_max_characters }) })
      ] }),
      /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Chat Error Message" }),
        /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("textarea", { className: "regular-text", name: "tw_chat_error_message", rows: "5", onChange: O, defaultValue: u.tw_chat_error_message }) })
      ] }),
      /* @__PURE__ */ B.jsxs("tr", { children: [
        /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Enable Debugging" }),
        /* @__PURE__ */ B.jsxs("td", { children: [
          /* @__PURE__ */ B.jsx(
            "input",
            {
              type: "checkbox",
              id: "tw_chat_is_debug",
              name: "tw_chat_is_debug",
              defaultValue: "enabled",
              defaultChecked: !!u.tw_chat_is_debug,
              onChange: k
            }
          ),
          /* @__PURE__ */ B.jsx("label", { htmlFor: "tw_chat_is_debug", children: "Yes, enable debugging and plugin logging." }),
          /* @__PURE__ */ B.jsx("p", { children: /* @__PURE__ */ B.jsx("a", { href: "#", onClick: () => y(!0), children: "Open Log File" }) })
        ] })
      ] })
    ] }) }),
    m.length > 0 && /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      /* @__PURE__ */ B.jsx("p", { children: "Set up your global chat widget that appears in the lower right corner of the screen." }),
      /* @__PURE__ */ B.jsx("table", { className: "form-table", children: /* @__PURE__ */ B.jsxs("tbody", { children: [
        /* @__PURE__ */ B.jsxs("tr", { children: [
          /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Enable Global Chat Widget" }),
          /* @__PURE__ */ B.jsxs("td", { children: [
            /* @__PURE__ */ B.jsx(
              "input",
              {
                type: "checkbox",
                id: "tw_chat_is_enabled",
                name: "tw_chat_is_enabled",
                defaultValue: "enabled",
                defaultChecked: !!u.tw_chat_is_enabled,
                onChange: k
              }
            ),
            /* @__PURE__ */ B.jsx("label", { htmlFor: "tw_chat_is_enabled", children: "Yes, enable the global chat widget." })
          ] })
        ] }),
        /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Global Chat Widget" }),
          /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsxs("select", { name: "tw_chat_global_widget_id", onChange: O, defaultValue: u.tw_chat_global_widget_id, children: [
            /* @__PURE__ */ B.jsx("option", { value: "", children: "Select a chat widget" }),
            m.map((R) => /* @__PURE__ */ B.jsx("option", { value: R.id, children: R.name }, R.id))
          ] }) })
        ] }),
        /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Chat Button Text" }),
          /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_button_text", onChange: O, defaultValue: u.tw_chat_button_text }) })
        ] })
      ] }) })
    ] }),
    c ? /* @__PURE__ */ B.jsxs("p", { children: [
      /* @__PURE__ */ B.jsx("span", { className: "spinner is-active" }),
      " Saving"
    ] }) : /* @__PURE__ */ B.jsx("input", { className: "button button-hero button-primary", type: "submit", value: "Submit" }),
    /* @__PURE__ */ B.jsx(
      wP,
      {
        isOpen: S,
        onRequestClose: () => y(!1)
      }
    )
  ] }) });
}
function Tb() {
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
let df = Tb();
function TT(u) {
  df = u;
}
const kT = /[&<>"']/, CP = new RegExp(kT.source, "g"), OT = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, xP = new RegExp(OT.source, "g"), _P = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, g1 = (u) => _P[u];
function Di(u, l) {
  if (l) {
    if (kT.test(u))
      return u.replace(CP, g1);
  } else if (OT.test(u))
    return u.replace(xP, g1);
  return u;
}
const RP = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function TP(u) {
  return u.replace(RP, (l, c) => (c = c.toLowerCase(), c === "colon" ? ":" : c.charAt(0) === "#" ? c.charAt(1) === "x" ? String.fromCharCode(parseInt(c.substring(2), 16)) : String.fromCharCode(+c.substring(1)) : ""));
}
const kP = /(^|[^\[])\^/g;
function Mn(u, l) {
  let c = typeof u == "string" ? u : u.source;
  l = l || "";
  const d = {
    replace: (m, g) => {
      let S = typeof g == "string" ? g : g.source;
      return S = S.replace(kP, "$1"), c = c.replace(m, S), d;
    },
    getRegex: () => new RegExp(c, l)
  };
  return d;
}
function S1(u) {
  try {
    u = encodeURI(u).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return u;
}
const fv = { exec: () => null };
function E1(u, l) {
  const c = u.replace(/\|/g, (g, S, y) => {
    let x = !1, O = S;
    for (; --O >= 0 && y[O] === "\\"; )
      x = !x;
    return x ? "|" : " |";
  }), d = c.split(/ \|/);
  let m = 0;
  if (d[0].trim() || d.shift(), d.length > 0 && !d[d.length - 1].trim() && d.pop(), l)
    if (d.length > l)
      d.splice(l);
    else
      for (; d.length < l; )
        d.push("");
  for (; m < d.length; m++)
    d[m] = d[m].trim().replace(/\\\|/g, "|");
  return d;
}
function xg(u, l, c) {
  const d = u.length;
  if (d === 0)
    return "";
  let m = 0;
  for (; m < d; ) {
    const g = u.charAt(d - m - 1);
    if (g === l && !c)
      m++;
    else if (g !== l && c)
      m++;
    else
      break;
  }
  return u.slice(0, d - m);
}
function OP(u, l) {
  if (u.indexOf(l[1]) === -1)
    return -1;
  let c = 0;
  for (let d = 0; d < u.length; d++)
    if (u[d] === "\\")
      d++;
    else if (u[d] === l[0])
      c++;
    else if (u[d] === l[1] && (c--, c < 0))
      return d;
  return -1;
}
function w1(u, l, c, d) {
  const m = l.href, g = l.title ? Di(l.title) : null, S = u[1].replace(/\\([\[\]])/g, "$1");
  if (u[0].charAt(0) !== "!") {
    d.state.inLink = !0;
    const y = {
      type: "link",
      raw: c,
      href: m,
      title: g,
      text: S,
      tokens: d.inlineTokens(S)
    };
    return d.state.inLink = !1, y;
  }
  return {
    type: "image",
    raw: c,
    href: m,
    title: g,
    text: Di(S)
  };
}
function DP(u, l) {
  const c = u.match(/^(\s+)(?:```)/);
  if (c === null)
    return l;
  const d = c[1];
  return l.split(`
`).map((m) => {
    const g = m.match(/^\s+/);
    if (g === null)
      return m;
    const [S] = g;
    return S.length >= d.length ? m.slice(d.length) : m;
  }).join(`
`);
}
class Fg {
  // set by the lexer
  constructor(l) {
    tr(this, "options");
    tr(this, "rules");
    // set by the lexer
    tr(this, "lexer");
    this.options = l || df;
  }
  space(l) {
    const c = this.rules.block.newline.exec(l);
    if (c && c[0].length > 0)
      return {
        type: "space",
        raw: c[0]
      };
  }
  code(l) {
    const c = this.rules.block.code.exec(l);
    if (c) {
      const d = c[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: c[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? d : xg(d, `
`)
      };
    }
  }
  fences(l) {
    const c = this.rules.block.fences.exec(l);
    if (c) {
      const d = c[0], m = DP(d, c[3] || "");
      return {
        type: "code",
        raw: d,
        lang: c[2] ? c[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : c[2],
        text: m
      };
    }
  }
  heading(l) {
    const c = this.rules.block.heading.exec(l);
    if (c) {
      let d = c[2].trim();
      if (/#$/.test(d)) {
        const m = xg(d, "#");
        (this.options.pedantic || !m || / $/.test(m)) && (d = m.trim());
      }
      return {
        type: "heading",
        raw: c[0],
        depth: c[1].length,
        text: d,
        tokens: this.lexer.inline(d)
      };
    }
  }
  hr(l) {
    const c = this.rules.block.hr.exec(l);
    if (c)
      return {
        type: "hr",
        raw: c[0]
      };
  }
  blockquote(l) {
    const c = this.rules.block.blockquote.exec(l);
    if (c) {
      const d = xg(c[0].replace(/^ *>[ \t]?/gm, ""), `
`), m = this.lexer.state.top;
      this.lexer.state.top = !0;
      const g = this.lexer.blockTokens(d);
      return this.lexer.state.top = m, {
        type: "blockquote",
        raw: c[0],
        tokens: g,
        text: d
      };
    }
  }
  list(l) {
    let c = this.rules.block.list.exec(l);
    if (c) {
      let d = c[1].trim();
      const m = d.length > 1, g = {
        type: "list",
        raw: "",
        ordered: m,
        start: m ? +d.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      d = m ? `\\d{1,9}\\${d.slice(-1)}` : `\\${d}`, this.options.pedantic && (d = m ? d : "[*+-]");
      const S = new RegExp(`^( {0,3}${d})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let y = "", x = "", O = !1;
      for (; l; ) {
        let k = !1;
        if (!(c = S.exec(l)) || this.rules.block.hr.test(l))
          break;
        y = c[0], l = l.substring(y.length);
        let R = c[2].split(`
`, 1)[0].replace(/^\t+/, (ve) => " ".repeat(3 * ve.length)), D = l.split(`
`, 1)[0], j = 0;
        this.options.pedantic ? (j = 2, x = R.trimStart()) : (j = c[2].search(/[^ ]/), j = j > 4 ? 1 : j, x = R.slice(j), j += c[1].length);
        let U = !1;
        if (!R && /^ *$/.test(D) && (y += D + `
`, l = l.substring(D.length + 1), k = !0), !k) {
          const ve = new RegExp(`^ {0,${Math.min(3, j - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), xe = new RegExp(`^ {0,${Math.min(3, j - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fe = new RegExp(`^ {0,${Math.min(3, j - 1)}}(?:\`\`\`|~~~)`), Re = new RegExp(`^ {0,${Math.min(3, j - 1)}}#`);
          for (; l; ) {
            const X = l.split(`
`, 1)[0];
            if (D = X, this.options.pedantic && (D = D.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), fe.test(D) || Re.test(D) || ve.test(D) || xe.test(l))
              break;
            if (D.search(/[^ ]/) >= j || !D.trim())
              x += `
` + D.slice(j);
            else {
              if (U || R.search(/[^ ]/) >= 4 || fe.test(R) || Re.test(R) || xe.test(R))
                break;
              x += `
` + D;
            }
            !U && !D.trim() && (U = !0), y += X + `
`, l = l.substring(X.length + 1), R = D.slice(j);
          }
        }
        g.loose || (O ? g.loose = !0 : /\n *\n *$/.test(y) && (O = !0));
        let H = null, oe;
        this.options.gfm && (H = /^\[[ xX]\] /.exec(x), H && (oe = H[0] !== "[ ] ", x = x.replace(/^\[[ xX]\] +/, ""))), g.items.push({
          type: "list_item",
          raw: y,
          task: !!H,
          checked: oe,
          loose: !1,
          text: x,
          tokens: []
        }), g.raw += y;
      }
      g.items[g.items.length - 1].raw = y.trimEnd(), g.items[g.items.length - 1].text = x.trimEnd(), g.raw = g.raw.trimEnd();
      for (let k = 0; k < g.items.length; k++)
        if (this.lexer.state.top = !1, g.items[k].tokens = this.lexer.blockTokens(g.items[k].text, []), !g.loose) {
          const R = g.items[k].tokens.filter((j) => j.type === "space"), D = R.length > 0 && R.some((j) => /\n.*\n/.test(j.raw));
          g.loose = D;
        }
      if (g.loose)
        for (let k = 0; k < g.items.length; k++)
          g.items[k].loose = !0;
      return g;
    }
  }
  html(l) {
    const c = this.rules.block.html.exec(l);
    if (c)
      return {
        type: "html",
        block: !0,
        raw: c[0],
        pre: c[1] === "pre" || c[1] === "script" || c[1] === "style",
        text: c[0]
      };
  }
  def(l) {
    const c = this.rules.block.def.exec(l);
    if (c) {
      const d = c[1].toLowerCase().replace(/\s+/g, " "), m = c[2] ? c[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", g = c[3] ? c[3].substring(1, c[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : c[3];
      return {
        type: "def",
        tag: d,
        raw: c[0],
        href: m,
        title: g
      };
    }
  }
  table(l) {
    const c = this.rules.block.table.exec(l);
    if (!c || !/[:|]/.test(c[2]))
      return;
    const d = E1(c[1]), m = c[2].replace(/^\||\| *$/g, "").split("|"), g = c[3] && c[3].trim() ? c[3].replace(/\n[ \t]*$/, "").split(`
`) : [], S = {
      type: "table",
      raw: c[0],
      header: [],
      align: [],
      rows: []
    };
    if (d.length === m.length) {
      for (const y of m)
        /^ *-+: *$/.test(y) ? S.align.push("right") : /^ *:-+: *$/.test(y) ? S.align.push("center") : /^ *:-+ *$/.test(y) ? S.align.push("left") : S.align.push(null);
      for (const y of d)
        S.header.push({
          text: y,
          tokens: this.lexer.inline(y)
        });
      for (const y of g)
        S.rows.push(E1(y, S.header.length).map((x) => ({
          text: x,
          tokens: this.lexer.inline(x)
        })));
      return S;
    }
  }
  lheading(l) {
    const c = this.rules.block.lheading.exec(l);
    if (c)
      return {
        type: "heading",
        raw: c[0],
        depth: c[2].charAt(0) === "=" ? 1 : 2,
        text: c[1],
        tokens: this.lexer.inline(c[1])
      };
  }
  paragraph(l) {
    const c = this.rules.block.paragraph.exec(l);
    if (c) {
      const d = c[1].charAt(c[1].length - 1) === `
` ? c[1].slice(0, -1) : c[1];
      return {
        type: "paragraph",
        raw: c[0],
        text: d,
        tokens: this.lexer.inline(d)
      };
    }
  }
  text(l) {
    const c = this.rules.block.text.exec(l);
    if (c)
      return {
        type: "text",
        raw: c[0],
        text: c[0],
        tokens: this.lexer.inline(c[0])
      };
  }
  escape(l) {
    const c = this.rules.inline.escape.exec(l);
    if (c)
      return {
        type: "escape",
        raw: c[0],
        text: Di(c[1])
      };
  }
  tag(l) {
    const c = this.rules.inline.tag.exec(l);
    if (c)
      return !this.lexer.state.inLink && /^<a /i.test(c[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(c[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(c[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(c[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: c[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: c[0]
      };
  }
  link(l) {
    const c = this.rules.inline.link.exec(l);
    if (c) {
      const d = c[2].trim();
      if (!this.options.pedantic && /^</.test(d)) {
        if (!/>$/.test(d))
          return;
        const S = xg(d.slice(0, -1), "\\");
        if ((d.length - S.length) % 2 === 0)
          return;
      } else {
        const S = OP(c[2], "()");
        if (S > -1) {
          const x = (c[0].indexOf("!") === 0 ? 5 : 4) + c[1].length + S;
          c[2] = c[2].substring(0, S), c[0] = c[0].substring(0, x).trim(), c[3] = "";
        }
      }
      let m = c[2], g = "";
      if (this.options.pedantic) {
        const S = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(m);
        S && (m = S[1], g = S[3]);
      } else
        g = c[3] ? c[3].slice(1, -1) : "";
      return m = m.trim(), /^</.test(m) && (this.options.pedantic && !/>$/.test(d) ? m = m.slice(1) : m = m.slice(1, -1)), w1(c, {
        href: m && m.replace(this.rules.inline.anyPunctuation, "$1"),
        title: g && g.replace(this.rules.inline.anyPunctuation, "$1")
      }, c[0], this.lexer);
    }
  }
  reflink(l, c) {
    let d;
    if ((d = this.rules.inline.reflink.exec(l)) || (d = this.rules.inline.nolink.exec(l))) {
      const m = (d[2] || d[1]).replace(/\s+/g, " "), g = c[m.toLowerCase()];
      if (!g) {
        const S = d[0].charAt(0);
        return {
          type: "text",
          raw: S,
          text: S
        };
      }
      return w1(d, g, d[0], this.lexer);
    }
  }
  emStrong(l, c, d = "") {
    let m = this.rules.inline.emStrongLDelim.exec(l);
    if (!m || m[3] && d.match(/[\p{L}\p{N}]/u))
      return;
    if (!(m[1] || m[2] || "") || !d || this.rules.inline.punctuation.exec(d)) {
      const S = [...m[0]].length - 1;
      let y, x, O = S, k = 0;
      const R = m[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (R.lastIndex = 0, c = c.slice(-1 * l.length + S); (m = R.exec(c)) != null; ) {
        if (y = m[1] || m[2] || m[3] || m[4] || m[5] || m[6], !y)
          continue;
        if (x = [...y].length, m[3] || m[4]) {
          O += x;
          continue;
        } else if ((m[5] || m[6]) && S % 3 && !((S + x) % 3)) {
          k += x;
          continue;
        }
        if (O -= x, O > 0)
          continue;
        x = Math.min(x, x + O + k);
        const D = [...m[0]][0].length, j = l.slice(0, S + m.index + D + x);
        if (Math.min(S, x) % 2) {
          const H = j.slice(1, -1);
          return {
            type: "em",
            raw: j,
            text: H,
            tokens: this.lexer.inlineTokens(H)
          };
        }
        const U = j.slice(2, -2);
        return {
          type: "strong",
          raw: j,
          text: U,
          tokens: this.lexer.inlineTokens(U)
        };
      }
    }
  }
  codespan(l) {
    const c = this.rules.inline.code.exec(l);
    if (c) {
      let d = c[2].replace(/\n/g, " ");
      const m = /[^ ]/.test(d), g = /^ /.test(d) && / $/.test(d);
      return m && g && (d = d.substring(1, d.length - 1)), d = Di(d, !0), {
        type: "codespan",
        raw: c[0],
        text: d
      };
    }
  }
  br(l) {
    const c = this.rules.inline.br.exec(l);
    if (c)
      return {
        type: "br",
        raw: c[0]
      };
  }
  del(l) {
    const c = this.rules.inline.del.exec(l);
    if (c)
      return {
        type: "del",
        raw: c[0],
        text: c[2],
        tokens: this.lexer.inlineTokens(c[2])
      };
  }
  autolink(l) {
    const c = this.rules.inline.autolink.exec(l);
    if (c) {
      let d, m;
      return c[2] === "@" ? (d = Di(c[1]), m = "mailto:" + d) : (d = Di(c[1]), m = d), {
        type: "link",
        raw: c[0],
        text: d,
        href: m,
        tokens: [
          {
            type: "text",
            raw: d,
            text: d
          }
        ]
      };
    }
  }
  url(l) {
    var d;
    let c;
    if (c = this.rules.inline.url.exec(l)) {
      let m, g;
      if (c[2] === "@")
        m = Di(c[0]), g = "mailto:" + m;
      else {
        let S;
        do
          S = c[0], c[0] = ((d = this.rules.inline._backpedal.exec(c[0])) == null ? void 0 : d[0]) ?? "";
        while (S !== c[0]);
        m = Di(c[0]), c[1] === "www." ? g = "http://" + c[0] : g = c[0];
      }
      return {
        type: "link",
        raw: c[0],
        text: m,
        href: g,
        tokens: [
          {
            type: "text",
            raw: m,
            text: m
          }
        ]
      };
    }
  }
  inlineText(l) {
    const c = this.rules.inline.text.exec(l);
    if (c) {
      let d;
      return this.lexer.state.inRawBlock ? d = c[0] : d = Di(c[0]), {
        type: "text",
        raw: c[0],
        text: d
      };
    }
  }
}
const AP = /^(?: *(?:\n|$))+/, NP = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, LP = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, _v = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, MP = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, DT = /(?:[*+-]|\d{1,9}[.)])/, AT = Mn(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, DT).getRegex(), kb = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, jP = /^[^\n]+/, Ob = /(?!\s*\])(?:\\.|[^\[\]\\])+/, zP = Mn(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Ob).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), UP = Mn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, DT).getRegex(), Xg = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Db = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, PP = Mn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Db).replace("tag", Xg).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), NT = Mn(kb).replace("hr", _v).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Xg).getRegex(), FP = Mn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", NT).getRegex(), Ab = {
  blockquote: FP,
  code: NP,
  def: zP,
  fences: LP,
  heading: MP,
  hr: _v,
  html: PP,
  lheading: AT,
  list: UP,
  newline: AP,
  paragraph: NT,
  table: fv,
  text: jP
}, b1 = Mn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", _v).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Xg).getRegex(), HP = {
  ...Ab,
  table: b1,
  paragraph: Mn(kb).replace("hr", _v).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", b1).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Xg).getRegex()
}, $P = {
  ...Ab,
  html: Mn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Db).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: fv,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Mn(kb).replace("hr", _v).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", AT).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, LT = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, BP = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, MT = /^( {2,}|\\)\n(?!\s*$)/, VP = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Rv = "\\p{P}\\p{S}", IP = Mn(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Rv).getRegex(), WP = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, YP = Mn(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Rv).getRegex(), qP = Mn("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Rv).getRegex(), QP = Mn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Rv).getRegex(), GP = Mn(/\\([punct])/, "gu").replace(/punct/g, Rv).getRegex(), KP = Mn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), XP = Mn(Db).replace("(?:-->|$)", "-->").getRegex(), JP = Mn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", XP).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Hg = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, ZP = Mn(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Hg).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), jT = Mn(/^!?\[(label)\]\[(ref)\]/).replace("label", Hg).replace("ref", Ob).getRegex(), zT = Mn(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ob).getRegex(), eF = Mn("reflink|nolink(?!\\()", "g").replace("reflink", jT).replace("nolink", zT).getRegex(), Nb = {
  _backpedal: fv,
  // only used for GFM url
  anyPunctuation: GP,
  autolink: KP,
  blockSkip: WP,
  br: MT,
  code: BP,
  del: fv,
  emStrongLDelim: YP,
  emStrongRDelimAst: qP,
  emStrongRDelimUnd: QP,
  escape: LT,
  link: ZP,
  nolink: zT,
  punctuation: IP,
  reflink: jT,
  reflinkSearch: eF,
  tag: JP,
  text: VP,
  url: fv
}, tF = {
  ...Nb,
  link: Mn(/^!?\[(label)\]\((.*?)\)/).replace("label", Hg).getRegex(),
  reflink: Mn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Hg).getRegex()
}, cb = {
  ...Nb,
  escape: Mn(LT).replace("])", "~|])").getRegex(),
  url: Mn(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, nF = {
  ...cb,
  br: Mn(MT).replace("{2,}", "*").getRegex(),
  text: Mn(cb.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, _g = {
  normal: Ab,
  gfm: HP,
  pedantic: $P
}, uv = {
  normal: Nb,
  gfm: cb,
  breaks: nF,
  pedantic: tF
};
class _l {
  constructor(l) {
    tr(this, "tokens");
    tr(this, "options");
    tr(this, "state");
    tr(this, "tokenizer");
    tr(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = l || df, this.options.tokenizer = this.options.tokenizer || new Fg(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const c = {
      block: _g.normal,
      inline: uv.normal
    };
    this.options.pedantic ? (c.block = _g.pedantic, c.inline = uv.pedantic) : this.options.gfm && (c.block = _g.gfm, this.options.breaks ? c.inline = uv.breaks : c.inline = uv.gfm), this.tokenizer.rules = c;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: _g,
      inline: uv
    };
  }
  /**
   * Static Lex Method
   */
  static lex(l, c) {
    return new _l(c).lex(l);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(l, c) {
    return new _l(c).inlineTokens(l);
  }
  /**
   * Preprocessing
   */
  lex(l) {
    l = l.replace(/\r\n|\r/g, `
`), this.blockTokens(l, this.tokens);
    for (let c = 0; c < this.inlineQueue.length; c++) {
      const d = this.inlineQueue[c];
      this.inlineTokens(d.src, d.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(l, c = []) {
    this.options.pedantic ? l = l.replace(/\t/g, "    ").replace(/^ +$/gm, "") : l = l.replace(/^( *)(\t+)/gm, (y, x, O) => x + "    ".repeat(O.length));
    let d, m, g, S;
    for (; l; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((y) => (d = y.call({ lexer: this }, l, c)) ? (l = l.substring(d.raw.length), c.push(d), !0) : !1))) {
        if (d = this.tokenizer.space(l)) {
          l = l.substring(d.raw.length), d.raw.length === 1 && c.length > 0 ? c[c.length - 1].raw += `
` : c.push(d);
          continue;
        }
        if (d = this.tokenizer.code(l)) {
          l = l.substring(d.raw.length), m = c[c.length - 1], m && (m.type === "paragraph" || m.type === "text") ? (m.raw += `
` + d.raw, m.text += `
` + d.text, this.inlineQueue[this.inlineQueue.length - 1].src = m.text) : c.push(d);
          continue;
        }
        if (d = this.tokenizer.fences(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.heading(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.hr(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.blockquote(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.list(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.html(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.def(l)) {
          l = l.substring(d.raw.length), m = c[c.length - 1], m && (m.type === "paragraph" || m.type === "text") ? (m.raw += `
` + d.raw, m.text += `
` + d.raw, this.inlineQueue[this.inlineQueue.length - 1].src = m.text) : this.tokens.links[d.tag] || (this.tokens.links[d.tag] = {
            href: d.href,
            title: d.title
          });
          continue;
        }
        if (d = this.tokenizer.table(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.lheading(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (g = l, this.options.extensions && this.options.extensions.startBlock) {
          let y = 1 / 0;
          const x = l.slice(1);
          let O;
          this.options.extensions.startBlock.forEach((k) => {
            O = k.call({ lexer: this }, x), typeof O == "number" && O >= 0 && (y = Math.min(y, O));
          }), y < 1 / 0 && y >= 0 && (g = l.substring(0, y + 1));
        }
        if (this.state.top && (d = this.tokenizer.paragraph(g))) {
          m = c[c.length - 1], S && m.type === "paragraph" ? (m.raw += `
` + d.raw, m.text += `
` + d.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = m.text) : c.push(d), S = g.length !== l.length, l = l.substring(d.raw.length);
          continue;
        }
        if (d = this.tokenizer.text(l)) {
          l = l.substring(d.raw.length), m = c[c.length - 1], m && m.type === "text" ? (m.raw += `
` + d.raw, m.text += `
` + d.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = m.text) : c.push(d);
          continue;
        }
        if (l) {
          const y = "Infinite loop on byte: " + l.charCodeAt(0);
          if (this.options.silent) {
            console.error(y);
            break;
          } else
            throw new Error(y);
        }
      }
    return this.state.top = !0, c;
  }
  inline(l, c = []) {
    return this.inlineQueue.push({ src: l, tokens: c }), c;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(l, c = []) {
    let d, m, g, S = l, y, x, O;
    if (this.tokens.links) {
      const k = Object.keys(this.tokens.links);
      if (k.length > 0)
        for (; (y = this.tokenizer.rules.inline.reflinkSearch.exec(S)) != null; )
          k.includes(y[0].slice(y[0].lastIndexOf("[") + 1, -1)) && (S = S.slice(0, y.index) + "[" + "a".repeat(y[0].length - 2) + "]" + S.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (y = this.tokenizer.rules.inline.blockSkip.exec(S)) != null; )
      S = S.slice(0, y.index) + "[" + "a".repeat(y[0].length - 2) + "]" + S.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (y = this.tokenizer.rules.inline.anyPunctuation.exec(S)) != null; )
      S = S.slice(0, y.index) + "++" + S.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; l; )
      if (x || (O = ""), x = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((k) => (d = k.call({ lexer: this }, l, c)) ? (l = l.substring(d.raw.length), c.push(d), !0) : !1))) {
        if (d = this.tokenizer.escape(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.tag(l)) {
          l = l.substring(d.raw.length), m = c[c.length - 1], m && d.type === "text" && m.type === "text" ? (m.raw += d.raw, m.text += d.text) : c.push(d);
          continue;
        }
        if (d = this.tokenizer.link(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.reflink(l, this.tokens.links)) {
          l = l.substring(d.raw.length), m = c[c.length - 1], m && d.type === "text" && m.type === "text" ? (m.raw += d.raw, m.text += d.text) : c.push(d);
          continue;
        }
        if (d = this.tokenizer.emStrong(l, S, O)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.codespan(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.br(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.del(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (d = this.tokenizer.autolink(l)) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (!this.state.inLink && (d = this.tokenizer.url(l))) {
          l = l.substring(d.raw.length), c.push(d);
          continue;
        }
        if (g = l, this.options.extensions && this.options.extensions.startInline) {
          let k = 1 / 0;
          const R = l.slice(1);
          let D;
          this.options.extensions.startInline.forEach((j) => {
            D = j.call({ lexer: this }, R), typeof D == "number" && D >= 0 && (k = Math.min(k, D));
          }), k < 1 / 0 && k >= 0 && (g = l.substring(0, k + 1));
        }
        if (d = this.tokenizer.inlineText(g)) {
          l = l.substring(d.raw.length), d.raw.slice(-1) !== "_" && (O = d.raw.slice(-1)), x = !0, m = c[c.length - 1], m && m.type === "text" ? (m.raw += d.raw, m.text += d.text) : c.push(d);
          continue;
        }
        if (l) {
          const k = "Infinite loop on byte: " + l.charCodeAt(0);
          if (this.options.silent) {
            console.error(k);
            break;
          } else
            throw new Error(k);
        }
      }
    return c;
  }
}
class $g {
  constructor(l) {
    tr(this, "options");
    this.options = l || df;
  }
  code(l, c, d) {
    var g;
    const m = (g = (c || "").match(/^\S*/)) == null ? void 0 : g[0];
    return l = l.replace(/\n$/, "") + `
`, m ? '<pre><code class="language-' + Di(m) + '">' + (d ? l : Di(l, !0)) + `</code></pre>
` : "<pre><code>" + (d ? l : Di(l, !0)) + `</code></pre>
`;
  }
  blockquote(l) {
    return `<blockquote>
${l}</blockquote>
`;
  }
  html(l, c) {
    return l;
  }
  heading(l, c, d) {
    return `<h${c}>${l}</h${c}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(l, c, d) {
    const m = c ? "ol" : "ul", g = c && d !== 1 ? ' start="' + d + '"' : "";
    return "<" + m + g + `>
` + l + "</" + m + `>
`;
  }
  listitem(l, c, d) {
    return `<li>${l}</li>
`;
  }
  checkbox(l) {
    return "<input " + (l ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(l) {
    return `<p>${l}</p>
`;
  }
  table(l, c) {
    return c && (c = `<tbody>${c}</tbody>`), `<table>
<thead>
` + l + `</thead>
` + c + `</table>
`;
  }
  tablerow(l) {
    return `<tr>
${l}</tr>
`;
  }
  tablecell(l, c) {
    const d = c.header ? "th" : "td";
    return (c.align ? `<${d} align="${c.align}">` : `<${d}>`) + l + `</${d}>
`;
  }
  /**
   * span level renderer
   */
  strong(l) {
    return `<strong>${l}</strong>`;
  }
  em(l) {
    return `<em>${l}</em>`;
  }
  codespan(l) {
    return `<code>${l}</code>`;
  }
  br() {
    return "<br>";
  }
  del(l) {
    return `<del>${l}</del>`;
  }
  link(l, c, d) {
    const m = S1(l);
    if (m === null)
      return d;
    l = m;
    let g = '<a href="' + l + '"';
    return c && (g += ' title="' + c + '"'), g += ">" + d + "</a>", g;
  }
  image(l, c, d) {
    const m = S1(l);
    if (m === null)
      return d;
    l = m;
    let g = `<img src="${l}" alt="${d}"`;
    return c && (g += ` title="${c}"`), g += ">", g;
  }
  text(l) {
    return l;
  }
}
class Lb {
  // no need for block level renderers
  strong(l) {
    return l;
  }
  em(l) {
    return l;
  }
  codespan(l) {
    return l;
  }
  del(l) {
    return l;
  }
  html(l) {
    return l;
  }
  text(l) {
    return l;
  }
  link(l, c, d) {
    return "" + d;
  }
  image(l, c, d) {
    return "" + d;
  }
  br() {
    return "";
  }
}
class Rl {
  constructor(l) {
    tr(this, "options");
    tr(this, "renderer");
    tr(this, "textRenderer");
    this.options = l || df, this.options.renderer = this.options.renderer || new $g(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Lb();
  }
  /**
   * Static Parse Method
   */
  static parse(l, c) {
    return new Rl(c).parse(l);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(l, c) {
    return new Rl(c).parseInline(l);
  }
  /**
   * Parse Loop
   */
  parse(l, c = !0) {
    let d = "";
    for (let m = 0; m < l.length; m++) {
      const g = l[m];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[g.type]) {
        const S = g, y = this.options.extensions.renderers[S.type].call({ parser: this }, S);
        if (y !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(S.type)) {
          d += y || "";
          continue;
        }
      }
      switch (g.type) {
        case "space":
          continue;
        case "hr": {
          d += this.renderer.hr();
          continue;
        }
        case "heading": {
          const S = g;
          d += this.renderer.heading(this.parseInline(S.tokens), S.depth, TP(this.parseInline(S.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const S = g;
          d += this.renderer.code(S.text, S.lang, !!S.escaped);
          continue;
        }
        case "table": {
          const S = g;
          let y = "", x = "";
          for (let k = 0; k < S.header.length; k++)
            x += this.renderer.tablecell(this.parseInline(S.header[k].tokens), { header: !0, align: S.align[k] });
          y += this.renderer.tablerow(x);
          let O = "";
          for (let k = 0; k < S.rows.length; k++) {
            const R = S.rows[k];
            x = "";
            for (let D = 0; D < R.length; D++)
              x += this.renderer.tablecell(this.parseInline(R[D].tokens), { header: !1, align: S.align[D] });
            O += this.renderer.tablerow(x);
          }
          d += this.renderer.table(y, O);
          continue;
        }
        case "blockquote": {
          const S = g, y = this.parse(S.tokens);
          d += this.renderer.blockquote(y);
          continue;
        }
        case "list": {
          const S = g, y = S.ordered, x = S.start, O = S.loose;
          let k = "";
          for (let R = 0; R < S.items.length; R++) {
            const D = S.items[R], j = D.checked, U = D.task;
            let H = "";
            if (D.task) {
              const oe = this.renderer.checkbox(!!j);
              O ? D.tokens.length > 0 && D.tokens[0].type === "paragraph" ? (D.tokens[0].text = oe + " " + D.tokens[0].text, D.tokens[0].tokens && D.tokens[0].tokens.length > 0 && D.tokens[0].tokens[0].type === "text" && (D.tokens[0].tokens[0].text = oe + " " + D.tokens[0].tokens[0].text)) : D.tokens.unshift({
                type: "text",
                text: oe + " "
              }) : H += oe + " ";
            }
            H += this.parse(D.tokens, O), k += this.renderer.listitem(H, U, !!j);
          }
          d += this.renderer.list(k, y, x);
          continue;
        }
        case "html": {
          const S = g;
          d += this.renderer.html(S.text, S.block);
          continue;
        }
        case "paragraph": {
          const S = g;
          d += this.renderer.paragraph(this.parseInline(S.tokens));
          continue;
        }
        case "text": {
          let S = g, y = S.tokens ? this.parseInline(S.tokens) : S.text;
          for (; m + 1 < l.length && l[m + 1].type === "text"; )
            S = l[++m], y += `
` + (S.tokens ? this.parseInline(S.tokens) : S.text);
          d += c ? this.renderer.paragraph(y) : y;
          continue;
        }
        default: {
          const S = 'Token with "' + g.type + '" type was not found.';
          if (this.options.silent)
            return console.error(S), "";
          throw new Error(S);
        }
      }
    }
    return d;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(l, c) {
    c = c || this.renderer;
    let d = "";
    for (let m = 0; m < l.length; m++) {
      const g = l[m];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[g.type]) {
        const S = this.options.extensions.renderers[g.type].call({ parser: this }, g);
        if (S !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(g.type)) {
          d += S || "";
          continue;
        }
      }
      switch (g.type) {
        case "escape": {
          const S = g;
          d += c.text(S.text);
          break;
        }
        case "html": {
          const S = g;
          d += c.html(S.text);
          break;
        }
        case "link": {
          const S = g;
          d += c.link(S.href, S.title, this.parseInline(S.tokens, c));
          break;
        }
        case "image": {
          const S = g;
          d += c.image(S.href, S.title, S.text);
          break;
        }
        case "strong": {
          const S = g;
          d += c.strong(this.parseInline(S.tokens, c));
          break;
        }
        case "em": {
          const S = g;
          d += c.em(this.parseInline(S.tokens, c));
          break;
        }
        case "codespan": {
          const S = g;
          d += c.codespan(S.text);
          break;
        }
        case "br": {
          d += c.br();
          break;
        }
        case "del": {
          const S = g;
          d += c.del(this.parseInline(S.tokens, c));
          break;
        }
        case "text": {
          const S = g;
          d += c.text(S.text);
          break;
        }
        default: {
          const S = 'Token with "' + g.type + '" type was not found.';
          if (this.options.silent)
            return console.error(S), "";
          throw new Error(S);
        }
      }
    }
    return d;
  }
}
class dv {
  constructor(l) {
    tr(this, "options");
    this.options = l || df;
  }
  /**
   * Process markdown before marked
   */
  preprocess(l) {
    return l;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(l) {
    return l;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(l) {
    return l;
  }
}
tr(dv, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var cf, fb, UT;
class rF {
  constructor(...l) {
    vR(this, cf);
    tr(this, "defaults", Tb());
    tr(this, "options", this.setOptions);
    tr(this, "parse", mg(this, cf, fb).call(this, _l.lex, Rl.parse));
    tr(this, "parseInline", mg(this, cf, fb).call(this, _l.lexInline, Rl.parseInline));
    tr(this, "Parser", Rl);
    tr(this, "Renderer", $g);
    tr(this, "TextRenderer", Lb);
    tr(this, "Lexer", _l);
    tr(this, "Tokenizer", Fg);
    tr(this, "Hooks", dv);
    this.use(...l);
  }
  /**
   * Run callback for every token
   */
  walkTokens(l, c) {
    var m, g;
    let d = [];
    for (const S of l)
      switch (d = d.concat(c.call(this, S)), S.type) {
        case "table": {
          const y = S;
          for (const x of y.header)
            d = d.concat(this.walkTokens(x.tokens, c));
          for (const x of y.rows)
            for (const O of x)
              d = d.concat(this.walkTokens(O.tokens, c));
          break;
        }
        case "list": {
          const y = S;
          d = d.concat(this.walkTokens(y.items, c));
          break;
        }
        default: {
          const y = S;
          (g = (m = this.defaults.extensions) == null ? void 0 : m.childTokens) != null && g[y.type] ? this.defaults.extensions.childTokens[y.type].forEach((x) => {
            const O = y[x].flat(1 / 0);
            d = d.concat(this.walkTokens(O, c));
          }) : y.tokens && (d = d.concat(this.walkTokens(y.tokens, c)));
        }
      }
    return d;
  }
  use(...l) {
    const c = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return l.forEach((d) => {
      const m = { ...d };
      if (m.async = this.defaults.async || m.async || !1, d.extensions && (d.extensions.forEach((g) => {
        if (!g.name)
          throw new Error("extension name required");
        if ("renderer" in g) {
          const S = c.renderers[g.name];
          S ? c.renderers[g.name] = function(...y) {
            let x = g.renderer.apply(this, y);
            return x === !1 && (x = S.apply(this, y)), x;
          } : c.renderers[g.name] = g.renderer;
        }
        if ("tokenizer" in g) {
          if (!g.level || g.level !== "block" && g.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const S = c[g.level];
          S ? S.unshift(g.tokenizer) : c[g.level] = [g.tokenizer], g.start && (g.level === "block" ? c.startBlock ? c.startBlock.push(g.start) : c.startBlock = [g.start] : g.level === "inline" && (c.startInline ? c.startInline.push(g.start) : c.startInline = [g.start]));
        }
        "childTokens" in g && g.childTokens && (c.childTokens[g.name] = g.childTokens);
      }), m.extensions = c), d.renderer) {
        const g = this.defaults.renderer || new $g(this.defaults);
        for (const S in d.renderer) {
          if (!(S in g))
            throw new Error(`renderer '${S}' does not exist`);
          if (S === "options")
            continue;
          const y = S, x = d.renderer[y], O = g[y];
          g[y] = (...k) => {
            let R = x.apply(g, k);
            return R === !1 && (R = O.apply(g, k)), R || "";
          };
        }
        m.renderer = g;
      }
      if (d.tokenizer) {
        const g = this.defaults.tokenizer || new Fg(this.defaults);
        for (const S in d.tokenizer) {
          if (!(S in g))
            throw new Error(`tokenizer '${S}' does not exist`);
          if (["options", "rules", "lexer"].includes(S))
            continue;
          const y = S, x = d.tokenizer[y], O = g[y];
          g[y] = (...k) => {
            let R = x.apply(g, k);
            return R === !1 && (R = O.apply(g, k)), R;
          };
        }
        m.tokenizer = g;
      }
      if (d.hooks) {
        const g = this.defaults.hooks || new dv();
        for (const S in d.hooks) {
          if (!(S in g))
            throw new Error(`hook '${S}' does not exist`);
          if (S === "options")
            continue;
          const y = S, x = d.hooks[y], O = g[y];
          dv.passThroughHooks.has(S) ? g[y] = (k) => {
            if (this.defaults.async)
              return Promise.resolve(x.call(g, k)).then((D) => O.call(g, D));
            const R = x.call(g, k);
            return O.call(g, R);
          } : g[y] = (...k) => {
            let R = x.apply(g, k);
            return R === !1 && (R = O.apply(g, k)), R;
          };
        }
        m.hooks = g;
      }
      if (d.walkTokens) {
        const g = this.defaults.walkTokens, S = d.walkTokens;
        m.walkTokens = function(y) {
          let x = [];
          return x.push(S.call(this, y)), g && (x = x.concat(g.call(this, y))), x;
        };
      }
      this.defaults = { ...this.defaults, ...m };
    }), this;
  }
  setOptions(l) {
    return this.defaults = { ...this.defaults, ...l }, this;
  }
  lexer(l, c) {
    return _l.lex(l, c ?? this.defaults);
  }
  parser(l, c) {
    return Rl.parse(l, c ?? this.defaults);
  }
}
cf = new WeakSet(), fb = function(l, c) {
  return (d, m) => {
    const g = { ...m }, S = { ...this.defaults, ...g };
    this.defaults.async === !0 && g.async === !1 && (S.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), S.async = !0);
    const y = mg(this, cf, UT).call(this, !!S.silent, !!S.async);
    if (typeof d > "u" || d === null)
      return y(new Error("marked(): input parameter is undefined or null"));
    if (typeof d != "string")
      return y(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(d) + ", string expected"));
    if (S.hooks && (S.hooks.options = S), S.async)
      return Promise.resolve(S.hooks ? S.hooks.preprocess(d) : d).then((x) => l(x, S)).then((x) => S.hooks ? S.hooks.processAllTokens(x) : x).then((x) => S.walkTokens ? Promise.all(this.walkTokens(x, S.walkTokens)).then(() => x) : x).then((x) => c(x, S)).then((x) => S.hooks ? S.hooks.postprocess(x) : x).catch(y);
    try {
      S.hooks && (d = S.hooks.preprocess(d));
      let x = l(d, S);
      S.hooks && (x = S.hooks.processAllTokens(x)), S.walkTokens && this.walkTokens(x, S.walkTokens);
      let O = c(x, S);
      return S.hooks && (O = S.hooks.postprocess(O)), O;
    } catch (x) {
      return y(x);
    }
  };
}, UT = function(l, c) {
  return (d) => {
    if (d.message += `
Please report this to https://github.com/markedjs/marked.`, l) {
      const m = "<p>An error occurred:</p><pre>" + Di(d.message + "", !0) + "</pre>";
      return c ? Promise.resolve(m) : m;
    }
    if (c)
      return Promise.reject(d);
    throw d;
  };
};
const sf = new rF();
function On(u, l) {
  return sf.parse(u, l);
}
On.options = On.setOptions = function(u) {
  return sf.setOptions(u), On.defaults = sf.defaults, TT(On.defaults), On;
};
On.getDefaults = Tb;
On.defaults = df;
On.use = function(...u) {
  return sf.use(...u), On.defaults = sf.defaults, TT(On.defaults), On;
};
On.walkTokens = function(u, l) {
  return sf.walkTokens(u, l);
};
On.parseInline = sf.parseInline;
On.Parser = Rl;
On.parser = Rl.parse;
On.Renderer = $g;
On.TextRenderer = Lb;
On.Lexer = _l;
On.lexer = _l.lex;
On.Tokenizer = Fg;
On.Hooks = dv;
On.parse = On;
On.options;
On.setOptions;
On.use;
On.walkTokens;
On.parseInline;
Rl.parse;
_l.lex;
function aF() {
  return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsx("span", { className: "spinner is-active" }),
    " Loading OpenAI Assistants"
  ] });
}
function iF(u, l) {
  nr.post(twChatSettings.ajax_url, {
    action: "get_assistants",
    _ajax_nonce: twChatSettings.ajax_nonce
  }, {
    headers: {
      "Content-Type": "multipart/form-data"
      // Set content type for FormData
    }
  }).then(u).catch(l);
}
const db = (u) => {
  const l = document.createElement("textarea");
  l.style.position = "fixed", l.style.left = "-9999px", l.style.top = "-9999px", l.value = u, document.body.appendChild(l), l.select(), document.execCommand("copy"), gi.success("Copied to clipboard");
};
function oF() {
  const [u, l] = gb(tT), [c, d] = Cl.useState(!1), [m, g] = me.useState(!1), [S, y] = me.useState({}), x = function(H) {
    console.log(H.data), H.data.success ? l(H.data.data) : (gi.error("There was an error retrieving assistants."), console.log(`Error: ${H.data.data.message}`)), g(!1);
  }, O = function(H) {
    gi.error("There was an error retrieving assistants."), console.log(`Error: ${H}`);
  }, k = function() {
    l([]), g(!0), iF(x, O);
  };
  function R(H) {
    y(H), d(!0);
  }
  function D() {
    y({}), d(!1);
  }
  const j = () => S.instructions ? On.parse(S.instructions) : "", U = () => /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsxs("table", { className: "wp-list-table widefat fixed striped posts", children: [
      /* @__PURE__ */ B.jsxs("thead", { children: [
        /* @__PURE__ */ B.jsx("th", { children: "Assistant Name" }),
        /* @__PURE__ */ B.jsx("th", { children: "Assistant ID" }),
        /* @__PURE__ */ B.jsx("th", { children: "Model" })
      ] }),
      /* @__PURE__ */ B.jsx("tbody", { children: u.map((H) => /* @__PURE__ */ B.jsxs("tr", { children: [
        /* @__PURE__ */ B.jsxs("td", { children: [
          /* @__PURE__ */ B.jsx(
            "a",
            {
              href: "#",
              onClick: () => R(H),
              "data-tooltip-id": `view-tooltip-${H.id}`,
              "data-tooltip-content": "Click to view instructions",
              "data-tooltip-place": "top",
              children: H.name
            }
          ),
          /* @__PURE__ */ B.jsx(Jc, { id: `view-tooltip-${H.id}` })
        ] }),
        /* @__PURE__ */ B.jsxs("td", { children: [
          /* @__PURE__ */ B.jsx(
            "a",
            {
              href: "#",
              onClick: () => db(H.id),
              "data-tooltip-id": `copy-tooltip-${H.id}`,
              "data-tooltip-content": "Click to copy",
              "data-tooltip-place": "top",
              children: H.id
            }
          ),
          /* @__PURE__ */ B.jsx(Jc, { id: `copy-tooltip-${H.id}` })
        ] }),
        /* @__PURE__ */ B.jsx("td", { children: H.model })
      ] }, H.id)) })
    ] }),
    u.length > 0 ? /* @__PURE__ */ B.jsx(B.Fragment, {}) : /* @__PURE__ */ B.jsx("p", { children: "There are no Assistants in your OpenAI account." })
  ] });
  return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsxs("p", { children: [
      "Click the ",
      /* @__PURE__ */ B.jsx("strong", { children: "Load Assistants" }),
      " button to show the assistants in your OpenAI account."
    ] }),
    m ? /* @__PURE__ */ B.jsx("p", { children: /* @__PURE__ */ B.jsx(aF, {}) }) : /* @__PURE__ */ B.jsx("p", { children: /* @__PURE__ */ B.jsx("a", { className: "button button-primary", href: "#", onClick: k, children: "Load Assistants" }) }),
    u.length > 0 && /* @__PURE__ */ B.jsx(U, {}),
    /* @__PURE__ */ B.jsxs(
      Qg,
      {
        isOpen: c,
        onRequestClose: D,
        contentLabel: "Example Modal",
        className: "tw-chat-admin-modal",
        overlayClassName: "tw-chat-admin-overlay",
        children: [
          /* @__PURE__ */ B.jsxs("h2", { className: "tw-chat-admin-modal-header", children: [
            S.name,
            /* @__PURE__ */ B.jsx("button", { onClick: D, children: /* @__PURE__ */ B.jsx("span", { className: "dashicons dashicons-no-alt" }) })
          ] }),
          /* @__PURE__ */ B.jsxs("div", { className: "tw-chat-admin-modal-content", children: [
            /* @__PURE__ */ B.jsxs("p", { children: [
              /* @__PURE__ */ B.jsx("strong", { children: "Assistant ID:" }),
              " ",
              S.id
            ] }),
            /* @__PURE__ */ B.jsxs("p", { children: [
              /* @__PURE__ */ B.jsx("strong", { children: "Model:" }),
              " ",
              S.model
            ] }),
            /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: { __html: j() } })
          ] })
        ]
      }
    )
  ] });
}
const lF = ({ onChange: u, defaultValues: l = "", maxItems: c = 99 }) => {
  const [d, m] = me.useState([""]), [g, S] = me.useState(!1);
  me.useEffect(() => {
    if (l) {
      const D = l.split(",").map((j) => j.trim()).filter((j) => j !== "").slice(0, c);
      m(D.length > 0 ? D : [""]), u(D), S(D.length >= c);
    }
  }, [l, u, c]);
  const y = (R, D) => {
    const j = [...d];
    j[R] = D, m(j), u(j.filter((U) => U.trim() !== ""));
  }, x = (R) => {
    R.preventDefault(), d.length < c && (m([...d, ""]), S(d.length + 1 >= c));
  }, O = (R, D) => {
    R.preventDefault();
    const j = d.filter((U, H) => H !== D);
    m(j.length > 0 ? j : [""]), u(j.filter((U) => U.trim() !== "")), S(j.length >= c);
  }, k = (R, D) => {
    R.key === "Enter" && (R.preventDefault(), D === d.length - 1 && !g && x(R));
  };
  return /* @__PURE__ */ B.jsxs("div", { className: "tw-chat-list-input", children: [
    d.map((R, D) => /* @__PURE__ */ B.jsxs("div", { children: [
      /* @__PURE__ */ B.jsx(
        "input",
        {
          className: "regular-text",
          text: "text",
          value: R,
          onChange: (j) => y(D, j.target.value),
          onKeyDown: (j) => k(j, D),
          placeholder: "Enter a value"
        }
      ),
      /* @__PURE__ */ B.jsx(
        "button",
        {
          onClick: (j) => O(j, D),
          "aria-label": "Remove Suggested Answer",
          children: /* @__PURE__ */ B.jsx("span", { className: "dashicons dashicons-no" })
        }
      )
    ] }, D)),
    !g && /* @__PURE__ */ B.jsxs(
      "button",
      {
        onClick: x,
        "aria-label": "Add Suggested Answer",
        children: [
          /* @__PURE__ */ B.jsx("span", { className: "dashicons dashicons-plus" }),
          " Add Item"
        ]
      }
    ),
    g && /* @__PURE__ */ B.jsxs("p", { children: [
      "Maximum of ",
      c,
      " items reached."
    ] })
  ] });
}, PT = {
  headers: {
    "Content-Type": "multipart/form-data"
    // Set content type for FormData
  }
};
function uF(u, l, c) {
  nr.post(twChatSettings.ajax_url, {
    action: "save_chat_widget",
    _ajax_nonce: twChatSettings.ajax_nonce,
    ...u
  }, PT).then(l).catch(c);
}
function sF(u, l, c) {
  nr.post(twChatSettings.ajax_url, {
    action: "remove_chat_widget",
    _ajax_nonce: twChatSettings.ajax_nonce,
    id: u
  }, PT).then(l).catch(c);
}
function cF() {
  const [u, l] = gb(nT), [c, d] = me.useState(null), [m, g] = me.useState(!1);
  function S(R) {
    R && (console.log(R), d(R)), g(!0);
  }
  function y() {
    console.log("reset current widget"), d(null), g(!1);
  }
  function x() {
  }
  const O = () => {
    const R = function(D) {
      window.confirm("Are you sure you want to remove this widget?") && sF(
        D,
        function(j) {
          j.data.success ? (gi.success("Chat widget removed"), l(j.data.data), console.log(j.data)) : (console.log(j), gi.error("Error removing chat widget."));
        },
        function(j) {
          console.log(j), gi.error("Error removing chat widget.");
        }
      );
    };
    return /* @__PURE__ */ B.jsxs("table", { className: "wp-list-table widefat fixed striped posts", children: [
      /* @__PURE__ */ B.jsxs("thead", { children: [
        /* @__PURE__ */ B.jsx("th", { children: "Name" }),
        /* @__PURE__ */ B.jsx("th", { children: "Widget ID" }),
        /* @__PURE__ */ B.jsx("th", { children: "Embed Code" }),
        /* @__PURE__ */ B.jsx("th", { children: "OpenAI Assistant ID" }),
        /* @__PURE__ */ B.jsx("th", { children: "Remove" })
      ] }),
      /* @__PURE__ */ B.jsx("tbody", { children: u.map((D) => /* @__PURE__ */ B.jsxs("tr", { children: [
        /* @__PURE__ */ B.jsxs("td", { children: [
          /* @__PURE__ */ B.jsx(
            "a",
            {
              href: "#",
              onClick: () => S(D),
              "data-tooltip-id": `edit-tooltip-${D.id}`,
              "data-tooltip-content": "Edit Chat Widget",
              "data-tooltip-place": "top",
              children: D.name
            }
          ),
          /* @__PURE__ */ B.jsx(Jc, { id: `edit-tooltip-${D.id}` })
        ] }),
        /* @__PURE__ */ B.jsx("td", { children: D.id }),
        /* @__PURE__ */ B.jsxs("td", { children: [
          /* @__PURE__ */ B.jsx(
            "a",
            {
              href: "#",
              onClick: () => db(`[tw_chat_widget id=${D.id}]`),
              "data-tooltip-id": `copy-widget-tooltip-${D.id}`,
              "data-tooltip-content": "Click to copy",
              "data-tooltip-place": "top",
              children: `[tw_chat_widget id=${D.id}]`
            }
          ),
          /* @__PURE__ */ B.jsx(Jc, { id: `copy-widget-tooltip-${D.id}` })
        ] }),
        /* @__PURE__ */ B.jsxs("td", { children: [
          /* @__PURE__ */ B.jsx(
            "a",
            {
              href: "#",
              onClick: () => db(D.meta.tw_chat_assistant_id),
              "data-tooltip-id": `copy-assistant-tooltip-${D.id}`,
              "data-tooltip-content": "Click to copy",
              "data-tooltip-place": "top",
              children: D.meta.tw_chat_assistant_id
            }
          ),
          /* @__PURE__ */ B.jsx(Jc, { id: `copy-assistant-tooltip-${D.id}` })
        ] }),
        /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsxs(
          "a",
          {
            href: "#",
            onClick: () => R(D.id),
            "data-tooltip-id": `remove-tooltip-${D.id}`,
            "data-tooltip-content": "Remove Chat Widget",
            "data-tooltip-place": "top",
            children: [
              /* @__PURE__ */ B.jsx("span", { className: "dashicons dashicons-trash" }),
              /* @__PURE__ */ B.jsx(Jc, { id: `remove-tooltip-${D.id}` })
            ]
          }
        ) })
      ] }, D.id)) })
    ] });
  }, k = () => {
    const [R, D] = me.useState(!1), [j, U] = me.useState({
      tw_chat_widget_name: "",
      tw_chat_greeting: "",
      tw_chat_suggested_answers: "",
      tw_chat_assistant_id: "",
      tw_chat_webhook_address: "",
      tw_chat_webhook_header: "",
      tw_chat_email_recipients: ""
    });
    me.useEffect(() => {
      c && U({
        id: c.id,
        tw_chat_widget_name: c.name,
        tw_chat_greeting: c.meta.tw_chat_greeting[0],
        tw_chat_assistant_id: c.meta.tw_chat_assistant_id[0],
        tw_chat_suggested_answers: c.meta.tw_chat_suggested_answers ? c.meta.tw_chat_suggested_answers[0] : "",
        tw_chat_email_recipients: c.meta.tw_chat_email_recipients ? c.meta.tw_chat_email_recipients[0] : "",
        tw_chat_webhook_address: c.meta.tw_chat_webhook_address ? c.meta.tw_chat_webhook_address[0] : "",
        tw_chat_webhook_header: c.meta.tw_chat_webhook_header ? c.meta.tw_chat_webhook_header[0] : ""
      });
    }, []);
    const H = function(xe) {
      const { name: fe, value: Re } = xe.target;
      let X = j;
      X[fe] = Re, U(X);
    }, oe = (xe) => {
      let fe = j;
      fe.tw_chat_suggested_answers = xe.join(","), U(fe);
    }, ve = function(xe) {
      xe.preventDefault(), D(!0), console.log(j), uF(
        j,
        function(fe) {
          fe.data.success ? (gi.success("Chat widget saved"), l(fe.data.data), console.log(fe.data), g(!1)) : (console.log(fe), gi.error("Error saving chat widget.")), D(!1);
        },
        function(fe) {
          console.log(fe), gi.error("Error saving chat widget."), D(!1);
        }
      );
    };
    return /* @__PURE__ */ B.jsxs("form", { id: "tw-chat-new-widget-form", onSubmit: ve, children: [
      /* @__PURE__ */ B.jsx("table", { className: "form-table", children: /* @__PURE__ */ B.jsxs("tbody", { children: [
        /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Name" }),
          /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_widget_name", onChange: H, defaultValue: j.tw_chat_widget_name, required: "required" }) })
        ] }),
        /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Assistant ID" }),
          /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_assistant_id", onChange: H, defaultValue: j.tw_chat_assistant_id, required: "required" }) })
        ] }),
        /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Greeting" }),
          /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_greeting", onChange: H, defaultValue: j.tw_chat_greeting, required: "required" }) })
        ] }),
        /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Suggested Answers" }),
          /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx(lF, { onChange: oe, defaultValues: j.tw_chat_suggested_answers, maxItems: 4 }) })
        ] })
      ] }) }),
      /* @__PURE__ */ B.jsx("hr", {}),
      /* @__PURE__ */ B.jsx("h3", { children: "Functionality Settings" }),
      /* @__PURE__ */ B.jsx("table", { className: "form-table", children: /* @__PURE__ */ B.jsxs("tbody", { children: [
        /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Email Recipients" }),
          /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_email_recipients", onChange: H, defaultValue: j.tw_chat_email_recipients }) })
        ] }),
        /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Webhook Address" }),
          /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_webhook_address", onChange: H, defaultValue: j.tw_chat_webhook_address }) })
        ] }),
        /* @__PURE__ */ B.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ B.jsx("th", { scope: "row", children: "Webhook Header (JSON)" }),
          /* @__PURE__ */ B.jsx("td", { children: /* @__PURE__ */ B.jsx("textarea", { rows: "4", className: "regular-text", type: "text", name: "tw_chat_webhook_header", onChange: H, defaultValue: j.tw_chat_webhook_header }) })
        ] })
      ] }) }),
      R ? /* @__PURE__ */ B.jsxs("p", { children: [
        /* @__PURE__ */ B.jsx("span", { className: "spinner is-active" }),
        " Saving"
      ] }) : /* @__PURE__ */ B.jsx("input", { className: "button button-hero button-primary", type: "submit", value: "Submit" })
    ] });
  };
  return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsxs("p", { children: [
      "Click the ",
      /* @__PURE__ */ B.jsx("strong", { children: "widget name" }),
      " to edit a chat widget."
    ] }),
    /* @__PURE__ */ B.jsx("p", { children: /* @__PURE__ */ B.jsx("button", { className: "button button-primary", onClick: () => S(), children: "Create New Chat Widget" }) }),
    u.length > 0 && /* @__PURE__ */ B.jsx(O, {}),
    /* @__PURE__ */ B.jsxs(
      Qg,
      {
        isOpen: m,
        onAfterOpen: x,
        onRequestClose: y,
        contentLabel: "Edit Chat Widget",
        className: "tw-chat-admin-modal",
        overlayClassName: "tw-chat-admin-overlay",
        children: [
          /* @__PURE__ */ B.jsxs("h2", { className: "tw-chat-admin-modal-header", children: [
            "Save Chat Widget",
            /* @__PURE__ */ B.jsx("button", { onClick: y, children: /* @__PURE__ */ B.jsx("span", { className: "dashicons dashicons-no-alt" }) })
          ] }),
          /* @__PURE__ */ B.jsx("div", { className: "tw-chat-admin-modal-content", children: /* @__PURE__ */ B.jsx(k, {}) })
        ]
      }
    )
  ] });
}
function fF() {
  const u = [
    { title: "Plugin Settings", content: bP },
    { title: "Chat Widgets", content: cF },
    { title: "OpenAI Assistants", content: oF }
    // Add more tabs as needed
  ];
  return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsx($L, { tabs: u }),
    /* @__PURE__ */ B.jsx(
      Wj,
      {
        position: "bottom-center",
        reverseOrder: !1,
        toastOptions: {
          className: "tw-admin-toaster"
        }
      }
    )
  ] });
}
window.addEventListener("load", function() {
  Qg.setAppElement("#tw-chat-admin"), cv.createRoot(document.getElementById("tw-chat-admin")).render(
    /* @__PURE__ */ B.jsx(Cl.StrictMode, { children: /* @__PURE__ */ B.jsx(ez, { atoms: [tT], children: /* @__PURE__ */ B.jsx(fF, {}) }) })
  );
});
