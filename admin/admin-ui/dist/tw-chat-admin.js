var yA = Object.defineProperty;
var gA = (s, u, f) => u in s ? yA(s, u, { enumerable: !0, configurable: !0, writable: !0, value: f }) : s[u] = f;
var An = (s, u, f) => (gA(s, typeof u != "symbol" ? u + "" : u, f), f), SA = (s, u, f) => {
  if (!u.has(s))
    throw TypeError("Cannot " + f);
};
var GE = (s, u, f) => {
  if (u.has(s))
    throw TypeError("Cannot add the same private member more than once");
  u instanceof WeakSet ? u.add(s) : u.set(s, f);
};
var Wy = (s, u, f) => (SA(s, u, "access private method"), f);
function x1(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function EA(s) {
  if (s.__esModule)
    return s;
  var u = s.default;
  if (typeof u == "function") {
    var f = function p() {
      return this instanceof p ? Reflect.construct(u, arguments, this.constructor) : u.apply(this, arguments);
    };
    f.prototype = u.prototype;
  } else
    f = {};
  return Object.defineProperty(f, "__esModule", { value: !0 }), Object.keys(s).forEach(function(p) {
    var g = Object.getOwnPropertyDescriptor(s, p);
    Object.defineProperty(f, p, g.get ? g : {
      enumerable: !0,
      get: function() {
        return s[p];
      }
    });
  }), f;
}
var db = { exports: {} }, Uh = {}, pb = { exports: {} }, Pt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nx;
function bA() {
  if (Nx)
    return Pt;
  Nx = 1;
  var s = Symbol.for("react.element"), u = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), E = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), D = Symbol.iterator;
  function M(L) {
    return L === null || typeof L != "object" ? null : (L = D && L[D] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var I = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, B = Object.assign, X = {};
  function fe(L, j, ee) {
    this.props = L, this.context = j, this.refs = X, this.updater = ee || I;
  }
  fe.prototype.isReactComponent = {}, fe.prototype.setState = function(L, j) {
    if (typeof L != "object" && typeof L != "function" && L != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, j, "setState");
  }, fe.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function Le() {
  }
  Le.prototype = fe.prototype;
  function Ke(L, j, ee) {
    this.props = L, this.context = j, this.refs = X, this.updater = ee || I;
  }
  var ze = Ke.prototype = new Le();
  ze.constructor = Ke, B(ze, fe.prototype), ze.isPureReactComponent = !0;
  var Be = Array.isArray, ue = Object.prototype.hasOwnProperty, Ue = { current: null }, gt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(L, j, ee) {
    var be, Se = {}, ke = null, He = null;
    if (j != null)
      for (be in j.ref !== void 0 && (He = j.ref), j.key !== void 0 && (ke = "" + j.key), j)
        ue.call(j, be) && !gt.hasOwnProperty(be) && (Se[be] = j[be]);
    var Pe = arguments.length - 2;
    if (Pe === 1)
      Se.children = ee;
    else if (1 < Pe) {
      for (var Ae = Array(Pe), ot = 0; ot < Pe; ot++)
        Ae[ot] = arguments[ot + 2];
      Se.children = Ae;
    }
    if (L && L.defaultProps)
      for (be in Pe = L.defaultProps, Pe)
        Se[be] === void 0 && (Se[be] = Pe[be]);
    return { $$typeof: s, type: L, key: ke, ref: He, props: Se, _owner: Ue.current };
  }
  function xe(L, j) {
    return { $$typeof: s, type: L.type, key: j, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function De(L) {
    return typeof L == "object" && L !== null && L.$$typeof === s;
  }
  function Te(L) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(ee) {
      return j[ee];
    });
  }
  var we = /\/+/g;
  function Ne(L, j) {
    return typeof L == "object" && L !== null && L.key != null ? Te("" + L.key) : j.toString(36);
  }
  function le(L, j, ee, be, Se) {
    var ke = typeof L;
    (ke === "undefined" || ke === "boolean") && (L = null);
    var He = !1;
    if (L === null)
      He = !0;
    else
      switch (ke) {
        case "string":
        case "number":
          He = !0;
          break;
        case "object":
          switch (L.$$typeof) {
            case s:
            case u:
              He = !0;
          }
      }
    if (He)
      return He = L, Se = Se(He), L = be === "" ? "." + Ne(He, 0) : be, Be(Se) ? (ee = "", L != null && (ee = L.replace(we, "$&/") + "/"), le(Se, j, ee, "", function(ot) {
        return ot;
      })) : Se != null && (De(Se) && (Se = xe(Se, ee + (!Se.key || He && He.key === Se.key ? "" : ("" + Se.key).replace(we, "$&/") + "/") + L)), j.push(Se)), 1;
    if (He = 0, be = be === "" ? "." : be + ":", Be(L))
      for (var Pe = 0; Pe < L.length; Pe++) {
        ke = L[Pe];
        var Ae = be + Ne(ke, Pe);
        He += le(ke, j, ee, Ae, Se);
      }
    else if (Ae = M(L), typeof Ae == "function")
      for (L = Ae.call(L), Pe = 0; !(ke = L.next()).done; )
        ke = ke.value, Ae = be + Ne(ke, Pe++), He += le(ke, j, ee, Ae, Se);
    else if (ke === "object")
      throw j = String(L), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return He;
  }
  function re(L, j, ee) {
    if (L == null)
      return L;
    var be = [], Se = 0;
    return le(L, be, "", "", function(ke) {
      return j.call(ee, ke, Se++);
    }), be;
  }
  function ve(L) {
    if (L._status === -1) {
      var j = L._result;
      j = j(), j.then(function(ee) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = ee);
      }, function(ee) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = ee);
      }), L._status === -1 && (L._status = 0, L._result = j);
    }
    if (L._status === 1)
      return L._result.default;
    throw L._result;
  }
  var pe = { current: null }, O = { transition: null }, ae = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: O, ReactCurrentOwner: Ue };
  return Pt.Children = { map: re, forEach: function(L, j, ee) {
    re(L, function() {
      j.apply(this, arguments);
    }, ee);
  }, count: function(L) {
    var j = 0;
    return re(L, function() {
      j++;
    }), j;
  }, toArray: function(L) {
    return re(L, function(j) {
      return j;
    }) || [];
  }, only: function(L) {
    if (!De(L))
      throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, Pt.Component = fe, Pt.Fragment = f, Pt.Profiler = g, Pt.PureComponent = Ke, Pt.StrictMode = p, Pt.Suspense = T, Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, Pt.cloneElement = function(L, j, ee) {
    if (L == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var be = B({}, L.props), Se = L.key, ke = L.ref, He = L._owner;
    if (j != null) {
      if (j.ref !== void 0 && (ke = j.ref, He = Ue.current), j.key !== void 0 && (Se = "" + j.key), L.type && L.type.defaultProps)
        var Pe = L.type.defaultProps;
      for (Ae in j)
        ue.call(j, Ae) && !gt.hasOwnProperty(Ae) && (be[Ae] = j[Ae] === void 0 && Pe !== void 0 ? Pe[Ae] : j[Ae]);
    }
    var Ae = arguments.length - 2;
    if (Ae === 1)
      be.children = ee;
    else if (1 < Ae) {
      Pe = Array(Ae);
      for (var ot = 0; ot < Ae; ot++)
        Pe[ot] = arguments[ot + 2];
      be.children = Pe;
    }
    return { $$typeof: s, type: L.type, key: Se, ref: ke, props: be, _owner: He };
  }, Pt.createContext = function(L) {
    return L = { $$typeof: E, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: b, _context: L }, L.Consumer = L;
  }, Pt.createElement = Z, Pt.createFactory = function(L) {
    var j = Z.bind(null, L);
    return j.type = L, j;
  }, Pt.createRef = function() {
    return { current: null };
  }, Pt.forwardRef = function(L) {
    return { $$typeof: y, render: L };
  }, Pt.isValidElement = De, Pt.lazy = function(L) {
    return { $$typeof: k, _payload: { _status: -1, _result: L }, _init: ve };
  }, Pt.memo = function(L, j) {
    return { $$typeof: A, type: L, compare: j === void 0 ? null : j };
  }, Pt.startTransition = function(L) {
    var j = O.transition;
    O.transition = {};
    try {
      L();
    } finally {
      O.transition = j;
    }
  }, Pt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Pt.useCallback = function(L, j) {
    return pe.current.useCallback(L, j);
  }, Pt.useContext = function(L) {
    return pe.current.useContext(L);
  }, Pt.useDebugValue = function() {
  }, Pt.useDeferredValue = function(L) {
    return pe.current.useDeferredValue(L);
  }, Pt.useEffect = function(L, j) {
    return pe.current.useEffect(L, j);
  }, Pt.useId = function() {
    return pe.current.useId();
  }, Pt.useImperativeHandle = function(L, j, ee) {
    return pe.current.useImperativeHandle(L, j, ee);
  }, Pt.useInsertionEffect = function(L, j) {
    return pe.current.useInsertionEffect(L, j);
  }, Pt.useLayoutEffect = function(L, j) {
    return pe.current.useLayoutEffect(L, j);
  }, Pt.useMemo = function(L, j) {
    return pe.current.useMemo(L, j);
  }, Pt.useReducer = function(L, j, ee) {
    return pe.current.useReducer(L, j, ee);
  }, Pt.useRef = function(L) {
    return pe.current.useRef(L);
  }, Pt.useState = function(L) {
    return pe.current.useState(L);
  }, Pt.useSyncExternalStore = function(L, j, ee) {
    return pe.current.useSyncExternalStore(L, j, ee);
  }, Pt.useTransition = function() {
    return pe.current.useTransition();
  }, Pt.version = "18.2.0", Pt;
}
var Bh = { exports: {} };
Bh.exports;
var Ax;
function wA() {
  return Ax || (Ax = 1, function(s, u) {
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
      var p = "18.2.0", g = Symbol.for("react.element"), b = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), k = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), Le = Symbol.iterator, Ke = "@@iterator";
      function ze(C) {
        if (C === null || typeof C != "object")
          return null;
        var z = Le && C[Le] || C[Ke];
        return typeof z == "function" ? z : null;
      }
      var Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, Ue = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, gt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Z = {}, xe = null;
      function De(C) {
        xe = C;
      }
      Z.setExtraStackFrame = function(C) {
        xe = C;
      }, Z.getCurrentStack = null, Z.getStackAddendum = function() {
        var C = "";
        xe && (C += xe);
        var z = Z.getCurrentStack;
        return z && (C += z() || ""), C;
      };
      var Te = !1, we = !1, Ne = !1, le = !1, re = !1, ve = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: gt
      };
      ve.ReactDebugCurrentFrame = Z, ve.ReactCurrentActQueue = Ue;
      function pe(C) {
        {
          for (var z = arguments.length, G = new Array(z > 1 ? z - 1 : 0), ne = 1; ne < z; ne++)
            G[ne - 1] = arguments[ne];
          ae("warn", C, G);
        }
      }
      function O(C) {
        {
          for (var z = arguments.length, G = new Array(z > 1 ? z - 1 : 0), ne = 1; ne < z; ne++)
            G[ne - 1] = arguments[ne];
          ae("error", C, G);
        }
      }
      function ae(C, z, G) {
        {
          var ne = ve.ReactDebugCurrentFrame, Ce = ne.getStackAddendum();
          Ce !== "" && (z += "%s", G = G.concat([Ce]));
          var et = G.map(function(Ye) {
            return String(Ye);
          });
          et.unshift("Warning: " + z), Function.prototype.apply.call(console[C], console, et);
        }
      }
      var L = {};
      function j(C, z) {
        {
          var G = C.constructor, ne = G && (G.displayName || G.name) || "ReactClass", Ce = ne + "." + z;
          if (L[Ce])
            return;
          O("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", z, ne), L[Ce] = !0;
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
        enqueueForceUpdate: function(C, z, G) {
          j(C, "forceUpdate");
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
        enqueueReplaceState: function(C, z, G, ne) {
          j(C, "replaceState");
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
        enqueueSetState: function(C, z, G, ne) {
          j(C, "setState");
        }
      }, be = Object.assign, Se = {};
      Object.freeze(Se);
      function ke(C, z, G) {
        this.props = C, this.context = z, this.refs = Se, this.updater = G || ee;
      }
      ke.prototype.isReactComponent = {}, ke.prototype.setState = function(C, z) {
        if (typeof C != "object" && typeof C != "function" && C != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, z, "setState");
      }, ke.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate");
      };
      {
        var He = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Pe = function(C, z) {
          Object.defineProperty(ke.prototype, C, {
            get: function() {
              pe("%s(...) is deprecated in plain JavaScript React classes. %s", z[0], z[1]);
            }
          });
        };
        for (var Ae in He)
          He.hasOwnProperty(Ae) && Pe(Ae, He[Ae]);
      }
      function ot() {
      }
      ot.prototype = ke.prototype;
      function St(C, z, G) {
        this.props = C, this.context = z, this.refs = Se, this.updater = G || ee;
      }
      var vt = St.prototype = new ot();
      vt.constructor = St, be(vt, ke.prototype), vt.isPureReactComponent = !0;
      function Zt() {
        var C = {
          current: null
        };
        return Object.seal(C), C;
      }
      var Re = Array.isArray;
      function $t(C) {
        return Re(C);
      }
      function Mn(C) {
        {
          var z = typeof Symbol == "function" && Symbol.toStringTag, G = z && C[Symbol.toStringTag] || C.constructor.name || "Object";
          return G;
        }
      }
      function Ln(C) {
        try {
          return Kn(C), !1;
        } catch {
          return !0;
        }
      }
      function Kn(C) {
        return "" + C;
      }
      function Xn(C) {
        if (Ln(C))
          return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(C)), Kn(C);
      }
      function Ur(C, z, G) {
        var ne = C.displayName;
        if (ne)
          return ne;
        var Ce = z.displayName || z.name || "";
        return Ce !== "" ? G + "(" + Ce + ")" : G;
      }
      function kr(C) {
        return C.displayName || "Context";
      }
      function nr(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case E:
            return "Fragment";
          case b:
            return "Portal";
          case T:
            return "Profiler";
          case y:
            return "StrictMode";
          case M:
            return "Suspense";
          case I:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case k:
              var z = C;
              return kr(z) + ".Consumer";
            case A:
              var G = C;
              return kr(G._context) + ".Provider";
            case D:
              return Ur(C, C.render, "ForwardRef");
            case B:
              var ne = C.displayName || null;
              return ne !== null ? ne : nr(C.type) || "Memo";
            case X: {
              var Ce = C, et = Ce._payload, Ye = Ce._init;
              try {
                return nr(Ye(et));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Sa = Object.prototype.hasOwnProperty, Ea = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Or, ba, hr;
      hr = {};
      function jr(C) {
        if (Sa.call(C, "ref")) {
          var z = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (z && z.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function _n(C) {
        if (Sa.call(C, "key")) {
          var z = Object.getOwnPropertyDescriptor(C, "key").get;
          if (z && z.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function wa(C, z) {
        var G = function() {
          Or || (Or = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        G.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: G,
          configurable: !0
        });
      }
      function Ca(C, z) {
        var G = function() {
          ba || (ba = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        G.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: G,
          configurable: !0
        });
      }
      function _a(C) {
        if (typeof C.ref == "string" && gt.current && C.__self && gt.current.stateNode !== C.__self) {
          var z = nr(gt.current.type);
          hr[z] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z, C.ref), hr[z] = !0);
        }
      }
      var Fe = function(C, z, G, ne, Ce, et, Ye) {
        var mt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: g,
          // Built-in properties that belong on the element
          type: C,
          key: z,
          ref: G,
          props: Ye,
          // Record the component responsible for creating this element.
          _owner: et
        };
        return mt._store = {}, Object.defineProperty(mt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(mt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ne
        }), Object.defineProperty(mt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ce
        }), Object.freeze && (Object.freeze(mt.props), Object.freeze(mt)), mt;
      };
      function lt(C, z, G) {
        var ne, Ce = {}, et = null, Ye = null, mt = null, Dt = null;
        if (z != null) {
          jr(z) && (Ye = z.ref, _a(z)), _n(z) && (Xn(z.key), et = "" + z.key), mt = z.__self === void 0 ? null : z.__self, Dt = z.__source === void 0 ? null : z.__source;
          for (ne in z)
            Sa.call(z, ne) && !Ea.hasOwnProperty(ne) && (Ce[ne] = z[ne]);
        }
        var Xt = arguments.length - 2;
        if (Xt === 1)
          Ce.children = G;
        else if (Xt > 1) {
          for (var tn = Array(Xt), nn = 0; nn < Xt; nn++)
            tn[nn] = arguments[nn + 2];
          Object.freeze && Object.freeze(tn), Ce.children = tn;
        }
        if (C && C.defaultProps) {
          var rn = C.defaultProps;
          for (ne in rn)
            Ce[ne] === void 0 && (Ce[ne] = rn[ne]);
        }
        if (et || Ye) {
          var En = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          et && wa(Ce, En), Ye && Ca(Ce, En);
        }
        return Fe(C, et, Ye, mt, Dt, gt.current, Ce);
      }
      function kt(C, z) {
        var G = Fe(C.type, z, C.ref, C._self, C._source, C._owner, C.props);
        return G;
      }
      function Gt(C, z, G) {
        if (C == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
        var ne, Ce = be({}, C.props), et = C.key, Ye = C.ref, mt = C._self, Dt = C._source, Xt = C._owner;
        if (z != null) {
          jr(z) && (Ye = z.ref, Xt = gt.current), _n(z) && (Xn(z.key), et = "" + z.key);
          var tn;
          C.type && C.type.defaultProps && (tn = C.type.defaultProps);
          for (ne in z)
            Sa.call(z, ne) && !Ea.hasOwnProperty(ne) && (z[ne] === void 0 && tn !== void 0 ? Ce[ne] = tn[ne] : Ce[ne] = z[ne]);
        }
        var nn = arguments.length - 2;
        if (nn === 1)
          Ce.children = G;
        else if (nn > 1) {
          for (var rn = Array(nn), En = 0; En < nn; En++)
            rn[En] = arguments[En + 2];
          Ce.children = rn;
        }
        return Fe(C.type, et, Ye, mt, Dt, Xt, Ce);
      }
      function Vt(C) {
        return typeof C == "object" && C !== null && C.$$typeof === g;
      }
      var $n = ".", Tn = ":";
      function Dr(C) {
        var z = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, ne = C.replace(z, function(Ce) {
          return G[Ce];
        });
        return "$" + ne;
      }
      var en = !1, ur = /\/+/g;
      function Kt(C) {
        return C.replace(ur, "$&/");
      }
      function dn(C, z) {
        return typeof C == "object" && C !== null && C.key != null ? (Xn(C.key), Dr("" + C.key)) : z.toString(36);
      }
      function ui(C, z, G, ne, Ce) {
        var et = typeof C;
        (et === "undefined" || et === "boolean") && (C = null);
        var Ye = !1;
        if (C === null)
          Ye = !0;
        else
          switch (et) {
            case "string":
            case "number":
              Ye = !0;
              break;
            case "object":
              switch (C.$$typeof) {
                case g:
                case b:
                  Ye = !0;
              }
          }
        if (Ye) {
          var mt = C, Dt = Ce(mt), Xt = ne === "" ? $n + dn(mt, 0) : ne;
          if ($t(Dt)) {
            var tn = "";
            Xt != null && (tn = Kt(Xt) + "/"), ui(Dt, z, tn, "", function(Fd) {
              return Fd;
            });
          } else
            Dt != null && (Vt(Dt) && (Dt.key && (!mt || mt.key !== Dt.key) && Xn(Dt.key), Dt = kt(
              Dt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Dt.key && (!mt || mt.key !== Dt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Kt("" + Dt.key) + "/"
              ) : "") + Xt
            )), z.push(Dt));
          return 1;
        }
        var nn, rn, En = 0, Ht = ne === "" ? $n : ne + Tn;
        if ($t(C))
          for (var $o = 0; $o < C.length; $o++)
            nn = C[$o], rn = Ht + dn(nn, $o), En += ui(nn, z, G, rn, Ce);
        else {
          var wu = ze(C);
          if (typeof wu == "function") {
            var Ls = C;
            wu === Ls.entries && (en || pe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), en = !0);
            for (var zs = wu.call(Ls), to, Us = 0; !(to = zs.next()).done; )
              nn = to.value, rn = Ht + dn(nn, Us++), En += ui(nn, z, G, rn, Ce);
          } else if (et === "object") {
            var js = String(C);
            throw new Error("Objects are not valid as a React child (found: " + (js === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : js) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return En;
      }
      function Pa(C, z, G) {
        if (C == null)
          return C;
        var ne = [], Ce = 0;
        return ui(C, ne, "", "", function(et) {
          return z.call(G, et, Ce++);
        }), ne;
      }
      function Mo(C) {
        var z = 0;
        return Pa(C, function() {
          z++;
        }), z;
      }
      function bl(C, z, G) {
        Pa(C, function() {
          z.apply(this, arguments);
        }, G);
      }
      function wl(C) {
        return Pa(C, function(z) {
          return z;
        }) || [];
      }
      function Lo(C) {
        if (!Vt(C))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return C;
      }
      function si(C) {
        var z = {
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
        z.Provider = {
          $$typeof: A,
          _context: z
        };
        var G = !1, ne = !1, Ce = !1;
        {
          var et = {
            $$typeof: k,
            _context: z
          };
          Object.defineProperties(et, {
            Provider: {
              get: function() {
                return ne || (ne = !0, O("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), z.Provider;
              },
              set: function(Ye) {
                z.Provider = Ye;
              }
            },
            _currentValue: {
              get: function() {
                return z._currentValue;
              },
              set: function(Ye) {
                z._currentValue = Ye;
              }
            },
            _currentValue2: {
              get: function() {
                return z._currentValue2;
              },
              set: function(Ye) {
                z._currentValue2 = Ye;
              }
            },
            _threadCount: {
              get: function() {
                return z._threadCount;
              },
              set: function(Ye) {
                z._threadCount = Ye;
              }
            },
            Consumer: {
              get: function() {
                return G || (G = !0, O("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), z.Consumer;
              }
            },
            displayName: {
              get: function() {
                return z.displayName;
              },
              set: function(Ye) {
                Ce || (pe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ye), Ce = !0);
              }
            }
          }), z.Consumer = et;
        }
        return z._currentRenderer = null, z._currentRenderer2 = null, z;
      }
      var ci = -1, Fa = 0, Qi = 1, Kr = 2;
      function Xr(C) {
        if (C._status === ci) {
          var z = C._result, G = z();
          if (G.then(function(et) {
            if (C._status === Fa || C._status === ci) {
              var Ye = C;
              Ye._status = Qi, Ye._result = et;
            }
          }, function(et) {
            if (C._status === Fa || C._status === ci) {
              var Ye = C;
              Ye._status = Kr, Ye._result = et;
            }
          }), C._status === ci) {
            var ne = C;
            ne._status = Fa, ne._result = G;
          }
        }
        if (C._status === Qi) {
          var Ce = C._result;
          return Ce === void 0 && O(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ce), "default" in Ce || O(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ce), Ce.default;
        } else
          throw C._result;
      }
      function xa(C) {
        var z = {
          // We use these fields to store the result.
          _status: ci,
          _result: C
        }, G = {
          $$typeof: X,
          _payload: z,
          _init: Xr
        };
        {
          var ne, Ce;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ne;
              },
              set: function(et) {
                O("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ne = et, Object.defineProperty(G, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ce;
              },
              set: function(et) {
                O("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ce = et, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function Gi(C) {
        C != null && C.$$typeof === B ? O("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof C != "function" ? O("forwardRef requires a render function but was given %s.", C === null ? "null" : typeof C) : C.length !== 0 && C.length !== 2 && O("forwardRef render functions accept exactly two parameters: props and ref. %s", C.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), C != null && (C.defaultProps != null || C.propTypes != null) && O("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var z = {
          $$typeof: D,
          render: C
        };
        {
          var G;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(ne) {
              G = ne, !C.name && !C.displayName && (C.displayName = ne);
            }
          });
        }
        return z;
      }
      var U;
      U = Symbol.for("react.module.reference");
      function me(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === E || C === T || re || C === y || C === M || C === I || le || C === fe || Te || we || Ne || typeof C == "object" && C !== null && (C.$$typeof === X || C.$$typeof === B || C.$$typeof === A || C.$$typeof === k || C.$$typeof === D || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        C.$$typeof === U || C.getModuleId !== void 0));
      }
      function Me(C, z) {
        me(C) || O("memo: The first argument must be a component. Instead received: %s", C === null ? "null" : typeof C);
        var G = {
          $$typeof: B,
          type: C,
          compare: z === void 0 ? null : z
        };
        {
          var ne;
          Object.defineProperty(G, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ne;
            },
            set: function(Ce) {
              ne = Ce, !C.name && !C.displayName && (C.displayName = Ce);
            }
          });
        }
        return G;
      }
      function $e() {
        var C = Be.current;
        return C === null && O(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), C;
      }
      function Nt(C) {
        var z = $e();
        if (C._context !== void 0) {
          var G = C._context;
          G.Consumer === C ? O("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === C && O("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return z.useContext(C);
      }
      function zt(C) {
        var z = $e();
        return z.useState(C);
      }
      function Tt(C, z, G) {
        var ne = $e();
        return ne.useReducer(C, z, G);
      }
      function ut(C) {
        var z = $e();
        return z.useRef(C);
      }
      function Jn(C, z) {
        var G = $e();
        return G.useEffect(C, z);
      }
      function pn(C, z) {
        var G = $e();
        return G.useInsertionEffect(C, z);
      }
      function hn(C, z) {
        var G = $e();
        return G.useLayoutEffect(C, z);
      }
      function Nr(C, z) {
        var G = $e();
        return G.useCallback(C, z);
      }
      function _i(C, z) {
        var G = $e();
        return G.useMemo(C, z);
      }
      function vn(C, z, G) {
        var ne = $e();
        return ne.useImperativeHandle(C, z, G);
      }
      function Jr(C, z) {
        {
          var G = $e();
          return G.useDebugValue(C, z);
        }
      }
      function Cs() {
        var C = $e();
        return C.useTransition();
      }
      function xi(C) {
        var z = $e();
        return z.useDeferredValue(C);
      }
      function Ot() {
        var C = $e();
        return C.useId();
      }
      function Cl(C, z, G) {
        var ne = $e();
        return ne.useSyncExternalStore(C, z, G);
      }
      var Ki = 0, zo, Zr, _s, Pr, xs, Ts, Rs;
      function _l() {
      }
      _l.__reactDisabledLog = !0;
      function hu() {
        {
          if (Ki === 0) {
            zo = console.log, Zr = console.info, _s = console.warn, Pr = console.error, xs = console.group, Ts = console.groupCollapsed, Rs = console.groupEnd;
            var C = {
              configurable: !0,
              enumerable: !0,
              value: _l,
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
          Ki++;
        }
      }
      function Xi() {
        {
          if (Ki--, Ki === 0) {
            var C = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: be({}, C, {
                value: zo
              }),
              info: be({}, C, {
                value: Zr
              }),
              warn: be({}, C, {
                value: _s
              }),
              error: be({}, C, {
                value: Pr
              }),
              group: be({}, C, {
                value: xs
              }),
              groupCollapsed: be({}, C, {
                value: Ts
              }),
              groupEnd: be({}, C, {
                value: Rs
              })
            });
          }
          Ki < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ti = ve.ReactCurrentDispatcher, Ha;
      function Uo(C, z, G) {
        {
          if (Ha === void 0)
            try {
              throw Error();
            } catch (Ce) {
              var ne = Ce.stack.trim().match(/\n( *(at )?)/);
              Ha = ne && ne[1] || "";
            }
          return `
` + Ha + C;
        }
      }
      var Ri = !1, xl;
      {
        var Tl = typeof WeakMap == "function" ? WeakMap : Map;
        xl = new Tl();
      }
      function jo(C, z) {
        if (!C || Ri)
          return "";
        {
          var G = xl.get(C);
          if (G !== void 0)
            return G;
        }
        var ne;
        Ri = !0;
        var Ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var et;
        et = Ti.current, Ti.current = null, hu();
        try {
          if (z) {
            var Ye = function() {
              throw Error();
            };
            if (Object.defineProperty(Ye.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ye, []);
              } catch (Ht) {
                ne = Ht;
              }
              Reflect.construct(C, [], Ye);
            } else {
              try {
                Ye.call();
              } catch (Ht) {
                ne = Ht;
              }
              C.call(Ye.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ht) {
              ne = Ht;
            }
            C();
          }
        } catch (Ht) {
          if (Ht && ne && typeof Ht.stack == "string") {
            for (var mt = Ht.stack.split(`
`), Dt = ne.stack.split(`
`), Xt = mt.length - 1, tn = Dt.length - 1; Xt >= 1 && tn >= 0 && mt[Xt] !== Dt[tn]; )
              tn--;
            for (; Xt >= 1 && tn >= 0; Xt--, tn--)
              if (mt[Xt] !== Dt[tn]) {
                if (Xt !== 1 || tn !== 1)
                  do
                    if (Xt--, tn--, tn < 0 || mt[Xt] !== Dt[tn]) {
                      var nn = `
` + mt[Xt].replace(" at new ", " at ");
                      return C.displayName && nn.includes("<anonymous>") && (nn = nn.replace("<anonymous>", C.displayName)), typeof C == "function" && xl.set(C, nn), nn;
                    }
                  while (Xt >= 1 && tn >= 0);
                break;
              }
          }
        } finally {
          Ri = !1, Ti.current = et, Xi(), Error.prepareStackTrace = Ce;
        }
        var rn = C ? C.displayName || C.name : "", En = rn ? Uo(rn) : "";
        return typeof C == "function" && xl.set(C, En), En;
      }
      function ks(C, z, G) {
        return jo(C, !1);
      }
      function Os(C) {
        var z = C.prototype;
        return !!(z && z.isReactComponent);
      }
      function Lt(C, z, G) {
        if (C == null)
          return "";
        if (typeof C == "function")
          return jo(C, Os(C));
        if (typeof C == "string")
          return Uo(C);
        switch (C) {
          case M:
            return Uo("Suspense");
          case I:
            return Uo("SuspenseList");
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case D:
              return ks(C.render);
            case B:
              return Lt(C.type, z, G);
            case X: {
              var ne = C, Ce = ne._payload, et = ne._init;
              try {
                return Lt(et(Ce), z, G);
              } catch {
              }
            }
          }
        return "";
      }
      var Ds = {}, vu = ve.ReactDebugCurrentFrame;
      function Po(C) {
        if (C) {
          var z = C._owner, G = Lt(C.type, C._source, z ? z.type : null);
          vu.setExtraStackFrame(G);
        } else
          vu.setExtraStackFrame(null);
      }
      function Ns(C, z, G, ne, Ce) {
        {
          var et = Function.call.bind(Sa);
          for (var Ye in C)
            if (et(C, Ye)) {
              var mt = void 0;
              try {
                if (typeof C[Ye] != "function") {
                  var Dt = Error((ne || "React class") + ": " + G + " type `" + Ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Dt.name = "Invariant Violation", Dt;
                }
                mt = C[Ye](z, Ye, ne, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Xt) {
                mt = Xt;
              }
              mt && !(mt instanceof Error) && (Po(Ce), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", G, Ye, typeof mt), Po(null)), mt instanceof Error && !(mt.message in Ds) && (Ds[mt.message] = !0, Po(Ce), O("Failed %s type: %s", G, mt.message), Po(null));
            }
        }
      }
      function Ft(C) {
        if (C) {
          var z = C._owner, G = Lt(C.type, C._source, z ? z.type : null);
          De(G);
        } else
          De(null);
      }
      var mu;
      mu = !1;
      function Rl() {
        if (gt.current) {
          var C = nr(gt.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
      function Et(C) {
        if (C !== void 0) {
          var z = C.fileName.replace(/^.*[\\\/]/, ""), G = C.lineNumber;
          return `

Check your code at ` + z + ":" + G + ".";
        }
        return "";
      }
      function fi(C) {
        return C != null ? Et(C.__source) : "";
      }
      var Rn = {};
      function ea(C) {
        var z = Rl();
        if (!z) {
          var G = typeof C == "string" ? C : C.displayName || C.name;
          G && (z = `

Check the top-level render call using <` + G + ">.");
        }
        return z;
      }
      function $a(C, z) {
        if (!(!C._store || C._store.validated || C.key != null)) {
          C._store.validated = !0;
          var G = ea(z);
          if (!Rn[G]) {
            Rn[G] = !0;
            var ne = "";
            C && C._owner && C._owner !== gt.current && (ne = " It was passed a child from " + nr(C._owner.type) + "."), Ft(C), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, ne), Ft(null);
          }
        }
      }
      function Fo(C, z) {
        if (typeof C == "object") {
          if ($t(C))
            for (var G = 0; G < C.length; G++) {
              var ne = C[G];
              Vt(ne) && $a(ne, z);
            }
          else if (Vt(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var Ce = ze(C);
            if (typeof Ce == "function" && Ce !== C.entries)
              for (var et = Ce.call(C), Ye; !(Ye = et.next()).done; )
                Vt(Ye.value) && $a(Ye.value, z);
          }
        }
      }
      function Sn(C) {
        {
          var z = C.type;
          if (z == null || typeof z == "string")
            return;
          var G;
          if (typeof z == "function")
            G = z.propTypes;
          else if (typeof z == "object" && (z.$$typeof === D || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          z.$$typeof === B))
            G = z.propTypes;
          else
            return;
          if (G) {
            var ne = nr(z);
            Ns(G, C.props, "prop", ne, C);
          } else if (z.PropTypes !== void 0 && !mu) {
            mu = !0;
            var Ce = nr(z);
            O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
          }
          typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function kn(C) {
        {
          for (var z = Object.keys(C.props), G = 0; G < z.length; G++) {
            var ne = z[G];
            if (ne !== "children" && ne !== "key") {
              Ft(C), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), Ft(null);
              break;
            }
          }
          C.ref !== null && (Ft(C), O("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
        }
      }
      function As(C, z, G) {
        var ne = me(C);
        if (!ne) {
          var Ce = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = fi(z);
          et ? Ce += et : Ce += Rl();
          var Ye;
          C === null ? Ye = "null" : $t(C) ? Ye = "array" : C !== void 0 && C.$$typeof === g ? (Ye = "<" + (nr(C.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : Ye = typeof C, O("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ye, Ce);
        }
        var mt = lt.apply(this, arguments);
        if (mt == null)
          return mt;
        if (ne)
          for (var Dt = 2; Dt < arguments.length; Dt++)
            Fo(arguments[Dt], C);
        return C === E ? kn(mt) : Sn(mt), mt;
      }
      var vr = !1;
      function ta(C) {
        var z = As.bind(null, C);
        return z.type = C, vr || (vr = !0, pe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(z, "type", {
          enumerable: !1,
          get: function() {
            return pe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: C
            }), C;
          }
        }), z;
      }
      function di(C, z, G) {
        for (var ne = Gt.apply(this, arguments), Ce = 2; Ce < arguments.length; Ce++)
          Fo(arguments[Ce], ne.type);
        return Sn(ne), ne;
      }
      function yu(C, z) {
        var G = ue.transition;
        ue.transition = {};
        var ne = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          C();
        } finally {
          if (ue.transition = G, G === null && ne._updatedFibers) {
            var Ce = ne._updatedFibers.size;
            Ce > 10 && pe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ne._updatedFibers.clear();
          }
        }
      }
      var kl = !1, Ol = null;
      function Ho(C) {
        if (Ol === null)
          try {
            var z = ("require" + Math.random()).slice(0, 7), G = s && s[z];
            Ol = G.call(s, "timers").setImmediate;
          } catch {
            Ol = function(Ce) {
              kl === !1 && (kl = !0, typeof MessageChannel > "u" && O("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var et = new MessageChannel();
              et.port1.onmessage = Ce, et.port2.postMessage(void 0);
            };
          }
        return Ol(C);
      }
      var Ba = 0, Ji = !1;
      function gu(C) {
        {
          var z = Ba;
          Ba++, Ue.current === null && (Ue.current = []);
          var G = Ue.isBatchingLegacy, ne;
          try {
            if (Ue.isBatchingLegacy = !0, ne = C(), !G && Ue.didScheduleLegacyUpdate) {
              var Ce = Ue.current;
              Ce !== null && (Ue.didScheduleLegacyUpdate = !1, eo(Ce));
            }
          } catch (rn) {
            throw Zi(z), rn;
          } finally {
            Ue.isBatchingLegacy = G;
          }
          if (ne !== null && typeof ne == "object" && typeof ne.then == "function") {
            var et = ne, Ye = !1, mt = {
              then: function(rn, En) {
                Ye = !0, et.then(function(Ht) {
                  Zi(z), Ba === 0 ? Su(Ht, rn, En) : rn(Ht);
                }, function(Ht) {
                  Zi(z), En(Ht);
                });
              }
            };
            return !Ji && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ye || (Ji = !0, O("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), mt;
          } else {
            var Dt = ne;
            if (Zi(z), Ba === 0) {
              var Xt = Ue.current;
              Xt !== null && (eo(Xt), Ue.current = null);
              var tn = {
                then: function(rn, En) {
                  Ue.current === null ? (Ue.current = [], Su(Dt, rn, En)) : rn(Dt);
                }
              };
              return tn;
            } else {
              var nn = {
                then: function(rn, En) {
                  rn(Dt);
                }
              };
              return nn;
            }
          }
        }
      }
      function Zi(C) {
        C !== Ba - 1 && O("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ba = C;
      }
      function Su(C, z, G) {
        {
          var ne = Ue.current;
          if (ne !== null)
            try {
              eo(ne), Ho(function() {
                ne.length === 0 ? (Ue.current = null, z(C)) : Su(C, z, G);
              });
            } catch (Ce) {
              G(Ce);
            }
          else
            z(C);
        }
      }
      var ki = !1;
      function eo(C) {
        if (!ki) {
          ki = !0;
          var z = 0;
          try {
            for (; z < C.length; z++) {
              var G = C[z];
              do
                G = G(!0);
              while (G !== null);
            }
            C.length = 0;
          } catch (ne) {
            throw C = C.slice(z + 1), ne;
          } finally {
            ki = !1;
          }
        }
      }
      var Eu = As, Ms = di, pi = ta, bu = {
        map: Pa,
        forEach: bl,
        count: Mo,
        toArray: wl,
        only: Lo
      };
      u.Children = bu, u.Component = ke, u.Fragment = E, u.Profiler = T, u.PureComponent = St, u.StrictMode = y, u.Suspense = M, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, u.cloneElement = Ms, u.createContext = si, u.createElement = Eu, u.createFactory = pi, u.createRef = Zt, u.forwardRef = Gi, u.isValidElement = Vt, u.lazy = xa, u.memo = Me, u.startTransition = yu, u.unstable_act = gu, u.useCallback = Nr, u.useContext = Nt, u.useDebugValue = Jr, u.useDeferredValue = xi, u.useEffect = Jn, u.useId = Ot, u.useImperativeHandle = vn, u.useInsertionEffect = pn, u.useLayoutEffect = hn, u.useMemo = _i, u.useReducer = Tt, u.useRef = ut, u.useState = zt, u.useSyncExternalStore = Cl, u.useTransition = Cs, u.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Bh, Bh.exports)), Bh.exports;
}
var CA = {};
CA.NODE_ENV === "production" ? pb.exports = bA() : pb.exports = wA();
var Ct = pb.exports;
const Ab = /* @__PURE__ */ x1(Ct);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mx;
function _A() {
  if (Mx)
    return Uh;
  Mx = 1;
  var s = Ct, u = Symbol.for("react.element"), f = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, g = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(y, T, A) {
    var k, D = {}, M = null, I = null;
    A !== void 0 && (M = "" + A), T.key !== void 0 && (M = "" + T.key), T.ref !== void 0 && (I = T.ref);
    for (k in T)
      p.call(T, k) && !b.hasOwnProperty(k) && (D[k] = T[k]);
    if (y && y.defaultProps)
      for (k in T = y.defaultProps, T)
        D[k] === void 0 && (D[k] = T[k]);
    return { $$typeof: u, type: y, key: M, ref: I, props: D, _owner: g.current };
  }
  return Uh.Fragment = f, Uh.jsx = E, Uh.jsxs = E, Uh;
}
var jh = {}, Lx;
function xA() {
  if (Lx)
    return jh;
  Lx = 1;
  var s = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return s.NODE_ENV !== "production" && function() {
    var u = Ct, f = Symbol.for("react.element"), p = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), T = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), X = Symbol.iterator, fe = "@@iterator";
    function Le(U) {
      if (U === null || typeof U != "object")
        return null;
      var me = X && U[X] || U[fe];
      return typeof me == "function" ? me : null;
    }
    var Ke = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ze(U) {
      {
        for (var me = arguments.length, Me = new Array(me > 1 ? me - 1 : 0), $e = 1; $e < me; $e++)
          Me[$e - 1] = arguments[$e];
        Be("error", U, Me);
      }
    }
    function Be(U, me, Me) {
      {
        var $e = Ke.ReactDebugCurrentFrame, Nt = $e.getStackAddendum();
        Nt !== "" && (me += "%s", Me = Me.concat([Nt]));
        var zt = Me.map(function(Tt) {
          return String(Tt);
        });
        zt.unshift("Warning: " + me), Function.prototype.apply.call(console[U], console, zt);
      }
    }
    var ue = !1, Ue = !1, gt = !1, Z = !1, xe = !1, De;
    De = Symbol.for("react.module.reference");
    function Te(U) {
      return !!(typeof U == "string" || typeof U == "function" || U === g || U === E || xe || U === b || U === k || U === D || Z || U === B || ue || Ue || gt || typeof U == "object" && U !== null && (U.$$typeof === I || U.$$typeof === M || U.$$typeof === y || U.$$typeof === T || U.$$typeof === A || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      U.$$typeof === De || U.getModuleId !== void 0));
    }
    function we(U, me, Me) {
      var $e = U.displayName;
      if ($e)
        return $e;
      var Nt = me.displayName || me.name || "";
      return Nt !== "" ? Me + "(" + Nt + ")" : Me;
    }
    function Ne(U) {
      return U.displayName || "Context";
    }
    function le(U) {
      if (U == null)
        return null;
      if (typeof U.tag == "number" && ze("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof U == "function")
        return U.displayName || U.name || null;
      if (typeof U == "string")
        return U;
      switch (U) {
        case g:
          return "Fragment";
        case p:
          return "Portal";
        case E:
          return "Profiler";
        case b:
          return "StrictMode";
        case k:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof U == "object")
        switch (U.$$typeof) {
          case T:
            var me = U;
            return Ne(me) + ".Consumer";
          case y:
            var Me = U;
            return Ne(Me._context) + ".Provider";
          case A:
            return we(U, U.render, "ForwardRef");
          case M:
            var $e = U.displayName || null;
            return $e !== null ? $e : le(U.type) || "Memo";
          case I: {
            var Nt = U, zt = Nt._payload, Tt = Nt._init;
            try {
              return le(Tt(zt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, ve = 0, pe, O, ae, L, j, ee, be;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function ke() {
      {
        if (ve === 0) {
          pe = console.log, O = console.info, ae = console.warn, L = console.error, j = console.group, ee = console.groupCollapsed, be = console.groupEnd;
          var U = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: U,
            log: U,
            warn: U,
            error: U,
            group: U,
            groupCollapsed: U,
            groupEnd: U
          });
        }
        ve++;
      }
    }
    function He() {
      {
        if (ve--, ve === 0) {
          var U = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, U, {
              value: pe
            }),
            info: re({}, U, {
              value: O
            }),
            warn: re({}, U, {
              value: ae
            }),
            error: re({}, U, {
              value: L
            }),
            group: re({}, U, {
              value: j
            }),
            groupCollapsed: re({}, U, {
              value: ee
            }),
            groupEnd: re({}, U, {
              value: be
            })
          });
        }
        ve < 0 && ze("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pe = Ke.ReactCurrentDispatcher, Ae;
    function ot(U, me, Me) {
      {
        if (Ae === void 0)
          try {
            throw Error();
          } catch (Nt) {
            var $e = Nt.stack.trim().match(/\n( *(at )?)/);
            Ae = $e && $e[1] || "";
          }
        return `
` + Ae + U;
      }
    }
    var St = !1, vt;
    {
      var Zt = typeof WeakMap == "function" ? WeakMap : Map;
      vt = new Zt();
    }
    function Re(U, me) {
      if (!U || St)
        return "";
      {
        var Me = vt.get(U);
        if (Me !== void 0)
          return Me;
      }
      var $e;
      St = !0;
      var Nt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var zt;
      zt = Pe.current, Pe.current = null, ke();
      try {
        if (me) {
          var Tt = function() {
            throw Error();
          };
          if (Object.defineProperty(Tt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Tt, []);
            } catch (Jr) {
              $e = Jr;
            }
            Reflect.construct(U, [], Tt);
          } else {
            try {
              Tt.call();
            } catch (Jr) {
              $e = Jr;
            }
            U.call(Tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Jr) {
            $e = Jr;
          }
          U();
        }
      } catch (Jr) {
        if (Jr && $e && typeof Jr.stack == "string") {
          for (var ut = Jr.stack.split(`
`), Jn = $e.stack.split(`
`), pn = ut.length - 1, hn = Jn.length - 1; pn >= 1 && hn >= 0 && ut[pn] !== Jn[hn]; )
            hn--;
          for (; pn >= 1 && hn >= 0; pn--, hn--)
            if (ut[pn] !== Jn[hn]) {
              if (pn !== 1 || hn !== 1)
                do
                  if (pn--, hn--, hn < 0 || ut[pn] !== Jn[hn]) {
                    var Nr = `
` + ut[pn].replace(" at new ", " at ");
                    return U.displayName && Nr.includes("<anonymous>") && (Nr = Nr.replace("<anonymous>", U.displayName)), typeof U == "function" && vt.set(U, Nr), Nr;
                  }
                while (pn >= 1 && hn >= 0);
              break;
            }
        }
      } finally {
        St = !1, Pe.current = zt, He(), Error.prepareStackTrace = Nt;
      }
      var _i = U ? U.displayName || U.name : "", vn = _i ? ot(_i) : "";
      return typeof U == "function" && vt.set(U, vn), vn;
    }
    function $t(U, me, Me) {
      return Re(U, !1);
    }
    function Mn(U) {
      var me = U.prototype;
      return !!(me && me.isReactComponent);
    }
    function Ln(U, me, Me) {
      if (U == null)
        return "";
      if (typeof U == "function")
        return Re(U, Mn(U));
      if (typeof U == "string")
        return ot(U);
      switch (U) {
        case k:
          return ot("Suspense");
        case D:
          return ot("SuspenseList");
      }
      if (typeof U == "object")
        switch (U.$$typeof) {
          case A:
            return $t(U.render);
          case M:
            return Ln(U.type, me, Me);
          case I: {
            var $e = U, Nt = $e._payload, zt = $e._init;
            try {
              return Ln(zt(Nt), me, Me);
            } catch {
            }
          }
        }
      return "";
    }
    var Kn = Object.prototype.hasOwnProperty, Xn = {}, Ur = Ke.ReactDebugCurrentFrame;
    function kr(U) {
      if (U) {
        var me = U._owner, Me = Ln(U.type, U._source, me ? me.type : null);
        Ur.setExtraStackFrame(Me);
      } else
        Ur.setExtraStackFrame(null);
    }
    function nr(U, me, Me, $e, Nt) {
      {
        var zt = Function.call.bind(Kn);
        for (var Tt in U)
          if (zt(U, Tt)) {
            var ut = void 0;
            try {
              if (typeof U[Tt] != "function") {
                var Jn = Error(($e || "React class") + ": " + Me + " type `" + Tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof U[Tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Jn.name = "Invariant Violation", Jn;
              }
              ut = U[Tt](me, Tt, $e, Me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pn) {
              ut = pn;
            }
            ut && !(ut instanceof Error) && (kr(Nt), ze("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $e || "React class", Me, Tt, typeof ut), kr(null)), ut instanceof Error && !(ut.message in Xn) && (Xn[ut.message] = !0, kr(Nt), ze("Failed %s type: %s", Me, ut.message), kr(null));
          }
      }
    }
    var Sa = Array.isArray;
    function Ea(U) {
      return Sa(U);
    }
    function Or(U) {
      {
        var me = typeof Symbol == "function" && Symbol.toStringTag, Me = me && U[Symbol.toStringTag] || U.constructor.name || "Object";
        return Me;
      }
    }
    function ba(U) {
      try {
        return hr(U), !1;
      } catch {
        return !0;
      }
    }
    function hr(U) {
      return "" + U;
    }
    function jr(U) {
      if (ba(U))
        return ze("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(U)), hr(U);
    }
    var _n = Ke.ReactCurrentOwner, wa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ca, _a, Fe;
    Fe = {};
    function lt(U) {
      if (Kn.call(U, "ref")) {
        var me = Object.getOwnPropertyDescriptor(U, "ref").get;
        if (me && me.isReactWarning)
          return !1;
      }
      return U.ref !== void 0;
    }
    function kt(U) {
      if (Kn.call(U, "key")) {
        var me = Object.getOwnPropertyDescriptor(U, "key").get;
        if (me && me.isReactWarning)
          return !1;
      }
      return U.key !== void 0;
    }
    function Gt(U, me) {
      if (typeof U.ref == "string" && _n.current && me && _n.current.stateNode !== me) {
        var Me = le(_n.current.type);
        Fe[Me] || (ze('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', le(_n.current.type), U.ref), Fe[Me] = !0);
      }
    }
    function Vt(U, me) {
      {
        var Me = function() {
          Ca || (Ca = !0, ze("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", me));
        };
        Me.isReactWarning = !0, Object.defineProperty(U, "key", {
          get: Me,
          configurable: !0
        });
      }
    }
    function $n(U, me) {
      {
        var Me = function() {
          _a || (_a = !0, ze("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", me));
        };
        Me.isReactWarning = !0, Object.defineProperty(U, "ref", {
          get: Me,
          configurable: !0
        });
      }
    }
    var Tn = function(U, me, Me, $e, Nt, zt, Tt) {
      var ut = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: U,
        key: me,
        ref: Me,
        props: Tt,
        // Record the component responsible for creating this element.
        _owner: zt
      };
      return ut._store = {}, Object.defineProperty(ut._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ut, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.defineProperty(ut, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Nt
      }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
    };
    function Dr(U, me, Me, $e, Nt) {
      {
        var zt, Tt = {}, ut = null, Jn = null;
        Me !== void 0 && (jr(Me), ut = "" + Me), kt(me) && (jr(me.key), ut = "" + me.key), lt(me) && (Jn = me.ref, Gt(me, Nt));
        for (zt in me)
          Kn.call(me, zt) && !wa.hasOwnProperty(zt) && (Tt[zt] = me[zt]);
        if (U && U.defaultProps) {
          var pn = U.defaultProps;
          for (zt in pn)
            Tt[zt] === void 0 && (Tt[zt] = pn[zt]);
        }
        if (ut || Jn) {
          var hn = typeof U == "function" ? U.displayName || U.name || "Unknown" : U;
          ut && Vt(Tt, hn), Jn && $n(Tt, hn);
        }
        return Tn(U, ut, Jn, Nt, $e, _n.current, Tt);
      }
    }
    var en = Ke.ReactCurrentOwner, ur = Ke.ReactDebugCurrentFrame;
    function Kt(U) {
      if (U) {
        var me = U._owner, Me = Ln(U.type, U._source, me ? me.type : null);
        ur.setExtraStackFrame(Me);
      } else
        ur.setExtraStackFrame(null);
    }
    var dn;
    dn = !1;
    function ui(U) {
      return typeof U == "object" && U !== null && U.$$typeof === f;
    }
    function Pa() {
      {
        if (en.current) {
          var U = le(en.current.type);
          if (U)
            return `

Check the render method of \`` + U + "`.";
        }
        return "";
      }
    }
    function Mo(U) {
      {
        if (U !== void 0) {
          var me = U.fileName.replace(/^.*[\\\/]/, ""), Me = U.lineNumber;
          return `

Check your code at ` + me + ":" + Me + ".";
        }
        return "";
      }
    }
    var bl = {};
    function wl(U) {
      {
        var me = Pa();
        if (!me) {
          var Me = typeof U == "string" ? U : U.displayName || U.name;
          Me && (me = `

Check the top-level render call using <` + Me + ">.");
        }
        return me;
      }
    }
    function Lo(U, me) {
      {
        if (!U._store || U._store.validated || U.key != null)
          return;
        U._store.validated = !0;
        var Me = wl(me);
        if (bl[Me])
          return;
        bl[Me] = !0;
        var $e = "";
        U && U._owner && U._owner !== en.current && ($e = " It was passed a child from " + le(U._owner.type) + "."), Kt(U), ze('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Me, $e), Kt(null);
      }
    }
    function si(U, me) {
      {
        if (typeof U != "object")
          return;
        if (Ea(U))
          for (var Me = 0; Me < U.length; Me++) {
            var $e = U[Me];
            ui($e) && Lo($e, me);
          }
        else if (ui(U))
          U._store && (U._store.validated = !0);
        else if (U) {
          var Nt = Le(U);
          if (typeof Nt == "function" && Nt !== U.entries)
            for (var zt = Nt.call(U), Tt; !(Tt = zt.next()).done; )
              ui(Tt.value) && Lo(Tt.value, me);
        }
      }
    }
    function ci(U) {
      {
        var me = U.type;
        if (me == null || typeof me == "string")
          return;
        var Me;
        if (typeof me == "function")
          Me = me.propTypes;
        else if (typeof me == "object" && (me.$$typeof === A || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        me.$$typeof === M))
          Me = me.propTypes;
        else
          return;
        if (Me) {
          var $e = le(me);
          nr(Me, U.props, "prop", $e, U);
        } else if (me.PropTypes !== void 0 && !dn) {
          dn = !0;
          var Nt = le(me);
          ze("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Nt || "Unknown");
        }
        typeof me.getDefaultProps == "function" && !me.getDefaultProps.isReactClassApproved && ze("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Fa(U) {
      {
        for (var me = Object.keys(U.props), Me = 0; Me < me.length; Me++) {
          var $e = me[Me];
          if ($e !== "children" && $e !== "key") {
            Kt(U), ze("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $e), Kt(null);
            break;
          }
        }
        U.ref !== null && (Kt(U), ze("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    function Qi(U, me, Me, $e, Nt, zt) {
      {
        var Tt = Te(U);
        if (!Tt) {
          var ut = "";
          (U === void 0 || typeof U == "object" && U !== null && Object.keys(U).length === 0) && (ut += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Jn = Mo(Nt);
          Jn ? ut += Jn : ut += Pa();
          var pn;
          U === null ? pn = "null" : Ea(U) ? pn = "array" : U !== void 0 && U.$$typeof === f ? (pn = "<" + (le(U.type) || "Unknown") + " />", ut = " Did you accidentally export a JSX literal instead of a component?") : pn = typeof U, ze("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pn, ut);
        }
        var hn = Dr(U, me, Me, Nt, zt);
        if (hn == null)
          return hn;
        if (Tt) {
          var Nr = me.children;
          if (Nr !== void 0)
            if ($e)
              if (Ea(Nr)) {
                for (var _i = 0; _i < Nr.length; _i++)
                  si(Nr[_i], U);
                Object.freeze && Object.freeze(Nr);
              } else
                ze("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              si(Nr, U);
        }
        return U === g ? Fa(hn) : ci(hn), hn;
      }
    }
    function Kr(U, me, Me) {
      return Qi(U, me, Me, !0);
    }
    function Xr(U, me, Me) {
      return Qi(U, me, Me, !1);
    }
    var xa = Xr, Gi = Kr;
    jh.Fragment = g, jh.jsx = xa, jh.jsxs = Gi;
  }(), jh;
}
var TA = {};
TA.NODE_ENV === "production" ? db.exports = _A() : db.exports = xA();
var V = db.exports, Vh = {}, hb = { exports: {} }, oi = {}, Yy = { exports: {} }, KE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zx;
function RA() {
  return zx || (zx = 1, function(s) {
    function u(O, ae) {
      var L = O.length;
      O.push(ae);
      e:
        for (; 0 < L; ) {
          var j = L - 1 >>> 1, ee = O[j];
          if (0 < g(ee, ae))
            O[j] = ae, O[L] = ee, L = j;
          else
            break e;
        }
    }
    function f(O) {
      return O.length === 0 ? null : O[0];
    }
    function p(O) {
      if (O.length === 0)
        return null;
      var ae = O[0], L = O.pop();
      if (L !== ae) {
        O[0] = L;
        e:
          for (var j = 0, ee = O.length, be = ee >>> 1; j < be; ) {
            var Se = 2 * (j + 1) - 1, ke = O[Se], He = Se + 1, Pe = O[He];
            if (0 > g(ke, L))
              He < ee && 0 > g(Pe, ke) ? (O[j] = Pe, O[He] = L, j = He) : (O[j] = ke, O[Se] = L, j = Se);
            else if (He < ee && 0 > g(Pe, L))
              O[j] = Pe, O[He] = L, j = He;
            else
              break e;
          }
      }
      return ae;
    }
    function g(O, ae) {
      var L = O.sortIndex - ae.sortIndex;
      return L !== 0 ? L : O.id - ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      s.unstable_now = function() {
        return b.now();
      };
    } else {
      var E = Date, y = E.now();
      s.unstable_now = function() {
        return E.now() - y;
      };
    }
    var T = [], A = [], k = 1, D = null, M = 3, I = !1, B = !1, X = !1, fe = typeof setTimeout == "function" ? setTimeout : null, Le = typeof clearTimeout == "function" ? clearTimeout : null, Ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ze(O) {
      for (var ae = f(A); ae !== null; ) {
        if (ae.callback === null)
          p(A);
        else if (ae.startTime <= O)
          p(A), ae.sortIndex = ae.expirationTime, u(T, ae);
        else
          break;
        ae = f(A);
      }
    }
    function Be(O) {
      if (X = !1, ze(O), !B)
        if (f(T) !== null)
          B = !0, ve(ue);
        else {
          var ae = f(A);
          ae !== null && pe(Be, ae.startTime - O);
        }
    }
    function ue(O, ae) {
      B = !1, X && (X = !1, Le(Z), Z = -1), I = !0;
      var L = M;
      try {
        for (ze(ae), D = f(T); D !== null && (!(D.expirationTime > ae) || O && !Te()); ) {
          var j = D.callback;
          if (typeof j == "function") {
            D.callback = null, M = D.priorityLevel;
            var ee = j(D.expirationTime <= ae);
            ae = s.unstable_now(), typeof ee == "function" ? D.callback = ee : D === f(T) && p(T), ze(ae);
          } else
            p(T);
          D = f(T);
        }
        if (D !== null)
          var be = !0;
        else {
          var Se = f(A);
          Se !== null && pe(Be, Se.startTime - ae), be = !1;
        }
        return be;
      } finally {
        D = null, M = L, I = !1;
      }
    }
    var Ue = !1, gt = null, Z = -1, xe = 5, De = -1;
    function Te() {
      return !(s.unstable_now() - De < xe);
    }
    function we() {
      if (gt !== null) {
        var O = s.unstable_now();
        De = O;
        var ae = !0;
        try {
          ae = gt(!0, O);
        } finally {
          ae ? Ne() : (Ue = !1, gt = null);
        }
      } else
        Ue = !1;
    }
    var Ne;
    if (typeof Ke == "function")
      Ne = function() {
        Ke(we);
      };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), re = le.port2;
      le.port1.onmessage = we, Ne = function() {
        re.postMessage(null);
      };
    } else
      Ne = function() {
        fe(we, 0);
      };
    function ve(O) {
      gt = O, Ue || (Ue = !0, Ne());
    }
    function pe(O, ae) {
      Z = fe(function() {
        O(s.unstable_now());
      }, ae);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, s.unstable_continueExecution = function() {
      B || I || (B = !0, ve(ue));
    }, s.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xe = 0 < O ? Math.floor(1e3 / O) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, s.unstable_getFirstCallbackNode = function() {
      return f(T);
    }, s.unstable_next = function(O) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = M;
      }
      var L = M;
      M = ae;
      try {
        return O();
      } finally {
        M = L;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(O, ae) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var L = M;
      M = O;
      try {
        return ae();
      } finally {
        M = L;
      }
    }, s.unstable_scheduleCallback = function(O, ae, L) {
      var j = s.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? j + L : j) : L = j, O) {
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
      return ee = L + ee, O = { id: k++, callback: ae, priorityLevel: O, startTime: L, expirationTime: ee, sortIndex: -1 }, L > j ? (O.sortIndex = L, u(A, O), f(T) === null && O === f(A) && (X ? (Le(Z), Z = -1) : X = !0, pe(Be, L - j))) : (O.sortIndex = ee, u(T, O), B || I || (B = !0, ve(ue))), O;
    }, s.unstable_shouldYield = Te, s.unstable_wrapCallback = function(O) {
      var ae = M;
      return function() {
        var L = M;
        M = ae;
        try {
          return O.apply(this, arguments);
        } finally {
          M = L;
        }
      };
    };
  }(KE)), KE;
}
var XE = {}, Ux;
function kA() {
  return Ux || (Ux = 1, function(s) {
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
      var f = !1, p = !1, g = 5;
      function b(Fe, lt) {
        var kt = Fe.length;
        Fe.push(lt), T(Fe, lt, kt);
      }
      function E(Fe) {
        return Fe.length === 0 ? null : Fe[0];
      }
      function y(Fe) {
        if (Fe.length === 0)
          return null;
        var lt = Fe[0], kt = Fe.pop();
        return kt !== lt && (Fe[0] = kt, A(Fe, kt, 0)), lt;
      }
      function T(Fe, lt, kt) {
        for (var Gt = kt; Gt > 0; ) {
          var Vt = Gt - 1 >>> 1, $n = Fe[Vt];
          if (k($n, lt) > 0)
            Fe[Vt] = lt, Fe[Gt] = $n, Gt = Vt;
          else
            return;
        }
      }
      function A(Fe, lt, kt) {
        for (var Gt = kt, Vt = Fe.length, $n = Vt >>> 1; Gt < $n; ) {
          var Tn = (Gt + 1) * 2 - 1, Dr = Fe[Tn], en = Tn + 1, ur = Fe[en];
          if (k(Dr, lt) < 0)
            en < Vt && k(ur, Dr) < 0 ? (Fe[Gt] = ur, Fe[en] = lt, Gt = en) : (Fe[Gt] = Dr, Fe[Tn] = lt, Gt = Tn);
          else if (en < Vt && k(ur, lt) < 0)
            Fe[Gt] = ur, Fe[en] = lt, Gt = en;
          else
            return;
        }
      }
      function k(Fe, lt) {
        var kt = Fe.sortIndex - lt.sortIndex;
        return kt !== 0 ? kt : Fe.id - lt.id;
      }
      var D = 1, M = 2, I = 3, B = 4, X = 5;
      function fe(Fe, lt) {
      }
      var Le = typeof performance == "object" && typeof performance.now == "function";
      if (Le) {
        var Ke = performance;
        s.unstable_now = function() {
          return Ke.now();
        };
      } else {
        var ze = Date, Be = ze.now();
        s.unstable_now = function() {
          return ze.now() - Be;
        };
      }
      var ue = 1073741823, Ue = -1, gt = 250, Z = 5e3, xe = 1e4, De = ue, Te = [], we = [], Ne = 1, le = null, re = I, ve = !1, pe = !1, O = !1, ae = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ee(Fe) {
        for (var lt = E(we); lt !== null; ) {
          if (lt.callback === null)
            y(we);
          else if (lt.startTime <= Fe)
            y(we), lt.sortIndex = lt.expirationTime, b(Te, lt);
          else
            return;
          lt = E(we);
        }
      }
      function be(Fe) {
        if (O = !1, ee(Fe), !pe)
          if (E(Te) !== null)
            pe = !0, jr(Se);
          else {
            var lt = E(we);
            lt !== null && _n(be, lt.startTime - Fe);
          }
      }
      function Se(Fe, lt) {
        pe = !1, O && (O = !1, wa()), ve = !0;
        var kt = re;
        try {
          var Gt;
          if (!p)
            return ke(Fe, lt);
        } finally {
          le = null, re = kt, ve = !1;
        }
      }
      function ke(Fe, lt) {
        var kt = lt;
        for (ee(kt), le = E(Te); le !== null && !f && !(le.expirationTime > kt && (!Fe || kr())); ) {
          var Gt = le.callback;
          if (typeof Gt == "function") {
            le.callback = null, re = le.priorityLevel;
            var Vt = le.expirationTime <= kt, $n = Gt(Vt);
            kt = s.unstable_now(), typeof $n == "function" ? le.callback = $n : le === E(Te) && y(Te), ee(kt);
          } else
            y(Te);
          le = E(Te);
        }
        if (le !== null)
          return !0;
        var Tn = E(we);
        return Tn !== null && _n(be, Tn.startTime - kt), !1;
      }
      function He(Fe, lt) {
        switch (Fe) {
          case D:
          case M:
          case I:
          case B:
          case X:
            break;
          default:
            Fe = I;
        }
        var kt = re;
        re = Fe;
        try {
          return lt();
        } finally {
          re = kt;
        }
      }
      function Pe(Fe) {
        var lt;
        switch (re) {
          case D:
          case M:
          case I:
            lt = I;
            break;
          default:
            lt = re;
            break;
        }
        var kt = re;
        re = lt;
        try {
          return Fe();
        } finally {
          re = kt;
        }
      }
      function Ae(Fe) {
        var lt = re;
        return function() {
          var kt = re;
          re = lt;
          try {
            return Fe.apply(this, arguments);
          } finally {
            re = kt;
          }
        };
      }
      function ot(Fe, lt, kt) {
        var Gt = s.unstable_now(), Vt;
        if (typeof kt == "object" && kt !== null) {
          var $n = kt.delay;
          typeof $n == "number" && $n > 0 ? Vt = Gt + $n : Vt = Gt;
        } else
          Vt = Gt;
        var Tn;
        switch (Fe) {
          case D:
            Tn = Ue;
            break;
          case M:
            Tn = gt;
            break;
          case X:
            Tn = De;
            break;
          case B:
            Tn = xe;
            break;
          case I:
          default:
            Tn = Z;
            break;
        }
        var Dr = Vt + Tn, en = {
          id: Ne++,
          callback: lt,
          priorityLevel: Fe,
          startTime: Vt,
          expirationTime: Dr,
          sortIndex: -1
        };
        return Vt > Gt ? (en.sortIndex = Vt, b(we, en), E(Te) === null && en === E(we) && (O ? wa() : O = !0, _n(be, Vt - Gt))) : (en.sortIndex = Dr, b(Te, en), !pe && !ve && (pe = !0, jr(Se))), en;
      }
      function St() {
      }
      function vt() {
        !pe && !ve && (pe = !0, jr(Se));
      }
      function Zt() {
        return E(Te);
      }
      function Re(Fe) {
        Fe.callback = null;
      }
      function $t() {
        return re;
      }
      var Mn = !1, Ln = null, Kn = -1, Xn = g, Ur = -1;
      function kr() {
        var Fe = s.unstable_now() - Ur;
        return !(Fe < Xn);
      }
      function nr() {
      }
      function Sa(Fe) {
        if (Fe < 0 || Fe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Fe > 0 ? Xn = Math.floor(1e3 / Fe) : Xn = g;
      }
      var Ea = function() {
        if (Ln !== null) {
          var Fe = s.unstable_now();
          Ur = Fe;
          var lt = !0, kt = !0;
          try {
            kt = Ln(lt, Fe);
          } finally {
            kt ? Or() : (Mn = !1, Ln = null);
          }
        } else
          Mn = !1;
      }, Or;
      if (typeof j == "function")
        Or = function() {
          j(Ea);
        };
      else if (typeof MessageChannel < "u") {
        var ba = new MessageChannel(), hr = ba.port2;
        ba.port1.onmessage = Ea, Or = function() {
          hr.postMessage(null);
        };
      } else
        Or = function() {
          ae(Ea, 0);
        };
      function jr(Fe) {
        Ln = Fe, Mn || (Mn = !0, Or());
      }
      function _n(Fe, lt) {
        Kn = ae(function() {
          Fe(s.unstable_now());
        }, lt);
      }
      function wa() {
        L(Kn), Kn = -1;
      }
      var Ca = nr, _a = null;
      s.unstable_IdlePriority = X, s.unstable_ImmediatePriority = D, s.unstable_LowPriority = B, s.unstable_NormalPriority = I, s.unstable_Profiling = _a, s.unstable_UserBlockingPriority = M, s.unstable_cancelCallback = Re, s.unstable_continueExecution = vt, s.unstable_forceFrameRate = Sa, s.unstable_getCurrentPriorityLevel = $t, s.unstable_getFirstCallbackNode = Zt, s.unstable_next = Pe, s.unstable_pauseExecution = St, s.unstable_requestPaint = Ca, s.unstable_runWithPriority = He, s.unstable_scheduleCallback = ot, s.unstable_shouldYield = kr, s.unstable_wrapCallback = Ae, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(XE)), XE;
}
var jx;
function T1() {
  if (jx)
    return Yy.exports;
  jx = 1;
  var s = {};
  return s.NODE_ENV === "production" ? Yy.exports = RA() : Yy.exports = kA(), Yy.exports;
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
var Px;
function OA() {
  if (Px)
    return oi;
  Px = 1;
  var s = Ct, u = T1();
  function f(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), g = {};
  function b(n, r) {
    E(n, r), E(n + "Capture", r);
  }
  function E(n, r) {
    for (g[n] = r, n = 0; n < r.length; n++)
      p.add(r[n]);
  }
  var y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, D = {};
  function M(n) {
    return T.call(D, n) ? !0 : T.call(k, n) ? !1 : A.test(n) ? D[n] = !0 : (k[n] = !0, !1);
  }
  function I(n, r, o, c) {
    if (o !== null && o.type === 0)
      return !1;
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
  function B(n, r, o, c) {
    if (r === null || typeof r > "u" || I(n, r, o, c))
      return !0;
    if (c)
      return !1;
    if (o !== null)
      switch (o.type) {
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
  function X(n, r, o, c, h, m, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = h, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = _;
  }
  var fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    fe[n] = new X(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    fe[r] = new X(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    fe[n] = new X(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    fe[n] = new X(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    fe[n] = new X(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    fe[n] = new X(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    fe[n] = new X(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    fe[n] = new X(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    fe[n] = new X(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Le = /[\-:]([a-z])/g;
  function Ke(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Le,
      Ke
    );
    fe[r] = new X(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Le, Ke);
    fe[r] = new X(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Le, Ke);
    fe[r] = new X(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    fe[n] = new X(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), fe.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    fe[n] = new X(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ze(n, r, o, c) {
    var h = fe.hasOwnProperty(r) ? fe[r] : null;
    (h !== null ? h.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (B(r, o, h, c) && (o = null), c || h === null ? M(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : h.mustUseProperty ? n[h.propertyName] = o === null ? h.type === 3 ? !1 : "" : o : (r = h.attributeName, c = h.attributeNamespace, o === null ? n.removeAttribute(r) : (h = h.type, o = h === 3 || h === 4 && o === !0 ? "" : "" + o, c ? n.setAttributeNS(c, r, o) : n.setAttribute(r, o))));
  }
  var Be = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ue = Symbol.for("react.element"), Ue = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), xe = Symbol.for("react.profiler"), De = Symbol.for("react.provider"), Te = Symbol.for("react.context"), we = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), O = Symbol.iterator;
  function ae(n) {
    return n === null || typeof n != "object" ? null : (n = O && n[O] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var L = Object.assign, j;
  function ee(n) {
    if (j === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        j = r && r[1] || "";
      }
    return `
` + j + n;
  }
  var be = !1;
  function Se(n, r) {
    if (!n || be)
      return "";
    be = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (te) {
            var c = te;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (te) {
            c = te;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (te) {
          c = te;
        }
        n();
      }
    } catch (te) {
      if (te && c && typeof te.stack == "string") {
        for (var h = te.stack.split(`
`), m = c.stack.split(`
`), _ = h.length - 1, N = m.length - 1; 1 <= _ && 0 <= N && h[_] !== m[N]; )
          N--;
        for (; 1 <= _ && 0 <= N; _--, N--)
          if (h[_] !== m[N]) {
            if (_ !== 1 || N !== 1)
              do
                if (_--, N--, 0 > N || h[_] !== m[N]) {
                  var P = `
` + h[_].replace(" at new ", " at ");
                  return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), P;
                }
              while (1 <= _ && 0 <= N);
            break;
          }
      }
    } finally {
      be = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? ee(n) : "";
  }
  function ke(n) {
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
        return n = Se(n.type, !1), n;
      case 11:
        return n = Se(n.type.render, !1), n;
      case 1:
        return n = Se(n.type, !0), n;
      default:
        return "";
    }
  }
  function He(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case gt:
        return "Fragment";
      case Ue:
        return "Portal";
      case xe:
        return "Profiler";
      case Z:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case le:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Te:
          return (n.displayName || "Context") + ".Consumer";
        case De:
          return (n._context.displayName || "Context") + ".Provider";
        case we:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case re:
          return r = n.displayName || null, r !== null ? r : He(n.type) || "Memo";
        case ve:
          r = n._payload, n = n._init;
          try {
            return He(n(r));
          } catch {
          }
      }
    return null;
  }
  function Pe(n) {
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
        return He(r);
      case 8:
        return r === Z ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Ae(n) {
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
  function ot(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function St(n) {
    var r = ot(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var h = o.get, m = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(_) {
        c = "" + _, m.call(this, _);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(_) {
        c = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function vt(n) {
    n._valueTracker || (n._valueTracker = St(n));
  }
  function Zt(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), c = "";
    return n && (c = ot(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Re(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function $t(n, r) {
    var o = r.checked;
    return L({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Mn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, c = r.checked != null ? r.checked : r.defaultChecked;
    o = Ae(r.value != null ? r.value : o), n._wrapperState = { initialChecked: c, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Ln(n, r) {
    r = r.checked, r != null && ze(n, "checked", r, !1);
  }
  function Kn(n, r) {
    Ln(n, r);
    var o = Ae(r.value), c = r.type;
    if (o != null)
      c === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ur(n, r.type, o) : r.hasOwnProperty("defaultValue") && Ur(n, r.type, Ae(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Xn(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var c = r.type;
      if (!(c !== "submit" && c !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Ur(n, r, o) {
    (r !== "number" || Re(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var kr = Array.isArray;
  function nr(n, r, o, c) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < o.length; h++)
        r["$" + o[h]] = !0;
      for (o = 0; o < n.length; o++)
        h = r.hasOwnProperty("$" + n[o].value), n[o].selected !== h && (n[o].selected = h), h && c && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Ae(o), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === o) {
          n[h].selected = !0, c && (n[h].defaultSelected = !0);
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Sa(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(f(91));
    return L({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ea(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(f(92));
        if (kr(o)) {
          if (1 < o.length)
            throw Error(f(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Ae(o) };
  }
  function Or(n, r) {
    var o = Ae(r.value), c = Ae(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), c != null && (n.defaultValue = "" + c);
  }
  function ba(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function hr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function jr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? hr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var _n, wa = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, c, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, c, h);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (_n = _n || document.createElement("div"), _n.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = _n.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ca(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var _a = {
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
  }, Fe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_a).forEach(function(n) {
    Fe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), _a[r] = _a[n];
    });
  });
  function lt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || _a.hasOwnProperty(n) && _a[n] ? ("" + r).trim() : r + "px";
  }
  function kt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var c = o.indexOf("--") === 0, h = lt(o, r[o], c);
        o === "float" && (o = "cssFloat"), c ? n.setProperty(o, h) : n[o] = h;
      }
  }
  var Gt = L({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Vt(n, r) {
    if (r) {
      if (Gt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(f(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(f(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(f(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(f(62));
    }
  }
  function $n(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
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
  var Tn = null;
  function Dr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var en = null, ur = null, Kt = null;
  function dn(n) {
    if (n = Di(n)) {
      if (typeof en != "function")
        throw Error(f(280));
      var r = n.stateNode;
      r && (r = uf(r), en(n.stateNode, n.type, r));
    }
  }
  function ui(n) {
    ur ? Kt ? Kt.push(n) : Kt = [n] : ur = n;
  }
  function Pa() {
    if (ur) {
      var n = ur, r = Kt;
      if (Kt = ur = null, dn(n), r)
        for (n = 0; n < r.length; n++)
          dn(r[n]);
    }
  }
  function Mo(n, r) {
    return n(r);
  }
  function bl() {
  }
  var wl = !1;
  function Lo(n, r, o) {
    if (wl)
      return n(r, o);
    wl = !0;
    try {
      return Mo(n, r, o);
    } finally {
      wl = !1, (ur !== null || Kt !== null) && (bl(), Pa());
    }
  }
  function si(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var c = uf(o);
    if (c === null)
      return null;
    o = c[r];
    e:
      switch (r) {
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
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(f(231, r, typeof o));
    return o;
  }
  var ci = !1;
  if (y)
    try {
      var Fa = {};
      Object.defineProperty(Fa, "passive", { get: function() {
        ci = !0;
      } }), window.addEventListener("test", Fa, Fa), window.removeEventListener("test", Fa, Fa);
    } catch {
      ci = !1;
    }
  function Qi(n, r, o, c, h, m, _, N, P) {
    var te = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, te);
    } catch (ye) {
      this.onError(ye);
    }
  }
  var Kr = !1, Xr = null, xa = !1, Gi = null, U = { onError: function(n) {
    Kr = !0, Xr = n;
  } };
  function me(n, r, o, c, h, m, _, N, P) {
    Kr = !1, Xr = null, Qi.apply(U, arguments);
  }
  function Me(n, r, o, c, h, m, _, N, P) {
    if (me.apply(this, arguments), Kr) {
      if (Kr) {
        var te = Xr;
        Kr = !1, Xr = null;
      } else
        throw Error(f(198));
      xa || (xa = !0, Gi = te);
    }
  }
  function $e(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Nt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function zt(n) {
    if ($e(n) !== n)
      throw Error(f(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = $e(n), r === null)
        throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var o = n, c = r; ; ) {
      var h = o.return;
      if (h === null)
        break;
      var m = h.alternate;
      if (m === null) {
        if (c = h.return, c !== null) {
          o = c;
          continue;
        }
        break;
      }
      if (h.child === m.child) {
        for (m = h.child; m; ) {
          if (m === o)
            return zt(h), n;
          if (m === c)
            return zt(h), r;
          m = m.sibling;
        }
        throw Error(f(188));
      }
      if (o.return !== c.return)
        o = h, c = m;
      else {
        for (var _ = !1, N = h.child; N; ) {
          if (N === o) {
            _ = !0, o = h, c = m;
            break;
          }
          if (N === c) {
            _ = !0, c = h, o = m;
            break;
          }
          N = N.sibling;
        }
        if (!_) {
          for (N = m.child; N; ) {
            if (N === o) {
              _ = !0, o = m, c = h;
              break;
            }
            if (N === c) {
              _ = !0, c = m, o = h;
              break;
            }
            N = N.sibling;
          }
          if (!_)
            throw Error(f(189));
        }
      }
      if (o.alternate !== c)
        throw Error(f(190));
    }
    if (o.tag !== 3)
      throw Error(f(188));
    return o.stateNode.current === o ? n : r;
  }
  function ut(n) {
    return n = Tt(n), n !== null ? Jn(n) : null;
  }
  function Jn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Jn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var pn = u.unstable_scheduleCallback, hn = u.unstable_cancelCallback, Nr = u.unstable_shouldYield, _i = u.unstable_requestPaint, vn = u.unstable_now, Jr = u.unstable_getCurrentPriorityLevel, Cs = u.unstable_ImmediatePriority, xi = u.unstable_UserBlockingPriority, Ot = u.unstable_NormalPriority, Cl = u.unstable_LowPriority, Ki = u.unstable_IdlePriority, zo = null, Zr = null;
  function _s(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function")
      try {
        Zr.onCommitFiberRoot(zo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Pr = Math.clz32 ? Math.clz32 : Rs, xs = Math.log, Ts = Math.LN2;
  function Rs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (xs(n) / Ts | 0) | 0;
  }
  var _l = 64, hu = 4194304;
  function Xi(n) {
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
  function Ti(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var c = 0, h = n.suspendedLanes, m = n.pingedLanes, _ = o & 268435455;
    if (_ !== 0) {
      var N = _ & ~h;
      N !== 0 ? c = Xi(N) : (m &= _, m !== 0 && (c = Xi(m)));
    } else
      _ = o & ~h, _ !== 0 ? c = Xi(_) : m !== 0 && (c = Xi(m));
    if (c === 0)
      return 0;
    if (r !== 0 && r !== c && !(r & h) && (h = c & -c, m = r & -r, h >= m || h === 16 && (m & 4194240) !== 0))
      return r;
    if (c & 4 && (c |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= c; 0 < r; )
        o = 31 - Pr(r), h = 1 << o, c |= n[o], r &= ~h;
    return c;
  }
  function Ha(n, r) {
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
  function Uo(n, r) {
    for (var o = n.suspendedLanes, c = n.pingedLanes, h = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var _ = 31 - Pr(m), N = 1 << _, P = h[_];
      P === -1 ? (!(N & o) || N & c) && (h[_] = Ha(N, r)) : P <= r && (n.expiredLanes |= N), m &= ~N;
    }
  }
  function Ri(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function xl() {
    var n = _l;
    return _l <<= 1, !(_l & 4194240) && (_l = 64), n;
  }
  function Tl(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function jo(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Pr(r), n[r] = o;
  }
  function ks(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var h = 31 - Pr(o), m = 1 << h;
      r[h] = 0, c[h] = -1, n[h] = -1, o &= ~m;
    }
  }
  function Os(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var c = 31 - Pr(o), h = 1 << c;
      h & r | n[c] & r && (n[c] |= r), o &= ~h;
    }
  }
  var Lt = 0;
  function Ds(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var vu, Po, Ns, Ft, mu, Rl = !1, Et = [], fi = null, Rn = null, ea = null, $a = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), Sn = [], kn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function As(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        fi = null;
        break;
      case "dragenter":
      case "dragleave":
        Rn = null;
        break;
      case "mouseover":
      case "mouseout":
        ea = null;
        break;
      case "pointerover":
      case "pointerout":
        $a.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fo.delete(r.pointerId);
    }
  }
  function vr(n, r, o, c, h, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: c, nativeEvent: m, targetContainers: [h] }, r !== null && (r = Di(r), r !== null && Po(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function ta(n, r, o, c, h) {
    switch (r) {
      case "focusin":
        return fi = vr(fi, n, r, o, c, h), !0;
      case "dragenter":
        return Rn = vr(Rn, n, r, o, c, h), !0;
      case "mouseover":
        return ea = vr(ea, n, r, o, c, h), !0;
      case "pointerover":
        var m = h.pointerId;
        return $a.set(m, vr($a.get(m) || null, n, r, o, c, h)), !0;
      case "gotpointercapture":
        return m = h.pointerId, Fo.set(m, vr(Fo.get(m) || null, n, r, o, c, h)), !0;
    }
    return !1;
  }
  function di(n) {
    var r = uo(n.target);
    if (r !== null) {
      var o = $e(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Nt(o), r !== null) {
            n.blockedOn = r, mu(n.priority, function() {
              Ns(o);
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
  function yu(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = Eu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var c = new o.constructor(o.type, o);
        Tn = c, o.target.dispatchEvent(c), Tn = null;
      } else
        return r = Di(o), r !== null && Po(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function kl(n, r, o) {
    yu(n) && o.delete(r);
  }
  function Ol() {
    Rl = !1, fi !== null && yu(fi) && (fi = null), Rn !== null && yu(Rn) && (Rn = null), ea !== null && yu(ea) && (ea = null), $a.forEach(kl), Fo.forEach(kl);
  }
  function Ho(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Rl || (Rl = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Ol)));
  }
  function Ba(n) {
    function r(h) {
      return Ho(h, n);
    }
    if (0 < Et.length) {
      Ho(Et[0], n);
      for (var o = 1; o < Et.length; o++) {
        var c = Et[o];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (fi !== null && Ho(fi, n), Rn !== null && Ho(Rn, n), ea !== null && Ho(ea, n), $a.forEach(r), Fo.forEach(r), o = 0; o < Sn.length; o++)
      c = Sn[o], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < Sn.length && (o = Sn[0], o.blockedOn === null); )
      di(o), o.blockedOn === null && Sn.shift();
  }
  var Ji = Be.ReactCurrentBatchConfig, gu = !0;
  function Zi(n, r, o, c) {
    var h = Lt, m = Ji.transition;
    Ji.transition = null;
    try {
      Lt = 1, ki(n, r, o, c);
    } finally {
      Lt = h, Ji.transition = m;
    }
  }
  function Su(n, r, o, c) {
    var h = Lt, m = Ji.transition;
    Ji.transition = null;
    try {
      Lt = 4, ki(n, r, o, c);
    } finally {
      Lt = h, Ji.transition = m;
    }
  }
  function ki(n, r, o, c) {
    if (gu) {
      var h = Eu(n, r, o, c);
      if (h === null)
        Xd(n, r, c, eo, o), As(n, c);
      else if (ta(h, n, r, o, c))
        c.stopPropagation();
      else if (As(n, c), r & 4 && -1 < kn.indexOf(n)) {
        for (; h !== null; ) {
          var m = Di(h);
          if (m !== null && vu(m), m = Eu(n, r, o, c), m === null && Xd(n, r, c, eo, o), m === h)
            break;
          h = m;
        }
        h !== null && c.stopPropagation();
      } else
        Xd(n, r, c, null, o);
    }
  }
  var eo = null;
  function Eu(n, r, o, c) {
    if (eo = null, n = Dr(c), n = uo(n), n !== null)
      if (r = $e(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = Nt(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return eo = n, null;
  }
  function Ms(n) {
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
        switch (Jr()) {
          case Cs:
            return 1;
          case xi:
            return 4;
          case Ot:
          case Cl:
            return 16;
          case Ki:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pi = null, bu = null, C = null;
  function z() {
    if (C)
      return C;
    var n, r = bu, o = r.length, c, h = "value" in pi ? pi.value : pi.textContent, m = h.length;
    for (n = 0; n < o && r[n] === h[n]; n++)
      ;
    var _ = o - n;
    for (c = 1; c <= _ && r[o - c] === h[m - c]; c++)
      ;
    return C = h.slice(n, 1 < c ? 1 - c : void 0);
  }
  function G(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ne() {
    return !0;
  }
  function Ce() {
    return !1;
  }
  function et(n) {
    function r(o, c, h, m, _) {
      this._reactName = o, this._targetInst = h, this.type = c, this.nativeEvent = m, this.target = _, this.currentTarget = null;
      for (var N in n)
        n.hasOwnProperty(N) && (o = n[N], this[N] = o ? o(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? ne : Ce, this.isPropagationStopped = Ce, this;
    }
    return L(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ne);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ne);
    }, persist: function() {
    }, isPersistent: ne }), r;
  }
  var Ye = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, mt = et(Ye), Dt = L({}, Ye, { view: 0, detail: 0 }), Xt = et(Dt), tn, nn, rn, En = L({}, Dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== rn && (rn && n.type === "mousemove" ? (tn = n.screenX - rn.screenX, nn = n.screenY - rn.screenY) : nn = tn = 0, rn = n), tn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : nn;
  } }), Ht = et(En), $o = L({}, En, { dataTransfer: 0 }), wu = et($o), Ls = L({}, Dt, { relatedTarget: 0 }), zs = et(Ls), to = L({}, Ye, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Us = et(to), js = L({}, Ye, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Fd = et(js), _g = L({}, Ye, { data: 0 }), nv = et(_g), rv = {
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
  }, Hd = {
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
  }, av = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function iv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = av[n]) ? !!r[n] : !1;
  }
  function Xc() {
    return iv;
  }
  var xg = L({}, Dt, { key: function(n) {
    if (n.key) {
      var r = rv[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = G(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Hd[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xc, charCode: function(n) {
    return n.type === "keypress" ? G(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? G(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), no = et(xg), Tg = L({}, En, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Jc = et(Tg), $d = L({}, Dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xc }), Bd = et($d), Rg = L({}, Ye, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zc = et(Rg), ov = L({}, En, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), na = et(ov), ro = [9, 13, 27, 32], zn = y && "CompositionEvent" in window, Ta = null;
  y && "documentMode" in document && (Ta = document.documentMode);
  var Vd = y && "TextEvent" in window && !Ta, Ps = y && (!zn || Ta && 8 < Ta && 11 >= Ta), lv = " ", Cu = !1;
  function uv(n, r) {
    switch (n) {
      case "keyup":
        return ro.indexOf(r.keyCode) !== -1;
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
  function sv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Bo = !1;
  function kg(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (Cu = !0, lv);
      case "textInput":
        return n = r.data, n === lv && Cu ? null : n;
      default:
        return null;
    }
  }
  function Og(n, r) {
    if (Bo)
      return n === "compositionend" || !zn && uv(n, r) ? (n = z(), C = bu = pi = null, Bo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Ps && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Dg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Id(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Dg[n.type] : r === "textarea";
  }
  function cv(n, r, o, c) {
    ui(c), r = of(r, "onChange"), 0 < r.length && (o = new mt("onChange", "change", null, o, c), n.push({ event: o, listeners: r }));
  }
  var Fs = null, Hs = null;
  function fv(n) {
    Rv(n, 0);
  }
  function ao(n) {
    var r = Ru(n);
    if (Zt(r))
      return n;
  }
  function Wd(n, r) {
    if (n === "change")
      return r;
  }
  var Yd = !1;
  if (y) {
    var ef;
    if (y) {
      var qd = "oninput" in document;
      if (!qd) {
        var dv = document.createElement("div");
        dv.setAttribute("oninput", "return;"), qd = typeof dv.oninput == "function";
      }
      ef = qd;
    } else
      ef = !1;
    Yd = ef && (!document.documentMode || 9 < document.documentMode);
  }
  function pv() {
    Fs && (Fs.detachEvent("onpropertychange", hv), Hs = Fs = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && ao(Hs)) {
      var r = [];
      cv(r, Hs, n, Dr(n)), Lo(fv, r);
    }
  }
  function Ng(n, r, o) {
    n === "focusin" ? (pv(), Fs = r, Hs = o, Fs.attachEvent("onpropertychange", hv)) : n === "focusout" && pv();
  }
  function Ag(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ao(Hs);
  }
  function Mg(n, r) {
    if (n === "click")
      return ao(r);
  }
  function Lg(n, r) {
    if (n === "input" || n === "change")
      return ao(r);
  }
  function vv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var hi = typeof Object.is == "function" ? Object.is : vv;
  function _u(n, r) {
    if (hi(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), c = Object.keys(r);
    if (o.length !== c.length)
      return !1;
    for (c = 0; c < o.length; c++) {
      var h = o[c];
      if (!T.call(r, h) || !hi(n[h], r[h]))
        return !1;
    }
    return !0;
  }
  function mv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function yv(n, r) {
    var o = mv(n);
    n = 0;
    for (var c; o; ) {
      if (o.nodeType === 3) {
        if (c = n + o.textContent.length, n <= r && c >= r)
          return { node: o, offset: r - n };
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
      o = mv(o);
    }
  }
  function gv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? gv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Sv() {
    for (var n = window, r = Re(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = Re(n.document);
    }
    return r;
  }
  function $s(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Dl(n) {
    var r = Sv(), o = n.focusedElem, c = n.selectionRange;
    if (r !== o && o && o.ownerDocument && gv(o.ownerDocument.documentElement, o)) {
      if (c !== null && $s(o)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = o.textContent.length, m = Math.min(c.start, h);
          c = c.end === void 0 ? m : Math.min(c.end, h), !n.extend && m > c && (h = c, c = m, m = h), h = yv(o, m);
          var _ = yv(
            o,
            c
          );
          h && _ && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(h.node, h.offset), n.removeAllRanges(), m > c ? (n.addRange(r), n.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var tf = y && "documentMode" in document && 11 >= document.documentMode, Nl = null, Vo = null, Bs = null, Qd = !1;
  function Ev(n, r, o) {
    var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Qd || Nl == null || Nl !== Re(c) || (c = Nl, "selectionStart" in c && $s(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), Bs && _u(Bs, c) || (Bs = c, c = of(Vo, "onSelect"), 0 < c.length && (r = new mt("onSelect", "select", null, r, o), n.push({ event: r, listeners: c }), r.target = Nl)));
  }
  function nf(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var xu = { animationend: nf("Animation", "AnimationEnd"), animationiteration: nf("Animation", "AnimationIteration"), animationstart: nf("Animation", "AnimationStart"), transitionend: nf("Transition", "TransitionEnd") }, rf = {}, bv = {};
  y && (bv = document.createElement("div").style, "AnimationEvent" in window || (delete xu.animationend.animation, delete xu.animationiteration.animation, delete xu.animationstart.animation), "TransitionEvent" in window || delete xu.transitionend.transition);
  function Vs(n) {
    if (rf[n])
      return rf[n];
    if (!xu[n])
      return n;
    var r = xu[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in bv)
        return rf[n] = r[o];
    return n;
  }
  var Ar = Vs("animationend"), Gd = Vs("animationiteration"), wv = Vs("animationstart"), Cv = Vs("transitionend"), _v = /* @__PURE__ */ new Map(), xv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Io(n, r) {
    _v.set(n, r), b(r, [n]);
  }
  for (var af = 0; af < xv.length; af++) {
    var Is = xv[af], Ws = Is.toLowerCase(), zg = Is[0].toUpperCase() + Is.slice(1);
    Io(Ws, "on" + zg);
  }
  Io(Ar, "onAnimationEnd"), Io(Gd, "onAnimationIteration"), Io(wv, "onAnimationStart"), Io("dblclick", "onDoubleClick"), Io("focusin", "onFocus"), Io("focusout", "onBlur"), Io(Cv, "onTransitionEnd"), E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var io = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ug = new Set("cancel close invalid load scroll toggle".split(" ").concat(io));
  function Tv(n, r, o) {
    var c = n.type || "unknown-event";
    n.currentTarget = o, Me(c, r, void 0, n), n.currentTarget = null;
  }
  function Rv(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var c = n[o], h = c.event;
      c = c.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var _ = c.length - 1; 0 <= _; _--) {
            var N = c[_], P = N.instance, te = N.currentTarget;
            if (N = N.listener, P !== m && h.isPropagationStopped())
              break e;
            Tv(h, N, te), m = P;
          }
        else
          for (_ = 0; _ < c.length; _++) {
            if (N = c[_], P = N.instance, te = N.currentTarget, N = N.listener, P !== m && h.isPropagationStopped())
              break e;
            Tv(h, N, te), m = P;
          }
      }
    }
    if (xa)
      throw n = Gi, xa = !1, Gi = null, n;
  }
  function sn(n, r) {
    var o = r[ip];
    o === void 0 && (o = r[ip] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    o.has(c) || (Kd(r, n, 2, !1), o.add(c));
  }
  function Ys(n, r, o) {
    var c = 0;
    r && (c |= 4), Kd(o, n, c, r);
  }
  var oo = "_reactListening" + Math.random().toString(36).slice(2);
  function Oi(n) {
    if (!n[oo]) {
      n[oo] = !0, p.forEach(function(o) {
        o !== "selectionchange" && (Ug.has(o) || Ys(o, !1, n), Ys(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[oo] || (r[oo] = !0, Ys("selectionchange", !1, r));
    }
  }
  function Kd(n, r, o, c) {
    switch (Ms(r)) {
      case 1:
        var h = Zi;
        break;
      case 4:
        h = Su;
        break;
      default:
        h = ki;
    }
    o = h.bind(null, r, o, n), h = void 0, !ci || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), c ? h !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: h }) : n.addEventListener(r, o, !0) : h !== void 0 ? n.addEventListener(r, o, { passive: h }) : n.addEventListener(r, o, !1);
  }
  function Xd(n, r, o, c, h) {
    var m = c;
    if (!(r & 1) && !(r & 2) && c !== null)
      e:
        for (; ; ) {
          if (c === null)
            return;
          var _ = c.tag;
          if (_ === 3 || _ === 4) {
            var N = c.stateNode.containerInfo;
            if (N === h || N.nodeType === 8 && N.parentNode === h)
              break;
            if (_ === 4)
              for (_ = c.return; _ !== null; ) {
                var P = _.tag;
                if ((P === 3 || P === 4) && (P = _.stateNode.containerInfo, P === h || P.nodeType === 8 && P.parentNode === h))
                  return;
                _ = _.return;
              }
            for (; N !== null; ) {
              if (_ = uo(N), _ === null)
                return;
              if (P = _.tag, P === 5 || P === 6) {
                c = m = _;
                continue e;
              }
              N = N.parentNode;
            }
          }
          c = c.return;
        }
    Lo(function() {
      var te = m, ye = Dr(o), ge = [];
      e: {
        var he = _v.get(n);
        if (he !== void 0) {
          var Ie = mt, Xe = n;
          switch (n) {
            case "keypress":
              if (G(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ie = no;
              break;
            case "focusin":
              Xe = "focus", Ie = zs;
              break;
            case "focusout":
              Xe = "blur", Ie = zs;
              break;
            case "beforeblur":
            case "afterblur":
              Ie = zs;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ie = Ht;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ie = wu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ie = Bd;
              break;
            case Ar:
            case Gd:
            case wv:
              Ie = Us;
              break;
            case Cv:
              Ie = Zc;
              break;
            case "scroll":
              Ie = Xt;
              break;
            case "wheel":
              Ie = na;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ie = Fd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ie = Jc;
          }
          var tt = (r & 4) !== 0, qn = !tt && n === "scroll", W = tt ? he !== null ? he + "Capture" : null : he;
          tt = [];
          for (var H = te, Q; H !== null; ) {
            Q = H;
            var _e = Q.stateNode;
            if (Q.tag === 5 && _e !== null && (Q = _e, W !== null && (_e = si(H, W), _e != null && tt.push(Tu(H, _e, Q)))), qn)
              break;
            H = H.return;
          }
          0 < tt.length && (he = new Ie(he, Xe, null, o, ye), ge.push({ event: he, listeners: tt }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (he = n === "mouseover" || n === "pointerover", Ie = n === "mouseout" || n === "pointerout", he && o !== Tn && (Xe = o.relatedTarget || o.fromElement) && (uo(Xe) || Xe[vi]))
            break e;
          if ((Ie || he) && (he = ye.window === ye ? ye : (he = ye.ownerDocument) ? he.defaultView || he.parentWindow : window, Ie ? (Xe = o.relatedTarget || o.toElement, Ie = te, Xe = Xe ? uo(Xe) : null, Xe !== null && (qn = $e(Xe), Xe !== qn || Xe.tag !== 5 && Xe.tag !== 6) && (Xe = null)) : (Ie = null, Xe = te), Ie !== Xe)) {
            if (tt = Ht, _e = "onMouseLeave", W = "onMouseEnter", H = "mouse", (n === "pointerout" || n === "pointerover") && (tt = Jc, _e = "onPointerLeave", W = "onPointerEnter", H = "pointer"), qn = Ie == null ? he : Ru(Ie), Q = Xe == null ? he : Ru(Xe), he = new tt(_e, H + "leave", Ie, o, ye), he.target = qn, he.relatedTarget = Q, _e = null, uo(ye) === te && (tt = new tt(W, H + "enter", Xe, o, ye), tt.target = Q, tt.relatedTarget = qn, _e = tt), qn = _e, Ie && Xe)
              t: {
                for (tt = Ie, W = Xe, H = 0, Q = tt; Q; Q = Al(Q))
                  H++;
                for (Q = 0, _e = W; _e; _e = Al(_e))
                  Q++;
                for (; 0 < H - Q; )
                  tt = Al(tt), H--;
                for (; 0 < Q - H; )
                  W = Al(W), Q--;
                for (; H--; ) {
                  if (tt === W || W !== null && tt === W.alternate)
                    break t;
                  tt = Al(tt), W = Al(W);
                }
                tt = null;
              }
            else
              tt = null;
            Ie !== null && Jd(ge, he, Ie, tt, !1), Xe !== null && qn !== null && Jd(ge, qn, Xe, tt, !0);
          }
        }
        e: {
          if (he = te ? Ru(te) : window, Ie = he.nodeName && he.nodeName.toLowerCase(), Ie === "select" || Ie === "input" && he.type === "file")
            var rt = Wd;
          else if (Id(he))
            if (Yd)
              rt = Lg;
            else {
              rt = Ag;
              var pt = Ng;
            }
          else
            (Ie = he.nodeName) && Ie.toLowerCase() === "input" && (he.type === "checkbox" || he.type === "radio") && (rt = Mg);
          if (rt && (rt = rt(n, te))) {
            cv(ge, rt, o, ye);
            break e;
          }
          pt && pt(n, he, te), n === "focusout" && (pt = he._wrapperState) && pt.controlled && he.type === "number" && Ur(he, "number", he.value);
        }
        switch (pt = te ? Ru(te) : window, n) {
          case "focusin":
            (Id(pt) || pt.contentEditable === "true") && (Nl = pt, Vo = te, Bs = null);
            break;
          case "focusout":
            Bs = Vo = Nl = null;
            break;
          case "mousedown":
            Qd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Qd = !1, Ev(ge, o, ye);
            break;
          case "selectionchange":
            if (tf)
              break;
          case "keydown":
          case "keyup":
            Ev(ge, o, ye);
        }
        var Je;
        if (zn)
          e: {
            switch (n) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break e;
              case "compositionend":
                ht = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break e;
            }
            ht = void 0;
          }
        else
          Bo ? uv(n, o) && (ht = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (ht = "onCompositionStart");
        ht && (Ps && o.locale !== "ko" && (Bo || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && Bo && (Je = z()) : (pi = ye, bu = "value" in pi ? pi.value : pi.textContent, Bo = !0)), pt = of(te, ht), 0 < pt.length && (ht = new nv(ht, n, null, o, ye), ge.push({ event: ht, listeners: pt }), Je ? ht.data = Je : (Je = sv(o), Je !== null && (ht.data = Je)))), (Je = Vd ? kg(n, o) : Og(n, o)) && (te = of(te, "onBeforeInput"), 0 < te.length && (ye = new nv("onBeforeInput", "beforeinput", null, o, ye), ge.push({ event: ye, listeners: te }), ye.data = Je));
      }
      Rv(ge, r);
    });
  }
  function Tu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function of(n, r) {
    for (var o = r + "Capture", c = []; n !== null; ) {
      var h = n, m = h.stateNode;
      h.tag === 5 && m !== null && (h = m, m = si(n, o), m != null && c.unshift(Tu(n, m, h)), m = si(n, r), m != null && c.push(Tu(n, m, h))), n = n.return;
    }
    return c;
  }
  function Al(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Jd(n, r, o, c, h) {
    for (var m = r._reactName, _ = []; o !== null && o !== c; ) {
      var N = o, P = N.alternate, te = N.stateNode;
      if (P !== null && P === c)
        break;
      N.tag === 5 && te !== null && (N = te, h ? (P = si(o, m), P != null && _.unshift(Tu(o, P, N))) : h || (P = si(o, m), P != null && _.push(Tu(o, P, N)))), o = o.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var kv = /\r\n?/g, Zd = /\u0000|\uFFFD/g;
  function Ov(n) {
    return (typeof n == "string" ? n : "" + n).replace(kv, `
`).replace(Zd, "");
  }
  function qs(n, r, o) {
    if (r = Ov(r), Ov(n) !== r && o)
      throw Error(f(425));
  }
  function lf() {
  }
  var ep = null, tp = null;
  function Ml(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Qs = typeof setTimeout == "function" ? setTimeout : void 0, Gs = typeof clearTimeout == "function" ? clearTimeout : void 0, np = typeof Promise == "function" ? Promise : void 0, Dv = typeof queueMicrotask == "function" ? queueMicrotask : typeof np < "u" ? function(n) {
    return np.resolve(null).then(n).catch(rp);
  } : Qs;
  function rp(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ap(n, r) {
    var o = r, c = 0;
    do {
      var h = o.nextSibling;
      if (n.removeChild(o), h && h.nodeType === 8)
        if (o = h.data, o === "/$") {
          if (c === 0) {
            n.removeChild(h), Ba(r);
            return;
          }
          c--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || c++;
      o = h;
    } while (o);
    Ba(r);
  }
  function Ra(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Ks(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var lo = Math.random().toString(36).slice(2), Va = "__reactFiber$" + lo, Xs = "__reactProps$" + lo, vi = "__reactContainer$" + lo, ip = "__reactEvents$" + lo, jg = "__reactListeners$" + lo, Pg = "__reactHandles$" + lo;
  function uo(n) {
    var r = n[Va];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[vi] || o[Va]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Ks(n); n !== null; ) {
            if (o = n[Va])
              return o;
            n = Ks(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Di(n) {
    return n = n[Va] || n[vi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ru(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(f(33));
  }
  function uf(n) {
    return n[Xs] || null;
  }
  var st = [], mi = -1;
  function cn(n) {
    return { current: n };
  }
  function nt(n) {
    0 > mi || (n.current = st[mi], st[mi] = null, mi--);
  }
  function It(n, r) {
    mi++, st[mi] = n.current, n.current = r;
  }
  var Ia = {}, sr = cn(Ia), bt = cn(!1), Fr = Ia;
  function ka(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Ia;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === r)
      return c.__reactInternalMemoizedMaskedChildContext;
    var h = {}, m;
    for (m in o)
      h[m] = r[m];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function Zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ra() {
    nt(bt), nt(sr);
  }
  function Ni(n, r, o) {
    if (sr.current !== Ia)
      throw Error(f(168));
    It(sr, r), It(bt, o);
  }
  function Wo(n, r, o) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function")
      return o;
    c = c.getChildContext();
    for (var h in c)
      if (!(h in r))
        throw Error(f(108, Pe(n) || "Unknown", h));
    return L({}, o, c);
  }
  function Ll(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ia, Fr = sr.current, It(sr, n), It(bt, bt.current), !0;
  }
  function Nv(n, r, o) {
    var c = n.stateNode;
    if (!c)
      throw Error(f(169));
    o ? (n = Wo(n, r, Fr), c.__reactInternalMemoizedMergedChildContext = n, nt(bt), nt(sr), It(sr, n)) : nt(bt), It(bt, o);
  }
  var so = null, Yo = !1, mr = !1;
  function sf(n) {
    so === null ? so = [n] : so.push(n);
  }
  function Av(n) {
    Yo = !0, sf(n);
  }
  function Ai() {
    if (!mr && so !== null) {
      mr = !0;
      var n = 0, r = Lt;
      try {
        var o = so;
        for (Lt = 1; n < o.length; n++) {
          var c = o[n];
          do
            c = c(!0);
          while (c !== null);
        }
        so = null, Yo = !1;
      } catch (h) {
        throw so !== null && (so = so.slice(n + 1)), pn(Cs, Ai), h;
      } finally {
        Lt = r, mr = !1;
      }
    }
    return null;
  }
  var Wa = [], qo = 0, Ya = null, zl = 0, aa = [], ia = 0, yi = null, oa = 1, yr = "";
  function Ul(n, r) {
    Wa[qo++] = zl, Wa[qo++] = Ya, Ya = n, zl = r;
  }
  function Qo(n, r, o) {
    aa[ia++] = oa, aa[ia++] = yr, aa[ia++] = yi, yi = n;
    var c = oa;
    n = yr;
    var h = 32 - Pr(c) - 1;
    c &= ~(1 << h), o += 1;
    var m = 32 - Pr(r) + h;
    if (30 < m) {
      var _ = h - h % 5;
      m = (c & (1 << _) - 1).toString(32), c >>= _, h -= _, oa = 1 << 32 - Pr(r) + h | o << h | c, yr = m + n;
    } else
      oa = 1 << m | o << h | c, yr = n;
  }
  function cf(n) {
    n.return !== null && (Ul(n, 1), Qo(n, 1, 0));
  }
  function ff(n) {
    for (; n === Ya; )
      Ya = Wa[--qo], Wa[qo] = null, zl = Wa[--qo], Wa[qo] = null;
    for (; n === yi; )
      yi = aa[--ia], aa[ia] = null, yr = aa[--ia], aa[ia] = null, oa = aa[--ia], aa[ia] = null;
  }
  var Oa = null, Da = null, bn = !1, qa = null;
  function op(n, r) {
    var o = ei(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function lp(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Oa = n, Da = Ra(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Oa = n, Da = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = yi !== null ? { id: oa, overflow: yr } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ei(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Oa = n, Da = null, !0) : !1;
      default:
        return !1;
    }
  }
  function up(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function df(n) {
    if (bn) {
      var r = Da;
      if (r) {
        var o = r;
        if (!lp(n, r)) {
          if (up(n))
            throw Error(f(418));
          r = Ra(o.nextSibling);
          var c = Oa;
          r && lp(n, r) ? op(c, o) : (n.flags = n.flags & -4097 | 2, bn = !1, Oa = n);
        }
      } else {
        if (up(n))
          throw Error(f(418));
        n.flags = n.flags & -4097 | 2, bn = !1, Oa = n;
      }
    }
  }
  function sp(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Oa = n;
  }
  function pf(n) {
    if (n !== Oa)
      return !1;
    if (!bn)
      return sp(n), bn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ml(n.type, n.memoizedProps)), r && (r = Da)) {
      if (up(n))
        throw Mv(), Error(f(418));
      for (; r; )
        op(n, r), r = Ra(r.nextSibling);
    }
    if (sp(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(f(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Da = Ra(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Da = null;
      }
    } else
      Da = Oa ? Ra(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Mv() {
    for (var n = Da; n; )
      n = Ra(n.nextSibling);
  }
  function ku() {
    Da = Oa = null, bn = !1;
  }
  function er(n) {
    qa === null ? qa = [n] : qa.push(n);
  }
  var Fg = Be.ReactCurrentBatchConfig;
  function la(n, r) {
    if (n && n.defaultProps) {
      r = L({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var Ou = cn(null), Mi = null, Du = null, Js = null;
  function cp() {
    Js = Du = Mi = null;
  }
  function fp(n) {
    var r = Ou.current;
    nt(Ou), n._currentValue = r;
  }
  function Go(n, r, o) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, c !== null && (c.childLanes |= r)) : c !== null && (c.childLanes & r) !== r && (c.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function Bn(n, r) {
    Mi = n, Js = Du = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ca = !0), n.firstContext = null);
  }
  function Oe(n) {
    var r = n._currentValue;
    if (Js !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Du === null) {
        if (Mi === null)
          throw Error(f(308));
        Du = n, Mi.dependencies = { lanes: 0, firstContext: n };
      } else
        Du = Du.next = n;
    return r;
  }
  var Mr = null;
  function Na(n) {
    Mr === null ? Mr = [n] : Mr.push(n);
  }
  function Lv(n, r, o, c) {
    var h = r.interleaved;
    return h === null ? (o.next = o, Na(r)) : (o.next = h.next, h.next = o), r.interleaved = o, co(n, c);
  }
  function co(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Ko = !1;
  function dp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function mn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Xo(n, r, o) {
    var c = n.updateQueue;
    if (c === null)
      return null;
    if (c = c.shared, At & 2) {
      var h = c.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), c.pending = r, co(n, o);
    }
    return h = c.interleaved, h === null ? (r.next = r, Na(c)) : (r.next = h.next, h.next = r), c.interleaved = r, co(n, o);
  }
  function hf(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, Os(n, o);
    }
  }
  function Uv(n, r) {
    var o = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, o === c)) {
      var h = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var _ = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          m === null ? h = m = _ : m = m.next = _, o = o.next;
        } while (o !== null);
        m === null ? h = m = r : m = m.next = r;
      } else
        h = m = r;
      o = { baseState: c.baseState, firstBaseUpdate: h, lastBaseUpdate: m, shared: c.shared, effects: c.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Zs(n, r, o, c) {
    var h = n.updateQueue;
    Ko = !1;
    var m = h.firstBaseUpdate, _ = h.lastBaseUpdate, N = h.shared.pending;
    if (N !== null) {
      h.shared.pending = null;
      var P = N, te = P.next;
      P.next = null, _ === null ? m = te : _.next = te, _ = P;
      var ye = n.alternate;
      ye !== null && (ye = ye.updateQueue, N = ye.lastBaseUpdate, N !== _ && (N === null ? ye.firstBaseUpdate = te : N.next = te, ye.lastBaseUpdate = P));
    }
    if (m !== null) {
      var ge = h.baseState;
      _ = 0, ye = te = P = null, N = m;
      do {
        var he = N.lane, Ie = N.eventTime;
        if ((c & he) === he) {
          ye !== null && (ye = ye.next = {
            eventTime: Ie,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var Xe = n, tt = N;
            switch (he = r, Ie = o, tt.tag) {
              case 1:
                if (Xe = tt.payload, typeof Xe == "function") {
                  ge = Xe.call(Ie, ge, he);
                  break e;
                }
                ge = Xe;
                break e;
              case 3:
                Xe.flags = Xe.flags & -65537 | 128;
              case 0:
                if (Xe = tt.payload, he = typeof Xe == "function" ? Xe.call(Ie, ge, he) : Xe, he == null)
                  break e;
                ge = L({}, ge, he);
                break e;
              case 2:
                Ko = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (n.flags |= 64, he = h.effects, he === null ? h.effects = [N] : he.push(N));
        } else
          Ie = { eventTime: Ie, lane: he, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, ye === null ? (te = ye = Ie, P = ge) : ye = ye.next = Ie, _ |= he;
        if (N = N.next, N === null) {
          if (N = h.shared.pending, N === null)
            break;
          he = N, N = he.next, he.next = null, h.lastBaseUpdate = he, h.shared.pending = null;
        }
      } while (!0);
      if (ye === null && (P = ge), h.baseState = P, h.firstBaseUpdate = te, h.lastBaseUpdate = ye, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          _ |= h.lane, h = h.next;
        while (h !== r);
      } else
        m === null && (h.shared.lanes = 0);
      Ql |= _, n.lanes = _, n.memoizedState = ge;
    }
  }
  function Nu(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var c = n[r], h = c.callback;
        if (h !== null) {
          if (c.callback = null, c = o, typeof h != "function")
            throw Error(f(191, h));
          h.call(c);
        }
      }
  }
  var jl = new s.Component().refs;
  function pp(n, r, o, c) {
    r = n.memoizedState, o = o(c, r), o = o == null ? r : L({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var vf = { isMounted: function(n) {
    return (n = n._reactInternals) ? $e(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var c = dr(), h = vo(n), m = mn(c, h);
    m.payload = r, o != null && (m.callback = o), r = Xo(n, m, h), r !== null && (Dn(r, n, h, c), hf(r, n, h));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var c = dr(), h = vo(n), m = mn(c, h);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = Xo(n, m, h), r !== null && (Dn(r, n, h, c), hf(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = dr(), c = vo(n), h = mn(o, c);
    h.tag = 2, r != null && (h.callback = r), r = Xo(n, h, c), r !== null && (Dn(r, n, c, o), hf(r, n, c));
  } };
  function jv(n, r, o, c, h, m, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, m, _) : r.prototype && r.prototype.isPureReactComponent ? !_u(o, c) || !_u(h, m) : !0;
  }
  function Pv(n, r, o) {
    var c = !1, h = Ia, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Oe(m) : (h = Zn(r) ? Fr : sr.current, c = r.contextTypes, m = (c = c != null) ? ka(n, h) : Ia), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = vf, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Fv(n, r, o, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, c), r.state !== n && vf.enqueueReplaceState(r, r.state, null);
  }
  function hp(n, r, o, c) {
    var h = n.stateNode;
    h.props = o, h.state = n.memoizedState, h.refs = jl, dp(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? h.context = Oe(m) : (m = Zn(r) ? Fr : sr.current, h.context = ka(n, m)), h.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (pp(n, r, m, o), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && vf.enqueueReplaceState(h, h.state, null), Zs(n, o, h, c), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Au(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(f(309));
          var c = o.stateNode;
        }
        if (!c)
          throw Error(f(147, n));
        var h = c, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(_) {
          var N = h.refs;
          N === jl && (N = h.refs = {}), _ === null ? delete N[m] : N[m] = _;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string")
        throw Error(f(284));
      if (!o._owner)
        throw Error(f(290, n));
    }
    return n;
  }
  function ec(n, r) {
    throw n = Object.prototype.toString.call(r), Error(f(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Hv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function $v(n) {
    function r(W, H) {
      if (n) {
        var Q = W.deletions;
        Q === null ? (W.deletions = [H], W.flags |= 16) : Q.push(H);
      }
    }
    function o(W, H) {
      if (!n)
        return null;
      for (; H !== null; )
        r(W, H), H = H.sibling;
      return null;
    }
    function c(W, H) {
      for (W = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? W.set(H.key, H) : W.set(H.index, H), H = H.sibling;
      return W;
    }
    function h(W, H) {
      return W = il(W, H), W.index = 0, W.sibling = null, W;
    }
    function m(W, H, Q) {
      return W.index = Q, n ? (Q = W.alternate, Q !== null ? (Q = Q.index, Q < H ? (W.flags |= 2, H) : Q) : (W.flags |= 2, H)) : (W.flags |= 1048576, H);
    }
    function _(W) {
      return n && W.alternate === null && (W.flags |= 2), W;
    }
    function N(W, H, Q, _e) {
      return H === null || H.tag !== 6 ? (H = Kf(Q, W.mode, _e), H.return = W, H) : (H = h(H, Q), H.return = W, H);
    }
    function P(W, H, Q, _e) {
      var rt = Q.type;
      return rt === gt ? ye(W, H, Q.props.children, _e, Q.key) : H !== null && (H.elementType === rt || typeof rt == "object" && rt !== null && rt.$$typeof === ve && Hv(rt) === H.type) ? (_e = h(H, Q.props), _e.ref = Au(W, H, Q), _e.return = W, _e) : (_e = Qf(Q.type, Q.key, Q.props, null, W.mode, _e), _e.ref = Au(W, H, Q), _e.return = W, _e);
    }
    function te(W, H, Q, _e) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== Q.containerInfo || H.stateNode.implementation !== Q.implementation ? (H = Sc(Q, W.mode, _e), H.return = W, H) : (H = h(H, Q.children || []), H.return = W, H);
    }
    function ye(W, H, Q, _e, rt) {
      return H === null || H.tag !== 7 ? (H = Jl(Q, W.mode, _e, rt), H.return = W, H) : (H = h(H, Q), H.return = W, H);
    }
    function ge(W, H, Q) {
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return H = Kf("" + H, W.mode, Q), H.return = W, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ue:
            return Q = Qf(H.type, H.key, H.props, null, W.mode, Q), Q.ref = Au(W, null, H), Q.return = W, Q;
          case Ue:
            return H = Sc(H, W.mode, Q), H.return = W, H;
          case ve:
            var _e = H._init;
            return ge(W, _e(H._payload), Q);
        }
        if (kr(H) || ae(H))
          return H = Jl(H, W.mode, Q, null), H.return = W, H;
        ec(W, H);
      }
      return null;
    }
    function he(W, H, Q, _e) {
      var rt = H !== null ? H.key : null;
      if (typeof Q == "string" && Q !== "" || typeof Q == "number")
        return rt !== null ? null : N(W, H, "" + Q, _e);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case ue:
            return Q.key === rt ? P(W, H, Q, _e) : null;
          case Ue:
            return Q.key === rt ? te(W, H, Q, _e) : null;
          case ve:
            return rt = Q._init, he(
              W,
              H,
              rt(Q._payload),
              _e
            );
        }
        if (kr(Q) || ae(Q))
          return rt !== null ? null : ye(W, H, Q, _e, null);
        ec(W, Q);
      }
      return null;
    }
    function Ie(W, H, Q, _e, rt) {
      if (typeof _e == "string" && _e !== "" || typeof _e == "number")
        return W = W.get(Q) || null, N(H, W, "" + _e, rt);
      if (typeof _e == "object" && _e !== null) {
        switch (_e.$$typeof) {
          case ue:
            return W = W.get(_e.key === null ? Q : _e.key) || null, P(H, W, _e, rt);
          case Ue:
            return W = W.get(_e.key === null ? Q : _e.key) || null, te(H, W, _e, rt);
          case ve:
            var pt = _e._init;
            return Ie(W, H, Q, pt(_e._payload), rt);
        }
        if (kr(_e) || ae(_e))
          return W = W.get(Q) || null, ye(H, W, _e, rt, null);
        ec(H, _e);
      }
      return null;
    }
    function Xe(W, H, Q, _e) {
      for (var rt = null, pt = null, Je = H, ht = H = 0, or = null; Je !== null && ht < Q.length; ht++) {
        Je.index > ht ? (or = Je, Je = null) : or = Je.sibling;
        var Wt = he(W, Je, Q[ht], _e);
        if (Wt === null) {
          Je === null && (Je = or);
          break;
        }
        n && Je && Wt.alternate === null && r(W, Je), H = m(Wt, H, ht), pt === null ? rt = Wt : pt.sibling = Wt, pt = Wt, Je = or;
      }
      if (ht === Q.length)
        return o(W, Je), bn && Ul(W, ht), rt;
      if (Je === null) {
        for (; ht < Q.length; ht++)
          Je = ge(W, Q[ht], _e), Je !== null && (H = m(Je, H, ht), pt === null ? rt = Je : pt.sibling = Je, pt = Je);
        return bn && Ul(W, ht), rt;
      }
      for (Je = c(W, Je); ht < Q.length; ht++)
        or = Ie(Je, W, ht, Q[ht], _e), or !== null && (n && or.alternate !== null && Je.delete(or.key === null ? ht : or.key), H = m(or, H, ht), pt === null ? rt = or : pt.sibling = or, pt = or);
      return n && Je.forEach(function(mo) {
        return r(W, mo);
      }), bn && Ul(W, ht), rt;
    }
    function tt(W, H, Q, _e) {
      var rt = ae(Q);
      if (typeof rt != "function")
        throw Error(f(150));
      if (Q = rt.call(Q), Q == null)
        throw Error(f(151));
      for (var pt = rt = null, Je = H, ht = H = 0, or = null, Wt = Q.next(); Je !== null && !Wt.done; ht++, Wt = Q.next()) {
        Je.index > ht ? (or = Je, Je = null) : or = Je.sibling;
        var mo = he(W, Je, Wt.value, _e);
        if (mo === null) {
          Je === null && (Je = or);
          break;
        }
        n && Je && mo.alternate === null && r(W, Je), H = m(mo, H, ht), pt === null ? rt = mo : pt.sibling = mo, pt = mo, Je = or;
      }
      if (Wt.done)
        return o(
          W,
          Je
        ), bn && Ul(W, ht), rt;
      if (Je === null) {
        for (; !Wt.done; ht++, Wt = Q.next())
          Wt = ge(W, Wt.value, _e), Wt !== null && (H = m(Wt, H, ht), pt === null ? rt = Wt : pt.sibling = Wt, pt = Wt);
        return bn && Ul(W, ht), rt;
      }
      for (Je = c(W, Je); !Wt.done; ht++, Wt = Q.next())
        Wt = Ie(Je, W, ht, Wt.value, _e), Wt !== null && (n && Wt.alternate !== null && Je.delete(Wt.key === null ? ht : Wt.key), H = m(Wt, H, ht), pt === null ? rt = Wt : pt.sibling = Wt, pt = Wt);
      return n && Je.forEach(function(a0) {
        return r(W, a0);
      }), bn && Ul(W, ht), rt;
    }
    function qn(W, H, Q, _e) {
      if (typeof Q == "object" && Q !== null && Q.type === gt && Q.key === null && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case ue:
            e: {
              for (var rt = Q.key, pt = H; pt !== null; ) {
                if (pt.key === rt) {
                  if (rt = Q.type, rt === gt) {
                    if (pt.tag === 7) {
                      o(W, pt.sibling), H = h(pt, Q.props.children), H.return = W, W = H;
                      break e;
                    }
                  } else if (pt.elementType === rt || typeof rt == "object" && rt !== null && rt.$$typeof === ve && Hv(rt) === pt.type) {
                    o(W, pt.sibling), H = h(pt, Q.props), H.ref = Au(W, pt, Q), H.return = W, W = H;
                    break e;
                  }
                  o(W, pt);
                  break;
                } else
                  r(W, pt);
                pt = pt.sibling;
              }
              Q.type === gt ? (H = Jl(Q.props.children, W.mode, _e, Q.key), H.return = W, W = H) : (_e = Qf(Q.type, Q.key, Q.props, null, W.mode, _e), _e.ref = Au(W, H, Q), _e.return = W, W = _e);
            }
            return _(W);
          case Ue:
            e: {
              for (pt = Q.key; H !== null; ) {
                if (H.key === pt)
                  if (H.tag === 4 && H.stateNode.containerInfo === Q.containerInfo && H.stateNode.implementation === Q.implementation) {
                    o(W, H.sibling), H = h(H, Q.children || []), H.return = W, W = H;
                    break e;
                  } else {
                    o(W, H);
                    break;
                  }
                else
                  r(W, H);
                H = H.sibling;
              }
              H = Sc(Q, W.mode, _e), H.return = W, W = H;
            }
            return _(W);
          case ve:
            return pt = Q._init, qn(W, H, pt(Q._payload), _e);
        }
        if (kr(Q))
          return Xe(W, H, Q, _e);
        if (ae(Q))
          return tt(W, H, Q, _e);
        ec(W, Q);
      }
      return typeof Q == "string" && Q !== "" || typeof Q == "number" ? (Q = "" + Q, H !== null && H.tag === 6 ? (o(W, H.sibling), H = h(H, Q), H.return = W, W = H) : (o(W, H), H = Kf(Q, W.mode, _e), H.return = W, W = H), _(W)) : o(W, H);
    }
    return qn;
  }
  var Mu = $v(!0), Bv = $v(!1), tc = {}, Li = cn(tc), Lu = cn(tc), nc = cn(tc);
  function Jo(n) {
    if (n === tc)
      throw Error(f(174));
    return n;
  }
  function vp(n, r) {
    switch (It(nc, r), It(Lu, n), It(Li, tc), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : jr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = jr(r, n);
    }
    nt(Li), It(Li, r);
  }
  function zu() {
    nt(Li), nt(Lu), nt(nc);
  }
  function mf(n) {
    Jo(nc.current);
    var r = Jo(Li.current), o = jr(r, n.type);
    r !== o && (It(Lu, n), It(Li, o));
  }
  function ct(n) {
    Lu.current === n && (nt(Li), nt(Lu));
  }
  var at = cn(0);
  function Bt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Un = [];
  function Qa() {
    for (var n = 0; n < Un.length; n++)
      Un[n]._workInProgressVersionPrimary = null;
    Un.length = 0;
  }
  var rc = Be.ReactCurrentDispatcher, mp = Be.ReactCurrentBatchConfig, Pl = 0, On = null, Vn = null, se = null, In = !1, dt = !1, zi = 0, fo = 0;
  function jn() {
    throw Error(f(321));
  }
  function Ga(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!hi(n[o], r[o]))
        return !1;
    return !0;
  }
  function Fl(n, r, o, c, h, m) {
    if (Pl = m, On = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, rc.current = n === null || n.memoizedState === null ? Hg : $g, n = o(c, h), dt) {
      m = 0;
      do {
        if (dt = !1, zi = 0, 25 <= m)
          throw Error(f(301));
        m += 1, se = Vn = null, r.updateQueue = null, rc.current = Bg, n = o(c, h);
      } while (dt);
    }
    if (rc.current = Df, r = Vn !== null && Vn.next !== null, Pl = 0, se = Vn = On = null, In = !1, r)
      throw Error(f(300));
    return n;
  }
  function Zo() {
    var n = zi !== 0;
    return zi = 0, n;
  }
  function ua() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return se === null ? On.memoizedState = se = n : se = se.next = n, se;
  }
  function sa() {
    if (Vn === null) {
      var n = On.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Vn.next;
    var r = se === null ? On.memoizedState : se.next;
    if (r !== null)
      se = r, Vn = n;
    else {
      if (n === null)
        throw Error(f(310));
      Vn = n, n = { memoizedState: Vn.memoizedState, baseState: Vn.baseState, baseQueue: Vn.baseQueue, queue: Vn.queue, next: null }, se === null ? On.memoizedState = se = n : se = se.next = n;
    }
    return se;
  }
  function Hl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ac(n) {
    var r = sa(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var c = Vn, h = c.baseQueue, m = o.pending;
    if (m !== null) {
      if (h !== null) {
        var _ = h.next;
        h.next = m.next, m.next = _;
      }
      c.baseQueue = h = m, o.pending = null;
    }
    if (h !== null) {
      m = h.next, c = c.baseState;
      var N = _ = null, P = null, te = m;
      do {
        var ye = te.lane;
        if ((Pl & ye) === ye)
          P !== null && (P = P.next = { lane: 0, action: te.action, hasEagerState: te.hasEagerState, eagerState: te.eagerState, next: null }), c = te.hasEagerState ? te.eagerState : n(c, te.action);
        else {
          var ge = {
            lane: ye,
            action: te.action,
            hasEagerState: te.hasEagerState,
            eagerState: te.eagerState,
            next: null
          };
          P === null ? (N = P = ge, _ = c) : P = P.next = ge, On.lanes |= ye, Ql |= ye;
        }
        te = te.next;
      } while (te !== null && te !== m);
      P === null ? _ = c : P.next = N, hi(c, r.memoizedState) || (ca = !0), r.memoizedState = c, r.baseState = _, r.baseQueue = P, o.lastRenderedState = c;
    }
    if (n = o.interleaved, n !== null) {
      h = n;
      do
        m = h.lane, On.lanes |= m, Ql |= m, h = h.next;
      while (h !== n);
    } else
      h === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function ic(n) {
    var r = sa(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var c = o.dispatch, h = o.pending, m = r.memoizedState;
    if (h !== null) {
      o.pending = null;
      var _ = h = h.next;
      do
        m = n(m, _.action), _ = _.next;
      while (_ !== h);
      hi(m, r.memoizedState) || (ca = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, c];
  }
  function yf() {
  }
  function gf(n, r) {
    var o = On, c = sa(), h = r(), m = !hi(c.memoizedState, h);
    if (m && (c.memoizedState = h, ca = !0), c = c.queue, oc(bf.bind(null, o, c, n), [n]), c.getSnapshot !== r || m || se !== null && se.memoizedState.tag & 1) {
      if (o.flags |= 2048, $l(9, Ef.bind(null, o, c, h, r), void 0, null), Fn === null)
        throw Error(f(349));
      Pl & 30 || Sf(o, r, h);
    }
    return h;
  }
  function Sf(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = On.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, On.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Ef(n, r, o, c) {
    r.value = o, r.getSnapshot = c, wf(r) && Cf(n);
  }
  function bf(n, r, o) {
    return o(function() {
      wf(r) && Cf(n);
    });
  }
  function wf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !hi(n, o);
    } catch {
      return !0;
    }
  }
  function Cf(n) {
    var r = co(n, 1);
    r !== null && Dn(r, n, 1, -1);
  }
  function _f(n) {
    var r = ua();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Of.bind(null, On, n), [r.memoizedState, n];
  }
  function $l(n, r, o, c) {
    return n = { tag: n, create: r, destroy: o, deps: c, next: null }, r = On.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, On.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (c = o.next, o.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function xf() {
    return sa().memoizedState;
  }
  function Uu(n, r, o, c) {
    var h = ua();
    On.flags |= n, h.memoizedState = $l(1 | r, o, void 0, c === void 0 ? null : c);
  }
  function Bl(n, r, o, c) {
    var h = sa();
    c = c === void 0 ? null : c;
    var m = void 0;
    if (Vn !== null) {
      var _ = Vn.memoizedState;
      if (m = _.destroy, c !== null && Ga(c, _.deps)) {
        h.memoizedState = $l(r, o, m, c);
        return;
      }
    }
    On.flags |= n, h.memoizedState = $l(1 | r, o, m, c);
  }
  function Vl(n, r) {
    return Uu(8390656, 8, n, r);
  }
  function oc(n, r) {
    return Bl(2048, 8, n, r);
  }
  function Tf(n, r) {
    return Bl(4, 2, n, r);
  }
  function Rf(n, r) {
    return Bl(4, 4, n, r);
  }
  function kf(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function yp(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Bl(4, 4, kf.bind(null, r, n), o);
  }
  function Il() {
  }
  function gp(n, r) {
    var o = sa();
    r = r === void 0 ? null : r;
    var c = o.memoizedState;
    return c !== null && r !== null && Ga(r, c[1]) ? c[0] : (o.memoizedState = [n, r], n);
  }
  function ju(n, r) {
    var o = sa();
    r = r === void 0 ? null : r;
    var c = o.memoizedState;
    return c !== null && r !== null && Ga(r, c[1]) ? c[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function el(n, r, o) {
    return Pl & 21 ? (hi(o, r) || (o = xl(), On.lanes |= o, Ql |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ca = !0), n.memoizedState = o);
  }
  function Aa(n, r) {
    var o = Lt;
    Lt = o !== 0 && 4 > o ? o : 4, n(!0);
    var c = mp.transition;
    mp.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = o, mp.transition = c;
    }
  }
  function Vv() {
    return sa().memoizedState;
  }
  function yn(n, r, o) {
    var c = vo(n);
    if (o = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null }, lc(n))
      Pu(r, o);
    else if (o = Lv(n, r, o, c), o !== null) {
      var h = dr();
      Dn(o, n, c, h), uc(o, r, c);
    }
  }
  function Of(n, r, o) {
    var c = vo(n), h = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (lc(n))
      Pu(r, h);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null))
        try {
          var _ = r.lastRenderedState, N = m(_, o);
          if (h.hasEagerState = !0, h.eagerState = N, hi(N, _)) {
            var P = r.interleaved;
            P === null ? (h.next = h, Na(r)) : (h.next = P.next, P.next = h), r.interleaved = h;
            return;
          }
        } catch {
        } finally {
        }
      o = Lv(n, r, h, c), o !== null && (h = dr(), Dn(o, n, c, h), uc(o, r, c));
    }
  }
  function lc(n) {
    var r = n.alternate;
    return n === On || r !== null && r === On;
  }
  function Pu(n, r) {
    dt = In = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function uc(n, r, o) {
    if (o & 4194240) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, Os(n, o);
    }
  }
  var Df = { readContext: Oe, useCallback: jn, useContext: jn, useEffect: jn, useImperativeHandle: jn, useInsertionEffect: jn, useLayoutEffect: jn, useMemo: jn, useReducer: jn, useRef: jn, useState: jn, useDebugValue: jn, useDeferredValue: jn, useTransition: jn, useMutableSource: jn, useSyncExternalStore: jn, useId: jn, unstable_isNewReconciler: !1 }, Hg = { readContext: Oe, useCallback: function(n, r) {
    return ua().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Oe, useEffect: Vl, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Uu(
      4194308,
      4,
      kf.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Uu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Uu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = ua();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var c = ua();
    return r = o !== void 0 ? o(r) : r, c.memoizedState = c.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, c.queue = n, n = n.dispatch = yn.bind(null, On, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = ua();
    return n = { current: n }, r.memoizedState = n;
  }, useState: _f, useDebugValue: Il, useDeferredValue: function(n) {
    return ua().memoizedState = n;
  }, useTransition: function() {
    var n = _f(!1), r = n[0];
    return n = Aa.bind(null, n[1]), ua().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var c = On, h = ua();
    if (bn) {
      if (o === void 0)
        throw Error(f(407));
      o = o();
    } else {
      if (o = r(), Fn === null)
        throw Error(f(349));
      Pl & 30 || Sf(c, r, o);
    }
    h.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return h.queue = m, Vl(bf.bind(
      null,
      c,
      m,
      n
    ), [n]), c.flags |= 2048, $l(9, Ef.bind(null, c, m, o, r), void 0, null), o;
  }, useId: function() {
    var n = ua(), r = Fn.identifierPrefix;
    if (bn) {
      var o = yr, c = oa;
      o = (c & ~(1 << 32 - Pr(c) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = zi++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = fo++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $g = {
    readContext: Oe,
    useCallback: gp,
    useContext: Oe,
    useEffect: oc,
    useImperativeHandle: yp,
    useInsertionEffect: Tf,
    useLayoutEffect: Rf,
    useMemo: ju,
    useReducer: ac,
    useRef: xf,
    useState: function() {
      return ac(Hl);
    },
    useDebugValue: Il,
    useDeferredValue: function(n) {
      var r = sa();
      return el(r, Vn.memoizedState, n);
    },
    useTransition: function() {
      var n = ac(Hl)[0], r = sa().memoizedState;
      return [n, r];
    },
    useMutableSource: yf,
    useSyncExternalStore: gf,
    useId: Vv,
    unstable_isNewReconciler: !1
  }, Bg = { readContext: Oe, useCallback: gp, useContext: Oe, useEffect: oc, useImperativeHandle: yp, useInsertionEffect: Tf, useLayoutEffect: Rf, useMemo: ju, useReducer: ic, useRef: xf, useState: function() {
    return ic(Hl);
  }, useDebugValue: Il, useDeferredValue: function(n) {
    var r = sa();
    return Vn === null ? r.memoizedState = n : el(r, Vn.memoizedState, n);
  }, useTransition: function() {
    var n = ic(Hl)[0], r = sa().memoizedState;
    return [n, r];
  }, useMutableSource: yf, useSyncExternalStore: gf, useId: Vv, unstable_isNewReconciler: !1 };
  function tl(n, r) {
    try {
      var o = "", c = r;
      do
        o += ke(c), c = c.return;
      while (c);
      var h = o;
    } catch (m) {
      h = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: h, digest: null };
  }
  function Sp(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function sc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Iv = typeof WeakMap == "function" ? WeakMap : Map;
  function Wv(n, r, o) {
    o = mn(-1, o), o.tag = 3, o.payload = { element: null };
    var c = r.value;
    return o.callback = function() {
      Bf || (Bf = !0, kp = c), sc(n, r);
    }, o;
  }
  function Yv(n, r, o) {
    o = mn(-1, o), o.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var h = r.value;
      o.payload = function() {
        return c(h);
      }, o.callback = function() {
        sc(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      sc(n, r), typeof c != "function" && (Ja === null ? Ja = /* @__PURE__ */ new Set([this]) : Ja.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), o;
  }
  function cc(n, r, o) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new Iv();
      var h = /* @__PURE__ */ new Set();
      c.set(r, h);
    } else
      h = c.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), c.set(r, h));
    h.has(o) || (h.add(o), n = Jg.bind(null, n, r, o), r.then(n, n));
  }
  function qv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ep(n, r, o, c, h) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = h, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = mn(-1, 1), r.tag = 2, Xo(o, r, 1))), o.lanes |= 1), n);
  }
  var Qv = Be.ReactCurrentOwner, ca = !1;
  function Wn(n, r, o, c) {
    r.child = n === null ? Bv(r, null, o, c) : Mu(r, n.child, o, c);
  }
  function Fu(n, r, o, c, h) {
    o = o.render;
    var m = r.ref;
    return Bn(r, h), c = Fl(n, r, o, c, m, h), o = Zo(), n !== null && !ca ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Yn(n, r, h)) : (bn && o && cf(r), r.flags |= 1, Wn(n, r, c, h), r.child);
  }
  function nl(n, r, o, c, h) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !Mp(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, Nf(n, r, m, c, h)) : (n = Qf(o.type, null, c, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & h)) {
      var _ = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : _u, o(_, c) && n.ref === r.ref)
        return Yn(n, r, h);
    }
    return r.flags |= 1, n = il(m, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Nf(n, r, o, c, h) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (_u(m, c) && n.ref === r.ref)
        if (ca = !1, r.pendingProps = c = m, (n.lanes & h) !== 0)
          n.flags & 131072 && (ca = !0);
        else
          return r.lanes = n.lanes, Yn(n, r, h);
    }
    return xt(n, r, o, c, h);
  }
  function fa(n, r, o) {
    var c = r.pendingProps, h = c.children, m = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, It(Gu, da), da |= o;
      else {
        if (!(o & 1073741824))
          return n = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, It(Gu, da), da |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = m !== null ? m.baseLanes : o, It(Gu, da), da |= c;
      }
    else
      m !== null ? (c = m.baseLanes | o, r.memoizedState = null) : c = o, It(Gu, da), da |= c;
    return Wn(n, r, h, o), r.child;
  }
  function Wl(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function xt(n, r, o, c, h) {
    var m = Zn(o) ? Fr : sr.current;
    return m = ka(r, m), Bn(r, h), o = Fl(n, r, o, c, m, h), c = Zo(), n !== null && !ca ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Yn(n, r, h)) : (bn && c && cf(r), r.flags |= 1, Wn(n, r, o, h), r.child);
  }
  function fc(n, r, o, c, h) {
    if (Zn(o)) {
      var m = !0;
      Ll(r);
    } else
      m = !1;
    if (Bn(r, h), r.stateNode === null)
      pc(n, r), Pv(r, o, c), hp(r, o, c, h), c = !0;
    else if (n === null) {
      var _ = r.stateNode, N = r.memoizedProps;
      _.props = N;
      var P = _.context, te = o.contextType;
      typeof te == "object" && te !== null ? te = Oe(te) : (te = Zn(o) ? Fr : sr.current, te = ka(r, te));
      var ye = o.getDerivedStateFromProps, ge = typeof ye == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      ge || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (N !== c || P !== te) && Fv(r, _, c, te), Ko = !1;
      var he = r.memoizedState;
      _.state = he, Zs(r, c, _, h), P = r.memoizedState, N !== c || he !== P || bt.current || Ko ? (typeof ye == "function" && (pp(r, o, ye, c), P = r.memoizedState), (N = Ko || jv(r, o, N, c, he, P, te)) ? (ge || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = P), _.props = c, _.state = P, _.context = te, c = N) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      _ = r.stateNode, zv(n, r), N = r.memoizedProps, te = r.type === r.elementType ? N : la(r.type, N), _.props = te, ge = r.pendingProps, he = _.context, P = o.contextType, typeof P == "object" && P !== null ? P = Oe(P) : (P = Zn(o) ? Fr : sr.current, P = ka(r, P));
      var Ie = o.getDerivedStateFromProps;
      (ye = typeof Ie == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (N !== ge || he !== P) && Fv(r, _, c, P), Ko = !1, he = r.memoizedState, _.state = he, Zs(r, c, _, h);
      var Xe = r.memoizedState;
      N !== ge || he !== Xe || bt.current || Ko ? (typeof Ie == "function" && (pp(r, o, Ie, c), Xe = r.memoizedState), (te = Ko || jv(r, o, te, c, he, Xe, P) || !1) ? (ye || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(c, Xe, P), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(c, Xe, P)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || N === n.memoizedProps && he === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && he === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = Xe), _.props = c, _.state = Xe, _.context = P, c = te) : (typeof _.componentDidUpdate != "function" || N === n.memoizedProps && he === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && he === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return Af(n, r, o, c, m, h);
  }
  function Af(n, r, o, c, h, m) {
    Wl(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!c && !_)
      return h && Nv(r, o, !1), Yn(n, r, m);
    c = r.stateNode, Qv.current = r;
    var N = _ && typeof o.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && _ ? (r.child = Mu(r, n.child, null, m), r.child = Mu(r, null, N, m)) : Wn(n, r, N, m), r.memoizedState = c.state, h && Nv(r, o, !0), r.child;
  }
  function Vg(n) {
    var r = n.stateNode;
    r.pendingContext ? Ni(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ni(n, r.context, !1), vp(n, r.containerInfo);
  }
  function Gv(n, r, o, c, h) {
    return ku(), er(h), r.flags |= 256, Wn(n, r, o, c), r.child;
  }
  var dc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Kv(n, r, o) {
    var c = r.pendingProps, h = at.current, m = !1, _ = (r.flags & 128) !== 0, N;
    if ((N = _) || (N = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), N ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), It(at, h & 1), n === null)
      return df(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (_ = c.children, n = c.fallback, m ? (c = r.mode, m = r.child, _ = { mode: "hidden", children: _ }, !(c & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = _) : m = Gf(_, c, 0, null), n = Jl(n, c, o, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = Yl(o), r.memoizedState = dc, n) : Mf(r, _));
    if (h = n.memoizedState, h !== null && (N = h.dehydrated, N !== null))
      return bp(n, r, _, c, N, h, o);
    if (m) {
      m = c.fallback, _ = r.mode, h = n.child, N = h.sibling;
      var P = { mode: "hidden", children: c.children };
      return !(_ & 1) && r.child !== h ? (c = r.child, c.childLanes = 0, c.pendingProps = P, r.deletions = null) : (c = il(h, P), c.subtreeFlags = h.subtreeFlags & 14680064), N !== null ? m = il(N, m) : (m = Jl(m, _, o, null), m.flags |= 2), m.return = r, c.return = r, c.sibling = m, r.child = c, c = m, m = r.child, _ = n.child.memoizedState, _ = _ === null ? Yl(o) : { baseLanes: _.baseLanes | o, cachePool: null, transitions: _.transitions }, m.memoizedState = _, m.childLanes = n.childLanes & ~o, r.memoizedState = dc, c;
    }
    return m = n.child, n = m.sibling, c = il(m, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = o), c.return = r, c.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function Mf(n, r) {
    return r = Gf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Lf(n, r, o, c) {
    return c !== null && er(c), Mu(r, n.child, null, o), n = Mf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function bp(n, r, o, c, h, m, _) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, c = Sp(Error(f(422))), Lf(n, r, _, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = c.fallback, h = r.mode, c = Gf({ mode: "visible", children: c.children }, h, 0, null), m = Jl(m, h, _, null), m.flags |= 2, c.return = r, m.return = r, c.sibling = m, r.child = c, r.mode & 1 && Mu(r, n.child, null, _), r.child.memoizedState = Yl(_), r.memoizedState = dc, m);
    if (!(r.mode & 1))
      return Lf(n, r, _, null);
    if (h.data === "$!") {
      if (c = h.nextSibling && h.nextSibling.dataset, c)
        var N = c.dgst;
      return c = N, m = Error(f(419)), c = Sp(m, c, void 0), Lf(n, r, _, c);
    }
    if (N = (_ & n.childLanes) !== 0, ca || N) {
      if (c = Fn, c !== null) {
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
        h = h & (c.suspendedLanes | _) ? 0 : h, h !== 0 && h !== m.retryLane && (m.retryLane = h, co(n, h), Dn(c, n, h, -1));
      }
      return gc(), c = Sp(Error(f(421))), Lf(n, r, _, c);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ap.bind(null, n), h._reactRetry = r, null) : (n = m.treeContext, Da = Ra(h.nextSibling), Oa = r, bn = !0, qa = null, n !== null && (aa[ia++] = oa, aa[ia++] = yr, aa[ia++] = yi, oa = n.id, yr = n.overflow, yi = r), r = Mf(r, c.children), r.flags |= 4096, r);
  }
  function Xv(n, r, o) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), Go(n.return, r, o);
  }
  function zf(n, r, o, c, h) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: o, tailMode: h } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = o, m.tailMode = h);
  }
  function wp(n, r, o) {
    var c = r.pendingProps, h = c.revealOrder, m = c.tail;
    if (Wn(n, r, c.children, o), c = at.current, c & 2)
      c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Xv(n, o, r);
            else if (n.tag === 19)
              Xv(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      c &= 1;
    }
    if (It(at, c), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (h) {
        case "forwards":
          for (o = r.child, h = null; o !== null; )
            n = o.alternate, n !== null && Bt(n) === null && (h = o), o = o.sibling;
          o = h, o === null ? (h = r.child, r.child = null) : (h = o.sibling, o.sibling = null), zf(r, !1, h, o, m);
          break;
        case "backwards":
          for (o = null, h = r.child, r.child = null; h !== null; ) {
            if (n = h.alternate, n !== null && Bt(n) === null) {
              r.child = h;
              break;
            }
            n = h.sibling, h.sibling = o, o = h, h = n;
          }
          zf(r, !0, o, null, m);
          break;
        case "together":
          zf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function pc(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Yn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ql |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(f(153));
    if (r.child !== null) {
      for (n = r.child, o = il(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = il(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function po(n, r, o) {
    switch (r.tag) {
      case 3:
        Vg(r), ku();
        break;
      case 5:
        mf(r);
        break;
      case 1:
        Zn(r.type) && Ll(r);
        break;
      case 4:
        vp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var c = r.type._context, h = r.memoizedProps.value;
        It(Ou, c._currentValue), c._currentValue = h;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (It(at, at.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Kv(n, r, o) : (It(at, at.current & 1), n = Yn(n, r, o), n !== null ? n.sibling : null);
        It(at, at.current & 1);
        break;
      case 19:
        if (c = (o & r.childLanes) !== 0, n.flags & 128) {
          if (c)
            return wp(n, r, o);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), It(at, at.current), c)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, fa(n, r, o);
    }
    return Yn(n, r, o);
  }
  var Ui, Hu, $u, Ka;
  Ui = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Hu = function() {
  }, $u = function(n, r, o, c) {
    var h = n.memoizedProps;
    if (h !== c) {
      n = r.stateNode, Jo(Li.current);
      var m = null;
      switch (o) {
        case "input":
          h = $t(n, h), c = $t(n, c), m = [];
          break;
        case "select":
          h = L({}, h, { value: void 0 }), c = L({}, c, { value: void 0 }), m = [];
          break;
        case "textarea":
          h = Sa(n, h), c = Sa(n, c), m = [];
          break;
        default:
          typeof h.onClick != "function" && typeof c.onClick == "function" && (n.onclick = lf);
      }
      Vt(o, c);
      var _;
      o = null;
      for (te in h)
        if (!c.hasOwnProperty(te) && h.hasOwnProperty(te) && h[te] != null)
          if (te === "style") {
            var N = h[te];
            for (_ in N)
              N.hasOwnProperty(_) && (o || (o = {}), o[_] = "");
          } else
            te !== "dangerouslySetInnerHTML" && te !== "children" && te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && te !== "autoFocus" && (g.hasOwnProperty(te) ? m || (m = []) : (m = m || []).push(te, null));
      for (te in c) {
        var P = c[te];
        if (N = h != null ? h[te] : void 0, c.hasOwnProperty(te) && P !== N && (P != null || N != null))
          if (te === "style")
            if (N) {
              for (_ in N)
                !N.hasOwnProperty(_) || P && P.hasOwnProperty(_) || (o || (o = {}), o[_] = "");
              for (_ in P)
                P.hasOwnProperty(_) && N[_] !== P[_] && (o || (o = {}), o[_] = P[_]);
            } else
              o || (m || (m = []), m.push(
                te,
                o
              )), o = P;
          else
            te === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, N = N ? N.__html : void 0, P != null && N !== P && (m = m || []).push(te, P)) : te === "children" ? typeof P != "string" && typeof P != "number" || (m = m || []).push(te, "" + P) : te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && (g.hasOwnProperty(te) ? (P != null && te === "onScroll" && sn("scroll", n), m || N === P || (m = [])) : (m = m || []).push(te, P));
      }
      o && (m = m || []).push("style", o);
      var te = m;
      (r.updateQueue = te) && (r.flags |= 4);
    }
  }, Ka = function(n, r, o, c) {
    o !== c && (r.flags |= 4);
  };
  function Pn(n, r) {
    if (!bn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var c = null; o !== null; )
            o.alternate !== null && (c = o), o = o.sibling;
          c === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
      }
  }
  function Lr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, c = 0;
    if (r)
      for (var h = n.child; h !== null; )
        o |= h.lanes | h.childLanes, c |= h.subtreeFlags & 14680064, c |= h.flags & 14680064, h.return = n, h = h.sibling;
    else
      for (h = n.child; h !== null; )
        o |= h.lanes | h.childLanes, c |= h.subtreeFlags, c |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= c, n.childLanes = o, r;
  }
  function Ig(n, r, o) {
    var c = r.pendingProps;
    switch (ff(r), r.tag) {
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
        return Lr(r), null;
      case 1:
        return Zn(r.type) && ra(), Lr(r), null;
      case 3:
        return c = r.stateNode, zu(), nt(bt), nt(sr), Qa(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (pf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, qa !== null && (Op(qa), qa = null))), Hu(n, r), Lr(r), null;
      case 5:
        ct(r);
        var h = Jo(nc.current);
        if (o = r.type, n !== null && r.stateNode != null)
          $u(n, r, o, c, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!c) {
            if (r.stateNode === null)
              throw Error(f(166));
            return Lr(r), null;
          }
          if (n = Jo(Li.current), pf(r)) {
            c = r.stateNode, o = r.type;
            var m = r.memoizedProps;
            switch (c[Va] = r, c[Xs] = m, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                sn("cancel", c), sn("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                sn("load", c);
                break;
              case "video":
              case "audio":
                for (h = 0; h < io.length; h++)
                  sn(io[h], c);
                break;
              case "source":
                sn("error", c);
                break;
              case "img":
              case "image":
              case "link":
                sn(
                  "error",
                  c
                ), sn("load", c);
                break;
              case "details":
                sn("toggle", c);
                break;
              case "input":
                Mn(c, m), sn("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!m.multiple }, sn("invalid", c);
                break;
              case "textarea":
                Ea(c, m), sn("invalid", c);
            }
            Vt(o, m), h = null;
            for (var _ in m)
              if (m.hasOwnProperty(_)) {
                var N = m[_];
                _ === "children" ? typeof N == "string" ? c.textContent !== N && (m.suppressHydrationWarning !== !0 && qs(c.textContent, N, n), h = ["children", N]) : typeof N == "number" && c.textContent !== "" + N && (m.suppressHydrationWarning !== !0 && qs(
                  c.textContent,
                  N,
                  n
                ), h = ["children", "" + N]) : g.hasOwnProperty(_) && N != null && _ === "onScroll" && sn("scroll", c);
              }
            switch (o) {
              case "input":
                vt(c), Xn(c, m, !0);
                break;
              case "textarea":
                vt(c), ba(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (c.onclick = lf);
            }
            c = h, r.updateQueue = c, c !== null && (r.flags |= 4);
          } else {
            _ = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = hr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = _.createElement(o, { is: c.is }) : (n = _.createElement(o), o === "select" && (_ = n, c.multiple ? _.multiple = !0 : c.size && (_.size = c.size))) : n = _.createElementNS(n, o), n[Va] = r, n[Xs] = c, Ui(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (_ = $n(o, c), o) {
                case "dialog":
                  sn("cancel", n), sn("close", n), h = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  sn("load", n), h = c;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < io.length; h++)
                    sn(io[h], n);
                  h = c;
                  break;
                case "source":
                  sn("error", n), h = c;
                  break;
                case "img":
                case "image":
                case "link":
                  sn(
                    "error",
                    n
                  ), sn("load", n), h = c;
                  break;
                case "details":
                  sn("toggle", n), h = c;
                  break;
                case "input":
                  Mn(n, c), h = $t(n, c), sn("invalid", n);
                  break;
                case "option":
                  h = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, h = L({}, c, { value: void 0 }), sn("invalid", n);
                  break;
                case "textarea":
                  Ea(n, c), h = Sa(n, c), sn("invalid", n);
                  break;
                default:
                  h = c;
              }
              Vt(o, h), N = h;
              for (m in N)
                if (N.hasOwnProperty(m)) {
                  var P = N[m];
                  m === "style" ? kt(n, P) : m === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && wa(n, P)) : m === "children" ? typeof P == "string" ? (o !== "textarea" || P !== "") && Ca(n, P) : typeof P == "number" && Ca(n, "" + P) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (g.hasOwnProperty(m) ? P != null && m === "onScroll" && sn("scroll", n) : P != null && ze(n, m, P, _));
                }
              switch (o) {
                case "input":
                  vt(n), Xn(n, c, !1);
                  break;
                case "textarea":
                  vt(n), ba(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + Ae(c.value));
                  break;
                case "select":
                  n.multiple = !!c.multiple, m = c.value, m != null ? nr(n, !!c.multiple, m, !1) : c.defaultValue != null && nr(
                    n,
                    !!c.multiple,
                    c.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = lf);
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
        return Lr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Ka(n, r, n.memoizedProps, c);
        else {
          if (typeof c != "string" && r.stateNode === null)
            throw Error(f(166));
          if (o = Jo(nc.current), Jo(Li.current), pf(r)) {
            if (c = r.stateNode, o = r.memoizedProps, c[Va] = r, (m = c.nodeValue !== o) && (n = Oa, n !== null))
              switch (n.tag) {
                case 3:
                  qs(c.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && qs(c.nodeValue, o, (n.mode & 1) !== 0);
              }
            m && (r.flags |= 4);
          } else
            c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c), c[Va] = r, r.stateNode = c;
        }
        return Lr(r), null;
      case 13:
        if (nt(at), c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (bn && Da !== null && r.mode & 1 && !(r.flags & 128))
            Mv(), ku(), r.flags |= 98560, m = !1;
          else if (m = pf(r), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!m)
                throw Error(f(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m)
                throw Error(f(317));
              m[Va] = r;
            } else
              ku(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Lr(r), m = !1;
          } else
            qa !== null && (Op(qa), qa = null), m = !0;
          if (!m)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (r.child.flags |= 8192, r.mode & 1 && (n === null || at.current & 1 ? ar === 0 && (ar = 3) : gc())), r.updateQueue !== null && (r.flags |= 4), Lr(r), null);
      case 4:
        return zu(), Hu(n, r), n === null && Oi(r.stateNode.containerInfo), Lr(r), null;
      case 10:
        return fp(r.type._context), Lr(r), null;
      case 17:
        return Zn(r.type) && ra(), Lr(r), null;
      case 19:
        if (nt(at), m = r.memoizedState, m === null)
          return Lr(r), null;
        if (c = (r.flags & 128) !== 0, _ = m.rendering, _ === null)
          if (c)
            Pn(m, !1);
          else {
            if (ar !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (_ = Bt(n), _ !== null) {
                  for (r.flags |= 128, Pn(m, !1), c = _.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = o, o = r.child; o !== null; )
                    m = o, n = c, m.flags &= 14680066, _ = m.alternate, _ === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = _.childLanes, m.lanes = _.lanes, m.child = _.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = _.memoizedProps, m.memoizedState = _.memoizedState, m.updateQueue = _.updateQueue, m.type = _.type, n = _.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return It(at, at.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            m.tail !== null && vn() > Xu && (r.flags |= 128, c = !0, Pn(m, !1), r.lanes = 4194304);
          }
        else {
          if (!c)
            if (n = Bt(_), n !== null) {
              if (r.flags |= 128, c = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Pn(m, !0), m.tail === null && m.tailMode === "hidden" && !_.alternate && !bn)
                return Lr(r), null;
            } else
              2 * vn() - m.renderingStartTime > Xu && o !== 1073741824 && (r.flags |= 128, c = !0, Pn(m, !1), r.lanes = 4194304);
          m.isBackwards ? (_.sibling = r.child, r.child = _) : (o = m.last, o !== null ? o.sibling = _ : r.child = _, m.last = _);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = vn(), r.sibling = null, o = at.current, It(at, c ? o & 1 | 2 : o & 1), r) : (Lr(r), null);
      case 22:
      case 23:
        return Yf(), c = r.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (r.flags |= 8192), c && r.mode & 1 ? da & 1073741824 && (Lr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Lr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, r.tag));
  }
  function Wg(n, r) {
    switch (ff(r), r.tag) {
      case 1:
        return Zn(r.type) && ra(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return zu(), nt(bt), nt(sr), Qa(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ct(r), null;
      case 13:
        if (nt(at), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(f(340));
          ku();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return nt(at), null;
      case 4:
        return zu(), null;
      case 10:
        return fp(r.type._context), null;
      case 22:
      case 23:
        return Yf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bu = !1, gr = !1, Uf = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
  function Vu(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (c) {
          Hn(n, r, c);
        }
      else
        o.current = null;
  }
  function Cp(n, r, o) {
    try {
      o();
    } catch (c) {
      Hn(n, r, c);
    }
  }
  var jf = !1;
  function Yg(n, r) {
    if (ep = gu, n = Sv(), $s(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var c = o.getSelection && o.getSelection();
          if (c && c.rangeCount !== 0) {
            o = c.anchorNode;
            var h = c.anchorOffset, m = c.focusNode;
            c = c.focusOffset;
            try {
              o.nodeType, m.nodeType;
            } catch {
              o = null;
              break e;
            }
            var _ = 0, N = -1, P = -1, te = 0, ye = 0, ge = n, he = null;
            t:
              for (; ; ) {
                for (var Ie; ge !== o || h !== 0 && ge.nodeType !== 3 || (N = _ + h), ge !== m || c !== 0 && ge.nodeType !== 3 || (P = _ + c), ge.nodeType === 3 && (_ += ge.nodeValue.length), (Ie = ge.firstChild) !== null; )
                  he = ge, ge = Ie;
                for (; ; ) {
                  if (ge === n)
                    break t;
                  if (he === o && ++te === h && (N = _), he === m && ++ye === c && (P = _), (Ie = ge.nextSibling) !== null)
                    break;
                  ge = he, he = ge.parentNode;
                }
                ge = Ie;
              }
            o = N === -1 || P === -1 ? null : { start: N, end: P };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (tp = { focusedElem: n, selectionRange: o }, gu = !1, Ge = r; Ge !== null; )
      if (r = Ge, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ge = n;
      else
        for (; Ge !== null; ) {
          r = Ge;
          try {
            var Xe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Xe !== null) {
                    var tt = Xe.memoizedProps, qn = Xe.memoizedState, W = r.stateNode, H = W.getSnapshotBeforeUpdate(r.elementType === r.type ? tt : la(r.type, tt), qn);
                    W.__reactInternalSnapshotBeforeUpdate = H;
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
          } catch (_e) {
            Hn(r, r.return, _e);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ge = n;
            break;
          }
          Ge = r.return;
        }
    return Xe = jf, jf = !1, Xe;
  }
  function Iu(n, r, o) {
    var c = r.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var h = c = c.next;
      do {
        if ((h.tag & n) === n) {
          var m = h.destroy;
          h.destroy = void 0, m !== void 0 && Cp(r, o, m);
        }
        h = h.next;
      } while (h !== c);
    }
  }
  function Pf(n, r) {
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
  function Ff(n) {
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
  function Jv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Jv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Va], delete r[Xs], delete r[ip], delete r[jg], delete r[Pg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function _p(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Zv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || _p(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function hc(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = lf));
    else if (c !== 4 && (n = n.child, n !== null))
      for (hc(n, r, o), n = n.sibling; n !== null; )
        hc(n, r, o), n = n.sibling;
  }
  function Wu(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null))
      for (Wu(n, r, o), n = n.sibling; n !== null; )
        Wu(n, r, o), n = n.sibling;
  }
  var xn = null, cr = !1;
  function Hr(n, r, o) {
    for (o = o.child; o !== null; )
      Yu(n, r, o), o = o.sibling;
  }
  function Yu(n, r, o) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function")
      try {
        Zr.onCommitFiberUnmount(zo, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        gr || Vu(o, r);
      case 6:
        var c = xn, h = cr;
        xn = null, Hr(n, r, o), xn = c, cr = h, xn !== null && (cr ? (n = xn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : xn.removeChild(o.stateNode));
        break;
      case 18:
        xn !== null && (cr ? (n = xn, o = o.stateNode, n.nodeType === 8 ? ap(n.parentNode, o) : n.nodeType === 1 && ap(n, o), Ba(n)) : ap(xn, o.stateNode));
        break;
      case 4:
        c = xn, h = cr, xn = o.stateNode.containerInfo, cr = !0, Hr(n, r, o), xn = c, cr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!gr && (c = o.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          h = c = c.next;
          do {
            var m = h, _ = m.destroy;
            m = m.tag, _ !== void 0 && (m & 2 || m & 4) && Cp(o, r, _), h = h.next;
          } while (h !== c);
        }
        Hr(n, r, o);
        break;
      case 1:
        if (!gr && (Vu(o, r), c = o.stateNode, typeof c.componentWillUnmount == "function"))
          try {
            c.props = o.memoizedProps, c.state = o.memoizedState, c.componentWillUnmount();
          } catch (N) {
            Hn(o, r, N);
          }
        Hr(n, r, o);
        break;
      case 21:
        Hr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (gr = (c = gr) || o.memoizedState !== null, Hr(n, r, o), gr = c) : Hr(n, r, o);
        break;
      default:
        Hr(n, r, o);
    }
  }
  function qu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Uf()), r.forEach(function(c) {
        var h = Zg.bind(null, n, c);
        o.has(c) || (o.add(c), c.then(h, h));
      });
    }
  }
  function fr(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var c = 0; c < o.length; c++) {
        var h = o[c];
        try {
          var m = n, _ = r, N = _;
          e:
            for (; N !== null; ) {
              switch (N.tag) {
                case 5:
                  xn = N.stateNode, cr = !1;
                  break e;
                case 3:
                  xn = N.stateNode.containerInfo, cr = !0;
                  break e;
                case 4:
                  xn = N.stateNode.containerInfo, cr = !0;
                  break e;
              }
              N = N.return;
            }
          if (xn === null)
            throw Error(f(160));
          Yu(m, _, h), xn = null, cr = !1;
          var P = h.alternate;
          P !== null && (P.return = null), h.return = null;
        } catch (te) {
          Hn(h, r, te);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        em(r, n), r = r.sibling;
  }
  function em(n, r) {
    var o = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fr(r, n), ji(n), c & 4) {
          try {
            Iu(3, n, n.return), Pf(3, n);
          } catch (tt) {
            Hn(n, n.return, tt);
          }
          try {
            Iu(5, n, n.return);
          } catch (tt) {
            Hn(n, n.return, tt);
          }
        }
        break;
      case 1:
        fr(r, n), ji(n), c & 512 && o !== null && Vu(o, o.return);
        break;
      case 5:
        if (fr(r, n), ji(n), c & 512 && o !== null && Vu(o, o.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            Ca(h, "");
          } catch (tt) {
            Hn(n, n.return, tt);
          }
        }
        if (c & 4 && (h = n.stateNode, h != null)) {
          var m = n.memoizedProps, _ = o !== null ? o.memoizedProps : m, N = n.type, P = n.updateQueue;
          if (n.updateQueue = null, P !== null)
            try {
              N === "input" && m.type === "radio" && m.name != null && Ln(h, m), $n(N, _);
              var te = $n(N, m);
              for (_ = 0; _ < P.length; _ += 2) {
                var ye = P[_], ge = P[_ + 1];
                ye === "style" ? kt(h, ge) : ye === "dangerouslySetInnerHTML" ? wa(h, ge) : ye === "children" ? Ca(h, ge) : ze(h, ye, ge, te);
              }
              switch (N) {
                case "input":
                  Kn(h, m);
                  break;
                case "textarea":
                  Or(h, m);
                  break;
                case "select":
                  var he = h._wrapperState.wasMultiple;
                  h._wrapperState.wasMultiple = !!m.multiple;
                  var Ie = m.value;
                  Ie != null ? nr(h, !!m.multiple, Ie, !1) : he !== !!m.multiple && (m.defaultValue != null ? nr(
                    h,
                    !!m.multiple,
                    m.defaultValue,
                    !0
                  ) : nr(h, !!m.multiple, m.multiple ? [] : "", !1));
              }
              h[Xs] = m;
            } catch (tt) {
              Hn(n, n.return, tt);
            }
        }
        break;
      case 6:
        if (fr(r, n), ji(n), c & 4) {
          if (n.stateNode === null)
            throw Error(f(162));
          h = n.stateNode, m = n.memoizedProps;
          try {
            h.nodeValue = m;
          } catch (tt) {
            Hn(n, n.return, tt);
          }
        }
        break;
      case 3:
        if (fr(r, n), ji(n), c & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Ba(r.containerInfo);
          } catch (tt) {
            Hn(n, n.return, tt);
          }
        break;
      case 4:
        fr(r, n), ji(n);
        break;
      case 13:
        fr(r, n), ji(n), h = n.child, h.flags & 8192 && (m = h.memoizedState !== null, h.stateNode.isHidden = m, !m || h.alternate !== null && h.alternate.memoizedState !== null || ($f = vn())), c & 4 && qu(n);
        break;
      case 22:
        if (ye = o !== null && o.memoizedState !== null, n.mode & 1 ? (gr = (te = gr) || ye, fr(r, n), gr = te) : fr(r, n), ji(n), c & 8192) {
          if (te = n.memoizedState !== null, (n.stateNode.isHidden = te) && !ye && n.mode & 1)
            for (Ge = n, ye = n.child; ye !== null; ) {
              for (ge = Ge = ye; Ge !== null; ) {
                switch (he = Ge, Ie = he.child, he.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Iu(4, he, he.return);
                    break;
                  case 1:
                    Vu(he, he.return);
                    var Xe = he.stateNode;
                    if (typeof Xe.componentWillUnmount == "function") {
                      c = he, o = he.return;
                      try {
                        r = c, Xe.props = r.memoizedProps, Xe.state = r.memoizedState, Xe.componentWillUnmount();
                      } catch (tt) {
                        Hn(c, o, tt);
                      }
                    }
                    break;
                  case 5:
                    Vu(he, he.return);
                    break;
                  case 22:
                    if (he.memoizedState !== null) {
                      tm(ge);
                      continue;
                    }
                }
                Ie !== null ? (Ie.return = he, Ge = Ie) : tm(ge);
              }
              ye = ye.sibling;
            }
          e:
            for (ye = null, ge = n; ; ) {
              if (ge.tag === 5) {
                if (ye === null) {
                  ye = ge;
                  try {
                    h = ge.stateNode, te ? (m = h.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (N = ge.stateNode, P = ge.memoizedProps.style, _ = P != null && P.hasOwnProperty("display") ? P.display : null, N.style.display = lt("display", _));
                  } catch (tt) {
                    Hn(n, n.return, tt);
                  }
                }
              } else if (ge.tag === 6) {
                if (ye === null)
                  try {
                    ge.stateNode.nodeValue = te ? "" : ge.memoizedProps;
                  } catch (tt) {
                    Hn(n, n.return, tt);
                  }
              } else if ((ge.tag !== 22 && ge.tag !== 23 || ge.memoizedState === null || ge === n) && ge.child !== null) {
                ge.child.return = ge, ge = ge.child;
                continue;
              }
              if (ge === n)
                break e;
              for (; ge.sibling === null; ) {
                if (ge.return === null || ge.return === n)
                  break e;
                ye === ge && (ye = null), ge = ge.return;
              }
              ye === ge && (ye = null), ge.sibling.return = ge.return, ge = ge.sibling;
            }
        }
        break;
      case 19:
        fr(r, n), ji(n), c & 4 && qu(n);
        break;
      case 21:
        break;
      default:
        fr(
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
            if (_p(o)) {
              var c = o;
              break e;
            }
            o = o.return;
          }
          throw Error(f(160));
        }
        switch (c.tag) {
          case 5:
            var h = c.stateNode;
            c.flags & 32 && (Ca(h, ""), c.flags &= -33);
            var m = Zv(n);
            Wu(n, m, h);
            break;
          case 3:
          case 4:
            var _ = c.stateNode.containerInfo, N = Zv(n);
            hc(n, N, _);
            break;
          default:
            throw Error(f(161));
        }
      } catch (P) {
        Hn(n, n.return, P);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function qg(n, r, o) {
    Ge = n, xp(n);
  }
  function xp(n, r, o) {
    for (var c = (n.mode & 1) !== 0; Ge !== null; ) {
      var h = Ge, m = h.child;
      if (h.tag === 22 && c) {
        var _ = h.memoizedState !== null || Bu;
        if (!_) {
          var N = h.alternate, P = N !== null && N.memoizedState !== null || gr;
          N = Bu;
          var te = gr;
          if (Bu = _, (gr = P) && !te)
            for (Ge = h; Ge !== null; )
              _ = Ge, P = _.child, _.tag === 22 && _.memoizedState !== null ? Tp(h) : P !== null ? (P.return = _, Ge = P) : Tp(h);
          for (; m !== null; )
            Ge = m, xp(m), m = m.sibling;
          Ge = h, Bu = N, gr = te;
        }
        Qu(n);
      } else
        h.subtreeFlags & 8772 && m !== null ? (m.return = h, Ge = m) : Qu(n);
    }
  }
  function Qu(n) {
    for (; Ge !== null; ) {
      var r = Ge;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                gr || Pf(5, r);
                break;
              case 1:
                var c = r.stateNode;
                if (r.flags & 4 && !gr)
                  if (o === null)
                    c.componentDidMount();
                  else {
                    var h = r.elementType === r.type ? o.memoizedProps : la(r.type, o.memoizedProps);
                    c.componentDidUpdate(h, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                  }
                var m = r.updateQueue;
                m !== null && Nu(r, m, c);
                break;
              case 3:
                var _ = r.updateQueue;
                if (_ !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Nu(r, _, o);
                }
                break;
              case 5:
                var N = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = N;
                  var P = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      P.autoFocus && o.focus();
                      break;
                    case "img":
                      P.src && (o.src = P.src);
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
                  var te = r.alternate;
                  if (te !== null) {
                    var ye = te.memoizedState;
                    if (ye !== null) {
                      var ge = ye.dehydrated;
                      ge !== null && Ba(ge);
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
          gr || r.flags & 512 && Ff(r);
        } catch (he) {
          Hn(r, r.return, he);
        }
      }
      if (r === n) {
        Ge = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ge = o;
        break;
      }
      Ge = r.return;
    }
  }
  function tm(n) {
    for (; Ge !== null; ) {
      var r = Ge;
      if (r === n) {
        Ge = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ge = o;
        break;
      }
      Ge = r.return;
    }
  }
  function Tp(n) {
    for (; Ge !== null; ) {
      var r = Ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Pf(4, r);
            } catch (P) {
              Hn(r, o, P);
            }
            break;
          case 1:
            var c = r.stateNode;
            if (typeof c.componentDidMount == "function") {
              var h = r.return;
              try {
                c.componentDidMount();
              } catch (P) {
                Hn(r, h, P);
              }
            }
            var m = r.return;
            try {
              Ff(r);
            } catch (P) {
              Hn(r, m, P);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              Ff(r);
            } catch (P) {
              Hn(r, _, P);
            }
        }
      } catch (P) {
        Hn(r, r.return, P);
      }
      if (r === n) {
        Ge = null;
        break;
      }
      var N = r.sibling;
      if (N !== null) {
        N.return = r.return, Ge = N;
        break;
      }
      Ge = r.return;
    }
  }
  var Qg = Math.ceil, ql = Be.ReactCurrentDispatcher, Hf = Be.ReactCurrentOwner, Xa = Be.ReactCurrentBatchConfig, At = 0, Fn = null, wn = null, rr = 0, da = 0, Gu = cn(0), ar = 0, vc = null, Ql = 0, Ku = 0, Rp = 0, rl = null, zr = null, $f = 0, Xu = 1 / 0, ho = null, Bf = !1, kp = null, Ja = null, Ju = !1, Za = null, Vf = 0, mc = 0, If = null, yc = -1, Gl = 0;
  function dr() {
    return At & 6 ? vn() : yc !== -1 ? yc : yc = vn();
  }
  function vo(n) {
    return n.mode & 1 ? At & 2 && rr !== 0 ? rr & -rr : Fg.transition !== null ? (Gl === 0 && (Gl = xl()), Gl) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ms(n.type)), n) : 1;
  }
  function Dn(n, r, o, c) {
    if (50 < mc)
      throw mc = 0, If = null, Error(f(185));
    jo(n, o, c), (!(At & 2) || n !== Fn) && (n === Fn && (!(At & 2) && (Ku |= o), ar === 4 && Pi(n, rr)), ir(n, c), o === 1 && At === 0 && !(r.mode & 1) && (Xu = vn() + 500, Yo && Ai()));
  }
  function ir(n, r) {
    var o = n.callbackNode;
    Uo(n, r);
    var c = Ti(n, n === Fn ? rr : 0);
    if (c === 0)
      o !== null && hn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (o != null && hn(o), r === 1)
        n.tag === 0 ? Av(Zu.bind(null, n)) : sf(Zu.bind(null, n)), Dv(function() {
          !(At & 6) && Ai();
        }), o = null;
      else {
        switch (Ds(c)) {
          case 1:
            o = Cs;
            break;
          case 4:
            o = xi;
            break;
          case 16:
            o = Ot;
            break;
          case 536870912:
            o = Ki;
            break;
          default:
            o = Ot;
        }
        o = sm(o, Wf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Wf(n, r) {
    if (yc = -1, Gl = 0, At & 6)
      throw Error(f(327));
    var o = n.callbackNode;
    if (es() && n.callbackNode !== o)
      return null;
    var c = Ti(n, n === Fn ? rr : 0);
    if (c === 0)
      return null;
    if (c & 30 || c & n.expiredLanes || r)
      r = qf(n, c);
    else {
      r = c;
      var h = At;
      At |= 2;
      var m = rm();
      (Fn !== n || rr !== r) && (ho = null, Xu = vn() + 500, Xl(n, r));
      do
        try {
          Kg();
          break;
        } catch (N) {
          nm(n, N);
        }
      while (!0);
      cp(), ql.current = m, At = h, wn !== null ? r = 0 : (Fn = null, rr = 0, r = ar);
    }
    if (r !== 0) {
      if (r === 2 && (h = Ri(n), h !== 0 && (c = h, r = Kl(n, h))), r === 1)
        throw o = vc, Xl(n, 0), Pi(n, c), ir(n, vn()), o;
      if (r === 6)
        Pi(n, c);
      else {
        if (h = n.current.alternate, !(c & 30) && !Dp(h) && (r = qf(n, c), r === 2 && (m = Ri(n), m !== 0 && (c = m, r = Kl(n, m))), r === 1))
          throw o = vc, Xl(n, 0), Pi(n, c), ir(n, vn()), o;
        switch (n.finishedWork = h, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            al(n, zr, ho);
            break;
          case 3:
            if (Pi(n, c), (c & 130023424) === c && (r = $f + 500 - vn(), 10 < r)) {
              if (Ti(n, 0) !== 0)
                break;
              if (h = n.suspendedLanes, (h & c) !== c) {
                dr(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = Qs(al.bind(null, n, zr, ho), r);
              break;
            }
            al(n, zr, ho);
            break;
          case 4:
            if (Pi(n, c), (c & 4194240) === c)
              break;
            for (r = n.eventTimes, h = -1; 0 < c; ) {
              var _ = 31 - Pr(c);
              m = 1 << _, _ = r[_], _ > h && (h = _), c &= ~m;
            }
            if (c = h, c = vn() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * Qg(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = Qs(al.bind(null, n, zr, ho), c);
              break;
            }
            al(n, zr, ho);
            break;
          case 5:
            al(n, zr, ho);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return ir(n, vn()), n.callbackNode === o ? Wf.bind(null, n) : null;
  }
  function Kl(n, r) {
    var o = rl;
    return n.current.memoizedState.isDehydrated && (Xl(n, r).flags |= 256), n = qf(n, r), n !== 2 && (r = zr, zr = o, r !== null && Op(r)), n;
  }
  function Op(n) {
    zr === null ? zr = n : zr.push.apply(zr, n);
  }
  function Dp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var c = 0; c < o.length; c++) {
            var h = o[c], m = h.getSnapshot;
            h = h.value;
            try {
              if (!hi(m(), h))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Pi(n, r) {
    for (r &= ~Rp, r &= ~Ku, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Pr(r), c = 1 << o;
      n[o] = -1, r &= ~c;
    }
  }
  function Zu(n) {
    if (At & 6)
      throw Error(f(327));
    es();
    var r = Ti(n, 0);
    if (!(r & 1))
      return ir(n, vn()), null;
    var o = qf(n, r);
    if (n.tag !== 0 && o === 2) {
      var c = Ri(n);
      c !== 0 && (r = c, o = Kl(n, c));
    }
    if (o === 1)
      throw o = vc, Xl(n, 0), Pi(n, r), ir(n, vn()), o;
    if (o === 6)
      throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, al(n, zr, ho), ir(n, vn()), null;
  }
  function Np(n, r) {
    var o = At;
    At |= 1;
    try {
      return n(r);
    } finally {
      At = o, At === 0 && (Xu = vn() + 500, Yo && Ai());
    }
  }
  function Fi(n) {
    Za !== null && Za.tag === 0 && !(At & 6) && es();
    var r = At;
    At |= 1;
    var o = Xa.transition, c = Lt;
    try {
      if (Xa.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = c, Xa.transition = o, At = r, !(At & 6) && Ai();
    }
  }
  function Yf() {
    da = Gu.current, nt(Gu);
  }
  function Xl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Gs(o)), wn !== null)
      for (o = wn.return; o !== null; ) {
        var c = o;
        switch (ff(c), c.tag) {
          case 1:
            c = c.type.childContextTypes, c != null && ra();
            break;
          case 3:
            zu(), nt(bt), nt(sr), Qa();
            break;
          case 5:
            ct(c);
            break;
          case 4:
            zu();
            break;
          case 13:
            nt(at);
            break;
          case 19:
            nt(at);
            break;
          case 10:
            fp(c.type._context);
            break;
          case 22:
          case 23:
            Yf();
        }
        o = o.return;
      }
    if (Fn = n, wn = n = il(n.current, null), rr = da = r, ar = 0, vc = null, Rp = Ku = Ql = 0, zr = rl = null, Mr !== null) {
      for (r = 0; r < Mr.length; r++)
        if (o = Mr[r], c = o.interleaved, c !== null) {
          o.interleaved = null;
          var h = c.next, m = o.pending;
          if (m !== null) {
            var _ = m.next;
            m.next = h, c.next = _;
          }
          o.pending = c;
        }
      Mr = null;
    }
    return n;
  }
  function nm(n, r) {
    do {
      var o = wn;
      try {
        if (cp(), rc.current = Df, In) {
          for (var c = On.memoizedState; c !== null; ) {
            var h = c.queue;
            h !== null && (h.pending = null), c = c.next;
          }
          In = !1;
        }
        if (Pl = 0, se = Vn = On = null, dt = !1, zi = 0, Hf.current = null, o === null || o.return === null) {
          ar = 1, vc = r, wn = null;
          break;
        }
        e: {
          var m = n, _ = o.return, N = o, P = r;
          if (r = rr, N.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var te = P, ye = N, ge = ye.tag;
            if (!(ye.mode & 1) && (ge === 0 || ge === 11 || ge === 15)) {
              var he = ye.alternate;
              he ? (ye.updateQueue = he.updateQueue, ye.memoizedState = he.memoizedState, ye.lanes = he.lanes) : (ye.updateQueue = null, ye.memoizedState = null);
            }
            var Ie = qv(_);
            if (Ie !== null) {
              Ie.flags &= -257, Ep(Ie, _, N, m, r), Ie.mode & 1 && cc(m, te, r), r = Ie, P = te;
              var Xe = r.updateQueue;
              if (Xe === null) {
                var tt = /* @__PURE__ */ new Set();
                tt.add(P), r.updateQueue = tt;
              } else
                Xe.add(P);
              break e;
            } else {
              if (!(r & 1)) {
                cc(m, te, r), gc();
                break e;
              }
              P = Error(f(426));
            }
          } else if (bn && N.mode & 1) {
            var qn = qv(_);
            if (qn !== null) {
              !(qn.flags & 65536) && (qn.flags |= 256), Ep(qn, _, N, m, r), er(tl(P, N));
              break e;
            }
          }
          m = P = tl(P, N), ar !== 4 && (ar = 2), rl === null ? rl = [m] : rl.push(m), m = _;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var W = Wv(m, P, r);
                Uv(m, W);
                break e;
              case 1:
                N = P;
                var H = m.type, Q = m.stateNode;
                if (!(m.flags & 128) && (typeof H.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && (Ja === null || !Ja.has(Q)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var _e = Yv(m, N, r);
                  Uv(m, _e);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        im(o);
      } catch (rt) {
        r = rt, wn === o && o !== null && (wn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rm() {
    var n = ql.current;
    return ql.current = Df, n === null ? Df : n;
  }
  function gc() {
    (ar === 0 || ar === 3 || ar === 2) && (ar = 4), Fn === null || !(Ql & 268435455) && !(Ku & 268435455) || Pi(Fn, rr);
  }
  function qf(n, r) {
    var o = At;
    At |= 2;
    var c = rm();
    (Fn !== n || rr !== r) && (ho = null, Xl(n, r));
    do
      try {
        Gg();
        break;
      } catch (h) {
        nm(n, h);
      }
    while (!0);
    if (cp(), At = o, ql.current = c, wn !== null)
      throw Error(f(261));
    return Fn = null, rr = 0, ar;
  }
  function Gg() {
    for (; wn !== null; )
      am(wn);
  }
  function Kg() {
    for (; wn !== null && !Nr(); )
      am(wn);
  }
  function am(n) {
    var r = um(n.alternate, n, da);
    n.memoizedProps = n.pendingProps, r === null ? im(n) : wn = r, Hf.current = null;
  }
  function im(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Wg(o, r), o !== null) {
          o.flags &= 32767, wn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          ar = 6, wn = null;
          return;
        }
      } else if (o = Ig(o, r, da), o !== null) {
        wn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        wn = r;
        return;
      }
      wn = r = n;
    } while (r !== null);
    ar === 0 && (ar = 5);
  }
  function al(n, r, o) {
    var c = Lt, h = Xa.transition;
    try {
      Xa.transition = null, Lt = 1, Xg(n, r, o, c);
    } finally {
      Xa.transition = h, Lt = c;
    }
    return null;
  }
  function Xg(n, r, o, c) {
    do
      es();
    while (Za !== null);
    if (At & 6)
      throw Error(f(327));
    o = n.finishedWork;
    var h = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (ks(n, m), n === Fn && (wn = Fn = null, rr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Ju || (Ju = !0, sm(Ot, function() {
      return es(), null;
    })), m = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || m) {
      m = Xa.transition, Xa.transition = null;
      var _ = Lt;
      Lt = 1;
      var N = At;
      At |= 4, Hf.current = null, Yg(n, o), em(o, n), Dl(tp), gu = !!ep, tp = ep = null, n.current = o, qg(o), _i(), At = N, Lt = _, Xa.transition = m;
    } else
      n.current = o;
    if (Ju && (Ju = !1, Za = n, Vf = h), m = n.pendingLanes, m === 0 && (Ja = null), _s(o.stateNode), ir(n, vn()), r !== null)
      for (c = n.onRecoverableError, o = 0; o < r.length; o++)
        h = r[o], c(h.value, { componentStack: h.stack, digest: h.digest });
    if (Bf)
      throw Bf = !1, n = kp, kp = null, n;
    return Vf & 1 && n.tag !== 0 && es(), m = n.pendingLanes, m & 1 ? n === If ? mc++ : (mc = 0, If = n) : mc = 0, Ai(), null;
  }
  function es() {
    if (Za !== null) {
      var n = Ds(Vf), r = Xa.transition, o = Lt;
      try {
        if (Xa.transition = null, Lt = 16 > n ? 16 : n, Za === null)
          var c = !1;
        else {
          if (n = Za, Za = null, Vf = 0, At & 6)
            throw Error(f(331));
          var h = At;
          for (At |= 4, Ge = n.current; Ge !== null; ) {
            var m = Ge, _ = m.child;
            if (Ge.flags & 16) {
              var N = m.deletions;
              if (N !== null) {
                for (var P = 0; P < N.length; P++) {
                  var te = N[P];
                  for (Ge = te; Ge !== null; ) {
                    var ye = Ge;
                    switch (ye.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Iu(8, ye, m);
                    }
                    var ge = ye.child;
                    if (ge !== null)
                      ge.return = ye, Ge = ge;
                    else
                      for (; Ge !== null; ) {
                        ye = Ge;
                        var he = ye.sibling, Ie = ye.return;
                        if (Jv(ye), ye === te) {
                          Ge = null;
                          break;
                        }
                        if (he !== null) {
                          he.return = Ie, Ge = he;
                          break;
                        }
                        Ge = Ie;
                      }
                  }
                }
                var Xe = m.alternate;
                if (Xe !== null) {
                  var tt = Xe.child;
                  if (tt !== null) {
                    Xe.child = null;
                    do {
                      var qn = tt.sibling;
                      tt.sibling = null, tt = qn;
                    } while (tt !== null);
                  }
                }
                Ge = m;
              }
            }
            if (m.subtreeFlags & 2064 && _ !== null)
              _.return = m, Ge = _;
            else
              e:
                for (; Ge !== null; ) {
                  if (m = Ge, m.flags & 2048)
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Iu(9, m, m.return);
                    }
                  var W = m.sibling;
                  if (W !== null) {
                    W.return = m.return, Ge = W;
                    break e;
                  }
                  Ge = m.return;
                }
          }
          var H = n.current;
          for (Ge = H; Ge !== null; ) {
            _ = Ge;
            var Q = _.child;
            if (_.subtreeFlags & 2064 && Q !== null)
              Q.return = _, Ge = Q;
            else
              e:
                for (_ = H; Ge !== null; ) {
                  if (N = Ge, N.flags & 2048)
                    try {
                      switch (N.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pf(9, N);
                      }
                    } catch (rt) {
                      Hn(N, N.return, rt);
                    }
                  if (N === _) {
                    Ge = null;
                    break e;
                  }
                  var _e = N.sibling;
                  if (_e !== null) {
                    _e.return = N.return, Ge = _e;
                    break e;
                  }
                  Ge = N.return;
                }
          }
          if (At = h, Ai(), Zr && typeof Zr.onPostCommitFiberRoot == "function")
            try {
              Zr.onPostCommitFiberRoot(zo, n);
            } catch {
            }
          c = !0;
        }
        return c;
      } finally {
        Lt = o, Xa.transition = r;
      }
    }
    return !1;
  }
  function om(n, r, o) {
    r = tl(o, r), r = Wv(n, r, 1), n = Xo(n, r, 1), r = dr(), n !== null && (jo(n, 1, r), ir(n, r));
  }
  function Hn(n, r, o) {
    if (n.tag === 3)
      om(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          om(r, n, o);
          break;
        } else if (r.tag === 1) {
          var c = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Ja === null || !Ja.has(c))) {
            n = tl(o, n), n = Yv(r, n, 1), r = Xo(r, n, 1), n = dr(), r !== null && (jo(r, 1, n), ir(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Jg(n, r, o) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & o, Fn === n && (rr & o) === o && (ar === 4 || ar === 3 && (rr & 130023424) === rr && 500 > vn() - $f ? Xl(n, 0) : Rp |= o), ir(n, r);
  }
  function lm(n, r) {
    r === 0 && (n.mode & 1 ? (r = hu, hu <<= 1, !(hu & 130023424) && (hu = 4194304)) : r = 1);
    var o = dr();
    n = co(n, r), n !== null && (jo(n, r, o), ir(n, o));
  }
  function Ap(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), lm(n, o);
  }
  function Zg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, h = n.memoizedState;
        h !== null && (o = h.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    c !== null && c.delete(r), lm(n, o);
  }
  var um;
  um = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || bt.current)
        ca = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return ca = !1, po(n, r, o);
        ca = !!(n.flags & 131072);
      }
    else
      ca = !1, bn && r.flags & 1048576 && Qo(r, zl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var c = r.type;
        pc(n, r), n = r.pendingProps;
        var h = ka(r, sr.current);
        Bn(r, o), h = Fl(null, r, c, n, h, o);
        var m = Zo();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Zn(c) ? (m = !0, Ll(r)) : m = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, dp(r), h.updater = vf, r.stateNode = h, h._reactInternals = r, hp(r, c, n, o), r = Af(null, r, c, !0, m, o)) : (r.tag = 0, bn && m && cf(r), Wn(null, r, h, o), r = r.child), r;
      case 16:
        c = r.elementType;
        e: {
          switch (pc(n, r), n = r.pendingProps, h = c._init, c = h(c._payload), r.type = c, h = r.tag = e0(c), n = la(c, n), h) {
            case 0:
              r = xt(null, r, c, n, o);
              break e;
            case 1:
              r = fc(null, r, c, n, o);
              break e;
            case 11:
              r = Fu(null, r, c, n, o);
              break e;
            case 14:
              r = nl(null, r, c, la(c.type, n), o);
              break e;
          }
          throw Error(f(
            306,
            c,
            ""
          ));
        }
        return r;
      case 0:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : la(c, h), xt(n, r, c, h, o);
      case 1:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : la(c, h), fc(n, r, c, h, o);
      case 3:
        e: {
          if (Vg(r), n === null)
            throw Error(f(387));
          c = r.pendingProps, m = r.memoizedState, h = m.element, zv(n, r), Zs(r, c, null, o);
          var _ = r.memoizedState;
          if (c = _.element, m.isDehydrated)
            if (m = { element: c, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
              h = tl(Error(f(423)), r), r = Gv(n, r, c, o, h);
              break e;
            } else if (c !== h) {
              h = tl(Error(f(424)), r), r = Gv(n, r, c, o, h);
              break e;
            } else
              for (Da = Ra(r.stateNode.containerInfo.firstChild), Oa = r, bn = !0, qa = null, o = Bv(r, null, c, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (ku(), c === h) {
              r = Yn(n, r, o);
              break e;
            }
            Wn(n, r, c, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return mf(r), n === null && df(r), c = r.type, h = r.pendingProps, m = n !== null ? n.memoizedProps : null, _ = h.children, Ml(c, h) ? _ = null : m !== null && Ml(c, m) && (r.flags |= 32), Wl(n, r), Wn(n, r, _, o), r.child;
      case 6:
        return n === null && df(r), null;
      case 13:
        return Kv(n, r, o);
      case 4:
        return vp(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = Mu(r, null, c, o) : Wn(n, r, c, o), r.child;
      case 11:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : la(c, h), Fu(n, r, c, h, o);
      case 7:
        return Wn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Wn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Wn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (c = r.type._context, h = r.pendingProps, m = r.memoizedProps, _ = h.value, It(Ou, c._currentValue), c._currentValue = _, m !== null)
            if (hi(m.value, _)) {
              if (m.children === h.children && !bt.current) {
                r = Yn(n, r, o);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var N = m.dependencies;
                if (N !== null) {
                  _ = m.child;
                  for (var P = N.firstContext; P !== null; ) {
                    if (P.context === c) {
                      if (m.tag === 1) {
                        P = mn(-1, o & -o), P.tag = 2;
                        var te = m.updateQueue;
                        if (te !== null) {
                          te = te.shared;
                          var ye = te.pending;
                          ye === null ? P.next = P : (P.next = ye.next, ye.next = P), te.pending = P;
                        }
                      }
                      m.lanes |= o, P = m.alternate, P !== null && (P.lanes |= o), Go(
                        m.return,
                        o,
                        r
                      ), N.lanes |= o;
                      break;
                    }
                    P = P.next;
                  }
                } else if (m.tag === 10)
                  _ = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (_ = m.return, _ === null)
                    throw Error(f(341));
                  _.lanes |= o, N = _.alternate, N !== null && (N.lanes |= o), Go(_, o, r), _ = m.sibling;
                } else
                  _ = m.child;
                if (_ !== null)
                  _.return = m;
                else
                  for (_ = m; _ !== null; ) {
                    if (_ === r) {
                      _ = null;
                      break;
                    }
                    if (m = _.sibling, m !== null) {
                      m.return = _.return, _ = m;
                      break;
                    }
                    _ = _.return;
                  }
                m = _;
              }
          Wn(n, r, h.children, o), r = r.child;
        }
        return r;
      case 9:
        return h = r.type, c = r.pendingProps.children, Bn(r, o), h = Oe(h), c = c(h), r.flags |= 1, Wn(n, r, c, o), r.child;
      case 14:
        return c = r.type, h = la(c, r.pendingProps), h = la(c.type, h), nl(n, r, c, h, o);
      case 15:
        return Nf(n, r, r.type, r.pendingProps, o);
      case 17:
        return c = r.type, h = r.pendingProps, h = r.elementType === c ? h : la(c, h), pc(n, r), r.tag = 1, Zn(c) ? (n = !0, Ll(r)) : n = !1, Bn(r, o), Pv(r, c, h), hp(r, c, h, o), Af(null, r, c, !0, n, o);
      case 19:
        return wp(n, r, o);
      case 22:
        return fa(n, r, o);
    }
    throw Error(f(156, r.tag));
  };
  function sm(n, r) {
    return pn(n, r);
  }
  function cm(n, r, o, c) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ei(n, r, o, c) {
    return new cm(n, r, o, c);
  }
  function Mp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function e0(n) {
    if (typeof n == "function")
      return Mp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === we)
        return 11;
      if (n === re)
        return 14;
    }
    return 2;
  }
  function il(n, r) {
    var o = n.alternate;
    return o === null ? (o = ei(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Qf(n, r, o, c, h, m) {
    var _ = 2;
    if (c = n, typeof n == "function")
      Mp(n) && (_ = 1);
    else if (typeof n == "string")
      _ = 5;
    else
      e:
        switch (n) {
          case gt:
            return Jl(o.children, h, m, r);
          case Z:
            _ = 8, h |= 8;
            break;
          case xe:
            return n = ei(12, o, r, h | 2), n.elementType = xe, n.lanes = m, n;
          case Ne:
            return n = ei(13, o, r, h), n.elementType = Ne, n.lanes = m, n;
          case le:
            return n = ei(19, o, r, h), n.elementType = le, n.lanes = m, n;
          case pe:
            return Gf(o, h, m, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case De:
                  _ = 10;
                  break e;
                case Te:
                  _ = 9;
                  break e;
                case we:
                  _ = 11;
                  break e;
                case re:
                  _ = 14;
                  break e;
                case ve:
                  _ = 16, c = null;
                  break e;
              }
            throw Error(f(130, n == null ? n : typeof n, ""));
        }
    return r = ei(_, o, r, h), r.elementType = n, r.type = c, r.lanes = m, r;
  }
  function Jl(n, r, o, c) {
    return n = ei(7, n, c, r), n.lanes = o, n;
  }
  function Gf(n, r, o, c) {
    return n = ei(22, n, c, r), n.elementType = pe, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Kf(n, r, o) {
    return n = ei(6, n, null, r), n.lanes = o, n;
  }
  function Sc(n, r, o) {
    return r = ei(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ec(n, r, o, c, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tl(0), this.expirationTimes = Tl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tl(0), this.identifierPrefix = c, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function Lp(n, r, o, c, h, m, _, N, P) {
    return n = new Ec(n, r, o, N, P), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = ei(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: c, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, dp(m), n;
  }
  function fm(n, r, o) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ue, key: c == null ? null : "" + c, children: n, containerInfo: r, implementation: o };
  }
  function zp(n) {
    if (!n)
      return Ia;
    n = n._reactInternals;
    e: {
      if ($e(n) !== n || n.tag !== 1)
        throw Error(f(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Zn(r.type)) {
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
      if (Zn(o))
        return Wo(n, o, r);
    }
    return r;
  }
  function Up(n, r, o, c, h, m, _, N, P) {
    return n = Lp(o, c, !0, n, h, m, _, N, P), n.context = zp(null), o = n.current, c = dr(), h = vo(o), m = mn(c, h), m.callback = r ?? null, Xo(o, m, h), n.current.lanes = h, jo(n, h, c), ir(n, c), n;
  }
  function Xf(n, r, o, c) {
    var h = r.current, m = dr(), _ = vo(h);
    return o = zp(o), r.context === null ? r.context = o : r.pendingContext = o, r = mn(m, _), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = Xo(h, r, _), n !== null && (Dn(n, h, _, m), hf(n, h, _)), _;
  }
  function bc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function dm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function jp(n, r) {
    dm(n, r), (n = n.alternate) && dm(n, r);
  }
  function t0() {
    return null;
  }
  var Pp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Jf(n) {
    this._internalRoot = n;
  }
  wc.prototype.render = Jf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(f(409));
    Xf(n, r, null, null);
  }, wc.prototype.unmount = Jf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Fi(function() {
        Xf(null, n, null, null);
      }), r[vi] = null;
    }
  };
  function wc(n) {
    this._internalRoot = n;
  }
  wc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ft();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Sn.length && r !== 0 && r < Sn[o].priority; o++)
        ;
      Sn.splice(o, 0, n), o === 0 && di(n);
    }
  };
  function ol(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Zf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function pm() {
  }
  function n0(n, r, o, c, h) {
    if (h) {
      if (typeof c == "function") {
        var m = c;
        c = function() {
          var te = bc(_);
          m.call(te);
        };
      }
      var _ = Up(r, c, n, 0, null, !1, !1, "", pm);
      return n._reactRootContainer = _, n[vi] = _.current, Oi(n.nodeType === 8 ? n.parentNode : n), Fi(), _;
    }
    for (; h = n.lastChild; )
      n.removeChild(h);
    if (typeof c == "function") {
      var N = c;
      c = function() {
        var te = bc(P);
        N.call(te);
      };
    }
    var P = Lp(n, 0, !1, null, null, !1, !1, "", pm);
    return n._reactRootContainer = P, n[vi] = P.current, Oi(n.nodeType === 8 ? n.parentNode : n), Fi(function() {
      Xf(r, P, o, c);
    }), P;
  }
  function ed(n, r, o, c, h) {
    var m = o._reactRootContainer;
    if (m) {
      var _ = m;
      if (typeof h == "function") {
        var N = h;
        h = function() {
          var P = bc(_);
          N.call(P);
        };
      }
      Xf(r, _, n, h);
    } else
      _ = n0(o, r, n, h, c);
    return bc(_);
  }
  vu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Xi(r.pendingLanes);
          o !== 0 && (Os(r, o | 1), ir(r, vn()), !(At & 6) && (Xu = vn() + 500, Ai()));
        }
        break;
      case 13:
        Fi(function() {
          var c = co(n, 1);
          if (c !== null) {
            var h = dr();
            Dn(c, n, 1, h);
          }
        }), jp(n, 1);
    }
  }, Po = function(n) {
    if (n.tag === 13) {
      var r = co(n, 134217728);
      if (r !== null) {
        var o = dr();
        Dn(r, n, 134217728, o);
      }
      jp(n, 134217728);
    }
  }, Ns = function(n) {
    if (n.tag === 13) {
      var r = vo(n), o = co(n, r);
      if (o !== null) {
        var c = dr();
        Dn(o, n, r, c);
      }
      jp(n, r);
    }
  }, Ft = function() {
    return Lt;
  }, mu = function(n, r) {
    var o = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = o;
    }
  }, en = function(n, r, o) {
    switch (r) {
      case "input":
        if (Kn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var c = o[r];
            if (c !== n && c.form === n.form) {
              var h = uf(c);
              if (!h)
                throw Error(f(90));
              Zt(c), Kn(c, h);
            }
          }
        }
        break;
      case "textarea":
        Or(n, o);
        break;
      case "select":
        r = o.value, r != null && nr(n, !!o.multiple, r, !1);
    }
  }, Mo = Np, bl = Fi;
  var r0 = { usingClientEntryPoint: !1, Events: [Di, Ru, uf, ui, Pa, Np] }, Cc = { findFiberByHostInstance: uo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, hm = { bundleType: Cc.bundleType, version: Cc.version, rendererPackageName: Cc.rendererPackageName, rendererConfig: Cc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Be.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ut(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Cc.findFiberByHostInstance || t0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var td = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!td.isDisabled && td.supportsFiber)
      try {
        zo = td.inject(hm), Zr = td;
      } catch {
      }
  }
  return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r0, oi.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ol(r))
      throw Error(f(200));
    return fm(n, r, null, o);
  }, oi.createRoot = function(n, r) {
    if (!ol(n))
      throw Error(f(299));
    var o = !1, c = "", h = Pp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = Lp(n, 1, !1, null, null, o, !1, c, h), n[vi] = r.current, Oi(n.nodeType === 8 ? n.parentNode : n), new Jf(r);
  }, oi.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : (n = Object.keys(n).join(","), Error(f(268, n)));
    return n = ut(r), n = n === null ? null : n.stateNode, n;
  }, oi.flushSync = function(n) {
    return Fi(n);
  }, oi.hydrate = function(n, r, o) {
    if (!Zf(r))
      throw Error(f(200));
    return ed(null, n, r, !0, o);
  }, oi.hydrateRoot = function(n, r, o) {
    if (!ol(n))
      throw Error(f(405));
    var c = o != null && o.hydratedSources || null, h = !1, m = "", _ = Pp;
    if (o != null && (o.unstable_strictMode === !0 && (h = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (_ = o.onRecoverableError)), r = Up(r, null, n, 1, o ?? null, h, !1, m, _), n[vi] = r.current, Oi(n), c)
      for (n = 0; n < c.length; n++)
        o = c[n], h = o._getVersion, h = h(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, h] : r.mutableSourceEagerHydrationData.push(
          o,
          h
        );
    return new wc(r);
  }, oi.render = function(n, r, o) {
    if (!Zf(r))
      throw Error(f(200));
    return ed(null, n, r, !1, o);
  }, oi.unmountComponentAtNode = function(n) {
    if (!Zf(n))
      throw Error(f(40));
    return n._reactRootContainer ? (Fi(function() {
      ed(null, null, n, !1, function() {
        n._reactRootContainer = null, n[vi] = null;
      });
    }), !0) : !1;
  }, oi.unstable_batchedUpdates = Np, oi.unstable_renderSubtreeIntoContainer = function(n, r, o, c) {
    if (!Zf(o))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return ed(n, r, o, !1, c);
  }, oi.version = "18.2.0-next-9e3b772b8-20220608", oi;
}
var li = {}, Fx;
function DA() {
  if (Fx)
    return li;
  Fx = 1;
  var s = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return s.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var u = Ct, f = T1(), p = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = !1;
    function b(e) {
      g = e;
    }
    function E(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        T("warn", e, a);
      }
    }
    function y(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        T("error", e, a);
      }
    }
    function T(e, t, a) {
      {
        var i = p.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var d = a.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var A = 0, k = 1, D = 2, M = 3, I = 4, B = 5, X = 6, fe = 7, Le = 8, Ke = 9, ze = 10, Be = 11, ue = 12, Ue = 13, gt = 14, Z = 15, xe = 16, De = 17, Te = 18, we = 19, Ne = 21, le = 22, re = 23, ve = 24, pe = 25, O = !0, ae = !1, L = !1, j = !1, ee = !1, be = !0, Se = !1, ke = !1, He = !0, Pe = !0, Ae = !0, ot = /* @__PURE__ */ new Set(), St = {}, vt = {};
    function Zt(e, t) {
      Re(e, t), Re(e + "Capture", t);
    }
    function Re(e, t) {
      St[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), St[e] = t;
      {
        var a = e.toLowerCase();
        vt[a] = e, e === "onDoubleClick" && (vt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ot.add(t[i]);
    }
    var $t = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mn = Object.prototype.hasOwnProperty;
    function Ln(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Kn(e) {
      try {
        return Xn(e), !1;
      } catch {
        return !0;
      }
    }
    function Xn(e) {
      return "" + e;
    }
    function Ur(e, t) {
      if (Kn(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Xn(e);
    }
    function kr(e) {
      if (Kn(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ln(e)), Xn(e);
    }
    function nr(e, t) {
      if (Kn(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Xn(e);
    }
    function Sa(e, t) {
      if (Kn(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Xn(e);
    }
    function Ea(e) {
      if (Kn(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ln(e)), Xn(e);
    }
    function Or(e) {
      if (Kn(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ln(e)), Xn(e);
    }
    var ba = 0, hr = 1, jr = 2, _n = 3, wa = 4, Ca = 5, _a = 6, Fe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", lt = Fe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", kt = new RegExp("^[" + Fe + "][" + lt + "]*$"), Gt = {}, Vt = {};
    function $n(e) {
      return Mn.call(Vt, e) ? !0 : Mn.call(Gt, e) ? !1 : kt.test(e) ? (Vt[e] = !0, !0) : (Gt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Tn(e, t, a) {
      return t !== null ? t.type === ba : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Dr(e, t, a, i) {
      if (a !== null && a.type === ba)
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
    function en(e, t, a, i) {
      if (t === null || typeof t > "u" || Dr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case _n:
            return !t;
          case wa:
            return t === !1;
          case Ca:
            return isNaN(t);
          case _a:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ur(e) {
      return dn.hasOwnProperty(e) ? dn[e] : null;
    }
    function Kt(e, t, a, i, l, d, v) {
      this.acceptsBooleans = t === jr || t === _n || t === wa, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = v;
    }
    var dn = {}, ui = [
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
    ui.forEach(function(e) {
      dn[e] = new Kt(
        e,
        ba,
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
      dn[t] = new Kt(
        t,
        hr,
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
      dn[e] = new Kt(
        e,
        jr,
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
      dn[e] = new Kt(
        e,
        jr,
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
      dn[e] = new Kt(
        e,
        _n,
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
      dn[e] = new Kt(
        e,
        _n,
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
      dn[e] = new Kt(
        e,
        wa,
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
      dn[e] = new Kt(
        e,
        _a,
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
      dn[e] = new Kt(
        e,
        Ca,
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
    var Pa = /[\-\:]([a-z])/g, Mo = function(e) {
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
      var t = e.replace(Pa, Mo);
      dn[t] = new Kt(
        t,
        hr,
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
      var t = e.replace(Pa, Mo);
      dn[t] = new Kt(
        t,
        hr,
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
      var t = e.replace(Pa, Mo);
      dn[t] = new Kt(
        t,
        hr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      dn[e] = new Kt(
        e,
        hr,
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
    var bl = "xlinkHref";
    dn[bl] = new Kt(
      "xlinkHref",
      hr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      dn[e] = new Kt(
        e,
        hr,
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
    var wl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Lo = !1;
    function si(e) {
      !Lo && wl.test(e) && (Lo = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ci(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Ur(a, t), i.sanitizeURL && si("" + a);
        var d = i.attributeName, v = null;
        if (i.type === wa) {
          if (e.hasAttribute(d)) {
            var S = e.getAttribute(d);
            return S === "" ? !0 : en(t, a, i, !1) ? S : S === "" + a ? a : S;
          }
        } else if (e.hasAttribute(d)) {
          if (en(t, a, i, !1))
            return e.getAttribute(d);
          if (i.type === _n)
            return a;
          v = e.getAttribute(d);
        }
        return en(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function Fa(e, t, a, i) {
      {
        if (!$n(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Ur(a, t), l === "" + a ? a : l;
      }
    }
    function Qi(e, t, a, i) {
      var l = ur(t);
      if (!Tn(t, l, i)) {
        if (en(t, a, l, i) && (a = null), i || l === null) {
          if ($n(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : (Ur(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var S = l.propertyName;
          if (a === null) {
            var w = l.type;
            e[S] = w === _n ? !1 : "";
          } else
            e[S] = a;
          return;
        }
        var x = l.attributeName, R = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(x);
        else {
          var $ = l.type, F;
          $ === _n || $ === wa && a === !0 ? F = "" : (Ur(a, x), F = "" + a, l.sanitizeURL && si(F.toString())), R ? e.setAttributeNS(R, x, F) : e.setAttribute(x, F);
        }
      }
    }
    var Kr = Symbol.for("react.element"), Xr = Symbol.for("react.portal"), xa = Symbol.for("react.fragment"), Gi = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), Me = Symbol.for("react.context"), $e = Symbol.for("react.forward_ref"), Nt = Symbol.for("react.suspense"), zt = Symbol.for("react.suspense_list"), Tt = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), Jn = Symbol.for("react.scope"), pn = Symbol.for("react.debug_trace_mode"), hn = Symbol.for("react.offscreen"), Nr = Symbol.for("react.legacy_hidden"), _i = Symbol.for("react.cache"), vn = Symbol.for("react.tracing_marker"), Jr = Symbol.iterator, Cs = "@@iterator";
    function xi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Jr && e[Jr] || e[Cs];
      return typeof t == "function" ? t : null;
    }
    var Ot = Object.assign, Cl = 0, Ki, zo, Zr, _s, Pr, xs, Ts;
    function Rs() {
    }
    Rs.__reactDisabledLog = !0;
    function _l() {
      {
        if (Cl === 0) {
          Ki = console.log, zo = console.info, Zr = console.warn, _s = console.error, Pr = console.group, xs = console.groupCollapsed, Ts = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Rs,
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
    function hu() {
      {
        if (Cl--, Cl === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ot({}, e, {
              value: Ki
            }),
            info: Ot({}, e, {
              value: zo
            }),
            warn: Ot({}, e, {
              value: Zr
            }),
            error: Ot({}, e, {
              value: _s
            }),
            group: Ot({}, e, {
              value: Pr
            }),
            groupCollapsed: Ot({}, e, {
              value: xs
            }),
            groupEnd: Ot({}, e, {
              value: Ts
            })
          });
        }
        Cl < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xi = p.ReactCurrentDispatcher, Ti;
    function Ha(e, t, a) {
      {
        if (Ti === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Ti = i && i[1] || "";
          }
        return `
` + Ti + e;
      }
    }
    var Uo = !1, Ri;
    {
      var xl = typeof WeakMap == "function" ? WeakMap : Map;
      Ri = new xl();
    }
    function Tl(e, t) {
      if (!e || Uo)
        return "";
      {
        var a = Ri.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Uo = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Xi.current, Xi.current = null, _l();
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
            } catch (J) {
              i = J;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (J) {
              i = J;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            i = J;
          }
          e();
        }
      } catch (J) {
        if (J && i && typeof J.stack == "string") {
          for (var S = J.stack.split(`
`), w = i.stack.split(`
`), x = S.length - 1, R = w.length - 1; x >= 1 && R >= 0 && S[x] !== w[R]; )
            R--;
          for (; x >= 1 && R >= 0; x--, R--)
            if (S[x] !== w[R]) {
              if (x !== 1 || R !== 1)
                do
                  if (x--, R--, R < 0 || S[x] !== w[R]) {
                    var $ = `
` + S[x].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && Ri.set(e, $), $;
                  }
                while (x >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Uo = !1, Xi.current = d, hu(), Error.prepareStackTrace = l;
      }
      var F = e ? e.displayName || e.name : "", K = F ? Ha(F) : "";
      return typeof e == "function" && Ri.set(e, K), K;
    }
    function jo(e, t, a) {
      return Tl(e, !0);
    }
    function ks(e, t, a) {
      return Tl(e, !1);
    }
    function Os(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Lt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Tl(e, Os(e));
      if (typeof e == "string")
        return Ha(e);
      switch (e) {
        case Nt:
          return Ha("Suspense");
        case zt:
          return Ha("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $e:
            return ks(e.render);
          case Tt:
            return Lt(e.type, t, a);
          case ut: {
            var i = e, l = i._payload, d = i._init;
            try {
              return Lt(d(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ds(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case B:
          return Ha(e.type);
        case xe:
          return Ha("Lazy");
        case Ue:
          return Ha("Suspense");
        case we:
          return Ha("SuspenseList");
        case A:
        case D:
        case Z:
          return ks(e.type);
        case Be:
          return ks(e.type.render);
        case k:
          return jo(e.type);
        default:
          return "";
      }
    }
    function vu(e) {
      try {
        var t = "", a = e;
        do
          t += Ds(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Po(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Ns(e) {
      return e.displayName || "Context";
    }
    function Ft(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case xa:
          return "Fragment";
        case Xr:
          return "Portal";
        case U:
          return "Profiler";
        case Gi:
          return "StrictMode";
        case Nt:
          return "Suspense";
        case zt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Me:
            var t = e;
            return Ns(t) + ".Consumer";
          case me:
            var a = e;
            return Ns(a._context) + ".Provider";
          case $e:
            return Po(e, e.render, "ForwardRef");
          case Tt:
            var i = e.displayName || null;
            return i !== null ? i : Ft(e.type) || "Memo";
          case ut: {
            var l = e, d = l._payload, v = l._init;
            try {
              return Ft(v(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function mu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Rl(e) {
      return e.displayName || "Context";
    }
    function Et(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ve:
          return "Cache";
        case Ke:
          var i = a;
          return Rl(i) + ".Consumer";
        case ze:
          var l = a;
          return Rl(l._context) + ".Provider";
        case Te:
          return "DehydratedFragment";
        case Be:
          return mu(a, a.render, "ForwardRef");
        case fe:
          return "Fragment";
        case B:
          return a;
        case I:
          return "Portal";
        case M:
          return "Root";
        case X:
          return "Text";
        case xe:
          return Ft(a);
        case Le:
          return a === Gi ? "StrictMode" : "Mode";
        case le:
          return "Offscreen";
        case ue:
          return "Profiler";
        case Ne:
          return "Scope";
        case Ue:
          return "Suspense";
        case we:
          return "SuspenseList";
        case pe:
          return "TracingMarker";
        case k:
        case A:
        case De:
        case D:
        case gt:
        case Z:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var fi = p.ReactDebugCurrentFrame, Rn = null, ea = !1;
    function $a() {
      {
        if (Rn === null)
          return null;
        var e = Rn._debugOwner;
        if (e !== null && typeof e < "u")
          return Et(e);
      }
      return null;
    }
    function Fo() {
      return Rn === null ? "" : vu(Rn);
    }
    function Sn() {
      fi.getCurrentStack = null, Rn = null, ea = !1;
    }
    function kn(e) {
      fi.getCurrentStack = e === null ? null : Fo, Rn = e, ea = !1;
    }
    function As() {
      return Rn;
    }
    function vr(e) {
      ea = e;
    }
    function ta(e) {
      return "" + e;
    }
    function di(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Or(e), e;
        default:
          return "";
      }
    }
    var yu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function kl(e, t) {
      yu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ol(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ho(e) {
      return e._valueTracker;
    }
    function Ba(e) {
      e._valueTracker = null;
    }
    function Ji(e) {
      var t = "";
      return e && (Ol(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function gu(e) {
      var t = Ol(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Or(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(S) {
            Or(S), i = "" + S, d.call(this, S);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(S) {
            Or(S), i = "" + S;
          },
          stopTracking: function() {
            Ba(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Zi(e) {
      Ho(e) || (e._valueTracker = gu(e));
    }
    function Su(e) {
      if (!e)
        return !1;
      var t = Ho(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ji(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ki(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, Eu = !1, Ms = !1, pi = !1;
    function bu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function C(e, t) {
      var a = e, i = t.checked, l = Ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function z(e, t) {
      kl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Eu && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", $a() || "A component", t.type), Eu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", $a() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: di(t.value != null ? t.value : i),
        controlled: bu(t)
      };
    }
    function G(e, t) {
      var a = e, i = t.checked;
      i != null && Qi(a, "checked", i, !1);
    }
    function ne(e, t) {
      var a = e;
      {
        var i = bu(t);
        !a._wrapperState.controlled && i && !pi && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), pi = !0), a._wrapperState.controlled && !i && !Ms && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ms = !0);
      }
      G(e, t);
      var l = di(t.value), d = t.type;
      if (l != null)
        d === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = ta(l)) : a.value !== ta(l) && (a.value = ta(l));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? mt(a, t.type, l) : t.hasOwnProperty("defaultValue") && mt(a, t.type, di(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Ce(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, d = l === "submit" || l === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var v = ta(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var S = i.name;
      S !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, S !== "" && (i.name = S);
    }
    function et(e, t) {
      var a = e;
      ne(a, t), Ye(a, t);
    }
    function Ye(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Ur(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), d = 0; d < l.length; d++) {
          var v = l[d];
          if (!(v === e || v.form !== e.form)) {
            var S = Nm(v);
            if (!S)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Su(v), ne(v, S);
          }
        }
      }
    }
    function mt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ki(e.ownerDocument) !== e) && (a == null ? e.defaultValue = ta(e._wrapperState.initialValue) : e.defaultValue !== ta(a) && (e.defaultValue = ta(a)));
    }
    var Dt = !1, Xt = !1, tn = !1;
    function nn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? u.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Xt || (Xt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (tn || (tn = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Dt && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Dt = !0);
    }
    function rn(e, t) {
      t.value != null && e.setAttribute("value", ta(di(t.value)));
    }
    var En = Array.isArray;
    function Ht(e) {
      return En(e);
    }
    var $o;
    $o = !1;
    function wu() {
      var e = $a();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ls = ["value", "defaultValue"];
    function zs(e) {
      {
        kl("select", e);
        for (var t = 0; t < Ls.length; t++) {
          var a = Ls[t];
          if (e[a] != null) {
            var i = Ht(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, wu()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, wu());
          }
        }
      }
    }
    function to(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var d = a, v = {}, S = 0; S < d.length; S++)
          v["$" + d[S]] = !0;
        for (var w = 0; w < l.length; w++) {
          var x = v.hasOwnProperty("$" + l[w].value);
          l[w].selected !== x && (l[w].selected = x), x && i && (l[w].defaultSelected = !0);
        }
      } else {
        for (var R = ta(di(a)), $ = null, F = 0; F < l.length; F++) {
          if (l[F].value === R) {
            l[F].selected = !0, i && (l[F].defaultSelected = !0);
            return;
          }
          $ === null && !l[F].disabled && ($ = l[F]);
        }
        $ !== null && ($.selected = !0);
      }
    }
    function Us(e, t) {
      return Ot({}, t, {
        value: void 0
      });
    }
    function js(e, t) {
      var a = e;
      zs(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !$o && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), $o = !0);
    }
    function Fd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? to(a, !!t.multiple, i, !1) : t.defaultValue != null && to(a, !!t.multiple, t.defaultValue, !0);
    }
    function _g(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? to(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? to(a, !!t.multiple, t.defaultValue, !0) : to(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function nv(e, t) {
      var a = e, i = t.value;
      i != null && to(a, !!t.multiple, i, !1);
    }
    var rv = !1;
    function Hd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ta(a._wrapperState.initialValue)
      });
      return i;
    }
    function av(e, t) {
      var a = e;
      kl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !rv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", $a() || "A component"), rv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, d = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Ht(l)) {
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
        initialValue: di(i)
      };
    }
    function iv(e, t) {
      var a = e, i = di(t.value), l = di(t.defaultValue);
      if (i != null) {
        var d = ta(i);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      l != null && (a.defaultValue = ta(l));
    }
    function Xc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function xg(e, t) {
      iv(e, t);
    }
    var no = "http://www.w3.org/1999/xhtml", Tg = "http://www.w3.org/1998/Math/MathML", Jc = "http://www.w3.org/2000/svg";
    function $d(e) {
      switch (e) {
        case "svg":
          return Jc;
        case "math":
          return Tg;
        default:
          return no;
      }
    }
    function Bd(e, t) {
      return e == null || e === no ? $d(t) : e === Jc && t === "foreignObject" ? no : e;
    }
    var Rg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Zc, ov = Rg(function(e, t) {
      if (e.namespaceURI === Jc && !("innerHTML" in e)) {
        Zc = Zc || document.createElement("div"), Zc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Zc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), na = 1, ro = 3, zn = 8, Ta = 9, Vd = 11, Ps = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ro) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, lv = {
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
    }, Cu = {
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
    function uv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var sv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Cu).forEach(function(e) {
      sv.forEach(function(t) {
        Cu[uv(t, e)] = Cu[e];
      });
    });
    function Bo(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Cu.hasOwnProperty(e) && Cu[e]) ? t + "px" : (Sa(t, e), ("" + t).trim());
    }
    var kg = /([A-Z])/g, Og = /^ms-/;
    function Dg(e) {
      return e.replace(kg, "-$1").toLowerCase().replace(Og, "-ms-");
    }
    var Id = function() {
    };
    {
      var cv = /^(?:webkit|moz|o)[A-Z]/, Fs = /^-ms-/, Hs = /-(.)/g, fv = /;\s*$/, ao = {}, Wd = {}, Yd = !1, ef = !1, qd = function(e) {
        return e.replace(Hs, function(t, a) {
          return a.toUpperCase();
        });
      }, dv = function(e) {
        ao.hasOwnProperty(e) && ao[e] || (ao[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          qd(e.replace(Fs, "ms-"))
        ));
      }, pv = function(e) {
        ao.hasOwnProperty(e) && ao[e] || (ao[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, hv = function(e, t) {
        Wd.hasOwnProperty(t) && Wd[t] || (Wd[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(fv, "")));
      }, Ng = function(e, t) {
        Yd || (Yd = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ag = function(e, t) {
        ef || (ef = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Id = function(e, t) {
        e.indexOf("-") > -1 ? dv(e) : cv.test(e) ? pv(e) : fv.test(t) && hv(e, t), typeof t == "number" && (isNaN(t) ? Ng(e, t) : isFinite(t) || Ag(e, t));
      };
    }
    var Mg = Id;
    function Lg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var d = i.indexOf("--") === 0;
              t += a + (d ? i : Dg(i)) + ":", t += Bo(i, l, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function vv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Mg(i, t[i]);
          var d = Bo(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, d) : a[i] = d;
        }
    }
    function hi(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function _u(e) {
      var t = {};
      for (var a in e)
        for (var i = lv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function mv(e, t) {
      {
        if (!t)
          return;
        var a = _u(e), i = _u(t), l = {};
        for (var d in a) {
          var v = a[d], S = i[d];
          if (S && v !== S) {
            var w = v + "," + S;
            if (l[w])
              continue;
            l[w] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", hi(e[v]) ? "Removing" : "Updating", v, S);
          }
        }
      }
    }
    var yv = {
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
    }, gv = Ot({
      menuitem: !0
    }, yv), Sv = "__html";
    function $s(e, t) {
      if (t) {
        if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Dl(e, t) {
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
    var tf = {
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
    }, Vo = {}, Bs = new RegExp("^(aria)-[" + lt + "]*$"), Qd = new RegExp("^(aria)[A-Z][" + lt + "]*$");
    function Ev(e, t) {
      {
        if (Mn.call(Vo, t) && Vo[t])
          return !0;
        if (Qd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Nl.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Vo[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Vo[t] = !0, !0;
        }
        if (Bs.test(t)) {
          var l = t.toLowerCase(), d = Nl.hasOwnProperty(l) ? l : null;
          if (d == null)
            return Vo[t] = !0, !1;
          if (t !== d)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Vo[t] = !0, !0;
        }
      }
      return !0;
    }
    function nf(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Ev(e, i);
          l || a.push(i);
        }
        var d = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function xu(e, t) {
      Dl(e, t) || nf(e, t);
    }
    var rf = !1;
    function bv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !rf && (rf = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Vs = function() {
    };
    {
      var Ar = {}, Gd = /^on./, wv = /^on[^A-Z]/, Cv = new RegExp("^(aria)-[" + lt + "]*$"), _v = new RegExp("^(aria)[A-Z][" + lt + "]*$");
      Vs = function(e, t, a, i) {
        if (Mn.call(Ar, t) && Ar[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ar[t] = !0, !0;
        if (i != null) {
          var d = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var S = v.hasOwnProperty(l) ? v[l] : null;
          if (S != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, S), Ar[t] = !0, !0;
          if (Gd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Ar[t] = !0, !0;
        } else if (Gd.test(t))
          return wv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ar[t] = !0, !0;
        if (Cv.test(t) || _v.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ar[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ar[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Ar[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ar[t] = !0, !0;
        var w = ur(t), x = w !== null && w.type === ba;
        if (tf.hasOwnProperty(l)) {
          var R = tf[l];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), Ar[t] = !0, !0;
        } else if (!x && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Ar[t] = !0, !0;
        return typeof a == "boolean" && Dr(t, a, w, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Ar[t] = !0, !0) : x ? !0 : Dr(t, a, w, !1) ? (Ar[t] = !0, !1) : ((a === "false" || a === "true") && w !== null && w.type === _n && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Ar[t] = !0), !0);
      };
    }
    var xv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var d = Vs(e, l, t[l], a);
          d || i.push(l);
        }
        var v = i.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Io(e, t, a) {
      Dl(e, t) || xv(e, t, a);
    }
    var af = 1, Is = 2, Ws = 4, zg = af | Is | Ws, io = null;
    function Ug(e) {
      io !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), io = e;
    }
    function Tv() {
      io === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), io = null;
    }
    function Rv(e) {
      return e === io;
    }
    function sn(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ro ? t.parentNode : t;
    }
    var Ys = null, oo = null, Oi = null;
    function Kd(e) {
      var t = rs(e);
      if (t) {
        if (typeof Ys != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Nm(a);
          Ys(t.stateNode, t.type, i);
        }
      }
    }
    function Xd(e) {
      Ys = e;
    }
    function Tu(e) {
      oo ? Oi ? Oi.push(e) : Oi = [e] : oo = e;
    }
    function of() {
      return oo !== null || Oi !== null;
    }
    function Al() {
      if (oo) {
        var e = oo, t = Oi;
        if (oo = null, Oi = null, Kd(e), t)
          for (var a = 0; a < t.length; a++)
            Kd(t[a]);
      }
    }
    var Jd = function(e, t) {
      return e(t);
    }, kv = function() {
    }, Zd = !1;
    function Ov() {
      var e = of();
      e && (kv(), Al());
    }
    function qs(e, t, a) {
      if (Zd)
        return e(t, a);
      Zd = !0;
      try {
        return Jd(e, t, a);
      } finally {
        Zd = !1, Ov();
      }
    }
    function lf(e, t, a) {
      Jd = e, kv = a;
    }
    function ep(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function tp(e, t, a) {
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
          return !!(a.disabled && ep(t));
        default:
          return !1;
      }
    }
    function Ml(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Nm(a);
      if (i === null)
        return null;
      var l = i[t];
      if (tp(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Qs = !1;
    if ($t)
      try {
        var Gs = {};
        Object.defineProperty(Gs, "passive", {
          get: function() {
            Qs = !0;
          }
        }), window.addEventListener("test", Gs, Gs), window.removeEventListener("test", Gs, Gs);
      } catch {
        Qs = !1;
      }
    function np(e, t, a, i, l, d, v, S, w) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (R) {
        this.onError(R);
      }
    }
    var Dv = np;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var rp = document.createElement("react");
      Dv = function(t, a, i, l, d, v, S, w, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), $ = !1, F = !0, K = window.event, J = Object.getOwnPropertyDescriptor(window, "event");
        function ie() {
          rp.removeEventListener(oe, ft, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = K);
        }
        var qe = Array.prototype.slice.call(arguments, 3);
        function ft() {
          $ = !0, ie(), a.apply(i, qe), F = !1;
        }
        var it, jt = !1, Mt = !1;
        function Y(q) {
          if (it = q.error, jt = !0, it === null && q.colno === 0 && q.lineno === 0 && (Mt = !0), q.defaultPrevented && it != null && typeof it == "object")
            try {
              it._suppressLogging = !0;
            } catch {
            }
        }
        var oe = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Y), rp.addEventListener(oe, ft, !1), R.initEvent(oe, !1, !1), rp.dispatchEvent(R), J && Object.defineProperty(window, "event", J), $ && F && (jt ? Mt && (it = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : it = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(it)), window.removeEventListener("error", Y), !$)
          return ie(), np.apply(this, arguments);
      };
    }
    var ap = Dv, Ra = !1, Ks = null, lo = !1, Va = null, Xs = {
      onError: function(e) {
        Ra = !0, Ks = e;
      }
    };
    function vi(e, t, a, i, l, d, v, S, w) {
      Ra = !1, Ks = null, ap.apply(Xs, arguments);
    }
    function ip(e, t, a, i, l, d, v, S, w) {
      if (vi.apply(this, arguments), Ra) {
        var x = uo();
        lo || (lo = !0, Va = x);
      }
    }
    function jg() {
      if (lo) {
        var e = Va;
        throw lo = !1, Va = null, e;
      }
    }
    function Pg() {
      return Ra;
    }
    function uo() {
      if (Ra) {
        var e = Ks;
        return Ra = !1, Ks = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Di(e) {
      return e._reactInternals;
    }
    function Ru(e) {
      return e._reactInternals !== void 0;
    }
    function uf(e, t) {
      e._reactInternals = t;
    }
    var st = (
      /*                      */
      0
    ), mi = (
      /*                */
      1
    ), cn = (
      /*                    */
      2
    ), nt = (
      /*                       */
      4
    ), It = (
      /*                */
      16
    ), Ia = (
      /*                 */
      32
    ), sr = (
      /*                     */
      64
    ), bt = (
      /*                   */
      128
    ), Fr = (
      /*            */
      256
    ), ka = (
      /*                          */
      512
    ), Zn = (
      /*                     */
      1024
    ), ra = (
      /*                      */
      2048
    ), Ni = (
      /*                    */
      4096
    ), Wo = (
      /*                   */
      8192
    ), Ll = (
      /*             */
      16384
    ), Nv = ra | nt | sr | ka | Zn | Ll, so = (
      /*               */
      32767
    ), Yo = (
      /*                   */
      32768
    ), mr = (
      /*                */
      65536
    ), sf = (
      /* */
      131072
    ), Av = (
      /*                       */
      1048576
    ), Ai = (
      /*                    */
      2097152
    ), Wa = (
      /*                 */
      4194304
    ), qo = (
      /*                */
      8388608
    ), Ya = (
      /*               */
      16777216
    ), zl = (
      /*              */
      33554432
    ), aa = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      nt | Zn | 0
    ), ia = cn | nt | It | Ia | ka | Ni | Wo, yi = nt | sr | ka | Wo, oa = ra | It, yr = Wa | qo | Ai, Ul = p.ReactCurrentOwner;
    function Qo(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (cn | Ni)) !== st && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === M ? a : null;
    }
    function cf(e) {
      if (e.tag === Ue) {
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
    function ff(e) {
      return e.tag === M ? e.stateNode.containerInfo : null;
    }
    function Oa(e) {
      return Qo(e) === e;
    }
    function Da(e) {
      {
        var t = Ul.current;
        if (t !== null && t.tag === k) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Et(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Di(e);
      return l ? Qo(l) === l : !1;
    }
    function bn(e) {
      if (Qo(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function qa(e) {
      var t = e.alternate;
      if (!t) {
        var a = Qo(e);
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
          var S = d.return;
          if (S !== null) {
            i = l = S;
            continue;
          }
          break;
        }
        if (d.child === v.child) {
          for (var w = d.child; w; ) {
            if (w === i)
              return bn(d), e;
            if (w === l)
              return bn(d), t;
            w = w.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = d, l = v;
        else {
          for (var x = !1, R = d.child; R; ) {
            if (R === i) {
              x = !0, i = d, l = v;
              break;
            }
            if (R === l) {
              x = !0, l = d, i = v;
              break;
            }
            R = R.sibling;
          }
          if (!x) {
            for (R = v.child; R; ) {
              if (R === i) {
                x = !0, i = v, l = d;
                break;
              }
              if (R === l) {
                x = !0, l = v, i = d;
                break;
              }
              R = R.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== M)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function op(e) {
      var t = qa(e);
      return t !== null ? lp(t) : null;
    }
    function lp(e) {
      if (e.tag === B || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = lp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function up(e) {
      var t = qa(e);
      return t !== null ? df(t) : null;
    }
    function df(e) {
      if (e.tag === B || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== I) {
          var a = df(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var sp = f.unstable_scheduleCallback, pf = f.unstable_cancelCallback, Mv = f.unstable_shouldYield, ku = f.unstable_requestPaint, er = f.unstable_now, Fg = f.unstable_getCurrentPriorityLevel, la = f.unstable_ImmediatePriority, Ou = f.unstable_UserBlockingPriority, Mi = f.unstable_NormalPriority, Du = f.unstable_LowPriority, Js = f.unstable_IdlePriority, cp = f.unstable_yieldValue, fp = f.unstable_setDisableYieldValue, Go = null, Bn = null, Oe = null, Mr = !1, Na = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Lv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        He && (e = Ot({}, e, {
          getLaneLabelMap: hf,
          injectProfilingHooks: Xo
        })), Go = t.inject(e), Bn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function co(e, t) {
      if (Bn && typeof Bn.onScheduleFiberRoot == "function")
        try {
          Bn.onScheduleFiberRoot(Go, e, t);
        } catch (a) {
          Mr || (Mr = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Ko(e, t) {
      if (Bn && typeof Bn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & bt) === bt;
          if (Pe) {
            var i;
            switch (t) {
              case Yn:
                i = la;
                break;
              case po:
                i = Ou;
                break;
              case Ui:
                i = Mi;
                break;
              case Hu:
                i = Js;
                break;
              default:
                i = Mi;
                break;
            }
            Bn.onCommitFiberRoot(Go, e, i, a);
          }
        } catch (l) {
          Mr || (Mr = !0, y("React instrumentation encountered an error: %s", l));
        }
    }
    function dp(e) {
      if (Bn && typeof Bn.onPostCommitFiberRoot == "function")
        try {
          Bn.onPostCommitFiberRoot(Go, e);
        } catch (t) {
          Mr || (Mr = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function zv(e) {
      if (Bn && typeof Bn.onCommitFiberUnmount == "function")
        try {
          Bn.onCommitFiberUnmount(Go, e);
        } catch (t) {
          Mr || (Mr = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function mn(e) {
      if (typeof cp == "function" && (fp(e), b(e)), Bn && typeof Bn.setStrictMode == "function")
        try {
          Bn.setStrictMode(Go, e);
        } catch (t) {
          Mr || (Mr = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Xo(e) {
      Oe = e;
    }
    function hf() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Vn; a++) {
          var i = Vv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Uv(e) {
      Oe !== null && typeof Oe.markCommitStarted == "function" && Oe.markCommitStarted(e);
    }
    function Zs() {
      Oe !== null && typeof Oe.markCommitStopped == "function" && Oe.markCommitStopped();
    }
    function Nu(e) {
      Oe !== null && typeof Oe.markComponentRenderStarted == "function" && Oe.markComponentRenderStarted(e);
    }
    function jl() {
      Oe !== null && typeof Oe.markComponentRenderStopped == "function" && Oe.markComponentRenderStopped();
    }
    function pp(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStarted == "function" && Oe.markComponentPassiveEffectMountStarted(e);
    }
    function vf() {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStopped == "function" && Oe.markComponentPassiveEffectMountStopped();
    }
    function jv(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStarted == "function" && Oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Pv() {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStopped == "function" && Oe.markComponentPassiveEffectUnmountStopped();
    }
    function Fv(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStarted == "function" && Oe.markComponentLayoutEffectMountStarted(e);
    }
    function hp() {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStopped == "function" && Oe.markComponentLayoutEffectMountStopped();
    }
    function Au(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStarted == "function" && Oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function ec() {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStopped == "function" && Oe.markComponentLayoutEffectUnmountStopped();
    }
    function Hv(e, t, a) {
      Oe !== null && typeof Oe.markComponentErrored == "function" && Oe.markComponentErrored(e, t, a);
    }
    function $v(e, t, a) {
      Oe !== null && typeof Oe.markComponentSuspended == "function" && Oe.markComponentSuspended(e, t, a);
    }
    function Mu(e) {
      Oe !== null && typeof Oe.markLayoutEffectsStarted == "function" && Oe.markLayoutEffectsStarted(e);
    }
    function Bv() {
      Oe !== null && typeof Oe.markLayoutEffectsStopped == "function" && Oe.markLayoutEffectsStopped();
    }
    function tc(e) {
      Oe !== null && typeof Oe.markPassiveEffectsStarted == "function" && Oe.markPassiveEffectsStarted(e);
    }
    function Li() {
      Oe !== null && typeof Oe.markPassiveEffectsStopped == "function" && Oe.markPassiveEffectsStopped();
    }
    function Lu(e) {
      Oe !== null && typeof Oe.markRenderStarted == "function" && Oe.markRenderStarted(e);
    }
    function nc() {
      Oe !== null && typeof Oe.markRenderYielded == "function" && Oe.markRenderYielded();
    }
    function Jo() {
      Oe !== null && typeof Oe.markRenderStopped == "function" && Oe.markRenderStopped();
    }
    function vp(e) {
      Oe !== null && typeof Oe.markRenderScheduled == "function" && Oe.markRenderScheduled(e);
    }
    function zu(e, t) {
      Oe !== null && typeof Oe.markForceUpdateScheduled == "function" && Oe.markForceUpdateScheduled(e, t);
    }
    function mf(e, t) {
      Oe !== null && typeof Oe.markStateUpdateScheduled == "function" && Oe.markStateUpdateScheduled(e, t);
    }
    var ct = (
      /*                         */
      0
    ), at = (
      /*                 */
      1
    ), Bt = (
      /*                    */
      2
    ), Un = (
      /*               */
      8
    ), Qa = (
      /*              */
      16
    ), rc = Math.clz32 ? Math.clz32 : On, mp = Math.log, Pl = Math.LN2;
    function On(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (mp(t) / Pl | 0) | 0;
    }
    var Vn = 31, se = (
      /*                        */
      0
    ), In = (
      /*                          */
      0
    ), dt = (
      /*                        */
      1
    ), zi = (
      /*    */
      2
    ), fo = (
      /*             */
      4
    ), jn = (
      /*            */
      8
    ), Ga = (
      /*                     */
      16
    ), Fl = (
      /*                */
      32
    ), Zo = (
      /*                       */
      4194240
    ), ua = (
      /*                        */
      64
    ), sa = (
      /*                        */
      128
    ), Hl = (
      /*                        */
      256
    ), ac = (
      /*                        */
      512
    ), ic = (
      /*                        */
      1024
    ), yf = (
      /*                        */
      2048
    ), gf = (
      /*                        */
      4096
    ), Sf = (
      /*                        */
      8192
    ), Ef = (
      /*                        */
      16384
    ), bf = (
      /*                       */
      32768
    ), wf = (
      /*                       */
      65536
    ), Cf = (
      /*                       */
      131072
    ), _f = (
      /*                       */
      262144
    ), $l = (
      /*                       */
      524288
    ), xf = (
      /*                       */
      1048576
    ), Uu = (
      /*                       */
      2097152
    ), Bl = (
      /*                            */
      130023424
    ), Vl = (
      /*                             */
      4194304
    ), oc = (
      /*                             */
      8388608
    ), Tf = (
      /*                             */
      16777216
    ), Rf = (
      /*                             */
      33554432
    ), kf = (
      /*                             */
      67108864
    ), yp = Vl, Il = (
      /*          */
      134217728
    ), gp = (
      /*                          */
      268435455
    ), ju = (
      /*               */
      268435456
    ), el = (
      /*                        */
      536870912
    ), Aa = (
      /*                   */
      1073741824
    );
    function Vv(e) {
      {
        if (e & dt)
          return "Sync";
        if (e & zi)
          return "InputContinuousHydration";
        if (e & fo)
          return "InputContinuous";
        if (e & jn)
          return "DefaultHydration";
        if (e & Ga)
          return "Default";
        if (e & Fl)
          return "TransitionHydration";
        if (e & Zo)
          return "Transition";
        if (e & Bl)
          return "Retry";
        if (e & Il)
          return "SelectiveHydration";
        if (e & ju)
          return "IdleHydration";
        if (e & el)
          return "Idle";
        if (e & Aa)
          return "Offscreen";
      }
    }
    var yn = -1, Of = ua, lc = Vl;
    function Pu(e) {
      switch (Wn(e)) {
        case dt:
          return dt;
        case zi:
          return zi;
        case fo:
          return fo;
        case jn:
          return jn;
        case Ga:
          return Ga;
        case Fl:
          return Fl;
        case ua:
        case sa:
        case Hl:
        case ac:
        case ic:
        case yf:
        case gf:
        case Sf:
        case Ef:
        case bf:
        case wf:
        case Cf:
        case _f:
        case $l:
        case xf:
        case Uu:
          return e & Zo;
        case Vl:
        case oc:
        case Tf:
        case Rf:
        case kf:
          return e & Bl;
        case Il:
          return Il;
        case ju:
          return ju;
        case el:
          return el;
        case Aa:
          return Aa;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function uc(e, t) {
      var a = e.pendingLanes;
      if (a === se)
        return se;
      var i = se, l = e.suspendedLanes, d = e.pingedLanes, v = a & gp;
      if (v !== se) {
        var S = v & ~l;
        if (S !== se)
          i = Pu(S);
        else {
          var w = v & d;
          w !== se && (i = Pu(w));
        }
      } else {
        var x = a & ~l;
        x !== se ? i = Pu(x) : d !== se && (i = Pu(d));
      }
      if (i === se)
        return se;
      if (t !== se && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === se) {
        var R = Wn(i), $ = Wn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= $ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === Ga && ($ & Zo) !== se
        )
          return t;
      }
      (i & fo) !== se && (i |= a & Ga);
      var F = e.entangledLanes;
      if (F !== se)
        for (var K = e.entanglements, J = i & F; J > 0; ) {
          var ie = nl(J), qe = 1 << ie;
          i |= K[ie], J &= ~qe;
        }
      return i;
    }
    function Df(e, t) {
      for (var a = e.eventTimes, i = yn; t > 0; ) {
        var l = nl(t), d = 1 << l, v = a[l];
        v > i && (i = v), t &= ~d;
      }
      return i;
    }
    function Hg(e, t) {
      switch (e) {
        case dt:
        case zi:
        case fo:
          return t + 250;
        case jn:
        case Ga:
        case Fl:
        case ua:
        case sa:
        case Hl:
        case ac:
        case ic:
        case yf:
        case gf:
        case Sf:
        case Ef:
        case bf:
        case wf:
        case Cf:
        case _f:
        case $l:
        case xf:
        case Uu:
          return t + 5e3;
        case Vl:
        case oc:
        case Tf:
        case Rf:
        case kf:
          return yn;
        case Il:
        case ju:
        case el:
        case Aa:
          return yn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), yn;
      }
    }
    function $g(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, d = e.expirationTimes, v = a; v > 0; ) {
        var S = nl(v), w = 1 << S, x = d[S];
        x === yn ? ((w & i) === se || (w & l) !== se) && (d[S] = Hg(w, t)) : x <= t && (e.expiredLanes |= w), v &= ~w;
      }
    }
    function Bg(e) {
      return Pu(e.pendingLanes);
    }
    function tl(e) {
      var t = e.pendingLanes & ~Aa;
      return t !== se ? t : t & Aa ? Aa : se;
    }
    function Sp(e) {
      return (e & dt) !== se;
    }
    function sc(e) {
      return (e & gp) !== se;
    }
    function Iv(e) {
      return (e & Bl) === e;
    }
    function Wv(e) {
      var t = dt | fo | Ga;
      return (e & t) === se;
    }
    function Yv(e) {
      return (e & Zo) === e;
    }
    function cc(e, t) {
      var a = zi | fo | jn | Ga;
      return (t & a) !== se;
    }
    function qv(e, t) {
      return (t & e.expiredLanes) !== se;
    }
    function Ep(e) {
      return (e & Zo) !== se;
    }
    function Qv() {
      var e = Of;
      return Of <<= 1, (Of & Zo) === se && (Of = ua), e;
    }
    function ca() {
      var e = lc;
      return lc <<= 1, (lc & Bl) === se && (lc = Vl), e;
    }
    function Wn(e) {
      return e & -e;
    }
    function Fu(e) {
      return Wn(e);
    }
    function nl(e) {
      return 31 - rc(e);
    }
    function Nf(e) {
      return nl(e);
    }
    function fa(e, t) {
      return (e & t) !== se;
    }
    function Wl(e, t) {
      return (e & t) === t;
    }
    function xt(e, t) {
      return e | t;
    }
    function fc(e, t) {
      return e & ~t;
    }
    function Af(e, t) {
      return e & t;
    }
    function Vg(e) {
      return e;
    }
    function Gv(e, t) {
      return e !== In && e < t ? e : t;
    }
    function dc(e) {
      for (var t = [], a = 0; a < Vn; a++)
        t.push(e);
      return t;
    }
    function Yl(e, t, a) {
      e.pendingLanes |= t, t !== el && (e.suspendedLanes = se, e.pingedLanes = se);
      var i = e.eventTimes, l = Nf(t);
      i[l] = a;
    }
    function Kv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = nl(i), d = 1 << l;
        a[l] = yn, i &= ~d;
      }
    }
    function Mf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Lf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = se, e.pingedLanes = se, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, d = e.expirationTimes, v = a; v > 0; ) {
        var S = nl(v), w = 1 << S;
        i[S] = se, l[S] = yn, d[S] = yn, v &= ~w;
      }
    }
    function bp(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var d = nl(l), v = 1 << d;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[d] & t && (i[d] |= t), l &= ~v;
      }
    }
    function Xv(e, t) {
      var a = Wn(t), i;
      switch (a) {
        case fo:
          i = zi;
          break;
        case Ga:
          i = jn;
          break;
        case ua:
        case sa:
        case Hl:
        case ac:
        case ic:
        case yf:
        case gf:
        case Sf:
        case Ef:
        case bf:
        case wf:
        case Cf:
        case _f:
        case $l:
        case xf:
        case Uu:
        case Vl:
        case oc:
        case Tf:
        case Rf:
        case kf:
          i = Fl;
          break;
        case el:
          i = ju;
          break;
        default:
          i = In;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== In ? In : i;
    }
    function zf(e, t, a) {
      if (Na)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = Nf(a), d = 1 << l, v = i[l];
          v.add(t), a &= ~d;
        }
    }
    function wp(e, t) {
      if (Na)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = Nf(t), d = 1 << l, v = a[l];
          v.size > 0 && (v.forEach(function(S) {
            var w = S.alternate;
            (w === null || !i.has(w)) && i.add(S);
          }), v.clear()), t &= ~d;
        }
    }
    function pc(e, t) {
      return null;
    }
    var Yn = dt, po = fo, Ui = Ga, Hu = el, $u = In;
    function Ka() {
      return $u;
    }
    function Pn(e) {
      $u = e;
    }
    function Lr(e, t) {
      var a = $u;
      try {
        return $u = e, t();
      } finally {
        $u = a;
      }
    }
    function Ig(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Wg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Bu(e, t) {
      return e !== 0 && e < t;
    }
    function gr(e) {
      var t = Wn(e);
      return Bu(Yn, t) ? Bu(po, t) ? sc(t) ? Ui : Hu : po : Yn;
    }
    function Uf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ge;
    function Vu(e) {
      Ge = e;
    }
    function Cp(e) {
      Ge(e);
    }
    var jf;
    function Yg(e) {
      jf = e;
    }
    var Iu;
    function Pf(e) {
      Iu = e;
    }
    var Ff;
    function Jv(e) {
      Ff = e;
    }
    var _p;
    function Zv(e) {
      _p = e;
    }
    var hc = !1, Wu = [], xn = null, cr = null, Hr = null, Yu = /* @__PURE__ */ new Map(), qu = /* @__PURE__ */ new Map(), fr = [], em = [
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
      return em.indexOf(e) > -1;
    }
    function qg(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function xp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          xn = null;
          break;
        case "dragenter":
        case "dragleave":
          cr = null;
          break;
        case "mouseover":
        case "mouseout":
          Hr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Yu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          qu.delete(i);
          break;
        }
      }
    }
    function Qu(e, t, a, i, l, d) {
      if (e === null || e.nativeEvent !== d) {
        var v = qg(t, a, i, l, d);
        if (t !== null) {
          var S = rs(t);
          S !== null && jf(S);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var w = e.targetContainers;
      return l !== null && w.indexOf(l) === -1 && w.push(l), e;
    }
    function tm(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var d = l;
          return xn = Qu(xn, e, t, a, i, d), !0;
        }
        case "dragenter": {
          var v = l;
          return cr = Qu(cr, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var S = l;
          return Hr = Qu(Hr, e, t, a, i, S), !0;
        }
        case "pointerover": {
          var w = l, x = w.pointerId;
          return Yu.set(x, Qu(Yu.get(x) || null, e, t, a, i, w)), !0;
        }
        case "gotpointercapture": {
          var R = l, $ = R.pointerId;
          return qu.set($, Qu(qu.get($) || null, e, t, a, i, R)), !0;
        }
      }
      return !1;
    }
    function Tp(e) {
      var t = Tc(e.target);
      if (t !== null) {
        var a = Qo(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ue) {
            var l = cf(a);
            if (l !== null) {
              e.blockedOn = l, _p(e.priority, function() {
                Iu(a);
              });
              return;
            }
          } else if (i === M) {
            var d = a.stateNode;
            if (Uf(d)) {
              e.blockedOn = ff(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Qg(e) {
      for (var t = Ff(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < fr.length && Bu(t, fr[i].priority); i++)
        ;
      fr.splice(i, 0, a), i === 0 && Tp(a);
    }
    function ql(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = zr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, d = new l.constructor(l.type, l);
          Ug(d), l.target.dispatchEvent(d), Tv();
        } else {
          var v = rs(i);
          return v !== null && jf(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Hf(e, t, a) {
      ql(e) && a.delete(t);
    }
    function Xa() {
      hc = !1, xn !== null && ql(xn) && (xn = null), cr !== null && ql(cr) && (cr = null), Hr !== null && ql(Hr) && (Hr = null), Yu.forEach(Hf), qu.forEach(Hf);
    }
    function At(e, t) {
      e.blockedOn === t && (e.blockedOn = null, hc || (hc = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Xa)));
    }
    function Fn(e) {
      if (Wu.length > 0) {
        At(Wu[0], e);
        for (var t = 1; t < Wu.length; t++) {
          var a = Wu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      xn !== null && At(xn, e), cr !== null && At(cr, e), Hr !== null && At(Hr, e);
      var i = function(S) {
        return At(S, e);
      };
      Yu.forEach(i), qu.forEach(i);
      for (var l = 0; l < fr.length; l++) {
        var d = fr[l];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; fr.length > 0; ) {
        var v = fr[0];
        if (v.blockedOn !== null)
          break;
        Tp(v), v.blockedOn === null && fr.shift();
      }
    }
    var wn = p.ReactCurrentBatchConfig, rr = !0;
    function da(e) {
      rr = !!e;
    }
    function Gu() {
      return rr;
    }
    function ar(e, t, a) {
      var i = $f(t), l;
      switch (i) {
        case Yn:
          l = vc;
          break;
        case po:
          l = Ql;
          break;
        case Ui:
        default:
          l = Ku;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function vc(e, t, a, i) {
      var l = Ka(), d = wn.transition;
      wn.transition = null;
      try {
        Pn(Yn), Ku(e, t, a, i);
      } finally {
        Pn(l), wn.transition = d;
      }
    }
    function Ql(e, t, a, i) {
      var l = Ka(), d = wn.transition;
      wn.transition = null;
      try {
        Pn(po), Ku(e, t, a, i);
      } finally {
        Pn(l), wn.transition = d;
      }
    }
    function Ku(e, t, a, i) {
      rr && Rp(e, t, a, i);
    }
    function Rp(e, t, a, i) {
      var l = zr(e, t, a, i);
      if (l === null) {
        f0(e, t, i, rl, a), xp(e, i);
        return;
      }
      if (tm(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (xp(e, i), t & Ws && ji(e)) {
        for (; l !== null; ) {
          var d = rs(l);
          d !== null && Cp(d);
          var v = zr(e, t, a, i);
          if (v === null && f0(e, t, i, rl, a), v === l)
            break;
          l = v;
        }
        l !== null && i.stopPropagation();
        return;
      }
      f0(e, t, i, null, a);
    }
    var rl = null;
    function zr(e, t, a, i) {
      rl = null;
      var l = sn(i), d = Tc(l);
      if (d !== null) {
        var v = Qo(d);
        if (v === null)
          d = null;
        else {
          var S = v.tag;
          if (S === Ue) {
            var w = cf(v);
            if (w !== null)
              return w;
            d = null;
          } else if (S === M) {
            var x = v.stateNode;
            if (Uf(x))
              return ff(v);
            d = null;
          } else
            v !== d && (d = null);
        }
      }
      return rl = d, null;
    }
    function $f(e) {
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
          return Yn;
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
          return po;
        case "message": {
          var t = Fg();
          switch (t) {
            case la:
              return Yn;
            case Ou:
              return po;
            case Mi:
            case Du:
              return Ui;
            case Js:
              return Hu;
            default:
              return Ui;
          }
        }
        default:
          return Ui;
      }
    }
    function Xu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ho(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Bf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function kp(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ja = null, Ju = null, Za = null;
    function Vf(e) {
      return Ja = e, Ju = yc(), !0;
    }
    function mc() {
      Ja = null, Ju = null, Za = null;
    }
    function If() {
      if (Za)
        return Za;
      var e, t = Ju, a = t.length, i, l = yc(), d = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === l[d - i]; i++)
        ;
      var S = i > 1 ? 1 - i : void 0;
      return Za = l.slice(e, S), Za;
    }
    function yc() {
      return "value" in Ja ? Ja.value : Ja.textContent;
    }
    function Gl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function dr() {
      return !0;
    }
    function vo() {
      return !1;
    }
    function Dn(e) {
      function t(a, i, l, d, v) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = d, this.target = v, this.currentTarget = null;
        for (var S in e)
          if (e.hasOwnProperty(S)) {
            var w = e[S];
            w ? this[S] = w(d) : this[S] = d[S];
          }
        var x = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return x ? this.isDefaultPrevented = dr : this.isDefaultPrevented = vo, this.isPropagationStopped = vo, this;
      }
      return Ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = dr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = dr);
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
        isPersistent: dr
      }), t;
    }
    var ir = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Wf = Dn(ir), Kl = Ot({}, ir, {
      view: 0,
      detail: 0
    }), Op = Dn(Kl), Dp, Pi, Zu;
    function Np(e) {
      e !== Zu && (Zu && e.type === "mousemove" ? (Dp = e.screenX - Zu.screenX, Pi = e.screenY - Zu.screenY) : (Dp = 0, Pi = 0), Zu = e);
    }
    var Fi = Ot({}, Kl, {
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
      getModifierState: Ap,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Np(e), Dp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Pi;
      }
    }), Yf = Dn(Fi), Xl = Ot({}, Fi, {
      dataTransfer: 0
    }), nm = Dn(Xl), rm = Ot({}, Kl, {
      relatedTarget: 0
    }), gc = Dn(rm), qf = Ot({}, ir, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Gg = Dn(qf), Kg = Ot({}, ir, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), am = Dn(Kg), im = Ot({}, ir, {
      data: 0
    }), al = Dn(im), Xg = al, es = {
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
    }, om = {
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
    function Hn(e) {
      if (e.key) {
        var t = es[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Gl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? om[e.keyCode] || "Unidentified" : "";
    }
    var Jg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function lm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Jg[e];
      return i ? !!a[i] : !1;
    }
    function Ap(e) {
      return lm;
    }
    var Zg = Ot({}, Kl, {
      key: Hn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ap,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Gl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), um = Dn(Zg), sm = Ot({}, Fi, {
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
    }), cm = Dn(sm), ei = Ot({}, Kl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ap
    }), Mp = Dn(ei), e0 = Ot({}, ir, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), il = Dn(e0), Qf = Ot({}, Fi, {
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
    }), Jl = Dn(Qf), Gf = [9, 13, 27, 32], Kf = 229, Sc = $t && "CompositionEvent" in window, Ec = null;
    $t && "documentMode" in document && (Ec = document.documentMode);
    var Lp = $t && "TextEvent" in window && !Ec, fm = $t && (!Sc || Ec && Ec > 8 && Ec <= 11), zp = 32, Up = String.fromCharCode(zp);
    function Xf() {
      Zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Zt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Zt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Zt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var bc = !1;
    function dm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function jp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function t0(e, t) {
      return e === "keydown" && t.keyCode === Kf;
    }
    function Pp(e, t) {
      switch (e) {
        case "keyup":
          return Gf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Kf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Jf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function wc(e) {
      return e.locale === "ko";
    }
    var ol = !1;
    function Zf(e, t, a, i, l) {
      var d, v;
      if (Sc ? d = jp(t) : ol ? Pp(t, i) && (d = "onCompositionEnd") : t0(t, i) && (d = "onCompositionStart"), !d)
        return null;
      fm && !wc(i) && (!ol && d === "onCompositionStart" ? ol = Vf(l) : d === "onCompositionEnd" && ol && (v = If()));
      var S = gm(a, d);
      if (S.length > 0) {
        var w = new al(d, t, null, i, l);
        if (e.push({
          event: w,
          listeners: S
        }), v)
          w.data = v;
        else {
          var x = Jf(i);
          x !== null && (w.data = x);
        }
      }
    }
    function pm(e, t) {
      switch (e) {
        case "compositionend":
          return Jf(t);
        case "keypress":
          var a = t.which;
          return a !== zp ? null : (bc = !0, Up);
        case "textInput":
          var i = t.data;
          return i === Up && bc ? null : i;
        default:
          return null;
      }
    }
    function n0(e, t) {
      if (ol) {
        if (e === "compositionend" || !Sc && Pp(e, t)) {
          var a = If();
          return mc(), ol = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!dm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return fm && !wc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function ed(e, t, a, i, l) {
      var d;
      if (Lp ? d = pm(t, i) : d = n0(t, i), !d)
        return null;
      var v = gm(a, "onBeforeInput");
      if (v.length > 0) {
        var S = new Xg("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: S,
          listeners: v
        }), S.data = d;
      }
    }
    function r0(e, t, a, i, l, d, v) {
      Zf(e, t, a, i, l), ed(e, t, a, i, l);
    }
    var Cc = {
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
    function hm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Cc[e.type] : t === "textarea";
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
    function td(e) {
      if (!$t)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Zt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Tu(i);
      var l = gm(t, "onChange");
      if (l.length > 0) {
        var d = new Wf("onChange", "change", null, a, i);
        e.push({
          event: d,
          listeners: l
        });
      }
    }
    var o = null, c = null;
    function h(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      r(t, c, e, sn(e)), qs(_, t);
    }
    function _(e) {
      sw(e, 0);
    }
    function N(e) {
      var t = ld(e);
      if (Su(t))
        return e;
    }
    function P(e, t) {
      if (e === "change")
        return t;
    }
    var te = !1;
    $t && (te = td("input") && (!document.documentMode || document.documentMode > 9));
    function ye(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", he);
    }
    function ge() {
      o && (o.detachEvent("onpropertychange", he), o = null, c = null);
    }
    function he(e) {
      e.propertyName === "value" && N(c) && m(e);
    }
    function Ie(e, t, a) {
      e === "focusin" ? (ge(), ye(t, a)) : e === "focusout" && ge();
    }
    function Xe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return N(c);
    }
    function tt(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function qn(e, t) {
      if (e === "click")
        return N(t);
    }
    function W(e, t) {
      if (e === "input" || e === "change")
        return N(t);
    }
    function H(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || mt(e, "number", e.value);
    }
    function Q(e, t, a, i, l, d, v) {
      var S = a ? ld(a) : window, w, x;
      if (h(S) ? w = P : hm(S) ? te ? w = W : (w = Xe, x = Ie) : tt(S) && (w = qn), w) {
        var R = w(t, a);
        if (R) {
          r(e, R, i, l);
          return;
        }
      }
      x && x(t, S, a), t === "focusout" && H(S);
    }
    function _e() {
      Re("onMouseEnter", ["mouseout", "mouseover"]), Re("onMouseLeave", ["mouseout", "mouseover"]), Re("onPointerEnter", ["pointerout", "pointerover"]), Re("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function rt(e, t, a, i, l, d, v) {
      var S = t === "mouseover" || t === "pointerover", w = t === "mouseout" || t === "pointerout";
      if (S && !Rv(i)) {
        var x = i.relatedTarget || i.fromElement;
        if (x && (Tc(x) || Jp(x)))
          return;
      }
      if (!(!w && !S)) {
        var R;
        if (l.window === l)
          R = l;
        else {
          var $ = l.ownerDocument;
          $ ? R = $.defaultView || $.parentWindow : R = window;
        }
        var F, K;
        if (w) {
          var J = i.relatedTarget || i.toElement;
          if (F = a, K = J ? Tc(J) : null, K !== null) {
            var ie = Qo(K);
            (K !== ie || K.tag !== B && K.tag !== X) && (K = null);
          }
        } else
          F = null, K = a;
        if (F !== K) {
          var qe = Yf, ft = "onMouseLeave", it = "onMouseEnter", jt = "mouse";
          (t === "pointerout" || t === "pointerover") && (qe = cm, ft = "onPointerLeave", it = "onPointerEnter", jt = "pointer");
          var Mt = F == null ? R : ld(F), Y = K == null ? R : ld(K), oe = new qe(ft, jt + "leave", F, i, l);
          oe.target = Mt, oe.relatedTarget = Y;
          var q = null, Ee = Tc(l);
          if (Ee === a) {
            var Qe = new qe(it, jt + "enter", K, i, l);
            Qe.target = Y, Qe.relatedTarget = Mt, q = Qe;
          }
          KT(e, oe, q, F, K);
        }
      }
    }
    function pt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Je = typeof Object.is == "function" ? Object.is : pt;
    function ht(e, t) {
      if (Je(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var d = a[l];
        if (!Mn.call(t, d) || !Je(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function or(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Wt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function mo(e, t) {
      for (var a = or(e), i = 0, l = 0; a; ) {
        if (a.nodeType === ro) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = or(Wt(a));
      }
    }
    function a0(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, d = i.anchorOffset, v = i.focusNode, S = i.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return DT(e, l, d, v, S);
    }
    function DT(e, t, a, i, l) {
      var d = 0, v = -1, S = -1, w = 0, x = 0, R = e, $ = null;
      e:
        for (; ; ) {
          for (var F = null; R === t && (a === 0 || R.nodeType === ro) && (v = d + a), R === i && (l === 0 || R.nodeType === ro) && (S = d + l), R.nodeType === ro && (d += R.nodeValue.length), (F = R.firstChild) !== null; )
            $ = R, R = F;
          for (; ; ) {
            if (R === e)
              break e;
            if ($ === t && ++w === a && (v = d), $ === i && ++x === l && (S = d), (F = R.nextSibling) !== null)
              break;
            R = $, $ = R.parentNode;
          }
          R = F;
        }
      return v === -1 || S === -1 ? null : {
        start: v,
        end: S
      };
    }
    function NT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), d = e.textContent.length, v = Math.min(t.start, d), S = t.end === void 0 ? v : Math.min(t.end, d);
        if (!l.extend && v > S) {
          var w = S;
          S = v, v = w;
        }
        var x = mo(e, v), R = mo(e, S);
        if (x && R) {
          if (l.rangeCount === 1 && l.anchorNode === x.node && l.anchorOffset === x.offset && l.focusNode === R.node && l.focusOffset === R.offset)
            return;
          var $ = a.createRange();
          $.setStart(x.node, x.offset), l.removeAllRanges(), v > S ? (l.addRange($), l.extend(R.node, R.offset)) : ($.setEnd(R.node, R.offset), l.addRange($));
        }
      }
    }
    function Xb(e) {
      return e && e.nodeType === ro;
    }
    function Jb(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Xb(e) ? !1 : Xb(t) ? Jb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function AT(e) {
      return e && e.ownerDocument && Jb(e.ownerDocument.documentElement, e);
    }
    function MT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function Zb() {
      for (var e = window, t = ki(); t instanceof e.HTMLIFrameElement; ) {
        if (MT(t))
          e = t.contentWindow;
        else
          return t;
        t = ki(e.document);
      }
      return t;
    }
    function i0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function LT() {
      var e = Zb();
      return {
        focusedElem: e,
        selectionRange: i0(e) ? UT(e) : null
      };
    }
    function zT(e) {
      var t = Zb(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && AT(a)) {
        i !== null && i0(a) && jT(a, i);
        for (var l = [], d = a; d = d.parentNode; )
          d.nodeType === na && l.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < l.length; v++) {
          var S = l[v];
          S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
        }
      }
    }
    function UT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = a0(e), t || {
        start: 0,
        end: 0
      };
    }
    function jT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : NT(e, t);
    }
    var PT = $t && "documentMode" in document && document.documentMode <= 11;
    function FT() {
      Zt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var nd = null, o0 = null, Fp = null, l0 = !1;
    function HT(e) {
      if ("selectionStart" in e && i0(e))
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
    function $T(e) {
      return e.window === e ? e.document : e.nodeType === Ta ? e : e.ownerDocument;
    }
    function ew(e, t, a) {
      var i = $T(a);
      if (!(l0 || nd == null || nd !== ki(i))) {
        var l = HT(nd);
        if (!Fp || !ht(Fp, l)) {
          Fp = l;
          var d = gm(o0, "onSelect");
          if (d.length > 0) {
            var v = new Wf("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: d
            }), v.target = nd;
          }
        }
      }
    }
    function BT(e, t, a, i, l, d, v) {
      var S = a ? ld(a) : window;
      switch (t) {
        case "focusin":
          (hm(S) || S.contentEditable === "true") && (nd = S, o0 = a, Fp = null);
          break;
        case "focusout":
          nd = null, o0 = null, Fp = null;
          break;
        case "mousedown":
          l0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          l0 = !1, ew(e, i, l);
          break;
        case "selectionchange":
          if (PT)
            break;
        case "keydown":
        case "keyup":
          ew(e, i, l);
      }
    }
    function vm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var rd = {
      animationend: vm("Animation", "AnimationEnd"),
      animationiteration: vm("Animation", "AnimationIteration"),
      animationstart: vm("Animation", "AnimationStart"),
      transitionend: vm("Transition", "TransitionEnd")
    }, u0 = {}, tw = {};
    $t && (tw = document.createElement("div").style, "AnimationEvent" in window || (delete rd.animationend.animation, delete rd.animationiteration.animation, delete rd.animationstart.animation), "TransitionEvent" in window || delete rd.transitionend.transition);
    function mm(e) {
      if (u0[e])
        return u0[e];
      if (!rd[e])
        return e;
      var t = rd[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in tw)
          return u0[e] = t[a];
      return e;
    }
    var nw = mm("animationend"), rw = mm("animationiteration"), aw = mm("animationstart"), iw = mm("transitionend"), ow = /* @__PURE__ */ new Map(), lw = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ts(e, t) {
      ow.set(e, t), Zt(t, [e]);
    }
    function VT() {
      for (var e = 0; e < lw.length; e++) {
        var t = lw[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ts(a, "on" + i);
      }
      ts(nw, "onAnimationEnd"), ts(rw, "onAnimationIteration"), ts(aw, "onAnimationStart"), ts("dblclick", "onDoubleClick"), ts("focusin", "onFocus"), ts("focusout", "onBlur"), ts(iw, "onTransitionEnd");
    }
    function IT(e, t, a, i, l, d, v) {
      var S = ow.get(t);
      if (S !== void 0) {
        var w = Wf, x = t;
        switch (t) {
          case "keypress":
            if (Gl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            w = um;
            break;
          case "focusin":
            x = "focus", w = gc;
            break;
          case "focusout":
            x = "blur", w = gc;
            break;
          case "beforeblur":
          case "afterblur":
            w = gc;
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
            w = Yf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = nm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Mp;
            break;
          case nw:
          case rw:
          case aw:
            w = Gg;
            break;
          case iw:
            w = il;
            break;
          case "scroll":
            w = Op;
            break;
          case "wheel":
            w = Jl;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = am;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = cm;
            break;
        }
        var R = (d & Ws) !== 0;
        {
          var $ = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", F = QT(a, S, i.type, R, $);
          if (F.length > 0) {
            var K = new w(S, x, null, i, l);
            e.push({
              event: K,
              listeners: F
            });
          }
        }
      }
    }
    VT(), _e(), n(), FT(), Xf();
    function WT(e, t, a, i, l, d, v) {
      IT(e, t, a, i, l, d);
      var S = (d & zg) === 0;
      S && (rt(e, t, a, i, l), Q(e, t, a, i, l), BT(e, t, a, i, l), r0(e, t, a, i, l));
    }
    var Hp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], s0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Hp));
    function uw(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ip(i, t, void 0, e), e.currentTarget = null;
    }
    function YT(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var d = t[l], v = d.instance, S = d.currentTarget, w = d.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          uw(e, w, S), i = v;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var R = t[x], $ = R.instance, F = R.currentTarget, K = R.listener;
          if ($ !== i && e.isPropagationStopped())
            return;
          uw(e, K, F), i = $;
        }
    }
    function sw(e, t) {
      for (var a = (t & Ws) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], d = l.event, v = l.listeners;
        YT(d, v, a);
      }
      jg();
    }
    function qT(e, t, a, i, l) {
      var d = sn(a), v = [];
      WT(v, e, i, a, d, t), sw(v, t);
    }
    function Nn(e, t) {
      s0.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Ck(t), l = XT(e, a);
      i.has(l) || (cw(t, e, Is, a), i.add(l));
    }
    function c0(e, t, a) {
      s0.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ws), cw(a, e, i, t);
    }
    var ym = "_reactListening" + Math.random().toString(36).slice(2);
    function $p(e) {
      if (!e[ym]) {
        e[ym] = !0, ot.forEach(function(a) {
          a !== "selectionchange" && (s0.has(a) || c0(a, !1, e), c0(a, !0, e));
        });
        var t = e.nodeType === Ta ? e : e.ownerDocument;
        t !== null && (t[ym] || (t[ym] = !0, c0("selectionchange", !1, t)));
      }
    }
    function cw(e, t, a, i, l) {
      var d = ar(e, t, a), v = void 0;
      Qs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? Bf(e, t, d, v) : ho(e, t, d) : v !== void 0 ? kp(e, t, d, v) : Xu(e, t, d);
    }
    function fw(e, t) {
      return e === t || e.nodeType === zn && e.parentNode === t;
    }
    function f0(e, t, a, i, l) {
      var d = i;
      if (!(t & af) && !(t & Is)) {
        var v = l;
        if (i !== null) {
          var S = i;
          e:
            for (; ; ) {
              if (S === null)
                return;
              var w = S.tag;
              if (w === M || w === I) {
                var x = S.stateNode.containerInfo;
                if (fw(x, v))
                  break;
                if (w === I)
                  for (var R = S.return; R !== null; ) {
                    var $ = R.tag;
                    if ($ === M || $ === I) {
                      var F = R.stateNode.containerInfo;
                      if (fw(F, v))
                        return;
                    }
                    R = R.return;
                  }
                for (; x !== null; ) {
                  var K = Tc(x);
                  if (K === null)
                    return;
                  var J = K.tag;
                  if (J === B || J === X) {
                    S = d = K;
                    continue e;
                  }
                  x = x.parentNode;
                }
              }
              S = S.return;
            }
        }
      }
      qs(function() {
        return qT(e, t, a, d);
      });
    }
    function Bp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function QT(e, t, a, i, l, d) {
      for (var v = t !== null ? t + "Capture" : null, S = i ? v : t, w = [], x = e, R = null; x !== null; ) {
        var $ = x, F = $.stateNode, K = $.tag;
        if (K === B && F !== null && (R = F, S !== null)) {
          var J = Ml(x, S);
          J != null && w.push(Bp(x, J, R));
        }
        if (l)
          break;
        x = x.return;
      }
      return w;
    }
    function gm(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var d = l, v = d.stateNode, S = d.tag;
        if (S === B && v !== null) {
          var w = v, x = Ml(l, a);
          x != null && i.unshift(Bp(l, x, w));
          var R = Ml(l, t);
          R != null && i.push(Bp(l, R, w));
        }
        l = l.return;
      }
      return i;
    }
    function ad(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== B);
      return e || null;
    }
    function GT(e, t) {
      for (var a = e, i = t, l = 0, d = a; d; d = ad(d))
        l++;
      for (var v = 0, S = i; S; S = ad(S))
        v++;
      for (; l - v > 0; )
        a = ad(a), l--;
      for (; v - l > 0; )
        i = ad(i), v--;
      for (var w = l; w--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = ad(a), i = ad(i);
      }
      return null;
    }
    function dw(e, t, a, i, l) {
      for (var d = t._reactName, v = [], S = a; S !== null && S !== i; ) {
        var w = S, x = w.alternate, R = w.stateNode, $ = w.tag;
        if (x !== null && x === i)
          break;
        if ($ === B && R !== null) {
          var F = R;
          if (l) {
            var K = Ml(S, d);
            K != null && v.unshift(Bp(S, K, F));
          } else if (!l) {
            var J = Ml(S, d);
            J != null && v.push(Bp(S, J, F));
          }
        }
        S = S.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function KT(e, t, a, i, l) {
      var d = i && l ? GT(i, l) : null;
      i !== null && dw(e, t, i, d, !1), l !== null && a !== null && dw(e, a, l, d, !0);
    }
    function XT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var ti = !1, Vp = "dangerouslySetInnerHTML", Sm = "suppressContentEditableWarning", ns = "suppressHydrationWarning", pw = "autoFocus", _c = "children", xc = "style", Em = "__html", d0, bm, Ip, hw, wm, vw, mw;
    d0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, bm = function(e, t) {
      xu(e, t), bv(e, t), Io(e, t, {
        registrationNameDependencies: St,
        possibleRegistrationNames: vt
      });
    }, vw = $t && !document.documentMode, Ip = function(e, t, a) {
      if (!ti) {
        var i = Cm(a), l = Cm(t);
        l !== i && (ti = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, hw = function(e) {
      if (!ti) {
        ti = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, wm = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, mw = function(e, t) {
      var a = e.namespaceURI === no ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var JT = /\r\n?/g, ZT = /\u0000|\uFFFD/g;
    function Cm(e) {
      Ea(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(JT, `
`).replace(ZT, "");
    }
    function _m(e, t, a, i) {
      var l = Cm(t), d = Cm(e);
      if (d !== l && (i && (ti || (ti = !0, y('Text content did not match. Server: "%s" Client: "%s"', d, l))), a && O))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function yw(e) {
      return e.nodeType === Ta ? e : e.ownerDocument;
    }
    function eR() {
    }
    function xm(e) {
      e.onclick = eR;
    }
    function tR(e, t, a, i, l) {
      for (var d in i)
        if (i.hasOwnProperty(d)) {
          var v = i[d];
          if (d === xc)
            v && Object.freeze(v), vv(t, v);
          else if (d === Vp) {
            var S = v ? v[Em] : void 0;
            S != null && ov(t, S);
          } else if (d === _c)
            if (typeof v == "string") {
              var w = e !== "textarea" || v !== "";
              w && Ps(t, v);
            } else
              typeof v == "number" && Ps(t, "" + v);
          else
            d === Sm || d === ns || d === pw || (St.hasOwnProperty(d) ? v != null && (typeof v != "function" && wm(d, v), d === "onScroll" && Nn("scroll", t)) : v != null && Qi(t, d, v, l));
        }
    }
    function nR(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var d = t[l], v = t[l + 1];
        d === xc ? vv(e, v) : d === Vp ? ov(e, v) : d === _c ? Ps(e, v) : Qi(e, d, v, i);
      }
    }
    function rR(e, t, a, i) {
      var l, d = yw(a), v, S = i;
      if (S === no && (S = $d(e)), S === no) {
        if (l = Dl(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var w = d.createElement("div");
          w.innerHTML = "<script><\/script>";
          var x = w.firstChild;
          v = w.removeChild(x);
        } else if (typeof t.is == "string")
          v = d.createElement(e, {
            is: t.is
          });
        else if (v = d.createElement(e), e === "select") {
          var R = v;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        v = d.createElementNS(S, e);
      return S === no && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !Mn.call(d0, e) && (d0[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function aR(e, t) {
      return yw(t).createTextNode(e);
    }
    function iR(e, t, a, i) {
      var l = Dl(t, a);
      bm(t, a);
      var d;
      switch (t) {
        case "dialog":
          Nn("cancel", e), Nn("close", e), d = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Nn("load", e), d = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < Hp.length; v++)
            Nn(Hp[v], e);
          d = a;
          break;
        case "source":
          Nn("error", e), d = a;
          break;
        case "img":
        case "image":
        case "link":
          Nn("error", e), Nn("load", e), d = a;
          break;
        case "details":
          Nn("toggle", e), d = a;
          break;
        case "input":
          z(e, a), d = C(e, a), Nn("invalid", e);
          break;
        case "option":
          nn(e, a), d = a;
          break;
        case "select":
          js(e, a), d = Us(e, a), Nn("invalid", e);
          break;
        case "textarea":
          av(e, a), d = Hd(e, a), Nn("invalid", e);
          break;
        default:
          d = a;
      }
      switch ($s(t, d), tR(t, e, i, d, l), t) {
        case "input":
          Zi(e), Ce(e, a, !1);
          break;
        case "textarea":
          Zi(e), Xc(e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          Fd(e, a);
          break;
        default:
          typeof d.onClick == "function" && xm(e);
          break;
      }
    }
    function oR(e, t, a, i, l) {
      bm(t, i);
      var d = null, v, S;
      switch (t) {
        case "input":
          v = C(e, a), S = C(e, i), d = [];
          break;
        case "select":
          v = Us(e, a), S = Us(e, i), d = [];
          break;
        case "textarea":
          v = Hd(e, a), S = Hd(e, i), d = [];
          break;
        default:
          v = a, S = i, typeof v.onClick != "function" && typeof S.onClick == "function" && xm(e);
          break;
      }
      $s(t, S);
      var w, x, R = null;
      for (w in v)
        if (!(S.hasOwnProperty(w) || !v.hasOwnProperty(w) || v[w] == null))
          if (w === xc) {
            var $ = v[w];
            for (x in $)
              $.hasOwnProperty(x) && (R || (R = {}), R[x] = "");
          } else
            w === Vp || w === _c || w === Sm || w === ns || w === pw || (St.hasOwnProperty(w) ? d || (d = []) : (d = d || []).push(w, null));
      for (w in S) {
        var F = S[w], K = v != null ? v[w] : void 0;
        if (!(!S.hasOwnProperty(w) || F === K || F == null && K == null))
          if (w === xc)
            if (F && Object.freeze(F), K) {
              for (x in K)
                K.hasOwnProperty(x) && (!F || !F.hasOwnProperty(x)) && (R || (R = {}), R[x] = "");
              for (x in F)
                F.hasOwnProperty(x) && K[x] !== F[x] && (R || (R = {}), R[x] = F[x]);
            } else
              R || (d || (d = []), d.push(w, R)), R = F;
          else if (w === Vp) {
            var J = F ? F[Em] : void 0, ie = K ? K[Em] : void 0;
            J != null && ie !== J && (d = d || []).push(w, J);
          } else
            w === _c ? (typeof F == "string" || typeof F == "number") && (d = d || []).push(w, "" + F) : w === Sm || w === ns || (St.hasOwnProperty(w) ? (F != null && (typeof F != "function" && wm(w, F), w === "onScroll" && Nn("scroll", e)), !d && K !== F && (d = [])) : (d = d || []).push(w, F));
      }
      return R && (mv(R, S[xc]), (d = d || []).push(xc, R)), d;
    }
    function lR(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && G(e, l);
      var d = Dl(a, i), v = Dl(a, l);
      switch (nR(e, t, d, v), a) {
        case "input":
          ne(e, l);
          break;
        case "textarea":
          iv(e, l);
          break;
        case "select":
          _g(e, l);
          break;
      }
    }
    function uR(e) {
      {
        var t = e.toLowerCase();
        return tf.hasOwnProperty(t) && tf[t] || null;
      }
    }
    function sR(e, t, a, i, l, d, v) {
      var S, w;
      switch (S = Dl(t, a), bm(t, a), t) {
        case "dialog":
          Nn("cancel", e), Nn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Nn("load", e);
          break;
        case "video":
        case "audio":
          for (var x = 0; x < Hp.length; x++)
            Nn(Hp[x], e);
          break;
        case "source":
          Nn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Nn("error", e), Nn("load", e);
          break;
        case "details":
          Nn("toggle", e);
          break;
        case "input":
          z(e, a), Nn("invalid", e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          js(e, a), Nn("invalid", e);
          break;
        case "textarea":
          av(e, a), Nn("invalid", e);
          break;
      }
      $s(t, a);
      {
        w = /* @__PURE__ */ new Set();
        for (var R = e.attributes, $ = 0; $ < R.length; $++) {
          var F = R[$].name.toLowerCase();
          switch (F) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              w.add(R[$].name);
          }
        }
      }
      var K = null;
      for (var J in a)
        if (a.hasOwnProperty(J)) {
          var ie = a[J];
          if (J === _c)
            typeof ie == "string" ? e.textContent !== ie && (a[ns] !== !0 && _m(e.textContent, ie, d, v), K = [_c, ie]) : typeof ie == "number" && e.textContent !== "" + ie && (a[ns] !== !0 && _m(e.textContent, ie, d, v), K = [_c, "" + ie]);
          else if (St.hasOwnProperty(J))
            ie != null && (typeof ie != "function" && wm(J, ie), J === "onScroll" && Nn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var qe = void 0, ft = S && Se ? null : ur(J);
            if (a[ns] !== !0) {
              if (!(J === Sm || J === ns || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              J === "value" || J === "checked" || J === "selected")) {
                if (J === Vp) {
                  var it = e.innerHTML, jt = ie ? ie[Em] : void 0;
                  if (jt != null) {
                    var Mt = mw(e, jt);
                    Mt !== it && Ip(J, it, Mt);
                  }
                } else if (J === xc) {
                  if (w.delete(J), vw) {
                    var Y = Lg(ie);
                    qe = e.getAttribute("style"), Y !== qe && Ip(J, qe, Y);
                  }
                } else if (S && !Se)
                  w.delete(J.toLowerCase()), qe = Fa(e, J, ie), ie !== qe && Ip(J, qe, ie);
                else if (!Tn(J, ft, S) && !en(J, ie, ft, S)) {
                  var oe = !1;
                  if (ft !== null)
                    w.delete(ft.attributeName), qe = ci(e, J, ie, ft);
                  else {
                    var q = i;
                    if (q === no && (q = $d(t)), q === no)
                      w.delete(J.toLowerCase());
                    else {
                      var Ee = uR(J);
                      Ee !== null && Ee !== J && (oe = !0, w.delete(Ee)), w.delete(J);
                    }
                    qe = Fa(e, J, ie);
                  }
                  var Qe = Se;
                  !Qe && ie !== qe && !oe && Ip(J, qe, ie);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      w.size > 0 && a[ns] !== !0 && hw(w), t) {
        case "input":
          Zi(e), Ce(e, a, !0);
          break;
        case "textarea":
          Zi(e), Xc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && xm(e);
          break;
      }
      return K;
    }
    function cR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function p0(e, t) {
      {
        if (ti)
          return;
        ti = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function h0(e, t) {
      {
        if (ti)
          return;
        ti = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function v0(e, t, a) {
      {
        if (ti)
          return;
        ti = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function m0(e, t) {
      {
        if (t === "" || ti)
          return;
        ti = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function fR(e, t, a) {
      switch (t) {
        case "input":
          et(e, a);
          return;
        case "textarea":
          xg(e, a);
          return;
        case "select":
          nv(e, a);
          return;
      }
    }
    var Wp = function() {
    }, Yp = function() {
    };
    {
      var dR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], gw = [
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
      ], pR = gw.concat(["button"]), hR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Sw = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Yp = function(e, t) {
        var a = Ot({}, e || Sw), i = {
          tag: t
        };
        return gw.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), pR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), dR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var vR = function(e, t) {
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
            return hR.indexOf(t) === -1;
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
      }, mR = function(e, t) {
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
      }, Ew = {};
      Wp = function(e, t, a) {
        a = a || Sw;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = vR(e, l) ? null : i, v = d ? null : mR(e, a), S = d || v;
        if (S) {
          var w = S.tag, x = !!d + "|" + e + "|" + w;
          if (!Ew[x]) {
            Ew[x] = !0;
            var R = e, $ = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", $ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", d) {
              var F = "";
              w === "table" && e === "tr" && (F += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, w, $, F);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, w);
          }
        }
      };
    }
    var Tm = "suppressHydrationWarning", Rm = "$", km = "/$", qp = "$?", Qp = "$!", yR = "style", y0 = null, g0 = null;
    function gR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ta:
        case Vd: {
          t = i === Ta ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Bd(null, "");
          break;
        }
        default: {
          var d = i === zn ? e.parentNode : e, v = d.namespaceURI || null;
          t = d.tagName, a = Bd(v, t);
          break;
        }
      }
      {
        var S = t.toLowerCase(), w = Yp(null, S);
        return {
          namespace: a,
          ancestorInfo: w
        };
      }
    }
    function SR(e, t, a) {
      {
        var i = e, l = Bd(i.namespace, t), d = Yp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: d
        };
      }
    }
    function sj(e) {
      return e;
    }
    function ER(e) {
      y0 = Gu(), g0 = LT();
      var t = null;
      return da(!1), t;
    }
    function bR(e) {
      zT(g0), da(y0), y0 = null, g0 = null;
    }
    function wR(e, t, a, i, l) {
      var d;
      {
        var v = i;
        if (Wp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, w = Yp(v.ancestorInfo, e);
          Wp(null, S, w);
        }
        d = v.namespace;
      }
      var x = rR(e, t, a, d);
      return Xp(l, x), T0(x, t), x;
    }
    function CR(e, t) {
      e.appendChild(t);
    }
    function _R(e, t, a, i, l) {
      switch (iR(e, t, a, i), t) {
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
    function xR(e, t, a, i, l, d) {
      {
        var v = d;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var S = "" + i.children, w = Yp(v.ancestorInfo, t);
          Wp(null, S, w);
        }
      }
      return oR(e, t, a, i);
    }
    function S0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function TR(e, t, a, i) {
      {
        var l = a;
        Wp(null, e, l.ancestorInfo);
      }
      var d = aR(e, t);
      return Xp(i, d), d;
    }
    function RR() {
      var e = window.event;
      return e === void 0 ? Ui : $f(e.type);
    }
    var E0 = typeof setTimeout == "function" ? setTimeout : void 0, kR = typeof clearTimeout == "function" ? clearTimeout : void 0, b0 = -1, bw = typeof Promise == "function" ? Promise : void 0, OR = typeof queueMicrotask == "function" ? queueMicrotask : typeof bw < "u" ? function(e) {
      return bw.resolve(null).then(e).catch(DR);
    } : E0;
    function DR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function NR(e, t, a, i) {
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
    function AR(e, t, a, i, l, d) {
      lR(e, t, a, i, l), T0(e, l);
    }
    function ww(e) {
      Ps(e, "");
    }
    function MR(e, t, a) {
      e.nodeValue = a;
    }
    function LR(e, t) {
      e.appendChild(t);
    }
    function zR(e, t) {
      var a;
      e.nodeType === zn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && xm(a);
    }
    function UR(e, t, a) {
      e.insertBefore(t, a);
    }
    function jR(e, t, a) {
      e.nodeType === zn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function PR(e, t) {
      e.removeChild(t);
    }
    function FR(e, t) {
      e.nodeType === zn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function w0(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === zn) {
          var d = l.data;
          if (d === km)
            if (i === 0) {
              e.removeChild(l), Fn(t);
              return;
            } else
              i--;
          else
            (d === Rm || d === qp || d === Qp) && i++;
        }
        a = l;
      } while (a);
      Fn(t);
    }
    function HR(e, t) {
      e.nodeType === zn ? w0(e.parentNode, t) : e.nodeType === na && w0(e, t), Fn(e);
    }
    function $R(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function BR(e) {
      e.nodeValue = "";
    }
    function VR(e, t) {
      e = e;
      var a = t[yR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Bo("display", i);
    }
    function IR(e, t) {
      e.nodeValue = t;
    }
    function WR(e) {
      e.nodeType === na ? e.textContent = "" : e.nodeType === Ta && e.documentElement && e.removeChild(e.documentElement);
    }
    function YR(e, t, a) {
      return e.nodeType !== na || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function qR(e, t) {
      return t === "" || e.nodeType !== ro ? null : e;
    }
    function QR(e) {
      return e.nodeType !== zn ? null : e;
    }
    function Cw(e) {
      return e.data === qp;
    }
    function C0(e) {
      return e.data === Qp;
    }
    function GR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function KR(e, t) {
      e._reactRetry = t;
    }
    function Om(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === na || t === ro)
          break;
        if (t === zn) {
          var a = e.data;
          if (a === Rm || a === Qp || a === qp)
            break;
          if (a === km)
            return null;
        }
      }
      return e;
    }
    function Gp(e) {
      return Om(e.nextSibling);
    }
    function XR(e) {
      return Om(e.firstChild);
    }
    function JR(e) {
      return Om(e.firstChild);
    }
    function ZR(e) {
      return Om(e.nextSibling);
    }
    function ek(e, t, a, i, l, d, v) {
      Xp(d, e), T0(e, a);
      var S;
      {
        var w = l;
        S = w.namespace;
      }
      var x = (d.mode & at) !== ct;
      return sR(e, t, a, S, i, x, v);
    }
    function tk(e, t, a, i) {
      return Xp(a, e), a.mode & at, cR(e, t);
    }
    function nk(e, t) {
      Xp(t, e);
    }
    function rk(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === zn) {
          var i = t.data;
          if (i === km) {
            if (a === 0)
              return Gp(t);
            a--;
          } else
            (i === Rm || i === Qp || i === qp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function _w(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === zn) {
          var i = t.data;
          if (i === Rm || i === Qp || i === qp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === km && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ak(e) {
      Fn(e);
    }
    function ik(e) {
      Fn(e);
    }
    function ok(e) {
      return e !== "head" && e !== "body";
    }
    function lk(e, t, a, i) {
      var l = !0;
      _m(t.nodeValue, a, i, l);
    }
    function uk(e, t, a, i, l, d) {
      if (t[Tm] !== !0) {
        var v = !0;
        _m(i.nodeValue, l, d, v);
      }
    }
    function sk(e, t) {
      t.nodeType === na ? p0(e, t) : t.nodeType === zn || h0(e, t);
    }
    function ck(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === na ? p0(a, t) : t.nodeType === zn || h0(a, t));
      }
    }
    function fk(e, t, a, i, l) {
      (l || t[Tm] !== !0) && (i.nodeType === na ? p0(a, i) : i.nodeType === zn || h0(a, i));
    }
    function dk(e, t, a) {
      v0(e, t);
    }
    function pk(e, t) {
      m0(e, t);
    }
    function hk(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && v0(i, t);
      }
    }
    function vk(e, t) {
      {
        var a = e.parentNode;
        a !== null && m0(a, t);
      }
    }
    function mk(e, t, a, i, l, d) {
      (d || t[Tm] !== !0) && v0(a, i);
    }
    function yk(e, t, a, i, l) {
      (l || t[Tm] !== !0) && m0(a, i);
    }
    function gk(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Sk(e) {
      $p(e);
    }
    var id = Math.random().toString(36).slice(2), od = "__reactFiber$" + id, _0 = "__reactProps$" + id, Kp = "__reactContainer$" + id, x0 = "__reactEvents$" + id, Ek = "__reactListeners$" + id, bk = "__reactHandles$" + id;
    function wk(e) {
      delete e[od], delete e[_0], delete e[x0], delete e[Ek], delete e[bk];
    }
    function Xp(e, t) {
      t[od] = e;
    }
    function Dm(e, t) {
      t[Kp] = e;
    }
    function xw(e) {
      e[Kp] = null;
    }
    function Jp(e) {
      return !!e[Kp];
    }
    function Tc(e) {
      var t = e[od];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Kp] || a[od], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = _w(e); l !== null; ) {
              var d = l[od];
              if (d)
                return d;
              l = _w(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function rs(e) {
      var t = e[od] || e[Kp];
      return t && (t.tag === B || t.tag === X || t.tag === Ue || t.tag === M) ? t : null;
    }
    function ld(e) {
      if (e.tag === B || e.tag === X)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Nm(e) {
      return e[_0] || null;
    }
    function T0(e, t) {
      e[_0] = t;
    }
    function Ck(e) {
      var t = e[x0];
      return t === void 0 && (t = e[x0] = /* @__PURE__ */ new Set()), t;
    }
    var Tw = {}, Rw = p.ReactDebugCurrentFrame;
    function Am(e) {
      if (e) {
        var t = e._owner, a = Lt(e.type, e._source, t ? t.type : null);
        Rw.setExtraStackFrame(a);
      } else
        Rw.setExtraStackFrame(null);
    }
    function yo(e, t, a, i, l) {
      {
        var d = Function.call.bind(Mn);
        for (var v in e)
          if (d(e, v)) {
            var S = void 0;
            try {
              if (typeof e[v] != "function") {
                var w = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              S = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              S = x;
            }
            S && !(S instanceof Error) && (Am(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof S), Am(null)), S instanceof Error && !(S.message in Tw) && (Tw[S.message] = !0, Am(l), y("Failed %s type: %s", a, S.message), Am(null));
          }
      }
    }
    var R0 = [], Mm;
    Mm = [];
    var Zl = -1;
    function as(e) {
      return {
        current: e
      };
    }
    function pa(e, t) {
      if (Zl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Mm[Zl] && y("Unexpected Fiber popped."), e.current = R0[Zl], R0[Zl] = null, Mm[Zl] = null, Zl--;
    }
    function ha(e, t, a) {
      Zl++, R0[Zl] = e.current, Mm[Zl] = a, e.current = t;
    }
    var k0;
    k0 = {};
    var gi = {};
    Object.freeze(gi);
    var eu = as(gi), ll = as(!1), O0 = gi;
    function ud(e, t, a) {
      return a && ul(t) ? O0 : eu.current;
    }
    function kw(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function sd(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return gi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var v in i)
          d[v] = t[v];
        {
          var S = Et(e) || "Unknown";
          yo(i, d, "context", S);
        }
        return l && kw(e, t, d), d;
      }
    }
    function Lm() {
      return ll.current;
    }
    function ul(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function zm(e) {
      pa(ll, e), pa(eu, e);
    }
    function D0(e) {
      pa(ll, e), pa(eu, e);
    }
    function Ow(e, t, a) {
      {
        if (eu.current !== gi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ha(eu, t, e), ha(ll, a, e);
      }
    }
    function Dw(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var d = Et(e) || "Unknown";
            k0[d] || (k0[d] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var S in v)
          if (!(S in l))
            throw new Error((Et(e) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var w = Et(e) || "Unknown";
          yo(l, v, "child context", w);
        }
        return Ot({}, a, v);
      }
    }
    function Um(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || gi;
        return O0 = eu.current, ha(eu, a, e), ha(ll, ll.current, e), !0;
      }
    }
    function Nw(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = Dw(e, t, O0);
          i.__reactInternalMemoizedMergedChildContext = l, pa(ll, e), pa(eu, e), ha(eu, l, e), ha(ll, a, e);
        } else
          pa(ll, e), ha(ll, a, e);
      }
    }
    function _k(e) {
      {
        if (!Oa(e) || e.tag !== k)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case M:
              return t.stateNode.context;
            case k: {
              var a = t.type;
              if (ul(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var is = 0, jm = 1, tu = null, N0 = !1, A0 = !1;
    function Aw(e) {
      tu === null ? tu = [e] : tu.push(e);
    }
    function xk(e) {
      N0 = !0, Aw(e);
    }
    function Mw() {
      N0 && os();
    }
    function os() {
      if (!A0 && tu !== null) {
        A0 = !0;
        var e = 0, t = Ka();
        try {
          var a = !0, i = tu;
          for (Pn(Yn); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          tu = null, N0 = !1;
        } catch (d) {
          throw tu !== null && (tu = tu.slice(e + 1)), sp(la, os), d;
        } finally {
          Pn(t), A0 = !1;
        }
      }
      return null;
    }
    var cd = [], fd = 0, Pm = null, Fm = 0, Hi = [], $i = 0, Rc = null, nu = 1, ru = "";
    function Tk(e) {
      return Oc(), (e.flags & Av) !== st;
    }
    function Rk(e) {
      return Oc(), Fm;
    }
    function kk() {
      var e = ru, t = nu, a = t & ~Ok(t);
      return a.toString(32) + e;
    }
    function kc(e, t) {
      Oc(), cd[fd++] = Fm, cd[fd++] = Pm, Pm = e, Fm = t;
    }
    function Lw(e, t, a) {
      Oc(), Hi[$i++] = nu, Hi[$i++] = ru, Hi[$i++] = Rc, Rc = e;
      var i = nu, l = ru, d = Hm(i) - 1, v = i & ~(1 << d), S = a + 1, w = Hm(t) + d;
      if (w > 30) {
        var x = d - d % 5, R = (1 << x) - 1, $ = (v & R).toString(32), F = v >> x, K = d - x, J = Hm(t) + K, ie = S << K, qe = ie | F, ft = $ + l;
        nu = 1 << J | qe, ru = ft;
      } else {
        var it = S << d, jt = it | v, Mt = l;
        nu = 1 << w | jt, ru = Mt;
      }
    }
    function M0(e) {
      Oc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        kc(e, a), Lw(e, a, i);
      }
    }
    function Hm(e) {
      return 32 - rc(e);
    }
    function Ok(e) {
      return 1 << Hm(e) - 1;
    }
    function L0(e) {
      for (; e === Pm; )
        Pm = cd[--fd], cd[fd] = null, Fm = cd[--fd], cd[fd] = null;
      for (; e === Rc; )
        Rc = Hi[--$i], Hi[$i] = null, ru = Hi[--$i], Hi[$i] = null, nu = Hi[--$i], Hi[$i] = null;
    }
    function Dk() {
      return Oc(), Rc !== null ? {
        id: nu,
        overflow: ru
      } : null;
    }
    function Nk(e, t) {
      Oc(), Hi[$i++] = nu, Hi[$i++] = ru, Hi[$i++] = Rc, nu = t.id, ru = t.overflow, Rc = e;
    }
    function Oc() {
      Br() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var $r = null, Bi = null, go = !1, Dc = !1, ls = null;
    function Ak() {
      go && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function zw() {
      Dc = !0;
    }
    function Mk() {
      return Dc;
    }
    function Lk(e) {
      var t = e.stateNode.containerInfo;
      return Bi = JR(t), $r = e, go = !0, ls = null, Dc = !1, !0;
    }
    function zk(e, t, a) {
      return Bi = ZR(t), $r = e, go = !0, ls = null, Dc = !1, a !== null && Nk(e, a), !0;
    }
    function Uw(e, t) {
      switch (e.tag) {
        case M: {
          sk(e.stateNode.containerInfo, t);
          break;
        }
        case B: {
          var a = (e.mode & at) !== ct;
          fk(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ue: {
          var i = e.memoizedState;
          i.dehydrated !== null && ck(i.dehydrated, t);
          break;
        }
      }
    }
    function jw(e, t) {
      Uw(e, t);
      var a = PN();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= It) : i.push(a);
    }
    function z0(e, t) {
      {
        if (Dc)
          return;
        switch (e.tag) {
          case M: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case B:
                var i = t.type;
                t.pendingProps, dk(a, i);
                break;
              case X:
                var l = t.pendingProps;
                pk(a, l);
                break;
            }
            break;
          }
          case B: {
            var d = e.type, v = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case B: {
                var w = t.type, x = t.pendingProps, R = (e.mode & at) !== ct;
                mk(
                  d,
                  v,
                  S,
                  w,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case X: {
                var $ = t.pendingProps, F = (e.mode & at) !== ct;
                yk(
                  d,
                  v,
                  S,
                  $,
                  // TODO: Delete this argument when we remove the legacy root API.
                  F
                );
                break;
              }
            }
            break;
          }
          case Ue: {
            var K = e.memoizedState, J = K.dehydrated;
            if (J !== null)
              switch (t.tag) {
                case B:
                  var ie = t.type;
                  t.pendingProps, hk(J, ie);
                  break;
                case X:
                  var qe = t.pendingProps;
                  vk(J, qe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Pw(e, t) {
      t.flags = t.flags & ~Ni | cn, z0(e, t);
    }
    function Fw(e, t) {
      switch (e.tag) {
        case B: {
          var a = e.type;
          e.pendingProps;
          var i = YR(t, a);
          return i !== null ? (e.stateNode = i, $r = e, Bi = XR(i), !0) : !1;
        }
        case X: {
          var l = e.pendingProps, d = qR(t, l);
          return d !== null ? (e.stateNode = d, $r = e, Bi = null, !0) : !1;
        }
        case Ue: {
          var v = QR(t);
          if (v !== null) {
            var S = {
              dehydrated: v,
              treeContext: Dk(),
              retryLane: Aa
            };
            e.memoizedState = S;
            var w = FN(v);
            return w.return = e, e.child = w, $r = e, Bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function U0(e) {
      return (e.mode & at) !== ct && (e.flags & bt) === st;
    }
    function j0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function P0(e) {
      if (go) {
        var t = Bi;
        if (!t) {
          U0(e) && (z0($r, e), j0()), Pw($r, e), go = !1, $r = e;
          return;
        }
        var a = t;
        if (!Fw(e, t)) {
          U0(e) && (z0($r, e), j0()), t = Gp(a);
          var i = $r;
          if (!t || !Fw(e, t)) {
            Pw($r, e), go = !1, $r = e;
            return;
          }
          jw(i, a);
        }
      }
    }
    function Uk(e, t, a) {
      var i = e.stateNode, l = !Dc, d = ek(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = d, d !== null;
    }
    function jk(e) {
      var t = e.stateNode, a = e.memoizedProps, i = tk(t, a, e);
      if (i) {
        var l = $r;
        if (l !== null)
          switch (l.tag) {
            case M: {
              var d = l.stateNode.containerInfo, v = (l.mode & at) !== ct;
              lk(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case B: {
              var S = l.type, w = l.memoizedProps, x = l.stateNode, R = (l.mode & at) !== ct;
              uk(
                S,
                w,
                x,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return i;
    }
    function Pk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      nk(a, e);
    }
    function Fk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return rk(a);
    }
    function Hw(e) {
      for (var t = e.return; t !== null && t.tag !== B && t.tag !== M && t.tag !== Ue; )
        t = t.return;
      $r = t;
    }
    function $m(e) {
      if (e !== $r)
        return !1;
      if (!go)
        return Hw(e), go = !0, !1;
      if (e.tag !== M && (e.tag !== B || ok(e.type) && !S0(e.type, e.memoizedProps))) {
        var t = Bi;
        if (t)
          if (U0(e))
            $w(e), j0();
          else
            for (; t; )
              jw(e, t), t = Gp(t);
      }
      return Hw(e), e.tag === Ue ? Bi = Fk(e) : Bi = $r ? Gp(e.stateNode) : null, !0;
    }
    function Hk() {
      return go && Bi !== null;
    }
    function $w(e) {
      for (var t = Bi; t; )
        Uw(e, t), t = Gp(t);
    }
    function dd() {
      $r = null, Bi = null, go = !1, Dc = !1;
    }
    function Bw() {
      ls !== null && (U_(ls), ls = null);
    }
    function Br() {
      return go;
    }
    function F0(e) {
      ls === null ? ls = [e] : ls.push(e);
    }
    var $k = p.ReactCurrentBatchConfig, Bk = null;
    function Vk() {
      return $k.transition;
    }
    var So = {
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
      var Ik = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Un && (t = a), a = a.return;
        return t;
      }, Nc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Zp = [], eh = [], th = [], nh = [], rh = [], ah = [], Ac = /* @__PURE__ */ new Set();
      So.recordUnsafeLifecycleWarnings = function(e, t) {
        Ac.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Zp.push(e), e.mode & Un && typeof t.UNSAFE_componentWillMount == "function" && eh.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && th.push(e), e.mode & Un && typeof t.UNSAFE_componentWillReceiveProps == "function" && nh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && rh.push(e), e.mode & Un && typeof t.UNSAFE_componentWillUpdate == "function" && ah.push(e));
      }, So.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Zp.length > 0 && (Zp.forEach(function(F) {
          e.add(Et(F) || "Component"), Ac.add(F.type);
        }), Zp = []);
        var t = /* @__PURE__ */ new Set();
        eh.length > 0 && (eh.forEach(function(F) {
          t.add(Et(F) || "Component"), Ac.add(F.type);
        }), eh = []);
        var a = /* @__PURE__ */ new Set();
        th.length > 0 && (th.forEach(function(F) {
          a.add(Et(F) || "Component"), Ac.add(F.type);
        }), th = []);
        var i = /* @__PURE__ */ new Set();
        nh.length > 0 && (nh.forEach(function(F) {
          i.add(Et(F) || "Component"), Ac.add(F.type);
        }), nh = []);
        var l = /* @__PURE__ */ new Set();
        rh.length > 0 && (rh.forEach(function(F) {
          l.add(Et(F) || "Component"), Ac.add(F.type);
        }), rh = []);
        var d = /* @__PURE__ */ new Set();
        if (ah.length > 0 && (ah.forEach(function(F) {
          d.add(Et(F) || "Component"), Ac.add(F.type);
        }), ah = []), t.size > 0) {
          var v = Nc(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var S = Nc(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, S);
        }
        if (d.size > 0) {
          var w = Nc(d);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, w);
        }
        if (e.size > 0) {
          var x = Nc(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var R = Nc(a);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (l.size > 0) {
          var $ = Nc(l);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, $);
        }
      };
      var Bm = /* @__PURE__ */ new Map(), Vw = /* @__PURE__ */ new Set();
      So.recordLegacyContextWarning = function(e, t) {
        var a = Ik(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Vw.has(e.type)) {
          var i = Bm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Bm.set(a, i)), i.push(e));
        }
      }, So.flushLegacyContextWarning = function() {
        Bm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              i.add(Et(d) || "Component"), Vw.add(d.type);
            });
            var l = Nc(i);
            try {
              kn(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Sn();
            }
          }
        });
      }, So.discardPendingWarnings = function() {
        Zp = [], eh = [], th = [], nh = [], rh = [], ah = [], Bm = /* @__PURE__ */ new Map();
      };
    }
    function Eo(e, t) {
      if (e && e.defaultProps) {
        var a = Ot({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var H0 = as(null), $0;
    $0 = {};
    var Vm = null, pd = null, B0 = null, Im = !1;
    function Wm() {
      Vm = null, pd = null, B0 = null, Im = !1;
    }
    function Iw() {
      Im = !0;
    }
    function Ww() {
      Im = !1;
    }
    function Yw(e, t, a) {
      ha(H0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== $0 && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = $0;
    }
    function V0(e, t) {
      var a = H0.current;
      pa(H0, t), e._currentValue = a;
    }
    function I0(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Wl(i.childLanes, t) ? l !== null && !Wl(l.childLanes, t) && (l.childLanes = xt(l.childLanes, t)) : (i.childLanes = xt(i.childLanes, t), l !== null && (l.childLanes = xt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Wk(e, t, a) {
      Yk(e, t, a);
    }
    function Yk(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, d = i.dependencies;
        if (d !== null) {
          l = i.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === k) {
                var S = Fu(a), w = au(yn, S);
                w.tag = qm;
                var x = i.updateQueue;
                if (x !== null) {
                  var R = x.shared, $ = R.pending;
                  $ === null ? w.next = w : (w.next = $.next, $.next = w), R.pending = w;
                }
              }
              i.lanes = xt(i.lanes, a);
              var F = i.alternate;
              F !== null && (F.lanes = xt(F.lanes, a)), I0(i.return, a, e), d.lanes = xt(d.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === ze)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === Te) {
          var K = i.return;
          if (K === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          K.lanes = xt(K.lanes, a);
          var J = K.alternate;
          J !== null && (J.lanes = xt(J.lanes, a)), I0(K, a, e), l = i.sibling;
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
            var ie = l.sibling;
            if (ie !== null) {
              ie.return = l.return, l = ie;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function hd(e, t) {
      Vm = e, pd = null, B0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (fa(a.lanes, t) && gh(), a.firstContext = null);
      }
    }
    function pr(e) {
      Im && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (B0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (pd === null) {
          if (Vm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          pd = a, Vm.dependencies = {
            lanes: se,
            firstContext: a
          };
        } else
          pd = pd.next = a;
      }
      return t;
    }
    var Mc = null;
    function W0(e) {
      Mc === null ? Mc = [e] : Mc.push(e);
    }
    function qk() {
      if (Mc !== null) {
        for (var e = 0; e < Mc.length; e++) {
          var t = Mc[e], a = t.interleaved;
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
        Mc = null;
      }
    }
    function qw(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, W0(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Ym(e, i);
    }
    function Qk(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, W0(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Gk(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, W0(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Ym(e, i);
    }
    function ni(e, t) {
      return Ym(e, t);
    }
    var Kk = Ym;
    function Ym(e, t) {
      e.lanes = xt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = xt(a.lanes, t)), a === null && (e.flags & (cn | Ni)) !== st && Q_(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = xt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = xt(a.childLanes, t) : (l.flags & (cn | Ni)) !== st && Q_(e), i = l, l = l.return;
      if (i.tag === M) {
        var d = i.stateNode;
        return d;
      } else
        return null;
    }
    var Qw = 0, Gw = 1, qm = 2, Y0 = 3, Qm = !1, q0, Gm;
    q0 = !1, Gm = null;
    function Q0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: se
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function Kw(e, t) {
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
    function au(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: Qw,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function us(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Gm === l && !q0 && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), q0 = !0), KD()) {
        var d = l.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), l.pending = t, Kk(e, a);
      } else
        return Gk(e, l, t, a);
    }
    function Km(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Ep(a)) {
          var d = l.lanes;
          d = Af(d, e.pendingLanes);
          var v = xt(d, a);
          l.lanes = v, bp(e, v);
        }
      }
    }
    function G0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var d = null, v = null, S = a.firstBaseUpdate;
          if (S !== null) {
            var w = S;
            do {
              var x = {
                eventTime: w.eventTime,
                lane: w.lane,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null
              };
              v === null ? d = v = x : (v.next = x, v = x), w = w.next;
            } while (w !== null);
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
      var R = a.lastBaseUpdate;
      R === null ? a.firstBaseUpdate = t : R.next = t, a.lastBaseUpdate = t;
    }
    function Xk(e, t, a, i, l, d) {
      switch (a.tag) {
        case Gw: {
          var v = a.payload;
          if (typeof v == "function") {
            Iw();
            var S = v.call(d, i, l);
            {
              if (e.mode & Un) {
                mn(!0);
                try {
                  v.call(d, i, l);
                } finally {
                  mn(!1);
                }
              }
              Ww();
            }
            return S;
          }
          return v;
        }
        case Y0:
          e.flags = e.flags & ~mr | bt;
        case Qw: {
          var w = a.payload, x;
          if (typeof w == "function") {
            Iw(), x = w.call(d, i, l);
            {
              if (e.mode & Un) {
                mn(!0);
                try {
                  w.call(d, i, l);
                } finally {
                  mn(!1);
                }
              }
              Ww();
            }
          } else
            x = w;
          return x == null ? i : Ot({}, i, x);
        }
        case qm:
          return Qm = !0, i;
      }
      return i;
    }
    function Xm(e, t, a, i) {
      var l = e.updateQueue;
      Qm = !1, Gm = l.shared;
      var d = l.firstBaseUpdate, v = l.lastBaseUpdate, S = l.shared.pending;
      if (S !== null) {
        l.shared.pending = null;
        var w = S, x = w.next;
        w.next = null, v === null ? d = x : v.next = x, v = w;
        var R = e.alternate;
        if (R !== null) {
          var $ = R.updateQueue, F = $.lastBaseUpdate;
          F !== v && (F === null ? $.firstBaseUpdate = x : F.next = x, $.lastBaseUpdate = w);
        }
      }
      if (d !== null) {
        var K = l.baseState, J = se, ie = null, qe = null, ft = null, it = d;
        do {
          var jt = it.lane, Mt = it.eventTime;
          if (Wl(i, jt)) {
            if (ft !== null) {
              var oe = {
                eventTime: Mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: In,
                tag: it.tag,
                payload: it.payload,
                callback: it.callback,
                next: null
              };
              ft = ft.next = oe;
            }
            K = Xk(e, l, it, K, t, a);
            var q = it.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            it.lane !== In) {
              e.flags |= sr;
              var Ee = l.effects;
              Ee === null ? l.effects = [it] : Ee.push(it);
            }
          } else {
            var Y = {
              eventTime: Mt,
              lane: jt,
              tag: it.tag,
              payload: it.payload,
              callback: it.callback,
              next: null
            };
            ft === null ? (qe = ft = Y, ie = K) : ft = ft.next = Y, J = xt(J, jt);
          }
          if (it = it.next, it === null) {
            if (S = l.shared.pending, S === null)
              break;
            var Qe = S, Ve = Qe.next;
            Qe.next = null, it = Ve, l.lastBaseUpdate = Qe, l.shared.pending = null;
          }
        } while (!0);
        ft === null && (ie = K), l.baseState = ie, l.firstBaseUpdate = qe, l.lastBaseUpdate = ft;
        var yt = l.shared.interleaved;
        if (yt !== null) {
          var _t = yt;
          do
            J = xt(J, _t.lane), _t = _t.next;
          while (_t !== yt);
        } else
          d === null && (l.shared.lanes = se);
        Dh(J), e.lanes = J, e.memoizedState = K;
      }
      Gm = null;
    }
    function Jk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function Xw() {
      Qm = !1;
    }
    function Jm() {
      return Qm;
    }
    function Jw(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var d = i[l], v = d.callback;
          v !== null && (d.callback = null, Jk(v, a));
        }
    }
    var K0 = {}, Zw = new u.Component().refs, X0, J0, Z0, eS, tS, eC, Zm, nS, rS, aS;
    {
      X0 = /* @__PURE__ */ new Set(), J0 = /* @__PURE__ */ new Set(), Z0 = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      Zm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = Ft(e) || "Component";
          tS.has(a) || (tS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(K0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(K0);
    }
    function iS(e, t, a, i) {
      var l = e.memoizedState, d = a(i, l);
      {
        if (e.mode & Un) {
          mn(!0);
          try {
            d = a(i, l);
          } finally {
            mn(!1);
          }
        }
        eC(t, d);
      }
      var v = d == null ? l : Ot({}, l, d);
      if (e.memoizedState = v, e.lanes === se) {
        var S = e.updateQueue;
        S.baseState = v;
      }
    }
    var oS = {
      isMounted: Da,
      enqueueSetState: function(e, t, a) {
        var i = Di(e), l = za(), d = ms(i), v = au(l, d);
        v.payload = t, a != null && (Zm(a, "setState"), v.callback = a);
        var S = us(i, v, d);
        S !== null && (Tr(S, i, d, l), Km(S, i, d)), mf(i, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Di(e), l = za(), d = ms(i), v = au(l, d);
        v.tag = Gw, v.payload = t, a != null && (Zm(a, "replaceState"), v.callback = a);
        var S = us(i, v, d);
        S !== null && (Tr(S, i, d, l), Km(S, i, d)), mf(i, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Di(e), i = za(), l = ms(a), d = au(i, l);
        d.tag = qm, t != null && (Zm(t, "forceUpdate"), d.callback = t);
        var v = us(a, d, l);
        v !== null && (Tr(v, a, l, i), Km(v, a, l)), zu(a, l);
      }
    };
    function nC(e, t, a, i, l, d, v) {
      var S = e.stateNode;
      if (typeof S.shouldComponentUpdate == "function") {
        var w = S.shouldComponentUpdate(i, d, v);
        {
          if (e.mode & Un) {
            mn(!0);
            try {
              w = S.shouldComponentUpdate(i, d, v);
            } finally {
              mn(!1);
            }
          }
          w === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ft(t) || "Component");
        }
        return w;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ht(a, i) || !ht(l, d) : !0;
    }
    function Zk(e, t, a) {
      var i = e.stateNode;
      {
        var l = Ft(t) || "Component", d = i.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !rS.has(t) && (rS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ft(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = i.props !== a;
        i.props !== void 0 && v && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Z0.has(t) && (Z0.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ft(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var S = i.state;
        S && (typeof S != "object" || Ht(S)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function rC(e, t) {
      t.updater = oS, e.stateNode = t, uf(t, e), t._reactInternalInstance = K0;
    }
    function aC(e, t, a) {
      var i = !1, l = gi, d = gi, v = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === Me && v._context === void 0
        );
        if (!S && !aS.has(t)) {
          aS.add(t);
          var w = "";
          v === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? w = " However, it is set to a " + typeof v + "." : v.$$typeof === me ? w = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", w);
        }
      }
      if (typeof v == "object" && v !== null)
        d = pr(v);
      else {
        l = ud(e, t, !0);
        var x = t.contextTypes;
        i = x != null, d = i ? sd(e, l) : gi;
      }
      var R = new t(a, d);
      if (e.mode & Un) {
        mn(!0);
        try {
          R = new t(a, d);
        } finally {
          mn(!1);
        }
      }
      var $ = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      rC(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && $ === null) {
          var F = Ft(t) || "Component";
          J0.has(F) || (J0.add(F), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", F, R.state === null ? "null" : "undefined", F));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var K = null, J = null, ie = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? K = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (K = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? J = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (J = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ie = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (ie = "UNSAFE_componentWillUpdate"), K !== null || J !== null || ie !== null) {
            var qe = Ft(t) || "Component", ft = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            eS.has(qe) || (eS.add(qe), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, qe, ft, K !== null ? `
  ` + K : "", J !== null ? `
  ` + J : "", ie !== null ? `
  ` + ie : ""));
          }
        }
      }
      return i && kw(e, l, d), R;
    }
    function eO(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Et(e) || "Component"), oS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var d = Et(e) || "Component";
          X0.has(d) || (X0.add(d), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        oS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      Zk(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = Zw, Q0(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        l.context = pr(d);
      else {
        var v = ud(e, t, !0);
        l.context = sd(e, v);
      }
      {
        if (l.state === a) {
          var S = Ft(t) || "Component";
          nS.has(S) || (nS.add(S), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", S));
        }
        e.mode & Un && So.recordLegacyContextWarning(e, l), So.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var w = t.getDerivedStateFromProps;
      if (typeof w == "function" && (iS(e, t, w, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (eO(e, l), Xm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var x = nt;
        x |= Wa, (e.mode & Qa) !== ct && (x |= Ya), e.flags |= x;
      }
    }
    function tO(e, t, a, i) {
      var l = e.stateNode, d = e.memoizedProps;
      l.props = d;
      var v = l.context, S = t.contextType, w = gi;
      if (typeof S == "object" && S !== null)
        w = pr(S);
      else {
        var x = ud(e, t, !0);
        w = sd(e, x);
      }
      var R = t.getDerivedStateFromProps, $ = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !$ && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (d !== a || v !== w) && iC(e, l, a, w), Xw();
      var F = e.memoizedState, K = l.state = F;
      if (Xm(e, a, l, i), K = e.memoizedState, d === a && F === K && !Lm() && !Jm()) {
        if (typeof l.componentDidMount == "function") {
          var J = nt;
          J |= Wa, (e.mode & Qa) !== ct && (J |= Ya), e.flags |= J;
        }
        return !1;
      }
      typeof R == "function" && (iS(e, t, R, a), K = e.memoizedState);
      var ie = Jm() || nC(e, t, d, a, F, K, w);
      if (ie) {
        if (!$ && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var qe = nt;
          qe |= Wa, (e.mode & Qa) !== ct && (qe |= Ya), e.flags |= qe;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var ft = nt;
          ft |= Wa, (e.mode & Qa) !== ct && (ft |= Ya), e.flags |= ft;
        }
        e.memoizedProps = a, e.memoizedState = K;
      }
      return l.props = a, l.state = K, l.context = w, ie;
    }
    function nO(e, t, a, i, l) {
      var d = t.stateNode;
      Kw(e, t);
      var v = t.memoizedProps, S = t.type === t.elementType ? v : Eo(t.type, v);
      d.props = S;
      var w = t.pendingProps, x = d.context, R = a.contextType, $ = gi;
      if (typeof R == "object" && R !== null)
        $ = pr(R);
      else {
        var F = ud(t, a, !0);
        $ = sd(t, F);
      }
      var K = a.getDerivedStateFromProps, J = typeof K == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !J && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (v !== w || x !== $) && iC(t, d, i, $), Xw();
      var ie = t.memoizedState, qe = d.state = ie;
      if (Xm(t, i, d, l), qe = t.memoizedState, v === w && ie === qe && !Lm() && !Jm() && !L)
        return typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= nt), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Zn), !1;
      typeof K == "function" && (iS(t, a, K, i), qe = t.memoizedState);
      var ft = Jm() || nC(t, a, S, i, ie, qe, $) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      L;
      return ft ? (!J && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, qe, $), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, qe, $)), typeof d.componentDidUpdate == "function" && (t.flags |= nt), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Zn)) : (typeof d.componentDidUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= nt), typeof d.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Zn), t.memoizedProps = i, t.memoizedState = qe), d.props = i, d.state = qe, d.context = $, ft;
    }
    var uS, sS, cS, fS, dS, oC = function(e, t) {
    };
    uS = !1, sS = !1, cS = {}, fS = {}, dS = {}, oC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Et(t) || "Component";
        fS[a] || (fS[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function ih(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Un || ke) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = Et(e) || "Component";
          cS[l] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), cS[l] = !0);
        }
        if (a._owner) {
          var d = a._owner, v;
          if (d) {
            var S = d;
            if (S.tag !== k)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = S.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var w = v;
          nr(i, "ref");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var R = function($) {
            var F = w.refs;
            F === Zw && (F = w.refs = {}), $ === null ? delete F[x] : F[x] = $;
          };
          return R._stringRef = x, R;
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
    function ey(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ty(e) {
      {
        var t = Et(e) || "Component";
        if (dS[t])
          return;
        dS[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function lC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function uC(e) {
      function t(Y, oe) {
        if (e) {
          var q = Y.deletions;
          q === null ? (Y.deletions = [oe], Y.flags |= It) : q.push(oe);
        }
      }
      function a(Y, oe) {
        if (!e)
          return null;
        for (var q = oe; q !== null; )
          t(Y, q), q = q.sibling;
        return null;
      }
      function i(Y, oe) {
        for (var q = /* @__PURE__ */ new Map(), Ee = oe; Ee !== null; )
          Ee.key !== null ? q.set(Ee.key, Ee) : q.set(Ee.index, Ee), Ee = Ee.sibling;
        return q;
      }
      function l(Y, oe) {
        var q = $c(Y, oe);
        return q.index = 0, q.sibling = null, q;
      }
      function d(Y, oe, q) {
        if (Y.index = q, !e)
          return Y.flags |= Av, oe;
        var Ee = Y.alternate;
        if (Ee !== null) {
          var Qe = Ee.index;
          return Qe < oe ? (Y.flags |= cn, oe) : Qe;
        } else
          return Y.flags |= cn, oe;
      }
      function v(Y) {
        return e && Y.alternate === null && (Y.flags |= cn), Y;
      }
      function S(Y, oe, q, Ee) {
        if (oe === null || oe.tag !== X) {
          var Qe = FE(q, Y.mode, Ee);
          return Qe.return = Y, Qe;
        } else {
          var Ve = l(oe, q);
          return Ve.return = Y, Ve;
        }
      }
      function w(Y, oe, q, Ee) {
        var Qe = q.type;
        if (Qe === xa)
          return R(Y, oe, q.props.children, Ee, q.key);
        if (oe !== null && (oe.elementType === Qe || // Keep this check inline so it only runs on the false path:
        J_(oe, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Qe == "object" && Qe !== null && Qe.$$typeof === ut && lC(Qe) === oe.type)) {
          var Ve = l(oe, q.props);
          return Ve.ref = ih(Y, oe, q), Ve.return = Y, Ve._debugSource = q._source, Ve._debugOwner = q._owner, Ve;
        }
        var yt = PE(q, Y.mode, Ee);
        return yt.ref = ih(Y, oe, q), yt.return = Y, yt;
      }
      function x(Y, oe, q, Ee) {
        if (oe === null || oe.tag !== I || oe.stateNode.containerInfo !== q.containerInfo || oe.stateNode.implementation !== q.implementation) {
          var Qe = HE(q, Y.mode, Ee);
          return Qe.return = Y, Qe;
        } else {
          var Ve = l(oe, q.children || []);
          return Ve.return = Y, Ve;
        }
      }
      function R(Y, oe, q, Ee, Qe) {
        if (oe === null || oe.tag !== fe) {
          var Ve = gs(q, Y.mode, Ee, Qe);
          return Ve.return = Y, Ve;
        } else {
          var yt = l(oe, q);
          return yt.return = Y, yt;
        }
      }
      function $(Y, oe, q) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var Ee = FE("" + oe, Y.mode, q);
          return Ee.return = Y, Ee;
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case Kr: {
              var Qe = PE(oe, Y.mode, q);
              return Qe.ref = ih(Y, null, oe), Qe.return = Y, Qe;
            }
            case Xr: {
              var Ve = HE(oe, Y.mode, q);
              return Ve.return = Y, Ve;
            }
            case ut: {
              var yt = oe._payload, _t = oe._init;
              return $(Y, _t(yt), q);
            }
          }
          if (Ht(oe) || xi(oe)) {
            var on = gs(oe, Y.mode, q, null);
            return on.return = Y, on;
          }
          ey(Y, oe);
        }
        return typeof oe == "function" && ty(Y), null;
      }
      function F(Y, oe, q, Ee) {
        var Qe = oe !== null ? oe.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return Qe !== null ? null : S(Y, oe, "" + q, Ee);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Kr:
              return q.key === Qe ? w(Y, oe, q, Ee) : null;
            case Xr:
              return q.key === Qe ? x(Y, oe, q, Ee) : null;
            case ut: {
              var Ve = q._payload, yt = q._init;
              return F(Y, oe, yt(Ve), Ee);
            }
          }
          if (Ht(q) || xi(q))
            return Qe !== null ? null : R(Y, oe, q, Ee, null);
          ey(Y, q);
        }
        return typeof q == "function" && ty(Y), null;
      }
      function K(Y, oe, q, Ee, Qe) {
        if (typeof Ee == "string" && Ee !== "" || typeof Ee == "number") {
          var Ve = Y.get(q) || null;
          return S(oe, Ve, "" + Ee, Qe);
        }
        if (typeof Ee == "object" && Ee !== null) {
          switch (Ee.$$typeof) {
            case Kr: {
              var yt = Y.get(Ee.key === null ? q : Ee.key) || null;
              return w(oe, yt, Ee, Qe);
            }
            case Xr: {
              var _t = Y.get(Ee.key === null ? q : Ee.key) || null;
              return x(oe, _t, Ee, Qe);
            }
            case ut:
              var on = Ee._payload, Yt = Ee._init;
              return K(Y, oe, q, Yt(on), Qe);
          }
          if (Ht(Ee) || xi(Ee)) {
            var lr = Y.get(q) || null;
            return R(oe, lr, Ee, Qe, null);
          }
          ey(oe, Ee);
        }
        return typeof Ee == "function" && ty(oe), null;
      }
      function J(Y, oe, q) {
        {
          if (typeof Y != "object" || Y === null)
            return oe;
          switch (Y.$$typeof) {
            case Kr:
            case Xr:
              oC(Y, q);
              var Ee = Y.key;
              if (typeof Ee != "string")
                break;
              if (oe === null) {
                oe = /* @__PURE__ */ new Set(), oe.add(Ee);
                break;
              }
              if (!oe.has(Ee)) {
                oe.add(Ee);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Ee);
              break;
            case ut:
              var Qe = Y._payload, Ve = Y._init;
              J(Ve(Qe), oe, q);
              break;
          }
        }
        return oe;
      }
      function ie(Y, oe, q, Ee) {
        for (var Qe = null, Ve = 0; Ve < q.length; Ve++) {
          var yt = q[Ve];
          Qe = J(yt, Qe, Y);
        }
        for (var _t = null, on = null, Yt = oe, lr = 0, qt = 0, tr = null; Yt !== null && qt < q.length; qt++) {
          Yt.index > qt ? (tr = Yt, Yt = null) : tr = Yt.sibling;
          var ma = F(Y, Yt, q[qt], Ee);
          if (ma === null) {
            Yt === null && (Yt = tr);
            break;
          }
          e && Yt && ma.alternate === null && t(Y, Yt), lr = d(ma, lr, qt), on === null ? _t = ma : on.sibling = ma, on = ma, Yt = tr;
        }
        if (qt === q.length) {
          if (a(Y, Yt), Br()) {
            var Gr = qt;
            kc(Y, Gr);
          }
          return _t;
        }
        if (Yt === null) {
          for (; qt < q.length; qt++) {
            var Ei = $(Y, q[qt], Ee);
            Ei !== null && (lr = d(Ei, lr, qt), on === null ? _t = Ei : on.sibling = Ei, on = Ei);
          }
          if (Br()) {
            var Ua = qt;
            kc(Y, Ua);
          }
          return _t;
        }
        for (var ja = i(Y, Yt); qt < q.length; qt++) {
          var ya = K(ja, Y, qt, q[qt], Ee);
          ya !== null && (e && ya.alternate !== null && ja.delete(ya.key === null ? qt : ya.key), lr = d(ya, lr, qt), on === null ? _t = ya : on.sibling = ya, on = ya);
        }
        if (e && ja.forEach(function(Nd) {
          return t(Y, Nd);
        }), Br()) {
          var cu = qt;
          kc(Y, cu);
        }
        return _t;
      }
      function qe(Y, oe, q, Ee) {
        var Qe = xi(q);
        if (typeof Qe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (sS || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), sS = !0), q.entries === Qe && (uS || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uS = !0);
          var Ve = Qe.call(q);
          if (Ve)
            for (var yt = null, _t = Ve.next(); !_t.done; _t = Ve.next()) {
              var on = _t.value;
              yt = J(on, yt, Y);
            }
        }
        var Yt = Qe.call(q);
        if (Yt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var lr = null, qt = null, tr = oe, ma = 0, Gr = 0, Ei = null, Ua = Yt.next(); tr !== null && !Ua.done; Gr++, Ua = Yt.next()) {
          tr.index > Gr ? (Ei = tr, tr = null) : Ei = tr.sibling;
          var ja = F(Y, tr, Ua.value, Ee);
          if (ja === null) {
            tr === null && (tr = Ei);
            break;
          }
          e && tr && ja.alternate === null && t(Y, tr), ma = d(ja, ma, Gr), qt === null ? lr = ja : qt.sibling = ja, qt = ja, tr = Ei;
        }
        if (Ua.done) {
          if (a(Y, tr), Br()) {
            var ya = Gr;
            kc(Y, ya);
          }
          return lr;
        }
        if (tr === null) {
          for (; !Ua.done; Gr++, Ua = Yt.next()) {
            var cu = $(Y, Ua.value, Ee);
            cu !== null && (ma = d(cu, ma, Gr), qt === null ? lr = cu : qt.sibling = cu, qt = cu);
          }
          if (Br()) {
            var Nd = Gr;
            kc(Y, Nd);
          }
          return lr;
        }
        for (var zh = i(Y, tr); !Ua.done; Gr++, Ua = Yt.next()) {
          var ml = K(zh, Y, Gr, Ua.value, Ee);
          ml !== null && (e && ml.alternate !== null && zh.delete(ml.key === null ? Gr : ml.key), ma = d(ml, ma, Gr), qt === null ? lr = ml : qt.sibling = ml, qt = ml);
        }
        if (e && zh.forEach(function(mA) {
          return t(Y, mA);
        }), Br()) {
          var vA = Gr;
          kc(Y, vA);
        }
        return lr;
      }
      function ft(Y, oe, q, Ee) {
        if (oe !== null && oe.tag === X) {
          a(Y, oe.sibling);
          var Qe = l(oe, q);
          return Qe.return = Y, Qe;
        }
        a(Y, oe);
        var Ve = FE(q, Y.mode, Ee);
        return Ve.return = Y, Ve;
      }
      function it(Y, oe, q, Ee) {
        for (var Qe = q.key, Ve = oe; Ve !== null; ) {
          if (Ve.key === Qe) {
            var yt = q.type;
            if (yt === xa) {
              if (Ve.tag === fe) {
                a(Y, Ve.sibling);
                var _t = l(Ve, q.props.children);
                return _t.return = Y, _t._debugSource = q._source, _t._debugOwner = q._owner, _t;
              }
            } else if (Ve.elementType === yt || // Keep this check inline so it only runs on the false path:
            J_(Ve, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof yt == "object" && yt !== null && yt.$$typeof === ut && lC(yt) === Ve.type) {
              a(Y, Ve.sibling);
              var on = l(Ve, q.props);
              return on.ref = ih(Y, Ve, q), on.return = Y, on._debugSource = q._source, on._debugOwner = q._owner, on;
            }
            a(Y, Ve);
            break;
          } else
            t(Y, Ve);
          Ve = Ve.sibling;
        }
        if (q.type === xa) {
          var Yt = gs(q.props.children, Y.mode, Ee, q.key);
          return Yt.return = Y, Yt;
        } else {
          var lr = PE(q, Y.mode, Ee);
          return lr.ref = ih(Y, oe, q), lr.return = Y, lr;
        }
      }
      function jt(Y, oe, q, Ee) {
        for (var Qe = q.key, Ve = oe; Ve !== null; ) {
          if (Ve.key === Qe)
            if (Ve.tag === I && Ve.stateNode.containerInfo === q.containerInfo && Ve.stateNode.implementation === q.implementation) {
              a(Y, Ve.sibling);
              var yt = l(Ve, q.children || []);
              return yt.return = Y, yt;
            } else {
              a(Y, Ve);
              break;
            }
          else
            t(Y, Ve);
          Ve = Ve.sibling;
        }
        var _t = HE(q, Y.mode, Ee);
        return _t.return = Y, _t;
      }
      function Mt(Y, oe, q, Ee) {
        var Qe = typeof q == "object" && q !== null && q.type === xa && q.key === null;
        if (Qe && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Kr:
              return v(it(Y, oe, q, Ee));
            case Xr:
              return v(jt(Y, oe, q, Ee));
            case ut:
              var Ve = q._payload, yt = q._init;
              return Mt(Y, oe, yt(Ve), Ee);
          }
          if (Ht(q))
            return ie(Y, oe, q, Ee);
          if (xi(q))
            return qe(Y, oe, q, Ee);
          ey(Y, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? v(ft(Y, oe, "" + q, Ee)) : (typeof q == "function" && ty(Y), a(Y, oe));
      }
      return Mt;
    }
    var vd = uC(!0), sC = uC(!1);
    function rO(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = $c(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = $c(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function aO(e, t) {
      for (var a = e.child; a !== null; )
        MN(a, t), a = a.sibling;
    }
    var oh = {}, ss = as(oh), lh = as(oh), ny = as(oh);
    function ry(e) {
      if (e === oh)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function cC() {
      var e = ry(ny.current);
      return e;
    }
    function pS(e, t) {
      ha(ny, t, e), ha(lh, e, e), ha(ss, oh, e);
      var a = gR(t);
      pa(ss, e), ha(ss, a, e);
    }
    function md(e) {
      pa(ss, e), pa(lh, e), pa(ny, e);
    }
    function hS() {
      var e = ry(ss.current);
      return e;
    }
    function fC(e) {
      ry(ny.current);
      var t = ry(ss.current), a = SR(t, e.type);
      t !== a && (ha(lh, e, e), ha(ss, a, e));
    }
    function vS(e) {
      lh.current === e && (pa(ss, e), pa(lh, e));
    }
    var iO = 0, dC = 1, pC = 1, uh = 2, bo = as(iO);
    function mS(e, t) {
      return (e & t) !== 0;
    }
    function yd(e) {
      return e & dC;
    }
    function yS(e, t) {
      return e & dC | t;
    }
    function oO(e, t) {
      return e | t;
    }
    function cs(e, t) {
      ha(bo, t, e);
    }
    function gd(e) {
      pa(bo, e);
    }
    function lO(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ay(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ue) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Cw(i) || C0(i))
              return t;
          }
        } else if (t.tag === we && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & bt) !== st;
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
    var ri = (
      /*   */
      0
    ), Sr = (
      /* */
      1
    ), sl = (
      /*  */
      2
    ), Er = (
      /*    */
      4
    ), Vr = (
      /*   */
      8
    ), gS = [];
    function SS() {
      for (var e = 0; e < gS.length; e++) {
        var t = gS[e];
        t._workInProgressVersionPrimary = null;
      }
      gS.length = 0;
    }
    function uO(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var We = p.ReactCurrentDispatcher, sh = p.ReactCurrentBatchConfig, ES, Sd;
    ES = /* @__PURE__ */ new Set();
    var Lc = se, an = null, br = null, wr = null, iy = !1, ch = !1, fh = 0, sO = 0, cO = 25, ce = null, Vi = null, fs = -1, bS = !1;
    function Jt() {
      {
        var e = ce;
        Vi === null ? Vi = [e] : Vi.push(e);
      }
    }
    function je() {
      {
        var e = ce;
        Vi !== null && (fs++, Vi[fs] !== e && fO(e));
      }
    }
    function Ed(e) {
      e != null && !Ht(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ce, typeof e);
    }
    function fO(e) {
      {
        var t = Et(an);
        if (!ES.has(t) && (ES.add(t), Vi !== null)) {
          for (var a = "", i = 30, l = 0; l <= fs; l++) {
            for (var d = Vi[l], v = l === fs ? e : d, S = l + 1 + ". " + d; S.length < i; )
              S += " ";
            S += v + `
`, a += S;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function va() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function wS(e, t) {
      if (bS)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ce), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ce, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Je(e[a], t[a]))
          return !1;
      return !0;
    }
    function bd(e, t, a, i, l, d) {
      Lc = d, an = t, Vi = e !== null ? e._debugHookTypes : null, fs = -1, bS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? We.current = zC : Vi !== null ? We.current = LC : We.current = MC;
      var v = a(i, l);
      if (ch) {
        var S = 0;
        do {
          if (ch = !1, fh = 0, S >= cO)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          S += 1, bS = !1, br = null, wr = null, t.updateQueue = null, fs = -1, We.current = UC, v = a(i, l);
        } while (ch);
      }
      We.current = gy, t._debugHookTypes = Vi;
      var w = br !== null && br.next !== null;
      if (Lc = se, an = null, br = null, wr = null, ce = null, Vi = null, fs = -1, e !== null && (e.flags & yr) !== (t.flags & yr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & at) !== ct && y("Internal React error: Expected static flag was missing. Please notify the React team."), iy = !1, w)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function wd() {
      var e = fh !== 0;
      return fh = 0, e;
    }
    function hC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Qa) !== ct ? t.flags &= ~(zl | Ya | ra | nt) : t.flags &= ~(ra | nt), e.lanes = fc(e.lanes, a);
    }
    function vC() {
      if (We.current = gy, iy) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        iy = !1;
      }
      Lc = se, an = null, br = null, wr = null, Vi = null, fs = -1, ce = null, kC = !1, ch = !1, fh = 0;
    }
    function cl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return wr === null ? an.memoizedState = wr = e : wr = wr.next = e, wr;
    }
    function Ii() {
      var e;
      if (br === null) {
        var t = an.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = br.next;
      var a;
      if (wr === null ? a = an.memoizedState : a = wr.next, a !== null)
        wr = a, a = wr.next, br = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        br = e;
        var i = {
          memoizedState: br.memoizedState,
          baseState: br.baseState,
          baseQueue: br.baseQueue,
          queue: br.queue,
          next: null
        };
        wr === null ? an.memoizedState = wr = i : wr = wr.next = i;
      }
      return wr;
    }
    function mC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function CS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _S(e, t, a) {
      var i = cl(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var d = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = d;
      var v = d.dispatch = vO.bind(null, an, d);
      return [i.memoizedState, v];
    }
    function xS(e, t, a) {
      var i = Ii(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var d = br, v = d.baseQueue, S = l.pending;
      if (S !== null) {
        if (v !== null) {
          var w = v.next, x = S.next;
          v.next = x, S.next = w;
        }
        d.baseQueue !== v && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = v = S, l.pending = null;
      }
      if (v !== null) {
        var R = v.next, $ = d.baseState, F = null, K = null, J = null, ie = R;
        do {
          var qe = ie.lane;
          if (Wl(Lc, qe)) {
            if (J !== null) {
              var it = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: In,
                action: ie.action,
                hasEagerState: ie.hasEagerState,
                eagerState: ie.eagerState,
                next: null
              };
              J = J.next = it;
            }
            if (ie.hasEagerState)
              $ = ie.eagerState;
            else {
              var jt = ie.action;
              $ = e($, jt);
            }
          } else {
            var ft = {
              lane: qe,
              action: ie.action,
              hasEagerState: ie.hasEagerState,
              eagerState: ie.eagerState,
              next: null
            };
            J === null ? (K = J = ft, F = $) : J = J.next = ft, an.lanes = xt(an.lanes, qe), Dh(qe);
          }
          ie = ie.next;
        } while (ie !== null && ie !== R);
        J === null ? F = $ : J.next = K, Je($, i.memoizedState) || gh(), i.memoizedState = $, i.baseState = F, i.baseQueue = J, l.lastRenderedState = $;
      }
      var Mt = l.interleaved;
      if (Mt !== null) {
        var Y = Mt;
        do {
          var oe = Y.lane;
          an.lanes = xt(an.lanes, oe), Dh(oe), Y = Y.next;
        } while (Y !== Mt);
      } else
        v === null && (l.lanes = se);
      var q = l.dispatch;
      return [i.memoizedState, q];
    }
    function TS(e, t, a) {
      var i = Ii(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var d = l.dispatch, v = l.pending, S = i.memoizedState;
      if (v !== null) {
        l.pending = null;
        var w = v.next, x = w;
        do {
          var R = x.action;
          S = e(S, R), x = x.next;
        } while (x !== w);
        Je(S, i.memoizedState) || gh(), i.memoizedState = S, i.baseQueue === null && (i.baseState = S), l.lastRenderedState = S;
      }
      return [S, d];
    }
    function cj(e, t, a) {
    }
    function fj(e, t, a) {
    }
    function RS(e, t, a) {
      var i = an, l = cl(), d, v = Br();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), Sd || d !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Sd = !0);
      } else {
        if (d = t(), !Sd) {
          var S = t();
          Je(d, S) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Sd = !0);
        }
        var w = Uy();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        cc(w, Lc) || yC(i, t, d);
      }
      l.memoizedState = d;
      var x = {
        value: d,
        getSnapshot: t
      };
      return l.queue = x, cy(SC.bind(null, i, x, e), [e]), i.flags |= ra, dh(Sr | Vr, gC.bind(null, i, x, d, t), void 0, null), d;
    }
    function oy(e, t, a) {
      var i = an, l = Ii(), d = t();
      if (!Sd) {
        var v = t();
        Je(d, v) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Sd = !0);
      }
      var S = l.memoizedState, w = !Je(S, d);
      w && (l.memoizedState = d, gh());
      var x = l.queue;
      if (hh(SC.bind(null, i, x, e), [e]), x.getSnapshot !== t || w || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      wr !== null && wr.memoizedState.tag & Sr) {
        i.flags |= ra, dh(Sr | Vr, gC.bind(null, i, x, d, t), void 0, null);
        var R = Uy();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        cc(R, Lc) || yC(i, t, d);
      }
      return d;
    }
    function yC(e, t, a) {
      e.flags |= Ll;
      var i = {
        getSnapshot: t,
        value: a
      }, l = an.updateQueue;
      if (l === null)
        l = mC(), an.updateQueue = l, l.stores = [i];
      else {
        var d = l.stores;
        d === null ? l.stores = [i] : d.push(i);
      }
    }
    function gC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, EC(t) && bC(e);
    }
    function SC(e, t, a) {
      var i = function() {
        EC(t) && bC(e);
      };
      return a(i);
    }
    function EC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Je(a, i);
      } catch {
        return !0;
      }
    }
    function bC(e) {
      var t = ni(e, dt);
      t !== null && Tr(t, e, dt, yn);
    }
    function ly(e) {
      var t = cl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: CS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = mO.bind(null, an, a);
      return [t.memoizedState, i];
    }
    function kS(e) {
      return xS(CS);
    }
    function OS(e) {
      return TS(CS);
    }
    function dh(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, d = an.updateQueue;
      if (d === null)
        d = mC(), an.updateQueue = d, d.lastEffect = l.next = l;
      else {
        var v = d.lastEffect;
        if (v === null)
          d.lastEffect = l.next = l;
        else {
          var S = v.next;
          v.next = l, l.next = S, d.lastEffect = l;
        }
      }
      return l;
    }
    function DS(e) {
      var t = cl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function uy(e) {
      var t = Ii();
      return t.memoizedState;
    }
    function ph(e, t, a, i) {
      var l = cl(), d = i === void 0 ? null : i;
      an.flags |= e, l.memoizedState = dh(Sr | t, a, void 0, d);
    }
    function sy(e, t, a, i) {
      var l = Ii(), d = i === void 0 ? null : i, v = void 0;
      if (br !== null) {
        var S = br.memoizedState;
        if (v = S.destroy, d !== null) {
          var w = S.deps;
          if (wS(d, w)) {
            l.memoizedState = dh(t, a, v, d);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = dh(Sr | t, a, v, d);
    }
    function cy(e, t) {
      return (an.mode & Qa) !== ct ? ph(zl | ra | qo, Vr, e, t) : ph(ra | qo, Vr, e, t);
    }
    function hh(e, t) {
      return sy(ra, Vr, e, t);
    }
    function NS(e, t) {
      return ph(nt, sl, e, t);
    }
    function fy(e, t) {
      return sy(nt, sl, e, t);
    }
    function AS(e, t) {
      var a = nt;
      return a |= Wa, (an.mode & Qa) !== ct && (a |= Ya), ph(a, Er, e, t);
    }
    function dy(e, t) {
      return sy(nt, Er, e, t);
    }
    function wC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var d = e();
        return l.current = d, function() {
          l.current = null;
        };
      }
    }
    function MS(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = nt;
      return l |= Wa, (an.mode & Qa) !== ct && (l |= Ya), ph(l, Er, wC.bind(null, t, e), i);
    }
    function py(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sy(nt, Er, wC.bind(null, t, e), i);
    }
    function dO(e, t) {
    }
    var hy = dO;
    function LS(e, t) {
      var a = cl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function vy(e, t) {
      var a = Ii(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var d = l[1];
        if (wS(i, d))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function zS(e, t) {
      var a = cl(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function my(e, t) {
      var a = Ii(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var d = l[1];
        if (wS(i, d))
          return l[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function US(e) {
      var t = cl();
      return t.memoizedState = e, e;
    }
    function CC(e) {
      var t = Ii(), a = br, i = a.memoizedState;
      return xC(t, i, e);
    }
    function _C(e) {
      var t = Ii();
      if (br === null)
        return t.memoizedState = e, e;
      var a = br.memoizedState;
      return xC(t, a, e);
    }
    function xC(e, t, a) {
      var i = !Wv(Lc);
      if (i) {
        if (!Je(a, t)) {
          var l = Qv();
          an.lanes = xt(an.lanes, l), Dh(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, gh()), e.memoizedState = a, a;
    }
    function pO(e, t, a) {
      var i = Ka();
      Pn(Ig(i, po)), e(!0);
      var l = sh.transition;
      sh.transition = {};
      var d = sh.transition;
      sh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pn(i), sh.transition = l, l === null && d._updatedFibers) {
          var v = d._updatedFibers.size;
          v > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function jS() {
      var e = ly(!1), t = e[0], a = e[1], i = pO.bind(null, a), l = cl();
      return l.memoizedState = i, [t, i];
    }
    function TC() {
      var e = kS(), t = e[0], a = Ii(), i = a.memoizedState;
      return [t, i];
    }
    function RC() {
      var e = OS(), t = e[0], a = Ii(), i = a.memoizedState;
      return [t, i];
    }
    var kC = !1;
    function hO() {
      return kC;
    }
    function PS() {
      var e = cl(), t = Uy(), a = t.identifierPrefix, i;
      if (Br()) {
        var l = kk();
        i = ":" + a + "R" + l;
        var d = fh++;
        d > 0 && (i += "H" + d.toString(32)), i += ":";
      } else {
        var v = sO++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function yy() {
      var e = Ii(), t = e.memoizedState;
      return t;
    }
    function vO(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ms(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (OC(e))
        DC(t, l);
      else {
        var d = qw(e, t, l, i);
        if (d !== null) {
          var v = za();
          Tr(d, e, i, v), NC(d, t, i);
        }
      }
      AC(e, i);
    }
    function mO(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ms(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (OC(e))
        DC(t, l);
      else {
        var d = e.alternate;
        if (e.lanes === se && (d === null || d.lanes === se)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var S;
            S = We.current, We.current = wo;
            try {
              var w = t.lastRenderedState, x = v(w, a);
              if (l.hasEagerState = !0, l.eagerState = x, Je(x, w)) {
                Qk(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              We.current = S;
            }
          }
        }
        var R = qw(e, t, l, i);
        if (R !== null) {
          var $ = za();
          Tr(R, e, i, $), NC(R, t, i);
        }
      }
      AC(e, i);
    }
    function OC(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function DC(e, t) {
      ch = iy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function NC(e, t, a) {
      if (Ep(a)) {
        var i = t.lanes;
        i = Af(i, e.pendingLanes);
        var l = xt(i, a);
        t.lanes = l, bp(e, l);
      }
    }
    function AC(e, t, a) {
      mf(e, t);
    }
    var gy = {
      readContext: pr,
      useCallback: va,
      useContext: va,
      useEffect: va,
      useImperativeHandle: va,
      useInsertionEffect: va,
      useLayoutEffect: va,
      useMemo: va,
      useReducer: va,
      useRef: va,
      useState: va,
      useDebugValue: va,
      useDeferredValue: va,
      useTransition: va,
      useMutableSource: va,
      useSyncExternalStore: va,
      useId: va,
      unstable_isNewReconciler: ae
    }, MC = null, LC = null, zC = null, UC = null, fl = null, wo = null, Sy = null;
    {
      var FS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, wt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      MC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Jt(), Ed(t), LS(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Jt(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Jt(), Ed(t), cy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Jt(), Ed(a), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Jt(), Ed(t), NS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Jt(), Ed(t), AS(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Jt(), Ed(t);
          var a = We.current;
          We.current = fl;
          try {
            return zS(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Jt();
          var i = We.current;
          We.current = fl;
          try {
            return _S(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Jt(), DS(e);
        },
        useState: function(e) {
          ce = "useState", Jt();
          var t = We.current;
          We.current = fl;
          try {
            return ly(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Jt(), US(e);
        },
        useTransition: function() {
          return ce = "useTransition", Jt(), jS();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Jt(), RS(e, t, a);
        },
        useId: function() {
          return ce = "useId", Jt(), PS();
        },
        unstable_isNewReconciler: ae
      }, LC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", je(), LS(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", je(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", je(), cy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", je(), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", je(), NS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", je(), AS(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", je();
          var a = We.current;
          We.current = fl;
          try {
            return zS(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", je();
          var i = We.current;
          We.current = fl;
          try {
            return _S(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return ce = "useRef", je(), DS(e);
        },
        useState: function(e) {
          ce = "useState", je();
          var t = We.current;
          We.current = fl;
          try {
            return ly(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", je(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", je(), US(e);
        },
        useTransition: function() {
          return ce = "useTransition", je(), jS();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", je(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", je(), RS(e, t, a);
        },
        useId: function() {
          return ce = "useId", je(), PS();
        },
        unstable_isNewReconciler: ae
      }, zC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", je(), vy(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", je(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", je(), hh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", je(), py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", je(), fy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", je(), dy(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", je();
          var a = We.current;
          We.current = wo;
          try {
            return my(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", je();
          var i = We.current;
          We.current = wo;
          try {
            return xS(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return ce = "useRef", je(), uy();
        },
        useState: function(e) {
          ce = "useState", je();
          var t = We.current;
          We.current = wo;
          try {
            return kS(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", je(), hy();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", je(), CC(e);
        },
        useTransition: function() {
          return ce = "useTransition", je(), TC();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", je(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", je(), oy(e, t);
        },
        useId: function() {
          return ce = "useId", je(), yy();
        },
        unstable_isNewReconciler: ae
      }, UC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", je(), vy(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", je(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", je(), hh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", je(), py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", je(), fy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", je(), dy(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", je();
          var a = We.current;
          We.current = Sy;
          try {
            return my(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", je();
          var i = We.current;
          We.current = Sy;
          try {
            return TS(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return ce = "useRef", je(), uy();
        },
        useState: function(e) {
          ce = "useState", je();
          var t = We.current;
          We.current = Sy;
          try {
            return OS(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", je(), hy();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", je(), _C(e);
        },
        useTransition: function() {
          return ce = "useTransition", je(), RC();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", je(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", je(), oy(e, t);
        },
        useId: function() {
          return ce = "useId", je(), yy();
        },
        unstable_isNewReconciler: ae
      }, fl = {
        readContext: function(e) {
          return FS(), pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", wt(), Jt(), LS(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", wt(), Jt(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", wt(), Jt(), cy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", wt(), Jt(), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", wt(), Jt(), NS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", wt(), Jt(), AS(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", wt(), Jt();
          var a = We.current;
          We.current = fl;
          try {
            return zS(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", wt(), Jt();
          var i = We.current;
          We.current = fl;
          try {
            return _S(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return ce = "useRef", wt(), Jt(), DS(e);
        },
        useState: function(e) {
          ce = "useState", wt(), Jt();
          var t = We.current;
          We.current = fl;
          try {
            return ly(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", wt(), Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", wt(), Jt(), US(e);
        },
        useTransition: function() {
          return ce = "useTransition", wt(), Jt(), jS();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", wt(), Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", wt(), Jt(), RS(e, t, a);
        },
        useId: function() {
          return ce = "useId", wt(), Jt(), PS();
        },
        unstable_isNewReconciler: ae
      }, wo = {
        readContext: function(e) {
          return FS(), pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", wt(), je(), vy(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", wt(), je(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", wt(), je(), hh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", wt(), je(), py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", wt(), je(), fy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", wt(), je(), dy(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", wt(), je();
          var a = We.current;
          We.current = wo;
          try {
            return my(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", wt(), je();
          var i = We.current;
          We.current = wo;
          try {
            return xS(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return ce = "useRef", wt(), je(), uy();
        },
        useState: function(e) {
          ce = "useState", wt(), je();
          var t = We.current;
          We.current = wo;
          try {
            return kS(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", wt(), je(), hy();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", wt(), je(), CC(e);
        },
        useTransition: function() {
          return ce = "useTransition", wt(), je(), TC();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", wt(), je(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", wt(), je(), oy(e, t);
        },
        useId: function() {
          return ce = "useId", wt(), je(), yy();
        },
        unstable_isNewReconciler: ae
      }, Sy = {
        readContext: function(e) {
          return FS(), pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", wt(), je(), vy(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", wt(), je(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", wt(), je(), hh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", wt(), je(), py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", wt(), je(), fy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", wt(), je(), dy(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", wt(), je();
          var a = We.current;
          We.current = wo;
          try {
            return my(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", wt(), je();
          var i = We.current;
          We.current = wo;
          try {
            return TS(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return ce = "useRef", wt(), je(), uy();
        },
        useState: function(e) {
          ce = "useState", wt(), je();
          var t = We.current;
          We.current = wo;
          try {
            return OS(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", wt(), je(), hy();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", wt(), je(), _C(e);
        },
        useTransition: function() {
          return ce = "useTransition", wt(), je(), RC();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", wt(), je(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", wt(), je(), oy(e, t);
        },
        useId: function() {
          return ce = "useId", wt(), je(), yy();
        },
        unstable_isNewReconciler: ae
      };
    }
    var ds = f.unstable_now, jC = 0, Ey = -1, vh = -1, by = -1, HS = !1, wy = !1;
    function PC() {
      return HS;
    }
    function yO() {
      wy = !0;
    }
    function gO() {
      HS = !1, wy = !1;
    }
    function SO() {
      HS = wy, wy = !1;
    }
    function FC() {
      return jC;
    }
    function HC() {
      jC = ds();
    }
    function $S(e) {
      vh = ds(), e.actualStartTime < 0 && (e.actualStartTime = ds());
    }
    function $C(e) {
      vh = -1;
    }
    function Cy(e, t) {
      if (vh >= 0) {
        var a = ds() - vh;
        e.actualDuration += a, t && (e.selfBaseDuration = a), vh = -1;
      }
    }
    function dl(e) {
      if (Ey >= 0) {
        var t = ds() - Ey;
        Ey = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case M:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ue:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function BS(e) {
      if (by >= 0) {
        var t = ds() - by;
        by = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case M:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ue:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function pl() {
      Ey = ds();
    }
    function VS() {
      by = ds();
    }
    function IS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function zc(e, t) {
      return {
        value: e,
        source: t,
        stack: vu(t),
        digest: null
      };
    }
    function WS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function EO(e, t) {
      return !0;
    }
    function YS(e, t) {
      try {
        var a = EO(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, d = t.stack, v = d !== null ? d : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === k)
            return;
          console.error(i);
        }
        var S = l ? Et(l) : null, w = S ? "The above error occurred in the <" + S + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === M)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = Et(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var $ = w + `
` + v + `

` + ("" + x);
        console.error($);
      } catch (F) {
        setTimeout(function() {
          throw F;
        });
      }
    }
    var bO = typeof WeakMap == "function" ? WeakMap : Map;
    function BC(e, t, a) {
      var i = au(yn, a);
      i.tag = Y0, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        pN(l), YS(e, t);
      }, i;
    }
    function qS(e, t, a) {
      var i = au(yn, a);
      i.tag = Y0;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var d = t.value;
        i.payload = function() {
          return l(d);
        }, i.callback = function() {
          Z_(e), YS(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        Z_(e), YS(e, t), typeof l != "function" && fN(this);
        var w = t.value, x = t.stack;
        this.componentDidCatch(w, {
          componentStack: x !== null ? x : ""
        }), typeof l != "function" && (fa(e.lanes, dt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Et(e) || "Unknown"));
      }), i;
    }
    function VC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new bO(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var d = hN.bind(null, e, t, a);
        Na && Nh(e, a), t.then(d, d);
      }
    }
    function wO(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        l.add(a);
    }
    function CO(e, t) {
      var a = e.tag;
      if ((e.mode & at) === ct && (a === A || a === Be || a === Z)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function IC(e) {
      var t = e;
      do {
        if (t.tag === Ue && lO(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function WC(e, t, a, i, l) {
      if ((e.mode & at) === ct) {
        if (e === t)
          e.flags |= mr;
        else {
          if (e.flags |= bt, a.flags |= sf, a.flags &= ~(Nv | Yo), a.tag === k) {
            var d = a.alternate;
            if (d === null)
              a.tag = De;
            else {
              var v = au(yn, dt);
              v.tag = qm, us(a, v, dt);
            }
          }
          a.lanes = xt(a.lanes, dt);
        }
        return e;
      }
      return e.flags |= mr, e.lanes = l, e;
    }
    function _O(e, t, a, i, l) {
      if (a.flags |= Yo, Na && Nh(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var d = i;
        CO(a), Br() && a.mode & at && zw();
        var v = IC(t);
        if (v !== null) {
          v.flags &= ~Fr, WC(v, t, a, e, l), v.mode & at && VC(e, d, l), wO(v, e, d);
          return;
        } else {
          if (!Sp(l)) {
            VC(e, d, l), TE();
            return;
          }
          var S = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = S;
        }
      } else if (Br() && a.mode & at) {
        zw();
        var w = IC(t);
        if (w !== null) {
          (w.flags & mr) === st && (w.flags |= Fr), WC(w, t, a, e, l), F0(zc(i, a));
          return;
        }
      }
      i = zc(i, a), rN(i);
      var x = t;
      do {
        switch (x.tag) {
          case M: {
            var R = i;
            x.flags |= mr;
            var $ = Fu(l);
            x.lanes = xt(x.lanes, $);
            var F = BC(x, R, $);
            G0(x, F);
            return;
          }
          case k:
            var K = i, J = x.type, ie = x.stateNode;
            if ((x.flags & bt) === st && (typeof J.getDerivedStateFromError == "function" || ie !== null && typeof ie.componentDidCatch == "function" && !I_(ie))) {
              x.flags |= mr;
              var qe = Fu(l);
              x.lanes = xt(x.lanes, qe);
              var ft = qS(x, K, qe);
              G0(x, ft);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function xO() {
      return null;
    }
    var mh = p.ReactCurrentOwner, Co = !1, QS, yh, GS, KS, XS, Uc, JS, _y;
    QS = {}, yh = {}, GS = {}, KS = {}, XS = {}, Uc = !1, JS = {}, _y = {};
    function Ma(e, t, a, i) {
      e === null ? t.child = sC(t, null, a, i) : t.child = vd(t, e.child, a, i);
    }
    function TO(e, t, a, i) {
      t.child = vd(t, e.child, null, i), t.child = vd(t, null, a, i);
    }
    function YC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && yo(
          d,
          i,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var v = a.render, S = t.ref, w, x;
      hd(t, l), Nu(t);
      {
        if (mh.current = t, vr(!0), w = bd(e, t, v, i, S, l), x = wd(), t.mode & Un) {
          mn(!0);
          try {
            w = bd(e, t, v, i, S, l), x = wd();
          } finally {
            mn(!1);
          }
        }
        vr(!1);
      }
      return jl(), e !== null && !Co ? (hC(e, t, l), iu(e, t, l)) : (Br() && x && M0(t), t.flags |= mi, Ma(e, t, w, l), t.child);
    }
    function qC(e, t, a, i, l) {
      if (e === null) {
        var d = a.type;
        if (NN(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = d;
          return v = Dd(d), t.tag = Z, t.type = v, tE(t, d), QC(e, t, v, i, l);
        }
        {
          var S = d.propTypes;
          S && yo(
            S,
            i,
            // Resolved props
            "prop",
            Ft(d)
          );
        }
        var w = jE(a.type, null, i, t, t.mode, l);
        return w.ref = t.ref, w.return = t, t.child = w, w;
      }
      {
        var x = a.type, R = x.propTypes;
        R && yo(
          R,
          i,
          // Resolved props
          "prop",
          Ft(x)
        );
      }
      var $ = e.child, F = lE(e, l);
      if (!F) {
        var K = $.memoizedProps, J = a.compare;
        if (J = J !== null ? J : ht, J(K, i) && e.ref === t.ref)
          return iu(e, t, l);
      }
      t.flags |= mi;
      var ie = $c($, i);
      return ie.ref = t.ref, ie.return = t, t.child = ie, ie;
    }
    function QC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === ut) {
          var v = d, S = v._payload, w = v._init;
          try {
            d = w(S);
          } catch {
            d = null;
          }
          var x = d && d.propTypes;
          x && yo(
            x,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ft(d)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (ht(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Co = !1, t.pendingProps = i = R, lE(e, l))
            (e.flags & sf) !== st && (Co = !0);
          else
            return t.lanes = e.lanes, iu(e, t, l);
      }
      return ZS(e, t, a, i, l);
    }
    function GC(e, t, a) {
      var i = t.pendingProps, l = i.children, d = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || j)
        if ((t.mode & at) === ct) {
          var v = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, jy(t, a);
        } else if (fa(a, Aa)) {
          var $ = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = $;
          var F = d !== null ? d.baseLanes : a;
          jy(t, F);
        } else {
          var S = null, w;
          if (d !== null) {
            var x = d.baseLanes;
            w = xt(x, a);
          } else
            w = a;
          t.lanes = t.childLanes = Aa;
          var R = {
            baseLanes: w,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, jy(t, w), null;
        }
      else {
        var K;
        d !== null ? (K = xt(d.baseLanes, a), t.memoizedState = null) : K = a, jy(t, K);
      }
      return Ma(e, t, l, a), t.child;
    }
    function RO(e, t, a) {
      var i = t.pendingProps;
      return Ma(e, t, i, a), t.child;
    }
    function kO(e, t, a) {
      var i = t.pendingProps.children;
      return Ma(e, t, i, a), t.child;
    }
    function OO(e, t, a) {
      {
        t.flags |= nt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, d = l.children;
      return Ma(e, t, d, a), t.child;
    }
    function KC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ka, t.flags |= Ai);
    }
    function ZS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && yo(
          d,
          i,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var v;
      {
        var S = ud(t, a, !0);
        v = sd(t, S);
      }
      var w, x;
      hd(t, l), Nu(t);
      {
        if (mh.current = t, vr(!0), w = bd(e, t, a, i, v, l), x = wd(), t.mode & Un) {
          mn(!0);
          try {
            w = bd(e, t, a, i, v, l), x = wd();
          } finally {
            mn(!1);
          }
        }
        vr(!1);
      }
      return jl(), e !== null && !Co ? (hC(e, t, l), iu(e, t, l)) : (Br() && x && M0(t), t.flags |= mi, Ma(e, t, w, l), t.child);
    }
    function XC(e, t, a, i, l) {
      {
        switch (YN(t)) {
          case !1: {
            var d = t.stateNode, v = t.type, S = new v(t.memoizedProps, d.context), w = S.state;
            d.updater.enqueueSetState(d, w, null);
            break;
          }
          case !0: {
            t.flags |= bt, t.flags |= mr;
            var x = new Error("Simulated error coming from DevTools"), R = Fu(l);
            t.lanes = xt(t.lanes, R);
            var $ = qS(t, zc(x, t), R);
            G0(t, $);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var F = a.propTypes;
          F && yo(
            F,
            i,
            // Resolved props
            "prop",
            Ft(a)
          );
        }
      }
      var K;
      ul(a) ? (K = !0, Um(t)) : K = !1, hd(t, l);
      var J = t.stateNode, ie;
      J === null ? (Ty(e, t), aC(t, a, i), lS(t, a, i, l), ie = !0) : e === null ? ie = tO(t, a, i, l) : ie = nO(e, t, a, i, l);
      var qe = eE(e, t, a, ie, K, l);
      {
        var ft = t.stateNode;
        ie && ft.props !== i && (Uc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Et(t) || "a component"), Uc = !0);
      }
      return qe;
    }
    function eE(e, t, a, i, l, d) {
      KC(e, t);
      var v = (t.flags & bt) !== st;
      if (!i && !v)
        return l && Nw(t, a, !1), iu(e, t, d);
      var S = t.stateNode;
      mh.current = t;
      var w;
      if (v && typeof a.getDerivedStateFromError != "function")
        w = null, $C();
      else {
        Nu(t);
        {
          if (vr(!0), w = S.render(), t.mode & Un) {
            mn(!0);
            try {
              S.render();
            } finally {
              mn(!1);
            }
          }
          vr(!1);
        }
        jl();
      }
      return t.flags |= mi, e !== null && v ? TO(e, t, w, d) : Ma(e, t, w, d), t.memoizedState = S.state, l && Nw(t, a, !0), t.child;
    }
    function JC(e) {
      var t = e.stateNode;
      t.pendingContext ? Ow(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ow(e, t.context, !1), pS(e, t.containerInfo);
    }
    function DO(e, t, a) {
      if (JC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, d = l.element;
      Kw(e, t), Xm(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var S = v.element;
      if (l.isDehydrated) {
        var w = {
          element: S,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, x = t.updateQueue;
        if (x.baseState = w, t.memoizedState = w, t.flags & Fr) {
          var R = zc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return ZC(e, t, S, a, R);
        } else if (S !== d) {
          var $ = zc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return ZC(e, t, S, a, $);
        } else {
          Lk(t);
          var F = sC(t, null, S, a);
          t.child = F;
          for (var K = F; K; )
            K.flags = K.flags & ~cn | Ni, K = K.sibling;
        }
      } else {
        if (dd(), S === d)
          return iu(e, t, a);
        Ma(e, t, S, a);
      }
      return t.child;
    }
    function ZC(e, t, a, i, l) {
      return dd(), F0(l), t.flags |= Fr, Ma(e, t, a, i), t.child;
    }
    function NO(e, t, a) {
      fC(t), e === null && P0(t);
      var i = t.type, l = t.pendingProps, d = e !== null ? e.memoizedProps : null, v = l.children, S = S0(i, l);
      return S ? v = null : d !== null && S0(i, d) && (t.flags |= Ia), KC(e, t), Ma(e, t, v, a), t.child;
    }
    function AO(e, t) {
      return e === null && P0(t), null;
    }
    function MO(e, t, a, i) {
      Ty(e, t);
      var l = t.pendingProps, d = a, v = d._payload, S = d._init, w = S(v);
      t.type = w;
      var x = t.tag = AN(w), R = Eo(w, l), $;
      switch (x) {
        case A:
          return tE(t, w), t.type = w = Dd(w), $ = ZS(null, t, w, R, i), $;
        case k:
          return t.type = w = NE(w), $ = XC(null, t, w, R, i), $;
        case Be:
          return t.type = w = AE(w), $ = YC(null, t, w, R, i), $;
        case gt: {
          if (t.type !== t.elementType) {
            var F = w.propTypes;
            F && yo(
              F,
              R,
              // Resolved for outer only
              "prop",
              Ft(w)
            );
          }
          return $ = qC(
            null,
            t,
            w,
            Eo(w.type, R),
            // The inner type can have defaults too
            i
          ), $;
        }
      }
      var K = "";
      throw w !== null && typeof w == "object" && w.$$typeof === ut && (K = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + w + ". " + ("Lazy element type must resolve to a class or function." + K));
    }
    function LO(e, t, a, i, l) {
      Ty(e, t), t.tag = k;
      var d;
      return ul(a) ? (d = !0, Um(t)) : d = !1, hd(t, l), aC(t, a, i), lS(t, a, i, l), eE(null, t, a, !0, d, l);
    }
    function zO(e, t, a, i) {
      Ty(e, t);
      var l = t.pendingProps, d;
      {
        var v = ud(t, a, !1);
        d = sd(t, v);
      }
      hd(t, i);
      var S, w;
      Nu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = Ft(a) || "Unknown";
          QS[x] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), QS[x] = !0);
        }
        t.mode & Un && So.recordLegacyContextWarning(t, null), vr(!0), mh.current = t, S = bd(null, t, a, l, d, i), w = wd(), vr(!1);
      }
      if (jl(), t.flags |= mi, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var R = Ft(a) || "Unknown";
        yh[R] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), yh[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var $ = Ft(a) || "Unknown";
          yh[$] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", $, $, $), yh[$] = !0);
        }
        t.tag = k, t.memoizedState = null, t.updateQueue = null;
        var F = !1;
        return ul(a) ? (F = !0, Um(t)) : F = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, Q0(t), rC(t, S), lS(t, a, l, i), eE(null, t, a, !0, F, i);
      } else {
        if (t.tag = A, t.mode & Un) {
          mn(!0);
          try {
            S = bd(null, t, a, l, d, i), w = wd();
          } finally {
            mn(!1);
          }
        }
        return Br() && w && M0(t), Ma(null, t, S, i), tE(t, a), t.child;
      }
    }
    function tE(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = $a();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", d = e._debugSource;
          d && (l = d.fileName + ":" + d.lineNumber), XS[l] || (XS[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Ft(t) || "Unknown";
          KS[v] || (y("%s: Function components do not support getDerivedStateFromProps.", v), KS[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var S = Ft(t) || "Unknown";
          GS[S] || (y("%s: Function components do not support contextType.", S), GS[S] = !0);
        }
      }
    }
    var nE = {
      dehydrated: null,
      treeContext: null,
      retryLane: In
    };
    function rE(e) {
      return {
        baseLanes: e,
        cachePool: xO(),
        transitions: null
      };
    }
    function UO(e, t) {
      var a = null;
      return {
        baseLanes: xt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function jO(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return mS(e, uh);
    }
    function PO(e, t) {
      return fc(e.childLanes, t);
    }
    function e_(e, t, a) {
      var i = t.pendingProps;
      qN(t) && (t.flags |= bt);
      var l = bo.current, d = !1, v = (t.flags & bt) !== st;
      if (v || jO(l, e) ? (d = !0, t.flags &= ~bt) : (e === null || e.memoizedState !== null) && (l = oO(l, pC)), l = yd(l), cs(t, l), e === null) {
        P0(t);
        var S = t.memoizedState;
        if (S !== null) {
          var w = S.dehydrated;
          if (w !== null)
            return VO(t, w);
        }
        var x = i.children, R = i.fallback;
        if (d) {
          var $ = FO(t, x, R, a), F = t.child;
          return F.memoizedState = rE(a), t.memoizedState = nE, $;
        } else
          return aE(t, x);
      } else {
        var K = e.memoizedState;
        if (K !== null) {
          var J = K.dehydrated;
          if (J !== null)
            return IO(e, t, v, i, J, K, a);
        }
        if (d) {
          var ie = i.fallback, qe = i.children, ft = $O(e, t, qe, ie, a), it = t.child, jt = e.child.memoizedState;
          return it.memoizedState = jt === null ? rE(a) : UO(jt, a), it.childLanes = PO(e, a), t.memoizedState = nE, ft;
        } else {
          var Mt = i.children, Y = HO(e, t, Mt, a);
          return t.memoizedState = null, Y;
        }
      }
    }
    function aE(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, d = iE(l, i);
      return d.return = e, e.child = d, d;
    }
    function FO(e, t, a, i) {
      var l = e.mode, d = e.child, v = {
        mode: "hidden",
        children: t
      }, S, w;
      return (l & at) === ct && d !== null ? (S = d, S.childLanes = se, S.pendingProps = v, e.mode & Bt && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), w = gs(a, l, i, null)) : (S = iE(v, l), w = gs(a, l, i, null)), S.return = e, w.return = e, S.sibling = w, e.child = S, w;
    }
    function iE(e, t, a) {
      return tx(e, t, se, null);
    }
    function t_(e, t) {
      return $c(e, t);
    }
    function HO(e, t, a, i) {
      var l = e.child, d = l.sibling, v = t_(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & at) === ct && (v.lanes = i), v.return = t, v.sibling = null, d !== null) {
        var S = t.deletions;
        S === null ? (t.deletions = [d], t.flags |= It) : S.push(d);
      }
      return t.child = v, v;
    }
    function $O(e, t, a, i, l) {
      var d = t.mode, v = e.child, S = v.sibling, w = {
        mode: "hidden",
        children: a
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & at) === ct && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var R = t.child;
        x = R, x.childLanes = se, x.pendingProps = w, t.mode & Bt && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = v.selfBaseDuration, x.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        x = t_(v, w), x.subtreeFlags = v.subtreeFlags & yr;
      var $;
      return S !== null ? $ = $c(S, i) : ($ = gs(i, d, l, null), $.flags |= cn), $.return = t, x.return = t, x.sibling = $, t.child = x, $;
    }
    function xy(e, t, a, i) {
      i !== null && F0(i), vd(t, e.child, null, a);
      var l = t.pendingProps, d = l.children, v = aE(t, d);
      return v.flags |= cn, t.memoizedState = null, v;
    }
    function BO(e, t, a, i, l) {
      var d = t.mode, v = {
        mode: "visible",
        children: a
      }, S = iE(v, d), w = gs(i, d, l, null);
      return w.flags |= cn, S.return = t, w.return = t, S.sibling = w, t.child = S, (t.mode & at) !== ct && vd(t, e.child, null, l), w;
    }
    function VO(e, t, a) {
      return (e.mode & at) === ct ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = dt) : C0(t) ? e.lanes = jn : e.lanes = Aa, null;
    }
    function IO(e, t, a, i, l, d, v) {
      if (a)
        if (t.flags & Fr) {
          t.flags &= ~Fr;
          var Y = WS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return xy(e, t, v, Y);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= bt, null;
          var oe = i.children, q = i.fallback, Ee = BO(e, t, oe, q, v), Qe = t.child;
          return Qe.memoizedState = rE(v), t.memoizedState = nE, Ee;
        }
      else {
        if (Ak(), (t.mode & at) === ct)
          return xy(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (C0(l)) {
          var S, w, x;
          {
            var R = GR(l);
            S = R.digest, w = R.message, x = R.stack;
          }
          var $;
          w ? $ = new Error(w) : $ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var F = WS($, S, x);
          return xy(e, t, v, F);
        }
        var K = fa(v, e.childLanes);
        if (Co || K) {
          var J = Uy();
          if (J !== null) {
            var ie = Xv(J, v);
            if (ie !== In && ie !== d.retryLane) {
              d.retryLane = ie;
              var qe = yn;
              ni(e, ie), Tr(J, e, ie, qe);
            }
          }
          TE();
          var ft = WS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return xy(e, t, v, ft);
        } else if (Cw(l)) {
          t.flags |= bt, t.child = e.child;
          var it = vN.bind(null, e);
          return KR(l, it), null;
        } else {
          zk(t, l, d.treeContext);
          var jt = i.children, Mt = aE(t, jt);
          return Mt.flags |= Ni, Mt;
        }
      }
    }
    function n_(e, t, a) {
      e.lanes = xt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = xt(i.lanes, t)), I0(e.return, t, a);
    }
    function WO(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ue) {
          var l = i.memoizedState;
          l !== null && n_(i, a, e);
        } else if (i.tag === we)
          n_(i, a, e);
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
    function YO(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && ay(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function qO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !JS[e])
        if (JS[e] = !0, typeof e == "string")
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
    function QO(e, t) {
      e !== void 0 && !_y[e] && (e !== "collapsed" && e !== "hidden" ? (_y[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (_y[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function r_(e, t) {
      {
        var a = Ht(e), i = !a && typeof xi(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function GO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ht(e)) {
          for (var a = 0; a < e.length; a++)
            if (!r_(e[a], a))
              return;
        } else {
          var i = xi(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var d = l.next(), v = 0; !d.done; d = l.next()) {
                if (!r_(d.value, v))
                  return;
                v++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function oE(e, t, a, i, l) {
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
    function a_(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, d = i.tail, v = i.children;
      qO(l), QO(d, l), GO(v, l), Ma(e, t, v, a);
      var S = bo.current, w = mS(S, uh);
      if (w)
        S = yS(S, uh), t.flags |= bt;
      else {
        var x = e !== null && (e.flags & bt) !== st;
        x && WO(t, t.child, a), S = yd(S);
      }
      if (cs(t, S), (t.mode & at) === ct)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var R = YO(t.child), $;
            R === null ? ($ = t.child, t.child = null) : ($ = R.sibling, R.sibling = null), oE(
              t,
              !1,
              // isBackwards
              $,
              R,
              d
            );
            break;
          }
          case "backwards": {
            var F = null, K = t.child;
            for (t.child = null; K !== null; ) {
              var J = K.alternate;
              if (J !== null && ay(J) === null) {
                t.child = K;
                break;
              }
              var ie = K.sibling;
              K.sibling = F, F = K, K = ie;
            }
            oE(
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
            oE(
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
    function KO(e, t, a) {
      pS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = vd(t, null, i, a) : Ma(e, t, i, a), t.child;
    }
    var i_ = !1;
    function XO(e, t, a) {
      var i = t.type, l = i._context, d = t.pendingProps, v = t.memoizedProps, S = d.value;
      {
        "value" in d || i_ || (i_ = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var w = t.type.propTypes;
        w && yo(w, d, "prop", "Context.Provider");
      }
      if (Yw(t, l, S), v !== null) {
        var x = v.value;
        if (Je(x, S)) {
          if (v.children === d.children && !Lm())
            return iu(e, t, a);
        } else
          Wk(t, l, a);
      }
      var R = d.children;
      return Ma(e, t, R, a), t.child;
    }
    var o_ = !1;
    function JO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (o_ || (o_ = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, d = l.children;
      typeof d != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), hd(t, a);
      var v = pr(i);
      Nu(t);
      var S;
      return mh.current = t, vr(!0), S = d(v), vr(!1), jl(), t.flags |= mi, Ma(e, t, S, a), t.child;
    }
    function gh() {
      Co = !0;
    }
    function Ty(e, t) {
      (t.mode & at) === ct && e !== null && (e.alternate = null, t.alternate = null, t.flags |= cn);
    }
    function iu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), $C(), Dh(t.lanes), fa(a, t.childLanes) ? (rO(e, t), t.child) : null;
    }
    function ZO(e, t, a) {
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
        return d === null ? (i.deletions = [e], i.flags |= It) : d.push(e), a.flags |= cn, a;
      }
    }
    function lE(e, t) {
      var a = e.lanes;
      return !!fa(a, t);
    }
    function eD(e, t, a) {
      switch (t.tag) {
        case M:
          JC(t), t.stateNode, dd();
          break;
        case B:
          fC(t);
          break;
        case k: {
          var i = t.type;
          ul(i) && Um(t);
          break;
        }
        case I:
          pS(t, t.stateNode.containerInfo);
          break;
        case ze: {
          var l = t.memoizedProps.value, d = t.type._context;
          Yw(t, d, l);
          break;
        }
        case ue:
          {
            var v = fa(a, t.childLanes);
            v && (t.flags |= nt);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case Ue: {
          var w = t.memoizedState;
          if (w !== null) {
            if (w.dehydrated !== null)
              return cs(t, yd(bo.current)), t.flags |= bt, null;
            var x = t.child, R = x.childLanes;
            if (fa(a, R))
              return e_(e, t, a);
            cs(t, yd(bo.current));
            var $ = iu(e, t, a);
            return $ !== null ? $.sibling : null;
          } else
            cs(t, yd(bo.current));
          break;
        }
        case we: {
          var F = (e.flags & bt) !== st, K = fa(a, t.childLanes);
          if (F) {
            if (K)
              return a_(e, t, a);
            t.flags |= bt;
          }
          var J = t.memoizedState;
          if (J !== null && (J.rendering = null, J.tail = null, J.lastEffect = null), cs(t, bo.current), K)
            break;
          return null;
        }
        case le:
        case re:
          return t.lanes = se, GC(e, t, a);
      }
      return iu(e, t, a);
    }
    function l_(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ZO(e, t, jE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Lm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Co = !0;
        else {
          var d = lE(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & bt) === st)
            return Co = !1, eD(e, t, a);
          (e.flags & sf) !== st ? Co = !0 : Co = !1;
        }
      } else if (Co = !1, Br() && Tk(t)) {
        var v = t.index, S = Rk();
        Lw(t, S, v);
      }
      switch (t.lanes = se, t.tag) {
        case D:
          return zO(e, t, t.type, a);
        case xe: {
          var w = t.elementType;
          return MO(e, t, w, a);
        }
        case A: {
          var x = t.type, R = t.pendingProps, $ = t.elementType === x ? R : Eo(x, R);
          return ZS(e, t, x, $, a);
        }
        case k: {
          var F = t.type, K = t.pendingProps, J = t.elementType === F ? K : Eo(F, K);
          return XC(e, t, F, J, a);
        }
        case M:
          return DO(e, t, a);
        case B:
          return NO(e, t, a);
        case X:
          return AO(e, t);
        case Ue:
          return e_(e, t, a);
        case I:
          return KO(e, t, a);
        case Be: {
          var ie = t.type, qe = t.pendingProps, ft = t.elementType === ie ? qe : Eo(ie, qe);
          return YC(e, t, ie, ft, a);
        }
        case fe:
          return RO(e, t, a);
        case Le:
          return kO(e, t, a);
        case ue:
          return OO(e, t, a);
        case ze:
          return XO(e, t, a);
        case Ke:
          return JO(e, t, a);
        case gt: {
          var it = t.type, jt = t.pendingProps, Mt = Eo(it, jt);
          if (t.type !== t.elementType) {
            var Y = it.propTypes;
            Y && yo(
              Y,
              Mt,
              // Resolved for outer only
              "prop",
              Ft(it)
            );
          }
          return Mt = Eo(it.type, Mt), qC(e, t, it, Mt, a);
        }
        case Z:
          return QC(e, t, t.type, t.pendingProps, a);
        case De: {
          var oe = t.type, q = t.pendingProps, Ee = t.elementType === oe ? q : Eo(oe, q);
          return LO(e, t, oe, Ee, a);
        }
        case we:
          return a_(e, t, a);
        case Ne:
          break;
        case le:
          return GC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Cd(e) {
      e.flags |= nt;
    }
    function u_(e) {
      e.flags |= ka, e.flags |= Ai;
    }
    var s_, uE, c_, f_;
    s_ = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === B || l.tag === X)
          CR(e, l.stateNode);
        else if (l.tag !== I) {
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
    }, uE = function(e, t) {
    }, c_ = function(e, t, a, i, l) {
      var d = e.memoizedProps;
      if (d !== i) {
        var v = t.stateNode, S = hS(), w = xR(v, a, d, i, l, S);
        t.updateQueue = w, w && Cd(t);
      }
    }, f_ = function(e, t, a, i) {
      a !== i && Cd(t);
    };
    function Sh(e, t) {
      if (!Br())
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
    function Ir(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = se, i = st;
      if (t) {
        if ((e.mode & Bt) !== ct) {
          for (var w = e.selfBaseDuration, x = e.child; x !== null; )
            a = xt(a, xt(x.lanes, x.childLanes)), i |= x.subtreeFlags & yr, i |= x.flags & yr, w += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = w;
        } else
          for (var R = e.child; R !== null; )
            a = xt(a, xt(R.lanes, R.childLanes)), i |= R.subtreeFlags & yr, i |= R.flags & yr, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Bt) !== ct) {
          for (var l = e.actualDuration, d = e.selfBaseDuration, v = e.child; v !== null; )
            a = xt(a, xt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, l += v.actualDuration, d += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = d;
        } else
          for (var S = e.child; S !== null; )
            a = xt(a, xt(S.lanes, S.childLanes)), i |= S.subtreeFlags, i |= S.flags, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function tD(e, t, a) {
      if (Hk() && (t.mode & at) !== ct && (t.flags & bt) === st)
        return $w(t), dd(), t.flags |= Fr | Yo | mr, !1;
      var i = $m(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Pk(t), Ir(t), (t.mode & Bt) !== ct) {
            var l = a !== null;
            if (l) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (dd(), (t.flags & bt) === st && (t.memoizedState = null), t.flags |= nt, Ir(t), (t.mode & Bt) !== ct) {
            var v = a !== null;
            if (v) {
              var S = t.child;
              S !== null && (t.treeBaseDuration -= S.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return Bw(), !0;
    }
    function d_(e, t, a) {
      var i = t.pendingProps;
      switch (L0(t), t.tag) {
        case D:
        case xe:
        case Z:
        case A:
        case Be:
        case fe:
        case Le:
        case ue:
        case Ke:
        case gt:
          return Ir(t), null;
        case k: {
          var l = t.type;
          return ul(l) && zm(t), Ir(t), null;
        }
        case M: {
          var d = t.stateNode;
          if (md(t), D0(t), SS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var v = $m(t);
            if (v)
              Cd(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Fr) !== st) && (t.flags |= Zn, Bw());
            }
          }
          return uE(e, t), Ir(t), null;
        }
        case B: {
          vS(t);
          var w = cC(), x = t.type;
          if (e !== null && t.stateNode != null)
            c_(e, t, x, i, w), e.ref !== t.ref && u_(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ir(t), null;
            }
            var R = hS(), $ = $m(t);
            if ($)
              Uk(t, w, R) && Cd(t);
            else {
              var F = wR(x, i, w, R, t);
              s_(F, t, !1, !1), t.stateNode = F, _R(F, x, i, w) && Cd(t);
            }
            t.ref !== null && u_(t);
          }
          return Ir(t), null;
        }
        case X: {
          var K = i;
          if (e && t.stateNode != null) {
            var J = e.memoizedProps;
            f_(e, t, J, K);
          } else {
            if (typeof K != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ie = cC(), qe = hS(), ft = $m(t);
            ft ? jk(t) && Cd(t) : t.stateNode = TR(K, ie, qe, t);
          }
          return Ir(t), null;
        }
        case Ue: {
          gd(t);
          var it = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var jt = tD(e, t, it);
            if (!jt)
              return t.flags & mr ? t : null;
          }
          if ((t.flags & bt) !== st)
            return t.lanes = a, (t.mode & Bt) !== ct && IS(t), t;
          var Mt = it !== null, Y = e !== null && e.memoizedState !== null;
          if (Mt !== Y && Mt) {
            var oe = t.child;
            if (oe.flags |= Wo, (t.mode & at) !== ct) {
              var q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ee);
              q || mS(bo.current, pC) ? nN() : TE();
            }
          }
          var Ee = t.updateQueue;
          if (Ee !== null && (t.flags |= nt), Ir(t), (t.mode & Bt) !== ct && Mt) {
            var Qe = t.child;
            Qe !== null && (t.treeBaseDuration -= Qe.treeBaseDuration);
          }
          return null;
        }
        case I:
          return md(t), uE(e, t), e === null && Sk(t.stateNode.containerInfo), Ir(t), null;
        case ze:
          var Ve = t.type._context;
          return V0(Ve, t), Ir(t), null;
        case De: {
          var yt = t.type;
          return ul(yt) && zm(t), Ir(t), null;
        }
        case we: {
          gd(t);
          var _t = t.memoizedState;
          if (_t === null)
            return Ir(t), null;
          var on = (t.flags & bt) !== st, Yt = _t.rendering;
          if (Yt === null)
            if (on)
              Sh(_t, !1);
            else {
              var lr = aN() && (e === null || (e.flags & bt) === st);
              if (!lr)
                for (var qt = t.child; qt !== null; ) {
                  var tr = ay(qt);
                  if (tr !== null) {
                    on = !0, t.flags |= bt, Sh(_t, !1);
                    var ma = tr.updateQueue;
                    return ma !== null && (t.updateQueue = ma, t.flags |= nt), t.subtreeFlags = st, aO(t, a), cs(t, yS(bo.current, uh)), t.child;
                  }
                  qt = qt.sibling;
                }
              _t.tail !== null && er() > M_() && (t.flags |= bt, on = !0, Sh(_t, !1), t.lanes = yp);
            }
          else {
            if (!on) {
              var Gr = ay(Yt);
              if (Gr !== null) {
                t.flags |= bt, on = !0;
                var Ei = Gr.updateQueue;
                if (Ei !== null && (t.updateQueue = Ei, t.flags |= nt), Sh(_t, !0), _t.tail === null && _t.tailMode === "hidden" && !Yt.alternate && !Br())
                  return Ir(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                er() * 2 - _t.renderingStartTime > M_() && a !== Aa && (t.flags |= bt, on = !0, Sh(_t, !1), t.lanes = yp);
            }
            if (_t.isBackwards)
              Yt.sibling = t.child, t.child = Yt;
            else {
              var Ua = _t.last;
              Ua !== null ? Ua.sibling = Yt : t.child = Yt, _t.last = Yt;
            }
          }
          if (_t.tail !== null) {
            var ja = _t.tail;
            _t.rendering = ja, _t.tail = ja.sibling, _t.renderingStartTime = er(), ja.sibling = null;
            var ya = bo.current;
            return on ? ya = yS(ya, uh) : ya = yd(ya), cs(t, ya), ja;
          }
          return Ir(t), null;
        }
        case Ne:
          break;
        case le:
        case re: {
          xE(t);
          var cu = t.memoizedState, Nd = cu !== null;
          if (e !== null) {
            var zh = e.memoizedState, ml = zh !== null;
            ml !== Nd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !j && (t.flags |= Wo);
          }
          return !Nd || (t.mode & at) === ct ? Ir(t) : fa(vl, Aa) && (Ir(t), t.subtreeFlags & (cn | nt) && (t.flags |= Wo)), null;
        }
        case ve:
          return null;
        case pe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function nD(e, t, a) {
      switch (L0(t), t.tag) {
        case k: {
          var i = t.type;
          ul(i) && zm(t);
          var l = t.flags;
          return l & mr ? (t.flags = l & ~mr | bt, (t.mode & Bt) !== ct && IS(t), t) : null;
        }
        case M: {
          t.stateNode, md(t), D0(t), SS();
          var d = t.flags;
          return (d & mr) !== st && (d & bt) === st ? (t.flags = d & ~mr | bt, t) : null;
        }
        case B:
          return vS(t), null;
        case Ue: {
          gd(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            dd();
          }
          var S = t.flags;
          return S & mr ? (t.flags = S & ~mr | bt, (t.mode & Bt) !== ct && IS(t), t) : null;
        }
        case we:
          return gd(t), null;
        case I:
          return md(t), null;
        case ze:
          var w = t.type._context;
          return V0(w, t), null;
        case le:
        case re:
          return xE(t), null;
        case ve:
          return null;
        default:
          return null;
      }
    }
    function p_(e, t, a) {
      switch (L0(t), t.tag) {
        case k: {
          var i = t.type.childContextTypes;
          i != null && zm(t);
          break;
        }
        case M: {
          t.stateNode, md(t), D0(t), SS();
          break;
        }
        case B: {
          vS(t);
          break;
        }
        case I:
          md(t);
          break;
        case Ue:
          gd(t);
          break;
        case we:
          gd(t);
          break;
        case ze:
          var l = t.type._context;
          V0(l, t);
          break;
        case le:
        case re:
          xE(t);
          break;
      }
    }
    var h_ = null;
    h_ = /* @__PURE__ */ new Set();
    var Ry = !1, Wr = !1, rD = typeof WeakSet == "function" ? WeakSet : Set, Ze = null, _d = null, xd = null;
    function aD(e) {
      vi(null, function() {
        throw e;
      }), uo();
    }
    var iD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Bt)
        try {
          pl(), t.componentWillUnmount();
        } finally {
          dl(e);
        }
      else
        t.componentWillUnmount();
    };
    function v_(e, t) {
      try {
        ps(Er, e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function sE(e, t, a) {
      try {
        iD(e, a);
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function oD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function m_(e, t) {
      try {
        g_(e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function Td(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Pe && Ae && e.mode & Bt)
              try {
                pl(), i = a(null);
              } finally {
                dl(e);
              }
            else
              i = a(null);
          } catch (l) {
            Cn(e, t, l);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Et(e));
        } else
          a.current = null;
    }
    function ky(e, t, a) {
      try {
        a();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    var y_ = !1;
    function lD(e, t) {
      ER(e.containerInfo), Ze = t, uD();
      var a = y_;
      return y_ = !1, a;
    }
    function uD() {
      for (; Ze !== null; ) {
        var e = Ze, t = e.child;
        (e.subtreeFlags & aa) !== st && t !== null ? (t.return = e, Ze = t) : sD();
      }
    }
    function sD() {
      for (; Ze !== null; ) {
        var e = Ze;
        kn(e);
        try {
          cD(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        Sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ze = t;
          return;
        }
        Ze = e.return;
      }
    }
    function cD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Zn) !== st) {
        switch (kn(e), e.tag) {
          case A:
          case Be:
          case Z:
            break;
          case k: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !Uc && (d.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(e) || "instance"), d.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(e) || "instance"));
              var v = d.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Eo(e.type, i), l);
              {
                var S = h_;
                v === void 0 && !S.has(e.type) && (S.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Et(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case M: {
            {
              var w = e.stateNode;
              WR(w.containerInfo);
            }
            break;
          }
          case B:
          case X:
          case I:
          case De:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Sn();
      }
    }
    function _o(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var d = l.next, v = d;
        do {
          if ((v.tag & e) === e) {
            var S = v.destroy;
            v.destroy = void 0, S !== void 0 && ((e & Vr) !== ri ? jv(t) : (e & Er) !== ri && Au(t), (e & sl) !== ri && Ah(!0), ky(t, a, S), (e & sl) !== ri && Ah(!1), (e & Vr) !== ri ? Pv() : (e & Er) !== ri && ec());
          }
          v = v.next;
        } while (v !== d);
      }
    }
    function ps(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, d = l;
        do {
          if ((d.tag & e) === e) {
            (e & Vr) !== ri ? pp(t) : (e & Er) !== ri && Fv(t);
            var v = d.create;
            (e & sl) !== ri && Ah(!0), d.destroy = v(), (e & sl) !== ri && Ah(!1), (e & Vr) !== ri ? vf() : (e & Er) !== ri && hp();
            {
              var S = d.destroy;
              if (S !== void 0 && typeof S != "function") {
                var w = void 0;
                (d.tag & Er) !== st ? w = "useLayoutEffect" : (d.tag & sl) !== st ? w = "useInsertionEffect" : w = "useEffect";
                var x = void 0;
                S === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof S.then == "function" ? x = `

It looks like you wrote ` + w + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + w + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + S, y("%s must not return anything besides a function, which is used for clean-up.%s", w, x);
              }
            }
          }
          d = d.next;
        } while (d !== l);
      }
    }
    function fD(e, t) {
      if ((t.flags & nt) !== st)
        switch (t.tag) {
          case ue: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, d = i.onPostCommit, v = FC(), S = t.alternate === null ? "mount" : "update";
            PC() && (S = "nested-update"), typeof d == "function" && d(l, S, a, v);
            var w = t.return;
            e:
              for (; w !== null; ) {
                switch (w.tag) {
                  case M:
                    var x = w.stateNode;
                    x.passiveEffectDuration += a;
                    break e;
                  case ue:
                    var R = w.stateNode;
                    R.passiveEffectDuration += a;
                    break e;
                }
                w = w.return;
              }
            break;
          }
        }
    }
    function dD(e, t, a, i) {
      if ((a.flags & yi) !== st)
        switch (a.tag) {
          case A:
          case Be:
          case Z: {
            if (!Wr)
              if (a.mode & Bt)
                try {
                  pl(), ps(Er | Sr, a);
                } finally {
                  dl(a);
                }
              else
                ps(Er | Sr, a);
            break;
          }
          case k: {
            var l = a.stateNode;
            if (a.flags & nt && !Wr)
              if (t === null)
                if (a.type === a.elementType && !Uc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(a) || "instance")), a.mode & Bt)
                  try {
                    pl(), l.componentDidMount();
                  } finally {
                    dl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : Eo(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Uc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(a) || "instance")), a.mode & Bt)
                  try {
                    pl(), l.componentDidUpdate(d, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    dl(a);
                  }
                else
                  l.componentDidUpdate(d, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var S = a.updateQueue;
            S !== null && (a.type === a.elementType && !Uc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(a) || "instance")), Jw(a, S, l));
            break;
          }
          case M: {
            var w = a.updateQueue;
            if (w !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case B:
                    x = a.child.stateNode;
                    break;
                  case k:
                    x = a.child.stateNode;
                    break;
                }
              Jw(a, w, x);
            }
            break;
          }
          case B: {
            var R = a.stateNode;
            if (t === null && a.flags & nt) {
              var $ = a.type, F = a.memoizedProps;
              NR(R, $, F);
            }
            break;
          }
          case X:
            break;
          case I:
            break;
          case ue: {
            {
              var K = a.memoizedProps, J = K.onCommit, ie = K.onRender, qe = a.stateNode.effectDuration, ft = FC(), it = t === null ? "mount" : "update";
              PC() && (it = "nested-update"), typeof ie == "function" && ie(a.memoizedProps.id, it, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ft);
              {
                typeof J == "function" && J(a.memoizedProps.id, it, qe, ft), sN(a);
                var jt = a.return;
                e:
                  for (; jt !== null; ) {
                    switch (jt.tag) {
                      case M:
                        var Mt = jt.stateNode;
                        Mt.effectDuration += qe;
                        break e;
                      case ue:
                        var Y = jt.stateNode;
                        Y.effectDuration += qe;
                        break e;
                    }
                    jt = jt.return;
                  }
              }
            }
            break;
          }
          case Ue: {
            ED(e, a);
            break;
          }
          case we:
          case De:
          case Ne:
          case le:
          case re:
          case pe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || a.flags & ka && g_(a);
    }
    function pD(e) {
      switch (e.tag) {
        case A:
        case Be:
        case Z: {
          if (e.mode & Bt)
            try {
              pl(), v_(e, e.return);
            } finally {
              dl(e);
            }
          else
            v_(e, e.return);
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && oD(e, e.return, t), m_(e, e.return);
          break;
        }
        case B: {
          m_(e, e.return);
          break;
        }
      }
    }
    function hD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === B) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? $R(l) : VR(i.stateNode, i.memoizedProps);
            } catch (v) {
              Cn(e, e.return, v);
            }
          }
        } else if (i.tag === X) {
          if (a === null)
            try {
              var d = i.stateNode;
              t ? BR(d) : IR(d, i.memoizedProps);
            } catch (v) {
              Cn(e, e.return, v);
            }
        } else if (!((i.tag === le || i.tag === re) && i.memoizedState !== null && i !== e)) {
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
    function g_(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case B:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Bt)
            try {
              pl(), l = t(i);
            } finally {
              dl(e);
            }
          else
            l = t(i);
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Et(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Et(e)), t.current = i;
      }
    }
    function vD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function S_(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, S_(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === B) {
          var a = e.stateNode;
          a !== null && wk(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function mD(e) {
      for (var t = e.return; t !== null; ) {
        if (E_(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function E_(e) {
      return e.tag === B || e.tag === M || e.tag === I;
    }
    function b_(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || E_(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== B && t.tag !== X && t.tag !== Te; ) {
            if (t.flags & cn || t.child === null || t.tag === I)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & cn))
            return t.stateNode;
        }
    }
    function yD(e) {
      var t = mD(e);
      switch (t.tag) {
        case B: {
          var a = t.stateNode;
          t.flags & Ia && (ww(a), t.flags &= ~Ia);
          var i = b_(e);
          fE(e, i, a);
          break;
        }
        case M:
        case I: {
          var l = t.stateNode.containerInfo, d = b_(e);
          cE(e, d, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function cE(e, t, a) {
      var i = e.tag, l = i === B || i === X;
      if (l) {
        var d = e.stateNode;
        t ? jR(a, d, t) : zR(a, d);
      } else if (i !== I) {
        var v = e.child;
        if (v !== null) {
          cE(v, t, a);
          for (var S = v.sibling; S !== null; )
            cE(S, t, a), S = S.sibling;
        }
      }
    }
    function fE(e, t, a) {
      var i = e.tag, l = i === B || i === X;
      if (l) {
        var d = e.stateNode;
        t ? UR(a, d, t) : LR(a, d);
      } else if (i !== I) {
        var v = e.child;
        if (v !== null) {
          fE(v, t, a);
          for (var S = v.sibling; S !== null; )
            fE(S, t, a), S = S.sibling;
        }
      }
    }
    var Yr = null, xo = !1;
    function gD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case B: {
                Yr = i.stateNode, xo = !1;
                break e;
              }
              case M: {
                Yr = i.stateNode.containerInfo, xo = !0;
                break e;
              }
              case I: {
                Yr = i.stateNode.containerInfo, xo = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Yr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        w_(e, t, a), Yr = null, xo = !1;
      }
      vD(a);
    }
    function hs(e, t, a) {
      for (var i = a.child; i !== null; )
        w_(e, t, i), i = i.sibling;
    }
    function w_(e, t, a) {
      switch (zv(a), a.tag) {
        case B:
          Wr || Td(a, t);
        case X: {
          {
            var i = Yr, l = xo;
            Yr = null, hs(e, t, a), Yr = i, xo = l, Yr !== null && (xo ? FR(Yr, a.stateNode) : PR(Yr, a.stateNode));
          }
          return;
        }
        case Te: {
          Yr !== null && (xo ? HR(Yr, a.stateNode) : w0(Yr, a.stateNode));
          return;
        }
        case I: {
          {
            var d = Yr, v = xo;
            Yr = a.stateNode.containerInfo, xo = !0, hs(e, t, a), Yr = d, xo = v;
          }
          return;
        }
        case A:
        case Be:
        case gt:
        case Z: {
          if (!Wr) {
            var S = a.updateQueue;
            if (S !== null) {
              var w = S.lastEffect;
              if (w !== null) {
                var x = w.next, R = x;
                do {
                  var $ = R, F = $.destroy, K = $.tag;
                  F !== void 0 && ((K & sl) !== ri ? ky(a, t, F) : (K & Er) !== ri && (Au(a), a.mode & Bt ? (pl(), ky(a, t, F), dl(a)) : ky(a, t, F), ec())), R = R.next;
                } while (R !== x);
              }
            }
          }
          hs(e, t, a);
          return;
        }
        case k: {
          if (!Wr) {
            Td(a, t);
            var J = a.stateNode;
            typeof J.componentWillUnmount == "function" && sE(a, t, J);
          }
          hs(e, t, a);
          return;
        }
        case Ne: {
          hs(e, t, a);
          return;
        }
        case le: {
          if (
            // TODO: Remove this dead flag
            a.mode & at
          ) {
            var ie = Wr;
            Wr = ie || a.memoizedState !== null, hs(e, t, a), Wr = ie;
          } else
            hs(e, t, a);
          break;
        }
        default: {
          hs(e, t, a);
          return;
        }
      }
    }
    function SD(e) {
      e.memoizedState;
    }
    function ED(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var d = l.dehydrated;
            d !== null && ik(d);
          }
        }
      }
    }
    function C_(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new rD()), t.forEach(function(i) {
          var l = mN.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Na)
              if (_d !== null && xd !== null)
                Nh(xd, _d);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function bD(e, t, a) {
      _d = a, xd = e, kn(t), __(t, e), kn(t), _d = null, xd = null;
    }
    function To(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var d = i[l];
          try {
            gD(e, t, d);
          } catch (w) {
            Cn(d, t, w);
          }
        }
      var v = As();
      if (t.subtreeFlags & ia)
        for (var S = t.child; S !== null; )
          kn(S), __(S, e), S = S.sibling;
      kn(v);
    }
    function __(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case A:
        case Be:
        case gt:
        case Z: {
          if (To(t, e), hl(e), l & nt) {
            try {
              _o(sl | Sr, e, e.return), ps(sl | Sr, e);
            } catch (yt) {
              Cn(e, e.return, yt);
            }
            if (e.mode & Bt) {
              try {
                pl(), _o(Er | Sr, e, e.return);
              } catch (yt) {
                Cn(e, e.return, yt);
              }
              dl(e);
            } else
              try {
                _o(Er | Sr, e, e.return);
              } catch (yt) {
                Cn(e, e.return, yt);
              }
          }
          return;
        }
        case k: {
          To(t, e), hl(e), l & ka && i !== null && Td(i, i.return);
          return;
        }
        case B: {
          To(t, e), hl(e), l & ka && i !== null && Td(i, i.return);
          {
            if (e.flags & Ia) {
              var d = e.stateNode;
              try {
                ww(d);
              } catch (yt) {
                Cn(e, e.return, yt);
              }
            }
            if (l & nt) {
              var v = e.stateNode;
              if (v != null) {
                var S = e.memoizedProps, w = i !== null ? i.memoizedProps : S, x = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    AR(v, R, x, w, S, e);
                  } catch (yt) {
                    Cn(e, e.return, yt);
                  }
              }
            }
          }
          return;
        }
        case X: {
          if (To(t, e), hl(e), l & nt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var $ = e.stateNode, F = e.memoizedProps, K = i !== null ? i.memoizedProps : F;
            try {
              MR($, K, F);
            } catch (yt) {
              Cn(e, e.return, yt);
            }
          }
          return;
        }
        case M: {
          if (To(t, e), hl(e), l & nt && i !== null) {
            var J = i.memoizedState;
            if (J.isDehydrated)
              try {
                ak(t.containerInfo);
              } catch (yt) {
                Cn(e, e.return, yt);
              }
          }
          return;
        }
        case I: {
          To(t, e), hl(e);
          return;
        }
        case Ue: {
          To(t, e), hl(e);
          var ie = e.child;
          if (ie.flags & Wo) {
            var qe = ie.stateNode, ft = ie.memoizedState, it = ft !== null;
            if (qe.isHidden = it, it) {
              var jt = ie.alternate !== null && ie.alternate.memoizedState !== null;
              jt || tN();
            }
          }
          if (l & nt) {
            try {
              SD(e);
            } catch (yt) {
              Cn(e, e.return, yt);
            }
            C_(e);
          }
          return;
        }
        case le: {
          var Mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & at
          ) {
            var Y = Wr;
            Wr = Y || Mt, To(t, e), Wr = Y;
          } else
            To(t, e);
          if (hl(e), l & Wo) {
            var oe = e.stateNode, q = e.memoizedState, Ee = q !== null, Qe = e;
            if (oe.isHidden = Ee, Ee && !Mt && (Qe.mode & at) !== ct) {
              Ze = Qe;
              for (var Ve = Qe.child; Ve !== null; )
                Ze = Ve, CD(Ve), Ve = Ve.sibling;
            }
            hD(Qe, Ee);
          }
          return;
        }
        case we: {
          To(t, e), hl(e), l & nt && C_(e);
          return;
        }
        case Ne:
          return;
        default: {
          To(t, e), hl(e);
          return;
        }
      }
    }
    function hl(e) {
      var t = e.flags;
      if (t & cn) {
        try {
          yD(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        e.flags &= ~cn;
      }
      t & Ni && (e.flags &= ~Ni);
    }
    function wD(e, t, a) {
      _d = a, xd = t, Ze = e, x_(e, t, a), _d = null, xd = null;
    }
    function x_(e, t, a) {
      for (var i = (e.mode & at) !== ct; Ze !== null; ) {
        var l = Ze, d = l.child;
        if (l.tag === le && i) {
          var v = l.memoizedState !== null, S = v || Ry;
          if (S) {
            dE(e, t, a);
            continue;
          } else {
            var w = l.alternate, x = w !== null && w.memoizedState !== null, R = x || Wr, $ = Ry, F = Wr;
            Ry = S, Wr = R, Wr && !F && (Ze = l, _D(l));
            for (var K = d; K !== null; )
              Ze = K, x_(
                K,
                // New root; bubble back up to here and stop.
                t,
                a
              ), K = K.sibling;
            Ze = l, Ry = $, Wr = F, dE(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & yi) !== st && d !== null ? (d.return = l, Ze = d) : dE(e, t, a);
      }
    }
    function dE(e, t, a) {
      for (; Ze !== null; ) {
        var i = Ze;
        if ((i.flags & yi) !== st) {
          var l = i.alternate;
          kn(i);
          try {
            dD(t, l, i, a);
          } catch (v) {
            Cn(i, i.return, v);
          }
          Sn();
        }
        if (i === e) {
          Ze = null;
          return;
        }
        var d = i.sibling;
        if (d !== null) {
          d.return = i.return, Ze = d;
          return;
        }
        Ze = i.return;
      }
    }
    function CD(e) {
      for (; Ze !== null; ) {
        var t = Ze, a = t.child;
        switch (t.tag) {
          case A:
          case Be:
          case gt:
          case Z: {
            if (t.mode & Bt)
              try {
                pl(), _o(Er, t, t.return);
              } finally {
                dl(t);
              }
            else
              _o(Er, t, t.return);
            break;
          }
          case k: {
            Td(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && sE(t, t.return, i);
            break;
          }
          case B: {
            Td(t, t.return);
            break;
          }
          case le: {
            var l = t.memoizedState !== null;
            if (l) {
              T_(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ze = a) : T_(e);
      }
    }
    function T_(e) {
      for (; Ze !== null; ) {
        var t = Ze;
        if (t === e) {
          Ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ze = a;
          return;
        }
        Ze = t.return;
      }
    }
    function _D(e) {
      for (; Ze !== null; ) {
        var t = Ze, a = t.child;
        if (t.tag === le) {
          var i = t.memoizedState !== null;
          if (i) {
            R_(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ze = a) : R_(e);
      }
    }
    function R_(e) {
      for (; Ze !== null; ) {
        var t = Ze;
        kn(t);
        try {
          pD(t);
        } catch (i) {
          Cn(t, t.return, i);
        }
        if (Sn(), t === e) {
          Ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ze = a;
          return;
        }
        Ze = t.return;
      }
    }
    function xD(e, t, a, i) {
      Ze = t, TD(t, e, a, i);
    }
    function TD(e, t, a, i) {
      for (; Ze !== null; ) {
        var l = Ze, d = l.child;
        (l.subtreeFlags & oa) !== st && d !== null ? (d.return = l, Ze = d) : RD(e, t, a, i);
      }
    }
    function RD(e, t, a, i) {
      for (; Ze !== null; ) {
        var l = Ze;
        if ((l.flags & ra) !== st) {
          kn(l);
          try {
            kD(t, l, a, i);
          } catch (v) {
            Cn(l, l.return, v);
          }
          Sn();
        }
        if (l === e) {
          Ze = null;
          return;
        }
        var d = l.sibling;
        if (d !== null) {
          d.return = l.return, Ze = d;
          return;
        }
        Ze = l.return;
      }
    }
    function kD(e, t, a, i) {
      switch (t.tag) {
        case A:
        case Be:
        case Z: {
          if (t.mode & Bt) {
            VS();
            try {
              ps(Vr | Sr, t);
            } finally {
              BS(t);
            }
          } else
            ps(Vr | Sr, t);
          break;
        }
      }
    }
    function OD(e) {
      Ze = e, DD();
    }
    function DD() {
      for (; Ze !== null; ) {
        var e = Ze, t = e.child;
        if ((Ze.flags & It) !== st) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ze = l, MD(l, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var v = d.child;
                if (v !== null) {
                  d.child = null;
                  do {
                    var S = v.sibling;
                    v.sibling = null, v = S;
                  } while (v !== null);
                }
              }
            }
            Ze = e;
          }
        }
        (e.subtreeFlags & oa) !== st && t !== null ? (t.return = e, Ze = t) : ND();
      }
    }
    function ND() {
      for (; Ze !== null; ) {
        var e = Ze;
        (e.flags & ra) !== st && (kn(e), AD(e), Sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ze = t;
          return;
        }
        Ze = e.return;
      }
    }
    function AD(e) {
      switch (e.tag) {
        case A:
        case Be:
        case Z: {
          e.mode & Bt ? (VS(), _o(Vr | Sr, e, e.return), BS(e)) : _o(Vr | Sr, e, e.return);
          break;
        }
      }
    }
    function MD(e, t) {
      for (; Ze !== null; ) {
        var a = Ze;
        kn(a), zD(a, t), Sn();
        var i = a.child;
        i !== null ? (i.return = a, Ze = i) : LD(e);
      }
    }
    function LD(e) {
      for (; Ze !== null; ) {
        var t = Ze, a = t.sibling, i = t.return;
        if (S_(t), t === e) {
          Ze = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ze = a;
          return;
        }
        Ze = i;
      }
    }
    function zD(e, t) {
      switch (e.tag) {
        case A:
        case Be:
        case Z: {
          e.mode & Bt ? (VS(), _o(Vr, e, t), BS(e)) : _o(Vr, e, t);
          break;
        }
      }
    }
    function UD(e) {
      switch (e.tag) {
        case A:
        case Be:
        case Z: {
          try {
            ps(Er | Sr, e);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function jD(e) {
      switch (e.tag) {
        case A:
        case Be:
        case Z: {
          try {
            ps(Vr | Sr, e);
          } catch (t) {
            Cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function PD(e) {
      switch (e.tag) {
        case A:
        case Be:
        case Z: {
          try {
            _o(Er | Sr, e, e.return);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && sE(e, e.return, t);
          break;
        }
      }
    }
    function FD(e) {
      switch (e.tag) {
        case A:
        case Be:
        case Z:
          try {
            _o(Vr | Sr, e, e.return);
          } catch (t) {
            Cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Eh = Symbol.for;
      Eh("selector.component"), Eh("selector.has_pseudo_class"), Eh("selector.role"), Eh("selector.test_id"), Eh("selector.text");
    }
    var HD = [];
    function $D() {
      HD.forEach(function(e) {
        return e();
      });
    }
    var BD = p.ReactCurrentActQueue;
    function VD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function k_() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && BD.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ID = Math.ceil, pE = p.ReactCurrentDispatcher, hE = p.ReactCurrentOwner, qr = p.ReactCurrentBatchConfig, Ro = p.ReactCurrentActQueue, Cr = (
      /*             */
      0
    ), O_ = (
      /*               */
      1
    ), Qr = (
      /*                */
      2
    ), Wi = (
      /*                */
      4
    ), ou = 0, bh = 1, jc = 2, Oy = 3, wh = 4, D_ = 5, vE = 6, Ut = Cr, La = null, Qn = null, _r = se, vl = se, mE = as(se), xr = ou, Ch = null, Dy = se, _h = se, Ny = se, xh = null, ai = null, yE = 0, N_ = 500, A_ = 1 / 0, WD = 500, lu = null;
    function Th() {
      A_ = er() + WD;
    }
    function M_() {
      return A_;
    }
    var Ay = !1, gE = null, Rd = null, Pc = !1, vs = null, Rh = se, SE = [], EE = null, YD = 50, kh = 0, bE = null, wE = !1, My = !1, qD = 50, kd = 0, Ly = null, Oh = yn, zy = se, L_ = !1;
    function Uy() {
      return La;
    }
    function za() {
      return (Ut & (Qr | Wi)) !== Cr ? er() : (Oh !== yn || (Oh = er()), Oh);
    }
    function ms(e) {
      var t = e.mode;
      if ((t & at) === ct)
        return dt;
      if ((Ut & Qr) !== Cr && _r !== se)
        return Fu(_r);
      var a = Vk() !== Bk;
      if (a) {
        if (qr.transition !== null) {
          var i = qr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return zy === In && (zy = Qv()), zy;
      }
      var l = Ka();
      if (l !== In)
        return l;
      var d = RR();
      return d;
    }
    function QD(e) {
      var t = e.mode;
      return (t & at) === ct ? dt : ca();
    }
    function Tr(e, t, a, i) {
      gN(), L_ && y("useInsertionEffect must not schedule updates."), wE && (My = !0), Yl(e, a, i), (Ut & Qr) !== se && e === La ? bN(t) : (Na && zf(e, t, a), wN(t), e === La && ((Ut & Qr) === Cr && (_h = xt(_h, a)), xr === wh && ys(e, _r)), ii(e, i), a === dt && Ut === Cr && (t.mode & at) === ct && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ro.isBatchingLegacy && (Th(), Mw()));
    }
    function GD(e, t, a) {
      var i = e.current;
      i.lanes = t, Yl(e, t, a), ii(e, a);
    }
    function KD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ut & Qr) !== Cr
      );
    }
    function ii(e, t) {
      var a = e.callbackNode;
      $g(e, t);
      var i = uc(e, e === La ? _r : se);
      if (i === se) {
        a !== null && K_(a), e.callbackNode = null, e.callbackPriority = In;
        return;
      }
      var l = Wn(i), d = e.callbackPriority;
      if (d === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ro.current !== null && a !== OE)) {
        a == null && d !== dt && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && K_(a);
      var v;
      if (l === dt)
        e.tag === is ? (Ro.isBatchingLegacy !== null && (Ro.didScheduleLegacyUpdate = !0), xk(j_.bind(null, e))) : Aw(j_.bind(null, e)), Ro.current !== null ? Ro.current.push(os) : OR(function() {
          (Ut & (Qr | Wi)) === Cr && os();
        }), v = null;
      else {
        var S;
        switch (gr(i)) {
          case Yn:
            S = la;
            break;
          case po:
            S = Ou;
            break;
          case Ui:
            S = Mi;
            break;
          case Hu:
            S = Js;
            break;
          default:
            S = Mi;
            break;
        }
        v = DE(S, z_.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function z_(e, t) {
      if (gO(), Oh = yn, zy = se, (Ut & (Qr | Wi)) !== Cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = su();
      if (i && e.callbackNode !== a)
        return null;
      var l = uc(e, e === La ? _r : se);
      if (l === se)
        return null;
      var d = !cc(e, l) && !qv(e, l) && !t, v = d ? oN(e, l) : Py(e, l);
      if (v !== ou) {
        if (v === jc) {
          var S = tl(e);
          S !== se && (l = S, v = CE(e, S));
        }
        if (v === bh) {
          var w = Ch;
          throw Fc(e, se), ys(e, l), ii(e, er()), w;
        }
        if (v === vE)
          ys(e, l);
        else {
          var x = !cc(e, l), R = e.current.alternate;
          if (x && !JD(R)) {
            if (v = Py(e, l), v === jc) {
              var $ = tl(e);
              $ !== se && (l = $, v = CE(e, $));
            }
            if (v === bh) {
              var F = Ch;
              throw Fc(e, se), ys(e, l), ii(e, er()), F;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, XD(e, v, l);
        }
      }
      return ii(e, er()), e.callbackNode === a ? z_.bind(null, e) : null;
    }
    function CE(e, t) {
      var a = xh;
      if (Uf(e)) {
        var i = Fc(e, t);
        i.flags |= Fr, gk(e.containerInfo);
      }
      var l = Py(e, t);
      if (l !== jc) {
        var d = ai;
        ai = a, d !== null && U_(d);
      }
      return l;
    }
    function U_(e) {
      ai === null ? ai = e : ai.push.apply(ai, e);
    }
    function XD(e, t, a) {
      switch (t) {
        case ou:
        case bh:
          throw new Error("Root did not complete. This is a bug in React.");
        case jc: {
          Hc(e, ai, lu);
          break;
        }
        case Oy: {
          if (ys(e, a), Iv(a) && // do not delay if we're inside an act() scope
          !X_()) {
            var i = yE + N_ - er();
            if (i > 10) {
              var l = uc(e, se);
              if (l !== se)
                break;
              var d = e.suspendedLanes;
              if (!Wl(d, a)) {
                za(), Mf(e, d);
                break;
              }
              e.timeoutHandle = E0(Hc.bind(null, e, ai, lu), i);
              break;
            }
          }
          Hc(e, ai, lu);
          break;
        }
        case wh: {
          if (ys(e, a), Yv(a))
            break;
          if (!X_()) {
            var v = Df(e, a), S = v, w = er() - S, x = yN(w) - w;
            if (x > 10) {
              e.timeoutHandle = E0(Hc.bind(null, e, ai, lu), x);
              break;
            }
          }
          Hc(e, ai, lu);
          break;
        }
        case D_: {
          Hc(e, ai, lu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function JD(e) {
      for (var t = e; ; ) {
        if (t.flags & Ll) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var d = i[l], v = d.getSnapshot, S = d.value;
                try {
                  if (!Je(v(), S))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var w = t.child;
        if (t.subtreeFlags & Ll && w !== null) {
          w.return = t, t = w;
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
    function ys(e, t) {
      t = fc(t, Ny), t = fc(t, _h), Kv(e, t);
    }
    function j_(e) {
      if (SO(), (Ut & (Qr | Wi)) !== Cr)
        throw new Error("Should not already be working.");
      su();
      var t = uc(e, se);
      if (!fa(t, dt))
        return ii(e, er()), null;
      var a = Py(e, t);
      if (e.tag !== is && a === jc) {
        var i = tl(e);
        i !== se && (t = i, a = CE(e, i));
      }
      if (a === bh) {
        var l = Ch;
        throw Fc(e, se), ys(e, t), ii(e, er()), l;
      }
      if (a === vE)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, Hc(e, ai, lu), ii(e, er()), null;
    }
    function ZD(e, t) {
      t !== se && (bp(e, xt(t, dt)), ii(e, er()), (Ut & (Qr | Wi)) === Cr && (Th(), os()));
    }
    function _E(e, t) {
      var a = Ut;
      Ut |= O_;
      try {
        return e(t);
      } finally {
        Ut = a, Ut === Cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ro.isBatchingLegacy && (Th(), Mw());
      }
    }
    function eN(e, t, a, i, l) {
      var d = Ka(), v = qr.transition;
      try {
        return qr.transition = null, Pn(Yn), e(t, a, i, l);
      } finally {
        Pn(d), qr.transition = v, Ut === Cr && Th();
      }
    }
    function uu(e) {
      vs !== null && vs.tag === is && (Ut & (Qr | Wi)) === Cr && su();
      var t = Ut;
      Ut |= O_;
      var a = qr.transition, i = Ka();
      try {
        return qr.transition = null, Pn(Yn), e ? e() : void 0;
      } finally {
        Pn(i), qr.transition = a, Ut = t, (Ut & (Qr | Wi)) === Cr && os();
      }
    }
    function P_() {
      return (Ut & (Qr | Wi)) !== Cr;
    }
    function jy(e, t) {
      ha(mE, vl, e), vl = xt(vl, t);
    }
    function xE(e) {
      vl = mE.current, pa(mE, e);
    }
    function Fc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var a = e.timeoutHandle;
      if (a !== b0 && (e.timeoutHandle = b0, kR(a)), Qn !== null)
        for (var i = Qn.return; i !== null; ) {
          var l = i.alternate;
          p_(l, i), i = i.return;
        }
      La = e;
      var d = $c(e.current, null);
      return Qn = d, _r = vl = t, xr = ou, Ch = null, Dy = se, _h = se, Ny = se, xh = null, ai = null, qk(), So.discardPendingWarnings(), d;
    }
    function F_(e, t) {
      do {
        var a = Qn;
        try {
          if (Wm(), vC(), Sn(), hE.current = null, a === null || a.return === null) {
            xr = bh, Ch = t, Qn = null;
            return;
          }
          if (Pe && a.mode & Bt && Cy(a, !0), He)
            if (jl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              $v(a, i, _r);
            } else
              Hv(a, t, _r);
          _O(e, a.return, a, t, _r), V_(a);
        } catch (l) {
          t = l, Qn === a && a !== null ? (a = a.return, Qn = a) : a = Qn;
          continue;
        }
        return;
      } while (!0);
    }
    function H_() {
      var e = pE.current;
      return pE.current = gy, e === null ? gy : e;
    }
    function $_(e) {
      pE.current = e;
    }
    function tN() {
      yE = er();
    }
    function Dh(e) {
      Dy = xt(e, Dy);
    }
    function nN() {
      xr === ou && (xr = Oy);
    }
    function TE() {
      (xr === ou || xr === Oy || xr === jc) && (xr = wh), La !== null && (sc(Dy) || sc(_h)) && ys(La, _r);
    }
    function rN(e) {
      xr !== wh && (xr = jc), xh === null ? xh = [e] : xh.push(e);
    }
    function aN() {
      return xr === ou;
    }
    function Py(e, t) {
      var a = Ut;
      Ut |= Qr;
      var i = H_();
      if (La !== e || _r !== t) {
        if (Na) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Nh(e, _r), l.clear()), wp(e, t);
        }
        lu = pc(), Fc(e, t);
      }
      Lu(t);
      do
        try {
          iN();
          break;
        } catch (d) {
          F_(e, d);
        }
      while (!0);
      if (Wm(), Ut = a, $_(i), Qn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Jo(), La = null, _r = se, xr;
    }
    function iN() {
      for (; Qn !== null; )
        B_(Qn);
    }
    function oN(e, t) {
      var a = Ut;
      Ut |= Qr;
      var i = H_();
      if (La !== e || _r !== t) {
        if (Na) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Nh(e, _r), l.clear()), wp(e, t);
        }
        lu = pc(), Th(), Fc(e, t);
      }
      Lu(t);
      do
        try {
          lN();
          break;
        } catch (d) {
          F_(e, d);
        }
      while (!0);
      return Wm(), $_(i), Ut = a, Qn !== null ? (nc(), ou) : (Jo(), La = null, _r = se, xr);
    }
    function lN() {
      for (; Qn !== null && !Mv(); )
        B_(Qn);
    }
    function B_(e) {
      var t = e.alternate;
      kn(e);
      var a;
      (e.mode & Bt) !== ct ? ($S(e), a = RE(t, e, vl), Cy(e, !0)) : a = RE(t, e, vl), Sn(), e.memoizedProps = e.pendingProps, a === null ? V_(e) : Qn = a, hE.current = null;
    }
    function V_(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Yo) === st) {
          kn(t);
          var l = void 0;
          if ((t.mode & Bt) === ct ? l = d_(a, t, vl) : ($S(t), l = d_(a, t, vl), Cy(t, !1)), Sn(), l !== null) {
            Qn = l;
            return;
          }
        } else {
          var d = nD(a, t);
          if (d !== null) {
            d.flags &= so, Qn = d;
            return;
          }
          if ((t.mode & Bt) !== ct) {
            Cy(t, !1);
            for (var v = t.actualDuration, S = t.child; S !== null; )
              v += S.actualDuration, S = S.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= Yo, i.subtreeFlags = st, i.deletions = null;
          else {
            xr = vE, Qn = null;
            return;
          }
        }
        var w = t.sibling;
        if (w !== null) {
          Qn = w;
          return;
        }
        t = i, Qn = t;
      } while (t !== null);
      xr === ou && (xr = D_);
    }
    function Hc(e, t, a) {
      var i = Ka(), l = qr.transition;
      try {
        qr.transition = null, Pn(Yn), uN(e, t, a, i);
      } finally {
        qr.transition = l, Pn(i);
      }
      return null;
    }
    function uN(e, t, a, i) {
      do
        su();
      while (vs !== null);
      if (SN(), (Ut & (Qr | Wi)) !== Cr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, d = e.finishedLanes;
      if (Uv(d), l === null)
        return Zs(), null;
      if (d === se && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = se, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = In;
      var v = xt(l.lanes, l.childLanes);
      Lf(e, v), e === La && (La = null, Qn = null, _r = se), ((l.subtreeFlags & oa) !== st || (l.flags & oa) !== st) && (Pc || (Pc = !0, EE = a, DE(Mi, function() {
        return su(), null;
      })));
      var S = (l.subtreeFlags & (aa | ia | yi | oa)) !== st, w = (l.flags & (aa | ia | yi | oa)) !== st;
      if (S || w) {
        var x = qr.transition;
        qr.transition = null;
        var R = Ka();
        Pn(Yn);
        var $ = Ut;
        Ut |= Wi, hE.current = null, lD(e, l), HC(), bD(e, l, d), bR(e.containerInfo), e.current = l, Mu(d), wD(l, e, d), Bv(), ku(), Ut = $, Pn(R), qr.transition = x;
      } else
        e.current = l, HC();
      var F = Pc;
      if (Pc ? (Pc = !1, vs = e, Rh = d) : (kd = 0, Ly = null), v = e.pendingLanes, v === se && (Rd = null), F || q_(e.current, !1), Ko(l.stateNode, i), Na && e.memoizedUpdaters.clear(), $D(), ii(e, er()), t !== null)
        for (var K = e.onRecoverableError, J = 0; J < t.length; J++) {
          var ie = t[J], qe = ie.stack, ft = ie.digest;
          K(ie.value, {
            componentStack: qe,
            digest: ft
          });
        }
      if (Ay) {
        Ay = !1;
        var it = gE;
        throw gE = null, it;
      }
      return fa(Rh, dt) && e.tag !== is && su(), v = e.pendingLanes, fa(v, dt) ? (yO(), e === bE ? kh++ : (kh = 0, bE = e)) : kh = 0, os(), Zs(), null;
    }
    function su() {
      if (vs !== null) {
        var e = gr(Rh), t = Wg(Ui, e), a = qr.transition, i = Ka();
        try {
          return qr.transition = null, Pn(t), cN();
        } finally {
          Pn(i), qr.transition = a;
        }
      }
      return !1;
    }
    function sN(e) {
      SE.push(e), Pc || (Pc = !0, DE(Mi, function() {
        return su(), null;
      }));
    }
    function cN() {
      if (vs === null)
        return !1;
      var e = EE;
      EE = null;
      var t = vs, a = Rh;
      if (vs = null, Rh = se, (Ut & (Qr | Wi)) !== Cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      wE = !0, My = !1, tc(a);
      var i = Ut;
      Ut |= Wi, OD(t.current), xD(t, t.current, a, e);
      {
        var l = SE;
        SE = [];
        for (var d = 0; d < l.length; d++) {
          var v = l[d];
          fD(t, v);
        }
      }
      Li(), q_(t.current, !0), Ut = i, os(), My ? t === Ly ? kd++ : (kd = 0, Ly = t) : kd = 0, wE = !1, My = !1, dp(t);
      {
        var S = t.current.stateNode;
        S.effectDuration = 0, S.passiveEffectDuration = 0;
      }
      return !0;
    }
    function I_(e) {
      return Rd !== null && Rd.has(e);
    }
    function fN(e) {
      Rd === null ? Rd = /* @__PURE__ */ new Set([e]) : Rd.add(e);
    }
    function dN(e) {
      Ay || (Ay = !0, gE = e);
    }
    var pN = dN;
    function W_(e, t, a) {
      var i = zc(a, t), l = BC(e, i, dt), d = us(e, l, dt), v = za();
      d !== null && (Yl(d, dt, v), ii(d, v));
    }
    function Cn(e, t, a) {
      if (aD(a), Ah(!1), e.tag === M) {
        W_(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === M) {
          W_(i, e, a);
          return;
        } else if (i.tag === k) {
          var l = i.type, d = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !I_(d)) {
            var v = zc(a, e), S = qS(i, v, dt), w = us(i, S, dt), x = za();
            w !== null && (Yl(w, dt, x), ii(w, x));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function hN(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = za();
      Mf(e, a), CN(e), La === e && Wl(_r, a) && (xr === wh || xr === Oy && Iv(_r) && er() - yE < N_ ? Fc(e, se) : Ny = xt(Ny, a)), ii(e, l);
    }
    function Y_(e, t) {
      t === In && (t = QD(e));
      var a = za(), i = ni(e, t);
      i !== null && (Yl(i, t, a), ii(i, a));
    }
    function vN(e) {
      var t = e.memoizedState, a = In;
      t !== null && (a = t.retryLane), Y_(e, a);
    }
    function mN(e, t) {
      var a = In, i;
      switch (e.tag) {
        case Ue:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case we:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Y_(e, a);
    }
    function yN(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ID(e / 1960) * 1960;
    }
    function gN() {
      if (kh > YD)
        throw kh = 0, bE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      kd > qD && (kd = 0, Ly = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function SN() {
      So.flushLegacyContextWarning(), So.flushPendingUnsafeLifecycleWarnings();
    }
    function q_(e, t) {
      kn(e), Fy(e, Ya, PD), t && Fy(e, zl, FD), Fy(e, Ya, UD), t && Fy(e, zl, jD), Sn();
    }
    function Fy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var d = i.subtreeFlags & t;
        i !== l && i.child !== null && d !== st ? i = i.child : ((i.flags & t) !== st && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var Hy = null;
    function Q_(e) {
      {
        if ((Ut & Qr) !== Cr || !(e.mode & at))
          return;
        var t = e.tag;
        if (t !== D && t !== M && t !== k && t !== A && t !== Be && t !== gt && t !== Z)
          return;
        var a = Et(e) || "ReactComponent";
        if (Hy !== null) {
          if (Hy.has(a))
            return;
          Hy.add(a);
        } else
          Hy = /* @__PURE__ */ new Set([a]);
        var i = Rn;
        try {
          kn(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? kn(e) : Sn();
        }
      }
    }
    var RE;
    {
      var EN = null;
      RE = function(e, t, a) {
        var i = nx(EN, t);
        try {
          return l_(e, t, a);
        } catch (d) {
          if (Mk() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Wm(), vC(), p_(e, t), nx(t, i), t.mode & Bt && $S(t), vi(null, l_, null, e, t, a), Pg()) {
            var l = uo();
            typeof l == "object" && l !== null && l._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var G_ = !1, kE;
    kE = /* @__PURE__ */ new Set();
    function bN(e) {
      if (ea && !hO())
        switch (e.tag) {
          case A:
          case Be:
          case Z: {
            var t = Qn && Et(Qn) || "Unknown", a = t;
            if (!kE.has(a)) {
              kE.add(a);
              var i = Et(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case k: {
            G_ || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), G_ = !0);
            break;
          }
        }
    }
    function Nh(e, t) {
      if (Na) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          zf(e, i, t);
        });
      }
    }
    var OE = {};
    function DE(e, t) {
      {
        var a = Ro.current;
        return a !== null ? (a.push(t), OE) : sp(e, t);
      }
    }
    function K_(e) {
      if (e !== OE)
        return pf(e);
    }
    function X_() {
      return Ro.current !== null;
    }
    function wN(e) {
      {
        if (e.mode & at) {
          if (!k_())
            return;
        } else if (!VD() || Ut !== Cr || e.tag !== A && e.tag !== Be && e.tag !== Z)
          return;
        if (Ro.current === null) {
          var t = Rn;
          try {
            kn(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Et(e));
          } finally {
            t ? kn(e) : Sn();
          }
        }
      }
    }
    function CN(e) {
      e.tag !== is && k_() && Ro.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ah(e) {
      L_ = e;
    }
    var Yi = null, Od = null, _N = function(e) {
      Yi = e;
    };
    function Dd(e) {
      {
        if (Yi === null)
          return e;
        var t = Yi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function NE(e) {
      return Dd(e);
    }
    function AE(e) {
      {
        if (Yi === null)
          return e;
        var t = Yi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Dd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: $e,
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
    function J_(e, t) {
      {
        if (Yi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, d = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case k: {
            typeof i == "function" && (l = !0);
            break;
          }
          case A: {
            (typeof i == "function" || d === ut) && (l = !0);
            break;
          }
          case Be: {
            (d === $e || d === ut) && (l = !0);
            break;
          }
          case gt:
          case Z: {
            (d === Tt || d === ut) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = Yi(a);
          if (v !== void 0 && v === Yi(i))
            return !0;
        }
        return !1;
      }
    }
    function Z_(e) {
      {
        if (Yi === null || typeof WeakSet != "function")
          return;
        Od === null && (Od = /* @__PURE__ */ new WeakSet()), Od.add(e);
      }
    }
    var xN = function(e, t) {
      {
        if (Yi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        su(), uu(function() {
          ME(e.current, i, a);
        });
      }
    }, TN = function(e, t) {
      {
        if (e.context !== gi)
          return;
        su(), uu(function() {
          Mh(t, e, null, null);
        });
      }
    };
    function ME(e, t, a) {
      {
        var i = e.alternate, l = e.child, d = e.sibling, v = e.tag, S = e.type, w = null;
        switch (v) {
          case A:
          case Z:
          case k:
            w = S;
            break;
          case Be:
            w = S.render;
            break;
        }
        if (Yi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, R = !1;
        if (w !== null) {
          var $ = Yi(w);
          $ !== void 0 && (a.has($) ? R = !0 : t.has($) && (v === k ? R = !0 : x = !0));
        }
        if (Od !== null && (Od.has(e) || i !== null && Od.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || x) {
          var F = ni(e, dt);
          F !== null && Tr(F, e, dt, yn);
        }
        l !== null && !R && ME(l, t, a), d !== null && ME(d, t, a);
      }
    }
    var RN = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return LE(e.current, i, a), a;
      }
    };
    function LE(e, t, a) {
      {
        var i = e.child, l = e.sibling, d = e.tag, v = e.type, S = null;
        switch (d) {
          case A:
          case Z:
          case k:
            S = v;
            break;
          case Be:
            S = v.render;
            break;
        }
        var w = !1;
        S !== null && t.has(S) && (w = !0), w ? kN(e, a) : i !== null && LE(i, t, a), l !== null && LE(l, t, a);
      }
    }
    function kN(e, t) {
      {
        var a = ON(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case B:
              t.add(i.stateNode);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
            case M:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ON(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === B)
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
    var zE;
    {
      zE = !1;
      try {
        var ex = Object.preventExtensions({});
      } catch {
        zE = !0;
      }
    }
    function DN(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = st, this.subtreeFlags = st, this.deletions = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !zE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Si = function(e, t, a, i) {
      return new DN(e, t, a, i);
    };
    function UE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function NN(e) {
      return typeof e == "function" && !UE(e) && e.defaultProps === void 0;
    }
    function AN(e) {
      if (typeof e == "function")
        return UE(e) ? k : A;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $e)
          return Be;
        if (t === Tt)
          return gt;
      }
      return D;
    }
    function $c(e, t) {
      var a = e.alternate;
      a === null ? (a = Si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = st, a.subtreeFlags = st, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & yr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case D:
        case A:
        case Z:
          a.type = Dd(e.type);
          break;
        case k:
          a.type = NE(e.type);
          break;
        case Be:
          a.type = AE(e.type);
          break;
      }
      return a;
    }
    function MN(e, t) {
      e.flags &= yr | cn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = se, e.lanes = t, e.child = null, e.subtreeFlags = st, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function LN(e, t, a) {
      var i;
      return e === jm ? (i = at, t === !0 && (i |= Un, i |= Qa)) : i = ct, Na && (i |= Bt), Si(M, null, null, i);
    }
    function jE(e, t, a, i, l, d) {
      var v = D, S = e;
      if (typeof e == "function")
        UE(e) ? (v = k, S = NE(S)) : S = Dd(S);
      else if (typeof e == "string")
        v = B;
      else
        e:
          switch (e) {
            case xa:
              return gs(a.children, l, d, t);
            case Gi:
              v = Le, l |= Un, (l & at) !== ct && (l |= Qa);
              break;
            case U:
              return zN(a, l, d, t);
            case Nt:
              return UN(a, l, d, t);
            case zt:
              return jN(a, l, d, t);
            case hn:
              return tx(a, l, d, t);
            case Nr:
            case Jn:
            case _i:
            case vn:
            case pn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case me:
                    v = ze;
                    break e;
                  case Me:
                    v = Ke;
                    break e;
                  case $e:
                    v = Be, S = AE(S);
                    break e;
                  case Tt:
                    v = gt;
                    break e;
                  case ut:
                    v = xe, S = null;
                    break e;
                }
              var w = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var x = i ? Et(i) : null;
                x && (w += `

Check the render method of \`` + x + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + w));
            }
          }
      var R = Si(v, a, t, l);
      return R.elementType = e, R.type = S, R.lanes = d, R._debugOwner = i, R;
    }
    function PE(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, d = e.key, v = e.props, S = jE(l, d, v, i, t, a);
      return S._debugSource = e._source, S._debugOwner = e._owner, S;
    }
    function gs(e, t, a, i) {
      var l = Si(fe, e, i, t);
      return l.lanes = a, l;
    }
    function zN(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = Si(ue, e, i, t | Bt);
      return l.elementType = U, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function UN(e, t, a, i) {
      var l = Si(Ue, e, i, t);
      return l.elementType = Nt, l.lanes = a, l;
    }
    function jN(e, t, a, i) {
      var l = Si(we, e, i, t);
      return l.elementType = zt, l.lanes = a, l;
    }
    function tx(e, t, a, i) {
      var l = Si(le, e, i, t);
      l.elementType = hn, l.lanes = a;
      var d = {
        isHidden: !1
      };
      return l.stateNode = d, l;
    }
    function FE(e, t, a) {
      var i = Si(X, e, null, t);
      return i.lanes = a, i;
    }
    function PN() {
      var e = Si(B, null, null, ct);
      return e.elementType = "DELETED", e;
    }
    function FN(e) {
      var t = Si(Te, null, null, ct);
      return t.stateNode = e, t;
    }
    function HE(e, t, a) {
      var i = e.children !== null ? e.children : [], l = Si(I, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function nx(e, t) {
      return e === null && (e = Si(D, null, null, ct)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function HN(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = b0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = In, this.eventTimes = dc(se), this.expirationTimes = dc(yn), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = dc(se), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], v = 0; v < Vn; v++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case jm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case is:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function rx(e, t, a, i, l, d, v, S, w, x) {
      var R = new HN(e, t, a, S, w), $ = LN(t, d);
      R.current = $, $.stateNode = R;
      {
        var F = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        $.memoizedState = F;
      }
      return Q0($), R;
    }
    var $E = "18.2.0";
    function $N(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return kr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Xr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var BE, VE;
    BE = !1, VE = {};
    function ax(e) {
      if (!e)
        return gi;
      var t = Di(e), a = _k(t);
      if (t.tag === k) {
        var i = t.type;
        if (ul(i))
          return Dw(t, i, a);
      }
      return a;
    }
    function BN(e, t) {
      {
        var a = Di(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = op(a);
        if (l === null)
          return null;
        if (l.mode & Un) {
          var d = Et(a) || "Component";
          if (!VE[d]) {
            VE[d] = !0;
            var v = Rn;
            try {
              kn(l), a.mode & Un ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              v ? kn(v) : Sn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function ix(e, t, a, i, l, d, v, S) {
      var w = !1, x = null;
      return rx(e, t, w, x, a, i, l, d, v);
    }
    function ox(e, t, a, i, l, d, v, S, w, x) {
      var R = !0, $ = rx(a, i, R, e, l, d, v, S, w);
      $.context = ax(null);
      var F = $.current, K = za(), J = ms(F), ie = au(K, J);
      return ie.callback = t ?? null, us(F, ie, J), GD($, J, K), $;
    }
    function Mh(e, t, a, i) {
      co(t, e);
      var l = t.current, d = za(), v = ms(l);
      vp(v);
      var S = ax(a);
      t.context === null ? t.context = S : t.pendingContext = S, ea && Rn !== null && !BE && (BE = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Et(Rn) || "Unknown"));
      var w = au(d, v);
      w.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), w.callback = i);
      var x = us(l, w, v);
      return x !== null && (Tr(x, l, v, d), Km(x, l, v)), v;
    }
    function $y(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case B:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function VN(e) {
      switch (e.tag) {
        case M: {
          var t = e.stateNode;
          if (Uf(t)) {
            var a = Bg(t);
            ZD(t, a);
          }
          break;
        }
        case Ue: {
          uu(function() {
            var l = ni(e, dt);
            if (l !== null) {
              var d = za();
              Tr(l, e, dt, d);
            }
          });
          var i = dt;
          IE(e, i);
          break;
        }
      }
    }
    function lx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Gv(a.retryLane, t));
    }
    function IE(e, t) {
      lx(e, t);
      var a = e.alternate;
      a && lx(a, t);
    }
    function IN(e) {
      if (e.tag === Ue) {
        var t = Il, a = ni(e, t);
        if (a !== null) {
          var i = za();
          Tr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function WN(e) {
      if (e.tag === Ue) {
        var t = ms(e), a = ni(e, t);
        if (a !== null) {
          var i = za();
          Tr(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function ux(e) {
      var t = up(e);
      return t === null ? null : t.stateNode;
    }
    var sx = function(e) {
      return null;
    };
    function YN(e) {
      return sx(e);
    }
    var cx = function(e) {
      return !1;
    };
    function qN(e) {
      return cx(e);
    }
    var fx = null, dx = null, px = null, hx = null, vx = null, mx = null, yx = null, gx = null, Sx = null;
    {
      var Ex = function(e, t, a) {
        var i = t[a], l = Ht(e) ? e.slice() : Ot({}, e);
        return a + 1 === t.length ? (Ht(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = Ex(e[i], t, a + 1), l);
      }, bx = function(e, t) {
        return Ex(e, t, 0);
      }, wx = function(e, t, a, i) {
        var l = t[i], d = Ht(e) ? e.slice() : Ot({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          d[v] = d[l], Ht(d) ? d.splice(l, 1) : delete d[l];
        } else
          d[l] = wx(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return d;
      }, Cx = function(e, t, a) {
        if (t.length !== a.length) {
          E("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              E("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return wx(e, t, a, 0);
      }, _x = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], d = Ht(e) ? e.slice() : Ot({}, e);
        return d[l] = _x(e[l], t, a + 1, i), d;
      }, xx = function(e, t, a) {
        return _x(e, t, 0, a);
      }, WE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      fx = function(e, t, a, i) {
        var l = WE(e, t);
        if (l !== null) {
          var d = xx(l.memoizedState, a, i);
          l.memoizedState = d, l.baseState = d, e.memoizedProps = Ot({}, e.memoizedProps);
          var v = ni(e, dt);
          v !== null && Tr(v, e, dt, yn);
        }
      }, dx = function(e, t, a) {
        var i = WE(e, t);
        if (i !== null) {
          var l = bx(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Ot({}, e.memoizedProps);
          var d = ni(e, dt);
          d !== null && Tr(d, e, dt, yn);
        }
      }, px = function(e, t, a, i) {
        var l = WE(e, t);
        if (l !== null) {
          var d = Cx(l.memoizedState, a, i);
          l.memoizedState = d, l.baseState = d, e.memoizedProps = Ot({}, e.memoizedProps);
          var v = ni(e, dt);
          v !== null && Tr(v, e, dt, yn);
        }
      }, hx = function(e, t, a) {
        e.pendingProps = xx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ni(e, dt);
        i !== null && Tr(i, e, dt, yn);
      }, vx = function(e, t) {
        e.pendingProps = bx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ni(e, dt);
        a !== null && Tr(a, e, dt, yn);
      }, mx = function(e, t, a) {
        e.pendingProps = Cx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ni(e, dt);
        i !== null && Tr(i, e, dt, yn);
      }, yx = function(e) {
        var t = ni(e, dt);
        t !== null && Tr(t, e, dt, yn);
      }, gx = function(e) {
        sx = e;
      }, Sx = function(e) {
        cx = e;
      };
    }
    function QN(e) {
      var t = op(e);
      return t === null ? null : t.stateNode;
    }
    function GN(e) {
      return null;
    }
    function KN() {
      return Rn;
    }
    function XN(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
      return Lv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: fx,
        overrideHookStateDeletePath: dx,
        overrideHookStateRenamePath: px,
        overrideProps: hx,
        overridePropsDeletePath: vx,
        overridePropsRenamePath: mx,
        setErrorHandler: gx,
        setSuspenseHandler: Sx,
        scheduleUpdate: yx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: QN,
        findFiberByHostInstance: t || GN,
        // React Refresh
        findHostInstancesForRefresh: RN,
        scheduleRefresh: xN,
        scheduleRoot: TN,
        setRefreshHandler: _N,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: KN,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: $E
      });
    }
    var Tx = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function YE(e) {
      this._internalRoot = e;
    }
    By.prototype.render = YE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Vy(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== zn) {
          var i = ux(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Mh(e, t, null, null);
    }, By.prototype.unmount = YE.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        P_() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), uu(function() {
          Mh(null, e, null, null);
        }), xw(t);
      }
    };
    function JN(e, t) {
      if (!Vy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Rx(e);
      var a = !1, i = !1, l = "", d = Tx;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Kr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = ix(e, jm, null, a, i, l, d);
      Dm(v.current, e);
      var S = e.nodeType === zn ? e.parentNode : e;
      return $p(S), new YE(v);
    }
    function By(e) {
      this._internalRoot = e;
    }
    function ZN(e) {
      e && Qg(e);
    }
    By.prototype.unstable_scheduleHydration = ZN;
    function eA(e, t, a) {
      if (!Vy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Rx(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, d = !1, v = !1, S = "", w = Tx;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (S = a.identifierPrefix), a.onRecoverableError !== void 0 && (w = a.onRecoverableError));
      var x = ox(t, null, e, jm, i, d, v, S, w);
      if (Dm(x.current, e), $p(e), l)
        for (var R = 0; R < l.length; R++) {
          var $ = l[R];
          uO(x, $);
        }
      return new By(x);
    }
    function Vy(e) {
      return !!(e && (e.nodeType === na || e.nodeType === Ta || e.nodeType === Vd || !be));
    }
    function Lh(e) {
      return !!(e && (e.nodeType === na || e.nodeType === Ta || e.nodeType === Vd || e.nodeType === zn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Rx(e) {
      e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Jp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var tA = p.ReactCurrentOwner, kx;
    kx = function(e) {
      if (e._reactRootContainer && e.nodeType !== zn) {
        var t = ux(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = qE(e), l = !!(i && rs(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function qE(e) {
      return e ? e.nodeType === Ta ? e.documentElement : e.firstChild : null;
    }
    function Ox() {
    }
    function nA(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var d = i;
          i = function() {
            var F = $y(v);
            d.call(F);
          };
        }
        var v = ox(
          t,
          i,
          e,
          is,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Ox
        );
        e._reactRootContainer = v, Dm(v.current, e);
        var S = e.nodeType === zn ? e.parentNode : e;
        return $p(S), uu(), v;
      } else {
        for (var w; w = e.lastChild; )
          e.removeChild(w);
        if (typeof i == "function") {
          var x = i;
          i = function() {
            var F = $y(R);
            x.call(F);
          };
        }
        var R = ix(
          e,
          is,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Ox
        );
        e._reactRootContainer = R, Dm(R.current, e);
        var $ = e.nodeType === zn ? e.parentNode : e;
        return $p($), uu(function() {
          Mh(t, R, a, i);
        }), R;
      }
    }
    function rA(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Iy(e, t, a, i, l) {
      kx(a), rA(l === void 0 ? null : l, "render");
      var d = a._reactRootContainer, v;
      if (!d)
        v = nA(a, t, e, l, i);
      else {
        if (v = d, typeof l == "function") {
          var S = l;
          l = function() {
            var w = $y(v);
            S.call(w);
          };
        }
        Mh(t, v, e, l);
      }
      return $y(v);
    }
    function aA(e) {
      {
        var t = tA.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === na ? e : BN(e, "findDOMNode");
    }
    function iA(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Jp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Iy(null, e, t, !0, a);
    }
    function oA(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Jp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Iy(null, e, t, !1, a);
    }
    function lA(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ru(e))
        throw new Error("parentComponent must be a valid React Component");
      return Iy(e, t, a, !1, i);
    }
    function uA(e) {
      if (!Lh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Jp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = qE(e), i = a && !rs(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return uu(function() {
          Iy(null, null, e, !1, function() {
            e._reactRootContainer = null, xw(e);
          });
        }), !0;
      } else {
        {
          var l = qE(e), d = !!(l && rs(l)), v = e.nodeType === na && Lh(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Vu(VN), Yg(IN), Pf(WN), Jv(Ka), Zv(Lr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xd(fR), lf(_E, eN, uu);
    function sA(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vy(t))
        throw new Error("Target container is not a DOM element.");
      return $N(e, t, null, a);
    }
    function cA(e, t, a, i) {
      return lA(e, t, a, i);
    }
    var QE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [rs, ld, Nm, Tu, Al, _E]
    };
    function fA(e, t) {
      return QE.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), JN(e, t);
    }
    function dA(e, t, a) {
      return QE.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), eA(e, t, a);
    }
    function pA(e) {
      return P_() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), uu(e);
    }
    var hA = XN({
      findFiberByHostInstance: Tc,
      bundleType: 1,
      version: $E,
      rendererPackageName: "react-dom"
    });
    if (!hA && $t && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Dx = window.location.protocol;
      /^(https?|file):$/.test(Dx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Dx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QE, li.createPortal = sA, li.createRoot = fA, li.findDOMNode = aA, li.flushSync = pA, li.hydrate = iA, li.hydrateRoot = dA, li.render = oA, li.unmountComponentAtNode = uA, li.unstable_batchedUpdates = _E, li.unstable_renderSubtreeIntoContainer = cA, li.version = $E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), li;
}
var R1 = {};
function k1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (R1.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k1);
    } catch (s) {
      console.error(s);
    }
  }
}
R1.NODE_ENV === "production" ? (k1(), hb.exports = OA()) : hb.exports = DA();
var O1 = hb.exports, NA = {}, Ph = O1;
if (NA.NODE_ENV === "production")
  Vh.createRoot = Ph.createRoot, Vh.hydrateRoot = Ph.hydrateRoot;
else {
  var qy = Ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Vh.createRoot = function(s, u) {
    qy.usingClientEntryPoint = !0;
    try {
      return Ph.createRoot(s, u);
    } finally {
      qy.usingClientEntryPoint = !1;
    }
  }, Vh.hydrateRoot = function(s, u, f) {
    qy.usingClientEntryPoint = !0;
    try {
      return Ph.hydrateRoot(s, u, f);
    } finally {
      qy.usingClientEntryPoint = !1;
    }
  };
}
function AA({ tabs: s }) {
  const [u, f] = Ct.useState(0), p = (b) => {
    f(b);
  }, g = (b) => {
    b.key === "ArrowRight" ? f((E) => (E + 1) % s.length) : b.key === "ArrowLeft" && f((E) => (E - 1 + s.length) % s.length);
  };
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsx("div", { className: "nav-tab-wrapper", role: "tablist", children: s.map((b, E) => /* @__PURE__ */ V.jsx(
      "button",
      {
        className: u === E ? "nav-tab nav-tab-active" : "nav-tab",
        role: "tab",
        "aria-selected": u === E,
        "aria-controls": `tabpanel-${E}`,
        id: `tab-${E}`,
        tabIndex: u === E ? 0 : -1,
        onClick: () => p(E),
        onKeyDown: g,
        children: b.title
      },
      E
    )) }),
    s.map((b, E) => {
      const y = b.content;
      return /* @__PURE__ */ V.jsxs(
        "div",
        {
          className: "tabs-content",
          role: "tabpanel",
          id: `tabpanel-${E}`,
          "aria-labelledby": `tab-${E}`,
          hidden: u !== E,
          tabIndex: 0,
          children: [
            /* @__PURE__ */ V.jsx(y, {}),
            " "
          ]
        },
        E
      );
    })
  ] });
}
function D1(s, u) {
  return function() {
    return s.apply(u, arguments);
  };
}
const { toString: MA } = Object.prototype, { getPrototypeOf: Mb } = Object, mg = /* @__PURE__ */ ((s) => (u) => {
  const f = MA.call(u);
  return s[f] || (s[f] = f.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), El = (s) => (s = s.toLowerCase(), (u) => mg(u) === s), yg = (s) => (u) => typeof u === s, { isArray: zd } = Array, Yh = yg("undefined");
function LA(s) {
  return s !== null && !Yh(s) && s.constructor !== null && !Yh(s.constructor) && qi(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const N1 = El("ArrayBuffer");
function zA(s) {
  let u;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? u = ArrayBuffer.isView(s) : u = s && s.buffer && N1(s.buffer), u;
}
const UA = yg("string"), qi = yg("function"), A1 = yg("number"), gg = (s) => s !== null && typeof s == "object", jA = (s) => s === !0 || s === !1, eg = (s) => {
  if (mg(s) !== "object")
    return !1;
  const u = Mb(s);
  return (u === null || u === Object.prototype || Object.getPrototypeOf(u) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, PA = El("Date"), FA = El("File"), HA = El("Blob"), $A = El("FileList"), BA = (s) => gg(s) && qi(s.pipe), VA = (s) => {
  let u;
  return s && (typeof FormData == "function" && s instanceof FormData || qi(s.append) && ((u = mg(s)) === "formdata" || // detect form-data instance
  u === "object" && qi(s.toString) && s.toString() === "[object FormData]"));
}, IA = El("URLSearchParams"), WA = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Kh(s, u, { allOwnKeys: f = !1 } = {}) {
  if (s === null || typeof s > "u")
    return;
  let p, g;
  if (typeof s != "object" && (s = [s]), zd(s))
    for (p = 0, g = s.length; p < g; p++)
      u.call(null, s[p], p, s);
  else {
    const b = f ? Object.getOwnPropertyNames(s) : Object.keys(s), E = b.length;
    let y;
    for (p = 0; p < E; p++)
      y = b[p], u.call(null, s[y], y, s);
  }
}
function M1(s, u) {
  u = u.toLowerCase();
  const f = Object.keys(s);
  let p = f.length, g;
  for (; p-- > 0; )
    if (g = f[p], u === g.toLowerCase())
      return g;
  return null;
}
const L1 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, z1 = (s) => !Yh(s) && s !== L1;
function vb() {
  const { caseless: s } = z1(this) && this || {}, u = {}, f = (p, g) => {
    const b = s && M1(u, g) || g;
    eg(u[b]) && eg(p) ? u[b] = vb(u[b], p) : eg(p) ? u[b] = vb({}, p) : zd(p) ? u[b] = p.slice() : u[b] = p;
  };
  for (let p = 0, g = arguments.length; p < g; p++)
    arguments[p] && Kh(arguments[p], f);
  return u;
}
const YA = (s, u, f, { allOwnKeys: p } = {}) => (Kh(u, (g, b) => {
  f && qi(g) ? s[b] = D1(g, f) : s[b] = g;
}, { allOwnKeys: p }), s), qA = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), QA = (s, u, f, p) => {
  s.prototype = Object.create(u.prototype, p), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: u.prototype
  }), f && Object.assign(s.prototype, f);
}, GA = (s, u, f, p) => {
  let g, b, E;
  const y = {};
  if (u = u || {}, s == null)
    return u;
  do {
    for (g = Object.getOwnPropertyNames(s), b = g.length; b-- > 0; )
      E = g[b], (!p || p(E, s, u)) && !y[E] && (u[E] = s[E], y[E] = !0);
    s = f !== !1 && Mb(s);
  } while (s && (!f || f(s, u)) && s !== Object.prototype);
  return u;
}, KA = (s, u, f) => {
  s = String(s), (f === void 0 || f > s.length) && (f = s.length), f -= u.length;
  const p = s.indexOf(u, f);
  return p !== -1 && p === f;
}, XA = (s) => {
  if (!s)
    return null;
  if (zd(s))
    return s;
  let u = s.length;
  if (!A1(u))
    return null;
  const f = new Array(u);
  for (; u-- > 0; )
    f[u] = s[u];
  return f;
}, JA = /* @__PURE__ */ ((s) => (u) => s && u instanceof s)(typeof Uint8Array < "u" && Mb(Uint8Array)), ZA = (s, u) => {
  const p = (s && s[Symbol.iterator]).call(s);
  let g;
  for (; (g = p.next()) && !g.done; ) {
    const b = g.value;
    u.call(s, b[0], b[1]);
  }
}, eM = (s, u) => {
  let f;
  const p = [];
  for (; (f = s.exec(u)) !== null; )
    p.push(f);
  return p;
}, tM = El("HTMLFormElement"), nM = (s) => s.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(f, p, g) {
    return p.toUpperCase() + g;
  }
), Hx = (({ hasOwnProperty: s }) => (u, f) => s.call(u, f))(Object.prototype), rM = El("RegExp"), U1 = (s, u) => {
  const f = Object.getOwnPropertyDescriptors(s), p = {};
  Kh(f, (g, b) => {
    let E;
    (E = u(g, b, s)) !== !1 && (p[b] = E || g);
  }), Object.defineProperties(s, p);
}, aM = (s) => {
  U1(s, (u, f) => {
    if (qi(s) && ["arguments", "caller", "callee"].indexOf(f) !== -1)
      return !1;
    const p = s[f];
    if (qi(p)) {
      if (u.enumerable = !1, "writable" in u) {
        u.writable = !1;
        return;
      }
      u.set || (u.set = () => {
        throw Error("Can not rewrite read-only method '" + f + "'");
      });
    }
  });
}, iM = (s, u) => {
  const f = {}, p = (g) => {
    g.forEach((b) => {
      f[b] = !0;
    });
  };
  return zd(s) ? p(s) : p(String(s).split(u)), f;
}, oM = () => {
}, lM = (s, u) => (s = +s, Number.isFinite(s) ? s : u), JE = "abcdefghijklmnopqrstuvwxyz", $x = "0123456789", j1 = {
  DIGIT: $x,
  ALPHA: JE,
  ALPHA_DIGIT: JE + JE.toUpperCase() + $x
}, uM = (s = 16, u = j1.ALPHA_DIGIT) => {
  let f = "";
  const { length: p } = u;
  for (; s--; )
    f += u[Math.random() * p | 0];
  return f;
};
function sM(s) {
  return !!(s && qi(s.append) && s[Symbol.toStringTag] === "FormData" && s[Symbol.iterator]);
}
const cM = (s) => {
  const u = new Array(10), f = (p, g) => {
    if (gg(p)) {
      if (u.indexOf(p) >= 0)
        return;
      if (!("toJSON" in p)) {
        u[g] = p;
        const b = zd(p) ? [] : {};
        return Kh(p, (E, y) => {
          const T = f(E, g + 1);
          !Yh(T) && (b[y] = T);
        }), u[g] = void 0, b;
      }
    }
    return p;
  };
  return f(s, 0);
}, fM = El("AsyncFunction"), dM = (s) => s && (gg(s) || qi(s)) && qi(s.then) && qi(s.catch), de = {
  isArray: zd,
  isArrayBuffer: N1,
  isBuffer: LA,
  isFormData: VA,
  isArrayBufferView: zA,
  isString: UA,
  isNumber: A1,
  isBoolean: jA,
  isObject: gg,
  isPlainObject: eg,
  isUndefined: Yh,
  isDate: PA,
  isFile: FA,
  isBlob: HA,
  isRegExp: rM,
  isFunction: qi,
  isStream: BA,
  isURLSearchParams: IA,
  isTypedArray: JA,
  isFileList: $A,
  forEach: Kh,
  merge: vb,
  extend: YA,
  trim: WA,
  stripBOM: qA,
  inherits: QA,
  toFlatObject: GA,
  kindOf: mg,
  kindOfTest: El,
  endsWith: KA,
  toArray: XA,
  forEachEntry: ZA,
  matchAll: eM,
  isHTMLForm: tM,
  hasOwnProperty: Hx,
  hasOwnProp: Hx,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: U1,
  freezeMethods: aM,
  toObjectSet: iM,
  toCamelCase: nM,
  noop: oM,
  toFiniteNumber: lM,
  findKey: M1,
  global: L1,
  isContextDefined: z1,
  ALPHABET: j1,
  generateString: uM,
  isSpecCompliantForm: sM,
  toJSONObject: cM,
  isAsyncFn: fM,
  isThenable: dM
};
function Qt(s, u, f, p, g) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = s, this.name = "AxiosError", u && (this.code = u), f && (this.config = f), p && (this.request = p), g && (this.response = g);
}
de.inherits(Qt, Error, {
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
      config: de.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const P1 = Qt.prototype, F1 = {};
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
].forEach((s) => {
  F1[s] = { value: s };
});
Object.defineProperties(Qt, F1);
Object.defineProperty(P1, "isAxiosError", { value: !0 });
Qt.from = (s, u, f, p, g, b) => {
  const E = Object.create(P1);
  return de.toFlatObject(s, E, function(T) {
    return T !== Error.prototype;
  }, (y) => y !== "isAxiosError"), Qt.call(E, s.message, u, f, p, g), E.cause = s, E.name = s.name, b && Object.assign(E, b), E;
};
const pM = null;
function mb(s) {
  return de.isPlainObject(s) || de.isArray(s);
}
function H1(s) {
  return de.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function Bx(s, u, f) {
  return s ? s.concat(u).map(function(g, b) {
    return g = H1(g), !f && b ? "[" + g + "]" : g;
  }).join(f ? "." : "") : u;
}
function hM(s) {
  return de.isArray(s) && !s.some(mb);
}
const vM = de.toFlatObject(de, {}, null, function(u) {
  return /^is[A-Z]/.test(u);
});
function Sg(s, u, f) {
  if (!de.isObject(s))
    throw new TypeError("target must be an object");
  u = u || new FormData(), f = de.toFlatObject(f, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(X, fe) {
    return !de.isUndefined(fe[X]);
  });
  const p = f.metaTokens, g = f.visitor || k, b = f.dots, E = f.indexes, T = (f.Blob || typeof Blob < "u" && Blob) && de.isSpecCompliantForm(u);
  if (!de.isFunction(g))
    throw new TypeError("visitor must be a function");
  function A(B) {
    if (B === null)
      return "";
    if (de.isDate(B))
      return B.toISOString();
    if (!T && de.isBlob(B))
      throw new Qt("Blob is not supported. Use a Buffer instead.");
    return de.isArrayBuffer(B) || de.isTypedArray(B) ? T && typeof Blob == "function" ? new Blob([B]) : Buffer.from(B) : B;
  }
  function k(B, X, fe) {
    let Le = B;
    if (B && !fe && typeof B == "object") {
      if (de.endsWith(X, "{}"))
        X = p ? X : X.slice(0, -2), B = JSON.stringify(B);
      else if (de.isArray(B) && hM(B) || (de.isFileList(B) || de.endsWith(X, "[]")) && (Le = de.toArray(B)))
        return X = H1(X), Le.forEach(function(ze, Be) {
          !(de.isUndefined(ze) || ze === null) && u.append(
            // eslint-disable-next-line no-nested-ternary
            E === !0 ? Bx([X], Be, b) : E === null ? X : X + "[]",
            A(ze)
          );
        }), !1;
    }
    return mb(B) ? !0 : (u.append(Bx(fe, X, b), A(B)), !1);
  }
  const D = [], M = Object.assign(vM, {
    defaultVisitor: k,
    convertValue: A,
    isVisitable: mb
  });
  function I(B, X) {
    if (!de.isUndefined(B)) {
      if (D.indexOf(B) !== -1)
        throw Error("Circular reference detected in " + X.join("."));
      D.push(B), de.forEach(B, function(Le, Ke) {
        (!(de.isUndefined(Le) || Le === null) && g.call(
          u,
          Le,
          de.isString(Ke) ? Ke.trim() : Ke,
          X,
          M
        )) === !0 && I(Le, X ? X.concat(Ke) : [Ke]);
      }), D.pop();
    }
  }
  if (!de.isObject(s))
    throw new TypeError("data must be an object");
  return I(s), u;
}
function Vx(s) {
  const u = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g, function(p) {
    return u[p];
  });
}
function Lb(s, u) {
  this._pairs = [], s && Sg(s, this, u);
}
const $1 = Lb.prototype;
$1.append = function(u, f) {
  this._pairs.push([u, f]);
};
$1.toString = function(u) {
  const f = u ? function(p) {
    return u.call(this, p, Vx);
  } : Vx;
  return this._pairs.map(function(g) {
    return f(g[0]) + "=" + f(g[1]);
  }, "").join("&");
};
function mM(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function B1(s, u, f) {
  if (!u)
    return s;
  const p = f && f.encode || mM, g = f && f.serialize;
  let b;
  if (g ? b = g(u, f) : b = de.isURLSearchParams(u) ? u.toString() : new Lb(u, f).toString(p), b) {
    const E = s.indexOf("#");
    E !== -1 && (s = s.slice(0, E)), s += (s.indexOf("?") === -1 ? "?" : "&") + b;
  }
  return s;
}
class Ix {
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
    de.forEach(this.handlers, function(p) {
      p !== null && u(p);
    });
  }
}
const V1 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, yM = typeof URLSearchParams < "u" ? URLSearchParams : Lb, gM = typeof FormData < "u" ? FormData : null, SM = typeof Blob < "u" ? Blob : null, EM = {
  isBrowser: !0,
  classes: {
    URLSearchParams: yM,
    FormData: gM,
    Blob: SM
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, I1 = typeof window < "u" && typeof document < "u", bM = ((s) => I1 && ["ReactNative", "NativeScript", "NS"].indexOf(s) < 0)(typeof navigator < "u" && navigator.product), wM = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", CM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: I1,
  hasStandardBrowserEnv: bM,
  hasStandardBrowserWebWorkerEnv: wM
}, Symbol.toStringTag, { value: "Module" })), yl = {
  ...CM,
  ...EM
};
function _M(s, u) {
  return Sg(s, new yl.classes.URLSearchParams(), Object.assign({
    visitor: function(f, p, g, b) {
      return yl.isNode && de.isBuffer(f) ? (this.append(p, f.toString("base64")), !1) : b.defaultVisitor.apply(this, arguments);
    }
  }, u));
}
function xM(s) {
  return de.matchAll(/\w+|\[(\w*)]/g, s).map((u) => u[0] === "[]" ? "" : u[1] || u[0]);
}
function TM(s) {
  const u = {}, f = Object.keys(s);
  let p;
  const g = f.length;
  let b;
  for (p = 0; p < g; p++)
    b = f[p], u[b] = s[b];
  return u;
}
function W1(s) {
  function u(f, p, g, b) {
    let E = f[b++];
    if (E === "__proto__")
      return !0;
    const y = Number.isFinite(+E), T = b >= f.length;
    return E = !E && de.isArray(g) ? g.length : E, T ? (de.hasOwnProp(g, E) ? g[E] = [g[E], p] : g[E] = p, !y) : ((!g[E] || !de.isObject(g[E])) && (g[E] = []), u(f, p, g[E], b) && de.isArray(g[E]) && (g[E] = TM(g[E])), !y);
  }
  if (de.isFormData(s) && de.isFunction(s.entries)) {
    const f = {};
    return de.forEachEntry(s, (p, g) => {
      u(xM(p), g, f, 0);
    }), f;
  }
  return null;
}
function RM(s, u, f) {
  if (de.isString(s))
    try {
      return (u || JSON.parse)(s), de.trim(s);
    } catch (p) {
      if (p.name !== "SyntaxError")
        throw p;
    }
  return (f || JSON.stringify)(s);
}
const zb = {
  transitional: V1,
  adapter: ["xhr", "http"],
  transformRequest: [function(u, f) {
    const p = f.getContentType() || "", g = p.indexOf("application/json") > -1, b = de.isObject(u);
    if (b && de.isHTMLForm(u) && (u = new FormData(u)), de.isFormData(u))
      return g ? JSON.stringify(W1(u)) : u;
    if (de.isArrayBuffer(u) || de.isBuffer(u) || de.isStream(u) || de.isFile(u) || de.isBlob(u))
      return u;
    if (de.isArrayBufferView(u))
      return u.buffer;
    if (de.isURLSearchParams(u))
      return f.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), u.toString();
    let y;
    if (b) {
      if (p.indexOf("application/x-www-form-urlencoded") > -1)
        return _M(u, this.formSerializer).toString();
      if ((y = de.isFileList(u)) || p.indexOf("multipart/form-data") > -1) {
        const T = this.env && this.env.FormData;
        return Sg(
          y ? { "files[]": u } : u,
          T && new T(),
          this.formSerializer
        );
      }
    }
    return b || g ? (f.setContentType("application/json", !1), RM(u)) : u;
  }],
  transformResponse: [function(u) {
    const f = this.transitional || zb.transitional, p = f && f.forcedJSONParsing, g = this.responseType === "json";
    if (u && de.isString(u) && (p && !this.responseType || g)) {
      const E = !(f && f.silentJSONParsing) && g;
      try {
        return JSON.parse(u);
      } catch (y) {
        if (E)
          throw y.name === "SyntaxError" ? Qt.from(y, Qt.ERR_BAD_RESPONSE, this, null, this.response) : y;
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
    FormData: yl.classes.FormData,
    Blob: yl.classes.Blob
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
de.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  zb.headers[s] = {};
});
const Ub = zb, kM = de.toObjectSet([
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
]), OM = (s) => {
  const u = {};
  let f, p, g;
  return s && s.split(`
`).forEach(function(E) {
    g = E.indexOf(":"), f = E.substring(0, g).trim().toLowerCase(), p = E.substring(g + 1).trim(), !(!f || u[f] && kM[f]) && (f === "set-cookie" ? u[f] ? u[f].push(p) : u[f] = [p] : u[f] = u[f] ? u[f] + ", " + p : p);
  }), u;
}, Wx = Symbol("internals");
function Fh(s) {
  return s && String(s).trim().toLowerCase();
}
function tg(s) {
  return s === !1 || s == null ? s : de.isArray(s) ? s.map(tg) : String(s);
}
function DM(s) {
  const u = /* @__PURE__ */ Object.create(null), f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let p;
  for (; p = f.exec(s); )
    u[p[1]] = p[2];
  return u;
}
const NM = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function ZE(s, u, f, p, g) {
  if (de.isFunction(p))
    return p.call(this, u, f);
  if (g && (u = f), !!de.isString(u)) {
    if (de.isString(p))
      return u.indexOf(p) !== -1;
    if (de.isRegExp(p))
      return p.test(u);
  }
}
function AM(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (u, f, p) => f.toUpperCase() + p);
}
function MM(s, u) {
  const f = de.toCamelCase(" " + u);
  ["get", "set", "has"].forEach((p) => {
    Object.defineProperty(s, p + f, {
      value: function(g, b, E) {
        return this[p].call(this, u, g, b, E);
      },
      configurable: !0
    });
  });
}
class Eg {
  constructor(u) {
    u && this.set(u);
  }
  set(u, f, p) {
    const g = this;
    function b(y, T, A) {
      const k = Fh(T);
      if (!k)
        throw new Error("header name must be a non-empty string");
      const D = de.findKey(g, k);
      (!D || g[D] === void 0 || A === !0 || A === void 0 && g[D] !== !1) && (g[D || T] = tg(y));
    }
    const E = (y, T) => de.forEach(y, (A, k) => b(A, k, T));
    return de.isPlainObject(u) || u instanceof this.constructor ? E(u, f) : de.isString(u) && (u = u.trim()) && !NM(u) ? E(OM(u), f) : u != null && b(f, u, p), this;
  }
  get(u, f) {
    if (u = Fh(u), u) {
      const p = de.findKey(this, u);
      if (p) {
        const g = this[p];
        if (!f)
          return g;
        if (f === !0)
          return DM(g);
        if (de.isFunction(f))
          return f.call(this, g, p);
        if (de.isRegExp(f))
          return f.exec(g);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(u, f) {
    if (u = Fh(u), u) {
      const p = de.findKey(this, u);
      return !!(p && this[p] !== void 0 && (!f || ZE(this, this[p], p, f)));
    }
    return !1;
  }
  delete(u, f) {
    const p = this;
    let g = !1;
    function b(E) {
      if (E = Fh(E), E) {
        const y = de.findKey(p, E);
        y && (!f || ZE(p, p[y], y, f)) && (delete p[y], g = !0);
      }
    }
    return de.isArray(u) ? u.forEach(b) : b(u), g;
  }
  clear(u) {
    const f = Object.keys(this);
    let p = f.length, g = !1;
    for (; p--; ) {
      const b = f[p];
      (!u || ZE(this, this[b], b, u, !0)) && (delete this[b], g = !0);
    }
    return g;
  }
  normalize(u) {
    const f = this, p = {};
    return de.forEach(this, (g, b) => {
      const E = de.findKey(p, b);
      if (E) {
        f[E] = tg(g), delete f[b];
        return;
      }
      const y = u ? AM(b) : String(b).trim();
      y !== b && delete f[b], f[y] = tg(g), p[y] = !0;
    }), this;
  }
  concat(...u) {
    return this.constructor.concat(this, ...u);
  }
  toJSON(u) {
    const f = /* @__PURE__ */ Object.create(null);
    return de.forEach(this, (p, g) => {
      p != null && p !== !1 && (f[g] = u && de.isArray(p) ? p.join(", ") : p);
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
    return f.forEach((g) => p.set(g)), p;
  }
  static accessor(u) {
    const p = (this[Wx] = this[Wx] = {
      accessors: {}
    }).accessors, g = this.prototype;
    function b(E) {
      const y = Fh(E);
      p[y] || (MM(g, E), p[y] = !0);
    }
    return de.isArray(u) ? u.forEach(b) : b(u), this;
  }
}
Eg.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
de.reduceDescriptors(Eg.prototype, ({ value: s }, u) => {
  let f = u[0].toUpperCase() + u.slice(1);
  return {
    get: () => s,
    set(p) {
      this[f] = p;
    }
  };
});
de.freezeMethods(Eg);
const du = Eg;
function eb(s, u) {
  const f = this || Ub, p = u || f, g = du.from(p.headers);
  let b = p.data;
  return de.forEach(s, function(y) {
    b = y.call(f, b, g.normalize(), u ? u.status : void 0);
  }), g.normalize(), b;
}
function Y1(s) {
  return !!(s && s.__CANCEL__);
}
function Xh(s, u, f) {
  Qt.call(this, s ?? "canceled", Qt.ERR_CANCELED, u, f), this.name = "CanceledError";
}
de.inherits(Xh, Qt, {
  __CANCEL__: !0
});
function LM(s, u, f) {
  const p = f.config.validateStatus;
  !f.status || !p || p(f.status) ? s(f) : u(new Qt(
    "Request failed with status code " + f.status,
    [Qt.ERR_BAD_REQUEST, Qt.ERR_BAD_RESPONSE][Math.floor(f.status / 100) - 4],
    f.config,
    f.request,
    f
  ));
}
const zM = yl.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(s, u, f, p, g, b) {
      const E = [s + "=" + encodeURIComponent(u)];
      de.isNumber(f) && E.push("expires=" + new Date(f).toGMTString()), de.isString(p) && E.push("path=" + p), de.isString(g) && E.push("domain=" + g), b === !0 && E.push("secure"), document.cookie = E.join("; ");
    },
    read(s) {
      const u = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
      return u ? decodeURIComponent(u[3]) : null;
    },
    remove(s) {
      this.write(s, "", Date.now() - 864e5);
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
function UM(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function jM(s, u) {
  return u ? s.replace(/\/?\/$/, "") + "/" + u.replace(/^\/+/, "") : s;
}
function q1(s, u) {
  return s && !UM(u) ? jM(s, u) : u;
}
const PM = yl.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const u = /(msie|trident)/i.test(navigator.userAgent), f = document.createElement("a");
    let p;
    function g(b) {
      let E = b;
      return u && (f.setAttribute("href", E), E = f.href), f.setAttribute("href", E), {
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
    return p = g(window.location.href), function(E) {
      const y = de.isString(E) ? g(E) : E;
      return y.protocol === p.protocol && y.host === p.host;
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
function FM(s) {
  const u = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return u && u[1] || "";
}
function HM(s, u) {
  s = s || 10;
  const f = new Array(s), p = new Array(s);
  let g = 0, b = 0, E;
  return u = u !== void 0 ? u : 1e3, function(T) {
    const A = Date.now(), k = p[b];
    E || (E = A), f[g] = T, p[g] = A;
    let D = b, M = 0;
    for (; D !== g; )
      M += f[D++], D = D % s;
    if (g = (g + 1) % s, g === b && (b = (b + 1) % s), A - E < u)
      return;
    const I = k && A - k;
    return I ? Math.round(M * 1e3 / I) : void 0;
  };
}
function Yx(s, u) {
  let f = 0;
  const p = HM(50, 250);
  return (g) => {
    const b = g.loaded, E = g.lengthComputable ? g.total : void 0, y = b - f, T = p(y), A = b <= E;
    f = b;
    const k = {
      loaded: b,
      total: E,
      progress: E ? b / E : void 0,
      bytes: y,
      rate: T || void 0,
      estimated: T && E && A ? (E - b) / T : void 0,
      event: g
    };
    k[u ? "download" : "upload"] = !0, s(k);
  };
}
const $M = typeof XMLHttpRequest < "u", BM = $M && function(s) {
  return new Promise(function(f, p) {
    let g = s.data;
    const b = du.from(s.headers).normalize();
    let { responseType: E, withXSRFToken: y } = s, T;
    function A() {
      s.cancelToken && s.cancelToken.unsubscribe(T), s.signal && s.signal.removeEventListener("abort", T);
    }
    let k;
    if (de.isFormData(g)) {
      if (yl.hasStandardBrowserEnv || yl.hasStandardBrowserWebWorkerEnv)
        b.setContentType(!1);
      else if ((k = b.getContentType()) !== !1) {
        const [X, ...fe] = k ? k.split(";").map((Le) => Le.trim()).filter(Boolean) : [];
        b.setContentType([X || "multipart/form-data", ...fe].join("; "));
      }
    }
    let D = new XMLHttpRequest();
    if (s.auth) {
      const X = s.auth.username || "", fe = s.auth.password ? unescape(encodeURIComponent(s.auth.password)) : "";
      b.set("Authorization", "Basic " + btoa(X + ":" + fe));
    }
    const M = q1(s.baseURL, s.url);
    D.open(s.method.toUpperCase(), B1(M, s.params, s.paramsSerializer), !0), D.timeout = s.timeout;
    function I() {
      if (!D)
        return;
      const X = du.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), Le = {
        data: !E || E === "text" || E === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: X,
        config: s,
        request: D
      };
      LM(function(ze) {
        f(ze), A();
      }, function(ze) {
        p(ze), A();
      }, Le), D = null;
    }
    if ("onloadend" in D ? D.onloadend = I : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(I);
    }, D.onabort = function() {
      D && (p(new Qt("Request aborted", Qt.ECONNABORTED, s, D)), D = null);
    }, D.onerror = function() {
      p(new Qt("Network Error", Qt.ERR_NETWORK, s, D)), D = null;
    }, D.ontimeout = function() {
      let fe = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const Le = s.transitional || V1;
      s.timeoutErrorMessage && (fe = s.timeoutErrorMessage), p(new Qt(
        fe,
        Le.clarifyTimeoutError ? Qt.ETIMEDOUT : Qt.ECONNABORTED,
        s,
        D
      )), D = null;
    }, yl.hasStandardBrowserEnv && (y && de.isFunction(y) && (y = y(s)), y || y !== !1 && PM(M))) {
      const X = s.xsrfHeaderName && s.xsrfCookieName && zM.read(s.xsrfCookieName);
      X && b.set(s.xsrfHeaderName, X);
    }
    g === void 0 && b.setContentType(null), "setRequestHeader" in D && de.forEach(b.toJSON(), function(fe, Le) {
      D.setRequestHeader(Le, fe);
    }), de.isUndefined(s.withCredentials) || (D.withCredentials = !!s.withCredentials), E && E !== "json" && (D.responseType = s.responseType), typeof s.onDownloadProgress == "function" && D.addEventListener("progress", Yx(s.onDownloadProgress, !0)), typeof s.onUploadProgress == "function" && D.upload && D.upload.addEventListener("progress", Yx(s.onUploadProgress)), (s.cancelToken || s.signal) && (T = (X) => {
      D && (p(!X || X.type ? new Xh(null, s, D) : X), D.abort(), D = null);
    }, s.cancelToken && s.cancelToken.subscribe(T), s.signal && (s.signal.aborted ? T() : s.signal.addEventListener("abort", T)));
    const B = FM(M);
    if (B && yl.protocols.indexOf(B) === -1) {
      p(new Qt("Unsupported protocol " + B + ":", Qt.ERR_BAD_REQUEST, s));
      return;
    }
    D.send(g || null);
  });
}, yb = {
  http: pM,
  xhr: BM
};
de.forEach(yb, (s, u) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: u });
    } catch {
    }
    Object.defineProperty(s, "adapterName", { value: u });
  }
});
const qx = (s) => `- ${s}`, VM = (s) => de.isFunction(s) || s === null || s === !1, Q1 = {
  getAdapter: (s) => {
    s = de.isArray(s) ? s : [s];
    const { length: u } = s;
    let f, p;
    const g = {};
    for (let b = 0; b < u; b++) {
      f = s[b];
      let E;
      if (p = f, !VM(f) && (p = yb[(E = String(f)).toLowerCase()], p === void 0))
        throw new Qt(`Unknown adapter '${E}'`);
      if (p)
        break;
      g[E || "#" + b] = p;
    }
    if (!p) {
      const b = Object.entries(g).map(
        ([y, T]) => `adapter ${y} ` + (T === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let E = u ? b.length > 1 ? `since :
` + b.map(qx).join(`
`) : " " + qx(b[0]) : "as no adapter specified";
      throw new Qt(
        "There is no suitable adapter to dispatch the request " + E,
        "ERR_NOT_SUPPORT"
      );
    }
    return p;
  },
  adapters: yb
};
function tb(s) {
  if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
    throw new Xh(null, s);
}
function Qx(s) {
  return tb(s), s.headers = du.from(s.headers), s.data = eb.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), Q1.getAdapter(s.adapter || Ub.adapter)(s).then(function(p) {
    return tb(s), p.data = eb.call(
      s,
      s.transformResponse,
      p
    ), p.headers = du.from(p.headers), p;
  }, function(p) {
    return Y1(p) || (tb(s), p && p.response && (p.response.data = eb.call(
      s,
      s.transformResponse,
      p.response
    ), p.response.headers = du.from(p.response.headers))), Promise.reject(p);
  });
}
const Gx = (s) => s instanceof du ? s.toJSON() : s;
function Ld(s, u) {
  u = u || {};
  const f = {};
  function p(A, k, D) {
    return de.isPlainObject(A) && de.isPlainObject(k) ? de.merge.call({ caseless: D }, A, k) : de.isPlainObject(k) ? de.merge({}, k) : de.isArray(k) ? k.slice() : k;
  }
  function g(A, k, D) {
    if (de.isUndefined(k)) {
      if (!de.isUndefined(A))
        return p(void 0, A, D);
    } else
      return p(A, k, D);
  }
  function b(A, k) {
    if (!de.isUndefined(k))
      return p(void 0, k);
  }
  function E(A, k) {
    if (de.isUndefined(k)) {
      if (!de.isUndefined(A))
        return p(void 0, A);
    } else
      return p(void 0, k);
  }
  function y(A, k, D) {
    if (D in u)
      return p(A, k);
    if (D in s)
      return p(void 0, A);
  }
  const T = {
    url: b,
    method: b,
    data: b,
    baseURL: E,
    transformRequest: E,
    transformResponse: E,
    paramsSerializer: E,
    timeout: E,
    timeoutMessage: E,
    withCredentials: E,
    withXSRFToken: E,
    adapter: E,
    responseType: E,
    xsrfCookieName: E,
    xsrfHeaderName: E,
    onUploadProgress: E,
    onDownloadProgress: E,
    decompress: E,
    maxContentLength: E,
    maxBodyLength: E,
    beforeRedirect: E,
    transport: E,
    httpAgent: E,
    httpsAgent: E,
    cancelToken: E,
    socketPath: E,
    responseEncoding: E,
    validateStatus: y,
    headers: (A, k) => g(Gx(A), Gx(k), !0)
  };
  return de.forEach(Object.keys(Object.assign({}, s, u)), function(k) {
    const D = T[k] || g, M = D(s[k], u[k], k);
    de.isUndefined(M) && D !== y || (f[k] = M);
  }), f;
}
const G1 = "1.6.7", jb = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, u) => {
  jb[s] = function(p) {
    return typeof p === s || "a" + (u < 1 ? "n " : " ") + s;
  };
});
const Kx = {};
jb.transitional = function(u, f, p) {
  function g(b, E) {
    return "[Axios v" + G1 + "] Transitional option '" + b + "'" + E + (p ? ". " + p : "");
  }
  return (b, E, y) => {
    if (u === !1)
      throw new Qt(
        g(E, " has been removed" + (f ? " in " + f : "")),
        Qt.ERR_DEPRECATED
      );
    return f && !Kx[E] && (Kx[E] = !0, console.warn(
      g(
        E,
        " has been deprecated since v" + f + " and will be removed in the near future"
      )
    )), u ? u(b, E, y) : !0;
  };
};
function IM(s, u, f) {
  if (typeof s != "object")
    throw new Qt("options must be an object", Qt.ERR_BAD_OPTION_VALUE);
  const p = Object.keys(s);
  let g = p.length;
  for (; g-- > 0; ) {
    const b = p[g], E = u[b];
    if (E) {
      const y = s[b], T = y === void 0 || E(y, b, s);
      if (T !== !0)
        throw new Qt("option " + b + " must be " + T, Qt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (f !== !0)
      throw new Qt("Unknown option " + b, Qt.ERR_BAD_OPTION);
  }
}
const gb = {
  assertOptions: IM,
  validators: jb
}, Ss = gb.validators;
class og {
  constructor(u) {
    this.defaults = u, this.interceptors = {
      request: new Ix(),
      response: new Ix()
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
  async request(u, f) {
    try {
      return await this._request(u, f);
    } catch (p) {
      if (p instanceof Error) {
        let g;
        Error.captureStackTrace ? Error.captureStackTrace(g = {}) : g = new Error();
        const b = g.stack ? g.stack.replace(/^.+\n/, "") : "";
        p.stack ? b && !String(p.stack).endsWith(b.replace(/^.+\n.+\n/, "")) && (p.stack += `
` + b) : p.stack = b;
      }
      throw p;
    }
  }
  _request(u, f) {
    typeof u == "string" ? (f = f || {}, f.url = u) : f = u || {}, f = Ld(this.defaults, f);
    const { transitional: p, paramsSerializer: g, headers: b } = f;
    p !== void 0 && gb.assertOptions(p, {
      silentJSONParsing: Ss.transitional(Ss.boolean),
      forcedJSONParsing: Ss.transitional(Ss.boolean),
      clarifyTimeoutError: Ss.transitional(Ss.boolean)
    }, !1), g != null && (de.isFunction(g) ? f.paramsSerializer = {
      serialize: g
    } : gb.assertOptions(g, {
      encode: Ss.function,
      serialize: Ss.function
    }, !0)), f.method = (f.method || this.defaults.method || "get").toLowerCase();
    let E = b && de.merge(
      b.common,
      b[f.method]
    );
    b && de.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (B) => {
        delete b[B];
      }
    ), f.headers = du.concat(E, b);
    const y = [];
    let T = !0;
    this.interceptors.request.forEach(function(X) {
      typeof X.runWhen == "function" && X.runWhen(f) === !1 || (T = T && X.synchronous, y.unshift(X.fulfilled, X.rejected));
    });
    const A = [];
    this.interceptors.response.forEach(function(X) {
      A.push(X.fulfilled, X.rejected);
    });
    let k, D = 0, M;
    if (!T) {
      const B = [Qx.bind(this), void 0];
      for (B.unshift.apply(B, y), B.push.apply(B, A), M = B.length, k = Promise.resolve(f); D < M; )
        k = k.then(B[D++], B[D++]);
      return k;
    }
    M = y.length;
    let I = f;
    for (D = 0; D < M; ) {
      const B = y[D++], X = y[D++];
      try {
        I = B(I);
      } catch (fe) {
        X.call(this, fe);
        break;
      }
    }
    try {
      k = Qx.call(this, I);
    } catch (B) {
      return Promise.reject(B);
    }
    for (D = 0, M = A.length; D < M; )
      k = k.then(A[D++], A[D++]);
    return k;
  }
  getUri(u) {
    u = Ld(this.defaults, u);
    const f = q1(u.baseURL, u.url);
    return B1(f, u.params, u.paramsSerializer);
  }
}
de.forEach(["delete", "get", "head", "options"], function(u) {
  og.prototype[u] = function(f, p) {
    return this.request(Ld(p || {}, {
      method: u,
      url: f,
      data: (p || {}).data
    }));
  };
});
de.forEach(["post", "put", "patch"], function(u) {
  function f(p) {
    return function(b, E, y) {
      return this.request(Ld(y || {}, {
        method: u,
        headers: p ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: b,
        data: E
      }));
    };
  }
  og.prototype[u] = f(), og.prototype[u + "Form"] = f(!0);
});
const ng = og;
class Pb {
  constructor(u) {
    if (typeof u != "function")
      throw new TypeError("executor must be a function.");
    let f;
    this.promise = new Promise(function(b) {
      f = b;
    });
    const p = this;
    this.promise.then((g) => {
      if (!p._listeners)
        return;
      let b = p._listeners.length;
      for (; b-- > 0; )
        p._listeners[b](g);
      p._listeners = null;
    }), this.promise.then = (g) => {
      let b;
      const E = new Promise((y) => {
        p.subscribe(y), b = y;
      }).then(g);
      return E.cancel = function() {
        p.unsubscribe(b);
      }, E;
    }, u(function(b, E, y) {
      p.reason || (p.reason = new Xh(b, E, y), f(p.reason));
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
      token: new Pb(function(g) {
        u = g;
      }),
      cancel: u
    };
  }
}
const WM = Pb;
function YM(s) {
  return function(f) {
    return s.apply(null, f);
  };
}
function qM(s) {
  return de.isObject(s) && s.isAxiosError === !0;
}
const Sb = {
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
Object.entries(Sb).forEach(([s, u]) => {
  Sb[u] = s;
});
const QM = Sb;
function K1(s) {
  const u = new ng(s), f = D1(ng.prototype.request, u);
  return de.extend(f, ng.prototype, u, { allOwnKeys: !0 }), de.extend(f, u, null, { allOwnKeys: !0 }), f.create = function(g) {
    return K1(Ld(s, g));
  }, f;
}
const Gn = K1(Ub);
Gn.Axios = ng;
Gn.CanceledError = Xh;
Gn.CancelToken = WM;
Gn.isCancel = Y1;
Gn.VERSION = G1;
Gn.toFormData = Sg;
Gn.AxiosError = Qt;
Gn.Cancel = Gn.CanceledError;
Gn.all = function(u) {
  return Promise.all(u);
};
Gn.spread = YM;
Gn.isAxiosError = qM;
Gn.mergeConfig = Ld;
Gn.AxiosHeaders = du;
Gn.formToJSON = (s) => W1(de.isHTMLForm(s) ? new FormData(s) : s);
Gn.getAdapter = Q1.getAdapter;
Gn.HttpStatusCode = QM;
Gn.default = Gn;
let GM = { data: "" }, KM = (s) => typeof window == "object" ? ((s ? s.querySelector("#_goober") : window._goober) || Object.assign((s || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : s || GM, XM = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, JM = /\/\*[^]*?\*\/|  +/g, Xx = /\n+/g, Es = (s, u) => {
  let f = "", p = "", g = "";
  for (let b in s) {
    let E = s[b];
    b[0] == "@" ? b[1] == "i" ? f = b + " " + E + ";" : p += b[1] == "f" ? Es(E, b) : b + "{" + Es(E, b[1] == "k" ? "" : u) + "}" : typeof E == "object" ? p += Es(E, u ? u.replace(/([^,])+/g, (y) => b.replace(/(^:.*)|([^,])+/g, (T) => /&/.test(T) ? T.replace(/&/g, y) : y ? y + " " + T : T)) : b) : E != null && (b = /^--/.test(b) ? b : b.replace(/[A-Z]/g, "-$&").toLowerCase(), g += Es.p ? Es.p(b, E) : b + ":" + E + ";");
  }
  return f + (u && g ? u + "{" + g + "}" : g) + p;
}, fu = {}, X1 = (s) => {
  if (typeof s == "object") {
    let u = "";
    for (let f in s)
      u += f + X1(s[f]);
    return u;
  }
  return s;
}, ZM = (s, u, f, p, g) => {
  let b = X1(s), E = fu[b] || (fu[b] = ((T) => {
    let A = 0, k = 11;
    for (; A < T.length; )
      k = 101 * k + T.charCodeAt(A++) >>> 0;
    return "go" + k;
  })(b));
  if (!fu[E]) {
    let T = b !== s ? s : ((A) => {
      let k, D, M = [{}];
      for (; k = XM.exec(A.replace(JM, "")); )
        k[4] ? M.shift() : k[3] ? (D = k[3].replace(Xx, " ").trim(), M.unshift(M[0][D] = M[0][D] || {})) : M[0][k[1]] = k[2].replace(Xx, " ").trim();
      return M[0];
    })(s);
    fu[E] = Es(g ? { ["@keyframes " + E]: T } : T, f ? "" : "." + E);
  }
  let y = f && fu.g ? fu.g : null;
  return f && (fu.g = fu[E]), ((T, A, k, D) => {
    D ? A.data = A.data.replace(D, T) : A.data.indexOf(T) === -1 && (A.data = k ? T + A.data : A.data + T);
  })(fu[E], u, p, y), E;
}, eL = (s, u, f) => s.reduce((p, g, b) => {
  let E = u[b];
  if (E && E.call) {
    let y = E(f), T = y && y.props && y.props.className || /^go/.test(y) && y;
    E = T ? "." + T : y && typeof y == "object" ? y.props ? "" : Es(y, "") : y === !1 ? "" : y;
  }
  return p + g + (E ?? "");
}, "");
function bg(s) {
  let u = this || {}, f = s.call ? s(u.p) : s;
  return ZM(f.unshift ? f.raw ? eL(f, [].slice.call(arguments, 1), u.p) : f.reduce((p, g) => Object.assign(p, g && g.call ? g(u.p) : g), {}) : f, KM(u.target), u.g, u.o, u.k);
}
let J1, Eb, bb;
bg.bind({ g: 1 });
let pu = bg.bind({ k: 1 });
function tL(s, u, f, p) {
  Es.p = u, J1 = s, Eb = f, bb = p;
}
function ws(s, u) {
  let f = this || {};
  return function() {
    let p = arguments;
    function g(b, E) {
      let y = Object.assign({}, b), T = y.className || g.className;
      f.p = Object.assign({ theme: Eb && Eb() }, y), f.o = / *go\d+/.test(T), y.className = bg.apply(f, p) + (T ? " " + T : ""), u && (y.ref = E);
      let A = s;
      return s[0] && (A = y.as || s, delete y.as), bb && A[0] && bb(y), J1(A, y);
    }
    return u ? u(g) : g;
  };
}
var nL = (s) => typeof s == "function", lg = (s, u) => nL(s) ? s(u) : s, rL = /* @__PURE__ */ (() => {
  let s = 0;
  return () => (++s).toString();
})(), Z1 = /* @__PURE__ */ (() => {
  let s;
  return () => {
    if (s === void 0 && typeof window < "u") {
      let u = matchMedia("(prefers-reduced-motion: reduce)");
      s = !u || u.matches;
    }
    return s;
  };
})(), aL = 20, rg = /* @__PURE__ */ new Map(), iL = 1e3, Jx = (s) => {
  if (rg.has(s))
    return;
  let u = setTimeout(() => {
    rg.delete(s), Gc({ type: 4, toastId: s });
  }, iL);
  rg.set(s, u);
}, oL = (s) => {
  let u = rg.get(s);
  u && clearTimeout(u);
}, wb = (s, u) => {
  switch (u.type) {
    case 0:
      return { ...s, toasts: [u.toast, ...s.toasts].slice(0, aL) };
    case 1:
      return u.toast.id && oL(u.toast.id), { ...s, toasts: s.toasts.map((b) => b.id === u.toast.id ? { ...b, ...u.toast } : b) };
    case 2:
      let { toast: f } = u;
      return s.toasts.find((b) => b.id === f.id) ? wb(s, { type: 1, toast: f }) : wb(s, { type: 0, toast: f });
    case 3:
      let { toastId: p } = u;
      return p ? Jx(p) : s.toasts.forEach((b) => {
        Jx(b.id);
      }), { ...s, toasts: s.toasts.map((b) => b.id === p || p === void 0 ? { ...b, visible: !1 } : b) };
    case 4:
      return u.toastId === void 0 ? { ...s, toasts: [] } : { ...s, toasts: s.toasts.filter((b) => b.id !== u.toastId) };
    case 5:
      return { ...s, pausedAt: u.time };
    case 6:
      let g = u.time - (s.pausedAt || 0);
      return { ...s, pausedAt: void 0, toasts: s.toasts.map((b) => ({ ...b, pauseDuration: b.pauseDuration + g })) };
  }
}, ag = [], ig = { toasts: [], pausedAt: void 0 }, Gc = (s) => {
  ig = wb(ig, s), ag.forEach((u) => {
    u(ig);
  });
}, lL = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, uL = (s = {}) => {
  let [u, f] = Ct.useState(ig);
  Ct.useEffect(() => (ag.push(f), () => {
    let g = ag.indexOf(f);
    g > -1 && ag.splice(g, 1);
  }), [u]);
  let p = u.toasts.map((g) => {
    var b, E;
    return { ...s, ...s[g.type], ...g, duration: g.duration || ((b = s[g.type]) == null ? void 0 : b.duration) || (s == null ? void 0 : s.duration) || lL[g.type], style: { ...s.style, ...(E = s[g.type]) == null ? void 0 : E.style, ...g.style } };
  });
  return { ...u, toasts: p };
}, sL = (s, u = "blank", f) => ({ createdAt: Date.now(), visible: !0, type: u, ariaProps: { role: "status", "aria-live": "polite" }, message: s, pauseDuration: 0, ...f, id: (f == null ? void 0 : f.id) || rL() }), Jh = (s) => (u, f) => {
  let p = sL(u, s, f);
  return Gc({ type: 2, toast: p }), p.id;
}, Ci = (s, u) => Jh("blank")(s, u);
Ci.error = Jh("error");
Ci.success = Jh("success");
Ci.loading = Jh("loading");
Ci.custom = Jh("custom");
Ci.dismiss = (s) => {
  Gc({ type: 3, toastId: s });
};
Ci.remove = (s) => Gc({ type: 4, toastId: s });
Ci.promise = (s, u, f) => {
  let p = Ci.loading(u.loading, { ...f, ...f == null ? void 0 : f.loading });
  return s.then((g) => (Ci.success(lg(u.success, g), { id: p, ...f, ...f == null ? void 0 : f.success }), g)).catch((g) => {
    Ci.error(lg(u.error, g), { id: p, ...f, ...f == null ? void 0 : f.error });
  }), s;
};
var cL = (s, u) => {
  Gc({ type: 1, toast: { id: s, height: u } });
}, fL = () => {
  Gc({ type: 5, time: Date.now() });
}, dL = (s) => {
  let { toasts: u, pausedAt: f } = uL(s);
  Ct.useEffect(() => {
    if (f)
      return;
    let b = Date.now(), E = u.map((y) => {
      if (y.duration === 1 / 0)
        return;
      let T = (y.duration || 0) + y.pauseDuration - (b - y.createdAt);
      if (T < 0) {
        y.visible && Ci.dismiss(y.id);
        return;
      }
      return setTimeout(() => Ci.dismiss(y.id), T);
    });
    return () => {
      E.forEach((y) => y && clearTimeout(y));
    };
  }, [u, f]);
  let p = Ct.useCallback(() => {
    f && Gc({ type: 6, time: Date.now() });
  }, [f]), g = Ct.useCallback((b, E) => {
    let { reverseOrder: y = !1, gutter: T = 8, defaultPosition: A } = E || {}, k = u.filter((I) => (I.position || A) === (b.position || A) && I.height), D = k.findIndex((I) => I.id === b.id), M = k.filter((I, B) => B < D && I.visible).length;
    return k.filter((I) => I.visible).slice(...y ? [M + 1] : [0, M]).reduce((I, B) => I + (B.height || 0) + T, 0);
  }, [u]);
  return { toasts: u, handlers: { updateHeight: cL, startPause: fL, endPause: p, calculateOffset: g } };
}, pL = pu`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, hL = pu`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, vL = pu`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, mL = ws("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(s) => s.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pL} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${hL} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(s) => s.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${vL} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, yL = pu`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, gL = ws("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(s) => s.secondary || "#e0e0e0"};
  border-right-color: ${(s) => s.primary || "#616161"};
  animation: ${yL} 1s linear infinite;
`, SL = pu`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, EL = pu`
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
}`, bL = ws("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(s) => s.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${SL} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${EL} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(s) => s.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, wL = ws("div")`
  position: absolute;
`, CL = ws("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, _L = pu`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, xL = ws("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_L} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, TL = ({ toast: s }) => {
  let { icon: u, type: f, iconTheme: p } = s;
  return u !== void 0 ? typeof u == "string" ? Ct.createElement(xL, null, u) : u : f === "blank" ? null : Ct.createElement(CL, null, Ct.createElement(gL, { ...p }), f !== "loading" && Ct.createElement(wL, null, f === "error" ? Ct.createElement(mL, { ...p }) : Ct.createElement(bL, { ...p })));
}, RL = (s) => `
0% {transform: translate3d(0,${s * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, kL = (s) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s * -150}%,-1px) scale(.6); opacity:0;}
`, OL = "0%{opacity:0;} 100%{opacity:1;}", DL = "0%{opacity:1;} 100%{opacity:0;}", NL = ws("div")`
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
`, AL = ws("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, ML = (s, u) => {
  let f = s.includes("top") ? 1 : -1, [p, g] = Z1() ? [OL, DL] : [RL(f), kL(f)];
  return { animation: u ? `${pu(p)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${pu(g)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, LL = Ct.memo(({ toast: s, position: u, style: f, children: p }) => {
  let g = s.height ? ML(s.position || u || "top-center", s.visible) : { opacity: 0 }, b = Ct.createElement(TL, { toast: s }), E = Ct.createElement(AL, { ...s.ariaProps }, lg(s.message, s));
  return Ct.createElement(NL, { className: s.className, style: { ...g, ...f, ...s.style } }, typeof p == "function" ? p({ icon: b, message: E }) : Ct.createElement(Ct.Fragment, null, b, E));
});
tL(Ct.createElement);
var zL = ({ id: s, className: u, style: f, onHeightUpdate: p, children: g }) => {
  let b = Ct.useCallback((E) => {
    if (E) {
      let y = () => {
        let T = E.getBoundingClientRect().height;
        p(s, T);
      };
      y(), new MutationObserver(y).observe(E, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [s, p]);
  return Ct.createElement("div", { ref: b, className: u, style: f }, g);
}, UL = (s, u) => {
  let f = s.includes("top"), p = f ? { top: 0 } : { bottom: 0 }, g = s.includes("center") ? { justifyContent: "center" } : s.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: Z1() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${u * (f ? 1 : -1)}px)`, ...p, ...g };
}, jL = bg`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, Qy = 16, PL = ({ reverseOrder: s, position: u = "top-center", toastOptions: f, gutter: p, children: g, containerStyle: b, containerClassName: E }) => {
  let { toasts: y, handlers: T } = dL(f);
  return Ct.createElement("div", { style: { position: "fixed", zIndex: 9999, top: Qy, left: Qy, right: Qy, bottom: Qy, pointerEvents: "none", ...b }, className: E, onMouseEnter: T.startPause, onMouseLeave: T.endPause }, y.map((A) => {
    let k = A.position || u, D = T.calculateOffset(A, { reverseOrder: s, gutter: p, defaultPosition: u }), M = UL(k, D);
    return Ct.createElement(zL, { id: A.id, key: A.id, onHeightUpdate: T.updateHeight, className: A.visible ? jL : "", style: M }, A.type === "custom" ? lg(A.message, A) : g ? g(A) : Ct.createElement(LL, { toast: A, position: k }));
  }));
}, Oo = Ci, Rr = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
let FL = 0;
function eT(s, u) {
  const f = `atom${++FL}`, p = {
    toString: () => f
  };
  return typeof s == "function" ? p.read = s : (p.init = s, p.read = HL, p.write = $L), u && (p.write = u), p;
}
function HL(s) {
  return s(this);
}
function $L(s, u, f) {
  return u(
    this,
    typeof f == "function" ? f(s(this)) : f
  );
}
const nb = (s, u) => s.unstable_is ? s.unstable_is(u) : u === s, rb = (s) => "init" in s, ab = (s) => !!s.write, ug = /* @__PURE__ */ new WeakMap(), BL = (s, u) => {
  ug.set(s, u), s.catch(() => {
  }).finally(() => ug.delete(s));
}, Zx = (s, u) => {
  const f = ug.get(s);
  f && (ug.delete(s), f(u));
}, e1 = (s, u) => {
  s.status = "fulfilled", s.value = u;
}, t1 = (s, u) => {
  s.status = "rejected", s.reason = u;
}, VL = (s) => typeof (s == null ? void 0 : s.then) == "function", Hh = (s, u) => !!s && "v" in s && "v" in u && Object.is(s.v, u.v), n1 = (s, u) => !!s && "e" in s && "e" in u && Object.is(s.e, u.e), Ad = (s) => !!s && "v" in s && s.v instanceof Promise, IL = (s, u) => "v" in s && "v" in u && s.v.orig && s.v.orig === u.v.orig, Gy = (s) => {
  if ("e" in s)
    throw s.e;
  return s.v;
}, tT = () => {
  const s = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new Map();
  let p, g;
  (Rr ? "production" : void 0) !== "production" && (p = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set());
  const b = (Z) => s.get(Z), E = (Z, xe) => {
    (Rr ? "production" : void 0) !== "production" && Object.freeze(xe);
    const De = b(Z);
    if (s.set(Z, xe), f.has(Z) || f.set(Z, De), Ad(De)) {
      const Te = "v" in xe ? xe.v instanceof Promise ? xe.v : Promise.resolve(xe.v) : Promise.reject(xe.e);
      De.v !== Te && Zx(De.v, Te);
    }
  }, y = (Z, xe, De, Te) => {
    const we = new Map(
      Te ? xe.d : null
    );
    let Ne = !1;
    De.forEach((le, re) => {
      !le && nb(Z, re) && (le = xe), le ? (we.set(re, le), xe.d.get(re) !== le && (Ne = !0)) : (Rr ? "production" : void 0) !== "production" && console.warn("[Bug] atom state not found");
    }), (Ne || xe.d.size !== we.size) && (xe.d = we);
  }, T = (Z, xe, De, Te) => {
    const we = b(Z), Ne = {
      d: (we == null ? void 0 : we.d) || /* @__PURE__ */ new Map(),
      v: xe
    };
    if (De && y(
      Z,
      Ne,
      De,
      Te
    ), Hh(we, Ne) && we.d === Ne.d)
      return we;
    if (Ad(we) && Ad(Ne) && IL(we, Ne)) {
      if (we.d === Ne.d)
        return we;
      Ne.v = we.v;
    }
    return E(Z, Ne), Ne;
  }, A = (Z, xe, De, Te) => {
    if (VL(xe)) {
      let we;
      const Ne = () => {
        const re = b(Z);
        if (!Ad(re) || re.v !== le)
          return;
        const ve = T(
          Z,
          le,
          De
        );
        u.has(Z) && re.d !== ve.d && ue(Z, ve, re.d);
      }, le = new Promise((re, ve) => {
        let pe = !1;
        xe.then(
          (O) => {
            pe || (pe = !0, e1(le, O), re(O), Ne());
          },
          (O) => {
            pe || (pe = !0, t1(le, O), ve(O), Ne());
          }
        ), we = (O) => {
          pe || (pe = !0, O.then(
            (ae) => e1(le, ae),
            (ae) => t1(le, ae)
          ), re(O));
        };
      });
      return le.orig = xe, le.status = "pending", BL(le, (re) => {
        re && we(re), Te == null || Te();
      }), T(Z, le, De, !0);
    }
    return T(Z, xe, De);
  }, k = (Z, xe, De) => {
    const Te = b(Z), we = {
      d: (Te == null ? void 0 : Te.d) || /* @__PURE__ */ new Map(),
      e: xe
    };
    return De && y(Z, we, De), n1(Te, we) && Te.d === we.d ? Te : (E(Z, we), we);
  }, D = (Z, xe) => {
    const De = b(Z);
    if (!xe && De && (u.has(Z) || Array.from(De.d).every(([pe, O]) => {
      if (pe === Z)
        return !0;
      const ae = D(pe);
      return ae === O || Hh(ae, O);
    })))
      return De;
    const Te = /* @__PURE__ */ new Map();
    let we = !0;
    const Ne = (pe) => {
      if (nb(Z, pe)) {
        const ae = b(pe);
        if (ae)
          return Te.set(pe, ae), Gy(ae);
        if (rb(pe))
          return Te.set(pe, void 0), pe.init;
        throw new Error("no atom init");
      }
      const O = D(pe);
      return Te.set(pe, O), Gy(O);
    };
    let le, re;
    const ve = {
      get signal() {
        return le || (le = new AbortController()), le.signal;
      },
      get setSelf() {
        return (Rr ? "production" : void 0) !== "production" && !ab(Z) && console.warn("setSelf function cannot be used with read-only atom"), !re && ab(Z) && (re = (...pe) => {
          if ((Rr ? "production" : void 0) !== "production" && we && console.warn("setSelf function cannot be called in sync"), !we)
            return Ke(Z, ...pe);
        }), re;
      }
    };
    try {
      const pe = Z.read(Ne, ve);
      return A(
        Z,
        pe,
        Te,
        () => le == null ? void 0 : le.abort()
      );
    } catch (pe) {
      return k(Z, pe, Te);
    } finally {
      we = !1;
    }
  }, M = (Z) => Gy(D(Z)), I = (Z) => {
    let xe = u.get(Z);
    return xe || (xe = ze(Z)), xe;
  }, B = (Z, xe) => !xe.l.size && (!xe.t.size || xe.t.size === 1 && xe.t.has(Z)), X = (Z) => {
    const xe = u.get(Z);
    xe && B(Z, xe) && Be(Z);
  }, fe = (Z) => {
    const xe = (le) => {
      var re;
      const ve = new Set((re = u.get(le)) == null ? void 0 : re.t);
      return f.forEach((pe, O) => {
        var ae;
        (ae = b(O)) != null && ae.d.has(le) && ve.add(O);
      }), ve;
    }, De = new Array(), Te = /* @__PURE__ */ new Set(), we = (le) => {
      if (!Te.has(le)) {
        Te.add(le);
        for (const re of xe(le))
          le !== re && we(re);
        De.push(le);
      }
    };
    we(Z);
    const Ne = /* @__PURE__ */ new Set([Z]);
    for (let le = De.length - 1; le >= 0; --le) {
      const re = De[le], ve = b(re);
      if (!ve)
        continue;
      let pe = !1;
      for (const O of ve.d.keys())
        if (O !== re && Ne.has(O)) {
          pe = !0;
          break;
        }
      if (pe) {
        const O = D(re, !0);
        Hh(ve, O) || Ne.add(re);
      }
    }
  }, Le = (Z, ...xe) => {
    let De = !0;
    const Te = (le) => Gy(D(le)), we = (le, ...re) => {
      let ve;
      if (nb(Z, le)) {
        if (!rb(le))
          throw new Error("atom not writable");
        const pe = b(le), O = A(le, re[0]);
        Hh(pe, O) || fe(le);
      } else
        ve = Le(le, ...re);
      if (!De) {
        const pe = Ue();
        (Rr ? "production" : void 0) !== "production" && p.forEach(
          (O) => O({ type: "async-write", flushed: pe })
        );
      }
      return ve;
    }, Ne = Z.write(Te, we, ...xe);
    return De = !1, Ne;
  }, Ke = (Z, ...xe) => {
    const De = Le(Z, ...xe), Te = Ue();
    return (Rr ? "production" : void 0) !== "production" && p.forEach(
      (we) => we({ type: "write", flushed: Te })
    ), De;
  }, ze = (Z, xe, De) => {
    var Te;
    const we = De || [];
    (Te = b(Z)) == null || Te.d.forEach((le, re) => {
      const ve = u.get(re);
      ve ? ve.t.add(Z) : re !== Z && ze(re, Z, we);
    }), D(Z);
    const Ne = {
      t: new Set(xe && [xe]),
      l: /* @__PURE__ */ new Set()
    };
    if (u.set(Z, Ne), (Rr ? "production" : void 0) !== "production" && g.add(Z), ab(Z) && Z.onMount) {
      const { onMount: le } = Z;
      we.push(() => {
        const re = le((...ve) => Ke(Z, ...ve));
        re && (Ne.u = re);
      });
    }
    return De || we.forEach((le) => le()), Ne;
  }, Be = (Z) => {
    var xe;
    const De = (xe = u.get(Z)) == null ? void 0 : xe.u;
    De && De(), u.delete(Z), (Rr ? "production" : void 0) !== "production" && g.delete(Z);
    const Te = b(Z);
    Te ? (Ad(Te) && Zx(Te.v), Te.d.forEach((we, Ne) => {
      if (Ne !== Z) {
        const le = u.get(Ne);
        le && (le.t.delete(Z), B(Ne, le) && Be(Ne));
      }
    })) : (Rr ? "production" : void 0) !== "production" && console.warn("[Bug] could not find atom state to unmount", Z);
  }, ue = (Z, xe, De) => {
    const Te = new Set(xe.d.keys()), we = /* @__PURE__ */ new Set();
    De == null || De.forEach((Ne, le) => {
      if (Te.has(le)) {
        Te.delete(le);
        return;
      }
      we.add(le);
      const re = u.get(le);
      re && re.t.delete(Z);
    }), Te.forEach((Ne) => {
      const le = u.get(Ne);
      le ? le.t.add(Z) : u.has(Z) && ze(Ne, Z);
    }), we.forEach((Ne) => {
      const le = u.get(Ne);
      le && B(Ne, le) && Be(Ne);
    });
  }, Ue = () => {
    let Z;
    for ((Rr ? "production" : void 0) !== "production" && (Z = /* @__PURE__ */ new Set()); f.size; ) {
      const xe = Array.from(f);
      f.clear(), xe.forEach(([De, Te]) => {
        const we = b(De);
        if (we) {
          const Ne = u.get(De);
          Ne && we.d !== (Te == null ? void 0 : Te.d) && ue(De, we, Te == null ? void 0 : Te.d), Ne && !// TODO This seems pretty hacky. Hope to fix it.
          // Maybe we could `mountDependencies` in `setAtomState`?
          (!Ad(Te) && (Hh(Te, we) || n1(Te, we))) && (Ne.l.forEach((le) => le()), (Rr ? "production" : void 0) !== "production" && Z.add(De));
        } else
          (Rr ? "production" : void 0) !== "production" && console.warn("[Bug] no atom state to flush");
      });
    }
    if ((Rr ? "production" : void 0) !== "production")
      return Z;
  }, gt = (Z, xe) => {
    const De = I(Z), Te = Ue(), we = De.l;
    return we.add(xe), (Rr ? "production" : void 0) !== "production" && p.forEach(
      (Ne) => Ne({ type: "sub", flushed: Te })
    ), () => {
      we.delete(xe), X(Z), (Rr ? "production" : void 0) !== "production" && p.forEach((Ne) => Ne({ type: "unsub" }));
    };
  };
  return (Rr ? "production" : void 0) !== "production" ? {
    get: M,
    set: Ke,
    sub: gt,
    // store dev methods (these are tentative and subject to change without notice)
    dev_subscribe_store: (Z, xe) => {
      if (xe !== 2)
        throw new Error("The current StoreListener revision is 2.");
      return p.add(Z), () => {
        p.delete(Z);
      };
    },
    dev_get_mounted_atoms: () => g.values(),
    dev_get_atom_state: (Z) => s.get(Z),
    dev_get_mounted: (Z) => u.get(Z),
    dev_restore_atoms: (Z) => {
      for (const [De, Te] of Z)
        rb(De) && (A(De, Te), fe(De));
      const xe = Ue();
      p.forEach(
        (De) => De({ type: "restore", flushed: xe })
      );
    }
  } : {
    get: M,
    set: Ke,
    sub: gt
  };
};
let ib;
(Rr ? "production" : void 0) !== "production" && (typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__ == "number" ? ++globalThis.__NUMBER_OF_JOTAI_INSTANCES__ : globalThis.__NUMBER_OF_JOTAI_INSTANCES__ = 1);
const WL = () => (ib || ((Rr ? "production" : void 0) !== "production" && globalThis.__NUMBER_OF_JOTAI_INSTANCES__ !== 1 && console.warn(
  "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
), ib = tT()), ib);
var YL = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const nT = Ct.createContext(void 0), rT = (s) => {
  const u = Ct.useContext(nT);
  return (s == null ? void 0 : s.store) || u || WL();
}, qL = ({
  children: s,
  store: u
}) => {
  const f = Ct.useRef();
  return !u && !f.current && (f.current = tT()), Ct.createElement(
    nT.Provider,
    {
      value: u || f.current
    },
    s
  );
}, QL = (s) => typeof (s == null ? void 0 : s.then) == "function", GL = Ab.use || ((s) => {
  if (s.status === "pending")
    throw s;
  if (s.status === "fulfilled")
    return s.value;
  throw s.status === "rejected" ? s.reason : (s.status = "pending", s.then(
    (u) => {
      s.status = "fulfilled", s.value = u;
    },
    (u) => {
      s.status = "rejected", s.reason = u;
    }
  ), s);
});
function KL(s, u) {
  const f = rT(u), [[p, g, b], E] = Ct.useReducer(
    (A) => {
      const k = f.get(s);
      return Object.is(A[0], k) && A[1] === f && A[2] === s ? A : [k, f, s];
    },
    void 0,
    () => [f.get(s), f, s]
  );
  let y = p;
  (g !== f || b !== s) && (E(), y = f.get(s));
  const T = u == null ? void 0 : u.delay;
  return Ct.useEffect(() => {
    const A = f.sub(s, () => {
      if (typeof T == "number") {
        setTimeout(E, T);
        return;
      }
      E();
    });
    return E(), A;
  }, [f, s, T]), Ct.useDebugValue(y), QL(y) ? GL(y) : y;
}
function XL(s, u) {
  const f = rT(u);
  return Ct.useCallback(
    (...g) => {
      if ((YL ? "production" : void 0) !== "production" && !("write" in s))
        throw new Error("not writable atom");
      return f.set(s, ...g);
    },
    [f, s]
  );
}
function Fb(s, u) {
  return [
    KL(s, u),
    // We do wrong type assertion here, which results in throwing an error.
    XL(s, u)
  ];
}
const aT = eT([]), iT = eT(twChatSettings.chat_widgets ? twChatSettings.chat_widgets : []);
function JL() {
  const [s, u] = Ct.useState({
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
    tw_chat_global_widget_id: twChatSettings.tw_chat_global_widget_id
  }), [f, p] = Ct.useState(!1), [g, b] = Fb(iT), E = function(A) {
    A.preventDefault(), p(!0), Gn.post(twChatSettings.ajax_url, {
      action: "save_settings",
      _ajax_nonce: twChatSettings.ajax_nonce,
      data: s
    }, {
      headers: {
        "Content-Type": "multipart/form-data"
        // Set content type for FormData
      }
    }).then(function(k) {
      Oo.success("Settings saved successfully!"), p(!1), console.log("Settings saved successfully!");
    }).catch(function(k) {
      Oo.error("There was an error saving settings."), console.log(`Error saving settings: ${k}`);
    });
  }, y = function(A) {
    const { name: k, value: D } = A.target;
    let M = s;
    M[k] = D, u(M);
  }, T = function(A) {
    const { name: k, value: D, checked: M } = A.target;
    let I = s;
    M ? (console.log(A.target.value), I[k] = D) : (console.log("Not checked"), I[k] = ""), u(I);
  };
  return /* @__PURE__ */ V.jsx(V.Fragment, { children: /* @__PURE__ */ V.jsxs("form", { id: "tw-chat-settings-form", onSubmit: E, children: [
    /* @__PURE__ */ V.jsx("p", { children: "Enter your OpenAI API key to connect to your account." }),
    /* @__PURE__ */ V.jsx("table", { className: "form-table", children: /* @__PURE__ */ V.jsx("tbody", { children: /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
      /* @__PURE__ */ V.jsx("th", { scope: "row", children: "OpenAI Key" }),
      /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_openai_key", onChange: y, defaultValue: s.tw_chat_openai_key }) })
    ] }) }) }),
    /* @__PURE__ */ V.jsx("p", { children: "Global settings for chat widget functionality." }),
    /* @__PURE__ */ V.jsx("table", { className: "form-table", children: /* @__PURE__ */ V.jsxs("tbody", { children: [
      /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Chat Error Message" }),
        /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_error_message", onChange: y, defaultValue: s.tw_chat_error_message }) })
      ] }),
      /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Disclaimer" }),
        /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("textarea", { className: "regular-text", name: "tw_chat_disclaimer", rows: "5", onChange: y, defaultValue: s.tw_chat_disclaimer }) })
      ] }),
      /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Maximum Characters Allowed" }),
        /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("input", { className: "regular-text", type: "number", name: "tw_chat_max_characters", onChange: y, defaultValue: s.tw_chat_max_characters }) })
      ] }),
      /* @__PURE__ */ V.jsxs("tr", { children: [
        /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Enable Debugging" }),
        /* @__PURE__ */ V.jsxs("td", { children: [
          /* @__PURE__ */ V.jsx(
            "input",
            {
              type: "checkbox",
              id: "tw_chat_is_debug",
              name: "tw_chat_is_debug",
              defaultValue: "enabled",
              defaultChecked: !!s.tw_chat_is_debug,
              onChange: T
            }
          ),
          /* @__PURE__ */ V.jsx("label", { htmlFor: "tw_chat_is_debug", children: "Yes, enable debugging and plugin logging" })
        ] })
      ] })
    ] }) }),
    g.length > 0 && /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
      /* @__PURE__ */ V.jsx("p", { children: "Set up your global chat widget that appears in the lower right corner of the screen." }),
      /* @__PURE__ */ V.jsx("table", { className: "form-table", children: /* @__PURE__ */ V.jsxs("tbody", { children: [
        /* @__PURE__ */ V.jsxs("tr", { children: [
          /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Enable Global Chat Widget" }),
          /* @__PURE__ */ V.jsxs("td", { children: [
            /* @__PURE__ */ V.jsx(
              "input",
              {
                type: "checkbox",
                id: "tw_chat_is_enabled",
                name: "tw_chat_is_enabled",
                defaultValue: "enabled",
                defaultChecked: !!s.tw_chat_is_enabled,
                onChange: T
              }
            ),
            /* @__PURE__ */ V.jsx("label", { htmlFor: "tw_chat_is_enabled", children: "Enable" })
          ] })
        ] }),
        /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Global Chat Widget" }),
          /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsxs("select", { name: "tw_chat_global_widget_id", onChange: y, defaultValue: s.tw_chat_global_widget_id, children: [
            /* @__PURE__ */ V.jsx("option", { value: "", children: "Select a chat widget" }),
            g.map((A) => /* @__PURE__ */ V.jsx("option", { value: A.id, children: A.name }, A.id))
          ] }) })
        ] }),
        /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Chat Button Text" }),
          /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_button_text", onChange: y, defaultValue: s.tw_chat_button_text }) })
        ] })
      ] }) })
    ] }),
    f ? /* @__PURE__ */ V.jsxs("p", { children: [
      /* @__PURE__ */ V.jsx("span", { className: "spinner is-active" }),
      " Saving"
    ] }) : /* @__PURE__ */ V.jsx("input", { className: "button button-hero button-primary", type: "submit", value: "Submit" })
  ] }) });
}
function Hb() {
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
let Kc = Hb();
function oT(s) {
  Kc = s;
}
const lT = /[&<>"']/, ZL = new RegExp(lT.source, "g"), uT = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ez = new RegExp(uT.source, "g"), tz = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, r1 = (s) => tz[s];
function bi(s, u) {
  if (u) {
    if (lT.test(s))
      return s.replace(ZL, r1);
  } else if (uT.test(s))
    return s.replace(ez, r1);
  return s;
}
const nz = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function rz(s) {
  return s.replace(nz, (u, f) => (f = f.toLowerCase(), f === "colon" ? ":" : f.charAt(0) === "#" ? f.charAt(1) === "x" ? String.fromCharCode(parseInt(f.substring(2), 16)) : String.fromCharCode(+f.substring(1)) : ""));
}
const az = /(^|[^\[])\^/g;
function gn(s, u) {
  let f = typeof s == "string" ? s : s.source;
  u = u || "";
  const p = {
    replace: (g, b) => {
      let E = typeof b == "string" ? b : b.source;
      return E = E.replace(az, "$1"), f = f.replace(g, E), p;
    },
    getRegex: () => new RegExp(f, u)
  };
  return p;
}
function a1(s) {
  try {
    s = encodeURI(s).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return s;
}
const Ih = { exec: () => null };
function i1(s, u) {
  const f = s.replace(/\|/g, (b, E, y) => {
    let T = !1, A = E;
    for (; --A >= 0 && y[A] === "\\"; )
      T = !T;
    return T ? "|" : " |";
  }), p = f.split(/ \|/);
  let g = 0;
  if (p[0].trim() || p.shift(), p.length > 0 && !p[p.length - 1].trim() && p.pop(), u)
    if (p.length > u)
      p.splice(u);
    else
      for (; p.length < u; )
        p.push("");
  for (; g < p.length; g++)
    p[g] = p[g].trim().replace(/\\\|/g, "|");
  return p;
}
function Ky(s, u, f) {
  const p = s.length;
  if (p === 0)
    return "";
  let g = 0;
  for (; g < p; ) {
    const b = s.charAt(p - g - 1);
    if (b === u && !f)
      g++;
    else if (b !== u && f)
      g++;
    else
      break;
  }
  return s.slice(0, p - g);
}
function iz(s, u) {
  if (s.indexOf(u[1]) === -1)
    return -1;
  let f = 0;
  for (let p = 0; p < s.length; p++)
    if (s[p] === "\\")
      p++;
    else if (s[p] === u[0])
      f++;
    else if (s[p] === u[1] && (f--, f < 0))
      return p;
  return -1;
}
function o1(s, u, f, p) {
  const g = u.href, b = u.title ? bi(u.title) : null, E = s[1].replace(/\\([\[\]])/g, "$1");
  if (s[0].charAt(0) !== "!") {
    p.state.inLink = !0;
    const y = {
      type: "link",
      raw: f,
      href: g,
      title: b,
      text: E,
      tokens: p.inlineTokens(E)
    };
    return p.state.inLink = !1, y;
  }
  return {
    type: "image",
    raw: f,
    href: g,
    title: b,
    text: bi(E)
  };
}
function oz(s, u) {
  const f = s.match(/^(\s+)(?:```)/);
  if (f === null)
    return u;
  const p = f[1];
  return u.split(`
`).map((g) => {
    const b = g.match(/^\s+/);
    if (b === null)
      return g;
    const [E] = b;
    return E.length >= p.length ? g.slice(p.length) : g;
  }).join(`
`);
}
class sg {
  // set by the lexer
  constructor(u) {
    An(this, "options");
    An(this, "rules");
    // set by the lexer
    An(this, "lexer");
    this.options = u || Kc;
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
        text: this.options.pedantic ? p : Ky(p, `
`)
      };
    }
  }
  fences(u) {
    const f = this.rules.block.fences.exec(u);
    if (f) {
      const p = f[0], g = oz(p, f[3] || "");
      return {
        type: "code",
        raw: p,
        lang: f[2] ? f[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : f[2],
        text: g
      };
    }
  }
  heading(u) {
    const f = this.rules.block.heading.exec(u);
    if (f) {
      let p = f[2].trim();
      if (/#$/.test(p)) {
        const g = Ky(p, "#");
        (this.options.pedantic || !g || / $/.test(g)) && (p = g.trim());
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
      const p = Ky(f[0].replace(/^ *>[ \t]?/gm, ""), `
`), g = this.lexer.state.top;
      this.lexer.state.top = !0;
      const b = this.lexer.blockTokens(p);
      return this.lexer.state.top = g, {
        type: "blockquote",
        raw: f[0],
        tokens: b,
        text: p
      };
    }
  }
  list(u) {
    let f = this.rules.block.list.exec(u);
    if (f) {
      let p = f[1].trim();
      const g = p.length > 1, b = {
        type: "list",
        raw: "",
        ordered: g,
        start: g ? +p.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      p = g ? `\\d{1,9}\\${p.slice(-1)}` : `\\${p}`, this.options.pedantic && (p = g ? p : "[*+-]");
      const E = new RegExp(`^( {0,3}${p})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let y = "", T = "", A = !1;
      for (; u; ) {
        let k = !1;
        if (!(f = E.exec(u)) || this.rules.block.hr.test(u))
          break;
        y = f[0], u = u.substring(y.length);
        let D = f[2].split(`
`, 1)[0].replace(/^\t+/, (Le) => " ".repeat(3 * Le.length)), M = u.split(`
`, 1)[0], I = 0;
        this.options.pedantic ? (I = 2, T = D.trimStart()) : (I = f[2].search(/[^ ]/), I = I > 4 ? 1 : I, T = D.slice(I), I += f[1].length);
        let B = !1;
        if (!D && /^ *$/.test(M) && (y += M + `
`, u = u.substring(M.length + 1), k = !0), !k) {
          const Le = new RegExp(`^ {0,${Math.min(3, I - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), Ke = new RegExp(`^ {0,${Math.min(3, I - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), ze = new RegExp(`^ {0,${Math.min(3, I - 1)}}(?:\`\`\`|~~~)`), Be = new RegExp(`^ {0,${Math.min(3, I - 1)}}#`);
          for (; u; ) {
            const ue = u.split(`
`, 1)[0];
            if (M = ue, this.options.pedantic && (M = M.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), ze.test(M) || Be.test(M) || Le.test(M) || Ke.test(u))
              break;
            if (M.search(/[^ ]/) >= I || !M.trim())
              T += `
` + M.slice(I);
            else {
              if (B || D.search(/[^ ]/) >= 4 || ze.test(D) || Be.test(D) || Ke.test(D))
                break;
              T += `
` + M;
            }
            !B && !M.trim() && (B = !0), y += ue + `
`, u = u.substring(ue.length + 1), D = M.slice(I);
          }
        }
        b.loose || (A ? b.loose = !0 : /\n *\n *$/.test(y) && (A = !0));
        let X = null, fe;
        this.options.gfm && (X = /^\[[ xX]\] /.exec(T), X && (fe = X[0] !== "[ ] ", T = T.replace(/^\[[ xX]\] +/, ""))), b.items.push({
          type: "list_item",
          raw: y,
          task: !!X,
          checked: fe,
          loose: !1,
          text: T,
          tokens: []
        }), b.raw += y;
      }
      b.items[b.items.length - 1].raw = y.trimEnd(), b.items[b.items.length - 1].text = T.trimEnd(), b.raw = b.raw.trimEnd();
      for (let k = 0; k < b.items.length; k++)
        if (this.lexer.state.top = !1, b.items[k].tokens = this.lexer.blockTokens(b.items[k].text, []), !b.loose) {
          const D = b.items[k].tokens.filter((I) => I.type === "space"), M = D.length > 0 && D.some((I) => /\n.*\n/.test(I.raw));
          b.loose = M;
        }
      if (b.loose)
        for (let k = 0; k < b.items.length; k++)
          b.items[k].loose = !0;
      return b;
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
      const p = f[1].toLowerCase().replace(/\s+/g, " "), g = f[2] ? f[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", b = f[3] ? f[3].substring(1, f[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : f[3];
      return {
        type: "def",
        tag: p,
        raw: f[0],
        href: g,
        title: b
      };
    }
  }
  table(u) {
    const f = this.rules.block.table.exec(u);
    if (!f || !/[:|]/.test(f[2]))
      return;
    const p = i1(f[1]), g = f[2].replace(/^\||\| *$/g, "").split("|"), b = f[3] && f[3].trim() ? f[3].replace(/\n[ \t]*$/, "").split(`
`) : [], E = {
      type: "table",
      raw: f[0],
      header: [],
      align: [],
      rows: []
    };
    if (p.length === g.length) {
      for (const y of g)
        /^ *-+: *$/.test(y) ? E.align.push("right") : /^ *:-+: *$/.test(y) ? E.align.push("center") : /^ *:-+ *$/.test(y) ? E.align.push("left") : E.align.push(null);
      for (const y of p)
        E.header.push({
          text: y,
          tokens: this.lexer.inline(y)
        });
      for (const y of b)
        E.rows.push(i1(y, E.header.length).map((T) => ({
          text: T,
          tokens: this.lexer.inline(T)
        })));
      return E;
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
        text: bi(f[1])
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
        const E = Ky(p.slice(0, -1), "\\");
        if ((p.length - E.length) % 2 === 0)
          return;
      } else {
        const E = iz(f[2], "()");
        if (E > -1) {
          const T = (f[0].indexOf("!") === 0 ? 5 : 4) + f[1].length + E;
          f[2] = f[2].substring(0, E), f[0] = f[0].substring(0, T).trim(), f[3] = "";
        }
      }
      let g = f[2], b = "";
      if (this.options.pedantic) {
        const E = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(g);
        E && (g = E[1], b = E[3]);
      } else
        b = f[3] ? f[3].slice(1, -1) : "";
      return g = g.trim(), /^</.test(g) && (this.options.pedantic && !/>$/.test(p) ? g = g.slice(1) : g = g.slice(1, -1)), o1(f, {
        href: g && g.replace(this.rules.inline.anyPunctuation, "$1"),
        title: b && b.replace(this.rules.inline.anyPunctuation, "$1")
      }, f[0], this.lexer);
    }
  }
  reflink(u, f) {
    let p;
    if ((p = this.rules.inline.reflink.exec(u)) || (p = this.rules.inline.nolink.exec(u))) {
      const g = (p[2] || p[1]).replace(/\s+/g, " "), b = f[g.toLowerCase()];
      if (!b) {
        const E = p[0].charAt(0);
        return {
          type: "text",
          raw: E,
          text: E
        };
      }
      return o1(p, b, p[0], this.lexer);
    }
  }
  emStrong(u, f, p = "") {
    let g = this.rules.inline.emStrongLDelim.exec(u);
    if (!g || g[3] && p.match(/[\p{L}\p{N}]/u))
      return;
    if (!(g[1] || g[2] || "") || !p || this.rules.inline.punctuation.exec(p)) {
      const E = [...g[0]].length - 1;
      let y, T, A = E, k = 0;
      const D = g[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (D.lastIndex = 0, f = f.slice(-1 * u.length + E); (g = D.exec(f)) != null; ) {
        if (y = g[1] || g[2] || g[3] || g[4] || g[5] || g[6], !y)
          continue;
        if (T = [...y].length, g[3] || g[4]) {
          A += T;
          continue;
        } else if ((g[5] || g[6]) && E % 3 && !((E + T) % 3)) {
          k += T;
          continue;
        }
        if (A -= T, A > 0)
          continue;
        T = Math.min(T, T + A + k);
        const M = [...g[0]][0].length, I = u.slice(0, E + g.index + M + T);
        if (Math.min(E, T) % 2) {
          const X = I.slice(1, -1);
          return {
            type: "em",
            raw: I,
            text: X,
            tokens: this.lexer.inlineTokens(X)
          };
        }
        const B = I.slice(2, -2);
        return {
          type: "strong",
          raw: I,
          text: B,
          tokens: this.lexer.inlineTokens(B)
        };
      }
    }
  }
  codespan(u) {
    const f = this.rules.inline.code.exec(u);
    if (f) {
      let p = f[2].replace(/\n/g, " ");
      const g = /[^ ]/.test(p), b = /^ /.test(p) && / $/.test(p);
      return g && b && (p = p.substring(1, p.length - 1)), p = bi(p, !0), {
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
      let p, g;
      return f[2] === "@" ? (p = bi(f[1]), g = "mailto:" + p) : (p = bi(f[1]), g = p), {
        type: "link",
        raw: f[0],
        text: p,
        href: g,
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
      let g, b;
      if (f[2] === "@")
        g = bi(f[0]), b = "mailto:" + g;
      else {
        let E;
        do
          E = f[0], f[0] = ((p = this.rules.inline._backpedal.exec(f[0])) == null ? void 0 : p[0]) ?? "";
        while (E !== f[0]);
        g = bi(f[0]), f[1] === "www." ? b = "http://" + f[0] : b = f[0];
      }
      return {
        type: "link",
        raw: f[0],
        text: g,
        href: b,
        tokens: [
          {
            type: "text",
            raw: g,
            text: g
          }
        ]
      };
    }
  }
  inlineText(u) {
    const f = this.rules.inline.text.exec(u);
    if (f) {
      let p;
      return this.lexer.state.inRawBlock ? p = f[0] : p = bi(f[0]), {
        type: "text",
        raw: f[0],
        text: p
      };
    }
  }
}
const lz = /^(?: *(?:\n|$))+/, uz = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, sz = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Zh = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, cz = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, sT = /(?:[*+-]|\d{1,9}[.)])/, cT = gn(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, sT).getRegex(), $b = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, fz = /^[^\n]+/, Bb = /(?!\s*\])(?:\\.|[^\[\]\\])+/, dz = gn(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Bb).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), pz = gn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, sT).getRegex(), wg = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Vb = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, hz = gn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Vb).replace("tag", wg).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), fT = gn($b).replace("hr", Zh).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wg).getRegex(), vz = gn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", fT).getRegex(), Ib = {
  blockquote: vz,
  code: uz,
  def: dz,
  fences: sz,
  heading: cz,
  hr: Zh,
  html: hz,
  lheading: cT,
  list: pz,
  newline: lz,
  paragraph: fT,
  table: Ih,
  text: fz
}, l1 = gn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Zh).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wg).getRegex(), mz = {
  ...Ib,
  table: l1,
  paragraph: gn($b).replace("hr", Zh).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", l1).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", wg).getRegex()
}, yz = {
  ...Ib,
  html: gn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Vb).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Ih,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: gn($b).replace("hr", Zh).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", cT).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, dT = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, gz = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, pT = /^( {2,}|\\)\n(?!\s*$)/, Sz = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ev = "\\p{P}\\p{S}", Ez = gn(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, ev).getRegex(), bz = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, wz = gn(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, ev).getRegex(), Cz = gn("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, ev).getRegex(), _z = gn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, ev).getRegex(), xz = gn(/\\([punct])/, "gu").replace(/punct/g, ev).getRegex(), Tz = gn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Rz = gn(Vb).replace("(?:-->|$)", "-->").getRegex(), kz = gn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Rz).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), cg = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Oz = gn(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", cg).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), hT = gn(/^!?\[(label)\]\[(ref)\]/).replace("label", cg).replace("ref", Bb).getRegex(), vT = gn(/^!?\[(ref)\](?:\[\])?/).replace("ref", Bb).getRegex(), Dz = gn("reflink|nolink(?!\\()", "g").replace("reflink", hT).replace("nolink", vT).getRegex(), Wb = {
  _backpedal: Ih,
  // only used for GFM url
  anyPunctuation: xz,
  autolink: Tz,
  blockSkip: bz,
  br: pT,
  code: gz,
  del: Ih,
  emStrongLDelim: wz,
  emStrongRDelimAst: Cz,
  emStrongRDelimUnd: _z,
  escape: dT,
  link: Oz,
  nolink: vT,
  punctuation: Ez,
  reflink: hT,
  reflinkSearch: Dz,
  tag: kz,
  text: Sz,
  url: Ih
}, Nz = {
  ...Wb,
  link: gn(/^!?\[(label)\]\((.*?)\)/).replace("label", cg).getRegex(),
  reflink: gn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", cg).getRegex()
}, Cb = {
  ...Wb,
  escape: gn(dT).replace("])", "~|])").getRegex(),
  url: gn(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Az = {
  ...Cb,
  br: gn(pT).replace("{2,}", "*").getRegex(),
  text: gn(Cb.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Xy = {
  normal: Ib,
  gfm: mz,
  pedantic: yz
}, $h = {
  normal: Wb,
  gfm: Cb,
  breaks: Az,
  pedantic: Nz
};
class gl {
  constructor(u) {
    An(this, "tokens");
    An(this, "options");
    An(this, "state");
    An(this, "tokenizer");
    An(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = u || Kc, this.options.tokenizer = this.options.tokenizer || new sg(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const f = {
      block: Xy.normal,
      inline: $h.normal
    };
    this.options.pedantic ? (f.block = Xy.pedantic, f.inline = $h.pedantic) : this.options.gfm && (f.block = Xy.gfm, this.options.breaks ? f.inline = $h.breaks : f.inline = $h.gfm), this.tokenizer.rules = f;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Xy,
      inline: $h
    };
  }
  /**
   * Static Lex Method
   */
  static lex(u, f) {
    return new gl(f).lex(u);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(u, f) {
    return new gl(f).inlineTokens(u);
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
    this.options.pedantic ? u = u.replace(/\t/g, "    ").replace(/^ +$/gm, "") : u = u.replace(/^( *)(\t+)/gm, (y, T, A) => T + "    ".repeat(A.length));
    let p, g, b, E;
    for (; u; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((y) => (p = y.call({ lexer: this }, u, f)) ? (u = u.substring(p.raw.length), f.push(p), !0) : !1))) {
        if (p = this.tokenizer.space(u)) {
          u = u.substring(p.raw.length), p.raw.length === 1 && f.length > 0 ? f[f.length - 1].raw += `
` : f.push(p);
          continue;
        }
        if (p = this.tokenizer.code(u)) {
          u = u.substring(p.raw.length), g = f[f.length - 1], g && (g.type === "paragraph" || g.type === "text") ? (g.raw += `
` + p.raw, g.text += `
` + p.text, this.inlineQueue[this.inlineQueue.length - 1].src = g.text) : f.push(p);
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
          u = u.substring(p.raw.length), g = f[f.length - 1], g && (g.type === "paragraph" || g.type === "text") ? (g.raw += `
` + p.raw, g.text += `
` + p.raw, this.inlineQueue[this.inlineQueue.length - 1].src = g.text) : this.tokens.links[p.tag] || (this.tokens.links[p.tag] = {
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
        if (b = u, this.options.extensions && this.options.extensions.startBlock) {
          let y = 1 / 0;
          const T = u.slice(1);
          let A;
          this.options.extensions.startBlock.forEach((k) => {
            A = k.call({ lexer: this }, T), typeof A == "number" && A >= 0 && (y = Math.min(y, A));
          }), y < 1 / 0 && y >= 0 && (b = u.substring(0, y + 1));
        }
        if (this.state.top && (p = this.tokenizer.paragraph(b))) {
          g = f[f.length - 1], E && g.type === "paragraph" ? (g.raw += `
` + p.raw, g.text += `
` + p.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = g.text) : f.push(p), E = b.length !== u.length, u = u.substring(p.raw.length);
          continue;
        }
        if (p = this.tokenizer.text(u)) {
          u = u.substring(p.raw.length), g = f[f.length - 1], g && g.type === "text" ? (g.raw += `
` + p.raw, g.text += `
` + p.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = g.text) : f.push(p);
          continue;
        }
        if (u) {
          const y = "Infinite loop on byte: " + u.charCodeAt(0);
          if (this.options.silent) {
            console.error(y);
            break;
          } else
            throw new Error(y);
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
    let p, g, b, E = u, y, T, A;
    if (this.tokens.links) {
      const k = Object.keys(this.tokens.links);
      if (k.length > 0)
        for (; (y = this.tokenizer.rules.inline.reflinkSearch.exec(E)) != null; )
          k.includes(y[0].slice(y[0].lastIndexOf("[") + 1, -1)) && (E = E.slice(0, y.index) + "[" + "a".repeat(y[0].length - 2) + "]" + E.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (y = this.tokenizer.rules.inline.blockSkip.exec(E)) != null; )
      E = E.slice(0, y.index) + "[" + "a".repeat(y[0].length - 2) + "]" + E.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (y = this.tokenizer.rules.inline.anyPunctuation.exec(E)) != null; )
      E = E.slice(0, y.index) + "++" + E.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; u; )
      if (T || (A = ""), T = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((k) => (p = k.call({ lexer: this }, u, f)) ? (u = u.substring(p.raw.length), f.push(p), !0) : !1))) {
        if (p = this.tokenizer.escape(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.tag(u)) {
          u = u.substring(p.raw.length), g = f[f.length - 1], g && p.type === "text" && g.type === "text" ? (g.raw += p.raw, g.text += p.text) : f.push(p);
          continue;
        }
        if (p = this.tokenizer.link(u)) {
          u = u.substring(p.raw.length), f.push(p);
          continue;
        }
        if (p = this.tokenizer.reflink(u, this.tokens.links)) {
          u = u.substring(p.raw.length), g = f[f.length - 1], g && p.type === "text" && g.type === "text" ? (g.raw += p.raw, g.text += p.text) : f.push(p);
          continue;
        }
        if (p = this.tokenizer.emStrong(u, E, A)) {
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
        if (b = u, this.options.extensions && this.options.extensions.startInline) {
          let k = 1 / 0;
          const D = u.slice(1);
          let M;
          this.options.extensions.startInline.forEach((I) => {
            M = I.call({ lexer: this }, D), typeof M == "number" && M >= 0 && (k = Math.min(k, M));
          }), k < 1 / 0 && k >= 0 && (b = u.substring(0, k + 1));
        }
        if (p = this.tokenizer.inlineText(b)) {
          u = u.substring(p.raw.length), p.raw.slice(-1) !== "_" && (A = p.raw.slice(-1)), T = !0, g = f[f.length - 1], g && g.type === "text" ? (g.raw += p.raw, g.text += p.text) : f.push(p);
          continue;
        }
        if (u) {
          const k = "Infinite loop on byte: " + u.charCodeAt(0);
          if (this.options.silent) {
            console.error(k);
            break;
          } else
            throw new Error(k);
        }
      }
    return f;
  }
}
class fg {
  constructor(u) {
    An(this, "options");
    this.options = u || Kc;
  }
  code(u, f, p) {
    var b;
    const g = (b = (f || "").match(/^\S*/)) == null ? void 0 : b[0];
    return u = u.replace(/\n$/, "") + `
`, g ? '<pre><code class="language-' + bi(g) + '">' + (p ? u : bi(u, !0)) + `</code></pre>
` : "<pre><code>" + (p ? u : bi(u, !0)) + `</code></pre>
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
    const g = f ? "ol" : "ul", b = f && p !== 1 ? ' start="' + p + '"' : "";
    return "<" + g + b + `>
` + u + "</" + g + `>
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
    const g = a1(u);
    if (g === null)
      return p;
    u = g;
    let b = '<a href="' + u + '"';
    return f && (b += ' title="' + f + '"'), b += ">" + p + "</a>", b;
  }
  image(u, f, p) {
    const g = a1(u);
    if (g === null)
      return p;
    u = g;
    let b = `<img src="${u}" alt="${p}"`;
    return f && (b += ` title="${f}"`), b += ">", b;
  }
  text(u) {
    return u;
  }
}
class Yb {
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
class Sl {
  constructor(u) {
    An(this, "options");
    An(this, "renderer");
    An(this, "textRenderer");
    this.options = u || Kc, this.options.renderer = this.options.renderer || new fg(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Yb();
  }
  /**
   * Static Parse Method
   */
  static parse(u, f) {
    return new Sl(f).parse(u);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(u, f) {
    return new Sl(f).parseInline(u);
  }
  /**
   * Parse Loop
   */
  parse(u, f = !0) {
    let p = "";
    for (let g = 0; g < u.length; g++) {
      const b = u[g];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[b.type]) {
        const E = b, y = this.options.extensions.renderers[E.type].call({ parser: this }, E);
        if (y !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(E.type)) {
          p += y || "";
          continue;
        }
      }
      switch (b.type) {
        case "space":
          continue;
        case "hr": {
          p += this.renderer.hr();
          continue;
        }
        case "heading": {
          const E = b;
          p += this.renderer.heading(this.parseInline(E.tokens), E.depth, rz(this.parseInline(E.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const E = b;
          p += this.renderer.code(E.text, E.lang, !!E.escaped);
          continue;
        }
        case "table": {
          const E = b;
          let y = "", T = "";
          for (let k = 0; k < E.header.length; k++)
            T += this.renderer.tablecell(this.parseInline(E.header[k].tokens), { header: !0, align: E.align[k] });
          y += this.renderer.tablerow(T);
          let A = "";
          for (let k = 0; k < E.rows.length; k++) {
            const D = E.rows[k];
            T = "";
            for (let M = 0; M < D.length; M++)
              T += this.renderer.tablecell(this.parseInline(D[M].tokens), { header: !1, align: E.align[M] });
            A += this.renderer.tablerow(T);
          }
          p += this.renderer.table(y, A);
          continue;
        }
        case "blockquote": {
          const E = b, y = this.parse(E.tokens);
          p += this.renderer.blockquote(y);
          continue;
        }
        case "list": {
          const E = b, y = E.ordered, T = E.start, A = E.loose;
          let k = "";
          for (let D = 0; D < E.items.length; D++) {
            const M = E.items[D], I = M.checked, B = M.task;
            let X = "";
            if (M.task) {
              const fe = this.renderer.checkbox(!!I);
              A ? M.tokens.length > 0 && M.tokens[0].type === "paragraph" ? (M.tokens[0].text = fe + " " + M.tokens[0].text, M.tokens[0].tokens && M.tokens[0].tokens.length > 0 && M.tokens[0].tokens[0].type === "text" && (M.tokens[0].tokens[0].text = fe + " " + M.tokens[0].tokens[0].text)) : M.tokens.unshift({
                type: "text",
                text: fe + " "
              }) : X += fe + " ";
            }
            X += this.parse(M.tokens, A), k += this.renderer.listitem(X, B, !!I);
          }
          p += this.renderer.list(k, y, T);
          continue;
        }
        case "html": {
          const E = b;
          p += this.renderer.html(E.text, E.block);
          continue;
        }
        case "paragraph": {
          const E = b;
          p += this.renderer.paragraph(this.parseInline(E.tokens));
          continue;
        }
        case "text": {
          let E = b, y = E.tokens ? this.parseInline(E.tokens) : E.text;
          for (; g + 1 < u.length && u[g + 1].type === "text"; )
            E = u[++g], y += `
` + (E.tokens ? this.parseInline(E.tokens) : E.text);
          p += f ? this.renderer.paragraph(y) : y;
          continue;
        }
        default: {
          const E = 'Token with "' + b.type + '" type was not found.';
          if (this.options.silent)
            return console.error(E), "";
          throw new Error(E);
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
    for (let g = 0; g < u.length; g++) {
      const b = u[g];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[b.type]) {
        const E = this.options.extensions.renderers[b.type].call({ parser: this }, b);
        if (E !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(b.type)) {
          p += E || "";
          continue;
        }
      }
      switch (b.type) {
        case "escape": {
          const E = b;
          p += f.text(E.text);
          break;
        }
        case "html": {
          const E = b;
          p += f.html(E.text);
          break;
        }
        case "link": {
          const E = b;
          p += f.link(E.href, E.title, this.parseInline(E.tokens, f));
          break;
        }
        case "image": {
          const E = b;
          p += f.image(E.href, E.title, E.text);
          break;
        }
        case "strong": {
          const E = b;
          p += f.strong(this.parseInline(E.tokens, f));
          break;
        }
        case "em": {
          const E = b;
          p += f.em(this.parseInline(E.tokens, f));
          break;
        }
        case "codespan": {
          const E = b;
          p += f.codespan(E.text);
          break;
        }
        case "br": {
          p += f.br();
          break;
        }
        case "del": {
          const E = b;
          p += f.del(this.parseInline(E.tokens, f));
          break;
        }
        case "text": {
          const E = b;
          p += f.text(E.text);
          break;
        }
        default: {
          const E = 'Token with "' + b.type + '" type was not found.';
          if (this.options.silent)
            return console.error(E), "";
          throw new Error(E);
        }
      }
    }
    return p;
  }
}
class Wh {
  constructor(u) {
    An(this, "options");
    this.options = u || Kc;
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
An(Wh, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var Gh, _b, vg, mT;
class Mz {
  constructor(...u) {
    GE(this, Gh);
    GE(this, vg);
    An(this, "defaults", Hb());
    An(this, "options", this.setOptions);
    An(this, "parse", Wy(this, Gh, _b).call(this, gl.lex, Sl.parse));
    An(this, "parseInline", Wy(this, Gh, _b).call(this, gl.lexInline, Sl.parseInline));
    An(this, "Parser", Sl);
    An(this, "Renderer", fg);
    An(this, "TextRenderer", Yb);
    An(this, "Lexer", gl);
    An(this, "Tokenizer", sg);
    An(this, "Hooks", Wh);
    this.use(...u);
  }
  /**
   * Run callback for every token
   */
  walkTokens(u, f) {
    var g, b;
    let p = [];
    for (const E of u)
      switch (p = p.concat(f.call(this, E)), E.type) {
        case "table": {
          const y = E;
          for (const T of y.header)
            p = p.concat(this.walkTokens(T.tokens, f));
          for (const T of y.rows)
            for (const A of T)
              p = p.concat(this.walkTokens(A.tokens, f));
          break;
        }
        case "list": {
          const y = E;
          p = p.concat(this.walkTokens(y.items, f));
          break;
        }
        default: {
          const y = E;
          (b = (g = this.defaults.extensions) == null ? void 0 : g.childTokens) != null && b[y.type] ? this.defaults.extensions.childTokens[y.type].forEach((T) => {
            const A = y[T].flat(1 / 0);
            p = p.concat(this.walkTokens(A, f));
          }) : y.tokens && (p = p.concat(this.walkTokens(y.tokens, f)));
        }
      }
    return p;
  }
  use(...u) {
    const f = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return u.forEach((p) => {
      const g = { ...p };
      if (g.async = this.defaults.async || g.async || !1, p.extensions && (p.extensions.forEach((b) => {
        if (!b.name)
          throw new Error("extension name required");
        if ("renderer" in b) {
          const E = f.renderers[b.name];
          E ? f.renderers[b.name] = function(...y) {
            let T = b.renderer.apply(this, y);
            return T === !1 && (T = E.apply(this, y)), T;
          } : f.renderers[b.name] = b.renderer;
        }
        if ("tokenizer" in b) {
          if (!b.level || b.level !== "block" && b.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const E = f[b.level];
          E ? E.unshift(b.tokenizer) : f[b.level] = [b.tokenizer], b.start && (b.level === "block" ? f.startBlock ? f.startBlock.push(b.start) : f.startBlock = [b.start] : b.level === "inline" && (f.startInline ? f.startInline.push(b.start) : f.startInline = [b.start]));
        }
        "childTokens" in b && b.childTokens && (f.childTokens[b.name] = b.childTokens);
      }), g.extensions = f), p.renderer) {
        const b = this.defaults.renderer || new fg(this.defaults);
        for (const E in p.renderer) {
          if (!(E in b))
            throw new Error(`renderer '${E}' does not exist`);
          if (E === "options")
            continue;
          const y = E, T = p.renderer[y], A = b[y];
          b[y] = (...k) => {
            let D = T.apply(b, k);
            return D === !1 && (D = A.apply(b, k)), D || "";
          };
        }
        g.renderer = b;
      }
      if (p.tokenizer) {
        const b = this.defaults.tokenizer || new sg(this.defaults);
        for (const E in p.tokenizer) {
          if (!(E in b))
            throw new Error(`tokenizer '${E}' does not exist`);
          if (["options", "rules", "lexer"].includes(E))
            continue;
          const y = E, T = p.tokenizer[y], A = b[y];
          b[y] = (...k) => {
            let D = T.apply(b, k);
            return D === !1 && (D = A.apply(b, k)), D;
          };
        }
        g.tokenizer = b;
      }
      if (p.hooks) {
        const b = this.defaults.hooks || new Wh();
        for (const E in p.hooks) {
          if (!(E in b))
            throw new Error(`hook '${E}' does not exist`);
          if (E === "options")
            continue;
          const y = E, T = p.hooks[y], A = b[y];
          Wh.passThroughHooks.has(E) ? b[y] = (k) => {
            if (this.defaults.async)
              return Promise.resolve(T.call(b, k)).then((M) => A.call(b, M));
            const D = T.call(b, k);
            return A.call(b, D);
          } : b[y] = (...k) => {
            let D = T.apply(b, k);
            return D === !1 && (D = A.apply(b, k)), D;
          };
        }
        g.hooks = b;
      }
      if (p.walkTokens) {
        const b = this.defaults.walkTokens, E = p.walkTokens;
        g.walkTokens = function(y) {
          let T = [];
          return T.push(E.call(this, y)), b && (T = T.concat(b.call(this, y))), T;
        };
      }
      this.defaults = { ...this.defaults, ...g };
    }), this;
  }
  setOptions(u) {
    return this.defaults = { ...this.defaults, ...u }, this;
  }
  lexer(u, f) {
    return gl.lex(u, f ?? this.defaults);
  }
  parser(u, f) {
    return Sl.parse(u, f ?? this.defaults);
  }
}
Gh = new WeakSet(), _b = function(u, f) {
  return (p, g) => {
    const b = { ...g }, E = { ...this.defaults, ...b };
    this.defaults.async === !0 && b.async === !1 && (E.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), E.async = !0);
    const y = Wy(this, vg, mT).call(this, !!E.silent, !!E.async);
    if (typeof p > "u" || p === null)
      return y(new Error("marked(): input parameter is undefined or null"));
    if (typeof p != "string")
      return y(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(p) + ", string expected"));
    if (E.hooks && (E.hooks.options = E), E.async)
      return Promise.resolve(E.hooks ? E.hooks.preprocess(p) : p).then((T) => u(T, E)).then((T) => E.hooks ? E.hooks.processAllTokens(T) : T).then((T) => E.walkTokens ? Promise.all(this.walkTokens(T, E.walkTokens)).then(() => T) : T).then((T) => f(T, E)).then((T) => E.hooks ? E.hooks.postprocess(T) : T).catch(y);
    try {
      E.hooks && (p = E.hooks.preprocess(p));
      let T = u(p, E);
      E.hooks && (T = E.hooks.processAllTokens(T)), E.walkTokens && this.walkTokens(T, E.walkTokens);
      let A = f(T, E);
      return E.hooks && (A = E.hooks.postprocess(A)), A;
    } catch (T) {
      return y(T);
    }
  };
}, vg = new WeakSet(), mT = function(u, f) {
  return (p) => {
    if (p.message += `
Please report this to https://github.com/markedjs/marked.`, u) {
      const g = "<p>An error occurred:</p><pre>" + bi(p.message + "", !0) + "</pre>";
      return f ? Promise.resolve(g) : g;
    }
    if (f)
      return Promise.reject(p);
    throw p;
  };
};
const Yc = new Mz();
function fn(s, u) {
  return Yc.parse(s, u);
}
fn.options = fn.setOptions = function(s) {
  return Yc.setOptions(s), fn.defaults = Yc.defaults, oT(fn.defaults), fn;
};
fn.getDefaults = Hb;
fn.defaults = Kc;
fn.use = function(...s) {
  return Yc.use(...s), fn.defaults = Yc.defaults, oT(fn.defaults), fn;
};
fn.walkTokens = function(s, u) {
  return Yc.walkTokens(s, u);
};
fn.parseInline = Yc.parseInline;
fn.Parser = Sl;
fn.parser = Sl.parse;
fn.Renderer = fg;
fn.TextRenderer = Yb;
fn.Lexer = gl;
fn.lexer = gl.lex;
fn.Tokenizer = sg;
fn.Hooks = Wh;
fn.parse = fn;
fn.options;
fn.setOptions;
fn.use;
fn.walkTokens;
fn.parseInline;
Sl.parse;
gl.lex;
var xb = { exports: {} }, qc = {}, Tb = { exports: {} }, Jy = { exports: {} }, ln = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u1;
function Lz() {
  if (u1)
    return ln;
  u1 = 1;
  var s = typeof Symbol == "function" && Symbol.for, u = s ? Symbol.for("react.element") : 60103, f = s ? Symbol.for("react.portal") : 60106, p = s ? Symbol.for("react.fragment") : 60107, g = s ? Symbol.for("react.strict_mode") : 60108, b = s ? Symbol.for("react.profiler") : 60114, E = s ? Symbol.for("react.provider") : 60109, y = s ? Symbol.for("react.context") : 60110, T = s ? Symbol.for("react.async_mode") : 60111, A = s ? Symbol.for("react.concurrent_mode") : 60111, k = s ? Symbol.for("react.forward_ref") : 60112, D = s ? Symbol.for("react.suspense") : 60113, M = s ? Symbol.for("react.suspense_list") : 60120, I = s ? Symbol.for("react.memo") : 60115, B = s ? Symbol.for("react.lazy") : 60116, X = s ? Symbol.for("react.block") : 60121, fe = s ? Symbol.for("react.fundamental") : 60117, Le = s ? Symbol.for("react.responder") : 60118, Ke = s ? Symbol.for("react.scope") : 60119;
  function ze(ue) {
    if (typeof ue == "object" && ue !== null) {
      var Ue = ue.$$typeof;
      switch (Ue) {
        case u:
          switch (ue = ue.type, ue) {
            case T:
            case A:
            case p:
            case b:
            case g:
            case D:
              return ue;
            default:
              switch (ue = ue && ue.$$typeof, ue) {
                case y:
                case k:
                case B:
                case I:
                case E:
                  return ue;
                default:
                  return Ue;
              }
          }
        case f:
          return Ue;
      }
    }
  }
  function Be(ue) {
    return ze(ue) === A;
  }
  return ln.AsyncMode = T, ln.ConcurrentMode = A, ln.ContextConsumer = y, ln.ContextProvider = E, ln.Element = u, ln.ForwardRef = k, ln.Fragment = p, ln.Lazy = B, ln.Memo = I, ln.Portal = f, ln.Profiler = b, ln.StrictMode = g, ln.Suspense = D, ln.isAsyncMode = function(ue) {
    return Be(ue) || ze(ue) === T;
  }, ln.isConcurrentMode = Be, ln.isContextConsumer = function(ue) {
    return ze(ue) === y;
  }, ln.isContextProvider = function(ue) {
    return ze(ue) === E;
  }, ln.isElement = function(ue) {
    return typeof ue == "object" && ue !== null && ue.$$typeof === u;
  }, ln.isForwardRef = function(ue) {
    return ze(ue) === k;
  }, ln.isFragment = function(ue) {
    return ze(ue) === p;
  }, ln.isLazy = function(ue) {
    return ze(ue) === B;
  }, ln.isMemo = function(ue) {
    return ze(ue) === I;
  }, ln.isPortal = function(ue) {
    return ze(ue) === f;
  }, ln.isProfiler = function(ue) {
    return ze(ue) === b;
  }, ln.isStrictMode = function(ue) {
    return ze(ue) === g;
  }, ln.isSuspense = function(ue) {
    return ze(ue) === D;
  }, ln.isValidElementType = function(ue) {
    return typeof ue == "string" || typeof ue == "function" || ue === p || ue === A || ue === b || ue === g || ue === D || ue === M || typeof ue == "object" && ue !== null && (ue.$$typeof === B || ue.$$typeof === I || ue.$$typeof === E || ue.$$typeof === y || ue.$$typeof === k || ue.$$typeof === fe || ue.$$typeof === Le || ue.$$typeof === Ke || ue.$$typeof === X);
  }, ln.typeOf = ze, ln;
}
var un = {}, s1;
function zz() {
  if (s1)
    return un;
  s1 = 1;
  var s = {};
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return s.NODE_ENV !== "production" && function() {
    var u = typeof Symbol == "function" && Symbol.for, f = u ? Symbol.for("react.element") : 60103, p = u ? Symbol.for("react.portal") : 60106, g = u ? Symbol.for("react.fragment") : 60107, b = u ? Symbol.for("react.strict_mode") : 60108, E = u ? Symbol.for("react.profiler") : 60114, y = u ? Symbol.for("react.provider") : 60109, T = u ? Symbol.for("react.context") : 60110, A = u ? Symbol.for("react.async_mode") : 60111, k = u ? Symbol.for("react.concurrent_mode") : 60111, D = u ? Symbol.for("react.forward_ref") : 60112, M = u ? Symbol.for("react.suspense") : 60113, I = u ? Symbol.for("react.suspense_list") : 60120, B = u ? Symbol.for("react.memo") : 60115, X = u ? Symbol.for("react.lazy") : 60116, fe = u ? Symbol.for("react.block") : 60121, Le = u ? Symbol.for("react.fundamental") : 60117, Ke = u ? Symbol.for("react.responder") : 60118, ze = u ? Symbol.for("react.scope") : 60119;
    function Be(Re) {
      return typeof Re == "string" || typeof Re == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Re === g || Re === k || Re === E || Re === b || Re === M || Re === I || typeof Re == "object" && Re !== null && (Re.$$typeof === X || Re.$$typeof === B || Re.$$typeof === y || Re.$$typeof === T || Re.$$typeof === D || Re.$$typeof === Le || Re.$$typeof === Ke || Re.$$typeof === ze || Re.$$typeof === fe);
    }
    function ue(Re) {
      if (typeof Re == "object" && Re !== null) {
        var $t = Re.$$typeof;
        switch ($t) {
          case f:
            var Mn = Re.type;
            switch (Mn) {
              case A:
              case k:
              case g:
              case E:
              case b:
              case M:
                return Mn;
              default:
                var Ln = Mn && Mn.$$typeof;
                switch (Ln) {
                  case T:
                  case D:
                  case X:
                  case B:
                  case y:
                    return Ln;
                  default:
                    return $t;
                }
            }
          case p:
            return $t;
        }
      }
    }
    var Ue = A, gt = k, Z = T, xe = y, De = f, Te = D, we = g, Ne = X, le = B, re = p, ve = E, pe = b, O = M, ae = !1;
    function L(Re) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), j(Re) || ue(Re) === A;
    }
    function j(Re) {
      return ue(Re) === k;
    }
    function ee(Re) {
      return ue(Re) === T;
    }
    function be(Re) {
      return ue(Re) === y;
    }
    function Se(Re) {
      return typeof Re == "object" && Re !== null && Re.$$typeof === f;
    }
    function ke(Re) {
      return ue(Re) === D;
    }
    function He(Re) {
      return ue(Re) === g;
    }
    function Pe(Re) {
      return ue(Re) === X;
    }
    function Ae(Re) {
      return ue(Re) === B;
    }
    function ot(Re) {
      return ue(Re) === p;
    }
    function St(Re) {
      return ue(Re) === E;
    }
    function vt(Re) {
      return ue(Re) === b;
    }
    function Zt(Re) {
      return ue(Re) === M;
    }
    un.AsyncMode = Ue, un.ConcurrentMode = gt, un.ContextConsumer = Z, un.ContextProvider = xe, un.Element = De, un.ForwardRef = Te, un.Fragment = we, un.Lazy = Ne, un.Memo = le, un.Portal = re, un.Profiler = ve, un.StrictMode = pe, un.Suspense = O, un.isAsyncMode = L, un.isConcurrentMode = j, un.isContextConsumer = ee, un.isContextProvider = be, un.isElement = Se, un.isForwardRef = ke, un.isFragment = He, un.isLazy = Pe, un.isMemo = Ae, un.isPortal = ot, un.isProfiler = St, un.isStrictMode = vt, un.isSuspense = Zt, un.isValidElementType = Be, un.typeOf = ue;
  }(), un;
}
var c1;
function yT() {
  if (c1)
    return Jy.exports;
  c1 = 1;
  var s = {};
  return s.NODE_ENV === "production" ? Jy.exports = Lz() : Jy.exports = zz(), Jy.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ob, f1;
function Uz() {
  if (f1)
    return ob;
  f1 = 1;
  var s = Object.getOwnPropertySymbols, u = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function p(b) {
    if (b == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(b);
  }
  function g() {
    try {
      if (!Object.assign)
        return !1;
      var b = new String("abc");
      if (b[5] = "de", Object.getOwnPropertyNames(b)[0] === "5")
        return !1;
      for (var E = {}, y = 0; y < 10; y++)
        E["_" + String.fromCharCode(y)] = y;
      var T = Object.getOwnPropertyNames(E).map(function(k) {
        return E[k];
      });
      if (T.join("") !== "0123456789")
        return !1;
      var A = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(k) {
        A[k] = k;
      }), Object.keys(Object.assign({}, A)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ob = g() ? Object.assign : function(b, E) {
    for (var y, T = p(b), A, k = 1; k < arguments.length; k++) {
      y = Object(arguments[k]);
      for (var D in y)
        u.call(y, D) && (T[D] = y[D]);
      if (s) {
        A = s(y);
        for (var M = 0; M < A.length; M++)
          f.call(y, A[M]) && (T[A[M]] = y[A[M]]);
      }
    }
    return T;
  }, ob;
}
var lb, d1;
function qb() {
  if (d1)
    return lb;
  d1 = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lb = s, lb;
}
var ub, p1;
function gT() {
  return p1 || (p1 = 1, ub = Function.call.bind(Object.prototype.hasOwnProperty)), ub;
}
var sb, h1;
function jz() {
  if (h1)
    return sb;
  h1 = 1;
  var s = {}, u = function() {
  };
  if (s.NODE_ENV !== "production") {
    var f = qb(), p = {}, g = gT();
    u = function(E) {
      var y = "Warning: " + E;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function b(E, y, T, A, k) {
    if (s.NODE_ENV !== "production") {
      for (var D in E)
        if (g(E, D)) {
          var M;
          try {
            if (typeof E[D] != "function") {
              var I = Error(
                (A || "React class") + ": " + T + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw I.name = "Invariant Violation", I;
            }
            M = E[D](y, D, A, T, null, f);
          } catch (X) {
            M = X;
          }
          if (M && !(M instanceof Error) && u(
            (A || "React class") + ": type specification of " + T + " `" + D + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof M + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), M instanceof Error && !(M.message in p)) {
            p[M.message] = !0;
            var B = k ? k() : "";
            u(
              "Failed " + T + " type: " + M.message + (B ?? "")
            );
          }
        }
    }
  }
  return b.resetWarningCache = function() {
    s.NODE_ENV !== "production" && (p = {});
  }, sb = b, sb;
}
var cb, v1;
function Pz() {
  if (v1)
    return cb;
  v1 = 1;
  var s = {}, u = yT(), f = Uz(), p = qb(), g = gT(), b = jz(), E = function() {
  };
  s.NODE_ENV !== "production" && (E = function(T) {
    var A = "Warning: " + T;
    typeof console < "u" && console.error(A);
    try {
      throw new Error(A);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return cb = function(T, A) {
    var k = typeof Symbol == "function" && Symbol.iterator, D = "@@iterator";
    function M(j) {
      var ee = j && (k && j[k] || j[D]);
      if (typeof ee == "function")
        return ee;
    }
    var I = "<<anonymous>>", B = {
      array: Ke("array"),
      bigint: Ke("bigint"),
      bool: Ke("boolean"),
      func: Ke("function"),
      number: Ke("number"),
      object: Ke("object"),
      string: Ke("string"),
      symbol: Ke("symbol"),
      any: ze(),
      arrayOf: Be,
      element: ue(),
      elementType: Ue(),
      instanceOf: gt,
      node: Te(),
      objectOf: xe,
      oneOf: Z,
      oneOfType: De,
      shape: Ne,
      exact: le
    };
    function X(j, ee) {
      return j === ee ? j !== 0 || 1 / j === 1 / ee : j !== j && ee !== ee;
    }
    function fe(j, ee) {
      this.message = j, this.data = ee && typeof ee == "object" ? ee : {}, this.stack = "";
    }
    fe.prototype = Error.prototype;
    function Le(j) {
      if (s.NODE_ENV !== "production")
        var ee = {}, be = 0;
      function Se(He, Pe, Ae, ot, St, vt, Zt) {
        if (ot = ot || I, vt = vt || Ae, Zt !== p) {
          if (A) {
            var Re = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Re.name = "Invariant Violation", Re;
          } else if (s.NODE_ENV !== "production" && typeof console < "u") {
            var $t = ot + ":" + Ae;
            !ee[$t] && // Avoid spamming the console because they are often not actionable except for lib authors
            be < 3 && (E(
              "You are manually calling a React.PropTypes validation function for the `" + vt + "` prop on `" + ot + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), ee[$t] = !0, be++);
          }
        }
        return Pe[Ae] == null ? He ? Pe[Ae] === null ? new fe("The " + St + " `" + vt + "` is marked as required " + ("in `" + ot + "`, but its value is `null`.")) : new fe("The " + St + " `" + vt + "` is marked as required in " + ("`" + ot + "`, but its value is `undefined`.")) : null : j(Pe, Ae, ot, St, vt);
      }
      var ke = Se.bind(null, !1);
      return ke.isRequired = Se.bind(null, !0), ke;
    }
    function Ke(j) {
      function ee(be, Se, ke, He, Pe, Ae) {
        var ot = be[Se], St = pe(ot);
        if (St !== j) {
          var vt = O(ot);
          return new fe(
            "Invalid " + He + " `" + Pe + "` of type " + ("`" + vt + "` supplied to `" + ke + "`, expected ") + ("`" + j + "`."),
            { expectedType: j }
          );
        }
        return null;
      }
      return Le(ee);
    }
    function ze() {
      return Le(y);
    }
    function Be(j) {
      function ee(be, Se, ke, He, Pe) {
        if (typeof j != "function")
          return new fe("Property `" + Pe + "` of component `" + ke + "` has invalid PropType notation inside arrayOf.");
        var Ae = be[Se];
        if (!Array.isArray(Ae)) {
          var ot = pe(Ae);
          return new fe("Invalid " + He + " `" + Pe + "` of type " + ("`" + ot + "` supplied to `" + ke + "`, expected an array."));
        }
        for (var St = 0; St < Ae.length; St++) {
          var vt = j(Ae, St, ke, He, Pe + "[" + St + "]", p);
          if (vt instanceof Error)
            return vt;
        }
        return null;
      }
      return Le(ee);
    }
    function ue() {
      function j(ee, be, Se, ke, He) {
        var Pe = ee[be];
        if (!T(Pe)) {
          var Ae = pe(Pe);
          return new fe("Invalid " + ke + " `" + He + "` of type " + ("`" + Ae + "` supplied to `" + Se + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Le(j);
    }
    function Ue() {
      function j(ee, be, Se, ke, He) {
        var Pe = ee[be];
        if (!u.isValidElementType(Pe)) {
          var Ae = pe(Pe);
          return new fe("Invalid " + ke + " `" + He + "` of type " + ("`" + Ae + "` supplied to `" + Se + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Le(j);
    }
    function gt(j) {
      function ee(be, Se, ke, He, Pe) {
        if (!(be[Se] instanceof j)) {
          var Ae = j.name || I, ot = L(be[Se]);
          return new fe("Invalid " + He + " `" + Pe + "` of type " + ("`" + ot + "` supplied to `" + ke + "`, expected ") + ("instance of `" + Ae + "`."));
        }
        return null;
      }
      return Le(ee);
    }
    function Z(j) {
      if (!Array.isArray(j))
        return s.NODE_ENV !== "production" && (arguments.length > 1 ? E(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : E("Invalid argument supplied to oneOf, expected an array.")), y;
      function ee(be, Se, ke, He, Pe) {
        for (var Ae = be[Se], ot = 0; ot < j.length; ot++)
          if (X(Ae, j[ot]))
            return null;
        var St = JSON.stringify(j, function(Zt, Re) {
          var $t = O(Re);
          return $t === "symbol" ? String(Re) : Re;
        });
        return new fe("Invalid " + He + " `" + Pe + "` of value `" + String(Ae) + "` " + ("supplied to `" + ke + "`, expected one of " + St + "."));
      }
      return Le(ee);
    }
    function xe(j) {
      function ee(be, Se, ke, He, Pe) {
        if (typeof j != "function")
          return new fe("Property `" + Pe + "` of component `" + ke + "` has invalid PropType notation inside objectOf.");
        var Ae = be[Se], ot = pe(Ae);
        if (ot !== "object")
          return new fe("Invalid " + He + " `" + Pe + "` of type " + ("`" + ot + "` supplied to `" + ke + "`, expected an object."));
        for (var St in Ae)
          if (g(Ae, St)) {
            var vt = j(Ae, St, ke, He, Pe + "." + St, p);
            if (vt instanceof Error)
              return vt;
          }
        return null;
      }
      return Le(ee);
    }
    function De(j) {
      if (!Array.isArray(j))
        return s.NODE_ENV !== "production" && E("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var ee = 0; ee < j.length; ee++) {
        var be = j[ee];
        if (typeof be != "function")
          return E(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(be) + " at index " + ee + "."
          ), y;
      }
      function Se(ke, He, Pe, Ae, ot) {
        for (var St = [], vt = 0; vt < j.length; vt++) {
          var Zt = j[vt], Re = Zt(ke, He, Pe, Ae, ot, p);
          if (Re == null)
            return null;
          Re.data && g(Re.data, "expectedType") && St.push(Re.data.expectedType);
        }
        var $t = St.length > 0 ? ", expected one of type [" + St.join(", ") + "]" : "";
        return new fe("Invalid " + Ae + " `" + ot + "` supplied to " + ("`" + Pe + "`" + $t + "."));
      }
      return Le(Se);
    }
    function Te() {
      function j(ee, be, Se, ke, He) {
        return re(ee[be]) ? null : new fe("Invalid " + ke + " `" + He + "` supplied to " + ("`" + Se + "`, expected a ReactNode."));
      }
      return Le(j);
    }
    function we(j, ee, be, Se, ke) {
      return new fe(
        (j || "React class") + ": " + ee + " type `" + be + "." + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ke + "`."
      );
    }
    function Ne(j) {
      function ee(be, Se, ke, He, Pe) {
        var Ae = be[Se], ot = pe(Ae);
        if (ot !== "object")
          return new fe("Invalid " + He + " `" + Pe + "` of type `" + ot + "` " + ("supplied to `" + ke + "`, expected `object`."));
        for (var St in j) {
          var vt = j[St];
          if (typeof vt != "function")
            return we(ke, He, Pe, St, O(vt));
          var Zt = vt(Ae, St, ke, He, Pe + "." + St, p);
          if (Zt)
            return Zt;
        }
        return null;
      }
      return Le(ee);
    }
    function le(j) {
      function ee(be, Se, ke, He, Pe) {
        var Ae = be[Se], ot = pe(Ae);
        if (ot !== "object")
          return new fe("Invalid " + He + " `" + Pe + "` of type `" + ot + "` " + ("supplied to `" + ke + "`, expected `object`."));
        var St = f({}, be[Se], j);
        for (var vt in St) {
          var Zt = j[vt];
          if (g(j, vt) && typeof Zt != "function")
            return we(ke, He, Pe, vt, O(Zt));
          if (!Zt)
            return new fe(
              "Invalid " + He + " `" + Pe + "` key `" + vt + "` supplied to `" + ke + "`.\nBad object: " + JSON.stringify(be[Se], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(j), null, "  ")
            );
          var Re = Zt(Ae, vt, ke, He, Pe + "." + vt, p);
          if (Re)
            return Re;
        }
        return null;
      }
      return Le(ee);
    }
    function re(j) {
      switch (typeof j) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !j;
        case "object":
          if (Array.isArray(j))
            return j.every(re);
          if (j === null || T(j))
            return !0;
          var ee = M(j);
          if (ee) {
            var be = ee.call(j), Se;
            if (ee !== j.entries) {
              for (; !(Se = be.next()).done; )
                if (!re(Se.value))
                  return !1;
            } else
              for (; !(Se = be.next()).done; ) {
                var ke = Se.value;
                if (ke && !re(ke[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ve(j, ee) {
      return j === "symbol" ? !0 : ee ? ee["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && ee instanceof Symbol : !1;
    }
    function pe(j) {
      var ee = typeof j;
      return Array.isArray(j) ? "array" : j instanceof RegExp ? "object" : ve(ee, j) ? "symbol" : ee;
    }
    function O(j) {
      if (typeof j > "u" || j === null)
        return "" + j;
      var ee = pe(j);
      if (ee === "object") {
        if (j instanceof Date)
          return "date";
        if (j instanceof RegExp)
          return "regexp";
      }
      return ee;
    }
    function ae(j) {
      var ee = O(j);
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
    function L(j) {
      return !j.constructor || !j.constructor.name ? I : j.constructor.name;
    }
    return B.checkPropTypes = b, B.resetWarningCache = b.resetWarningCache, B.PropTypes = B, B;
  }, cb;
}
var fb, m1;
function Fz() {
  if (m1)
    return fb;
  m1 = 1;
  var s = qb();
  function u() {
  }
  function f() {
  }
  return f.resetWarningCache = u, fb = function() {
    function p(E, y, T, A, k, D) {
      if (D !== s) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
      }
    }
    p.isRequired = p;
    function g() {
      return p;
    }
    var b = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: g,
      element: p,
      elementType: p,
      instanceOf: g,
      node: p,
      objectOf: g,
      oneOf: g,
      oneOfType: g,
      shape: g,
      exact: g,
      checkPropTypes: f,
      resetWarningCache: u
    };
    return b.PropTypes = b, b;
  }, fb;
}
var Hz = {};
if (Hz.NODE_ENV !== "production") {
  var $z = yT(), Bz = !0;
  Tb.exports = Pz()($z.isElement, Bz);
} else
  Tb.exports = Fz()();
var ST = Tb.exports, Rb = { exports: {} }, No = {}, kb = { exports: {} };
(function(s, u) {
  Object.defineProperty(u, "__esModule", {
    value: !0
  }), u.default = k;
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
  var f = "none", p = "contents", g = /input|select|textarea|button|object|iframe/;
  function b(D, M) {
    return M.getPropertyValue("overflow") !== "visible" || // if 'overflow: visible' set, check if there is actually any overflow
    D.scrollWidth <= 0 && D.scrollHeight <= 0;
  }
  function E(D) {
    var M = D.offsetWidth <= 0 && D.offsetHeight <= 0;
    if (M && !D.innerHTML)
      return !0;
    try {
      var I = window.getComputedStyle(D), B = I.getPropertyValue("display");
      return M ? B !== p && b(D, I) : B === f;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function y(D) {
    for (var M = D, I = D.getRootNode && D.getRootNode(); M && M !== document.body; ) {
      if (I && M === I && (M = I.host.parentNode), E(M))
        return !1;
      M = M.parentNode;
    }
    return !0;
  }
  function T(D, M) {
    var I = D.nodeName.toLowerCase(), B = g.test(I) && !D.disabled || I === "a" && D.href || M;
    return B && y(D);
  }
  function A(D) {
    var M = D.getAttribute("tabindex");
    M === null && (M = void 0);
    var I = isNaN(M);
    return (I || M >= 0) && T(D, !I);
  }
  function k(D) {
    var M = [].slice.call(D.querySelectorAll("*"), 0).reduce(function(I, B) {
      return I.concat(B.shadowRoot ? k(B.shadowRoot) : [B]);
    }, []);
    return M.filter(A);
  }
  s.exports = u.default;
})(kb, kb.exports);
var ET = kb.exports, Vz = {};
Object.defineProperty(No, "__esModule", {
  value: !0
});
No.resetState = qz;
No.log = Qz;
No.handleBlur = qh;
No.handleFocus = Qh;
No.markForFocusLater = Gz;
No.returnFocus = Kz;
No.popWithoutFocus = Xz;
No.setupScopedFocus = Jz;
No.teardownScopedFocus = Zz;
var Iz = ET, Wz = Yz(Iz);
function Yz(s) {
  return s && s.__esModule ? s : { default: s };
}
var Qc = [], Md = null, Ob = !1;
function qz() {
  Qc = [];
}
function Qz() {
  Vz.NODE_ENV !== "production" && (console.log("focusManager ----------"), Qc.forEach(function(s) {
    var u = s || {};
    console.log(u.nodeName, u.className, u.id);
  }), console.log("end focusManager ----------"));
}
function qh() {
  Ob = !0;
}
function Qh() {
  if (Ob) {
    if (Ob = !1, !Md)
      return;
    setTimeout(function() {
      if (!Md.contains(document.activeElement)) {
        var s = (0, Wz.default)(Md)[0] || Md;
        s.focus();
      }
    }, 0);
  }
}
function Gz() {
  Qc.push(document.activeElement);
}
function Kz() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, u = null;
  try {
    Qc.length !== 0 && (u = Qc.pop(), u.focus({ preventScroll: s }));
    return;
  } catch {
    console.warn(["You tried to return focus to", u, "but it is not in the DOM anymore"].join(" "));
  }
}
function Xz() {
  Qc.length > 0 && Qc.pop();
}
function Jz(s) {
  Md = s, window.addEventListener ? (window.addEventListener("blur", qh, !1), document.addEventListener("focus", Qh, !0)) : (window.attachEvent("onBlur", qh), document.attachEvent("onFocus", Qh));
}
function Zz() {
  Md = null, window.addEventListener ? (window.removeEventListener("blur", qh), document.removeEventListener("focus", Qh)) : (window.detachEvent("onBlur", qh), document.detachEvent("onFocus", Qh));
}
var Db = { exports: {} };
(function(s, u) {
  Object.defineProperty(u, "__esModule", {
    value: !0
  }), u.default = E;
  var f = ET, p = g(f);
  function g(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function b() {
    var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return y.activeElement.shadowRoot ? b(y.activeElement.shadowRoot) : y.activeElement;
  }
  function E(y, T) {
    var A = (0, p.default)(y);
    if (!A.length) {
      T.preventDefault();
      return;
    }
    var k = void 0, D = T.shiftKey, M = A[0], I = A[A.length - 1], B = b();
    if (y === B) {
      if (!D)
        return;
      k = I;
    }
    if (I === B && !D && (k = M), M === B && D && (k = I), k) {
      T.preventDefault(), k.focus();
      return;
    }
    var X = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), fe = X != null && X[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (fe) {
      var Le = A.indexOf(B);
      if (Le > -1 && (Le += D ? -1 : 1), k = A[Le], typeof k > "u") {
        T.preventDefault(), k = D ? I : M, k.focus();
        return;
      }
      T.preventDefault(), k.focus();
    }
  }
  s.exports = u.default;
})(Db, Db.exports);
var eU = Db.exports, Ao = {}, tU = {}, nU = tU.NODE_ENV !== "production", bT = function() {
};
if (nU) {
  var rU = function(u, f) {
    var p = arguments.length;
    f = new Array(p > 1 ? p - 1 : 0);
    for (var g = 1; g < p; g++)
      f[g - 1] = arguments[g];
    var b = 0, E = "Warning: " + u.replace(/%s/g, function() {
      return f[b++];
    });
    typeof console < "u" && console.error(E);
    try {
      throw new Error(E);
    } catch {
    }
  };
  bT = function(s, u, f) {
    var p = arguments.length;
    f = new Array(p > 2 ? p - 2 : 0);
    for (var g = 2; g < p; g++)
      f[g - 2] = arguments[g];
    if (u === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    s || rU.apply(null, [u].concat(f));
  };
}
var aU = bT, Do = {}, wT = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(s) {
  (function() {
    var u = !!(typeof window < "u" && window.document && window.document.createElement), f = {
      canUseDOM: u,
      canUseWorkers: typeof Worker < "u",
      canUseEventListeners: u && !!(window.addEventListener || window.attachEvent),
      canUseViewport: u && !!window.screen
    };
    s.exports ? s.exports = f : window.ExecutionEnvironment = f;
  })();
})(wT);
var iU = wT.exports;
Object.defineProperty(Do, "__esModule", {
  value: !0
});
Do.canUseDOM = Do.SafeNodeList = Do.SafeHTMLCollection = void 0;
var oU = iU, lU = uU(oU);
function uU(s) {
  return s && s.__esModule ? s : { default: s };
}
var Cg = lU.default, sU = Cg.canUseDOM ? window.HTMLElement : {};
Do.SafeHTMLCollection = Cg.canUseDOM ? window.HTMLCollection : {};
Do.SafeNodeList = Cg.canUseDOM ? window.NodeList : {};
Do.canUseDOM = Cg.canUseDOM;
Do.default = sU;
var cU = {};
Object.defineProperty(Ao, "__esModule", {
  value: !0
});
Ao.resetState = vU;
Ao.log = mU;
Ao.assertNodeList = CT;
Ao.setElement = yU;
Ao.validateElement = Qb;
Ao.hide = gU;
Ao.show = SU;
Ao.documentNotReadyOrSSRTesting = EU;
var fU = aU, dU = hU(fU), pU = Do;
function hU(s) {
  return s && s.__esModule ? s : { default: s };
}
var wi = null;
function vU() {
  wi && (wi.removeAttribute ? wi.removeAttribute("aria-hidden") : wi.length != null ? wi.forEach(function(s) {
    return s.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(wi).forEach(function(s) {
    return s.removeAttribute("aria-hidden");
  })), wi = null;
}
function mU() {
  if (cU.NODE_ENV !== "production") {
    var s = wi || {};
    console.log("ariaAppHider ----------"), console.log(s.nodeName, s.className, s.id), console.log("end ariaAppHider ----------");
  }
}
function CT(s, u) {
  if (!s || !s.length)
    throw new Error("react-modal: No elements were found for selector " + u + ".");
}
function yU(s) {
  var u = s;
  if (typeof u == "string" && pU.canUseDOM) {
    var f = document.querySelectorAll(u);
    CT(f, u), u = f;
  }
  return wi = u || wi, wi;
}
function Qb(s) {
  var u = s || wi;
  return u ? Array.isArray(u) || u instanceof HTMLCollection || u instanceof NodeList ? u : [u] : ((0, dU.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function gU(s) {
  var u = !0, f = !1, p = void 0;
  try {
    for (var g = Qb(s)[Symbol.iterator](), b; !(u = (b = g.next()).done); u = !0) {
      var E = b.value;
      E.setAttribute("aria-hidden", "true");
    }
  } catch (y) {
    f = !0, p = y;
  } finally {
    try {
      !u && g.return && g.return();
    } finally {
      if (f)
        throw p;
    }
  }
}
function SU(s) {
  var u = !0, f = !1, p = void 0;
  try {
    for (var g = Qb(s)[Symbol.iterator](), b; !(u = (b = g.next()).done); u = !0) {
      var E = b.value;
      E.removeAttribute("aria-hidden");
    }
  } catch (y) {
    f = !0, p = y;
  } finally {
    try {
      !u && g.return && g.return();
    } finally {
      if (f)
        throw p;
    }
  }
}
function EU() {
  wi = null;
}
var Ud = {}, bU = {};
Object.defineProperty(Ud, "__esModule", {
  value: !0
});
Ud.resetState = wU;
Ud.log = CU;
var Vc = {}, Ic = {};
function y1(s, u) {
  s.classList.remove(u);
}
function wU() {
  var s = document.getElementsByTagName("html")[0];
  for (var u in Vc)
    y1(s, Vc[u]);
  var f = document.body;
  for (var p in Ic)
    y1(f, Ic[p]);
  Vc = {}, Ic = {};
}
function CU() {
  if (bU.NODE_ENV !== "production") {
    var s = document.getElementsByTagName("html")[0].className, u = `Show tracked classes:

`;
    u += "<html /> (" + s + `):
  `;
    for (var f in Vc)
      u += "  " + f + " " + Vc[f] + `
  `;
    s = document.body.className, u += `

doc.body (` + s + `):
  `;
    for (var p in Ic)
      u += "  " + p + " " + Ic[p] + `
  `;
    u += `
`, console.log(u);
  }
}
var _U = function(u, f) {
  return u[f] || (u[f] = 0), u[f] += 1, f;
}, xU = function(u, f) {
  return u[f] && (u[f] -= 1), f;
}, TU = function(u, f, p) {
  p.forEach(function(g) {
    _U(f, g), u.add(g);
  });
}, RU = function(u, f, p) {
  p.forEach(function(g) {
    xU(f, g), f[g] === 0 && u.remove(g);
  });
};
Ud.add = function(u, f) {
  return TU(u.classList, u.nodeName.toLowerCase() == "html" ? Vc : Ic, f.split(" "));
};
Ud.remove = function(u, f) {
  return RU(u.classList, u.nodeName.toLowerCase() == "html" ? Vc : Ic, f.split(" "));
};
var jd = {}, g1 = {};
Object.defineProperty(jd, "__esModule", {
  value: !0
});
jd.log = OU;
jd.resetState = DU;
function kU(s, u) {
  if (!(s instanceof u))
    throw new TypeError("Cannot call a class as a function");
}
var _T = function s() {
  var u = this;
  kU(this, s), this.register = function(f) {
    if (u.openInstances.indexOf(f) !== -1) {
      g1.NODE_ENV !== "production" && console.warn("React-Modal: Cannot register modal instance that's already open");
      return;
    }
    u.openInstances.push(f), u.emit("register");
  }, this.deregister = function(f) {
    var p = u.openInstances.indexOf(f);
    if (p === -1) {
      g1.NODE_ENV !== "production" && console.warn("React-Modal: Unable to deregister " + f + " as it was never registered");
      return;
    }
    u.openInstances.splice(p, 1), u.emit("deregister");
  }, this.subscribe = function(f) {
    u.subscribers.push(f);
  }, this.emit = function(f) {
    u.subscribers.forEach(function(p) {
      return p(
        f,
        // shallow copy to avoid accidental mutation
        u.openInstances.slice()
      );
    });
  }, this.openInstances = [], this.subscribers = [];
}, dg = new _T();
function OU() {
  console.log("portalOpenInstances ----------"), console.log(dg.openInstances.length), dg.openInstances.forEach(function(s) {
    return console.log(s);
  }), console.log("end portalOpenInstances ----------");
}
function DU() {
  dg = new _T();
}
jd.default = dg;
var Gb = {}, NU = {};
Object.defineProperty(Gb, "__esModule", {
  value: !0
});
Gb.resetState = zU;
Gb.log = UU;
var AU = jd, MU = LU(AU);
function LU(s) {
  return s && s.__esModule ? s : { default: s };
}
var ga = void 0, ko = void 0, Wc = [];
function zU() {
  for (var s = [ga, ko], u = 0; u < s.length; u++) {
    var f = s[u];
    f && f.parentNode && f.parentNode.removeChild(f);
  }
  ga = ko = null, Wc = [];
}
function UU() {
  console.log("bodyTrap ----------"), console.log(Wc.length);
  for (var s = [ga, ko], u = 0; u < s.length; u++) {
    var f = s[u], p = f || {};
    console.log(p.nodeName, p.className, p.id);
  }
  console.log("edn bodyTrap ----------");
}
function S1() {
  if (Wc.length === 0) {
    NU.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  Wc[Wc.length - 1].focusContent();
}
function jU(s, u) {
  !ga && !ko && (ga = document.createElement("div"), ga.setAttribute("data-react-modal-body-trap", ""), ga.style.position = "absolute", ga.style.opacity = "0", ga.setAttribute("tabindex", "0"), ga.addEventListener("focus", S1), ko = ga.cloneNode(), ko.addEventListener("focus", S1)), Wc = u, Wc.length > 0 ? (document.body.firstChild !== ga && document.body.insertBefore(ga, document.body.firstChild), document.body.lastChild !== ko && document.body.appendChild(ko)) : (ga.parentElement && ga.parentElement.removeChild(ga), ko.parentElement && ko.parentElement.removeChild(ko));
}
MU.default.subscribe(jU);
(function(s, u) {
  var f = {};
  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  var p = Object.assign || function(re) {
    for (var ve = 1; ve < arguments.length; ve++) {
      var pe = arguments[ve];
      for (var O in pe)
        Object.prototype.hasOwnProperty.call(pe, O) && (re[O] = pe[O]);
    }
    return re;
  }, g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(re) {
    return typeof re;
  } : function(re) {
    return re && typeof Symbol == "function" && re.constructor === Symbol && re !== Symbol.prototype ? "symbol" : typeof re;
  }, b = /* @__PURE__ */ function() {
    function re(ve, pe) {
      for (var O = 0; O < pe.length; O++) {
        var ae = pe[O];
        ae.enumerable = ae.enumerable || !1, ae.configurable = !0, "value" in ae && (ae.writable = !0), Object.defineProperty(ve, ae.key, ae);
      }
    }
    return function(ve, pe, O) {
      return pe && re(ve.prototype, pe), O && re(ve, O), ve;
    };
  }(), E = Ct, y = ST, T = Ue(y), A = No, k = ue(A), D = eU, M = Ue(D), I = Ao, B = ue(I), X = Ud, fe = ue(X), Le = Do, Ke = Ue(Le), ze = jd, Be = Ue(ze);
  function ue(re) {
    if (re && re.__esModule)
      return re;
    var ve = {};
    if (re != null)
      for (var pe in re)
        Object.prototype.hasOwnProperty.call(re, pe) && (ve[pe] = re[pe]);
    return ve.default = re, ve;
  }
  function Ue(re) {
    return re && re.__esModule ? re : { default: re };
  }
  function gt(re, ve) {
    if (!(re instanceof ve))
      throw new TypeError("Cannot call a class as a function");
  }
  function Z(re, ve) {
    if (!re)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return ve && (typeof ve == "object" || typeof ve == "function") ? ve : re;
  }
  function xe(re, ve) {
    if (typeof ve != "function" && ve !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof ve);
    re.prototype = Object.create(ve && ve.prototype, { constructor: { value: re, enumerable: !1, writable: !0, configurable: !0 } }), ve && (Object.setPrototypeOf ? Object.setPrototypeOf(re, ve) : re.__proto__ = ve);
  }
  var De = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, Te = function(ve) {
    return ve.code === "Tab" || ve.keyCode === 9;
  }, we = function(ve) {
    return ve.code === "Escape" || ve.keyCode === 27;
  }, Ne = 0, le = function(re) {
    xe(ve, re);
    function ve(pe) {
      gt(this, ve);
      var O = Z(this, (ve.__proto__ || Object.getPrototypeOf(ve)).call(this, pe));
      return O.setOverlayRef = function(ae) {
        O.overlay = ae, O.props.overlayRef && O.props.overlayRef(ae);
      }, O.setContentRef = function(ae) {
        O.content = ae, O.props.contentRef && O.props.contentRef(ae);
      }, O.afterClose = function() {
        var ae = O.props, L = ae.appElement, j = ae.ariaHideApp, ee = ae.htmlOpenClassName, be = ae.bodyOpenClassName, Se = ae.parentSelector, ke = Se && Se().ownerDocument || document;
        be && fe.remove(ke.body, be), ee && fe.remove(ke.getElementsByTagName("html")[0], ee), j && Ne > 0 && (Ne -= 1, Ne === 0 && B.show(L)), O.props.shouldFocusAfterRender && (O.props.shouldReturnFocusAfterClose ? (k.returnFocus(O.props.preventScroll), k.teardownScopedFocus()) : k.popWithoutFocus()), O.props.onAfterClose && O.props.onAfterClose(), Be.default.deregister(O);
      }, O.open = function() {
        O.beforeOpen(), O.state.afterOpen && O.state.beforeClose ? (clearTimeout(O.closeTimer), O.setState({ beforeClose: !1 })) : (O.props.shouldFocusAfterRender && (k.setupScopedFocus(O.node), k.markForFocusLater()), O.setState({ isOpen: !0 }, function() {
          O.openAnimationFrame = requestAnimationFrame(function() {
            O.setState({ afterOpen: !0 }), O.props.isOpen && O.props.onAfterOpen && O.props.onAfterOpen({
              overlayEl: O.overlay,
              contentEl: O.content
            });
          });
        }));
      }, O.close = function() {
        O.props.closeTimeoutMS > 0 ? O.closeWithTimeout() : O.closeWithoutTimeout();
      }, O.focusContent = function() {
        return O.content && !O.contentHasFocus() && O.content.focus({ preventScroll: !0 });
      }, O.closeWithTimeout = function() {
        var ae = Date.now() + O.props.closeTimeoutMS;
        O.setState({ beforeClose: !0, closesAt: ae }, function() {
          O.closeTimer = setTimeout(O.closeWithoutTimeout, O.state.closesAt - Date.now());
        });
      }, O.closeWithoutTimeout = function() {
        O.setState({
          beforeClose: !1,
          isOpen: !1,
          afterOpen: !1,
          closesAt: null
        }, O.afterClose);
      }, O.handleKeyDown = function(ae) {
        Te(ae) && (0, M.default)(O.content, ae), O.props.shouldCloseOnEsc && we(ae) && (ae.stopPropagation(), O.requestClose(ae));
      }, O.handleOverlayOnClick = function(ae) {
        O.shouldClose === null && (O.shouldClose = !0), O.shouldClose && O.props.shouldCloseOnOverlayClick && (O.ownerHandlesClose() ? O.requestClose(ae) : O.focusContent()), O.shouldClose = null;
      }, O.handleContentOnMouseUp = function() {
        O.shouldClose = !1;
      }, O.handleOverlayOnMouseDown = function(ae) {
        !O.props.shouldCloseOnOverlayClick && ae.target == O.overlay && ae.preventDefault();
      }, O.handleContentOnClick = function() {
        O.shouldClose = !1;
      }, O.handleContentOnMouseDown = function() {
        O.shouldClose = !1;
      }, O.requestClose = function(ae) {
        return O.ownerHandlesClose() && O.props.onRequestClose(ae);
      }, O.ownerHandlesClose = function() {
        return O.props.onRequestClose;
      }, O.shouldBeClosed = function() {
        return !O.state.isOpen && !O.state.beforeClose;
      }, O.contentHasFocus = function() {
        return document.activeElement === O.content || O.content.contains(document.activeElement);
      }, O.buildClassName = function(ae, L) {
        var j = (typeof L > "u" ? "undefined" : g(L)) === "object" ? L : {
          base: De[ae],
          afterOpen: De[ae] + "--after-open",
          beforeClose: De[ae] + "--before-close"
        }, ee = j.base;
        return O.state.afterOpen && (ee = ee + " " + j.afterOpen), O.state.beforeClose && (ee = ee + " " + j.beforeClose), typeof L == "string" && L ? ee + " " + L : ee;
      }, O.attributesFromObject = function(ae, L) {
        return Object.keys(L).reduce(function(j, ee) {
          return j[ae + "-" + ee] = L[ee], j;
        }, {});
      }, O.state = {
        afterOpen: !1,
        beforeClose: !1
      }, O.shouldClose = null, O.moveFromContentToOverlay = null, O;
    }
    return b(ve, [{
      key: "componentDidMount",
      value: function() {
        this.props.isOpen && this.open();
      }
    }, {
      key: "componentDidUpdate",
      value: function(O, ae) {
        f.NODE_ENV !== "production" && (O.bodyOpenClassName !== this.props.bodyOpenClassName && console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), O.htmlOpenClassName !== this.props.htmlOpenClassName && console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.')), this.props.isOpen && !O.isOpen ? this.open() : !this.props.isOpen && O.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !ae.isOpen && this.focusContent();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
      }
    }, {
      key: "beforeOpen",
      value: function() {
        var O = this.props, ae = O.appElement, L = O.ariaHideApp, j = O.htmlOpenClassName, ee = O.bodyOpenClassName, be = O.parentSelector, Se = be && be().ownerDocument || document;
        ee && fe.add(Se.body, ee), j && fe.add(Se.getElementsByTagName("html")[0], j), L && (Ne += 1, B.hide(ae)), Be.default.register(this);
      }
      // Don't steal focus from inner elements
    }, {
      key: "render",
      value: function() {
        var O = this.props, ae = O.id, L = O.className, j = O.overlayClassName, ee = O.defaultStyles, be = O.children, Se = L ? {} : ee.content, ke = j ? {} : ee.overlay;
        if (this.shouldBeClosed())
          return null;
        var He = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", j),
          style: p({}, ke, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        }, Pe = p({
          id: ae,
          ref: this.setContentRef,
          style: p({}, Se, this.props.style.content),
          className: this.buildClassName("content", L),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.attributesFromObject("aria", p({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
          "data-testid": this.props.testId
        }), Ae = this.props.contentElement(Pe, be);
        return this.props.overlayElement(He, Ae);
      }
    }]), ve;
  }(E.Component);
  le.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  }, le.propTypes = {
    isOpen: T.default.bool.isRequired,
    defaultStyles: T.default.shape({
      content: T.default.object,
      overlay: T.default.object
    }),
    style: T.default.shape({
      content: T.default.object,
      overlay: T.default.object
    }),
    className: T.default.oneOfType([T.default.string, T.default.object]),
    overlayClassName: T.default.oneOfType([T.default.string, T.default.object]),
    parentSelector: T.default.func,
    bodyOpenClassName: T.default.string,
    htmlOpenClassName: T.default.string,
    ariaHideApp: T.default.bool,
    appElement: T.default.oneOfType([T.default.instanceOf(Ke.default), T.default.instanceOf(Le.SafeHTMLCollection), T.default.instanceOf(Le.SafeNodeList), T.default.arrayOf(T.default.instanceOf(Ke.default))]),
    onAfterOpen: T.default.func,
    onAfterClose: T.default.func,
    onRequestClose: T.default.func,
    closeTimeoutMS: T.default.number,
    shouldFocusAfterRender: T.default.bool,
    shouldCloseOnOverlayClick: T.default.bool,
    shouldReturnFocusAfterClose: T.default.bool,
    preventScroll: T.default.bool,
    role: T.default.string,
    contentLabel: T.default.string,
    aria: T.default.object,
    data: T.default.object,
    children: T.default.node,
    shouldCloseOnEsc: T.default.bool,
    overlayRef: T.default.func,
    contentRef: T.default.func,
    id: T.default.string,
    overlayElement: T.default.func,
    contentElement: T.default.func,
    testId: T.default.string
  }, u.default = le, s.exports = u.default;
})(Rb, Rb.exports);
var PU = Rb.exports;
function xT() {
  var s = this.constructor.getDerivedStateFromProps(this.props, this.state);
  s != null && this.setState(s);
}
function TT(s) {
  function u(f) {
    var p = this.constructor.getDerivedStateFromProps(s, f);
    return p ?? null;
  }
  this.setState(u.bind(this));
}
function RT(s, u) {
  try {
    var f = this.props, p = this.state;
    this.props = s, this.state = u, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      f,
      p
    );
  } finally {
    this.props = f, this.state = p;
  }
}
xT.__suppressDeprecationWarning = !0;
TT.__suppressDeprecationWarning = !0;
RT.__suppressDeprecationWarning = !0;
function FU(s) {
  var u = s.prototype;
  if (!u || !u.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof s.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function")
    return s;
  var f = null, p = null, g = null;
  if (typeof u.componentWillMount == "function" ? f = "componentWillMount" : typeof u.UNSAFE_componentWillMount == "function" && (f = "UNSAFE_componentWillMount"), typeof u.componentWillReceiveProps == "function" ? p = "componentWillReceiveProps" : typeof u.UNSAFE_componentWillReceiveProps == "function" && (p = "UNSAFE_componentWillReceiveProps"), typeof u.componentWillUpdate == "function" ? g = "componentWillUpdate" : typeof u.UNSAFE_componentWillUpdate == "function" && (g = "UNSAFE_componentWillUpdate"), f !== null || p !== null || g !== null) {
    var b = s.displayName || s.name, E = typeof s.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + b + " uses " + E + " but also contains the following legacy lifecycles:" + (f !== null ? `
  ` + f : "") + (p !== null ? `
  ` + p : "") + (g !== null ? `
  ` + g : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof s.getDerivedStateFromProps == "function" && (u.componentWillMount = xT, u.componentWillReceiveProps = TT), typeof u.getSnapshotBeforeUpdate == "function") {
    if (typeof u.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    u.componentWillUpdate = RT;
    var y = u.componentDidUpdate;
    u.componentDidUpdate = function(A, k, D) {
      var M = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : D;
      y.call(this, A, k, M);
    };
  }
  return s;
}
const HU = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: FU
}, Symbol.toStringTag, { value: "Module" })), $U = /* @__PURE__ */ EA(HU);
var BU = {};
Object.defineProperty(qc, "__esModule", {
  value: !0
});
qc.bodyOpenClassName = qc.portalClassName = void 0;
var E1 = Object.assign || function(s) {
  for (var u = 1; u < arguments.length; u++) {
    var f = arguments[u];
    for (var p in f)
      Object.prototype.hasOwnProperty.call(f, p) && (s[p] = f[p]);
  }
  return s;
}, VU = /* @__PURE__ */ function() {
  function s(u, f) {
    for (var p = 0; p < f.length; p++) {
      var g = f[p];
      g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(u, g.key, g);
    }
  }
  return function(u, f, p) {
    return f && s(u.prototype, f), p && s(u, p), u;
  };
}(), kT = Ct, pg = tv(kT), IU = O1, hg = tv(IU), WU = ST, Rt = tv(WU), YU = PU, b1 = tv(YU), qU = Ao, QU = KU(qU), bs = Do, w1 = tv(bs), GU = $U;
function KU(s) {
  if (s && s.__esModule)
    return s;
  var u = {};
  if (s != null)
    for (var f in s)
      Object.prototype.hasOwnProperty.call(s, f) && (u[f] = s[f]);
  return u.default = s, u;
}
function tv(s) {
  return s && s.__esModule ? s : { default: s };
}
function XU(s, u) {
  if (!(s instanceof u))
    throw new TypeError("Cannot call a class as a function");
}
function C1(s, u) {
  if (!s)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u && (typeof u == "object" || typeof u == "function") ? u : s;
}
function JU(s, u) {
  if (typeof u != "function" && u !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof u);
  s.prototype = Object.create(u && u.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(s, u) : s.__proto__ = u);
}
var ZU = qc.portalClassName = "ReactModalPortal", ej = qc.bodyOpenClassName = "ReactModal__Body--open", Bc = bs.canUseDOM && hg.default.createPortal !== void 0, Nb = function(u) {
  return document.createElement(u);
}, _1 = function() {
  return Bc ? hg.default.createPortal : hg.default.unstable_renderSubtreeIntoContainer;
};
function Zy(s) {
  return s();
}
var Pd = function(s) {
  JU(u, s);
  function u() {
    var f, p, g, b;
    XU(this, u);
    for (var E = arguments.length, y = Array(E), T = 0; T < E; T++)
      y[T] = arguments[T];
    return b = (p = (g = C1(this, (f = u.__proto__ || Object.getPrototypeOf(u)).call.apply(f, [this].concat(y))), g), g.removePortal = function() {
      !Bc && hg.default.unmountComponentAtNode(g.node);
      var A = Zy(g.props.parentSelector);
      A && A.contains(g.node) ? A.removeChild(g.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, g.portalRef = function(A) {
      g.portal = A;
    }, g.renderPortal = function(A) {
      var k = _1(), D = k(g, pg.default.createElement(b1.default, E1({ defaultStyles: u.defaultStyles }, A)), g.node);
      g.portalRef(D);
    }, p), C1(g, b);
  }
  return VU(u, [{
    key: "componentDidMount",
    value: function() {
      if (bs.canUseDOM) {
        Bc || (this.node = Nb("div")), this.node.className = this.props.portalClassName;
        var p = Zy(this.props.parentSelector);
        p.appendChild(this.node), !Bc && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(p) {
      var g = Zy(p.parentSelector), b = Zy(this.props.parentSelector);
      return { prevParent: g, nextParent: b };
    }
  }, {
    key: "componentDidUpdate",
    value: function(p, g, b) {
      if (bs.canUseDOM) {
        var E = this.props, y = E.isOpen, T = E.portalClassName;
        p.portalClassName !== T && (this.node.className = T);
        var A = b.prevParent, k = b.nextParent;
        k !== A && (A.removeChild(this.node), k.appendChild(this.node)), !(!p.isOpen && !y) && !Bc && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!bs.canUseDOM || !this.node || !this.portal)) {
        var p = this.portal.state, g = Date.now(), b = p.isOpen && this.props.closeTimeoutMS && (p.closesAt || g + this.props.closeTimeoutMS);
        b ? (p.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, b - g)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!bs.canUseDOM || !Bc)
        return null;
      !this.node && Bc && (this.node = Nb("div"));
      var p = _1();
      return p(pg.default.createElement(b1.default, E1({
        ref: this.portalRef,
        defaultStyles: u.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(p) {
      QU.setElement(p);
    }
    /* eslint-disable react/no-unused-prop-types */
    /* eslint-enable react/no-unused-prop-types */
  }]), u;
}(kT.Component);
Pd.propTypes = {
  isOpen: Rt.default.bool.isRequired,
  style: Rt.default.shape({
    content: Rt.default.object,
    overlay: Rt.default.object
  }),
  portalClassName: Rt.default.string,
  bodyOpenClassName: Rt.default.string,
  htmlOpenClassName: Rt.default.string,
  className: Rt.default.oneOfType([Rt.default.string, Rt.default.shape({
    base: Rt.default.string.isRequired,
    afterOpen: Rt.default.string.isRequired,
    beforeClose: Rt.default.string.isRequired
  })]),
  overlayClassName: Rt.default.oneOfType([Rt.default.string, Rt.default.shape({
    base: Rt.default.string.isRequired,
    afterOpen: Rt.default.string.isRequired,
    beforeClose: Rt.default.string.isRequired
  })]),
  appElement: Rt.default.oneOfType([Rt.default.instanceOf(w1.default), Rt.default.instanceOf(bs.SafeHTMLCollection), Rt.default.instanceOf(bs.SafeNodeList), Rt.default.arrayOf(Rt.default.instanceOf(w1.default))]),
  onAfterOpen: Rt.default.func,
  onRequestClose: Rt.default.func,
  closeTimeoutMS: Rt.default.number,
  ariaHideApp: Rt.default.bool,
  shouldFocusAfterRender: Rt.default.bool,
  shouldCloseOnOverlayClick: Rt.default.bool,
  shouldReturnFocusAfterClose: Rt.default.bool,
  preventScroll: Rt.default.bool,
  parentSelector: Rt.default.func,
  aria: Rt.default.object,
  data: Rt.default.object,
  role: Rt.default.string,
  contentLabel: Rt.default.string,
  shouldCloseOnEsc: Rt.default.bool,
  overlayRef: Rt.default.func,
  contentRef: Rt.default.func,
  id: Rt.default.string,
  overlayElement: Rt.default.func,
  contentElement: Rt.default.func
};
Pd.defaultProps = {
  isOpen: !1,
  portalClassName: ZU,
  bodyOpenClassName: ej,
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
  overlayElement: function(u, f) {
    return pg.default.createElement(
      "div",
      u,
      f
    );
  },
  contentElement: function(u, f) {
    return pg.default.createElement(
      "div",
      u,
      f
    );
  }
};
Pd.defaultStyles = {
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
(0, GU.polyfill)(Pd);
BU.NODE_ENV !== "production" && (Pd.setCreateHTMLElement = function(s) {
  return Nb = s;
});
qc.default = Pd;
(function(s, u) {
  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  var f = qc, p = g(f);
  function g(b) {
    return b && b.__esModule ? b : { default: b };
  }
  u.default = p.default, s.exports = u.default;
})(xb, xb.exports);
var tj = xb.exports;
const Kb = /* @__PURE__ */ x1(tj);
function nj() {
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsx("span", { className: "spinner is-active" }),
    " Loading OpenAI Assistants"
  ] });
}
function rj(s, u) {
  Gn.post(twChatSettings.ajax_url, {
    action: "get_assistants",
    _ajax_nonce: twChatSettings.ajax_nonce
  }, {
    headers: {
      "Content-Type": "multipart/form-data"
      // Set content type for FormData
    }
  }).then(s).catch(u);
}
function aj() {
  const [s, u] = Fb(aT), [f, p] = Ab.useState(!1), [g, b] = Ct.useState(!1), [E, y] = Ct.useState({}), T = function(fe) {
    console.log(fe.data), fe.data.success ? u(fe.data.data) : (Oo.error("There was an error retrieving assistants."), console.log(`Error: ${fe.data.data.message}`)), b(!1);
  }, A = function(fe) {
    Oo.error("There was an error retrieving assistants."), console.log(`Error: ${fe}`);
  }, k = function() {
    u([]), b(!0), rj(T, A);
  };
  function D(fe) {
    y(fe), p(!0);
  }
  function M() {
    y({}), p(!1);
  }
  const I = () => E.instructions ? fn.parse(E.instructions) : "", B = (fe) => {
    const Le = document.createElement("textarea");
    Le.style.position = "fixed", Le.style.left = "-9999px", Le.style.top = "-9999px", Le.value = fe, document.body.appendChild(Le), Le.select(), document.execCommand("copy"), Oo.success("Copied to clipboard");
  }, X = () => /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsxs("table", { className: "wp-list-table widefat fixed striped posts", children: [
      /* @__PURE__ */ V.jsxs("thead", { children: [
        /* @__PURE__ */ V.jsx("th", { children: "Assistant Name" }),
        /* @__PURE__ */ V.jsx("th", { children: "Assistant ID" }),
        /* @__PURE__ */ V.jsx("th", { children: "Model" }),
        /* @__PURE__ */ V.jsx("th", { children: "Instructions" })
      ] }),
      /* @__PURE__ */ V.jsx("tbody", { children: s.map((fe) => /* @__PURE__ */ V.jsxs("tr", { children: [
        /* @__PURE__ */ V.jsx("td", { children: fe.name }),
        /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("a", { href: "#", onClick: () => B(fe.id), children: fe.id }) }),
        /* @__PURE__ */ V.jsx("td", { children: fe.model }),
        /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("button", { onClick: () => D(fe), "aria-label": "View Instructions", children: /* @__PURE__ */ V.jsx("span", { className: "dashicons dashicons-welcome-view-site" }) }) })
      ] }, fe.id)) })
    ] }),
    s.length > 0 ? /* @__PURE__ */ V.jsx(V.Fragment, {}) : /* @__PURE__ */ V.jsx("p", { children: "There are no Assistants in your OpenAI account." })
  ] });
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    g ? /* @__PURE__ */ V.jsx("p", { children: /* @__PURE__ */ V.jsx(nj, {}) }) : /* @__PURE__ */ V.jsx("p", { children: /* @__PURE__ */ V.jsx("a", { href: "#", onClick: k, children: "Refresh assistants list" }) }),
    s.length > 0 && /* @__PURE__ */ V.jsx(X, {}),
    /* @__PURE__ */ V.jsxs(
      Kb,
      {
        isOpen: f,
        onRequestClose: M,
        contentLabel: "Example Modal",
        className: "tw-chat-admin-modal",
        overlayClassName: "tw-chat-admin-overlay",
        children: [
          /* @__PURE__ */ V.jsxs("h2", { className: "tw-chat-admin-modal-header", children: [
            E.name,
            /* @__PURE__ */ V.jsx("button", { onClick: M, children: /* @__PURE__ */ V.jsx("span", { className: "dashicons dashicons-no-alt" }) })
          ] }),
          /* @__PURE__ */ V.jsxs("div", { className: "tw-chat-admin-modal-content", children: [
            /* @__PURE__ */ V.jsxs("p", { children: [
              /* @__PURE__ */ V.jsx("strong", { children: "Model:" }),
              " ",
              E.model
            ] }),
            /* @__PURE__ */ V.jsx("div", { dangerouslySetInnerHTML: { __html: I() } })
          ] })
        ]
      }
    )
  ] });
}
const OT = {
  headers: {
    "Content-Type": "multipart/form-data"
    // Set content type for FormData
  }
};
function ij(s, u, f) {
  Gn.post(twChatSettings.ajax_url, {
    action: "save_chat_widget",
    _ajax_nonce: twChatSettings.ajax_nonce,
    ...s
  }, OT).then(u).catch(f);
}
function oj(s, u, f) {
  Gn.post(twChatSettings.ajax_url, {
    action: "remove_chat_widget",
    _ajax_nonce: twChatSettings.ajax_nonce,
    id: s
  }, OT).then(u).catch(f);
}
function lj() {
  const [s, u] = Fb(iT), [f, p] = Ct.useState(null), [g, b] = Ct.useState(!1);
  function E(D) {
    D && (console.log(D), p(D)), b(!0);
  }
  function y() {
    console.log("reset current widget"), p(null), b(!1);
  }
  function T() {
  }
  const A = () => {
    const D = function(M) {
      window.confirm("Are you sure you want to remove this widget?") && oj(
        M,
        function(I) {
          I.data.success ? (Oo.success("Chat widget removed"), u(I.data.data), console.log(I.data)) : (console.log(I), Oo.error("Error removing chat widget."));
        },
        function(I) {
          console.log(I), Oo.error("Error removing chat widget.");
        }
      );
    };
    return /* @__PURE__ */ V.jsxs("table", { className: "wp-list-table widefat fixed striped posts", children: [
      /* @__PURE__ */ V.jsxs("thead", { children: [
        /* @__PURE__ */ V.jsx("th", { children: "ID" }),
        /* @__PURE__ */ V.jsx("th", { children: "Name" }),
        /* @__PURE__ */ V.jsx("th", { children: "Greeting" }),
        /* @__PURE__ */ V.jsx("th", { children: "OpenAI Assistant ID" }),
        /* @__PURE__ */ V.jsx("th", { children: "Edit / Delete" })
      ] }),
      /* @__PURE__ */ V.jsx("tbody", { children: s.map((M) => /* @__PURE__ */ V.jsxs("tr", { children: [
        /* @__PURE__ */ V.jsx("td", { children: M.id }),
        /* @__PURE__ */ V.jsx("td", { children: M.name }),
        /* @__PURE__ */ V.jsx("td", { children: M.meta.tw_chat_greeting }),
        /* @__PURE__ */ V.jsx("td", { children: M.meta.tw_chat_assistant_id }),
        /* @__PURE__ */ V.jsxs("td", { children: [
          /* @__PURE__ */ V.jsx("button", { "aria-label": "Edit Chat Widget", onClick: () => E(M), children: /* @__PURE__ */ V.jsx("span", { className: "dashicons dashicons-edit" }) }),
          /* @__PURE__ */ V.jsx("button", { "aria-label": "Remove Chat Widget", onClick: () => D(M.id), children: /* @__PURE__ */ V.jsx("span", { className: "dashicons dashicons-trash" }) })
        ] })
      ] }, M.id)) })
    ] });
  }, k = () => {
    const [D, M] = Ct.useState(!1), [I, B] = Ct.useState({
      tw_chat_widget_name: "",
      tw_chat_greeting: "",
      tw_chat_suggested_answers: "",
      tw_chat_assistant_id: "",
      tw_chat_webhook_address: "",
      tw_chat_webhook_header: "",
      tw_chat_email_recipients: ""
    });
    Ct.useEffect(() => {
      f && B({
        id: f.id,
        tw_chat_widget_name: f.name,
        tw_chat_greeting: f.meta.tw_chat_greeting[0],
        tw_chat_assistant_id: f.meta.tw_chat_assistant_id[0],
        tw_chat_suggested_answers: f.meta.tw_chat_suggested_answers ? f.meta.tw_chat_suggested_answers[0] : "",
        tw_chat_email_recipients: f.meta.tw_chat_email_recipients ? f.meta.tw_chat_email_recipients[0] : "",
        tw_chat_webhook_address: f.meta.tw_chat_webhook_address ? f.meta.tw_chat_webhook_address[0] : "",
        tw_chat_webhook_header: f.meta.tw_chat_webhook_header ? f.meta.tw_chat_webhook_header[0] : ""
      });
    }, []);
    const X = function(Le) {
      const { name: Ke, value: ze } = Le.target;
      let Be = I;
      Be[Ke] = ze, B(Be);
    }, fe = function(Le) {
      Le.preventDefault(), M(!0), console.log(I), ij(
        I,
        function(Ke) {
          Ke.data.success ? (Oo.success("Chat widget saved"), u(Ke.data.data), console.log(Ke.data), b(!1)) : (console.log(Ke), Oo.error("Error saving chat widget.")), M(!1);
        },
        function(Ke) {
          console.log(Ke), Oo.error("Error saving chat widget."), M(!1);
        }
      );
    };
    return /* @__PURE__ */ V.jsxs("form", { id: "tw-chat-new-widget-form", onSubmit: fe, children: [
      /* @__PURE__ */ V.jsx("table", { className: "form-table", children: /* @__PURE__ */ V.jsxs("tbody", { children: [
        /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Name" }),
          /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_widget_name", onChange: X, defaultValue: I.tw_chat_widget_name, required: "required" }) })
        ] }),
        /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Assistant ID" }),
          /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_assistant_id", onChange: X, defaultValue: I.tw_chat_assistant_id, required: "required" }) })
        ] }),
        /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Greeting" }),
          /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_greeting", onChange: X, defaultValue: I.tw_chat_greeting, required: "required" }) })
        ] }),
        /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Suggested Answers" }),
          /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_suggested_answers", onChange: X, defaultValue: I.tw_chat_suggested_answers }) })
        ] })
      ] }) }),
      /* @__PURE__ */ V.jsx("hr", {}),
      /* @__PURE__ */ V.jsx("h3", { children: "Functionality Settings" }),
      /* @__PURE__ */ V.jsx("table", { className: "form-table", children: /* @__PURE__ */ V.jsxs("tbody", { children: [
        /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Email Recipients" }),
          /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_email_recipients", onChange: X, defaultValue: I.tw_chat_email_recipients }) })
        ] }),
        /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Webhook Address" }),
          /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_webhook_address", onChange: X, defaultValue: I.tw_chat_webhook_address }) })
        ] }),
        /* @__PURE__ */ V.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ V.jsx("th", { scope: "row", children: "Webhook Header" }),
          /* @__PURE__ */ V.jsx("td", { children: /* @__PURE__ */ V.jsx("textarea", { rows: "4", className: "regular-text", type: "text", name: "tw_chat_webhook_header", onChange: X, defaultValue: I.tw_chat_webhook_header }) })
        ] })
      ] }) }),
      D ? /* @__PURE__ */ V.jsxs("p", { children: [
        /* @__PURE__ */ V.jsx("span", { className: "spinner is-active" }),
        " Saving"
      ] }) : /* @__PURE__ */ V.jsx("input", { className: "button button-hero button-primary", type: "submit", value: "Submit" })
    ] });
  };
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsx("p", { children: /* @__PURE__ */ V.jsx("button", { className: "button button-primary", onClick: () => E(), children: "Create New Chat Widget" }) }),
    s.length > 0 && /* @__PURE__ */ V.jsx(A, {}),
    /* @__PURE__ */ V.jsxs(
      Kb,
      {
        isOpen: g,
        onAfterOpen: T,
        onRequestClose: y,
        contentLabel: "Example Modal",
        className: "tw-chat-admin-modal",
        overlayClassName: "tw-chat-admin-overlay",
        children: [
          /* @__PURE__ */ V.jsxs("h2", { className: "tw-chat-admin-modal-header", children: [
            "Save Chat Widget",
            /* @__PURE__ */ V.jsx("button", { onClick: y, children: /* @__PURE__ */ V.jsx("span", { className: "dashicons dashicons-no-alt" }) })
          ] }),
          /* @__PURE__ */ V.jsx("div", { className: "tw-chat-admin-modal-content", children: /* @__PURE__ */ V.jsx(k, {}) })
        ]
      }
    )
  ] });
}
function uj() {
  const s = [
    { title: "Plugin Settings", content: JL },
    { title: "Chat Widgets", content: lj },
    { title: "OpenAI Assistants", content: aj }
    // Add more tabs as needed
  ];
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsx(AA, { tabs: s }),
    /* @__PURE__ */ V.jsx(
      PL,
      {
        position: "bottom-center",
        reverseOrder: !1
      }
    )
  ] });
}
window.addEventListener("load", function() {
  Kb.setAppElement("#tw-chat-admin"), Vh.createRoot(document.getElementById("tw-chat-admin")).render(
    /* @__PURE__ */ V.jsx(Ab.StrictMode, { children: /* @__PURE__ */ V.jsx(qL, { atoms: [aT], children: /* @__PURE__ */ V.jsx(uj, {}) }) })
  );
});
