var wD = Object.defineProperty;
var mx = (p) => {
  throw TypeError(p);
};
var CD = (p, c, f) => c in p ? wD(p, c, { enumerable: !0, configurable: !0, writable: !0, value: f }) : p[c] = f;
var xn = (p, c, f) => CD(p, typeof c != "symbol" ? c + "" : c, f), xD = (p, c, f) => c.has(p) || mx("Cannot " + f);
var yx = (p, c, f) => c.has(p) ? mx("Cannot add the same private member more than once") : c instanceof WeakSet ? c.add(p) : c.set(p, f);
var yy = (p, c, f) => (xD(p, c, "access private method"), f);
var wl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bE(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var hE = { exports: {} }, dh = {}, vE = { exports: {} }, Lt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gx;
function bD() {
  if (gx) return Lt;
  gx = 1;
  var p = Symbol.for("react.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), C = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), j = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), F = Symbol.iterator;
  function I(k) {
    return k === null || typeof k != "object" ? null : (k = F && k[F] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, X = Object.assign, Z = {};
  function Re(k, G, we) {
    this.props = k, this.context = G, this.refs = Z, this.updater = we || oe;
  }
  Re.prototype.isReactComponent = {}, Re.prototype.setState = function(k, G) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, G, "setState");
  }, Re.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function ct() {
  }
  ct.prototype = Re.prototype;
  function vt(k, G, we) {
    this.props = k, this.context = G, this.refs = Z, this.updater = we || oe;
  }
  var Ve = vt.prototype = new ct();
  Ve.constructor = vt, X(Ve, Re.prototype), Ve.isPureReactComponent = !0;
  var Ae = Array.isArray, yt = Object.prototype.hasOwnProperty, _e = { current: null }, Ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function nt(k, G, we) {
    var Be, $e = {}, ut = null, Ke = null;
    if (G != null) for (Be in G.ref !== void 0 && (Ke = G.ref), G.key !== void 0 && (ut = "" + G.key), G) yt.call(G, Be) && !Ge.hasOwnProperty(Be) && ($e[Be] = G[Be]);
    var ft = arguments.length - 2;
    if (ft === 1) $e.children = we;
    else if (1 < ft) {
      for (var lt = Array(ft), bt = 0; bt < ft; bt++) lt[bt] = arguments[bt + 2];
      $e.children = lt;
    }
    if (k && k.defaultProps) for (Be in ft = k.defaultProps, ft) $e[Be] === void 0 && ($e[Be] = ft[Be]);
    return { $$typeof: p, type: k, key: ut, ref: Ke, props: $e, _owner: _e.current };
  }
  function hn(k, G) {
    return { $$typeof: p, type: k.type, key: G, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Yt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === p;
  }
  function H(k) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(we) {
      return G[we];
    });
  }
  var ne = /\/+/g;
  function he(k, G) {
    return typeof k == "object" && k !== null && k.key != null ? H("" + k.key) : G.toString(36);
  }
  function ue(k, G, we, Be, $e) {
    var ut = typeof k;
    (ut === "undefined" || ut === "boolean") && (k = null);
    var Ke = !1;
    if (k === null) Ke = !0;
    else switch (ut) {
      case "string":
      case "number":
        Ke = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case p:
          case c:
            Ke = !0;
        }
    }
    if (Ke) return Ke = k, $e = $e(Ke), k = Be === "" ? "." + he(Ke, 0) : Be, Ae($e) ? (we = "", k != null && (we = k.replace(ne, "$&/") + "/"), ue($e, G, we, "", function(bt) {
      return bt;
    })) : $e != null && (Yt($e) && ($e = hn($e, we + (!$e.key || Ke && Ke.key === $e.key ? "" : ("" + $e.key).replace(ne, "$&/") + "/") + k)), G.push($e)), 1;
    if (Ke = 0, Be = Be === "" ? "." : Be + ":", Ae(k)) for (var ft = 0; ft < k.length; ft++) {
      ut = k[ft];
      var lt = Be + he(ut, ft);
      Ke += ue(ut, G, we, lt, $e);
    }
    else if (lt = I(k), typeof lt == "function") for (k = lt.call(k), ft = 0; !(ut = k.next()).done; ) ut = ut.value, lt = Be + he(ut, ft++), Ke += ue(ut, G, we, lt, $e);
    else if (ut === "object") throw G = String(k), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.");
    return Ke;
  }
  function ye(k, G, we) {
    if (k == null) return k;
    var Be = [], $e = 0;
    return ue(k, Be, "", "", function(ut) {
      return G.call(we, ut, $e++);
    }), Be;
  }
  function Se(k) {
    if (k._status === -1) {
      var G = k._result;
      G = G(), G.then(function(we) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = we);
      }, function(we) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = we);
      }), k._status === -1 && (k._status = 0, k._result = G);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var Ee = { current: null }, K = { transition: null }, se = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: K, ReactCurrentOwner: _e };
  return Lt.Children = { map: ye, forEach: function(k, G, we) {
    ye(k, function() {
      G.apply(this, arguments);
    }, we);
  }, count: function(k) {
    var G = 0;
    return ye(k, function() {
      G++;
    }), G;
  }, toArray: function(k) {
    return ye(k, function(G) {
      return G;
    }) || [];
  }, only: function(k) {
    if (!Yt(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Lt.Component = Re, Lt.Fragment = f, Lt.Profiler = S, Lt.PureComponent = vt, Lt.StrictMode = h, Lt.Suspense = U, Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, Lt.cloneElement = function(k, G, we) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Be = X({}, k.props), $e = k.key, ut = k.ref, Ke = k._owner;
    if (G != null) {
      if (G.ref !== void 0 && (ut = G.ref, Ke = _e.current), G.key !== void 0 && ($e = "" + G.key), k.type && k.type.defaultProps) var ft = k.type.defaultProps;
      for (lt in G) yt.call(G, lt) && !Ge.hasOwnProperty(lt) && (Be[lt] = G[lt] === void 0 && ft !== void 0 ? ft[lt] : G[lt]);
    }
    var lt = arguments.length - 2;
    if (lt === 1) Be.children = we;
    else if (1 < lt) {
      ft = Array(lt);
      for (var bt = 0; bt < lt; bt++) ft[bt] = arguments[bt + 2];
      Be.children = ft;
    }
    return { $$typeof: p, type: k.type, key: $e, ref: ut, props: Be, _owner: Ke };
  }, Lt.createContext = function(k) {
    return k = { $$typeof: C, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: x, _context: k }, k.Consumer = k;
  }, Lt.createElement = nt, Lt.createFactory = function(k) {
    var G = nt.bind(null, k);
    return G.type = k, G;
  }, Lt.createRef = function() {
    return { current: null };
  }, Lt.forwardRef = function(k) {
    return { $$typeof: g, render: k };
  }, Lt.isValidElement = Yt, Lt.lazy = function(k) {
    return { $$typeof: M, _payload: { _status: -1, _result: k }, _init: Se };
  }, Lt.memo = function(k, G) {
    return { $$typeof: j, type: k, compare: G === void 0 ? null : G };
  }, Lt.startTransition = function(k) {
    var G = K.transition;
    K.transition = {};
    try {
      k();
    } finally {
      K.transition = G;
    }
  }, Lt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Lt.useCallback = function(k, G) {
    return Ee.current.useCallback(k, G);
  }, Lt.useContext = function(k) {
    return Ee.current.useContext(k);
  }, Lt.useDebugValue = function() {
  }, Lt.useDeferredValue = function(k) {
    return Ee.current.useDeferredValue(k);
  }, Lt.useEffect = function(k, G) {
    return Ee.current.useEffect(k, G);
  }, Lt.useId = function() {
    return Ee.current.useId();
  }, Lt.useImperativeHandle = function(k, G, we) {
    return Ee.current.useImperativeHandle(k, G, we);
  }, Lt.useInsertionEffect = function(k, G) {
    return Ee.current.useInsertionEffect(k, G);
  }, Lt.useLayoutEffect = function(k, G) {
    return Ee.current.useLayoutEffect(k, G);
  }, Lt.useMemo = function(k, G) {
    return Ee.current.useMemo(k, G);
  }, Lt.useReducer = function(k, G, we) {
    return Ee.current.useReducer(k, G, we);
  }, Lt.useRef = function(k) {
    return Ee.current.useRef(k);
  }, Lt.useState = function(k) {
    return Ee.current.useState(k);
  }, Lt.useSyncExternalStore = function(k, G, we) {
    return Ee.current.useSyncExternalStore(k, G, we);
  }, Lt.useTransition = function() {
    return Ee.current.useTransition();
  }, Lt.version = "18.2.0", Lt;
}
var yh = { exports: {} };
yh.exports;
var Sx;
function RD() {
  return Sx || (Sx = 1, function(p, c) {
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
      var h = "18.2.0", S = Symbol.for("react.element"), x = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), M = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), Re = Symbol.for("react.offscreen"), ct = Symbol.iterator, vt = "@@iterator";
      function Ve(w) {
        if (w === null || typeof w != "object")
          return null;
        var O = ct && w[ct] || w[vt];
        return typeof O == "function" ? O : null;
      }
      var Ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, yt = {
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
      }, nt = {}, hn = null;
      function Yt(w) {
        hn = w;
      }
      nt.setExtraStackFrame = function(w) {
        hn = w;
      }, nt.getCurrentStack = null, nt.getStackAddendum = function() {
        var w = "";
        hn && (w += hn);
        var O = nt.getCurrentStack;
        return O && (w += O() || ""), w;
      };
      var H = !1, ne = !1, he = !1, ue = !1, ye = !1, Se = {
        ReactCurrentDispatcher: Ae,
        ReactCurrentBatchConfig: yt,
        ReactCurrentOwner: Ge
      };
      Se.ReactDebugCurrentFrame = nt, Se.ReactCurrentActQueue = _e;
      function Ee(w) {
        {
          for (var O = arguments.length, Y = new Array(O > 1 ? O - 1 : 0), J = 1; J < O; J++)
            Y[J - 1] = arguments[J];
          se("warn", w, Y);
        }
      }
      function K(w) {
        {
          for (var O = arguments.length, Y = new Array(O > 1 ? O - 1 : 0), J = 1; J < O; J++)
            Y[J - 1] = arguments[J];
          se("error", w, Y);
        }
      }
      function se(w, O, Y) {
        {
          var J = Se.ReactDebugCurrentFrame, ve = J.getStackAddendum();
          ve !== "" && (O += "%s", Y = Y.concat([ve]));
          var Pe = Y.map(function(Le) {
            return String(Le);
          });
          Pe.unshift("Warning: " + O), Function.prototype.apply.call(console[w], console, Pe);
        }
      }
      var k = {};
      function G(w, O) {
        {
          var Y = w.constructor, J = Y && (Y.displayName || Y.name) || "ReactClass", ve = J + "." + O;
          if (k[ve])
            return;
          K("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", O, J), k[ve] = !0;
        }
      }
      var we = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(w) {
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
        enqueueForceUpdate: function(w, O, Y) {
          G(w, "forceUpdate");
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
        enqueueReplaceState: function(w, O, Y, J) {
          G(w, "replaceState");
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
        enqueueSetState: function(w, O, Y, J) {
          G(w, "setState");
        }
      }, Be = Object.assign, $e = {};
      Object.freeze($e);
      function ut(w, O, Y) {
        this.props = w, this.context = O, this.refs = $e, this.updater = Y || we;
      }
      ut.prototype.isReactComponent = {}, ut.prototype.setState = function(w, O) {
        if (typeof w != "object" && typeof w != "function" && w != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, w, O, "setState");
      }, ut.prototype.forceUpdate = function(w) {
        this.updater.enqueueForceUpdate(this, w, "forceUpdate");
      };
      {
        var Ke = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ft = function(w, O) {
          Object.defineProperty(ut.prototype, w, {
            get: function() {
              Ee("%s(...) is deprecated in plain JavaScript React classes. %s", O[0], O[1]);
            }
          });
        };
        for (var lt in Ke)
          Ke.hasOwnProperty(lt) && ft(lt, Ke[lt]);
      }
      function bt() {
      }
      bt.prototype = ut.prototype;
      function bn(w, O, Y) {
        this.props = w, this.context = O, this.refs = $e, this.updater = Y || we;
      }
      var Wn = bn.prototype = new bt();
      Wn.constructor = bn, Be(Wn, ut.prototype), Wn.isPureReactComponent = !0;
      function Yr() {
        var w = {
          current: null
        };
        return Object.seal(w), w;
      }
      var Cr = Array.isArray;
      function Rn(w) {
        return Cr(w);
      }
      function ur(w) {
        {
          var O = typeof Symbol == "function" && Symbol.toStringTag, Y = O && w[Symbol.toStringTag] || w.constructor.name || "Object";
          return Y;
        }
      }
      function qn(w) {
        try {
          return Hn(w), !1;
        } catch {
          return !0;
        }
      }
      function Hn(w) {
        return "" + w;
      }
      function Bn(w) {
        if (qn(w))
          return K("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(w)), Hn(w);
      }
      function Lr(w, O, Y) {
        var J = w.displayName;
        if (J)
          return J;
        var ve = O.displayName || O.name || "";
        return ve !== "" ? Y + "(" + ve + ")" : Y;
      }
      function xr(w) {
        return w.displayName || "Context";
      }
      function Qn(w) {
        if (w == null)
          return null;
        if (typeof w.tag == "number" && K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
          return w.displayName || w.name || null;
        if (typeof w == "string")
          return w;
        switch (w) {
          case C:
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
        if (typeof w == "object")
          switch (w.$$typeof) {
            case M:
              var O = w;
              return xr(O) + ".Consumer";
            case j:
              var Y = w;
              return xr(Y._context) + ".Provider";
            case F:
              return Lr(w, w.render, "ForwardRef");
            case X:
              var J = w.displayName || null;
              return J !== null ? J : Qn(w.type) || "Memo";
            case Z: {
              var ve = w, Pe = ve._payload, Le = ve._init;
              try {
                return Qn(Le(Pe));
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
      }, br, ma, sr;
      sr = {};
      function Nr(w) {
        if (ha.call(w, "ref")) {
          var O = Object.getOwnPropertyDescriptor(w, "ref").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return w.ref !== void 0;
      }
      function vn(w) {
        if (ha.call(w, "key")) {
          var O = Object.getOwnPropertyDescriptor(w, "key").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return w.key !== void 0;
      }
      function ya(w, O) {
        var Y = function() {
          br || (br = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        Y.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: Y,
          configurable: !0
        });
      }
      function ga(w, O) {
        var Y = function() {
          ma || (ma = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        Y.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: Y,
          configurable: !0
        });
      }
      function Sa(w) {
        if (typeof w.ref == "string" && Ge.current && w.__self && Ge.current.stateNode !== w.__self) {
          var O = Qn(Ge.current.type);
          sr[O] || (K('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O, w.ref), sr[O] = !0);
        }
      }
      var xe = function(w, O, Y, J, ve, Pe, Le) {
        var ot = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: w,
          key: O,
          ref: Y,
          props: Le,
          // Record the component responsible for creating this element.
          _owner: Pe
        };
        return ot._store = {}, Object.defineProperty(ot._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ot, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.defineProperty(ot, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ve
        }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
      };
      function Qe(w, O, Y) {
        var J, ve = {}, Pe = null, Le = null, ot = null, Ct = null;
        if (O != null) {
          Nr(O) && (Le = O.ref, Sa(O)), vn(O) && (Bn(O.key), Pe = "" + O.key), ot = O.__self === void 0 ? null : O.__self, Ct = O.__source === void 0 ? null : O.__source;
          for (J in O)
            ha.call(O, J) && !va.hasOwnProperty(J) && (ve[J] = O[J]);
        }
        var Vt = arguments.length - 2;
        if (Vt === 1)
          ve.children = Y;
        else if (Vt > 1) {
          for (var qt = Array(Vt), Qt = 0; Qt < Vt; Qt++)
            qt[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(qt), ve.children = qt;
        }
        if (w && w.defaultProps) {
          var Gt = w.defaultProps;
          for (J in Gt)
            ve[J] === void 0 && (ve[J] = Gt[J]);
        }
        if (Pe || Le) {
          var cn = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          Pe && ya(ve, cn), Le && ga(ve, cn);
        }
        return xe(w, Pe, Le, ot, Ct, Ge.current, ve);
      }
      function Et(w, O) {
        var Y = xe(w.type, O, w.ref, w._self, w._source, w._owner, w.props);
        return Y;
      }
      function Bt(w, O, Y) {
        if (w == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
        var J, ve = Be({}, w.props), Pe = w.key, Le = w.ref, ot = w._self, Ct = w._source, Vt = w._owner;
        if (O != null) {
          Nr(O) && (Le = O.ref, Vt = Ge.current), vn(O) && (Bn(O.key), Pe = "" + O.key);
          var qt;
          w.type && w.type.defaultProps && (qt = w.type.defaultProps);
          for (J in O)
            ha.call(O, J) && !va.hasOwnProperty(J) && (O[J] === void 0 && qt !== void 0 ? ve[J] = qt[J] : ve[J] = O[J]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          ve.children = Y;
        else if (Qt > 1) {
          for (var Gt = Array(Qt), cn = 0; cn < Qt; cn++)
            Gt[cn] = arguments[cn + 2];
          ve.children = Gt;
        }
        return xe(w.type, Pe, Le, ot, Ct, Vt, ve);
      }
      function zt(w) {
        return typeof w == "object" && w !== null && w.$$typeof === S;
      }
      var Nn = ".", yn = ":";
      function Rr(w) {
        var O = /[=:]/g, Y = {
          "=": "=0",
          ":": "=2"
        }, J = w.replace(O, function(ve) {
          return Y[ve];
        });
        return "$" + J;
      }
      var Wt = !1, tr = /\/+/g;
      function $t(w) {
        return w.replace(tr, "$&/");
      }
      function tn(w, O) {
        return typeof w == "object" && w !== null && w.key != null ? (Bn(w.key), Rr("" + w.key)) : O.toString(36);
      }
      function ri(w, O, Y, J, ve) {
        var Pe = typeof w;
        (Pe === "undefined" || Pe === "boolean") && (w = null);
        var Le = !1;
        if (w === null)
          Le = !0;
        else
          switch (Pe) {
            case "string":
            case "number":
              Le = !0;
              break;
            case "object":
              switch (w.$$typeof) {
                case S:
                case x:
                  Le = !0;
              }
          }
        if (Le) {
          var ot = w, Ct = ve(ot), Vt = J === "" ? Nn + tn(ot, 0) : J;
          if (Rn(Ct)) {
            var qt = "";
            Vt != null && (qt = $t(Vt) + "/"), ri(Ct, O, qt, "", function(vd) {
              return vd;
            });
          } else Ct != null && (zt(Ct) && (Ct.key && (!ot || ot.key !== Ct.key) && Bn(Ct.key), Ct = Et(
            Ct,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Y + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ct.key && (!ot || ot.key !== Ct.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              $t("" + Ct.key) + "/"
            ) : "") + Vt
          )), O.push(Ct));
          return 1;
        }
        var Qt, Gt, cn = 0, Mt = J === "" ? Nn : J + yn;
        if (Rn(w))
          for (var Dl = 0; Dl < w.length; Dl++)
            Qt = w[Dl], Gt = Mt + tn(Qt, Dl), cn += ri(Qt, O, Y, Gt, ve);
        else {
          var su = Ve(w);
          if (typeof su == "function") {
            var gs = w;
            su === gs.entries && (Wt || Ee("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wt = !0);
            for (var Ss = su.call(gs), Gi, Es = 0; !(Gi = Ss.next()).done; )
              Qt = Gi.value, Gt = Mt + tn(Qt, Es++), cn += ri(Qt, O, Y, Gt, ve);
          } else if (Pe === "object") {
            var ws = String(w);
            throw new Error("Objects are not valid as a React child (found: " + (ws === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : ws) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return cn;
      }
      function Ma(w, O, Y) {
        if (w == null)
          return w;
        var J = [], ve = 0;
        return ri(w, J, "", "", function(Pe) {
          return O.call(Y, Pe, ve++);
        }), J;
      }
      function Cl(w) {
        var O = 0;
        return Ma(w, function() {
          O++;
        }), O;
      }
      function co(w, O, Y) {
        Ma(w, function() {
          O.apply(this, arguments);
        }, Y);
      }
      function fo(w) {
        return Ma(w, function(O) {
          return O;
        }) || [];
      }
      function xl(w) {
        if (!zt(w))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return w;
      }
      function ai(w) {
        var O = {
          $$typeof: M,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: w,
          _currentValue2: w,
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
          $$typeof: j,
          _context: O
        };
        var Y = !1, J = !1, ve = !1;
        {
          var Pe = {
            $$typeof: M,
            _context: O
          };
          Object.defineProperties(Pe, {
            Provider: {
              get: function() {
                return J || (J = !0, K("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), O.Provider;
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
                return Y || (Y = !0, K("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), O.Consumer;
              }
            },
            displayName: {
              get: function() {
                return O.displayName;
              },
              set: function(Le) {
                ve || (Ee("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Le), ve = !0);
              }
            }
          }), O.Consumer = Pe;
        }
        return O._currentRenderer = null, O._currentRenderer2 = null, O;
      }
      var ii = -1, Aa = 0, $i = 1, Wr = 2;
      function qr(w) {
        if (w._status === ii) {
          var O = w._result, Y = O();
          if (Y.then(function(Pe) {
            if (w._status === Aa || w._status === ii) {
              var Le = w;
              Le._status = $i, Le._result = Pe;
            }
          }, function(Pe) {
            if (w._status === Aa || w._status === ii) {
              var Le = w;
              Le._status = Wr, Le._result = Pe;
            }
          }), w._status === ii) {
            var J = w;
            J._status = Aa, J._result = Y;
          }
        }
        if (w._status === $i) {
          var ve = w._result;
          return ve === void 0 && K(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ve), "default" in ve || K(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ve), ve.default;
        } else
          throw w._result;
      }
      function Ea(w) {
        var O = {
          // We use these fields to store the result.
          _status: ii,
          _result: w
        }, Y = {
          $$typeof: Z,
          _payload: O,
          _init: qr
        };
        {
          var J, ve;
          Object.defineProperties(Y, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(Pe) {
                K("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = Pe, Object.defineProperty(Y, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ve;
              },
              set: function(Pe) {
                K("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ve = Pe, Object.defineProperty(Y, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Y;
      }
      function Vi(w) {
        w != null && w.$$typeof === X ? K("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof w != "function" ? K("forwardRef requires a render function but was given %s.", w === null ? "null" : typeof w) : w.length !== 0 && w.length !== 2 && K("forwardRef render functions accept exactly two parameters: props and ref. %s", w.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), w != null && (w.defaultProps != null || w.propTypes != null) && K("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var O = {
          $$typeof: F,
          render: w
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
              Y = J, !w.name && !w.displayName && (w.displayName = J);
            }
          });
        }
        return O;
      }
      var D;
      D = Symbol.for("react.module.reference");
      function ce(w) {
        return !!(typeof w == "string" || typeof w == "function" || w === C || w === U || ye || w === g || w === I || w === oe || ue || w === Re || H || ne || he || typeof w == "object" && w !== null && (w.$$typeof === Z || w.$$typeof === X || w.$$typeof === j || w.$$typeof === M || w.$$typeof === F || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        w.$$typeof === D || w.getModuleId !== void 0));
      }
      function be(w, O) {
        ce(w) || K("memo: The first argument must be a component. Instead received: %s", w === null ? "null" : typeof w);
        var Y = {
          $$typeof: X,
          type: w,
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
            set: function(ve) {
              J = ve, !w.name && !w.displayName && (w.displayName = ve);
            }
          });
        }
        return Y;
      }
      function Te() {
        var w = Ae.current;
        return w === null && K(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), w;
      }
      function xt(w) {
        var O = Te();
        if (w._context !== void 0) {
          var Y = w._context;
          Y.Consumer === w ? K("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Y.Provider === w && K("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return O.useContext(w);
      }
      function _t(w) {
        var O = Te();
        return O.useState(w);
      }
      function St(w, O, Y) {
        var J = Te();
        return J.useReducer(w, O, Y);
      }
      function Xe(w) {
        var O = Te();
        return O.useRef(w);
      }
      function $n(w, O) {
        var Y = Te();
        return Y.useEffect(w, O);
      }
      function nn(w, O) {
        var Y = Te();
        return Y.useInsertionEffect(w, O);
      }
      function rn(w, O) {
        var Y = Te();
        return Y.useLayoutEffect(w, O);
      }
      function Tr(w, O) {
        var Y = Te();
        return Y.useCallback(w, O);
      }
      function yi(w, O) {
        var Y = Te();
        return Y.useMemo(w, O);
      }
      function an(w, O, Y) {
        var J = Te();
        return J.useImperativeHandle(w, O, Y);
      }
      function Qr(w, O) {
        {
          var Y = Te();
          return Y.useDebugValue(w, O);
        }
      }
      function os() {
        var w = Te();
        return w.useTransition();
      }
      function gi(w) {
        var O = Te();
        return O.useDeferredValue(w);
      }
      function wt() {
        var w = Te();
        return w.useId();
      }
      function po(w, O, Y) {
        var J = Te();
        return J.useSyncExternalStore(w, O, Y);
      }
      var Ii = 0, bl, Gr, us, Mr, ss, cs, fs;
      function ho() {
      }
      ho.__reactDisabledLog = !0;
      function tu() {
        {
          if (Ii === 0) {
            bl = console.log, Gr = console.info, us = console.warn, Mr = console.error, ss = console.group, cs = console.groupCollapsed, fs = console.groupEnd;
            var w = {
              configurable: !0,
              enumerable: !0,
              value: ho,
              writable: !0
            };
            Object.defineProperties(console, {
              info: w,
              log: w,
              warn: w,
              error: w,
              group: w,
              groupCollapsed: w,
              groupEnd: w
            });
          }
          Ii++;
        }
      }
      function Yi() {
        {
          if (Ii--, Ii === 0) {
            var w = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Be({}, w, {
                value: bl
              }),
              info: Be({}, w, {
                value: Gr
              }),
              warn: Be({}, w, {
                value: us
              }),
              error: Be({}, w, {
                value: Mr
              }),
              group: Be({}, w, {
                value: ss
              }),
              groupCollapsed: Be({}, w, {
                value: cs
              }),
              groupEnd: Be({}, w, {
                value: fs
              })
            });
          }
          Ii < 0 && K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Si = Se.ReactCurrentDispatcher, za;
      function Rl(w, O, Y) {
        {
          if (za === void 0)
            try {
              throw Error();
            } catch (ve) {
              var J = ve.stack.trim().match(/\n( *(at )?)/);
              za = J && J[1] || "";
            }
          return `
` + za + w;
        }
      }
      var Ei = !1, vo;
      {
        var mo = typeof WeakMap == "function" ? WeakMap : Map;
        vo = new mo();
      }
      function Tl(w, O) {
        if (!w || Ei)
          return "";
        {
          var Y = vo.get(w);
          if (Y !== void 0)
            return Y;
        }
        var J;
        Ei = !0;
        var ve = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Pe;
        Pe = Si.current, Si.current = null, tu();
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
              } catch (Mt) {
                J = Mt;
              }
              Reflect.construct(w, [], Le);
            } else {
              try {
                Le.call();
              } catch (Mt) {
                J = Mt;
              }
              w.call(Le.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Mt) {
              J = Mt;
            }
            w();
          }
        } catch (Mt) {
          if (Mt && J && typeof Mt.stack == "string") {
            for (var ot = Mt.stack.split(`
`), Ct = J.stack.split(`
`), Vt = ot.length - 1, qt = Ct.length - 1; Vt >= 1 && qt >= 0 && ot[Vt] !== Ct[qt]; )
              qt--;
            for (; Vt >= 1 && qt >= 0; Vt--, qt--)
              if (ot[Vt] !== Ct[qt]) {
                if (Vt !== 1 || qt !== 1)
                  do
                    if (Vt--, qt--, qt < 0 || ot[Vt] !== Ct[qt]) {
                      var Qt = `
` + ot[Vt].replace(" at new ", " at ");
                      return w.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", w.displayName)), typeof w == "function" && vo.set(w, Qt), Qt;
                    }
                  while (Vt >= 1 && qt >= 0);
                break;
              }
          }
        } finally {
          Ei = !1, Si.current = Pe, Yi(), Error.prepareStackTrace = ve;
        }
        var Gt = w ? w.displayName || w.name : "", cn = Gt ? Rl(Gt) : "";
        return typeof w == "function" && vo.set(w, cn), cn;
      }
      function ds(w, O, Y) {
        return Tl(w, !1);
      }
      function ps(w) {
        var O = w.prototype;
        return !!(O && O.isReactComponent);
      }
      function kt(w, O, Y) {
        if (w == null)
          return "";
        if (typeof w == "function")
          return Tl(w, ps(w));
        if (typeof w == "string")
          return Rl(w);
        switch (w) {
          case I:
            return Rl("Suspense");
          case oe:
            return Rl("SuspenseList");
        }
        if (typeof w == "object")
          switch (w.$$typeof) {
            case F:
              return ds(w.render);
            case X:
              return kt(w.type, O, Y);
            case Z: {
              var J = w, ve = J._payload, Pe = J._init;
              try {
                return kt(Pe(ve), O, Y);
              } catch {
              }
            }
          }
        return "";
      }
      var hs = {}, nu = Se.ReactDebugCurrentFrame;
      function kl(w) {
        if (w) {
          var O = w._owner, Y = kt(w.type, w._source, O ? O.type : null);
          nu.setExtraStackFrame(Y);
        } else
          nu.setExtraStackFrame(null);
      }
      function vs(w, O, Y, J, ve) {
        {
          var Pe = Function.call.bind(ha);
          for (var Le in w)
            if (Pe(w, Le)) {
              var ot = void 0;
              try {
                if (typeof w[Le] != "function") {
                  var Ct = Error((J || "React class") + ": " + Y + " type `" + Le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[Le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ct.name = "Invariant Violation", Ct;
                }
                ot = w[Le](O, Le, J, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Vt) {
                ot = Vt;
              }
              ot && !(ot instanceof Error) && (kl(ve), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", Y, Le, typeof ot), kl(null)), ot instanceof Error && !(ot.message in hs) && (hs[ot.message] = !0, kl(ve), K("Failed %s type: %s", Y, ot.message), kl(null));
            }
        }
      }
      function Nt(w) {
        if (w) {
          var O = w._owner, Y = kt(w.type, w._source, O ? O.type : null);
          Yt(Y);
        } else
          Yt(null);
      }
      var ru;
      ru = !1;
      function yo() {
        if (Ge.current) {
          var w = Qn(Ge.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
      function dt(w) {
        if (w !== void 0) {
          var O = w.fileName.replace(/^.*[\\\/]/, ""), Y = w.lineNumber;
          return `

Check your code at ` + O + ":" + Y + ".";
        }
        return "";
      }
      function li(w) {
        return w != null ? dt(w.__source) : "";
      }
      var gn = {};
      function Kr(w) {
        var O = yo();
        if (!O) {
          var Y = typeof w == "string" ? w : w.displayName || w.name;
          Y && (O = `

Check the top-level render call using <` + Y + ">.");
        }
        return O;
      }
      function Ua(w, O) {
        if (!(!w._store || w._store.validated || w.key != null)) {
          w._store.validated = !0;
          var Y = Kr(O);
          if (!gn[Y]) {
            gn[Y] = !0;
            var J = "";
            w && w._owner && w._owner !== Ge.current && (J = " It was passed a child from " + Qn(w._owner.type) + "."), Nt(w), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, J), Nt(null);
          }
        }
      }
      function _l(w, O) {
        if (typeof w == "object") {
          if (Rn(w))
            for (var Y = 0; Y < w.length; Y++) {
              var J = w[Y];
              zt(J) && Ua(J, O);
            }
          else if (zt(w))
            w._store && (w._store.validated = !0);
          else if (w) {
            var ve = Ve(w);
            if (typeof ve == "function" && ve !== w.entries)
              for (var Pe = ve.call(w), Le; !(Le = Pe.next()).done; )
                zt(Le.value) && Ua(Le.value, O);
          }
        }
      }
      function sn(w) {
        {
          var O = w.type;
          if (O == null || typeof O == "string")
            return;
          var Y;
          if (typeof O == "function")
            Y = O.propTypes;
          else if (typeof O == "object" && (O.$$typeof === F || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          O.$$typeof === X))
            Y = O.propTypes;
          else
            return;
          if (Y) {
            var J = Qn(O);
            vs(Y, w.props, "prop", J, w);
          } else if (O.PropTypes !== void 0 && !ru) {
            ru = !0;
            var ve = Qn(O);
            K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
          }
          typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Sn(w) {
        {
          for (var O = Object.keys(w.props), Y = 0; Y < O.length; Y++) {
            var J = O[Y];
            if (J !== "children" && J !== "key") {
              Nt(w), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), Nt(null);
              break;
            }
          }
          w.ref !== null && (Nt(w), K("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
        }
      }
      function ms(w, O, Y) {
        var J = ce(w);
        if (!J) {
          var ve = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pe = li(O);
          Pe ? ve += Pe : ve += yo();
          var Le;
          w === null ? Le = "null" : Rn(w) ? Le = "array" : w !== void 0 && w.$$typeof === S ? (Le = "<" + (Qn(w.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof w, K("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, ve);
        }
        var ot = Qe.apply(this, arguments);
        if (ot == null)
          return ot;
        if (J)
          for (var Ct = 2; Ct < arguments.length; Ct++)
            _l(arguments[Ct], w);
        return w === C ? Sn(ot) : sn(ot), ot;
      }
      var cr = !1;
      function Xr(w) {
        var O = ms.bind(null, w);
        return O.type = w, cr || (cr = !0, Ee("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(O, "type", {
          enumerable: !1,
          get: function() {
            return Ee("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: w
            }), w;
          }
        }), O;
      }
      function oi(w, O, Y) {
        for (var J = Bt.apply(this, arguments), ve = 2; ve < arguments.length; ve++)
          _l(arguments[ve], J.type);
        return sn(J), J;
      }
      function au(w, O) {
        var Y = yt.transition;
        yt.transition = {};
        var J = yt.transition;
        yt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          w();
        } finally {
          if (yt.transition = Y, Y === null && J._updatedFibers) {
            var ve = J._updatedFibers.size;
            ve > 10 && Ee("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var go = !1, So = null;
      function Ol(w) {
        if (So === null)
          try {
            var O = ("require" + Math.random()).slice(0, 7), Y = p && p[O];
            So = Y.call(p, "timers").setImmediate;
          } catch {
            So = function(ve) {
              go === !1 && (go = !0, typeof MessageChannel > "u" && K("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Pe = new MessageChannel();
              Pe.port1.onmessage = ve, Pe.port2.postMessage(void 0);
            };
          }
        return So(w);
      }
      var Fa = 0, Wi = !1;
      function iu(w) {
        {
          var O = Fa;
          Fa++, _e.current === null && (_e.current = []);
          var Y = _e.isBatchingLegacy, J;
          try {
            if (_e.isBatchingLegacy = !0, J = w(), !Y && _e.didScheduleLegacyUpdate) {
              var ve = _e.current;
              ve !== null && (_e.didScheduleLegacyUpdate = !1, Qi(ve));
            }
          } catch (Gt) {
            throw qi(O), Gt;
          } finally {
            _e.isBatchingLegacy = Y;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var Pe = J, Le = !1, ot = {
              then: function(Gt, cn) {
                Le = !0, Pe.then(function(Mt) {
                  qi(O), Fa === 0 ? lu(Mt, Gt, cn) : Gt(Mt);
                }, function(Mt) {
                  qi(O), cn(Mt);
                });
              }
            };
            return !Wi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Le || (Wi = !0, K("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ot;
          } else {
            var Ct = J;
            if (qi(O), Fa === 0) {
              var Vt = _e.current;
              Vt !== null && (Qi(Vt), _e.current = null);
              var qt = {
                then: function(Gt, cn) {
                  _e.current === null ? (_e.current = [], lu(Ct, Gt, cn)) : Gt(Ct);
                }
              };
              return qt;
            } else {
              var Qt = {
                then: function(Gt, cn) {
                  Gt(Ct);
                }
              };
              return Qt;
            }
          }
        }
      }
      function qi(w) {
        w !== Fa - 1 && K("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Fa = w;
      }
      function lu(w, O, Y) {
        {
          var J = _e.current;
          if (J !== null)
            try {
              Qi(J), Ol(function() {
                J.length === 0 ? (_e.current = null, O(w)) : lu(w, O, Y);
              });
            } catch (ve) {
              Y(ve);
            }
          else
            O(w);
        }
      }
      var wi = !1;
      function Qi(w) {
        if (!wi) {
          wi = !0;
          var O = 0;
          try {
            for (; O < w.length; O++) {
              var Y = w[O];
              do
                Y = Y(!0);
              while (Y !== null);
            }
            w.length = 0;
          } catch (J) {
            throw w = w.slice(O + 1), J;
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
      c.Children = uu, c.Component = ut, c.Fragment = C, c.Profiler = U, c.PureComponent = bn, c.StrictMode = g, c.Suspense = I, c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, c.cloneElement = ys, c.createContext = ai, c.createElement = ou, c.createFactory = ui, c.createRef = Yr, c.forwardRef = Vi, c.isValidElement = zt, c.lazy = Ea, c.memo = be, c.startTransition = au, c.unstable_act = iu, c.useCallback = Tr, c.useContext = xt, c.useDebugValue = Qr, c.useDeferredValue = gi, c.useEffect = $n, c.useId = wt, c.useImperativeHandle = an, c.useInsertionEffect = nn, c.useLayoutEffect = rn, c.useMemo = yi, c.useReducer = St, c.useRef = Xe, c.useState = _t, c.useSyncExternalStore = po, c.useTransition = os, c.version = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(yh, yh.exports)), yh.exports;
}
var TD = {};
TD.NODE_ENV === "production" ? vE.exports = bD() : vE.exports = RD();
var er = vE.exports;
const kD = /* @__PURE__ */ bE(er);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ex;
function _D() {
  if (Ex) return dh;
  Ex = 1;
  var p = er, c = Symbol.for("react.element"), f = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, S = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(g, U, j) {
    var M, F = {}, I = null, oe = null;
    j !== void 0 && (I = "" + j), U.key !== void 0 && (I = "" + U.key), U.ref !== void 0 && (oe = U.ref);
    for (M in U) h.call(U, M) && !x.hasOwnProperty(M) && (F[M] = U[M]);
    if (g && g.defaultProps) for (M in U = g.defaultProps, U) F[M] === void 0 && (F[M] = U[M]);
    return { $$typeof: c, type: g, key: I, ref: oe, props: F, _owner: S.current };
  }
  return dh.Fragment = f, dh.jsx = C, dh.jsxs = C, dh;
}
var ph = {}, wx;
function OD() {
  if (wx) return ph;
  wx = 1;
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
    var c = er, f = Symbol.for("react.element"), h = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), U = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), Z = Symbol.iterator, Re = "@@iterator";
    function ct(D) {
      if (D === null || typeof D != "object")
        return null;
      var ce = Z && D[Z] || D[Re];
      return typeof ce == "function" ? ce : null;
    }
    var vt = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ve(D) {
      {
        for (var ce = arguments.length, be = new Array(ce > 1 ? ce - 1 : 0), Te = 1; Te < ce; Te++)
          be[Te - 1] = arguments[Te];
        Ae("error", D, be);
      }
    }
    function Ae(D, ce, be) {
      {
        var Te = vt.ReactDebugCurrentFrame, xt = Te.getStackAddendum();
        xt !== "" && (ce += "%s", be = be.concat([xt]));
        var _t = be.map(function(St) {
          return String(St);
        });
        _t.unshift("Warning: " + ce), Function.prototype.apply.call(console[D], console, _t);
      }
    }
    var yt = !1, _e = !1, Ge = !1, nt = !1, hn = !1, Yt;
    Yt = Symbol.for("react.module.reference");
    function H(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === S || D === C || hn || D === x || D === M || D === F || nt || D === X || yt || _e || Ge || typeof D == "object" && D !== null && (D.$$typeof === oe || D.$$typeof === I || D.$$typeof === g || D.$$typeof === U || D.$$typeof === j || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === Yt || D.getModuleId !== void 0));
    }
    function ne(D, ce, be) {
      var Te = D.displayName;
      if (Te)
        return Te;
      var xt = ce.displayName || ce.name || "";
      return xt !== "" ? be + "(" + xt + ")" : be;
    }
    function he(D) {
      return D.displayName || "Context";
    }
    function ue(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && Ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case S:
          return "Fragment";
        case h:
          return "Portal";
        case C:
          return "Profiler";
        case x:
          return "StrictMode";
        case M:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case U:
            var ce = D;
            return he(ce) + ".Consumer";
          case g:
            var be = D;
            return he(be._context) + ".Provider";
          case j:
            return ne(D, D.render, "ForwardRef");
          case I:
            var Te = D.displayName || null;
            return Te !== null ? Te : ue(D.type) || "Memo";
          case oe: {
            var xt = D, _t = xt._payload, St = xt._init;
            try {
              return ue(St(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ye = Object.assign, Se = 0, Ee, K, se, k, G, we, Be;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function ut() {
      {
        if (Se === 0) {
          Ee = console.log, K = console.info, se = console.warn, k = console.error, G = console.group, we = console.groupCollapsed, Be = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: $e,
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
        Se++;
      }
    }
    function Ke() {
      {
        if (Se--, Se === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ye({}, D, {
              value: Ee
            }),
            info: ye({}, D, {
              value: K
            }),
            warn: ye({}, D, {
              value: se
            }),
            error: ye({}, D, {
              value: k
            }),
            group: ye({}, D, {
              value: G
            }),
            groupCollapsed: ye({}, D, {
              value: we
            }),
            groupEnd: ye({}, D, {
              value: Be
            })
          });
        }
        Se < 0 && Ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ft = vt.ReactCurrentDispatcher, lt;
    function bt(D, ce, be) {
      {
        if (lt === void 0)
          try {
            throw Error();
          } catch (xt) {
            var Te = xt.stack.trim().match(/\n( *(at )?)/);
            lt = Te && Te[1] || "";
          }
        return `
` + lt + D;
      }
    }
    var bn = !1, Wn;
    {
      var Yr = typeof WeakMap == "function" ? WeakMap : Map;
      Wn = new Yr();
    }
    function Cr(D, ce) {
      if (!D || bn)
        return "";
      {
        var be = Wn.get(D);
        if (be !== void 0)
          return be;
      }
      var Te;
      bn = !0;
      var xt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = ft.current, ft.current = null, ut();
      try {
        if (ce) {
          var St = function() {
            throw Error();
          };
          if (Object.defineProperty(St.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(St, []);
            } catch (Qr) {
              Te = Qr;
            }
            Reflect.construct(D, [], St);
          } else {
            try {
              St.call();
            } catch (Qr) {
              Te = Qr;
            }
            D.call(St.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qr) {
            Te = Qr;
          }
          D();
        }
      } catch (Qr) {
        if (Qr && Te && typeof Qr.stack == "string") {
          for (var Xe = Qr.stack.split(`
`), $n = Te.stack.split(`
`), nn = Xe.length - 1, rn = $n.length - 1; nn >= 1 && rn >= 0 && Xe[nn] !== $n[rn]; )
            rn--;
          for (; nn >= 1 && rn >= 0; nn--, rn--)
            if (Xe[nn] !== $n[rn]) {
              if (nn !== 1 || rn !== 1)
                do
                  if (nn--, rn--, rn < 0 || Xe[nn] !== $n[rn]) {
                    var Tr = `
` + Xe[nn].replace(" at new ", " at ");
                    return D.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", D.displayName)), typeof D == "function" && Wn.set(D, Tr), Tr;
                  }
                while (nn >= 1 && rn >= 0);
              break;
            }
        }
      } finally {
        bn = !1, ft.current = _t, Ke(), Error.prepareStackTrace = xt;
      }
      var yi = D ? D.displayName || D.name : "", an = yi ? bt(yi) : "";
      return typeof D == "function" && Wn.set(D, an), an;
    }
    function Rn(D, ce, be) {
      return Cr(D, !1);
    }
    function ur(D) {
      var ce = D.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function qn(D, ce, be) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return Cr(D, ur(D));
      if (typeof D == "string")
        return bt(D);
      switch (D) {
        case M:
          return bt("Suspense");
        case F:
          return bt("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case j:
            return Rn(D.render);
          case I:
            return qn(D.type, ce, be);
          case oe: {
            var Te = D, xt = Te._payload, _t = Te._init;
            try {
              return qn(_t(xt), ce, be);
            } catch {
            }
          }
        }
      return "";
    }
    var Hn = Object.prototype.hasOwnProperty, Bn = {}, Lr = vt.ReactDebugCurrentFrame;
    function xr(D) {
      if (D) {
        var ce = D._owner, be = qn(D.type, D._source, ce ? ce.type : null);
        Lr.setExtraStackFrame(be);
      } else
        Lr.setExtraStackFrame(null);
    }
    function Qn(D, ce, be, Te, xt) {
      {
        var _t = Function.call.bind(Hn);
        for (var St in D)
          if (_t(D, St)) {
            var Xe = void 0;
            try {
              if (typeof D[St] != "function") {
                var $n = Error((Te || "React class") + ": " + be + " type `" + St + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[St] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $n.name = "Invariant Violation", $n;
              }
              Xe = D[St](ce, St, Te, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              Xe = nn;
            }
            Xe && !(Xe instanceof Error) && (xr(xt), Ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", be, St, typeof Xe), xr(null)), Xe instanceof Error && !(Xe.message in Bn) && (Bn[Xe.message] = !0, xr(xt), Ve("Failed %s type: %s", be, Xe.message), xr(null));
          }
      }
    }
    var ha = Array.isArray;
    function va(D) {
      return ha(D);
    }
    function br(D) {
      {
        var ce = typeof Symbol == "function" && Symbol.toStringTag, be = ce && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return be;
      }
    }
    function ma(D) {
      try {
        return sr(D), !1;
      } catch {
        return !0;
      }
    }
    function sr(D) {
      return "" + D;
    }
    function Nr(D) {
      if (ma(D))
        return Ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(D)), sr(D);
    }
    var vn = vt.ReactCurrentOwner, ya = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ga, Sa, xe;
    xe = {};
    function Qe(D) {
      if (Hn.call(D, "ref")) {
        var ce = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function Et(D) {
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
        xe[be] || (Ve('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ue(vn.current.type), D.ref), xe[be] = !0);
      }
    }
    function zt(D, ce) {
      {
        var be = function() {
          ga || (ga = !0, Ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
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
          Sa || (Sa = !0, Ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        be.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var yn = function(D, ce, be, Te, xt, _t, St) {
      var Xe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: D,
        key: ce,
        ref: be,
        props: St,
        // Record the component responsible for creating this element.
        _owner: _t
      };
      return Xe._store = {}, Object.defineProperty(Xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(Xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xt
      }), Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)), Xe;
    };
    function Rr(D, ce, be, Te, xt) {
      {
        var _t, St = {}, Xe = null, $n = null;
        be !== void 0 && (Nr(be), Xe = "" + be), Et(ce) && (Nr(ce.key), Xe = "" + ce.key), Qe(ce) && ($n = ce.ref, Bt(ce, xt));
        for (_t in ce)
          Hn.call(ce, _t) && !ya.hasOwnProperty(_t) && (St[_t] = ce[_t]);
        if (D && D.defaultProps) {
          var nn = D.defaultProps;
          for (_t in nn)
            St[_t] === void 0 && (St[_t] = nn[_t]);
        }
        if (Xe || $n) {
          var rn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Xe && zt(St, rn), $n && Nn(St, rn);
        }
        return yn(D, Xe, $n, xt, Te, vn.current, St);
      }
    }
    var Wt = vt.ReactCurrentOwner, tr = vt.ReactDebugCurrentFrame;
    function $t(D) {
      if (D) {
        var ce = D._owner, be = qn(D.type, D._source, ce ? ce.type : null);
        tr.setExtraStackFrame(be);
      } else
        tr.setExtraStackFrame(null);
    }
    var tn;
    tn = !1;
    function ri(D) {
      return typeof D == "object" && D !== null && D.$$typeof === f;
    }
    function Ma() {
      {
        if (Wt.current) {
          var D = ue(Wt.current.type);
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
        D && D._owner && D._owner !== Wt.current && (Te = " It was passed a child from " + ue(D._owner.type) + "."), $t(D), Ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Te), $t(null);
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
          var xt = ct(D);
          if (typeof xt == "function" && xt !== D.entries)
            for (var _t = xt.call(D), St; !(St = _t.next()).done; )
              ri(St.value) && xl(St.value, ce);
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
        else if (typeof ce == "object" && (ce.$$typeof === j || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ce.$$typeof === I))
          be = ce.propTypes;
        else
          return;
        if (be) {
          var Te = ue(ce);
          Qn(be, D.props, "prop", Te, D);
        } else if (ce.PropTypes !== void 0 && !tn) {
          tn = !0;
          var xt = ue(ce);
          Ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xt || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && Ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Aa(D) {
      {
        for (var ce = Object.keys(D.props), be = 0; be < ce.length; be++) {
          var Te = ce[be];
          if (Te !== "children" && Te !== "key") {
            $t(D), Ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), $t(null);
            break;
          }
        }
        D.ref !== null && ($t(D), Ve("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    function $i(D, ce, be, Te, xt, _t) {
      {
        var St = H(D);
        if (!St) {
          var Xe = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $n = Cl();
          $n ? Xe += $n : Xe += Ma();
          var nn;
          D === null ? nn = "null" : va(D) ? nn = "array" : D !== void 0 && D.$$typeof === f ? (nn = "<" + (ue(D.type) || "Unknown") + " />", Xe = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof D, Ve("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, Xe);
        }
        var rn = Rr(D, ce, be, xt, _t);
        if (rn == null)
          return rn;
        if (St) {
          var Tr = ce.children;
          if (Tr !== void 0)
            if (Te)
              if (va(Tr)) {
                for (var yi = 0; yi < Tr.length; yi++)
                  ai(Tr[yi], D);
                Object.freeze && Object.freeze(Tr);
              } else
                Ve("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ai(Tr, D);
        }
        return D === S ? Aa(rn) : ii(rn), rn;
      }
    }
    function Wr(D, ce, be) {
      return $i(D, ce, be, !0);
    }
    function qr(D, ce, be) {
      return $i(D, ce, be, !1);
    }
    var Ea = qr, Vi = Wr;
    ph.Fragment = S, ph.jsx = Ea, ph.jsxs = Vi;
  }(), ph;
}
var DD = {};
DD.NODE_ENV === "production" ? hE.exports = _D() : hE.exports = OD();
var tt = hE.exports, gh = {}, mE = { exports: {} }, ti = {}, gy = { exports: {} }, lE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cx;
function LD() {
  return Cx || (Cx = 1, function(p) {
    function c(K, se) {
      var k = K.length;
      K.push(se);
      e: for (; 0 < k; ) {
        var G = k - 1 >>> 1, we = K[G];
        if (0 < S(we, se)) K[G] = se, K[k] = we, k = G;
        else break e;
      }
    }
    function f(K) {
      return K.length === 0 ? null : K[0];
    }
    function h(K) {
      if (K.length === 0) return null;
      var se = K[0], k = K.pop();
      if (k !== se) {
        K[0] = k;
        e: for (var G = 0, we = K.length, Be = we >>> 1; G < Be; ) {
          var $e = 2 * (G + 1) - 1, ut = K[$e], Ke = $e + 1, ft = K[Ke];
          if (0 > S(ut, k)) Ke < we && 0 > S(ft, ut) ? (K[G] = ft, K[Ke] = k, G = Ke) : (K[G] = ut, K[$e] = k, G = $e);
          else if (Ke < we && 0 > S(ft, k)) K[G] = ft, K[Ke] = k, G = Ke;
          else break e;
        }
      }
      return se;
    }
    function S(K, se) {
      var k = K.sortIndex - se.sortIndex;
      return k !== 0 ? k : K.id - se.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      p.unstable_now = function() {
        return x.now();
      };
    } else {
      var C = Date, g = C.now();
      p.unstable_now = function() {
        return C.now() - g;
      };
    }
    var U = [], j = [], M = 1, F = null, I = 3, oe = !1, X = !1, Z = !1, Re = typeof setTimeout == "function" ? setTimeout : null, ct = typeof clearTimeout == "function" ? clearTimeout : null, vt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ve(K) {
      for (var se = f(j); se !== null; ) {
        if (se.callback === null) h(j);
        else if (se.startTime <= K) h(j), se.sortIndex = se.expirationTime, c(U, se);
        else break;
        se = f(j);
      }
    }
    function Ae(K) {
      if (Z = !1, Ve(K), !X) if (f(U) !== null) X = !0, Se(yt);
      else {
        var se = f(j);
        se !== null && Ee(Ae, se.startTime - K);
      }
    }
    function yt(K, se) {
      X = !1, Z && (Z = !1, ct(nt), nt = -1), oe = !0;
      var k = I;
      try {
        for (Ve(se), F = f(U); F !== null && (!(F.expirationTime > se) || K && !H()); ) {
          var G = F.callback;
          if (typeof G == "function") {
            F.callback = null, I = F.priorityLevel;
            var we = G(F.expirationTime <= se);
            se = p.unstable_now(), typeof we == "function" ? F.callback = we : F === f(U) && h(U), Ve(se);
          } else h(U);
          F = f(U);
        }
        if (F !== null) var Be = !0;
        else {
          var $e = f(j);
          $e !== null && Ee(Ae, $e.startTime - se), Be = !1;
        }
        return Be;
      } finally {
        F = null, I = k, oe = !1;
      }
    }
    var _e = !1, Ge = null, nt = -1, hn = 5, Yt = -1;
    function H() {
      return !(p.unstable_now() - Yt < hn);
    }
    function ne() {
      if (Ge !== null) {
        var K = p.unstable_now();
        Yt = K;
        var se = !0;
        try {
          se = Ge(!0, K);
        } finally {
          se ? he() : (_e = !1, Ge = null);
        }
      } else _e = !1;
    }
    var he;
    if (typeof vt == "function") he = function() {
      vt(ne);
    };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), ye = ue.port2;
      ue.port1.onmessage = ne, he = function() {
        ye.postMessage(null);
      };
    } else he = function() {
      Re(ne, 0);
    };
    function Se(K) {
      Ge = K, _e || (_e = !0, he());
    }
    function Ee(K, se) {
      nt = Re(function() {
        K(p.unstable_now());
      }, se);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, p.unstable_continueExecution = function() {
      X || oe || (X = !0, Se(yt));
    }, p.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : hn = 0 < K ? Math.floor(1e3 / K) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, p.unstable_getFirstCallbackNode = function() {
      return f(U);
    }, p.unstable_next = function(K) {
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
        return K();
      } finally {
        I = k;
      }
    }, p.unstable_pauseExecution = function() {
    }, p.unstable_requestPaint = function() {
    }, p.unstable_runWithPriority = function(K, se) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var k = I;
      I = K;
      try {
        return se();
      } finally {
        I = k;
      }
    }, p.unstable_scheduleCallback = function(K, se, k) {
      var G = p.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? G + k : G) : k = G, K) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return we = k + we, K = { id: M++, callback: se, priorityLevel: K, startTime: k, expirationTime: we, sortIndex: -1 }, k > G ? (K.sortIndex = k, c(j, K), f(U) === null && K === f(j) && (Z ? (ct(nt), nt = -1) : Z = !0, Ee(Ae, k - G))) : (K.sortIndex = we, c(U, K), X || oe || (X = !0, Se(yt))), K;
    }, p.unstable_shouldYield = H, p.unstable_wrapCallback = function(K) {
      var se = I;
      return function() {
        var k = I;
        I = se;
        try {
          return K.apply(this, arguments);
        } finally {
          I = k;
        }
      };
    };
  }(lE)), lE;
}
var oE = {}, xx;
function ND() {
  return xx || (xx = 1, function(p) {
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
      var f = !1, h = !1, S = 5;
      function x(xe, Qe) {
        var Et = xe.length;
        xe.push(Qe), U(xe, Qe, Et);
      }
      function C(xe) {
        return xe.length === 0 ? null : xe[0];
      }
      function g(xe) {
        if (xe.length === 0)
          return null;
        var Qe = xe[0], Et = xe.pop();
        return Et !== Qe && (xe[0] = Et, j(xe, Et, 0)), Qe;
      }
      function U(xe, Qe, Et) {
        for (var Bt = Et; Bt > 0; ) {
          var zt = Bt - 1 >>> 1, Nn = xe[zt];
          if (M(Nn, Qe) > 0)
            xe[zt] = Qe, xe[Bt] = Nn, Bt = zt;
          else
            return;
        }
      }
      function j(xe, Qe, Et) {
        for (var Bt = Et, zt = xe.length, Nn = zt >>> 1; Bt < Nn; ) {
          var yn = (Bt + 1) * 2 - 1, Rr = xe[yn], Wt = yn + 1, tr = xe[Wt];
          if (M(Rr, Qe) < 0)
            Wt < zt && M(tr, Rr) < 0 ? (xe[Bt] = tr, xe[Wt] = Qe, Bt = Wt) : (xe[Bt] = Rr, xe[yn] = Qe, Bt = yn);
          else if (Wt < zt && M(tr, Qe) < 0)
            xe[Bt] = tr, xe[Wt] = Qe, Bt = Wt;
          else
            return;
        }
      }
      function M(xe, Qe) {
        var Et = xe.sortIndex - Qe.sortIndex;
        return Et !== 0 ? Et : xe.id - Qe.id;
      }
      var F = 1, I = 2, oe = 3, X = 4, Z = 5;
      function Re(xe, Qe) {
      }
      var ct = typeof performance == "object" && typeof performance.now == "function";
      if (ct) {
        var vt = performance;
        p.unstable_now = function() {
          return vt.now();
        };
      } else {
        var Ve = Date, Ae = Ve.now();
        p.unstable_now = function() {
          return Ve.now() - Ae;
        };
      }
      var yt = 1073741823, _e = -1, Ge = 250, nt = 5e3, hn = 1e4, Yt = yt, H = [], ne = [], he = 1, ue = null, ye = oe, Se = !1, Ee = !1, K = !1, se = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function we(xe) {
        for (var Qe = C(ne); Qe !== null; ) {
          if (Qe.callback === null)
            g(ne);
          else if (Qe.startTime <= xe)
            g(ne), Qe.sortIndex = Qe.expirationTime, x(H, Qe);
          else
            return;
          Qe = C(ne);
        }
      }
      function Be(xe) {
        if (K = !1, we(xe), !Ee)
          if (C(H) !== null)
            Ee = !0, Nr($e);
          else {
            var Qe = C(ne);
            Qe !== null && vn(Be, Qe.startTime - xe);
          }
      }
      function $e(xe, Qe) {
        Ee = !1, K && (K = !1, ya()), Se = !0;
        var Et = ye;
        try {
          var Bt;
          if (!h) return ut(xe, Qe);
        } finally {
          ue = null, ye = Et, Se = !1;
        }
      }
      function ut(xe, Qe) {
        var Et = Qe;
        for (we(Et), ue = C(H); ue !== null && !f && !(ue.expirationTime > Et && (!xe || xr())); ) {
          var Bt = ue.callback;
          if (typeof Bt == "function") {
            ue.callback = null, ye = ue.priorityLevel;
            var zt = ue.expirationTime <= Et, Nn = Bt(zt);
            Et = p.unstable_now(), typeof Nn == "function" ? ue.callback = Nn : ue === C(H) && g(H), we(Et);
          } else
            g(H);
          ue = C(H);
        }
        if (ue !== null)
          return !0;
        var yn = C(ne);
        return yn !== null && vn(Be, yn.startTime - Et), !1;
      }
      function Ke(xe, Qe) {
        switch (xe) {
          case F:
          case I:
          case oe:
          case X:
          case Z:
            break;
          default:
            xe = oe;
        }
        var Et = ye;
        ye = xe;
        try {
          return Qe();
        } finally {
          ye = Et;
        }
      }
      function ft(xe) {
        var Qe;
        switch (ye) {
          case F:
          case I:
          case oe:
            Qe = oe;
            break;
          default:
            Qe = ye;
            break;
        }
        var Et = ye;
        ye = Qe;
        try {
          return xe();
        } finally {
          ye = Et;
        }
      }
      function lt(xe) {
        var Qe = ye;
        return function() {
          var Et = ye;
          ye = Qe;
          try {
            return xe.apply(this, arguments);
          } finally {
            ye = Et;
          }
        };
      }
      function bt(xe, Qe, Et) {
        var Bt = p.unstable_now(), zt;
        if (typeof Et == "object" && Et !== null) {
          var Nn = Et.delay;
          typeof Nn == "number" && Nn > 0 ? zt = Bt + Nn : zt = Bt;
        } else
          zt = Bt;
        var yn;
        switch (xe) {
          case F:
            yn = _e;
            break;
          case I:
            yn = Ge;
            break;
          case Z:
            yn = Yt;
            break;
          case X:
            yn = hn;
            break;
          case oe:
          default:
            yn = nt;
            break;
        }
        var Rr = zt + yn, Wt = {
          id: he++,
          callback: Qe,
          priorityLevel: xe,
          startTime: zt,
          expirationTime: Rr,
          sortIndex: -1
        };
        return zt > Bt ? (Wt.sortIndex = zt, x(ne, Wt), C(H) === null && Wt === C(ne) && (K ? ya() : K = !0, vn(Be, zt - Bt))) : (Wt.sortIndex = Rr, x(H, Wt), !Ee && !Se && (Ee = !0, Nr($e))), Wt;
      }
      function bn() {
      }
      function Wn() {
        !Ee && !Se && (Ee = !0, Nr($e));
      }
      function Yr() {
        return C(H);
      }
      function Cr(xe) {
        xe.callback = null;
      }
      function Rn() {
        return ye;
      }
      var ur = !1, qn = null, Hn = -1, Bn = S, Lr = -1;
      function xr() {
        var xe = p.unstable_now() - Lr;
        return !(xe < Bn);
      }
      function Qn() {
      }
      function ha(xe) {
        if (xe < 0 || xe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        xe > 0 ? Bn = Math.floor(1e3 / xe) : Bn = S;
      }
      var va = function() {
        if (qn !== null) {
          var xe = p.unstable_now();
          Lr = xe;
          var Qe = !0, Et = !0;
          try {
            Et = qn(Qe, xe);
          } finally {
            Et ? br() : (ur = !1, qn = null);
          }
        } else
          ur = !1;
      }, br;
      if (typeof G == "function")
        br = function() {
          G(va);
        };
      else if (typeof MessageChannel < "u") {
        var ma = new MessageChannel(), sr = ma.port2;
        ma.port1.onmessage = va, br = function() {
          sr.postMessage(null);
        };
      } else
        br = function() {
          se(va, 0);
        };
      function Nr(xe) {
        qn = xe, ur || (ur = !0, br());
      }
      function vn(xe, Qe) {
        Hn = se(function() {
          xe(p.unstable_now());
        }, Qe);
      }
      function ya() {
        k(Hn), Hn = -1;
      }
      var ga = Qn, Sa = null;
      p.unstable_IdlePriority = Z, p.unstable_ImmediatePriority = F, p.unstable_LowPriority = X, p.unstable_NormalPriority = oe, p.unstable_Profiling = Sa, p.unstable_UserBlockingPriority = I, p.unstable_cancelCallback = Cr, p.unstable_continueExecution = Wn, p.unstable_forceFrameRate = ha, p.unstable_getCurrentPriorityLevel = Rn, p.unstable_getFirstCallbackNode = Yr, p.unstable_next = ft, p.unstable_pauseExecution = bn, p.unstable_requestPaint = ga, p.unstable_runWithPriority = Ke, p.unstable_scheduleCallback = bt, p.unstable_shouldYield = xr, p.unstable_wrapCallback = lt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(oE)), oE;
}
var bx;
function Gx() {
  if (bx) return gy.exports;
  bx = 1;
  var p = {};
  return p.NODE_ENV === "production" ? gy.exports = LD() : gy.exports = ND(), gy.exports;
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
var Rx;
function MD() {
  if (Rx) return ti;
  Rx = 1;
  var p = er, c = Gx();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = /* @__PURE__ */ new Set(), S = {};
  function x(n, r) {
    C(n, r), C(n + "Capture", r);
  }
  function C(n, r) {
    for (S[n] = r, n = 0; n < r.length; n++) h.add(r[n]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, F = {};
  function I(n) {
    return U.call(F, n) ? !0 : U.call(M, n) ? !1 : j.test(n) ? F[n] = !0 : (M[n] = !0, !1);
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
  function X(n, r, l, u) {
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
  function Z(n, r, l, u, d, m, b) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = d, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = b;
  }
  var Re = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Re[n] = new Z(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Re[r] = new Z(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Re[n] = new Z(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Re[n] = new Z(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Re[n] = new Z(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Re[n] = new Z(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Re[n] = new Z(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Re[n] = new Z(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Re[n] = new Z(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ct = /[\-:]([a-z])/g;
  function vt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ct,
      vt
    );
    Re[r] = new Z(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ct, vt);
    Re[r] = new Z(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ct, vt);
    Re[r] = new Z(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Re[n] = new Z(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Re.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Re[n] = new Z(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ve(n, r, l, u) {
    var d = Re.hasOwnProperty(r) ? Re[r] : null;
    (d !== null ? d.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (X(r, l, d, u) && (l = null), u || d === null ? I(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : d.mustUseProperty ? n[d.propertyName] = l === null ? d.type === 3 ? !1 : "" : l : (r = d.attributeName, u = d.attributeNamespace, l === null ? n.removeAttribute(r) : (d = d.type, l = d === 3 || d === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Ae = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, yt = Symbol.for("react.element"), _e = Symbol.for("react.portal"), Ge = Symbol.for("react.fragment"), nt = Symbol.for("react.strict_mode"), hn = Symbol.for("react.profiler"), Yt = Symbol.for("react.provider"), H = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), ye = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function se(n) {
    return n === null || typeof n != "object" ? null : (n = K && n[K] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var k = Object.assign, G;
  function we(n) {
    if (G === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      G = r && r[1] || "";
    }
    return `
` + G + n;
  }
  var Be = !1;
  function $e(n, r) {
    if (!n || Be) return "";
    Be = !0;
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
        } catch (Q) {
          var u = Q;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (Q) {
          u = Q;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Q) {
          u = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && u && typeof Q.stack == "string") {
        for (var d = Q.stack.split(`
`), m = u.stack.split(`
`), b = d.length - 1, _ = m.length - 1; 1 <= b && 0 <= _ && d[b] !== m[_]; ) _--;
        for (; 1 <= b && 0 <= _; b--, _--) if (d[b] !== m[_]) {
          if (b !== 1 || _ !== 1)
            do
              if (b--, _--, 0 > _ || d[b] !== m[_]) {
                var L = `
` + d[b].replace(" at new ", " at ");
                return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
              }
            while (1 <= b && 0 <= _);
          break;
        }
      }
    } finally {
      Be = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? we(n) : "";
  }
  function ut(n) {
    switch (n.tag) {
      case 5:
        return we(n.type);
      case 16:
        return we("Lazy");
      case 13:
        return we("Suspense");
      case 19:
        return we("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = $e(n.type, !1), n;
      case 11:
        return n = $e(n.type.render, !1), n;
      case 1:
        return n = $e(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ke(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ge:
        return "Fragment";
      case _e:
        return "Portal";
      case hn:
        return "Profiler";
      case nt:
        return "StrictMode";
      case he:
        return "Suspense";
      case ue:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case H:
        return (n.displayName || "Context") + ".Consumer";
      case Yt:
        return (n._context.displayName || "Context") + ".Provider";
      case ne:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ye:
        return r = n.displayName || null, r !== null ? r : Ke(n.type) || "Memo";
      case Se:
        r = n._payload, n = n._init;
        try {
          return Ke(n(r));
        } catch {
        }
    }
    return null;
  }
  function ft(n) {
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
        return Ke(r);
      case 8:
        return r === nt ? "StrictMode" : "Mode";
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
  function lt(n) {
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
  function bt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function bn(n) {
    var r = bt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var d = l.get, m = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(b) {
        u = "" + b, m.call(this, b);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(b) {
        u = "" + b;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Wn(n) {
    n._valueTracker || (n._valueTracker = bn(n));
  }
  function Yr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = bt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Rn(n, r) {
    var l = r.checked;
    return k({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function ur(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = lt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function qn(n, r) {
    r = r.checked, r != null && Ve(n, "checked", r, !1);
  }
  function Hn(n, r) {
    qn(n, r);
    var l = lt(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Lr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Lr(n, r.type, lt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Bn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Lr(n, r, l) {
    (r !== "number" || Cr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var xr = Array.isArray;
  function Qn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var d = 0; d < l.length; d++) r["$" + l[d]] = !0;
      for (l = 0; l < n.length; l++) d = r.hasOwnProperty("$" + n[l].value), n[l].selected !== d && (n[l].selected = d), d && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + lt(l), r = null, d = 0; d < n.length; d++) {
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
        if (xr(l)) {
          if (1 < l.length) throw Error(f(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: lt(l) };
  }
  function br(n, r) {
    var l = lt(r.value), u = lt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function ma(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Nr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
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
  }, xe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Sa).forEach(function(n) {
    xe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Sa[r] = Sa[n];
    });
  });
  function Qe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Sa.hasOwnProperty(n) && Sa[n] ? ("" + r).trim() : r + "px";
  }
  function Et(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, d = Qe(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, d) : n[l] = d;
    }
  }
  var Bt = k({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function zt(n, r) {
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
  var Wt = null, tr = null, $t = null;
  function tn(n) {
    if (n = xi(n)) {
      if (typeof Wt != "function") throw Error(f(280));
      var r = n.stateNode;
      r && (r = Hc(r), Wt(n.stateNode, n.type, r));
    }
  }
  function ri(n) {
    tr ? $t ? $t.push(n) : $t = [n] : tr = n;
  }
  function Ma() {
    if (tr) {
      var n = tr, r = $t;
      if ($t = tr = null, tn(n), r) for (n = 0; n < r.length; n++) tn(r[n]);
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
      fo = !1, (tr !== null || $t !== null) && (co(), Ma());
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
  function $i(n, r, l, u, d, m, b, _, L) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, Q);
    } catch (fe) {
      this.onError(fe);
    }
  }
  var Wr = !1, qr = null, Ea = !1, Vi = null, D = { onError: function(n) {
    Wr = !0, qr = n;
  } };
  function ce(n, r, l, u, d, m, b, _, L) {
    Wr = !1, qr = null, $i.apply(D, arguments);
  }
  function be(n, r, l, u, d, m, b, _, L) {
    if (ce.apply(this, arguments), Wr) {
      if (Wr) {
        var Q = qr;
        Wr = !1, qr = null;
      } else throw Error(f(198));
      Ea || (Ea = !0, Vi = Q);
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
  function _t(n) {
    if (Te(n) !== n) throw Error(f(188));
  }
  function St(n) {
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
          if (m === l) return _t(d), n;
          if (m === u) return _t(d), r;
          m = m.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== u.return) l = d, u = m;
      else {
        for (var b = !1, _ = d.child; _; ) {
          if (_ === l) {
            b = !0, l = d, u = m;
            break;
          }
          if (_ === u) {
            b = !0, u = d, l = m;
            break;
          }
          _ = _.sibling;
        }
        if (!b) {
          for (_ = m.child; _; ) {
            if (_ === l) {
              b = !0, l = m, u = d;
              break;
            }
            if (_ === u) {
              b = !0, u = m, l = d;
              break;
            }
            _ = _.sibling;
          }
          if (!b) throw Error(f(189));
        }
      }
      if (l.alternate !== u) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? n : r;
  }
  function Xe(n) {
    return n = St(n), n !== null ? $n(n) : null;
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
  var nn = c.unstable_scheduleCallback, rn = c.unstable_cancelCallback, Tr = c.unstable_shouldYield, yi = c.unstable_requestPaint, an = c.unstable_now, Qr = c.unstable_getCurrentPriorityLevel, os = c.unstable_ImmediatePriority, gi = c.unstable_UserBlockingPriority, wt = c.unstable_NormalPriority, po = c.unstable_LowPriority, Ii = c.unstable_IdlePriority, bl = null, Gr = null;
  function us(n) {
    if (Gr && typeof Gr.onCommitFiberRoot == "function") try {
      Gr.onCommitFiberRoot(bl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Mr = Math.clz32 ? Math.clz32 : fs, ss = Math.log, cs = Math.LN2;
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
    var u = 0, d = n.suspendedLanes, m = n.pingedLanes, b = l & 268435455;
    if (b !== 0) {
      var _ = b & ~d;
      _ !== 0 ? u = Yi(_) : (m &= b, m !== 0 && (u = Yi(m)));
    } else b = l & ~d, b !== 0 ? u = Yi(b) : m !== 0 && (u = Yi(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & d) && (d = u & -u, m = r & -r, d >= m || d === 16 && (m & 4194240) !== 0)) return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - Mr(r), d = 1 << l, u |= n[l], r &= ~d;
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
  function Rl(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, d = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var b = 31 - Mr(m), _ = 1 << b, L = d[b];
      L === -1 ? (!(_ & l) || _ & u) && (d[b] = za(_, r)) : L <= r && (n.expiredLanes |= _), m &= ~_;
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
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Mr(r), n[r] = l;
  }
  function ds(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var d = 31 - Mr(l), m = 1 << d;
      r[d] = 0, u[d] = -1, n[d] = -1, l &= ~m;
    }
  }
  function ps(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Mr(l), d = 1 << u;
      d & r | n[u] & r && (n[u] |= r), l &= ~d;
    }
  }
  var kt = 0;
  function hs(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nu, kl, vs, Nt, ru, yo = !1, dt = [], li = null, gn = null, Kr = null, Ua = /* @__PURE__ */ new Map(), _l = /* @__PURE__ */ new Map(), sn = [], Sn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
  function cr(n, r, l, u, d, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: m, targetContainers: [d] }, r !== null && (r = xi(r), r !== null && kl(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function Xr(n, r, l, u, d) {
    switch (r) {
      case "focusin":
        return li = cr(li, n, r, l, u, d), !0;
      case "dragenter":
        return gn = cr(gn, n, r, l, u, d), !0;
      case "mouseover":
        return Kr = cr(Kr, n, r, l, u, d), !0;
      case "pointerover":
        var m = d.pointerId;
        return Ua.set(m, cr(Ua.get(m) || null, n, r, l, u, d)), !0;
      case "gotpointercapture":
        return m = d.pointerId, _l.set(m, cr(_l.get(m) || null, n, r, l, u, d)), !0;
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
    if (0 < dt.length) {
      Ol(dt[0], n);
      for (var l = 1; l < dt.length; l++) {
        var u = dt[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (li !== null && Ol(li, n), gn !== null && Ol(gn, n), Kr !== null && Ol(Kr, n), Ua.forEach(r), _l.forEach(r), l = 0; l < sn.length; l++) u = sn[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < sn.length && (l = sn[0], l.blockedOn === null); ) oi(l), l.blockedOn === null && sn.shift();
  }
  var Wi = Ae.ReactCurrentBatchConfig, iu = !0;
  function qi(n, r, l, u) {
    var d = kt, m = Wi.transition;
    Wi.transition = null;
    try {
      kt = 1, wi(n, r, l, u);
    } finally {
      kt = d, Wi.transition = m;
    }
  }
  function lu(n, r, l, u) {
    var d = kt, m = Wi.transition;
    Wi.transition = null;
    try {
      kt = 4, wi(n, r, l, u);
    } finally {
      kt = d, Wi.transition = m;
    }
  }
  function wi(n, r, l, u) {
    if (iu) {
      var d = ou(n, r, l, u);
      if (d === null) kd(n, r, u, Qi, l), ms(n, u);
      else if (Xr(d, n, r, l, u)) u.stopPropagation();
      else if (ms(n, u), r & 4 && -1 < Sn.indexOf(n)) {
        for (; d !== null; ) {
          var m = xi(d);
          if (m !== null && nu(m), m = ou(n, r, l, u), m === null && kd(n, r, u, Qi, l), m === d) break;
          d = m;
        }
        d !== null && u.stopPropagation();
      } else kd(n, r, u, null, l);
    }
  }
  var Qi = null;
  function ou(n, r, l, u) {
    if (Qi = null, n = Rr(u), n = nl(n), n !== null) if (r = Te(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = xt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Qi = n, null;
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
        switch (Qr()) {
          case os:
            return 1;
          case gi:
            return 4;
          case wt:
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
  var ui = null, uu = null, w = null;
  function O() {
    if (w) return w;
    var n, r = uu, l = r.length, u, d = "value" in ui ? ui.value : ui.textContent, m = d.length;
    for (n = 0; n < l && r[n] === d[n]; n++) ;
    var b = l - n;
    for (u = 1; u <= b && r[l - u] === d[m - u]; u++) ;
    return w = d.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Y(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function J() {
    return !0;
  }
  function ve() {
    return !1;
  }
  function Pe(n) {
    function r(l, u, d, m, b) {
      this._reactName = l, this._targetInst = d, this.type = u, this.nativeEvent = m, this.target = b, this.currentTarget = null;
      for (var _ in n) n.hasOwnProperty(_) && (l = n[_], this[_] = l ? l(m) : m[_]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? J : ve, this.isPropagationStopped = ve, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, ot = Pe(Le), Ct = k({}, Le, { view: 0, detail: 0 }), Vt = Pe(Ct), qt, Qt, Gt, cn = k({}, Ct, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Dc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Gt && (Gt && n.type === "mousemove" ? (qt = n.screenX - Gt.screenX, Qt = n.screenY - Gt.screenY) : Qt = qt = 0, Gt = n), qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Qt;
  } }), Mt = Pe(cn), Dl = k({}, cn, { dataTransfer: 0 }), su = Pe(Dl), gs = k({}, Ct, { relatedTarget: 0 }), Ss = Pe(gs), Gi = k({}, Le, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Es = Pe(Gi), ws = k({}, Le, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), vd = Pe(ws), zy = k({}, Le, { data: 0 }), _h = Pe(zy), Oh = {
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
  var Uy = k({}, Ct, { key: function(n) {
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
  } }), Ki = Pe(Uy), Fy = k({}, cn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lc = Pe(Fy), yd = k({}, Ct, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Dc }), gd = Pe(yd), jy = k({}, Le, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Nc = Pe(jy), Nh = k({}, cn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zr = Pe(Nh), Xi = [9, 13, 27, 32], Tn = g && "CompositionEvent" in window, wa = null;
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
    if (Ll) return n === "compositionend" || !Tn && Ah(n, r) ? (n = O(), w = uu = ui = null, Ll = !1, n) : null;
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
    ri(u), r = jc(r, "onChange"), 0 < r.length && (l = new ot("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var xs = null, bs = null;
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
    xs && (xs.detachEvent("onpropertychange", Hh), bs = xs = null);
  }
  function Hh(n) {
    if (n.propertyName === "value" && Zi(bs)) {
      var r = [];
      Uh(r, bs, n, Rr(n)), xl(Fh, r);
    }
  }
  function $y(n, r, l) {
    n === "focusin" ? (Ph(), xs = r, bs = l, xs.attachEvent("onpropertychange", Hh)) : n === "focusout" && Ph();
  }
  function Vy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zi(bs);
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
    for (var n = window, r = Cr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Cr(n.document);
    }
    return r;
  }
  function Rs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Eo(n) {
    var r = Yh(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Ih(l.ownerDocument.documentElement, l)) {
      if (u !== null && Rs(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = l.textContent.length, m = Math.min(u.start, d);
          u = u.end === void 0 ? m : Math.min(u.end, d), !n.extend && m > u && (d = u, u = m, m = d), d = Vh(l, m);
          var b = Vh(
            l,
            u
          );
          d && b && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== b.node || n.focusOffset !== b.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), n.removeAllRanges(), m > u ? (n.addRange(r), n.extend(b.node, b.offset)) : (r.setEnd(b.node, b.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ac = g && "documentMode" in document && 11 >= document.documentMode, wo = null, Nl = null, Ts = null, bd = !1;
  function Wh(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    bd || wo == null || wo !== Cr(u) || (u = wo, "selectionStart" in u && Rs(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Ts && fu(Ts, u) || (Ts = u, u = jc(Nl, "onSelect"), 0 < u.length && (r = new ot("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = wo)));
  }
  function zc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var du = { animationend: zc("Animation", "AnimationEnd"), animationiteration: zc("Animation", "AnimationIteration"), animationstart: zc("Animation", "AnimationStart"), transitionend: zc("Transition", "TransitionEnd") }, Uc = {}, qh = {};
  g && (qh = document.createElement("div").style, "AnimationEvent" in window || (delete du.animationend.animation, delete du.animationiteration.animation, delete du.animationstart.animation), "TransitionEvent" in window || delete du.transitionend.transition);
  function ks(n) {
    if (Uc[n]) return Uc[n];
    if (!du[n]) return n;
    var r = du[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in qh) return Uc[n] = r[l];
    return n;
  }
  var kr = ks("animationend"), Rd = ks("animationiteration"), Qh = ks("animationstart"), Gh = ks("transitionend"), Kh = /* @__PURE__ */ new Map(), Xh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ml(n, r) {
    Kh.set(n, r), x(r, [n]);
  }
  for (var Fc = 0; Fc < Xh.length; Fc++) {
    var _s = Xh[Fc], Os = _s.toLowerCase(), Wy = _s[0].toUpperCase() + _s.slice(1);
    Ml(Os, "on" + Wy);
  }
  Ml(kr, "onAnimationEnd"), Ml(Rd, "onAnimationIteration"), Ml(Qh, "onAnimationStart"), Ml("dblclick", "onDoubleClick"), Ml("focusin", "onFocus"), Ml("focusout", "onBlur"), Ml(Gh, "onTransitionEnd"), C("onMouseEnter", ["mouseout", "mouseover"]), C("onMouseLeave", ["mouseout", "mouseover"]), C("onPointerEnter", ["pointerout", "pointerover"]), C("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));
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
        if (r) for (var b = u.length - 1; 0 <= b; b--) {
          var _ = u[b], L = _.instance, Q = _.currentTarget;
          if (_ = _.listener, L !== m && d.isPropagationStopped()) break e;
          Zh(d, _, Q), m = L;
        }
        else for (b = 0; b < u.length; b++) {
          if (_ = u[b], L = _.instance, Q = _.currentTarget, _ = _.listener, L !== m && d.isPropagationStopped()) break e;
          Zh(d, _, Q), m = L;
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
      n[el] = !0, h.forEach(function(l) {
        l !== "selectionchange" && (qy.has(l) || Ds(l, !1, n), Ds(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[el] || (r[el] = !0, Ds("selectionchange", !1, r));
    }
  }
  function Td(n, r, l, u) {
    switch (ys(r)) {
      case 1:
        var d = qi;
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
      var b = u.tag;
      if (b === 3 || b === 4) {
        var _ = u.stateNode.containerInfo;
        if (_ === d || _.nodeType === 8 && _.parentNode === d) break;
        if (b === 4) for (b = u.return; b !== null; ) {
          var L = b.tag;
          if ((L === 3 || L === 4) && (L = b.stateNode.containerInfo, L === d || L.nodeType === 8 && L.parentNode === d)) return;
          b = b.return;
        }
        for (; _ !== null; ) {
          if (b = nl(_), b === null) return;
          if (L = b.tag, L === 5 || L === 6) {
            u = m = b;
            continue e;
          }
          _ = _.parentNode;
        }
      }
      u = u.return;
    }
    xl(function() {
      var Q = m, fe = Rr(l), de = [];
      e: {
        var le = Kh.get(n);
        if (le !== void 0) {
          var Oe = ot, Ue = n;
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
              Oe = Mt;
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
            case kr:
            case Rd:
            case Qh:
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
          var He = (r & 4) !== 0, jn = !He && n === "scroll", P = He ? le !== null ? le + "Capture" : null : le;
          He = [];
          for (var A = Q, V; A !== null; ) {
            V = A;
            var me = V.stateNode;
            if (V.tag === 5 && me !== null && (V = me, P !== null && (me = ai(A, P), me != null && He.push(pu(A, me, V)))), jn) break;
            A = A.return;
          }
          0 < He.length && (le = new Oe(le, Ue, null, l, fe), de.push({ event: le, listeners: He }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", Oe = n === "mouseout" || n === "pointerout", le && l !== yn && (Ue = l.relatedTarget || l.fromElement) && (nl(Ue) || Ue[ci])) break e;
          if ((Oe || le) && (le = fe.window === fe ? fe : (le = fe.ownerDocument) ? le.defaultView || le.parentWindow : window, Oe ? (Ue = l.relatedTarget || l.toElement, Oe = Q, Ue = Ue ? nl(Ue) : null, Ue !== null && (jn = Te(Ue), Ue !== jn || Ue.tag !== 5 && Ue.tag !== 6) && (Ue = null)) : (Oe = null, Ue = Q), Oe !== Ue)) {
            if (He = Mt, me = "onMouseLeave", P = "onMouseEnter", A = "mouse", (n === "pointerout" || n === "pointerover") && (He = Lc, me = "onPointerLeave", P = "onPointerEnter", A = "pointer"), jn = Oe == null ? le : hu(Oe), V = Ue == null ? le : hu(Ue), le = new He(me, A + "leave", Oe, l, fe), le.target = jn, le.relatedTarget = V, me = null, nl(fe) === Q && (He = new He(P, A + "enter", Ue, l, fe), He.target = V, He.relatedTarget = jn, me = He), jn = me, Oe && Ue) t: {
              for (He = Oe, P = Ue, A = 0, V = He; V; V = Co(V)) A++;
              for (V = 0, me = P; me; me = Co(me)) V++;
              for (; 0 < A - V; ) He = Co(He), A--;
              for (; 0 < V - A; ) P = Co(P), V--;
              for (; A--; ) {
                if (He === P || P !== null && He === P.alternate) break t;
                He = Co(He), P = Co(P);
              }
              He = null;
            }
            else He = null;
            Oe !== null && _d(de, le, Oe, He, !1), Ue !== null && jn !== null && _d(de, jn, Ue, He, !0);
          }
        }
        e: {
          if (le = Q ? hu(Q) : window, Oe = le.nodeName && le.nodeName.toLowerCase(), Oe === "select" || Oe === "input" && le.type === "file") var Ye = wd;
          else if (Ed(le)) if (Cd) Ye = Yy;
          else {
            Ye = Vy;
            var at = $y;
          }
          else (Oe = le.nodeName) && Oe.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ye = Iy);
          if (Ye && (Ye = Ye(n, Q))) {
            Uh(de, Ye, l, fe);
            break e;
          }
          at && at(n, le, Q), n === "focusout" && (at = le._wrapperState) && at.controlled && le.type === "number" && Lr(le, "number", le.value);
        }
        switch (at = Q ? hu(Q) : window, n) {
          case "focusin":
            (Ed(at) || at.contentEditable === "true") && (wo = at, Nl = Q, Ts = null);
            break;
          case "focusout":
            Ts = Nl = wo = null;
            break;
          case "mousedown":
            bd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bd = !1, Wh(de, l, fe);
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
        it && (Cs && l.locale !== "ko" && (Ll || it !== "onCompositionStart" ? it === "onCompositionEnd" && Ll && (Fe = O()) : (ui = fe, uu = "value" in ui ? ui.value : ui.textContent, Ll = !0)), at = jc(Q, it), 0 < at.length && (it = new _h(it, n, null, l, fe), de.push({ event: it, listeners: at }), Fe ? it.data = Fe : (Fe = zh(l), Fe !== null && (it.data = Fe)))), (Fe = Sd ? Py(n, l) : Hy(n, l)) && (Q = jc(Q, "onBeforeInput"), 0 < Q.length && (fe = new _h("onBeforeInput", "beforeinput", null, l, fe), de.push({ event: fe, listeners: Q }), fe.data = Fe));
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
    for (var m = r._reactName, b = []; l !== null && l !== u; ) {
      var _ = l, L = _.alternate, Q = _.stateNode;
      if (L !== null && L === u) break;
      _.tag === 5 && Q !== null && (_ = Q, d ? (L = ai(l, m), L != null && b.unshift(pu(l, L, _))) : d || (L = ai(l, m), L != null && b.push(pu(l, L, _)))), l = l.return;
    }
    b.length !== 0 && n.push({ event: r, listeners: b });
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
  var tl = Math.random().toString(36).slice(2), ja = "__reactFiber$" + tl, zs = "__reactProps$" + tl, ci = "__reactContainer$" + tl, zd = "__reactEvents$" + tl, Qy = "__reactListeners$" + tl, Gy = "__reactHandles$" + tl;
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
  var Ze = [], fi = -1;
  function Jt(n) {
    return { current: n };
  }
  function Ie(n) {
    0 > fi || (n.current = Ze[fi], Ze[fi] = null, fi--);
  }
  function Ut(n, r) {
    fi++, Ze[fi] = n.current, n.current = r;
  }
  var Pa = {}, nr = Jt(Pa), pt = Jt(!1), Ar = Pa;
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
    Ie(pt), Ie(nr);
  }
  function bi(n, r, l) {
    if (nr.current !== Pa) throw Error(f(168));
    Ut(nr, r), Ut(pt, l);
  }
  function Al(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var d in u) if (!(d in r)) throw Error(f(108, ft(n) || "Unknown", d));
    return k({}, l, u);
  }
  function bo(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Pa, Ar = nr.current, Ut(nr, n), Ut(pt, pt.current), !0;
  }
  function rv(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(f(169));
    l ? (n = Al(n, r, Ar), u.__reactInternalMemoizedMergedChildContext = n, Ie(pt), Ie(nr), Ut(nr, n)) : Ie(pt), Ut(pt, l);
  }
  var rl = null, zl = !1, fr = !1;
  function Bc(n) {
    rl === null ? rl = [n] : rl.push(n);
  }
  function av(n) {
    zl = !0, Bc(n);
  }
  function Ri() {
    if (!fr && rl !== null) {
      fr = !0;
      var n = 0, r = kt;
      try {
        var l = rl;
        for (kt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        rl = null, zl = !1;
      } catch (d) {
        throw rl !== null && (rl = rl.slice(n + 1)), nn(os, Ri), d;
      } finally {
        kt = r, fr = !1;
      }
    }
    return null;
  }
  var Ha = [], Ul = 0, Ba = null, Ro = 0, ea = [], ta = 0, di = null, na = 1, dr = "";
  function To(n, r) {
    Ha[Ul++] = Ro, Ha[Ul++] = Ba, Ba = n, Ro = r;
  }
  function Fl(n, r, l) {
    ea[ta++] = na, ea[ta++] = dr, ea[ta++] = di, di = n;
    var u = na;
    n = dr;
    var d = 32 - Mr(u) - 1;
    u &= ~(1 << d), l += 1;
    var m = 32 - Mr(r) + d;
    if (30 < m) {
      var b = d - d % 5;
      m = (u & (1 << b) - 1).toString(32), u >>= b, d -= b, na = 1 << 32 - Mr(r) + d | l << d | u, dr = m + n;
    } else na = 1 << m | l << d | u, dr = n;
  }
  function $c(n) {
    n.return !== null && (To(n, 1), Fl(n, 1, 0));
  }
  function Vc(n) {
    for (; n === Ba; ) Ba = Ha[--Ul], Ha[Ul] = null, Ro = Ha[--Ul], Ha[Ul] = null;
    for (; n === di; ) di = ea[--ta], ea[ta] = null, dr = ea[--ta], ea[ta] = null, na = ea[--ta], ea[ta] = null;
  }
  var ba = null, Ra = null, fn = !1, $a = null;
  function Ud(n, r) {
    var l = Ga(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Fd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ba = n, Ra = Ca(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ba = n, Ra = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = di !== null ? { id: na, overflow: dr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ga(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ba = n, Ra = null, !0) : !1;
      default:
        return !1;
    }
  }
  function jd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ic(n) {
    if (fn) {
      var r = Ra;
      if (r) {
        var l = r;
        if (!Fd(n, r)) {
          if (jd(n)) throw Error(f(418));
          r = Ca(l.nextSibling);
          var u = ba;
          r && Fd(n, r) ? Ud(u, l) : (n.flags = n.flags & -4097 | 2, fn = !1, ba = n);
        }
      } else {
        if (jd(n)) throw Error(f(418));
        n.flags = n.flags & -4097 | 2, fn = !1, ba = n;
      }
    }
  }
  function Pd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ba = n;
  }
  function Yc(n) {
    if (n !== ba) return !1;
    if (!fn) return Pd(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !xo(n.type, n.memoizedProps)), r && (r = Ra)) {
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
                Ra = Ca(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ra = null;
      }
    } else Ra = ba ? Ca(n.stateNode.nextSibling) : null;
    return !0;
  }
  function iv() {
    for (var n = Ra; n; ) n = Ca(n.nextSibling);
  }
  function vu() {
    Ra = ba = null, fn = !1;
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
    Ie(mu), n._currentValue = r;
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
  function ge(n) {
    var r = n._currentValue;
    if (Us !== n) if (n = { context: n, memoizedValue: r, next: null }, yu === null) {
      if (Ti === null) throw Error(f(308));
      yu = n, Ti.dependencies = { lanes: 0, firstContext: n };
    } else yu = yu.next = n;
    return r;
  }
  var _r = null;
  function Ta(n) {
    _r === null ? _r = [n] : _r.push(n);
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
  function ln(n, r) {
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
          var b = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          m === null ? d = m = b : m = m.next = b, l = l.next;
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
    var m = d.firstBaseUpdate, b = d.lastBaseUpdate, _ = d.shared.pending;
    if (_ !== null) {
      d.shared.pending = null;
      var L = _, Q = L.next;
      L.next = null, b === null ? m = Q : b.next = Q, b = L;
      var fe = n.alternate;
      fe !== null && (fe = fe.updateQueue, _ = fe.lastBaseUpdate, _ !== b && (_ === null ? fe.firstBaseUpdate = Q : _.next = Q, fe.lastBaseUpdate = L));
    }
    if (m !== null) {
      var de = d.baseState;
      b = 0, fe = Q = L = null, _ = m;
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
            var Ue = n, He = _;
            switch (le = r, Oe = l, He.tag) {
              case 1:
                if (Ue = He.payload, typeof Ue == "function") {
                  de = Ue.call(Oe, de, le);
                  break e;
                }
                de = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = He.payload, le = typeof Ue == "function" ? Ue.call(Oe, de, le) : Ue, le == null) break e;
                de = k({}, de, le);
                break e;
              case 2:
                Pl = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (n.flags |= 64, le = d.effects, le === null ? d.effects = [_] : le.push(_));
        } else Oe = { eventTime: Oe, lane: le, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, fe === null ? (Q = fe = Oe, L = de) : fe = fe.next = Oe, b |= le;
        if (_ = _.next, _ === null) {
          if (_ = d.shared.pending, _ === null) break;
          le = _, _ = le.next, le.next = null, d.lastBaseUpdate = le, d.shared.pending = null;
        }
      } while (!0);
      if (fe === null && (L = de), d.baseState = L, d.firstBaseUpdate = Q, d.lastBaseUpdate = fe, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          b |= d.lane, d = d.next;
        while (d !== r);
      } else m === null && (d.shared.lanes = 0);
      jo |= b, n.lanes = b, n.memoizedState = de;
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
  var qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Te(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = ir(), d = ul(n), m = ln(u, d);
    m.payload = r, l != null && (m.callback = l), r = Hl(n, m, d), r !== null && (wn(r, n, d, u), Wc(r, n, d));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = ir(), d = ul(n), m = ln(u, d);
    m.tag = 1, m.payload = r, l != null && (m.callback = l), r = Hl(n, m, d), r !== null && (wn(r, n, d, u), Wc(r, n, d));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = ir(), u = ul(n), d = ln(l, u);
    d.tag = 2, r != null && (d.callback = r), r = Hl(n, d, u), r !== null && (wn(r, n, u, l), Wc(r, n, u));
  } };
  function sv(n, r, l, u, d, m, b) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, b) : r.prototype && r.prototype.isPureReactComponent ? !fu(l, u) || !fu(d, m) : !0;
  }
  function cv(n, r, l) {
    var u = !1, d = Pa, m = r.contextType;
    return typeof m == "object" && m !== null ? m = ge(m) : (d = Vn(r) ? Ar : nr.current, u = r.contextTypes, m = (u = u != null) ? xa(n, d) : Pa), r = new r(l, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = qc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function fv(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && qc.enqueueReplaceState(r, r.state, null);
  }
  function Id(n, r, l, u) {
    var d = n.stateNode;
    d.props = l, d.state = n.memoizedState, d.refs = ko, $d(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? d.context = ge(m) : (m = Vn(r) ? Ar : nr.current, d.context = xa(n, m)), d.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Vd(n, r, m, l), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && qc.enqueueReplaceState(d, d.state, null), Fs(n, l, d, u), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
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
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(b) {
          var _ = d.refs;
          _ === ko && (_ = d.refs = {}), b === null ? delete _[m] : _[m] = b;
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
    function r(P, A) {
      if (n) {
        var V = P.deletions;
        V === null ? (P.deletions = [A], P.flags |= 16) : V.push(A);
      }
    }
    function l(P, A) {
      if (!n) return null;
      for (; A !== null; ) r(P, A), A = A.sibling;
      return null;
    }
    function u(P, A) {
      for (P = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? P.set(A.key, A) : P.set(A.index, A), A = A.sibling;
      return P;
    }
    function d(P, A) {
      return P = Ql(P, A), P.index = 0, P.sibling = null, P;
    }
    function m(P, A, V) {
      return P.index = V, n ? (V = P.alternate, V !== null ? (V = V.index, V < A ? (P.flags |= 2, A) : V) : (P.flags |= 2, A)) : (P.flags |= 1048576, A);
    }
    function b(P) {
      return n && P.alternate === null && (P.flags |= 2), P;
    }
    function _(P, A, V, me) {
      return A === null || A.tag !== 6 ? (A = Of(V, P.mode, me), A.return = P, A) : (A = d(A, V), A.return = P, A);
    }
    function L(P, A, V, me) {
      var Ye = V.type;
      return Ye === Ge ? fe(P, A, V.props.children, me, V.key) : A !== null && (A.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === Se && dv(Ye) === A.type) ? (me = d(A, V.props), me.ref = Su(P, A, V), me.return = P, me) : (me = kf(V.type, V.key, V.props, null, P.mode, me), me.ref = Su(P, A, V), me.return = P, me);
    }
    function Q(P, A, V, me) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== V.containerInfo || A.stateNode.implementation !== V.implementation ? (A = rc(V, P.mode, me), A.return = P, A) : (A = d(A, V.children || []), A.return = P, A);
    }
    function fe(P, A, V, me, Ye) {
      return A === null || A.tag !== 7 ? (A = $o(V, P.mode, me, Ye), A.return = P, A) : (A = d(A, V), A.return = P, A);
    }
    function de(P, A, V) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = Of("" + A, P.mode, V), A.return = P, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case yt:
            return V = kf(A.type, A.key, A.props, null, P.mode, V), V.ref = Su(P, null, A), V.return = P, V;
          case _e:
            return A = rc(A, P.mode, V), A.return = P, A;
          case Se:
            var me = A._init;
            return de(P, me(A._payload), V);
        }
        if (xr(A) || se(A)) return A = $o(A, P.mode, V, null), A.return = P, A;
        js(P, A);
      }
      return null;
    }
    function le(P, A, V, me) {
      var Ye = A !== null ? A.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number") return Ye !== null ? null : _(P, A, "" + V, me);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case yt:
            return V.key === Ye ? L(P, A, V, me) : null;
          case _e:
            return V.key === Ye ? Q(P, A, V, me) : null;
          case Se:
            return Ye = V._init, le(
              P,
              A,
              Ye(V._payload),
              me
            );
        }
        if (xr(V) || se(V)) return Ye !== null ? null : fe(P, A, V, me, null);
        js(P, V);
      }
      return null;
    }
    function Oe(P, A, V, me, Ye) {
      if (typeof me == "string" && me !== "" || typeof me == "number") return P = P.get(V) || null, _(A, P, "" + me, Ye);
      if (typeof me == "object" && me !== null) {
        switch (me.$$typeof) {
          case yt:
            return P = P.get(me.key === null ? V : me.key) || null, L(A, P, me, Ye);
          case _e:
            return P = P.get(me.key === null ? V : me.key) || null, Q(A, P, me, Ye);
          case Se:
            var at = me._init;
            return Oe(P, A, V, at(me._payload), Ye);
        }
        if (xr(me) || se(me)) return P = P.get(V) || null, fe(A, P, me, Ye, null);
        js(A, me);
      }
      return null;
    }
    function Ue(P, A, V, me) {
      for (var Ye = null, at = null, Fe = A, it = A = 0, Zn = null; Fe !== null && it < V.length; it++) {
        Fe.index > it ? (Zn = Fe, Fe = null) : Zn = Fe.sibling;
        var Ft = le(P, Fe, V[it], me);
        if (Ft === null) {
          Fe === null && (Fe = Zn);
          break;
        }
        n && Fe && Ft.alternate === null && r(P, Fe), A = m(Ft, A, it), at === null ? Ye = Ft : at.sibling = Ft, at = Ft, Fe = Zn;
      }
      if (it === V.length) return l(P, Fe), fn && To(P, it), Ye;
      if (Fe === null) {
        for (; it < V.length; it++) Fe = de(P, V[it], me), Fe !== null && (A = m(Fe, A, it), at === null ? Ye = Fe : at.sibling = Fe, at = Fe);
        return fn && To(P, it), Ye;
      }
      for (Fe = u(P, Fe); it < V.length; it++) Zn = Oe(Fe, P, it, V[it], me), Zn !== null && (n && Zn.alternate !== null && Fe.delete(Zn.key === null ? it : Zn.key), A = m(Zn, A, it), at === null ? Ye = Zn : at.sibling = Zn, at = Zn);
      return n && Fe.forEach(function(sl) {
        return r(P, sl);
      }), fn && To(P, it), Ye;
    }
    function He(P, A, V, me) {
      var Ye = se(V);
      if (typeof Ye != "function") throw Error(f(150));
      if (V = Ye.call(V), V == null) throw Error(f(151));
      for (var at = Ye = null, Fe = A, it = A = 0, Zn = null, Ft = V.next(); Fe !== null && !Ft.done; it++, Ft = V.next()) {
        Fe.index > it ? (Zn = Fe, Fe = null) : Zn = Fe.sibling;
        var sl = le(P, Fe, Ft.value, me);
        if (sl === null) {
          Fe === null && (Fe = Zn);
          break;
        }
        n && Fe && sl.alternate === null && r(P, Fe), A = m(sl, A, it), at === null ? Ye = sl : at.sibling = sl, at = sl, Fe = Zn;
      }
      if (Ft.done) return l(
        P,
        Fe
      ), fn && To(P, it), Ye;
      if (Fe === null) {
        for (; !Ft.done; it++, Ft = V.next()) Ft = de(P, Ft.value, me), Ft !== null && (A = m(Ft, A, it), at === null ? Ye = Ft : at.sibling = Ft, at = Ft);
        return fn && To(P, it), Ye;
      }
      for (Fe = u(P, Fe); !Ft.done; it++, Ft = V.next()) Ft = Oe(Fe, P, it, Ft.value, me), Ft !== null && (n && Ft.alternate !== null && Fe.delete(Ft.key === null ? it : Ft.key), A = m(Ft, A, it), at === null ? Ye = Ft : at.sibling = Ft, at = Ft);
      return n && Fe.forEach(function(vg) {
        return r(P, vg);
      }), fn && To(P, it), Ye;
    }
    function jn(P, A, V, me) {
      if (typeof V == "object" && V !== null && V.type === Ge && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case yt:
            e: {
              for (var Ye = V.key, at = A; at !== null; ) {
                if (at.key === Ye) {
                  if (Ye = V.type, Ye === Ge) {
                    if (at.tag === 7) {
                      l(P, at.sibling), A = d(at, V.props.children), A.return = P, P = A;
                      break e;
                    }
                  } else if (at.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === Se && dv(Ye) === at.type) {
                    l(P, at.sibling), A = d(at, V.props), A.ref = Su(P, at, V), A.return = P, P = A;
                    break e;
                  }
                  l(P, at);
                  break;
                } else r(P, at);
                at = at.sibling;
              }
              V.type === Ge ? (A = $o(V.props.children, P.mode, me, V.key), A.return = P, P = A) : (me = kf(V.type, V.key, V.props, null, P.mode, me), me.ref = Su(P, A, V), me.return = P, P = me);
            }
            return b(P);
          case _e:
            e: {
              for (at = V.key; A !== null; ) {
                if (A.key === at) if (A.tag === 4 && A.stateNode.containerInfo === V.containerInfo && A.stateNode.implementation === V.implementation) {
                  l(P, A.sibling), A = d(A, V.children || []), A.return = P, P = A;
                  break e;
                } else {
                  l(P, A);
                  break;
                }
                else r(P, A);
                A = A.sibling;
              }
              A = rc(V, P.mode, me), A.return = P, P = A;
            }
            return b(P);
          case Se:
            return at = V._init, jn(P, A, at(V._payload), me);
        }
        if (xr(V)) return Ue(P, A, V, me);
        if (se(V)) return He(P, A, V, me);
        js(P, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, A !== null && A.tag === 6 ? (l(P, A.sibling), A = d(A, V), A.return = P, P = A) : (l(P, A), A = Of(V, P.mode, me), A.return = P, P = A), b(P)) : l(P, A);
    }
    return jn;
  }
  var Eu = pv(!0), hv = pv(!1), Ps = {}, ki = Jt(Ps), wu = Jt(Ps), Hs = Jt(Ps);
  function Bl(n) {
    if (n === Ps) throw Error(f(174));
    return n;
  }
  function Yd(n, r) {
    switch (Ut(Hs, r), Ut(wu, n), Ut(ki, Ps), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Nr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Nr(r, n);
    }
    Ie(ki), Ut(ki, r);
  }
  function Cu() {
    Ie(ki), Ie(wu), Ie(Hs);
  }
  function Qc(n) {
    Bl(Hs.current);
    var r = Bl(ki.current), l = Nr(r, n.type);
    r !== l && (Ut(wu, n), Ut(ki, l));
  }
  function Je(n) {
    wu.current === n && (Ie(ki), Ie(wu));
  }
  var We = Jt(0);
  function At(n) {
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
  var Bs = Ae.ReactCurrentDispatcher, Wd = Ae.ReactCurrentBatchConfig, _o = 0, En = null, An = null, re = null, zn = !1, rt = !1, _i = 0, il = 0;
  function _n() {
    throw Error(f(321));
  }
  function Ia(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!si(n[l], r[l])) return !1;
    return !0;
  }
  function Oo(n, r, l, u, d, m) {
    if (_o = m, En = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Bs.current = n === null || n.memoizedState === null ? Xy : Zy, n = l(u, d), rt) {
      m = 0;
      do {
        if (rt = !1, _i = 0, 25 <= m) throw Error(f(301));
        m += 1, re = An = null, r.updateQueue = null, Bs.current = Jy, n = l(u, d);
      } while (rt);
    }
    if (Bs.current = sf, r = An !== null && An.next !== null, _o = 0, re = An = En = null, zn = !1, r) throw Error(f(300));
    return n;
  }
  function $l() {
    var n = _i !== 0;
    return _i = 0, n;
  }
  function aa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return re === null ? En.memoizedState = re = n : re = re.next = n, re;
  }
  function ia() {
    if (An === null) {
      var n = En.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = An.next;
    var r = re === null ? En.memoizedState : re.next;
    if (r !== null) re = r, An = n;
    else {
      if (n === null) throw Error(f(310));
      An = n, n = { memoizedState: An.memoizedState, baseState: An.baseState, baseQueue: An.baseQueue, queue: An.queue, next: null }, re === null ? En.memoizedState = re = n : re = re.next = n;
    }
    return re;
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
        var b = d.next;
        d.next = m.next, m.next = b;
      }
      u.baseQueue = d = m, l.pending = null;
    }
    if (d !== null) {
      m = d.next, u = u.baseState;
      var _ = b = null, L = null, Q = m;
      do {
        var fe = Q.lane;
        if ((_o & fe) === fe) L !== null && (L = L.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), u = Q.hasEagerState ? Q.eagerState : n(u, Q.action);
        else {
          var de = {
            lane: fe,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          L === null ? (_ = L = de, b = u) : L = L.next = de, En.lanes |= fe, jo |= fe;
        }
        Q = Q.next;
      } while (Q !== null && Q !== m);
      L === null ? b = u : L.next = _, si(u, r.memoizedState) || (la = !0), r.memoizedState = u, r.baseState = b, r.baseQueue = L, l.lastRenderedState = u;
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
      var b = d = d.next;
      do
        m = n(m, b.action), b = b.next;
      while (b !== d);
      si(m, r.memoizedState) || (la = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), l.lastRenderedState = m;
    }
    return [m, u];
  }
  function Gc() {
  }
  function Kc(n, r) {
    var l = En, u = ia(), d = r(), m = !si(u.memoizedState, d);
    if (m && (u.memoizedState = d, la = !0), u = u.queue, Is(Jc.bind(null, l, u, n), [n]), u.getSnapshot !== r || m || re !== null && re.memoizedState.tag & 1) {
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
      var b = An.memoizedState;
      if (m = b.destroy, u !== null && Ia(u, b.deps)) {
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
  function qd(n, r, l) {
    return l = l != null ? l.concat([n]) : null, No(4, 4, of.bind(null, r, n), l);
  }
  function Ao() {
  }
  function Qd(n, r) {
    var l = ia();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ia(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function bu(n, r) {
    var l = ia();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ia(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Vl(n, r, l) {
    return _o & 21 ? (si(l, r) || (l = vo(), En.lanes |= l, jo |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, la = !0), n.memoizedState = l);
  }
  function ka(n, r) {
    var l = kt;
    kt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Wd.transition;
    Wd.transition = {};
    try {
      n(!1), r();
    } finally {
      kt = l, Wd.transition = u;
    }
  }
  function vv() {
    return ia().memoizedState;
  }
  function on(n, r, l) {
    var u = ul(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Ys(n)) Ru(r, l);
    else if (l = lv(n, r, l, u), l !== null) {
      var d = ir();
      wn(l, n, u, d), Ws(l, r, u);
    }
  }
  function uf(n, r, l) {
    var u = ul(n), d = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Ys(n)) Ru(r, d);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var b = r.lastRenderedState, _ = m(b, l);
        if (d.hasEagerState = !0, d.eagerState = _, si(_, b)) {
          var L = r.interleaved;
          L === null ? (d.next = d, Ta(r)) : (d.next = L.next, L.next = d), r.interleaved = d;
          return;
        }
      } catch {
      } finally {
      }
      l = lv(n, r, d, u), l !== null && (d = ir(), wn(l, n, u, d), Ws(l, r, u));
    }
  }
  function Ys(n) {
    var r = n.alternate;
    return n === En || r !== null && r === En;
  }
  function Ru(n, r) {
    rt = zn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ws(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ps(n, l);
    }
  }
  var sf = { readContext: ge, useCallback: _n, useContext: _n, useEffect: _n, useImperativeHandle: _n, useInsertionEffect: _n, useLayoutEffect: _n, useMemo: _n, useReducer: _n, useRef: _n, useState: _n, useDebugValue: _n, useDeferredValue: _n, useTransition: _n, useMutableSource: _n, useSyncExternalStore: _n, useId: _n, unstable_isNewReconciler: !1 }, Xy = { readContext: ge, useCallback: function(n, r) {
    return aa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ge, useEffect: Mo, useImperativeHandle: function(n, r, l) {
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
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = on.bind(null, En, n), [u.memoizedState, n];
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
    if (fn) {
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
    if (fn) {
      var l = dr, u = na;
      l = (u & ~(1 << 32 - Mr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = _i++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = il++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Zy = {
    readContext: ge,
    useCallback: Qd,
    useContext: ge,
    useEffect: Is,
    useImperativeHandle: qd,
    useInsertionEffect: af,
    useLayoutEffect: lf,
    useMemo: bu,
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
  }, Jy = { readContext: ge, useCallback: Qd, useContext: ge, useEffect: Is, useImperativeHandle: qd, useInsertionEffect: af, useLayoutEffect: lf, useMemo: bu, useReducer: Vs, useRef: rf, useState: function() {
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
        l += ut(u), u = u.return;
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
  function qs(n, r) {
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
    l = ln(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      wf || (wf = !0, ap = u), qs(n, r);
    }, l;
  }
  function gv(n, r, l) {
    l = ln(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = r.value;
      l.payload = function() {
        return u(d);
      }, l.callback = function() {
        qs(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      qs(n, r), typeof u != "function" && (qa === null ? qa = /* @__PURE__ */ new Set([this]) : qa.add(this));
      var b = r.stack;
      this.componentDidCatch(r.value, { componentStack: b !== null ? b : "" });
    }), l;
  }
  function Qs(n, r, l) {
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
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = d, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ln(-1, 1), r.tag = 2, Hl(l, r, 1))), l.lanes |= 1), n);
  }
  var Ev = Ae.ReactCurrentOwner, la = !1;
  function Un(n, r, l, u) {
    r.child = n === null ? hv(r, null, l, u) : Eu(r, n.child, l, u);
  }
  function Tu(n, r, l, u, d) {
    l = l.render;
    var m = r.ref;
    return Mn(r, d), u = Oo(n, r, l, u, m, d), l = $l(), n !== null && !la ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Fn(n, r, d)) : (fn && l && $c(r), r.flags |= 1, Un(n, r, u, d), r.child);
  }
  function Yl(n, r, l, u, d) {
    if (n === null) {
      var m = l.type;
      return typeof m == "function" && !sp(m) && m.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = m, cf(n, r, m, u, d)) : (n = kf(l.type, null, u, r, r.mode, d), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & d)) {
      var b = m.memoizedProps;
      if (l = l.compare, l = l !== null ? l : fu, l(b, u) && n.ref === r.ref) return Fn(n, r, d);
    }
    return r.flags |= 1, n = Ql(m, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function cf(n, r, l, u, d) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (fu(m, u) && n.ref === r.ref) if (la = !1, r.pendingProps = u = m, (n.lanes & d) !== 0) n.flags & 131072 && (la = !0);
      else return r.lanes = n.lanes, Fn(n, r, d);
    }
    return gt(n, r, l, u, d);
  }
  function oa(n, r, l) {
    var u = r.pendingProps, d = u.children, m = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ut(Uu, ua), ua |= l;
    else {
      if (!(l & 1073741824)) return n = m !== null ? m.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ut(Uu, ua), ua |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : l, Ut(Uu, ua), ua |= u;
    }
    else m !== null ? (u = m.baseLanes | l, r.memoizedState = null) : u = l, Ut(Uu, ua), ua |= u;
    return Un(n, r, d, l), r.child;
  }
  function zo(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function gt(n, r, l, u, d) {
    var m = Vn(l) ? Ar : nr.current;
    return m = xa(r, m), Mn(r, d), l = Oo(n, r, l, u, m, d), u = $l(), n !== null && !la ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Fn(n, r, d)) : (fn && u && $c(r), r.flags |= 1, Un(n, r, l, d), r.child);
  }
  function Gs(n, r, l, u, d) {
    if (Vn(l)) {
      var m = !0;
      bo(r);
    } else m = !1;
    if (Mn(r, d), r.stateNode === null) Xs(n, r), cv(r, l, u), Id(r, l, u, d), u = !0;
    else if (n === null) {
      var b = r.stateNode, _ = r.memoizedProps;
      b.props = _;
      var L = b.context, Q = l.contextType;
      typeof Q == "object" && Q !== null ? Q = ge(Q) : (Q = Vn(l) ? Ar : nr.current, Q = xa(r, Q));
      var fe = l.getDerivedStateFromProps, de = typeof fe == "function" || typeof b.getSnapshotBeforeUpdate == "function";
      de || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (_ !== u || L !== Q) && fv(r, b, u, Q), Pl = !1;
      var le = r.memoizedState;
      b.state = le, Fs(r, u, b, d), L = r.memoizedState, _ !== u || le !== L || pt.current || Pl ? (typeof fe == "function" && (Vd(r, l, fe, u), L = r.memoizedState), (_ = Pl || sv(r, l, _, u, le, L, Q)) ? (de || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), b.props = u, b.state = L, b.context = Q, u = _) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      b = r.stateNode, ov(n, r), _ = r.memoizedProps, Q = r.type === r.elementType ? _ : ra(r.type, _), b.props = Q, de = r.pendingProps, le = b.context, L = l.contextType, typeof L == "object" && L !== null ? L = ge(L) : (L = Vn(l) ? Ar : nr.current, L = xa(r, L));
      var Oe = l.getDerivedStateFromProps;
      (fe = typeof Oe == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (_ !== de || le !== L) && fv(r, b, u, L), Pl = !1, le = r.memoizedState, b.state = le, Fs(r, u, b, d);
      var Ue = r.memoizedState;
      _ !== de || le !== Ue || pt.current || Pl ? (typeof Oe == "function" && (Vd(r, l, Oe, u), Ue = r.memoizedState), (Q = Pl || sv(r, l, Q, u, le, Ue, L) || !1) ? (fe || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(u, Ue, L), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(u, Ue, L)), typeof b.componentDidUpdate == "function" && (r.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || _ === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ue), b.props = u, b.state = Ue, b.context = L, u = Q) : (typeof b.componentDidUpdate != "function" || _ === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return ff(n, r, l, u, m, d);
  }
  function ff(n, r, l, u, d, m) {
    zo(n, r);
    var b = (r.flags & 128) !== 0;
    if (!u && !b) return d && rv(r, l, !1), Fn(n, r, m);
    u = r.stateNode, Ev.current = r;
    var _ = b && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && b ? (r.child = Eu(r, n.child, null, m), r.child = Eu(r, null, _, m)) : Un(n, r, _, m), r.memoizedState = u.state, d && rv(r, l, !0), r.child;
  }
  function eg(n) {
    var r = n.stateNode;
    r.pendingContext ? bi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && bi(n, r.context, !1), Yd(n, r.containerInfo);
  }
  function wv(n, r, l, u, d) {
    return vu(), In(d), r.flags |= 256, Un(n, r, l, u), r.child;
  }
  var Ks = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Uo(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Cv(n, r, l) {
    var u = r.pendingProps, d = We.current, m = !1, b = (r.flags & 128) !== 0, _;
    if ((_ = b) || (_ = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), _ ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), Ut(We, d & 1), n === null)
      return Ic(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (b = u.children, n = u.fallback, m ? (u = r.mode, m = r.child, b = { mode: "hidden", children: b }, !(u & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = b) : m = _f(b, u, 0, null), n = $o(n, u, l, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = Uo(l), r.memoizedState = Ks, n) : df(r, b));
    if (d = n.memoizedState, d !== null && (_ = d.dehydrated, _ !== null)) return Xd(n, r, b, u, _, d, l);
    if (m) {
      m = u.fallback, b = r.mode, d = n.child, _ = d.sibling;
      var L = { mode: "hidden", children: u.children };
      return !(b & 1) && r.child !== d ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = Ql(d, L), u.subtreeFlags = d.subtreeFlags & 14680064), _ !== null ? m = Ql(_, m) : (m = $o(m, b, l, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, b = n.child.memoizedState, b = b === null ? Uo(l) : { baseLanes: b.baseLanes | l, cachePool: null, transitions: b.transitions }, m.memoizedState = b, m.childLanes = n.childLanes & ~l, r.memoizedState = Ks, u;
    }
    return m = n.child, n = m.sibling, u = Ql(m, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function df(n, r) {
    return r = _f({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function pf(n, r, l, u) {
    return u !== null && In(u), Eu(r, n.child, null, l), n = df(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Xd(n, r, l, u, d, m, b) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = Gd(Error(f(422))), pf(n, r, b, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, d = r.mode, u = _f({ mode: "visible", children: u.children }, d, 0, null), m = $o(m, d, b, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, r.mode & 1 && Eu(r, n.child, null, b), r.child.memoizedState = Uo(b), r.memoizedState = Ks, m);
    if (!(r.mode & 1)) return pf(n, r, b, null);
    if (d.data === "$!") {
      if (u = d.nextSibling && d.nextSibling.dataset, u) var _ = u.dgst;
      return u = _, m = Error(f(419)), u = Gd(m, u, void 0), pf(n, r, b, u);
    }
    if (_ = (b & n.childLanes) !== 0, la || _) {
      if (u = Dn, u !== null) {
        switch (b & -b) {
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
        d = d & (u.suspendedLanes | b) ? 0 : d, d !== 0 && d !== m.retryLane && (m.retryLane = d, al(n, d), wn(u, n, d, -1));
      }
      return nc(), u = Gd(Error(f(421))), pf(n, r, b, u);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = n.child, r = up.bind(null, n), d._reactRetry = r, null) : (n = m.treeContext, Ra = Ca(d.nextSibling), ba = r, fn = !0, $a = null, n !== null && (ea[ta++] = na, ea[ta++] = dr, ea[ta++] = di, na = n.id, dr = n.overflow, di = r), r = df(r, u.children), r.flags |= 4096, r);
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
    if (Ut(We, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (d) {
      case "forwards":
        for (l = r.child, d = null; l !== null; ) n = l.alternate, n !== null && At(n) === null && (d = l), l = l.sibling;
        l = d, l === null ? (d = r.child, r.child = null) : (d = l.sibling, l.sibling = null), hf(r, !1, d, l, m);
        break;
      case "backwards":
        for (l = null, d = r.child, r.child = null; d !== null; ) {
          if (n = d.alternate, n !== null && At(n) === null) {
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
      for (n = r.child, l = Ql(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ql(n, n.pendingProps), l.return = r;
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
        Qc(r);
        break;
      case 1:
        Vn(r.type) && bo(r);
        break;
      case 4:
        Yd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, d = r.memoizedProps.value;
        Ut(mu, u._currentValue), u._currentValue = d;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Ut(We, We.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Cv(n, r, l) : (Ut(We, We.current & 1), n = Fn(n, r, l), n !== null ? n.sibling : null);
        Ut(We, We.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u) return Zd(n, r, l);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Ut(We, We.current), u) break;
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
          d = Rn(n, d), u = Rn(n, u), m = [];
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
      zt(l, u);
      var b;
      l = null;
      for (Q in d) if (!u.hasOwnProperty(Q) && d.hasOwnProperty(Q) && d[Q] != null) if (Q === "style") {
        var _ = d[Q];
        for (b in _) _.hasOwnProperty(b) && (l || (l = {}), l[b] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (S.hasOwnProperty(Q) ? m || (m = []) : (m = m || []).push(Q, null));
      for (Q in u) {
        var L = u[Q];
        if (_ = d != null ? d[Q] : void 0, u.hasOwnProperty(Q) && L !== _ && (L != null || _ != null)) if (Q === "style") if (_) {
          for (b in _) !_.hasOwnProperty(b) || L && L.hasOwnProperty(b) || (l || (l = {}), l[b] = "");
          for (b in L) L.hasOwnProperty(b) && _[b] !== L[b] && (l || (l = {}), l[b] = L[b]);
        } else l || (m || (m = []), m.push(
          Q,
          l
        )), l = L;
        else Q === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, _ = _ ? _.__html : void 0, L != null && _ !== L && (m = m || []).push(Q, L)) : Q === "children" ? typeof L != "string" && typeof L != "number" || (m = m || []).push(Q, "" + L) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (S.hasOwnProperty(Q) ? (L != null && Q === "onScroll" && Zt("scroll", n), m || _ === L || (m = [])) : (m = m || []).push(Q, L));
      }
      l && (m = m || []).push("style", l);
      var Q = m;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, Ya = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function On(n, r) {
    if (!fn) switch (n.tailMode) {
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
  function Or(n) {
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
        return Or(r), null;
      case 1:
        return Vn(r.type) && Jr(), Or(r), null;
      case 3:
        return u = r.stateNode, Cu(), Ie(pt), Ie(nr), Va(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Yc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, $a !== null && (ip($a), $a = null))), ku(n, r), Or(r), null;
      case 5:
        Je(r);
        var d = Bl(Hs.current);
        if (l = r.type, n !== null && r.stateNode != null) _u(n, r, l, u, d), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(f(166));
            return Or(r), null;
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
                ur(u, m), Zt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, Zt("invalid", u);
                break;
              case "textarea":
                va(u, m), Zt("invalid", u);
            }
            zt(l, m), d = null;
            for (var b in m) if (m.hasOwnProperty(b)) {
              var _ = m[b];
              b === "children" ? typeof _ == "string" ? u.textContent !== _ && (m.suppressHydrationWarning !== !0 && Ls(u.textContent, _, n), d = ["children", _]) : typeof _ == "number" && u.textContent !== "" + _ && (m.suppressHydrationWarning !== !0 && Ls(
                u.textContent,
                _,
                n
              ), d = ["children", "" + _]) : S.hasOwnProperty(b) && _ != null && b === "onScroll" && Zt("scroll", u);
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
            b = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = b.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = b.createElement(l, { is: u.is }) : (n = b.createElement(l), l === "select" && (b = n, u.multiple ? b.multiple = !0 : u.size && (b.size = u.size))) : n = b.createElementNS(n, l), n[ja] = r, n[zs] = u, Oi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (b = Nn(l, u), l) {
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
                  ur(n, u), d = Rn(n, u), Zt("invalid", n);
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
              zt(l, d), _ = d;
              for (m in _) if (_.hasOwnProperty(m)) {
                var L = _[m];
                m === "style" ? Et(n, L) : m === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && ya(n, L)) : m === "children" ? typeof L == "string" ? (l !== "textarea" || L !== "") && ga(n, L) : typeof L == "number" && ga(n, "" + L) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (S.hasOwnProperty(m) ? L != null && m === "onScroll" && Zt("scroll", n) : L != null && Ve(n, m, L, b));
              }
              switch (l) {
                case "input":
                  Wn(n), Bn(n, u, !1);
                  break;
                case "textarea":
                  Wn(n), ma(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + lt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, m = u.value, m != null ? Qn(n, !!u.multiple, m, !1) : u.defaultValue != null && Qn(
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
        return Or(r), null;
      case 6:
        if (n && r.stateNode != null) Ya(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(f(166));
          if (l = Bl(Hs.current), Bl(ki.current), Yc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[ja] = r, (m = u.nodeValue !== l) && (n = ba, n !== null)) switch (n.tag) {
              case 3:
                Ls(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ls(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[ja] = r, r.stateNode = u;
        }
        return Or(r), null;
      case 13:
        if (Ie(We), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && Ra !== null && r.mode & 1 && !(r.flags & 128)) iv(), vu(), r.flags |= 98560, m = !1;
          else if (m = Yc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(f(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(f(317));
              m[ja] = r;
            } else vu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Or(r), m = !1;
          } else $a !== null && (ip($a), $a = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || We.current & 1 ? Kn === 0 && (Kn = 3) : nc())), r.updateQueue !== null && (r.flags |= 4), Or(r), null);
      case 4:
        return Cu(), ku(n, r), n === null && Ci(r.stateNode.containerInfo), Or(r), null;
      case 10:
        return Bd(r.type._context), Or(r), null;
      case 17:
        return Vn(r.type) && Jr(), Or(r), null;
      case 19:
        if (Ie(We), m = r.memoizedState, m === null) return Or(r), null;
        if (u = (r.flags & 128) !== 0, b = m.rendering, b === null) if (u) On(m, !1);
        else {
          if (Kn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (b = At(n), b !== null) {
              for (r.flags |= 128, On(m, !1), u = b.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) m = l, n = u, m.flags &= 14680066, b = m.alternate, b === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = b.childLanes, m.lanes = b.lanes, m.child = b.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = b.memoizedProps, m.memoizedState = b.memoizedState, m.updateQueue = b.updateQueue, m.type = b.type, n = b.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ut(We, We.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && an() > ju && (r.flags |= 128, u = !0, On(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = At(b), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), On(m, !0), m.tail === null && m.tailMode === "hidden" && !b.alternate && !fn) return Or(r), null;
          } else 2 * an() - m.renderingStartTime > ju && l !== 1073741824 && (r.flags |= 128, u = !0, On(m, !1), r.lanes = 4194304);
          m.isBackwards ? (b.sibling = r.child, r.child = b) : (l = m.last, l !== null ? l.sibling = b : r.child = b, m.last = b);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = an(), r.sibling = null, l = We.current, Ut(We, u ? l & 1 | 2 : l & 1), r) : (Or(r), null);
      case 22:
      case 23:
        return Rf(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ua & 1073741824 && (Or(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Or(r), null;
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
        return Cu(), Ie(pt), Ie(nr), Va(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Je(r), null;
      case 13:
        if (Ie(We), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(f(340));
          vu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ie(We), null;
      case 4:
        return Cu(), null;
      case 10:
        return Bd(r.type._context), null;
      case 22:
      case 23:
        return Rf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ou = !1, pr = !1, vf = typeof WeakSet == "function" ? WeakSet : Set, ze = null;
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
    if (Dd = iu, n = Yh(), Rs(n)) {
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
          var b = 0, _ = -1, L = -1, Q = 0, fe = 0, de = n, le = null;
          t: for (; ; ) {
            for (var Oe; de !== l || d !== 0 && de.nodeType !== 3 || (_ = b + d), de !== m || u !== 0 && de.nodeType !== 3 || (L = b + u), de.nodeType === 3 && (b += de.nodeValue.length), (Oe = de.firstChild) !== null; )
              le = de, de = Oe;
            for (; ; ) {
              if (de === n) break t;
              if (le === l && ++Q === d && (_ = b), le === m && ++fe === u && (L = b), (Oe = de.nextSibling) !== null) break;
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
              var He = Ue.memoizedProps, jn = Ue.memoizedState, P = r.stateNode, A = P.getSnapshotBeforeUpdate(r.elementType === r.type ? He : ra(r.type, He), jn);
              P.__reactInternalSnapshotBeforeUpdate = A;
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
      } catch (me) {
        Ln(r, r.return, me);
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
  function bv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, bv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ja], delete r[zs], delete r[zd], delete r[Qy], delete r[Gy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function ep(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Rv(n) {
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
  var mn = null, rr = !1;
  function zr(n, r, l) {
    for (l = l.child; l !== null; ) Mu(n, r, l), l = l.sibling;
  }
  function Mu(n, r, l) {
    if (Gr && typeof Gr.onCommitFiberUnmount == "function") try {
      Gr.onCommitFiberUnmount(bl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        pr || Du(l, r);
      case 6:
        var u = mn, d = rr;
        mn = null, zr(n, r, l), mn = u, rr = d, mn !== null && (rr ? (n = mn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : mn.removeChild(l.stateNode));
        break;
      case 18:
        mn !== null && (rr ? (n = mn, l = l.stateNode, n.nodeType === 8 ? Ad(n.parentNode, l) : n.nodeType === 1 && Ad(n, l), Fa(n)) : Ad(mn, l.stateNode));
        break;
      case 4:
        u = mn, d = rr, mn = l.stateNode.containerInfo, rr = !0, zr(n, r, l), mn = u, rr = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!pr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          d = u = u.next;
          do {
            var m = d, b = m.destroy;
            m = m.tag, b !== void 0 && (m & 2 || m & 4) && Jd(l, r, b), d = d.next;
          } while (d !== u);
        }
        zr(n, r, l);
        break;
      case 1:
        if (!pr && (Du(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (_) {
          Ln(l, r, _);
        }
        zr(n, r, l);
        break;
      case 21:
        zr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (pr = (u = pr) || l.memoizedState !== null, zr(n, r, l), pr = u) : zr(n, r, l);
        break;
      default:
        zr(n, r, l);
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
  function ar(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var d = l[u];
      try {
        var m = n, b = r, _ = b;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 5:
              mn = _.stateNode, rr = !1;
              break e;
            case 3:
              mn = _.stateNode.containerInfo, rr = !0;
              break e;
            case 4:
              mn = _.stateNode.containerInfo, rr = !0;
              break e;
          }
          _ = _.return;
        }
        if (mn === null) throw Error(f(160));
        Mu(m, b, d), mn = null, rr = !1;
        var L = d.alternate;
        L !== null && (L.return = null), d.return = null;
      } catch (Q) {
        Ln(d, r, Q);
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
        if (ar(r, n), Di(n), u & 4) {
          try {
            Lu(3, n, n.return), yf(3, n);
          } catch (He) {
            Ln(n, n.return, He);
          }
          try {
            Lu(5, n, n.return);
          } catch (He) {
            Ln(n, n.return, He);
          }
        }
        break;
      case 1:
        ar(r, n), Di(n), u & 512 && l !== null && Du(l, l.return);
        break;
      case 5:
        if (ar(r, n), Di(n), u & 512 && l !== null && Du(l, l.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            ga(d, "");
          } catch (He) {
            Ln(n, n.return, He);
          }
        }
        if (u & 4 && (d = n.stateNode, d != null)) {
          var m = n.memoizedProps, b = l !== null ? l.memoizedProps : m, _ = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null) try {
            _ === "input" && m.type === "radio" && m.name != null && qn(d, m), Nn(_, b);
            var Q = Nn(_, m);
            for (b = 0; b < L.length; b += 2) {
              var fe = L[b], de = L[b + 1];
              fe === "style" ? Et(d, de) : fe === "dangerouslySetInnerHTML" ? ya(d, de) : fe === "children" ? ga(d, de) : Ve(d, fe, de, Q);
            }
            switch (_) {
              case "input":
                Hn(d, m);
                break;
              case "textarea":
                br(d, m);
                break;
              case "select":
                var le = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!m.multiple;
                var Oe = m.value;
                Oe != null ? Qn(d, !!m.multiple, Oe, !1) : le !== !!m.multiple && (m.defaultValue != null ? Qn(
                  d,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : Qn(d, !!m.multiple, m.multiple ? [] : "", !1));
            }
            d[zs] = m;
          } catch (He) {
            Ln(n, n.return, He);
          }
        }
        break;
      case 6:
        if (ar(r, n), Di(n), u & 4) {
          if (n.stateNode === null) throw Error(f(162));
          d = n.stateNode, m = n.memoizedProps;
          try {
            d.nodeValue = m;
          } catch (He) {
            Ln(n, n.return, He);
          }
        }
        break;
      case 3:
        if (ar(r, n), Di(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Fa(r.containerInfo);
        } catch (He) {
          Ln(n, n.return, He);
        }
        break;
      case 4:
        ar(r, n), Di(n);
        break;
      case 13:
        ar(r, n), Di(n), d = n.child, d.flags & 8192 && (m = d.memoizedState !== null, d.stateNode.isHidden = m, !m || d.alternate !== null && d.alternate.memoizedState !== null || (Ef = an())), u & 4 && Au(n);
        break;
      case 22:
        if (fe = l !== null && l.memoizedState !== null, n.mode & 1 ? (pr = (Q = pr) || fe, ar(r, n), pr = Q) : ar(r, n), Di(n), u & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !fe && n.mode & 1) for (ze = n, fe = n.child; fe !== null; ) {
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
                    } catch (He) {
                      Ln(u, l, He);
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
                  d = de.stateNode, Q ? (m = d.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (_ = de.stateNode, L = de.memoizedProps.style, b = L != null && L.hasOwnProperty("display") ? L.display : null, _.style.display = Qe("display", b));
                } catch (He) {
                  Ln(n, n.return, He);
                }
              }
            } else if (de.tag === 6) {
              if (fe === null) try {
                de.stateNode.nodeValue = Q ? "" : de.memoizedProps;
              } catch (He) {
                Ln(n, n.return, He);
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
        ar(r, n), Di(n), u & 4 && Au(n);
        break;
      case 21:
        break;
      default:
        ar(
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
            var m = Rv(n);
            Nu(n, m, d);
            break;
          case 3:
          case 4:
            var b = u.stateNode.containerInfo, _ = Rv(n);
            Zs(n, _, b);
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
        var b = d.memoizedState !== null || Ou;
        if (!b) {
          var _ = d.alternate, L = _ !== null && _.memoizedState !== null || pr;
          _ = Ou;
          var Q = pr;
          if (Ou = b, (pr = L) && !Q) for (ze = d; ze !== null; ) b = ze, L = b.child, b.tag === 22 && b.memoizedState !== null ? np(d) : L !== null ? (L.return = b, ze = L) : np(d);
          for (; m !== null; ) ze = m, tp(m), m = m.sibling;
          ze = d, Ou = _, pr = Q;
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
              pr || yf(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !pr) if (l === null) u.componentDidMount();
              else {
                var d = r.elementType === r.type ? l.memoizedProps : ra(r.type, l.memoizedProps);
                u.componentDidUpdate(d, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && gu(r, m, u);
              break;
            case 3:
              var b = r.updateQueue;
              if (b !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                gu(r, b, l);
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
                var Q = r.alternate;
                if (Q !== null) {
                  var fe = Q.memoizedState;
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
          pr || r.flags & 512 && gf(r);
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
            var b = r.return;
            try {
              gf(r);
            } catch (L) {
              Ln(r, b, L);
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
  var ig = Math.ceil, Fo = Ae.ReactCurrentDispatcher, Sf = Ae.ReactCurrentOwner, Wa = Ae.ReactCurrentBatchConfig, Rt = 0, Dn = null, dn = null, Gn = 0, ua = 0, Uu = Jt(0), Kn = 0, Js = null, jo = 0, Fu = 0, rp = 0, Wl = null, Dr = null, Ef = 0, ju = 1 / 0, ol = null, wf = !1, ap = null, qa = null, Pu = !1, Qa = null, Cf = 0, ec = 0, xf = null, tc = -1, Po = 0;
  function ir() {
    return Rt & 6 ? an() : tc !== -1 ? tc : tc = an();
  }
  function ul(n) {
    return n.mode & 1 ? Rt & 2 && Gn !== 0 ? Gn & -Gn : Ky.transition !== null ? (Po === 0 && (Po = vo()), Po) : (n = kt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ys(n.type)), n) : 1;
  }
  function wn(n, r, l, u) {
    if (50 < ec) throw ec = 0, xf = null, Error(f(185));
    Tl(n, l, u), (!(Rt & 2) || n !== Dn) && (n === Dn && (!(Rt & 2) && (Fu |= l), Kn === 4 && Li(n, Gn)), Xn(n, u), l === 1 && Rt === 0 && !(r.mode & 1) && (ju = an() + 500, zl && Ri()));
  }
  function Xn(n, r) {
    var l = n.callbackNode;
    Rl(n, r);
    var u = Si(n, n === Dn ? Gn : 0);
    if (u === 0) l !== null && rn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && rn(l), r === 1) n.tag === 0 ? av(Hu.bind(null, n)) : Bc(Hu.bind(null, n)), nv(function() {
        !(Rt & 6) && Ri();
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
            l = wt;
            break;
          case 536870912:
            l = Ii;
            break;
          default:
            l = wt;
        }
        l = zv(l, bf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function bf(n, r) {
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
      (Dn !== n || Gn !== r) && (ol = null, ju = an() + 500, Bo(n, r));
      do
        try {
          og();
          break;
        } catch (_) {
          _v(n, _);
        }
      while (!0);
      Hd(), Fo.current = m, Rt = d, dn !== null ? r = 0 : (Dn = null, Gn = 0, r = Kn);
    }
    if (r !== 0) {
      if (r === 2 && (d = Ei(n), d !== 0 && (u = d, r = Ho(n, d))), r === 1) throw l = Js, Bo(n, 0), Li(n, u), Xn(n, an()), l;
      if (r === 6) Li(n, u);
      else {
        if (d = n.current.alternate, !(u & 30) && !lp(d) && (r = Tf(n, u), r === 2 && (m = Ei(n), m !== 0 && (u = m, r = Ho(n, m))), r === 1)) throw l = Js, Bo(n, 0), Li(n, u), Xn(n, an()), l;
        switch (n.finishedWork = d, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            ql(n, Dr, ol);
            break;
          case 3:
            if (Li(n, u), (u & 130023424) === u && (r = Ef + 500 - an(), 10 < r)) {
              if (Si(n, 0) !== 0) break;
              if (d = n.suspendedLanes, (d & u) !== u) {
                ir(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = Ns(ql.bind(null, n, Dr, ol), r);
              break;
            }
            ql(n, Dr, ol);
            break;
          case 4:
            if (Li(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, d = -1; 0 < u; ) {
              var b = 31 - Mr(u);
              m = 1 << b, b = r[b], b > d && (d = b), u &= ~m;
            }
            if (u = d, u = an() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * ig(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Ns(ql.bind(null, n, Dr, ol), u);
              break;
            }
            ql(n, Dr, ol);
            break;
          case 5:
            ql(n, Dr, ol);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return Xn(n, an()), n.callbackNode === l ? bf.bind(null, n) : null;
  }
  function Ho(n, r) {
    var l = Wl;
    return n.current.memoizedState.isDehydrated && (Bo(n, r).flags |= 256), n = Tf(n, r), n !== 2 && (r = Dr, Dr = l, r !== null && ip(r)), n;
  }
  function ip(n) {
    Dr === null ? Dr = n : Dr.push.apply(Dr, n);
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
      var l = 31 - Mr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Hu(n) {
    if (Rt & 6) throw Error(f(327));
    Bu();
    var r = Si(n, 0);
    if (!(r & 1)) return Xn(n, an()), null;
    var l = Tf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Ei(n);
      u !== 0 && (r = u, l = Ho(n, u));
    }
    if (l === 1) throw l = Js, Bo(n, 0), Li(n, r), Xn(n, an()), l;
    if (l === 6) throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, ql(n, Dr, ol), Xn(n, an()), null;
  }
  function op(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (ju = an() + 500, zl && Ri());
    }
  }
  function Ni(n) {
    Qa !== null && Qa.tag === 0 && !(Rt & 6) && Bu();
    var r = Rt;
    Rt |= 1;
    var l = Wa.transition, u = kt;
    try {
      if (Wa.transition = null, kt = 1, n) return n();
    } finally {
      kt = u, Wa.transition = l, Rt = r, !(Rt & 6) && Ri();
    }
  }
  function Rf() {
    ua = Uu.current, Ie(Uu);
  }
  function Bo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ms(l)), dn !== null) for (l = dn.return; l !== null; ) {
      var u = l;
      switch (Vc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Jr();
          break;
        case 3:
          Cu(), Ie(pt), Ie(nr), Va();
          break;
        case 5:
          Je(u);
          break;
        case 4:
          Cu();
          break;
        case 13:
          Ie(We);
          break;
        case 19:
          Ie(We);
          break;
        case 10:
          Bd(u.type._context);
          break;
        case 22:
        case 23:
          Rf();
      }
      l = l.return;
    }
    if (Dn = n, dn = n = Ql(n.current, null), Gn = ua = r, Kn = 0, Js = null, rp = Fu = jo = 0, Dr = Wl = null, _r !== null) {
      for (r = 0; r < _r.length; r++) if (l = _r[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var d = u.next, m = l.pending;
        if (m !== null) {
          var b = m.next;
          m.next = d, u.next = b;
        }
        l.pending = u;
      }
      _r = null;
    }
    return n;
  }
  function _v(n, r) {
    do {
      var l = dn;
      try {
        if (Hd(), Bs.current = sf, zn) {
          for (var u = En.memoizedState; u !== null; ) {
            var d = u.queue;
            d !== null && (d.pending = null), u = u.next;
          }
          zn = !1;
        }
        if (_o = 0, re = An = En = null, rt = !1, _i = 0, Sf.current = null, l === null || l.return === null) {
          Kn = 1, Js = r, dn = null;
          break;
        }
        e: {
          var m = n, b = l.return, _ = l, L = r;
          if (r = Gn, _.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var Q = L, fe = _, de = fe.tag;
            if (!(fe.mode & 1) && (de === 0 || de === 11 || de === 15)) {
              var le = fe.alternate;
              le ? (fe.updateQueue = le.updateQueue, fe.memoizedState = le.memoizedState, fe.lanes = le.lanes) : (fe.updateQueue = null, fe.memoizedState = null);
            }
            var Oe = Sv(b);
            if (Oe !== null) {
              Oe.flags &= -257, Kd(Oe, b, _, m, r), Oe.mode & 1 && Qs(m, Q, r), r = Oe, L = Q;
              var Ue = r.updateQueue;
              if (Ue === null) {
                var He = /* @__PURE__ */ new Set();
                He.add(L), r.updateQueue = He;
              } else Ue.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                Qs(m, Q, r), nc();
                break e;
              }
              L = Error(f(426));
            }
          } else if (fn && _.mode & 1) {
            var jn = Sv(b);
            if (jn !== null) {
              !(jn.flags & 65536) && (jn.flags |= 256), Kd(jn, b, _, m, r), In(Il(L, _));
              break e;
            }
          }
          m = L = Il(L, _), Kn !== 4 && (Kn = 2), Wl === null ? Wl = [m] : Wl.push(m), m = b;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var P = yv(m, L, r);
                uv(m, P);
                break e;
              case 1:
                _ = L;
                var A = m.type, V = m.stateNode;
                if (!(m.flags & 128) && (typeof A.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (qa === null || !qa.has(V)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var me = gv(m, _, r);
                  uv(m, me);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Lv(l);
      } catch (Ye) {
        r = Ye, dn === l && l !== null && (dn = l = l.return);
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
    if (Hd(), Rt = l, Fo.current = u, dn !== null) throw Error(f(261));
    return Dn = null, Gn = 0, Kn;
  }
  function lg() {
    for (; dn !== null; ) Dv(dn);
  }
  function og() {
    for (; dn !== null && !Tr(); ) Dv(dn);
  }
  function Dv(n) {
    var r = Av(n.alternate, n, ua);
    n.memoizedProps = n.pendingProps, r === null ? Lv(n) : dn = r, Sf.current = null;
  }
  function Lv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ng(l, r), l !== null) {
          l.flags &= 32767, dn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Kn = 6, dn = null;
          return;
        }
      } else if (l = tg(l, r, ua), l !== null) {
        dn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        dn = r;
        return;
      }
      dn = r = n;
    } while (r !== null);
    Kn === 0 && (Kn = 5);
  }
  function ql(n, r, l) {
    var u = kt, d = Wa.transition;
    try {
      Wa.transition = null, kt = 1, ug(n, r, l, u);
    } finally {
      Wa.transition = d, kt = u;
    }
    return null;
  }
  function ug(n, r, l, u) {
    do
      Bu();
    while (Qa !== null);
    if (Rt & 6) throw Error(f(327));
    l = n.finishedWork;
    var d = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = l.lanes | l.childLanes;
    if (ds(n, m), n === Dn && (dn = Dn = null, Gn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Pu || (Pu = !0, zv(wt, function() {
      return Bu(), null;
    })), m = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || m) {
      m = Wa.transition, Wa.transition = null;
      var b = kt;
      kt = 1;
      var _ = Rt;
      Rt |= 4, Sf.current = null, rg(n, l), Tv(l, n), Eo(Ld), iu = !!Dd, Ld = Dd = null, n.current = l, ag(l), yi(), Rt = _, kt = b, Wa.transition = m;
    } else n.current = l;
    if (Pu && (Pu = !1, Qa = n, Cf = d), m = n.pendingLanes, m === 0 && (qa = null), us(l.stateNode), Xn(n, an()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) d = r[l], u(d.value, { componentStack: d.stack, digest: d.digest });
    if (wf) throw wf = !1, n = ap, ap = null, n;
    return Cf & 1 && n.tag !== 0 && Bu(), m = n.pendingLanes, m & 1 ? n === xf ? ec++ : (ec = 0, xf = n) : ec = 0, Ri(), null;
  }
  function Bu() {
    if (Qa !== null) {
      var n = hs(Cf), r = Wa.transition, l = kt;
      try {
        if (Wa.transition = null, kt = 16 > n ? 16 : n, Qa === null) var u = !1;
        else {
          if (n = Qa, Qa = null, Cf = 0, Rt & 6) throw Error(f(331));
          var d = Rt;
          for (Rt |= 4, ze = n.current; ze !== null; ) {
            var m = ze, b = m.child;
            if (ze.flags & 16) {
              var _ = m.deletions;
              if (_ !== null) {
                for (var L = 0; L < _.length; L++) {
                  var Q = _[L];
                  for (ze = Q; ze !== null; ) {
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
                      if (bv(fe), fe === Q) {
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
                  var He = Ue.child;
                  if (He !== null) {
                    Ue.child = null;
                    do {
                      var jn = He.sibling;
                      He.sibling = null, He = jn;
                    } while (He !== null);
                  }
                }
                ze = m;
              }
            }
            if (m.subtreeFlags & 2064 && b !== null) b.return = m, ze = b;
            else e: for (; ze !== null; ) {
              if (m = ze, m.flags & 2048) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Lu(9, m, m.return);
              }
              var P = m.sibling;
              if (P !== null) {
                P.return = m.return, ze = P;
                break e;
              }
              ze = m.return;
            }
          }
          var A = n.current;
          for (ze = A; ze !== null; ) {
            b = ze;
            var V = b.child;
            if (b.subtreeFlags & 2064 && V !== null) V.return = b, ze = V;
            else e: for (b = A; ze !== null; ) {
              if (_ = ze, _.flags & 2048) try {
                switch (_.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yf(9, _);
                }
              } catch (Ye) {
                Ln(_, _.return, Ye);
              }
              if (_ === b) {
                ze = null;
                break e;
              }
              var me = _.sibling;
              if (me !== null) {
                me.return = _.return, ze = me;
                break e;
              }
              ze = _.return;
            }
          }
          if (Rt = d, Ri(), Gr && typeof Gr.onPostCommitFiberRoot == "function") try {
            Gr.onPostCommitFiberRoot(bl, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        kt = l, Wa.transition = r;
      }
    }
    return !1;
  }
  function Nv(n, r, l) {
    r = Il(l, r), r = yv(n, r, 1), n = Hl(n, r, 1), r = ir(), n !== null && (Tl(n, 1, r), Xn(n, r));
  }
  function Ln(n, r, l) {
    if (n.tag === 3) Nv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Nv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (qa === null || !qa.has(u))) {
          n = Il(l, n), n = gv(r, n, 1), r = Hl(r, n, 1), n = ir(), r !== null && (Tl(r, 1, n), Xn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function sg(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = ir(), n.pingedLanes |= n.suspendedLanes & l, Dn === n && (Gn & l) === l && (Kn === 4 || Kn === 3 && (Gn & 130023424) === Gn && 500 > an() - Ef ? Bo(n, 0) : rp |= l), Xn(n, r);
  }
  function Mv(n, r) {
    r === 0 && (n.mode & 1 ? (r = tu, tu <<= 1, !(tu & 130023424) && (tu = 4194304)) : r = 1);
    var l = ir();
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
    if (n !== null) if (n.memoizedProps !== r.pendingProps || pt.current) la = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return la = !1, ll(n, r, l);
      la = !!(n.flags & 131072);
    }
    else la = !1, fn && r.flags & 1048576 && Fl(r, Ro, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Xs(n, r), n = r.pendingProps;
        var d = xa(r, nr.current);
        Mn(r, l), d = Oo(null, r, u, n, d, l);
        var m = $l();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Vn(u) ? (m = !0, bo(r)) : m = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, $d(r), d.updater = qc, r.stateNode = d, d._reactInternals = r, Id(r, u, n, l), r = ff(null, r, u, !0, m, l)) : (r.tag = 0, fn && m && $c(r), Un(null, r, d, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Xs(n, r), n = r.pendingProps, d = u._init, u = d(u._payload), r.type = u, d = r.tag = fg(u), n = ra(u, n), d) {
            case 0:
              r = gt(null, r, u, n, l);
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
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), gt(n, r, u, d, l);
      case 1:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), Gs(n, r, u, d, l);
      case 3:
        e: {
          if (eg(r), n === null) throw Error(f(387));
          u = r.pendingProps, m = r.memoizedState, d = m.element, ov(n, r), Fs(r, u, null, l);
          var b = r.memoizedState;
          if (u = b.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: b.cache, pendingSuspenseBoundaries: b.pendingSuspenseBoundaries, transitions: b.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            d = Il(Error(f(423)), r), r = wv(n, r, u, l, d);
            break e;
          } else if (u !== d) {
            d = Il(Error(f(424)), r), r = wv(n, r, u, l, d);
            break e;
          } else for (Ra = Ca(r.stateNode.containerInfo.firstChild), ba = r, fn = !0, $a = null, l = hv(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
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
        return Qc(r), n === null && Ic(r), u = r.type, d = r.pendingProps, m = n !== null ? n.memoizedProps : null, b = d.children, xo(u, d) ? b = null : m !== null && xo(u, m) && (r.flags |= 32), zo(n, r), Un(n, r, b, l), r.child;
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
          if (u = r.type._context, d = r.pendingProps, m = r.memoizedProps, b = d.value, Ut(mu, u._currentValue), u._currentValue = b, m !== null) if (si(m.value, b)) {
            if (m.children === d.children && !pt.current) {
              r = Fn(n, r, l);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var _ = m.dependencies;
            if (_ !== null) {
              b = m.child;
              for (var L = _.firstContext; L !== null; ) {
                if (L.context === u) {
                  if (m.tag === 1) {
                    L = ln(-1, l & -l), L.tag = 2;
                    var Q = m.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var fe = Q.pending;
                      fe === null ? L.next = L : (L.next = fe.next, fe.next = L), Q.pending = L;
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
            } else if (m.tag === 10) b = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (b = m.return, b === null) throw Error(f(341));
              b.lanes |= l, _ = b.alternate, _ !== null && (_.lanes |= l), jl(b, l, r), b = m.sibling;
            } else b = m.child;
            if (b !== null) b.return = m;
            else for (b = m; b !== null; ) {
              if (b === r) {
                b = null;
                break;
              }
              if (m = b.sibling, m !== null) {
                m.return = b.return, b = m;
                break;
              }
              b = b.return;
            }
            m = b;
          }
          Un(n, r, d.children, l), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, u = r.pendingProps.children, Mn(r, l), d = ge(d), u = u(d), r.flags |= 1, Un(n, r, u, l), r.child;
      case 14:
        return u = r.type, d = ra(u, r.pendingProps), d = ra(u.type, d), Yl(n, r, u, d, l);
      case 15:
        return cf(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), Xs(n, r), r.tag = 1, Vn(u) ? (n = !0, bo(r)) : n = !1, Mn(r, l), cv(r, u, d), Id(r, u, d, l), ff(null, r, u, !0, n, l);
      case 19:
        return Zd(n, r, l);
      case 22:
        return oa(n, r, l);
    }
    throw Error(f(156, r.tag));
  };
  function zv(n, r) {
    return nn(n, r);
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
      if (n = n.$$typeof, n === ne) return 11;
      if (n === ye) return 14;
    }
    return 2;
  }
  function Ql(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ga(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function kf(n, r, l, u, d, m) {
    var b = 2;
    if (u = n, typeof n == "function") sp(n) && (b = 1);
    else if (typeof n == "string") b = 5;
    else e: switch (n) {
      case Ge:
        return $o(l.children, d, m, r);
      case nt:
        b = 8, d |= 8;
        break;
      case hn:
        return n = Ga(12, l, r, d | 2), n.elementType = hn, n.lanes = m, n;
      case he:
        return n = Ga(13, l, r, d), n.elementType = he, n.lanes = m, n;
      case ue:
        return n = Ga(19, l, r, d), n.elementType = ue, n.lanes = m, n;
      case Ee:
        return _f(l, d, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Yt:
            b = 10;
            break e;
          case H:
            b = 9;
            break e;
          case ne:
            b = 11;
            break e;
          case ye:
            b = 14;
            break e;
          case Se:
            b = 16, u = null;
            break e;
        }
        throw Error(f(130, n == null ? n : typeof n, ""));
    }
    return r = Ga(b, l, r, d), r.elementType = n, r.type = u, r.lanes = m, r;
  }
  function $o(n, r, l, u) {
    return n = Ga(7, n, u, r), n.lanes = l, n;
  }
  function _f(n, r, l, u) {
    return n = Ga(22, n, u, r), n.elementType = Ee, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
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
  function cp(n, r, l, u, d, m, b, _, L) {
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
  function dp(n, r, l, u, d, m, b, _, L) {
    return n = cp(l, u, !0, n, d, m, b, _, L), n.context = fp(null), l = n.current, u = ir(), d = ul(l), m = ln(u, d), m.callback = r ?? null, Hl(l, m, d), n.current.lanes = d, Tl(n, d, u), Xn(n, u), n;
  }
  function Df(n, r, l, u) {
    var d = r.current, m = ir(), b = ul(d);
    return l = fp(l), r.context === null ? r.context = l : r.pendingContext = l, r = ln(m, b), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Hl(d, r, b), n !== null && (wn(n, d, b, m), Wc(n, d, b)), b;
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
      var r = Nt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < sn.length && r !== 0 && r < sn[l].priority; l++) ;
      sn.splice(l, 0, n), l === 0 && oi(n);
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
          var Q = ic(b);
          m.call(Q);
        };
      }
      var b = dp(r, u, n, 0, null, !1, !1, "", Pv);
      return n._reactRootContainer = b, n[ci] = b.current, Ci(n.nodeType === 8 ? n.parentNode : n), Ni(), b;
    }
    for (; d = n.lastChild; ) n.removeChild(d);
    if (typeof u == "function") {
      var _ = u;
      u = function() {
        var Q = ic(L);
        _.call(Q);
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
      var b = m;
      if (typeof d == "function") {
        var _ = d;
        d = function() {
          var L = ic(b);
          _.call(L);
        };
      }
      Df(r, b, n, d);
    } else b = pg(l, r, n, d, u);
    return ic(b);
  }
  nu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Yi(r.pendingLanes);
          l !== 0 && (ps(r, l | 1), Xn(r, an()), !(Rt & 6) && (ju = an() + 500, Ri()));
        }
        break;
      case 13:
        Ni(function() {
          var u = al(n, 1);
          if (u !== null) {
            var d = ir();
            wn(u, n, 1, d);
          }
        }), pp(n, 1);
    }
  }, kl = function(n) {
    if (n.tag === 13) {
      var r = al(n, 134217728);
      if (r !== null) {
        var l = ir();
        wn(r, n, 134217728, l);
      }
      pp(n, 134217728);
    }
  }, vs = function(n) {
    if (n.tag === 13) {
      var r = ul(n), l = al(n, r);
      if (l !== null) {
        var u = ir();
        wn(l, n, r, u);
      }
      pp(n, r);
    }
  }, Nt = function() {
    return kt;
  }, ru = function(n, r) {
    var l = kt;
    try {
      return kt = n, r();
    } finally {
      kt = l;
    }
  }, Wt = function(n, r, l) {
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
        br(n, l);
        break;
      case "select":
        r = l.value, r != null && Qn(n, !!l.multiple, r, !1);
    }
  }, Cl = op, co = Ni;
  var hg = { usingClientEntryPoint: !1, Events: [xi, hu, Hc, ri, Ma, op] }, oc = { findFiberByHostInstance: nl, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Hv = { bundleType: oc.bundleType, version: oc.version, rendererPackageName: oc.rendererPackageName, rendererConfig: oc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ae.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Xe(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: oc.findFiberByHostInstance || dg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Af = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Af.isDisabled && Af.supportsFiber) try {
      bl = Af.inject(Hv), Gr = Af;
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
    return n = Xe(r), n = n === null ? null : n.stateNode, n;
  }, ti.flushSync = function(n) {
    return Ni(n);
  }, ti.hydrate = function(n, r, l) {
    if (!Nf(r)) throw Error(f(200));
    return Mf(null, n, r, !0, l);
  }, ti.hydrateRoot = function(n, r, l) {
    if (!Gl(n)) throw Error(f(405));
    var u = l != null && l.hydratedSources || null, d = !1, m = "", b = hp;
    if (l != null && (l.unstable_strictMode === !0 && (d = !0), l.identifierPrefix !== void 0 && (m = l.identifierPrefix), l.onRecoverableError !== void 0 && (b = l.onRecoverableError)), r = dp(r, null, n, 1, l ?? null, d, !1, m, b), n[ci] = r.current, Ci(n), u) for (n = 0; n < u.length; n++) l = u[n], d = l._getVersion, d = d(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, d] : r.mutableSourceEagerHydrationData.push(
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
var ni = {}, Tx;
function AD() {
  if (Tx) return ni;
  Tx = 1;
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
    var c = er, f = Gx(), h = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = !1;
    function x(e) {
      S = e;
    }
    function C(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function g(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("error", e, a);
      }
    }
    function U(e, t, a) {
      {
        var i = h.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(v) {
          return String(v);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var j = 0, M = 1, F = 2, I = 3, oe = 4, X = 5, Z = 6, Re = 7, ct = 8, vt = 9, Ve = 10, Ae = 11, yt = 12, _e = 13, Ge = 14, nt = 15, hn = 16, Yt = 17, H = 18, ne = 19, he = 21, ue = 22, ye = 23, Se = 24, Ee = 25, K = !0, se = !1, k = !1, G = !1, we = !1, Be = !0, $e = !1, ut = !1, Ke = !0, ft = !0, lt = !0, bt = /* @__PURE__ */ new Set(), bn = {}, Wn = {};
    function Yr(e, t) {
      Cr(e, t), Cr(e + "Capture", t);
    }
    function Cr(e, t) {
      bn[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), bn[e] = t;
      {
        var a = e.toLowerCase();
        Wn[a] = e, e === "onDoubleClick" && (Wn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        bt.add(t[i]);
    }
    var Rn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ur = Object.prototype.hasOwnProperty;
    function qn(e) {
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
    function Lr(e, t) {
      if (Hn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qn(e)), Bn(e);
    }
    function xr(e) {
      if (Hn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qn(e)), Bn(e);
    }
    function Qn(e, t) {
      if (Hn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qn(e)), Bn(e);
    }
    function ha(e, t) {
      if (Hn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qn(e)), Bn(e);
    }
    function va(e) {
      if (Hn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", qn(e)), Bn(e);
    }
    function br(e) {
      if (Hn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", qn(e)), Bn(e);
    }
    var ma = 0, sr = 1, Nr = 2, vn = 3, ya = 4, ga = 5, Sa = 6, xe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Qe = xe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Et = new RegExp("^[" + xe + "][" + Qe + "]*$"), Bt = {}, zt = {};
    function Nn(e) {
      return ur.call(zt, e) ? !0 : ur.call(Bt, e) ? !1 : Et.test(e) ? (zt[e] = !0, !0) : (Bt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
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
    function Wt(e, t, a, i) {
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
    function tr(e) {
      return tn.hasOwnProperty(e) ? tn[e] : null;
    }
    function $t(e, t, a, i, o, s, v) {
      this.acceptsBooleans = t === Nr || t === vn || t === ya, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = v;
    }
    var tn = {}, ri = [
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
      tn[e] = new $t(
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
      tn[t] = new $t(
        t,
        sr,
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
      tn[e] = new $t(
        e,
        Nr,
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
      tn[e] = new $t(
        e,
        Nr,
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
      tn[e] = new $t(
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
      tn[e] = new $t(
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
      tn[e] = new $t(
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
      tn[e] = new $t(
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
      tn[e] = new $t(
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
      tn[t] = new $t(
        t,
        sr,
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
      tn[t] = new $t(
        t,
        sr,
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
      tn[t] = new $t(
        t,
        sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      tn[e] = new $t(
        e,
        sr,
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
    tn[co] = new $t(
      "xlinkHref",
      sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      tn[e] = new $t(
        e,
        sr,
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
        Lr(a, t), i.sanitizeURL && ai("" + a);
        var s = i.attributeName, v = null;
        if (i.type === ya) {
          if (e.hasAttribute(s)) {
            var y = e.getAttribute(s);
            return y === "" ? !0 : Wt(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(s)) {
          if (Wt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === vn)
            return a;
          v = e.getAttribute(s);
        }
        return Wt(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function Aa(e, t, a, i) {
      {
        if (!Nn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Lr(a, t), o === "" + a ? a : o;
      }
    }
    function $i(e, t, a, i) {
      var o = tr(t);
      if (!yn(t, o, i)) {
        if (Wt(t, a, o, i) && (a = null), i || o === null) {
          if (Nn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Lr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var v = o.mustUseProperty;
        if (v) {
          var y = o.propertyName;
          if (a === null) {
            var E = o.type;
            e[y] = E === vn ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var R = o.attributeName, T = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var z = o.type, N;
          z === vn || z === ya && a === !0 ? N = "" : (Lr(a, R), N = "" + a, o.sanitizeURL && ai(N.toString())), T ? e.setAttributeNS(T, R, N) : e.setAttribute(R, N);
        }
      }
    }
    var Wr = Symbol.for("react.element"), qr = Symbol.for("react.portal"), Ea = Symbol.for("react.fragment"), Vi = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), ce = Symbol.for("react.provider"), be = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), xt = Symbol.for("react.suspense"), _t = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), $n = Symbol.for("react.scope"), nn = Symbol.for("react.debug_trace_mode"), rn = Symbol.for("react.offscreen"), Tr = Symbol.for("react.legacy_hidden"), yi = Symbol.for("react.cache"), an = Symbol.for("react.tracing_marker"), Qr = Symbol.iterator, os = "@@iterator";
    function gi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Qr && e[Qr] || e[os];
      return typeof t == "function" ? t : null;
    }
    var wt = Object.assign, po = 0, Ii, bl, Gr, us, Mr, ss, cs;
    function fs() {
    }
    fs.__reactDisabledLog = !0;
    function ho() {
      {
        if (po === 0) {
          Ii = console.log, bl = console.info, Gr = console.warn, us = console.error, Mr = console.group, ss = console.groupCollapsed, cs = console.groupEnd;
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
            log: wt({}, e, {
              value: Ii
            }),
            info: wt({}, e, {
              value: bl
            }),
            warn: wt({}, e, {
              value: Gr
            }),
            error: wt({}, e, {
              value: us
            }),
            group: wt({}, e, {
              value: Mr
            }),
            groupCollapsed: wt({}, e, {
              value: ss
            }),
            groupEnd: wt({}, e, {
              value: cs
            })
          });
        }
        po < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Yi = h.ReactCurrentDispatcher, Si;
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
    var Rl = !1, Ei;
    {
      var vo = typeof WeakMap == "function" ? WeakMap : Map;
      Ei = new vo();
    }
    function mo(e, t) {
      if (!e || Rl)
        return "";
      {
        var a = Ei.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Rl = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Yi.current, Yi.current = null, ho();
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
            } catch (q) {
              i = q;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (q) {
              i = q;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            i = q;
          }
          e();
        }
      } catch (q) {
        if (q && i && typeof q.stack == "string") {
          for (var y = q.stack.split(`
`), E = i.stack.split(`
`), R = y.length - 1, T = E.length - 1; R >= 1 && T >= 0 && y[R] !== E[T]; )
            T--;
          for (; R >= 1 && T >= 0; R--, T--)
            if (y[R] !== E[T]) {
              if (R !== 1 || T !== 1)
                do
                  if (R--, T--, T < 0 || y[R] !== E[T]) {
                    var z = `
` + y[R].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && Ei.set(e, z), z;
                  }
                while (R >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Rl = !1, Yi.current = s, tu(), Error.prepareStackTrace = o;
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
    function kt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return mo(e, ps(e));
      if (typeof e == "string")
        return za(e);
      switch (e) {
        case xt:
          return za("Suspense");
        case _t:
          return za("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Te:
            return ds(e.render);
          case St:
            return kt(e.type, t, a);
          case Xe: {
            var i = e, o = i._payload, s = i._init;
            try {
              return kt(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function hs(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case X:
          return za(e.type);
        case hn:
          return za("Lazy");
        case _e:
          return za("Suspense");
        case ne:
          return za("SuspenseList");
        case j:
        case F:
        case nt:
          return ds(e.type);
        case Ae:
          return ds(e.type.render);
        case M:
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
    function Nt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ea:
          return "Fragment";
        case qr:
          return "Portal";
        case D:
          return "Profiler";
        case Vi:
          return "StrictMode";
        case xt:
          return "Suspense";
        case _t:
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
          case St:
            var i = e.displayName || null;
            return i !== null ? i : Nt(e.type) || "Memo";
          case Xe: {
            var o = e, s = o._payload, v = o._init;
            try {
              return Nt(v(s));
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
    function dt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Se:
          return "Cache";
        case vt:
          var i = a;
          return yo(i) + ".Consumer";
        case Ve:
          var o = a;
          return yo(o._context) + ".Provider";
        case H:
          return "DehydratedFragment";
        case Ae:
          return ru(a, a.render, "ForwardRef");
        case Re:
          return "Fragment";
        case X:
          return a;
        case oe:
          return "Portal";
        case I:
          return "Root";
        case Z:
          return "Text";
        case hn:
          return Nt(a);
        case ct:
          return a === Vi ? "StrictMode" : "Mode";
        case ue:
          return "Offscreen";
        case yt:
          return "Profiler";
        case he:
          return "Scope";
        case _e:
          return "Suspense";
        case ne:
          return "SuspenseList";
        case Ee:
          return "TracingMarker";
        case M:
        case j:
        case Yt:
        case F:
        case Ge:
        case nt:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var li = h.ReactDebugCurrentFrame, gn = null, Kr = !1;
    function Ua() {
      {
        if (gn === null)
          return null;
        var e = gn._debugOwner;
        if (e !== null && typeof e < "u")
          return dt(e);
      }
      return null;
    }
    function _l() {
      return gn === null ? "" : nu(gn);
    }
    function sn() {
      li.getCurrentStack = null, gn = null, Kr = !1;
    }
    function Sn(e) {
      li.getCurrentStack = e === null ? null : _l, gn = e, Kr = !1;
    }
    function ms() {
      return gn;
    }
    function cr(e) {
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
          return br(e), e;
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
      br(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(y) {
            br(y), i = "" + y, s.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            br(y), i = "" + y;
          },
          stopTracking: function() {
            Fa(e), delete e[t];
          }
        };
        return v;
      }
    }
    function qi(e) {
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
    var Qi = !1, ou = !1, ys = !1, ui = !1;
    function uu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function w(e, t) {
      var a = e, i = t.checked, o = wt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function O(e, t) {
      go("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ou && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component", t.type), ou = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Qi && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component", t.type), Qi = !0);
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
      t.hasOwnProperty("value") ? ot(a, t.type, o) : t.hasOwnProperty("defaultValue") && ot(a, t.type, oi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ve(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var v = Xr(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function Pe(e, t) {
      var a = e;
      J(a, t), Le(a, t);
    }
    function Le(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Lr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var v = o[s];
          if (!(v === e || v.form !== e.form)) {
            var y = rm(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            lu(v), J(v, y);
          }
        }
      }
    }
    function ot(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || wi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Xr(e._wrapperState.initialValue) : e.defaultValue !== Xr(a) && (e.defaultValue = Xr(a)));
    }
    var Ct = !1, Vt = !1, qt = !1;
    function Qt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Vt || (Vt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (qt || (qt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ct && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ct = !0);
    }
    function Gt(e, t) {
      t.value != null && e.setAttribute("value", Xr(oi(t.value)));
    }
    var cn = Array.isArray;
    function Mt(e) {
      return cn(e);
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
            var i = Mt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, su()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, su());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, v = {}, y = 0; y < s.length; y++)
          v["$" + s[y]] = !0;
        for (var E = 0; E < o.length; E++) {
          var R = v.hasOwnProperty("$" + o[E].value);
          o[E].selected !== R && (o[E].selected = R), R && i && (o[E].defaultSelected = !0);
        }
      } else {
        for (var T = Xr(oi(a)), z = null, N = 0; N < o.length; N++) {
          if (o[N].value === T) {
            o[N].selected = !0, i && (o[N].defaultSelected = !0);
            return;
          }
          z === null && !o[N].disabled && (z = o[N]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function Es(e, t) {
      return wt({}, t, {
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
      var i = wt({}, t, {
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
            if (Mt(o)) {
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
      var Uh = /^(?:webkit|moz|o)[A-Z]/, xs = /^-ms-/, bs = /-(.)/g, Fh = /;\s*$/, Zi = {}, wd = {}, Cd = !1, Mc = !1, xd = function(e) {
        return e.replace(bs, function(t, a) {
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
          var v = a[s], y = i[s];
          if (y && v !== y) {
            var E = v + "," + y;
            if (o[E])
              continue;
            o[E] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", si(e[v]) ? "Removing" : "Updating", v, y);
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
    }, Ih = wt({
      menuitem: !0
    }, Vh), Yh = "__html";
    function Rs(e, t) {
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
    }, Nl = {}, Ts = new RegExp("^(aria)-[" + Qe + "]*$"), bd = new RegExp("^(aria)[A-Z][" + Qe + "]*$");
    function Wh(e, t) {
      {
        if (ur.call(Nl, t) && Nl[t])
          return !0;
        if (bd.test(t)) {
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
        var s = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function du(e, t) {
      Eo(e, t) || zc(e, t);
    }
    var Uc = !1;
    function qh(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Uc && (Uc = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ks = function() {
    };
    {
      var kr = {}, Rd = /^on./, Qh = /^on[^A-Z]/, Gh = new RegExp("^(aria)-[" + Qe + "]*$"), Kh = new RegExp("^(aria)[A-Z][" + Qe + "]*$");
      ks = function(e, t, a, i) {
        if (ur.call(kr, t) && kr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), kr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(o) ? v[o] : null;
          if (y != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, y), kr[t] = !0, !0;
          if (Rd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), kr[t] = !0, !0;
        } else if (Rd.test(t))
          return Qh.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), kr[t] = !0, !0;
        if (Gh.test(t) || Kh.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), kr[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), kr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), kr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), kr[t] = !0, !0;
        var E = tr(t), R = E !== null && E.type === ma;
        if (Ac.hasOwnProperty(o)) {
          var T = Ac[o];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), kr[t] = !0, !0;
        } else if (!R && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), kr[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, E, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), kr[t] = !0, !0) : R ? !0 : Rr(t, a, E, !1) ? (kr[t] = !0, !1) : ((a === "false" || a === "true") && E !== null && E.type === vn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), kr[t] = !0), !0);
      };
    }
    var Xh = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = ks(e, o, t[o], a);
          s || i.push(o);
        }
        var v = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Ml(e, t, a) {
      Eo(e, t) || Xh(e, t, a);
    }
    var Fc = 1, _s = 2, Os = 4, Wy = Fc | _s | Os, Ji = null;
    function qy(e) {
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
    if (Rn)
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
    function Nd(e, t, a, i, o, s, v, y, E) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, R);
      } catch (T) {
        this.onError(T);
      }
    }
    var nv = Nd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Md = document.createElement("react");
      nv = function(t, a, i, o, s, v, y, E, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), z = !1, N = !0, W = window.event, q = Object.getOwnPropertyDescriptor(window, "event");
        function ee() {
          Md.removeEventListener(te, et, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var Ne = Array.prototype.slice.call(arguments, 3);
        function et() {
          z = !0, ee(), a.apply(i, Ne), N = !1;
        }
        var qe, Dt = !1, Tt = !1;
        function B($) {
          if (qe = $.error, Dt = !0, qe === null && $.colno === 0 && $.lineno === 0 && (Tt = !0), $.defaultPrevented && qe != null && typeof qe == "object")
            try {
              qe._suppressLogging = !0;
            } catch {
            }
        }
        var te = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", B), Md.addEventListener(te, et, !1), T.initEvent(te, !1, !1), Md.dispatchEvent(T), q && Object.defineProperty(window, "event", q), z && N && (Dt ? Tt && (qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(qe)), window.removeEventListener("error", B), !z)
          return ee(), Nd.apply(this, arguments);
      };
    }
    var Ad = nv, Ca = !1, As = null, tl = !1, ja = null, zs = {
      onError: function(e) {
        Ca = !0, As = e;
      }
    };
    function ci(e, t, a, i, o, s, v, y, E) {
      Ca = !1, As = null, Ad.apply(zs, arguments);
    }
    function zd(e, t, a, i, o, s, v, y, E) {
      if (ci.apply(this, arguments), Ca) {
        var R = nl();
        tl || (tl = !0, ja = R);
      }
    }
    function Qy() {
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
    var Ze = (
      /*                      */
      0
    ), fi = (
      /*                */
      1
    ), Jt = (
      /*                    */
      2
    ), Ie = (
      /*                       */
      4
    ), Ut = (
      /*                */
      16
    ), Pa = (
      /*                 */
      32
    ), nr = (
      /*                     */
      64
    ), pt = (
      /*                   */
      128
    ), Ar = (
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
    ), bi = (
      /*                    */
      4096
    ), Al = (
      /*                   */
      8192
    ), bo = (
      /*             */
      16384
    ), rv = Jr | Ie | nr | xa | Vn | bo, rl = (
      /*               */
      32767
    ), zl = (
      /*                   */
      32768
    ), fr = (
      /*                */
      65536
    ), Bc = (
      /* */
      131072
    ), av = (
      /*                       */
      1048576
    ), Ri = (
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
    ), Ro = (
      /*              */
      33554432
    ), ea = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ie | Vn | 0
    ), ta = Jt | Ie | Ut | Pa | xa | bi | Al, di = Ie | nr | xa | Al, na = Jr | Ut, dr = Ha | Ul | Ri, To = h.ReactCurrentOwner;
    function Fl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Jt | bi)) !== Ze && (a = t.return), i = t.return;
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
    function ba(e) {
      return Fl(e) === e;
    }
    function Ra(e) {
      {
        var t = To.current;
        if (t !== null && t.tag === M) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", dt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = xi(e);
      return o ? Fl(o) === o : !1;
    }
    function fn(e) {
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
        var v = s.alternate;
        if (v === null) {
          var y = s.return;
          if (y !== null) {
            i = o = y;
            continue;
          }
          break;
        }
        if (s.child === v.child) {
          for (var E = s.child; E; ) {
            if (E === i)
              return fn(s), e;
            if (E === o)
              return fn(s), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = v;
        else {
          for (var R = !1, T = s.child; T; ) {
            if (T === i) {
              R = !0, i = s, o = v;
              break;
            }
            if (T === o) {
              R = !0, o = s, i = v;
              break;
            }
            T = T.sibling;
          }
          if (!R) {
            for (T = v.child; T; ) {
              if (T === i) {
                R = !0, i = v, o = s;
                break;
              }
              if (T === o) {
                R = !0, o = v, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!R)
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
      if (e.tag === X || e.tag === Z)
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
      if (e.tag === X || e.tag === Z)
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
    var Pd = f.unstable_scheduleCallback, Yc = f.unstable_cancelCallback, iv = f.unstable_shouldYield, vu = f.unstable_requestPaint, In = f.unstable_now, Ky = f.unstable_getCurrentPriorityLevel, ra = f.unstable_ImmediatePriority, mu = f.unstable_UserBlockingPriority, Ti = f.unstable_NormalPriority, yu = f.unstable_LowPriority, Us = f.unstable_IdlePriority, Hd = f.unstable_yieldValue, Bd = f.unstable_setDisableYieldValue, jl = null, Mn = null, ge = null, _r = !1, Ta = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function lv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ke && (e = wt({}, e, {
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
          _r || (_r = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Pl(e, t) {
      if (Mn && typeof Mn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & pt) === pt;
          if (ft) {
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
          _r || (_r = !0, g("React instrumentation encountered an error: %s", o));
        }
    }
    function $d(e) {
      if (Mn && typeof Mn.onPostCommitFiberRoot == "function")
        try {
          Mn.onPostCommitFiberRoot(jl, e);
        } catch (t) {
          _r || (_r = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ov(e) {
      if (Mn && typeof Mn.onCommitFiberUnmount == "function")
        try {
          Mn.onCommitFiberUnmount(jl, e);
        } catch (t) {
          _r || (_r = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ln(e) {
      if (typeof Hd == "function" && (Bd(e), x(e)), Mn && typeof Mn.setStrictMode == "function")
        try {
          Mn.setStrictMode(jl, e);
        } catch (t) {
          _r || (_r = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Hl(e) {
      ge = e;
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
      ge !== null && typeof ge.markCommitStarted == "function" && ge.markCommitStarted(e);
    }
    function Fs() {
      ge !== null && typeof ge.markCommitStopped == "function" && ge.markCommitStopped();
    }
    function gu(e) {
      ge !== null && typeof ge.markComponentRenderStarted == "function" && ge.markComponentRenderStarted(e);
    }
    function ko() {
      ge !== null && typeof ge.markComponentRenderStopped == "function" && ge.markComponentRenderStopped();
    }
    function Vd(e) {
      ge !== null && typeof ge.markComponentPassiveEffectMountStarted == "function" && ge.markComponentPassiveEffectMountStarted(e);
    }
    function qc() {
      ge !== null && typeof ge.markComponentPassiveEffectMountStopped == "function" && ge.markComponentPassiveEffectMountStopped();
    }
    function sv(e) {
      ge !== null && typeof ge.markComponentPassiveEffectUnmountStarted == "function" && ge.markComponentPassiveEffectUnmountStarted(e);
    }
    function cv() {
      ge !== null && typeof ge.markComponentPassiveEffectUnmountStopped == "function" && ge.markComponentPassiveEffectUnmountStopped();
    }
    function fv(e) {
      ge !== null && typeof ge.markComponentLayoutEffectMountStarted == "function" && ge.markComponentLayoutEffectMountStarted(e);
    }
    function Id() {
      ge !== null && typeof ge.markComponentLayoutEffectMountStopped == "function" && ge.markComponentLayoutEffectMountStopped();
    }
    function Su(e) {
      ge !== null && typeof ge.markComponentLayoutEffectUnmountStarted == "function" && ge.markComponentLayoutEffectUnmountStarted(e);
    }
    function js() {
      ge !== null && typeof ge.markComponentLayoutEffectUnmountStopped == "function" && ge.markComponentLayoutEffectUnmountStopped();
    }
    function dv(e, t, a) {
      ge !== null && typeof ge.markComponentErrored == "function" && ge.markComponentErrored(e, t, a);
    }
    function pv(e, t, a) {
      ge !== null && typeof ge.markComponentSuspended == "function" && ge.markComponentSuspended(e, t, a);
    }
    function Eu(e) {
      ge !== null && typeof ge.markLayoutEffectsStarted == "function" && ge.markLayoutEffectsStarted(e);
    }
    function hv() {
      ge !== null && typeof ge.markLayoutEffectsStopped == "function" && ge.markLayoutEffectsStopped();
    }
    function Ps(e) {
      ge !== null && typeof ge.markPassiveEffectsStarted == "function" && ge.markPassiveEffectsStarted(e);
    }
    function ki() {
      ge !== null && typeof ge.markPassiveEffectsStopped == "function" && ge.markPassiveEffectsStopped();
    }
    function wu(e) {
      ge !== null && typeof ge.markRenderStarted == "function" && ge.markRenderStarted(e);
    }
    function Hs() {
      ge !== null && typeof ge.markRenderYielded == "function" && ge.markRenderYielded();
    }
    function Bl() {
      ge !== null && typeof ge.markRenderStopped == "function" && ge.markRenderStopped();
    }
    function Yd(e) {
      ge !== null && typeof ge.markRenderScheduled == "function" && ge.markRenderScheduled(e);
    }
    function Cu(e, t) {
      ge !== null && typeof ge.markForceUpdateScheduled == "function" && ge.markForceUpdateScheduled(e, t);
    }
    function Qc(e, t) {
      ge !== null && typeof ge.markStateUpdateScheduled == "function" && ge.markStateUpdateScheduled(e, t);
    }
    var Je = (
      /*                         */
      0
    ), We = (
      /*                 */
      1
    ), At = (
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
    var An = 31, re = (
      /*                        */
      0
    ), zn = (
      /*                          */
      0
    ), rt = (
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
    ), qd = Mo, Ao = (
      /*          */
      134217728
    ), Qd = (
      /*                          */
      268435455
    ), bu = (
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
        if (e & rt)
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
        if (e & bu)
          return "IdleHydration";
        if (e & Vl)
          return "Idle";
        if (e & ka)
          return "Offscreen";
      }
    }
    var on = -1, uf = aa, Ys = Mo;
    function Ru(e) {
      switch (Un(e)) {
        case rt:
          return rt;
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
        case bu:
          return bu;
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
      if (a === re)
        return re;
      var i = re, o = e.suspendedLanes, s = e.pingedLanes, v = a & Qd;
      if (v !== re) {
        var y = v & ~o;
        if (y !== re)
          i = Ru(y);
        else {
          var E = v & s;
          E !== re && (i = Ru(E));
        }
      } else {
        var R = a & ~o;
        R !== re ? i = Ru(R) : s !== re && (i = Ru(s));
      }
      if (i === re)
        return re;
      if (t !== re && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === re) {
        var T = Un(i), z = Un(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Ia && (z & $l) !== re
        )
          return t;
      }
      (i & il) !== re && (i |= a & Ia);
      var N = e.entangledLanes;
      if (N !== re)
        for (var W = e.entanglements, q = i & N; q > 0; ) {
          var ee = Yl(q), Ne = 1 << ee;
          i |= W[ee], q &= ~Ne;
        }
      return i;
    }
    function sf(e, t) {
      for (var a = e.eventTimes, i = on; t > 0; ) {
        var o = Yl(t), s = 1 << o, v = a[o];
        v > i && (i = v), t &= ~s;
      }
      return i;
    }
    function Xy(e, t) {
      switch (e) {
        case rt:
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
          return on;
        case Ao:
        case bu:
        case Vl:
        case ka:
          return on;
        default:
          return g("Should have found matching lanes. This is a bug in React."), on;
      }
    }
    function Zy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = Yl(v), E = 1 << y, R = s[y];
        R === on ? ((E & i) === re || (E & o) !== re) && (s[y] = Xy(E, t)) : R <= t && (e.expiredLanes |= E), v &= ~E;
      }
    }
    function Jy(e) {
      return Ru(e.pendingLanes);
    }
    function Il(e) {
      var t = e.pendingLanes & ~ka;
      return t !== re ? t : t & ka ? ka : re;
    }
    function Gd(e) {
      return (e & rt) !== re;
    }
    function qs(e) {
      return (e & Qd) !== re;
    }
    function mv(e) {
      return (e & No) === e;
    }
    function yv(e) {
      var t = rt | il | Ia;
      return (e & t) === re;
    }
    function gv(e) {
      return (e & $l) === e;
    }
    function Qs(e, t) {
      var a = _i | il | _n | Ia;
      return (t & a) !== re;
    }
    function Sv(e, t) {
      return (t & e.expiredLanes) !== re;
    }
    function Kd(e) {
      return (e & $l) !== re;
    }
    function Ev() {
      var e = uf;
      return uf <<= 1, (uf & $l) === re && (uf = aa), e;
    }
    function la() {
      var e = Ys;
      return Ys <<= 1, (Ys & No) === re && (Ys = Mo), e;
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
      return (e & t) !== re;
    }
    function zo(e, t) {
      return (e & t) === t;
    }
    function gt(e, t) {
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
      e.pendingLanes |= t, t !== Vl && (e.suspendedLanes = re, e.pingedLanes = re);
      var i = e.eventTimes, o = cf(t);
      i[o] = a;
    }
    function Cv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Yl(i), s = 1 << o;
        a[o] = on, i &= ~s;
      }
    }
    function df(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function pf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = re, e.pingedLanes = re, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = Yl(v), E = 1 << y;
        i[y] = re, o[y] = on, s[y] = on, v &= ~E;
      }
    }
    function Xd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Yl(o), v = 1 << s;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~v;
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
          i = bu;
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
          var o = cf(a), s = 1 << o, v = i[o];
          v.add(t), a &= ~s;
        }
    }
    function Zd(e, t) {
      if (Ta)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = cf(t), s = 1 << o, v = a[o];
          v.size > 0 && (v.forEach(function(y) {
            var E = y.alternate;
            (E === null || !i.has(E)) && i.add(y);
          }), v.clear()), t &= ~s;
        }
    }
    function Xs(e, t) {
      return null;
    }
    var Fn = rt, ll = il, Oi = Ia, ku = Vl, _u = zn;
    function Ya() {
      return _u;
    }
    function On(e) {
      _u = e;
    }
    function Or(e, t) {
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
    function pr(e) {
      var t = Un(e);
      return Ou(Fn, t) ? Ou(ll, t) ? qs(t) ? Oi : ku : ll : Fn;
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
    function bv(e) {
      gf = e;
    }
    var ep;
    function Rv(e) {
      ep = e;
    }
    var Zs = !1, Nu = [], mn = null, rr = null, zr = null, Mu = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), ar = [], Tv = [
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
          rr = null;
          break;
        case "mouseover":
        case "mouseout":
          zr = null;
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
        var v = ag(t, a, i, o, s);
        if (t !== null) {
          var y = Iu(t);
          y !== null && mf(y);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var E = e.targetContainers;
      return o !== null && E.indexOf(o) === -1 && E.push(o), e;
    }
    function kv(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return mn = zu(mn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var v = o;
          return rr = zu(rr, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var y = o;
          return zr = zu(zr, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var E = o, R = E.pointerId;
          return Mu.set(R, zu(Mu.get(R) || null, e, t, a, i, E)), !0;
        }
        case "gotpointercapture": {
          var T = o, z = T.pointerId;
          return Au.set(z, zu(Au.get(z) || null, e, t, a, i, T)), !0;
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
      }, i = 0; i < ar.length && Ou(t, ar[i].priority); i++)
        ;
      ar.splice(i, 0, a), i === 0 && np(a);
    }
    function Fo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Dr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          qy(s), o.target.dispatchEvent(s), Zh();
        } else {
          var v = Iu(i);
          return v !== null && mf(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Sf(e, t, a) {
      Fo(e) && a.delete(t);
    }
    function Wa() {
      Zs = !1, mn !== null && Fo(mn) && (mn = null), rr !== null && Fo(rr) && (rr = null), zr !== null && Fo(zr) && (zr = null), Mu.forEach(Sf), Au.forEach(Sf);
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
      mn !== null && Rt(mn, e), rr !== null && Rt(rr, e), zr !== null && Rt(zr, e);
      var i = function(y) {
        return Rt(y, e);
      };
      Mu.forEach(i), Au.forEach(i);
      for (var o = 0; o < ar.length; o++) {
        var s = ar[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; ar.length > 0; ) {
        var v = ar[0];
        if (v.blockedOn !== null)
          break;
        np(v), v.blockedOn === null && ar.shift();
      }
    }
    var dn = h.ReactCurrentBatchConfig, Gn = !0;
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
      var o = Ya(), s = dn.transition;
      dn.transition = null;
      try {
        On(Fn), Fu(e, t, a, i);
      } finally {
        On(o), dn.transition = s;
      }
    }
    function jo(e, t, a, i) {
      var o = Ya(), s = dn.transition;
      dn.transition = null;
      try {
        On(ll), Fu(e, t, a, i);
      } finally {
        On(o), dn.transition = s;
      }
    }
    function Fu(e, t, a, i) {
      Gn && rp(e, t, a, i);
    }
    function rp(e, t, a, i) {
      var o = Dr(e, t, a, i);
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
          var v = Dr(e, t, a, i);
          if (v === null && Cg(e, t, i, Wl, a), v === o)
            break;
          o = v;
        }
        o !== null && i.stopPropagation();
        return;
      }
      Cg(e, t, i, null, a);
    }
    var Wl = null;
    function Dr(e, t, a, i) {
      Wl = null;
      var o = Zt(i), s = cc(o);
      if (s !== null) {
        var v = Fl(s);
        if (v === null)
          s = null;
        else {
          var y = v.tag;
          if (y === _e) {
            var E = $c(v);
            if (E !== null)
              return E;
            s = null;
          } else if (y === I) {
            var R = v.stateNode;
            if (vf(R))
              return Vc(v);
            s = null;
          } else v !== s && (s = null);
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
    var qa = null, Pu = null, Qa = null;
    function Cf(e) {
      return qa = e, Pu = tc(), !0;
    }
    function ec() {
      qa = null, Pu = null, Qa = null;
    }
    function xf() {
      if (Qa)
        return Qa;
      var e, t = Pu, a = t.length, i, o = tc(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === o[s - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return Qa = o.slice(e, y), Qa;
    }
    function tc() {
      return "value" in qa ? qa.value : qa.textContent;
    }
    function Po(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ir() {
      return !0;
    }
    function ul() {
      return !1;
    }
    function wn(e) {
      function t(a, i, o, s, v) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var E = e[y];
            E ? this[y] = E(s) : this[y] = s[y];
          }
        var R = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return R ? this.isDefaultPrevented = ir : this.isDefaultPrevented = ul, this.isPropagationStopped = ul, this;
      }
      return wt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ir);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ir);
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
        isPersistent: ir
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
    }, bf = wn(Xn), Ho = wt({}, Xn, {
      view: 0,
      detail: 0
    }), ip = wn(Ho), lp, Li, Hu;
    function op(e) {
      e !== Hu && (Hu && e.type === "mousemove" ? (lp = e.screenX - Hu.screenX, Li = e.screenY - Hu.screenY) : (lp = 0, Li = 0), Hu = e);
    }
    var Ni = wt({}, Ho, {
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
    }), Rf = wn(Ni), Bo = wt({}, Ni, {
      dataTransfer: 0
    }), _v = wn(Bo), Ov = wt({}, Ho, {
      relatedTarget: 0
    }), nc = wn(Ov), Tf = wt({}, Xn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), lg = wn(Tf), og = wt({}, Xn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Dv = wn(og), Lv = wt({}, Xn, {
      data: 0
    }), ql = wn(Lv), ug = ql, Bu = {
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
    var cg = wt({}, Ho, {
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
    }), Av = wn(cg), zv = wt({}, Ni, {
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
    }), Uv = wn(zv), Ga = wt({}, Ho, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: up
    }), sp = wn(Ga), fg = wt({}, Xn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ql = wn(fg), kf = wt({}, Ni, {
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
    }), $o = wn(kf), _f = [9, 13, 27, 32], Of = 229, rc = Rn && "CompositionEvent" in window, ac = null;
    Rn && "documentMode" in document && (ac = document.documentMode);
    var cp = Rn && "TextEvent" in window && !ac, Fv = Rn && (!rc || ac && ac > 8 && ac <= 11), fp = 32, dp = String.fromCharCode(fp);
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
      var s, v;
      if (rc ? s = pp(t) : Gl ? hp(t, i) && (s = "onCompositionEnd") : dg(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Fv && !lc(i) && (!Gl && s === "onCompositionStart" ? Gl = Cf(o) : s === "onCompositionEnd" && Gl && (v = xf()));
      var y = Iv(a, s);
      if (y.length > 0) {
        var E = new ql(s, t, null, i, o);
        if (e.push({
          event: E,
          listeners: y
        }), v)
          E.data = v;
        else {
          var R = Lf(i);
          R !== null && (E.data = R);
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
      var v = Iv(a, "onBeforeInput");
      if (v.length > 0) {
        var y = new ug("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: y,
          listeners: v
        }), y.data = s;
      }
    }
    function hg(e, t, a, i, o, s, v) {
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
      if (!Rn)
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
        var s = new bf("onChange", "change", null, a, i);
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
      r(t, u, e, Zt(e)), Ls(b, t);
    }
    function b(e) {
      QE(e, 0);
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
    var Q = !1;
    Rn && (Q = Af("input") && (!document.documentMode || document.documentMode > 9));
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
    function He(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function jn(e, t) {
      if (e === "click")
        return _(t);
    }
    function P(e, t) {
      if (e === "input" || e === "change")
        return _(t);
    }
    function A(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ot(e, "number", e.value);
    }
    function V(e, t, a, i, o, s, v) {
      var y = a ? Hf(a) : window, E, R;
      if (d(y) ? E = L : Hv(y) ? Q ? E = P : (E = Ue, R = Oe) : He(y) && (E = jn), E) {
        var T = E(t, a);
        if (T) {
          r(e, T, i, o);
          return;
        }
      }
      R && R(t, y, a), t === "focusout" && A(y);
    }
    function me() {
      Cr("onMouseEnter", ["mouseout", "mouseover"]), Cr("onMouseLeave", ["mouseout", "mouseover"]), Cr("onPointerEnter", ["pointerout", "pointerover"]), Cr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ye(e, t, a, i, o, s, v) {
      var y = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (y && !Jh(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (cc(R) || _p(R)))
          return;
      }
      if (!(!E && !y)) {
        var T;
        if (o.window === o)
          T = o;
        else {
          var z = o.ownerDocument;
          z ? T = z.defaultView || z.parentWindow : T = window;
        }
        var N, W;
        if (E) {
          var q = i.relatedTarget || i.toElement;
          if (N = a, W = q ? cc(q) : null, W !== null) {
            var ee = Fl(W);
            (W !== ee || W.tag !== X && W.tag !== Z) && (W = null);
          }
        } else
          N = null, W = a;
        if (N !== W) {
          var Ne = Rf, et = "onMouseLeave", qe = "onMouseEnter", Dt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ne = Uv, et = "onPointerLeave", qe = "onPointerEnter", Dt = "pointer");
          var Tt = N == null ? T : Hf(N), B = W == null ? T : Hf(W), te = new Ne(et, Dt + "leave", N, i, o);
          te.target = Tt, te.relatedTarget = B;
          var $ = null, pe = cc(o);
          if (pe === a) {
            var Me = new Ne(qe, Dt + "enter", W, i, o);
            Me.target = B, Me.relatedTarget = Tt, $ = Me;
          }
          eR(e, te, $, N, W);
        }
      }
    }
    function at(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Fe = typeof Object.is == "function" ? Object.is : at;
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
        if (!ur.call(t, s) || !Fe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Zn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ft(e) {
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
        a = Zn(Ft(a));
      }
    }
    function vg(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, v = i.focusNode, y = i.focusOffset;
      try {
        o.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return Ab(e, o, s, v, y);
    }
    function Ab(e, t, a, i, o) {
      var s = 0, v = -1, y = -1, E = 0, R = 0, T = e, z = null;
      e: for (; ; ) {
        for (var N = null; T === t && (a === 0 || T.nodeType === Xi) && (v = s + a), T === i && (o === 0 || T.nodeType === Xi) && (y = s + o), T.nodeType === Xi && (s += T.nodeValue.length), (N = T.firstChild) !== null; )
          z = T, T = N;
        for (; ; ) {
          if (T === e)
            break e;
          if (z === t && ++E === a && (v = s), z === i && ++R === o && (y = s), (N = T.nextSibling) !== null)
            break;
          T = z, z = T.parentNode;
        }
        T = N;
      }
      return v === -1 || y === -1 ? null : {
        start: v,
        end: y
      };
    }
    function zb(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, v = Math.min(t.start, s), y = t.end === void 0 ? v : Math.min(t.end, s);
        if (!o.extend && v > y) {
          var E = y;
          y = v, v = E;
        }
        var R = sl(e, v), T = sl(e, y);
        if (R && T) {
          if (o.rangeCount === 1 && o.anchorNode === R.node && o.anchorOffset === R.offset && o.focusNode === T.node && o.focusOffset === T.offset)
            return;
          var z = a.createRange();
          z.setStart(R.node, R.offset), o.removeAllRanges(), v > y ? (o.addRange(z), o.extend(T.node, T.offset)) : (z.setEnd(T.node, T.offset), o.addRange(z));
        }
      }
    }
    function UE(e) {
      return e && e.nodeType === Xi;
    }
    function FE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : UE(e) ? !1 : UE(t) ? FE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Ub(e) {
      return e && e.ownerDocument && FE(e.ownerDocument.documentElement, e);
    }
    function Fb(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function jE() {
      for (var e = window, t = wi(); t instanceof e.HTMLIFrameElement; ) {
        if (Fb(t))
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
    function jb() {
      var e = jE();
      return {
        focusedElem: e,
        selectionRange: mg(e) ? Hb(e) : null
      };
    }
    function Pb(e) {
      var t = jE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Ub(a)) {
        i !== null && mg(a) && Bb(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Zr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < o.length; v++) {
          var y = o[v];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function Hb(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = vg(e), t || {
        start: 0,
        end: 0
      };
    }
    function Bb(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : zb(e, t);
    }
    var $b = Rn && "documentMode" in document && document.documentMode <= 11;
    function Vb() {
      Yr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var zf = null, yg = null, vp = null, gg = !1;
    function Ib(e) {
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
    function Yb(e) {
      return e.window === e ? e.document : e.nodeType === wa ? e : e.ownerDocument;
    }
    function PE(e, t, a) {
      var i = Yb(a);
      if (!(gg || zf == null || zf !== wi(i))) {
        var o = Ib(zf);
        if (!vp || !it(vp, o)) {
          vp = o;
          var s = Iv(yg, "onSelect");
          if (s.length > 0) {
            var v = new bf("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: s
            }), v.target = zf;
          }
        }
      }
    }
    function Wb(e, t, a, i, o, s, v) {
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
          gg = !1, PE(e, i, o);
          break;
        case "selectionchange":
          if ($b)
            break;
        case "keydown":
        case "keyup":
          PE(e, i, o);
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
    }, Sg = {}, HE = {};
    Rn && (HE = document.createElement("div").style, "AnimationEvent" in window || (delete Uf.animationend.animation, delete Uf.animationiteration.animation, delete Uf.animationstart.animation), "TransitionEvent" in window || delete Uf.transitionend.transition);
    function $v(e) {
      if (Sg[e])
        return Sg[e];
      if (!Uf[e])
        return e;
      var t = Uf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in HE)
          return Sg[e] = t[a];
      return e;
    }
    var BE = $v("animationend"), $E = $v("animationiteration"), VE = $v("animationstart"), IE = $v("transitionend"), YE = /* @__PURE__ */ new Map(), WE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function $u(e, t) {
      YE.set(e, t), Yr(t, [e]);
    }
    function qb() {
      for (var e = 0; e < WE.length; e++) {
        var t = WE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        $u(a, "on" + i);
      }
      $u(BE, "onAnimationEnd"), $u($E, "onAnimationIteration"), $u(VE, "onAnimationStart"), $u("dblclick", "onDoubleClick"), $u("focusin", "onFocus"), $u("focusout", "onBlur"), $u(IE, "onTransitionEnd");
    }
    function Qb(e, t, a, i, o, s, v) {
      var y = YE.get(t);
      if (y !== void 0) {
        var E = bf, R = t;
        switch (t) {
          case "keypress":
            if (Po(i) === 0)
              return;
          case "keydown":
          case "keyup":
            E = Av;
            break;
          case "focusin":
            R = "focus", E = nc;
            break;
          case "focusout":
            R = "blur", E = nc;
            break;
          case "beforeblur":
          case "afterblur":
            E = nc;
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
            E = Rf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = _v;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = sp;
            break;
          case BE:
          case $E:
          case VE:
            E = lg;
            break;
          case IE:
            E = Ql;
            break;
          case "scroll":
            E = ip;
            break;
          case "wheel":
            E = $o;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Dv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Uv;
            break;
        }
        var T = (s & Os) !== 0;
        {
          var z = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = Zb(a, y, i.type, T, z);
          if (N.length > 0) {
            var W = new E(y, R, null, i, o);
            e.push({
              event: W,
              listeners: N
            });
          }
        }
      }
    }
    qb(), me(), n(), Vb(), Df();
    function Gb(e, t, a, i, o, s, v) {
      Qb(e, t, a, i, o, s);
      var y = (s & Wy) === 0;
      y && (Ye(e, t, a, i, o), V(e, t, a, i, o), Wb(e, t, a, i, o), hg(e, t, a, i, o));
    }
    var mp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Eg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(mp));
    function qE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, zd(i, t, void 0, e), e.currentTarget = null;
    }
    function Kb(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], v = s.instance, y = s.currentTarget, E = s.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          qE(e, E, y), i = v;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var T = t[R], z = T.instance, N = T.currentTarget, W = T.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          qE(e, W, N), i = z;
        }
    }
    function QE(e, t) {
      for (var a = (t & Os) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, v = o.listeners;
        Kb(s, v, a);
      }
      Qy();
    }
    function Xb(e, t, a, i, o) {
      var s = Zt(a), v = [];
      Gb(v, e, i, a, s, t), QE(v, t);
    }
    function Cn(e, t) {
      Eg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = kT(t), o = tR(e);
      i.has(o) || (GE(t, e, _s, a), i.add(o));
    }
    function wg(e, t, a) {
      Eg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Os), GE(a, e, i, t);
    }
    var Vv = "_reactListening" + Math.random().toString(36).slice(2);
    function yp(e) {
      if (!e[Vv]) {
        e[Vv] = !0, bt.forEach(function(a) {
          a !== "selectionchange" && (Eg.has(a) || wg(a, !1, e), wg(a, !0, e));
        });
        var t = e.nodeType === wa ? e : e.ownerDocument;
        t !== null && (t[Vv] || (t[Vv] = !0, wg("selectionchange", !1, t)));
      }
    }
    function GE(e, t, a, i, o) {
      var s = Kn(e, t, a), v = void 0;
      Ns && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? wf(e, t, s, v) : ol(e, t, s) : v !== void 0 ? ap(e, t, s, v) : ju(e, t, s);
    }
    function KE(e, t) {
      return e === t || e.nodeType === Tn && e.parentNode === t;
    }
    function Cg(e, t, a, i, o) {
      var s = i;
      if (!(t & Fc) && !(t & _s)) {
        var v = o;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var E = y.tag;
            if (E === I || E === oe) {
              var R = y.stateNode.containerInfo;
              if (KE(R, v))
                break;
              if (E === oe)
                for (var T = y.return; T !== null; ) {
                  var z = T.tag;
                  if (z === I || z === oe) {
                    var N = T.stateNode.containerInfo;
                    if (KE(N, v))
                      return;
                  }
                  T = T.return;
                }
              for (; R !== null; ) {
                var W = cc(R);
                if (W === null)
                  return;
                var q = W.tag;
                if (q === X || q === Z) {
                  y = s = W;
                  continue e;
                }
                R = R.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      Ls(function() {
        return Xb(e, t, a, s);
      });
    }
    function gp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Zb(e, t, a, i, o, s) {
      for (var v = t !== null ? t + "Capture" : null, y = i ? v : t, E = [], R = e, T = null; R !== null; ) {
        var z = R, N = z.stateNode, W = z.tag;
        if (W === X && N !== null && (T = N, y !== null)) {
          var q = xo(R, y);
          q != null && E.push(gp(R, q, T));
        }
        if (o)
          break;
        R = R.return;
      }
      return E;
    }
    function Iv(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, v = s.stateNode, y = s.tag;
        if (y === X && v !== null) {
          var E = v, R = xo(o, a);
          R != null && i.unshift(gp(o, R, E));
          var T = xo(o, t);
          T != null && i.push(gp(o, T, E));
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
      while (e && e.tag !== X);
      return e || null;
    }
    function Jb(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Ff(s))
        o++;
      for (var v = 0, y = i; y; y = Ff(y))
        v++;
      for (; o - v > 0; )
        a = Ff(a), o--;
      for (; v - o > 0; )
        i = Ff(i), v--;
      for (var E = o; E--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ff(a), i = Ff(i);
      }
      return null;
    }
    function XE(e, t, a, i, o) {
      for (var s = t._reactName, v = [], y = a; y !== null && y !== i; ) {
        var E = y, R = E.alternate, T = E.stateNode, z = E.tag;
        if (R !== null && R === i)
          break;
        if (z === X && T !== null) {
          var N = T;
          if (o) {
            var W = xo(y, s);
            W != null && v.unshift(gp(y, W, N));
          } else if (!o) {
            var q = xo(y, s);
            q != null && v.push(gp(y, q, N));
          }
        }
        y = y.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function eR(e, t, a, i, o) {
      var s = i && o ? Jb(i, o) : null;
      i !== null && XE(e, t, i, s, !1), o !== null && a !== null && XE(e, a, o, s, !0);
    }
    function tR(e, t) {
      return e + "__bubble";
    }
    var Ka = !1, Sp = "dangerouslySetInnerHTML", Yv = "suppressContentEditableWarning", Vu = "suppressHydrationWarning", ZE = "autoFocus", uc = "children", sc = "style", Wv = "__html", xg, qv, Ep, JE, Qv, e1, t1;
    xg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, qv = function(e, t) {
      du(e, t), qh(e, t), Ml(e, t, {
        registrationNameDependencies: bn,
        possibleRegistrationNames: Wn
      });
    }, e1 = Rn && !document.documentMode, Ep = function(e, t, a) {
      if (!Ka) {
        var i = Gv(a), o = Gv(t);
        o !== i && (Ka = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, JE = function(e) {
      if (!Ka) {
        Ka = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Qv = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, t1 = function(e, t) {
      var a = e.namespaceURI === Ki ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var nR = /\r\n?/g, rR = /\u0000|\uFFFD/g;
    function Gv(e) {
      va(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(nR, `
`).replace(rR, "");
    }
    function Kv(e, t, a, i) {
      var o = Gv(t), s = Gv(e);
      if (s !== o && (i && (Ka || (Ka = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && K))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function n1(e) {
      return e.nodeType === wa ? e : e.ownerDocument;
    }
    function aR() {
    }
    function Xv(e) {
      e.onclick = aR;
    }
    function iR(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var v = i[s];
          if (s === sc)
            v && Object.freeze(v), Bh(t, v);
          else if (s === Sp) {
            var y = v ? v[Wv] : void 0;
            y != null && Nh(t, y);
          } else if (s === uc)
            if (typeof v == "string") {
              var E = e !== "textarea" || v !== "";
              E && Cs(t, v);
            } else typeof v == "number" && Cs(t, "" + v);
          else s === Yv || s === Vu || s === ZE || (bn.hasOwnProperty(s) ? v != null && (typeof v != "function" && Qv(s, v), s === "onScroll" && Cn("scroll", t)) : v != null && $i(t, s, v, o));
        }
    }
    function lR(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], v = t[o + 1];
        s === sc ? Bh(e, v) : s === Sp ? Nh(e, v) : s === uc ? Cs(e, v) : $i(e, s, v, i);
      }
    }
    function oR(e, t, a, i) {
      var o, s = n1(a), v, y = i;
      if (y === Ki && (y = yd(e)), y === Ki) {
        if (o = Eo(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = s.createElement("div");
          E.innerHTML = "<script><\/script>";
          var R = E.firstChild;
          v = E.removeChild(R);
        } else if (typeof t.is == "string")
          v = s.createElement(e, {
            is: t.is
          });
        else if (v = s.createElement(e), e === "select") {
          var T = v;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        v = s.createElementNS(y, e);
      return y === Ki && !o && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !ur.call(xg, e) && (xg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function uR(e, t) {
      return n1(t).createTextNode(e);
    }
    function sR(e, t, a, i) {
      var o = Eo(t, a);
      qv(t, a);
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
          for (var v = 0; v < mp.length; v++)
            Cn(mp[v], e);
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
          O(e, a), s = w(e, a), Cn("invalid", e);
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
      switch (Rs(t, s), iR(t, e, i, s, o), t) {
        case "input":
          qi(e), ve(e, a, !1);
          break;
        case "textarea":
          qi(e), Dc(e);
          break;
        case "option":
          Gt(e, a);
          break;
        case "select":
          vd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Xv(e);
          break;
      }
    }
    function cR(e, t, a, i, o) {
      qv(t, i);
      var s = null, v, y;
      switch (t) {
        case "input":
          v = w(e, a), y = w(e, i), s = [];
          break;
        case "select":
          v = Es(e, a), y = Es(e, i), s = [];
          break;
        case "textarea":
          v = md(e, a), y = md(e, i), s = [];
          break;
        default:
          v = a, y = i, typeof v.onClick != "function" && typeof y.onClick == "function" && Xv(e);
          break;
      }
      Rs(t, y);
      var E, R, T = null;
      for (E in v)
        if (!(y.hasOwnProperty(E) || !v.hasOwnProperty(E) || v[E] == null))
          if (E === sc) {
            var z = v[E];
            for (R in z)
              z.hasOwnProperty(R) && (T || (T = {}), T[R] = "");
          } else E === Sp || E === uc || E === Yv || E === Vu || E === ZE || (bn.hasOwnProperty(E) ? s || (s = []) : (s = s || []).push(E, null));
      for (E in y) {
        var N = y[E], W = v != null ? v[E] : void 0;
        if (!(!y.hasOwnProperty(E) || N === W || N == null && W == null))
          if (E === sc)
            if (N && Object.freeze(N), W) {
              for (R in W)
                W.hasOwnProperty(R) && (!N || !N.hasOwnProperty(R)) && (T || (T = {}), T[R] = "");
              for (R in N)
                N.hasOwnProperty(R) && W[R] !== N[R] && (T || (T = {}), T[R] = N[R]);
            } else
              T || (s || (s = []), s.push(E, T)), T = N;
          else if (E === Sp) {
            var q = N ? N[Wv] : void 0, ee = W ? W[Wv] : void 0;
            q != null && ee !== q && (s = s || []).push(E, q);
          } else E === uc ? (typeof N == "string" || typeof N == "number") && (s = s || []).push(E, "" + N) : E === Yv || E === Vu || (bn.hasOwnProperty(E) ? (N != null && (typeof N != "function" && Qv(E, N), E === "onScroll" && Cn("scroll", e)), !s && W !== N && (s = [])) : (s = s || []).push(E, N));
      }
      return T && ($h(T, y[sc]), (s = s || []).push(sc, T)), s;
    }
    function fR(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && Y(e, o);
      var s = Eo(a, i), v = Eo(a, o);
      switch (lR(e, t, s, v), a) {
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
    function dR(e) {
      {
        var t = e.toLowerCase();
        return Ac.hasOwnProperty(t) && Ac[t] || null;
      }
    }
    function pR(e, t, a, i, o, s, v) {
      var y, E;
      switch (y = Eo(t, a), qv(t, a), t) {
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
          for (var R = 0; R < mp.length; R++)
            Cn(mp[R], e);
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
      Rs(t, a);
      {
        E = /* @__PURE__ */ new Set();
        for (var T = e.attributes, z = 0; z < T.length; z++) {
          var N = T[z].name.toLowerCase();
          switch (N) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(T[z].name);
          }
        }
      }
      var W = null;
      for (var q in a)
        if (a.hasOwnProperty(q)) {
          var ee = a[q];
          if (q === uc)
            typeof ee == "string" ? e.textContent !== ee && (a[Vu] !== !0 && Kv(e.textContent, ee, s, v), W = [uc, ee]) : typeof ee == "number" && e.textContent !== "" + ee && (a[Vu] !== !0 && Kv(e.textContent, ee, s, v), W = [uc, "" + ee]);
          else if (bn.hasOwnProperty(q))
            ee != null && (typeof ee != "function" && Qv(q, ee), q === "onScroll" && Cn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Ne = void 0, et = y && $e ? null : tr(q);
            if (a[Vu] !== !0) {
              if (!(q === Yv || q === Vu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              q === "value" || q === "checked" || q === "selected")) {
                if (q === Sp) {
                  var qe = e.innerHTML, Dt = ee ? ee[Wv] : void 0;
                  if (Dt != null) {
                    var Tt = t1(e, Dt);
                    Tt !== qe && Ep(q, qe, Tt);
                  }
                } else if (q === sc) {
                  if (E.delete(q), e1) {
                    var B = Yy(ee);
                    Ne = e.getAttribute("style"), B !== Ne && Ep(q, Ne, B);
                  }
                } else if (y && !$e)
                  E.delete(q.toLowerCase()), Ne = Aa(e, q, ee), ee !== Ne && Ep(q, Ne, ee);
                else if (!yn(q, et, y) && !Wt(q, ee, et, y)) {
                  var te = !1;
                  if (et !== null)
                    E.delete(et.attributeName), Ne = ii(e, q, ee, et);
                  else {
                    var $ = i;
                    if ($ === Ki && ($ = yd(t)), $ === Ki)
                      E.delete(q.toLowerCase());
                    else {
                      var pe = dR(q);
                      pe !== null && pe !== q && (te = !0, E.delete(pe)), E.delete(q);
                    }
                    Ne = Aa(e, q, ee);
                  }
                  var Me = $e;
                  !Me && ee !== Ne && !te && Ep(q, Ne, ee);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && a[Vu] !== !0 && JE(E), t) {
        case "input":
          qi(e), ve(e, a, !0);
          break;
        case "textarea":
          qi(e), Dc(e);
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
    function hR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function bg(e, t) {
      {
        if (Ka)
          return;
        Ka = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Rg(e, t) {
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
    function vR(e, t, a) {
      switch (t) {
        case "input":
          Pe(e, a);
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
      var mR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], r1 = [
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
      ], yR = r1.concat(["button"]), gR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], a1 = {
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
        var a = wt({}, e || a1), i = {
          tag: t
        };
        return r1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), yR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), mR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var SR = function(e, t) {
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
            return gR.indexOf(t) === -1;
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
      }, ER = function(e, t) {
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
      }, i1 = {};
      wp = function(e, t, a) {
        a = a || a1;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = SR(e, o) ? null : i, v = s ? null : ER(e, a), y = s || v;
        if (y) {
          var E = y.tag, R = !!s + "|" + e + "|" + E;
          if (!i1[R]) {
            i1[R] = !0;
            var T = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var N = "";
              E === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, E, z, N);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, E);
          }
        }
      };
    }
    var Zv = "suppressHydrationWarning", Jv = "$", em = "/$", xp = "$?", bp = "$!", wR = "style", _g = null, Og = null;
    function CR(e) {
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
          var s = i === Tn ? e.parentNode : e, v = s.namespaceURI || null;
          t = s.tagName, a = gd(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), E = Cp(null, y);
        return {
          namespace: a,
          ancestorInfo: E
        };
      }
    }
    function xR(e, t, a) {
      {
        var i = e, o = gd(i.namespace, t), s = Cp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function EM(e) {
      return e;
    }
    function bR(e) {
      _g = Uu(), Og = jb();
      var t = null;
      return ua(!1), t;
    }
    function RR(e) {
      Pb(Og), ua(_g), _g = null, Og = null;
    }
    function TR(e, t, a, i, o) {
      var s;
      {
        var v = i;
        if (wp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, E = Cp(v.ancestorInfo, e);
          wp(null, y, E);
        }
        s = v.namespace;
      }
      var R = oR(e, t, a, s);
      return kp(o, R), Fg(R, t), R;
    }
    function kR(e, t) {
      e.appendChild(t);
    }
    function _R(e, t, a, i, o) {
      switch (sR(e, t, a, i), t) {
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
    function OR(e, t, a, i, o, s) {
      {
        var v = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, E = Cp(v.ancestorInfo, t);
          wp(null, y, E);
        }
      }
      return cR(e, t, a, i);
    }
    function Dg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function DR(e, t, a, i) {
      {
        var o = a;
        wp(null, e, o.ancestorInfo);
      }
      var s = uR(e, t);
      return kp(i, s), s;
    }
    function LR() {
      var e = window.event;
      return e === void 0 ? Oi : Ef(e.type);
    }
    var Lg = typeof setTimeout == "function" ? setTimeout : void 0, NR = typeof clearTimeout == "function" ? clearTimeout : void 0, Ng = -1, l1 = typeof Promise == "function" ? Promise : void 0, MR = typeof queueMicrotask == "function" ? queueMicrotask : typeof l1 < "u" ? function(e) {
      return l1.resolve(null).then(e).catch(AR);
    } : Lg;
    function AR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function zR(e, t, a, i) {
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
    function UR(e, t, a, i, o, s) {
      fR(e, t, a, i, o), Fg(e, o);
    }
    function o1(e) {
      Cs(e, "");
    }
    function FR(e, t, a) {
      e.nodeValue = a;
    }
    function jR(e, t) {
      e.appendChild(t);
    }
    function PR(e, t) {
      var a;
      e.nodeType === Tn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Xv(a);
    }
    function HR(e, t, a) {
      e.insertBefore(t, a);
    }
    function BR(e, t, a) {
      e.nodeType === Tn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $R(e, t) {
      e.removeChild(t);
    }
    function VR(e, t) {
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
          else (s === Jv || s === xp || s === bp) && i++;
        }
        a = o;
      } while (a);
      Dn(t);
    }
    function IR(e, t) {
      e.nodeType === Tn ? Mg(e.parentNode, t) : e.nodeType === Zr && Mg(e, t), Dn(e);
    }
    function YR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function WR(e) {
      e.nodeValue = "";
    }
    function qR(e, t) {
      e = e;
      var a = t[wR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ll("display", i);
    }
    function QR(e, t) {
      e.nodeValue = t;
    }
    function GR(e) {
      e.nodeType === Zr ? e.textContent = "" : e.nodeType === wa && e.documentElement && e.removeChild(e.documentElement);
    }
    function KR(e, t, a) {
      return e.nodeType !== Zr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function XR(e, t) {
      return t === "" || e.nodeType !== Xi ? null : e;
    }
    function ZR(e) {
      return e.nodeType !== Tn ? null : e;
    }
    function u1(e) {
      return e.data === xp;
    }
    function Ag(e) {
      return e.data === bp;
    }
    function JR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function eT(e, t) {
      e._reactRetry = t;
    }
    function tm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Zr || t === Xi)
          break;
        if (t === Tn) {
          var a = e.data;
          if (a === Jv || a === bp || a === xp)
            break;
          if (a === em)
            return null;
        }
      }
      return e;
    }
    function Rp(e) {
      return tm(e.nextSibling);
    }
    function tT(e) {
      return tm(e.firstChild);
    }
    function nT(e) {
      return tm(e.firstChild);
    }
    function rT(e) {
      return tm(e.nextSibling);
    }
    function aT(e, t, a, i, o, s, v) {
      kp(s, e), Fg(e, a);
      var y;
      {
        var E = o;
        y = E.namespace;
      }
      var R = (s.mode & We) !== Je;
      return pR(e, t, a, y, i, R, v);
    }
    function iT(e, t, a, i) {
      return kp(a, e), a.mode & We, hR(e, t);
    }
    function lT(e, t) {
      kp(t, e);
    }
    function oT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Tn) {
          var i = t.data;
          if (i === em) {
            if (a === 0)
              return Rp(t);
            a--;
          } else (i === Jv || i === bp || i === xp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function s1(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Tn) {
          var i = t.data;
          if (i === Jv || i === bp || i === xp) {
            if (a === 0)
              return t;
            a--;
          } else i === em && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function uT(e) {
      Dn(e);
    }
    function sT(e) {
      Dn(e);
    }
    function cT(e) {
      return e !== "head" && e !== "body";
    }
    function fT(e, t, a, i) {
      var o = !0;
      Kv(t.nodeValue, a, i, o);
    }
    function dT(e, t, a, i, o, s) {
      if (t[Zv] !== !0) {
        var v = !0;
        Kv(i.nodeValue, o, s, v);
      }
    }
    function pT(e, t) {
      t.nodeType === Zr ? bg(e, t) : t.nodeType === Tn || Rg(e, t);
    }
    function hT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Zr ? bg(a, t) : t.nodeType === Tn || Rg(a, t));
      }
    }
    function vT(e, t, a, i, o) {
      (o || t[Zv] !== !0) && (i.nodeType === Zr ? bg(a, i) : i.nodeType === Tn || Rg(a, i));
    }
    function mT(e, t, a) {
      Tg(e, t);
    }
    function yT(e, t) {
      kg(e, t);
    }
    function gT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Tg(i, t);
      }
    }
    function ST(e, t) {
      {
        var a = e.parentNode;
        a !== null && kg(a, t);
      }
    }
    function ET(e, t, a, i, o, s) {
      (s || t[Zv] !== !0) && Tg(a, i);
    }
    function wT(e, t, a, i, o) {
      (o || t[Zv] !== !0) && kg(a, i);
    }
    function CT(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function xT(e) {
      yp(e);
    }
    var jf = Math.random().toString(36).slice(2), Pf = "__reactFiber$" + jf, zg = "__reactProps$" + jf, Tp = "__reactContainer$" + jf, Ug = "__reactEvents$" + jf, bT = "__reactListeners$" + jf, RT = "__reactHandles$" + jf;
    function TT(e) {
      delete e[Pf], delete e[zg], delete e[Ug], delete e[bT], delete e[RT];
    }
    function kp(e, t) {
      t[Pf] = e;
    }
    function nm(e, t) {
      t[Tp] = e;
    }
    function c1(e) {
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
            for (var o = s1(e); o !== null; ) {
              var s = o[Pf];
              if (s)
                return s;
              o = s1(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Iu(e) {
      var t = e[Pf] || e[Tp];
      return t && (t.tag === X || t.tag === Z || t.tag === _e || t.tag === I) ? t : null;
    }
    function Hf(e) {
      if (e.tag === X || e.tag === Z)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function rm(e) {
      return e[zg] || null;
    }
    function Fg(e, t) {
      e[zg] = t;
    }
    function kT(e) {
      var t = e[Ug];
      return t === void 0 && (t = e[Ug] = /* @__PURE__ */ new Set()), t;
    }
    var f1 = {}, d1 = h.ReactDebugCurrentFrame;
    function am(e) {
      if (e) {
        var t = e._owner, a = kt(e.type, e._source, t ? t.type : null);
        d1.setExtraStackFrame(a);
      } else
        d1.setExtraStackFrame(null);
    }
    function cl(e, t, a, i, o) {
      {
        var s = Function.call.bind(ur);
        for (var v in e)
          if (s(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var E = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              y = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              y = R;
            }
            y && !(y instanceof Error) && (am(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof y), am(null)), y instanceof Error && !(y.message in f1) && (f1[y.message] = !0, am(o), g("Failed %s type: %s", a, y.message), am(null));
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
    function p1(e, t, a) {
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
        for (var v in i)
          s[v] = t[v];
        {
          var y = dt(e) || "Unknown";
          cl(i, s, "context", y);
        }
        return o && p1(e, t, s), s;
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
    function h1(e, t, a) {
      {
        if (Io.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca(Io, t, e), ca(Kl, a, e);
      }
    }
    function v1(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = dt(e) || "Unknown";
            Pg[s] || (Pg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var y in v)
          if (!(y in o))
            throw new Error((dt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var E = dt(e) || "Unknown";
          cl(o, v, "child context", E);
        }
        return wt({}, a, v);
      }
    }
    function um(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return Hg = Io.current, ca(Io, a, e), ca(Kl, Kl.current, e), !0;
      }
    }
    function m1(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = v1(e, t, Hg);
          i.__reactInternalMemoizedMergedChildContext = o, sa(Kl, e), sa(Io, e), ca(Io, o, e), ca(Kl, a, e);
        } else
          sa(Kl, e), ca(Kl, a, e);
      }
    }
    function _T(e) {
      {
        if (!ba(e) || e.tag !== M)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case I:
              return t.stateNode.context;
            case M: {
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
    function y1(e) {
      Yo === null ? Yo = [e] : Yo.push(e);
    }
    function OT(e) {
      $g = !0, y1(e);
    }
    function g1() {
      $g && qu();
    }
    function qu() {
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
          throw Yo !== null && (Yo = Yo.slice(e + 1)), Pd(ra, qu), s;
        } finally {
          On(t), Vg = !1;
        }
      }
      return null;
    }
    var Vf = [], If = 0, cm = null, fm = 0, Mi = [], Ai = 0, fc = null, Wo = 1, qo = "";
    function DT(e) {
      return pc(), (e.flags & av) !== Ze;
    }
    function LT(e) {
      return pc(), fm;
    }
    function NT() {
      var e = qo, t = Wo, a = t & ~MT(t);
      return a.toString(32) + e;
    }
    function dc(e, t) {
      pc(), Vf[If++] = fm, Vf[If++] = cm, cm = e, fm = t;
    }
    function S1(e, t, a) {
      pc(), Mi[Ai++] = Wo, Mi[Ai++] = qo, Mi[Ai++] = fc, fc = e;
      var i = Wo, o = qo, s = dm(i) - 1, v = i & ~(1 << s), y = a + 1, E = dm(t) + s;
      if (E > 30) {
        var R = s - s % 5, T = (1 << R) - 1, z = (v & T).toString(32), N = v >> R, W = s - R, q = dm(t) + W, ee = y << W, Ne = ee | N, et = z + o;
        Wo = 1 << q | Ne, qo = et;
      } else {
        var qe = y << s, Dt = qe | v, Tt = o;
        Wo = 1 << E | Dt, qo = Tt;
      }
    }
    function Ig(e) {
      pc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        dc(e, a), S1(e, a, i);
      }
    }
    function dm(e) {
      return 32 - Bs(e);
    }
    function MT(e) {
      return 1 << dm(e) - 1;
    }
    function Yg(e) {
      for (; e === cm; )
        cm = Vf[--If], Vf[If] = null, fm = Vf[--If], Vf[If] = null;
      for (; e === fc; )
        fc = Mi[--Ai], Mi[Ai] = null, qo = Mi[--Ai], Mi[Ai] = null, Wo = Mi[--Ai], Mi[Ai] = null;
    }
    function AT() {
      return pc(), fc !== null ? {
        id: Wo,
        overflow: qo
      } : null;
    }
    function zT(e, t) {
      pc(), Mi[Ai++] = Wo, Mi[Ai++] = qo, Mi[Ai++] = fc, Wo = t.id, qo = t.overflow, fc = e;
    }
    function pc() {
      Fr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, zi = null, fl = !1, hc = !1, Qu = null;
    function UT() {
      fl && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function E1() {
      hc = !0;
    }
    function FT() {
      return hc;
    }
    function jT(e) {
      var t = e.stateNode.containerInfo;
      return zi = nT(t), Ur = e, fl = !0, Qu = null, hc = !1, !0;
    }
    function PT(e, t, a) {
      return zi = rT(t), Ur = e, fl = !0, Qu = null, hc = !1, a !== null && zT(e, a), !0;
    }
    function w1(e, t) {
      switch (e.tag) {
        case I: {
          pT(e.stateNode.containerInfo, t);
          break;
        }
        case X: {
          var a = (e.mode & We) !== Je;
          vT(
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
          i.dehydrated !== null && hT(i.dehydrated, t);
          break;
        }
      }
    }
    function C1(e, t) {
      w1(e, t);
      var a = $O();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ut) : i.push(a);
    }
    function Wg(e, t) {
      {
        if (hc)
          return;
        switch (e.tag) {
          case I: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case X:
                var i = t.type;
                t.pendingProps, mT(a, i);
                break;
              case Z:
                var o = t.pendingProps;
                yT(a, o);
                break;
            }
            break;
          }
          case X: {
            var s = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case X: {
                var E = t.type, R = t.pendingProps, T = (e.mode & We) !== Je;
                ET(
                  s,
                  v,
                  y,
                  E,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case Z: {
                var z = t.pendingProps, N = (e.mode & We) !== Je;
                wT(
                  s,
                  v,
                  y,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
            }
            break;
          }
          case _e: {
            var W = e.memoizedState, q = W.dehydrated;
            if (q !== null) switch (t.tag) {
              case X:
                var ee = t.type;
                t.pendingProps, gT(q, ee);
                break;
              case Z:
                var Ne = t.pendingProps;
                ST(q, Ne);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function x1(e, t) {
      t.flags = t.flags & ~bi | Jt, Wg(e, t);
    }
    function b1(e, t) {
      switch (e.tag) {
        case X: {
          var a = e.type;
          e.pendingProps;
          var i = KR(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, zi = tT(i), !0) : !1;
        }
        case Z: {
          var o = e.pendingProps, s = XR(t, o);
          return s !== null ? (e.stateNode = s, Ur = e, zi = null, !0) : !1;
        }
        case _e: {
          var v = ZR(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: AT(),
              retryLane: ka
            };
            e.memoizedState = y;
            var E = VO(v);
            return E.return = e, e.child = E, Ur = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function qg(e) {
      return (e.mode & We) !== Je && (e.flags & pt) === Ze;
    }
    function Qg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Gg(e) {
      if (fl) {
        var t = zi;
        if (!t) {
          qg(e) && (Wg(Ur, e), Qg()), x1(Ur, e), fl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!b1(e, t)) {
          qg(e) && (Wg(Ur, e), Qg()), t = Rp(a);
          var i = Ur;
          if (!t || !b1(e, t)) {
            x1(Ur, e), fl = !1, Ur = e;
            return;
          }
          C1(i, a);
        }
      }
    }
    function HT(e, t, a) {
      var i = e.stateNode, o = !hc, s = aT(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function BT(e) {
      var t = e.stateNode, a = e.memoizedProps, i = iT(t, a, e);
      if (i) {
        var o = Ur;
        if (o !== null)
          switch (o.tag) {
            case I: {
              var s = o.stateNode.containerInfo, v = (o.mode & We) !== Je;
              fT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case X: {
              var y = o.type, E = o.memoizedProps, R = o.stateNode, T = (o.mode & We) !== Je;
              dT(
                y,
                E,
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
    function $T(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      lT(a, e);
    }
    function VT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return oT(a);
    }
    function R1(e) {
      for (var t = e.return; t !== null && t.tag !== X && t.tag !== I && t.tag !== _e; )
        t = t.return;
      Ur = t;
    }
    function pm(e) {
      if (e !== Ur)
        return !1;
      if (!fl)
        return R1(e), fl = !0, !1;
      if (e.tag !== I && (e.tag !== X || cT(e.type) && !Dg(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (qg(e))
            T1(e), Qg();
          else
            for (; t; )
              C1(e, t), t = Rp(t);
      }
      return R1(e), e.tag === _e ? zi = VT(e) : zi = Ur ? Rp(e.stateNode) : null, !0;
    }
    function IT() {
      return fl && zi !== null;
    }
    function T1(e) {
      for (var t = zi; t; )
        w1(e, t), t = Rp(t);
    }
    function Yf() {
      Ur = null, zi = null, fl = !1, hc = !1;
    }
    function k1() {
      Qu !== null && (wC(Qu), Qu = null);
    }
    function Fr() {
      return fl;
    }
    function Kg(e) {
      Qu === null ? Qu = [e] : Qu.push(e);
    }
    var YT = h.ReactCurrentBatchConfig, WT = null;
    function qT() {
      return YT.transition;
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
      var QT = function(e) {
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
          e.add(dt(N) || "Component"), mc.add(N.type);
        }), Op = []);
        var t = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(N) {
          t.add(dt(N) || "Component"), mc.add(N.type);
        }), Dp = []);
        var a = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(N) {
          a.add(dt(N) || "Component"), mc.add(N.type);
        }), Lp = []);
        var i = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(N) {
          i.add(dt(N) || "Component"), mc.add(N.type);
        }), Np = []);
        var o = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(N) {
          o.add(dt(N) || "Component"), mc.add(N.type);
        }), Mp = []);
        var s = /* @__PURE__ */ new Set();
        if (Ap.length > 0 && (Ap.forEach(function(N) {
          s.add(dt(N) || "Component"), mc.add(N.type);
        }), Ap = []), t.size > 0) {
          var v = vc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var y = vc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var E = vc(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var R = vc(e);
          C(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var T = vc(a);
          C(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (o.size > 0) {
          var z = vc(o);
          C(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var hm = /* @__PURE__ */ new Map(), _1 = /* @__PURE__ */ new Set();
      dl.recordLegacyContextWarning = function(e, t) {
        var a = QT(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!_1.has(e.type)) {
          var i = hm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], hm.set(a, i)), i.push(e));
        }
      }, dl.flushLegacyContextWarning = function() {
        hm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(dt(s) || "Component"), _1.add(s.type);
            });
            var o = vc(i);
            try {
              Sn(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              sn();
            }
          }
        });
      }, dl.discardPendingWarnings = function() {
        Op = [], Dp = [], Lp = [], Np = [], Mp = [], Ap = [], hm = /* @__PURE__ */ new Map();
      };
    }
    function pl(e, t) {
      if (e && e.defaultProps) {
        var a = wt({}, t), i = e.defaultProps;
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
    function O1() {
      mm = !0;
    }
    function D1() {
      mm = !1;
    }
    function L1(e, t, a) {
      ca(Xg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Zg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Zg;
    }
    function e0(e, t) {
      var a = Xg.current;
      sa(Xg, t), e._currentValue = a;
    }
    function t0(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (zo(i.childLanes, t) ? o !== null && !zo(o.childLanes, t) && (o.childLanes = gt(o.childLanes, t)) : (i.childLanes = gt(i.childLanes, t), o !== null && (o.childLanes = gt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function GT(e, t, a) {
      KT(e, t, a);
    }
    function KT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var v = s.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === M) {
                var y = Tu(a), E = Qo(on, y);
                E.tag = Sm;
                var R = i.updateQueue;
                if (R !== null) {
                  var T = R.shared, z = T.pending;
                  z === null ? E.next = E : (E.next = z.next, z.next = E), T.pending = E;
                }
              }
              i.lanes = gt(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = gt(N.lanes, a)), t0(i.return, a, e), s.lanes = gt(s.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === Ve)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === H) {
          var W = i.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = gt(W.lanes, a);
          var q = W.alternate;
          q !== null && (q.lanes = gt(q.lanes, a)), t0(W, a, e), o = i.sibling;
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
    function qf(e, t) {
      vm = e, Wf = null, Jg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Qp(), a.firstContext = null);
      }
    }
    function lr(e) {
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
            lanes: re,
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
    function XT() {
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
    function N1(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, n0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, gm(e, i);
    }
    function ZT(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, n0(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function JT(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, n0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, gm(e, i);
    }
    function Xa(e, t) {
      return gm(e, t);
    }
    var ek = gm;
    function gm(e, t) {
      e.lanes = gt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = gt(a.lanes, t)), a === null && (e.flags & (Jt | bi)) !== Ze && MC(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = gt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = gt(a.childLanes, t) : (o.flags & (Jt | bi)) !== Ze && MC(e), i = o, o = o.return;
      if (i.tag === I) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var M1 = 0, A1 = 1, Sm = 2, r0 = 3, Em = !1, a0, wm;
    a0 = !1, wm = null;
    function i0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: re
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function z1(e, t) {
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
    function Qo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: M1,
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
      if (wm === o && !a0 && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), a0 = !0), eO()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, ek(e, a);
      } else
        return JT(e, o, t, a);
    }
    function Cm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Kd(a)) {
          var s = o.lanes;
          s = ff(s, e.pendingLanes);
          var v = gt(s, a);
          o.lanes = v, Xd(e, v);
        }
      }
    }
    function l0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, v = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var E = y;
            do {
              var R = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              v === null ? s = v = R : (v.next = R, v = R), E = E.next;
            } while (E !== null);
            v === null ? s = v = t : (v.next = t, v = t);
          } else
            s = v = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: v,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function tk(e, t, a, i, o, s) {
      switch (a.tag) {
        case A1: {
          var v = a.payload;
          if (typeof v == "function") {
            O1();
            var y = v.call(s, i, o);
            {
              if (e.mode & kn) {
                ln(!0);
                try {
                  v.call(s, i, o);
                } finally {
                  ln(!1);
                }
              }
              D1();
            }
            return y;
          }
          return v;
        }
        case r0:
          e.flags = e.flags & ~fr | pt;
        case M1: {
          var E = a.payload, R;
          if (typeof E == "function") {
            O1(), R = E.call(s, i, o);
            {
              if (e.mode & kn) {
                ln(!0);
                try {
                  E.call(s, i, o);
                } finally {
                  ln(!1);
                }
              }
              D1();
            }
          } else
            R = E;
          return R == null ? i : wt({}, i, R);
        }
        case Sm:
          return Em = !0, i;
      }
      return i;
    }
    function xm(e, t, a, i) {
      var o = e.updateQueue;
      Em = !1, wm = o.shared;
      var s = o.firstBaseUpdate, v = o.lastBaseUpdate, y = o.shared.pending;
      if (y !== null) {
        o.shared.pending = null;
        var E = y, R = E.next;
        E.next = null, v === null ? s = R : v.next = R, v = E;
        var T = e.alternate;
        if (T !== null) {
          var z = T.updateQueue, N = z.lastBaseUpdate;
          N !== v && (N === null ? z.firstBaseUpdate = R : N.next = R, z.lastBaseUpdate = E);
        }
      }
      if (s !== null) {
        var W = o.baseState, q = re, ee = null, Ne = null, et = null, qe = s;
        do {
          var Dt = qe.lane, Tt = qe.eventTime;
          if (zo(i, Dt)) {
            if (et !== null) {
              var te = {
                eventTime: Tt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zn,
                tag: qe.tag,
                payload: qe.payload,
                callback: qe.callback,
                next: null
              };
              et = et.next = te;
            }
            W = tk(e, o, qe, W, t, a);
            var $ = qe.callback;
            if ($ !== null && // If the update was already committed, we should not queue its
            // callback again.
            qe.lane !== zn) {
              e.flags |= nr;
              var pe = o.effects;
              pe === null ? o.effects = [qe] : pe.push(qe);
            }
          } else {
            var B = {
              eventTime: Tt,
              lane: Dt,
              tag: qe.tag,
              payload: qe.payload,
              callback: qe.callback,
              next: null
            };
            et === null ? (Ne = et = B, ee = W) : et = et.next = B, q = gt(q, Dt);
          }
          if (qe = qe.next, qe === null) {
            if (y = o.shared.pending, y === null)
              break;
            var Me = y, ke = Me.next;
            Me.next = null, qe = ke, o.lastBaseUpdate = Me, o.shared.pending = null;
          }
        } while (!0);
        et === null && (ee = W), o.baseState = ee, o.firstBaseUpdate = Ne, o.lastBaseUpdate = et;
        var st = o.shared.interleaved;
        if (st !== null) {
          var mt = st;
          do
            q = gt(q, mt.lane), mt = mt.next;
          while (mt !== st);
        } else s === null && (o.shared.lanes = re);
        lh(q), e.lanes = q, e.memoizedState = W;
      }
      wm = null;
    }
    function nk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function U1() {
      Em = !1;
    }
    function bm() {
      return Em;
    }
    function F1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], v = s.callback;
          v !== null && (s.callback = null, nk(v, a));
        }
    }
    var o0 = {}, j1 = new c.Component().refs, u0, s0, c0, f0, d0, P1, Rm, p0, h0, v0;
    {
      u0 = /* @__PURE__ */ new Set(), s0 = /* @__PURE__ */ new Set(), c0 = /* @__PURE__ */ new Set(), f0 = /* @__PURE__ */ new Set(), p0 = /* @__PURE__ */ new Set(), d0 = /* @__PURE__ */ new Set(), h0 = /* @__PURE__ */ new Set(), v0 = /* @__PURE__ */ new Set();
      var H1 = /* @__PURE__ */ new Set();
      Rm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          H1.has(a) || (H1.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, P1 = function(e, t) {
        if (t === void 0) {
          var a = Nt(e) || "Component";
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
          ln(!0);
          try {
            s = a(i, o);
          } finally {
            ln(!1);
          }
        }
        P1(t, s);
      }
      var v = s == null ? o : wt({}, o, s);
      if (e.memoizedState = v, e.lanes === re) {
        var y = e.updateQueue;
        y.baseState = v;
      }
    }
    var y0 = {
      isMounted: Ra,
      enqueueSetState: function(e, t, a) {
        var i = xi(e), o = Da(), s = rs(i), v = Qo(o, s);
        v.payload = t, a != null && (Rm(a, "setState"), v.callback = a);
        var y = Gu(i, v, s);
        y !== null && (wr(y, i, s, o), Cm(y, i, s)), Qc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = xi(e), o = Da(), s = rs(i), v = Qo(o, s);
        v.tag = A1, v.payload = t, a != null && (Rm(a, "replaceState"), v.callback = a);
        var y = Gu(i, v, s);
        y !== null && (wr(y, i, s, o), Cm(y, i, s)), Qc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = xi(e), i = Da(), o = rs(a), s = Qo(i, o);
        s.tag = Sm, t != null && (Rm(t, "forceUpdate"), s.callback = t);
        var v = Gu(a, s, o);
        v !== null && (wr(v, a, o, i), Cm(v, a, o)), Cu(a, o);
      }
    };
    function B1(e, t, a, i, o, s, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var E = y.shouldComponentUpdate(i, s, v);
        {
          if (e.mode & kn) {
            ln(!0);
            try {
              E = y.shouldComponentUpdate(i, s, v);
            } finally {
              ln(!1);
            }
          }
          E === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Nt(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !it(a, i) || !it(o, s) : !0;
    }
    function rk(e, t, a) {
      var i = e.stateNode;
      {
        var o = Nt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !h0.has(t) && (h0.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Nt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var v = i.props !== a;
        i.props !== void 0 && v && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !c0.has(t) && (c0.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Nt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var y = i.state;
        y && (typeof y != "object" || Mt(y)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function $1(e, t) {
      t.updater = y0, e.stateNode = t, Hc(t, e), t._reactInternalInstance = o0;
    }
    function V1(e, t, a) {
      var i = !1, o = pi, s = pi, v = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === be && v._context === void 0
        );
        if (!y && !v0.has(t)) {
          v0.add(t);
          var E = "";
          v === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? E = " However, it is set to a " + typeof v + "." : v.$$typeof === ce ? E = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Nt(t) || "Component", E);
        }
      }
      if (typeof v == "object" && v !== null)
        s = lr(v);
      else {
        o = Bf(e, t, !0);
        var R = t.contextTypes;
        i = R != null, s = i ? $f(e, o) : pi;
      }
      var T = new t(a, s);
      if (e.mode & kn) {
        ln(!0);
        try {
          T = new t(a, s);
        } finally {
          ln(!1);
        }
      }
      var z = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      $1(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var N = Nt(t) || "Component";
          s0.has(N) || (s0.add(N), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, T.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var W = null, q = null, ee = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? q = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (q = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ee = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (ee = "UNSAFE_componentWillUpdate"), W !== null || q !== null || ee !== null) {
            var Ne = Nt(t) || "Component", et = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            f0.has(Ne) || (f0.add(Ne), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ne, et, W !== null ? `
  ` + W : "", q !== null ? `
  ` + q : "", ee !== null ? `
  ` + ee : ""));
          }
        }
      }
      return i && p1(e, o, s), T;
    }
    function ak(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", dt(e) || "Component"), y0.enqueueReplaceState(t, t.state, null));
    }
    function I1(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = dt(e) || "Component";
          u0.has(s) || (u0.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        y0.enqueueReplaceState(t, t.state, null);
      }
    }
    function g0(e, t, a, i) {
      rk(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = j1, i0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = lr(s);
      else {
        var v = Bf(e, t, !0);
        o.context = $f(e, v);
      }
      {
        if (o.state === a) {
          var y = Nt(t) || "Component";
          p0.has(y) || (p0.add(y), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & kn && dl.recordLegacyContextWarning(e, o), dl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (m0(e, t, E, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (ak(e, o), xm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var R = Ie;
        R |= Ha, (e.mode & Va) !== Je && (R |= Ba), e.flags |= R;
      }
    }
    function ik(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var v = o.context, y = t.contextType, E = pi;
      if (typeof y == "object" && y !== null)
        E = lr(y);
      else {
        var R = Bf(e, t, !0);
        E = $f(e, R);
      }
      var T = t.getDerivedStateFromProps, z = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !z && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || v !== E) && I1(e, o, a, E), U1();
      var N = e.memoizedState, W = o.state = N;
      if (xm(e, a, o, i), W = e.memoizedState, s === a && N === W && !lm() && !bm()) {
        if (typeof o.componentDidMount == "function") {
          var q = Ie;
          q |= Ha, (e.mode & Va) !== Je && (q |= Ba), e.flags |= q;
        }
        return !1;
      }
      typeof T == "function" && (m0(e, t, T, a), W = e.memoizedState);
      var ee = bm() || B1(e, t, s, a, N, W, E);
      if (ee) {
        if (!z && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Ne = Ie;
          Ne |= Ha, (e.mode & Va) !== Je && (Ne |= Ba), e.flags |= Ne;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var et = Ie;
          et |= Ha, (e.mode & Va) !== Je && (et |= Ba), e.flags |= et;
        }
        e.memoizedProps = a, e.memoizedState = W;
      }
      return o.props = a, o.state = W, o.context = E, ee;
    }
    function lk(e, t, a, i, o) {
      var s = t.stateNode;
      z1(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : pl(t.type, v);
      s.props = y;
      var E = t.pendingProps, R = s.context, T = a.contextType, z = pi;
      if (typeof T == "object" && T !== null)
        z = lr(T);
      else {
        var N = Bf(t, a, !0);
        z = $f(t, N);
      }
      var W = a.getDerivedStateFromProps, q = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !q && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (v !== E || R !== z) && I1(t, s, i, z), U1();
      var ee = t.memoizedState, Ne = s.state = ee;
      if (xm(t, i, s, o), Ne = t.memoizedState, v === E && ee === Ne && !lm() && !bm() && !k)
        return typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Ie), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Vn), !1;
      typeof W == "function" && (m0(t, a, W, i), Ne = t.memoizedState);
      var et = bm() || B1(t, a, y, i, ee, Ne, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      k;
      return et ? (!q && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ne, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ne, z)), typeof s.componentDidUpdate == "function" && (t.flags |= Ie), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Vn)) : (typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Ie), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Vn), t.memoizedProps = i, t.memoizedState = Ne), s.props = i, s.state = Ne, s.context = z, et;
    }
    var S0, E0, w0, C0, x0, Y1 = function(e, t) {
    };
    S0 = !1, E0 = !1, w0 = {}, C0 = {}, x0 = {}, Y1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = dt(t) || "Component";
        C0[a] || (C0[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function zp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & kn || ut) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = dt(e) || "Component";
          w0[o] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), w0[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, v;
          if (s) {
            var y = s;
            if (y.tag !== M)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = y.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = v;
          Qn(i, "ref");
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var T = function(z) {
            var N = E.refs;
            N === j1 && (N = E.refs = {}), z === null ? delete N[R] : N[R] = z;
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
    function Tm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function km(e) {
      {
        var t = dt(e) || "Component";
        if (x0[t])
          return;
        x0[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function W1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function q1(e) {
      function t(B, te) {
        if (e) {
          var $ = B.deletions;
          $ === null ? (B.deletions = [te], B.flags |= Ut) : $.push(te);
        }
      }
      function a(B, te) {
        if (!e)
          return null;
        for (var $ = te; $ !== null; )
          t(B, $), $ = $.sibling;
        return null;
      }
      function i(B, te) {
        for (var $ = /* @__PURE__ */ new Map(), pe = te; pe !== null; )
          pe.key !== null ? $.set(pe.key, pe) : $.set(pe.index, pe), pe = pe.sibling;
        return $;
      }
      function o(B, te) {
        var $ = Rc(B, te);
        return $.index = 0, $.sibling = null, $;
      }
      function s(B, te, $) {
        if (B.index = $, !e)
          return B.flags |= av, te;
        var pe = B.alternate;
        if (pe !== null) {
          var Me = pe.index;
          return Me < te ? (B.flags |= Jt, te) : Me;
        } else
          return B.flags |= Jt, te;
      }
      function v(B) {
        return e && B.alternate === null && (B.flags |= Jt), B;
      }
      function y(B, te, $, pe) {
        if (te === null || te.tag !== Z) {
          var Me = KS($, B.mode, pe);
          return Me.return = B, Me;
        } else {
          var ke = o(te, $);
          return ke.return = B, ke;
        }
      }
      function E(B, te, $, pe) {
        var Me = $.type;
        if (Me === Ea)
          return T(B, te, $.props.children, pe, $.key);
        if (te !== null && (te.elementType === Me || // Keep this check inline so it only runs on the false path:
        FC(te, $) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Me == "object" && Me !== null && Me.$$typeof === Xe && W1(Me) === te.type)) {
          var ke = o(te, $.props);
          return ke.ref = zp(B, te, $), ke.return = B, ke._debugSource = $._source, ke._debugOwner = $._owner, ke;
        }
        var st = GS($, B.mode, pe);
        return st.ref = zp(B, te, $), st.return = B, st;
      }
      function R(B, te, $, pe) {
        if (te === null || te.tag !== oe || te.stateNode.containerInfo !== $.containerInfo || te.stateNode.implementation !== $.implementation) {
          var Me = XS($, B.mode, pe);
          return Me.return = B, Me;
        } else {
          var ke = o(te, $.children || []);
          return ke.return = B, ke;
        }
      }
      function T(B, te, $, pe, Me) {
        if (te === null || te.tag !== Re) {
          var ke = is($, B.mode, pe, Me);
          return ke.return = B, ke;
        } else {
          var st = o(te, $);
          return st.return = B, st;
        }
      }
      function z(B, te, $) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var pe = KS("" + te, B.mode, $);
          return pe.return = B, pe;
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case Wr: {
              var Me = GS(te, B.mode, $);
              return Me.ref = zp(B, null, te), Me.return = B, Me;
            }
            case qr: {
              var ke = XS(te, B.mode, $);
              return ke.return = B, ke;
            }
            case Xe: {
              var st = te._payload, mt = te._init;
              return z(B, mt(st), $);
            }
          }
          if (Mt(te) || gi(te)) {
            var Xt = is(te, B.mode, $, null);
            return Xt.return = B, Xt;
          }
          Tm(B, te);
        }
        return typeof te == "function" && km(B), null;
      }
      function N(B, te, $, pe) {
        var Me = te !== null ? te.key : null;
        if (typeof $ == "string" && $ !== "" || typeof $ == "number")
          return Me !== null ? null : y(B, te, "" + $, pe);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Wr:
              return $.key === Me ? E(B, te, $, pe) : null;
            case qr:
              return $.key === Me ? R(B, te, $, pe) : null;
            case Xe: {
              var ke = $._payload, st = $._init;
              return N(B, te, st(ke), pe);
            }
          }
          if (Mt($) || gi($))
            return Me !== null ? null : T(B, te, $, pe, null);
          Tm(B, $);
        }
        return typeof $ == "function" && km(B), null;
      }
      function W(B, te, $, pe, Me) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var ke = B.get($) || null;
          return y(te, ke, "" + pe, Me);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case Wr: {
              var st = B.get(pe.key === null ? $ : pe.key) || null;
              return E(te, st, pe, Me);
            }
            case qr: {
              var mt = B.get(pe.key === null ? $ : pe.key) || null;
              return R(te, mt, pe, Me);
            }
            case Xe:
              var Xt = pe._payload, jt = pe._init;
              return W(B, te, $, jt(Xt), Me);
          }
          if (Mt(pe) || gi(pe)) {
            var Jn = B.get($) || null;
            return T(te, Jn, pe, Me, null);
          }
          Tm(te, pe);
        }
        return typeof pe == "function" && km(te), null;
      }
      function q(B, te, $) {
        {
          if (typeof B != "object" || B === null)
            return te;
          switch (B.$$typeof) {
            case Wr:
            case qr:
              Y1(B, $);
              var pe = B.key;
              if (typeof pe != "string")
                break;
              if (te === null) {
                te = /* @__PURE__ */ new Set(), te.add(pe);
                break;
              }
              if (!te.has(pe)) {
                te.add(pe);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case Xe:
              var Me = B._payload, ke = B._init;
              q(ke(Me), te, $);
              break;
          }
        }
        return te;
      }
      function ee(B, te, $, pe) {
        for (var Me = null, ke = 0; ke < $.length; ke++) {
          var st = $[ke];
          Me = q(st, Me, B);
        }
        for (var mt = null, Xt = null, jt = te, Jn = 0, Pt = 0, Yn = null; jt !== null && Pt < $.length; Pt++) {
          jt.index > Pt ? (Yn = jt, jt = null) : Yn = jt.sibling;
          var da = N(B, jt, $[Pt], pe);
          if (da === null) {
            jt === null && (jt = Yn);
            break;
          }
          e && jt && da.alternate === null && t(B, jt), Jn = s(da, Jn, Pt), Xt === null ? mt = da : Xt.sibling = da, Xt = da, jt = Yn;
        }
        if (Pt === $.length) {
          if (a(B, jt), Fr()) {
            var Ir = Pt;
            dc(B, Ir);
          }
          return mt;
        }
        if (jt === null) {
          for (; Pt < $.length; Pt++) {
            var vi = z(B, $[Pt], pe);
            vi !== null && (Jn = s(vi, Jn, Pt), Xt === null ? mt = vi : Xt.sibling = vi, Xt = vi);
          }
          if (Fr()) {
            var La = Pt;
            dc(B, La);
          }
          return mt;
        }
        for (var Na = i(B, jt); Pt < $.length; Pt++) {
          var pa = W(Na, B, Pt, $[Pt], pe);
          pa !== null && (e && pa.alternate !== null && Na.delete(pa.key === null ? Pt : pa.key), Jn = s(pa, Jn, Pt), Xt === null ? mt = pa : Xt.sibling = pa, Xt = pa);
        }
        if (e && Na.forEach(function(cd) {
          return t(B, cd);
        }), Fr()) {
          var eu = Pt;
          dc(B, eu);
        }
        return mt;
      }
      function Ne(B, te, $, pe) {
        var Me = gi($);
        if (typeof Me != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          $[Symbol.toStringTag] === "Generator" && (E0 || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), E0 = !0), $.entries === Me && (S0 || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), S0 = !0);
          var ke = Me.call($);
          if (ke)
            for (var st = null, mt = ke.next(); !mt.done; mt = ke.next()) {
              var Xt = mt.value;
              st = q(Xt, st, B);
            }
        }
        var jt = Me.call($);
        if (jt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, Pt = null, Yn = te, da = 0, Ir = 0, vi = null, La = jt.next(); Yn !== null && !La.done; Ir++, La = jt.next()) {
          Yn.index > Ir ? (vi = Yn, Yn = null) : vi = Yn.sibling;
          var Na = N(B, Yn, La.value, pe);
          if (Na === null) {
            Yn === null && (Yn = vi);
            break;
          }
          e && Yn && Na.alternate === null && t(B, Yn), da = s(Na, da, Ir), Pt === null ? Jn = Na : Pt.sibling = Na, Pt = Na, Yn = vi;
        }
        if (La.done) {
          if (a(B, Yn), Fr()) {
            var pa = Ir;
            dc(B, pa);
          }
          return Jn;
        }
        if (Yn === null) {
          for (; !La.done; Ir++, La = jt.next()) {
            var eu = z(B, La.value, pe);
            eu !== null && (da = s(eu, da, Ir), Pt === null ? Jn = eu : Pt.sibling = eu, Pt = eu);
          }
          if (Fr()) {
            var cd = Ir;
            dc(B, cd);
          }
          return Jn;
        }
        for (var fh = i(B, Yn); !La.done; Ir++, La = jt.next()) {
          var io = W(fh, B, Ir, La.value, pe);
          io !== null && (e && io.alternate !== null && fh.delete(io.key === null ? Ir : io.key), da = s(io, da, Ir), Pt === null ? Jn = io : Pt.sibling = io, Pt = io);
        }
        if (e && fh.forEach(function(ED) {
          return t(B, ED);
        }), Fr()) {
          var SD = Ir;
          dc(B, SD);
        }
        return Jn;
      }
      function et(B, te, $, pe) {
        if (te !== null && te.tag === Z) {
          a(B, te.sibling);
          var Me = o(te, $);
          return Me.return = B, Me;
        }
        a(B, te);
        var ke = KS($, B.mode, pe);
        return ke.return = B, ke;
      }
      function qe(B, te, $, pe) {
        for (var Me = $.key, ke = te; ke !== null; ) {
          if (ke.key === Me) {
            var st = $.type;
            if (st === Ea) {
              if (ke.tag === Re) {
                a(B, ke.sibling);
                var mt = o(ke, $.props.children);
                return mt.return = B, mt._debugSource = $._source, mt._debugOwner = $._owner, mt;
              }
            } else if (ke.elementType === st || // Keep this check inline so it only runs on the false path:
            FC(ke, $) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof st == "object" && st !== null && st.$$typeof === Xe && W1(st) === ke.type) {
              a(B, ke.sibling);
              var Xt = o(ke, $.props);
              return Xt.ref = zp(B, ke, $), Xt.return = B, Xt._debugSource = $._source, Xt._debugOwner = $._owner, Xt;
            }
            a(B, ke);
            break;
          } else
            t(B, ke);
          ke = ke.sibling;
        }
        if ($.type === Ea) {
          var jt = is($.props.children, B.mode, pe, $.key);
          return jt.return = B, jt;
        } else {
          var Jn = GS($, B.mode, pe);
          return Jn.ref = zp(B, te, $), Jn.return = B, Jn;
        }
      }
      function Dt(B, te, $, pe) {
        for (var Me = $.key, ke = te; ke !== null; ) {
          if (ke.key === Me)
            if (ke.tag === oe && ke.stateNode.containerInfo === $.containerInfo && ke.stateNode.implementation === $.implementation) {
              a(B, ke.sibling);
              var st = o(ke, $.children || []);
              return st.return = B, st;
            } else {
              a(B, ke);
              break;
            }
          else
            t(B, ke);
          ke = ke.sibling;
        }
        var mt = XS($, B.mode, pe);
        return mt.return = B, mt;
      }
      function Tt(B, te, $, pe) {
        var Me = typeof $ == "object" && $ !== null && $.type === Ea && $.key === null;
        if (Me && ($ = $.props.children), typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Wr:
              return v(qe(B, te, $, pe));
            case qr:
              return v(Dt(B, te, $, pe));
            case Xe:
              var ke = $._payload, st = $._init;
              return Tt(B, te, st(ke), pe);
          }
          if (Mt($))
            return ee(B, te, $, pe);
          if (gi($))
            return Ne(B, te, $, pe);
          Tm(B, $);
        }
        return typeof $ == "string" && $ !== "" || typeof $ == "number" ? v(et(B, te, "" + $, pe)) : (typeof $ == "function" && km(B), a(B, te));
      }
      return Tt;
    }
    var Qf = q1(!0), Q1 = q1(!1);
    function ok(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Rc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Rc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function uk(e, t) {
      for (var a = e.child; a !== null; )
        FO(a, t), a = a.sibling;
    }
    var Up = {}, Ku = Yu(Up), Fp = Yu(Up), _m = Yu(Up);
    function Om(e) {
      if (e === Up)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function G1() {
      var e = Om(_m.current);
      return e;
    }
    function b0(e, t) {
      ca(_m, t, e), ca(Fp, e, e), ca(Ku, Up, e);
      var a = CR(t);
      sa(Ku, e), ca(Ku, a, e);
    }
    function Gf(e) {
      sa(Ku, e), sa(Fp, e), sa(_m, e);
    }
    function R0() {
      var e = Om(Ku.current);
      return e;
    }
    function K1(e) {
      Om(_m.current);
      var t = Om(Ku.current), a = xR(t, e.type);
      t !== a && (ca(Fp, e, e), ca(Ku, a, e));
    }
    function T0(e) {
      Fp.current === e && (sa(Ku, e), sa(Fp, e));
    }
    var sk = 0, X1 = 1, Z1 = 1, jp = 2, hl = Yu(sk);
    function k0(e, t) {
      return (e & t) !== 0;
    }
    function Kf(e) {
      return e & X1;
    }
    function _0(e, t) {
      return e & X1 | t;
    }
    function ck(e, t) {
      return e | t;
    }
    function Xu(e, t) {
      ca(hl, t, e);
    }
    function Xf(e) {
      sa(hl, e);
    }
    function fk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Dm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === _e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || u1(i) || Ag(i))
              return t;
          }
        } else if (t.tag === ne && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & pt) !== Ze;
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
    ), hr = (
      /* */
      1
    ), Zl = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), jr = (
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
    function dk(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var De = h.ReactCurrentDispatcher, Pp = h.ReactCurrentBatchConfig, L0, Zf;
    L0 = /* @__PURE__ */ new Set();
    var gc = re, Kt = null, mr = null, yr = null, Lm = !1, Hp = !1, Bp = 0, pk = 0, hk = 25, ae = null, Ui = null, Zu = -1, N0 = !1;
    function It() {
      {
        var e = ae;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function Ce() {
      {
        var e = ae;
        Ui !== null && (Zu++, Ui[Zu] !== e && vk(e));
      }
    }
    function Jf(e) {
      e != null && !Mt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof e);
    }
    function vk(e) {
      {
        var t = dt(Kt);
        if (!L0.has(t) && (L0.add(t), Ui !== null)) {
          for (var a = "", i = 30, o = 0; o <= Zu; o++) {
            for (var s = Ui[o], v = o === Zu ? e : s, y = o + 1 + ". " + s; y.length < i; )
              y += " ";
            y += v + `
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
      gc = s, Kt = t, Ui = e !== null ? e._debugHookTypes : null, Zu = -1, N0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = re, e !== null && e.memoizedState !== null ? De.current = Ew : Ui !== null ? De.current = Sw : De.current = gw;
      var v = a(i, o);
      if (Hp) {
        var y = 0;
        do {
          if (Hp = !1, Bp = 0, y >= hk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, N0 = !1, mr = null, yr = null, t.updateQueue = null, Zu = -1, De.current = ww, v = a(i, o);
        } while (Hp);
      }
      De.current = Im, t._debugHookTypes = Ui;
      var E = mr !== null && mr.next !== null;
      if (gc = re, Kt = null, mr = null, yr = null, ae = null, Ui = null, Zu = -1, e !== null && (e.flags & dr) !== (t.flags & dr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & We) !== Je && g("Internal React error: Expected static flag was missing. Please notify the React team."), Lm = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function td() {
      var e = Bp !== 0;
      return Bp = 0, e;
    }
    function J1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Va) !== Je ? t.flags &= ~(Ro | Ba | Jr | Ie) : t.flags &= ~(Jr | Ie), e.lanes = Gs(e.lanes, a);
    }
    function ew() {
      if (De.current = Im, Lm) {
        for (var e = Kt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Lm = !1;
      }
      gc = re, Kt = null, mr = null, yr = null, Ui = null, Zu = -1, ae = null, pw = !1, Hp = !1, Bp = 0;
    }
    function Jl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return yr === null ? Kt.memoizedState = yr = e : yr = yr.next = e, yr;
    }
    function Fi() {
      var e;
      if (mr === null) {
        var t = Kt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = mr.next;
      var a;
      if (yr === null ? a = Kt.memoizedState : a = yr.next, a !== null)
        yr = a, a = yr.next, mr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        mr = e;
        var i = {
          memoizedState: mr.memoizedState,
          baseState: mr.baseState,
          baseQueue: mr.baseQueue,
          queue: mr.queue,
          next: null
        };
        yr === null ? Kt.memoizedState = yr = i : yr = yr.next = i;
      }
      return yr;
    }
    function tw() {
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
        lanes: re,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var v = s.dispatch = Sk.bind(null, Kt, s);
      return [i.memoizedState, v];
    }
    function U0(e, t, a) {
      var i = Fi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = mr, v = s.baseQueue, y = o.pending;
      if (y !== null) {
        if (v !== null) {
          var E = v.next, R = y.next;
          v.next = R, y.next = E;
        }
        s.baseQueue !== v && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = v = y, o.pending = null;
      }
      if (v !== null) {
        var T = v.next, z = s.baseState, N = null, W = null, q = null, ee = T;
        do {
          var Ne = ee.lane;
          if (zo(gc, Ne)) {
            if (q !== null) {
              var qe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zn,
                action: ee.action,
                hasEagerState: ee.hasEagerState,
                eagerState: ee.eagerState,
                next: null
              };
              q = q.next = qe;
            }
            if (ee.hasEagerState)
              z = ee.eagerState;
            else {
              var Dt = ee.action;
              z = e(z, Dt);
            }
          } else {
            var et = {
              lane: Ne,
              action: ee.action,
              hasEagerState: ee.hasEagerState,
              eagerState: ee.eagerState,
              next: null
            };
            q === null ? (W = q = et, N = z) : q = q.next = et, Kt.lanes = gt(Kt.lanes, Ne), lh(Ne);
          }
          ee = ee.next;
        } while (ee !== null && ee !== T);
        q === null ? N = z : q.next = W, Fe(z, i.memoizedState) || Qp(), i.memoizedState = z, i.baseState = N, i.baseQueue = q, o.lastRenderedState = z;
      }
      var Tt = o.interleaved;
      if (Tt !== null) {
        var B = Tt;
        do {
          var te = B.lane;
          Kt.lanes = gt(Kt.lanes, te), lh(te), B = B.next;
        } while (B !== Tt);
      } else v === null && (o.lanes = re);
      var $ = o.dispatch;
      return [i.memoizedState, $];
    }
    function F0(e, t, a) {
      var i = Fi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, v = o.pending, y = i.memoizedState;
      if (v !== null) {
        o.pending = null;
        var E = v.next, R = E;
        do {
          var T = R.action;
          y = e(y, T), R = R.next;
        } while (R !== E);
        Fe(y, i.memoizedState) || Qp(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), o.lastRenderedState = y;
      }
      return [y, s];
    }
    function wM(e, t, a) {
    }
    function CM(e, t, a) {
    }
    function j0(e, t, a) {
      var i = Kt, o = Jl(), s, v = Fr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Zf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      } else {
        if (s = t(), !Zf) {
          var y = t();
          Fe(s, y) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
        }
        var E = uy();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Qs(E, gc) || nw(i, t, s);
      }
      o.memoizedState = s;
      var R = {
        value: s,
        getSnapshot: t
      };
      return o.queue = R, Um(aw.bind(null, i, R, e), [e]), i.flags |= Jr, $p(hr | jr, rw.bind(null, i, R, s, t), void 0, null), s;
    }
    function Nm(e, t, a) {
      var i = Kt, o = Fi(), s = t();
      if (!Zf) {
        var v = t();
        Fe(s, v) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Zf = !0);
      }
      var y = o.memoizedState, E = !Fe(y, s);
      E && (o.memoizedState = s, Qp());
      var R = o.queue;
      if (Ip(aw.bind(null, i, R, e), [e]), R.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      yr !== null && yr.memoizedState.tag & hr) {
        i.flags |= Jr, $p(hr | jr, rw.bind(null, i, R, s, t), void 0, null);
        var T = uy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Qs(T, gc) || nw(i, t, s);
      }
      return s;
    }
    function nw(e, t, a) {
      e.flags |= bo;
      var i = {
        getSnapshot: t,
        value: a
      }, o = Kt.updateQueue;
      if (o === null)
        o = tw(), Kt.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function rw(e, t, a, i) {
      t.value = a, t.getSnapshot = i, iw(t) && lw(e);
    }
    function aw(e, t, a) {
      var i = function() {
        iw(t) && lw(e);
      };
      return a(i);
    }
    function iw(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Fe(a, i);
      } catch {
        return !0;
      }
    }
    function lw(e) {
      var t = Xa(e, rt);
      t !== null && wr(t, e, rt, on);
    }
    function Mm(e) {
      var t = Jl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: A0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Ek.bind(null, Kt, a);
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
        s = tw(), Kt.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var v = s.lastEffect;
        if (v === null)
          s.lastEffect = o.next = o;
        else {
          var y = v.next;
          v.next = o, o.next = y, s.lastEffect = o;
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
      Kt.flags |= e, o.memoizedState = $p(hr | t, a, void 0, s);
    }
    function zm(e, t, a, i) {
      var o = Fi(), s = i === void 0 ? null : i, v = void 0;
      if (mr !== null) {
        var y = mr.memoizedState;
        if (v = y.destroy, s !== null) {
          var E = y.deps;
          if (M0(s, E)) {
            o.memoizedState = $p(t, a, v, s);
            return;
          }
        }
      }
      Kt.flags |= e, o.memoizedState = $p(hr | t, a, v, s);
    }
    function Um(e, t) {
      return (Kt.mode & Va) !== Je ? Vp(Ro | Jr | Ul, jr, e, t) : Vp(Jr | Ul, jr, e, t);
    }
    function Ip(e, t) {
      return zm(Jr, jr, e, t);
    }
    function $0(e, t) {
      return Vp(Ie, Zl, e, t);
    }
    function Fm(e, t) {
      return zm(Ie, Zl, e, t);
    }
    function V0(e, t) {
      var a = Ie;
      return a |= Ha, (Kt.mode & Va) !== Je && (a |= Ba), Vp(a, vr, e, t);
    }
    function jm(e, t) {
      return zm(Ie, vr, e, t);
    }
    function ow(e, t) {
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
      var i = a != null ? a.concat([e]) : null, o = Ie;
      return o |= Ha, (Kt.mode & Va) !== Je && (o |= Ba), Vp(o, vr, ow.bind(null, t, e), i);
    }
    function Pm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return zm(Ie, vr, ow.bind(null, t, e), i);
    }
    function mk(e, t) {
    }
    var Hm = mk;
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
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function q0(e) {
      var t = Jl();
      return t.memoizedState = e, e;
    }
    function uw(e) {
      var t = Fi(), a = mr, i = a.memoizedState;
      return cw(t, i, e);
    }
    function sw(e) {
      var t = Fi();
      if (mr === null)
        return t.memoizedState = e, e;
      var a = mr.memoizedState;
      return cw(t, a, e);
    }
    function cw(e, t, a) {
      var i = !yv(gc);
      if (i) {
        if (!Fe(a, t)) {
          var o = Ev();
          Kt.lanes = gt(Kt.lanes, o), lh(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Qp()), e.memoizedState = a, a;
    }
    function yk(e, t, a) {
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
          var v = s._updatedFibers.size;
          v > 10 && C("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Q0() {
      var e = Mm(!1), t = e[0], a = e[1], i = yk.bind(null, a), o = Jl();
      return o.memoizedState = i, [t, i];
    }
    function fw() {
      var e = P0(), t = e[0], a = Fi(), i = a.memoizedState;
      return [t, i];
    }
    function dw() {
      var e = H0(), t = e[0], a = Fi(), i = a.memoizedState;
      return [t, i];
    }
    var pw = !1;
    function gk() {
      return pw;
    }
    function G0() {
      var e = Jl(), t = uy(), a = t.identifierPrefix, i;
      if (Fr()) {
        var o = NT();
        i = ":" + a + "R" + o;
        var s = Bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var v = pk++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Vm() {
      var e = Fi(), t = e.memoizedState;
      return t;
    }
    function Sk(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = rs(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (hw(e))
        vw(t, o);
      else {
        var s = N1(e, t, o, i);
        if (s !== null) {
          var v = Da();
          wr(s, e, i, v), mw(s, t, i);
        }
      }
      yw(e, i);
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
      if (hw(e))
        vw(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === re && (s === null || s.lanes === re)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var y;
            y = De.current, De.current = vl;
            try {
              var E = t.lastRenderedState, R = v(E, a);
              if (o.hasEagerState = !0, o.eagerState = R, Fe(R, E)) {
                ZT(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              De.current = y;
            }
          }
        }
        var T = N1(e, t, o, i);
        if (T !== null) {
          var z = Da();
          wr(T, e, i, z), mw(T, t, i);
        }
      }
      yw(e, i);
    }
    function hw(e) {
      var t = e.alternate;
      return e === Kt || t !== null && t === Kt;
    }
    function vw(e, t) {
      Hp = Lm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function mw(e, t, a) {
      if (Kd(a)) {
        var i = t.lanes;
        i = ff(i, e.pendingLanes);
        var o = gt(i, a);
        t.lanes = o, Xd(e, o);
      }
    }
    function yw(e, t, a) {
      Qc(e, t);
    }
    var Im = {
      readContext: lr,
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
    }, gw = null, Sw = null, Ew = null, ww = null, eo = null, vl = null, Ym = null;
    {
      var K0 = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ht = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      gw = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", It(), Jf(t), Y0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", It(), lr(e);
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
          return ae = "useDeferredValue", It(), q0(e);
        },
        useTransition: function() {
          return ae = "useTransition", It(), Q0();
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
      }, Sw = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Ce(), Y0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Ce(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Ce(), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Ce(), I0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Ce(), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Ce(), V0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Ce();
          var a = De.current;
          De.current = eo;
          try {
            return W0(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Ce();
          var i = De.current;
          De.current = eo;
          try {
            return z0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Ce(), B0(e);
        },
        useState: function(e) {
          ae = "useState", Ce();
          var t = De.current;
          De.current = eo;
          try {
            return Mm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Ce(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Ce(), q0(e);
        },
        useTransition: function() {
          return ae = "useTransition", Ce(), Q0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Ce(), j0(e, t, a);
        },
        useId: function() {
          return ae = "useId", Ce(), G0();
        },
        unstable_isNewReconciler: se
      }, Ew = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Ce(), Bm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Ce(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Ce(), Ip(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Ce(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Ce(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Ce(), jm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Ce();
          var a = De.current;
          De.current = vl;
          try {
            return $m(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Ce();
          var i = De.current;
          De.current = vl;
          try {
            return U0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Ce(), Am();
        },
        useState: function(e) {
          ae = "useState", Ce();
          var t = De.current;
          De.current = vl;
          try {
            return P0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Ce(), Hm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Ce(), uw(e);
        },
        useTransition: function() {
          return ae = "useTransition", Ce(), fw();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Ce(), Nm(e, t);
        },
        useId: function() {
          return ae = "useId", Ce(), Vm();
        },
        unstable_isNewReconciler: se
      }, ww = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Ce(), Bm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Ce(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Ce(), Ip(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Ce(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Ce(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Ce(), jm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Ce();
          var a = De.current;
          De.current = Ym;
          try {
            return $m(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Ce();
          var i = De.current;
          De.current = Ym;
          try {
            return F0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Ce(), Am();
        },
        useState: function(e) {
          ae = "useState", Ce();
          var t = De.current;
          De.current = Ym;
          try {
            return H0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Ce(), Hm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Ce(), sw(e);
        },
        useTransition: function() {
          return ae = "useTransition", Ce(), dw();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Ce(), Nm(e, t);
        },
        useId: function() {
          return ae = "useId", Ce(), Vm();
        },
        unstable_isNewReconciler: se
      }, eo = {
        readContext: function(e) {
          return K0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ht(), It(), Y0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ht(), It(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ht(), It(), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ht(), It(), I0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ht(), It(), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ht(), It(), V0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ht(), It();
          var a = De.current;
          De.current = eo;
          try {
            return W0(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ht(), It();
          var i = De.current;
          De.current = eo;
          try {
            return z0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ht(), It(), B0(e);
        },
        useState: function(e) {
          ae = "useState", ht(), It();
          var t = De.current;
          De.current = eo;
          try {
            return Mm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ht(), It(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ht(), It(), q0(e);
        },
        useTransition: function() {
          return ae = "useTransition", ht(), It(), Q0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ht(), It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ht(), It(), j0(e, t, a);
        },
        useId: function() {
          return ae = "useId", ht(), It(), G0();
        },
        unstable_isNewReconciler: se
      }, vl = {
        readContext: function(e) {
          return K0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ht(), Ce(), Bm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ht(), Ce(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ht(), Ce(), Ip(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ht(), Ce(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ht(), Ce(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ht(), Ce(), jm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ht(), Ce();
          var a = De.current;
          De.current = vl;
          try {
            return $m(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ht(), Ce();
          var i = De.current;
          De.current = vl;
          try {
            return U0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ht(), Ce(), Am();
        },
        useState: function(e) {
          ae = "useState", ht(), Ce();
          var t = De.current;
          De.current = vl;
          try {
            return P0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ht(), Ce(), Hm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ht(), Ce(), uw(e);
        },
        useTransition: function() {
          return ae = "useTransition", ht(), Ce(), fw();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ht(), Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ht(), Ce(), Nm(e, t);
        },
        useId: function() {
          return ae = "useId", ht(), Ce(), Vm();
        },
        unstable_isNewReconciler: se
      }, Ym = {
        readContext: function(e) {
          return K0(), lr(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ht(), Ce(), Bm(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ht(), Ce(), lr(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ht(), Ce(), Ip(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ht(), Ce(), Pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ht(), Ce(), Fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ht(), Ce(), jm(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ht(), Ce();
          var a = De.current;
          De.current = vl;
          try {
            return $m(e, t);
          } finally {
            De.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ht(), Ce();
          var i = De.current;
          De.current = vl;
          try {
            return F0(e, t, a);
          } finally {
            De.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ht(), Ce(), Am();
        },
        useState: function(e) {
          ae = "useState", ht(), Ce();
          var t = De.current;
          De.current = vl;
          try {
            return H0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ht(), Ce(), Hm();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ht(), Ce(), sw(e);
        },
        useTransition: function() {
          return ae = "useTransition", ht(), Ce(), dw();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ht(), Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ht(), Ce(), Nm(e, t);
        },
        useId: function() {
          return ae = "useId", ht(), Ce(), Vm();
        },
        unstable_isNewReconciler: se
      };
    }
    var Ju = f.unstable_now, Cw = 0, Wm = -1, Yp = -1, qm = -1, X0 = !1, Qm = !1;
    function xw() {
      return X0;
    }
    function wk() {
      Qm = !0;
    }
    function Ck() {
      X0 = !1, Qm = !1;
    }
    function xk() {
      X0 = Qm, Qm = !1;
    }
    function bw() {
      return Cw;
    }
    function Rw() {
      Cw = Ju();
    }
    function Z0(e) {
      Yp = Ju(), e.actualStartTime < 0 && (e.actualStartTime = Ju());
    }
    function Tw(e) {
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
            case yt:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function J0(e) {
      if (qm >= 0) {
        var t = Ju() - qm;
        qm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case yt:
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
      qm = Ju();
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
        var i = t.value, o = t.source, s = t.stack, v = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === M)
            return;
          console.error(i);
        }
        var y = o ? dt(o) : null, E = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === I)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = dt(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var z = E + `
` + v + `

` + ("" + R);
        console.error(z);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var Rk = typeof WeakMap == "function" ? WeakMap : Map;
    function kw(e, t, a) {
      var i = Qo(on, a);
      i.tag = r0, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        yO(o), rS(e, t);
      }, i;
    }
    function aS(e, t, a) {
      var i = Qo(on, a);
      i.tag = r0;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          jC(e), rS(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        jC(e), rS(e, t), typeof o != "function" && vO(this);
        var E = t.value, R = t.stack;
        this.componentDidCatch(E, {
          componentStack: R !== null ? R : ""
        }), typeof o != "function" && (oa(e.lanes, rt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", dt(e) || "Unknown"));
      }), i;
    }
    function _w(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new Rk(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = gO.bind(null, e, t, a);
        Ta && oh(e, a), t.then(s, s);
      }
    }
    function Tk(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function kk(e, t) {
      var a = e.tag;
      if ((e.mode & We) === Je && (a === j || a === Ae || a === nt)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Ow(e) {
      var t = e;
      do {
        if (t.tag === _e && fk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Dw(e, t, a, i, o) {
      if ((e.mode & We) === Je) {
        if (e === t)
          e.flags |= fr;
        else {
          if (e.flags |= pt, a.flags |= Bc, a.flags &= ~(rv | zl), a.tag === M) {
            var s = a.alternate;
            if (s === null)
              a.tag = Yt;
            else {
              var v = Qo(on, rt);
              v.tag = Sm, Gu(a, v, rt);
            }
          }
          a.lanes = gt(a.lanes, rt);
        }
        return e;
      }
      return e.flags |= fr, e.lanes = o, e;
    }
    function _k(e, t, a, i, o) {
      if (a.flags |= zl, Ta && oh(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        kk(a), Fr() && a.mode & We && E1();
        var v = Ow(t);
        if (v !== null) {
          v.flags &= ~Ar, Dw(v, t, a, e, o), v.mode & We && _w(e, s, o), Tk(v, e, s);
          return;
        } else {
          if (!Gd(o)) {
            _w(e, s, o), FS();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (Fr() && a.mode & We) {
        E1();
        var E = Ow(t);
        if (E !== null) {
          (E.flags & fr) === Ze && (E.flags |= Ar), Dw(E, t, a, e, o), Kg(Sc(i, a));
          return;
        }
      }
      i = Sc(i, a), oO(i);
      var R = t;
      do {
        switch (R.tag) {
          case I: {
            var T = i;
            R.flags |= fr;
            var z = Tu(o);
            R.lanes = gt(R.lanes, z);
            var N = kw(R, T, z);
            l0(R, N);
            return;
          }
          case M:
            var W = i, q = R.type, ee = R.stateNode;
            if ((R.flags & pt) === Ze && (typeof q.getDerivedStateFromError == "function" || ee !== null && typeof ee.componentDidCatch == "function" && !OC(ee))) {
              R.flags |= fr;
              var Ne = Tu(o);
              R.lanes = gt(R.lanes, Ne);
              var et = aS(R, W, Ne);
              l0(R, et);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function Ok() {
      return null;
    }
    var Wp = h.ReactCurrentOwner, ml = !1, iS, qp, lS, oS, uS, Ec, sS, Km;
    iS = {}, qp = {}, lS = {}, oS = {}, uS = {}, Ec = !1, sS = {}, Km = {};
    function _a(e, t, a, i) {
      e === null ? t.child = Q1(t, null, a, i) : t.child = Qf(t, e.child, a, i);
    }
    function Dk(e, t, a, i) {
      t.child = Qf(t, e.child, null, i), t.child = Qf(t, null, a, i);
    }
    function Lw(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && cl(
          s,
          i,
          // Resolved props
          "prop",
          Nt(a)
        );
      }
      var v = a.render, y = t.ref, E, R;
      qf(t, o), gu(t);
      {
        if (Wp.current = t, cr(!0), E = ed(e, t, v, i, y, o), R = td(), t.mode & kn) {
          ln(!0);
          try {
            E = ed(e, t, v, i, y, o), R = td();
          } finally {
            ln(!1);
          }
        }
        cr(!1);
      }
      return ko(), e !== null && !ml ? (J1(e, t, o), Go(e, t, o)) : (Fr() && R && Ig(t), t.flags |= fi, _a(e, t, E, o), t.child);
    }
    function Nw(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (zO(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = s;
          return v = sd(s), t.tag = nt, t.type = v, dS(t, s), Mw(e, t, v, i, o);
        }
        {
          var y = s.propTypes;
          y && cl(
            y,
            i,
            // Resolved props
            "prop",
            Nt(s)
          );
        }
        var E = QS(a.type, null, i, t, t.mode, o);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var R = a.type, T = R.propTypes;
        T && cl(
          T,
          i,
          // Resolved props
          "prop",
          Nt(R)
        );
      }
      var z = e.child, N = gS(e, o);
      if (!N) {
        var W = z.memoizedProps, q = a.compare;
        if (q = q !== null ? q : it, q(W, i) && e.ref === t.ref)
          return Go(e, t, o);
      }
      t.flags |= fi;
      var ee = Rc(z, i);
      return ee.ref = t.ref, ee.return = t, t.child = ee, ee;
    }
    function Mw(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Xe) {
          var v = s, y = v._payload, E = v._init;
          try {
            s = E(y);
          } catch {
            s = null;
          }
          var R = s && s.propTypes;
          R && cl(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Nt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (it(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ml = !1, t.pendingProps = i = T, gS(e, o))
            (e.flags & Bc) !== Ze && (ml = !0);
          else return t.lanes = e.lanes, Go(e, t, o);
      }
      return cS(e, t, a, i, o);
    }
    function Aw(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || G)
        if ((t.mode & We) === Je) {
          var v = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, sy(t, a);
        } else if (oa(a, ka)) {
          var z = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var N = s !== null ? s.baseLanes : a;
          sy(t, N);
        } else {
          var y = null, E;
          if (s !== null) {
            var R = s.baseLanes;
            E = gt(R, a);
          } else
            E = a;
          t.lanes = t.childLanes = ka;
          var T = {
            baseLanes: E,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, sy(t, E), null;
        }
      else {
        var W;
        s !== null ? (W = gt(s.baseLanes, a), t.memoizedState = null) : W = a, sy(t, W);
      }
      return _a(e, t, o, a), t.child;
    }
    function Lk(e, t, a) {
      var i = t.pendingProps;
      return _a(e, t, i, a), t.child;
    }
    function Nk(e, t, a) {
      var i = t.pendingProps.children;
      return _a(e, t, i, a), t.child;
    }
    function Mk(e, t, a) {
      {
        t.flags |= Ie;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return _a(e, t, s, a), t.child;
    }
    function zw(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= xa, t.flags |= Ri);
    }
    function cS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && cl(
          s,
          i,
          // Resolved props
          "prop",
          Nt(a)
        );
      }
      var v;
      {
        var y = Bf(t, a, !0);
        v = $f(t, y);
      }
      var E, R;
      qf(t, o), gu(t);
      {
        if (Wp.current = t, cr(!0), E = ed(e, t, a, i, v, o), R = td(), t.mode & kn) {
          ln(!0);
          try {
            E = ed(e, t, a, i, v, o), R = td();
          } finally {
            ln(!1);
          }
        }
        cr(!1);
      }
      return ko(), e !== null && !ml ? (J1(e, t, o), Go(e, t, o)) : (Fr() && R && Ig(t), t.flags |= fi, _a(e, t, E, o), t.child);
    }
    function Uw(e, t, a, i, o) {
      {
        switch (KO(t)) {
          case !1: {
            var s = t.stateNode, v = t.type, y = new v(t.memoizedProps, s.context), E = y.state;
            s.updater.enqueueSetState(s, E, null);
            break;
          }
          case !0: {
            t.flags |= pt, t.flags |= fr;
            var R = new Error("Simulated error coming from DevTools"), T = Tu(o);
            t.lanes = gt(t.lanes, T);
            var z = aS(t, Sc(R, t), T);
            l0(t, z);
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
            Nt(a)
          );
        }
      }
      var W;
      Xl(a) ? (W = !0, um(t)) : W = !1, qf(t, o);
      var q = t.stateNode, ee;
      q === null ? (Zm(e, t), V1(t, a, i), g0(t, a, i, o), ee = !0) : e === null ? ee = ik(t, a, i, o) : ee = lk(e, t, a, i, o);
      var Ne = fS(e, t, a, ee, W, o);
      {
        var et = t.stateNode;
        ee && et.props !== i && (Ec || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", dt(t) || "a component"), Ec = !0);
      }
      return Ne;
    }
    function fS(e, t, a, i, o, s) {
      zw(e, t);
      var v = (t.flags & pt) !== Ze;
      if (!i && !v)
        return o && m1(t, a, !1), Go(e, t, s);
      var y = t.stateNode;
      Wp.current = t;
      var E;
      if (v && typeof a.getDerivedStateFromError != "function")
        E = null, Tw();
      else {
        gu(t);
        {
          if (cr(!0), E = y.render(), t.mode & kn) {
            ln(!0);
            try {
              y.render();
            } finally {
              ln(!1);
            }
          }
          cr(!1);
        }
        ko();
      }
      return t.flags |= fi, e !== null && v ? Dk(e, t, E, s) : _a(e, t, E, s), t.memoizedState = y.state, o && m1(t, a, !0), t.child;
    }
    function Fw(e) {
      var t = e.stateNode;
      t.pendingContext ? h1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && h1(e, t.context, !1), b0(e, t.containerInfo);
    }
    function Ak(e, t, a) {
      if (Fw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      z1(e, t), xm(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var y = v.element;
      if (o.isDehydrated) {
        var E = {
          element: y,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, R = t.updateQueue;
        if (R.baseState = E, t.memoizedState = E, t.flags & Ar) {
          var T = Sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return jw(e, t, y, a, T);
        } else if (y !== s) {
          var z = Sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return jw(e, t, y, a, z);
        } else {
          jT(t);
          var N = Q1(t, null, y, a);
          t.child = N;
          for (var W = N; W; )
            W.flags = W.flags & ~Jt | bi, W = W.sibling;
        }
      } else {
        if (Yf(), y === s)
          return Go(e, t, a);
        _a(e, t, y, a);
      }
      return t.child;
    }
    function jw(e, t, a, i, o) {
      return Yf(), Kg(o), t.flags |= Ar, _a(e, t, a, i), t.child;
    }
    function zk(e, t, a) {
      K1(t), e === null && Gg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, v = o.children, y = Dg(i, o);
      return y ? v = null : s !== null && Dg(i, s) && (t.flags |= Pa), zw(e, t), _a(e, t, v, a), t.child;
    }
    function Uk(e, t) {
      return e === null && Gg(t), null;
    }
    function Fk(e, t, a, i) {
      Zm(e, t);
      var o = t.pendingProps, s = a, v = s._payload, y = s._init, E = y(v);
      t.type = E;
      var R = t.tag = UO(E), T = pl(E, o), z;
      switch (R) {
        case j:
          return dS(t, E), t.type = E = sd(E), z = cS(null, t, E, T, i), z;
        case M:
          return t.type = E = $S(E), z = Uw(null, t, E, T, i), z;
        case Ae:
          return t.type = E = VS(E), z = Lw(null, t, E, T, i), z;
        case Ge: {
          if (t.type !== t.elementType) {
            var N = E.propTypes;
            N && cl(
              N,
              T,
              // Resolved for outer only
              "prop",
              Nt(E)
            );
          }
          return z = Nw(
            null,
            t,
            E,
            pl(E.type, T),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var W = "";
      throw E !== null && typeof E == "object" && E.$$typeof === Xe && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function jk(e, t, a, i, o) {
      Zm(e, t), t.tag = M;
      var s;
      return Xl(a) ? (s = !0, um(t)) : s = !1, qf(t, o), V1(t, a, i), g0(t, a, i, o), fS(null, t, a, !0, s, o);
    }
    function Pk(e, t, a, i) {
      Zm(e, t);
      var o = t.pendingProps, s;
      {
        var v = Bf(t, a, !1);
        s = $f(t, v);
      }
      qf(t, i);
      var y, E;
      gu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = Nt(a) || "Unknown";
          iS[R] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), iS[R] = !0);
        }
        t.mode & kn && dl.recordLegacyContextWarning(t, null), cr(!0), Wp.current = t, y = ed(null, t, a, o, s, i), E = td(), cr(!1);
      }
      if (ko(), t.flags |= fi, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var T = Nt(a) || "Unknown";
        qp[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), qp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var z = Nt(a) || "Unknown";
          qp[z] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), qp[z] = !0);
        }
        t.tag = M, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return Xl(a) ? (N = !0, um(t)) : N = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, i0(t), $1(t, y), g0(t, a, o, i), fS(null, t, a, !0, N, i);
      } else {
        if (t.tag = j, t.mode & kn) {
          ln(!0);
          try {
            y = ed(null, t, a, o, s, i), E = td();
          } finally {
            ln(!1);
          }
        }
        return Fr() && E && Ig(t), _a(null, t, y, i), dS(t, a), t.child;
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
          var v = Nt(t) || "Unknown";
          oS[v] || (g("%s: Function components do not support getDerivedStateFromProps.", v), oS[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = Nt(t) || "Unknown";
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
        cachePool: Ok(),
        transitions: null
      };
    }
    function Hk(e, t) {
      var a = null;
      return {
        baseLanes: gt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Bk(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return k0(e, jp);
    }
    function $k(e, t) {
      return Gs(e.childLanes, t);
    }
    function Pw(e, t, a) {
      var i = t.pendingProps;
      XO(t) && (t.flags |= pt);
      var o = hl.current, s = !1, v = (t.flags & pt) !== Ze;
      if (v || Bk(o, e) ? (s = !0, t.flags &= ~pt) : (e === null || e.memoizedState !== null) && (o = ck(o, Z1)), o = Kf(o), Xu(t, o), e === null) {
        Gg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var E = y.dehydrated;
          if (E !== null)
            return qk(t, E);
        }
        var R = i.children, T = i.fallback;
        if (s) {
          var z = Vk(t, R, T, a), N = t.child;
          return N.memoizedState = hS(a), t.memoizedState = pS, z;
        } else
          return vS(t, R);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var q = W.dehydrated;
          if (q !== null)
            return Qk(e, t, v, i, q, W, a);
        }
        if (s) {
          var ee = i.fallback, Ne = i.children, et = Yk(e, t, Ne, ee, a), qe = t.child, Dt = e.child.memoizedState;
          return qe.memoizedState = Dt === null ? hS(a) : Hk(Dt, a), qe.childLanes = $k(e, a), t.memoizedState = pS, et;
        } else {
          var Tt = i.children, B = Ik(e, t, Tt, a);
          return t.memoizedState = null, B;
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
    function Vk(e, t, a, i) {
      var o = e.mode, s = e.child, v = {
        mode: "hidden",
        children: t
      }, y, E;
      return (o & We) === Je && s !== null ? (y = s, y.childLanes = re, y.pendingProps = v, e.mode & At && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), E = is(a, o, i, null)) : (y = mS(v, o), E = is(a, o, i, null)), y.return = e, E.return = e, y.sibling = E, e.child = y, E;
    }
    function mS(e, t, a) {
      return HC(e, t, re, null);
    }
    function Hw(e, t) {
      return Rc(e, t);
    }
    function Ik(e, t, a, i) {
      var o = e.child, s = o.sibling, v = Hw(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & We) === Je && (v.lanes = i), v.return = t, v.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= Ut) : y.push(s);
      }
      return t.child = v, v;
    }
    function Yk(e, t, a, i, o) {
      var s = t.mode, v = e.child, y = v.sibling, E = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & We) === Je && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var T = t.child;
        R = T, R.childLanes = re, R.pendingProps = E, t.mode & At && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = v.selfBaseDuration, R.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        R = Hw(v, E), R.subtreeFlags = v.subtreeFlags & dr;
      var z;
      return y !== null ? z = Rc(y, i) : (z = is(i, s, o, null), z.flags |= Jt), z.return = t, R.return = t, R.sibling = z, t.child = R, z;
    }
    function Xm(e, t, a, i) {
      i !== null && Kg(i), Qf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, v = vS(t, s);
      return v.flags |= Jt, t.memoizedState = null, v;
    }
    function Wk(e, t, a, i, o) {
      var s = t.mode, v = {
        mode: "visible",
        children: a
      }, y = mS(v, s), E = is(i, s, o, null);
      return E.flags |= Jt, y.return = t, E.return = t, y.sibling = E, t.child = y, (t.mode & We) !== Je && Qf(t, e.child, null, o), E;
    }
    function qk(e, t, a) {
      return (e.mode & We) === Je ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = rt) : Ag(t) ? e.lanes = _n : e.lanes = ka, null;
    }
    function Qk(e, t, a, i, o, s, v) {
      if (a)
        if (t.flags & Ar) {
          t.flags &= ~Ar;
          var B = nS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Xm(e, t, v, B);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= pt, null;
          var te = i.children, $ = i.fallback, pe = Wk(e, t, te, $, v), Me = t.child;
          return Me.memoizedState = hS(v), t.memoizedState = pS, pe;
        }
      else {
        if (UT(), (t.mode & We) === Je)
          return Xm(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ag(o)) {
          var y, E, R;
          {
            var T = JR(o);
            y = T.digest, E = T.message, R = T.stack;
          }
          var z;
          E ? z = new Error(E) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = nS(z, y, R);
          return Xm(e, t, v, N);
        }
        var W = oa(v, e.childLanes);
        if (ml || W) {
          var q = uy();
          if (q !== null) {
            var ee = xv(q, v);
            if (ee !== zn && ee !== s.retryLane) {
              s.retryLane = ee;
              var Ne = on;
              Xa(e, ee), wr(q, e, ee, Ne);
            }
          }
          FS();
          var et = nS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Xm(e, t, v, et);
        } else if (u1(o)) {
          t.flags |= pt, t.child = e.child;
          var qe = SO.bind(null, e);
          return eT(o, qe), null;
        } else {
          PT(t, o, s.treeContext);
          var Dt = i.children, Tt = vS(t, Dt);
          return Tt.flags |= bi, Tt;
        }
      }
    }
    function Bw(e, t, a) {
      e.lanes = gt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = gt(i.lanes, t)), t0(e.return, t, a);
    }
    function Gk(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === _e) {
          var o = i.memoizedState;
          o !== null && Bw(i, a, e);
        } else if (i.tag === ne)
          Bw(i, a, e);
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
    function Kk(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Dm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Xk(e) {
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
    function Zk(e, t) {
      e !== void 0 && !Km[e] && (e !== "collapsed" && e !== "hidden" ? (Km[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Km[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function $w(e, t) {
      {
        var a = Mt(e), i = !a && typeof gi(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function Jk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Mt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!$w(e[a], a))
              return;
        } else {
          var i = gi(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), v = 0; !s.done; s = o.next()) {
                if (!$w(s.value, v))
                  return;
                v++;
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
    function Vw(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, v = i.children;
      Xk(o), Zk(s, o), Jk(v, o), _a(e, t, v, a);
      var y = hl.current, E = k0(y, jp);
      if (E)
        y = _0(y, jp), t.flags |= pt;
      else {
        var R = e !== null && (e.flags & pt) !== Ze;
        R && Gk(t, t.child, a), y = Kf(y);
      }
      if (Xu(t, y), (t.mode & We) === Je)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = Kk(t.child), z;
            T === null ? (z = t.child, t.child = null) : (z = T.sibling, T.sibling = null), yS(
              t,
              !1,
              // isBackwards
              z,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var N = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var q = W.alternate;
              if (q !== null && Dm(q) === null) {
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
    function e_(e, t, a) {
      b0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Qf(t, null, i, a) : _a(e, t, i, a), t.child;
    }
    var Iw = !1;
    function t_(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, v = t.memoizedProps, y = s.value;
      {
        "value" in s || Iw || (Iw = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && cl(E, s, "prop", "Context.Provider");
      }
      if (L1(t, o, y), v !== null) {
        var R = v.value;
        if (Fe(R, y)) {
          if (v.children === s.children && !lm())
            return Go(e, t, a);
        } else
          GT(t, o, a);
      }
      var T = s.children;
      return _a(e, t, T, a), t.child;
    }
    var Yw = !1;
    function n_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Yw || (Yw = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), qf(t, a);
      var v = lr(i);
      gu(t);
      var y;
      return Wp.current = t, cr(!0), y = s(v), cr(!1), ko(), t.flags |= fi, _a(e, t, y, a), t.child;
    }
    function Qp() {
      ml = !0;
    }
    function Zm(e, t) {
      (t.mode & We) === Je && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Jt);
    }
    function Go(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Tw(), lh(t.lanes), oa(a, t.childLanes) ? (ok(e, t), t.child) : null;
    }
    function r_(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Ut) : s.push(e), a.flags |= Jt, a;
      }
    }
    function gS(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function a_(e, t, a) {
      switch (t.tag) {
        case I:
          Fw(t), t.stateNode, Yf();
          break;
        case X:
          K1(t);
          break;
        case M: {
          var i = t.type;
          Xl(i) && um(t);
          break;
        }
        case oe:
          b0(t, t.stateNode.containerInfo);
          break;
        case Ve: {
          var o = t.memoizedProps.value, s = t.type._context;
          L1(t, s, o);
          break;
        }
        case yt:
          {
            var v = oa(a, t.childLanes);
            v && (t.flags |= Ie);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case _e: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return Xu(t, Kf(hl.current)), t.flags |= pt, null;
            var R = t.child, T = R.childLanes;
            if (oa(a, T))
              return Pw(e, t, a);
            Xu(t, Kf(hl.current));
            var z = Go(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            Xu(t, Kf(hl.current));
          break;
        }
        case ne: {
          var N = (e.flags & pt) !== Ze, W = oa(a, t.childLanes);
          if (N) {
            if (W)
              return Vw(e, t, a);
            t.flags |= pt;
          }
          var q = t.memoizedState;
          if (q !== null && (q.rendering = null, q.tail = null, q.lastEffect = null), Xu(t, hl.current), W)
            break;
          return null;
        }
        case ue:
        case ye:
          return t.lanes = re, Aw(e, t, a);
      }
      return Go(e, t, a);
    }
    function Ww(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return r_(e, t, QS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || lm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ml = !0;
        else {
          var s = gS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & pt) === Ze)
            return ml = !1, a_(e, t, a);
          (e.flags & Bc) !== Ze ? ml = !0 : ml = !1;
        }
      } else if (ml = !1, Fr() && DT(t)) {
        var v = t.index, y = LT();
        S1(t, y, v);
      }
      switch (t.lanes = re, t.tag) {
        case F:
          return Pk(e, t, t.type, a);
        case hn: {
          var E = t.elementType;
          return Fk(e, t, E, a);
        }
        case j: {
          var R = t.type, T = t.pendingProps, z = t.elementType === R ? T : pl(R, T);
          return cS(e, t, R, z, a);
        }
        case M: {
          var N = t.type, W = t.pendingProps, q = t.elementType === N ? W : pl(N, W);
          return Uw(e, t, N, q, a);
        }
        case I:
          return Ak(e, t, a);
        case X:
          return zk(e, t, a);
        case Z:
          return Uk(e, t);
        case _e:
          return Pw(e, t, a);
        case oe:
          return e_(e, t, a);
        case Ae: {
          var ee = t.type, Ne = t.pendingProps, et = t.elementType === ee ? Ne : pl(ee, Ne);
          return Lw(e, t, ee, et, a);
        }
        case Re:
          return Lk(e, t, a);
        case ct:
          return Nk(e, t, a);
        case yt:
          return Mk(e, t, a);
        case Ve:
          return t_(e, t, a);
        case vt:
          return n_(e, t, a);
        case Ge: {
          var qe = t.type, Dt = t.pendingProps, Tt = pl(qe, Dt);
          if (t.type !== t.elementType) {
            var B = qe.propTypes;
            B && cl(
              B,
              Tt,
              // Resolved for outer only
              "prop",
              Nt(qe)
            );
          }
          return Tt = pl(qe.type, Tt), Nw(e, t, qe, Tt, a);
        }
        case nt:
          return Mw(e, t, t.type, t.pendingProps, a);
        case Yt: {
          var te = t.type, $ = t.pendingProps, pe = t.elementType === te ? $ : pl(te, $);
          return jk(e, t, te, pe, a);
        }
        case ne:
          return Vw(e, t, a);
        case he:
          break;
        case ue:
          return Aw(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function nd(e) {
      e.flags |= Ie;
    }
    function qw(e) {
      e.flags |= xa, e.flags |= Ri;
    }
    var Qw, SS, Gw, Kw;
    Qw = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === X || o.tag === Z)
          kR(e, o.stateNode);
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
    }, Gw = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var v = t.stateNode, y = R0(), E = OR(v, a, s, i, o, y);
        t.updateQueue = E, E && nd(t);
      }
    }, Kw = function(e, t, a, i) {
      a !== i && nd(t);
    };
    function Gp(e, t) {
      if (!Fr())
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
    function Pr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = re, i = Ze;
      if (t) {
        if ((e.mode & At) !== Je) {
          for (var E = e.selfBaseDuration, R = e.child; R !== null; )
            a = gt(a, gt(R.lanes, R.childLanes)), i |= R.subtreeFlags & dr, i |= R.flags & dr, E += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = E;
        } else
          for (var T = e.child; T !== null; )
            a = gt(a, gt(T.lanes, T.childLanes)), i |= T.subtreeFlags & dr, i |= T.flags & dr, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & At) !== Je) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, v = e.child; v !== null; )
            a = gt(a, gt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, o += v.actualDuration, s += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var y = e.child; y !== null; )
            a = gt(a, gt(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function i_(e, t, a) {
      if (IT() && (t.mode & We) !== Je && (t.flags & pt) === Ze)
        return T1(t), Yf(), t.flags |= Ar | zl | fr, !1;
      var i = pm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($T(t), Pr(t), (t.mode & At) !== Je) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Yf(), (t.flags & pt) === Ze && (t.memoizedState = null), t.flags |= Ie, Pr(t), (t.mode & At) !== Je) {
            var v = a !== null;
            if (v) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return k1(), !0;
    }
    function Xw(e, t, a) {
      var i = t.pendingProps;
      switch (Yg(t), t.tag) {
        case F:
        case hn:
        case nt:
        case j:
        case Ae:
        case Re:
        case ct:
        case yt:
        case vt:
        case Ge:
          return Pr(t), null;
        case M: {
          var o = t.type;
          return Xl(o) && om(t), Pr(t), null;
        }
        case I: {
          var s = t.stateNode;
          if (Gf(t), Bg(t), D0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var v = pm(t);
            if (v)
              nd(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Ar) !== Ze) && (t.flags |= Vn, k1());
            }
          }
          return SS(e, t), Pr(t), null;
        }
        case X: {
          T0(t);
          var E = G1(), R = t.type;
          if (e !== null && t.stateNode != null)
            Gw(e, t, R, i, E), e.ref !== t.ref && qw(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Pr(t), null;
            }
            var T = R0(), z = pm(t);
            if (z)
              HT(t, E, T) && nd(t);
            else {
              var N = TR(R, i, E, T, t);
              Qw(N, t, !1, !1), t.stateNode = N, _R(N, R, i, E) && nd(t);
            }
            t.ref !== null && qw(t);
          }
          return Pr(t), null;
        }
        case Z: {
          var W = i;
          if (e && t.stateNode != null) {
            var q = e.memoizedProps;
            Kw(e, t, q, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ee = G1(), Ne = R0(), et = pm(t);
            et ? BT(t) && nd(t) : t.stateNode = DR(W, ee, Ne, t);
          }
          return Pr(t), null;
        }
        case _e: {
          Xf(t);
          var qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Dt = i_(e, t, qe);
            if (!Dt)
              return t.flags & fr ? t : null;
          }
          if ((t.flags & pt) !== Ze)
            return t.lanes = a, (t.mode & At) !== Je && tS(t), t;
          var Tt = qe !== null, B = e !== null && e.memoizedState !== null;
          if (Tt !== B && Tt) {
            var te = t.child;
            if (te.flags |= Al, (t.mode & We) !== Je) {
              var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !we);
              $ || k0(hl.current, Z1) ? lO() : FS();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= Ie), Pr(t), (t.mode & At) !== Je && Tt) {
            var Me = t.child;
            Me !== null && (t.treeBaseDuration -= Me.treeBaseDuration);
          }
          return null;
        }
        case oe:
          return Gf(t), SS(e, t), e === null && xT(t.stateNode.containerInfo), Pr(t), null;
        case Ve:
          var ke = t.type._context;
          return e0(ke, t), Pr(t), null;
        case Yt: {
          var st = t.type;
          return Xl(st) && om(t), Pr(t), null;
        }
        case ne: {
          Xf(t);
          var mt = t.memoizedState;
          if (mt === null)
            return Pr(t), null;
          var Xt = (t.flags & pt) !== Ze, jt = mt.rendering;
          if (jt === null)
            if (Xt)
              Gp(mt, !1);
            else {
              var Jn = uO() && (e === null || (e.flags & pt) === Ze);
              if (!Jn)
                for (var Pt = t.child; Pt !== null; ) {
                  var Yn = Dm(Pt);
                  if (Yn !== null) {
                    Xt = !0, t.flags |= pt, Gp(mt, !1);
                    var da = Yn.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= Ie), t.subtreeFlags = Ze, uk(t, a), Xu(t, _0(hl.current, jp)), t.child;
                  }
                  Pt = Pt.sibling;
                }
              mt.tail !== null && In() > gC() && (t.flags |= pt, Xt = !0, Gp(mt, !1), t.lanes = qd);
            }
          else {
            if (!Xt) {
              var Ir = Dm(jt);
              if (Ir !== null) {
                t.flags |= pt, Xt = !0;
                var vi = Ir.updateQueue;
                if (vi !== null && (t.updateQueue = vi, t.flags |= Ie), Gp(mt, !0), mt.tail === null && mt.tailMode === "hidden" && !jt.alternate && !Fr())
                  return Pr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              In() * 2 - mt.renderingStartTime > gC() && a !== ka && (t.flags |= pt, Xt = !0, Gp(mt, !1), t.lanes = qd);
            }
            if (mt.isBackwards)
              jt.sibling = t.child, t.child = jt;
            else {
              var La = mt.last;
              La !== null ? La.sibling = jt : t.child = jt, mt.last = jt;
            }
          }
          if (mt.tail !== null) {
            var Na = mt.tail;
            mt.rendering = Na, mt.tail = Na.sibling, mt.renderingStartTime = In(), Na.sibling = null;
            var pa = hl.current;
            return Xt ? pa = _0(pa, jp) : pa = Kf(pa), Xu(t, pa), Na;
          }
          return Pr(t), null;
        }
        case he:
          break;
        case ue:
        case ye: {
          US(t);
          var eu = t.memoizedState, cd = eu !== null;
          if (e !== null) {
            var fh = e.memoizedState, io = fh !== null;
            io !== cd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !G && (t.flags |= Al);
          }
          return !cd || (t.mode & We) === Je ? Pr(t) : oa(ao, ka) && (Pr(t), t.subtreeFlags & (Jt | Ie) && (t.flags |= Al)), null;
        }
        case Se:
          return null;
        case Ee:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function l_(e, t, a) {
      switch (Yg(t), t.tag) {
        case M: {
          var i = t.type;
          Xl(i) && om(t);
          var o = t.flags;
          return o & fr ? (t.flags = o & ~fr | pt, (t.mode & At) !== Je && tS(t), t) : null;
        }
        case I: {
          t.stateNode, Gf(t), Bg(t), D0();
          var s = t.flags;
          return (s & fr) !== Ze && (s & pt) === Ze ? (t.flags = s & ~fr | pt, t) : null;
        }
        case X:
          return T0(t), null;
        case _e: {
          Xf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Yf();
          }
          var y = t.flags;
          return y & fr ? (t.flags = y & ~fr | pt, (t.mode & At) !== Je && tS(t), t) : null;
        }
        case ne:
          return Xf(t), null;
        case oe:
          return Gf(t), null;
        case Ve:
          var E = t.type._context;
          return e0(E, t), null;
        case ue:
        case ye:
          return US(t), null;
        case Se:
          return null;
        default:
          return null;
      }
    }
    function Zw(e, t, a) {
      switch (Yg(t), t.tag) {
        case M: {
          var i = t.type.childContextTypes;
          i != null && om(t);
          break;
        }
        case I: {
          t.stateNode, Gf(t), Bg(t), D0();
          break;
        }
        case X: {
          T0(t);
          break;
        }
        case oe:
          Gf(t);
          break;
        case _e:
          Xf(t);
          break;
        case ne:
          Xf(t);
          break;
        case Ve:
          var o = t.type._context;
          e0(o, t);
          break;
        case ue:
        case ye:
          US(t);
          break;
      }
    }
    var Jw = null;
    Jw = /* @__PURE__ */ new Set();
    var Jm = !1, Hr = !1, o_ = typeof WeakSet == "function" ? WeakSet : Set, je = null, rd = null, ad = null;
    function u_(e) {
      ci(null, function() {
        throw e;
      }), nl();
    }
    var s_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & At)
        try {
          no(), t.componentWillUnmount();
        } finally {
          to(e);
        }
      else
        t.componentWillUnmount();
    };
    function eC(e, t) {
      try {
        es(vr, e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function ES(e, t, a) {
      try {
        s_(e, a);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function c_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        pn(e, t, i);
      }
    }
    function tC(e, t) {
      try {
        rC(e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function id(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ft && lt && e.mode & At)
              try {
                no(), i = a(null);
              } finally {
                to(e);
              }
            else
              i = a(null);
          } catch (o) {
            pn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", dt(e));
        } else
          a.current = null;
    }
    function ey(e, t, a) {
      try {
        a();
      } catch (i) {
        pn(e, t, i);
      }
    }
    var nC = !1;
    function f_(e, t) {
      bR(e.containerInfo), je = t, d_();
      var a = nC;
      return nC = !1, a;
    }
    function d_() {
      for (; je !== null; ) {
        var e = je, t = e.child;
        (e.subtreeFlags & ea) !== Ze && t !== null ? (t.return = e, je = t) : p_();
      }
    }
    function p_() {
      for (; je !== null; ) {
        var e = je;
        Sn(e);
        try {
          h_(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, je = t;
          return;
        }
        je = e.return;
      }
    }
    function h_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Vn) !== Ze) {
        switch (Sn(e), e.tag) {
          case j:
          case Ae:
          case nt:
            break;
          case M: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ec && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(e) || "instance"));
              var v = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : pl(e.type, i), o);
              {
                var y = Jw;
                v === void 0 && !y.has(e.type) && (y.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", dt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case I: {
            {
              var E = e.stateNode;
              GR(E.containerInfo);
            }
            break;
          }
          case X:
          case Z:
          case oe:
          case Yt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        sn();
      }
    }
    function yl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, v = s;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & jr) !== Za ? sv(t) : (e & vr) !== Za && Su(t), (e & Zl) !== Za && uh(!0), ey(t, a, y), (e & Zl) !== Za && uh(!1), (e & jr) !== Za ? cv() : (e & vr) !== Za && js());
          }
          v = v.next;
        } while (v !== s);
      }
    }
    function es(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Za ? Vd(t) : (e & vr) !== Za && fv(t);
            var v = s.create;
            (e & Zl) !== Za && uh(!0), s.destroy = v(), (e & Zl) !== Za && uh(!1), (e & jr) !== Za ? qc() : (e & vr) !== Za && Id();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var E = void 0;
                (s.tag & vr) !== Ze ? E = "useLayoutEffect" : (s.tag & Zl) !== Ze ? E = "useInsertionEffect" : E = "useEffect";
                var R = void 0;
                y === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? R = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + y, g("%s must not return anything besides a function, which is used for clean-up.%s", E, R);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function v_(e, t) {
      if ((t.flags & Ie) !== Ze)
        switch (t.tag) {
          case yt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, v = bw(), y = t.alternate === null ? "mount" : "update";
            xw() && (y = "nested-update"), typeof s == "function" && s(o, y, a, v);
            var E = t.return;
            e: for (; E !== null; ) {
              switch (E.tag) {
                case I:
                  var R = E.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
                case yt:
                  var T = E.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
              }
              E = E.return;
            }
            break;
          }
        }
    }
    function m_(e, t, a, i) {
      if ((a.flags & di) !== Ze)
        switch (a.tag) {
          case j:
          case Ae:
          case nt: {
            if (!Hr)
              if (a.mode & At)
                try {
                  no(), es(vr | hr, a);
                } finally {
                  to(a);
                }
              else
                es(vr | hr, a);
            break;
          }
          case M: {
            var o = a.stateNode;
            if (a.flags & Ie && !Hr)
              if (t === null)
                if (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(a) || "instance")), a.mode & At)
                  try {
                    no(), o.componentDidMount();
                  } finally {
                    to(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : pl(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(a) || "instance")), a.mode & At)
                  try {
                    no(), o.componentDidUpdate(s, v, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    to(a);
                  }
                else
                  o.componentDidUpdate(s, v, o.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(a) || "instance")), F1(a, y, o));
            break;
          }
          case I: {
            var E = a.updateQueue;
            if (E !== null) {
              var R = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case X:
                    R = a.child.stateNode;
                    break;
                  case M:
                    R = a.child.stateNode;
                    break;
                }
              F1(a, E, R);
            }
            break;
          }
          case X: {
            var T = a.stateNode;
            if (t === null && a.flags & Ie) {
              var z = a.type, N = a.memoizedProps;
              zR(T, z, N);
            }
            break;
          }
          case Z:
            break;
          case oe:
            break;
          case yt: {
            {
              var W = a.memoizedProps, q = W.onCommit, ee = W.onRender, Ne = a.stateNode.effectDuration, et = bw(), qe = t === null ? "mount" : "update";
              xw() && (qe = "nested-update"), typeof ee == "function" && ee(a.memoizedProps.id, qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, et);
              {
                typeof q == "function" && q(a.memoizedProps.id, qe, Ne, et), pO(a);
                var Dt = a.return;
                e: for (; Dt !== null; ) {
                  switch (Dt.tag) {
                    case I:
                      var Tt = Dt.stateNode;
                      Tt.effectDuration += Ne;
                      break e;
                    case yt:
                      var B = Dt.stateNode;
                      B.effectDuration += Ne;
                      break e;
                  }
                  Dt = Dt.return;
                }
              }
            }
            break;
          }
          case _e: {
            b_(e, a);
            break;
          }
          case ne:
          case Yt:
          case he:
          case ue:
          case ye:
          case Ee:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & xa && rC(a);
    }
    function y_(e) {
      switch (e.tag) {
        case j:
        case Ae:
        case nt: {
          if (e.mode & At)
            try {
              no(), eC(e, e.return);
            } finally {
              to(e);
            }
          else
            eC(e, e.return);
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && c_(e, e.return, t), tC(e, e.return);
          break;
        }
        case X: {
          tC(e, e.return);
          break;
        }
      }
    }
    function g_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === X) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? YR(o) : qR(i.stateNode, i.memoizedProps);
            } catch (v) {
              pn(e, e.return, v);
            }
          }
        } else if (i.tag === Z) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? WR(s) : QR(s, i.memoizedProps);
            } catch (v) {
              pn(e, e.return, v);
            }
        } else if (!((i.tag === ue || i.tag === ye) && i.memoizedState !== null && i !== e)) {
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
    function rC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case X:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & At)
            try {
              no(), o = t(i);
            } finally {
              to(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", dt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", dt(e)), t.current = i;
      }
    }
    function S_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function aC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, aC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === X) {
          var a = e.stateNode;
          a !== null && TT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function E_(e) {
      for (var t = e.return; t !== null; ) {
        if (iC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function iC(e) {
      return e.tag === X || e.tag === I || e.tag === oe;
    }
    function lC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || iC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== X && t.tag !== Z && t.tag !== H; ) {
          if (t.flags & Jt || t.child === null || t.tag === oe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Jt))
          return t.stateNode;
      }
    }
    function w_(e) {
      var t = E_(e);
      switch (t.tag) {
        case X: {
          var a = t.stateNode;
          t.flags & Pa && (o1(a), t.flags &= ~Pa);
          var i = lC(e);
          CS(e, i, a);
          break;
        }
        case I:
        case oe: {
          var o = t.stateNode.containerInfo, s = lC(e);
          wS(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, o = i === X || i === Z;
      if (o) {
        var s = e.stateNode;
        t ? BR(a, s, t) : PR(a, s);
      } else if (i !== oe) {
        var v = e.child;
        if (v !== null) {
          wS(v, t, a);
          for (var y = v.sibling; y !== null; )
            wS(y, t, a), y = y.sibling;
        }
      }
    }
    function CS(e, t, a) {
      var i = e.tag, o = i === X || i === Z;
      if (o) {
        var s = e.stateNode;
        t ? HR(a, s, t) : jR(a, s);
      } else if (i !== oe) {
        var v = e.child;
        if (v !== null) {
          CS(v, t, a);
          for (var y = v.sibling; y !== null; )
            CS(y, t, a), y = y.sibling;
        }
      }
    }
    var Br = null, gl = !1;
    function C_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case X: {
              Br = i.stateNode, gl = !1;
              break e;
            }
            case I: {
              Br = i.stateNode.containerInfo, gl = !0;
              break e;
            }
            case oe: {
              Br = i.stateNode.containerInfo, gl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        oC(e, t, a), Br = null, gl = !1;
      }
      S_(a);
    }
    function ts(e, t, a) {
      for (var i = a.child; i !== null; )
        oC(e, t, i), i = i.sibling;
    }
    function oC(e, t, a) {
      switch (ov(a), a.tag) {
        case X:
          Hr || id(a, t);
        case Z: {
          {
            var i = Br, o = gl;
            Br = null, ts(e, t, a), Br = i, gl = o, Br !== null && (gl ? VR(Br, a.stateNode) : $R(Br, a.stateNode));
          }
          return;
        }
        case H: {
          Br !== null && (gl ? IR(Br, a.stateNode) : Mg(Br, a.stateNode));
          return;
        }
        case oe: {
          {
            var s = Br, v = gl;
            Br = a.stateNode.containerInfo, gl = !0, ts(e, t, a), Br = s, gl = v;
          }
          return;
        }
        case j:
        case Ae:
        case Ge:
        case nt: {
          if (!Hr) {
            var y = a.updateQueue;
            if (y !== null) {
              var E = y.lastEffect;
              if (E !== null) {
                var R = E.next, T = R;
                do {
                  var z = T, N = z.destroy, W = z.tag;
                  N !== void 0 && ((W & Zl) !== Za ? ey(a, t, N) : (W & vr) !== Za && (Su(a), a.mode & At ? (no(), ey(a, t, N), to(a)) : ey(a, t, N), js())), T = T.next;
                } while (T !== R);
              }
            }
          }
          ts(e, t, a);
          return;
        }
        case M: {
          if (!Hr) {
            id(a, t);
            var q = a.stateNode;
            typeof q.componentWillUnmount == "function" && ES(a, t, q);
          }
          ts(e, t, a);
          return;
        }
        case he: {
          ts(e, t, a);
          return;
        }
        case ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & We
          ) {
            var ee = Hr;
            Hr = ee || a.memoizedState !== null, ts(e, t, a), Hr = ee;
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
    function x_(e) {
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
            s !== null && sT(s);
          }
        }
      }
    }
    function uC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new o_()), t.forEach(function(i) {
          var o = EO.bind(null, e, i);
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
    function R_(e, t, a) {
      rd = a, ad = e, Sn(t), sC(t, e), Sn(t), rd = null, ad = null;
    }
    function Sl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            C_(e, t, s);
          } catch (E) {
            pn(s, t, E);
          }
        }
      var v = ms();
      if (t.subtreeFlags & ta)
        for (var y = t.child; y !== null; )
          Sn(y), sC(y, e), y = y.sibling;
      Sn(v);
    }
    function sC(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case j:
        case Ae:
        case Ge:
        case nt: {
          if (Sl(t, e), ro(e), o & Ie) {
            try {
              yl(Zl | hr, e, e.return), es(Zl | hr, e);
            } catch (st) {
              pn(e, e.return, st);
            }
            if (e.mode & At) {
              try {
                no(), yl(vr | hr, e, e.return);
              } catch (st) {
                pn(e, e.return, st);
              }
              to(e);
            } else
              try {
                yl(vr | hr, e, e.return);
              } catch (st) {
                pn(e, e.return, st);
              }
          }
          return;
        }
        case M: {
          Sl(t, e), ro(e), o & xa && i !== null && id(i, i.return);
          return;
        }
        case X: {
          Sl(t, e), ro(e), o & xa && i !== null && id(i, i.return);
          {
            if (e.flags & Pa) {
              var s = e.stateNode;
              try {
                o1(s);
              } catch (st) {
                pn(e, e.return, st);
              }
            }
            if (o & Ie) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, E = i !== null ? i.memoizedProps : y, R = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    UR(v, T, R, E, y, e);
                  } catch (st) {
                    pn(e, e.return, st);
                  }
              }
            }
          }
          return;
        }
        case Z: {
          if (Sl(t, e), ro(e), o & Ie) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, N = e.memoizedProps, W = i !== null ? i.memoizedProps : N;
            try {
              FR(z, W, N);
            } catch (st) {
              pn(e, e.return, st);
            }
          }
          return;
        }
        case I: {
          if (Sl(t, e), ro(e), o & Ie && i !== null) {
            var q = i.memoizedState;
            if (q.isDehydrated)
              try {
                uT(t.containerInfo);
              } catch (st) {
                pn(e, e.return, st);
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
            var Ne = ee.stateNode, et = ee.memoizedState, qe = et !== null;
            if (Ne.isHidden = qe, qe) {
              var Dt = ee.alternate !== null && ee.alternate.memoizedState !== null;
              Dt || iO();
            }
          }
          if (o & Ie) {
            try {
              x_(e);
            } catch (st) {
              pn(e, e.return, st);
            }
            uC(e);
          }
          return;
        }
        case ue: {
          var Tt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & We
          ) {
            var B = Hr;
            Hr = B || Tt, Sl(t, e), Hr = B;
          } else
            Sl(t, e);
          if (ro(e), o & Al) {
            var te = e.stateNode, $ = e.memoizedState, pe = $ !== null, Me = e;
            if (te.isHidden = pe, pe && !Tt && (Me.mode & We) !== Je) {
              je = Me;
              for (var ke = Me.child; ke !== null; )
                je = ke, k_(ke), ke = ke.sibling;
            }
            g_(Me, pe);
          }
          return;
        }
        case ne: {
          Sl(t, e), ro(e), o & Ie && uC(e);
          return;
        }
        case he:
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
          w_(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        e.flags &= ~Jt;
      }
      t & bi && (e.flags &= ~bi);
    }
    function T_(e, t, a) {
      rd = a, ad = t, je = e, cC(e, t, a), rd = null, ad = null;
    }
    function cC(e, t, a) {
      for (var i = (e.mode & We) !== Je; je !== null; ) {
        var o = je, s = o.child;
        if (o.tag === ue && i) {
          var v = o.memoizedState !== null, y = v || Jm;
          if (y) {
            xS(e, t, a);
            continue;
          } else {
            var E = o.alternate, R = E !== null && E.memoizedState !== null, T = R || Hr, z = Jm, N = Hr;
            Jm = y, Hr = T, Hr && !N && (je = o, __(o));
            for (var W = s; W !== null; )
              je = W, cC(
                W,
                // New root; bubble back up to here and stop.
                t,
                a
              ), W = W.sibling;
            je = o, Jm = z, Hr = N, xS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & di) !== Ze && s !== null ? (s.return = o, je = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; je !== null; ) {
        var i = je;
        if ((i.flags & di) !== Ze) {
          var o = i.alternate;
          Sn(i);
          try {
            m_(t, o, i, a);
          } catch (v) {
            pn(i, i.return, v);
          }
          sn();
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
    function k_(e) {
      for (; je !== null; ) {
        var t = je, a = t.child;
        switch (t.tag) {
          case j:
          case Ae:
          case Ge:
          case nt: {
            if (t.mode & At)
              try {
                no(), yl(vr, t, t.return);
              } finally {
                to(t);
              }
            else
              yl(vr, t, t.return);
            break;
          }
          case M: {
            id(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && ES(t, t.return, i);
            break;
          }
          case X: {
            id(t, t.return);
            break;
          }
          case ue: {
            var o = t.memoizedState !== null;
            if (o) {
              fC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, je = a) : fC(e);
      }
    }
    function fC(e) {
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
    function __(e) {
      for (; je !== null; ) {
        var t = je, a = t.child;
        if (t.tag === ue) {
          var i = t.memoizedState !== null;
          if (i) {
            dC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, je = a) : dC(e);
      }
    }
    function dC(e) {
      for (; je !== null; ) {
        var t = je;
        Sn(t);
        try {
          y_(t);
        } catch (i) {
          pn(t, t.return, i);
        }
        if (sn(), t === e) {
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
    function O_(e, t, a, i) {
      je = t, D_(t, e, a, i);
    }
    function D_(e, t, a, i) {
      for (; je !== null; ) {
        var o = je, s = o.child;
        (o.subtreeFlags & na) !== Ze && s !== null ? (s.return = o, je = s) : L_(e, t, a, i);
      }
    }
    function L_(e, t, a, i) {
      for (; je !== null; ) {
        var o = je;
        if ((o.flags & Jr) !== Ze) {
          Sn(o);
          try {
            N_(t, o, a, i);
          } catch (v) {
            pn(o, o.return, v);
          }
          sn();
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
    function N_(e, t, a, i) {
      switch (t.tag) {
        case j:
        case Ae:
        case nt: {
          if (t.mode & At) {
            eS();
            try {
              es(jr | hr, t);
            } finally {
              J0(t);
            }
          } else
            es(jr | hr, t);
          break;
        }
      }
    }
    function M_(e) {
      je = e, A_();
    }
    function A_() {
      for (; je !== null; ) {
        var e = je, t = e.child;
        if ((je.flags & Ut) !== Ze) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              je = o, F_(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var v = s.child;
                if (v !== null) {
                  s.child = null;
                  do {
                    var y = v.sibling;
                    v.sibling = null, v = y;
                  } while (v !== null);
                }
              }
            }
            je = e;
          }
        }
        (e.subtreeFlags & na) !== Ze && t !== null ? (t.return = e, je = t) : z_();
      }
    }
    function z_() {
      for (; je !== null; ) {
        var e = je;
        (e.flags & Jr) !== Ze && (Sn(e), U_(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, je = t;
          return;
        }
        je = e.return;
      }
    }
    function U_(e) {
      switch (e.tag) {
        case j:
        case Ae:
        case nt: {
          e.mode & At ? (eS(), yl(jr | hr, e, e.return), J0(e)) : yl(jr | hr, e, e.return);
          break;
        }
      }
    }
    function F_(e, t) {
      for (; je !== null; ) {
        var a = je;
        Sn(a), P_(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, je = i) : j_(e);
      }
    }
    function j_(e) {
      for (; je !== null; ) {
        var t = je, a = t.sibling, i = t.return;
        if (aC(t), t === e) {
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
    function P_(e, t) {
      switch (e.tag) {
        case j:
        case Ae:
        case nt: {
          e.mode & At ? (eS(), yl(jr, e, t), J0(e)) : yl(jr, e, t);
          break;
        }
      }
    }
    function H_(e) {
      switch (e.tag) {
        case j:
        case Ae:
        case nt: {
          try {
            es(vr | hr, e);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
      }
    }
    function B_(e) {
      switch (e.tag) {
        case j:
        case Ae:
        case nt: {
          try {
            es(jr | hr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function $_(e) {
      switch (e.tag) {
        case j:
        case Ae:
        case nt: {
          try {
            yl(vr | hr, e, e.return);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && ES(e, e.return, t);
          break;
        }
      }
    }
    function V_(e) {
      switch (e.tag) {
        case j:
        case Ae:
        case nt:
          try {
            yl(jr | hr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Kp = Symbol.for;
      Kp("selector.component"), Kp("selector.has_pseudo_class"), Kp("selector.role"), Kp("selector.test_id"), Kp("selector.text");
    }
    var I_ = [];
    function Y_() {
      I_.forEach(function(e) {
        return e();
      });
    }
    var W_ = h.ReactCurrentActQueue;
    function q_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function pC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && W_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Q_ = Math.ceil, bS = h.ReactCurrentDispatcher, RS = h.ReactCurrentOwner, $r = h.ReactCurrentBatchConfig, El = h.ReactCurrentActQueue, gr = (
      /*             */
      0
    ), hC = (
      /*               */
      1
    ), Vr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Ko = 0, Xp = 1, wc = 2, ty = 3, Zp = 4, vC = 5, TS = 6, Ot = gr, Oa = null, Pn = null, Sr = re, ao = re, kS = Yu(re), Er = Ko, Jp = null, ny = re, eh = re, ry = re, th = null, Ja = null, _S = 0, mC = 500, yC = 1 / 0, G_ = 500, Xo = null;
    function nh() {
      yC = In() + G_;
    }
    function gC() {
      return yC;
    }
    var ay = !1, OS = null, ld = null, Cc = !1, ns = null, rh = re, DS = [], LS = null, K_ = 50, ah = 0, NS = null, MS = !1, iy = !1, X_ = 50, od = 0, ly = null, ih = on, oy = re, SC = !1;
    function uy() {
      return Oa;
    }
    function Da() {
      return (Ot & (Vr | ji)) !== gr ? In() : (ih !== on || (ih = In()), ih);
    }
    function rs(e) {
      var t = e.mode;
      if ((t & We) === Je)
        return rt;
      if ((Ot & Vr) !== gr && Sr !== re)
        return Tu(Sr);
      var a = qT() !== WT;
      if (a) {
        if ($r.transition !== null) {
          var i = $r.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return oy === zn && (oy = Ev()), oy;
      }
      var o = Ya();
      if (o !== zn)
        return o;
      var s = LR();
      return s;
    }
    function Z_(e) {
      var t = e.mode;
      return (t & We) === Je ? rt : la();
    }
    function wr(e, t, a, i) {
      CO(), SC && g("useInsertionEffect must not schedule updates."), MS && (iy = !0), Uo(e, a, i), (Ot & Vr) !== re && e === Oa ? RO(t) : (Ta && hf(e, t, a), TO(t), e === Oa && ((Ot & Vr) === gr && (eh = gt(eh, a)), Er === Zp && as(e, Sr)), ei(e, i), a === rt && Ot === gr && (t.mode & We) === Je && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !El.isBatchingLegacy && (nh(), g1()));
    }
    function J_(e, t, a) {
      var i = e.current;
      i.lanes = t, Uo(e, t, a), ei(e, a);
    }
    function eO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ot & Vr) !== gr
      );
    }
    function ei(e, t) {
      var a = e.callbackNode;
      Zy(e, t);
      var i = Ws(e, e === Oa ? Sr : re);
      if (i === re) {
        a !== null && zC(a), e.callbackNode = null, e.callbackPriority = zn;
        return;
      }
      var o = Un(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(El.current !== null && a !== HS)) {
        a == null && s !== rt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && zC(a);
      var v;
      if (o === rt)
        e.tag === Wu ? (El.isBatchingLegacy !== null && (El.didScheduleLegacyUpdate = !0), OT(CC.bind(null, e))) : y1(CC.bind(null, e)), El.current !== null ? El.current.push(qu) : MR(function() {
          (Ot & (Vr | ji)) === gr && qu();
        }), v = null;
      else {
        var y;
        switch (pr(i)) {
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
        v = BS(y, EC.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = v;
    }
    function EC(e, t) {
      if (Ck(), ih = on, oy = re, (Ot & (Vr | ji)) !== gr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Jo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Ws(e, e === Oa ? Sr : re);
      if (o === re)
        return null;
      var s = !Qs(e, o) && !Sv(e, o) && !t, v = s ? cO(e, o) : cy(e, o);
      if (v !== Ko) {
        if (v === wc) {
          var y = Il(e);
          y !== re && (o = y, v = AS(e, y));
        }
        if (v === Xp) {
          var E = Jp;
          throw xc(e, re), as(e, o), ei(e, In()), E;
        }
        if (v === TS)
          as(e, o);
        else {
          var R = !Qs(e, o), T = e.current.alternate;
          if (R && !nO(T)) {
            if (v = cy(e, o), v === wc) {
              var z = Il(e);
              z !== re && (o = z, v = AS(e, z));
            }
            if (v === Xp) {
              var N = Jp;
              throw xc(e, re), as(e, o), ei(e, In()), N;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, tO(e, v, o);
        }
      }
      return ei(e, In()), e.callbackNode === a ? EC.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = th;
      if (vf(e)) {
        var i = xc(e, t);
        i.flags |= Ar, CT(e.containerInfo);
      }
      var o = cy(e, t);
      if (o !== wc) {
        var s = Ja;
        Ja = a, s !== null && wC(s);
      }
      return o;
    }
    function wC(e) {
      Ja === null ? Ja = e : Ja.push.apply(Ja, e);
    }
    function tO(e, t, a) {
      switch (t) {
        case Ko:
        case Xp:
          throw new Error("Root did not complete. This is a bug in React.");
        case wc: {
          bc(e, Ja, Xo);
          break;
        }
        case ty: {
          if (as(e, a), mv(a) && // do not delay if we're inside an act() scope
          !UC()) {
            var i = _S + mC - In();
            if (i > 10) {
              var o = Ws(e, re);
              if (o !== re)
                break;
              var s = e.suspendedLanes;
              if (!zo(s, a)) {
                Da(), df(e, s);
                break;
              }
              e.timeoutHandle = Lg(bc.bind(null, e, Ja, Xo), i);
              break;
            }
          }
          bc(e, Ja, Xo);
          break;
        }
        case Zp: {
          if (as(e, a), gv(a))
            break;
          if (!UC()) {
            var v = sf(e, a), y = v, E = In() - y, R = wO(E) - E;
            if (R > 10) {
              e.timeoutHandle = Lg(bc.bind(null, e, Ja, Xo), R);
              break;
            }
          }
          bc(e, Ja, Xo);
          break;
        }
        case vC: {
          bc(e, Ja, Xo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function nO(e) {
      for (var t = e; ; ) {
        if (t.flags & bo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], v = s.getSnapshot, y = s.value;
                try {
                  if (!Fe(v(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & bo && E !== null) {
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
    function as(e, t) {
      t = Gs(t, ry), t = Gs(t, eh), Cv(e, t);
    }
    function CC(e) {
      if (xk(), (Ot & (Vr | ji)) !== gr)
        throw new Error("Should not already be working.");
      Jo();
      var t = Ws(e, re);
      if (!oa(t, rt))
        return ei(e, In()), null;
      var a = cy(e, t);
      if (e.tag !== Wu && a === wc) {
        var i = Il(e);
        i !== re && (t = i, a = AS(e, i));
      }
      if (a === Xp) {
        var o = Jp;
        throw xc(e, re), as(e, t), ei(e, In()), o;
      }
      if (a === TS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, bc(e, Ja, Xo), ei(e, In()), null;
    }
    function rO(e, t) {
      t !== re && (Xd(e, gt(t, rt)), ei(e, In()), (Ot & (Vr | ji)) === gr && (nh(), qu()));
    }
    function zS(e, t) {
      var a = Ot;
      Ot |= hC;
      try {
        return e(t);
      } finally {
        Ot = a, Ot === gr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !El.isBatchingLegacy && (nh(), g1());
      }
    }
    function aO(e, t, a, i, o) {
      var s = Ya(), v = $r.transition;
      try {
        return $r.transition = null, On(Fn), e(t, a, i, o);
      } finally {
        On(s), $r.transition = v, Ot === gr && nh();
      }
    }
    function Zo(e) {
      ns !== null && ns.tag === Wu && (Ot & (Vr | ji)) === gr && Jo();
      var t = Ot;
      Ot |= hC;
      var a = $r.transition, i = Ya();
      try {
        return $r.transition = null, On(Fn), e ? e() : void 0;
      } finally {
        On(i), $r.transition = a, Ot = t, (Ot & (Vr | ji)) === gr && qu();
      }
    }
    function xC() {
      return (Ot & (Vr | ji)) !== gr;
    }
    function sy(e, t) {
      ca(kS, ao, e), ao = gt(ao, t);
    }
    function US(e) {
      ao = kS.current, sa(kS, e);
    }
    function xc(e, t) {
      e.finishedWork = null, e.finishedLanes = re;
      var a = e.timeoutHandle;
      if (a !== Ng && (e.timeoutHandle = Ng, NR(a)), Pn !== null)
        for (var i = Pn.return; i !== null; ) {
          var o = i.alternate;
          Zw(o, i), i = i.return;
        }
      Oa = e;
      var s = Rc(e.current, null);
      return Pn = s, Sr = ao = t, Er = Ko, Jp = null, ny = re, eh = re, ry = re, th = null, Ja = null, XT(), dl.discardPendingWarnings(), s;
    }
    function bC(e, t) {
      do {
        var a = Pn;
        try {
          if (ym(), ew(), sn(), RS.current = null, a === null || a.return === null) {
            Er = Xp, Jp = t, Pn = null;
            return;
          }
          if (ft && a.mode & At && Gm(a, !0), Ke)
            if (ko(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              pv(a, i, Sr);
            } else
              dv(a, t, Sr);
          _k(e, a.return, a, t, Sr), _C(a);
        } catch (o) {
          t = o, Pn === a && a !== null ? (a = a.return, Pn = a) : a = Pn;
          continue;
        }
        return;
      } while (!0);
    }
    function RC() {
      var e = bS.current;
      return bS.current = Im, e === null ? Im : e;
    }
    function TC(e) {
      bS.current = e;
    }
    function iO() {
      _S = In();
    }
    function lh(e) {
      ny = gt(e, ny);
    }
    function lO() {
      Er === Ko && (Er = ty);
    }
    function FS() {
      (Er === Ko || Er === ty || Er === wc) && (Er = Zp), Oa !== null && (qs(ny) || qs(eh)) && as(Oa, Sr);
    }
    function oO(e) {
      Er !== Zp && (Er = wc), th === null ? th = [e] : th.push(e);
    }
    function uO() {
      return Er === Ko;
    }
    function cy(e, t) {
      var a = Ot;
      Ot |= Vr;
      var i = RC();
      if (Oa !== e || Sr !== t) {
        if (Ta) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (oh(e, Sr), o.clear()), Zd(e, t);
        }
        Xo = Xs(), xc(e, t);
      }
      wu(t);
      do
        try {
          sO();
          break;
        } catch (s) {
          bC(e, s);
        }
      while (!0);
      if (ym(), Ot = a, TC(i), Pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Bl(), Oa = null, Sr = re, Er;
    }
    function sO() {
      for (; Pn !== null; )
        kC(Pn);
    }
    function cO(e, t) {
      var a = Ot;
      Ot |= Vr;
      var i = RC();
      if (Oa !== e || Sr !== t) {
        if (Ta) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (oh(e, Sr), o.clear()), Zd(e, t);
        }
        Xo = Xs(), nh(), xc(e, t);
      }
      wu(t);
      do
        try {
          fO();
          break;
        } catch (s) {
          bC(e, s);
        }
      while (!0);
      return ym(), TC(i), Ot = a, Pn !== null ? (Hs(), Ko) : (Bl(), Oa = null, Sr = re, Er);
    }
    function fO() {
      for (; Pn !== null && !iv(); )
        kC(Pn);
    }
    function kC(e) {
      var t = e.alternate;
      Sn(e);
      var a;
      (e.mode & At) !== Je ? (Z0(e), a = jS(t, e, ao), Gm(e, !0)) : a = jS(t, e, ao), sn(), e.memoizedProps = e.pendingProps, a === null ? _C(e) : Pn = a, RS.current = null;
    }
    function _C(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & zl) === Ze) {
          Sn(t);
          var o = void 0;
          if ((t.mode & At) === Je ? o = Xw(a, t, ao) : (Z0(t), o = Xw(a, t, ao), Gm(t, !1)), sn(), o !== null) {
            Pn = o;
            return;
          }
        } else {
          var s = l_(a, t);
          if (s !== null) {
            s.flags &= rl, Pn = s;
            return;
          }
          if ((t.mode & At) !== Je) {
            Gm(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= zl, i.subtreeFlags = Ze, i.deletions = null;
          else {
            Er = TS, Pn = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          Pn = E;
          return;
        }
        t = i, Pn = t;
      } while (t !== null);
      Er === Ko && (Er = vC);
    }
    function bc(e, t, a) {
      var i = Ya(), o = $r.transition;
      try {
        $r.transition = null, On(Fn), dO(e, t, a, i);
      } finally {
        $r.transition = o, On(i);
      }
      return null;
    }
    function dO(e, t, a, i) {
      do
        Jo();
      while (ns !== null);
      if (xO(), (Ot & (Vr | ji)) !== gr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (uv(s), o === null)
        return Fs(), null;
      if (s === re && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = re, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = zn;
      var v = gt(o.lanes, o.childLanes);
      pf(e, v), e === Oa && (Oa = null, Pn = null, Sr = re), ((o.subtreeFlags & na) !== Ze || (o.flags & na) !== Ze) && (Cc || (Cc = !0, LS = a, BS(Ti, function() {
        return Jo(), null;
      })));
      var y = (o.subtreeFlags & (ea | ta | di | na)) !== Ze, E = (o.flags & (ea | ta | di | na)) !== Ze;
      if (y || E) {
        var R = $r.transition;
        $r.transition = null;
        var T = Ya();
        On(Fn);
        var z = Ot;
        Ot |= ji, RS.current = null, f_(e, o), Rw(), R_(e, o, s), RR(e.containerInfo), e.current = o, Eu(s), T_(o, e, s), hv(), vu(), Ot = z, On(T), $r.transition = R;
      } else
        e.current = o, Rw();
      var N = Cc;
      if (Cc ? (Cc = !1, ns = e, rh = s) : (od = 0, ly = null), v = e.pendingLanes, v === re && (ld = null), N || NC(e.current, !1), Pl(o.stateNode, i), Ta && e.memoizedUpdaters.clear(), Y_(), ei(e, In()), t !== null)
        for (var W = e.onRecoverableError, q = 0; q < t.length; q++) {
          var ee = t[q], Ne = ee.stack, et = ee.digest;
          W(ee.value, {
            componentStack: Ne,
            digest: et
          });
        }
      if (ay) {
        ay = !1;
        var qe = OS;
        throw OS = null, qe;
      }
      return oa(rh, rt) && e.tag !== Wu && Jo(), v = e.pendingLanes, oa(v, rt) ? (wk(), e === NS ? ah++ : (ah = 0, NS = e)) : ah = 0, qu(), Fs(), null;
    }
    function Jo() {
      if (ns !== null) {
        var e = pr(rh), t = ng(Oi, e), a = $r.transition, i = Ya();
        try {
          return $r.transition = null, On(t), hO();
        } finally {
          On(i), $r.transition = a;
        }
      }
      return !1;
    }
    function pO(e) {
      DS.push(e), Cc || (Cc = !0, BS(Ti, function() {
        return Jo(), null;
      }));
    }
    function hO() {
      if (ns === null)
        return !1;
      var e = LS;
      LS = null;
      var t = ns, a = rh;
      if (ns = null, rh = re, (Ot & (Vr | ji)) !== gr)
        throw new Error("Cannot flush passive effects while already rendering.");
      MS = !0, iy = !1, Ps(a);
      var i = Ot;
      Ot |= ji, M_(t.current), O_(t, t.current, a, e);
      {
        var o = DS;
        DS = [];
        for (var s = 0; s < o.length; s++) {
          var v = o[s];
          v_(t, v);
        }
      }
      ki(), NC(t.current, !0), Ot = i, qu(), iy ? t === ly ? od++ : (od = 0, ly = t) : od = 0, MS = !1, iy = !1, $d(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function OC(e) {
      return ld !== null && ld.has(e);
    }
    function vO(e) {
      ld === null ? ld = /* @__PURE__ */ new Set([e]) : ld.add(e);
    }
    function mO(e) {
      ay || (ay = !0, OS = e);
    }
    var yO = mO;
    function DC(e, t, a) {
      var i = Sc(a, t), o = kw(e, i, rt), s = Gu(e, o, rt), v = Da();
      s !== null && (Uo(s, rt, v), ei(s, v));
    }
    function pn(e, t, a) {
      if (u_(a), uh(!1), e.tag === I) {
        DC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === I) {
          DC(i, e, a);
          return;
        } else if (i.tag === M) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !OC(s)) {
            var v = Sc(a, e), y = aS(i, v, rt), E = Gu(i, y, rt), R = Da();
            E !== null && (Uo(E, rt, R), ei(E, R));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function gO(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Da();
      df(e, a), kO(e), Oa === e && zo(Sr, a) && (Er === Zp || Er === ty && mv(Sr) && In() - _S < mC ? xc(e, re) : ry = gt(ry, a)), ei(e, o);
    }
    function LC(e, t) {
      t === zn && (t = Z_(e));
      var a = Da(), i = Xa(e, t);
      i !== null && (Uo(i, t, a), ei(i, a));
    }
    function SO(e) {
      var t = e.memoizedState, a = zn;
      t !== null && (a = t.retryLane), LC(e, a);
    }
    function EO(e, t) {
      var a = zn, i;
      switch (e.tag) {
        case _e:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case ne:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), LC(e, a);
    }
    function wO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Q_(e / 1960) * 1960;
    }
    function CO() {
      if (ah > K_)
        throw ah = 0, NS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      od > X_ && (od = 0, ly = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function xO() {
      dl.flushLegacyContextWarning(), dl.flushPendingUnsafeLifecycleWarnings();
    }
    function NC(e, t) {
      Sn(e), fy(e, Ba, $_), t && fy(e, Ro, V_), fy(e, Ba, H_), t && fy(e, Ro, B_), sn();
    }
    function fy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ze ? i = i.child : ((i.flags & t) !== Ze && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var dy = null;
    function MC(e) {
      {
        if ((Ot & Vr) !== gr || !(e.mode & We))
          return;
        var t = e.tag;
        if (t !== F && t !== I && t !== M && t !== j && t !== Ae && t !== Ge && t !== nt)
          return;
        var a = dt(e) || "ReactComponent";
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
          i ? Sn(e) : sn();
        }
      }
    }
    var jS;
    {
      var bO = null;
      jS = function(e, t, a) {
        var i = BC(bO, t);
        try {
          return Ww(e, t, a);
        } catch (s) {
          if (FT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (ym(), ew(), Zw(e, t), BC(t, i), t.mode & At && Z0(t), ci(null, Ww, null, e, t, a), Gy()) {
            var o = nl();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var AC = !1, PS;
    PS = /* @__PURE__ */ new Set();
    function RO(e) {
      if (Kr && !gk())
        switch (e.tag) {
          case j:
          case Ae:
          case nt: {
            var t = Pn && dt(Pn) || "Unknown", a = t;
            if (!PS.has(a)) {
              PS.add(a);
              var i = dt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case M: {
            AC || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), AC = !0);
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
    function zC(e) {
      if (e !== HS)
        return Yc(e);
    }
    function UC() {
      return El.current !== null;
    }
    function TO(e) {
      {
        if (e.mode & We) {
          if (!pC())
            return;
        } else if (!q_() || Ot !== gr || e.tag !== j && e.tag !== Ae && e.tag !== nt)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, dt(e));
          } finally {
            t ? Sn(e) : sn();
          }
        }
      }
    }
    function kO(e) {
      e.tag !== Wu && pC() && El.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function uh(e) {
      SC = e;
    }
    var Pi = null, ud = null, _O = function(e) {
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
    function FC(e, t) {
      {
        if (Pi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case M: {
            typeof i == "function" && (o = !0);
            break;
          }
          case j: {
            (typeof i == "function" || s === Xe) && (o = !0);
            break;
          }
          case Ae: {
            (s === Te || s === Xe) && (o = !0);
            break;
          }
          case Ge:
          case nt: {
            (s === St || s === Xe) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var v = Pi(a);
          if (v !== void 0 && v === Pi(i))
            return !0;
        }
        return !1;
      }
    }
    function jC(e) {
      {
        if (Pi === null || typeof WeakSet != "function")
          return;
        ud === null && (ud = /* @__PURE__ */ new WeakSet()), ud.add(e);
      }
    }
    var OO = function(e, t) {
      {
        if (Pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Jo(), Zo(function() {
          IS(e.current, i, a);
        });
      }
    }, DO = function(e, t) {
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
        var i = e.alternate, o = e.child, s = e.sibling, v = e.tag, y = e.type, E = null;
        switch (v) {
          case j:
          case nt:
          case M:
            E = y;
            break;
          case Ae:
            E = y.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, T = !1;
        if (E !== null) {
          var z = Pi(E);
          z !== void 0 && (a.has(z) ? T = !0 : t.has(z) && (v === M ? T = !0 : R = !0));
        }
        if (ud !== null && (ud.has(e) || i !== null && ud.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || R) {
          var N = Xa(e, rt);
          N !== null && wr(N, e, rt, on);
        }
        o !== null && !T && IS(o, t, a), s !== null && IS(s, t, a);
      }
    }
    var LO = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return YS(e.current, i, a), a;
      }
    };
    function YS(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, v = e.type, y = null;
        switch (s) {
          case j:
          case nt:
          case M:
            y = v;
            break;
          case Ae:
            y = v.render;
            break;
        }
        var E = !1;
        y !== null && t.has(y) && (E = !0), E ? NO(e, a) : i !== null && YS(i, t, a), o !== null && YS(o, t, a);
      }
    }
    function NO(e, t) {
      {
        var a = MO(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case X:
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
    function MO(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === X)
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
        var PC = Object.preventExtensions({});
      } catch {
        WS = !0;
      }
    }
    function AO(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ze, this.subtreeFlags = Ze, this.deletions = null, this.lanes = re, this.childLanes = re, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !WS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var hi = function(e, t, a, i) {
      return new AO(e, t, a, i);
    };
    function qS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function zO(e) {
      return typeof e == "function" && !qS(e) && e.defaultProps === void 0;
    }
    function UO(e) {
      if (typeof e == "function")
        return qS(e) ? M : j;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Te)
          return Ae;
        if (t === St)
          return Ge;
      }
      return F;
    }
    function Rc(e, t) {
      var a = e.alternate;
      a === null ? (a = hi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ze, a.subtreeFlags = Ze, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & dr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case F:
        case j:
        case nt:
          a.type = sd(e.type);
          break;
        case M:
          a.type = $S(e.type);
          break;
        case Ae:
          a.type = VS(e.type);
          break;
      }
      return a;
    }
    function FO(e, t) {
      e.flags &= dr | Jt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = re, e.lanes = t, e.child = null, e.subtreeFlags = Ze, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ze, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function jO(e, t, a) {
      var i;
      return e === sm ? (i = We, t === !0 && (i |= kn, i |= Va)) : i = Je, Ta && (i |= At), hi(I, null, null, i);
    }
    function QS(e, t, a, i, o, s) {
      var v = F, y = e;
      if (typeof e == "function")
        qS(e) ? (v = M, y = $S(y)) : y = sd(y);
      else if (typeof e == "string")
        v = X;
      else
        e: switch (e) {
          case Ea:
            return is(a.children, o, s, t);
          case Vi:
            v = ct, o |= kn, (o & We) !== Je && (o |= Va);
            break;
          case D:
            return PO(a, o, s, t);
          case xt:
            return HO(a, o, s, t);
          case _t:
            return BO(a, o, s, t);
          case rn:
            return HC(a, o, s, t);
          case Tr:
          case $n:
          case yi:
          case an:
          case nn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ce:
                  v = Ve;
                  break e;
                case be:
                  v = vt;
                  break e;
                case Te:
                  v = Ae, y = VS(y);
                  break e;
                case St:
                  v = Ge;
                  break e;
                case Xe:
                  v = hn, y = null;
                  break e;
              }
            var E = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var R = i ? dt(i) : null;
              R && (E += `

Check the render method of \`` + R + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
          }
        }
      var T = hi(v, a, t, o);
      return T.elementType = e, T.type = y, T.lanes = s, T._debugOwner = i, T;
    }
    function GS(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, v = e.props, y = QS(o, s, v, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function is(e, t, a, i) {
      var o = hi(Re, e, i, t);
      return o.lanes = a, o;
    }
    function PO(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = hi(yt, e, i, t | At);
      return o.elementType = D, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function HO(e, t, a, i) {
      var o = hi(_e, e, i, t);
      return o.elementType = xt, o.lanes = a, o;
    }
    function BO(e, t, a, i) {
      var o = hi(ne, e, i, t);
      return o.elementType = _t, o.lanes = a, o;
    }
    function HC(e, t, a, i) {
      var o = hi(ue, e, i, t);
      o.elementType = rn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function KS(e, t, a) {
      var i = hi(Z, e, null, t);
      return i.lanes = a, i;
    }
    function $O() {
      var e = hi(X, null, null, Je);
      return e.elementType = "DELETED", e;
    }
    function VO(e) {
      var t = hi(H, null, null, Je);
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
    function BC(e, t) {
      return e === null && (e = hi(F, null, null, Je)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function IO(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ng, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = zn, this.eventTimes = Ks(re), this.expirationTimes = Ks(on), this.pendingLanes = re, this.suspendedLanes = re, this.pingedLanes = re, this.expiredLanes = re, this.mutableReadLanes = re, this.finishedLanes = re, this.entangledLanes = re, this.entanglements = Ks(re), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], v = 0; v < An; v++)
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
    function $C(e, t, a, i, o, s, v, y, E, R) {
      var T = new IO(e, t, a, y, E), z = jO(t, s);
      T.current = z, z.stateNode = T;
      {
        var N = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = N;
      }
      return i0(z), T;
    }
    var ZS = "18.2.0";
    function YO(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return xr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: qr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var JS, eE;
    JS = !1, eE = {};
    function VC(e) {
      if (!e)
        return pi;
      var t = xi(e), a = _T(t);
      if (t.tag === M) {
        var i = t.type;
        if (Xl(i))
          return v1(t, i, a);
      }
      return a;
    }
    function WO(e, t) {
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
          var s = dt(a) || "Component";
          if (!eE[s]) {
            eE[s] = !0;
            var v = gn;
            try {
              Sn(o), a.mode & kn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              v ? Sn(v) : sn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function IC(e, t, a, i, o, s, v, y) {
      var E = !1, R = null;
      return $C(e, t, E, R, a, i, o, s, v);
    }
    function YC(e, t, a, i, o, s, v, y, E, R) {
      var T = !0, z = $C(a, i, T, e, o, s, v, y, E);
      z.context = VC(null);
      var N = z.current, W = Da(), q = rs(N), ee = Qo(W, q);
      return ee.callback = t ?? null, Gu(N, ee, q), J_(z, q, W), z;
    }
    function sh(e, t, a, i) {
      al(t, e);
      var o = t.current, s = Da(), v = rs(o);
      Yd(v);
      var y = VC(a);
      t.context === null ? t.context = y : t.pendingContext = y, Kr && gn !== null && !JS && (JS = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, dt(gn) || "Unknown"));
      var E = Qo(s, v);
      E.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), E.callback = i);
      var R = Gu(o, E, v);
      return R !== null && (wr(R, o, v, s), Cm(R, o, v)), v;
    }
    function py(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case X:
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
            rO(t, a);
          }
          break;
        }
        case _e: {
          Zo(function() {
            var o = Xa(e, rt);
            if (o !== null) {
              var s = Da();
              wr(o, e, rt, s);
            }
          });
          var i = rt;
          tE(e, i);
          break;
        }
      }
    }
    function WC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = wv(a.retryLane, t));
    }
    function tE(e, t) {
      WC(e, t);
      var a = e.alternate;
      a && WC(a, t);
    }
    function QO(e) {
      if (e.tag === _e) {
        var t = Ao, a = Xa(e, t);
        if (a !== null) {
          var i = Da();
          wr(a, e, t, i);
        }
        tE(e, t);
      }
    }
    function GO(e) {
      if (e.tag === _e) {
        var t = rs(e), a = Xa(e, t);
        if (a !== null) {
          var i = Da();
          wr(a, e, t, i);
        }
        tE(e, t);
      }
    }
    function qC(e) {
      var t = jd(e);
      return t === null ? null : t.stateNode;
    }
    var QC = function(e) {
      return null;
    };
    function KO(e) {
      return QC(e);
    }
    var GC = function(e) {
      return !1;
    };
    function XO(e) {
      return GC(e);
    }
    var KC = null, XC = null, ZC = null, JC = null, ex = null, tx = null, nx = null, rx = null, ax = null;
    {
      var ix = function(e, t, a) {
        var i = t[a], o = Mt(e) ? e.slice() : wt({}, e);
        return a + 1 === t.length ? (Mt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ix(e[i], t, a + 1), o);
      }, lx = function(e, t) {
        return ix(e, t, 0);
      }, ox = function(e, t, a, i) {
        var o = t[i], s = Mt(e) ? e.slice() : wt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          s[v] = s[o], Mt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = ox(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, ux = function(e, t, a) {
        if (t.length !== a.length) {
          C("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              C("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return ox(e, t, a, 0);
      }, sx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = Mt(e) ? e.slice() : wt({}, e);
        return s[o] = sx(e[o], t, a + 1, i), s;
      }, cx = function(e, t, a) {
        return sx(e, t, 0, a);
      }, nE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      KC = function(e, t, a, i) {
        var o = nE(e, t);
        if (o !== null) {
          var s = cx(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var v = Xa(e, rt);
          v !== null && wr(v, e, rt, on);
        }
      }, XC = function(e, t, a) {
        var i = nE(e, t);
        if (i !== null) {
          var o = lx(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = wt({}, e.memoizedProps);
          var s = Xa(e, rt);
          s !== null && wr(s, e, rt, on);
        }
      }, ZC = function(e, t, a, i) {
        var o = nE(e, t);
        if (o !== null) {
          var s = ux(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = wt({}, e.memoizedProps);
          var v = Xa(e, rt);
          v !== null && wr(v, e, rt, on);
        }
      }, JC = function(e, t, a) {
        e.pendingProps = cx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, rt);
        i !== null && wr(i, e, rt, on);
      }, ex = function(e, t) {
        e.pendingProps = lx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Xa(e, rt);
        a !== null && wr(a, e, rt, on);
      }, tx = function(e, t, a) {
        e.pendingProps = ux(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, rt);
        i !== null && wr(i, e, rt, on);
      }, nx = function(e) {
        var t = Xa(e, rt);
        t !== null && wr(t, e, rt, on);
      }, rx = function(e) {
        QC = e;
      }, ax = function(e) {
        GC = e;
      };
    }
    function ZO(e) {
      var t = Ud(e);
      return t === null ? null : t.stateNode;
    }
    function JO(e) {
      return null;
    }
    function eD() {
      return gn;
    }
    function tD(e) {
      var t = e.findFiberByHostInstance, a = h.ReactCurrentDispatcher;
      return lv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: KC,
        overrideHookStateDeletePath: XC,
        overrideHookStateRenamePath: ZC,
        overrideProps: JC,
        overridePropsDeletePath: ex,
        overridePropsRenamePath: tx,
        setErrorHandler: rx,
        setSuspenseHandler: ax,
        scheduleUpdate: nx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ZO,
        findFiberByHostInstance: t || JO,
        // React Refresh
        findHostInstancesForRefresh: LO,
        scheduleRefresh: OO,
        scheduleRoot: DO,
        setRefreshHandler: _O,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: eD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ZS
      });
    }
    var fx = typeof reportError == "function" ? (
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
        xC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Zo(function() {
          sh(null, e, null, null);
        }), c1(t);
      }
    };
    function nD(e, t) {
      if (!vy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      dx(e);
      var a = !1, i = !1, o = "", s = fx;
      t != null && (t.hydrate ? C("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Wr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = IC(e, sm, null, a, i, o, s);
      nm(v.current, e);
      var y = e.nodeType === Tn ? e.parentNode : e;
      return yp(y), new rE(v);
    }
    function hy(e) {
      this._internalRoot = e;
    }
    function rD(e) {
      e && ig(e);
    }
    hy.prototype.unstable_scheduleHydration = rD;
    function aD(e, t, a) {
      if (!vy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      dx(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, v = !1, y = "", E = fx;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError));
      var R = YC(t, null, e, sm, i, s, v, y, E);
      if (nm(R.current, e), yp(e), o)
        for (var T = 0; T < o.length; T++) {
          var z = o[T];
          dk(R, z);
        }
      return new hy(R);
    }
    function vy(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === wa || e.nodeType === Sd || !Be));
    }
    function ch(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === wa || e.nodeType === Sd || e.nodeType === Tn && e.nodeValue === " react-mount-point-unstable "));
    }
    function dx(e) {
      e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), _p(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var iD = h.ReactCurrentOwner, px;
    px = function(e) {
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
    function hx() {
    }
    function lD(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var N = py(v);
            s.call(N);
          };
        }
        var v = YC(
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
          hx
        );
        e._reactRootContainer = v, nm(v.current, e);
        var y = e.nodeType === Tn ? e.parentNode : e;
        return yp(y), Zo(), v;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var N = py(T);
            R.call(N);
          };
        }
        var T = IC(
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
          hx
        );
        e._reactRootContainer = T, nm(T.current, e);
        var z = e.nodeType === Tn ? e.parentNode : e;
        return yp(z), Zo(function() {
          sh(t, T, a, i);
        }), T;
      }
    }
    function oD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function my(e, t, a, i, o) {
      px(a), oD(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, v;
      if (!s)
        v = lD(a, t, e, o, i);
      else {
        if (v = s, typeof o == "function") {
          var y = o;
          o = function() {
            var E = py(v);
            y.call(E);
          };
        }
        sh(t, v, e, o);
      }
      return py(v);
    }
    function uD(e) {
      {
        var t = iD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Nt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Zr ? e : WO(e, "findDOMNode");
    }
    function sD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ch(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = _p(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return my(null, e, t, !0, a);
    }
    function cD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ch(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = _p(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return my(null, e, t, !1, a);
    }
    function fD(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ch(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !hu(e))
        throw new Error("parentComponent must be a valid React Component");
      return my(e, t, a, !1, i);
    }
    function dD(e) {
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
            e._reactRootContainer = null, c1(e);
          });
        }), !0;
      } else {
        {
          var o = aE(e), s = !!(o && Iu(o)), v = e.nodeType === Zr && ch(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Du(qO), rg(QO), yf(GO), bv(Ya), Rv(Or), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), kd(vR), Pc(zS, aO, Zo);
    function pD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!vy(t))
        throw new Error("Target container is not a DOM element.");
      return YO(e, t, null, a);
    }
    function hD(e, t, a, i) {
      return fD(e, t, a, i);
    }
    var iE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Iu, Hf, rm, pu, Co, zS]
    };
    function vD(e, t) {
      return iE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), nD(e, t);
    }
    function mD(e, t, a) {
      return iE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), aD(e, t, a);
    }
    function yD(e) {
      return xC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Zo(e);
    }
    var gD = tD({
      findFiberByHostInstance: cc,
      bundleType: 1,
      version: ZS,
      rendererPackageName: "react-dom"
    });
    if (!gD && Rn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var vx = window.location.protocol;
      /^(https?|file):$/.test(vx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (vx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iE, ni.createPortal = pD, ni.createRoot = vD, ni.findDOMNode = uD, ni.flushSync = yD, ni.hydrate = sD, ni.hydrateRoot = mD, ni.render = cD, ni.unmountComponentAtNode = dD, ni.unstable_batchedUpdates = zS, ni.unstable_renderSubtreeIntoContainer = hD, ni.version = ZS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), ni;
}
var Kx = {};
function Xx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (Kx.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xx);
    } catch (p) {
      console.error(p);
    }
  }
}
Kx.NODE_ENV === "production" ? (Xx(), mE.exports = MD()) : mE.exports = AD();
var zD = mE.exports, UD = {}, hh = zD;
if (UD.NODE_ENV === "production")
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
function Zx(p, c) {
  return function() {
    return p.apply(c, arguments);
  };
}
const { toString: FD } = Object.prototype, { getPrototypeOf: RE } = Object, Oy = /* @__PURE__ */ ((p) => (c) => {
  const f = FD.call(c);
  return p[f] || (p[f] = f.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), so = (p) => (p = p.toLowerCase(), (c) => Oy(c) === p), Dy = (p) => (c) => typeof c === p, { isArray: hd } = Array, Ch = Dy("undefined");
function jD(p) {
  return p !== null && !Ch(p) && p.constructor !== null && !Ch(p.constructor) && Hi(p.constructor.isBuffer) && p.constructor.isBuffer(p);
}
const Jx = so("ArrayBuffer");
function PD(p) {
  let c;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? c = ArrayBuffer.isView(p) : c = p && p.buffer && Jx(p.buffer), c;
}
const HD = Dy("string"), Hi = Dy("function"), eb = Dy("number"), Ly = (p) => p !== null && typeof p == "object", BD = (p) => p === !0 || p === !1, xy = (p) => {
  if (Oy(p) !== "object")
    return !1;
  const c = RE(p);
  return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(Symbol.toStringTag in p) && !(Symbol.iterator in p);
}, $D = so("Date"), VD = so("File"), ID = so("Blob"), YD = so("FileList"), WD = (p) => Ly(p) && Hi(p.pipe), qD = (p) => {
  let c;
  return p && (typeof FormData == "function" && p instanceof FormData || Hi(p.append) && ((c = Oy(p)) === "formdata" || // detect form-data instance
  c === "object" && Hi(p.toString) && p.toString() === "[object FormData]"));
}, QD = so("URLSearchParams"), GD = (p) => p.trim ? p.trim() : p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xh(p, c, { allOwnKeys: f = !1 } = {}) {
  if (p === null || typeof p > "u")
    return;
  let h, S;
  if (typeof p != "object" && (p = [p]), hd(p))
    for (h = 0, S = p.length; h < S; h++)
      c.call(null, p[h], h, p);
  else {
    const x = f ? Object.getOwnPropertyNames(p) : Object.keys(p), C = x.length;
    let g;
    for (h = 0; h < C; h++)
      g = x[h], c.call(null, p[g], g, p);
  }
}
function tb(p, c) {
  c = c.toLowerCase();
  const f = Object.keys(p);
  let h = f.length, S;
  for (; h-- > 0; )
    if (S = f[h], c === S.toLowerCase())
      return S;
  return null;
}
const nb = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, rb = (p) => !Ch(p) && p !== nb;
function yE() {
  const { caseless: p } = rb(this) && this || {}, c = {}, f = (h, S) => {
    const x = p && tb(c, S) || S;
    xy(c[x]) && xy(h) ? c[x] = yE(c[x], h) : xy(h) ? c[x] = yE({}, h) : hd(h) ? c[x] = h.slice() : c[x] = h;
  };
  for (let h = 0, S = arguments.length; h < S; h++)
    arguments[h] && xh(arguments[h], f);
  return c;
}
const KD = (p, c, f, { allOwnKeys: h } = {}) => (xh(c, (S, x) => {
  f && Hi(S) ? p[x] = Zx(S, f) : p[x] = S;
}, { allOwnKeys: h }), p), XD = (p) => (p.charCodeAt(0) === 65279 && (p = p.slice(1)), p), ZD = (p, c, f, h) => {
  p.prototype = Object.create(c.prototype, h), p.prototype.constructor = p, Object.defineProperty(p, "super", {
    value: c.prototype
  }), f && Object.assign(p.prototype, f);
}, JD = (p, c, f, h) => {
  let S, x, C;
  const g = {};
  if (c = c || {}, p == null) return c;
  do {
    for (S = Object.getOwnPropertyNames(p), x = S.length; x-- > 0; )
      C = S[x], (!h || h(C, p, c)) && !g[C] && (c[C] = p[C], g[C] = !0);
    p = f !== !1 && RE(p);
  } while (p && (!f || f(p, c)) && p !== Object.prototype);
  return c;
}, eL = (p, c, f) => {
  p = String(p), (f === void 0 || f > p.length) && (f = p.length), f -= c.length;
  const h = p.indexOf(c, f);
  return h !== -1 && h === f;
}, tL = (p) => {
  if (!p) return null;
  if (hd(p)) return p;
  let c = p.length;
  if (!eb(c)) return null;
  const f = new Array(c);
  for (; c-- > 0; )
    f[c] = p[c];
  return f;
}, nL = /* @__PURE__ */ ((p) => (c) => p && c instanceof p)(typeof Uint8Array < "u" && RE(Uint8Array)), rL = (p, c) => {
  const h = (p && p[Symbol.iterator]).call(p);
  let S;
  for (; (S = h.next()) && !S.done; ) {
    const x = S.value;
    c.call(p, x[0], x[1]);
  }
}, aL = (p, c) => {
  let f;
  const h = [];
  for (; (f = p.exec(c)) !== null; )
    h.push(f);
  return h;
}, iL = so("HTMLFormElement"), lL = (p) => p.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(f, h, S) {
    return h.toUpperCase() + S;
  }
), kx = (({ hasOwnProperty: p }) => (c, f) => p.call(c, f))(Object.prototype), oL = so("RegExp"), ab = (p, c) => {
  const f = Object.getOwnPropertyDescriptors(p), h = {};
  xh(f, (S, x) => {
    let C;
    (C = c(S, x, p)) !== !1 && (h[x] = C || S);
  }), Object.defineProperties(p, h);
}, uL = (p) => {
  ab(p, (c, f) => {
    if (Hi(p) && ["arguments", "caller", "callee"].indexOf(f) !== -1)
      return !1;
    const h = p[f];
    if (Hi(h)) {
      if (c.enumerable = !1, "writable" in c) {
        c.writable = !1;
        return;
      }
      c.set || (c.set = () => {
        throw Error("Can not rewrite read-only method '" + f + "'");
      });
    }
  });
}, sL = (p, c) => {
  const f = {}, h = (S) => {
    S.forEach((x) => {
      f[x] = !0;
    });
  };
  return hd(p) ? h(p) : h(String(p).split(c)), f;
}, cL = () => {
}, fL = (p, c) => (p = +p, Number.isFinite(p) ? p : c), uE = "abcdefghijklmnopqrstuvwxyz", _x = "0123456789", ib = {
  DIGIT: _x,
  ALPHA: uE,
  ALPHA_DIGIT: uE + uE.toUpperCase() + _x
}, dL = (p = 16, c = ib.ALPHA_DIGIT) => {
  let f = "";
  const { length: h } = c;
  for (; p--; )
    f += c[Math.random() * h | 0];
  return f;
};
function pL(p) {
  return !!(p && Hi(p.append) && p[Symbol.toStringTag] === "FormData" && p[Symbol.iterator]);
}
const hL = (p) => {
  const c = new Array(10), f = (h, S) => {
    if (Ly(h)) {
      if (c.indexOf(h) >= 0)
        return;
      if (!("toJSON" in h)) {
        c[S] = h;
        const x = hd(h) ? [] : {};
        return xh(h, (C, g) => {
          const U = f(C, S + 1);
          !Ch(U) && (x[g] = U);
        }), c[S] = void 0, x;
      }
    }
    return h;
  };
  return f(p, 0);
}, vL = so("AsyncFunction"), mL = (p) => p && (Ly(p) || Hi(p)) && Hi(p.then) && Hi(p.catch), ie = {
  isArray: hd,
  isArrayBuffer: Jx,
  isBuffer: jD,
  isFormData: qD,
  isArrayBufferView: PD,
  isString: HD,
  isNumber: eb,
  isBoolean: BD,
  isObject: Ly,
  isPlainObject: xy,
  isUndefined: Ch,
  isDate: $D,
  isFile: VD,
  isBlob: ID,
  isRegExp: oL,
  isFunction: Hi,
  isStream: WD,
  isURLSearchParams: QD,
  isTypedArray: nL,
  isFileList: YD,
  forEach: xh,
  merge: yE,
  extend: KD,
  trim: GD,
  stripBOM: XD,
  inherits: ZD,
  toFlatObject: JD,
  kindOf: Oy,
  kindOfTest: so,
  endsWith: eL,
  toArray: tL,
  forEachEntry: rL,
  matchAll: aL,
  isHTMLForm: iL,
  hasOwnProperty: kx,
  hasOwnProp: kx,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ab,
  freezeMethods: uL,
  toObjectSet: sL,
  toCamelCase: lL,
  noop: cL,
  toFiniteNumber: fL,
  findKey: tb,
  global: nb,
  isContextDefined: rb,
  ALPHABET: ib,
  generateString: dL,
  isSpecCompliantForm: pL,
  toJSONObject: hL,
  isAsyncFn: vL,
  isThenable: mL
};
function Ht(p, c, f, h, S) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = p, this.name = "AxiosError", c && (this.code = c), f && (this.config = f), h && (this.request = h), S && (this.response = S);
}
ie.inherits(Ht, Error, {
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
const lb = Ht.prototype, ob = {};
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
  ob[p] = { value: p };
});
Object.defineProperties(Ht, ob);
Object.defineProperty(lb, "isAxiosError", { value: !0 });
Ht.from = (p, c, f, h, S, x) => {
  const C = Object.create(lb);
  return ie.toFlatObject(p, C, function(U) {
    return U !== Error.prototype;
  }, (g) => g !== "isAxiosError"), Ht.call(C, p.message, c, f, h, S), C.cause = p, C.name = p.name, x && Object.assign(C, x), C;
};
const yL = null;
function gE(p) {
  return ie.isPlainObject(p) || ie.isArray(p);
}
function ub(p) {
  return ie.endsWith(p, "[]") ? p.slice(0, -2) : p;
}
function Ox(p, c, f) {
  return p ? p.concat(c).map(function(S, x) {
    return S = ub(S), !f && x ? "[" + S + "]" : S;
  }).join(f ? "." : "") : c;
}
function gL(p) {
  return ie.isArray(p) && !p.some(gE);
}
const SL = ie.toFlatObject(ie, {}, null, function(c) {
  return /^is[A-Z]/.test(c);
});
function Ny(p, c, f) {
  if (!ie.isObject(p))
    throw new TypeError("target must be an object");
  c = c || new FormData(), f = ie.toFlatObject(f, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(Z, Re) {
    return !ie.isUndefined(Re[Z]);
  });
  const h = f.metaTokens, S = f.visitor || M, x = f.dots, C = f.indexes, U = (f.Blob || typeof Blob < "u" && Blob) && ie.isSpecCompliantForm(c);
  if (!ie.isFunction(S))
    throw new TypeError("visitor must be a function");
  function j(X) {
    if (X === null) return "";
    if (ie.isDate(X))
      return X.toISOString();
    if (!U && ie.isBlob(X))
      throw new Ht("Blob is not supported. Use a Buffer instead.");
    return ie.isArrayBuffer(X) || ie.isTypedArray(X) ? U && typeof Blob == "function" ? new Blob([X]) : Buffer.from(X) : X;
  }
  function M(X, Z, Re) {
    let ct = X;
    if (X && !Re && typeof X == "object") {
      if (ie.endsWith(Z, "{}"))
        Z = h ? Z : Z.slice(0, -2), X = JSON.stringify(X);
      else if (ie.isArray(X) && gL(X) || (ie.isFileList(X) || ie.endsWith(Z, "[]")) && (ct = ie.toArray(X)))
        return Z = ub(Z), ct.forEach(function(Ve, Ae) {
          !(ie.isUndefined(Ve) || Ve === null) && c.append(
            // eslint-disable-next-line no-nested-ternary
            C === !0 ? Ox([Z], Ae, x) : C === null ? Z : Z + "[]",
            j(Ve)
          );
        }), !1;
    }
    return gE(X) ? !0 : (c.append(Ox(Re, Z, x), j(X)), !1);
  }
  const F = [], I = Object.assign(SL, {
    defaultVisitor: M,
    convertValue: j,
    isVisitable: gE
  });
  function oe(X, Z) {
    if (!ie.isUndefined(X)) {
      if (F.indexOf(X) !== -1)
        throw Error("Circular reference detected in " + Z.join("."));
      F.push(X), ie.forEach(X, function(ct, vt) {
        (!(ie.isUndefined(ct) || ct === null) && S.call(
          c,
          ct,
          ie.isString(vt) ? vt.trim() : vt,
          Z,
          I
        )) === !0 && oe(ct, Z ? Z.concat(vt) : [vt]);
      }), F.pop();
    }
  }
  if (!ie.isObject(p))
    throw new TypeError("data must be an object");
  return oe(p), c;
}
function Dx(p) {
  const c = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g, function(h) {
    return c[h];
  });
}
function TE(p, c) {
  this._pairs = [], p && Ny(p, this, c);
}
const sb = TE.prototype;
sb.append = function(c, f) {
  this._pairs.push([c, f]);
};
sb.toString = function(c) {
  const f = c ? function(h) {
    return c.call(this, h, Dx);
  } : Dx;
  return this._pairs.map(function(S) {
    return f(S[0]) + "=" + f(S[1]);
  }, "").join("&");
};
function EL(p) {
  return encodeURIComponent(p).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function cb(p, c, f) {
  if (!c)
    return p;
  const h = f && f.encode || EL, S = f && f.serialize;
  let x;
  if (S ? x = S(c, f) : x = ie.isURLSearchParams(c) ? c.toString() : new TE(c, f).toString(h), x) {
    const C = p.indexOf("#");
    C !== -1 && (p = p.slice(0, C)), p += (p.indexOf("?") === -1 ? "?" : "&") + x;
  }
  return p;
}
class Lx {
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
  use(c, f, h) {
    return this.handlers.push({
      fulfilled: c,
      rejected: f,
      synchronous: h ? h.synchronous : !1,
      runWhen: h ? h.runWhen : null
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
    ie.forEach(this.handlers, function(h) {
      h !== null && c(h);
    });
  }
}
const fb = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, wL = typeof URLSearchParams < "u" ? URLSearchParams : TE, CL = typeof FormData < "u" ? FormData : null, xL = typeof Blob < "u" ? Blob : null, bL = {
  isBrowser: !0,
  classes: {
    URLSearchParams: wL,
    FormData: CL,
    Blob: xL
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, db = typeof window < "u" && typeof document < "u", RL = ((p) => db && ["ReactNative", "NativeScript", "NS"].indexOf(p) < 0)(typeof navigator < "u" && navigator.product), TL = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", kL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: db,
  hasStandardBrowserEnv: RL,
  hasStandardBrowserWebWorkerEnv: TL
}, Symbol.toStringTag, { value: "Module" })), lo = {
  ...kL,
  ...bL
};
function _L(p, c) {
  return Ny(p, new lo.classes.URLSearchParams(), Object.assign({
    visitor: function(f, h, S, x) {
      return lo.isNode && ie.isBuffer(f) ? (this.append(h, f.toString("base64")), !1) : x.defaultVisitor.apply(this, arguments);
    }
  }, c));
}
function OL(p) {
  return ie.matchAll(/\w+|\[(\w*)]/g, p).map((c) => c[0] === "[]" ? "" : c[1] || c[0]);
}
function DL(p) {
  const c = {}, f = Object.keys(p);
  let h;
  const S = f.length;
  let x;
  for (h = 0; h < S; h++)
    x = f[h], c[x] = p[x];
  return c;
}
function pb(p) {
  function c(f, h, S, x) {
    let C = f[x++];
    const g = Number.isFinite(+C), U = x >= f.length;
    return C = !C && ie.isArray(S) ? S.length : C, U ? (ie.hasOwnProp(S, C) ? S[C] = [S[C], h] : S[C] = h, !g) : ((!S[C] || !ie.isObject(S[C])) && (S[C] = []), c(f, h, S[C], x) && ie.isArray(S[C]) && (S[C] = DL(S[C])), !g);
  }
  if (ie.isFormData(p) && ie.isFunction(p.entries)) {
    const f = {};
    return ie.forEachEntry(p, (h, S) => {
      c(OL(h), S, f, 0);
    }), f;
  }
  return null;
}
function LL(p, c, f) {
  if (ie.isString(p))
    try {
      return (c || JSON.parse)(p), ie.trim(p);
    } catch (h) {
      if (h.name !== "SyntaxError")
        throw h;
    }
  return (f || JSON.stringify)(p);
}
const bh = {
  transitional: fb,
  adapter: ["xhr", "http"],
  transformRequest: [function(c, f) {
    const h = f.getContentType() || "", S = h.indexOf("application/json") > -1, x = ie.isObject(c);
    if (x && ie.isHTMLForm(c) && (c = new FormData(c)), ie.isFormData(c))
      return S && S ? JSON.stringify(pb(c)) : c;
    if (ie.isArrayBuffer(c) || ie.isBuffer(c) || ie.isStream(c) || ie.isFile(c) || ie.isBlob(c))
      return c;
    if (ie.isArrayBufferView(c))
      return c.buffer;
    if (ie.isURLSearchParams(c))
      return f.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), c.toString();
    let g;
    if (x) {
      if (h.indexOf("application/x-www-form-urlencoded") > -1)
        return _L(c, this.formSerializer).toString();
      if ((g = ie.isFileList(c)) || h.indexOf("multipart/form-data") > -1) {
        const U = this.env && this.env.FormData;
        return Ny(
          g ? { "files[]": c } : c,
          U && new U(),
          this.formSerializer
        );
      }
    }
    return x || S ? (f.setContentType("application/json", !1), LL(c)) : c;
  }],
  transformResponse: [function(c) {
    const f = this.transitional || bh.transitional, h = f && f.forcedJSONParsing, S = this.responseType === "json";
    if (c && ie.isString(c) && (h && !this.responseType || S)) {
      const C = !(f && f.silentJSONParsing) && S;
      try {
        return JSON.parse(c);
      } catch (g) {
        if (C)
          throw g.name === "SyntaxError" ? Ht.from(g, Ht.ERR_BAD_RESPONSE, this, null, this.response) : g;
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
  bh.headers[p] = {};
});
const NL = ie.toObjectSet([
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
]), ML = (p) => {
  const c = {};
  let f, h, S;
  return p && p.split(`
`).forEach(function(C) {
    S = C.indexOf(":"), f = C.substring(0, S).trim().toLowerCase(), h = C.substring(S + 1).trim(), !(!f || c[f] && NL[f]) && (f === "set-cookie" ? c[f] ? c[f].push(h) : c[f] = [h] : c[f] = c[f] ? c[f] + ", " + h : h);
  }), c;
}, Nx = Symbol("internals");
function vh(p) {
  return p && String(p).trim().toLowerCase();
}
function by(p) {
  return p === !1 || p == null ? p : ie.isArray(p) ? p.map(by) : String(p);
}
function AL(p) {
  const c = /* @__PURE__ */ Object.create(null), f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let h;
  for (; h = f.exec(p); )
    c[h[1]] = h[2];
  return c;
}
const zL = (p) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(p.trim());
function sE(p, c, f, h, S) {
  if (ie.isFunction(h))
    return h.call(this, c, f);
  if (S && (c = f), !!ie.isString(c)) {
    if (ie.isString(h))
      return c.indexOf(h) !== -1;
    if (ie.isRegExp(h))
      return h.test(c);
  }
}
function UL(p) {
  return p.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, f, h) => f.toUpperCase() + h);
}
function FL(p, c) {
  const f = ie.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((h) => {
    Object.defineProperty(p, h + f, {
      value: function(S, x, C) {
        return this[h].call(this, c, S, x, C);
      },
      configurable: !0
    });
  });
}
class Bi {
  constructor(c) {
    c && this.set(c);
  }
  set(c, f, h) {
    const S = this;
    function x(g, U, j) {
      const M = vh(U);
      if (!M)
        throw new Error("header name must be a non-empty string");
      const F = ie.findKey(S, M);
      (!F || S[F] === void 0 || j === !0 || j === void 0 && S[F] !== !1) && (S[F || U] = by(g));
    }
    const C = (g, U) => ie.forEach(g, (j, M) => x(j, M, U));
    return ie.isPlainObject(c) || c instanceof this.constructor ? C(c, f) : ie.isString(c) && (c = c.trim()) && !zL(c) ? C(ML(c), f) : c != null && x(f, c, h), this;
  }
  get(c, f) {
    if (c = vh(c), c) {
      const h = ie.findKey(this, c);
      if (h) {
        const S = this[h];
        if (!f)
          return S;
        if (f === !0)
          return AL(S);
        if (ie.isFunction(f))
          return f.call(this, S, h);
        if (ie.isRegExp(f))
          return f.exec(S);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, f) {
    if (c = vh(c), c) {
      const h = ie.findKey(this, c);
      return !!(h && this[h] !== void 0 && (!f || sE(this, this[h], h, f)));
    }
    return !1;
  }
  delete(c, f) {
    const h = this;
    let S = !1;
    function x(C) {
      if (C = vh(C), C) {
        const g = ie.findKey(h, C);
        g && (!f || sE(h, h[g], g, f)) && (delete h[g], S = !0);
      }
    }
    return ie.isArray(c) ? c.forEach(x) : x(c), S;
  }
  clear(c) {
    const f = Object.keys(this);
    let h = f.length, S = !1;
    for (; h--; ) {
      const x = f[h];
      (!c || sE(this, this[x], x, c, !0)) && (delete this[x], S = !0);
    }
    return S;
  }
  normalize(c) {
    const f = this, h = {};
    return ie.forEach(this, (S, x) => {
      const C = ie.findKey(h, x);
      if (C) {
        f[C] = by(S), delete f[x];
        return;
      }
      const g = c ? UL(x) : String(x).trim();
      g !== x && delete f[x], f[g] = by(S), h[g] = !0;
    }), this;
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const f = /* @__PURE__ */ Object.create(null);
    return ie.forEach(this, (h, S) => {
      h != null && h !== !1 && (f[S] = c && ie.isArray(h) ? h.join(", ") : h);
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
    const h = new this(c);
    return f.forEach((S) => h.set(S)), h;
  }
  static accessor(c) {
    const h = (this[Nx] = this[Nx] = {
      accessors: {}
    }).accessors, S = this.prototype;
    function x(C) {
      const g = vh(C);
      h[g] || (FL(S, C), h[g] = !0);
    }
    return ie.isArray(c) ? c.forEach(x) : x(c), this;
  }
}
Bi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ie.reduceDescriptors(Bi.prototype, ({ value: p }, c) => {
  let f = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => p,
    set(h) {
      this[f] = h;
    }
  };
});
ie.freezeMethods(Bi);
function cE(p, c) {
  const f = this || bh, h = c || f, S = Bi.from(h.headers);
  let x = h.data;
  return ie.forEach(p, function(g) {
    x = g.call(f, x, S.normalize(), c ? c.status : void 0);
  }), S.normalize(), x;
}
function hb(p) {
  return !!(p && p.__CANCEL__);
}
function Rh(p, c, f) {
  Ht.call(this, p ?? "canceled", Ht.ERR_CANCELED, c, f), this.name = "CanceledError";
}
ie.inherits(Rh, Ht, {
  __CANCEL__: !0
});
function jL(p, c, f) {
  const h = f.config.validateStatus;
  !f.status || !h || h(f.status) ? p(f) : c(new Ht(
    "Request failed with status code " + f.status,
    [Ht.ERR_BAD_REQUEST, Ht.ERR_BAD_RESPONSE][Math.floor(f.status / 100) - 4],
    f.config,
    f.request,
    f
  ));
}
const PL = lo.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(p, c, f, h, S, x) {
      const C = [p + "=" + encodeURIComponent(c)];
      ie.isNumber(f) && C.push("expires=" + new Date(f).toGMTString()), ie.isString(h) && C.push("path=" + h), ie.isString(S) && C.push("domain=" + S), x === !0 && C.push("secure"), document.cookie = C.join("; ");
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
function HL(p) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(p);
}
function BL(p, c) {
  return c ? p.replace(/\/+$/, "") + "/" + c.replace(/^\/+/, "") : p;
}
function vb(p, c) {
  return p && !HL(c) ? BL(p, c) : c;
}
const $L = lo.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const c = /(msie|trident)/i.test(navigator.userAgent), f = document.createElement("a");
    let h;
    function S(x) {
      let C = x;
      return c && (f.setAttribute("href", C), C = f.href), f.setAttribute("href", C), {
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
    return h = S(window.location.href), function(C) {
      const g = ie.isString(C) ? S(C) : C;
      return g.protocol === h.protocol && g.host === h.host;
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
function VL(p) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(p);
  return c && c[1] || "";
}
function IL(p, c) {
  p = p || 10;
  const f = new Array(p), h = new Array(p);
  let S = 0, x = 0, C;
  return c = c !== void 0 ? c : 1e3, function(U) {
    const j = Date.now(), M = h[x];
    C || (C = j), f[S] = U, h[S] = j;
    let F = x, I = 0;
    for (; F !== S; )
      I += f[F++], F = F % p;
    if (S = (S + 1) % p, S === x && (x = (x + 1) % p), j - C < c)
      return;
    const oe = M && j - M;
    return oe ? Math.round(I * 1e3 / oe) : void 0;
  };
}
function Mx(p, c) {
  let f = 0;
  const h = IL(50, 250);
  return (S) => {
    const x = S.loaded, C = S.lengthComputable ? S.total : void 0, g = x - f, U = h(g), j = x <= C;
    f = x;
    const M = {
      loaded: x,
      total: C,
      progress: C ? x / C : void 0,
      bytes: g,
      rate: U || void 0,
      estimated: U && C && j ? (C - x) / U : void 0,
      event: S
    };
    M[c ? "download" : "upload"] = !0, p(M);
  };
}
const YL = typeof XMLHttpRequest < "u", WL = YL && function(p) {
  return new Promise(function(f, h) {
    let S = p.data;
    const x = Bi.from(p.headers).normalize();
    let { responseType: C, withXSRFToken: g } = p, U;
    function j() {
      p.cancelToken && p.cancelToken.unsubscribe(U), p.signal && p.signal.removeEventListener("abort", U);
    }
    let M;
    if (ie.isFormData(S)) {
      if (lo.hasStandardBrowserEnv || lo.hasStandardBrowserWebWorkerEnv)
        x.setContentType(!1);
      else if ((M = x.getContentType()) !== !1) {
        const [Z, ...Re] = M ? M.split(";").map((ct) => ct.trim()).filter(Boolean) : [];
        x.setContentType([Z || "multipart/form-data", ...Re].join("; "));
      }
    }
    let F = new XMLHttpRequest();
    if (p.auth) {
      const Z = p.auth.username || "", Re = p.auth.password ? unescape(encodeURIComponent(p.auth.password)) : "";
      x.set("Authorization", "Basic " + btoa(Z + ":" + Re));
    }
    const I = vb(p.baseURL, p.url);
    F.open(p.method.toUpperCase(), cb(I, p.params, p.paramsSerializer), !0), F.timeout = p.timeout;
    function oe() {
      if (!F)
        return;
      const Z = Bi.from(
        "getAllResponseHeaders" in F && F.getAllResponseHeaders()
      ), ct = {
        data: !C || C === "text" || C === "json" ? F.responseText : F.response,
        status: F.status,
        statusText: F.statusText,
        headers: Z,
        config: p,
        request: F
      };
      jL(function(Ve) {
        f(Ve), j();
      }, function(Ve) {
        h(Ve), j();
      }, ct), F = null;
    }
    if ("onloadend" in F ? F.onloadend = oe : F.onreadystatechange = function() {
      !F || F.readyState !== 4 || F.status === 0 && !(F.responseURL && F.responseURL.indexOf("file:") === 0) || setTimeout(oe);
    }, F.onabort = function() {
      F && (h(new Ht("Request aborted", Ht.ECONNABORTED, p, F)), F = null);
    }, F.onerror = function() {
      h(new Ht("Network Error", Ht.ERR_NETWORK, p, F)), F = null;
    }, F.ontimeout = function() {
      let Re = p.timeout ? "timeout of " + p.timeout + "ms exceeded" : "timeout exceeded";
      const ct = p.transitional || fb;
      p.timeoutErrorMessage && (Re = p.timeoutErrorMessage), h(new Ht(
        Re,
        ct.clarifyTimeoutError ? Ht.ETIMEDOUT : Ht.ECONNABORTED,
        p,
        F
      )), F = null;
    }, lo.hasStandardBrowserEnv && (g && ie.isFunction(g) && (g = g(p)), g || g !== !1 && $L(I))) {
      const Z = p.xsrfHeaderName && p.xsrfCookieName && PL.read(p.xsrfCookieName);
      Z && x.set(p.xsrfHeaderName, Z);
    }
    S === void 0 && x.setContentType(null), "setRequestHeader" in F && ie.forEach(x.toJSON(), function(Re, ct) {
      F.setRequestHeader(ct, Re);
    }), ie.isUndefined(p.withCredentials) || (F.withCredentials = !!p.withCredentials), C && C !== "json" && (F.responseType = p.responseType), typeof p.onDownloadProgress == "function" && F.addEventListener("progress", Mx(p.onDownloadProgress, !0)), typeof p.onUploadProgress == "function" && F.upload && F.upload.addEventListener("progress", Mx(p.onUploadProgress)), (p.cancelToken || p.signal) && (U = (Z) => {
      F && (h(!Z || Z.type ? new Rh(null, p, F) : Z), F.abort(), F = null);
    }, p.cancelToken && p.cancelToken.subscribe(U), p.signal && (p.signal.aborted ? U() : p.signal.addEventListener("abort", U)));
    const X = VL(I);
    if (X && lo.protocols.indexOf(X) === -1) {
      h(new Ht("Unsupported protocol " + X + ":", Ht.ERR_BAD_REQUEST, p));
      return;
    }
    F.send(S || null);
  });
}, SE = {
  http: yL,
  xhr: WL
};
ie.forEach(SE, (p, c) => {
  if (p) {
    try {
      Object.defineProperty(p, "name", { value: c });
    } catch {
    }
    Object.defineProperty(p, "adapterName", { value: c });
  }
});
const Ax = (p) => `- ${p}`, qL = (p) => ie.isFunction(p) || p === null || p === !1, mb = {
  getAdapter: (p) => {
    p = ie.isArray(p) ? p : [p];
    const { length: c } = p;
    let f, h;
    const S = {};
    for (let x = 0; x < c; x++) {
      f = p[x];
      let C;
      if (h = f, !qL(f) && (h = SE[(C = String(f)).toLowerCase()], h === void 0))
        throw new Ht(`Unknown adapter '${C}'`);
      if (h)
        break;
      S[C || "#" + x] = h;
    }
    if (!h) {
      const x = Object.entries(S).map(
        ([g, U]) => `adapter ${g} ` + (U === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let C = c ? x.length > 1 ? `since :
` + x.map(Ax).join(`
`) : " " + Ax(x[0]) : "as no adapter specified";
      throw new Ht(
        "There is no suitable adapter to dispatch the request " + C,
        "ERR_NOT_SUPPORT"
      );
    }
    return h;
  },
  adapters: SE
};
function fE(p) {
  if (p.cancelToken && p.cancelToken.throwIfRequested(), p.signal && p.signal.aborted)
    throw new Rh(null, p);
}
function zx(p) {
  return fE(p), p.headers = Bi.from(p.headers), p.data = cE.call(
    p,
    p.transformRequest
  ), ["post", "put", "patch"].indexOf(p.method) !== -1 && p.headers.setContentType("application/x-www-form-urlencoded", !1), mb.getAdapter(p.adapter || bh.adapter)(p).then(function(h) {
    return fE(p), h.data = cE.call(
      p,
      p.transformResponse,
      h
    ), h.headers = Bi.from(h.headers), h;
  }, function(h) {
    return hb(h) || (fE(p), h && h.response && (h.response.data = cE.call(
      p,
      p.transformResponse,
      h.response
    ), h.response.headers = Bi.from(h.response.headers))), Promise.reject(h);
  });
}
const Ux = (p) => p instanceof Bi ? p.toJSON() : p;
function fd(p, c) {
  c = c || {};
  const f = {};
  function h(j, M, F) {
    return ie.isPlainObject(j) && ie.isPlainObject(M) ? ie.merge.call({ caseless: F }, j, M) : ie.isPlainObject(M) ? ie.merge({}, M) : ie.isArray(M) ? M.slice() : M;
  }
  function S(j, M, F) {
    if (ie.isUndefined(M)) {
      if (!ie.isUndefined(j))
        return h(void 0, j, F);
    } else return h(j, M, F);
  }
  function x(j, M) {
    if (!ie.isUndefined(M))
      return h(void 0, M);
  }
  function C(j, M) {
    if (ie.isUndefined(M)) {
      if (!ie.isUndefined(j))
        return h(void 0, j);
    } else return h(void 0, M);
  }
  function g(j, M, F) {
    if (F in c)
      return h(j, M);
    if (F in p)
      return h(void 0, j);
  }
  const U = {
    url: x,
    method: x,
    data: x,
    baseURL: C,
    transformRequest: C,
    transformResponse: C,
    paramsSerializer: C,
    timeout: C,
    timeoutMessage: C,
    withCredentials: C,
    withXSRFToken: C,
    adapter: C,
    responseType: C,
    xsrfCookieName: C,
    xsrfHeaderName: C,
    onUploadProgress: C,
    onDownloadProgress: C,
    decompress: C,
    maxContentLength: C,
    maxBodyLength: C,
    beforeRedirect: C,
    transport: C,
    httpAgent: C,
    httpsAgent: C,
    cancelToken: C,
    socketPath: C,
    responseEncoding: C,
    validateStatus: g,
    headers: (j, M) => S(Ux(j), Ux(M), !0)
  };
  return ie.forEach(Object.keys(Object.assign({}, p, c)), function(M) {
    const F = U[M] || S, I = F(p[M], c[M], M);
    ie.isUndefined(I) && F !== g || (f[M] = I);
  }), f;
}
const yb = "1.6.2", kE = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((p, c) => {
  kE[p] = function(h) {
    return typeof h === p || "a" + (c < 1 ? "n " : " ") + p;
  };
});
const Fx = {};
kE.transitional = function(c, f, h) {
  function S(x, C) {
    return "[Axios v" + yb + "] Transitional option '" + x + "'" + C + (h ? ". " + h : "");
  }
  return (x, C, g) => {
    if (c === !1)
      throw new Ht(
        S(C, " has been removed" + (f ? " in " + f : "")),
        Ht.ERR_DEPRECATED
      );
    return f && !Fx[C] && (Fx[C] = !0, console.warn(
      S(
        C,
        " has been deprecated since v" + f + " and will be removed in the near future"
      )
    )), c ? c(x, C, g) : !0;
  };
};
function QL(p, c, f) {
  if (typeof p != "object")
    throw new Ht("options must be an object", Ht.ERR_BAD_OPTION_VALUE);
  const h = Object.keys(p);
  let S = h.length;
  for (; S-- > 0; ) {
    const x = h[S], C = c[x];
    if (C) {
      const g = p[x], U = g === void 0 || C(g, x, p);
      if (U !== !0)
        throw new Ht("option " + x + " must be " + U, Ht.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (f !== !0)
      throw new Ht("Unknown option " + x, Ht.ERR_BAD_OPTION);
  }
}
const EE = {
  assertOptions: QL,
  validators: kE
}, ls = EE.validators;
class Tc {
  constructor(c) {
    this.defaults = c, this.interceptors = {
      request: new Lx(),
      response: new Lx()
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
    const { transitional: h, paramsSerializer: S, headers: x } = f;
    h !== void 0 && EE.assertOptions(h, {
      silentJSONParsing: ls.transitional(ls.boolean),
      forcedJSONParsing: ls.transitional(ls.boolean),
      clarifyTimeoutError: ls.transitional(ls.boolean)
    }, !1), S != null && (ie.isFunction(S) ? f.paramsSerializer = {
      serialize: S
    } : EE.assertOptions(S, {
      encode: ls.function,
      serialize: ls.function
    }, !0)), f.method = (f.method || this.defaults.method || "get").toLowerCase();
    let C = x && ie.merge(
      x.common,
      x[f.method]
    );
    x && ie.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (X) => {
        delete x[X];
      }
    ), f.headers = Bi.concat(C, x);
    const g = [];
    let U = !0;
    this.interceptors.request.forEach(function(Z) {
      typeof Z.runWhen == "function" && Z.runWhen(f) === !1 || (U = U && Z.synchronous, g.unshift(Z.fulfilled, Z.rejected));
    });
    const j = [];
    this.interceptors.response.forEach(function(Z) {
      j.push(Z.fulfilled, Z.rejected);
    });
    let M, F = 0, I;
    if (!U) {
      const X = [zx.bind(this), void 0];
      for (X.unshift.apply(X, g), X.push.apply(X, j), I = X.length, M = Promise.resolve(f); F < I; )
        M = M.then(X[F++], X[F++]);
      return M;
    }
    I = g.length;
    let oe = f;
    for (F = 0; F < I; ) {
      const X = g[F++], Z = g[F++];
      try {
        oe = X(oe);
      } catch (Re) {
        Z.call(this, Re);
        break;
      }
    }
    try {
      M = zx.call(this, oe);
    } catch (X) {
      return Promise.reject(X);
    }
    for (F = 0, I = j.length; F < I; )
      M = M.then(j[F++], j[F++]);
    return M;
  }
  getUri(c) {
    c = fd(this.defaults, c);
    const f = vb(c.baseURL, c.url);
    return cb(f, c.params, c.paramsSerializer);
  }
}
ie.forEach(["delete", "get", "head", "options"], function(c) {
  Tc.prototype[c] = function(f, h) {
    return this.request(fd(h || {}, {
      method: c,
      url: f,
      data: (h || {}).data
    }));
  };
});
ie.forEach(["post", "put", "patch"], function(c) {
  function f(h) {
    return function(x, C, g) {
      return this.request(fd(g || {}, {
        method: c,
        headers: h ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: x,
        data: C
      }));
    };
  }
  Tc.prototype[c] = f(), Tc.prototype[c + "Form"] = f(!0);
});
class _E {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let f;
    this.promise = new Promise(function(x) {
      f = x;
    });
    const h = this;
    this.promise.then((S) => {
      if (!h._listeners) return;
      let x = h._listeners.length;
      for (; x-- > 0; )
        h._listeners[x](S);
      h._listeners = null;
    }), this.promise.then = (S) => {
      let x;
      const C = new Promise((g) => {
        h.subscribe(g), x = g;
      }).then(S);
      return C.cancel = function() {
        h.unsubscribe(x);
      }, C;
    }, c(function(x, C, g) {
      h.reason || (h.reason = new Rh(x, C, g), f(h.reason));
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
      token: new _E(function(S) {
        c = S;
      }),
      cancel: c
    };
  }
}
function GL(p) {
  return function(f) {
    return p.apply(null, f);
  };
}
function KL(p) {
  return ie.isObject(p) && p.isAxiosError === !0;
}
const wE = {
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
Object.entries(wE).forEach(([p, c]) => {
  wE[c] = p;
});
function gb(p) {
  const c = new Tc(p), f = Zx(Tc.prototype.request, c);
  return ie.extend(f, Tc.prototype, c, { allOwnKeys: !0 }), ie.extend(f, c, null, { allOwnKeys: !0 }), f.create = function(S) {
    return gb(fd(p, S));
  }, f;
}
const or = gb(bh);
or.Axios = Tc;
or.CanceledError = Rh;
or.CancelToken = _E;
or.isCancel = hb;
or.VERSION = yb;
or.toFormData = Ny;
or.AxiosError = Ht;
or.Cancel = or.CanceledError;
or.all = function(c) {
  return Promise.all(c);
};
or.spread = GL;
or.isAxiosError = KL;
or.mergeConfig = fd;
or.AxiosHeaders = Bi;
or.formToJSON = (p) => pb(ie.isHTMLForm(p) ? new FormData(p) : p);
or.getAdapter = mb.getAdapter;
or.HttpStatusCode = wE;
or.default = or;
var Sb = {}, dd = {};
Object.defineProperty(dd, "__esModule", { value: !0 });
dd.cssValue = dd.parseLengthAndUnit = void 0;
var XL = {
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
function Eb(p) {
  if (typeof p == "number")
    return {
      value: p,
      unit: "px"
    };
  var c, f = (p.match(/^[0-9.]*/) || "").toString();
  f.includes(".") ? c = parseFloat(f) : c = parseInt(f, 10);
  var h = (p.match(/[^0-9]*$/) || "").toString();
  return XL[h] ? {
    value: c,
    unit: h
  } : (console.warn("React Spinners: ".concat(p, " is not a valid css value. Defaulting to ").concat(c, "px.")), {
    value: c,
    unit: "px"
  });
}
dd.parseLengthAndUnit = Eb;
function ZL(p) {
  var c = Eb(p);
  return "".concat(c.value).concat(c.unit);
}
dd.cssValue = ZL;
var My = {};
Object.defineProperty(My, "__esModule", { value: !0 });
My.createAnimation = void 0;
var JL = function(p, c, f) {
  var h = "react-spinners-".concat(p, "-").concat(f);
  if (typeof window > "u" || !window.document)
    return h;
  var S = document.createElement("style");
  document.head.appendChild(S);
  var x = S.sheet, C = `
    @keyframes `.concat(h, ` {
      `).concat(c, `
    }
  `);
  return x && x.insertRule(C, 0), h;
};
My.createAnimation = JL;
var Ry = wl && wl.__assign || function() {
  return Ry = Object.assign || function(p) {
    for (var c, f = 1, h = arguments.length; f < h; f++) {
      c = arguments[f];
      for (var S in c) Object.prototype.hasOwnProperty.call(c, S) && (p[S] = c[S]);
    }
    return p;
  }, Ry.apply(this, arguments);
}, eN = wl && wl.__createBinding || (Object.create ? function(p, c, f, h) {
  h === void 0 && (h = f);
  var S = Object.getOwnPropertyDescriptor(c, f);
  (!S || ("get" in S ? !c.__esModule : S.writable || S.configurable)) && (S = { enumerable: !0, get: function() {
    return c[f];
  } }), Object.defineProperty(p, h, S);
} : function(p, c, f, h) {
  h === void 0 && (h = f), p[h] = c[f];
}), tN = wl && wl.__setModuleDefault || (Object.create ? function(p, c) {
  Object.defineProperty(p, "default", { enumerable: !0, value: c });
} : function(p, c) {
  p.default = c;
}), nN = wl && wl.__importStar || function(p) {
  if (p && p.__esModule) return p;
  var c = {};
  if (p != null) for (var f in p) f !== "default" && Object.prototype.hasOwnProperty.call(p, f) && eN(c, p, f);
  return tN(c, p), c;
}, rN = wl && wl.__rest || function(p, c) {
  var f = {};
  for (var h in p) Object.prototype.hasOwnProperty.call(p, h) && c.indexOf(h) < 0 && (f[h] = p[h]);
  if (p != null && typeof Object.getOwnPropertySymbols == "function")
    for (var S = 0, h = Object.getOwnPropertySymbols(p); S < h.length; S++)
      c.indexOf(h[S]) < 0 && Object.prototype.propertyIsEnumerable.call(p, h[S]) && (f[h[S]] = p[h[S]]);
  return f;
};
Object.defineProperty(Sb, "__esModule", { value: !0 });
var Ey = nN(er), dE = dd, aN = My, iN = (0, aN.createAnimation)("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function lN(p) {
  var c = p.loading, f = c === void 0 ? !0 : c, h = p.color, S = h === void 0 ? "#000000" : h, x = p.speedMultiplier, C = x === void 0 ? 1 : x, g = p.cssOverride, U = g === void 0 ? {} : g, j = p.size, M = j === void 0 ? 15 : j, F = p.margin, I = F === void 0 ? 2 : F, oe = rN(p, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), X = Ry({ display: "inherit" }, U), Z = function(Re) {
    return {
      backgroundColor: S,
      width: (0, dE.cssValue)(M),
      height: (0, dE.cssValue)(M),
      margin: (0, dE.cssValue)(I),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(iN, " ").concat(0.75 / C, "s ").concat(Re * 0.12 / C, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return f ? Ey.createElement(
    "span",
    Ry({ style: X }, oe),
    Ey.createElement("span", { style: Z(1) }),
    Ey.createElement("span", { style: Z(2) }),
    Ey.createElement("span", { style: Z(3) })
  ) : null;
}
var oN = Sb.default = lN, wb = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(p) {
  (function() {
    var c = {}.hasOwnProperty;
    function f() {
      for (var x = "", C = 0; C < arguments.length; C++) {
        var g = arguments[C];
        g && (x = S(x, h(g)));
      }
      return x;
    }
    function h(x) {
      if (typeof x == "string" || typeof x == "number")
        return x;
      if (typeof x != "object")
        return "";
      if (Array.isArray(x))
        return f.apply(null, x);
      if (x.toString !== Object.prototype.toString && !x.toString.toString().includes("[native code]"))
        return x.toString();
      var C = "";
      for (var g in x)
        c.call(x, g) && x[g] && (C = S(C, g));
      return C;
    }
    function S(x, C) {
      return C ? x ? x + " " + C : x + C : x;
    }
    p.exports ? (f.default = f, p.exports = f) : window.classNames = f;
  })();
})(wb);
var uN = wb.exports;
const sN = /* @__PURE__ */ bE(uN);
function OE() {
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
let Oc = OE();
function Cb(p) {
  Oc = p;
}
const xb = /[&<>"']/, cN = new RegExp(xb.source, "g"), bb = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, fN = new RegExp(bb.source, "g"), dN = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, jx = (p) => dN[p];
function mi(p, c) {
  if (c) {
    if (xb.test(p))
      return p.replace(cN, jx);
  } else if (bb.test(p))
    return p.replace(fN, jx);
  return p;
}
const pN = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function hN(p) {
  return p.replace(pN, (c, f) => (f = f.toLowerCase(), f === "colon" ? ":" : f.charAt(0) === "#" ? f.charAt(1) === "x" ? String.fromCharCode(parseInt(f.substring(2), 16)) : String.fromCharCode(+f.substring(1)) : ""));
}
const vN = /(^|[^\[])\^/g;
function un(p, c) {
  let f = typeof p == "string" ? p : p.source;
  c = c || "";
  const h = {
    replace: (S, x) => {
      let C = typeof x == "string" ? x : x.source;
      return C = C.replace(vN, "$1"), f = f.replace(S, C), h;
    },
    getRegex: () => new RegExp(f, c)
  };
  return h;
}
function Px(p) {
  try {
    p = encodeURI(p).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return p;
}
const Eh = { exec: () => null };
function Hx(p, c) {
  const f = p.replace(/\|/g, (x, C, g) => {
    let U = !1, j = C;
    for (; --j >= 0 && g[j] === "\\"; )
      U = !U;
    return U ? "|" : " |";
  }), h = f.split(/ \|/);
  let S = 0;
  if (h[0].trim() || h.shift(), h.length > 0 && !h[h.length - 1].trim() && h.pop(), c)
    if (h.length > c)
      h.splice(c);
    else
      for (; h.length < c; )
        h.push("");
  for (; S < h.length; S++)
    h[S] = h[S].trim().replace(/\\\|/g, "|");
  return h;
}
function wy(p, c, f) {
  const h = p.length;
  if (h === 0)
    return "";
  let S = 0;
  for (; S < h; ) {
    const x = p.charAt(h - S - 1);
    if (x === c && !f)
      S++;
    else if (x !== c && f)
      S++;
    else
      break;
  }
  return p.slice(0, h - S);
}
function mN(p, c) {
  if (p.indexOf(c[1]) === -1)
    return -1;
  let f = 0;
  for (let h = 0; h < p.length; h++)
    if (p[h] === "\\")
      h++;
    else if (p[h] === c[0])
      f++;
    else if (p[h] === c[1] && (f--, f < 0))
      return h;
  return -1;
}
function Bx(p, c, f, h) {
  const S = c.href, x = c.title ? mi(c.title) : null, C = p[1].replace(/\\([\[\]])/g, "$1");
  if (p[0].charAt(0) !== "!") {
    h.state.inLink = !0;
    const g = {
      type: "link",
      raw: f,
      href: S,
      title: x,
      text: C,
      tokens: h.inlineTokens(C)
    };
    return h.state.inLink = !1, g;
  }
  return {
    type: "image",
    raw: f,
    href: S,
    title: x,
    text: mi(C)
  };
}
function yN(p, c) {
  const f = p.match(/^(\s+)(?:```)/);
  if (f === null)
    return c;
  const h = f[1];
  return c.split(`
`).map((S) => {
    const x = S.match(/^\s+/);
    if (x === null)
      return S;
    const [C] = x;
    return C.length >= h.length ? S.slice(h.length) : S;
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
      const h = f[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: f[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? h : wy(h, `
`)
      };
    }
  }
  fences(c) {
    const f = this.rules.block.fences.exec(c);
    if (f) {
      const h = f[0], S = yN(h, f[3] || "");
      return {
        type: "code",
        raw: h,
        lang: f[2] ? f[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : f[2],
        text: S
      };
    }
  }
  heading(c) {
    const f = this.rules.block.heading.exec(c);
    if (f) {
      let h = f[2].trim();
      if (/#$/.test(h)) {
        const S = wy(h, "#");
        (this.options.pedantic || !S || / $/.test(S)) && (h = S.trim());
      }
      return {
        type: "heading",
        raw: f[0],
        depth: f[1].length,
        text: h,
        tokens: this.lexer.inline(h)
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
      const h = wy(f[0].replace(/^ *>[ \t]?/gm, ""), `
`), S = this.lexer.state.top;
      this.lexer.state.top = !0;
      const x = this.lexer.blockTokens(h);
      return this.lexer.state.top = S, {
        type: "blockquote",
        raw: f[0],
        tokens: x,
        text: h
      };
    }
  }
  list(c) {
    let f = this.rules.block.list.exec(c);
    if (f) {
      let h = f[1].trim();
      const S = h.length > 1, x = {
        type: "list",
        raw: "",
        ordered: S,
        start: S ? +h.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      h = S ? `\\d{1,9}\\${h.slice(-1)}` : `\\${h}`, this.options.pedantic && (h = S ? h : "[*+-]");
      const C = new RegExp(`^( {0,3}${h})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let g = "", U = "", j = !1;
      for (; c; ) {
        let M = !1;
        if (!(f = C.exec(c)) || this.rules.block.hr.test(c))
          break;
        g = f[0], c = c.substring(g.length);
        let F = f[2].split(`
`, 1)[0].replace(/^\t+/, (ct) => " ".repeat(3 * ct.length)), I = c.split(`
`, 1)[0], oe = 0;
        this.options.pedantic ? (oe = 2, U = F.trimStart()) : (oe = f[2].search(/[^ ]/), oe = oe > 4 ? 1 : oe, U = F.slice(oe), oe += f[1].length);
        let X = !1;
        if (!F && /^ *$/.test(I) && (g += I + `
`, c = c.substring(I.length + 1), M = !0), !M) {
          const ct = new RegExp(`^ {0,${Math.min(3, oe - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), vt = new RegExp(`^ {0,${Math.min(3, oe - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), Ve = new RegExp(`^ {0,${Math.min(3, oe - 1)}}(?:\`\`\`|~~~)`), Ae = new RegExp(`^ {0,${Math.min(3, oe - 1)}}#`);
          for (; c; ) {
            const yt = c.split(`
`, 1)[0];
            if (I = yt, this.options.pedantic && (I = I.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), Ve.test(I) || Ae.test(I) || ct.test(I) || vt.test(c))
              break;
            if (I.search(/[^ ]/) >= oe || !I.trim())
              U += `
` + I.slice(oe);
            else {
              if (X || F.search(/[^ ]/) >= 4 || Ve.test(F) || Ae.test(F) || vt.test(F))
                break;
              U += `
` + I;
            }
            !X && !I.trim() && (X = !0), g += yt + `
`, c = c.substring(yt.length + 1), F = I.slice(oe);
          }
        }
        x.loose || (j ? x.loose = !0 : /\n *\n *$/.test(g) && (j = !0));
        let Z = null, Re;
        this.options.gfm && (Z = /^\[[ xX]\] /.exec(U), Z && (Re = Z[0] !== "[ ] ", U = U.replace(/^\[[ xX]\] +/, ""))), x.items.push({
          type: "list_item",
          raw: g,
          task: !!Z,
          checked: Re,
          loose: !1,
          text: U,
          tokens: []
        }), x.raw += g;
      }
      x.items[x.items.length - 1].raw = g.trimEnd(), x.items[x.items.length - 1].text = U.trimEnd(), x.raw = x.raw.trimEnd();
      for (let M = 0; M < x.items.length; M++)
        if (this.lexer.state.top = !1, x.items[M].tokens = this.lexer.blockTokens(x.items[M].text, []), !x.loose) {
          const F = x.items[M].tokens.filter((oe) => oe.type === "space"), I = F.length > 0 && F.some((oe) => /\n.*\n/.test(oe.raw));
          x.loose = I;
        }
      if (x.loose)
        for (let M = 0; M < x.items.length; M++)
          x.items[M].loose = !0;
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
      const h = f[1].toLowerCase().replace(/\s+/g, " "), S = f[2] ? f[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", x = f[3] ? f[3].substring(1, f[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : f[3];
      return {
        type: "def",
        tag: h,
        raw: f[0],
        href: S,
        title: x
      };
    }
  }
  table(c) {
    const f = this.rules.block.table.exec(c);
    if (!f || !/[:|]/.test(f[2]))
      return;
    const h = Hx(f[1]), S = f[2].replace(/^\||\| *$/g, "").split("|"), x = f[3] && f[3].trim() ? f[3].replace(/\n[ \t]*$/, "").split(`
`) : [], C = {
      type: "table",
      raw: f[0],
      header: [],
      align: [],
      rows: []
    };
    if (h.length === S.length) {
      for (const g of S)
        /^ *-+: *$/.test(g) ? C.align.push("right") : /^ *:-+: *$/.test(g) ? C.align.push("center") : /^ *:-+ *$/.test(g) ? C.align.push("left") : C.align.push(null);
      for (const g of h)
        C.header.push({
          text: g,
          tokens: this.lexer.inline(g)
        });
      for (const g of x)
        C.rows.push(Hx(g, C.header.length).map((U) => ({
          text: U,
          tokens: this.lexer.inline(U)
        })));
      return C;
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
      const h = f[1].charAt(f[1].length - 1) === `
` ? f[1].slice(0, -1) : f[1];
      return {
        type: "paragraph",
        raw: f[0],
        text: h,
        tokens: this.lexer.inline(h)
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
      const h = f[2].trim();
      if (!this.options.pedantic && /^</.test(h)) {
        if (!/>$/.test(h))
          return;
        const C = wy(h.slice(0, -1), "\\");
        if ((h.length - C.length) % 2 === 0)
          return;
      } else {
        const C = mN(f[2], "()");
        if (C > -1) {
          const U = (f[0].indexOf("!") === 0 ? 5 : 4) + f[1].length + C;
          f[2] = f[2].substring(0, C), f[0] = f[0].substring(0, U).trim(), f[3] = "";
        }
      }
      let S = f[2], x = "";
      if (this.options.pedantic) {
        const C = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(S);
        C && (S = C[1], x = C[3]);
      } else
        x = f[3] ? f[3].slice(1, -1) : "";
      return S = S.trim(), /^</.test(S) && (this.options.pedantic && !/>$/.test(h) ? S = S.slice(1) : S = S.slice(1, -1)), Bx(f, {
        href: S && S.replace(this.rules.inline.anyPunctuation, "$1"),
        title: x && x.replace(this.rules.inline.anyPunctuation, "$1")
      }, f[0], this.lexer);
    }
  }
  reflink(c, f) {
    let h;
    if ((h = this.rules.inline.reflink.exec(c)) || (h = this.rules.inline.nolink.exec(c))) {
      const S = (h[2] || h[1]).replace(/\s+/g, " "), x = f[S.toLowerCase()];
      if (!x) {
        const C = h[0].charAt(0);
        return {
          type: "text",
          raw: C,
          text: C
        };
      }
      return Bx(h, x, h[0], this.lexer);
    }
  }
  emStrong(c, f, h = "") {
    let S = this.rules.inline.emStrongLDelim.exec(c);
    if (!S || S[3] && h.match(/[\p{L}\p{N}]/u))
      return;
    if (!(S[1] || S[2] || "") || !h || this.rules.inline.punctuation.exec(h)) {
      const C = [...S[0]].length - 1;
      let g, U, j = C, M = 0;
      const F = S[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (F.lastIndex = 0, f = f.slice(-1 * c.length + C); (S = F.exec(f)) != null; ) {
        if (g = S[1] || S[2] || S[3] || S[4] || S[5] || S[6], !g)
          continue;
        if (U = [...g].length, S[3] || S[4]) {
          j += U;
          continue;
        } else if ((S[5] || S[6]) && C % 3 && !((C + U) % 3)) {
          M += U;
          continue;
        }
        if (j -= U, j > 0)
          continue;
        U = Math.min(U, U + j + M);
        const I = [...S[0]][0].length, oe = c.slice(0, C + S.index + I + U);
        if (Math.min(C, U) % 2) {
          const Z = oe.slice(1, -1);
          return {
            type: "em",
            raw: oe,
            text: Z,
            tokens: this.lexer.inlineTokens(Z)
          };
        }
        const X = oe.slice(2, -2);
        return {
          type: "strong",
          raw: oe,
          text: X,
          tokens: this.lexer.inlineTokens(X)
        };
      }
    }
  }
  codespan(c) {
    const f = this.rules.inline.code.exec(c);
    if (f) {
      let h = f[2].replace(/\n/g, " ");
      const S = /[^ ]/.test(h), x = /^ /.test(h) && / $/.test(h);
      return S && x && (h = h.substring(1, h.length - 1)), h = mi(h, !0), {
        type: "codespan",
        raw: f[0],
        text: h
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
      let h, S;
      return f[2] === "@" ? (h = mi(f[1]), S = "mailto:" + h) : (h = mi(f[1]), S = h), {
        type: "link",
        raw: f[0],
        text: h,
        href: S,
        tokens: [
          {
            type: "text",
            raw: h,
            text: h
          }
        ]
      };
    }
  }
  url(c) {
    var h;
    let f;
    if (f = this.rules.inline.url.exec(c)) {
      let S, x;
      if (f[2] === "@")
        S = mi(f[0]), x = "mailto:" + S;
      else {
        let C;
        do
          C = f[0], f[0] = ((h = this.rules.inline._backpedal.exec(f[0])) == null ? void 0 : h[0]) ?? "";
        while (C !== f[0]);
        S = mi(f[0]), f[1] === "www." ? x = "http://" + f[0] : x = f[0];
      }
      return {
        type: "link",
        raw: f[0],
        text: S,
        href: x,
        tokens: [
          {
            type: "text",
            raw: S,
            text: S
          }
        ]
      };
    }
  }
  inlineText(c) {
    const f = this.rules.inline.text.exec(c);
    if (f) {
      let h;
      return this.lexer.state.inRawBlock ? h = f[0] : h = mi(f[0]), {
        type: "text",
        raw: f[0],
        text: h
      };
    }
  }
}
const gN = /^(?: *(?:\n|$))+/, SN = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, EN = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Th = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, wN = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Rb = /(?:[*+-]|\d{1,9}[.)])/, Tb = un(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Rb).getRegex(), DE = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, CN = /^[^\n]+/, LE = /(?!\s*\])(?:\\.|[^\[\]\\])+/, xN = un(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", LE).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), bN = un(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Rb).getRegex(), Ay = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", NE = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, RN = un("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", NE).replace("tag", Ay).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), kb = un(DE).replace("hr", Th).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ay).getRegex(), TN = un(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", kb).getRegex(), ME = {
  blockquote: TN,
  code: SN,
  def: xN,
  fences: EN,
  heading: wN,
  hr: Th,
  html: RN,
  lheading: Tb,
  list: bN,
  newline: gN,
  paragraph: kb,
  table: Eh,
  text: CN
}, $x = un("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Th).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ay).getRegex(), kN = {
  ...ME,
  table: $x,
  paragraph: un(DE).replace("hr", Th).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", $x).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ay).getRegex()
}, _N = {
  ...ME,
  html: un(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", NE).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Eh,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: un(DE).replace("hr", Th).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Tb).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, _b = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, ON = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ob = /^( {2,}|\\)\n(?!\s*$)/, DN = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, kh = "\\p{P}\\p{S}", LN = un(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, kh).getRegex(), NN = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, MN = un(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, kh).getRegex(), AN = un("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, kh).getRegex(), zN = un("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, kh).getRegex(), UN = un(/\\([punct])/, "gu").replace(/punct/g, kh).getRegex(), FN = un(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), jN = un(NE).replace("(?:-->|$)", "-->").getRegex(), PN = un("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", jN).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ky = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, HN = un(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", ky).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Db = un(/^!?\[(label)\]\[(ref)\]/).replace("label", ky).replace("ref", LE).getRegex(), Lb = un(/^!?\[(ref)\](?:\[\])?/).replace("ref", LE).getRegex(), BN = un("reflink|nolink(?!\\()", "g").replace("reflink", Db).replace("nolink", Lb).getRegex(), AE = {
  _backpedal: Eh,
  // only used for GFM url
  anyPunctuation: UN,
  autolink: FN,
  blockSkip: NN,
  br: Ob,
  code: ON,
  del: Eh,
  emStrongLDelim: MN,
  emStrongRDelimAst: AN,
  emStrongRDelimUnd: zN,
  escape: _b,
  link: HN,
  nolink: Lb,
  punctuation: LN,
  reflink: Db,
  reflinkSearch: BN,
  tag: PN,
  text: DN,
  url: Eh
}, $N = {
  ...AE,
  link: un(/^!?\[(label)\]\((.*?)\)/).replace("label", ky).getRegex(),
  reflink: un(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ky).getRegex()
}, CE = {
  ...AE,
  escape: un(_b).replace("])", "~|])").getRegex(),
  url: un(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, VN = {
  ...CE,
  br: un(Ob).replace("{2,}", "*").getRegex(),
  text: un(CE.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Cy = {
  normal: ME,
  gfm: kN,
  pedantic: _N
}, mh = {
  normal: AE,
  gfm: CE,
  breaks: VN,
  pedantic: $N
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
      const h = this.inlineQueue[f];
      this.inlineTokens(h.src, h.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(c, f = []) {
    this.options.pedantic ? c = c.replace(/\t/g, "    ").replace(/^ +$/gm, "") : c = c.replace(/^( *)(\t+)/gm, (g, U, j) => U + "    ".repeat(j.length));
    let h, S, x, C;
    for (; c; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((g) => (h = g.call({ lexer: this }, c, f)) ? (c = c.substring(h.raw.length), f.push(h), !0) : !1))) {
        if (h = this.tokenizer.space(c)) {
          c = c.substring(h.raw.length), h.raw.length === 1 && f.length > 0 ? f[f.length - 1].raw += `
` : f.push(h);
          continue;
        }
        if (h = this.tokenizer.code(c)) {
          c = c.substring(h.raw.length), S = f[f.length - 1], S && (S.type === "paragraph" || S.type === "text") ? (S.raw += `
` + h.raw, S.text += `
` + h.text, this.inlineQueue[this.inlineQueue.length - 1].src = S.text) : f.push(h);
          continue;
        }
        if (h = this.tokenizer.fences(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.heading(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.hr(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.blockquote(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.list(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.html(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.def(c)) {
          c = c.substring(h.raw.length), S = f[f.length - 1], S && (S.type === "paragraph" || S.type === "text") ? (S.raw += `
` + h.raw, S.text += `
` + h.raw, this.inlineQueue[this.inlineQueue.length - 1].src = S.text) : this.tokens.links[h.tag] || (this.tokens.links[h.tag] = {
            href: h.href,
            title: h.title
          });
          continue;
        }
        if (h = this.tokenizer.table(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.lheading(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (x = c, this.options.extensions && this.options.extensions.startBlock) {
          let g = 1 / 0;
          const U = c.slice(1);
          let j;
          this.options.extensions.startBlock.forEach((M) => {
            j = M.call({ lexer: this }, U), typeof j == "number" && j >= 0 && (g = Math.min(g, j));
          }), g < 1 / 0 && g >= 0 && (x = c.substring(0, g + 1));
        }
        if (this.state.top && (h = this.tokenizer.paragraph(x))) {
          S = f[f.length - 1], C && S.type === "paragraph" ? (S.raw += `
` + h.raw, S.text += `
` + h.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = S.text) : f.push(h), C = x.length !== c.length, c = c.substring(h.raw.length);
          continue;
        }
        if (h = this.tokenizer.text(c)) {
          c = c.substring(h.raw.length), S = f[f.length - 1], S && S.type === "text" ? (S.raw += `
` + h.raw, S.text += `
` + h.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = S.text) : f.push(h);
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
    let h, S, x, C = c, g, U, j;
    if (this.tokens.links) {
      const M = Object.keys(this.tokens.links);
      if (M.length > 0)
        for (; (g = this.tokenizer.rules.inline.reflinkSearch.exec(C)) != null; )
          M.includes(g[0].slice(g[0].lastIndexOf("[") + 1, -1)) && (C = C.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + C.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (g = this.tokenizer.rules.inline.blockSkip.exec(C)) != null; )
      C = C.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + C.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (g = this.tokenizer.rules.inline.anyPunctuation.exec(C)) != null; )
      C = C.slice(0, g.index) + "++" + C.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; c; )
      if (U || (j = ""), U = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((M) => (h = M.call({ lexer: this }, c, f)) ? (c = c.substring(h.raw.length), f.push(h), !0) : !1))) {
        if (h = this.tokenizer.escape(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.tag(c)) {
          c = c.substring(h.raw.length), S = f[f.length - 1], S && h.type === "text" && S.type === "text" ? (S.raw += h.raw, S.text += h.text) : f.push(h);
          continue;
        }
        if (h = this.tokenizer.link(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.reflink(c, this.tokens.links)) {
          c = c.substring(h.raw.length), S = f[f.length - 1], S && h.type === "text" && S.type === "text" ? (S.raw += h.raw, S.text += h.text) : f.push(h);
          continue;
        }
        if (h = this.tokenizer.emStrong(c, C, j)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.codespan(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.br(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.del(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (h = this.tokenizer.autolink(c)) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (!this.state.inLink && (h = this.tokenizer.url(c))) {
          c = c.substring(h.raw.length), f.push(h);
          continue;
        }
        if (x = c, this.options.extensions && this.options.extensions.startInline) {
          let M = 1 / 0;
          const F = c.slice(1);
          let I;
          this.options.extensions.startInline.forEach((oe) => {
            I = oe.call({ lexer: this }, F), typeof I == "number" && I >= 0 && (M = Math.min(M, I));
          }), M < 1 / 0 && M >= 0 && (x = c.substring(0, M + 1));
        }
        if (h = this.tokenizer.inlineText(x)) {
          c = c.substring(h.raw.length), h.raw.slice(-1) !== "_" && (j = h.raw.slice(-1)), U = !0, S = f[f.length - 1], S && S.type === "text" ? (S.raw += h.raw, S.text += h.text) : f.push(h);
          continue;
        }
        if (c) {
          const M = "Infinite loop on byte: " + c.charCodeAt(0);
          if (this.options.silent) {
            console.error(M);
            break;
          } else
            throw new Error(M);
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
  code(c, f, h) {
    var x;
    const S = (x = (f || "").match(/^\S*/)) == null ? void 0 : x[0];
    return c = c.replace(/\n$/, "") + `
`, S ? '<pre><code class="language-' + mi(S) + '">' + (h ? c : mi(c, !0)) + `</code></pre>
` : "<pre><code>" + (h ? c : mi(c, !0)) + `</code></pre>
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
  heading(c, f, h) {
    return `<h${f}>${c}</h${f}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(c, f, h) {
    const S = f ? "ol" : "ul", x = f && h !== 1 ? ' start="' + h + '"' : "";
    return "<" + S + x + `>
` + c + "</" + S + `>
`;
  }
  listitem(c, f, h) {
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
    const h = f.header ? "th" : "td";
    return (f.align ? `<${h} align="${f.align}">` : `<${h}>`) + c + `</${h}>
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
  link(c, f, h) {
    const S = Px(c);
    if (S === null)
      return h;
    c = S;
    let x = '<a href="' + c + '"';
    return f && (x += ' title="' + f + '"'), x += ">" + h + "</a>", x;
  }
  image(c, f, h) {
    const S = Px(c);
    if (S === null)
      return h;
    c = S;
    let x = `<img src="${c}" alt="${h}"`;
    return f && (x += ` title="${f}"`), x += ">", x;
  }
  text(c) {
    return c;
  }
}
class zE {
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
  link(c, f, h) {
    return "" + h;
  }
  image(c, f, h) {
    return "" + h;
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
    this.options = c || Oc, this.options.renderer = this.options.renderer || new _y(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new zE();
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
    let h = "";
    for (let S = 0; S < c.length; S++) {
      const x = c[S];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[x.type]) {
        const C = x, g = this.options.extensions.renderers[C.type].call({ parser: this }, C);
        if (g !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(C.type)) {
          h += g || "";
          continue;
        }
      }
      switch (x.type) {
        case "space":
          continue;
        case "hr": {
          h += this.renderer.hr();
          continue;
        }
        case "heading": {
          const C = x;
          h += this.renderer.heading(this.parseInline(C.tokens), C.depth, hN(this.parseInline(C.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const C = x;
          h += this.renderer.code(C.text, C.lang, !!C.escaped);
          continue;
        }
        case "table": {
          const C = x;
          let g = "", U = "";
          for (let M = 0; M < C.header.length; M++)
            U += this.renderer.tablecell(this.parseInline(C.header[M].tokens), { header: !0, align: C.align[M] });
          g += this.renderer.tablerow(U);
          let j = "";
          for (let M = 0; M < C.rows.length; M++) {
            const F = C.rows[M];
            U = "";
            for (let I = 0; I < F.length; I++)
              U += this.renderer.tablecell(this.parseInline(F[I].tokens), { header: !1, align: C.align[I] });
            j += this.renderer.tablerow(U);
          }
          h += this.renderer.table(g, j);
          continue;
        }
        case "blockquote": {
          const C = x, g = this.parse(C.tokens);
          h += this.renderer.blockquote(g);
          continue;
        }
        case "list": {
          const C = x, g = C.ordered, U = C.start, j = C.loose;
          let M = "";
          for (let F = 0; F < C.items.length; F++) {
            const I = C.items[F], oe = I.checked, X = I.task;
            let Z = "";
            if (I.task) {
              const Re = this.renderer.checkbox(!!oe);
              j ? I.tokens.length > 0 && I.tokens[0].type === "paragraph" ? (I.tokens[0].text = Re + " " + I.tokens[0].text, I.tokens[0].tokens && I.tokens[0].tokens.length > 0 && I.tokens[0].tokens[0].type === "text" && (I.tokens[0].tokens[0].text = Re + " " + I.tokens[0].tokens[0].text)) : I.tokens.unshift({
                type: "text",
                text: Re + " "
              }) : Z += Re + " ";
            }
            Z += this.parse(I.tokens, j), M += this.renderer.listitem(Z, X, !!oe);
          }
          h += this.renderer.list(M, g, U);
          continue;
        }
        case "html": {
          const C = x;
          h += this.renderer.html(C.text, C.block);
          continue;
        }
        case "paragraph": {
          const C = x;
          h += this.renderer.paragraph(this.parseInline(C.tokens));
          continue;
        }
        case "text": {
          let C = x, g = C.tokens ? this.parseInline(C.tokens) : C.text;
          for (; S + 1 < c.length && c[S + 1].type === "text"; )
            C = c[++S], g += `
` + (C.tokens ? this.parseInline(C.tokens) : C.text);
          h += f ? this.renderer.paragraph(g) : g;
          continue;
        }
        default: {
          const C = 'Token with "' + x.type + '" type was not found.';
          if (this.options.silent)
            return console.error(C), "";
          throw new Error(C);
        }
      }
    }
    return h;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(c, f) {
    f = f || this.renderer;
    let h = "";
    for (let S = 0; S < c.length; S++) {
      const x = c[S];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[x.type]) {
        const C = this.options.extensions.renderers[x.type].call({ parser: this }, x);
        if (C !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(x.type)) {
          h += C || "";
          continue;
        }
      }
      switch (x.type) {
        case "escape": {
          const C = x;
          h += f.text(C.text);
          break;
        }
        case "html": {
          const C = x;
          h += f.html(C.text);
          break;
        }
        case "link": {
          const C = x;
          h += f.link(C.href, C.title, this.parseInline(C.tokens, f));
          break;
        }
        case "image": {
          const C = x;
          h += f.image(C.href, C.title, C.text);
          break;
        }
        case "strong": {
          const C = x;
          h += f.strong(this.parseInline(C.tokens, f));
          break;
        }
        case "em": {
          const C = x;
          h += f.em(this.parseInline(C.tokens, f));
          break;
        }
        case "codespan": {
          const C = x;
          h += f.codespan(C.text);
          break;
        }
        case "br": {
          h += f.br();
          break;
        }
        case "del": {
          const C = x;
          h += f.del(this.parseInline(C.tokens, f));
          break;
        }
        case "text": {
          const C = x;
          h += f.text(C.text);
          break;
        }
        default: {
          const C = 'Token with "' + x.type + '" type was not found.';
          if (this.options.silent)
            return console.error(C), "";
          throw new Error(C);
        }
      }
    }
    return h;
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
var _c, xE, Nb;
class IN {
  constructor(...c) {
    yx(this, _c);
    xn(this, "defaults", OE());
    xn(this, "options", this.setOptions);
    xn(this, "parse", yy(this, _c, xE).call(this, oo.lex, uo.parse));
    xn(this, "parseInline", yy(this, _c, xE).call(this, oo.lexInline, uo.parseInline));
    xn(this, "Parser", uo);
    xn(this, "Renderer", _y);
    xn(this, "TextRenderer", zE);
    xn(this, "Lexer", oo);
    xn(this, "Tokenizer", Ty);
    xn(this, "Hooks", wh);
    this.use(...c);
  }
  /**
   * Run callback for every token
   */
  walkTokens(c, f) {
    var S, x;
    let h = [];
    for (const C of c)
      switch (h = h.concat(f.call(this, C)), C.type) {
        case "table": {
          const g = C;
          for (const U of g.header)
            h = h.concat(this.walkTokens(U.tokens, f));
          for (const U of g.rows)
            for (const j of U)
              h = h.concat(this.walkTokens(j.tokens, f));
          break;
        }
        case "list": {
          const g = C;
          h = h.concat(this.walkTokens(g.items, f));
          break;
        }
        default: {
          const g = C;
          (x = (S = this.defaults.extensions) == null ? void 0 : S.childTokens) != null && x[g.type] ? this.defaults.extensions.childTokens[g.type].forEach((U) => {
            const j = g[U].flat(1 / 0);
            h = h.concat(this.walkTokens(j, f));
          }) : g.tokens && (h = h.concat(this.walkTokens(g.tokens, f)));
        }
      }
    return h;
  }
  use(...c) {
    const f = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return c.forEach((h) => {
      const S = { ...h };
      if (S.async = this.defaults.async || S.async || !1, h.extensions && (h.extensions.forEach((x) => {
        if (!x.name)
          throw new Error("extension name required");
        if ("renderer" in x) {
          const C = f.renderers[x.name];
          C ? f.renderers[x.name] = function(...g) {
            let U = x.renderer.apply(this, g);
            return U === !1 && (U = C.apply(this, g)), U;
          } : f.renderers[x.name] = x.renderer;
        }
        if ("tokenizer" in x) {
          if (!x.level || x.level !== "block" && x.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const C = f[x.level];
          C ? C.unshift(x.tokenizer) : f[x.level] = [x.tokenizer], x.start && (x.level === "block" ? f.startBlock ? f.startBlock.push(x.start) : f.startBlock = [x.start] : x.level === "inline" && (f.startInline ? f.startInline.push(x.start) : f.startInline = [x.start]));
        }
        "childTokens" in x && x.childTokens && (f.childTokens[x.name] = x.childTokens);
      }), S.extensions = f), h.renderer) {
        const x = this.defaults.renderer || new _y(this.defaults);
        for (const C in h.renderer) {
          if (!(C in x))
            throw new Error(`renderer '${C}' does not exist`);
          if (C === "options")
            continue;
          const g = C, U = h.renderer[g], j = x[g];
          x[g] = (...M) => {
            let F = U.apply(x, M);
            return F === !1 && (F = j.apply(x, M)), F || "";
          };
        }
        S.renderer = x;
      }
      if (h.tokenizer) {
        const x = this.defaults.tokenizer || new Ty(this.defaults);
        for (const C in h.tokenizer) {
          if (!(C in x))
            throw new Error(`tokenizer '${C}' does not exist`);
          if (["options", "rules", "lexer"].includes(C))
            continue;
          const g = C, U = h.tokenizer[g], j = x[g];
          x[g] = (...M) => {
            let F = U.apply(x, M);
            return F === !1 && (F = j.apply(x, M)), F;
          };
        }
        S.tokenizer = x;
      }
      if (h.hooks) {
        const x = this.defaults.hooks || new wh();
        for (const C in h.hooks) {
          if (!(C in x))
            throw new Error(`hook '${C}' does not exist`);
          if (C === "options")
            continue;
          const g = C, U = h.hooks[g], j = x[g];
          wh.passThroughHooks.has(C) ? x[g] = (M) => {
            if (this.defaults.async)
              return Promise.resolve(U.call(x, M)).then((I) => j.call(x, I));
            const F = U.call(x, M);
            return j.call(x, F);
          } : x[g] = (...M) => {
            let F = U.apply(x, M);
            return F === !1 && (F = j.apply(x, M)), F;
          };
        }
        S.hooks = x;
      }
      if (h.walkTokens) {
        const x = this.defaults.walkTokens, C = h.walkTokens;
        S.walkTokens = function(g) {
          let U = [];
          return U.push(C.call(this, g)), x && (U = U.concat(x.call(this, g))), U;
        };
      }
      this.defaults = { ...this.defaults, ...S };
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
_c = new WeakSet(), xE = function(c, f) {
  return (h, S) => {
    const x = { ...S }, C = { ...this.defaults, ...x };
    this.defaults.async === !0 && x.async === !1 && (C.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), C.async = !0);
    const g = yy(this, _c, Nb).call(this, !!C.silent, !!C.async);
    if (typeof h > "u" || h === null)
      return g(new Error("marked(): input parameter is undefined or null"));
    if (typeof h != "string")
      return g(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(h) + ", string expected"));
    if (C.hooks && (C.hooks.options = C), C.async)
      return Promise.resolve(C.hooks ? C.hooks.preprocess(h) : h).then((U) => c(U, C)).then((U) => C.hooks ? C.hooks.processAllTokens(U) : U).then((U) => C.walkTokens ? Promise.all(this.walkTokens(U, C.walkTokens)).then(() => U) : U).then((U) => f(U, C)).then((U) => C.hooks ? C.hooks.postprocess(U) : U).catch(g);
    try {
      C.hooks && (h = C.hooks.preprocess(h));
      let U = c(h, C);
      C.hooks && (U = C.hooks.processAllTokens(U)), C.walkTokens && this.walkTokens(U, C.walkTokens);
      let j = f(U, C);
      return C.hooks && (j = C.hooks.postprocess(j)), j;
    } catch (U) {
      return g(U);
    }
  };
}, Nb = function(c, f) {
  return (h) => {
    if (h.message += `
Please report this to https://github.com/markedjs/marked.`, c) {
      const S = "<p>An error occurred:</p><pre>" + mi(h.message + "", !0) + "</pre>";
      return f ? Promise.resolve(S) : S;
    }
    if (f)
      return Promise.reject(h);
    throw h;
  };
};
const kc = new IN();
function en(p, c) {
  return kc.parse(p, c);
}
en.options = en.setOptions = function(p) {
  return kc.setOptions(p), en.defaults = kc.defaults, Cb(en.defaults), en;
};
en.getDefaults = OE;
en.defaults = Oc;
en.use = function(...p) {
  return kc.use(...p), en.defaults = kc.defaults, Cb(en.defaults), en;
};
en.walkTokens = function(p, c) {
  return kc.walkTokens(p, c);
};
en.parseInline = kc.parseInline;
en.Parser = uo;
en.parser = uo.parse;
en.Renderer = _y;
en.TextRenderer = zE;
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
var Mb = { exports: {} };
(function(p) {
  (function(c, f) {
    p.exports ? p.exports = f() : c.moo = f();
  })(wl, function() {
    var c = Object.prototype.hasOwnProperty, f = Object.prototype.toString, h = typeof new RegExp().sticky == "boolean";
    function S(H) {
      return H && f.call(H) === "[object RegExp]";
    }
    function x(H) {
      return H && typeof H == "object" && !S(H) && !Array.isArray(H);
    }
    function C(H) {
      return H.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function g(H) {
      var ne = new RegExp("|" + H);
      return ne.exec("").length - 1;
    }
    function U(H) {
      return "(" + H + ")";
    }
    function j(H) {
      if (!H.length) return "(?!)";
      var ne = H.map(function(he) {
        return "(?:" + he + ")";
      }).join("|");
      return "(?:" + ne + ")";
    }
    function M(H) {
      if (typeof H == "string")
        return "(?:" + C(H) + ")";
      if (S(H)) {
        if (H.ignoreCase) throw new Error("RegExp /i flag not allowed");
        if (H.global) throw new Error("RegExp /g flag is implied");
        if (H.sticky) throw new Error("RegExp /y flag is implied");
        if (H.multiline) throw new Error("RegExp /m flag is implied");
        return H.source;
      } else
        throw new Error("Not a pattern: " + H);
    }
    function F(H, ne) {
      return H.length > ne ? H : Array(ne - H.length + 1).join(" ") + H;
    }
    function I(H, ne) {
      for (var he = H.length, ue = 0; ; ) {
        var ye = H.lastIndexOf(`
`, he - 1);
        if (ye === -1 || (ue++, he = ye, ue === ne) || he === 0)
          break;
      }
      var Se = ue < ne ? 0 : he + 1;
      return H.substring(Se).split(`
`);
    }
    function oe(H) {
      for (var ne = Object.getOwnPropertyNames(H), he = [], ue = 0; ue < ne.length; ue++) {
        var ye = ne[ue], Se = H[ye], Ee = [].concat(Se);
        if (ye === "include") {
          for (var K = 0; K < Ee.length; K++)
            he.push({ include: Ee[K] });
          continue;
        }
        var se = [];
        Ee.forEach(function(k) {
          x(k) ? (se.length && he.push(Z(ye, se)), he.push(Z(ye, k)), se = []) : se.push(k);
        }), se.length && he.push(Z(ye, se));
      }
      return he;
    }
    function X(H) {
      for (var ne = [], he = 0; he < H.length; he++) {
        var ue = H[he];
        if (ue.include) {
          for (var ye = [].concat(ue.include), Se = 0; Se < ye.length; Se++)
            ne.push({ include: ye[Se] });
          continue;
        }
        if (!ue.type)
          throw new Error("Rule has no type: " + JSON.stringify(ue));
        ne.push(Z(ue.type, ue));
      }
      return ne;
    }
    function Z(H, ne) {
      if (x(ne) || (ne = { match: ne }), ne.include)
        throw new Error("Matching rules cannot also include states");
      var he = {
        defaultType: H,
        lineBreaks: !!ne.error || !!ne.fallback,
        pop: !1,
        next: null,
        push: null,
        error: !1,
        fallback: !1,
        value: null,
        type: null,
        shouldThrow: !1
      };
      for (var ue in ne)
        c.call(ne, ue) && (he[ue] = ne[ue]);
      if (typeof he.type == "string" && H !== he.type)
        throw new Error("Type transform cannot be a string (type '" + he.type + "' for token '" + H + "')");
      var ye = he.match;
      return he.match = Array.isArray(ye) ? ye : ye ? [ye] : [], he.match.sort(function(Se, Ee) {
        return S(Se) && S(Ee) ? 0 : S(Ee) ? -1 : S(Se) ? 1 : Ee.length - Se.length;
      }), he;
    }
    function Re(H) {
      return Array.isArray(H) ? X(H) : oe(H);
    }
    var ct = Z("error", { lineBreaks: !0, shouldThrow: !0 });
    function vt(H, ne) {
      for (var he = null, ue = /* @__PURE__ */ Object.create(null), ye = !0, Se = null, Ee = [], K = [], se = 0; se < H.length; se++)
        H[se].fallback && (ye = !1);
      for (var se = 0; se < H.length; se++) {
        var k = H[se];
        if (k.include)
          throw new Error("Inheritance is not allowed in stateless lexers");
        if (k.error || k.fallback) {
          if (he)
            throw !k.fallback == !he.fallback ? new Error("Multiple " + (k.fallback ? "fallback" : "error") + " rules not allowed (for token '" + k.defaultType + "')") : new Error("fallback and error are mutually exclusive (for token '" + k.defaultType + "')");
          he = k;
        }
        var G = k.match.slice();
        if (ye)
          for (; G.length && typeof G[0] == "string" && G[0].length === 1; ) {
            var we = G.shift();
            ue[we.charCodeAt(0)] = k;
          }
        if (k.pop || k.push || k.next) {
          if (!ne)
            throw new Error("State-switching options are not allowed in stateless lexers (for token '" + k.defaultType + "')");
          if (k.fallback)
            throw new Error("State-switching options are not allowed on fallback tokens (for token '" + k.defaultType + "')");
        }
        if (G.length !== 0) {
          ye = !1, Ee.push(k);
          for (var Be = 0; Be < G.length; Be++) {
            var $e = G[Be];
            if (S($e)) {
              if (Se === null)
                Se = $e.unicode;
              else if (Se !== $e.unicode && k.fallback === !1)
                throw new Error("If one rule is /u then all must be");
            }
          }
          var ut = j(G.map(M)), Ke = new RegExp(ut);
          if (Ke.test(""))
            throw new Error("RegExp matches empty string: " + Ke);
          var ft = g(ut);
          if (ft > 0)
            throw new Error("RegExp has capture groups: " + Ke + `
Use (?: … ) instead`);
          if (!k.lineBreaks && Ke.test(`
`))
            throw new Error("Rule should declare lineBreaks: " + Ke);
          K.push(U(ut));
        }
      }
      var lt = he && he.fallback, bt = h && !lt ? "ym" : "gm", bn = h || lt ? "" : "|";
      Se === !0 && (bt += "u");
      var Wn = new RegExp(j(K) + bn, bt);
      return { regexp: Wn, groups: Ee, fast: ue, error: he || ct };
    }
    function Ve(H) {
      var ne = vt(Re(H));
      return new Ge({ start: ne }, "start");
    }
    function Ae(H, ne, he) {
      var ue = H && (H.push || H.next);
      if (ue && !he[ue])
        throw new Error("Missing state '" + ue + "' (in token '" + H.defaultType + "' of state '" + ne + "')");
      if (H && H.pop && +H.pop != 1)
        throw new Error("pop must be 1 (in token '" + H.defaultType + "' of state '" + ne + "')");
    }
    function yt(H, ne) {
      var he = H.$all ? Re(H.$all) : [];
      delete H.$all;
      var ue = Object.getOwnPropertyNames(H);
      ne || (ne = ue[0]);
      for (var ye = /* @__PURE__ */ Object.create(null), Se = 0; Se < ue.length; Se++) {
        var Ee = ue[Se];
        ye[Ee] = Re(H[Ee]).concat(he);
      }
      for (var Se = 0; Se < ue.length; Se++)
        for (var Ee = ue[Se], K = ye[Ee], se = /* @__PURE__ */ Object.create(null), k = 0; k < K.length; k++) {
          var G = K[k];
          if (G.include) {
            var we = [k, 1];
            if (G.include !== Ee && !se[G.include]) {
              se[G.include] = !0;
              var Be = ye[G.include];
              if (!Be)
                throw new Error("Cannot include nonexistent state '" + G.include + "' (in state '" + Ee + "')");
              for (var $e = 0; $e < Be.length; $e++) {
                var ut = Be[$e];
                K.indexOf(ut) === -1 && we.push(ut);
              }
            }
            K.splice.apply(K, we), k--;
          }
        }
      for (var Ke = /* @__PURE__ */ Object.create(null), Se = 0; Se < ue.length; Se++) {
        var Ee = ue[Se];
        Ke[Ee] = vt(ye[Ee], !0);
      }
      for (var Se = 0; Se < ue.length; Se++) {
        for (var ft = ue[Se], lt = Ke[ft], bt = lt.groups, k = 0; k < bt.length; k++)
          Ae(bt[k], ft, Ke);
        for (var bn = Object.getOwnPropertyNames(lt.fast), k = 0; k < bn.length; k++)
          Ae(lt.fast[bn[k]], ft, Ke);
      }
      return new Ge(Ke, ne);
    }
    function _e(H) {
      for (var ne = typeof Map < "u", he = ne ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null), ue = Object.getOwnPropertyNames(H), ye = 0; ye < ue.length; ye++) {
        var Se = ue[ye], Ee = H[Se], K = Array.isArray(Ee) ? Ee : [Ee];
        K.forEach(function(se) {
          if (typeof se != "string")
            throw new Error("keyword must be string (in keyword '" + Se + "')");
          ne ? he.set(se, Se) : he[se] = Se;
        });
      }
      return function(se) {
        return ne ? he.get(se) : he[se];
      };
    }
    var Ge = function(H, ne) {
      this.startState = ne, this.states = H, this.buffer = "", this.stack = [], this.reset();
    };
    Ge.prototype.reset = function(H, ne) {
      return this.buffer = H || "", this.index = 0, this.line = ne ? ne.line : 1, this.col = ne ? ne.col : 1, this.queuedToken = ne ? ne.queuedToken : null, this.queuedText = ne ? ne.queuedText : "", this.queuedThrow = ne ? ne.queuedThrow : null, this.setState(ne ? ne.state : this.startState), this.stack = ne && ne.stack ? ne.stack.slice() : [], this;
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
    }, Ge.prototype.setState = function(H) {
      if (!(!H || this.state === H)) {
        this.state = H;
        var ne = this.states[H];
        this.groups = ne.groups, this.error = ne.error, this.re = ne.regexp, this.fast = ne.fast;
      }
    }, Ge.prototype.popState = function() {
      this.setState(this.stack.pop());
    }, Ge.prototype.pushState = function(H) {
      this.stack.push(this.state), this.setState(H);
    };
    var nt = h ? function(H, ne) {
      return H.exec(ne);
    } : function(H, ne) {
      var he = H.exec(ne);
      return he[0].length === 0 ? null : he;
    };
    Ge.prototype._getGroup = function(H) {
      for (var ne = this.groups.length, he = 0; he < ne; he++)
        if (H[he + 1] !== void 0)
          return this.groups[he];
      throw new Error("Cannot find token type for matched text");
    };
    function hn() {
      return this.value;
    }
    if (Ge.prototype.next = function() {
      var H = this.index;
      if (this.queuedGroup) {
        var ne = this._token(this.queuedGroup, this.queuedText, H);
        return this.queuedGroup = null, this.queuedText = "", ne;
      }
      var he = this.buffer;
      if (H !== he.length) {
        var Ee = this.fast[he.charCodeAt(H)];
        if (Ee)
          return this._token(Ee, he.charAt(H), H);
        var ue = this.re;
        ue.lastIndex = H;
        var ye = nt(ue, he), Se = this.error;
        if (ye == null)
          return this._token(Se, he.slice(H, he.length), H);
        var Ee = this._getGroup(ye), K = ye[0];
        return Se.fallback && ye.index !== H ? (this.queuedGroup = Ee, this.queuedText = K, this._token(Se, he.slice(H, ye.index), H)) : this._token(Ee, K, H);
      }
    }, Ge.prototype._token = function(H, ne, he) {
      var ue = 0;
      if (H.lineBreaks) {
        var ye = /\n/g, Se = 1;
        if (ne === `
`)
          ue = 1;
        else
          for (; ye.exec(ne); )
            ue++, Se = ye.lastIndex;
      }
      var Ee = {
        type: typeof H.type == "function" && H.type(ne) || H.defaultType,
        value: typeof H.value == "function" ? H.value(ne) : ne,
        text: ne,
        toString: hn,
        offset: he,
        lineBreaks: ue,
        line: this.line,
        col: this.col
      }, K = ne.length;
      if (this.index += K, this.line += ue, ue !== 0 ? this.col = K - Se + 1 : this.col += K, H.shouldThrow) {
        var se = new Error(this.formatError(Ee, "invalid syntax"));
        throw se;
      }
      return H.pop ? this.popState() : H.push ? this.pushState(H.push) : H.next && this.setState(H.next), Ee;
    }, typeof Symbol < "u" && Symbol.iterator) {
      var Yt = function(H) {
        this.lexer = H;
      };
      Yt.prototype.next = function() {
        var H = this.lexer.next();
        return { value: H, done: !H };
      }, Yt.prototype[Symbol.iterator] = function() {
        return this;
      }, Ge.prototype[Symbol.iterator] = function() {
        return new Yt(this);
      };
    }
    return Ge.prototype.formatError = function(H, ne) {
      if (H == null)
        var he = this.buffer.slice(this.index), H = {
          text: he,
          offset: this.index,
          lineBreaks: he.indexOf(`
`) === -1 ? 0 : 1,
          line: this.line,
          col: this.col
        };
      var ue = 2, ye = Math.max(H.line - ue, 1), Se = H.line + ue, Ee = String(Se).length, K = I(
        this.buffer,
        this.line - H.line + ue + 1
      ).slice(0, 5), se = [];
      se.push(ne + " at line " + H.line + " col " + H.col + ":"), se.push("");
      for (var k = 0; k < K.length; k++) {
        var G = K[k], we = ye + k;
        se.push(F(String(we), Ee) + "  " + G), we === H.line && se.push(F("", Ee + H.col + 1) + "^");
      }
      return se.join(`
`);
    }, Ge.prototype.clone = function() {
      return new Ge(this.states, this.state);
    }, Ge.prototype.has = function(H) {
      return !0;
    }, {
      compile: Ve,
      states: yt,
      error: Object.freeze({ error: !0 }),
      fallback: Object.freeze({ fallback: !0 }),
      keywords: _e
    };
  });
})(Mb);
var YN = Mb.exports;
const pd = /* @__PURE__ */ bE(YN), Vx = pd.compile({
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
function WN(p, c = {}) {
  const f = p.trim().replace(/[\,]+$/, "");
  if (f === "")
    return "{}";
  if (!qN(f))
    throw new TypeError("Unexpected input format");
  let h = "";
  Vx.reset(f);
  for (const S of Vx)
    if (!(S.type === "WhiteSpace" || S.type === "Lines")) {
      switch (S.type) {
        case "Identifier":
          S.value = `"${c[S.value] || S.value}"`;
          break;
        case "ObjectKey":
          S.value.slice(0, 1) === "[" && S.value.slice(-1) === "]" ? S.value = `"${c[S.value.slice(1, -1)] || S.value.slice(1, -1)}"` : S.value = `"${S.value}"`;
          break;
      }
      h += S.value;
    }
  return h.replace(/\,([\}\]])/g, "$1");
}
function qN(p) {
  return p.startsWith("{") && p.endsWith("}") || p.startsWith("[") && p.endsWith("]");
}
const QN = /[ \t\v\f\ufeff]+/, GN = /(?:(?![\s\x00\x22\x27\x3E\x2F\x3D\x00-\x1F\x7F-\x9F])[^\s\x00-\x1F\x7F-\x9F\x22\x27\x3E\x2F\x3D])+/, KN = /[\.#](?:(?!-?\d)(?:[a-zA-Z0-9\xA0-\uFFFF_-])+)/, XN = new RegExp("(?<==)(?:true|false)"), ZN = new RegExp("(?<==)-?(?:(?:0[xX][\\da-fA-F](?:_?[\\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|-?0n|-?[1-9](?:_?\\d)*n|(?:(?:0(?!\\d)|0\\d*[89]\\d*|[1-9](?:_?\\d)*)(?:\\.(?:\\d(?:_?\\d)*)?)?|\\.\\d(?:_?\\d)*)(?:[eE][+-]?\\d(?:_?\\d)*)?|-?0[0-7]+)"), JN = new RegExp(`(?<==)'(?!.*&[0-9a-zA-Z]+;)[^'\\\\]*(?:\\\\.|\\\\n[^"\\\\]*|&[^0-9a-zA-Z;]*)*'`), eM = new RegExp('(?<==)"(?!.*&[0-9a-zA-Z]+;)[^"\\\\]*(?:\\\\.|\\\\n[^"\\\\]*|&[^0-9a-zA-Z;]*)*"'), tM = new RegExp("(?<==)[^\"\\s'`=<>\\x00]+");
function pE(p) {
  const c = typeof p == "string" && /^(['"]).*?\1$/.test(p) ? (
    // omit quotes
    p.slice(1, -1)
  ) : p;
  return c.startsWith("[") && c.endsWith("]") || c.startsWith("{") && c.endsWith("}") ? JSON.parse(WN(c)) : c;
}
function nM(p) {
  let c = "";
  for (const f in p) {
    const h = p[f];
    switch (typeof h) {
      case "object":
        c += ` ${f}='${JSON.stringify(h)}'`;
        break;
      case "string":
        c += ` ${f}="${h}"`;
        break;
      case "number":
      case "boolean":
        c += ` ${f}=${h}`;
        break;
    }
  }
  return c.slice(1);
}
const Ix = pd.states({
  main: {
    WhiteSpace: QN,
    AttributeShorthand: KN,
    BooleanLiteral: {
      match: XN,
      value(p) {
        return p === "true";
      }
    },
    NumericLiteral: {
      match: ZN,
      value(p) {
        const c = Number(p);
        return Number.isNaN(c) ? Number(p.replace(/_|n$/g, "")) : Number(p);
      }
    },
    SingleQuotedValue: {
      match: JN,
      value: pE,
      type: () => "StringLiteral"
    },
    DoubleQuotedLiteral: {
      match: eM,
      value: pE,
      type: () => "StringLiteral"
    },
    UnquotedLiteral: {
      match: tM,
      value: pE,
      type: () => "StringLiteral"
    },
    AttributeName: GN,
    Separator: "="
  }
});
function rM(p) {
  let c = null;
  const f = Ix.reset(p), h = {};
  Object.defineProperties(h, {
    toString: {
      writable: !1,
      enumerable: !1,
      configurable: !1,
      value: () => nM(h)
    },
    getTokens: {
      writable: !1,
      enumerable: !1,
      configurable: !1,
      value: () => Array.from(Ix.reset(p))
    }
  });
  const S = [];
  for (const { type: x, value: C } of f)
    switch (x) {
      case "AttributeName":
        c = C, h[c] = c;
        break;
      case "AttributeShorthand":
        const g = C[0];
        g === "." ? S.push(C.slice(1)) : g === "#" && (h.id = C.slice(1));
        break;
      case "BooleanLiteral":
      case "NumericLiteral":
      case "StringLiteral":
        c && (c === "class" && S.push(C), h[c] = C, c = null);
        break;
    }
  return S.length && (h.class = S.join(" ")), h;
}
const Yx = (p) => p.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function aM(p, ...c) {
  if (typeof p == "string")
    return Yx(p);
  let f = p[0];
  for (const [h, S] of c.entries())
    f = f + Yx(String(S)) + p[h + 1];
  return f;
}
class iM extends Error {
  constructor(c) {
    super(`Missing a value for ${c ? `the placeholder: ${c}` : "a placeholder"}`, c), this.name = "MissingValueError", this.key = c;
  }
}
function lM(p, c, { ignoreMissing: f = !1, transform: h = ({ value: S }) => S } = {}) {
  if (typeof p != "string")
    throw new TypeError(`Expected a \`string\` in the first argument, got \`${typeof p}\``);
  if (typeof c != "object")
    throw new TypeError(`Expected an \`object\` or \`Array\` in the second argument, got \`${typeof c}\``);
  const S = (U, j) => {
    let M = c;
    for (const I of j.split("."))
      M = M ? M[I] : void 0;
    const F = h({ value: M, key: j });
    if (F === void 0) {
      if (f)
        return U;
      throw new iM(j);
    }
    return String(F);
  }, x = (U) => (...j) => aM(U(...j)), C = /{{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}}/gi;
  C.test(p) && (p = p.replace(C, x(S)));
  const g = /{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}/gi;
  return p.replace(g, S);
}
const oM = `
<figure class='preview'>
  <figcaption>{title}</figcaption>
  <div class='preview-showcase'>
    {preview}
  </div>
  <div class='preview-code'>
    {code}
  </div>
</figure>
`, Wx = /[ \t]*preview(?:=([""])?.*?\1)?$|preview(?:=([""])?.*?\1)?[ \t]*/g;
function uM(p) {
  return pd.compile({
    placeholder: /\{code\}/,
    text: pd.fallback
  }).reset(p);
}
function sM(p) {
  const c = pd.compile({
    placeholder: {
      match: /{[ \t]*?(?:[a-zA-Z_][\w\d\.]*?|[\d][\w\d\.]+)[ \t]*?}/,
      value(h) {
        return h.replace(/[ \t]+/g, "");
      }
    },
    chunk: pd.fallback
  }).reset(p);
  let f = "";
  for (const h of c)
    f += h.value;
  return f;
}
function cM(p, c) {
  return {
    type: "html",
    block: !0,
    pre: !1,
    raw: p,
    text: c
  };
}
function fM(p, c) {
  var f, h, S;
  const {
    data: x,
    attrs: C,
    index: g,
    parent: U,
    template: j = oM,
    transformer: M = (Re) => Re
  } = c, F = uM(j), I = (f = p.raw) == null ? void 0 : f.split(`
`)[0].replace(Wx, "");
  p.raw = (h = p.raw) == null ? void 0 : h.split(`
`).splice(0, 1, I).join(`
`), p.lang = (S = p.lang) == null ? void 0 : S.replace(Wx, "");
  const oe = M(p.text, C, x), X = {
    ...x,
    ...C,
    preview: oe
  }, Z = [];
  for (const { type: Re, text: ct } of F)
    if (Re === "placeholder")
      Z.push(p);
    else if (Re === "text") {
      const vt = sM(ct), Ve = lM(vt, X, {
        ignoreMissing: !0
      });
      Z.push(cM(vt, Ve));
    }
  U.splice(g, 1, ...Z);
}
function dM(p = {}) {
  return {
    extensions: [
      {
        name: "fences",
        level: "block",
        tokenizer(c, f) {
          const h = {};
          this.lexer.options.hooks && this.lexer.options.hooks !== null && "data" in this.lexer.options.hooks && Object.assign(h, this.lexer.options.hooks.data), f.forEach((S, x) => {
            var C;
            if (S.type !== "code" || !S.lang)
              return;
            const g = (C = S.lang) == null ? void 0 : C.split(" "), { preview: U, ...j } = rM(S.lang);
            U && fM(S, {
              index: x,
              parent: f,
              data: h,
              attrs: { lang: g, ...j },
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
  window.matchMedia("(min-width: 1025px)").matches && document.getElementById(`message-text-${p}`).focus();
}
const pM = ({ html: p }) => {
  const c = er.useRef(null);
  return er.useEffect(() => {
    const f = (S) => {
      S.target.tagName === "A" && S.target.href && (S.preventDefault(), window.open(S.target.href, "_blank"));
    }, h = c.current;
    return h && h.addEventListener("click", f), () => {
      h && h.removeEventListener("click", f);
    };
  }, []), // Render the HTML content with dangerouslySetInnerHTML
  /* @__PURE__ */ tt.jsx("span", { ref: c, dangerouslySetInnerHTML: { __html: p } });
};
function hM({ iconColor: p }) {
  return /* @__PURE__ */ tt.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ tt.jsx("path", { d: "m60.875 276.5 99.766 53.922 174.7-143.03-161.79 206.74v77.512l72.832-96.914 115.88 63.434v0.003906c5.7188 3.1289 12.594 3.3203 18.477 0.51563 5.8828-2.8086 10.059-8.2734 11.219-14.688l69.797-384.68-400.35 201.14c-4.4648 2.2227-7.957 6.0117-9.8047 10.645-1.8477 4.6328-1.9219 9.7852-0.21094 14.469 1.7109 4.6875 5.0859 8.5781 9.4883 10.93z", fill: p }) });
}
function vM({ iconColor: p }) {
  return /* @__PURE__ */ tt.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ tt.jsx("path", { d: "m227.5 256-86.512 86.516c-7.8711 7.8594-7.8711 20.637 0 28.496 7.8594 7.8672 20.633 7.8672 28.492 0l86.516-86.516 86.516 86.516c7.8594 7.8672 20.637 7.8672 28.496 0 7.8672-7.8594 7.8672-20.637 0-28.496l-86.516-86.516 86.516-86.516c7.8672-7.8594 7.8672-20.633 0-28.492-7.8594-7.8711-20.637-7.8711-28.496 0l-86.516 86.512-86.516-86.512c-7.8594-7.8711-20.633-7.8711-28.492 0-7.8711 7.8594-7.8711 20.633 0 28.492z", fill: p, fillRule: "evenodd" }) });
}
const mM = ({ isFullscreen: p, color: c = "#000000" }) => p ? /* @__PURE__ */ tt.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ tt.jsx(
  "path",
  {
    d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }) : /* @__PURE__ */ tt.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ tt.jsx(
  "path",
  {
    d: "M3 8V3h5m13 5V3h-5m0 18h5v-5M3 16v5h5",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Qx = ({ toggleChat: p, widgetID: c, width: f, height: h, sticky: S }) => {
  const [x, C] = er.useState(twChatMessages[c]), [g, U] = er.useState(""), [j, M] = er.useState(!1), [F, I] = er.useState(0), [oe, X] = er.useState([]), [Z, Re] = er.useState(!1), ct = er.useRef(null), vt = er.useRef(null), Ve = er.useRef(null), Ae = window.twChatPluginSettings, yt = window.twChatWidgetSettings[c], _e = Ae.tw_chat_max_characters, Ge = window.twChatPluginSettings.iconColor, nt = Ae.tw_chat_send_button_image || null, Yt = getComputedStyle(document.documentElement).getPropertyValue("--tw-chat-header-button-color").trim(), H = () => {
    Re(!Z);
  };
  er.useEffect(() => {
    window.twChatMessages[c].length <= 1 && yt.tw_chat_suggested_answers && X(yt.tw_chat_suggested_answers.split(",")), S && qx(c);
  }, []), er.useEffect(() => {
    ct.current && vt.current && x.length > 1 && ct.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, [x]), er.useEffect(() => {
    j && Ve.current && Ve.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, [j]);
  const ne = (k, G) => {
    if (g.trim() === "" && G.trim() === "")
      return;
    k && k.preventDefault(), M(!0);
    const we = G || g;
    twChatMessages[c] = [...x, Sh(we, "user")], C(twChatMessages[c]);
    const Be = {
      widget_id: c,
      messages: twChatMessages[c]
    }, $e = {
      headers: {
        "X-WP-Nonce": Ae.nonce
      }
    };
    or.post(
      Ae.api_url,
      Be,
      $e
    ).then((ut) => {
      const Ke = ut.data.message;
      let ft;
      if (Ke.length > 0) {
        try {
          const bt = JSON.parse(Ke);
          ft = bt.message, bt.suggestedAnswers && X(bt.suggestedAnswers), window.twChatWidgetSettings[c].suggestedAnswers = bt.suggestedAnswers;
        } catch {
          ft = Ke;
        }
        const lt = ft.replace(/(?:\r\n|\r|\n)/g, "<br />").replace(/【.*?†source】/g, "");
        C([...twChatMessages[c], Sh(lt, "assistant")]), twChatMessages[c] = [...twChatMessages[c], Sh(lt, "assistant")];
      }
      U(""), I(0), M(!1), qx(c);
    }).catch((ut) => {
      console.error("Error fetching messages:", ut), C([...twChatMessages[c], Sh(Ae.tw_chat_error_message, "error")]), M(!1);
    });
  }, he = (k) => {
    k.key === "Enter" && !k.shiftKey && (k.preventDefault(), ne(k));
  }, ue = (k) => {
    const G = k.target.value;
    let we = G.length;
    _e && we > _e && (k.target.value = G.slice(0, _e), we = _e), U(k.target.value), I(we);
  }, ye = (k) => {
    X([]), ne(null, k);
  }, Se = () => x.map((k, G) => {
    const we = G === x.length - 1;
    return /* @__PURE__ */ tt.jsx(
      "div",
      {
        ref: we ? ct : null,
        id: `tw-chat-message-${c}-${G}`,
        className: `message ${k.role}`,
        children: /* @__PURE__ */ tt.jsx(pM, { html: en.use(dM).parse(k.content ? k.content : "Something went wrong.") })
      },
      G
    );
  }), Ee = () => oe.length > 0 ? /* @__PURE__ */ tt.jsxs("div", { className: "tw-chat-suggested-answers", children: [
    oe.map((k, G) => /* @__PURE__ */ tt.jsx("button", { onClick: () => ye(k), children: k }, G)),
    yt.tw_chat_dismiss_answers == "1" && /* @__PURE__ */ tt.jsx("button", { className: "tw-chat-suggested-answers--clear", onClick: () => X([]), children: yt.tw_chat_dismiss_answers_text ? yt.tw_chat_dismiss_answers_text : "Type a different response." })
  ] }) : /* @__PURE__ */ tt.jsxs(
    "form",
    {
      onSubmit: ne,
      className: j ? "tw-chat-form tw-chat-visibility-0" : "tw-chat-form",
      children: [
        /* @__PURE__ */ tt.jsxs("div", { className: "tw-chat-input-container", children: [
          /* @__PURE__ */ tt.jsx("label", { htmlFor: `message-text-${c}`, children: "Send Message" }),
          /* @__PURE__ */ tt.jsx(
            "textarea",
            {
              placeholder: "Enter your message...",
              id: `message-text-${c}`,
              onChange: ue,
              onKeyPress: he,
              value: g,
              name: "message",
              required: "required",
              rows: "1"
            }
          ),
          _e && /* @__PURE__ */ tt.jsx("div", { className: "tw-chat-char-count", children: /* @__PURE__ */ tt.jsxs("span", { className: F == _e ? "tw-chat-max-characters" : "", children: [
            F,
            " / ",
            _e,
            " characters"
          ] }) })
        ] }),
        /* @__PURE__ */ tt.jsxs("button", { children: [
          nt ? /* @__PURE__ */ tt.jsx("img", { src: nt, alt: "Send Message", className: "tw-chat-send-button-image" }) : /* @__PURE__ */ tt.jsx(hM, { iconColor: Ge }),
          /* @__PURE__ */ tt.jsx("span", { className: "sr-only", children: "Send Message" })
        ] })
      ]
    }
  ), K = sN(
    "tw-chat-interface",
    { sticky: S },
    { embedded: !S },
    { "tw-chat-widget-fullscreen": Z }
  );
  let se = {};
  return f && (se.width = f), h && (se.height = h), /* @__PURE__ */ tt.jsxs("div", { className: K, style: se, children: [
    /* @__PURE__ */ tt.jsxs("div", { className: "tw-chat-header", children: [
      Ae.tw_chat_logo_url && /* @__PURE__ */ tt.jsx("img", { className: "logo", src: Ae.tw_chat_logo_url, alt: "Chat widget logo" }),
      /* @__PURE__ */ tt.jsx("span", { children: window.twChatWidgetSettings[c].tw_chat_widget_name }),
      /* @__PURE__ */ tt.jsx("div", { className: "tw-chat-header-actions", children: S == 1 && /* @__PURE__ */ tt.jsxs(tt.Fragment, { children: [
        /* @__PURE__ */ tt.jsx(
          "button",
          {
            onClick: H,
            className: "tw-chat-header-fullscreen",
            "aria-label": Z ? "Exit fullscreen" : "Enter fullscreen",
            children: /* @__PURE__ */ tt.jsx(mM, { isFullscreen: Z, color: Yt })
          }
        ),
        /* @__PURE__ */ tt.jsx(
          "button",
          {
            className: "tw-chat-header-close",
            onClick: () => p(),
            "aria-label": "Close chat interface",
            children: /* @__PURE__ */ tt.jsx(vM, { iconColor: Yt })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ tt.jsxs("div", { ref: vt, className: "tw-chat-messages", id: `tw-chat-messages-${c}`, children: [
      Se(),
      j && /* @__PURE__ */ tt.jsx("div", { ref: Ve, className: "waiting-indicator", children: /* @__PURE__ */ tt.jsx(oN, { color: "#333" }) })
    ] }),
    /* @__PURE__ */ tt.jsxs("div", { className: "tw-chat-form-container", children: [
      Ee(),
      /* @__PURE__ */ tt.jsx("div", { className: "tw-chat-disclaimer-container", children: Ae.tw_chat_disclaimer && /* @__PURE__ */ tt.jsx("div", { dangerouslySetInnerHTML: { __html: Ae.tw_chat_disclaimer } }) })
    ] })
  ] });
};
function yM({ iconColor: p }) {
  return /* @__PURE__ */ tt.jsx("svg", { role: "img", className: "tw-chat-icon", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ tt.jsx("path", { d: "m512 179.3c0 55.102-26.008 104.11-66.41 135.45-28.969 22.477-151 107.22-190.54 107.22l8.6211-71.371h-92.371c-94.645 0-171.3-76.695-171.3-171.3v-7.9961c0-94.625 76.656-171.3 171.3-171.3h169.41c94.594 0 171.29 76.676 171.29 171.3zm-384.48-28.574c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.609 0 28.266-12.691 28.266-28.297 0.007813-15.621-12.648-28.277-28.266-28.277zm128.48 0c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.617 0 28.277-12.691 28.277-28.297-0.011719-15.621-12.66-28.277-28.277-28.277zm128.48 0c-15.641 0-28.266 12.656-28.266 28.277 0 15.605 12.633 28.297 28.266 28.297 15.617 0 28.266-12.691 28.266-28.297-0.003907-15.621-12.648-28.277-28.266-28.277z", fill: p }) });
}
const gM = getComputedStyle(document.documentElement);
window.twChatPluginSettings.iconColor = gM.getPropertyValue("--tw-chat-icon-color").trim();
function SM({ widgetID: p, sticky: c, width: f, height: h }) {
  const [S, x] = er.useState(!1), C = window.twChatPluginSettings.tw_chat_button_text || "Chat", g = window.twChatPluginSettings.tw_chat_button_image || null, U = window.twChatPluginSettings.iconColor, j = () => {
    x(!S);
  }, M = () => /* @__PURE__ */ tt.jsxs("div", { className: "tw-chat-container", children: [
    /* @__PURE__ */ tt.jsx("div", { className: S ? "" : "tw-chat-visibility-0", children: /* @__PURE__ */ tt.jsx(Qx, { widgetID: p, toggleChat: j, sticky: c }) }),
    /* @__PURE__ */ tt.jsxs("button", { className: "tw-chat-bubble", onClick: j, "aria-label": "Open chat interface", children: [
      g ? /* @__PURE__ */ tt.jsx("img", { src: g, alt: "Chat", className: "tw-chat-button-image" }) : /* @__PURE__ */ tt.jsx(yM, { iconColor: U }),
      C
    ] })
  ] });
  return /* @__PURE__ */ tt.jsx(tt.Fragment, { children: c == "1" ? /* @__PURE__ */ tt.jsx(M, {}) : /* @__PURE__ */ tt.jsx(Qx, { widgetID: p, iconColor: U, toggleChat: j, width: f, height: h, sticky: c }) });
}
window.twChatMessages = window.twChatMessages || {};
window.twChatWidgetSettings = window.twChatWidgetSettings || {};
window.addEventListener("load", function() {
  document.querySelectorAll(".tw-chat-widget-container").forEach((c) => {
    gh.createRoot(c).render(
      /* @__PURE__ */ tt.jsx(kD.StrictMode, { children: /* @__PURE__ */ tt.jsx(
        SM,
        {
          widgetID: c.dataset.widgetId,
          height: c.dataset.height,
          width: c.dataset.width,
          sticky: c.dataset.sticky
        }
      ) })
    );
    const h = window.twChatWidgetSettings[c.dataset.widgetId], S = Sh(h.tw_chat_greeting, "assistant");
    window.twChatMessages[c.dataset.widgetId] = [S];
  });
});
