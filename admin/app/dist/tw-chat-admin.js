function Tg(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
function KN(l) {
  if (l.__esModule) return l;
  var s = l.default;
  if (typeof s == "function") {
    var d = function v() {
      return this instanceof v ? Reflect.construct(s, arguments, this.constructor) : s.apply(this, arguments);
    };
    d.prototype = s.prototype;
  } else d = {};
  return Object.defineProperty(d, "__esModule", { value: !0 }), Object.keys(l).forEach(function(v) {
    var m = Object.getOwnPropertyDescriptor(l, v);
    Object.defineProperty(d, v, m.get ? m : {
      enumerable: !0,
      get: function() {
        return l[v];
      }
    });
  }), d;
}
var T_ = { exports: {} }, Jv = {}, O_ = { exports: {} }, Jt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gx;
function XN() {
  if (Gx) return Jt;
  Gx = 1;
  var l = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), _ = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), L = Symbol.iterator;
  function U(N) {
    return N === null || typeof N != "object" ? null : (N = L && N[L] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, W = {};
  function Y(N, F, ee) {
    this.props = N, this.context = F, this.refs = W, this.updater = ee || H;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(N, F) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, F, "setState");
  }, Y.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function Se() {
  }
  Se.prototype = Y.prototype;
  function ue(N, F, ee) {
    this.props = N, this.context = F, this.refs = W, this.updater = ee || H;
  }
  var Q = ue.prototype = new Se();
  Q.constructor = ue, P(Q, Y.prototype), Q.isPureReactComponent = !0;
  var he = Array.isArray, G = Object.prototype.hasOwnProperty, we = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(N, F, ee) {
    var Te, xe = {}, Pe = null, Ie = null;
    if (F != null) for (Te in F.ref !== void 0 && (Ie = F.ref), F.key !== void 0 && (Pe = "" + F.key), F) G.call(F, Te) && !He.hasOwnProperty(Te) && (xe[Te] = F[Te]);
    var Le = arguments.length - 2;
    if (Le === 1) xe.children = ee;
    else if (1 < Le) {
      for (var Fe = Array(Le), Ke = 0; Ke < Le; Ke++) Fe[Ke] = arguments[Ke + 2];
      xe.children = Fe;
    }
    if (N && N.defaultProps) for (Te in Le = N.defaultProps, Le) xe[Te] === void 0 && (xe[Te] = Le[Te]);
    return { $$typeof: l, type: N, key: Pe, ref: Ie, props: xe, _owner: we.current };
  }
  function be(N, F) {
    return { $$typeof: l, type: N.type, key: F, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function Oe(N) {
    return typeof N == "object" && N !== null && N.$$typeof === l;
  }
  function De(N) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(ee) {
      return F[ee];
    });
  }
  var _e = /\/+/g;
  function Ne(N, F) {
    return typeof N == "object" && N !== null && N.key != null ? De("" + N.key) : F.toString(36);
  }
  function te(N, F, ee, Te, xe) {
    var Pe = typeof N;
    (Pe === "undefined" || Pe === "boolean") && (N = null);
    var Ie = !1;
    if (N === null) Ie = !0;
    else switch (Pe) {
      case "string":
      case "number":
        Ie = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case l:
          case s:
            Ie = !0;
        }
    }
    if (Ie) return Ie = N, xe = xe(Ie), N = Te === "" ? "." + Ne(Ie, 0) : Te, he(xe) ? (ee = "", N != null && (ee = N.replace(_e, "$&/") + "/"), te(xe, F, ee, "", function(Ke) {
      return Ke;
    })) : xe != null && (Oe(xe) && (xe = be(xe, ee + (!xe.key || Ie && Ie.key === xe.key ? "" : ("" + xe.key).replace(_e, "$&/") + "/") + N)), F.push(xe)), 1;
    if (Ie = 0, Te = Te === "" ? "." : Te + ":", he(N)) for (var Le = 0; Le < N.length; Le++) {
      Pe = N[Le];
      var Fe = Te + Ne(Pe, Le);
      Ie += te(Pe, F, ee, Fe, xe);
    }
    else if (Fe = U(N), typeof Fe == "function") for (N = Fe.call(N), Le = 0; !(Pe = N.next()).done; ) Pe = Pe.value, Fe = Te + Ne(Pe, Le++), Ie += te(Pe, F, ee, Fe, xe);
    else if (Pe === "object") throw F = String(N), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return Ie;
  }
  function le(N, F, ee) {
    if (N == null) return N;
    var Te = [], xe = 0;
    return te(N, Te, "", "", function(Pe) {
      return F.call(ee, Pe, xe++);
    }), Te;
  }
  function me(N) {
    if (N._status === -1) {
      var F = N._result;
      F = F(), F.then(function(ee) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = ee);
      }, function(ee) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = ee);
      }), N._status === -1 && (N._status = 0, N._result = F);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var de = { current: null }, A = { transition: null }, ie = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: A, ReactCurrentOwner: we };
  return Jt.Children = { map: le, forEach: function(N, F, ee) {
    le(N, function() {
      F.apply(this, arguments);
    }, ee);
  }, count: function(N) {
    var F = 0;
    return le(N, function() {
      F++;
    }), F;
  }, toArray: function(N) {
    return le(N, function(F) {
      return F;
    }) || [];
  }, only: function(N) {
    if (!Oe(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, Jt.Component = Y, Jt.Fragment = d, Jt.Profiler = m, Jt.PureComponent = ue, Jt.StrictMode = v, Jt.Suspense = R, Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie, Jt.cloneElement = function(N, F, ee) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var Te = P({}, N.props), xe = N.key, Pe = N.ref, Ie = N._owner;
    if (F != null) {
      if (F.ref !== void 0 && (Pe = F.ref, Ie = we.current), F.key !== void 0 && (xe = "" + F.key), N.type && N.type.defaultProps) var Le = N.type.defaultProps;
      for (Fe in F) G.call(F, Fe) && !He.hasOwnProperty(Fe) && (Te[Fe] = F[Fe] === void 0 && Le !== void 0 ? Le[Fe] : F[Fe]);
    }
    var Fe = arguments.length - 2;
    if (Fe === 1) Te.children = ee;
    else if (1 < Fe) {
      Le = Array(Fe);
      for (var Ke = 0; Ke < Fe; Ke++) Le[Ke] = arguments[Ke + 2];
      Te.children = Le;
    }
    return { $$typeof: l, type: N.type, key: xe, ref: Pe, props: Te, _owner: Ie };
  }, Jt.createContext = function(N) {
    return N = { $$typeof: _, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: w, _context: N }, N.Consumer = N;
  }, Jt.createElement = q, Jt.createFactory = function(N) {
    var F = q.bind(null, N);
    return F.type = N, F;
  }, Jt.createRef = function() {
    return { current: null };
  }, Jt.forwardRef = function(N) {
    return { $$typeof: g, render: N };
  }, Jt.isValidElement = Oe, Jt.lazy = function(N) {
    return { $$typeof: D, _payload: { _status: -1, _result: N }, _init: me };
  }, Jt.memo = function(N, F) {
    return { $$typeof: O, type: N, compare: F === void 0 ? null : F };
  }, Jt.startTransition = function(N) {
    var F = A.transition;
    A.transition = {};
    try {
      N();
    } finally {
      A.transition = F;
    }
  }, Jt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Jt.useCallback = function(N, F) {
    return de.current.useCallback(N, F);
  }, Jt.useContext = function(N) {
    return de.current.useContext(N);
  }, Jt.useDebugValue = function() {
  }, Jt.useDeferredValue = function(N) {
    return de.current.useDeferredValue(N);
  }, Jt.useEffect = function(N, F) {
    return de.current.useEffect(N, F);
  }, Jt.useId = function() {
    return de.current.useId();
  }, Jt.useImperativeHandle = function(N, F, ee) {
    return de.current.useImperativeHandle(N, F, ee);
  }, Jt.useInsertionEffect = function(N, F) {
    return de.current.useInsertionEffect(N, F);
  }, Jt.useLayoutEffect = function(N, F) {
    return de.current.useLayoutEffect(N, F);
  }, Jt.useMemo = function(N, F) {
    return de.current.useMemo(N, F);
  }, Jt.useReducer = function(N, F, ee) {
    return de.current.useReducer(N, F, ee);
  }, Jt.useRef = function(N) {
    return de.current.useRef(N);
  }, Jt.useState = function(N) {
    return de.current.useState(N);
  }, Jt.useSyncExternalStore = function(N, F, ee) {
    return de.current.useSyncExternalStore(N, F, ee);
  }, Jt.useTransition = function() {
    return de.current.useTransition();
  }, Jt.version = "18.2.0", Jt;
}
var rh = { exports: {} };
rh.exports;
var Qx;
function JN() {
  return Qx || (Qx = 1, function(l, s) {
    var d = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    d.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = "18.2.0", m = Symbol.for("react.element"), w = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), D = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), Se = Symbol.iterator, ue = "@@iterator";
      function Q(b) {
        if (b === null || typeof b != "object")
          return null;
        var z = Se && b[Se] || b[ue];
        return typeof z == "function" ? z : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, G = {
        transition: null
      }, we = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, He = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, q = {}, be = null;
      function Oe(b) {
        be = b;
      }
      q.setExtraStackFrame = function(b) {
        be = b;
      }, q.getCurrentStack = null, q.getStackAddendum = function() {
        var b = "";
        be && (b += be);
        var z = q.getCurrentStack;
        return z && (b += z() || ""), b;
      };
      var De = !1, _e = !1, Ne = !1, te = !1, le = !1, me = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: G,
        ReactCurrentOwner: He
      };
      me.ReactDebugCurrentFrame = q, me.ReactCurrentActQueue = we;
      function de(b) {
        {
          for (var z = arguments.length, ne = new Array(z > 1 ? z - 1 : 0), se = 1; se < z; se++)
            ne[se - 1] = arguments[se];
          ie("warn", b, ne);
        }
      }
      function A(b) {
        {
          for (var z = arguments.length, ne = new Array(z > 1 ? z - 1 : 0), se = 1; se < z; se++)
            ne[se - 1] = arguments[se];
          ie("error", b, ne);
        }
      }
      function ie(b, z, ne) {
        {
          var se = me.ReactDebugCurrentFrame, Ue = se.getStackAddendum();
          Ue !== "" && (z += "%s", ne = ne.concat([Ue]));
          var ot = ne.map(function(Ze) {
            return String(Ze);
          });
          ot.unshift("Warning: " + z), Function.prototype.apply.call(console[b], console, ot);
        }
      }
      var N = {};
      function F(b, z) {
        {
          var ne = b.constructor, se = ne && (ne.displayName || ne.name) || "ReactClass", Ue = se + "." + z;
          if (N[Ue])
            return;
          A("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", z, se), N[Ue] = !0;
        }
      }
      var ee = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(b) {
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
        enqueueForceUpdate: function(b, z, ne) {
          F(b, "forceUpdate");
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
        enqueueReplaceState: function(b, z, ne, se) {
          F(b, "replaceState");
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
        enqueueSetState: function(b, z, ne, se) {
          F(b, "setState");
        }
      }, Te = Object.assign, xe = {};
      Object.freeze(xe);
      function Pe(b, z, ne) {
        this.props = b, this.context = z, this.refs = xe, this.updater = ne || ee;
      }
      Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(b, z) {
        if (typeof b != "object" && typeof b != "function" && b != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, b, z, "setState");
      }, Pe.prototype.forceUpdate = function(b) {
        this.updater.enqueueForceUpdate(this, b, "forceUpdate");
      };
      {
        var Ie = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Le = function(b, z) {
          Object.defineProperty(Pe.prototype, b, {
            get: function() {
              de("%s(...) is deprecated in plain JavaScript React classes. %s", z[0], z[1]);
            }
          });
        };
        for (var Fe in Ie)
          Ie.hasOwnProperty(Fe) && Le(Fe, Ie[Fe]);
      }
      function Ke() {
      }
      Ke.prototype = Pe.prototype;
      function vt(b, z, ne) {
        this.props = b, this.context = z, this.refs = xe, this.updater = ne || ee;
      }
      var ht = vt.prototype = new Ke();
      ht.constructor = vt, Te(ht, Pe.prototype), ht.isPureReactComponent = !0;
      function Vt() {
        var b = {
          current: null
        };
        return Object.seal(b), b;
      }
      var Me = Array.isArray;
      function xt(b) {
        return Me(b);
      }
      function xn(b) {
        {
          var z = typeof Symbol == "function" && Symbol.toStringTag, ne = z && b[Symbol.toStringTag] || b.constructor.name || "Object";
          return ne;
        }
      }
      function cn(b) {
        try {
          return wn(b), !1;
        } catch {
          return !0;
        }
      }
      function wn(b) {
        return "" + b;
      }
      function Lt(b) {
        if (cn(b))
          return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xn(b)), wn(b);
      }
      function sr(b, z, ne) {
        var se = b.displayName;
        if (se)
          return se;
        var Ue = z.displayName || z.name || "";
        return Ue !== "" ? ne + "(" + Ue + ")" : ne;
      }
      function er(b) {
        return b.displayName || "Context";
      }
      function Ln(b) {
        if (b == null)
          return null;
        if (typeof b.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
          return b.displayName || b.name || null;
        if (typeof b == "string")
          return b;
        switch (b) {
          case _:
            return "Fragment";
          case w:
            return "Portal";
          case R:
            return "Profiler";
          case g:
            return "StrictMode";
          case U:
            return "Suspense";
          case H:
            return "SuspenseList";
        }
        if (typeof b == "object")
          switch (b.$$typeof) {
            case D:
              var z = b;
              return er(z) + ".Consumer";
            case O:
              var ne = b;
              return er(ne._context) + ".Provider";
            case L:
              return sr(b, b.render, "ForwardRef");
            case P:
              var se = b.displayName || null;
              return se !== null ? se : Ln(b.type) || "Memo";
            case W: {
              var Ue = b, ot = Ue._payload, Ze = Ue._init;
              try {
                return Ln(Ze(ot));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Er = Object.prototype.hasOwnProperty, Dr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, $n, tr, Wn;
      Wn = {};
      function Yn(b) {
        if (Er.call(b, "ref")) {
          var z = Object.getOwnPropertyDescriptor(b, "ref").get;
          if (z && z.isReactWarning)
            return !1;
        }
        return b.ref !== void 0;
      }
      function un(b) {
        if (Er.call(b, "key")) {
          var z = Object.getOwnPropertyDescriptor(b, "key").get;
          if (z && z.isReactWarning)
            return !1;
        }
        return b.key !== void 0;
      }
      function br(b, z) {
        var ne = function() {
          $n || ($n = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        ne.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: ne,
          configurable: !0
        });
      }
      function gr(b, z) {
        var ne = function() {
          tr || (tr = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        ne.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: ne,
          configurable: !0
        });
      }
      function Cr(b) {
        if (typeof b.ref == "string" && He.current && b.__self && He.current.stateNode !== b.__self) {
          var z = Ln(He.current.type);
          Wn[z] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z, b.ref), Wn[z] = !0);
        }
      }
      var je = function(b, z, ne, se, Ue, ot, Ze) {
        var bt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: m,
          // Built-in properties that belong on the element
          type: b,
          key: z,
          ref: ne,
          props: Ze,
          // Record the component responsible for creating this element.
          _owner: ot
        };
        return bt._store = {}, Object.defineProperty(bt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(bt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: se
        }), Object.defineProperty(bt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ue
        }), Object.freeze && (Object.freeze(bt.props), Object.freeze(bt)), bt;
      };
      function $e(b, z, ne) {
        var se, Ue = {}, ot = null, Ze = null, bt = null, Ft = null;
        if (z != null) {
          Yn(z) && (Ze = z.ref, Cr(z)), un(z) && (Lt(z.key), ot = "" + z.key), bt = z.__self === void 0 ? null : z.__self, Ft = z.__source === void 0 ? null : z.__source;
          for (se in z)
            Er.call(z, se) && !Dr.hasOwnProperty(se) && (Ue[se] = z[se]);
        }
        var vn = arguments.length - 2;
        if (vn === 1)
          Ue.children = ne;
        else if (vn > 1) {
          for (var yn = Array(vn), gn = 0; gn < vn; gn++)
            yn[gn] = arguments[gn + 2];
          Object.freeze && Object.freeze(yn), Ue.children = yn;
        }
        if (b && b.defaultProps) {
          var Sn = b.defaultProps;
          for (se in Sn)
            Ue[se] === void 0 && (Ue[se] = Sn[se]);
        }
        if (ot || Ze) {
          var zn = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ot && br(Ue, zn), Ze && gr(Ue, zn);
        }
        return je(b, ot, Ze, bt, Ft, He.current, Ue);
      }
      function Tt(b, z) {
        var ne = je(b.type, z, b.ref, b._self, b._source, b._owner, b.props);
        return ne;
      }
      function Yt(b, z, ne) {
        if (b == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
        var se, Ue = Te({}, b.props), ot = b.key, Ze = b.ref, bt = b._self, Ft = b._source, vn = b._owner;
        if (z != null) {
          Yn(z) && (Ze = z.ref, vn = He.current), un(z) && (Lt(z.key), ot = "" + z.key);
          var yn;
          b.type && b.type.defaultProps && (yn = b.type.defaultProps);
          for (se in z)
            Er.call(z, se) && !Dr.hasOwnProperty(se) && (z[se] === void 0 && yn !== void 0 ? Ue[se] = yn[se] : Ue[se] = z[se]);
        }
        var gn = arguments.length - 2;
        if (gn === 1)
          Ue.children = ne;
        else if (gn > 1) {
          for (var Sn = Array(gn), zn = 0; zn < gn; zn++)
            Sn[zn] = arguments[zn + 2];
          Ue.children = Sn;
        }
        return je(b.type, ot, Ze, bt, Ft, vn, Ue);
      }
      function Bt(b) {
        return typeof b == "object" && b !== null && b.$$typeof === m;
      }
      var Rn = ".", fn = ":";
      function qn(b) {
        var z = /[=:]/g, ne = {
          "=": "=0",
          ":": "=2"
        }, se = b.replace(z, function(Ue) {
          return ne[Ue];
        });
        return "$" + se;
      }
      var qt = !1, Bn = /\/+/g;
      function Qt(b) {
        return b.replace(Bn, "$&/");
      }
      function Dt(b, z) {
        return typeof b == "object" && b !== null && b.key != null ? (Lt(b.key), qn("" + b.key)) : z.toString(36);
      }
      function Vn(b, z, ne, se, Ue) {
        var ot = typeof b;
        (ot === "undefined" || ot === "boolean") && (b = null);
        var Ze = !1;
        if (b === null)
          Ze = !0;
        else
          switch (ot) {
            case "string":
            case "number":
              Ze = !0;
              break;
            case "object":
              switch (b.$$typeof) {
                case m:
                case w:
                  Ze = !0;
              }
          }
        if (Ze) {
          var bt = b, Ft = Ue(bt), vn = se === "" ? Rn + Dt(bt, 0) : se;
          if (xt(Ft)) {
            var yn = "";
            vn != null && (yn = Qt(vn) + "/"), Vn(Ft, z, yn, "", function(tp) {
              return tp;
            });
          } else Ft != null && (Bt(Ft) && (Ft.key && (!bt || bt.key !== Ft.key) && Lt(Ft.key), Ft = Tt(
            Ft,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            ne + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ft.key && (!bt || bt.key !== Ft.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Qt("" + Ft.key) + "/"
            ) : "") + vn
          )), z.push(Ft));
          return 1;
        }
        var gn, Sn, zn = 0, en = se === "" ? Rn : se + fn;
        if (xt(b))
          for (var Yo = 0; Yo < b.length; Yo++)
            gn = b[Yo], Sn = en + Dt(gn, Yo), zn += Vn(gn, z, ne, Sn, Ue);
        else {
          var Cu = Q(b);
          if (typeof Cu == "function") {
            var Fs = b;
            Cu === Fs.entries && (qt || de("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qt = !0);
            for (var Hs = Cu.call(Fs), io, Bs = 0; !(io = Hs.next()).done; )
              gn = io.value, Sn = en + Dt(gn, Bs++), zn += Vn(gn, z, ne, Sn, Ue);
          } else if (ot === "object") {
            var Vs = String(b);
            throw new Error("Objects are not valid as a React child (found: " + (Vs === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : Vs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return zn;
      }
      function lt(b, z, ne) {
        if (b == null)
          return b;
        var se = [], Ue = 0;
        return Vn(b, se, "", "", function(ot) {
          return z.call(ne, ot, Ue++);
        }), se;
      }
      function jt(b) {
        var z = 0;
        return lt(b, function() {
          z++;
        }), z;
      }
      function cr(b, z, ne) {
        lt(b, function() {
          z.apply(this, arguments);
        }, ne);
      }
      function ea(b) {
        return lt(b, function(z) {
          return z;
        }) || [];
      }
      function We(b) {
        if (!Bt(b))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return b;
      }
      function ft(b) {
        var z = {
          $$typeof: D,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: b,
          _currentValue2: b,
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
        z.Provider = {
          $$typeof: O,
          _context: z
        };
        var ne = !1, se = !1, Ue = !1;
        {
          var ot = {
            $$typeof: D,
            _context: z
          };
          Object.defineProperties(ot, {
            Provider: {
              get: function() {
                return se || (se = !0, A("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), z.Provider;
              },
              set: function(Ze) {
                z.Provider = Ze;
              }
            },
            _currentValue: {
              get: function() {
                return z._currentValue;
              },
              set: function(Ze) {
                z._currentValue = Ze;
              }
            },
            _currentValue2: {
              get: function() {
                return z._currentValue2;
              },
              set: function(Ze) {
                z._currentValue2 = Ze;
              }
            },
            _threadCount: {
              get: function() {
                return z._threadCount;
              },
              set: function(Ze) {
                z._threadCount = Ze;
              }
            },
            Consumer: {
              get: function() {
                return ne || (ne = !0, A("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), z.Consumer;
              }
            },
            displayName: {
              get: function() {
                return z.displayName;
              },
              set: function(Ze) {
                Ue || (de("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ze), Ue = !0);
              }
            }
          }), z.Consumer = ot;
        }
        return z._currentRenderer = null, z._currentRenderer2 = null, z;
      }
      var mt = -1, sn = 0, kn = 1, Mn = 2;
      function jn(b) {
        if (b._status === mt) {
          var z = b._result, ne = z();
          if (ne.then(function(ot) {
            if (b._status === sn || b._status === mt) {
              var Ze = b;
              Ze._status = kn, Ze._result = ot;
            }
          }, function(ot) {
            if (b._status === sn || b._status === mt) {
              var Ze = b;
              Ze._status = Mn, Ze._result = ot;
            }
          }), b._status === mt) {
            var se = b;
            se._status = sn, se._result = ne;
          }
        }
        if (b._status === kn) {
          var Ue = b._result;
          return Ue === void 0 && A(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ue), "default" in Ue || A(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ue), Ue.default;
        } else
          throw b._result;
      }
      function mn(b) {
        var z = {
          // We use these fields to store the result.
          _status: mt,
          _result: b
        }, ne = {
          $$typeof: W,
          _payload: z,
          _init: jn
        };
        {
          var se, Ue;
          Object.defineProperties(ne, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return se;
              },
              set: function(ot) {
                A("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), se = ot, Object.defineProperty(ne, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ue;
              },
              set: function(ot) {
                A("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ue = ot, Object.defineProperty(ne, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return ne;
      }
      function nr(b) {
        b != null && b.$$typeof === P ? A("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof b != "function" ? A("forwardRef requires a render function but was given %s.", b === null ? "null" : typeof b) : b.length !== 0 && b.length !== 2 && A("forwardRef render functions accept exactly two parameters: props and ref. %s", b.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), b != null && (b.defaultProps != null || b.propTypes != null) && A("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var z = {
          $$typeof: L,
          render: b
        };
        {
          var ne;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ne;
            },
            set: function(se) {
              ne = se, !b.name && !b.displayName && (b.displayName = se);
            }
          });
        }
        return z;
      }
      var j;
      j = Symbol.for("react.module.reference");
      function Ee(b) {
        return !!(typeof b == "string" || typeof b == "function" || b === _ || b === R || le || b === g || b === U || b === H || te || b === Y || De || _e || Ne || typeof b == "object" && b !== null && (b.$$typeof === W || b.$$typeof === P || b.$$typeof === O || b.$$typeof === D || b.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        b.$$typeof === j || b.getModuleId !== void 0));
      }
      function Ye(b, z) {
        Ee(b) || A("memo: The first argument must be a component. Instead received: %s", b === null ? "null" : typeof b);
        var ne = {
          $$typeof: P,
          type: b,
          compare: z === void 0 ? null : z
        };
        {
          var se;
          Object.defineProperty(ne, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return se;
            },
            set: function(Ue) {
              se = Ue, !b.name && !b.displayName && (b.displayName = Ue);
            }
          });
        }
        return ne;
      }
      function qe() {
        var b = he.current;
        return b === null && A(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), b;
      }
      function zt(b) {
        var z = qe();
        if (b._context !== void 0) {
          var ne = b._context;
          ne.Consumer === b ? A("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : ne.Provider === b && A("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return z.useContext(b);
      }
      function It(b) {
        var z = qe();
        return z.useState(b);
      }
      function At(b, z, ne) {
        var se = qe();
        return se.useReducer(b, z, ne);
      }
      function Ve(b) {
        var z = qe();
        return z.useRef(b);
      }
      function dn(b, z) {
        var ne = qe();
        return ne.useEffect(b, z);
      }
      function pn(b, z) {
        var ne = qe();
        return ne.useInsertionEffect(b, z);
      }
      function nn(b, z) {
        var ne = qe();
        return ne.useLayoutEffect(b, z);
      }
      function Ar(b, z) {
        var ne = qe();
        return ne.useCallback(b, z);
      }
      function pa(b, z) {
        var ne = qe();
        return ne.useMemo(b, z);
      }
      function Dn(b, z, ne) {
        var se = qe();
        return se.useImperativeHandle(b, z, ne);
      }
      function va(b, z) {
        {
          var ne = qe();
          return ne.useDebugValue(b, z);
        }
      }
      function Os() {
        var b = qe();
        return b.useTransition();
      }
      function Ai(b) {
        var z = qe();
        return z.useDeferredValue(b);
      }
      function Pt() {
        var b = qe();
        return b.useId();
      }
      function Cl(b, z, ne) {
        var se = qe();
        return se.useSyncExternalStore(b, z, ne);
      }
      var eo = 0, Ho, ha, ks, ta, Ds, As, Ns;
      function xl() {
      }
      xl.__reactDisabledLog = !0;
      function mu() {
        {
          if (eo === 0) {
            Ho = console.log, ha = console.info, ks = console.warn, ta = console.error, Ds = console.group, As = console.groupCollapsed, Ns = console.groupEnd;
            var b = {
              configurable: !0,
              enumerable: !0,
              value: xl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: b,
              log: b,
              warn: b,
              error: b,
              group: b,
              groupCollapsed: b,
              groupEnd: b
            });
          }
          eo++;
        }
      }
      function to() {
        {
          if (eo--, eo === 0) {
            var b = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Te({}, b, {
                value: Ho
              }),
              info: Te({}, b, {
                value: ha
              }),
              warn: Te({}, b, {
                value: ks
              }),
              error: Te({}, b, {
                value: ta
              }),
              group: Te({}, b, {
                value: Ds
              }),
              groupCollapsed: Te({}, b, {
                value: As
              }),
              groupEnd: Te({}, b, {
                value: Ns
              })
            });
          }
          eo < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ni = me.ReactCurrentDispatcher, Ga;
      function Bo(b, z, ne) {
        {
          if (Ga === void 0)
            try {
              throw Error();
            } catch (Ue) {
              var se = Ue.stack.trim().match(/\n( *(at )?)/);
              Ga = se && se[1] || "";
            }
          return `
` + Ga + b;
        }
      }
      var Li = !1, Rl;
      {
        var Tl = typeof WeakMap == "function" ? WeakMap : Map;
        Rl = new Tl();
      }
      function Vo(b, z) {
        if (!b || Li)
          return "";
        {
          var ne = Rl.get(b);
          if (ne !== void 0)
            return ne;
        }
        var se;
        Li = !0;
        var Ue = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ot;
        ot = Ni.current, Ni.current = null, mu();
        try {
          if (z) {
            var Ze = function() {
              throw Error();
            };
            if (Object.defineProperty(Ze.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ze, []);
              } catch (en) {
                se = en;
              }
              Reflect.construct(b, [], Ze);
            } else {
              try {
                Ze.call();
              } catch (en) {
                se = en;
              }
              b.call(Ze.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (en) {
              se = en;
            }
            b();
          }
        } catch (en) {
          if (en && se && typeof en.stack == "string") {
            for (var bt = en.stack.split(`
`), Ft = se.stack.split(`
`), vn = bt.length - 1, yn = Ft.length - 1; vn >= 1 && yn >= 0 && bt[vn] !== Ft[yn]; )
              yn--;
            for (; vn >= 1 && yn >= 0; vn--, yn--)
              if (bt[vn] !== Ft[yn]) {
                if (vn !== 1 || yn !== 1)
                  do
                    if (vn--, yn--, yn < 0 || bt[vn] !== Ft[yn]) {
                      var gn = `
` + bt[vn].replace(" at new ", " at ");
                      return b.displayName && gn.includes("<anonymous>") && (gn = gn.replace("<anonymous>", b.displayName)), typeof b == "function" && Rl.set(b, gn), gn;
                    }
                  while (vn >= 1 && yn >= 0);
                break;
              }
          }
        } finally {
          Li = !1, Ni.current = ot, to(), Error.prepareStackTrace = Ue;
        }
        var Sn = b ? b.displayName || b.name : "", zn = Sn ? Bo(Sn) : "";
        return typeof b == "function" && Rl.set(b, zn), zn;
      }
      function Ls(b, z, ne) {
        return Vo(b, !1);
      }
      function Ms(b) {
        var z = b.prototype;
        return !!(z && z.isReactComponent);
      }
      function Gt(b, z, ne) {
        if (b == null)
          return "";
        if (typeof b == "function")
          return Vo(b, Ms(b));
        if (typeof b == "string")
          return Bo(b);
        switch (b) {
          case U:
            return Bo("Suspense");
          case H:
            return Bo("SuspenseList");
        }
        if (typeof b == "object")
          switch (b.$$typeof) {
            case L:
              return Ls(b.render);
            case P:
              return Gt(b.type, z, ne);
            case W: {
              var se = b, Ue = se._payload, ot = se._init;
              try {
                return Gt(ot(Ue), z, ne);
              } catch {
              }
            }
          }
        return "";
      }
      var js = {}, yu = me.ReactDebugCurrentFrame;
      function Io(b) {
        if (b) {
          var z = b._owner, ne = Gt(b.type, b._source, z ? z.type : null);
          yu.setExtraStackFrame(ne);
        } else
          yu.setExtraStackFrame(null);
      }
      function Us(b, z, ne, se, Ue) {
        {
          var ot = Function.call.bind(Er);
          for (var Ze in b)
            if (ot(b, Ze)) {
              var bt = void 0;
              try {
                if (typeof b[Ze] != "function") {
                  var Ft = Error((se || "React class") + ": " + ne + " type `" + Ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[Ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ft.name = "Invariant Violation", Ft;
                }
                bt = b[Ze](z, Ze, se, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (vn) {
                bt = vn;
              }
              bt && !(bt instanceof Error) && (Io(Ue), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", ne, Ze, typeof bt), Io(null)), bt instanceof Error && !(bt.message in js) && (js[bt.message] = !0, Io(Ue), A("Failed %s type: %s", ne, bt.message), Io(null));
            }
        }
      }
      function Zt(b) {
        if (b) {
          var z = b._owner, ne = Gt(b.type, b._source, z ? z.type : null);
          Oe(ne);
        } else
          Oe(null);
      }
      var gu;
      gu = !1;
      function Ol() {
        if (He.current) {
          var b = Ln(He.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
      function Rt(b) {
        if (b !== void 0) {
          var z = b.fileName.replace(/^.*[\\\/]/, ""), ne = b.lineNumber;
          return `

Check your code at ` + z + ":" + ne + ".";
        }
        return "";
      }
      function yi(b) {
        return b != null ? Rt(b.__source) : "";
      }
      var Gn = {};
      function ma(b) {
        var z = Ol();
        if (!z) {
          var ne = typeof b == "string" ? b : b.displayName || b.name;
          ne && (z = `

Check the top-level render call using <` + ne + ">.");
        }
        return z;
      }
      function Qa(b, z) {
        if (!(!b._store || b._store.validated || b.key != null)) {
          b._store.validated = !0;
          var ne = ma(z);
          if (!Gn[ne]) {
            Gn[ne] = !0;
            var se = "";
            b && b._owner && b._owner !== He.current && (se = " It was passed a child from " + Ln(b._owner.type) + "."), Zt(b), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, se), Zt(null);
          }
        }
      }
      function $o(b, z) {
        if (typeof b == "object") {
          if (xt(b))
            for (var ne = 0; ne < b.length; ne++) {
              var se = b[ne];
              Bt(se) && Qa(se, z);
            }
          else if (Bt(b))
            b._store && (b._store.validated = !0);
          else if (b) {
            var Ue = Q(b);
            if (typeof Ue == "function" && Ue !== b.entries)
              for (var ot = Ue.call(b), Ze; !(Ze = ot.next()).done; )
                Bt(Ze.value) && Qa(Ze.value, z);
          }
        }
      }
      function Un(b) {
        {
          var z = b.type;
          if (z == null || typeof z == "string")
            return;
          var ne;
          if (typeof z == "function")
            ne = z.propTypes;
          else if (typeof z == "object" && (z.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          z.$$typeof === P))
            ne = z.propTypes;
          else
            return;
          if (ne) {
            var se = Ln(z);
            Us(ne, b.props, "prop", se, b);
          } else if (z.PropTypes !== void 0 && !gu) {
            gu = !0;
            var Ue = Ln(z);
            A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ue || "Unknown");
          }
          typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qn(b) {
        {
          for (var z = Object.keys(b.props), ne = 0; ne < z.length; ne++) {
            var se = z[ne];
            if (se !== "children" && se !== "key") {
              Zt(b), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), Zt(null);
              break;
            }
          }
          b.ref !== null && (Zt(b), A("Invalid attribute `ref` supplied to `React.Fragment`."), Zt(null));
        }
      }
      function zs(b, z, ne) {
        var se = Ee(b);
        if (!se) {
          var Ue = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (Ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = yi(z);
          ot ? Ue += ot : Ue += Ol();
          var Ze;
          b === null ? Ze = "null" : xt(b) ? Ze = "array" : b !== void 0 && b.$$typeof === m ? (Ze = "<" + (Ln(b.type) || "Unknown") + " />", Ue = " Did you accidentally export a JSX literal instead of a component?") : Ze = typeof b, A("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ze, Ue);
        }
        var bt = $e.apply(this, arguments);
        if (bt == null)
          return bt;
        if (se)
          for (var Ft = 2; Ft < arguments.length; Ft++)
            $o(arguments[Ft], b);
        return b === _ ? Qn(bt) : Un(bt), bt;
      }
      var zr = !1;
      function ya(b) {
        var z = zs.bind(null, b);
        return z.type = b, zr || (zr = !0, de("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(z, "type", {
          enumerable: !1,
          get: function() {
            return de("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: b
            }), b;
          }
        }), z;
      }
      function gi(b, z, ne) {
        for (var se = Yt.apply(this, arguments), Ue = 2; Ue < arguments.length; Ue++)
          $o(arguments[Ue], se.type);
        return Un(se), se;
      }
      function Su(b, z) {
        var ne = G.transition;
        G.transition = {};
        var se = G.transition;
        G.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          b();
        } finally {
          if (G.transition = ne, ne === null && se._updatedFibers) {
            var Ue = se._updatedFibers.size;
            Ue > 10 && de("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), se._updatedFibers.clear();
          }
        }
      }
      var kl = !1, Dl = null;
      function Wo(b) {
        if (Dl === null)
          try {
            var z = ("require" + Math.random()).slice(0, 7), ne = l && l[z];
            Dl = ne.call(l, "timers").setImmediate;
          } catch {
            Dl = function(Ue) {
              kl === !1 && (kl = !0, typeof MessageChannel > "u" && A("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ot = new MessageChannel();
              ot.port1.onmessage = Ue, ot.port2.postMessage(void 0);
            };
          }
        return Dl(b);
      }
      var Ka = 0, no = !1;
      function wu(b) {
        {
          var z = Ka;
          Ka++, we.current === null && (we.current = []);
          var ne = we.isBatchingLegacy, se;
          try {
            if (we.isBatchingLegacy = !0, se = b(), !ne && we.didScheduleLegacyUpdate) {
              var Ue = we.current;
              Ue !== null && (we.didScheduleLegacyUpdate = !1, ao(Ue));
            }
          } catch (Sn) {
            throw ro(z), Sn;
          } finally {
            we.isBatchingLegacy = ne;
          }
          if (se !== null && typeof se == "object" && typeof se.then == "function") {
            var ot = se, Ze = !1, bt = {
              then: function(Sn, zn) {
                Ze = !0, ot.then(function(en) {
                  ro(z), Ka === 0 ? _u(en, Sn, zn) : Sn(en);
                }, function(en) {
                  ro(z), zn(en);
                });
              }
            };
            return !no && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ze || (no = !0, A("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), bt;
          } else {
            var Ft = se;
            if (ro(z), Ka === 0) {
              var vn = we.current;
              vn !== null && (ao(vn), we.current = null);
              var yn = {
                then: function(Sn, zn) {
                  we.current === null ? (we.current = [], _u(Ft, Sn, zn)) : Sn(Ft);
                }
              };
              return yn;
            } else {
              var gn = {
                then: function(Sn, zn) {
                  Sn(Ft);
                }
              };
              return gn;
            }
          }
        }
      }
      function ro(b) {
        b !== Ka - 1 && A("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ka = b;
      }
      function _u(b, z, ne) {
        {
          var se = we.current;
          if (se !== null)
            try {
              ao(se), Wo(function() {
                se.length === 0 ? (we.current = null, z(b)) : _u(b, z, ne);
              });
            } catch (Ue) {
              ne(Ue);
            }
          else
            z(b);
        }
      }
      var Mi = !1;
      function ao(b) {
        if (!Mi) {
          Mi = !0;
          var z = 0;
          try {
            for (; z < b.length; z++) {
              var ne = b[z];
              do
                ne = ne(!0);
              while (ne !== null);
            }
            b.length = 0;
          } catch (se) {
            throw b = b.slice(z + 1), se;
          } finally {
            Mi = !1;
          }
        }
      }
      var Eu = zs, Ps = gi, Si = ya, bu = {
        map: lt,
        forEach: cr,
        count: jt,
        toArray: ea,
        only: We
      };
      s.Children = bu, s.Component = Pe, s.Fragment = _, s.Profiler = R, s.PureComponent = vt, s.StrictMode = g, s.Suspense = U, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, s.cloneElement = Ps, s.createContext = ft, s.createElement = Eu, s.createFactory = Si, s.createRef = Vt, s.forwardRef = nr, s.isValidElement = Bt, s.lazy = mn, s.memo = Ye, s.startTransition = Su, s.unstable_act = wu, s.useCallback = Ar, s.useContext = zt, s.useDebugValue = va, s.useDeferredValue = Ai, s.useEffect = dn, s.useId = Pt, s.useImperativeHandle = Dn, s.useInsertionEffect = pn, s.useLayoutEffect = nn, s.useMemo = pa, s.useReducer = At, s.useRef = Ve, s.useState = It, s.useSyncExternalStore = Cl, s.useTransition = Os, s.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(rh, rh.exports)), rh.exports;
}
var ZN = {};
ZN.NODE_ENV === "production" ? O_.exports = XN() : O_.exports = JN();
var ce = O_.exports;
const pu = /* @__PURE__ */ Tg(ce);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kx;
function eL() {
  if (Kx) return Jv;
  Kx = 1;
  var l = ce, s = Symbol.for("react.element"), d = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, m = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(g, R, O) {
    var D, L = {}, U = null, H = null;
    O !== void 0 && (U = "" + O), R.key !== void 0 && (U = "" + R.key), R.ref !== void 0 && (H = R.ref);
    for (D in R) v.call(R, D) && !w.hasOwnProperty(D) && (L[D] = R[D]);
    if (g && g.defaultProps) for (D in R = g.defaultProps, R) L[D] === void 0 && (L[D] = R[D]);
    return { $$typeof: s, type: g, key: U, ref: H, props: L, _owner: m.current };
  }
  return Jv.Fragment = d, Jv.jsx = _, Jv.jsxs = _, Jv;
}
var Zv = {}, Xx;
function tL() {
  if (Xx) return Zv;
  Xx = 1;
  var l = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return l.NODE_ENV !== "production" && function() {
    var s = ce, d = Symbol.for("react.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), R = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), W = Symbol.iterator, Y = "@@iterator";
    function Se(j) {
      if (j === null || typeof j != "object")
        return null;
      var Ee = W && j[W] || j[Y];
      return typeof Ee == "function" ? Ee : null;
    }
    var ue = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Q(j) {
      {
        for (var Ee = arguments.length, Ye = new Array(Ee > 1 ? Ee - 1 : 0), qe = 1; qe < Ee; qe++)
          Ye[qe - 1] = arguments[qe];
        he("error", j, Ye);
      }
    }
    function he(j, Ee, Ye) {
      {
        var qe = ue.ReactDebugCurrentFrame, zt = qe.getStackAddendum();
        zt !== "" && (Ee += "%s", Ye = Ye.concat([zt]));
        var It = Ye.map(function(At) {
          return String(At);
        });
        It.unshift("Warning: " + Ee), Function.prototype.apply.call(console[j], console, It);
      }
    }
    var G = !1, we = !1, He = !1, q = !1, be = !1, Oe;
    Oe = Symbol.for("react.module.reference");
    function De(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === m || j === _ || be || j === w || j === D || j === L || q || j === P || G || we || He || typeof j == "object" && j !== null && (j.$$typeof === H || j.$$typeof === U || j.$$typeof === g || j.$$typeof === R || j.$$typeof === O || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === Oe || j.getModuleId !== void 0));
    }
    function _e(j, Ee, Ye) {
      var qe = j.displayName;
      if (qe)
        return qe;
      var zt = Ee.displayName || Ee.name || "";
      return zt !== "" ? Ye + "(" + zt + ")" : Ye;
    }
    function Ne(j) {
      return j.displayName || "Context";
    }
    function te(j) {
      if (j == null)
        return null;
      if (typeof j.tag == "number" && Q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof j == "function")
        return j.displayName || j.name || null;
      if (typeof j == "string")
        return j;
      switch (j) {
        case m:
          return "Fragment";
        case v:
          return "Portal";
        case _:
          return "Profiler";
        case w:
          return "StrictMode";
        case D:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case R:
            var Ee = j;
            return Ne(Ee) + ".Consumer";
          case g:
            var Ye = j;
            return Ne(Ye._context) + ".Provider";
          case O:
            return _e(j, j.render, "ForwardRef");
          case U:
            var qe = j.displayName || null;
            return qe !== null ? qe : te(j.type) || "Memo";
          case H: {
            var zt = j, It = zt._payload, At = zt._init;
            try {
              return te(At(It));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var le = Object.assign, me = 0, de, A, ie, N, F, ee, Te;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function Pe() {
      {
        if (me === 0) {
          de = console.log, A = console.info, ie = console.warn, N = console.error, F = console.group, ee = console.groupCollapsed, Te = console.groupEnd;
          var j = {
            configurable: !0,
            enumerable: !0,
            value: xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: j,
            log: j,
            warn: j,
            error: j,
            group: j,
            groupCollapsed: j,
            groupEnd: j
          });
        }
        me++;
      }
    }
    function Ie() {
      {
        if (me--, me === 0) {
          var j = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: le({}, j, {
              value: de
            }),
            info: le({}, j, {
              value: A
            }),
            warn: le({}, j, {
              value: ie
            }),
            error: le({}, j, {
              value: N
            }),
            group: le({}, j, {
              value: F
            }),
            groupCollapsed: le({}, j, {
              value: ee
            }),
            groupEnd: le({}, j, {
              value: Te
            })
          });
        }
        me < 0 && Q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Le = ue.ReactCurrentDispatcher, Fe;
    function Ke(j, Ee, Ye) {
      {
        if (Fe === void 0)
          try {
            throw Error();
          } catch (zt) {
            var qe = zt.stack.trim().match(/\n( *(at )?)/);
            Fe = qe && qe[1] || "";
          }
        return `
` + Fe + j;
      }
    }
    var vt = !1, ht;
    {
      var Vt = typeof WeakMap == "function" ? WeakMap : Map;
      ht = new Vt();
    }
    function Me(j, Ee) {
      if (!j || vt)
        return "";
      {
        var Ye = ht.get(j);
        if (Ye !== void 0)
          return Ye;
      }
      var qe;
      vt = !0;
      var zt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var It;
      It = Le.current, Le.current = null, Pe();
      try {
        if (Ee) {
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
            } catch (va) {
              qe = va;
            }
            Reflect.construct(j, [], At);
          } else {
            try {
              At.call();
            } catch (va) {
              qe = va;
            }
            j.call(At.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (va) {
            qe = va;
          }
          j();
        }
      } catch (va) {
        if (va && qe && typeof va.stack == "string") {
          for (var Ve = va.stack.split(`
`), dn = qe.stack.split(`
`), pn = Ve.length - 1, nn = dn.length - 1; pn >= 1 && nn >= 0 && Ve[pn] !== dn[nn]; )
            nn--;
          for (; pn >= 1 && nn >= 0; pn--, nn--)
            if (Ve[pn] !== dn[nn]) {
              if (pn !== 1 || nn !== 1)
                do
                  if (pn--, nn--, nn < 0 || Ve[pn] !== dn[nn]) {
                    var Ar = `
` + Ve[pn].replace(" at new ", " at ");
                    return j.displayName && Ar.includes("<anonymous>") && (Ar = Ar.replace("<anonymous>", j.displayName)), typeof j == "function" && ht.set(j, Ar), Ar;
                  }
                while (pn >= 1 && nn >= 0);
              break;
            }
        }
      } finally {
        vt = !1, Le.current = It, Ie(), Error.prepareStackTrace = zt;
      }
      var pa = j ? j.displayName || j.name : "", Dn = pa ? Ke(pa) : "";
      return typeof j == "function" && ht.set(j, Dn), Dn;
    }
    function xt(j, Ee, Ye) {
      return Me(j, !1);
    }
    function xn(j) {
      var Ee = j.prototype;
      return !!(Ee && Ee.isReactComponent);
    }
    function cn(j, Ee, Ye) {
      if (j == null)
        return "";
      if (typeof j == "function")
        return Me(j, xn(j));
      if (typeof j == "string")
        return Ke(j);
      switch (j) {
        case D:
          return Ke("Suspense");
        case L:
          return Ke("SuspenseList");
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case O:
            return xt(j.render);
          case U:
            return cn(j.type, Ee, Ye);
          case H: {
            var qe = j, zt = qe._payload, It = qe._init;
            try {
              return cn(It(zt), Ee, Ye);
            } catch {
            }
          }
        }
      return "";
    }
    var wn = Object.prototype.hasOwnProperty, Lt = {}, sr = ue.ReactDebugCurrentFrame;
    function er(j) {
      if (j) {
        var Ee = j._owner, Ye = cn(j.type, j._source, Ee ? Ee.type : null);
        sr.setExtraStackFrame(Ye);
      } else
        sr.setExtraStackFrame(null);
    }
    function Ln(j, Ee, Ye, qe, zt) {
      {
        var It = Function.call.bind(wn);
        for (var At in j)
          if (It(j, At)) {
            var Ve = void 0;
            try {
              if (typeof j[At] != "function") {
                var dn = Error((qe || "React class") + ": " + Ye + " type `" + At + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof j[At] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw dn.name = "Invariant Violation", dn;
              }
              Ve = j[At](Ee, At, qe, Ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pn) {
              Ve = pn;
            }
            Ve && !(Ve instanceof Error) && (er(zt), Q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", qe || "React class", Ye, At, typeof Ve), er(null)), Ve instanceof Error && !(Ve.message in Lt) && (Lt[Ve.message] = !0, er(zt), Q("Failed %s type: %s", Ye, Ve.message), er(null));
          }
      }
    }
    var Er = Array.isArray;
    function Dr(j) {
      return Er(j);
    }
    function $n(j) {
      {
        var Ee = typeof Symbol == "function" && Symbol.toStringTag, Ye = Ee && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return Ye;
      }
    }
    function tr(j) {
      try {
        return Wn(j), !1;
      } catch {
        return !0;
      }
    }
    function Wn(j) {
      return "" + j;
    }
    function Yn(j) {
      if (tr(j))
        return Q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $n(j)), Wn(j);
    }
    var un = ue.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gr, Cr, je;
    je = {};
    function $e(j) {
      if (wn.call(j, "ref")) {
        var Ee = Object.getOwnPropertyDescriptor(j, "ref").get;
        if (Ee && Ee.isReactWarning)
          return !1;
      }
      return j.ref !== void 0;
    }
    function Tt(j) {
      if (wn.call(j, "key")) {
        var Ee = Object.getOwnPropertyDescriptor(j, "key").get;
        if (Ee && Ee.isReactWarning)
          return !1;
      }
      return j.key !== void 0;
    }
    function Yt(j, Ee) {
      if (typeof j.ref == "string" && un.current && Ee && un.current.stateNode !== Ee) {
        var Ye = te(un.current.type);
        je[Ye] || (Q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(un.current.type), j.ref), je[Ye] = !0);
      }
    }
    function Bt(j, Ee) {
      {
        var Ye = function() {
          gr || (gr = !0, Q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ee));
        };
        Ye.isReactWarning = !0, Object.defineProperty(j, "key", {
          get: Ye,
          configurable: !0
        });
      }
    }
    function Rn(j, Ee) {
      {
        var Ye = function() {
          Cr || (Cr = !0, Q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ee));
        };
        Ye.isReactWarning = !0, Object.defineProperty(j, "ref", {
          get: Ye,
          configurable: !0
        });
      }
    }
    var fn = function(j, Ee, Ye, qe, zt, It, At) {
      var Ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: j,
        key: Ee,
        ref: Ye,
        props: At,
        // Record the component responsible for creating this element.
        _owner: It
      };
      return Ve._store = {}, Object.defineProperty(Ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: qe
      }), Object.defineProperty(Ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: zt
      }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
    };
    function qn(j, Ee, Ye, qe, zt) {
      {
        var It, At = {}, Ve = null, dn = null;
        Ye !== void 0 && (Yn(Ye), Ve = "" + Ye), Tt(Ee) && (Yn(Ee.key), Ve = "" + Ee.key), $e(Ee) && (dn = Ee.ref, Yt(Ee, zt));
        for (It in Ee)
          wn.call(Ee, It) && !br.hasOwnProperty(It) && (At[It] = Ee[It]);
        if (j && j.defaultProps) {
          var pn = j.defaultProps;
          for (It in pn)
            At[It] === void 0 && (At[It] = pn[It]);
        }
        if (Ve || dn) {
          var nn = typeof j == "function" ? j.displayName || j.name || "Unknown" : j;
          Ve && Bt(At, nn), dn && Rn(At, nn);
        }
        return fn(j, Ve, dn, zt, qe, un.current, At);
      }
    }
    var qt = ue.ReactCurrentOwner, Bn = ue.ReactDebugCurrentFrame;
    function Qt(j) {
      if (j) {
        var Ee = j._owner, Ye = cn(j.type, j._source, Ee ? Ee.type : null);
        Bn.setExtraStackFrame(Ye);
      } else
        Bn.setExtraStackFrame(null);
    }
    var Dt;
    Dt = !1;
    function Vn(j) {
      return typeof j == "object" && j !== null && j.$$typeof === d;
    }
    function lt() {
      {
        if (qt.current) {
          var j = te(qt.current.type);
          if (j)
            return `

Check the render method of \`` + j + "`.";
        }
        return "";
      }
    }
    function jt(j) {
      return "";
    }
    var cr = {};
    function ea(j) {
      {
        var Ee = lt();
        if (!Ee) {
          var Ye = typeof j == "string" ? j : j.displayName || j.name;
          Ye && (Ee = `

Check the top-level render call using <` + Ye + ">.");
        }
        return Ee;
      }
    }
    function We(j, Ee) {
      {
        if (!j._store || j._store.validated || j.key != null)
          return;
        j._store.validated = !0;
        var Ye = ea(Ee);
        if (cr[Ye])
          return;
        cr[Ye] = !0;
        var qe = "";
        j && j._owner && j._owner !== qt.current && (qe = " It was passed a child from " + te(j._owner.type) + "."), Qt(j), Q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ye, qe), Qt(null);
      }
    }
    function ft(j, Ee) {
      {
        if (typeof j != "object")
          return;
        if (Dr(j))
          for (var Ye = 0; Ye < j.length; Ye++) {
            var qe = j[Ye];
            Vn(qe) && We(qe, Ee);
          }
        else if (Vn(j))
          j._store && (j._store.validated = !0);
        else if (j) {
          var zt = Se(j);
          if (typeof zt == "function" && zt !== j.entries)
            for (var It = zt.call(j), At; !(At = It.next()).done; )
              Vn(At.value) && We(At.value, Ee);
        }
      }
    }
    function mt(j) {
      {
        var Ee = j.type;
        if (Ee == null || typeof Ee == "string")
          return;
        var Ye;
        if (typeof Ee == "function")
          Ye = Ee.propTypes;
        else if (typeof Ee == "object" && (Ee.$$typeof === O || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Ee.$$typeof === U))
          Ye = Ee.propTypes;
        else
          return;
        if (Ye) {
          var qe = te(Ee);
          Ln(Ye, j.props, "prop", qe, j);
        } else if (Ee.PropTypes !== void 0 && !Dt) {
          Dt = !0;
          var zt = te(Ee);
          Q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", zt || "Unknown");
        }
        typeof Ee.getDefaultProps == "function" && !Ee.getDefaultProps.isReactClassApproved && Q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sn(j) {
      {
        for (var Ee = Object.keys(j.props), Ye = 0; Ye < Ee.length; Ye++) {
          var qe = Ee[Ye];
          if (qe !== "children" && qe !== "key") {
            Qt(j), Q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", qe), Qt(null);
            break;
          }
        }
        j.ref !== null && (Qt(j), Q("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    function kn(j, Ee, Ye, qe, zt, It) {
      {
        var At = De(j);
        if (!At) {
          var Ve = "";
          (j === void 0 || typeof j == "object" && j !== null && Object.keys(j).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var dn = jt();
          dn ? Ve += dn : Ve += lt();
          var pn;
          j === null ? pn = "null" : Dr(j) ? pn = "array" : j !== void 0 && j.$$typeof === d ? (pn = "<" + (te(j.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : pn = typeof j, Q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pn, Ve);
        }
        var nn = qn(j, Ee, Ye, zt, It);
        if (nn == null)
          return nn;
        if (At) {
          var Ar = Ee.children;
          if (Ar !== void 0)
            if (qe)
              if (Dr(Ar)) {
                for (var pa = 0; pa < Ar.length; pa++)
                  ft(Ar[pa], j);
                Object.freeze && Object.freeze(Ar);
              } else
                Q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(Ar, j);
        }
        return j === m ? sn(nn) : mt(nn), nn;
      }
    }
    function Mn(j, Ee, Ye) {
      return kn(j, Ee, Ye, !0);
    }
    function jn(j, Ee, Ye) {
      return kn(j, Ee, Ye, !1);
    }
    var mn = jn, nr = Mn;
    Zv.Fragment = m, Zv.jsx = mn, Zv.jsxs = nr;
  }(), Zv;
}
var nL = {};
nL.NODE_ENV === "production" ? T_.exports = eL() : T_.exports = tL();
var T = T_.exports, ah = {}, k_ = { exports: {} }, vi = {}, ig = { exports: {} }, u_ = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jx;
function rL() {
  return Jx || (Jx = 1, function(l) {
    function s(A, ie) {
      var N = A.length;
      A.push(ie);
      e: for (; 0 < N; ) {
        var F = N - 1 >>> 1, ee = A[F];
        if (0 < m(ee, ie)) A[F] = ie, A[N] = ee, N = F;
        else break e;
      }
    }
    function d(A) {
      return A.length === 0 ? null : A[0];
    }
    function v(A) {
      if (A.length === 0) return null;
      var ie = A[0], N = A.pop();
      if (N !== ie) {
        A[0] = N;
        e: for (var F = 0, ee = A.length, Te = ee >>> 1; F < Te; ) {
          var xe = 2 * (F + 1) - 1, Pe = A[xe], Ie = xe + 1, Le = A[Ie];
          if (0 > m(Pe, N)) Ie < ee && 0 > m(Le, Pe) ? (A[F] = Le, A[Ie] = N, F = Ie) : (A[F] = Pe, A[xe] = N, F = xe);
          else if (Ie < ee && 0 > m(Le, N)) A[F] = Le, A[Ie] = N, F = Ie;
          else break e;
        }
      }
      return ie;
    }
    function m(A, ie) {
      var N = A.sortIndex - ie.sortIndex;
      return N !== 0 ? N : A.id - ie.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      l.unstable_now = function() {
        return w.now();
      };
    } else {
      var _ = Date, g = _.now();
      l.unstable_now = function() {
        return _.now() - g;
      };
    }
    var R = [], O = [], D = 1, L = null, U = 3, H = !1, P = !1, W = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Q(A) {
      for (var ie = d(O); ie !== null; ) {
        if (ie.callback === null) v(O);
        else if (ie.startTime <= A) v(O), ie.sortIndex = ie.expirationTime, s(R, ie);
        else break;
        ie = d(O);
      }
    }
    function he(A) {
      if (W = !1, Q(A), !P) if (d(R) !== null) P = !0, me(G);
      else {
        var ie = d(O);
        ie !== null && de(he, ie.startTime - A);
      }
    }
    function G(A, ie) {
      P = !1, W && (W = !1, Se(q), q = -1), H = !0;
      var N = U;
      try {
        for (Q(ie), L = d(R); L !== null && (!(L.expirationTime > ie) || A && !De()); ) {
          var F = L.callback;
          if (typeof F == "function") {
            L.callback = null, U = L.priorityLevel;
            var ee = F(L.expirationTime <= ie);
            ie = l.unstable_now(), typeof ee == "function" ? L.callback = ee : L === d(R) && v(R), Q(ie);
          } else v(R);
          L = d(R);
        }
        if (L !== null) var Te = !0;
        else {
          var xe = d(O);
          xe !== null && de(he, xe.startTime - ie), Te = !1;
        }
        return Te;
      } finally {
        L = null, U = N, H = !1;
      }
    }
    var we = !1, He = null, q = -1, be = 5, Oe = -1;
    function De() {
      return !(l.unstable_now() - Oe < be);
    }
    function _e() {
      if (He !== null) {
        var A = l.unstable_now();
        Oe = A;
        var ie = !0;
        try {
          ie = He(!0, A);
        } finally {
          ie ? Ne() : (we = !1, He = null);
        }
      } else we = !1;
    }
    var Ne;
    if (typeof ue == "function") Ne = function() {
      ue(_e);
    };
    else if (typeof MessageChannel < "u") {
      var te = new MessageChannel(), le = te.port2;
      te.port1.onmessage = _e, Ne = function() {
        le.postMessage(null);
      };
    } else Ne = function() {
      Y(_e, 0);
    };
    function me(A) {
      He = A, we || (we = !0, Ne());
    }
    function de(A, ie) {
      q = Y(function() {
        A(l.unstable_now());
      }, ie);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, l.unstable_continueExecution = function() {
      P || H || (P = !0, me(G));
    }, l.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : be = 0 < A ? Math.floor(1e3 / A) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, l.unstable_getFirstCallbackNode = function() {
      return d(R);
    }, l.unstable_next = function(A) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var ie = 3;
          break;
        default:
          ie = U;
      }
      var N = U;
      U = ie;
      try {
        return A();
      } finally {
        U = N;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(A, ie) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var N = U;
      U = A;
      try {
        return ie();
      } finally {
        U = N;
      }
    }, l.unstable_scheduleCallback = function(A, ie, N) {
      var F = l.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? F + N : F) : N = F, A) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return ee = N + ee, A = { id: D++, callback: ie, priorityLevel: A, startTime: N, expirationTime: ee, sortIndex: -1 }, N > F ? (A.sortIndex = N, s(O, A), d(R) === null && A === d(O) && (W ? (Se(q), q = -1) : W = !0, de(he, N - F))) : (A.sortIndex = ee, s(R, A), P || H || (P = !0, me(G))), A;
    }, l.unstable_shouldYield = De, l.unstable_wrapCallback = function(A) {
      var ie = U;
      return function() {
        var N = U;
        U = ie;
        try {
          return A.apply(this, arguments);
        } finally {
          U = N;
        }
      };
    };
  }(u_)), u_;
}
var s_ = {}, Zx;
function aL() {
  return Zx || (Zx = 1, function(l) {
    var s = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    s.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = !1, v = !1, m = 5;
      function w(je, $e) {
        var Tt = je.length;
        je.push($e), R(je, $e, Tt);
      }
      function _(je) {
        return je.length === 0 ? null : je[0];
      }
      function g(je) {
        if (je.length === 0)
          return null;
        var $e = je[0], Tt = je.pop();
        return Tt !== $e && (je[0] = Tt, O(je, Tt, 0)), $e;
      }
      function R(je, $e, Tt) {
        for (var Yt = Tt; Yt > 0; ) {
          var Bt = Yt - 1 >>> 1, Rn = je[Bt];
          if (D(Rn, $e) > 0)
            je[Bt] = $e, je[Yt] = Rn, Yt = Bt;
          else
            return;
        }
      }
      function O(je, $e, Tt) {
        for (var Yt = Tt, Bt = je.length, Rn = Bt >>> 1; Yt < Rn; ) {
          var fn = (Yt + 1) * 2 - 1, qn = je[fn], qt = fn + 1, Bn = je[qt];
          if (D(qn, $e) < 0)
            qt < Bt && D(Bn, qn) < 0 ? (je[Yt] = Bn, je[qt] = $e, Yt = qt) : (je[Yt] = qn, je[fn] = $e, Yt = fn);
          else if (qt < Bt && D(Bn, $e) < 0)
            je[Yt] = Bn, je[qt] = $e, Yt = qt;
          else
            return;
        }
      }
      function D(je, $e) {
        var Tt = je.sortIndex - $e.sortIndex;
        return Tt !== 0 ? Tt : je.id - $e.id;
      }
      var L = 1, U = 2, H = 3, P = 4, W = 5;
      function Y(je, $e) {
      }
      var Se = typeof performance == "object" && typeof performance.now == "function";
      if (Se) {
        var ue = performance;
        l.unstable_now = function() {
          return ue.now();
        };
      } else {
        var Q = Date, he = Q.now();
        l.unstable_now = function() {
          return Q.now() - he;
        };
      }
      var G = 1073741823, we = -1, He = 250, q = 5e3, be = 1e4, Oe = G, De = [], _e = [], Ne = 1, te = null, le = H, me = !1, de = !1, A = !1, ie = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ee(je) {
        for (var $e = _(_e); $e !== null; ) {
          if ($e.callback === null)
            g(_e);
          else if ($e.startTime <= je)
            g(_e), $e.sortIndex = $e.expirationTime, w(De, $e);
          else
            return;
          $e = _(_e);
        }
      }
      function Te(je) {
        if (A = !1, ee(je), !de)
          if (_(De) !== null)
            de = !0, Yn(xe);
          else {
            var $e = _(_e);
            $e !== null && un(Te, $e.startTime - je);
          }
      }
      function xe(je, $e) {
        de = !1, A && (A = !1, br()), me = !0;
        var Tt = le;
        try {
          var Yt;
          if (!v) return Pe(je, $e);
        } finally {
          te = null, le = Tt, me = !1;
        }
      }
      function Pe(je, $e) {
        var Tt = $e;
        for (ee(Tt), te = _(De); te !== null && !d && !(te.expirationTime > Tt && (!je || er())); ) {
          var Yt = te.callback;
          if (typeof Yt == "function") {
            te.callback = null, le = te.priorityLevel;
            var Bt = te.expirationTime <= Tt, Rn = Yt(Bt);
            Tt = l.unstable_now(), typeof Rn == "function" ? te.callback = Rn : te === _(De) && g(De), ee(Tt);
          } else
            g(De);
          te = _(De);
        }
        if (te !== null)
          return !0;
        var fn = _(_e);
        return fn !== null && un(Te, fn.startTime - Tt), !1;
      }
      function Ie(je, $e) {
        switch (je) {
          case L:
          case U:
          case H:
          case P:
          case W:
            break;
          default:
            je = H;
        }
        var Tt = le;
        le = je;
        try {
          return $e();
        } finally {
          le = Tt;
        }
      }
      function Le(je) {
        var $e;
        switch (le) {
          case L:
          case U:
          case H:
            $e = H;
            break;
          default:
            $e = le;
            break;
        }
        var Tt = le;
        le = $e;
        try {
          return je();
        } finally {
          le = Tt;
        }
      }
      function Fe(je) {
        var $e = le;
        return function() {
          var Tt = le;
          le = $e;
          try {
            return je.apply(this, arguments);
          } finally {
            le = Tt;
          }
        };
      }
      function Ke(je, $e, Tt) {
        var Yt = l.unstable_now(), Bt;
        if (typeof Tt == "object" && Tt !== null) {
          var Rn = Tt.delay;
          typeof Rn == "number" && Rn > 0 ? Bt = Yt + Rn : Bt = Yt;
        } else
          Bt = Yt;
        var fn;
        switch (je) {
          case L:
            fn = we;
            break;
          case U:
            fn = He;
            break;
          case W:
            fn = Oe;
            break;
          case P:
            fn = be;
            break;
          case H:
          default:
            fn = q;
            break;
        }
        var qn = Bt + fn, qt = {
          id: Ne++,
          callback: $e,
          priorityLevel: je,
          startTime: Bt,
          expirationTime: qn,
          sortIndex: -1
        };
        return Bt > Yt ? (qt.sortIndex = Bt, w(_e, qt), _(De) === null && qt === _(_e) && (A ? br() : A = !0, un(Te, Bt - Yt))) : (qt.sortIndex = qn, w(De, qt), !de && !me && (de = !0, Yn(xe))), qt;
      }
      function vt() {
      }
      function ht() {
        !de && !me && (de = !0, Yn(xe));
      }
      function Vt() {
        return _(De);
      }
      function Me(je) {
        je.callback = null;
      }
      function xt() {
        return le;
      }
      var xn = !1, cn = null, wn = -1, Lt = m, sr = -1;
      function er() {
        var je = l.unstable_now() - sr;
        return !(je < Lt);
      }
      function Ln() {
      }
      function Er(je) {
        if (je < 0 || je > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        je > 0 ? Lt = Math.floor(1e3 / je) : Lt = m;
      }
      var Dr = function() {
        if (cn !== null) {
          var je = l.unstable_now();
          sr = je;
          var $e = !0, Tt = !0;
          try {
            Tt = cn($e, je);
          } finally {
            Tt ? $n() : (xn = !1, cn = null);
          }
        } else
          xn = !1;
      }, $n;
      if (typeof F == "function")
        $n = function() {
          F(Dr);
        };
      else if (typeof MessageChannel < "u") {
        var tr = new MessageChannel(), Wn = tr.port2;
        tr.port1.onmessage = Dr, $n = function() {
          Wn.postMessage(null);
        };
      } else
        $n = function() {
          ie(Dr, 0);
        };
      function Yn(je) {
        cn = je, xn || (xn = !0, $n());
      }
      function un(je, $e) {
        wn = ie(function() {
          je(l.unstable_now());
        }, $e);
      }
      function br() {
        N(wn), wn = -1;
      }
      var gr = Ln, Cr = null;
      l.unstable_IdlePriority = W, l.unstable_ImmediatePriority = L, l.unstable_LowPriority = P, l.unstable_NormalPriority = H, l.unstable_Profiling = Cr, l.unstable_UserBlockingPriority = U, l.unstable_cancelCallback = Me, l.unstable_continueExecution = ht, l.unstable_forceFrameRate = Er, l.unstable_getCurrentPriorityLevel = xt, l.unstable_getFirstCallbackNode = Vt, l.unstable_next = Le, l.unstable_pauseExecution = vt, l.unstable_requestPaint = gr, l.unstable_runWithPriority = Ie, l.unstable_scheduleCallback = Ke, l.unstable_shouldYield = er, l.unstable_wrapCallback = Fe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(s_)), s_;
}
var eR;
function eT() {
  if (eR) return ig.exports;
  eR = 1;
  var l = {};
  return l.NODE_ENV === "production" ? ig.exports = rL() : ig.exports = aL(), ig.exports;
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
var tR;
function iL() {
  if (tR) return vi;
  tR = 1;
  var l = ce, s = eT();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var v = /* @__PURE__ */ new Set(), m = {};
  function w(n, r) {
    _(n, r), _(n + "Capture", r);
  }
  function _(n, r) {
    for (m[n] = r, n = 0; n < r.length; n++) v.add(r[n]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, D = {}, L = {};
  function U(n) {
    return R.call(L, n) ? !0 : R.call(D, n) ? !1 : O.test(n) ? L[n] = !0 : (D[n] = !0, !1);
  }
  function H(n, r, o, c) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function P(n, r, o, c) {
    if (r === null || typeof r > "u" || H(n, r, o, c)) return !0;
    if (c) return !1;
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
  function W(n, r, o, c, p, y, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = y, this.removeEmptyString = C;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Y[n] = new W(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Y[r] = new W(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Y[n] = new W(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Y[n] = new W(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Y[n] = new W(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Y[n] = new W(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Y[n] = new W(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Y[n] = new W(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Y[n] = new W(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Se = /[\-:]([a-z])/g;
  function ue(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Se,
      ue
    );
    Y[r] = new W(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Se, ue);
    Y[r] = new W(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Se, ue);
    Y[r] = new W(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Y[n] = new W(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new W("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Y[n] = new W(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Q(n, r, o, c) {
    var p = Y.hasOwnProperty(r) ? Y[r] : null;
    (p !== null ? p.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (P(r, o, p, c) && (o = null), c || p === null ? U(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, c = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, c ? n.setAttributeNS(c, r, o) : n.setAttribute(r, o))));
  }
  var he = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, G = Symbol.for("react.element"), we = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), be = Symbol.for("react.profiler"), Oe = Symbol.for("react.provider"), De = Symbol.for("react.context"), _e = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), A = Symbol.iterator;
  function ie(n) {
    return n === null || typeof n != "object" ? null : (n = A && n[A] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var N = Object.assign, F;
  function ee(n) {
    if (F === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      F = r && r[1] || "";
    }
    return `
` + F + n;
  }
  var Te = !1;
  function xe(n, r) {
    if (!n || Te) return "";
    Te = !0;
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
        } catch (oe) {
          var c = oe;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (oe) {
          c = oe;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (oe) {
          c = oe;
        }
        n();
      }
    } catch (oe) {
      if (oe && c && typeof oe.stack == "string") {
        for (var p = oe.stack.split(`
`), y = c.stack.split(`
`), C = p.length - 1, M = y.length - 1; 1 <= C && 0 <= M && p[C] !== y[M]; ) M--;
        for (; 1 <= C && 0 <= M; C--, M--) if (p[C] !== y[M]) {
          if (C !== 1 || M !== 1)
            do
              if (C--, M--, 0 > M || p[C] !== y[M]) {
                var B = `
` + p[C].replace(" at new ", " at ");
                return n.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", n.displayName)), B;
              }
            while (1 <= C && 0 <= M);
          break;
        }
      }
    } finally {
      Te = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? ee(n) : "";
  }
  function Pe(n) {
    switch (n.tag) {
      case 5:
        return ee(n.type);
      case 16:
        return ee("Lazy");
      case 13:
        return ee("Suspense");
      case 19:
        return ee("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = xe(n.type, !1), n;
      case 11:
        return n = xe(n.type.render, !1), n;
      case 1:
        return n = xe(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ie(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case we:
        return "Portal";
      case be:
        return "Profiler";
      case q:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case De:
        return (n.displayName || "Context") + ".Consumer";
      case Oe:
        return (n._context.displayName || "Context") + ".Provider";
      case _e:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case le:
        return r = n.displayName || null, r !== null ? r : Ie(n.type) || "Memo";
      case me:
        r = n._payload, n = n._init;
        try {
          return Ie(n(r));
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
        return Ie(r);
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
  function Ke(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function vt(n) {
    var r = Ke(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, y = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(C) {
        c = "" + C, y.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(C) {
        c = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function ht(n) {
    n._valueTracker || (n._valueTracker = vt(n));
  }
  function Vt(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), c = "";
    return n && (c = Ke(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Me(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function xt(n, r) {
    var o = r.checked;
    return N({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function xn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, c = r.checked != null ? r.checked : r.defaultChecked;
    o = Fe(r.value != null ? r.value : o), n._wrapperState = { initialChecked: c, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function cn(n, r) {
    r = r.checked, r != null && Q(n, "checked", r, !1);
  }
  function wn(n, r) {
    cn(n, r);
    var o = Fe(r.value), c = r.type;
    if (o != null) c === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sr(n, r.type, o) : r.hasOwnProperty("defaultValue") && sr(n, r.type, Fe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Lt(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var c = r.type;
      if (!(c !== "submit" && c !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function sr(n, r, o) {
    (r !== "number" || Me(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var er = Array.isArray;
  function Ln(n, r, o, c) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++) r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++) p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && c && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Fe(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, c && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Er(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(d(91));
    return N({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Dr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(d(92));
        if (er(o)) {
          if (1 < o.length) throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Fe(o) };
  }
  function $n(n, r) {
    var o = Fe(r.value), c = Fe(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), c != null && (n.defaultValue = "" + c);
  }
  function tr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Wn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Yn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Wn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var un, br = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, c, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, c, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (un = un || document.createElement("div"), un.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = un.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function gr(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Cr = {
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
  Object.keys(Cr).forEach(function(n) {
    je.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Cr[r] = Cr[n];
    });
  });
  function $e(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Cr.hasOwnProperty(n) && Cr[n] ? ("" + r).trim() : r + "px";
  }
  function Tt(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var c = o.indexOf("--") === 0, p = $e(o, r[o], c);
      o === "float" && (o = "cssFloat"), c ? n.setProperty(o, p) : n[o] = p;
    }
  }
  var Yt = N({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Bt(n, r) {
    if (r) {
      if (Yt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(d(62));
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
  function qn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var qt = null, Bn = null, Qt = null;
  function Dt(n) {
    if (n = Ui(n)) {
      if (typeof qt != "function") throw Error(d(280));
      var r = n.stateNode;
      r && (r = yf(r), qt(n.stateNode, n.type, r));
    }
  }
  function Vn(n) {
    Bn ? Qt ? Qt.push(n) : Qt = [n] : Bn = n;
  }
  function lt() {
    if (Bn) {
      var n = Bn, r = Qt;
      if (Qt = Bn = null, Dt(n), r) for (n = 0; n < r.length; n++) Dt(r[n]);
    }
  }
  function jt(n, r) {
    return n(r);
  }
  function cr() {
  }
  var ea = !1;
  function We(n, r, o) {
    if (ea) return n(r, o);
    ea = !0;
    try {
      return jt(n, r, o);
    } finally {
      ea = !1, (Bn !== null || Qt !== null) && (cr(), lt());
    }
  }
  function ft(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var c = yf(o);
    if (c === null) return null;
    o = c[r];
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
        (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(d(231, r, typeof o));
    return o;
  }
  var mt = !1;
  if (g) try {
    var sn = {};
    Object.defineProperty(sn, "passive", { get: function() {
      mt = !0;
    } }), window.addEventListener("test", sn, sn), window.removeEventListener("test", sn, sn);
  } catch {
    mt = !1;
  }
  function kn(n, r, o, c, p, y, C, M, B) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, oe);
    } catch (Re) {
      this.onError(Re);
    }
  }
  var Mn = !1, jn = null, mn = !1, nr = null, j = { onError: function(n) {
    Mn = !0, jn = n;
  } };
  function Ee(n, r, o, c, p, y, C, M, B) {
    Mn = !1, jn = null, kn.apply(j, arguments);
  }
  function Ye(n, r, o, c, p, y, C, M, B) {
    if (Ee.apply(this, arguments), Mn) {
      if (Mn) {
        var oe = jn;
        Mn = !1, jn = null;
      } else throw Error(d(198));
      mn || (mn = !0, nr = oe);
    }
  }
  function qe(n) {
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
  function zt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function It(n) {
    if (qe(n) !== n) throw Error(d(188));
  }
  function At(n) {
    var r = n.alternate;
    if (!r) {
      if (r = qe(n), r === null) throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, c = r; ; ) {
      var p = o.return;
      if (p === null) break;
      var y = p.alternate;
      if (y === null) {
        if (c = p.return, c !== null) {
          o = c;
          continue;
        }
        break;
      }
      if (p.child === y.child) {
        for (y = p.child; y; ) {
          if (y === o) return It(p), n;
          if (y === c) return It(p), r;
          y = y.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== c.return) o = p, c = y;
      else {
        for (var C = !1, M = p.child; M; ) {
          if (M === o) {
            C = !0, o = p, c = y;
            break;
          }
          if (M === c) {
            C = !0, c = p, o = y;
            break;
          }
          M = M.sibling;
        }
        if (!C) {
          for (M = y.child; M; ) {
            if (M === o) {
              C = !0, o = y, c = p;
              break;
            }
            if (M === c) {
              C = !0, c = y, o = p;
              break;
            }
            M = M.sibling;
          }
          if (!C) throw Error(d(189));
        }
      }
      if (o.alternate !== c) throw Error(d(190));
    }
    if (o.tag !== 3) throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function Ve(n) {
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
  var pn = s.unstable_scheduleCallback, nn = s.unstable_cancelCallback, Ar = s.unstable_shouldYield, pa = s.unstable_requestPaint, Dn = s.unstable_now, va = s.unstable_getCurrentPriorityLevel, Os = s.unstable_ImmediatePriority, Ai = s.unstable_UserBlockingPriority, Pt = s.unstable_NormalPriority, Cl = s.unstable_LowPriority, eo = s.unstable_IdlePriority, Ho = null, ha = null;
  function ks(n) {
    if (ha && typeof ha.onCommitFiberRoot == "function") try {
      ha.onCommitFiberRoot(Ho, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var ta = Math.clz32 ? Math.clz32 : Ns, Ds = Math.log, As = Math.LN2;
  function Ns(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ds(n) / As | 0) | 0;
  }
  var xl = 64, mu = 4194304;
  function to(n) {
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
  function Ni(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var c = 0, p = n.suspendedLanes, y = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var M = C & ~p;
      M !== 0 ? c = to(M) : (y &= C, y !== 0 && (c = to(y)));
    } else C = o & ~p, C !== 0 ? c = to(C) : y !== 0 && (c = to(y));
    if (c === 0) return 0;
    if (r !== 0 && r !== c && !(r & p) && (p = c & -c, y = r & -r, p >= y || p === 16 && (y & 4194240) !== 0)) return r;
    if (c & 4 && (c |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= c; 0 < r; ) o = 31 - ta(r), p = 1 << o, c |= n[o], r &= ~p;
    return c;
  }
  function Ga(n, r) {
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
    for (var o = n.suspendedLanes, c = n.pingedLanes, p = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var C = 31 - ta(y), M = 1 << C, B = p[C];
      B === -1 ? (!(M & o) || M & c) && (p[C] = Ga(M, r)) : B <= r && (n.expiredLanes |= M), y &= ~M;
    }
  }
  function Li(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Rl() {
    var n = xl;
    return xl <<= 1, !(xl & 4194240) && (xl = 64), n;
  }
  function Tl(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Vo(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ta(r), n[r] = o;
  }
  function Ls(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - ta(o), y = 1 << p;
      r[p] = 0, c[p] = -1, n[p] = -1, o &= ~y;
    }
  }
  function Ms(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var c = 31 - ta(o), p = 1 << c;
      p & r | n[c] & r && (n[c] |= r), o &= ~p;
    }
  }
  var Gt = 0;
  function js(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var yu, Io, Us, Zt, gu, Ol = !1, Rt = [], yi = null, Gn = null, ma = null, Qa = /* @__PURE__ */ new Map(), $o = /* @__PURE__ */ new Map(), Un = [], Qn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function zs(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        yi = null;
        break;
      case "dragenter":
      case "dragleave":
        Gn = null;
        break;
      case "mouseover":
      case "mouseout":
        ma = null;
        break;
      case "pointerover":
      case "pointerout":
        Qa.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $o.delete(r.pointerId);
    }
  }
  function zr(n, r, o, c, p, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: c, nativeEvent: y, targetContainers: [p] }, r !== null && (r = Ui(r), r !== null && Io(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function ya(n, r, o, c, p) {
    switch (r) {
      case "focusin":
        return yi = zr(yi, n, r, o, c, p), !0;
      case "dragenter":
        return Gn = zr(Gn, n, r, o, c, p), !0;
      case "mouseover":
        return ma = zr(ma, n, r, o, c, p), !0;
      case "pointerover":
        var y = p.pointerId;
        return Qa.set(y, zr(Qa.get(y) || null, n, r, o, c, p)), !0;
      case "gotpointercapture":
        return y = p.pointerId, $o.set(y, zr($o.get(y) || null, n, r, o, c, p)), !0;
    }
    return !1;
  }
  function gi(n) {
    var r = po(n.target);
    if (r !== null) {
      var o = qe(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = zt(o), r !== null) {
            n.blockedOn = r, gu(n.priority, function() {
              Us(o);
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
  function Su(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = Eu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var c = new o.constructor(o.type, o);
        fn = c, o.target.dispatchEvent(c), fn = null;
      } else return r = Ui(o), r !== null && Io(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function kl(n, r, o) {
    Su(n) && o.delete(r);
  }
  function Dl() {
    Ol = !1, yi !== null && Su(yi) && (yi = null), Gn !== null && Su(Gn) && (Gn = null), ma !== null && Su(ma) && (ma = null), Qa.forEach(kl), $o.forEach(kl);
  }
  function Wo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ol || (Ol = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Dl)));
  }
  function Ka(n) {
    function r(p) {
      return Wo(p, n);
    }
    if (0 < Rt.length) {
      Wo(Rt[0], n);
      for (var o = 1; o < Rt.length; o++) {
        var c = Rt[o];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (yi !== null && Wo(yi, n), Gn !== null && Wo(Gn, n), ma !== null && Wo(ma, n), Qa.forEach(r), $o.forEach(r), o = 0; o < Un.length; o++) c = Un[o], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < Un.length && (o = Un[0], o.blockedOn === null); ) gi(o), o.blockedOn === null && Un.shift();
  }
  var no = he.ReactCurrentBatchConfig, wu = !0;
  function ro(n, r, o, c) {
    var p = Gt, y = no.transition;
    no.transition = null;
    try {
      Gt = 1, Mi(n, r, o, c);
    } finally {
      Gt = p, no.transition = y;
    }
  }
  function _u(n, r, o, c) {
    var p = Gt, y = no.transition;
    no.transition = null;
    try {
      Gt = 4, Mi(n, r, o, c);
    } finally {
      Gt = p, no.transition = y;
    }
  }
  function Mi(n, r, o, c) {
    if (wu) {
      var p = Eu(n, r, o, c);
      if (p === null) pp(n, r, c, ao, o), zs(n, c);
      else if (ya(p, n, r, o, c)) c.stopPropagation();
      else if (zs(n, c), r & 4 && -1 < Qn.indexOf(n)) {
        for (; p !== null; ) {
          var y = Ui(p);
          if (y !== null && yu(y), y = Eu(n, r, o, c), y === null && pp(n, r, c, ao, o), y === p) break;
          p = y;
        }
        p !== null && c.stopPropagation();
      } else pp(n, r, c, null, o);
    }
  }
  var ao = null;
  function Eu(n, r, o, c) {
    if (ao = null, n = qn(c), n = po(n), n !== null) if (r = qe(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = zt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ao = n, null;
  }
  function Ps(n) {
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
        switch (va()) {
          case Os:
            return 1;
          case Ai:
            return 4;
          case Pt:
          case Cl:
            return 16;
          case eo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Si = null, bu = null, b = null;
  function z() {
    if (b) return b;
    var n, r = bu, o = r.length, c, p = "value" in Si ? Si.value : Si.textContent, y = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++) ;
    var C = o - n;
    for (c = 1; c <= C && r[o - c] === p[y - c]; c++) ;
    return b = p.slice(n, 1 < c ? 1 - c : void 0);
  }
  function ne(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function se() {
    return !0;
  }
  function Ue() {
    return !1;
  }
  function ot(n) {
    function r(o, c, p, y, C) {
      this._reactName = o, this._targetInst = p, this.type = c, this.nativeEvent = y, this.target = C, this.currentTarget = null;
      for (var M in n) n.hasOwnProperty(M) && (o = n[M], this[M] = o ? o(y) : y[M]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? se : Ue, this.isPropagationStopped = Ue, this;
    }
    return N(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = se);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = se);
    }, persist: function() {
    }, isPersistent: se }), r;
  }
  var Ze = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, bt = ot(Ze), Ft = N({}, Ze, { view: 0, detail: 0 }), vn = ot(Ft), yn, gn, Sn, zn = N({}, Ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: lf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Sn && (Sn && n.type === "mousemove" ? (yn = n.screenX - Sn.screenX, gn = n.screenY - Sn.screenY) : gn = yn = 0, Sn = n), yn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : gn;
  } }), en = ot(zn), Yo = N({}, zn, { dataTransfer: 0 }), Cu = ot(Yo), Fs = N({}, Ft, { relatedTarget: 0 }), Hs = ot(Fs), io = N({}, Ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bs = ot(io), Vs = N({}, Ze, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), tp = ot(Vs), zg = N({}, Ze, { data: 0 }), mh = ot(zg), yh = {
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
  }, np = {
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
  }, gh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = gh[n]) ? !!r[n] : !1;
  }
  function lf() {
    return Sh;
  }
  var Pg = N({}, Ft, { key: function(n) {
    if (n.key) {
      var r = yh[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = ne(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? np[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: lf, charCode: function(n) {
    return n.type === "keypress" ? ne(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ne(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), oo = ot(Pg), Fg = N({}, zn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uf = ot(Fg), rp = N({}, Ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lf }), ap = ot(rp), Hg = N({}, Ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sf = ot(Hg), wh = N({}, zn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ga = ot(wh), lo = [9, 13, 27, 32], rr = g && "CompositionEvent" in window, ja = null;
  g && "documentMode" in document && (ja = document.documentMode);
  var ip = g && "TextEvent" in window && !ja, Is = g && (!rr || ja && 8 < ja && 11 >= ja), _h = " ", xu = !1;
  function Eh(n, r) {
    switch (n) {
      case "keyup":
        return lo.indexOf(r.keyCode) !== -1;
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
  function bh(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var qo = !1;
  function Bg(n, r) {
    switch (n) {
      case "compositionend":
        return bh(r);
      case "keypress":
        return r.which !== 32 ? null : (xu = !0, _h);
      case "textInput":
        return n = r.data, n === _h && xu ? null : n;
      default:
        return null;
    }
  }
  function Vg(n, r) {
    if (qo) return n === "compositionend" || !rr && Eh(n, r) ? (n = z(), b = bu = Si = null, qo = !1, n) : null;
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
        return Is && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Ig = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function op(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Ig[n.type] : r === "textarea";
  }
  function Ch(n, r, o, c) {
    Vn(c), r = hf(r, "onChange"), 0 < r.length && (o = new bt("onChange", "change", null, o, c), n.push({ event: o, listeners: r }));
  }
  var $s = null, Ws = null;
  function xh(n) {
    Bh(n, 0);
  }
  function uo(n) {
    var r = ku(n);
    if (Vt(r)) return n;
  }
  function lp(n, r) {
    if (n === "change") return r;
  }
  var up = !1;
  if (g) {
    var cf;
    if (g) {
      var sp = "oninput" in document;
      if (!sp) {
        var Rh = document.createElement("div");
        Rh.setAttribute("oninput", "return;"), sp = typeof Rh.oninput == "function";
      }
      cf = sp;
    } else cf = !1;
    up = cf && (!document.documentMode || 9 < document.documentMode);
  }
  function Th() {
    $s && ($s.detachEvent("onpropertychange", Oh), Ws = $s = null);
  }
  function Oh(n) {
    if (n.propertyName === "value" && uo(Ws)) {
      var r = [];
      Ch(r, Ws, n, qn(n)), We(xh, r);
    }
  }
  function $g(n, r, o) {
    n === "focusin" ? (Th(), $s = r, Ws = o, $s.attachEvent("onpropertychange", Oh)) : n === "focusout" && Th();
  }
  function Wg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return uo(Ws);
  }
  function Yg(n, r) {
    if (n === "click") return uo(r);
  }
  function qg(n, r) {
    if (n === "input" || n === "change") return uo(r);
  }
  function kh(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var wi = typeof Object.is == "function" ? Object.is : kh;
  function Ru(n, r) {
    if (wi(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), c = Object.keys(r);
    if (o.length !== c.length) return !1;
    for (c = 0; c < o.length; c++) {
      var p = o[c];
      if (!R.call(r, p) || !wi(n[p], r[p])) return !1;
    }
    return !0;
  }
  function Dh(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Ah(n, r) {
    var o = Dh(n);
    n = 0;
    for (var c; o; ) {
      if (o.nodeType === 3) {
        if (c = n + o.textContent.length, n <= r && c >= r) return { node: o, offset: r - n };
        n = c;
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
      o = Dh(o);
    }
  }
  function Nh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Nh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Lh() {
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
  function Ys(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Al(n) {
    var r = Lh(), o = n.focusedElem, c = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Nh(o.ownerDocument.documentElement, o)) {
      if (c !== null && Ys(o)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, y = Math.min(c.start, p);
          c = c.end === void 0 ? y : Math.min(c.end, p), !n.extend && y > c && (p = c, c = y, y = p), p = Ah(o, y);
          var C = Ah(
            o,
            c
          );
          p && C && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), y > c ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ff = g && "documentMode" in document && 11 >= document.documentMode, Nl = null, Go = null, qs = null, cp = !1;
  function Mh(n, r, o) {
    var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    cp || Nl == null || Nl !== Me(c) || (c = Nl, "selectionStart" in c && Ys(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), qs && Ru(qs, c) || (qs = c, c = hf(Go, "onSelect"), 0 < c.length && (r = new bt("onSelect", "select", null, r, o), n.push({ event: r, listeners: c }), r.target = Nl)));
  }
  function df(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Tu = { animationend: df("Animation", "AnimationEnd"), animationiteration: df("Animation", "AnimationIteration"), animationstart: df("Animation", "AnimationStart"), transitionend: df("Transition", "TransitionEnd") }, pf = {}, jh = {};
  g && (jh = document.createElement("div").style, "AnimationEvent" in window || (delete Tu.animationend.animation, delete Tu.animationiteration.animation, delete Tu.animationstart.animation), "TransitionEvent" in window || delete Tu.transitionend.transition);
  function Gs(n) {
    if (pf[n]) return pf[n];
    if (!Tu[n]) return n;
    var r = Tu[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in jh) return pf[n] = r[o];
    return n;
  }
  var Kr = Gs("animationend"), fp = Gs("animationiteration"), Uh = Gs("animationstart"), zh = Gs("transitionend"), Ph = /* @__PURE__ */ new Map(), Fh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qo(n, r) {
    Ph.set(n, r), w(r, [n]);
  }
  for (var vf = 0; vf < Fh.length; vf++) {
    var Qs = Fh[vf], Ks = Qs.toLowerCase(), Gg = Qs[0].toUpperCase() + Qs.slice(1);
    Qo(Ks, "on" + Gg);
  }
  Qo(Kr, "onAnimationEnd"), Qo(fp, "onAnimationIteration"), Qo(Uh, "onAnimationStart"), Qo("dblclick", "onDoubleClick"), Qo("focusin", "onFocus"), Qo("focusout", "onBlur"), Qo(zh, "onTransitionEnd"), _("onMouseEnter", ["mouseout", "mouseover"]), _("onMouseLeave", ["mouseout", "mouseover"]), _("onPointerEnter", ["pointerout", "pointerover"]), _("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var so = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qg = new Set("cancel close invalid load scroll toggle".split(" ").concat(so));
  function Hh(n, r, o) {
    var c = n.type || "unknown-event";
    n.currentTarget = o, Ye(c, r, void 0, n), n.currentTarget = null;
  }
  function Bh(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var c = n[o], p = c.event;
      c = c.listeners;
      e: {
        var y = void 0;
        if (r) for (var C = c.length - 1; 0 <= C; C--) {
          var M = c[C], B = M.instance, oe = M.currentTarget;
          if (M = M.listener, B !== y && p.isPropagationStopped()) break e;
          Hh(p, M, oe), y = B;
        }
        else for (C = 0; C < c.length; C++) {
          if (M = c[C], B = M.instance, oe = M.currentTarget, M = M.listener, B !== y && p.isPropagationStopped()) break e;
          Hh(p, M, oe), y = B;
        }
      }
    }
    if (mn) throw n = nr, mn = !1, nr = null, n;
  }
  function Tn(n, r) {
    var o = r[_p];
    o === void 0 && (o = r[_p] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    o.has(c) || (dp(r, n, 2, !1), o.add(c));
  }
  function Xs(n, r, o) {
    var c = 0;
    r && (c |= 4), dp(o, n, c, r);
  }
  var co = "_reactListening" + Math.random().toString(36).slice(2);
  function ji(n) {
    if (!n[co]) {
      n[co] = !0, v.forEach(function(o) {
        o !== "selectionchange" && (Qg.has(o) || Xs(o, !1, n), Xs(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[co] || (r[co] = !0, Xs("selectionchange", !1, r));
    }
  }
  function dp(n, r, o, c) {
    switch (Ps(r)) {
      case 1:
        var p = ro;
        break;
      case 4:
        p = _u;
        break;
      default:
        p = Mi;
    }
    o = p.bind(null, r, o, n), p = void 0, !mt || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), c ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function pp(n, r, o, c, p) {
    var y = c;
    if (!(r & 1) && !(r & 2) && c !== null) e: for (; ; ) {
      if (c === null) return;
      var C = c.tag;
      if (C === 3 || C === 4) {
        var M = c.stateNode.containerInfo;
        if (M === p || M.nodeType === 8 && M.parentNode === p) break;
        if (C === 4) for (C = c.return; C !== null; ) {
          var B = C.tag;
          if ((B === 3 || B === 4) && (B = C.stateNode.containerInfo, B === p || B.nodeType === 8 && B.parentNode === p)) return;
          C = C.return;
        }
        for (; M !== null; ) {
          if (C = po(M), C === null) return;
          if (B = C.tag, B === 5 || B === 6) {
            c = y = C;
            continue e;
          }
          M = M.parentNode;
        }
      }
      c = c.return;
    }
    We(function() {
      var oe = y, Re = qn(o), ke = [];
      e: {
        var Ce = Ph.get(n);
        if (Ce !== void 0) {
          var Xe = bt, rt = n;
          switch (n) {
            case "keypress":
              if (ne(o) === 0) break e;
            case "keydown":
            case "keyup":
              Xe = oo;
              break;
            case "focusin":
              rt = "focus", Xe = Hs;
              break;
            case "focusout":
              rt = "blur", Xe = Hs;
              break;
            case "beforeblur":
            case "afterblur":
              Xe = Hs;
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
              Xe = en;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Xe = Cu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Xe = ap;
              break;
            case Kr:
            case fp:
            case Uh:
              Xe = Bs;
              break;
            case zh:
              Xe = sf;
              break;
            case "scroll":
              Xe = vn;
              break;
            case "wheel":
              Xe = ga;
              break;
            case "copy":
            case "cut":
            case "paste":
              Xe = tp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Xe = uf;
          }
          var ut = (r & 4) !== 0, mr = !ut && n === "scroll", K = ut ? Ce !== null ? Ce + "Capture" : null : Ce;
          ut = [];
          for (var I = oe, Z; I !== null; ) {
            Z = I;
            var ze = Z.stateNode;
            if (Z.tag === 5 && ze !== null && (Z = ze, K !== null && (ze = ft(I, K), ze != null && ut.push(Ou(I, ze, Z)))), mr) break;
            I = I.return;
          }
          0 < ut.length && (Ce = new Xe(Ce, rt, null, o, Re), ke.push({ event: Ce, listeners: ut }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Ce = n === "mouseover" || n === "pointerover", Xe = n === "mouseout" || n === "pointerout", Ce && o !== fn && (rt = o.relatedTarget || o.fromElement) && (po(rt) || rt[_i])) break e;
          if ((Xe || Ce) && (Ce = Re.window === Re ? Re : (Ce = Re.ownerDocument) ? Ce.defaultView || Ce.parentWindow : window, Xe ? (rt = o.relatedTarget || o.toElement, Xe = oe, rt = rt ? po(rt) : null, rt !== null && (mr = qe(rt), rt !== mr || rt.tag !== 5 && rt.tag !== 6) && (rt = null)) : (Xe = null, rt = oe), Xe !== rt)) {
            if (ut = en, ze = "onMouseLeave", K = "onMouseEnter", I = "mouse", (n === "pointerout" || n === "pointerover") && (ut = uf, ze = "onPointerLeave", K = "onPointerEnter", I = "pointer"), mr = Xe == null ? Ce : ku(Xe), Z = rt == null ? Ce : ku(rt), Ce = new ut(ze, I + "leave", Xe, o, Re), Ce.target = mr, Ce.relatedTarget = Z, ze = null, po(Re) === oe && (ut = new ut(K, I + "enter", rt, o, Re), ut.target = Z, ut.relatedTarget = mr, ze = ut), mr = ze, Xe && rt) t: {
              for (ut = Xe, K = rt, I = 0, Z = ut; Z; Z = Ll(Z)) I++;
              for (Z = 0, ze = K; ze; ze = Ll(ze)) Z++;
              for (; 0 < I - Z; ) ut = Ll(ut), I--;
              for (; 0 < Z - I; ) K = Ll(K), Z--;
              for (; I--; ) {
                if (ut === K || K !== null && ut === K.alternate) break t;
                ut = Ll(ut), K = Ll(K);
              }
              ut = null;
            }
            else ut = null;
            Xe !== null && vp(ke, Ce, Xe, ut, !1), rt !== null && mr !== null && vp(ke, mr, rt, ut, !0);
          }
        }
        e: {
          if (Ce = oe ? ku(oe) : window, Xe = Ce.nodeName && Ce.nodeName.toLowerCase(), Xe === "select" || Xe === "input" && Ce.type === "file") var ct = lp;
          else if (op(Ce)) if (up) ct = qg;
          else {
            ct = Wg;
            var _t = $g;
          }
          else (Xe = Ce.nodeName) && Xe.toLowerCase() === "input" && (Ce.type === "checkbox" || Ce.type === "radio") && (ct = Yg);
          if (ct && (ct = ct(n, oe))) {
            Ch(ke, ct, o, Re);
            break e;
          }
          _t && _t(n, Ce, oe), n === "focusout" && (_t = Ce._wrapperState) && _t.controlled && Ce.type === "number" && sr(Ce, "number", Ce.value);
        }
        switch (_t = oe ? ku(oe) : window, n) {
          case "focusin":
            (op(_t) || _t.contentEditable === "true") && (Nl = _t, Go = oe, qs = null);
            break;
          case "focusout":
            qs = Go = Nl = null;
            break;
          case "mousedown":
            cp = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cp = !1, Mh(ke, o, Re);
            break;
          case "selectionchange":
            if (ff) break;
          case "keydown":
          case "keyup":
            Mh(ke, o, Re);
        }
        var at;
        if (rr) e: {
          switch (n) {
            case "compositionstart":
              var Et = "onCompositionStart";
              break e;
            case "compositionend":
              Et = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Et = "onCompositionUpdate";
              break e;
          }
          Et = void 0;
        }
        else qo ? Eh(n, o) && (Et = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Et = "onCompositionStart");
        Et && (Is && o.locale !== "ko" && (qo || Et !== "onCompositionStart" ? Et === "onCompositionEnd" && qo && (at = z()) : (Si = Re, bu = "value" in Si ? Si.value : Si.textContent, qo = !0)), _t = hf(oe, Et), 0 < _t.length && (Et = new mh(Et, n, null, o, Re), ke.push({ event: Et, listeners: _t }), at ? Et.data = at : (at = bh(o), at !== null && (Et.data = at)))), (at = ip ? Bg(n, o) : Vg(n, o)) && (oe = hf(oe, "onBeforeInput"), 0 < oe.length && (Re = new mh("onBeforeInput", "beforeinput", null, o, Re), ke.push({ event: Re, listeners: oe }), Re.data = at));
      }
      Bh(ke, r);
    });
  }
  function Ou(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function hf(n, r) {
    for (var o = r + "Capture", c = []; n !== null; ) {
      var p = n, y = p.stateNode;
      p.tag === 5 && y !== null && (p = y, y = ft(n, o), y != null && c.unshift(Ou(n, y, p)), y = ft(n, r), y != null && c.push(Ou(n, y, p))), n = n.return;
    }
    return c;
  }
  function Ll(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function vp(n, r, o, c, p) {
    for (var y = r._reactName, C = []; o !== null && o !== c; ) {
      var M = o, B = M.alternate, oe = M.stateNode;
      if (B !== null && B === c) break;
      M.tag === 5 && oe !== null && (M = oe, p ? (B = ft(o, y), B != null && C.unshift(Ou(o, B, M))) : p || (B = ft(o, y), B != null && C.push(Ou(o, B, M)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Vh = /\r\n?/g, hp = /\u0000|\uFFFD/g;
  function Ih(n) {
    return (typeof n == "string" ? n : "" + n).replace(Vh, `
`).replace(hp, "");
  }
  function Js(n, r, o) {
    if (r = Ih(r), Ih(n) !== r && o) throw Error(d(425));
  }
  function mf() {
  }
  var mp = null, yp = null;
  function Ml(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Zs = typeof setTimeout == "function" ? setTimeout : void 0, ec = typeof clearTimeout == "function" ? clearTimeout : void 0, gp = typeof Promise == "function" ? Promise : void 0, $h = typeof queueMicrotask == "function" ? queueMicrotask : typeof gp < "u" ? function(n) {
    return gp.resolve(null).then(n).catch(Sp);
  } : Zs;
  function Sp(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function wp(n, r) {
    var o = r, c = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8) if (o = p.data, o === "/$") {
        if (c === 0) {
          n.removeChild(p), Ka(r);
          return;
        }
        c--;
      } else o !== "$" && o !== "$?" && o !== "$!" || c++;
      o = p;
    } while (o);
    Ka(r);
  }
  function Ua(n) {
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
  function tc(n) {
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
  var fo = Math.random().toString(36).slice(2), Xa = "__reactFiber$" + fo, nc = "__reactProps$" + fo, _i = "__reactContainer$" + fo, _p = "__reactEvents$" + fo, Kg = "__reactListeners$" + fo, Xg = "__reactHandles$" + fo;
  function po(n) {
    var r = n[Xa];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[_i] || o[Xa]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = tc(n); n !== null; ) {
          if (o = n[Xa]) return o;
          n = tc(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Ui(n) {
    return n = n[Xa] || n[_i], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ku(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(d(33));
  }
  function yf(n) {
    return n[nc] || null;
  }
  var yt = [], Ei = -1;
  function On(n) {
    return { current: n };
  }
  function st(n) {
    0 > Ei || (n.current = yt[Ei], yt[Ei] = null, Ei--);
  }
  function rn(n, r) {
    Ei++, yt[Ei] = n.current, n.current = r;
  }
  var Ja = {}, Nr = On(Ja), Ot = On(!1), na = Ja;
  function za(n, r) {
    var o = n.type.contextTypes;
    if (!o) return Ja;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === r) return c.__reactInternalMemoizedMaskedChildContext;
    var p = {}, y;
    for (y in o) p[y] = r[y];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function Sr(n) {
    return n = n.childContextTypes, n != null;
  }
  function Sa() {
    st(Ot), st(Nr);
  }
  function zi(n, r, o) {
    if (Nr.current !== Ja) throw Error(d(168));
    rn(Nr, r), rn(Ot, o);
  }
  function Ko(n, r, o) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function") return o;
    c = c.getChildContext();
    for (var p in c) if (!(p in r)) throw Error(d(108, Le(n) || "Unknown", p));
    return N({}, o, c);
  }
  function jl(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ja, na = Nr.current, rn(Nr, n), rn(Ot, Ot.current), !0;
  }
  function Wh(n, r, o) {
    var c = n.stateNode;
    if (!c) throw Error(d(169));
    o ? (n = Ko(n, r, na), c.__reactInternalMemoizedMergedChildContext = n, st(Ot), st(Nr), rn(Nr, n)) : st(Ot), rn(Ot, o);
  }
  var vo = null, Xo = !1, Pr = !1;
  function gf(n) {
    vo === null ? vo = [n] : vo.push(n);
  }
  function Yh(n) {
    Xo = !0, gf(n);
  }
  function Pi() {
    if (!Pr && vo !== null) {
      Pr = !0;
      var n = 0, r = Gt;
      try {
        var o = vo;
        for (Gt = 1; n < o.length; n++) {
          var c = o[n];
          do
            c = c(!0);
          while (c !== null);
        }
        vo = null, Xo = !1;
      } catch (p) {
        throw vo !== null && (vo = vo.slice(n + 1)), pn(Os, Pi), p;
      } finally {
        Gt = r, Pr = !1;
      }
    }
    return null;
  }
  var Za = [], Jo = 0, ei = null, Ul = 0, wa = [], _a = 0, bi = null, Ea = 1, Fr = "";
  function zl(n, r) {
    Za[Jo++] = Ul, Za[Jo++] = ei, ei = n, Ul = r;
  }
  function Zo(n, r, o) {
    wa[_a++] = Ea, wa[_a++] = Fr, wa[_a++] = bi, bi = n;
    var c = Ea;
    n = Fr;
    var p = 32 - ta(c) - 1;
    c &= ~(1 << p), o += 1;
    var y = 32 - ta(r) + p;
    if (30 < y) {
      var C = p - p % 5;
      y = (c & (1 << C) - 1).toString(32), c >>= C, p -= C, Ea = 1 << 32 - ta(r) + p | o << p | c, Fr = y + n;
    } else Ea = 1 << y | o << p | c, Fr = n;
  }
  function Sf(n) {
    n.return !== null && (zl(n, 1), Zo(n, 1, 0));
  }
  function wf(n) {
    for (; n === ei; ) ei = Za[--Jo], Za[Jo] = null, Ul = Za[--Jo], Za[Jo] = null;
    for (; n === bi; ) bi = wa[--_a], wa[_a] = null, Fr = wa[--_a], wa[_a] = null, Ea = wa[--_a], wa[_a] = null;
  }
  var Pa = null, Fa = null, Pn = !1, ti = null;
  function Ep(n, r) {
    var o = ui(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function bp(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Pa = n, Fa = Ua(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Pa = n, Fa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = bi !== null ? { id: Ea, overflow: Fr } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ui(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Pa = n, Fa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Cp(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function _f(n) {
    if (Pn) {
      var r = Fa;
      if (r) {
        var o = r;
        if (!bp(n, r)) {
          if (Cp(n)) throw Error(d(418));
          r = Ua(o.nextSibling);
          var c = Pa;
          r && bp(n, r) ? Ep(c, o) : (n.flags = n.flags & -4097 | 2, Pn = !1, Pa = n);
        }
      } else {
        if (Cp(n)) throw Error(d(418));
        n.flags = n.flags & -4097 | 2, Pn = !1, Pa = n;
      }
    }
  }
  function xp(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Pa = n;
  }
  function Ef(n) {
    if (n !== Pa) return !1;
    if (!Pn) return xp(n), Pn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ml(n.type, n.memoizedProps)), r && (r = Fa)) {
      if (Cp(n)) throw qh(), Error(d(418));
      for (; r; ) Ep(n, r), r = Ua(r.nextSibling);
    }
    if (xp(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Fa = Ua(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Fa = null;
      }
    } else Fa = Pa ? Ua(n.stateNode.nextSibling) : null;
    return !0;
  }
  function qh() {
    for (var n = Fa; n; ) n = Ua(n.nextSibling);
  }
  function Du() {
    Fa = Pa = null, Pn = !1;
  }
  function wr(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  var Jg = he.ReactCurrentBatchConfig;
  function ba(n, r) {
    if (n && n.defaultProps) {
      r = N({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var Au = On(null), Fi = null, Nu = null, rc = null;
  function Rp() {
    rc = Nu = Fi = null;
  }
  function Tp(n) {
    var r = Au.current;
    st(Au), n._currentValue = r;
  }
  function el(n, r, o) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, c !== null && (c.childLanes |= r)) : c !== null && (c.childLanes & r) !== r && (c.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function fr(n, r) {
    Fi = n, rc = Nu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Ra = !0), n.firstContext = null);
  }
  function Be(n) {
    var r = n._currentValue;
    if (rc !== n) if (n = { context: n, memoizedValue: r, next: null }, Nu === null) {
      if (Fi === null) throw Error(d(308));
      Nu = n, Fi.dependencies = { lanes: 0, firstContext: n };
    } else Nu = Nu.next = n;
    return r;
  }
  var Xr = null;
  function Ha(n) {
    Xr === null ? Xr = [n] : Xr.push(n);
  }
  function Gh(n, r, o, c) {
    var p = r.interleaved;
    return p === null ? (o.next = o, Ha(r)) : (o.next = p.next, p.next = o), r.interleaved = o, ho(n, c);
  }
  function ho(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var tl = !1;
  function Op(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Qh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function An(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function nl(n, r, o) {
    var c = n.updateQueue;
    if (c === null) return null;
    if (c = c.shared, $t & 2) {
      var p = c.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), c.pending = r, ho(n, o);
    }
    return p = c.interleaved, p === null ? (r.next = r, Ha(c)) : (r.next = p.next, p.next = r), c.interleaved = r, ho(n, o);
  }
  function bf(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, Ms(n, o);
    }
  }
  function Kh(n, r) {
    var o = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, o === c)) {
      var p = null, y = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          y === null ? p = y = C : y = y.next = C, o = o.next;
        } while (o !== null);
        y === null ? p = y = r : y = y.next = r;
      } else p = y = r;
      o = { baseState: c.baseState, firstBaseUpdate: p, lastBaseUpdate: y, shared: c.shared, effects: c.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function ac(n, r, o, c) {
    var p = n.updateQueue;
    tl = !1;
    var y = p.firstBaseUpdate, C = p.lastBaseUpdate, M = p.shared.pending;
    if (M !== null) {
      p.shared.pending = null;
      var B = M, oe = B.next;
      B.next = null, C === null ? y = oe : C.next = oe, C = B;
      var Re = n.alternate;
      Re !== null && (Re = Re.updateQueue, M = Re.lastBaseUpdate, M !== C && (M === null ? Re.firstBaseUpdate = oe : M.next = oe, Re.lastBaseUpdate = B));
    }
    if (y !== null) {
      var ke = p.baseState;
      C = 0, Re = oe = B = null, M = y;
      do {
        var Ce = M.lane, Xe = M.eventTime;
        if ((c & Ce) === Ce) {
          Re !== null && (Re = Re.next = {
            eventTime: Xe,
            lane: 0,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          });
          e: {
            var rt = n, ut = M;
            switch (Ce = r, Xe = o, ut.tag) {
              case 1:
                if (rt = ut.payload, typeof rt == "function") {
                  ke = rt.call(Xe, ke, Ce);
                  break e;
                }
                ke = rt;
                break e;
              case 3:
                rt.flags = rt.flags & -65537 | 128;
              case 0:
                if (rt = ut.payload, Ce = typeof rt == "function" ? rt.call(Xe, ke, Ce) : rt, Ce == null) break e;
                ke = N({}, ke, Ce);
                break e;
              case 2:
                tl = !0;
            }
          }
          M.callback !== null && M.lane !== 0 && (n.flags |= 64, Ce = p.effects, Ce === null ? p.effects = [M] : Ce.push(M));
        } else Xe = { eventTime: Xe, lane: Ce, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, Re === null ? (oe = Re = Xe, B = ke) : Re = Re.next = Xe, C |= Ce;
        if (M = M.next, M === null) {
          if (M = p.shared.pending, M === null) break;
          Ce = M, M = Ce.next, Ce.next = null, p.lastBaseUpdate = Ce, p.shared.pending = null;
        }
      } while (!0);
      if (Re === null && (B = ke), p.baseState = B, p.firstBaseUpdate = oe, p.lastBaseUpdate = Re, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          C |= p.lane, p = p.next;
        while (p !== r);
      } else y === null && (p.shared.lanes = 0);
      Ql |= C, n.lanes = C, n.memoizedState = ke;
    }
  }
  function Lu(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var c = n[r], p = c.callback;
      if (p !== null) {
        if (c.callback = null, c = o, typeof p != "function") throw Error(d(191, p));
        p.call(c);
      }
    }
  }
  var Pl = new l.Component().refs;
  function kp(n, r, o, c) {
    r = n.memoizedState, o = o(c, r), o = o == null ? r : N({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Cf = { isMounted: function(n) {
    return (n = n._reactInternals) ? qe(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var c = jr(), p = So(n), y = An(c, p);
    y.payload = r, o != null && (y.callback = o), r = nl(n, y, p), r !== null && (Xn(r, n, p, c), bf(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var c = jr(), p = So(n), y = An(c, p);
    y.tag = 1, y.payload = r, o != null && (y.callback = o), r = nl(n, y, p), r !== null && (Xn(r, n, p, c), bf(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = jr(), c = So(n), p = An(o, c);
    p.tag = 2, r != null && (p.callback = r), r = nl(n, p, c), r !== null && (Xn(r, n, c, o), bf(r, n, c));
  } };
  function Xh(n, r, o, c, p, y, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, y, C) : r.prototype && r.prototype.isPureReactComponent ? !Ru(o, c) || !Ru(p, y) : !0;
  }
  function Jh(n, r, o) {
    var c = !1, p = Ja, y = r.contextType;
    return typeof y == "object" && y !== null ? y = Be(y) : (p = Sr(r) ? na : Nr.current, c = r.contextTypes, y = (c = c != null) ? za(n, p) : Ja), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Cf, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function Zh(n, r, o, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, c), r.state !== n && Cf.enqueueReplaceState(r, r.state, null);
  }
  function Dp(n, r, o, c) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = Pl, Op(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? p.context = Be(y) : (y = Sr(r) ? na : Nr.current, p.context = za(n, y)), p.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (kp(n, r, y, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && Cf.enqueueReplaceState(p, p.state, null), ac(n, o, p, c), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Mu(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(d(309));
          var c = o.stateNode;
        }
        if (!c) throw Error(d(147, n));
        var p = c, y = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(C) {
          var M = p.refs;
          M === Pl && (M = p.refs = {}), C === null ? delete M[y] : M[y] = C;
        }, r._stringRef = y, r);
      }
      if (typeof n != "string") throw Error(d(284));
      if (!o._owner) throw Error(d(290, n));
    }
    return n;
  }
  function ic(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function em(n) {
    var r = n._init;
    return r(n._payload);
  }
  function tm(n) {
    function r(K, I) {
      if (n) {
        var Z = K.deletions;
        Z === null ? (K.deletions = [I], K.flags |= 16) : Z.push(I);
      }
    }
    function o(K, I) {
      if (!n) return null;
      for (; I !== null; ) r(K, I), I = I.sibling;
      return null;
    }
    function c(K, I) {
      for (K = /* @__PURE__ */ new Map(); I !== null; ) I.key !== null ? K.set(I.key, I) : K.set(I.index, I), I = I.sibling;
      return K;
    }
    function p(K, I) {
      return K = cl(K, I), K.index = 0, K.sibling = null, K;
    }
    function y(K, I, Z) {
      return K.index = Z, n ? (Z = K.alternate, Z !== null ? (Z = Z.index, Z < I ? (K.flags |= 2, I) : Z) : (K.flags |= 2, I)) : (K.flags |= 1048576, I);
    }
    function C(K) {
      return n && K.alternate === null && (K.flags |= 2), K;
    }
    function M(K, I, Z, ze) {
      return I === null || I.tag !== 6 ? (I = id(Z, K.mode, ze), I.return = K, I) : (I = p(I, Z), I.return = K, I);
    }
    function B(K, I, Z, ze) {
      var ct = Z.type;
      return ct === He ? Re(K, I, Z.props.children, ze, Z.key) : I !== null && (I.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === me && em(ct) === I.type) ? (ze = p(I, Z.props), ze.ref = Mu(K, I, Z), ze.return = K, ze) : (ze = rd(Z.type, Z.key, Z.props, null, K.mode, ze), ze.ref = Mu(K, I, Z), ze.return = K, ze);
    }
    function oe(K, I, Z, ze) {
      return I === null || I.tag !== 4 || I.stateNode.containerInfo !== Z.containerInfo || I.stateNode.implementation !== Z.implementation ? (I = Cc(Z, K.mode, ze), I.return = K, I) : (I = p(I, Z.children || []), I.return = K, I);
    }
    function Re(K, I, Z, ze, ct) {
      return I === null || I.tag !== 7 ? (I = Zl(Z, K.mode, ze, ct), I.return = K, I) : (I = p(I, Z), I.return = K, I);
    }
    function ke(K, I, Z) {
      if (typeof I == "string" && I !== "" || typeof I == "number") return I = id("" + I, K.mode, Z), I.return = K, I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case G:
            return Z = rd(I.type, I.key, I.props, null, K.mode, Z), Z.ref = Mu(K, null, I), Z.return = K, Z;
          case we:
            return I = Cc(I, K.mode, Z), I.return = K, I;
          case me:
            var ze = I._init;
            return ke(K, ze(I._payload), Z);
        }
        if (er(I) || ie(I)) return I = Zl(I, K.mode, Z, null), I.return = K, I;
        ic(K, I);
      }
      return null;
    }
    function Ce(K, I, Z, ze) {
      var ct = I !== null ? I.key : null;
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") return ct !== null ? null : M(K, I, "" + Z, ze);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case G:
            return Z.key === ct ? B(K, I, Z, ze) : null;
          case we:
            return Z.key === ct ? oe(K, I, Z, ze) : null;
          case me:
            return ct = Z._init, Ce(
              K,
              I,
              ct(Z._payload),
              ze
            );
        }
        if (er(Z) || ie(Z)) return ct !== null ? null : Re(K, I, Z, ze, null);
        ic(K, Z);
      }
      return null;
    }
    function Xe(K, I, Z, ze, ct) {
      if (typeof ze == "string" && ze !== "" || typeof ze == "number") return K = K.get(Z) || null, M(I, K, "" + ze, ct);
      if (typeof ze == "object" && ze !== null) {
        switch (ze.$$typeof) {
          case G:
            return K = K.get(ze.key === null ? Z : ze.key) || null, B(I, K, ze, ct);
          case we:
            return K = K.get(ze.key === null ? Z : ze.key) || null, oe(I, K, ze, ct);
          case me:
            var _t = ze._init;
            return Xe(K, I, Z, _t(ze._payload), ct);
        }
        if (er(ze) || ie(ze)) return K = K.get(Z) || null, Re(I, K, ze, ct, null);
        ic(I, ze);
      }
      return null;
    }
    function rt(K, I, Z, ze) {
      for (var ct = null, _t = null, at = I, Et = I = 0, Or = null; at !== null && Et < Z.length; Et++) {
        at.index > Et ? (Or = at, at = null) : Or = at.sibling;
        var an = Ce(K, at, Z[Et], ze);
        if (an === null) {
          at === null && (at = Or);
          break;
        }
        n && at && an.alternate === null && r(K, at), I = y(an, I, Et), _t === null ? ct = an : _t.sibling = an, _t = an, at = Or;
      }
      if (Et === Z.length) return o(K, at), Pn && zl(K, Et), ct;
      if (at === null) {
        for (; Et < Z.length; Et++) at = ke(K, Z[Et], ze), at !== null && (I = y(at, I, Et), _t === null ? ct = at : _t.sibling = at, _t = at);
        return Pn && zl(K, Et), ct;
      }
      for (at = c(K, at); Et < Z.length; Et++) Or = Xe(at, K, Et, Z[Et], ze), Or !== null && (n && Or.alternate !== null && at.delete(Or.key === null ? Et : Or.key), I = y(Or, I, Et), _t === null ? ct = Or : _t.sibling = Or, _t = Or);
      return n && at.forEach(function(wo) {
        return r(K, wo);
      }), Pn && zl(K, Et), ct;
    }
    function ut(K, I, Z, ze) {
      var ct = ie(Z);
      if (typeof ct != "function") throw Error(d(150));
      if (Z = ct.call(Z), Z == null) throw Error(d(151));
      for (var _t = ct = null, at = I, Et = I = 0, Or = null, an = Z.next(); at !== null && !an.done; Et++, an = Z.next()) {
        at.index > Et ? (Or = at, at = null) : Or = at.sibling;
        var wo = Ce(K, at, an.value, ze);
        if (wo === null) {
          at === null && (at = Or);
          break;
        }
        n && at && wo.alternate === null && r(K, at), I = y(wo, I, Et), _t === null ? ct = wo : _t.sibling = wo, _t = wo, at = Or;
      }
      if (an.done) return o(
        K,
        at
      ), Pn && zl(K, Et), ct;
      if (at === null) {
        for (; !an.done; Et++, an = Z.next()) an = ke(K, an.value, ze), an !== null && (I = y(an, I, Et), _t === null ? ct = an : _t.sibling = an, _t = an);
        return Pn && zl(K, Et), ct;
      }
      for (at = c(K, at); !an.done; Et++, an = Z.next()) an = Xe(at, K, Et, an.value, ze), an !== null && (n && an.alternate !== null && at.delete(an.key === null ? Et : an.key), I = y(an, I, Et), _t === null ? ct = an : _t.sibling = an, _t = an);
      return n && at.forEach(function(yS) {
        return r(K, yS);
      }), Pn && zl(K, Et), ct;
    }
    function mr(K, I, Z, ze) {
      if (typeof Z == "object" && Z !== null && Z.type === He && Z.key === null && (Z = Z.props.children), typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case G:
            e: {
              for (var ct = Z.key, _t = I; _t !== null; ) {
                if (_t.key === ct) {
                  if (ct = Z.type, ct === He) {
                    if (_t.tag === 7) {
                      o(K, _t.sibling), I = p(_t, Z.props.children), I.return = K, K = I;
                      break e;
                    }
                  } else if (_t.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === me && em(ct) === _t.type) {
                    o(K, _t.sibling), I = p(_t, Z.props), I.ref = Mu(K, _t, Z), I.return = K, K = I;
                    break e;
                  }
                  o(K, _t);
                  break;
                } else r(K, _t);
                _t = _t.sibling;
              }
              Z.type === He ? (I = Zl(Z.props.children, K.mode, ze, Z.key), I.return = K, K = I) : (ze = rd(Z.type, Z.key, Z.props, null, K.mode, ze), ze.ref = Mu(K, I, Z), ze.return = K, K = ze);
            }
            return C(K);
          case we:
            e: {
              for (_t = Z.key; I !== null; ) {
                if (I.key === _t) if (I.tag === 4 && I.stateNode.containerInfo === Z.containerInfo && I.stateNode.implementation === Z.implementation) {
                  o(K, I.sibling), I = p(I, Z.children || []), I.return = K, K = I;
                  break e;
                } else {
                  o(K, I);
                  break;
                }
                else r(K, I);
                I = I.sibling;
              }
              I = Cc(Z, K.mode, ze), I.return = K, K = I;
            }
            return C(K);
          case me:
            return _t = Z._init, mr(K, I, _t(Z._payload), ze);
        }
        if (er(Z)) return rt(K, I, Z, ze);
        if (ie(Z)) return ut(K, I, Z, ze);
        ic(K, Z);
      }
      return typeof Z == "string" && Z !== "" || typeof Z == "number" ? (Z = "" + Z, I !== null && I.tag === 6 ? (o(K, I.sibling), I = p(I, Z), I.return = K, K = I) : (o(K, I), I = id(Z, K.mode, ze), I.return = K, K = I), C(K)) : o(K, I);
    }
    return mr;
  }
  var ju = tm(!0), nm = tm(!1), oc = {}, Hi = On(oc), Uu = On(oc), lc = On(oc);
  function rl(n) {
    if (n === oc) throw Error(d(174));
    return n;
  }
  function Ap(n, r) {
    switch (rn(lc, r), rn(Uu, n), rn(Hi, oc), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Yn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Yn(r, n);
    }
    st(Hi), rn(Hi, r);
  }
  function zu() {
    st(Hi), st(Uu), st(lc);
  }
  function xf(n) {
    rl(lc.current);
    var r = rl(Hi.current), o = Yn(r, n.type);
    r !== o && (rn(Uu, n), rn(Hi, o));
  }
  function gt(n) {
    Uu.current === n && (st(Hi), st(Uu));
  }
  var dt = On(0);
  function tn(n) {
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
  var ar = [];
  function ni() {
    for (var n = 0; n < ar.length; n++) ar[n]._workInProgressVersionPrimary = null;
    ar.length = 0;
  }
  var uc = he.ReactCurrentDispatcher, Np = he.ReactCurrentBatchConfig, Fl = 0, Kn = null, dr = null, ye = null, pr = !1, wt = !1, Bi = 0, mo = 0;
  function ir() {
    throw Error(d(321));
  }
  function ri(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!wi(n[o], r[o])) return !1;
    return !0;
  }
  function Hl(n, r, o, c, p, y) {
    if (Fl = y, Kn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, uc.current = n === null || n.memoizedState === null ? Zg : eS, n = o(c, p), wt) {
      y = 0;
      do {
        if (wt = !1, Bi = 0, 25 <= y) throw Error(d(301));
        y += 1, ye = dr = null, r.updateQueue = null, uc.current = tS, n = o(c, p);
      } while (wt);
    }
    if (uc.current = Ff, r = dr !== null && dr.next !== null, Fl = 0, ye = dr = Kn = null, pr = !1, r) throw Error(d(300));
    return n;
  }
  function al() {
    var n = Bi !== 0;
    return Bi = 0, n;
  }
  function Ca() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ye === null ? Kn.memoizedState = ye = n : ye = ye.next = n, ye;
  }
  function xa() {
    if (dr === null) {
      var n = Kn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = dr.next;
    var r = ye === null ? Kn.memoizedState : ye.next;
    if (r !== null) ye = r, dr = n;
    else {
      if (n === null) throw Error(d(310));
      dr = n, n = { memoizedState: dr.memoizedState, baseState: dr.baseState, baseQueue: dr.baseQueue, queue: dr.queue, next: null }, ye === null ? Kn.memoizedState = ye = n : ye = ye.next = n;
    }
    return ye;
  }
  function Bl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function sc(n) {
    var r = xa(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var c = dr, p = c.baseQueue, y = o.pending;
    if (y !== null) {
      if (p !== null) {
        var C = p.next;
        p.next = y.next, y.next = C;
      }
      c.baseQueue = p = y, o.pending = null;
    }
    if (p !== null) {
      y = p.next, c = c.baseState;
      var M = C = null, B = null, oe = y;
      do {
        var Re = oe.lane;
        if ((Fl & Re) === Re) B !== null && (B = B.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), c = oe.hasEagerState ? oe.eagerState : n(c, oe.action);
        else {
          var ke = {
            lane: Re,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          B === null ? (M = B = ke, C = c) : B = B.next = ke, Kn.lanes |= Re, Ql |= Re;
        }
        oe = oe.next;
      } while (oe !== null && oe !== y);
      B === null ? C = c : B.next = M, wi(c, r.memoizedState) || (Ra = !0), r.memoizedState = c, r.baseState = C, r.baseQueue = B, o.lastRenderedState = c;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        y = p.lane, Kn.lanes |= y, Ql |= y, p = p.next;
      while (p !== n);
    } else p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function cc(n) {
    var r = xa(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var c = o.dispatch, p = o.pending, y = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var C = p = p.next;
      do
        y = n(y, C.action), C = C.next;
      while (C !== p);
      wi(y, r.memoizedState) || (Ra = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), o.lastRenderedState = y;
    }
    return [y, c];
  }
  function Rf() {
  }
  function Tf(n, r) {
    var o = Kn, c = xa(), p = r(), y = !wi(c.memoizedState, p);
    if (y && (c.memoizedState = p, Ra = !0), c = c.queue, fc(Df.bind(null, o, c, n), [n]), c.getSnapshot !== r || y || ye !== null && ye.memoizedState.tag & 1) {
      if (o.flags |= 2048, Vl(9, kf.bind(null, o, c, p, r), void 0, null), lr === null) throw Error(d(349));
      Fl & 30 || Of(o, r, p);
    }
    return p;
  }
  function Of(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Kn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Kn.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function kf(n, r, o, c) {
    r.value = o, r.getSnapshot = c, Af(r) && Nf(n);
  }
  function Df(n, r, o) {
    return o(function() {
      Af(r) && Nf(n);
    });
  }
  function Af(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !wi(n, o);
    } catch {
      return !0;
    }
  }
  function Nf(n) {
    var r = ho(n, 1);
    r !== null && Xn(r, n, 1, -1);
  }
  function Lf(n) {
    var r = Ca();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Bl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Pf.bind(null, Kn, n), [r.memoizedState, n];
  }
  function Vl(n, r, o, c) {
    return n = { tag: n, create: r, destroy: o, deps: c, next: null }, r = Kn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Kn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (c = o.next, o.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function Mf() {
    return xa().memoizedState;
  }
  function Pu(n, r, o, c) {
    var p = Ca();
    Kn.flags |= n, p.memoizedState = Vl(1 | r, o, void 0, c === void 0 ? null : c);
  }
  function Il(n, r, o, c) {
    var p = xa();
    c = c === void 0 ? null : c;
    var y = void 0;
    if (dr !== null) {
      var C = dr.memoizedState;
      if (y = C.destroy, c !== null && ri(c, C.deps)) {
        p.memoizedState = Vl(r, o, y, c);
        return;
      }
    }
    Kn.flags |= n, p.memoizedState = Vl(1 | r, o, y, c);
  }
  function $l(n, r) {
    return Pu(8390656, 8, n, r);
  }
  function fc(n, r) {
    return Il(2048, 8, n, r);
  }
  function jf(n, r) {
    return Il(4, 2, n, r);
  }
  function Uf(n, r) {
    return Il(4, 4, n, r);
  }
  function zf(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Lp(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Il(4, 4, zf.bind(null, r, n), o);
  }
  function Wl() {
  }
  function Mp(n, r) {
    var o = xa();
    r = r === void 0 ? null : r;
    var c = o.memoizedState;
    return c !== null && r !== null && ri(r, c[1]) ? c[0] : (o.memoizedState = [n, r], n);
  }
  function Fu(n, r) {
    var o = xa();
    r = r === void 0 ? null : r;
    var c = o.memoizedState;
    return c !== null && r !== null && ri(r, c[1]) ? c[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function il(n, r, o) {
    return Fl & 21 ? (wi(o, r) || (o = Rl(), Kn.lanes |= o, Ql |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Ra = !0), n.memoizedState = o);
  }
  function Ba(n, r) {
    var o = Gt;
    Gt = o !== 0 && 4 > o ? o : 4, n(!0);
    var c = Np.transition;
    Np.transition = {};
    try {
      n(!1), r();
    } finally {
      Gt = o, Np.transition = c;
    }
  }
  function rm() {
    return xa().memoizedState;
  }
  function Nn(n, r, o) {
    var c = So(n);
    if (o = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null }, dc(n)) Hu(r, o);
    else if (o = Gh(n, r, o, c), o !== null) {
      var p = jr();
      Xn(o, n, c, p), pc(o, r, c);
    }
  }
  function Pf(n, r, o) {
    var c = So(n), p = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (dc(n)) Hu(r, p);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null)) try {
        var C = r.lastRenderedState, M = y(C, o);
        if (p.hasEagerState = !0, p.eagerState = M, wi(M, C)) {
          var B = r.interleaved;
          B === null ? (p.next = p, Ha(r)) : (p.next = B.next, B.next = p), r.interleaved = p;
          return;
        }
      } catch {
      } finally {
      }
      o = Gh(n, r, p, c), o !== null && (p = jr(), Xn(o, n, c, p), pc(o, r, c));
    }
  }
  function dc(n) {
    var r = n.alternate;
    return n === Kn || r !== null && r === Kn;
  }
  function Hu(n, r) {
    wt = pr = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function pc(n, r, o) {
    if (o & 4194240) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, Ms(n, o);
    }
  }
  var Ff = { readContext: Be, useCallback: ir, useContext: ir, useEffect: ir, useImperativeHandle: ir, useInsertionEffect: ir, useLayoutEffect: ir, useMemo: ir, useReducer: ir, useRef: ir, useState: ir, useDebugValue: ir, useDeferredValue: ir, useTransition: ir, useMutableSource: ir, useSyncExternalStore: ir, useId: ir, unstable_isNewReconciler: !1 }, Zg = { readContext: Be, useCallback: function(n, r) {
    return Ca().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Be, useEffect: $l, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Pu(
      4194308,
      4,
      zf.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Pu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Pu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Ca();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var c = Ca();
    return r = o !== void 0 ? o(r) : r, c.memoizedState = c.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, c.queue = n, n = n.dispatch = Nn.bind(null, Kn, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = Ca();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Lf, useDebugValue: Wl, useDeferredValue: function(n) {
    return Ca().memoizedState = n;
  }, useTransition: function() {
    var n = Lf(!1), r = n[0];
    return n = Ba.bind(null, n[1]), Ca().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var c = Kn, p = Ca();
    if (Pn) {
      if (o === void 0) throw Error(d(407));
      o = o();
    } else {
      if (o = r(), lr === null) throw Error(d(349));
      Fl & 30 || Of(c, r, o);
    }
    p.memoizedState = o;
    var y = { value: o, getSnapshot: r };
    return p.queue = y, $l(Df.bind(
      null,
      c,
      y,
      n
    ), [n]), c.flags |= 2048, Vl(9, kf.bind(null, c, y, o, r), void 0, null), o;
  }, useId: function() {
    var n = Ca(), r = lr.identifierPrefix;
    if (Pn) {
      var o = Fr, c = Ea;
      o = (c & ~(1 << 32 - ta(c) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Bi++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = mo++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, eS = {
    readContext: Be,
    useCallback: Mp,
    useContext: Be,
    useEffect: fc,
    useImperativeHandle: Lp,
    useInsertionEffect: jf,
    useLayoutEffect: Uf,
    useMemo: Fu,
    useReducer: sc,
    useRef: Mf,
    useState: function() {
      return sc(Bl);
    },
    useDebugValue: Wl,
    useDeferredValue: function(n) {
      var r = xa();
      return il(r, dr.memoizedState, n);
    },
    useTransition: function() {
      var n = sc(Bl)[0], r = xa().memoizedState;
      return [n, r];
    },
    useMutableSource: Rf,
    useSyncExternalStore: Tf,
    useId: rm,
    unstable_isNewReconciler: !1
  }, tS = { readContext: Be, useCallback: Mp, useContext: Be, useEffect: fc, useImperativeHandle: Lp, useInsertionEffect: jf, useLayoutEffect: Uf, useMemo: Fu, useReducer: cc, useRef: Mf, useState: function() {
    return cc(Bl);
  }, useDebugValue: Wl, useDeferredValue: function(n) {
    var r = xa();
    return dr === null ? r.memoizedState = n : il(r, dr.memoizedState, n);
  }, useTransition: function() {
    var n = cc(Bl)[0], r = xa().memoizedState;
    return [n, r];
  }, useMutableSource: Rf, useSyncExternalStore: Tf, useId: rm, unstable_isNewReconciler: !1 };
  function ol(n, r) {
    try {
      var o = "", c = r;
      do
        o += Pe(c), c = c.return;
      while (c);
      var p = o;
    } catch (y) {
      p = `
Error generating stack: ` + y.message + `
` + y.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function jp(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function vc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var am = typeof WeakMap == "function" ? WeakMap : Map;
  function im(n, r, o) {
    o = An(-1, o), o.tag = 3, o.payload = { element: null };
    var c = r.value;
    return o.callback = function() {
      Xf || (Xf = !0, $p = c), vc(n, r);
    }, o;
  }
  function om(n, r, o) {
    o = An(-1, o), o.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var p = r.value;
      o.payload = function() {
        return c(p);
      }, o.callback = function() {
        vc(n, r);
      };
    }
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
      vc(n, r), typeof c != "function" && (oi === null ? oi = /* @__PURE__ */ new Set([this]) : oi.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function hc(n, r, o) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new am();
      var p = /* @__PURE__ */ new Set();
      c.set(r, p);
    } else p = c.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), c.set(r, p));
    p.has(o) || (p.add(o), n = fS.bind(null, n, r, o), r.then(n, n));
  }
  function lm(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Up(n, r, o, c, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = An(-1, 1), r.tag = 2, nl(o, r, 1))), o.lanes |= 1), n);
  }
  var um = he.ReactCurrentOwner, Ra = !1;
  function vr(n, r, o, c) {
    r.child = n === null ? nm(r, null, o, c) : ju(r, n.child, o, c);
  }
  function Bu(n, r, o, c, p) {
    o = o.render;
    var y = r.ref;
    return fr(r, p), c = Hl(n, r, o, c, y, p), o = al(), n !== null && !Ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, hr(n, r, p)) : (Pn && o && Sf(r), r.flags |= 1, vr(n, r, c, p), r.child);
  }
  function ll(n, r, o, c, p) {
    if (n === null) {
      var y = o.type;
      return typeof y == "function" && !Qp(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, Hf(n, r, y, c, p)) : (n = rd(o.type, null, c, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, !(n.lanes & p)) {
      var C = y.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Ru, o(C, c) && n.ref === r.ref) return hr(n, r, p);
    }
    return r.flags |= 1, n = cl(y, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Hf(n, r, o, c, p) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (Ru(y, c) && n.ref === r.ref) if (Ra = !1, r.pendingProps = c = y, (n.lanes & p) !== 0) n.flags & 131072 && (Ra = !0);
      else return r.lanes = n.lanes, hr(n, r, p);
    }
    return Mt(n, r, o, c, p);
  }
  function Ta(n, r, o) {
    var c = r.pendingProps, p = c.children, y = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, rn(Xu, Oa), Oa |= o;
    else {
      if (!(o & 1073741824)) return n = y !== null ? y.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, rn(Xu, Oa), Oa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = y !== null ? y.baseLanes : o, rn(Xu, Oa), Oa |= c;
    }
    else y !== null ? (c = y.baseLanes | o, r.memoizedState = null) : c = o, rn(Xu, Oa), Oa |= c;
    return vr(n, r, p, o), r.child;
  }
  function Yl(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Mt(n, r, o, c, p) {
    var y = Sr(o) ? na : Nr.current;
    return y = za(r, y), fr(r, p), o = Hl(n, r, o, c, y, p), c = al(), n !== null && !Ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, hr(n, r, p)) : (Pn && c && Sf(r), r.flags |= 1, vr(n, r, o, p), r.child);
  }
  function mc(n, r, o, c, p) {
    if (Sr(o)) {
      var y = !0;
      jl(r);
    } else y = !1;
    if (fr(r, p), r.stateNode === null) gc(n, r), Jh(r, o, c), Dp(r, o, c, p), c = !0;
    else if (n === null) {
      var C = r.stateNode, M = r.memoizedProps;
      C.props = M;
      var B = C.context, oe = o.contextType;
      typeof oe == "object" && oe !== null ? oe = Be(oe) : (oe = Sr(o) ? na : Nr.current, oe = za(r, oe));
      var Re = o.getDerivedStateFromProps, ke = typeof Re == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      ke || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (M !== c || B !== oe) && Zh(r, C, c, oe), tl = !1;
      var Ce = r.memoizedState;
      C.state = Ce, ac(r, c, C, p), B = r.memoizedState, M !== c || Ce !== B || Ot.current || tl ? (typeof Re == "function" && (kp(r, o, Re, c), B = r.memoizedState), (M = tl || Xh(r, o, M, c, Ce, B, oe)) ? (ke || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = B), C.props = c, C.state = B, C.context = oe, c = M) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      C = r.stateNode, Qh(n, r), M = r.memoizedProps, oe = r.type === r.elementType ? M : ba(r.type, M), C.props = oe, ke = r.pendingProps, Ce = C.context, B = o.contextType, typeof B == "object" && B !== null ? B = Be(B) : (B = Sr(o) ? na : Nr.current, B = za(r, B));
      var Xe = o.getDerivedStateFromProps;
      (Re = typeof Xe == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (M !== ke || Ce !== B) && Zh(r, C, c, B), tl = !1, Ce = r.memoizedState, C.state = Ce, ac(r, c, C, p);
      var rt = r.memoizedState;
      M !== ke || Ce !== rt || Ot.current || tl ? (typeof Xe == "function" && (kp(r, o, Xe, c), rt = r.memoizedState), (oe = tl || Xh(r, o, oe, c, Ce, rt, B) || !1) ? (Re || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(c, rt, B), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(c, rt, B)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || M === n.memoizedProps && Ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && Ce === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = rt), C.props = c, C.state = rt, C.context = B, c = oe) : (typeof C.componentDidUpdate != "function" || M === n.memoizedProps && Ce === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && Ce === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return Bf(n, r, o, c, y, p);
  }
  function Bf(n, r, o, c, p, y) {
    Yl(n, r);
    var C = (r.flags & 128) !== 0;
    if (!c && !C) return p && Wh(r, o, !1), hr(n, r, y);
    c = r.stateNode, um.current = r;
    var M = C && typeof o.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && C ? (r.child = ju(r, n.child, null, y), r.child = ju(r, null, M, y)) : vr(n, r, M, y), r.memoizedState = c.state, p && Wh(r, o, !0), r.child;
  }
  function nS(n) {
    var r = n.stateNode;
    r.pendingContext ? zi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && zi(n, r.context, !1), Ap(n, r.containerInfo);
  }
  function sm(n, r, o, c, p) {
    return Du(), wr(p), r.flags |= 256, vr(n, r, o, c), r.child;
  }
  var yc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ql(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function cm(n, r, o) {
    var c = r.pendingProps, p = dt.current, y = !1, C = (r.flags & 128) !== 0, M;
    if ((M = C) || (M = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), M ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), rn(dt, p & 1), n === null)
      return _f(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = c.children, n = c.fallback, y ? (c = r.mode, y = r.child, C = { mode: "hidden", children: C }, !(c & 1) && y !== null ? (y.childLanes = 0, y.pendingProps = C) : y = ad(C, c, 0, null), n = Zl(n, c, o, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = ql(o), r.memoizedState = yc, n) : Vf(r, C));
    if (p = n.memoizedState, p !== null && (M = p.dehydrated, M !== null)) return zp(n, r, C, c, M, p, o);
    if (y) {
      y = c.fallback, C = r.mode, p = n.child, M = p.sibling;
      var B = { mode: "hidden", children: c.children };
      return !(C & 1) && r.child !== p ? (c = r.child, c.childLanes = 0, c.pendingProps = B, r.deletions = null) : (c = cl(p, B), c.subtreeFlags = p.subtreeFlags & 14680064), M !== null ? y = cl(M, y) : (y = Zl(y, C, o, null), y.flags |= 2), y.return = r, c.return = r, c.sibling = y, r.child = c, c = y, y = r.child, C = n.child.memoizedState, C = C === null ? ql(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, y.memoizedState = C, y.childLanes = n.childLanes & ~o, r.memoizedState = yc, c;
    }
    return y = n.child, n = y.sibling, c = cl(y, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = o), c.return = r, c.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function Vf(n, r) {
    return r = ad({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function If(n, r, o, c) {
    return c !== null && wr(c), ju(r, n.child, null, o), n = Vf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function zp(n, r, o, c, p, y, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, c = jp(Error(d(422))), If(n, r, C, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = c.fallback, p = r.mode, c = ad({ mode: "visible", children: c.children }, p, 0, null), y = Zl(y, p, C, null), y.flags |= 2, c.return = r, y.return = r, c.sibling = y, r.child = c, r.mode & 1 && ju(r, n.child, null, C), r.child.memoizedState = ql(C), r.memoizedState = yc, y);
    if (!(r.mode & 1)) return If(n, r, C, null);
    if (p.data === "$!") {
      if (c = p.nextSibling && p.nextSibling.dataset, c) var M = c.dgst;
      return c = M, y = Error(d(419)), c = jp(y, c, void 0), If(n, r, C, c);
    }
    if (M = (C & n.childLanes) !== 0, Ra || M) {
      if (c = lr, c !== null) {
        switch (C & -C) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
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
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (c.suspendedLanes | C) ? 0 : p, p !== 0 && p !== y.retryLane && (y.retryLane = p, ho(n, p), Xn(c, n, p, -1));
      }
      return bc(), c = jp(Error(d(421))), If(n, r, C, c);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Gp.bind(null, n), p._reactRetry = r, null) : (n = y.treeContext, Fa = Ua(p.nextSibling), Pa = r, Pn = !0, ti = null, n !== null && (wa[_a++] = Ea, wa[_a++] = Fr, wa[_a++] = bi, Ea = n.id, Fr = n.overflow, bi = r), r = Vf(r, c.children), r.flags |= 4096, r);
  }
  function fm(n, r, o) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), el(n.return, r, o);
  }
  function $f(n, r, o, c, p) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: o, tailMode: p } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = c, y.tail = o, y.tailMode = p);
  }
  function Pp(n, r, o) {
    var c = r.pendingProps, p = c.revealOrder, y = c.tail;
    if (vr(n, r, c.children, o), c = dt.current, c & 2) c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && fm(n, o, r);
        else if (n.tag === 19) fm(n, o, r);
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
      c &= 1;
    }
    if (rn(dt, c), !(r.mode & 1)) r.memoizedState = null;
    else switch (p) {
      case "forwards":
        for (o = r.child, p = null; o !== null; ) n = o.alternate, n !== null && tn(n) === null && (p = o), o = o.sibling;
        o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), $f(r, !1, p, o, y);
        break;
      case "backwards":
        for (o = null, p = r.child, r.child = null; p !== null; ) {
          if (n = p.alternate, n !== null && tn(n) === null) {
            r.child = p;
            break;
          }
          n = p.sibling, p.sibling = o, o = p, p = n;
        }
        $f(r, !0, o, null, y);
        break;
      case "together":
        $f(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function gc(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function hr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ql |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = cl(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = cl(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function yo(n, r, o) {
    switch (r.tag) {
      case 3:
        nS(r), Du();
        break;
      case 5:
        xf(r);
        break;
      case 1:
        Sr(r.type) && jl(r);
        break;
      case 4:
        Ap(r, r.stateNode.containerInfo);
        break;
      case 10:
        var c = r.type._context, p = r.memoizedProps.value;
        rn(Au, c._currentValue), c._currentValue = p;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (rn(dt, dt.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? cm(n, r, o) : (rn(dt, dt.current & 1), n = hr(n, r, o), n !== null ? n.sibling : null);
        rn(dt, dt.current & 1);
        break;
      case 19:
        if (c = (o & r.childLanes) !== 0, n.flags & 128) {
          if (c) return Pp(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), rn(dt, dt.current), c) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ta(n, r, o);
    }
    return hr(n, r, o);
  }
  var Vi, Vu, Iu, ai;
  Vi = function(n, r) {
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
  }, Vu = function() {
  }, Iu = function(n, r, o, c) {
    var p = n.memoizedProps;
    if (p !== c) {
      n = r.stateNode, rl(Hi.current);
      var y = null;
      switch (o) {
        case "input":
          p = xt(n, p), c = xt(n, c), y = [];
          break;
        case "select":
          p = N({}, p, { value: void 0 }), c = N({}, c, { value: void 0 }), y = [];
          break;
        case "textarea":
          p = Er(n, p), c = Er(n, c), y = [];
          break;
        default:
          typeof p.onClick != "function" && typeof c.onClick == "function" && (n.onclick = mf);
      }
      Bt(o, c);
      var C;
      o = null;
      for (oe in p) if (!c.hasOwnProperty(oe) && p.hasOwnProperty(oe) && p[oe] != null) if (oe === "style") {
        var M = p[oe];
        for (C in M) M.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else oe !== "dangerouslySetInnerHTML" && oe !== "children" && oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && oe !== "autoFocus" && (m.hasOwnProperty(oe) ? y || (y = []) : (y = y || []).push(oe, null));
      for (oe in c) {
        var B = c[oe];
        if (M = p != null ? p[oe] : void 0, c.hasOwnProperty(oe) && B !== M && (B != null || M != null)) if (oe === "style") if (M) {
          for (C in M) !M.hasOwnProperty(C) || B && B.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in B) B.hasOwnProperty(C) && M[C] !== B[C] && (o || (o = {}), o[C] = B[C]);
        } else o || (y || (y = []), y.push(
          oe,
          o
        )), o = B;
        else oe === "dangerouslySetInnerHTML" ? (B = B ? B.__html : void 0, M = M ? M.__html : void 0, B != null && M !== B && (y = y || []).push(oe, B)) : oe === "children" ? typeof B != "string" && typeof B != "number" || (y = y || []).push(oe, "" + B) : oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && (m.hasOwnProperty(oe) ? (B != null && oe === "onScroll" && Tn("scroll", n), y || M === B || (y = [])) : (y = y || []).push(oe, B));
      }
      o && (y = y || []).push("style", o);
      var oe = y;
      (r.updateQueue = oe) && (r.flags |= 4);
    }
  }, ai = function(n, r, o, c) {
    o !== c && (r.flags |= 4);
  };
  function or(n, r) {
    if (!Pn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var c = null; o !== null; ) o.alternate !== null && (c = o), o = o.sibling;
        c === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
    }
  }
  function Jr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, c = 0;
    if (r) for (var p = n.child; p !== null; ) o |= p.lanes | p.childLanes, c |= p.subtreeFlags & 14680064, c |= p.flags & 14680064, p.return = n, p = p.sibling;
    else for (p = n.child; p !== null; ) o |= p.lanes | p.childLanes, c |= p.subtreeFlags, c |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= c, n.childLanes = o, r;
  }
  function rS(n, r, o) {
    var c = r.pendingProps;
    switch (wf(r), r.tag) {
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
        return Jr(r), null;
      case 1:
        return Sr(r.type) && Sa(), Jr(r), null;
      case 3:
        return c = r.stateNode, zu(), st(Ot), st(Nr), ni(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (Ef(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ti !== null && (Wp(ti), ti = null))), Vu(n, r), Jr(r), null;
      case 5:
        gt(r);
        var p = rl(lc.current);
        if (o = r.type, n !== null && r.stateNode != null) Iu(n, r, o, c, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!c) {
            if (r.stateNode === null) throw Error(d(166));
            return Jr(r), null;
          }
          if (n = rl(Hi.current), Ef(r)) {
            c = r.stateNode, o = r.type;
            var y = r.memoizedProps;
            switch (c[Xa] = r, c[nc] = y, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Tn("cancel", c), Tn("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                Tn("load", c);
                break;
              case "video":
              case "audio":
                for (p = 0; p < so.length; p++) Tn(so[p], c);
                break;
              case "source":
                Tn("error", c);
                break;
              case "img":
              case "image":
              case "link":
                Tn(
                  "error",
                  c
                ), Tn("load", c);
                break;
              case "details":
                Tn("toggle", c);
                break;
              case "input":
                xn(c, y), Tn("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!y.multiple }, Tn("invalid", c);
                break;
              case "textarea":
                Dr(c, y), Tn("invalid", c);
            }
            Bt(o, y), p = null;
            for (var C in y) if (y.hasOwnProperty(C)) {
              var M = y[C];
              C === "children" ? typeof M == "string" ? c.textContent !== M && (y.suppressHydrationWarning !== !0 && Js(c.textContent, M, n), p = ["children", M]) : typeof M == "number" && c.textContent !== "" + M && (y.suppressHydrationWarning !== !0 && Js(
                c.textContent,
                M,
                n
              ), p = ["children", "" + M]) : m.hasOwnProperty(C) && M != null && C === "onScroll" && Tn("scroll", c);
            }
            switch (o) {
              case "input":
                ht(c), Lt(c, y, !0);
                break;
              case "textarea":
                ht(c), tr(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (c.onclick = mf);
            }
            c = p, r.updateQueue = c, c !== null && (r.flags |= 4);
          } else {
            C = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Wn(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = C.createElement(o, { is: c.is }) : (n = C.createElement(o), o === "select" && (C = n, c.multiple ? C.multiple = !0 : c.size && (C.size = c.size))) : n = C.createElementNS(n, o), n[Xa] = r, n[nc] = c, Vi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = Rn(o, c), o) {
                case "dialog":
                  Tn("cancel", n), Tn("close", n), p = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Tn("load", n), p = c;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < so.length; p++) Tn(so[p], n);
                  p = c;
                  break;
                case "source":
                  Tn("error", n), p = c;
                  break;
                case "img":
                case "image":
                case "link":
                  Tn(
                    "error",
                    n
                  ), Tn("load", n), p = c;
                  break;
                case "details":
                  Tn("toggle", n), p = c;
                  break;
                case "input":
                  xn(n, c), p = xt(n, c), Tn("invalid", n);
                  break;
                case "option":
                  p = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, p = N({}, c, { value: void 0 }), Tn("invalid", n);
                  break;
                case "textarea":
                  Dr(n, c), p = Er(n, c), Tn("invalid", n);
                  break;
                default:
                  p = c;
              }
              Bt(o, p), M = p;
              for (y in M) if (M.hasOwnProperty(y)) {
                var B = M[y];
                y === "style" ? Tt(n, B) : y === "dangerouslySetInnerHTML" ? (B = B ? B.__html : void 0, B != null && br(n, B)) : y === "children" ? typeof B == "string" ? (o !== "textarea" || B !== "") && gr(n, B) : typeof B == "number" && gr(n, "" + B) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (m.hasOwnProperty(y) ? B != null && y === "onScroll" && Tn("scroll", n) : B != null && Q(n, y, B, C));
              }
              switch (o) {
                case "input":
                  ht(n), Lt(n, c, !1);
                  break;
                case "textarea":
                  ht(n), tr(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + Fe(c.value));
                  break;
                case "select":
                  n.multiple = !!c.multiple, y = c.value, y != null ? Ln(n, !!c.multiple, y, !1) : c.defaultValue != null && Ln(
                    n,
                    !!c.multiple,
                    c.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = mf);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
            }
            c && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Jr(r), null;
      case 6:
        if (n && r.stateNode != null) ai(n, r, n.memoizedProps, c);
        else {
          if (typeof c != "string" && r.stateNode === null) throw Error(d(166));
          if (o = rl(lc.current), rl(Hi.current), Ef(r)) {
            if (c = r.stateNode, o = r.memoizedProps, c[Xa] = r, (y = c.nodeValue !== o) && (n = Pa, n !== null)) switch (n.tag) {
              case 3:
                Js(c.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Js(c.nodeValue, o, (n.mode & 1) !== 0);
            }
            y && (r.flags |= 4);
          } else c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c), c[Xa] = r, r.stateNode = c;
        }
        return Jr(r), null;
      case 13:
        if (st(dt), c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Pn && Fa !== null && r.mode & 1 && !(r.flags & 128)) qh(), Du(), r.flags |= 98560, y = !1;
          else if (y = Ef(r), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!y) throw Error(d(318));
              if (y = r.memoizedState, y = y !== null ? y.dehydrated : null, !y) throw Error(d(317));
              y[Xa] = r;
            } else Du(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Jr(r), y = !1;
          } else ti !== null && (Wp(ti), ti = null), y = !0;
          if (!y) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (r.child.flags |= 8192, r.mode & 1 && (n === null || dt.current & 1 ? Rr === 0 && (Rr = 3) : bc())), r.updateQueue !== null && (r.flags |= 4), Jr(r), null);
      case 4:
        return zu(), Vu(n, r), n === null && ji(r.stateNode.containerInfo), Jr(r), null;
      case 10:
        return Tp(r.type._context), Jr(r), null;
      case 17:
        return Sr(r.type) && Sa(), Jr(r), null;
      case 19:
        if (st(dt), y = r.memoizedState, y === null) return Jr(r), null;
        if (c = (r.flags & 128) !== 0, C = y.rendering, C === null) if (c) or(y, !1);
        else {
          if (Rr !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (C = tn(n), C !== null) {
              for (r.flags |= 128, or(y, !1), c = C.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = o, o = r.child; o !== null; ) y = o, n = c, y.flags &= 14680066, C = y.alternate, C === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = C.childLanes, y.lanes = C.lanes, y.child = C.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = C.memoizedProps, y.memoizedState = C.memoizedState, y.updateQueue = C.updateQueue, y.type = C.type, n = C.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return rn(dt, dt.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          y.tail !== null && Dn() > Zu && (r.flags |= 128, c = !0, or(y, !1), r.lanes = 4194304);
        }
        else {
          if (!c) if (n = tn(C), n !== null) {
            if (r.flags |= 128, c = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), or(y, !0), y.tail === null && y.tailMode === "hidden" && !C.alternate && !Pn) return Jr(r), null;
          } else 2 * Dn() - y.renderingStartTime > Zu && o !== 1073741824 && (r.flags |= 128, c = !0, or(y, !1), r.lanes = 4194304);
          y.isBackwards ? (C.sibling = r.child, r.child = C) : (o = y.last, o !== null ? o.sibling = C : r.child = C, y.last = C);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = Dn(), r.sibling = null, o = dt.current, rn(dt, c ? o & 1 | 2 : o & 1), r) : (Jr(r), null);
      case 22:
      case 23:
        return td(), c = r.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (r.flags |= 8192), c && r.mode & 1 ? Oa & 1073741824 && (Jr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Jr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function aS(n, r) {
    switch (wf(r), r.tag) {
      case 1:
        return Sr(r.type) && Sa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return zu(), st(Ot), st(Nr), ni(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return gt(r), null;
      case 13:
        if (st(dt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(d(340));
          Du();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return st(dt), null;
      case 4:
        return zu(), null;
      case 10:
        return Tp(r.type._context), null;
      case 22:
      case 23:
        return td(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var $u = !1, Hr = !1, Wf = typeof WeakSet == "function" ? WeakSet : Set, nt = null;
  function Wu(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (c) {
      ur(n, r, c);
    }
    else o.current = null;
  }
  function Fp(n, r, o) {
    try {
      o();
    } catch (c) {
      ur(n, r, c);
    }
  }
  var Yf = !1;
  function iS(n, r) {
    if (mp = wu, n = Lh(), Ys(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var c = o.getSelection && o.getSelection();
        if (c && c.rangeCount !== 0) {
          o = c.anchorNode;
          var p = c.anchorOffset, y = c.focusNode;
          c = c.focusOffset;
          try {
            o.nodeType, y.nodeType;
          } catch {
            o = null;
            break e;
          }
          var C = 0, M = -1, B = -1, oe = 0, Re = 0, ke = n, Ce = null;
          t: for (; ; ) {
            for (var Xe; ke !== o || p !== 0 && ke.nodeType !== 3 || (M = C + p), ke !== y || c !== 0 && ke.nodeType !== 3 || (B = C + c), ke.nodeType === 3 && (C += ke.nodeValue.length), (Xe = ke.firstChild) !== null; )
              Ce = ke, ke = Xe;
            for (; ; ) {
              if (ke === n) break t;
              if (Ce === o && ++oe === p && (M = C), Ce === y && ++Re === c && (B = C), (Xe = ke.nextSibling) !== null) break;
              ke = Ce, Ce = ke.parentNode;
            }
            ke = Xe;
          }
          o = M === -1 || B === -1 ? null : { start: M, end: B };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (yp = { focusedElem: n, selectionRange: o }, wu = !1, nt = r; nt !== null; ) if (r = nt, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, nt = n;
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
              var ut = rt.memoizedProps, mr = rt.memoizedState, K = r.stateNode, I = K.getSnapshotBeforeUpdate(r.elementType === r.type ? ut : ba(r.type, ut), mr);
              K.__reactInternalSnapshotBeforeUpdate = I;
            }
            break;
          case 3:
            var Z = r.stateNode.containerInfo;
            Z.nodeType === 1 ? Z.textContent = "" : Z.nodeType === 9 && Z.documentElement && Z.removeChild(Z.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(d(163));
        }
      } catch (ze) {
        ur(r, r.return, ze);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, nt = n;
        break;
      }
      nt = r.return;
    }
    return rt = Yf, Yf = !1, rt;
  }
  function Yu(n, r, o) {
    var c = r.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var p = c = c.next;
      do {
        if ((p.tag & n) === n) {
          var y = p.destroy;
          p.destroy = void 0, y !== void 0 && Fp(r, o, y);
        }
        p = p.next;
      } while (p !== c);
    }
  }
  function qf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var c = o.create;
          o.destroy = c();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Gf(n) {
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
  function dm(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, dm(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Xa], delete r[nc], delete r[_p], delete r[Kg], delete r[Xg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Hp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function pm(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Hp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Sc(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = mf));
    else if (c !== 4 && (n = n.child, n !== null)) for (Sc(n, r, o), n = n.sibling; n !== null; ) Sc(n, r, o), n = n.sibling;
  }
  function qu(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null)) for (qu(n, r, o), n = n.sibling; n !== null; ) qu(n, r, o), n = n.sibling;
  }
  var In = null, Lr = !1;
  function ra(n, r, o) {
    for (o = o.child; o !== null; ) Gu(n, r, o), o = o.sibling;
  }
  function Gu(n, r, o) {
    if (ha && typeof ha.onCommitFiberUnmount == "function") try {
      ha.onCommitFiberUnmount(Ho, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Hr || Wu(o, r);
      case 6:
        var c = In, p = Lr;
        In = null, ra(n, r, o), In = c, Lr = p, In !== null && (Lr ? (n = In, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : In.removeChild(o.stateNode));
        break;
      case 18:
        In !== null && (Lr ? (n = In, o = o.stateNode, n.nodeType === 8 ? wp(n.parentNode, o) : n.nodeType === 1 && wp(n, o), Ka(n)) : wp(In, o.stateNode));
        break;
      case 4:
        c = In, p = Lr, In = o.stateNode.containerInfo, Lr = !0, ra(n, r, o), In = c, Lr = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Hr && (c = o.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          p = c = c.next;
          do {
            var y = p, C = y.destroy;
            y = y.tag, C !== void 0 && (y & 2 || y & 4) && Fp(o, r, C), p = p.next;
          } while (p !== c);
        }
        ra(n, r, o);
        break;
      case 1:
        if (!Hr && (Wu(o, r), c = o.stateNode, typeof c.componentWillUnmount == "function")) try {
          c.props = o.memoizedProps, c.state = o.memoizedState, c.componentWillUnmount();
        } catch (M) {
          ur(o, r, M);
        }
        ra(n, r, o);
        break;
      case 21:
        ra(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Hr = (c = Hr) || o.memoizedState !== null, ra(n, r, o), Hr = c) : ra(n, r, o);
        break;
      default:
        ra(n, r, o);
    }
  }
  function Qu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Wf()), r.forEach(function(c) {
        var p = dS.bind(null, n, c);
        o.has(c) || (o.add(c), c.then(p, p));
      });
    }
  }
  function Mr(n, r) {
    var o = r.deletions;
    if (o !== null) for (var c = 0; c < o.length; c++) {
      var p = o[c];
      try {
        var y = n, C = r, M = C;
        e: for (; M !== null; ) {
          switch (M.tag) {
            case 5:
              In = M.stateNode, Lr = !1;
              break e;
            case 3:
              In = M.stateNode.containerInfo, Lr = !0;
              break e;
            case 4:
              In = M.stateNode.containerInfo, Lr = !0;
              break e;
          }
          M = M.return;
        }
        if (In === null) throw Error(d(160));
        Gu(y, C, p), In = null, Lr = !1;
        var B = p.alternate;
        B !== null && (B.return = null), p.return = null;
      } catch (oe) {
        ur(p, r, oe);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) vm(r, n), r = r.sibling;
  }
  function vm(n, r) {
    var o = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Mr(r, n), Ii(n), c & 4) {
          try {
            Yu(3, n, n.return), qf(3, n);
          } catch (ut) {
            ur(n, n.return, ut);
          }
          try {
            Yu(5, n, n.return);
          } catch (ut) {
            ur(n, n.return, ut);
          }
        }
        break;
      case 1:
        Mr(r, n), Ii(n), c & 512 && o !== null && Wu(o, o.return);
        break;
      case 5:
        if (Mr(r, n), Ii(n), c & 512 && o !== null && Wu(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            gr(p, "");
          } catch (ut) {
            ur(n, n.return, ut);
          }
        }
        if (c & 4 && (p = n.stateNode, p != null)) {
          var y = n.memoizedProps, C = o !== null ? o.memoizedProps : y, M = n.type, B = n.updateQueue;
          if (n.updateQueue = null, B !== null) try {
            M === "input" && y.type === "radio" && y.name != null && cn(p, y), Rn(M, C);
            var oe = Rn(M, y);
            for (C = 0; C < B.length; C += 2) {
              var Re = B[C], ke = B[C + 1];
              Re === "style" ? Tt(p, ke) : Re === "dangerouslySetInnerHTML" ? br(p, ke) : Re === "children" ? gr(p, ke) : Q(p, Re, ke, oe);
            }
            switch (M) {
              case "input":
                wn(p, y);
                break;
              case "textarea":
                $n(p, y);
                break;
              case "select":
                var Ce = p._wrapperState.wasMultiple;
                p._wrapperState.wasMultiple = !!y.multiple;
                var Xe = y.value;
                Xe != null ? Ln(p, !!y.multiple, Xe, !1) : Ce !== !!y.multiple && (y.defaultValue != null ? Ln(
                  p,
                  !!y.multiple,
                  y.defaultValue,
                  !0
                ) : Ln(p, !!y.multiple, y.multiple ? [] : "", !1));
            }
            p[nc] = y;
          } catch (ut) {
            ur(n, n.return, ut);
          }
        }
        break;
      case 6:
        if (Mr(r, n), Ii(n), c & 4) {
          if (n.stateNode === null) throw Error(d(162));
          p = n.stateNode, y = n.memoizedProps;
          try {
            p.nodeValue = y;
          } catch (ut) {
            ur(n, n.return, ut);
          }
        }
        break;
      case 3:
        if (Mr(r, n), Ii(n), c & 4 && o !== null && o.memoizedState.isDehydrated) try {
          Ka(r.containerInfo);
        } catch (ut) {
          ur(n, n.return, ut);
        }
        break;
      case 4:
        Mr(r, n), Ii(n);
        break;
      case 13:
        Mr(r, n), Ii(n), p = n.child, p.flags & 8192 && (y = p.memoizedState !== null, p.stateNode.isHidden = y, !y || p.alternate !== null && p.alternate.memoizedState !== null || (Kf = Dn())), c & 4 && Qu(n);
        break;
      case 22:
        if (Re = o !== null && o.memoizedState !== null, n.mode & 1 ? (Hr = (oe = Hr) || Re, Mr(r, n), Hr = oe) : Mr(r, n), Ii(n), c & 8192) {
          if (oe = n.memoizedState !== null, (n.stateNode.isHidden = oe) && !Re && n.mode & 1) for (nt = n, Re = n.child; Re !== null; ) {
            for (ke = nt = Re; nt !== null; ) {
              switch (Ce = nt, Xe = Ce.child, Ce.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yu(4, Ce, Ce.return);
                  break;
                case 1:
                  Wu(Ce, Ce.return);
                  var rt = Ce.stateNode;
                  if (typeof rt.componentWillUnmount == "function") {
                    c = Ce, o = Ce.return;
                    try {
                      r = c, rt.props = r.memoizedProps, rt.state = r.memoizedState, rt.componentWillUnmount();
                    } catch (ut) {
                      ur(c, o, ut);
                    }
                  }
                  break;
                case 5:
                  Wu(Ce, Ce.return);
                  break;
                case 22:
                  if (Ce.memoizedState !== null) {
                    hm(ke);
                    continue;
                  }
              }
              Xe !== null ? (Xe.return = Ce, nt = Xe) : hm(ke);
            }
            Re = Re.sibling;
          }
          e: for (Re = null, ke = n; ; ) {
            if (ke.tag === 5) {
              if (Re === null) {
                Re = ke;
                try {
                  p = ke.stateNode, oe ? (y = p.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (M = ke.stateNode, B = ke.memoizedProps.style, C = B != null && B.hasOwnProperty("display") ? B.display : null, M.style.display = $e("display", C));
                } catch (ut) {
                  ur(n, n.return, ut);
                }
              }
            } else if (ke.tag === 6) {
              if (Re === null) try {
                ke.stateNode.nodeValue = oe ? "" : ke.memoizedProps;
              } catch (ut) {
                ur(n, n.return, ut);
              }
            } else if ((ke.tag !== 22 && ke.tag !== 23 || ke.memoizedState === null || ke === n) && ke.child !== null) {
              ke.child.return = ke, ke = ke.child;
              continue;
            }
            if (ke === n) break e;
            for (; ke.sibling === null; ) {
              if (ke.return === null || ke.return === n) break e;
              Re === ke && (Re = null), ke = ke.return;
            }
            Re === ke && (Re = null), ke.sibling.return = ke.return, ke = ke.sibling;
          }
        }
        break;
      case 19:
        Mr(r, n), Ii(n), c & 4 && Qu(n);
        break;
      case 21:
        break;
      default:
        Mr(
          r,
          n
        ), Ii(n);
    }
  }
  function Ii(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Hp(o)) {
              var c = o;
              break e;
            }
            o = o.return;
          }
          throw Error(d(160));
        }
        switch (c.tag) {
          case 5:
            var p = c.stateNode;
            c.flags & 32 && (gr(p, ""), c.flags &= -33);
            var y = pm(n);
            qu(n, y, p);
            break;
          case 3:
          case 4:
            var C = c.stateNode.containerInfo, M = pm(n);
            Sc(n, M, C);
            break;
          default:
            throw Error(d(161));
        }
      } catch (B) {
        ur(n, n.return, B);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oS(n, r, o) {
    nt = n, Bp(n);
  }
  function Bp(n, r, o) {
    for (var c = (n.mode & 1) !== 0; nt !== null; ) {
      var p = nt, y = p.child;
      if (p.tag === 22 && c) {
        var C = p.memoizedState !== null || $u;
        if (!C) {
          var M = p.alternate, B = M !== null && M.memoizedState !== null || Hr;
          M = $u;
          var oe = Hr;
          if ($u = C, (Hr = B) && !oe) for (nt = p; nt !== null; ) C = nt, B = C.child, C.tag === 22 && C.memoizedState !== null ? Vp(p) : B !== null ? (B.return = C, nt = B) : Vp(p);
          for (; y !== null; ) nt = y, Bp(y), y = y.sibling;
          nt = p, $u = M, Hr = oe;
        }
        Ku(n);
      } else p.subtreeFlags & 8772 && y !== null ? (y.return = p, nt = y) : Ku(n);
    }
  }
  function Ku(n) {
    for (; nt !== null; ) {
      var r = nt;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Hr || qf(5, r);
              break;
            case 1:
              var c = r.stateNode;
              if (r.flags & 4 && !Hr) if (o === null) c.componentDidMount();
              else {
                var p = r.elementType === r.type ? o.memoizedProps : ba(r.type, o.memoizedProps);
                c.componentDidUpdate(p, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
              }
              var y = r.updateQueue;
              y !== null && Lu(r, y, c);
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
                Lu(r, C, o);
              }
              break;
            case 5:
              var M = r.stateNode;
              if (o === null && r.flags & 4) {
                o = M;
                var B = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    B.autoFocus && o.focus();
                    break;
                  case "img":
                    B.src && (o.src = B.src);
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
                var oe = r.alternate;
                if (oe !== null) {
                  var Re = oe.memoizedState;
                  if (Re !== null) {
                    var ke = Re.dehydrated;
                    ke !== null && Ka(ke);
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
              throw Error(d(163));
          }
          Hr || r.flags & 512 && Gf(r);
        } catch (Ce) {
          ur(r, r.return, Ce);
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
  function hm(n) {
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
  function Vp(n) {
    for (; nt !== null; ) {
      var r = nt;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              qf(4, r);
            } catch (B) {
              ur(r, o, B);
            }
            break;
          case 1:
            var c = r.stateNode;
            if (typeof c.componentDidMount == "function") {
              var p = r.return;
              try {
                c.componentDidMount();
              } catch (B) {
                ur(r, p, B);
              }
            }
            var y = r.return;
            try {
              Gf(r);
            } catch (B) {
              ur(r, y, B);
            }
            break;
          case 5:
            var C = r.return;
            try {
              Gf(r);
            } catch (B) {
              ur(r, C, B);
            }
        }
      } catch (B) {
        ur(r, r.return, B);
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
  var lS = Math.ceil, Gl = he.ReactCurrentDispatcher, Qf = he.ReactCurrentOwner, ii = he.ReactCurrentBatchConfig, $t = 0, lr = null, Fn = null, xr = 0, Oa = 0, Xu = On(0), Rr = 0, wc = null, Ql = 0, Ju = 0, Ip = 0, ul = null, Zr = null, Kf = 0, Zu = 1 / 0, go = null, Xf = !1, $p = null, oi = null, es = !1, li = null, Jf = 0, _c = 0, Zf = null, Ec = -1, Kl = 0;
  function jr() {
    return $t & 6 ? Dn() : Ec !== -1 ? Ec : Ec = Dn();
  }
  function So(n) {
    return n.mode & 1 ? $t & 2 && xr !== 0 ? xr & -xr : Jg.transition !== null ? (Kl === 0 && (Kl = Rl()), Kl) : (n = Gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ps(n.type)), n) : 1;
  }
  function Xn(n, r, o, c) {
    if (50 < _c) throw _c = 0, Zf = null, Error(d(185));
    Vo(n, o, c), (!($t & 2) || n !== lr) && (n === lr && (!($t & 2) && (Ju |= o), Rr === 4 && $i(n, xr)), Tr(n, c), o === 1 && $t === 0 && !(r.mode & 1) && (Zu = Dn() + 500, Xo && Pi()));
  }
  function Tr(n, r) {
    var o = n.callbackNode;
    Bo(n, r);
    var c = Ni(n, n === lr ? xr : 0);
    if (c === 0) o !== null && nn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (o != null && nn(o), r === 1) n.tag === 0 ? Yh(ts.bind(null, n)) : gf(ts.bind(null, n)), $h(function() {
        !($t & 6) && Pi();
      }), o = null;
      else {
        switch (js(c)) {
          case 1:
            o = Os;
            break;
          case 4:
            o = Ai;
            break;
          case 16:
            o = Pt;
            break;
          case 536870912:
            o = eo;
            break;
          default:
            o = Pt;
        }
        o = bm(o, ed.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function ed(n, r) {
    if (Ec = -1, Kl = 0, $t & 6) throw Error(d(327));
    var o = n.callbackNode;
    if (ns() && n.callbackNode !== o) return null;
    var c = Ni(n, n === lr ? xr : 0);
    if (c === 0) return null;
    if (c & 30 || c & n.expiredLanes || r) r = nd(n, c);
    else {
      r = c;
      var p = $t;
      $t |= 2;
      var y = ym();
      (lr !== n || xr !== r) && (go = null, Zu = Dn() + 500, Jl(n, r));
      do
        try {
          sS();
          break;
        } catch (M) {
          mm(n, M);
        }
      while (!0);
      Rp(), Gl.current = y, $t = p, Fn !== null ? r = 0 : (lr = null, xr = 0, r = Rr);
    }
    if (r !== 0) {
      if (r === 2 && (p = Li(n), p !== 0 && (c = p, r = Xl(n, p))), r === 1) throw o = wc, Jl(n, 0), $i(n, c), Tr(n, Dn()), o;
      if (r === 6) $i(n, c);
      else {
        if (p = n.current.alternate, !(c & 30) && !Yp(p) && (r = nd(n, c), r === 2 && (y = Li(n), y !== 0 && (c = y, r = Xl(n, y))), r === 1)) throw o = wc, Jl(n, 0), $i(n, c), Tr(n, Dn()), o;
        switch (n.finishedWork = p, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            sl(n, Zr, go);
            break;
          case 3:
            if ($i(n, c), (c & 130023424) === c && (r = Kf + 500 - Dn(), 10 < r)) {
              if (Ni(n, 0) !== 0) break;
              if (p = n.suspendedLanes, (p & c) !== c) {
                jr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Zs(sl.bind(null, n, Zr, go), r);
              break;
            }
            sl(n, Zr, go);
            break;
          case 4:
            if ($i(n, c), (c & 4194240) === c) break;
            for (r = n.eventTimes, p = -1; 0 < c; ) {
              var C = 31 - ta(c);
              y = 1 << C, C = r[C], C > p && (p = C), c &= ~y;
            }
            if (c = p, c = Dn() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * lS(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = Zs(sl.bind(null, n, Zr, go), c);
              break;
            }
            sl(n, Zr, go);
            break;
          case 5:
            sl(n, Zr, go);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Tr(n, Dn()), n.callbackNode === o ? ed.bind(null, n) : null;
  }
  function Xl(n, r) {
    var o = ul;
    return n.current.memoizedState.isDehydrated && (Jl(n, r).flags |= 256), n = nd(n, r), n !== 2 && (r = Zr, Zr = o, r !== null && Wp(r)), n;
  }
  function Wp(n) {
    Zr === null ? Zr = n : Zr.push.apply(Zr, n);
  }
  function Yp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var c = 0; c < o.length; c++) {
          var p = o[c], y = p.getSnapshot;
          p = p.value;
          try {
            if (!wi(y(), p)) return !1;
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
  function $i(n, r) {
    for (r &= ~Ip, r &= ~Ju, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - ta(r), c = 1 << o;
      n[o] = -1, r &= ~c;
    }
  }
  function ts(n) {
    if ($t & 6) throw Error(d(327));
    ns();
    var r = Ni(n, 0);
    if (!(r & 1)) return Tr(n, Dn()), null;
    var o = nd(n, r);
    if (n.tag !== 0 && o === 2) {
      var c = Li(n);
      c !== 0 && (r = c, o = Xl(n, c));
    }
    if (o === 1) throw o = wc, Jl(n, 0), $i(n, r), Tr(n, Dn()), o;
    if (o === 6) throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, sl(n, Zr, go), Tr(n, Dn()), null;
  }
  function qp(n, r) {
    var o = $t;
    $t |= 1;
    try {
      return n(r);
    } finally {
      $t = o, $t === 0 && (Zu = Dn() + 500, Xo && Pi());
    }
  }
  function Wi(n) {
    li !== null && li.tag === 0 && !($t & 6) && ns();
    var r = $t;
    $t |= 1;
    var o = ii.transition, c = Gt;
    try {
      if (ii.transition = null, Gt = 1, n) return n();
    } finally {
      Gt = c, ii.transition = o, $t = r, !($t & 6) && Pi();
    }
  }
  function td() {
    Oa = Xu.current, st(Xu);
  }
  function Jl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, ec(o)), Fn !== null) for (o = Fn.return; o !== null; ) {
      var c = o;
      switch (wf(c), c.tag) {
        case 1:
          c = c.type.childContextTypes, c != null && Sa();
          break;
        case 3:
          zu(), st(Ot), st(Nr), ni();
          break;
        case 5:
          gt(c);
          break;
        case 4:
          zu();
          break;
        case 13:
          st(dt);
          break;
        case 19:
          st(dt);
          break;
        case 10:
          Tp(c.type._context);
          break;
        case 22:
        case 23:
          td();
      }
      o = o.return;
    }
    if (lr = n, Fn = n = cl(n.current, null), xr = Oa = r, Rr = 0, wc = null, Ip = Ju = Ql = 0, Zr = ul = null, Xr !== null) {
      for (r = 0; r < Xr.length; r++) if (o = Xr[r], c = o.interleaved, c !== null) {
        o.interleaved = null;
        var p = c.next, y = o.pending;
        if (y !== null) {
          var C = y.next;
          y.next = p, c.next = C;
        }
        o.pending = c;
      }
      Xr = null;
    }
    return n;
  }
  function mm(n, r) {
    do {
      var o = Fn;
      try {
        if (Rp(), uc.current = Ff, pr) {
          for (var c = Kn.memoizedState; c !== null; ) {
            var p = c.queue;
            p !== null && (p.pending = null), c = c.next;
          }
          pr = !1;
        }
        if (Fl = 0, ye = dr = Kn = null, wt = !1, Bi = 0, Qf.current = null, o === null || o.return === null) {
          Rr = 1, wc = r, Fn = null;
          break;
        }
        e: {
          var y = n, C = o.return, M = o, B = r;
          if (r = xr, M.flags |= 32768, B !== null && typeof B == "object" && typeof B.then == "function") {
            var oe = B, Re = M, ke = Re.tag;
            if (!(Re.mode & 1) && (ke === 0 || ke === 11 || ke === 15)) {
              var Ce = Re.alternate;
              Ce ? (Re.updateQueue = Ce.updateQueue, Re.memoizedState = Ce.memoizedState, Re.lanes = Ce.lanes) : (Re.updateQueue = null, Re.memoizedState = null);
            }
            var Xe = lm(C);
            if (Xe !== null) {
              Xe.flags &= -257, Up(Xe, C, M, y, r), Xe.mode & 1 && hc(y, oe, r), r = Xe, B = oe;
              var rt = r.updateQueue;
              if (rt === null) {
                var ut = /* @__PURE__ */ new Set();
                ut.add(B), r.updateQueue = ut;
              } else rt.add(B);
              break e;
            } else {
              if (!(r & 1)) {
                hc(y, oe, r), bc();
                break e;
              }
              B = Error(d(426));
            }
          } else if (Pn && M.mode & 1) {
            var mr = lm(C);
            if (mr !== null) {
              !(mr.flags & 65536) && (mr.flags |= 256), Up(mr, C, M, y, r), wr(ol(B, M));
              break e;
            }
          }
          y = B = ol(B, M), Rr !== 4 && (Rr = 2), ul === null ? ul = [y] : ul.push(y), y = C;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var K = im(y, B, r);
                Kh(y, K);
                break e;
              case 1:
                M = B;
                var I = y.type, Z = y.stateNode;
                if (!(y.flags & 128) && (typeof I.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && (oi === null || !oi.has(Z)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var ze = om(y, M, r);
                  Kh(y, ze);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        Sm(o);
      } catch (ct) {
        r = ct, Fn === o && o !== null && (Fn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ym() {
    var n = Gl.current;
    return Gl.current = Ff, n === null ? Ff : n;
  }
  function bc() {
    (Rr === 0 || Rr === 3 || Rr === 2) && (Rr = 4), lr === null || !(Ql & 268435455) && !(Ju & 268435455) || $i(lr, xr);
  }
  function nd(n, r) {
    var o = $t;
    $t |= 2;
    var c = ym();
    (lr !== n || xr !== r) && (go = null, Jl(n, r));
    do
      try {
        uS();
        break;
      } catch (p) {
        mm(n, p);
      }
    while (!0);
    if (Rp(), $t = o, Gl.current = c, Fn !== null) throw Error(d(261));
    return lr = null, xr = 0, Rr;
  }
  function uS() {
    for (; Fn !== null; ) gm(Fn);
  }
  function sS() {
    for (; Fn !== null && !Ar(); ) gm(Fn);
  }
  function gm(n) {
    var r = Em(n.alternate, n, Oa);
    n.memoizedProps = n.pendingProps, r === null ? Sm(n) : Fn = r, Qf.current = null;
  }
  function Sm(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = aS(o, r), o !== null) {
          o.flags &= 32767, Fn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Rr = 6, Fn = null;
          return;
        }
      } else if (o = rS(o, r, Oa), o !== null) {
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
  function sl(n, r, o) {
    var c = Gt, p = ii.transition;
    try {
      ii.transition = null, Gt = 1, cS(n, r, o, c);
    } finally {
      ii.transition = p, Gt = c;
    }
    return null;
  }
  function cS(n, r, o, c) {
    do
      ns();
    while (li !== null);
    if ($t & 6) throw Error(d(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = o.lanes | o.childLanes;
    if (Ls(n, y), n === lr && (Fn = lr = null, xr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || es || (es = !0, bm(Pt, function() {
      return ns(), null;
    })), y = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || y) {
      y = ii.transition, ii.transition = null;
      var C = Gt;
      Gt = 1;
      var M = $t;
      $t |= 4, Qf.current = null, iS(n, o), vm(o, n), Al(yp), wu = !!mp, yp = mp = null, n.current = o, oS(o), pa(), $t = M, Gt = C, ii.transition = y;
    } else n.current = o;
    if (es && (es = !1, li = n, Jf = p), y = n.pendingLanes, y === 0 && (oi = null), ks(o.stateNode), Tr(n, Dn()), r !== null) for (c = n.onRecoverableError, o = 0; o < r.length; o++) p = r[o], c(p.value, { componentStack: p.stack, digest: p.digest });
    if (Xf) throw Xf = !1, n = $p, $p = null, n;
    return Jf & 1 && n.tag !== 0 && ns(), y = n.pendingLanes, y & 1 ? n === Zf ? _c++ : (_c = 0, Zf = n) : _c = 0, Pi(), null;
  }
  function ns() {
    if (li !== null) {
      var n = js(Jf), r = ii.transition, o = Gt;
      try {
        if (ii.transition = null, Gt = 16 > n ? 16 : n, li === null) var c = !1;
        else {
          if (n = li, li = null, Jf = 0, $t & 6) throw Error(d(331));
          var p = $t;
          for ($t |= 4, nt = n.current; nt !== null; ) {
            var y = nt, C = y.child;
            if (nt.flags & 16) {
              var M = y.deletions;
              if (M !== null) {
                for (var B = 0; B < M.length; B++) {
                  var oe = M[B];
                  for (nt = oe; nt !== null; ) {
                    var Re = nt;
                    switch (Re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yu(8, Re, y);
                    }
                    var ke = Re.child;
                    if (ke !== null) ke.return = Re, nt = ke;
                    else for (; nt !== null; ) {
                      Re = nt;
                      var Ce = Re.sibling, Xe = Re.return;
                      if (dm(Re), Re === oe) {
                        nt = null;
                        break;
                      }
                      if (Ce !== null) {
                        Ce.return = Xe, nt = Ce;
                        break;
                      }
                      nt = Xe;
                    }
                  }
                }
                var rt = y.alternate;
                if (rt !== null) {
                  var ut = rt.child;
                  if (ut !== null) {
                    rt.child = null;
                    do {
                      var mr = ut.sibling;
                      ut.sibling = null, ut = mr;
                    } while (ut !== null);
                  }
                }
                nt = y;
              }
            }
            if (y.subtreeFlags & 2064 && C !== null) C.return = y, nt = C;
            else e: for (; nt !== null; ) {
              if (y = nt, y.flags & 2048) switch (y.tag) {
                case 0:
                case 11:
                case 15:
                  Yu(9, y, y.return);
              }
              var K = y.sibling;
              if (K !== null) {
                K.return = y.return, nt = K;
                break e;
              }
              nt = y.return;
            }
          }
          var I = n.current;
          for (nt = I; nt !== null; ) {
            C = nt;
            var Z = C.child;
            if (C.subtreeFlags & 2064 && Z !== null) Z.return = C, nt = Z;
            else e: for (C = I; nt !== null; ) {
              if (M = nt, M.flags & 2048) try {
                switch (M.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qf(9, M);
                }
              } catch (ct) {
                ur(M, M.return, ct);
              }
              if (M === C) {
                nt = null;
                break e;
              }
              var ze = M.sibling;
              if (ze !== null) {
                ze.return = M.return, nt = ze;
                break e;
              }
              nt = M.return;
            }
          }
          if ($t = p, Pi(), ha && typeof ha.onPostCommitFiberRoot == "function") try {
            ha.onPostCommitFiberRoot(Ho, n);
          } catch {
          }
          c = !0;
        }
        return c;
      } finally {
        Gt = o, ii.transition = r;
      }
    }
    return !1;
  }
  function wm(n, r, o) {
    r = ol(o, r), r = im(n, r, 1), n = nl(n, r, 1), r = jr(), n !== null && (Vo(n, 1, r), Tr(n, r));
  }
  function ur(n, r, o) {
    if (n.tag === 3) wm(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        wm(r, n, o);
        break;
      } else if (r.tag === 1) {
        var c = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (oi === null || !oi.has(c))) {
          n = ol(o, n), n = om(r, n, 1), r = nl(r, n, 1), n = jr(), r !== null && (Vo(r, 1, n), Tr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function fS(n, r, o) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = jr(), n.pingedLanes |= n.suspendedLanes & o, lr === n && (xr & o) === o && (Rr === 4 || Rr === 3 && (xr & 130023424) === xr && 500 > Dn() - Kf ? Jl(n, 0) : Ip |= o), Tr(n, r);
  }
  function _m(n, r) {
    r === 0 && (n.mode & 1 ? (r = mu, mu <<= 1, !(mu & 130023424) && (mu = 4194304)) : r = 1);
    var o = jr();
    n = ho(n, r), n !== null && (Vo(n, r, o), Tr(n, o));
  }
  function Gp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), _m(n, o);
  }
  function dS(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    c !== null && c.delete(r), _m(n, o);
  }
  var Em;
  Em = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Ot.current) Ra = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return Ra = !1, yo(n, r, o);
      Ra = !!(n.flags & 131072);
    }
    else Ra = !1, Pn && r.flags & 1048576 && Zo(r, Ul, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var c = r.type;
        gc(n, r), n = r.pendingProps;
        var p = za(r, Nr.current);
        fr(r, o), p = Hl(null, r, c, n, p, o);
        var y = al();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Sr(c) ? (y = !0, jl(r)) : y = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Op(r), p.updater = Cf, r.stateNode = p, p._reactInternals = r, Dp(r, c, n, o), r = Bf(null, r, c, !0, y, o)) : (r.tag = 0, Pn && y && Sf(r), vr(null, r, p, o), r = r.child), r;
      case 16:
        c = r.elementType;
        e: {
          switch (gc(n, r), n = r.pendingProps, p = c._init, c = p(c._payload), r.type = c, p = r.tag = pS(c), n = ba(c, n), p) {
            case 0:
              r = Mt(null, r, c, n, o);
              break e;
            case 1:
              r = mc(null, r, c, n, o);
              break e;
            case 11:
              r = Bu(null, r, c, n, o);
              break e;
            case 14:
              r = ll(null, r, c, ba(c.type, n), o);
              break e;
          }
          throw Error(d(
            306,
            c,
            ""
          ));
        }
        return r;
      case 0:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ba(c, p), Mt(n, r, c, p, o);
      case 1:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ba(c, p), mc(n, r, c, p, o);
      case 3:
        e: {
          if (nS(r), n === null) throw Error(d(387));
          c = r.pendingProps, y = r.memoizedState, p = y.element, Qh(n, r), ac(r, c, null, o);
          var C = r.memoizedState;
          if (c = C.element, y.isDehydrated) if (y = { element: c, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
            p = ol(Error(d(423)), r), r = sm(n, r, c, o, p);
            break e;
          } else if (c !== p) {
            p = ol(Error(d(424)), r), r = sm(n, r, c, o, p);
            break e;
          } else for (Fa = Ua(r.stateNode.containerInfo.firstChild), Pa = r, Pn = !0, ti = null, o = nm(r, null, c, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Du(), c === p) {
              r = hr(n, r, o);
              break e;
            }
            vr(n, r, c, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return xf(r), n === null && _f(r), c = r.type, p = r.pendingProps, y = n !== null ? n.memoizedProps : null, C = p.children, Ml(c, p) ? C = null : y !== null && Ml(c, y) && (r.flags |= 32), Yl(n, r), vr(n, r, C, o), r.child;
      case 6:
        return n === null && _f(r), null;
      case 13:
        return cm(n, r, o);
      case 4:
        return Ap(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = ju(r, null, c, o) : vr(n, r, c, o), r.child;
      case 11:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ba(c, p), Bu(n, r, c, p, o);
      case 7:
        return vr(n, r, r.pendingProps, o), r.child;
      case 8:
        return vr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return vr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (c = r.type._context, p = r.pendingProps, y = r.memoizedProps, C = p.value, rn(Au, c._currentValue), c._currentValue = C, y !== null) if (wi(y.value, C)) {
            if (y.children === p.children && !Ot.current) {
              r = hr(n, r, o);
              break e;
            }
          } else for (y = r.child, y !== null && (y.return = r); y !== null; ) {
            var M = y.dependencies;
            if (M !== null) {
              C = y.child;
              for (var B = M.firstContext; B !== null; ) {
                if (B.context === c) {
                  if (y.tag === 1) {
                    B = An(-1, o & -o), B.tag = 2;
                    var oe = y.updateQueue;
                    if (oe !== null) {
                      oe = oe.shared;
                      var Re = oe.pending;
                      Re === null ? B.next = B : (B.next = Re.next, Re.next = B), oe.pending = B;
                    }
                  }
                  y.lanes |= o, B = y.alternate, B !== null && (B.lanes |= o), el(
                    y.return,
                    o,
                    r
                  ), M.lanes |= o;
                  break;
                }
                B = B.next;
              }
            } else if (y.tag === 10) C = y.type === r.type ? null : y.child;
            else if (y.tag === 18) {
              if (C = y.return, C === null) throw Error(d(341));
              C.lanes |= o, M = C.alternate, M !== null && (M.lanes |= o), el(C, o, r), C = y.sibling;
            } else C = y.child;
            if (C !== null) C.return = y;
            else for (C = y; C !== null; ) {
              if (C === r) {
                C = null;
                break;
              }
              if (y = C.sibling, y !== null) {
                y.return = C.return, C = y;
                break;
              }
              C = C.return;
            }
            y = C;
          }
          vr(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, c = r.pendingProps.children, fr(r, o), p = Be(p), c = c(p), r.flags |= 1, vr(n, r, c, o), r.child;
      case 14:
        return c = r.type, p = ba(c, r.pendingProps), p = ba(c.type, p), ll(n, r, c, p, o);
      case 15:
        return Hf(n, r, r.type, r.pendingProps, o);
      case 17:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ba(c, p), gc(n, r), r.tag = 1, Sr(c) ? (n = !0, jl(r)) : n = !1, fr(r, o), Jh(r, c, p), Dp(r, c, p, o), Bf(null, r, c, !0, n, o);
      case 19:
        return Pp(n, r, o);
      case 22:
        return Ta(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function bm(n, r) {
    return pn(n, r);
  }
  function Cm(n, r, o, c) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ui(n, r, o, c) {
    return new Cm(n, r, o, c);
  }
  function Qp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function pS(n) {
    if (typeof n == "function") return Qp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _e) return 11;
      if (n === le) return 14;
    }
    return 2;
  }
  function cl(n, r) {
    var o = n.alternate;
    return o === null ? (o = ui(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function rd(n, r, o, c, p, y) {
    var C = 2;
    if (c = n, typeof n == "function") Qp(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case He:
        return Zl(o.children, p, y, r);
      case q:
        C = 8, p |= 8;
        break;
      case be:
        return n = ui(12, o, r, p | 2), n.elementType = be, n.lanes = y, n;
      case Ne:
        return n = ui(13, o, r, p), n.elementType = Ne, n.lanes = y, n;
      case te:
        return n = ui(19, o, r, p), n.elementType = te, n.lanes = y, n;
      case de:
        return ad(o, p, y, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Oe:
            C = 10;
            break e;
          case De:
            C = 9;
            break e;
          case _e:
            C = 11;
            break e;
          case le:
            C = 14;
            break e;
          case me:
            C = 16, c = null;
            break e;
        }
        throw Error(d(130, n == null ? n : typeof n, ""));
    }
    return r = ui(C, o, r, p), r.elementType = n, r.type = c, r.lanes = y, r;
  }
  function Zl(n, r, o, c) {
    return n = ui(7, n, c, r), n.lanes = o, n;
  }
  function ad(n, r, o, c) {
    return n = ui(22, n, c, r), n.elementType = de, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function id(n, r, o) {
    return n = ui(6, n, null, r), n.lanes = o, n;
  }
  function Cc(n, r, o) {
    return r = ui(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function xc(n, r, o, c, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tl(0), this.expirationTimes = Tl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tl(0), this.identifierPrefix = c, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function Kp(n, r, o, c, p, y, C, M, B) {
    return n = new xc(n, r, o, M, B), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = ui(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: c, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Op(y), n;
  }
  function xm(n, r, o) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: we, key: c == null ? null : "" + c, children: n, containerInfo: r, implementation: o };
  }
  function Xp(n) {
    if (!n) return Ja;
    n = n._reactInternals;
    e: {
      if (qe(n) !== n || n.tag !== 1) throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Sr(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Sr(o)) return Ko(n, o, r);
    }
    return r;
  }
  function Jp(n, r, o, c, p, y, C, M, B) {
    return n = Kp(o, c, !0, n, p, y, C, M, B), n.context = Xp(null), o = n.current, c = jr(), p = So(o), y = An(c, p), y.callback = r ?? null, nl(o, y, p), n.current.lanes = p, Vo(n, p, c), Tr(n, c), n;
  }
  function od(n, r, o, c) {
    var p = r.current, y = jr(), C = So(p);
    return o = Xp(o), r.context === null ? r.context = o : r.pendingContext = o, r = An(y, C), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = nl(p, r, C), n !== null && (Xn(n, p, C, y), bf(n, p, C)), C;
  }
  function Rc(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Rm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Zp(n, r) {
    Rm(n, r), (n = n.alternate) && Rm(n, r);
  }
  function vS() {
    return null;
  }
  var ev = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ld(n) {
    this._internalRoot = n;
  }
  Tc.prototype.render = ld.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(d(409));
    od(n, r, null, null);
  }, Tc.prototype.unmount = ld.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Wi(function() {
        od(null, n, null, null);
      }), r[_i] = null;
    }
  };
  function Tc(n) {
    this._internalRoot = n;
  }
  Tc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Zt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Un.length && r !== 0 && r < Un[o].priority; o++) ;
      Un.splice(o, 0, n), o === 0 && gi(n);
    }
  };
  function fl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function ud(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Tm() {
  }
  function hS(n, r, o, c, p) {
    if (p) {
      if (typeof c == "function") {
        var y = c;
        c = function() {
          var oe = Rc(C);
          y.call(oe);
        };
      }
      var C = Jp(r, c, n, 0, null, !1, !1, "", Tm);
      return n._reactRootContainer = C, n[_i] = C.current, ji(n.nodeType === 8 ? n.parentNode : n), Wi(), C;
    }
    for (; p = n.lastChild; ) n.removeChild(p);
    if (typeof c == "function") {
      var M = c;
      c = function() {
        var oe = Rc(B);
        M.call(oe);
      };
    }
    var B = Kp(n, 0, !1, null, null, !1, !1, "", Tm);
    return n._reactRootContainer = B, n[_i] = B.current, ji(n.nodeType === 8 ? n.parentNode : n), Wi(function() {
      od(r, B, o, c);
    }), B;
  }
  function sd(n, r, o, c, p) {
    var y = o._reactRootContainer;
    if (y) {
      var C = y;
      if (typeof p == "function") {
        var M = p;
        p = function() {
          var B = Rc(C);
          M.call(B);
        };
      }
      od(r, C, n, p);
    } else C = hS(o, r, n, p, c);
    return Rc(C);
  }
  yu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = to(r.pendingLanes);
          o !== 0 && (Ms(r, o | 1), Tr(r, Dn()), !($t & 6) && (Zu = Dn() + 500, Pi()));
        }
        break;
      case 13:
        Wi(function() {
          var c = ho(n, 1);
          if (c !== null) {
            var p = jr();
            Xn(c, n, 1, p);
          }
        }), Zp(n, 1);
    }
  }, Io = function(n) {
    if (n.tag === 13) {
      var r = ho(n, 134217728);
      if (r !== null) {
        var o = jr();
        Xn(r, n, 134217728, o);
      }
      Zp(n, 134217728);
    }
  }, Us = function(n) {
    if (n.tag === 13) {
      var r = So(n), o = ho(n, r);
      if (o !== null) {
        var c = jr();
        Xn(o, n, r, c);
      }
      Zp(n, r);
    }
  }, Zt = function() {
    return Gt;
  }, gu = function(n, r) {
    var o = Gt;
    try {
      return Gt = n, r();
    } finally {
      Gt = o;
    }
  }, qt = function(n, r, o) {
    switch (r) {
      case "input":
        if (wn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var c = o[r];
            if (c !== n && c.form === n.form) {
              var p = yf(c);
              if (!p) throw Error(d(90));
              Vt(c), wn(c, p);
            }
          }
        }
        break;
      case "textarea":
        $n(n, o);
        break;
      case "select":
        r = o.value, r != null && Ln(n, !!o.multiple, r, !1);
    }
  }, jt = qp, cr = Wi;
  var mS = { usingClientEntryPoint: !1, Events: [Ui, ku, yf, Vn, lt, qp] }, Oc = { findFiberByHostInstance: po, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Om = { bundleType: Oc.bundleType, version: Oc.version, rendererPackageName: Oc.rendererPackageName, rendererConfig: Oc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: he.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ve(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Oc.findFiberByHostInstance || vS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cd.isDisabled && cd.supportsFiber) try {
      Ho = cd.inject(Om), ha = cd;
    } catch {
    }
  }
  return vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mS, vi.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fl(r)) throw Error(d(200));
    return xm(n, r, null, o);
  }, vi.createRoot = function(n, r) {
    if (!fl(n)) throw Error(d(299));
    var o = !1, c = "", p = ev;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = Kp(n, 1, !1, null, null, o, !1, c, p), n[_i] = r.current, ji(n.nodeType === 8 ? n.parentNode : n), new ld(r);
  }, vi.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = Ve(r), n = n === null ? null : n.stateNode, n;
  }, vi.flushSync = function(n) {
    return Wi(n);
  }, vi.hydrate = function(n, r, o) {
    if (!ud(r)) throw Error(d(200));
    return sd(null, n, r, !0, o);
  }, vi.hydrateRoot = function(n, r, o) {
    if (!fl(n)) throw Error(d(405));
    var c = o != null && o.hydratedSources || null, p = !1, y = "", C = ev;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (y = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = Jp(r, null, n, 1, o ?? null, p, !1, y, C), n[_i] = r.current, ji(n), c) for (n = 0; n < c.length; n++) o = c[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
      o,
      p
    );
    return new Tc(r);
  }, vi.render = function(n, r, o) {
    if (!ud(r)) throw Error(d(200));
    return sd(null, n, r, !1, o);
  }, vi.unmountComponentAtNode = function(n) {
    if (!ud(n)) throw Error(d(40));
    return n._reactRootContainer ? (Wi(function() {
      sd(null, null, n, !1, function() {
        n._reactRootContainer = null, n[_i] = null;
      });
    }), !0) : !1;
  }, vi.unstable_batchedUpdates = qp, vi.unstable_renderSubtreeIntoContainer = function(n, r, o, c) {
    if (!ud(o)) throw Error(d(200));
    if (n == null || n._reactInternals === void 0) throw Error(d(38));
    return sd(n, r, o, !1, c);
  }, vi.version = "18.2.0-next-9e3b772b8-20220608", vi;
}
var hi = {}, nR;
function oL() {
  if (nR) return hi;
  nR = 1;
  var l = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return l.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var s = ce, d = eT(), v = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, m = !1;
    function w(e) {
      m = e;
    }
    function _(e) {
      if (!m) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("warn", e, a);
      }
    }
    function g(e) {
      if (!m) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("error", e, a);
      }
    }
    function R(e, t, a) {
      {
        var i = v.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var f = a.map(function(h) {
          return String(h);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var O = 0, D = 1, L = 2, U = 3, H = 4, P = 5, W = 6, Y = 7, Se = 8, ue = 9, Q = 10, he = 11, G = 12, we = 13, He = 14, q = 15, be = 16, Oe = 17, De = 18, _e = 19, Ne = 21, te = 22, le = 23, me = 24, de = 25, A = !0, ie = !1, N = !1, F = !1, ee = !1, Te = !0, xe = !1, Pe = !1, Ie = !0, Le = !0, Fe = !0, Ke = /* @__PURE__ */ new Set(), vt = {}, ht = {};
    function Vt(e, t) {
      Me(e, t), Me(e + "Capture", t);
    }
    function Me(e, t) {
      vt[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), vt[e] = t;
      {
        var a = e.toLowerCase();
        ht[a] = e, e === "onDoubleClick" && (ht.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ke.add(t[i]);
    }
    var xt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", xn = Object.prototype.hasOwnProperty;
    function cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function wn(e) {
      try {
        return Lt(e), !1;
      } catch {
        return !0;
      }
    }
    function Lt(e) {
      return "" + e;
    }
    function sr(e, t) {
      if (wn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, cn(e)), Lt(e);
    }
    function er(e) {
      if (wn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cn(e)), Lt(e);
    }
    function Ln(e, t) {
      if (wn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, cn(e)), Lt(e);
    }
    function Er(e, t) {
      if (wn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, cn(e)), Lt(e);
    }
    function Dr(e) {
      if (wn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", cn(e)), Lt(e);
    }
    function $n(e) {
      if (wn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", cn(e)), Lt(e);
    }
    var tr = 0, Wn = 1, Yn = 2, un = 3, br = 4, gr = 5, Cr = 6, je = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", $e = je + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Tt = new RegExp("^[" + je + "][" + $e + "]*$"), Yt = {}, Bt = {};
    function Rn(e) {
      return xn.call(Bt, e) ? !0 : xn.call(Yt, e) ? !1 : Tt.test(e) ? (Bt[e] = !0, !0) : (Yt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function fn(e, t, a) {
      return t !== null ? t.type === tr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function qn(e, t, a, i) {
      if (a !== null && a.type === tr)
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
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function qt(e, t, a, i) {
      if (t === null || typeof t > "u" || qn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case un:
            return !t;
          case br:
            return t === !1;
          case gr:
            return isNaN(t);
          case Cr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Bn(e) {
      return Dt.hasOwnProperty(e) ? Dt[e] : null;
    }
    function Qt(e, t, a, i, u, f, h) {
      this.acceptsBooleans = t === Yn || t === un || t === br, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = h;
    }
    var Dt = {}, Vn = [
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
    Vn.forEach(function(e) {
      Dt[e] = new Qt(
        e,
        tr,
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
        Wn,
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
        Yn,
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
        Yn,
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
        br,
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
        Cr,
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
        gr,
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
        Wn,
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
        Wn,
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
        Wn,
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
        Wn,
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
    var cr = "xlinkHref";
    Dt[cr] = new Qt(
      "xlinkHref",
      Wn,
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
        Wn,
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
    var ea = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, We = !1;
    function ft(e) {
      !We && ea.test(e) && (We = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function mt(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        sr(a, t), i.sanitizeURL && ft("" + a);
        var f = i.attributeName, h = null;
        if (i.type === br) {
          if (e.hasAttribute(f)) {
            var S = e.getAttribute(f);
            return S === "" ? !0 : qt(t, a, i, !1) ? S : S === "" + a ? a : S;
          }
        } else if (e.hasAttribute(f)) {
          if (qt(t, a, i, !1))
            return e.getAttribute(f);
          if (i.type === un)
            return a;
          h = e.getAttribute(f);
        }
        return qt(t, a, i, !1) ? h === null ? a : h : h === "" + a ? a : h;
      }
    }
    function sn(e, t, a, i) {
      {
        if (!Rn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return sr(a, t), u === "" + a ? a : u;
      }
    }
    function kn(e, t, a, i) {
      var u = Bn(t);
      if (!fn(t, u, i)) {
        if (qt(t, a, u, i) && (a = null), i || u === null) {
          if (Rn(t)) {
            var f = t;
            a === null ? e.removeAttribute(f) : (sr(a, t), e.setAttribute(f, "" + a));
          }
          return;
        }
        var h = u.mustUseProperty;
        if (h) {
          var S = u.propertyName;
          if (a === null) {
            var E = u.type;
            e[S] = E === un ? !1 : "";
          } else
            e[S] = a;
          return;
        }
        var x = u.attributeName, k = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(x);
        else {
          var $ = u.type, V;
          $ === un || $ === br && a === !0 ? V = "" : (sr(a, x), V = "" + a, u.sanitizeURL && ft(V.toString())), k ? e.setAttributeNS(k, x, V) : e.setAttribute(x, V);
        }
      }
    }
    var Mn = Symbol.for("react.element"), jn = Symbol.for("react.portal"), mn = Symbol.for("react.fragment"), nr = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), Ee = Symbol.for("react.provider"), Ye = Symbol.for("react.context"), qe = Symbol.for("react.forward_ref"), zt = Symbol.for("react.suspense"), It = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), dn = Symbol.for("react.scope"), pn = Symbol.for("react.debug_trace_mode"), nn = Symbol.for("react.offscreen"), Ar = Symbol.for("react.legacy_hidden"), pa = Symbol.for("react.cache"), Dn = Symbol.for("react.tracing_marker"), va = Symbol.iterator, Os = "@@iterator";
    function Ai(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = va && e[va] || e[Os];
      return typeof t == "function" ? t : null;
    }
    var Pt = Object.assign, Cl = 0, eo, Ho, ha, ks, ta, Ds, As;
    function Ns() {
    }
    Ns.__reactDisabledLog = !0;
    function xl() {
      {
        if (Cl === 0) {
          eo = console.log, Ho = console.info, ha = console.warn, ks = console.error, ta = console.group, Ds = console.groupCollapsed, As = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ns,
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
        Cl++;
      }
    }
    function mu() {
      {
        if (Cl--, Cl === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Pt({}, e, {
              value: eo
            }),
            info: Pt({}, e, {
              value: Ho
            }),
            warn: Pt({}, e, {
              value: ha
            }),
            error: Pt({}, e, {
              value: ks
            }),
            group: Pt({}, e, {
              value: ta
            }),
            groupCollapsed: Pt({}, e, {
              value: Ds
            }),
            groupEnd: Pt({}, e, {
              value: As
            })
          });
        }
        Cl < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var to = v.ReactCurrentDispatcher, Ni;
    function Ga(e, t, a) {
      {
        if (Ni === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Ni = i && i[1] || "";
          }
        return `
` + Ni + e;
      }
    }
    var Bo = !1, Li;
    {
      var Rl = typeof WeakMap == "function" ? WeakMap : Map;
      Li = new Rl();
    }
    function Tl(e, t) {
      if (!e || Bo)
        return "";
      {
        var a = Li.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Bo = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = to.current, to.current = null, xl();
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
            } catch (ae) {
              i = ae;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (ae) {
              i = ae;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            i = ae;
          }
          e();
        }
      } catch (ae) {
        if (ae && i && typeof ae.stack == "string") {
          for (var S = ae.stack.split(`
`), E = i.stack.split(`
`), x = S.length - 1, k = E.length - 1; x >= 1 && k >= 0 && S[x] !== E[k]; )
            k--;
          for (; x >= 1 && k >= 0; x--, k--)
            if (S[x] !== E[k]) {
              if (x !== 1 || k !== 1)
                do
                  if (x--, k--, k < 0 || S[x] !== E[k]) {
                    var $ = `
` + S[x].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && Li.set(e, $), $;
                  }
                while (x >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        Bo = !1, to.current = f, mu(), Error.prepareStackTrace = u;
      }
      var V = e ? e.displayName || e.name : "", re = V ? Ga(V) : "";
      return typeof e == "function" && Li.set(e, re), re;
    }
    function Vo(e, t, a) {
      return Tl(e, !0);
    }
    function Ls(e, t, a) {
      return Tl(e, !1);
    }
    function Ms(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Gt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Tl(e, Ms(e));
      if (typeof e == "string")
        return Ga(e);
      switch (e) {
        case zt:
          return Ga("Suspense");
        case It:
          return Ga("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case qe:
            return Ls(e.render);
          case At:
            return Gt(e.type, t, a);
          case Ve: {
            var i = e, u = i._payload, f = i._init;
            try {
              return Gt(f(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function js(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case P:
          return Ga(e.type);
        case be:
          return Ga("Lazy");
        case we:
          return Ga("Suspense");
        case _e:
          return Ga("SuspenseList");
        case O:
        case L:
        case q:
          return Ls(e.type);
        case he:
          return Ls(e.type.render);
        case D:
          return Vo(e.type);
        default:
          return "";
      }
    }
    function yu(e) {
      try {
        var t = "", a = e;
        do
          t += js(a), a = a.return;
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
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Us(e) {
      return e.displayName || "Context";
    }
    function Zt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case mn:
          return "Fragment";
        case jn:
          return "Portal";
        case j:
          return "Profiler";
        case nr:
          return "StrictMode";
        case zt:
          return "Suspense";
        case It:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ye:
            var t = e;
            return Us(t) + ".Consumer";
          case Ee:
            var a = e;
            return Us(a._context) + ".Provider";
          case qe:
            return Io(e, e.render, "ForwardRef");
          case At:
            var i = e.displayName || null;
            return i !== null ? i : Zt(e.type) || "Memo";
          case Ve: {
            var u = e, f = u._payload, h = u._init;
            try {
              return Zt(h(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function gu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Ol(e) {
      return e.displayName || "Context";
    }
    function Rt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case me:
          return "Cache";
        case ue:
          var i = a;
          return Ol(i) + ".Consumer";
        case Q:
          var u = a;
          return Ol(u._context) + ".Provider";
        case De:
          return "DehydratedFragment";
        case he:
          return gu(a, a.render, "ForwardRef");
        case Y:
          return "Fragment";
        case P:
          return a;
        case H:
          return "Portal";
        case U:
          return "Root";
        case W:
          return "Text";
        case be:
          return Zt(a);
        case Se:
          return a === nr ? "StrictMode" : "Mode";
        case te:
          return "Offscreen";
        case G:
          return "Profiler";
        case Ne:
          return "Scope";
        case we:
          return "Suspense";
        case _e:
          return "SuspenseList";
        case de:
          return "TracingMarker";
        case D:
        case O:
        case Oe:
        case L:
        case He:
        case q:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var yi = v.ReactDebugCurrentFrame, Gn = null, ma = !1;
    function Qa() {
      {
        if (Gn === null)
          return null;
        var e = Gn._debugOwner;
        if (e !== null && typeof e < "u")
          return Rt(e);
      }
      return null;
    }
    function $o() {
      return Gn === null ? "" : yu(Gn);
    }
    function Un() {
      yi.getCurrentStack = null, Gn = null, ma = !1;
    }
    function Qn(e) {
      yi.getCurrentStack = e === null ? null : $o, Gn = e, ma = !1;
    }
    function zs() {
      return Gn;
    }
    function zr(e) {
      ma = e;
    }
    function ya(e) {
      return "" + e;
    }
    function gi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return $n(e), e;
        default:
          return "";
      }
    }
    var Su = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function kl(e, t) {
      Su[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Dl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Wo(e) {
      return e._valueTracker;
    }
    function Ka(e) {
      e._valueTracker = null;
    }
    function no(e) {
      var t = "";
      return e && (Dl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function wu(e) {
      var t = Dl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      $n(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, f = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(S) {
            $n(S), i = "" + S, f.call(this, S);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var h = {
          getValue: function() {
            return i;
          },
          setValue: function(S) {
            $n(S), i = "" + S;
          },
          stopTracking: function() {
            Ka(e), delete e[t];
          }
        };
        return h;
      }
    }
    function ro(e) {
      Wo(e) || (e._valueTracker = wu(e));
    }
    function _u(e) {
      if (!e)
        return !1;
      var t = Wo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = no(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Mi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ao = !1, Eu = !1, Ps = !1, Si = !1;
    function bu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function b(e, t) {
      var a = e, i = t.checked, u = Pt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function z(e, t) {
      kl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Eu && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Qa() || "A component", t.type), Eu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ao && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Qa() || "A component", t.type), ao = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: gi(t.value != null ? t.value : i),
        controlled: bu(t)
      };
    }
    function ne(e, t) {
      var a = e, i = t.checked;
      i != null && kn(a, "checked", i, !1);
    }
    function se(e, t) {
      var a = e;
      {
        var i = bu(t);
        !a._wrapperState.controlled && i && !Si && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Si = !0), a._wrapperState.controlled && !i && !Ps && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ps = !0);
      }
      ne(e, t);
      var u = gi(t.value), f = t.type;
      if (u != null)
        f === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = ya(u)) : a.value !== ya(u) && (a.value = ya(u));
      else if (f === "submit" || f === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? bt(a, t.type, u) : t.hasOwnProperty("defaultValue") && bt(a, t.type, gi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Ue(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, f = u === "submit" || u === "reset";
        if (f && (t.value === void 0 || t.value === null))
          return;
        var h = ya(i._wrapperState.initialValue);
        a || h !== i.value && (i.value = h), i.defaultValue = h;
      }
      var S = i.name;
      S !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, S !== "" && (i.name = S);
    }
    function ot(e, t) {
      var a = e;
      se(a, t), Ze(a, t);
    }
    function Ze(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        sr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), f = 0; f < u.length; f++) {
          var h = u[f];
          if (!(h === e || h.form !== e.form)) {
            var S = Wm(h);
            if (!S)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            _u(h), se(h, S);
          }
        }
      }
    }
    function bt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Mi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = ya(e._wrapperState.initialValue) : e.defaultValue !== ya(a) && (e.defaultValue = ya(a)));
    }
    var Ft = !1, vn = !1, yn = !1;
    function gn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? s.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || vn || (vn = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (yn || (yn = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ft && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ft = !0);
    }
    function Sn(e, t) {
      t.value != null && e.setAttribute("value", ya(gi(t.value)));
    }
    var zn = Array.isArray;
    function en(e) {
      return zn(e);
    }
    var Yo;
    Yo = !1;
    function Cu() {
      var e = Qa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Fs = ["value", "defaultValue"];
    function Hs(e) {
      {
        kl("select", e);
        for (var t = 0; t < Fs.length; t++) {
          var a = Fs[t];
          if (e[a] != null) {
            var i = en(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Cu()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Cu());
          }
        }
      }
    }
    function io(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var f = a, h = {}, S = 0; S < f.length; S++)
          h["$" + f[S]] = !0;
        for (var E = 0; E < u.length; E++) {
          var x = h.hasOwnProperty("$" + u[E].value);
          u[E].selected !== x && (u[E].selected = x), x && i && (u[E].defaultSelected = !0);
        }
      } else {
        for (var k = ya(gi(a)), $ = null, V = 0; V < u.length; V++) {
          if (u[V].value === k) {
            u[V].selected = !0, i && (u[V].defaultSelected = !0);
            return;
          }
          $ === null && !u[V].disabled && ($ = u[V]);
        }
        $ !== null && ($.selected = !0);
      }
    }
    function Bs(e, t) {
      return Pt({}, t, {
        value: void 0
      });
    }
    function Vs(e, t) {
      var a = e;
      Hs(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Yo && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Yo = !0);
    }
    function tp(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? io(a, !!t.multiple, i, !1) : t.defaultValue != null && io(a, !!t.multiple, t.defaultValue, !0);
    }
    function zg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? io(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? io(a, !!t.multiple, t.defaultValue, !0) : io(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function mh(e, t) {
      var a = e, i = t.value;
      i != null && io(a, !!t.multiple, i, !1);
    }
    var yh = !1;
    function np(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Pt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ya(a._wrapperState.initialValue)
      });
      return i;
    }
    function gh(e, t) {
      var a = e;
      kl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !yh && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Qa() || "A component"), yh = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, f = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (f != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (en(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            f = u;
          }
        }
        f == null && (f = ""), i = f;
      }
      a._wrapperState = {
        initialValue: gi(i)
      };
    }
    function Sh(e, t) {
      var a = e, i = gi(t.value), u = gi(t.defaultValue);
      if (i != null) {
        var f = ya(i);
        f !== a.value && (a.value = f), t.defaultValue == null && a.defaultValue !== f && (a.defaultValue = f);
      }
      u != null && (a.defaultValue = ya(u));
    }
    function lf(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Pg(e, t) {
      Sh(e, t);
    }
    var oo = "http://www.w3.org/1999/xhtml", Fg = "http://www.w3.org/1998/Math/MathML", uf = "http://www.w3.org/2000/svg";
    function rp(e) {
      switch (e) {
        case "svg":
          return uf;
        case "math":
          return Fg;
        default:
          return oo;
      }
    }
    function ap(e, t) {
      return e == null || e === oo ? rp(t) : e === uf && t === "foreignObject" ? oo : e;
    }
    var Hg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sf, wh = Hg(function(e, t) {
      if (e.namespaceURI === uf && !("innerHTML" in e)) {
        sf = sf || document.createElement("div"), sf.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sf.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ga = 1, lo = 3, rr = 8, ja = 9, ip = 11, Is = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === lo) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, _h = {
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
    }, xu = {
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
    function Eh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var bh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(xu).forEach(function(e) {
      bh.forEach(function(t) {
        xu[Eh(t, e)] = xu[e];
      });
    });
    function qo(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(xu.hasOwnProperty(e) && xu[e]) ? t + "px" : (Er(t, e), ("" + t).trim());
    }
    var Bg = /([A-Z])/g, Vg = /^ms-/;
    function Ig(e) {
      return e.replace(Bg, "-$1").toLowerCase().replace(Vg, "-ms-");
    }
    var op = function() {
    };
    {
      var Ch = /^(?:webkit|moz|o)[A-Z]/, $s = /^-ms-/, Ws = /-(.)/g, xh = /;\s*$/, uo = {}, lp = {}, up = !1, cf = !1, sp = function(e) {
        return e.replace(Ws, function(t, a) {
          return a.toUpperCase();
        });
      }, Rh = function(e) {
        uo.hasOwnProperty(e) && uo[e] || (uo[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          sp(e.replace($s, "ms-"))
        ));
      }, Th = function(e) {
        uo.hasOwnProperty(e) && uo[e] || (uo[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Oh = function(e, t) {
        lp.hasOwnProperty(t) && lp[t] || (lp[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(xh, "")));
      }, $g = function(e, t) {
        up || (up = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Wg = function(e, t) {
        cf || (cf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      op = function(e, t) {
        e.indexOf("-") > -1 ? Rh(e) : Ch.test(e) ? Th(e) : xh.test(t) && Oh(e, t), typeof t == "number" && (isNaN(t) ? $g(e, t) : isFinite(t) || Wg(e, t));
      };
    }
    var Yg = op;
    function qg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var f = i.indexOf("--") === 0;
              t += a + (f ? i : Ig(i)) + ":", t += qo(i, u, f), a = ";";
            }
          }
        return t || null;
      }
    }
    function kh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Yg(i, t[i]);
          var f = qo(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, f) : a[i] = f;
        }
    }
    function wi(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ru(e) {
      var t = {};
      for (var a in e)
        for (var i = _h[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Dh(e, t) {
      {
        if (!t)
          return;
        var a = Ru(e), i = Ru(t), u = {};
        for (var f in a) {
          var h = a[f], S = i[f];
          if (S && h !== S) {
            var E = h + "," + S;
            if (u[E])
              continue;
            u[E] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", wi(e[h]) ? "Removing" : "Updating", h, S);
          }
        }
      }
    }
    var Ah = {
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
    }, Nh = Pt({
      menuitem: !0
    }, Ah), Lh = "__html";
    function Ys(e, t) {
      if (t) {
        if (Nh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Lh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Al(e, t) {
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
    var ff = {
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
    }, Nl = {
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
    }, Go = {}, qs = new RegExp("^(aria)-[" + $e + "]*$"), cp = new RegExp("^(aria)[A-Z][" + $e + "]*$");
    function Mh(e, t) {
      {
        if (xn.call(Go, t) && Go[t])
          return !0;
        if (cp.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Nl.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Go[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Go[t] = !0, !0;
        }
        if (qs.test(t)) {
          var u = t.toLowerCase(), f = Nl.hasOwnProperty(u) ? u : null;
          if (f == null)
            return Go[t] = !0, !1;
          if (t !== f)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, f), Go[t] = !0, !0;
        }
      }
      return !0;
    }
    function df(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Mh(e, i);
          u || a.push(i);
        }
        var f = a.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e);
      }
    }
    function Tu(e, t) {
      Al(e, t) || df(e, t);
    }
    var pf = !1;
    function jh(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !pf && (pf = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Gs = function() {
    };
    {
      var Kr = {}, fp = /^on./, Uh = /^on[^A-Z]/, zh = new RegExp("^(aria)-[" + $e + "]*$"), Ph = new RegExp("^(aria)[A-Z][" + $e + "]*$");
      Gs = function(e, t, a, i) {
        if (xn.call(Kr, t) && Kr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Kr[t] = !0, !0;
        if (i != null) {
          var f = i.registrationNameDependencies, h = i.possibleRegistrationNames;
          if (f.hasOwnProperty(t))
            return !0;
          var S = h.hasOwnProperty(u) ? h[u] : null;
          if (S != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, S), Kr[t] = !0, !0;
          if (fp.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Kr[t] = !0, !0;
        } else if (fp.test(t))
          return Uh.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Kr[t] = !0, !0;
        if (zh.test(t) || Ph.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Kr[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Kr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Kr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Kr[t] = !0, !0;
        var E = Bn(t), x = E !== null && E.type === tr;
        if (ff.hasOwnProperty(u)) {
          var k = ff[u];
          if (k !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, k), Kr[t] = !0, !0;
        } else if (!x && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Kr[t] = !0, !0;
        return typeof a == "boolean" && qn(t, a, E, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Kr[t] = !0, !0) : x ? !0 : qn(t, a, E, !1) ? (Kr[t] = !0, !1) : ((a === "false" || a === "true") && E !== null && E.type === un && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Kr[t] = !0), !0);
      };
    }
    var Fh = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var f = Gs(e, u, t[u], a);
          f || i.push(u);
        }
        var h = i.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e);
      }
    };
    function Qo(e, t, a) {
      Al(e, t) || Fh(e, t, a);
    }
    var vf = 1, Qs = 2, Ks = 4, Gg = vf | Qs | Ks, so = null;
    function Qg(e) {
      so !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), so = e;
    }
    function Hh() {
      so === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), so = null;
    }
    function Bh(e) {
      return e === so;
    }
    function Tn(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === lo ? t.parentNode : t;
    }
    var Xs = null, co = null, ji = null;
    function dp(e) {
      var t = is(e);
      if (t) {
        if (typeof Xs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Wm(a);
          Xs(t.stateNode, t.type, i);
        }
      }
    }
    function pp(e) {
      Xs = e;
    }
    function Ou(e) {
      co ? ji ? ji.push(e) : ji = [e] : co = e;
    }
    function hf() {
      return co !== null || ji !== null;
    }
    function Ll() {
      if (co) {
        var e = co, t = ji;
        if (co = null, ji = null, dp(e), t)
          for (var a = 0; a < t.length; a++)
            dp(t[a]);
      }
    }
    var vp = function(e, t) {
      return e(t);
    }, Vh = function() {
    }, hp = !1;
    function Ih() {
      var e = hf();
      e && (Vh(), Ll());
    }
    function Js(e, t, a) {
      if (hp)
        return e(t, a);
      hp = !0;
      try {
        return vp(e, t, a);
      } finally {
        hp = !1, Ih();
      }
    }
    function mf(e, t, a) {
      vp = e, Vh = a;
    }
    function mp(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function yp(e, t, a) {
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
          return !!(a.disabled && mp(t));
        default:
          return !1;
      }
    }
    function Ml(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Wm(a);
      if (i === null)
        return null;
      var u = i[t];
      if (yp(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Zs = !1;
    if (xt)
      try {
        var ec = {};
        Object.defineProperty(ec, "passive", {
          get: function() {
            Zs = !0;
          }
        }), window.addEventListener("test", ec, ec), window.removeEventListener("test", ec, ec);
      } catch {
        Zs = !1;
      }
    function gp(e, t, a, i, u, f, h, S, E) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (k) {
        this.onError(k);
      }
    }
    var $h = gp;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Sp = document.createElement("react");
      $h = function(t, a, i, u, f, h, S, E, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var k = document.createEvent("Event"), $ = !1, V = !0, re = window.event, ae = Object.getOwnPropertyDescriptor(window, "event");
        function pe() {
          Sp.removeEventListener(ve, St, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = re);
        }
        var et = Array.prototype.slice.call(arguments, 3);
        function St() {
          $ = !0, pe(), a.apply(i, et), V = !1;
        }
        var pt, Xt = !1, Wt = !1;
        function X(J) {
          if (pt = J.error, Xt = !0, pt === null && J.colno === 0 && J.lineno === 0 && (Wt = !0), J.defaultPrevented && pt != null && typeof pt == "object")
            try {
              pt._suppressLogging = !0;
            } catch {
            }
        }
        var ve = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", X), Sp.addEventListener(ve, St, !1), k.initEvent(ve, !1, !1), Sp.dispatchEvent(k), ae && Object.defineProperty(window, "event", ae), $ && V && (Xt ? Wt && (pt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : pt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(pt)), window.removeEventListener("error", X), !$)
          return pe(), gp.apply(this, arguments);
      };
    }
    var wp = $h, Ua = !1, tc = null, fo = !1, Xa = null, nc = {
      onError: function(e) {
        Ua = !0, tc = e;
      }
    };
    function _i(e, t, a, i, u, f, h, S, E) {
      Ua = !1, tc = null, wp.apply(nc, arguments);
    }
    function _p(e, t, a, i, u, f, h, S, E) {
      if (_i.apply(this, arguments), Ua) {
        var x = po();
        fo || (fo = !0, Xa = x);
      }
    }
    function Kg() {
      if (fo) {
        var e = Xa;
        throw fo = !1, Xa = null, e;
      }
    }
    function Xg() {
      return Ua;
    }
    function po() {
      if (Ua) {
        var e = tc;
        return Ua = !1, tc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ui(e) {
      return e._reactInternals;
    }
    function ku(e) {
      return e._reactInternals !== void 0;
    }
    function yf(e, t) {
      e._reactInternals = t;
    }
    var yt = (
      /*                      */
      0
    ), Ei = (
      /*                */
      1
    ), On = (
      /*                    */
      2
    ), st = (
      /*                       */
      4
    ), rn = (
      /*                */
      16
    ), Ja = (
      /*                 */
      32
    ), Nr = (
      /*                     */
      64
    ), Ot = (
      /*                   */
      128
    ), na = (
      /*            */
      256
    ), za = (
      /*                          */
      512
    ), Sr = (
      /*                     */
      1024
    ), Sa = (
      /*                      */
      2048
    ), zi = (
      /*                    */
      4096
    ), Ko = (
      /*                   */
      8192
    ), jl = (
      /*             */
      16384
    ), Wh = Sa | st | Nr | za | Sr | jl, vo = (
      /*               */
      32767
    ), Xo = (
      /*                   */
      32768
    ), Pr = (
      /*                */
      65536
    ), gf = (
      /* */
      131072
    ), Yh = (
      /*                       */
      1048576
    ), Pi = (
      /*                    */
      2097152
    ), Za = (
      /*                 */
      4194304
    ), Jo = (
      /*                */
      8388608
    ), ei = (
      /*               */
      16777216
    ), Ul = (
      /*              */
      33554432
    ), wa = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      st | Sr | 0
    ), _a = On | st | rn | Ja | za | zi | Ko, bi = st | Nr | za | Ko, Ea = Sa | rn, Fr = Za | Jo | Pi, zl = v.ReactCurrentOwner;
    function Zo(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (On | zi)) !== yt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === U ? a : null;
    }
    function Sf(e) {
      if (e.tag === we) {
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
    function wf(e) {
      return e.tag === U ? e.stateNode.containerInfo : null;
    }
    function Pa(e) {
      return Zo(e) === e;
    }
    function Fa(e) {
      {
        var t = zl.current;
        if (t !== null && t.tag === D) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Rt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ui(e);
      return u ? Zo(u) === u : !1;
    }
    function Pn(e) {
      if (Zo(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ti(e) {
      var t = e.alternate;
      if (!t) {
        var a = Zo(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var f = i.return;
        if (f === null)
          break;
        var h = f.alternate;
        if (h === null) {
          var S = f.return;
          if (S !== null) {
            i = u = S;
            continue;
          }
          break;
        }
        if (f.child === h.child) {
          for (var E = f.child; E; ) {
            if (E === i)
              return Pn(f), e;
            if (E === u)
              return Pn(f), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = f, u = h;
        else {
          for (var x = !1, k = f.child; k; ) {
            if (k === i) {
              x = !0, i = f, u = h;
              break;
            }
            if (k === u) {
              x = !0, u = f, i = h;
              break;
            }
            k = k.sibling;
          }
          if (!x) {
            for (k = h.child; k; ) {
              if (k === i) {
                x = !0, i = h, u = f;
                break;
              }
              if (k === u) {
                x = !0, u = h, i = f;
                break;
              }
              k = k.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== U)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ep(e) {
      var t = ti(e);
      return t !== null ? bp(t) : null;
    }
    function bp(e) {
      if (e.tag === P || e.tag === W)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = bp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Cp(e) {
      var t = ti(e);
      return t !== null ? _f(t) : null;
    }
    function _f(e) {
      if (e.tag === P || e.tag === W)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== H) {
          var a = _f(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var xp = d.unstable_scheduleCallback, Ef = d.unstable_cancelCallback, qh = d.unstable_shouldYield, Du = d.unstable_requestPaint, wr = d.unstable_now, Jg = d.unstable_getCurrentPriorityLevel, ba = d.unstable_ImmediatePriority, Au = d.unstable_UserBlockingPriority, Fi = d.unstable_NormalPriority, Nu = d.unstable_LowPriority, rc = d.unstable_IdlePriority, Rp = d.unstable_yieldValue, Tp = d.unstable_setDisableYieldValue, el = null, fr = null, Be = null, Xr = !1, Ha = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Gh(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ie && (e = Pt({}, e, {
          getLaneLabelMap: bf,
          injectProfilingHooks: nl
        })), el = t.inject(e), fr = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ho(e, t) {
      if (fr && typeof fr.onScheduleFiberRoot == "function")
        try {
          fr.onScheduleFiberRoot(el, e, t);
        } catch (a) {
          Xr || (Xr = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function tl(e, t) {
      if (fr && typeof fr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ot) === Ot;
          if (Le) {
            var i;
            switch (t) {
              case hr:
                i = ba;
                break;
              case yo:
                i = Au;
                break;
              case Vi:
                i = Fi;
                break;
              case Vu:
                i = rc;
                break;
              default:
                i = Fi;
                break;
            }
            fr.onCommitFiberRoot(el, e, i, a);
          }
        } catch (u) {
          Xr || (Xr = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Op(e) {
      if (fr && typeof fr.onPostCommitFiberRoot == "function")
        try {
          fr.onPostCommitFiberRoot(el, e);
        } catch (t) {
          Xr || (Xr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Qh(e) {
      if (fr && typeof fr.onCommitFiberUnmount == "function")
        try {
          fr.onCommitFiberUnmount(el, e);
        } catch (t) {
          Xr || (Xr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function An(e) {
      if (typeof Rp == "function" && (Tp(e), w(e)), fr && typeof fr.setStrictMode == "function")
        try {
          fr.setStrictMode(el, e);
        } catch (t) {
          Xr || (Xr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function nl(e) {
      Be = e;
    }
    function bf() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < dr; a++) {
          var i = rm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Kh(e) {
      Be !== null && typeof Be.markCommitStarted == "function" && Be.markCommitStarted(e);
    }
    function ac() {
      Be !== null && typeof Be.markCommitStopped == "function" && Be.markCommitStopped();
    }
    function Lu(e) {
      Be !== null && typeof Be.markComponentRenderStarted == "function" && Be.markComponentRenderStarted(e);
    }
    function Pl() {
      Be !== null && typeof Be.markComponentRenderStopped == "function" && Be.markComponentRenderStopped();
    }
    function kp(e) {
      Be !== null && typeof Be.markComponentPassiveEffectMountStarted == "function" && Be.markComponentPassiveEffectMountStarted(e);
    }
    function Cf() {
      Be !== null && typeof Be.markComponentPassiveEffectMountStopped == "function" && Be.markComponentPassiveEffectMountStopped();
    }
    function Xh(e) {
      Be !== null && typeof Be.markComponentPassiveEffectUnmountStarted == "function" && Be.markComponentPassiveEffectUnmountStarted(e);
    }
    function Jh() {
      Be !== null && typeof Be.markComponentPassiveEffectUnmountStopped == "function" && Be.markComponentPassiveEffectUnmountStopped();
    }
    function Zh(e) {
      Be !== null && typeof Be.markComponentLayoutEffectMountStarted == "function" && Be.markComponentLayoutEffectMountStarted(e);
    }
    function Dp() {
      Be !== null && typeof Be.markComponentLayoutEffectMountStopped == "function" && Be.markComponentLayoutEffectMountStopped();
    }
    function Mu(e) {
      Be !== null && typeof Be.markComponentLayoutEffectUnmountStarted == "function" && Be.markComponentLayoutEffectUnmountStarted(e);
    }
    function ic() {
      Be !== null && typeof Be.markComponentLayoutEffectUnmountStopped == "function" && Be.markComponentLayoutEffectUnmountStopped();
    }
    function em(e, t, a) {
      Be !== null && typeof Be.markComponentErrored == "function" && Be.markComponentErrored(e, t, a);
    }
    function tm(e, t, a) {
      Be !== null && typeof Be.markComponentSuspended == "function" && Be.markComponentSuspended(e, t, a);
    }
    function ju(e) {
      Be !== null && typeof Be.markLayoutEffectsStarted == "function" && Be.markLayoutEffectsStarted(e);
    }
    function nm() {
      Be !== null && typeof Be.markLayoutEffectsStopped == "function" && Be.markLayoutEffectsStopped();
    }
    function oc(e) {
      Be !== null && typeof Be.markPassiveEffectsStarted == "function" && Be.markPassiveEffectsStarted(e);
    }
    function Hi() {
      Be !== null && typeof Be.markPassiveEffectsStopped == "function" && Be.markPassiveEffectsStopped();
    }
    function Uu(e) {
      Be !== null && typeof Be.markRenderStarted == "function" && Be.markRenderStarted(e);
    }
    function lc() {
      Be !== null && typeof Be.markRenderYielded == "function" && Be.markRenderYielded();
    }
    function rl() {
      Be !== null && typeof Be.markRenderStopped == "function" && Be.markRenderStopped();
    }
    function Ap(e) {
      Be !== null && typeof Be.markRenderScheduled == "function" && Be.markRenderScheduled(e);
    }
    function zu(e, t) {
      Be !== null && typeof Be.markForceUpdateScheduled == "function" && Be.markForceUpdateScheduled(e, t);
    }
    function xf(e, t) {
      Be !== null && typeof Be.markStateUpdateScheduled == "function" && Be.markStateUpdateScheduled(e, t);
    }
    var gt = (
      /*                         */
      0
    ), dt = (
      /*                 */
      1
    ), tn = (
      /*                    */
      2
    ), ar = (
      /*               */
      8
    ), ni = (
      /*              */
      16
    ), uc = Math.clz32 ? Math.clz32 : Kn, Np = Math.log, Fl = Math.LN2;
    function Kn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Np(t) / Fl | 0) | 0;
    }
    var dr = 31, ye = (
      /*                        */
      0
    ), pr = (
      /*                          */
      0
    ), wt = (
      /*                        */
      1
    ), Bi = (
      /*    */
      2
    ), mo = (
      /*             */
      4
    ), ir = (
      /*            */
      8
    ), ri = (
      /*                     */
      16
    ), Hl = (
      /*                */
      32
    ), al = (
      /*                       */
      4194240
    ), Ca = (
      /*                        */
      64
    ), xa = (
      /*                        */
      128
    ), Bl = (
      /*                        */
      256
    ), sc = (
      /*                        */
      512
    ), cc = (
      /*                        */
      1024
    ), Rf = (
      /*                        */
      2048
    ), Tf = (
      /*                        */
      4096
    ), Of = (
      /*                        */
      8192
    ), kf = (
      /*                        */
      16384
    ), Df = (
      /*                       */
      32768
    ), Af = (
      /*                       */
      65536
    ), Nf = (
      /*                       */
      131072
    ), Lf = (
      /*                       */
      262144
    ), Vl = (
      /*                       */
      524288
    ), Mf = (
      /*                       */
      1048576
    ), Pu = (
      /*                       */
      2097152
    ), Il = (
      /*                            */
      130023424
    ), $l = (
      /*                             */
      4194304
    ), fc = (
      /*                             */
      8388608
    ), jf = (
      /*                             */
      16777216
    ), Uf = (
      /*                             */
      33554432
    ), zf = (
      /*                             */
      67108864
    ), Lp = $l, Wl = (
      /*          */
      134217728
    ), Mp = (
      /*                          */
      268435455
    ), Fu = (
      /*               */
      268435456
    ), il = (
      /*                        */
      536870912
    ), Ba = (
      /*                   */
      1073741824
    );
    function rm(e) {
      {
        if (e & wt)
          return "Sync";
        if (e & Bi)
          return "InputContinuousHydration";
        if (e & mo)
          return "InputContinuous";
        if (e & ir)
          return "DefaultHydration";
        if (e & ri)
          return "Default";
        if (e & Hl)
          return "TransitionHydration";
        if (e & al)
          return "Transition";
        if (e & Il)
          return "Retry";
        if (e & Wl)
          return "SelectiveHydration";
        if (e & Fu)
          return "IdleHydration";
        if (e & il)
          return "Idle";
        if (e & Ba)
          return "Offscreen";
      }
    }
    var Nn = -1, Pf = Ca, dc = $l;
    function Hu(e) {
      switch (vr(e)) {
        case wt:
          return wt;
        case Bi:
          return Bi;
        case mo:
          return mo;
        case ir:
          return ir;
        case ri:
          return ri;
        case Hl:
          return Hl;
        case Ca:
        case xa:
        case Bl:
        case sc:
        case cc:
        case Rf:
        case Tf:
        case Of:
        case kf:
        case Df:
        case Af:
        case Nf:
        case Lf:
        case Vl:
        case Mf:
        case Pu:
          return e & al;
        case $l:
        case fc:
        case jf:
        case Uf:
        case zf:
          return e & Il;
        case Wl:
          return Wl;
        case Fu:
          return Fu;
        case il:
          return il;
        case Ba:
          return Ba;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function pc(e, t) {
      var a = e.pendingLanes;
      if (a === ye)
        return ye;
      var i = ye, u = e.suspendedLanes, f = e.pingedLanes, h = a & Mp;
      if (h !== ye) {
        var S = h & ~u;
        if (S !== ye)
          i = Hu(S);
        else {
          var E = h & f;
          E !== ye && (i = Hu(E));
        }
      } else {
        var x = a & ~u;
        x !== ye ? i = Hu(x) : f !== ye && (i = Hu(f));
      }
      if (i === ye)
        return ye;
      if (t !== ye && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ye) {
        var k = vr(i), $ = vr(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          k >= $ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          k === ri && ($ & al) !== ye
        )
          return t;
      }
      (i & mo) !== ye && (i |= a & ri);
      var V = e.entangledLanes;
      if (V !== ye)
        for (var re = e.entanglements, ae = i & V; ae > 0; ) {
          var pe = ll(ae), et = 1 << pe;
          i |= re[pe], ae &= ~et;
        }
      return i;
    }
    function Ff(e, t) {
      for (var a = e.eventTimes, i = Nn; t > 0; ) {
        var u = ll(t), f = 1 << u, h = a[u];
        h > i && (i = h), t &= ~f;
      }
      return i;
    }
    function Zg(e, t) {
      switch (e) {
        case wt:
        case Bi:
        case mo:
          return t + 250;
        case ir:
        case ri:
        case Hl:
        case Ca:
        case xa:
        case Bl:
        case sc:
        case cc:
        case Rf:
        case Tf:
        case Of:
        case kf:
        case Df:
        case Af:
        case Nf:
        case Lf:
        case Vl:
        case Mf:
        case Pu:
          return t + 5e3;
        case $l:
        case fc:
        case jf:
        case Uf:
        case zf:
          return Nn;
        case Wl:
        case Fu:
        case il:
        case Ba:
          return Nn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Nn;
      }
    }
    function eS(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, f = e.expirationTimes, h = a; h > 0; ) {
        var S = ll(h), E = 1 << S, x = f[S];
        x === Nn ? ((E & i) === ye || (E & u) !== ye) && (f[S] = Zg(E, t)) : x <= t && (e.expiredLanes |= E), h &= ~E;
      }
    }
    function tS(e) {
      return Hu(e.pendingLanes);
    }
    function ol(e) {
      var t = e.pendingLanes & ~Ba;
      return t !== ye ? t : t & Ba ? Ba : ye;
    }
    function jp(e) {
      return (e & wt) !== ye;
    }
    function vc(e) {
      return (e & Mp) !== ye;
    }
    function am(e) {
      return (e & Il) === e;
    }
    function im(e) {
      var t = wt | mo | ri;
      return (e & t) === ye;
    }
    function om(e) {
      return (e & al) === e;
    }
    function hc(e, t) {
      var a = Bi | mo | ir | ri;
      return (t & a) !== ye;
    }
    function lm(e, t) {
      return (t & e.expiredLanes) !== ye;
    }
    function Up(e) {
      return (e & al) !== ye;
    }
    function um() {
      var e = Pf;
      return Pf <<= 1, (Pf & al) === ye && (Pf = Ca), e;
    }
    function Ra() {
      var e = dc;
      return dc <<= 1, (dc & Il) === ye && (dc = $l), e;
    }
    function vr(e) {
      return e & -e;
    }
    function Bu(e) {
      return vr(e);
    }
    function ll(e) {
      return 31 - uc(e);
    }
    function Hf(e) {
      return ll(e);
    }
    function Ta(e, t) {
      return (e & t) !== ye;
    }
    function Yl(e, t) {
      return (e & t) === t;
    }
    function Mt(e, t) {
      return e | t;
    }
    function mc(e, t) {
      return e & ~t;
    }
    function Bf(e, t) {
      return e & t;
    }
    function nS(e) {
      return e;
    }
    function sm(e, t) {
      return e !== pr && e < t ? e : t;
    }
    function yc(e) {
      for (var t = [], a = 0; a < dr; a++)
        t.push(e);
      return t;
    }
    function ql(e, t, a) {
      e.pendingLanes |= t, t !== il && (e.suspendedLanes = ye, e.pingedLanes = ye);
      var i = e.eventTimes, u = Hf(t);
      i[u] = a;
    }
    function cm(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = ll(i), f = 1 << u;
        a[u] = Nn, i &= ~f;
      }
    }
    function Vf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function If(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ye, e.pingedLanes = ye, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, f = e.expirationTimes, h = a; h > 0; ) {
        var S = ll(h), E = 1 << S;
        i[S] = ye, u[S] = Nn, f[S] = Nn, h &= ~E;
      }
    }
    function zp(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var f = ll(u), h = 1 << f;
        // Is this one of the newly entangled lanes?
        h & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[f] & t && (i[f] |= t), u &= ~h;
      }
    }
    function fm(e, t) {
      var a = vr(t), i;
      switch (a) {
        case mo:
          i = Bi;
          break;
        case ri:
          i = ir;
          break;
        case Ca:
        case xa:
        case Bl:
        case sc:
        case cc:
        case Rf:
        case Tf:
        case Of:
        case kf:
        case Df:
        case Af:
        case Nf:
        case Lf:
        case Vl:
        case Mf:
        case Pu:
        case $l:
        case fc:
        case jf:
        case Uf:
        case zf:
          i = Hl;
          break;
        case il:
          i = Fu;
          break;
        default:
          i = pr;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== pr ? pr : i;
    }
    function $f(e, t, a) {
      if (Ha)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Hf(a), f = 1 << u, h = i[u];
          h.add(t), a &= ~f;
        }
    }
    function Pp(e, t) {
      if (Ha)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Hf(t), f = 1 << u, h = a[u];
          h.size > 0 && (h.forEach(function(S) {
            var E = S.alternate;
            (E === null || !i.has(E)) && i.add(S);
          }), h.clear()), t &= ~f;
        }
    }
    function gc(e, t) {
      return null;
    }
    var hr = wt, yo = mo, Vi = ri, Vu = il, Iu = pr;
    function ai() {
      return Iu;
    }
    function or(e) {
      Iu = e;
    }
    function Jr(e, t) {
      var a = Iu;
      try {
        return Iu = e, t();
      } finally {
        Iu = a;
      }
    }
    function rS(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function aS(e, t) {
      return e > t ? e : t;
    }
    function $u(e, t) {
      return e !== 0 && e < t;
    }
    function Hr(e) {
      var t = vr(e);
      return $u(hr, t) ? $u(yo, t) ? vc(t) ? Vi : Vu : yo : hr;
    }
    function Wf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var nt;
    function Wu(e) {
      nt = e;
    }
    function Fp(e) {
      nt(e);
    }
    var Yf;
    function iS(e) {
      Yf = e;
    }
    var Yu;
    function qf(e) {
      Yu = e;
    }
    var Gf;
    function dm(e) {
      Gf = e;
    }
    var Hp;
    function pm(e) {
      Hp = e;
    }
    var Sc = !1, qu = [], In = null, Lr = null, ra = null, Gu = /* @__PURE__ */ new Map(), Qu = /* @__PURE__ */ new Map(), Mr = [], vm = [
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
    function Ii(e) {
      return vm.indexOf(e) > -1;
    }
    function oS(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Bp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          In = null;
          break;
        case "dragenter":
        case "dragleave":
          Lr = null;
          break;
        case "mouseover":
        case "mouseout":
          ra = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Gu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Qu.delete(i);
          break;
        }
      }
    }
    function Ku(e, t, a, i, u, f) {
      if (e === null || e.nativeEvent !== f) {
        var h = oS(t, a, i, u, f);
        if (t !== null) {
          var S = is(t);
          S !== null && Yf(S);
        }
        return h;
      }
      e.eventSystemFlags |= i;
      var E = e.targetContainers;
      return u !== null && E.indexOf(u) === -1 && E.push(u), e;
    }
    function hm(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var f = u;
          return In = Ku(In, e, t, a, i, f), !0;
        }
        case "dragenter": {
          var h = u;
          return Lr = Ku(Lr, e, t, a, i, h), !0;
        }
        case "mouseover": {
          var S = u;
          return ra = Ku(ra, e, t, a, i, S), !0;
        }
        case "pointerover": {
          var E = u, x = E.pointerId;
          return Gu.set(x, Ku(Gu.get(x) || null, e, t, a, i, E)), !0;
        }
        case "gotpointercapture": {
          var k = u, $ = k.pointerId;
          return Qu.set($, Ku(Qu.get($) || null, e, t, a, i, k)), !0;
        }
      }
      return !1;
    }
    function Vp(e) {
      var t = Ac(e.target);
      if (t !== null) {
        var a = Zo(t);
        if (a !== null) {
          var i = a.tag;
          if (i === we) {
            var u = Sf(a);
            if (u !== null) {
              e.blockedOn = u, Hp(e.priority, function() {
                Yu(a);
              });
              return;
            }
          } else if (i === U) {
            var f = a.stateNode;
            if (Wf(f)) {
              e.blockedOn = wf(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function lS(e) {
      for (var t = Gf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Mr.length && $u(t, Mr[i].priority); i++)
        ;
      Mr.splice(i, 0, a), i === 0 && Vp(a);
    }
    function Gl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Zr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, f = new u.constructor(u.type, u);
          Qg(f), u.target.dispatchEvent(f), Hh();
        } else {
          var h = is(i);
          return h !== null && Yf(h), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Qf(e, t, a) {
      Gl(e) && a.delete(t);
    }
    function ii() {
      Sc = !1, In !== null && Gl(In) && (In = null), Lr !== null && Gl(Lr) && (Lr = null), ra !== null && Gl(ra) && (ra = null), Gu.forEach(Qf), Qu.forEach(Qf);
    }
    function $t(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Sc || (Sc = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, ii)));
    }
    function lr(e) {
      if (qu.length > 0) {
        $t(qu[0], e);
        for (var t = 1; t < qu.length; t++) {
          var a = qu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      In !== null && $t(In, e), Lr !== null && $t(Lr, e), ra !== null && $t(ra, e);
      var i = function(S) {
        return $t(S, e);
      };
      Gu.forEach(i), Qu.forEach(i);
      for (var u = 0; u < Mr.length; u++) {
        var f = Mr[u];
        f.blockedOn === e && (f.blockedOn = null);
      }
      for (; Mr.length > 0; ) {
        var h = Mr[0];
        if (h.blockedOn !== null)
          break;
        Vp(h), h.blockedOn === null && Mr.shift();
      }
    }
    var Fn = v.ReactCurrentBatchConfig, xr = !0;
    function Oa(e) {
      xr = !!e;
    }
    function Xu() {
      return xr;
    }
    function Rr(e, t, a) {
      var i = Kf(t), u;
      switch (i) {
        case hr:
          u = wc;
          break;
        case yo:
          u = Ql;
          break;
        case Vi:
        default:
          u = Ju;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function wc(e, t, a, i) {
      var u = ai(), f = Fn.transition;
      Fn.transition = null;
      try {
        or(hr), Ju(e, t, a, i);
      } finally {
        or(u), Fn.transition = f;
      }
    }
    function Ql(e, t, a, i) {
      var u = ai(), f = Fn.transition;
      Fn.transition = null;
      try {
        or(yo), Ju(e, t, a, i);
      } finally {
        or(u), Fn.transition = f;
      }
    }
    function Ju(e, t, a, i) {
      xr && Ip(e, t, a, i);
    }
    function Ip(e, t, a, i) {
      var u = Zr(e, t, a, i);
      if (u === null) {
        CS(e, t, i, ul, a), Bp(e, i);
        return;
      }
      if (hm(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Bp(e, i), t & Ks && Ii(e)) {
        for (; u !== null; ) {
          var f = is(u);
          f !== null && Fp(f);
          var h = Zr(e, t, a, i);
          if (h === null && CS(e, t, i, ul, a), h === u)
            break;
          u = h;
        }
        u !== null && i.stopPropagation();
        return;
      }
      CS(e, t, i, null, a);
    }
    var ul = null;
    function Zr(e, t, a, i) {
      ul = null;
      var u = Tn(i), f = Ac(u);
      if (f !== null) {
        var h = Zo(f);
        if (h === null)
          f = null;
        else {
          var S = h.tag;
          if (S === we) {
            var E = Sf(h);
            if (E !== null)
              return E;
            f = null;
          } else if (S === U) {
            var x = h.stateNode;
            if (Wf(x))
              return wf(h);
            f = null;
          } else h !== f && (f = null);
        }
      }
      return ul = f, null;
    }
    function Kf(e) {
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
          return hr;
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
          return yo;
        case "message": {
          var t = Jg();
          switch (t) {
            case ba:
              return hr;
            case Au:
              return yo;
            case Fi:
            case Nu:
              return Vi;
            case rc:
              return Vu;
            default:
              return Vi;
          }
        }
        default:
          return Vi;
      }
    }
    function Zu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function go(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Xf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function $p(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var oi = null, es = null, li = null;
    function Jf(e) {
      return oi = e, es = Ec(), !0;
    }
    function _c() {
      oi = null, es = null, li = null;
    }
    function Zf() {
      if (li)
        return li;
      var e, t = es, a = t.length, i, u = Ec(), f = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var h = a - e;
      for (i = 1; i <= h && t[a - i] === u[f - i]; i++)
        ;
      var S = i > 1 ? 1 - i : void 0;
      return li = u.slice(e, S), li;
    }
    function Ec() {
      return "value" in oi ? oi.value : oi.textContent;
    }
    function Kl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function jr() {
      return !0;
    }
    function So() {
      return !1;
    }
    function Xn(e) {
      function t(a, i, u, f, h) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = f, this.target = h, this.currentTarget = null;
        for (var S in e)
          if (e.hasOwnProperty(S)) {
            var E = e[S];
            E ? this[S] = E(f) : this[S] = f[S];
          }
        var x = f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1;
        return x ? this.isDefaultPrevented = jr : this.isDefaultPrevented = So, this.isPropagationStopped = So, this;
      }
      return Pt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = jr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = jr);
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
        isPersistent: jr
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
    }, ed = Xn(Tr), Xl = Pt({}, Tr, {
      view: 0,
      detail: 0
    }), Wp = Xn(Xl), Yp, $i, ts;
    function qp(e) {
      e !== ts && (ts && e.type === "mousemove" ? (Yp = e.screenX - ts.screenX, $i = e.screenY - ts.screenY) : (Yp = 0, $i = 0), ts = e);
    }
    var Wi = Pt({}, Xl, {
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
      getModifierState: Gp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (qp(e), Yp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : $i;
      }
    }), td = Xn(Wi), Jl = Pt({}, Wi, {
      dataTransfer: 0
    }), mm = Xn(Jl), ym = Pt({}, Xl, {
      relatedTarget: 0
    }), bc = Xn(ym), nd = Pt({}, Tr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uS = Xn(nd), sS = Pt({}, Tr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), gm = Xn(sS), Sm = Pt({}, Tr, {
      data: 0
    }), sl = Xn(Sm), cS = sl, ns = {
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
    }, wm = {
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
    function ur(e) {
      if (e.key) {
        var t = ns[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Kl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? wm[e.keyCode] || "Unidentified" : "";
    }
    var fS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function _m(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = fS[e];
      return i ? !!a[i] : !1;
    }
    function Gp(e) {
      return _m;
    }
    var dS = Pt({}, Xl, {
      key: ur,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Kl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Kl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Em = Xn(dS), bm = Pt({}, Wi, {
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
    }), Cm = Xn(bm), ui = Pt({}, Xl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gp
    }), Qp = Xn(ui), pS = Pt({}, Tr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cl = Xn(pS), rd = Pt({}, Wi, {
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
    }), Zl = Xn(rd), ad = [9, 13, 27, 32], id = 229, Cc = xt && "CompositionEvent" in window, xc = null;
    xt && "documentMode" in document && (xc = document.documentMode);
    var Kp = xt && "TextEvent" in window && !xc, xm = xt && (!Cc || xc && xc > 8 && xc <= 11), Xp = 32, Jp = String.fromCharCode(Xp);
    function od() {
      Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Rc = !1;
    function Rm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Zp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function vS(e, t) {
      return e === "keydown" && t.keyCode === id;
    }
    function ev(e, t) {
      switch (e) {
        case "keyup":
          return ad.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== id;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ld(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Tc(e) {
      return e.locale === "ko";
    }
    var fl = !1;
    function ud(e, t, a, i, u) {
      var f, h;
      if (Cc ? f = Zp(t) : fl ? ev(t, i) && (f = "onCompositionEnd") : vS(t, i) && (f = "onCompositionStart"), !f)
        return null;
      xm && !Tc(i) && (!fl && f === "onCompositionStart" ? fl = Jf(u) : f === "onCompositionEnd" && fl && (h = Zf()));
      var S = Nm(a, f);
      if (S.length > 0) {
        var E = new sl(f, t, null, i, u);
        if (e.push({
          event: E,
          listeners: S
        }), h)
          E.data = h;
        else {
          var x = ld(i);
          x !== null && (E.data = x);
        }
      }
    }
    function Tm(e, t) {
      switch (e) {
        case "compositionend":
          return ld(t);
        case "keypress":
          var a = t.which;
          return a !== Xp ? null : (Rc = !0, Jp);
        case "textInput":
          var i = t.data;
          return i === Jp && Rc ? null : i;
        default:
          return null;
      }
    }
    function hS(e, t) {
      if (fl) {
        if (e === "compositionend" || !Cc && ev(e, t)) {
          var a = Zf();
          return _c(), fl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Rm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return xm && !Tc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function sd(e, t, a, i, u) {
      var f;
      if (Kp ? f = Tm(t, i) : f = hS(t, i), !f)
        return null;
      var h = Nm(a, "onBeforeInput");
      if (h.length > 0) {
        var S = new cS("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: S,
          listeners: h
        }), S.data = f;
      }
    }
    function mS(e, t, a, i, u, f, h) {
      ud(e, t, a, i, u), sd(e, t, a, i, u);
    }
    var Oc = {
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
    function Om(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Oc[e.type] : t === "textarea";
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
    function cd(e) {
      if (!xt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Vt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Ou(i);
      var u = Nm(t, "onChange");
      if (u.length > 0) {
        var f = new ed("onChange", "change", null, a, i);
        e.push({
          event: f,
          listeners: u
        });
      }
    }
    var o = null, c = null;
    function p(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function y(e) {
      var t = [];
      r(t, c, e, Tn(e)), Js(C, t);
    }
    function C(e) {
      RE(e, 0);
    }
    function M(e) {
      var t = md(e);
      if (_u(t))
        return e;
    }
    function B(e, t) {
      if (e === "change")
        return t;
    }
    var oe = !1;
    xt && (oe = cd("input") && (!document.documentMode || document.documentMode > 9));
    function Re(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", Ce);
    }
    function ke() {
      o && (o.detachEvent("onpropertychange", Ce), o = null, c = null);
    }
    function Ce(e) {
      e.propertyName === "value" && M(c) && y(e);
    }
    function Xe(e, t, a) {
      e === "focusin" ? (ke(), Re(t, a)) : e === "focusout" && ke();
    }
    function rt(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return M(c);
    }
    function ut(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function mr(e, t) {
      if (e === "click")
        return M(t);
    }
    function K(e, t) {
      if (e === "input" || e === "change")
        return M(t);
    }
    function I(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || bt(e, "number", e.value);
    }
    function Z(e, t, a, i, u, f, h) {
      var S = a ? md(a) : window, E, x;
      if (p(S) ? E = B : Om(S) ? oe ? E = K : (E = rt, x = Xe) : ut(S) && (E = mr), E) {
        var k = E(t, a);
        if (k) {
          r(e, k, i, u);
          return;
        }
      }
      x && x(t, S, a), t === "focusout" && I(S);
    }
    function ze() {
      Me("onMouseEnter", ["mouseout", "mouseover"]), Me("onMouseLeave", ["mouseout", "mouseover"]), Me("onPointerEnter", ["pointerout", "pointerover"]), Me("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ct(e, t, a, i, u, f, h) {
      var S = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (S && !Bh(i)) {
        var x = i.relatedTarget || i.fromElement;
        if (x && (Ac(x) || vv(x)))
          return;
      }
      if (!(!E && !S)) {
        var k;
        if (u.window === u)
          k = u;
        else {
          var $ = u.ownerDocument;
          $ ? k = $.defaultView || $.parentWindow : k = window;
        }
        var V, re;
        if (E) {
          var ae = i.relatedTarget || i.toElement;
          if (V = a, re = ae ? Ac(ae) : null, re !== null) {
            var pe = Zo(re);
            (re !== pe || re.tag !== P && re.tag !== W) && (re = null);
          }
        } else
          V = null, re = a;
        if (V !== re) {
          var et = td, St = "onMouseLeave", pt = "onMouseEnter", Xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (et = Cm, St = "onPointerLeave", pt = "onPointerEnter", Xt = "pointer");
          var Wt = V == null ? k : md(V), X = re == null ? k : md(re), ve = new et(St, Xt + "leave", V, i, u);
          ve.target = Wt, ve.relatedTarget = X;
          var J = null, Ae = Ac(u);
          if (Ae === a) {
            var tt = new et(pt, Xt + "enter", re, i, u);
            tt.target = X, tt.relatedTarget = Wt, J = tt;
          }
          k1(e, ve, J, V, re);
        }
      }
    }
    function _t(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var at = typeof Object.is == "function" ? Object.is : _t;
    function Et(e, t) {
      if (at(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (!xn.call(t, f) || !at(e[f], t[f]))
          return !1;
      }
      return !0;
    }
    function Or(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function an(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function wo(e, t) {
      for (var a = Or(e), i = 0, u = 0; a; ) {
        if (a.nodeType === lo) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Or(an(a));
      }
    }
    function yS(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, f = i.anchorOffset, h = i.focusNode, S = i.focusOffset;
      try {
        u.nodeType, h.nodeType;
      } catch {
        return null;
      }
      return s1(e, u, f, h, S);
    }
    function s1(e, t, a, i, u) {
      var f = 0, h = -1, S = -1, E = 0, x = 0, k = e, $ = null;
      e: for (; ; ) {
        for (var V = null; k === t && (a === 0 || k.nodeType === lo) && (h = f + a), k === i && (u === 0 || k.nodeType === lo) && (S = f + u), k.nodeType === lo && (f += k.nodeValue.length), (V = k.firstChild) !== null; )
          $ = k, k = V;
        for (; ; ) {
          if (k === e)
            break e;
          if ($ === t && ++E === a && (h = f), $ === i && ++x === u && (S = f), (V = k.nextSibling) !== null)
            break;
          k = $, $ = k.parentNode;
        }
        k = V;
      }
      return h === -1 || S === -1 ? null : {
        start: h,
        end: S
      };
    }
    function c1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), f = e.textContent.length, h = Math.min(t.start, f), S = t.end === void 0 ? h : Math.min(t.end, f);
        if (!u.extend && h > S) {
          var E = S;
          S = h, h = E;
        }
        var x = wo(e, h), k = wo(e, S);
        if (x && k) {
          if (u.rangeCount === 1 && u.anchorNode === x.node && u.anchorOffset === x.offset && u.focusNode === k.node && u.focusOffset === k.offset)
            return;
          var $ = a.createRange();
          $.setStart(x.node, x.offset), u.removeAllRanges(), h > S ? (u.addRange($), u.extend(k.node, k.offset)) : ($.setEnd(k.node, k.offset), u.addRange($));
        }
      }
    }
    function vE(e) {
      return e && e.nodeType === lo;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vE(e) ? !1 : vE(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function f1(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function d1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = Mi(); t instanceof e.HTMLIFrameElement; ) {
        if (d1(t))
          e = t.contentWindow;
        else
          return t;
        t = Mi(e.document);
      }
      return t;
    }
    function gS(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function p1() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: gS(e) ? h1(e) : null
      };
    }
    function v1(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && f1(a)) {
        i !== null && gS(a) && m1(a, i);
        for (var u = [], f = a; f = f.parentNode; )
          f.nodeType === ga && u.push({
            element: f,
            left: f.scrollLeft,
            top: f.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var h = 0; h < u.length; h++) {
          var S = u[h];
          S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
        }
      }
    }
    function h1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = yS(e), t || {
        start: 0,
        end: 0
      };
    }
    function m1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : c1(e, t);
    }
    var y1 = xt && "documentMode" in document && document.documentMode <= 11;
    function g1() {
      Vt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var fd = null, SS = null, tv = null, wS = !1;
    function S1(e) {
      if ("selectionStart" in e && gS(e))
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
    function w1(e) {
      return e.window === e ? e.document : e.nodeType === ja ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = w1(a);
      if (!(wS || fd == null || fd !== Mi(i))) {
        var u = S1(fd);
        if (!tv || !Et(tv, u)) {
          tv = u;
          var f = Nm(SS, "onSelect");
          if (f.length > 0) {
            var h = new ed("onSelect", "select", null, t, a);
            e.push({
              event: h,
              listeners: f
            }), h.target = fd;
          }
        }
      }
    }
    function _1(e, t, a, i, u, f, h) {
      var S = a ? md(a) : window;
      switch (t) {
        case "focusin":
          (Om(S) || S.contentEditable === "true") && (fd = S, SS = a, tv = null);
          break;
        case "focusout":
          fd = null, SS = null, tv = null;
          break;
        case "mousedown":
          wS = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wS = !1, yE(e, i, u);
          break;
        case "selectionchange":
          if (y1)
            break;
        case "keydown":
        case "keyup":
          yE(e, i, u);
      }
    }
    function km(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var dd = {
      animationend: km("Animation", "AnimationEnd"),
      animationiteration: km("Animation", "AnimationIteration"),
      animationstart: km("Animation", "AnimationStart"),
      transitionend: km("Transition", "TransitionEnd")
    }, _S = {}, gE = {};
    xt && (gE = document.createElement("div").style, "AnimationEvent" in window || (delete dd.animationend.animation, delete dd.animationiteration.animation, delete dd.animationstart.animation), "TransitionEvent" in window || delete dd.transitionend.transition);
    function Dm(e) {
      if (_S[e])
        return _S[e];
      if (!dd[e])
        return e;
      var t = dd[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in gE)
          return _S[e] = t[a];
      return e;
    }
    var SE = Dm("animationend"), wE = Dm("animationiteration"), _E = Dm("animationstart"), EE = Dm("transitionend"), bE = /* @__PURE__ */ new Map(), CE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function rs(e, t) {
      bE.set(e, t), Vt(t, [e]);
    }
    function E1() {
      for (var e = 0; e < CE.length; e++) {
        var t = CE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        rs(a, "on" + i);
      }
      rs(SE, "onAnimationEnd"), rs(wE, "onAnimationIteration"), rs(_E, "onAnimationStart"), rs("dblclick", "onDoubleClick"), rs("focusin", "onFocus"), rs("focusout", "onBlur"), rs(EE, "onTransitionEnd");
    }
    function b1(e, t, a, i, u, f, h) {
      var S = bE.get(t);
      if (S !== void 0) {
        var E = ed, x = t;
        switch (t) {
          case "keypress":
            if (Kl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            E = Em;
            break;
          case "focusin":
            x = "focus", E = bc;
            break;
          case "focusout":
            x = "blur", E = bc;
            break;
          case "beforeblur":
          case "afterblur":
            E = bc;
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
            E = td;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = mm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Qp;
            break;
          case SE:
          case wE:
          case _E:
            E = uS;
            break;
          case EE:
            E = cl;
            break;
          case "scroll":
            E = Wp;
            break;
          case "wheel":
            E = Zl;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = gm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Cm;
            break;
        }
        var k = (f & Ks) !== 0;
        {
          var $ = !k && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", V = T1(a, S, i.type, k, $);
          if (V.length > 0) {
            var re = new E(S, x, null, i, u);
            e.push({
              event: re,
              listeners: V
            });
          }
        }
      }
    }
    E1(), ze(), n(), g1(), od();
    function C1(e, t, a, i, u, f, h) {
      b1(e, t, a, i, u, f);
      var S = (f & Gg) === 0;
      S && (ct(e, t, a, i, u), Z(e, t, a, i, u), _1(e, t, a, i, u), mS(e, t, a, i, u));
    }
    var nv = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ES = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(nv));
    function xE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, _p(i, t, void 0, e), e.currentTarget = null;
    }
    function x1(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var f = t[u], h = f.instance, S = f.currentTarget, E = f.listener;
          if (h !== i && e.isPropagationStopped())
            return;
          xE(e, E, S), i = h;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var k = t[x], $ = k.instance, V = k.currentTarget, re = k.listener;
          if ($ !== i && e.isPropagationStopped())
            return;
          xE(e, re, V), i = $;
        }
    }
    function RE(e, t) {
      for (var a = (t & Ks) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], f = u.event, h = u.listeners;
        x1(f, h, a);
      }
      Kg();
    }
    function R1(e, t, a, i, u) {
      var f = Tn(a), h = [];
      C1(h, e, i, a, f, t), RE(h, t);
    }
    function Jn(e, t) {
      ES.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nk(t), u = D1(e);
      i.has(u) || (TE(t, e, Qs, a), i.add(u));
    }
    function bS(e, t, a) {
      ES.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ks), TE(a, e, i, t);
    }
    var Am = "_reactListening" + Math.random().toString(36).slice(2);
    function rv(e) {
      if (!e[Am]) {
        e[Am] = !0, Ke.forEach(function(a) {
          a !== "selectionchange" && (ES.has(a) || bS(a, !1, e), bS(a, !0, e));
        });
        var t = e.nodeType === ja ? e : e.ownerDocument;
        t !== null && (t[Am] || (t[Am] = !0, bS("selectionchange", !1, t)));
      }
    }
    function TE(e, t, a, i, u) {
      var f = Rr(e, t, a), h = void 0;
      Zs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (h = !0), e = e, i ? h !== void 0 ? Xf(e, t, f, h) : go(e, t, f) : h !== void 0 ? $p(e, t, f, h) : Zu(e, t, f);
    }
    function OE(e, t) {
      return e === t || e.nodeType === rr && e.parentNode === t;
    }
    function CS(e, t, a, i, u) {
      var f = i;
      if (!(t & vf) && !(t & Qs)) {
        var h = u;
        if (i !== null) {
          var S = i;
          e: for (; ; ) {
            if (S === null)
              return;
            var E = S.tag;
            if (E === U || E === H) {
              var x = S.stateNode.containerInfo;
              if (OE(x, h))
                break;
              if (E === H)
                for (var k = S.return; k !== null; ) {
                  var $ = k.tag;
                  if ($ === U || $ === H) {
                    var V = k.stateNode.containerInfo;
                    if (OE(V, h))
                      return;
                  }
                  k = k.return;
                }
              for (; x !== null; ) {
                var re = Ac(x);
                if (re === null)
                  return;
                var ae = re.tag;
                if (ae === P || ae === W) {
                  S = f = re;
                  continue e;
                }
                x = x.parentNode;
              }
            }
            S = S.return;
          }
        }
      }
      Js(function() {
        return R1(e, t, a, f);
      });
    }
    function av(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function T1(e, t, a, i, u, f) {
      for (var h = t !== null ? t + "Capture" : null, S = i ? h : t, E = [], x = e, k = null; x !== null; ) {
        var $ = x, V = $.stateNode, re = $.tag;
        if (re === P && V !== null && (k = V, S !== null)) {
          var ae = Ml(x, S);
          ae != null && E.push(av(x, ae, k));
        }
        if (u)
          break;
        x = x.return;
      }
      return E;
    }
    function Nm(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var f = u, h = f.stateNode, S = f.tag;
        if (S === P && h !== null) {
          var E = h, x = Ml(u, a);
          x != null && i.unshift(av(u, x, E));
          var k = Ml(u, t);
          k != null && i.push(av(u, k, E));
        }
        u = u.return;
      }
      return i;
    }
    function pd(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== P);
      return e || null;
    }
    function O1(e, t) {
      for (var a = e, i = t, u = 0, f = a; f; f = pd(f))
        u++;
      for (var h = 0, S = i; S; S = pd(S))
        h++;
      for (; u - h > 0; )
        a = pd(a), u--;
      for (; h - u > 0; )
        i = pd(i), h--;
      for (var E = u; E--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = pd(a), i = pd(i);
      }
      return null;
    }
    function kE(e, t, a, i, u) {
      for (var f = t._reactName, h = [], S = a; S !== null && S !== i; ) {
        var E = S, x = E.alternate, k = E.stateNode, $ = E.tag;
        if (x !== null && x === i)
          break;
        if ($ === P && k !== null) {
          var V = k;
          if (u) {
            var re = Ml(S, f);
            re != null && h.unshift(av(S, re, V));
          } else if (!u) {
            var ae = Ml(S, f);
            ae != null && h.push(av(S, ae, V));
          }
        }
        S = S.return;
      }
      h.length !== 0 && e.push({
        event: t,
        listeners: h
      });
    }
    function k1(e, t, a, i, u) {
      var f = i && u ? O1(i, u) : null;
      i !== null && kE(e, t, i, f, !1), u !== null && a !== null && kE(e, a, u, f, !0);
    }
    function D1(e, t) {
      return e + "__bubble";
    }
    var si = !1, iv = "dangerouslySetInnerHTML", Lm = "suppressContentEditableWarning", as = "suppressHydrationWarning", DE = "autoFocus", kc = "children", Dc = "style", Mm = "__html", xS, jm, ov, AE, Um, NE, LE;
    xS = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, jm = function(e, t) {
      Tu(e, t), jh(e, t), Qo(e, t, {
        registrationNameDependencies: vt,
        possibleRegistrationNames: ht
      });
    }, NE = xt && !document.documentMode, ov = function(e, t, a) {
      if (!si) {
        var i = zm(a), u = zm(t);
        u !== i && (si = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, AE = function(e) {
      if (!si) {
        si = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Um = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, LE = function(e, t) {
      var a = e.namespaceURI === oo ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var A1 = /\r\n?/g, N1 = /\u0000|\uFFFD/g;
    function zm(e) {
      Dr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(A1, `
`).replace(N1, "");
    }
    function Pm(e, t, a, i) {
      var u = zm(t), f = zm(e);
      if (f !== u && (i && (si || (si = !0, g('Text content did not match. Server: "%s" Client: "%s"', f, u))), a && A))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function ME(e) {
      return e.nodeType === ja ? e : e.ownerDocument;
    }
    function L1() {
    }
    function Fm(e) {
      e.onclick = L1;
    }
    function M1(e, t, a, i, u) {
      for (var f in i)
        if (i.hasOwnProperty(f)) {
          var h = i[f];
          if (f === Dc)
            h && Object.freeze(h), kh(t, h);
          else if (f === iv) {
            var S = h ? h[Mm] : void 0;
            S != null && wh(t, S);
          } else if (f === kc)
            if (typeof h == "string") {
              var E = e !== "textarea" || h !== "";
              E && Is(t, h);
            } else typeof h == "number" && Is(t, "" + h);
          else f === Lm || f === as || f === DE || (vt.hasOwnProperty(f) ? h != null && (typeof h != "function" && Um(f, h), f === "onScroll" && Jn("scroll", t)) : h != null && kn(t, f, h, u));
        }
    }
    function j1(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var f = t[u], h = t[u + 1];
        f === Dc ? kh(e, h) : f === iv ? wh(e, h) : f === kc ? Is(e, h) : kn(e, f, h, i);
      }
    }
    function U1(e, t, a, i) {
      var u, f = ME(a), h, S = i;
      if (S === oo && (S = rp(e)), S === oo) {
        if (u = Al(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = f.createElement("div");
          E.innerHTML = "<script><\/script>";
          var x = E.firstChild;
          h = E.removeChild(x);
        } else if (typeof t.is == "string")
          h = f.createElement(e, {
            is: t.is
          });
        else if (h = f.createElement(e), e === "select") {
          var k = h;
          t.multiple ? k.multiple = !0 : t.size && (k.size = t.size);
        }
      } else
        h = f.createElementNS(S, e);
      return S === oo && !u && Object.prototype.toString.call(h) === "[object HTMLUnknownElement]" && !xn.call(xS, e) && (xS[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), h;
    }
    function z1(e, t) {
      return ME(t).createTextNode(e);
    }
    function P1(e, t, a, i) {
      var u = Al(t, a);
      jm(t, a);
      var f;
      switch (t) {
        case "dialog":
          Jn("cancel", e), Jn("close", e), f = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Jn("load", e), f = a;
          break;
        case "video":
        case "audio":
          for (var h = 0; h < nv.length; h++)
            Jn(nv[h], e);
          f = a;
          break;
        case "source":
          Jn("error", e), f = a;
          break;
        case "img":
        case "image":
        case "link":
          Jn("error", e), Jn("load", e), f = a;
          break;
        case "details":
          Jn("toggle", e), f = a;
          break;
        case "input":
          z(e, a), f = b(e, a), Jn("invalid", e);
          break;
        case "option":
          gn(e, a), f = a;
          break;
        case "select":
          Vs(e, a), f = Bs(e, a), Jn("invalid", e);
          break;
        case "textarea":
          gh(e, a), f = np(e, a), Jn("invalid", e);
          break;
        default:
          f = a;
      }
      switch (Ys(t, f), M1(t, e, i, f, u), t) {
        case "input":
          ro(e), Ue(e, a, !1);
          break;
        case "textarea":
          ro(e), lf(e);
          break;
        case "option":
          Sn(e, a);
          break;
        case "select":
          tp(e, a);
          break;
        default:
          typeof f.onClick == "function" && Fm(e);
          break;
      }
    }
    function F1(e, t, a, i, u) {
      jm(t, i);
      var f = null, h, S;
      switch (t) {
        case "input":
          h = b(e, a), S = b(e, i), f = [];
          break;
        case "select":
          h = Bs(e, a), S = Bs(e, i), f = [];
          break;
        case "textarea":
          h = np(e, a), S = np(e, i), f = [];
          break;
        default:
          h = a, S = i, typeof h.onClick != "function" && typeof S.onClick == "function" && Fm(e);
          break;
      }
      Ys(t, S);
      var E, x, k = null;
      for (E in h)
        if (!(S.hasOwnProperty(E) || !h.hasOwnProperty(E) || h[E] == null))
          if (E === Dc) {
            var $ = h[E];
            for (x in $)
              $.hasOwnProperty(x) && (k || (k = {}), k[x] = "");
          } else E === iv || E === kc || E === Lm || E === as || E === DE || (vt.hasOwnProperty(E) ? f || (f = []) : (f = f || []).push(E, null));
      for (E in S) {
        var V = S[E], re = h != null ? h[E] : void 0;
        if (!(!S.hasOwnProperty(E) || V === re || V == null && re == null))
          if (E === Dc)
            if (V && Object.freeze(V), re) {
              for (x in re)
                re.hasOwnProperty(x) && (!V || !V.hasOwnProperty(x)) && (k || (k = {}), k[x] = "");
              for (x in V)
                V.hasOwnProperty(x) && re[x] !== V[x] && (k || (k = {}), k[x] = V[x]);
            } else
              k || (f || (f = []), f.push(E, k)), k = V;
          else if (E === iv) {
            var ae = V ? V[Mm] : void 0, pe = re ? re[Mm] : void 0;
            ae != null && pe !== ae && (f = f || []).push(E, ae);
          } else E === kc ? (typeof V == "string" || typeof V == "number") && (f = f || []).push(E, "" + V) : E === Lm || E === as || (vt.hasOwnProperty(E) ? (V != null && (typeof V != "function" && Um(E, V), E === "onScroll" && Jn("scroll", e)), !f && re !== V && (f = [])) : (f = f || []).push(E, V));
      }
      return k && (Dh(k, S[Dc]), (f = f || []).push(Dc, k)), f;
    }
    function H1(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && ne(e, u);
      var f = Al(a, i), h = Al(a, u);
      switch (j1(e, t, f, h), a) {
        case "input":
          se(e, u);
          break;
        case "textarea":
          Sh(e, u);
          break;
        case "select":
          zg(e, u);
          break;
      }
    }
    function B1(e) {
      {
        var t = e.toLowerCase();
        return ff.hasOwnProperty(t) && ff[t] || null;
      }
    }
    function V1(e, t, a, i, u, f, h) {
      var S, E;
      switch (S = Al(t, a), jm(t, a), t) {
        case "dialog":
          Jn("cancel", e), Jn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Jn("load", e);
          break;
        case "video":
        case "audio":
          for (var x = 0; x < nv.length; x++)
            Jn(nv[x], e);
          break;
        case "source":
          Jn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Jn("error", e), Jn("load", e);
          break;
        case "details":
          Jn("toggle", e);
          break;
        case "input":
          z(e, a), Jn("invalid", e);
          break;
        case "option":
          gn(e, a);
          break;
        case "select":
          Vs(e, a), Jn("invalid", e);
          break;
        case "textarea":
          gh(e, a), Jn("invalid", e);
          break;
      }
      Ys(t, a);
      {
        E = /* @__PURE__ */ new Set();
        for (var k = e.attributes, $ = 0; $ < k.length; $++) {
          var V = k[$].name.toLowerCase();
          switch (V) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(k[$].name);
          }
        }
      }
      var re = null;
      for (var ae in a)
        if (a.hasOwnProperty(ae)) {
          var pe = a[ae];
          if (ae === kc)
            typeof pe == "string" ? e.textContent !== pe && (a[as] !== !0 && Pm(e.textContent, pe, f, h), re = [kc, pe]) : typeof pe == "number" && e.textContent !== "" + pe && (a[as] !== !0 && Pm(e.textContent, pe, f, h), re = [kc, "" + pe]);
          else if (vt.hasOwnProperty(ae))
            pe != null && (typeof pe != "function" && Um(ae, pe), ae === "onScroll" && Jn("scroll", e));
          else if (h && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var et = void 0, St = S && xe ? null : Bn(ae);
            if (a[as] !== !0) {
              if (!(ae === Lm || ae === as || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              ae === "value" || ae === "checked" || ae === "selected")) {
                if (ae === iv) {
                  var pt = e.innerHTML, Xt = pe ? pe[Mm] : void 0;
                  if (Xt != null) {
                    var Wt = LE(e, Xt);
                    Wt !== pt && ov(ae, pt, Wt);
                  }
                } else if (ae === Dc) {
                  if (E.delete(ae), NE) {
                    var X = qg(pe);
                    et = e.getAttribute("style"), X !== et && ov(ae, et, X);
                  }
                } else if (S && !xe)
                  E.delete(ae.toLowerCase()), et = sn(e, ae, pe), pe !== et && ov(ae, et, pe);
                else if (!fn(ae, St, S) && !qt(ae, pe, St, S)) {
                  var ve = !1;
                  if (St !== null)
                    E.delete(St.attributeName), et = mt(e, ae, pe, St);
                  else {
                    var J = i;
                    if (J === oo && (J = rp(t)), J === oo)
                      E.delete(ae.toLowerCase());
                    else {
                      var Ae = B1(ae);
                      Ae !== null && Ae !== ae && (ve = !0, E.delete(Ae)), E.delete(ae);
                    }
                    et = sn(e, ae, pe);
                  }
                  var tt = xe;
                  !tt && pe !== et && !ve && ov(ae, et, pe);
                }
              }
            }
          }
        }
      switch (h && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && a[as] !== !0 && AE(E), t) {
        case "input":
          ro(e), Ue(e, a, !0);
          break;
        case "textarea":
          ro(e), lf(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Fm(e);
          break;
      }
      return re;
    }
    function I1(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function RS(e, t) {
      {
        if (si)
          return;
        si = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function TS(e, t) {
      {
        if (si)
          return;
        si = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function OS(e, t, a) {
      {
        if (si)
          return;
        si = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function kS(e, t) {
      {
        if (t === "" || si)
          return;
        si = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $1(e, t, a) {
      switch (t) {
        case "input":
          ot(e, a);
          return;
        case "textarea":
          Pg(e, a);
          return;
        case "select":
          mh(e, a);
          return;
      }
    }
    var lv = function() {
    }, uv = function() {
    };
    {
      var W1 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], jE = [
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
      ], Y1 = jE.concat(["button"]), q1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], UE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      uv = function(e, t) {
        var a = Pt({}, e || UE), i = {
          tag: t
        };
        return jE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Y1.indexOf(t) !== -1 && (a.pTagInButtonScope = null), W1.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var G1 = function(e, t) {
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
            return q1.indexOf(t) === -1;
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
      }, Q1 = function(e, t) {
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
      }, zE = {};
      lv = function(e, t, a) {
        a = a || UE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var f = G1(e, u) ? null : i, h = f ? null : Q1(e, a), S = f || h;
        if (S) {
          var E = S.tag, x = !!f + "|" + e + "|" + E;
          if (!zE[x]) {
            zE[x] = !0;
            var k = e, $ = "";
            if (e === "#text" ? /\S/.test(t) ? k = "Text nodes" : (k = "Whitespace text nodes", $ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : k = "<" + e + ">", f) {
              var V = "";
              E === "table" && e === "tr" && (V += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", k, E, $, V);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", k, E);
          }
        }
      };
    }
    var Hm = "suppressHydrationWarning", Bm = "$", Vm = "/$", sv = "$?", cv = "$!", K1 = "style", DS = null, AS = null;
    function X1(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ja:
        case ip: {
          t = i === ja ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : ap(null, "");
          break;
        }
        default: {
          var f = i === rr ? e.parentNode : e, h = f.namespaceURI || null;
          t = f.tagName, a = ap(h, t);
          break;
        }
      }
      {
        var S = t.toLowerCase(), E = uv(null, S);
        return {
          namespace: a,
          ancestorInfo: E
        };
      }
    }
    function J1(e, t, a) {
      {
        var i = e, u = ap(i.namespace, t), f = uv(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: f
        };
      }
    }
    function dP(e) {
      return e;
    }
    function Z1(e) {
      DS = Xu(), AS = p1();
      var t = null;
      return Oa(!1), t;
    }
    function eO(e) {
      v1(AS), Oa(DS), DS = null, AS = null;
    }
    function tO(e, t, a, i, u) {
      var f;
      {
        var h = i;
        if (lv(e, null, h.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, E = uv(h.ancestorInfo, e);
          lv(null, S, E);
        }
        f = h.namespace;
      }
      var x = U1(e, t, a, f);
      return pv(u, x), FS(x, t), x;
    }
    function nO(e, t) {
      e.appendChild(t);
    }
    function rO(e, t, a, i, u) {
      switch (P1(e, t, a, i), t) {
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
    function aO(e, t, a, i, u, f) {
      {
        var h = f;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var S = "" + i.children, E = uv(h.ancestorInfo, t);
          lv(null, S, E);
        }
      }
      return F1(e, t, a, i);
    }
    function NS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function iO(e, t, a, i) {
      {
        var u = a;
        lv(null, e, u.ancestorInfo);
      }
      var f = z1(e, t);
      return pv(i, f), f;
    }
    function oO() {
      var e = window.event;
      return e === void 0 ? Vi : Kf(e.type);
    }
    var LS = typeof setTimeout == "function" ? setTimeout : void 0, lO = typeof clearTimeout == "function" ? clearTimeout : void 0, MS = -1, PE = typeof Promise == "function" ? Promise : void 0, uO = typeof queueMicrotask == "function" ? queueMicrotask : typeof PE < "u" ? function(e) {
      return PE.resolve(null).then(e).catch(sO);
    } : LS;
    function sO(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cO(e, t, a, i) {
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
    function fO(e, t, a, i, u, f) {
      H1(e, t, a, i, u), FS(e, u);
    }
    function FE(e) {
      Is(e, "");
    }
    function dO(e, t, a) {
      e.nodeValue = a;
    }
    function pO(e, t) {
      e.appendChild(t);
    }
    function vO(e, t) {
      var a;
      e.nodeType === rr ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Fm(a);
    }
    function hO(e, t, a) {
      e.insertBefore(t, a);
    }
    function mO(e, t, a) {
      e.nodeType === rr ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yO(e, t) {
      e.removeChild(t);
    }
    function gO(e, t) {
      e.nodeType === rr ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jS(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === rr) {
          var f = u.data;
          if (f === Vm)
            if (i === 0) {
              e.removeChild(u), lr(t);
              return;
            } else
              i--;
          else (f === Bm || f === sv || f === cv) && i++;
        }
        a = u;
      } while (a);
      lr(t);
    }
    function SO(e, t) {
      e.nodeType === rr ? jS(e.parentNode, t) : e.nodeType === ga && jS(e, t), lr(e);
    }
    function wO(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function _O(e) {
      e.nodeValue = "";
    }
    function EO(e, t) {
      e = e;
      var a = t[K1], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = qo("display", i);
    }
    function bO(e, t) {
      e.nodeValue = t;
    }
    function CO(e) {
      e.nodeType === ga ? e.textContent = "" : e.nodeType === ja && e.documentElement && e.removeChild(e.documentElement);
    }
    function xO(e, t, a) {
      return e.nodeType !== ga || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function RO(e, t) {
      return t === "" || e.nodeType !== lo ? null : e;
    }
    function TO(e) {
      return e.nodeType !== rr ? null : e;
    }
    function HE(e) {
      return e.data === sv;
    }
    function US(e) {
      return e.data === cv;
    }
    function OO(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function kO(e, t) {
      e._reactRetry = t;
    }
    function Im(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ga || t === lo)
          break;
        if (t === rr) {
          var a = e.data;
          if (a === Bm || a === cv || a === sv)
            break;
          if (a === Vm)
            return null;
        }
      }
      return e;
    }
    function fv(e) {
      return Im(e.nextSibling);
    }
    function DO(e) {
      return Im(e.firstChild);
    }
    function AO(e) {
      return Im(e.firstChild);
    }
    function NO(e) {
      return Im(e.nextSibling);
    }
    function LO(e, t, a, i, u, f, h) {
      pv(f, e), FS(e, a);
      var S;
      {
        var E = u;
        S = E.namespace;
      }
      var x = (f.mode & dt) !== gt;
      return V1(e, t, a, S, i, x, h);
    }
    function MO(e, t, a, i) {
      return pv(a, e), a.mode & dt, I1(e, t);
    }
    function jO(e, t) {
      pv(t, e);
    }
    function UO(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === rr) {
          var i = t.data;
          if (i === Vm) {
            if (a === 0)
              return fv(t);
            a--;
          } else (i === Bm || i === cv || i === sv) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function BE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === rr) {
          var i = t.data;
          if (i === Bm || i === cv || i === sv) {
            if (a === 0)
              return t;
            a--;
          } else i === Vm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function zO(e) {
      lr(e);
    }
    function PO(e) {
      lr(e);
    }
    function FO(e) {
      return e !== "head" && e !== "body";
    }
    function HO(e, t, a, i) {
      var u = !0;
      Pm(t.nodeValue, a, i, u);
    }
    function BO(e, t, a, i, u, f) {
      if (t[Hm] !== !0) {
        var h = !0;
        Pm(i.nodeValue, u, f, h);
      }
    }
    function VO(e, t) {
      t.nodeType === ga ? RS(e, t) : t.nodeType === rr || TS(e, t);
    }
    function IO(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ga ? RS(a, t) : t.nodeType === rr || TS(a, t));
      }
    }
    function $O(e, t, a, i, u) {
      (u || t[Hm] !== !0) && (i.nodeType === ga ? RS(a, i) : i.nodeType === rr || TS(a, i));
    }
    function WO(e, t, a) {
      OS(e, t);
    }
    function YO(e, t) {
      kS(e, t);
    }
    function qO(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && OS(i, t);
      }
    }
    function GO(e, t) {
      {
        var a = e.parentNode;
        a !== null && kS(a, t);
      }
    }
    function QO(e, t, a, i, u, f) {
      (f || t[Hm] !== !0) && OS(a, i);
    }
    function KO(e, t, a, i, u) {
      (u || t[Hm] !== !0) && kS(a, i);
    }
    function XO(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function JO(e) {
      rv(e);
    }
    var vd = Math.random().toString(36).slice(2), hd = "__reactFiber$" + vd, zS = "__reactProps$" + vd, dv = "__reactContainer$" + vd, PS = "__reactEvents$" + vd, ZO = "__reactListeners$" + vd, ek = "__reactHandles$" + vd;
    function tk(e) {
      delete e[hd], delete e[zS], delete e[PS], delete e[ZO], delete e[ek];
    }
    function pv(e, t) {
      t[hd] = e;
    }
    function $m(e, t) {
      t[dv] = e;
    }
    function VE(e) {
      e[dv] = null;
    }
    function vv(e) {
      return !!e[dv];
    }
    function Ac(e) {
      var t = e[hd];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[dv] || a[hd], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = BE(e); u !== null; ) {
              var f = u[hd];
              if (f)
                return f;
              u = BE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function is(e) {
      var t = e[hd] || e[dv];
      return t && (t.tag === P || t.tag === W || t.tag === we || t.tag === U) ? t : null;
    }
    function md(e) {
      if (e.tag === P || e.tag === W)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Wm(e) {
      return e[zS] || null;
    }
    function FS(e, t) {
      e[zS] = t;
    }
    function nk(e) {
      var t = e[PS];
      return t === void 0 && (t = e[PS] = /* @__PURE__ */ new Set()), t;
    }
    var IE = {}, $E = v.ReactDebugCurrentFrame;
    function Ym(e) {
      if (e) {
        var t = e._owner, a = Gt(e.type, e._source, t ? t.type : null);
        $E.setExtraStackFrame(a);
      } else
        $E.setExtraStackFrame(null);
    }
    function _o(e, t, a, i, u) {
      {
        var f = Function.call.bind(xn);
        for (var h in e)
          if (f(e, h)) {
            var S = void 0;
            try {
              if (typeof e[h] != "function") {
                var E = Error((i || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              S = e[h](t, h, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              S = x;
            }
            S && !(S instanceof Error) && (Ym(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, h, typeof S), Ym(null)), S instanceof Error && !(S.message in IE) && (IE[S.message] = !0, Ym(u), g("Failed %s type: %s", a, S.message), Ym(null));
          }
      }
    }
    var HS = [], qm;
    qm = [];
    var eu = -1;
    function os(e) {
      return {
        current: e
      };
    }
    function ka(e, t) {
      if (eu < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== qm[eu] && g("Unexpected Fiber popped."), e.current = HS[eu], HS[eu] = null, qm[eu] = null, eu--;
    }
    function Da(e, t, a) {
      eu++, HS[eu] = e.current, qm[eu] = a, e.current = t;
    }
    var BS;
    BS = {};
    var Ci = {};
    Object.freeze(Ci);
    var tu = os(Ci), dl = os(!1), VS = Ci;
    function yd(e, t, a) {
      return a && pl(t) ? VS : tu.current;
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function gd(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ci;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var f = {};
        for (var h in i)
          f[h] = t[h];
        {
          var S = Rt(e) || "Unknown";
          _o(i, f, "context", S);
        }
        return u && WE(e, t, f), f;
      }
    }
    function Gm() {
      return dl.current;
    }
    function pl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Qm(e) {
      ka(dl, e), ka(tu, e);
    }
    function IS(e) {
      ka(dl, e), ka(tu, e);
    }
    function YE(e, t, a) {
      {
        if (tu.current !== Ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Da(tu, t, e), Da(dl, a, e);
      }
    }
    function qE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var f = Rt(e) || "Unknown";
            BS[f] || (BS[f] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", f, f));
          }
          return a;
        }
        var h = i.getChildContext();
        for (var S in h)
          if (!(S in u))
            throw new Error((Rt(e) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var E = Rt(e) || "Unknown";
          _o(u, h, "child context", E);
        }
        return Pt({}, a, h);
      }
    }
    function Km(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ci;
        return VS = tu.current, Da(tu, a, e), Da(dl, dl.current, e), !0;
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = qE(e, t, VS);
          i.__reactInternalMemoizedMergedChildContext = u, ka(dl, e), ka(tu, e), Da(tu, u, e), Da(dl, a, e);
        } else
          ka(dl, e), Da(dl, a, e);
      }
    }
    function rk(e) {
      {
        if (!Pa(e) || e.tag !== D)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case U:
              return t.stateNode.context;
            case D: {
              var a = t.type;
              if (pl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ls = 0, Xm = 1, nu = null, $S = !1, WS = !1;
    function QE(e) {
      nu === null ? nu = [e] : nu.push(e);
    }
    function ak(e) {
      $S = !0, QE(e);
    }
    function KE() {
      $S && us();
    }
    function us() {
      if (!WS && nu !== null) {
        WS = !0;
        var e = 0, t = ai();
        try {
          var a = !0, i = nu;
          for (or(hr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          nu = null, $S = !1;
        } catch (f) {
          throw nu !== null && (nu = nu.slice(e + 1)), xp(ba, us), f;
        } finally {
          or(t), WS = !1;
        }
      }
      return null;
    }
    var Sd = [], wd = 0, Jm = null, Zm = 0, Yi = [], qi = 0, Nc = null, ru = 1, au = "";
    function ik(e) {
      return Mc(), (e.flags & Yh) !== yt;
    }
    function ok(e) {
      return Mc(), Zm;
    }
    function lk() {
      var e = au, t = ru, a = t & ~uk(t);
      return a.toString(32) + e;
    }
    function Lc(e, t) {
      Mc(), Sd[wd++] = Zm, Sd[wd++] = Jm, Jm = e, Zm = t;
    }
    function XE(e, t, a) {
      Mc(), Yi[qi++] = ru, Yi[qi++] = au, Yi[qi++] = Nc, Nc = e;
      var i = ru, u = au, f = ey(i) - 1, h = i & ~(1 << f), S = a + 1, E = ey(t) + f;
      if (E > 30) {
        var x = f - f % 5, k = (1 << x) - 1, $ = (h & k).toString(32), V = h >> x, re = f - x, ae = ey(t) + re, pe = S << re, et = pe | V, St = $ + u;
        ru = 1 << ae | et, au = St;
      } else {
        var pt = S << f, Xt = pt | h, Wt = u;
        ru = 1 << E | Xt, au = Wt;
      }
    }
    function YS(e) {
      Mc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Lc(e, a), XE(e, a, i);
      }
    }
    function ey(e) {
      return 32 - uc(e);
    }
    function uk(e) {
      return 1 << ey(e) - 1;
    }
    function qS(e) {
      for (; e === Jm; )
        Jm = Sd[--wd], Sd[wd] = null, Zm = Sd[--wd], Sd[wd] = null;
      for (; e === Nc; )
        Nc = Yi[--qi], Yi[qi] = null, au = Yi[--qi], Yi[qi] = null, ru = Yi[--qi], Yi[qi] = null;
    }
    function sk() {
      return Mc(), Nc !== null ? {
        id: ru,
        overflow: au
      } : null;
    }
    function ck(e, t) {
      Mc(), Yi[qi++] = ru, Yi[qi++] = au, Yi[qi++] = Nc, ru = t.id, au = t.overflow, Nc = e;
    }
    function Mc() {
      ia() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var aa = null, Gi = null, Eo = !1, jc = !1, ss = null;
    function fk() {
      Eo && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function JE() {
      jc = !0;
    }
    function dk() {
      return jc;
    }
    function pk(e) {
      var t = e.stateNode.containerInfo;
      return Gi = AO(t), aa = e, Eo = !0, ss = null, jc = !1, !0;
    }
    function vk(e, t, a) {
      return Gi = NO(t), aa = e, Eo = !0, ss = null, jc = !1, a !== null && ck(e, a), !0;
    }
    function ZE(e, t) {
      switch (e.tag) {
        case U: {
          VO(e.stateNode.containerInfo, t);
          break;
        }
        case P: {
          var a = (e.mode & dt) !== gt;
          $O(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case we: {
          var i = e.memoizedState;
          i.dehydrated !== null && IO(i.dehydrated, t);
          break;
        }
      }
    }
    function eb(e, t) {
      ZE(e, t);
      var a = yN();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= rn) : i.push(a);
    }
    function GS(e, t) {
      {
        if (jc)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case P:
                var i = t.type;
                t.pendingProps, WO(a, i);
                break;
              case W:
                var u = t.pendingProps;
                YO(a, u);
                break;
            }
            break;
          }
          case P: {
            var f = e.type, h = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case P: {
                var E = t.type, x = t.pendingProps, k = (e.mode & dt) !== gt;
                QO(
                  f,
                  h,
                  S,
                  E,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
              case W: {
                var $ = t.pendingProps, V = (e.mode & dt) !== gt;
                KO(
                  f,
                  h,
                  S,
                  $,
                  // TODO: Delete this argument when we remove the legacy root API.
                  V
                );
                break;
              }
            }
            break;
          }
          case we: {
            var re = e.memoizedState, ae = re.dehydrated;
            if (ae !== null) switch (t.tag) {
              case P:
                var pe = t.type;
                t.pendingProps, qO(ae, pe);
                break;
              case W:
                var et = t.pendingProps;
                GO(ae, et);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function tb(e, t) {
      t.flags = t.flags & ~zi | On, GS(e, t);
    }
    function nb(e, t) {
      switch (e.tag) {
        case P: {
          var a = e.type;
          e.pendingProps;
          var i = xO(t, a);
          return i !== null ? (e.stateNode = i, aa = e, Gi = DO(i), !0) : !1;
        }
        case W: {
          var u = e.pendingProps, f = RO(t, u);
          return f !== null ? (e.stateNode = f, aa = e, Gi = null, !0) : !1;
        }
        case we: {
          var h = TO(t);
          if (h !== null) {
            var S = {
              dehydrated: h,
              treeContext: sk(),
              retryLane: Ba
            };
            e.memoizedState = S;
            var E = gN(h);
            return E.return = e, e.child = E, aa = e, Gi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function QS(e) {
      return (e.mode & dt) !== gt && (e.flags & Ot) === yt;
    }
    function KS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function XS(e) {
      if (Eo) {
        var t = Gi;
        if (!t) {
          QS(e) && (GS(aa, e), KS()), tb(aa, e), Eo = !1, aa = e;
          return;
        }
        var a = t;
        if (!nb(e, t)) {
          QS(e) && (GS(aa, e), KS()), t = fv(a);
          var i = aa;
          if (!t || !nb(e, t)) {
            tb(aa, e), Eo = !1, aa = e;
            return;
          }
          eb(i, a);
        }
      }
    }
    function hk(e, t, a) {
      var i = e.stateNode, u = !jc, f = LO(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = f, f !== null;
    }
    function mk(e) {
      var t = e.stateNode, a = e.memoizedProps, i = MO(t, a, e);
      if (i) {
        var u = aa;
        if (u !== null)
          switch (u.tag) {
            case U: {
              var f = u.stateNode.containerInfo, h = (u.mode & dt) !== gt;
              HO(
                f,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                h
              );
              break;
            }
            case P: {
              var S = u.type, E = u.memoizedProps, x = u.stateNode, k = (u.mode & dt) !== gt;
              BO(
                S,
                E,
                x,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                k
              );
              break;
            }
          }
      }
      return i;
    }
    function yk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      jO(a, e);
    }
    function gk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return UO(a);
    }
    function rb(e) {
      for (var t = e.return; t !== null && t.tag !== P && t.tag !== U && t.tag !== we; )
        t = t.return;
      aa = t;
    }
    function ty(e) {
      if (e !== aa)
        return !1;
      if (!Eo)
        return rb(e), Eo = !0, !1;
      if (e.tag !== U && (e.tag !== P || FO(e.type) && !NS(e.type, e.memoizedProps))) {
        var t = Gi;
        if (t)
          if (QS(e))
            ab(e), KS();
          else
            for (; t; )
              eb(e, t), t = fv(t);
      }
      return rb(e), e.tag === we ? Gi = gk(e) : Gi = aa ? fv(e.stateNode) : null, !0;
    }
    function Sk() {
      return Eo && Gi !== null;
    }
    function ab(e) {
      for (var t = Gi; t; )
        ZE(e, t), t = fv(t);
    }
    function _d() {
      aa = null, Gi = null, Eo = !1, jc = !1;
    }
    function ib() {
      ss !== null && (ZC(ss), ss = null);
    }
    function ia() {
      return Eo;
    }
    function JS(e) {
      ss === null ? ss = [e] : ss.push(e);
    }
    var wk = v.ReactCurrentBatchConfig, _k = null;
    function Ek() {
      return wk.transition;
    }
    var bo = {
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
      var bk = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ar && (t = a), a = a.return;
        return t;
      }, Uc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, hv = [], mv = [], yv = [], gv = [], Sv = [], wv = [], zc = /* @__PURE__ */ new Set();
      bo.recordUnsafeLifecycleWarnings = function(e, t) {
        zc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && hv.push(e), e.mode & ar && typeof t.UNSAFE_componentWillMount == "function" && mv.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && yv.push(e), e.mode & ar && typeof t.UNSAFE_componentWillReceiveProps == "function" && gv.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Sv.push(e), e.mode & ar && typeof t.UNSAFE_componentWillUpdate == "function" && wv.push(e));
      }, bo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        hv.length > 0 && (hv.forEach(function(V) {
          e.add(Rt(V) || "Component"), zc.add(V.type);
        }), hv = []);
        var t = /* @__PURE__ */ new Set();
        mv.length > 0 && (mv.forEach(function(V) {
          t.add(Rt(V) || "Component"), zc.add(V.type);
        }), mv = []);
        var a = /* @__PURE__ */ new Set();
        yv.length > 0 && (yv.forEach(function(V) {
          a.add(Rt(V) || "Component"), zc.add(V.type);
        }), yv = []);
        var i = /* @__PURE__ */ new Set();
        gv.length > 0 && (gv.forEach(function(V) {
          i.add(Rt(V) || "Component"), zc.add(V.type);
        }), gv = []);
        var u = /* @__PURE__ */ new Set();
        Sv.length > 0 && (Sv.forEach(function(V) {
          u.add(Rt(V) || "Component"), zc.add(V.type);
        }), Sv = []);
        var f = /* @__PURE__ */ new Set();
        if (wv.length > 0 && (wv.forEach(function(V) {
          f.add(Rt(V) || "Component"), zc.add(V.type);
        }), wv = []), t.size > 0) {
          var h = Uc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, h);
        }
        if (i.size > 0) {
          var S = Uc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, S);
        }
        if (f.size > 0) {
          var E = Uc(f);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var x = Uc(e);
          _(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var k = Uc(a);
          _(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
        if (u.size > 0) {
          var $ = Uc(u);
          _(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, $);
        }
      };
      var ny = /* @__PURE__ */ new Map(), ob = /* @__PURE__ */ new Set();
      bo.recordLegacyContextWarning = function(e, t) {
        var a = bk(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!ob.has(e.type)) {
          var i = ny.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], ny.set(a, i)), i.push(e));
        }
      }, bo.flushLegacyContextWarning = function() {
        ny.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(f) {
              i.add(Rt(f) || "Component"), ob.add(f.type);
            });
            var u = Uc(i);
            try {
              Qn(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Un();
            }
          }
        });
      }, bo.discardPendingWarnings = function() {
        hv = [], mv = [], yv = [], gv = [], Sv = [], wv = [], ny = /* @__PURE__ */ new Map();
      };
    }
    function Co(e, t) {
      if (e && e.defaultProps) {
        var a = Pt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var ZS = os(null), e0;
    e0 = {};
    var ry = null, Ed = null, t0 = null, ay = !1;
    function iy() {
      ry = null, Ed = null, t0 = null, ay = !1;
    }
    function lb() {
      ay = !0;
    }
    function ub() {
      ay = !1;
    }
    function sb(e, t, a) {
      Da(ZS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== e0 && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = e0;
    }
    function n0(e, t) {
      var a = ZS.current;
      ka(ZS, t), e._currentValue = a;
    }
    function r0(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Yl(i.childLanes, t) ? u !== null && !Yl(u.childLanes, t) && (u.childLanes = Mt(u.childLanes, t)) : (i.childLanes = Mt(i.childLanes, t), u !== null && (u.childLanes = Mt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ck(e, t, a) {
      xk(e, t, a);
    }
    function xk(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, f = i.dependencies;
        if (f !== null) {
          u = i.child;
          for (var h = f.firstContext; h !== null; ) {
            if (h.context === t) {
              if (i.tag === D) {
                var S = Bu(a), E = iu(Nn, S);
                E.tag = ly;
                var x = i.updateQueue;
                if (x !== null) {
                  var k = x.shared, $ = k.pending;
                  $ === null ? E.next = E : (E.next = $.next, $.next = E), k.pending = E;
                }
              }
              i.lanes = Mt(i.lanes, a);
              var V = i.alternate;
              V !== null && (V.lanes = Mt(V.lanes, a)), r0(i.return, a, e), f.lanes = Mt(f.lanes, a);
              break;
            }
            h = h.next;
          }
        } else if (i.tag === Q)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === De) {
          var re = i.return;
          if (re === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          re.lanes = Mt(re.lanes, a);
          var ae = re.alternate;
          ae !== null && (ae.lanes = Mt(ae.lanes, a)), r0(re, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var pe = u.sibling;
            if (pe !== null) {
              pe.return = u.return, u = pe;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function bd(e, t) {
      ry = e, Ed = null, t0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Ta(a.lanes, t) && Mv(), a.firstContext = null);
      }
    }
    function Ur(e) {
      ay && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (t0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Ed === null) {
          if (ry === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Ed = a, ry.dependencies = {
            lanes: ye,
            firstContext: a
          };
        } else
          Ed = Ed.next = a;
      }
      return t;
    }
    var Pc = null;
    function a0(e) {
      Pc === null ? Pc = [e] : Pc.push(e);
    }
    function Rk() {
      if (Pc !== null) {
        for (var e = 0; e < Pc.length; e++) {
          var t = Pc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var f = u.next;
              u.next = i, a.next = f;
            }
            t.pending = a;
          }
        }
        Pc = null;
      }
    }
    function cb(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, a0(t)) : (a.next = u.next, u.next = a), t.interleaved = a, oy(e, i);
    }
    function Tk(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, a0(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ok(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, a0(t)) : (a.next = u.next, u.next = a), t.interleaved = a, oy(e, i);
    }
    function ci(e, t) {
      return oy(e, t);
    }
    var kk = oy;
    function oy(e, t) {
      e.lanes = Mt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Mt(a.lanes, t)), a === null && (e.flags & (On | zi)) !== yt && fx(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Mt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Mt(a.childLanes, t) : (u.flags & (On | zi)) !== yt && fx(e), i = u, u = u.return;
      if (i.tag === U) {
        var f = i.stateNode;
        return f;
      } else
        return null;
    }
    var fb = 0, db = 1, ly = 2, i0 = 3, uy = !1, o0, sy;
    o0 = !1, sy = null;
    function l0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ye
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function pb(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function iu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: fb,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function cs(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (sy === u && !o0 && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), o0 = !0), kA()) {
        var f = u.pending;
        return f === null ? t.next = t : (t.next = f.next, f.next = t), u.pending = t, kk(e, a);
      } else
        return Ok(e, u, t, a);
    }
    function cy(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Up(a)) {
          var f = u.lanes;
          f = Bf(f, e.pendingLanes);
          var h = Mt(f, a);
          u.lanes = h, zp(e, h);
        }
      }
    }
    function u0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var f = null, h = null, S = a.firstBaseUpdate;
          if (S !== null) {
            var E = S;
            do {
              var x = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              h === null ? f = h = x : (h.next = x, h = x), E = E.next;
            } while (E !== null);
            h === null ? f = h = t : (h.next = t, h = t);
          } else
            f = h = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: f,
            lastBaseUpdate: h,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var k = a.lastBaseUpdate;
      k === null ? a.firstBaseUpdate = t : k.next = t, a.lastBaseUpdate = t;
    }
    function Dk(e, t, a, i, u, f) {
      switch (a.tag) {
        case db: {
          var h = a.payload;
          if (typeof h == "function") {
            lb();
            var S = h.call(f, i, u);
            {
              if (e.mode & ar) {
                An(!0);
                try {
                  h.call(f, i, u);
                } finally {
                  An(!1);
                }
              }
              ub();
            }
            return S;
          }
          return h;
        }
        case i0:
          e.flags = e.flags & ~Pr | Ot;
        case fb: {
          var E = a.payload, x;
          if (typeof E == "function") {
            lb(), x = E.call(f, i, u);
            {
              if (e.mode & ar) {
                An(!0);
                try {
                  E.call(f, i, u);
                } finally {
                  An(!1);
                }
              }
              ub();
            }
          } else
            x = E;
          return x == null ? i : Pt({}, i, x);
        }
        case ly:
          return uy = !0, i;
      }
      return i;
    }
    function fy(e, t, a, i) {
      var u = e.updateQueue;
      uy = !1, sy = u.shared;
      var f = u.firstBaseUpdate, h = u.lastBaseUpdate, S = u.shared.pending;
      if (S !== null) {
        u.shared.pending = null;
        var E = S, x = E.next;
        E.next = null, h === null ? f = x : h.next = x, h = E;
        var k = e.alternate;
        if (k !== null) {
          var $ = k.updateQueue, V = $.lastBaseUpdate;
          V !== h && (V === null ? $.firstBaseUpdate = x : V.next = x, $.lastBaseUpdate = E);
        }
      }
      if (f !== null) {
        var re = u.baseState, ae = ye, pe = null, et = null, St = null, pt = f;
        do {
          var Xt = pt.lane, Wt = pt.eventTime;
          if (Yl(i, Xt)) {
            if (St !== null) {
              var ve = {
                eventTime: Wt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: pr,
                tag: pt.tag,
                payload: pt.payload,
                callback: pt.callback,
                next: null
              };
              St = St.next = ve;
            }
            re = Dk(e, u, pt, re, t, a);
            var J = pt.callback;
            if (J !== null && // If the update was already committed, we should not queue its
            // callback again.
            pt.lane !== pr) {
              e.flags |= Nr;
              var Ae = u.effects;
              Ae === null ? u.effects = [pt] : Ae.push(pt);
            }
          } else {
            var X = {
              eventTime: Wt,
              lane: Xt,
              tag: pt.tag,
              payload: pt.payload,
              callback: pt.callback,
              next: null
            };
            St === null ? (et = St = X, pe = re) : St = St.next = X, ae = Mt(ae, Xt);
          }
          if (pt = pt.next, pt === null) {
            if (S = u.shared.pending, S === null)
              break;
            var tt = S, Qe = tt.next;
            tt.next = null, pt = Qe, u.lastBaseUpdate = tt, u.shared.pending = null;
          }
        } while (!0);
        St === null && (pe = re), u.baseState = pe, u.firstBaseUpdate = et, u.lastBaseUpdate = St;
        var Ct = u.shared.interleaved;
        if (Ct !== null) {
          var Nt = Ct;
          do
            ae = Mt(ae, Nt.lane), Nt = Nt.next;
          while (Nt !== Ct);
        } else f === null && (u.shared.lanes = ye);
        Yv(ae), e.lanes = ae, e.memoizedState = re;
      }
      sy = null;
    }
    function Ak(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function vb() {
      uy = !1;
    }
    function dy() {
      return uy;
    }
    function hb(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var f = i[u], h = f.callback;
          h !== null && (f.callback = null, Ak(h, a));
        }
    }
    var s0 = {}, mb = new s.Component().refs, c0, f0, d0, p0, v0, yb, py, h0, m0, y0;
    {
      c0 = /* @__PURE__ */ new Set(), f0 = /* @__PURE__ */ new Set(), d0 = /* @__PURE__ */ new Set(), p0 = /* @__PURE__ */ new Set(), h0 = /* @__PURE__ */ new Set(), v0 = /* @__PURE__ */ new Set(), m0 = /* @__PURE__ */ new Set(), y0 = /* @__PURE__ */ new Set();
      var gb = /* @__PURE__ */ new Set();
      py = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          gb.has(a) || (gb.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, yb = function(e, t) {
        if (t === void 0) {
          var a = Zt(e) || "Component";
          v0.has(a) || (v0.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(s0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(s0);
    }
    function g0(e, t, a, i) {
      var u = e.memoizedState, f = a(i, u);
      {
        if (e.mode & ar) {
          An(!0);
          try {
            f = a(i, u);
          } finally {
            An(!1);
          }
        }
        yb(t, f);
      }
      var h = f == null ? u : Pt({}, u, f);
      if (e.memoizedState = h, e.lanes === ye) {
        var S = e.updateQueue;
        S.baseState = h;
      }
    }
    var S0 = {
      isMounted: Fa,
      enqueueSetState: function(e, t, a) {
        var i = Ui(e), u = $a(), f = gs(i), h = iu(u, f);
        h.payload = t, a != null && (py(a, "setState"), h.callback = a);
        var S = cs(i, h, f);
        S !== null && (Gr(S, i, f, u), cy(S, i, f)), xf(i, f);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ui(e), u = $a(), f = gs(i), h = iu(u, f);
        h.tag = db, h.payload = t, a != null && (py(a, "replaceState"), h.callback = a);
        var S = cs(i, h, f);
        S !== null && (Gr(S, i, f, u), cy(S, i, f)), xf(i, f);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ui(e), i = $a(), u = gs(a), f = iu(i, u);
        f.tag = ly, t != null && (py(t, "forceUpdate"), f.callback = t);
        var h = cs(a, f, u);
        h !== null && (Gr(h, a, u, i), cy(h, a, u)), zu(a, u);
      }
    };
    function Sb(e, t, a, i, u, f, h) {
      var S = e.stateNode;
      if (typeof S.shouldComponentUpdate == "function") {
        var E = S.shouldComponentUpdate(i, f, h);
        {
          if (e.mode & ar) {
            An(!0);
            try {
              E = S.shouldComponentUpdate(i, f, h);
            } finally {
              An(!1);
            }
          }
          E === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Zt(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Et(a, i) || !Et(u, f) : !0;
    }
    function Nk(e, t, a) {
      var i = e.stateNode;
      {
        var u = Zt(t) || "Component", f = i.render;
        f || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !m0.has(t) && (m0.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Zt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var h = i.props !== a;
        i.props !== void 0 && h && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !d0.has(t) && (d0.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Zt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var S = i.state;
        S && (typeof S != "object" || en(S)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function wb(e, t) {
      t.updater = S0, e.stateNode = t, yf(t, e), t._reactInternalInstance = s0;
    }
    function _b(e, t, a) {
      var i = !1, u = Ci, f = Ci, h = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          h === null || h !== void 0 && h.$$typeof === Ye && h._context === void 0
        );
        if (!S && !y0.has(t)) {
          y0.add(t);
          var E = "";
          h === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof h != "object" ? E = " However, it is set to a " + typeof h + "." : h.$$typeof === Ee ? E = " Did you accidentally pass the Context.Provider instead?" : h._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(h).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Zt(t) || "Component", E);
        }
      }
      if (typeof h == "object" && h !== null)
        f = Ur(h);
      else {
        u = yd(e, t, !0);
        var x = t.contextTypes;
        i = x != null, f = i ? gd(e, u) : Ci;
      }
      var k = new t(a, f);
      if (e.mode & ar) {
        An(!0);
        try {
          k = new t(a, f);
        } finally {
          An(!1);
        }
      }
      var $ = e.memoizedState = k.state !== null && k.state !== void 0 ? k.state : null;
      wb(e, k);
      {
        if (typeof t.getDerivedStateFromProps == "function" && $ === null) {
          var V = Zt(t) || "Component";
          f0.has(V) || (f0.add(V), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", V, k.state === null ? "null" : "undefined", V));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof k.getSnapshotBeforeUpdate == "function") {
          var re = null, ae = null, pe = null;
          if (typeof k.componentWillMount == "function" && k.componentWillMount.__suppressDeprecationWarning !== !0 ? re = "componentWillMount" : typeof k.UNSAFE_componentWillMount == "function" && (re = "UNSAFE_componentWillMount"), typeof k.componentWillReceiveProps == "function" && k.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ae = "componentWillReceiveProps" : typeof k.UNSAFE_componentWillReceiveProps == "function" && (ae = "UNSAFE_componentWillReceiveProps"), typeof k.componentWillUpdate == "function" && k.componentWillUpdate.__suppressDeprecationWarning !== !0 ? pe = "componentWillUpdate" : typeof k.UNSAFE_componentWillUpdate == "function" && (pe = "UNSAFE_componentWillUpdate"), re !== null || ae !== null || pe !== null) {
            var et = Zt(t) || "Component", St = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            p0.has(et) || (p0.add(et), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, et, St, re !== null ? `
  ` + re : "", ae !== null ? `
  ` + ae : "", pe !== null ? `
  ` + pe : ""));
          }
        }
      }
      return i && WE(e, u, f), k;
    }
    function Lk(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Rt(e) || "Component"), S0.enqueueReplaceState(t, t.state, null));
    }
    function Eb(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var f = Rt(e) || "Component";
          c0.has(f) || (c0.add(f), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", f));
        }
        S0.enqueueReplaceState(t, t.state, null);
      }
    }
    function w0(e, t, a, i) {
      Nk(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = mb, l0(e);
      var f = t.contextType;
      if (typeof f == "object" && f !== null)
        u.context = Ur(f);
      else {
        var h = yd(e, t, !0);
        u.context = gd(e, h);
      }
      {
        if (u.state === a) {
          var S = Zt(t) || "Component";
          h0.has(S) || (h0.add(S), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", S));
        }
        e.mode & ar && bo.recordLegacyContextWarning(e, u), bo.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (g0(e, t, E, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Lk(e, u), fy(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var x = st;
        x |= Za, (e.mode & ni) !== gt && (x |= ei), e.flags |= x;
      }
    }
    function Mk(e, t, a, i) {
      var u = e.stateNode, f = e.memoizedProps;
      u.props = f;
      var h = u.context, S = t.contextType, E = Ci;
      if (typeof S == "object" && S !== null)
        E = Ur(S);
      else {
        var x = yd(e, t, !0);
        E = gd(e, x);
      }
      var k = t.getDerivedStateFromProps, $ = typeof k == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !$ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (f !== a || h !== E) && Eb(e, u, a, E), vb();
      var V = e.memoizedState, re = u.state = V;
      if (fy(e, a, u, i), re = e.memoizedState, f === a && V === re && !Gm() && !dy()) {
        if (typeof u.componentDidMount == "function") {
          var ae = st;
          ae |= Za, (e.mode & ni) !== gt && (ae |= ei), e.flags |= ae;
        }
        return !1;
      }
      typeof k == "function" && (g0(e, t, k, a), re = e.memoizedState);
      var pe = dy() || Sb(e, t, f, a, V, re, E);
      if (pe) {
        if (!$ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var et = st;
          et |= Za, (e.mode & ni) !== gt && (et |= ei), e.flags |= et;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var St = st;
          St |= Za, (e.mode & ni) !== gt && (St |= ei), e.flags |= St;
        }
        e.memoizedProps = a, e.memoizedState = re;
      }
      return u.props = a, u.state = re, u.context = E, pe;
    }
    function jk(e, t, a, i, u) {
      var f = t.stateNode;
      pb(e, t);
      var h = t.memoizedProps, S = t.type === t.elementType ? h : Co(t.type, h);
      f.props = S;
      var E = t.pendingProps, x = f.context, k = a.contextType, $ = Ci;
      if (typeof k == "object" && k !== null)
        $ = Ur(k);
      else {
        var V = yd(t, a, !0);
        $ = gd(t, V);
      }
      var re = a.getDerivedStateFromProps, ae = typeof re == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !ae && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (h !== E || x !== $) && Eb(t, f, i, $), vb();
      var pe = t.memoizedState, et = f.state = pe;
      if (fy(t, i, f, u), et = t.memoizedState, h === E && pe === et && !Gm() && !dy() && !N)
        return typeof f.componentDidUpdate == "function" && (h !== e.memoizedProps || pe !== e.memoizedState) && (t.flags |= st), typeof f.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || pe !== e.memoizedState) && (t.flags |= Sr), !1;
      typeof re == "function" && (g0(t, a, re, i), et = t.memoizedState);
      var St = dy() || Sb(t, a, S, i, pe, et, $) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      N;
      return St ? (!ae && (typeof f.UNSAFE_componentWillUpdate == "function" || typeof f.componentWillUpdate == "function") && (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, et, $), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, et, $)), typeof f.componentDidUpdate == "function" && (t.flags |= st), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= Sr)) : (typeof f.componentDidUpdate == "function" && (h !== e.memoizedProps || pe !== e.memoizedState) && (t.flags |= st), typeof f.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || pe !== e.memoizedState) && (t.flags |= Sr), t.memoizedProps = i, t.memoizedState = et), f.props = i, f.state = et, f.context = $, St;
    }
    var _0, E0, b0, C0, x0, bb = function(e, t) {
    };
    _0 = !1, E0 = !1, b0 = {}, C0 = {}, x0 = {}, bb = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Rt(t) || "Component";
        C0[a] || (C0[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function _v(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ar || Pe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Rt(e) || "Component";
          b0[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), b0[u] = !0);
        }
        if (a._owner) {
          var f = a._owner, h;
          if (f) {
            var S = f;
            if (S.tag !== D)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            h = S.stateNode;
          }
          if (!h)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = h;
          Ln(i, "ref");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var k = function($) {
            var V = E.refs;
            V === mb && (V = E.refs = {}), $ === null ? delete V[x] : V[x] = $;
          };
          return k._stringRef = x, k;
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
    function vy(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function hy(e) {
      {
        var t = Rt(e) || "Component";
        if (x0[t])
          return;
        x0[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Cb(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function xb(e) {
      function t(X, ve) {
        if (e) {
          var J = X.deletions;
          J === null ? (X.deletions = [ve], X.flags |= rn) : J.push(ve);
        }
      }
      function a(X, ve) {
        if (!e)
          return null;
        for (var J = ve; J !== null; )
          t(X, J), J = J.sibling;
        return null;
      }
      function i(X, ve) {
        for (var J = /* @__PURE__ */ new Map(), Ae = ve; Ae !== null; )
          Ae.key !== null ? J.set(Ae.key, Ae) : J.set(Ae.index, Ae), Ae = Ae.sibling;
        return J;
      }
      function u(X, ve) {
        var J = Yc(X, ve);
        return J.index = 0, J.sibling = null, J;
      }
      function f(X, ve, J) {
        if (X.index = J, !e)
          return X.flags |= Yh, ve;
        var Ae = X.alternate;
        if (Ae !== null) {
          var tt = Ae.index;
          return tt < ve ? (X.flags |= On, ve) : tt;
        } else
          return X.flags |= On, ve;
      }
      function h(X) {
        return e && X.alternate === null && (X.flags |= On), X;
      }
      function S(X, ve, J, Ae) {
        if (ve === null || ve.tag !== W) {
          var tt = Jw(J, X.mode, Ae);
          return tt.return = X, tt;
        } else {
          var Qe = u(ve, J);
          return Qe.return = X, Qe;
        }
      }
      function E(X, ve, J, Ae) {
        var tt = J.type;
        if (tt === mn)
          return k(X, ve, J.props.children, Ae, J.key);
        if (ve !== null && (ve.elementType === tt || // Keep this check inline so it only runs on the false path:
        hx(ve, J) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof tt == "object" && tt !== null && tt.$$typeof === Ve && Cb(tt) === ve.type)) {
          var Qe = u(ve, J.props);
          return Qe.ref = _v(X, ve, J), Qe.return = X, Qe._debugSource = J._source, Qe._debugOwner = J._owner, Qe;
        }
        var Ct = Xw(J, X.mode, Ae);
        return Ct.ref = _v(X, ve, J), Ct.return = X, Ct;
      }
      function x(X, ve, J, Ae) {
        if (ve === null || ve.tag !== H || ve.stateNode.containerInfo !== J.containerInfo || ve.stateNode.implementation !== J.implementation) {
          var tt = Zw(J, X.mode, Ae);
          return tt.return = X, tt;
        } else {
          var Qe = u(ve, J.children || []);
          return Qe.return = X, Qe;
        }
      }
      function k(X, ve, J, Ae, tt) {
        if (ve === null || ve.tag !== Y) {
          var Qe = ws(J, X.mode, Ae, tt);
          return Qe.return = X, Qe;
        } else {
          var Ct = u(ve, J);
          return Ct.return = X, Ct;
        }
      }
      function $(X, ve, J) {
        if (typeof ve == "string" && ve !== "" || typeof ve == "number") {
          var Ae = Jw("" + ve, X.mode, J);
          return Ae.return = X, Ae;
        }
        if (typeof ve == "object" && ve !== null) {
          switch (ve.$$typeof) {
            case Mn: {
              var tt = Xw(ve, X.mode, J);
              return tt.ref = _v(X, null, ve), tt.return = X, tt;
            }
            case jn: {
              var Qe = Zw(ve, X.mode, J);
              return Qe.return = X, Qe;
            }
            case Ve: {
              var Ct = ve._payload, Nt = ve._init;
              return $(X, Nt(Ct), J);
            }
          }
          if (en(ve) || Ai(ve)) {
            var En = ws(ve, X.mode, J, null);
            return En.return = X, En;
          }
          vy(X, ve);
        }
        return typeof ve == "function" && hy(X), null;
      }
      function V(X, ve, J, Ae) {
        var tt = ve !== null ? ve.key : null;
        if (typeof J == "string" && J !== "" || typeof J == "number")
          return tt !== null ? null : S(X, ve, "" + J, Ae);
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case Mn:
              return J.key === tt ? E(X, ve, J, Ae) : null;
            case jn:
              return J.key === tt ? x(X, ve, J, Ae) : null;
            case Ve: {
              var Qe = J._payload, Ct = J._init;
              return V(X, ve, Ct(Qe), Ae);
            }
          }
          if (en(J) || Ai(J))
            return tt !== null ? null : k(X, ve, J, Ae, null);
          vy(X, J);
        }
        return typeof J == "function" && hy(X), null;
      }
      function re(X, ve, J, Ae, tt) {
        if (typeof Ae == "string" && Ae !== "" || typeof Ae == "number") {
          var Qe = X.get(J) || null;
          return S(ve, Qe, "" + Ae, tt);
        }
        if (typeof Ae == "object" && Ae !== null) {
          switch (Ae.$$typeof) {
            case Mn: {
              var Ct = X.get(Ae.key === null ? J : Ae.key) || null;
              return E(ve, Ct, Ae, tt);
            }
            case jn: {
              var Nt = X.get(Ae.key === null ? J : Ae.key) || null;
              return x(ve, Nt, Ae, tt);
            }
            case Ve:
              var En = Ae._payload, on = Ae._init;
              return re(X, ve, J, on(En), tt);
          }
          if (en(Ae) || Ai(Ae)) {
            var kr = X.get(J) || null;
            return k(ve, kr, Ae, tt, null);
          }
          vy(ve, Ae);
        }
        return typeof Ae == "function" && hy(ve), null;
      }
      function ae(X, ve, J) {
        {
          if (typeof X != "object" || X === null)
            return ve;
          switch (X.$$typeof) {
            case Mn:
            case jn:
              bb(X, J);
              var Ae = X.key;
              if (typeof Ae != "string")
                break;
              if (ve === null) {
                ve = /* @__PURE__ */ new Set(), ve.add(Ae);
                break;
              }
              if (!ve.has(Ae)) {
                ve.add(Ae);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Ae);
              break;
            case Ve:
              var tt = X._payload, Qe = X._init;
              ae(Qe(tt), ve, J);
              break;
          }
        }
        return ve;
      }
      function pe(X, ve, J, Ae) {
        for (var tt = null, Qe = 0; Qe < J.length; Qe++) {
          var Ct = J[Qe];
          tt = ae(Ct, tt, X);
        }
        for (var Nt = null, En = null, on = ve, kr = 0, ln = 0, _r = null; on !== null && ln < J.length; ln++) {
          on.index > ln ? (_r = on, on = null) : _r = on.sibling;
          var Na = V(X, on, J[ln], Ae);
          if (Na === null) {
            on === null && (on = _r);
            break;
          }
          e && on && Na.alternate === null && t(X, on), kr = f(Na, kr, ln), En === null ? Nt = Na : En.sibling = Na, En = Na, on = _r;
        }
        if (ln === J.length) {
          if (a(X, on), ia()) {
            var da = ln;
            Lc(X, da);
          }
          return Nt;
        }
        if (on === null) {
          for (; ln < J.length; ln++) {
            var Ri = $(X, J[ln], Ae);
            Ri !== null && (kr = f(Ri, kr, ln), En === null ? Nt = Ri : En.sibling = Ri, En = Ri);
          }
          if (ia()) {
            var Wa = ln;
            Lc(X, Wa);
          }
          return Nt;
        }
        for (var Ya = i(X, on); ln < J.length; ln++) {
          var La = re(Ya, X, ln, J[ln], Ae);
          La !== null && (e && La.alternate !== null && Ya.delete(La.key === null ? ln : La.key), kr = f(La, kr, ln), En === null ? Nt = La : En.sibling = La, En = La);
        }
        if (e && Ya.forEach(function(Hd) {
          return t(X, Hd);
        }), ia()) {
          var fu = ln;
          Lc(X, fu);
        }
        return Nt;
      }
      function et(X, ve, J, Ae) {
        var tt = Ai(J);
        if (typeof tt != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          J[Symbol.toStringTag] === "Generator" && (E0 || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), E0 = !0), J.entries === tt && (_0 || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), _0 = !0);
          var Qe = tt.call(J);
          if (Qe)
            for (var Ct = null, Nt = Qe.next(); !Nt.done; Nt = Qe.next()) {
              var En = Nt.value;
              Ct = ae(En, Ct, X);
            }
        }
        var on = tt.call(J);
        if (on == null)
          throw new Error("An iterable object provided no iterator.");
        for (var kr = null, ln = null, _r = ve, Na = 0, da = 0, Ri = null, Wa = on.next(); _r !== null && !Wa.done; da++, Wa = on.next()) {
          _r.index > da ? (Ri = _r, _r = null) : Ri = _r.sibling;
          var Ya = V(X, _r, Wa.value, Ae);
          if (Ya === null) {
            _r === null && (_r = Ri);
            break;
          }
          e && _r && Ya.alternate === null && t(X, _r), Na = f(Ya, Na, da), ln === null ? kr = Ya : ln.sibling = Ya, ln = Ya, _r = Ri;
        }
        if (Wa.done) {
          if (a(X, _r), ia()) {
            var La = da;
            Lc(X, La);
          }
          return kr;
        }
        if (_r === null) {
          for (; !Wa.done; da++, Wa = on.next()) {
            var fu = $(X, Wa.value, Ae);
            fu !== null && (Na = f(fu, Na, da), ln === null ? kr = fu : ln.sibling = fu, ln = fu);
          }
          if (ia()) {
            var Hd = da;
            Lc(X, Hd);
          }
          return kr;
        }
        for (var Xv = i(X, _r); !Wa.done; da++, Wa = on.next()) {
          var _l = re(Xv, X, da, Wa.value, Ae);
          _l !== null && (e && _l.alternate !== null && Xv.delete(_l.key === null ? da : _l.key), Na = f(_l, Na, da), ln === null ? kr = _l : ln.sibling = _l, ln = _l);
        }
        if (e && Xv.forEach(function(QN) {
          return t(X, QN);
        }), ia()) {
          var GN = da;
          Lc(X, GN);
        }
        return kr;
      }
      function St(X, ve, J, Ae) {
        if (ve !== null && ve.tag === W) {
          a(X, ve.sibling);
          var tt = u(ve, J);
          return tt.return = X, tt;
        }
        a(X, ve);
        var Qe = Jw(J, X.mode, Ae);
        return Qe.return = X, Qe;
      }
      function pt(X, ve, J, Ae) {
        for (var tt = J.key, Qe = ve; Qe !== null; ) {
          if (Qe.key === tt) {
            var Ct = J.type;
            if (Ct === mn) {
              if (Qe.tag === Y) {
                a(X, Qe.sibling);
                var Nt = u(Qe, J.props.children);
                return Nt.return = X, Nt._debugSource = J._source, Nt._debugOwner = J._owner, Nt;
              }
            } else if (Qe.elementType === Ct || // Keep this check inline so it only runs on the false path:
            hx(Qe, J) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ct == "object" && Ct !== null && Ct.$$typeof === Ve && Cb(Ct) === Qe.type) {
              a(X, Qe.sibling);
              var En = u(Qe, J.props);
              return En.ref = _v(X, Qe, J), En.return = X, En._debugSource = J._source, En._debugOwner = J._owner, En;
            }
            a(X, Qe);
            break;
          } else
            t(X, Qe);
          Qe = Qe.sibling;
        }
        if (J.type === mn) {
          var on = ws(J.props.children, X.mode, Ae, J.key);
          return on.return = X, on;
        } else {
          var kr = Xw(J, X.mode, Ae);
          return kr.ref = _v(X, ve, J), kr.return = X, kr;
        }
      }
      function Xt(X, ve, J, Ae) {
        for (var tt = J.key, Qe = ve; Qe !== null; ) {
          if (Qe.key === tt)
            if (Qe.tag === H && Qe.stateNode.containerInfo === J.containerInfo && Qe.stateNode.implementation === J.implementation) {
              a(X, Qe.sibling);
              var Ct = u(Qe, J.children || []);
              return Ct.return = X, Ct;
            } else {
              a(X, Qe);
              break;
            }
          else
            t(X, Qe);
          Qe = Qe.sibling;
        }
        var Nt = Zw(J, X.mode, Ae);
        return Nt.return = X, Nt;
      }
      function Wt(X, ve, J, Ae) {
        var tt = typeof J == "object" && J !== null && J.type === mn && J.key === null;
        if (tt && (J = J.props.children), typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case Mn:
              return h(pt(X, ve, J, Ae));
            case jn:
              return h(Xt(X, ve, J, Ae));
            case Ve:
              var Qe = J._payload, Ct = J._init;
              return Wt(X, ve, Ct(Qe), Ae);
          }
          if (en(J))
            return pe(X, ve, J, Ae);
          if (Ai(J))
            return et(X, ve, J, Ae);
          vy(X, J);
        }
        return typeof J == "string" && J !== "" || typeof J == "number" ? h(St(X, ve, "" + J, Ae)) : (typeof J == "function" && hy(X), a(X, ve));
      }
      return Wt;
    }
    var Cd = xb(!0), Rb = xb(!1);
    function Uk(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Yc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Yc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function zk(e, t) {
      for (var a = e.child; a !== null; )
        dN(a, t), a = a.sibling;
    }
    var Ev = {}, fs = os(Ev), bv = os(Ev), my = os(Ev);
    function yy(e) {
      if (e === Ev)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Tb() {
      var e = yy(my.current);
      return e;
    }
    function R0(e, t) {
      Da(my, t, e), Da(bv, e, e), Da(fs, Ev, e);
      var a = X1(t);
      ka(fs, e), Da(fs, a, e);
    }
    function xd(e) {
      ka(fs, e), ka(bv, e), ka(my, e);
    }
    function T0() {
      var e = yy(fs.current);
      return e;
    }
    function Ob(e) {
      yy(my.current);
      var t = yy(fs.current), a = J1(t, e.type);
      t !== a && (Da(bv, e, e), Da(fs, a, e));
    }
    function O0(e) {
      bv.current === e && (ka(fs, e), ka(bv, e));
    }
    var Pk = 0, kb = 1, Db = 1, Cv = 2, xo = os(Pk);
    function k0(e, t) {
      return (e & t) !== 0;
    }
    function Rd(e) {
      return e & kb;
    }
    function D0(e, t) {
      return e & kb | t;
    }
    function Fk(e, t) {
      return e | t;
    }
    function ds(e, t) {
      Da(xo, t, e);
    }
    function Td(e) {
      ka(xo, e);
    }
    function Hk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function gy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === we) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || HE(i) || US(i))
              return t;
          }
        } else if (t.tag === _e && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ot) !== yt;
          if (u)
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
    var fi = (
      /*   */
      0
    ), Br = (
      /* */
      1
    ), vl = (
      /*  */
      2
    ), Vr = (
      /*    */
      4
    ), oa = (
      /*   */
      8
    ), A0 = [];
    function N0() {
      for (var e = 0; e < A0.length; e++) {
        var t = A0[e];
        t._workInProgressVersionPrimary = null;
      }
      A0.length = 0;
    }
    function Bk(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Je = v.ReactCurrentDispatcher, xv = v.ReactCurrentBatchConfig, L0, Od;
    L0 = /* @__PURE__ */ new Set();
    var Fc = ye, _n = null, Ir = null, $r = null, Sy = !1, Rv = !1, Tv = 0, Vk = 0, Ik = 25, ge = null, Qi = null, ps = -1, M0 = !1;
    function hn() {
      {
        var e = ge;
        Qi === null ? Qi = [e] : Qi.push(e);
      }
    }
    function Ge() {
      {
        var e = ge;
        Qi !== null && (ps++, Qi[ps] !== e && $k(e));
      }
    }
    function kd(e) {
      e != null && !en(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ge, typeof e);
    }
    function $k(e) {
      {
        var t = Rt(_n);
        if (!L0.has(t) && (L0.add(t), Qi !== null)) {
          for (var a = "", i = 30, u = 0; u <= ps; u++) {
            for (var f = Qi[u], h = u === ps ? e : f, S = u + 1 + ". " + f; S.length < i; )
              S += " ";
            S += h + `
`, a += S;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Aa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function j0(e, t) {
      if (M0)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ge), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ge, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!at(e[a], t[a]))
          return !1;
      return !0;
    }
    function Dd(e, t, a, i, u, f) {
      Fc = f, _n = t, Qi = e !== null ? e._debugHookTypes : null, ps = -1, M0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ye, e !== null && e.memoizedState !== null ? Je.current = Jb : Qi !== null ? Je.current = Xb : Je.current = Kb;
      var h = a(i, u);
      if (Rv) {
        var S = 0;
        do {
          if (Rv = !1, Tv = 0, S >= Ik)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          S += 1, M0 = !1, Ir = null, $r = null, t.updateQueue = null, ps = -1, Je.current = Zb, h = a(i, u);
        } while (Rv);
      }
      Je.current = Ny, t._debugHookTypes = Qi;
      var E = Ir !== null && Ir.next !== null;
      if (Fc = ye, _n = null, Ir = null, $r = null, ge = null, Qi = null, ps = -1, e !== null && (e.flags & Fr) !== (t.flags & Fr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & dt) !== gt && g("Internal React error: Expected static flag was missing. Please notify the React team."), Sy = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return h;
    }
    function Ad() {
      var e = Tv !== 0;
      return Tv = 0, e;
    }
    function Ab(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ni) !== gt ? t.flags &= ~(Ul | ei | Sa | st) : t.flags &= ~(Sa | st), e.lanes = mc(e.lanes, a);
    }
    function Nb() {
      if (Je.current = Ny, Sy) {
        for (var e = _n.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Sy = !1;
      }
      Fc = ye, _n = null, Ir = null, $r = null, Qi = null, ps = -1, ge = null, Wb = !1, Rv = !1, Tv = 0;
    }
    function hl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return $r === null ? _n.memoizedState = $r = e : $r = $r.next = e, $r;
    }
    function Ki() {
      var e;
      if (Ir === null) {
        var t = _n.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Ir.next;
      var a;
      if ($r === null ? a = _n.memoizedState : a = $r.next, a !== null)
        $r = a, a = $r.next, Ir = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Ir = e;
        var i = {
          memoizedState: Ir.memoizedState,
          baseState: Ir.baseState,
          baseQueue: Ir.baseQueue,
          queue: Ir.queue,
          next: null
        };
        $r === null ? _n.memoizedState = $r = i : $r = $r.next = i;
      }
      return $r;
    }
    function Lb() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function U0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function z0(e, t, a) {
      var i = hl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var f = {
        pending: null,
        interleaved: null,
        lanes: ye,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = f;
      var h = f.dispatch = Gk.bind(null, _n, f);
      return [i.memoizedState, h];
    }
    function P0(e, t, a) {
      var i = Ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var f = Ir, h = f.baseQueue, S = u.pending;
      if (S !== null) {
        if (h !== null) {
          var E = h.next, x = S.next;
          h.next = x, S.next = E;
        }
        f.baseQueue !== h && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), f.baseQueue = h = S, u.pending = null;
      }
      if (h !== null) {
        var k = h.next, $ = f.baseState, V = null, re = null, ae = null, pe = k;
        do {
          var et = pe.lane;
          if (Yl(Fc, et)) {
            if (ae !== null) {
              var pt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: pr,
                action: pe.action,
                hasEagerState: pe.hasEagerState,
                eagerState: pe.eagerState,
                next: null
              };
              ae = ae.next = pt;
            }
            if (pe.hasEagerState)
              $ = pe.eagerState;
            else {
              var Xt = pe.action;
              $ = e($, Xt);
            }
          } else {
            var St = {
              lane: et,
              action: pe.action,
              hasEagerState: pe.hasEagerState,
              eagerState: pe.eagerState,
              next: null
            };
            ae === null ? (re = ae = St, V = $) : ae = ae.next = St, _n.lanes = Mt(_n.lanes, et), Yv(et);
          }
          pe = pe.next;
        } while (pe !== null && pe !== k);
        ae === null ? V = $ : ae.next = re, at($, i.memoizedState) || Mv(), i.memoizedState = $, i.baseState = V, i.baseQueue = ae, u.lastRenderedState = $;
      }
      var Wt = u.interleaved;
      if (Wt !== null) {
        var X = Wt;
        do {
          var ve = X.lane;
          _n.lanes = Mt(_n.lanes, ve), Yv(ve), X = X.next;
        } while (X !== Wt);
      } else h === null && (u.lanes = ye);
      var J = u.dispatch;
      return [i.memoizedState, J];
    }
    function F0(e, t, a) {
      var i = Ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var f = u.dispatch, h = u.pending, S = i.memoizedState;
      if (h !== null) {
        u.pending = null;
        var E = h.next, x = E;
        do {
          var k = x.action;
          S = e(S, k), x = x.next;
        } while (x !== E);
        at(S, i.memoizedState) || Mv(), i.memoizedState = S, i.baseQueue === null && (i.baseState = S), u.lastRenderedState = S;
      }
      return [S, f];
    }
    function pP(e, t, a) {
    }
    function vP(e, t, a) {
    }
    function H0(e, t, a) {
      var i = _n, u = hl(), f, h = ia();
      if (h) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        f = a(), Od || f !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Od = !0);
      } else {
        if (f = t(), !Od) {
          var S = t();
          at(f, S) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Od = !0);
        }
        var E = Ky();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        hc(E, Fc) || Mb(i, t, f);
      }
      u.memoizedState = f;
      var x = {
        value: f,
        getSnapshot: t
      };
      return u.queue = x, Cy(Ub.bind(null, i, x, e), [e]), i.flags |= Sa, Ov(Br | oa, jb.bind(null, i, x, f, t), void 0, null), f;
    }
    function wy(e, t, a) {
      var i = _n, u = Ki(), f = t();
      if (!Od) {
        var h = t();
        at(f, h) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Od = !0);
      }
      var S = u.memoizedState, E = !at(S, f);
      E && (u.memoizedState = f, Mv());
      var x = u.queue;
      if (Dv(Ub.bind(null, i, x, e), [e]), x.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      $r !== null && $r.memoizedState.tag & Br) {
        i.flags |= Sa, Ov(Br | oa, jb.bind(null, i, x, f, t), void 0, null);
        var k = Ky();
        if (k === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        hc(k, Fc) || Mb(i, t, f);
      }
      return f;
    }
    function Mb(e, t, a) {
      e.flags |= jl;
      var i = {
        getSnapshot: t,
        value: a
      }, u = _n.updateQueue;
      if (u === null)
        u = Lb(), _n.updateQueue = u, u.stores = [i];
      else {
        var f = u.stores;
        f === null ? u.stores = [i] : f.push(i);
      }
    }
    function jb(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zb(t) && Pb(e);
    }
    function Ub(e, t, a) {
      var i = function() {
        zb(t) && Pb(e);
      };
      return a(i);
    }
    function zb(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !at(a, i);
      } catch {
        return !0;
      }
    }
    function Pb(e) {
      var t = ci(e, wt);
      t !== null && Gr(t, e, wt, Nn);
    }
    function _y(e) {
      var t = hl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ye,
        dispatch: null,
        lastRenderedReducer: U0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Qk.bind(null, _n, a);
      return [t.memoizedState, i];
    }
    function B0(e) {
      return P0(U0);
    }
    function V0(e) {
      return F0(U0);
    }
    function Ov(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, f = _n.updateQueue;
      if (f === null)
        f = Lb(), _n.updateQueue = f, f.lastEffect = u.next = u;
      else {
        var h = f.lastEffect;
        if (h === null)
          f.lastEffect = u.next = u;
        else {
          var S = h.next;
          h.next = u, u.next = S, f.lastEffect = u;
        }
      }
      return u;
    }
    function I0(e) {
      var t = hl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Ey(e) {
      var t = Ki();
      return t.memoizedState;
    }
    function kv(e, t, a, i) {
      var u = hl(), f = i === void 0 ? null : i;
      _n.flags |= e, u.memoizedState = Ov(Br | t, a, void 0, f);
    }
    function by(e, t, a, i) {
      var u = Ki(), f = i === void 0 ? null : i, h = void 0;
      if (Ir !== null) {
        var S = Ir.memoizedState;
        if (h = S.destroy, f !== null) {
          var E = S.deps;
          if (j0(f, E)) {
            u.memoizedState = Ov(t, a, h, f);
            return;
          }
        }
      }
      _n.flags |= e, u.memoizedState = Ov(Br | t, a, h, f);
    }
    function Cy(e, t) {
      return (_n.mode & ni) !== gt ? kv(Ul | Sa | Jo, oa, e, t) : kv(Sa | Jo, oa, e, t);
    }
    function Dv(e, t) {
      return by(Sa, oa, e, t);
    }
    function $0(e, t) {
      return kv(st, vl, e, t);
    }
    function xy(e, t) {
      return by(st, vl, e, t);
    }
    function W0(e, t) {
      var a = st;
      return a |= Za, (_n.mode & ni) !== gt && (a |= ei), kv(a, Vr, e, t);
    }
    function Ry(e, t) {
      return by(st, Vr, e, t);
    }
    function Fb(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var f = e();
        return u.current = f, function() {
          u.current = null;
        };
      }
    }
    function Y0(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = st;
      return u |= Za, (_n.mode & ni) !== gt && (u |= ei), kv(u, Vr, Fb.bind(null, t, e), i);
    }
    function Ty(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return by(st, Vr, Fb.bind(null, t, e), i);
    }
    function Wk(e, t) {
    }
    var Oy = Wk;
    function q0(e, t) {
      var a = hl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function ky(e, t) {
      var a = Ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var f = u[1];
        if (j0(i, f))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function G0(e, t) {
      var a = hl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Dy(e, t) {
      var a = Ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var f = u[1];
        if (j0(i, f))
          return u[0];
      }
      var h = e();
      return a.memoizedState = [h, i], h;
    }
    function Q0(e) {
      var t = hl();
      return t.memoizedState = e, e;
    }
    function Hb(e) {
      var t = Ki(), a = Ir, i = a.memoizedState;
      return Vb(t, i, e);
    }
    function Bb(e) {
      var t = Ki();
      if (Ir === null)
        return t.memoizedState = e, e;
      var a = Ir.memoizedState;
      return Vb(t, a, e);
    }
    function Vb(e, t, a) {
      var i = !im(Fc);
      if (i) {
        if (!at(a, t)) {
          var u = um();
          _n.lanes = Mt(_n.lanes, u), Yv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mv()), e.memoizedState = a, a;
    }
    function Yk(e, t, a) {
      var i = ai();
      or(rS(i, yo)), e(!0);
      var u = xv.transition;
      xv.transition = {};
      var f = xv.transition;
      xv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (or(i), xv.transition = u, u === null && f._updatedFibers) {
          var h = f._updatedFibers.size;
          h > 10 && _("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), f._updatedFibers.clear();
        }
      }
    }
    function K0() {
      var e = _y(!1), t = e[0], a = e[1], i = Yk.bind(null, a), u = hl();
      return u.memoizedState = i, [t, i];
    }
    function Ib() {
      var e = B0(), t = e[0], a = Ki(), i = a.memoizedState;
      return [t, i];
    }
    function $b() {
      var e = V0(), t = e[0], a = Ki(), i = a.memoizedState;
      return [t, i];
    }
    var Wb = !1;
    function qk() {
      return Wb;
    }
    function X0() {
      var e = hl(), t = Ky(), a = t.identifierPrefix, i;
      if (ia()) {
        var u = lk();
        i = ":" + a + "R" + u;
        var f = Tv++;
        f > 0 && (i += "H" + f.toString(32)), i += ":";
      } else {
        var h = Vk++;
        i = ":" + a + "r" + h.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Ay() {
      var e = Ki(), t = e.memoizedState;
      return t;
    }
    function Gk(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = gs(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Yb(e))
        qb(t, u);
      else {
        var f = cb(e, t, u, i);
        if (f !== null) {
          var h = $a();
          Gr(f, e, i, h), Gb(f, t, i);
        }
      }
      Qb(e, i);
    }
    function Qk(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = gs(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Yb(e))
        qb(t, u);
      else {
        var f = e.alternate;
        if (e.lanes === ye && (f === null || f.lanes === ye)) {
          var h = t.lastRenderedReducer;
          if (h !== null) {
            var S;
            S = Je.current, Je.current = Ro;
            try {
              var E = t.lastRenderedState, x = h(E, a);
              if (u.hasEagerState = !0, u.eagerState = x, at(x, E)) {
                Tk(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Je.current = S;
            }
          }
        }
        var k = cb(e, t, u, i);
        if (k !== null) {
          var $ = $a();
          Gr(k, e, i, $), Gb(k, t, i);
        }
      }
      Qb(e, i);
    }
    function Yb(e) {
      var t = e.alternate;
      return e === _n || t !== null && t === _n;
    }
    function qb(e, t) {
      Rv = Sy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Gb(e, t, a) {
      if (Up(a)) {
        var i = t.lanes;
        i = Bf(i, e.pendingLanes);
        var u = Mt(i, a);
        t.lanes = u, zp(e, u);
      }
    }
    function Qb(e, t, a) {
      xf(e, t);
    }
    var Ny = {
      readContext: Ur,
      useCallback: Aa,
      useContext: Aa,
      useEffect: Aa,
      useImperativeHandle: Aa,
      useInsertionEffect: Aa,
      useLayoutEffect: Aa,
      useMemo: Aa,
      useReducer: Aa,
      useRef: Aa,
      useState: Aa,
      useDebugValue: Aa,
      useDeferredValue: Aa,
      useTransition: Aa,
      useMutableSource: Aa,
      useSyncExternalStore: Aa,
      useId: Aa,
      unstable_isNewReconciler: ie
    }, Kb = null, Xb = null, Jb = null, Zb = null, ml = null, Ro = null, Ly = null;
    {
      var J0 = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, kt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Kb = {
        readContext: function(e) {
          return Ur(e);
        },
        useCallback: function(e, t) {
          return ge = "useCallback", hn(), kd(t), q0(e, t);
        },
        useContext: function(e) {
          return ge = "useContext", hn(), Ur(e);
        },
        useEffect: function(e, t) {
          return ge = "useEffect", hn(), kd(t), Cy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ge = "useImperativeHandle", hn(), kd(a), Y0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ge = "useInsertionEffect", hn(), kd(t), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ge = "useLayoutEffect", hn(), kd(t), W0(e, t);
        },
        useMemo: function(e, t) {
          ge = "useMemo", hn(), kd(t);
          var a = Je.current;
          Je.current = ml;
          try {
            return G0(e, t);
          } finally {
            Je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ge = "useReducer", hn();
          var i = Je.current;
          Je.current = ml;
          try {
            return z0(e, t, a);
          } finally {
            Je.current = i;
          }
        },
        useRef: function(e) {
          return ge = "useRef", hn(), I0(e);
        },
        useState: function(e) {
          ge = "useState", hn();
          var t = Je.current;
          Je.current = ml;
          try {
            return _y(e);
          } finally {
            Je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ge = "useDebugValue", hn(), void 0;
        },
        useDeferredValue: function(e) {
          return ge = "useDeferredValue", hn(), Q0(e);
        },
        useTransition: function() {
          return ge = "useTransition", hn(), K0();
        },
        useMutableSource: function(e, t, a) {
          return ge = "useMutableSource", hn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ge = "useSyncExternalStore", hn(), H0(e, t, a);
        },
        useId: function() {
          return ge = "useId", hn(), X0();
        },
        unstable_isNewReconciler: ie
      }, Xb = {
        readContext: function(e) {
          return Ur(e);
        },
        useCallback: function(e, t) {
          return ge = "useCallback", Ge(), q0(e, t);
        },
        useContext: function(e) {
          return ge = "useContext", Ge(), Ur(e);
        },
        useEffect: function(e, t) {
          return ge = "useEffect", Ge(), Cy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ge = "useImperativeHandle", Ge(), Y0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ge = "useInsertionEffect", Ge(), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ge = "useLayoutEffect", Ge(), W0(e, t);
        },
        useMemo: function(e, t) {
          ge = "useMemo", Ge();
          var a = Je.current;
          Je.current = ml;
          try {
            return G0(e, t);
          } finally {
            Je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ge = "useReducer", Ge();
          var i = Je.current;
          Je.current = ml;
          try {
            return z0(e, t, a);
          } finally {
            Je.current = i;
          }
        },
        useRef: function(e) {
          return ge = "useRef", Ge(), I0(e);
        },
        useState: function(e) {
          ge = "useState", Ge();
          var t = Je.current;
          Je.current = ml;
          try {
            return _y(e);
          } finally {
            Je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ge = "useDebugValue", Ge(), void 0;
        },
        useDeferredValue: function(e) {
          return ge = "useDeferredValue", Ge(), Q0(e);
        },
        useTransition: function() {
          return ge = "useTransition", Ge(), K0();
        },
        useMutableSource: function(e, t, a) {
          return ge = "useMutableSource", Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ge = "useSyncExternalStore", Ge(), H0(e, t, a);
        },
        useId: function() {
          return ge = "useId", Ge(), X0();
        },
        unstable_isNewReconciler: ie
      }, Jb = {
        readContext: function(e) {
          return Ur(e);
        },
        useCallback: function(e, t) {
          return ge = "useCallback", Ge(), ky(e, t);
        },
        useContext: function(e) {
          return ge = "useContext", Ge(), Ur(e);
        },
        useEffect: function(e, t) {
          return ge = "useEffect", Ge(), Dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ge = "useImperativeHandle", Ge(), Ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ge = "useInsertionEffect", Ge(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ge = "useLayoutEffect", Ge(), Ry(e, t);
        },
        useMemo: function(e, t) {
          ge = "useMemo", Ge();
          var a = Je.current;
          Je.current = Ro;
          try {
            return Dy(e, t);
          } finally {
            Je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ge = "useReducer", Ge();
          var i = Je.current;
          Je.current = Ro;
          try {
            return P0(e, t, a);
          } finally {
            Je.current = i;
          }
        },
        useRef: function(e) {
          return ge = "useRef", Ge(), Ey();
        },
        useState: function(e) {
          ge = "useState", Ge();
          var t = Je.current;
          Je.current = Ro;
          try {
            return B0(e);
          } finally {
            Je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ge = "useDebugValue", Ge(), Oy();
        },
        useDeferredValue: function(e) {
          return ge = "useDeferredValue", Ge(), Hb(e);
        },
        useTransition: function() {
          return ge = "useTransition", Ge(), Ib();
        },
        useMutableSource: function(e, t, a) {
          return ge = "useMutableSource", Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ge = "useSyncExternalStore", Ge(), wy(e, t);
        },
        useId: function() {
          return ge = "useId", Ge(), Ay();
        },
        unstable_isNewReconciler: ie
      }, Zb = {
        readContext: function(e) {
          return Ur(e);
        },
        useCallback: function(e, t) {
          return ge = "useCallback", Ge(), ky(e, t);
        },
        useContext: function(e) {
          return ge = "useContext", Ge(), Ur(e);
        },
        useEffect: function(e, t) {
          return ge = "useEffect", Ge(), Dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ge = "useImperativeHandle", Ge(), Ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ge = "useInsertionEffect", Ge(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ge = "useLayoutEffect", Ge(), Ry(e, t);
        },
        useMemo: function(e, t) {
          ge = "useMemo", Ge();
          var a = Je.current;
          Je.current = Ly;
          try {
            return Dy(e, t);
          } finally {
            Je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ge = "useReducer", Ge();
          var i = Je.current;
          Je.current = Ly;
          try {
            return F0(e, t, a);
          } finally {
            Je.current = i;
          }
        },
        useRef: function(e) {
          return ge = "useRef", Ge(), Ey();
        },
        useState: function(e) {
          ge = "useState", Ge();
          var t = Je.current;
          Je.current = Ly;
          try {
            return V0(e);
          } finally {
            Je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ge = "useDebugValue", Ge(), Oy();
        },
        useDeferredValue: function(e) {
          return ge = "useDeferredValue", Ge(), Bb(e);
        },
        useTransition: function() {
          return ge = "useTransition", Ge(), $b();
        },
        useMutableSource: function(e, t, a) {
          return ge = "useMutableSource", Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ge = "useSyncExternalStore", Ge(), wy(e, t);
        },
        useId: function() {
          return ge = "useId", Ge(), Ay();
        },
        unstable_isNewReconciler: ie
      }, ml = {
        readContext: function(e) {
          return J0(), Ur(e);
        },
        useCallback: function(e, t) {
          return ge = "useCallback", kt(), hn(), q0(e, t);
        },
        useContext: function(e) {
          return ge = "useContext", kt(), hn(), Ur(e);
        },
        useEffect: function(e, t) {
          return ge = "useEffect", kt(), hn(), Cy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ge = "useImperativeHandle", kt(), hn(), Y0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ge = "useInsertionEffect", kt(), hn(), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ge = "useLayoutEffect", kt(), hn(), W0(e, t);
        },
        useMemo: function(e, t) {
          ge = "useMemo", kt(), hn();
          var a = Je.current;
          Je.current = ml;
          try {
            return G0(e, t);
          } finally {
            Je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ge = "useReducer", kt(), hn();
          var i = Je.current;
          Je.current = ml;
          try {
            return z0(e, t, a);
          } finally {
            Je.current = i;
          }
        },
        useRef: function(e) {
          return ge = "useRef", kt(), hn(), I0(e);
        },
        useState: function(e) {
          ge = "useState", kt(), hn();
          var t = Je.current;
          Je.current = ml;
          try {
            return _y(e);
          } finally {
            Je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ge = "useDebugValue", kt(), hn(), void 0;
        },
        useDeferredValue: function(e) {
          return ge = "useDeferredValue", kt(), hn(), Q0(e);
        },
        useTransition: function() {
          return ge = "useTransition", kt(), hn(), K0();
        },
        useMutableSource: function(e, t, a) {
          return ge = "useMutableSource", kt(), hn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ge = "useSyncExternalStore", kt(), hn(), H0(e, t, a);
        },
        useId: function() {
          return ge = "useId", kt(), hn(), X0();
        },
        unstable_isNewReconciler: ie
      }, Ro = {
        readContext: function(e) {
          return J0(), Ur(e);
        },
        useCallback: function(e, t) {
          return ge = "useCallback", kt(), Ge(), ky(e, t);
        },
        useContext: function(e) {
          return ge = "useContext", kt(), Ge(), Ur(e);
        },
        useEffect: function(e, t) {
          return ge = "useEffect", kt(), Ge(), Dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ge = "useImperativeHandle", kt(), Ge(), Ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ge = "useInsertionEffect", kt(), Ge(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ge = "useLayoutEffect", kt(), Ge(), Ry(e, t);
        },
        useMemo: function(e, t) {
          ge = "useMemo", kt(), Ge();
          var a = Je.current;
          Je.current = Ro;
          try {
            return Dy(e, t);
          } finally {
            Je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ge = "useReducer", kt(), Ge();
          var i = Je.current;
          Je.current = Ro;
          try {
            return P0(e, t, a);
          } finally {
            Je.current = i;
          }
        },
        useRef: function(e) {
          return ge = "useRef", kt(), Ge(), Ey();
        },
        useState: function(e) {
          ge = "useState", kt(), Ge();
          var t = Je.current;
          Je.current = Ro;
          try {
            return B0(e);
          } finally {
            Je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ge = "useDebugValue", kt(), Ge(), Oy();
        },
        useDeferredValue: function(e) {
          return ge = "useDeferredValue", kt(), Ge(), Hb(e);
        },
        useTransition: function() {
          return ge = "useTransition", kt(), Ge(), Ib();
        },
        useMutableSource: function(e, t, a) {
          return ge = "useMutableSource", kt(), Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ge = "useSyncExternalStore", kt(), Ge(), wy(e, t);
        },
        useId: function() {
          return ge = "useId", kt(), Ge(), Ay();
        },
        unstable_isNewReconciler: ie
      }, Ly = {
        readContext: function(e) {
          return J0(), Ur(e);
        },
        useCallback: function(e, t) {
          return ge = "useCallback", kt(), Ge(), ky(e, t);
        },
        useContext: function(e) {
          return ge = "useContext", kt(), Ge(), Ur(e);
        },
        useEffect: function(e, t) {
          return ge = "useEffect", kt(), Ge(), Dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ge = "useImperativeHandle", kt(), Ge(), Ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ge = "useInsertionEffect", kt(), Ge(), xy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ge = "useLayoutEffect", kt(), Ge(), Ry(e, t);
        },
        useMemo: function(e, t) {
          ge = "useMemo", kt(), Ge();
          var a = Je.current;
          Je.current = Ro;
          try {
            return Dy(e, t);
          } finally {
            Je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ge = "useReducer", kt(), Ge();
          var i = Je.current;
          Je.current = Ro;
          try {
            return F0(e, t, a);
          } finally {
            Je.current = i;
          }
        },
        useRef: function(e) {
          return ge = "useRef", kt(), Ge(), Ey();
        },
        useState: function(e) {
          ge = "useState", kt(), Ge();
          var t = Je.current;
          Je.current = Ro;
          try {
            return V0(e);
          } finally {
            Je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ge = "useDebugValue", kt(), Ge(), Oy();
        },
        useDeferredValue: function(e) {
          return ge = "useDeferredValue", kt(), Ge(), Bb(e);
        },
        useTransition: function() {
          return ge = "useTransition", kt(), Ge(), $b();
        },
        useMutableSource: function(e, t, a) {
          return ge = "useMutableSource", kt(), Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ge = "useSyncExternalStore", kt(), Ge(), wy(e, t);
        },
        useId: function() {
          return ge = "useId", kt(), Ge(), Ay();
        },
        unstable_isNewReconciler: ie
      };
    }
    var vs = d.unstable_now, eC = 0, My = -1, Av = -1, jy = -1, Z0 = !1, Uy = !1;
    function tC() {
      return Z0;
    }
    function Kk() {
      Uy = !0;
    }
    function Xk() {
      Z0 = !1, Uy = !1;
    }
    function Jk() {
      Z0 = Uy, Uy = !1;
    }
    function nC() {
      return eC;
    }
    function rC() {
      eC = vs();
    }
    function ew(e) {
      Av = vs(), e.actualStartTime < 0 && (e.actualStartTime = vs());
    }
    function aC(e) {
      Av = -1;
    }
    function zy(e, t) {
      if (Av >= 0) {
        var a = vs() - Av;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Av = -1;
      }
    }
    function yl(e) {
      if (My >= 0) {
        var t = vs() - My;
        My = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case G:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function tw(e) {
      if (jy >= 0) {
        var t = vs() - jy;
        jy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case G:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function gl() {
      My = vs();
    }
    function nw() {
      jy = vs();
    }
    function rw(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Hc(e, t) {
      return {
        value: e,
        source: t,
        stack: yu(t),
        digest: null
      };
    }
    function aw(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Zk(e, t) {
      return !0;
    }
    function iw(e, t) {
      try {
        var a = Zk(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, f = t.stack, h = f !== null ? f : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === D)
            return;
          console.error(i);
        }
        var S = u ? Rt(u) : null, E = S ? "The above error occurred in the <" + S + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === U)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var k = Rt(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + k + ".");
        }
        var $ = E + `
` + h + `

` + ("" + x);
        console.error($);
      } catch (V) {
        setTimeout(function() {
          throw V;
        });
      }
    }
    var eD = typeof WeakMap == "function" ? WeakMap : Map;
    function iC(e, t, a) {
      var i = iu(Nn, a);
      i.tag = i0, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        YA(u), iw(e, t);
      }, i;
    }
    function ow(e, t, a) {
      var i = iu(Nn, a);
      i.tag = i0;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var f = t.value;
        i.payload = function() {
          return u(f);
        }, i.callback = function() {
          mx(e), iw(e, t);
        };
      }
      var h = e.stateNode;
      return h !== null && typeof h.componentDidCatch == "function" && (i.callback = function() {
        mx(e), iw(e, t), typeof u != "function" && $A(this);
        var E = t.value, x = t.stack;
        this.componentDidCatch(E, {
          componentStack: x !== null ? x : ""
        }), typeof u != "function" && (Ta(e.lanes, wt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Rt(e) || "Unknown"));
      }), i;
    }
    function oC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new eD(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var f = qA.bind(null, e, t, a);
        Ha && qv(e, a), t.then(f, f);
      }
    }
    function tD(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var f = /* @__PURE__ */ new Set();
        f.add(a), e.updateQueue = f;
      } else
        u.add(a);
    }
    function nD(e, t) {
      var a = e.tag;
      if ((e.mode & dt) === gt && (a === O || a === he || a === q)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function lC(e) {
      var t = e;
      do {
        if (t.tag === we && Hk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function uC(e, t, a, i, u) {
      if ((e.mode & dt) === gt) {
        if (e === t)
          e.flags |= Pr;
        else {
          if (e.flags |= Ot, a.flags |= gf, a.flags &= ~(Wh | Xo), a.tag === D) {
            var f = a.alternate;
            if (f === null)
              a.tag = Oe;
            else {
              var h = iu(Nn, wt);
              h.tag = ly, cs(a, h, wt);
            }
          }
          a.lanes = Mt(a.lanes, wt);
        }
        return e;
      }
      return e.flags |= Pr, e.lanes = u, e;
    }
    function rD(e, t, a, i, u) {
      if (a.flags |= Xo, Ha && qv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var f = i;
        nD(a), ia() && a.mode & dt && JE();
        var h = lC(t);
        if (h !== null) {
          h.flags &= ~na, uC(h, t, a, e, u), h.mode & dt && oC(e, f, u), tD(h, e, f);
          return;
        } else {
          if (!jp(u)) {
            oC(e, f, u), Fw();
            return;
          }
          var S = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = S;
        }
      } else if (ia() && a.mode & dt) {
        JE();
        var E = lC(t);
        if (E !== null) {
          (E.flags & Pr) === yt && (E.flags |= na), uC(E, t, a, e, u), JS(Hc(i, a));
          return;
        }
      }
      i = Hc(i, a), UA(i);
      var x = t;
      do {
        switch (x.tag) {
          case U: {
            var k = i;
            x.flags |= Pr;
            var $ = Bu(u);
            x.lanes = Mt(x.lanes, $);
            var V = iC(x, k, $);
            u0(x, V);
            return;
          }
          case D:
            var re = i, ae = x.type, pe = x.stateNode;
            if ((x.flags & Ot) === yt && (typeof ae.getDerivedStateFromError == "function" || pe !== null && typeof pe.componentDidCatch == "function" && !lx(pe))) {
              x.flags |= Pr;
              var et = Bu(u);
              x.lanes = Mt(x.lanes, et);
              var St = ow(x, re, et);
              u0(x, St);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function aD() {
      return null;
    }
    var Nv = v.ReactCurrentOwner, To = !1, lw, Lv, uw, sw, cw, Bc, fw, Py;
    lw = {}, Lv = {}, uw = {}, sw = {}, cw = {}, Bc = !1, fw = {}, Py = {};
    function Va(e, t, a, i) {
      e === null ? t.child = Rb(t, null, a, i) : t.child = Cd(t, e.child, a, i);
    }
    function iD(e, t, a, i) {
      t.child = Cd(t, e.child, null, i), t.child = Cd(t, null, a, i);
    }
    function sC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var f = a.propTypes;
        f && _o(
          f,
          i,
          // Resolved props
          "prop",
          Zt(a)
        );
      }
      var h = a.render, S = t.ref, E, x;
      bd(t, u), Lu(t);
      {
        if (Nv.current = t, zr(!0), E = Dd(e, t, h, i, S, u), x = Ad(), t.mode & ar) {
          An(!0);
          try {
            E = Dd(e, t, h, i, S, u), x = Ad();
          } finally {
            An(!1);
          }
        }
        zr(!1);
      }
      return Pl(), e !== null && !To ? (Ab(e, t, u), ou(e, t, u)) : (ia() && x && YS(t), t.flags |= Ei, Va(e, t, E, u), t.child);
    }
    function cC(e, t, a, i, u) {
      if (e === null) {
        var f = a.type;
        if (cN(f) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var h = f;
          return h = Fd(f), t.tag = q, t.type = h, vw(t, f), fC(e, t, h, i, u);
        }
        {
          var S = f.propTypes;
          S && _o(
            S,
            i,
            // Resolved props
            "prop",
            Zt(f)
          );
        }
        var E = Kw(a.type, null, i, t, t.mode, u);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var x = a.type, k = x.propTypes;
        k && _o(
          k,
          i,
          // Resolved props
          "prop",
          Zt(x)
        );
      }
      var $ = e.child, V = ww(e, u);
      if (!V) {
        var re = $.memoizedProps, ae = a.compare;
        if (ae = ae !== null ? ae : Et, ae(re, i) && e.ref === t.ref)
          return ou(e, t, u);
      }
      t.flags |= Ei;
      var pe = Yc($, i);
      return pe.ref = t.ref, pe.return = t, t.child = pe, pe;
    }
    function fC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var f = t.elementType;
        if (f.$$typeof === Ve) {
          var h = f, S = h._payload, E = h._init;
          try {
            f = E(S);
          } catch {
            f = null;
          }
          var x = f && f.propTypes;
          x && _o(
            x,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Zt(f)
          );
        }
      }
      if (e !== null) {
        var k = e.memoizedProps;
        if (Et(k, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (To = !1, t.pendingProps = i = k, ww(e, u))
            (e.flags & gf) !== yt && (To = !0);
          else return t.lanes = e.lanes, ou(e, t, u);
      }
      return dw(e, t, a, i, u);
    }
    function dC(e, t, a) {
      var i = t.pendingProps, u = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || F)
        if ((t.mode & dt) === gt) {
          var h = {
            baseLanes: ye,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = h, Xy(t, a);
        } else if (Ta(a, Ba)) {
          var $ = {
            baseLanes: ye,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = $;
          var V = f !== null ? f.baseLanes : a;
          Xy(t, V);
        } else {
          var S = null, E;
          if (f !== null) {
            var x = f.baseLanes;
            E = Mt(x, a);
          } else
            E = a;
          t.lanes = t.childLanes = Ba;
          var k = {
            baseLanes: E,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = k, t.updateQueue = null, Xy(t, E), null;
        }
      else {
        var re;
        f !== null ? (re = Mt(f.baseLanes, a), t.memoizedState = null) : re = a, Xy(t, re);
      }
      return Va(e, t, u, a), t.child;
    }
    function oD(e, t, a) {
      var i = t.pendingProps;
      return Va(e, t, i, a), t.child;
    }
    function lD(e, t, a) {
      var i = t.pendingProps.children;
      return Va(e, t, i, a), t.child;
    }
    function uD(e, t, a) {
      {
        t.flags |= st;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, f = u.children;
      return Va(e, t, f, a), t.child;
    }
    function pC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= za, t.flags |= Pi);
    }
    function dw(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var f = a.propTypes;
        f && _o(
          f,
          i,
          // Resolved props
          "prop",
          Zt(a)
        );
      }
      var h;
      {
        var S = yd(t, a, !0);
        h = gd(t, S);
      }
      var E, x;
      bd(t, u), Lu(t);
      {
        if (Nv.current = t, zr(!0), E = Dd(e, t, a, i, h, u), x = Ad(), t.mode & ar) {
          An(!0);
          try {
            E = Dd(e, t, a, i, h, u), x = Ad();
          } finally {
            An(!1);
          }
        }
        zr(!1);
      }
      return Pl(), e !== null && !To ? (Ab(e, t, u), ou(e, t, u)) : (ia() && x && YS(t), t.flags |= Ei, Va(e, t, E, u), t.child);
    }
    function vC(e, t, a, i, u) {
      {
        switch (xN(t)) {
          case !1: {
            var f = t.stateNode, h = t.type, S = new h(t.memoizedProps, f.context), E = S.state;
            f.updater.enqueueSetState(f, E, null);
            break;
          }
          case !0: {
            t.flags |= Ot, t.flags |= Pr;
            var x = new Error("Simulated error coming from DevTools"), k = Bu(u);
            t.lanes = Mt(t.lanes, k);
            var $ = ow(t, Hc(x, t), k);
            u0(t, $);
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
            Zt(a)
          );
        }
      }
      var re;
      pl(a) ? (re = !0, Km(t)) : re = !1, bd(t, u);
      var ae = t.stateNode, pe;
      ae === null ? (Hy(e, t), _b(t, a, i), w0(t, a, i, u), pe = !0) : e === null ? pe = Mk(t, a, i, u) : pe = jk(e, t, a, i, u);
      var et = pw(e, t, a, pe, re, u);
      {
        var St = t.stateNode;
        pe && St.props !== i && (Bc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Rt(t) || "a component"), Bc = !0);
      }
      return et;
    }
    function pw(e, t, a, i, u, f) {
      pC(e, t);
      var h = (t.flags & Ot) !== yt;
      if (!i && !h)
        return u && GE(t, a, !1), ou(e, t, f);
      var S = t.stateNode;
      Nv.current = t;
      var E;
      if (h && typeof a.getDerivedStateFromError != "function")
        E = null, aC();
      else {
        Lu(t);
        {
          if (zr(!0), E = S.render(), t.mode & ar) {
            An(!0);
            try {
              S.render();
            } finally {
              An(!1);
            }
          }
          zr(!1);
        }
        Pl();
      }
      return t.flags |= Ei, e !== null && h ? iD(e, t, E, f) : Va(e, t, E, f), t.memoizedState = S.state, u && GE(t, a, !0), t.child;
    }
    function hC(e) {
      var t = e.stateNode;
      t.pendingContext ? YE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && YE(e, t.context, !1), R0(e, t.containerInfo);
    }
    function sD(e, t, a) {
      if (hC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, f = u.element;
      pb(e, t), fy(t, i, null, a);
      var h = t.memoizedState;
      t.stateNode;
      var S = h.element;
      if (u.isDehydrated) {
        var E = {
          element: S,
          isDehydrated: !1,
          cache: h.cache,
          pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
          transitions: h.transitions
        }, x = t.updateQueue;
        if (x.baseState = E, t.memoizedState = E, t.flags & na) {
          var k = Hc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return mC(e, t, S, a, k);
        } else if (S !== f) {
          var $ = Hc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return mC(e, t, S, a, $);
        } else {
          pk(t);
          var V = Rb(t, null, S, a);
          t.child = V;
          for (var re = V; re; )
            re.flags = re.flags & ~On | zi, re = re.sibling;
        }
      } else {
        if (_d(), S === f)
          return ou(e, t, a);
        Va(e, t, S, a);
      }
      return t.child;
    }
    function mC(e, t, a, i, u) {
      return _d(), JS(u), t.flags |= na, Va(e, t, a, i), t.child;
    }
    function cD(e, t, a) {
      Ob(t), e === null && XS(t);
      var i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, h = u.children, S = NS(i, u);
      return S ? h = null : f !== null && NS(i, f) && (t.flags |= Ja), pC(e, t), Va(e, t, h, a), t.child;
    }
    function fD(e, t) {
      return e === null && XS(t), null;
    }
    function dD(e, t, a, i) {
      Hy(e, t);
      var u = t.pendingProps, f = a, h = f._payload, S = f._init, E = S(h);
      t.type = E;
      var x = t.tag = fN(E), k = Co(E, u), $;
      switch (x) {
        case O:
          return vw(t, E), t.type = E = Fd(E), $ = dw(null, t, E, k, i), $;
        case D:
          return t.type = E = $w(E), $ = vC(null, t, E, k, i), $;
        case he:
          return t.type = E = Ww(E), $ = sC(null, t, E, k, i), $;
        case He: {
          if (t.type !== t.elementType) {
            var V = E.propTypes;
            V && _o(
              V,
              k,
              // Resolved for outer only
              "prop",
              Zt(E)
            );
          }
          return $ = cC(
            null,
            t,
            E,
            Co(E.type, k),
            // The inner type can have defaults too
            i
          ), $;
        }
      }
      var re = "";
      throw E !== null && typeof E == "object" && E.$$typeof === Ve && (re = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + re));
    }
    function pD(e, t, a, i, u) {
      Hy(e, t), t.tag = D;
      var f;
      return pl(a) ? (f = !0, Km(t)) : f = !1, bd(t, u), _b(t, a, i), w0(t, a, i, u), pw(null, t, a, !0, f, u);
    }
    function vD(e, t, a, i) {
      Hy(e, t);
      var u = t.pendingProps, f;
      {
        var h = yd(t, a, !1);
        f = gd(t, h);
      }
      bd(t, i);
      var S, E;
      Lu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = Zt(a) || "Unknown";
          lw[x] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), lw[x] = !0);
        }
        t.mode & ar && bo.recordLegacyContextWarning(t, null), zr(!0), Nv.current = t, S = Dd(null, t, a, u, f, i), E = Ad(), zr(!1);
      }
      if (Pl(), t.flags |= Ei, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var k = Zt(a) || "Unknown";
        Lv[k] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", k, k, k), Lv[k] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var $ = Zt(a) || "Unknown";
          Lv[$] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", $, $, $), Lv[$] = !0);
        }
        t.tag = D, t.memoizedState = null, t.updateQueue = null;
        var V = !1;
        return pl(a) ? (V = !0, Km(t)) : V = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, l0(t), wb(t, S), w0(t, a, u, i), pw(null, t, a, !0, V, i);
      } else {
        if (t.tag = O, t.mode & ar) {
          An(!0);
          try {
            S = Dd(null, t, a, u, f, i), E = Ad();
          } finally {
            An(!1);
          }
        }
        return ia() && E && YS(t), Va(null, t, S, i), vw(t, a), t.child;
      }
    }
    function vw(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Qa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", f = e._debugSource;
          f && (u = f.fileName + ":" + f.lineNumber), cw[u] || (cw[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var h = Zt(t) || "Unknown";
          sw[h] || (g("%s: Function components do not support getDerivedStateFromProps.", h), sw[h] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var S = Zt(t) || "Unknown";
          uw[S] || (g("%s: Function components do not support contextType.", S), uw[S] = !0);
        }
      }
    }
    var hw = {
      dehydrated: null,
      treeContext: null,
      retryLane: pr
    };
    function mw(e) {
      return {
        baseLanes: e,
        cachePool: aD(),
        transitions: null
      };
    }
    function hD(e, t) {
      var a = null;
      return {
        baseLanes: Mt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mD(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return k0(e, Cv);
    }
    function yD(e, t) {
      return mc(e.childLanes, t);
    }
    function yC(e, t, a) {
      var i = t.pendingProps;
      RN(t) && (t.flags |= Ot);
      var u = xo.current, f = !1, h = (t.flags & Ot) !== yt;
      if (h || mD(u, e) ? (f = !0, t.flags &= ~Ot) : (e === null || e.memoizedState !== null) && (u = Fk(u, Db)), u = Rd(u), ds(t, u), e === null) {
        XS(t);
        var S = t.memoizedState;
        if (S !== null) {
          var E = S.dehydrated;
          if (E !== null)
            return ED(t, E);
        }
        var x = i.children, k = i.fallback;
        if (f) {
          var $ = gD(t, x, k, a), V = t.child;
          return V.memoizedState = mw(a), t.memoizedState = hw, $;
        } else
          return yw(t, x);
      } else {
        var re = e.memoizedState;
        if (re !== null) {
          var ae = re.dehydrated;
          if (ae !== null)
            return bD(e, t, h, i, ae, re, a);
        }
        if (f) {
          var pe = i.fallback, et = i.children, St = wD(e, t, et, pe, a), pt = t.child, Xt = e.child.memoizedState;
          return pt.memoizedState = Xt === null ? mw(a) : hD(Xt, a), pt.childLanes = yD(e, a), t.memoizedState = hw, St;
        } else {
          var Wt = i.children, X = SD(e, t, Wt, a);
          return t.memoizedState = null, X;
        }
      }
    }
    function yw(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, f = gw(u, i);
      return f.return = e, e.child = f, f;
    }
    function gD(e, t, a, i) {
      var u = e.mode, f = e.child, h = {
        mode: "hidden",
        children: t
      }, S, E;
      return (u & dt) === gt && f !== null ? (S = f, S.childLanes = ye, S.pendingProps = h, e.mode & tn && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), E = ws(a, u, i, null)) : (S = gw(h, u), E = ws(a, u, i, null)), S.return = e, E.return = e, S.sibling = E, e.child = S, E;
    }
    function gw(e, t, a) {
      return gx(e, t, ye, null);
    }
    function gC(e, t) {
      return Yc(e, t);
    }
    function SD(e, t, a, i) {
      var u = e.child, f = u.sibling, h = gC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & dt) === gt && (h.lanes = i), h.return = t, h.sibling = null, f !== null) {
        var S = t.deletions;
        S === null ? (t.deletions = [f], t.flags |= rn) : S.push(f);
      }
      return t.child = h, h;
    }
    function wD(e, t, a, i, u) {
      var f = t.mode, h = e.child, S = h.sibling, E = {
        mode: "hidden",
        children: a
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (f & dt) === gt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== h
      ) {
        var k = t.child;
        x = k, x.childLanes = ye, x.pendingProps = E, t.mode & tn && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = h.selfBaseDuration, x.treeBaseDuration = h.treeBaseDuration), t.deletions = null;
      } else
        x = gC(h, E), x.subtreeFlags = h.subtreeFlags & Fr;
      var $;
      return S !== null ? $ = Yc(S, i) : ($ = ws(i, f, u, null), $.flags |= On), $.return = t, x.return = t, x.sibling = $, t.child = x, $;
    }
    function Fy(e, t, a, i) {
      i !== null && JS(i), Cd(t, e.child, null, a);
      var u = t.pendingProps, f = u.children, h = yw(t, f);
      return h.flags |= On, t.memoizedState = null, h;
    }
    function _D(e, t, a, i, u) {
      var f = t.mode, h = {
        mode: "visible",
        children: a
      }, S = gw(h, f), E = ws(i, f, u, null);
      return E.flags |= On, S.return = t, E.return = t, S.sibling = E, t.child = S, (t.mode & dt) !== gt && Cd(t, e.child, null, u), E;
    }
    function ED(e, t, a) {
      return (e.mode & dt) === gt ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = wt) : US(t) ? e.lanes = ir : e.lanes = Ba, null;
    }
    function bD(e, t, a, i, u, f, h) {
      if (a)
        if (t.flags & na) {
          t.flags &= ~na;
          var X = aw(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Fy(e, t, h, X);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ot, null;
          var ve = i.children, J = i.fallback, Ae = _D(e, t, ve, J, h), tt = t.child;
          return tt.memoizedState = mw(h), t.memoizedState = hw, Ae;
        }
      else {
        if (fk(), (t.mode & dt) === gt)
          return Fy(
            e,
            t,
            h,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (US(u)) {
          var S, E, x;
          {
            var k = OO(u);
            S = k.digest, E = k.message, x = k.stack;
          }
          var $;
          E ? $ = new Error(E) : $ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var V = aw($, S, x);
          return Fy(e, t, h, V);
        }
        var re = Ta(h, e.childLanes);
        if (To || re) {
          var ae = Ky();
          if (ae !== null) {
            var pe = fm(ae, h);
            if (pe !== pr && pe !== f.retryLane) {
              f.retryLane = pe;
              var et = Nn;
              ci(e, pe), Gr(ae, e, pe, et);
            }
          }
          Fw();
          var St = aw(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Fy(e, t, h, St);
        } else if (HE(u)) {
          t.flags |= Ot, t.child = e.child;
          var pt = GA.bind(null, e);
          return kO(u, pt), null;
        } else {
          vk(t, u, f.treeContext);
          var Xt = i.children, Wt = yw(t, Xt);
          return Wt.flags |= zi, Wt;
        }
      }
    }
    function SC(e, t, a) {
      e.lanes = Mt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Mt(i.lanes, t)), r0(e.return, t, a);
    }
    function CD(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === we) {
          var u = i.memoizedState;
          u !== null && SC(i, a, e);
        } else if (i.tag === _e)
          SC(i, a, e);
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
    function xD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && gy(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function RD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !fw[e])
        if (fw[e] = !0, typeof e == "string")
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
    function TD(e, t) {
      e !== void 0 && !Py[e] && (e !== "collapsed" && e !== "hidden" ? (Py[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Py[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function wC(e, t) {
      {
        var a = en(e), i = !a && typeof Ai(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function OD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (en(e)) {
          for (var a = 0; a < e.length; a++)
            if (!wC(e[a], a))
              return;
        } else {
          var i = Ai(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var f = u.next(), h = 0; !f.done; f = u.next()) {
                if (!wC(f.value, h))
                  return;
                h++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Sw(e, t, a, i, u) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = u);
    }
    function _C(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, f = i.tail, h = i.children;
      RD(u), TD(f, u), OD(h, u), Va(e, t, h, a);
      var S = xo.current, E = k0(S, Cv);
      if (E)
        S = D0(S, Cv), t.flags |= Ot;
      else {
        var x = e !== null && (e.flags & Ot) !== yt;
        x && CD(t, t.child, a), S = Rd(S);
      }
      if (ds(t, S), (t.mode & dt) === gt)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var k = xD(t.child), $;
            k === null ? ($ = t.child, t.child = null) : ($ = k.sibling, k.sibling = null), Sw(
              t,
              !1,
              // isBackwards
              $,
              k,
              f
            );
            break;
          }
          case "backwards": {
            var V = null, re = t.child;
            for (t.child = null; re !== null; ) {
              var ae = re.alternate;
              if (ae !== null && gy(ae) === null) {
                t.child = re;
                break;
              }
              var pe = re.sibling;
              re.sibling = V, V = re, re = pe;
            }
            Sw(
              t,
              !0,
              // isBackwards
              V,
              null,
              // last
              f
            );
            break;
          }
          case "together": {
            Sw(
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
    function kD(e, t, a) {
      R0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Cd(t, null, i, a) : Va(e, t, i, a), t.child;
    }
    var EC = !1;
    function DD(e, t, a) {
      var i = t.type, u = i._context, f = t.pendingProps, h = t.memoizedProps, S = f.value;
      {
        "value" in f || EC || (EC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && _o(E, f, "prop", "Context.Provider");
      }
      if (sb(t, u, S), h !== null) {
        var x = h.value;
        if (at(x, S)) {
          if (h.children === f.children && !Gm())
            return ou(e, t, a);
        } else
          Ck(t, u, a);
      }
      var k = f.children;
      return Va(e, t, k, a), t.child;
    }
    var bC = !1;
    function AD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (bC || (bC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, f = u.children;
      typeof f != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), bd(t, a);
      var h = Ur(i);
      Lu(t);
      var S;
      return Nv.current = t, zr(!0), S = f(h), zr(!1), Pl(), t.flags |= Ei, Va(e, t, S, a), t.child;
    }
    function Mv() {
      To = !0;
    }
    function Hy(e, t) {
      (t.mode & dt) === gt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= On);
    }
    function ou(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), aC(), Yv(t.lanes), Ta(a, t.childLanes) ? (Uk(e, t), t.child) : null;
    }
    function ND(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var f = i.deletions;
        return f === null ? (i.deletions = [e], i.flags |= rn) : f.push(e), a.flags |= On, a;
      }
    }
    function ww(e, t) {
      var a = e.lanes;
      return !!Ta(a, t);
    }
    function LD(e, t, a) {
      switch (t.tag) {
        case U:
          hC(t), t.stateNode, _d();
          break;
        case P:
          Ob(t);
          break;
        case D: {
          var i = t.type;
          pl(i) && Km(t);
          break;
        }
        case H:
          R0(t, t.stateNode.containerInfo);
          break;
        case Q: {
          var u = t.memoizedProps.value, f = t.type._context;
          sb(t, f, u);
          break;
        }
        case G:
          {
            var h = Ta(a, t.childLanes);
            h && (t.flags |= st);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case we: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return ds(t, Rd(xo.current)), t.flags |= Ot, null;
            var x = t.child, k = x.childLanes;
            if (Ta(a, k))
              return yC(e, t, a);
            ds(t, Rd(xo.current));
            var $ = ou(e, t, a);
            return $ !== null ? $.sibling : null;
          } else
            ds(t, Rd(xo.current));
          break;
        }
        case _e: {
          var V = (e.flags & Ot) !== yt, re = Ta(a, t.childLanes);
          if (V) {
            if (re)
              return _C(e, t, a);
            t.flags |= Ot;
          }
          var ae = t.memoizedState;
          if (ae !== null && (ae.rendering = null, ae.tail = null, ae.lastEffect = null), ds(t, xo.current), re)
            break;
          return null;
        }
        case te:
        case le:
          return t.lanes = ye, dC(e, t, a);
      }
      return ou(e, t, a);
    }
    function CC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ND(e, t, Kw(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Gm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          To = !0;
        else {
          var f = ww(e, a);
          if (!f && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ot) === yt)
            return To = !1, LD(e, t, a);
          (e.flags & gf) !== yt ? To = !0 : To = !1;
        }
      } else if (To = !1, ia() && ik(t)) {
        var h = t.index, S = ok();
        XE(t, S, h);
      }
      switch (t.lanes = ye, t.tag) {
        case L:
          return vD(e, t, t.type, a);
        case be: {
          var E = t.elementType;
          return dD(e, t, E, a);
        }
        case O: {
          var x = t.type, k = t.pendingProps, $ = t.elementType === x ? k : Co(x, k);
          return dw(e, t, x, $, a);
        }
        case D: {
          var V = t.type, re = t.pendingProps, ae = t.elementType === V ? re : Co(V, re);
          return vC(e, t, V, ae, a);
        }
        case U:
          return sD(e, t, a);
        case P:
          return cD(e, t, a);
        case W:
          return fD(e, t);
        case we:
          return yC(e, t, a);
        case H:
          return kD(e, t, a);
        case he: {
          var pe = t.type, et = t.pendingProps, St = t.elementType === pe ? et : Co(pe, et);
          return sC(e, t, pe, St, a);
        }
        case Y:
          return oD(e, t, a);
        case Se:
          return lD(e, t, a);
        case G:
          return uD(e, t, a);
        case Q:
          return DD(e, t, a);
        case ue:
          return AD(e, t, a);
        case He: {
          var pt = t.type, Xt = t.pendingProps, Wt = Co(pt, Xt);
          if (t.type !== t.elementType) {
            var X = pt.propTypes;
            X && _o(
              X,
              Wt,
              // Resolved for outer only
              "prop",
              Zt(pt)
            );
          }
          return Wt = Co(pt.type, Wt), cC(e, t, pt, Wt, a);
        }
        case q:
          return fC(e, t, t.type, t.pendingProps, a);
        case Oe: {
          var ve = t.type, J = t.pendingProps, Ae = t.elementType === ve ? J : Co(ve, J);
          return pD(e, t, ve, Ae, a);
        }
        case _e:
          return _C(e, t, a);
        case Ne:
          break;
        case te:
          return dC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Nd(e) {
      e.flags |= st;
    }
    function xC(e) {
      e.flags |= za, e.flags |= Pi;
    }
    var RC, _w, TC, OC;
    RC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === P || u.tag === W)
          nO(e, u.stateNode);
        else if (u.tag !== H) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, _w = function(e, t) {
    }, TC = function(e, t, a, i, u) {
      var f = e.memoizedProps;
      if (f !== i) {
        var h = t.stateNode, S = T0(), E = aO(h, a, f, i, u, S);
        t.updateQueue = E, E && Nd(t);
      }
    }, OC = function(e, t, a, i) {
      a !== i && Nd(t);
    };
    function jv(e, t) {
      if (!ia())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, f = null; u !== null; )
              u.alternate !== null && (f = u), u = u.sibling;
            f === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : f.sibling = null;
            break;
          }
        }
    }
    function la(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ye, i = yt;
      if (t) {
        if ((e.mode & tn) !== gt) {
          for (var E = e.selfBaseDuration, x = e.child; x !== null; )
            a = Mt(a, Mt(x.lanes, x.childLanes)), i |= x.subtreeFlags & Fr, i |= x.flags & Fr, E += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = E;
        } else
          for (var k = e.child; k !== null; )
            a = Mt(a, Mt(k.lanes, k.childLanes)), i |= k.subtreeFlags & Fr, i |= k.flags & Fr, k.return = e, k = k.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & tn) !== gt) {
          for (var u = e.actualDuration, f = e.selfBaseDuration, h = e.child; h !== null; )
            a = Mt(a, Mt(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, u += h.actualDuration, f += h.treeBaseDuration, h = h.sibling;
          e.actualDuration = u, e.treeBaseDuration = f;
        } else
          for (var S = e.child; S !== null; )
            a = Mt(a, Mt(S.lanes, S.childLanes)), i |= S.subtreeFlags, i |= S.flags, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function MD(e, t, a) {
      if (Sk() && (t.mode & dt) !== gt && (t.flags & Ot) === yt)
        return ab(t), _d(), t.flags |= na | Xo | Pr, !1;
      var i = ty(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yk(t), la(t), (t.mode & tn) !== gt) {
            var u = a !== null;
            if (u) {
              var f = t.child;
              f !== null && (t.treeBaseDuration -= f.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (_d(), (t.flags & Ot) === yt && (t.memoizedState = null), t.flags |= st, la(t), (t.mode & tn) !== gt) {
            var h = a !== null;
            if (h) {
              var S = t.child;
              S !== null && (t.treeBaseDuration -= S.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return ib(), !0;
    }
    function kC(e, t, a) {
      var i = t.pendingProps;
      switch (qS(t), t.tag) {
        case L:
        case be:
        case q:
        case O:
        case he:
        case Y:
        case Se:
        case G:
        case ue:
        case He:
          return la(t), null;
        case D: {
          var u = t.type;
          return pl(u) && Qm(t), la(t), null;
        }
        case U: {
          var f = t.stateNode;
          if (xd(t), IS(t), N0(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), e === null || e.child === null) {
            var h = ty(t);
            if (h)
              Nd(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & na) !== yt) && (t.flags |= Sr, ib());
            }
          }
          return _w(e, t), la(t), null;
        }
        case P: {
          O0(t);
          var E = Tb(), x = t.type;
          if (e !== null && t.stateNode != null)
            TC(e, t, x, i, E), e.ref !== t.ref && xC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return la(t), null;
            }
            var k = T0(), $ = ty(t);
            if ($)
              hk(t, E, k) && Nd(t);
            else {
              var V = tO(x, i, E, k, t);
              RC(V, t, !1, !1), t.stateNode = V, rO(V, x, i, E) && Nd(t);
            }
            t.ref !== null && xC(t);
          }
          return la(t), null;
        }
        case W: {
          var re = i;
          if (e && t.stateNode != null) {
            var ae = e.memoizedProps;
            OC(e, t, ae, re);
          } else {
            if (typeof re != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var pe = Tb(), et = T0(), St = ty(t);
            St ? mk(t) && Nd(t) : t.stateNode = iO(re, pe, et, t);
          }
          return la(t), null;
        }
        case we: {
          Td(t);
          var pt = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Xt = MD(e, t, pt);
            if (!Xt)
              return t.flags & Pr ? t : null;
          }
          if ((t.flags & Ot) !== yt)
            return t.lanes = a, (t.mode & tn) !== gt && rw(t), t;
          var Wt = pt !== null, X = e !== null && e.memoizedState !== null;
          if (Wt !== X && Wt) {
            var ve = t.child;
            if (ve.flags |= Ko, (t.mode & dt) !== gt) {
              var J = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ee);
              J || k0(xo.current, Db) ? jA() : Fw();
            }
          }
          var Ae = t.updateQueue;
          if (Ae !== null && (t.flags |= st), la(t), (t.mode & tn) !== gt && Wt) {
            var tt = t.child;
            tt !== null && (t.treeBaseDuration -= tt.treeBaseDuration);
          }
          return null;
        }
        case H:
          return xd(t), _w(e, t), e === null && JO(t.stateNode.containerInfo), la(t), null;
        case Q:
          var Qe = t.type._context;
          return n0(Qe, t), la(t), null;
        case Oe: {
          var Ct = t.type;
          return pl(Ct) && Qm(t), la(t), null;
        }
        case _e: {
          Td(t);
          var Nt = t.memoizedState;
          if (Nt === null)
            return la(t), null;
          var En = (t.flags & Ot) !== yt, on = Nt.rendering;
          if (on === null)
            if (En)
              jv(Nt, !1);
            else {
              var kr = zA() && (e === null || (e.flags & Ot) === yt);
              if (!kr)
                for (var ln = t.child; ln !== null; ) {
                  var _r = gy(ln);
                  if (_r !== null) {
                    En = !0, t.flags |= Ot, jv(Nt, !1);
                    var Na = _r.updateQueue;
                    return Na !== null && (t.updateQueue = Na, t.flags |= st), t.subtreeFlags = yt, zk(t, a), ds(t, D0(xo.current, Cv)), t.child;
                  }
                  ln = ln.sibling;
                }
              Nt.tail !== null && wr() > KC() && (t.flags |= Ot, En = !0, jv(Nt, !1), t.lanes = Lp);
            }
          else {
            if (!En) {
              var da = gy(on);
              if (da !== null) {
                t.flags |= Ot, En = !0;
                var Ri = da.updateQueue;
                if (Ri !== null && (t.updateQueue = Ri, t.flags |= st), jv(Nt, !0), Nt.tail === null && Nt.tailMode === "hidden" && !on.alternate && !ia())
                  return la(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              wr() * 2 - Nt.renderingStartTime > KC() && a !== Ba && (t.flags |= Ot, En = !0, jv(Nt, !1), t.lanes = Lp);
            }
            if (Nt.isBackwards)
              on.sibling = t.child, t.child = on;
            else {
              var Wa = Nt.last;
              Wa !== null ? Wa.sibling = on : t.child = on, Nt.last = on;
            }
          }
          if (Nt.tail !== null) {
            var Ya = Nt.tail;
            Nt.rendering = Ya, Nt.tail = Ya.sibling, Nt.renderingStartTime = wr(), Ya.sibling = null;
            var La = xo.current;
            return En ? La = D0(La, Cv) : La = Rd(La), ds(t, La), Ya;
          }
          return la(t), null;
        }
        case Ne:
          break;
        case te:
        case le: {
          Pw(t);
          var fu = t.memoizedState, Hd = fu !== null;
          if (e !== null) {
            var Xv = e.memoizedState, _l = Xv !== null;
            _l !== Hd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !F && (t.flags |= Ko);
          }
          return !Hd || (t.mode & dt) === gt ? la(t) : Ta(wl, Ba) && (la(t), t.subtreeFlags & (On | st) && (t.flags |= Ko)), null;
        }
        case me:
          return null;
        case de:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jD(e, t, a) {
      switch (qS(t), t.tag) {
        case D: {
          var i = t.type;
          pl(i) && Qm(t);
          var u = t.flags;
          return u & Pr ? (t.flags = u & ~Pr | Ot, (t.mode & tn) !== gt && rw(t), t) : null;
        }
        case U: {
          t.stateNode, xd(t), IS(t), N0();
          var f = t.flags;
          return (f & Pr) !== yt && (f & Ot) === yt ? (t.flags = f & ~Pr | Ot, t) : null;
        }
        case P:
          return O0(t), null;
        case we: {
          Td(t);
          var h = t.memoizedState;
          if (h !== null && h.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            _d();
          }
          var S = t.flags;
          return S & Pr ? (t.flags = S & ~Pr | Ot, (t.mode & tn) !== gt && rw(t), t) : null;
        }
        case _e:
          return Td(t), null;
        case H:
          return xd(t), null;
        case Q:
          var E = t.type._context;
          return n0(E, t), null;
        case te:
        case le:
          return Pw(t), null;
        case me:
          return null;
        default:
          return null;
      }
    }
    function DC(e, t, a) {
      switch (qS(t), t.tag) {
        case D: {
          var i = t.type.childContextTypes;
          i != null && Qm(t);
          break;
        }
        case U: {
          t.stateNode, xd(t), IS(t), N0();
          break;
        }
        case P: {
          O0(t);
          break;
        }
        case H:
          xd(t);
          break;
        case we:
          Td(t);
          break;
        case _e:
          Td(t);
          break;
        case Q:
          var u = t.type._context;
          n0(u, t);
          break;
        case te:
        case le:
          Pw(t);
          break;
      }
    }
    var AC = null;
    AC = /* @__PURE__ */ new Set();
    var By = !1, ua = !1, UD = typeof WeakSet == "function" ? WeakSet : Set, it = null, Ld = null, Md = null;
    function zD(e) {
      _i(null, function() {
        throw e;
      }), po();
    }
    var PD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & tn)
        try {
          gl(), t.componentWillUnmount();
        } finally {
          yl(e);
        }
      else
        t.componentWillUnmount();
    };
    function NC(e, t) {
      try {
        hs(Vr, e);
      } catch (a) {
        Hn(e, t, a);
      }
    }
    function Ew(e, t, a) {
      try {
        PD(e, a);
      } catch (i) {
        Hn(e, t, i);
      }
    }
    function FD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Hn(e, t, i);
      }
    }
    function LC(e, t) {
      try {
        jC(e);
      } catch (a) {
        Hn(e, t, a);
      }
    }
    function jd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Le && Fe && e.mode & tn)
              try {
                gl(), i = a(null);
              } finally {
                yl(e);
              }
            else
              i = a(null);
          } catch (u) {
            Hn(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Rt(e));
        } else
          a.current = null;
    }
    function Vy(e, t, a) {
      try {
        a();
      } catch (i) {
        Hn(e, t, i);
      }
    }
    var MC = !1;
    function HD(e, t) {
      Z1(e.containerInfo), it = t, BD();
      var a = MC;
      return MC = !1, a;
    }
    function BD() {
      for (; it !== null; ) {
        var e = it, t = e.child;
        (e.subtreeFlags & wa) !== yt && t !== null ? (t.return = e, it = t) : VD();
      }
    }
    function VD() {
      for (; it !== null; ) {
        var e = it;
        Qn(e);
        try {
          ID(e);
        } catch (a) {
          Hn(e, e.return, a);
        }
        Un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, it = t;
          return;
        }
        it = e.return;
      }
    }
    function ID(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Sr) !== yt) {
        switch (Qn(e), e.tag) {
          case O:
          case he:
          case q:
            break;
          case D: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, f = e.stateNode;
              e.type === e.elementType && !Bc && (f.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(e) || "instance"), f.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(e) || "instance"));
              var h = f.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Co(e.type, i), u);
              {
                var S = AC;
                h === void 0 && !S.has(e.type) && (S.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Rt(e)));
              }
              f.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          }
          case U: {
            {
              var E = e.stateNode;
              CO(E.containerInfo);
            }
            break;
          }
          case P:
          case W:
          case H:
          case Oe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Un();
      }
    }
    function Oo(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var f = u.next, h = f;
        do {
          if ((h.tag & e) === e) {
            var S = h.destroy;
            h.destroy = void 0, S !== void 0 && ((e & oa) !== fi ? Xh(t) : (e & Vr) !== fi && Mu(t), (e & vl) !== fi && Gv(!0), Vy(t, a, S), (e & vl) !== fi && Gv(!1), (e & oa) !== fi ? Jh() : (e & Vr) !== fi && ic());
          }
          h = h.next;
        } while (h !== f);
      }
    }
    function hs(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, f = u;
        do {
          if ((f.tag & e) === e) {
            (e & oa) !== fi ? kp(t) : (e & Vr) !== fi && Zh(t);
            var h = f.create;
            (e & vl) !== fi && Gv(!0), f.destroy = h(), (e & vl) !== fi && Gv(!1), (e & oa) !== fi ? Cf() : (e & Vr) !== fi && Dp();
            {
              var S = f.destroy;
              if (S !== void 0 && typeof S != "function") {
                var E = void 0;
                (f.tag & Vr) !== yt ? E = "useLayoutEffect" : (f.tag & vl) !== yt ? E = "useInsertionEffect" : E = "useEffect";
                var x = void 0;
                S === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof S.then == "function" ? x = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + S, g("%s must not return anything besides a function, which is used for clean-up.%s", E, x);
              }
            }
          }
          f = f.next;
        } while (f !== u);
      }
    }
    function $D(e, t) {
      if ((t.flags & st) !== yt)
        switch (t.tag) {
          case G: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, f = i.onPostCommit, h = nC(), S = t.alternate === null ? "mount" : "update";
            tC() && (S = "nested-update"), typeof f == "function" && f(u, S, a, h);
            var E = t.return;
            e: for (; E !== null; ) {
              switch (E.tag) {
                case U:
                  var x = E.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
                case G:
                  var k = E.stateNode;
                  k.passiveEffectDuration += a;
                  break e;
              }
              E = E.return;
            }
            break;
          }
        }
    }
    function WD(e, t, a, i) {
      if ((a.flags & bi) !== yt)
        switch (a.tag) {
          case O:
          case he:
          case q: {
            if (!ua)
              if (a.mode & tn)
                try {
                  gl(), hs(Vr | Br, a);
                } finally {
                  yl(a);
                }
              else
                hs(Vr | Br, a);
            break;
          }
          case D: {
            var u = a.stateNode;
            if (a.flags & st && !ua)
              if (t === null)
                if (a.type === a.elementType && !Bc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(a) || "instance")), a.mode & tn)
                  try {
                    gl(), u.componentDidMount();
                  } finally {
                    yl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var f = a.elementType === a.type ? t.memoizedProps : Co(a.type, t.memoizedProps), h = t.memoizedState;
                if (a.type === a.elementType && !Bc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(a) || "instance")), a.mode & tn)
                  try {
                    gl(), u.componentDidUpdate(f, h, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    yl(a);
                  }
                else
                  u.componentDidUpdate(f, h, u.__reactInternalSnapshotBeforeUpdate);
              }
            var S = a.updateQueue;
            S !== null && (a.type === a.elementType && !Bc && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Rt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Rt(a) || "instance")), hb(a, S, u));
            break;
          }
          case U: {
            var E = a.updateQueue;
            if (E !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case P:
                    x = a.child.stateNode;
                    break;
                  case D:
                    x = a.child.stateNode;
                    break;
                }
              hb(a, E, x);
            }
            break;
          }
          case P: {
            var k = a.stateNode;
            if (t === null && a.flags & st) {
              var $ = a.type, V = a.memoizedProps;
              cO(k, $, V);
            }
            break;
          }
          case W:
            break;
          case H:
            break;
          case G: {
            {
              var re = a.memoizedProps, ae = re.onCommit, pe = re.onRender, et = a.stateNode.effectDuration, St = nC(), pt = t === null ? "mount" : "update";
              tC() && (pt = "nested-update"), typeof pe == "function" && pe(a.memoizedProps.id, pt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, St);
              {
                typeof ae == "function" && ae(a.memoizedProps.id, pt, et, St), VA(a);
                var Xt = a.return;
                e: for (; Xt !== null; ) {
                  switch (Xt.tag) {
                    case U:
                      var Wt = Xt.stateNode;
                      Wt.effectDuration += et;
                      break e;
                    case G:
                      var X = Xt.stateNode;
                      X.effectDuration += et;
                      break e;
                  }
                  Xt = Xt.return;
                }
              }
            }
            break;
          }
          case we: {
            ZD(e, a);
            break;
          }
          case _e:
          case Oe:
          case Ne:
          case te:
          case le:
          case de:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      ua || a.flags & za && jC(a);
    }
    function YD(e) {
      switch (e.tag) {
        case O:
        case he:
        case q: {
          if (e.mode & tn)
            try {
              gl(), NC(e, e.return);
            } finally {
              yl(e);
            }
          else
            NC(e, e.return);
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && FD(e, e.return, t), LC(e, e.return);
          break;
        }
        case P: {
          LC(e, e.return);
          break;
        }
      }
    }
    function qD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === P) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? wO(u) : EO(i.stateNode, i.memoizedProps);
            } catch (h) {
              Hn(e, e.return, h);
            }
          }
        } else if (i.tag === W) {
          if (a === null)
            try {
              var f = i.stateNode;
              t ? _O(f) : bO(f, i.memoizedProps);
            } catch (h) {
              Hn(e, e.return, h);
            }
        } else if (!((i.tag === te || i.tag === le) && i.memoizedState !== null && i !== e)) {
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
    function jC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case P:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & tn)
            try {
              gl(), u = t(i);
            } finally {
              yl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Rt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Rt(e)), t.current = i;
      }
    }
    function GD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === P) {
          var a = e.stateNode;
          a !== null && tk(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function QD(e) {
      for (var t = e.return; t !== null; ) {
        if (zC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function zC(e) {
      return e.tag === P || e.tag === U || e.tag === H;
    }
    function PC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || zC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== P && t.tag !== W && t.tag !== De; ) {
          if (t.flags & On || t.child === null || t.tag === H)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & On))
          return t.stateNode;
      }
    }
    function KD(e) {
      var t = QD(e);
      switch (t.tag) {
        case P: {
          var a = t.stateNode;
          t.flags & Ja && (FE(a), t.flags &= ~Ja);
          var i = PC(e);
          Cw(e, i, a);
          break;
        }
        case U:
        case H: {
          var u = t.stateNode.containerInfo, f = PC(e);
          bw(e, f, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bw(e, t, a) {
      var i = e.tag, u = i === P || i === W;
      if (u) {
        var f = e.stateNode;
        t ? mO(a, f, t) : vO(a, f);
      } else if (i !== H) {
        var h = e.child;
        if (h !== null) {
          bw(h, t, a);
          for (var S = h.sibling; S !== null; )
            bw(S, t, a), S = S.sibling;
        }
      }
    }
    function Cw(e, t, a) {
      var i = e.tag, u = i === P || i === W;
      if (u) {
        var f = e.stateNode;
        t ? hO(a, f, t) : pO(a, f);
      } else if (i !== H) {
        var h = e.child;
        if (h !== null) {
          Cw(h, t, a);
          for (var S = h.sibling; S !== null; )
            Cw(S, t, a), S = S.sibling;
        }
      }
    }
    var sa = null, ko = !1;
    function XD(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case P: {
              sa = i.stateNode, ko = !1;
              break e;
            }
            case U: {
              sa = i.stateNode.containerInfo, ko = !0;
              break e;
            }
            case H: {
              sa = i.stateNode.containerInfo, ko = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (sa === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        FC(e, t, a), sa = null, ko = !1;
      }
      GD(a);
    }
    function ms(e, t, a) {
      for (var i = a.child; i !== null; )
        FC(e, t, i), i = i.sibling;
    }
    function FC(e, t, a) {
      switch (Qh(a), a.tag) {
        case P:
          ua || jd(a, t);
        case W: {
          {
            var i = sa, u = ko;
            sa = null, ms(e, t, a), sa = i, ko = u, sa !== null && (ko ? gO(sa, a.stateNode) : yO(sa, a.stateNode));
          }
          return;
        }
        case De: {
          sa !== null && (ko ? SO(sa, a.stateNode) : jS(sa, a.stateNode));
          return;
        }
        case H: {
          {
            var f = sa, h = ko;
            sa = a.stateNode.containerInfo, ko = !0, ms(e, t, a), sa = f, ko = h;
          }
          return;
        }
        case O:
        case he:
        case He:
        case q: {
          if (!ua) {
            var S = a.updateQueue;
            if (S !== null) {
              var E = S.lastEffect;
              if (E !== null) {
                var x = E.next, k = x;
                do {
                  var $ = k, V = $.destroy, re = $.tag;
                  V !== void 0 && ((re & vl) !== fi ? Vy(a, t, V) : (re & Vr) !== fi && (Mu(a), a.mode & tn ? (gl(), Vy(a, t, V), yl(a)) : Vy(a, t, V), ic())), k = k.next;
                } while (k !== x);
              }
            }
          }
          ms(e, t, a);
          return;
        }
        case D: {
          if (!ua) {
            jd(a, t);
            var ae = a.stateNode;
            typeof ae.componentWillUnmount == "function" && Ew(a, t, ae);
          }
          ms(e, t, a);
          return;
        }
        case Ne: {
          ms(e, t, a);
          return;
        }
        case te: {
          if (
            // TODO: Remove this dead flag
            a.mode & dt
          ) {
            var pe = ua;
            ua = pe || a.memoizedState !== null, ms(e, t, a), ua = pe;
          } else
            ms(e, t, a);
          break;
        }
        default: {
          ms(e, t, a);
          return;
        }
      }
    }
    function JD(e) {
      e.memoizedState;
    }
    function ZD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var f = u.dehydrated;
            f !== null && PO(f);
          }
        }
      }
    }
    function HC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new UD()), t.forEach(function(i) {
          var u = QA.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ha)
              if (Ld !== null && Md !== null)
                qv(Md, Ld);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function eA(e, t, a) {
      Ld = a, Md = e, Qn(t), BC(t, e), Qn(t), Ld = null, Md = null;
    }
    function Do(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var f = i[u];
          try {
            XD(e, t, f);
          } catch (E) {
            Hn(f, t, E);
          }
        }
      var h = zs();
      if (t.subtreeFlags & _a)
        for (var S = t.child; S !== null; )
          Qn(S), BC(S, e), S = S.sibling;
      Qn(h);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case O:
        case he:
        case He:
        case q: {
          if (Do(t, e), Sl(e), u & st) {
            try {
              Oo(vl | Br, e, e.return), hs(vl | Br, e);
            } catch (Ct) {
              Hn(e, e.return, Ct);
            }
            if (e.mode & tn) {
              try {
                gl(), Oo(Vr | Br, e, e.return);
              } catch (Ct) {
                Hn(e, e.return, Ct);
              }
              yl(e);
            } else
              try {
                Oo(Vr | Br, e, e.return);
              } catch (Ct) {
                Hn(e, e.return, Ct);
              }
          }
          return;
        }
        case D: {
          Do(t, e), Sl(e), u & za && i !== null && jd(i, i.return);
          return;
        }
        case P: {
          Do(t, e), Sl(e), u & za && i !== null && jd(i, i.return);
          {
            if (e.flags & Ja) {
              var f = e.stateNode;
              try {
                FE(f);
              } catch (Ct) {
                Hn(e, e.return, Ct);
              }
            }
            if (u & st) {
              var h = e.stateNode;
              if (h != null) {
                var S = e.memoizedProps, E = i !== null ? i.memoizedProps : S, x = e.type, k = e.updateQueue;
                if (e.updateQueue = null, k !== null)
                  try {
                    fO(h, k, x, E, S, e);
                  } catch (Ct) {
                    Hn(e, e.return, Ct);
                  }
              }
            }
          }
          return;
        }
        case W: {
          if (Do(t, e), Sl(e), u & st) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var $ = e.stateNode, V = e.memoizedProps, re = i !== null ? i.memoizedProps : V;
            try {
              dO($, re, V);
            } catch (Ct) {
              Hn(e, e.return, Ct);
            }
          }
          return;
        }
        case U: {
          if (Do(t, e), Sl(e), u & st && i !== null) {
            var ae = i.memoizedState;
            if (ae.isDehydrated)
              try {
                zO(t.containerInfo);
              } catch (Ct) {
                Hn(e, e.return, Ct);
              }
          }
          return;
        }
        case H: {
          Do(t, e), Sl(e);
          return;
        }
        case we: {
          Do(t, e), Sl(e);
          var pe = e.child;
          if (pe.flags & Ko) {
            var et = pe.stateNode, St = pe.memoizedState, pt = St !== null;
            if (et.isHidden = pt, pt) {
              var Xt = pe.alternate !== null && pe.alternate.memoizedState !== null;
              Xt || MA();
            }
          }
          if (u & st) {
            try {
              JD(e);
            } catch (Ct) {
              Hn(e, e.return, Ct);
            }
            HC(e);
          }
          return;
        }
        case te: {
          var Wt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & dt
          ) {
            var X = ua;
            ua = X || Wt, Do(t, e), ua = X;
          } else
            Do(t, e);
          if (Sl(e), u & Ko) {
            var ve = e.stateNode, J = e.memoizedState, Ae = J !== null, tt = e;
            if (ve.isHidden = Ae, Ae && !Wt && (tt.mode & dt) !== gt) {
              it = tt;
              for (var Qe = tt.child; Qe !== null; )
                it = Qe, nA(Qe), Qe = Qe.sibling;
            }
            qD(tt, Ae);
          }
          return;
        }
        case _e: {
          Do(t, e), Sl(e), u & st && HC(e);
          return;
        }
        case Ne:
          return;
        default: {
          Do(t, e), Sl(e);
          return;
        }
      }
    }
    function Sl(e) {
      var t = e.flags;
      if (t & On) {
        try {
          KD(e);
        } catch (a) {
          Hn(e, e.return, a);
        }
        e.flags &= ~On;
      }
      t & zi && (e.flags &= ~zi);
    }
    function tA(e, t, a) {
      Ld = a, Md = t, it = e, VC(e, t, a), Ld = null, Md = null;
    }
    function VC(e, t, a) {
      for (var i = (e.mode & dt) !== gt; it !== null; ) {
        var u = it, f = u.child;
        if (u.tag === te && i) {
          var h = u.memoizedState !== null, S = h || By;
          if (S) {
            xw(e, t, a);
            continue;
          } else {
            var E = u.alternate, x = E !== null && E.memoizedState !== null, k = x || ua, $ = By, V = ua;
            By = S, ua = k, ua && !V && (it = u, rA(u));
            for (var re = f; re !== null; )
              it = re, VC(
                re,
                // New root; bubble back up to here and stop.
                t,
                a
              ), re = re.sibling;
            it = u, By = $, ua = V, xw(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & bi) !== yt && f !== null ? (f.return = u, it = f) : xw(e, t, a);
      }
    }
    function xw(e, t, a) {
      for (; it !== null; ) {
        var i = it;
        if ((i.flags & bi) !== yt) {
          var u = i.alternate;
          Qn(i);
          try {
            WD(t, u, i, a);
          } catch (h) {
            Hn(i, i.return, h);
          }
          Un();
        }
        if (i === e) {
          it = null;
          return;
        }
        var f = i.sibling;
        if (f !== null) {
          f.return = i.return, it = f;
          return;
        }
        it = i.return;
      }
    }
    function nA(e) {
      for (; it !== null; ) {
        var t = it, a = t.child;
        switch (t.tag) {
          case O:
          case he:
          case He:
          case q: {
            if (t.mode & tn)
              try {
                gl(), Oo(Vr, t, t.return);
              } finally {
                yl(t);
              }
            else
              Oo(Vr, t, t.return);
            break;
          }
          case D: {
            jd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && Ew(t, t.return, i);
            break;
          }
          case P: {
            jd(t, t.return);
            break;
          }
          case te: {
            var u = t.memoizedState !== null;
            if (u) {
              IC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, it = a) : IC(e);
      }
    }
    function IC(e) {
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
    function rA(e) {
      for (; it !== null; ) {
        var t = it, a = t.child;
        if (t.tag === te) {
          var i = t.memoizedState !== null;
          if (i) {
            $C(e);
            continue;
          }
        }
        a !== null ? (a.return = t, it = a) : $C(e);
      }
    }
    function $C(e) {
      for (; it !== null; ) {
        var t = it;
        Qn(t);
        try {
          YD(t);
        } catch (i) {
          Hn(t, t.return, i);
        }
        if (Un(), t === e) {
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
    function aA(e, t, a, i) {
      it = t, iA(t, e, a, i);
    }
    function iA(e, t, a, i) {
      for (; it !== null; ) {
        var u = it, f = u.child;
        (u.subtreeFlags & Ea) !== yt && f !== null ? (f.return = u, it = f) : oA(e, t, a, i);
      }
    }
    function oA(e, t, a, i) {
      for (; it !== null; ) {
        var u = it;
        if ((u.flags & Sa) !== yt) {
          Qn(u);
          try {
            lA(t, u, a, i);
          } catch (h) {
            Hn(u, u.return, h);
          }
          Un();
        }
        if (u === e) {
          it = null;
          return;
        }
        var f = u.sibling;
        if (f !== null) {
          f.return = u.return, it = f;
          return;
        }
        it = u.return;
      }
    }
    function lA(e, t, a, i) {
      switch (t.tag) {
        case O:
        case he:
        case q: {
          if (t.mode & tn) {
            nw();
            try {
              hs(oa | Br, t);
            } finally {
              tw(t);
            }
          } else
            hs(oa | Br, t);
          break;
        }
      }
    }
    function uA(e) {
      it = e, sA();
    }
    function sA() {
      for (; it !== null; ) {
        var e = it, t = e.child;
        if ((it.flags & rn) !== yt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              it = u, dA(u, e);
            }
            {
              var f = e.alternate;
              if (f !== null) {
                var h = f.child;
                if (h !== null) {
                  f.child = null;
                  do {
                    var S = h.sibling;
                    h.sibling = null, h = S;
                  } while (h !== null);
                }
              }
            }
            it = e;
          }
        }
        (e.subtreeFlags & Ea) !== yt && t !== null ? (t.return = e, it = t) : cA();
      }
    }
    function cA() {
      for (; it !== null; ) {
        var e = it;
        (e.flags & Sa) !== yt && (Qn(e), fA(e), Un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, it = t;
          return;
        }
        it = e.return;
      }
    }
    function fA(e) {
      switch (e.tag) {
        case O:
        case he:
        case q: {
          e.mode & tn ? (nw(), Oo(oa | Br, e, e.return), tw(e)) : Oo(oa | Br, e, e.return);
          break;
        }
      }
    }
    function dA(e, t) {
      for (; it !== null; ) {
        var a = it;
        Qn(a), vA(a, t), Un();
        var i = a.child;
        i !== null ? (i.return = a, it = i) : pA(e);
      }
    }
    function pA(e) {
      for (; it !== null; ) {
        var t = it, a = t.sibling, i = t.return;
        if (UC(t), t === e) {
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
    function vA(e, t) {
      switch (e.tag) {
        case O:
        case he:
        case q: {
          e.mode & tn ? (nw(), Oo(oa, e, t), tw(e)) : Oo(oa, e, t);
          break;
        }
      }
    }
    function hA(e) {
      switch (e.tag) {
        case O:
        case he:
        case q: {
          try {
            hs(Vr | Br, e);
          } catch (a) {
            Hn(e, e.return, a);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Hn(e, e.return, a);
          }
          break;
        }
      }
    }
    function mA(e) {
      switch (e.tag) {
        case O:
        case he:
        case q: {
          try {
            hs(oa | Br, e);
          } catch (t) {
            Hn(e, e.return, t);
          }
          break;
        }
      }
    }
    function yA(e) {
      switch (e.tag) {
        case O:
        case he:
        case q: {
          try {
            Oo(Vr | Br, e, e.return);
          } catch (a) {
            Hn(e, e.return, a);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Ew(e, e.return, t);
          break;
        }
      }
    }
    function gA(e) {
      switch (e.tag) {
        case O:
        case he:
        case q:
          try {
            Oo(oa | Br, e, e.return);
          } catch (t) {
            Hn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Uv = Symbol.for;
      Uv("selector.component"), Uv("selector.has_pseudo_class"), Uv("selector.role"), Uv("selector.test_id"), Uv("selector.text");
    }
    var SA = [];
    function wA() {
      SA.forEach(function(e) {
        return e();
      });
    }
    var _A = v.ReactCurrentActQueue;
    function EA(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function WC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && _A.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var bA = Math.ceil, Rw = v.ReactCurrentDispatcher, Tw = v.ReactCurrentOwner, ca = v.ReactCurrentBatchConfig, Ao = v.ReactCurrentActQueue, Wr = (
      /*             */
      0
    ), YC = (
      /*               */
      1
    ), fa = (
      /*                */
      2
    ), Xi = (
      /*                */
      4
    ), lu = 0, zv = 1, Vc = 2, Iy = 3, Pv = 4, qC = 5, Ow = 6, Kt = Wr, Ia = null, yr = null, Yr = ye, wl = ye, kw = os(ye), qr = lu, Fv = null, $y = ye, Hv = ye, Wy = ye, Bv = null, di = null, Dw = 0, GC = 500, QC = 1 / 0, CA = 500, uu = null;
    function Vv() {
      QC = wr() + CA;
    }
    function KC() {
      return QC;
    }
    var Yy = !1, Aw = null, Ud = null, Ic = !1, ys = null, Iv = ye, Nw = [], Lw = null, xA = 50, $v = 0, Mw = null, jw = !1, qy = !1, RA = 50, zd = 0, Gy = null, Wv = Nn, Qy = ye, XC = !1;
    function Ky() {
      return Ia;
    }
    function $a() {
      return (Kt & (fa | Xi)) !== Wr ? wr() : (Wv !== Nn || (Wv = wr()), Wv);
    }
    function gs(e) {
      var t = e.mode;
      if ((t & dt) === gt)
        return wt;
      if ((Kt & fa) !== Wr && Yr !== ye)
        return Bu(Yr);
      var a = Ek() !== _k;
      if (a) {
        if (ca.transition !== null) {
          var i = ca.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Qy === pr && (Qy = um()), Qy;
      }
      var u = ai();
      if (u !== pr)
        return u;
      var f = oO();
      return f;
    }
    function TA(e) {
      var t = e.mode;
      return (t & dt) === gt ? wt : Ra();
    }
    function Gr(e, t, a, i) {
      XA(), XC && g("useInsertionEffect must not schedule updates."), jw && (qy = !0), ql(e, a, i), (Kt & fa) !== ye && e === Ia ? eN(t) : (Ha && $f(e, t, a), tN(t), e === Ia && ((Kt & fa) === Wr && (Hv = Mt(Hv, a)), qr === Pv && Ss(e, Yr)), pi(e, i), a === wt && Kt === Wr && (t.mode & dt) === gt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ao.isBatchingLegacy && (Vv(), KE()));
    }
    function OA(e, t, a) {
      var i = e.current;
      i.lanes = t, ql(e, t, a), pi(e, a);
    }
    function kA(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Kt & fa) !== Wr
      );
    }
    function pi(e, t) {
      var a = e.callbackNode;
      eS(e, t);
      var i = pc(e, e === Ia ? Yr : ye);
      if (i === ye) {
        a !== null && px(a), e.callbackNode = null, e.callbackPriority = pr;
        return;
      }
      var u = vr(i), f = e.callbackPriority;
      if (f === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ao.current !== null && a !== Vw)) {
        a == null && f !== wt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && px(a);
      var h;
      if (u === wt)
        e.tag === ls ? (Ao.isBatchingLegacy !== null && (Ao.didScheduleLegacyUpdate = !0), ak(ex.bind(null, e))) : QE(ex.bind(null, e)), Ao.current !== null ? Ao.current.push(us) : uO(function() {
          (Kt & (fa | Xi)) === Wr && us();
        }), h = null;
      else {
        var S;
        switch (Hr(i)) {
          case hr:
            S = ba;
            break;
          case yo:
            S = Au;
            break;
          case Vi:
            S = Fi;
            break;
          case Vu:
            S = rc;
            break;
          default:
            S = Fi;
            break;
        }
        h = Iw(S, JC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = h;
    }
    function JC(e, t) {
      if (Xk(), Wv = Nn, Qy = ye, (Kt & (fa | Xi)) !== Wr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = cu();
      if (i && e.callbackNode !== a)
        return null;
      var u = pc(e, e === Ia ? Yr : ye);
      if (u === ye)
        return null;
      var f = !hc(e, u) && !lm(e, u) && !t, h = f ? FA(e, u) : Jy(e, u);
      if (h !== lu) {
        if (h === Vc) {
          var S = ol(e);
          S !== ye && (u = S, h = Uw(e, S));
        }
        if (h === zv) {
          var E = Fv;
          throw $c(e, ye), Ss(e, u), pi(e, wr()), E;
        }
        if (h === Ow)
          Ss(e, u);
        else {
          var x = !hc(e, u), k = e.current.alternate;
          if (x && !AA(k)) {
            if (h = Jy(e, u), h === Vc) {
              var $ = ol(e);
              $ !== ye && (u = $, h = Uw(e, $));
            }
            if (h === zv) {
              var V = Fv;
              throw $c(e, ye), Ss(e, u), pi(e, wr()), V;
            }
          }
          e.finishedWork = k, e.finishedLanes = u, DA(e, h, u);
        }
      }
      return pi(e, wr()), e.callbackNode === a ? JC.bind(null, e) : null;
    }
    function Uw(e, t) {
      var a = Bv;
      if (Wf(e)) {
        var i = $c(e, t);
        i.flags |= na, XO(e.containerInfo);
      }
      var u = Jy(e, t);
      if (u !== Vc) {
        var f = di;
        di = a, f !== null && ZC(f);
      }
      return u;
    }
    function ZC(e) {
      di === null ? di = e : di.push.apply(di, e);
    }
    function DA(e, t, a) {
      switch (t) {
        case lu:
        case zv:
          throw new Error("Root did not complete. This is a bug in React.");
        case Vc: {
          Wc(e, di, uu);
          break;
        }
        case Iy: {
          if (Ss(e, a), am(a) && // do not delay if we're inside an act() scope
          !vx()) {
            var i = Dw + GC - wr();
            if (i > 10) {
              var u = pc(e, ye);
              if (u !== ye)
                break;
              var f = e.suspendedLanes;
              if (!Yl(f, a)) {
                $a(), Vf(e, f);
                break;
              }
              e.timeoutHandle = LS(Wc.bind(null, e, di, uu), i);
              break;
            }
          }
          Wc(e, di, uu);
          break;
        }
        case Pv: {
          if (Ss(e, a), om(a))
            break;
          if (!vx()) {
            var h = Ff(e, a), S = h, E = wr() - S, x = KA(E) - E;
            if (x > 10) {
              e.timeoutHandle = LS(Wc.bind(null, e, di, uu), x);
              break;
            }
          }
          Wc(e, di, uu);
          break;
        }
        case qC: {
          Wc(e, di, uu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function AA(e) {
      for (var t = e; ; ) {
        if (t.flags & jl) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var f = i[u], h = f.getSnapshot, S = f.value;
                try {
                  if (!at(h(), S))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & jl && E !== null) {
          E.return = t, t = E;
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
    function Ss(e, t) {
      t = mc(t, Wy), t = mc(t, Hv), cm(e, t);
    }
    function ex(e) {
      if (Jk(), (Kt & (fa | Xi)) !== Wr)
        throw new Error("Should not already be working.");
      cu();
      var t = pc(e, ye);
      if (!Ta(t, wt))
        return pi(e, wr()), null;
      var a = Jy(e, t);
      if (e.tag !== ls && a === Vc) {
        var i = ol(e);
        i !== ye && (t = i, a = Uw(e, i));
      }
      if (a === zv) {
        var u = Fv;
        throw $c(e, ye), Ss(e, t), pi(e, wr()), u;
      }
      if (a === Ow)
        throw new Error("Root did not complete. This is a bug in React.");
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, Wc(e, di, uu), pi(e, wr()), null;
    }
    function NA(e, t) {
      t !== ye && (zp(e, Mt(t, wt)), pi(e, wr()), (Kt & (fa | Xi)) === Wr && (Vv(), us()));
    }
    function zw(e, t) {
      var a = Kt;
      Kt |= YC;
      try {
        return e(t);
      } finally {
        Kt = a, Kt === Wr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ao.isBatchingLegacy && (Vv(), KE());
      }
    }
    function LA(e, t, a, i, u) {
      var f = ai(), h = ca.transition;
      try {
        return ca.transition = null, or(hr), e(t, a, i, u);
      } finally {
        or(f), ca.transition = h, Kt === Wr && Vv();
      }
    }
    function su(e) {
      ys !== null && ys.tag === ls && (Kt & (fa | Xi)) === Wr && cu();
      var t = Kt;
      Kt |= YC;
      var a = ca.transition, i = ai();
      try {
        return ca.transition = null, or(hr), e ? e() : void 0;
      } finally {
        or(i), ca.transition = a, Kt = t, (Kt & (fa | Xi)) === Wr && us();
      }
    }
    function tx() {
      return (Kt & (fa | Xi)) !== Wr;
    }
    function Xy(e, t) {
      Da(kw, wl, e), wl = Mt(wl, t);
    }
    function Pw(e) {
      wl = kw.current, ka(kw, e);
    }
    function $c(e, t) {
      e.finishedWork = null, e.finishedLanes = ye;
      var a = e.timeoutHandle;
      if (a !== MS && (e.timeoutHandle = MS, lO(a)), yr !== null)
        for (var i = yr.return; i !== null; ) {
          var u = i.alternate;
          DC(u, i), i = i.return;
        }
      Ia = e;
      var f = Yc(e.current, null);
      return yr = f, Yr = wl = t, qr = lu, Fv = null, $y = ye, Hv = ye, Wy = ye, Bv = null, di = null, Rk(), bo.discardPendingWarnings(), f;
    }
    function nx(e, t) {
      do {
        var a = yr;
        try {
          if (iy(), Nb(), Un(), Tw.current = null, a === null || a.return === null) {
            qr = zv, Fv = t, yr = null;
            return;
          }
          if (Le && a.mode & tn && zy(a, !0), Ie)
            if (Pl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              tm(a, i, Yr);
            } else
              em(a, t, Yr);
          rD(e, a.return, a, t, Yr), ox(a);
        } catch (u) {
          t = u, yr === a && a !== null ? (a = a.return, yr = a) : a = yr;
          continue;
        }
        return;
      } while (!0);
    }
    function rx() {
      var e = Rw.current;
      return Rw.current = Ny, e === null ? Ny : e;
    }
    function ax(e) {
      Rw.current = e;
    }
    function MA() {
      Dw = wr();
    }
    function Yv(e) {
      $y = Mt(e, $y);
    }
    function jA() {
      qr === lu && (qr = Iy);
    }
    function Fw() {
      (qr === lu || qr === Iy || qr === Vc) && (qr = Pv), Ia !== null && (vc($y) || vc(Hv)) && Ss(Ia, Yr);
    }
    function UA(e) {
      qr !== Pv && (qr = Vc), Bv === null ? Bv = [e] : Bv.push(e);
    }
    function zA() {
      return qr === lu;
    }
    function Jy(e, t) {
      var a = Kt;
      Kt |= fa;
      var i = rx();
      if (Ia !== e || Yr !== t) {
        if (Ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (qv(e, Yr), u.clear()), Pp(e, t);
        }
        uu = gc(), $c(e, t);
      }
      Uu(t);
      do
        try {
          PA();
          break;
        } catch (f) {
          nx(e, f);
        }
      while (!0);
      if (iy(), Kt = a, ax(i), yr !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return rl(), Ia = null, Yr = ye, qr;
    }
    function PA() {
      for (; yr !== null; )
        ix(yr);
    }
    function FA(e, t) {
      var a = Kt;
      Kt |= fa;
      var i = rx();
      if (Ia !== e || Yr !== t) {
        if (Ha) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (qv(e, Yr), u.clear()), Pp(e, t);
        }
        uu = gc(), Vv(), $c(e, t);
      }
      Uu(t);
      do
        try {
          HA();
          break;
        } catch (f) {
          nx(e, f);
        }
      while (!0);
      return iy(), ax(i), Kt = a, yr !== null ? (lc(), lu) : (rl(), Ia = null, Yr = ye, qr);
    }
    function HA() {
      for (; yr !== null && !qh(); )
        ix(yr);
    }
    function ix(e) {
      var t = e.alternate;
      Qn(e);
      var a;
      (e.mode & tn) !== gt ? (ew(e), a = Hw(t, e, wl), zy(e, !0)) : a = Hw(t, e, wl), Un(), e.memoizedProps = e.pendingProps, a === null ? ox(e) : yr = a, Tw.current = null;
    }
    function ox(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Xo) === yt) {
          Qn(t);
          var u = void 0;
          if ((t.mode & tn) === gt ? u = kC(a, t, wl) : (ew(t), u = kC(a, t, wl), zy(t, !1)), Un(), u !== null) {
            yr = u;
            return;
          }
        } else {
          var f = jD(a, t);
          if (f !== null) {
            f.flags &= vo, yr = f;
            return;
          }
          if ((t.mode & tn) !== gt) {
            zy(t, !1);
            for (var h = t.actualDuration, S = t.child; S !== null; )
              h += S.actualDuration, S = S.sibling;
            t.actualDuration = h;
          }
          if (i !== null)
            i.flags |= Xo, i.subtreeFlags = yt, i.deletions = null;
          else {
            qr = Ow, yr = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          yr = E;
          return;
        }
        t = i, yr = t;
      } while (t !== null);
      qr === lu && (qr = qC);
    }
    function Wc(e, t, a) {
      var i = ai(), u = ca.transition;
      try {
        ca.transition = null, or(hr), BA(e, t, a, i);
      } finally {
        ca.transition = u, or(i);
      }
      return null;
    }
    function BA(e, t, a, i) {
      do
        cu();
      while (ys !== null);
      if (JA(), (Kt & (fa | Xi)) !== Wr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, f = e.finishedLanes;
      if (Kh(f), u === null)
        return ac(), null;
      if (f === ye && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ye, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = pr;
      var h = Mt(u.lanes, u.childLanes);
      If(e, h), e === Ia && (Ia = null, yr = null, Yr = ye), ((u.subtreeFlags & Ea) !== yt || (u.flags & Ea) !== yt) && (Ic || (Ic = !0, Lw = a, Iw(Fi, function() {
        return cu(), null;
      })));
      var S = (u.subtreeFlags & (wa | _a | bi | Ea)) !== yt, E = (u.flags & (wa | _a | bi | Ea)) !== yt;
      if (S || E) {
        var x = ca.transition;
        ca.transition = null;
        var k = ai();
        or(hr);
        var $ = Kt;
        Kt |= Xi, Tw.current = null, HD(e, u), rC(), eA(e, u, f), eO(e.containerInfo), e.current = u, ju(f), tA(u, e, f), nm(), Du(), Kt = $, or(k), ca.transition = x;
      } else
        e.current = u, rC();
      var V = Ic;
      if (Ic ? (Ic = !1, ys = e, Iv = f) : (zd = 0, Gy = null), h = e.pendingLanes, h === ye && (Ud = null), V || cx(e.current, !1), tl(u.stateNode, i), Ha && e.memoizedUpdaters.clear(), wA(), pi(e, wr()), t !== null)
        for (var re = e.onRecoverableError, ae = 0; ae < t.length; ae++) {
          var pe = t[ae], et = pe.stack, St = pe.digest;
          re(pe.value, {
            componentStack: et,
            digest: St
          });
        }
      if (Yy) {
        Yy = !1;
        var pt = Aw;
        throw Aw = null, pt;
      }
      return Ta(Iv, wt) && e.tag !== ls && cu(), h = e.pendingLanes, Ta(h, wt) ? (Kk(), e === Mw ? $v++ : ($v = 0, Mw = e)) : $v = 0, us(), ac(), null;
    }
    function cu() {
      if (ys !== null) {
        var e = Hr(Iv), t = aS(Vi, e), a = ca.transition, i = ai();
        try {
          return ca.transition = null, or(t), IA();
        } finally {
          or(i), ca.transition = a;
        }
      }
      return !1;
    }
    function VA(e) {
      Nw.push(e), Ic || (Ic = !0, Iw(Fi, function() {
        return cu(), null;
      }));
    }
    function IA() {
      if (ys === null)
        return !1;
      var e = Lw;
      Lw = null;
      var t = ys, a = Iv;
      if (ys = null, Iv = ye, (Kt & (fa | Xi)) !== Wr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jw = !0, qy = !1, oc(a);
      var i = Kt;
      Kt |= Xi, uA(t.current), aA(t, t.current, a, e);
      {
        var u = Nw;
        Nw = [];
        for (var f = 0; f < u.length; f++) {
          var h = u[f];
          $D(t, h);
        }
      }
      Hi(), cx(t.current, !0), Kt = i, us(), qy ? t === Gy ? zd++ : (zd = 0, Gy = t) : zd = 0, jw = !1, qy = !1, Op(t);
      {
        var S = t.current.stateNode;
        S.effectDuration = 0, S.passiveEffectDuration = 0;
      }
      return !0;
    }
    function lx(e) {
      return Ud !== null && Ud.has(e);
    }
    function $A(e) {
      Ud === null ? Ud = /* @__PURE__ */ new Set([e]) : Ud.add(e);
    }
    function WA(e) {
      Yy || (Yy = !0, Aw = e);
    }
    var YA = WA;
    function ux(e, t, a) {
      var i = Hc(a, t), u = iC(e, i, wt), f = cs(e, u, wt), h = $a();
      f !== null && (ql(f, wt, h), pi(f, h));
    }
    function Hn(e, t, a) {
      if (zD(a), Gv(!1), e.tag === U) {
        ux(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === U) {
          ux(i, e, a);
          return;
        } else if (i.tag === D) {
          var u = i.type, f = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !lx(f)) {
            var h = Hc(a, e), S = ow(i, h, wt), E = cs(i, S, wt), x = $a();
            E !== null && (ql(E, wt, x), pi(E, x));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function qA(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = $a();
      Vf(e, a), nN(e), Ia === e && Yl(Yr, a) && (qr === Pv || qr === Iy && am(Yr) && wr() - Dw < GC ? $c(e, ye) : Wy = Mt(Wy, a)), pi(e, u);
    }
    function sx(e, t) {
      t === pr && (t = TA(e));
      var a = $a(), i = ci(e, t);
      i !== null && (ql(i, t, a), pi(i, a));
    }
    function GA(e) {
      var t = e.memoizedState, a = pr;
      t !== null && (a = t.retryLane), sx(e, a);
    }
    function QA(e, t) {
      var a = pr, i;
      switch (e.tag) {
        case we:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case _e:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), sx(e, a);
    }
    function KA(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : bA(e / 1960) * 1960;
    }
    function XA() {
      if ($v > xA)
        throw $v = 0, Mw = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      zd > RA && (zd = 0, Gy = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function JA() {
      bo.flushLegacyContextWarning(), bo.flushPendingUnsafeLifecycleWarnings();
    }
    function cx(e, t) {
      Qn(e), Zy(e, ei, yA), t && Zy(e, Ul, gA), Zy(e, ei, hA), t && Zy(e, Ul, mA), Un();
    }
    function Zy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var f = i.subtreeFlags & t;
        i !== u && i.child !== null && f !== yt ? i = i.child : ((i.flags & t) !== yt && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var eg = null;
    function fx(e) {
      {
        if ((Kt & fa) !== Wr || !(e.mode & dt))
          return;
        var t = e.tag;
        if (t !== L && t !== U && t !== D && t !== O && t !== he && t !== He && t !== q)
          return;
        var a = Rt(e) || "ReactComponent";
        if (eg !== null) {
          if (eg.has(a))
            return;
          eg.add(a);
        } else
          eg = /* @__PURE__ */ new Set([a]);
        var i = Gn;
        try {
          Qn(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qn(e) : Un();
        }
      }
    }
    var Hw;
    {
      var ZA = null;
      Hw = function(e, t, a) {
        var i = Sx(ZA, t);
        try {
          return CC(e, t, a);
        } catch (f) {
          if (dk() || f !== null && typeof f == "object" && typeof f.then == "function")
            throw f;
          if (iy(), Nb(), DC(e, t), Sx(t, i), t.mode & tn && ew(t), _i(null, CC, null, e, t, a), Xg()) {
            var u = po();
            typeof u == "object" && u !== null && u._suppressLogging && typeof f == "object" && f !== null && !f._suppressLogging && (f._suppressLogging = !0);
          }
          throw f;
        }
      };
    }
    var dx = !1, Bw;
    Bw = /* @__PURE__ */ new Set();
    function eN(e) {
      if (ma && !qk())
        switch (e.tag) {
          case O:
          case he:
          case q: {
            var t = yr && Rt(yr) || "Unknown", a = t;
            if (!Bw.has(a)) {
              Bw.add(a);
              var i = Rt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case D: {
            dx || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), dx = !0);
            break;
          }
        }
    }
    function qv(e, t) {
      if (Ha) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          $f(e, i, t);
        });
      }
    }
    var Vw = {};
    function Iw(e, t) {
      {
        var a = Ao.current;
        return a !== null ? (a.push(t), Vw) : xp(e, t);
      }
    }
    function px(e) {
      if (e !== Vw)
        return Ef(e);
    }
    function vx() {
      return Ao.current !== null;
    }
    function tN(e) {
      {
        if (e.mode & dt) {
          if (!WC())
            return;
        } else if (!EA() || Kt !== Wr || e.tag !== O && e.tag !== he && e.tag !== q)
          return;
        if (Ao.current === null) {
          var t = Gn;
          try {
            Qn(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Rt(e));
          } finally {
            t ? Qn(e) : Un();
          }
        }
      }
    }
    function nN(e) {
      e.tag !== ls && WC() && Ao.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Gv(e) {
      XC = e;
    }
    var Ji = null, Pd = null, rN = function(e) {
      Ji = e;
    };
    function Fd(e) {
      {
        if (Ji === null)
          return e;
        var t = Ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $w(e) {
      return Fd(e);
    }
    function Ww(e) {
      {
        if (Ji === null)
          return e;
        var t = Ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Fd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: qe,
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
    function hx(e, t) {
      {
        if (Ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, f = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case D: {
            typeof i == "function" && (u = !0);
            break;
          }
          case O: {
            (typeof i == "function" || f === Ve) && (u = !0);
            break;
          }
          case he: {
            (f === qe || f === Ve) && (u = !0);
            break;
          }
          case He:
          case q: {
            (f === At || f === Ve) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var h = Ji(a);
          if (h !== void 0 && h === Ji(i))
            return !0;
        }
        return !1;
      }
    }
    function mx(e) {
      {
        if (Ji === null || typeof WeakSet != "function")
          return;
        Pd === null && (Pd = /* @__PURE__ */ new WeakSet()), Pd.add(e);
      }
    }
    var aN = function(e, t) {
      {
        if (Ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        cu(), su(function() {
          Yw(e.current, i, a);
        });
      }
    }, iN = function(e, t) {
      {
        if (e.context !== Ci)
          return;
        cu(), su(function() {
          Qv(t, e, null, null);
        });
      }
    };
    function Yw(e, t, a) {
      {
        var i = e.alternate, u = e.child, f = e.sibling, h = e.tag, S = e.type, E = null;
        switch (h) {
          case O:
          case q:
          case D:
            E = S;
            break;
          case he:
            E = S.render;
            break;
        }
        if (Ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, k = !1;
        if (E !== null) {
          var $ = Ji(E);
          $ !== void 0 && (a.has($) ? k = !0 : t.has($) && (h === D ? k = !0 : x = !0));
        }
        if (Pd !== null && (Pd.has(e) || i !== null && Pd.has(i)) && (k = !0), k && (e._debugNeedsRemount = !0), k || x) {
          var V = ci(e, wt);
          V !== null && Gr(V, e, wt, Nn);
        }
        u !== null && !k && Yw(u, t, a), f !== null && Yw(f, t, a);
      }
    }
    var oN = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qw(e.current, i, a), a;
      }
    };
    function qw(e, t, a) {
      {
        var i = e.child, u = e.sibling, f = e.tag, h = e.type, S = null;
        switch (f) {
          case O:
          case q:
          case D:
            S = h;
            break;
          case he:
            S = h.render;
            break;
        }
        var E = !1;
        S !== null && t.has(S) && (E = !0), E ? lN(e, a) : i !== null && qw(i, t, a), u !== null && qw(u, t, a);
      }
    }
    function lN(e, t) {
      {
        var a = uN(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case P:
              t.add(i.stateNode);
              return;
            case H:
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
    function uN(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === P)
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
    var Gw;
    {
      Gw = !1;
      try {
        var yx = Object.preventExtensions({});
      } catch {
        Gw = !0;
      }
    }
    function sN(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = yt, this.subtreeFlags = yt, this.deletions = null, this.lanes = ye, this.childLanes = ye, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Gw && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var xi = function(e, t, a, i) {
      return new sN(e, t, a, i);
    };
    function Qw(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cN(e) {
      return typeof e == "function" && !Qw(e) && e.defaultProps === void 0;
    }
    function fN(e) {
      if (typeof e == "function")
        return Qw(e) ? D : O;
      if (e != null) {
        var t = e.$$typeof;
        if (t === qe)
          return he;
        if (t === At)
          return He;
      }
      return L;
    }
    function Yc(e, t) {
      var a = e.alternate;
      a === null ? (a = xi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = yt, a.subtreeFlags = yt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case L:
        case O:
        case q:
          a.type = Fd(e.type);
          break;
        case D:
          a.type = $w(e.type);
          break;
        case he:
          a.type = Ww(e.type);
          break;
      }
      return a;
    }
    function dN(e, t) {
      e.flags &= Fr | On;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ye, e.lanes = t, e.child = null, e.subtreeFlags = yt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function pN(e, t, a) {
      var i;
      return e === Xm ? (i = dt, t === !0 && (i |= ar, i |= ni)) : i = gt, Ha && (i |= tn), xi(U, null, null, i);
    }
    function Kw(e, t, a, i, u, f) {
      var h = L, S = e;
      if (typeof e == "function")
        Qw(e) ? (h = D, S = $w(S)) : S = Fd(S);
      else if (typeof e == "string")
        h = P;
      else
        e: switch (e) {
          case mn:
            return ws(a.children, u, f, t);
          case nr:
            h = Se, u |= ar, (u & dt) !== gt && (u |= ni);
            break;
          case j:
            return vN(a, u, f, t);
          case zt:
            return hN(a, u, f, t);
          case It:
            return mN(a, u, f, t);
          case nn:
            return gx(a, u, f, t);
          case Ar:
          case dn:
          case pa:
          case Dn:
          case pn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ee:
                  h = Q;
                  break e;
                case Ye:
                  h = ue;
                  break e;
                case qe:
                  h = he, S = Ww(S);
                  break e;
                case At:
                  h = He;
                  break e;
                case Ve:
                  h = be, S = null;
                  break e;
              }
            var E = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var x = i ? Rt(i) : null;
              x && (E += `

Check the render method of \`` + x + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
          }
        }
      var k = xi(h, a, t, u);
      return k.elementType = e, k.type = S, k.lanes = f, k._debugOwner = i, k;
    }
    function Xw(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, f = e.key, h = e.props, S = Kw(u, f, h, i, t, a);
      return S._debugSource = e._source, S._debugOwner = e._owner, S;
    }
    function ws(e, t, a, i) {
      var u = xi(Y, e, i, t);
      return u.lanes = a, u;
    }
    function vN(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = xi(G, e, i, t | tn);
      return u.elementType = j, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hN(e, t, a, i) {
      var u = xi(we, e, i, t);
      return u.elementType = zt, u.lanes = a, u;
    }
    function mN(e, t, a, i) {
      var u = xi(_e, e, i, t);
      return u.elementType = It, u.lanes = a, u;
    }
    function gx(e, t, a, i) {
      var u = xi(te, e, i, t);
      u.elementType = nn, u.lanes = a;
      var f = {
        isHidden: !1
      };
      return u.stateNode = f, u;
    }
    function Jw(e, t, a) {
      var i = xi(W, e, null, t);
      return i.lanes = a, i;
    }
    function yN() {
      var e = xi(P, null, null, gt);
      return e.elementType = "DELETED", e;
    }
    function gN(e) {
      var t = xi(De, null, null, gt);
      return t.stateNode = e, t;
    }
    function Zw(e, t, a) {
      var i = e.children !== null ? e.children : [], u = xi(H, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function Sx(e, t) {
      return e === null && (e = xi(L, null, null, gt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function SN(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = MS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = pr, this.eventTimes = yc(ye), this.expirationTimes = yc(Nn), this.pendingLanes = ye, this.suspendedLanes = ye, this.pingedLanes = ye, this.expiredLanes = ye, this.mutableReadLanes = ye, this.finishedLanes = ye, this.entangledLanes = ye, this.entanglements = yc(ye), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var f = this.pendingUpdatersLaneMap = [], h = 0; h < dr; h++)
          f.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Xm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ls:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function wx(e, t, a, i, u, f, h, S, E, x) {
      var k = new SN(e, t, a, S, E), $ = pN(t, f);
      k.current = $, $.stateNode = k;
      {
        var V = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        $.memoizedState = V;
      }
      return l0($), k;
    }
    var e_ = "18.2.0";
    function wN(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return er(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: jn,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var t_, n_;
    t_ = !1, n_ = {};
    function _x(e) {
      if (!e)
        return Ci;
      var t = Ui(e), a = rk(t);
      if (t.tag === D) {
        var i = t.type;
        if (pl(i))
          return qE(t, i, a);
      }
      return a;
    }
    function _N(e, t) {
      {
        var a = Ui(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Ep(a);
        if (u === null)
          return null;
        if (u.mode & ar) {
          var f = Rt(a) || "Component";
          if (!n_[f]) {
            n_[f] = !0;
            var h = Gn;
            try {
              Qn(u), a.mode & ar ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f);
            } finally {
              h ? Qn(h) : Un();
            }
          }
        }
        return u.stateNode;
      }
    }
    function Ex(e, t, a, i, u, f, h, S) {
      var E = !1, x = null;
      return wx(e, t, E, x, a, i, u, f, h);
    }
    function bx(e, t, a, i, u, f, h, S, E, x) {
      var k = !0, $ = wx(a, i, k, e, u, f, h, S, E);
      $.context = _x(null);
      var V = $.current, re = $a(), ae = gs(V), pe = iu(re, ae);
      return pe.callback = t ?? null, cs(V, pe, ae), OA($, ae, re), $;
    }
    function Qv(e, t, a, i) {
      ho(t, e);
      var u = t.current, f = $a(), h = gs(u);
      Ap(h);
      var S = _x(a);
      t.context === null ? t.context = S : t.pendingContext = S, ma && Gn !== null && !t_ && (t_ = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Rt(Gn) || "Unknown"));
      var E = iu(f, h);
      E.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), E.callback = i);
      var x = cs(u, E, h);
      return x !== null && (Gr(x, u, h, f), cy(x, u, h)), h;
    }
    function tg(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case P:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function EN(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (Wf(t)) {
            var a = tS(t);
            NA(t, a);
          }
          break;
        }
        case we: {
          su(function() {
            var u = ci(e, wt);
            if (u !== null) {
              var f = $a();
              Gr(u, e, wt, f);
            }
          });
          var i = wt;
          r_(e, i);
          break;
        }
      }
    }
    function Cx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = sm(a.retryLane, t));
    }
    function r_(e, t) {
      Cx(e, t);
      var a = e.alternate;
      a && Cx(a, t);
    }
    function bN(e) {
      if (e.tag === we) {
        var t = Wl, a = ci(e, t);
        if (a !== null) {
          var i = $a();
          Gr(a, e, t, i);
        }
        r_(e, t);
      }
    }
    function CN(e) {
      if (e.tag === we) {
        var t = gs(e), a = ci(e, t);
        if (a !== null) {
          var i = $a();
          Gr(a, e, t, i);
        }
        r_(e, t);
      }
    }
    function xx(e) {
      var t = Cp(e);
      return t === null ? null : t.stateNode;
    }
    var Rx = function(e) {
      return null;
    };
    function xN(e) {
      return Rx(e);
    }
    var Tx = function(e) {
      return !1;
    };
    function RN(e) {
      return Tx(e);
    }
    var Ox = null, kx = null, Dx = null, Ax = null, Nx = null, Lx = null, Mx = null, jx = null, Ux = null;
    {
      var zx = function(e, t, a) {
        var i = t[a], u = en(e) ? e.slice() : Pt({}, e);
        return a + 1 === t.length ? (en(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = zx(e[i], t, a + 1), u);
      }, Px = function(e, t) {
        return zx(e, t, 0);
      }, Fx = function(e, t, a, i) {
        var u = t[i], f = en(e) ? e.slice() : Pt({}, e);
        if (i + 1 === t.length) {
          var h = a[i];
          f[h] = f[u], en(f) ? f.splice(u, 1) : delete f[u];
        } else
          f[u] = Fx(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return f;
      }, Hx = function(e, t, a) {
        if (t.length !== a.length) {
          _("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              _("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Fx(e, t, a, 0);
      }, Bx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], f = en(e) ? e.slice() : Pt({}, e);
        return f[u] = Bx(e[u], t, a + 1, i), f;
      }, Vx = function(e, t, a) {
        return Bx(e, t, 0, a);
      }, a_ = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Ox = function(e, t, a, i) {
        var u = a_(e, t);
        if (u !== null) {
          var f = Vx(u.memoizedState, a, i);
          u.memoizedState = f, u.baseState = f, e.memoizedProps = Pt({}, e.memoizedProps);
          var h = ci(e, wt);
          h !== null && Gr(h, e, wt, Nn);
        }
      }, kx = function(e, t, a) {
        var i = a_(e, t);
        if (i !== null) {
          var u = Px(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Pt({}, e.memoizedProps);
          var f = ci(e, wt);
          f !== null && Gr(f, e, wt, Nn);
        }
      }, Dx = function(e, t, a, i) {
        var u = a_(e, t);
        if (u !== null) {
          var f = Hx(u.memoizedState, a, i);
          u.memoizedState = f, u.baseState = f, e.memoizedProps = Pt({}, e.memoizedProps);
          var h = ci(e, wt);
          h !== null && Gr(h, e, wt, Nn);
        }
      }, Ax = function(e, t, a) {
        e.pendingProps = Vx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ci(e, wt);
        i !== null && Gr(i, e, wt, Nn);
      }, Nx = function(e, t) {
        e.pendingProps = Px(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ci(e, wt);
        a !== null && Gr(a, e, wt, Nn);
      }, Lx = function(e, t, a) {
        e.pendingProps = Hx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ci(e, wt);
        i !== null && Gr(i, e, wt, Nn);
      }, Mx = function(e) {
        var t = ci(e, wt);
        t !== null && Gr(t, e, wt, Nn);
      }, jx = function(e) {
        Rx = e;
      }, Ux = function(e) {
        Tx = e;
      };
    }
    function TN(e) {
      var t = Ep(e);
      return t === null ? null : t.stateNode;
    }
    function ON(e) {
      return null;
    }
    function kN() {
      return Gn;
    }
    function DN(e) {
      var t = e.findFiberByHostInstance, a = v.ReactCurrentDispatcher;
      return Gh({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Ox,
        overrideHookStateDeletePath: kx,
        overrideHookStateRenamePath: Dx,
        overrideProps: Ax,
        overridePropsDeletePath: Nx,
        overridePropsRenamePath: Lx,
        setErrorHandler: jx,
        setSuspenseHandler: Ux,
        scheduleUpdate: Mx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: TN,
        findFiberByHostInstance: t || ON,
        // React Refresh
        findHostInstancesForRefresh: oN,
        scheduleRefresh: aN,
        scheduleRoot: iN,
        setRefreshHandler: rN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kN,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: e_
      });
    }
    var Ix = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function i_(e) {
      this._internalRoot = e;
    }
    ng.prototype.render = i_.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : rg(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== rr) {
          var i = xx(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Qv(e, t, null, null);
    }, ng.prototype.unmount = i_.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tx() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), su(function() {
          Qv(null, e, null, null);
        }), VE(t);
      }
    };
    function AN(e, t) {
      if (!rg(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $x(e);
      var a = !1, i = !1, u = "", f = Ix;
      t != null && (t.hydrate ? _("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Mn && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var h = Ex(e, Xm, null, a, i, u, f);
      $m(h.current, e);
      var S = e.nodeType === rr ? e.parentNode : e;
      return rv(S), new i_(h);
    }
    function ng(e) {
      this._internalRoot = e;
    }
    function NN(e) {
      e && lS(e);
    }
    ng.prototype.unstable_scheduleHydration = NN;
    function LN(e, t, a) {
      if (!rg(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $x(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, f = !1, h = !1, S = "", E = Ix;
      a != null && (a.unstable_strictMode === !0 && (f = !0), a.identifierPrefix !== void 0 && (S = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError));
      var x = bx(t, null, e, Xm, i, f, h, S, E);
      if ($m(x.current, e), rv(e), u)
        for (var k = 0; k < u.length; k++) {
          var $ = u[k];
          Bk(x, $);
        }
      return new ng(x);
    }
    function rg(e) {
      return !!(e && (e.nodeType === ga || e.nodeType === ja || e.nodeType === ip || !Te));
    }
    function Kv(e) {
      return !!(e && (e.nodeType === ga || e.nodeType === ja || e.nodeType === ip || e.nodeType === rr && e.nodeValue === " react-mount-point-unstable "));
    }
    function $x(e) {
      e.nodeType === ga && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), vv(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var MN = v.ReactCurrentOwner, Wx;
    Wx = function(e) {
      if (e._reactRootContainer && e.nodeType !== rr) {
        var t = xx(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = o_(e), u = !!(i && is(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ga && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function o_(e) {
      return e ? e.nodeType === ja ? e.documentElement : e.firstChild : null;
    }
    function Yx() {
    }
    function jN(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var f = i;
          i = function() {
            var V = tg(h);
            f.call(V);
          };
        }
        var h = bx(
          t,
          i,
          e,
          ls,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Yx
        );
        e._reactRootContainer = h, $m(h.current, e);
        var S = e.nodeType === rr ? e.parentNode : e;
        return rv(S), su(), h;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof i == "function") {
          var x = i;
          i = function() {
            var V = tg(k);
            x.call(V);
          };
        }
        var k = Ex(
          e,
          ls,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Yx
        );
        e._reactRootContainer = k, $m(k.current, e);
        var $ = e.nodeType === rr ? e.parentNode : e;
        return rv($), su(function() {
          Qv(t, k, a, i);
        }), k;
      }
    }
    function UN(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ag(e, t, a, i, u) {
      Wx(a), UN(u === void 0 ? null : u, "render");
      var f = a._reactRootContainer, h;
      if (!f)
        h = jN(a, t, e, u, i);
      else {
        if (h = f, typeof u == "function") {
          var S = u;
          u = function() {
            var E = tg(h);
            S.call(E);
          };
        }
        Qv(t, h, e, u);
      }
      return tg(h);
    }
    function zN(e) {
      {
        var t = MN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ga ? e : _N(e, "findDOMNode");
    }
    function PN(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = vv(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ag(null, e, t, !0, a);
    }
    function FN(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = vv(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ag(null, e, t, !1, a);
    }
    function HN(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ku(e))
        throw new Error("parentComponent must be a valid React Component");
      return ag(e, t, a, !1, i);
    }
    function BN(e) {
      if (!Kv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = vv(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = o_(e), i = a && !is(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return su(function() {
          ag(null, null, e, !1, function() {
            e._reactRootContainer = null, VE(e);
          });
        }), !0;
      } else {
        {
          var u = o_(e), f = !!(u && is(u)), h = e.nodeType === ga && Kv(e.parentNode) && !!e.parentNode._reactRootContainer;
          f && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", h ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Wu(EN), iS(bN), qf(CN), dm(ai), pm(Jr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), pp($1), mf(zw, LA, su);
    function VN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!rg(t))
        throw new Error("Target container is not a DOM element.");
      return wN(e, t, null, a);
    }
    function IN(e, t, a, i) {
      return HN(e, t, a, i);
    }
    var l_ = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [is, md, Wm, Ou, Ll, zw]
    };
    function $N(e, t) {
      return l_.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), AN(e, t);
    }
    function WN(e, t, a) {
      return l_.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), LN(e, t, a);
    }
    function YN(e) {
      return tx() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), su(e);
    }
    var qN = DN({
      findFiberByHostInstance: Ac,
      bundleType: 1,
      version: e_,
      rendererPackageName: "react-dom"
    });
    if (!qN && xt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qx = window.location.protocol;
      /^(https?|file):$/.test(qx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l_, hi.createPortal = VN, hi.createRoot = $N, hi.findDOMNode = zN, hi.flushSync = YN, hi.hydrate = PN, hi.hydrateRoot = WN, hi.render = FN, hi.unmountComponentAtNode = BN, hi.unstable_batchedUpdates = zw, hi.unstable_renderSubtreeIntoContainer = IN, hi.version = e_, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), hi;
}
var tT = {};
function nT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (tT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nT);
    } catch (l) {
      console.error(l);
    }
  }
}
tT.NODE_ENV === "production" ? (nT(), k_.exports = iL()) : k_.exports = oL();
var rT = k_.exports, lL = {}, eh = rT;
if (lL.NODE_ENV === "production")
  ah.createRoot = eh.createRoot, ah.hydrateRoot = eh.hydrateRoot;
else {
  var og = eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ah.createRoot = function(l, s) {
    og.usingClientEntryPoint = !0;
    try {
      return eh.createRoot(l, s);
    } finally {
      og.usingClientEntryPoint = !1;
    }
  }, ah.hydrateRoot = function(l, s, d) {
    og.usingClientEntryPoint = !0;
    try {
      return eh.hydrateRoot(l, s, d);
    } finally {
      og.usingClientEntryPoint = !1;
    }
  };
}
function uL({ tabs: l }) {
  const [s, d] = ce.useState(0), v = (w) => {
    d(w);
  }, m = (w) => {
    w.key === "ArrowRight" ? d((_) => (_ + 1) % l.length) : w.key === "ArrowLeft" && d((_) => (_ - 1 + l.length) % l.length);
  };
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsx("div", { className: "nav-tab-wrapper", role: "tablist", children: l.map((w, _) => /* @__PURE__ */ T.jsx(
      "button",
      {
        className: s === _ ? "nav-tab nav-tab-active" : "nav-tab",
        role: "tab",
        "aria-selected": s === _,
        "aria-controls": `tabpanel-${_}`,
        id: `tab-${_}`,
        tabIndex: s === _ ? 0 : -1,
        onClick: () => v(_),
        onKeyDown: m,
        children: w.title
      },
      _
    )) }),
    l.map((w, _) => {
      const g = w.content;
      return /* @__PURE__ */ T.jsxs(
        "div",
        {
          className: "tabs-content",
          role: "tabpanel",
          id: `tabpanel-${_}`,
          "aria-labelledby": `tab-${_}`,
          hidden: s !== _,
          tabIndex: 0,
          children: [
            /* @__PURE__ */ T.jsx(g, {}),
            " "
          ]
        },
        _
      );
    })
  ] });
}
function aT(l, s) {
  return function() {
    return l.apply(s, arguments);
  };
}
const { toString: sL } = Object.prototype, { getPrototypeOf: J_ } = Object, Og = /* @__PURE__ */ ((l) => (s) => {
  const d = sL.call(s);
  return l[d] || (l[d] = d.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), zo = (l) => (l = l.toLowerCase(), (s) => Og(s) === l), kg = (l) => (s) => typeof s === l, { isArray: Qd } = Array, ih = kg("undefined");
function cL(l) {
  return l !== null && !ih(l) && l.constructor !== null && !ih(l.constructor) && ki(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const iT = zo("ArrayBuffer");
function fL(l) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(l) : s = l && l.buffer && iT(l.buffer), s;
}
const dL = kg("string"), ki = kg("function"), oT = kg("number"), Dg = (l) => l !== null && typeof l == "object", pL = (l) => l === !0 || l === !1, dg = (l) => {
  if (Og(l) !== "object")
    return !1;
  const s = J_(l);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in l) && !(Symbol.iterator in l);
}, vL = zo("Date"), hL = zo("File"), mL = zo("Blob"), yL = zo("FileList"), gL = (l) => Dg(l) && ki(l.pipe), SL = (l) => {
  let s;
  return l && (typeof FormData == "function" && l instanceof FormData || ki(l.append) && ((s = Og(l)) === "formdata" || // detect form-data instance
  s === "object" && ki(l.toString) && l.toString() === "[object FormData]"));
}, wL = zo("URLSearchParams"), [_L, EL, bL, CL] = ["ReadableStream", "Request", "Response", "Headers"].map(zo), xL = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function sh(l, s, { allOwnKeys: d = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let v, m;
  if (typeof l != "object" && (l = [l]), Qd(l))
    for (v = 0, m = l.length; v < m; v++)
      s.call(null, l[v], v, l);
  else {
    const w = d ? Object.getOwnPropertyNames(l) : Object.keys(l), _ = w.length;
    let g;
    for (v = 0; v < _; v++)
      g = w[v], s.call(null, l[g], g, l);
  }
}
function lT(l, s) {
  s = s.toLowerCase();
  const d = Object.keys(l);
  let v = d.length, m;
  for (; v-- > 0; )
    if (m = d[v], s === m.toLowerCase())
      return m;
  return null;
}
const Gc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, uT = (l) => !ih(l) && l !== Gc;
function D_() {
  const { caseless: l } = uT(this) && this || {}, s = {}, d = (v, m) => {
    const w = l && lT(s, m) || m;
    dg(s[w]) && dg(v) ? s[w] = D_(s[w], v) : dg(v) ? s[w] = D_({}, v) : Qd(v) ? s[w] = v.slice() : s[w] = v;
  };
  for (let v = 0, m = arguments.length; v < m; v++)
    arguments[v] && sh(arguments[v], d);
  return s;
}
const RL = (l, s, d, { allOwnKeys: v } = {}) => (sh(s, (m, w) => {
  d && ki(m) ? l[w] = aT(m, d) : l[w] = m;
}, { allOwnKeys: v }), l), TL = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), OL = (l, s, d, v) => {
  l.prototype = Object.create(s.prototype, v), l.prototype.constructor = l, Object.defineProperty(l, "super", {
    value: s.prototype
  }), d && Object.assign(l.prototype, d);
}, kL = (l, s, d, v) => {
  let m, w, _;
  const g = {};
  if (s = s || {}, l == null) return s;
  do {
    for (m = Object.getOwnPropertyNames(l), w = m.length; w-- > 0; )
      _ = m[w], (!v || v(_, l, s)) && !g[_] && (s[_] = l[_], g[_] = !0);
    l = d !== !1 && J_(l);
  } while (l && (!d || d(l, s)) && l !== Object.prototype);
  return s;
}, DL = (l, s, d) => {
  l = String(l), (d === void 0 || d > l.length) && (d = l.length), d -= s.length;
  const v = l.indexOf(s, d);
  return v !== -1 && v === d;
}, AL = (l) => {
  if (!l) return null;
  if (Qd(l)) return l;
  let s = l.length;
  if (!oT(s)) return null;
  const d = new Array(s);
  for (; s-- > 0; )
    d[s] = l[s];
  return d;
}, NL = /* @__PURE__ */ ((l) => (s) => l && s instanceof l)(typeof Uint8Array < "u" && J_(Uint8Array)), LL = (l, s) => {
  const v = (l && l[Symbol.iterator]).call(l);
  let m;
  for (; (m = v.next()) && !m.done; ) {
    const w = m.value;
    s.call(l, w[0], w[1]);
  }
}, ML = (l, s) => {
  let d;
  const v = [];
  for (; (d = l.exec(s)) !== null; )
    v.push(d);
  return v;
}, jL = zo("HTMLFormElement"), UL = (l) => l.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(d, v, m) {
    return v.toUpperCase() + m;
  }
), rR = (({ hasOwnProperty: l }) => (s, d) => l.call(s, d))(Object.prototype), zL = zo("RegExp"), sT = (l, s) => {
  const d = Object.getOwnPropertyDescriptors(l), v = {};
  sh(d, (m, w) => {
    let _;
    (_ = s(m, w, l)) !== !1 && (v[w] = _ || m);
  }), Object.defineProperties(l, v);
}, PL = (l) => {
  sT(l, (s, d) => {
    if (ki(l) && ["arguments", "caller", "callee"].indexOf(d) !== -1)
      return !1;
    const v = l[d];
    if (ki(v)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + d + "'");
      });
    }
  });
}, FL = (l, s) => {
  const d = {}, v = (m) => {
    m.forEach((w) => {
      d[w] = !0;
    });
  };
  return Qd(l) ? v(l) : v(String(l).split(s)), d;
}, HL = () => {
}, BL = (l, s) => l != null && Number.isFinite(l = +l) ? l : s, c_ = "abcdefghijklmnopqrstuvwxyz", aR = "0123456789", cT = {
  DIGIT: aR,
  ALPHA: c_,
  ALPHA_DIGIT: c_ + c_.toUpperCase() + aR
}, VL = (l = 16, s = cT.ALPHA_DIGIT) => {
  let d = "";
  const { length: v } = s;
  for (; l--; )
    d += s[Math.random() * v | 0];
  return d;
};
function IL(l) {
  return !!(l && ki(l.append) && l[Symbol.toStringTag] === "FormData" && l[Symbol.iterator]);
}
const $L = (l) => {
  const s = new Array(10), d = (v, m) => {
    if (Dg(v)) {
      if (s.indexOf(v) >= 0)
        return;
      if (!("toJSON" in v)) {
        s[m] = v;
        const w = Qd(v) ? [] : {};
        return sh(v, (_, g) => {
          const R = d(_, m + 1);
          !ih(R) && (w[g] = R);
        }), s[m] = void 0, w;
      }
    }
    return v;
  };
  return d(l, 0);
}, WL = zo("AsyncFunction"), YL = (l) => l && (Dg(l) || ki(l)) && ki(l.then) && ki(l.catch), fT = ((l, s) => l ? setImmediate : s ? ((d, v) => (Gc.addEventListener("message", ({ source: m, data: w }) => {
  m === Gc && w === d && v.length && v.shift()();
}, !1), (m) => {
  v.push(m), Gc.postMessage(d, "*");
}))(`axios@${Math.random()}`, []) : (d) => setTimeout(d))(
  typeof setImmediate == "function",
  ki(Gc.postMessage)
), qL = typeof queueMicrotask < "u" ? queueMicrotask.bind(Gc) : typeof process < "u" && process.nextTick || fT, fe = {
  isArray: Qd,
  isArrayBuffer: iT,
  isBuffer: cL,
  isFormData: SL,
  isArrayBufferView: fL,
  isString: dL,
  isNumber: oT,
  isBoolean: pL,
  isObject: Dg,
  isPlainObject: dg,
  isReadableStream: _L,
  isRequest: EL,
  isResponse: bL,
  isHeaders: CL,
  isUndefined: ih,
  isDate: vL,
  isFile: hL,
  isBlob: mL,
  isRegExp: zL,
  isFunction: ki,
  isStream: gL,
  isURLSearchParams: wL,
  isTypedArray: NL,
  isFileList: yL,
  forEach: sh,
  merge: D_,
  extend: RL,
  trim: xL,
  stripBOM: TL,
  inherits: OL,
  toFlatObject: kL,
  kindOf: Og,
  kindOfTest: zo,
  endsWith: DL,
  toArray: AL,
  forEachEntry: LL,
  matchAll: ML,
  isHTMLForm: jL,
  hasOwnProperty: rR,
  hasOwnProp: rR,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: sT,
  freezeMethods: PL,
  toObjectSet: FL,
  toCamelCase: UL,
  noop: HL,
  toFiniteNumber: BL,
  findKey: lT,
  global: Gc,
  isContextDefined: uT,
  ALPHABET: cT,
  generateString: VL,
  isSpecCompliantForm: IL,
  toJSONObject: $L,
  isAsyncFn: WL,
  isThenable: YL,
  setImmediate: fT,
  asap: qL
};
function Ht(l, s, d, v, m) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", s && (this.code = s), d && (this.config = d), v && (this.request = v), m && (this.response = m);
}
fe.inherits(Ht, Error, {
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
      config: fe.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const dT = Ht.prototype, pT = {};
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
].forEach((l) => {
  pT[l] = { value: l };
});
Object.defineProperties(Ht, pT);
Object.defineProperty(dT, "isAxiosError", { value: !0 });
Ht.from = (l, s, d, v, m, w) => {
  const _ = Object.create(dT);
  return fe.toFlatObject(l, _, function(R) {
    return R !== Error.prototype;
  }, (g) => g !== "isAxiosError"), Ht.call(_, l.message, s, d, v, m), _.cause = l, _.name = l.name, w && Object.assign(_, w), _;
};
const GL = null;
function A_(l) {
  return fe.isPlainObject(l) || fe.isArray(l);
}
function vT(l) {
  return fe.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function iR(l, s, d) {
  return l ? l.concat(s).map(function(m, w) {
    return m = vT(m), !d && w ? "[" + m + "]" : m;
  }).join(d ? "." : "") : s;
}
function QL(l) {
  return fe.isArray(l) && !l.some(A_);
}
const KL = fe.toFlatObject(fe, {}, null, function(s) {
  return /^is[A-Z]/.test(s);
});
function Ag(l, s, d) {
  if (!fe.isObject(l))
    throw new TypeError("target must be an object");
  s = s || new FormData(), d = fe.toFlatObject(d, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(W, Y) {
    return !fe.isUndefined(Y[W]);
  });
  const v = d.metaTokens, m = d.visitor || D, w = d.dots, _ = d.indexes, R = (d.Blob || typeof Blob < "u" && Blob) && fe.isSpecCompliantForm(s);
  if (!fe.isFunction(m))
    throw new TypeError("visitor must be a function");
  function O(P) {
    if (P === null) return "";
    if (fe.isDate(P))
      return P.toISOString();
    if (!R && fe.isBlob(P))
      throw new Ht("Blob is not supported. Use a Buffer instead.");
    return fe.isArrayBuffer(P) || fe.isTypedArray(P) ? R && typeof Blob == "function" ? new Blob([P]) : Buffer.from(P) : P;
  }
  function D(P, W, Y) {
    let Se = P;
    if (P && !Y && typeof P == "object") {
      if (fe.endsWith(W, "{}"))
        W = v ? W : W.slice(0, -2), P = JSON.stringify(P);
      else if (fe.isArray(P) && QL(P) || (fe.isFileList(P) || fe.endsWith(W, "[]")) && (Se = fe.toArray(P)))
        return W = vT(W), Se.forEach(function(Q, he) {
          !(fe.isUndefined(Q) || Q === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            _ === !0 ? iR([W], he, w) : _ === null ? W : W + "[]",
            O(Q)
          );
        }), !1;
    }
    return A_(P) ? !0 : (s.append(iR(Y, W, w), O(P)), !1);
  }
  const L = [], U = Object.assign(KL, {
    defaultVisitor: D,
    convertValue: O,
    isVisitable: A_
  });
  function H(P, W) {
    if (!fe.isUndefined(P)) {
      if (L.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + W.join("."));
      L.push(P), fe.forEach(P, function(Se, ue) {
        (!(fe.isUndefined(Se) || Se === null) && m.call(
          s,
          Se,
          fe.isString(ue) ? ue.trim() : ue,
          W,
          U
        )) === !0 && H(Se, W ? W.concat(ue) : [ue]);
      }), L.pop();
    }
  }
  if (!fe.isObject(l))
    throw new TypeError("data must be an object");
  return H(l), s;
}
function oR(l) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function(v) {
    return s[v];
  });
}
function Z_(l, s) {
  this._pairs = [], l && Ag(l, this, s);
}
const hT = Z_.prototype;
hT.append = function(s, d) {
  this._pairs.push([s, d]);
};
hT.toString = function(s) {
  const d = s ? function(v) {
    return s.call(this, v, oR);
  } : oR;
  return this._pairs.map(function(m) {
    return d(m[0]) + "=" + d(m[1]);
  }, "").join("&");
};
function XL(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function mT(l, s, d) {
  if (!s)
    return l;
  const v = d && d.encode || XL, m = d && d.serialize;
  let w;
  if (m ? w = m(s, d) : w = fe.isURLSearchParams(s) ? s.toString() : new Z_(s, d).toString(v), w) {
    const _ = l.indexOf("#");
    _ !== -1 && (l = l.slice(0, _)), l += (l.indexOf("?") === -1 ? "?" : "&") + w;
  }
  return l;
}
class lR {
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
  use(s, d, v) {
    return this.handlers.push({
      fulfilled: s,
      rejected: d,
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
  eject(s) {
    this.handlers[s] && (this.handlers[s] = null);
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
  forEach(s) {
    fe.forEach(this.handlers, function(v) {
      v !== null && s(v);
    });
  }
}
const yT = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, JL = typeof URLSearchParams < "u" ? URLSearchParams : Z_, ZL = typeof FormData < "u" ? FormData : null, eM = typeof Blob < "u" ? Blob : null, tM = {
  isBrowser: !0,
  classes: {
    URLSearchParams: JL,
    FormData: ZL,
    Blob: eM
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, eE = typeof window < "u" && typeof document < "u", nM = ((l) => eE && ["ReactNative", "NativeScript", "NS"].indexOf(l) < 0)(typeof navigator < "u" && navigator.product), rM = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", aM = eE && window.location.href || "http://localhost", iM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: eE,
  hasStandardBrowserEnv: nM,
  hasStandardBrowserWebWorkerEnv: rM,
  origin: aM
}, Symbol.toStringTag, { value: "Module" })), Mo = {
  ...iM,
  ...tM
};
function oM(l, s) {
  return Ag(l, new Mo.classes.URLSearchParams(), Object.assign({
    visitor: function(d, v, m, w) {
      return Mo.isNode && fe.isBuffer(d) ? (this.append(v, d.toString("base64")), !1) : w.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function lM(l) {
  return fe.matchAll(/\w+|\[(\w*)]/g, l).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function uM(l) {
  const s = {}, d = Object.keys(l);
  let v;
  const m = d.length;
  let w;
  for (v = 0; v < m; v++)
    w = d[v], s[w] = l[w];
  return s;
}
function gT(l) {
  function s(d, v, m, w) {
    let _ = d[w++];
    if (_ === "__proto__") return !0;
    const g = Number.isFinite(+_), R = w >= d.length;
    return _ = !_ && fe.isArray(m) ? m.length : _, R ? (fe.hasOwnProp(m, _) ? m[_] = [m[_], v] : m[_] = v, !g) : ((!m[_] || !fe.isObject(m[_])) && (m[_] = []), s(d, v, m[_], w) && fe.isArray(m[_]) && (m[_] = uM(m[_])), !g);
  }
  if (fe.isFormData(l) && fe.isFunction(l.entries)) {
    const d = {};
    return fe.forEachEntry(l, (v, m) => {
      s(lM(v), m, d, 0);
    }), d;
  }
  return null;
}
function sM(l, s, d) {
  if (fe.isString(l))
    try {
      return (s || JSON.parse)(l), fe.trim(l);
    } catch (v) {
      if (v.name !== "SyntaxError")
        throw v;
    }
  return (d || JSON.stringify)(l);
}
const ch = {
  transitional: yT,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(s, d) {
    const v = d.getContentType() || "", m = v.indexOf("application/json") > -1, w = fe.isObject(s);
    if (w && fe.isHTMLForm(s) && (s = new FormData(s)), fe.isFormData(s))
      return m ? JSON.stringify(gT(s)) : s;
    if (fe.isArrayBuffer(s) || fe.isBuffer(s) || fe.isStream(s) || fe.isFile(s) || fe.isBlob(s) || fe.isReadableStream(s))
      return s;
    if (fe.isArrayBufferView(s))
      return s.buffer;
    if (fe.isURLSearchParams(s))
      return d.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), s.toString();
    let g;
    if (w) {
      if (v.indexOf("application/x-www-form-urlencoded") > -1)
        return oM(s, this.formSerializer).toString();
      if ((g = fe.isFileList(s)) || v.indexOf("multipart/form-data") > -1) {
        const R = this.env && this.env.FormData;
        return Ag(
          g ? { "files[]": s } : s,
          R && new R(),
          this.formSerializer
        );
      }
    }
    return w || m ? (d.setContentType("application/json", !1), sM(s)) : s;
  }],
  transformResponse: [function(s) {
    const d = this.transitional || ch.transitional, v = d && d.forcedJSONParsing, m = this.responseType === "json";
    if (fe.isResponse(s) || fe.isReadableStream(s))
      return s;
    if (s && fe.isString(s) && (v && !this.responseType || m)) {
      const _ = !(d && d.silentJSONParsing) && m;
      try {
        return JSON.parse(s);
      } catch (g) {
        if (_)
          throw g.name === "SyntaxError" ? Ht.from(g, Ht.ERR_BAD_RESPONSE, this, null, this.response) : g;
      }
    }
    return s;
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
    FormData: Mo.classes.FormData,
    Blob: Mo.classes.Blob
  },
  validateStatus: function(s) {
    return s >= 200 && s < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
fe.forEach(["delete", "get", "head", "post", "put", "patch"], (l) => {
  ch.headers[l] = {};
});
const cM = fe.toObjectSet([
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
]), fM = (l) => {
  const s = {};
  let d, v, m;
  return l && l.split(`
`).forEach(function(_) {
    m = _.indexOf(":"), d = _.substring(0, m).trim().toLowerCase(), v = _.substring(m + 1).trim(), !(!d || s[d] && cM[d]) && (d === "set-cookie" ? s[d] ? s[d].push(v) : s[d] = [v] : s[d] = s[d] ? s[d] + ", " + v : v);
  }), s;
}, uR = Symbol("internals");
function th(l) {
  return l && String(l).trim().toLowerCase();
}
function pg(l) {
  return l === !1 || l == null ? l : fe.isArray(l) ? l.map(pg) : String(l);
}
function dM(l) {
  const s = /* @__PURE__ */ Object.create(null), d = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let v;
  for (; v = d.exec(l); )
    s[v[1]] = v[2];
  return s;
}
const pM = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function f_(l, s, d, v, m) {
  if (fe.isFunction(v))
    return v.call(this, s, d);
  if (m && (s = d), !!fe.isString(s)) {
    if (fe.isString(v))
      return s.indexOf(v) !== -1;
    if (fe.isRegExp(v))
      return v.test(s);
  }
}
function vM(l) {
  return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, d, v) => d.toUpperCase() + v);
}
function hM(l, s) {
  const d = fe.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((v) => {
    Object.defineProperty(l, v + d, {
      value: function(m, w, _) {
        return this[v].call(this, s, m, w, _);
      },
      configurable: !0
    });
  });
}
class mi {
  constructor(s) {
    s && this.set(s);
  }
  set(s, d, v) {
    const m = this;
    function w(g, R, O) {
      const D = th(R);
      if (!D)
        throw new Error("header name must be a non-empty string");
      const L = fe.findKey(m, D);
      (!L || m[L] === void 0 || O === !0 || O === void 0 && m[L] !== !1) && (m[L || R] = pg(g));
    }
    const _ = (g, R) => fe.forEach(g, (O, D) => w(O, D, R));
    if (fe.isPlainObject(s) || s instanceof this.constructor)
      _(s, d);
    else if (fe.isString(s) && (s = s.trim()) && !pM(s))
      _(fM(s), d);
    else if (fe.isHeaders(s))
      for (const [g, R] of s.entries())
        w(R, g, v);
    else
      s != null && w(d, s, v);
    return this;
  }
  get(s, d) {
    if (s = th(s), s) {
      const v = fe.findKey(this, s);
      if (v) {
        const m = this[v];
        if (!d)
          return m;
        if (d === !0)
          return dM(m);
        if (fe.isFunction(d))
          return d.call(this, m, v);
        if (fe.isRegExp(d))
          return d.exec(m);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, d) {
    if (s = th(s), s) {
      const v = fe.findKey(this, s);
      return !!(v && this[v] !== void 0 && (!d || f_(this, this[v], v, d)));
    }
    return !1;
  }
  delete(s, d) {
    const v = this;
    let m = !1;
    function w(_) {
      if (_ = th(_), _) {
        const g = fe.findKey(v, _);
        g && (!d || f_(v, v[g], g, d)) && (delete v[g], m = !0);
      }
    }
    return fe.isArray(s) ? s.forEach(w) : w(s), m;
  }
  clear(s) {
    const d = Object.keys(this);
    let v = d.length, m = !1;
    for (; v--; ) {
      const w = d[v];
      (!s || f_(this, this[w], w, s, !0)) && (delete this[w], m = !0);
    }
    return m;
  }
  normalize(s) {
    const d = this, v = {};
    return fe.forEach(this, (m, w) => {
      const _ = fe.findKey(v, w);
      if (_) {
        d[_] = pg(m), delete d[w];
        return;
      }
      const g = s ? vM(w) : String(w).trim();
      g !== w && delete d[w], d[g] = pg(m), v[g] = !0;
    }), this;
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const d = /* @__PURE__ */ Object.create(null);
    return fe.forEach(this, (v, m) => {
      v != null && v !== !1 && (d[m] = s && fe.isArray(v) ? v.join(", ") : v);
    }), d;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, d]) => s + ": " + d).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...d) {
    const v = new this(s);
    return d.forEach((m) => v.set(m)), v;
  }
  static accessor(s) {
    const v = (this[uR] = this[uR] = {
      accessors: {}
    }).accessors, m = this.prototype;
    function w(_) {
      const g = th(_);
      v[g] || (hM(m, _), v[g] = !0);
    }
    return fe.isArray(s) ? s.forEach(w) : w(s), this;
  }
}
mi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
fe.reduceDescriptors(mi.prototype, ({ value: l }, s) => {
  let d = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => l,
    set(v) {
      this[d] = v;
    }
  };
});
fe.freezeMethods(mi);
function d_(l, s) {
  const d = this || ch, v = s || d, m = mi.from(v.headers);
  let w = v.data;
  return fe.forEach(l, function(g) {
    w = g.call(d, w, m.normalize(), s ? s.status : void 0);
  }), m.normalize(), w;
}
function ST(l) {
  return !!(l && l.__CANCEL__);
}
function Kd(l, s, d) {
  Ht.call(this, l ?? "canceled", Ht.ERR_CANCELED, s, d), this.name = "CanceledError";
}
fe.inherits(Kd, Ht, {
  __CANCEL__: !0
});
function wT(l, s, d) {
  const v = d.config.validateStatus;
  !d.status || !v || v(d.status) ? l(d) : s(new Ht(
    "Request failed with status code " + d.status,
    [Ht.ERR_BAD_REQUEST, Ht.ERR_BAD_RESPONSE][Math.floor(d.status / 100) - 4],
    d.config,
    d.request,
    d
  ));
}
function mM(l) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return s && s[1] || "";
}
function yM(l, s) {
  l = l || 10;
  const d = new Array(l), v = new Array(l);
  let m = 0, w = 0, _;
  return s = s !== void 0 ? s : 1e3, function(R) {
    const O = Date.now(), D = v[w];
    _ || (_ = O), d[m] = R, v[m] = O;
    let L = w, U = 0;
    for (; L !== m; )
      U += d[L++], L = L % l;
    if (m = (m + 1) % l, m === w && (w = (w + 1) % l), O - _ < s)
      return;
    const H = D && O - D;
    return H ? Math.round(U * 1e3 / H) : void 0;
  };
}
function gM(l, s) {
  let d = 0, v = 1e3 / s, m, w;
  const _ = (O, D = Date.now()) => {
    d = D, m = null, w && (clearTimeout(w), w = null), l.apply(null, O);
  };
  return [(...O) => {
    const D = Date.now(), L = D - d;
    L >= v ? _(O, D) : (m = O, w || (w = setTimeout(() => {
      w = null, _(m);
    }, v - L)));
  }, () => m && _(m)];
}
const yg = (l, s, d = 3) => {
  let v = 0;
  const m = yM(50, 250);
  return gM((w) => {
    const _ = w.loaded, g = w.lengthComputable ? w.total : void 0, R = _ - v, O = m(R), D = _ <= g;
    v = _;
    const L = {
      loaded: _,
      total: g,
      progress: g ? _ / g : void 0,
      bytes: R,
      rate: O || void 0,
      estimated: O && g && D ? (g - _) / O : void 0,
      event: w,
      lengthComputable: g != null,
      [s ? "download" : "upload"]: !0
    };
    l(L);
  }, d);
}, sR = (l, s) => {
  const d = l != null;
  return [(v) => s[0]({
    lengthComputable: d,
    total: l,
    loaded: v
  }), s[1]];
}, cR = (l) => (...s) => fe.asap(() => l(...s)), SM = Mo.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const s = /(msie|trident)/i.test(navigator.userAgent), d = document.createElement("a");
    let v;
    function m(w) {
      let _ = w;
      return s && (d.setAttribute("href", _), _ = d.href), d.setAttribute("href", _), {
        href: d.href,
        protocol: d.protocol ? d.protocol.replace(/:$/, "") : "",
        host: d.host,
        search: d.search ? d.search.replace(/^\?/, "") : "",
        hash: d.hash ? d.hash.replace(/^#/, "") : "",
        hostname: d.hostname,
        port: d.port,
        pathname: d.pathname.charAt(0) === "/" ? d.pathname : "/" + d.pathname
      };
    }
    return v = m(window.location.href), function(_) {
      const g = fe.isString(_) ? m(_) : _;
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
), wM = Mo.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(l, s, d, v, m, w) {
      const _ = [l + "=" + encodeURIComponent(s)];
      fe.isNumber(d) && _.push("expires=" + new Date(d).toGMTString()), fe.isString(v) && _.push("path=" + v), fe.isString(m) && _.push("domain=" + m), w === !0 && _.push("secure"), document.cookie = _.join("; ");
    },
    read(l) {
      const s = document.cookie.match(new RegExp("(^|;\\s*)(" + l + ")=([^;]*)"));
      return s ? decodeURIComponent(s[3]) : null;
    },
    remove(l) {
      this.write(l, "", Date.now() - 864e5);
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
function _M(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function EM(l, s) {
  return s ? l.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : l;
}
function _T(l, s) {
  return l && !_M(s) ? EM(l, s) : s;
}
const fR = (l) => l instanceof mi ? { ...l } : l;
function ef(l, s) {
  s = s || {};
  const d = {};
  function v(O, D, L) {
    return fe.isPlainObject(O) && fe.isPlainObject(D) ? fe.merge.call({ caseless: L }, O, D) : fe.isPlainObject(D) ? fe.merge({}, D) : fe.isArray(D) ? D.slice() : D;
  }
  function m(O, D, L) {
    if (fe.isUndefined(D)) {
      if (!fe.isUndefined(O))
        return v(void 0, O, L);
    } else return v(O, D, L);
  }
  function w(O, D) {
    if (!fe.isUndefined(D))
      return v(void 0, D);
  }
  function _(O, D) {
    if (fe.isUndefined(D)) {
      if (!fe.isUndefined(O))
        return v(void 0, O);
    } else return v(void 0, D);
  }
  function g(O, D, L) {
    if (L in s)
      return v(O, D);
    if (L in l)
      return v(void 0, O);
  }
  const R = {
    url: w,
    method: w,
    data: w,
    baseURL: _,
    transformRequest: _,
    transformResponse: _,
    paramsSerializer: _,
    timeout: _,
    timeoutMessage: _,
    withCredentials: _,
    withXSRFToken: _,
    adapter: _,
    responseType: _,
    xsrfCookieName: _,
    xsrfHeaderName: _,
    onUploadProgress: _,
    onDownloadProgress: _,
    decompress: _,
    maxContentLength: _,
    maxBodyLength: _,
    beforeRedirect: _,
    transport: _,
    httpAgent: _,
    httpsAgent: _,
    cancelToken: _,
    socketPath: _,
    responseEncoding: _,
    validateStatus: g,
    headers: (O, D) => m(fR(O), fR(D), !0)
  };
  return fe.forEach(Object.keys(Object.assign({}, l, s)), function(D) {
    const L = R[D] || m, U = L(l[D], s[D], D);
    fe.isUndefined(U) && L !== g || (d[D] = U);
  }), d;
}
const ET = (l) => {
  const s = ef({}, l);
  let { data: d, withXSRFToken: v, xsrfHeaderName: m, xsrfCookieName: w, headers: _, auth: g } = s;
  s.headers = _ = mi.from(_), s.url = mT(_T(s.baseURL, s.url), l.params, l.paramsSerializer), g && _.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  );
  let R;
  if (fe.isFormData(d)) {
    if (Mo.hasStandardBrowserEnv || Mo.hasStandardBrowserWebWorkerEnv)
      _.setContentType(void 0);
    else if ((R = _.getContentType()) !== !1) {
      const [O, ...D] = R ? R.split(";").map((L) => L.trim()).filter(Boolean) : [];
      _.setContentType([O || "multipart/form-data", ...D].join("; "));
    }
  }
  if (Mo.hasStandardBrowserEnv && (v && fe.isFunction(v) && (v = v(s)), v || v !== !1 && SM(s.url))) {
    const O = m && w && wM.read(w);
    O && _.set(m, O);
  }
  return s;
}, bM = typeof XMLHttpRequest < "u", CM = bM && function(l) {
  return new Promise(function(d, v) {
    const m = ET(l);
    let w = m.data;
    const _ = mi.from(m.headers).normalize();
    let { responseType: g, onUploadProgress: R, onDownloadProgress: O } = m, D, L, U, H, P;
    function W() {
      H && H(), P && P(), m.cancelToken && m.cancelToken.unsubscribe(D), m.signal && m.signal.removeEventListener("abort", D);
    }
    let Y = new XMLHttpRequest();
    Y.open(m.method.toUpperCase(), m.url, !0), Y.timeout = m.timeout;
    function Se() {
      if (!Y)
        return;
      const Q = mi.from(
        "getAllResponseHeaders" in Y && Y.getAllResponseHeaders()
      ), G = {
        data: !g || g === "text" || g === "json" ? Y.responseText : Y.response,
        status: Y.status,
        statusText: Y.statusText,
        headers: Q,
        config: l,
        request: Y
      };
      wT(function(He) {
        d(He), W();
      }, function(He) {
        v(He), W();
      }, G), Y = null;
    }
    "onloadend" in Y ? Y.onloadend = Se : Y.onreadystatechange = function() {
      !Y || Y.readyState !== 4 || Y.status === 0 && !(Y.responseURL && Y.responseURL.indexOf("file:") === 0) || setTimeout(Se);
    }, Y.onabort = function() {
      Y && (v(new Ht("Request aborted", Ht.ECONNABORTED, l, Y)), Y = null);
    }, Y.onerror = function() {
      v(new Ht("Network Error", Ht.ERR_NETWORK, l, Y)), Y = null;
    }, Y.ontimeout = function() {
      let he = m.timeout ? "timeout of " + m.timeout + "ms exceeded" : "timeout exceeded";
      const G = m.transitional || yT;
      m.timeoutErrorMessage && (he = m.timeoutErrorMessage), v(new Ht(
        he,
        G.clarifyTimeoutError ? Ht.ETIMEDOUT : Ht.ECONNABORTED,
        l,
        Y
      )), Y = null;
    }, w === void 0 && _.setContentType(null), "setRequestHeader" in Y && fe.forEach(_.toJSON(), function(he, G) {
      Y.setRequestHeader(G, he);
    }), fe.isUndefined(m.withCredentials) || (Y.withCredentials = !!m.withCredentials), g && g !== "json" && (Y.responseType = m.responseType), O && ([U, P] = yg(O, !0), Y.addEventListener("progress", U)), R && Y.upload && ([L, H] = yg(R), Y.upload.addEventListener("progress", L), Y.upload.addEventListener("loadend", H)), (m.cancelToken || m.signal) && (D = (Q) => {
      Y && (v(!Q || Q.type ? new Kd(null, l, Y) : Q), Y.abort(), Y = null);
    }, m.cancelToken && m.cancelToken.subscribe(D), m.signal && (m.signal.aborted ? D() : m.signal.addEventListener("abort", D)));
    const ue = mM(m.url);
    if (ue && Mo.protocols.indexOf(ue) === -1) {
      v(new Ht("Unsupported protocol " + ue + ":", Ht.ERR_BAD_REQUEST, l));
      return;
    }
    Y.send(w || null);
  });
}, xM = (l, s) => {
  let d = new AbortController(), v;
  const m = function(R) {
    if (!v) {
      v = !0, _();
      const O = R instanceof Error ? R : this.reason;
      d.abort(O instanceof Ht ? O : new Kd(O instanceof Error ? O.message : O));
    }
  };
  let w = s && setTimeout(() => {
    m(new Ht(`timeout ${s} of ms exceeded`, Ht.ETIMEDOUT));
  }, s);
  const _ = () => {
    l && (w && clearTimeout(w), w = null, l.forEach((R) => {
      R && (R.removeEventListener ? R.removeEventListener("abort", m) : R.unsubscribe(m));
    }), l = null);
  };
  l.forEach((R) => R && R.addEventListener && R.addEventListener("abort", m));
  const { signal: g } = d;
  return g.unsubscribe = _, [g, () => {
    w && clearTimeout(w), w = null;
  }];
}, RM = function* (l, s) {
  let d = l.byteLength;
  if (!s || d < s) {
    yield l;
    return;
  }
  let v = 0, m;
  for (; v < d; )
    m = v + s, yield l.slice(v, m), v = m;
}, TM = async function* (l, s, d) {
  for await (const v of l)
    yield* RM(ArrayBuffer.isView(v) ? v : await d(String(v)), s);
}, dR = (l, s, d, v, m) => {
  const w = TM(l, s, m);
  let _ = 0, g, R = (O) => {
    g || (g = !0, v && v(O));
  };
  return new ReadableStream({
    async pull(O) {
      try {
        const { done: D, value: L } = await w.next();
        if (D) {
          R(), O.close();
          return;
        }
        let U = L.byteLength;
        if (d) {
          let H = _ += U;
          d(H);
        }
        O.enqueue(new Uint8Array(L));
      } catch (D) {
        throw R(D), D;
      }
    },
    cancel(O) {
      return R(O), w.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ng = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", bT = Ng && typeof ReadableStream == "function", N_ = Ng && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((l) => (s) => l.encode(s))(new TextEncoder()) : async (l) => new Uint8Array(await new Response(l).arrayBuffer())), CT = (l, ...s) => {
  try {
    return !!l(...s);
  } catch {
    return !1;
  }
}, OM = bT && CT(() => {
  let l = !1;
  const s = new Request(Mo.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return l = !0, "half";
    }
  }).headers.has("Content-Type");
  return l && !s;
}), pR = 64 * 1024, L_ = bT && CT(() => fe.isReadableStream(new Response("").body)), gg = {
  stream: L_ && ((l) => l.body)
};
Ng && ((l) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !gg[s] && (gg[s] = fe.isFunction(l[s]) ? (d) => d[s]() : (d, v) => {
      throw new Ht(`Response type '${s}' is not supported`, Ht.ERR_NOT_SUPPORT, v);
    });
  });
})(new Response());
const kM = async (l) => {
  if (l == null)
    return 0;
  if (fe.isBlob(l))
    return l.size;
  if (fe.isSpecCompliantForm(l))
    return (await new Request(l).arrayBuffer()).byteLength;
  if (fe.isArrayBufferView(l) || fe.isArrayBuffer(l))
    return l.byteLength;
  if (fe.isURLSearchParams(l) && (l = l + ""), fe.isString(l))
    return (await N_(l)).byteLength;
}, DM = async (l, s) => {
  const d = fe.toFiniteNumber(l.getContentLength());
  return d ?? kM(s);
}, AM = Ng && (async (l) => {
  let {
    url: s,
    method: d,
    data: v,
    signal: m,
    cancelToken: w,
    timeout: _,
    onDownloadProgress: g,
    onUploadProgress: R,
    responseType: O,
    headers: D,
    withCredentials: L = "same-origin",
    fetchOptions: U
  } = ET(l);
  O = O ? (O + "").toLowerCase() : "text";
  let [H, P] = m || w || _ ? xM([m, w], _) : [], W, Y;
  const Se = () => {
    !W && setTimeout(() => {
      H && H.unsubscribe();
    }), W = !0;
  };
  let ue;
  try {
    if (R && OM && d !== "get" && d !== "head" && (ue = await DM(D, v)) !== 0) {
      let we = new Request(s, {
        method: "POST",
        body: v,
        duplex: "half"
      }), He;
      if (fe.isFormData(v) && (He = we.headers.get("content-type")) && D.setContentType(He), we.body) {
        const [q, be] = sR(
          ue,
          yg(cR(R))
        );
        v = dR(we.body, pR, q, be, N_);
      }
    }
    fe.isString(L) || (L = L ? "include" : "omit"), Y = new Request(s, {
      ...U,
      signal: H,
      method: d.toUpperCase(),
      headers: D.normalize().toJSON(),
      body: v,
      duplex: "half",
      credentials: L
    });
    let Q = await fetch(Y);
    const he = L_ && (O === "stream" || O === "response");
    if (L_ && (g || he)) {
      const we = {};
      ["status", "statusText", "headers"].forEach((Oe) => {
        we[Oe] = Q[Oe];
      });
      const He = fe.toFiniteNumber(Q.headers.get("content-length")), [q, be] = g && sR(
        He,
        yg(cR(g), !0)
      ) || [];
      Q = new Response(
        dR(Q.body, pR, q, () => {
          be && be(), he && Se();
        }, N_),
        we
      );
    }
    O = O || "text";
    let G = await gg[fe.findKey(gg, O) || "text"](Q, l);
    return !he && Se(), P && P(), await new Promise((we, He) => {
      wT(we, He, {
        data: G,
        headers: mi.from(Q.headers),
        status: Q.status,
        statusText: Q.statusText,
        config: l,
        request: Y
      });
    });
  } catch (Q) {
    throw Se(), Q && Q.name === "TypeError" && /fetch/i.test(Q.message) ? Object.assign(
      new Ht("Network Error", Ht.ERR_NETWORK, l, Y),
      {
        cause: Q.cause || Q
      }
    ) : Ht.from(Q, Q && Q.code, l, Y);
  }
}), M_ = {
  http: GL,
  xhr: CM,
  fetch: AM
};
fe.forEach(M_, (l, s) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: s });
    } catch {
    }
    Object.defineProperty(l, "adapterName", { value: s });
  }
});
const vR = (l) => `- ${l}`, NM = (l) => fe.isFunction(l) || l === null || l === !1, xT = {
  getAdapter: (l) => {
    l = fe.isArray(l) ? l : [l];
    const { length: s } = l;
    let d, v;
    const m = {};
    for (let w = 0; w < s; w++) {
      d = l[w];
      let _;
      if (v = d, !NM(d) && (v = M_[(_ = String(d)).toLowerCase()], v === void 0))
        throw new Ht(`Unknown adapter '${_}'`);
      if (v)
        break;
      m[_ || "#" + w] = v;
    }
    if (!v) {
      const w = Object.entries(m).map(
        ([g, R]) => `adapter ${g} ` + (R === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let _ = s ? w.length > 1 ? `since :
` + w.map(vR).join(`
`) : " " + vR(w[0]) : "as no adapter specified";
      throw new Ht(
        "There is no suitable adapter to dispatch the request " + _,
        "ERR_NOT_SUPPORT"
      );
    }
    return v;
  },
  adapters: M_
};
function p_(l) {
  if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new Kd(null, l);
}
function hR(l) {
  return p_(l), l.headers = mi.from(l.headers), l.data = d_.call(
    l,
    l.transformRequest
  ), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), xT.getAdapter(l.adapter || ch.adapter)(l).then(function(v) {
    return p_(l), v.data = d_.call(
      l,
      l.transformResponse,
      v
    ), v.headers = mi.from(v.headers), v;
  }, function(v) {
    return ST(v) || (p_(l), v && v.response && (v.response.data = d_.call(
      l,
      l.transformResponse,
      v.response
    ), v.response.headers = mi.from(v.response.headers))), Promise.reject(v);
  });
}
const RT = "1.7.4", tE = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, s) => {
  tE[l] = function(v) {
    return typeof v === l || "a" + (s < 1 ? "n " : " ") + l;
  };
});
const mR = {};
tE.transitional = function(s, d, v) {
  function m(w, _) {
    return "[Axios v" + RT + "] Transitional option '" + w + "'" + _ + (v ? ". " + v : "");
  }
  return (w, _, g) => {
    if (s === !1)
      throw new Ht(
        m(_, " has been removed" + (d ? " in " + d : "")),
        Ht.ERR_DEPRECATED
      );
    return d && !mR[_] && (mR[_] = !0, console.warn(
      m(
        _,
        " has been deprecated since v" + d + " and will be removed in the near future"
      )
    )), s ? s(w, _, g) : !0;
  };
};
function LM(l, s, d) {
  if (typeof l != "object")
    throw new Ht("options must be an object", Ht.ERR_BAD_OPTION_VALUE);
  const v = Object.keys(l);
  let m = v.length;
  for (; m-- > 0; ) {
    const w = v[m], _ = s[w];
    if (_) {
      const g = l[w], R = g === void 0 || _(g, w, l);
      if (R !== !0)
        throw new Ht("option " + w + " must be " + R, Ht.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (d !== !0)
      throw new Ht("Unknown option " + w, Ht.ERR_BAD_OPTION);
  }
}
const j_ = {
  assertOptions: LM,
  validators: tE
}, _s = j_.validators;
class Qc {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new lR(),
      response: new lR()
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
  async request(s, d) {
    try {
      return await this._request(s, d);
    } catch (v) {
      if (v instanceof Error) {
        let m;
        Error.captureStackTrace ? Error.captureStackTrace(m = {}) : m = new Error();
        const w = m.stack ? m.stack.replace(/^.+\n/, "") : "";
        try {
          v.stack ? w && !String(v.stack).endsWith(w.replace(/^.+\n.+\n/, "")) && (v.stack += `
` + w) : v.stack = w;
        } catch {
        }
      }
      throw v;
    }
  }
  _request(s, d) {
    typeof s == "string" ? (d = d || {}, d.url = s) : d = s || {}, d = ef(this.defaults, d);
    const { transitional: v, paramsSerializer: m, headers: w } = d;
    v !== void 0 && j_.assertOptions(v, {
      silentJSONParsing: _s.transitional(_s.boolean),
      forcedJSONParsing: _s.transitional(_s.boolean),
      clarifyTimeoutError: _s.transitional(_s.boolean)
    }, !1), m != null && (fe.isFunction(m) ? d.paramsSerializer = {
      serialize: m
    } : j_.assertOptions(m, {
      encode: _s.function,
      serialize: _s.function
    }, !0)), d.method = (d.method || this.defaults.method || "get").toLowerCase();
    let _ = w && fe.merge(
      w.common,
      w[d.method]
    );
    w && fe.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (P) => {
        delete w[P];
      }
    ), d.headers = mi.concat(_, w);
    const g = [];
    let R = !0;
    this.interceptors.request.forEach(function(W) {
      typeof W.runWhen == "function" && W.runWhen(d) === !1 || (R = R && W.synchronous, g.unshift(W.fulfilled, W.rejected));
    });
    const O = [];
    this.interceptors.response.forEach(function(W) {
      O.push(W.fulfilled, W.rejected);
    });
    let D, L = 0, U;
    if (!R) {
      const P = [hR.bind(this), void 0];
      for (P.unshift.apply(P, g), P.push.apply(P, O), U = P.length, D = Promise.resolve(d); L < U; )
        D = D.then(P[L++], P[L++]);
      return D;
    }
    U = g.length;
    let H = d;
    for (L = 0; L < U; ) {
      const P = g[L++], W = g[L++];
      try {
        H = P(H);
      } catch (Y) {
        W.call(this, Y);
        break;
      }
    }
    try {
      D = hR.call(this, H);
    } catch (P) {
      return Promise.reject(P);
    }
    for (L = 0, U = O.length; L < U; )
      D = D.then(O[L++], O[L++]);
    return D;
  }
  getUri(s) {
    s = ef(this.defaults, s);
    const d = _T(s.baseURL, s.url);
    return mT(d, s.params, s.paramsSerializer);
  }
}
fe.forEach(["delete", "get", "head", "options"], function(s) {
  Qc.prototype[s] = function(d, v) {
    return this.request(ef(v || {}, {
      method: s,
      url: d,
      data: (v || {}).data
    }));
  };
});
fe.forEach(["post", "put", "patch"], function(s) {
  function d(v) {
    return function(w, _, g) {
      return this.request(ef(g || {}, {
        method: s,
        headers: v ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: w,
        data: _
      }));
    };
  }
  Qc.prototype[s] = d(), Qc.prototype[s + "Form"] = d(!0);
});
class nE {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let d;
    this.promise = new Promise(function(w) {
      d = w;
    });
    const v = this;
    this.promise.then((m) => {
      if (!v._listeners) return;
      let w = v._listeners.length;
      for (; w-- > 0; )
        v._listeners[w](m);
      v._listeners = null;
    }), this.promise.then = (m) => {
      let w;
      const _ = new Promise((g) => {
        v.subscribe(g), w = g;
      }).then(m);
      return _.cancel = function() {
        v.unsubscribe(w);
      }, _;
    }, s(function(w, _, g) {
      v.reason || (v.reason = new Kd(w, _, g), d(v.reason));
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
  subscribe(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(s) {
    if (!this._listeners)
      return;
    const d = this._listeners.indexOf(s);
    d !== -1 && this._listeners.splice(d, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let s;
    return {
      token: new nE(function(m) {
        s = m;
      }),
      cancel: s
    };
  }
}
function MM(l) {
  return function(d) {
    return l.apply(null, d);
  };
}
function jM(l) {
  return fe.isObject(l) && l.isAxiosError === !0;
}
const U_ = {
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
Object.entries(U_).forEach(([l, s]) => {
  U_[s] = l;
});
function TT(l) {
  const s = new Qc(l), d = aT(Qc.prototype.request, s);
  return fe.extend(d, Qc.prototype, s, { allOwnKeys: !0 }), fe.extend(d, s, null, { allOwnKeys: !0 }), d.create = function(m) {
    return TT(ef(l, m));
  }, d;
}
const Zn = TT(ch);
Zn.Axios = Qc;
Zn.CanceledError = Kd;
Zn.CancelToken = nE;
Zn.isCancel = ST;
Zn.VERSION = RT;
Zn.toFormData = Ag;
Zn.AxiosError = Ht;
Zn.Cancel = Zn.CanceledError;
Zn.all = function(s) {
  return Promise.all(s);
};
Zn.spread = MM;
Zn.isAxiosError = jM;
Zn.mergeConfig = ef;
Zn.AxiosHeaders = mi;
Zn.formToJSON = (l) => gT(fe.isHTMLForm(l) ? new FormData(l) : l);
Zn.getAdapter = xT.getAdapter;
Zn.HttpStatusCode = U_;
Zn.default = Zn;
let UM = { data: "" }, zM = (l) => typeof window == "object" ? ((l ? l.querySelector("#_goober") : window._goober) || Object.assign((l || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : l || UM, PM = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, FM = /\/\*[^]*?\*\/|  +/g, yR = /\n+/g, bs = (l, s) => {
  let d = "", v = "", m = "";
  for (let w in l) {
    let _ = l[w];
    w[0] == "@" ? w[1] == "i" ? d = w + " " + _ + ";" : v += w[1] == "f" ? bs(_, w) : w + "{" + bs(_, w[1] == "k" ? "" : s) + "}" : typeof _ == "object" ? v += bs(_, s ? s.replace(/([^,])+/g, (g) => w.replace(/(^:.*)|([^,])+/g, (R) => /&/.test(R) ? R.replace(/&/g, g) : g ? g + " " + R : R)) : w) : _ != null && (w = /^--/.test(w) ? w : w.replace(/[A-Z]/g, "-$&").toLowerCase(), m += bs.p ? bs.p(w, _) : w + ":" + _ + ";");
  }
  return d + (s && m ? s + "{" + m + "}" : m) + v;
}, du = {}, OT = (l) => {
  if (typeof l == "object") {
    let s = "";
    for (let d in l) s += d + OT(l[d]);
    return s;
  }
  return l;
}, HM = (l, s, d, v, m) => {
  let w = OT(l), _ = du[w] || (du[w] = ((R) => {
    let O = 0, D = 11;
    for (; O < R.length; ) D = 101 * D + R.charCodeAt(O++) >>> 0;
    return "go" + D;
  })(w));
  if (!du[_]) {
    let R = w !== l ? l : ((O) => {
      let D, L, U = [{}];
      for (; D = PM.exec(O.replace(FM, "")); ) D[4] ? U.shift() : D[3] ? (L = D[3].replace(yR, " ").trim(), U.unshift(U[0][L] = U[0][L] || {})) : U[0][D[1]] = D[2].replace(yR, " ").trim();
      return U[0];
    })(l);
    du[_] = bs(m ? { ["@keyframes " + _]: R } : R, d ? "" : "." + _);
  }
  let g = d && du.g ? du.g : null;
  return d && (du.g = du[_]), ((R, O, D, L) => {
    L ? O.data = O.data.replace(L, R) : O.data.indexOf(R) === -1 && (O.data = D ? R + O.data : O.data + R);
  })(du[_], s, v, g), _;
}, BM = (l, s, d) => l.reduce((v, m, w) => {
  let _ = s[w];
  if (_ && _.call) {
    let g = _(d), R = g && g.props && g.props.className || /^go/.test(g) && g;
    _ = R ? "." + R : g && typeof g == "object" ? g.props ? "" : bs(g, "") : g === !1 ? "" : g;
  }
  return v + m + (_ ?? "");
}, "");
function Lg(l) {
  let s = this || {}, d = l.call ? l(s.p) : l;
  return HM(d.unshift ? d.raw ? BM(d, [].slice.call(arguments, 1), s.p) : d.reduce((v, m) => Object.assign(v, m && m.call ? m(s.p) : m), {}) : d, zM(s.target), s.g, s.o, s.k);
}
let kT, z_, P_;
Lg.bind({ g: 1 });
let vu = Lg.bind({ k: 1 });
function VM(l, s, d, v) {
  bs.p = s, kT = l, z_ = d, P_ = v;
}
function Ts(l, s) {
  let d = this || {};
  return function() {
    let v = arguments;
    function m(w, _) {
      let g = Object.assign({}, w), R = g.className || m.className;
      d.p = Object.assign({ theme: z_ && z_() }, g), d.o = / *go\d+/.test(R), g.className = Lg.apply(d, v) + (R ? " " + R : "");
      let O = l;
      return l[0] && (O = g.as || l, delete g.as), P_ && O[0] && P_(g), kT(O, g);
    }
    return m;
  };
}
var IM = (l) => typeof l == "function", Sg = (l, s) => IM(l) ? l(s) : l, $M = /* @__PURE__ */ (() => {
  let l = 0;
  return () => (++l).toString();
})(), DT = /* @__PURE__ */ (() => {
  let l;
  return () => {
    if (l === void 0 && typeof window < "u") {
      let s = matchMedia("(prefers-reduced-motion: reduce)");
      l = !s || s.matches;
    }
    return l;
  };
})(), WM = 20, vg = /* @__PURE__ */ new Map(), YM = 1e3, gR = (l) => {
  if (vg.has(l)) return;
  let s = setTimeout(() => {
    vg.delete(l), of({ type: 4, toastId: l });
  }, YM);
  vg.set(l, s);
}, qM = (l) => {
  let s = vg.get(l);
  s && clearTimeout(s);
}, F_ = (l, s) => {
  switch (s.type) {
    case 0:
      return { ...l, toasts: [s.toast, ...l.toasts].slice(0, WM) };
    case 1:
      return s.toast.id && qM(s.toast.id), { ...l, toasts: l.toasts.map((w) => w.id === s.toast.id ? { ...w, ...s.toast } : w) };
    case 2:
      let { toast: d } = s;
      return l.toasts.find((w) => w.id === d.id) ? F_(l, { type: 1, toast: d }) : F_(l, { type: 0, toast: d });
    case 3:
      let { toastId: v } = s;
      return v ? gR(v) : l.toasts.forEach((w) => {
        gR(w.id);
      }), { ...l, toasts: l.toasts.map((w) => w.id === v || v === void 0 ? { ...w, visible: !1 } : w) };
    case 4:
      return s.toastId === void 0 ? { ...l, toasts: [] } : { ...l, toasts: l.toasts.filter((w) => w.id !== s.toastId) };
    case 5:
      return { ...l, pausedAt: s.time };
    case 6:
      let m = s.time - (l.pausedAt || 0);
      return { ...l, pausedAt: void 0, toasts: l.toasts.map((w) => ({ ...w, pauseDuration: w.pauseDuration + m })) };
  }
}, hg = [], mg = { toasts: [], pausedAt: void 0 }, of = (l) => {
  mg = F_(mg, l), hg.forEach((s) => {
    s(mg);
  });
}, GM = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, QM = (l = {}) => {
  let [s, d] = ce.useState(mg);
  ce.useEffect(() => (hg.push(d), () => {
    let m = hg.indexOf(d);
    m > -1 && hg.splice(m, 1);
  }), [s]);
  let v = s.toasts.map((m) => {
    var w, _;
    return { ...l, ...l[m.type], ...m, duration: m.duration || ((w = l[m.type]) == null ? void 0 : w.duration) || (l == null ? void 0 : l.duration) || GM[m.type], style: { ...l.style, ...(_ = l[m.type]) == null ? void 0 : _.style, ...m.style } };
  });
  return { ...s, toasts: v };
}, KM = (l, s = "blank", d) => ({ createdAt: Date.now(), visible: !0, type: s, ariaProps: { role: "status", "aria-live": "polite" }, message: l, pauseDuration: 0, ...d, id: (d == null ? void 0 : d.id) || $M() }), fh = (l) => (s, d) => {
  let v = KM(s, l, d);
  return of({ type: 2, toast: v }), v.id;
}, Oi = (l, s) => fh("blank")(l, s);
Oi.error = fh("error");
Oi.success = fh("success");
Oi.loading = fh("loading");
Oi.custom = fh("custom");
Oi.dismiss = (l) => {
  of({ type: 3, toastId: l });
};
Oi.remove = (l) => of({ type: 4, toastId: l });
Oi.promise = (l, s, d) => {
  let v = Oi.loading(s.loading, { ...d, ...d == null ? void 0 : d.loading });
  return l.then((m) => (Oi.success(Sg(s.success, m), { id: v, ...d, ...d == null ? void 0 : d.success }), m)).catch((m) => {
    Oi.error(Sg(s.error, m), { id: v, ...d, ...d == null ? void 0 : d.error });
  }), l;
};
var XM = (l, s) => {
  of({ type: 1, toast: { id: l, height: s } });
}, JM = () => {
  of({ type: 5, time: Date.now() });
}, ZM = (l) => {
  let { toasts: s, pausedAt: d } = QM(l);
  ce.useEffect(() => {
    if (d) return;
    let w = Date.now(), _ = s.map((g) => {
      if (g.duration === 1 / 0) return;
      let R = (g.duration || 0) + g.pauseDuration - (w - g.createdAt);
      if (R < 0) {
        g.visible && Oi.dismiss(g.id);
        return;
      }
      return setTimeout(() => Oi.dismiss(g.id), R);
    });
    return () => {
      _.forEach((g) => g && clearTimeout(g));
    };
  }, [s, d]);
  let v = ce.useCallback(() => {
    d && of({ type: 6, time: Date.now() });
  }, [d]), m = ce.useCallback((w, _) => {
    let { reverseOrder: g = !1, gutter: R = 8, defaultPosition: O } = _ || {}, D = s.filter((H) => (H.position || O) === (w.position || O) && H.height), L = D.findIndex((H) => H.id === w.id), U = D.filter((H, P) => P < L && H.visible).length;
    return D.filter((H) => H.visible).slice(...g ? [U + 1] : [0, U]).reduce((H, P) => H + (P.height || 0) + R, 0);
  }, [s]);
  return { toasts: s, handlers: { updateHeight: XM, startPause: JM, endPause: v, calculateOffset: m } };
}, ej = vu`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, tj = vu`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, nj = vu`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, rj = Ts("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(l) => l.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ej} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${tj} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(l) => l.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${nj} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, aj = vu`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, ij = Ts("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(l) => l.secondary || "#e0e0e0"};
  border-right-color: ${(l) => l.primary || "#616161"};
  animation: ${aj} 1s linear infinite;
`, oj = vu`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, lj = vu`
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
}`, uj = Ts("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(l) => l.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${lj} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(l) => l.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, sj = Ts("div")`
  position: absolute;
`, cj = Ts("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, fj = vu`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, dj = Ts("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fj} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, pj = ({ toast: l }) => {
  let { icon: s, type: d, iconTheme: v } = l;
  return s !== void 0 ? typeof s == "string" ? ce.createElement(dj, null, s) : s : d === "blank" ? null : ce.createElement(cj, null, ce.createElement(ij, { ...v }), d !== "loading" && ce.createElement(sj, null, d === "error" ? ce.createElement(rj, { ...v }) : ce.createElement(uj, { ...v })));
}, vj = (l) => `
0% {transform: translate3d(0,${l * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, hj = (l) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${l * -150}%,-1px) scale(.6); opacity:0;}
`, mj = "0%{opacity:0;} 100%{opacity:1;}", yj = "0%{opacity:1;} 100%{opacity:0;}", gj = Ts("div")`
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
`, Sj = Ts("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, wj = (l, s) => {
  let d = l.includes("top") ? 1 : -1, [v, m] = DT() ? [mj, yj] : [vj(d), hj(d)];
  return { animation: s ? `${vu(v)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${vu(m)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, _j = ce.memo(({ toast: l, position: s, style: d, children: v }) => {
  let m = l.height ? wj(l.position || s || "top-center", l.visible) : { opacity: 0 }, w = ce.createElement(pj, { toast: l }), _ = ce.createElement(Sj, { ...l.ariaProps }, Sg(l.message, l));
  return ce.createElement(gj, { className: l.className, style: { ...m, ...d, ...l.style } }, typeof v == "function" ? v({ icon: w, message: _ }) : ce.createElement(ce.Fragment, null, w, _));
});
VM(ce.createElement);
var Ej = ({ id: l, className: s, style: d, onHeightUpdate: v, children: m }) => {
  let w = ce.useCallback((_) => {
    if (_) {
      let g = () => {
        let R = _.getBoundingClientRect().height;
        v(l, R);
      };
      g(), new MutationObserver(g).observe(_, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [l, v]);
  return ce.createElement("div", { ref: w, className: s, style: d }, m);
}, bj = (l, s) => {
  let d = l.includes("top"), v = d ? { top: 0 } : { bottom: 0 }, m = l.includes("center") ? { justifyContent: "center" } : l.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: DT() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${s * (d ? 1 : -1)}px)`, ...v, ...m };
}, Cj = Lg`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, lg = 16, xj = ({ reverseOrder: l, position: s = "top-center", toastOptions: d, gutter: v, children: m, containerStyle: w, containerClassName: _ }) => {
  let { toasts: g, handlers: R } = ZM(d);
  return ce.createElement("div", { style: { position: "fixed", zIndex: 9999, top: lg, left: lg, right: lg, bottom: lg, pointerEvents: "none", ...w }, className: _, onMouseEnter: R.startPause, onMouseLeave: R.endPause }, g.map((O) => {
    let D = O.position || s, L = R.calculateOffset(O, { reverseOrder: l, gutter: v, defaultPosition: s }), U = bj(D, L);
    return ce.createElement(Ej, { id: O.id, key: O.id, onHeightUpdate: R.updateHeight, className: O.visible ? Cj : "", style: U }, O.type === "custom" ? Sg(O.message, O) : m ? m(O) : ce.createElement(_j, { toast: O, position: D }));
  }));
}, qa = Oi, Qr = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
let Rj = 0;
function Tj(l, s) {
  const d = `atom${++Rj}`, v = {
    toString: () => d
  };
  return typeof l == "function" ? v.read = l : (v.init = l, v.read = Oj, v.write = kj), v;
}
function Oj(l) {
  return l(this);
}
function kj(l, s, d) {
  return s(
    this,
    typeof d == "function" ? d(l(this)) : d
  );
}
const v_ = (l, s) => l.unstable_is ? l.unstable_is(s) : s === l, h_ = (l) => "init" in l, m_ = (l) => !!l.write, wg = /* @__PURE__ */ new WeakMap(), Dj = (l, s) => {
  wg.set(l, s), l.catch(() => {
  }).finally(() => wg.delete(l));
}, SR = (l, s) => {
  const d = wg.get(l);
  d && (wg.delete(l), d(s));
}, wR = (l, s) => {
  l.status = "fulfilled", l.value = s;
}, _R = (l, s) => {
  l.status = "rejected", l.reason = s;
}, Aj = (l) => typeof (l == null ? void 0 : l.then) == "function", nh = (l, s) => !!l && "v" in l && "v" in s && Object.is(l.v, s.v), ER = (l, s) => !!l && "e" in l && "e" in s && Object.is(l.e, s.e), Bd = (l) => !!l && "v" in l && l.v instanceof Promise, Nj = (l, s) => "v" in l && "v" in s && l.v.orig && l.v.orig === s.v.orig, ug = (l) => {
  if ("e" in l)
    throw l.e;
  return l.v;
}, AT = () => {
  const l = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new Map();
  let v, m;
  (Qr ? "production" : void 0) !== "production" && (v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set());
  const w = (q) => l.get(q), _ = (q, be) => {
    (Qr ? "production" : void 0) !== "production" && Object.freeze(be);
    const Oe = w(q);
    if (l.set(q, be), d.has(q) || d.set(q, Oe), Bd(Oe)) {
      const De = "v" in be ? be.v instanceof Promise ? be.v : Promise.resolve(be.v) : Promise.reject(be.e);
      Oe.v !== De && SR(Oe.v, De);
    }
  }, g = (q, be, Oe, De) => {
    const _e = new Map(
      De ? be.d : null
    );
    let Ne = !1;
    Oe.forEach((te, le) => {
      !te && v_(q, le) && (te = be), te ? (_e.set(le, te), be.d.get(le) !== te && (Ne = !0)) : (Qr ? "production" : void 0) !== "production" && console.warn("[Bug] atom state not found");
    }), (Ne || be.d.size !== _e.size) && (be.d = _e);
  }, R = (q, be, Oe, De) => {
    const _e = w(q), Ne = {
      d: (_e == null ? void 0 : _e.d) || /* @__PURE__ */ new Map(),
      v: be
    };
    if (Oe && g(
      q,
      Ne,
      Oe,
      De
    ), nh(_e, Ne) && _e.d === Ne.d)
      return _e;
    if (Bd(_e) && Bd(Ne) && Nj(_e, Ne)) {
      if (_e.d === Ne.d)
        return _e;
      Ne.v = _e.v;
    }
    return _(q, Ne), Ne;
  }, O = (q, be, Oe, De) => {
    if (Aj(be)) {
      let _e;
      const Ne = () => {
        const le = w(q);
        if (!Bd(le) || le.v !== te)
          return;
        const me = R(
          q,
          te,
          Oe
        );
        s.has(q) && le.d !== me.d && G(q, me, le.d);
      }, te = new Promise((le, me) => {
        let de = !1;
        be.then(
          (A) => {
            de || (de = !0, wR(te, A), le(A), Ne());
          },
          (A) => {
            de || (de = !0, _R(te, A), me(A), Ne());
          }
        ), _e = (A) => {
          de || (de = !0, A.then(
            (ie) => wR(te, ie),
            (ie) => _R(te, ie)
          ), le(A));
        };
      });
      return te.orig = be, te.status = "pending", Dj(te, (le) => {
        le && _e(le), De == null || De();
      }), R(q, te, Oe, !0);
    }
    return R(q, be, Oe);
  }, D = (q, be, Oe) => {
    const De = w(q), _e = {
      d: (De == null ? void 0 : De.d) || /* @__PURE__ */ new Map(),
      e: be
    };
    return Oe && g(q, _e, Oe), ER(De, _e) && De.d === _e.d ? De : (_(q, _e), _e);
  }, L = (q, be) => {
    const Oe = w(q);
    if (!be && Oe && (s.has(q) || Array.from(Oe.d).every(([de, A]) => {
      if (de === q)
        return !0;
      const ie = L(de);
      return ie === A || nh(ie, A);
    })))
      return Oe;
    const De = /* @__PURE__ */ new Map();
    let _e = !0;
    const Ne = (de) => {
      if (v_(q, de)) {
        const ie = w(de);
        if (ie)
          return De.set(de, ie), ug(ie);
        if (h_(de))
          return De.set(de, void 0), de.init;
        throw new Error("no atom init");
      }
      const A = L(de);
      return De.set(de, A), ug(A);
    };
    let te, le;
    const me = {
      get signal() {
        return te || (te = new AbortController()), te.signal;
      },
      get setSelf() {
        return (Qr ? "production" : void 0) !== "production" && !m_(q) && console.warn("setSelf function cannot be used with read-only atom"), !le && m_(q) && (le = (...de) => {
          if ((Qr ? "production" : void 0) !== "production" && _e && console.warn("setSelf function cannot be called in sync"), !_e)
            return ue(q, ...de);
        }), le;
      }
    };
    try {
      const de = q.read(Ne, me);
      return O(
        q,
        de,
        De,
        () => te == null ? void 0 : te.abort()
      );
    } catch (de) {
      return D(q, de, De);
    } finally {
      _e = !1;
    }
  }, U = (q) => ug(L(q)), H = (q) => {
    let be = s.get(q);
    return be || (be = Q(q)), be;
  }, P = (q, be) => !be.l.size && (!be.t.size || be.t.size === 1 && be.t.has(q)), W = (q) => {
    const be = s.get(q);
    be && P(q, be) && he(q);
  }, Y = (q) => {
    const be = (te) => {
      var le;
      const me = new Set((le = s.get(te)) == null ? void 0 : le.t);
      return d.forEach((de, A) => {
        var ie;
        (ie = w(A)) != null && ie.d.has(te) && me.add(A);
      }), me;
    }, Oe = new Array(), De = /* @__PURE__ */ new Set(), _e = (te) => {
      if (!De.has(te)) {
        De.add(te);
        for (const le of be(te))
          te !== le && _e(le);
        Oe.push(te);
      }
    };
    _e(q);
    const Ne = /* @__PURE__ */ new Set([q]);
    for (let te = Oe.length - 1; te >= 0; --te) {
      const le = Oe[te], me = w(le);
      if (!me)
        continue;
      let de = !1;
      for (const A of me.d.keys())
        if (A !== le && Ne.has(A)) {
          de = !0;
          break;
        }
      if (de) {
        const A = L(le, !0);
        nh(me, A) || Ne.add(le);
      }
    }
  }, Se = (q, ...be) => {
    let Oe = !0;
    const De = (te) => ug(L(te)), _e = (te, ...le) => {
      let me;
      if (v_(q, te)) {
        if (!h_(te))
          throw new Error("atom not writable");
        const de = w(te), A = O(te, le[0]);
        nh(de, A) || Y(te);
      } else
        me = Se(te, ...le);
      if (!Oe) {
        const de = we();
        (Qr ? "production" : void 0) !== "production" && v.forEach(
          (A) => A({ type: "async-write", flushed: de })
        );
      }
      return me;
    }, Ne = q.write(De, _e, ...be);
    return Oe = !1, Ne;
  }, ue = (q, ...be) => {
    const Oe = Se(q, ...be), De = we();
    return (Qr ? "production" : void 0) !== "production" && v.forEach(
      (_e) => _e({ type: "write", flushed: De })
    ), Oe;
  }, Q = (q, be, Oe) => {
    var De;
    const _e = Oe || [];
    (De = w(q)) == null || De.d.forEach((te, le) => {
      const me = s.get(le);
      me ? me.t.add(q) : le !== q && Q(le, q, _e);
    }), L(q);
    const Ne = {
      t: new Set(be && [be]),
      l: /* @__PURE__ */ new Set()
    };
    if (s.set(q, Ne), (Qr ? "production" : void 0) !== "production" && m.add(q), m_(q) && q.onMount) {
      const { onMount: te } = q;
      _e.push(() => {
        const le = te((...me) => ue(q, ...me));
        le && (Ne.u = le);
      });
    }
    return Oe || _e.forEach((te) => te()), Ne;
  }, he = (q) => {
    var be;
    const Oe = (be = s.get(q)) == null ? void 0 : be.u;
    Oe && Oe(), s.delete(q), (Qr ? "production" : void 0) !== "production" && m.delete(q);
    const De = w(q);
    De ? (Bd(De) && SR(De.v), De.d.forEach((_e, Ne) => {
      if (Ne !== q) {
        const te = s.get(Ne);
        te && (te.t.delete(q), P(Ne, te) && he(Ne));
      }
    })) : (Qr ? "production" : void 0) !== "production" && console.warn("[Bug] could not find atom state to unmount", q);
  }, G = (q, be, Oe) => {
    const De = new Set(be.d.keys()), _e = /* @__PURE__ */ new Set();
    Oe == null || Oe.forEach((Ne, te) => {
      if (De.has(te)) {
        De.delete(te);
        return;
      }
      _e.add(te);
      const le = s.get(te);
      le && le.t.delete(q);
    }), De.forEach((Ne) => {
      const te = s.get(Ne);
      te ? te.t.add(q) : s.has(q) && Q(Ne, q);
    }), _e.forEach((Ne) => {
      const te = s.get(Ne);
      te && P(Ne, te) && he(Ne);
    });
  }, we = () => {
    let q;
    for ((Qr ? "production" : void 0) !== "production" && (q = /* @__PURE__ */ new Set()); d.size; ) {
      const be = Array.from(d);
      d.clear(), be.forEach(([Oe, De]) => {
        const _e = w(Oe);
        if (_e) {
          const Ne = s.get(Oe);
          Ne && _e.d !== (De == null ? void 0 : De.d) && G(Oe, _e, De == null ? void 0 : De.d), Ne && !// TODO This seems pretty hacky. Hope to fix it.
          // Maybe we could `mountDependencies` in `setAtomState`?
          (!Bd(De) && (nh(De, _e) || ER(De, _e))) && (Ne.l.forEach((te) => te()), (Qr ? "production" : void 0) !== "production" && q.add(Oe));
        } else (Qr ? "production" : void 0) !== "production" && console.warn("[Bug] no atom state to flush");
      });
    }
    if ((Qr ? "production" : void 0) !== "production")
      return q;
  }, He = (q, be) => {
    const Oe = H(q), De = we(), _e = Oe.l;
    return _e.add(be), (Qr ? "production" : void 0) !== "production" && v.forEach(
      (Ne) => Ne({ type: "sub", flushed: De })
    ), () => {
      _e.delete(be), W(q), (Qr ? "production" : void 0) !== "production" && v.forEach((Ne) => Ne({ type: "unsub" }));
    };
  };
  return (Qr ? "production" : void 0) !== "production" ? {
    get: U,
    set: ue,
    sub: He,
    // store dev methods (these are tentative and subject to change without notice)
    dev_subscribe_store: (q, be) => {
      if (be !== 2)
        throw new Error("The current StoreListener revision is 2.");
      return v.add(q), () => {
        v.delete(q);
      };
    },
    dev_get_mounted_atoms: () => m.values(),
    dev_get_atom_state: (q) => l.get(q),
    dev_get_mounted: (q) => s.get(q),
    dev_restore_atoms: (q) => {
      for (const [Oe, De] of q)
        h_(Oe) && (O(Oe, De), Y(Oe));
      const be = we();
      v.forEach(
        (Oe) => Oe({ type: "restore", flushed: be })
      );
    }
  } : {
    get: U,
    set: ue,
    sub: He
  };
};
let y_;
(Qr ? "production" : void 0) !== "production" && (typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__ == "number" ? ++globalThis.__NUMBER_OF_JOTAI_INSTANCES__ : globalThis.__NUMBER_OF_JOTAI_INSTANCES__ = 1);
const Lj = () => (y_ || ((Qr ? "production" : void 0) !== "production" && globalThis.__NUMBER_OF_JOTAI_INSTANCES__ !== 1 && console.warn(
  "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
), y_ = AT()), y_);
var Mj = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const NT = ce.createContext(void 0), LT = (l) => ce.useContext(NT) || Lj(), jj = ({
  children: l,
  store: s
}) => {
  const d = ce.useRef();
  return !s && !d.current && (d.current = AT()), ce.createElement(
    NT.Provider,
    {
      value: s || d.current
    },
    l
  );
}, Uj = (l) => typeof (l == null ? void 0 : l.then) == "function", zj = pu.use || ((l) => {
  if (l.status === "pending")
    throw l;
  if (l.status === "fulfilled")
    return l.value;
  throw l.status === "rejected" ? l.reason : (l.status = "pending", l.then(
    (s) => {
      l.status = "fulfilled", l.value = s;
    },
    (s) => {
      l.status = "rejected", l.reason = s;
    }
  ), l);
});
function Pj(l, s) {
  const d = LT(), [[v, m, w], _] = ce.useReducer(
    (O) => {
      const D = d.get(l);
      return Object.is(O[0], D) && O[1] === d && O[2] === l ? O : [D, d, l];
    },
    void 0,
    () => [d.get(l), d, l]
  );
  let g = v;
  return (m !== d || w !== l) && (_(), g = d.get(l)), ce.useEffect(() => {
    const O = d.sub(l, () => {
      _();
    });
    return _(), O;
  }, [d, l, void 0]), ce.useDebugValue(g), Uj(g) ? zj(g) : g;
}
function Fj(l, s) {
  const d = LT();
  return ce.useCallback(
    (...m) => {
      if ((Mj ? "production" : void 0) !== "production" && !("write" in l))
        throw new Error("not writable atom");
      return d.set(l, ...m);
    },
    [d, l]
  );
}
function MT(l, s) {
  return [
    Pj(l),
    // We do wrong type assertion here, which results in throwing an error.
    Fj(l)
  ];
}
const rE = Tj(twChatSettings.chat_widgets ? twChatSettings.chat_widgets : []);
var H_ = { exports: {} }, tf = {}, B_ = { exports: {} }, sg = { exports: {} }, bn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bR;
function Hj() {
  if (bR) return bn;
  bR = 1;
  var l = typeof Symbol == "function" && Symbol.for, s = l ? Symbol.for("react.element") : 60103, d = l ? Symbol.for("react.portal") : 60106, v = l ? Symbol.for("react.fragment") : 60107, m = l ? Symbol.for("react.strict_mode") : 60108, w = l ? Symbol.for("react.profiler") : 60114, _ = l ? Symbol.for("react.provider") : 60109, g = l ? Symbol.for("react.context") : 60110, R = l ? Symbol.for("react.async_mode") : 60111, O = l ? Symbol.for("react.concurrent_mode") : 60111, D = l ? Symbol.for("react.forward_ref") : 60112, L = l ? Symbol.for("react.suspense") : 60113, U = l ? Symbol.for("react.suspense_list") : 60120, H = l ? Symbol.for("react.memo") : 60115, P = l ? Symbol.for("react.lazy") : 60116, W = l ? Symbol.for("react.block") : 60121, Y = l ? Symbol.for("react.fundamental") : 60117, Se = l ? Symbol.for("react.responder") : 60118, ue = l ? Symbol.for("react.scope") : 60119;
  function Q(G) {
    if (typeof G == "object" && G !== null) {
      var we = G.$$typeof;
      switch (we) {
        case s:
          switch (G = G.type, G) {
            case R:
            case O:
            case v:
            case w:
            case m:
            case L:
              return G;
            default:
              switch (G = G && G.$$typeof, G) {
                case g:
                case D:
                case P:
                case H:
                case _:
                  return G;
                default:
                  return we;
              }
          }
        case d:
          return we;
      }
    }
  }
  function he(G) {
    return Q(G) === O;
  }
  return bn.AsyncMode = R, bn.ConcurrentMode = O, bn.ContextConsumer = g, bn.ContextProvider = _, bn.Element = s, bn.ForwardRef = D, bn.Fragment = v, bn.Lazy = P, bn.Memo = H, bn.Portal = d, bn.Profiler = w, bn.StrictMode = m, bn.Suspense = L, bn.isAsyncMode = function(G) {
    return he(G) || Q(G) === R;
  }, bn.isConcurrentMode = he, bn.isContextConsumer = function(G) {
    return Q(G) === g;
  }, bn.isContextProvider = function(G) {
    return Q(G) === _;
  }, bn.isElement = function(G) {
    return typeof G == "object" && G !== null && G.$$typeof === s;
  }, bn.isForwardRef = function(G) {
    return Q(G) === D;
  }, bn.isFragment = function(G) {
    return Q(G) === v;
  }, bn.isLazy = function(G) {
    return Q(G) === P;
  }, bn.isMemo = function(G) {
    return Q(G) === H;
  }, bn.isPortal = function(G) {
    return Q(G) === d;
  }, bn.isProfiler = function(G) {
    return Q(G) === w;
  }, bn.isStrictMode = function(G) {
    return Q(G) === m;
  }, bn.isSuspense = function(G) {
    return Q(G) === L;
  }, bn.isValidElementType = function(G) {
    return typeof G == "string" || typeof G == "function" || G === v || G === O || G === w || G === m || G === L || G === U || typeof G == "object" && G !== null && (G.$$typeof === P || G.$$typeof === H || G.$$typeof === _ || G.$$typeof === g || G.$$typeof === D || G.$$typeof === Y || G.$$typeof === Se || G.$$typeof === ue || G.$$typeof === W);
  }, bn.typeOf = Q, bn;
}
var Cn = {}, CR;
function Bj() {
  if (CR) return Cn;
  CR = 1;
  var l = {};
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return l.NODE_ENV !== "production" && function() {
    var s = typeof Symbol == "function" && Symbol.for, d = s ? Symbol.for("react.element") : 60103, v = s ? Symbol.for("react.portal") : 60106, m = s ? Symbol.for("react.fragment") : 60107, w = s ? Symbol.for("react.strict_mode") : 60108, _ = s ? Symbol.for("react.profiler") : 60114, g = s ? Symbol.for("react.provider") : 60109, R = s ? Symbol.for("react.context") : 60110, O = s ? Symbol.for("react.async_mode") : 60111, D = s ? Symbol.for("react.concurrent_mode") : 60111, L = s ? Symbol.for("react.forward_ref") : 60112, U = s ? Symbol.for("react.suspense") : 60113, H = s ? Symbol.for("react.suspense_list") : 60120, P = s ? Symbol.for("react.memo") : 60115, W = s ? Symbol.for("react.lazy") : 60116, Y = s ? Symbol.for("react.block") : 60121, Se = s ? Symbol.for("react.fundamental") : 60117, ue = s ? Symbol.for("react.responder") : 60118, Q = s ? Symbol.for("react.scope") : 60119;
    function he(Me) {
      return typeof Me == "string" || typeof Me == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Me === m || Me === D || Me === _ || Me === w || Me === U || Me === H || typeof Me == "object" && Me !== null && (Me.$$typeof === W || Me.$$typeof === P || Me.$$typeof === g || Me.$$typeof === R || Me.$$typeof === L || Me.$$typeof === Se || Me.$$typeof === ue || Me.$$typeof === Q || Me.$$typeof === Y);
    }
    function G(Me) {
      if (typeof Me == "object" && Me !== null) {
        var xt = Me.$$typeof;
        switch (xt) {
          case d:
            var xn = Me.type;
            switch (xn) {
              case O:
              case D:
              case m:
              case _:
              case w:
              case U:
                return xn;
              default:
                var cn = xn && xn.$$typeof;
                switch (cn) {
                  case R:
                  case L:
                  case W:
                  case P:
                  case g:
                    return cn;
                  default:
                    return xt;
                }
            }
          case v:
            return xt;
        }
      }
    }
    var we = O, He = D, q = R, be = g, Oe = d, De = L, _e = m, Ne = W, te = P, le = v, me = _, de = w, A = U, ie = !1;
    function N(Me) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(Me) || G(Me) === O;
    }
    function F(Me) {
      return G(Me) === D;
    }
    function ee(Me) {
      return G(Me) === R;
    }
    function Te(Me) {
      return G(Me) === g;
    }
    function xe(Me) {
      return typeof Me == "object" && Me !== null && Me.$$typeof === d;
    }
    function Pe(Me) {
      return G(Me) === L;
    }
    function Ie(Me) {
      return G(Me) === m;
    }
    function Le(Me) {
      return G(Me) === W;
    }
    function Fe(Me) {
      return G(Me) === P;
    }
    function Ke(Me) {
      return G(Me) === v;
    }
    function vt(Me) {
      return G(Me) === _;
    }
    function ht(Me) {
      return G(Me) === w;
    }
    function Vt(Me) {
      return G(Me) === U;
    }
    Cn.AsyncMode = we, Cn.ConcurrentMode = He, Cn.ContextConsumer = q, Cn.ContextProvider = be, Cn.Element = Oe, Cn.ForwardRef = De, Cn.Fragment = _e, Cn.Lazy = Ne, Cn.Memo = te, Cn.Portal = le, Cn.Profiler = me, Cn.StrictMode = de, Cn.Suspense = A, Cn.isAsyncMode = N, Cn.isConcurrentMode = F, Cn.isContextConsumer = ee, Cn.isContextProvider = Te, Cn.isElement = xe, Cn.isForwardRef = Pe, Cn.isFragment = Ie, Cn.isLazy = Le, Cn.isMemo = Fe, Cn.isPortal = Ke, Cn.isProfiler = vt, Cn.isStrictMode = ht, Cn.isSuspense = Vt, Cn.isValidElementType = he, Cn.typeOf = G;
  }(), Cn;
}
var xR;
function jT() {
  if (xR) return sg.exports;
  xR = 1;
  var l = {};
  return l.NODE_ENV === "production" ? sg.exports = Hj() : sg.exports = Bj(), sg.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var g_, RR;
function Vj() {
  if (RR) return g_;
  RR = 1;
  var l = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
  function v(w) {
    if (w == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(w);
  }
  function m() {
    try {
      if (!Object.assign)
        return !1;
      var w = new String("abc");
      if (w[5] = "de", Object.getOwnPropertyNames(w)[0] === "5")
        return !1;
      for (var _ = {}, g = 0; g < 10; g++)
        _["_" + String.fromCharCode(g)] = g;
      var R = Object.getOwnPropertyNames(_).map(function(D) {
        return _[D];
      });
      if (R.join("") !== "0123456789")
        return !1;
      var O = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(D) {
        O[D] = D;
      }), Object.keys(Object.assign({}, O)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return g_ = m() ? Object.assign : function(w, _) {
    for (var g, R = v(w), O, D = 1; D < arguments.length; D++) {
      g = Object(arguments[D]);
      for (var L in g)
        s.call(g, L) && (R[L] = g[L]);
      if (l) {
        O = l(g);
        for (var U = 0; U < O.length; U++)
          d.call(g, O[U]) && (R[O[U]] = g[O[U]]);
      }
    }
    return R;
  }, g_;
}
var S_, TR;
function aE() {
  if (TR) return S_;
  TR = 1;
  var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return S_ = l, S_;
}
var w_, OR;
function UT() {
  return OR || (OR = 1, w_ = Function.call.bind(Object.prototype.hasOwnProperty)), w_;
}
var __, kR;
function Ij() {
  if (kR) return __;
  kR = 1;
  var l = {}, s = function() {
  };
  if (l.NODE_ENV !== "production") {
    var d = aE(), v = {}, m = UT();
    s = function(_) {
      var g = "Warning: " + _;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function w(_, g, R, O, D) {
    if (l.NODE_ENV !== "production") {
      for (var L in _)
        if (m(_, L)) {
          var U;
          try {
            if (typeof _[L] != "function") {
              var H = Error(
                (O || "React class") + ": " + R + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw H.name = "Invariant Violation", H;
            }
            U = _[L](g, L, O, R, null, d);
          } catch (W) {
            U = W;
          }
          if (U && !(U instanceof Error) && s(
            (O || "React class") + ": type specification of " + R + " `" + L + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof U + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), U instanceof Error && !(U.message in v)) {
            v[U.message] = !0;
            var P = D ? D() : "";
            s(
              "Failed " + R + " type: " + U.message + (P ?? "")
            );
          }
        }
    }
  }
  return w.resetWarningCache = function() {
    l.NODE_ENV !== "production" && (v = {});
  }, __ = w, __;
}
var E_, DR;
function $j() {
  if (DR) return E_;
  DR = 1;
  var l = {}, s = jT(), d = Vj(), v = aE(), m = UT(), w = Ij(), _ = function() {
  };
  l.NODE_ENV !== "production" && (_ = function(R) {
    var O = "Warning: " + R;
    typeof console < "u" && console.error(O);
    try {
      throw new Error(O);
    } catch {
    }
  });
  function g() {
    return null;
  }
  return E_ = function(R, O) {
    var D = typeof Symbol == "function" && Symbol.iterator, L = "@@iterator";
    function U(F) {
      var ee = F && (D && F[D] || F[L]);
      if (typeof ee == "function")
        return ee;
    }
    var H = "<<anonymous>>", P = {
      array: ue("array"),
      bigint: ue("bigint"),
      bool: ue("boolean"),
      func: ue("function"),
      number: ue("number"),
      object: ue("object"),
      string: ue("string"),
      symbol: ue("symbol"),
      any: Q(),
      arrayOf: he,
      element: G(),
      elementType: we(),
      instanceOf: He,
      node: De(),
      objectOf: be,
      oneOf: q,
      oneOfType: Oe,
      shape: Ne,
      exact: te
    };
    function W(F, ee) {
      return F === ee ? F !== 0 || 1 / F === 1 / ee : F !== F && ee !== ee;
    }
    function Y(F, ee) {
      this.message = F, this.data = ee && typeof ee == "object" ? ee : {}, this.stack = "";
    }
    Y.prototype = Error.prototype;
    function Se(F) {
      if (l.NODE_ENV !== "production")
        var ee = {}, Te = 0;
      function xe(Ie, Le, Fe, Ke, vt, ht, Vt) {
        if (Ke = Ke || H, ht = ht || Fe, Vt !== v) {
          if (O) {
            var Me = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Me.name = "Invariant Violation", Me;
          } else if (l.NODE_ENV !== "production" && typeof console < "u") {
            var xt = Ke + ":" + Fe;
            !ee[xt] && // Avoid spamming the console because they are often not actionable except for lib authors
            Te < 3 && (_(
              "You are manually calling a React.PropTypes validation function for the `" + ht + "` prop on `" + Ke + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), ee[xt] = !0, Te++);
          }
        }
        return Le[Fe] == null ? Ie ? Le[Fe] === null ? new Y("The " + vt + " `" + ht + "` is marked as required " + ("in `" + Ke + "`, but its value is `null`.")) : new Y("The " + vt + " `" + ht + "` is marked as required in " + ("`" + Ke + "`, but its value is `undefined`.")) : null : F(Le, Fe, Ke, vt, ht);
      }
      var Pe = xe.bind(null, !1);
      return Pe.isRequired = xe.bind(null, !0), Pe;
    }
    function ue(F) {
      function ee(Te, xe, Pe, Ie, Le, Fe) {
        var Ke = Te[xe], vt = de(Ke);
        if (vt !== F) {
          var ht = A(Ke);
          return new Y(
            "Invalid " + Ie + " `" + Le + "` of type " + ("`" + ht + "` supplied to `" + Pe + "`, expected ") + ("`" + F + "`."),
            { expectedType: F }
          );
        }
        return null;
      }
      return Se(ee);
    }
    function Q() {
      return Se(g);
    }
    function he(F) {
      function ee(Te, xe, Pe, Ie, Le) {
        if (typeof F != "function")
          return new Y("Property `" + Le + "` of component `" + Pe + "` has invalid PropType notation inside arrayOf.");
        var Fe = Te[xe];
        if (!Array.isArray(Fe)) {
          var Ke = de(Fe);
          return new Y("Invalid " + Ie + " `" + Le + "` of type " + ("`" + Ke + "` supplied to `" + Pe + "`, expected an array."));
        }
        for (var vt = 0; vt < Fe.length; vt++) {
          var ht = F(Fe, vt, Pe, Ie, Le + "[" + vt + "]", v);
          if (ht instanceof Error)
            return ht;
        }
        return null;
      }
      return Se(ee);
    }
    function G() {
      function F(ee, Te, xe, Pe, Ie) {
        var Le = ee[Te];
        if (!R(Le)) {
          var Fe = de(Le);
          return new Y("Invalid " + Pe + " `" + Ie + "` of type " + ("`" + Fe + "` supplied to `" + xe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Se(F);
    }
    function we() {
      function F(ee, Te, xe, Pe, Ie) {
        var Le = ee[Te];
        if (!s.isValidElementType(Le)) {
          var Fe = de(Le);
          return new Y("Invalid " + Pe + " `" + Ie + "` of type " + ("`" + Fe + "` supplied to `" + xe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Se(F);
    }
    function He(F) {
      function ee(Te, xe, Pe, Ie, Le) {
        if (!(Te[xe] instanceof F)) {
          var Fe = F.name || H, Ke = N(Te[xe]);
          return new Y("Invalid " + Ie + " `" + Le + "` of type " + ("`" + Ke + "` supplied to `" + Pe + "`, expected ") + ("instance of `" + Fe + "`."));
        }
        return null;
      }
      return Se(ee);
    }
    function q(F) {
      if (!Array.isArray(F))
        return l.NODE_ENV !== "production" && (arguments.length > 1 ? _(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : _("Invalid argument supplied to oneOf, expected an array.")), g;
      function ee(Te, xe, Pe, Ie, Le) {
        for (var Fe = Te[xe], Ke = 0; Ke < F.length; Ke++)
          if (W(Fe, F[Ke]))
            return null;
        var vt = JSON.stringify(F, function(Vt, Me) {
          var xt = A(Me);
          return xt === "symbol" ? String(Me) : Me;
        });
        return new Y("Invalid " + Ie + " `" + Le + "` of value `" + String(Fe) + "` " + ("supplied to `" + Pe + "`, expected one of " + vt + "."));
      }
      return Se(ee);
    }
    function be(F) {
      function ee(Te, xe, Pe, Ie, Le) {
        if (typeof F != "function")
          return new Y("Property `" + Le + "` of component `" + Pe + "` has invalid PropType notation inside objectOf.");
        var Fe = Te[xe], Ke = de(Fe);
        if (Ke !== "object")
          return new Y("Invalid " + Ie + " `" + Le + "` of type " + ("`" + Ke + "` supplied to `" + Pe + "`, expected an object."));
        for (var vt in Fe)
          if (m(Fe, vt)) {
            var ht = F(Fe, vt, Pe, Ie, Le + "." + vt, v);
            if (ht instanceof Error)
              return ht;
          }
        return null;
      }
      return Se(ee);
    }
    function Oe(F) {
      if (!Array.isArray(F))
        return l.NODE_ENV !== "production" && _("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var ee = 0; ee < F.length; ee++) {
        var Te = F[ee];
        if (typeof Te != "function")
          return _(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(Te) + " at index " + ee + "."
          ), g;
      }
      function xe(Pe, Ie, Le, Fe, Ke) {
        for (var vt = [], ht = 0; ht < F.length; ht++) {
          var Vt = F[ht], Me = Vt(Pe, Ie, Le, Fe, Ke, v);
          if (Me == null)
            return null;
          Me.data && m(Me.data, "expectedType") && vt.push(Me.data.expectedType);
        }
        var xt = vt.length > 0 ? ", expected one of type [" + vt.join(", ") + "]" : "";
        return new Y("Invalid " + Fe + " `" + Ke + "` supplied to " + ("`" + Le + "`" + xt + "."));
      }
      return Se(xe);
    }
    function De() {
      function F(ee, Te, xe, Pe, Ie) {
        return le(ee[Te]) ? null : new Y("Invalid " + Pe + " `" + Ie + "` supplied to " + ("`" + xe + "`, expected a ReactNode."));
      }
      return Se(F);
    }
    function _e(F, ee, Te, xe, Pe) {
      return new Y(
        (F || "React class") + ": " + ee + " type `" + Te + "." + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Pe + "`."
      );
    }
    function Ne(F) {
      function ee(Te, xe, Pe, Ie, Le) {
        var Fe = Te[xe], Ke = de(Fe);
        if (Ke !== "object")
          return new Y("Invalid " + Ie + " `" + Le + "` of type `" + Ke + "` " + ("supplied to `" + Pe + "`, expected `object`."));
        for (var vt in F) {
          var ht = F[vt];
          if (typeof ht != "function")
            return _e(Pe, Ie, Le, vt, A(ht));
          var Vt = ht(Fe, vt, Pe, Ie, Le + "." + vt, v);
          if (Vt)
            return Vt;
        }
        return null;
      }
      return Se(ee);
    }
    function te(F) {
      function ee(Te, xe, Pe, Ie, Le) {
        var Fe = Te[xe], Ke = de(Fe);
        if (Ke !== "object")
          return new Y("Invalid " + Ie + " `" + Le + "` of type `" + Ke + "` " + ("supplied to `" + Pe + "`, expected `object`."));
        var vt = d({}, Te[xe], F);
        for (var ht in vt) {
          var Vt = F[ht];
          if (m(F, ht) && typeof Vt != "function")
            return _e(Pe, Ie, Le, ht, A(Vt));
          if (!Vt)
            return new Y(
              "Invalid " + Ie + " `" + Le + "` key `" + ht + "` supplied to `" + Pe + "`.\nBad object: " + JSON.stringify(Te[xe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(F), null, "  ")
            );
          var Me = Vt(Fe, ht, Pe, Ie, Le + "." + ht, v);
          if (Me)
            return Me;
        }
        return null;
      }
      return Se(ee);
    }
    function le(F) {
      switch (typeof F) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !F;
        case "object":
          if (Array.isArray(F))
            return F.every(le);
          if (F === null || R(F))
            return !0;
          var ee = U(F);
          if (ee) {
            var Te = ee.call(F), xe;
            if (ee !== F.entries) {
              for (; !(xe = Te.next()).done; )
                if (!le(xe.value))
                  return !1;
            } else
              for (; !(xe = Te.next()).done; ) {
                var Pe = xe.value;
                if (Pe && !le(Pe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function me(F, ee) {
      return F === "symbol" ? !0 : ee ? ee["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && ee instanceof Symbol : !1;
    }
    function de(F) {
      var ee = typeof F;
      return Array.isArray(F) ? "array" : F instanceof RegExp ? "object" : me(ee, F) ? "symbol" : ee;
    }
    function A(F) {
      if (typeof F > "u" || F === null)
        return "" + F;
      var ee = de(F);
      if (ee === "object") {
        if (F instanceof Date)
          return "date";
        if (F instanceof RegExp)
          return "regexp";
      }
      return ee;
    }
    function ie(F) {
      var ee = A(F);
      switch (ee) {
        case "array":
        case "object":
          return "an " + ee;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + ee;
        default:
          return ee;
      }
    }
    function N(F) {
      return !F.constructor || !F.constructor.name ? H : F.constructor.name;
    }
    return P.checkPropTypes = w, P.resetWarningCache = w.resetWarningCache, P.PropTypes = P, P;
  }, E_;
}
var b_, AR;
function Wj() {
  if (AR) return b_;
  AR = 1;
  var l = aE();
  function s() {
  }
  function d() {
  }
  return d.resetWarningCache = s, b_ = function() {
    function v(_, g, R, O, D, L) {
      if (L !== l) {
        var U = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw U.name = "Invariant Violation", U;
      }
    }
    v.isRequired = v;
    function m() {
      return v;
    }
    var w = {
      array: v,
      bigint: v,
      bool: v,
      func: v,
      number: v,
      object: v,
      string: v,
      symbol: v,
      any: v,
      arrayOf: m,
      element: v,
      elementType: v,
      instanceOf: m,
      node: v,
      objectOf: m,
      oneOf: m,
      oneOfType: m,
      shape: m,
      exact: m,
      checkPropTypes: d,
      resetWarningCache: s
    };
    return w.PropTypes = w, w;
  }, b_;
}
var Yj = {};
if (Yj.NODE_ENV !== "production") {
  var qj = jT(), Gj = !0;
  B_.exports = $j()(qj.isElement, Gj);
} else
  B_.exports = Wj()();
var iE = B_.exports;
const No = /* @__PURE__ */ Tg(iE);
var V_ = { exports: {} }, Po = {}, I_ = { exports: {} };
(function(l, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = D;
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
  var d = "none", v = "contents", m = /input|select|textarea|button|object|iframe/;
  function w(L, U) {
    return U.getPropertyValue("overflow") !== "visible" || // if 'overflow: visible' set, check if there is actually any overflow
    L.scrollWidth <= 0 && L.scrollHeight <= 0;
  }
  function _(L) {
    var U = L.offsetWidth <= 0 && L.offsetHeight <= 0;
    if (U && !L.innerHTML) return !0;
    try {
      var H = window.getComputedStyle(L), P = H.getPropertyValue("display");
      return U ? P !== v && w(L, H) : P === d;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function g(L) {
    for (var U = L, H = L.getRootNode && L.getRootNode(); U && U !== document.body; ) {
      if (H && U === H && (U = H.host.parentNode), _(U)) return !1;
      U = U.parentNode;
    }
    return !0;
  }
  function R(L, U) {
    var H = L.nodeName.toLowerCase(), P = m.test(H) && !L.disabled || H === "a" && L.href || U;
    return P && g(L);
  }
  function O(L) {
    var U = L.getAttribute("tabindex");
    U === null && (U = void 0);
    var H = isNaN(U);
    return (H || U >= 0) && R(L, !H);
  }
  function D(L) {
    var U = [].slice.call(L.querySelectorAll("*"), 0).reduce(function(H, P) {
      return H.concat(P.shadowRoot ? D(P.shadowRoot) : [P]);
    }, []);
    return U.filter(O);
  }
  l.exports = s.default;
})(I_, I_.exports);
var zT = I_.exports, Qj = {};
Object.defineProperty(Po, "__esModule", {
  value: !0
});
Po.resetState = Zj;
Po.log = eU;
Po.handleBlur = oh;
Po.handleFocus = lh;
Po.markForFocusLater = tU;
Po.returnFocus = nU;
Po.popWithoutFocus = rU;
Po.setupScopedFocus = aU;
Po.teardownScopedFocus = iU;
var Kj = zT, Xj = Jj(Kj);
function Jj(l) {
  return l && l.__esModule ? l : { default: l };
}
var nf = [], Id = null, $_ = !1;
function Zj() {
  nf = [];
}
function eU() {
  Qj.NODE_ENV !== "production" && (console.log("focusManager ----------"), nf.forEach(function(l) {
    var s = l || {};
    console.log(s.nodeName, s.className, s.id);
  }), console.log("end focusManager ----------"));
}
function oh() {
  $_ = !0;
}
function lh() {
  if ($_) {
    if ($_ = !1, !Id)
      return;
    setTimeout(function() {
      if (!Id.contains(document.activeElement)) {
        var l = (0, Xj.default)(Id)[0] || Id;
        l.focus();
      }
    }, 0);
  }
}
function tU() {
  nf.push(document.activeElement);
}
function nU() {
  var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = null;
  try {
    nf.length !== 0 && (s = nf.pop(), s.focus({ preventScroll: l }));
    return;
  } catch {
    console.warn(["You tried to return focus to", s, "but it is not in the DOM anymore"].join(" "));
  }
}
function rU() {
  nf.length > 0 && nf.pop();
}
function aU(l) {
  Id = l, window.addEventListener ? (window.addEventListener("blur", oh, !1), document.addEventListener("focus", lh, !0)) : (window.attachEvent("onBlur", oh), document.attachEvent("onFocus", lh));
}
function iU() {
  Id = null, window.addEventListener ? (window.removeEventListener("blur", oh), document.removeEventListener("focus", lh)) : (window.detachEvent("onBlur", oh), document.detachEvent("onFocus", lh));
}
var W_ = { exports: {} };
(function(l, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = _;
  var d = zT, v = m(d);
  function m(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function w() {
    var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return g.activeElement.shadowRoot ? w(g.activeElement.shadowRoot) : g.activeElement;
  }
  function _(g, R) {
    var O = (0, v.default)(g);
    if (!O.length) {
      R.preventDefault();
      return;
    }
    var D = void 0, L = R.shiftKey, U = O[0], H = O[O.length - 1], P = w();
    if (g === P) {
      if (!L) return;
      D = H;
    }
    if (H === P && !L && (D = U), U === P && L && (D = H), D) {
      R.preventDefault(), D.focus();
      return;
    }
    var W = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), Y = W != null && W[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (Y) {
      var Se = O.indexOf(P);
      if (Se > -1 && (Se += L ? -1 : 1), D = O[Se], typeof D > "u") {
        R.preventDefault(), D = L ? H : U, D.focus();
        return;
      }
      R.preventDefault(), D.focus();
    }
  }
  l.exports = s.default;
})(W_, W_.exports);
var oU = W_.exports, Fo = {}, lU = {}, uU = lU.NODE_ENV !== "production", PT = function() {
};
if (uU) {
  var sU = function(s, d) {
    var v = arguments.length;
    d = new Array(v > 1 ? v - 1 : 0);
    for (var m = 1; m < v; m++)
      d[m - 1] = arguments[m];
    var w = 0, _ = "Warning: " + s.replace(/%s/g, function() {
      return d[w++];
    });
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  };
  PT = function(l, s, d) {
    var v = arguments.length;
    d = new Array(v > 2 ? v - 2 : 0);
    for (var m = 2; m < v; m++)
      d[m - 2] = arguments[m];
    if (s === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    l || sU.apply(null, [s].concat(d));
  };
}
var cU = PT, jo = {}, FT = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(l) {
  (function() {
    var s = !!(typeof window < "u" && window.document && window.document.createElement), d = {
      canUseDOM: s,
      canUseWorkers: typeof Worker < "u",
      canUseEventListeners: s && !!(window.addEventListener || window.attachEvent),
      canUseViewport: s && !!window.screen
    };
    l.exports ? l.exports = d : window.ExecutionEnvironment = d;
  })();
})(FT);
var fU = FT.exports;
Object.defineProperty(jo, "__esModule", {
  value: !0
});
jo.canUseDOM = jo.SafeNodeList = jo.SafeHTMLCollection = void 0;
var dU = fU, pU = vU(dU);
function vU(l) {
  return l && l.__esModule ? l : { default: l };
}
var Mg = pU.default, hU = Mg.canUseDOM ? window.HTMLElement : {};
jo.SafeHTMLCollection = Mg.canUseDOM ? window.HTMLCollection : {};
jo.SafeNodeList = Mg.canUseDOM ? window.NodeList : {};
jo.canUseDOM = Mg.canUseDOM;
jo.default = hU;
var mU = {};
Object.defineProperty(Fo, "__esModule", {
  value: !0
});
Fo.resetState = _U;
Fo.log = EU;
Fo.assertNodeList = HT;
Fo.setElement = bU;
Fo.validateElement = oE;
Fo.hide = CU;
Fo.show = xU;
Fo.documentNotReadyOrSSRTesting = RU;
var yU = cU, gU = wU(yU), SU = jo;
function wU(l) {
  return l && l.__esModule ? l : { default: l };
}
var Ti = null;
function _U() {
  Ti && (Ti.removeAttribute ? Ti.removeAttribute("aria-hidden") : Ti.length != null ? Ti.forEach(function(l) {
    return l.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(Ti).forEach(function(l) {
    return l.removeAttribute("aria-hidden");
  })), Ti = null;
}
function EU() {
  if (mU.NODE_ENV !== "production") {
    var l = Ti || {};
    console.log("ariaAppHider ----------"), console.log(l.nodeName, l.className, l.id), console.log("end ariaAppHider ----------");
  }
}
function HT(l, s) {
  if (!l || !l.length)
    throw new Error("react-modal: No elements were found for selector " + s + ".");
}
function bU(l) {
  var s = l;
  if (typeof s == "string" && SU.canUseDOM) {
    var d = document.querySelectorAll(s);
    HT(d, s), s = d;
  }
  return Ti = s || Ti, Ti;
}
function oE(l) {
  var s = l || Ti;
  return s ? Array.isArray(s) || s instanceof HTMLCollection || s instanceof NodeList ? s : [s] : ((0, gU.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function CU(l) {
  var s = !0, d = !1, v = void 0;
  try {
    for (var m = oE(l)[Symbol.iterator](), w; !(s = (w = m.next()).done); s = !0) {
      var _ = w.value;
      _.setAttribute("aria-hidden", "true");
    }
  } catch (g) {
    d = !0, v = g;
  } finally {
    try {
      !s && m.return && m.return();
    } finally {
      if (d)
        throw v;
    }
  }
}
function xU(l) {
  var s = !0, d = !1, v = void 0;
  try {
    for (var m = oE(l)[Symbol.iterator](), w; !(s = (w = m.next()).done); s = !0) {
      var _ = w.value;
      _.removeAttribute("aria-hidden");
    }
  } catch (g) {
    d = !0, v = g;
  } finally {
    try {
      !s && m.return && m.return();
    } finally {
      if (d)
        throw v;
    }
  }
}
function RU() {
  Ti = null;
}
var Xd = {}, TU = {};
Object.defineProperty(Xd, "__esModule", {
  value: !0
});
Xd.resetState = OU;
Xd.log = kU;
var Kc = {}, Xc = {};
function NR(l, s) {
  l.classList.remove(s);
}
function OU() {
  var l = document.getElementsByTagName("html")[0];
  for (var s in Kc)
    NR(l, Kc[s]);
  var d = document.body;
  for (var v in Xc)
    NR(d, Xc[v]);
  Kc = {}, Xc = {};
}
function kU() {
  if (TU.NODE_ENV !== "production") {
    var l = document.getElementsByTagName("html")[0].className, s = `Show tracked classes:

`;
    s += "<html /> (" + l + `):
  `;
    for (var d in Kc)
      s += "  " + d + " " + Kc[d] + `
  `;
    l = document.body.className, s += `

doc.body (` + l + `):
  `;
    for (var v in Xc)
      s += "  " + v + " " + Xc[v] + `
  `;
    s += `
`, console.log(s);
  }
}
var DU = function(s, d) {
  return s[d] || (s[d] = 0), s[d] += 1, d;
}, AU = function(s, d) {
  return s[d] && (s[d] -= 1), d;
}, NU = function(s, d, v) {
  v.forEach(function(m) {
    DU(d, m), s.add(m);
  });
}, LU = function(s, d, v) {
  v.forEach(function(m) {
    AU(d, m), d[m] === 0 && s.remove(m);
  });
};
Xd.add = function(s, d) {
  return NU(s.classList, s.nodeName.toLowerCase() == "html" ? Kc : Xc, d.split(" "));
};
Xd.remove = function(s, d) {
  return LU(s.classList, s.nodeName.toLowerCase() == "html" ? Kc : Xc, d.split(" "));
};
var Jd = {}, LR = {};
Object.defineProperty(Jd, "__esModule", {
  value: !0
});
Jd.log = jU;
Jd.resetState = UU;
function MU(l, s) {
  if (!(l instanceof s))
    throw new TypeError("Cannot call a class as a function");
}
var BT = function l() {
  var s = this;
  MU(this, l), this.register = function(d) {
    if (s.openInstances.indexOf(d) !== -1) {
      LR.NODE_ENV !== "production" && console.warn("React-Modal: Cannot register modal instance that's already open");
      return;
    }
    s.openInstances.push(d), s.emit("register");
  }, this.deregister = function(d) {
    var v = s.openInstances.indexOf(d);
    if (v === -1) {
      LR.NODE_ENV !== "production" && console.warn("React-Modal: Unable to deregister " + d + " as it was never registered");
      return;
    }
    s.openInstances.splice(v, 1), s.emit("deregister");
  }, this.subscribe = function(d) {
    s.subscribers.push(d);
  }, this.emit = function(d) {
    s.subscribers.forEach(function(v) {
      return v(
        d,
        // shallow copy to avoid accidental mutation
        s.openInstances.slice()
      );
    });
  }, this.openInstances = [], this.subscribers = [];
}, _g = new BT();
function jU() {
  console.log("portalOpenInstances ----------"), console.log(_g.openInstances.length), _g.openInstances.forEach(function(l) {
    return console.log(l);
  }), console.log("end portalOpenInstances ----------");
}
function UU() {
  _g = new BT();
}
Jd.default = _g;
var lE = {}, zU = {};
Object.defineProperty(lE, "__esModule", {
  value: !0
});
lE.resetState = BU;
lE.log = VU;
var PU = Jd, FU = HU(PU);
function HU(l) {
  return l && l.__esModule ? l : { default: l };
}
var Ma = void 0, Lo = void 0, Jc = [];
function BU() {
  for (var l = [Ma, Lo], s = 0; s < l.length; s++) {
    var d = l[s];
    d && d.parentNode && d.parentNode.removeChild(d);
  }
  Ma = Lo = null, Jc = [];
}
function VU() {
  console.log("bodyTrap ----------"), console.log(Jc.length);
  for (var l = [Ma, Lo], s = 0; s < l.length; s++) {
    var d = l[s], v = d || {};
    console.log(v.nodeName, v.className, v.id);
  }
  console.log("edn bodyTrap ----------");
}
function MR() {
  if (Jc.length === 0) {
    zU.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  Jc[Jc.length - 1].focusContent();
}
function IU(l, s) {
  !Ma && !Lo && (Ma = document.createElement("div"), Ma.setAttribute("data-react-modal-body-trap", ""), Ma.style.position = "absolute", Ma.style.opacity = "0", Ma.setAttribute("tabindex", "0"), Ma.addEventListener("focus", MR), Lo = Ma.cloneNode(), Lo.addEventListener("focus", MR)), Jc = s, Jc.length > 0 ? (document.body.firstChild !== Ma && document.body.insertBefore(Ma, document.body.firstChild), document.body.lastChild !== Lo && document.body.appendChild(Lo)) : (Ma.parentElement && Ma.parentElement.removeChild(Ma), Lo.parentElement && Lo.parentElement.removeChild(Lo));
}
FU.default.subscribe(IU);
(function(l, s) {
  var d = {};
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var v = Object.assign || function(le) {
    for (var me = 1; me < arguments.length; me++) {
      var de = arguments[me];
      for (var A in de)
        Object.prototype.hasOwnProperty.call(de, A) && (le[A] = de[A]);
    }
    return le;
  }, m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(le) {
    return typeof le;
  } : function(le) {
    return le && typeof Symbol == "function" && le.constructor === Symbol && le !== Symbol.prototype ? "symbol" : typeof le;
  }, w = /* @__PURE__ */ function() {
    function le(me, de) {
      for (var A = 0; A < de.length; A++) {
        var ie = de[A];
        ie.enumerable = ie.enumerable || !1, ie.configurable = !0, "value" in ie && (ie.writable = !0), Object.defineProperty(me, ie.key, ie);
      }
    }
    return function(me, de, A) {
      return de && le(me.prototype, de), A && le(me, A), me;
    };
  }(), _ = ce, g = iE, R = we(g), O = Po, D = G(O), L = oU, U = we(L), H = Fo, P = G(H), W = Xd, Y = G(W), Se = jo, ue = we(Se), Q = Jd, he = we(Q);
  function G(le) {
    if (le && le.__esModule)
      return le;
    var me = {};
    if (le != null)
      for (var de in le)
        Object.prototype.hasOwnProperty.call(le, de) && (me[de] = le[de]);
    return me.default = le, me;
  }
  function we(le) {
    return le && le.__esModule ? le : { default: le };
  }
  function He(le, me) {
    if (!(le instanceof me))
      throw new TypeError("Cannot call a class as a function");
  }
  function q(le, me) {
    if (!le)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return me && (typeof me == "object" || typeof me == "function") ? me : le;
  }
  function be(le, me) {
    if (typeof me != "function" && me !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof me);
    le.prototype = Object.create(me && me.prototype, { constructor: { value: le, enumerable: !1, writable: !0, configurable: !0 } }), me && (Object.setPrototypeOf ? Object.setPrototypeOf(le, me) : le.__proto__ = me);
  }
  var Oe = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, De = function(me) {
    return me.code === "Tab" || me.keyCode === 9;
  }, _e = function(me) {
    return me.code === "Escape" || me.keyCode === 27;
  }, Ne = 0, te = function(le) {
    be(me, le);
    function me(de) {
      He(this, me);
      var A = q(this, (me.__proto__ || Object.getPrototypeOf(me)).call(this, de));
      return A.setOverlayRef = function(ie) {
        A.overlay = ie, A.props.overlayRef && A.props.overlayRef(ie);
      }, A.setContentRef = function(ie) {
        A.content = ie, A.props.contentRef && A.props.contentRef(ie);
      }, A.afterClose = function() {
        var ie = A.props, N = ie.appElement, F = ie.ariaHideApp, ee = ie.htmlOpenClassName, Te = ie.bodyOpenClassName, xe = ie.parentSelector, Pe = xe && xe().ownerDocument || document;
        Te && Y.remove(Pe.body, Te), ee && Y.remove(Pe.getElementsByTagName("html")[0], ee), F && Ne > 0 && (Ne -= 1, Ne === 0 && P.show(N)), A.props.shouldFocusAfterRender && (A.props.shouldReturnFocusAfterClose ? (D.returnFocus(A.props.preventScroll), D.teardownScopedFocus()) : D.popWithoutFocus()), A.props.onAfterClose && A.props.onAfterClose(), he.default.deregister(A);
      }, A.open = function() {
        A.beforeOpen(), A.state.afterOpen && A.state.beforeClose ? (clearTimeout(A.closeTimer), A.setState({ beforeClose: !1 })) : (A.props.shouldFocusAfterRender && (D.setupScopedFocus(A.node), D.markForFocusLater()), A.setState({ isOpen: !0 }, function() {
          A.openAnimationFrame = requestAnimationFrame(function() {
            A.setState({ afterOpen: !0 }), A.props.isOpen && A.props.onAfterOpen && A.props.onAfterOpen({
              overlayEl: A.overlay,
              contentEl: A.content
            });
          });
        }));
      }, A.close = function() {
        A.props.closeTimeoutMS > 0 ? A.closeWithTimeout() : A.closeWithoutTimeout();
      }, A.focusContent = function() {
        return A.content && !A.contentHasFocus() && A.content.focus({ preventScroll: !0 });
      }, A.closeWithTimeout = function() {
        var ie = Date.now() + A.props.closeTimeoutMS;
        A.setState({ beforeClose: !0, closesAt: ie }, function() {
          A.closeTimer = setTimeout(A.closeWithoutTimeout, A.state.closesAt - Date.now());
        });
      }, A.closeWithoutTimeout = function() {
        A.setState({
          beforeClose: !1,
          isOpen: !1,
          afterOpen: !1,
          closesAt: null
        }, A.afterClose);
      }, A.handleKeyDown = function(ie) {
        De(ie) && (0, U.default)(A.content, ie), A.props.shouldCloseOnEsc && _e(ie) && (ie.stopPropagation(), A.requestClose(ie));
      }, A.handleOverlayOnClick = function(ie) {
        A.shouldClose === null && (A.shouldClose = !0), A.shouldClose && A.props.shouldCloseOnOverlayClick && (A.ownerHandlesClose() ? A.requestClose(ie) : A.focusContent()), A.shouldClose = null;
      }, A.handleContentOnMouseUp = function() {
        A.shouldClose = !1;
      }, A.handleOverlayOnMouseDown = function(ie) {
        !A.props.shouldCloseOnOverlayClick && ie.target == A.overlay && ie.preventDefault();
      }, A.handleContentOnClick = function() {
        A.shouldClose = !1;
      }, A.handleContentOnMouseDown = function() {
        A.shouldClose = !1;
      }, A.requestClose = function(ie) {
        return A.ownerHandlesClose() && A.props.onRequestClose(ie);
      }, A.ownerHandlesClose = function() {
        return A.props.onRequestClose;
      }, A.shouldBeClosed = function() {
        return !A.state.isOpen && !A.state.beforeClose;
      }, A.contentHasFocus = function() {
        return document.activeElement === A.content || A.content.contains(document.activeElement);
      }, A.buildClassName = function(ie, N) {
        var F = (typeof N > "u" ? "undefined" : m(N)) === "object" ? N : {
          base: Oe[ie],
          afterOpen: Oe[ie] + "--after-open",
          beforeClose: Oe[ie] + "--before-close"
        }, ee = F.base;
        return A.state.afterOpen && (ee = ee + " " + F.afterOpen), A.state.beforeClose && (ee = ee + " " + F.beforeClose), typeof N == "string" && N ? ee + " " + N : ee;
      }, A.attributesFromObject = function(ie, N) {
        return Object.keys(N).reduce(function(F, ee) {
          return F[ie + "-" + ee] = N[ee], F;
        }, {});
      }, A.state = {
        afterOpen: !1,
        beforeClose: !1
      }, A.shouldClose = null, A.moveFromContentToOverlay = null, A;
    }
    return w(me, [{
      key: "componentDidMount",
      value: function() {
        this.props.isOpen && this.open();
      }
    }, {
      key: "componentDidUpdate",
      value: function(A, ie) {
        d.NODE_ENV !== "production" && (A.bodyOpenClassName !== this.props.bodyOpenClassName && console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), A.htmlOpenClassName !== this.props.htmlOpenClassName && console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.')), this.props.isOpen && !A.isOpen ? this.open() : !this.props.isOpen && A.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !ie.isOpen && this.focusContent();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
      }
    }, {
      key: "beforeOpen",
      value: function() {
        var A = this.props, ie = A.appElement, N = A.ariaHideApp, F = A.htmlOpenClassName, ee = A.bodyOpenClassName, Te = A.parentSelector, xe = Te && Te().ownerDocument || document;
        ee && Y.add(xe.body, ee), F && Y.add(xe.getElementsByTagName("html")[0], F), N && (Ne += 1, P.hide(ie)), he.default.register(this);
      }
      // Don't steal focus from inner elements
    }, {
      key: "render",
      value: function() {
        var A = this.props, ie = A.id, N = A.className, F = A.overlayClassName, ee = A.defaultStyles, Te = A.children, xe = N ? {} : ee.content, Pe = F ? {} : ee.overlay;
        if (this.shouldBeClosed())
          return null;
        var Ie = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", F),
          style: v({}, Pe, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        }, Le = v({
          id: ie,
          ref: this.setContentRef,
          style: v({}, xe, this.props.style.content),
          className: this.buildClassName("content", N),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.attributesFromObject("aria", v({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
          "data-testid": this.props.testId
        }), Fe = this.props.contentElement(Le, Te);
        return this.props.overlayElement(Ie, Fe);
      }
    }]), me;
  }(_.Component);
  te.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  }, te.propTypes = {
    isOpen: R.default.bool.isRequired,
    defaultStyles: R.default.shape({
      content: R.default.object,
      overlay: R.default.object
    }),
    style: R.default.shape({
      content: R.default.object,
      overlay: R.default.object
    }),
    className: R.default.oneOfType([R.default.string, R.default.object]),
    overlayClassName: R.default.oneOfType([R.default.string, R.default.object]),
    parentSelector: R.default.func,
    bodyOpenClassName: R.default.string,
    htmlOpenClassName: R.default.string,
    ariaHideApp: R.default.bool,
    appElement: R.default.oneOfType([R.default.instanceOf(ue.default), R.default.instanceOf(Se.SafeHTMLCollection), R.default.instanceOf(Se.SafeNodeList), R.default.arrayOf(R.default.instanceOf(ue.default))]),
    onAfterOpen: R.default.func,
    onAfterClose: R.default.func,
    onRequestClose: R.default.func,
    closeTimeoutMS: R.default.number,
    shouldFocusAfterRender: R.default.bool,
    shouldCloseOnOverlayClick: R.default.bool,
    shouldReturnFocusAfterClose: R.default.bool,
    preventScroll: R.default.bool,
    role: R.default.string,
    contentLabel: R.default.string,
    aria: R.default.object,
    data: R.default.object,
    children: R.default.node,
    shouldCloseOnEsc: R.default.bool,
    overlayRef: R.default.func,
    contentRef: R.default.func,
    id: R.default.string,
    overlayElement: R.default.func,
    contentElement: R.default.func,
    testId: R.default.string
  }, s.default = te, l.exports = s.default;
})(V_, V_.exports);
var $U = V_.exports;
function VT() {
  var l = this.constructor.getDerivedStateFromProps(this.props, this.state);
  l != null && this.setState(l);
}
function IT(l) {
  function s(d) {
    var v = this.constructor.getDerivedStateFromProps(l, d);
    return v ?? null;
  }
  this.setState(s.bind(this));
}
function $T(l, s) {
  try {
    var d = this.props, v = this.state;
    this.props = l, this.state = s, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      d,
      v
    );
  } finally {
    this.props = d, this.state = v;
  }
}
VT.__suppressDeprecationWarning = !0;
IT.__suppressDeprecationWarning = !0;
$T.__suppressDeprecationWarning = !0;
function WU(l) {
  var s = l.prototype;
  if (!s || !s.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof l.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function")
    return l;
  var d = null, v = null, m = null;
  if (typeof s.componentWillMount == "function" ? d = "componentWillMount" : typeof s.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof s.componentWillReceiveProps == "function" ? v = "componentWillReceiveProps" : typeof s.UNSAFE_componentWillReceiveProps == "function" && (v = "UNSAFE_componentWillReceiveProps"), typeof s.componentWillUpdate == "function" ? m = "componentWillUpdate" : typeof s.UNSAFE_componentWillUpdate == "function" && (m = "UNSAFE_componentWillUpdate"), d !== null || v !== null || m !== null) {
    var w = l.displayName || l.name, _ = typeof l.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + w + " uses " + _ + " but also contains the following legacy lifecycles:" + (d !== null ? `
  ` + d : "") + (v !== null ? `
  ` + v : "") + (m !== null ? `
  ` + m : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof l.getDerivedStateFromProps == "function" && (s.componentWillMount = VT, s.componentWillReceiveProps = IT), typeof s.getSnapshotBeforeUpdate == "function") {
    if (typeof s.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    s.componentWillUpdate = $T;
    var g = s.componentDidUpdate;
    s.componentDidUpdate = function(O, D, L) {
      var U = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : L;
      g.call(this, O, D, U);
    };
  }
  return l;
}
const YU = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: WU
}, Symbol.toStringTag, { value: "Module" })), qU = /* @__PURE__ */ KN(YU);
var GU = {};
Object.defineProperty(tf, "__esModule", {
  value: !0
});
tf.bodyOpenClassName = tf.portalClassName = void 0;
var jR = Object.assign || function(l) {
  for (var s = 1; s < arguments.length; s++) {
    var d = arguments[s];
    for (var v in d)
      Object.prototype.hasOwnProperty.call(d, v) && (l[v] = d[v]);
  }
  return l;
}, QU = /* @__PURE__ */ function() {
  function l(s, d) {
    for (var v = 0; v < d.length; v++) {
      var m = d[v];
      m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(s, m.key, m);
    }
  }
  return function(s, d, v) {
    return d && l(s.prototype, d), v && l(s, v), s;
  };
}(), WT = ce, Eg = dh(WT), KU = rT, bg = dh(KU), XU = iE, Ut = dh(XU), JU = $U, UR = dh(JU), ZU = Fo, ez = nz(ZU), Cs = jo, zR = dh(Cs), tz = qU;
function nz(l) {
  if (l && l.__esModule)
    return l;
  var s = {};
  if (l != null)
    for (var d in l)
      Object.prototype.hasOwnProperty.call(l, d) && (s[d] = l[d]);
  return s.default = l, s;
}
function dh(l) {
  return l && l.__esModule ? l : { default: l };
}
function rz(l, s) {
  if (!(l instanceof s))
    throw new TypeError("Cannot call a class as a function");
}
function PR(l, s) {
  if (!l)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s && (typeof s == "object" || typeof s == "function") ? s : l;
}
function az(l, s) {
  if (typeof s != "function" && s !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof s);
  l.prototype = Object.create(s && s.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(l, s) : l.__proto__ = s);
}
var iz = tf.portalClassName = "ReactModalPortal", oz = tf.bodyOpenClassName = "ReactModal__Body--open", qc = Cs.canUseDOM && bg.default.createPortal !== void 0, Y_ = function(s) {
  return document.createElement(s);
}, FR = function() {
  return qc ? bg.default.createPortal : bg.default.unstable_renderSubtreeIntoContainer;
};
function cg(l) {
  return l();
}
var Zd = function(l) {
  az(s, l);
  function s() {
    var d, v, m, w;
    rz(this, s);
    for (var _ = arguments.length, g = Array(_), R = 0; R < _; R++)
      g[R] = arguments[R];
    return w = (v = (m = PR(this, (d = s.__proto__ || Object.getPrototypeOf(s)).call.apply(d, [this].concat(g))), m), m.removePortal = function() {
      !qc && bg.default.unmountComponentAtNode(m.node);
      var O = cg(m.props.parentSelector);
      O && O.contains(m.node) ? O.removeChild(m.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, m.portalRef = function(O) {
      m.portal = O;
    }, m.renderPortal = function(O) {
      var D = FR(), L = D(m, Eg.default.createElement(UR.default, jR({ defaultStyles: s.defaultStyles }, O)), m.node);
      m.portalRef(L);
    }, v), PR(m, w);
  }
  return QU(s, [{
    key: "componentDidMount",
    value: function() {
      if (Cs.canUseDOM) {
        qc || (this.node = Y_("div")), this.node.className = this.props.portalClassName;
        var v = cg(this.props.parentSelector);
        v.appendChild(this.node), !qc && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(v) {
      var m = cg(v.parentSelector), w = cg(this.props.parentSelector);
      return { prevParent: m, nextParent: w };
    }
  }, {
    key: "componentDidUpdate",
    value: function(v, m, w) {
      if (Cs.canUseDOM) {
        var _ = this.props, g = _.isOpen, R = _.portalClassName;
        v.portalClassName !== R && (this.node.className = R);
        var O = w.prevParent, D = w.nextParent;
        D !== O && (O.removeChild(this.node), D.appendChild(this.node)), !(!v.isOpen && !g) && !qc && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!Cs.canUseDOM || !this.node || !this.portal)) {
        var v = this.portal.state, m = Date.now(), w = v.isOpen && this.props.closeTimeoutMS && (v.closesAt || m + this.props.closeTimeoutMS);
        w ? (v.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, w - m)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!Cs.canUseDOM || !qc)
        return null;
      !this.node && qc && (this.node = Y_("div"));
      var v = FR();
      return v(Eg.default.createElement(UR.default, jR({
        ref: this.portalRef,
        defaultStyles: s.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(v) {
      ez.setElement(v);
    }
    /* eslint-disable react/no-unused-prop-types */
    /* eslint-enable react/no-unused-prop-types */
  }]), s;
}(WT.Component);
Zd.propTypes = {
  isOpen: Ut.default.bool.isRequired,
  style: Ut.default.shape({
    content: Ut.default.object,
    overlay: Ut.default.object
  }),
  portalClassName: Ut.default.string,
  bodyOpenClassName: Ut.default.string,
  htmlOpenClassName: Ut.default.string,
  className: Ut.default.oneOfType([Ut.default.string, Ut.default.shape({
    base: Ut.default.string.isRequired,
    afterOpen: Ut.default.string.isRequired,
    beforeClose: Ut.default.string.isRequired
  })]),
  overlayClassName: Ut.default.oneOfType([Ut.default.string, Ut.default.shape({
    base: Ut.default.string.isRequired,
    afterOpen: Ut.default.string.isRequired,
    beforeClose: Ut.default.string.isRequired
  })]),
  appElement: Ut.default.oneOfType([Ut.default.instanceOf(zR.default), Ut.default.instanceOf(Cs.SafeHTMLCollection), Ut.default.instanceOf(Cs.SafeNodeList), Ut.default.arrayOf(Ut.default.instanceOf(zR.default))]),
  onAfterOpen: Ut.default.func,
  onRequestClose: Ut.default.func,
  closeTimeoutMS: Ut.default.number,
  ariaHideApp: Ut.default.bool,
  shouldFocusAfterRender: Ut.default.bool,
  shouldCloseOnOverlayClick: Ut.default.bool,
  shouldReturnFocusAfterClose: Ut.default.bool,
  preventScroll: Ut.default.bool,
  parentSelector: Ut.default.func,
  aria: Ut.default.object,
  data: Ut.default.object,
  role: Ut.default.string,
  contentLabel: Ut.default.string,
  shouldCloseOnEsc: Ut.default.bool,
  overlayRef: Ut.default.func,
  contentRef: Ut.default.func,
  id: Ut.default.string,
  overlayElement: Ut.default.func,
  contentElement: Ut.default.func
};
Zd.defaultProps = {
  isOpen: !1,
  portalClassName: iz,
  bodyOpenClassName: oz,
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
  overlayElement: function(s, d) {
    return Eg.default.createElement(
      "div",
      s,
      d
    );
  },
  contentElement: function(s, d) {
    return Eg.default.createElement(
      "div",
      s,
      d
    );
  }
};
Zd.defaultStyles = {
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
(0, tz.polyfill)(Zd);
GU.NODE_ENV !== "production" && (Zd.setCreateHTMLElement = function(l) {
  return Y_ = l;
});
tf.default = Zd;
(function(l, s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var d = tf, v = m(d);
  function m(w) {
    return w && w.__esModule ? w : { default: w };
  }
  s.default = v.default, l.exports = s.default;
})(H_, H_.exports);
var lz = H_.exports;
const uE = /* @__PURE__ */ Tg(lz), Wd = Math.min, Zc = Math.max, Cg = Math.round, fg = Math.floor, xs = (l) => ({
  x: l,
  y: l
}), uz = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sz = {
  start: "end",
  end: "start"
};
function q_(l, s, d) {
  return Zc(l, Wd(s, d));
}
function ph(l, s) {
  return typeof l == "function" ? l(s) : l;
}
function rf(l) {
  return l.split("-")[0];
}
function vh(l) {
  return l.split("-")[1];
}
function YT(l) {
  return l === "x" ? "y" : "x";
}
function sE(l) {
  return l === "y" ? "height" : "width";
}
function Yd(l) {
  return ["top", "bottom"].includes(rf(l)) ? "y" : "x";
}
function cE(l) {
  return YT(Yd(l));
}
function cz(l, s, d) {
  d === void 0 && (d = !1);
  const v = vh(l), m = cE(l), w = sE(m);
  let _ = m === "x" ? v === (d ? "end" : "start") ? "right" : "left" : v === "start" ? "bottom" : "top";
  return s.reference[w] > s.floating[w] && (_ = xg(_)), [_, xg(_)];
}
function fz(l) {
  const s = xg(l);
  return [G_(l), s, G_(s)];
}
function G_(l) {
  return l.replace(/start|end/g, (s) => sz[s]);
}
function dz(l, s, d) {
  const v = ["left", "right"], m = ["right", "left"], w = ["top", "bottom"], _ = ["bottom", "top"];
  switch (l) {
    case "top":
    case "bottom":
      return d ? s ? m : v : s ? v : m;
    case "left":
    case "right":
      return s ? w : _;
    default:
      return [];
  }
}
function pz(l, s, d, v) {
  const m = vh(l);
  let w = dz(rf(l), d === "start", v);
  return m && (w = w.map((_) => _ + "-" + m), s && (w = w.concat(w.map(G_)))), w;
}
function xg(l) {
  return l.replace(/left|right|bottom|top/g, (s) => uz[s]);
}
function vz(l) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...l
  };
}
function qT(l) {
  return typeof l != "number" ? vz(l) : {
    top: l,
    right: l,
    bottom: l,
    left: l
  };
}
function Rg(l) {
  const {
    x: s,
    y: d,
    width: v,
    height: m
  } = l;
  return {
    width: v,
    height: m,
    top: d,
    left: s,
    right: s + v,
    bottom: d + m,
    x: s,
    y: d
  };
}
function HR(l, s, d) {
  let {
    reference: v,
    floating: m
  } = l;
  const w = Yd(s), _ = cE(s), g = sE(_), R = rf(s), O = w === "y", D = v.x + v.width / 2 - m.width / 2, L = v.y + v.height / 2 - m.height / 2, U = v[g] / 2 - m[g] / 2;
  let H;
  switch (R) {
    case "top":
      H = {
        x: D,
        y: v.y - m.height
      };
      break;
    case "bottom":
      H = {
        x: D,
        y: v.y + v.height
      };
      break;
    case "right":
      H = {
        x: v.x + v.width,
        y: L
      };
      break;
    case "left":
      H = {
        x: v.x - m.width,
        y: L
      };
      break;
    default:
      H = {
        x: v.x,
        y: v.y
      };
  }
  switch (vh(s)) {
    case "start":
      H[_] -= U * (d && O ? -1 : 1);
      break;
    case "end":
      H[_] += U * (d && O ? -1 : 1);
      break;
  }
  return H;
}
const hz = async (l, s, d) => {
  const {
    placement: v = "bottom",
    strategy: m = "absolute",
    middleware: w = [],
    platform: _
  } = d, g = w.filter(Boolean), R = await (_.isRTL == null ? void 0 : _.isRTL(s));
  let O = await _.getElementRects({
    reference: l,
    floating: s,
    strategy: m
  }), {
    x: D,
    y: L
  } = HR(O, v, R), U = v, H = {}, P = 0;
  for (let W = 0; W < g.length; W++) {
    const {
      name: Y,
      fn: Se
    } = g[W], {
      x: ue,
      y: Q,
      data: he,
      reset: G
    } = await Se({
      x: D,
      y: L,
      initialPlacement: v,
      placement: U,
      strategy: m,
      middlewareData: H,
      rects: O,
      platform: _,
      elements: {
        reference: l,
        floating: s
      }
    });
    D = ue ?? D, L = Q ?? L, H = {
      ...H,
      [Y]: {
        ...H[Y],
        ...he
      }
    }, G && P <= 50 && (P++, typeof G == "object" && (G.placement && (U = G.placement), G.rects && (O = G.rects === !0 ? await _.getElementRects({
      reference: l,
      floating: s,
      strategy: m
    }) : G.rects), {
      x: D,
      y: L
    } = HR(O, U, R)), W = -1);
  }
  return {
    x: D,
    y: L,
    placement: U,
    strategy: m,
    middlewareData: H
  };
};
async function GT(l, s) {
  var d;
  s === void 0 && (s = {});
  const {
    x: v,
    y: m,
    platform: w,
    rects: _,
    elements: g,
    strategy: R
  } = l, {
    boundary: O = "clippingAncestors",
    rootBoundary: D = "viewport",
    elementContext: L = "floating",
    altBoundary: U = !1,
    padding: H = 0
  } = ph(s, l), P = qT(H), Y = g[U ? L === "floating" ? "reference" : "floating" : L], Se = Rg(await w.getClippingRect({
    element: (d = await (w.isElement == null ? void 0 : w.isElement(Y))) == null || d ? Y : Y.contextElement || await (w.getDocumentElement == null ? void 0 : w.getDocumentElement(g.floating)),
    boundary: O,
    rootBoundary: D,
    strategy: R
  })), ue = L === "floating" ? {
    x: v,
    y: m,
    width: _.floating.width,
    height: _.floating.height
  } : _.reference, Q = await (w.getOffsetParent == null ? void 0 : w.getOffsetParent(g.floating)), he = await (w.isElement == null ? void 0 : w.isElement(Q)) ? await (w.getScale == null ? void 0 : w.getScale(Q)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, G = Rg(w.convertOffsetParentRelativeRectToViewportRelativeRect ? await w.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: g,
    rect: ue,
    offsetParent: Q,
    strategy: R
  }) : ue);
  return {
    top: (Se.top - G.top + P.top) / he.y,
    bottom: (G.bottom - Se.bottom + P.bottom) / he.y,
    left: (Se.left - G.left + P.left) / he.x,
    right: (G.right - Se.right + P.right) / he.x
  };
}
const mz = (l) => ({
  name: "arrow",
  options: l,
  async fn(s) {
    const {
      x: d,
      y: v,
      placement: m,
      rects: w,
      platform: _,
      elements: g,
      middlewareData: R
    } = s, {
      element: O,
      padding: D = 0
    } = ph(l, s) || {};
    if (O == null)
      return {};
    const L = qT(D), U = {
      x: d,
      y: v
    }, H = cE(m), P = sE(H), W = await _.getDimensions(O), Y = H === "y", Se = Y ? "top" : "left", ue = Y ? "bottom" : "right", Q = Y ? "clientHeight" : "clientWidth", he = w.reference[P] + w.reference[H] - U[H] - w.floating[P], G = U[H] - w.reference[H], we = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(O));
    let He = we ? we[Q] : 0;
    (!He || !await (_.isElement == null ? void 0 : _.isElement(we))) && (He = g.floating[Q] || w.floating[P]);
    const q = he / 2 - G / 2, be = He / 2 - W[P] / 2 - 1, Oe = Wd(L[Se], be), De = Wd(L[ue], be), _e = Oe, Ne = He - W[P] - De, te = He / 2 - W[P] / 2 + q, le = q_(_e, te, Ne), me = !R.arrow && vh(m) != null && te !== le && w.reference[P] / 2 - (te < _e ? Oe : De) - W[P] / 2 < 0, de = me ? te < _e ? te - _e : te - Ne : 0;
    return {
      [H]: U[H] + de,
      data: {
        [H]: le,
        centerOffset: te - le - de,
        ...me && {
          alignmentOffset: de
        }
      },
      reset: me
    };
  }
}), yz = function(l) {
  return l === void 0 && (l = {}), {
    name: "flip",
    options: l,
    async fn(s) {
      var d, v;
      const {
        placement: m,
        middlewareData: w,
        rects: _,
        initialPlacement: g,
        platform: R,
        elements: O
      } = s, {
        mainAxis: D = !0,
        crossAxis: L = !0,
        fallbackPlacements: U,
        fallbackStrategy: H = "bestFit",
        fallbackAxisSideDirection: P = "none",
        flipAlignment: W = !0,
        ...Y
      } = ph(l, s);
      if ((d = w.arrow) != null && d.alignmentOffset)
        return {};
      const Se = rf(m), ue = Yd(g), Q = rf(g) === g, he = await (R.isRTL == null ? void 0 : R.isRTL(O.floating)), G = U || (Q || !W ? [xg(g)] : fz(g)), we = P !== "none";
      !U && we && G.push(...pz(g, W, P, he));
      const He = [g, ...G], q = await GT(s, Y), be = [];
      let Oe = ((v = w.flip) == null ? void 0 : v.overflows) || [];
      if (D && be.push(q[Se]), L) {
        const te = cz(m, _, he);
        be.push(q[te[0]], q[te[1]]);
      }
      if (Oe = [...Oe, {
        placement: m,
        overflows: be
      }], !be.every((te) => te <= 0)) {
        var De, _e;
        const te = (((De = w.flip) == null ? void 0 : De.index) || 0) + 1, le = He[te];
        if (le)
          return {
            data: {
              index: te,
              overflows: Oe
            },
            reset: {
              placement: le
            }
          };
        let me = (_e = Oe.filter((de) => de.overflows[0] <= 0).sort((de, A) => de.overflows[1] - A.overflows[1])[0]) == null ? void 0 : _e.placement;
        if (!me)
          switch (H) {
            case "bestFit": {
              var Ne;
              const de = (Ne = Oe.filter((A) => {
                if (we) {
                  const ie = Yd(A.placement);
                  return ie === ue || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ie === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((ie) => ie > 0).reduce((ie, N) => ie + N, 0)]).sort((A, ie) => A[1] - ie[1])[0]) == null ? void 0 : Ne[0];
              de && (me = de);
              break;
            }
            case "initialPlacement":
              me = g;
              break;
          }
        if (m !== me)
          return {
            reset: {
              placement: me
            }
          };
      }
      return {};
    }
  };
};
async function gz(l, s) {
  const {
    placement: d,
    platform: v,
    elements: m
  } = l, w = await (v.isRTL == null ? void 0 : v.isRTL(m.floating)), _ = rf(d), g = vh(d), R = Yd(d) === "y", O = ["left", "top"].includes(_) ? -1 : 1, D = w && R ? -1 : 1, L = ph(s, l);
  let {
    mainAxis: U,
    crossAxis: H,
    alignmentAxis: P
  } = typeof L == "number" ? {
    mainAxis: L,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...L
  };
  return g && typeof P == "number" && (H = g === "end" ? P * -1 : P), R ? {
    x: H * D,
    y: U * O
  } : {
    x: U * O,
    y: H * D
  };
}
const Sz = function(l) {
  return l === void 0 && (l = 0), {
    name: "offset",
    options: l,
    async fn(s) {
      var d, v;
      const {
        x: m,
        y: w,
        placement: _,
        middlewareData: g
      } = s, R = await gz(s, l);
      return _ === ((d = g.offset) == null ? void 0 : d.placement) && (v = g.arrow) != null && v.alignmentOffset ? {} : {
        x: m + R.x,
        y: w + R.y,
        data: {
          ...R,
          placement: _
        }
      };
    }
  };
}, wz = function(l) {
  return l === void 0 && (l = {}), {
    name: "shift",
    options: l,
    async fn(s) {
      const {
        x: d,
        y: v,
        placement: m
      } = s, {
        mainAxis: w = !0,
        crossAxis: _ = !1,
        limiter: g = {
          fn: (Y) => {
            let {
              x: Se,
              y: ue
            } = Y;
            return {
              x: Se,
              y: ue
            };
          }
        },
        ...R
      } = ph(l, s), O = {
        x: d,
        y: v
      }, D = await GT(s, R), L = Yd(rf(m)), U = YT(L);
      let H = O[U], P = O[L];
      if (w) {
        const Y = U === "y" ? "top" : "left", Se = U === "y" ? "bottom" : "right", ue = H + D[Y], Q = H - D[Se];
        H = q_(ue, H, Q);
      }
      if (_) {
        const Y = L === "y" ? "top" : "left", Se = L === "y" ? "bottom" : "right", ue = P + D[Y], Q = P - D[Se];
        P = q_(ue, P, Q);
      }
      const W = g.fn({
        ...s,
        [U]: H,
        [L]: P
      });
      return {
        ...W,
        data: {
          x: W.x - d,
          y: W.y - v
        }
      };
    }
  };
};
function ep(l) {
  return QT(l) ? (l.nodeName || "").toLowerCase() : "#document";
}
function Di(l) {
  var s;
  return (l == null || (s = l.ownerDocument) == null ? void 0 : s.defaultView) || window;
}
function hu(l) {
  var s;
  return (s = (QT(l) ? l.ownerDocument : l.document) || window.document) == null ? void 0 : s.documentElement;
}
function QT(l) {
  return l instanceof Node || l instanceof Di(l).Node;
}
function El(l) {
  return l instanceof Element || l instanceof Di(l).Element;
}
function bl(l) {
  return l instanceof HTMLElement || l instanceof Di(l).HTMLElement;
}
function BR(l) {
  return typeof ShadowRoot > "u" ? !1 : l instanceof ShadowRoot || l instanceof Di(l).ShadowRoot;
}
function hh(l) {
  const {
    overflow: s,
    overflowX: d,
    overflowY: v,
    display: m
  } = Uo(l);
  return /auto|scroll|overlay|hidden|clip/.test(s + v + d) && !["inline", "contents"].includes(m);
}
function _z(l) {
  return ["table", "td", "th"].includes(ep(l));
}
function jg(l) {
  return [":popover-open", ":modal"].some((s) => {
    try {
      return l.matches(s);
    } catch {
      return !1;
    }
  });
}
function fE(l) {
  const s = dE(), d = Uo(l);
  return d.transform !== "none" || d.perspective !== "none" || (d.containerType ? d.containerType !== "normal" : !1) || !s && (d.backdropFilter ? d.backdropFilter !== "none" : !1) || !s && (d.filter ? d.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((v) => (d.willChange || "").includes(v)) || ["paint", "layout", "strict", "content"].some((v) => (d.contain || "").includes(v));
}
function Ez(l) {
  let s = Rs(l);
  for (; bl(s) && !qd(s); ) {
    if (jg(s))
      return null;
    if (fE(s))
      return s;
    s = Rs(s);
  }
  return null;
}
function dE() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function qd(l) {
  return ["html", "body", "#document"].includes(ep(l));
}
function Uo(l) {
  return Di(l).getComputedStyle(l);
}
function Ug(l) {
  return El(l) ? {
    scrollLeft: l.scrollLeft,
    scrollTop: l.scrollTop
  } : {
    scrollLeft: l.scrollX,
    scrollTop: l.scrollY
  };
}
function Rs(l) {
  if (ep(l) === "html")
    return l;
  const s = (
    // Step into the shadow DOM of the parent of a slotted node.
    l.assignedSlot || // DOM Element detected.
    l.parentNode || // ShadowRoot detected.
    BR(l) && l.host || // Fallback.
    hu(l)
  );
  return BR(s) ? s.host : s;
}
function KT(l) {
  const s = Rs(l);
  return qd(s) ? l.ownerDocument ? l.ownerDocument.body : l.body : bl(s) && hh(s) ? s : KT(s);
}
function uh(l, s, d) {
  var v;
  s === void 0 && (s = []), d === void 0 && (d = !0);
  const m = KT(l), w = m === ((v = l.ownerDocument) == null ? void 0 : v.body), _ = Di(m);
  return w ? s.concat(_, _.visualViewport || [], hh(m) ? m : [], _.frameElement && d ? uh(_.frameElement) : []) : s.concat(m, uh(m, [], d));
}
function XT(l) {
  const s = Uo(l);
  let d = parseFloat(s.width) || 0, v = parseFloat(s.height) || 0;
  const m = bl(l), w = m ? l.offsetWidth : d, _ = m ? l.offsetHeight : v, g = Cg(d) !== w || Cg(v) !== _;
  return g && (d = w, v = _), {
    width: d,
    height: v,
    $: g
  };
}
function pE(l) {
  return El(l) ? l : l.contextElement;
}
function $d(l) {
  const s = pE(l);
  if (!bl(s))
    return xs(1);
  const d = s.getBoundingClientRect(), {
    width: v,
    height: m,
    $: w
  } = XT(s);
  let _ = (w ? Cg(d.width) : d.width) / v, g = (w ? Cg(d.height) : d.height) / m;
  return (!_ || !Number.isFinite(_)) && (_ = 1), (!g || !Number.isFinite(g)) && (g = 1), {
    x: _,
    y: g
  };
}
const bz = /* @__PURE__ */ xs(0);
function JT(l) {
  const s = Di(l);
  return !dE() || !s.visualViewport ? bz : {
    x: s.visualViewport.offsetLeft,
    y: s.visualViewport.offsetTop
  };
}
function Cz(l, s, d) {
  return s === void 0 && (s = !1), !d || s && d !== Di(l) ? !1 : s;
}
function af(l, s, d, v) {
  s === void 0 && (s = !1), d === void 0 && (d = !1);
  const m = l.getBoundingClientRect(), w = pE(l);
  let _ = xs(1);
  s && (v ? El(v) && (_ = $d(v)) : _ = $d(l));
  const g = Cz(w, d, v) ? JT(w) : xs(0);
  let R = (m.left + g.x) / _.x, O = (m.top + g.y) / _.y, D = m.width / _.x, L = m.height / _.y;
  if (w) {
    const U = Di(w), H = v && El(v) ? Di(v) : v;
    let P = U, W = P.frameElement;
    for (; W && v && H !== P; ) {
      const Y = $d(W), Se = W.getBoundingClientRect(), ue = Uo(W), Q = Se.left + (W.clientLeft + parseFloat(ue.paddingLeft)) * Y.x, he = Se.top + (W.clientTop + parseFloat(ue.paddingTop)) * Y.y;
      R *= Y.x, O *= Y.y, D *= Y.x, L *= Y.y, R += Q, O += he, P = Di(W), W = P.frameElement;
    }
  }
  return Rg({
    width: D,
    height: L,
    x: R,
    y: O
  });
}
function xz(l) {
  let {
    elements: s,
    rect: d,
    offsetParent: v,
    strategy: m
  } = l;
  const w = m === "fixed", _ = hu(v), g = s ? jg(s.floating) : !1;
  if (v === _ || g && w)
    return d;
  let R = {
    scrollLeft: 0,
    scrollTop: 0
  }, O = xs(1);
  const D = xs(0), L = bl(v);
  if ((L || !L && !w) && ((ep(v) !== "body" || hh(_)) && (R = Ug(v)), bl(v))) {
    const U = af(v);
    O = $d(v), D.x = U.x + v.clientLeft, D.y = U.y + v.clientTop;
  }
  return {
    width: d.width * O.x,
    height: d.height * O.y,
    x: d.x * O.x - R.scrollLeft * O.x + D.x,
    y: d.y * O.y - R.scrollTop * O.y + D.y
  };
}
function Rz(l) {
  return Array.from(l.getClientRects());
}
function ZT(l) {
  return af(hu(l)).left + Ug(l).scrollLeft;
}
function Tz(l) {
  const s = hu(l), d = Ug(l), v = l.ownerDocument.body, m = Zc(s.scrollWidth, s.clientWidth, v.scrollWidth, v.clientWidth), w = Zc(s.scrollHeight, s.clientHeight, v.scrollHeight, v.clientHeight);
  let _ = -d.scrollLeft + ZT(l);
  const g = -d.scrollTop;
  return Uo(v).direction === "rtl" && (_ += Zc(s.clientWidth, v.clientWidth) - m), {
    width: m,
    height: w,
    x: _,
    y: g
  };
}
function Oz(l, s) {
  const d = Di(l), v = hu(l), m = d.visualViewport;
  let w = v.clientWidth, _ = v.clientHeight, g = 0, R = 0;
  if (m) {
    w = m.width, _ = m.height;
    const O = dE();
    (!O || O && s === "fixed") && (g = m.offsetLeft, R = m.offsetTop);
  }
  return {
    width: w,
    height: _,
    x: g,
    y: R
  };
}
function kz(l, s) {
  const d = af(l, !0, s === "fixed"), v = d.top + l.clientTop, m = d.left + l.clientLeft, w = bl(l) ? $d(l) : xs(1), _ = l.clientWidth * w.x, g = l.clientHeight * w.y, R = m * w.x, O = v * w.y;
  return {
    width: _,
    height: g,
    x: R,
    y: O
  };
}
function VR(l, s, d) {
  let v;
  if (s === "viewport")
    v = Oz(l, d);
  else if (s === "document")
    v = Tz(hu(l));
  else if (El(s))
    v = kz(s, d);
  else {
    const m = JT(l);
    v = {
      ...s,
      x: s.x - m.x,
      y: s.y - m.y
    };
  }
  return Rg(v);
}
function e1(l, s) {
  const d = Rs(l);
  return d === s || !El(d) || qd(d) ? !1 : Uo(d).position === "fixed" || e1(d, s);
}
function Dz(l, s) {
  const d = s.get(l);
  if (d)
    return d;
  let v = uh(l, [], !1).filter((g) => El(g) && ep(g) !== "body"), m = null;
  const w = Uo(l).position === "fixed";
  let _ = w ? Rs(l) : l;
  for (; El(_) && !qd(_); ) {
    const g = Uo(_), R = fE(_);
    !R && g.position === "fixed" && (m = null), (w ? !R && !m : !R && g.position === "static" && !!m && ["absolute", "fixed"].includes(m.position) || hh(_) && !R && e1(l, _)) ? v = v.filter((D) => D !== _) : m = g, _ = Rs(_);
  }
  return s.set(l, v), v;
}
function Az(l) {
  let {
    element: s,
    boundary: d,
    rootBoundary: v,
    strategy: m
  } = l;
  const _ = [...d === "clippingAncestors" ? jg(s) ? [] : Dz(s, this._c) : [].concat(d), v], g = _[0], R = _.reduce((O, D) => {
    const L = VR(s, D, m);
    return O.top = Zc(L.top, O.top), O.right = Wd(L.right, O.right), O.bottom = Wd(L.bottom, O.bottom), O.left = Zc(L.left, O.left), O;
  }, VR(s, g, m));
  return {
    width: R.right - R.left,
    height: R.bottom - R.top,
    x: R.left,
    y: R.top
  };
}
function Nz(l) {
  const {
    width: s,
    height: d
  } = XT(l);
  return {
    width: s,
    height: d
  };
}
function Lz(l, s, d) {
  const v = bl(s), m = hu(s), w = d === "fixed", _ = af(l, !0, w, s);
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const R = xs(0);
  if (v || !v && !w)
    if ((ep(s) !== "body" || hh(m)) && (g = Ug(s)), v) {
      const L = af(s, !0, w, s);
      R.x = L.x + s.clientLeft, R.y = L.y + s.clientTop;
    } else m && (R.x = ZT(m));
  const O = _.left + g.scrollLeft - R.x, D = _.top + g.scrollTop - R.y;
  return {
    x: O,
    y: D,
    width: _.width,
    height: _.height
  };
}
function C_(l) {
  return Uo(l).position === "static";
}
function IR(l, s) {
  return !bl(l) || Uo(l).position === "fixed" ? null : s ? s(l) : l.offsetParent;
}
function t1(l, s) {
  const d = Di(l);
  if (jg(l))
    return d;
  if (!bl(l)) {
    let m = Rs(l);
    for (; m && !qd(m); ) {
      if (El(m) && !C_(m))
        return m;
      m = Rs(m);
    }
    return d;
  }
  let v = IR(l, s);
  for (; v && _z(v) && C_(v); )
    v = IR(v, s);
  return v && qd(v) && C_(v) && !fE(v) ? d : v || Ez(l) || d;
}
const Mz = async function(l) {
  const s = this.getOffsetParent || t1, d = this.getDimensions, v = await d(l.floating);
  return {
    reference: Lz(l.reference, await s(l.floating), l.strategy),
    floating: {
      x: 0,
      y: 0,
      width: v.width,
      height: v.height
    }
  };
};
function jz(l) {
  return Uo(l).direction === "rtl";
}
const Uz = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xz,
  getDocumentElement: hu,
  getClippingRect: Az,
  getOffsetParent: t1,
  getElementRects: Mz,
  getClientRects: Rz,
  getDimensions: Nz,
  getScale: $d,
  isElement: El,
  isRTL: jz
};
function zz(l, s) {
  let d = null, v;
  const m = hu(l);
  function w() {
    var g;
    clearTimeout(v), (g = d) == null || g.disconnect(), d = null;
  }
  function _(g, R) {
    g === void 0 && (g = !1), R === void 0 && (R = 1), w();
    const {
      left: O,
      top: D,
      width: L,
      height: U
    } = l.getBoundingClientRect();
    if (g || s(), !L || !U)
      return;
    const H = fg(D), P = fg(m.clientWidth - (O + L)), W = fg(m.clientHeight - (D + U)), Y = fg(O), ue = {
      rootMargin: -H + "px " + -P + "px " + -W + "px " + -Y + "px",
      threshold: Zc(0, Wd(1, R)) || 1
    };
    let Q = !0;
    function he(G) {
      const we = G[0].intersectionRatio;
      if (we !== R) {
        if (!Q)
          return _();
        we ? _(!1, we) : v = setTimeout(() => {
          _(!1, 1e-7);
        }, 1e3);
      }
      Q = !1;
    }
    try {
      d = new IntersectionObserver(he, {
        ...ue,
        // Handle <iframe>s
        root: m.ownerDocument
      });
    } catch {
      d = new IntersectionObserver(he, ue);
    }
    d.observe(l);
  }
  return _(!0), w;
}
function Pz(l, s, d, v) {
  v === void 0 && (v = {});
  const {
    ancestorScroll: m = !0,
    ancestorResize: w = !0,
    elementResize: _ = typeof ResizeObserver == "function",
    layoutShift: g = typeof IntersectionObserver == "function",
    animationFrame: R = !1
  } = v, O = pE(l), D = m || w ? [...O ? uh(O) : [], ...uh(s)] : [];
  D.forEach((Se) => {
    m && Se.addEventListener("scroll", d, {
      passive: !0
    }), w && Se.addEventListener("resize", d);
  });
  const L = O && g ? zz(O, d) : null;
  let U = -1, H = null;
  _ && (H = new ResizeObserver((Se) => {
    let [ue] = Se;
    ue && ue.target === O && H && (H.unobserve(s), cancelAnimationFrame(U), U = requestAnimationFrame(() => {
      var Q;
      (Q = H) == null || Q.observe(s);
    })), d();
  }), O && !R && H.observe(O), H.observe(s));
  let P, W = R ? af(l) : null;
  R && Y();
  function Y() {
    const Se = af(l);
    W && (Se.x !== W.x || Se.y !== W.y || Se.width !== W.width || Se.height !== W.height) && d(), W = Se, P = requestAnimationFrame(Y);
  }
  return d(), () => {
    var Se;
    D.forEach((ue) => {
      m && ue.removeEventListener("scroll", d), w && ue.removeEventListener("resize", d);
    }), L == null || L(), (Se = H) == null || Se.disconnect(), H = null, R && cancelAnimationFrame(P);
  };
}
const Fz = Sz, Hz = wz, Bz = yz, Vz = mz, $R = (l, s, d) => {
  const v = /* @__PURE__ */ new Map(), m = {
    platform: Uz,
    ...d
  }, w = {
    ...m.platform,
    _c: v
  };
  return hz(l, s, {
    ...m,
    platform: w
  });
};
var n1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(l) {
  (function() {
    var s = {}.hasOwnProperty;
    function d() {
      for (var w = "", _ = 0; _ < arguments.length; _++) {
        var g = arguments[_];
        g && (w = m(w, v(g)));
      }
      return w;
    }
    function v(w) {
      if (typeof w == "string" || typeof w == "number")
        return w;
      if (typeof w != "object")
        return "";
      if (Array.isArray(w))
        return d.apply(null, w);
      if (w.toString !== Object.prototype.toString && !w.toString.toString().includes("[native code]"))
        return w.toString();
      var _ = "";
      for (var g in w)
        s.call(w, g) && w[g] && (_ = m(_, g));
      return _;
    }
    function m(w, _) {
      return _ ? w ? w + " " + _ : w + _ : w;
    }
    l.exports ? (d.default = d, l.exports = d) : window.classNames = d;
  })();
})(n1);
var Iz = n1.exports;
const Q_ = /* @__PURE__ */ Tg(Iz);
var WR = {};
const $z = "react-tooltip-core-styles", Wz = "react-tooltip-base-styles", YR = { core: !1, base: !1 };
function qR({ css: l, id: s = Wz, type: d = "base", ref: v }) {
  var m, w;
  if (!l || typeof document > "u" || YR[d] || d === "core" && typeof process < "u" && (!((m = process == null ? void 0 : WR) === null || m === void 0) && m.REACT_TOOLTIP_DISABLE_CORE_STYLES) || d !== "base" && typeof process < "u" && (!((w = process == null ? void 0 : WR) === null || w === void 0) && w.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
  d === "core" && (s = $z), v || (v = {});
  const { insertAt: _ } = v;
  if (document.getElementById(s)) return;
  const g = document.head || document.getElementsByTagName("head")[0], R = document.createElement("style");
  R.id = s, R.type = "text/css", _ === "top" && g.firstChild ? g.insertBefore(R, g.firstChild) : g.appendChild(R), R.styleSheet ? R.styleSheet.cssText = l : R.appendChild(document.createTextNode(l)), YR[d] = !0;
}
const GR = async ({ elementReference: l = null, tooltipReference: s = null, tooltipArrowReference: d = null, place: v = "top", offset: m = 10, strategy: w = "absolute", middlewares: _ = [Fz(Number(m)), Bz({ fallbackAxisSideDirection: "start" }), Hz({ padding: 5 })], border: g }) => {
  if (!l) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: v };
  if (s === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: v };
  const R = _;
  return d ? (R.push(Vz({ element: d, padding: 5 })), $R(l, s, { placement: v, strategy: w, middleware: R }).then(({ x: O, y: D, placement: L, middlewareData: U }) => {
    var H, P;
    const W = { left: `${O}px`, top: `${D}px`, border: g }, { x: Y, y: Se } = (H = U.arrow) !== null && H !== void 0 ? H : { x: 0, y: 0 }, ue = (P = { top: "bottom", right: "left", bottom: "top", left: "right" }[L.split("-")[0]]) !== null && P !== void 0 ? P : "bottom", Q = g && { borderBottom: g, borderRight: g };
    let he = 0;
    if (g) {
      const G = `${g}`.match(/(\d+)px/);
      he = G != null && G[1] ? Number(G[1]) : 1;
    }
    return { tooltipStyles: W, tooltipArrowStyles: { left: Y != null ? `${Y}px` : "", top: Se != null ? `${Se}px` : "", right: "", bottom: "", ...Q, [ue]: `-${4 + he}px` }, place: L };
  })) : $R(l, s, { placement: "bottom", strategy: w, middleware: R }).then(({ x: O, y: D, placement: L }) => ({ tooltipStyles: { left: `${O}px`, top: `${D}px` }, tooltipArrowStyles: {}, place: L }));
}, QR = (l, s) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(l, s), KR = (l, s, d) => {
  let v = null;
  const m = function(...w) {
    const _ = () => {
      v = null;
    };
    !v && (l.apply(this, w), v = setTimeout(_, s));
  };
  return m.cancel = () => {
    v && (clearTimeout(v), v = null);
  }, m;
}, XR = (l) => l !== null && !Array.isArray(l) && typeof l == "object", K_ = (l, s) => {
  if (l === s) return !0;
  if (Array.isArray(l) && Array.isArray(s)) return l.length === s.length && l.every((m, w) => K_(m, s[w]));
  if (Array.isArray(l) !== Array.isArray(s)) return !1;
  if (!XR(l) || !XR(s)) return l === s;
  const d = Object.keys(l), v = Object.keys(s);
  return d.length === v.length && d.every((m) => K_(l[m], s[m]));
}, Yz = (l) => {
  if (!(l instanceof HTMLElement || l instanceof SVGElement)) return !1;
  const s = getComputedStyle(l);
  return ["overflow", "overflow-x", "overflow-y"].some((d) => {
    const v = s.getPropertyValue(d);
    return v === "auto" || v === "scroll";
  });
}, JR = (l) => {
  if (!l) return null;
  let s = l.parentElement;
  for (; s; ) {
    if (Yz(s)) return s;
    s = s.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, qz = typeof window < "u" ? ce.useLayoutEffect : ce.useEffect, Zi = (l) => {
  l.current && (clearTimeout(l.current), l.current = null);
}, Gz = "DEFAULT_TOOLTIP_ID", Qz = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Kz = ce.createContext({ getTooltipData: () => Qz });
function r1(l = Gz) {
  return ce.useContext(Kz).getTooltipData(l);
}
var Vd = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, x_ = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Xz = ({ forwardRef: l, id: s, className: d, classNameArrow: v, variant: m = "dark", anchorId: w, anchorSelect: _, place: g = "top", offset: R = 10, events: O = ["hover"], openOnClick: D = !1, positionStrategy: L = "absolute", middlewares: U, wrapper: H, delayShow: P = 0, delayHide: W = 0, float: Y = !1, hidden: Se = !1, noArrow: ue = !1, clickable: Q = !1, closeOnEsc: he = !1, closeOnScroll: G = !1, closeOnResize: we = !1, openEvents: He, closeEvents: q, globalCloseEvents: be, imperativeModeOnly: Oe, style: De, position: _e, afterShow: Ne, afterHide: te, content: le, contentWrapperRef: me, isOpen: de, defaultIsOpen: A = !1, setIsOpen: ie, activeAnchor: N, setActiveAnchor: F, border: ee, opacity: Te, arrowColor: xe, role: Pe = "tooltip" }) => {
  var Ie;
  const Le = ce.useRef(null), Fe = ce.useRef(null), Ke = ce.useRef(null), vt = ce.useRef(null), ht = ce.useRef(null), [Vt, Me] = ce.useState({ tooltipStyles: {}, tooltipArrowStyles: {}, place: g }), [xt, xn] = ce.useState(!1), [cn, wn] = ce.useState(!1), [Lt, sr] = ce.useState(null), er = ce.useRef(!1), Ln = ce.useRef(null), { anchorRefs: Er, setActiveAnchor: Dr } = r1(s), $n = ce.useRef(!1), [tr, Wn] = ce.useState([]), Yn = ce.useRef(!1), un = D || O.includes("click"), br = un || (He == null ? void 0 : He.click) || (He == null ? void 0 : He.dblclick) || (He == null ? void 0 : He.mousedown), gr = He ? { ...He } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !He && un && Object.assign(gr, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const Cr = q ? { ...q } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !q && un && Object.assign(Cr, { mouseleave: !1, blur: !1, mouseout: !1 });
  const je = be ? { ...be } : { escape: he || !1, scroll: G || !1, resize: we || !1, clickOutsideAnchor: br || !1 };
  Oe && (Object.assign(gr, { mouseenter: !1, focus: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Cr, { mouseleave: !1, blur: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(je, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), qz(() => (Yn.current = !0, () => {
    Yn.current = !1;
  }), []);
  const $e = (We) => {
    Yn.current && (We && wn(!0), setTimeout(() => {
      Yn.current && (ie == null || ie(We), de === void 0 && xn(We));
    }, 10));
  };
  ce.useEffect(() => {
    if (de === void 0) return () => null;
    de && wn(!0);
    const We = setTimeout(() => {
      xn(de);
    }, 10);
    return () => {
      clearTimeout(We);
    };
  }, [de]), ce.useEffect(() => {
    if (xt !== er.current) if (Zi(ht), er.current = xt, xt) Ne == null || Ne();
    else {
      const We = ((ft) => {
        const mt = ft.match(/^([\d.]+)(ms|s)$/);
        if (!mt) return 0;
        const [, sn, kn] = mt;
        return Number(sn) * (kn === "ms" ? 1 : 1e3);
      })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
      ht.current = setTimeout(() => {
        wn(!1), sr(null), te == null || te();
      }, We + 25);
    }
  }, [xt]);
  const Tt = (We) => {
    Me((ft) => K_(ft, We) ? ft : We);
  }, Yt = (We = P) => {
    Zi(Ke), cn ? $e(!0) : Ke.current = setTimeout(() => {
      $e(!0);
    }, We);
  }, Bt = (We = W) => {
    Zi(vt), vt.current = setTimeout(() => {
      $n.current || $e(!1);
    }, We);
  }, Rn = (We) => {
    var ft;
    if (!We) return;
    const mt = (ft = We.currentTarget) !== null && ft !== void 0 ? ft : We.target;
    if (!(mt != null && mt.isConnected)) return F(null), void Dr({ current: null });
    P ? Yt() : $e(!0), F(mt), Dr({ current: mt }), Zi(vt);
  }, fn = () => {
    Q ? Bt(W || 100) : W ? Bt() : $e(!1), Zi(Ke);
  }, qn = ({ x: We, y: ft }) => {
    var mt;
    const sn = { getBoundingClientRect: () => ({ x: We, y: ft, width: 0, height: 0, top: ft, left: We, right: We, bottom: ft }) };
    GR({ place: (mt = Lt == null ? void 0 : Lt.place) !== null && mt !== void 0 ? mt : g, offset: R, elementReference: sn, tooltipReference: Le.current, tooltipArrowReference: Fe.current, strategy: L, middlewares: U, border: ee }).then((kn) => {
      Tt(kn);
    });
  }, qt = (We) => {
    if (!We) return;
    const ft = We, mt = { x: ft.clientX, y: ft.clientY };
    qn(mt), Ln.current = mt;
  }, Bn = (We) => {
    var ft;
    if (!xt) return;
    const mt = We.target;
    mt.isConnected && (!((ft = Le.current) === null || ft === void 0) && ft.contains(mt) || [document.querySelector(`[id='${w}']`), ...tr].some((sn) => sn == null ? void 0 : sn.contains(mt)) || ($e(!1), Zi(Ke)));
  }, Qt = KR(Rn, 50), Dt = KR(fn, 50), Vn = (We) => {
    Dt.cancel(), Qt(We);
  }, lt = () => {
    Qt.cancel(), Dt();
  }, jt = ce.useCallback(() => {
    var We, ft;
    const mt = (We = Lt == null ? void 0 : Lt.position) !== null && We !== void 0 ? We : _e;
    mt ? qn(mt) : Y ? Ln.current && qn(Ln.current) : N != null && N.isConnected && GR({ place: (ft = Lt == null ? void 0 : Lt.place) !== null && ft !== void 0 ? ft : g, offset: R, elementReference: N, tooltipReference: Le.current, tooltipArrowReference: Fe.current, strategy: L, middlewares: U, border: ee }).then((sn) => {
      Yn.current && Tt(sn);
    });
  }, [xt, N, le, De, g, Lt == null ? void 0 : Lt.place, R, L, _e, Lt == null ? void 0 : Lt.position, Y]);
  ce.useEffect(() => {
    var We, ft;
    const mt = new Set(Er);
    tr.forEach((Ve) => {
      mt.add({ current: Ve });
    });
    const sn = document.querySelector(`[id='${w}']`);
    sn && mt.add({ current: sn });
    const kn = () => {
      $e(!1);
    }, Mn = JR(N), jn = JR(Le.current);
    je.scroll && (window.addEventListener("scroll", kn), Mn == null || Mn.addEventListener("scroll", kn), jn == null || jn.addEventListener("scroll", kn));
    let mn = null;
    je.resize ? window.addEventListener("resize", kn) : N && Le.current && (mn = Pz(N, Le.current, jt, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const nr = (Ve) => {
      Ve.key === "Escape" && $e(!1);
    };
    je.escape && window.addEventListener("keydown", nr), je.clickOutsideAnchor && window.addEventListener("click", Bn);
    const j = [], Ee = (Ve) => {
      xt && (Ve == null ? void 0 : Ve.target) === N || Rn(Ve);
    }, Ye = (Ve) => {
      xt && (Ve == null ? void 0 : Ve.target) === N && fn();
    }, qe = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], zt = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(gr).forEach(([Ve, dn]) => {
      dn && (qe.includes(Ve) ? j.push({ event: Ve, listener: Vn }) : zt.includes(Ve) && j.push({ event: Ve, listener: Ee }));
    }), Object.entries(Cr).forEach(([Ve, dn]) => {
      dn && (qe.includes(Ve) ? j.push({ event: Ve, listener: lt }) : zt.includes(Ve) && j.push({ event: Ve, listener: Ye }));
    }), Y && j.push({ event: "pointermove", listener: qt });
    const It = () => {
      $n.current = !0;
    }, At = () => {
      $n.current = !1, fn();
    };
    return Q && !br && ((We = Le.current) === null || We === void 0 || We.addEventListener("mouseenter", It), (ft = Le.current) === null || ft === void 0 || ft.addEventListener("mouseleave", At)), j.forEach(({ event: Ve, listener: dn }) => {
      mt.forEach((pn) => {
        var nn;
        (nn = pn.current) === null || nn === void 0 || nn.addEventListener(Ve, dn);
      });
    }), () => {
      var Ve, dn;
      je.scroll && (window.removeEventListener("scroll", kn), Mn == null || Mn.removeEventListener("scroll", kn), jn == null || jn.removeEventListener("scroll", kn)), je.resize ? window.removeEventListener("resize", kn) : mn == null || mn(), je.clickOutsideAnchor && window.removeEventListener("click", Bn), je.escape && window.removeEventListener("keydown", nr), Q && !br && ((Ve = Le.current) === null || Ve === void 0 || Ve.removeEventListener("mouseenter", It), (dn = Le.current) === null || dn === void 0 || dn.removeEventListener("mouseleave", At)), j.forEach(({ event: pn, listener: nn }) => {
        mt.forEach((Ar) => {
          var pa;
          (pa = Ar.current) === null || pa === void 0 || pa.removeEventListener(pn, nn);
        });
      });
    };
  }, [N, jt, cn, Er, tr, He, q, be, un, P, W]), ce.useEffect(() => {
    var We, ft;
    let mt = (ft = (We = Lt == null ? void 0 : Lt.anchorSelect) !== null && We !== void 0 ? We : _) !== null && ft !== void 0 ? ft : "";
    !mt && s && (mt = `[data-tooltip-id='${s.replace(/'/g, "\\'")}']`);
    const sn = new MutationObserver((kn) => {
      const Mn = [], jn = [];
      kn.forEach((mn) => {
        if (mn.type === "attributes" && mn.attributeName === "data-tooltip-id" && (mn.target.getAttribute("data-tooltip-id") === s ? Mn.push(mn.target) : mn.oldValue === s && jn.push(mn.target)), mn.type === "childList") {
          if (N) {
            const nr = [...mn.removedNodes].filter((j) => j.nodeType === 1);
            if (mt) try {
              jn.push(...nr.filter((j) => j.matches(mt))), jn.push(...nr.flatMap((j) => [...j.querySelectorAll(mt)]));
            } catch {
            }
            nr.some((j) => {
              var Ee;
              return !!(!((Ee = j == null ? void 0 : j.contains) === null || Ee === void 0) && Ee.call(j, N)) && (wn(!1), $e(!1), F(null), Zi(Ke), Zi(vt), !0);
            });
          }
          if (mt) try {
            const nr = [...mn.addedNodes].filter((j) => j.nodeType === 1);
            Mn.push(...nr.filter((j) => j.matches(mt))), Mn.push(...nr.flatMap((j) => [...j.querySelectorAll(mt)]));
          } catch {
          }
        }
      }), (Mn.length || jn.length) && Wn((mn) => [...mn.filter((nr) => !jn.includes(nr)), ...Mn]);
    });
    return sn.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      sn.disconnect();
    };
  }, [s, _, Lt == null ? void 0 : Lt.anchorSelect, N]), ce.useEffect(() => {
    jt();
  }, [jt]), ce.useEffect(() => {
    if (!(me != null && me.current)) return () => null;
    const We = new ResizeObserver(() => {
      setTimeout(() => jt());
    });
    return We.observe(me.current), () => {
      We.disconnect();
    };
  }, [le, me == null ? void 0 : me.current]), ce.useEffect(() => {
    var We;
    const ft = document.querySelector(`[id='${w}']`), mt = [...tr, ft];
    N && mt.includes(N) || F((We = tr[0]) !== null && We !== void 0 ? We : ft);
  }, [w, tr, N]), ce.useEffect(() => (A && $e(!0), () => {
    Zi(Ke), Zi(vt);
  }), []), ce.useEffect(() => {
    var We;
    let ft = (We = Lt == null ? void 0 : Lt.anchorSelect) !== null && We !== void 0 ? We : _;
    if (!ft && s && (ft = `[data-tooltip-id='${s.replace(/'/g, "\\'")}']`), ft) try {
      const mt = Array.from(document.querySelectorAll(ft));
      Wn(mt);
    } catch {
      Wn([]);
    }
  }, [s, _, Lt == null ? void 0 : Lt.anchorSelect]), ce.useEffect(() => {
    Ke.current && (Zi(Ke), Yt(P));
  }, [P]);
  const cr = (Ie = Lt == null ? void 0 : Lt.content) !== null && Ie !== void 0 ? Ie : le, ea = xt && Object.keys(Vt.tooltipStyles).length > 0;
  return ce.useImperativeHandle(l, () => ({ open: (We) => {
    if (We != null && We.anchorSelect) try {
      document.querySelector(We.anchorSelect);
    } catch {
      return void console.warn(`[react-tooltip] "${We.anchorSelect}" is not a valid CSS selector`);
    }
    sr(We ?? null), We != null && We.delay ? Yt(We.delay) : $e(!0);
  }, close: (We) => {
    We != null && We.delay ? Bt(We.delay) : $e(!1);
  }, activeAnchor: N, place: Vt.place, isOpen: !!(cn && !Se && cr && ea) })), cn && !Se && cr ? pu.createElement(H, { id: s, role: Pe, className: Q_("react-tooltip", Vd.tooltip, x_.tooltip, x_[m], d, `react-tooltip__place-${Vt.place}`, Vd[ea ? "show" : "closing"], ea ? "react-tooltip__show" : "react-tooltip__closing", L === "fixed" && Vd.fixed, Q && Vd.clickable), onTransitionEnd: (We) => {
    Zi(ht), xt || We.propertyName !== "opacity" || (wn(!1), sr(null), te == null || te());
  }, style: { ...De, ...Vt.tooltipStyles, opacity: Te !== void 0 && ea ? Te : void 0 }, ref: Le }, cr, pu.createElement(H, { className: Q_("react-tooltip-arrow", Vd.arrow, x_.arrow, v, ue && Vd.noArrow), style: { ...Vt.tooltipArrowStyles, background: xe ? `linear-gradient(to right bottom, transparent 50%, ${xe} 50%)` : void 0 }, ref: Fe })) : null;
}, Jz = ({ content: l }) => pu.createElement("span", { dangerouslySetInnerHTML: { __html: l } }), Gd = pu.forwardRef(({ id: l, anchorId: s, anchorSelect: d, content: v, html: m, render: w, className: _, classNameArrow: g, variant: R = "dark", place: O = "top", offset: D = 10, wrapper: L = "div", children: U = null, events: H = ["hover"], openOnClick: P = !1, positionStrategy: W = "absolute", middlewares: Y, delayShow: Se = 0, delayHide: ue = 0, float: Q = !1, hidden: he = !1, noArrow: G = !1, clickable: we = !1, closeOnEsc: He = !1, closeOnScroll: q = !1, closeOnResize: be = !1, openEvents: Oe, closeEvents: De, globalCloseEvents: _e, imperativeModeOnly: Ne = !1, style: te, position: le, isOpen: me, defaultIsOpen: de = !1, disableStyleInjection: A = !1, border: ie, opacity: N, arrowColor: F, setIsOpen: ee, afterShow: Te, afterHide: xe, role: Pe = "tooltip" }, Ie) => {
  const [Le, Fe] = ce.useState(v), [Ke, vt] = ce.useState(m), [ht, Vt] = ce.useState(O), [Me, xt] = ce.useState(R), [xn, cn] = ce.useState(D), [wn, Lt] = ce.useState(Se), [sr, er] = ce.useState(ue), [Ln, Er] = ce.useState(Q), [Dr, $n] = ce.useState(he), [tr, Wn] = ce.useState(L), [Yn, un] = ce.useState(H), [br, gr] = ce.useState(W), [Cr, je] = ce.useState(null), [$e, Tt] = ce.useState(null), Yt = ce.useRef(A), { anchorRefs: Bt, activeAnchor: Rn } = r1(l), fn = (Dt) => Dt == null ? void 0 : Dt.getAttributeNames().reduce((Vn, lt) => {
    var jt;
    return lt.startsWith("data-tooltip-") && (Vn[lt.replace(/^data-tooltip-/, "")] = (jt = Dt == null ? void 0 : Dt.getAttribute(lt)) !== null && jt !== void 0 ? jt : null), Vn;
  }, {}), qn = (Dt) => {
    const Vn = { place: (lt) => {
      var jt;
      Vt((jt = lt) !== null && jt !== void 0 ? jt : O);
    }, content: (lt) => {
      Fe(lt ?? v);
    }, html: (lt) => {
      vt(lt ?? m);
    }, variant: (lt) => {
      var jt;
      xt((jt = lt) !== null && jt !== void 0 ? jt : R);
    }, offset: (lt) => {
      cn(lt === null ? D : Number(lt));
    }, wrapper: (lt) => {
      var jt;
      Wn((jt = lt) !== null && jt !== void 0 ? jt : L);
    }, events: (lt) => {
      const jt = lt == null ? void 0 : lt.split(" ");
      un(jt ?? H);
    }, "position-strategy": (lt) => {
      var jt;
      gr((jt = lt) !== null && jt !== void 0 ? jt : W);
    }, "delay-show": (lt) => {
      Lt(lt === null ? Se : Number(lt));
    }, "delay-hide": (lt) => {
      er(lt === null ? ue : Number(lt));
    }, float: (lt) => {
      Er(lt === null ? Q : lt === "true");
    }, hidden: (lt) => {
      $n(lt === null ? he : lt === "true");
    }, "class-name": (lt) => {
      je(lt);
    } };
    Object.values(Vn).forEach((lt) => lt(null)), Object.entries(Dt).forEach(([lt, jt]) => {
      var cr;
      (cr = Vn[lt]) === null || cr === void 0 || cr.call(Vn, jt);
    });
  };
  ce.useEffect(() => {
    Fe(v);
  }, [v]), ce.useEffect(() => {
    vt(m);
  }, [m]), ce.useEffect(() => {
    Vt(O);
  }, [O]), ce.useEffect(() => {
    xt(R);
  }, [R]), ce.useEffect(() => {
    cn(D);
  }, [D]), ce.useEffect(() => {
    Lt(Se);
  }, [Se]), ce.useEffect(() => {
    er(ue);
  }, [ue]), ce.useEffect(() => {
    Er(Q);
  }, [Q]), ce.useEffect(() => {
    $n(he);
  }, [he]), ce.useEffect(() => {
    gr(W);
  }, [W]), ce.useEffect(() => {
    Yt.current !== A && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [A]), ce.useEffect(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: A === "core", disableBase: A } }));
  }, []), ce.useEffect(() => {
    var Dt;
    const Vn = new Set(Bt);
    let lt = d;
    if (!lt && l && (lt = `[data-tooltip-id='${l.replace(/'/g, "\\'")}']`), lt) try {
      document.querySelectorAll(lt).forEach((ft) => {
        Vn.add({ current: ft });
      });
    } catch {
      console.warn(`[react-tooltip] "${lt}" is not a valid CSS selector`);
    }
    const jt = document.querySelector(`[id='${s}']`);
    if (jt && Vn.add({ current: jt }), !Vn.size) return () => null;
    const cr = (Dt = $e ?? jt) !== null && Dt !== void 0 ? Dt : Rn.current, ea = new MutationObserver((ft) => {
      ft.forEach((mt) => {
        var sn;
        if (!cr || mt.type !== "attributes" || !(!((sn = mt.attributeName) === null || sn === void 0) && sn.startsWith("data-tooltip-"))) return;
        const kn = fn(cr);
        qn(kn);
      });
    }), We = { attributes: !0, childList: !1, subtree: !1 };
    if (cr) {
      const ft = fn(cr);
      qn(ft), ea.observe(cr, We);
    }
    return () => {
      ea.disconnect();
    };
  }, [Bt, Rn, $e, s, d]), ce.useEffect(() => {
    te != null && te.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), ie && !QR("border", `${ie}`) && console.warn(`[react-tooltip] "${ie}" is not a valid \`border\`.`), te != null && te.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), N && !QR("opacity", `${N}`) && console.warn(`[react-tooltip] "${N}" is not a valid \`opacity\`.`);
  }, []);
  let qt = U;
  const Bn = ce.useRef(null);
  if (w) {
    const Dt = w({ content: ($e == null ? void 0 : $e.getAttribute("data-tooltip-content")) || Le || null, activeAnchor: $e });
    qt = Dt ? pu.createElement("div", { ref: Bn, className: "react-tooltip-content-wrapper" }, Dt) : null;
  } else Le && (qt = Le);
  Ke && (qt = pu.createElement(Jz, { content: Ke }));
  const Qt = { forwardRef: Ie, id: l, anchorId: s, anchorSelect: d, className: Q_(_, Cr), classNameArrow: g, content: qt, contentWrapperRef: Bn, place: ht, variant: Me, offset: xn, wrapper: tr, events: Yn, openOnClick: P, positionStrategy: br, middlewares: Y, delayShow: wn, delayHide: sr, float: Ln, hidden: Dr, noArrow: G, clickable: we, closeOnEsc: He, closeOnScroll: q, closeOnResize: be, openEvents: Oe, closeEvents: De, globalCloseEvents: _e, imperativeModeOnly: Ne, style: te, position: le, isOpen: me, defaultIsOpen: de, border: ie, opacity: N, arrowColor: F, setIsOpen: ee, afterShow: Te, afterHide: xe, activeAnchor: $e, setActiveAnchor: (Dt) => Tt(Dt), role: Pe };
  return pu.createElement(Xz, { ...Qt });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (l) => {
  l.detail.disableCore || qR({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), l.detail.disableBase || qR({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const Zz = {
  headers: {
    "Content-Type": "multipart/form-data"
    // Set content type for FormData
  }
}, X_ = `${window.twChatSettings.plugin_dir_url}treyworks-chat.log`;
function eP(l, s) {
  Zn.get(`${X_}?dt=${Date.now()}`).then(l).catch(s);
}
function tP(l, s) {
  Zn.post(twChatSettings.ajax_url, {
    action: "clear_log",
    _ajax_nonce: twChatSettings.ajax_nonce
  }, Zz).then(l).catch(s);
}
function nP({ isOpen: l, onRequestClose: s }) {
  const [d, v] = ce.useState("");
  ce.useEffect(() => {
    l && m();
  }, [l]);
  const m = function() {
    eP(w, _);
  }, w = function(D) {
    v(D.data);
  }, _ = function(D) {
    console.error("Error fetching log data:", D), qa.error("Error fetching log data.");
  }, g = function() {
    console.log("Clearing"), window.confirm("Are you sure you want to clear the log file?") && tP(R, O);
  }, R = function(D) {
    qa.success("Log file cleared"), m();
  }, O = function(D) {
    qa.error("Error clearing log file");
  };
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(
    uE,
    {
      isOpen: l,
      onRequestClose: s,
      contentLabel: "Log File Viewer",
      className: "tw-chat-admin-modal",
      overlayClassName: "tw-chat-admin-overlay",
      children: [
        /* @__PURE__ */ T.jsxs("h2", { className: "tw-chat-admin-modal-header", children: [
          "Log File Viewer",
          /* @__PURE__ */ T.jsx("button", { onClick: s, children: /* @__PURE__ */ T.jsx("span", { className: "dashicons dashicons-no-alt" }) })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "tw-chat-admin-modal-content", children: [
          /* @__PURE__ */ T.jsxs("p", { children: [
            /* @__PURE__ */ T.jsx("strong", { children: "Location: " }),
            /* @__PURE__ */ T.jsx(
              "a",
              {
                href: X_,
                download: "treyworks-chat.log",
                "data-tooltip-id": "download-tooltip",
                "data-tooltip-content": "Click to download log file.",
                "data-tooltip-place": "top",
                children: X_
              }
            ),
            /* @__PURE__ */ T.jsx(Gd, { id: "download-tooltip" })
          ] }),
          /* @__PURE__ */ T.jsxs("p", { children: [
            /* @__PURE__ */ T.jsx("a", { href: "#", className: "button button-primary", onClick: m, children: "Refresh" }),
            " ",
            /* @__PURE__ */ T.jsx("a", { href: "#", className: "button button-secondary", onClick: g, children: "Clear Log" })
          ] }),
          /* @__PURE__ */ T.jsx("pre", { dangerouslySetInnerHTML: { __html: d } })
        ] })
      ]
    }
  ) });
}
const a1 = ({ onChange: l, defaultValues: s = "", maxItems: d = 99 }) => {
  const [v, m] = ce.useState([""]), [w, _] = ce.useState(!1);
  ce.useEffect(() => {
    if (s) {
      const U = s.split(",").slice(0, d).slice(0, d);
      m(U.length > 0 ? U : [""]), l(U), _(U.length >= d);
    }
  }, [s, l, d]);
  const g = (L, U) => {
    const H = [...v];
    H[L] = U, m(H), l(H.filter((P) => P !== ""));
  }, R = (L) => {
    L.preventDefault(), v.length < d && (m([...v, ""]), _(v.length + 1 >= d));
  }, O = (L, U) => {
    L.preventDefault();
    const H = v.filter((P, W) => W !== U);
    m(H.length > 0 ? H : [""]), l(H.filter((P) => P.trim() !== "")), _(H.length >= d);
  }, D = (L, U) => {
    L.key === "Enter" && (L.preventDefault(), U === v.length - 1 && !w && R(L));
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "tw-chat-list-input", children: [
    v.map((L, U) => /* @__PURE__ */ T.jsxs("div", { children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          className: "regular-text",
          type: "text",
          value: L,
          onChange: (H) => g(U, H.target.value),
          onKeyDown: (H) => D(H, U),
          placeholder: "Enter a value"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "button",
        {
          onClick: (H) => O(H, U),
          "aria-label": "Remove Suggested Answer",
          children: /* @__PURE__ */ T.jsx("span", { className: "dashicons dashicons-no" })
        }
      )
    ] }, U)),
    !w && /* @__PURE__ */ T.jsxs(
      "button",
      {
        onClick: R,
        "aria-label": "Add Suggested Answer",
        children: [
          /* @__PURE__ */ T.jsx("span", { className: "dashicons dashicons-plus" }),
          " Add Item"
        ]
      }
    ),
    w && /* @__PURE__ */ T.jsxs("p", { children: [
      "Maximum of ",
      d,
      " items reached."
    ] })
  ] });
};
function Es(l, s, d, v, m) {
  return /* @__PURE__ */ T.jsxs("tr", { children: [
    /* @__PURE__ */ T.jsx("th", { scope: "row", children: l }),
    /* @__PURE__ */ T.jsx("td", { children: d === "textarea" ? /* @__PURE__ */ T.jsx(
      "textarea",
      {
        className: "regular-text",
        name: s,
        rows: "5",
        onChange: m,
        value: v[s]
      }
    ) : /* @__PURE__ */ T.jsx(
      "input",
      {
        className: "regular-text",
        type: d,
        name: s,
        onChange: m,
        value: v[s]
      }
    ) })
  ] });
}
function R_(l, s, d, v) {
  return /* @__PURE__ */ T.jsxs("tr", { children: [
    /* @__PURE__ */ T.jsx("th", { scope: "row", children: l }),
    /* @__PURE__ */ T.jsxs("td", { children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          type: "checkbox",
          id: s,
          name: s,
          checked: d[s] === "enabled",
          onChange: v
        }
      ),
      /* @__PURE__ */ T.jsxs("label", { htmlFor: s, children: [
        "Yes, ",
        l.toLowerCase(),
        "."
      ] })
    ] })
  ] });
}
function rP(l, s, d, v, m) {
  return /* @__PURE__ */ T.jsxs("tr", { children: [
    /* @__PURE__ */ T.jsx("th", { scope: "row", children: l }),
    /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsxs(
      "select",
      {
        name: s,
        onChange: m,
        value: v[s],
        children: [
          /* @__PURE__ */ T.jsx("option", { value: "", children: "Select a chat widget" }),
          d.map((w) => /* @__PURE__ */ T.jsx("option", { value: w.id, children: w.name }, w.id))
        ]
      }
    ) })
  ] });
}
const aP = () => {
  const l = {
    tw_chat_button_text: twChatSettings.tw_chat_button_text,
    tw_chat_openai_key: twChatSettings.tw_chat_openai_key,
    tw_chat_retell_key: twChatSettings.tw_chat_retell_key,
    tw_chat_disclaimer: twChatSettings.tw_chat_disclaimer,
    tw_chat_error_message: twChatSettings.tw_chat_error_message,
    tw_chat_is_enabled: twChatSettings.tw_chat_is_enabled,
    tw_chat_is_debug: twChatSettings.tw_chat_is_debug,
    tw_chat_max_characters: twChatSettings.tw_chat_max_characters,
    tw_chat_global_widget_id: twChatSettings.tw_chat_global_widget_id,
    tw_chat_logo_url: twChatSettings.tw_chat_logo_url,
    tw_chat_allowed_actions: twChatSettings.tw_chat_allowed_actions,
    tw_chat_is_moderation: twChatSettings.tw_chat_is_moderation,
    tw_chat_button_image: twChatSettings.tw_chat_button_image,
    tw_chat_send_button_image: twChatSettings.tw_chat_send_button_image,
    tw_chat_api_base_uri: twChatSettings.tw_chat_api_base_uri
  }, [s, d] = ce.useState(l), [v, m] = ce.useState(!1), [w, _] = ce.useState(!1), [g] = MT(rE), [R, O] = ce.useState(!1), [D, L] = ce.useState(!1), [U, H] = ce.useState(!1);
  ce.useEffect(() => {
    const ue = (Q) => {
      if (v) {
        const he = "You have unsaved changes. Are you sure you want to leave?";
        return Q.returnValue = he, he;
      }
    };
    return window.addEventListener("beforeunload", ue), () => window.removeEventListener("beforeunload", ue);
  }, [v]);
  const P = async (ue) => {
    ue.preventDefault(), _(!0);
    try {
      await Zn.post(twChatSettings.ajax_url, {
        action: "save_settings",
        _ajax_nonce: twChatSettings.ajax_nonce,
        data: s
      }, {
        headers: { "Content-Type": "multipart/form-data" }
      }), qa.success("Settings saved successfully!"), m(!1);
    } catch (Q) {
      qa.error("There was an error saving settings."), console.error("Error saving settings:", Q);
    } finally {
      _(!1);
    }
  }, W = (ue) => {
    const { name: Q, value: he } = ue.target;
    d((G) => ({ ...G, [Q]: he })), m(!0);
  }, Y = (ue) => {
    const { name: Q, checked: he } = ue.target;
    d((G) => ({ ...G, [Q]: he ? "enabled" : "" })), m(!0);
  }, Se = ce.useCallback((ue) => {
    d((Q) => ({
      ...Q,
      tw_chat_allowed_actions: ue.join(",")
    })), m(!0);
  }, []);
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsxs("form", { id: "tw-chat-settings-form", onSubmit: P, children: [
      /* @__PURE__ */ T.jsxs("section", { children: [
        /* @__PURE__ */ T.jsx("h2", { children: "API Settings" }),
        /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsxs("tbody", { children: [
          /* @__PURE__ */ T.jsxs("tr", { children: [
            /* @__PURE__ */ T.jsx("th", { scope: "row", children: "OpenAI API Key" }),
            /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  className: "regular-text",
                  type: "text",
                  name: "tw_chat_openai_key",
                  onChange: W,
                  value: s.tw_chat_openai_key,
                  style: {
                    WebkitTextSecurity: D ? "none" : "disc",
                    MozTextSecurity: D ? "none" : "disc"
                  },
                  autoComplete: "off",
                  "data-lpignore": "true"
                }
              ),
              /* @__PURE__ */ T.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => L(!D),
                  "data-tooltip-id": "api-key-toggle",
                  "data-tooltip-content": "Toggle OpenAI API Key",
                  style: {
                    padding: "4px 8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center"
                  },
                  children: D ? /* @__PURE__ */ T.jsx("span", { className: "dashicons dashicons-hidden" }) : /* @__PURE__ */ T.jsx("span", { className: "dashicons dashicons-visibility" })
                }
              ),
              /* @__PURE__ */ T.jsx(Gd, { id: "api-key-toggle" })
            ] }) })
          ] }),
          Es("API Base URI", "tw_chat_api_base_uri", "text", s, W)
        ] }) }),
        /* @__PURE__ */ T.jsxs("p", { children: [
          /* @__PURE__ */ T.jsx("span", { style: { fontWeight: "bold" }, children: "Note:" }),
          " The default API Base URI is ",
          /* @__PURE__ */ T.jsx("code", { children: "api.openai.com/v1" }),
          "."
        ] }),
        /* @__PURE__ */ T.jsxs("p", { children: [
          "Visit the ",
          /* @__PURE__ */ T.jsx("a", { href: "https://platform.openai.com/docs/quickstart", target: "_blank", rel: "noopener noreferrer", children: "OpenAI Platform Developer quickstart" }),
          " for information on how to obtain a new key."
        ] }),
        /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsx("tbody", { children: /* @__PURE__ */ T.jsxs("tr", { children: [
          /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Retell API Key" }),
          /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ T.jsx(
              "input",
              {
                className: "regular-text",
                type: "text",
                name: "tw_chat_retell_key",
                onChange: W,
                value: s.tw_chat_retell_key,
                style: {
                  WebkitTextSecurity: U ? "none" : "disc",
                  MozTextSecurity: U ? "none" : "disc"
                },
                autoComplete: "off",
                "data-lpignore": "true"
              }
            ),
            /* @__PURE__ */ T.jsx(
              "button",
              {
                type: "button",
                onClick: () => H(!U),
                "data-tooltip-id": "retell-key-toggle",
                "data-tooltip-content": "Toggle Retell API Key",
                style: {
                  padding: "4px 8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                children: U ? /* @__PURE__ */ T.jsx("span", { className: "dashicons dashicons-hidden" }) : /* @__PURE__ */ T.jsx("span", { className: "dashicons dashicons-visibility" })
              }
            ),
            /* @__PURE__ */ T.jsx(Gd, { id: "retell-key-toggle" })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ T.jsxs("p", { children: [
          "Visit the ",
          /* @__PURE__ */ T.jsx("a", { href: "https://docs.retellai.com/", target: "_blank", rel: "noopener noreferrer", children: "Retell AI Documentation" }),
          " for information on how to obtain a new key."
        ] })
      ] }),
      /* @__PURE__ */ T.jsxs("section", { children: [
        /* @__PURE__ */ T.jsx("h2", { children: "Global Settings" }),
        /* @__PURE__ */ T.jsx("p", { children: "Global settings for chat widget functionality." }),
        /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsxs("tbody", { children: [
          Es("Custom Logo URL", "tw_chat_logo_url", "text", s, W),
          Es("Chat Button Image URL", "tw_chat_button_image", "text", s, W),
          Es("Send Button Image URL", "tw_chat_send_button_image", "text", s, W),
          Es("Disclaimer", "tw_chat_disclaimer", "textarea", s, W),
          Es("Maximum Characters Allowed", "tw_chat_max_characters", "number", s, W),
          Es("Chat Error Message", "tw_chat_error_message", "textarea", s, W),
          R_("Enable Moderation", "tw_chat_is_moderation", s, Y),
          /* @__PURE__ */ T.jsxs("tr", { children: [
            /* @__PURE__ */ T.jsx("th", {}),
            /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsxs("p", { children: [
              "Filter user messages with the ",
              /* @__PURE__ */ T.jsx("a", { href: "https://github.com/ConsoleTVs/Profanity", target: "_blank", children: "Profanity PHP library" }),
              " and enable the  ",
              /* @__PURE__ */ T.jsx("a", { href: "https://platform.openai.com/docs/guides/moderation", target: "_blank", children: "OpenAI Moderation API" }),
              "."
            ] }) })
          ] }),
          R_("Enable Debugging", "tw_chat_is_debug", s, Y),
          /* @__PURE__ */ T.jsxs("tr", { children: [
            /* @__PURE__ */ T.jsx("th", {}),
            /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsx("button", { type: "button", onClick: () => O(!0), children: "Open Log File" }) })
          ] })
        ] }) })
      ] }),
      g.length > 0 && /* @__PURE__ */ T.jsxs("section", { children: [
        /* @__PURE__ */ T.jsx("h2", { children: "Global Chat Widget" }),
        /* @__PURE__ */ T.jsx("p", { children: "Set up your global chat widget that appears in the lower right corner of the screen." }),
        /* @__PURE__ */ T.jsx("p", { children: /* @__PURE__ */ T.jsx("strong", { children: "Note: Only text-based chat widgets are supported for the global chat widget." }) }),
        /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsxs("tbody", { children: [
          R_("Enable Global Chat Widget", "tw_chat_is_enabled", s, Y),
          rP(
            "Global Chat Widget",
            "tw_chat_global_widget_id",
            g.filter(
              (ue) => {
                var Q, he, G, we, He, q;
                return ((he = (Q = ue.meta) == null ? void 0 : Q.tw_chat_widget_type) == null ? void 0 : he[0]) === void 0 || ((we = (G = ue.meta) == null ? void 0 : G.tw_chat_widget_type) == null ? void 0 : we[0]) === "" || ((q = (He = ue.meta) == null ? void 0 : He.tw_chat_widget_type) == null ? void 0 : q[0]) === "text";
              }
            ),
            s,
            W
          ),
          Es("Chat Button Text", "tw_chat_button_text", "text", s, W)
        ] }) })
      ] }),
      /* @__PURE__ */ T.jsxs("section", { children: [
        /* @__PURE__ */ T.jsx("h2", { children: "Functions Settings" }),
        /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsx("tbody", { children: /* @__PURE__ */ T.jsxs("tr", { children: [
          /* @__PURE__ */ T.jsxs("th", { scope: "row", children: [
            "Enter a list of actions and filters for the ",
            /* @__PURE__ */ T.jsx("code", { children: "wp_action" }),
            " tool function."
          ] }),
          /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsx(
            a1,
            {
              onChange: Se,
              defaultValues: twChatSettings.tw_chat_allowed_actions
            }
          ) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ T.jsx(
        "button",
        {
          className: "button button-hero button-primary",
          type: "submit",
          disabled: w,
          children: w ? "Saving..." : "Submit"
        }
      )
    ] }),
    /* @__PURE__ */ T.jsx(
      nP,
      {
        isOpen: R,
        onRequestClose: () => O(!1)
      }
    )
  ] });
}, i1 = {
  headers: {
    "Content-Type": "multipart/form-data"
    // Set content type for FormData
  }
};
function iP(l, s, d) {
  console.log("Saving chat data"), console.log(l), Zn.post(twChatSettings.ajax_url, {
    action: "save_chat_widget",
    _ajax_nonce: twChatSettings.ajax_nonce,
    ...l
  }, i1).then(s).catch(d);
}
function oP(l, s, d) {
  Zn.post(twChatSettings.ajax_url, {
    action: "remove_chat_widget",
    _ajax_nonce: twChatSettings.ajax_nonce,
    id: l
  }, i1).then(s).catch(d);
}
const o1 = (l) => {
  const s = document.createElement("textarea");
  s.style.position = "fixed", s.style.left = "-9999px", s.style.top = "-9999px", s.value = l, document.body.appendChild(s), s.select(), document.execCommand("copy"), qa.success("Copied to clipboard");
};
function ZR(l) {
  return l.meta.tw_chat_widget_type == "voice" ? `[tw_voice_widget id=${l.id}]` : `[tw_chat_widget id=${l.id}]`;
}
const l1 = ({ widgets: l, onEdit: s, onRemove: d, onCopy: v }) => /* @__PURE__ */ T.jsxs("table", { className: "wp-list-table widefat fixed striped posts", children: [
  /* @__PURE__ */ T.jsx("thead", { children: /* @__PURE__ */ T.jsxs("tr", { children: [
    /* @__PURE__ */ T.jsx("th", { children: "Name" }),
    /* @__PURE__ */ T.jsx("th", { children: "Widget ID" }),
    /* @__PURE__ */ T.jsx("th", { children: "Widget Type" }),
    /* @__PURE__ */ T.jsx("th", { children: "Embed Code" }),
    /* @__PURE__ */ T.jsx("th", { children: "Remove" })
  ] }) }),
  /* @__PURE__ */ T.jsx("tbody", { children: l.map((m) => /* @__PURE__ */ T.jsxs("tr", { children: [
    /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsx(
      "a",
      {
        href: "#",
        onClick: () => s(m),
        children: m.name
      }
    ) }),
    /* @__PURE__ */ T.jsx("td", { children: m.id }),
    /* @__PURE__ */ T.jsx("td", { style: { textTransform: "capitalize" }, children: m.meta.tw_chat_widget_type == "voice" ? "Voice Agent" : "Text Chat" }),
    /* @__PURE__ */ T.jsxs("td", { children: [
      /* @__PURE__ */ T.jsx(
        "a",
        {
          href: "#",
          onClick: () => v(ZR(m)),
          "data-tooltip-id": `copy-widget-tooltip-${m.id}`,
          "data-tooltip-content": "Click to copy",
          "data-tooltip-place": "top",
          children: ZR(m)
        }
      ),
      /* @__PURE__ */ T.jsx(Gd, { id: `copy-widget-tooltip-${m.id}` })
    ] }),
    /* @__PURE__ */ T.jsxs("td", { children: [
      /* @__PURE__ */ T.jsx(
        "a",
        {
          href: "#",
          onClick: () => d(m.id),
          "data-tooltip-id": `remove-tooltip-${m.id}`,
          "data-tooltip-content": "Remove Chat Widget",
          "data-tooltip-place": "top",
          children: /* @__PURE__ */ T.jsx("span", { className: "dashicons dashicons-trash" })
        }
      ),
      /* @__PURE__ */ T.jsx(Gd, { id: `remove-tooltip-${m.id}` })
    ] })
  ] }, m.id)) })
] });
l1.propTypes = {
  widgets: No.arrayOf(No.shape({
    id: No.string.isRequired,
    name: No.string.isRequired,
    meta: No.shape({
      tw_chat_assistant_id: No.string.isRequired
    }).isRequired
  })).isRequired,
  onEdit: No.func.isRequired,
  onRemove: No.func.isRequired,
  onCopy: No.func.isRequired
};
const u1 = ({ currentWidget: l, onSave: s }) => {
  var U, H, P, W, Y, Se;
  const [d, v] = ce.useState(!1), [m, w] = ce.useState({
    id: "",
    tw_chat_widget_name: "",
    tw_chat_greeting: "",
    tw_chat_dismiss_answers: "",
    tw_chat_dismiss_answers_text: "",
    tw_chat_suggested_answers: "",
    tw_chat_system_prompt: "",
    tw_chat_ai_model: "gpt-4.1-2025-04-14",
    tw_chat_webhook_address: "",
    tw_chat_webhook_header: "",
    tw_chat_email_recipients: "",
    tw_chat_widget_type: "text",
    tw_chat_voice_agent_id: "",
    tw_chat_use_site_search: "",
    tw_chat_search_scope: "all",
    tw_chat_search_post_types: [],
    tw_chat_search_specific_ids: "",
    tw_chat_exclude_links: []
  });
  ce.useEffect(() => {
    l && w({
      id: l.id,
      tw_chat_widget_name: l.name,
      tw_chat_greeting: l.meta.tw_chat_greeting ? l.meta.tw_chat_greeting[0] : "",
      tw_chat_system_prompt: l.meta.tw_chat_system_prompt ? l.meta.tw_chat_system_prompt[0] : "",
      tw_chat_ai_model: l.meta.tw_chat_ai_model ? l.meta.tw_chat_ai_model[0] : "gpt-4.1-2025-04-14",
      tw_chat_suggested_answers: l.meta.tw_chat_suggested_answers ? l.meta.tw_chat_suggested_answers[0] : "",
      tw_chat_dismiss_answers: l.meta.tw_chat_dismiss_answers ? l.meta.tw_chat_dismiss_answers[0] : "",
      tw_chat_dismiss_answers_text: l.meta.tw_chat_dismiss_answers_text ? l.meta.tw_chat_dismiss_answers_text[0] : "",
      tw_chat_email_recipients: l.meta.tw_chat_email_recipients ? l.meta.tw_chat_email_recipients[0] : "",
      tw_chat_webhook_address: l.meta.tw_chat_webhook_address ? l.meta.tw_chat_webhook_address[0] : "",
      tw_chat_webhook_header: l.meta.tw_chat_webhook_header ? l.meta.tw_chat_webhook_header[0] : "",
      tw_chat_widget_type: l.meta.tw_chat_widget_type ? l.meta.tw_chat_widget_type[0] : "text",
      tw_chat_voice_agent_id: l.meta.tw_chat_voice_agent_id ? l.meta.tw_chat_voice_agent_id[0] : "",
      tw_chat_use_site_search: l.meta.tw_chat_use_site_search ? l.meta.tw_chat_use_site_search[0] : "",
      tw_chat_search_scope: l.meta.tw_chat_search_scope ? l.meta.tw_chat_search_scope[0] : "all",
      tw_chat_search_post_types: l.meta.tw_chat_search_post_types ? l.meta.tw_chat_search_post_types[0].split(",").filter(Boolean) : [],
      tw_chat_search_specific_ids: l.meta.tw_chat_search_specific_ids ? l.meta.tw_chat_search_specific_ids[0] : "",
      tw_chat_exclude_links: l.meta.tw_chat_exclude_links ? l.meta.tw_chat_exclude_links[0].split(",").filter(Boolean) : []
    });
  }, [l]);
  const _ = ce.useCallback((ue) => {
    const { name: Q, value: he, type: G, checked: we } = ue.target;
    w((He) => ({
      ...He,
      [Q]: G === "checkbox" ? we ? "1" : "" : he
    }));
  }, []), g = ce.useCallback((ue) => {
    w((Q) => {
      const he = Q.tw_chat_search_post_types || [], G = he.includes(ue) ? he.filter((we) => we !== ue) : [...he, ue];
      return {
        ...Q,
        tw_chat_search_post_types: G
      };
    });
  }, []), R = ce.useCallback((ue) => {
    w((Q) => {
      const he = Q.tw_chat_exclude_links || [], G = he.includes(ue) ? he.filter((we) => we !== ue) : [...he, ue];
      return {
        ...Q,
        tw_chat_exclude_links: G
      };
    });
  }, []), O = ce.useCallback((ue) => {
    w((Q) => ({
      ...Q,
      tw_chat_suggested_answers: ue.join(",")
    }));
  }, []), D = ce.useCallback(async (ue) => {
    ue.preventDefault();
    const Q = {
      ...m,
      tw_chat_search_post_types: Array.isArray(m.tw_chat_search_post_types) ? m.tw_chat_search_post_types.join(",") : m.tw_chat_search_post_types,
      tw_chat_exclude_links: Array.isArray(m.tw_chat_exclude_links) ? m.tw_chat_exclude_links.join(",") : m.tw_chat_exclude_links
    };
    v(!0), s(Q), v(!1);
  }, [m, s]), L = ce.useCallback((ue) => {
    ue.key === "Enter" && ue.target.tagName.toLowerCase() !== "textarea" && (ue.preventDefault(), D(ue));
  }, [D]);
  return /* @__PURE__ */ T.jsxs("form", { id: "tw-chat-new-widget-form", onSubmit: D, onKeyDown: L, children: [
    /* @__PURE__ */ T.jsx("h3", { children: "General Settings" }),
    /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsxs("tbody", { children: [
      /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Name" }),
        /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsx(
          "input",
          {
            className: "regular-text",
            type: "text",
            name: "tw_chat_widget_name",
            onChange: _,
            value: m.tw_chat_widget_name,
            required: !0
          }
        ) })
      ] }),
      /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Widget Type" }),
        /* @__PURE__ */ T.jsxs("td", { children: [
          /* @__PURE__ */ T.jsxs(
            "select",
            {
              name: "tw_chat_widget_type",
              value: m.tw_chat_widget_type,
              onChange: _,
              className: "regular-text",
              children: [
                /* @__PURE__ */ T.jsx("option", { value: "text", children: "Text Chat Widget" }),
                /* @__PURE__ */ T.jsx("option", { value: "voice", children: "Voice Chat Widget" })
              ]
            }
          ),
          /* @__PURE__ */ T.jsx("p", { className: "description", children: m.tw_chat_widget_type === "text" ? "Text-based chat widget with OpenAI API." : "Voice-based conversation widget with Retell AI." })
        ] })
      ] })
    ] }) }),
    m.tw_chat_widget_type === "text" ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
      /* @__PURE__ */ T.jsx("h3", { children: "AI Configuration" }),
      /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsxs("tbody", { children: [
        /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Model" }),
          /* @__PURE__ */ T.jsxs("td", { children: [
            /* @__PURE__ */ T.jsxs(
              "select",
              {
                name: "tw_chat_ai_model",
                onChange: _,
                value: m.tw_chat_ai_model,
                required: "required",
                children: [
                  /* @__PURE__ */ T.jsx("option", { value: "", children: "Select a model" }),
                  /* @__PURE__ */ T.jsx("option", { value: "gpt-5.2-2025-12-11", children: "GPT 5.2" }),
                  /* @__PURE__ */ T.jsx("option", { value: "gpt-5-mini", children: "GPT 5 Mini" }),
                  /* @__PURE__ */ T.jsx("option", { value: "gpt-4.1-mini-2025-04-14", children: "GPT 4.1 Mini" })
                ]
              }
            ),
            /* @__PURE__ */ T.jsx("p", { className: "description", children: "Select the OpenAI model to use for the chat widget." })
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ T.jsx("th", { scope: "row", children: "System Prompt" }),
          /* @__PURE__ */ T.jsxs("td", { children: [
            /* @__PURE__ */ T.jsx(
              "textarea",
              {
                rows: "10",
                className: "large-text",
                name: "tw_chat_system_prompt",
                onChange: _,
                value: m.tw_chat_system_prompt,
                placeholder: "You are a helpful assistant."
              }
            ),
            /* @__PURE__ */ T.jsx("p", { className: "description", children: "The system prompt sets the behavior and personality of your assistant." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ T.jsx("h3", { children: "Conversation Flow" }),
      /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsxs("tbody", { children: [
        /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Greeting" }),
          /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsx(
            "textarea",
            {
              className: "regular-text",
              name: "tw_chat_greeting",
              onChange: _,
              value: m.tw_chat_greeting,
              required: !0,
              rows: "3",
              style: { width: "100%" }
            }
          ) })
        ] }),
        /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Suggested Answers" }),
          /* @__PURE__ */ T.jsxs("td", { children: [
            /* @__PURE__ */ T.jsx("label", { children: "Enter text for clickable buttons to start the conversation:" }),
            /* @__PURE__ */ T.jsx("br", {}),
            /* @__PURE__ */ T.jsx(
              a1,
              {
                onChange: O,
                defaultValues: m.tw_chat_suggested_answers,
                maxItems: 4
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ T.jsx("th", {}),
          /* @__PURE__ */ T.jsxs("td", { children: [
            /* @__PURE__ */ T.jsx(
              "input",
              {
                type: "checkbox",
                id: "tw_chat_dismiss_answers",
                name: "tw_chat_dismiss_answers",
                checked: m.tw_chat_dismiss_answers == "1",
                onChange: _
              }
            ),
            /* @__PURE__ */ T.jsx("label", { htmlFor: "tw_chat_dismiss_answers", children: "Allow users to dismiss suggested answers." }),
            m.tw_chat_dismiss_answers == "1" && /* @__PURE__ */ T.jsxs("div", { style: { margin: "1rem 0" }, children: [
              /* @__PURE__ */ T.jsx("label", { htmlFor: "tw_chat_dismiss_answers_text", children: "Dismiss Suggestions Button Text" }),
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  className: "regular-text",
                  type: "text",
                  name: "tw_chat_dismiss_answers_text",
                  onChange: _,
                  value: m.tw_chat_dismiss_answers_text,
                  placeholder: "Type a different response."
                }
              )
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ T.jsx("h3", { children: "Site Search" }),
      /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsxs("tbody", { children: [
        /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Site Search" }),
          /* @__PURE__ */ T.jsxs("td", { children: [
            /* @__PURE__ */ T.jsx(
              "input",
              {
                type: "checkbox",
                id: "tw_chat_use_site_search",
                name: "tw_chat_use_site_search",
                checked: m.tw_chat_use_site_search == "1",
                onChange: _
              }
            ),
            /* @__PURE__ */ T.jsx("label", { htmlFor: "tw_chat_use_site_search", children: "Enable site search function" }),
            /* @__PURE__ */ T.jsx("p", { className: "description", children: "When enabled, the assistant can search your website content to answer questions." })
          ] })
        ] }),
        m.tw_chat_use_site_search == "1" && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
            /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Search Scope" }),
            /* @__PURE__ */ T.jsxs("td", { children: [
              /* @__PURE__ */ T.jsxs("div", { style: { marginBottom: "1rem" }, children: [
                /* @__PURE__ */ T.jsxs("label", { style: { display: "block", marginBottom: "0.5rem" }, children: [
                  /* @__PURE__ */ T.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "tw_chat_search_scope",
                      value: "all",
                      checked: m.tw_chat_search_scope === "all",
                      onChange: _,
                      style: { marginRight: "0.5rem" }
                    }
                  ),
                  /* @__PURE__ */ T.jsx("strong", { children: "All Content" })
                ] }),
                /* @__PURE__ */ T.jsx("p", { className: "description", style: { marginLeft: "1.75rem", marginTop: "0.25rem" }, children: "Search across all pages, posts, and custom post types on your website." })
              ] }),
              /* @__PURE__ */ T.jsxs("div", { style: { marginBottom: "1rem" }, children: [
                /* @__PURE__ */ T.jsxs("label", { style: { display: "block", marginBottom: "0.5rem" }, children: [
                  /* @__PURE__ */ T.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "tw_chat_search_scope",
                      value: "post_types",
                      checked: m.tw_chat_search_scope === "post_types",
                      onChange: _,
                      style: { marginRight: "0.5rem" }
                    }
                  ),
                  /* @__PURE__ */ T.jsx("strong", { children: "Selected Post Types" })
                ] }),
                /* @__PURE__ */ T.jsx("p", { className: "description", style: { marginLeft: "1.75rem", marginTop: "0.25rem" }, children: "Limit search to specific post types (e.g., pages, posts, products)." }),
                m.tw_chat_search_scope === "post_types" && /* @__PURE__ */ T.jsxs("div", { style: { marginLeft: "1.75rem", marginTop: "0.75rem" }, children: [
                  /* @__PURE__ */ T.jsx("label", { style: { display: "block", marginBottom: "0.5rem", fontWeight: "500" }, children: "Select Post Types:" }),
                  /* @__PURE__ */ T.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: (H = (U = window.twChatSettings) == null ? void 0 : U.available_post_types) == null ? void 0 : H.map((ue) => {
                    var Q;
                    return /* @__PURE__ */ T.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
                      /* @__PURE__ */ T.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: ((Q = m.tw_chat_search_post_types) == null ? void 0 : Q.includes(ue.name)) || !1,
                          onChange: () => g(ue.name)
                        }
                      ),
                      /* @__PURE__ */ T.jsxs("span", { children: [
                        ue.label,
                        " ",
                        /* @__PURE__ */ T.jsxs("span", { style: { color: "#666", fontSize: "0.9em" }, children: [
                          "(",
                          ue.name,
                          ")"
                        ] })
                      ] })
                    ] }, ue.name);
                  }) }),
                  (!((P = window.twChatSettings) != null && P.available_post_types) || window.twChatSettings.available_post_types.length === 0) && /* @__PURE__ */ T.jsx("p", { className: "description", style: { marginTop: "0.5rem", color: "#d63638" }, children: "No public post types found." })
                ] })
              ] }),
              /* @__PURE__ */ T.jsxs("div", { style: { marginBottom: "1rem" }, children: [
                /* @__PURE__ */ T.jsxs("label", { style: { display: "block", marginBottom: "0.5rem" }, children: [
                  /* @__PURE__ */ T.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "tw_chat_search_scope",
                      value: "specific",
                      checked: m.tw_chat_search_scope === "specific",
                      onChange: _,
                      style: { marginRight: "0.5rem" }
                    }
                  ),
                  /* @__PURE__ */ T.jsx("strong", { children: "Specific Pages or Posts" })
                ] }),
                /* @__PURE__ */ T.jsx("p", { className: "description", style: { marginLeft: "1.75rem", marginTop: "0.25rem" }, children: "Search only within specific pages or posts by their IDs." }),
                m.tw_chat_search_scope === "specific" && /* @__PURE__ */ T.jsxs("div", { style: { marginLeft: "1.75rem", marginTop: "0.75rem" }, children: [
                  /* @__PURE__ */ T.jsx("label", { htmlFor: "tw_chat_search_specific_ids", style: { display: "block", marginBottom: "0.25rem", fontWeight: "500" }, children: "Post/Page IDs (comma-separated):" }),
                  /* @__PURE__ */ T.jsx(
                    "input",
                    {
                      type: "text",
                      id: "tw_chat_search_specific_ids",
                      name: "tw_chat_search_specific_ids",
                      className: "regular-text",
                      value: m.tw_chat_search_specific_ids,
                      onChange: _,
                      placeholder: "123, 456, 789",
                      style: { maxWidth: "400px" }
                    }
                  ),
                  /* @__PURE__ */ T.jsx("p", { className: "description", style: { marginTop: "0.25rem" }, children: "Enter post or page IDs separated by commas." })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
            /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Exclude Links" }),
            /* @__PURE__ */ T.jsxs("td", { children: [
              /* @__PURE__ */ T.jsx("p", { className: "description", style: { marginBottom: "0.75rem" }, children: "Select post types to exclude from link generation. The AI can still search and reference content from these post types, but won't provide direct links to them." }),
              /* @__PURE__ */ T.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: (Y = (W = window.twChatSettings) == null ? void 0 : W.available_post_types) == null ? void 0 : Y.map((ue) => {
                var Q;
                return /* @__PURE__ */ T.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
                  /* @__PURE__ */ T.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: ((Q = m.tw_chat_exclude_links) == null ? void 0 : Q.includes(ue.name)) || !1,
                      onChange: () => R(ue.name)
                    }
                  ),
                  /* @__PURE__ */ T.jsxs("span", { children: [
                    ue.label,
                    " ",
                    /* @__PURE__ */ T.jsxs("span", { style: { color: "#666", fontSize: "0.9em" }, children: [
                      "(",
                      ue.name,
                      ")"
                    ] })
                  ] })
                ] }, ue.name);
              }) }),
              (!((Se = window.twChatSettings) != null && Se.available_post_types) || window.twChatSettings.available_post_types.length === 0) && /* @__PURE__ */ T.jsx("p", { className: "description", style: { marginTop: "0.5rem", color: "#d63638" }, children: "No public post types found." })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ T.jsx("h3", { children: "Integrations" }),
      /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsxs("tbody", { children: [
        /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Webhook Address" }),
          /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsx(
            "input",
            {
              className: "regular-text",
              type: "text",
              name: "tw_chat_webhook_address",
              onChange: _,
              value: m.tw_chat_webhook_address
            }
          ) })
        ] }),
        /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Webhook Header (JSON)" }),
          /* @__PURE__ */ T.jsx("td", { children: /* @__PURE__ */ T.jsx(
            "textarea",
            {
              rows: "4",
              className: "regular-text",
              name: "tw_chat_webhook_header",
              onChange: _,
              value: m.tw_chat_webhook_header
            }
          ) })
        ] })
      ] }) })
    ] }) : (
      // Voice widget specific fields
      /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
        /* @__PURE__ */ T.jsx("h3", { children: "Voice Configuration" }),
        /* @__PURE__ */ T.jsx("table", { className: "form-table", children: /* @__PURE__ */ T.jsx("tbody", { children: /* @__PURE__ */ T.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ T.jsx("th", { scope: "row", children: "Voice Agent ID" }),
          /* @__PURE__ */ T.jsxs("td", { children: [
            /* @__PURE__ */ T.jsx(
              "input",
              {
                className: "regular-text",
                type: "text",
                name: "tw_chat_voice_agent_id",
                onChange: _,
                value: m.tw_chat_voice_agent_id,
                required: !0,
                placeholder: "agent_xxxxxxxxxxxxxxxxxxxxxxx"
              }
            ),
            /* @__PURE__ */ T.jsx("p", { className: "description", children: "Retell AI Voice Agent ID from your Retell dashboard" })
          ] })
        ] }) }) })
      ] })
    ),
    /* @__PURE__ */ T.jsx("p", { className: "submit", children: d ? /* @__PURE__ */ T.jsxs("p", { children: [
      /* @__PURE__ */ T.jsx("span", { className: "spinner is-active" }),
      " Saving"
    ] }) : /* @__PURE__ */ T.jsx("input", { className: "button button-hero button-primary", type: "submit", value: "Submit" }) })
  ] });
};
u1.propTypes = {
  currentWidget: No.object,
  onSave: No.func.isRequired
};
const lP = () => {
  const [l, s] = MT(rE), [d, v] = ce.useState(null), [m, w] = ce.useState(!1), _ = ce.useCallback((U) => {
    v(U || null), w(!0);
  }, []), g = ce.useCallback(() => {
    v(null), w(!1);
  }, []), R = ce.useCallback((U) => {
    window.confirm("Are you sure you want to remove this widget?") && oP(
      U,
      (H) => {
        H.data.success ? (qa.success("Chat widget removed"), s(H.data.data)) : (console.error(H), qa.error("Error removing chat widget."));
      },
      (H) => {
        console.error(H), qa.error("Error removing chat widget.");
      }
    );
  }, [s]), O = ce.useCallback((U) => {
    iP(
      U,
      (H) => {
        H.data.success ? (qa.success("Chat widget saved"), s(H.data.data), g()) : (console.error(H), qa.error("Error saving chat widget."));
      },
      (H) => {
        console.error(H), qa.error("Error saving chat widget.");
      }
    );
  }, [s, g]), D = ce.useCallback(() => {
    v(null), _();
  }, [d, _]), L = ce.useMemo(() => /* @__PURE__ */ T.jsx("div", { className: "tw-chat-admin-modal-content", children: /* @__PURE__ */ T.jsx(
    u1,
    {
      currentWidget: d,
      onSave: O
    }
  ) }), [d, O]);
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsxs("p", { children: [
      "Click the ",
      /* @__PURE__ */ T.jsx("strong", { children: "widget name" }),
      " to edit a chat widget."
    ] }),
    /* @__PURE__ */ T.jsx("p", { children: /* @__PURE__ */ T.jsx("button", { className: "button button-primary", onClick: () => D(), children: "Create New Chat Widget" }) }),
    l.length > 0 && /* @__PURE__ */ T.jsx(
      l1,
      {
        widgets: l,
        onEdit: _,
        onRemove: R,
        onCopy: o1
      }
    ),
    /* @__PURE__ */ T.jsxs(
      uE,
      {
        isOpen: m,
        onRequestClose: g,
        contentLabel: "Edit Chat Widget",
        className: "tw-chat-admin-modal",
        overlayClassName: "tw-chat-admin-overlay",
        children: [
          /* @__PURE__ */ T.jsxs("h2", { className: "tw-chat-admin-modal-header", children: [
            "Save Chat Widget",
            /* @__PURE__ */ T.jsx("button", { onClick: g, children: /* @__PURE__ */ T.jsx("span", { className: "dashicons dashicons-no-alt" }) })
          ] }),
          L
        ]
      }
    )
  ] });
};
function uP() {
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsx("span", { className: "spinner is-active" }),
    " Loading..."
  ] });
}
function sP(l, s) {
  Zn.post(twChatSettings.ajax_url, {
    action: "get_retell_agents",
    _ajax_nonce: twChatSettings.ajax_nonce
  }, {
    headers: {
      "Content-Type": "multipart/form-data"
      // Set content type for FormData
    }
  }).then(l).catch(s);
}
const cP = () => {
  const [l, s] = ce.useState(!1), [d, v] = ce.useState([]), m = ce.useCallback(() => {
    s(!0), v([]), sP(
      (w) => {
        if (w.data.success) {
          const _ = /* @__PURE__ */ new Set(), g = (w.data.data || []).filter((R) => R.is_published === !0).filter((R) => _.has(R.agent_id) ? !1 : (_.add(R.agent_id), !0));
          v(g), qa.success("Voice agents loaded successfully!"), s(!1);
        } else
          qa.error("Failed to fetch Retell AI voice agents.");
      },
      (w) => {
        qa.error("Failed to fetch Retell AI voice agents.");
      }
    );
  }, [v]);
  return /* @__PURE__ */ T.jsxs("div", { className: "retell-ai-manager", children: [
    /* @__PURE__ */ T.jsxs("section", { children: [
      /* @__PURE__ */ T.jsxs("p", { children: [
        "Click ",
        /* @__PURE__ */ T.jsx("strong", { children: "Load Agents" }),
        " to view your voice agents."
      ] }),
      /* @__PURE__ */ T.jsx("p", { children: l ? /* @__PURE__ */ T.jsx(uP, {}) : /* @__PURE__ */ T.jsx(
        "button",
        {
          type: "button",
          className: "button button-primary",
          onClick: m,
          disabled: l,
          children: "Load Agents"
        }
      ) }),
      d.length > 0 ? /* @__PURE__ */ T.jsxs("table", { className: "wp-list-table widefat fixed striped", children: [
        /* @__PURE__ */ T.jsx("thead", { children: /* @__PURE__ */ T.jsxs("tr", { children: [
          /* @__PURE__ */ T.jsx("th", { children: "Agent Name" }),
          /* @__PURE__ */ T.jsx("th", { children: "Agent ID" })
        ] }) }),
        /* @__PURE__ */ T.jsx("tbody", { children: d.map((w) => /* @__PURE__ */ T.jsxs("tr", { children: [
          /* @__PURE__ */ T.jsx("td", { children: w.agent_name }),
          /* @__PURE__ */ T.jsxs("td", { children: [
            /* @__PURE__ */ T.jsx(
              "a",
              {
                href: "#",
                onClick: () => o1(w.agent_id),
                "data-tooltip-id": `copy-tooltip-${w.agent_id}`,
                "data-tooltip-content": "Click to copy",
                "data-tooltip-place": "top",
                children: w.agent_id
              }
            ),
            /* @__PURE__ */ T.jsx(Gd, { id: `copy-tooltip-${w.agent_id}` })
          ] })
        ] }, w.agent_id)) })
      ] }) : /* @__PURE__ */ T.jsx(T.Fragment, {})
    ] }),
    /* @__PURE__ */ T.jsxs("section", { children: [
      /* @__PURE__ */ T.jsx("h2", { children: "How to Use Voice Agents" }),
      /* @__PURE__ */ T.jsxs("ol", { children: [
        /* @__PURE__ */ T.jsx("li", { children: "Configure your Retell AI API key above." }),
        /* @__PURE__ */ T.jsxs("li", { children: [
          "Create voice agents in the ",
          /* @__PURE__ */ T.jsx("a", { href: "https://studio.retellai.com/dashboard", target: "_blank", rel: "noopener noreferrer", children: "Retell AI Dashboard" }),
          "."
        ] }),
        /* @__PURE__ */ T.jsx("li", { children: 'Go to the "Chat Widgets" tab and create a new widget with type "Retell AI Voice Agent".' }),
        /* @__PURE__ */ T.jsx("li", { children: "Enter the Voice Agent ID from the table above." }),
        /* @__PURE__ */ T.jsx("li", { children: "Use the provided shortcode to embed the voice widget on your site." })
      ] }),
      /* @__PURE__ */ T.jsx("div", { className: "notice notice-info", children: /* @__PURE__ */ T.jsxs("p", { children: [
        /* @__PURE__ */ T.jsx("strong", { children: "Note:" }),
        " Voice agents require a browser that supports WebRTC and microphone access."
      ] }) })
    ] })
  ] });
};
function fP() {
  var s;
  const l = [
    { title: "Plugin Settings", content: aP },
    { title: "Chat Widgets", content: lP },
    { title: "Retell AI Voice Agents", content: cP }
  ];
  return /* @__PURE__ */ T.jsxs("div", { className: "tw-admin-app", children: [
    /* @__PURE__ */ T.jsx("header", { className: "tw-admin-header", children: /* @__PURE__ */ T.jsxs("div", { className: "tw-admin-header-content", children: [
      /* @__PURE__ */ T.jsxs("div", { children: [
        /* @__PURE__ */ T.jsx("h1", { children: "Chat Dashboard" }),
        /* @__PURE__ */ T.jsx("p", { className: "tw-motto", children: "Build Faster. Operate Smarter. Win More." })
      ] }),
      /* @__PURE__ */ T.jsx("div", { className: "tw-logo", children: /* @__PURE__ */ T.jsx("img", { src: ((s = window.twChatSettings) == null ? void 0 : s.plugin_dir_url) + "img/logo.png", alt: "Treyworks Logo" }) })
    ] }) }),
    /* @__PURE__ */ T.jsx("div", { className: "tw-admin-body", children: /* @__PURE__ */ T.jsx(uL, { tabs: l }) }),
    /* @__PURE__ */ T.jsx(
      xj,
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
  uE.setAppElement("#tw-chat-admin"), ah.createRoot(document.getElementById("tw-chat-admin")).render(
    /* @__PURE__ */ T.jsx(pu.StrictMode, { children: /* @__PURE__ */ T.jsx(jj, { atoms: [rE], children: /* @__PURE__ */ T.jsx(fP, {}) }) })
  );
});
