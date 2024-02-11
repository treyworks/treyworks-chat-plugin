var yN = Object.defineProperty;
var gN = (s, u, f) => u in s ? yN(s, u, { enumerable: !0, configurable: !0, writable: !0, value: f }) : s[u] = f;
var Nn = (s, u, f) => (gN(s, typeof u != "symbol" ? u + "" : u, f), f), SN = (s, u, f) => {
  if (!u.has(s))
    throw TypeError("Cannot " + f);
};
var GE = (s, u, f) => {
  if (u.has(s))
    throw TypeError("Cannot add the same private member more than once");
  u instanceof WeakSet ? u.add(s) : u.set(s, f);
};
var Wy = (s, u, f) => (SN(s, u, "access private method"), f);
function TT(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function EN(s) {
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
var db = { exports: {} }, Uv = {}, pb = { exports: {} }, Pt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A1;
function bN() {
  if (A1)
    return Pt;
  A1 = 1;
  var s = Symbol.for("react.element"), u = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), E = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), N = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), D = Symbol.iterator;
  function M(L) {
    return L === null || typeof L != "object" ? null : (L = D && L[D] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var I = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, B = Object.assign, ee = {};
  function fe(L, j, J) {
    this.props = L, this.context = j, this.refs = ee, this.updater = J || I;
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
  function Ke(L, j, J) {
    this.props = L, this.context = j, this.refs = ee, this.updater = J || I;
  }
  var ze = Ke.prototype = new Le();
  ze.constructor = Ke, B(ze, fe.prototype), ze.isPureReactComponent = !0;
  var Be = Array.isArray, ue = Object.prototype.hasOwnProperty, Ue = { current: null }, gt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(L, j, J) {
    var be, Se = {}, ke = null, He = null;
    if (j != null)
      for (be in j.ref !== void 0 && (He = j.ref), j.key !== void 0 && (ke = "" + j.key), j)
        ue.call(j, be) && !gt.hasOwnProperty(be) && (Se[be] = j[be]);
    var Pe = arguments.length - 2;
    if (Pe === 1)
      Se.children = J;
    else if (1 < Pe) {
      for (var Ne = Array(Pe), ot = 0; ot < Pe; ot++)
        Ne[ot] = arguments[ot + 2];
      Se.children = Ne;
    }
    if (L && L.defaultProps)
      for (be in Pe = L.defaultProps, Pe)
        Se[be] === void 0 && (Se[be] = Pe[be]);
    return { $$typeof: s, type: L, key: ke, ref: He, props: Se, _owner: Ue.current };
  }
  function Te(L, j) {
    return { $$typeof: s, type: L.type, key: j, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function De(L) {
    return typeof L == "object" && L !== null && L.$$typeof === s;
  }
  function _e(L) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(J) {
      return j[J];
    });
  }
  var Ce = /\/+/g;
  function Ae(L, j) {
    return typeof L == "object" && L !== null && L.key != null ? _e("" + L.key) : j.toString(36);
  }
  function le(L, j, J, be, Se) {
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
      return He = L, Se = Se(He), L = be === "" ? "." + Ae(He, 0) : be, Be(Se) ? (J = "", L != null && (J = L.replace(Ce, "$&/") + "/"), le(Se, j, J, "", function(ot) {
        return ot;
      })) : Se != null && (De(Se) && (Se = Te(Se, J + (!Se.key || He && He.key === Se.key ? "" : ("" + Se.key).replace(Ce, "$&/") + "/") + L)), j.push(Se)), 1;
    if (He = 0, be = be === "" ? "." : be + ":", Be(L))
      for (var Pe = 0; Pe < L.length; Pe++) {
        ke = L[Pe];
        var Ne = be + Ae(ke, Pe);
        He += le(ke, j, J, Ne, Se);
      }
    else if (Ne = M(L), typeof Ne == "function")
      for (L = Ne.call(L), Pe = 0; !(ke = L.next()).done; )
        ke = ke.value, Ne = be + Ae(ke, Pe++), He += le(ke, j, J, Ne, Se);
    else if (ke === "object")
      throw j = String(L), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return He;
  }
  function re(L, j, J) {
    if (L == null)
      return L;
    var be = [], Se = 0;
    return le(L, be, "", "", function(ke) {
      return j.call(J, ke, Se++);
    }), be;
  }
  function he(L) {
    if (L._status === -1) {
      var j = L._result;
      j = j(), j.then(function(J) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = J);
      }, function(J) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = J);
      }), L._status === -1 && (L._status = 0, L._result = j);
    }
    if (L._status === 1)
      return L._result.default;
    throw L._result;
  }
  var pe = { current: null }, O = { transition: null }, ae = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: O, ReactCurrentOwner: Ue };
  return Pt.Children = { map: re, forEach: function(L, j, J) {
    re(L, function() {
      j.apply(this, arguments);
    }, J);
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
  } }, Pt.Component = fe, Pt.Fragment = f, Pt.Profiler = g, Pt.PureComponent = Ke, Pt.StrictMode = p, Pt.Suspense = _, Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, Pt.cloneElement = function(L, j, J) {
    if (L == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var be = B({}, L.props), Se = L.key, ke = L.ref, He = L._owner;
    if (j != null) {
      if (j.ref !== void 0 && (ke = j.ref, He = Ue.current), j.key !== void 0 && (Se = "" + j.key), L.type && L.type.defaultProps)
        var Pe = L.type.defaultProps;
      for (Ne in j)
        ue.call(j, Ne) && !gt.hasOwnProperty(Ne) && (be[Ne] = j[Ne] === void 0 && Pe !== void 0 ? Pe[Ne] : j[Ne]);
    }
    var Ne = arguments.length - 2;
    if (Ne === 1)
      be.children = J;
    else if (1 < Ne) {
      Pe = Array(Ne);
      for (var ot = 0; ot < Ne; ot++)
        Pe[ot] = arguments[ot + 2];
      be.children = Pe;
    }
    return { $$typeof: s, type: L.type, key: Se, ref: ke, props: be, _owner: He };
  }, Pt.createContext = function(L) {
    return L = { $$typeof: E, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: b, _context: L }, L.Consumer = L;
  }, Pt.createElement = X, Pt.createFactory = function(L) {
    var j = X.bind(null, L);
    return j.type = L, j;
  }, Pt.createRef = function() {
    return { current: null };
  }, Pt.forwardRef = function(L) {
    return { $$typeof: y, render: L };
  }, Pt.isValidElement = De, Pt.lazy = function(L) {
    return { $$typeof: k, _payload: { _status: -1, _result: L }, _init: he };
  }, Pt.memo = function(L, j) {
    return { $$typeof: N, type: L, compare: j === void 0 ? null : j };
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
  }, Pt.useImperativeHandle = function(L, j, J) {
    return pe.current.useImperativeHandle(L, j, J);
  }, Pt.useInsertionEffect = function(L, j) {
    return pe.current.useInsertionEffect(L, j);
  }, Pt.useLayoutEffect = function(L, j) {
    return pe.current.useLayoutEffect(L, j);
  }, Pt.useMemo = function(L, j) {
    return pe.current.useMemo(L, j);
  }, Pt.useReducer = function(L, j, J) {
    return pe.current.useReducer(L, j, J);
  }, Pt.useRef = function(L) {
    return pe.current.useRef(L);
  }, Pt.useState = function(L) {
    return pe.current.useState(L);
  }, Pt.useSyncExternalStore = function(L, j, J) {
    return pe.current.useSyncExternalStore(L, j, J);
  }, Pt.useTransition = function() {
    return pe.current.useTransition();
  }, Pt.version = "18.2.0", Pt;
}
var Bv = { exports: {} };
Bv.exports;
var N1;
function CN() {
  return N1 || (N1 = 1, function(s, u) {
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
      var p = "18.2.0", g = Symbol.for("react.element"), b = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), k = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), Le = Symbol.iterator, Ke = "@@iterator";
      function ze(w) {
        if (w === null || typeof w != "object")
          return null;
        var z = Le && w[Le] || w[Ke];
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
      }, X = {}, Te = null;
      function De(w) {
        Te = w;
      }
      X.setExtraStackFrame = function(w) {
        Te = w;
      }, X.getCurrentStack = null, X.getStackAddendum = function() {
        var w = "";
        Te && (w += Te);
        var z = X.getCurrentStack;
        return z && (w += z() || ""), w;
      };
      var _e = !1, Ce = !1, Ae = !1, le = !1, re = !1, he = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: gt
      };
      he.ReactDebugCurrentFrame = X, he.ReactCurrentActQueue = Ue;
      function pe(w) {
        {
          for (var z = arguments.length, Q = new Array(z > 1 ? z - 1 : 0), ne = 1; ne < z; ne++)
            Q[ne - 1] = arguments[ne];
          ae("warn", w, Q);
        }
      }
      function O(w) {
        {
          for (var z = arguments.length, Q = new Array(z > 1 ? z - 1 : 0), ne = 1; ne < z; ne++)
            Q[ne - 1] = arguments[ne];
          ae("error", w, Q);
        }
      }
      function ae(w, z, Q) {
        {
          var ne = he.ReactDebugCurrentFrame, we = ne.getStackAddendum();
          we !== "" && (z += "%s", Q = Q.concat([we]));
          var et = Q.map(function(Ye) {
            return String(Ye);
          });
          et.unshift("Warning: " + z), Function.prototype.apply.call(console[w], console, et);
        }
      }
      var L = {};
      function j(w, z) {
        {
          var Q = w.constructor, ne = Q && (Q.displayName || Q.name) || "ReactClass", we = ne + "." + z;
          if (L[we])
            return;
          O("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", z, ne), L[we] = !0;
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
        enqueueForceUpdate: function(w, z, Q) {
          j(w, "forceUpdate");
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
        enqueueReplaceState: function(w, z, Q, ne) {
          j(w, "replaceState");
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
        enqueueSetState: function(w, z, Q, ne) {
          j(w, "setState");
        }
      }, be = Object.assign, Se = {};
      Object.freeze(Se);
      function ke(w, z, Q) {
        this.props = w, this.context = z, this.refs = Se, this.updater = Q || J;
      }
      ke.prototype.isReactComponent = {}, ke.prototype.setState = function(w, z) {
        if (typeof w != "object" && typeof w != "function" && w != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, w, z, "setState");
      }, ke.prototype.forceUpdate = function(w) {
        this.updater.enqueueForceUpdate(this, w, "forceUpdate");
      };
      {
        var He = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Pe = function(w, z) {
          Object.defineProperty(ke.prototype, w, {
            get: function() {
              pe("%s(...) is deprecated in plain JavaScript React classes. %s", z[0], z[1]);
            }
          });
        };
        for (var Ne in He)
          He.hasOwnProperty(Ne) && Pe(Ne, He[Ne]);
      }
      function ot() {
      }
      ot.prototype = ke.prototype;
      function St(w, z, Q) {
        this.props = w, this.context = z, this.refs = Se, this.updater = Q || J;
      }
      var ht = St.prototype = new ot();
      ht.constructor = St, be(ht, ke.prototype), ht.isPureReactComponent = !0;
      function Zt() {
        var w = {
          current: null
        };
        return Object.seal(w), w;
      }
      var Re = Array.isArray;
      function $t(w) {
        return Re(w);
      }
      function Mn(w) {
        {
          var z = typeof Symbol == "function" && Symbol.toStringTag, Q = z && w[Symbol.toStringTag] || w.constructor.name || "Object";
          return Q;
        }
      }
      function Ln(w) {
        try {
          return Kn(w), !1;
        } catch {
          return !0;
        }
      }
      function Kn(w) {
        return "" + w;
      }
      function Xn(w) {
        if (Ln(w))
          return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(w)), Kn(w);
      }
      function Ur(w, z, Q) {
        var ne = w.displayName;
        if (ne)
          return ne;
        var we = z.displayName || z.name || "";
        return we !== "" ? Q + "(" + we + ")" : Q;
      }
      function kr(w) {
        return w.displayName || "Context";
      }
      function nr(w) {
        if (w == null)
          return null;
        if (typeof w.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
          return w.displayName || w.name || null;
        if (typeof w == "string")
          return w;
        switch (w) {
          case E:
            return "Fragment";
          case b:
            return "Portal";
          case _:
            return "Profiler";
          case y:
            return "StrictMode";
          case M:
            return "Suspense";
          case I:
            return "SuspenseList";
        }
        if (typeof w == "object")
          switch (w.$$typeof) {
            case k:
              var z = w;
              return kr(z) + ".Consumer";
            case N:
              var Q = w;
              return kr(Q._context) + ".Provider";
            case D:
              return Ur(w, w.render, "ForwardRef");
            case B:
              var ne = w.displayName || null;
              return ne !== null ? ne : nr(w.type) || "Memo";
            case ee: {
              var we = w, et = we._payload, Ye = we._init;
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
      }, Or, ba, vr;
      vr = {};
      function jr(w) {
        if (Sa.call(w, "ref")) {
          var z = Object.getOwnPropertyDescriptor(w, "ref").get;
          if (z && z.isReactWarning)
            return !1;
        }
        return w.ref !== void 0;
      }
      function xn(w) {
        if (Sa.call(w, "key")) {
          var z = Object.getOwnPropertyDescriptor(w, "key").get;
          if (z && z.isReactWarning)
            return !1;
        }
        return w.key !== void 0;
      }
      function Ca(w, z) {
        var Q = function() {
          Or || (Or = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        Q.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: Q,
          configurable: !0
        });
      }
      function wa(w, z) {
        var Q = function() {
          ba || (ba = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        Q.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: Q,
          configurable: !0
        });
      }
      function xa(w) {
        if (typeof w.ref == "string" && gt.current && w.__self && gt.current.stateNode !== w.__self) {
          var z = nr(gt.current.type);
          vr[z] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z, w.ref), vr[z] = !0);
        }
      }
      var Fe = function(w, z, Q, ne, we, et, Ye) {
        var mt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: g,
          // Built-in properties that belong on the element
          type: w,
          key: z,
          ref: Q,
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
          value: we
        }), Object.freeze && (Object.freeze(mt.props), Object.freeze(mt)), mt;
      };
      function lt(w, z, Q) {
        var ne, we = {}, et = null, Ye = null, mt = null, Dt = null;
        if (z != null) {
          jr(z) && (Ye = z.ref, xa(z)), xn(z) && (Xn(z.key), et = "" + z.key), mt = z.__self === void 0 ? null : z.__self, Dt = z.__source === void 0 ? null : z.__source;
          for (ne in z)
            Sa.call(z, ne) && !Ea.hasOwnProperty(ne) && (we[ne] = z[ne]);
        }
        var Xt = arguments.length - 2;
        if (Xt === 1)
          we.children = Q;
        else if (Xt > 1) {
          for (var tn = Array(Xt), nn = 0; nn < Xt; nn++)
            tn[nn] = arguments[nn + 2];
          Object.freeze && Object.freeze(tn), we.children = tn;
        }
        if (w && w.defaultProps) {
          var rn = w.defaultProps;
          for (ne in rn)
            we[ne] === void 0 && (we[ne] = rn[ne]);
        }
        if (et || Ye) {
          var En = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          et && Ca(we, En), Ye && wa(we, En);
        }
        return Fe(w, et, Ye, mt, Dt, gt.current, we);
      }
      function kt(w, z) {
        var Q = Fe(w.type, z, w.ref, w._self, w._source, w._owner, w.props);
        return Q;
      }
      function Gt(w, z, Q) {
        if (w == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
        var ne, we = be({}, w.props), et = w.key, Ye = w.ref, mt = w._self, Dt = w._source, Xt = w._owner;
        if (z != null) {
          jr(z) && (Ye = z.ref, Xt = gt.current), xn(z) && (Xn(z.key), et = "" + z.key);
          var tn;
          w.type && w.type.defaultProps && (tn = w.type.defaultProps);
          for (ne in z)
            Sa.call(z, ne) && !Ea.hasOwnProperty(ne) && (z[ne] === void 0 && tn !== void 0 ? we[ne] = tn[ne] : we[ne] = z[ne]);
        }
        var nn = arguments.length - 2;
        if (nn === 1)
          we.children = Q;
        else if (nn > 1) {
          for (var rn = Array(nn), En = 0; En < nn; En++)
            rn[En] = arguments[En + 2];
          we.children = rn;
        }
        return Fe(w.type, et, Ye, mt, Dt, Xt, we);
      }
      function Vt(w) {
        return typeof w == "object" && w !== null && w.$$typeof === g;
      }
      var $n = ".", _n = ":";
      function Dr(w) {
        var z = /[=:]/g, Q = {
          "=": "=0",
          ":": "=2"
        }, ne = w.replace(z, function(we) {
          return Q[we];
        });
        return "$" + ne;
      }
      var en = !1, ur = /\/+/g;
      function Kt(w) {
        return w.replace(ur, "$&/");
      }
      function dn(w, z) {
        return typeof w == "object" && w !== null && w.key != null ? (Xn(w.key), Dr("" + w.key)) : z.toString(36);
      }
      function ui(w, z, Q, ne, we) {
        var et = typeof w;
        (et === "undefined" || et === "boolean") && (w = null);
        var Ye = !1;
        if (w === null)
          Ye = !0;
        else
          switch (et) {
            case "string":
            case "number":
              Ye = !0;
              break;
            case "object":
              switch (w.$$typeof) {
                case g:
                case b:
                  Ye = !0;
              }
          }
        if (Ye) {
          var mt = w, Dt = we(mt), Xt = ne === "" ? $n + dn(mt, 0) : ne;
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
              Q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Dt.key && (!mt || mt.key !== Dt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Kt("" + Dt.key) + "/"
              ) : "") + Xt
            )), z.push(Dt));
          return 1;
        }
        var nn, rn, En = 0, Ht = ne === "" ? $n : ne + _n;
        if ($t(w))
          for (var $o = 0; $o < w.length; $o++)
            nn = w[$o], rn = Ht + dn(nn, $o), En += ui(nn, z, Q, rn, we);
        else {
          var Cu = ze(w);
          if (typeof Cu == "function") {
            var Ls = w;
            Cu === Ls.entries && (en || pe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), en = !0);
            for (var zs = Cu.call(Ls), to, Us = 0; !(to = zs.next()).done; )
              nn = to.value, rn = Ht + dn(nn, Us++), En += ui(nn, z, Q, rn, we);
          } else if (et === "object") {
            var js = String(w);
            throw new Error("Objects are not valid as a React child (found: " + (js === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : js) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return En;
      }
      function Pa(w, z, Q) {
        if (w == null)
          return w;
        var ne = [], we = 0;
        return ui(w, ne, "", "", function(et) {
          return z.call(Q, et, we++);
        }), ne;
      }
      function Mo(w) {
        var z = 0;
        return Pa(w, function() {
          z++;
        }), z;
      }
      function bl(w, z, Q) {
        Pa(w, function() {
          z.apply(this, arguments);
        }, Q);
      }
      function Cl(w) {
        return Pa(w, function(z) {
          return z;
        }) || [];
      }
      function Lo(w) {
        if (!Vt(w))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return w;
      }
      function si(w) {
        var z = {
          $$typeof: k,
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
        z.Provider = {
          $$typeof: N,
          _context: z
        };
        var Q = !1, ne = !1, we = !1;
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
                return Q || (Q = !0, O("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), z.Consumer;
              }
            },
            displayName: {
              get: function() {
                return z.displayName;
              },
              set: function(Ye) {
                we || (pe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ye), we = !0);
              }
            }
          }), z.Consumer = et;
        }
        return z._currentRenderer = null, z._currentRenderer2 = null, z;
      }
      var ci = -1, Fa = 0, Qi = 1, Kr = 2;
      function Xr(w) {
        if (w._status === ci) {
          var z = w._result, Q = z();
          if (Q.then(function(et) {
            if (w._status === Fa || w._status === ci) {
              var Ye = w;
              Ye._status = Qi, Ye._result = et;
            }
          }, function(et) {
            if (w._status === Fa || w._status === ci) {
              var Ye = w;
              Ye._status = Kr, Ye._result = et;
            }
          }), w._status === ci) {
            var ne = w;
            ne._status = Fa, ne._result = Q;
          }
        }
        if (w._status === Qi) {
          var we = w._result;
          return we === void 0 && O(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, we), "default" in we || O(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, we), we.default;
        } else
          throw w._result;
      }
      function Ta(w) {
        var z = {
          // We use these fields to store the result.
          _status: ci,
          _result: w
        }, Q = {
          $$typeof: ee,
          _payload: z,
          _init: Xr
        };
        {
          var ne, we;
          Object.defineProperties(Q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ne;
              },
              set: function(et) {
                O("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ne = et, Object.defineProperty(Q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return we;
              },
              set: function(et) {
                O("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), we = et, Object.defineProperty(Q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Q;
      }
      function Gi(w) {
        w != null && w.$$typeof === B ? O("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof w != "function" ? O("forwardRef requires a render function but was given %s.", w === null ? "null" : typeof w) : w.length !== 0 && w.length !== 2 && O("forwardRef render functions accept exactly two parameters: props and ref. %s", w.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), w != null && (w.defaultProps != null || w.propTypes != null) && O("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var z = {
          $$typeof: D,
          render: w
        };
        {
          var Q;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Q;
            },
            set: function(ne) {
              Q = ne, !w.name && !w.displayName && (w.displayName = ne);
            }
          });
        }
        return z;
      }
      var U;
      U = Symbol.for("react.module.reference");
      function me(w) {
        return !!(typeof w == "string" || typeof w == "function" || w === E || w === _ || re || w === y || w === M || w === I || le || w === fe || _e || Ce || Ae || typeof w == "object" && w !== null && (w.$$typeof === ee || w.$$typeof === B || w.$$typeof === N || w.$$typeof === k || w.$$typeof === D || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        w.$$typeof === U || w.getModuleId !== void 0));
      }
      function Me(w, z) {
        me(w) || O("memo: The first argument must be a component. Instead received: %s", w === null ? "null" : typeof w);
        var Q = {
          $$typeof: B,
          type: w,
          compare: z === void 0 ? null : z
        };
        {
          var ne;
          Object.defineProperty(Q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ne;
            },
            set: function(we) {
              ne = we, !w.name && !w.displayName && (w.displayName = we);
            }
          });
        }
        return Q;
      }
      function $e() {
        var w = Be.current;
        return w === null && O(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), w;
      }
      function At(w) {
        var z = $e();
        if (w._context !== void 0) {
          var Q = w._context;
          Q.Consumer === w ? O("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Q.Provider === w && O("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return z.useContext(w);
      }
      function zt(w) {
        var z = $e();
        return z.useState(w);
      }
      function _t(w, z, Q) {
        var ne = $e();
        return ne.useReducer(w, z, Q);
      }
      function ut(w) {
        var z = $e();
        return z.useRef(w);
      }
      function Jn(w, z) {
        var Q = $e();
        return Q.useEffect(w, z);
      }
      function pn(w, z) {
        var Q = $e();
        return Q.useInsertionEffect(w, z);
      }
      function vn(w, z) {
        var Q = $e();
        return Q.useLayoutEffect(w, z);
      }
      function Ar(w, z) {
        var Q = $e();
        return Q.useCallback(w, z);
      }
      function xi(w, z) {
        var Q = $e();
        return Q.useMemo(w, z);
      }
      function hn(w, z, Q) {
        var ne = $e();
        return ne.useImperativeHandle(w, z, Q);
      }
      function Jr(w, z) {
        {
          var Q = $e();
          return Q.useDebugValue(w, z);
        }
      }
      function ws() {
        var w = $e();
        return w.useTransition();
      }
      function Ti(w) {
        var z = $e();
        return z.useDeferredValue(w);
      }
      function Ot() {
        var w = $e();
        return w.useId();
      }
      function wl(w, z, Q) {
        var ne = $e();
        return ne.useSyncExternalStore(w, z, Q);
      }
      var Ki = 0, zo, Zr, xs, Pr, Ts, _s, Rs;
      function xl() {
      }
      xl.__reactDisabledLog = !0;
      function vu() {
        {
          if (Ki === 0) {
            zo = console.log, Zr = console.info, xs = console.warn, Pr = console.error, Ts = console.group, _s = console.groupCollapsed, Rs = console.groupEnd;
            var w = {
              configurable: !0,
              enumerable: !0,
              value: xl,
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
          Ki++;
        }
      }
      function Xi() {
        {
          if (Ki--, Ki === 0) {
            var w = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: be({}, w, {
                value: zo
              }),
              info: be({}, w, {
                value: Zr
              }),
              warn: be({}, w, {
                value: xs
              }),
              error: be({}, w, {
                value: Pr
              }),
              group: be({}, w, {
                value: Ts
              }),
              groupCollapsed: be({}, w, {
                value: _s
              }),
              groupEnd: be({}, w, {
                value: Rs
              })
            });
          }
          Ki < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var _i = he.ReactCurrentDispatcher, Ha;
      function Uo(w, z, Q) {
        {
          if (Ha === void 0)
            try {
              throw Error();
            } catch (we) {
              var ne = we.stack.trim().match(/\n( *(at )?)/);
              Ha = ne && ne[1] || "";
            }
          return `
` + Ha + w;
        }
      }
      var Ri = !1, Tl;
      {
        var _l = typeof WeakMap == "function" ? WeakMap : Map;
        Tl = new _l();
      }
      function jo(w, z) {
        if (!w || Ri)
          return "";
        {
          var Q = Tl.get(w);
          if (Q !== void 0)
            return Q;
        }
        var ne;
        Ri = !0;
        var we = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var et;
        et = _i.current, _i.current = null, vu();
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
              Reflect.construct(w, [], Ye);
            } else {
              try {
                Ye.call();
              } catch (Ht) {
                ne = Ht;
              }
              w.call(Ye.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ht) {
              ne = Ht;
            }
            w();
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
                      return w.displayName && nn.includes("<anonymous>") && (nn = nn.replace("<anonymous>", w.displayName)), typeof w == "function" && Tl.set(w, nn), nn;
                    }
                  while (Xt >= 1 && tn >= 0);
                break;
              }
          }
        } finally {
          Ri = !1, _i.current = et, Xi(), Error.prepareStackTrace = we;
        }
        var rn = w ? w.displayName || w.name : "", En = rn ? Uo(rn) : "";
        return typeof w == "function" && Tl.set(w, En), En;
      }
      function ks(w, z, Q) {
        return jo(w, !1);
      }
      function Os(w) {
        var z = w.prototype;
        return !!(z && z.isReactComponent);
      }
      function Lt(w, z, Q) {
        if (w == null)
          return "";
        if (typeof w == "function")
          return jo(w, Os(w));
        if (typeof w == "string")
          return Uo(w);
        switch (w) {
          case M:
            return Uo("Suspense");
          case I:
            return Uo("SuspenseList");
        }
        if (typeof w == "object")
          switch (w.$$typeof) {
            case D:
              return ks(w.render);
            case B:
              return Lt(w.type, z, Q);
            case ee: {
              var ne = w, we = ne._payload, et = ne._init;
              try {
                return Lt(et(we), z, Q);
              } catch {
              }
            }
          }
        return "";
      }
      var Ds = {}, hu = he.ReactDebugCurrentFrame;
      function Po(w) {
        if (w) {
          var z = w._owner, Q = Lt(w.type, w._source, z ? z.type : null);
          hu.setExtraStackFrame(Q);
        } else
          hu.setExtraStackFrame(null);
      }
      function As(w, z, Q, ne, we) {
        {
          var et = Function.call.bind(Sa);
          for (var Ye in w)
            if (et(w, Ye)) {
              var mt = void 0;
              try {
                if (typeof w[Ye] != "function") {
                  var Dt = Error((ne || "React class") + ": " + Q + " type `" + Ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[Ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Dt.name = "Invariant Violation", Dt;
                }
                mt = w[Ye](z, Ye, ne, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Xt) {
                mt = Xt;
              }
              mt && !(mt instanceof Error) && (Po(we), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", Q, Ye, typeof mt), Po(null)), mt instanceof Error && !(mt.message in Ds) && (Ds[mt.message] = !0, Po(we), O("Failed %s type: %s", Q, mt.message), Po(null));
            }
        }
      }
      function Ft(w) {
        if (w) {
          var z = w._owner, Q = Lt(w.type, w._source, z ? z.type : null);
          De(Q);
        } else
          De(null);
      }
      var mu;
      mu = !1;
      function Rl() {
        if (gt.current) {
          var w = nr(gt.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
      function Et(w) {
        if (w !== void 0) {
          var z = w.fileName.replace(/^.*[\\\/]/, ""), Q = w.lineNumber;
          return `

Check your code at ` + z + ":" + Q + ".";
        }
        return "";
      }
      function fi(w) {
        return w != null ? Et(w.__source) : "";
      }
      var Rn = {};
      function ea(w) {
        var z = Rl();
        if (!z) {
          var Q = typeof w == "string" ? w : w.displayName || w.name;
          Q && (z = `

Check the top-level render call using <` + Q + ">.");
        }
        return z;
      }
      function $a(w, z) {
        if (!(!w._store || w._store.validated || w.key != null)) {
          w._store.validated = !0;
          var Q = ea(z);
          if (!Rn[Q]) {
            Rn[Q] = !0;
            var ne = "";
            w && w._owner && w._owner !== gt.current && (ne = " It was passed a child from " + nr(w._owner.type) + "."), Ft(w), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, ne), Ft(null);
          }
        }
      }
      function Fo(w, z) {
        if (typeof w == "object") {
          if ($t(w))
            for (var Q = 0; Q < w.length; Q++) {
              var ne = w[Q];
              Vt(ne) && $a(ne, z);
            }
          else if (Vt(w))
            w._store && (w._store.validated = !0);
          else if (w) {
            var we = ze(w);
            if (typeof we == "function" && we !== w.entries)
              for (var et = we.call(w), Ye; !(Ye = et.next()).done; )
                Vt(Ye.value) && $a(Ye.value, z);
          }
        }
      }
      function Sn(w) {
        {
          var z = w.type;
          if (z == null || typeof z == "string")
            return;
          var Q;
          if (typeof z == "function")
            Q = z.propTypes;
          else if (typeof z == "object" && (z.$$typeof === D || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          z.$$typeof === B))
            Q = z.propTypes;
          else
            return;
          if (Q) {
            var ne = nr(z);
            As(Q, w.props, "prop", ne, w);
          } else if (z.PropTypes !== void 0 && !mu) {
            mu = !0;
            var we = nr(z);
            O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
          }
          typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function kn(w) {
        {
          for (var z = Object.keys(w.props), Q = 0; Q < z.length; Q++) {
            var ne = z[Q];
            if (ne !== "children" && ne !== "key") {
              Ft(w), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), Ft(null);
              break;
            }
          }
          w.ref !== null && (Ft(w), O("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
        }
      }
      function Ns(w, z, Q) {
        var ne = me(w);
        if (!ne) {
          var we = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (we += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = fi(z);
          et ? we += et : we += Rl();
          var Ye;
          w === null ? Ye = "null" : $t(w) ? Ye = "array" : w !== void 0 && w.$$typeof === g ? (Ye = "<" + (nr(w.type) || "Unknown") + " />", we = " Did you accidentally export a JSX literal instead of a component?") : Ye = typeof w, O("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ye, we);
        }
        var mt = lt.apply(this, arguments);
        if (mt == null)
          return mt;
        if (ne)
          for (var Dt = 2; Dt < arguments.length; Dt++)
            Fo(arguments[Dt], w);
        return w === E ? kn(mt) : Sn(mt), mt;
      }
      var hr = !1;
      function ta(w) {
        var z = Ns.bind(null, w);
        return z.type = w, hr || (hr = !0, pe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(z, "type", {
          enumerable: !1,
          get: function() {
            return pe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: w
            }), w;
          }
        }), z;
      }
      function di(w, z, Q) {
        for (var ne = Gt.apply(this, arguments), we = 2; we < arguments.length; we++)
          Fo(arguments[we], ne.type);
        return Sn(ne), ne;
      }
      function yu(w, z) {
        var Q = ue.transition;
        ue.transition = {};
        var ne = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          w();
        } finally {
          if (ue.transition = Q, Q === null && ne._updatedFibers) {
            var we = ne._updatedFibers.size;
            we > 10 && pe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ne._updatedFibers.clear();
          }
        }
      }
      var kl = !1, Ol = null;
      function Ho(w) {
        if (Ol === null)
          try {
            var z = ("require" + Math.random()).slice(0, 7), Q = s && s[z];
            Ol = Q.call(s, "timers").setImmediate;
          } catch {
            Ol = function(we) {
              kl === !1 && (kl = !0, typeof MessageChannel > "u" && O("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var et = new MessageChannel();
              et.port1.onmessage = we, et.port2.postMessage(void 0);
            };
          }
        return Ol(w);
      }
      var Ba = 0, Ji = !1;
      function gu(w) {
        {
          var z = Ba;
          Ba++, Ue.current === null && (Ue.current = []);
          var Q = Ue.isBatchingLegacy, ne;
          try {
            if (Ue.isBatchingLegacy = !0, ne = w(), !Q && Ue.didScheduleLegacyUpdate) {
              var we = Ue.current;
              we !== null && (Ue.didScheduleLegacyUpdate = !1, eo(we));
            }
          } catch (rn) {
            throw Zi(z), rn;
          } finally {
            Ue.isBatchingLegacy = Q;
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
      function Zi(w) {
        w !== Ba - 1 && O("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ba = w;
      }
      function Su(w, z, Q) {
        {
          var ne = Ue.current;
          if (ne !== null)
            try {
              eo(ne), Ho(function() {
                ne.length === 0 ? (Ue.current = null, z(w)) : Su(w, z, Q);
              });
            } catch (we) {
              Q(we);
            }
          else
            z(w);
        }
      }
      var ki = !1;
      function eo(w) {
        if (!ki) {
          ki = !0;
          var z = 0;
          try {
            for (; z < w.length; z++) {
              var Q = w[z];
              do
                Q = Q(!0);
              while (Q !== null);
            }
            w.length = 0;
          } catch (ne) {
            throw w = w.slice(z + 1), ne;
          } finally {
            ki = !1;
          }
        }
      }
      var Eu = Ns, Ms = di, pi = ta, bu = {
        map: Pa,
        forEach: bl,
        count: Mo,
        toArray: Cl,
        only: Lo
      };
      u.Children = bu, u.Component = ke, u.Fragment = E, u.Profiler = _, u.PureComponent = St, u.StrictMode = y, u.Suspense = M, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, u.cloneElement = Ms, u.createContext = si, u.createElement = Eu, u.createFactory = pi, u.createRef = Zt, u.forwardRef = Gi, u.isValidElement = Vt, u.lazy = Ta, u.memo = Me, u.startTransition = yu, u.unstable_act = gu, u.useCallback = Ar, u.useContext = At, u.useDebugValue = Jr, u.useDeferredValue = Ti, u.useEffect = Jn, u.useId = Ot, u.useImperativeHandle = hn, u.useInsertionEffect = pn, u.useLayoutEffect = vn, u.useMemo = xi, u.useReducer = _t, u.useRef = ut, u.useState = zt, u.useSyncExternalStore = wl, u.useTransition = ws, u.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Bv, Bv.exports)), Bv.exports;
}
var wN = {};
wN.NODE_ENV === "production" ? pb.exports = bN() : pb.exports = CN();
var wt = pb.exports;
const Nb = /* @__PURE__ */ TT(wt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M1;
function xN() {
  if (M1)
    return Uv;
  M1 = 1;
  var s = wt, u = Symbol.for("react.element"), f = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, g = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(y, _, N) {
    var k, D = {}, M = null, I = null;
    N !== void 0 && (M = "" + N), _.key !== void 0 && (M = "" + _.key), _.ref !== void 0 && (I = _.ref);
    for (k in _)
      p.call(_, k) && !b.hasOwnProperty(k) && (D[k] = _[k]);
    if (y && y.defaultProps)
      for (k in _ = y.defaultProps, _)
        D[k] === void 0 && (D[k] = _[k]);
    return { $$typeof: u, type: y, key: M, ref: I, props: D, _owner: g.current };
  }
  return Uv.Fragment = f, Uv.jsx = E, Uv.jsxs = E, Uv;
}
var jv = {}, L1;
function TN() {
  if (L1)
    return jv;
  L1 = 1;
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
    var u = wt, f = Symbol.for("react.element"), p = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), _ = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), ee = Symbol.iterator, fe = "@@iterator";
    function Le(U) {
      if (U === null || typeof U != "object")
        return null;
      var me = ee && U[ee] || U[fe];
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
        var $e = Ke.ReactDebugCurrentFrame, At = $e.getStackAddendum();
        At !== "" && (me += "%s", Me = Me.concat([At]));
        var zt = Me.map(function(_t) {
          return String(_t);
        });
        zt.unshift("Warning: " + me), Function.prototype.apply.call(console[U], console, zt);
      }
    }
    var ue = !1, Ue = !1, gt = !1, X = !1, Te = !1, De;
    De = Symbol.for("react.module.reference");
    function _e(U) {
      return !!(typeof U == "string" || typeof U == "function" || U === g || U === E || Te || U === b || U === k || U === D || X || U === B || ue || Ue || gt || typeof U == "object" && U !== null && (U.$$typeof === I || U.$$typeof === M || U.$$typeof === y || U.$$typeof === _ || U.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      U.$$typeof === De || U.getModuleId !== void 0));
    }
    function Ce(U, me, Me) {
      var $e = U.displayName;
      if ($e)
        return $e;
      var At = me.displayName || me.name || "";
      return At !== "" ? Me + "(" + At + ")" : Me;
    }
    function Ae(U) {
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
          case _:
            var me = U;
            return Ae(me) + ".Consumer";
          case y:
            var Me = U;
            return Ae(Me._context) + ".Provider";
          case N:
            return Ce(U, U.render, "ForwardRef");
          case M:
            var $e = U.displayName || null;
            return $e !== null ? $e : le(U.type) || "Memo";
          case I: {
            var At = U, zt = At._payload, _t = At._init;
            try {
              return le(_t(zt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, he = 0, pe, O, ae, L, j, J, be;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function ke() {
      {
        if (he === 0) {
          pe = console.log, O = console.info, ae = console.warn, L = console.error, j = console.group, J = console.groupCollapsed, be = console.groupEnd;
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
        he++;
      }
    }
    function He() {
      {
        if (he--, he === 0) {
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
              value: J
            }),
            groupEnd: re({}, U, {
              value: be
            })
          });
        }
        he < 0 && ze("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pe = Ke.ReactCurrentDispatcher, Ne;
    function ot(U, me, Me) {
      {
        if (Ne === void 0)
          try {
            throw Error();
          } catch (At) {
            var $e = At.stack.trim().match(/\n( *(at )?)/);
            Ne = $e && $e[1] || "";
          }
        return `
` + Ne + U;
      }
    }
    var St = !1, ht;
    {
      var Zt = typeof WeakMap == "function" ? WeakMap : Map;
      ht = new Zt();
    }
    function Re(U, me) {
      if (!U || St)
        return "";
      {
        var Me = ht.get(U);
        if (Me !== void 0)
          return Me;
      }
      var $e;
      St = !0;
      var At = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var zt;
      zt = Pe.current, Pe.current = null, ke();
      try {
        if (me) {
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
            } catch (Jr) {
              $e = Jr;
            }
            Reflect.construct(U, [], _t);
          } else {
            try {
              _t.call();
            } catch (Jr) {
              $e = Jr;
            }
            U.call(_t.prototype);
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
`), pn = ut.length - 1, vn = Jn.length - 1; pn >= 1 && vn >= 0 && ut[pn] !== Jn[vn]; )
            vn--;
          for (; pn >= 1 && vn >= 0; pn--, vn--)
            if (ut[pn] !== Jn[vn]) {
              if (pn !== 1 || vn !== 1)
                do
                  if (pn--, vn--, vn < 0 || ut[pn] !== Jn[vn]) {
                    var Ar = `
` + ut[pn].replace(" at new ", " at ");
                    return U.displayName && Ar.includes("<anonymous>") && (Ar = Ar.replace("<anonymous>", U.displayName)), typeof U == "function" && ht.set(U, Ar), Ar;
                  }
                while (pn >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        St = !1, Pe.current = zt, He(), Error.prepareStackTrace = At;
      }
      var xi = U ? U.displayName || U.name : "", hn = xi ? ot(xi) : "";
      return typeof U == "function" && ht.set(U, hn), hn;
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
          case N:
            return $t(U.render);
          case M:
            return Ln(U.type, me, Me);
          case I: {
            var $e = U, At = $e._payload, zt = $e._init;
            try {
              return Ln(zt(At), me, Me);
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
    function nr(U, me, Me, $e, At) {
      {
        var zt = Function.call.bind(Kn);
        for (var _t in U)
          if (zt(U, _t)) {
            var ut = void 0;
            try {
              if (typeof U[_t] != "function") {
                var Jn = Error(($e || "React class") + ": " + Me + " type `" + _t + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof U[_t] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Jn.name = "Invariant Violation", Jn;
              }
              ut = U[_t](me, _t, $e, Me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pn) {
              ut = pn;
            }
            ut && !(ut instanceof Error) && (kr(At), ze("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $e || "React class", Me, _t, typeof ut), kr(null)), ut instanceof Error && !(ut.message in Xn) && (Xn[ut.message] = !0, kr(At), ze("Failed %s type: %s", Me, ut.message), kr(null));
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
        return vr(U), !1;
      } catch {
        return !0;
      }
    }
    function vr(U) {
      return "" + U;
    }
    function jr(U) {
      if (ba(U))
        return ze("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(U)), vr(U);
    }
    var xn = Ke.ReactCurrentOwner, Ca = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wa, xa, Fe;
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
      if (typeof U.ref == "string" && xn.current && me && xn.current.stateNode !== me) {
        var Me = le(xn.current.type);
        Fe[Me] || (ze('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', le(xn.current.type), U.ref), Fe[Me] = !0);
      }
    }
    function Vt(U, me) {
      {
        var Me = function() {
          wa || (wa = !0, ze("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", me));
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
          xa || (xa = !0, ze("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", me));
        };
        Me.isReactWarning = !0, Object.defineProperty(U, "ref", {
          get: Me,
          configurable: !0
        });
      }
    }
    var _n = function(U, me, Me, $e, At, zt, _t) {
      var ut = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: U,
        key: me,
        ref: Me,
        props: _t,
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
        value: At
      }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
    };
    function Dr(U, me, Me, $e, At) {
      {
        var zt, _t = {}, ut = null, Jn = null;
        Me !== void 0 && (jr(Me), ut = "" + Me), kt(me) && (jr(me.key), ut = "" + me.key), lt(me) && (Jn = me.ref, Gt(me, At));
        for (zt in me)
          Kn.call(me, zt) && !Ca.hasOwnProperty(zt) && (_t[zt] = me[zt]);
        if (U && U.defaultProps) {
          var pn = U.defaultProps;
          for (zt in pn)
            _t[zt] === void 0 && (_t[zt] = pn[zt]);
        }
        if (ut || Jn) {
          var vn = typeof U == "function" ? U.displayName || U.name || "Unknown" : U;
          ut && Vt(_t, vn), Jn && $n(_t, vn);
        }
        return _n(U, ut, Jn, At, $e, xn.current, _t);
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
    function Cl(U) {
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
        var Me = Cl(me);
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
          var At = Le(U);
          if (typeof At == "function" && At !== U.entries)
            for (var zt = At.call(U), _t; !(_t = zt.next()).done; )
              ui(_t.value) && Lo(_t.value, me);
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
        else if (typeof me == "object" && (me.$$typeof === N || // Note: Memo only checks outer props here.
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
          var At = le(me);
          ze("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", At || "Unknown");
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
    function Qi(U, me, Me, $e, At, zt) {
      {
        var _t = _e(U);
        if (!_t) {
          var ut = "";
          (U === void 0 || typeof U == "object" && U !== null && Object.keys(U).length === 0) && (ut += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Jn = Mo(At);
          Jn ? ut += Jn : ut += Pa();
          var pn;
          U === null ? pn = "null" : Ea(U) ? pn = "array" : U !== void 0 && U.$$typeof === f ? (pn = "<" + (le(U.type) || "Unknown") + " />", ut = " Did you accidentally export a JSX literal instead of a component?") : pn = typeof U, ze("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pn, ut);
        }
        var vn = Dr(U, me, Me, At, zt);
        if (vn == null)
          return vn;
        if (_t) {
          var Ar = me.children;
          if (Ar !== void 0)
            if ($e)
              if (Ea(Ar)) {
                for (var xi = 0; xi < Ar.length; xi++)
                  si(Ar[xi], U);
                Object.freeze && Object.freeze(Ar);
              } else
                ze("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              si(Ar, U);
        }
        return U === g ? Fa(vn) : ci(vn), vn;
      }
    }
    function Kr(U, me, Me) {
      return Qi(U, me, Me, !0);
    }
    function Xr(U, me, Me) {
      return Qi(U, me, Me, !1);
    }
    var Ta = Xr, Gi = Kr;
    jv.Fragment = g, jv.jsx = Ta, jv.jsxs = Gi;
  }(), jv;
}
var _N = {};
_N.NODE_ENV === "production" ? db.exports = xN() : db.exports = TN();
var te = db.exports, Vv = {}, vb = { exports: {} }, oi = {}, Yy = { exports: {} }, KE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z1;
function RN() {
  return z1 || (z1 = 1, function(s) {
    function u(O, ae) {
      var L = O.length;
      O.push(ae);
      e:
        for (; 0 < L; ) {
          var j = L - 1 >>> 1, J = O[j];
          if (0 < g(J, ae))
            O[j] = ae, O[L] = J, L = j;
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
          for (var j = 0, J = O.length, be = J >>> 1; j < be; ) {
            var Se = 2 * (j + 1) - 1, ke = O[Se], He = Se + 1, Pe = O[He];
            if (0 > g(ke, L))
              He < J && 0 > g(Pe, ke) ? (O[j] = Pe, O[He] = L, j = He) : (O[j] = ke, O[Se] = L, j = Se);
            else if (He < J && 0 > g(Pe, L))
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
    var _ = [], N = [], k = 1, D = null, M = 3, I = !1, B = !1, ee = !1, fe = typeof setTimeout == "function" ? setTimeout : null, Le = typeof clearTimeout == "function" ? clearTimeout : null, Ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ze(O) {
      for (var ae = f(N); ae !== null; ) {
        if (ae.callback === null)
          p(N);
        else if (ae.startTime <= O)
          p(N), ae.sortIndex = ae.expirationTime, u(_, ae);
        else
          break;
        ae = f(N);
      }
    }
    function Be(O) {
      if (ee = !1, ze(O), !B)
        if (f(_) !== null)
          B = !0, he(ue);
        else {
          var ae = f(N);
          ae !== null && pe(Be, ae.startTime - O);
        }
    }
    function ue(O, ae) {
      B = !1, ee && (ee = !1, Le(X), X = -1), I = !0;
      var L = M;
      try {
        for (ze(ae), D = f(_); D !== null && (!(D.expirationTime > ae) || O && !_e()); ) {
          var j = D.callback;
          if (typeof j == "function") {
            D.callback = null, M = D.priorityLevel;
            var J = j(D.expirationTime <= ae);
            ae = s.unstable_now(), typeof J == "function" ? D.callback = J : D === f(_) && p(_), ze(ae);
          } else
            p(_);
          D = f(_);
        }
        if (D !== null)
          var be = !0;
        else {
          var Se = f(N);
          Se !== null && pe(Be, Se.startTime - ae), be = !1;
        }
        return be;
      } finally {
        D = null, M = L, I = !1;
      }
    }
    var Ue = !1, gt = null, X = -1, Te = 5, De = -1;
    function _e() {
      return !(s.unstable_now() - De < Te);
    }
    function Ce() {
      if (gt !== null) {
        var O = s.unstable_now();
        De = O;
        var ae = !0;
        try {
          ae = gt(!0, O);
        } finally {
          ae ? Ae() : (Ue = !1, gt = null);
        }
      } else
        Ue = !1;
    }
    var Ae;
    if (typeof Ke == "function")
      Ae = function() {
        Ke(Ce);
      };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), re = le.port2;
      le.port1.onmessage = Ce, Ae = function() {
        re.postMessage(null);
      };
    } else
      Ae = function() {
        fe(Ce, 0);
      };
    function he(O) {
      gt = O, Ue || (Ue = !0, Ae());
    }
    function pe(O, ae) {
      X = fe(function() {
        O(s.unstable_now());
      }, ae);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, s.unstable_continueExecution = function() {
      B || I || (B = !0, he(ue));
    }, s.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Te = 0 < O ? Math.floor(1e3 / O) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, s.unstable_getFirstCallbackNode = function() {
      return f(_);
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
      return J = L + J, O = { id: k++, callback: ae, priorityLevel: O, startTime: L, expirationTime: J, sortIndex: -1 }, L > j ? (O.sortIndex = L, u(N, O), f(_) === null && O === f(N) && (ee ? (Le(X), X = -1) : ee = !0, pe(Be, L - j))) : (O.sortIndex = J, u(_, O), B || I || (B = !0, he(ue))), O;
    }, s.unstable_shouldYield = _e, s.unstable_wrapCallback = function(O) {
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
var XE = {}, U1;
function kN() {
  return U1 || (U1 = 1, function(s) {
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
        Fe.push(lt), _(Fe, lt, kt);
      }
      function E(Fe) {
        return Fe.length === 0 ? null : Fe[0];
      }
      function y(Fe) {
        if (Fe.length === 0)
          return null;
        var lt = Fe[0], kt = Fe.pop();
        return kt !== lt && (Fe[0] = kt, N(Fe, kt, 0)), lt;
      }
      function _(Fe, lt, kt) {
        for (var Gt = kt; Gt > 0; ) {
          var Vt = Gt - 1 >>> 1, $n = Fe[Vt];
          if (k($n, lt) > 0)
            Fe[Vt] = lt, Fe[Gt] = $n, Gt = Vt;
          else
            return;
        }
      }
      function N(Fe, lt, kt) {
        for (var Gt = kt, Vt = Fe.length, $n = Vt >>> 1; Gt < $n; ) {
          var _n = (Gt + 1) * 2 - 1, Dr = Fe[_n], en = _n + 1, ur = Fe[en];
          if (k(Dr, lt) < 0)
            en < Vt && k(ur, Dr) < 0 ? (Fe[Gt] = ur, Fe[en] = lt, Gt = en) : (Fe[Gt] = Dr, Fe[_n] = lt, Gt = _n);
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
      var D = 1, M = 2, I = 3, B = 4, ee = 5;
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
      var ue = 1073741823, Ue = -1, gt = 250, X = 5e3, Te = 1e4, De = ue, _e = [], Ce = [], Ae = 1, le = null, re = I, he = !1, pe = !1, O = !1, ae = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function J(Fe) {
        for (var lt = E(Ce); lt !== null; ) {
          if (lt.callback === null)
            y(Ce);
          else if (lt.startTime <= Fe)
            y(Ce), lt.sortIndex = lt.expirationTime, b(_e, lt);
          else
            return;
          lt = E(Ce);
        }
      }
      function be(Fe) {
        if (O = !1, J(Fe), !pe)
          if (E(_e) !== null)
            pe = !0, jr(Se);
          else {
            var lt = E(Ce);
            lt !== null && xn(be, lt.startTime - Fe);
          }
      }
      function Se(Fe, lt) {
        pe = !1, O && (O = !1, Ca()), he = !0;
        var kt = re;
        try {
          var Gt;
          if (!p)
            return ke(Fe, lt);
        } finally {
          le = null, re = kt, he = !1;
        }
      }
      function ke(Fe, lt) {
        var kt = lt;
        for (J(kt), le = E(_e); le !== null && !f && !(le.expirationTime > kt && (!Fe || kr())); ) {
          var Gt = le.callback;
          if (typeof Gt == "function") {
            le.callback = null, re = le.priorityLevel;
            var Vt = le.expirationTime <= kt, $n = Gt(Vt);
            kt = s.unstable_now(), typeof $n == "function" ? le.callback = $n : le === E(_e) && y(_e), J(kt);
          } else
            y(_e);
          le = E(_e);
        }
        if (le !== null)
          return !0;
        var _n = E(Ce);
        return _n !== null && xn(be, _n.startTime - kt), !1;
      }
      function He(Fe, lt) {
        switch (Fe) {
          case D:
          case M:
          case I:
          case B:
          case ee:
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
      function Ne(Fe) {
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
        var _n;
        switch (Fe) {
          case D:
            _n = Ue;
            break;
          case M:
            _n = gt;
            break;
          case ee:
            _n = De;
            break;
          case B:
            _n = Te;
            break;
          case I:
          default:
            _n = X;
            break;
        }
        var Dr = Vt + _n, en = {
          id: Ae++,
          callback: lt,
          priorityLevel: Fe,
          startTime: Vt,
          expirationTime: Dr,
          sortIndex: -1
        };
        return Vt > Gt ? (en.sortIndex = Vt, b(Ce, en), E(_e) === null && en === E(Ce) && (O ? Ca() : O = !0, xn(be, Vt - Gt))) : (en.sortIndex = Dr, b(_e, en), !pe && !he && (pe = !0, jr(Se))), en;
      }
      function St() {
      }
      function ht() {
        !pe && !he && (pe = !0, jr(Se));
      }
      function Zt() {
        return E(_e);
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
        var ba = new MessageChannel(), vr = ba.port2;
        ba.port1.onmessage = Ea, Or = function() {
          vr.postMessage(null);
        };
      } else
        Or = function() {
          ae(Ea, 0);
        };
      function jr(Fe) {
        Ln = Fe, Mn || (Mn = !0, Or());
      }
      function xn(Fe, lt) {
        Kn = ae(function() {
          Fe(s.unstable_now());
        }, lt);
      }
      function Ca() {
        L(Kn), Kn = -1;
      }
      var wa = nr, xa = null;
      s.unstable_IdlePriority = ee, s.unstable_ImmediatePriority = D, s.unstable_LowPriority = B, s.unstable_NormalPriority = I, s.unstable_Profiling = xa, s.unstable_UserBlockingPriority = M, s.unstable_cancelCallback = Re, s.unstable_continueExecution = ht, s.unstable_forceFrameRate = Sa, s.unstable_getCurrentPriorityLevel = $t, s.unstable_getFirstCallbackNode = Zt, s.unstable_next = Pe, s.unstable_pauseExecution = St, s.unstable_requestPaint = wa, s.unstable_runWithPriority = He, s.unstable_scheduleCallback = ot, s.unstable_shouldYield = kr, s.unstable_wrapCallback = Ne, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(XE)), XE;
}
var j1;
function _T() {
  if (j1)
    return Yy.exports;
  j1 = 1;
  var s = {};
  return s.NODE_ENV === "production" ? Yy.exports = RN() : Yy.exports = kN(), Yy.exports;
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
var P1;
function ON() {
  if (P1)
    return oi;
  P1 = 1;
  var s = wt, u = _T();
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
  var y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _ = Object.prototype.hasOwnProperty, N = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, D = {};
  function M(n) {
    return _.call(D, n) ? !0 : _.call(k, n) ? !1 : N.test(n) ? D[n] = !0 : (k[n] = !0, !1);
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
  function ee(n, r, o, c, v, m, x) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = v, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = x;
  }
  var fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    fe[n] = new ee(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    fe[r] = new ee(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    fe[n] = new ee(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    fe[n] = new ee(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    fe[n] = new ee(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    fe[n] = new ee(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    fe[n] = new ee(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    fe[n] = new ee(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    fe[n] = new ee(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    fe[r] = new ee(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Le, Ke);
    fe[r] = new ee(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Le, Ke);
    fe[r] = new ee(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    fe[n] = new ee(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), fe.xlinkHref = new ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    fe[n] = new ee(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ze(n, r, o, c) {
    var v = fe.hasOwnProperty(r) ? fe[r] : null;
    (v !== null ? v.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (B(r, o, v, c) && (o = null), c || v === null ? M(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : v.mustUseProperty ? n[v.propertyName] = o === null ? v.type === 3 ? !1 : "" : o : (r = v.attributeName, c = v.attributeNamespace, o === null ? n.removeAttribute(r) : (v = v.type, o = v === 3 || v === 4 && o === !0 ? "" : "" + o, c ? n.setAttributeNS(c, r, o) : n.setAttribute(r, o))));
  }
  var Be = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ue = Symbol.for("react.element"), Ue = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), Te = Symbol.for("react.profiler"), De = Symbol.for("react.provider"), _e = Symbol.for("react.context"), Ce = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), O = Symbol.iterator;
  function ae(n) {
    return n === null || typeof n != "object" ? null : (n = O && n[O] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var L = Object.assign, j;
  function J(n) {
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
          } catch (Z) {
            var c = Z;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Z) {
            c = Z;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Z) {
          c = Z;
        }
        n();
      }
    } catch (Z) {
      if (Z && c && typeof Z.stack == "string") {
        for (var v = Z.stack.split(`
`), m = c.stack.split(`
`), x = v.length - 1, A = m.length - 1; 1 <= x && 0 <= A && v[x] !== m[A]; )
          A--;
        for (; 1 <= x && 0 <= A; x--, A--)
          if (v[x] !== m[A]) {
            if (x !== 1 || A !== 1)
              do
                if (x--, A--, 0 > A || v[x] !== m[A]) {
                  var P = `
` + v[x].replace(" at new ", " at ");
                  return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), P;
                }
              while (1 <= x && 0 <= A);
            break;
          }
      }
    } finally {
      be = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? J(n) : "";
  }
  function ke(n) {
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
      case Te:
        return "Profiler";
      case X:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case le:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case _e:
          return (n.displayName || "Context") + ".Consumer";
        case De:
          return (n._context.displayName || "Context") + ".Provider";
        case Ce:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case re:
          return r = n.displayName || null, r !== null ? r : He(n.type) || "Memo";
        case he:
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
        return r === X ? "StrictMode" : "Mode";
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
  function Ne(n) {
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
      var v = o.get, m = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(x) {
        c = "" + x, m.call(this, x);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(x) {
        c = "" + x;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function ht(n) {
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
    o = Ne(r.value != null ? r.value : o), n._wrapperState = { initialChecked: c, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Ln(n, r) {
    r = r.checked, r != null && ze(n, "checked", r, !1);
  }
  function Kn(n, r) {
    Ln(n, r);
    var o = Ne(r.value), c = r.type;
    if (o != null)
      c === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ur(n, r.type, o) : r.hasOwnProperty("defaultValue") && Ur(n, r.type, Ne(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (var v = 0; v < o.length; v++)
        r["$" + o[v]] = !0;
      for (o = 0; o < n.length; o++)
        v = r.hasOwnProperty("$" + n[o].value), n[o].selected !== v && (n[o].selected = v), v && c && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Ne(o), r = null, v = 0; v < n.length; v++) {
        if (n[v].value === o) {
          n[v].selected = !0, c && (n[v].defaultSelected = !0);
          return;
        }
        r !== null || n[v].disabled || (r = n[v]);
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
    n._wrapperState = { initialValue: Ne(o) };
  }
  function Or(n, r) {
    var o = Ne(r.value), c = Ne(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), c != null && (n.defaultValue = "" + c);
  }
  function ba(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function vr(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? vr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var xn, Ca = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, c, v) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, c, v);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (xn = xn || document.createElement("div"), xn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = xn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function wa(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var xa = {
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
  Object.keys(xa).forEach(function(n) {
    Fe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), xa[r] = xa[n];
    });
  });
  function lt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || xa.hasOwnProperty(n) && xa[n] ? ("" + r).trim() : r + "px";
  }
  function kt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var c = o.indexOf("--") === 0, v = lt(o, r[o], c);
        o === "float" && (o = "cssFloat"), c ? n.setProperty(o, v) : n[o] = v;
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
  var _n = null;
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
  var Cl = !1;
  function Lo(n, r, o) {
    if (Cl)
      return n(r, o);
    Cl = !0;
    try {
      return Mo(n, r, o);
    } finally {
      Cl = !1, (ur !== null || Kt !== null) && (bl(), Pa());
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
  function Qi(n, r, o, c, v, m, x, A, P) {
    var Z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Z);
    } catch (ye) {
      this.onError(ye);
    }
  }
  var Kr = !1, Xr = null, Ta = !1, Gi = null, U = { onError: function(n) {
    Kr = !0, Xr = n;
  } };
  function me(n, r, o, c, v, m, x, A, P) {
    Kr = !1, Xr = null, Qi.apply(U, arguments);
  }
  function Me(n, r, o, c, v, m, x, A, P) {
    if (me.apply(this, arguments), Kr) {
      if (Kr) {
        var Z = Xr;
        Kr = !1, Xr = null;
      } else
        throw Error(f(198));
      Ta || (Ta = !0, Gi = Z);
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
  function At(n) {
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
  function _t(n) {
    var r = n.alternate;
    if (!r) {
      if (r = $e(n), r === null)
        throw Error(f(188));
      return r !== n ? null : n;
    }
    for (var o = n, c = r; ; ) {
      var v = o.return;
      if (v === null)
        break;
      var m = v.alternate;
      if (m === null) {
        if (c = v.return, c !== null) {
          o = c;
          continue;
        }
        break;
      }
      if (v.child === m.child) {
        for (m = v.child; m; ) {
          if (m === o)
            return zt(v), n;
          if (m === c)
            return zt(v), r;
          m = m.sibling;
        }
        throw Error(f(188));
      }
      if (o.return !== c.return)
        o = v, c = m;
      else {
        for (var x = !1, A = v.child; A; ) {
          if (A === o) {
            x = !0, o = v, c = m;
            break;
          }
          if (A === c) {
            x = !0, c = v, o = m;
            break;
          }
          A = A.sibling;
        }
        if (!x) {
          for (A = m.child; A; ) {
            if (A === o) {
              x = !0, o = m, c = v;
              break;
            }
            if (A === c) {
              x = !0, c = m, o = v;
              break;
            }
            A = A.sibling;
          }
          if (!x)
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
    return n = _t(n), n !== null ? Jn(n) : null;
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
  var pn = u.unstable_scheduleCallback, vn = u.unstable_cancelCallback, Ar = u.unstable_shouldYield, xi = u.unstable_requestPaint, hn = u.unstable_now, Jr = u.unstable_getCurrentPriorityLevel, ws = u.unstable_ImmediatePriority, Ti = u.unstable_UserBlockingPriority, Ot = u.unstable_NormalPriority, wl = u.unstable_LowPriority, Ki = u.unstable_IdlePriority, zo = null, Zr = null;
  function xs(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function")
      try {
        Zr.onCommitFiberRoot(zo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Pr = Math.clz32 ? Math.clz32 : Rs, Ts = Math.log, _s = Math.LN2;
  function Rs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ts(n) / _s | 0) | 0;
  }
  var xl = 64, vu = 4194304;
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
  function _i(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var c = 0, v = n.suspendedLanes, m = n.pingedLanes, x = o & 268435455;
    if (x !== 0) {
      var A = x & ~v;
      A !== 0 ? c = Xi(A) : (m &= x, m !== 0 && (c = Xi(m)));
    } else
      x = o & ~v, x !== 0 ? c = Xi(x) : m !== 0 && (c = Xi(m));
    if (c === 0)
      return 0;
    if (r !== 0 && r !== c && !(r & v) && (v = c & -c, m = r & -r, v >= m || v === 16 && (m & 4194240) !== 0))
      return r;
    if (c & 4 && (c |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= c; 0 < r; )
        o = 31 - Pr(r), v = 1 << o, c |= n[o], r &= ~v;
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
    for (var o = n.suspendedLanes, c = n.pingedLanes, v = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var x = 31 - Pr(m), A = 1 << x, P = v[x];
      P === -1 ? (!(A & o) || A & c) && (v[x] = Ha(A, r)) : P <= r && (n.expiredLanes |= A), m &= ~A;
    }
  }
  function Ri(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Tl() {
    var n = xl;
    return xl <<= 1, !(xl & 4194240) && (xl = 64), n;
  }
  function _l(n) {
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
      var v = 31 - Pr(o), m = 1 << v;
      r[v] = 0, c[v] = -1, n[v] = -1, o &= ~m;
    }
  }
  function Os(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var c = 31 - Pr(o), v = 1 << c;
      v & r | n[c] & r && (n[c] |= r), o &= ~v;
    }
  }
  var Lt = 0;
  function Ds(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var hu, Po, As, Ft, mu, Rl = !1, Et = [], fi = null, Rn = null, ea = null, $a = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), Sn = [], kn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ns(n, r) {
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
  function hr(n, r, o, c, v, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: c, nativeEvent: m, targetContainers: [v] }, r !== null && (r = Di(r), r !== null && Po(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, v !== null && r.indexOf(v) === -1 && r.push(v), n);
  }
  function ta(n, r, o, c, v) {
    switch (r) {
      case "focusin":
        return fi = hr(fi, n, r, o, c, v), !0;
      case "dragenter":
        return Rn = hr(Rn, n, r, o, c, v), !0;
      case "mouseover":
        return ea = hr(ea, n, r, o, c, v), !0;
      case "pointerover":
        var m = v.pointerId;
        return $a.set(m, hr($a.get(m) || null, n, r, o, c, v)), !0;
      case "gotpointercapture":
        return m = v.pointerId, Fo.set(m, hr(Fo.get(m) || null, n, r, o, c, v)), !0;
    }
    return !1;
  }
  function di(n) {
    var r = uo(n.target);
    if (r !== null) {
      var o = $e(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = At(o), r !== null) {
            n.blockedOn = r, mu(n.priority, function() {
              As(o);
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
        _n = c, o.target.dispatchEvent(c), _n = null;
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
    function r(v) {
      return Ho(v, n);
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
    var v = Lt, m = Ji.transition;
    Ji.transition = null;
    try {
      Lt = 1, ki(n, r, o, c);
    } finally {
      Lt = v, Ji.transition = m;
    }
  }
  function Su(n, r, o, c) {
    var v = Lt, m = Ji.transition;
    Ji.transition = null;
    try {
      Lt = 4, ki(n, r, o, c);
    } finally {
      Lt = v, Ji.transition = m;
    }
  }
  function ki(n, r, o, c) {
    if (gu) {
      var v = Eu(n, r, o, c);
      if (v === null)
        Xd(n, r, c, eo, o), Ns(n, c);
      else if (ta(v, n, r, o, c))
        c.stopPropagation();
      else if (Ns(n, c), r & 4 && -1 < kn.indexOf(n)) {
        for (; v !== null; ) {
          var m = Di(v);
          if (m !== null && hu(m), m = Eu(n, r, o, c), m === null && Xd(n, r, c, eo, o), m === v)
            break;
          v = m;
        }
        v !== null && c.stopPropagation();
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
        if (n = At(r), n !== null)
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
          case ws:
            return 1;
          case Ti:
            return 4;
          case Ot:
          case wl:
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
  var pi = null, bu = null, w = null;
  function z() {
    if (w)
      return w;
    var n, r = bu, o = r.length, c, v = "value" in pi ? pi.value : pi.textContent, m = v.length;
    for (n = 0; n < o && r[n] === v[n]; n++)
      ;
    var x = o - n;
    for (c = 1; c <= x && r[o - c] === v[m - c]; c++)
      ;
    return w = v.slice(n, 1 < c ? 1 - c : void 0);
  }
  function Q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ne() {
    return !0;
  }
  function we() {
    return !1;
  }
  function et(n) {
    function r(o, c, v, m, x) {
      this._reactName = o, this._targetInst = v, this.type = c, this.nativeEvent = m, this.target = x, this.currentTarget = null;
      for (var A in n)
        n.hasOwnProperty(A) && (o = n[A], this[A] = o ? o(m) : m[A]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? ne : we, this.isPropagationStopped = we, this;
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
  } }), Ht = et(En), $o = L({}, En, { dataTransfer: 0 }), Cu = et($o), Ls = L({}, Dt, { relatedTarget: 0 }), zs = et(Ls), to = L({}, Ye, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Us = et(to), js = L({}, Ye, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Fd = et(js), xg = L({}, Ye, { data: 0 }), nh = et(xg), rh = {
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
  }, ah = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ih(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ah[n]) ? !!r[n] : !1;
  }
  function Xc() {
    return ih;
  }
  var Tg = L({}, Dt, { key: function(n) {
    if (n.key) {
      var r = rh[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Hd[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xc, charCode: function(n) {
    return n.type === "keypress" ? Q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), no = et(Tg), _g = L({}, En, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Jc = et(_g), $d = L({}, Dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xc }), Bd = et($d), Rg = L({}, Ye, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zc = et(Rg), oh = L({}, En, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), na = et(oh), ro = [9, 13, 27, 32], zn = y && "CompositionEvent" in window, _a = null;
  y && "documentMode" in document && (_a = document.documentMode);
  var Vd = y && "TextEvent" in window && !_a, Ps = y && (!zn || _a && 8 < _a && 11 >= _a), lh = " ", wu = !1;
  function uh(n, r) {
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
  function sh(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Bo = !1;
  function kg(n, r) {
    switch (n) {
      case "compositionend":
        return sh(r);
      case "keypress":
        return r.which !== 32 ? null : (wu = !0, lh);
      case "textInput":
        return n = r.data, n === lh && wu ? null : n;
      default:
        return null;
    }
  }
  function Og(n, r) {
    if (Bo)
      return n === "compositionend" || !zn && uh(n, r) ? (n = z(), w = bu = pi = null, Bo = !1, n) : null;
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
  function ch(n, r, o, c) {
    ui(c), r = of(r, "onChange"), 0 < r.length && (o = new mt("onChange", "change", null, o, c), n.push({ event: o, listeners: r }));
  }
  var Fs = null, Hs = null;
  function fh(n) {
    Rh(n, 0);
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
        var dh = document.createElement("div");
        dh.setAttribute("oninput", "return;"), qd = typeof dh.oninput == "function";
      }
      ef = qd;
    } else
      ef = !1;
    Yd = ef && (!document.documentMode || 9 < document.documentMode);
  }
  function ph() {
    Fs && (Fs.detachEvent("onpropertychange", vh), Hs = Fs = null);
  }
  function vh(n) {
    if (n.propertyName === "value" && ao(Hs)) {
      var r = [];
      ch(r, Hs, n, Dr(n)), Lo(fh, r);
    }
  }
  function Ag(n, r, o) {
    n === "focusin" ? (ph(), Fs = r, Hs = o, Fs.attachEvent("onpropertychange", vh)) : n === "focusout" && ph();
  }
  function Ng(n) {
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
  function hh(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var vi = typeof Object.is == "function" ? Object.is : hh;
  function xu(n, r) {
    if (vi(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), c = Object.keys(r);
    if (o.length !== c.length)
      return !1;
    for (c = 0; c < o.length; c++) {
      var v = o[c];
      if (!_.call(r, v) || !vi(n[v], r[v]))
        return !1;
    }
    return !0;
  }
  function mh(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function yh(n, r) {
    var o = mh(n);
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
      o = mh(o);
    }
  }
  function gh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? gh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Sh() {
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
    var r = Sh(), o = n.focusedElem, c = n.selectionRange;
    if (r !== o && o && o.ownerDocument && gh(o.ownerDocument.documentElement, o)) {
      if (c !== null && $s(o)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = o.textContent.length, m = Math.min(c.start, v);
          c = c.end === void 0 ? m : Math.min(c.end, v), !n.extend && m > c && (v = c, c = m, m = v), v = yh(o, m);
          var x = yh(
            o,
            c
          );
          v && x && (n.rangeCount !== 1 || n.anchorNode !== v.node || n.anchorOffset !== v.offset || n.focusNode !== x.node || n.focusOffset !== x.offset) && (r = r.createRange(), r.setStart(v.node, v.offset), n.removeAllRanges(), m > c ? (n.addRange(r), n.extend(x.node, x.offset)) : (r.setEnd(x.node, x.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var tf = y && "documentMode" in document && 11 >= document.documentMode, Al = null, Vo = null, Bs = null, Qd = !1;
  function Eh(n, r, o) {
    var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Qd || Al == null || Al !== Re(c) || (c = Al, "selectionStart" in c && $s(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), Bs && xu(Bs, c) || (Bs = c, c = of(Vo, "onSelect"), 0 < c.length && (r = new mt("onSelect", "select", null, r, o), n.push({ event: r, listeners: c }), r.target = Al)));
  }
  function nf(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Tu = { animationend: nf("Animation", "AnimationEnd"), animationiteration: nf("Animation", "AnimationIteration"), animationstart: nf("Animation", "AnimationStart"), transitionend: nf("Transition", "TransitionEnd") }, rf = {}, bh = {};
  y && (bh = document.createElement("div").style, "AnimationEvent" in window || (delete Tu.animationend.animation, delete Tu.animationiteration.animation, delete Tu.animationstart.animation), "TransitionEvent" in window || delete Tu.transitionend.transition);
  function Vs(n) {
    if (rf[n])
      return rf[n];
    if (!Tu[n])
      return n;
    var r = Tu[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in bh)
        return rf[n] = r[o];
    return n;
  }
  var Nr = Vs("animationend"), Gd = Vs("animationiteration"), Ch = Vs("animationstart"), wh = Vs("transitionend"), xh = /* @__PURE__ */ new Map(), Th = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Io(n, r) {
    xh.set(n, r), b(r, [n]);
  }
  for (var af = 0; af < Th.length; af++) {
    var Is = Th[af], Ws = Is.toLowerCase(), zg = Is[0].toUpperCase() + Is.slice(1);
    Io(Ws, "on" + zg);
  }
  Io(Nr, "onAnimationEnd"), Io(Gd, "onAnimationIteration"), Io(Ch, "onAnimationStart"), Io("dblclick", "onDoubleClick"), Io("focusin", "onFocus"), Io("focusout", "onBlur"), Io(wh, "onTransitionEnd"), E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var io = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ug = new Set("cancel close invalid load scroll toggle".split(" ").concat(io));
  function _h(n, r, o) {
    var c = n.type || "unknown-event";
    n.currentTarget = o, Me(c, r, void 0, n), n.currentTarget = null;
  }
  function Rh(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var c = n[o], v = c.event;
      c = c.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var x = c.length - 1; 0 <= x; x--) {
            var A = c[x], P = A.instance, Z = A.currentTarget;
            if (A = A.listener, P !== m && v.isPropagationStopped())
              break e;
            _h(v, A, Z), m = P;
          }
        else
          for (x = 0; x < c.length; x++) {
            if (A = c[x], P = A.instance, Z = A.currentTarget, A = A.listener, P !== m && v.isPropagationStopped())
              break e;
            _h(v, A, Z), m = P;
          }
      }
    }
    if (Ta)
      throw n = Gi, Ta = !1, Gi = null, n;
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
        var v = Zi;
        break;
      case 4:
        v = Su;
        break;
      default:
        v = ki;
    }
    o = v.bind(null, r, o, n), v = void 0, !ci || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (v = !0), c ? v !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: v }) : n.addEventListener(r, o, !0) : v !== void 0 ? n.addEventListener(r, o, { passive: v }) : n.addEventListener(r, o, !1);
  }
  function Xd(n, r, o, c, v) {
    var m = c;
    if (!(r & 1) && !(r & 2) && c !== null)
      e:
        for (; ; ) {
          if (c === null)
            return;
          var x = c.tag;
          if (x === 3 || x === 4) {
            var A = c.stateNode.containerInfo;
            if (A === v || A.nodeType === 8 && A.parentNode === v)
              break;
            if (x === 4)
              for (x = c.return; x !== null; ) {
                var P = x.tag;
                if ((P === 3 || P === 4) && (P = x.stateNode.containerInfo, P === v || P.nodeType === 8 && P.parentNode === v))
                  return;
                x = x.return;
              }
            for (; A !== null; ) {
              if (x = uo(A), x === null)
                return;
              if (P = x.tag, P === 5 || P === 6) {
                c = m = x;
                continue e;
              }
              A = A.parentNode;
            }
          }
          c = c.return;
        }
    Lo(function() {
      var Z = m, ye = Dr(o), ge = [];
      e: {
        var ve = xh.get(n);
        if (ve !== void 0) {
          var Ie = mt, Xe = n;
          switch (n) {
            case "keypress":
              if (Q(o) === 0)
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
              Ie = Cu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ie = Bd;
              break;
            case Nr:
            case Gd:
            case Ch:
              Ie = Us;
              break;
            case wh:
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
          var tt = (r & 4) !== 0, qn = !tt && n === "scroll", V = tt ? ve !== null ? ve + "Capture" : null : ve;
          tt = [];
          for (var H = Z, q; H !== null; ) {
            q = H;
            var xe = q.stateNode;
            if (q.tag === 5 && xe !== null && (q = xe, V !== null && (xe = si(H, V), xe != null && tt.push(_u(H, xe, q)))), qn)
              break;
            H = H.return;
          }
          0 < tt.length && (ve = new Ie(ve, Xe, null, o, ye), ge.push({ event: ve, listeners: tt }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ve = n === "mouseover" || n === "pointerover", Ie = n === "mouseout" || n === "pointerout", ve && o !== _n && (Xe = o.relatedTarget || o.fromElement) && (uo(Xe) || Xe[hi]))
            break e;
          if ((Ie || ve) && (ve = ye.window === ye ? ye : (ve = ye.ownerDocument) ? ve.defaultView || ve.parentWindow : window, Ie ? (Xe = o.relatedTarget || o.toElement, Ie = Z, Xe = Xe ? uo(Xe) : null, Xe !== null && (qn = $e(Xe), Xe !== qn || Xe.tag !== 5 && Xe.tag !== 6) && (Xe = null)) : (Ie = null, Xe = Z), Ie !== Xe)) {
            if (tt = Ht, xe = "onMouseLeave", V = "onMouseEnter", H = "mouse", (n === "pointerout" || n === "pointerover") && (tt = Jc, xe = "onPointerLeave", V = "onPointerEnter", H = "pointer"), qn = Ie == null ? ve : Ru(Ie), q = Xe == null ? ve : Ru(Xe), ve = new tt(xe, H + "leave", Ie, o, ye), ve.target = qn, ve.relatedTarget = q, xe = null, uo(ye) === Z && (tt = new tt(V, H + "enter", Xe, o, ye), tt.target = q, tt.relatedTarget = qn, xe = tt), qn = xe, Ie && Xe)
              t: {
                for (tt = Ie, V = Xe, H = 0, q = tt; q; q = Nl(q))
                  H++;
                for (q = 0, xe = V; xe; xe = Nl(xe))
                  q++;
                for (; 0 < H - q; )
                  tt = Nl(tt), H--;
                for (; 0 < q - H; )
                  V = Nl(V), q--;
                for (; H--; ) {
                  if (tt === V || V !== null && tt === V.alternate)
                    break t;
                  tt = Nl(tt), V = Nl(V);
                }
                tt = null;
              }
            else
              tt = null;
            Ie !== null && Jd(ge, ve, Ie, tt, !1), Xe !== null && qn !== null && Jd(ge, qn, Xe, tt, !0);
          }
        }
        e: {
          if (ve = Z ? Ru(Z) : window, Ie = ve.nodeName && ve.nodeName.toLowerCase(), Ie === "select" || Ie === "input" && ve.type === "file")
            var rt = Wd;
          else if (Id(ve))
            if (Yd)
              rt = Lg;
            else {
              rt = Ng;
              var pt = Ag;
            }
          else
            (Ie = ve.nodeName) && Ie.toLowerCase() === "input" && (ve.type === "checkbox" || ve.type === "radio") && (rt = Mg);
          if (rt && (rt = rt(n, Z))) {
            ch(ge, rt, o, ye);
            break e;
          }
          pt && pt(n, ve, Z), n === "focusout" && (pt = ve._wrapperState) && pt.controlled && ve.type === "number" && Ur(ve, "number", ve.value);
        }
        switch (pt = Z ? Ru(Z) : window, n) {
          case "focusin":
            (Id(pt) || pt.contentEditable === "true") && (Al = pt, Vo = Z, Bs = null);
            break;
          case "focusout":
            Bs = Vo = Al = null;
            break;
          case "mousedown":
            Qd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Qd = !1, Eh(ge, o, ye);
            break;
          case "selectionchange":
            if (tf)
              break;
          case "keydown":
          case "keyup":
            Eh(ge, o, ye);
        }
        var Je;
        if (zn)
          e: {
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
        else
          Bo ? uh(n, o) && (vt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (vt = "onCompositionStart");
        vt && (Ps && o.locale !== "ko" && (Bo || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && Bo && (Je = z()) : (pi = ye, bu = "value" in pi ? pi.value : pi.textContent, Bo = !0)), pt = of(Z, vt), 0 < pt.length && (vt = new nh(vt, n, null, o, ye), ge.push({ event: vt, listeners: pt }), Je ? vt.data = Je : (Je = sh(o), Je !== null && (vt.data = Je)))), (Je = Vd ? kg(n, o) : Og(n, o)) && (Z = of(Z, "onBeforeInput"), 0 < Z.length && (ye = new nh("onBeforeInput", "beforeinput", null, o, ye), ge.push({ event: ye, listeners: Z }), ye.data = Je));
      }
      Rh(ge, r);
    });
  }
  function _u(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function of(n, r) {
    for (var o = r + "Capture", c = []; n !== null; ) {
      var v = n, m = v.stateNode;
      v.tag === 5 && m !== null && (v = m, m = si(n, o), m != null && c.unshift(_u(n, m, v)), m = si(n, r), m != null && c.push(_u(n, m, v))), n = n.return;
    }
    return c;
  }
  function Nl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Jd(n, r, o, c, v) {
    for (var m = r._reactName, x = []; o !== null && o !== c; ) {
      var A = o, P = A.alternate, Z = A.stateNode;
      if (P !== null && P === c)
        break;
      A.tag === 5 && Z !== null && (A = Z, v ? (P = si(o, m), P != null && x.unshift(_u(o, P, A))) : v || (P = si(o, m), P != null && x.push(_u(o, P, A)))), o = o.return;
    }
    x.length !== 0 && n.push({ event: r, listeners: x });
  }
  var kh = /\r\n?/g, Zd = /\u0000|\uFFFD/g;
  function Oh(n) {
    return (typeof n == "string" ? n : "" + n).replace(kh, `
`).replace(Zd, "");
  }
  function qs(n, r, o) {
    if (r = Oh(r), Oh(n) !== r && o)
      throw Error(f(425));
  }
  function lf() {
  }
  var ep = null, tp = null;
  function Ml(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Qs = typeof setTimeout == "function" ? setTimeout : void 0, Gs = typeof clearTimeout == "function" ? clearTimeout : void 0, np = typeof Promise == "function" ? Promise : void 0, Dh = typeof queueMicrotask == "function" ? queueMicrotask : typeof np < "u" ? function(n) {
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
      var v = o.nextSibling;
      if (n.removeChild(o), v && v.nodeType === 8)
        if (o = v.data, o === "/$") {
          if (c === 0) {
            n.removeChild(v), Ba(r);
            return;
          }
          c--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || c++;
      o = v;
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
  var lo = Math.random().toString(36).slice(2), Va = "__reactFiber$" + lo, Xs = "__reactProps$" + lo, hi = "__reactContainer$" + lo, ip = "__reactEvents$" + lo, jg = "__reactListeners$" + lo, Pg = "__reactHandles$" + lo;
  function uo(n) {
    var r = n[Va];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[hi] || o[Va]) {
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
    return n = n[Va] || n[hi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
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
    var v = {}, m;
    for (m in o)
      v[m] = r[m];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function Zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ra() {
    nt(bt), nt(sr);
  }
  function Ai(n, r, o) {
    if (sr.current !== Ia)
      throw Error(f(168));
    It(sr, r), It(bt, o);
  }
  function Wo(n, r, o) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function")
      return o;
    c = c.getChildContext();
    for (var v in c)
      if (!(v in r))
        throw Error(f(108, Pe(n) || "Unknown", v));
    return L({}, o, c);
  }
  function Ll(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ia, Fr = sr.current, It(sr, n), It(bt, bt.current), !0;
  }
  function Ah(n, r, o) {
    var c = n.stateNode;
    if (!c)
      throw Error(f(169));
    o ? (n = Wo(n, r, Fr), c.__reactInternalMemoizedMergedChildContext = n, nt(bt), nt(sr), It(sr, n)) : nt(bt), It(bt, o);
  }
  var so = null, Yo = !1, mr = !1;
  function sf(n) {
    so === null ? so = [n] : so.push(n);
  }
  function Nh(n) {
    Yo = !0, sf(n);
  }
  function Ni() {
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
      } catch (v) {
        throw so !== null && (so = so.slice(n + 1)), pn(ws, Ni), v;
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
    var v = 32 - Pr(c) - 1;
    c &= ~(1 << v), o += 1;
    var m = 32 - Pr(r) + v;
    if (30 < m) {
      var x = v - v % 5;
      m = (c & (1 << x) - 1).toString(32), c >>= x, v -= x, oa = 1 << 32 - Pr(r) + v | o << v | c, yr = m + n;
    } else
      oa = 1 << m | o << v | c, yr = n;
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
        throw Mh(), Error(f(418));
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
  function Mh() {
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
  function Aa(n) {
    Mr === null ? Mr = [n] : Mr.push(n);
  }
  function Lh(n, r, o, c) {
    var v = r.interleaved;
    return v === null ? (o.next = o, Aa(r)) : (o.next = v.next, v.next = o), r.interleaved = o, co(n, c);
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
  function zh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function mn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Xo(n, r, o) {
    var c = n.updateQueue;
    if (c === null)
      return null;
    if (c = c.shared, Nt & 2) {
      var v = c.pending;
      return v === null ? r.next = r : (r.next = v.next, v.next = r), c.pending = r, co(n, o);
    }
    return v = c.interleaved, v === null ? (r.next = r, Aa(c)) : (r.next = v.next, v.next = r), c.interleaved = r, co(n, o);
  }
  function vf(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, Os(n, o);
    }
  }
  function Uh(n, r) {
    var o = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, o === c)) {
      var v = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var x = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          m === null ? v = m = x : m = m.next = x, o = o.next;
        } while (o !== null);
        m === null ? v = m = r : m = m.next = r;
      } else
        v = m = r;
      o = { baseState: c.baseState, firstBaseUpdate: v, lastBaseUpdate: m, shared: c.shared, effects: c.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Zs(n, r, o, c) {
    var v = n.updateQueue;
    Ko = !1;
    var m = v.firstBaseUpdate, x = v.lastBaseUpdate, A = v.shared.pending;
    if (A !== null) {
      v.shared.pending = null;
      var P = A, Z = P.next;
      P.next = null, x === null ? m = Z : x.next = Z, x = P;
      var ye = n.alternate;
      ye !== null && (ye = ye.updateQueue, A = ye.lastBaseUpdate, A !== x && (A === null ? ye.firstBaseUpdate = Z : A.next = Z, ye.lastBaseUpdate = P));
    }
    if (m !== null) {
      var ge = v.baseState;
      x = 0, ye = Z = P = null, A = m;
      do {
        var ve = A.lane, Ie = A.eventTime;
        if ((c & ve) === ve) {
          ye !== null && (ye = ye.next = {
            eventTime: Ie,
            lane: 0,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null
          });
          e: {
            var Xe = n, tt = A;
            switch (ve = r, Ie = o, tt.tag) {
              case 1:
                if (Xe = tt.payload, typeof Xe == "function") {
                  ge = Xe.call(Ie, ge, ve);
                  break e;
                }
                ge = Xe;
                break e;
              case 3:
                Xe.flags = Xe.flags & -65537 | 128;
              case 0:
                if (Xe = tt.payload, ve = typeof Xe == "function" ? Xe.call(Ie, ge, ve) : Xe, ve == null)
                  break e;
                ge = L({}, ge, ve);
                break e;
              case 2:
                Ko = !0;
            }
          }
          A.callback !== null && A.lane !== 0 && (n.flags |= 64, ve = v.effects, ve === null ? v.effects = [A] : ve.push(A));
        } else
          Ie = { eventTime: Ie, lane: ve, tag: A.tag, payload: A.payload, callback: A.callback, next: null }, ye === null ? (Z = ye = Ie, P = ge) : ye = ye.next = Ie, x |= ve;
        if (A = A.next, A === null) {
          if (A = v.shared.pending, A === null)
            break;
          ve = A, A = ve.next, ve.next = null, v.lastBaseUpdate = ve, v.shared.pending = null;
        }
      } while (!0);
      if (ye === null && (P = ge), v.baseState = P, v.firstBaseUpdate = Z, v.lastBaseUpdate = ye, r = v.shared.interleaved, r !== null) {
        v = r;
        do
          x |= v.lane, v = v.next;
        while (v !== r);
      } else
        m === null && (v.shared.lanes = 0);
      Ql |= x, n.lanes = x, n.memoizedState = ge;
    }
  }
  function Au(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var c = n[r], v = c.callback;
        if (v !== null) {
          if (c.callback = null, c = o, typeof v != "function")
            throw Error(f(191, v));
          v.call(c);
        }
      }
  }
  var jl = new s.Component().refs;
  function pp(n, r, o, c) {
    r = n.memoizedState, o = o(c, r), o = o == null ? r : L({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var hf = { isMounted: function(n) {
    return (n = n._reactInternals) ? $e(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var c = dr(), v = ho(n), m = mn(c, v);
    m.payload = r, o != null && (m.callback = o), r = Xo(n, m, v), r !== null && (Dn(r, n, v, c), vf(r, n, v));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var c = dr(), v = ho(n), m = mn(c, v);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = Xo(n, m, v), r !== null && (Dn(r, n, v, c), vf(r, n, v));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = dr(), c = ho(n), v = mn(o, c);
    v.tag = 2, r != null && (v.callback = r), r = Xo(n, v, c), r !== null && (Dn(r, n, c, o), vf(r, n, c));
  } };
  function jh(n, r, o, c, v, m, x) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, m, x) : r.prototype && r.prototype.isPureReactComponent ? !xu(o, c) || !xu(v, m) : !0;
  }
  function Ph(n, r, o) {
    var c = !1, v = Ia, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Oe(m) : (v = Zn(r) ? Fr : sr.current, c = r.contextTypes, m = (c = c != null) ? ka(n, v) : Ia), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = hf, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Fh(n, r, o, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, c), r.state !== n && hf.enqueueReplaceState(r, r.state, null);
  }
  function vp(n, r, o, c) {
    var v = n.stateNode;
    v.props = o, v.state = n.memoizedState, v.refs = jl, dp(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? v.context = Oe(m) : (m = Zn(r) ? Fr : sr.current, v.context = ka(n, m)), v.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (pp(n, r, m, o), v.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (r = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), r !== v.state && hf.enqueueReplaceState(v, v.state, null), Zs(n, o, v, c), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Nu(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(f(309));
          var c = o.stateNode;
        }
        if (!c)
          throw Error(f(147, n));
        var v = c, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(x) {
          var A = v.refs;
          A === jl && (A = v.refs = {}), x === null ? delete A[m] : A[m] = x;
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
  function Hh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function $h(n) {
    function r(V, H) {
      if (n) {
        var q = V.deletions;
        q === null ? (V.deletions = [H], V.flags |= 16) : q.push(H);
      }
    }
    function o(V, H) {
      if (!n)
        return null;
      for (; H !== null; )
        r(V, H), H = H.sibling;
      return null;
    }
    function c(V, H) {
      for (V = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? V.set(H.key, H) : V.set(H.index, H), H = H.sibling;
      return V;
    }
    function v(V, H) {
      return V = il(V, H), V.index = 0, V.sibling = null, V;
    }
    function m(V, H, q) {
      return V.index = q, n ? (q = V.alternate, q !== null ? (q = q.index, q < H ? (V.flags |= 2, H) : q) : (V.flags |= 2, H)) : (V.flags |= 1048576, H);
    }
    function x(V) {
      return n && V.alternate === null && (V.flags |= 2), V;
    }
    function A(V, H, q, xe) {
      return H === null || H.tag !== 6 ? (H = Kf(q, V.mode, xe), H.return = V, H) : (H = v(H, q), H.return = V, H);
    }
    function P(V, H, q, xe) {
      var rt = q.type;
      return rt === gt ? ye(V, H, q.props.children, xe, q.key) : H !== null && (H.elementType === rt || typeof rt == "object" && rt !== null && rt.$$typeof === he && Hh(rt) === H.type) ? (xe = v(H, q.props), xe.ref = Nu(V, H, q), xe.return = V, xe) : (xe = Qf(q.type, q.key, q.props, null, V.mode, xe), xe.ref = Nu(V, H, q), xe.return = V, xe);
    }
    function Z(V, H, q, xe) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== q.containerInfo || H.stateNode.implementation !== q.implementation ? (H = Sc(q, V.mode, xe), H.return = V, H) : (H = v(H, q.children || []), H.return = V, H);
    }
    function ye(V, H, q, xe, rt) {
      return H === null || H.tag !== 7 ? (H = Jl(q, V.mode, xe, rt), H.return = V, H) : (H = v(H, q), H.return = V, H);
    }
    function ge(V, H, q) {
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return H = Kf("" + H, V.mode, q), H.return = V, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ue:
            return q = Qf(H.type, H.key, H.props, null, V.mode, q), q.ref = Nu(V, null, H), q.return = V, q;
          case Ue:
            return H = Sc(H, V.mode, q), H.return = V, H;
          case he:
            var xe = H._init;
            return ge(V, xe(H._payload), q);
        }
        if (kr(H) || ae(H))
          return H = Jl(H, V.mode, q, null), H.return = V, H;
        ec(V, H);
      }
      return null;
    }
    function ve(V, H, q, xe) {
      var rt = H !== null ? H.key : null;
      if (typeof q == "string" && q !== "" || typeof q == "number")
        return rt !== null ? null : A(V, H, "" + q, xe);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case ue:
            return q.key === rt ? P(V, H, q, xe) : null;
          case Ue:
            return q.key === rt ? Z(V, H, q, xe) : null;
          case he:
            return rt = q._init, ve(
              V,
              H,
              rt(q._payload),
              xe
            );
        }
        if (kr(q) || ae(q))
          return rt !== null ? null : ye(V, H, q, xe, null);
        ec(V, q);
      }
      return null;
    }
    function Ie(V, H, q, xe, rt) {
      if (typeof xe == "string" && xe !== "" || typeof xe == "number")
        return V = V.get(q) || null, A(H, V, "" + xe, rt);
      if (typeof xe == "object" && xe !== null) {
        switch (xe.$$typeof) {
          case ue:
            return V = V.get(xe.key === null ? q : xe.key) || null, P(H, V, xe, rt);
          case Ue:
            return V = V.get(xe.key === null ? q : xe.key) || null, Z(H, V, xe, rt);
          case he:
            var pt = xe._init;
            return Ie(V, H, q, pt(xe._payload), rt);
        }
        if (kr(xe) || ae(xe))
          return V = V.get(q) || null, ye(H, V, xe, rt, null);
        ec(H, xe);
      }
      return null;
    }
    function Xe(V, H, q, xe) {
      for (var rt = null, pt = null, Je = H, vt = H = 0, or = null; Je !== null && vt < q.length; vt++) {
        Je.index > vt ? (or = Je, Je = null) : or = Je.sibling;
        var Wt = ve(V, Je, q[vt], xe);
        if (Wt === null) {
          Je === null && (Je = or);
          break;
        }
        n && Je && Wt.alternate === null && r(V, Je), H = m(Wt, H, vt), pt === null ? rt = Wt : pt.sibling = Wt, pt = Wt, Je = or;
      }
      if (vt === q.length)
        return o(V, Je), bn && Ul(V, vt), rt;
      if (Je === null) {
        for (; vt < q.length; vt++)
          Je = ge(V, q[vt], xe), Je !== null && (H = m(Je, H, vt), pt === null ? rt = Je : pt.sibling = Je, pt = Je);
        return bn && Ul(V, vt), rt;
      }
      for (Je = c(V, Je); vt < q.length; vt++)
        or = Ie(Je, V, vt, q[vt], xe), or !== null && (n && or.alternate !== null && Je.delete(or.key === null ? vt : or.key), H = m(or, H, vt), pt === null ? rt = or : pt.sibling = or, pt = or);
      return n && Je.forEach(function(mo) {
        return r(V, mo);
      }), bn && Ul(V, vt), rt;
    }
    function tt(V, H, q, xe) {
      var rt = ae(q);
      if (typeof rt != "function")
        throw Error(f(150));
      if (q = rt.call(q), q == null)
        throw Error(f(151));
      for (var pt = rt = null, Je = H, vt = H = 0, or = null, Wt = q.next(); Je !== null && !Wt.done; vt++, Wt = q.next()) {
        Je.index > vt ? (or = Je, Je = null) : or = Je.sibling;
        var mo = ve(V, Je, Wt.value, xe);
        if (mo === null) {
          Je === null && (Je = or);
          break;
        }
        n && Je && mo.alternate === null && r(V, Je), H = m(mo, H, vt), pt === null ? rt = mo : pt.sibling = mo, pt = mo, Je = or;
      }
      if (Wt.done)
        return o(
          V,
          Je
        ), bn && Ul(V, vt), rt;
      if (Je === null) {
        for (; !Wt.done; vt++, Wt = q.next())
          Wt = ge(V, Wt.value, xe), Wt !== null && (H = m(Wt, H, vt), pt === null ? rt = Wt : pt.sibling = Wt, pt = Wt);
        return bn && Ul(V, vt), rt;
      }
      for (Je = c(V, Je); !Wt.done; vt++, Wt = q.next())
        Wt = Ie(Je, V, vt, Wt.value, xe), Wt !== null && (n && Wt.alternate !== null && Je.delete(Wt.key === null ? vt : Wt.key), H = m(Wt, H, vt), pt === null ? rt = Wt : pt.sibling = Wt, pt = Wt);
      return n && Je.forEach(function(a0) {
        return r(V, a0);
      }), bn && Ul(V, vt), rt;
    }
    function qn(V, H, q, xe) {
      if (typeof q == "object" && q !== null && q.type === gt && q.key === null && (q = q.props.children), typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case ue:
            e: {
              for (var rt = q.key, pt = H; pt !== null; ) {
                if (pt.key === rt) {
                  if (rt = q.type, rt === gt) {
                    if (pt.tag === 7) {
                      o(V, pt.sibling), H = v(pt, q.props.children), H.return = V, V = H;
                      break e;
                    }
                  } else if (pt.elementType === rt || typeof rt == "object" && rt !== null && rt.$$typeof === he && Hh(rt) === pt.type) {
                    o(V, pt.sibling), H = v(pt, q.props), H.ref = Nu(V, pt, q), H.return = V, V = H;
                    break e;
                  }
                  o(V, pt);
                  break;
                } else
                  r(V, pt);
                pt = pt.sibling;
              }
              q.type === gt ? (H = Jl(q.props.children, V.mode, xe, q.key), H.return = V, V = H) : (xe = Qf(q.type, q.key, q.props, null, V.mode, xe), xe.ref = Nu(V, H, q), xe.return = V, V = xe);
            }
            return x(V);
          case Ue:
            e: {
              for (pt = q.key; H !== null; ) {
                if (H.key === pt)
                  if (H.tag === 4 && H.stateNode.containerInfo === q.containerInfo && H.stateNode.implementation === q.implementation) {
                    o(V, H.sibling), H = v(H, q.children || []), H.return = V, V = H;
                    break e;
                  } else {
                    o(V, H);
                    break;
                  }
                else
                  r(V, H);
                H = H.sibling;
              }
              H = Sc(q, V.mode, xe), H.return = V, V = H;
            }
            return x(V);
          case he:
            return pt = q._init, qn(V, H, pt(q._payload), xe);
        }
        if (kr(q))
          return Xe(V, H, q, xe);
        if (ae(q))
          return tt(V, H, q, xe);
        ec(V, q);
      }
      return typeof q == "string" && q !== "" || typeof q == "number" ? (q = "" + q, H !== null && H.tag === 6 ? (o(V, H.sibling), H = v(H, q), H.return = V, V = H) : (o(V, H), H = Kf(q, V.mode, xe), H.return = V, V = H), x(V)) : o(V, H);
    }
    return qn;
  }
  var Mu = $h(!0), Bh = $h(!1), tc = {}, Li = cn(tc), Lu = cn(tc), nc = cn(tc);
  function Jo(n) {
    if (n === tc)
      throw Error(f(174));
    return n;
  }
  function hp(n, r) {
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
      if (!vi(n[o], r[o]))
        return !1;
    return !0;
  }
  function Fl(n, r, o, c, v, m) {
    if (Pl = m, On = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, rc.current = n === null || n.memoizedState === null ? Hg : $g, n = o(c, v), dt) {
      m = 0;
      do {
        if (dt = !1, zi = 0, 25 <= m)
          throw Error(f(301));
        m += 1, se = Vn = null, r.updateQueue = null, rc.current = Bg, n = o(c, v);
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
    var c = Vn, v = c.baseQueue, m = o.pending;
    if (m !== null) {
      if (v !== null) {
        var x = v.next;
        v.next = m.next, m.next = x;
      }
      c.baseQueue = v = m, o.pending = null;
    }
    if (v !== null) {
      m = v.next, c = c.baseState;
      var A = x = null, P = null, Z = m;
      do {
        var ye = Z.lane;
        if ((Pl & ye) === ye)
          P !== null && (P = P.next = { lane: 0, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }), c = Z.hasEagerState ? Z.eagerState : n(c, Z.action);
        else {
          var ge = {
            lane: ye,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          };
          P === null ? (A = P = ge, x = c) : P = P.next = ge, On.lanes |= ye, Ql |= ye;
        }
        Z = Z.next;
      } while (Z !== null && Z !== m);
      P === null ? x = c : P.next = A, vi(c, r.memoizedState) || (ca = !0), r.memoizedState = c, r.baseState = x, r.baseQueue = P, o.lastRenderedState = c;
    }
    if (n = o.interleaved, n !== null) {
      v = n;
      do
        m = v.lane, On.lanes |= m, Ql |= m, v = v.next;
      while (v !== n);
    } else
      v === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function ic(n) {
    var r = sa(), o = r.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var c = o.dispatch, v = o.pending, m = r.memoizedState;
    if (v !== null) {
      o.pending = null;
      var x = v = v.next;
      do
        m = n(m, x.action), x = x.next;
      while (x !== v);
      vi(m, r.memoizedState) || (ca = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, c];
  }
  function yf() {
  }
  function gf(n, r) {
    var o = On, c = sa(), v = r(), m = !vi(c.memoizedState, v);
    if (m && (c.memoizedState = v, ca = !0), c = c.queue, oc(bf.bind(null, o, c, n), [n]), c.getSnapshot !== r || m || se !== null && se.memoizedState.tag & 1) {
      if (o.flags |= 2048, $l(9, Ef.bind(null, o, c, v, r), void 0, null), Fn === null)
        throw Error(f(349));
      Pl & 30 || Sf(o, r, v);
    }
    return v;
  }
  function Sf(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = On.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, On.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Ef(n, r, o, c) {
    r.value = o, r.getSnapshot = c, Cf(r) && wf(n);
  }
  function bf(n, r, o) {
    return o(function() {
      Cf(r) && wf(n);
    });
  }
  function Cf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !vi(n, o);
    } catch {
      return !0;
    }
  }
  function wf(n) {
    var r = co(n, 1);
    r !== null && Dn(r, n, 1, -1);
  }
  function xf(n) {
    var r = ua();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Of.bind(null, On, n), [r.memoizedState, n];
  }
  function $l(n, r, o, c) {
    return n = { tag: n, create: r, destroy: o, deps: c, next: null }, r = On.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, On.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (c = o.next, o.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function Tf() {
    return sa().memoizedState;
  }
  function Uu(n, r, o, c) {
    var v = ua();
    On.flags |= n, v.memoizedState = $l(1 | r, o, void 0, c === void 0 ? null : c);
  }
  function Bl(n, r, o, c) {
    var v = sa();
    c = c === void 0 ? null : c;
    var m = void 0;
    if (Vn !== null) {
      var x = Vn.memoizedState;
      if (m = x.destroy, c !== null && Ga(c, x.deps)) {
        v.memoizedState = $l(r, o, m, c);
        return;
      }
    }
    On.flags |= n, v.memoizedState = $l(1 | r, o, m, c);
  }
  function Vl(n, r) {
    return Uu(8390656, 8, n, r);
  }
  function oc(n, r) {
    return Bl(2048, 8, n, r);
  }
  function _f(n, r) {
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
    return Pl & 21 ? (vi(o, r) || (o = Tl(), On.lanes |= o, Ql |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ca = !0), n.memoizedState = o);
  }
  function Na(n, r) {
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
  function Vh() {
    return sa().memoizedState;
  }
  function yn(n, r, o) {
    var c = ho(n);
    if (o = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null }, lc(n))
      Pu(r, o);
    else if (o = Lh(n, r, o, c), o !== null) {
      var v = dr();
      Dn(o, n, c, v), uc(o, r, c);
    }
  }
  function Of(n, r, o) {
    var c = ho(n), v = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (lc(n))
      Pu(r, v);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null))
        try {
          var x = r.lastRenderedState, A = m(x, o);
          if (v.hasEagerState = !0, v.eagerState = A, vi(A, x)) {
            var P = r.interleaved;
            P === null ? (v.next = v, Aa(r)) : (v.next = P.next, P.next = v), r.interleaved = v;
            return;
          }
        } catch {
        } finally {
        }
      o = Lh(n, r, v, c), o !== null && (v = dr(), Dn(o, n, c, v), uc(o, r, c));
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
  }, useState: xf, useDebugValue: Il, useDeferredValue: function(n) {
    return ua().memoizedState = n;
  }, useTransition: function() {
    var n = xf(!1), r = n[0];
    return n = Na.bind(null, n[1]), ua().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var c = On, v = ua();
    if (bn) {
      if (o === void 0)
        throw Error(f(407));
      o = o();
    } else {
      if (o = r(), Fn === null)
        throw Error(f(349));
      Pl & 30 || Sf(c, r, o);
    }
    v.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return v.queue = m, Vl(bf.bind(
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
    useInsertionEffect: _f,
    useLayoutEffect: Rf,
    useMemo: ju,
    useReducer: ac,
    useRef: Tf,
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
    useId: Vh,
    unstable_isNewReconciler: !1
  }, Bg = { readContext: Oe, useCallback: gp, useContext: Oe, useEffect: oc, useImperativeHandle: yp, useInsertionEffect: _f, useLayoutEffect: Rf, useMemo: ju, useReducer: ic, useRef: Tf, useState: function() {
    return ic(Hl);
  }, useDebugValue: Il, useDeferredValue: function(n) {
    var r = sa();
    return Vn === null ? r.memoizedState = n : el(r, Vn.memoizedState, n);
  }, useTransition: function() {
    var n = ic(Hl)[0], r = sa().memoizedState;
    return [n, r];
  }, useMutableSource: yf, useSyncExternalStore: gf, useId: Vh, unstable_isNewReconciler: !1 };
  function tl(n, r) {
    try {
      var o = "", c = r;
      do
        o += ke(c), c = c.return;
      while (c);
      var v = o;
    } catch (m) {
      v = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: v, digest: null };
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
  var Ih = typeof WeakMap == "function" ? WeakMap : Map;
  function Wh(n, r, o) {
    o = mn(-1, o), o.tag = 3, o.payload = { element: null };
    var c = r.value;
    return o.callback = function() {
      Bf || (Bf = !0, kp = c), sc(n, r);
    }, o;
  }
  function Yh(n, r, o) {
    o = mn(-1, o), o.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var v = r.value;
      o.payload = function() {
        return c(v);
      }, o.callback = function() {
        sc(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      sc(n, r), typeof c != "function" && (Ja === null ? Ja = /* @__PURE__ */ new Set([this]) : Ja.add(this));
      var x = r.stack;
      this.componentDidCatch(r.value, { componentStack: x !== null ? x : "" });
    }), o;
  }
  function cc(n, r, o) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new Ih();
      var v = /* @__PURE__ */ new Set();
      c.set(r, v);
    } else
      v = c.get(r), v === void 0 && (v = /* @__PURE__ */ new Set(), c.set(r, v));
    v.has(o) || (v.add(o), n = Jg.bind(null, n, r, o), r.then(n, n));
  }
  function qh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ep(n, r, o, c, v) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = v, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = mn(-1, 1), r.tag = 2, Xo(o, r, 1))), o.lanes |= 1), n);
  }
  var Qh = Be.ReactCurrentOwner, ca = !1;
  function Wn(n, r, o, c) {
    r.child = n === null ? Bh(r, null, o, c) : Mu(r, n.child, o, c);
  }
  function Fu(n, r, o, c, v) {
    o = o.render;
    var m = r.ref;
    return Bn(r, v), c = Fl(n, r, o, c, m, v), o = Zo(), n !== null && !ca ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Yn(n, r, v)) : (bn && o && cf(r), r.flags |= 1, Wn(n, r, c, v), r.child);
  }
  function nl(n, r, o, c, v) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !Mp(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, Af(n, r, m, c, v)) : (n = Qf(o.type, null, c, r, r.mode, v), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & v)) {
      var x = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : xu, o(x, c) && n.ref === r.ref)
        return Yn(n, r, v);
    }
    return r.flags |= 1, n = il(m, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Af(n, r, o, c, v) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (xu(m, c) && n.ref === r.ref)
        if (ca = !1, r.pendingProps = c = m, (n.lanes & v) !== 0)
          n.flags & 131072 && (ca = !0);
        else
          return r.lanes = n.lanes, Yn(n, r, v);
    }
    return Tt(n, r, o, c, v);
  }
  function fa(n, r, o) {
    var c = r.pendingProps, v = c.children, m = n !== null ? n.memoizedState : null;
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
    return Wn(n, r, v, o), r.child;
  }
  function Wl(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Tt(n, r, o, c, v) {
    var m = Zn(o) ? Fr : sr.current;
    return m = ka(r, m), Bn(r, v), o = Fl(n, r, o, c, m, v), c = Zo(), n !== null && !ca ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Yn(n, r, v)) : (bn && c && cf(r), r.flags |= 1, Wn(n, r, o, v), r.child);
  }
  function fc(n, r, o, c, v) {
    if (Zn(o)) {
      var m = !0;
      Ll(r);
    } else
      m = !1;
    if (Bn(r, v), r.stateNode === null)
      pc(n, r), Ph(r, o, c), vp(r, o, c, v), c = !0;
    else if (n === null) {
      var x = r.stateNode, A = r.memoizedProps;
      x.props = A;
      var P = x.context, Z = o.contextType;
      typeof Z == "object" && Z !== null ? Z = Oe(Z) : (Z = Zn(o) ? Fr : sr.current, Z = ka(r, Z));
      var ye = o.getDerivedStateFromProps, ge = typeof ye == "function" || typeof x.getSnapshotBeforeUpdate == "function";
      ge || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (A !== c || P !== Z) && Fh(r, x, c, Z), Ko = !1;
      var ve = r.memoizedState;
      x.state = ve, Zs(r, c, x, v), P = r.memoizedState, A !== c || ve !== P || bt.current || Ko ? (typeof ye == "function" && (pp(r, o, ye, c), P = r.memoizedState), (A = Ko || jh(r, o, A, c, ve, P, Z)) ? (ge || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = P), x.props = c, x.state = P, x.context = Z, c = A) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      x = r.stateNode, zh(n, r), A = r.memoizedProps, Z = r.type === r.elementType ? A : la(r.type, A), x.props = Z, ge = r.pendingProps, ve = x.context, P = o.contextType, typeof P == "object" && P !== null ? P = Oe(P) : (P = Zn(o) ? Fr : sr.current, P = ka(r, P));
      var Ie = o.getDerivedStateFromProps;
      (ye = typeof Ie == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (A !== ge || ve !== P) && Fh(r, x, c, P), Ko = !1, ve = r.memoizedState, x.state = ve, Zs(r, c, x, v);
      var Xe = r.memoizedState;
      A !== ge || ve !== Xe || bt.current || Ko ? (typeof Ie == "function" && (pp(r, o, Ie, c), Xe = r.memoizedState), (Z = Ko || jh(r, o, Z, c, ve, Xe, P) || !1) ? (ye || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(c, Xe, P), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(c, Xe, P)), typeof x.componentDidUpdate == "function" && (r.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || A === n.memoizedProps && ve === n.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || A === n.memoizedProps && ve === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = Xe), x.props = c, x.state = Xe, x.context = P, c = Z) : (typeof x.componentDidUpdate != "function" || A === n.memoizedProps && ve === n.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || A === n.memoizedProps && ve === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return Nf(n, r, o, c, m, v);
  }
  function Nf(n, r, o, c, v, m) {
    Wl(n, r);
    var x = (r.flags & 128) !== 0;
    if (!c && !x)
      return v && Ah(r, o, !1), Yn(n, r, m);
    c = r.stateNode, Qh.current = r;
    var A = x && typeof o.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && x ? (r.child = Mu(r, n.child, null, m), r.child = Mu(r, null, A, m)) : Wn(n, r, A, m), r.memoizedState = c.state, v && Ah(r, o, !0), r.child;
  }
  function Vg(n) {
    var r = n.stateNode;
    r.pendingContext ? Ai(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ai(n, r.context, !1), hp(n, r.containerInfo);
  }
  function Gh(n, r, o, c, v) {
    return ku(), er(v), r.flags |= 256, Wn(n, r, o, c), r.child;
  }
  var dc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Kh(n, r, o) {
    var c = r.pendingProps, v = at.current, m = !1, x = (r.flags & 128) !== 0, A;
    if ((A = x) || (A = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), A ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), It(at, v & 1), n === null)
      return df(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (x = c.children, n = c.fallback, m ? (c = r.mode, m = r.child, x = { mode: "hidden", children: x }, !(c & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = x) : m = Gf(x, c, 0, null), n = Jl(n, c, o, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = Yl(o), r.memoizedState = dc, n) : Mf(r, x));
    if (v = n.memoizedState, v !== null && (A = v.dehydrated, A !== null))
      return bp(n, r, x, c, A, v, o);
    if (m) {
      m = c.fallback, x = r.mode, v = n.child, A = v.sibling;
      var P = { mode: "hidden", children: c.children };
      return !(x & 1) && r.child !== v ? (c = r.child, c.childLanes = 0, c.pendingProps = P, r.deletions = null) : (c = il(v, P), c.subtreeFlags = v.subtreeFlags & 14680064), A !== null ? m = il(A, m) : (m = Jl(m, x, o, null), m.flags |= 2), m.return = r, c.return = r, c.sibling = m, r.child = c, c = m, m = r.child, x = n.child.memoizedState, x = x === null ? Yl(o) : { baseLanes: x.baseLanes | o, cachePool: null, transitions: x.transitions }, m.memoizedState = x, m.childLanes = n.childLanes & ~o, r.memoizedState = dc, c;
    }
    return m = n.child, n = m.sibling, c = il(m, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = o), c.return = r, c.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function Mf(n, r) {
    return r = Gf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Lf(n, r, o, c) {
    return c !== null && er(c), Mu(r, n.child, null, o), n = Mf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function bp(n, r, o, c, v, m, x) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, c = Sp(Error(f(422))), Lf(n, r, x, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = c.fallback, v = r.mode, c = Gf({ mode: "visible", children: c.children }, v, 0, null), m = Jl(m, v, x, null), m.flags |= 2, c.return = r, m.return = r, c.sibling = m, r.child = c, r.mode & 1 && Mu(r, n.child, null, x), r.child.memoizedState = Yl(x), r.memoizedState = dc, m);
    if (!(r.mode & 1))
      return Lf(n, r, x, null);
    if (v.data === "$!") {
      if (c = v.nextSibling && v.nextSibling.dataset, c)
        var A = c.dgst;
      return c = A, m = Error(f(419)), c = Sp(m, c, void 0), Lf(n, r, x, c);
    }
    if (A = (x & n.childLanes) !== 0, ca || A) {
      if (c = Fn, c !== null) {
        switch (x & -x) {
          case 4:
            v = 2;
            break;
          case 16:
            v = 8;
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
            v = 32;
            break;
          case 536870912:
            v = 268435456;
            break;
          default:
            v = 0;
        }
        v = v & (c.suspendedLanes | x) ? 0 : v, v !== 0 && v !== m.retryLane && (m.retryLane = v, co(n, v), Dn(c, n, v, -1));
      }
      return gc(), c = Sp(Error(f(421))), Lf(n, r, x, c);
    }
    return v.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Np.bind(null, n), v._reactRetry = r, null) : (n = m.treeContext, Da = Ra(v.nextSibling), Oa = r, bn = !0, qa = null, n !== null && (aa[ia++] = oa, aa[ia++] = yr, aa[ia++] = yi, oa = n.id, yr = n.overflow, yi = r), r = Mf(r, c.children), r.flags |= 4096, r);
  }
  function Xh(n, r, o) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), Go(n.return, r, o);
  }
  function zf(n, r, o, c, v) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: o, tailMode: v } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = o, m.tailMode = v);
  }
  function Cp(n, r, o) {
    var c = r.pendingProps, v = c.revealOrder, m = c.tail;
    if (Wn(n, r, c.children, o), c = at.current, c & 2)
      c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Xh(n, o, r);
            else if (n.tag === 19)
              Xh(n, o, r);
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
      switch (v) {
        case "forwards":
          for (o = r.child, v = null; o !== null; )
            n = o.alternate, n !== null && Bt(n) === null && (v = o), o = o.sibling;
          o = v, o === null ? (v = r.child, r.child = null) : (v = o.sibling, o.sibling = null), zf(r, !1, v, o, m);
          break;
        case "backwards":
          for (o = null, v = r.child, r.child = null; v !== null; ) {
            if (n = v.alternate, n !== null && Bt(n) === null) {
              r.child = v;
              break;
            }
            n = v.sibling, v.sibling = o, o = v, v = n;
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
        hp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var c = r.type._context, v = r.memoizedProps.value;
        It(Ou, c._currentValue), c._currentValue = v;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (It(at, at.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Kh(n, r, o) : (It(at, at.current & 1), n = Yn(n, r, o), n !== null ? n.sibling : null);
        It(at, at.current & 1);
        break;
      case 19:
        if (c = (o & r.childLanes) !== 0, n.flags & 128) {
          if (c)
            return Cp(n, r, o);
          r.flags |= 128;
        }
        if (v = r.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), It(at, at.current), c)
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
    var v = n.memoizedProps;
    if (v !== c) {
      n = r.stateNode, Jo(Li.current);
      var m = null;
      switch (o) {
        case "input":
          v = $t(n, v), c = $t(n, c), m = [];
          break;
        case "select":
          v = L({}, v, { value: void 0 }), c = L({}, c, { value: void 0 }), m = [];
          break;
        case "textarea":
          v = Sa(n, v), c = Sa(n, c), m = [];
          break;
        default:
          typeof v.onClick != "function" && typeof c.onClick == "function" && (n.onclick = lf);
      }
      Vt(o, c);
      var x;
      o = null;
      for (Z in v)
        if (!c.hasOwnProperty(Z) && v.hasOwnProperty(Z) && v[Z] != null)
          if (Z === "style") {
            var A = v[Z];
            for (x in A)
              A.hasOwnProperty(x) && (o || (o = {}), o[x] = "");
          } else
            Z !== "dangerouslySetInnerHTML" && Z !== "children" && Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && Z !== "autoFocus" && (g.hasOwnProperty(Z) ? m || (m = []) : (m = m || []).push(Z, null));
      for (Z in c) {
        var P = c[Z];
        if (A = v != null ? v[Z] : void 0, c.hasOwnProperty(Z) && P !== A && (P != null || A != null))
          if (Z === "style")
            if (A) {
              for (x in A)
                !A.hasOwnProperty(x) || P && P.hasOwnProperty(x) || (o || (o = {}), o[x] = "");
              for (x in P)
                P.hasOwnProperty(x) && A[x] !== P[x] && (o || (o = {}), o[x] = P[x]);
            } else
              o || (m || (m = []), m.push(
                Z,
                o
              )), o = P;
          else
            Z === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, A = A ? A.__html : void 0, P != null && A !== P && (m = m || []).push(Z, P)) : Z === "children" ? typeof P != "string" && typeof P != "number" || (m = m || []).push(Z, "" + P) : Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && (g.hasOwnProperty(Z) ? (P != null && Z === "onScroll" && sn("scroll", n), m || A === P || (m = [])) : (m = m || []).push(Z, P));
      }
      o && (m = m || []).push("style", o);
      var Z = m;
      (r.updateQueue = Z) && (r.flags |= 4);
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
      for (var v = n.child; v !== null; )
        o |= v.lanes | v.childLanes, c |= v.subtreeFlags & 14680064, c |= v.flags & 14680064, v.return = n, v = v.sibling;
    else
      for (v = n.child; v !== null; )
        o |= v.lanes | v.childLanes, c |= v.subtreeFlags, c |= v.flags, v.return = n, v = v.sibling;
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
        var v = Jo(nc.current);
        if (o = r.type, n !== null && r.stateNode != null)
          $u(n, r, o, c, v), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
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
                for (v = 0; v < io.length; v++)
                  sn(io[v], c);
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
            Vt(o, m), v = null;
            for (var x in m)
              if (m.hasOwnProperty(x)) {
                var A = m[x];
                x === "children" ? typeof A == "string" ? c.textContent !== A && (m.suppressHydrationWarning !== !0 && qs(c.textContent, A, n), v = ["children", A]) : typeof A == "number" && c.textContent !== "" + A && (m.suppressHydrationWarning !== !0 && qs(
                  c.textContent,
                  A,
                  n
                ), v = ["children", "" + A]) : g.hasOwnProperty(x) && A != null && x === "onScroll" && sn("scroll", c);
              }
            switch (o) {
              case "input":
                ht(c), Xn(c, m, !0);
                break;
              case "textarea":
                ht(c), ba(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (c.onclick = lf);
            }
            c = v, r.updateQueue = c, c !== null && (r.flags |= 4);
          } else {
            x = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = vr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = x.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = x.createElement(o, { is: c.is }) : (n = x.createElement(o), o === "select" && (x = n, c.multiple ? x.multiple = !0 : c.size && (x.size = c.size))) : n = x.createElementNS(n, o), n[Va] = r, n[Xs] = c, Ui(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (x = $n(o, c), o) {
                case "dialog":
                  sn("cancel", n), sn("close", n), v = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  sn("load", n), v = c;
                  break;
                case "video":
                case "audio":
                  for (v = 0; v < io.length; v++)
                    sn(io[v], n);
                  v = c;
                  break;
                case "source":
                  sn("error", n), v = c;
                  break;
                case "img":
                case "image":
                case "link":
                  sn(
                    "error",
                    n
                  ), sn("load", n), v = c;
                  break;
                case "details":
                  sn("toggle", n), v = c;
                  break;
                case "input":
                  Mn(n, c), v = $t(n, c), sn("invalid", n);
                  break;
                case "option":
                  v = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, v = L({}, c, { value: void 0 }), sn("invalid", n);
                  break;
                case "textarea":
                  Ea(n, c), v = Sa(n, c), sn("invalid", n);
                  break;
                default:
                  v = c;
              }
              Vt(o, v), A = v;
              for (m in A)
                if (A.hasOwnProperty(m)) {
                  var P = A[m];
                  m === "style" ? kt(n, P) : m === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && Ca(n, P)) : m === "children" ? typeof P == "string" ? (o !== "textarea" || P !== "") && wa(n, P) : typeof P == "number" && wa(n, "" + P) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (g.hasOwnProperty(m) ? P != null && m === "onScroll" && sn("scroll", n) : P != null && ze(n, m, P, x));
                }
              switch (o) {
                case "input":
                  ht(n), Xn(n, c, !1);
                  break;
                case "textarea":
                  ht(n), ba(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + Ne(c.value));
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
                  typeof v.onClick == "function" && (n.onclick = lf);
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
            Mh(), ku(), r.flags |= 98560, m = !1;
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
        if (c = (r.flags & 128) !== 0, x = m.rendering, x === null)
          if (c)
            Pn(m, !1);
          else {
            if (ar !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (x = Bt(n), x !== null) {
                  for (r.flags |= 128, Pn(m, !1), c = x.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = o, o = r.child; o !== null; )
                    m = o, n = c, m.flags &= 14680066, x = m.alternate, x === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = x.childLanes, m.lanes = x.lanes, m.child = x.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = x.memoizedProps, m.memoizedState = x.memoizedState, m.updateQueue = x.updateQueue, m.type = x.type, n = x.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return It(at, at.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            m.tail !== null && hn() > Xu && (r.flags |= 128, c = !0, Pn(m, !1), r.lanes = 4194304);
          }
        else {
          if (!c)
            if (n = Bt(x), n !== null) {
              if (r.flags |= 128, c = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Pn(m, !0), m.tail === null && m.tailMode === "hidden" && !x.alternate && !bn)
                return Lr(r), null;
            } else
              2 * hn() - m.renderingStartTime > Xu && o !== 1073741824 && (r.flags |= 128, c = !0, Pn(m, !1), r.lanes = 4194304);
          m.isBackwards ? (x.sibling = r.child, r.child = x) : (o = m.last, o !== null ? o.sibling = x : r.child = x, m.last = x);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = hn(), r.sibling = null, o = at.current, It(at, c ? o & 1 | 2 : o & 1), r) : (Lr(r), null);
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
  function wp(n, r, o) {
    try {
      o();
    } catch (c) {
      Hn(n, r, c);
    }
  }
  var jf = !1;
  function Yg(n, r) {
    if (ep = gu, n = Sh(), $s(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var c = o.getSelection && o.getSelection();
          if (c && c.rangeCount !== 0) {
            o = c.anchorNode;
            var v = c.anchorOffset, m = c.focusNode;
            c = c.focusOffset;
            try {
              o.nodeType, m.nodeType;
            } catch {
              o = null;
              break e;
            }
            var x = 0, A = -1, P = -1, Z = 0, ye = 0, ge = n, ve = null;
            t:
              for (; ; ) {
                for (var Ie; ge !== o || v !== 0 && ge.nodeType !== 3 || (A = x + v), ge !== m || c !== 0 && ge.nodeType !== 3 || (P = x + c), ge.nodeType === 3 && (x += ge.nodeValue.length), (Ie = ge.firstChild) !== null; )
                  ve = ge, ge = Ie;
                for (; ; ) {
                  if (ge === n)
                    break t;
                  if (ve === o && ++Z === v && (A = x), ve === m && ++ye === c && (P = x), (Ie = ge.nextSibling) !== null)
                    break;
                  ge = ve, ve = ge.parentNode;
                }
                ge = Ie;
              }
            o = A === -1 || P === -1 ? null : { start: A, end: P };
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
                    var tt = Xe.memoizedProps, qn = Xe.memoizedState, V = r.stateNode, H = V.getSnapshotBeforeUpdate(r.elementType === r.type ? tt : la(r.type, tt), qn);
                    V.__reactInternalSnapshotBeforeUpdate = H;
                  }
                  break;
                case 3:
                  var q = r.stateNode.containerInfo;
                  q.nodeType === 1 ? q.textContent = "" : q.nodeType === 9 && q.documentElement && q.removeChild(q.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(f(163));
              }
          } catch (xe) {
            Hn(r, r.return, xe);
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
      var v = c = c.next;
      do {
        if ((v.tag & n) === n) {
          var m = v.destroy;
          v.destroy = void 0, m !== void 0 && wp(r, o, m);
        }
        v = v.next;
      } while (v !== c);
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
  function Jh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Jh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Va], delete r[Xs], delete r[ip], delete r[jg], delete r[Pg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function xp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Zh(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || xp(n.return))
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
  function vc(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = lf));
    else if (c !== 4 && (n = n.child, n !== null))
      for (vc(n, r, o), n = n.sibling; n !== null; )
        vc(n, r, o), n = n.sibling;
  }
  function Wu(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null))
      for (Wu(n, r, o), n = n.sibling; n !== null; )
        Wu(n, r, o), n = n.sibling;
  }
  var Tn = null, cr = !1;
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
        var c = Tn, v = cr;
        Tn = null, Hr(n, r, o), Tn = c, cr = v, Tn !== null && (cr ? (n = Tn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Tn.removeChild(o.stateNode));
        break;
      case 18:
        Tn !== null && (cr ? (n = Tn, o = o.stateNode, n.nodeType === 8 ? ap(n.parentNode, o) : n.nodeType === 1 && ap(n, o), Ba(n)) : ap(Tn, o.stateNode));
        break;
      case 4:
        c = Tn, v = cr, Tn = o.stateNode.containerInfo, cr = !0, Hr(n, r, o), Tn = c, cr = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!gr && (c = o.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          v = c = c.next;
          do {
            var m = v, x = m.destroy;
            m = m.tag, x !== void 0 && (m & 2 || m & 4) && wp(o, r, x), v = v.next;
          } while (v !== c);
        }
        Hr(n, r, o);
        break;
      case 1:
        if (!gr && (Vu(o, r), c = o.stateNode, typeof c.componentWillUnmount == "function"))
          try {
            c.props = o.memoizedProps, c.state = o.memoizedState, c.componentWillUnmount();
          } catch (A) {
            Hn(o, r, A);
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
        var v = Zg.bind(null, n, c);
        o.has(c) || (o.add(c), c.then(v, v));
      });
    }
  }
  function fr(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var c = 0; c < o.length; c++) {
        var v = o[c];
        try {
          var m = n, x = r, A = x;
          e:
            for (; A !== null; ) {
              switch (A.tag) {
                case 5:
                  Tn = A.stateNode, cr = !1;
                  break e;
                case 3:
                  Tn = A.stateNode.containerInfo, cr = !0;
                  break e;
                case 4:
                  Tn = A.stateNode.containerInfo, cr = !0;
                  break e;
              }
              A = A.return;
            }
          if (Tn === null)
            throw Error(f(160));
          Yu(m, x, v), Tn = null, cr = !1;
          var P = v.alternate;
          P !== null && (P.return = null), v.return = null;
        } catch (Z) {
          Hn(v, r, Z);
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
          var v = n.stateNode;
          try {
            wa(v, "");
          } catch (tt) {
            Hn(n, n.return, tt);
          }
        }
        if (c & 4 && (v = n.stateNode, v != null)) {
          var m = n.memoizedProps, x = o !== null ? o.memoizedProps : m, A = n.type, P = n.updateQueue;
          if (n.updateQueue = null, P !== null)
            try {
              A === "input" && m.type === "radio" && m.name != null && Ln(v, m), $n(A, x);
              var Z = $n(A, m);
              for (x = 0; x < P.length; x += 2) {
                var ye = P[x], ge = P[x + 1];
                ye === "style" ? kt(v, ge) : ye === "dangerouslySetInnerHTML" ? Ca(v, ge) : ye === "children" ? wa(v, ge) : ze(v, ye, ge, Z);
              }
              switch (A) {
                case "input":
                  Kn(v, m);
                  break;
                case "textarea":
                  Or(v, m);
                  break;
                case "select":
                  var ve = v._wrapperState.wasMultiple;
                  v._wrapperState.wasMultiple = !!m.multiple;
                  var Ie = m.value;
                  Ie != null ? nr(v, !!m.multiple, Ie, !1) : ve !== !!m.multiple && (m.defaultValue != null ? nr(
                    v,
                    !!m.multiple,
                    m.defaultValue,
                    !0
                  ) : nr(v, !!m.multiple, m.multiple ? [] : "", !1));
              }
              v[Xs] = m;
            } catch (tt) {
              Hn(n, n.return, tt);
            }
        }
        break;
      case 6:
        if (fr(r, n), ji(n), c & 4) {
          if (n.stateNode === null)
            throw Error(f(162));
          v = n.stateNode, m = n.memoizedProps;
          try {
            v.nodeValue = m;
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
        fr(r, n), ji(n), v = n.child, v.flags & 8192 && (m = v.memoizedState !== null, v.stateNode.isHidden = m, !m || v.alternate !== null && v.alternate.memoizedState !== null || ($f = hn())), c & 4 && qu(n);
        break;
      case 22:
        if (ye = o !== null && o.memoizedState !== null, n.mode & 1 ? (gr = (Z = gr) || ye, fr(r, n), gr = Z) : fr(r, n), ji(n), c & 8192) {
          if (Z = n.memoizedState !== null, (n.stateNode.isHidden = Z) && !ye && n.mode & 1)
            for (Ge = n, ye = n.child; ye !== null; ) {
              for (ge = Ge = ye; Ge !== null; ) {
                switch (ve = Ge, Ie = ve.child, ve.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Iu(4, ve, ve.return);
                    break;
                  case 1:
                    Vu(ve, ve.return);
                    var Xe = ve.stateNode;
                    if (typeof Xe.componentWillUnmount == "function") {
                      c = ve, o = ve.return;
                      try {
                        r = c, Xe.props = r.memoizedProps, Xe.state = r.memoizedState, Xe.componentWillUnmount();
                      } catch (tt) {
                        Hn(c, o, tt);
                      }
                    }
                    break;
                  case 5:
                    Vu(ve, ve.return);
                    break;
                  case 22:
                    if (ve.memoizedState !== null) {
                      tm(ge);
                      continue;
                    }
                }
                Ie !== null ? (Ie.return = ve, Ge = Ie) : tm(ge);
              }
              ye = ye.sibling;
            }
          e:
            for (ye = null, ge = n; ; ) {
              if (ge.tag === 5) {
                if (ye === null) {
                  ye = ge;
                  try {
                    v = ge.stateNode, Z ? (m = v.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (A = ge.stateNode, P = ge.memoizedProps.style, x = P != null && P.hasOwnProperty("display") ? P.display : null, A.style.display = lt("display", x));
                  } catch (tt) {
                    Hn(n, n.return, tt);
                  }
                }
              } else if (ge.tag === 6) {
                if (ye === null)
                  try {
                    ge.stateNode.nodeValue = Z ? "" : ge.memoizedProps;
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
            if (xp(o)) {
              var c = o;
              break e;
            }
            o = o.return;
          }
          throw Error(f(160));
        }
        switch (c.tag) {
          case 5:
            var v = c.stateNode;
            c.flags & 32 && (wa(v, ""), c.flags &= -33);
            var m = Zh(n);
            Wu(n, m, v);
            break;
          case 3:
          case 4:
            var x = c.stateNode.containerInfo, A = Zh(n);
            vc(n, A, x);
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
    Ge = n, Tp(n);
  }
  function Tp(n, r, o) {
    for (var c = (n.mode & 1) !== 0; Ge !== null; ) {
      var v = Ge, m = v.child;
      if (v.tag === 22 && c) {
        var x = v.memoizedState !== null || Bu;
        if (!x) {
          var A = v.alternate, P = A !== null && A.memoizedState !== null || gr;
          A = Bu;
          var Z = gr;
          if (Bu = x, (gr = P) && !Z)
            for (Ge = v; Ge !== null; )
              x = Ge, P = x.child, x.tag === 22 && x.memoizedState !== null ? _p(v) : P !== null ? (P.return = x, Ge = P) : _p(v);
          for (; m !== null; )
            Ge = m, Tp(m), m = m.sibling;
          Ge = v, Bu = A, gr = Z;
        }
        Qu(n);
      } else
        v.subtreeFlags & 8772 && m !== null ? (m.return = v, Ge = m) : Qu(n);
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
                    var v = r.elementType === r.type ? o.memoizedProps : la(r.type, o.memoizedProps);
                    c.componentDidUpdate(v, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                  }
                var m = r.updateQueue;
                m !== null && Au(r, m, c);
                break;
              case 3:
                var x = r.updateQueue;
                if (x !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Au(r, x, o);
                }
                break;
              case 5:
                var A = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = A;
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
                  var Z = r.alternate;
                  if (Z !== null) {
                    var ye = Z.memoizedState;
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
        } catch (ve) {
          Hn(r, r.return, ve);
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
  function _p(n) {
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
              var v = r.return;
              try {
                c.componentDidMount();
              } catch (P) {
                Hn(r, v, P);
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
            var x = r.return;
            try {
              Ff(r);
            } catch (P) {
              Hn(r, x, P);
            }
        }
      } catch (P) {
        Hn(r, r.return, P);
      }
      if (r === n) {
        Ge = null;
        break;
      }
      var A = r.sibling;
      if (A !== null) {
        A.return = r.return, Ge = A;
        break;
      }
      Ge = r.return;
    }
  }
  var Qg = Math.ceil, ql = Be.ReactCurrentDispatcher, Hf = Be.ReactCurrentOwner, Xa = Be.ReactCurrentBatchConfig, Nt = 0, Fn = null, Cn = null, rr = 0, da = 0, Gu = cn(0), ar = 0, hc = null, Ql = 0, Ku = 0, Rp = 0, rl = null, zr = null, $f = 0, Xu = 1 / 0, vo = null, Bf = !1, kp = null, Ja = null, Ju = !1, Za = null, Vf = 0, mc = 0, If = null, yc = -1, Gl = 0;
  function dr() {
    return Nt & 6 ? hn() : yc !== -1 ? yc : yc = hn();
  }
  function ho(n) {
    return n.mode & 1 ? Nt & 2 && rr !== 0 ? rr & -rr : Fg.transition !== null ? (Gl === 0 && (Gl = Tl()), Gl) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ms(n.type)), n) : 1;
  }
  function Dn(n, r, o, c) {
    if (50 < mc)
      throw mc = 0, If = null, Error(f(185));
    jo(n, o, c), (!(Nt & 2) || n !== Fn) && (n === Fn && (!(Nt & 2) && (Ku |= o), ar === 4 && Pi(n, rr)), ir(n, c), o === 1 && Nt === 0 && !(r.mode & 1) && (Xu = hn() + 500, Yo && Ni()));
  }
  function ir(n, r) {
    var o = n.callbackNode;
    Uo(n, r);
    var c = _i(n, n === Fn ? rr : 0);
    if (c === 0)
      o !== null && vn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (o != null && vn(o), r === 1)
        n.tag === 0 ? Nh(Zu.bind(null, n)) : sf(Zu.bind(null, n)), Dh(function() {
          !(Nt & 6) && Ni();
        }), o = null;
      else {
        switch (Ds(c)) {
          case 1:
            o = ws;
            break;
          case 4:
            o = Ti;
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
    if (yc = -1, Gl = 0, Nt & 6)
      throw Error(f(327));
    var o = n.callbackNode;
    if (es() && n.callbackNode !== o)
      return null;
    var c = _i(n, n === Fn ? rr : 0);
    if (c === 0)
      return null;
    if (c & 30 || c & n.expiredLanes || r)
      r = qf(n, c);
    else {
      r = c;
      var v = Nt;
      Nt |= 2;
      var m = rm();
      (Fn !== n || rr !== r) && (vo = null, Xu = hn() + 500, Xl(n, r));
      do
        try {
          Kg();
          break;
        } catch (A) {
          nm(n, A);
        }
      while (!0);
      cp(), ql.current = m, Nt = v, Cn !== null ? r = 0 : (Fn = null, rr = 0, r = ar);
    }
    if (r !== 0) {
      if (r === 2 && (v = Ri(n), v !== 0 && (c = v, r = Kl(n, v))), r === 1)
        throw o = hc, Xl(n, 0), Pi(n, c), ir(n, hn()), o;
      if (r === 6)
        Pi(n, c);
      else {
        if (v = n.current.alternate, !(c & 30) && !Dp(v) && (r = qf(n, c), r === 2 && (m = Ri(n), m !== 0 && (c = m, r = Kl(n, m))), r === 1))
          throw o = hc, Xl(n, 0), Pi(n, c), ir(n, hn()), o;
        switch (n.finishedWork = v, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            al(n, zr, vo);
            break;
          case 3:
            if (Pi(n, c), (c & 130023424) === c && (r = $f + 500 - hn(), 10 < r)) {
              if (_i(n, 0) !== 0)
                break;
              if (v = n.suspendedLanes, (v & c) !== c) {
                dr(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = Qs(al.bind(null, n, zr, vo), r);
              break;
            }
            al(n, zr, vo);
            break;
          case 4:
            if (Pi(n, c), (c & 4194240) === c)
              break;
            for (r = n.eventTimes, v = -1; 0 < c; ) {
              var x = 31 - Pr(c);
              m = 1 << x, x = r[x], x > v && (v = x), c &= ~m;
            }
            if (c = v, c = hn() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * Qg(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = Qs(al.bind(null, n, zr, vo), c);
              break;
            }
            al(n, zr, vo);
            break;
          case 5:
            al(n, zr, vo);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return ir(n, hn()), n.callbackNode === o ? Wf.bind(null, n) : null;
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
            var v = o[c], m = v.getSnapshot;
            v = v.value;
            try {
              if (!vi(m(), v))
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
    if (Nt & 6)
      throw Error(f(327));
    es();
    var r = _i(n, 0);
    if (!(r & 1))
      return ir(n, hn()), null;
    var o = qf(n, r);
    if (n.tag !== 0 && o === 2) {
      var c = Ri(n);
      c !== 0 && (r = c, o = Kl(n, c));
    }
    if (o === 1)
      throw o = hc, Xl(n, 0), Pi(n, r), ir(n, hn()), o;
    if (o === 6)
      throw Error(f(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, al(n, zr, vo), ir(n, hn()), null;
  }
  function Ap(n, r) {
    var o = Nt;
    Nt |= 1;
    try {
      return n(r);
    } finally {
      Nt = o, Nt === 0 && (Xu = hn() + 500, Yo && Ni());
    }
  }
  function Fi(n) {
    Za !== null && Za.tag === 0 && !(Nt & 6) && es();
    var r = Nt;
    Nt |= 1;
    var o = Xa.transition, c = Lt;
    try {
      if (Xa.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = c, Xa.transition = o, Nt = r, !(Nt & 6) && Ni();
    }
  }
  function Yf() {
    da = Gu.current, nt(Gu);
  }
  function Xl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Gs(o)), Cn !== null)
      for (o = Cn.return; o !== null; ) {
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
    if (Fn = n, Cn = n = il(n.current, null), rr = da = r, ar = 0, hc = null, Rp = Ku = Ql = 0, zr = rl = null, Mr !== null) {
      for (r = 0; r < Mr.length; r++)
        if (o = Mr[r], c = o.interleaved, c !== null) {
          o.interleaved = null;
          var v = c.next, m = o.pending;
          if (m !== null) {
            var x = m.next;
            m.next = v, c.next = x;
          }
          o.pending = c;
        }
      Mr = null;
    }
    return n;
  }
  function nm(n, r) {
    do {
      var o = Cn;
      try {
        if (cp(), rc.current = Df, In) {
          for (var c = On.memoizedState; c !== null; ) {
            var v = c.queue;
            v !== null && (v.pending = null), c = c.next;
          }
          In = !1;
        }
        if (Pl = 0, se = Vn = On = null, dt = !1, zi = 0, Hf.current = null, o === null || o.return === null) {
          ar = 1, hc = r, Cn = null;
          break;
        }
        e: {
          var m = n, x = o.return, A = o, P = r;
          if (r = rr, A.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var Z = P, ye = A, ge = ye.tag;
            if (!(ye.mode & 1) && (ge === 0 || ge === 11 || ge === 15)) {
              var ve = ye.alternate;
              ve ? (ye.updateQueue = ve.updateQueue, ye.memoizedState = ve.memoizedState, ye.lanes = ve.lanes) : (ye.updateQueue = null, ye.memoizedState = null);
            }
            var Ie = qh(x);
            if (Ie !== null) {
              Ie.flags &= -257, Ep(Ie, x, A, m, r), Ie.mode & 1 && cc(m, Z, r), r = Ie, P = Z;
              var Xe = r.updateQueue;
              if (Xe === null) {
                var tt = /* @__PURE__ */ new Set();
                tt.add(P), r.updateQueue = tt;
              } else
                Xe.add(P);
              break e;
            } else {
              if (!(r & 1)) {
                cc(m, Z, r), gc();
                break e;
              }
              P = Error(f(426));
            }
          } else if (bn && A.mode & 1) {
            var qn = qh(x);
            if (qn !== null) {
              !(qn.flags & 65536) && (qn.flags |= 256), Ep(qn, x, A, m, r), er(tl(P, A));
              break e;
            }
          }
          m = P = tl(P, A), ar !== 4 && (ar = 2), rl === null ? rl = [m] : rl.push(m), m = x;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var V = Wh(m, P, r);
                Uh(m, V);
                break e;
              case 1:
                A = P;
                var H = m.type, q = m.stateNode;
                if (!(m.flags & 128) && (typeof H.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && (Ja === null || !Ja.has(q)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var xe = Yh(m, A, r);
                  Uh(m, xe);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        im(o);
      } catch (rt) {
        r = rt, Cn === o && o !== null && (Cn = o = o.return);
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
    var o = Nt;
    Nt |= 2;
    var c = rm();
    (Fn !== n || rr !== r) && (vo = null, Xl(n, r));
    do
      try {
        Gg();
        break;
      } catch (v) {
        nm(n, v);
      }
    while (!0);
    if (cp(), Nt = o, ql.current = c, Cn !== null)
      throw Error(f(261));
    return Fn = null, rr = 0, ar;
  }
  function Gg() {
    for (; Cn !== null; )
      am(Cn);
  }
  function Kg() {
    for (; Cn !== null && !Ar(); )
      am(Cn);
  }
  function am(n) {
    var r = um(n.alternate, n, da);
    n.memoizedProps = n.pendingProps, r === null ? im(n) : Cn = r, Hf.current = null;
  }
  function im(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Wg(o, r), o !== null) {
          o.flags &= 32767, Cn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          ar = 6, Cn = null;
          return;
        }
      } else if (o = Ig(o, r, da), o !== null) {
        Cn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        Cn = r;
        return;
      }
      Cn = r = n;
    } while (r !== null);
    ar === 0 && (ar = 5);
  }
  function al(n, r, o) {
    var c = Lt, v = Xa.transition;
    try {
      Xa.transition = null, Lt = 1, Xg(n, r, o, c);
    } finally {
      Xa.transition = v, Lt = c;
    }
    return null;
  }
  function Xg(n, r, o, c) {
    do
      es();
    while (Za !== null);
    if (Nt & 6)
      throw Error(f(327));
    o = n.finishedWork;
    var v = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(f(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (ks(n, m), n === Fn && (Cn = Fn = null, rr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Ju || (Ju = !0, sm(Ot, function() {
      return es(), null;
    })), m = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || m) {
      m = Xa.transition, Xa.transition = null;
      var x = Lt;
      Lt = 1;
      var A = Nt;
      Nt |= 4, Hf.current = null, Yg(n, o), em(o, n), Dl(tp), gu = !!ep, tp = ep = null, n.current = o, qg(o), xi(), Nt = A, Lt = x, Xa.transition = m;
    } else
      n.current = o;
    if (Ju && (Ju = !1, Za = n, Vf = v), m = n.pendingLanes, m === 0 && (Ja = null), xs(o.stateNode), ir(n, hn()), r !== null)
      for (c = n.onRecoverableError, o = 0; o < r.length; o++)
        v = r[o], c(v.value, { componentStack: v.stack, digest: v.digest });
    if (Bf)
      throw Bf = !1, n = kp, kp = null, n;
    return Vf & 1 && n.tag !== 0 && es(), m = n.pendingLanes, m & 1 ? n === If ? mc++ : (mc = 0, If = n) : mc = 0, Ni(), null;
  }
  function es() {
    if (Za !== null) {
      var n = Ds(Vf), r = Xa.transition, o = Lt;
      try {
        if (Xa.transition = null, Lt = 16 > n ? 16 : n, Za === null)
          var c = !1;
        else {
          if (n = Za, Za = null, Vf = 0, Nt & 6)
            throw Error(f(331));
          var v = Nt;
          for (Nt |= 4, Ge = n.current; Ge !== null; ) {
            var m = Ge, x = m.child;
            if (Ge.flags & 16) {
              var A = m.deletions;
              if (A !== null) {
                for (var P = 0; P < A.length; P++) {
                  var Z = A[P];
                  for (Ge = Z; Ge !== null; ) {
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
                        var ve = ye.sibling, Ie = ye.return;
                        if (Jh(ye), ye === Z) {
                          Ge = null;
                          break;
                        }
                        if (ve !== null) {
                          ve.return = Ie, Ge = ve;
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
            if (m.subtreeFlags & 2064 && x !== null)
              x.return = m, Ge = x;
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
                  var V = m.sibling;
                  if (V !== null) {
                    V.return = m.return, Ge = V;
                    break e;
                  }
                  Ge = m.return;
                }
          }
          var H = n.current;
          for (Ge = H; Ge !== null; ) {
            x = Ge;
            var q = x.child;
            if (x.subtreeFlags & 2064 && q !== null)
              q.return = x, Ge = q;
            else
              e:
                for (x = H; Ge !== null; ) {
                  if (A = Ge, A.flags & 2048)
                    try {
                      switch (A.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pf(9, A);
                      }
                    } catch (rt) {
                      Hn(A, A.return, rt);
                    }
                  if (A === x) {
                    Ge = null;
                    break e;
                  }
                  var xe = A.sibling;
                  if (xe !== null) {
                    xe.return = A.return, Ge = xe;
                    break e;
                  }
                  Ge = A.return;
                }
          }
          if (Nt = v, Ni(), Zr && typeof Zr.onPostCommitFiberRoot == "function")
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
    r = tl(o, r), r = Wh(n, r, 1), n = Xo(n, r, 1), r = dr(), n !== null && (jo(n, 1, r), ir(n, r));
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
            n = tl(o, n), n = Yh(r, n, 1), r = Xo(r, n, 1), n = dr(), r !== null && (jo(r, 1, n), ir(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Jg(n, r, o) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & o, Fn === n && (rr & o) === o && (ar === 4 || ar === 3 && (rr & 130023424) === rr && 500 > hn() - $f ? Xl(n, 0) : Rp |= o), ir(n, r);
  }
  function lm(n, r) {
    r === 0 && (n.mode & 1 ? (r = vu, vu <<= 1, !(vu & 130023424) && (vu = 4194304)) : r = 1);
    var o = dr();
    n = co(n, r), n !== null && (jo(n, r, o), ir(n, o));
  }
  function Np(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), lm(n, o);
  }
  function Zg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, v = n.memoizedState;
        v !== null && (o = v.retryLane);
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
        var v = ka(r, sr.current);
        Bn(r, o), v = Fl(null, r, c, n, v, o);
        var m = Zo();
        return r.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Zn(c) ? (m = !0, Ll(r)) : m = !1, r.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, dp(r), v.updater = hf, r.stateNode = v, v._reactInternals = r, vp(r, c, n, o), r = Nf(null, r, c, !0, m, o)) : (r.tag = 0, bn && m && cf(r), Wn(null, r, v, o), r = r.child), r;
      case 16:
        c = r.elementType;
        e: {
          switch (pc(n, r), n = r.pendingProps, v = c._init, c = v(c._payload), r.type = c, v = r.tag = e0(c), n = la(c, n), v) {
            case 0:
              r = Tt(null, r, c, n, o);
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
        return c = r.type, v = r.pendingProps, v = r.elementType === c ? v : la(c, v), Tt(n, r, c, v, o);
      case 1:
        return c = r.type, v = r.pendingProps, v = r.elementType === c ? v : la(c, v), fc(n, r, c, v, o);
      case 3:
        e: {
          if (Vg(r), n === null)
            throw Error(f(387));
          c = r.pendingProps, m = r.memoizedState, v = m.element, zh(n, r), Zs(r, c, null, o);
          var x = r.memoizedState;
          if (c = x.element, m.isDehydrated)
            if (m = { element: c, isDehydrated: !1, cache: x.cache, pendingSuspenseBoundaries: x.pendingSuspenseBoundaries, transitions: x.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
              v = tl(Error(f(423)), r), r = Gh(n, r, c, o, v);
              break e;
            } else if (c !== v) {
              v = tl(Error(f(424)), r), r = Gh(n, r, c, o, v);
              break e;
            } else
              for (Da = Ra(r.stateNode.containerInfo.firstChild), Oa = r, bn = !0, qa = null, o = Bh(r, null, c, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (ku(), c === v) {
              r = Yn(n, r, o);
              break e;
            }
            Wn(n, r, c, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return mf(r), n === null && df(r), c = r.type, v = r.pendingProps, m = n !== null ? n.memoizedProps : null, x = v.children, Ml(c, v) ? x = null : m !== null && Ml(c, m) && (r.flags |= 32), Wl(n, r), Wn(n, r, x, o), r.child;
      case 6:
        return n === null && df(r), null;
      case 13:
        return Kh(n, r, o);
      case 4:
        return hp(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = Mu(r, null, c, o) : Wn(n, r, c, o), r.child;
      case 11:
        return c = r.type, v = r.pendingProps, v = r.elementType === c ? v : la(c, v), Fu(n, r, c, v, o);
      case 7:
        return Wn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Wn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Wn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (c = r.type._context, v = r.pendingProps, m = r.memoizedProps, x = v.value, It(Ou, c._currentValue), c._currentValue = x, m !== null)
            if (vi(m.value, x)) {
              if (m.children === v.children && !bt.current) {
                r = Yn(n, r, o);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var A = m.dependencies;
                if (A !== null) {
                  x = m.child;
                  for (var P = A.firstContext; P !== null; ) {
                    if (P.context === c) {
                      if (m.tag === 1) {
                        P = mn(-1, o & -o), P.tag = 2;
                        var Z = m.updateQueue;
                        if (Z !== null) {
                          Z = Z.shared;
                          var ye = Z.pending;
                          ye === null ? P.next = P : (P.next = ye.next, ye.next = P), Z.pending = P;
                        }
                      }
                      m.lanes |= o, P = m.alternate, P !== null && (P.lanes |= o), Go(
                        m.return,
                        o,
                        r
                      ), A.lanes |= o;
                      break;
                    }
                    P = P.next;
                  }
                } else if (m.tag === 10)
                  x = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (x = m.return, x === null)
                    throw Error(f(341));
                  x.lanes |= o, A = x.alternate, A !== null && (A.lanes |= o), Go(x, o, r), x = m.sibling;
                } else
                  x = m.child;
                if (x !== null)
                  x.return = m;
                else
                  for (x = m; x !== null; ) {
                    if (x === r) {
                      x = null;
                      break;
                    }
                    if (m = x.sibling, m !== null) {
                      m.return = x.return, x = m;
                      break;
                    }
                    x = x.return;
                  }
                m = x;
              }
          Wn(n, r, v.children, o), r = r.child;
        }
        return r;
      case 9:
        return v = r.type, c = r.pendingProps.children, Bn(r, o), v = Oe(v), c = c(v), r.flags |= 1, Wn(n, r, c, o), r.child;
      case 14:
        return c = r.type, v = la(c, r.pendingProps), v = la(c.type, v), nl(n, r, c, v, o);
      case 15:
        return Af(n, r, r.type, r.pendingProps, o);
      case 17:
        return c = r.type, v = r.pendingProps, v = r.elementType === c ? v : la(c, v), pc(n, r), r.tag = 1, Zn(c) ? (n = !0, Ll(r)) : n = !1, Bn(r, o), Ph(r, c, v), vp(r, c, v, o), Nf(null, r, c, !0, n, o);
      case 19:
        return Cp(n, r, o);
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
      if (n = n.$$typeof, n === Ce)
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
  function Qf(n, r, o, c, v, m) {
    var x = 2;
    if (c = n, typeof n == "function")
      Mp(n) && (x = 1);
    else if (typeof n == "string")
      x = 5;
    else
      e:
        switch (n) {
          case gt:
            return Jl(o.children, v, m, r);
          case X:
            x = 8, v |= 8;
            break;
          case Te:
            return n = ei(12, o, r, v | 2), n.elementType = Te, n.lanes = m, n;
          case Ae:
            return n = ei(13, o, r, v), n.elementType = Ae, n.lanes = m, n;
          case le:
            return n = ei(19, o, r, v), n.elementType = le, n.lanes = m, n;
          case pe:
            return Gf(o, v, m, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case De:
                  x = 10;
                  break e;
                case _e:
                  x = 9;
                  break e;
                case Ce:
                  x = 11;
                  break e;
                case re:
                  x = 14;
                  break e;
                case he:
                  x = 16, c = null;
                  break e;
              }
            throw Error(f(130, n == null ? n : typeof n, ""));
        }
    return r = ei(x, o, r, v), r.elementType = n, r.type = c, r.lanes = m, r;
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
  function Ec(n, r, o, c, v) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _l(0), this.expirationTimes = _l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _l(0), this.identifierPrefix = c, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function Lp(n, r, o, c, v, m, x, A, P) {
    return n = new Ec(n, r, o, A, P), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = ei(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: c, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, dp(m), n;
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
  function Up(n, r, o, c, v, m, x, A, P) {
    return n = Lp(o, c, !0, n, v, m, x, A, P), n.context = zp(null), o = n.current, c = dr(), v = ho(o), m = mn(c, v), m.callback = r ?? null, Xo(o, m, v), n.current.lanes = v, jo(n, v, c), ir(n, c), n;
  }
  function Xf(n, r, o, c) {
    var v = r.current, m = dr(), x = ho(v);
    return o = zp(o), r.context === null ? r.context = o : r.pendingContext = o, r = mn(m, x), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = Xo(v, r, x), n !== null && (Dn(n, v, x, m), vf(n, v, x)), x;
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
  Cc.prototype.render = Jf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(f(409));
    Xf(n, r, null, null);
  }, Cc.prototype.unmount = Jf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Fi(function() {
        Xf(null, n, null, null);
      }), r[hi] = null;
    }
  };
  function Cc(n) {
    this._internalRoot = n;
  }
  Cc.prototype.unstable_scheduleHydration = function(n) {
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
  function n0(n, r, o, c, v) {
    if (v) {
      if (typeof c == "function") {
        var m = c;
        c = function() {
          var Z = bc(x);
          m.call(Z);
        };
      }
      var x = Up(r, c, n, 0, null, !1, !1, "", pm);
      return n._reactRootContainer = x, n[hi] = x.current, Oi(n.nodeType === 8 ? n.parentNode : n), Fi(), x;
    }
    for (; v = n.lastChild; )
      n.removeChild(v);
    if (typeof c == "function") {
      var A = c;
      c = function() {
        var Z = bc(P);
        A.call(Z);
      };
    }
    var P = Lp(n, 0, !1, null, null, !1, !1, "", pm);
    return n._reactRootContainer = P, n[hi] = P.current, Oi(n.nodeType === 8 ? n.parentNode : n), Fi(function() {
      Xf(r, P, o, c);
    }), P;
  }
  function ed(n, r, o, c, v) {
    var m = o._reactRootContainer;
    if (m) {
      var x = m;
      if (typeof v == "function") {
        var A = v;
        v = function() {
          var P = bc(x);
          A.call(P);
        };
      }
      Xf(r, x, n, v);
    } else
      x = n0(o, r, n, v, c);
    return bc(x);
  }
  hu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Xi(r.pendingLanes);
          o !== 0 && (Os(r, o | 1), ir(r, hn()), !(Nt & 6) && (Xu = hn() + 500, Ni()));
        }
        break;
      case 13:
        Fi(function() {
          var c = co(n, 1);
          if (c !== null) {
            var v = dr();
            Dn(c, n, 1, v);
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
  }, As = function(n) {
    if (n.tag === 13) {
      var r = ho(n), o = co(n, r);
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
              var v = uf(c);
              if (!v)
                throw Error(f(90));
              Zt(c), Kn(c, v);
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
  }, Mo = Ap, bl = Fi;
  var r0 = { usingClientEntryPoint: !1, Events: [Di, Ru, uf, ui, Pa, Ap] }, wc = { findFiberByHostInstance: uo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, vm = { bundleType: wc.bundleType, version: wc.version, rendererPackageName: wc.rendererPackageName, rendererConfig: wc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Be.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ut(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: wc.findFiberByHostInstance || t0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var td = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!td.isDisabled && td.supportsFiber)
      try {
        zo = td.inject(vm), Zr = td;
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
    var o = !1, c = "", v = Pp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (v = r.onRecoverableError)), r = Lp(n, 1, !1, null, null, o, !1, c, v), n[hi] = r.current, Oi(n.nodeType === 8 ? n.parentNode : n), new Jf(r);
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
    var c = o != null && o.hydratedSources || null, v = !1, m = "", x = Pp;
    if (o != null && (o.unstable_strictMode === !0 && (v = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (x = o.onRecoverableError)), r = Up(r, null, n, 1, o ?? null, v, !1, m, x), n[hi] = r.current, Oi(n), c)
      for (n = 0; n < c.length; n++)
        o = c[n], v = o._getVersion, v = v(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, v] : r.mutableSourceEagerHydrationData.push(
          o,
          v
        );
    return new Cc(r);
  }, oi.render = function(n, r, o) {
    if (!Zf(r))
      throw Error(f(200));
    return ed(null, n, r, !1, o);
  }, oi.unmountComponentAtNode = function(n) {
    if (!Zf(n))
      throw Error(f(40));
    return n._reactRootContainer ? (Fi(function() {
      ed(null, null, n, !1, function() {
        n._reactRootContainer = null, n[hi] = null;
      });
    }), !0) : !1;
  }, oi.unstable_batchedUpdates = Ap, oi.unstable_renderSubtreeIntoContainer = function(n, r, o, c) {
    if (!Zf(o))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return ed(n, r, o, !1, c);
  }, oi.version = "18.2.0-next-9e3b772b8-20220608", oi;
}
var li = {}, F1;
function DN() {
  if (F1)
    return li;
  F1 = 1;
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
    var u = wt, f = _T(), p = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = !1;
    function b(e) {
      g = e;
    }
    function E(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        _("warn", e, a);
      }
    }
    function y(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        _("error", e, a);
      }
    }
    function _(e, t, a) {
      {
        var i = p.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var d = a.map(function(h) {
          return String(h);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var N = 0, k = 1, D = 2, M = 3, I = 4, B = 5, ee = 6, fe = 7, Le = 8, Ke = 9, ze = 10, Be = 11, ue = 12, Ue = 13, gt = 14, X = 15, Te = 16, De = 17, _e = 18, Ce = 19, Ae = 21, le = 22, re = 23, he = 24, pe = 25, O = !0, ae = !1, L = !1, j = !1, J = !1, be = !0, Se = !1, ke = !1, He = !0, Pe = !0, Ne = !0, ot = /* @__PURE__ */ new Set(), St = {}, ht = {};
    function Zt(e, t) {
      Re(e, t), Re(e + "Capture", t);
    }
    function Re(e, t) {
      St[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), St[e] = t;
      {
        var a = e.toLowerCase();
        ht[a] = e, e === "onDoubleClick" && (ht.ondblclick = e);
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
    var ba = 0, vr = 1, jr = 2, xn = 3, Ca = 4, wa = 5, xa = 6, Fe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", lt = Fe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", kt = new RegExp("^[" + Fe + "][" + lt + "]*$"), Gt = {}, Vt = {};
    function $n(e) {
      return Mn.call(Vt, e) ? !0 : Mn.call(Gt, e) ? !1 : kt.test(e) ? (Vt[e] = !0, !0) : (Gt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function _n(e, t, a) {
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
          case xn:
            return !t;
          case Ca:
            return t === !1;
          case wa:
            return isNaN(t);
          case xa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ur(e) {
      return dn.hasOwnProperty(e) ? dn[e] : null;
    }
    function Kt(e, t, a, i, l, d, h) {
      this.acceptsBooleans = t === jr || t === xn || t === Ca, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = h;
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
        vr,
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
        xn,
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
        xn,
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
        Ca,
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
        xa,
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
        wa,
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
        vr,
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
        vr,
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
        vr,
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
        vr,
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
      vr,
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
        vr,
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
    var Cl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Lo = !1;
    function si(e) {
      !Lo && Cl.test(e) && (Lo = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ci(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Ur(a, t), i.sanitizeURL && si("" + a);
        var d = i.attributeName, h = null;
        if (i.type === Ca) {
          if (e.hasAttribute(d)) {
            var S = e.getAttribute(d);
            return S === "" ? !0 : en(t, a, i, !1) ? S : S === "" + a ? a : S;
          }
        } else if (e.hasAttribute(d)) {
          if (en(t, a, i, !1))
            return e.getAttribute(d);
          if (i.type === xn)
            return a;
          h = e.getAttribute(d);
        }
        return en(t, a, i, !1) ? h === null ? a : h : h === "" + a ? a : h;
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
      if (!_n(t, l, i)) {
        if (en(t, a, l, i) && (a = null), i || l === null) {
          if ($n(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : (Ur(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var h = l.mustUseProperty;
        if (h) {
          var S = l.propertyName;
          if (a === null) {
            var C = l.type;
            e[S] = C === xn ? !1 : "";
          } else
            e[S] = a;
          return;
        }
        var T = l.attributeName, R = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var $ = l.type, F;
          $ === xn || $ === Ca && a === !0 ? F = "" : (Ur(a, T), F = "" + a, l.sanitizeURL && si(F.toString())), R ? e.setAttributeNS(R, T, F) : e.setAttribute(T, F);
        }
      }
    }
    var Kr = Symbol.for("react.element"), Xr = Symbol.for("react.portal"), Ta = Symbol.for("react.fragment"), Gi = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), Me = Symbol.for("react.context"), $e = Symbol.for("react.forward_ref"), At = Symbol.for("react.suspense"), zt = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), Jn = Symbol.for("react.scope"), pn = Symbol.for("react.debug_trace_mode"), vn = Symbol.for("react.offscreen"), Ar = Symbol.for("react.legacy_hidden"), xi = Symbol.for("react.cache"), hn = Symbol.for("react.tracing_marker"), Jr = Symbol.iterator, ws = "@@iterator";
    function Ti(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Jr && e[Jr] || e[ws];
      return typeof t == "function" ? t : null;
    }
    var Ot = Object.assign, wl = 0, Ki, zo, Zr, xs, Pr, Ts, _s;
    function Rs() {
    }
    Rs.__reactDisabledLog = !0;
    function xl() {
      {
        if (wl === 0) {
          Ki = console.log, zo = console.info, Zr = console.warn, xs = console.error, Pr = console.group, Ts = console.groupCollapsed, _s = console.groupEnd;
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
        wl++;
      }
    }
    function vu() {
      {
        if (wl--, wl === 0) {
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
              value: xs
            }),
            group: Ot({}, e, {
              value: Pr
            }),
            groupCollapsed: Ot({}, e, {
              value: Ts
            }),
            groupEnd: Ot({}, e, {
              value: _s
            })
          });
        }
        wl < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xi = p.ReactCurrentDispatcher, _i;
    function Ha(e, t, a) {
      {
        if (_i === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            _i = i && i[1] || "";
          }
        return `
` + _i + e;
      }
    }
    var Uo = !1, Ri;
    {
      var Tl = typeof WeakMap == "function" ? WeakMap : Map;
      Ri = new Tl();
    }
    function _l(e, t) {
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
      d = Xi.current, Xi.current = null, xl();
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
            } catch (K) {
              i = K;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (K) {
              i = K;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            i = K;
          }
          e();
        }
      } catch (K) {
        if (K && i && typeof K.stack == "string") {
          for (var S = K.stack.split(`
`), C = i.stack.split(`
`), T = S.length - 1, R = C.length - 1; T >= 1 && R >= 0 && S[T] !== C[R]; )
            R--;
          for (; T >= 1 && R >= 0; T--, R--)
            if (S[T] !== C[R]) {
              if (T !== 1 || R !== 1)
                do
                  if (T--, R--, R < 0 || S[T] !== C[R]) {
                    var $ = `
` + S[T].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && Ri.set(e, $), $;
                  }
                while (T >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Uo = !1, Xi.current = d, vu(), Error.prepareStackTrace = l;
      }
      var F = e ? e.displayName || e.name : "", G = F ? Ha(F) : "";
      return typeof e == "function" && Ri.set(e, G), G;
    }
    function jo(e, t, a) {
      return _l(e, !0);
    }
    function ks(e, t, a) {
      return _l(e, !1);
    }
    function Os(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Lt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _l(e, Os(e));
      if (typeof e == "string")
        return Ha(e);
      switch (e) {
        case At:
          return Ha("Suspense");
        case zt:
          return Ha("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $e:
            return ks(e.render);
          case _t:
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
        case Te:
          return Ha("Lazy");
        case Ue:
          return Ha("Suspense");
        case Ce:
          return Ha("SuspenseList");
        case N:
        case D:
        case X:
          return ks(e.type);
        case Be:
          return ks(e.type.render);
        case k:
          return jo(e.type);
        default:
          return "";
      }
    }
    function hu(e) {
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
    function As(e) {
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
        case Ta:
          return "Fragment";
        case Xr:
          return "Portal";
        case U:
          return "Profiler";
        case Gi:
          return "StrictMode";
        case At:
          return "Suspense";
        case zt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Me:
            var t = e;
            return As(t) + ".Consumer";
          case me:
            var a = e;
            return As(a._context) + ".Provider";
          case $e:
            return Po(e, e.render, "ForwardRef");
          case _t:
            var i = e.displayName || null;
            return i !== null ? i : Ft(e.type) || "Memo";
          case ut: {
            var l = e, d = l._payload, h = l._init;
            try {
              return Ft(h(d));
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
        case he:
          return "Cache";
        case Ke:
          var i = a;
          return Rl(i) + ".Consumer";
        case ze:
          var l = a;
          return Rl(l._context) + ".Provider";
        case _e:
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
        case ee:
          return "Text";
        case Te:
          return Ft(a);
        case Le:
          return a === Gi ? "StrictMode" : "Mode";
        case le:
          return "Offscreen";
        case ue:
          return "Profiler";
        case Ae:
          return "Scope";
        case Ue:
          return "Suspense";
        case Ce:
          return "SuspenseList";
        case pe:
          return "TracingMarker";
        case k:
        case N:
        case De:
        case D:
        case gt:
        case X:
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
      return Rn === null ? "" : hu(Rn);
    }
    function Sn() {
      fi.getCurrentStack = null, Rn = null, ea = !1;
    }
    function kn(e) {
      fi.getCurrentStack = e === null ? null : Fo, Rn = e, ea = !1;
    }
    function Ns() {
      return Rn;
    }
    function hr(e) {
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
        var h = {
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
        return h;
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
    function w(e, t) {
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
    function Q(e, t) {
      var a = e, i = t.checked;
      i != null && Qi(a, "checked", i, !1);
    }
    function ne(e, t) {
      var a = e;
      {
        var i = bu(t);
        !a._wrapperState.controlled && i && !pi && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), pi = !0), a._wrapperState.controlled && !i && !Ms && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ms = !0);
      }
      Q(e, t);
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
    function we(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, d = l === "submit" || l === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var h = ta(i._wrapperState.initialValue);
        a || h !== i.value && (i.value = h), i.defaultValue = h;
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
          var h = l[d];
          if (!(h === e || h.form !== e.form)) {
            var S = Am(h);
            if (!S)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Su(h), ne(h, S);
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
    function Cu() {
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
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Cu()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Cu());
          }
        }
      }
    }
    function to(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var d = a, h = {}, S = 0; S < d.length; S++)
          h["$" + d[S]] = !0;
        for (var C = 0; C < l.length; C++) {
          var T = h.hasOwnProperty("$" + l[C].value);
          l[C].selected !== T && (l[C].selected = T), T && i && (l[C].defaultSelected = !0);
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
    function xg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? to(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? to(a, !!t.multiple, t.defaultValue, !0) : to(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function nh(e, t) {
      var a = e, i = t.value;
      i != null && to(a, !!t.multiple, i, !1);
    }
    var rh = !1;
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
    function ah(e, t) {
      var a = e;
      kl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !rh && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", $a() || "A component"), rh = !0);
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
    function ih(e, t) {
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
    function Tg(e, t) {
      ih(e, t);
    }
    var no = "http://www.w3.org/1999/xhtml", _g = "http://www.w3.org/1998/Math/MathML", Jc = "http://www.w3.org/2000/svg";
    function $d(e) {
      switch (e) {
        case "svg":
          return Jc;
        case "math":
          return _g;
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
    }, Zc, oh = Rg(function(e, t) {
      if (e.namespaceURI === Jc && !("innerHTML" in e)) {
        Zc = Zc || document.createElement("div"), Zc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Zc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), na = 1, ro = 3, zn = 8, _a = 9, Vd = 11, Ps = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ro) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, lh = {
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
    }, wu = {
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
    function uh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var sh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(wu).forEach(function(e) {
      sh.forEach(function(t) {
        wu[uh(t, e)] = wu[e];
      });
    });
    function Bo(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(wu.hasOwnProperty(e) && wu[e]) ? t + "px" : (Sa(t, e), ("" + t).trim());
    }
    var kg = /([A-Z])/g, Og = /^ms-/;
    function Dg(e) {
      return e.replace(kg, "-$1").toLowerCase().replace(Og, "-ms-");
    }
    var Id = function() {
    };
    {
      var ch = /^(?:webkit|moz|o)[A-Z]/, Fs = /^-ms-/, Hs = /-(.)/g, fh = /;\s*$/, ao = {}, Wd = {}, Yd = !1, ef = !1, qd = function(e) {
        return e.replace(Hs, function(t, a) {
          return a.toUpperCase();
        });
      }, dh = function(e) {
        ao.hasOwnProperty(e) && ao[e] || (ao[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          qd(e.replace(Fs, "ms-"))
        ));
      }, ph = function(e) {
        ao.hasOwnProperty(e) && ao[e] || (ao[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, vh = function(e, t) {
        Wd.hasOwnProperty(t) && Wd[t] || (Wd[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(fh, "")));
      }, Ag = function(e, t) {
        Yd || (Yd = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ng = function(e, t) {
        ef || (ef = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Id = function(e, t) {
        e.indexOf("-") > -1 ? dh(e) : ch.test(e) ? ph(e) : fh.test(t) && vh(e, t), typeof t == "number" && (isNaN(t) ? Ag(e, t) : isFinite(t) || Ng(e, t));
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
    function hh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Mg(i, t[i]);
          var d = Bo(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, d) : a[i] = d;
        }
    }
    function vi(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function xu(e) {
      var t = {};
      for (var a in e)
        for (var i = lh[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function mh(e, t) {
      {
        if (!t)
          return;
        var a = xu(e), i = xu(t), l = {};
        for (var d in a) {
          var h = a[d], S = i[d];
          if (S && h !== S) {
            var C = h + "," + S;
            if (l[C])
              continue;
            l[C] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", vi(e[h]) ? "Removing" : "Updating", h, S);
          }
        }
      }
    }
    var yh = {
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
    }, gh = Ot({
      menuitem: !0
    }, yh), Sh = "__html";
    function $s(e, t) {
      if (t) {
        if (gh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sh in t.dangerouslySetInnerHTML))
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
    }, Al = {
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
    function Eh(e, t) {
      {
        if (Mn.call(Vo, t) && Vo[t])
          return !0;
        if (Qd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Al.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Vo[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Vo[t] = !0, !0;
        }
        if (Bs.test(t)) {
          var l = t.toLowerCase(), d = Al.hasOwnProperty(l) ? l : null;
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
          var l = Eh(e, i);
          l || a.push(i);
        }
        var d = a.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Tu(e, t) {
      Dl(e, t) || nf(e, t);
    }
    var rf = !1;
    function bh(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !rf && (rf = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Vs = function() {
    };
    {
      var Nr = {}, Gd = /^on./, Ch = /^on[^A-Z]/, wh = new RegExp("^(aria)-[" + lt + "]*$"), xh = new RegExp("^(aria)[A-Z][" + lt + "]*$");
      Vs = function(e, t, a, i) {
        if (Mn.call(Nr, t) && Nr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Nr[t] = !0, !0;
        if (i != null) {
          var d = i.registrationNameDependencies, h = i.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var S = h.hasOwnProperty(l) ? h[l] : null;
          if (S != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, S), Nr[t] = !0, !0;
          if (Gd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Nr[t] = !0, !0;
        } else if (Gd.test(t))
          return Ch.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Nr[t] = !0, !0;
        if (wh.test(t) || xh.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Nr[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Nr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Nr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Nr[t] = !0, !0;
        var C = ur(t), T = C !== null && C.type === ba;
        if (tf.hasOwnProperty(l)) {
          var R = tf[l];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), Nr[t] = !0, !0;
        } else if (!T && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Nr[t] = !0, !0;
        return typeof a == "boolean" && Dr(t, a, C, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Nr[t] = !0, !0) : T ? !0 : Dr(t, a, C, !1) ? (Nr[t] = !0, !1) : ((a === "false" || a === "true") && C !== null && C.type === xn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Nr[t] = !0), !0);
      };
    }
    var Th = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var d = Vs(e, l, t[l], a);
          d || i.push(l);
        }
        var h = i.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e);
      }
    };
    function Io(e, t, a) {
      Dl(e, t) || Th(e, t, a);
    }
    var af = 1, Is = 2, Ws = 4, zg = af | Is | Ws, io = null;
    function Ug(e) {
      io !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), io = e;
    }
    function _h() {
      io === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), io = null;
    }
    function Rh(e) {
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
          var i = Am(a);
          Ys(t.stateNode, t.type, i);
        }
      }
    }
    function Xd(e) {
      Ys = e;
    }
    function _u(e) {
      oo ? Oi ? Oi.push(e) : Oi = [e] : oo = e;
    }
    function of() {
      return oo !== null || Oi !== null;
    }
    function Nl() {
      if (oo) {
        var e = oo, t = Oi;
        if (oo = null, Oi = null, Kd(e), t)
          for (var a = 0; a < t.length; a++)
            Kd(t[a]);
      }
    }
    var Jd = function(e, t) {
      return e(t);
    }, kh = function() {
    }, Zd = !1;
    function Oh() {
      var e = of();
      e && (kh(), Nl());
    }
    function qs(e, t, a) {
      if (Zd)
        return e(t, a);
      Zd = !0;
      try {
        return Jd(e, t, a);
      } finally {
        Zd = !1, Oh();
      }
    }
    function lf(e, t, a) {
      Jd = e, kh = a;
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
      var i = Am(a);
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
    function np(e, t, a, i, l, d, h, S, C) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch (R) {
        this.onError(R);
      }
    }
    var Dh = np;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var rp = document.createElement("react");
      Dh = function(t, a, i, l, d, h, S, C, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), $ = !1, F = !0, G = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function ie() {
          rp.removeEventListener(oe, ft, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = G);
        }
        var qe = Array.prototype.slice.call(arguments, 3);
        function ft() {
          $ = !0, ie(), a.apply(i, qe), F = !1;
        }
        var it, jt = !1, Mt = !1;
        function W(Y) {
          if (it = Y.error, jt = !0, it === null && Y.colno === 0 && Y.lineno === 0 && (Mt = !0), Y.defaultPrevented && it != null && typeof it == "object")
            try {
              it._suppressLogging = !0;
            } catch {
            }
        }
        var oe = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", W), rp.addEventListener(oe, ft, !1), R.initEvent(oe, !1, !1), rp.dispatchEvent(R), K && Object.defineProperty(window, "event", K), $ && F && (jt ? Mt && (it = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : it = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(it)), window.removeEventListener("error", W), !$)
          return ie(), np.apply(this, arguments);
      };
    }
    var ap = Dh, Ra = !1, Ks = null, lo = !1, Va = null, Xs = {
      onError: function(e) {
        Ra = !0, Ks = e;
      }
    };
    function hi(e, t, a, i, l, d, h, S, C) {
      Ra = !1, Ks = null, ap.apply(Xs, arguments);
    }
    function ip(e, t, a, i, l, d, h, S, C) {
      if (hi.apply(this, arguments), Ra) {
        var T = uo();
        lo || (lo = !0, Va = T);
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
    ), Ai = (
      /*                    */
      4096
    ), Wo = (
      /*                   */
      8192
    ), Ll = (
      /*             */
      16384
    ), Ah = ra | nt | sr | ka | Zn | Ll, so = (
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
    ), Nh = (
      /*                       */
      1048576
    ), Ni = (
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
    ), ia = cn | nt | It | Ia | ka | Ai | Wo, yi = nt | sr | ka | Wo, oa = ra | It, yr = Wa | qo | Ni, Ul = p.ReactCurrentOwner;
    function Qo(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (cn | Ai)) !== st && (a = t.return), i = t.return;
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
        var h = d.alternate;
        if (h === null) {
          var S = d.return;
          if (S !== null) {
            i = l = S;
            continue;
          }
          break;
        }
        if (d.child === h.child) {
          for (var C = d.child; C; ) {
            if (C === i)
              return bn(d), e;
            if (C === l)
              return bn(d), t;
            C = C.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = d, l = h;
        else {
          for (var T = !1, R = d.child; R; ) {
            if (R === i) {
              T = !0, i = d, l = h;
              break;
            }
            if (R === l) {
              T = !0, l = d, i = h;
              break;
            }
            R = R.sibling;
          }
          if (!T) {
            for (R = h.child; R; ) {
              if (R === i) {
                T = !0, i = h, l = d;
                break;
              }
              if (R === l) {
                T = !0, l = h, i = d;
                break;
              }
              R = R.sibling;
            }
            if (!T)
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
      if (e.tag === B || e.tag === ee)
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
      if (e.tag === B || e.tag === ee)
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
    var sp = f.unstable_scheduleCallback, pf = f.unstable_cancelCallback, Mh = f.unstable_shouldYield, ku = f.unstable_requestPaint, er = f.unstable_now, Fg = f.unstable_getCurrentPriorityLevel, la = f.unstable_ImmediatePriority, Ou = f.unstable_UserBlockingPriority, Mi = f.unstable_NormalPriority, Du = f.unstable_LowPriority, Js = f.unstable_IdlePriority, cp = f.unstable_yieldValue, fp = f.unstable_setDisableYieldValue, Go = null, Bn = null, Oe = null, Mr = !1, Aa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Lh(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        He && (e = Ot({}, e, {
          getLaneLabelMap: vf,
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
    function zh(e) {
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
    function vf() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Vn; a++) {
          var i = Vh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Uh(e) {
      Oe !== null && typeof Oe.markCommitStarted == "function" && Oe.markCommitStarted(e);
    }
    function Zs() {
      Oe !== null && typeof Oe.markCommitStopped == "function" && Oe.markCommitStopped();
    }
    function Au(e) {
      Oe !== null && typeof Oe.markComponentRenderStarted == "function" && Oe.markComponentRenderStarted(e);
    }
    function jl() {
      Oe !== null && typeof Oe.markComponentRenderStopped == "function" && Oe.markComponentRenderStopped();
    }
    function pp(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStarted == "function" && Oe.markComponentPassiveEffectMountStarted(e);
    }
    function hf() {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStopped == "function" && Oe.markComponentPassiveEffectMountStopped();
    }
    function jh(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStarted == "function" && Oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ph() {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStopped == "function" && Oe.markComponentPassiveEffectUnmountStopped();
    }
    function Fh(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStarted == "function" && Oe.markComponentLayoutEffectMountStarted(e);
    }
    function vp() {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStopped == "function" && Oe.markComponentLayoutEffectMountStopped();
    }
    function Nu(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStarted == "function" && Oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function ec() {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStopped == "function" && Oe.markComponentLayoutEffectUnmountStopped();
    }
    function Hh(e, t, a) {
      Oe !== null && typeof Oe.markComponentErrored == "function" && Oe.markComponentErrored(e, t, a);
    }
    function $h(e, t, a) {
      Oe !== null && typeof Oe.markComponentSuspended == "function" && Oe.markComponentSuspended(e, t, a);
    }
    function Mu(e) {
      Oe !== null && typeof Oe.markLayoutEffectsStarted == "function" && Oe.markLayoutEffectsStarted(e);
    }
    function Bh() {
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
    function hp(e) {
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
    ), Cf = (
      /*                       */
      65536
    ), wf = (
      /*                       */
      131072
    ), xf = (
      /*                       */
      262144
    ), $l = (
      /*                       */
      524288
    ), Tf = (
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
    ), _f = (
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
    ), Na = (
      /*                   */
      1073741824
    );
    function Vh(e) {
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
        if (e & Na)
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
        case Cf:
        case wf:
        case xf:
        case $l:
        case Tf:
        case Uu:
          return e & Zo;
        case Vl:
        case oc:
        case _f:
        case Rf:
        case kf:
          return e & Bl;
        case Il:
          return Il;
        case ju:
          return ju;
        case el:
          return el;
        case Na:
          return Na;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function uc(e, t) {
      var a = e.pendingLanes;
      if (a === se)
        return se;
      var i = se, l = e.suspendedLanes, d = e.pingedLanes, h = a & gp;
      if (h !== se) {
        var S = h & ~l;
        if (S !== se)
          i = Pu(S);
        else {
          var C = h & d;
          C !== se && (i = Pu(C));
        }
      } else {
        var T = a & ~l;
        T !== se ? i = Pu(T) : d !== se && (i = Pu(d));
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
        for (var G = e.entanglements, K = i & F; K > 0; ) {
          var ie = nl(K), qe = 1 << ie;
          i |= G[ie], K &= ~qe;
        }
      return i;
    }
    function Df(e, t) {
      for (var a = e.eventTimes, i = yn; t > 0; ) {
        var l = nl(t), d = 1 << l, h = a[l];
        h > i && (i = h), t &= ~d;
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
        case Cf:
        case wf:
        case xf:
        case $l:
        case Tf:
        case Uu:
          return t + 5e3;
        case Vl:
        case oc:
        case _f:
        case Rf:
        case kf:
          return yn;
        case Il:
        case ju:
        case el:
        case Na:
          return yn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), yn;
      }
    }
    function $g(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, d = e.expirationTimes, h = a; h > 0; ) {
        var S = nl(h), C = 1 << S, T = d[S];
        T === yn ? ((C & i) === se || (C & l) !== se) && (d[S] = Hg(C, t)) : T <= t && (e.expiredLanes |= C), h &= ~C;
      }
    }
    function Bg(e) {
      return Pu(e.pendingLanes);
    }
    function tl(e) {
      var t = e.pendingLanes & ~Na;
      return t !== se ? t : t & Na ? Na : se;
    }
    function Sp(e) {
      return (e & dt) !== se;
    }
    function sc(e) {
      return (e & gp) !== se;
    }
    function Ih(e) {
      return (e & Bl) === e;
    }
    function Wh(e) {
      var t = dt | fo | Ga;
      return (e & t) === se;
    }
    function Yh(e) {
      return (e & Zo) === e;
    }
    function cc(e, t) {
      var a = zi | fo | jn | Ga;
      return (t & a) !== se;
    }
    function qh(e, t) {
      return (t & e.expiredLanes) !== se;
    }
    function Ep(e) {
      return (e & Zo) !== se;
    }
    function Qh() {
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
    function Af(e) {
      return nl(e);
    }
    function fa(e, t) {
      return (e & t) !== se;
    }
    function Wl(e, t) {
      return (e & t) === t;
    }
    function Tt(e, t) {
      return e | t;
    }
    function fc(e, t) {
      return e & ~t;
    }
    function Nf(e, t) {
      return e & t;
    }
    function Vg(e) {
      return e;
    }
    function Gh(e, t) {
      return e !== In && e < t ? e : t;
    }
    function dc(e) {
      for (var t = [], a = 0; a < Vn; a++)
        t.push(e);
      return t;
    }
    function Yl(e, t, a) {
      e.pendingLanes |= t, t !== el && (e.suspendedLanes = se, e.pingedLanes = se);
      var i = e.eventTimes, l = Af(t);
      i[l] = a;
    }
    function Kh(e, t) {
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
      for (var i = e.entanglements, l = e.eventTimes, d = e.expirationTimes, h = a; h > 0; ) {
        var S = nl(h), C = 1 << S;
        i[S] = se, l[S] = yn, d[S] = yn, h &= ~C;
      }
    }
    function bp(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var d = nl(l), h = 1 << d;
        // Is this one of the newly entangled lanes?
        h & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[d] & t && (i[d] |= t), l &= ~h;
      }
    }
    function Xh(e, t) {
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
        case Cf:
        case wf:
        case xf:
        case $l:
        case Tf:
        case Uu:
        case Vl:
        case oc:
        case _f:
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
      if (Aa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = Af(a), d = 1 << l, h = i[l];
          h.add(t), a &= ~d;
        }
    }
    function Cp(e, t) {
      if (Aa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = Af(t), d = 1 << l, h = a[l];
          h.size > 0 && (h.forEach(function(S) {
            var C = S.alternate;
            (C === null || !i.has(C)) && i.add(S);
          }), h.clear()), t &= ~d;
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
    function wp(e) {
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
    function Jh(e) {
      Ff = e;
    }
    var xp;
    function Zh(e) {
      xp = e;
    }
    var vc = !1, Wu = [], Tn = null, cr = null, Hr = null, Yu = /* @__PURE__ */ new Map(), qu = /* @__PURE__ */ new Map(), fr = [], em = [
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
    function Tp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Tn = null;
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
        var h = qg(t, a, i, l, d);
        if (t !== null) {
          var S = rs(t);
          S !== null && jf(S);
        }
        return h;
      }
      e.eventSystemFlags |= i;
      var C = e.targetContainers;
      return l !== null && C.indexOf(l) === -1 && C.push(l), e;
    }
    function tm(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var d = l;
          return Tn = Qu(Tn, e, t, a, i, d), !0;
        }
        case "dragenter": {
          var h = l;
          return cr = Qu(cr, e, t, a, i, h), !0;
        }
        case "mouseover": {
          var S = l;
          return Hr = Qu(Hr, e, t, a, i, S), !0;
        }
        case "pointerover": {
          var C = l, T = C.pointerId;
          return Yu.set(T, Qu(Yu.get(T) || null, e, t, a, i, C)), !0;
        }
        case "gotpointercapture": {
          var R = l, $ = R.pointerId;
          return qu.set($, Qu(qu.get($) || null, e, t, a, i, R)), !0;
        }
      }
      return !1;
    }
    function _p(e) {
      var t = _c(e.target);
      if (t !== null) {
        var a = Qo(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ue) {
            var l = cf(a);
            if (l !== null) {
              e.blockedOn = l, xp(e.priority, function() {
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
      fr.splice(i, 0, a), i === 0 && _p(a);
    }
    function ql(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = zr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, d = new l.constructor(l.type, l);
          Ug(d), l.target.dispatchEvent(d), _h();
        } else {
          var h = rs(i);
          return h !== null && jf(h), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Hf(e, t, a) {
      ql(e) && a.delete(t);
    }
    function Xa() {
      vc = !1, Tn !== null && ql(Tn) && (Tn = null), cr !== null && ql(cr) && (cr = null), Hr !== null && ql(Hr) && (Hr = null), Yu.forEach(Hf), qu.forEach(Hf);
    }
    function Nt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, vc || (vc = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Xa)));
    }
    function Fn(e) {
      if (Wu.length > 0) {
        Nt(Wu[0], e);
        for (var t = 1; t < Wu.length; t++) {
          var a = Wu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Tn !== null && Nt(Tn, e), cr !== null && Nt(cr, e), Hr !== null && Nt(Hr, e);
      var i = function(S) {
        return Nt(S, e);
      };
      Yu.forEach(i), qu.forEach(i);
      for (var l = 0; l < fr.length; l++) {
        var d = fr[l];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; fr.length > 0; ) {
        var h = fr[0];
        if (h.blockedOn !== null)
          break;
        _p(h), h.blockedOn === null && fr.shift();
      }
    }
    var Cn = p.ReactCurrentBatchConfig, rr = !0;
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
          l = hc;
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
    function hc(e, t, a, i) {
      var l = Ka(), d = Cn.transition;
      Cn.transition = null;
      try {
        Pn(Yn), Ku(e, t, a, i);
      } finally {
        Pn(l), Cn.transition = d;
      }
    }
    function Ql(e, t, a, i) {
      var l = Ka(), d = Cn.transition;
      Cn.transition = null;
      try {
        Pn(po), Ku(e, t, a, i);
      } finally {
        Pn(l), Cn.transition = d;
      }
    }
    function Ku(e, t, a, i) {
      rr && Rp(e, t, a, i);
    }
    function Rp(e, t, a, i) {
      var l = zr(e, t, a, i);
      if (l === null) {
        f0(e, t, i, rl, a), Tp(e, i);
        return;
      }
      if (tm(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Tp(e, i), t & Ws && ji(e)) {
        for (; l !== null; ) {
          var d = rs(l);
          d !== null && wp(d);
          var h = zr(e, t, a, i);
          if (h === null && f0(e, t, i, rl, a), h === l)
            break;
          l = h;
        }
        l !== null && i.stopPropagation();
        return;
      }
      f0(e, t, i, null, a);
    }
    var rl = null;
    function zr(e, t, a, i) {
      rl = null;
      var l = sn(i), d = _c(l);
      if (d !== null) {
        var h = Qo(d);
        if (h === null)
          d = null;
        else {
          var S = h.tag;
          if (S === Ue) {
            var C = cf(h);
            if (C !== null)
              return C;
            d = null;
          } else if (S === M) {
            var T = h.stateNode;
            if (Uf(T))
              return ff(h);
            d = null;
          } else
            h !== d && (d = null);
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
    function vo(e, t, a) {
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
      var h = a - e;
      for (i = 1; i <= h && t[a - i] === l[d - i]; i++)
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
    function ho() {
      return !1;
    }
    function Dn(e) {
      function t(a, i, l, d, h) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = d, this.target = h, this.currentTarget = null;
        for (var S in e)
          if (e.hasOwnProperty(S)) {
            var C = e[S];
            C ? this[S] = C(d) : this[S] = d[S];
          }
        var T = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return T ? this.isDefaultPrevented = dr : this.isDefaultPrevented = ho, this.isPropagationStopped = ho, this;
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
    function Ap(e) {
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
      getModifierState: Np,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ap(e), Dp);
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
    function Np(e) {
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
      getModifierState: Np,
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
      getModifierState: Np
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
    function Cc(e) {
      return e.locale === "ko";
    }
    var ol = !1;
    function Zf(e, t, a, i, l) {
      var d, h;
      if (Sc ? d = jp(t) : ol ? Pp(t, i) && (d = "onCompositionEnd") : t0(t, i) && (d = "onCompositionStart"), !d)
        return null;
      fm && !Cc(i) && (!ol && d === "onCompositionStart" ? ol = Vf(l) : d === "onCompositionEnd" && ol && (h = If()));
      var S = gm(a, d);
      if (S.length > 0) {
        var C = new al(d, t, null, i, l);
        if (e.push({
          event: C,
          listeners: S
        }), h)
          C.data = h;
        else {
          var T = Jf(i);
          T !== null && (C.data = T);
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
          return fm && !Cc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function ed(e, t, a, i, l) {
      var d;
      if (Lp ? d = pm(t, i) : d = n0(t, i), !d)
        return null;
      var h = gm(a, "onBeforeInput");
      if (h.length > 0) {
        var S = new Xg("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: S,
          listeners: h
        }), S.data = d;
      }
    }
    function r0(e, t, a, i, l, d, h) {
      Zf(e, t, a, i, l), ed(e, t, a, i, l);
    }
    var wc = {
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
    function vm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!wc[e.type] : t === "textarea";
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
      _u(i);
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
    function v(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      r(t, c, e, sn(e)), qs(x, t);
    }
    function x(e) {
      sC(e, 0);
    }
    function A(e) {
      var t = ld(e);
      if (Su(t))
        return e;
    }
    function P(e, t) {
      if (e === "change")
        return t;
    }
    var Z = !1;
    $t && (Z = td("input") && (!document.documentMode || document.documentMode > 9));
    function ye(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", ve);
    }
    function ge() {
      o && (o.detachEvent("onpropertychange", ve), o = null, c = null);
    }
    function ve(e) {
      e.propertyName === "value" && A(c) && m(e);
    }
    function Ie(e, t, a) {
      e === "focusin" ? (ge(), ye(t, a)) : e === "focusout" && ge();
    }
    function Xe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return A(c);
    }
    function tt(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function qn(e, t) {
      if (e === "click")
        return A(t);
    }
    function V(e, t) {
      if (e === "input" || e === "change")
        return A(t);
    }
    function H(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || mt(e, "number", e.value);
    }
    function q(e, t, a, i, l, d, h) {
      var S = a ? ld(a) : window, C, T;
      if (v(S) ? C = P : vm(S) ? Z ? C = V : (C = Xe, T = Ie) : tt(S) && (C = qn), C) {
        var R = C(t, a);
        if (R) {
          r(e, R, i, l);
          return;
        }
      }
      T && T(t, S, a), t === "focusout" && H(S);
    }
    function xe() {
      Re("onMouseEnter", ["mouseout", "mouseover"]), Re("onMouseLeave", ["mouseout", "mouseover"]), Re("onPointerEnter", ["pointerout", "pointerover"]), Re("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function rt(e, t, a, i, l, d, h) {
      var S = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout";
      if (S && !Rh(i)) {
        var T = i.relatedTarget || i.fromElement;
        if (T && (_c(T) || Jp(T)))
          return;
      }
      if (!(!C && !S)) {
        var R;
        if (l.window === l)
          R = l;
        else {
          var $ = l.ownerDocument;
          $ ? R = $.defaultView || $.parentWindow : R = window;
        }
        var F, G;
        if (C) {
          var K = i.relatedTarget || i.toElement;
          if (F = a, G = K ? _c(K) : null, G !== null) {
            var ie = Qo(G);
            (G !== ie || G.tag !== B && G.tag !== ee) && (G = null);
          }
        } else
          F = null, G = a;
        if (F !== G) {
          var qe = Yf, ft = "onMouseLeave", it = "onMouseEnter", jt = "mouse";
          (t === "pointerout" || t === "pointerover") && (qe = cm, ft = "onPointerLeave", it = "onPointerEnter", jt = "pointer");
          var Mt = F == null ? R : ld(F), W = G == null ? R : ld(G), oe = new qe(ft, jt + "leave", F, i, l);
          oe.target = Mt, oe.relatedTarget = W;
          var Y = null, Ee = _c(l);
          if (Ee === a) {
            var Qe = new qe(it, jt + "enter", G, i, l);
            Qe.target = W, Qe.relatedTarget = Mt, Y = Qe;
          }
          K_(e, oe, Y, F, G);
        }
      }
    }
    function pt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Je = typeof Object.is == "function" ? Object.is : pt;
    function vt(e, t) {
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
      var l = i.anchorNode, d = i.anchorOffset, h = i.focusNode, S = i.focusOffset;
      try {
        l.nodeType, h.nodeType;
      } catch {
        return null;
      }
      return D_(e, l, d, h, S);
    }
    function D_(e, t, a, i, l) {
      var d = 0, h = -1, S = -1, C = 0, T = 0, R = e, $ = null;
      e:
        for (; ; ) {
          for (var F = null; R === t && (a === 0 || R.nodeType === ro) && (h = d + a), R === i && (l === 0 || R.nodeType === ro) && (S = d + l), R.nodeType === ro && (d += R.nodeValue.length), (F = R.firstChild) !== null; )
            $ = R, R = F;
          for (; ; ) {
            if (R === e)
              break e;
            if ($ === t && ++C === a && (h = d), $ === i && ++T === l && (S = d), (F = R.nextSibling) !== null)
              break;
            R = $, $ = R.parentNode;
          }
          R = F;
        }
      return h === -1 || S === -1 ? null : {
        start: h,
        end: S
      };
    }
    function A_(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), d = e.textContent.length, h = Math.min(t.start, d), S = t.end === void 0 ? h : Math.min(t.end, d);
        if (!l.extend && h > S) {
          var C = S;
          S = h, h = C;
        }
        var T = mo(e, h), R = mo(e, S);
        if (T && R) {
          if (l.rangeCount === 1 && l.anchorNode === T.node && l.anchorOffset === T.offset && l.focusNode === R.node && l.focusOffset === R.offset)
            return;
          var $ = a.createRange();
          $.setStart(T.node, T.offset), l.removeAllRanges(), h > S ? (l.addRange($), l.extend(R.node, R.offset)) : ($.setEnd(R.node, R.offset), l.addRange($));
        }
      }
    }
    function Xb(e) {
      return e && e.nodeType === ro;
    }
    function Jb(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Xb(e) ? !1 : Xb(t) ? Jb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function N_(e) {
      return e && e.ownerDocument && Jb(e.ownerDocument.documentElement, e);
    }
    function M_(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function Zb() {
      for (var e = window, t = ki(); t instanceof e.HTMLIFrameElement; ) {
        if (M_(t))
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
    function L_() {
      var e = Zb();
      return {
        focusedElem: e,
        selectionRange: i0(e) ? U_(e) : null
      };
    }
    function z_(e) {
      var t = Zb(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && N_(a)) {
        i !== null && i0(a) && j_(a, i);
        for (var l = [], d = a; d = d.parentNode; )
          d.nodeType === na && l.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var h = 0; h < l.length; h++) {
          var S = l[h];
          S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
        }
      }
    }
    function U_(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = a0(e), t || {
        start: 0,
        end: 0
      };
    }
    function j_(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : A_(e, t);
    }
    var P_ = $t && "documentMode" in document && document.documentMode <= 11;
    function F_() {
      Zt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var nd = null, o0 = null, Fp = null, l0 = !1;
    function H_(e) {
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
    function $_(e) {
      return e.window === e ? e.document : e.nodeType === _a ? e : e.ownerDocument;
    }
    function eC(e, t, a) {
      var i = $_(a);
      if (!(l0 || nd == null || nd !== ki(i))) {
        var l = H_(nd);
        if (!Fp || !vt(Fp, l)) {
          Fp = l;
          var d = gm(o0, "onSelect");
          if (d.length > 0) {
            var h = new Wf("onSelect", "select", null, t, a);
            e.push({
              event: h,
              listeners: d
            }), h.target = nd;
          }
        }
      }
    }
    function B_(e, t, a, i, l, d, h) {
      var S = a ? ld(a) : window;
      switch (t) {
        case "focusin":
          (vm(S) || S.contentEditable === "true") && (nd = S, o0 = a, Fp = null);
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
          l0 = !1, eC(e, i, l);
          break;
        case "selectionchange":
          if (P_)
            break;
        case "keydown":
        case "keyup":
          eC(e, i, l);
      }
    }
    function hm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var rd = {
      animationend: hm("Animation", "AnimationEnd"),
      animationiteration: hm("Animation", "AnimationIteration"),
      animationstart: hm("Animation", "AnimationStart"),
      transitionend: hm("Transition", "TransitionEnd")
    }, u0 = {}, tC = {};
    $t && (tC = document.createElement("div").style, "AnimationEvent" in window || (delete rd.animationend.animation, delete rd.animationiteration.animation, delete rd.animationstart.animation), "TransitionEvent" in window || delete rd.transitionend.transition);
    function mm(e) {
      if (u0[e])
        return u0[e];
      if (!rd[e])
        return e;
      var t = rd[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in tC)
          return u0[e] = t[a];
      return e;
    }
    var nC = mm("animationend"), rC = mm("animationiteration"), aC = mm("animationstart"), iC = mm("transitionend"), oC = /* @__PURE__ */ new Map(), lC = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ts(e, t) {
      oC.set(e, t), Zt(t, [e]);
    }
    function V_() {
      for (var e = 0; e < lC.length; e++) {
        var t = lC[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ts(a, "on" + i);
      }
      ts(nC, "onAnimationEnd"), ts(rC, "onAnimationIteration"), ts(aC, "onAnimationStart"), ts("dblclick", "onDoubleClick"), ts("focusin", "onFocus"), ts("focusout", "onBlur"), ts(iC, "onTransitionEnd");
    }
    function I_(e, t, a, i, l, d, h) {
      var S = oC.get(t);
      if (S !== void 0) {
        var C = Wf, T = t;
        switch (t) {
          case "keypress":
            if (Gl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            C = um;
            break;
          case "focusin":
            T = "focus", C = gc;
            break;
          case "focusout":
            T = "blur", C = gc;
            break;
          case "beforeblur":
          case "afterblur":
            C = gc;
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
            C = Yf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = nm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = Mp;
            break;
          case nC:
          case rC:
          case aC:
            C = Gg;
            break;
          case iC:
            C = il;
            break;
          case "scroll":
            C = Op;
            break;
          case "wheel":
            C = Jl;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = am;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = cm;
            break;
        }
        var R = (d & Ws) !== 0;
        {
          var $ = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", F = Q_(a, S, i.type, R, $);
          if (F.length > 0) {
            var G = new C(S, T, null, i, l);
            e.push({
              event: G,
              listeners: F
            });
          }
        }
      }
    }
    V_(), xe(), n(), F_(), Xf();
    function W_(e, t, a, i, l, d, h) {
      I_(e, t, a, i, l, d);
      var S = (d & zg) === 0;
      S && (rt(e, t, a, i, l), q(e, t, a, i, l), B_(e, t, a, i, l), r0(e, t, a, i, l));
    }
    var Hp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], s0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Hp));
    function uC(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ip(i, t, void 0, e), e.currentTarget = null;
    }
    function Y_(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var d = t[l], h = d.instance, S = d.currentTarget, C = d.listener;
          if (h !== i && e.isPropagationStopped())
            return;
          uC(e, C, S), i = h;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var R = t[T], $ = R.instance, F = R.currentTarget, G = R.listener;
          if ($ !== i && e.isPropagationStopped())
            return;
          uC(e, G, F), i = $;
        }
    }
    function sC(e, t) {
      for (var a = (t & Ws) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], d = l.event, h = l.listeners;
        Y_(d, h, a);
      }
      jg();
    }
    function q_(e, t, a, i, l) {
      var d = sn(a), h = [];
      W_(h, e, i, a, d, t), sC(h, t);
    }
    function An(e, t) {
      s0.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = wk(t), l = X_(e, a);
      i.has(l) || (cC(t, e, Is, a), i.add(l));
    }
    function c0(e, t, a) {
      s0.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ws), cC(a, e, i, t);
    }
    var ym = "_reactListening" + Math.random().toString(36).slice(2);
    function $p(e) {
      if (!e[ym]) {
        e[ym] = !0, ot.forEach(function(a) {
          a !== "selectionchange" && (s0.has(a) || c0(a, !1, e), c0(a, !0, e));
        });
        var t = e.nodeType === _a ? e : e.ownerDocument;
        t !== null && (t[ym] || (t[ym] = !0, c0("selectionchange", !1, t)));
      }
    }
    function cC(e, t, a, i, l) {
      var d = ar(e, t, a), h = void 0;
      Qs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (h = !0), e = e, i ? h !== void 0 ? Bf(e, t, d, h) : vo(e, t, d) : h !== void 0 ? kp(e, t, d, h) : Xu(e, t, d);
    }
    function fC(e, t) {
      return e === t || e.nodeType === zn && e.parentNode === t;
    }
    function f0(e, t, a, i, l) {
      var d = i;
      if (!(t & af) && !(t & Is)) {
        var h = l;
        if (i !== null) {
          var S = i;
          e:
            for (; ; ) {
              if (S === null)
                return;
              var C = S.tag;
              if (C === M || C === I) {
                var T = S.stateNode.containerInfo;
                if (fC(T, h))
                  break;
                if (C === I)
                  for (var R = S.return; R !== null; ) {
                    var $ = R.tag;
                    if ($ === M || $ === I) {
                      var F = R.stateNode.containerInfo;
                      if (fC(F, h))
                        return;
                    }
                    R = R.return;
                  }
                for (; T !== null; ) {
                  var G = _c(T);
                  if (G === null)
                    return;
                  var K = G.tag;
                  if (K === B || K === ee) {
                    S = d = G;
                    continue e;
                  }
                  T = T.parentNode;
                }
              }
              S = S.return;
            }
        }
      }
      qs(function() {
        return q_(e, t, a, d);
      });
    }
    function Bp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Q_(e, t, a, i, l, d) {
      for (var h = t !== null ? t + "Capture" : null, S = i ? h : t, C = [], T = e, R = null; T !== null; ) {
        var $ = T, F = $.stateNode, G = $.tag;
        if (G === B && F !== null && (R = F, S !== null)) {
          var K = Ml(T, S);
          K != null && C.push(Bp(T, K, R));
        }
        if (l)
          break;
        T = T.return;
      }
      return C;
    }
    function gm(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var d = l, h = d.stateNode, S = d.tag;
        if (S === B && h !== null) {
          var C = h, T = Ml(l, a);
          T != null && i.unshift(Bp(l, T, C));
          var R = Ml(l, t);
          R != null && i.push(Bp(l, R, C));
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
    function G_(e, t) {
      for (var a = e, i = t, l = 0, d = a; d; d = ad(d))
        l++;
      for (var h = 0, S = i; S; S = ad(S))
        h++;
      for (; l - h > 0; )
        a = ad(a), l--;
      for (; h - l > 0; )
        i = ad(i), h--;
      for (var C = l; C--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = ad(a), i = ad(i);
      }
      return null;
    }
    function dC(e, t, a, i, l) {
      for (var d = t._reactName, h = [], S = a; S !== null && S !== i; ) {
        var C = S, T = C.alternate, R = C.stateNode, $ = C.tag;
        if (T !== null && T === i)
          break;
        if ($ === B && R !== null) {
          var F = R;
          if (l) {
            var G = Ml(S, d);
            G != null && h.unshift(Bp(S, G, F));
          } else if (!l) {
            var K = Ml(S, d);
            K != null && h.push(Bp(S, K, F));
          }
        }
        S = S.return;
      }
      h.length !== 0 && e.push({
        event: t,
        listeners: h
      });
    }
    function K_(e, t, a, i, l) {
      var d = i && l ? G_(i, l) : null;
      i !== null && dC(e, t, i, d, !1), l !== null && a !== null && dC(e, a, l, d, !0);
    }
    function X_(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var ti = !1, Vp = "dangerouslySetInnerHTML", Sm = "suppressContentEditableWarning", ns = "suppressHydrationWarning", pC = "autoFocus", xc = "children", Tc = "style", Em = "__html", d0, bm, Ip, vC, Cm, hC, mC;
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
      Tu(e, t), bh(e, t), Io(e, t, {
        registrationNameDependencies: St,
        possibleRegistrationNames: ht
      });
    }, hC = $t && !document.documentMode, Ip = function(e, t, a) {
      if (!ti) {
        var i = wm(a), l = wm(t);
        l !== i && (ti = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, vC = function(e) {
      if (!ti) {
        ti = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Cm = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, mC = function(e, t) {
      var a = e.namespaceURI === no ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var J_ = /\r\n?/g, Z_ = /\u0000|\uFFFD/g;
    function wm(e) {
      Ea(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(J_, `
`).replace(Z_, "");
    }
    function xm(e, t, a, i) {
      var l = wm(t), d = wm(e);
      if (d !== l && (i && (ti || (ti = !0, y('Text content did not match. Server: "%s" Client: "%s"', d, l))), a && O))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function yC(e) {
      return e.nodeType === _a ? e : e.ownerDocument;
    }
    function eR() {
    }
    function Tm(e) {
      e.onclick = eR;
    }
    function tR(e, t, a, i, l) {
      for (var d in i)
        if (i.hasOwnProperty(d)) {
          var h = i[d];
          if (d === Tc)
            h && Object.freeze(h), hh(t, h);
          else if (d === Vp) {
            var S = h ? h[Em] : void 0;
            S != null && oh(t, S);
          } else if (d === xc)
            if (typeof h == "string") {
              var C = e !== "textarea" || h !== "";
              C && Ps(t, h);
            } else
              typeof h == "number" && Ps(t, "" + h);
          else
            d === Sm || d === ns || d === pC || (St.hasOwnProperty(d) ? h != null && (typeof h != "function" && Cm(d, h), d === "onScroll" && An("scroll", t)) : h != null && Qi(t, d, h, l));
        }
    }
    function nR(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var d = t[l], h = t[l + 1];
        d === Tc ? hh(e, h) : d === Vp ? oh(e, h) : d === xc ? Ps(e, h) : Qi(e, d, h, i);
      }
    }
    function rR(e, t, a, i) {
      var l, d = yC(a), h, S = i;
      if (S === no && (S = $d(e)), S === no) {
        if (l = Dl(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var C = d.createElement("div");
          C.innerHTML = "<script><\/script>";
          var T = C.firstChild;
          h = C.removeChild(T);
        } else if (typeof t.is == "string")
          h = d.createElement(e, {
            is: t.is
          });
        else if (h = d.createElement(e), e === "select") {
          var R = h;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        h = d.createElementNS(S, e);
      return S === no && !l && Object.prototype.toString.call(h) === "[object HTMLUnknownElement]" && !Mn.call(d0, e) && (d0[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), h;
    }
    function aR(e, t) {
      return yC(t).createTextNode(e);
    }
    function iR(e, t, a, i) {
      var l = Dl(t, a);
      bm(t, a);
      var d;
      switch (t) {
        case "dialog":
          An("cancel", e), An("close", e), d = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          An("load", e), d = a;
          break;
        case "video":
        case "audio":
          for (var h = 0; h < Hp.length; h++)
            An(Hp[h], e);
          d = a;
          break;
        case "source":
          An("error", e), d = a;
          break;
        case "img":
        case "image":
        case "link":
          An("error", e), An("load", e), d = a;
          break;
        case "details":
          An("toggle", e), d = a;
          break;
        case "input":
          z(e, a), d = w(e, a), An("invalid", e);
          break;
        case "option":
          nn(e, a), d = a;
          break;
        case "select":
          js(e, a), d = Us(e, a), An("invalid", e);
          break;
        case "textarea":
          ah(e, a), d = Hd(e, a), An("invalid", e);
          break;
        default:
          d = a;
      }
      switch ($s(t, d), tR(t, e, i, d, l), t) {
        case "input":
          Zi(e), we(e, a, !1);
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
          typeof d.onClick == "function" && Tm(e);
          break;
      }
    }
    function oR(e, t, a, i, l) {
      bm(t, i);
      var d = null, h, S;
      switch (t) {
        case "input":
          h = w(e, a), S = w(e, i), d = [];
          break;
        case "select":
          h = Us(e, a), S = Us(e, i), d = [];
          break;
        case "textarea":
          h = Hd(e, a), S = Hd(e, i), d = [];
          break;
        default:
          h = a, S = i, typeof h.onClick != "function" && typeof S.onClick == "function" && Tm(e);
          break;
      }
      $s(t, S);
      var C, T, R = null;
      for (C in h)
        if (!(S.hasOwnProperty(C) || !h.hasOwnProperty(C) || h[C] == null))
          if (C === Tc) {
            var $ = h[C];
            for (T in $)
              $.hasOwnProperty(T) && (R || (R = {}), R[T] = "");
          } else
            C === Vp || C === xc || C === Sm || C === ns || C === pC || (St.hasOwnProperty(C) ? d || (d = []) : (d = d || []).push(C, null));
      for (C in S) {
        var F = S[C], G = h != null ? h[C] : void 0;
        if (!(!S.hasOwnProperty(C) || F === G || F == null && G == null))
          if (C === Tc)
            if (F && Object.freeze(F), G) {
              for (T in G)
                G.hasOwnProperty(T) && (!F || !F.hasOwnProperty(T)) && (R || (R = {}), R[T] = "");
              for (T in F)
                F.hasOwnProperty(T) && G[T] !== F[T] && (R || (R = {}), R[T] = F[T]);
            } else
              R || (d || (d = []), d.push(C, R)), R = F;
          else if (C === Vp) {
            var K = F ? F[Em] : void 0, ie = G ? G[Em] : void 0;
            K != null && ie !== K && (d = d || []).push(C, K);
          } else
            C === xc ? (typeof F == "string" || typeof F == "number") && (d = d || []).push(C, "" + F) : C === Sm || C === ns || (St.hasOwnProperty(C) ? (F != null && (typeof F != "function" && Cm(C, F), C === "onScroll" && An("scroll", e)), !d && G !== F && (d = [])) : (d = d || []).push(C, F));
      }
      return R && (mh(R, S[Tc]), (d = d || []).push(Tc, R)), d;
    }
    function lR(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && Q(e, l);
      var d = Dl(a, i), h = Dl(a, l);
      switch (nR(e, t, d, h), a) {
        case "input":
          ne(e, l);
          break;
        case "textarea":
          ih(e, l);
          break;
        case "select":
          xg(e, l);
          break;
      }
    }
    function uR(e) {
      {
        var t = e.toLowerCase();
        return tf.hasOwnProperty(t) && tf[t] || null;
      }
    }
    function sR(e, t, a, i, l, d, h) {
      var S, C;
      switch (S = Dl(t, a), bm(t, a), t) {
        case "dialog":
          An("cancel", e), An("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          An("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < Hp.length; T++)
            An(Hp[T], e);
          break;
        case "source":
          An("error", e);
          break;
        case "img":
        case "image":
        case "link":
          An("error", e), An("load", e);
          break;
        case "details":
          An("toggle", e);
          break;
        case "input":
          z(e, a), An("invalid", e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          js(e, a), An("invalid", e);
          break;
        case "textarea":
          ah(e, a), An("invalid", e);
          break;
      }
      $s(t, a);
      {
        C = /* @__PURE__ */ new Set();
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
              C.add(R[$].name);
          }
        }
      }
      var G = null;
      for (var K in a)
        if (a.hasOwnProperty(K)) {
          var ie = a[K];
          if (K === xc)
            typeof ie == "string" ? e.textContent !== ie && (a[ns] !== !0 && xm(e.textContent, ie, d, h), G = [xc, ie]) : typeof ie == "number" && e.textContent !== "" + ie && (a[ns] !== !0 && xm(e.textContent, ie, d, h), G = [xc, "" + ie]);
          else if (St.hasOwnProperty(K))
            ie != null && (typeof ie != "function" && Cm(K, ie), K === "onScroll" && An("scroll", e));
          else if (h && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var qe = void 0, ft = S && Se ? null : ur(K);
            if (a[ns] !== !0) {
              if (!(K === Sm || K === ns || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === Vp) {
                  var it = e.innerHTML, jt = ie ? ie[Em] : void 0;
                  if (jt != null) {
                    var Mt = mC(e, jt);
                    Mt !== it && Ip(K, it, Mt);
                  }
                } else if (K === Tc) {
                  if (C.delete(K), hC) {
                    var W = Lg(ie);
                    qe = e.getAttribute("style"), W !== qe && Ip(K, qe, W);
                  }
                } else if (S && !Se)
                  C.delete(K.toLowerCase()), qe = Fa(e, K, ie), ie !== qe && Ip(K, qe, ie);
                else if (!_n(K, ft, S) && !en(K, ie, ft, S)) {
                  var oe = !1;
                  if (ft !== null)
                    C.delete(ft.attributeName), qe = ci(e, K, ie, ft);
                  else {
                    var Y = i;
                    if (Y === no && (Y = $d(t)), Y === no)
                      C.delete(K.toLowerCase());
                    else {
                      var Ee = uR(K);
                      Ee !== null && Ee !== K && (oe = !0, C.delete(Ee)), C.delete(K);
                    }
                    qe = Fa(e, K, ie);
                  }
                  var Qe = Se;
                  !Qe && ie !== qe && !oe && Ip(K, qe, ie);
                }
              }
            }
          }
        }
      switch (h && // $FlowFixMe - Should be inferred as not undefined.
      C.size > 0 && a[ns] !== !0 && vC(C), t) {
        case "input":
          Zi(e), we(e, a, !0);
          break;
        case "textarea":
          Zi(e), Xc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Tm(e);
          break;
      }
      return G;
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
    function v0(e, t) {
      {
        if (ti)
          return;
        ti = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function h0(e, t, a) {
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
          Tg(e, a);
          return;
        case "select":
          nh(e, a);
          return;
      }
    }
    var Wp = function() {
    }, Yp = function() {
    };
    {
      var dR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], gC = [
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
      ], pR = gC.concat(["button"]), vR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], SC = {
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
        var a = Ot({}, e || SC), i = {
          tag: t
        };
        return gC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), pR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), dR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var hR = function(e, t) {
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
            return vR.indexOf(t) === -1;
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
      }, EC = {};
      Wp = function(e, t, a) {
        a = a || SC;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = hR(e, l) ? null : i, h = d ? null : mR(e, a), S = d || h;
        if (S) {
          var C = S.tag, T = !!d + "|" + e + "|" + C;
          if (!EC[T]) {
            EC[T] = !0;
            var R = e, $ = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", $ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", d) {
              var F = "";
              C === "table" && e === "tr" && (F += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, C, $, F);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, C);
          }
        }
      };
    }
    var _m = "suppressHydrationWarning", Rm = "$", km = "/$", qp = "$?", Qp = "$!", yR = "style", y0 = null, g0 = null;
    function gR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case _a:
        case Vd: {
          t = i === _a ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Bd(null, "");
          break;
        }
        default: {
          var d = i === zn ? e.parentNode : e, h = d.namespaceURI || null;
          t = d.tagName, a = Bd(h, t);
          break;
        }
      }
      {
        var S = t.toLowerCase(), C = Yp(null, S);
        return {
          namespace: a,
          ancestorInfo: C
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
      y0 = Gu(), g0 = L_();
      var t = null;
      return da(!1), t;
    }
    function bR(e) {
      z_(g0), da(y0), y0 = null, g0 = null;
    }
    function CR(e, t, a, i, l) {
      var d;
      {
        var h = i;
        if (Wp(e, null, h.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, C = Yp(h.ancestorInfo, e);
          Wp(null, S, C);
        }
        d = h.namespace;
      }
      var T = rR(e, t, a, d);
      return Xp(l, T), _0(T, t), T;
    }
    function wR(e, t) {
      e.appendChild(t);
    }
    function xR(e, t, a, i, l) {
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
    function TR(e, t, a, i, l, d) {
      {
        var h = d;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var S = "" + i.children, C = Yp(h.ancestorInfo, t);
          Wp(null, S, C);
        }
      }
      return oR(e, t, a, i);
    }
    function S0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function _R(e, t, a, i) {
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
    var E0 = typeof setTimeout == "function" ? setTimeout : void 0, kR = typeof clearTimeout == "function" ? clearTimeout : void 0, b0 = -1, bC = typeof Promise == "function" ? Promise : void 0, OR = typeof queueMicrotask == "function" ? queueMicrotask : typeof bC < "u" ? function(e) {
      return bC.resolve(null).then(e).catch(DR);
    } : E0;
    function DR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function AR(e, t, a, i) {
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
    function NR(e, t, a, i, l, d) {
      lR(e, t, a, i, l), _0(e, l);
    }
    function CC(e) {
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
      i == null && a.onclick === null && Tm(a);
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
    function C0(e, t) {
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
      e.nodeType === zn ? C0(e.parentNode, t) : e.nodeType === na && C0(e, t), Fn(e);
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
      e.nodeType === na ? e.textContent = "" : e.nodeType === _a && e.documentElement && e.removeChild(e.documentElement);
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
    function wC(e) {
      return e.data === qp;
    }
    function w0(e) {
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
    function ek(e, t, a, i, l, d, h) {
      Xp(d, e), _0(e, a);
      var S;
      {
        var C = l;
        S = C.namespace;
      }
      var T = (d.mode & at) !== ct;
      return sR(e, t, a, S, i, T, h);
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
    function xC(e) {
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
      xm(t.nodeValue, a, i, l);
    }
    function uk(e, t, a, i, l, d) {
      if (t[_m] !== !0) {
        var h = !0;
        xm(i.nodeValue, l, d, h);
      }
    }
    function sk(e, t) {
      t.nodeType === na ? p0(e, t) : t.nodeType === zn || v0(e, t);
    }
    function ck(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === na ? p0(a, t) : t.nodeType === zn || v0(a, t));
      }
    }
    function fk(e, t, a, i, l) {
      (l || t[_m] !== !0) && (i.nodeType === na ? p0(a, i) : i.nodeType === zn || v0(a, i));
    }
    function dk(e, t, a) {
      h0(e, t);
    }
    function pk(e, t) {
      m0(e, t);
    }
    function vk(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && h0(i, t);
      }
    }
    function hk(e, t) {
      {
        var a = e.parentNode;
        a !== null && m0(a, t);
      }
    }
    function mk(e, t, a, i, l, d) {
      (d || t[_m] !== !0) && h0(a, i);
    }
    function yk(e, t, a, i, l) {
      (l || t[_m] !== !0) && m0(a, i);
    }
    function gk(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Sk(e) {
      $p(e);
    }
    var id = Math.random().toString(36).slice(2), od = "__reactFiber$" + id, x0 = "__reactProps$" + id, Kp = "__reactContainer$" + id, T0 = "__reactEvents$" + id, Ek = "__reactListeners$" + id, bk = "__reactHandles$" + id;
    function Ck(e) {
      delete e[od], delete e[x0], delete e[T0], delete e[Ek], delete e[bk];
    }
    function Xp(e, t) {
      t[od] = e;
    }
    function Dm(e, t) {
      t[Kp] = e;
    }
    function TC(e) {
      e[Kp] = null;
    }
    function Jp(e) {
      return !!e[Kp];
    }
    function _c(e) {
      var t = e[od];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Kp] || a[od], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = xC(e); l !== null; ) {
              var d = l[od];
              if (d)
                return d;
              l = xC(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function rs(e) {
      var t = e[od] || e[Kp];
      return t && (t.tag === B || t.tag === ee || t.tag === Ue || t.tag === M) ? t : null;
    }
    function ld(e) {
      if (e.tag === B || e.tag === ee)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Am(e) {
      return e[x0] || null;
    }
    function _0(e, t) {
      e[x0] = t;
    }
    function wk(e) {
      var t = e[T0];
      return t === void 0 && (t = e[T0] = /* @__PURE__ */ new Set()), t;
    }
    var _C = {}, RC = p.ReactDebugCurrentFrame;
    function Nm(e) {
      if (e) {
        var t = e._owner, a = Lt(e.type, e._source, t ? t.type : null);
        RC.setExtraStackFrame(a);
      } else
        RC.setExtraStackFrame(null);
    }
    function yo(e, t, a, i, l) {
      {
        var d = Function.call.bind(Mn);
        for (var h in e)
          if (d(e, h)) {
            var S = void 0;
            try {
              if (typeof e[h] != "function") {
                var C = Error((i || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              S = e[h](t, h, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              S = T;
            }
            S && !(S instanceof Error) && (Nm(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, h, typeof S), Nm(null)), S instanceof Error && !(S.message in _C) && (_C[S.message] = !0, Nm(l), y("Failed %s type: %s", a, S.message), Nm(null));
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
    function va(e, t, a) {
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
    function kC(e, t, a) {
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
        for (var h in i)
          d[h] = t[h];
        {
          var S = Et(e) || "Unknown";
          yo(i, d, "context", S);
        }
        return l && kC(e, t, d), d;
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
    function OC(e, t, a) {
      {
        if (eu.current !== gi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        va(eu, t, e), va(ll, a, e);
      }
    }
    function DC(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var d = Et(e) || "Unknown";
            k0[d] || (k0[d] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var h = i.getChildContext();
        for (var S in h)
          if (!(S in l))
            throw new Error((Et(e) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var C = Et(e) || "Unknown";
          yo(l, h, "child context", C);
        }
        return Ot({}, a, h);
      }
    }
    function Um(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || gi;
        return O0 = eu.current, va(eu, a, e), va(ll, ll.current, e), !0;
      }
    }
    function AC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = DC(e, t, O0);
          i.__reactInternalMemoizedMergedChildContext = l, pa(ll, e), pa(eu, e), va(eu, l, e), va(ll, a, e);
        } else
          pa(ll, e), va(ll, a, e);
      }
    }
    function xk(e) {
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
    var is = 0, jm = 1, tu = null, A0 = !1, N0 = !1;
    function NC(e) {
      tu === null ? tu = [e] : tu.push(e);
    }
    function Tk(e) {
      A0 = !0, NC(e);
    }
    function MC() {
      A0 && os();
    }
    function os() {
      if (!N0 && tu !== null) {
        N0 = !0;
        var e = 0, t = Ka();
        try {
          var a = !0, i = tu;
          for (Pn(Yn); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          tu = null, A0 = !1;
        } catch (d) {
          throw tu !== null && (tu = tu.slice(e + 1)), sp(la, os), d;
        } finally {
          Pn(t), N0 = !1;
        }
      }
      return null;
    }
    var cd = [], fd = 0, Pm = null, Fm = 0, Hi = [], $i = 0, Rc = null, nu = 1, ru = "";
    function _k(e) {
      return Oc(), (e.flags & Nh) !== st;
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
    function LC(e, t, a) {
      Oc(), Hi[$i++] = nu, Hi[$i++] = ru, Hi[$i++] = Rc, Rc = e;
      var i = nu, l = ru, d = Hm(i) - 1, h = i & ~(1 << d), S = a + 1, C = Hm(t) + d;
      if (C > 30) {
        var T = d - d % 5, R = (1 << T) - 1, $ = (h & R).toString(32), F = h >> T, G = d - T, K = Hm(t) + G, ie = S << G, qe = ie | F, ft = $ + l;
        nu = 1 << K | qe, ru = ft;
      } else {
        var it = S << d, jt = it | h, Mt = l;
        nu = 1 << C | jt, ru = Mt;
      }
    }
    function M0(e) {
      Oc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        kc(e, a), LC(e, a, i);
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
    function Ak(e, t) {
      Oc(), Hi[$i++] = nu, Hi[$i++] = ru, Hi[$i++] = Rc, nu = t.id, ru = t.overflow, Rc = e;
    }
    function Oc() {
      Br() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var $r = null, Bi = null, go = !1, Dc = !1, ls = null;
    function Nk() {
      go && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function zC() {
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
      return Bi = ZR(t), $r = e, go = !0, ls = null, Dc = !1, a !== null && Ak(e, a), !0;
    }
    function UC(e, t) {
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
    function jC(e, t) {
      UC(e, t);
      var a = PA();
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
              case ee:
                var l = t.pendingProps;
                pk(a, l);
                break;
            }
            break;
          }
          case B: {
            var d = e.type, h = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case B: {
                var C = t.type, T = t.pendingProps, R = (e.mode & at) !== ct;
                mk(
                  d,
                  h,
                  S,
                  C,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case ee: {
                var $ = t.pendingProps, F = (e.mode & at) !== ct;
                yk(
                  d,
                  h,
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
            var G = e.memoizedState, K = G.dehydrated;
            if (K !== null)
              switch (t.tag) {
                case B:
                  var ie = t.type;
                  t.pendingProps, vk(K, ie);
                  break;
                case ee:
                  var qe = t.pendingProps;
                  hk(K, qe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function PC(e, t) {
      t.flags = t.flags & ~Ai | cn, z0(e, t);
    }
    function FC(e, t) {
      switch (e.tag) {
        case B: {
          var a = e.type;
          e.pendingProps;
          var i = YR(t, a);
          return i !== null ? (e.stateNode = i, $r = e, Bi = XR(i), !0) : !1;
        }
        case ee: {
          var l = e.pendingProps, d = qR(t, l);
          return d !== null ? (e.stateNode = d, $r = e, Bi = null, !0) : !1;
        }
        case Ue: {
          var h = QR(t);
          if (h !== null) {
            var S = {
              dehydrated: h,
              treeContext: Dk(),
              retryLane: Na
            };
            e.memoizedState = S;
            var C = FA(h);
            return C.return = e, e.child = C, $r = e, Bi = null, !0;
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
          U0(e) && (z0($r, e), j0()), PC($r, e), go = !1, $r = e;
          return;
        }
        var a = t;
        if (!FC(e, t)) {
          U0(e) && (z0($r, e), j0()), t = Gp(a);
          var i = $r;
          if (!t || !FC(e, t)) {
            PC($r, e), go = !1, $r = e;
            return;
          }
          jC(i, a);
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
              var d = l.stateNode.containerInfo, h = (l.mode & at) !== ct;
              lk(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                h
              );
              break;
            }
            case B: {
              var S = l.type, C = l.memoizedProps, T = l.stateNode, R = (l.mode & at) !== ct;
              uk(
                S,
                C,
                T,
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
    function HC(e) {
      for (var t = e.return; t !== null && t.tag !== B && t.tag !== M && t.tag !== Ue; )
        t = t.return;
      $r = t;
    }
    function $m(e) {
      if (e !== $r)
        return !1;
      if (!go)
        return HC(e), go = !0, !1;
      if (e.tag !== M && (e.tag !== B || ok(e.type) && !S0(e.type, e.memoizedProps))) {
        var t = Bi;
        if (t)
          if (U0(e))
            $C(e), j0();
          else
            for (; t; )
              jC(e, t), t = Gp(t);
      }
      return HC(e), e.tag === Ue ? Bi = Fk(e) : Bi = $r ? Gp(e.stateNode) : null, !0;
    }
    function Hk() {
      return go && Bi !== null;
    }
    function $C(e) {
      for (var t = Bi; t; )
        UC(e, t), t = Gp(t);
    }
    function dd() {
      $r = null, Bi = null, go = !1, Dc = !1;
    }
    function BC() {
      ls !== null && (Ux(ls), ls = null);
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
      }, Ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Zp = [], ev = [], tv = [], nv = [], rv = [], av = [], Nc = /* @__PURE__ */ new Set();
      So.recordUnsafeLifecycleWarnings = function(e, t) {
        Nc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Zp.push(e), e.mode & Un && typeof t.UNSAFE_componentWillMount == "function" && ev.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && tv.push(e), e.mode & Un && typeof t.UNSAFE_componentWillReceiveProps == "function" && nv.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && rv.push(e), e.mode & Un && typeof t.UNSAFE_componentWillUpdate == "function" && av.push(e));
      }, So.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Zp.length > 0 && (Zp.forEach(function(F) {
          e.add(Et(F) || "Component"), Nc.add(F.type);
        }), Zp = []);
        var t = /* @__PURE__ */ new Set();
        ev.length > 0 && (ev.forEach(function(F) {
          t.add(Et(F) || "Component"), Nc.add(F.type);
        }), ev = []);
        var a = /* @__PURE__ */ new Set();
        tv.length > 0 && (tv.forEach(function(F) {
          a.add(Et(F) || "Component"), Nc.add(F.type);
        }), tv = []);
        var i = /* @__PURE__ */ new Set();
        nv.length > 0 && (nv.forEach(function(F) {
          i.add(Et(F) || "Component"), Nc.add(F.type);
        }), nv = []);
        var l = /* @__PURE__ */ new Set();
        rv.length > 0 && (rv.forEach(function(F) {
          l.add(Et(F) || "Component"), Nc.add(F.type);
        }), rv = []);
        var d = /* @__PURE__ */ new Set();
        if (av.length > 0 && (av.forEach(function(F) {
          d.add(Et(F) || "Component"), Nc.add(F.type);
        }), av = []), t.size > 0) {
          var h = Ac(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, h);
        }
        if (i.size > 0) {
          var S = Ac(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, S);
        }
        if (d.size > 0) {
          var C = Ac(d);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, C);
        }
        if (e.size > 0) {
          var T = Ac(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var R = Ac(a);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (l.size > 0) {
          var $ = Ac(l);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, $);
        }
      };
      var Bm = /* @__PURE__ */ new Map(), VC = /* @__PURE__ */ new Set();
      So.recordLegacyContextWarning = function(e, t) {
        var a = Ik(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!VC.has(e.type)) {
          var i = Bm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Bm.set(a, i)), i.push(e));
        }
      }, So.flushLegacyContextWarning = function() {
        Bm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              i.add(Et(d) || "Component"), VC.add(d.type);
            });
            var l = Ac(i);
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
        Zp = [], ev = [], tv = [], nv = [], rv = [], av = [], Bm = /* @__PURE__ */ new Map();
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
    function IC() {
      Im = !0;
    }
    function WC() {
      Im = !1;
    }
    function YC(e, t, a) {
      va(H0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== $0 && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = $0;
    }
    function V0(e, t) {
      var a = H0.current;
      pa(H0, t), e._currentValue = a;
    }
    function I0(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Wl(i.childLanes, t) ? l !== null && !Wl(l.childLanes, t) && (l.childLanes = Tt(l.childLanes, t)) : (i.childLanes = Tt(i.childLanes, t), l !== null && (l.childLanes = Tt(l.childLanes, t))), i === a)
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
          for (var h = d.firstContext; h !== null; ) {
            if (h.context === t) {
              if (i.tag === k) {
                var S = Fu(a), C = au(yn, S);
                C.tag = qm;
                var T = i.updateQueue;
                if (T !== null) {
                  var R = T.shared, $ = R.pending;
                  $ === null ? C.next = C : (C.next = $.next, $.next = C), R.pending = C;
                }
              }
              i.lanes = Tt(i.lanes, a);
              var F = i.alternate;
              F !== null && (F.lanes = Tt(F.lanes, a)), I0(i.return, a, e), d.lanes = Tt(d.lanes, a);
              break;
            }
            h = h.next;
          }
        } else if (i.tag === ze)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === _e) {
          var G = i.return;
          if (G === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          G.lanes = Tt(G.lanes, a);
          var K = G.alternate;
          K !== null && (K.lanes = Tt(K.lanes, a)), I0(G, a, e), l = i.sibling;
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
    function vd(e, t) {
      Vm = e, pd = null, B0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (fa(a.lanes, t) && gv(), a.firstContext = null);
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
    function qC(e, t, a, i) {
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
      e.lanes = Tt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Tt(a.lanes, t)), a === null && (e.flags & (cn | Ai)) !== st && Qx(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Tt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Tt(a.childLanes, t) : (l.flags & (cn | Ai)) !== st && Qx(e), i = l, l = l.return;
      if (i.tag === M) {
        var d = i.stateNode;
        return d;
      } else
        return null;
    }
    var QC = 0, GC = 1, qm = 2, Y0 = 3, Qm = !1, q0, Gm;
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
    function KC(e, t) {
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
        tag: QC,
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
          d = Nf(d, e.pendingLanes);
          var h = Tt(d, a);
          l.lanes = h, bp(e, h);
        }
      }
    }
    function G0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var d = null, h = null, S = a.firstBaseUpdate;
          if (S !== null) {
            var C = S;
            do {
              var T = {
                eventTime: C.eventTime,
                lane: C.lane,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null
              };
              h === null ? d = h = T : (h.next = T, h = T), C = C.next;
            } while (C !== null);
            h === null ? d = h = t : (h.next = t, h = t);
          } else
            d = h = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: h,
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
        case GC: {
          var h = a.payload;
          if (typeof h == "function") {
            IC();
            var S = h.call(d, i, l);
            {
              if (e.mode & Un) {
                mn(!0);
                try {
                  h.call(d, i, l);
                } finally {
                  mn(!1);
                }
              }
              WC();
            }
            return S;
          }
          return h;
        }
        case Y0:
          e.flags = e.flags & ~mr | bt;
        case QC: {
          var C = a.payload, T;
          if (typeof C == "function") {
            IC(), T = C.call(d, i, l);
            {
              if (e.mode & Un) {
                mn(!0);
                try {
                  C.call(d, i, l);
                } finally {
                  mn(!1);
                }
              }
              WC();
            }
          } else
            T = C;
          return T == null ? i : Ot({}, i, T);
        }
        case qm:
          return Qm = !0, i;
      }
      return i;
    }
    function Xm(e, t, a, i) {
      var l = e.updateQueue;
      Qm = !1, Gm = l.shared;
      var d = l.firstBaseUpdate, h = l.lastBaseUpdate, S = l.shared.pending;
      if (S !== null) {
        l.shared.pending = null;
        var C = S, T = C.next;
        C.next = null, h === null ? d = T : h.next = T, h = C;
        var R = e.alternate;
        if (R !== null) {
          var $ = R.updateQueue, F = $.lastBaseUpdate;
          F !== h && (F === null ? $.firstBaseUpdate = T : F.next = T, $.lastBaseUpdate = C);
        }
      }
      if (d !== null) {
        var G = l.baseState, K = se, ie = null, qe = null, ft = null, it = d;
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
            G = Xk(e, l, it, G, t, a);
            var Y = it.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            it.lane !== In) {
              e.flags |= sr;
              var Ee = l.effects;
              Ee === null ? l.effects = [it] : Ee.push(it);
            }
          } else {
            var W = {
              eventTime: Mt,
              lane: jt,
              tag: it.tag,
              payload: it.payload,
              callback: it.callback,
              next: null
            };
            ft === null ? (qe = ft = W, ie = G) : ft = ft.next = W, K = Tt(K, jt);
          }
          if (it = it.next, it === null) {
            if (S = l.shared.pending, S === null)
              break;
            var Qe = S, Ve = Qe.next;
            Qe.next = null, it = Ve, l.lastBaseUpdate = Qe, l.shared.pending = null;
          }
        } while (!0);
        ft === null && (ie = G), l.baseState = ie, l.firstBaseUpdate = qe, l.lastBaseUpdate = ft;
        var yt = l.shared.interleaved;
        if (yt !== null) {
          var xt = yt;
          do
            K = Tt(K, xt.lane), xt = xt.next;
          while (xt !== yt);
        } else
          d === null && (l.shared.lanes = se);
        Dv(K), e.lanes = K, e.memoizedState = G;
      }
      Gm = null;
    }
    function Jk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function XC() {
      Qm = !1;
    }
    function Jm() {
      return Qm;
    }
    function JC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var d = i[l], h = d.callback;
          h !== null && (d.callback = null, Jk(h, a));
        }
    }
    var K0 = {}, ZC = new u.Component().refs, X0, J0, Z0, eS, tS, ew, Zm, nS, rS, aS;
    {
      X0 = /* @__PURE__ */ new Set(), J0 = /* @__PURE__ */ new Set(), Z0 = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set();
      var tw = /* @__PURE__ */ new Set();
      Zm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tw.has(a) || (tw.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ew = function(e, t) {
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
        ew(t, d);
      }
      var h = d == null ? l : Ot({}, l, d);
      if (e.memoizedState = h, e.lanes === se) {
        var S = e.updateQueue;
        S.baseState = h;
      }
    }
    var oS = {
      isMounted: Da,
      enqueueSetState: function(e, t, a) {
        var i = Di(e), l = za(), d = ms(i), h = au(l, d);
        h.payload = t, a != null && (Zm(a, "setState"), h.callback = a);
        var S = us(i, h, d);
        S !== null && (_r(S, i, d, l), Km(S, i, d)), mf(i, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Di(e), l = za(), d = ms(i), h = au(l, d);
        h.tag = GC, h.payload = t, a != null && (Zm(a, "replaceState"), h.callback = a);
        var S = us(i, h, d);
        S !== null && (_r(S, i, d, l), Km(S, i, d)), mf(i, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Di(e), i = za(), l = ms(a), d = au(i, l);
        d.tag = qm, t != null && (Zm(t, "forceUpdate"), d.callback = t);
        var h = us(a, d, l);
        h !== null && (_r(h, a, l, i), Km(h, a, l)), zu(a, l);
      }
    };
    function nw(e, t, a, i, l, d, h) {
      var S = e.stateNode;
      if (typeof S.shouldComponentUpdate == "function") {
        var C = S.shouldComponentUpdate(i, d, h);
        {
          if (e.mode & Un) {
            mn(!0);
            try {
              C = S.shouldComponentUpdate(i, d, h);
            } finally {
              mn(!1);
            }
          }
          C === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ft(t) || "Component");
        }
        return C;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !vt(a, i) || !vt(l, d) : !0;
    }
    function Zk(e, t, a) {
      var i = e.stateNode;
      {
        var l = Ft(t) || "Component", d = i.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !rS.has(t) && (rS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ft(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var h = i.props !== a;
        i.props !== void 0 && h && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Z0.has(t) && (Z0.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ft(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var S = i.state;
        S && (typeof S != "object" || Ht(S)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function rw(e, t) {
      t.updater = oS, e.stateNode = t, uf(t, e), t._reactInternalInstance = K0;
    }
    function aw(e, t, a) {
      var i = !1, l = gi, d = gi, h = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          h === null || h !== void 0 && h.$$typeof === Me && h._context === void 0
        );
        if (!S && !aS.has(t)) {
          aS.add(t);
          var C = "";
          h === void 0 ? C = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof h != "object" ? C = " However, it is set to a " + typeof h + "." : h.$$typeof === me ? C = " Did you accidentally pass the Context.Provider instead?" : h._context !== void 0 ? C = " Did you accidentally pass the Context.Consumer instead?" : C = " However, it is set to an object with keys {" + Object.keys(h).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", C);
        }
      }
      if (typeof h == "object" && h !== null)
        d = pr(h);
      else {
        l = ud(e, t, !0);
        var T = t.contextTypes;
        i = T != null, d = i ? sd(e, l) : gi;
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
      rw(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && $ === null) {
          var F = Ft(t) || "Component";
          J0.has(F) || (J0.add(F), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", F, R.state === null ? "null" : "undefined", F));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var G = null, K = null, ie = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? G = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (G = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ie = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (ie = "UNSAFE_componentWillUpdate"), G !== null || K !== null || ie !== null) {
            var qe = Ft(t) || "Component", ft = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            eS.has(qe) || (eS.add(qe), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, qe, ft, G !== null ? `
  ` + G : "", K !== null ? `
  ` + K : "", ie !== null ? `
  ` + ie : ""));
          }
        }
      }
      return i && kC(e, l, d), R;
    }
    function eO(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Et(e) || "Component"), oS.enqueueReplaceState(t, t.state, null));
    }
    function iw(e, t, a, i) {
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
      l.props = a, l.state = e.memoizedState, l.refs = ZC, Q0(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        l.context = pr(d);
      else {
        var h = ud(e, t, !0);
        l.context = sd(e, h);
      }
      {
        if (l.state === a) {
          var S = Ft(t) || "Component";
          nS.has(S) || (nS.add(S), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", S));
        }
        e.mode & Un && So.recordLegacyContextWarning(e, l), So.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var C = t.getDerivedStateFromProps;
      if (typeof C == "function" && (iS(e, t, C, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (eO(e, l), Xm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var T = nt;
        T |= Wa, (e.mode & Qa) !== ct && (T |= Ya), e.flags |= T;
      }
    }
    function tO(e, t, a, i) {
      var l = e.stateNode, d = e.memoizedProps;
      l.props = d;
      var h = l.context, S = t.contextType, C = gi;
      if (typeof S == "object" && S !== null)
        C = pr(S);
      else {
        var T = ud(e, t, !0);
        C = sd(e, T);
      }
      var R = t.getDerivedStateFromProps, $ = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !$ && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (d !== a || h !== C) && iw(e, l, a, C), XC();
      var F = e.memoizedState, G = l.state = F;
      if (Xm(e, a, l, i), G = e.memoizedState, d === a && F === G && !Lm() && !Jm()) {
        if (typeof l.componentDidMount == "function") {
          var K = nt;
          K |= Wa, (e.mode & Qa) !== ct && (K |= Ya), e.flags |= K;
        }
        return !1;
      }
      typeof R == "function" && (iS(e, t, R, a), G = e.memoizedState);
      var ie = Jm() || nw(e, t, d, a, F, G, C);
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
        e.memoizedProps = a, e.memoizedState = G;
      }
      return l.props = a, l.state = G, l.context = C, ie;
    }
    function nO(e, t, a, i, l) {
      var d = t.stateNode;
      KC(e, t);
      var h = t.memoizedProps, S = t.type === t.elementType ? h : Eo(t.type, h);
      d.props = S;
      var C = t.pendingProps, T = d.context, R = a.contextType, $ = gi;
      if (typeof R == "object" && R !== null)
        $ = pr(R);
      else {
        var F = ud(t, a, !0);
        $ = sd(t, F);
      }
      var G = a.getDerivedStateFromProps, K = typeof G == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !K && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (h !== C || T !== $) && iw(t, d, i, $), XC();
      var ie = t.memoizedState, qe = d.state = ie;
      if (Xm(t, i, d, l), qe = t.memoizedState, h === C && ie === qe && !Lm() && !Jm() && !L)
        return typeof d.componentDidUpdate == "function" && (h !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= nt), typeof d.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Zn), !1;
      typeof G == "function" && (iS(t, a, G, i), qe = t.memoizedState);
      var ft = Jm() || nw(t, a, S, i, ie, qe, $) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      L;
      return ft ? (!K && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, qe, $), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, qe, $)), typeof d.componentDidUpdate == "function" && (t.flags |= nt), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Zn)) : (typeof d.componentDidUpdate == "function" && (h !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= nt), typeof d.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Zn), t.memoizedProps = i, t.memoizedState = qe), d.props = i, d.state = qe, d.context = $, ft;
    }
    var uS, sS, cS, fS, dS, ow = function(e, t) {
    };
    uS = !1, sS = !1, cS = {}, fS = {}, dS = {}, ow = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Et(t) || "Component";
        fS[a] || (fS[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function iv(e, t, a) {
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
          var d = a._owner, h;
          if (d) {
            var S = d;
            if (S.tag !== k)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            h = S.stateNode;
          }
          if (!h)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var C = h;
          nr(i, "ref");
          var T = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var R = function($) {
            var F = C.refs;
            F === ZC && (F = C.refs = {}), $ === null ? delete F[T] : F[T] = $;
          };
          return R._stringRef = T, R;
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
    function lw(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function uw(e) {
      function t(W, oe) {
        if (e) {
          var Y = W.deletions;
          Y === null ? (W.deletions = [oe], W.flags |= It) : Y.push(oe);
        }
      }
      function a(W, oe) {
        if (!e)
          return null;
        for (var Y = oe; Y !== null; )
          t(W, Y), Y = Y.sibling;
        return null;
      }
      function i(W, oe) {
        for (var Y = /* @__PURE__ */ new Map(), Ee = oe; Ee !== null; )
          Ee.key !== null ? Y.set(Ee.key, Ee) : Y.set(Ee.index, Ee), Ee = Ee.sibling;
        return Y;
      }
      function l(W, oe) {
        var Y = $c(W, oe);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function d(W, oe, Y) {
        if (W.index = Y, !e)
          return W.flags |= Nh, oe;
        var Ee = W.alternate;
        if (Ee !== null) {
          var Qe = Ee.index;
          return Qe < oe ? (W.flags |= cn, oe) : Qe;
        } else
          return W.flags |= cn, oe;
      }
      function h(W) {
        return e && W.alternate === null && (W.flags |= cn), W;
      }
      function S(W, oe, Y, Ee) {
        if (oe === null || oe.tag !== ee) {
          var Qe = FE(Y, W.mode, Ee);
          return Qe.return = W, Qe;
        } else {
          var Ve = l(oe, Y);
          return Ve.return = W, Ve;
        }
      }
      function C(W, oe, Y, Ee) {
        var Qe = Y.type;
        if (Qe === Ta)
          return R(W, oe, Y.props.children, Ee, Y.key);
        if (oe !== null && (oe.elementType === Qe || // Keep this check inline so it only runs on the false path:
        Jx(oe, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Qe == "object" && Qe !== null && Qe.$$typeof === ut && lw(Qe) === oe.type)) {
          var Ve = l(oe, Y.props);
          return Ve.ref = iv(W, oe, Y), Ve.return = W, Ve._debugSource = Y._source, Ve._debugOwner = Y._owner, Ve;
        }
        var yt = PE(Y, W.mode, Ee);
        return yt.ref = iv(W, oe, Y), yt.return = W, yt;
      }
      function T(W, oe, Y, Ee) {
        if (oe === null || oe.tag !== I || oe.stateNode.containerInfo !== Y.containerInfo || oe.stateNode.implementation !== Y.implementation) {
          var Qe = HE(Y, W.mode, Ee);
          return Qe.return = W, Qe;
        } else {
          var Ve = l(oe, Y.children || []);
          return Ve.return = W, Ve;
        }
      }
      function R(W, oe, Y, Ee, Qe) {
        if (oe === null || oe.tag !== fe) {
          var Ve = gs(Y, W.mode, Ee, Qe);
          return Ve.return = W, Ve;
        } else {
          var yt = l(oe, Y);
          return yt.return = W, yt;
        }
      }
      function $(W, oe, Y) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var Ee = FE("" + oe, W.mode, Y);
          return Ee.return = W, Ee;
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case Kr: {
              var Qe = PE(oe, W.mode, Y);
              return Qe.ref = iv(W, null, oe), Qe.return = W, Qe;
            }
            case Xr: {
              var Ve = HE(oe, W.mode, Y);
              return Ve.return = W, Ve;
            }
            case ut: {
              var yt = oe._payload, xt = oe._init;
              return $(W, xt(yt), Y);
            }
          }
          if (Ht(oe) || Ti(oe)) {
            var on = gs(oe, W.mode, Y, null);
            return on.return = W, on;
          }
          ey(W, oe);
        }
        return typeof oe == "function" && ty(W), null;
      }
      function F(W, oe, Y, Ee) {
        var Qe = oe !== null ? oe.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return Qe !== null ? null : S(W, oe, "" + Y, Ee);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Kr:
              return Y.key === Qe ? C(W, oe, Y, Ee) : null;
            case Xr:
              return Y.key === Qe ? T(W, oe, Y, Ee) : null;
            case ut: {
              var Ve = Y._payload, yt = Y._init;
              return F(W, oe, yt(Ve), Ee);
            }
          }
          if (Ht(Y) || Ti(Y))
            return Qe !== null ? null : R(W, oe, Y, Ee, null);
          ey(W, Y);
        }
        return typeof Y == "function" && ty(W), null;
      }
      function G(W, oe, Y, Ee, Qe) {
        if (typeof Ee == "string" && Ee !== "" || typeof Ee == "number") {
          var Ve = W.get(Y) || null;
          return S(oe, Ve, "" + Ee, Qe);
        }
        if (typeof Ee == "object" && Ee !== null) {
          switch (Ee.$$typeof) {
            case Kr: {
              var yt = W.get(Ee.key === null ? Y : Ee.key) || null;
              return C(oe, yt, Ee, Qe);
            }
            case Xr: {
              var xt = W.get(Ee.key === null ? Y : Ee.key) || null;
              return T(oe, xt, Ee, Qe);
            }
            case ut:
              var on = Ee._payload, Yt = Ee._init;
              return G(W, oe, Y, Yt(on), Qe);
          }
          if (Ht(Ee) || Ti(Ee)) {
            var lr = W.get(Y) || null;
            return R(oe, lr, Ee, Qe, null);
          }
          ey(oe, Ee);
        }
        return typeof Ee == "function" && ty(oe), null;
      }
      function K(W, oe, Y) {
        {
          if (typeof W != "object" || W === null)
            return oe;
          switch (W.$$typeof) {
            case Kr:
            case Xr:
              ow(W, Y);
              var Ee = W.key;
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
              var Qe = W._payload, Ve = W._init;
              K(Ve(Qe), oe, Y);
              break;
          }
        }
        return oe;
      }
      function ie(W, oe, Y, Ee) {
        for (var Qe = null, Ve = 0; Ve < Y.length; Ve++) {
          var yt = Y[Ve];
          Qe = K(yt, Qe, W);
        }
        for (var xt = null, on = null, Yt = oe, lr = 0, qt = 0, tr = null; Yt !== null && qt < Y.length; qt++) {
          Yt.index > qt ? (tr = Yt, Yt = null) : tr = Yt.sibling;
          var ma = F(W, Yt, Y[qt], Ee);
          if (ma === null) {
            Yt === null && (Yt = tr);
            break;
          }
          e && Yt && ma.alternate === null && t(W, Yt), lr = d(ma, lr, qt), on === null ? xt = ma : on.sibling = ma, on = ma, Yt = tr;
        }
        if (qt === Y.length) {
          if (a(W, Yt), Br()) {
            var Gr = qt;
            kc(W, Gr);
          }
          return xt;
        }
        if (Yt === null) {
          for (; qt < Y.length; qt++) {
            var Ei = $(W, Y[qt], Ee);
            Ei !== null && (lr = d(Ei, lr, qt), on === null ? xt = Ei : on.sibling = Ei, on = Ei);
          }
          if (Br()) {
            var Ua = qt;
            kc(W, Ua);
          }
          return xt;
        }
        for (var ja = i(W, Yt); qt < Y.length; qt++) {
          var ya = G(ja, W, qt, Y[qt], Ee);
          ya !== null && (e && ya.alternate !== null && ja.delete(ya.key === null ? qt : ya.key), lr = d(ya, lr, qt), on === null ? xt = ya : on.sibling = ya, on = ya);
        }
        if (e && ja.forEach(function(Ad) {
          return t(W, Ad);
        }), Br()) {
          var cu = qt;
          kc(W, cu);
        }
        return xt;
      }
      function qe(W, oe, Y, Ee) {
        var Qe = Ti(Y);
        if (typeof Qe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (sS || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), sS = !0), Y.entries === Qe && (uS || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uS = !0);
          var Ve = Qe.call(Y);
          if (Ve)
            for (var yt = null, xt = Ve.next(); !xt.done; xt = Ve.next()) {
              var on = xt.value;
              yt = K(on, yt, W);
            }
        }
        var Yt = Qe.call(Y);
        if (Yt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var lr = null, qt = null, tr = oe, ma = 0, Gr = 0, Ei = null, Ua = Yt.next(); tr !== null && !Ua.done; Gr++, Ua = Yt.next()) {
          tr.index > Gr ? (Ei = tr, tr = null) : Ei = tr.sibling;
          var ja = F(W, tr, Ua.value, Ee);
          if (ja === null) {
            tr === null && (tr = Ei);
            break;
          }
          e && tr && ja.alternate === null && t(W, tr), ma = d(ja, ma, Gr), qt === null ? lr = ja : qt.sibling = ja, qt = ja, tr = Ei;
        }
        if (Ua.done) {
          if (a(W, tr), Br()) {
            var ya = Gr;
            kc(W, ya);
          }
          return lr;
        }
        if (tr === null) {
          for (; !Ua.done; Gr++, Ua = Yt.next()) {
            var cu = $(W, Ua.value, Ee);
            cu !== null && (ma = d(cu, ma, Gr), qt === null ? lr = cu : qt.sibling = cu, qt = cu);
          }
          if (Br()) {
            var Ad = Gr;
            kc(W, Ad);
          }
          return lr;
        }
        for (var zv = i(W, tr); !Ua.done; Gr++, Ua = Yt.next()) {
          var ml = G(zv, W, Gr, Ua.value, Ee);
          ml !== null && (e && ml.alternate !== null && zv.delete(ml.key === null ? Gr : ml.key), ma = d(ml, ma, Gr), qt === null ? lr = ml : qt.sibling = ml, qt = ml);
        }
        if (e && zv.forEach(function(mN) {
          return t(W, mN);
        }), Br()) {
          var hN = Gr;
          kc(W, hN);
        }
        return lr;
      }
      function ft(W, oe, Y, Ee) {
        if (oe !== null && oe.tag === ee) {
          a(W, oe.sibling);
          var Qe = l(oe, Y);
          return Qe.return = W, Qe;
        }
        a(W, oe);
        var Ve = FE(Y, W.mode, Ee);
        return Ve.return = W, Ve;
      }
      function it(W, oe, Y, Ee) {
        for (var Qe = Y.key, Ve = oe; Ve !== null; ) {
          if (Ve.key === Qe) {
            var yt = Y.type;
            if (yt === Ta) {
              if (Ve.tag === fe) {
                a(W, Ve.sibling);
                var xt = l(Ve, Y.props.children);
                return xt.return = W, xt._debugSource = Y._source, xt._debugOwner = Y._owner, xt;
              }
            } else if (Ve.elementType === yt || // Keep this check inline so it only runs on the false path:
            Jx(Ve, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof yt == "object" && yt !== null && yt.$$typeof === ut && lw(yt) === Ve.type) {
              a(W, Ve.sibling);
              var on = l(Ve, Y.props);
              return on.ref = iv(W, Ve, Y), on.return = W, on._debugSource = Y._source, on._debugOwner = Y._owner, on;
            }
            a(W, Ve);
            break;
          } else
            t(W, Ve);
          Ve = Ve.sibling;
        }
        if (Y.type === Ta) {
          var Yt = gs(Y.props.children, W.mode, Ee, Y.key);
          return Yt.return = W, Yt;
        } else {
          var lr = PE(Y, W.mode, Ee);
          return lr.ref = iv(W, oe, Y), lr.return = W, lr;
        }
      }
      function jt(W, oe, Y, Ee) {
        for (var Qe = Y.key, Ve = oe; Ve !== null; ) {
          if (Ve.key === Qe)
            if (Ve.tag === I && Ve.stateNode.containerInfo === Y.containerInfo && Ve.stateNode.implementation === Y.implementation) {
              a(W, Ve.sibling);
              var yt = l(Ve, Y.children || []);
              return yt.return = W, yt;
            } else {
              a(W, Ve);
              break;
            }
          else
            t(W, Ve);
          Ve = Ve.sibling;
        }
        var xt = HE(Y, W.mode, Ee);
        return xt.return = W, xt;
      }
      function Mt(W, oe, Y, Ee) {
        var Qe = typeof Y == "object" && Y !== null && Y.type === Ta && Y.key === null;
        if (Qe && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Kr:
              return h(it(W, oe, Y, Ee));
            case Xr:
              return h(jt(W, oe, Y, Ee));
            case ut:
              var Ve = Y._payload, yt = Y._init;
              return Mt(W, oe, yt(Ve), Ee);
          }
          if (Ht(Y))
            return ie(W, oe, Y, Ee);
          if (Ti(Y))
            return qe(W, oe, Y, Ee);
          ey(W, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? h(ft(W, oe, "" + Y, Ee)) : (typeof Y == "function" && ty(W), a(W, oe));
      }
      return Mt;
    }
    var hd = uw(!0), sw = uw(!1);
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
        MA(a, t), a = a.sibling;
    }
    var ov = {}, ss = as(ov), lv = as(ov), ny = as(ov);
    function ry(e) {
      if (e === ov)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function cw() {
      var e = ry(ny.current);
      return e;
    }
    function pS(e, t) {
      va(ny, t, e), va(lv, e, e), va(ss, ov, e);
      var a = gR(t);
      pa(ss, e), va(ss, a, e);
    }
    function md(e) {
      pa(ss, e), pa(lv, e), pa(ny, e);
    }
    function vS() {
      var e = ry(ss.current);
      return e;
    }
    function fw(e) {
      ry(ny.current);
      var t = ry(ss.current), a = SR(t, e.type);
      t !== a && (va(lv, e, e), va(ss, a, e));
    }
    function hS(e) {
      lv.current === e && (pa(ss, e), pa(lv, e));
    }
    var iO = 0, dw = 1, pw = 1, uv = 2, bo = as(iO);
    function mS(e, t) {
      return (e & t) !== 0;
    }
    function yd(e) {
      return e & dw;
    }
    function yS(e, t) {
      return e & dw | t;
    }
    function oO(e, t) {
      return e | t;
    }
    function cs(e, t) {
      va(bo, t, e);
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
            if (i === null || wC(i) || w0(i))
              return t;
          }
        } else if (t.tag === Ce && // revealOrder undefined can't be trusted because it don't
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
    var We = p.ReactCurrentDispatcher, sv = p.ReactCurrentBatchConfig, ES, Sd;
    ES = /* @__PURE__ */ new Set();
    var Lc = se, an = null, br = null, Cr = null, iy = !1, cv = !1, fv = 0, sO = 0, cO = 25, ce = null, Vi = null, fs = -1, bS = !1;
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
            for (var d = Vi[l], h = l === fs ? e : d, S = l + 1 + ". " + d; S.length < i; )
              S += " ";
            S += h + `
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
    function ha() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function CS(e, t) {
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
      Lc = d, an = t, Vi = e !== null ? e._debugHookTypes : null, fs = -1, bS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? We.current = zw : Vi !== null ? We.current = Lw : We.current = Mw;
      var h = a(i, l);
      if (cv) {
        var S = 0;
        do {
          if (cv = !1, fv = 0, S >= cO)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          S += 1, bS = !1, br = null, Cr = null, t.updateQueue = null, fs = -1, We.current = Uw, h = a(i, l);
        } while (cv);
      }
      We.current = gy, t._debugHookTypes = Vi;
      var C = br !== null && br.next !== null;
      if (Lc = se, an = null, br = null, Cr = null, ce = null, Vi = null, fs = -1, e !== null && (e.flags & yr) !== (t.flags & yr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & at) !== ct && y("Internal React error: Expected static flag was missing. Please notify the React team."), iy = !1, C)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return h;
    }
    function Cd() {
      var e = fv !== 0;
      return fv = 0, e;
    }
    function vw(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Qa) !== ct ? t.flags &= ~(zl | Ya | ra | nt) : t.flags &= ~(ra | nt), e.lanes = fc(e.lanes, a);
    }
    function hw() {
      if (We.current = gy, iy) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        iy = !1;
      }
      Lc = se, an = null, br = null, Cr = null, Vi = null, fs = -1, ce = null, kw = !1, cv = !1, fv = 0;
    }
    function cl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Cr === null ? an.memoizedState = Cr = e : Cr = Cr.next = e, Cr;
    }
    function Ii() {
      var e;
      if (br === null) {
        var t = an.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = br.next;
      var a;
      if (Cr === null ? a = an.memoizedState : a = Cr.next, a !== null)
        Cr = a, a = Cr.next, br = e;
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
        Cr === null ? an.memoizedState = Cr = i : Cr = Cr.next = i;
      }
      return Cr;
    }
    function mw() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function xS(e, t, a) {
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
      var h = d.dispatch = hO.bind(null, an, d);
      return [i.memoizedState, h];
    }
    function TS(e, t, a) {
      var i = Ii(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var d = br, h = d.baseQueue, S = l.pending;
      if (S !== null) {
        if (h !== null) {
          var C = h.next, T = S.next;
          h.next = T, S.next = C;
        }
        d.baseQueue !== h && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = h = S, l.pending = null;
      }
      if (h !== null) {
        var R = h.next, $ = d.baseState, F = null, G = null, K = null, ie = R;
        do {
          var qe = ie.lane;
          if (Wl(Lc, qe)) {
            if (K !== null) {
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
              K = K.next = it;
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
            K === null ? (G = K = ft, F = $) : K = K.next = ft, an.lanes = Tt(an.lanes, qe), Dv(qe);
          }
          ie = ie.next;
        } while (ie !== null && ie !== R);
        K === null ? F = $ : K.next = G, Je($, i.memoizedState) || gv(), i.memoizedState = $, i.baseState = F, i.baseQueue = K, l.lastRenderedState = $;
      }
      var Mt = l.interleaved;
      if (Mt !== null) {
        var W = Mt;
        do {
          var oe = W.lane;
          an.lanes = Tt(an.lanes, oe), Dv(oe), W = W.next;
        } while (W !== Mt);
      } else
        h === null && (l.lanes = se);
      var Y = l.dispatch;
      return [i.memoizedState, Y];
    }
    function _S(e, t, a) {
      var i = Ii(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var d = l.dispatch, h = l.pending, S = i.memoizedState;
      if (h !== null) {
        l.pending = null;
        var C = h.next, T = C;
        do {
          var R = T.action;
          S = e(S, R), T = T.next;
        } while (T !== C);
        Je(S, i.memoizedState) || gv(), i.memoizedState = S, i.baseQueue === null && (i.baseState = S), l.lastRenderedState = S;
      }
      return [S, d];
    }
    function cj(e, t, a) {
    }
    function fj(e, t, a) {
    }
    function RS(e, t, a) {
      var i = an, l = cl(), d, h = Br();
      if (h) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), Sd || d !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Sd = !0);
      } else {
        if (d = t(), !Sd) {
          var S = t();
          Je(d, S) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Sd = !0);
        }
        var C = Uy();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        cc(C, Lc) || yw(i, t, d);
      }
      l.memoizedState = d;
      var T = {
        value: d,
        getSnapshot: t
      };
      return l.queue = T, cy(Sw.bind(null, i, T, e), [e]), i.flags |= ra, dv(Sr | Vr, gw.bind(null, i, T, d, t), void 0, null), d;
    }
    function oy(e, t, a) {
      var i = an, l = Ii(), d = t();
      if (!Sd) {
        var h = t();
        Je(d, h) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Sd = !0);
      }
      var S = l.memoizedState, C = !Je(S, d);
      C && (l.memoizedState = d, gv());
      var T = l.queue;
      if (vv(Sw.bind(null, i, T, e), [e]), T.getSnapshot !== t || C || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Cr !== null && Cr.memoizedState.tag & Sr) {
        i.flags |= ra, dv(Sr | Vr, gw.bind(null, i, T, d, t), void 0, null);
        var R = Uy();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        cc(R, Lc) || yw(i, t, d);
      }
      return d;
    }
    function yw(e, t, a) {
      e.flags |= Ll;
      var i = {
        getSnapshot: t,
        value: a
      }, l = an.updateQueue;
      if (l === null)
        l = mw(), an.updateQueue = l, l.stores = [i];
      else {
        var d = l.stores;
        d === null ? l.stores = [i] : d.push(i);
      }
    }
    function gw(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Ew(t) && bw(e);
    }
    function Sw(e, t, a) {
      var i = function() {
        Ew(t) && bw(e);
      };
      return a(i);
    }
    function Ew(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Je(a, i);
      } catch {
        return !0;
      }
    }
    function bw(e) {
      var t = ni(e, dt);
      t !== null && _r(t, e, dt, yn);
    }
    function ly(e) {
      var t = cl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: wS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = mO.bind(null, an, a);
      return [t.memoizedState, i];
    }
    function kS(e) {
      return TS(wS);
    }
    function OS(e) {
      return _S(wS);
    }
    function dv(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, d = an.updateQueue;
      if (d === null)
        d = mw(), an.updateQueue = d, d.lastEffect = l.next = l;
      else {
        var h = d.lastEffect;
        if (h === null)
          d.lastEffect = l.next = l;
        else {
          var S = h.next;
          h.next = l, l.next = S, d.lastEffect = l;
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
    function pv(e, t, a, i) {
      var l = cl(), d = i === void 0 ? null : i;
      an.flags |= e, l.memoizedState = dv(Sr | t, a, void 0, d);
    }
    function sy(e, t, a, i) {
      var l = Ii(), d = i === void 0 ? null : i, h = void 0;
      if (br !== null) {
        var S = br.memoizedState;
        if (h = S.destroy, d !== null) {
          var C = S.deps;
          if (CS(d, C)) {
            l.memoizedState = dv(t, a, h, d);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = dv(Sr | t, a, h, d);
    }
    function cy(e, t) {
      return (an.mode & Qa) !== ct ? pv(zl | ra | qo, Vr, e, t) : pv(ra | qo, Vr, e, t);
    }
    function vv(e, t) {
      return sy(ra, Vr, e, t);
    }
    function AS(e, t) {
      return pv(nt, sl, e, t);
    }
    function fy(e, t) {
      return sy(nt, sl, e, t);
    }
    function NS(e, t) {
      var a = nt;
      return a |= Wa, (an.mode & Qa) !== ct && (a |= Ya), pv(a, Er, e, t);
    }
    function dy(e, t) {
      return sy(nt, Er, e, t);
    }
    function Cw(e, t) {
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
      return l |= Wa, (an.mode & Qa) !== ct && (l |= Ya), pv(l, Er, Cw.bind(null, t, e), i);
    }
    function py(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sy(nt, Er, Cw.bind(null, t, e), i);
    }
    function dO(e, t) {
    }
    var vy = dO;
    function LS(e, t) {
      var a = cl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hy(e, t) {
      var a = Ii(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var d = l[1];
        if (CS(i, d))
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
        if (CS(i, d))
          return l[0];
      }
      var h = e();
      return a.memoizedState = [h, i], h;
    }
    function US(e) {
      var t = cl();
      return t.memoizedState = e, e;
    }
    function ww(e) {
      var t = Ii(), a = br, i = a.memoizedState;
      return Tw(t, i, e);
    }
    function xw(e) {
      var t = Ii();
      if (br === null)
        return t.memoizedState = e, e;
      var a = br.memoizedState;
      return Tw(t, a, e);
    }
    function Tw(e, t, a) {
      var i = !Wh(Lc);
      if (i) {
        if (!Je(a, t)) {
          var l = Qh();
          an.lanes = Tt(an.lanes, l), Dv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, gv()), e.memoizedState = a, a;
    }
    function pO(e, t, a) {
      var i = Ka();
      Pn(Ig(i, po)), e(!0);
      var l = sv.transition;
      sv.transition = {};
      var d = sv.transition;
      sv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Pn(i), sv.transition = l, l === null && d._updatedFibers) {
          var h = d._updatedFibers.size;
          h > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function jS() {
      var e = ly(!1), t = e[0], a = e[1], i = pO.bind(null, a), l = cl();
      return l.memoizedState = i, [t, i];
    }
    function _w() {
      var e = kS(), t = e[0], a = Ii(), i = a.memoizedState;
      return [t, i];
    }
    function Rw() {
      var e = OS(), t = e[0], a = Ii(), i = a.memoizedState;
      return [t, i];
    }
    var kw = !1;
    function vO() {
      return kw;
    }
    function PS() {
      var e = cl(), t = Uy(), a = t.identifierPrefix, i;
      if (Br()) {
        var l = kk();
        i = ":" + a + "R" + l;
        var d = fv++;
        d > 0 && (i += "H" + d.toString(32)), i += ":";
      } else {
        var h = sO++;
        i = ":" + a + "r" + h.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function yy() {
      var e = Ii(), t = e.memoizedState;
      return t;
    }
    function hO(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ms(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Ow(e))
        Dw(t, l);
      else {
        var d = qC(e, t, l, i);
        if (d !== null) {
          var h = za();
          _r(d, e, i, h), Aw(d, t, i);
        }
      }
      Nw(e, i);
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
      if (Ow(e))
        Dw(t, l);
      else {
        var d = e.alternate;
        if (e.lanes === se && (d === null || d.lanes === se)) {
          var h = t.lastRenderedReducer;
          if (h !== null) {
            var S;
            S = We.current, We.current = Co;
            try {
              var C = t.lastRenderedState, T = h(C, a);
              if (l.hasEagerState = !0, l.eagerState = T, Je(T, C)) {
                Qk(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              We.current = S;
            }
          }
        }
        var R = qC(e, t, l, i);
        if (R !== null) {
          var $ = za();
          _r(R, e, i, $), Aw(R, t, i);
        }
      }
      Nw(e, i);
    }
    function Ow(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function Dw(e, t) {
      cv = iy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Aw(e, t, a) {
      if (Ep(a)) {
        var i = t.lanes;
        i = Nf(i, e.pendingLanes);
        var l = Tt(i, a);
        t.lanes = l, bp(e, l);
      }
    }
    function Nw(e, t, a) {
      mf(e, t);
    }
    var gy = {
      readContext: pr,
      useCallback: ha,
      useContext: ha,
      useEffect: ha,
      useImperativeHandle: ha,
      useInsertionEffect: ha,
      useLayoutEffect: ha,
      useMemo: ha,
      useReducer: ha,
      useRef: ha,
      useState: ha,
      useDebugValue: ha,
      useDeferredValue: ha,
      useTransition: ha,
      useMutableSource: ha,
      useSyncExternalStore: ha,
      useId: ha,
      unstable_isNewReconciler: ae
    }, Mw = null, Lw = null, zw = null, Uw = null, fl = null, Co = null, Sy = null;
    {
      var FS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ct = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Mw = {
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
          return ce = "useInsertionEffect", Jt(), Ed(t), AS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Jt(), Ed(t), NS(e, t);
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
            return xS(e, t, a);
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
      }, Lw = {
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
          return ce = "useInsertionEffect", je(), AS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", je(), NS(e, t);
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
            return xS(e, t, a);
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
      }, zw = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", je(), hy(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", je(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", je(), vv(e, t);
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
          We.current = Co;
          try {
            return my(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", je();
          var i = We.current;
          We.current = Co;
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
          We.current = Co;
          try {
            return kS(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", je(), vy();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", je(), ww(e);
        },
        useTransition: function() {
          return ce = "useTransition", je(), _w();
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
      }, Uw = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", je(), hy(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", je(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", je(), vv(e, t);
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
            return _S(e, t, a);
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
          return ce = "useDebugValue", je(), vy();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", je(), xw(e);
        },
        useTransition: function() {
          return ce = "useTransition", je(), Rw();
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
          return ce = "useCallback", Ct(), Jt(), LS(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Ct(), Jt(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Ct(), Jt(), cy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Ct(), Jt(), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Ct(), Jt(), AS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Ct(), Jt(), NS(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Ct(), Jt();
          var a = We.current;
          We.current = fl;
          try {
            return zS(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Ct(), Jt();
          var i = We.current;
          We.current = fl;
          try {
            return xS(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Ct(), Jt(), DS(e);
        },
        useState: function(e) {
          ce = "useState", Ct(), Jt();
          var t = We.current;
          We.current = fl;
          try {
            return ly(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Ct(), Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Ct(), Jt(), US(e);
        },
        useTransition: function() {
          return ce = "useTransition", Ct(), Jt(), jS();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Ct(), Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Ct(), Jt(), RS(e, t, a);
        },
        useId: function() {
          return ce = "useId", Ct(), Jt(), PS();
        },
        unstable_isNewReconciler: ae
      }, Co = {
        readContext: function(e) {
          return FS(), pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Ct(), je(), hy(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Ct(), je(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Ct(), je(), vv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Ct(), je(), py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Ct(), je(), fy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Ct(), je(), dy(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Ct(), je();
          var a = We.current;
          We.current = Co;
          try {
            return my(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Ct(), je();
          var i = We.current;
          We.current = Co;
          try {
            return TS(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Ct(), je(), uy();
        },
        useState: function(e) {
          ce = "useState", Ct(), je();
          var t = We.current;
          We.current = Co;
          try {
            return kS(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Ct(), je(), vy();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Ct(), je(), ww(e);
        },
        useTransition: function() {
          return ce = "useTransition", Ct(), je(), _w();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Ct(), je(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Ct(), je(), oy(e, t);
        },
        useId: function() {
          return ce = "useId", Ct(), je(), yy();
        },
        unstable_isNewReconciler: ae
      }, Sy = {
        readContext: function(e) {
          return FS(), pr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Ct(), je(), hy(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Ct(), je(), pr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Ct(), je(), vv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Ct(), je(), py(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Ct(), je(), fy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Ct(), je(), dy(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Ct(), je();
          var a = We.current;
          We.current = Co;
          try {
            return my(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Ct(), je();
          var i = We.current;
          We.current = Co;
          try {
            return _S(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Ct(), je(), uy();
        },
        useState: function(e) {
          ce = "useState", Ct(), je();
          var t = We.current;
          We.current = Co;
          try {
            return OS(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Ct(), je(), vy();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Ct(), je(), xw(e);
        },
        useTransition: function() {
          return ce = "useTransition", Ct(), je(), Rw();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Ct(), je(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Ct(), je(), oy(e, t);
        },
        useId: function() {
          return ce = "useId", Ct(), je(), yy();
        },
        unstable_isNewReconciler: ae
      };
    }
    var ds = f.unstable_now, jw = 0, Ey = -1, hv = -1, by = -1, HS = !1, Cy = !1;
    function Pw() {
      return HS;
    }
    function yO() {
      Cy = !0;
    }
    function gO() {
      HS = !1, Cy = !1;
    }
    function SO() {
      HS = Cy, Cy = !1;
    }
    function Fw() {
      return jw;
    }
    function Hw() {
      jw = ds();
    }
    function $S(e) {
      hv = ds(), e.actualStartTime < 0 && (e.actualStartTime = ds());
    }
    function $w(e) {
      hv = -1;
    }
    function wy(e, t) {
      if (hv >= 0) {
        var a = ds() - hv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), hv = -1;
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
        stack: hu(t),
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
        var i = t.value, l = t.source, d = t.stack, h = d !== null ? d : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === k)
            return;
          console.error(i);
        }
        var S = l ? Et(l) : null, C = S ? "The above error occurred in the <" + S + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === M)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = Et(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var $ = C + `
` + h + `

` + ("" + T);
        console.error($);
      } catch (F) {
        setTimeout(function() {
          throw F;
        });
      }
    }
    var bO = typeof WeakMap == "function" ? WeakMap : Map;
    function Bw(e, t, a) {
      var i = au(yn, a);
      i.tag = Y0, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        pA(l), YS(e, t);
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
          Zx(e), YS(e, t);
        };
      }
      var h = e.stateNode;
      return h !== null && typeof h.componentDidCatch == "function" && (i.callback = function() {
        Zx(e), YS(e, t), typeof l != "function" && fA(this);
        var C = t.value, T = t.stack;
        this.componentDidCatch(C, {
          componentStack: T !== null ? T : ""
        }), typeof l != "function" && (fa(e.lanes, dt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Et(e) || "Unknown"));
      }), i;
    }
    function Vw(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new bO(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var d = vA.bind(null, e, t, a);
        Aa && Av(e, a), t.then(d, d);
      }
    }
    function CO(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        l.add(a);
    }
    function wO(e, t) {
      var a = e.tag;
      if ((e.mode & at) === ct && (a === N || a === Be || a === X)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Iw(e) {
      var t = e;
      do {
        if (t.tag === Ue && lO(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Ww(e, t, a, i, l) {
      if ((e.mode & at) === ct) {
        if (e === t)
          e.flags |= mr;
        else {
          if (e.flags |= bt, a.flags |= sf, a.flags &= ~(Ah | Yo), a.tag === k) {
            var d = a.alternate;
            if (d === null)
              a.tag = De;
            else {
              var h = au(yn, dt);
              h.tag = qm, us(a, h, dt);
            }
          }
          a.lanes = Tt(a.lanes, dt);
        }
        return e;
      }
      return e.flags |= mr, e.lanes = l, e;
    }
    function xO(e, t, a, i, l) {
      if (a.flags |= Yo, Aa && Av(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var d = i;
        wO(a), Br() && a.mode & at && zC();
        var h = Iw(t);
        if (h !== null) {
          h.flags &= ~Fr, Ww(h, t, a, e, l), h.mode & at && Vw(e, d, l), CO(h, e, d);
          return;
        } else {
          if (!Sp(l)) {
            Vw(e, d, l), _E();
            return;
          }
          var S = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = S;
        }
      } else if (Br() && a.mode & at) {
        zC();
        var C = Iw(t);
        if (C !== null) {
          (C.flags & mr) === st && (C.flags |= Fr), Ww(C, t, a, e, l), F0(zc(i, a));
          return;
        }
      }
      i = zc(i, a), rA(i);
      var T = t;
      do {
        switch (T.tag) {
          case M: {
            var R = i;
            T.flags |= mr;
            var $ = Fu(l);
            T.lanes = Tt(T.lanes, $);
            var F = Bw(T, R, $);
            G0(T, F);
            return;
          }
          case k:
            var G = i, K = T.type, ie = T.stateNode;
            if ((T.flags & bt) === st && (typeof K.getDerivedStateFromError == "function" || ie !== null && typeof ie.componentDidCatch == "function" && !Ix(ie))) {
              T.flags |= mr;
              var qe = Fu(l);
              T.lanes = Tt(T.lanes, qe);
              var ft = qS(T, G, qe);
              G0(T, ft);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function TO() {
      return null;
    }
    var mv = p.ReactCurrentOwner, wo = !1, QS, yv, GS, KS, XS, Uc, JS, xy;
    QS = {}, yv = {}, GS = {}, KS = {}, XS = {}, Uc = !1, JS = {}, xy = {};
    function Ma(e, t, a, i) {
      e === null ? t.child = sw(t, null, a, i) : t.child = hd(t, e.child, a, i);
    }
    function _O(e, t, a, i) {
      t.child = hd(t, e.child, null, i), t.child = hd(t, null, a, i);
    }
    function Yw(e, t, a, i, l) {
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
      var h = a.render, S = t.ref, C, T;
      vd(t, l), Au(t);
      {
        if (mv.current = t, hr(!0), C = bd(e, t, h, i, S, l), T = Cd(), t.mode & Un) {
          mn(!0);
          try {
            C = bd(e, t, h, i, S, l), T = Cd();
          } finally {
            mn(!1);
          }
        }
        hr(!1);
      }
      return jl(), e !== null && !wo ? (vw(e, t, l), iu(e, t, l)) : (Br() && T && M0(t), t.flags |= mi, Ma(e, t, C, l), t.child);
    }
    function qw(e, t, a, i, l) {
      if (e === null) {
        var d = a.type;
        if (AA(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var h = d;
          return h = Dd(d), t.tag = X, t.type = h, tE(t, d), Qw(e, t, h, i, l);
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
        var C = jE(a.type, null, i, t, t.mode, l);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var T = a.type, R = T.propTypes;
        R && yo(
          R,
          i,
          // Resolved props
          "prop",
          Ft(T)
        );
      }
      var $ = e.child, F = lE(e, l);
      if (!F) {
        var G = $.memoizedProps, K = a.compare;
        if (K = K !== null ? K : vt, K(G, i) && e.ref === t.ref)
          return iu(e, t, l);
      }
      t.flags |= mi;
      var ie = $c($, i);
      return ie.ref = t.ref, ie.return = t, t.child = ie, ie;
    }
    function Qw(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === ut) {
          var h = d, S = h._payload, C = h._init;
          try {
            d = C(S);
          } catch {
            d = null;
          }
          var T = d && d.propTypes;
          T && yo(
            T,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ft(d)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (vt(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (wo = !1, t.pendingProps = i = R, lE(e, l))
            (e.flags & sf) !== st && (wo = !0);
          else
            return t.lanes = e.lanes, iu(e, t, l);
      }
      return ZS(e, t, a, i, l);
    }
    function Gw(e, t, a) {
      var i = t.pendingProps, l = i.children, d = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || j)
        if ((t.mode & at) === ct) {
          var h = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = h, jy(t, a);
        } else if (fa(a, Na)) {
          var $ = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = $;
          var F = d !== null ? d.baseLanes : a;
          jy(t, F);
        } else {
          var S = null, C;
          if (d !== null) {
            var T = d.baseLanes;
            C = Tt(T, a);
          } else
            C = a;
          t.lanes = t.childLanes = Na;
          var R = {
            baseLanes: C,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, jy(t, C), null;
        }
      else {
        var G;
        d !== null ? (G = Tt(d.baseLanes, a), t.memoizedState = null) : G = a, jy(t, G);
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
    function Kw(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ka, t.flags |= Ni);
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
      var h;
      {
        var S = ud(t, a, !0);
        h = sd(t, S);
      }
      var C, T;
      vd(t, l), Au(t);
      {
        if (mv.current = t, hr(!0), C = bd(e, t, a, i, h, l), T = Cd(), t.mode & Un) {
          mn(!0);
          try {
            C = bd(e, t, a, i, h, l), T = Cd();
          } finally {
            mn(!1);
          }
        }
        hr(!1);
      }
      return jl(), e !== null && !wo ? (vw(e, t, l), iu(e, t, l)) : (Br() && T && M0(t), t.flags |= mi, Ma(e, t, C, l), t.child);
    }
    function Xw(e, t, a, i, l) {
      {
        switch (YA(t)) {
          case !1: {
            var d = t.stateNode, h = t.type, S = new h(t.memoizedProps, d.context), C = S.state;
            d.updater.enqueueSetState(d, C, null);
            break;
          }
          case !0: {
            t.flags |= bt, t.flags |= mr;
            var T = new Error("Simulated error coming from DevTools"), R = Fu(l);
            t.lanes = Tt(t.lanes, R);
            var $ = qS(t, zc(T, t), R);
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
      var G;
      ul(a) ? (G = !0, Um(t)) : G = !1, vd(t, l);
      var K = t.stateNode, ie;
      K === null ? (_y(e, t), aw(t, a, i), lS(t, a, i, l), ie = !0) : e === null ? ie = tO(t, a, i, l) : ie = nO(e, t, a, i, l);
      var qe = eE(e, t, a, ie, G, l);
      {
        var ft = t.stateNode;
        ie && ft.props !== i && (Uc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Et(t) || "a component"), Uc = !0);
      }
      return qe;
    }
    function eE(e, t, a, i, l, d) {
      Kw(e, t);
      var h = (t.flags & bt) !== st;
      if (!i && !h)
        return l && AC(t, a, !1), iu(e, t, d);
      var S = t.stateNode;
      mv.current = t;
      var C;
      if (h && typeof a.getDerivedStateFromError != "function")
        C = null, $w();
      else {
        Au(t);
        {
          if (hr(!0), C = S.render(), t.mode & Un) {
            mn(!0);
            try {
              S.render();
            } finally {
              mn(!1);
            }
          }
          hr(!1);
        }
        jl();
      }
      return t.flags |= mi, e !== null && h ? _O(e, t, C, d) : Ma(e, t, C, d), t.memoizedState = S.state, l && AC(t, a, !0), t.child;
    }
    function Jw(e) {
      var t = e.stateNode;
      t.pendingContext ? OC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && OC(e, t.context, !1), pS(e, t.containerInfo);
    }
    function DO(e, t, a) {
      if (Jw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, d = l.element;
      KC(e, t), Xm(t, i, null, a);
      var h = t.memoizedState;
      t.stateNode;
      var S = h.element;
      if (l.isDehydrated) {
        var C = {
          element: S,
          isDehydrated: !1,
          cache: h.cache,
          pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
          transitions: h.transitions
        }, T = t.updateQueue;
        if (T.baseState = C, t.memoizedState = C, t.flags & Fr) {
          var R = zc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Zw(e, t, S, a, R);
        } else if (S !== d) {
          var $ = zc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Zw(e, t, S, a, $);
        } else {
          Lk(t);
          var F = sw(t, null, S, a);
          t.child = F;
          for (var G = F; G; )
            G.flags = G.flags & ~cn | Ai, G = G.sibling;
        }
      } else {
        if (dd(), S === d)
          return iu(e, t, a);
        Ma(e, t, S, a);
      }
      return t.child;
    }
    function Zw(e, t, a, i, l) {
      return dd(), F0(l), t.flags |= Fr, Ma(e, t, a, i), t.child;
    }
    function AO(e, t, a) {
      fw(t), e === null && P0(t);
      var i = t.type, l = t.pendingProps, d = e !== null ? e.memoizedProps : null, h = l.children, S = S0(i, l);
      return S ? h = null : d !== null && S0(i, d) && (t.flags |= Ia), Kw(e, t), Ma(e, t, h, a), t.child;
    }
    function NO(e, t) {
      return e === null && P0(t), null;
    }
    function MO(e, t, a, i) {
      _y(e, t);
      var l = t.pendingProps, d = a, h = d._payload, S = d._init, C = S(h);
      t.type = C;
      var T = t.tag = NA(C), R = Eo(C, l), $;
      switch (T) {
        case N:
          return tE(t, C), t.type = C = Dd(C), $ = ZS(null, t, C, R, i), $;
        case k:
          return t.type = C = AE(C), $ = Xw(null, t, C, R, i), $;
        case Be:
          return t.type = C = NE(C), $ = Yw(null, t, C, R, i), $;
        case gt: {
          if (t.type !== t.elementType) {
            var F = C.propTypes;
            F && yo(
              F,
              R,
              // Resolved for outer only
              "prop",
              Ft(C)
            );
          }
          return $ = qw(
            null,
            t,
            C,
            Eo(C.type, R),
            // The inner type can have defaults too
            i
          ), $;
        }
      }
      var G = "";
      throw C !== null && typeof C == "object" && C.$$typeof === ut && (G = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + C + ". " + ("Lazy element type must resolve to a class or function." + G));
    }
    function LO(e, t, a, i, l) {
      _y(e, t), t.tag = k;
      var d;
      return ul(a) ? (d = !0, Um(t)) : d = !1, vd(t, l), aw(t, a, i), lS(t, a, i, l), eE(null, t, a, !0, d, l);
    }
    function zO(e, t, a, i) {
      _y(e, t);
      var l = t.pendingProps, d;
      {
        var h = ud(t, a, !1);
        d = sd(t, h);
      }
      vd(t, i);
      var S, C;
      Au(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = Ft(a) || "Unknown";
          QS[T] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), QS[T] = !0);
        }
        t.mode & Un && So.recordLegacyContextWarning(t, null), hr(!0), mv.current = t, S = bd(null, t, a, l, d, i), C = Cd(), hr(!1);
      }
      if (jl(), t.flags |= mi, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var R = Ft(a) || "Unknown";
        yv[R] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), yv[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var $ = Ft(a) || "Unknown";
          yv[$] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", $, $, $), yv[$] = !0);
        }
        t.tag = k, t.memoizedState = null, t.updateQueue = null;
        var F = !1;
        return ul(a) ? (F = !0, Um(t)) : F = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, Q0(t), rw(t, S), lS(t, a, l, i), eE(null, t, a, !0, F, i);
      } else {
        if (t.tag = N, t.mode & Un) {
          mn(!0);
          try {
            S = bd(null, t, a, l, d, i), C = Cd();
          } finally {
            mn(!1);
          }
        }
        return Br() && C && M0(t), Ma(null, t, S, i), tE(t, a), t.child;
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
          var h = Ft(t) || "Unknown";
          KS[h] || (y("%s: Function components do not support getDerivedStateFromProps.", h), KS[h] = !0);
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
        cachePool: TO(),
        transitions: null
      };
    }
    function UO(e, t) {
      var a = null;
      return {
        baseLanes: Tt(e.baseLanes, t),
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
      return mS(e, uv);
    }
    function PO(e, t) {
      return fc(e.childLanes, t);
    }
    function ex(e, t, a) {
      var i = t.pendingProps;
      qA(t) && (t.flags |= bt);
      var l = bo.current, d = !1, h = (t.flags & bt) !== st;
      if (h || jO(l, e) ? (d = !0, t.flags &= ~bt) : (e === null || e.memoizedState !== null) && (l = oO(l, pw)), l = yd(l), cs(t, l), e === null) {
        P0(t);
        var S = t.memoizedState;
        if (S !== null) {
          var C = S.dehydrated;
          if (C !== null)
            return VO(t, C);
        }
        var T = i.children, R = i.fallback;
        if (d) {
          var $ = FO(t, T, R, a), F = t.child;
          return F.memoizedState = rE(a), t.memoizedState = nE, $;
        } else
          return aE(t, T);
      } else {
        var G = e.memoizedState;
        if (G !== null) {
          var K = G.dehydrated;
          if (K !== null)
            return IO(e, t, h, i, K, G, a);
        }
        if (d) {
          var ie = i.fallback, qe = i.children, ft = $O(e, t, qe, ie, a), it = t.child, jt = e.child.memoizedState;
          return it.memoizedState = jt === null ? rE(a) : UO(jt, a), it.childLanes = PO(e, a), t.memoizedState = nE, ft;
        } else {
          var Mt = i.children, W = HO(e, t, Mt, a);
          return t.memoizedState = null, W;
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
      var l = e.mode, d = e.child, h = {
        mode: "hidden",
        children: t
      }, S, C;
      return (l & at) === ct && d !== null ? (S = d, S.childLanes = se, S.pendingProps = h, e.mode & Bt && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), C = gs(a, l, i, null)) : (S = iE(h, l), C = gs(a, l, i, null)), S.return = e, C.return = e, S.sibling = C, e.child = S, C;
    }
    function iE(e, t, a) {
      return t1(e, t, se, null);
    }
    function tx(e, t) {
      return $c(e, t);
    }
    function HO(e, t, a, i) {
      var l = e.child, d = l.sibling, h = tx(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & at) === ct && (h.lanes = i), h.return = t, h.sibling = null, d !== null) {
        var S = t.deletions;
        S === null ? (t.deletions = [d], t.flags |= It) : S.push(d);
      }
      return t.child = h, h;
    }
    function $O(e, t, a, i, l) {
      var d = t.mode, h = e.child, S = h.sibling, C = {
        mode: "hidden",
        children: a
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & at) === ct && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== h
      ) {
        var R = t.child;
        T = R, T.childLanes = se, T.pendingProps = C, t.mode & Bt && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = h.selfBaseDuration, T.treeBaseDuration = h.treeBaseDuration), t.deletions = null;
      } else
        T = tx(h, C), T.subtreeFlags = h.subtreeFlags & yr;
      var $;
      return S !== null ? $ = $c(S, i) : ($ = gs(i, d, l, null), $.flags |= cn), $.return = t, T.return = t, T.sibling = $, t.child = T, $;
    }
    function Ty(e, t, a, i) {
      i !== null && F0(i), hd(t, e.child, null, a);
      var l = t.pendingProps, d = l.children, h = aE(t, d);
      return h.flags |= cn, t.memoizedState = null, h;
    }
    function BO(e, t, a, i, l) {
      var d = t.mode, h = {
        mode: "visible",
        children: a
      }, S = iE(h, d), C = gs(i, d, l, null);
      return C.flags |= cn, S.return = t, C.return = t, S.sibling = C, t.child = S, (t.mode & at) !== ct && hd(t, e.child, null, l), C;
    }
    function VO(e, t, a) {
      return (e.mode & at) === ct ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = dt) : w0(t) ? e.lanes = jn : e.lanes = Na, null;
    }
    function IO(e, t, a, i, l, d, h) {
      if (a)
        if (t.flags & Fr) {
          t.flags &= ~Fr;
          var W = WS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Ty(e, t, h, W);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= bt, null;
          var oe = i.children, Y = i.fallback, Ee = BO(e, t, oe, Y, h), Qe = t.child;
          return Qe.memoizedState = rE(h), t.memoizedState = nE, Ee;
        }
      else {
        if (Nk(), (t.mode & at) === ct)
          return Ty(
            e,
            t,
            h,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (w0(l)) {
          var S, C, T;
          {
            var R = GR(l);
            S = R.digest, C = R.message, T = R.stack;
          }
          var $;
          C ? $ = new Error(C) : $ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var F = WS($, S, T);
          return Ty(e, t, h, F);
        }
        var G = fa(h, e.childLanes);
        if (wo || G) {
          var K = Uy();
          if (K !== null) {
            var ie = Xh(K, h);
            if (ie !== In && ie !== d.retryLane) {
              d.retryLane = ie;
              var qe = yn;
              ni(e, ie), _r(K, e, ie, qe);
            }
          }
          _E();
          var ft = WS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Ty(e, t, h, ft);
        } else if (wC(l)) {
          t.flags |= bt, t.child = e.child;
          var it = hA.bind(null, e);
          return KR(l, it), null;
        } else {
          zk(t, l, d.treeContext);
          var jt = i.children, Mt = aE(t, jt);
          return Mt.flags |= Ai, Mt;
        }
      }
    }
    function nx(e, t, a) {
      e.lanes = Tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Tt(i.lanes, t)), I0(e.return, t, a);
    }
    function WO(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ue) {
          var l = i.memoizedState;
          l !== null && nx(i, a, e);
        } else if (i.tag === Ce)
          nx(i, a, e);
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
      e !== void 0 && !xy[e] && (e !== "collapsed" && e !== "hidden" ? (xy[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (xy[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function rx(e, t) {
      {
        var a = Ht(e), i = !a && typeof Ti(e) == "function";
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
            if (!rx(e[a], a))
              return;
        } else {
          var i = Ti(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var d = l.next(), h = 0; !d.done; d = l.next()) {
                if (!rx(d.value, h))
                  return;
                h++;
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
    function ax(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, d = i.tail, h = i.children;
      qO(l), QO(d, l), GO(h, l), Ma(e, t, h, a);
      var S = bo.current, C = mS(S, uv);
      if (C)
        S = yS(S, uv), t.flags |= bt;
      else {
        var T = e !== null && (e.flags & bt) !== st;
        T && WO(t, t.child, a), S = yd(S);
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
            var F = null, G = t.child;
            for (t.child = null; G !== null; ) {
              var K = G.alternate;
              if (K !== null && ay(K) === null) {
                t.child = G;
                break;
              }
              var ie = G.sibling;
              G.sibling = F, F = G, G = ie;
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
      return e === null ? t.child = hd(t, null, i, a) : Ma(e, t, i, a), t.child;
    }
    var ix = !1;
    function XO(e, t, a) {
      var i = t.type, l = i._context, d = t.pendingProps, h = t.memoizedProps, S = d.value;
      {
        "value" in d || ix || (ix = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var C = t.type.propTypes;
        C && yo(C, d, "prop", "Context.Provider");
      }
      if (YC(t, l, S), h !== null) {
        var T = h.value;
        if (Je(T, S)) {
          if (h.children === d.children && !Lm())
            return iu(e, t, a);
        } else
          Wk(t, l, a);
      }
      var R = d.children;
      return Ma(e, t, R, a), t.child;
    }
    var ox = !1;
    function JO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (ox || (ox = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, d = l.children;
      typeof d != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), vd(t, a);
      var h = pr(i);
      Au(t);
      var S;
      return mv.current = t, hr(!0), S = d(h), hr(!1), jl(), t.flags |= mi, Ma(e, t, S, a), t.child;
    }
    function gv() {
      wo = !0;
    }
    function _y(e, t) {
      (t.mode & at) === ct && e !== null && (e.alternate = null, t.alternate = null, t.flags |= cn);
    }
    function iu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), $w(), Dv(t.lanes), fa(a, t.childLanes) ? (rO(e, t), t.child) : null;
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
          Jw(t), t.stateNode, dd();
          break;
        case B:
          fw(t);
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
          YC(t, d, l);
          break;
        }
        case ue:
          {
            var h = fa(a, t.childLanes);
            h && (t.flags |= nt);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case Ue: {
          var C = t.memoizedState;
          if (C !== null) {
            if (C.dehydrated !== null)
              return cs(t, yd(bo.current)), t.flags |= bt, null;
            var T = t.child, R = T.childLanes;
            if (fa(a, R))
              return ex(e, t, a);
            cs(t, yd(bo.current));
            var $ = iu(e, t, a);
            return $ !== null ? $.sibling : null;
          } else
            cs(t, yd(bo.current));
          break;
        }
        case Ce: {
          var F = (e.flags & bt) !== st, G = fa(a, t.childLanes);
          if (F) {
            if (G)
              return ax(e, t, a);
            t.flags |= bt;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), cs(t, bo.current), G)
            break;
          return null;
        }
        case le:
        case re:
          return t.lanes = se, Gw(e, t, a);
      }
      return iu(e, t, a);
    }
    function lx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ZO(e, t, jE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Lm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          wo = !0;
        else {
          var d = lE(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & bt) === st)
            return wo = !1, eD(e, t, a);
          (e.flags & sf) !== st ? wo = !0 : wo = !1;
        }
      } else if (wo = !1, Br() && _k(t)) {
        var h = t.index, S = Rk();
        LC(t, S, h);
      }
      switch (t.lanes = se, t.tag) {
        case D:
          return zO(e, t, t.type, a);
        case Te: {
          var C = t.elementType;
          return MO(e, t, C, a);
        }
        case N: {
          var T = t.type, R = t.pendingProps, $ = t.elementType === T ? R : Eo(T, R);
          return ZS(e, t, T, $, a);
        }
        case k: {
          var F = t.type, G = t.pendingProps, K = t.elementType === F ? G : Eo(F, G);
          return Xw(e, t, F, K, a);
        }
        case M:
          return DO(e, t, a);
        case B:
          return AO(e, t, a);
        case ee:
          return NO(e, t);
        case Ue:
          return ex(e, t, a);
        case I:
          return KO(e, t, a);
        case Be: {
          var ie = t.type, qe = t.pendingProps, ft = t.elementType === ie ? qe : Eo(ie, qe);
          return Yw(e, t, ie, ft, a);
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
            var W = it.propTypes;
            W && yo(
              W,
              Mt,
              // Resolved for outer only
              "prop",
              Ft(it)
            );
          }
          return Mt = Eo(it.type, Mt), qw(e, t, it, Mt, a);
        }
        case X:
          return Qw(e, t, t.type, t.pendingProps, a);
        case De: {
          var oe = t.type, Y = t.pendingProps, Ee = t.elementType === oe ? Y : Eo(oe, Y);
          return LO(e, t, oe, Ee, a);
        }
        case Ce:
          return ax(e, t, a);
        case Ae:
          break;
        case le:
          return Gw(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function wd(e) {
      e.flags |= nt;
    }
    function ux(e) {
      e.flags |= ka, e.flags |= Ni;
    }
    var sx, uE, cx, fx;
    sx = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === B || l.tag === ee)
          wR(e, l.stateNode);
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
    }, cx = function(e, t, a, i, l) {
      var d = e.memoizedProps;
      if (d !== i) {
        var h = t.stateNode, S = vS(), C = TR(h, a, d, i, l, S);
        t.updateQueue = C, C && wd(t);
      }
    }, fx = function(e, t, a, i) {
      a !== i && wd(t);
    };
    function Sv(e, t) {
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
          for (var C = e.selfBaseDuration, T = e.child; T !== null; )
            a = Tt(a, Tt(T.lanes, T.childLanes)), i |= T.subtreeFlags & yr, i |= T.flags & yr, C += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = C;
        } else
          for (var R = e.child; R !== null; )
            a = Tt(a, Tt(R.lanes, R.childLanes)), i |= R.subtreeFlags & yr, i |= R.flags & yr, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Bt) !== ct) {
          for (var l = e.actualDuration, d = e.selfBaseDuration, h = e.child; h !== null; )
            a = Tt(a, Tt(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, l += h.actualDuration, d += h.treeBaseDuration, h = h.sibling;
          e.actualDuration = l, e.treeBaseDuration = d;
        } else
          for (var S = e.child; S !== null; )
            a = Tt(a, Tt(S.lanes, S.childLanes)), i |= S.subtreeFlags, i |= S.flags, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function tD(e, t, a) {
      if (Hk() && (t.mode & at) !== ct && (t.flags & bt) === st)
        return $C(t), dd(), t.flags |= Fr | Yo | mr, !1;
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
            var h = a !== null;
            if (h) {
              var S = t.child;
              S !== null && (t.treeBaseDuration -= S.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return BC(), !0;
    }
    function dx(e, t, a) {
      var i = t.pendingProps;
      switch (L0(t), t.tag) {
        case D:
        case Te:
        case X:
        case N:
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
            var h = $m(t);
            if (h)
              wd(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Fr) !== st) && (t.flags |= Zn, BC());
            }
          }
          return uE(e, t), Ir(t), null;
        }
        case B: {
          hS(t);
          var C = cw(), T = t.type;
          if (e !== null && t.stateNode != null)
            cx(e, t, T, i, C), e.ref !== t.ref && ux(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ir(t), null;
            }
            var R = vS(), $ = $m(t);
            if ($)
              Uk(t, C, R) && wd(t);
            else {
              var F = CR(T, i, C, R, t);
              sx(F, t, !1, !1), t.stateNode = F, xR(F, T, i, C) && wd(t);
            }
            t.ref !== null && ux(t);
          }
          return Ir(t), null;
        }
        case ee: {
          var G = i;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            fx(e, t, K, G);
          } else {
            if (typeof G != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ie = cw(), qe = vS(), ft = $m(t);
            ft ? jk(t) && wd(t) : t.stateNode = _R(G, ie, qe, t);
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
          var Mt = it !== null, W = e !== null && e.memoizedState !== null;
          if (Mt !== W && Mt) {
            var oe = t.child;
            if (oe.flags |= Wo, (t.mode & at) !== ct) {
              var Y = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !J);
              Y || mS(bo.current, pw) ? nA() : _E();
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
        case Ce: {
          gd(t);
          var xt = t.memoizedState;
          if (xt === null)
            return Ir(t), null;
          var on = (t.flags & bt) !== st, Yt = xt.rendering;
          if (Yt === null)
            if (on)
              Sv(xt, !1);
            else {
              var lr = aA() && (e === null || (e.flags & bt) === st);
              if (!lr)
                for (var qt = t.child; qt !== null; ) {
                  var tr = ay(qt);
                  if (tr !== null) {
                    on = !0, t.flags |= bt, Sv(xt, !1);
                    var ma = tr.updateQueue;
                    return ma !== null && (t.updateQueue = ma, t.flags |= nt), t.subtreeFlags = st, aO(t, a), cs(t, yS(bo.current, uv)), t.child;
                  }
                  qt = qt.sibling;
                }
              xt.tail !== null && er() > Mx() && (t.flags |= bt, on = !0, Sv(xt, !1), t.lanes = yp);
            }
          else {
            if (!on) {
              var Gr = ay(Yt);
              if (Gr !== null) {
                t.flags |= bt, on = !0;
                var Ei = Gr.updateQueue;
                if (Ei !== null && (t.updateQueue = Ei, t.flags |= nt), Sv(xt, !0), xt.tail === null && xt.tailMode === "hidden" && !Yt.alternate && !Br())
                  return Ir(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                er() * 2 - xt.renderingStartTime > Mx() && a !== Na && (t.flags |= bt, on = !0, Sv(xt, !1), t.lanes = yp);
            }
            if (xt.isBackwards)
              Yt.sibling = t.child, t.child = Yt;
            else {
              var Ua = xt.last;
              Ua !== null ? Ua.sibling = Yt : t.child = Yt, xt.last = Yt;
            }
          }
          if (xt.tail !== null) {
            var ja = xt.tail;
            xt.rendering = ja, xt.tail = ja.sibling, xt.renderingStartTime = er(), ja.sibling = null;
            var ya = bo.current;
            return on ? ya = yS(ya, uv) : ya = yd(ya), cs(t, ya), ja;
          }
          return Ir(t), null;
        }
        case Ae:
          break;
        case le:
        case re: {
          TE(t);
          var cu = t.memoizedState, Ad = cu !== null;
          if (e !== null) {
            var zv = e.memoizedState, ml = zv !== null;
            ml !== Ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !j && (t.flags |= Wo);
          }
          return !Ad || (t.mode & at) === ct ? Ir(t) : fa(hl, Na) && (Ir(t), t.subtreeFlags & (cn | nt) && (t.flags |= Wo)), null;
        }
        case he:
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
          return hS(t), null;
        case Ue: {
          gd(t);
          var h = t.memoizedState;
          if (h !== null && h.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            dd();
          }
          var S = t.flags;
          return S & mr ? (t.flags = S & ~mr | bt, (t.mode & Bt) !== ct && IS(t), t) : null;
        }
        case Ce:
          return gd(t), null;
        case I:
          return md(t), null;
        case ze:
          var C = t.type._context;
          return V0(C, t), null;
        case le:
        case re:
          return TE(t), null;
        case he:
          return null;
        default:
          return null;
      }
    }
    function px(e, t, a) {
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
          hS(t);
          break;
        }
        case I:
          md(t);
          break;
        case Ue:
          gd(t);
          break;
        case Ce:
          gd(t);
          break;
        case ze:
          var l = t.type._context;
          V0(l, t);
          break;
        case le:
        case re:
          TE(t);
          break;
      }
    }
    var vx = null;
    vx = /* @__PURE__ */ new Set();
    var Ry = !1, Wr = !1, rD = typeof WeakSet == "function" ? WeakSet : Set, Ze = null, xd = null, Td = null;
    function aD(e) {
      hi(null, function() {
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
    function hx(e, t) {
      try {
        ps(Er, e);
      } catch (a) {
        wn(e, t, a);
      }
    }
    function sE(e, t, a) {
      try {
        iD(e, a);
      } catch (i) {
        wn(e, t, i);
      }
    }
    function oD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        wn(e, t, i);
      }
    }
    function mx(e, t) {
      try {
        gx(e);
      } catch (a) {
        wn(e, t, a);
      }
    }
    function _d(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Pe && Ne && e.mode & Bt)
              try {
                pl(), i = a(null);
              } finally {
                dl(e);
              }
            else
              i = a(null);
          } catch (l) {
            wn(e, t, l);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Et(e));
        } else
          a.current = null;
    }
    function ky(e, t, a) {
      try {
        a();
      } catch (i) {
        wn(e, t, i);
      }
    }
    var yx = !1;
    function lD(e, t) {
      ER(e.containerInfo), Ze = t, uD();
      var a = yx;
      return yx = !1, a;
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
          wn(e, e.return, a);
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
          case N:
          case Be:
          case X:
            break;
          case k: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !Uc && (d.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(e) || "instance"), d.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(e) || "instance"));
              var h = d.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Eo(e.type, i), l);
              {
                var S = vx;
                h === void 0 && !S.has(e.type) && (S.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Et(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          }
          case M: {
            {
              var C = e.stateNode;
              WR(C.containerInfo);
            }
            break;
          }
          case B:
          case ee:
          case I:
          case De:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Sn();
      }
    }
    function xo(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var d = l.next, h = d;
        do {
          if ((h.tag & e) === e) {
            var S = h.destroy;
            h.destroy = void 0, S !== void 0 && ((e & Vr) !== ri ? jh(t) : (e & Er) !== ri && Nu(t), (e & sl) !== ri && Nv(!0), ky(t, a, S), (e & sl) !== ri && Nv(!1), (e & Vr) !== ri ? Ph() : (e & Er) !== ri && ec());
          }
          h = h.next;
        } while (h !== d);
      }
    }
    function ps(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, d = l;
        do {
          if ((d.tag & e) === e) {
            (e & Vr) !== ri ? pp(t) : (e & Er) !== ri && Fh(t);
            var h = d.create;
            (e & sl) !== ri && Nv(!0), d.destroy = h(), (e & sl) !== ri && Nv(!1), (e & Vr) !== ri ? hf() : (e & Er) !== ri && vp();
            {
              var S = d.destroy;
              if (S !== void 0 && typeof S != "function") {
                var C = void 0;
                (d.tag & Er) !== st ? C = "useLayoutEffect" : (d.tag & sl) !== st ? C = "useInsertionEffect" : C = "useEffect";
                var T = void 0;
                S === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof S.then == "function" ? T = `

It looks like you wrote ` + C + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + C + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + S, y("%s must not return anything besides a function, which is used for clean-up.%s", C, T);
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
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, d = i.onPostCommit, h = Fw(), S = t.alternate === null ? "mount" : "update";
            Pw() && (S = "nested-update"), typeof d == "function" && d(l, S, a, h);
            var C = t.return;
            e:
              for (; C !== null; ) {
                switch (C.tag) {
                  case M:
                    var T = C.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                  case ue:
                    var R = C.stateNode;
                    R.passiveEffectDuration += a;
                    break e;
                }
                C = C.return;
              }
            break;
          }
        }
    }
    function dD(e, t, a, i) {
      if ((a.flags & yi) !== st)
        switch (a.tag) {
          case N:
          case Be:
          case X: {
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
                var d = a.elementType === a.type ? t.memoizedProps : Eo(a.type, t.memoizedProps), h = t.memoizedState;
                if (a.type === a.elementType && !Uc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(a) || "instance")), a.mode & Bt)
                  try {
                    pl(), l.componentDidUpdate(d, h, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    dl(a);
                  }
                else
                  l.componentDidUpdate(d, h, l.__reactInternalSnapshotBeforeUpdate);
              }
            var S = a.updateQueue;
            S !== null && (a.type === a.elementType && !Uc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(a) || "instance")), JC(a, S, l));
            break;
          }
          case M: {
            var C = a.updateQueue;
            if (C !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case B:
                    T = a.child.stateNode;
                    break;
                  case k:
                    T = a.child.stateNode;
                    break;
                }
              JC(a, C, T);
            }
            break;
          }
          case B: {
            var R = a.stateNode;
            if (t === null && a.flags & nt) {
              var $ = a.type, F = a.memoizedProps;
              AR(R, $, F);
            }
            break;
          }
          case ee:
            break;
          case I:
            break;
          case ue: {
            {
              var G = a.memoizedProps, K = G.onCommit, ie = G.onRender, qe = a.stateNode.effectDuration, ft = Fw(), it = t === null ? "mount" : "update";
              Pw() && (it = "nested-update"), typeof ie == "function" && ie(a.memoizedProps.id, it, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ft);
              {
                typeof K == "function" && K(a.memoizedProps.id, it, qe, ft), sA(a);
                var jt = a.return;
                e:
                  for (; jt !== null; ) {
                    switch (jt.tag) {
                      case M:
                        var Mt = jt.stateNode;
                        Mt.effectDuration += qe;
                        break e;
                      case ue:
                        var W = jt.stateNode;
                        W.effectDuration += qe;
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
          case Ce:
          case De:
          case Ae:
          case le:
          case re:
          case pe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || a.flags & ka && gx(a);
    }
    function pD(e) {
      switch (e.tag) {
        case N:
        case Be:
        case X: {
          if (e.mode & Bt)
            try {
              pl(), hx(e, e.return);
            } finally {
              dl(e);
            }
          else
            hx(e, e.return);
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && oD(e, e.return, t), mx(e, e.return);
          break;
        }
        case B: {
          mx(e, e.return);
          break;
        }
      }
    }
    function vD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === B) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? $R(l) : VR(i.stateNode, i.memoizedProps);
            } catch (h) {
              wn(e, e.return, h);
            }
          }
        } else if (i.tag === ee) {
          if (a === null)
            try {
              var d = i.stateNode;
              t ? BR(d) : IR(d, i.memoizedProps);
            } catch (h) {
              wn(e, e.return, h);
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
    function gx(e) {
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
    function hD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Sx(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Sx(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === B) {
          var a = e.stateNode;
          a !== null && Ck(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function mD(e) {
      for (var t = e.return; t !== null; ) {
        if (Ex(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ex(e) {
      return e.tag === B || e.tag === M || e.tag === I;
    }
    function bx(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Ex(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== B && t.tag !== ee && t.tag !== _e; ) {
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
          t.flags & Ia && (CC(a), t.flags &= ~Ia);
          var i = bx(e);
          fE(e, i, a);
          break;
        }
        case M:
        case I: {
          var l = t.stateNode.containerInfo, d = bx(e);
          cE(e, d, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function cE(e, t, a) {
      var i = e.tag, l = i === B || i === ee;
      if (l) {
        var d = e.stateNode;
        t ? jR(a, d, t) : zR(a, d);
      } else if (i !== I) {
        var h = e.child;
        if (h !== null) {
          cE(h, t, a);
          for (var S = h.sibling; S !== null; )
            cE(S, t, a), S = S.sibling;
        }
      }
    }
    function fE(e, t, a) {
      var i = e.tag, l = i === B || i === ee;
      if (l) {
        var d = e.stateNode;
        t ? UR(a, d, t) : LR(a, d);
      } else if (i !== I) {
        var h = e.child;
        if (h !== null) {
          fE(h, t, a);
          for (var S = h.sibling; S !== null; )
            fE(S, t, a), S = S.sibling;
        }
      }
    }
    var Yr = null, To = !1;
    function gD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case B: {
                Yr = i.stateNode, To = !1;
                break e;
              }
              case M: {
                Yr = i.stateNode.containerInfo, To = !0;
                break e;
              }
              case I: {
                Yr = i.stateNode.containerInfo, To = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Yr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Cx(e, t, a), Yr = null, To = !1;
      }
      hD(a);
    }
    function vs(e, t, a) {
      for (var i = a.child; i !== null; )
        Cx(e, t, i), i = i.sibling;
    }
    function Cx(e, t, a) {
      switch (zh(a), a.tag) {
        case B:
          Wr || _d(a, t);
        case ee: {
          {
            var i = Yr, l = To;
            Yr = null, vs(e, t, a), Yr = i, To = l, Yr !== null && (To ? FR(Yr, a.stateNode) : PR(Yr, a.stateNode));
          }
          return;
        }
        case _e: {
          Yr !== null && (To ? HR(Yr, a.stateNode) : C0(Yr, a.stateNode));
          return;
        }
        case I: {
          {
            var d = Yr, h = To;
            Yr = a.stateNode.containerInfo, To = !0, vs(e, t, a), Yr = d, To = h;
          }
          return;
        }
        case N:
        case Be:
        case gt:
        case X: {
          if (!Wr) {
            var S = a.updateQueue;
            if (S !== null) {
              var C = S.lastEffect;
              if (C !== null) {
                var T = C.next, R = T;
                do {
                  var $ = R, F = $.destroy, G = $.tag;
                  F !== void 0 && ((G & sl) !== ri ? ky(a, t, F) : (G & Er) !== ri && (Nu(a), a.mode & Bt ? (pl(), ky(a, t, F), dl(a)) : ky(a, t, F), ec())), R = R.next;
                } while (R !== T);
              }
            }
          }
          vs(e, t, a);
          return;
        }
        case k: {
          if (!Wr) {
            _d(a, t);
            var K = a.stateNode;
            typeof K.componentWillUnmount == "function" && sE(a, t, K);
          }
          vs(e, t, a);
          return;
        }
        case Ae: {
          vs(e, t, a);
          return;
        }
        case le: {
          if (
            // TODO: Remove this dead flag
            a.mode & at
          ) {
            var ie = Wr;
            Wr = ie || a.memoizedState !== null, vs(e, t, a), Wr = ie;
          } else
            vs(e, t, a);
          break;
        }
        default: {
          vs(e, t, a);
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
    function wx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new rD()), t.forEach(function(i) {
          var l = mA.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Aa)
              if (xd !== null && Td !== null)
                Av(Td, xd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function bD(e, t, a) {
      xd = a, Td = e, kn(t), xx(t, e), kn(t), xd = null, Td = null;
    }
    function _o(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var d = i[l];
          try {
            gD(e, t, d);
          } catch (C) {
            wn(d, t, C);
          }
        }
      var h = Ns();
      if (t.subtreeFlags & ia)
        for (var S = t.child; S !== null; )
          kn(S), xx(S, e), S = S.sibling;
      kn(h);
    }
    function xx(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case N:
        case Be:
        case gt:
        case X: {
          if (_o(t, e), vl(e), l & nt) {
            try {
              xo(sl | Sr, e, e.return), ps(sl | Sr, e);
            } catch (yt) {
              wn(e, e.return, yt);
            }
            if (e.mode & Bt) {
              try {
                pl(), xo(Er | Sr, e, e.return);
              } catch (yt) {
                wn(e, e.return, yt);
              }
              dl(e);
            } else
              try {
                xo(Er | Sr, e, e.return);
              } catch (yt) {
                wn(e, e.return, yt);
              }
          }
          return;
        }
        case k: {
          _o(t, e), vl(e), l & ka && i !== null && _d(i, i.return);
          return;
        }
        case B: {
          _o(t, e), vl(e), l & ka && i !== null && _d(i, i.return);
          {
            if (e.flags & Ia) {
              var d = e.stateNode;
              try {
                CC(d);
              } catch (yt) {
                wn(e, e.return, yt);
              }
            }
            if (l & nt) {
              var h = e.stateNode;
              if (h != null) {
                var S = e.memoizedProps, C = i !== null ? i.memoizedProps : S, T = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    NR(h, R, T, C, S, e);
                  } catch (yt) {
                    wn(e, e.return, yt);
                  }
              }
            }
          }
          return;
        }
        case ee: {
          if (_o(t, e), vl(e), l & nt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var $ = e.stateNode, F = e.memoizedProps, G = i !== null ? i.memoizedProps : F;
            try {
              MR($, G, F);
            } catch (yt) {
              wn(e, e.return, yt);
            }
          }
          return;
        }
        case M: {
          if (_o(t, e), vl(e), l & nt && i !== null) {
            var K = i.memoizedState;
            if (K.isDehydrated)
              try {
                ak(t.containerInfo);
              } catch (yt) {
                wn(e, e.return, yt);
              }
          }
          return;
        }
        case I: {
          _o(t, e), vl(e);
          return;
        }
        case Ue: {
          _o(t, e), vl(e);
          var ie = e.child;
          if (ie.flags & Wo) {
            var qe = ie.stateNode, ft = ie.memoizedState, it = ft !== null;
            if (qe.isHidden = it, it) {
              var jt = ie.alternate !== null && ie.alternate.memoizedState !== null;
              jt || tA();
            }
          }
          if (l & nt) {
            try {
              SD(e);
            } catch (yt) {
              wn(e, e.return, yt);
            }
            wx(e);
          }
          return;
        }
        case le: {
          var Mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & at
          ) {
            var W = Wr;
            Wr = W || Mt, _o(t, e), Wr = W;
          } else
            _o(t, e);
          if (vl(e), l & Wo) {
            var oe = e.stateNode, Y = e.memoizedState, Ee = Y !== null, Qe = e;
            if (oe.isHidden = Ee, Ee && !Mt && (Qe.mode & at) !== ct) {
              Ze = Qe;
              for (var Ve = Qe.child; Ve !== null; )
                Ze = Ve, wD(Ve), Ve = Ve.sibling;
            }
            vD(Qe, Ee);
          }
          return;
        }
        case Ce: {
          _o(t, e), vl(e), l & nt && wx(e);
          return;
        }
        case Ae:
          return;
        default: {
          _o(t, e), vl(e);
          return;
        }
      }
    }
    function vl(e) {
      var t = e.flags;
      if (t & cn) {
        try {
          yD(e);
        } catch (a) {
          wn(e, e.return, a);
        }
        e.flags &= ~cn;
      }
      t & Ai && (e.flags &= ~Ai);
    }
    function CD(e, t, a) {
      xd = a, Td = t, Ze = e, Tx(e, t, a), xd = null, Td = null;
    }
    function Tx(e, t, a) {
      for (var i = (e.mode & at) !== ct; Ze !== null; ) {
        var l = Ze, d = l.child;
        if (l.tag === le && i) {
          var h = l.memoizedState !== null, S = h || Ry;
          if (S) {
            dE(e, t, a);
            continue;
          } else {
            var C = l.alternate, T = C !== null && C.memoizedState !== null, R = T || Wr, $ = Ry, F = Wr;
            Ry = S, Wr = R, Wr && !F && (Ze = l, xD(l));
            for (var G = d; G !== null; )
              Ze = G, Tx(
                G,
                // New root; bubble back up to here and stop.
                t,
                a
              ), G = G.sibling;
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
          } catch (h) {
            wn(i, i.return, h);
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
    function wD(e) {
      for (; Ze !== null; ) {
        var t = Ze, a = t.child;
        switch (t.tag) {
          case N:
          case Be:
          case gt:
          case X: {
            if (t.mode & Bt)
              try {
                pl(), xo(Er, t, t.return);
              } finally {
                dl(t);
              }
            else
              xo(Er, t, t.return);
            break;
          }
          case k: {
            _d(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && sE(t, t.return, i);
            break;
          }
          case B: {
            _d(t, t.return);
            break;
          }
          case le: {
            var l = t.memoizedState !== null;
            if (l) {
              _x(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ze = a) : _x(e);
      }
    }
    function _x(e) {
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
    function xD(e) {
      for (; Ze !== null; ) {
        var t = Ze, a = t.child;
        if (t.tag === le) {
          var i = t.memoizedState !== null;
          if (i) {
            Rx(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ze = a) : Rx(e);
      }
    }
    function Rx(e) {
      for (; Ze !== null; ) {
        var t = Ze;
        kn(t);
        try {
          pD(t);
        } catch (i) {
          wn(t, t.return, i);
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
    function TD(e, t, a, i) {
      Ze = t, _D(t, e, a, i);
    }
    function _D(e, t, a, i) {
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
          } catch (h) {
            wn(l, l.return, h);
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
        case N:
        case Be:
        case X: {
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
                var h = d.child;
                if (h !== null) {
                  d.child = null;
                  do {
                    var S = h.sibling;
                    h.sibling = null, h = S;
                  } while (h !== null);
                }
              }
            }
            Ze = e;
          }
        }
        (e.subtreeFlags & oa) !== st && t !== null ? (t.return = e, Ze = t) : AD();
      }
    }
    function AD() {
      for (; Ze !== null; ) {
        var e = Ze;
        (e.flags & ra) !== st && (kn(e), ND(e), Sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ze = t;
          return;
        }
        Ze = e.return;
      }
    }
    function ND(e) {
      switch (e.tag) {
        case N:
        case Be:
        case X: {
          e.mode & Bt ? (VS(), xo(Vr | Sr, e, e.return), BS(e)) : xo(Vr | Sr, e, e.return);
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
        if (Sx(t), t === e) {
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
        case N:
        case Be:
        case X: {
          e.mode & Bt ? (VS(), xo(Vr, e, t), BS(e)) : xo(Vr, e, t);
          break;
        }
      }
    }
    function UD(e) {
      switch (e.tag) {
        case N:
        case Be:
        case X: {
          try {
            ps(Er | Sr, e);
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
      }
    }
    function jD(e) {
      switch (e.tag) {
        case N:
        case Be:
        case X: {
          try {
            ps(Vr | Sr, e);
          } catch (t) {
            wn(e, e.return, t);
          }
          break;
        }
      }
    }
    function PD(e) {
      switch (e.tag) {
        case N:
        case Be:
        case X: {
          try {
            xo(Er | Sr, e, e.return);
          } catch (a) {
            wn(e, e.return, a);
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
        case N:
        case Be:
        case X:
          try {
            xo(Vr | Sr, e, e.return);
          } catch (t) {
            wn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ev = Symbol.for;
      Ev("selector.component"), Ev("selector.has_pseudo_class"), Ev("selector.role"), Ev("selector.test_id"), Ev("selector.text");
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
    function kx() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && BD.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ID = Math.ceil, pE = p.ReactCurrentDispatcher, vE = p.ReactCurrentOwner, qr = p.ReactCurrentBatchConfig, Ro = p.ReactCurrentActQueue, wr = (
      /*             */
      0
    ), Ox = (
      /*               */
      1
    ), Qr = (
      /*                */
      2
    ), Wi = (
      /*                */
      4
    ), ou = 0, bv = 1, jc = 2, Oy = 3, Cv = 4, Dx = 5, hE = 6, Ut = wr, La = null, Qn = null, xr = se, hl = se, mE = as(se), Tr = ou, wv = null, Dy = se, xv = se, Ay = se, Tv = null, ai = null, yE = 0, Ax = 500, Nx = 1 / 0, WD = 500, lu = null;
    function _v() {
      Nx = er() + WD;
    }
    function Mx() {
      return Nx;
    }
    var Ny = !1, gE = null, Rd = null, Pc = !1, hs = null, Rv = se, SE = [], EE = null, YD = 50, kv = 0, bE = null, CE = !1, My = !1, qD = 50, kd = 0, Ly = null, Ov = yn, zy = se, Lx = !1;
    function Uy() {
      return La;
    }
    function za() {
      return (Ut & (Qr | Wi)) !== wr ? er() : (Ov !== yn || (Ov = er()), Ov);
    }
    function ms(e) {
      var t = e.mode;
      if ((t & at) === ct)
        return dt;
      if ((Ut & Qr) !== wr && xr !== se)
        return Fu(xr);
      var a = Vk() !== Bk;
      if (a) {
        if (qr.transition !== null) {
          var i = qr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return zy === In && (zy = Qh()), zy;
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
    function _r(e, t, a, i) {
      gA(), Lx && y("useInsertionEffect must not schedule updates."), CE && (My = !0), Yl(e, a, i), (Ut & Qr) !== se && e === La ? bA(t) : (Aa && zf(e, t, a), CA(t), e === La && ((Ut & Qr) === wr && (xv = Tt(xv, a)), Tr === Cv && ys(e, xr)), ii(e, i), a === dt && Ut === wr && (t.mode & at) === ct && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ro.isBatchingLegacy && (_v(), MC()));
    }
    function GD(e, t, a) {
      var i = e.current;
      i.lanes = t, Yl(e, t, a), ii(e, a);
    }
    function KD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ut & Qr) !== wr
      );
    }
    function ii(e, t) {
      var a = e.callbackNode;
      $g(e, t);
      var i = uc(e, e === La ? xr : se);
      if (i === se) {
        a !== null && Kx(a), e.callbackNode = null, e.callbackPriority = In;
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
      a != null && Kx(a);
      var h;
      if (l === dt)
        e.tag === is ? (Ro.isBatchingLegacy !== null && (Ro.didScheduleLegacyUpdate = !0), Tk(jx.bind(null, e))) : NC(jx.bind(null, e)), Ro.current !== null ? Ro.current.push(os) : OR(function() {
          (Ut & (Qr | Wi)) === wr && os();
        }), h = null;
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
        h = DE(S, zx.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = h;
    }
    function zx(e, t) {
      if (gO(), Ov = yn, zy = se, (Ut & (Qr | Wi)) !== wr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = su();
      if (i && e.callbackNode !== a)
        return null;
      var l = uc(e, e === La ? xr : se);
      if (l === se)
        return null;
      var d = !cc(e, l) && !qh(e, l) && !t, h = d ? oA(e, l) : Py(e, l);
      if (h !== ou) {
        if (h === jc) {
          var S = tl(e);
          S !== se && (l = S, h = wE(e, S));
        }
        if (h === bv) {
          var C = wv;
          throw Fc(e, se), ys(e, l), ii(e, er()), C;
        }
        if (h === hE)
          ys(e, l);
        else {
          var T = !cc(e, l), R = e.current.alternate;
          if (T && !JD(R)) {
            if (h = Py(e, l), h === jc) {
              var $ = tl(e);
              $ !== se && (l = $, h = wE(e, $));
            }
            if (h === bv) {
              var F = wv;
              throw Fc(e, se), ys(e, l), ii(e, er()), F;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, XD(e, h, l);
        }
      }
      return ii(e, er()), e.callbackNode === a ? zx.bind(null, e) : null;
    }
    function wE(e, t) {
      var a = Tv;
      if (Uf(e)) {
        var i = Fc(e, t);
        i.flags |= Fr, gk(e.containerInfo);
      }
      var l = Py(e, t);
      if (l !== jc) {
        var d = ai;
        ai = a, d !== null && Ux(d);
      }
      return l;
    }
    function Ux(e) {
      ai === null ? ai = e : ai.push.apply(ai, e);
    }
    function XD(e, t, a) {
      switch (t) {
        case ou:
        case bv:
          throw new Error("Root did not complete. This is a bug in React.");
        case jc: {
          Hc(e, ai, lu);
          break;
        }
        case Oy: {
          if (ys(e, a), Ih(a) && // do not delay if we're inside an act() scope
          !Xx()) {
            var i = yE + Ax - er();
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
        case Cv: {
          if (ys(e, a), Yh(a))
            break;
          if (!Xx()) {
            var h = Df(e, a), S = h, C = er() - S, T = yA(C) - C;
            if (T > 10) {
              e.timeoutHandle = E0(Hc.bind(null, e, ai, lu), T);
              break;
            }
          }
          Hc(e, ai, lu);
          break;
        }
        case Dx: {
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
                var d = i[l], h = d.getSnapshot, S = d.value;
                try {
                  if (!Je(h(), S))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var C = t.child;
        if (t.subtreeFlags & Ll && C !== null) {
          C.return = t, t = C;
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
      t = fc(t, Ay), t = fc(t, xv), Kh(e, t);
    }
    function jx(e) {
      if (SO(), (Ut & (Qr | Wi)) !== wr)
        throw new Error("Should not already be working.");
      su();
      var t = uc(e, se);
      if (!fa(t, dt))
        return ii(e, er()), null;
      var a = Py(e, t);
      if (e.tag !== is && a === jc) {
        var i = tl(e);
        i !== se && (t = i, a = wE(e, i));
      }
      if (a === bv) {
        var l = wv;
        throw Fc(e, se), ys(e, t), ii(e, er()), l;
      }
      if (a === hE)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, Hc(e, ai, lu), ii(e, er()), null;
    }
    function ZD(e, t) {
      t !== se && (bp(e, Tt(t, dt)), ii(e, er()), (Ut & (Qr | Wi)) === wr && (_v(), os()));
    }
    function xE(e, t) {
      var a = Ut;
      Ut |= Ox;
      try {
        return e(t);
      } finally {
        Ut = a, Ut === wr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ro.isBatchingLegacy && (_v(), MC());
      }
    }
    function eA(e, t, a, i, l) {
      var d = Ka(), h = qr.transition;
      try {
        return qr.transition = null, Pn(Yn), e(t, a, i, l);
      } finally {
        Pn(d), qr.transition = h, Ut === wr && _v();
      }
    }
    function uu(e) {
      hs !== null && hs.tag === is && (Ut & (Qr | Wi)) === wr && su();
      var t = Ut;
      Ut |= Ox;
      var a = qr.transition, i = Ka();
      try {
        return qr.transition = null, Pn(Yn), e ? e() : void 0;
      } finally {
        Pn(i), qr.transition = a, Ut = t, (Ut & (Qr | Wi)) === wr && os();
      }
    }
    function Px() {
      return (Ut & (Qr | Wi)) !== wr;
    }
    function jy(e, t) {
      va(mE, hl, e), hl = Tt(hl, t);
    }
    function TE(e) {
      hl = mE.current, pa(mE, e);
    }
    function Fc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var a = e.timeoutHandle;
      if (a !== b0 && (e.timeoutHandle = b0, kR(a)), Qn !== null)
        for (var i = Qn.return; i !== null; ) {
          var l = i.alternate;
          px(l, i), i = i.return;
        }
      La = e;
      var d = $c(e.current, null);
      return Qn = d, xr = hl = t, Tr = ou, wv = null, Dy = se, xv = se, Ay = se, Tv = null, ai = null, qk(), So.discardPendingWarnings(), d;
    }
    function Fx(e, t) {
      do {
        var a = Qn;
        try {
          if (Wm(), hw(), Sn(), vE.current = null, a === null || a.return === null) {
            Tr = bv, wv = t, Qn = null;
            return;
          }
          if (Pe && a.mode & Bt && wy(a, !0), He)
            if (jl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              $h(a, i, xr);
            } else
              Hh(a, t, xr);
          xO(e, a.return, a, t, xr), Vx(a);
        } catch (l) {
          t = l, Qn === a && a !== null ? (a = a.return, Qn = a) : a = Qn;
          continue;
        }
        return;
      } while (!0);
    }
    function Hx() {
      var e = pE.current;
      return pE.current = gy, e === null ? gy : e;
    }
    function $x(e) {
      pE.current = e;
    }
    function tA() {
      yE = er();
    }
    function Dv(e) {
      Dy = Tt(e, Dy);
    }
    function nA() {
      Tr === ou && (Tr = Oy);
    }
    function _E() {
      (Tr === ou || Tr === Oy || Tr === jc) && (Tr = Cv), La !== null && (sc(Dy) || sc(xv)) && ys(La, xr);
    }
    function rA(e) {
      Tr !== Cv && (Tr = jc), Tv === null ? Tv = [e] : Tv.push(e);
    }
    function aA() {
      return Tr === ou;
    }
    function Py(e, t) {
      var a = Ut;
      Ut |= Qr;
      var i = Hx();
      if (La !== e || xr !== t) {
        if (Aa) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Av(e, xr), l.clear()), Cp(e, t);
        }
        lu = pc(), Fc(e, t);
      }
      Lu(t);
      do
        try {
          iA();
          break;
        } catch (d) {
          Fx(e, d);
        }
      while (!0);
      if (Wm(), Ut = a, $x(i), Qn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Jo(), La = null, xr = se, Tr;
    }
    function iA() {
      for (; Qn !== null; )
        Bx(Qn);
    }
    function oA(e, t) {
      var a = Ut;
      Ut |= Qr;
      var i = Hx();
      if (La !== e || xr !== t) {
        if (Aa) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Av(e, xr), l.clear()), Cp(e, t);
        }
        lu = pc(), _v(), Fc(e, t);
      }
      Lu(t);
      do
        try {
          lA();
          break;
        } catch (d) {
          Fx(e, d);
        }
      while (!0);
      return Wm(), $x(i), Ut = a, Qn !== null ? (nc(), ou) : (Jo(), La = null, xr = se, Tr);
    }
    function lA() {
      for (; Qn !== null && !Mh(); )
        Bx(Qn);
    }
    function Bx(e) {
      var t = e.alternate;
      kn(e);
      var a;
      (e.mode & Bt) !== ct ? ($S(e), a = RE(t, e, hl), wy(e, !0)) : a = RE(t, e, hl), Sn(), e.memoizedProps = e.pendingProps, a === null ? Vx(e) : Qn = a, vE.current = null;
    }
    function Vx(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Yo) === st) {
          kn(t);
          var l = void 0;
          if ((t.mode & Bt) === ct ? l = dx(a, t, hl) : ($S(t), l = dx(a, t, hl), wy(t, !1)), Sn(), l !== null) {
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
            wy(t, !1);
            for (var h = t.actualDuration, S = t.child; S !== null; )
              h += S.actualDuration, S = S.sibling;
            t.actualDuration = h;
          }
          if (i !== null)
            i.flags |= Yo, i.subtreeFlags = st, i.deletions = null;
          else {
            Tr = hE, Qn = null;
            return;
          }
        }
        var C = t.sibling;
        if (C !== null) {
          Qn = C;
          return;
        }
        t = i, Qn = t;
      } while (t !== null);
      Tr === ou && (Tr = Dx);
    }
    function Hc(e, t, a) {
      var i = Ka(), l = qr.transition;
      try {
        qr.transition = null, Pn(Yn), uA(e, t, a, i);
      } finally {
        qr.transition = l, Pn(i);
      }
      return null;
    }
    function uA(e, t, a, i) {
      do
        su();
      while (hs !== null);
      if (SA(), (Ut & (Qr | Wi)) !== wr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, d = e.finishedLanes;
      if (Uh(d), l === null)
        return Zs(), null;
      if (d === se && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = se, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = In;
      var h = Tt(l.lanes, l.childLanes);
      Lf(e, h), e === La && (La = null, Qn = null, xr = se), ((l.subtreeFlags & oa) !== st || (l.flags & oa) !== st) && (Pc || (Pc = !0, EE = a, DE(Mi, function() {
        return su(), null;
      })));
      var S = (l.subtreeFlags & (aa | ia | yi | oa)) !== st, C = (l.flags & (aa | ia | yi | oa)) !== st;
      if (S || C) {
        var T = qr.transition;
        qr.transition = null;
        var R = Ka();
        Pn(Yn);
        var $ = Ut;
        Ut |= Wi, vE.current = null, lD(e, l), Hw(), bD(e, l, d), bR(e.containerInfo), e.current = l, Mu(d), CD(l, e, d), Bh(), ku(), Ut = $, Pn(R), qr.transition = T;
      } else
        e.current = l, Hw();
      var F = Pc;
      if (Pc ? (Pc = !1, hs = e, Rv = d) : (kd = 0, Ly = null), h = e.pendingLanes, h === se && (Rd = null), F || qx(e.current, !1), Ko(l.stateNode, i), Aa && e.memoizedUpdaters.clear(), $D(), ii(e, er()), t !== null)
        for (var G = e.onRecoverableError, K = 0; K < t.length; K++) {
          var ie = t[K], qe = ie.stack, ft = ie.digest;
          G(ie.value, {
            componentStack: qe,
            digest: ft
          });
        }
      if (Ny) {
        Ny = !1;
        var it = gE;
        throw gE = null, it;
      }
      return fa(Rv, dt) && e.tag !== is && su(), h = e.pendingLanes, fa(h, dt) ? (yO(), e === bE ? kv++ : (kv = 0, bE = e)) : kv = 0, os(), Zs(), null;
    }
    function su() {
      if (hs !== null) {
        var e = gr(Rv), t = Wg(Ui, e), a = qr.transition, i = Ka();
        try {
          return qr.transition = null, Pn(t), cA();
        } finally {
          Pn(i), qr.transition = a;
        }
      }
      return !1;
    }
    function sA(e) {
      SE.push(e), Pc || (Pc = !0, DE(Mi, function() {
        return su(), null;
      }));
    }
    function cA() {
      if (hs === null)
        return !1;
      var e = EE;
      EE = null;
      var t = hs, a = Rv;
      if (hs = null, Rv = se, (Ut & (Qr | Wi)) !== wr)
        throw new Error("Cannot flush passive effects while already rendering.");
      CE = !0, My = !1, tc(a);
      var i = Ut;
      Ut |= Wi, OD(t.current), TD(t, t.current, a, e);
      {
        var l = SE;
        SE = [];
        for (var d = 0; d < l.length; d++) {
          var h = l[d];
          fD(t, h);
        }
      }
      Li(), qx(t.current, !0), Ut = i, os(), My ? t === Ly ? kd++ : (kd = 0, Ly = t) : kd = 0, CE = !1, My = !1, dp(t);
      {
        var S = t.current.stateNode;
        S.effectDuration = 0, S.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Ix(e) {
      return Rd !== null && Rd.has(e);
    }
    function fA(e) {
      Rd === null ? Rd = /* @__PURE__ */ new Set([e]) : Rd.add(e);
    }
    function dA(e) {
      Ny || (Ny = !0, gE = e);
    }
    var pA = dA;
    function Wx(e, t, a) {
      var i = zc(a, t), l = Bw(e, i, dt), d = us(e, l, dt), h = za();
      d !== null && (Yl(d, dt, h), ii(d, h));
    }
    function wn(e, t, a) {
      if (aD(a), Nv(!1), e.tag === M) {
        Wx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === M) {
          Wx(i, e, a);
          return;
        } else if (i.tag === k) {
          var l = i.type, d = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !Ix(d)) {
            var h = zc(a, e), S = qS(i, h, dt), C = us(i, S, dt), T = za();
            C !== null && (Yl(C, dt, T), ii(C, T));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function vA(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = za();
      Mf(e, a), wA(e), La === e && Wl(xr, a) && (Tr === Cv || Tr === Oy && Ih(xr) && er() - yE < Ax ? Fc(e, se) : Ay = Tt(Ay, a)), ii(e, l);
    }
    function Yx(e, t) {
      t === In && (t = QD(e));
      var a = za(), i = ni(e, t);
      i !== null && (Yl(i, t, a), ii(i, a));
    }
    function hA(e) {
      var t = e.memoizedState, a = In;
      t !== null && (a = t.retryLane), Yx(e, a);
    }
    function mA(e, t) {
      var a = In, i;
      switch (e.tag) {
        case Ue:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Ce:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Yx(e, a);
    }
    function yA(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ID(e / 1960) * 1960;
    }
    function gA() {
      if (kv > YD)
        throw kv = 0, bE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      kd > qD && (kd = 0, Ly = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function SA() {
      So.flushLegacyContextWarning(), So.flushPendingUnsafeLifecycleWarnings();
    }
    function qx(e, t) {
      kn(e), Fy(e, Ya, PD), t && Fy(e, zl, FD), Fy(e, Ya, UD), t && Fy(e, zl, jD), Sn();
    }
    function Fy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var d = i.subtreeFlags & t;
        i !== l && i.child !== null && d !== st ? i = i.child : ((i.flags & t) !== st && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var Hy = null;
    function Qx(e) {
      {
        if ((Ut & Qr) !== wr || !(e.mode & at))
          return;
        var t = e.tag;
        if (t !== D && t !== M && t !== k && t !== N && t !== Be && t !== gt && t !== X)
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
      var EA = null;
      RE = function(e, t, a) {
        var i = n1(EA, t);
        try {
          return lx(e, t, a);
        } catch (d) {
          if (Mk() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Wm(), hw(), px(e, t), n1(t, i), t.mode & Bt && $S(t), hi(null, lx, null, e, t, a), Pg()) {
            var l = uo();
            typeof l == "object" && l !== null && l._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var Gx = !1, kE;
    kE = /* @__PURE__ */ new Set();
    function bA(e) {
      if (ea && !vO())
        switch (e.tag) {
          case N:
          case Be:
          case X: {
            var t = Qn && Et(Qn) || "Unknown", a = t;
            if (!kE.has(a)) {
              kE.add(a);
              var i = Et(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case k: {
            Gx || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Gx = !0);
            break;
          }
        }
    }
    function Av(e, t) {
      if (Aa) {
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
    function Kx(e) {
      if (e !== OE)
        return pf(e);
    }
    function Xx() {
      return Ro.current !== null;
    }
    function CA(e) {
      {
        if (e.mode & at) {
          if (!kx())
            return;
        } else if (!VD() || Ut !== wr || e.tag !== N && e.tag !== Be && e.tag !== X)
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
    function wA(e) {
      e.tag !== is && kx() && Ro.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Nv(e) {
      Lx = e;
    }
    var Yi = null, Od = null, xA = function(e) {
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
    function AE(e) {
      return Dd(e);
    }
    function NE(e) {
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
    function Jx(e, t) {
      {
        if (Yi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, d = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case k: {
            typeof i == "function" && (l = !0);
            break;
          }
          case N: {
            (typeof i == "function" || d === ut) && (l = !0);
            break;
          }
          case Be: {
            (d === $e || d === ut) && (l = !0);
            break;
          }
          case gt:
          case X: {
            (d === _t || d === ut) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var h = Yi(a);
          if (h !== void 0 && h === Yi(i))
            return !0;
        }
        return !1;
      }
    }
    function Zx(e) {
      {
        if (Yi === null || typeof WeakSet != "function")
          return;
        Od === null && (Od = /* @__PURE__ */ new WeakSet()), Od.add(e);
      }
    }
    var TA = function(e, t) {
      {
        if (Yi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        su(), uu(function() {
          ME(e.current, i, a);
        });
      }
    }, _A = function(e, t) {
      {
        if (e.context !== gi)
          return;
        su(), uu(function() {
          Mv(t, e, null, null);
        });
      }
    };
    function ME(e, t, a) {
      {
        var i = e.alternate, l = e.child, d = e.sibling, h = e.tag, S = e.type, C = null;
        switch (h) {
          case N:
          case X:
          case k:
            C = S;
            break;
          case Be:
            C = S.render;
            break;
        }
        if (Yi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, R = !1;
        if (C !== null) {
          var $ = Yi(C);
          $ !== void 0 && (a.has($) ? R = !0 : t.has($) && (h === k ? R = !0 : T = !0));
        }
        if (Od !== null && (Od.has(e) || i !== null && Od.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || T) {
          var F = ni(e, dt);
          F !== null && _r(F, e, dt, yn);
        }
        l !== null && !R && ME(l, t, a), d !== null && ME(d, t, a);
      }
    }
    var RA = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return LE(e.current, i, a), a;
      }
    };
    function LE(e, t, a) {
      {
        var i = e.child, l = e.sibling, d = e.tag, h = e.type, S = null;
        switch (d) {
          case N:
          case X:
          case k:
            S = h;
            break;
          case Be:
            S = h.render;
            break;
        }
        var C = !1;
        S !== null && t.has(S) && (C = !0), C ? kA(e, a) : i !== null && LE(i, t, a), l !== null && LE(l, t, a);
      }
    }
    function kA(e, t) {
      {
        var a = OA(e, t);
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
    function OA(e, t) {
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
        var e1 = Object.preventExtensions({});
      } catch {
        zE = !0;
      }
    }
    function DA(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = st, this.subtreeFlags = st, this.deletions = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !zE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Si = function(e, t, a, i) {
      return new DA(e, t, a, i);
    };
    function UE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function AA(e) {
      return typeof e == "function" && !UE(e) && e.defaultProps === void 0;
    }
    function NA(e) {
      if (typeof e == "function")
        return UE(e) ? k : N;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $e)
          return Be;
        if (t === _t)
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
        case N:
        case X:
          a.type = Dd(e.type);
          break;
        case k:
          a.type = AE(e.type);
          break;
        case Be:
          a.type = NE(e.type);
          break;
      }
      return a;
    }
    function MA(e, t) {
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
    function LA(e, t, a) {
      var i;
      return e === jm ? (i = at, t === !0 && (i |= Un, i |= Qa)) : i = ct, Aa && (i |= Bt), Si(M, null, null, i);
    }
    function jE(e, t, a, i, l, d) {
      var h = D, S = e;
      if (typeof e == "function")
        UE(e) ? (h = k, S = AE(S)) : S = Dd(S);
      else if (typeof e == "string")
        h = B;
      else
        e:
          switch (e) {
            case Ta:
              return gs(a.children, l, d, t);
            case Gi:
              h = Le, l |= Un, (l & at) !== ct && (l |= Qa);
              break;
            case U:
              return zA(a, l, d, t);
            case At:
              return UA(a, l, d, t);
            case zt:
              return jA(a, l, d, t);
            case vn:
              return t1(a, l, d, t);
            case Ar:
            case Jn:
            case xi:
            case hn:
            case pn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case me:
                    h = ze;
                    break e;
                  case Me:
                    h = Ke;
                    break e;
                  case $e:
                    h = Be, S = NE(S);
                    break e;
                  case _t:
                    h = gt;
                    break e;
                  case ut:
                    h = Te, S = null;
                    break e;
                }
              var C = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var T = i ? Et(i) : null;
                T && (C += `

Check the render method of \`` + T + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + C));
            }
          }
      var R = Si(h, a, t, l);
      return R.elementType = e, R.type = S, R.lanes = d, R._debugOwner = i, R;
    }
    function PE(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, d = e.key, h = e.props, S = jE(l, d, h, i, t, a);
      return S._debugSource = e._source, S._debugOwner = e._owner, S;
    }
    function gs(e, t, a, i) {
      var l = Si(fe, e, i, t);
      return l.lanes = a, l;
    }
    function zA(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = Si(ue, e, i, t | Bt);
      return l.elementType = U, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function UA(e, t, a, i) {
      var l = Si(Ue, e, i, t);
      return l.elementType = At, l.lanes = a, l;
    }
    function jA(e, t, a, i) {
      var l = Si(Ce, e, i, t);
      return l.elementType = zt, l.lanes = a, l;
    }
    function t1(e, t, a, i) {
      var l = Si(le, e, i, t);
      l.elementType = vn, l.lanes = a;
      var d = {
        isHidden: !1
      };
      return l.stateNode = d, l;
    }
    function FE(e, t, a) {
      var i = Si(ee, e, null, t);
      return i.lanes = a, i;
    }
    function PA() {
      var e = Si(B, null, null, ct);
      return e.elementType = "DELETED", e;
    }
    function FA(e) {
      var t = Si(_e, null, null, ct);
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
    function n1(e, t) {
      return e === null && (e = Si(D, null, null, ct)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function HA(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = b0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = In, this.eventTimes = dc(se), this.expirationTimes = dc(yn), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = dc(se), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], h = 0; h < Vn; h++)
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
    function r1(e, t, a, i, l, d, h, S, C, T) {
      var R = new HA(e, t, a, S, C), $ = LA(t, d);
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
    function $A(e, t, a) {
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
    function a1(e) {
      if (!e)
        return gi;
      var t = Di(e), a = xk(t);
      if (t.tag === k) {
        var i = t.type;
        if (ul(i))
          return DC(t, i, a);
      }
      return a;
    }
    function BA(e, t) {
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
            var h = Rn;
            try {
              kn(l), a.mode & Un ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              h ? kn(h) : Sn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function i1(e, t, a, i, l, d, h, S) {
      var C = !1, T = null;
      return r1(e, t, C, T, a, i, l, d, h);
    }
    function o1(e, t, a, i, l, d, h, S, C, T) {
      var R = !0, $ = r1(a, i, R, e, l, d, h, S, C);
      $.context = a1(null);
      var F = $.current, G = za(), K = ms(F), ie = au(G, K);
      return ie.callback = t ?? null, us(F, ie, K), GD($, K, G), $;
    }
    function Mv(e, t, a, i) {
      co(t, e);
      var l = t.current, d = za(), h = ms(l);
      hp(h);
      var S = a1(a);
      t.context === null ? t.context = S : t.pendingContext = S, ea && Rn !== null && !BE && (BE = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Et(Rn) || "Unknown"));
      var C = au(d, h);
      C.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), C.callback = i);
      var T = us(l, C, h);
      return T !== null && (_r(T, l, h, d), Km(T, l, h)), h;
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
    function VA(e) {
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
              _r(l, e, dt, d);
            }
          });
          var i = dt;
          IE(e, i);
          break;
        }
      }
    }
    function l1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Gh(a.retryLane, t));
    }
    function IE(e, t) {
      l1(e, t);
      var a = e.alternate;
      a && l1(a, t);
    }
    function IA(e) {
      if (e.tag === Ue) {
        var t = Il, a = ni(e, t);
        if (a !== null) {
          var i = za();
          _r(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function WA(e) {
      if (e.tag === Ue) {
        var t = ms(e), a = ni(e, t);
        if (a !== null) {
          var i = za();
          _r(a, e, t, i);
        }
        IE(e, t);
      }
    }
    function u1(e) {
      var t = up(e);
      return t === null ? null : t.stateNode;
    }
    var s1 = function(e) {
      return null;
    };
    function YA(e) {
      return s1(e);
    }
    var c1 = function(e) {
      return !1;
    };
    function qA(e) {
      return c1(e);
    }
    var f1 = null, d1 = null, p1 = null, v1 = null, h1 = null, m1 = null, y1 = null, g1 = null, S1 = null;
    {
      var E1 = function(e, t, a) {
        var i = t[a], l = Ht(e) ? e.slice() : Ot({}, e);
        return a + 1 === t.length ? (Ht(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = E1(e[i], t, a + 1), l);
      }, b1 = function(e, t) {
        return E1(e, t, 0);
      }, C1 = function(e, t, a, i) {
        var l = t[i], d = Ht(e) ? e.slice() : Ot({}, e);
        if (i + 1 === t.length) {
          var h = a[i];
          d[h] = d[l], Ht(d) ? d.splice(l, 1) : delete d[l];
        } else
          d[l] = C1(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return d;
      }, w1 = function(e, t, a) {
        if (t.length !== a.length) {
          E("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              E("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return C1(e, t, a, 0);
      }, x1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], d = Ht(e) ? e.slice() : Ot({}, e);
        return d[l] = x1(e[l], t, a + 1, i), d;
      }, T1 = function(e, t, a) {
        return x1(e, t, 0, a);
      }, WE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      f1 = function(e, t, a, i) {
        var l = WE(e, t);
        if (l !== null) {
          var d = T1(l.memoizedState, a, i);
          l.memoizedState = d, l.baseState = d, e.memoizedProps = Ot({}, e.memoizedProps);
          var h = ni(e, dt);
          h !== null && _r(h, e, dt, yn);
        }
      }, d1 = function(e, t, a) {
        var i = WE(e, t);
        if (i !== null) {
          var l = b1(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Ot({}, e.memoizedProps);
          var d = ni(e, dt);
          d !== null && _r(d, e, dt, yn);
        }
      }, p1 = function(e, t, a, i) {
        var l = WE(e, t);
        if (l !== null) {
          var d = w1(l.memoizedState, a, i);
          l.memoizedState = d, l.baseState = d, e.memoizedProps = Ot({}, e.memoizedProps);
          var h = ni(e, dt);
          h !== null && _r(h, e, dt, yn);
        }
      }, v1 = function(e, t, a) {
        e.pendingProps = T1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ni(e, dt);
        i !== null && _r(i, e, dt, yn);
      }, h1 = function(e, t) {
        e.pendingProps = b1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ni(e, dt);
        a !== null && _r(a, e, dt, yn);
      }, m1 = function(e, t, a) {
        e.pendingProps = w1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ni(e, dt);
        i !== null && _r(i, e, dt, yn);
      }, y1 = function(e) {
        var t = ni(e, dt);
        t !== null && _r(t, e, dt, yn);
      }, g1 = function(e) {
        s1 = e;
      }, S1 = function(e) {
        c1 = e;
      };
    }
    function QA(e) {
      var t = op(e);
      return t === null ? null : t.stateNode;
    }
    function GA(e) {
      return null;
    }
    function KA() {
      return Rn;
    }
    function XA(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
      return Lh({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: f1,
        overrideHookStateDeletePath: d1,
        overrideHookStateRenamePath: p1,
        overrideProps: v1,
        overridePropsDeletePath: h1,
        overridePropsRenamePath: m1,
        setErrorHandler: g1,
        setSuspenseHandler: S1,
        scheduleUpdate: y1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: QA,
        findFiberByHostInstance: t || GA,
        // React Refresh
        findHostInstancesForRefresh: RA,
        scheduleRefresh: TA,
        scheduleRoot: _A,
        setRefreshHandler: xA,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: KA,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: $E
      });
    }
    var _1 = typeof reportError == "function" ? (
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
          var i = u1(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Mv(e, t, null, null);
    }, By.prototype.unmount = YE.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Px() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), uu(function() {
          Mv(null, e, null, null);
        }), TC(t);
      }
    };
    function JA(e, t) {
      if (!Vy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      R1(e);
      var a = !1, i = !1, l = "", d = _1;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Kr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var h = i1(e, jm, null, a, i, l, d);
      Dm(h.current, e);
      var S = e.nodeType === zn ? e.parentNode : e;
      return $p(S), new YE(h);
    }
    function By(e) {
      this._internalRoot = e;
    }
    function ZA(e) {
      e && Qg(e);
    }
    By.prototype.unstable_scheduleHydration = ZA;
    function eN(e, t, a) {
      if (!Vy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      R1(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, d = !1, h = !1, S = "", C = _1;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (S = a.identifierPrefix), a.onRecoverableError !== void 0 && (C = a.onRecoverableError));
      var T = o1(t, null, e, jm, i, d, h, S, C);
      if (Dm(T.current, e), $p(e), l)
        for (var R = 0; R < l.length; R++) {
          var $ = l[R];
          uO(T, $);
        }
      return new By(T);
    }
    function Vy(e) {
      return !!(e && (e.nodeType === na || e.nodeType === _a || e.nodeType === Vd || !be));
    }
    function Lv(e) {
      return !!(e && (e.nodeType === na || e.nodeType === _a || e.nodeType === Vd || e.nodeType === zn && e.nodeValue === " react-mount-point-unstable "));
    }
    function R1(e) {
      e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Jp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var tN = p.ReactCurrentOwner, k1;
    k1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== zn) {
        var t = u1(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = qE(e), l = !!(i && rs(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function qE(e) {
      return e ? e.nodeType === _a ? e.documentElement : e.firstChild : null;
    }
    function O1() {
    }
    function nN(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var d = i;
          i = function() {
            var F = $y(h);
            d.call(F);
          };
        }
        var h = o1(
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
          O1
        );
        e._reactRootContainer = h, Dm(h.current, e);
        var S = e.nodeType === zn ? e.parentNode : e;
        return $p(S), uu(), h;
      } else {
        for (var C; C = e.lastChild; )
          e.removeChild(C);
        if (typeof i == "function") {
          var T = i;
          i = function() {
            var F = $y(R);
            T.call(F);
          };
        }
        var R = i1(
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
          O1
        );
        e._reactRootContainer = R, Dm(R.current, e);
        var $ = e.nodeType === zn ? e.parentNode : e;
        return $p($), uu(function() {
          Mv(t, R, a, i);
        }), R;
      }
    }
    function rN(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Iy(e, t, a, i, l) {
      k1(a), rN(l === void 0 ? null : l, "render");
      var d = a._reactRootContainer, h;
      if (!d)
        h = nN(a, t, e, l, i);
      else {
        if (h = d, typeof l == "function") {
          var S = l;
          l = function() {
            var C = $y(h);
            S.call(C);
          };
        }
        Mv(t, h, e, l);
      }
      return $y(h);
    }
    function aN(e) {
      {
        var t = tN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === na ? e : BA(e, "findDOMNode");
    }
    function iN(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Jp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Iy(null, e, t, !0, a);
    }
    function oN(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Jp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Iy(null, e, t, !1, a);
    }
    function lN(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ru(e))
        throw new Error("parentComponent must be a valid React Component");
      return Iy(e, t, a, !1, i);
    }
    function uN(e) {
      if (!Lv(e))
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
            e._reactRootContainer = null, TC(e);
          });
        }), !0;
      } else {
        {
          var l = qE(e), d = !!(l && rs(l)), h = e.nodeType === na && Lv(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", h ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Vu(VA), Yg(IA), Pf(WA), Jh(Ka), Zh(Lr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xd(fR), lf(xE, eA, uu);
    function sN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vy(t))
        throw new Error("Target container is not a DOM element.");
      return $A(e, t, null, a);
    }
    function cN(e, t, a, i) {
      return lN(e, t, a, i);
    }
    var QE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [rs, ld, Am, _u, Nl, xE]
    };
    function fN(e, t) {
      return QE.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), JA(e, t);
    }
    function dN(e, t, a) {
      return QE.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), eN(e, t, a);
    }
    function pN(e) {
      return Px() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), uu(e);
    }
    var vN = XA({
      findFiberByHostInstance: _c,
      bundleType: 1,
      version: $E,
      rendererPackageName: "react-dom"
    });
    if (!vN && $t && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var D1 = window.location.protocol;
      /^(https?|file):$/.test(D1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (D1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QE, li.createPortal = sN, li.createRoot = fN, li.findDOMNode = aN, li.flushSync = pN, li.hydrate = iN, li.hydrateRoot = dN, li.render = oN, li.unmountComponentAtNode = uN, li.unstable_batchedUpdates = xE, li.unstable_renderSubtreeIntoContainer = cN, li.version = $E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), li;
}
var RT = {};
function kT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (RT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kT);
    } catch (s) {
      console.error(s);
    }
  }
}
RT.NODE_ENV === "production" ? (kT(), vb.exports = ON()) : vb.exports = DN();
var OT = vb.exports, AN = {}, Pv = OT;
if (AN.NODE_ENV === "production")
  Vv.createRoot = Pv.createRoot, Vv.hydrateRoot = Pv.hydrateRoot;
else {
  var qy = Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Vv.createRoot = function(s, u) {
    qy.usingClientEntryPoint = !0;
    try {
      return Pv.createRoot(s, u);
    } finally {
      qy.usingClientEntryPoint = !1;
    }
  }, Vv.hydrateRoot = function(s, u, f) {
    qy.usingClientEntryPoint = !0;
    try {
      return Pv.hydrateRoot(s, u, f);
    } finally {
      qy.usingClientEntryPoint = !1;
    }
  };
}
function NN({ tabs: s }) {
  const [u, f] = wt.useState(0), p = (b) => {
    f(b);
  }, g = (b) => {
    b.key === "ArrowRight" ? f((E) => (E + 1) % s.length) : b.key === "ArrowLeft" && f((E) => (E - 1 + s.length) % s.length);
  };
  return /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
    /* @__PURE__ */ te.jsx("div", { className: "nav-tab-wrapper", role: "tablist", children: s.map((b, E) => /* @__PURE__ */ te.jsx(
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
      return /* @__PURE__ */ te.jsxs(
        "div",
        {
          className: "tabs-content",
          role: "tabpanel",
          id: `tabpanel-${E}`,
          "aria-labelledby": `tab-${E}`,
          hidden: u !== E,
          tabIndex: 0,
          children: [
            /* @__PURE__ */ te.jsx(y, {}),
            " "
          ]
        },
        E
      );
    })
  ] });
}
function DT(s, u) {
  return function() {
    return s.apply(u, arguments);
  };
}
const { toString: MN } = Object.prototype, { getPrototypeOf: Mb } = Object, mg = /* @__PURE__ */ ((s) => (u) => {
  const f = MN.call(u);
  return s[f] || (s[f] = f.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), El = (s) => (s = s.toLowerCase(), (u) => mg(u) === s), yg = (s) => (u) => typeof u === s, { isArray: zd } = Array, Yv = yg("undefined");
function LN(s) {
  return s !== null && !Yv(s) && s.constructor !== null && !Yv(s.constructor) && qi(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const AT = El("ArrayBuffer");
function zN(s) {
  let u;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? u = ArrayBuffer.isView(s) : u = s && s.buffer && AT(s.buffer), u;
}
const UN = yg("string"), qi = yg("function"), NT = yg("number"), gg = (s) => s !== null && typeof s == "object", jN = (s) => s === !0 || s === !1, eg = (s) => {
  if (mg(s) !== "object")
    return !1;
  const u = Mb(s);
  return (u === null || u === Object.prototype || Object.getPrototypeOf(u) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, PN = El("Date"), FN = El("File"), HN = El("Blob"), $N = El("FileList"), BN = (s) => gg(s) && qi(s.pipe), VN = (s) => {
  let u;
  return s && (typeof FormData == "function" && s instanceof FormData || qi(s.append) && ((u = mg(s)) === "formdata" || // detect form-data instance
  u === "object" && qi(s.toString) && s.toString() === "[object FormData]"));
}, IN = El("URLSearchParams"), WN = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Kv(s, u, { allOwnKeys: f = !1 } = {}) {
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
function MT(s, u) {
  u = u.toLowerCase();
  const f = Object.keys(s);
  let p = f.length, g;
  for (; p-- > 0; )
    if (g = f[p], u === g.toLowerCase())
      return g;
  return null;
}
const LT = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zT = (s) => !Yv(s) && s !== LT;
function hb() {
  const { caseless: s } = zT(this) && this || {}, u = {}, f = (p, g) => {
    const b = s && MT(u, g) || g;
    eg(u[b]) && eg(p) ? u[b] = hb(u[b], p) : eg(p) ? u[b] = hb({}, p) : zd(p) ? u[b] = p.slice() : u[b] = p;
  };
  for (let p = 0, g = arguments.length; p < g; p++)
    arguments[p] && Kv(arguments[p], f);
  return u;
}
const YN = (s, u, f, { allOwnKeys: p } = {}) => (Kv(u, (g, b) => {
  f && qi(g) ? s[b] = DT(g, f) : s[b] = g;
}, { allOwnKeys: p }), s), qN = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), QN = (s, u, f, p) => {
  s.prototype = Object.create(u.prototype, p), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: u.prototype
  }), f && Object.assign(s.prototype, f);
}, GN = (s, u, f, p) => {
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
}, KN = (s, u, f) => {
  s = String(s), (f === void 0 || f > s.length) && (f = s.length), f -= u.length;
  const p = s.indexOf(u, f);
  return p !== -1 && p === f;
}, XN = (s) => {
  if (!s)
    return null;
  if (zd(s))
    return s;
  let u = s.length;
  if (!NT(u))
    return null;
  const f = new Array(u);
  for (; u-- > 0; )
    f[u] = s[u];
  return f;
}, JN = /* @__PURE__ */ ((s) => (u) => s && u instanceof s)(typeof Uint8Array < "u" && Mb(Uint8Array)), ZN = (s, u) => {
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
), H1 = (({ hasOwnProperty: s }) => (u, f) => s.call(u, f))(Object.prototype), rM = El("RegExp"), UT = (s, u) => {
  const f = Object.getOwnPropertyDescriptors(s), p = {};
  Kv(f, (g, b) => {
    let E;
    (E = u(g, b, s)) !== !1 && (p[b] = E || g);
  }), Object.defineProperties(s, p);
}, aM = (s) => {
  UT(s, (u, f) => {
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
}, lM = (s, u) => (s = +s, Number.isFinite(s) ? s : u), JE = "abcdefghijklmnopqrstuvwxyz", $1 = "0123456789", jT = {
  DIGIT: $1,
  ALPHA: JE,
  ALPHA_DIGIT: JE + JE.toUpperCase() + $1
}, uM = (s = 16, u = jT.ALPHA_DIGIT) => {
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
        return Kv(p, (E, y) => {
          const _ = f(E, g + 1);
          !Yv(_) && (b[y] = _);
        }), u[g] = void 0, b;
      }
    }
    return p;
  };
  return f(s, 0);
}, fM = El("AsyncFunction"), dM = (s) => s && (gg(s) || qi(s)) && qi(s.then) && qi(s.catch), de = {
  isArray: zd,
  isArrayBuffer: AT,
  isBuffer: LN,
  isFormData: VN,
  isArrayBufferView: zN,
  isString: UN,
  isNumber: NT,
  isBoolean: jN,
  isObject: gg,
  isPlainObject: eg,
  isUndefined: Yv,
  isDate: PN,
  isFile: FN,
  isBlob: HN,
  isRegExp: rM,
  isFunction: qi,
  isStream: BN,
  isURLSearchParams: IN,
  isTypedArray: JN,
  isFileList: $N,
  forEach: Kv,
  merge: hb,
  extend: YN,
  trim: WN,
  stripBOM: qN,
  inherits: QN,
  toFlatObject: GN,
  kindOf: mg,
  kindOfTest: El,
  endsWith: KN,
  toArray: XN,
  forEachEntry: ZN,
  matchAll: eM,
  isHTMLForm: tM,
  hasOwnProperty: H1,
  hasOwnProp: H1,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: UT,
  freezeMethods: aM,
  toObjectSet: iM,
  toCamelCase: nM,
  noop: oM,
  toFiniteNumber: lM,
  findKey: MT,
  global: LT,
  isContextDefined: zT,
  ALPHABET: jT,
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
const PT = Qt.prototype, FT = {};
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
  FT[s] = { value: s };
});
Object.defineProperties(Qt, FT);
Object.defineProperty(PT, "isAxiosError", { value: !0 });
Qt.from = (s, u, f, p, g, b) => {
  const E = Object.create(PT);
  return de.toFlatObject(s, E, function(_) {
    return _ !== Error.prototype;
  }, (y) => y !== "isAxiosError"), Qt.call(E, s.message, u, f, p, g), E.cause = s, E.name = s.name, b && Object.assign(E, b), E;
};
const pM = null;
function mb(s) {
  return de.isPlainObject(s) || de.isArray(s);
}
function HT(s) {
  return de.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function B1(s, u, f) {
  return s ? s.concat(u).map(function(g, b) {
    return g = HT(g), !f && b ? "[" + g + "]" : g;
  }).join(f ? "." : "") : u;
}
function vM(s) {
  return de.isArray(s) && !s.some(mb);
}
const hM = de.toFlatObject(de, {}, null, function(u) {
  return /^is[A-Z]/.test(u);
});
function Sg(s, u, f) {
  if (!de.isObject(s))
    throw new TypeError("target must be an object");
  u = u || new FormData(), f = de.toFlatObject(f, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(ee, fe) {
    return !de.isUndefined(fe[ee]);
  });
  const p = f.metaTokens, g = f.visitor || k, b = f.dots, E = f.indexes, _ = (f.Blob || typeof Blob < "u" && Blob) && de.isSpecCompliantForm(u);
  if (!de.isFunction(g))
    throw new TypeError("visitor must be a function");
  function N(B) {
    if (B === null)
      return "";
    if (de.isDate(B))
      return B.toISOString();
    if (!_ && de.isBlob(B))
      throw new Qt("Blob is not supported. Use a Buffer instead.");
    return de.isArrayBuffer(B) || de.isTypedArray(B) ? _ && typeof Blob == "function" ? new Blob([B]) : Buffer.from(B) : B;
  }
  function k(B, ee, fe) {
    let Le = B;
    if (B && !fe && typeof B == "object") {
      if (de.endsWith(ee, "{}"))
        ee = p ? ee : ee.slice(0, -2), B = JSON.stringify(B);
      else if (de.isArray(B) && vM(B) || (de.isFileList(B) || de.endsWith(ee, "[]")) && (Le = de.toArray(B)))
        return ee = HT(ee), Le.forEach(function(ze, Be) {
          !(de.isUndefined(ze) || ze === null) && u.append(
            // eslint-disable-next-line no-nested-ternary
            E === !0 ? B1([ee], Be, b) : E === null ? ee : ee + "[]",
            N(ze)
          );
        }), !1;
    }
    return mb(B) ? !0 : (u.append(B1(fe, ee, b), N(B)), !1);
  }
  const D = [], M = Object.assign(hM, {
    defaultVisitor: k,
    convertValue: N,
    isVisitable: mb
  });
  function I(B, ee) {
    if (!de.isUndefined(B)) {
      if (D.indexOf(B) !== -1)
        throw Error("Circular reference detected in " + ee.join("."));
      D.push(B), de.forEach(B, function(Le, Ke) {
        (!(de.isUndefined(Le) || Le === null) && g.call(
          u,
          Le,
          de.isString(Ke) ? Ke.trim() : Ke,
          ee,
          M
        )) === !0 && I(Le, ee ? ee.concat(Ke) : [Ke]);
      }), D.pop();
    }
  }
  if (!de.isObject(s))
    throw new TypeError("data must be an object");
  return I(s), u;
}
function V1(s) {
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
const $T = Lb.prototype;
$T.append = function(u, f) {
  this._pairs.push([u, f]);
};
$T.toString = function(u) {
  const f = u ? function(p) {
    return u.call(this, p, V1);
  } : V1;
  return this._pairs.map(function(g) {
    return f(g[0]) + "=" + f(g[1]);
  }, "").join("&");
};
function mM(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function BT(s, u, f) {
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
class I1 {
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
const VT = {
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
}, IT = typeof window < "u" && typeof document < "u", bM = ((s) => IT && ["ReactNative", "NativeScript", "NS"].indexOf(s) < 0)(typeof navigator < "u" && navigator.product), CM = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", wM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: IT,
  hasStandardBrowserEnv: bM,
  hasStandardBrowserWebWorkerEnv: CM
}, Symbol.toStringTag, { value: "Module" })), yl = {
  ...wM,
  ...EM
};
function xM(s, u) {
  return Sg(s, new yl.classes.URLSearchParams(), Object.assign({
    visitor: function(f, p, g, b) {
      return yl.isNode && de.isBuffer(f) ? (this.append(p, f.toString("base64")), !1) : b.defaultVisitor.apply(this, arguments);
    }
  }, u));
}
function TM(s) {
  return de.matchAll(/\w+|\[(\w*)]/g, s).map((u) => u[0] === "[]" ? "" : u[1] || u[0]);
}
function _M(s) {
  const u = {}, f = Object.keys(s);
  let p;
  const g = f.length;
  let b;
  for (p = 0; p < g; p++)
    b = f[p], u[b] = s[b];
  return u;
}
function WT(s) {
  function u(f, p, g, b) {
    let E = f[b++];
    if (E === "__proto__")
      return !0;
    const y = Number.isFinite(+E), _ = b >= f.length;
    return E = !E && de.isArray(g) ? g.length : E, _ ? (de.hasOwnProp(g, E) ? g[E] = [g[E], p] : g[E] = p, !y) : ((!g[E] || !de.isObject(g[E])) && (g[E] = []), u(f, p, g[E], b) && de.isArray(g[E]) && (g[E] = _M(g[E])), !y);
  }
  if (de.isFormData(s) && de.isFunction(s.entries)) {
    const f = {};
    return de.forEachEntry(s, (p, g) => {
      u(TM(p), g, f, 0);
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
  transitional: VT,
  adapter: ["xhr", "http"],
  transformRequest: [function(u, f) {
    const p = f.getContentType() || "", g = p.indexOf("application/json") > -1, b = de.isObject(u);
    if (b && de.isHTMLForm(u) && (u = new FormData(u)), de.isFormData(u))
      return g ? JSON.stringify(WT(u)) : u;
    if (de.isArrayBuffer(u) || de.isBuffer(u) || de.isStream(u) || de.isFile(u) || de.isBlob(u))
      return u;
    if (de.isArrayBufferView(u))
      return u.buffer;
    if (de.isURLSearchParams(u))
      return f.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), u.toString();
    let y;
    if (b) {
      if (p.indexOf("application/x-www-form-urlencoded") > -1)
        return xM(u, this.formSerializer).toString();
      if ((y = de.isFileList(u)) || p.indexOf("multipart/form-data") > -1) {
        const _ = this.env && this.env.FormData;
        return Sg(
          y ? { "files[]": u } : u,
          _ && new _(),
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
}, W1 = Symbol("internals");
function Fv(s) {
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
const AM = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
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
function NM(s) {
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
    function b(y, _, N) {
      const k = Fv(_);
      if (!k)
        throw new Error("header name must be a non-empty string");
      const D = de.findKey(g, k);
      (!D || g[D] === void 0 || N === !0 || N === void 0 && g[D] !== !1) && (g[D || _] = tg(y));
    }
    const E = (y, _) => de.forEach(y, (N, k) => b(N, k, _));
    return de.isPlainObject(u) || u instanceof this.constructor ? E(u, f) : de.isString(u) && (u = u.trim()) && !AM(u) ? E(OM(u), f) : u != null && b(f, u, p), this;
  }
  get(u, f) {
    if (u = Fv(u), u) {
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
    if (u = Fv(u), u) {
      const p = de.findKey(this, u);
      return !!(p && this[p] !== void 0 && (!f || ZE(this, this[p], p, f)));
    }
    return !1;
  }
  delete(u, f) {
    const p = this;
    let g = !1;
    function b(E) {
      if (E = Fv(E), E) {
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
      const y = u ? NM(b) : String(b).trim();
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
    const p = (this[W1] = this[W1] = {
      accessors: {}
    }).accessors, g = this.prototype;
    function b(E) {
      const y = Fv(E);
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
function YT(s) {
  return !!(s && s.__CANCEL__);
}
function Xv(s, u, f) {
  Qt.call(this, s ?? "canceled", Qt.ERR_CANCELED, u, f), this.name = "CanceledError";
}
de.inherits(Xv, Qt, {
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
function qT(s, u) {
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
  return u = u !== void 0 ? u : 1e3, function(_) {
    const N = Date.now(), k = p[b];
    E || (E = N), f[g] = _, p[g] = N;
    let D = b, M = 0;
    for (; D !== g; )
      M += f[D++], D = D % s;
    if (g = (g + 1) % s, g === b && (b = (b + 1) % s), N - E < u)
      return;
    const I = k && N - k;
    return I ? Math.round(M * 1e3 / I) : void 0;
  };
}
function Y1(s, u) {
  let f = 0;
  const p = HM(50, 250);
  return (g) => {
    const b = g.loaded, E = g.lengthComputable ? g.total : void 0, y = b - f, _ = p(y), N = b <= E;
    f = b;
    const k = {
      loaded: b,
      total: E,
      progress: E ? b / E : void 0,
      bytes: y,
      rate: _ || void 0,
      estimated: _ && E && N ? (E - b) / _ : void 0,
      event: g
    };
    k[u ? "download" : "upload"] = !0, s(k);
  };
}
const $M = typeof XMLHttpRequest < "u", BM = $M && function(s) {
  return new Promise(function(f, p) {
    let g = s.data;
    const b = du.from(s.headers).normalize();
    let { responseType: E, withXSRFToken: y } = s, _;
    function N() {
      s.cancelToken && s.cancelToken.unsubscribe(_), s.signal && s.signal.removeEventListener("abort", _);
    }
    let k;
    if (de.isFormData(g)) {
      if (yl.hasStandardBrowserEnv || yl.hasStandardBrowserWebWorkerEnv)
        b.setContentType(!1);
      else if ((k = b.getContentType()) !== !1) {
        const [ee, ...fe] = k ? k.split(";").map((Le) => Le.trim()).filter(Boolean) : [];
        b.setContentType([ee || "multipart/form-data", ...fe].join("; "));
      }
    }
    let D = new XMLHttpRequest();
    if (s.auth) {
      const ee = s.auth.username || "", fe = s.auth.password ? unescape(encodeURIComponent(s.auth.password)) : "";
      b.set("Authorization", "Basic " + btoa(ee + ":" + fe));
    }
    const M = qT(s.baseURL, s.url);
    D.open(s.method.toUpperCase(), BT(M, s.params, s.paramsSerializer), !0), D.timeout = s.timeout;
    function I() {
      if (!D)
        return;
      const ee = du.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), Le = {
        data: !E || E === "text" || E === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: ee,
        config: s,
        request: D
      };
      LM(function(ze) {
        f(ze), N();
      }, function(ze) {
        p(ze), N();
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
      const Le = s.transitional || VT;
      s.timeoutErrorMessage && (fe = s.timeoutErrorMessage), p(new Qt(
        fe,
        Le.clarifyTimeoutError ? Qt.ETIMEDOUT : Qt.ECONNABORTED,
        s,
        D
      )), D = null;
    }, yl.hasStandardBrowserEnv && (y && de.isFunction(y) && (y = y(s)), y || y !== !1 && PM(M))) {
      const ee = s.xsrfHeaderName && s.xsrfCookieName && zM.read(s.xsrfCookieName);
      ee && b.set(s.xsrfHeaderName, ee);
    }
    g === void 0 && b.setContentType(null), "setRequestHeader" in D && de.forEach(b.toJSON(), function(fe, Le) {
      D.setRequestHeader(Le, fe);
    }), de.isUndefined(s.withCredentials) || (D.withCredentials = !!s.withCredentials), E && E !== "json" && (D.responseType = s.responseType), typeof s.onDownloadProgress == "function" && D.addEventListener("progress", Y1(s.onDownloadProgress, !0)), typeof s.onUploadProgress == "function" && D.upload && D.upload.addEventListener("progress", Y1(s.onUploadProgress)), (s.cancelToken || s.signal) && (_ = (ee) => {
      D && (p(!ee || ee.type ? new Xv(null, s, D) : ee), D.abort(), D = null);
    }, s.cancelToken && s.cancelToken.subscribe(_), s.signal && (s.signal.aborted ? _() : s.signal.addEventListener("abort", _)));
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
const q1 = (s) => `- ${s}`, VM = (s) => de.isFunction(s) || s === null || s === !1, QT = {
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
        ([y, _]) => `adapter ${y} ` + (_ === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let E = u ? b.length > 1 ? `since :
` + b.map(q1).join(`
`) : " " + q1(b[0]) : "as no adapter specified";
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
    throw new Xv(null, s);
}
function Q1(s) {
  return tb(s), s.headers = du.from(s.headers), s.data = eb.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), QT.getAdapter(s.adapter || Ub.adapter)(s).then(function(p) {
    return tb(s), p.data = eb.call(
      s,
      s.transformResponse,
      p
    ), p.headers = du.from(p.headers), p;
  }, function(p) {
    return YT(p) || (tb(s), p && p.response && (p.response.data = eb.call(
      s,
      s.transformResponse,
      p.response
    ), p.response.headers = du.from(p.response.headers))), Promise.reject(p);
  });
}
const G1 = (s) => s instanceof du ? s.toJSON() : s;
function Ld(s, u) {
  u = u || {};
  const f = {};
  function p(N, k, D) {
    return de.isPlainObject(N) && de.isPlainObject(k) ? de.merge.call({ caseless: D }, N, k) : de.isPlainObject(k) ? de.merge({}, k) : de.isArray(k) ? k.slice() : k;
  }
  function g(N, k, D) {
    if (de.isUndefined(k)) {
      if (!de.isUndefined(N))
        return p(void 0, N, D);
    } else
      return p(N, k, D);
  }
  function b(N, k) {
    if (!de.isUndefined(k))
      return p(void 0, k);
  }
  function E(N, k) {
    if (de.isUndefined(k)) {
      if (!de.isUndefined(N))
        return p(void 0, N);
    } else
      return p(void 0, k);
  }
  function y(N, k, D) {
    if (D in u)
      return p(N, k);
    if (D in s)
      return p(void 0, N);
  }
  const _ = {
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
    headers: (N, k) => g(G1(N), G1(k), !0)
  };
  return de.forEach(Object.keys(Object.assign({}, s, u)), function(k) {
    const D = _[k] || g, M = D(s[k], u[k], k);
    de.isUndefined(M) && D !== y || (f[k] = M);
  }), f;
}
const GT = "1.6.7", jb = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, u) => {
  jb[s] = function(p) {
    return typeof p === s || "a" + (u < 1 ? "n " : " ") + s;
  };
});
const K1 = {};
jb.transitional = function(u, f, p) {
  function g(b, E) {
    return "[Axios v" + GT + "] Transitional option '" + b + "'" + E + (p ? ". " + p : "");
  }
  return (b, E, y) => {
    if (u === !1)
      throw new Qt(
        g(E, " has been removed" + (f ? " in " + f : "")),
        Qt.ERR_DEPRECATED
      );
    return f && !K1[E] && (K1[E] = !0, console.warn(
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
      const y = s[b], _ = y === void 0 || E(y, b, s);
      if (_ !== !0)
        throw new Qt("option " + b + " must be " + _, Qt.ERR_BAD_OPTION_VALUE);
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
      request: new I1(),
      response: new I1()
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
    let _ = !0;
    this.interceptors.request.forEach(function(ee) {
      typeof ee.runWhen == "function" && ee.runWhen(f) === !1 || (_ = _ && ee.synchronous, y.unshift(ee.fulfilled, ee.rejected));
    });
    const N = [];
    this.interceptors.response.forEach(function(ee) {
      N.push(ee.fulfilled, ee.rejected);
    });
    let k, D = 0, M;
    if (!_) {
      const B = [Q1.bind(this), void 0];
      for (B.unshift.apply(B, y), B.push.apply(B, N), M = B.length, k = Promise.resolve(f); D < M; )
        k = k.then(B[D++], B[D++]);
      return k;
    }
    M = y.length;
    let I = f;
    for (D = 0; D < M; ) {
      const B = y[D++], ee = y[D++];
      try {
        I = B(I);
      } catch (fe) {
        ee.call(this, fe);
        break;
      }
    }
    try {
      k = Q1.call(this, I);
    } catch (B) {
      return Promise.reject(B);
    }
    for (D = 0, M = N.length; D < M; )
      k = k.then(N[D++], N[D++]);
    return k;
  }
  getUri(u) {
    u = Ld(this.defaults, u);
    const f = qT(u.baseURL, u.url);
    return BT(f, u.params, u.paramsSerializer);
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
      p.reason || (p.reason = new Xv(b, E, y), f(p.reason));
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
function KT(s) {
  const u = new ng(s), f = DT(ng.prototype.request, u);
  return de.extend(f, ng.prototype, u, { allOwnKeys: !0 }), de.extend(f, u, null, { allOwnKeys: !0 }), f.create = function(g) {
    return KT(Ld(s, g));
  }, f;
}
const Gn = KT(Ub);
Gn.Axios = ng;
Gn.CanceledError = Xv;
Gn.CancelToken = WM;
Gn.isCancel = YT;
Gn.VERSION = GT;
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
Gn.formToJSON = (s) => WT(de.isHTMLForm(s) ? new FormData(s) : s);
Gn.getAdapter = QT.getAdapter;
Gn.HttpStatusCode = QM;
Gn.default = Gn;
let GM = { data: "" }, KM = (s) => typeof window == "object" ? ((s ? s.querySelector("#_goober") : window._goober) || Object.assign((s || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : s || GM, XM = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, JM = /\/\*[^]*?\*\/|  +/g, X1 = /\n+/g, Es = (s, u) => {
  let f = "", p = "", g = "";
  for (let b in s) {
    let E = s[b];
    b[0] == "@" ? b[1] == "i" ? f = b + " " + E + ";" : p += b[1] == "f" ? Es(E, b) : b + "{" + Es(E, b[1] == "k" ? "" : u) + "}" : typeof E == "object" ? p += Es(E, u ? u.replace(/([^,])+/g, (y) => b.replace(/(^:.*)|([^,])+/g, (_) => /&/.test(_) ? _.replace(/&/g, y) : y ? y + " " + _ : _)) : b) : E != null && (b = /^--/.test(b) ? b : b.replace(/[A-Z]/g, "-$&").toLowerCase(), g += Es.p ? Es.p(b, E) : b + ":" + E + ";");
  }
  return f + (u && g ? u + "{" + g + "}" : g) + p;
}, fu = {}, XT = (s) => {
  if (typeof s == "object") {
    let u = "";
    for (let f in s)
      u += f + XT(s[f]);
    return u;
  }
  return s;
}, ZM = (s, u, f, p, g) => {
  let b = XT(s), E = fu[b] || (fu[b] = ((_) => {
    let N = 0, k = 11;
    for (; N < _.length; )
      k = 101 * k + _.charCodeAt(N++) >>> 0;
    return "go" + k;
  })(b));
  if (!fu[E]) {
    let _ = b !== s ? s : ((N) => {
      let k, D, M = [{}];
      for (; k = XM.exec(N.replace(JM, "")); )
        k[4] ? M.shift() : k[3] ? (D = k[3].replace(X1, " ").trim(), M.unshift(M[0][D] = M[0][D] || {})) : M[0][k[1]] = k[2].replace(X1, " ").trim();
      return M[0];
    })(s);
    fu[E] = Es(g ? { ["@keyframes " + E]: _ } : _, f ? "" : "." + E);
  }
  let y = f && fu.g ? fu.g : null;
  return f && (fu.g = fu[E]), ((_, N, k, D) => {
    D ? N.data = N.data.replace(D, _) : N.data.indexOf(_) === -1 && (N.data = k ? _ + N.data : N.data + _);
  })(fu[E], u, p, y), E;
}, eL = (s, u, f) => s.reduce((p, g, b) => {
  let E = u[b];
  if (E && E.call) {
    let y = E(f), _ = y && y.props && y.props.className || /^go/.test(y) && y;
    E = _ ? "." + _ : y && typeof y == "object" ? y.props ? "" : Es(y, "") : y === !1 ? "" : y;
  }
  return p + g + (E ?? "");
}, "");
function bg(s) {
  let u = this || {}, f = s.call ? s(u.p) : s;
  return ZM(f.unshift ? f.raw ? eL(f, [].slice.call(arguments, 1), u.p) : f.reduce((p, g) => Object.assign(p, g && g.call ? g(u.p) : g), {}) : f, KM(u.target), u.g, u.o, u.k);
}
let JT, Eb, bb;
bg.bind({ g: 1 });
let pu = bg.bind({ k: 1 });
function tL(s, u, f, p) {
  Es.p = u, JT = s, Eb = f, bb = p;
}
function Cs(s, u) {
  let f = this || {};
  return function() {
    let p = arguments;
    function g(b, E) {
      let y = Object.assign({}, b), _ = y.className || g.className;
      f.p = Object.assign({ theme: Eb && Eb() }, y), f.o = / *go\d+/.test(_), y.className = bg.apply(f, p) + (_ ? " " + _ : ""), u && (y.ref = E);
      let N = s;
      return s[0] && (N = y.as || s, delete y.as), bb && N[0] && bb(y), JT(N, y);
    }
    return u ? u(g) : g;
  };
}
var nL = (s) => typeof s == "function", lg = (s, u) => nL(s) ? s(u) : s, rL = /* @__PURE__ */ (() => {
  let s = 0;
  return () => (++s).toString();
})(), ZT = /* @__PURE__ */ (() => {
  let s;
  return () => {
    if (s === void 0 && typeof window < "u") {
      let u = matchMedia("(prefers-reduced-motion: reduce)");
      s = !u || u.matches;
    }
    return s;
  };
})(), aL = 20, rg = /* @__PURE__ */ new Map(), iL = 1e3, J1 = (s) => {
  if (rg.has(s))
    return;
  let u = setTimeout(() => {
    rg.delete(s), Gc({ type: 4, toastId: s });
  }, iL);
  rg.set(s, u);
}, oL = (s) => {
  let u = rg.get(s);
  u && clearTimeout(u);
}, Cb = (s, u) => {
  switch (u.type) {
    case 0:
      return { ...s, toasts: [u.toast, ...s.toasts].slice(0, aL) };
    case 1:
      return u.toast.id && oL(u.toast.id), { ...s, toasts: s.toasts.map((b) => b.id === u.toast.id ? { ...b, ...u.toast } : b) };
    case 2:
      let { toast: f } = u;
      return s.toasts.find((b) => b.id === f.id) ? Cb(s, { type: 1, toast: f }) : Cb(s, { type: 0, toast: f });
    case 3:
      let { toastId: p } = u;
      return p ? J1(p) : s.toasts.forEach((b) => {
        J1(b.id);
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
  ig = Cb(ig, s), ag.forEach((u) => {
    u(ig);
  });
}, lL = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, uL = (s = {}) => {
  let [u, f] = wt.useState(ig);
  wt.useEffect(() => (ag.push(f), () => {
    let g = ag.indexOf(f);
    g > -1 && ag.splice(g, 1);
  }), [u]);
  let p = u.toasts.map((g) => {
    var b, E;
    return { ...s, ...s[g.type], ...g, duration: g.duration || ((b = s[g.type]) == null ? void 0 : b.duration) || (s == null ? void 0 : s.duration) || lL[g.type], style: { ...s.style, ...(E = s[g.type]) == null ? void 0 : E.style, ...g.style } };
  });
  return { ...u, toasts: p };
}, sL = (s, u = "blank", f) => ({ createdAt: Date.now(), visible: !0, type: u, ariaProps: { role: "status", "aria-live": "polite" }, message: s, pauseDuration: 0, ...f, id: (f == null ? void 0 : f.id) || rL() }), Jv = (s) => (u, f) => {
  let p = sL(u, s, f);
  return Gc({ type: 2, toast: p }), p.id;
}, wi = (s, u) => Jv("blank")(s, u);
wi.error = Jv("error");
wi.success = Jv("success");
wi.loading = Jv("loading");
wi.custom = Jv("custom");
wi.dismiss = (s) => {
  Gc({ type: 3, toastId: s });
};
wi.remove = (s) => Gc({ type: 4, toastId: s });
wi.promise = (s, u, f) => {
  let p = wi.loading(u.loading, { ...f, ...f == null ? void 0 : f.loading });
  return s.then((g) => (wi.success(lg(u.success, g), { id: p, ...f, ...f == null ? void 0 : f.success }), g)).catch((g) => {
    wi.error(lg(u.error, g), { id: p, ...f, ...f == null ? void 0 : f.error });
  }), s;
};
var cL = (s, u) => {
  Gc({ type: 1, toast: { id: s, height: u } });
}, fL = () => {
  Gc({ type: 5, time: Date.now() });
}, dL = (s) => {
  let { toasts: u, pausedAt: f } = uL(s);
  wt.useEffect(() => {
    if (f)
      return;
    let b = Date.now(), E = u.map((y) => {
      if (y.duration === 1 / 0)
        return;
      let _ = (y.duration || 0) + y.pauseDuration - (b - y.createdAt);
      if (_ < 0) {
        y.visible && wi.dismiss(y.id);
        return;
      }
      return setTimeout(() => wi.dismiss(y.id), _);
    });
    return () => {
      E.forEach((y) => y && clearTimeout(y));
    };
  }, [u, f]);
  let p = wt.useCallback(() => {
    f && Gc({ type: 6, time: Date.now() });
  }, [f]), g = wt.useCallback((b, E) => {
    let { reverseOrder: y = !1, gutter: _ = 8, defaultPosition: N } = E || {}, k = u.filter((I) => (I.position || N) === (b.position || N) && I.height), D = k.findIndex((I) => I.id === b.id), M = k.filter((I, B) => B < D && I.visible).length;
    return k.filter((I) => I.visible).slice(...y ? [M + 1] : [0, M]).reduce((I, B) => I + (B.height || 0) + _, 0);
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
}`, vL = pu`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, hL = pu`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, mL = Cs("div")`
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
    animation: ${vL} 0.15s ease-out forwards;
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
    animation: ${hL} 0.15s ease-out forwards;
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
`, gL = Cs("div")`
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
}`, bL = Cs("div")`
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
`, CL = Cs("div")`
  position: absolute;
`, wL = Cs("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, xL = pu`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, TL = Cs("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xL} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, _L = ({ toast: s }) => {
  let { icon: u, type: f, iconTheme: p } = s;
  return u !== void 0 ? typeof u == "string" ? wt.createElement(TL, null, u) : u : f === "blank" ? null : wt.createElement(wL, null, wt.createElement(gL, { ...p }), f !== "loading" && wt.createElement(CL, null, f === "error" ? wt.createElement(mL, { ...p }) : wt.createElement(bL, { ...p })));
}, RL = (s) => `
0% {transform: translate3d(0,${s * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, kL = (s) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s * -150}%,-1px) scale(.6); opacity:0;}
`, OL = "0%{opacity:0;} 100%{opacity:1;}", DL = "0%{opacity:1;} 100%{opacity:0;}", AL = Cs("div")`
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
`, NL = Cs("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, ML = (s, u) => {
  let f = s.includes("top") ? 1 : -1, [p, g] = ZT() ? [OL, DL] : [RL(f), kL(f)];
  return { animation: u ? `${pu(p)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${pu(g)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, LL = wt.memo(({ toast: s, position: u, style: f, children: p }) => {
  let g = s.height ? ML(s.position || u || "top-center", s.visible) : { opacity: 0 }, b = wt.createElement(_L, { toast: s }), E = wt.createElement(NL, { ...s.ariaProps }, lg(s.message, s));
  return wt.createElement(AL, { className: s.className, style: { ...g, ...f, ...s.style } }, typeof p == "function" ? p({ icon: b, message: E }) : wt.createElement(wt.Fragment, null, b, E));
});
tL(wt.createElement);
var zL = ({ id: s, className: u, style: f, onHeightUpdate: p, children: g }) => {
  let b = wt.useCallback((E) => {
    if (E) {
      let y = () => {
        let _ = E.getBoundingClientRect().height;
        p(s, _);
      };
      y(), new MutationObserver(y).observe(E, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [s, p]);
  return wt.createElement("div", { ref: b, className: u, style: f }, g);
}, UL = (s, u) => {
  let f = s.includes("top"), p = f ? { top: 0 } : { bottom: 0 }, g = s.includes("center") ? { justifyContent: "center" } : s.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: ZT() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${u * (f ? 1 : -1)}px)`, ...p, ...g };
}, jL = bg`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, Qy = 16, PL = ({ reverseOrder: s, position: u = "top-center", toastOptions: f, gutter: p, children: g, containerStyle: b, containerClassName: E }) => {
  let { toasts: y, handlers: _ } = dL(f);
  return wt.createElement("div", { style: { position: "fixed", zIndex: 9999, top: Qy, left: Qy, right: Qy, bottom: Qy, pointerEvents: "none", ...b }, className: E, onMouseEnter: _.startPause, onMouseLeave: _.endPause }, y.map((N) => {
    let k = N.position || u, D = _.calculateOffset(N, { reverseOrder: s, gutter: p, defaultPosition: u }), M = UL(k, D);
    return wt.createElement(zL, { id: N.id, key: N.id, onHeightUpdate: _.updateHeight, className: N.visible ? jL : "", style: M }, N.type === "custom" ? lg(N.message, N) : g ? g(N) : wt.createElement(LL, { toast: N, position: k }));
  }));
}, Oo = wi, Rr = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
let FL = 0;
function e_(s, u) {
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
}, Z1 = (s, u) => {
  const f = ug.get(s);
  f && (ug.delete(s), f(u));
}, eT = (s, u) => {
  s.status = "fulfilled", s.value = u;
}, tT = (s, u) => {
  s.status = "rejected", s.reason = u;
}, VL = (s) => typeof (s == null ? void 0 : s.then) == "function", Hv = (s, u) => !!s && "v" in s && "v" in u && Object.is(s.v, u.v), nT = (s, u) => !!s && "e" in s && "e" in u && Object.is(s.e, u.e), Nd = (s) => !!s && "v" in s && s.v instanceof Promise, IL = (s, u) => "v" in s && "v" in u && s.v.orig && s.v.orig === u.v.orig, Gy = (s) => {
  if ("e" in s)
    throw s.e;
  return s.v;
}, t_ = () => {
  const s = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new Map();
  let p, g;
  (Rr ? "production" : void 0) !== "production" && (p = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set());
  const b = (X) => s.get(X), E = (X, Te) => {
    (Rr ? "production" : void 0) !== "production" && Object.freeze(Te);
    const De = b(X);
    if (s.set(X, Te), f.has(X) || f.set(X, De), Nd(De)) {
      const _e = "v" in Te ? Te.v instanceof Promise ? Te.v : Promise.resolve(Te.v) : Promise.reject(Te.e);
      De.v !== _e && Z1(De.v, _e);
    }
  }, y = (X, Te, De, _e) => {
    const Ce = new Map(
      _e ? Te.d : null
    );
    let Ae = !1;
    De.forEach((le, re) => {
      !le && nb(X, re) && (le = Te), le ? (Ce.set(re, le), Te.d.get(re) !== le && (Ae = !0)) : (Rr ? "production" : void 0) !== "production" && console.warn("[Bug] atom state not found");
    }), (Ae || Te.d.size !== Ce.size) && (Te.d = Ce);
  }, _ = (X, Te, De, _e) => {
    const Ce = b(X), Ae = {
      d: (Ce == null ? void 0 : Ce.d) || /* @__PURE__ */ new Map(),
      v: Te
    };
    if (De && y(
      X,
      Ae,
      De,
      _e
    ), Hv(Ce, Ae) && Ce.d === Ae.d)
      return Ce;
    if (Nd(Ce) && Nd(Ae) && IL(Ce, Ae)) {
      if (Ce.d === Ae.d)
        return Ce;
      Ae.v = Ce.v;
    }
    return E(X, Ae), Ae;
  }, N = (X, Te, De, _e) => {
    if (VL(Te)) {
      let Ce;
      const Ae = () => {
        const re = b(X);
        if (!Nd(re) || re.v !== le)
          return;
        const he = _(
          X,
          le,
          De
        );
        u.has(X) && re.d !== he.d && ue(X, he, re.d);
      }, le = new Promise((re, he) => {
        let pe = !1;
        Te.then(
          (O) => {
            pe || (pe = !0, eT(le, O), re(O), Ae());
          },
          (O) => {
            pe || (pe = !0, tT(le, O), he(O), Ae());
          }
        ), Ce = (O) => {
          pe || (pe = !0, O.then(
            (ae) => eT(le, ae),
            (ae) => tT(le, ae)
          ), re(O));
        };
      });
      return le.orig = Te, le.status = "pending", BL(le, (re) => {
        re && Ce(re), _e == null || _e();
      }), _(X, le, De, !0);
    }
    return _(X, Te, De);
  }, k = (X, Te, De) => {
    const _e = b(X), Ce = {
      d: (_e == null ? void 0 : _e.d) || /* @__PURE__ */ new Map(),
      e: Te
    };
    return De && y(X, Ce, De), nT(_e, Ce) && _e.d === Ce.d ? _e : (E(X, Ce), Ce);
  }, D = (X, Te) => {
    const De = b(X);
    if (!Te && De && (u.has(X) || Array.from(De.d).every(([pe, O]) => {
      if (pe === X)
        return !0;
      const ae = D(pe);
      return ae === O || Hv(ae, O);
    })))
      return De;
    const _e = /* @__PURE__ */ new Map();
    let Ce = !0;
    const Ae = (pe) => {
      if (nb(X, pe)) {
        const ae = b(pe);
        if (ae)
          return _e.set(pe, ae), Gy(ae);
        if (rb(pe))
          return _e.set(pe, void 0), pe.init;
        throw new Error("no atom init");
      }
      const O = D(pe);
      return _e.set(pe, O), Gy(O);
    };
    let le, re;
    const he = {
      get signal() {
        return le || (le = new AbortController()), le.signal;
      },
      get setSelf() {
        return (Rr ? "production" : void 0) !== "production" && !ab(X) && console.warn("setSelf function cannot be used with read-only atom"), !re && ab(X) && (re = (...pe) => {
          if ((Rr ? "production" : void 0) !== "production" && Ce && console.warn("setSelf function cannot be called in sync"), !Ce)
            return Ke(X, ...pe);
        }), re;
      }
    };
    try {
      const pe = X.read(Ae, he);
      return N(
        X,
        pe,
        _e,
        () => le == null ? void 0 : le.abort()
      );
    } catch (pe) {
      return k(X, pe, _e);
    } finally {
      Ce = !1;
    }
  }, M = (X) => Gy(D(X)), I = (X) => {
    let Te = u.get(X);
    return Te || (Te = ze(X)), Te;
  }, B = (X, Te) => !Te.l.size && (!Te.t.size || Te.t.size === 1 && Te.t.has(X)), ee = (X) => {
    const Te = u.get(X);
    Te && B(X, Te) && Be(X);
  }, fe = (X) => {
    const Te = (le) => {
      var re;
      const he = new Set((re = u.get(le)) == null ? void 0 : re.t);
      return f.forEach((pe, O) => {
        var ae;
        (ae = b(O)) != null && ae.d.has(le) && he.add(O);
      }), he;
    }, De = new Array(), _e = /* @__PURE__ */ new Set(), Ce = (le) => {
      if (!_e.has(le)) {
        _e.add(le);
        for (const re of Te(le))
          le !== re && Ce(re);
        De.push(le);
      }
    };
    Ce(X);
    const Ae = /* @__PURE__ */ new Set([X]);
    for (let le = De.length - 1; le >= 0; --le) {
      const re = De[le], he = b(re);
      if (!he)
        continue;
      let pe = !1;
      for (const O of he.d.keys())
        if (O !== re && Ae.has(O)) {
          pe = !0;
          break;
        }
      if (pe) {
        const O = D(re, !0);
        Hv(he, O) || Ae.add(re);
      }
    }
  }, Le = (X, ...Te) => {
    let De = !0;
    const _e = (le) => Gy(D(le)), Ce = (le, ...re) => {
      let he;
      if (nb(X, le)) {
        if (!rb(le))
          throw new Error("atom not writable");
        const pe = b(le), O = N(le, re[0]);
        Hv(pe, O) || fe(le);
      } else
        he = Le(le, ...re);
      if (!De) {
        const pe = Ue();
        (Rr ? "production" : void 0) !== "production" && p.forEach(
          (O) => O({ type: "async-write", flushed: pe })
        );
      }
      return he;
    }, Ae = X.write(_e, Ce, ...Te);
    return De = !1, Ae;
  }, Ke = (X, ...Te) => {
    const De = Le(X, ...Te), _e = Ue();
    return (Rr ? "production" : void 0) !== "production" && p.forEach(
      (Ce) => Ce({ type: "write", flushed: _e })
    ), De;
  }, ze = (X, Te, De) => {
    var _e;
    const Ce = De || [];
    (_e = b(X)) == null || _e.d.forEach((le, re) => {
      const he = u.get(re);
      he ? he.t.add(X) : re !== X && ze(re, X, Ce);
    }), D(X);
    const Ae = {
      t: new Set(Te && [Te]),
      l: /* @__PURE__ */ new Set()
    };
    if (u.set(X, Ae), (Rr ? "production" : void 0) !== "production" && g.add(X), ab(X) && X.onMount) {
      const { onMount: le } = X;
      Ce.push(() => {
        const re = le((...he) => Ke(X, ...he));
        re && (Ae.u = re);
      });
    }
    return De || Ce.forEach((le) => le()), Ae;
  }, Be = (X) => {
    var Te;
    const De = (Te = u.get(X)) == null ? void 0 : Te.u;
    De && De(), u.delete(X), (Rr ? "production" : void 0) !== "production" && g.delete(X);
    const _e = b(X);
    _e ? (Nd(_e) && Z1(_e.v), _e.d.forEach((Ce, Ae) => {
      if (Ae !== X) {
        const le = u.get(Ae);
        le && (le.t.delete(X), B(Ae, le) && Be(Ae));
      }
    })) : (Rr ? "production" : void 0) !== "production" && console.warn("[Bug] could not find atom state to unmount", X);
  }, ue = (X, Te, De) => {
    const _e = new Set(Te.d.keys()), Ce = /* @__PURE__ */ new Set();
    De == null || De.forEach((Ae, le) => {
      if (_e.has(le)) {
        _e.delete(le);
        return;
      }
      Ce.add(le);
      const re = u.get(le);
      re && re.t.delete(X);
    }), _e.forEach((Ae) => {
      const le = u.get(Ae);
      le ? le.t.add(X) : u.has(X) && ze(Ae, X);
    }), Ce.forEach((Ae) => {
      const le = u.get(Ae);
      le && B(Ae, le) && Be(Ae);
    });
  }, Ue = () => {
    let X;
    for ((Rr ? "production" : void 0) !== "production" && (X = /* @__PURE__ */ new Set()); f.size; ) {
      const Te = Array.from(f);
      f.clear(), Te.forEach(([De, _e]) => {
        const Ce = b(De);
        if (Ce) {
          const Ae = u.get(De);
          Ae && Ce.d !== (_e == null ? void 0 : _e.d) && ue(De, Ce, _e == null ? void 0 : _e.d), Ae && !// TODO This seems pretty hacky. Hope to fix it.
          // Maybe we could `mountDependencies` in `setAtomState`?
          (!Nd(_e) && (Hv(_e, Ce) || nT(_e, Ce))) && (Ae.l.forEach((le) => le()), (Rr ? "production" : void 0) !== "production" && X.add(De));
        } else
          (Rr ? "production" : void 0) !== "production" && console.warn("[Bug] no atom state to flush");
      });
    }
    if ((Rr ? "production" : void 0) !== "production")
      return X;
  }, gt = (X, Te) => {
    const De = I(X), _e = Ue(), Ce = De.l;
    return Ce.add(Te), (Rr ? "production" : void 0) !== "production" && p.forEach(
      (Ae) => Ae({ type: "sub", flushed: _e })
    ), () => {
      Ce.delete(Te), ee(X), (Rr ? "production" : void 0) !== "production" && p.forEach((Ae) => Ae({ type: "unsub" }));
    };
  };
  return (Rr ? "production" : void 0) !== "production" ? {
    get: M,
    set: Ke,
    sub: gt,
    // store dev methods (these are tentative and subject to change without notice)
    dev_subscribe_store: (X, Te) => {
      if (Te !== 2)
        throw new Error("The current StoreListener revision is 2.");
      return p.add(X), () => {
        p.delete(X);
      };
    },
    dev_get_mounted_atoms: () => g.values(),
    dev_get_atom_state: (X) => s.get(X),
    dev_get_mounted: (X) => u.get(X),
    dev_restore_atoms: (X) => {
      for (const [De, _e] of X)
        rb(De) && (N(De, _e), fe(De));
      const Te = Ue();
      p.forEach(
        (De) => De({ type: "restore", flushed: Te })
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
), ib = t_()), ib);
var YL = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const n_ = wt.createContext(void 0), r_ = (s) => {
  const u = wt.useContext(n_);
  return (s == null ? void 0 : s.store) || u || WL();
}, qL = ({
  children: s,
  store: u
}) => {
  const f = wt.useRef();
  return !u && !f.current && (f.current = t_()), wt.createElement(
    n_.Provider,
    {
      value: u || f.current
    },
    s
  );
}, QL = (s) => typeof (s == null ? void 0 : s.then) == "function", GL = Nb.use || ((s) => {
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
  const f = r_(u), [[p, g, b], E] = wt.useReducer(
    (N) => {
      const k = f.get(s);
      return Object.is(N[0], k) && N[1] === f && N[2] === s ? N : [k, f, s];
    },
    void 0,
    () => [f.get(s), f, s]
  );
  let y = p;
  (g !== f || b !== s) && (E(), y = f.get(s));
  const _ = u == null ? void 0 : u.delay;
  return wt.useEffect(() => {
    const N = f.sub(s, () => {
      if (typeof _ == "number") {
        setTimeout(E, _);
        return;
      }
      E();
    });
    return E(), N;
  }, [f, s, _]), wt.useDebugValue(y), QL(y) ? GL(y) : y;
}
function XL(s, u) {
  const f = r_(u);
  return wt.useCallback(
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
const a_ = e_([]), i_ = e_(twChatSettings.chat_widgets ? twChatSettings.chat_widgets : []);
function JL() {
  const [s, u] = wt.useState({
    tw_chat_button_text: twChatSettings.tw_chat_button_text,
    // tw_chat_assistant_name: twChatSettings.tw_chat_assistant_name,
    tw_chat_openai_key: twChatSettings.tw_chat_openai_key,
    // tw_chat_assistant_id: twChatSettings.tw_chat_assistant_id,
    // tw_chat_greeting: twChatSettings.tw_chat_greeting,
    tw_chat_disclaimer: twChatSettings.tw_chat_disclaimer,
    tw_chat_error_message: twChatSettings.tw_chat_error_message,
    tw_chat_is_enabled: twChatSettings.tw_chat_is_enabled,
    tw_chat_max_characters: twChatSettings.tw_chat_max_characters,
    tw_chat_global_widget_id: twChatSettings.tw_chat_global_widget_id
  }), [f, p] = wt.useState(!1), [g, b] = Fb(i_), E = function(N) {
    N.preventDefault(), p(!0), Gn.post(twChatSettings.ajax_url, {
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
  }, y = function(N) {
    const { name: k, value: D } = N.target;
    let M = s;
    M[k] = D, u(M);
  }, _ = function(N) {
    const { name: k, value: D, checked: M } = N.target;
    let I = s;
    M ? (console.log(N.target.value), I[k] = D) : (console.log("Not checked"), I[k] = ""), u(I);
  };
  return /* @__PURE__ */ te.jsx(te.Fragment, { children: /* @__PURE__ */ te.jsxs("form", { id: "tw-chat-settings-form", onSubmit: E, children: [
    /* @__PURE__ */ te.jsx("p", { children: "Enter your OpenAI API key to connect to your account." }),
    /* @__PURE__ */ te.jsx("table", { className: "form-table", children: /* @__PURE__ */ te.jsx("tbody", { children: /* @__PURE__ */ te.jsxs("tr", { valign: "top", children: [
      /* @__PURE__ */ te.jsx("th", { scope: "row", children: "OpenAI Key" }),
      /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_openai_key", onChange: y, defaultValue: s.tw_chat_openai_key }) })
    ] }) }) }),
    /* @__PURE__ */ te.jsx("p", { children: "Global settings for chat widget functionality." }),
    /* @__PURE__ */ te.jsx("table", { className: "form-table", children: /* @__PURE__ */ te.jsxs("tbody", { children: [
      /* @__PURE__ */ te.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ te.jsx("th", { scope: "row", children: "Chat Error Message" }),
        /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_error_message", onChange: y, defaultValue: s.tw_chat_error_message }) })
      ] }),
      /* @__PURE__ */ te.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ te.jsx("th", { scope: "row", children: "Disclaimer" }),
        /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsx("textarea", { className: "regular-text", name: "tw_chat_disclaimer", rows: "5", onChange: y, defaultValue: s.tw_chat_disclaimer }) })
      ] }),
      /* @__PURE__ */ te.jsxs("tr", { valign: "top", children: [
        /* @__PURE__ */ te.jsx("th", { scope: "row", children: "Maximum Characters Allowed" }),
        /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsx("input", { className: "regular-text", type: "number", name: "tw_chat_max_characters", onChange: y, defaultValue: s.tw_chat_max_characters }) })
      ] })
    ] }) }),
    g.length > 0 && /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
      /* @__PURE__ */ te.jsx("p", { children: "Set up your global chat widget that appears in the lower right corner of the screen." }),
      /* @__PURE__ */ te.jsx("table", { className: "form-table", children: /* @__PURE__ */ te.jsxs("tbody", { children: [
        /* @__PURE__ */ te.jsxs("tr", { children: [
          /* @__PURE__ */ te.jsx("th", { scope: "row", children: "Enable Global Chat Widget" }),
          /* @__PURE__ */ te.jsxs("td", { children: [
            /* @__PURE__ */ te.jsx(
              "input",
              {
                type: "checkbox",
                id: "tw_chat_is_enabled",
                name: "tw_chat_is_enabled",
                defaultValue: "enabled",
                defaultChecked: !!s.tw_chat_is_enabled,
                onChange: _
              }
            ),
            /* @__PURE__ */ te.jsx("label", { htmlFor: "tw_chat_is_enabled", children: "Enable" })
          ] })
        ] }),
        /* @__PURE__ */ te.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ te.jsx("th", { scope: "row", children: "Global Chat Widget" }),
          /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsxs("select", { name: "tw_chat_global_widget_id", onChange: y, defaultValue: s.tw_chat_global_widget_id, children: [
            /* @__PURE__ */ te.jsx("option", { value: "", children: "Select a chat widget" }),
            g.map((N) => /* @__PURE__ */ te.jsx("option", { value: N.id, children: N.name }, N.id))
          ] }) })
        ] }),
        /* @__PURE__ */ te.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ te.jsx("th", { scope: "row", children: "Chat Button Text" }),
          /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_button_text", onChange: y, defaultValue: s.tw_chat_button_text }) })
        ] })
      ] }) })
    ] }),
    f ? /* @__PURE__ */ te.jsxs("p", { children: [
      /* @__PURE__ */ te.jsx("span", { className: "spinner is-active" }),
      " Saving"
    ] }) : /* @__PURE__ */ te.jsx("input", { className: "button button-hero button-primary", type: "submit", value: "Submit" })
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
function o_(s) {
  Kc = s;
}
const l_ = /[&<>"']/, ZL = new RegExp(l_.source, "g"), u_ = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ez = new RegExp(u_.source, "g"), tz = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, rT = (s) => tz[s];
function bi(s, u) {
  if (u) {
    if (l_.test(s))
      return s.replace(ZL, rT);
  } else if (u_.test(s))
    return s.replace(ez, rT);
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
function aT(s) {
  try {
    s = encodeURI(s).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return s;
}
const Iv = { exec: () => null };
function iT(s, u) {
  const f = s.replace(/\|/g, (b, E, y) => {
    let _ = !1, N = E;
    for (; --N >= 0 && y[N] === "\\"; )
      _ = !_;
    return _ ? "|" : " |";
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
function oT(s, u, f, p) {
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
    Nn(this, "options");
    Nn(this, "rules");
    // set by the lexer
    Nn(this, "lexer");
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
      let y = "", _ = "", N = !1;
      for (; u; ) {
        let k = !1;
        if (!(f = E.exec(u)) || this.rules.block.hr.test(u))
          break;
        y = f[0], u = u.substring(y.length);
        let D = f[2].split(`
`, 1)[0].replace(/^\t+/, (Le) => " ".repeat(3 * Le.length)), M = u.split(`
`, 1)[0], I = 0;
        this.options.pedantic ? (I = 2, _ = D.trimStart()) : (I = f[2].search(/[^ ]/), I = I > 4 ? 1 : I, _ = D.slice(I), I += f[1].length);
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
              _ += `
` + M.slice(I);
            else {
              if (B || D.search(/[^ ]/) >= 4 || ze.test(D) || Be.test(D) || Ke.test(D))
                break;
              _ += `
` + M;
            }
            !B && !M.trim() && (B = !0), y += ue + `
`, u = u.substring(ue.length + 1), D = M.slice(I);
          }
        }
        b.loose || (N ? b.loose = !0 : /\n *\n *$/.test(y) && (N = !0));
        let ee = null, fe;
        this.options.gfm && (ee = /^\[[ xX]\] /.exec(_), ee && (fe = ee[0] !== "[ ] ", _ = _.replace(/^\[[ xX]\] +/, ""))), b.items.push({
          type: "list_item",
          raw: y,
          task: !!ee,
          checked: fe,
          loose: !1,
          text: _,
          tokens: []
        }), b.raw += y;
      }
      b.items[b.items.length - 1].raw = y.trimEnd(), b.items[b.items.length - 1].text = _.trimEnd(), b.raw = b.raw.trimEnd();
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
    const p = iT(f[1]), g = f[2].replace(/^\||\| *$/g, "").split("|"), b = f[3] && f[3].trim() ? f[3].replace(/\n[ \t]*$/, "").split(`
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
        E.rows.push(iT(y, E.header.length).map((_) => ({
          text: _,
          tokens: this.lexer.inline(_)
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
          const _ = (f[0].indexOf("!") === 0 ? 5 : 4) + f[1].length + E;
          f[2] = f[2].substring(0, E), f[0] = f[0].substring(0, _).trim(), f[3] = "";
        }
      }
      let g = f[2], b = "";
      if (this.options.pedantic) {
        const E = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(g);
        E && (g = E[1], b = E[3]);
      } else
        b = f[3] ? f[3].slice(1, -1) : "";
      return g = g.trim(), /^</.test(g) && (this.options.pedantic && !/>$/.test(p) ? g = g.slice(1) : g = g.slice(1, -1)), oT(f, {
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
      return oT(p, b, p[0], this.lexer);
    }
  }
  emStrong(u, f, p = "") {
    let g = this.rules.inline.emStrongLDelim.exec(u);
    if (!g || g[3] && p.match(/[\p{L}\p{N}]/u))
      return;
    if (!(g[1] || g[2] || "") || !p || this.rules.inline.punctuation.exec(p)) {
      const E = [...g[0]].length - 1;
      let y, _, N = E, k = 0;
      const D = g[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (D.lastIndex = 0, f = f.slice(-1 * u.length + E); (g = D.exec(f)) != null; ) {
        if (y = g[1] || g[2] || g[3] || g[4] || g[5] || g[6], !y)
          continue;
        if (_ = [...y].length, g[3] || g[4]) {
          N += _;
          continue;
        } else if ((g[5] || g[6]) && E % 3 && !((E + _) % 3)) {
          k += _;
          continue;
        }
        if (N -= _, N > 0)
          continue;
        _ = Math.min(_, _ + N + k);
        const M = [...g[0]][0].length, I = u.slice(0, E + g.index + M + _);
        if (Math.min(E, _) % 2) {
          const ee = I.slice(1, -1);
          return {
            type: "em",
            raw: I,
            text: ee,
            tokens: this.lexer.inlineTokens(ee)
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
const lz = /^(?: *(?:\n|$))+/, uz = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, sz = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Zv = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, cz = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, s_ = /(?:[*+-]|\d{1,9}[.)])/, c_ = gn(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, s_).getRegex(), $b = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, fz = /^[^\n]+/, Bb = /(?!\s*\])(?:\\.|[^\[\]\\])+/, dz = gn(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Bb).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), pz = gn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, s_).getRegex(), Cg = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Vb = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, vz = gn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Vb).replace("tag", Cg).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), f_ = gn($b).replace("hr", Zv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Cg).getRegex(), hz = gn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", f_).getRegex(), Ib = {
  blockquote: hz,
  code: uz,
  def: dz,
  fences: sz,
  heading: cz,
  hr: Zv,
  html: vz,
  lheading: c_,
  list: pz,
  newline: lz,
  paragraph: f_,
  table: Iv,
  text: fz
}, lT = gn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Zv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Cg).getRegex(), mz = {
  ...Ib,
  table: lT,
  paragraph: gn($b).replace("hr", Zv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", lT).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Cg).getRegex()
}, yz = {
  ...Ib,
  html: gn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Vb).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Iv,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: gn($b).replace("hr", Zv).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", c_).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, d_ = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, gz = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, p_ = /^( {2,}|\\)\n(?!\s*$)/, Sz = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, eh = "\\p{P}\\p{S}", Ez = gn(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, eh).getRegex(), bz = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Cz = gn(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, eh).getRegex(), wz = gn("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, eh).getRegex(), xz = gn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, eh).getRegex(), Tz = gn(/\\([punct])/, "gu").replace(/punct/g, eh).getRegex(), _z = gn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Rz = gn(Vb).replace("(?:-->|$)", "-->").getRegex(), kz = gn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Rz).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), cg = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Oz = gn(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", cg).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), v_ = gn(/^!?\[(label)\]\[(ref)\]/).replace("label", cg).replace("ref", Bb).getRegex(), h_ = gn(/^!?\[(ref)\](?:\[\])?/).replace("ref", Bb).getRegex(), Dz = gn("reflink|nolink(?!\\()", "g").replace("reflink", v_).replace("nolink", h_).getRegex(), Wb = {
  _backpedal: Iv,
  // only used for GFM url
  anyPunctuation: Tz,
  autolink: _z,
  blockSkip: bz,
  br: p_,
  code: gz,
  del: Iv,
  emStrongLDelim: Cz,
  emStrongRDelimAst: wz,
  emStrongRDelimUnd: xz,
  escape: d_,
  link: Oz,
  nolink: h_,
  punctuation: Ez,
  reflink: v_,
  reflinkSearch: Dz,
  tag: kz,
  text: Sz,
  url: Iv
}, Az = {
  ...Wb,
  link: gn(/^!?\[(label)\]\((.*?)\)/).replace("label", cg).getRegex(),
  reflink: gn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", cg).getRegex()
}, wb = {
  ...Wb,
  escape: gn(d_).replace("])", "~|])").getRegex(),
  url: gn(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Nz = {
  ...wb,
  br: gn(p_).replace("{2,}", "*").getRegex(),
  text: gn(wb.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Xy = {
  normal: Ib,
  gfm: mz,
  pedantic: yz
}, $v = {
  normal: Wb,
  gfm: wb,
  breaks: Nz,
  pedantic: Az
};
class gl {
  constructor(u) {
    Nn(this, "tokens");
    Nn(this, "options");
    Nn(this, "state");
    Nn(this, "tokenizer");
    Nn(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = u || Kc, this.options.tokenizer = this.options.tokenizer || new sg(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const f = {
      block: Xy.normal,
      inline: $v.normal
    };
    this.options.pedantic ? (f.block = Xy.pedantic, f.inline = $v.pedantic) : this.options.gfm && (f.block = Xy.gfm, this.options.breaks ? f.inline = $v.breaks : f.inline = $v.gfm), this.tokenizer.rules = f;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Xy,
      inline: $v
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
    this.options.pedantic ? u = u.replace(/\t/g, "    ").replace(/^ +$/gm, "") : u = u.replace(/^( *)(\t+)/gm, (y, _, N) => _ + "    ".repeat(N.length));
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
          const _ = u.slice(1);
          let N;
          this.options.extensions.startBlock.forEach((k) => {
            N = k.call({ lexer: this }, _), typeof N == "number" && N >= 0 && (y = Math.min(y, N));
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
    let p, g, b, E = u, y, _, N;
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
      if (_ || (N = ""), _ = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((k) => (p = k.call({ lexer: this }, u, f)) ? (u = u.substring(p.raw.length), f.push(p), !0) : !1))) {
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
        if (p = this.tokenizer.emStrong(u, E, N)) {
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
          u = u.substring(p.raw.length), p.raw.slice(-1) !== "_" && (N = p.raw.slice(-1)), _ = !0, g = f[f.length - 1], g && g.type === "text" ? (g.raw += p.raw, g.text += p.text) : f.push(p);
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
    Nn(this, "options");
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
    const g = aT(u);
    if (g === null)
      return p;
    u = g;
    let b = '<a href="' + u + '"';
    return f && (b += ' title="' + f + '"'), b += ">" + p + "</a>", b;
  }
  image(u, f, p) {
    const g = aT(u);
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
    Nn(this, "options");
    Nn(this, "renderer");
    Nn(this, "textRenderer");
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
          let y = "", _ = "";
          for (let k = 0; k < E.header.length; k++)
            _ += this.renderer.tablecell(this.parseInline(E.header[k].tokens), { header: !0, align: E.align[k] });
          y += this.renderer.tablerow(_);
          let N = "";
          for (let k = 0; k < E.rows.length; k++) {
            const D = E.rows[k];
            _ = "";
            for (let M = 0; M < D.length; M++)
              _ += this.renderer.tablecell(this.parseInline(D[M].tokens), { header: !1, align: E.align[M] });
            N += this.renderer.tablerow(_);
          }
          p += this.renderer.table(y, N);
          continue;
        }
        case "blockquote": {
          const E = b, y = this.parse(E.tokens);
          p += this.renderer.blockquote(y);
          continue;
        }
        case "list": {
          const E = b, y = E.ordered, _ = E.start, N = E.loose;
          let k = "";
          for (let D = 0; D < E.items.length; D++) {
            const M = E.items[D], I = M.checked, B = M.task;
            let ee = "";
            if (M.task) {
              const fe = this.renderer.checkbox(!!I);
              N ? M.tokens.length > 0 && M.tokens[0].type === "paragraph" ? (M.tokens[0].text = fe + " " + M.tokens[0].text, M.tokens[0].tokens && M.tokens[0].tokens.length > 0 && M.tokens[0].tokens[0].type === "text" && (M.tokens[0].tokens[0].text = fe + " " + M.tokens[0].tokens[0].text)) : M.tokens.unshift({
                type: "text",
                text: fe + " "
              }) : ee += fe + " ";
            }
            ee += this.parse(M.tokens, N), k += this.renderer.listitem(ee, B, !!I);
          }
          p += this.renderer.list(k, y, _);
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
class Wv {
  constructor(u) {
    Nn(this, "options");
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
Nn(Wv, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var Gv, xb, hg, m_;
class Mz {
  constructor(...u) {
    GE(this, Gv);
    GE(this, hg);
    Nn(this, "defaults", Hb());
    Nn(this, "options", this.setOptions);
    Nn(this, "parse", Wy(this, Gv, xb).call(this, gl.lex, Sl.parse));
    Nn(this, "parseInline", Wy(this, Gv, xb).call(this, gl.lexInline, Sl.parseInline));
    Nn(this, "Parser", Sl);
    Nn(this, "Renderer", fg);
    Nn(this, "TextRenderer", Yb);
    Nn(this, "Lexer", gl);
    Nn(this, "Tokenizer", sg);
    Nn(this, "Hooks", Wv);
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
          for (const _ of y.header)
            p = p.concat(this.walkTokens(_.tokens, f));
          for (const _ of y.rows)
            for (const N of _)
              p = p.concat(this.walkTokens(N.tokens, f));
          break;
        }
        case "list": {
          const y = E;
          p = p.concat(this.walkTokens(y.items, f));
          break;
        }
        default: {
          const y = E;
          (b = (g = this.defaults.extensions) == null ? void 0 : g.childTokens) != null && b[y.type] ? this.defaults.extensions.childTokens[y.type].forEach((_) => {
            const N = y[_].flat(1 / 0);
            p = p.concat(this.walkTokens(N, f));
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
            let _ = b.renderer.apply(this, y);
            return _ === !1 && (_ = E.apply(this, y)), _;
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
          const y = E, _ = p.renderer[y], N = b[y];
          b[y] = (...k) => {
            let D = _.apply(b, k);
            return D === !1 && (D = N.apply(b, k)), D || "";
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
          const y = E, _ = p.tokenizer[y], N = b[y];
          b[y] = (...k) => {
            let D = _.apply(b, k);
            return D === !1 && (D = N.apply(b, k)), D;
          };
        }
        g.tokenizer = b;
      }
      if (p.hooks) {
        const b = this.defaults.hooks || new Wv();
        for (const E in p.hooks) {
          if (!(E in b))
            throw new Error(`hook '${E}' does not exist`);
          if (E === "options")
            continue;
          const y = E, _ = p.hooks[y], N = b[y];
          Wv.passThroughHooks.has(E) ? b[y] = (k) => {
            if (this.defaults.async)
              return Promise.resolve(_.call(b, k)).then((M) => N.call(b, M));
            const D = _.call(b, k);
            return N.call(b, D);
          } : b[y] = (...k) => {
            let D = _.apply(b, k);
            return D === !1 && (D = N.apply(b, k)), D;
          };
        }
        g.hooks = b;
      }
      if (p.walkTokens) {
        const b = this.defaults.walkTokens, E = p.walkTokens;
        g.walkTokens = function(y) {
          let _ = [];
          return _.push(E.call(this, y)), b && (_ = _.concat(b.call(this, y))), _;
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
Gv = new WeakSet(), xb = function(u, f) {
  return (p, g) => {
    const b = { ...g }, E = { ...this.defaults, ...b };
    this.defaults.async === !0 && b.async === !1 && (E.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), E.async = !0);
    const y = Wy(this, hg, m_).call(this, !!E.silent, !!E.async);
    if (typeof p > "u" || p === null)
      return y(new Error("marked(): input parameter is undefined or null"));
    if (typeof p != "string")
      return y(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(p) + ", string expected"));
    if (E.hooks && (E.hooks.options = E), E.async)
      return Promise.resolve(E.hooks ? E.hooks.preprocess(p) : p).then((_) => u(_, E)).then((_) => E.hooks ? E.hooks.processAllTokens(_) : _).then((_) => E.walkTokens ? Promise.all(this.walkTokens(_, E.walkTokens)).then(() => _) : _).then((_) => f(_, E)).then((_) => E.hooks ? E.hooks.postprocess(_) : _).catch(y);
    try {
      E.hooks && (p = E.hooks.preprocess(p));
      let _ = u(p, E);
      E.hooks && (_ = E.hooks.processAllTokens(_)), E.walkTokens && this.walkTokens(_, E.walkTokens);
      let N = f(_, E);
      return E.hooks && (N = E.hooks.postprocess(N)), N;
    } catch (_) {
      return y(_);
    }
  };
}, hg = new WeakSet(), m_ = function(u, f) {
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
  return Yc.setOptions(s), fn.defaults = Yc.defaults, o_(fn.defaults), fn;
};
fn.getDefaults = Hb;
fn.defaults = Kc;
fn.use = function(...s) {
  return Yc.use(...s), fn.defaults = Yc.defaults, o_(fn.defaults), fn;
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
fn.Hooks = Wv;
fn.parse = fn;
fn.options;
fn.setOptions;
fn.use;
fn.walkTokens;
fn.parseInline;
Sl.parse;
gl.lex;
var Tb = { exports: {} }, qc = {}, _b = { exports: {} }, Jy = { exports: {} }, ln = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function Lz() {
  if (uT)
    return ln;
  uT = 1;
  var s = typeof Symbol == "function" && Symbol.for, u = s ? Symbol.for("react.element") : 60103, f = s ? Symbol.for("react.portal") : 60106, p = s ? Symbol.for("react.fragment") : 60107, g = s ? Symbol.for("react.strict_mode") : 60108, b = s ? Symbol.for("react.profiler") : 60114, E = s ? Symbol.for("react.provider") : 60109, y = s ? Symbol.for("react.context") : 60110, _ = s ? Symbol.for("react.async_mode") : 60111, N = s ? Symbol.for("react.concurrent_mode") : 60111, k = s ? Symbol.for("react.forward_ref") : 60112, D = s ? Symbol.for("react.suspense") : 60113, M = s ? Symbol.for("react.suspense_list") : 60120, I = s ? Symbol.for("react.memo") : 60115, B = s ? Symbol.for("react.lazy") : 60116, ee = s ? Symbol.for("react.block") : 60121, fe = s ? Symbol.for("react.fundamental") : 60117, Le = s ? Symbol.for("react.responder") : 60118, Ke = s ? Symbol.for("react.scope") : 60119;
  function ze(ue) {
    if (typeof ue == "object" && ue !== null) {
      var Ue = ue.$$typeof;
      switch (Ue) {
        case u:
          switch (ue = ue.type, ue) {
            case _:
            case N:
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
    return ze(ue) === N;
  }
  return ln.AsyncMode = _, ln.ConcurrentMode = N, ln.ContextConsumer = y, ln.ContextProvider = E, ln.Element = u, ln.ForwardRef = k, ln.Fragment = p, ln.Lazy = B, ln.Memo = I, ln.Portal = f, ln.Profiler = b, ln.StrictMode = g, ln.Suspense = D, ln.isAsyncMode = function(ue) {
    return Be(ue) || ze(ue) === _;
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
    return typeof ue == "string" || typeof ue == "function" || ue === p || ue === N || ue === b || ue === g || ue === D || ue === M || typeof ue == "object" && ue !== null && (ue.$$typeof === B || ue.$$typeof === I || ue.$$typeof === E || ue.$$typeof === y || ue.$$typeof === k || ue.$$typeof === fe || ue.$$typeof === Le || ue.$$typeof === Ke || ue.$$typeof === ee);
  }, ln.typeOf = ze, ln;
}
var un = {}, sT;
function zz() {
  if (sT)
    return un;
  sT = 1;
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
    var u = typeof Symbol == "function" && Symbol.for, f = u ? Symbol.for("react.element") : 60103, p = u ? Symbol.for("react.portal") : 60106, g = u ? Symbol.for("react.fragment") : 60107, b = u ? Symbol.for("react.strict_mode") : 60108, E = u ? Symbol.for("react.profiler") : 60114, y = u ? Symbol.for("react.provider") : 60109, _ = u ? Symbol.for("react.context") : 60110, N = u ? Symbol.for("react.async_mode") : 60111, k = u ? Symbol.for("react.concurrent_mode") : 60111, D = u ? Symbol.for("react.forward_ref") : 60112, M = u ? Symbol.for("react.suspense") : 60113, I = u ? Symbol.for("react.suspense_list") : 60120, B = u ? Symbol.for("react.memo") : 60115, ee = u ? Symbol.for("react.lazy") : 60116, fe = u ? Symbol.for("react.block") : 60121, Le = u ? Symbol.for("react.fundamental") : 60117, Ke = u ? Symbol.for("react.responder") : 60118, ze = u ? Symbol.for("react.scope") : 60119;
    function Be(Re) {
      return typeof Re == "string" || typeof Re == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Re === g || Re === k || Re === E || Re === b || Re === M || Re === I || typeof Re == "object" && Re !== null && (Re.$$typeof === ee || Re.$$typeof === B || Re.$$typeof === y || Re.$$typeof === _ || Re.$$typeof === D || Re.$$typeof === Le || Re.$$typeof === Ke || Re.$$typeof === ze || Re.$$typeof === fe);
    }
    function ue(Re) {
      if (typeof Re == "object" && Re !== null) {
        var $t = Re.$$typeof;
        switch ($t) {
          case f:
            var Mn = Re.type;
            switch (Mn) {
              case N:
              case k:
              case g:
              case E:
              case b:
              case M:
                return Mn;
              default:
                var Ln = Mn && Mn.$$typeof;
                switch (Ln) {
                  case _:
                  case D:
                  case ee:
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
    var Ue = N, gt = k, X = _, Te = y, De = f, _e = D, Ce = g, Ae = ee, le = B, re = p, he = E, pe = b, O = M, ae = !1;
    function L(Re) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), j(Re) || ue(Re) === N;
    }
    function j(Re) {
      return ue(Re) === k;
    }
    function J(Re) {
      return ue(Re) === _;
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
      return ue(Re) === ee;
    }
    function Ne(Re) {
      return ue(Re) === B;
    }
    function ot(Re) {
      return ue(Re) === p;
    }
    function St(Re) {
      return ue(Re) === E;
    }
    function ht(Re) {
      return ue(Re) === b;
    }
    function Zt(Re) {
      return ue(Re) === M;
    }
    un.AsyncMode = Ue, un.ConcurrentMode = gt, un.ContextConsumer = X, un.ContextProvider = Te, un.Element = De, un.ForwardRef = _e, un.Fragment = Ce, un.Lazy = Ae, un.Memo = le, un.Portal = re, un.Profiler = he, un.StrictMode = pe, un.Suspense = O, un.isAsyncMode = L, un.isConcurrentMode = j, un.isContextConsumer = J, un.isContextProvider = be, un.isElement = Se, un.isForwardRef = ke, un.isFragment = He, un.isLazy = Pe, un.isMemo = Ne, un.isPortal = ot, un.isProfiler = St, un.isStrictMode = ht, un.isSuspense = Zt, un.isValidElementType = Be, un.typeOf = ue;
  }(), un;
}
var cT;
function y_() {
  if (cT)
    return Jy.exports;
  cT = 1;
  var s = {};
  return s.NODE_ENV === "production" ? Jy.exports = Lz() : Jy.exports = zz(), Jy.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ob, fT;
function Uz() {
  if (fT)
    return ob;
  fT = 1;
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
      var _ = Object.getOwnPropertyNames(E).map(function(k) {
        return E[k];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var N = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(k) {
        N[k] = k;
      }), Object.keys(Object.assign({}, N)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ob = g() ? Object.assign : function(b, E) {
    for (var y, _ = p(b), N, k = 1; k < arguments.length; k++) {
      y = Object(arguments[k]);
      for (var D in y)
        u.call(y, D) && (_[D] = y[D]);
      if (s) {
        N = s(y);
        for (var M = 0; M < N.length; M++)
          f.call(y, N[M]) && (_[N[M]] = y[N[M]]);
      }
    }
    return _;
  }, ob;
}
var lb, dT;
function qb() {
  if (dT)
    return lb;
  dT = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lb = s, lb;
}
var ub, pT;
function g_() {
  return pT || (pT = 1, ub = Function.call.bind(Object.prototype.hasOwnProperty)), ub;
}
var sb, vT;
function jz() {
  if (vT)
    return sb;
  vT = 1;
  var s = {}, u = function() {
  };
  if (s.NODE_ENV !== "production") {
    var f = qb(), p = {}, g = g_();
    u = function(E) {
      var y = "Warning: " + E;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function b(E, y, _, N, k) {
    if (s.NODE_ENV !== "production") {
      for (var D in E)
        if (g(E, D)) {
          var M;
          try {
            if (typeof E[D] != "function") {
              var I = Error(
                (N || "React class") + ": " + _ + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw I.name = "Invariant Violation", I;
            }
            M = E[D](y, D, N, _, null, f);
          } catch (ee) {
            M = ee;
          }
          if (M && !(M instanceof Error) && u(
            (N || "React class") + ": type specification of " + _ + " `" + D + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof M + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), M instanceof Error && !(M.message in p)) {
            p[M.message] = !0;
            var B = k ? k() : "";
            u(
              "Failed " + _ + " type: " + M.message + (B ?? "")
            );
          }
        }
    }
  }
  return b.resetWarningCache = function() {
    s.NODE_ENV !== "production" && (p = {});
  }, sb = b, sb;
}
var cb, hT;
function Pz() {
  if (hT)
    return cb;
  hT = 1;
  var s = {}, u = y_(), f = Uz(), p = qb(), g = g_(), b = jz(), E = function() {
  };
  s.NODE_ENV !== "production" && (E = function(_) {
    var N = "Warning: " + _;
    typeof console < "u" && console.error(N);
    try {
      throw new Error(N);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return cb = function(_, N) {
    var k = typeof Symbol == "function" && Symbol.iterator, D = "@@iterator";
    function M(j) {
      var J = j && (k && j[k] || j[D]);
      if (typeof J == "function")
        return J;
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
      node: _e(),
      objectOf: Te,
      oneOf: X,
      oneOfType: De,
      shape: Ae,
      exact: le
    };
    function ee(j, J) {
      return j === J ? j !== 0 || 1 / j === 1 / J : j !== j && J !== J;
    }
    function fe(j, J) {
      this.message = j, this.data = J && typeof J == "object" ? J : {}, this.stack = "";
    }
    fe.prototype = Error.prototype;
    function Le(j) {
      if (s.NODE_ENV !== "production")
        var J = {}, be = 0;
      function Se(He, Pe, Ne, ot, St, ht, Zt) {
        if (ot = ot || I, ht = ht || Ne, Zt !== p) {
          if (N) {
            var Re = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Re.name = "Invariant Violation", Re;
          } else if (s.NODE_ENV !== "production" && typeof console < "u") {
            var $t = ot + ":" + Ne;
            !J[$t] && // Avoid spamming the console because they are often not actionable except for lib authors
            be < 3 && (E(
              "You are manually calling a React.PropTypes validation function for the `" + ht + "` prop on `" + ot + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), J[$t] = !0, be++);
          }
        }
        return Pe[Ne] == null ? He ? Pe[Ne] === null ? new fe("The " + St + " `" + ht + "` is marked as required " + ("in `" + ot + "`, but its value is `null`.")) : new fe("The " + St + " `" + ht + "` is marked as required in " + ("`" + ot + "`, but its value is `undefined`.")) : null : j(Pe, Ne, ot, St, ht);
      }
      var ke = Se.bind(null, !1);
      return ke.isRequired = Se.bind(null, !0), ke;
    }
    function Ke(j) {
      function J(be, Se, ke, He, Pe, Ne) {
        var ot = be[Se], St = pe(ot);
        if (St !== j) {
          var ht = O(ot);
          return new fe(
            "Invalid " + He + " `" + Pe + "` of type " + ("`" + ht + "` supplied to `" + ke + "`, expected ") + ("`" + j + "`."),
            { expectedType: j }
          );
        }
        return null;
      }
      return Le(J);
    }
    function ze() {
      return Le(y);
    }
    function Be(j) {
      function J(be, Se, ke, He, Pe) {
        if (typeof j != "function")
          return new fe("Property `" + Pe + "` of component `" + ke + "` has invalid PropType notation inside arrayOf.");
        var Ne = be[Se];
        if (!Array.isArray(Ne)) {
          var ot = pe(Ne);
          return new fe("Invalid " + He + " `" + Pe + "` of type " + ("`" + ot + "` supplied to `" + ke + "`, expected an array."));
        }
        for (var St = 0; St < Ne.length; St++) {
          var ht = j(Ne, St, ke, He, Pe + "[" + St + "]", p);
          if (ht instanceof Error)
            return ht;
        }
        return null;
      }
      return Le(J);
    }
    function ue() {
      function j(J, be, Se, ke, He) {
        var Pe = J[be];
        if (!_(Pe)) {
          var Ne = pe(Pe);
          return new fe("Invalid " + ke + " `" + He + "` of type " + ("`" + Ne + "` supplied to `" + Se + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Le(j);
    }
    function Ue() {
      function j(J, be, Se, ke, He) {
        var Pe = J[be];
        if (!u.isValidElementType(Pe)) {
          var Ne = pe(Pe);
          return new fe("Invalid " + ke + " `" + He + "` of type " + ("`" + Ne + "` supplied to `" + Se + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Le(j);
    }
    function gt(j) {
      function J(be, Se, ke, He, Pe) {
        if (!(be[Se] instanceof j)) {
          var Ne = j.name || I, ot = L(be[Se]);
          return new fe("Invalid " + He + " `" + Pe + "` of type " + ("`" + ot + "` supplied to `" + ke + "`, expected ") + ("instance of `" + Ne + "`."));
        }
        return null;
      }
      return Le(J);
    }
    function X(j) {
      if (!Array.isArray(j))
        return s.NODE_ENV !== "production" && (arguments.length > 1 ? E(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : E("Invalid argument supplied to oneOf, expected an array.")), y;
      function J(be, Se, ke, He, Pe) {
        for (var Ne = be[Se], ot = 0; ot < j.length; ot++)
          if (ee(Ne, j[ot]))
            return null;
        var St = JSON.stringify(j, function(Zt, Re) {
          var $t = O(Re);
          return $t === "symbol" ? String(Re) : Re;
        });
        return new fe("Invalid " + He + " `" + Pe + "` of value `" + String(Ne) + "` " + ("supplied to `" + ke + "`, expected one of " + St + "."));
      }
      return Le(J);
    }
    function Te(j) {
      function J(be, Se, ke, He, Pe) {
        if (typeof j != "function")
          return new fe("Property `" + Pe + "` of component `" + ke + "` has invalid PropType notation inside objectOf.");
        var Ne = be[Se], ot = pe(Ne);
        if (ot !== "object")
          return new fe("Invalid " + He + " `" + Pe + "` of type " + ("`" + ot + "` supplied to `" + ke + "`, expected an object."));
        for (var St in Ne)
          if (g(Ne, St)) {
            var ht = j(Ne, St, ke, He, Pe + "." + St, p);
            if (ht instanceof Error)
              return ht;
          }
        return null;
      }
      return Le(J);
    }
    function De(j) {
      if (!Array.isArray(j))
        return s.NODE_ENV !== "production" && E("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var J = 0; J < j.length; J++) {
        var be = j[J];
        if (typeof be != "function")
          return E(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(be) + " at index " + J + "."
          ), y;
      }
      function Se(ke, He, Pe, Ne, ot) {
        for (var St = [], ht = 0; ht < j.length; ht++) {
          var Zt = j[ht], Re = Zt(ke, He, Pe, Ne, ot, p);
          if (Re == null)
            return null;
          Re.data && g(Re.data, "expectedType") && St.push(Re.data.expectedType);
        }
        var $t = St.length > 0 ? ", expected one of type [" + St.join(", ") + "]" : "";
        return new fe("Invalid " + Ne + " `" + ot + "` supplied to " + ("`" + Pe + "`" + $t + "."));
      }
      return Le(Se);
    }
    function _e() {
      function j(J, be, Se, ke, He) {
        return re(J[be]) ? null : new fe("Invalid " + ke + " `" + He + "` supplied to " + ("`" + Se + "`, expected a ReactNode."));
      }
      return Le(j);
    }
    function Ce(j, J, be, Se, ke) {
      return new fe(
        (j || "React class") + ": " + J + " type `" + be + "." + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ke + "`."
      );
    }
    function Ae(j) {
      function J(be, Se, ke, He, Pe) {
        var Ne = be[Se], ot = pe(Ne);
        if (ot !== "object")
          return new fe("Invalid " + He + " `" + Pe + "` of type `" + ot + "` " + ("supplied to `" + ke + "`, expected `object`."));
        for (var St in j) {
          var ht = j[St];
          if (typeof ht != "function")
            return Ce(ke, He, Pe, St, O(ht));
          var Zt = ht(Ne, St, ke, He, Pe + "." + St, p);
          if (Zt)
            return Zt;
        }
        return null;
      }
      return Le(J);
    }
    function le(j) {
      function J(be, Se, ke, He, Pe) {
        var Ne = be[Se], ot = pe(Ne);
        if (ot !== "object")
          return new fe("Invalid " + He + " `" + Pe + "` of type `" + ot + "` " + ("supplied to `" + ke + "`, expected `object`."));
        var St = f({}, be[Se], j);
        for (var ht in St) {
          var Zt = j[ht];
          if (g(j, ht) && typeof Zt != "function")
            return Ce(ke, He, Pe, ht, O(Zt));
          if (!Zt)
            return new fe(
              "Invalid " + He + " `" + Pe + "` key `" + ht + "` supplied to `" + ke + "`.\nBad object: " + JSON.stringify(be[Se], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(j), null, "  ")
            );
          var Re = Zt(Ne, ht, ke, He, Pe + "." + ht, p);
          if (Re)
            return Re;
        }
        return null;
      }
      return Le(J);
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
          if (j === null || _(j))
            return !0;
          var J = M(j);
          if (J) {
            var be = J.call(j), Se;
            if (J !== j.entries) {
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
    function he(j, J) {
      return j === "symbol" ? !0 : J ? J["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && J instanceof Symbol : !1;
    }
    function pe(j) {
      var J = typeof j;
      return Array.isArray(j) ? "array" : j instanceof RegExp ? "object" : he(J, j) ? "symbol" : J;
    }
    function O(j) {
      if (typeof j > "u" || j === null)
        return "" + j;
      var J = pe(j);
      if (J === "object") {
        if (j instanceof Date)
          return "date";
        if (j instanceof RegExp)
          return "regexp";
      }
      return J;
    }
    function ae(j) {
      var J = O(j);
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
    function L(j) {
      return !j.constructor || !j.constructor.name ? I : j.constructor.name;
    }
    return B.checkPropTypes = b, B.resetWarningCache = b.resetWarningCache, B.PropTypes = B, B;
  }, cb;
}
var fb, mT;
function Fz() {
  if (mT)
    return fb;
  mT = 1;
  var s = qb();
  function u() {
  }
  function f() {
  }
  return f.resetWarningCache = u, fb = function() {
    function p(E, y, _, N, k, D) {
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
  var $z = y_(), Bz = !0;
  _b.exports = Pz()($z.isElement, Bz);
} else
  _b.exports = Fz()();
var S_ = _b.exports, Rb = { exports: {} }, Ao = {}, kb = { exports: {} };
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
  function _(D, M) {
    var I = D.nodeName.toLowerCase(), B = g.test(I) && !D.disabled || I === "a" && D.href || M;
    return B && y(D);
  }
  function N(D) {
    var M = D.getAttribute("tabindex");
    M === null && (M = void 0);
    var I = isNaN(M);
    return (I || M >= 0) && _(D, !I);
  }
  function k(D) {
    var M = [].slice.call(D.querySelectorAll("*"), 0).reduce(function(I, B) {
      return I.concat(B.shadowRoot ? k(B.shadowRoot) : [B]);
    }, []);
    return M.filter(N);
  }
  s.exports = u.default;
})(kb, kb.exports);
var E_ = kb.exports, Vz = {};
Object.defineProperty(Ao, "__esModule", {
  value: !0
});
Ao.resetState = qz;
Ao.log = Qz;
Ao.handleBlur = qv;
Ao.handleFocus = Qv;
Ao.markForFocusLater = Gz;
Ao.returnFocus = Kz;
Ao.popWithoutFocus = Xz;
Ao.setupScopedFocus = Jz;
Ao.teardownScopedFocus = Zz;
var Iz = E_, Wz = Yz(Iz);
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
function qv() {
  Ob = !0;
}
function Qv() {
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
  Md = s, window.addEventListener ? (window.addEventListener("blur", qv, !1), document.addEventListener("focus", Qv, !0)) : (window.attachEvent("onBlur", qv), document.attachEvent("onFocus", Qv));
}
function Zz() {
  Md = null, window.addEventListener ? (window.removeEventListener("blur", qv), document.removeEventListener("focus", Qv)) : (window.detachEvent("onBlur", qv), document.detachEvent("onFocus", Qv));
}
var Db = { exports: {} };
(function(s, u) {
  Object.defineProperty(u, "__esModule", {
    value: !0
  }), u.default = E;
  var f = E_, p = g(f);
  function g(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function b() {
    var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return y.activeElement.shadowRoot ? b(y.activeElement.shadowRoot) : y.activeElement;
  }
  function E(y, _) {
    var N = (0, p.default)(y);
    if (!N.length) {
      _.preventDefault();
      return;
    }
    var k = void 0, D = _.shiftKey, M = N[0], I = N[N.length - 1], B = b();
    if (y === B) {
      if (!D)
        return;
      k = I;
    }
    if (I === B && !D && (k = M), M === B && D && (k = I), k) {
      _.preventDefault(), k.focus();
      return;
    }
    var ee = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), fe = ee != null && ee[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (fe) {
      var Le = N.indexOf(B);
      if (Le > -1 && (Le += D ? -1 : 1), k = N[Le], typeof k > "u") {
        _.preventDefault(), k = D ? I : M, k.focus();
        return;
      }
      _.preventDefault(), k.focus();
    }
  }
  s.exports = u.default;
})(Db, Db.exports);
var eU = Db.exports, No = {}, tU = {}, nU = tU.NODE_ENV !== "production", b_ = function() {
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
  b_ = function(s, u, f) {
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
var aU = b_, Do = {}, C_ = { exports: {} };
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
})(C_);
var iU = C_.exports;
Object.defineProperty(Do, "__esModule", {
  value: !0
});
Do.canUseDOM = Do.SafeNodeList = Do.SafeHTMLCollection = void 0;
var oU = iU, lU = uU(oU);
function uU(s) {
  return s && s.__esModule ? s : { default: s };
}
var wg = lU.default, sU = wg.canUseDOM ? window.HTMLElement : {};
Do.SafeHTMLCollection = wg.canUseDOM ? window.HTMLCollection : {};
Do.SafeNodeList = wg.canUseDOM ? window.NodeList : {};
Do.canUseDOM = wg.canUseDOM;
Do.default = sU;
var cU = {};
Object.defineProperty(No, "__esModule", {
  value: !0
});
No.resetState = hU;
No.log = mU;
No.assertNodeList = w_;
No.setElement = yU;
No.validateElement = Qb;
No.hide = gU;
No.show = SU;
No.documentNotReadyOrSSRTesting = EU;
var fU = aU, dU = vU(fU), pU = Do;
function vU(s) {
  return s && s.__esModule ? s : { default: s };
}
var Ci = null;
function hU() {
  Ci && (Ci.removeAttribute ? Ci.removeAttribute("aria-hidden") : Ci.length != null ? Ci.forEach(function(s) {
    return s.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(Ci).forEach(function(s) {
    return s.removeAttribute("aria-hidden");
  })), Ci = null;
}
function mU() {
  if (cU.NODE_ENV !== "production") {
    var s = Ci || {};
    console.log("ariaAppHider ----------"), console.log(s.nodeName, s.className, s.id), console.log("end ariaAppHider ----------");
  }
}
function w_(s, u) {
  if (!s || !s.length)
    throw new Error("react-modal: No elements were found for selector " + u + ".");
}
function yU(s) {
  var u = s;
  if (typeof u == "string" && pU.canUseDOM) {
    var f = document.querySelectorAll(u);
    w_(f, u), u = f;
  }
  return Ci = u || Ci, Ci;
}
function Qb(s) {
  var u = s || Ci;
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
  Ci = null;
}
var Ud = {}, bU = {};
Object.defineProperty(Ud, "__esModule", {
  value: !0
});
Ud.resetState = CU;
Ud.log = wU;
var Vc = {}, Ic = {};
function yT(s, u) {
  s.classList.remove(u);
}
function CU() {
  var s = document.getElementsByTagName("html")[0];
  for (var u in Vc)
    yT(s, Vc[u]);
  var f = document.body;
  for (var p in Ic)
    yT(f, Ic[p]);
  Vc = {}, Ic = {};
}
function wU() {
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
var xU = function(u, f) {
  return u[f] || (u[f] = 0), u[f] += 1, f;
}, TU = function(u, f) {
  return u[f] && (u[f] -= 1), f;
}, _U = function(u, f, p) {
  p.forEach(function(g) {
    xU(f, g), u.add(g);
  });
}, RU = function(u, f, p) {
  p.forEach(function(g) {
    TU(f, g), f[g] === 0 && u.remove(g);
  });
};
Ud.add = function(u, f) {
  return _U(u.classList, u.nodeName.toLowerCase() == "html" ? Vc : Ic, f.split(" "));
};
Ud.remove = function(u, f) {
  return RU(u.classList, u.nodeName.toLowerCase() == "html" ? Vc : Ic, f.split(" "));
};
var jd = {}, gT = {};
Object.defineProperty(jd, "__esModule", {
  value: !0
});
jd.log = OU;
jd.resetState = DU;
function kU(s, u) {
  if (!(s instanceof u))
    throw new TypeError("Cannot call a class as a function");
}
var x_ = function s() {
  var u = this;
  kU(this, s), this.register = function(f) {
    if (u.openInstances.indexOf(f) !== -1) {
      gT.NODE_ENV !== "production" && console.warn("React-Modal: Cannot register modal instance that's already open");
      return;
    }
    u.openInstances.push(f), u.emit("register");
  }, this.deregister = function(f) {
    var p = u.openInstances.indexOf(f);
    if (p === -1) {
      gT.NODE_ENV !== "production" && console.warn("React-Modal: Unable to deregister " + f + " as it was never registered");
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
}, dg = new x_();
function OU() {
  console.log("portalOpenInstances ----------"), console.log(dg.openInstances.length), dg.openInstances.forEach(function(s) {
    return console.log(s);
  }), console.log("end portalOpenInstances ----------");
}
function DU() {
  dg = new x_();
}
jd.default = dg;
var Gb = {}, AU = {};
Object.defineProperty(Gb, "__esModule", {
  value: !0
});
Gb.resetState = zU;
Gb.log = UU;
var NU = jd, MU = LU(NU);
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
function ST() {
  if (Wc.length === 0) {
    AU.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  Wc[Wc.length - 1].focusContent();
}
function jU(s, u) {
  !ga && !ko && (ga = document.createElement("div"), ga.setAttribute("data-react-modal-body-trap", ""), ga.style.position = "absolute", ga.style.opacity = "0", ga.setAttribute("tabindex", "0"), ga.addEventListener("focus", ST), ko = ga.cloneNode(), ko.addEventListener("focus", ST)), Wc = u, Wc.length > 0 ? (document.body.firstChild !== ga && document.body.insertBefore(ga, document.body.firstChild), document.body.lastChild !== ko && document.body.appendChild(ko)) : (ga.parentElement && ga.parentElement.removeChild(ga), ko.parentElement && ko.parentElement.removeChild(ko));
}
MU.default.subscribe(jU);
(function(s, u) {
  var f = {};
  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  var p = Object.assign || function(re) {
    for (var he = 1; he < arguments.length; he++) {
      var pe = arguments[he];
      for (var O in pe)
        Object.prototype.hasOwnProperty.call(pe, O) && (re[O] = pe[O]);
    }
    return re;
  }, g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(re) {
    return typeof re;
  } : function(re) {
    return re && typeof Symbol == "function" && re.constructor === Symbol && re !== Symbol.prototype ? "symbol" : typeof re;
  }, b = /* @__PURE__ */ function() {
    function re(he, pe) {
      for (var O = 0; O < pe.length; O++) {
        var ae = pe[O];
        ae.enumerable = ae.enumerable || !1, ae.configurable = !0, "value" in ae && (ae.writable = !0), Object.defineProperty(he, ae.key, ae);
      }
    }
    return function(he, pe, O) {
      return pe && re(he.prototype, pe), O && re(he, O), he;
    };
  }(), E = wt, y = S_, _ = Ue(y), N = Ao, k = ue(N), D = eU, M = Ue(D), I = No, B = ue(I), ee = Ud, fe = ue(ee), Le = Do, Ke = Ue(Le), ze = jd, Be = Ue(ze);
  function ue(re) {
    if (re && re.__esModule)
      return re;
    var he = {};
    if (re != null)
      for (var pe in re)
        Object.prototype.hasOwnProperty.call(re, pe) && (he[pe] = re[pe]);
    return he.default = re, he;
  }
  function Ue(re) {
    return re && re.__esModule ? re : { default: re };
  }
  function gt(re, he) {
    if (!(re instanceof he))
      throw new TypeError("Cannot call a class as a function");
  }
  function X(re, he) {
    if (!re)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return he && (typeof he == "object" || typeof he == "function") ? he : re;
  }
  function Te(re, he) {
    if (typeof he != "function" && he !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof he);
    re.prototype = Object.create(he && he.prototype, { constructor: { value: re, enumerable: !1, writable: !0, configurable: !0 } }), he && (Object.setPrototypeOf ? Object.setPrototypeOf(re, he) : re.__proto__ = he);
  }
  var De = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, _e = function(he) {
    return he.code === "Tab" || he.keyCode === 9;
  }, Ce = function(he) {
    return he.code === "Escape" || he.keyCode === 27;
  }, Ae = 0, le = function(re) {
    Te(he, re);
    function he(pe) {
      gt(this, he);
      var O = X(this, (he.__proto__ || Object.getPrototypeOf(he)).call(this, pe));
      return O.setOverlayRef = function(ae) {
        O.overlay = ae, O.props.overlayRef && O.props.overlayRef(ae);
      }, O.setContentRef = function(ae) {
        O.content = ae, O.props.contentRef && O.props.contentRef(ae);
      }, O.afterClose = function() {
        var ae = O.props, L = ae.appElement, j = ae.ariaHideApp, J = ae.htmlOpenClassName, be = ae.bodyOpenClassName, Se = ae.parentSelector, ke = Se && Se().ownerDocument || document;
        be && fe.remove(ke.body, be), J && fe.remove(ke.getElementsByTagName("html")[0], J), j && Ae > 0 && (Ae -= 1, Ae === 0 && B.show(L)), O.props.shouldFocusAfterRender && (O.props.shouldReturnFocusAfterClose ? (k.returnFocus(O.props.preventScroll), k.teardownScopedFocus()) : k.popWithoutFocus()), O.props.onAfterClose && O.props.onAfterClose(), Be.default.deregister(O);
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
        _e(ae) && (0, M.default)(O.content, ae), O.props.shouldCloseOnEsc && Ce(ae) && (ae.stopPropagation(), O.requestClose(ae));
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
        }, J = j.base;
        return O.state.afterOpen && (J = J + " " + j.afterOpen), O.state.beforeClose && (J = J + " " + j.beforeClose), typeof L == "string" && L ? J + " " + L : J;
      }, O.attributesFromObject = function(ae, L) {
        return Object.keys(L).reduce(function(j, J) {
          return j[ae + "-" + J] = L[J], j;
        }, {});
      }, O.state = {
        afterOpen: !1,
        beforeClose: !1
      }, O.shouldClose = null, O.moveFromContentToOverlay = null, O;
    }
    return b(he, [{
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
        var O = this.props, ae = O.appElement, L = O.ariaHideApp, j = O.htmlOpenClassName, J = O.bodyOpenClassName, be = O.parentSelector, Se = be && be().ownerDocument || document;
        J && fe.add(Se.body, J), j && fe.add(Se.getElementsByTagName("html")[0], j), L && (Ae += 1, B.hide(ae)), Be.default.register(this);
      }
      // Don't steal focus from inner elements
    }, {
      key: "render",
      value: function() {
        var O = this.props, ae = O.id, L = O.className, j = O.overlayClassName, J = O.defaultStyles, be = O.children, Se = L ? {} : J.content, ke = j ? {} : J.overlay;
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
        }), Ne = this.props.contentElement(Pe, be);
        return this.props.overlayElement(He, Ne);
      }
    }]), he;
  }(E.Component);
  le.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  }, le.propTypes = {
    isOpen: _.default.bool.isRequired,
    defaultStyles: _.default.shape({
      content: _.default.object,
      overlay: _.default.object
    }),
    style: _.default.shape({
      content: _.default.object,
      overlay: _.default.object
    }),
    className: _.default.oneOfType([_.default.string, _.default.object]),
    overlayClassName: _.default.oneOfType([_.default.string, _.default.object]),
    parentSelector: _.default.func,
    bodyOpenClassName: _.default.string,
    htmlOpenClassName: _.default.string,
    ariaHideApp: _.default.bool,
    appElement: _.default.oneOfType([_.default.instanceOf(Ke.default), _.default.instanceOf(Le.SafeHTMLCollection), _.default.instanceOf(Le.SafeNodeList), _.default.arrayOf(_.default.instanceOf(Ke.default))]),
    onAfterOpen: _.default.func,
    onAfterClose: _.default.func,
    onRequestClose: _.default.func,
    closeTimeoutMS: _.default.number,
    shouldFocusAfterRender: _.default.bool,
    shouldCloseOnOverlayClick: _.default.bool,
    shouldReturnFocusAfterClose: _.default.bool,
    preventScroll: _.default.bool,
    role: _.default.string,
    contentLabel: _.default.string,
    aria: _.default.object,
    data: _.default.object,
    children: _.default.node,
    shouldCloseOnEsc: _.default.bool,
    overlayRef: _.default.func,
    contentRef: _.default.func,
    id: _.default.string,
    overlayElement: _.default.func,
    contentElement: _.default.func,
    testId: _.default.string
  }, u.default = le, s.exports = u.default;
})(Rb, Rb.exports);
var PU = Rb.exports;
function T_() {
  var s = this.constructor.getDerivedStateFromProps(this.props, this.state);
  s != null && this.setState(s);
}
function __(s) {
  function u(f) {
    var p = this.constructor.getDerivedStateFromProps(s, f);
    return p ?? null;
  }
  this.setState(u.bind(this));
}
function R_(s, u) {
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
T_.__suppressDeprecationWarning = !0;
__.__suppressDeprecationWarning = !0;
R_.__suppressDeprecationWarning = !0;
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
  if (typeof s.getDerivedStateFromProps == "function" && (u.componentWillMount = T_, u.componentWillReceiveProps = __), typeof u.getSnapshotBeforeUpdate == "function") {
    if (typeof u.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    u.componentWillUpdate = R_;
    var y = u.componentDidUpdate;
    u.componentDidUpdate = function(N, k, D) {
      var M = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : D;
      y.call(this, N, k, M);
    };
  }
  return s;
}
const HU = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: FU
}, Symbol.toStringTag, { value: "Module" })), $U = /* @__PURE__ */ EN(HU);
var BU = {};
Object.defineProperty(qc, "__esModule", {
  value: !0
});
qc.bodyOpenClassName = qc.portalClassName = void 0;
var ET = Object.assign || function(s) {
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
}(), k_ = wt, pg = th(k_), IU = OT, vg = th(IU), WU = S_, Rt = th(WU), YU = PU, bT = th(YU), qU = No, QU = KU(qU), bs = Do, CT = th(bs), GU = $U;
function KU(s) {
  if (s && s.__esModule)
    return s;
  var u = {};
  if (s != null)
    for (var f in s)
      Object.prototype.hasOwnProperty.call(s, f) && (u[f] = s[f]);
  return u.default = s, u;
}
function th(s) {
  return s && s.__esModule ? s : { default: s };
}
function XU(s, u) {
  if (!(s instanceof u))
    throw new TypeError("Cannot call a class as a function");
}
function wT(s, u) {
  if (!s)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u && (typeof u == "object" || typeof u == "function") ? u : s;
}
function JU(s, u) {
  if (typeof u != "function" && u !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof u);
  s.prototype = Object.create(u && u.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(s, u) : s.__proto__ = u);
}
var ZU = qc.portalClassName = "ReactModalPortal", ej = qc.bodyOpenClassName = "ReactModal__Body--open", Bc = bs.canUseDOM && vg.default.createPortal !== void 0, Ab = function(u) {
  return document.createElement(u);
}, xT = function() {
  return Bc ? vg.default.createPortal : vg.default.unstable_renderSubtreeIntoContainer;
};
function Zy(s) {
  return s();
}
var Pd = function(s) {
  JU(u, s);
  function u() {
    var f, p, g, b;
    XU(this, u);
    for (var E = arguments.length, y = Array(E), _ = 0; _ < E; _++)
      y[_] = arguments[_];
    return b = (p = (g = wT(this, (f = u.__proto__ || Object.getPrototypeOf(u)).call.apply(f, [this].concat(y))), g), g.removePortal = function() {
      !Bc && vg.default.unmountComponentAtNode(g.node);
      var N = Zy(g.props.parentSelector);
      N && N.contains(g.node) ? N.removeChild(g.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, g.portalRef = function(N) {
      g.portal = N;
    }, g.renderPortal = function(N) {
      var k = xT(), D = k(g, pg.default.createElement(bT.default, ET({ defaultStyles: u.defaultStyles }, N)), g.node);
      g.portalRef(D);
    }, p), wT(g, b);
  }
  return VU(u, [{
    key: "componentDidMount",
    value: function() {
      if (bs.canUseDOM) {
        Bc || (this.node = Ab("div")), this.node.className = this.props.portalClassName;
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
        var E = this.props, y = E.isOpen, _ = E.portalClassName;
        p.portalClassName !== _ && (this.node.className = _);
        var N = b.prevParent, k = b.nextParent;
        k !== N && (N.removeChild(this.node), k.appendChild(this.node)), !(!p.isOpen && !y) && !Bc && this.renderPortal(this.props);
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
      !this.node && Bc && (this.node = Ab("div"));
      var p = xT();
      return p(pg.default.createElement(bT.default, ET({
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
}(k_.Component);
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
  appElement: Rt.default.oneOfType([Rt.default.instanceOf(CT.default), Rt.default.instanceOf(bs.SafeHTMLCollection), Rt.default.instanceOf(bs.SafeNodeList), Rt.default.arrayOf(Rt.default.instanceOf(CT.default))]),
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
  return Ab = s;
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
})(Tb, Tb.exports);
var tj = Tb.exports;
const Kb = /* @__PURE__ */ TT(tj);
function nj() {
  return /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
    /* @__PURE__ */ te.jsx("span", { className: "spinner is-active" }),
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
  const [s, u] = Fb(a_), [f, p] = Nb.useState(!1), [g, b] = wt.useState(!1), [E, y] = wt.useState({}), _ = function(fe) {
    console.log(fe.data), fe.data.success ? u(fe.data.data) : (Oo.error("There was an error retrieving assistants."), console.log(`Error: ${fe.data.data.message}`)), b(!1);
  }, N = function(fe) {
    Oo.error("There was an error retrieving assistants."), console.log(`Error: ${fe}`);
  }, k = function() {
    u([]), b(!0), rj(_, N);
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
  }, ee = () => /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
    /* @__PURE__ */ te.jsxs("table", { className: "wp-list-table widefat fixed striped posts", children: [
      /* @__PURE__ */ te.jsxs("thead", { children: [
        /* @__PURE__ */ te.jsx("th", { children: "Assistant Name" }),
        /* @__PURE__ */ te.jsx("th", { children: "Assistant ID" }),
        /* @__PURE__ */ te.jsx("th", { children: "Model" }),
        /* @__PURE__ */ te.jsx("th", { children: "Instructions" })
      ] }),
      /* @__PURE__ */ te.jsx("tbody", { children: s.map((fe) => /* @__PURE__ */ te.jsxs("tr", { children: [
        /* @__PURE__ */ te.jsx("td", { children: fe.name }),
        /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsx("a", { href: "#", onClick: () => B(fe.id), children: fe.id }) }),
        /* @__PURE__ */ te.jsx("td", { children: fe.model }),
        /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsx("button", { onClick: () => D(fe), "aria-label": "View Instructions", children: /* @__PURE__ */ te.jsx("span", { className: "dashicons dashicons-welcome-view-site" }) }) })
      ] }, fe.id)) })
    ] }),
    s.length > 0 ? /* @__PURE__ */ te.jsx(te.Fragment, {}) : /* @__PURE__ */ te.jsx("p", { children: "There are no Assistants in your OpenAI account." })
  ] });
  return /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
    g ? /* @__PURE__ */ te.jsx("p", { children: /* @__PURE__ */ te.jsx(nj, {}) }) : /* @__PURE__ */ te.jsx("p", { children: /* @__PURE__ */ te.jsx("a", { href: "#", onClick: k, children: "Refresh assistants list" }) }),
    s.length > 0 && /* @__PURE__ */ te.jsx(ee, {}),
    /* @__PURE__ */ te.jsxs(
      Kb,
      {
        isOpen: f,
        onRequestClose: M,
        contentLabel: "Example Modal",
        className: "tw-chat-admin-modal",
        overlayClassName: "tw-chat-admin-overlay",
        children: [
          /* @__PURE__ */ te.jsxs("h2", { className: "tw-chat-admin-modal-header", children: [
            E.name,
            /* @__PURE__ */ te.jsx("button", { onClick: M, children: /* @__PURE__ */ te.jsx("span", { className: "dashicons dashicons-no-alt" }) })
          ] }),
          /* @__PURE__ */ te.jsxs("div", { className: "tw-chat-admin-modal-content", children: [
            /* @__PURE__ */ te.jsxs("p", { children: [
              /* @__PURE__ */ te.jsx("strong", { children: "Model:" }),
              " ",
              E.model
            ] }),
            /* @__PURE__ */ te.jsx("div", { dangerouslySetInnerHTML: { __html: I() } })
          ] })
        ]
      }
    )
  ] });
}
const O_ = {
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
  }, O_).then(u).catch(f);
}
function oj(s, u, f) {
  Gn.post(twChatSettings.ajax_url, {
    action: "remove_chat_widget",
    _ajax_nonce: twChatSettings.ajax_nonce,
    id: s
  }, O_).then(u).catch(f);
}
function lj() {
  const [s, u] = Fb(i_), [f, p] = wt.useState(null), [g, b] = wt.useState(!1);
  function E(D) {
    D && (console.log(D), p(D)), b(!0);
  }
  function y() {
    console.log("reset current widget"), p(null), b(!1);
  }
  function _() {
  }
  const N = () => {
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
    return /* @__PURE__ */ te.jsxs("table", { className: "wp-list-table widefat fixed striped posts", children: [
      /* @__PURE__ */ te.jsxs("thead", { children: [
        /* @__PURE__ */ te.jsx("th", { children: "ID" }),
        /* @__PURE__ */ te.jsx("th", { children: "Name" }),
        /* @__PURE__ */ te.jsx("th", { children: "Greeting" }),
        /* @__PURE__ */ te.jsx("th", { children: "OpenAI Assistant ID" }),
        /* @__PURE__ */ te.jsx("th", { children: "Edit / Delete" })
      ] }),
      /* @__PURE__ */ te.jsx("tbody", { children: s.map((M) => /* @__PURE__ */ te.jsxs("tr", { children: [
        /* @__PURE__ */ te.jsx("td", { children: M.id }),
        /* @__PURE__ */ te.jsx("td", { children: M.name }),
        /* @__PURE__ */ te.jsx("td", { children: M.meta.tw_chat_greeting }),
        /* @__PURE__ */ te.jsx("td", { children: M.meta.tw_chat_assistant_id }),
        /* @__PURE__ */ te.jsxs("td", { children: [
          /* @__PURE__ */ te.jsx("button", { "aria-label": "Edit Chat Widget", onClick: () => E(M), children: /* @__PURE__ */ te.jsx("span", { className: "dashicons dashicons-edit" }) }),
          /* @__PURE__ */ te.jsx("button", { "aria-label": "Remove Chat Widget", onClick: () => D(M.id), children: /* @__PURE__ */ te.jsx("span", { className: "dashicons dashicons-trash" }) })
        ] })
      ] }, M.id)) })
    ] });
  }, k = () => {
    const [D, M] = wt.useState(!1), [I, B] = wt.useState({
      tw_chat_widget_name: "",
      tw_chat_greeting: "",
      tw_chat_assistant_id: ""
    });
    wt.useEffect(() => {
      f && B({
        id: f.id,
        tw_chat_widget_name: f.name,
        tw_chat_greeting: f.meta.tw_chat_greeting[0],
        tw_chat_assistant_id: f.meta.tw_chat_assistant_id[0]
      });
    }, []);
    const ee = function(Le) {
      const { name: Ke, value: ze } = Le.target;
      let Be = I;
      Be[Ke] = ze, B(Be);
    }, fe = function(Le) {
      Le.preventDefault(), M(!0), ij(
        I,
        function(Ke) {
          Ke.data.success ? (Oo.success("Chat widget saved"), u(Ke.data.data), console.log(Ke.data), b(!1)) : (console.log(Ke), Oo.error("Error saving chat widget.")), M(!1);
        },
        function(Ke) {
          console.log(Ke), Oo.error("Error saving chat widget."), M(!1);
        }
      );
    };
    return /* @__PURE__ */ te.jsxs("form", { id: "tw-chat-new-widget-form", onSubmit: fe, children: [
      /* @__PURE__ */ te.jsx("table", { className: "form-table", children: /* @__PURE__ */ te.jsxs("tbody", { children: [
        /* @__PURE__ */ te.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ te.jsx("th", { scope: "row", children: "Name" }),
          /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_widget_name", onChange: ee, defaultValue: I.tw_chat_widget_name, required: "required" }) })
        ] }),
        /* @__PURE__ */ te.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ te.jsx("th", { scope: "row", children: "Assistant ID" }),
          /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_assistant_id", onChange: ee, defaultValue: I.tw_chat_assistant_id, required: "required" }) })
        ] }),
        /* @__PURE__ */ te.jsxs("tr", { valign: "top", children: [
          /* @__PURE__ */ te.jsx("th", { scope: "row", children: "Greeting" }),
          /* @__PURE__ */ te.jsx("td", { children: /* @__PURE__ */ te.jsx("input", { className: "regular-text", type: "text", name: "tw_chat_greeting", onChange: ee, defaultValue: I.tw_chat_greeting, required: "required" }) })
        ] })
      ] }) }),
      D ? /* @__PURE__ */ te.jsxs("p", { children: [
        /* @__PURE__ */ te.jsx("span", { className: "spinner is-active" }),
        " Saving"
      ] }) : /* @__PURE__ */ te.jsx("input", { className: "button button-hero button-primary", type: "submit", value: "Submit" })
    ] });
  };
  return /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
    /* @__PURE__ */ te.jsx("p", { children: /* @__PURE__ */ te.jsx("button", { className: "button button-primary", onClick: () => E(), children: "Create New Chat Widget" }) }),
    s.length > 0 && /* @__PURE__ */ te.jsx(N, {}),
    /* @__PURE__ */ te.jsxs(
      Kb,
      {
        isOpen: g,
        onAfterOpen: _,
        onRequestClose: y,
        contentLabel: "Example Modal",
        className: "tw-chat-admin-modal",
        overlayClassName: "tw-chat-admin-overlay",
        children: [
          /* @__PURE__ */ te.jsxs("h2", { className: "tw-chat-admin-modal-header", children: [
            "Save Chat Widget",
            /* @__PURE__ */ te.jsx("button", { onClick: y, children: /* @__PURE__ */ te.jsx("span", { className: "dashicons dashicons-no-alt" }) })
          ] }),
          /* @__PURE__ */ te.jsx("div", { className: "tw-chat-admin-modal-content", children: /* @__PURE__ */ te.jsx(k, {}) })
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
  return /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
    /* @__PURE__ */ te.jsx(NN, { tabs: s }),
    /* @__PURE__ */ te.jsx(
      PL,
      {
        position: "bottom-center",
        reverseOrder: !1
      }
    )
  ] });
}
window.addEventListener("load", function() {
  Kb.setAppElement("#tw-chat-admin"), Vv.createRoot(document.getElementById("tw-chat-admin")).render(
    /* @__PURE__ */ te.jsx(Nb.StrictMode, { children: /* @__PURE__ */ te.jsx(qL, { atoms: [a_], children: /* @__PURE__ */ te.jsx(uj, {}) }) })
  );
});
