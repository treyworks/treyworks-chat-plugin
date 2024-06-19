var gD = Object.defineProperty;
var SD = (h, f, c) => f in h ? gD(h, f, { enumerable: !0, configurable: !0, writable: !0, value: c }) : h[f] = c;
var Rn = (h, f, c) => (SD(h, typeof f != "symbol" ? f + "" : f, c), c), ED = (h, f, c) => {
  if (!f.has(h))
    throw TypeError("Cannot " + c);
};
var oE = (h, f, c) => {
  if (f.has(h))
    throw TypeError("Cannot add the same private member more than once");
  f instanceof WeakSet ? f.add(h) : f.set(h, c);
};
var vy = (h, f, c) => (ED(h, f, "access private method"), c);
var oo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function WR(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var mE = { exports: {} }, sv = {}, yE = { exports: {} }, vv = { exports: {} };
vv.exports;
var SR;
function CD() {
  return SR || (SR = 1, function(h, f) {
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
      var v = "18.2.0", w = Symbol.for("react.element"), T = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), z = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), lt = Symbol.iterator, pt = "@@iterator";
      function Pe(E) {
        if (E === null || typeof E != "object")
          return null;
        var _ = lt && E[lt] || E[pt];
        return typeof _ == "function" ? _ : null;
      }
      var _e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, mt = {
        transition: null
      }, xe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, yt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ze = {}, pn = null;
      function vn(E) {
        pn = E;
      }
      Ze.setExtraStackFrame = function(E) {
        pn = E;
      }, Ze.getCurrentStack = null, Ze.getStackAddendum = function() {
        var E = "";
        pn && (E += pn);
        var _ = Ze.getCurrentStack;
        return _ && (E += _() || ""), E;
      };
      var Wt = !1, Et = !1, Gt = !1, Ge = !1, nt = !1, Je = {
        ReactCurrentDispatcher: _e,
        ReactCurrentBatchConfig: mt,
        ReactCurrentOwner: yt
      };
      Je.ReactDebugCurrentFrame = Ze, Je.ReactCurrentActQueue = xe;
      function Ve(E) {
        {
          for (var _ = arguments.length, V = new Array(_ > 1 ? _ - 1 : 0), G = 1; G < _; G++)
            V[G - 1] = arguments[G];
          be("warn", E, V);
        }
      }
      function J(E) {
        {
          for (var _ = arguments.length, V = new Array(_ > 1 ? _ - 1 : 0), G = 1; G < _; G++)
            V[G - 1] = arguments[G];
          be("error", E, V);
        }
      }
      function be(E, _, V) {
        {
          var G = Je.ReactDebugCurrentFrame, ce = G.getStackAddendum();
          ce !== "" && (_ += "%s", V = V.concat([ce]));
          var Ne = V.map(function(Ce) {
            return String(Ce);
          });
          Ne.unshift("Warning: " + _), Function.prototype.apply.call(console[E], console, Ne);
        }
      }
      var D = {};
      function te(E, _) {
        {
          var V = E.constructor, G = V && (V.displayName || V.name) || "ReactClass", ce = G + "." + _;
          if (D[ce])
            return;
          J("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", _, G), D[ce] = !0;
        }
      }
      var Ee = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(E) {
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
        enqueueForceUpdate: function(E, _, V) {
          te(E, "forceUpdate");
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
        enqueueReplaceState: function(E, _, V, G) {
          te(E, "replaceState");
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
        enqueueSetState: function(E, _, V, G) {
          te(E, "setState");
        }
      }, He = Object.assign, $e = {};
      Object.freeze($e);
      function ot(E, _, V) {
        this.props = E, this.context = _, this.refs = $e, this.updater = V || Ee;
      }
      ot.prototype.isReactComponent = {}, ot.prototype.setState = function(E, _) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, _, "setState");
      }, ot.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      };
      {
        var vt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ct = function(E, _) {
          Object.defineProperty(ot.prototype, E, {
            get: function() {
              Ve("%s(...) is deprecated in plain JavaScript React classes. %s", _[0], _[1]);
            }
          });
        };
        for (var ht in vt)
          vt.hasOwnProperty(ht) && Ct(ht, vt[ht]);
      }
      function on() {
      }
      on.prototype = ot.prototype;
      function ir(E, _, V) {
        this.props = E, this.context = _, this.refs = $e, this.updater = V || Ee;
      }
      var lr = ir.prototype = new on();
      lr.constructor = ir, He(lr, ot.prototype), lr.isPureReactComponent = !0;
      function Yr() {
        var E = {
          current: null
        };
        return Object.seal(E), E;
      }
      var Cr = Array.isArray;
      function Tn(E) {
        return Cr(E);
      }
      function or(E) {
        {
          var _ = typeof Symbol == "function" && Symbol.toStringTag, V = _ && E[Symbol.toStringTag] || E.constructor.name || "Object";
          return V;
        }
      }
      function Yn(E) {
        try {
          return Pn(E), !1;
        } catch {
          return !0;
        }
      }
      function Pn(E) {
        return "" + E;
      }
      function Hn(E) {
        if (Yn(E))
          return J("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(E)), Pn(E);
      }
      function Dr(E, _, V) {
        var G = E.displayName;
        if (G)
          return G;
        var ce = _.displayName || _.name || "";
        return ce !== "" ? V + "(" + ce + ")" : V;
      }
      function wr(E) {
        return E.displayName || "Context";
      }
      function Wn(E) {
        if (E == null)
          return null;
        if (typeof E.tag == "number" && J("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
          return E.displayName || E.name || null;
        if (typeof E == "string")
          return E;
        switch (E) {
          case C:
            return "Fragment";
          case T:
            return "Portal";
          case U:
            return "Profiler";
          case g:
            return "StrictMode";
          case Y:
            return "Suspense";
          case oe:
            return "SuspenseList";
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case z:
              var _ = E;
              return wr(_) + ".Consumer";
            case Q:
              var V = E;
              return wr(V._context) + ".Provider";
            case j:
              return Dr(E, E.render, "ForwardRef");
            case q:
              var G = E.displayName || null;
              return G !== null ? G : Wn(E.type) || "Memo";
            case K: {
              var ce = E, Ne = ce._payload, Ce = ce._init;
              try {
                return Wn(Ce(Ne));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var va = Object.prototype.hasOwnProperty, ha = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, ma, ur;
      ur = {};
      function Lr(E) {
        if (va.call(E, "ref")) {
          var _ = Object.getOwnPropertyDescriptor(E, "ref").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return E.ref !== void 0;
      }
      function hn(E) {
        if (va.call(E, "key")) {
          var _ = Object.getOwnPropertyDescriptor(E, "key").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return E.key !== void 0;
      }
      function ya(E, _) {
        var V = function() {
          Rr || (Rr = !0, J("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        V.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: V,
          configurable: !0
        });
      }
      function ga(E, _) {
        var V = function() {
          ma || (ma = !0, J("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        V.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: V,
          configurable: !0
        });
      }
      function Sa(E) {
        if (typeof E.ref == "string" && yt.current && E.__self && yt.current.stateNode !== E.__self) {
          var _ = Wn(yt.current.type);
          ur[_] || (J('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _, E.ref), ur[_] = !0);
        }
      }
      var he = function(E, _, V, G, ce, Ne, Ce) {
        var Xe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: w,
          // Built-in properties that belong on the element
          type: E,
          key: _,
          ref: V,
          props: Ce,
          // Record the component responsible for creating this element.
          _owner: Ne
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
          value: G
        }), Object.defineProperty(Xe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ce
        }), Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)), Xe;
      };
      function Fe(E, _, V) {
        var G, ce = {}, Ne = null, Ce = null, Xe = null, dt = null;
        if (_ != null) {
          Lr(_) && (Ce = _.ref, Sa(_)), hn(_) && (Hn(_.key), Ne = "" + _.key), Xe = _.__self === void 0 ? null : _.__self, dt = _.__source === void 0 ? null : _.__source;
          for (G in _)
            va.call(_, G) && !ha.hasOwnProperty(G) && (ce[G] = _[G]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          ce.children = V;
        else if (Ht > 1) {
          for (var $t = Array(Ht), It = 0; It < Ht; It++)
            $t[It] = arguments[It + 2];
          Object.freeze && Object.freeze($t), ce.children = $t;
        }
        if (E && E.defaultProps) {
          var Yt = E.defaultProps;
          for (G in Yt)
            ce[G] === void 0 && (ce[G] = Yt[G]);
        }
        if (Ne || Ce) {
          var sn = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Ne && ya(ce, sn), Ce && ga(ce, sn);
        }
        return he(E, Ne, Ce, Xe, dt, yt.current, ce);
      }
      function ct(E, _) {
        var V = he(E.type, _, E.ref, E._self, E._source, E._owner, E.props);
        return V;
      }
      function Ft(E, _, V) {
        if (E == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
        var G, ce = He({}, E.props), Ne = E.key, Ce = E.ref, Xe = E._self, dt = E._source, Ht = E._owner;
        if (_ != null) {
          Lr(_) && (Ce = _.ref, Ht = yt.current), hn(_) && (Hn(_.key), Ne = "" + _.key);
          var $t;
          E.type && E.type.defaultProps && ($t = E.type.defaultProps);
          for (G in _)
            va.call(_, G) && !ha.hasOwnProperty(G) && (_[G] === void 0 && $t !== void 0 ? ce[G] = $t[G] : ce[G] = _[G]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          ce.children = V;
        else if (It > 1) {
          for (var Yt = Array(It), sn = 0; sn < It; sn++)
            Yt[sn] = arguments[sn + 2];
          ce.children = Yt;
        }
        return he(E.type, Ne, Ce, Xe, dt, Ht, ce);
      }
      function Nt(E) {
        return typeof E == "object" && E !== null && E.$$typeof === w;
      }
      var Ln = ".", yn = ":";
      function Tr(E) {
        var _ = /[=:]/g, V = {
          "=": "=0",
          ":": "=2"
        }, G = E.replace(_, function(ce) {
          return V[ce];
        });
        return "$" + G;
      }
      var Vt = !1, Zn = /\/+/g;
      function Pt(E) {
        return E.replace(Zn, "$&/");
      }
      function Jt(E, _) {
        return typeof E == "object" && E !== null && E.key != null ? (Hn(E.key), Tr("" + E.key)) : _.toString(36);
      }
      function ri(E, _, V, G, ce) {
        var Ne = typeof E;
        (Ne === "undefined" || Ne === "boolean") && (E = null);
        var Ce = !1;
        if (E === null)
          Ce = !0;
        else
          switch (Ne) {
            case "string":
            case "number":
              Ce = !0;
              break;
            case "object":
              switch (E.$$typeof) {
                case w:
                case T:
                  Ce = !0;
              }
          }
        if (Ce) {
          var Xe = E, dt = ce(Xe), Ht = G === "" ? Ln + Jt(Xe, 0) : G;
          if (Tn(dt)) {
            var $t = "";
            Ht != null && ($t = Pt(Ht) + "/"), ri(dt, _, $t, "", function(dd) {
              return dd;
            });
          } else
            dt != null && (Nt(dt) && (dt.key && (!Xe || Xe.key !== dt.key) && Hn(dt.key), dt = ct(
              dt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              V + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (dt.key && (!Xe || Xe.key !== dt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Pt("" + dt.key) + "/"
              ) : "") + Ht
            )), _.push(dt));
          return 1;
        }
        var It, Yt, sn = 0, Dt = G === "" ? Ln : G + yn;
        if (Tn(E))
          for (var _l = 0; _l < E.length; _l++)
            It = E[_l], Yt = Dt + Jt(It, _l), sn += ri(It, _, V, Yt, ce);
        else {
          var su = Pe(E);
          if (typeof su == "function") {
            var gs = E;
            su === gs.entries && (Vt || Ve("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Vt = !0);
            for (var Ss = su.call(gs), qi, Es = 0; !(qi = Ss.next()).done; )
              It = qi.value, Yt = Dt + Jt(It, Es++), sn += ri(It, _, V, Yt, ce);
          } else if (Ne === "object") {
            var Cs = String(E);
            throw new Error("Objects are not valid as a React child (found: " + (Cs === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : Cs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return sn;
      }
      function Ma(E, _, V) {
        if (E == null)
          return E;
        var G = [], ce = 0;
        return ri(E, G, "", "", function(Ne) {
          return _.call(V, Ne, ce++);
        }), G;
      }
      function El(E) {
        var _ = 0;
        return Ma(E, function() {
          _++;
        }), _;
      }
      function so(E, _, V) {
        Ma(E, function() {
          _.apply(this, arguments);
        }, V);
      }
      function co(E) {
        return Ma(E, function(_) {
          return _;
        }) || [];
      }
      function Cl(E) {
        if (!Nt(E))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return E;
      }
      function ai(E) {
        var _ = {
          $$typeof: z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: E,
          _currentValue2: E,
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
        _.Provider = {
          $$typeof: Q,
          _context: _
        };
        var V = !1, G = !1, ce = !1;
        {
          var Ne = {
            $$typeof: z,
            _context: _
          };
          Object.defineProperties(Ne, {
            Provider: {
              get: function() {
                return G || (G = !0, J("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), _.Provider;
              },
              set: function(Ce) {
                _.Provider = Ce;
              }
            },
            _currentValue: {
              get: function() {
                return _._currentValue;
              },
              set: function(Ce) {
                _._currentValue = Ce;
              }
            },
            _currentValue2: {
              get: function() {
                return _._currentValue2;
              },
              set: function(Ce) {
                _._currentValue2 = Ce;
              }
            },
            _threadCount: {
              get: function() {
                return _._threadCount;
              },
              set: function(Ce) {
                _._threadCount = Ce;
              }
            },
            Consumer: {
              get: function() {
                return V || (V = !0, J("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), _.Consumer;
              }
            },
            displayName: {
              get: function() {
                return _.displayName;
              },
              set: function(Ce) {
                ce || (Ve("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ce), ce = !0);
              }
            }
          }), _.Consumer = Ne;
        }
        return _._currentRenderer = null, _._currentRenderer2 = null, _;
      }
      var ii = -1, Aa = 0, Bi = 1, Wr = 2;
      function Qr(E) {
        if (E._status === ii) {
          var _ = E._result, V = _();
          if (V.then(function(Ne) {
            if (E._status === Aa || E._status === ii) {
              var Ce = E;
              Ce._status = Bi, Ce._result = Ne;
            }
          }, function(Ne) {
            if (E._status === Aa || E._status === ii) {
              var Ce = E;
              Ce._status = Wr, Ce._result = Ne;
            }
          }), E._status === ii) {
            var G = E;
            G._status = Aa, G._result = V;
          }
        }
        if (E._status === Bi) {
          var ce = E._result;
          return ce === void 0 && J(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ce), "default" in ce || J(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ce), ce.default;
        } else
          throw E._result;
      }
      function Ea(E) {
        var _ = {
          // We use these fields to store the result.
          _status: ii,
          _result: E
        }, V = {
          $$typeof: K,
          _payload: _,
          _init: Qr
        };
        {
          var G, ce;
          Object.defineProperties(V, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return G;
              },
              set: function(Ne) {
                J("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = Ne, Object.defineProperty(V, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ce;
              },
              set: function(Ne) {
                J("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ce = Ne, Object.defineProperty(V, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return V;
      }
      function Vi(E) {
        E != null && E.$$typeof === q ? J("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof E != "function" ? J("forwardRef requires a render function but was given %s.", E === null ? "null" : typeof E) : E.length !== 0 && E.length !== 2 && J("forwardRef render functions accept exactly two parameters: props and ref. %s", E.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), E != null && (E.defaultProps != null || E.propTypes != null) && J("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var _ = {
          $$typeof: j,
          render: E
        };
        {
          var V;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return V;
            },
            set: function(G) {
              V = G, !E.name && !E.displayName && (E.displayName = G);
            }
          });
        }
        return _;
      }
      var O;
      O = Symbol.for("react.module.reference");
      function ie(E) {
        return !!(typeof E == "string" || typeof E == "function" || E === C || E === U || nt || E === g || E === Y || E === oe || Ge || E === Te || Wt || Et || Gt || typeof E == "object" && E !== null && (E.$$typeof === K || E.$$typeof === q || E.$$typeof === Q || E.$$typeof === z || E.$$typeof === j || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        E.$$typeof === O || E.getModuleId !== void 0));
      }
      function pe(E, _) {
        ie(E) || J("memo: The first argument must be a component. Instead received: %s", E === null ? "null" : typeof E);
        var V = {
          $$typeof: q,
          type: E,
          compare: _ === void 0 ? null : _
        };
        {
          var G;
          Object.defineProperty(V, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(ce) {
              G = ce, !E.name && !E.displayName && (E.displayName = ce);
            }
          });
        }
        return V;
      }
      function me() {
        var E = _e.current;
        return E === null && J(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), E;
      }
      function gt(E) {
        var _ = me();
        if (E._context !== void 0) {
          var V = E._context;
          V.Consumer === E ? J("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : V.Provider === E && J("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return _.useContext(E);
      }
      function xt(E) {
        var _ = me();
        return _.useState(E);
      }
      function st(E, _, V) {
        var G = me();
        return G.useReducer(E, _, V);
      }
      function Be(E) {
        var _ = me();
        return _.useRef(E);
      }
      function Bn(E, _) {
        var V = me();
        return V.useEffect(E, _);
      }
      function en(E, _) {
        var V = me();
        return V.useInsertionEffect(E, _);
      }
      function tn(E, _) {
        var V = me();
        return V.useLayoutEffect(E, _);
      }
      function xr(E, _) {
        var V = me();
        return V.useCallback(E, _);
      }
      function yi(E, _) {
        var V = me();
        return V.useMemo(E, _);
      }
      function nn(E, _, V) {
        var G = me();
        return G.useImperativeHandle(E, _, V);
      }
      function qr(E, _) {
        {
          var V = me();
          return V.useDebugValue(E, _);
        }
      }
      function os() {
        var E = me();
        return E.useTransition();
      }
      function gi(E) {
        var _ = me();
        return _.useDeferredValue(E);
      }
      function ft() {
        var E = me();
        return E.useId();
      }
      function fo(E, _, V) {
        var G = me();
        return G.useSyncExternalStore(E, _, V);
      }
      var $i = 0, wl, Gr, us, Nr, ss, cs, fs;
      function po() {
      }
      po.__reactDisabledLog = !0;
      function tu() {
        {
          if ($i === 0) {
            wl = console.log, Gr = console.info, us = console.warn, Nr = console.error, ss = console.group, cs = console.groupCollapsed, fs = console.groupEnd;
            var E = {
              configurable: !0,
              enumerable: !0,
              value: po,
              writable: !0
            };
            Object.defineProperties(console, {
              info: E,
              log: E,
              warn: E,
              error: E,
              group: E,
              groupCollapsed: E,
              groupEnd: E
            });
          }
          $i++;
        }
      }
      function Ii() {
        {
          if ($i--, $i === 0) {
            var E = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: He({}, E, {
                value: wl
              }),
              info: He({}, E, {
                value: Gr
              }),
              warn: He({}, E, {
                value: us
              }),
              error: He({}, E, {
                value: Nr
              }),
              group: He({}, E, {
                value: ss
              }),
              groupCollapsed: He({}, E, {
                value: cs
              }),
              groupEnd: He({}, E, {
                value: fs
              })
            });
          }
          $i < 0 && J("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Si = Je.ReactCurrentDispatcher, za;
      function Rl(E, _, V) {
        {
          if (za === void 0)
            try {
              throw Error();
            } catch (ce) {
              var G = ce.stack.trim().match(/\n( *(at )?)/);
              za = G && G[1] || "";
            }
          return `
` + za + E;
        }
      }
      var Ei = !1, vo;
      {
        var ho = typeof WeakMap == "function" ? WeakMap : Map;
        vo = new ho();
      }
      function Tl(E, _) {
        if (!E || Ei)
          return "";
        {
          var V = vo.get(E);
          if (V !== void 0)
            return V;
        }
        var G;
        Ei = !0;
        var ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ne;
        Ne = Si.current, Si.current = null, tu();
        try {
          if (_) {
            var Ce = function() {
              throw Error();
            };
            if (Object.defineProperty(Ce.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ce, []);
              } catch (Dt) {
                G = Dt;
              }
              Reflect.construct(E, [], Ce);
            } else {
              try {
                Ce.call();
              } catch (Dt) {
                G = Dt;
              }
              E.call(Ce.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Dt) {
              G = Dt;
            }
            E();
          }
        } catch (Dt) {
          if (Dt && G && typeof Dt.stack == "string") {
            for (var Xe = Dt.stack.split(`
`), dt = G.stack.split(`
`), Ht = Xe.length - 1, $t = dt.length - 1; Ht >= 1 && $t >= 0 && Xe[Ht] !== dt[$t]; )
              $t--;
            for (; Ht >= 1 && $t >= 0; Ht--, $t--)
              if (Xe[Ht] !== dt[$t]) {
                if (Ht !== 1 || $t !== 1)
                  do
                    if (Ht--, $t--, $t < 0 || Xe[Ht] !== dt[$t]) {
                      var It = `
` + Xe[Ht].replace(" at new ", " at ");
                      return E.displayName && It.includes("<anonymous>") && (It = It.replace("<anonymous>", E.displayName)), typeof E == "function" && vo.set(E, It), It;
                    }
                  while (Ht >= 1 && $t >= 0);
                break;
              }
          }
        } finally {
          Ei = !1, Si.current = Ne, Ii(), Error.prepareStackTrace = ce;
        }
        var Yt = E ? E.displayName || E.name : "", sn = Yt ? Rl(Yt) : "";
        return typeof E == "function" && vo.set(E, sn), sn;
      }
      function ds(E, _, V) {
        return Tl(E, !1);
      }
      function ps(E) {
        var _ = E.prototype;
        return !!(_ && _.isReactComponent);
      }
      function Tt(E, _, V) {
        if (E == null)
          return "";
        if (typeof E == "function")
          return Tl(E, ps(E));
        if (typeof E == "string")
          return Rl(E);
        switch (E) {
          case Y:
            return Rl("Suspense");
          case oe:
            return Rl("SuspenseList");
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case j:
              return ds(E.render);
            case q:
              return Tt(E.type, _, V);
            case K: {
              var G = E, ce = G._payload, Ne = G._init;
              try {
                return Tt(Ne(ce), _, V);
              } catch {
              }
            }
          }
        return "";
      }
      var vs = {}, nu = Je.ReactDebugCurrentFrame;
      function xl(E) {
        if (E) {
          var _ = E._owner, V = Tt(E.type, E._source, _ ? _.type : null);
          nu.setExtraStackFrame(V);
        } else
          nu.setExtraStackFrame(null);
      }
      function hs(E, _, V, G, ce) {
        {
          var Ne = Function.call.bind(va);
          for (var Ce in E)
            if (Ne(E, Ce)) {
              var Xe = void 0;
              try {
                if (typeof E[Ce] != "function") {
                  var dt = Error((G || "React class") + ": " + V + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw dt.name = "Invariant Violation", dt;
                }
                Xe = E[Ce](_, Ce, G, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                Xe = Ht;
              }
              Xe && !(Xe instanceof Error) && (xl(ce), J("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", V, Ce, typeof Xe), xl(null)), Xe instanceof Error && !(Xe.message in vs) && (vs[Xe.message] = !0, xl(ce), J("Failed %s type: %s", V, Xe.message), xl(null));
            }
        }
      }
      function Ot(E) {
        if (E) {
          var _ = E._owner, V = Tt(E.type, E._source, _ ? _.type : null);
          vn(V);
        } else
          vn(null);
      }
      var ru;
      ru = !1;
      function mo() {
        if (yt.current) {
          var E = Wn(yt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
      function tt(E) {
        if (E !== void 0) {
          var _ = E.fileName.replace(/^.*[\\\/]/, ""), V = E.lineNumber;
          return `

Check your code at ` + _ + ":" + V + ".";
        }
        return "";
      }
      function li(E) {
        return E != null ? tt(E.__source) : "";
      }
      var gn = {};
      function Kr(E) {
        var _ = mo();
        if (!_) {
          var V = typeof E == "string" ? E : E.displayName || E.name;
          V && (_ = `

Check the top-level render call using <` + V + ">.");
        }
        return _;
      }
      function Ua(E, _) {
        if (!(!E._store || E._store.validated || E.key != null)) {
          E._store.validated = !0;
          var V = Kr(_);
          if (!gn[V]) {
            gn[V] = !0;
            var G = "";
            E && E._owner && E._owner !== yt.current && (G = " It was passed a child from " + Wn(E._owner.type) + "."), Ot(E), J('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, G), Ot(null);
          }
        }
      }
      function bl(E, _) {
        if (typeof E == "object") {
          if (Tn(E))
            for (var V = 0; V < E.length; V++) {
              var G = E[V];
              Nt(G) && Ua(G, _);
            }
          else if (Nt(E))
            E._store && (E._store.validated = !0);
          else if (E) {
            var ce = Pe(E);
            if (typeof ce == "function" && ce !== E.entries)
              for (var Ne = ce.call(E), Ce; !(Ce = Ne.next()).done; )
                Nt(Ce.value) && Ua(Ce.value, _);
          }
        }
      }
      function un(E) {
        {
          var _ = E.type;
          if (_ == null || typeof _ == "string")
            return;
          var V;
          if (typeof _ == "function")
            V = _.propTypes;
          else if (typeof _ == "object" && (_.$$typeof === j || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          _.$$typeof === q))
            V = _.propTypes;
          else
            return;
          if (V) {
            var G = Wn(_);
            hs(V, E.props, "prop", G, E);
          } else if (_.PropTypes !== void 0 && !ru) {
            ru = !0;
            var ce = Wn(_);
            J("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
          }
          typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && J("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Sn(E) {
        {
          for (var _ = Object.keys(E.props), V = 0; V < _.length; V++) {
            var G = _[V];
            if (G !== "children" && G !== "key") {
              Ot(E), J("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), Ot(null);
              break;
            }
          }
          E.ref !== null && (Ot(E), J("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
        }
      }
      function ms(E, _, V) {
        var G = ie(E);
        if (!G) {
          var ce = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = li(_);
          Ne ? ce += Ne : ce += mo();
          var Ce;
          E === null ? Ce = "null" : Tn(E) ? Ce = "array" : E !== void 0 && E.$$typeof === w ? (Ce = "<" + (Wn(E.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof E, J("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, ce);
        }
        var Xe = Fe.apply(this, arguments);
        if (Xe == null)
          return Xe;
        if (G)
          for (var dt = 2; dt < arguments.length; dt++)
            bl(arguments[dt], E);
        return E === C ? Sn(Xe) : un(Xe), Xe;
      }
      var sr = !1;
      function Xr(E) {
        var _ = ms.bind(null, E);
        return _.type = E, sr || (sr = !0, Ve("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(_, "type", {
          enumerable: !1,
          get: function() {
            return Ve("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: E
            }), E;
          }
        }), _;
      }
      function oi(E, _, V) {
        for (var G = Ft.apply(this, arguments), ce = 2; ce < arguments.length; ce++)
          bl(arguments[ce], G.type);
        return un(G), G;
      }
      function au(E, _) {
        var V = mt.transition;
        mt.transition = {};
        var G = mt.transition;
        mt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          E();
        } finally {
          if (mt.transition = V, V === null && G._updatedFibers) {
            var ce = G._updatedFibers.size;
            ce > 10 && Ve("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), G._updatedFibers.clear();
          }
        }
      }
      var yo = !1, go = null;
      function kl(E) {
        if (go === null)
          try {
            var _ = ("require" + Math.random()).slice(0, 7), V = h && h[_];
            go = V.call(h, "timers").setImmediate;
          } catch {
            go = function(ce) {
              yo === !1 && (yo = !0, typeof MessageChannel > "u" && J("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ne = new MessageChannel();
              Ne.port1.onmessage = ce, Ne.port2.postMessage(void 0);
            };
          }
        return go(E);
      }
      var ja = 0, Yi = !1;
      function iu(E) {
        {
          var _ = ja;
          ja++, xe.current === null && (xe.current = []);
          var V = xe.isBatchingLegacy, G;
          try {
            if (xe.isBatchingLegacy = !0, G = E(), !V && xe.didScheduleLegacyUpdate) {
              var ce = xe.current;
              ce !== null && (xe.didScheduleLegacyUpdate = !1, Qi(ce));
            }
          } catch (Yt) {
            throw Wi(_), Yt;
          } finally {
            xe.isBatchingLegacy = V;
          }
          if (G !== null && typeof G == "object" && typeof G.then == "function") {
            var Ne = G, Ce = !1, Xe = {
              then: function(Yt, sn) {
                Ce = !0, Ne.then(function(Dt) {
                  Wi(_), ja === 0 ? lu(Dt, Yt, sn) : Yt(Dt);
                }, function(Dt) {
                  Wi(_), sn(Dt);
                });
              }
            };
            return !Yi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ce || (Yi = !0, J("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Xe;
          } else {
            var dt = G;
            if (Wi(_), ja === 0) {
              var Ht = xe.current;
              Ht !== null && (Qi(Ht), xe.current = null);
              var $t = {
                then: function(Yt, sn) {
                  xe.current === null ? (xe.current = [], lu(dt, Yt, sn)) : Yt(dt);
                }
              };
              return $t;
            } else {
              var It = {
                then: function(Yt, sn) {
                  Yt(dt);
                }
              };
              return It;
            }
          }
        }
      }
      function Wi(E) {
        E !== ja - 1 && J("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ja = E;
      }
      function lu(E, _, V) {
        {
          var G = xe.current;
          if (G !== null)
            try {
              Qi(G), kl(function() {
                G.length === 0 ? (xe.current = null, _(E)) : lu(E, _, V);
              });
            } catch (ce) {
              V(ce);
            }
          else
            _(E);
        }
      }
      var Ci = !1;
      function Qi(E) {
        if (!Ci) {
          Ci = !0;
          var _ = 0;
          try {
            for (; _ < E.length; _++) {
              var V = E[_];
              do
                V = V(!0);
              while (V !== null);
            }
            E.length = 0;
          } catch (G) {
            throw E = E.slice(_ + 1), G;
          } finally {
            Ci = !1;
          }
        }
      }
      var ou = ms, ys = oi, ui = Xr, uu = {
        map: Ma,
        forEach: so,
        count: El,
        toArray: co,
        only: Cl
      };
      f.Children = uu, f.Component = ot, f.Fragment = C, f.Profiler = U, f.PureComponent = ir, f.StrictMode = g, f.Suspense = Y, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Je, f.cloneElement = ys, f.createContext = ai, f.createElement = ou, f.createFactory = ui, f.createRef = Yr, f.forwardRef = Vi, f.isValidElement = Nt, f.lazy = Ea, f.memo = pe, f.startTransition = au, f.unstable_act = iu, f.useCallback = xr, f.useContext = gt, f.useDebugValue = qr, f.useDeferredValue = gi, f.useEffect = Bn, f.useId = ft, f.useImperativeHandle = nn, f.useInsertionEffect = en, f.useLayoutEffect = tn, f.useMemo = yi, f.useReducer = st, f.useRef = Be, f.useState = xt, f.useSyncExternalStore = fo, f.useTransition = os, f.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vv, vv.exports)), vv.exports;
}
var _t = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ER;
function wD() {
  if (ER)
    return _t;
  ER = 1;
  var h = Symbol.for("react.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), C = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), Q = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), j = Symbol.iterator;
  function Y(D) {
    return D === null || typeof D != "object" ? null : (D = j && D[j] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, K = {};
  function Te(D, te, Ee) {
    this.props = D, this.context = te, this.refs = K, this.updater = Ee || oe;
  }
  Te.prototype.isReactComponent = {}, Te.prototype.setState = function(D, te) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, te, "setState");
  }, Te.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function lt() {
  }
  lt.prototype = Te.prototype;
  function pt(D, te, Ee) {
    this.props = D, this.context = te, this.refs = K, this.updater = Ee || oe;
  }
  var Pe = pt.prototype = new lt();
  Pe.constructor = pt, q(Pe, Te.prototype), Pe.isPureReactComponent = !0;
  var _e = Array.isArray, mt = Object.prototype.hasOwnProperty, xe = { current: null }, yt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ze(D, te, Ee) {
    var He, $e = {}, ot = null, vt = null;
    if (te != null)
      for (He in te.ref !== void 0 && (vt = te.ref), te.key !== void 0 && (ot = "" + te.key), te)
        mt.call(te, He) && !yt.hasOwnProperty(He) && ($e[He] = te[He]);
    var Ct = arguments.length - 2;
    if (Ct === 1)
      $e.children = Ee;
    else if (1 < Ct) {
      for (var ht = Array(Ct), on = 0; on < Ct; on++)
        ht[on] = arguments[on + 2];
      $e.children = ht;
    }
    if (D && D.defaultProps)
      for (He in Ct = D.defaultProps, Ct)
        $e[He] === void 0 && ($e[He] = Ct[He]);
    return { $$typeof: h, type: D, key: ot, ref: vt, props: $e, _owner: xe.current };
  }
  function pn(D, te) {
    return { $$typeof: h, type: D.type, key: te, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function vn(D) {
    return typeof D == "object" && D !== null && D.$$typeof === h;
  }
  function Wt(D) {
    var te = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(Ee) {
      return te[Ee];
    });
  }
  var Et = /\/+/g;
  function Gt(D, te) {
    return typeof D == "object" && D !== null && D.key != null ? Wt("" + D.key) : te.toString(36);
  }
  function Ge(D, te, Ee, He, $e) {
    var ot = typeof D;
    (ot === "undefined" || ot === "boolean") && (D = null);
    var vt = !1;
    if (D === null)
      vt = !0;
    else
      switch (ot) {
        case "string":
        case "number":
          vt = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case h:
            case f:
              vt = !0;
          }
      }
    if (vt)
      return vt = D, $e = $e(vt), D = He === "" ? "." + Gt(vt, 0) : He, _e($e) ? (Ee = "", D != null && (Ee = D.replace(Et, "$&/") + "/"), Ge($e, te, Ee, "", function(on) {
        return on;
      })) : $e != null && (vn($e) && ($e = pn($e, Ee + (!$e.key || vt && vt.key === $e.key ? "" : ("" + $e.key).replace(Et, "$&/") + "/") + D)), te.push($e)), 1;
    if (vt = 0, He = He === "" ? "." : He + ":", _e(D))
      for (var Ct = 0; Ct < D.length; Ct++) {
        ot = D[Ct];
        var ht = He + Gt(ot, Ct);
        vt += Ge(ot, te, Ee, ht, $e);
      }
    else if (ht = Y(D), typeof ht == "function")
      for (D = ht.call(D), Ct = 0; !(ot = D.next()).done; )
        ot = ot.value, ht = He + Gt(ot, Ct++), vt += Ge(ot, te, Ee, ht, $e);
    else if (ot === "object")
      throw te = String(D), Error("Objects are not valid as a React child (found: " + (te === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : te) + "). If you meant to render a collection of children, use an array instead.");
    return vt;
  }
  function nt(D, te, Ee) {
    if (D == null)
      return D;
    var He = [], $e = 0;
    return Ge(D, He, "", "", function(ot) {
      return te.call(Ee, ot, $e++);
    }), He;
  }
  function Je(D) {
    if (D._status === -1) {
      var te = D._result;
      te = te(), te.then(function(Ee) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = Ee);
      }, function(Ee) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = Ee);
      }), D._status === -1 && (D._status = 0, D._result = te);
    }
    if (D._status === 1)
      return D._result.default;
    throw D._result;
  }
  var Ve = { current: null }, J = { transition: null }, be = { ReactCurrentDispatcher: Ve, ReactCurrentBatchConfig: J, ReactCurrentOwner: xe };
  return _t.Children = { map: nt, forEach: function(D, te, Ee) {
    nt(D, function() {
      te.apply(this, arguments);
    }, Ee);
  }, count: function(D) {
    var te = 0;
    return nt(D, function() {
      te++;
    }), te;
  }, toArray: function(D) {
    return nt(D, function(te) {
      return te;
    }) || [];
  }, only: function(D) {
    if (!vn(D))
      throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, _t.Component = Te, _t.Fragment = c, _t.Profiler = w, _t.PureComponent = pt, _t.StrictMode = v, _t.Suspense = U, _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, _t.cloneElement = function(D, te, Ee) {
    if (D == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var He = q({}, D.props), $e = D.key, ot = D.ref, vt = D._owner;
    if (te != null) {
      if (te.ref !== void 0 && (ot = te.ref, vt = xe.current), te.key !== void 0 && ($e = "" + te.key), D.type && D.type.defaultProps)
        var Ct = D.type.defaultProps;
      for (ht in te)
        mt.call(te, ht) && !yt.hasOwnProperty(ht) && (He[ht] = te[ht] === void 0 && Ct !== void 0 ? Ct[ht] : te[ht]);
    }
    var ht = arguments.length - 2;
    if (ht === 1)
      He.children = Ee;
    else if (1 < ht) {
      Ct = Array(ht);
      for (var on = 0; on < ht; on++)
        Ct[on] = arguments[on + 2];
      He.children = Ct;
    }
    return { $$typeof: h, type: D.type, key: $e, ref: ot, props: He, _owner: vt };
  }, _t.createContext = function(D) {
    return D = { $$typeof: C, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: T, _context: D }, D.Consumer = D;
  }, _t.createElement = Ze, _t.createFactory = function(D) {
    var te = Ze.bind(null, D);
    return te.type = D, te;
  }, _t.createRef = function() {
    return { current: null };
  }, _t.forwardRef = function(D) {
    return { $$typeof: g, render: D };
  }, _t.isValidElement = vn, _t.lazy = function(D) {
    return { $$typeof: z, _payload: { _status: -1, _result: D }, _init: Je };
  }, _t.memo = function(D, te) {
    return { $$typeof: Q, type: D, compare: te === void 0 ? null : te };
  }, _t.startTransition = function(D) {
    var te = J.transition;
    J.transition = {};
    try {
      D();
    } finally {
      J.transition = te;
    }
  }, _t.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, _t.useCallback = function(D, te) {
    return Ve.current.useCallback(D, te);
  }, _t.useContext = function(D) {
    return Ve.current.useContext(D);
  }, _t.useDebugValue = function() {
  }, _t.useDeferredValue = function(D) {
    return Ve.current.useDeferredValue(D);
  }, _t.useEffect = function(D, te) {
    return Ve.current.useEffect(D, te);
  }, _t.useId = function() {
    return Ve.current.useId();
  }, _t.useImperativeHandle = function(D, te, Ee) {
    return Ve.current.useImperativeHandle(D, te, Ee);
  }, _t.useInsertionEffect = function(D, te) {
    return Ve.current.useInsertionEffect(D, te);
  }, _t.useLayoutEffect = function(D, te) {
    return Ve.current.useLayoutEffect(D, te);
  }, _t.useMemo = function(D, te) {
    return Ve.current.useMemo(D, te);
  }, _t.useReducer = function(D, te, Ee) {
    return Ve.current.useReducer(D, te, Ee);
  }, _t.useRef = function(D) {
    return Ve.current.useRef(D);
  }, _t.useState = function(D) {
    return Ve.current.useState(D);
  }, _t.useSyncExternalStore = function(D, te, Ee) {
    return Ve.current.useSyncExternalStore(D, te, Ee);
  }, _t.useTransition = function() {
    return Ve.current.useTransition();
  }, _t.version = "18.2.0", _t;
}
var RD = {};
RD.NODE_ENV === "production" ? yE.exports = wD() : yE.exports = CD();
var Ir = yE.exports;
const TD = /* @__PURE__ */ WR(Ir);
var CR;
function xD() {
  if (CR)
    return sv;
  CR = 1;
  var h = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return h.NODE_ENV !== "production" && function() {
    var f = Ir, c = Symbol.for("react.element"), v = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), U = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), K = Symbol.iterator, Te = "@@iterator";
    function lt(O) {
      if (O === null || typeof O != "object")
        return null;
      var ie = K && O[K] || O[Te];
      return typeof ie == "function" ? ie : null;
    }
    var pt = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Pe(O) {
      {
        for (var ie = arguments.length, pe = new Array(ie > 1 ? ie - 1 : 0), me = 1; me < ie; me++)
          pe[me - 1] = arguments[me];
        _e("error", O, pe);
      }
    }
    function _e(O, ie, pe) {
      {
        var me = pt.ReactDebugCurrentFrame, gt = me.getStackAddendum();
        gt !== "" && (ie += "%s", pe = pe.concat([gt]));
        var xt = pe.map(function(st) {
          return String(st);
        });
        xt.unshift("Warning: " + ie), Function.prototype.apply.call(console[O], console, xt);
      }
    }
    var mt = !1, xe = !1, yt = !1, Ze = !1, pn = !1, vn;
    vn = Symbol.for("react.module.reference");
    function Wt(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === w || O === C || pn || O === T || O === z || O === j || Ze || O === q || mt || xe || yt || typeof O == "object" && O !== null && (O.$$typeof === oe || O.$$typeof === Y || O.$$typeof === g || O.$$typeof === U || O.$$typeof === Q || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === vn || O.getModuleId !== void 0));
    }
    function Et(O, ie, pe) {
      var me = O.displayName;
      if (me)
        return me;
      var gt = ie.displayName || ie.name || "";
      return gt !== "" ? pe + "(" + gt + ")" : pe;
    }
    function Gt(O) {
      return O.displayName || "Context";
    }
    function Ge(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && Pe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case w:
          return "Fragment";
        case v:
          return "Portal";
        case C:
          return "Profiler";
        case T:
          return "StrictMode";
        case z:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case U:
            var ie = O;
            return Gt(ie) + ".Consumer";
          case g:
            var pe = O;
            return Gt(pe._context) + ".Provider";
          case Q:
            return Et(O, O.render, "ForwardRef");
          case Y:
            var me = O.displayName || null;
            return me !== null ? me : Ge(O.type) || "Memo";
          case oe: {
            var gt = O, xt = gt._payload, st = gt._init;
            try {
              return Ge(st(xt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var nt = Object.assign, Je = 0, Ve, J, be, D, te, Ee, He;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function ot() {
      {
        if (Je === 0) {
          Ve = console.log, J = console.info, be = console.warn, D = console.error, te = console.group, Ee = console.groupCollapsed, He = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        Je++;
      }
    }
    function vt() {
      {
        if (Je--, Je === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, O, {
              value: Ve
            }),
            info: nt({}, O, {
              value: J
            }),
            warn: nt({}, O, {
              value: be
            }),
            error: nt({}, O, {
              value: D
            }),
            group: nt({}, O, {
              value: te
            }),
            groupCollapsed: nt({}, O, {
              value: Ee
            }),
            groupEnd: nt({}, O, {
              value: He
            })
          });
        }
        Je < 0 && Pe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ct = pt.ReactCurrentDispatcher, ht;
    function on(O, ie, pe) {
      {
        if (ht === void 0)
          try {
            throw Error();
          } catch (gt) {
            var me = gt.stack.trim().match(/\n( *(at )?)/);
            ht = me && me[1] || "";
          }
        return `
` + ht + O;
      }
    }
    var ir = !1, lr;
    {
      var Yr = typeof WeakMap == "function" ? WeakMap : Map;
      lr = new Yr();
    }
    function Cr(O, ie) {
      if (!O || ir)
        return "";
      {
        var pe = lr.get(O);
        if (pe !== void 0)
          return pe;
      }
      var me;
      ir = !0;
      var gt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xt;
      xt = Ct.current, Ct.current = null, ot();
      try {
        if (ie) {
          var st = function() {
            throw Error();
          };
          if (Object.defineProperty(st.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(st, []);
            } catch (qr) {
              me = qr;
            }
            Reflect.construct(O, [], st);
          } else {
            try {
              st.call();
            } catch (qr) {
              me = qr;
            }
            O.call(st.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qr) {
            me = qr;
          }
          O();
        }
      } catch (qr) {
        if (qr && me && typeof qr.stack == "string") {
          for (var Be = qr.stack.split(`
`), Bn = me.stack.split(`
`), en = Be.length - 1, tn = Bn.length - 1; en >= 1 && tn >= 0 && Be[en] !== Bn[tn]; )
            tn--;
          for (; en >= 1 && tn >= 0; en--, tn--)
            if (Be[en] !== Bn[tn]) {
              if (en !== 1 || tn !== 1)
                do
                  if (en--, tn--, tn < 0 || Be[en] !== Bn[tn]) {
                    var xr = `
` + Be[en].replace(" at new ", " at ");
                    return O.displayName && xr.includes("<anonymous>") && (xr = xr.replace("<anonymous>", O.displayName)), typeof O == "function" && lr.set(O, xr), xr;
                  }
                while (en >= 1 && tn >= 0);
              break;
            }
        }
      } finally {
        ir = !1, Ct.current = xt, vt(), Error.prepareStackTrace = gt;
      }
      var yi = O ? O.displayName || O.name : "", nn = yi ? on(yi) : "";
      return typeof O == "function" && lr.set(O, nn), nn;
    }
    function Tn(O, ie, pe) {
      return Cr(O, !1);
    }
    function or(O) {
      var ie = O.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function Yn(O, ie, pe) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Cr(O, or(O));
      if (typeof O == "string")
        return on(O);
      switch (O) {
        case z:
          return on("Suspense");
        case j:
          return on("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case Q:
            return Tn(O.render);
          case Y:
            return Yn(O.type, ie, pe);
          case oe: {
            var me = O, gt = me._payload, xt = me._init;
            try {
              return Yn(xt(gt), ie, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var Pn = Object.prototype.hasOwnProperty, Hn = {}, Dr = pt.ReactDebugCurrentFrame;
    function wr(O) {
      if (O) {
        var ie = O._owner, pe = Yn(O.type, O._source, ie ? ie.type : null);
        Dr.setExtraStackFrame(pe);
      } else
        Dr.setExtraStackFrame(null);
    }
    function Wn(O, ie, pe, me, gt) {
      {
        var xt = Function.call.bind(Pn);
        for (var st in O)
          if (xt(O, st)) {
            var Be = void 0;
            try {
              if (typeof O[st] != "function") {
                var Bn = Error((me || "React class") + ": " + pe + " type `" + st + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[st] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Bn.name = "Invariant Violation", Bn;
              }
              Be = O[st](ie, st, me, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              Be = en;
            }
            Be && !(Be instanceof Error) && (wr(gt), Pe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", pe, st, typeof Be), wr(null)), Be instanceof Error && !(Be.message in Hn) && (Hn[Be.message] = !0, wr(gt), Pe("Failed %s type: %s", pe, Be.message), wr(null));
          }
      }
    }
    var va = Array.isArray;
    function ha(O) {
      return va(O);
    }
    function Rr(O) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, pe = ie && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return pe;
      }
    }
    function ma(O) {
      try {
        return ur(O), !1;
      } catch {
        return !0;
      }
    }
    function ur(O) {
      return "" + O;
    }
    function Lr(O) {
      if (ma(O))
        return Pe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(O)), ur(O);
    }
    var hn = pt.ReactCurrentOwner, ya = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ga, Sa, he;
    he = {};
    function Fe(O) {
      if (Pn.call(O, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function ct(O) {
      if (Pn.call(O, "key")) {
        var ie = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Ft(O, ie) {
      if (typeof O.ref == "string" && hn.current && ie && hn.current.stateNode !== ie) {
        var pe = Ge(hn.current.type);
        he[pe] || (Pe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ge(hn.current.type), O.ref), he[pe] = !0);
      }
    }
    function Nt(O, ie) {
      {
        var pe = function() {
          ga || (ga = !0, Pe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        pe.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function Ln(O, ie) {
      {
        var pe = function() {
          Sa || (Sa = !0, Pe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        pe.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var yn = function(O, ie, pe, me, gt, xt, st) {
      var Be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: O,
        key: ie,
        ref: pe,
        props: st,
        // Record the component responsible for creating this element.
        _owner: xt
      };
      return Be._store = {}, Object.defineProperty(Be._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Be, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(Be, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: gt
      }), Object.freeze && (Object.freeze(Be.props), Object.freeze(Be)), Be;
    };
    function Tr(O, ie, pe, me, gt) {
      {
        var xt, st = {}, Be = null, Bn = null;
        pe !== void 0 && (Lr(pe), Be = "" + pe), ct(ie) && (Lr(ie.key), Be = "" + ie.key), Fe(ie) && (Bn = ie.ref, Ft(ie, gt));
        for (xt in ie)
          Pn.call(ie, xt) && !ya.hasOwnProperty(xt) && (st[xt] = ie[xt]);
        if (O && O.defaultProps) {
          var en = O.defaultProps;
          for (xt in en)
            st[xt] === void 0 && (st[xt] = en[xt]);
        }
        if (Be || Bn) {
          var tn = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Be && Nt(st, tn), Bn && Ln(st, tn);
        }
        return yn(O, Be, Bn, gt, me, hn.current, st);
      }
    }
    var Vt = pt.ReactCurrentOwner, Zn = pt.ReactDebugCurrentFrame;
    function Pt(O) {
      if (O) {
        var ie = O._owner, pe = Yn(O.type, O._source, ie ? ie.type : null);
        Zn.setExtraStackFrame(pe);
      } else
        Zn.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function ri(O) {
      return typeof O == "object" && O !== null && O.$$typeof === c;
    }
    function Ma() {
      {
        if (Vt.current) {
          var O = Ge(Vt.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function El(O) {
      {
        if (O !== void 0) {
          var ie = O.fileName.replace(/^.*[\\\/]/, ""), pe = O.lineNumber;
          return `

Check your code at ` + ie + ":" + pe + ".";
        }
        return "";
      }
    }
    var so = {};
    function co(O) {
      {
        var ie = Ma();
        if (!ie) {
          var pe = typeof O == "string" ? O : O.displayName || O.name;
          pe && (ie = `

Check the top-level render call using <` + pe + ">.");
        }
        return ie;
      }
    }
    function Cl(O, ie) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var pe = co(ie);
        if (so[pe])
          return;
        so[pe] = !0;
        var me = "";
        O && O._owner && O._owner !== Vt.current && (me = " It was passed a child from " + Ge(O._owner.type) + "."), Pt(O), Pe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, me), Pt(null);
      }
    }
    function ai(O, ie) {
      {
        if (typeof O != "object")
          return;
        if (ha(O))
          for (var pe = 0; pe < O.length; pe++) {
            var me = O[pe];
            ri(me) && Cl(me, ie);
          }
        else if (ri(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var gt = lt(O);
          if (typeof gt == "function" && gt !== O.entries)
            for (var xt = gt.call(O), st; !(st = xt.next()).done; )
              ri(st.value) && Cl(st.value, ie);
        }
      }
    }
    function ii(O) {
      {
        var ie = O.type;
        if (ie == null || typeof ie == "string")
          return;
        var pe;
        if (typeof ie == "function")
          pe = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === Q || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === Y))
          pe = ie.propTypes;
        else
          return;
        if (pe) {
          var me = Ge(ie);
          Wn(pe, O.props, "prop", me, O);
        } else if (ie.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var gt = Ge(ie);
          Pe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", gt || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && Pe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Aa(O) {
      {
        for (var ie = Object.keys(O.props), pe = 0; pe < ie.length; pe++) {
          var me = ie[pe];
          if (me !== "children" && me !== "key") {
            Pt(O), Pe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), Pt(null);
            break;
          }
        }
        O.ref !== null && (Pt(O), Pe("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    function Bi(O, ie, pe, me, gt, xt) {
      {
        var st = Wt(O);
        if (!st) {
          var Be = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Bn = El(gt);
          Bn ? Be += Bn : Be += Ma();
          var en;
          O === null ? en = "null" : ha(O) ? en = "array" : O !== void 0 && O.$$typeof === c ? (en = "<" + (Ge(O.type) || "Unknown") + " />", Be = " Did you accidentally export a JSX literal instead of a component?") : en = typeof O, Pe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, Be);
        }
        var tn = Tr(O, ie, pe, gt, xt);
        if (tn == null)
          return tn;
        if (st) {
          var xr = ie.children;
          if (xr !== void 0)
            if (me)
              if (ha(xr)) {
                for (var yi = 0; yi < xr.length; yi++)
                  ai(xr[yi], O);
                Object.freeze && Object.freeze(xr);
              } else
                Pe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ai(xr, O);
        }
        return O === w ? Aa(tn) : ii(tn), tn;
      }
    }
    function Wr(O, ie, pe) {
      return Bi(O, ie, pe, !0);
    }
    function Qr(O, ie, pe) {
      return Bi(O, ie, pe, !1);
    }
    var Ea = Qr, Vi = Wr;
    sv.Fragment = w, sv.jsx = Ea, sv.jsxs = Vi;
  }(), sv;
}
var cv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wR;
function bD() {
  if (wR)
    return cv;
  wR = 1;
  var h = Ir, f = Symbol.for("react.element"), c = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, w = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(g, U, Q) {
    var z, j = {}, Y = null, oe = null;
    Q !== void 0 && (Y = "" + Q), U.key !== void 0 && (Y = "" + U.key), U.ref !== void 0 && (oe = U.ref);
    for (z in U)
      v.call(U, z) && !T.hasOwnProperty(z) && (j[z] = U[z]);
    if (g && g.defaultProps)
      for (z in U = g.defaultProps, U)
        j[z] === void 0 && (j[z] = U[z]);
    return { $$typeof: f, type: g, key: Y, ref: oe, props: j, _owner: w.current };
  }
  return cv.Fragment = c, cv.jsx = C, cv.jsxs = C, cv;
}
var kD = {};
kD.NODE_ENV === "production" ? mE.exports = bD() : mE.exports = xD();
var St = mE.exports, hv = {}, gE = { exports: {} }, ti = {}, hy = { exports: {} }, uE = {}, RR;
function _D() {
  return RR || (RR = 1, function(h) {
    var f = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    f.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var c = !1, v = !1, w = 5;
      function T(he, Fe) {
        var ct = he.length;
        he.push(Fe), U(he, Fe, ct);
      }
      function C(he) {
        return he.length === 0 ? null : he[0];
      }
      function g(he) {
        if (he.length === 0)
          return null;
        var Fe = he[0], ct = he.pop();
        return ct !== Fe && (he[0] = ct, Q(he, ct, 0)), Fe;
      }
      function U(he, Fe, ct) {
        for (var Ft = ct; Ft > 0; ) {
          var Nt = Ft - 1 >>> 1, Ln = he[Nt];
          if (z(Ln, Fe) > 0)
            he[Nt] = Fe, he[Ft] = Ln, Ft = Nt;
          else
            return;
        }
      }
      function Q(he, Fe, ct) {
        for (var Ft = ct, Nt = he.length, Ln = Nt >>> 1; Ft < Ln; ) {
          var yn = (Ft + 1) * 2 - 1, Tr = he[yn], Vt = yn + 1, Zn = he[Vt];
          if (z(Tr, Fe) < 0)
            Vt < Nt && z(Zn, Tr) < 0 ? (he[Ft] = Zn, he[Vt] = Fe, Ft = Vt) : (he[Ft] = Tr, he[yn] = Fe, Ft = yn);
          else if (Vt < Nt && z(Zn, Fe) < 0)
            he[Ft] = Zn, he[Vt] = Fe, Ft = Vt;
          else
            return;
        }
      }
      function z(he, Fe) {
        var ct = he.sortIndex - Fe.sortIndex;
        return ct !== 0 ? ct : he.id - Fe.id;
      }
      var j = 1, Y = 2, oe = 3, q = 4, K = 5;
      function Te(he, Fe) {
      }
      var lt = typeof performance == "object" && typeof performance.now == "function";
      if (lt) {
        var pt = performance;
        h.unstable_now = function() {
          return pt.now();
        };
      } else {
        var Pe = Date, _e = Pe.now();
        h.unstable_now = function() {
          return Pe.now() - _e;
        };
      }
      var mt = 1073741823, xe = -1, yt = 250, Ze = 5e3, pn = 1e4, vn = mt, Wt = [], Et = [], Gt = 1, Ge = null, nt = oe, Je = !1, Ve = !1, J = !1, be = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Ee(he) {
        for (var Fe = C(Et); Fe !== null; ) {
          if (Fe.callback === null)
            g(Et);
          else if (Fe.startTime <= he)
            g(Et), Fe.sortIndex = Fe.expirationTime, T(Wt, Fe);
          else
            return;
          Fe = C(Et);
        }
      }
      function He(he) {
        if (J = !1, Ee(he), !Ve)
          if (C(Wt) !== null)
            Ve = !0, Lr($e);
          else {
            var Fe = C(Et);
            Fe !== null && hn(He, Fe.startTime - he);
          }
      }
      function $e(he, Fe) {
        Ve = !1, J && (J = !1, ya()), Je = !0;
        var ct = nt;
        try {
          var Ft;
          if (!v)
            return ot(he, Fe);
        } finally {
          Ge = null, nt = ct, Je = !1;
        }
      }
      function ot(he, Fe) {
        var ct = Fe;
        for (Ee(ct), Ge = C(Wt); Ge !== null && !c && !(Ge.expirationTime > ct && (!he || wr())); ) {
          var Ft = Ge.callback;
          if (typeof Ft == "function") {
            Ge.callback = null, nt = Ge.priorityLevel;
            var Nt = Ge.expirationTime <= ct, Ln = Ft(Nt);
            ct = h.unstable_now(), typeof Ln == "function" ? Ge.callback = Ln : Ge === C(Wt) && g(Wt), Ee(ct);
          } else
            g(Wt);
          Ge = C(Wt);
        }
        if (Ge !== null)
          return !0;
        var yn = C(Et);
        return yn !== null && hn(He, yn.startTime - ct), !1;
      }
      function vt(he, Fe) {
        switch (he) {
          case j:
          case Y:
          case oe:
          case q:
          case K:
            break;
          default:
            he = oe;
        }
        var ct = nt;
        nt = he;
        try {
          return Fe();
        } finally {
          nt = ct;
        }
      }
      function Ct(he) {
        var Fe;
        switch (nt) {
          case j:
          case Y:
          case oe:
            Fe = oe;
            break;
          default:
            Fe = nt;
            break;
        }
        var ct = nt;
        nt = Fe;
        try {
          return he();
        } finally {
          nt = ct;
        }
      }
      function ht(he) {
        var Fe = nt;
        return function() {
          var ct = nt;
          nt = Fe;
          try {
            return he.apply(this, arguments);
          } finally {
            nt = ct;
          }
        };
      }
      function on(he, Fe, ct) {
        var Ft = h.unstable_now(), Nt;
        if (typeof ct == "object" && ct !== null) {
          var Ln = ct.delay;
          typeof Ln == "number" && Ln > 0 ? Nt = Ft + Ln : Nt = Ft;
        } else
          Nt = Ft;
        var yn;
        switch (he) {
          case j:
            yn = xe;
            break;
          case Y:
            yn = yt;
            break;
          case K:
            yn = vn;
            break;
          case q:
            yn = pn;
            break;
          case oe:
          default:
            yn = Ze;
            break;
        }
        var Tr = Nt + yn, Vt = {
          id: Gt++,
          callback: Fe,
          priorityLevel: he,
          startTime: Nt,
          expirationTime: Tr,
          sortIndex: -1
        };
        return Nt > Ft ? (Vt.sortIndex = Nt, T(Et, Vt), C(Wt) === null && Vt === C(Et) && (J ? ya() : J = !0, hn(He, Nt - Ft))) : (Vt.sortIndex = Tr, T(Wt, Vt), !Ve && !Je && (Ve = !0, Lr($e))), Vt;
      }
      function ir() {
      }
      function lr() {
        !Ve && !Je && (Ve = !0, Lr($e));
      }
      function Yr() {
        return C(Wt);
      }
      function Cr(he) {
        he.callback = null;
      }
      function Tn() {
        return nt;
      }
      var or = !1, Yn = null, Pn = -1, Hn = w, Dr = -1;
      function wr() {
        var he = h.unstable_now() - Dr;
        return !(he < Hn);
      }
      function Wn() {
      }
      function va(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? Hn = Math.floor(1e3 / he) : Hn = w;
      }
      var ha = function() {
        if (Yn !== null) {
          var he = h.unstable_now();
          Dr = he;
          var Fe = !0, ct = !0;
          try {
            ct = Yn(Fe, he);
          } finally {
            ct ? Rr() : (or = !1, Yn = null);
          }
        } else
          or = !1;
      }, Rr;
      if (typeof te == "function")
        Rr = function() {
          te(ha);
        };
      else if (typeof MessageChannel < "u") {
        var ma = new MessageChannel(), ur = ma.port2;
        ma.port1.onmessage = ha, Rr = function() {
          ur.postMessage(null);
        };
      } else
        Rr = function() {
          be(ha, 0);
        };
      function Lr(he) {
        Yn = he, or || (or = !0, Rr());
      }
      function hn(he, Fe) {
        Pn = be(function() {
          he(h.unstable_now());
        }, Fe);
      }
      function ya() {
        D(Pn), Pn = -1;
      }
      var ga = Wn, Sa = null;
      h.unstable_IdlePriority = K, h.unstable_ImmediatePriority = j, h.unstable_LowPriority = q, h.unstable_NormalPriority = oe, h.unstable_Profiling = Sa, h.unstable_UserBlockingPriority = Y, h.unstable_cancelCallback = Cr, h.unstable_continueExecution = lr, h.unstable_forceFrameRate = va, h.unstable_getCurrentPriorityLevel = Tn, h.unstable_getFirstCallbackNode = Yr, h.unstable_next = Ct, h.unstable_pauseExecution = ir, h.unstable_requestPaint = ga, h.unstable_runWithPriority = vt, h.unstable_scheduleCallback = on, h.unstable_shouldYield = wr, h.unstable_wrapCallback = ht, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(uE)), uE;
}
var sE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var TR;
function OD() {
  return TR || (TR = 1, function(h) {
    function f(J, be) {
      var D = J.length;
      J.push(be);
      e:
        for (; 0 < D; ) {
          var te = D - 1 >>> 1, Ee = J[te];
          if (0 < w(Ee, be))
            J[te] = be, J[D] = Ee, D = te;
          else
            break e;
        }
    }
    function c(J) {
      return J.length === 0 ? null : J[0];
    }
    function v(J) {
      if (J.length === 0)
        return null;
      var be = J[0], D = J.pop();
      if (D !== be) {
        J[0] = D;
        e:
          for (var te = 0, Ee = J.length, He = Ee >>> 1; te < He; ) {
            var $e = 2 * (te + 1) - 1, ot = J[$e], vt = $e + 1, Ct = J[vt];
            if (0 > w(ot, D))
              vt < Ee && 0 > w(Ct, ot) ? (J[te] = Ct, J[vt] = D, te = vt) : (J[te] = ot, J[$e] = D, te = $e);
            else if (vt < Ee && 0 > w(Ct, D))
              J[te] = Ct, J[vt] = D, te = vt;
            else
              break e;
          }
      }
      return be;
    }
    function w(J, be) {
      var D = J.sortIndex - be.sortIndex;
      return D !== 0 ? D : J.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      h.unstable_now = function() {
        return T.now();
      };
    } else {
      var C = Date, g = C.now();
      h.unstable_now = function() {
        return C.now() - g;
      };
    }
    var U = [], Q = [], z = 1, j = null, Y = 3, oe = !1, q = !1, K = !1, Te = typeof setTimeout == "function" ? setTimeout : null, lt = typeof clearTimeout == "function" ? clearTimeout : null, pt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Pe(J) {
      for (var be = c(Q); be !== null; ) {
        if (be.callback === null)
          v(Q);
        else if (be.startTime <= J)
          v(Q), be.sortIndex = be.expirationTime, f(U, be);
        else
          break;
        be = c(Q);
      }
    }
    function _e(J) {
      if (K = !1, Pe(J), !q)
        if (c(U) !== null)
          q = !0, Je(mt);
        else {
          var be = c(Q);
          be !== null && Ve(_e, be.startTime - J);
        }
    }
    function mt(J, be) {
      q = !1, K && (K = !1, lt(Ze), Ze = -1), oe = !0;
      var D = Y;
      try {
        for (Pe(be), j = c(U); j !== null && (!(j.expirationTime > be) || J && !Wt()); ) {
          var te = j.callback;
          if (typeof te == "function") {
            j.callback = null, Y = j.priorityLevel;
            var Ee = te(j.expirationTime <= be);
            be = h.unstable_now(), typeof Ee == "function" ? j.callback = Ee : j === c(U) && v(U), Pe(be);
          } else
            v(U);
          j = c(U);
        }
        if (j !== null)
          var He = !0;
        else {
          var $e = c(Q);
          $e !== null && Ve(_e, $e.startTime - be), He = !1;
        }
        return He;
      } finally {
        j = null, Y = D, oe = !1;
      }
    }
    var xe = !1, yt = null, Ze = -1, pn = 5, vn = -1;
    function Wt() {
      return !(h.unstable_now() - vn < pn);
    }
    function Et() {
      if (yt !== null) {
        var J = h.unstable_now();
        vn = J;
        var be = !0;
        try {
          be = yt(!0, J);
        } finally {
          be ? Gt() : (xe = !1, yt = null);
        }
      } else
        xe = !1;
    }
    var Gt;
    if (typeof pt == "function")
      Gt = function() {
        pt(Et);
      };
    else if (typeof MessageChannel < "u") {
      var Ge = new MessageChannel(), nt = Ge.port2;
      Ge.port1.onmessage = Et, Gt = function() {
        nt.postMessage(null);
      };
    } else
      Gt = function() {
        Te(Et, 0);
      };
    function Je(J) {
      yt = J, xe || (xe = !0, Gt());
    }
    function Ve(J, be) {
      Ze = Te(function() {
        J(h.unstable_now());
      }, be);
    }
    h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, h.unstable_continueExecution = function() {
      q || oe || (q = !0, Je(mt));
    }, h.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pn = 0 < J ? Math.floor(1e3 / J) : 5;
    }, h.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, h.unstable_getFirstCallbackNode = function() {
      return c(U);
    }, h.unstable_next = function(J) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = Y;
      }
      var D = Y;
      Y = be;
      try {
        return J();
      } finally {
        Y = D;
      }
    }, h.unstable_pauseExecution = function() {
    }, h.unstable_requestPaint = function() {
    }, h.unstable_runWithPriority = function(J, be) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var D = Y;
      Y = J;
      try {
        return be();
      } finally {
        Y = D;
      }
    }, h.unstable_scheduleCallback = function(J, be, D) {
      var te = h.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? te + D : te) : D = te, J) {
        case 1:
          var Ee = -1;
          break;
        case 2:
          Ee = 250;
          break;
        case 5:
          Ee = 1073741823;
          break;
        case 4:
          Ee = 1e4;
          break;
        default:
          Ee = 5e3;
      }
      return Ee = D + Ee, J = { id: z++, callback: be, priorityLevel: J, startTime: D, expirationTime: Ee, sortIndex: -1 }, D > te ? (J.sortIndex = D, f(Q, J), c(U) === null && J === c(Q) && (K ? (lt(Ze), Ze = -1) : K = !0, Ve(_e, D - te))) : (J.sortIndex = Ee, f(U, J), q || oe || (q = !0, Je(mt))), J;
    }, h.unstable_shouldYield = Wt, h.unstable_wrapCallback = function(J) {
      var be = Y;
      return function() {
        var D = Y;
        Y = be;
        try {
          return J.apply(this, arguments);
        } finally {
          Y = D;
        }
      };
    };
  }(sE)), sE;
}
var xR;
function QR() {
  if (xR)
    return hy.exports;
  xR = 1;
  var h = {};
  return h.NODE_ENV === "production" ? hy.exports = OD() : hy.exports = _D(), hy.exports;
}
var bR;
function DD() {
  if (bR)
    return ti;
  bR = 1;
  var h = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return h.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = Ir, c = QR(), v = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = !1;
    function T(e) {
      w = e;
    }
    function C(e) {
      if (!w) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function g(e) {
      if (!w) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("error", e, a);
      }
    }
    function U(e, t, a) {
      {
        var i = v.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(p) {
          return String(p);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Q = 0, z = 1, j = 2, Y = 3, oe = 4, q = 5, K = 6, Te = 7, lt = 8, pt = 9, Pe = 10, _e = 11, mt = 12, xe = 13, yt = 14, Ze = 15, pn = 16, vn = 17, Wt = 18, Et = 19, Gt = 21, Ge = 22, nt = 23, Je = 24, Ve = 25, J = !0, be = !1, D = !1, te = !1, Ee = !1, He = !0, $e = !1, ot = !1, vt = !0, Ct = !0, ht = !0, on = /* @__PURE__ */ new Set(), ir = {}, lr = {};
    function Yr(e, t) {
      Cr(e, t), Cr(e + "Capture", t);
    }
    function Cr(e, t) {
      ir[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ir[e] = t;
      {
        var a = e.toLowerCase();
        lr[a] = e, e === "onDoubleClick" && (lr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        on.add(t[i]);
    }
    var Tn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", or = Object.prototype.hasOwnProperty;
    function Yn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Pn(e) {
      try {
        return Hn(e), !1;
      } catch {
        return !0;
      }
    }
    function Hn(e) {
      return "" + e;
    }
    function Dr(e, t) {
      if (Pn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Yn(e)), Hn(e);
    }
    function wr(e) {
      if (Pn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yn(e)), Hn(e);
    }
    function Wn(e, t) {
      if (Pn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Yn(e)), Hn(e);
    }
    function va(e, t) {
      if (Pn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Yn(e)), Hn(e);
    }
    function ha(e) {
      if (Pn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Yn(e)), Hn(e);
    }
    function Rr(e) {
      if (Pn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Yn(e)), Hn(e);
    }
    var ma = 0, ur = 1, Lr = 2, hn = 3, ya = 4, ga = 5, Sa = 6, he = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Fe = he + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ct = new RegExp("^[" + he + "][" + Fe + "]*$"), Ft = {}, Nt = {};
    function Ln(e) {
      return or.call(Nt, e) ? !0 : or.call(Ft, e) ? !1 : ct.test(e) ? (Nt[e] = !0, !0) : (Ft[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function yn(e, t, a) {
      return t !== null ? t.type === ma : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Tr(e, t, a, i) {
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
    function Vt(e, t, a, i) {
      if (t === null || typeof t > "u" || Tr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case hn:
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
    function Zn(e) {
      return Jt.hasOwnProperty(e) ? Jt[e] : null;
    }
    function Pt(e, t, a, i, o, s, p) {
      this.acceptsBooleans = t === Lr || t === hn || t === ya, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = p;
    }
    var Jt = {}, ri = [
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
      Jt[e] = new Pt(
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
      Jt[t] = new Pt(
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
      Jt[e] = new Pt(
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
      Jt[e] = new Pt(
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
      Jt[e] = new Pt(
        e,
        hn,
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
        hn,
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
      Jt[e] = new Pt(
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
      Jt[e] = new Pt(
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
    var Ma = /[\-\:]([a-z])/g, El = function(e) {
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
      var t = e.replace(Ma, El);
      Jt[t] = new Pt(
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
      var t = e.replace(Ma, El);
      Jt[t] = new Pt(
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
      var t = e.replace(Ma, El);
      Jt[t] = new Pt(
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
      Jt[e] = new Pt(
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
    var so = "xlinkHref";
    Jt[so] = new Pt(
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
      Jt[e] = new Pt(
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
    var co = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Cl = !1;
    function ai(e) {
      !Cl && co.test(e) && (Cl = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ii(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Dr(a, t), i.sanitizeURL && ai("" + a);
        var s = i.attributeName, p = null;
        if (i.type === ya) {
          if (e.hasAttribute(s)) {
            var y = e.getAttribute(s);
            return y === "" ? !0 : Vt(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(s)) {
          if (Vt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === hn)
            return a;
          p = e.getAttribute(s);
        }
        return Vt(t, a, i, !1) ? p === null ? a : p : p === "" + a ? a : p;
      }
    }
    function Aa(e, t, a, i) {
      {
        if (!Ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Dr(a, t), o === "" + a ? a : o;
      }
    }
    function Bi(e, t, a, i) {
      var o = Zn(t);
      if (!yn(t, o, i)) {
        if (Vt(t, a, o, i) && (a = null), i || o === null) {
          if (Ln(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Dr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var p = o.mustUseProperty;
        if (p) {
          var y = o.propertyName;
          if (a === null) {
            var S = o.type;
            e[y] = S === hn ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var x = o.attributeName, b = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(x);
        else {
          var A = o.type, N;
          A === hn || A === ya && a === !0 ? N = "" : (Dr(a, x), N = "" + a, o.sanitizeURL && ai(N.toString())), b ? e.setAttributeNS(b, x, N) : e.setAttribute(x, N);
        }
      }
    }
    var Wr = Symbol.for("react.element"), Qr = Symbol.for("react.portal"), Ea = Symbol.for("react.fragment"), Vi = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), pe = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), gt = Symbol.for("react.suspense"), xt = Symbol.for("react.suspense_list"), st = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), Bn = Symbol.for("react.scope"), en = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), xr = Symbol.for("react.legacy_hidden"), yi = Symbol.for("react.cache"), nn = Symbol.for("react.tracing_marker"), qr = Symbol.iterator, os = "@@iterator";
    function gi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qr && e[qr] || e[os];
      return typeof t == "function" ? t : null;
    }
    var ft = Object.assign, fo = 0, $i, wl, Gr, us, Nr, ss, cs;
    function fs() {
    }
    fs.__reactDisabledLog = !0;
    function po() {
      {
        if (fo === 0) {
          $i = console.log, wl = console.info, Gr = console.warn, us = console.error, Nr = console.group, ss = console.groupCollapsed, cs = console.groupEnd;
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
        fo++;
      }
    }
    function tu() {
      {
        if (fo--, fo === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ft({}, e, {
              value: $i
            }),
            info: ft({}, e, {
              value: wl
            }),
            warn: ft({}, e, {
              value: Gr
            }),
            error: ft({}, e, {
              value: us
            }),
            group: ft({}, e, {
              value: Nr
            }),
            groupCollapsed: ft({}, e, {
              value: ss
            }),
            groupEnd: ft({}, e, {
              value: cs
            })
          });
        }
        fo < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ii = v.ReactCurrentDispatcher, Si;
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
    function ho(e, t) {
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
      s = Ii.current, Ii.current = null, po();
      try {
        if (t) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (I) {
              i = I;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (I) {
              i = I;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            i = I;
          }
          e();
        }
      } catch (I) {
        if (I && i && typeof I.stack == "string") {
          for (var y = I.stack.split(`
`), S = i.stack.split(`
`), x = y.length - 1, b = S.length - 1; x >= 1 && b >= 0 && y[x] !== S[b]; )
            b--;
          for (; x >= 1 && b >= 0; x--, b--)
            if (y[x] !== S[b]) {
              if (x !== 1 || b !== 1)
                do
                  if (x--, b--, b < 0 || y[x] !== S[b]) {
                    var A = `
` + y[x].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && Ei.set(e, A), A;
                  }
                while (x >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        Rl = !1, Ii.current = s, tu(), Error.prepareStackTrace = o;
      }
      var N = e ? e.displayName || e.name : "", $ = N ? za(N) : "";
      return typeof e == "function" && Ei.set(e, $), $;
    }
    function Tl(e, t, a) {
      return ho(e, !0);
    }
    function ds(e, t, a) {
      return ho(e, !1);
    }
    function ps(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Tt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ho(e, ps(e));
      if (typeof e == "string")
        return za(e);
      switch (e) {
        case gt:
          return za("Suspense");
        case xt:
          return za("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case me:
            return ds(e.render);
          case st:
            return Tt(e.type, t, a);
          case Be: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Tt(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function vs(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case q:
          return za(e.type);
        case pn:
          return za("Lazy");
        case xe:
          return za("Suspense");
        case Et:
          return za("SuspenseList");
        case Q:
        case j:
        case Ze:
          return ds(e.type);
        case _e:
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
          t += vs(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function xl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function hs(e) {
      return e.displayName || "Context";
    }
    function Ot(e) {
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
        case O:
          return "Profiler";
        case Vi:
          return "StrictMode";
        case gt:
          return "Suspense";
        case xt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case pe:
            var t = e;
            return hs(t) + ".Consumer";
          case ie:
            var a = e;
            return hs(a._context) + ".Provider";
          case me:
            return xl(e, e.render, "ForwardRef");
          case st:
            var i = e.displayName || null;
            return i !== null ? i : Ot(e.type) || "Memo";
          case Be: {
            var o = e, s = o._payload, p = o._init;
            try {
              return Ot(p(s));
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
    function mo(e) {
      return e.displayName || "Context";
    }
    function tt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Je:
          return "Cache";
        case pt:
          var i = a;
          return mo(i) + ".Consumer";
        case Pe:
          var o = a;
          return mo(o._context) + ".Provider";
        case Wt:
          return "DehydratedFragment";
        case _e:
          return ru(a, a.render, "ForwardRef");
        case Te:
          return "Fragment";
        case q:
          return a;
        case oe:
          return "Portal";
        case Y:
          return "Root";
        case K:
          return "Text";
        case pn:
          return Ot(a);
        case lt:
          return a === Vi ? "StrictMode" : "Mode";
        case Ge:
          return "Offscreen";
        case mt:
          return "Profiler";
        case Gt:
          return "Scope";
        case xe:
          return "Suspense";
        case Et:
          return "SuspenseList";
        case Ve:
          return "TracingMarker";
        case z:
        case Q:
        case vn:
        case j:
        case yt:
        case Ze:
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
          return tt(e);
      }
      return null;
    }
    function bl() {
      return gn === null ? "" : nu(gn);
    }
    function un() {
      li.getCurrentStack = null, gn = null, Kr = !1;
    }
    function Sn(e) {
      li.getCurrentStack = e === null ? null : bl, gn = e, Kr = !1;
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
          return Rr(e), e;
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
    function yo(e, t) {
      au[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function kl(e) {
      return e._valueTracker;
    }
    function ja(e) {
      e._valueTracker = null;
    }
    function Yi(e) {
      var t = "";
      return e && (go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function iu(e) {
      var t = go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(y) {
            Rr(y), i = "" + y, s.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var p = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            Rr(y), i = "" + y;
          },
          stopTracking: function() {
            ja(e), delete e[t];
          }
        };
        return p;
      }
    }
    function Wi(e) {
      kl(e) || (e._valueTracker = iu(e));
    }
    function lu(e) {
      if (!e)
        return !1;
      var t = kl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Yi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ci(e) {
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
    function E(e, t) {
      var a = e, i = t.checked, o = ft({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function _(e, t) {
      yo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ou && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component", t.type), ou = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Qi && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component", t.type), Qi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: oi(t.value != null ? t.value : i),
        controlled: uu(t)
      };
    }
    function V(e, t) {
      var a = e, i = t.checked;
      i != null && Bi(a, "checked", i, !1);
    }
    function G(e, t) {
      var a = e;
      {
        var i = uu(t);
        !a._wrapperState.controlled && i && !ui && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ui = !0), a._wrapperState.controlled && !i && !ys && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ys = !0);
      }
      V(e, t);
      var o = oi(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Xr(o)) : a.value !== Xr(o) && (a.value = Xr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Xe(a, t.type, o) : t.hasOwnProperty("defaultValue") && Xe(a, t.type, oi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ce(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var p = Xr(i._wrapperState.initialValue);
        a || p !== i.value && (i.value = p), i.defaultValue = p;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function Ne(e, t) {
      var a = e;
      G(a, t), Ce(a, t);
    }
    function Ce(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Dr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var p = o[s];
          if (!(p === e || p.form !== e.form)) {
            var y = em(p);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            lu(p), G(p, y);
          }
        }
      }
    }
    function Xe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ci(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Xr(e._wrapperState.initialValue) : e.defaultValue !== Xr(a) && (e.defaultValue = Xr(a)));
    }
    var dt = !1, Ht = !1, $t = !1;
    function It(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? f.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ht || (Ht = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && ($t || ($t = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !dt && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), dt = !0);
    }
    function Yt(e, t) {
      t.value != null && e.setAttribute("value", Xr(oi(t.value)));
    }
    var sn = Array.isArray;
    function Dt(e) {
      return sn(e);
    }
    var _l;
    _l = !1;
    function su() {
      var e = Ua();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var gs = ["value", "defaultValue"];
    function Ss(e) {
      {
        yo("select", e);
        for (var t = 0; t < gs.length; t++) {
          var a = gs[t];
          if (e[a] != null) {
            var i = Dt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, su()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, su());
          }
        }
      }
    }
    function qi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, p = {}, y = 0; y < s.length; y++)
          p["$" + s[y]] = !0;
        for (var S = 0; S < o.length; S++) {
          var x = p.hasOwnProperty("$" + o[S].value);
          o[S].selected !== x && (o[S].selected = x), x && i && (o[S].defaultSelected = !0);
        }
      } else {
        for (var b = Xr(oi(a)), A = null, N = 0; N < o.length; N++) {
          if (o[N].value === b) {
            o[N].selected = !0, i && (o[N].defaultSelected = !0);
            return;
          }
          A === null && !o[N].disabled && (A = o[N]);
        }
        A !== null && (A.selected = !0);
      }
    }
    function Es(e, t) {
      return ft({}, t, {
        value: void 0
      });
    }
    function Cs(e, t) {
      var a = e;
      Ss(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !_l && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _l = !0);
    }
    function dd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? qi(a, !!t.multiple, i, !1) : t.defaultValue != null && qi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Uy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? qi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? qi(a, !!t.multiple, t.defaultValue, !0) : qi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function xv(e, t) {
      var a = e, i = t.value;
      i != null && qi(a, !!t.multiple, i, !1);
    }
    var bv = !1;
    function pd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ft({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Xr(a._wrapperState.initialValue)
      });
      return i;
    }
    function kv(e, t) {
      var a = e;
      yo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !bv && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component"), bv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Dt(o)) {
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
    function _v(e, t) {
      var a = e, i = oi(t.value), o = oi(t.defaultValue);
      if (i != null) {
        var s = Xr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Xr(o));
    }
    function _c(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function jy(e, t) {
      _v(e, t);
    }
    var Gi = "http://www.w3.org/1999/xhtml", Fy = "http://www.w3.org/1998/Math/MathML", Oc = "http://www.w3.org/2000/svg";
    function vd(e) {
      switch (e) {
        case "svg":
          return Oc;
        case "math":
          return Fy;
        default:
          return Gi;
      }
    }
    function hd(e, t) {
      return e == null || e === Gi ? vd(t) : e === Oc && t === "foreignObject" ? Gi : e;
    }
    var Py = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Dc, Ov = Py(function(e, t) {
      if (e.namespaceURI === Oc && !("innerHTML" in e)) {
        Dc = Dc || document.createElement("div"), Dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Zr = 1, Ki = 3, xn = 8, Ca = 9, md = 11, ws = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ki) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Dv = {
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
    function Lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Nv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(cu).forEach(function(e) {
      Nv.forEach(function(t) {
        cu[Lv(t, e)] = cu[e];
      });
    });
    function Ol(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(cu.hasOwnProperty(e) && cu[e]) ? t + "px" : (va(t, e), ("" + t).trim());
    }
    var Hy = /([A-Z])/g, By = /^ms-/;
    function Vy(e) {
      return e.replace(Hy, "-$1").toLowerCase().replace(By, "-ms-");
    }
    var yd = function() {
    };
    {
      var Mv = /^(?:webkit|moz|o)[A-Z]/, Rs = /^-ms-/, Ts = /-(.)/g, Av = /;\s*$/, Xi = {}, gd = {}, Sd = !1, Lc = !1, Ed = function(e) {
        return e.replace(Ts, function(t, a) {
          return a.toUpperCase();
        });
      }, zv = function(e) {
        Xi.hasOwnProperty(e) && Xi[e] || (Xi[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ed(e.replace(Rs, "ms-"))
        ));
      }, Uv = function(e) {
        Xi.hasOwnProperty(e) && Xi[e] || (Xi[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, jv = function(e, t) {
        gd.hasOwnProperty(t) && gd[t] || (gd[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Av, "")));
      }, $y = function(e, t) {
        Sd || (Sd = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Iy = function(e, t) {
        Lc || (Lc = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      yd = function(e, t) {
        e.indexOf("-") > -1 ? zv(e) : Mv.test(e) ? Uv(e) : Av.test(t) && jv(e, t), typeof t == "number" && (isNaN(t) ? $y(e, t) : isFinite(t) || Iy(e, t));
      };
    }
    var Yy = yd;
    function Wy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Vy(i)) + ":", t += Ol(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Fv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Yy(i, t[i]);
          var s = Ol(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function si(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function fu(e) {
      var t = {};
      for (var a in e)
        for (var i = Dv[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function Pv(e, t) {
      {
        if (!t)
          return;
        var a = fu(e), i = fu(t), o = {};
        for (var s in a) {
          var p = a[s], y = i[s];
          if (y && p !== y) {
            var S = p + "," + y;
            if (o[S])
              continue;
            o[S] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", si(e[p]) ? "Removing" : "Updating", p, y);
          }
        }
      }
    }
    var Hv = {
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
    }, Bv = ft({
      menuitem: !0
    }, Hv), Vv = "__html";
    function xs(e, t) {
      if (t) {
        if (Bv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Vv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function So(e, t) {
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
    var Nc = {
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
    }, Eo = {
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
    }, Dl = {}, bs = new RegExp("^(aria)-[" + Fe + "]*$"), Cd = new RegExp("^(aria)[A-Z][" + Fe + "]*$");
    function $v(e, t) {
      {
        if (or.call(Dl, t) && Dl[t])
          return !0;
        if (Cd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Eo.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Dl[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Dl[t] = !0, !0;
        }
        if (bs.test(t)) {
          var o = t.toLowerCase(), s = Eo.hasOwnProperty(o) ? o : null;
          if (s == null)
            return Dl[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Dl[t] = !0, !0;
        }
      }
      return !0;
    }
    function Mc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = $v(e, i);
          o || a.push(i);
        }
        var s = a.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function du(e, t) {
      So(e, t) || Mc(e, t);
    }
    var Ac = !1;
    function Iv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ac && (Ac = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ks = function() {
    };
    {
      var br = {}, wd = /^on./, Yv = /^on[^A-Z]/, Wv = new RegExp("^(aria)-[" + Fe + "]*$"), Qv = new RegExp("^(aria)[A-Z][" + Fe + "]*$");
      ks = function(e, t, a, i) {
        if (or.call(br, t) && br[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), br[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, p = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = p.hasOwnProperty(o) ? p[o] : null;
          if (y != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, y), br[t] = !0, !0;
          if (wd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), br[t] = !0, !0;
        } else if (wd.test(t))
          return Yv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), br[t] = !0, !0;
        if (Wv.test(t) || Qv.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), br[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), br[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), br[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), br[t] = !0, !0;
        var S = Zn(t), x = S !== null && S.type === ma;
        if (Nc.hasOwnProperty(o)) {
          var b = Nc[o];
          if (b !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, b), br[t] = !0, !0;
        } else if (!x && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), br[t] = !0, !0;
        return typeof a == "boolean" && Tr(t, a, S, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), br[t] = !0, !0) : x ? !0 : Tr(t, a, S, !1) ? (br[t] = !0, !1) : ((a === "false" || a === "true") && S !== null && S.type === hn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), br[t] = !0), !0);
      };
    }
    var qv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = ks(e, o, t[o], a);
          s || i.push(o);
        }
        var p = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function Ll(e, t, a) {
      So(e, t) || qv(e, t, a);
    }
    var zc = 1, _s = 2, Os = 4, Qy = zc | _s | Os, Zi = null;
    function qy(e) {
      Zi !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Zi = e;
    }
    function Gv() {
      Zi === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Zi = null;
    }
    function Kv(e) {
      return e === Zi;
    }
    function Kt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ki ? t.parentNode : t;
    }
    var Ds = null, Ji = null, wi = null;
    function Rd(e) {
      var t = Iu(e);
      if (t) {
        if (typeof Ds != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = em(a);
          Ds(t.stateNode, t.type, i);
        }
      }
    }
    function Td(e) {
      Ds = e;
    }
    function pu(e) {
      Ji ? wi ? wi.push(e) : wi = [e] : Ji = e;
    }
    function Uc() {
      return Ji !== null || wi !== null;
    }
    function Co() {
      if (Ji) {
        var e = Ji, t = wi;
        if (Ji = null, wi = null, Rd(e), t)
          for (var a = 0; a < t.length; a++)
            Rd(t[a]);
      }
    }
    var xd = function(e, t) {
      return e(t);
    }, Xv = function() {
    }, bd = !1;
    function Zv() {
      var e = Uc();
      e && (Xv(), Co());
    }
    function Ls(e, t, a) {
      if (bd)
        return e(t, a);
      bd = !0;
      try {
        return xd(e, t, a);
      } finally {
        bd = !1, Zv();
      }
    }
    function jc(e, t, a) {
      xd = e, Xv = a;
    }
    function kd(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function _d(e, t, a) {
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
          return !!(a.disabled && kd(t));
        default:
          return !1;
      }
    }
    function wo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = em(a);
      if (i === null)
        return null;
      var o = i[t];
      if (_d(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var Ns = !1;
    if (Tn)
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
    function Od(e, t, a, i, o, s, p, y, S) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (b) {
        this.onError(b);
      }
    }
    var Jv = Od;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Dd = document.createElement("react");
      Jv = function(t, a, i, o, s, p, y, S, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var b = document.createEvent("Event"), A = !1, N = !0, $ = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          Dd.removeEventListener(Z, We, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = $);
        }
        var we = Array.prototype.slice.call(arguments, 3);
        function We() {
          A = !0, X(), a.apply(i, we), N = !1;
        }
        var je, kt = !1, Rt = !1;
        function P(H) {
          if (je = H.error, kt = !0, je === null && H.colno === 0 && H.lineno === 0 && (Rt = !0), H.defaultPrevented && je != null && typeof je == "object")
            try {
              je._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", P), Dd.addEventListener(Z, We, !1), b.initEvent(Z, !1, !1), Dd.dispatchEvent(b), I && Object.defineProperty(window, "event", I), A && N && (kt ? Rt && (je = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : je = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(je)), window.removeEventListener("error", P), !A)
          return X(), Od.apply(this, arguments);
      };
    }
    var Ld = Jv, wa = !1, As = null, el = !1, Fa = null, zs = {
      onError: function(e) {
        wa = !0, As = e;
      }
    };
    function ci(e, t, a, i, o, s, p, y, S) {
      wa = !1, As = null, Ld.apply(zs, arguments);
    }
    function Nd(e, t, a, i, o, s, p, y, S) {
      if (ci.apply(this, arguments), wa) {
        var x = tl();
        el || (el = !0, Fa = x);
      }
    }
    function Gy() {
      if (el) {
        var e = Fa;
        throw el = !1, Fa = null, e;
      }
    }
    function Ky() {
      return wa;
    }
    function tl() {
      if (wa) {
        var e = As;
        return wa = !1, As = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ri(e) {
      return e._reactInternals;
    }
    function vu(e) {
      return e._reactInternals !== void 0;
    }
    function Fc(e, t) {
      e._reactInternals = t;
    }
    var Ie = (
      /*                      */
      0
    ), fi = (
      /*                */
      1
    ), Xt = (
      /*                    */
      2
    ), Ae = (
      /*                       */
      4
    ), Mt = (
      /*                */
      16
    ), Pa = (
      /*                 */
      32
    ), Jn = (
      /*                     */
      64
    ), rt = (
      /*                   */
      128
    ), Mr = (
      /*            */
      256
    ), Ra = (
      /*                          */
      512
    ), Vn = (
      /*                     */
      1024
    ), Jr = (
      /*                      */
      2048
    ), Ti = (
      /*                    */
      4096
    ), Nl = (
      /*                   */
      8192
    ), Ro = (
      /*             */
      16384
    ), eh = Jr | Ae | Jn | Ra | Vn | Ro, nl = (
      /*               */
      32767
    ), Ml = (
      /*                   */
      32768
    ), cr = (
      /*                */
      65536
    ), Pc = (
      /* */
      131072
    ), th = (
      /*                       */
      1048576
    ), xi = (
      /*                    */
      2097152
    ), Ha = (
      /*                 */
      4194304
    ), Al = (
      /*                */
      8388608
    ), Ba = (
      /*               */
      16777216
    ), To = (
      /*              */
      33554432
    ), ea = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ae | Vn | 0
    ), ta = Xt | Ae | Mt | Pa | Ra | Ti | Nl, di = Ae | Jn | Ra | Nl, na = Jr | Mt, fr = Ha | Al | xi, xo = v.ReactCurrentOwner;
    function zl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Xt | Ti)) !== Ie && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Y ? a : null;
    }
    function Hc(e) {
      if (e.tag === xe) {
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
    function Bc(e) {
      return e.tag === Y ? e.stateNode.containerInfo : null;
    }
    function Ta(e) {
      return zl(e) === e;
    }
    function xa(e) {
      {
        var t = xo.current;
        if (t !== null && t.tag === z) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", tt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Ri(e);
      return o ? zl(o) === o : !1;
    }
    function cn(e) {
      if (zl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Va(e) {
      var t = e.alternate;
      if (!t) {
        var a = zl(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var p = s.alternate;
        if (p === null) {
          var y = s.return;
          if (y !== null) {
            i = o = y;
            continue;
          }
          break;
        }
        if (s.child === p.child) {
          for (var S = s.child; S; ) {
            if (S === i)
              return cn(s), e;
            if (S === o)
              return cn(s), t;
            S = S.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = p;
        else {
          for (var x = !1, b = s.child; b; ) {
            if (b === i) {
              x = !0, i = s, o = p;
              break;
            }
            if (b === o) {
              x = !0, o = s, i = p;
              break;
            }
            b = b.sibling;
          }
          if (!x) {
            for (b = p.child; b; ) {
              if (b === i) {
                x = !0, i = p, o = s;
                break;
              }
              if (b === o) {
                x = !0, o = p, i = s;
                break;
              }
              b = b.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Y)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Md(e) {
      var t = Va(e);
      return t !== null ? Ad(t) : null;
    }
    function Ad(e) {
      if (e.tag === q || e.tag === K)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Ad(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function zd(e) {
      var t = Va(e);
      return t !== null ? Vc(t) : null;
    }
    function Vc(e) {
      if (e.tag === q || e.tag === K)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== oe) {
          var a = Vc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ud = c.unstable_scheduleCallback, $c = c.unstable_cancelCallback, nh = c.unstable_shouldYield, hu = c.unstable_requestPaint, $n = c.unstable_now, Xy = c.unstable_getCurrentPriorityLevel, ra = c.unstable_ImmediatePriority, mu = c.unstable_UserBlockingPriority, bi = c.unstable_NormalPriority, yu = c.unstable_LowPriority, Us = c.unstable_IdlePriority, jd = c.unstable_yieldValue, Fd = c.unstable_setDisableYieldValue, Ul = null, Nn = null, de = null, kr = !1, ba = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function rh(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        vt && (e = ft({}, e, {
          getLaneLabelMap: Ic,
          injectProfilingHooks: Fl
        })), Ul = t.inject(e), Nn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function rl(e, t) {
      if (Nn && typeof Nn.onScheduleFiberRoot == "function")
        try {
          Nn.onScheduleFiberRoot(Ul, e, t);
        } catch (a) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function jl(e, t) {
      if (Nn && typeof Nn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & rt) === rt;
          if (Ct) {
            var i;
            switch (t) {
              case Un:
                i = ra;
                break;
              case il:
                i = mu;
                break;
              case Oi:
                i = bi;
                break;
              case ku:
                i = Us;
                break;
              default:
                i = bi;
                break;
            }
            Nn.onCommitFiberRoot(Ul, e, i, a);
          }
        } catch (o) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", o));
        }
    }
    function Pd(e) {
      if (Nn && typeof Nn.onPostCommitFiberRoot == "function")
        try {
          Nn.onPostCommitFiberRoot(Ul, e);
        } catch (t) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ah(e) {
      if (Nn && typeof Nn.onCommitFiberUnmount == "function")
        try {
          Nn.onCommitFiberUnmount(Ul, e);
        } catch (t) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function rn(e) {
      if (typeof jd == "function" && (Fd(e), T(e)), Nn && typeof Nn.setStrictMode == "function")
        try {
          Nn.setStrictMode(Ul, e);
        } catch (t) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Fl(e) {
      de = e;
    }
    function Ic() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Mn; a++) {
          var i = dh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function ih(e) {
      de !== null && typeof de.markCommitStarted == "function" && de.markCommitStarted(e);
    }
    function js() {
      de !== null && typeof de.markCommitStopped == "function" && de.markCommitStopped();
    }
    function gu(e) {
      de !== null && typeof de.markComponentRenderStarted == "function" && de.markComponentRenderStarted(e);
    }
    function bo() {
      de !== null && typeof de.markComponentRenderStopped == "function" && de.markComponentRenderStopped();
    }
    function Hd(e) {
      de !== null && typeof de.markComponentPassiveEffectMountStarted == "function" && de.markComponentPassiveEffectMountStarted(e);
    }
    function Yc() {
      de !== null && typeof de.markComponentPassiveEffectMountStopped == "function" && de.markComponentPassiveEffectMountStopped();
    }
    function lh(e) {
      de !== null && typeof de.markComponentPassiveEffectUnmountStarted == "function" && de.markComponentPassiveEffectUnmountStarted(e);
    }
    function oh() {
      de !== null && typeof de.markComponentPassiveEffectUnmountStopped == "function" && de.markComponentPassiveEffectUnmountStopped();
    }
    function uh(e) {
      de !== null && typeof de.markComponentLayoutEffectMountStarted == "function" && de.markComponentLayoutEffectMountStarted(e);
    }
    function Bd() {
      de !== null && typeof de.markComponentLayoutEffectMountStopped == "function" && de.markComponentLayoutEffectMountStopped();
    }
    function Su(e) {
      de !== null && typeof de.markComponentLayoutEffectUnmountStarted == "function" && de.markComponentLayoutEffectUnmountStarted(e);
    }
    function Fs() {
      de !== null && typeof de.markComponentLayoutEffectUnmountStopped == "function" && de.markComponentLayoutEffectUnmountStopped();
    }
    function sh(e, t, a) {
      de !== null && typeof de.markComponentErrored == "function" && de.markComponentErrored(e, t, a);
    }
    function ch(e, t, a) {
      de !== null && typeof de.markComponentSuspended == "function" && de.markComponentSuspended(e, t, a);
    }
    function Eu(e) {
      de !== null && typeof de.markLayoutEffectsStarted == "function" && de.markLayoutEffectsStarted(e);
    }
    function fh() {
      de !== null && typeof de.markLayoutEffectsStopped == "function" && de.markLayoutEffectsStopped();
    }
    function Ps(e) {
      de !== null && typeof de.markPassiveEffectsStarted == "function" && de.markPassiveEffectsStarted(e);
    }
    function ki() {
      de !== null && typeof de.markPassiveEffectsStopped == "function" && de.markPassiveEffectsStopped();
    }
    function Cu(e) {
      de !== null && typeof de.markRenderStarted == "function" && de.markRenderStarted(e);
    }
    function Hs() {
      de !== null && typeof de.markRenderYielded == "function" && de.markRenderYielded();
    }
    function Pl() {
      de !== null && typeof de.markRenderStopped == "function" && de.markRenderStopped();
    }
    function Vd(e) {
      de !== null && typeof de.markRenderScheduled == "function" && de.markRenderScheduled(e);
    }
    function wu(e, t) {
      de !== null && typeof de.markForceUpdateScheduled == "function" && de.markForceUpdateScheduled(e, t);
    }
    function Wc(e, t) {
      de !== null && typeof de.markStateUpdateScheduled == "function" && de.markStateUpdateScheduled(e, t);
    }
    var Ye = (
      /*                         */
      0
    ), Ue = (
      /*                 */
      1
    ), Lt = (
      /*                    */
      2
    ), bn = (
      /*               */
      8
    ), $a = (
      /*              */
      16
    ), Bs = Math.clz32 ? Math.clz32 : En, $d = Math.log, ko = Math.LN2;
    function En(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - ($d(t) / ko | 0) | 0;
    }
    var Mn = 31, ee = (
      /*                        */
      0
    ), An = (
      /*                          */
      0
    ), Qe = (
      /*                        */
      1
    ), _i = (
      /*    */
      2
    ), al = (
      /*             */
      4
    ), kn = (
      /*            */
      8
    ), Ia = (
      /*                     */
      16
    ), _o = (
      /*                */
      32
    ), Hl = (
      /*                       */
      4194240
    ), aa = (
      /*                        */
      64
    ), ia = (
      /*                        */
      128
    ), Oo = (
      /*                        */
      256
    ), Vs = (
      /*                        */
      512
    ), $s = (
      /*                        */
      1024
    ), Qc = (
      /*                        */
      2048
    ), qc = (
      /*                        */
      4096
    ), Gc = (
      /*                        */
      8192
    ), Kc = (
      /*                        */
      16384
    ), Xc = (
      /*                       */
      32768
    ), Zc = (
      /*                       */
      65536
    ), Jc = (
      /*                       */
      131072
    ), ef = (
      /*                       */
      262144
    ), Do = (
      /*                       */
      524288
    ), tf = (
      /*                       */
      1048576
    ), Ru = (
      /*                       */
      2097152
    ), Lo = (
      /*                            */
      130023424
    ), No = (
      /*                             */
      4194304
    ), Is = (
      /*                             */
      8388608
    ), nf = (
      /*                             */
      16777216
    ), rf = (
      /*                             */
      33554432
    ), af = (
      /*                             */
      67108864
    ), Id = No, Mo = (
      /*          */
      134217728
    ), Yd = (
      /*                          */
      268435455
    ), Tu = (
      /*               */
      268435456
    ), Bl = (
      /*                        */
      536870912
    ), ka = (
      /*                   */
      1073741824
    );
    function dh(e) {
      {
        if (e & Qe)
          return "Sync";
        if (e & _i)
          return "InputContinuousHydration";
        if (e & al)
          return "InputContinuous";
        if (e & kn)
          return "DefaultHydration";
        if (e & Ia)
          return "Default";
        if (e & _o)
          return "TransitionHydration";
        if (e & Hl)
          return "Transition";
        if (e & Lo)
          return "Retry";
        if (e & Mo)
          return "SelectiveHydration";
        if (e & Tu)
          return "IdleHydration";
        if (e & Bl)
          return "Idle";
        if (e & ka)
          return "Offscreen";
      }
    }
    var an = -1, lf = aa, Ys = No;
    function xu(e) {
      switch (zn(e)) {
        case Qe:
          return Qe;
        case _i:
          return _i;
        case al:
          return al;
        case kn:
          return kn;
        case Ia:
          return Ia;
        case _o:
          return _o;
        case aa:
        case ia:
        case Oo:
        case Vs:
        case $s:
        case Qc:
        case qc:
        case Gc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case Do:
        case tf:
        case Ru:
          return e & Hl;
        case No:
        case Is:
        case nf:
        case rf:
        case af:
          return e & Lo;
        case Mo:
          return Mo;
        case Tu:
          return Tu;
        case Bl:
          return Bl;
        case ka:
          return ka;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ws(e, t) {
      var a = e.pendingLanes;
      if (a === ee)
        return ee;
      var i = ee, o = e.suspendedLanes, s = e.pingedLanes, p = a & Yd;
      if (p !== ee) {
        var y = p & ~o;
        if (y !== ee)
          i = xu(y);
        else {
          var S = p & s;
          S !== ee && (i = xu(S));
        }
      } else {
        var x = a & ~o;
        x !== ee ? i = xu(x) : s !== ee && (i = xu(s));
      }
      if (i === ee)
        return ee;
      if (t !== ee && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === ee) {
        var b = zn(i), A = zn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          b >= A || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          b === Ia && (A & Hl) !== ee
        )
          return t;
      }
      (i & al) !== ee && (i |= a & Ia);
      var N = e.entangledLanes;
      if (N !== ee)
        for (var $ = e.entanglements, I = i & N; I > 0; ) {
          var X = $l(I), we = 1 << X;
          i |= $[X], I &= ~we;
        }
      return i;
    }
    function of(e, t) {
      for (var a = e.eventTimes, i = an; t > 0; ) {
        var o = $l(t), s = 1 << o, p = a[o];
        p > i && (i = p), t &= ~s;
      }
      return i;
    }
    function Zy(e, t) {
      switch (e) {
        case Qe:
        case _i:
        case al:
          return t + 250;
        case kn:
        case Ia:
        case _o:
        case aa:
        case ia:
        case Oo:
        case Vs:
        case $s:
        case Qc:
        case qc:
        case Gc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case Do:
        case tf:
        case Ru:
          return t + 5e3;
        case No:
        case Is:
        case nf:
        case rf:
        case af:
          return an;
        case Mo:
        case Tu:
        case Bl:
        case ka:
          return an;
        default:
          return g("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function Jy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, p = a; p > 0; ) {
        var y = $l(p), S = 1 << y, x = s[y];
        x === an ? ((S & i) === ee || (S & o) !== ee) && (s[y] = Zy(S, t)) : x <= t && (e.expiredLanes |= S), p &= ~S;
      }
    }
    function eg(e) {
      return xu(e.pendingLanes);
    }
    function Vl(e) {
      var t = e.pendingLanes & ~ka;
      return t !== ee ? t : t & ka ? ka : ee;
    }
    function Wd(e) {
      return (e & Qe) !== ee;
    }
    function Qs(e) {
      return (e & Yd) !== ee;
    }
    function ph(e) {
      return (e & Lo) === e;
    }
    function vh(e) {
      var t = Qe | al | Ia;
      return (e & t) === ee;
    }
    function hh(e) {
      return (e & Hl) === e;
    }
    function qs(e, t) {
      var a = _i | al | kn | Ia;
      return (t & a) !== ee;
    }
    function mh(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function Qd(e) {
      return (e & Hl) !== ee;
    }
    function yh() {
      var e = lf;
      return lf <<= 1, (lf & Hl) === ee && (lf = aa), e;
    }
    function la() {
      var e = Ys;
      return Ys <<= 1, (Ys & Lo) === ee && (Ys = No), e;
    }
    function zn(e) {
      return e & -e;
    }
    function bu(e) {
      return zn(e);
    }
    function $l(e) {
      return 31 - Bs(e);
    }
    function uf(e) {
      return $l(e);
    }
    function oa(e, t) {
      return (e & t) !== ee;
    }
    function Ao(e, t) {
      return (e & t) === t;
    }
    function ut(e, t) {
      return e | t;
    }
    function Gs(e, t) {
      return e & ~t;
    }
    function sf(e, t) {
      return e & t;
    }
    function tg(e) {
      return e;
    }
    function gh(e, t) {
      return e !== An && e < t ? e : t;
    }
    function Ks(e) {
      for (var t = [], a = 0; a < Mn; a++)
        t.push(e);
      return t;
    }
    function zo(e, t, a) {
      e.pendingLanes |= t, t !== Bl && (e.suspendedLanes = ee, e.pingedLanes = ee);
      var i = e.eventTimes, o = uf(t);
      i[o] = a;
    }
    function Sh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = $l(i), s = 1 << o;
        a[o] = an, i &= ~s;
      }
    }
    function cf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ff(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ee, e.pingedLanes = ee, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, p = a; p > 0; ) {
        var y = $l(p), S = 1 << y;
        i[y] = ee, o[y] = an, s[y] = an, p &= ~S;
      }
    }
    function qd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = $l(o), p = 1 << s;
        // Is this one of the newly entangled lanes?
        p & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~p;
      }
    }
    function Eh(e, t) {
      var a = zn(t), i;
      switch (a) {
        case al:
          i = _i;
          break;
        case Ia:
          i = kn;
          break;
        case aa:
        case ia:
        case Oo:
        case Vs:
        case $s:
        case Qc:
        case qc:
        case Gc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case Do:
        case tf:
        case Ru:
        case No:
        case Is:
        case nf:
        case rf:
        case af:
          i = _o;
          break;
        case Bl:
          i = Tu;
          break;
        default:
          i = An;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== An ? An : i;
    }
    function df(e, t, a) {
      if (ba)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = uf(a), s = 1 << o, p = i[o];
          p.add(t), a &= ~s;
        }
    }
    function Gd(e, t) {
      if (ba)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = uf(t), s = 1 << o, p = a[o];
          p.size > 0 && (p.forEach(function(y) {
            var S = y.alternate;
            (S === null || !i.has(S)) && i.add(y);
          }), p.clear()), t &= ~s;
        }
    }
    function Xs(e, t) {
      return null;
    }
    var Un = Qe, il = al, Oi = Ia, ku = Bl, _u = An;
    function Ya() {
      return _u;
    }
    function _n(e) {
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
    function ng(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function rg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Ou(e, t) {
      return e !== 0 && e < t;
    }
    function dr(e) {
      var t = zn(e);
      return Ou(Un, t) ? Ou(il, t) ? Qs(t) ? Oi : ku : il : Un;
    }
    function pf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ke;
    function Du(e) {
      ke = e;
    }
    function Kd(e) {
      ke(e);
    }
    var vf;
    function ag(e) {
      vf = e;
    }
    var Lu;
    function hf(e) {
      Lu = e;
    }
    var mf;
    function Ch(e) {
      mf = e;
    }
    var Xd;
    function wh(e) {
      Xd = e;
    }
    var Zs = !1, Nu = [], mn = null, er = null, Ar = null, Mu = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), tr = [], Rh = [
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
      return Rh.indexOf(e) > -1;
    }
    function ig(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function Zd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          mn = null;
          break;
        case "dragenter":
        case "dragleave":
          er = null;
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
        var p = ig(t, a, i, o, s);
        if (t !== null) {
          var y = Iu(t);
          y !== null && vf(y);
        }
        return p;
      }
      e.eventSystemFlags |= i;
      var S = e.targetContainers;
      return o !== null && S.indexOf(o) === -1 && S.push(o), e;
    }
    function Th(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return mn = zu(mn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var p = o;
          return er = zu(er, e, t, a, i, p), !0;
        }
        case "mouseover": {
          var y = o;
          return Ar = zu(Ar, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var S = o, x = S.pointerId;
          return Mu.set(x, zu(Mu.get(x) || null, e, t, a, i, S)), !0;
        }
        case "gotpointercapture": {
          var b = o, A = b.pointerId;
          return Au.set(A, zu(Au.get(A) || null, e, t, a, i, b)), !0;
        }
      }
      return !1;
    }
    function Jd(e) {
      var t = cc(e.target);
      if (t !== null) {
        var a = zl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === xe) {
            var o = Hc(a);
            if (o !== null) {
              e.blockedOn = o, Xd(e.priority, function() {
                Lu(a);
              });
              return;
            }
          } else if (i === Y) {
            var s = a.stateNode;
            if (pf(s)) {
              e.blockedOn = Bc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function lg(e) {
      for (var t = mf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < tr.length && Ou(t, tr[i].priority); i++)
        ;
      tr.splice(i, 0, a), i === 0 && Jd(a);
    }
    function Uo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Or(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          qy(s), o.target.dispatchEvent(s), Gv();
        } else {
          var p = Iu(i);
          return p !== null && vf(p), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function yf(e, t, a) {
      Uo(e) && a.delete(t);
    }
    function Wa() {
      Zs = !1, mn !== null && Uo(mn) && (mn = null), er !== null && Uo(er) && (er = null), Ar !== null && Uo(Ar) && (Ar = null), Mu.forEach(yf), Au.forEach(yf);
    }
    function wt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Zs || (Zs = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Wa)));
    }
    function On(e) {
      if (Nu.length > 0) {
        wt(Nu[0], e);
        for (var t = 1; t < Nu.length; t++) {
          var a = Nu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      mn !== null && wt(mn, e), er !== null && wt(er, e), Ar !== null && wt(Ar, e);
      var i = function(y) {
        return wt(y, e);
      };
      Mu.forEach(i), Au.forEach(i);
      for (var o = 0; o < tr.length; o++) {
        var s = tr[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; tr.length > 0; ) {
        var p = tr[0];
        if (p.blockedOn !== null)
          break;
        Jd(p), p.blockedOn === null && tr.shift();
      }
    }
    var fn = v.ReactCurrentBatchConfig, Qn = !0;
    function ua(e) {
      Qn = !!e;
    }
    function Uu() {
      return Qn;
    }
    function qn(e, t, a) {
      var i = gf(t), o;
      switch (i) {
        case Un:
          o = Js;
          break;
        case il:
          o = jo;
          break;
        case Oi:
        default:
          o = ju;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Js(e, t, a, i) {
      var o = Ya(), s = fn.transition;
      fn.transition = null;
      try {
        _n(Un), ju(e, t, a, i);
      } finally {
        _n(o), fn.transition = s;
      }
    }
    function jo(e, t, a, i) {
      var o = Ya(), s = fn.transition;
      fn.transition = null;
      try {
        _n(il), ju(e, t, a, i);
      } finally {
        _n(o), fn.transition = s;
      }
    }
    function ju(e, t, a, i) {
      Qn && ep(e, t, a, i);
    }
    function ep(e, t, a, i) {
      var o = Or(e, t, a, i);
      if (o === null) {
        Rg(e, t, i, Il, a), Zd(e, i);
        return;
      }
      if (Th(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Zd(e, i), t & Os && Di(e)) {
        for (; o !== null; ) {
          var s = Iu(o);
          s !== null && Kd(s);
          var p = Or(e, t, a, i);
          if (p === null && Rg(e, t, i, Il, a), p === o)
            break;
          o = p;
        }
        o !== null && i.stopPropagation();
        return;
      }
      Rg(e, t, i, null, a);
    }
    var Il = null;
    function Or(e, t, a, i) {
      Il = null;
      var o = Kt(i), s = cc(o);
      if (s !== null) {
        var p = zl(s);
        if (p === null)
          s = null;
        else {
          var y = p.tag;
          if (y === xe) {
            var S = Hc(p);
            if (S !== null)
              return S;
            s = null;
          } else if (y === Y) {
            var x = p.stateNode;
            if (pf(x))
              return Bc(p);
            s = null;
          } else
            p !== s && (s = null);
        }
      }
      return Il = s, null;
    }
    function gf(e) {
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
          return Un;
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
          return il;
        case "message": {
          var t = Xy();
          switch (t) {
            case ra:
              return Un;
            case mu:
              return il;
            case bi:
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
    function Fu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ll(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Sf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function tp(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Qa = null, Pu = null, qa = null;
    function Ef(e) {
      return Qa = e, Pu = tc(), !0;
    }
    function ec() {
      Qa = null, Pu = null, qa = null;
    }
    function Cf() {
      if (qa)
        return qa;
      var e, t = Pu, a = t.length, i, o = tc(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var p = a - e;
      for (i = 1; i <= p && t[a - i] === o[s - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return qa = o.slice(e, y), qa;
    }
    function tc() {
      return "value" in Qa ? Qa.value : Qa.textContent;
    }
    function Fo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function nr() {
      return !0;
    }
    function ol() {
      return !1;
    }
    function Cn(e) {
      function t(a, i, o, s, p) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = p, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var S = e[y];
            S ? this[y] = S(s) : this[y] = s[y];
          }
        var x = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return x ? this.isDefaultPrevented = nr : this.isDefaultPrevented = ol, this.isPropagationStopped = ol, this;
      }
      return ft(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = nr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = nr);
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
        isPersistent: nr
      }), t;
    }
    var Gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, wf = Cn(Gn), Po = ft({}, Gn, {
      view: 0,
      detail: 0
    }), np = Cn(Po), rp, Li, Hu;
    function ap(e) {
      e !== Hu && (Hu && e.type === "mousemove" ? (rp = e.screenX - Hu.screenX, Li = e.screenY - Hu.screenY) : (rp = 0, Li = 0), Hu = e);
    }
    var Ni = ft({}, Po, {
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
      getModifierState: ip,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (ap(e), rp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Li;
      }
    }), Rf = Cn(Ni), Ho = ft({}, Ni, {
      dataTransfer: 0
    }), xh = Cn(Ho), bh = ft({}, Po, {
      relatedTarget: 0
    }), nc = Cn(bh), Tf = ft({}, Gn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), og = Cn(Tf), ug = ft({}, Gn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), kh = Cn(ug), _h = ft({}, Gn, {
      data: 0
    }), Yl = Cn(_h), sg = Yl, Bu = {
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
    }, Oh = {
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
    function Dn(e) {
      if (e.key) {
        var t = Bu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Oh[e.keyCode] || "Unidentified" : "";
    }
    var cg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Dh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = cg[e];
      return i ? !!a[i] : !1;
    }
    function ip(e) {
      return Dh;
    }
    var fg = ft({}, Po, {
      key: Dn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ip,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Lh = Cn(fg), Nh = ft({}, Ni, {
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
    }), Mh = Cn(Nh), Ga = ft({}, Po, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ip
    }), lp = Cn(Ga), dg = ft({}, Gn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wl = Cn(dg), xf = ft({}, Ni, {
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
    }), Bo = Cn(xf), bf = [9, 13, 27, 32], kf = 229, rc = Tn && "CompositionEvent" in window, ac = null;
    Tn && "documentMode" in document && (ac = document.documentMode);
    var op = Tn && "TextEvent" in window && !ac, Ah = Tn && (!rc || ac && ac > 8 && ac <= 11), up = 32, sp = String.fromCharCode(up);
    function _f() {
      Yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Yr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Yr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Yr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ic = !1;
    function zh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function cp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function pg(e, t) {
      return e === "keydown" && t.keyCode === kf;
    }
    function fp(e, t) {
      switch (e) {
        case "keyup":
          return bf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== kf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Of(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function lc(e) {
      return e.locale === "ko";
    }
    var Ql = !1;
    function Df(e, t, a, i, o) {
      var s, p;
      if (rc ? s = cp(t) : Ql ? fp(t, i) && (s = "onCompositionEnd") : pg(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Ah && !lc(i) && (!Ql && s === "onCompositionStart" ? Ql = Ef(o) : s === "onCompositionEnd" && Ql && (p = Cf()));
      var y = Bh(a, s);
      if (y.length > 0) {
        var S = new Yl(s, t, null, i, o);
        if (e.push({
          event: S,
          listeners: y
        }), p)
          S.data = p;
        else {
          var x = Of(i);
          x !== null && (S.data = x);
        }
      }
    }
    function Uh(e, t) {
      switch (e) {
        case "compositionend":
          return Of(t);
        case "keypress":
          var a = t.which;
          return a !== up ? null : (ic = !0, sp);
        case "textInput":
          var i = t.data;
          return i === sp && ic ? null : i;
        default:
          return null;
      }
    }
    function vg(e, t) {
      if (Ql) {
        if (e === "compositionend" || !rc && fp(e, t)) {
          var a = Cf();
          return ec(), Ql = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!zh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ah && !lc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Lf(e, t, a, i, o) {
      var s;
      if (op ? s = Uh(t, i) : s = vg(t, i), !s)
        return null;
      var p = Bh(a, "onBeforeInput");
      if (p.length > 0) {
        var y = new sg("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: y,
          listeners: p
        }), y.data = s;
      }
    }
    function hg(e, t, a, i, o, s, p) {
      Df(e, t, a, i, o), Lf(e, t, a, i, o);
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
    function jh(e) {
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
    function Nf(e) {
      if (!Tn)
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
      var o = Bh(t, "onChange");
      if (o.length > 0) {
        var s = new wf("onChange", "change", null, a, i);
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
      r(t, u, e, Kt(e)), Ls(R, t);
    }
    function R(e) {
      XE(e, 0);
    }
    function k(e) {
      var t = Ff(e);
      if (lu(t))
        return e;
    }
    function L(e, t) {
      if (e === "change")
        return t;
    }
    var W = !1;
    Tn && (W = Nf("input") && (!document.documentMode || document.documentMode > 9));
    function le(e, t) {
      l = e, u = t, l.attachEvent("onpropertychange", ae);
    }
    function ue() {
      l && (l.detachEvent("onpropertychange", ae), l = null, u = null);
    }
    function ae(e) {
      e.propertyName === "value" && k(u) && m(e);
    }
    function ge(e, t, a) {
      e === "focusin" ? (ue(), le(t, a)) : e === "focusout" && ue();
    }
    function Oe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return k(u);
    }
    function Me(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function jn(e, t) {
      if (e === "click")
        return k(t);
    }
    function F(e, t) {
      if (e === "input" || e === "change")
        return k(t);
    }
    function M(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Xe(e, "number", e.value);
    }
    function B(e, t, a, i, o, s, p) {
      var y = a ? Ff(a) : window, S, x;
      if (d(y) ? S = L : jh(y) ? W ? S = F : (S = Oe, x = ge) : Me(y) && (S = jn), S) {
        var b = S(t, a);
        if (b) {
          r(e, b, i, o);
          return;
        }
      }
      x && x(t, y, a), t === "focusout" && M(y);
    }
    function fe() {
      Cr("onMouseEnter", ["mouseout", "mouseover"]), Cr("onMouseLeave", ["mouseout", "mouseover"]), Cr("onPointerEnter", ["pointerout", "pointerover"]), Cr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ze(e, t, a, i, o, s, p) {
      var y = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
      if (y && !Kv(i)) {
        var x = i.relatedTarget || i.fromElement;
        if (x && (cc(x) || xp(x)))
          return;
      }
      if (!(!S && !y)) {
        var b;
        if (o.window === o)
          b = o;
        else {
          var A = o.ownerDocument;
          A ? b = A.defaultView || A.parentWindow : b = window;
        }
        var N, $;
        if (S) {
          var I = i.relatedTarget || i.toElement;
          if (N = a, $ = I ? cc(I) : null, $ !== null) {
            var X = zl($);
            ($ !== X || $.tag !== q && $.tag !== K) && ($ = null);
          }
        } else
          N = null, $ = a;
        if (N !== $) {
          var we = Rf, We = "onMouseLeave", je = "onMouseEnter", kt = "mouse";
          (t === "pointerout" || t === "pointerover") && (we = Mh, We = "onPointerLeave", je = "onPointerEnter", kt = "pointer");
          var Rt = N == null ? b : Ff(N), P = $ == null ? b : Ff($), Z = new we(We, kt + "leave", N, i, o);
          Z.target = Rt, Z.relatedTarget = P;
          var H = null, se = cc(o);
          if (se === a) {
            var Re = new we(je, kt + "enter", $, i, o);
            Re.target = P, Re.relatedTarget = Rt, H = Re;
          }
          XT(e, Z, H, N, $);
        }
      }
    }
    function qe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var De = typeof Object.is == "function" ? Object.is : qe;
    function Ke(e, t) {
      if (De(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!or.call(t, s) || !De(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Kn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function At(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ul(e, t) {
      for (var a = Kn(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Ki) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Kn(At(a));
      }
    }
    function mg(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, p = i.focusNode, y = i.focusOffset;
      try {
        o.nodeType, p.nodeType;
      } catch {
        return null;
      }
      return LT(e, o, s, p, y);
    }
    function LT(e, t, a, i, o) {
      var s = 0, p = -1, y = -1, S = 0, x = 0, b = e, A = null;
      e:
        for (; ; ) {
          for (var N = null; b === t && (a === 0 || b.nodeType === Ki) && (p = s + a), b === i && (o === 0 || b.nodeType === Ki) && (y = s + o), b.nodeType === Ki && (s += b.nodeValue.length), (N = b.firstChild) !== null; )
            A = b, b = N;
          for (; ; ) {
            if (b === e)
              break e;
            if (A === t && ++S === a && (p = s), A === i && ++x === o && (y = s), (N = b.nextSibling) !== null)
              break;
            b = A, A = b.parentNode;
          }
          b = N;
        }
      return p === -1 || y === -1 ? null : {
        start: p,
        end: y
      };
    }
    function NT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, p = Math.min(t.start, s), y = t.end === void 0 ? p : Math.min(t.end, s);
        if (!o.extend && p > y) {
          var S = y;
          y = p, p = S;
        }
        var x = ul(e, p), b = ul(e, y);
        if (x && b) {
          if (o.rangeCount === 1 && o.anchorNode === x.node && o.anchorOffset === x.offset && o.focusNode === b.node && o.focusOffset === b.offset)
            return;
          var A = a.createRange();
          A.setStart(x.node, x.offset), o.removeAllRanges(), p > y ? (o.addRange(A), o.extend(b.node, b.offset)) : (A.setEnd(b.node, b.offset), o.addRange(A));
        }
      }
    }
    function PE(e) {
      return e && e.nodeType === Ki;
    }
    function HE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : PE(e) ? !1 : PE(t) ? HE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function MT(e) {
      return e && e.ownerDocument && HE(e.ownerDocument.documentElement, e);
    }
    function AT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function BE() {
      for (var e = window, t = Ci(); t instanceof e.HTMLIFrameElement; ) {
        if (AT(t))
          e = t.contentWindow;
        else
          return t;
        t = Ci(e.document);
      }
      return t;
    }
    function yg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function zT() {
      var e = BE();
      return {
        focusedElem: e,
        selectionRange: yg(e) ? jT(e) : null
      };
    }
    function UT(e) {
      var t = BE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && MT(a)) {
        i !== null && yg(a) && FT(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Zr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var p = 0; p < o.length; p++) {
          var y = o[p];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function jT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = mg(e), t || {
        start: 0,
        end: 0
      };
    }
    function FT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : NT(e, t);
    }
    var PT = Tn && "documentMode" in document && document.documentMode <= 11;
    function HT() {
      Yr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Mf = null, gg = null, dp = null, Sg = !1;
    function BT(e) {
      if ("selectionStart" in e && yg(e))
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
    function VT(e) {
      return e.window === e ? e.document : e.nodeType === Ca ? e : e.ownerDocument;
    }
    function VE(e, t, a) {
      var i = VT(a);
      if (!(Sg || Mf == null || Mf !== Ci(i))) {
        var o = BT(Mf);
        if (!dp || !Ke(dp, o)) {
          dp = o;
          var s = Bh(gg, "onSelect");
          if (s.length > 0) {
            var p = new wf("onSelect", "select", null, t, a);
            e.push({
              event: p,
              listeners: s
            }), p.target = Mf;
          }
        }
      }
    }
    function $T(e, t, a, i, o, s, p) {
      var y = a ? Ff(a) : window;
      switch (t) {
        case "focusin":
          (jh(y) || y.contentEditable === "true") && (Mf = y, gg = a, dp = null);
          break;
        case "focusout":
          Mf = null, gg = null, dp = null;
          break;
        case "mousedown":
          Sg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sg = !1, VE(e, i, o);
          break;
        case "selectionchange":
          if (PT)
            break;
        case "keydown":
        case "keyup":
          VE(e, i, o);
      }
    }
    function Fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Af = {
      animationend: Fh("Animation", "AnimationEnd"),
      animationiteration: Fh("Animation", "AnimationIteration"),
      animationstart: Fh("Animation", "AnimationStart"),
      transitionend: Fh("Transition", "TransitionEnd")
    }, Eg = {}, $E = {};
    Tn && ($E = document.createElement("div").style, "AnimationEvent" in window || (delete Af.animationend.animation, delete Af.animationiteration.animation, delete Af.animationstart.animation), "TransitionEvent" in window || delete Af.transitionend.transition);
    function Ph(e) {
      if (Eg[e])
        return Eg[e];
      if (!Af[e])
        return e;
      var t = Af[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in $E)
          return Eg[e] = t[a];
      return e;
    }
    var IE = Ph("animationend"), YE = Ph("animationiteration"), WE = Ph("animationstart"), QE = Ph("transitionend"), qE = /* @__PURE__ */ new Map(), GE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Vu(e, t) {
      qE.set(e, t), Yr(t, [e]);
    }
    function IT() {
      for (var e = 0; e < GE.length; e++) {
        var t = GE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Vu(a, "on" + i);
      }
      Vu(IE, "onAnimationEnd"), Vu(YE, "onAnimationIteration"), Vu(WE, "onAnimationStart"), Vu("dblclick", "onDoubleClick"), Vu("focusin", "onFocus"), Vu("focusout", "onBlur"), Vu(QE, "onTransitionEnd");
    }
    function YT(e, t, a, i, o, s, p) {
      var y = qE.get(t);
      if (y !== void 0) {
        var S = wf, x = t;
        switch (t) {
          case "keypress":
            if (Fo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            S = Lh;
            break;
          case "focusin":
            x = "focus", S = nc;
            break;
          case "focusout":
            x = "blur", S = nc;
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
            S = Rf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = xh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = lp;
            break;
          case IE:
          case YE:
          case WE:
            S = og;
            break;
          case QE:
            S = Wl;
            break;
          case "scroll":
            S = np;
            break;
          case "wheel":
            S = Bo;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = kh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Mh;
            break;
        }
        var b = (s & Os) !== 0;
        {
          var A = !b && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = GT(a, y, i.type, b, A);
          if (N.length > 0) {
            var $ = new S(y, x, null, i, o);
            e.push({
              event: $,
              listeners: N
            });
          }
        }
      }
    }
    IT(), fe(), n(), HT(), _f();
    function WT(e, t, a, i, o, s, p) {
      YT(e, t, a, i, o, s);
      var y = (s & Qy) === 0;
      y && (ze(e, t, a, i, o), B(e, t, a, i, o), $T(e, t, a, i, o), hg(e, t, a, i, o));
    }
    var pp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(pp));
    function KE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Nd(i, t, void 0, e), e.currentTarget = null;
    }
    function QT(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], p = s.instance, y = s.currentTarget, S = s.listener;
          if (p !== i && e.isPropagationStopped())
            return;
          KE(e, S, y), i = p;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var b = t[x], A = b.instance, N = b.currentTarget, $ = b.listener;
          if (A !== i && e.isPropagationStopped())
            return;
          KE(e, $, N), i = A;
        }
    }
    function XE(e, t) {
      for (var a = (t & Os) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, p = o.listeners;
        QT(s, p, a);
      }
      Gy();
    }
    function qT(e, t, a, i, o) {
      var s = Kt(a), p = [];
      WT(p, e, i, a, s, t), XE(p, t);
    }
    function wn(e, t) {
      Cg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Tb(t), o = ZT(e, a);
      i.has(o) || (ZE(t, e, _s, a), i.add(o));
    }
    function wg(e, t, a) {
      Cg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Os), ZE(a, e, i, t);
    }
    var Hh = "_reactListening" + Math.random().toString(36).slice(2);
    function vp(e) {
      if (!e[Hh]) {
        e[Hh] = !0, on.forEach(function(a) {
          a !== "selectionchange" && (Cg.has(a) || wg(a, !1, e), wg(a, !0, e));
        });
        var t = e.nodeType === Ca ? e : e.ownerDocument;
        t !== null && (t[Hh] || (t[Hh] = !0, wg("selectionchange", !1, t)));
      }
    }
    function ZE(e, t, a, i, o) {
      var s = qn(e, t, a), p = void 0;
      Ns && (t === "touchstart" || t === "touchmove" || t === "wheel") && (p = !0), e = e, i ? p !== void 0 ? Sf(e, t, s, p) : ll(e, t, s) : p !== void 0 ? tp(e, t, s, p) : Fu(e, t, s);
    }
    function JE(e, t) {
      return e === t || e.nodeType === xn && e.parentNode === t;
    }
    function Rg(e, t, a, i, o) {
      var s = i;
      if (!(t & zc) && !(t & _s)) {
        var p = o;
        if (i !== null) {
          var y = i;
          e:
            for (; ; ) {
              if (y === null)
                return;
              var S = y.tag;
              if (S === Y || S === oe) {
                var x = y.stateNode.containerInfo;
                if (JE(x, p))
                  break;
                if (S === oe)
                  for (var b = y.return; b !== null; ) {
                    var A = b.tag;
                    if (A === Y || A === oe) {
                      var N = b.stateNode.containerInfo;
                      if (JE(N, p))
                        return;
                    }
                    b = b.return;
                  }
                for (; x !== null; ) {
                  var $ = cc(x);
                  if ($ === null)
                    return;
                  var I = $.tag;
                  if (I === q || I === K) {
                    y = s = $;
                    continue e;
                  }
                  x = x.parentNode;
                }
              }
              y = y.return;
            }
        }
      }
      Ls(function() {
        return qT(e, t, a, s);
      });
    }
    function hp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function GT(e, t, a, i, o, s) {
      for (var p = t !== null ? t + "Capture" : null, y = i ? p : t, S = [], x = e, b = null; x !== null; ) {
        var A = x, N = A.stateNode, $ = A.tag;
        if ($ === q && N !== null && (b = N, y !== null)) {
          var I = wo(x, y);
          I != null && S.push(hp(x, I, b));
        }
        if (o)
          break;
        x = x.return;
      }
      return S;
    }
    function Bh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, p = s.stateNode, y = s.tag;
        if (y === q && p !== null) {
          var S = p, x = wo(o, a);
          x != null && i.unshift(hp(o, x, S));
          var b = wo(o, t);
          b != null && i.push(hp(o, b, S));
        }
        o = o.return;
      }
      return i;
    }
    function zf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== q);
      return e || null;
    }
    function KT(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = zf(s))
        o++;
      for (var p = 0, y = i; y; y = zf(y))
        p++;
      for (; o - p > 0; )
        a = zf(a), o--;
      for (; p - o > 0; )
        i = zf(i), p--;
      for (var S = o; S--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = zf(a), i = zf(i);
      }
      return null;
    }
    function e1(e, t, a, i, o) {
      for (var s = t._reactName, p = [], y = a; y !== null && y !== i; ) {
        var S = y, x = S.alternate, b = S.stateNode, A = S.tag;
        if (x !== null && x === i)
          break;
        if (A === q && b !== null) {
          var N = b;
          if (o) {
            var $ = wo(y, s);
            $ != null && p.unshift(hp(y, $, N));
          } else if (!o) {
            var I = wo(y, s);
            I != null && p.push(hp(y, I, N));
          }
        }
        y = y.return;
      }
      p.length !== 0 && e.push({
        event: t,
        listeners: p
      });
    }
    function XT(e, t, a, i, o) {
      var s = i && o ? KT(i, o) : null;
      i !== null && e1(e, t, i, s, !1), o !== null && a !== null && e1(e, a, o, s, !0);
    }
    function ZT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ka = !1, mp = "dangerouslySetInnerHTML", Vh = "suppressContentEditableWarning", $u = "suppressHydrationWarning", t1 = "autoFocus", uc = "children", sc = "style", $h = "__html", Tg, Ih, yp, n1, Yh, r1, a1;
    Tg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ih = function(e, t) {
      du(e, t), Iv(e, t), Ll(e, t, {
        registrationNameDependencies: ir,
        possibleRegistrationNames: lr
      });
    }, r1 = Tn && !document.documentMode, yp = function(e, t, a) {
      if (!Ka) {
        var i = Wh(a), o = Wh(t);
        o !== i && (Ka = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, n1 = function(e) {
      if (!Ka) {
        Ka = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Yh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, a1 = function(e, t) {
      var a = e.namespaceURI === Gi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var JT = /\r\n?/g, ex = /\u0000|\uFFFD/g;
    function Wh(e) {
      ha(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(JT, `
`).replace(ex, "");
    }
    function Qh(e, t, a, i) {
      var o = Wh(t), s = Wh(e);
      if (s !== o && (i && (Ka || (Ka = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && J))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function i1(e) {
      return e.nodeType === Ca ? e : e.ownerDocument;
    }
    function tx() {
    }
    function qh(e) {
      e.onclick = tx;
    }
    function nx(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var p = i[s];
          if (s === sc)
            p && Object.freeze(p), Fv(t, p);
          else if (s === mp) {
            var y = p ? p[$h] : void 0;
            y != null && Ov(t, y);
          } else if (s === uc)
            if (typeof p == "string") {
              var S = e !== "textarea" || p !== "";
              S && ws(t, p);
            } else
              typeof p == "number" && ws(t, "" + p);
          else
            s === Vh || s === $u || s === t1 || (ir.hasOwnProperty(s) ? p != null && (typeof p != "function" && Yh(s, p), s === "onScroll" && wn("scroll", t)) : p != null && Bi(t, s, p, o));
        }
    }
    function rx(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], p = t[o + 1];
        s === sc ? Fv(e, p) : s === mp ? Ov(e, p) : s === uc ? ws(e, p) : Bi(e, s, p, i);
      }
    }
    function ax(e, t, a, i) {
      var o, s = i1(a), p, y = i;
      if (y === Gi && (y = vd(e)), y === Gi) {
        if (o = So(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var S = s.createElement("div");
          S.innerHTML = "<script><\/script>";
          var x = S.firstChild;
          p = S.removeChild(x);
        } else if (typeof t.is == "string")
          p = s.createElement(e, {
            is: t.is
          });
        else if (p = s.createElement(e), e === "select") {
          var b = p;
          t.multiple ? b.multiple = !0 : t.size && (b.size = t.size);
        }
      } else
        p = s.createElementNS(y, e);
      return y === Gi && !o && Object.prototype.toString.call(p) === "[object HTMLUnknownElement]" && !or.call(Tg, e) && (Tg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), p;
    }
    function ix(e, t) {
      return i1(t).createTextNode(e);
    }
    function lx(e, t, a, i) {
      var o = So(t, a);
      Ih(t, a);
      var s;
      switch (t) {
        case "dialog":
          wn("cancel", e), wn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          wn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var p = 0; p < pp.length; p++)
            wn(pp[p], e);
          s = a;
          break;
        case "source":
          wn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          wn("error", e), wn("load", e), s = a;
          break;
        case "details":
          wn("toggle", e), s = a;
          break;
        case "input":
          _(e, a), s = E(e, a), wn("invalid", e);
          break;
        case "option":
          It(e, a), s = a;
          break;
        case "select":
          Cs(e, a), s = Es(e, a), wn("invalid", e);
          break;
        case "textarea":
          kv(e, a), s = pd(e, a), wn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (xs(t, s), nx(t, e, i, s, o), t) {
        case "input":
          Wi(e), ce(e, a, !1);
          break;
        case "textarea":
          Wi(e), _c(e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          dd(e, a);
          break;
        default:
          typeof s.onClick == "function" && qh(e);
          break;
      }
    }
    function ox(e, t, a, i, o) {
      Ih(t, i);
      var s = null, p, y;
      switch (t) {
        case "input":
          p = E(e, a), y = E(e, i), s = [];
          break;
        case "select":
          p = Es(e, a), y = Es(e, i), s = [];
          break;
        case "textarea":
          p = pd(e, a), y = pd(e, i), s = [];
          break;
        default:
          p = a, y = i, typeof p.onClick != "function" && typeof y.onClick == "function" && qh(e);
          break;
      }
      xs(t, y);
      var S, x, b = null;
      for (S in p)
        if (!(y.hasOwnProperty(S) || !p.hasOwnProperty(S) || p[S] == null))
          if (S === sc) {
            var A = p[S];
            for (x in A)
              A.hasOwnProperty(x) && (b || (b = {}), b[x] = "");
          } else
            S === mp || S === uc || S === Vh || S === $u || S === t1 || (ir.hasOwnProperty(S) ? s || (s = []) : (s = s || []).push(S, null));
      for (S in y) {
        var N = y[S], $ = p != null ? p[S] : void 0;
        if (!(!y.hasOwnProperty(S) || N === $ || N == null && $ == null))
          if (S === sc)
            if (N && Object.freeze(N), $) {
              for (x in $)
                $.hasOwnProperty(x) && (!N || !N.hasOwnProperty(x)) && (b || (b = {}), b[x] = "");
              for (x in N)
                N.hasOwnProperty(x) && $[x] !== N[x] && (b || (b = {}), b[x] = N[x]);
            } else
              b || (s || (s = []), s.push(S, b)), b = N;
          else if (S === mp) {
            var I = N ? N[$h] : void 0, X = $ ? $[$h] : void 0;
            I != null && X !== I && (s = s || []).push(S, I);
          } else
            S === uc ? (typeof N == "string" || typeof N == "number") && (s = s || []).push(S, "" + N) : S === Vh || S === $u || (ir.hasOwnProperty(S) ? (N != null && (typeof N != "function" && Yh(S, N), S === "onScroll" && wn("scroll", e)), !s && $ !== N && (s = [])) : (s = s || []).push(S, N));
      }
      return b && (Pv(b, y[sc]), (s = s || []).push(sc, b)), s;
    }
    function ux(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && V(e, o);
      var s = So(a, i), p = So(a, o);
      switch (rx(e, t, s, p), a) {
        case "input":
          G(e, o);
          break;
        case "textarea":
          _v(e, o);
          break;
        case "select":
          Uy(e, o);
          break;
      }
    }
    function sx(e) {
      {
        var t = e.toLowerCase();
        return Nc.hasOwnProperty(t) && Nc[t] || null;
      }
    }
    function cx(e, t, a, i, o, s, p) {
      var y, S;
      switch (y = So(t, a), Ih(t, a), t) {
        case "dialog":
          wn("cancel", e), wn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          wn("load", e);
          break;
        case "video":
        case "audio":
          for (var x = 0; x < pp.length; x++)
            wn(pp[x], e);
          break;
        case "source":
          wn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          wn("error", e), wn("load", e);
          break;
        case "details":
          wn("toggle", e);
          break;
        case "input":
          _(e, a), wn("invalid", e);
          break;
        case "option":
          It(e, a);
          break;
        case "select":
          Cs(e, a), wn("invalid", e);
          break;
        case "textarea":
          kv(e, a), wn("invalid", e);
          break;
      }
      xs(t, a);
      {
        S = /* @__PURE__ */ new Set();
        for (var b = e.attributes, A = 0; A < b.length; A++) {
          var N = b[A].name.toLowerCase();
          switch (N) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              S.add(b[A].name);
          }
        }
      }
      var $ = null;
      for (var I in a)
        if (a.hasOwnProperty(I)) {
          var X = a[I];
          if (I === uc)
            typeof X == "string" ? e.textContent !== X && (a[$u] !== !0 && Qh(e.textContent, X, s, p), $ = [uc, X]) : typeof X == "number" && e.textContent !== "" + X && (a[$u] !== !0 && Qh(e.textContent, X, s, p), $ = [uc, "" + X]);
          else if (ir.hasOwnProperty(I))
            X != null && (typeof X != "function" && Yh(I, X), I === "onScroll" && wn("scroll", e));
          else if (p && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var we = void 0, We = y && $e ? null : Zn(I);
            if (a[$u] !== !0) {
              if (!(I === Vh || I === $u || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              I === "value" || I === "checked" || I === "selected")) {
                if (I === mp) {
                  var je = e.innerHTML, kt = X ? X[$h] : void 0;
                  if (kt != null) {
                    var Rt = a1(e, kt);
                    Rt !== je && yp(I, je, Rt);
                  }
                } else if (I === sc) {
                  if (S.delete(I), r1) {
                    var P = Wy(X);
                    we = e.getAttribute("style"), P !== we && yp(I, we, P);
                  }
                } else if (y && !$e)
                  S.delete(I.toLowerCase()), we = Aa(e, I, X), X !== we && yp(I, we, X);
                else if (!yn(I, We, y) && !Vt(I, X, We, y)) {
                  var Z = !1;
                  if (We !== null)
                    S.delete(We.attributeName), we = ii(e, I, X, We);
                  else {
                    var H = i;
                    if (H === Gi && (H = vd(t)), H === Gi)
                      S.delete(I.toLowerCase());
                    else {
                      var se = sx(I);
                      se !== null && se !== I && (Z = !0, S.delete(se)), S.delete(I);
                    }
                    we = Aa(e, I, X);
                  }
                  var Re = $e;
                  !Re && X !== we && !Z && yp(I, we, X);
                }
              }
            }
          }
        }
      switch (p && // $FlowFixMe - Should be inferred as not undefined.
      S.size > 0 && a[$u] !== !0 && n1(S), t) {
        case "input":
          Wi(e), ce(e, a, !0);
          break;
        case "textarea":
          Wi(e), _c(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && qh(e);
          break;
      }
      return $;
    }
    function fx(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function xg(e, t) {
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
    function kg(e, t, a) {
      {
        if (Ka)
          return;
        Ka = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function _g(e, t) {
      {
        if (t === "" || Ka)
          return;
        Ka = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function dx(e, t, a) {
      switch (t) {
        case "input":
          Ne(e, a);
          return;
        case "textarea":
          jy(e, a);
          return;
        case "select":
          xv(e, a);
          return;
      }
    }
    var gp = function() {
    }, Sp = function() {
    };
    {
      var px = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], l1 = [
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
      ], vx = l1.concat(["button"]), hx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], o1 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Sp = function(e, t) {
        var a = ft({}, e || o1), i = {
          tag: t
        };
        return l1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), vx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), px.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var mx = function(e, t) {
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
            return hx.indexOf(t) === -1;
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
      }, yx = function(e, t) {
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
      }, u1 = {};
      gp = function(e, t, a) {
        a = a || o1;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = mx(e, o) ? null : i, p = s ? null : yx(e, a), y = s || p;
        if (y) {
          var S = y.tag, x = !!s + "|" + e + "|" + S;
          if (!u1[x]) {
            u1[x] = !0;
            var b = e, A = "";
            if (e === "#text" ? /\S/.test(t) ? b = "Text nodes" : (b = "Whitespace text nodes", A = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : b = "<" + e + ">", s) {
              var N = "";
              S === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", b, S, A, N);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", b, S);
          }
        }
      };
    }
    var Gh = "suppressHydrationWarning", Kh = "$", Xh = "/$", Ep = "$?", Cp = "$!", gx = "style", Og = null, Dg = null;
    function Sx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ca:
        case md: {
          t = i === Ca ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : hd(null, "");
          break;
        }
        default: {
          var s = i === xn ? e.parentNode : e, p = s.namespaceURI || null;
          t = s.tagName, a = hd(p, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), S = Sp(null, y);
        return {
          namespace: a,
          ancestorInfo: S
        };
      }
    }
    function Ex(e, t, a) {
      {
        var i = e, o = hd(i.namespace, t), s = Sp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function XN(e) {
      return e;
    }
    function Cx(e) {
      Og = Uu(), Dg = zT();
      var t = null;
      return ua(!1), t;
    }
    function wx(e) {
      UT(Dg), ua(Og), Og = null, Dg = null;
    }
    function Rx(e, t, a, i, o) {
      var s;
      {
        var p = i;
        if (gp(e, null, p.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, S = Sp(p.ancestorInfo, e);
          gp(null, y, S);
        }
        s = p.namespace;
      }
      var x = ax(e, t, a, s);
      return Tp(o, x), Fg(x, t), x;
    }
    function Tx(e, t) {
      e.appendChild(t);
    }
    function xx(e, t, a, i, o) {
      switch (lx(e, t, a, i), t) {
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
    function bx(e, t, a, i, o, s) {
      {
        var p = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, S = Sp(p.ancestorInfo, t);
          gp(null, y, S);
        }
      }
      return ox(e, t, a, i);
    }
    function Lg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function kx(e, t, a, i) {
      {
        var o = a;
        gp(null, e, o.ancestorInfo);
      }
      var s = ix(e, t);
      return Tp(i, s), s;
    }
    function _x() {
      var e = window.event;
      return e === void 0 ? Oi : gf(e.type);
    }
    var Ng = typeof setTimeout == "function" ? setTimeout : void 0, Ox = typeof clearTimeout == "function" ? clearTimeout : void 0, Mg = -1, s1 = typeof Promise == "function" ? Promise : void 0, Dx = typeof queueMicrotask == "function" ? queueMicrotask : typeof s1 < "u" ? function(e) {
      return s1.resolve(null).then(e).catch(Lx);
    } : Ng;
    function Lx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Nx(e, t, a, i) {
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
    function Mx(e, t, a, i, o, s) {
      ux(e, t, a, i, o), Fg(e, o);
    }
    function c1(e) {
      ws(e, "");
    }
    function Ax(e, t, a) {
      e.nodeValue = a;
    }
    function zx(e, t) {
      e.appendChild(t);
    }
    function Ux(e, t) {
      var a;
      e.nodeType === xn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && qh(a);
    }
    function jx(e, t, a) {
      e.insertBefore(t, a);
    }
    function Fx(e, t, a) {
      e.nodeType === xn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Px(e, t) {
      e.removeChild(t);
    }
    function Hx(e, t) {
      e.nodeType === xn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ag(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === xn) {
          var s = o.data;
          if (s === Xh)
            if (i === 0) {
              e.removeChild(o), On(t);
              return;
            } else
              i--;
          else
            (s === Kh || s === Ep || s === Cp) && i++;
        }
        a = o;
      } while (a);
      On(t);
    }
    function Bx(e, t) {
      e.nodeType === xn ? Ag(e.parentNode, t) : e.nodeType === Zr && Ag(e, t), On(e);
    }
    function Vx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function $x(e) {
      e.nodeValue = "";
    }
    function Ix(e, t) {
      e = e;
      var a = t[gx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ol("display", i);
    }
    function Yx(e, t) {
      e.nodeValue = t;
    }
    function Wx(e) {
      e.nodeType === Zr ? e.textContent = "" : e.nodeType === Ca && e.documentElement && e.removeChild(e.documentElement);
    }
    function Qx(e, t, a) {
      return e.nodeType !== Zr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function qx(e, t) {
      return t === "" || e.nodeType !== Ki ? null : e;
    }
    function Gx(e) {
      return e.nodeType !== xn ? null : e;
    }
    function f1(e) {
      return e.data === Ep;
    }
    function zg(e) {
      return e.data === Cp;
    }
    function Kx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function Xx(e, t) {
      e._reactRetry = t;
    }
    function Zh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Zr || t === Ki)
          break;
        if (t === xn) {
          var a = e.data;
          if (a === Kh || a === Cp || a === Ep)
            break;
          if (a === Xh)
            return null;
        }
      }
      return e;
    }
    function wp(e) {
      return Zh(e.nextSibling);
    }
    function Zx(e) {
      return Zh(e.firstChild);
    }
    function Jx(e) {
      return Zh(e.firstChild);
    }
    function eb(e) {
      return Zh(e.nextSibling);
    }
    function tb(e, t, a, i, o, s, p) {
      Tp(s, e), Fg(e, a);
      var y;
      {
        var S = o;
        y = S.namespace;
      }
      var x = (s.mode & Ue) !== Ye;
      return cx(e, t, a, y, i, x, p);
    }
    function nb(e, t, a, i) {
      return Tp(a, e), a.mode & Ue, fx(e, t);
    }
    function rb(e, t) {
      Tp(t, e);
    }
    function ab(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === xn) {
          var i = t.data;
          if (i === Xh) {
            if (a === 0)
              return wp(t);
            a--;
          } else
            (i === Kh || i === Cp || i === Ep) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function d1(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === xn) {
          var i = t.data;
          if (i === Kh || i === Cp || i === Ep) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Xh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ib(e) {
      On(e);
    }
    function lb(e) {
      On(e);
    }
    function ob(e) {
      return e !== "head" && e !== "body";
    }
    function ub(e, t, a, i) {
      var o = !0;
      Qh(t.nodeValue, a, i, o);
    }
    function sb(e, t, a, i, o, s) {
      if (t[Gh] !== !0) {
        var p = !0;
        Qh(i.nodeValue, o, s, p);
      }
    }
    function cb(e, t) {
      t.nodeType === Zr ? xg(e, t) : t.nodeType === xn || bg(e, t);
    }
    function fb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Zr ? xg(a, t) : t.nodeType === xn || bg(a, t));
      }
    }
    function db(e, t, a, i, o) {
      (o || t[Gh] !== !0) && (i.nodeType === Zr ? xg(a, i) : i.nodeType === xn || bg(a, i));
    }
    function pb(e, t, a) {
      kg(e, t);
    }
    function vb(e, t) {
      _g(e, t);
    }
    function hb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && kg(i, t);
      }
    }
    function mb(e, t) {
      {
        var a = e.parentNode;
        a !== null && _g(a, t);
      }
    }
    function yb(e, t, a, i, o, s) {
      (s || t[Gh] !== !0) && kg(a, i);
    }
    function gb(e, t, a, i, o) {
      (o || t[Gh] !== !0) && _g(a, i);
    }
    function Sb(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Eb(e) {
      vp(e);
    }
    var Uf = Math.random().toString(36).slice(2), jf = "__reactFiber$" + Uf, Ug = "__reactProps$" + Uf, Rp = "__reactContainer$" + Uf, jg = "__reactEvents$" + Uf, Cb = "__reactListeners$" + Uf, wb = "__reactHandles$" + Uf;
    function Rb(e) {
      delete e[jf], delete e[Ug], delete e[jg], delete e[Cb], delete e[wb];
    }
    function Tp(e, t) {
      t[jf] = e;
    }
    function Jh(e, t) {
      t[Rp] = e;
    }
    function p1(e) {
      e[Rp] = null;
    }
    function xp(e) {
      return !!e[Rp];
    }
    function cc(e) {
      var t = e[jf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Rp] || a[jf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = d1(e); o !== null; ) {
              var s = o[jf];
              if (s)
                return s;
              o = d1(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Iu(e) {
      var t = e[jf] || e[Rp];
      return t && (t.tag === q || t.tag === K || t.tag === xe || t.tag === Y) ? t : null;
    }
    function Ff(e) {
      if (e.tag === q || e.tag === K)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function em(e) {
      return e[Ug] || null;
    }
    function Fg(e, t) {
      e[Ug] = t;
    }
    function Tb(e) {
      var t = e[jg];
      return t === void 0 && (t = e[jg] = /* @__PURE__ */ new Set()), t;
    }
    var v1 = {}, h1 = v.ReactDebugCurrentFrame;
    function tm(e) {
      if (e) {
        var t = e._owner, a = Tt(e.type, e._source, t ? t.type : null);
        h1.setExtraStackFrame(a);
      } else
        h1.setExtraStackFrame(null);
    }
    function sl(e, t, a, i, o) {
      {
        var s = Function.call.bind(or);
        for (var p in e)
          if (s(e, p)) {
            var y = void 0;
            try {
              if (typeof e[p] != "function") {
                var S = Error((i || "React class") + ": " + a + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              y = e[p](t, p, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              y = x;
            }
            y && !(y instanceof Error) && (tm(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, p, typeof y), tm(null)), y instanceof Error && !(y.message in v1) && (v1[y.message] = !0, tm(o), g("Failed %s type: %s", a, y.message), tm(null));
          }
      }
    }
    var Pg = [], nm;
    nm = [];
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
      t !== nm[Vo] && g("Unexpected Fiber popped."), e.current = Pg[Vo], Pg[Vo] = null, nm[Vo] = null, Vo--;
    }
    function ca(e, t, a) {
      Vo++, Pg[Vo] = e.current, nm[Vo] = a, e.current = t;
    }
    var Hg;
    Hg = {};
    var pi = {};
    Object.freeze(pi);
    var $o = Yu(pi), ql = Yu(!1), Bg = pi;
    function Pf(e, t, a) {
      return a && Gl(t) ? Bg : $o.current;
    }
    function m1(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Hf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return pi;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var p in i)
          s[p] = t[p];
        {
          var y = tt(e) || "Unknown";
          sl(i, s, "context", y);
        }
        return o && m1(e, t, s), s;
      }
    }
    function rm() {
      return ql.current;
    }
    function Gl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function am(e) {
      sa(ql, e), sa($o, e);
    }
    function Vg(e) {
      sa(ql, e), sa($o, e);
    }
    function y1(e, t, a) {
      {
        if ($o.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca($o, t, e), ca(ql, a, e);
      }
    }
    function g1(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = tt(e) || "Unknown";
            Hg[s] || (Hg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var p = i.getChildContext();
        for (var y in p)
          if (!(y in o))
            throw new Error((tt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var S = tt(e) || "Unknown";
          sl(o, p, "child context", S);
        }
        return ft({}, a, p);
      }
    }
    function im(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return Bg = $o.current, ca($o, a, e), ca(ql, ql.current, e), !0;
      }
    }
    function S1(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = g1(e, t, Bg);
          i.__reactInternalMemoizedMergedChildContext = o, sa(ql, e), sa($o, e), ca($o, o, e), ca(ql, a, e);
        } else
          sa(ql, e), ca(ql, a, e);
      }
    }
    function xb(e) {
      {
        if (!Ta(e) || e.tag !== z)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Y:
              return t.stateNode.context;
            case z: {
              var a = t.type;
              if (Gl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Wu = 0, lm = 1, Io = null, $g = !1, Ig = !1;
    function E1(e) {
      Io === null ? Io = [e] : Io.push(e);
    }
    function bb(e) {
      $g = !0, E1(e);
    }
    function C1() {
      $g && Qu();
    }
    function Qu() {
      if (!Ig && Io !== null) {
        Ig = !0;
        var e = 0, t = Ya();
        try {
          var a = !0, i = Io;
          for (_n(Un); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Io = null, $g = !1;
        } catch (s) {
          throw Io !== null && (Io = Io.slice(e + 1)), Ud(ra, Qu), s;
        } finally {
          _n(t), Ig = !1;
        }
      }
      return null;
    }
    var Bf = [], Vf = 0, om = null, um = 0, Mi = [], Ai = 0, fc = null, Yo = 1, Wo = "";
    function kb(e) {
      return pc(), (e.flags & th) !== Ie;
    }
    function _b(e) {
      return pc(), um;
    }
    function Ob() {
      var e = Wo, t = Yo, a = t & ~Db(t);
      return a.toString(32) + e;
    }
    function dc(e, t) {
      pc(), Bf[Vf++] = um, Bf[Vf++] = om, om = e, um = t;
    }
    function w1(e, t, a) {
      pc(), Mi[Ai++] = Yo, Mi[Ai++] = Wo, Mi[Ai++] = fc, fc = e;
      var i = Yo, o = Wo, s = sm(i) - 1, p = i & ~(1 << s), y = a + 1, S = sm(t) + s;
      if (S > 30) {
        var x = s - s % 5, b = (1 << x) - 1, A = (p & b).toString(32), N = p >> x, $ = s - x, I = sm(t) + $, X = y << $, we = X | N, We = A + o;
        Yo = 1 << I | we, Wo = We;
      } else {
        var je = y << s, kt = je | p, Rt = o;
        Yo = 1 << S | kt, Wo = Rt;
      }
    }
    function Yg(e) {
      pc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        dc(e, a), w1(e, a, i);
      }
    }
    function sm(e) {
      return 32 - Bs(e);
    }
    function Db(e) {
      return 1 << sm(e) - 1;
    }
    function Wg(e) {
      for (; e === om; )
        om = Bf[--Vf], Bf[Vf] = null, um = Bf[--Vf], Bf[Vf] = null;
      for (; e === fc; )
        fc = Mi[--Ai], Mi[Ai] = null, Wo = Mi[--Ai], Mi[Ai] = null, Yo = Mi[--Ai], Mi[Ai] = null;
    }
    function Lb() {
      return pc(), fc !== null ? {
        id: Yo,
        overflow: Wo
      } : null;
    }
    function Nb(e, t) {
      pc(), Mi[Ai++] = Yo, Mi[Ai++] = Wo, Mi[Ai++] = fc, Yo = t.id, Wo = t.overflow, fc = e;
    }
    function pc() {
      Ur() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, zi = null, cl = !1, vc = !1, qu = null;
    function Mb() {
      cl && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function R1() {
      vc = !0;
    }
    function Ab() {
      return vc;
    }
    function zb(e) {
      var t = e.stateNode.containerInfo;
      return zi = Jx(t), zr = e, cl = !0, qu = null, vc = !1, !0;
    }
    function Ub(e, t, a) {
      return zi = eb(t), zr = e, cl = !0, qu = null, vc = !1, a !== null && Nb(e, a), !0;
    }
    function T1(e, t) {
      switch (e.tag) {
        case Y: {
          cb(e.stateNode.containerInfo, t);
          break;
        }
        case q: {
          var a = (e.mode & Ue) !== Ye;
          db(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case xe: {
          var i = e.memoizedState;
          i.dehydrated !== null && fb(i.dehydrated, t);
          break;
        }
      }
    }
    function x1(e, t) {
      T1(e, t);
      var a = PO();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Mt) : i.push(a);
    }
    function Qg(e, t) {
      {
        if (vc)
          return;
        switch (e.tag) {
          case Y: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case q:
                var i = t.type;
                t.pendingProps, pb(a, i);
                break;
              case K:
                var o = t.pendingProps;
                vb(a, o);
                break;
            }
            break;
          }
          case q: {
            var s = e.type, p = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case q: {
                var S = t.type, x = t.pendingProps, b = (e.mode & Ue) !== Ye;
                yb(
                  s,
                  p,
                  y,
                  S,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
              case K: {
                var A = t.pendingProps, N = (e.mode & Ue) !== Ye;
                gb(
                  s,
                  p,
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
          case xe: {
            var $ = e.memoizedState, I = $.dehydrated;
            if (I !== null)
              switch (t.tag) {
                case q:
                  var X = t.type;
                  t.pendingProps, hb(I, X);
                  break;
                case K:
                  var we = t.pendingProps;
                  mb(I, we);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function b1(e, t) {
      t.flags = t.flags & ~Ti | Xt, Qg(e, t);
    }
    function k1(e, t) {
      switch (e.tag) {
        case q: {
          var a = e.type;
          e.pendingProps;
          var i = Qx(t, a);
          return i !== null ? (e.stateNode = i, zr = e, zi = Zx(i), !0) : !1;
        }
        case K: {
          var o = e.pendingProps, s = qx(t, o);
          return s !== null ? (e.stateNode = s, zr = e, zi = null, !0) : !1;
        }
        case xe: {
          var p = Gx(t);
          if (p !== null) {
            var y = {
              dehydrated: p,
              treeContext: Lb(),
              retryLane: ka
            };
            e.memoizedState = y;
            var S = HO(p);
            return S.return = e, e.child = S, zr = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function qg(e) {
      return (e.mode & Ue) !== Ye && (e.flags & rt) === Ie;
    }
    function Gg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Kg(e) {
      if (cl) {
        var t = zi;
        if (!t) {
          qg(e) && (Qg(zr, e), Gg()), b1(zr, e), cl = !1, zr = e;
          return;
        }
        var a = t;
        if (!k1(e, t)) {
          qg(e) && (Qg(zr, e), Gg()), t = wp(a);
          var i = zr;
          if (!t || !k1(e, t)) {
            b1(zr, e), cl = !1, zr = e;
            return;
          }
          x1(i, a);
        }
      }
    }
    function jb(e, t, a) {
      var i = e.stateNode, o = !vc, s = tb(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function Fb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = nb(t, a, e);
      if (i) {
        var o = zr;
        if (o !== null)
          switch (o.tag) {
            case Y: {
              var s = o.stateNode.containerInfo, p = (o.mode & Ue) !== Ye;
              ub(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                p
              );
              break;
            }
            case q: {
              var y = o.type, S = o.memoizedProps, x = o.stateNode, b = (o.mode & Ue) !== Ye;
              sb(
                y,
                S,
                x,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                b
              );
              break;
            }
          }
      }
      return i;
    }
    function Pb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      rb(a, e);
    }
    function Hb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ab(a);
    }
    function _1(e) {
      for (var t = e.return; t !== null && t.tag !== q && t.tag !== Y && t.tag !== xe; )
        t = t.return;
      zr = t;
    }
    function cm(e) {
      if (e !== zr)
        return !1;
      if (!cl)
        return _1(e), cl = !0, !1;
      if (e.tag !== Y && (e.tag !== q || ob(e.type) && !Lg(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (qg(e))
            O1(e), Gg();
          else
            for (; t; )
              x1(e, t), t = wp(t);
      }
      return _1(e), e.tag === xe ? zi = Hb(e) : zi = zr ? wp(e.stateNode) : null, !0;
    }
    function Bb() {
      return cl && zi !== null;
    }
    function O1(e) {
      for (var t = zi; t; )
        T1(e, t), t = wp(t);
    }
    function $f() {
      zr = null, zi = null, cl = !1, vc = !1;
    }
    function D1() {
      qu !== null && (Tw(qu), qu = null);
    }
    function Ur() {
      return cl;
    }
    function Xg(e) {
      qu === null ? qu = [e] : qu.push(e);
    }
    var Vb = v.ReactCurrentBatchConfig, $b = null;
    function Ib() {
      return Vb.transition;
    }
    var fl = {
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
      var Yb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & bn && (t = a), a = a.return;
        return t;
      }, hc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, bp = [], kp = [], _p = [], Op = [], Dp = [], Lp = [], mc = /* @__PURE__ */ new Set();
      fl.recordUnsafeLifecycleWarnings = function(e, t) {
        mc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && bp.push(e), e.mode & bn && typeof t.UNSAFE_componentWillMount == "function" && kp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && _p.push(e), e.mode & bn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Op.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Dp.push(e), e.mode & bn && typeof t.UNSAFE_componentWillUpdate == "function" && Lp.push(e));
      }, fl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        bp.length > 0 && (bp.forEach(function(N) {
          e.add(tt(N) || "Component"), mc.add(N.type);
        }), bp = []);
        var t = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(N) {
          t.add(tt(N) || "Component"), mc.add(N.type);
        }), kp = []);
        var a = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(N) {
          a.add(tt(N) || "Component"), mc.add(N.type);
        }), _p = []);
        var i = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(N) {
          i.add(tt(N) || "Component"), mc.add(N.type);
        }), Op = []);
        var o = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(N) {
          o.add(tt(N) || "Component"), mc.add(N.type);
        }), Dp = []);
        var s = /* @__PURE__ */ new Set();
        if (Lp.length > 0 && (Lp.forEach(function(N) {
          s.add(tt(N) || "Component"), mc.add(N.type);
        }), Lp = []), t.size > 0) {
          var p = hc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, p);
        }
        if (i.size > 0) {
          var y = hc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var S = hc(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, S);
        }
        if (e.size > 0) {
          var x = hc(e);
          C(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var b = hc(a);
          C(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (o.size > 0) {
          var A = hc(o);
          C(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
      };
      var fm = /* @__PURE__ */ new Map(), L1 = /* @__PURE__ */ new Set();
      fl.recordLegacyContextWarning = function(e, t) {
        var a = Yb(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!L1.has(e.type)) {
          var i = fm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], fm.set(a, i)), i.push(e));
        }
      }, fl.flushLegacyContextWarning = function() {
        fm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(tt(s) || "Component"), L1.add(s.type);
            });
            var o = hc(i);
            try {
              Sn(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              un();
            }
          }
        });
      }, fl.discardPendingWarnings = function() {
        bp = [], kp = [], _p = [], Op = [], Dp = [], Lp = [], fm = /* @__PURE__ */ new Map();
      };
    }
    function dl(e, t) {
      if (e && e.defaultProps) {
        var a = ft({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var Zg = Yu(null), Jg;
    Jg = {};
    var dm = null, If = null, e0 = null, pm = !1;
    function vm() {
      dm = null, If = null, e0 = null, pm = !1;
    }
    function N1() {
      pm = !0;
    }
    function M1() {
      pm = !1;
    }
    function A1(e, t, a) {
      ca(Zg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Jg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Jg;
    }
    function t0(e, t) {
      var a = Zg.current;
      sa(Zg, t), e._currentValue = a;
    }
    function n0(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Ao(i.childLanes, t) ? o !== null && !Ao(o.childLanes, t) && (o.childLanes = ut(o.childLanes, t)) : (i.childLanes = ut(i.childLanes, t), o !== null && (o.childLanes = ut(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Wb(e, t, a) {
      Qb(e, t, a);
    }
    function Qb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var p = s.firstContext; p !== null; ) {
            if (p.context === t) {
              if (i.tag === z) {
                var y = bu(a), S = Qo(an, y);
                S.tag = mm;
                var x = i.updateQueue;
                if (x !== null) {
                  var b = x.shared, A = b.pending;
                  A === null ? S.next = S : (S.next = A.next, A.next = S), b.pending = S;
                }
              }
              i.lanes = ut(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = ut(N.lanes, a)), n0(i.return, a, e), s.lanes = ut(s.lanes, a);
              break;
            }
            p = p.next;
          }
        } else if (i.tag === Pe)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Wt) {
          var $ = i.return;
          if ($ === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          $.lanes = ut($.lanes, a);
          var I = $.alternate;
          I !== null && (I.lanes = ut(I.lanes, a)), n0($, a, e), o = i.sibling;
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
            var X = o.sibling;
            if (X !== null) {
              X.return = o.return, o = X;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Yf(e, t) {
      dm = e, If = null, e0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Yp(), a.firstContext = null);
      }
    }
    function rr(e) {
      pm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (e0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (If === null) {
          if (dm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          If = a, dm.dependencies = {
            lanes: ee,
            firstContext: a
          };
        } else
          If = If.next = a;
      }
      return t;
    }
    var yc = null;
    function r0(e) {
      yc === null ? yc = [e] : yc.push(e);
    }
    function qb() {
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
    function z1(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, r0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, hm(e, i);
    }
    function Gb(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, r0(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function Kb(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, r0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, hm(e, i);
    }
    function Xa(e, t) {
      return hm(e, t);
    }
    var Xb = hm;
    function hm(e, t) {
      e.lanes = ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ut(a.lanes, t)), a === null && (e.flags & (Xt | Ti)) !== Ie && Uw(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = ut(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = ut(a.childLanes, t) : (o.flags & (Xt | Ti)) !== Ie && Uw(e), i = o, o = o.return;
      if (i.tag === Y) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var U1 = 0, j1 = 1, mm = 2, a0 = 3, ym = !1, i0, gm;
    i0 = !1, gm = null;
    function l0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ee
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function F1(e, t) {
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
        tag: U1,
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
      if (gm === o && !i0 && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), i0 = !0), X_()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, Xb(e, a);
      } else
        return Kb(e, o, t, a);
    }
    function Sm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Qd(a)) {
          var s = o.lanes;
          s = sf(s, e.pendingLanes);
          var p = ut(s, a);
          o.lanes = p, qd(e, p);
        }
      }
    }
    function o0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, p = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var S = y;
            do {
              var x = {
                eventTime: S.eventTime,
                lane: S.lane,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null
              };
              p === null ? s = p = x : (p.next = x, p = x), S = S.next;
            } while (S !== null);
            p === null ? s = p = t : (p.next = t, p = t);
          } else
            s = p = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: p,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var b = a.lastBaseUpdate;
      b === null ? a.firstBaseUpdate = t : b.next = t, a.lastBaseUpdate = t;
    }
    function Zb(e, t, a, i, o, s) {
      switch (a.tag) {
        case j1: {
          var p = a.payload;
          if (typeof p == "function") {
            N1();
            var y = p.call(s, i, o);
            {
              if (e.mode & bn) {
                rn(!0);
                try {
                  p.call(s, i, o);
                } finally {
                  rn(!1);
                }
              }
              M1();
            }
            return y;
          }
          return p;
        }
        case a0:
          e.flags = e.flags & ~cr | rt;
        case U1: {
          var S = a.payload, x;
          if (typeof S == "function") {
            N1(), x = S.call(s, i, o);
            {
              if (e.mode & bn) {
                rn(!0);
                try {
                  S.call(s, i, o);
                } finally {
                  rn(!1);
                }
              }
              M1();
            }
          } else
            x = S;
          return x == null ? i : ft({}, i, x);
        }
        case mm:
          return ym = !0, i;
      }
      return i;
    }
    function Em(e, t, a, i) {
      var o = e.updateQueue;
      ym = !1, gm = o.shared;
      var s = o.firstBaseUpdate, p = o.lastBaseUpdate, y = o.shared.pending;
      if (y !== null) {
        o.shared.pending = null;
        var S = y, x = S.next;
        S.next = null, p === null ? s = x : p.next = x, p = S;
        var b = e.alternate;
        if (b !== null) {
          var A = b.updateQueue, N = A.lastBaseUpdate;
          N !== p && (N === null ? A.firstBaseUpdate = x : N.next = x, A.lastBaseUpdate = S);
        }
      }
      if (s !== null) {
        var $ = o.baseState, I = ee, X = null, we = null, We = null, je = s;
        do {
          var kt = je.lane, Rt = je.eventTime;
          if (Ao(i, kt)) {
            if (We !== null) {
              var Z = {
                eventTime: Rt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                tag: je.tag,
                payload: je.payload,
                callback: je.callback,
                next: null
              };
              We = We.next = Z;
            }
            $ = Zb(e, o, je, $, t, a);
            var H = je.callback;
            if (H !== null && // If the update was already committed, we should not queue its
            // callback again.
            je.lane !== An) {
              e.flags |= Jn;
              var se = o.effects;
              se === null ? o.effects = [je] : se.push(je);
            }
          } else {
            var P = {
              eventTime: Rt,
              lane: kt,
              tag: je.tag,
              payload: je.payload,
              callback: je.callback,
              next: null
            };
            We === null ? (we = We = P, X = $) : We = We.next = P, I = ut(I, kt);
          }
          if (je = je.next, je === null) {
            if (y = o.shared.pending, y === null)
              break;
            var Re = y, ye = Re.next;
            Re.next = null, je = ye, o.lastBaseUpdate = Re, o.shared.pending = null;
          }
        } while (!0);
        We === null && (X = $), o.baseState = X, o.firstBaseUpdate = we, o.lastBaseUpdate = We;
        var et = o.shared.interleaved;
        if (et !== null) {
          var it = et;
          do
            I = ut(I, it.lane), it = it.next;
          while (it !== et);
        } else
          s === null && (o.shared.lanes = ee);
        rv(I), e.lanes = I, e.memoizedState = $;
      }
      gm = null;
    }
    function Jb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function P1() {
      ym = !1;
    }
    function Cm() {
      return ym;
    }
    function H1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], p = s.callback;
          p !== null && (s.callback = null, Jb(p, a));
        }
    }
    var u0 = {}, B1 = new f.Component().refs, s0, c0, f0, d0, p0, V1, wm, v0, h0, m0;
    {
      s0 = /* @__PURE__ */ new Set(), c0 = /* @__PURE__ */ new Set(), f0 = /* @__PURE__ */ new Set(), d0 = /* @__PURE__ */ new Set(), v0 = /* @__PURE__ */ new Set(), p0 = /* @__PURE__ */ new Set(), h0 = /* @__PURE__ */ new Set(), m0 = /* @__PURE__ */ new Set();
      var $1 = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          $1.has(a) || ($1.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, V1 = function(e, t) {
        if (t === void 0) {
          var a = Ot(e) || "Component";
          p0.has(a) || (p0.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(u0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(u0);
    }
    function y0(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & bn) {
          rn(!0);
          try {
            s = a(i, o);
          } finally {
            rn(!1);
          }
        }
        V1(t, s);
      }
      var p = s == null ? o : ft({}, o, s);
      if (e.memoizedState = p, e.lanes === ee) {
        var y = e.updateQueue;
        y.baseState = p;
      }
    }
    var g0 = {
      isMounted: xa,
      enqueueSetState: function(e, t, a) {
        var i = Ri(e), o = Da(), s = rs(i), p = Qo(o, s);
        p.payload = t, a != null && (wm(a, "setState"), p.callback = a);
        var y = Gu(i, p, s);
        y !== null && (Er(y, i, s, o), Sm(y, i, s)), Wc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ri(e), o = Da(), s = rs(i), p = Qo(o, s);
        p.tag = j1, p.payload = t, a != null && (wm(a, "replaceState"), p.callback = a);
        var y = Gu(i, p, s);
        y !== null && (Er(y, i, s, o), Sm(y, i, s)), Wc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ri(e), i = Da(), o = rs(a), s = Qo(i, o);
        s.tag = mm, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var p = Gu(a, s, o);
        p !== null && (Er(p, a, o, i), Sm(p, a, o)), wu(a, o);
      }
    };
    function I1(e, t, a, i, o, s, p) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var S = y.shouldComponentUpdate(i, s, p);
        {
          if (e.mode & bn) {
            rn(!0);
            try {
              S = y.shouldComponentUpdate(i, s, p);
            } finally {
              rn(!1);
            }
          }
          S === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ot(t) || "Component");
        }
        return S;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ke(a, i) || !Ke(o, s) : !0;
    }
    function ek(e, t, a) {
      var i = e.stateNode;
      {
        var o = Ot(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !h0.has(t) && (h0.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ot(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var p = i.props !== a;
        i.props !== void 0 && p && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !f0.has(t) && (f0.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ot(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var y = i.state;
        y && (typeof y != "object" || Dt(y)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function Y1(e, t) {
      t.updater = g0, e.stateNode = t, Fc(t, e), t._reactInternalInstance = u0;
    }
    function W1(e, t, a) {
      var i = !1, o = pi, s = pi, p = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          p === null || p !== void 0 && p.$$typeof === pe && p._context === void 0
        );
        if (!y && !m0.has(t)) {
          m0.add(t);
          var S = "";
          p === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? S = " However, it is set to a " + typeof p + "." : p.$$typeof === ie ? S = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ot(t) || "Component", S);
        }
      }
      if (typeof p == "object" && p !== null)
        s = rr(p);
      else {
        o = Pf(e, t, !0);
        var x = t.contextTypes;
        i = x != null, s = i ? Hf(e, o) : pi;
      }
      var b = new t(a, s);
      if (e.mode & bn) {
        rn(!0);
        try {
          b = new t(a, s);
        } finally {
          rn(!1);
        }
      }
      var A = e.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
      Y1(e, b);
      {
        if (typeof t.getDerivedStateFromProps == "function" && A === null) {
          var N = Ot(t) || "Component";
          c0.has(N) || (c0.add(N), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, b.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
          var $ = null, I = null, X = null;
          if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? $ = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && ($ = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), $ !== null || I !== null || X !== null) {
            var we = Ot(t) || "Component", We = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            d0.has(we) || (d0.add(we), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, we, We, $ !== null ? `
  ` + $ : "", I !== null ? `
  ` + I : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return i && m1(e, o, s), b;
    }
    function tk(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", tt(e) || "Component"), g0.enqueueReplaceState(t, t.state, null));
    }
    function Q1(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = tt(e) || "Component";
          s0.has(s) || (s0.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        g0.enqueueReplaceState(t, t.state, null);
      }
    }
    function S0(e, t, a, i) {
      ek(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = B1, l0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = rr(s);
      else {
        var p = Pf(e, t, !0);
        o.context = Hf(e, p);
      }
      {
        if (o.state === a) {
          var y = Ot(t) || "Component";
          v0.has(y) || (v0.add(y), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & bn && fl.recordLegacyContextWarning(e, o), fl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var S = t.getDerivedStateFromProps;
      if (typeof S == "function" && (y0(e, t, S, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (tk(e, o), Em(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var x = Ae;
        x |= Ha, (e.mode & $a) !== Ye && (x |= Ba), e.flags |= x;
      }
    }
    function nk(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var p = o.context, y = t.contextType, S = pi;
      if (typeof y == "object" && y !== null)
        S = rr(y);
      else {
        var x = Pf(e, t, !0);
        S = Hf(e, x);
      }
      var b = t.getDerivedStateFromProps, A = typeof b == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !A && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || p !== S) && Q1(e, o, a, S), P1();
      var N = e.memoizedState, $ = o.state = N;
      if (Em(e, a, o, i), $ = e.memoizedState, s === a && N === $ && !rm() && !Cm()) {
        if (typeof o.componentDidMount == "function") {
          var I = Ae;
          I |= Ha, (e.mode & $a) !== Ye && (I |= Ba), e.flags |= I;
        }
        return !1;
      }
      typeof b == "function" && (y0(e, t, b, a), $ = e.memoizedState);
      var X = Cm() || I1(e, t, s, a, N, $, S);
      if (X) {
        if (!A && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var we = Ae;
          we |= Ha, (e.mode & $a) !== Ye && (we |= Ba), e.flags |= we;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var We = Ae;
          We |= Ha, (e.mode & $a) !== Ye && (We |= Ba), e.flags |= We;
        }
        e.memoizedProps = a, e.memoizedState = $;
      }
      return o.props = a, o.state = $, o.context = S, X;
    }
    function rk(e, t, a, i, o) {
      var s = t.stateNode;
      F1(e, t);
      var p = t.memoizedProps, y = t.type === t.elementType ? p : dl(t.type, p);
      s.props = y;
      var S = t.pendingProps, x = s.context, b = a.contextType, A = pi;
      if (typeof b == "object" && b !== null)
        A = rr(b);
      else {
        var N = Pf(t, a, !0);
        A = Hf(t, N);
      }
      var $ = a.getDerivedStateFromProps, I = typeof $ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !I && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (p !== S || x !== A) && Q1(t, s, i, A), P1();
      var X = t.memoizedState, we = s.state = X;
      if (Em(t, i, s, o), we = t.memoizedState, p === S && X === we && !rm() && !Cm() && !D)
        return typeof s.componentDidUpdate == "function" && (p !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Ae), typeof s.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Vn), !1;
      typeof $ == "function" && (y0(t, a, $, i), we = t.memoizedState);
      var We = Cm() || I1(t, a, y, i, X, we, A) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      D;
      return We ? (!I && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, we, A), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, we, A)), typeof s.componentDidUpdate == "function" && (t.flags |= Ae), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Vn)) : (typeof s.componentDidUpdate == "function" && (p !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Ae), typeof s.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Vn), t.memoizedProps = i, t.memoizedState = we), s.props = i, s.state = we, s.context = A, We;
    }
    var E0, C0, w0, R0, T0, q1 = function(e, t) {
    };
    E0 = !1, C0 = !1, w0 = {}, R0 = {}, T0 = {}, q1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = tt(t) || "Component";
        R0[a] || (R0[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Np(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & bn || ot) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = tt(e) || "Component";
          w0[o] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), w0[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, p;
          if (s) {
            var y = s;
            if (y.tag !== z)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            p = y.stateNode;
          }
          if (!p)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var S = p;
          Wn(i, "ref");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var b = function(A) {
            var N = S.refs;
            N === B1 && (N = S.refs = {}), A === null ? delete N[x] : N[x] = A;
          };
          return b._stringRef = x, b;
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
    function Rm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Tm(e) {
      {
        var t = tt(e) || "Component";
        if (T0[t])
          return;
        T0[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function G1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function K1(e) {
      function t(P, Z) {
        if (e) {
          var H = P.deletions;
          H === null ? (P.deletions = [Z], P.flags |= Mt) : H.push(Z);
        }
      }
      function a(P, Z) {
        if (!e)
          return null;
        for (var H = Z; H !== null; )
          t(P, H), H = H.sibling;
        return null;
      }
      function i(P, Z) {
        for (var H = /* @__PURE__ */ new Map(), se = Z; se !== null; )
          se.key !== null ? H.set(se.key, se) : H.set(se.index, se), se = se.sibling;
        return H;
      }
      function o(P, Z) {
        var H = xc(P, Z);
        return H.index = 0, H.sibling = null, H;
      }
      function s(P, Z, H) {
        if (P.index = H, !e)
          return P.flags |= th, Z;
        var se = P.alternate;
        if (se !== null) {
          var Re = se.index;
          return Re < Z ? (P.flags |= Xt, Z) : Re;
        } else
          return P.flags |= Xt, Z;
      }
      function p(P) {
        return e && P.alternate === null && (P.flags |= Xt), P;
      }
      function y(P, Z, H, se) {
        if (Z === null || Z.tag !== K) {
          var Re = XS(H, P.mode, se);
          return Re.return = P, Re;
        } else {
          var ye = o(Z, H);
          return ye.return = P, ye;
        }
      }
      function S(P, Z, H, se) {
        var Re = H.type;
        if (Re === Ea)
          return b(P, Z, H.props.children, se, H.key);
        if (Z !== null && (Z.elementType === Re || // Keep this check inline so it only runs on the false path:
        Hw(Z, H) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Re == "object" && Re !== null && Re.$$typeof === Be && G1(Re) === Z.type)) {
          var ye = o(Z, H.props);
          return ye.ref = Np(P, Z, H), ye.return = P, ye._debugSource = H._source, ye._debugOwner = H._owner, ye;
        }
        var et = KS(H, P.mode, se);
        return et.ref = Np(P, Z, H), et.return = P, et;
      }
      function x(P, Z, H, se) {
        if (Z === null || Z.tag !== oe || Z.stateNode.containerInfo !== H.containerInfo || Z.stateNode.implementation !== H.implementation) {
          var Re = ZS(H, P.mode, se);
          return Re.return = P, Re;
        } else {
          var ye = o(Z, H.children || []);
          return ye.return = P, ye;
        }
      }
      function b(P, Z, H, se, Re) {
        if (Z === null || Z.tag !== Te) {
          var ye = is(H, P.mode, se, Re);
          return ye.return = P, ye;
        } else {
          var et = o(Z, H);
          return et.return = P, et;
        }
      }
      function A(P, Z, H) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var se = XS("" + Z, P.mode, H);
          return se.return = P, se;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Wr: {
              var Re = KS(Z, P.mode, H);
              return Re.ref = Np(P, null, Z), Re.return = P, Re;
            }
            case Qr: {
              var ye = ZS(Z, P.mode, H);
              return ye.return = P, ye;
            }
            case Be: {
              var et = Z._payload, it = Z._init;
              return A(P, it(et), H);
            }
          }
          if (Dt(Z) || gi(Z)) {
            var qt = is(Z, P.mode, H, null);
            return qt.return = P, qt;
          }
          Rm(P, Z);
        }
        return typeof Z == "function" && Tm(P), null;
      }
      function N(P, Z, H, se) {
        var Re = Z !== null ? Z.key : null;
        if (typeof H == "string" && H !== "" || typeof H == "number")
          return Re !== null ? null : y(P, Z, "" + H, se);
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Wr:
              return H.key === Re ? S(P, Z, H, se) : null;
            case Qr:
              return H.key === Re ? x(P, Z, H, se) : null;
            case Be: {
              var ye = H._payload, et = H._init;
              return N(P, Z, et(ye), se);
            }
          }
          if (Dt(H) || gi(H))
            return Re !== null ? null : b(P, Z, H, se, null);
          Rm(P, H);
        }
        return typeof H == "function" && Tm(P), null;
      }
      function $(P, Z, H, se, Re) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var ye = P.get(H) || null;
          return y(Z, ye, "" + se, Re);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case Wr: {
              var et = P.get(se.key === null ? H : se.key) || null;
              return S(Z, et, se, Re);
            }
            case Qr: {
              var it = P.get(se.key === null ? H : se.key) || null;
              return x(Z, it, se, Re);
            }
            case Be:
              var qt = se._payload, zt = se._init;
              return $(P, Z, H, zt(qt), Re);
          }
          if (Dt(se) || gi(se)) {
            var Xn = P.get(H) || null;
            return b(Z, Xn, se, Re, null);
          }
          Rm(Z, se);
        }
        return typeof se == "function" && Tm(Z), null;
      }
      function I(P, Z, H) {
        {
          if (typeof P != "object" || P === null)
            return Z;
          switch (P.$$typeof) {
            case Wr:
            case Qr:
              q1(P, H);
              var se = P.key;
              if (typeof se != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(se);
                break;
              }
              if (!Z.has(se)) {
                Z.add(se);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case Be:
              var Re = P._payload, ye = P._init;
              I(ye(Re), Z, H);
              break;
          }
        }
        return Z;
      }
      function X(P, Z, H, se) {
        for (var Re = null, ye = 0; ye < H.length; ye++) {
          var et = H[ye];
          Re = I(et, Re, P);
        }
        for (var it = null, qt = null, zt = Z, Xn = 0, Ut = 0, In = null; zt !== null && Ut < H.length; Ut++) {
          zt.index > Ut ? (In = zt, zt = null) : In = zt.sibling;
          var da = N(P, zt, H[Ut], se);
          if (da === null) {
            zt === null && (zt = In);
            break;
          }
          e && zt && da.alternate === null && t(P, zt), Xn = s(da, Xn, Ut), qt === null ? it = da : qt.sibling = da, qt = da, zt = In;
        }
        if (Ut === H.length) {
          if (a(P, zt), Ur()) {
            var $r = Ut;
            dc(P, $r);
          }
          return it;
        }
        if (zt === null) {
          for (; Ut < H.length; Ut++) {
            var hi = A(P, H[Ut], se);
            hi !== null && (Xn = s(hi, Xn, Ut), qt === null ? it = hi : qt.sibling = hi, qt = hi);
          }
          if (Ur()) {
            var La = Ut;
            dc(P, La);
          }
          return it;
        }
        for (var Na = i(P, zt); Ut < H.length; Ut++) {
          var pa = $(Na, P, Ut, H[Ut], se);
          pa !== null && (e && pa.alternate !== null && Na.delete(pa.key === null ? Ut : pa.key), Xn = s(pa, Xn, Ut), qt === null ? it = pa : qt.sibling = pa, qt = pa);
        }
        if (e && Na.forEach(function(ud) {
          return t(P, ud);
        }), Ur()) {
          var Jo = Ut;
          dc(P, Jo);
        }
        return it;
      }
      function we(P, Z, H, se) {
        var Re = gi(H);
        if (typeof Re != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          H[Symbol.toStringTag] === "Generator" && (C0 || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), C0 = !0), H.entries === Re && (E0 || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), E0 = !0);
          var ye = Re.call(H);
          if (ye)
            for (var et = null, it = ye.next(); !it.done; it = ye.next()) {
              var qt = it.value;
              et = I(qt, et, P);
            }
        }
        var zt = Re.call(H);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Xn = null, Ut = null, In = Z, da = 0, $r = 0, hi = null, La = zt.next(); In !== null && !La.done; $r++, La = zt.next()) {
          In.index > $r ? (hi = In, In = null) : hi = In.sibling;
          var Na = N(P, In, La.value, se);
          if (Na === null) {
            In === null && (In = hi);
            break;
          }
          e && In && Na.alternate === null && t(P, In), da = s(Na, da, $r), Ut === null ? Xn = Na : Ut.sibling = Na, Ut = Na, In = hi;
        }
        if (La.done) {
          if (a(P, In), Ur()) {
            var pa = $r;
            dc(P, pa);
          }
          return Xn;
        }
        if (In === null) {
          for (; !La.done; $r++, La = zt.next()) {
            var Jo = A(P, La.value, se);
            Jo !== null && (da = s(Jo, da, $r), Ut === null ? Xn = Jo : Ut.sibling = Jo, Ut = Jo);
          }
          if (Ur()) {
            var ud = $r;
            dc(P, ud);
          }
          return Xn;
        }
        for (var uv = i(P, In); !La.done; $r++, La = zt.next()) {
          var ro = $(uv, P, $r, La.value, se);
          ro !== null && (e && ro.alternate !== null && uv.delete(ro.key === null ? $r : ro.key), da = s(ro, da, $r), Ut === null ? Xn = ro : Ut.sibling = ro, Ut = ro);
        }
        if (e && uv.forEach(function(yD) {
          return t(P, yD);
        }), Ur()) {
          var mD = $r;
          dc(P, mD);
        }
        return Xn;
      }
      function We(P, Z, H, se) {
        if (Z !== null && Z.tag === K) {
          a(P, Z.sibling);
          var Re = o(Z, H);
          return Re.return = P, Re;
        }
        a(P, Z);
        var ye = XS(H, P.mode, se);
        return ye.return = P, ye;
      }
      function je(P, Z, H, se) {
        for (var Re = H.key, ye = Z; ye !== null; ) {
          if (ye.key === Re) {
            var et = H.type;
            if (et === Ea) {
              if (ye.tag === Te) {
                a(P, ye.sibling);
                var it = o(ye, H.props.children);
                return it.return = P, it._debugSource = H._source, it._debugOwner = H._owner, it;
              }
            } else if (ye.elementType === et || // Keep this check inline so it only runs on the false path:
            Hw(ye, H) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof et == "object" && et !== null && et.$$typeof === Be && G1(et) === ye.type) {
              a(P, ye.sibling);
              var qt = o(ye, H.props);
              return qt.ref = Np(P, ye, H), qt.return = P, qt._debugSource = H._source, qt._debugOwner = H._owner, qt;
            }
            a(P, ye);
            break;
          } else
            t(P, ye);
          ye = ye.sibling;
        }
        if (H.type === Ea) {
          var zt = is(H.props.children, P.mode, se, H.key);
          return zt.return = P, zt;
        } else {
          var Xn = KS(H, P.mode, se);
          return Xn.ref = Np(P, Z, H), Xn.return = P, Xn;
        }
      }
      function kt(P, Z, H, se) {
        for (var Re = H.key, ye = Z; ye !== null; ) {
          if (ye.key === Re)
            if (ye.tag === oe && ye.stateNode.containerInfo === H.containerInfo && ye.stateNode.implementation === H.implementation) {
              a(P, ye.sibling);
              var et = o(ye, H.children || []);
              return et.return = P, et;
            } else {
              a(P, ye);
              break;
            }
          else
            t(P, ye);
          ye = ye.sibling;
        }
        var it = ZS(H, P.mode, se);
        return it.return = P, it;
      }
      function Rt(P, Z, H, se) {
        var Re = typeof H == "object" && H !== null && H.type === Ea && H.key === null;
        if (Re && (H = H.props.children), typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Wr:
              return p(je(P, Z, H, se));
            case Qr:
              return p(kt(P, Z, H, se));
            case Be:
              var ye = H._payload, et = H._init;
              return Rt(P, Z, et(ye), se);
          }
          if (Dt(H))
            return X(P, Z, H, se);
          if (gi(H))
            return we(P, Z, H, se);
          Rm(P, H);
        }
        return typeof H == "string" && H !== "" || typeof H == "number" ? p(We(P, Z, "" + H, se)) : (typeof H == "function" && Tm(P), a(P, Z));
      }
      return Rt;
    }
    var Wf = K1(!0), X1 = K1(!1);
    function ak(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = xc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = xc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ik(e, t) {
      for (var a = e.child; a !== null; )
        AO(a, t), a = a.sibling;
    }
    var Mp = {}, Ku = Yu(Mp), Ap = Yu(Mp), xm = Yu(Mp);
    function bm(e) {
      if (e === Mp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Z1() {
      var e = bm(xm.current);
      return e;
    }
    function x0(e, t) {
      ca(xm, t, e), ca(Ap, e, e), ca(Ku, Mp, e);
      var a = Sx(t);
      sa(Ku, e), ca(Ku, a, e);
    }
    function Qf(e) {
      sa(Ku, e), sa(Ap, e), sa(xm, e);
    }
    function b0() {
      var e = bm(Ku.current);
      return e;
    }
    function J1(e) {
      bm(xm.current);
      var t = bm(Ku.current), a = Ex(t, e.type);
      t !== a && (ca(Ap, e, e), ca(Ku, a, e));
    }
    function k0(e) {
      Ap.current === e && (sa(Ku, e), sa(Ap, e));
    }
    var lk = 0, eC = 1, tC = 1, zp = 2, pl = Yu(lk);
    function _0(e, t) {
      return (e & t) !== 0;
    }
    function qf(e) {
      return e & eC;
    }
    function O0(e, t) {
      return e & eC | t;
    }
    function ok(e, t) {
      return e | t;
    }
    function Xu(e, t) {
      ca(pl, t, e);
    }
    function Gf(e) {
      sa(pl, e);
    }
    function uk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function km(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === xe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || f1(i) || zg(i))
              return t;
          }
        } else if (t.tag === Et && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & rt) !== Ie;
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
    ), Kl = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), D0 = [];
    function L0() {
      for (var e = 0; e < D0.length; e++) {
        var t = D0[e];
        t._workInProgressVersionPrimary = null;
      }
      D0.length = 0;
    }
    function sk(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Se = v.ReactCurrentDispatcher, Up = v.ReactCurrentBatchConfig, N0, Kf;
    N0 = /* @__PURE__ */ new Set();
    var gc = ee, Qt = null, hr = null, mr = null, _m = !1, jp = !1, Fp = 0, ck = 0, fk = 25, ne = null, Ui = null, Zu = -1, M0 = !1;
    function Bt() {
      {
        var e = ne;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function ve() {
      {
        var e = ne;
        Ui !== null && (Zu++, Ui[Zu] !== e && dk(e));
      }
    }
    function Xf(e) {
      e != null && !Dt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function dk(e) {
      {
        var t = tt(Qt);
        if (!N0.has(t) && (N0.add(t), Ui !== null)) {
          for (var a = "", i = 30, o = 0; o <= Zu; o++) {
            for (var s = Ui[o], p = o === Zu ? e : s, y = o + 1 + ". " + s; y.length < i; )
              y += " ";
            y += p + `
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
    function A0(e, t) {
      if (M0)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!De(e[a], t[a]))
          return !1;
      return !0;
    }
    function Zf(e, t, a, i, o, s) {
      gc = s, Qt = t, Ui = e !== null ? e._debugHookTypes : null, Zu = -1, M0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? Se.current = RC : Ui !== null ? Se.current = wC : Se.current = CC;
      var p = a(i, o);
      if (jp) {
        var y = 0;
        do {
          if (jp = !1, Fp = 0, y >= fk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, M0 = !1, hr = null, mr = null, t.updateQueue = null, Zu = -1, Se.current = TC, p = a(i, o);
        } while (jp);
      }
      Se.current = Bm, t._debugHookTypes = Ui;
      var S = hr !== null && hr.next !== null;
      if (gc = ee, Qt = null, hr = null, mr = null, ne = null, Ui = null, Zu = -1, e !== null && (e.flags & fr) !== (t.flags & fr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ue) !== Ye && g("Internal React error: Expected static flag was missing. Please notify the React team."), _m = !1, S)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return p;
    }
    function Jf() {
      var e = Fp !== 0;
      return Fp = 0, e;
    }
    function nC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & $a) !== Ye ? t.flags &= ~(To | Ba | Jr | Ae) : t.flags &= ~(Jr | Ae), e.lanes = Gs(e.lanes, a);
    }
    function rC() {
      if (Se.current = Bm, _m) {
        for (var e = Qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        _m = !1;
      }
      gc = ee, Qt = null, hr = null, mr = null, Ui = null, Zu = -1, ne = null, mC = !1, jp = !1, Fp = 0;
    }
    function Xl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? Qt.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function ji() {
      var e;
      if (hr === null) {
        var t = Qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = Qt.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? Qt.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function aC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function z0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function U0(e, t, a) {
      var i = Xl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var p = s.dispatch = mk.bind(null, Qt, s);
      return [i.memoizedState, p];
    }
    function j0(e, t, a) {
      var i = ji(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = hr, p = s.baseQueue, y = o.pending;
      if (y !== null) {
        if (p !== null) {
          var S = p.next, x = y.next;
          p.next = x, y.next = S;
        }
        s.baseQueue !== p && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = p = y, o.pending = null;
      }
      if (p !== null) {
        var b = p.next, A = s.baseState, N = null, $ = null, I = null, X = b;
        do {
          var we = X.lane;
          if (Ao(gc, we)) {
            if (I !== null) {
              var je = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              I = I.next = je;
            }
            if (X.hasEagerState)
              A = X.eagerState;
            else {
              var kt = X.action;
              A = e(A, kt);
            }
          } else {
            var We = {
              lane: we,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            I === null ? ($ = I = We, N = A) : I = I.next = We, Qt.lanes = ut(Qt.lanes, we), rv(we);
          }
          X = X.next;
        } while (X !== null && X !== b);
        I === null ? N = A : I.next = $, De(A, i.memoizedState) || Yp(), i.memoizedState = A, i.baseState = N, i.baseQueue = I, o.lastRenderedState = A;
      }
      var Rt = o.interleaved;
      if (Rt !== null) {
        var P = Rt;
        do {
          var Z = P.lane;
          Qt.lanes = ut(Qt.lanes, Z), rv(Z), P = P.next;
        } while (P !== Rt);
      } else
        p === null && (o.lanes = ee);
      var H = o.dispatch;
      return [i.memoizedState, H];
    }
    function F0(e, t, a) {
      var i = ji(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, p = o.pending, y = i.memoizedState;
      if (p !== null) {
        o.pending = null;
        var S = p.next, x = S;
        do {
          var b = x.action;
          y = e(y, b), x = x.next;
        } while (x !== S);
        De(y, i.memoizedState) || Yp(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), o.lastRenderedState = y;
      }
      return [y, s];
    }
    function ZN(e, t, a) {
    }
    function JN(e, t, a) {
    }
    function P0(e, t, a) {
      var i = Qt, o = Xl(), s, p = Ur();
      if (p) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Kf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      } else {
        if (s = t(), !Kf) {
          var y = t();
          De(s, y) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
        }
        var S = iy();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        qs(S, gc) || iC(i, t, s);
      }
      o.memoizedState = s;
      var x = {
        value: s,
        getSnapshot: t
      };
      return o.queue = x, Mm(oC.bind(null, i, x, e), [e]), i.flags |= Jr, Pp(pr | jr, lC.bind(null, i, x, s, t), void 0, null), s;
    }
    function Om(e, t, a) {
      var i = Qt, o = ji(), s = t();
      if (!Kf) {
        var p = t();
        De(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Kf = !0);
      }
      var y = o.memoizedState, S = !De(y, s);
      S && (o.memoizedState = s, Yp());
      var x = o.queue;
      if (Bp(oC.bind(null, i, x, e), [e]), x.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= Jr, Pp(pr | jr, lC.bind(null, i, x, s, t), void 0, null);
        var b = iy();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        qs(b, gc) || iC(i, t, s);
      }
      return s;
    }
    function iC(e, t, a) {
      e.flags |= Ro;
      var i = {
        getSnapshot: t,
        value: a
      }, o = Qt.updateQueue;
      if (o === null)
        o = aC(), Qt.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function lC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, uC(t) && sC(e);
    }
    function oC(e, t, a) {
      var i = function() {
        uC(t) && sC(e);
      };
      return a(i);
    }
    function uC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !De(a, i);
      } catch {
        return !0;
      }
    }
    function sC(e) {
      var t = Xa(e, Qe);
      t !== null && Er(t, e, Qe, an);
    }
    function Dm(e) {
      var t = Xl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: z0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = yk.bind(null, Qt, a);
      return [t.memoizedState, i];
    }
    function H0(e) {
      return j0(z0);
    }
    function B0(e) {
      return F0(z0);
    }
    function Pp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Qt.updateQueue;
      if (s === null)
        s = aC(), Qt.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var p = s.lastEffect;
        if (p === null)
          s.lastEffect = o.next = o;
        else {
          var y = p.next;
          p.next = o, o.next = y, s.lastEffect = o;
        }
      }
      return o;
    }
    function V0(e) {
      var t = Xl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Lm(e) {
      var t = ji();
      return t.memoizedState;
    }
    function Hp(e, t, a, i) {
      var o = Xl(), s = i === void 0 ? null : i;
      Qt.flags |= e, o.memoizedState = Pp(pr | t, a, void 0, s);
    }
    function Nm(e, t, a, i) {
      var o = ji(), s = i === void 0 ? null : i, p = void 0;
      if (hr !== null) {
        var y = hr.memoizedState;
        if (p = y.destroy, s !== null) {
          var S = y.deps;
          if (A0(s, S)) {
            o.memoizedState = Pp(t, a, p, s);
            return;
          }
        }
      }
      Qt.flags |= e, o.memoizedState = Pp(pr | t, a, p, s);
    }
    function Mm(e, t) {
      return (Qt.mode & $a) !== Ye ? Hp(To | Jr | Al, jr, e, t) : Hp(Jr | Al, jr, e, t);
    }
    function Bp(e, t) {
      return Nm(Jr, jr, e, t);
    }
    function $0(e, t) {
      return Hp(Ae, Kl, e, t);
    }
    function Am(e, t) {
      return Nm(Ae, Kl, e, t);
    }
    function I0(e, t) {
      var a = Ae;
      return a |= Ha, (Qt.mode & $a) !== Ye && (a |= Ba), Hp(a, vr, e, t);
    }
    function zm(e, t) {
      return Nm(Ae, vr, e, t);
    }
    function cC(e, t) {
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
    function Y0(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Ae;
      return o |= Ha, (Qt.mode & $a) !== Ye && (o |= Ba), Hp(o, vr, cC.bind(null, t, e), i);
    }
    function Um(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Nm(Ae, vr, cC.bind(null, t, e), i);
    }
    function pk(e, t) {
    }
    var jm = pk;
    function W0(e, t) {
      var a = Xl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Fm(e, t) {
      var a = ji(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (A0(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Q0(e, t) {
      var a = Xl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Pm(e, t) {
      var a = ji(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (A0(i, s))
          return o[0];
      }
      var p = e();
      return a.memoizedState = [p, i], p;
    }
    function q0(e) {
      var t = Xl();
      return t.memoizedState = e, e;
    }
    function fC(e) {
      var t = ji(), a = hr, i = a.memoizedState;
      return pC(t, i, e);
    }
    function dC(e) {
      var t = ji();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return pC(t, a, e);
    }
    function pC(e, t, a) {
      var i = !vh(gc);
      if (i) {
        if (!De(a, t)) {
          var o = yh();
          Qt.lanes = ut(Qt.lanes, o), rv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Yp()), e.memoizedState = a, a;
    }
    function vk(e, t, a) {
      var i = Ya();
      _n(ng(i, il)), e(!0);
      var o = Up.transition;
      Up.transition = {};
      var s = Up.transition;
      Up.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (_n(i), Up.transition = o, o === null && s._updatedFibers) {
          var p = s._updatedFibers.size;
          p > 10 && C("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function G0() {
      var e = Dm(!1), t = e[0], a = e[1], i = vk.bind(null, a), o = Xl();
      return o.memoizedState = i, [t, i];
    }
    function vC() {
      var e = H0(), t = e[0], a = ji(), i = a.memoizedState;
      return [t, i];
    }
    function hC() {
      var e = B0(), t = e[0], a = ji(), i = a.memoizedState;
      return [t, i];
    }
    var mC = !1;
    function hk() {
      return mC;
    }
    function K0() {
      var e = Xl(), t = iy(), a = t.identifierPrefix, i;
      if (Ur()) {
        var o = Ob();
        i = ":" + a + "R" + o;
        var s = Fp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var p = ck++;
        i = ":" + a + "r" + p.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Hm() {
      var e = ji(), t = e.memoizedState;
      return t;
    }
    function mk(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = rs(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (yC(e))
        gC(t, o);
      else {
        var s = z1(e, t, o, i);
        if (s !== null) {
          var p = Da();
          Er(s, e, i, p), SC(s, t, i);
        }
      }
      EC(e, i);
    }
    function yk(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = rs(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (yC(e))
        gC(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === ee && (s === null || s.lanes === ee)) {
          var p = t.lastRenderedReducer;
          if (p !== null) {
            var y;
            y = Se.current, Se.current = vl;
            try {
              var S = t.lastRenderedState, x = p(S, a);
              if (o.hasEagerState = !0, o.eagerState = x, De(x, S)) {
                Gb(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Se.current = y;
            }
          }
        }
        var b = z1(e, t, o, i);
        if (b !== null) {
          var A = Da();
          Er(b, e, i, A), SC(b, t, i);
        }
      }
      EC(e, i);
    }
    function yC(e) {
      var t = e.alternate;
      return e === Qt || t !== null && t === Qt;
    }
    function gC(e, t) {
      jp = _m = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function SC(e, t, a) {
      if (Qd(a)) {
        var i = t.lanes;
        i = sf(i, e.pendingLanes);
        var o = ut(i, a);
        t.lanes = o, qd(e, o);
      }
    }
    function EC(e, t, a) {
      Wc(e, t);
    }
    var Bm = {
      readContext: rr,
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
      unstable_isNewReconciler: be
    }, CC = null, wC = null, RC = null, TC = null, Zl = null, vl = null, Vm = null;
    {
      var X0 = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, at = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      CC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Bt(), Xf(t), W0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Bt(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Bt(), Xf(t), Mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Bt(), Xf(a), Y0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Bt(), Xf(t), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Bt(), Xf(t), I0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Bt(), Xf(t);
          var a = Se.current;
          Se.current = Zl;
          try {
            return Q0(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Bt();
          var i = Se.current;
          Se.current = Zl;
          try {
            return U0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Bt(), V0(e);
        },
        useState: function(e) {
          ne = "useState", Bt();
          var t = Se.current;
          Se.current = Zl;
          try {
            return Dm(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Bt(), q0(e);
        },
        useTransition: function() {
          return ne = "useTransition", Bt(), G0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Bt(), P0(e, t, a);
        },
        useId: function() {
          return ne = "useId", Bt(), K0();
        },
        unstable_isNewReconciler: be
      }, wC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ve(), W0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ve(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ve(), Mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ve(), Y0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ve(), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ve(), I0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ve();
          var a = Se.current;
          Se.current = Zl;
          try {
            return Q0(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ve();
          var i = Se.current;
          Se.current = Zl;
          try {
            return U0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ve(), V0(e);
        },
        useState: function(e) {
          ne = "useState", ve();
          var t = Se.current;
          Se.current = Zl;
          try {
            return Dm(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ve(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ve(), q0(e);
        },
        useTransition: function() {
          return ne = "useTransition", ve(), G0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ve(), P0(e, t, a);
        },
        useId: function() {
          return ne = "useId", ve(), K0();
        },
        unstable_isNewReconciler: be
      }, RC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ve(), Fm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ve(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ve(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ve(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ve(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ve(), zm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ve();
          var a = Se.current;
          Se.current = vl;
          try {
            return Pm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ve();
          var i = Se.current;
          Se.current = vl;
          try {
            return j0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ve(), Lm();
        },
        useState: function(e) {
          ne = "useState", ve();
          var t = Se.current;
          Se.current = vl;
          try {
            return H0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ve(), jm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ve(), fC(e);
        },
        useTransition: function() {
          return ne = "useTransition", ve(), vC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ve(), Om(e, t);
        },
        useId: function() {
          return ne = "useId", ve(), Hm();
        },
        unstable_isNewReconciler: be
      }, TC = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ve(), Fm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ve(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ve(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ve(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ve(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ve(), zm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ve();
          var a = Se.current;
          Se.current = Vm;
          try {
            return Pm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ve();
          var i = Se.current;
          Se.current = Vm;
          try {
            return F0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ve(), Lm();
        },
        useState: function(e) {
          ne = "useState", ve();
          var t = Se.current;
          Se.current = Vm;
          try {
            return B0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ve(), jm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ve(), dC(e);
        },
        useTransition: function() {
          return ne = "useTransition", ve(), hC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ve(), Om(e, t);
        },
        useId: function() {
          return ne = "useId", ve(), Hm();
        },
        unstable_isNewReconciler: be
      }, Zl = {
        readContext: function(e) {
          return X0(), rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", at(), Bt(), W0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", at(), Bt(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", at(), Bt(), Mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", at(), Bt(), Y0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", at(), Bt(), $0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", at(), Bt(), I0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", at(), Bt();
          var a = Se.current;
          Se.current = Zl;
          try {
            return Q0(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", at(), Bt();
          var i = Se.current;
          Se.current = Zl;
          try {
            return U0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", at(), Bt(), V0(e);
        },
        useState: function(e) {
          ne = "useState", at(), Bt();
          var t = Se.current;
          Se.current = Zl;
          try {
            return Dm(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", at(), Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", at(), Bt(), q0(e);
        },
        useTransition: function() {
          return ne = "useTransition", at(), Bt(), G0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", at(), Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", at(), Bt(), P0(e, t, a);
        },
        useId: function() {
          return ne = "useId", at(), Bt(), K0();
        },
        unstable_isNewReconciler: be
      }, vl = {
        readContext: function(e) {
          return X0(), rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", at(), ve(), Fm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", at(), ve(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", at(), ve(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", at(), ve(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", at(), ve(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", at(), ve(), zm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", at(), ve();
          var a = Se.current;
          Se.current = vl;
          try {
            return Pm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", at(), ve();
          var i = Se.current;
          Se.current = vl;
          try {
            return j0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", at(), ve(), Lm();
        },
        useState: function(e) {
          ne = "useState", at(), ve();
          var t = Se.current;
          Se.current = vl;
          try {
            return H0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", at(), ve(), jm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", at(), ve(), fC(e);
        },
        useTransition: function() {
          return ne = "useTransition", at(), ve(), vC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", at(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", at(), ve(), Om(e, t);
        },
        useId: function() {
          return ne = "useId", at(), ve(), Hm();
        },
        unstable_isNewReconciler: be
      }, Vm = {
        readContext: function(e) {
          return X0(), rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", at(), ve(), Fm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", at(), ve(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", at(), ve(), Bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", at(), ve(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", at(), ve(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", at(), ve(), zm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", at(), ve();
          var a = Se.current;
          Se.current = vl;
          try {
            return Pm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", at(), ve();
          var i = Se.current;
          Se.current = vl;
          try {
            return F0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", at(), ve(), Lm();
        },
        useState: function(e) {
          ne = "useState", at(), ve();
          var t = Se.current;
          Se.current = vl;
          try {
            return B0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", at(), ve(), jm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", at(), ve(), dC(e);
        },
        useTransition: function() {
          return ne = "useTransition", at(), ve(), hC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", at(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", at(), ve(), Om(e, t);
        },
        useId: function() {
          return ne = "useId", at(), ve(), Hm();
        },
        unstable_isNewReconciler: be
      };
    }
    var Ju = c.unstable_now, xC = 0, $m = -1, Vp = -1, Im = -1, Z0 = !1, Ym = !1;
    function bC() {
      return Z0;
    }
    function gk() {
      Ym = !0;
    }
    function Sk() {
      Z0 = !1, Ym = !1;
    }
    function Ek() {
      Z0 = Ym, Ym = !1;
    }
    function kC() {
      return xC;
    }
    function _C() {
      xC = Ju();
    }
    function J0(e) {
      Vp = Ju(), e.actualStartTime < 0 && (e.actualStartTime = Ju());
    }
    function OC(e) {
      Vp = -1;
    }
    function Wm(e, t) {
      if (Vp >= 0) {
        var a = Ju() - Vp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Vp = -1;
      }
    }
    function Jl(e) {
      if ($m >= 0) {
        var t = Ju() - $m;
        $m = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Y:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case mt:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function eS(e) {
      if (Im >= 0) {
        var t = Ju() - Im;
        Im = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Y:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case mt:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function eo() {
      $m = Ju();
    }
    function tS() {
      Im = Ju();
    }
    function nS(e) {
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
    function rS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Ck(e, t) {
      return !0;
    }
    function aS(e, t) {
      try {
        var a = Ck(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, p = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === z)
            return;
          console.error(i);
        }
        var y = o ? tt(o) : null, S = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === Y)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var b = tt(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + b + ".");
        }
        var A = S + `
` + p + `

` + ("" + x);
        console.error(A);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var wk = typeof WeakMap == "function" ? WeakMap : Map;
    function DC(e, t, a) {
      var i = Qo(an, a);
      i.tag = a0, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        vO(o), aS(e, t);
      }, i;
    }
    function iS(e, t, a) {
      var i = Qo(an, a);
      i.tag = a0;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          Bw(e), aS(e, t);
        };
      }
      var p = e.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
        Bw(e), aS(e, t), typeof o != "function" && dO(this);
        var S = t.value, x = t.stack;
        this.componentDidCatch(S, {
          componentStack: x !== null ? x : ""
        }), typeof o != "function" && (oa(e.lanes, Qe) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", tt(e) || "Unknown"));
      }), i;
    }
    function LC(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new wk(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = hO.bind(null, e, t, a);
        ba && av(e, a), t.then(s, s);
      }
    }
    function Rk(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function Tk(e, t) {
      var a = e.tag;
      if ((e.mode & Ue) === Ye && (a === Q || a === _e || a === Ze)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function NC(e) {
      var t = e;
      do {
        if (t.tag === xe && uk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function MC(e, t, a, i, o) {
      if ((e.mode & Ue) === Ye) {
        if (e === t)
          e.flags |= cr;
        else {
          if (e.flags |= rt, a.flags |= Pc, a.flags &= ~(eh | Ml), a.tag === z) {
            var s = a.alternate;
            if (s === null)
              a.tag = vn;
            else {
              var p = Qo(an, Qe);
              p.tag = mm, Gu(a, p, Qe);
            }
          }
          a.lanes = ut(a.lanes, Qe);
        }
        return e;
      }
      return e.flags |= cr, e.lanes = o, e;
    }
    function xk(e, t, a, i, o) {
      if (a.flags |= Ml, ba && av(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Tk(a), Ur() && a.mode & Ue && R1();
        var p = NC(t);
        if (p !== null) {
          p.flags &= ~Mr, MC(p, t, a, e, o), p.mode & Ue && LC(e, s, o), Rk(p, e, s);
          return;
        } else {
          if (!Wd(o)) {
            LC(e, s, o), FS();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (Ur() && a.mode & Ue) {
        R1();
        var S = NC(t);
        if (S !== null) {
          (S.flags & cr) === Ie && (S.flags |= Mr), MC(S, t, a, e, o), Xg(Sc(i, a));
          return;
        }
      }
      i = Sc(i, a), aO(i);
      var x = t;
      do {
        switch (x.tag) {
          case Y: {
            var b = i;
            x.flags |= cr;
            var A = bu(o);
            x.lanes = ut(x.lanes, A);
            var N = DC(x, b, A);
            o0(x, N);
            return;
          }
          case z:
            var $ = i, I = x.type, X = x.stateNode;
            if ((x.flags & rt) === Ie && (typeof I.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !Nw(X))) {
              x.flags |= cr;
              var we = bu(o);
              x.lanes = ut(x.lanes, we);
              var We = iS(x, $, we);
              o0(x, We);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function bk() {
      return null;
    }
    var $p = v.ReactCurrentOwner, hl = !1, lS, Ip, oS, uS, sS, Ec, cS, Qm;
    lS = {}, Ip = {}, oS = {}, uS = {}, sS = {}, Ec = !1, cS = {}, Qm = {};
    function _a(e, t, a, i) {
      e === null ? t.child = X1(t, null, a, i) : t.child = Wf(t, e.child, a, i);
    }
    function kk(e, t, a, i) {
      t.child = Wf(t, e.child, null, i), t.child = Wf(t, null, a, i);
    }
    function AC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && sl(
          s,
          i,
          // Resolved props
          "prop",
          Ot(a)
        );
      }
      var p = a.render, y = t.ref, S, x;
      Yf(t, o), gu(t);
      {
        if ($p.current = t, sr(!0), S = Zf(e, t, p, i, y, o), x = Jf(), t.mode & bn) {
          rn(!0);
          try {
            S = Zf(e, t, p, i, y, o), x = Jf();
          } finally {
            rn(!1);
          }
        }
        sr(!1);
      }
      return bo(), e !== null && !hl ? (nC(e, t, o), qo(e, t, o)) : (Ur() && x && Yg(t), t.flags |= fi, _a(e, t, S, o), t.child);
    }
    function zC(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (NO(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var p = s;
          return p = od(s), t.tag = Ze, t.type = p, pS(t, s), UC(e, t, p, i, o);
        }
        {
          var y = s.propTypes;
          y && sl(
            y,
            i,
            // Resolved props
            "prop",
            Ot(s)
          );
        }
        var S = GS(a.type, null, i, t, t.mode, o);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var x = a.type, b = x.propTypes;
        b && sl(
          b,
          i,
          // Resolved props
          "prop",
          Ot(x)
        );
      }
      var A = e.child, N = SS(e, o);
      if (!N) {
        var $ = A.memoizedProps, I = a.compare;
        if (I = I !== null ? I : Ke, I($, i) && e.ref === t.ref)
          return qo(e, t, o);
      }
      t.flags |= fi;
      var X = xc(A, i);
      return X.ref = t.ref, X.return = t, t.child = X, X;
    }
    function UC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Be) {
          var p = s, y = p._payload, S = p._init;
          try {
            s = S(y);
          } catch {
            s = null;
          }
          var x = s && s.propTypes;
          x && sl(
            x,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ot(s)
          );
        }
      }
      if (e !== null) {
        var b = e.memoizedProps;
        if (Ke(b, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (hl = !1, t.pendingProps = i = b, SS(e, o))
            (e.flags & Pc) !== Ie && (hl = !0);
          else
            return t.lanes = e.lanes, qo(e, t, o);
      }
      return fS(e, t, a, i, o);
    }
    function jC(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || te)
        if ((t.mode & Ue) === Ye) {
          var p = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = p, ly(t, a);
        } else if (oa(a, ka)) {
          var A = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = A;
          var N = s !== null ? s.baseLanes : a;
          ly(t, N);
        } else {
          var y = null, S;
          if (s !== null) {
            var x = s.baseLanes;
            S = ut(x, a);
          } else
            S = a;
          t.lanes = t.childLanes = ka;
          var b = {
            baseLanes: S,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = b, t.updateQueue = null, ly(t, S), null;
        }
      else {
        var $;
        s !== null ? ($ = ut(s.baseLanes, a), t.memoizedState = null) : $ = a, ly(t, $);
      }
      return _a(e, t, o, a), t.child;
    }
    function _k(e, t, a) {
      var i = t.pendingProps;
      return _a(e, t, i, a), t.child;
    }
    function Ok(e, t, a) {
      var i = t.pendingProps.children;
      return _a(e, t, i, a), t.child;
    }
    function Dk(e, t, a) {
      {
        t.flags |= Ae;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return _a(e, t, s, a), t.child;
    }
    function FC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ra, t.flags |= xi);
    }
    function fS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && sl(
          s,
          i,
          // Resolved props
          "prop",
          Ot(a)
        );
      }
      var p;
      {
        var y = Pf(t, a, !0);
        p = Hf(t, y);
      }
      var S, x;
      Yf(t, o), gu(t);
      {
        if ($p.current = t, sr(!0), S = Zf(e, t, a, i, p, o), x = Jf(), t.mode & bn) {
          rn(!0);
          try {
            S = Zf(e, t, a, i, p, o), x = Jf();
          } finally {
            rn(!1);
          }
        }
        sr(!1);
      }
      return bo(), e !== null && !hl ? (nC(e, t, o), qo(e, t, o)) : (Ur() && x && Yg(t), t.flags |= fi, _a(e, t, S, o), t.child);
    }
    function PC(e, t, a, i, o) {
      {
        switch (QO(t)) {
          case !1: {
            var s = t.stateNode, p = t.type, y = new p(t.memoizedProps, s.context), S = y.state;
            s.updater.enqueueSetState(s, S, null);
            break;
          }
          case !0: {
            t.flags |= rt, t.flags |= cr;
            var x = new Error("Simulated error coming from DevTools"), b = bu(o);
            t.lanes = ut(t.lanes, b);
            var A = iS(t, Sc(x, t), b);
            o0(t, A);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var N = a.propTypes;
          N && sl(
            N,
            i,
            // Resolved props
            "prop",
            Ot(a)
          );
        }
      }
      var $;
      Gl(a) ? ($ = !0, im(t)) : $ = !1, Yf(t, o);
      var I = t.stateNode, X;
      I === null ? (Gm(e, t), W1(t, a, i), S0(t, a, i, o), X = !0) : e === null ? X = nk(t, a, i, o) : X = rk(e, t, a, i, o);
      var we = dS(e, t, a, X, $, o);
      {
        var We = t.stateNode;
        X && We.props !== i && (Ec || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", tt(t) || "a component"), Ec = !0);
      }
      return we;
    }
    function dS(e, t, a, i, o, s) {
      FC(e, t);
      var p = (t.flags & rt) !== Ie;
      if (!i && !p)
        return o && S1(t, a, !1), qo(e, t, s);
      var y = t.stateNode;
      $p.current = t;
      var S;
      if (p && typeof a.getDerivedStateFromError != "function")
        S = null, OC();
      else {
        gu(t);
        {
          if (sr(!0), S = y.render(), t.mode & bn) {
            rn(!0);
            try {
              y.render();
            } finally {
              rn(!1);
            }
          }
          sr(!1);
        }
        bo();
      }
      return t.flags |= fi, e !== null && p ? kk(e, t, S, s) : _a(e, t, S, s), t.memoizedState = y.state, o && S1(t, a, !0), t.child;
    }
    function HC(e) {
      var t = e.stateNode;
      t.pendingContext ? y1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && y1(e, t.context, !1), x0(e, t.containerInfo);
    }
    function Lk(e, t, a) {
      if (HC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      F1(e, t), Em(t, i, null, a);
      var p = t.memoizedState;
      t.stateNode;
      var y = p.element;
      if (o.isDehydrated) {
        var S = {
          element: y,
          isDehydrated: !1,
          cache: p.cache,
          pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
          transitions: p.transitions
        }, x = t.updateQueue;
        if (x.baseState = S, t.memoizedState = S, t.flags & Mr) {
          var b = Sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return BC(e, t, y, a, b);
        } else if (y !== s) {
          var A = Sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return BC(e, t, y, a, A);
        } else {
          zb(t);
          var N = X1(t, null, y, a);
          t.child = N;
          for (var $ = N; $; )
            $.flags = $.flags & ~Xt | Ti, $ = $.sibling;
        }
      } else {
        if ($f(), y === s)
          return qo(e, t, a);
        _a(e, t, y, a);
      }
      return t.child;
    }
    function BC(e, t, a, i, o) {
      return $f(), Xg(o), t.flags |= Mr, _a(e, t, a, i), t.child;
    }
    function Nk(e, t, a) {
      J1(t), e === null && Kg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, p = o.children, y = Lg(i, o);
      return y ? p = null : s !== null && Lg(i, s) && (t.flags |= Pa), FC(e, t), _a(e, t, p, a), t.child;
    }
    function Mk(e, t) {
      return e === null && Kg(t), null;
    }
    function Ak(e, t, a, i) {
      Gm(e, t);
      var o = t.pendingProps, s = a, p = s._payload, y = s._init, S = y(p);
      t.type = S;
      var x = t.tag = MO(S), b = dl(S, o), A;
      switch (x) {
        case Q:
          return pS(t, S), t.type = S = od(S), A = fS(null, t, S, b, i), A;
        case z:
          return t.type = S = $S(S), A = PC(null, t, S, b, i), A;
        case _e:
          return t.type = S = IS(S), A = AC(null, t, S, b, i), A;
        case yt: {
          if (t.type !== t.elementType) {
            var N = S.propTypes;
            N && sl(
              N,
              b,
              // Resolved for outer only
              "prop",
              Ot(S)
            );
          }
          return A = zC(
            null,
            t,
            S,
            dl(S.type, b),
            // The inner type can have defaults too
            i
          ), A;
        }
      }
      var $ = "";
      throw S !== null && typeof S == "object" && S.$$typeof === Be && ($ = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + $));
    }
    function zk(e, t, a, i, o) {
      Gm(e, t), t.tag = z;
      var s;
      return Gl(a) ? (s = !0, im(t)) : s = !1, Yf(t, o), W1(t, a, i), S0(t, a, i, o), dS(null, t, a, !0, s, o);
    }
    function Uk(e, t, a, i) {
      Gm(e, t);
      var o = t.pendingProps, s;
      {
        var p = Pf(t, a, !1);
        s = Hf(t, p);
      }
      Yf(t, i);
      var y, S;
      gu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = Ot(a) || "Unknown";
          lS[x] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), lS[x] = !0);
        }
        t.mode & bn && fl.recordLegacyContextWarning(t, null), sr(!0), $p.current = t, y = Zf(null, t, a, o, s, i), S = Jf(), sr(!1);
      }
      if (bo(), t.flags |= fi, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var b = Ot(a) || "Unknown";
        Ip[b] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Ip[b] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var A = Ot(a) || "Unknown";
          Ip[A] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), Ip[A] = !0);
        }
        t.tag = z, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return Gl(a) ? (N = !0, im(t)) : N = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, l0(t), Y1(t, y), S0(t, a, o, i), dS(null, t, a, !0, N, i);
      } else {
        if (t.tag = Q, t.mode & bn) {
          rn(!0);
          try {
            y = Zf(null, t, a, o, s, i), S = Jf();
          } finally {
            rn(!1);
          }
        }
        return Ur() && S && Yg(t), _a(null, t, y, i), pS(t, a), t.child;
      }
    }
    function pS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ua();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), sS[o] || (sS[o] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Ot(t) || "Unknown";
          uS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), uS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = Ot(t) || "Unknown";
          oS[y] || (g("%s: Function components do not support contextType.", y), oS[y] = !0);
        }
      }
    }
    var vS = {
      dehydrated: null,
      treeContext: null,
      retryLane: An
    };
    function hS(e) {
      return {
        baseLanes: e,
        cachePool: bk(),
        transitions: null
      };
    }
    function jk(e, t) {
      var a = null;
      return {
        baseLanes: ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Fk(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return _0(e, zp);
    }
    function Pk(e, t) {
      return Gs(e.childLanes, t);
    }
    function VC(e, t, a) {
      var i = t.pendingProps;
      qO(t) && (t.flags |= rt);
      var o = pl.current, s = !1, p = (t.flags & rt) !== Ie;
      if (p || Fk(o, e) ? (s = !0, t.flags &= ~rt) : (e === null || e.memoizedState !== null) && (o = ok(o, tC)), o = qf(o), Xu(t, o), e === null) {
        Kg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var S = y.dehydrated;
          if (S !== null)
            return Ik(t, S);
        }
        var x = i.children, b = i.fallback;
        if (s) {
          var A = Hk(t, x, b, a), N = t.child;
          return N.memoizedState = hS(a), t.memoizedState = vS, A;
        } else
          return mS(t, x);
      } else {
        var $ = e.memoizedState;
        if ($ !== null) {
          var I = $.dehydrated;
          if (I !== null)
            return Yk(e, t, p, i, I, $, a);
        }
        if (s) {
          var X = i.fallback, we = i.children, We = Vk(e, t, we, X, a), je = t.child, kt = e.child.memoizedState;
          return je.memoizedState = kt === null ? hS(a) : jk(kt, a), je.childLanes = Pk(e, a), t.memoizedState = vS, We;
        } else {
          var Rt = i.children, P = Bk(e, t, Rt, a);
          return t.memoizedState = null, P;
        }
      }
    }
    function mS(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = yS(o, i);
      return s.return = e, e.child = s, s;
    }
    function Hk(e, t, a, i) {
      var o = e.mode, s = e.child, p = {
        mode: "hidden",
        children: t
      }, y, S;
      return (o & Ue) === Ye && s !== null ? (y = s, y.childLanes = ee, y.pendingProps = p, e.mode & Lt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), S = is(a, o, i, null)) : (y = yS(p, o), S = is(a, o, i, null)), y.return = e, S.return = e, y.sibling = S, e.child = y, S;
    }
    function yS(e, t, a) {
      return $w(e, t, ee, null);
    }
    function $C(e, t) {
      return xc(e, t);
    }
    function Bk(e, t, a, i) {
      var o = e.child, s = o.sibling, p = $C(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ue) === Ye && (p.lanes = i), p.return = t, p.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= Mt) : y.push(s);
      }
      return t.child = p, p;
    }
    function Vk(e, t, a, i, o) {
      var s = t.mode, p = e.child, y = p.sibling, S = {
        mode: "hidden",
        children: a
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ue) === Ye && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== p
      ) {
        var b = t.child;
        x = b, x.childLanes = ee, x.pendingProps = S, t.mode & Lt && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = p.selfBaseDuration, x.treeBaseDuration = p.treeBaseDuration), t.deletions = null;
      } else
        x = $C(p, S), x.subtreeFlags = p.subtreeFlags & fr;
      var A;
      return y !== null ? A = xc(y, i) : (A = is(i, s, o, null), A.flags |= Xt), A.return = t, x.return = t, x.sibling = A, t.child = x, A;
    }
    function qm(e, t, a, i) {
      i !== null && Xg(i), Wf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, p = mS(t, s);
      return p.flags |= Xt, t.memoizedState = null, p;
    }
    function $k(e, t, a, i, o) {
      var s = t.mode, p = {
        mode: "visible",
        children: a
      }, y = yS(p, s), S = is(i, s, o, null);
      return S.flags |= Xt, y.return = t, S.return = t, y.sibling = S, t.child = y, (t.mode & Ue) !== Ye && Wf(t, e.child, null, o), S;
    }
    function Ik(e, t, a) {
      return (e.mode & Ue) === Ye ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Qe) : zg(t) ? e.lanes = kn : e.lanes = ka, null;
    }
    function Yk(e, t, a, i, o, s, p) {
      if (a)
        if (t.flags & Mr) {
          t.flags &= ~Mr;
          var P = rS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return qm(e, t, p, P);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= rt, null;
          var Z = i.children, H = i.fallback, se = $k(e, t, Z, H, p), Re = t.child;
          return Re.memoizedState = hS(p), t.memoizedState = vS, se;
        }
      else {
        if (Mb(), (t.mode & Ue) === Ye)
          return qm(
            e,
            t,
            p,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (zg(o)) {
          var y, S, x;
          {
            var b = Kx(o);
            y = b.digest, S = b.message, x = b.stack;
          }
          var A;
          S ? A = new Error(S) : A = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = rS(A, y, x);
          return qm(e, t, p, N);
        }
        var $ = oa(p, e.childLanes);
        if (hl || $) {
          var I = iy();
          if (I !== null) {
            var X = Eh(I, p);
            if (X !== An && X !== s.retryLane) {
              s.retryLane = X;
              var we = an;
              Xa(e, X), Er(I, e, X, we);
            }
          }
          FS();
          var We = rS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return qm(e, t, p, We);
        } else if (f1(o)) {
          t.flags |= rt, t.child = e.child;
          var je = mO.bind(null, e);
          return Xx(o, je), null;
        } else {
          Ub(t, o, s.treeContext);
          var kt = i.children, Rt = mS(t, kt);
          return Rt.flags |= Ti, Rt;
        }
      }
    }
    function IC(e, t, a) {
      e.lanes = ut(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ut(i.lanes, t)), n0(e.return, t, a);
    }
    function Wk(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === xe) {
          var o = i.memoizedState;
          o !== null && IC(i, a, e);
        } else if (i.tag === Et)
          IC(i, a, e);
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
    function Qk(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && km(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function qk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !cS[e])
        if (cS[e] = !0, typeof e == "string")
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
    function Gk(e, t) {
      e !== void 0 && !Qm[e] && (e !== "collapsed" && e !== "hidden" ? (Qm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Qm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function YC(e, t) {
      {
        var a = Dt(e), i = !a && typeof gi(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function Kk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Dt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!YC(e[a], a))
              return;
        } else {
          var i = gi(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), p = 0; !s.done; s = o.next()) {
                if (!YC(s.value, p))
                  return;
                p++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function gS(e, t, a, i, o) {
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
    function WC(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, p = i.children;
      qk(o), Gk(s, o), Kk(p, o), _a(e, t, p, a);
      var y = pl.current, S = _0(y, zp);
      if (S)
        y = O0(y, zp), t.flags |= rt;
      else {
        var x = e !== null && (e.flags & rt) !== Ie;
        x && Wk(t, t.child, a), y = qf(y);
      }
      if (Xu(t, y), (t.mode & Ue) === Ye)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var b = Qk(t.child), A;
            b === null ? (A = t.child, t.child = null) : (A = b.sibling, b.sibling = null), gS(
              t,
              !1,
              // isBackwards
              A,
              b,
              s
            );
            break;
          }
          case "backwards": {
            var N = null, $ = t.child;
            for (t.child = null; $ !== null; ) {
              var I = $.alternate;
              if (I !== null && km(I) === null) {
                t.child = $;
                break;
              }
              var X = $.sibling;
              $.sibling = N, N = $, $ = X;
            }
            gS(
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
            gS(
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
    function Xk(e, t, a) {
      x0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Wf(t, null, i, a) : _a(e, t, i, a), t.child;
    }
    var QC = !1;
    function Zk(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, p = t.memoizedProps, y = s.value;
      {
        "value" in s || QC || (QC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var S = t.type.propTypes;
        S && sl(S, s, "prop", "Context.Provider");
      }
      if (A1(t, o, y), p !== null) {
        var x = p.value;
        if (De(x, y)) {
          if (p.children === s.children && !rm())
            return qo(e, t, a);
        } else
          Wb(t, o, a);
      }
      var b = s.children;
      return _a(e, t, b, a), t.child;
    }
    var qC = !1;
    function Jk(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (qC || (qC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Yf(t, a);
      var p = rr(i);
      gu(t);
      var y;
      return $p.current = t, sr(!0), y = s(p), sr(!1), bo(), t.flags |= fi, _a(e, t, y, a), t.child;
    }
    function Yp() {
      hl = !0;
    }
    function Gm(e, t) {
      (t.mode & Ue) === Ye && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Xt);
    }
    function qo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), OC(), rv(t.lanes), oa(a, t.childLanes) ? (ak(e, t), t.child) : null;
    }
    function e_(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Mt) : s.push(e), a.flags |= Xt, a;
      }
    }
    function SS(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function t_(e, t, a) {
      switch (t.tag) {
        case Y:
          HC(t), t.stateNode, $f();
          break;
        case q:
          J1(t);
          break;
        case z: {
          var i = t.type;
          Gl(i) && im(t);
          break;
        }
        case oe:
          x0(t, t.stateNode.containerInfo);
          break;
        case Pe: {
          var o = t.memoizedProps.value, s = t.type._context;
          A1(t, s, o);
          break;
        }
        case mt:
          {
            var p = oa(a, t.childLanes);
            p && (t.flags |= Ae);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case xe: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return Xu(t, qf(pl.current)), t.flags |= rt, null;
            var x = t.child, b = x.childLanes;
            if (oa(a, b))
              return VC(e, t, a);
            Xu(t, qf(pl.current));
            var A = qo(e, t, a);
            return A !== null ? A.sibling : null;
          } else
            Xu(t, qf(pl.current));
          break;
        }
        case Et: {
          var N = (e.flags & rt) !== Ie, $ = oa(a, t.childLanes);
          if (N) {
            if ($)
              return WC(e, t, a);
            t.flags |= rt;
          }
          var I = t.memoizedState;
          if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), Xu(t, pl.current), $)
            break;
          return null;
        }
        case Ge:
        case nt:
          return t.lanes = ee, jC(e, t, a);
      }
      return qo(e, t, a);
    }
    function GC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return e_(e, t, GS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || rm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          hl = !0;
        else {
          var s = SS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & rt) === Ie)
            return hl = !1, t_(e, t, a);
          (e.flags & Pc) !== Ie ? hl = !0 : hl = !1;
        }
      } else if (hl = !1, Ur() && kb(t)) {
        var p = t.index, y = _b();
        w1(t, y, p);
      }
      switch (t.lanes = ee, t.tag) {
        case j:
          return Uk(e, t, t.type, a);
        case pn: {
          var S = t.elementType;
          return Ak(e, t, S, a);
        }
        case Q: {
          var x = t.type, b = t.pendingProps, A = t.elementType === x ? b : dl(x, b);
          return fS(e, t, x, A, a);
        }
        case z: {
          var N = t.type, $ = t.pendingProps, I = t.elementType === N ? $ : dl(N, $);
          return PC(e, t, N, I, a);
        }
        case Y:
          return Lk(e, t, a);
        case q:
          return Nk(e, t, a);
        case K:
          return Mk(e, t);
        case xe:
          return VC(e, t, a);
        case oe:
          return Xk(e, t, a);
        case _e: {
          var X = t.type, we = t.pendingProps, We = t.elementType === X ? we : dl(X, we);
          return AC(e, t, X, We, a);
        }
        case Te:
          return _k(e, t, a);
        case lt:
          return Ok(e, t, a);
        case mt:
          return Dk(e, t, a);
        case Pe:
          return Zk(e, t, a);
        case pt:
          return Jk(e, t, a);
        case yt: {
          var je = t.type, kt = t.pendingProps, Rt = dl(je, kt);
          if (t.type !== t.elementType) {
            var P = je.propTypes;
            P && sl(
              P,
              Rt,
              // Resolved for outer only
              "prop",
              Ot(je)
            );
          }
          return Rt = dl(je.type, Rt), zC(e, t, je, Rt, a);
        }
        case Ze:
          return UC(e, t, t.type, t.pendingProps, a);
        case vn: {
          var Z = t.type, H = t.pendingProps, se = t.elementType === Z ? H : dl(Z, H);
          return zk(e, t, Z, se, a);
        }
        case Et:
          return WC(e, t, a);
        case Gt:
          break;
        case Ge:
          return jC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ed(e) {
      e.flags |= Ae;
    }
    function KC(e) {
      e.flags |= Ra, e.flags |= xi;
    }
    var XC, ES, ZC, JC;
    XC = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === q || o.tag === K)
          Tx(e, o.stateNode);
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
    }, ES = function(e, t) {
    }, ZC = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var p = t.stateNode, y = b0(), S = bx(p, a, s, i, o, y);
        t.updateQueue = S, S && ed(t);
      }
    }, JC = function(e, t, a, i) {
      a !== i && ed(t);
    };
    function Wp(e, t) {
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
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ee, i = Ie;
      if (t) {
        if ((e.mode & Lt) !== Ye) {
          for (var S = e.selfBaseDuration, x = e.child; x !== null; )
            a = ut(a, ut(x.lanes, x.childLanes)), i |= x.subtreeFlags & fr, i |= x.flags & fr, S += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = S;
        } else
          for (var b = e.child; b !== null; )
            a = ut(a, ut(b.lanes, b.childLanes)), i |= b.subtreeFlags & fr, i |= b.flags & fr, b.return = e, b = b.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Lt) !== Ye) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, p = e.child; p !== null; )
            a = ut(a, ut(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, o += p.actualDuration, s += p.treeBaseDuration, p = p.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var y = e.child; y !== null; )
            a = ut(a, ut(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function n_(e, t, a) {
      if (Bb() && (t.mode & Ue) !== Ye && (t.flags & rt) === Ie)
        return O1(t), $f(), t.flags |= Mr | Ml | cr, !1;
      var i = cm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Pb(t), Fr(t), (t.mode & Lt) !== Ye) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if ($f(), (t.flags & rt) === Ie && (t.memoizedState = null), t.flags |= Ae, Fr(t), (t.mode & Lt) !== Ye) {
            var p = a !== null;
            if (p) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return D1(), !0;
    }
    function ew(e, t, a) {
      var i = t.pendingProps;
      switch (Wg(t), t.tag) {
        case j:
        case pn:
        case Ze:
        case Q:
        case _e:
        case Te:
        case lt:
        case mt:
        case pt:
        case yt:
          return Fr(t), null;
        case z: {
          var o = t.type;
          return Gl(o) && am(t), Fr(t), null;
        }
        case Y: {
          var s = t.stateNode;
          if (Qf(t), Vg(t), L0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var p = cm(t);
            if (p)
              ed(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Mr) !== Ie) && (t.flags |= Vn, D1());
            }
          }
          return ES(e, t), Fr(t), null;
        }
        case q: {
          k0(t);
          var S = Z1(), x = t.type;
          if (e !== null && t.stateNode != null)
            ZC(e, t, x, i, S), e.ref !== t.ref && KC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var b = b0(), A = cm(t);
            if (A)
              jb(t, S, b) && ed(t);
            else {
              var N = Rx(x, i, S, b, t);
              XC(N, t, !1, !1), t.stateNode = N, xx(N, x, i, S) && ed(t);
            }
            t.ref !== null && KC(t);
          }
          return Fr(t), null;
        }
        case K: {
          var $ = i;
          if (e && t.stateNode != null) {
            var I = e.memoizedProps;
            JC(e, t, I, $);
          } else {
            if (typeof $ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = Z1(), we = b0(), We = cm(t);
            We ? Fb(t) && ed(t) : t.stateNode = kx($, X, we, t);
          }
          return Fr(t), null;
        }
        case xe: {
          Gf(t);
          var je = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var kt = n_(e, t, je);
            if (!kt)
              return t.flags & cr ? t : null;
          }
          if ((t.flags & rt) !== Ie)
            return t.lanes = a, (t.mode & Lt) !== Ye && nS(t), t;
          var Rt = je !== null, P = e !== null && e.memoizedState !== null;
          if (Rt !== P && Rt) {
            var Z = t.child;
            if (Z.flags |= Nl, (t.mode & Ue) !== Ye) {
              var H = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Ee);
              H || _0(pl.current, tC) ? rO() : FS();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= Ae), Fr(t), (t.mode & Lt) !== Ye && Rt) {
            var Re = t.child;
            Re !== null && (t.treeBaseDuration -= Re.treeBaseDuration);
          }
          return null;
        }
        case oe:
          return Qf(t), ES(e, t), e === null && Eb(t.stateNode.containerInfo), Fr(t), null;
        case Pe:
          var ye = t.type._context;
          return t0(ye, t), Fr(t), null;
        case vn: {
          var et = t.type;
          return Gl(et) && am(t), Fr(t), null;
        }
        case Et: {
          Gf(t);
          var it = t.memoizedState;
          if (it === null)
            return Fr(t), null;
          var qt = (t.flags & rt) !== Ie, zt = it.rendering;
          if (zt === null)
            if (qt)
              Wp(it, !1);
            else {
              var Xn = iO() && (e === null || (e.flags & rt) === Ie);
              if (!Xn)
                for (var Ut = t.child; Ut !== null; ) {
                  var In = km(Ut);
                  if (In !== null) {
                    qt = !0, t.flags |= rt, Wp(it, !1);
                    var da = In.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= Ae), t.subtreeFlags = Ie, ik(t, a), Xu(t, O0(pl.current, zp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              it.tail !== null && $n() > Cw() && (t.flags |= rt, qt = !0, Wp(it, !1), t.lanes = Id);
            }
          else {
            if (!qt) {
              var $r = km(zt);
              if ($r !== null) {
                t.flags |= rt, qt = !0;
                var hi = $r.updateQueue;
                if (hi !== null && (t.updateQueue = hi, t.flags |= Ae), Wp(it, !0), it.tail === null && it.tailMode === "hidden" && !zt.alternate && !Ur())
                  return Fr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                $n() * 2 - it.renderingStartTime > Cw() && a !== ka && (t.flags |= rt, qt = !0, Wp(it, !1), t.lanes = Id);
            }
            if (it.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var La = it.last;
              La !== null ? La.sibling = zt : t.child = zt, it.last = zt;
            }
          }
          if (it.tail !== null) {
            var Na = it.tail;
            it.rendering = Na, it.tail = Na.sibling, it.renderingStartTime = $n(), Na.sibling = null;
            var pa = pl.current;
            return qt ? pa = O0(pa, zp) : pa = qf(pa), Xu(t, pa), Na;
          }
          return Fr(t), null;
        }
        case Gt:
          break;
        case Ge:
        case nt: {
          jS(t);
          var Jo = t.memoizedState, ud = Jo !== null;
          if (e !== null) {
            var uv = e.memoizedState, ro = uv !== null;
            ro !== ud && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !te && (t.flags |= Nl);
          }
          return !ud || (t.mode & Ue) === Ye ? Fr(t) : oa(no, ka) && (Fr(t), t.subtreeFlags & (Xt | Ae) && (t.flags |= Nl)), null;
        }
        case Je:
          return null;
        case Ve:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function r_(e, t, a) {
      switch (Wg(t), t.tag) {
        case z: {
          var i = t.type;
          Gl(i) && am(t);
          var o = t.flags;
          return o & cr ? (t.flags = o & ~cr | rt, (t.mode & Lt) !== Ye && nS(t), t) : null;
        }
        case Y: {
          t.stateNode, Qf(t), Vg(t), L0();
          var s = t.flags;
          return (s & cr) !== Ie && (s & rt) === Ie ? (t.flags = s & ~cr | rt, t) : null;
        }
        case q:
          return k0(t), null;
        case xe: {
          Gf(t);
          var p = t.memoizedState;
          if (p !== null && p.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            $f();
          }
          var y = t.flags;
          return y & cr ? (t.flags = y & ~cr | rt, (t.mode & Lt) !== Ye && nS(t), t) : null;
        }
        case Et:
          return Gf(t), null;
        case oe:
          return Qf(t), null;
        case Pe:
          var S = t.type._context;
          return t0(S, t), null;
        case Ge:
        case nt:
          return jS(t), null;
        case Je:
          return null;
        default:
          return null;
      }
    }
    function tw(e, t, a) {
      switch (Wg(t), t.tag) {
        case z: {
          var i = t.type.childContextTypes;
          i != null && am(t);
          break;
        }
        case Y: {
          t.stateNode, Qf(t), Vg(t), L0();
          break;
        }
        case q: {
          k0(t);
          break;
        }
        case oe:
          Qf(t);
          break;
        case xe:
          Gf(t);
          break;
        case Et:
          Gf(t);
          break;
        case Pe:
          var o = t.type._context;
          t0(o, t);
          break;
        case Ge:
        case nt:
          jS(t);
          break;
      }
    }
    var nw = null;
    nw = /* @__PURE__ */ new Set();
    var Km = !1, Pr = !1, a_ = typeof WeakSet == "function" ? WeakSet : Set, Le = null, td = null, nd = null;
    function i_(e) {
      ci(null, function() {
        throw e;
      }), tl();
    }
    var l_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Lt)
        try {
          eo(), t.componentWillUnmount();
        } finally {
          Jl(e);
        }
      else
        t.componentWillUnmount();
    };
    function rw(e, t) {
      try {
        es(vr, e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function CS(e, t, a) {
      try {
        l_(e, a);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function o_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dn(e, t, i);
      }
    }
    function aw(e, t) {
      try {
        lw(e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function rd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ct && ht && e.mode & Lt)
              try {
                eo(), i = a(null);
              } finally {
                Jl(e);
              }
            else
              i = a(null);
          } catch (o) {
            dn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", tt(e));
        } else
          a.current = null;
    }
    function Xm(e, t, a) {
      try {
        a();
      } catch (i) {
        dn(e, t, i);
      }
    }
    var iw = !1;
    function u_(e, t) {
      Cx(e.containerInfo), Le = t, s_();
      var a = iw;
      return iw = !1, a;
    }
    function s_() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        (e.subtreeFlags & ea) !== Ie && t !== null ? (t.return = e, Le = t) : c_();
      }
    }
    function c_() {
      for (; Le !== null; ) {
        var e = Le;
        Sn(e);
        try {
          f_(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function f_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Vn) !== Ie) {
        switch (Sn(e), e.tag) {
          case Q:
          case _e:
          case Ze:
            break;
          case z: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ec && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", tt(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", tt(e) || "instance"));
              var p = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : dl(e.type, i), o);
              {
                var y = nw;
                p === void 0 && !y.has(e.type) && (y.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", tt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          }
          case Y: {
            {
              var S = e.stateNode;
              Wx(S.containerInfo);
            }
            break;
          }
          case q:
          case K:
          case oe:
          case vn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        un();
      }
    }
    function ml(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, p = s;
        do {
          if ((p.tag & e) === e) {
            var y = p.destroy;
            p.destroy = void 0, y !== void 0 && ((e & jr) !== Za ? lh(t) : (e & vr) !== Za && Su(t), (e & Kl) !== Za && iv(!0), Xm(t, a, y), (e & Kl) !== Za && iv(!1), (e & jr) !== Za ? oh() : (e & vr) !== Za && Fs());
          }
          p = p.next;
        } while (p !== s);
      }
    }
    function es(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & jr) !== Za ? Hd(t) : (e & vr) !== Za && uh(t);
            var p = s.create;
            (e & Kl) !== Za && iv(!0), s.destroy = p(), (e & Kl) !== Za && iv(!1), (e & jr) !== Za ? Yc() : (e & vr) !== Za && Bd();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var S = void 0;
                (s.tag & vr) !== Ie ? S = "useLayoutEffect" : (s.tag & Kl) !== Ie ? S = "useInsertionEffect" : S = "useEffect";
                var x = void 0;
                y === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? x = `

It looks like you wrote ` + S + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + S + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + y, g("%s must not return anything besides a function, which is used for clean-up.%s", S, x);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function d_(e, t) {
      if ((t.flags & Ae) !== Ie)
        switch (t.tag) {
          case mt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, p = kC(), y = t.alternate === null ? "mount" : "update";
            bC() && (y = "nested-update"), typeof s == "function" && s(o, y, a, p);
            var S = t.return;
            e:
              for (; S !== null; ) {
                switch (S.tag) {
                  case Y:
                    var x = S.stateNode;
                    x.passiveEffectDuration += a;
                    break e;
                  case mt:
                    var b = S.stateNode;
                    b.passiveEffectDuration += a;
                    break e;
                }
                S = S.return;
              }
            break;
          }
        }
    }
    function p_(e, t, a, i) {
      if ((a.flags & di) !== Ie)
        switch (a.tag) {
          case Q:
          case _e:
          case Ze: {
            if (!Pr)
              if (a.mode & Lt)
                try {
                  eo(), es(vr | pr, a);
                } finally {
                  Jl(a);
                }
              else
                es(vr | pr, a);
            break;
          }
          case z: {
            var o = a.stateNode;
            if (a.flags & Ae && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", tt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", tt(a) || "instance")), a.mode & Lt)
                  try {
                    eo(), o.componentDidMount();
                  } finally {
                    Jl(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : dl(a.type, t.memoizedProps), p = t.memoizedState;
                if (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", tt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", tt(a) || "instance")), a.mode & Lt)
                  try {
                    eo(), o.componentDidUpdate(s, p, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Jl(a);
                  }
                else
                  o.componentDidUpdate(s, p, o.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", tt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", tt(a) || "instance")), H1(a, y, o));
            break;
          }
          case Y: {
            var S = a.updateQueue;
            if (S !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case q:
                    x = a.child.stateNode;
                    break;
                  case z:
                    x = a.child.stateNode;
                    break;
                }
              H1(a, S, x);
            }
            break;
          }
          case q: {
            var b = a.stateNode;
            if (t === null && a.flags & Ae) {
              var A = a.type, N = a.memoizedProps;
              Nx(b, A, N);
            }
            break;
          }
          case K:
            break;
          case oe:
            break;
          case mt: {
            {
              var $ = a.memoizedProps, I = $.onCommit, X = $.onRender, we = a.stateNode.effectDuration, We = kC(), je = t === null ? "mount" : "update";
              bC() && (je = "nested-update"), typeof X == "function" && X(a.memoizedProps.id, je, a.actualDuration, a.treeBaseDuration, a.actualStartTime, We);
              {
                typeof I == "function" && I(a.memoizedProps.id, je, we, We), cO(a);
                var kt = a.return;
                e:
                  for (; kt !== null; ) {
                    switch (kt.tag) {
                      case Y:
                        var Rt = kt.stateNode;
                        Rt.effectDuration += we;
                        break e;
                      case mt:
                        var P = kt.stateNode;
                        P.effectDuration += we;
                        break e;
                    }
                    kt = kt.return;
                  }
              }
            }
            break;
          }
          case xe: {
            C_(e, a);
            break;
          }
          case Et:
          case vn:
          case Gt:
          case Ge:
          case nt:
          case Ve:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Ra && lw(a);
    }
    function v_(e) {
      switch (e.tag) {
        case Q:
        case _e:
        case Ze: {
          if (e.mode & Lt)
            try {
              eo(), rw(e, e.return);
            } finally {
              Jl(e);
            }
          else
            rw(e, e.return);
          break;
        }
        case z: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && o_(e, e.return, t), aw(e, e.return);
          break;
        }
        case q: {
          aw(e, e.return);
          break;
        }
      }
    }
    function h_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === q) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Vx(o) : Ix(i.stateNode, i.memoizedProps);
            } catch (p) {
              dn(e, e.return, p);
            }
          }
        } else if (i.tag === K) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? $x(s) : Yx(s, i.memoizedProps);
            } catch (p) {
              dn(e, e.return, p);
            }
        } else if (!((i.tag === Ge || i.tag === nt) && i.memoizedState !== null && i !== e)) {
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
    function lw(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & Lt)
            try {
              eo(), o = t(i);
            } finally {
              Jl(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", tt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", tt(e)), t.current = i;
      }
    }
    function m_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function ow(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ow(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
          var a = e.stateNode;
          a !== null && Rb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function y_(e) {
      for (var t = e.return; t !== null; ) {
        if (uw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function uw(e) {
      return e.tag === q || e.tag === Y || e.tag === oe;
    }
    function sw(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || uw(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== K && t.tag !== Wt; ) {
            if (t.flags & Xt || t.child === null || t.tag === oe)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Xt))
            return t.stateNode;
        }
    }
    function g_(e) {
      var t = y_(e);
      switch (t.tag) {
        case q: {
          var a = t.stateNode;
          t.flags & Pa && (c1(a), t.flags &= ~Pa);
          var i = sw(e);
          RS(e, i, a);
          break;
        }
        case Y:
        case oe: {
          var o = t.stateNode.containerInfo, s = sw(e);
          wS(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, o = i === q || i === K;
      if (o) {
        var s = e.stateNode;
        t ? Fx(a, s, t) : Ux(a, s);
      } else if (i !== oe) {
        var p = e.child;
        if (p !== null) {
          wS(p, t, a);
          for (var y = p.sibling; y !== null; )
            wS(y, t, a), y = y.sibling;
        }
      }
    }
    function RS(e, t, a) {
      var i = e.tag, o = i === q || i === K;
      if (o) {
        var s = e.stateNode;
        t ? jx(a, s, t) : zx(a, s);
      } else if (i !== oe) {
        var p = e.child;
        if (p !== null) {
          RS(p, t, a);
          for (var y = p.sibling; y !== null; )
            RS(y, t, a), y = y.sibling;
        }
      }
    }
    var Hr = null, yl = !1;
    function S_(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case q: {
                Hr = i.stateNode, yl = !1;
                break e;
              }
              case Y: {
                Hr = i.stateNode.containerInfo, yl = !0;
                break e;
              }
              case oe: {
                Hr = i.stateNode.containerInfo, yl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Hr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        cw(e, t, a), Hr = null, yl = !1;
      }
      m_(a);
    }
    function ts(e, t, a) {
      for (var i = a.child; i !== null; )
        cw(e, t, i), i = i.sibling;
    }
    function cw(e, t, a) {
      switch (ah(a), a.tag) {
        case q:
          Pr || rd(a, t);
        case K: {
          {
            var i = Hr, o = yl;
            Hr = null, ts(e, t, a), Hr = i, yl = o, Hr !== null && (yl ? Hx(Hr, a.stateNode) : Px(Hr, a.stateNode));
          }
          return;
        }
        case Wt: {
          Hr !== null && (yl ? Bx(Hr, a.stateNode) : Ag(Hr, a.stateNode));
          return;
        }
        case oe: {
          {
            var s = Hr, p = yl;
            Hr = a.stateNode.containerInfo, yl = !0, ts(e, t, a), Hr = s, yl = p;
          }
          return;
        }
        case Q:
        case _e:
        case yt:
        case Ze: {
          if (!Pr) {
            var y = a.updateQueue;
            if (y !== null) {
              var S = y.lastEffect;
              if (S !== null) {
                var x = S.next, b = x;
                do {
                  var A = b, N = A.destroy, $ = A.tag;
                  N !== void 0 && (($ & Kl) !== Za ? Xm(a, t, N) : ($ & vr) !== Za && (Su(a), a.mode & Lt ? (eo(), Xm(a, t, N), Jl(a)) : Xm(a, t, N), Fs())), b = b.next;
                } while (b !== x);
              }
            }
          }
          ts(e, t, a);
          return;
        }
        case z: {
          if (!Pr) {
            rd(a, t);
            var I = a.stateNode;
            typeof I.componentWillUnmount == "function" && CS(a, t, I);
          }
          ts(e, t, a);
          return;
        }
        case Gt: {
          ts(e, t, a);
          return;
        }
        case Ge: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ue
          ) {
            var X = Pr;
            Pr = X || a.memoizedState !== null, ts(e, t, a), Pr = X;
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
    function E_(e) {
      e.memoizedState;
    }
    function C_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && lb(s);
          }
        }
      }
    }
    function fw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new a_()), t.forEach(function(i) {
          var o = yO.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ba)
              if (td !== null && nd !== null)
                av(nd, td);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function w_(e, t, a) {
      td = a, nd = e, Sn(t), dw(t, e), Sn(t), td = null, nd = null;
    }
    function gl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            S_(e, t, s);
          } catch (S) {
            dn(s, t, S);
          }
        }
      var p = ms();
      if (t.subtreeFlags & ta)
        for (var y = t.child; y !== null; )
          Sn(y), dw(y, e), y = y.sibling;
      Sn(p);
    }
    function dw(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case Q:
        case _e:
        case yt:
        case Ze: {
          if (gl(t, e), to(e), o & Ae) {
            try {
              ml(Kl | pr, e, e.return), es(Kl | pr, e);
            } catch (et) {
              dn(e, e.return, et);
            }
            if (e.mode & Lt) {
              try {
                eo(), ml(vr | pr, e, e.return);
              } catch (et) {
                dn(e, e.return, et);
              }
              Jl(e);
            } else
              try {
                ml(vr | pr, e, e.return);
              } catch (et) {
                dn(e, e.return, et);
              }
          }
          return;
        }
        case z: {
          gl(t, e), to(e), o & Ra && i !== null && rd(i, i.return);
          return;
        }
        case q: {
          gl(t, e), to(e), o & Ra && i !== null && rd(i, i.return);
          {
            if (e.flags & Pa) {
              var s = e.stateNode;
              try {
                c1(s);
              } catch (et) {
                dn(e, e.return, et);
              }
            }
            if (o & Ae) {
              var p = e.stateNode;
              if (p != null) {
                var y = e.memoizedProps, S = i !== null ? i.memoizedProps : y, x = e.type, b = e.updateQueue;
                if (e.updateQueue = null, b !== null)
                  try {
                    Mx(p, b, x, S, y, e);
                  } catch (et) {
                    dn(e, e.return, et);
                  }
              }
            }
          }
          return;
        }
        case K: {
          if (gl(t, e), to(e), o & Ae) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var A = e.stateNode, N = e.memoizedProps, $ = i !== null ? i.memoizedProps : N;
            try {
              Ax(A, $, N);
            } catch (et) {
              dn(e, e.return, et);
            }
          }
          return;
        }
        case Y: {
          if (gl(t, e), to(e), o & Ae && i !== null) {
            var I = i.memoizedState;
            if (I.isDehydrated)
              try {
                ib(t.containerInfo);
              } catch (et) {
                dn(e, e.return, et);
              }
          }
          return;
        }
        case oe: {
          gl(t, e), to(e);
          return;
        }
        case xe: {
          gl(t, e), to(e);
          var X = e.child;
          if (X.flags & Nl) {
            var we = X.stateNode, We = X.memoizedState, je = We !== null;
            if (we.isHidden = je, je) {
              var kt = X.alternate !== null && X.alternate.memoizedState !== null;
              kt || nO();
            }
          }
          if (o & Ae) {
            try {
              E_(e);
            } catch (et) {
              dn(e, e.return, et);
            }
            fw(e);
          }
          return;
        }
        case Ge: {
          var Rt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ue
          ) {
            var P = Pr;
            Pr = P || Rt, gl(t, e), Pr = P;
          } else
            gl(t, e);
          if (to(e), o & Nl) {
            var Z = e.stateNode, H = e.memoizedState, se = H !== null, Re = e;
            if (Z.isHidden = se, se && !Rt && (Re.mode & Ue) !== Ye) {
              Le = Re;
              for (var ye = Re.child; ye !== null; )
                Le = ye, T_(ye), ye = ye.sibling;
            }
            h_(Re, se);
          }
          return;
        }
        case Et: {
          gl(t, e), to(e), o & Ae && fw(e);
          return;
        }
        case Gt:
          return;
        default: {
          gl(t, e), to(e);
          return;
        }
      }
    }
    function to(e) {
      var t = e.flags;
      if (t & Xt) {
        try {
          g_(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        e.flags &= ~Xt;
      }
      t & Ti && (e.flags &= ~Ti);
    }
    function R_(e, t, a) {
      td = a, nd = t, Le = e, pw(e, t, a), td = null, nd = null;
    }
    function pw(e, t, a) {
      for (var i = (e.mode & Ue) !== Ye; Le !== null; ) {
        var o = Le, s = o.child;
        if (o.tag === Ge && i) {
          var p = o.memoizedState !== null, y = p || Km;
          if (y) {
            TS(e, t, a);
            continue;
          } else {
            var S = o.alternate, x = S !== null && S.memoizedState !== null, b = x || Pr, A = Km, N = Pr;
            Km = y, Pr = b, Pr && !N && (Le = o, x_(o));
            for (var $ = s; $ !== null; )
              Le = $, pw(
                $,
                // New root; bubble back up to here and stop.
                t,
                a
              ), $ = $.sibling;
            Le = o, Km = A, Pr = N, TS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & di) !== Ie && s !== null ? (s.return = o, Le = s) : TS(e, t, a);
      }
    }
    function TS(e, t, a) {
      for (; Le !== null; ) {
        var i = Le;
        if ((i.flags & di) !== Ie) {
          var o = i.alternate;
          Sn(i);
          try {
            p_(t, o, i, a);
          } catch (p) {
            dn(i, i.return, p);
          }
          un();
        }
        if (i === e) {
          Le = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Le = s;
          return;
        }
        Le = i.return;
      }
    }
    function T_(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        switch (t.tag) {
          case Q:
          case _e:
          case yt:
          case Ze: {
            if (t.mode & Lt)
              try {
                eo(), ml(vr, t, t.return);
              } finally {
                Jl(t);
              }
            else
              ml(vr, t, t.return);
            break;
          }
          case z: {
            rd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && CS(t, t.return, i);
            break;
          }
          case q: {
            rd(t, t.return);
            break;
          }
          case Ge: {
            var o = t.memoizedState !== null;
            if (o) {
              vw(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Le = a) : vw(e);
      }
    }
    function vw(e) {
      for (; Le !== null; ) {
        var t = Le;
        if (t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function x_(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        if (t.tag === Ge) {
          var i = t.memoizedState !== null;
          if (i) {
            hw(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Le = a) : hw(e);
      }
    }
    function hw(e) {
      for (; Le !== null; ) {
        var t = Le;
        Sn(t);
        try {
          v_(t);
        } catch (i) {
          dn(t, t.return, i);
        }
        if (un(), t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function b_(e, t, a, i) {
      Le = t, k_(t, e, a, i);
    }
    function k_(e, t, a, i) {
      for (; Le !== null; ) {
        var o = Le, s = o.child;
        (o.subtreeFlags & na) !== Ie && s !== null ? (s.return = o, Le = s) : __(e, t, a, i);
      }
    }
    function __(e, t, a, i) {
      for (; Le !== null; ) {
        var o = Le;
        if ((o.flags & Jr) !== Ie) {
          Sn(o);
          try {
            O_(t, o, a, i);
          } catch (p) {
            dn(o, o.return, p);
          }
          un();
        }
        if (o === e) {
          Le = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Le = s;
          return;
        }
        Le = o.return;
      }
    }
    function O_(e, t, a, i) {
      switch (t.tag) {
        case Q:
        case _e:
        case Ze: {
          if (t.mode & Lt) {
            tS();
            try {
              es(jr | pr, t);
            } finally {
              eS(t);
            }
          } else
            es(jr | pr, t);
          break;
        }
      }
    }
    function D_(e) {
      Le = e, L_();
    }
    function L_() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        if ((Le.flags & Mt) !== Ie) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Le = o, A_(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var p = s.child;
                if (p !== null) {
                  s.child = null;
                  do {
                    var y = p.sibling;
                    p.sibling = null, p = y;
                  } while (p !== null);
                }
              }
            }
            Le = e;
          }
        }
        (e.subtreeFlags & na) !== Ie && t !== null ? (t.return = e, Le = t) : N_();
      }
    }
    function N_() {
      for (; Le !== null; ) {
        var e = Le;
        (e.flags & Jr) !== Ie && (Sn(e), M_(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function M_(e) {
      switch (e.tag) {
        case Q:
        case _e:
        case Ze: {
          e.mode & Lt ? (tS(), ml(jr | pr, e, e.return), eS(e)) : ml(jr | pr, e, e.return);
          break;
        }
      }
    }
    function A_(e, t) {
      for (; Le !== null; ) {
        var a = Le;
        Sn(a), U_(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, Le = i) : z_(e);
      }
    }
    function z_(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.sibling, i = t.return;
        if (ow(t), t === e) {
          Le = null;
          return;
        }
        if (a !== null) {
          a.return = i, Le = a;
          return;
        }
        Le = i;
      }
    }
    function U_(e, t) {
      switch (e.tag) {
        case Q:
        case _e:
        case Ze: {
          e.mode & Lt ? (tS(), ml(jr, e, t), eS(e)) : ml(jr, e, t);
          break;
        }
      }
    }
    function j_(e) {
      switch (e.tag) {
        case Q:
        case _e:
        case Ze: {
          try {
            es(vr | pr, e);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case z: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
      }
    }
    function F_(e) {
      switch (e.tag) {
        case Q:
        case _e:
        case Ze: {
          try {
            es(jr | pr, e);
          } catch (t) {
            dn(e, e.return, t);
          }
          break;
        }
      }
    }
    function P_(e) {
      switch (e.tag) {
        case Q:
        case _e:
        case Ze: {
          try {
            ml(vr | pr, e, e.return);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case z: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && CS(e, e.return, t);
          break;
        }
      }
    }
    function H_(e) {
      switch (e.tag) {
        case Q:
        case _e:
        case Ze:
          try {
            ml(jr | pr, e, e.return);
          } catch (t) {
            dn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Qp = Symbol.for;
      Qp("selector.component"), Qp("selector.has_pseudo_class"), Qp("selector.role"), Qp("selector.test_id"), Qp("selector.text");
    }
    var B_ = [];
    function V_() {
      B_.forEach(function(e) {
        return e();
      });
    }
    var $_ = v.ReactCurrentActQueue;
    function I_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function mw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && $_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Y_ = Math.ceil, xS = v.ReactCurrentDispatcher, bS = v.ReactCurrentOwner, Br = v.ReactCurrentBatchConfig, Sl = v.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), yw = (
      /*               */
      1
    ), Vr = (
      /*                */
      2
    ), Fi = (
      /*                */
      4
    ), Go = 0, qp = 1, Cc = 2, Zm = 3, Gp = 4, gw = 5, kS = 6, bt = yr, Oa = null, Fn = null, gr = ee, no = ee, _S = Yu(ee), Sr = Go, Kp = null, Jm = ee, Xp = ee, ey = ee, Zp = null, Ja = null, OS = 0, Sw = 500, Ew = 1 / 0, W_ = 500, Ko = null;
    function Jp() {
      Ew = $n() + W_;
    }
    function Cw() {
      return Ew;
    }
    var ty = !1, DS = null, ad = null, wc = !1, ns = null, ev = ee, LS = [], NS = null, Q_ = 50, tv = 0, MS = null, AS = !1, ny = !1, q_ = 50, id = 0, ry = null, nv = an, ay = ee, ww = !1;
    function iy() {
      return Oa;
    }
    function Da() {
      return (bt & (Vr | Fi)) !== yr ? $n() : (nv !== an || (nv = $n()), nv);
    }
    function rs(e) {
      var t = e.mode;
      if ((t & Ue) === Ye)
        return Qe;
      if ((bt & Vr) !== yr && gr !== ee)
        return bu(gr);
      var a = Ib() !== $b;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ay === An && (ay = yh()), ay;
      }
      var o = Ya();
      if (o !== An)
        return o;
      var s = _x();
      return s;
    }
    function G_(e) {
      var t = e.mode;
      return (t & Ue) === Ye ? Qe : la();
    }
    function Er(e, t, a, i) {
      SO(), ww && g("useInsertionEffect must not schedule updates."), AS && (ny = !0), zo(e, a, i), (bt & Vr) !== ee && e === Oa ? wO(t) : (ba && df(e, t, a), RO(t), e === Oa && ((bt & Vr) === yr && (Xp = ut(Xp, a)), Sr === Gp && as(e, gr)), ei(e, i), a === Qe && bt === yr && (t.mode & Ue) === Ye && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Sl.isBatchingLegacy && (Jp(), C1()));
    }
    function K_(e, t, a) {
      var i = e.current;
      i.lanes = t, zo(e, t, a), ei(e, a);
    }
    function X_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (bt & Vr) !== yr
      );
    }
    function ei(e, t) {
      var a = e.callbackNode;
      Jy(e, t);
      var i = Ws(e, e === Oa ? gr : ee);
      if (i === ee) {
        a !== null && Fw(a), e.callbackNode = null, e.callbackPriority = An;
        return;
      }
      var o = zn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Sl.current !== null && a !== BS)) {
        a == null && s !== Qe && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Fw(a);
      var p;
      if (o === Qe)
        e.tag === Wu ? (Sl.isBatchingLegacy !== null && (Sl.didScheduleLegacyUpdate = !0), bb(xw.bind(null, e))) : E1(xw.bind(null, e)), Sl.current !== null ? Sl.current.push(Qu) : Dx(function() {
          (bt & (Vr | Fi)) === yr && Qu();
        }), p = null;
      else {
        var y;
        switch (dr(i)) {
          case Un:
            y = ra;
            break;
          case il:
            y = mu;
            break;
          case Oi:
            y = bi;
            break;
          case ku:
            y = Us;
            break;
          default:
            y = bi;
            break;
        }
        p = VS(y, Rw.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = p;
    }
    function Rw(e, t) {
      if (Sk(), nv = an, ay = ee, (bt & (Vr | Fi)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Zo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Ws(e, e === Oa ? gr : ee);
      if (o === ee)
        return null;
      var s = !qs(e, o) && !mh(e, o) && !t, p = s ? oO(e, o) : oy(e, o);
      if (p !== Go) {
        if (p === Cc) {
          var y = Vl(e);
          y !== ee && (o = y, p = zS(e, y));
        }
        if (p === qp) {
          var S = Kp;
          throw Rc(e, ee), as(e, o), ei(e, $n()), S;
        }
        if (p === kS)
          as(e, o);
        else {
          var x = !qs(e, o), b = e.current.alternate;
          if (x && !J_(b)) {
            if (p = oy(e, o), p === Cc) {
              var A = Vl(e);
              A !== ee && (o = A, p = zS(e, A));
            }
            if (p === qp) {
              var N = Kp;
              throw Rc(e, ee), as(e, o), ei(e, $n()), N;
            }
          }
          e.finishedWork = b, e.finishedLanes = o, Z_(e, p, o);
        }
      }
      return ei(e, $n()), e.callbackNode === a ? Rw.bind(null, e) : null;
    }
    function zS(e, t) {
      var a = Zp;
      if (pf(e)) {
        var i = Rc(e, t);
        i.flags |= Mr, Sb(e.containerInfo);
      }
      var o = oy(e, t);
      if (o !== Cc) {
        var s = Ja;
        Ja = a, s !== null && Tw(s);
      }
      return o;
    }
    function Tw(e) {
      Ja === null ? Ja = e : Ja.push.apply(Ja, e);
    }
    function Z_(e, t, a) {
      switch (t) {
        case Go:
        case qp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Cc: {
          Tc(e, Ja, Ko);
          break;
        }
        case Zm: {
          if (as(e, a), ph(a) && // do not delay if we're inside an act() scope
          !Pw()) {
            var i = OS + Sw - $n();
            if (i > 10) {
              var o = Ws(e, ee);
              if (o !== ee)
                break;
              var s = e.suspendedLanes;
              if (!Ao(s, a)) {
                Da(), cf(e, s);
                break;
              }
              e.timeoutHandle = Ng(Tc.bind(null, e, Ja, Ko), i);
              break;
            }
          }
          Tc(e, Ja, Ko);
          break;
        }
        case Gp: {
          if (as(e, a), hh(a))
            break;
          if (!Pw()) {
            var p = of(e, a), y = p, S = $n() - y, x = gO(S) - S;
            if (x > 10) {
              e.timeoutHandle = Ng(Tc.bind(null, e, Ja, Ko), x);
              break;
            }
          }
          Tc(e, Ja, Ko);
          break;
        }
        case gw: {
          Tc(e, Ja, Ko);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function J_(e) {
      for (var t = e; ; ) {
        if (t.flags & Ro) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], p = s.getSnapshot, y = s.value;
                try {
                  if (!De(p(), y))
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
      t = Gs(t, ey), t = Gs(t, Xp), Sh(e, t);
    }
    function xw(e) {
      if (Ek(), (bt & (Vr | Fi)) !== yr)
        throw new Error("Should not already be working.");
      Zo();
      var t = Ws(e, ee);
      if (!oa(t, Qe))
        return ei(e, $n()), null;
      var a = oy(e, t);
      if (e.tag !== Wu && a === Cc) {
        var i = Vl(e);
        i !== ee && (t = i, a = zS(e, i));
      }
      if (a === qp) {
        var o = Kp;
        throw Rc(e, ee), as(e, t), ei(e, $n()), o;
      }
      if (a === kS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Tc(e, Ja, Ko), ei(e, $n()), null;
    }
    function eO(e, t) {
      t !== ee && (qd(e, ut(t, Qe)), ei(e, $n()), (bt & (Vr | Fi)) === yr && (Jp(), Qu()));
    }
    function US(e, t) {
      var a = bt;
      bt |= yw;
      try {
        return e(t);
      } finally {
        bt = a, bt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Sl.isBatchingLegacy && (Jp(), C1());
      }
    }
    function tO(e, t, a, i, o) {
      var s = Ya(), p = Br.transition;
      try {
        return Br.transition = null, _n(Un), e(t, a, i, o);
      } finally {
        _n(s), Br.transition = p, bt === yr && Jp();
      }
    }
    function Xo(e) {
      ns !== null && ns.tag === Wu && (bt & (Vr | Fi)) === yr && Zo();
      var t = bt;
      bt |= yw;
      var a = Br.transition, i = Ya();
      try {
        return Br.transition = null, _n(Un), e ? e() : void 0;
      } finally {
        _n(i), Br.transition = a, bt = t, (bt & (Vr | Fi)) === yr && Qu();
      }
    }
    function bw() {
      return (bt & (Vr | Fi)) !== yr;
    }
    function ly(e, t) {
      ca(_S, no, e), no = ut(no, t);
    }
    function jS(e) {
      no = _S.current, sa(_S, e);
    }
    function Rc(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var a = e.timeoutHandle;
      if (a !== Mg && (e.timeoutHandle = Mg, Ox(a)), Fn !== null)
        for (var i = Fn.return; i !== null; ) {
          var o = i.alternate;
          tw(o, i), i = i.return;
        }
      Oa = e;
      var s = xc(e.current, null);
      return Fn = s, gr = no = t, Sr = Go, Kp = null, Jm = ee, Xp = ee, ey = ee, Zp = null, Ja = null, qb(), fl.discardPendingWarnings(), s;
    }
    function kw(e, t) {
      do {
        var a = Fn;
        try {
          if (vm(), rC(), un(), bS.current = null, a === null || a.return === null) {
            Sr = qp, Kp = t, Fn = null;
            return;
          }
          if (Ct && a.mode & Lt && Wm(a, !0), vt)
            if (bo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ch(a, i, gr);
            } else
              sh(a, t, gr);
          xk(e, a.return, a, t, gr), Lw(a);
        } catch (o) {
          t = o, Fn === a && a !== null ? (a = a.return, Fn = a) : a = Fn;
          continue;
        }
        return;
      } while (!0);
    }
    function _w() {
      var e = xS.current;
      return xS.current = Bm, e === null ? Bm : e;
    }
    function Ow(e) {
      xS.current = e;
    }
    function nO() {
      OS = $n();
    }
    function rv(e) {
      Jm = ut(e, Jm);
    }
    function rO() {
      Sr === Go && (Sr = Zm);
    }
    function FS() {
      (Sr === Go || Sr === Zm || Sr === Cc) && (Sr = Gp), Oa !== null && (Qs(Jm) || Qs(Xp)) && as(Oa, gr);
    }
    function aO(e) {
      Sr !== Gp && (Sr = Cc), Zp === null ? Zp = [e] : Zp.push(e);
    }
    function iO() {
      return Sr === Go;
    }
    function oy(e, t) {
      var a = bt;
      bt |= Vr;
      var i = _w();
      if (Oa !== e || gr !== t) {
        if (ba) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (av(e, gr), o.clear()), Gd(e, t);
        }
        Ko = Xs(), Rc(e, t);
      }
      Cu(t);
      do
        try {
          lO();
          break;
        } catch (s) {
          kw(e, s);
        }
      while (!0);
      if (vm(), bt = a, Ow(i), Fn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Pl(), Oa = null, gr = ee, Sr;
    }
    function lO() {
      for (; Fn !== null; )
        Dw(Fn);
    }
    function oO(e, t) {
      var a = bt;
      bt |= Vr;
      var i = _w();
      if (Oa !== e || gr !== t) {
        if (ba) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (av(e, gr), o.clear()), Gd(e, t);
        }
        Ko = Xs(), Jp(), Rc(e, t);
      }
      Cu(t);
      do
        try {
          uO();
          break;
        } catch (s) {
          kw(e, s);
        }
      while (!0);
      return vm(), Ow(i), bt = a, Fn !== null ? (Hs(), Go) : (Pl(), Oa = null, gr = ee, Sr);
    }
    function uO() {
      for (; Fn !== null && !nh(); )
        Dw(Fn);
    }
    function Dw(e) {
      var t = e.alternate;
      Sn(e);
      var a;
      (e.mode & Lt) !== Ye ? (J0(e), a = PS(t, e, no), Wm(e, !0)) : a = PS(t, e, no), un(), e.memoizedProps = e.pendingProps, a === null ? Lw(e) : Fn = a, bS.current = null;
    }
    function Lw(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ml) === Ie) {
          Sn(t);
          var o = void 0;
          if ((t.mode & Lt) === Ye ? o = ew(a, t, no) : (J0(t), o = ew(a, t, no), Wm(t, !1)), un(), o !== null) {
            Fn = o;
            return;
          }
        } else {
          var s = r_(a, t);
          if (s !== null) {
            s.flags &= nl, Fn = s;
            return;
          }
          if ((t.mode & Lt) !== Ye) {
            Wm(t, !1);
            for (var p = t.actualDuration, y = t.child; y !== null; )
              p += y.actualDuration, y = y.sibling;
            t.actualDuration = p;
          }
          if (i !== null)
            i.flags |= Ml, i.subtreeFlags = Ie, i.deletions = null;
          else {
            Sr = kS, Fn = null;
            return;
          }
        }
        var S = t.sibling;
        if (S !== null) {
          Fn = S;
          return;
        }
        t = i, Fn = t;
      } while (t !== null);
      Sr === Go && (Sr = gw);
    }
    function Tc(e, t, a) {
      var i = Ya(), o = Br.transition;
      try {
        Br.transition = null, _n(Un), sO(e, t, a, i);
      } finally {
        Br.transition = o, _n(i);
      }
      return null;
    }
    function sO(e, t, a, i) {
      do
        Zo();
      while (ns !== null);
      if (EO(), (bt & (Vr | Fi)) !== yr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (ih(s), o === null)
        return js(), null;
      if (s === ee && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = An;
      var p = ut(o.lanes, o.childLanes);
      ff(e, p), e === Oa && (Oa = null, Fn = null, gr = ee), ((o.subtreeFlags & na) !== Ie || (o.flags & na) !== Ie) && (wc || (wc = !0, NS = a, VS(bi, function() {
        return Zo(), null;
      })));
      var y = (o.subtreeFlags & (ea | ta | di | na)) !== Ie, S = (o.flags & (ea | ta | di | na)) !== Ie;
      if (y || S) {
        var x = Br.transition;
        Br.transition = null;
        var b = Ya();
        _n(Un);
        var A = bt;
        bt |= Fi, bS.current = null, u_(e, o), _C(), w_(e, o, s), wx(e.containerInfo), e.current = o, Eu(s), R_(o, e, s), fh(), hu(), bt = A, _n(b), Br.transition = x;
      } else
        e.current = o, _C();
      var N = wc;
      if (wc ? (wc = !1, ns = e, ev = s) : (id = 0, ry = null), p = e.pendingLanes, p === ee && (ad = null), N || zw(e.current, !1), jl(o.stateNode, i), ba && e.memoizedUpdaters.clear(), V_(), ei(e, $n()), t !== null)
        for (var $ = e.onRecoverableError, I = 0; I < t.length; I++) {
          var X = t[I], we = X.stack, We = X.digest;
          $(X.value, {
            componentStack: we,
            digest: We
          });
        }
      if (ty) {
        ty = !1;
        var je = DS;
        throw DS = null, je;
      }
      return oa(ev, Qe) && e.tag !== Wu && Zo(), p = e.pendingLanes, oa(p, Qe) ? (gk(), e === MS ? tv++ : (tv = 0, MS = e)) : tv = 0, Qu(), js(), null;
    }
    function Zo() {
      if (ns !== null) {
        var e = dr(ev), t = rg(Oi, e), a = Br.transition, i = Ya();
        try {
          return Br.transition = null, _n(t), fO();
        } finally {
          _n(i), Br.transition = a;
        }
      }
      return !1;
    }
    function cO(e) {
      LS.push(e), wc || (wc = !0, VS(bi, function() {
        return Zo(), null;
      }));
    }
    function fO() {
      if (ns === null)
        return !1;
      var e = NS;
      NS = null;
      var t = ns, a = ev;
      if (ns = null, ev = ee, (bt & (Vr | Fi)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      AS = !0, ny = !1, Ps(a);
      var i = bt;
      bt |= Fi, D_(t.current), b_(t, t.current, a, e);
      {
        var o = LS;
        LS = [];
        for (var s = 0; s < o.length; s++) {
          var p = o[s];
          d_(t, p);
        }
      }
      ki(), zw(t.current, !0), bt = i, Qu(), ny ? t === ry ? id++ : (id = 0, ry = t) : id = 0, AS = !1, ny = !1, Pd(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Nw(e) {
      return ad !== null && ad.has(e);
    }
    function dO(e) {
      ad === null ? ad = /* @__PURE__ */ new Set([e]) : ad.add(e);
    }
    function pO(e) {
      ty || (ty = !0, DS = e);
    }
    var vO = pO;
    function Mw(e, t, a) {
      var i = Sc(a, t), o = DC(e, i, Qe), s = Gu(e, o, Qe), p = Da();
      s !== null && (zo(s, Qe, p), ei(s, p));
    }
    function dn(e, t, a) {
      if (i_(a), iv(!1), e.tag === Y) {
        Mw(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Y) {
          Mw(i, e, a);
          return;
        } else if (i.tag === z) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !Nw(s)) {
            var p = Sc(a, e), y = iS(i, p, Qe), S = Gu(i, y, Qe), x = Da();
            S !== null && (zo(S, Qe, x), ei(S, x));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function hO(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Da();
      cf(e, a), TO(e), Oa === e && Ao(gr, a) && (Sr === Gp || Sr === Zm && ph(gr) && $n() - OS < Sw ? Rc(e, ee) : ey = ut(ey, a)), ei(e, o);
    }
    function Aw(e, t) {
      t === An && (t = G_(e));
      var a = Da(), i = Xa(e, t);
      i !== null && (zo(i, t, a), ei(i, a));
    }
    function mO(e) {
      var t = e.memoizedState, a = An;
      t !== null && (a = t.retryLane), Aw(e, a);
    }
    function yO(e, t) {
      var a = An, i;
      switch (e.tag) {
        case xe:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Et:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Aw(e, a);
    }
    function gO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Y_(e / 1960) * 1960;
    }
    function SO() {
      if (tv > Q_)
        throw tv = 0, MS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      id > q_ && (id = 0, ry = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function EO() {
      fl.flushLegacyContextWarning(), fl.flushPendingUnsafeLifecycleWarnings();
    }
    function zw(e, t) {
      Sn(e), uy(e, Ba, P_), t && uy(e, To, H_), uy(e, Ba, j_), t && uy(e, To, F_), un();
    }
    function uy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ie ? i = i.child : ((i.flags & t) !== Ie && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var sy = null;
    function Uw(e) {
      {
        if ((bt & Vr) !== yr || !(e.mode & Ue))
          return;
        var t = e.tag;
        if (t !== j && t !== Y && t !== z && t !== Q && t !== _e && t !== yt && t !== Ze)
          return;
        var a = tt(e) || "ReactComponent";
        if (sy !== null) {
          if (sy.has(a))
            return;
          sy.add(a);
        } else
          sy = /* @__PURE__ */ new Set([a]);
        var i = gn;
        try {
          Sn(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Sn(e) : un();
        }
      }
    }
    var PS;
    {
      var CO = null;
      PS = function(e, t, a) {
        var i = Iw(CO, t);
        try {
          return GC(e, t, a);
        } catch (s) {
          if (Ab() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (vm(), rC(), tw(e, t), Iw(t, i), t.mode & Lt && J0(t), ci(null, GC, null, e, t, a), Ky()) {
            var o = tl();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var jw = !1, HS;
    HS = /* @__PURE__ */ new Set();
    function wO(e) {
      if (Kr && !hk())
        switch (e.tag) {
          case Q:
          case _e:
          case Ze: {
            var t = Fn && tt(Fn) || "Unknown", a = t;
            if (!HS.has(a)) {
              HS.add(a);
              var i = tt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case z: {
            jw || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), jw = !0);
            break;
          }
        }
    }
    function av(e, t) {
      if (ba) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          df(e, i, t);
        });
      }
    }
    var BS = {};
    function VS(e, t) {
      {
        var a = Sl.current;
        return a !== null ? (a.push(t), BS) : Ud(e, t);
      }
    }
    function Fw(e) {
      if (e !== BS)
        return $c(e);
    }
    function Pw() {
      return Sl.current !== null;
    }
    function RO(e) {
      {
        if (e.mode & Ue) {
          if (!mw())
            return;
        } else if (!I_() || bt !== yr || e.tag !== Q && e.tag !== _e && e.tag !== Ze)
          return;
        if (Sl.current === null) {
          var t = gn;
          try {
            Sn(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, tt(e));
          } finally {
            t ? Sn(e) : un();
          }
        }
      }
    }
    function TO(e) {
      e.tag !== Wu && mw() && Sl.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function iv(e) {
      ww = e;
    }
    var Pi = null, ld = null, xO = function(e) {
      Pi = e;
    };
    function od(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $S(e) {
      return od(e);
    }
    function IS(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = od(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: me,
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
    function Hw(e, t) {
      {
        if (Pi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case z: {
            typeof i == "function" && (o = !0);
            break;
          }
          case Q: {
            (typeof i == "function" || s === Be) && (o = !0);
            break;
          }
          case _e: {
            (s === me || s === Be) && (o = !0);
            break;
          }
          case yt:
          case Ze: {
            (s === st || s === Be) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var p = Pi(a);
          if (p !== void 0 && p === Pi(i))
            return !0;
        }
        return !1;
      }
    }
    function Bw(e) {
      {
        if (Pi === null || typeof WeakSet != "function")
          return;
        ld === null && (ld = /* @__PURE__ */ new WeakSet()), ld.add(e);
      }
    }
    var bO = function(e, t) {
      {
        if (Pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Zo(), Xo(function() {
          YS(e.current, i, a);
        });
      }
    }, kO = function(e, t) {
      {
        if (e.context !== pi)
          return;
        Zo(), Xo(function() {
          lv(t, e, null, null);
        });
      }
    };
    function YS(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, p = e.tag, y = e.type, S = null;
        switch (p) {
          case Q:
          case Ze:
          case z:
            S = y;
            break;
          case _e:
            S = y.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, b = !1;
        if (S !== null) {
          var A = Pi(S);
          A !== void 0 && (a.has(A) ? b = !0 : t.has(A) && (p === z ? b = !0 : x = !0));
        }
        if (ld !== null && (ld.has(e) || i !== null && ld.has(i)) && (b = !0), b && (e._debugNeedsRemount = !0), b || x) {
          var N = Xa(e, Qe);
          N !== null && Er(N, e, Qe, an);
        }
        o !== null && !b && YS(o, t, a), s !== null && YS(s, t, a);
      }
    }
    var _O = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return WS(e.current, i, a), a;
      }
    };
    function WS(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, p = e.type, y = null;
        switch (s) {
          case Q:
          case Ze:
          case z:
            y = p;
            break;
          case _e:
            y = p.render;
            break;
        }
        var S = !1;
        y !== null && t.has(y) && (S = !0), S ? OO(e, a) : i !== null && WS(i, t, a), o !== null && WS(o, t, a);
      }
    }
    function OO(e, t) {
      {
        var a = DO(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case q:
              t.add(i.stateNode);
              return;
            case oe:
              t.add(i.stateNode.containerInfo);
              return;
            case Y:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function DO(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === q)
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
    var QS;
    {
      QS = !1;
      try {
        var Vw = Object.preventExtensions({});
      } catch {
        QS = !0;
      }
    }
    function LO(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ie, this.subtreeFlags = Ie, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !QS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var vi = function(e, t, a, i) {
      return new LO(e, t, a, i);
    };
    function qS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function NO(e) {
      return typeof e == "function" && !qS(e) && e.defaultProps === void 0;
    }
    function MO(e) {
      if (typeof e == "function")
        return qS(e) ? z : Q;
      if (e != null) {
        var t = e.$$typeof;
        if (t === me)
          return _e;
        if (t === st)
          return yt;
      }
      return j;
    }
    function xc(e, t) {
      var a = e.alternate;
      a === null ? (a = vi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ie, a.subtreeFlags = Ie, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & fr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case j:
        case Q:
        case Ze:
          a.type = od(e.type);
          break;
        case z:
          a.type = $S(e.type);
          break;
        case _e:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function AO(e, t) {
      e.flags &= fr | Xt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ee, e.lanes = t, e.child = null, e.subtreeFlags = Ie, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ie, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function zO(e, t, a) {
      var i;
      return e === lm ? (i = Ue, t === !0 && (i |= bn, i |= $a)) : i = Ye, ba && (i |= Lt), vi(Y, null, null, i);
    }
    function GS(e, t, a, i, o, s) {
      var p = j, y = e;
      if (typeof e == "function")
        qS(e) ? (p = z, y = $S(y)) : y = od(y);
      else if (typeof e == "string")
        p = q;
      else
        e:
          switch (e) {
            case Ea:
              return is(a.children, o, s, t);
            case Vi:
              p = lt, o |= bn, (o & Ue) !== Ye && (o |= $a);
              break;
            case O:
              return UO(a, o, s, t);
            case gt:
              return jO(a, o, s, t);
            case xt:
              return FO(a, o, s, t);
            case tn:
              return $w(a, o, s, t);
            case xr:
            case Bn:
            case yi:
            case nn:
            case en:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ie:
                    p = Pe;
                    break e;
                  case pe:
                    p = pt;
                    break e;
                  case me:
                    p = _e, y = IS(y);
                    break e;
                  case st:
                    p = yt;
                    break e;
                  case Be:
                    p = pn, y = null;
                    break e;
                }
              var S = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var x = i ? tt(i) : null;
                x && (S += `

Check the render method of \`` + x + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
            }
          }
      var b = vi(p, a, t, o);
      return b.elementType = e, b.type = y, b.lanes = s, b._debugOwner = i, b;
    }
    function KS(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, p = e.props, y = GS(o, s, p, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function is(e, t, a, i) {
      var o = vi(Te, e, i, t);
      return o.lanes = a, o;
    }
    function UO(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = vi(mt, e, i, t | Lt);
      return o.elementType = O, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function jO(e, t, a, i) {
      var o = vi(xe, e, i, t);
      return o.elementType = gt, o.lanes = a, o;
    }
    function FO(e, t, a, i) {
      var o = vi(Et, e, i, t);
      return o.elementType = xt, o.lanes = a, o;
    }
    function $w(e, t, a, i) {
      var o = vi(Ge, e, i, t);
      o.elementType = tn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function XS(e, t, a) {
      var i = vi(K, e, null, t);
      return i.lanes = a, i;
    }
    function PO() {
      var e = vi(q, null, null, Ye);
      return e.elementType = "DELETED", e;
    }
    function HO(e) {
      var t = vi(Wt, null, null, Ye);
      return t.stateNode = e, t;
    }
    function ZS(e, t, a) {
      var i = e.children !== null ? e.children : [], o = vi(oe, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function Iw(e, t) {
      return e === null && (e = vi(j, null, null, Ye)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function BO(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Mg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = An, this.eventTimes = Ks(ee), this.expirationTimes = Ks(an), this.pendingLanes = ee, this.suspendedLanes = ee, this.pingedLanes = ee, this.expiredLanes = ee, this.mutableReadLanes = ee, this.finishedLanes = ee, this.entangledLanes = ee, this.entanglements = Ks(ee), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], p = 0; p < Mn; p++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case lm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Wu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Yw(e, t, a, i, o, s, p, y, S, x) {
      var b = new BO(e, t, a, y, S), A = zO(t, s);
      b.current = A, A.stateNode = b;
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
      return l0(A), b;
    }
    var JS = "18.2.0";
    function VO(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return wr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Qr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var eE, tE;
    eE = !1, tE = {};
    function Ww(e) {
      if (!e)
        return pi;
      var t = Ri(e), a = xb(t);
      if (t.tag === z) {
        var i = t.type;
        if (Gl(i))
          return g1(t, i, a);
      }
      return a;
    }
    function $O(e, t) {
      {
        var a = Ri(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Md(a);
        if (o === null)
          return null;
        if (o.mode & bn) {
          var s = tt(a) || "Component";
          if (!tE[s]) {
            tE[s] = !0;
            var p = gn;
            try {
              Sn(o), a.mode & bn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              p ? Sn(p) : un();
            }
          }
        }
        return o.stateNode;
      }
    }
    function Qw(e, t, a, i, o, s, p, y) {
      var S = !1, x = null;
      return Yw(e, t, S, x, a, i, o, s, p);
    }
    function qw(e, t, a, i, o, s, p, y, S, x) {
      var b = !0, A = Yw(a, i, b, e, o, s, p, y, S);
      A.context = Ww(null);
      var N = A.current, $ = Da(), I = rs(N), X = Qo($, I);
      return X.callback = t ?? null, Gu(N, X, I), K_(A, I, $), A;
    }
    function lv(e, t, a, i) {
      rl(t, e);
      var o = t.current, s = Da(), p = rs(o);
      Vd(p);
      var y = Ww(a);
      t.context === null ? t.context = y : t.pendingContext = y, Kr && gn !== null && !eE && (eE = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, tt(gn) || "Unknown"));
      var S = Qo(s, p);
      S.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), S.callback = i);
      var x = Gu(o, S, p);
      return x !== null && (Er(x, o, p, s), Sm(x, o, p)), p;
    }
    function cy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function IO(e) {
      switch (e.tag) {
        case Y: {
          var t = e.stateNode;
          if (pf(t)) {
            var a = eg(t);
            eO(t, a);
          }
          break;
        }
        case xe: {
          Xo(function() {
            var o = Xa(e, Qe);
            if (o !== null) {
              var s = Da();
              Er(o, e, Qe, s);
            }
          });
          var i = Qe;
          nE(e, i);
          break;
        }
      }
    }
    function Gw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = gh(a.retryLane, t));
    }
    function nE(e, t) {
      Gw(e, t);
      var a = e.alternate;
      a && Gw(a, t);
    }
    function YO(e) {
      if (e.tag === xe) {
        var t = Mo, a = Xa(e, t);
        if (a !== null) {
          var i = Da();
          Er(a, e, t, i);
        }
        nE(e, t);
      }
    }
    function WO(e) {
      if (e.tag === xe) {
        var t = rs(e), a = Xa(e, t);
        if (a !== null) {
          var i = Da();
          Er(a, e, t, i);
        }
        nE(e, t);
      }
    }
    function Kw(e) {
      var t = zd(e);
      return t === null ? null : t.stateNode;
    }
    var Xw = function(e) {
      return null;
    };
    function QO(e) {
      return Xw(e);
    }
    var Zw = function(e) {
      return !1;
    };
    function qO(e) {
      return Zw(e);
    }
    var Jw = null, eR = null, tR = null, nR = null, rR = null, aR = null, iR = null, lR = null, oR = null;
    {
      var uR = function(e, t, a) {
        var i = t[a], o = Dt(e) ? e.slice() : ft({}, e);
        return a + 1 === t.length ? (Dt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = uR(e[i], t, a + 1), o);
      }, sR = function(e, t) {
        return uR(e, t, 0);
      }, cR = function(e, t, a, i) {
        var o = t[i], s = Dt(e) ? e.slice() : ft({}, e);
        if (i + 1 === t.length) {
          var p = a[i];
          s[p] = s[o], Dt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = cR(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, fR = function(e, t, a) {
        if (t.length !== a.length) {
          C("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              C("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return cR(e, t, a, 0);
      }, dR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = Dt(e) ? e.slice() : ft({}, e);
        return s[o] = dR(e[o], t, a + 1, i), s;
      }, pR = function(e, t, a) {
        return dR(e, t, 0, a);
      }, rE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Jw = function(e, t, a, i) {
        var o = rE(e, t);
        if (o !== null) {
          var s = pR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var p = Xa(e, Qe);
          p !== null && Er(p, e, Qe, an);
        }
      }, eR = function(e, t, a) {
        var i = rE(e, t);
        if (i !== null) {
          var o = sR(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = ft({}, e.memoizedProps);
          var s = Xa(e, Qe);
          s !== null && Er(s, e, Qe, an);
        }
      }, tR = function(e, t, a, i) {
        var o = rE(e, t);
        if (o !== null) {
          var s = fR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var p = Xa(e, Qe);
          p !== null && Er(p, e, Qe, an);
        }
      }, nR = function(e, t, a) {
        e.pendingProps = pR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, Qe);
        i !== null && Er(i, e, Qe, an);
      }, rR = function(e, t) {
        e.pendingProps = sR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Xa(e, Qe);
        a !== null && Er(a, e, Qe, an);
      }, aR = function(e, t, a) {
        e.pendingProps = fR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, Qe);
        i !== null && Er(i, e, Qe, an);
      }, iR = function(e) {
        var t = Xa(e, Qe);
        t !== null && Er(t, e, Qe, an);
      }, lR = function(e) {
        Xw = e;
      }, oR = function(e) {
        Zw = e;
      };
    }
    function GO(e) {
      var t = Md(e);
      return t === null ? null : t.stateNode;
    }
    function KO(e) {
      return null;
    }
    function XO() {
      return gn;
    }
    function ZO(e) {
      var t = e.findFiberByHostInstance, a = v.ReactCurrentDispatcher;
      return rh({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Jw,
        overrideHookStateDeletePath: eR,
        overrideHookStateRenamePath: tR,
        overrideProps: nR,
        overridePropsDeletePath: rR,
        overridePropsRenamePath: aR,
        setErrorHandler: lR,
        setSuspenseHandler: oR,
        scheduleUpdate: iR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: GO,
        findFiberByHostInstance: t || KO,
        // React Refresh
        findHostInstancesForRefresh: _O,
        scheduleRefresh: bO,
        scheduleRoot: kO,
        setRefreshHandler: xO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: XO,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: JS
      });
    }
    var vR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function aE(e) {
      this._internalRoot = e;
    }
    fy.prototype.render = aE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : dy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== xn) {
          var i = Kw(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      lv(e, t, null, null);
    }, fy.prototype.unmount = aE.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        bw() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xo(function() {
          lv(null, e, null, null);
        }), p1(t);
      }
    };
    function JO(e, t) {
      if (!dy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      hR(e);
      var a = !1, i = !1, o = "", s = vR;
      t != null && (t.hydrate ? C("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Wr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var p = Qw(e, lm, null, a, i, o, s);
      Jh(p.current, e);
      var y = e.nodeType === xn ? e.parentNode : e;
      return vp(y), new aE(p);
    }
    function fy(e) {
      this._internalRoot = e;
    }
    function eD(e) {
      e && lg(e);
    }
    fy.prototype.unstable_scheduleHydration = eD;
    function tD(e, t, a) {
      if (!dy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      hR(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, p = !1, y = "", S = vR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError));
      var x = qw(t, null, e, lm, i, s, p, y, S);
      if (Jh(x.current, e), vp(e), o)
        for (var b = 0; b < o.length; b++) {
          var A = o[b];
          sk(x, A);
        }
      return new fy(x);
    }
    function dy(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === Ca || e.nodeType === md || !He));
    }
    function ov(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === Ca || e.nodeType === md || e.nodeType === xn && e.nodeValue === " react-mount-point-unstable "));
    }
    function hR(e) {
      e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), xp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var nD = v.ReactCurrentOwner, mR;
    mR = function(e) {
      if (e._reactRootContainer && e.nodeType !== xn) {
        var t = Kw(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = iE(e), o = !!(i && Iu(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function iE(e) {
      return e ? e.nodeType === Ca ? e.documentElement : e.firstChild : null;
    }
    function yR() {
    }
    function rD(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var N = cy(p);
            s.call(N);
          };
        }
        var p = qw(
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
          yR
        );
        e._reactRootContainer = p, Jh(p.current, e);
        var y = e.nodeType === xn ? e.parentNode : e;
        return vp(y), Xo(), p;
      } else {
        for (var S; S = e.lastChild; )
          e.removeChild(S);
        if (typeof i == "function") {
          var x = i;
          i = function() {
            var N = cy(b);
            x.call(N);
          };
        }
        var b = Qw(
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
          yR
        );
        e._reactRootContainer = b, Jh(b.current, e);
        var A = e.nodeType === xn ? e.parentNode : e;
        return vp(A), Xo(function() {
          lv(t, b, a, i);
        }), b;
      }
    }
    function aD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function py(e, t, a, i, o) {
      mR(a), aD(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, p;
      if (!s)
        p = rD(a, t, e, o, i);
      else {
        if (p = s, typeof o == "function") {
          var y = o;
          o = function() {
            var S = cy(p);
            y.call(S);
          };
        }
        lv(t, p, e, o);
      }
      return cy(p);
    }
    function iD(e) {
      {
        var t = nD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ot(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Zr ? e : $O(e, "findDOMNode");
    }
    function lD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ov(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return py(null, e, t, !0, a);
    }
    function oD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ov(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return py(null, e, t, !1, a);
    }
    function uD(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ov(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !vu(e))
        throw new Error("parentComponent must be a valid React Component");
      return py(e, t, a, !1, i);
    }
    function sD(e) {
      if (!ov(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = xp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = iE(e), i = a && !Iu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Xo(function() {
          py(null, null, e, !1, function() {
            e._reactRootContainer = null, p1(e);
          });
        }), !0;
      } else {
        {
          var o = iE(e), s = !!(o && Iu(o)), p = e.nodeType === Zr && ov(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", p ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Du(IO), ag(YO), hf(WO), Ch(Ya), wh(_r), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Td(dx), jc(US, tO, Xo);
    function cD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!dy(t))
        throw new Error("Target container is not a DOM element.");
      return VO(e, t, null, a);
    }
    function fD(e, t, a, i) {
      return uD(e, t, a, i);
    }
    var lE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Iu, Ff, em, pu, Co, US]
    };
    function dD(e, t) {
      return lE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), JO(e, t);
    }
    function pD(e, t, a) {
      return lE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), tD(e, t, a);
    }
    function vD(e) {
      return bw() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Xo(e);
    }
    var hD = ZO({
      findFiberByHostInstance: cc,
      bundleType: 1,
      version: JS,
      rendererPackageName: "react-dom"
    });
    if (!hD && Tn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var gR = window.location.protocol;
      /^(https?|file):$/.test(gR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (gR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lE, ti.createPortal = cD, ti.createRoot = dD, ti.findDOMNode = iD, ti.flushSync = vD, ti.hydrate = lD, ti.hydrateRoot = pD, ti.render = oD, ti.unmountComponentAtNode = sD, ti.unstable_batchedUpdates = US, ti.unstable_renderSubtreeIntoContainer = fD, ti.version = JS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), ti;
}
var ni = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kR;
function LD() {
  if (kR)
    return ni;
  kR = 1;
  var h = Ir, f = QR();
  function c(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var v = /* @__PURE__ */ new Set(), w = {};
  function T(n, r) {
    C(n, r), C(n + "Capture", r);
  }
  function C(n, r) {
    for (w[n] = r, n = 0; n < r.length; n++)
      v.add(r[n]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = Object.prototype.hasOwnProperty, Q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, z = {}, j = {};
  function Y(n) {
    return U.call(j, n) ? !0 : U.call(z, n) ? !1 : Q.test(n) ? j[n] = !0 : (z[n] = !0, !1);
  }
  function oe(n, r, l, u) {
    if (l !== null && l.type === 0)
      return !1;
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
  function q(n, r, l, u) {
    if (r === null || typeof r > "u" || oe(n, r, l, u))
      return !0;
    if (u)
      return !1;
    if (l !== null)
      switch (l.type) {
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
  function K(n, r, l, u, d, m, R) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = d, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = R;
  }
  var Te = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Te[n] = new K(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Te[r] = new K(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Te[n] = new K(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Te[n] = new K(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Te[n] = new K(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Te[n] = new K(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Te[n] = new K(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Te[n] = new K(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Te[n] = new K(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var lt = /[\-:]([a-z])/g;
  function pt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      lt,
      pt
    );
    Te[r] = new K(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(lt, pt);
    Te[r] = new K(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(lt, pt);
    Te[r] = new K(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Te[n] = new K(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Te.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Te[n] = new K(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Pe(n, r, l, u) {
    var d = Te.hasOwnProperty(r) ? Te[r] : null;
    (d !== null ? d.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (q(r, l, d, u) && (l = null), u || d === null ? Y(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : d.mustUseProperty ? n[d.propertyName] = l === null ? d.type === 3 ? !1 : "" : l : (r = d.attributeName, u = d.attributeNamespace, l === null ? n.removeAttribute(r) : (d = d.type, l = d === 3 || d === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var _e = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mt = Symbol.for("react.element"), xe = Symbol.for("react.portal"), yt = Symbol.for("react.fragment"), Ze = Symbol.for("react.strict_mode"), pn = Symbol.for("react.profiler"), vn = Symbol.for("react.provider"), Wt = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), Gt = Symbol.for("react.suspense"), Ge = Symbol.for("react.suspense_list"), nt = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), Ve = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var D = Object.assign, te;
  function Ee(n) {
    if (te === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        te = r && r[1] || "";
      }
    return `
` + te + n;
  }
  var He = !1;
  function $e(n, r) {
    if (!n || He)
      return "";
    He = !0;
    var l = Error.prepareStackTrace;
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
          } catch (W) {
            var u = W;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (W) {
            u = W;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          u = W;
        }
        n();
      }
    } catch (W) {
      if (W && u && typeof W.stack == "string") {
        for (var d = W.stack.split(`
`), m = u.stack.split(`
`), R = d.length - 1, k = m.length - 1; 1 <= R && 0 <= k && d[R] !== m[k]; )
          k--;
        for (; 1 <= R && 0 <= k; R--, k--)
          if (d[R] !== m[k]) {
            if (R !== 1 || k !== 1)
              do
                if (R--, k--, 0 > k || d[R] !== m[k]) {
                  var L = `
` + d[R].replace(" at new ", " at ");
                  return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
                }
              while (1 <= R && 0 <= k);
            break;
          }
      }
    } finally {
      He = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Ee(n) : "";
  }
  function ot(n) {
    switch (n.tag) {
      case 5:
        return Ee(n.type);
      case 16:
        return Ee("Lazy");
      case 13:
        return Ee("Suspense");
      case 19:
        return Ee("SuspenseList");
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
  function vt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case yt:
        return "Fragment";
      case xe:
        return "Portal";
      case pn:
        return "Profiler";
      case Ze:
        return "StrictMode";
      case Gt:
        return "Suspense";
      case Ge:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Wt:
          return (n.displayName || "Context") + ".Consumer";
        case vn:
          return (n._context.displayName || "Context") + ".Provider";
        case Et:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case nt:
          return r = n.displayName || null, r !== null ? r : vt(n.type) || "Memo";
        case Je:
          r = n._payload, n = n._init;
          try {
            return vt(n(r));
          } catch {
          }
      }
    return null;
  }
  function Ct(n) {
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
        return vt(r);
      case 8:
        return r === Ze ? "StrictMode" : "Mode";
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
  function ht(n) {
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
  function on(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ir(n) {
    var r = on(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
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
  function lr(n) {
    n._valueTracker || (n._valueTracker = ir(n));
  }
  function Yr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), u = "";
    return n && (u = on(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Tn(n, r) {
    var l = r.checked;
    return D({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function or(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = ht(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Yn(n, r) {
    r = r.checked, r != null && Pe(n, "checked", r, !1);
  }
  function Pn(n, r) {
    Yn(n, r);
    var l = ht(r.value), u = r.type;
    if (l != null)
      u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Dr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Dr(n, r.type, ht(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Hn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Dr(n, r, l) {
    (r !== "number" || Cr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var wr = Array.isArray;
  function Wn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var d = 0; d < l.length; d++)
        r["$" + l[d]] = !0;
      for (l = 0; l < n.length; l++)
        d = r.hasOwnProperty("$" + n[l].value), n[l].selected !== d && (n[l].selected = d), d && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ht(l), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === l) {
          n[d].selected = !0, u && (n[d].defaultSelected = !0);
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function va(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(c(91));
    return D({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ha(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(c(92));
        if (wr(l)) {
          if (1 < l.length)
            throw Error(c(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ht(l) };
  }
  function Rr(n, r) {
    var l = ht(r.value), u = ht(r.defaultValue);
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
  var hn, ya = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, d);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (hn = hn || document.createElement("div"), hn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = hn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
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
  }, he = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Sa).forEach(function(n) {
    he.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Sa[r] = Sa[n];
    });
  });
  function Fe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Sa.hasOwnProperty(n) && Sa[n] ? ("" + r).trim() : r + "px";
  }
  function ct(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var u = l.indexOf("--") === 0, d = Fe(l, r[l], u);
        l === "float" && (l = "cssFloat"), u ? n.setProperty(l, d) : n[l] = d;
      }
  }
  var Ft = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Nt(n, r) {
    if (r) {
      if (Ft[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(c(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(c(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(c(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(c(62));
    }
  }
  function Ln(n, r) {
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
  var yn = null;
  function Tr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Vt = null, Zn = null, Pt = null;
  function Jt(n) {
    if (n = Ri(n)) {
      if (typeof Vt != "function")
        throw Error(c(280));
      var r = n.stateNode;
      r && (r = Fc(r), Vt(n.stateNode, n.type, r));
    }
  }
  function ri(n) {
    Zn ? Pt ? Pt.push(n) : Pt = [n] : Zn = n;
  }
  function Ma() {
    if (Zn) {
      var n = Zn, r = Pt;
      if (Pt = Zn = null, Jt(n), r)
        for (n = 0; n < r.length; n++)
          Jt(r[n]);
    }
  }
  function El(n, r) {
    return n(r);
  }
  function so() {
  }
  var co = !1;
  function Cl(n, r, l) {
    if (co)
      return n(r, l);
    co = !0;
    try {
      return El(n, r, l);
    } finally {
      co = !1, (Zn !== null || Pt !== null) && (so(), Ma());
    }
  }
  function ai(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var u = Fc(l);
    if (u === null)
      return null;
    l = u[r];
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
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(c(231, r, typeof l));
    return l;
  }
  var ii = !1;
  if (g)
    try {
      var Aa = {};
      Object.defineProperty(Aa, "passive", { get: function() {
        ii = !0;
      } }), window.addEventListener("test", Aa, Aa), window.removeEventListener("test", Aa, Aa);
    } catch {
      ii = !1;
    }
  function Bi(n, r, l, u, d, m, R, k, L) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, W);
    } catch (le) {
      this.onError(le);
    }
  }
  var Wr = !1, Qr = null, Ea = !1, Vi = null, O = { onError: function(n) {
    Wr = !0, Qr = n;
  } };
  function ie(n, r, l, u, d, m, R, k, L) {
    Wr = !1, Qr = null, Bi.apply(O, arguments);
  }
  function pe(n, r, l, u, d, m, R, k, L) {
    if (ie.apply(this, arguments), Wr) {
      if (Wr) {
        var W = Qr;
        Wr = !1, Qr = null;
      } else
        throw Error(c(198));
      Ea || (Ea = !0, Vi = W);
    }
  }
  function me(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function gt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function xt(n) {
    if (me(n) !== n)
      throw Error(c(188));
  }
  function st(n) {
    var r = n.alternate;
    if (!r) {
      if (r = me(n), r === null)
        throw Error(c(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var d = l.return;
      if (d === null)
        break;
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
          if (m === l)
            return xt(d), n;
          if (m === u)
            return xt(d), r;
          m = m.sibling;
        }
        throw Error(c(188));
      }
      if (l.return !== u.return)
        l = d, u = m;
      else {
        for (var R = !1, k = d.child; k; ) {
          if (k === l) {
            R = !0, l = d, u = m;
            break;
          }
          if (k === u) {
            R = !0, u = d, l = m;
            break;
          }
          k = k.sibling;
        }
        if (!R) {
          for (k = m.child; k; ) {
            if (k === l) {
              R = !0, l = m, u = d;
              break;
            }
            if (k === u) {
              R = !0, u = m, l = d;
              break;
            }
            k = k.sibling;
          }
          if (!R)
            throw Error(c(189));
        }
      }
      if (l.alternate !== u)
        throw Error(c(190));
    }
    if (l.tag !== 3)
      throw Error(c(188));
    return l.stateNode.current === l ? n : r;
  }
  function Be(n) {
    return n = st(n), n !== null ? Bn(n) : null;
  }
  function Bn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Bn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var en = f.unstable_scheduleCallback, tn = f.unstable_cancelCallback, xr = f.unstable_shouldYield, yi = f.unstable_requestPaint, nn = f.unstable_now, qr = f.unstable_getCurrentPriorityLevel, os = f.unstable_ImmediatePriority, gi = f.unstable_UserBlockingPriority, ft = f.unstable_NormalPriority, fo = f.unstable_LowPriority, $i = f.unstable_IdlePriority, wl = null, Gr = null;
  function us(n) {
    if (Gr && typeof Gr.onCommitFiberRoot == "function")
      try {
        Gr.onCommitFiberRoot(wl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Nr = Math.clz32 ? Math.clz32 : fs, ss = Math.log, cs = Math.LN2;
  function fs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ss(n) / cs | 0) | 0;
  }
  var po = 64, tu = 4194304;
  function Ii(n) {
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
    if (l === 0)
      return 0;
    var u = 0, d = n.suspendedLanes, m = n.pingedLanes, R = l & 268435455;
    if (R !== 0) {
      var k = R & ~d;
      k !== 0 ? u = Ii(k) : (m &= R, m !== 0 && (u = Ii(m)));
    } else
      R = l & ~d, R !== 0 ? u = Ii(R) : m !== 0 && (u = Ii(m));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & d) && (d = u & -u, m = r & -r, d >= m || d === 16 && (m & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        l = 31 - Nr(r), d = 1 << l, u |= n[l], r &= ~d;
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
      var R = 31 - Nr(m), k = 1 << R, L = d[R];
      L === -1 ? (!(k & l) || k & u) && (d[R] = za(k, r)) : L <= r && (n.expiredLanes |= k), m &= ~k;
    }
  }
  function Ei(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function vo() {
    var n = po;
    return po <<= 1, !(po & 4194240) && (po = 64), n;
  }
  function ho(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
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
  function vs(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nu, xl, hs, Ot, ru, mo = !1, tt = [], li = null, gn = null, Kr = null, Ua = /* @__PURE__ */ new Map(), bl = /* @__PURE__ */ new Map(), un = [], Sn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        bl.delete(r.pointerId);
    }
  }
  function sr(n, r, l, u, d, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: m, targetContainers: [d] }, r !== null && (r = Ri(r), r !== null && xl(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
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
        return m = d.pointerId, bl.set(m, sr(bl.get(m) || null, n, r, l, u, d)), !0;
    }
    return !1;
  }
  function oi(n) {
    var r = tl(n.target);
    if (r !== null) {
      var l = me(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = gt(l), r !== null) {
            n.blockedOn = r, ru(n.priority, function() {
              hs(l);
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
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ou(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        yn = u, l.target.dispatchEvent(u), yn = null;
      } else
        return r = Ri(l), r !== null && xl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function yo(n, r, l) {
    au(n) && l.delete(r);
  }
  function go() {
    mo = !1, li !== null && au(li) && (li = null), gn !== null && au(gn) && (gn = null), Kr !== null && au(Kr) && (Kr = null), Ua.forEach(yo), bl.forEach(yo);
  }
  function kl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, mo || (mo = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, go)));
  }
  function ja(n) {
    function r(d) {
      return kl(d, n);
    }
    if (0 < tt.length) {
      kl(tt[0], n);
      for (var l = 1; l < tt.length; l++) {
        var u = tt[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (li !== null && kl(li, n), gn !== null && kl(gn, n), Kr !== null && kl(Kr, n), Ua.forEach(r), bl.forEach(r), l = 0; l < un.length; l++)
      u = un[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < un.length && (l = un[0], l.blockedOn === null); )
      oi(l), l.blockedOn === null && un.shift();
  }
  var Yi = _e.ReactCurrentBatchConfig, iu = !0;
  function Wi(n, r, l, u) {
    var d = Tt, m = Yi.transition;
    Yi.transition = null;
    try {
      Tt = 1, Ci(n, r, l, u);
    } finally {
      Tt = d, Yi.transition = m;
    }
  }
  function lu(n, r, l, u) {
    var d = Tt, m = Yi.transition;
    Yi.transition = null;
    try {
      Tt = 4, Ci(n, r, l, u);
    } finally {
      Tt = d, Yi.transition = m;
    }
  }
  function Ci(n, r, l, u) {
    if (iu) {
      var d = ou(n, r, l, u);
      if (d === null)
        Td(n, r, u, Qi, l), ms(n, u);
      else if (Xr(d, n, r, l, u))
        u.stopPropagation();
      else if (ms(n, u), r & 4 && -1 < Sn.indexOf(n)) {
        for (; d !== null; ) {
          var m = Ri(d);
          if (m !== null && nu(m), m = ou(n, r, l, u), m === null && Td(n, r, u, Qi, l), m === d)
            break;
          d = m;
        }
        d !== null && u.stopPropagation();
      } else
        Td(n, r, u, null, l);
    }
  }
  var Qi = null;
  function ou(n, r, l, u) {
    if (Qi = null, n = Tr(u), n = tl(n), n !== null)
      if (r = me(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = gt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
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
        switch (qr()) {
          case os:
            return 1;
          case gi:
            return 4;
          case ft:
          case fo:
            return 16;
          case $i:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ui = null, uu = null, E = null;
  function _() {
    if (E)
      return E;
    var n, r = uu, l = r.length, u, d = "value" in ui ? ui.value : ui.textContent, m = d.length;
    for (n = 0; n < l && r[n] === d[n]; n++)
      ;
    var R = l - n;
    for (u = 1; u <= R && r[l - u] === d[m - u]; u++)
      ;
    return E = d.slice(n, 1 < u ? 1 - u : void 0);
  }
  function V(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function G() {
    return !0;
  }
  function ce() {
    return !1;
  }
  function Ne(n) {
    function r(l, u, d, m, R) {
      this._reactName = l, this._targetInst = d, this.type = u, this.nativeEvent = m, this.target = R, this.currentTarget = null;
      for (var k in n)
        n.hasOwnProperty(k) && (l = n[k], this[k] = l ? l(m) : m[k]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? G : ce, this.isPropagationStopped = ce, this;
    }
    return D(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = G);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = G);
    }, persist: function() {
    }, isPersistent: G }), r;
  }
  var Ce = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Xe = Ne(Ce), dt = D({}, Ce, { view: 0, detail: 0 }), Ht = Ne(dt), $t, It, Yt, sn = D({}, dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _c, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Yt && (Yt && n.type === "mousemove" ? ($t = n.screenX - Yt.screenX, It = n.screenY - Yt.screenY) : It = $t = 0, Yt = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : It;
  } }), Dt = Ne(sn), _l = D({}, sn, { dataTransfer: 0 }), su = Ne(_l), gs = D({}, dt, { relatedTarget: 0 }), Ss = Ne(gs), qi = D({}, Ce, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Es = Ne(qi), Cs = D({}, Ce, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), dd = Ne(Cs), Uy = D({}, Ce, { data: 0 }), xv = Ne(Uy), bv = {
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
  }, pd = {
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
  }, kv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function _v(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = kv[n]) ? !!r[n] : !1;
  }
  function _c() {
    return _v;
  }
  var jy = D({}, dt, { key: function(n) {
    if (n.key) {
      var r = bv[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = V(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? pd[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _c, charCode: function(n) {
    return n.type === "keypress" ? V(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? V(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Gi = Ne(jy), Fy = D({}, sn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oc = Ne(Fy), vd = D({}, dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _c }), hd = Ne(vd), Py = D({}, Ce, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dc = Ne(Py), Ov = D({}, sn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zr = Ne(Ov), Ki = [9, 13, 27, 32], xn = g && "CompositionEvent" in window, Ca = null;
  g && "documentMode" in document && (Ca = document.documentMode);
  var md = g && "TextEvent" in window && !Ca, ws = g && (!xn || Ca && 8 < Ca && 11 >= Ca), Dv = " ", cu = !1;
  function Lv(n, r) {
    switch (n) {
      case "keyup":
        return Ki.indexOf(r.keyCode) !== -1;
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
  function Nv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Ol = !1;
  function Hy(n, r) {
    switch (n) {
      case "compositionend":
        return Nv(r);
      case "keypress":
        return r.which !== 32 ? null : (cu = !0, Dv);
      case "textInput":
        return n = r.data, n === Dv && cu ? null : n;
      default:
        return null;
    }
  }
  function By(n, r) {
    if (Ol)
      return n === "compositionend" || !xn && Lv(n, r) ? (n = _(), E = uu = ui = null, Ol = !1, n) : null;
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
        return ws && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Vy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yd(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Vy[n.type] : r === "textarea";
  }
  function Mv(n, r, l, u) {
    ri(u), r = Uc(r, "onChange"), 0 < r.length && (l = new Xe("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var Rs = null, Ts = null;
  function Av(n) {
    Kv(n, 0);
  }
  function Xi(n) {
    var r = vu(n);
    if (Yr(r))
      return n;
  }
  function gd(n, r) {
    if (n === "change")
      return r;
  }
  var Sd = !1;
  if (g) {
    var Lc;
    if (g) {
      var Ed = "oninput" in document;
      if (!Ed) {
        var zv = document.createElement("div");
        zv.setAttribute("oninput", "return;"), Ed = typeof zv.oninput == "function";
      }
      Lc = Ed;
    } else
      Lc = !1;
    Sd = Lc && (!document.documentMode || 9 < document.documentMode);
  }
  function Uv() {
    Rs && (Rs.detachEvent("onpropertychange", jv), Ts = Rs = null);
  }
  function jv(n) {
    if (n.propertyName === "value" && Xi(Ts)) {
      var r = [];
      Mv(r, Ts, n, Tr(n)), Cl(Av, r);
    }
  }
  function $y(n, r, l) {
    n === "focusin" ? (Uv(), Rs = r, Ts = l, Rs.attachEvent("onpropertychange", jv)) : n === "focusout" && Uv();
  }
  function Iy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Xi(Ts);
  }
  function Yy(n, r) {
    if (n === "click")
      return Xi(r);
  }
  function Wy(n, r) {
    if (n === "input" || n === "change")
      return Xi(r);
  }
  function Fv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var si = typeof Object.is == "function" ? Object.is : Fv;
  function fu(n, r) {
    if (si(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length)
      return !1;
    for (u = 0; u < l.length; u++) {
      var d = l[u];
      if (!U.call(r, d) || !si(n[d], r[d]))
        return !1;
    }
    return !0;
  }
  function Pv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Hv(n, r) {
    var l = Pv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r)
          return { node: l, offset: r - n };
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
      l = Pv(l);
    }
  }
  function Bv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Bv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Vv() {
    for (var n = window, r = Cr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = Cr(n.document);
    }
    return r;
  }
  function xs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function So(n) {
    var r = Vv(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Bv(l.ownerDocument.documentElement, l)) {
      if (u !== null && xs(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = l.textContent.length, m = Math.min(u.start, d);
          u = u.end === void 0 ? m : Math.min(u.end, d), !n.extend && m > u && (d = u, u = m, m = d), d = Hv(l, m);
          var R = Hv(
            l,
            u
          );
          d && R && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== R.node || n.focusOffset !== R.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), n.removeAllRanges(), m > u ? (n.addRange(r), n.extend(R.node, R.offset)) : (r.setEnd(R.node, R.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Nc = g && "documentMode" in document && 11 >= document.documentMode, Eo = null, Dl = null, bs = null, Cd = !1;
  function $v(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Cd || Eo == null || Eo !== Cr(u) || (u = Eo, "selectionStart" in u && xs(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), bs && fu(bs, u) || (bs = u, u = Uc(Dl, "onSelect"), 0 < u.length && (r = new Xe("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = Eo)));
  }
  function Mc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var du = { animationend: Mc("Animation", "AnimationEnd"), animationiteration: Mc("Animation", "AnimationIteration"), animationstart: Mc("Animation", "AnimationStart"), transitionend: Mc("Transition", "TransitionEnd") }, Ac = {}, Iv = {};
  g && (Iv = document.createElement("div").style, "AnimationEvent" in window || (delete du.animationend.animation, delete du.animationiteration.animation, delete du.animationstart.animation), "TransitionEvent" in window || delete du.transitionend.transition);
  function ks(n) {
    if (Ac[n])
      return Ac[n];
    if (!du[n])
      return n;
    var r = du[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Iv)
        return Ac[n] = r[l];
    return n;
  }
  var br = ks("animationend"), wd = ks("animationiteration"), Yv = ks("animationstart"), Wv = ks("transitionend"), Qv = /* @__PURE__ */ new Map(), qv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ll(n, r) {
    Qv.set(n, r), T(r, [n]);
  }
  for (var zc = 0; zc < qv.length; zc++) {
    var _s = qv[zc], Os = _s.toLowerCase(), Qy = _s[0].toUpperCase() + _s.slice(1);
    Ll(Os, "on" + Qy);
  }
  Ll(br, "onAnimationEnd"), Ll(wd, "onAnimationIteration"), Ll(Yv, "onAnimationStart"), Ll("dblclick", "onDoubleClick"), Ll("focusin", "onFocus"), Ll("focusout", "onBlur"), Ll(Wv, "onTransitionEnd"), C("onMouseEnter", ["mouseout", "mouseover"]), C("onMouseLeave", ["mouseout", "mouseover"]), C("onPointerEnter", ["pointerout", "pointerover"]), C("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Zi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));
  function Gv(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, pe(u, r, void 0, n), n.currentTarget = null;
  }
  function Kv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], d = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var R = u.length - 1; 0 <= R; R--) {
            var k = u[R], L = k.instance, W = k.currentTarget;
            if (k = k.listener, L !== m && d.isPropagationStopped())
              break e;
            Gv(d, k, W), m = L;
          }
        else
          for (R = 0; R < u.length; R++) {
            if (k = u[R], L = k.instance, W = k.currentTarget, k = k.listener, L !== m && d.isPropagationStopped())
              break e;
            Gv(d, k, W), m = L;
          }
      }
    }
    if (Ea)
      throw n = Vi, Ea = !1, Vi = null, n;
  }
  function Kt(n, r) {
    var l = r[Nd];
    l === void 0 && (l = r[Nd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (Rd(r, n, 2, !1), l.add(u));
  }
  function Ds(n, r, l) {
    var u = 0;
    r && (u |= 4), Rd(l, n, u, r);
  }
  var Ji = "_reactListening" + Math.random().toString(36).slice(2);
  function wi(n) {
    if (!n[Ji]) {
      n[Ji] = !0, v.forEach(function(l) {
        l !== "selectionchange" && (qy.has(l) || Ds(l, !1, n), Ds(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ji] || (r[Ji] = !0, Ds("selectionchange", !1, r));
    }
  }
  function Rd(n, r, l, u) {
    switch (ys(r)) {
      case 1:
        var d = Wi;
        break;
      case 4:
        d = lu;
        break;
      default:
        d = Ci;
    }
    l = d.bind(null, r, l, n), d = void 0, !ii || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), u ? d !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: d }) : n.addEventListener(r, l, !0) : d !== void 0 ? n.addEventListener(r, l, { passive: d }) : n.addEventListener(r, l, !1);
  }
  function Td(n, r, l, u, d) {
    var m = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var R = u.tag;
          if (R === 3 || R === 4) {
            var k = u.stateNode.containerInfo;
            if (k === d || k.nodeType === 8 && k.parentNode === d)
              break;
            if (R === 4)
              for (R = u.return; R !== null; ) {
                var L = R.tag;
                if ((L === 3 || L === 4) && (L = R.stateNode.containerInfo, L === d || L.nodeType === 8 && L.parentNode === d))
                  return;
                R = R.return;
              }
            for (; k !== null; ) {
              if (R = tl(k), R === null)
                return;
              if (L = R.tag, L === 5 || L === 6) {
                u = m = R;
                continue e;
              }
              k = k.parentNode;
            }
          }
          u = u.return;
        }
    Cl(function() {
      var W = m, le = Tr(l), ue = [];
      e: {
        var ae = Qv.get(n);
        if (ae !== void 0) {
          var ge = Xe, Oe = n;
          switch (n) {
            case "keypress":
              if (V(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ge = Gi;
              break;
            case "focusin":
              Oe = "focus", ge = Ss;
              break;
            case "focusout":
              Oe = "blur", ge = Ss;
              break;
            case "beforeblur":
            case "afterblur":
              ge = Ss;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ge = Dt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = su;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = hd;
              break;
            case br:
            case wd:
            case Yv:
              ge = Es;
              break;
            case Wv:
              ge = Dc;
              break;
            case "scroll":
              ge = Ht;
              break;
            case "wheel":
              ge = Zr;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = dd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = Oc;
          }
          var Me = (r & 4) !== 0, jn = !Me && n === "scroll", F = Me ? ae !== null ? ae + "Capture" : null : ae;
          Me = [];
          for (var M = W, B; M !== null; ) {
            B = M;
            var fe = B.stateNode;
            if (B.tag === 5 && fe !== null && (B = fe, F !== null && (fe = ai(M, F), fe != null && Me.push(pu(M, fe, B)))), jn)
              break;
            M = M.return;
          }
          0 < Me.length && (ae = new ge(ae, Oe, null, l, le), ue.push({ event: ae, listeners: Me }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ae = n === "mouseover" || n === "pointerover", ge = n === "mouseout" || n === "pointerout", ae && l !== yn && (Oe = l.relatedTarget || l.fromElement) && (tl(Oe) || Oe[ci]))
            break e;
          if ((ge || ae) && (ae = le.window === le ? le : (ae = le.ownerDocument) ? ae.defaultView || ae.parentWindow : window, ge ? (Oe = l.relatedTarget || l.toElement, ge = W, Oe = Oe ? tl(Oe) : null, Oe !== null && (jn = me(Oe), Oe !== jn || Oe.tag !== 5 && Oe.tag !== 6) && (Oe = null)) : (ge = null, Oe = W), ge !== Oe)) {
            if (Me = Dt, fe = "onMouseLeave", F = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && (Me = Oc, fe = "onPointerLeave", F = "onPointerEnter", M = "pointer"), jn = ge == null ? ae : vu(ge), B = Oe == null ? ae : vu(Oe), ae = new Me(fe, M + "leave", ge, l, le), ae.target = jn, ae.relatedTarget = B, fe = null, tl(le) === W && (Me = new Me(F, M + "enter", Oe, l, le), Me.target = B, Me.relatedTarget = jn, fe = Me), jn = fe, ge && Oe)
              t: {
                for (Me = ge, F = Oe, M = 0, B = Me; B; B = Co(B))
                  M++;
                for (B = 0, fe = F; fe; fe = Co(fe))
                  B++;
                for (; 0 < M - B; )
                  Me = Co(Me), M--;
                for (; 0 < B - M; )
                  F = Co(F), B--;
                for (; M--; ) {
                  if (Me === F || F !== null && Me === F.alternate)
                    break t;
                  Me = Co(Me), F = Co(F);
                }
                Me = null;
              }
            else
              Me = null;
            ge !== null && xd(ue, ae, ge, Me, !1), Oe !== null && jn !== null && xd(ue, jn, Oe, Me, !0);
          }
        }
        e: {
          if (ae = W ? vu(W) : window, ge = ae.nodeName && ae.nodeName.toLowerCase(), ge === "select" || ge === "input" && ae.type === "file")
            var ze = gd;
          else if (yd(ae))
            if (Sd)
              ze = Wy;
            else {
              ze = Iy;
              var qe = $y;
            }
          else
            (ge = ae.nodeName) && ge.toLowerCase() === "input" && (ae.type === "checkbox" || ae.type === "radio") && (ze = Yy);
          if (ze && (ze = ze(n, W))) {
            Mv(ue, ze, l, le);
            break e;
          }
          qe && qe(n, ae, W), n === "focusout" && (qe = ae._wrapperState) && qe.controlled && ae.type === "number" && Dr(ae, "number", ae.value);
        }
        switch (qe = W ? vu(W) : window, n) {
          case "focusin":
            (yd(qe) || qe.contentEditable === "true") && (Eo = qe, Dl = W, bs = null);
            break;
          case "focusout":
            bs = Dl = Eo = null;
            break;
          case "mousedown":
            Cd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Cd = !1, $v(ue, l, le);
            break;
          case "selectionchange":
            if (Nc)
              break;
          case "keydown":
          case "keyup":
            $v(ue, l, le);
        }
        var De;
        if (xn)
          e: {
            switch (n) {
              case "compositionstart":
                var Ke = "onCompositionStart";
                break e;
              case "compositionend":
                Ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ke = "onCompositionUpdate";
                break e;
            }
            Ke = void 0;
          }
        else
          Ol ? Lv(n, l) && (Ke = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ke = "onCompositionStart");
        Ke && (ws && l.locale !== "ko" && (Ol || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && Ol && (De = _()) : (ui = le, uu = "value" in ui ? ui.value : ui.textContent, Ol = !0)), qe = Uc(W, Ke), 0 < qe.length && (Ke = new xv(Ke, n, null, l, le), ue.push({ event: Ke, listeners: qe }), De ? Ke.data = De : (De = Nv(l), De !== null && (Ke.data = De)))), (De = md ? Hy(n, l) : By(n, l)) && (W = Uc(W, "onBeforeInput"), 0 < W.length && (le = new xv("onBeforeInput", "beforeinput", null, l, le), ue.push({ event: le, listeners: W }), le.data = De));
      }
      Kv(ue, r);
    });
  }
  function pu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Uc(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var d = n, m = d.stateNode;
      d.tag === 5 && m !== null && (d = m, m = ai(n, l), m != null && u.unshift(pu(n, m, d)), m = ai(n, r), m != null && u.push(pu(n, m, d))), n = n.return;
    }
    return u;
  }
  function Co(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function xd(n, r, l, u, d) {
    for (var m = r._reactName, R = []; l !== null && l !== u; ) {
      var k = l, L = k.alternate, W = k.stateNode;
      if (L !== null && L === u)
        break;
      k.tag === 5 && W !== null && (k = W, d ? (L = ai(l, m), L != null && R.unshift(pu(l, L, k))) : d || (L = ai(l, m), L != null && R.push(pu(l, L, k)))), l = l.return;
    }
    R.length !== 0 && n.push({ event: r, listeners: R });
  }
  var Xv = /\r\n?/g, bd = /\u0000|\uFFFD/g;
  function Zv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Xv, `
`).replace(bd, "");
  }
  function Ls(n, r, l) {
    if (r = Zv(r), Zv(n) !== r && l)
      throw Error(c(425));
  }
  function jc() {
  }
  var kd = null, _d = null;
  function wo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ns = typeof setTimeout == "function" ? setTimeout : void 0, Ms = typeof clearTimeout == "function" ? clearTimeout : void 0, Od = typeof Promise == "function" ? Promise : void 0, Jv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(n) {
    return Od.resolve(null).then(n).catch(Dd);
  } : Ns;
  function Dd(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ld(n, r) {
    var l = r, u = 0;
    do {
      var d = l.nextSibling;
      if (n.removeChild(l), d && d.nodeType === 8)
        if (l = d.data, l === "/$") {
          if (u === 0) {
            n.removeChild(d), ja(r);
            return;
          }
          u--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = d;
    } while (l);
    ja(r);
  }
  function wa(n) {
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
  function As(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var el = Math.random().toString(36).slice(2), Fa = "__reactFiber$" + el, zs = "__reactProps$" + el, ci = "__reactContainer$" + el, Nd = "__reactEvents$" + el, Gy = "__reactListeners$" + el, Ky = "__reactHandles$" + el;
  function tl(n) {
    var r = n[Fa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ci] || l[Fa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = As(n); n !== null; ) {
            if (l = n[Fa])
              return l;
            n = As(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ri(n) {
    return n = n[Fa] || n[ci], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function vu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(c(33));
  }
  function Fc(n) {
    return n[zs] || null;
  }
  var Ie = [], fi = -1;
  function Xt(n) {
    return { current: n };
  }
  function Ae(n) {
    0 > fi || (n.current = Ie[fi], Ie[fi] = null, fi--);
  }
  function Mt(n, r) {
    fi++, Ie[fi] = n.current, n.current = r;
  }
  var Pa = {}, Jn = Xt(Pa), rt = Xt(!1), Mr = Pa;
  function Ra(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Pa;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var d = {}, m;
    for (m in l)
      d[m] = r[m];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Vn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Jr() {
    Ae(rt), Ae(Jn);
  }
  function Ti(n, r, l) {
    if (Jn.current !== Pa)
      throw Error(c(168));
    Mt(Jn, r), Mt(rt, l);
  }
  function Nl(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return l;
    u = u.getChildContext();
    for (var d in u)
      if (!(d in r))
        throw Error(c(108, Ct(n) || "Unknown", d));
    return D({}, l, u);
  }
  function Ro(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Pa, Mr = Jn.current, Mt(Jn, n), Mt(rt, rt.current), !0;
  }
  function eh(n, r, l) {
    var u = n.stateNode;
    if (!u)
      throw Error(c(169));
    l ? (n = Nl(n, r, Mr), u.__reactInternalMemoizedMergedChildContext = n, Ae(rt), Ae(Jn), Mt(Jn, n)) : Ae(rt), Mt(rt, l);
  }
  var nl = null, Ml = !1, cr = !1;
  function Pc(n) {
    nl === null ? nl = [n] : nl.push(n);
  }
  function th(n) {
    Ml = !0, Pc(n);
  }
  function xi() {
    if (!cr && nl !== null) {
      cr = !0;
      var n = 0, r = Tt;
      try {
        var l = nl;
        for (Tt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        nl = null, Ml = !1;
      } catch (d) {
        throw nl !== null && (nl = nl.slice(n + 1)), en(os, xi), d;
      } finally {
        Tt = r, cr = !1;
      }
    }
    return null;
  }
  var Ha = [], Al = 0, Ba = null, To = 0, ea = [], ta = 0, di = null, na = 1, fr = "";
  function xo(n, r) {
    Ha[Al++] = To, Ha[Al++] = Ba, Ba = n, To = r;
  }
  function zl(n, r, l) {
    ea[ta++] = na, ea[ta++] = fr, ea[ta++] = di, di = n;
    var u = na;
    n = fr;
    var d = 32 - Nr(u) - 1;
    u &= ~(1 << d), l += 1;
    var m = 32 - Nr(r) + d;
    if (30 < m) {
      var R = d - d % 5;
      m = (u & (1 << R) - 1).toString(32), u >>= R, d -= R, na = 1 << 32 - Nr(r) + d | l << d | u, fr = m + n;
    } else
      na = 1 << m | l << d | u, fr = n;
  }
  function Hc(n) {
    n.return !== null && (xo(n, 1), zl(n, 1, 0));
  }
  function Bc(n) {
    for (; n === Ba; )
      Ba = Ha[--Al], Ha[Al] = null, To = Ha[--Al], Ha[Al] = null;
    for (; n === di; )
      di = ea[--ta], ea[ta] = null, fr = ea[--ta], ea[ta] = null, na = ea[--ta], ea[ta] = null;
  }
  var Ta = null, xa = null, cn = !1, Va = null;
  function Md(n, r) {
    var l = Ga(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Ad(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ta = n, xa = wa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ta = n, xa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = di !== null ? { id: na, overflow: fr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ga(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ta = n, xa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Vc(n) {
    if (cn) {
      var r = xa;
      if (r) {
        var l = r;
        if (!Ad(n, r)) {
          if (zd(n))
            throw Error(c(418));
          r = wa(l.nextSibling);
          var u = Ta;
          r && Ad(n, r) ? Md(u, l) : (n.flags = n.flags & -4097 | 2, cn = !1, Ta = n);
        }
      } else {
        if (zd(n))
          throw Error(c(418));
        n.flags = n.flags & -4097 | 2, cn = !1, Ta = n;
      }
    }
  }
  function Ud(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ta = n;
  }
  function $c(n) {
    if (n !== Ta)
      return !1;
    if (!cn)
      return Ud(n), cn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !wo(n.type, n.memoizedProps)), r && (r = xa)) {
      if (zd(n))
        throw nh(), Error(c(418));
      for (; r; )
        Md(n, r), r = wa(r.nextSibling);
    }
    if (Ud(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(c(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                xa = wa(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        xa = null;
      }
    } else
      xa = Ta ? wa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function nh() {
    for (var n = xa; n; )
      n = wa(n.nextSibling);
  }
  function hu() {
    xa = Ta = null, cn = !1;
  }
  function $n(n) {
    Va === null ? Va = [n] : Va.push(n);
  }
  var Xy = _e.ReactCurrentBatchConfig;
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = D({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var mu = Xt(null), bi = null, yu = null, Us = null;
  function jd() {
    Us = yu = bi = null;
  }
  function Fd(n) {
    var r = mu.current;
    Ae(mu), n._currentValue = r;
  }
  function Ul(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Nn(n, r) {
    bi = n, Us = yu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (la = !0), n.firstContext = null);
  }
  function de(n) {
    var r = n._currentValue;
    if (Us !== n)
      if (n = { context: n, memoizedValue: r, next: null }, yu === null) {
        if (bi === null)
          throw Error(c(308));
        yu = n, bi.dependencies = { lanes: 0, firstContext: n };
      } else
        yu = yu.next = n;
    return r;
  }
  var kr = null;
  function ba(n) {
    kr === null ? kr = [n] : kr.push(n);
  }
  function rh(n, r, l, u) {
    var d = r.interleaved;
    return d === null ? (l.next = l, ba(r)) : (l.next = d.next, d.next = l), r.interleaved = l, rl(n, u);
  }
  function rl(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var jl = !1;
  function Pd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ah(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function rn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Fl(n, r, l) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, wt & 2) {
      var d = u.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), u.pending = r, rl(n, l);
    }
    return d = u.interleaved, d === null ? (r.next = r, ba(u)) : (r.next = d.next, d.next = r), u.interleaved = r, rl(n, l);
  }
  function Ic(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ps(n, l);
    }
  }
  function ih(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var d = null, m = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var R = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          m === null ? d = m = R : m = m.next = R, l = l.next;
        } while (l !== null);
        m === null ? d = m = r : m = m.next = r;
      } else
        d = m = r;
      l = { baseState: u.baseState, firstBaseUpdate: d, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function js(n, r, l, u) {
    var d = n.updateQueue;
    jl = !1;
    var m = d.firstBaseUpdate, R = d.lastBaseUpdate, k = d.shared.pending;
    if (k !== null) {
      d.shared.pending = null;
      var L = k, W = L.next;
      L.next = null, R === null ? m = W : R.next = W, R = L;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, k = le.lastBaseUpdate, k !== R && (k === null ? le.firstBaseUpdate = W : k.next = W, le.lastBaseUpdate = L));
    }
    if (m !== null) {
      var ue = d.baseState;
      R = 0, le = W = L = null, k = m;
      do {
        var ae = k.lane, ge = k.eventTime;
        if ((u & ae) === ae) {
          le !== null && (le = le.next = {
            eventTime: ge,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var Oe = n, Me = k;
            switch (ae = r, ge = l, Me.tag) {
              case 1:
                if (Oe = Me.payload, typeof Oe == "function") {
                  ue = Oe.call(ge, ue, ae);
                  break e;
                }
                ue = Oe;
                break e;
              case 3:
                Oe.flags = Oe.flags & -65537 | 128;
              case 0:
                if (Oe = Me.payload, ae = typeof Oe == "function" ? Oe.call(ge, ue, ae) : Oe, ae == null)
                  break e;
                ue = D({}, ue, ae);
                break e;
              case 2:
                jl = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (n.flags |= 64, ae = d.effects, ae === null ? d.effects = [k] : ae.push(k));
        } else
          ge = { eventTime: ge, lane: ae, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, le === null ? (W = le = ge, L = ue) : le = le.next = ge, R |= ae;
        if (k = k.next, k === null) {
          if (k = d.shared.pending, k === null)
            break;
          ae = k, k = ae.next, ae.next = null, d.lastBaseUpdate = ae, d.shared.pending = null;
        }
      } while (!0);
      if (le === null && (L = ue), d.baseState = L, d.firstBaseUpdate = W, d.lastBaseUpdate = le, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          R |= d.lane, d = d.next;
        while (d !== r);
      } else
        m === null && (d.shared.lanes = 0);
      jo |= R, n.lanes = R, n.memoizedState = ue;
    }
  }
  function gu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], d = u.callback;
        if (d !== null) {
          if (u.callback = null, u = l, typeof d != "function")
            throw Error(c(191, d));
          d.call(u);
        }
      }
  }
  var bo = new h.Component().refs;
  function Hd(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : D({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Yc = { isMounted: function(n) {
    return (n = n._reactInternals) ? me(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = nr(), d = ol(n), m = rn(u, d);
    m.payload = r, l != null && (m.callback = l), r = Fl(n, m, d), r !== null && (Cn(r, n, d, u), Ic(r, n, d));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = nr(), d = ol(n), m = rn(u, d);
    m.tag = 1, m.payload = r, l != null && (m.callback = l), r = Fl(n, m, d), r !== null && (Cn(r, n, d, u), Ic(r, n, d));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = nr(), u = ol(n), d = rn(l, u);
    d.tag = 2, r != null && (d.callback = r), r = Fl(n, d, u), r !== null && (Cn(r, n, u, l), Ic(r, n, u));
  } };
  function lh(n, r, l, u, d, m, R) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, R) : r.prototype && r.prototype.isPureReactComponent ? !fu(l, u) || !fu(d, m) : !0;
  }
  function oh(n, r, l) {
    var u = !1, d = Pa, m = r.contextType;
    return typeof m == "object" && m !== null ? m = de(m) : (d = Vn(r) ? Mr : Jn.current, u = r.contextTypes, m = (u = u != null) ? Ra(n, d) : Pa), r = new r(l, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Yc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function uh(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Yc.enqueueReplaceState(r, r.state, null);
  }
  function Bd(n, r, l, u) {
    var d = n.stateNode;
    d.props = l, d.state = n.memoizedState, d.refs = bo, Pd(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? d.context = de(m) : (m = Vn(r) ? Mr : Jn.current, d.context = Ra(n, m)), d.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Hd(n, r, m, l), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && Yc.enqueueReplaceState(d, d.state, null), js(n, l, d, u), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Su(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(c(309));
          var u = l.stateNode;
        }
        if (!u)
          throw Error(c(147, n));
        var d = u, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(R) {
          var k = d.refs;
          k === bo && (k = d.refs = {}), R === null ? delete k[m] : k[m] = R;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string")
        throw Error(c(284));
      if (!l._owner)
        throw Error(c(290, n));
    }
    return n;
  }
  function Fs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function sh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function ch(n) {
    function r(F, M) {
      if (n) {
        var B = F.deletions;
        B === null ? (F.deletions = [M], F.flags |= 16) : B.push(M);
      }
    }
    function l(F, M) {
      if (!n)
        return null;
      for (; M !== null; )
        r(F, M), M = M.sibling;
      return null;
    }
    function u(F, M) {
      for (F = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? F.set(M.key, M) : F.set(M.index, M), M = M.sibling;
      return F;
    }
    function d(F, M) {
      return F = Wl(F, M), F.index = 0, F.sibling = null, F;
    }
    function m(F, M, B) {
      return F.index = B, n ? (B = F.alternate, B !== null ? (B = B.index, B < M ? (F.flags |= 2, M) : B) : (F.flags |= 2, M)) : (F.flags |= 1048576, M);
    }
    function R(F) {
      return n && F.alternate === null && (F.flags |= 2), F;
    }
    function k(F, M, B, fe) {
      return M === null || M.tag !== 6 ? (M = kf(B, F.mode, fe), M.return = F, M) : (M = d(M, B), M.return = F, M);
    }
    function L(F, M, B, fe) {
      var ze = B.type;
      return ze === yt ? le(F, M, B.props.children, fe, B.key) : M !== null && (M.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === Je && sh(ze) === M.type) ? (fe = d(M, B.props), fe.ref = Su(F, M, B), fe.return = F, fe) : (fe = xf(B.type, B.key, B.props, null, F.mode, fe), fe.ref = Su(F, M, B), fe.return = F, fe);
    }
    function W(F, M, B, fe) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== B.containerInfo || M.stateNode.implementation !== B.implementation ? (M = rc(B, F.mode, fe), M.return = F, M) : (M = d(M, B.children || []), M.return = F, M);
    }
    function le(F, M, B, fe, ze) {
      return M === null || M.tag !== 7 ? (M = Bo(B, F.mode, fe, ze), M.return = F, M) : (M = d(M, B), M.return = F, M);
    }
    function ue(F, M, B) {
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return M = kf("" + M, F.mode, B), M.return = F, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case mt:
            return B = xf(M.type, M.key, M.props, null, F.mode, B), B.ref = Su(F, null, M), B.return = F, B;
          case xe:
            return M = rc(M, F.mode, B), M.return = F, M;
          case Je:
            var fe = M._init;
            return ue(F, fe(M._payload), B);
        }
        if (wr(M) || be(M))
          return M = Bo(M, F.mode, B, null), M.return = F, M;
        Fs(F, M);
      }
      return null;
    }
    function ae(F, M, B, fe) {
      var ze = M !== null ? M.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number")
        return ze !== null ? null : k(F, M, "" + B, fe);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case mt:
            return B.key === ze ? L(F, M, B, fe) : null;
          case xe:
            return B.key === ze ? W(F, M, B, fe) : null;
          case Je:
            return ze = B._init, ae(
              F,
              M,
              ze(B._payload),
              fe
            );
        }
        if (wr(B) || be(B))
          return ze !== null ? null : le(F, M, B, fe, null);
        Fs(F, B);
      }
      return null;
    }
    function ge(F, M, B, fe, ze) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number")
        return F = F.get(B) || null, k(M, F, "" + fe, ze);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case mt:
            return F = F.get(fe.key === null ? B : fe.key) || null, L(M, F, fe, ze);
          case xe:
            return F = F.get(fe.key === null ? B : fe.key) || null, W(M, F, fe, ze);
          case Je:
            var qe = fe._init;
            return ge(F, M, B, qe(fe._payload), ze);
        }
        if (wr(fe) || be(fe))
          return F = F.get(B) || null, le(M, F, fe, ze, null);
        Fs(M, fe);
      }
      return null;
    }
    function Oe(F, M, B, fe) {
      for (var ze = null, qe = null, De = M, Ke = M = 0, Kn = null; De !== null && Ke < B.length; Ke++) {
        De.index > Ke ? (Kn = De, De = null) : Kn = De.sibling;
        var At = ae(F, De, B[Ke], fe);
        if (At === null) {
          De === null && (De = Kn);
          break;
        }
        n && De && At.alternate === null && r(F, De), M = m(At, M, Ke), qe === null ? ze = At : qe.sibling = At, qe = At, De = Kn;
      }
      if (Ke === B.length)
        return l(F, De), cn && xo(F, Ke), ze;
      if (De === null) {
        for (; Ke < B.length; Ke++)
          De = ue(F, B[Ke], fe), De !== null && (M = m(De, M, Ke), qe === null ? ze = De : qe.sibling = De, qe = De);
        return cn && xo(F, Ke), ze;
      }
      for (De = u(F, De); Ke < B.length; Ke++)
        Kn = ge(De, F, Ke, B[Ke], fe), Kn !== null && (n && Kn.alternate !== null && De.delete(Kn.key === null ? Ke : Kn.key), M = m(Kn, M, Ke), qe === null ? ze = Kn : qe.sibling = Kn, qe = Kn);
      return n && De.forEach(function(ul) {
        return r(F, ul);
      }), cn && xo(F, Ke), ze;
    }
    function Me(F, M, B, fe) {
      var ze = be(B);
      if (typeof ze != "function")
        throw Error(c(150));
      if (B = ze.call(B), B == null)
        throw Error(c(151));
      for (var qe = ze = null, De = M, Ke = M = 0, Kn = null, At = B.next(); De !== null && !At.done; Ke++, At = B.next()) {
        De.index > Ke ? (Kn = De, De = null) : Kn = De.sibling;
        var ul = ae(F, De, At.value, fe);
        if (ul === null) {
          De === null && (De = Kn);
          break;
        }
        n && De && ul.alternate === null && r(F, De), M = m(ul, M, Ke), qe === null ? ze = ul : qe.sibling = ul, qe = ul, De = Kn;
      }
      if (At.done)
        return l(
          F,
          De
        ), cn && xo(F, Ke), ze;
      if (De === null) {
        for (; !At.done; Ke++, At = B.next())
          At = ue(F, At.value, fe), At !== null && (M = m(At, M, Ke), qe === null ? ze = At : qe.sibling = At, qe = At);
        return cn && xo(F, Ke), ze;
      }
      for (De = u(F, De); !At.done; Ke++, At = B.next())
        At = ge(De, F, Ke, At.value, fe), At !== null && (n && At.alternate !== null && De.delete(At.key === null ? Ke : At.key), M = m(At, M, Ke), qe === null ? ze = At : qe.sibling = At, qe = At);
      return n && De.forEach(function(mg) {
        return r(F, mg);
      }), cn && xo(F, Ke), ze;
    }
    function jn(F, M, B, fe) {
      if (typeof B == "object" && B !== null && B.type === yt && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case mt:
            e: {
              for (var ze = B.key, qe = M; qe !== null; ) {
                if (qe.key === ze) {
                  if (ze = B.type, ze === yt) {
                    if (qe.tag === 7) {
                      l(F, qe.sibling), M = d(qe, B.props.children), M.return = F, F = M;
                      break e;
                    }
                  } else if (qe.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === Je && sh(ze) === qe.type) {
                    l(F, qe.sibling), M = d(qe, B.props), M.ref = Su(F, qe, B), M.return = F, F = M;
                    break e;
                  }
                  l(F, qe);
                  break;
                } else
                  r(F, qe);
                qe = qe.sibling;
              }
              B.type === yt ? (M = Bo(B.props.children, F.mode, fe, B.key), M.return = F, F = M) : (fe = xf(B.type, B.key, B.props, null, F.mode, fe), fe.ref = Su(F, M, B), fe.return = F, F = fe);
            }
            return R(F);
          case xe:
            e: {
              for (qe = B.key; M !== null; ) {
                if (M.key === qe)
                  if (M.tag === 4 && M.stateNode.containerInfo === B.containerInfo && M.stateNode.implementation === B.implementation) {
                    l(F, M.sibling), M = d(M, B.children || []), M.return = F, F = M;
                    break e;
                  } else {
                    l(F, M);
                    break;
                  }
                else
                  r(F, M);
                M = M.sibling;
              }
              M = rc(B, F.mode, fe), M.return = F, F = M;
            }
            return R(F);
          case Je:
            return qe = B._init, jn(F, M, qe(B._payload), fe);
        }
        if (wr(B))
          return Oe(F, M, B, fe);
        if (be(B))
          return Me(F, M, B, fe);
        Fs(F, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, M !== null && M.tag === 6 ? (l(F, M.sibling), M = d(M, B), M.return = F, F = M) : (l(F, M), M = kf(B, F.mode, fe), M.return = F, F = M), R(F)) : l(F, M);
    }
    return jn;
  }
  var Eu = ch(!0), fh = ch(!1), Ps = {}, ki = Xt(Ps), Cu = Xt(Ps), Hs = Xt(Ps);
  function Pl(n) {
    if (n === Ps)
      throw Error(c(174));
    return n;
  }
  function Vd(n, r) {
    switch (Mt(Hs, r), Mt(Cu, n), Mt(ki, Ps), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Lr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Lr(r, n);
    }
    Ae(ki), Mt(ki, r);
  }
  function wu() {
    Ae(ki), Ae(Cu), Ae(Hs);
  }
  function Wc(n) {
    Pl(Hs.current);
    var r = Pl(ki.current), l = Lr(r, n.type);
    r !== l && (Mt(Cu, n), Mt(ki, l));
  }
  function Ye(n) {
    Cu.current === n && (Ae(ki), Ae(Cu));
  }
  var Ue = Xt(0);
  function Lt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
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
  var bn = [];
  function $a() {
    for (var n = 0; n < bn.length; n++)
      bn[n]._workInProgressVersionPrimary = null;
    bn.length = 0;
  }
  var Bs = _e.ReactCurrentDispatcher, $d = _e.ReactCurrentBatchConfig, ko = 0, En = null, Mn = null, ee = null, An = !1, Qe = !1, _i = 0, al = 0;
  function kn() {
    throw Error(c(321));
  }
  function Ia(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!si(n[l], r[l]))
        return !1;
    return !0;
  }
  function _o(n, r, l, u, d, m) {
    if (ko = m, En = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Bs.current = n === null || n.memoizedState === null ? Zy : Jy, n = l(u, d), Qe) {
      m = 0;
      do {
        if (Qe = !1, _i = 0, 25 <= m)
          throw Error(c(301));
        m += 1, ee = Mn = null, r.updateQueue = null, Bs.current = eg, n = l(u, d);
      } while (Qe);
    }
    if (Bs.current = of, r = Mn !== null && Mn.next !== null, ko = 0, ee = Mn = En = null, An = !1, r)
      throw Error(c(300));
    return n;
  }
  function Hl() {
    var n = _i !== 0;
    return _i = 0, n;
  }
  function aa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ee === null ? En.memoizedState = ee = n : ee = ee.next = n, ee;
  }
  function ia() {
    if (Mn === null) {
      var n = En.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Mn.next;
    var r = ee === null ? En.memoizedState : ee.next;
    if (r !== null)
      ee = r, Mn = n;
    else {
      if (n === null)
        throw Error(c(310));
      Mn = n, n = { memoizedState: Mn.memoizedState, baseState: Mn.baseState, baseQueue: Mn.baseQueue, queue: Mn.queue, next: null }, ee === null ? En.memoizedState = ee = n : ee = ee.next = n;
    }
    return ee;
  }
  function Oo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Vs(n) {
    var r = ia(), l = r.queue;
    if (l === null)
      throw Error(c(311));
    l.lastRenderedReducer = n;
    var u = Mn, d = u.baseQueue, m = l.pending;
    if (m !== null) {
      if (d !== null) {
        var R = d.next;
        d.next = m.next, m.next = R;
      }
      u.baseQueue = d = m, l.pending = null;
    }
    if (d !== null) {
      m = d.next, u = u.baseState;
      var k = R = null, L = null, W = m;
      do {
        var le = W.lane;
        if ((ko & le) === le)
          L !== null && (L = L.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), u = W.hasEagerState ? W.eagerState : n(u, W.action);
        else {
          var ue = {
            lane: le,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          L === null ? (k = L = ue, R = u) : L = L.next = ue, En.lanes |= le, jo |= le;
        }
        W = W.next;
      } while (W !== null && W !== m);
      L === null ? R = u : L.next = k, si(u, r.memoizedState) || (la = !0), r.memoizedState = u, r.baseState = R, r.baseQueue = L, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      d = n;
      do
        m = d.lane, En.lanes |= m, jo |= m, d = d.next;
      while (d !== n);
    } else
      d === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function $s(n) {
    var r = ia(), l = r.queue;
    if (l === null)
      throw Error(c(311));
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
  function Qc() {
  }
  function qc(n, r) {
    var l = En, u = ia(), d = r(), m = !si(u.memoizedState, d);
    if (m && (u.memoizedState = d, la = !0), u = u.queue, Is(Xc.bind(null, l, u, n), [n]), u.getSnapshot !== r || m || ee !== null && ee.memoizedState.tag & 1) {
      if (l.flags |= 2048, Do(9, Kc.bind(null, l, u, d, r), void 0, null), On === null)
        throw Error(c(349));
      ko & 30 || Gc(l, r, d);
    }
    return d;
  }
  function Gc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Kc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Zc(r) && Jc(n);
  }
  function Xc(n, r, l) {
    return l(function() {
      Zc(r) && Jc(n);
    });
  }
  function Zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !si(n, l);
    } catch {
      return !0;
    }
  }
  function Jc(n) {
    var r = rl(n, 1);
    r !== null && Cn(r, n, 1, -1);
  }
  function ef(n) {
    var r = aa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Oo, lastRenderedState: n }, r.queue = n, n = n.dispatch = lf.bind(null, En, n), [r.memoizedState, n];
  }
  function Do(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function tf() {
    return ia().memoizedState;
  }
  function Ru(n, r, l, u) {
    var d = aa();
    En.flags |= n, d.memoizedState = Do(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function Lo(n, r, l, u) {
    var d = ia();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (Mn !== null) {
      var R = Mn.memoizedState;
      if (m = R.destroy, u !== null && Ia(u, R.deps)) {
        d.memoizedState = Do(r, l, m, u);
        return;
      }
    }
    En.flags |= n, d.memoizedState = Do(1 | r, l, m, u);
  }
  function No(n, r) {
    return Ru(8390656, 8, n, r);
  }
  function Is(n, r) {
    return Lo(2048, 8, n, r);
  }
  function nf(n, r) {
    return Lo(4, 2, n, r);
  }
  function rf(n, r) {
    return Lo(4, 4, n, r);
  }
  function af(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Id(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Lo(4, 4, af.bind(null, r, n), l);
  }
  function Mo() {
  }
  function Yd(n, r) {
    var l = ia();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ia(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Tu(n, r) {
    var l = ia();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ia(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Bl(n, r, l) {
    return ko & 21 ? (si(l, r) || (l = vo(), En.lanes |= l, jo |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, la = !0), n.memoizedState = l);
  }
  function ka(n, r) {
    var l = Tt;
    Tt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = $d.transition;
    $d.transition = {};
    try {
      n(!1), r();
    } finally {
      Tt = l, $d.transition = u;
    }
  }
  function dh() {
    return ia().memoizedState;
  }
  function an(n, r, l) {
    var u = ol(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Ys(n))
      xu(r, l);
    else if (l = rh(n, r, l, u), l !== null) {
      var d = nr();
      Cn(l, n, u, d), Ws(l, r, u);
    }
  }
  function lf(n, r, l) {
    var u = ol(n), d = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Ys(n))
      xu(r, d);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null))
        try {
          var R = r.lastRenderedState, k = m(R, l);
          if (d.hasEagerState = !0, d.eagerState = k, si(k, R)) {
            var L = r.interleaved;
            L === null ? (d.next = d, ba(r)) : (d.next = L.next, L.next = d), r.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
      l = rh(n, r, d, u), l !== null && (d = nr(), Cn(l, n, u, d), Ws(l, r, u));
    }
  }
  function Ys(n) {
    var r = n.alternate;
    return n === En || r !== null && r === En;
  }
  function xu(n, r) {
    Qe = An = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ws(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ps(n, l);
    }
  }
  var of = { readContext: de, useCallback: kn, useContext: kn, useEffect: kn, useImperativeHandle: kn, useInsertionEffect: kn, useLayoutEffect: kn, useMemo: kn, useReducer: kn, useRef: kn, useState: kn, useDebugValue: kn, useDeferredValue: kn, useTransition: kn, useMutableSource: kn, useSyncExternalStore: kn, useId: kn, unstable_isNewReconciler: !1 }, Zy = { readContext: de, useCallback: function(n, r) {
    return aa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: de, useEffect: No, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ru(
      4194308,
      4,
      af.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Ru(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Ru(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = aa();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = aa();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = an.bind(null, En, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = aa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ef, useDebugValue: Mo, useDeferredValue: function(n) {
    return aa().memoizedState = n;
  }, useTransition: function() {
    var n = ef(!1), r = n[0];
    return n = ka.bind(null, n[1]), aa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = En, d = aa();
    if (cn) {
      if (l === void 0)
        throw Error(c(407));
      l = l();
    } else {
      if (l = r(), On === null)
        throw Error(c(349));
      ko & 30 || Gc(u, r, l);
    }
    d.memoizedState = l;
    var m = { value: l, getSnapshot: r };
    return d.queue = m, No(Xc.bind(
      null,
      u,
      m,
      n
    ), [n]), u.flags |= 2048, Do(9, Kc.bind(null, u, m, l, r), void 0, null), l;
  }, useId: function() {
    var n = aa(), r = On.identifierPrefix;
    if (cn) {
      var l = fr, u = na;
      l = (u & ~(1 << 32 - Nr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = _i++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = al++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Jy = {
    readContext: de,
    useCallback: Yd,
    useContext: de,
    useEffect: Is,
    useImperativeHandle: Id,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: Tu,
    useReducer: Vs,
    useRef: tf,
    useState: function() {
      return Vs(Oo);
    },
    useDebugValue: Mo,
    useDeferredValue: function(n) {
      var r = ia();
      return Bl(r, Mn.memoizedState, n);
    },
    useTransition: function() {
      var n = Vs(Oo)[0], r = ia().memoizedState;
      return [n, r];
    },
    useMutableSource: Qc,
    useSyncExternalStore: qc,
    useId: dh,
    unstable_isNewReconciler: !1
  }, eg = { readContext: de, useCallback: Yd, useContext: de, useEffect: Is, useImperativeHandle: Id, useInsertionEffect: nf, useLayoutEffect: rf, useMemo: Tu, useReducer: $s, useRef: tf, useState: function() {
    return $s(Oo);
  }, useDebugValue: Mo, useDeferredValue: function(n) {
    var r = ia();
    return Mn === null ? r.memoizedState = n : Bl(r, Mn.memoizedState, n);
  }, useTransition: function() {
    var n = $s(Oo)[0], r = ia().memoizedState;
    return [n, r];
  }, useMutableSource: Qc, useSyncExternalStore: qc, useId: dh, unstable_isNewReconciler: !1 };
  function Vl(n, r) {
    try {
      var l = "", u = r;
      do
        l += ot(u), u = u.return;
      while (u);
      var d = l;
    } catch (m) {
      d = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: d, digest: null };
  }
  function Wd(n, r, l) {
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
  var ph = typeof WeakMap == "function" ? WeakMap : Map;
  function vh(n, r, l) {
    l = rn(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      Sf || (Sf = !0, tp = u), Qs(n, r);
    }, l;
  }
  function hh(n, r, l) {
    l = rn(-1, l), l.tag = 3;
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
      u = n.pingCache = new ph();
      var d = /* @__PURE__ */ new Set();
      u.set(r, d);
    } else
      d = u.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), u.set(r, d));
    d.has(l) || (d.add(l), n = cg.bind(null, n, r, l), r.then(n, n));
  }
  function mh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Qd(n, r, l, u, d) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = d, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = rn(-1, 1), r.tag = 2, Fl(l, r, 1))), l.lanes |= 1), n);
  }
  var yh = _e.ReactCurrentOwner, la = !1;
  function zn(n, r, l, u) {
    r.child = n === null ? fh(r, null, l, u) : Eu(r, n.child, l, u);
  }
  function bu(n, r, l, u, d) {
    l = l.render;
    var m = r.ref;
    return Nn(r, d), u = _o(n, r, l, u, m, d), l = Hl(), n !== null && !la ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Un(n, r, d)) : (cn && l && Hc(r), r.flags |= 1, zn(n, r, u, d), r.child);
  }
  function $l(n, r, l, u, d) {
    if (n === null) {
      var m = l.type;
      return typeof m == "function" && !lp(m) && m.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = m, uf(n, r, m, u, d)) : (n = xf(l.type, null, u, r, r.mode, d), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & d)) {
      var R = m.memoizedProps;
      if (l = l.compare, l = l !== null ? l : fu, l(R, u) && n.ref === r.ref)
        return Un(n, r, d);
    }
    return r.flags |= 1, n = Wl(m, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function uf(n, r, l, u, d) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (fu(m, u) && n.ref === r.ref)
        if (la = !1, r.pendingProps = u = m, (n.lanes & d) !== 0)
          n.flags & 131072 && (la = !0);
        else
          return r.lanes = n.lanes, Un(n, r, d);
    }
    return ut(n, r, l, u, d);
  }
  function oa(n, r, l) {
    var u = r.pendingProps, d = u.children, m = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Mt(Uu, ua), ua |= l;
      else {
        if (!(l & 1073741824))
          return n = m !== null ? m.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Mt(Uu, ua), ua |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : l, Mt(Uu, ua), ua |= u;
      }
    else
      m !== null ? (u = m.baseLanes | l, r.memoizedState = null) : u = l, Mt(Uu, ua), ua |= u;
    return zn(n, r, d, l), r.child;
  }
  function Ao(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ut(n, r, l, u, d) {
    var m = Vn(l) ? Mr : Jn.current;
    return m = Ra(r, m), Nn(r, d), l = _o(n, r, l, u, m, d), u = Hl(), n !== null && !la ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Un(n, r, d)) : (cn && u && Hc(r), r.flags |= 1, zn(n, r, l, d), r.child);
  }
  function Gs(n, r, l, u, d) {
    if (Vn(l)) {
      var m = !0;
      Ro(r);
    } else
      m = !1;
    if (Nn(r, d), r.stateNode === null)
      Xs(n, r), oh(r, l, u), Bd(r, l, u, d), u = !0;
    else if (n === null) {
      var R = r.stateNode, k = r.memoizedProps;
      R.props = k;
      var L = R.context, W = l.contextType;
      typeof W == "object" && W !== null ? W = de(W) : (W = Vn(l) ? Mr : Jn.current, W = Ra(r, W));
      var le = l.getDerivedStateFromProps, ue = typeof le == "function" || typeof R.getSnapshotBeforeUpdate == "function";
      ue || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (k !== u || L !== W) && uh(r, R, u, W), jl = !1;
      var ae = r.memoizedState;
      R.state = ae, js(r, u, R, d), L = r.memoizedState, k !== u || ae !== L || rt.current || jl ? (typeof le == "function" && (Hd(r, l, le, u), L = r.memoizedState), (k = jl || lh(r, l, k, u, ae, L, W)) ? (ue || typeof R.UNSAFE_componentWillMount != "function" && typeof R.componentWillMount != "function" || (typeof R.componentWillMount == "function" && R.componentWillMount(), typeof R.UNSAFE_componentWillMount == "function" && R.UNSAFE_componentWillMount()), typeof R.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof R.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), R.props = u, R.state = L, R.context = W, u = k) : (typeof R.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      R = r.stateNode, ah(n, r), k = r.memoizedProps, W = r.type === r.elementType ? k : ra(r.type, k), R.props = W, ue = r.pendingProps, ae = R.context, L = l.contextType, typeof L == "object" && L !== null ? L = de(L) : (L = Vn(l) ? Mr : Jn.current, L = Ra(r, L));
      var ge = l.getDerivedStateFromProps;
      (le = typeof ge == "function" || typeof R.getSnapshotBeforeUpdate == "function") || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (k !== ue || ae !== L) && uh(r, R, u, L), jl = !1, ae = r.memoizedState, R.state = ae, js(r, u, R, d);
      var Oe = r.memoizedState;
      k !== ue || ae !== Oe || rt.current || jl ? (typeof ge == "function" && (Hd(r, l, ge, u), Oe = r.memoizedState), (W = jl || lh(r, l, W, u, ae, Oe, L) || !1) ? (le || typeof R.UNSAFE_componentWillUpdate != "function" && typeof R.componentWillUpdate != "function" || (typeof R.componentWillUpdate == "function" && R.componentWillUpdate(u, Oe, L), typeof R.UNSAFE_componentWillUpdate == "function" && R.UNSAFE_componentWillUpdate(u, Oe, L)), typeof R.componentDidUpdate == "function" && (r.flags |= 4), typeof R.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof R.componentDidUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Oe), R.props = u, R.state = Oe, R.context = L, u = W) : (typeof R.componentDidUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return sf(n, r, l, u, m, d);
  }
  function sf(n, r, l, u, d, m) {
    Ao(n, r);
    var R = (r.flags & 128) !== 0;
    if (!u && !R)
      return d && eh(r, l, !1), Un(n, r, m);
    u = r.stateNode, yh.current = r;
    var k = R && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && R ? (r.child = Eu(r, n.child, null, m), r.child = Eu(r, null, k, m)) : zn(n, r, k, m), r.memoizedState = u.state, d && eh(r, l, !0), r.child;
  }
  function tg(n) {
    var r = n.stateNode;
    r.pendingContext ? Ti(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ti(n, r.context, !1), Vd(n, r.containerInfo);
  }
  function gh(n, r, l, u, d) {
    return hu(), $n(d), r.flags |= 256, zn(n, r, l, u), r.child;
  }
  var Ks = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zo(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Sh(n, r, l) {
    var u = r.pendingProps, d = Ue.current, m = !1, R = (r.flags & 128) !== 0, k;
    if ((k = R) || (k = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), k ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), Mt(Ue, d & 1), n === null)
      return Vc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (R = u.children, n = u.fallback, m ? (u = r.mode, m = r.child, R = { mode: "hidden", children: R }, !(u & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = R) : m = bf(R, u, 0, null), n = Bo(n, u, l, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = zo(l), r.memoizedState = Ks, n) : cf(r, R));
    if (d = n.memoizedState, d !== null && (k = d.dehydrated, k !== null))
      return qd(n, r, R, u, k, d, l);
    if (m) {
      m = u.fallback, R = r.mode, d = n.child, k = d.sibling;
      var L = { mode: "hidden", children: u.children };
      return !(R & 1) && r.child !== d ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = Wl(d, L), u.subtreeFlags = d.subtreeFlags & 14680064), k !== null ? m = Wl(k, m) : (m = Bo(m, R, l, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, R = n.child.memoizedState, R = R === null ? zo(l) : { baseLanes: R.baseLanes | l, cachePool: null, transitions: R.transitions }, m.memoizedState = R, m.childLanes = n.childLanes & ~l, r.memoizedState = Ks, u;
    }
    return m = n.child, n = m.sibling, u = Wl(m, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function cf(n, r) {
    return r = bf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ff(n, r, l, u) {
    return u !== null && $n(u), Eu(r, n.child, null, l), n = cf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function qd(n, r, l, u, d, m, R) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = Wd(Error(c(422))), ff(n, r, R, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, d = r.mode, u = bf({ mode: "visible", children: u.children }, d, 0, null), m = Bo(m, d, R, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, r.mode & 1 && Eu(r, n.child, null, R), r.child.memoizedState = zo(R), r.memoizedState = Ks, m);
    if (!(r.mode & 1))
      return ff(n, r, R, null);
    if (d.data === "$!") {
      if (u = d.nextSibling && d.nextSibling.dataset, u)
        var k = u.dgst;
      return u = k, m = Error(c(419)), u = Wd(m, u, void 0), ff(n, r, R, u);
    }
    if (k = (R & n.childLanes) !== 0, la || k) {
      if (u = On, u !== null) {
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
        d = d & (u.suspendedLanes | R) ? 0 : d, d !== 0 && d !== m.retryLane && (m.retryLane = d, rl(n, d), Cn(u, n, d, -1));
      }
      return nc(), u = Wd(Error(c(421))), ff(n, r, R, u);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = n.child, r = ip.bind(null, n), d._reactRetry = r, null) : (n = m.treeContext, xa = wa(d.nextSibling), Ta = r, cn = !0, Va = null, n !== null && (ea[ta++] = na, ea[ta++] = fr, ea[ta++] = di, na = n.id, fr = n.overflow, di = r), r = cf(r, u.children), r.flags |= 4096, r);
  }
  function Eh(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Ul(n.return, r, l);
  }
  function df(n, r, l, u, d) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: d } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = l, m.tailMode = d);
  }
  function Gd(n, r, l) {
    var u = r.pendingProps, d = u.revealOrder, m = u.tail;
    if (zn(n, r, u.children, l), u = Ue.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Eh(n, l, r);
            else if (n.tag === 19)
              Eh(n, l, r);
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
      u &= 1;
    }
    if (Mt(Ue, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (l = r.child, d = null; l !== null; )
            n = l.alternate, n !== null && Lt(n) === null && (d = l), l = l.sibling;
          l = d, l === null ? (d = r.child, r.child = null) : (d = l.sibling, l.sibling = null), df(r, !1, d, l, m);
          break;
        case "backwards":
          for (l = null, d = r.child, r.child = null; d !== null; ) {
            if (n = d.alternate, n !== null && Lt(n) === null) {
              r.child = d;
              break;
            }
            n = d.sibling, d.sibling = l, l = d, d = n;
          }
          df(r, !0, l, null, m);
          break;
        case "together":
          df(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Xs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Un(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), jo |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, l = Wl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Wl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function il(n, r, l) {
    switch (r.tag) {
      case 3:
        tg(r), hu();
        break;
      case 5:
        Wc(r);
        break;
      case 1:
        Vn(r.type) && Ro(r);
        break;
      case 4:
        Vd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, d = r.memoizedProps.value;
        Mt(mu, u._currentValue), u._currentValue = d;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Mt(Ue, Ue.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Sh(n, r, l) : (Mt(Ue, Ue.current & 1), n = Un(n, r, l), n !== null ? n.sibling : null);
        Mt(Ue, Ue.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return Gd(n, r, l);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Mt(Ue, Ue.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, oa(n, r, l);
    }
    return Un(n, r, l);
  }
  var Oi, ku, _u, Ya;
  Oi = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ku = function() {
  }, _u = function(n, r, l, u) {
    var d = n.memoizedProps;
    if (d !== u) {
      n = r.stateNode, Pl(ki.current);
      var m = null;
      switch (l) {
        case "input":
          d = Tn(n, d), u = Tn(n, u), m = [];
          break;
        case "select":
          d = D({}, d, { value: void 0 }), u = D({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          d = va(n, d), u = va(n, u), m = [];
          break;
        default:
          typeof d.onClick != "function" && typeof u.onClick == "function" && (n.onclick = jc);
      }
      Nt(l, u);
      var R;
      l = null;
      for (W in d)
        if (!u.hasOwnProperty(W) && d.hasOwnProperty(W) && d[W] != null)
          if (W === "style") {
            var k = d[W];
            for (R in k)
              k.hasOwnProperty(R) && (l || (l = {}), l[R] = "");
          } else
            W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (w.hasOwnProperty(W) ? m || (m = []) : (m = m || []).push(W, null));
      for (W in u) {
        var L = u[W];
        if (k = d != null ? d[W] : void 0, u.hasOwnProperty(W) && L !== k && (L != null || k != null))
          if (W === "style")
            if (k) {
              for (R in k)
                !k.hasOwnProperty(R) || L && L.hasOwnProperty(R) || (l || (l = {}), l[R] = "");
              for (R in L)
                L.hasOwnProperty(R) && k[R] !== L[R] && (l || (l = {}), l[R] = L[R]);
            } else
              l || (m || (m = []), m.push(
                W,
                l
              )), l = L;
          else
            W === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, k = k ? k.__html : void 0, L != null && k !== L && (m = m || []).push(W, L)) : W === "children" ? typeof L != "string" && typeof L != "number" || (m = m || []).push(W, "" + L) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (w.hasOwnProperty(W) ? (L != null && W === "onScroll" && Kt("scroll", n), m || k === L || (m = [])) : (m = m || []).push(W, L));
      }
      l && (m = m || []).push("style", l);
      var W = m;
      (r.updateQueue = W) && (r.flags |= 4);
    }
  }, Ya = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function _n(n, r) {
    if (!cn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var u = null; l !== null; )
            l.alternate !== null && (u = l), l = l.sibling;
          u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function _r(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r)
      for (var d = n.child; d !== null; )
        l |= d.lanes | d.childLanes, u |= d.subtreeFlags & 14680064, u |= d.flags & 14680064, d.return = n, d = d.sibling;
    else
      for (d = n.child; d !== null; )
        l |= d.lanes | d.childLanes, u |= d.subtreeFlags, u |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function ng(n, r, l) {
    var u = r.pendingProps;
    switch (Bc(r), r.tag) {
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
        return u = r.stateNode, wu(), Ae(rt), Ae(Jn), $a(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && ($c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Va !== null && (np(Va), Va = null))), ku(n, r), _r(r), null;
      case 5:
        Ye(r);
        var d = Pl(Hs.current);
        if (l = r.type, n !== null && r.stateNode != null)
          _u(n, r, l, u, d), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(c(166));
            return _r(r), null;
          }
          if (n = Pl(ki.current), $c(r)) {
            u = r.stateNode, l = r.type;
            var m = r.memoizedProps;
            switch (u[Fa] = r, u[zs] = m, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Kt("cancel", u), Kt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", u);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Zi.length; d++)
                  Kt(Zi[d], u);
                break;
              case "source":
                Kt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Kt(
                  "error",
                  u
                ), Kt("load", u);
                break;
              case "details":
                Kt("toggle", u);
                break;
              case "input":
                or(u, m), Kt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, Kt("invalid", u);
                break;
              case "textarea":
                ha(u, m), Kt("invalid", u);
            }
            Nt(l, m), d = null;
            for (var R in m)
              if (m.hasOwnProperty(R)) {
                var k = m[R];
                R === "children" ? typeof k == "string" ? u.textContent !== k && (m.suppressHydrationWarning !== !0 && Ls(u.textContent, k, n), d = ["children", k]) : typeof k == "number" && u.textContent !== "" + k && (m.suppressHydrationWarning !== !0 && Ls(
                  u.textContent,
                  k,
                  n
                ), d = ["children", "" + k]) : w.hasOwnProperty(R) && k != null && R === "onScroll" && Kt("scroll", u);
              }
            switch (l) {
              case "input":
                lr(u), Hn(u, m, !0);
                break;
              case "textarea":
                lr(u), ma(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (u.onclick = jc);
            }
            u = d, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            R = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ur(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = R.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = R.createElement(l, { is: u.is }) : (n = R.createElement(l), l === "select" && (R = n, u.multiple ? R.multiple = !0 : u.size && (R.size = u.size))) : n = R.createElementNS(n, l), n[Fa] = r, n[zs] = u, Oi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (R = Ln(l, u), l) {
                case "dialog":
                  Kt("cancel", n), Kt("close", n), d = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", n), d = u;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Zi.length; d++)
                    Kt(Zi[d], n);
                  d = u;
                  break;
                case "source":
                  Kt("error", n), d = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Kt(
                    "error",
                    n
                  ), Kt("load", n), d = u;
                  break;
                case "details":
                  Kt("toggle", n), d = u;
                  break;
                case "input":
                  or(n, u), d = Tn(n, u), Kt("invalid", n);
                  break;
                case "option":
                  d = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, d = D({}, u, { value: void 0 }), Kt("invalid", n);
                  break;
                case "textarea":
                  ha(n, u), d = va(n, u), Kt("invalid", n);
                  break;
                default:
                  d = u;
              }
              Nt(l, d), k = d;
              for (m in k)
                if (k.hasOwnProperty(m)) {
                  var L = k[m];
                  m === "style" ? ct(n, L) : m === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && ya(n, L)) : m === "children" ? typeof L == "string" ? (l !== "textarea" || L !== "") && ga(n, L) : typeof L == "number" && ga(n, "" + L) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (w.hasOwnProperty(m) ? L != null && m === "onScroll" && Kt("scroll", n) : L != null && Pe(n, m, L, R));
                }
              switch (l) {
                case "input":
                  lr(n), Hn(n, u, !1);
                  break;
                case "textarea":
                  lr(n), ma(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + ht(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, m = u.value, m != null ? Wn(n, !!u.multiple, m, !1) : u.defaultValue != null && Wn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (n.onclick = jc);
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
        if (n && r.stateNode != null)
          Ya(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(c(166));
          if (l = Pl(Hs.current), Pl(ki.current), $c(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[Fa] = r, (m = u.nodeValue !== l) && (n = Ta, n !== null))
              switch (n.tag) {
                case 3:
                  Ls(u.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ls(u.nodeValue, l, (n.mode & 1) !== 0);
              }
            m && (r.flags |= 4);
          } else
            u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[Fa] = r, r.stateNode = u;
        }
        return _r(r), null;
      case 13:
        if (Ae(Ue), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (cn && xa !== null && r.mode & 1 && !(r.flags & 128))
            nh(), hu(), r.flags |= 98560, m = !1;
          else if (m = $c(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m)
                throw Error(c(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m)
                throw Error(c(317));
              m[Fa] = r;
            } else
              hu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _r(r), m = !1;
          } else
            Va !== null && (np(Va), Va = null), m = !0;
          if (!m)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ue.current & 1 ? qn === 0 && (qn = 3) : nc())), r.updateQueue !== null && (r.flags |= 4), _r(r), null);
      case 4:
        return wu(), ku(n, r), n === null && wi(r.stateNode.containerInfo), _r(r), null;
      case 10:
        return Fd(r.type._context), _r(r), null;
      case 17:
        return Vn(r.type) && Jr(), _r(r), null;
      case 19:
        if (Ae(Ue), m = r.memoizedState, m === null)
          return _r(r), null;
        if (u = (r.flags & 128) !== 0, R = m.rendering, R === null)
          if (u)
            _n(m, !1);
          else {
            if (qn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (R = Lt(n), R !== null) {
                  for (r.flags |= 128, _n(m, !1), u = R.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; )
                    m = l, n = u, m.flags &= 14680066, R = m.alternate, R === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = R.childLanes, m.lanes = R.lanes, m.child = R.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = R.memoizedProps, m.memoizedState = R.memoizedState, m.updateQueue = R.updateQueue, m.type = R.type, n = R.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Mt(Ue, Ue.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            m.tail !== null && nn() > Fu && (r.flags |= 128, u = !0, _n(m, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = Lt(R), n !== null) {
              if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _n(m, !0), m.tail === null && m.tailMode === "hidden" && !R.alternate && !cn)
                return _r(r), null;
            } else
              2 * nn() - m.renderingStartTime > Fu && l !== 1073741824 && (r.flags |= 128, u = !0, _n(m, !1), r.lanes = 4194304);
          m.isBackwards ? (R.sibling = r.child, r.child = R) : (l = m.last, l !== null ? l.sibling = R : r.child = R, m.last = R);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = nn(), r.sibling = null, l = Ue.current, Mt(Ue, u ? l & 1 | 2 : l & 1), r) : (_r(r), null);
      case 22:
      case 23:
        return Rf(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ua & 1073741824 && (_r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function rg(n, r) {
    switch (Bc(r), r.tag) {
      case 1:
        return Vn(r.type) && Jr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wu(), Ae(rt), Ae(Jn), $a(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ye(r), null;
      case 13:
        if (Ae(Ue), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(c(340));
          hu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ae(Ue), null;
      case 4:
        return wu(), null;
      case 10:
        return Fd(r.type._context), null;
      case 22:
      case 23:
        return Rf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ou = !1, dr = !1, pf = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function Du(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          Dn(n, r, u);
        }
      else
        l.current = null;
  }
  function Kd(n, r, l) {
    try {
      l();
    } catch (u) {
      Dn(n, r, u);
    }
  }
  var vf = !1;
  function ag(n, r) {
    if (kd = iu, n = Vv(), xs(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
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
            var R = 0, k = -1, L = -1, W = 0, le = 0, ue = n, ae = null;
            t:
              for (; ; ) {
                for (var ge; ue !== l || d !== 0 && ue.nodeType !== 3 || (k = R + d), ue !== m || u !== 0 && ue.nodeType !== 3 || (L = R + u), ue.nodeType === 3 && (R += ue.nodeValue.length), (ge = ue.firstChild) !== null; )
                  ae = ue, ue = ge;
                for (; ; ) {
                  if (ue === n)
                    break t;
                  if (ae === l && ++W === d && (k = R), ae === m && ++le === u && (L = R), (ge = ue.nextSibling) !== null)
                    break;
                  ue = ae, ae = ue.parentNode;
                }
                ue = ge;
              }
            l = k === -1 || L === -1 ? null : { start: k, end: L };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (_d = { focusedElem: n, selectionRange: l }, iu = !1, ke = r; ke !== null; )
      if (r = ke, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ke = n;
      else
        for (; ke !== null; ) {
          r = ke;
          try {
            var Oe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Oe !== null) {
                    var Me = Oe.memoizedProps, jn = Oe.memoizedState, F = r.stateNode, M = F.getSnapshotBeforeUpdate(r.elementType === r.type ? Me : ra(r.type, Me), jn);
                    F.__reactInternalSnapshotBeforeUpdate = M;
                  }
                  break;
                case 3:
                  var B = r.stateNode.containerInfo;
                  B.nodeType === 1 ? B.textContent = "" : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(c(163));
              }
          } catch (fe) {
            Dn(r, r.return, fe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ke = n;
            break;
          }
          ke = r.return;
        }
    return Oe = vf, vf = !1, Oe;
  }
  function Lu(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var d = u = u.next;
      do {
        if ((d.tag & n) === n) {
          var m = d.destroy;
          d.destroy = void 0, m !== void 0 && Kd(r, l, m);
        }
        d = d.next;
      } while (d !== u);
    }
  }
  function hf(n, r) {
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
  function mf(n) {
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
  function Ch(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ch(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Fa], delete r[zs], delete r[Nd], delete r[Gy], delete r[Ky])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Xd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function wh(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Xd(n.return))
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
  function Zs(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = jc));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Zs(n, r, l), n = n.sibling; n !== null; )
        Zs(n, r, l), n = n.sibling;
  }
  function Nu(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (Nu(n, r, l), n = n.sibling; n !== null; )
        Nu(n, r, l), n = n.sibling;
  }
  var mn = null, er = !1;
  function Ar(n, r, l) {
    for (l = l.child; l !== null; )
      Mu(n, r, l), l = l.sibling;
  }
  function Mu(n, r, l) {
    if (Gr && typeof Gr.onCommitFiberUnmount == "function")
      try {
        Gr.onCommitFiberUnmount(wl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        dr || Du(l, r);
      case 6:
        var u = mn, d = er;
        mn = null, Ar(n, r, l), mn = u, er = d, mn !== null && (er ? (n = mn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : mn.removeChild(l.stateNode));
        break;
      case 18:
        mn !== null && (er ? (n = mn, l = l.stateNode, n.nodeType === 8 ? Ld(n.parentNode, l) : n.nodeType === 1 && Ld(n, l), ja(n)) : Ld(mn, l.stateNode));
        break;
      case 4:
        u = mn, d = er, mn = l.stateNode.containerInfo, er = !0, Ar(n, r, l), mn = u, er = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!dr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          d = u = u.next;
          do {
            var m = d, R = m.destroy;
            m = m.tag, R !== void 0 && (m & 2 || m & 4) && Kd(l, r, R), d = d.next;
          } while (d !== u);
        }
        Ar(n, r, l);
        break;
      case 1:
        if (!dr && (Du(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
          } catch (k) {
            Dn(l, r, k);
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
      l === null && (l = n.stateNode = new pf()), r.forEach(function(u) {
        var d = fg.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(d, d));
      });
    }
  }
  function tr(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var d = l[u];
        try {
          var m = n, R = r, k = R;
          e:
            for (; k !== null; ) {
              switch (k.tag) {
                case 5:
                  mn = k.stateNode, er = !1;
                  break e;
                case 3:
                  mn = k.stateNode.containerInfo, er = !0;
                  break e;
                case 4:
                  mn = k.stateNode.containerInfo, er = !0;
                  break e;
              }
              k = k.return;
            }
          if (mn === null)
            throw Error(c(160));
          Mu(m, R, d), mn = null, er = !1;
          var L = d.alternate;
          L !== null && (L.return = null), d.return = null;
        } catch (W) {
          Dn(d, r, W);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Rh(r, n), r = r.sibling;
  }
  function Rh(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (tr(r, n), Di(n), u & 4) {
          try {
            Lu(3, n, n.return), hf(3, n);
          } catch (Me) {
            Dn(n, n.return, Me);
          }
          try {
            Lu(5, n, n.return);
          } catch (Me) {
            Dn(n, n.return, Me);
          }
        }
        break;
      case 1:
        tr(r, n), Di(n), u & 512 && l !== null && Du(l, l.return);
        break;
      case 5:
        if (tr(r, n), Di(n), u & 512 && l !== null && Du(l, l.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            ga(d, "");
          } catch (Me) {
            Dn(n, n.return, Me);
          }
        }
        if (u & 4 && (d = n.stateNode, d != null)) {
          var m = n.memoizedProps, R = l !== null ? l.memoizedProps : m, k = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null)
            try {
              k === "input" && m.type === "radio" && m.name != null && Yn(d, m), Ln(k, R);
              var W = Ln(k, m);
              for (R = 0; R < L.length; R += 2) {
                var le = L[R], ue = L[R + 1];
                le === "style" ? ct(d, ue) : le === "dangerouslySetInnerHTML" ? ya(d, ue) : le === "children" ? ga(d, ue) : Pe(d, le, ue, W);
              }
              switch (k) {
                case "input":
                  Pn(d, m);
                  break;
                case "textarea":
                  Rr(d, m);
                  break;
                case "select":
                  var ae = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!m.multiple;
                  var ge = m.value;
                  ge != null ? Wn(d, !!m.multiple, ge, !1) : ae !== !!m.multiple && (m.defaultValue != null ? Wn(
                    d,
                    !!m.multiple,
                    m.defaultValue,
                    !0
                  ) : Wn(d, !!m.multiple, m.multiple ? [] : "", !1));
              }
              d[zs] = m;
            } catch (Me) {
              Dn(n, n.return, Me);
            }
        }
        break;
      case 6:
        if (tr(r, n), Di(n), u & 4) {
          if (n.stateNode === null)
            throw Error(c(162));
          d = n.stateNode, m = n.memoizedProps;
          try {
            d.nodeValue = m;
          } catch (Me) {
            Dn(n, n.return, Me);
          }
        }
        break;
      case 3:
        if (tr(r, n), Di(n), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ja(r.containerInfo);
          } catch (Me) {
            Dn(n, n.return, Me);
          }
        break;
      case 4:
        tr(r, n), Di(n);
        break;
      case 13:
        tr(r, n), Di(n), d = n.child, d.flags & 8192 && (m = d.memoizedState !== null, d.stateNode.isHidden = m, !m || d.alternate !== null && d.alternate.memoizedState !== null || (gf = nn())), u & 4 && Au(n);
        break;
      case 22:
        if (le = l !== null && l.memoizedState !== null, n.mode & 1 ? (dr = (W = dr) || le, tr(r, n), dr = W) : tr(r, n), Di(n), u & 8192) {
          if (W = n.memoizedState !== null, (n.stateNode.isHidden = W) && !le && n.mode & 1)
            for (ke = n, le = n.child; le !== null; ) {
              for (ue = ke = le; ke !== null; ) {
                switch (ae = ke, ge = ae.child, ae.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Lu(4, ae, ae.return);
                    break;
                  case 1:
                    Du(ae, ae.return);
                    var Oe = ae.stateNode;
                    if (typeof Oe.componentWillUnmount == "function") {
                      u = ae, l = ae.return;
                      try {
                        r = u, Oe.props = r.memoizedProps, Oe.state = r.memoizedState, Oe.componentWillUnmount();
                      } catch (Me) {
                        Dn(u, l, Me);
                      }
                    }
                    break;
                  case 5:
                    Du(ae, ae.return);
                    break;
                  case 22:
                    if (ae.memoizedState !== null) {
                      Th(ue);
                      continue;
                    }
                }
                ge !== null ? (ge.return = ae, ke = ge) : Th(ue);
              }
              le = le.sibling;
            }
          e:
            for (le = null, ue = n; ; ) {
              if (ue.tag === 5) {
                if (le === null) {
                  le = ue;
                  try {
                    d = ue.stateNode, W ? (m = d.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (k = ue.stateNode, L = ue.memoizedProps.style, R = L != null && L.hasOwnProperty("display") ? L.display : null, k.style.display = Fe("display", R));
                  } catch (Me) {
                    Dn(n, n.return, Me);
                  }
                }
              } else if (ue.tag === 6) {
                if (le === null)
                  try {
                    ue.stateNode.nodeValue = W ? "" : ue.memoizedProps;
                  } catch (Me) {
                    Dn(n, n.return, Me);
                  }
              } else if ((ue.tag !== 22 && ue.tag !== 23 || ue.memoizedState === null || ue === n) && ue.child !== null) {
                ue.child.return = ue, ue = ue.child;
                continue;
              }
              if (ue === n)
                break e;
              for (; ue.sibling === null; ) {
                if (ue.return === null || ue.return === n)
                  break e;
                le === ue && (le = null), ue = ue.return;
              }
              le === ue && (le = null), ue.sibling.return = ue.return, ue = ue.sibling;
            }
        }
        break;
      case 19:
        tr(r, n), Di(n), u & 4 && Au(n);
        break;
      case 21:
        break;
      default:
        tr(
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
            if (Xd(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(c(160));
        }
        switch (u.tag) {
          case 5:
            var d = u.stateNode;
            u.flags & 32 && (ga(d, ""), u.flags &= -33);
            var m = wh(n);
            Nu(n, m, d);
            break;
          case 3:
          case 4:
            var R = u.stateNode.containerInfo, k = wh(n);
            Zs(n, k, R);
            break;
          default:
            throw Error(c(161));
        }
      } catch (L) {
        Dn(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ig(n, r, l) {
    ke = n, Zd(n);
  }
  function Zd(n, r, l) {
    for (var u = (n.mode & 1) !== 0; ke !== null; ) {
      var d = ke, m = d.child;
      if (d.tag === 22 && u) {
        var R = d.memoizedState !== null || Ou;
        if (!R) {
          var k = d.alternate, L = k !== null && k.memoizedState !== null || dr;
          k = Ou;
          var W = dr;
          if (Ou = R, (dr = L) && !W)
            for (ke = d; ke !== null; )
              R = ke, L = R.child, R.tag === 22 && R.memoizedState !== null ? Jd(d) : L !== null ? (L.return = R, ke = L) : Jd(d);
          for (; m !== null; )
            ke = m, Zd(m), m = m.sibling;
          ke = d, Ou = k, dr = W;
        }
        zu(n);
      } else
        d.subtreeFlags & 8772 && m !== null ? (m.return = d, ke = m) : zu(n);
    }
  }
  function zu(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                dr || hf(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !dr)
                  if (l === null)
                    u.componentDidMount();
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
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
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
                var k = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = k;
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
                  var W = r.alternate;
                  if (W !== null) {
                    var le = W.memoizedState;
                    if (le !== null) {
                      var ue = le.dehydrated;
                      ue !== null && ja(ue);
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
          dr || r.flags & 512 && mf(r);
        } catch (ae) {
          Dn(r, r.return, ae);
        }
      }
      if (r === n) {
        ke = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ke = l;
        break;
      }
      ke = r.return;
    }
  }
  function Th(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r === n) {
        ke = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ke = l;
        break;
      }
      ke = r.return;
    }
  }
  function Jd(n) {
    for (; ke !== null; ) {
      var r = ke;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              hf(4, r);
            } catch (L) {
              Dn(r, l, L);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var d = r.return;
              try {
                u.componentDidMount();
              } catch (L) {
                Dn(r, d, L);
              }
            }
            var m = r.return;
            try {
              mf(r);
            } catch (L) {
              Dn(r, m, L);
            }
            break;
          case 5:
            var R = r.return;
            try {
              mf(r);
            } catch (L) {
              Dn(r, R, L);
            }
        }
      } catch (L) {
        Dn(r, r.return, L);
      }
      if (r === n) {
        ke = null;
        break;
      }
      var k = r.sibling;
      if (k !== null) {
        k.return = r.return, ke = k;
        break;
      }
      ke = r.return;
    }
  }
  var lg = Math.ceil, Uo = _e.ReactCurrentDispatcher, yf = _e.ReactCurrentOwner, Wa = _e.ReactCurrentBatchConfig, wt = 0, On = null, fn = null, Qn = 0, ua = 0, Uu = Xt(0), qn = 0, Js = null, jo = 0, ju = 0, ep = 0, Il = null, Or = null, gf = 0, Fu = 1 / 0, ll = null, Sf = !1, tp = null, Qa = null, Pu = !1, qa = null, Ef = 0, ec = 0, Cf = null, tc = -1, Fo = 0;
  function nr() {
    return wt & 6 ? nn() : tc !== -1 ? tc : tc = nn();
  }
  function ol(n) {
    return n.mode & 1 ? wt & 2 && Qn !== 0 ? Qn & -Qn : Xy.transition !== null ? (Fo === 0 && (Fo = vo()), Fo) : (n = Tt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ys(n.type)), n) : 1;
  }
  function Cn(n, r, l, u) {
    if (50 < ec)
      throw ec = 0, Cf = null, Error(c(185));
    Tl(n, l, u), (!(wt & 2) || n !== On) && (n === On && (!(wt & 2) && (ju |= l), qn === 4 && Li(n, Qn)), Gn(n, u), l === 1 && wt === 0 && !(r.mode & 1) && (Fu = nn() + 500, Ml && xi()));
  }
  function Gn(n, r) {
    var l = n.callbackNode;
    Rl(n, r);
    var u = Si(n, n === On ? Qn : 0);
    if (u === 0)
      l !== null && tn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && tn(l), r === 1)
        n.tag === 0 ? th(Hu.bind(null, n)) : Pc(Hu.bind(null, n)), Jv(function() {
          !(wt & 6) && xi();
        }), l = null;
      else {
        switch (vs(u)) {
          case 1:
            l = os;
            break;
          case 4:
            l = gi;
            break;
          case 16:
            l = ft;
            break;
          case 536870912:
            l = $i;
            break;
          default:
            l = ft;
        }
        l = Nh(l, wf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function wf(n, r) {
    if (tc = -1, Fo = 0, wt & 6)
      throw Error(c(327));
    var l = n.callbackNode;
    if (Bu() && n.callbackNode !== l)
      return null;
    var u = Si(n, n === On ? Qn : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = Tf(n, u);
    else {
      r = u;
      var d = wt;
      wt |= 2;
      var m = bh();
      (On !== n || Qn !== r) && (ll = null, Fu = nn() + 500, Ho(n, r));
      do
        try {
          ug();
          break;
        } catch (k) {
          xh(n, k);
        }
      while (!0);
      jd(), Uo.current = m, wt = d, fn !== null ? r = 0 : (On = null, Qn = 0, r = qn);
    }
    if (r !== 0) {
      if (r === 2 && (d = Ei(n), d !== 0 && (u = d, r = Po(n, d))), r === 1)
        throw l = Js, Ho(n, 0), Li(n, u), Gn(n, nn()), l;
      if (r === 6)
        Li(n, u);
      else {
        if (d = n.current.alternate, !(u & 30) && !rp(d) && (r = Tf(n, u), r === 2 && (m = Ei(n), m !== 0 && (u = m, r = Po(n, m))), r === 1))
          throw l = Js, Ho(n, 0), Li(n, u), Gn(n, nn()), l;
        switch (n.finishedWork = d, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            Yl(n, Or, ll);
            break;
          case 3:
            if (Li(n, u), (u & 130023424) === u && (r = gf + 500 - nn(), 10 < r)) {
              if (Si(n, 0) !== 0)
                break;
              if (d = n.suspendedLanes, (d & u) !== u) {
                nr(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = Ns(Yl.bind(null, n, Or, ll), r);
              break;
            }
            Yl(n, Or, ll);
            break;
          case 4:
            if (Li(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, d = -1; 0 < u; ) {
              var R = 31 - Nr(u);
              m = 1 << R, R = r[R], R > d && (d = R), u &= ~m;
            }
            if (u = d, u = nn() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * lg(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Ns(Yl.bind(null, n, Or, ll), u);
              break;
            }
            Yl(n, Or, ll);
            break;
          case 5:
            Yl(n, Or, ll);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return Gn(n, nn()), n.callbackNode === l ? wf.bind(null, n) : null;
  }
  function Po(n, r) {
    var l = Il;
    return n.current.memoizedState.isDehydrated && (Ho(n, r).flags |= 256), n = Tf(n, r), n !== 2 && (r = Or, Or = l, r !== null && np(r)), n;
  }
  function np(n) {
    Or === null ? Or = n : Or.push.apply(Or, n);
  }
  function rp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var u = 0; u < l.length; u++) {
            var d = l[u], m = d.getSnapshot;
            d = d.value;
            try {
              if (!si(m(), d))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
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
  function Li(n, r) {
    for (r &= ~ep, r &= ~ju, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Nr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Hu(n) {
    if (wt & 6)
      throw Error(c(327));
    Bu();
    var r = Si(n, 0);
    if (!(r & 1))
      return Gn(n, nn()), null;
    var l = Tf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Ei(n);
      u !== 0 && (r = u, l = Po(n, u));
    }
    if (l === 1)
      throw l = Js, Ho(n, 0), Li(n, r), Gn(n, nn()), l;
    if (l === 6)
      throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Yl(n, Or, ll), Gn(n, nn()), null;
  }
  function ap(n, r) {
    var l = wt;
    wt |= 1;
    try {
      return n(r);
    } finally {
      wt = l, wt === 0 && (Fu = nn() + 500, Ml && xi());
    }
  }
  function Ni(n) {
    qa !== null && qa.tag === 0 && !(wt & 6) && Bu();
    var r = wt;
    wt |= 1;
    var l = Wa.transition, u = Tt;
    try {
      if (Wa.transition = null, Tt = 1, n)
        return n();
    } finally {
      Tt = u, Wa.transition = l, wt = r, !(wt & 6) && xi();
    }
  }
  function Rf() {
    ua = Uu.current, Ae(Uu);
  }
  function Ho(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ms(l)), fn !== null)
      for (l = fn.return; l !== null; ) {
        var u = l;
        switch (Bc(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Jr();
            break;
          case 3:
            wu(), Ae(rt), Ae(Jn), $a();
            break;
          case 5:
            Ye(u);
            break;
          case 4:
            wu();
            break;
          case 13:
            Ae(Ue);
            break;
          case 19:
            Ae(Ue);
            break;
          case 10:
            Fd(u.type._context);
            break;
          case 22:
          case 23:
            Rf();
        }
        l = l.return;
      }
    if (On = n, fn = n = Wl(n.current, null), Qn = ua = r, qn = 0, Js = null, ep = ju = jo = 0, Or = Il = null, kr !== null) {
      for (r = 0; r < kr.length; r++)
        if (l = kr[r], u = l.interleaved, u !== null) {
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
  function xh(n, r) {
    do {
      var l = fn;
      try {
        if (jd(), Bs.current = of, An) {
          for (var u = En.memoizedState; u !== null; ) {
            var d = u.queue;
            d !== null && (d.pending = null), u = u.next;
          }
          An = !1;
        }
        if (ko = 0, ee = Mn = En = null, Qe = !1, _i = 0, yf.current = null, l === null || l.return === null) {
          qn = 1, Js = r, fn = null;
          break;
        }
        e: {
          var m = n, R = l.return, k = l, L = r;
          if (r = Qn, k.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var W = L, le = k, ue = le.tag;
            if (!(le.mode & 1) && (ue === 0 || ue === 11 || ue === 15)) {
              var ae = le.alternate;
              ae ? (le.updateQueue = ae.updateQueue, le.memoizedState = ae.memoizedState, le.lanes = ae.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var ge = mh(R);
            if (ge !== null) {
              ge.flags &= -257, Qd(ge, R, k, m, r), ge.mode & 1 && qs(m, W, r), r = ge, L = W;
              var Oe = r.updateQueue;
              if (Oe === null) {
                var Me = /* @__PURE__ */ new Set();
                Me.add(L), r.updateQueue = Me;
              } else
                Oe.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                qs(m, W, r), nc();
                break e;
              }
              L = Error(c(426));
            }
          } else if (cn && k.mode & 1) {
            var jn = mh(R);
            if (jn !== null) {
              !(jn.flags & 65536) && (jn.flags |= 256), Qd(jn, R, k, m, r), $n(Vl(L, k));
              break e;
            }
          }
          m = L = Vl(L, k), qn !== 4 && (qn = 2), Il === null ? Il = [m] : Il.push(m), m = R;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var F = vh(m, L, r);
                ih(m, F);
                break e;
              case 1:
                k = L;
                var M = m.type, B = m.stateNode;
                if (!(m.flags & 128) && (typeof M.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (Qa === null || !Qa.has(B)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var fe = hh(m, k, r);
                  ih(m, fe);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        _h(l);
      } catch (ze) {
        r = ze, fn === l && l !== null && (fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bh() {
    var n = Uo.current;
    return Uo.current = of, n === null ? of : n;
  }
  function nc() {
    (qn === 0 || qn === 3 || qn === 2) && (qn = 4), On === null || !(jo & 268435455) && !(ju & 268435455) || Li(On, Qn);
  }
  function Tf(n, r) {
    var l = wt;
    wt |= 2;
    var u = bh();
    (On !== n || Qn !== r) && (ll = null, Ho(n, r));
    do
      try {
        og();
        break;
      } catch (d) {
        xh(n, d);
      }
    while (!0);
    if (jd(), wt = l, Uo.current = u, fn !== null)
      throw Error(c(261));
    return On = null, Qn = 0, qn;
  }
  function og() {
    for (; fn !== null; )
      kh(fn);
  }
  function ug() {
    for (; fn !== null && !xr(); )
      kh(fn);
  }
  function kh(n) {
    var r = Lh(n.alternate, n, ua);
    n.memoizedProps = n.pendingProps, r === null ? _h(n) : fn = r, yf.current = null;
  }
  function _h(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = rg(l, r), l !== null) {
          l.flags &= 32767, fn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          qn = 6, fn = null;
          return;
        }
      } else if (l = ng(l, r, ua), l !== null) {
        fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        fn = r;
        return;
      }
      fn = r = n;
    } while (r !== null);
    qn === 0 && (qn = 5);
  }
  function Yl(n, r, l) {
    var u = Tt, d = Wa.transition;
    try {
      Wa.transition = null, Tt = 1, sg(n, r, l, u);
    } finally {
      Wa.transition = d, Tt = u;
    }
    return null;
  }
  function sg(n, r, l, u) {
    do
      Bu();
    while (qa !== null);
    if (wt & 6)
      throw Error(c(327));
    l = n.finishedWork;
    var d = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = l.lanes | l.childLanes;
    if (ds(n, m), n === On && (fn = On = null, Qn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Pu || (Pu = !0, Nh(ft, function() {
      return Bu(), null;
    })), m = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || m) {
      m = Wa.transition, Wa.transition = null;
      var R = Tt;
      Tt = 1;
      var k = wt;
      wt |= 4, yf.current = null, ag(n, l), Rh(l, n), So(_d), iu = !!kd, _d = kd = null, n.current = l, ig(l), yi(), wt = k, Tt = R, Wa.transition = m;
    } else
      n.current = l;
    if (Pu && (Pu = !1, qa = n, Ef = d), m = n.pendingLanes, m === 0 && (Qa = null), us(l.stateNode), Gn(n, nn()), r !== null)
      for (u = n.onRecoverableError, l = 0; l < r.length; l++)
        d = r[l], u(d.value, { componentStack: d.stack, digest: d.digest });
    if (Sf)
      throw Sf = !1, n = tp, tp = null, n;
    return Ef & 1 && n.tag !== 0 && Bu(), m = n.pendingLanes, m & 1 ? n === Cf ? ec++ : (ec = 0, Cf = n) : ec = 0, xi(), null;
  }
  function Bu() {
    if (qa !== null) {
      var n = vs(Ef), r = Wa.transition, l = Tt;
      try {
        if (Wa.transition = null, Tt = 16 > n ? 16 : n, qa === null)
          var u = !1;
        else {
          if (n = qa, qa = null, Ef = 0, wt & 6)
            throw Error(c(331));
          var d = wt;
          for (wt |= 4, ke = n.current; ke !== null; ) {
            var m = ke, R = m.child;
            if (ke.flags & 16) {
              var k = m.deletions;
              if (k !== null) {
                for (var L = 0; L < k.length; L++) {
                  var W = k[L];
                  for (ke = W; ke !== null; ) {
                    var le = ke;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lu(8, le, m);
                    }
                    var ue = le.child;
                    if (ue !== null)
                      ue.return = le, ke = ue;
                    else
                      for (; ke !== null; ) {
                        le = ke;
                        var ae = le.sibling, ge = le.return;
                        if (Ch(le), le === W) {
                          ke = null;
                          break;
                        }
                        if (ae !== null) {
                          ae.return = ge, ke = ae;
                          break;
                        }
                        ke = ge;
                      }
                  }
                }
                var Oe = m.alternate;
                if (Oe !== null) {
                  var Me = Oe.child;
                  if (Me !== null) {
                    Oe.child = null;
                    do {
                      var jn = Me.sibling;
                      Me.sibling = null, Me = jn;
                    } while (Me !== null);
                  }
                }
                ke = m;
              }
            }
            if (m.subtreeFlags & 2064 && R !== null)
              R.return = m, ke = R;
            else
              e:
                for (; ke !== null; ) {
                  if (m = ke, m.flags & 2048)
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lu(9, m, m.return);
                    }
                  var F = m.sibling;
                  if (F !== null) {
                    F.return = m.return, ke = F;
                    break e;
                  }
                  ke = m.return;
                }
          }
          var M = n.current;
          for (ke = M; ke !== null; ) {
            R = ke;
            var B = R.child;
            if (R.subtreeFlags & 2064 && B !== null)
              B.return = R, ke = B;
            else
              e:
                for (R = M; ke !== null; ) {
                  if (k = ke, k.flags & 2048)
                    try {
                      switch (k.tag) {
                        case 0:
                        case 11:
                        case 15:
                          hf(9, k);
                      }
                    } catch (ze) {
                      Dn(k, k.return, ze);
                    }
                  if (k === R) {
                    ke = null;
                    break e;
                  }
                  var fe = k.sibling;
                  if (fe !== null) {
                    fe.return = k.return, ke = fe;
                    break e;
                  }
                  ke = k.return;
                }
          }
          if (wt = d, xi(), Gr && typeof Gr.onPostCommitFiberRoot == "function")
            try {
              Gr.onPostCommitFiberRoot(wl, n);
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
  function Oh(n, r, l) {
    r = Vl(l, r), r = vh(n, r, 1), n = Fl(n, r, 1), r = nr(), n !== null && (Tl(n, 1, r), Gn(n, r));
  }
  function Dn(n, r, l) {
    if (n.tag === 3)
      Oh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Oh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Qa === null || !Qa.has(u))) {
            n = Vl(l, n), n = hh(r, n, 1), r = Fl(r, n, 1), n = nr(), r !== null && (Tl(r, 1, n), Gn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function cg(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = nr(), n.pingedLanes |= n.suspendedLanes & l, On === n && (Qn & l) === l && (qn === 4 || qn === 3 && (Qn & 130023424) === Qn && 500 > nn() - gf ? Ho(n, 0) : ep |= l), Gn(n, r);
  }
  function Dh(n, r) {
    r === 0 && (n.mode & 1 ? (r = tu, tu <<= 1, !(tu & 130023424) && (tu = 4194304)) : r = 1);
    var l = nr();
    n = rl(n, r), n !== null && (Tl(n, r, l), Gn(n, l));
  }
  function ip(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Dh(n, l);
  }
  function fg(n, r) {
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
        throw Error(c(314));
    }
    u !== null && u.delete(r), Dh(n, l);
  }
  var Lh;
  Lh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || rt.current)
        la = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return la = !1, il(n, r, l);
        la = !!(n.flags & 131072);
      }
    else
      la = !1, cn && r.flags & 1048576 && zl(r, To, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Xs(n, r), n = r.pendingProps;
        var d = Ra(r, Jn.current);
        Nn(r, l), d = _o(null, r, u, n, d, l);
        var m = Hl();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Vn(u) ? (m = !0, Ro(r)) : m = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Pd(r), d.updater = Yc, r.stateNode = d, d._reactInternals = r, Bd(r, u, n, l), r = sf(null, r, u, !0, m, l)) : (r.tag = 0, cn && m && Hc(r), zn(null, r, d, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Xs(n, r), n = r.pendingProps, d = u._init, u = d(u._payload), r.type = u, d = r.tag = dg(u), n = ra(u, n), d) {
            case 0:
              r = ut(null, r, u, n, l);
              break e;
            case 1:
              r = Gs(null, r, u, n, l);
              break e;
            case 11:
              r = bu(null, r, u, n, l);
              break e;
            case 14:
              r = $l(null, r, u, ra(u.type, n), l);
              break e;
          }
          throw Error(c(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), ut(n, r, u, d, l);
      case 1:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), Gs(n, r, u, d, l);
      case 3:
        e: {
          if (tg(r), n === null)
            throw Error(c(387));
          u = r.pendingProps, m = r.memoizedState, d = m.element, ah(n, r), js(r, u, null, l);
          var R = r.memoizedState;
          if (u = R.element, m.isDehydrated)
            if (m = { element: u, isDehydrated: !1, cache: R.cache, pendingSuspenseBoundaries: R.pendingSuspenseBoundaries, transitions: R.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
              d = Vl(Error(c(423)), r), r = gh(n, r, u, l, d);
              break e;
            } else if (u !== d) {
              d = Vl(Error(c(424)), r), r = gh(n, r, u, l, d);
              break e;
            } else
              for (xa = wa(r.stateNode.containerInfo.firstChild), Ta = r, cn = !0, Va = null, l = fh(r, null, u, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (hu(), u === d) {
              r = Un(n, r, l);
              break e;
            }
            zn(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Wc(r), n === null && Vc(r), u = r.type, d = r.pendingProps, m = n !== null ? n.memoizedProps : null, R = d.children, wo(u, d) ? R = null : m !== null && wo(u, m) && (r.flags |= 32), Ao(n, r), zn(n, r, R, l), r.child;
      case 6:
        return n === null && Vc(r), null;
      case 13:
        return Sh(n, r, l);
      case 4:
        return Vd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Eu(r, null, u, l) : zn(n, r, u, l), r.child;
      case 11:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), bu(n, r, u, d, l);
      case 7:
        return zn(n, r, r.pendingProps, l), r.child;
      case 8:
        return zn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return zn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, d = r.pendingProps, m = r.memoizedProps, R = d.value, Mt(mu, u._currentValue), u._currentValue = R, m !== null)
            if (si(m.value, R)) {
              if (m.children === d.children && !rt.current) {
                r = Un(n, r, l);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var k = m.dependencies;
                if (k !== null) {
                  R = m.child;
                  for (var L = k.firstContext; L !== null; ) {
                    if (L.context === u) {
                      if (m.tag === 1) {
                        L = rn(-1, l & -l), L.tag = 2;
                        var W = m.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var le = W.pending;
                          le === null ? L.next = L : (L.next = le.next, le.next = L), W.pending = L;
                        }
                      }
                      m.lanes |= l, L = m.alternate, L !== null && (L.lanes |= l), Ul(
                        m.return,
                        l,
                        r
                      ), k.lanes |= l;
                      break;
                    }
                    L = L.next;
                  }
                } else if (m.tag === 10)
                  R = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (R = m.return, R === null)
                    throw Error(c(341));
                  R.lanes |= l, k = R.alternate, k !== null && (k.lanes |= l), Ul(R, l, r), R = m.sibling;
                } else
                  R = m.child;
                if (R !== null)
                  R.return = m;
                else
                  for (R = m; R !== null; ) {
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
          zn(n, r, d.children, l), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, u = r.pendingProps.children, Nn(r, l), d = de(d), u = u(d), r.flags |= 1, zn(n, r, u, l), r.child;
      case 14:
        return u = r.type, d = ra(u, r.pendingProps), d = ra(u.type, d), $l(n, r, u, d, l);
      case 15:
        return uf(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), Xs(n, r), r.tag = 1, Vn(u) ? (n = !0, Ro(r)) : n = !1, Nn(r, l), oh(r, u, d), Bd(r, u, d, l), sf(null, r, u, !0, n, l);
      case 19:
        return Gd(n, r, l);
      case 22:
        return oa(n, r, l);
    }
    throw Error(c(156, r.tag));
  };
  function Nh(n, r) {
    return en(n, r);
  }
  function Mh(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ga(n, r, l, u) {
    return new Mh(n, r, l, u);
  }
  function lp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function dg(n) {
    if (typeof n == "function")
      return lp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Et)
        return 11;
      if (n === nt)
        return 14;
    }
    return 2;
  }
  function Wl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ga(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function xf(n, r, l, u, d, m) {
    var R = 2;
    if (u = n, typeof n == "function")
      lp(n) && (R = 1);
    else if (typeof n == "string")
      R = 5;
    else
      e:
        switch (n) {
          case yt:
            return Bo(l.children, d, m, r);
          case Ze:
            R = 8, d |= 8;
            break;
          case pn:
            return n = Ga(12, l, r, d | 2), n.elementType = pn, n.lanes = m, n;
          case Gt:
            return n = Ga(13, l, r, d), n.elementType = Gt, n.lanes = m, n;
          case Ge:
            return n = Ga(19, l, r, d), n.elementType = Ge, n.lanes = m, n;
          case Ve:
            return bf(l, d, m, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case vn:
                  R = 10;
                  break e;
                case Wt:
                  R = 9;
                  break e;
                case Et:
                  R = 11;
                  break e;
                case nt:
                  R = 14;
                  break e;
                case Je:
                  R = 16, u = null;
                  break e;
              }
            throw Error(c(130, n == null ? n : typeof n, ""));
        }
    return r = Ga(R, l, r, d), r.elementType = n, r.type = u, r.lanes = m, r;
  }
  function Bo(n, r, l, u) {
    return n = Ga(7, n, u, r), n.lanes = l, n;
  }
  function bf(n, r, l, u) {
    return n = Ga(22, n, u, r), n.elementType = Ve, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function kf(n, r, l) {
    return n = Ga(6, n, null, r), n.lanes = l, n;
  }
  function rc(n, r, l) {
    return r = Ga(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ac(n, r, l, u, d) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ho(0), this.expirationTimes = ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ho(0), this.identifierPrefix = u, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function op(n, r, l, u, d, m, R, k, L) {
    return n = new ac(n, r, l, k, L), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Ga(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Pd(m), n;
  }
  function Ah(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: xe, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function up(n) {
    if (!n)
      return Pa;
    n = n._reactInternals;
    e: {
      if (me(n) !== n || n.tag !== 1)
        throw Error(c(170));
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
      throw Error(c(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Vn(l))
        return Nl(n, l, r);
    }
    return r;
  }
  function sp(n, r, l, u, d, m, R, k, L) {
    return n = op(l, u, !0, n, d, m, R, k, L), n.context = up(null), l = n.current, u = nr(), d = ol(l), m = rn(u, d), m.callback = r ?? null, Fl(l, m, d), n.current.lanes = d, Tl(n, d, u), Gn(n, u), n;
  }
  function _f(n, r, l, u) {
    var d = r.current, m = nr(), R = ol(d);
    return l = up(l), r.context === null ? r.context = l : r.pendingContext = l, r = rn(m, R), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Fl(d, r, R), n !== null && (Cn(n, d, R, m), Ic(n, d, R)), R;
  }
  function ic(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function zh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function cp(n, r) {
    zh(n, r), (n = n.alternate) && zh(n, r);
  }
  function pg() {
    return null;
  }
  var fp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Of(n) {
    this._internalRoot = n;
  }
  lc.prototype.render = Of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(c(409));
    _f(n, r, null, null);
  }, lc.prototype.unmount = Of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ni(function() {
        _f(null, n, null, null);
      }), r[ci] = null;
    }
  };
  function lc(n) {
    this._internalRoot = n;
  }
  lc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ot();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < un.length && r !== 0 && r < un[l].priority; l++)
        ;
      un.splice(l, 0, n), l === 0 && oi(n);
    }
  };
  function Ql(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Df(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Uh() {
  }
  function vg(n, r, l, u, d) {
    if (d) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var W = ic(R);
          m.call(W);
        };
      }
      var R = sp(r, u, n, 0, null, !1, !1, "", Uh);
      return n._reactRootContainer = R, n[ci] = R.current, wi(n.nodeType === 8 ? n.parentNode : n), Ni(), R;
    }
    for (; d = n.lastChild; )
      n.removeChild(d);
    if (typeof u == "function") {
      var k = u;
      u = function() {
        var W = ic(L);
        k.call(W);
      };
    }
    var L = op(n, 0, !1, null, null, !1, !1, "", Uh);
    return n._reactRootContainer = L, n[ci] = L.current, wi(n.nodeType === 8 ? n.parentNode : n), Ni(function() {
      _f(r, L, l, u);
    }), L;
  }
  function Lf(n, r, l, u, d) {
    var m = l._reactRootContainer;
    if (m) {
      var R = m;
      if (typeof d == "function") {
        var k = d;
        d = function() {
          var L = ic(R);
          k.call(L);
        };
      }
      _f(r, R, n, d);
    } else
      R = vg(l, r, n, d, u);
    return ic(R);
  }
  nu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ii(r.pendingLanes);
          l !== 0 && (ps(r, l | 1), Gn(r, nn()), !(wt & 6) && (Fu = nn() + 500, xi()));
        }
        break;
      case 13:
        Ni(function() {
          var u = rl(n, 1);
          if (u !== null) {
            var d = nr();
            Cn(u, n, 1, d);
          }
        }), cp(n, 1);
    }
  }, xl = function(n) {
    if (n.tag === 13) {
      var r = rl(n, 134217728);
      if (r !== null) {
        var l = nr();
        Cn(r, n, 134217728, l);
      }
      cp(n, 134217728);
    }
  }, hs = function(n) {
    if (n.tag === 13) {
      var r = ol(n), l = rl(n, r);
      if (l !== null) {
        var u = nr();
        Cn(l, n, r, u);
      }
      cp(n, r);
    }
  }, Ot = function() {
    return Tt;
  }, ru = function(n, r) {
    var l = Tt;
    try {
      return Tt = n, r();
    } finally {
      Tt = l;
    }
  }, Vt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Pn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var d = Fc(u);
              if (!d)
                throw Error(c(90));
              Yr(u), Pn(u, d);
            }
          }
        }
        break;
      case "textarea":
        Rr(n, l);
        break;
      case "select":
        r = l.value, r != null && Wn(n, !!l.multiple, r, !1);
    }
  }, El = ap, so = Ni;
  var hg = { usingClientEntryPoint: !1, Events: [Ri, vu, Fc, ri, Ma, ap] }, oc = { findFiberByHostInstance: tl, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, jh = { bundleType: oc.bundleType, version: oc.version, rendererPackageName: oc.rendererPackageName, rendererConfig: oc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _e.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Be(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: oc.findFiberByHostInstance || pg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nf.isDisabled && Nf.supportsFiber)
      try {
        wl = Nf.inject(jh), Gr = Nf;
      } catch {
      }
  }
  return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hg, ni.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ql(r))
      throw Error(c(200));
    return Ah(n, r, null, l);
  }, ni.createRoot = function(n, r) {
    if (!Ql(n))
      throw Error(c(299));
    var l = !1, u = "", d = fp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = op(n, 1, !1, null, null, l, !1, u, d), n[ci] = r.current, wi(n.nodeType === 8 ? n.parentNode : n), new Of(r);
  }, ni.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : (n = Object.keys(n).join(","), Error(c(268, n)));
    return n = Be(r), n = n === null ? null : n.stateNode, n;
  }, ni.flushSync = function(n) {
    return Ni(n);
  }, ni.hydrate = function(n, r, l) {
    if (!Df(r))
      throw Error(c(200));
    return Lf(null, n, r, !0, l);
  }, ni.hydrateRoot = function(n, r, l) {
    if (!Ql(n))
      throw Error(c(405));
    var u = l != null && l.hydratedSources || null, d = !1, m = "", R = fp;
    if (l != null && (l.unstable_strictMode === !0 && (d = !0), l.identifierPrefix !== void 0 && (m = l.identifierPrefix), l.onRecoverableError !== void 0 && (R = l.onRecoverableError)), r = sp(r, null, n, 1, l ?? null, d, !1, m, R), n[ci] = r.current, wi(n), u)
      for (n = 0; n < u.length; n++)
        l = u[n], d = l._getVersion, d = d(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, d] : r.mutableSourceEagerHydrationData.push(
          l,
          d
        );
    return new lc(r);
  }, ni.render = function(n, r, l) {
    if (!Df(r))
      throw Error(c(200));
    return Lf(null, n, r, !1, l);
  }, ni.unmountComponentAtNode = function(n) {
    if (!Df(n))
      throw Error(c(40));
    return n._reactRootContainer ? (Ni(function() {
      Lf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ci] = null;
      });
    }), !0) : !1;
  }, ni.unstable_batchedUpdates = ap, ni.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Df(l))
      throw Error(c(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(c(38));
    return Lf(n, r, l, !1, u);
  }, ni.version = "18.2.0-next-9e3b772b8-20220608", ni;
}
var qR = {};
function GR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (qR.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GR);
    } catch (h) {
      console.error(h);
    }
  }
}
qR.NODE_ENV === "production" ? (GR(), gE.exports = LD()) : gE.exports = DD();
var ND = gE.exports, MD = {}, fv = ND;
if (MD.NODE_ENV === "production")
  hv.createRoot = fv.createRoot, hv.hydrateRoot = fv.hydrateRoot;
else {
  var my = fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  hv.createRoot = function(h, f) {
    my.usingClientEntryPoint = !0;
    try {
      return fv.createRoot(h, f);
    } finally {
      my.usingClientEntryPoint = !1;
    }
  }, hv.hydrateRoot = function(h, f, c) {
    my.usingClientEntryPoint = !0;
    try {
      return fv.hydrateRoot(h, f, c);
    } finally {
      my.usingClientEntryPoint = !1;
    }
  };
}
function KR(h, f) {
  return function() {
    return h.apply(f, arguments);
  };
}
const { toString: AD } = Object.prototype, { getPrototypeOf: bE } = Object, Oy = /* @__PURE__ */ ((h) => (f) => {
  const c = AD.call(f);
  return h[c] || (h[c] = c.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), uo = (h) => (h = h.toLowerCase(), (f) => Oy(f) === h), Dy = (h) => (f) => typeof f === h, { isArray: fd } = Array, Sv = Dy("undefined");
function zD(h) {
  return h !== null && !Sv(h) && h.constructor !== null && !Sv(h.constructor) && Hi(h.constructor.isBuffer) && h.constructor.isBuffer(h);
}
const XR = uo("ArrayBuffer");
function UD(h) {
  let f;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? f = ArrayBuffer.isView(h) : f = h && h.buffer && XR(h.buffer), f;
}
const jD = Dy("string"), Hi = Dy("function"), ZR = Dy("number"), Ly = (h) => h !== null && typeof h == "object", FD = (h) => h === !0 || h === !1, Ey = (h) => {
  if (Oy(h) !== "object")
    return !1;
  const f = bE(h);
  return (f === null || f === Object.prototype || Object.getPrototypeOf(f) === null) && !(Symbol.toStringTag in h) && !(Symbol.iterator in h);
}, PD = uo("Date"), HD = uo("File"), BD = uo("Blob"), VD = uo("FileList"), $D = (h) => Ly(h) && Hi(h.pipe), ID = (h) => {
  let f;
  return h && (typeof FormData == "function" && h instanceof FormData || Hi(h.append) && ((f = Oy(h)) === "formdata" || // detect form-data instance
  f === "object" && Hi(h.toString) && h.toString() === "[object FormData]"));
}, YD = uo("URLSearchParams"), WD = (h) => h.trim ? h.trim() : h.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Cv(h, f, { allOwnKeys: c = !1 } = {}) {
  if (h === null || typeof h > "u")
    return;
  let v, w;
  if (typeof h != "object" && (h = [h]), fd(h))
    for (v = 0, w = h.length; v < w; v++)
      f.call(null, h[v], v, h);
  else {
    const T = c ? Object.getOwnPropertyNames(h) : Object.keys(h), C = T.length;
    let g;
    for (v = 0; v < C; v++)
      g = T[v], f.call(null, h[g], g, h);
  }
}
function JR(h, f) {
  f = f.toLowerCase();
  const c = Object.keys(h);
  let v = c.length, w;
  for (; v-- > 0; )
    if (w = c[v], f === w.toLowerCase())
      return w;
  return null;
}
const eT = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, tT = (h) => !Sv(h) && h !== eT;
function SE() {
  const { caseless: h } = tT(this) && this || {}, f = {}, c = (v, w) => {
    const T = h && JR(f, w) || w;
    Ey(f[T]) && Ey(v) ? f[T] = SE(f[T], v) : Ey(v) ? f[T] = SE({}, v) : fd(v) ? f[T] = v.slice() : f[T] = v;
  };
  for (let v = 0, w = arguments.length; v < w; v++)
    arguments[v] && Cv(arguments[v], c);
  return f;
}
const QD = (h, f, c, { allOwnKeys: v } = {}) => (Cv(f, (w, T) => {
  c && Hi(w) ? h[T] = KR(w, c) : h[T] = w;
}, { allOwnKeys: v }), h), qD = (h) => (h.charCodeAt(0) === 65279 && (h = h.slice(1)), h), GD = (h, f, c, v) => {
  h.prototype = Object.create(f.prototype, v), h.prototype.constructor = h, Object.defineProperty(h, "super", {
    value: f.prototype
  }), c && Object.assign(h.prototype, c);
}, KD = (h, f, c, v) => {
  let w, T, C;
  const g = {};
  if (f = f || {}, h == null)
    return f;
  do {
    for (w = Object.getOwnPropertyNames(h), T = w.length; T-- > 0; )
      C = w[T], (!v || v(C, h, f)) && !g[C] && (f[C] = h[C], g[C] = !0);
    h = c !== !1 && bE(h);
  } while (h && (!c || c(h, f)) && h !== Object.prototype);
  return f;
}, XD = (h, f, c) => {
  h = String(h), (c === void 0 || c > h.length) && (c = h.length), c -= f.length;
  const v = h.indexOf(f, c);
  return v !== -1 && v === c;
}, ZD = (h) => {
  if (!h)
    return null;
  if (fd(h))
    return h;
  let f = h.length;
  if (!ZR(f))
    return null;
  const c = new Array(f);
  for (; f-- > 0; )
    c[f] = h[f];
  return c;
}, JD = /* @__PURE__ */ ((h) => (f) => h && f instanceof h)(typeof Uint8Array < "u" && bE(Uint8Array)), eL = (h, f) => {
  const v = (h && h[Symbol.iterator]).call(h);
  let w;
  for (; (w = v.next()) && !w.done; ) {
    const T = w.value;
    f.call(h, T[0], T[1]);
  }
}, tL = (h, f) => {
  let c;
  const v = [];
  for (; (c = h.exec(f)) !== null; )
    v.push(c);
  return v;
}, nL = uo("HTMLFormElement"), rL = (h) => h.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(c, v, w) {
    return v.toUpperCase() + w;
  }
), _R = (({ hasOwnProperty: h }) => (f, c) => h.call(f, c))(Object.prototype), aL = uo("RegExp"), nT = (h, f) => {
  const c = Object.getOwnPropertyDescriptors(h), v = {};
  Cv(c, (w, T) => {
    let C;
    (C = f(w, T, h)) !== !1 && (v[T] = C || w);
  }), Object.defineProperties(h, v);
}, iL = (h) => {
  nT(h, (f, c) => {
    if (Hi(h) && ["arguments", "caller", "callee"].indexOf(c) !== -1)
      return !1;
    const v = h[c];
    if (Hi(v)) {
      if (f.enumerable = !1, "writable" in f) {
        f.writable = !1;
        return;
      }
      f.set || (f.set = () => {
        throw Error("Can not rewrite read-only method '" + c + "'");
      });
    }
  });
}, lL = (h, f) => {
  const c = {}, v = (w) => {
    w.forEach((T) => {
      c[T] = !0;
    });
  };
  return fd(h) ? v(h) : v(String(h).split(f)), c;
}, oL = () => {
}, uL = (h, f) => (h = +h, Number.isFinite(h) ? h : f), cE = "abcdefghijklmnopqrstuvwxyz", OR = "0123456789", rT = {
  DIGIT: OR,
  ALPHA: cE,
  ALPHA_DIGIT: cE + cE.toUpperCase() + OR
}, sL = (h = 16, f = rT.ALPHA_DIGIT) => {
  let c = "";
  const { length: v } = f;
  for (; h--; )
    c += f[Math.random() * v | 0];
  return c;
};
function cL(h) {
  return !!(h && Hi(h.append) && h[Symbol.toStringTag] === "FormData" && h[Symbol.iterator]);
}
const fL = (h) => {
  const f = new Array(10), c = (v, w) => {
    if (Ly(v)) {
      if (f.indexOf(v) >= 0)
        return;
      if (!("toJSON" in v)) {
        f[w] = v;
        const T = fd(v) ? [] : {};
        return Cv(v, (C, g) => {
          const U = c(C, w + 1);
          !Sv(U) && (T[g] = U);
        }), f[w] = void 0, T;
      }
    }
    return v;
  };
  return c(h, 0);
}, dL = uo("AsyncFunction"), pL = (h) => h && (Ly(h) || Hi(h)) && Hi(h.then) && Hi(h.catch), re = {
  isArray: fd,
  isArrayBuffer: XR,
  isBuffer: zD,
  isFormData: ID,
  isArrayBufferView: UD,
  isString: jD,
  isNumber: ZR,
  isBoolean: FD,
  isObject: Ly,
  isPlainObject: Ey,
  isUndefined: Sv,
  isDate: PD,
  isFile: HD,
  isBlob: BD,
  isRegExp: aL,
  isFunction: Hi,
  isStream: $D,
  isURLSearchParams: YD,
  isTypedArray: JD,
  isFileList: VD,
  forEach: Cv,
  merge: SE,
  extend: QD,
  trim: WD,
  stripBOM: qD,
  inherits: GD,
  toFlatObject: KD,
  kindOf: Oy,
  kindOfTest: uo,
  endsWith: XD,
  toArray: ZD,
  forEachEntry: eL,
  matchAll: tL,
  isHTMLForm: nL,
  hasOwnProperty: _R,
  hasOwnProp: _R,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: nT,
  freezeMethods: iL,
  toObjectSet: lL,
  toCamelCase: rL,
  noop: oL,
  toFiniteNumber: uL,
  findKey: JR,
  global: eT,
  isContextDefined: tT,
  ALPHABET: rT,
  generateString: sL,
  isSpecCompliantForm: cL,
  toJSONObject: fL,
  isAsyncFn: dL,
  isThenable: pL
};
function jt(h, f, c, v, w) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = h, this.name = "AxiosError", f && (this.code = f), c && (this.config = c), v && (this.request = v), w && (this.response = w);
}
re.inherits(jt, Error, {
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
      config: re.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const aT = jt.prototype, iT = {};
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
].forEach((h) => {
  iT[h] = { value: h };
});
Object.defineProperties(jt, iT);
Object.defineProperty(aT, "isAxiosError", { value: !0 });
jt.from = (h, f, c, v, w, T) => {
  const C = Object.create(aT);
  return re.toFlatObject(h, C, function(U) {
    return U !== Error.prototype;
  }, (g) => g !== "isAxiosError"), jt.call(C, h.message, f, c, v, w), C.cause = h, C.name = h.name, T && Object.assign(C, T), C;
};
const vL = null;
function EE(h) {
  return re.isPlainObject(h) || re.isArray(h);
}
function lT(h) {
  return re.endsWith(h, "[]") ? h.slice(0, -2) : h;
}
function DR(h, f, c) {
  return h ? h.concat(f).map(function(w, T) {
    return w = lT(w), !c && T ? "[" + w + "]" : w;
  }).join(c ? "." : "") : f;
}
function hL(h) {
  return re.isArray(h) && !h.some(EE);
}
const mL = re.toFlatObject(re, {}, null, function(f) {
  return /^is[A-Z]/.test(f);
});
function Ny(h, f, c) {
  if (!re.isObject(h))
    throw new TypeError("target must be an object");
  f = f || new FormData(), c = re.toFlatObject(c, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(K, Te) {
    return !re.isUndefined(Te[K]);
  });
  const v = c.metaTokens, w = c.visitor || z, T = c.dots, C = c.indexes, U = (c.Blob || typeof Blob < "u" && Blob) && re.isSpecCompliantForm(f);
  if (!re.isFunction(w))
    throw new TypeError("visitor must be a function");
  function Q(q) {
    if (q === null)
      return "";
    if (re.isDate(q))
      return q.toISOString();
    if (!U && re.isBlob(q))
      throw new jt("Blob is not supported. Use a Buffer instead.");
    return re.isArrayBuffer(q) || re.isTypedArray(q) ? U && typeof Blob == "function" ? new Blob([q]) : Buffer.from(q) : q;
  }
  function z(q, K, Te) {
    let lt = q;
    if (q && !Te && typeof q == "object") {
      if (re.endsWith(K, "{}"))
        K = v ? K : K.slice(0, -2), q = JSON.stringify(q);
      else if (re.isArray(q) && hL(q) || (re.isFileList(q) || re.endsWith(K, "[]")) && (lt = re.toArray(q)))
        return K = lT(K), lt.forEach(function(Pe, _e) {
          !(re.isUndefined(Pe) || Pe === null) && f.append(
            // eslint-disable-next-line no-nested-ternary
            C === !0 ? DR([K], _e, T) : C === null ? K : K + "[]",
            Q(Pe)
          );
        }), !1;
    }
    return EE(q) ? !0 : (f.append(DR(Te, K, T), Q(q)), !1);
  }
  const j = [], Y = Object.assign(mL, {
    defaultVisitor: z,
    convertValue: Q,
    isVisitable: EE
  });
  function oe(q, K) {
    if (!re.isUndefined(q)) {
      if (j.indexOf(q) !== -1)
        throw Error("Circular reference detected in " + K.join("."));
      j.push(q), re.forEach(q, function(lt, pt) {
        (!(re.isUndefined(lt) || lt === null) && w.call(
          f,
          lt,
          re.isString(pt) ? pt.trim() : pt,
          K,
          Y
        )) === !0 && oe(lt, K ? K.concat(pt) : [pt]);
      }), j.pop();
    }
  }
  if (!re.isObject(h))
    throw new TypeError("data must be an object");
  return oe(h), f;
}
function LR(h) {
  const f = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(h).replace(/[!'()~]|%20|%00/g, function(v) {
    return f[v];
  });
}
function kE(h, f) {
  this._pairs = [], h && Ny(h, this, f);
}
const oT = kE.prototype;
oT.append = function(f, c) {
  this._pairs.push([f, c]);
};
oT.toString = function(f) {
  const c = f ? function(v) {
    return f.call(this, v, LR);
  } : LR;
  return this._pairs.map(function(w) {
    return c(w[0]) + "=" + c(w[1]);
  }, "").join("&");
};
function yL(h) {
  return encodeURIComponent(h).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function uT(h, f, c) {
  if (!f)
    return h;
  const v = c && c.encode || yL, w = c && c.serialize;
  let T;
  if (w ? T = w(f, c) : T = re.isURLSearchParams(f) ? f.toString() : new kE(f, c).toString(v), T) {
    const C = h.indexOf("#");
    C !== -1 && (h = h.slice(0, C)), h += (h.indexOf("?") === -1 ? "?" : "&") + T;
  }
  return h;
}
class gL {
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
  use(f, c, v) {
    return this.handlers.push({
      fulfilled: f,
      rejected: c,
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
  eject(f) {
    this.handlers[f] && (this.handlers[f] = null);
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
  forEach(f) {
    re.forEach(this.handlers, function(v) {
      v !== null && f(v);
    });
  }
}
const NR = gL, sT = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, SL = typeof URLSearchParams < "u" ? URLSearchParams : kE, EL = typeof FormData < "u" ? FormData : null, CL = typeof Blob < "u" ? Blob : null, wL = {
  isBrowser: !0,
  classes: {
    URLSearchParams: SL,
    FormData: EL,
    Blob: CL
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, cT = typeof window < "u" && typeof document < "u", RL = ((h) => cT && ["ReactNative", "NativeScript", "NS"].indexOf(h) < 0)(typeof navigator < "u" && navigator.product), TL = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: cT,
  hasStandardBrowserEnv: RL,
  hasStandardBrowserWebWorkerEnv: TL
}, Symbol.toStringTag, { value: "Module" })), ao = {
  ...xL,
  ...wL
};
function bL(h, f) {
  return Ny(h, new ao.classes.URLSearchParams(), Object.assign({
    visitor: function(c, v, w, T) {
      return ao.isNode && re.isBuffer(c) ? (this.append(v, c.toString("base64")), !1) : T.defaultVisitor.apply(this, arguments);
    }
  }, f));
}
function kL(h) {
  return re.matchAll(/\w+|\[(\w*)]/g, h).map((f) => f[0] === "[]" ? "" : f[1] || f[0]);
}
function _L(h) {
  const f = {}, c = Object.keys(h);
  let v;
  const w = c.length;
  let T;
  for (v = 0; v < w; v++)
    T = c[v], f[T] = h[T];
  return f;
}
function fT(h) {
  function f(c, v, w, T) {
    let C = c[T++];
    const g = Number.isFinite(+C), U = T >= c.length;
    return C = !C && re.isArray(w) ? w.length : C, U ? (re.hasOwnProp(w, C) ? w[C] = [w[C], v] : w[C] = v, !g) : ((!w[C] || !re.isObject(w[C])) && (w[C] = []), f(c, v, w[C], T) && re.isArray(w[C]) && (w[C] = _L(w[C])), !g);
  }
  if (re.isFormData(h) && re.isFunction(h.entries)) {
    const c = {};
    return re.forEachEntry(h, (v, w) => {
      f(kL(v), w, c, 0);
    }), c;
  }
  return null;
}
function OL(h, f, c) {
  if (re.isString(h))
    try {
      return (f || JSON.parse)(h), re.trim(h);
    } catch (v) {
      if (v.name !== "SyntaxError")
        throw v;
    }
  return (c || JSON.stringify)(h);
}
const _E = {
  transitional: sT,
  adapter: ["xhr", "http"],
  transformRequest: [function(f, c) {
    const v = c.getContentType() || "", w = v.indexOf("application/json") > -1, T = re.isObject(f);
    if (T && re.isHTMLForm(f) && (f = new FormData(f)), re.isFormData(f))
      return w && w ? JSON.stringify(fT(f)) : f;
    if (re.isArrayBuffer(f) || re.isBuffer(f) || re.isStream(f) || re.isFile(f) || re.isBlob(f))
      return f;
    if (re.isArrayBufferView(f))
      return f.buffer;
    if (re.isURLSearchParams(f))
      return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), f.toString();
    let g;
    if (T) {
      if (v.indexOf("application/x-www-form-urlencoded") > -1)
        return bL(f, this.formSerializer).toString();
      if ((g = re.isFileList(f)) || v.indexOf("multipart/form-data") > -1) {
        const U = this.env && this.env.FormData;
        return Ny(
          g ? { "files[]": f } : f,
          U && new U(),
          this.formSerializer
        );
      }
    }
    return T || w ? (c.setContentType("application/json", !1), OL(f)) : f;
  }],
  transformResponse: [function(f) {
    const c = this.transitional || _E.transitional, v = c && c.forcedJSONParsing, w = this.responseType === "json";
    if (f && re.isString(f) && (v && !this.responseType || w)) {
      const C = !(c && c.silentJSONParsing) && w;
      try {
        return JSON.parse(f);
      } catch (g) {
        if (C)
          throw g.name === "SyntaxError" ? jt.from(g, jt.ERR_BAD_RESPONSE, this, null, this.response) : g;
      }
    }
    return f;
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
    FormData: ao.classes.FormData,
    Blob: ao.classes.Blob
  },
  validateStatus: function(f) {
    return f >= 200 && f < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
re.forEach(["delete", "get", "head", "post", "put", "patch"], (h) => {
  _E.headers[h] = {};
});
const OE = _E, DL = re.toObjectSet([
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
]), LL = (h) => {
  const f = {};
  let c, v, w;
  return h && h.split(`
`).forEach(function(C) {
    w = C.indexOf(":"), c = C.substring(0, w).trim().toLowerCase(), v = C.substring(w + 1).trim(), !(!c || f[c] && DL[c]) && (c === "set-cookie" ? f[c] ? f[c].push(v) : f[c] = [v] : f[c] = f[c] ? f[c] + ", " + v : v);
  }), f;
}, MR = Symbol("internals");
function dv(h) {
  return h && String(h).trim().toLowerCase();
}
function Cy(h) {
  return h === !1 || h == null ? h : re.isArray(h) ? h.map(Cy) : String(h);
}
function NL(h) {
  const f = /* @__PURE__ */ Object.create(null), c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let v;
  for (; v = c.exec(h); )
    f[v[1]] = v[2];
  return f;
}
const ML = (h) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(h.trim());
function fE(h, f, c, v, w) {
  if (re.isFunction(v))
    return v.call(this, f, c);
  if (w && (f = c), !!re.isString(f)) {
    if (re.isString(v))
      return f.indexOf(v) !== -1;
    if (re.isRegExp(v))
      return v.test(f);
  }
}
function AL(h) {
  return h.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (f, c, v) => c.toUpperCase() + v);
}
function zL(h, f) {
  const c = re.toCamelCase(" " + f);
  ["get", "set", "has"].forEach((v) => {
    Object.defineProperty(h, v + c, {
      value: function(w, T, C) {
        return this[v].call(this, f, w, T, C);
      },
      configurable: !0
    });
  });
}
class My {
  constructor(f) {
    f && this.set(f);
  }
  set(f, c, v) {
    const w = this;
    function T(g, U, Q) {
      const z = dv(U);
      if (!z)
        throw new Error("header name must be a non-empty string");
      const j = re.findKey(w, z);
      (!j || w[j] === void 0 || Q === !0 || Q === void 0 && w[j] !== !1) && (w[j || U] = Cy(g));
    }
    const C = (g, U) => re.forEach(g, (Q, z) => T(Q, z, U));
    return re.isPlainObject(f) || f instanceof this.constructor ? C(f, c) : re.isString(f) && (f = f.trim()) && !ML(f) ? C(LL(f), c) : f != null && T(c, f, v), this;
  }
  get(f, c) {
    if (f = dv(f), f) {
      const v = re.findKey(this, f);
      if (v) {
        const w = this[v];
        if (!c)
          return w;
        if (c === !0)
          return NL(w);
        if (re.isFunction(c))
          return c.call(this, w, v);
        if (re.isRegExp(c))
          return c.exec(w);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(f, c) {
    if (f = dv(f), f) {
      const v = re.findKey(this, f);
      return !!(v && this[v] !== void 0 && (!c || fE(this, this[v], v, c)));
    }
    return !1;
  }
  delete(f, c) {
    const v = this;
    let w = !1;
    function T(C) {
      if (C = dv(C), C) {
        const g = re.findKey(v, C);
        g && (!c || fE(v, v[g], g, c)) && (delete v[g], w = !0);
      }
    }
    return re.isArray(f) ? f.forEach(T) : T(f), w;
  }
  clear(f) {
    const c = Object.keys(this);
    let v = c.length, w = !1;
    for (; v--; ) {
      const T = c[v];
      (!f || fE(this, this[T], T, f, !0)) && (delete this[T], w = !0);
    }
    return w;
  }
  normalize(f) {
    const c = this, v = {};
    return re.forEach(this, (w, T) => {
      const C = re.findKey(v, T);
      if (C) {
        c[C] = Cy(w), delete c[T];
        return;
      }
      const g = f ? AL(T) : String(T).trim();
      g !== T && delete c[T], c[g] = Cy(w), v[g] = !0;
    }), this;
  }
  concat(...f) {
    return this.constructor.concat(this, ...f);
  }
  toJSON(f) {
    const c = /* @__PURE__ */ Object.create(null);
    return re.forEach(this, (v, w) => {
      v != null && v !== !1 && (c[w] = f && re.isArray(v) ? v.join(", ") : v);
    }), c;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([f, c]) => f + ": " + c).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(f) {
    return f instanceof this ? f : new this(f);
  }
  static concat(f, ...c) {
    const v = new this(f);
    return c.forEach((w) => v.set(w)), v;
  }
  static accessor(f) {
    const v = (this[MR] = this[MR] = {
      accessors: {}
    }).accessors, w = this.prototype;
    function T(C) {
      const g = dv(C);
      v[g] || (zL(w, C), v[g] = !0);
    }
    return re.isArray(f) ? f.forEach(T) : T(f), this;
  }
}
My.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
re.reduceDescriptors(My.prototype, ({ value: h }, f) => {
  let c = f[0].toUpperCase() + f.slice(1);
  return {
    get: () => h,
    set(v) {
      this[c] = v;
    }
  };
});
re.freezeMethods(My);
const eu = My;
function dE(h, f) {
  const c = this || OE, v = f || c, w = eu.from(v.headers);
  let T = v.data;
  return re.forEach(h, function(g) {
    T = g.call(c, T, w.normalize(), f ? f.status : void 0);
  }), w.normalize(), T;
}
function dT(h) {
  return !!(h && h.__CANCEL__);
}
function wv(h, f, c) {
  jt.call(this, h ?? "canceled", jt.ERR_CANCELED, f, c), this.name = "CanceledError";
}
re.inherits(wv, jt, {
  __CANCEL__: !0
});
function UL(h, f, c) {
  const v = c.config.validateStatus;
  !c.status || !v || v(c.status) ? h(c) : f(new jt(
    "Request failed with status code " + c.status,
    [jt.ERR_BAD_REQUEST, jt.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4],
    c.config,
    c.request,
    c
  ));
}
const jL = ao.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(h, f, c, v, w, T) {
      const C = [h + "=" + encodeURIComponent(f)];
      re.isNumber(c) && C.push("expires=" + new Date(c).toGMTString()), re.isString(v) && C.push("path=" + v), re.isString(w) && C.push("domain=" + w), T === !0 && C.push("secure"), document.cookie = C.join("; ");
    },
    read(h) {
      const f = document.cookie.match(new RegExp("(^|;\\s*)(" + h + ")=([^;]*)"));
      return f ? decodeURIComponent(f[3]) : null;
    },
    remove(h) {
      this.write(h, "", Date.now() - 864e5);
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
function FL(h) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(h);
}
function PL(h, f) {
  return f ? h.replace(/\/+$/, "") + "/" + f.replace(/^\/+/, "") : h;
}
function pT(h, f) {
  return h && !FL(f) ? PL(h, f) : f;
}
const HL = ao.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const f = /(msie|trident)/i.test(navigator.userAgent), c = document.createElement("a");
    let v;
    function w(T) {
      let C = T;
      return f && (c.setAttribute("href", C), C = c.href), c.setAttribute("href", C), {
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
    return v = w(window.location.href), function(C) {
      const g = re.isString(C) ? w(C) : C;
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
function BL(h) {
  const f = /^([-+\w]{1,25})(:?\/\/|:)/.exec(h);
  return f && f[1] || "";
}
function VL(h, f) {
  h = h || 10;
  const c = new Array(h), v = new Array(h);
  let w = 0, T = 0, C;
  return f = f !== void 0 ? f : 1e3, function(U) {
    const Q = Date.now(), z = v[T];
    C || (C = Q), c[w] = U, v[w] = Q;
    let j = T, Y = 0;
    for (; j !== w; )
      Y += c[j++], j = j % h;
    if (w = (w + 1) % h, w === T && (T = (T + 1) % h), Q - C < f)
      return;
    const oe = z && Q - z;
    return oe ? Math.round(Y * 1e3 / oe) : void 0;
  };
}
function AR(h, f) {
  let c = 0;
  const v = VL(50, 250);
  return (w) => {
    const T = w.loaded, C = w.lengthComputable ? w.total : void 0, g = T - c, U = v(g), Q = T <= C;
    c = T;
    const z = {
      loaded: T,
      total: C,
      progress: C ? T / C : void 0,
      bytes: g,
      rate: U || void 0,
      estimated: U && C && Q ? (C - T) / U : void 0,
      event: w
    };
    z[f ? "download" : "upload"] = !0, h(z);
  };
}
const $L = typeof XMLHttpRequest < "u", IL = $L && function(h) {
  return new Promise(function(c, v) {
    let w = h.data;
    const T = eu.from(h.headers).normalize();
    let { responseType: C, withXSRFToken: g } = h, U;
    function Q() {
      h.cancelToken && h.cancelToken.unsubscribe(U), h.signal && h.signal.removeEventListener("abort", U);
    }
    let z;
    if (re.isFormData(w)) {
      if (ao.hasStandardBrowserEnv || ao.hasStandardBrowserWebWorkerEnv)
        T.setContentType(!1);
      else if ((z = T.getContentType()) !== !1) {
        const [K, ...Te] = z ? z.split(";").map((lt) => lt.trim()).filter(Boolean) : [];
        T.setContentType([K || "multipart/form-data", ...Te].join("; "));
      }
    }
    let j = new XMLHttpRequest();
    if (h.auth) {
      const K = h.auth.username || "", Te = h.auth.password ? unescape(encodeURIComponent(h.auth.password)) : "";
      T.set("Authorization", "Basic " + btoa(K + ":" + Te));
    }
    const Y = pT(h.baseURL, h.url);
    j.open(h.method.toUpperCase(), uT(Y, h.params, h.paramsSerializer), !0), j.timeout = h.timeout;
    function oe() {
      if (!j)
        return;
      const K = eu.from(
        "getAllResponseHeaders" in j && j.getAllResponseHeaders()
      ), lt = {
        data: !C || C === "text" || C === "json" ? j.responseText : j.response,
        status: j.status,
        statusText: j.statusText,
        headers: K,
        config: h,
        request: j
      };
      UL(function(Pe) {
        c(Pe), Q();
      }, function(Pe) {
        v(Pe), Q();
      }, lt), j = null;
    }
    if ("onloadend" in j ? j.onloadend = oe : j.onreadystatechange = function() {
      !j || j.readyState !== 4 || j.status === 0 && !(j.responseURL && j.responseURL.indexOf("file:") === 0) || setTimeout(oe);
    }, j.onabort = function() {
      j && (v(new jt("Request aborted", jt.ECONNABORTED, h, j)), j = null);
    }, j.onerror = function() {
      v(new jt("Network Error", jt.ERR_NETWORK, h, j)), j = null;
    }, j.ontimeout = function() {
      let Te = h.timeout ? "timeout of " + h.timeout + "ms exceeded" : "timeout exceeded";
      const lt = h.transitional || sT;
      h.timeoutErrorMessage && (Te = h.timeoutErrorMessage), v(new jt(
        Te,
        lt.clarifyTimeoutError ? jt.ETIMEDOUT : jt.ECONNABORTED,
        h,
        j
      )), j = null;
    }, ao.hasStandardBrowserEnv && (g && re.isFunction(g) && (g = g(h)), g || g !== !1 && HL(Y))) {
      const K = h.xsrfHeaderName && h.xsrfCookieName && jL.read(h.xsrfCookieName);
      K && T.set(h.xsrfHeaderName, K);
    }
    w === void 0 && T.setContentType(null), "setRequestHeader" in j && re.forEach(T.toJSON(), function(Te, lt) {
      j.setRequestHeader(lt, Te);
    }), re.isUndefined(h.withCredentials) || (j.withCredentials = !!h.withCredentials), C && C !== "json" && (j.responseType = h.responseType), typeof h.onDownloadProgress == "function" && j.addEventListener("progress", AR(h.onDownloadProgress, !0)), typeof h.onUploadProgress == "function" && j.upload && j.upload.addEventListener("progress", AR(h.onUploadProgress)), (h.cancelToken || h.signal) && (U = (K) => {
      j && (v(!K || K.type ? new wv(null, h, j) : K), j.abort(), j = null);
    }, h.cancelToken && h.cancelToken.subscribe(U), h.signal && (h.signal.aborted ? U() : h.signal.addEventListener("abort", U)));
    const q = BL(Y);
    if (q && ao.protocols.indexOf(q) === -1) {
      v(new jt("Unsupported protocol " + q + ":", jt.ERR_BAD_REQUEST, h));
      return;
    }
    j.send(w || null);
  });
}, CE = {
  http: vL,
  xhr: IL
};
re.forEach(CE, (h, f) => {
  if (h) {
    try {
      Object.defineProperty(h, "name", { value: f });
    } catch {
    }
    Object.defineProperty(h, "adapterName", { value: f });
  }
});
const zR = (h) => `- ${h}`, YL = (h) => re.isFunction(h) || h === null || h === !1, vT = {
  getAdapter: (h) => {
    h = re.isArray(h) ? h : [h];
    const { length: f } = h;
    let c, v;
    const w = {};
    for (let T = 0; T < f; T++) {
      c = h[T];
      let C;
      if (v = c, !YL(c) && (v = CE[(C = String(c)).toLowerCase()], v === void 0))
        throw new jt(`Unknown adapter '${C}'`);
      if (v)
        break;
      w[C || "#" + T] = v;
    }
    if (!v) {
      const T = Object.entries(w).map(
        ([g, U]) => `adapter ${g} ` + (U === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let C = f ? T.length > 1 ? `since :
` + T.map(zR).join(`
`) : " " + zR(T[0]) : "as no adapter specified";
      throw new jt(
        "There is no suitable adapter to dispatch the request " + C,
        "ERR_NOT_SUPPORT"
      );
    }
    return v;
  },
  adapters: CE
};
function pE(h) {
  if (h.cancelToken && h.cancelToken.throwIfRequested(), h.signal && h.signal.aborted)
    throw new wv(null, h);
}
function UR(h) {
  return pE(h), h.headers = eu.from(h.headers), h.data = dE.call(
    h,
    h.transformRequest
  ), ["post", "put", "patch"].indexOf(h.method) !== -1 && h.headers.setContentType("application/x-www-form-urlencoded", !1), vT.getAdapter(h.adapter || OE.adapter)(h).then(function(v) {
    return pE(h), v.data = dE.call(
      h,
      h.transformResponse,
      v
    ), v.headers = eu.from(v.headers), v;
  }, function(v) {
    return dT(v) || (pE(h), v && v.response && (v.response.data = dE.call(
      h,
      h.transformResponse,
      v.response
    ), v.response.headers = eu.from(v.response.headers))), Promise.reject(v);
  });
}
const jR = (h) => h instanceof eu ? h.toJSON() : h;
function sd(h, f) {
  f = f || {};
  const c = {};
  function v(Q, z, j) {
    return re.isPlainObject(Q) && re.isPlainObject(z) ? re.merge.call({ caseless: j }, Q, z) : re.isPlainObject(z) ? re.merge({}, z) : re.isArray(z) ? z.slice() : z;
  }
  function w(Q, z, j) {
    if (re.isUndefined(z)) {
      if (!re.isUndefined(Q))
        return v(void 0, Q, j);
    } else
      return v(Q, z, j);
  }
  function T(Q, z) {
    if (!re.isUndefined(z))
      return v(void 0, z);
  }
  function C(Q, z) {
    if (re.isUndefined(z)) {
      if (!re.isUndefined(Q))
        return v(void 0, Q);
    } else
      return v(void 0, z);
  }
  function g(Q, z, j) {
    if (j in f)
      return v(Q, z);
    if (j in h)
      return v(void 0, Q);
  }
  const U = {
    url: T,
    method: T,
    data: T,
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
    headers: (Q, z) => w(jR(Q), jR(z), !0)
  };
  return re.forEach(Object.keys(Object.assign({}, h, f)), function(z) {
    const j = U[z] || w, Y = j(h[z], f[z], z);
    re.isUndefined(Y) && j !== g || (c[z] = Y);
  }), c;
}
const hT = "1.6.2", DE = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((h, f) => {
  DE[h] = function(v) {
    return typeof v === h || "a" + (f < 1 ? "n " : " ") + h;
  };
});
const FR = {};
DE.transitional = function(f, c, v) {
  function w(T, C) {
    return "[Axios v" + hT + "] Transitional option '" + T + "'" + C + (v ? ". " + v : "");
  }
  return (T, C, g) => {
    if (f === !1)
      throw new jt(
        w(C, " has been removed" + (c ? " in " + c : "")),
        jt.ERR_DEPRECATED
      );
    return c && !FR[C] && (FR[C] = !0, console.warn(
      w(
        C,
        " has been deprecated since v" + c + " and will be removed in the near future"
      )
    )), f ? f(T, C, g) : !0;
  };
};
function WL(h, f, c) {
  if (typeof h != "object")
    throw new jt("options must be an object", jt.ERR_BAD_OPTION_VALUE);
  const v = Object.keys(h);
  let w = v.length;
  for (; w-- > 0; ) {
    const T = v[w], C = f[T];
    if (C) {
      const g = h[T], U = g === void 0 || C(g, T, h);
      if (U !== !0)
        throw new jt("option " + T + " must be " + U, jt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0)
      throw new jt("Unknown option " + T, jt.ERR_BAD_OPTION);
  }
}
const wE = {
  assertOptions: WL,
  validators: DE
}, ls = wE.validators;
class Ry {
  constructor(f) {
    this.defaults = f, this.interceptors = {
      request: new NR(),
      response: new NR()
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
  request(f, c) {
    typeof f == "string" ? (c = c || {}, c.url = f) : c = f || {}, c = sd(this.defaults, c);
    const { transitional: v, paramsSerializer: w, headers: T } = c;
    v !== void 0 && wE.assertOptions(v, {
      silentJSONParsing: ls.transitional(ls.boolean),
      forcedJSONParsing: ls.transitional(ls.boolean),
      clarifyTimeoutError: ls.transitional(ls.boolean)
    }, !1), w != null && (re.isFunction(w) ? c.paramsSerializer = {
      serialize: w
    } : wE.assertOptions(w, {
      encode: ls.function,
      serialize: ls.function
    }, !0)), c.method = (c.method || this.defaults.method || "get").toLowerCase();
    let C = T && re.merge(
      T.common,
      T[c.method]
    );
    T && re.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (q) => {
        delete T[q];
      }
    ), c.headers = eu.concat(C, T);
    const g = [];
    let U = !0;
    this.interceptors.request.forEach(function(K) {
      typeof K.runWhen == "function" && K.runWhen(c) === !1 || (U = U && K.synchronous, g.unshift(K.fulfilled, K.rejected));
    });
    const Q = [];
    this.interceptors.response.forEach(function(K) {
      Q.push(K.fulfilled, K.rejected);
    });
    let z, j = 0, Y;
    if (!U) {
      const q = [UR.bind(this), void 0];
      for (q.unshift.apply(q, g), q.push.apply(q, Q), Y = q.length, z = Promise.resolve(c); j < Y; )
        z = z.then(q[j++], q[j++]);
      return z;
    }
    Y = g.length;
    let oe = c;
    for (j = 0; j < Y; ) {
      const q = g[j++], K = g[j++];
      try {
        oe = q(oe);
      } catch (Te) {
        K.call(this, Te);
        break;
      }
    }
    try {
      z = UR.call(this, oe);
    } catch (q) {
      return Promise.reject(q);
    }
    for (j = 0, Y = Q.length; j < Y; )
      z = z.then(Q[j++], Q[j++]);
    return z;
  }
  getUri(f) {
    f = sd(this.defaults, f);
    const c = pT(f.baseURL, f.url);
    return uT(c, f.params, f.paramsSerializer);
  }
}
re.forEach(["delete", "get", "head", "options"], function(f) {
  Ry.prototype[f] = function(c, v) {
    return this.request(sd(v || {}, {
      method: f,
      url: c,
      data: (v || {}).data
    }));
  };
});
re.forEach(["post", "put", "patch"], function(f) {
  function c(v) {
    return function(T, C, g) {
      return this.request(sd(g || {}, {
        method: f,
        headers: v ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: T,
        data: C
      }));
    };
  }
  Ry.prototype[f] = c(), Ry.prototype[f + "Form"] = c(!0);
});
const wy = Ry;
class LE {
  constructor(f) {
    if (typeof f != "function")
      throw new TypeError("executor must be a function.");
    let c;
    this.promise = new Promise(function(T) {
      c = T;
    });
    const v = this;
    this.promise.then((w) => {
      if (!v._listeners)
        return;
      let T = v._listeners.length;
      for (; T-- > 0; )
        v._listeners[T](w);
      v._listeners = null;
    }), this.promise.then = (w) => {
      let T;
      const C = new Promise((g) => {
        v.subscribe(g), T = g;
      }).then(w);
      return C.cancel = function() {
        v.unsubscribe(T);
      }, C;
    }, f(function(T, C, g) {
      v.reason || (v.reason = new wv(T, C, g), c(v.reason));
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
  subscribe(f) {
    if (this.reason) {
      f(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(f) : this._listeners = [f];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(f) {
    if (!this._listeners)
      return;
    const c = this._listeners.indexOf(f);
    c !== -1 && this._listeners.splice(c, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let f;
    return {
      token: new LE(function(w) {
        f = w;
      }),
      cancel: f
    };
  }
}
const QL = LE;
function qL(h) {
  return function(c) {
    return h.apply(null, c);
  };
}
function GL(h) {
  return re.isObject(h) && h.isAxiosError === !0;
}
const RE = {
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
Object.entries(RE).forEach(([h, f]) => {
  RE[f] = h;
});
const KL = RE;
function mT(h) {
  const f = new wy(h), c = KR(wy.prototype.request, f);
  return re.extend(c, wy.prototype, f, { allOwnKeys: !0 }), re.extend(c, f, null, { allOwnKeys: !0 }), c.create = function(w) {
    return mT(sd(h, w));
  }, c;
}
const ar = mT(OE);
ar.Axios = wy;
ar.CanceledError = wv;
ar.CancelToken = QL;
ar.isCancel = dT;
ar.VERSION = hT;
ar.toFormData = Ny;
ar.AxiosError = jt;
ar.Cancel = ar.CanceledError;
ar.all = function(f) {
  return Promise.all(f);
};
ar.spread = qL;
ar.isAxiosError = GL;
ar.mergeConfig = sd;
ar.AxiosHeaders = eu;
ar.formToJSON = (h) => fT(re.isHTMLForm(h) ? new FormData(h) : h);
ar.getAdapter = vT.getAdapter;
ar.HttpStatusCode = KL;
ar.default = ar;
const XL = ar;
var yT = {}, cd = {};
Object.defineProperty(cd, "__esModule", { value: !0 });
cd.cssValue = cd.parseLengthAndUnit = void 0;
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
function gT(h) {
  if (typeof h == "number")
    return {
      value: h,
      unit: "px"
    };
  var f, c = (h.match(/^[0-9.]*/) || "").toString();
  c.includes(".") ? f = parseFloat(c) : f = parseInt(c, 10);
  var v = (h.match(/[^0-9]*$/) || "").toString();
  return ZL[v] ? {
    value: f,
    unit: v
  } : (console.warn("React Spinners: ".concat(h, " is not a valid css value. Defaulting to ").concat(f, "px.")), {
    value: f,
    unit: "px"
  });
}
cd.parseLengthAndUnit = gT;
function JL(h) {
  var f = gT(h);
  return "".concat(f.value).concat(f.unit);
}
cd.cssValue = JL;
var Ay = {};
Object.defineProperty(Ay, "__esModule", { value: !0 });
Ay.createAnimation = void 0;
var eN = function(h, f, c) {
  var v = "react-spinners-".concat(h, "-").concat(c);
  if (typeof window > "u" || !window.document)
    return v;
  var w = document.createElement("style");
  document.head.appendChild(w);
  var T = w.sheet, C = `
    @keyframes `.concat(v, ` {
      `).concat(f, `
    }
  `);
  return T && T.insertRule(C, 0), v;
};
Ay.createAnimation = eN;
var Ty = oo && oo.__assign || function() {
  return Ty = Object.assign || function(h) {
    for (var f, c = 1, v = arguments.length; c < v; c++) {
      f = arguments[c];
      for (var w in f)
        Object.prototype.hasOwnProperty.call(f, w) && (h[w] = f[w]);
    }
    return h;
  }, Ty.apply(this, arguments);
}, tN = oo && oo.__createBinding || (Object.create ? function(h, f, c, v) {
  v === void 0 && (v = c);
  var w = Object.getOwnPropertyDescriptor(f, c);
  (!w || ("get" in w ? !f.__esModule : w.writable || w.configurable)) && (w = { enumerable: !0, get: function() {
    return f[c];
  } }), Object.defineProperty(h, v, w);
} : function(h, f, c, v) {
  v === void 0 && (v = c), h[v] = f[c];
}), nN = oo && oo.__setModuleDefault || (Object.create ? function(h, f) {
  Object.defineProperty(h, "default", { enumerable: !0, value: f });
} : function(h, f) {
  h.default = f;
}), rN = oo && oo.__importStar || function(h) {
  if (h && h.__esModule)
    return h;
  var f = {};
  if (h != null)
    for (var c in h)
      c !== "default" && Object.prototype.hasOwnProperty.call(h, c) && tN(f, h, c);
  return nN(f, h), f;
}, aN = oo && oo.__rest || function(h, f) {
  var c = {};
  for (var v in h)
    Object.prototype.hasOwnProperty.call(h, v) && f.indexOf(v) < 0 && (c[v] = h[v]);
  if (h != null && typeof Object.getOwnPropertySymbols == "function")
    for (var w = 0, v = Object.getOwnPropertySymbols(h); w < v.length; w++)
      f.indexOf(v[w]) < 0 && Object.prototype.propertyIsEnumerable.call(h, v[w]) && (c[v[w]] = h[v[w]]);
  return c;
};
Object.defineProperty(yT, "__esModule", { value: !0 });
var yy = rN(Ir), vE = cd, iN = Ay, lN = (0, iN.createAnimation)("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function oN(h) {
  var f = h.loading, c = f === void 0 ? !0 : f, v = h.color, w = v === void 0 ? "#000000" : v, T = h.speedMultiplier, C = T === void 0 ? 1 : T, g = h.cssOverride, U = g === void 0 ? {} : g, Q = h.size, z = Q === void 0 ? 15 : Q, j = h.margin, Y = j === void 0 ? 2 : j, oe = aN(h, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), q = Ty({ display: "inherit" }, U), K = function(Te) {
    return {
      backgroundColor: w,
      width: (0, vE.cssValue)(z),
      height: (0, vE.cssValue)(z),
      margin: (0, vE.cssValue)(Y),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(lN, " ").concat(0.75 / C, "s ").concat(Te * 0.12 / C, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return c ? yy.createElement(
    "span",
    Ty({ style: q }, oe),
    yy.createElement("span", { style: K(1) }),
    yy.createElement("span", { style: K(2) }),
    yy.createElement("span", { style: K(3) })
  ) : null;
}
var uN = yT.default = oN, ST = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(h) {
  (function() {
    var f = {}.hasOwnProperty;
    function c() {
      for (var T = "", C = 0; C < arguments.length; C++) {
        var g = arguments[C];
        g && (T = w(T, v(g)));
      }
      return T;
    }
    function v(T) {
      if (typeof T == "string" || typeof T == "number")
        return T;
      if (typeof T != "object")
        return "";
      if (Array.isArray(T))
        return c.apply(null, T);
      if (T.toString !== Object.prototype.toString && !T.toString.toString().includes("[native code]"))
        return T.toString();
      var C = "";
      for (var g in T)
        f.call(T, g) && T[g] && (C = w(C, g));
      return C;
    }
    function w(T, C) {
      return C ? T ? T + " " + C : T + C : T;
    }
    h.exports ? (c.default = c, h.exports = c) : window.classNames = c;
  })();
})(ST);
var sN = ST.exports;
const cN = /* @__PURE__ */ WR(sN);
function NE() {
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
let kc = NE();
function ET(h) {
  kc = h;
}
const CT = /[&<>"']/, fN = new RegExp(CT.source, "g"), wT = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, dN = new RegExp(wT.source, "g"), pN = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, PR = (h) => pN[h];
function mi(h, f) {
  if (f) {
    if (CT.test(h))
      return h.replace(fN, PR);
  } else if (wT.test(h))
    return h.replace(dN, PR);
  return h;
}
const vN = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function hN(h) {
  return h.replace(vN, (f, c) => (c = c.toLowerCase(), c === "colon" ? ":" : c.charAt(0) === "#" ? c.charAt(1) === "x" ? String.fromCharCode(parseInt(c.substring(2), 16)) : String.fromCharCode(+c.substring(1)) : ""));
}
const mN = /(^|[^\[])\^/g;
function ln(h, f) {
  let c = typeof h == "string" ? h : h.source;
  f = f || "";
  const v = {
    replace: (w, T) => {
      let C = typeof T == "string" ? T : T.source;
      return C = C.replace(mN, "$1"), c = c.replace(w, C), v;
    },
    getRegex: () => new RegExp(c, f)
  };
  return v;
}
function HR(h) {
  try {
    h = encodeURI(h).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return h;
}
const yv = { exec: () => null };
function BR(h, f) {
  const c = h.replace(/\|/g, (T, C, g) => {
    let U = !1, Q = C;
    for (; --Q >= 0 && g[Q] === "\\"; )
      U = !U;
    return U ? "|" : " |";
  }), v = c.split(/ \|/);
  let w = 0;
  if (v[0].trim() || v.shift(), v.length > 0 && !v[v.length - 1].trim() && v.pop(), f)
    if (v.length > f)
      v.splice(f);
    else
      for (; v.length < f; )
        v.push("");
  for (; w < v.length; w++)
    v[w] = v[w].trim().replace(/\\\|/g, "|");
  return v;
}
function gy(h, f, c) {
  const v = h.length;
  if (v === 0)
    return "";
  let w = 0;
  for (; w < v; ) {
    const T = h.charAt(v - w - 1);
    if (T === f && !c)
      w++;
    else if (T !== f && c)
      w++;
    else
      break;
  }
  return h.slice(0, v - w);
}
function yN(h, f) {
  if (h.indexOf(f[1]) === -1)
    return -1;
  let c = 0;
  for (let v = 0; v < h.length; v++)
    if (h[v] === "\\")
      v++;
    else if (h[v] === f[0])
      c++;
    else if (h[v] === f[1] && (c--, c < 0))
      return v;
  return -1;
}
function VR(h, f, c, v) {
  const w = f.href, T = f.title ? mi(f.title) : null, C = h[1].replace(/\\([\[\]])/g, "$1");
  if (h[0].charAt(0) !== "!") {
    v.state.inLink = !0;
    const g = {
      type: "link",
      raw: c,
      href: w,
      title: T,
      text: C,
      tokens: v.inlineTokens(C)
    };
    return v.state.inLink = !1, g;
  }
  return {
    type: "image",
    raw: c,
    href: w,
    title: T,
    text: mi(C)
  };
}
function gN(h, f) {
  const c = h.match(/^(\s+)(?:```)/);
  if (c === null)
    return f;
  const v = c[1];
  return f.split(`
`).map((w) => {
    const T = w.match(/^\s+/);
    if (T === null)
      return w;
    const [C] = T;
    return C.length >= v.length ? w.slice(v.length) : w;
  }).join(`
`);
}
class xy {
  // set by the lexer
  constructor(f) {
    Rn(this, "options");
    Rn(this, "rules");
    // set by the lexer
    Rn(this, "lexer");
    this.options = f || kc;
  }
  space(f) {
    const c = this.rules.block.newline.exec(f);
    if (c && c[0].length > 0)
      return {
        type: "space",
        raw: c[0]
      };
  }
  code(f) {
    const c = this.rules.block.code.exec(f);
    if (c) {
      const v = c[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: c[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? v : gy(v, `
`)
      };
    }
  }
  fences(f) {
    const c = this.rules.block.fences.exec(f);
    if (c) {
      const v = c[0], w = gN(v, c[3] || "");
      return {
        type: "code",
        raw: v,
        lang: c[2] ? c[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : c[2],
        text: w
      };
    }
  }
  heading(f) {
    const c = this.rules.block.heading.exec(f);
    if (c) {
      let v = c[2].trim();
      if (/#$/.test(v)) {
        const w = gy(v, "#");
        (this.options.pedantic || !w || / $/.test(w)) && (v = w.trim());
      }
      return {
        type: "heading",
        raw: c[0],
        depth: c[1].length,
        text: v,
        tokens: this.lexer.inline(v)
      };
    }
  }
  hr(f) {
    const c = this.rules.block.hr.exec(f);
    if (c)
      return {
        type: "hr",
        raw: c[0]
      };
  }
  blockquote(f) {
    const c = this.rules.block.blockquote.exec(f);
    if (c) {
      const v = gy(c[0].replace(/^ *>[ \t]?/gm, ""), `
`), w = this.lexer.state.top;
      this.lexer.state.top = !0;
      const T = this.lexer.blockTokens(v);
      return this.lexer.state.top = w, {
        type: "blockquote",
        raw: c[0],
        tokens: T,
        text: v
      };
    }
  }
  list(f) {
    let c = this.rules.block.list.exec(f);
    if (c) {
      let v = c[1].trim();
      const w = v.length > 1, T = {
        type: "list",
        raw: "",
        ordered: w,
        start: w ? +v.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      v = w ? `\\d{1,9}\\${v.slice(-1)}` : `\\${v}`, this.options.pedantic && (v = w ? v : "[*+-]");
      const C = new RegExp(`^( {0,3}${v})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let g = "", U = "", Q = !1;
      for (; f; ) {
        let z = !1;
        if (!(c = C.exec(f)) || this.rules.block.hr.test(f))
          break;
        g = c[0], f = f.substring(g.length);
        let j = c[2].split(`
`, 1)[0].replace(/^\t+/, (lt) => " ".repeat(3 * lt.length)), Y = f.split(`
`, 1)[0], oe = 0;
        this.options.pedantic ? (oe = 2, U = j.trimStart()) : (oe = c[2].search(/[^ ]/), oe = oe > 4 ? 1 : oe, U = j.slice(oe), oe += c[1].length);
        let q = !1;
        if (!j && /^ *$/.test(Y) && (g += Y + `
`, f = f.substring(Y.length + 1), z = !0), !z) {
          const lt = new RegExp(`^ {0,${Math.min(3, oe - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), pt = new RegExp(`^ {0,${Math.min(3, oe - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), Pe = new RegExp(`^ {0,${Math.min(3, oe - 1)}}(?:\`\`\`|~~~)`), _e = new RegExp(`^ {0,${Math.min(3, oe - 1)}}#`);
          for (; f; ) {
            const mt = f.split(`
`, 1)[0];
            if (Y = mt, this.options.pedantic && (Y = Y.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), Pe.test(Y) || _e.test(Y) || lt.test(Y) || pt.test(f))
              break;
            if (Y.search(/[^ ]/) >= oe || !Y.trim())
              U += `
` + Y.slice(oe);
            else {
              if (q || j.search(/[^ ]/) >= 4 || Pe.test(j) || _e.test(j) || pt.test(j))
                break;
              U += `
` + Y;
            }
            !q && !Y.trim() && (q = !0), g += mt + `
`, f = f.substring(mt.length + 1), j = Y.slice(oe);
          }
        }
        T.loose || (Q ? T.loose = !0 : /\n *\n *$/.test(g) && (Q = !0));
        let K = null, Te;
        this.options.gfm && (K = /^\[[ xX]\] /.exec(U), K && (Te = K[0] !== "[ ] ", U = U.replace(/^\[[ xX]\] +/, ""))), T.items.push({
          type: "list_item",
          raw: g,
          task: !!K,
          checked: Te,
          loose: !1,
          text: U,
          tokens: []
        }), T.raw += g;
      }
      T.items[T.items.length - 1].raw = g.trimEnd(), T.items[T.items.length - 1].text = U.trimEnd(), T.raw = T.raw.trimEnd();
      for (let z = 0; z < T.items.length; z++)
        if (this.lexer.state.top = !1, T.items[z].tokens = this.lexer.blockTokens(T.items[z].text, []), !T.loose) {
          const j = T.items[z].tokens.filter((oe) => oe.type === "space"), Y = j.length > 0 && j.some((oe) => /\n.*\n/.test(oe.raw));
          T.loose = Y;
        }
      if (T.loose)
        for (let z = 0; z < T.items.length; z++)
          T.items[z].loose = !0;
      return T;
    }
  }
  html(f) {
    const c = this.rules.block.html.exec(f);
    if (c)
      return {
        type: "html",
        block: !0,
        raw: c[0],
        pre: c[1] === "pre" || c[1] === "script" || c[1] === "style",
        text: c[0]
      };
  }
  def(f) {
    const c = this.rules.block.def.exec(f);
    if (c) {
      const v = c[1].toLowerCase().replace(/\s+/g, " "), w = c[2] ? c[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", T = c[3] ? c[3].substring(1, c[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : c[3];
      return {
        type: "def",
        tag: v,
        raw: c[0],
        href: w,
        title: T
      };
    }
  }
  table(f) {
    const c = this.rules.block.table.exec(f);
    if (!c || !/[:|]/.test(c[2]))
      return;
    const v = BR(c[1]), w = c[2].replace(/^\||\| *$/g, "").split("|"), T = c[3] && c[3].trim() ? c[3].replace(/\n[ \t]*$/, "").split(`
`) : [], C = {
      type: "table",
      raw: c[0],
      header: [],
      align: [],
      rows: []
    };
    if (v.length === w.length) {
      for (const g of w)
        /^ *-+: *$/.test(g) ? C.align.push("right") : /^ *:-+: *$/.test(g) ? C.align.push("center") : /^ *:-+ *$/.test(g) ? C.align.push("left") : C.align.push(null);
      for (const g of v)
        C.header.push({
          text: g,
          tokens: this.lexer.inline(g)
        });
      for (const g of T)
        C.rows.push(BR(g, C.header.length).map((U) => ({
          text: U,
          tokens: this.lexer.inline(U)
        })));
      return C;
    }
  }
  lheading(f) {
    const c = this.rules.block.lheading.exec(f);
    if (c)
      return {
        type: "heading",
        raw: c[0],
        depth: c[2].charAt(0) === "=" ? 1 : 2,
        text: c[1],
        tokens: this.lexer.inline(c[1])
      };
  }
  paragraph(f) {
    const c = this.rules.block.paragraph.exec(f);
    if (c) {
      const v = c[1].charAt(c[1].length - 1) === `
` ? c[1].slice(0, -1) : c[1];
      return {
        type: "paragraph",
        raw: c[0],
        text: v,
        tokens: this.lexer.inline(v)
      };
    }
  }
  text(f) {
    const c = this.rules.block.text.exec(f);
    if (c)
      return {
        type: "text",
        raw: c[0],
        text: c[0],
        tokens: this.lexer.inline(c[0])
      };
  }
  escape(f) {
    const c = this.rules.inline.escape.exec(f);
    if (c)
      return {
        type: "escape",
        raw: c[0],
        text: mi(c[1])
      };
  }
  tag(f) {
    const c = this.rules.inline.tag.exec(f);
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
  link(f) {
    const c = this.rules.inline.link.exec(f);
    if (c) {
      const v = c[2].trim();
      if (!this.options.pedantic && /^</.test(v)) {
        if (!/>$/.test(v))
          return;
        const C = gy(v.slice(0, -1), "\\");
        if ((v.length - C.length) % 2 === 0)
          return;
      } else {
        const C = yN(c[2], "()");
        if (C > -1) {
          const U = (c[0].indexOf("!") === 0 ? 5 : 4) + c[1].length + C;
          c[2] = c[2].substring(0, C), c[0] = c[0].substring(0, U).trim(), c[3] = "";
        }
      }
      let w = c[2], T = "";
      if (this.options.pedantic) {
        const C = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(w);
        C && (w = C[1], T = C[3]);
      } else
        T = c[3] ? c[3].slice(1, -1) : "";
      return w = w.trim(), /^</.test(w) && (this.options.pedantic && !/>$/.test(v) ? w = w.slice(1) : w = w.slice(1, -1)), VR(c, {
        href: w && w.replace(this.rules.inline.anyPunctuation, "$1"),
        title: T && T.replace(this.rules.inline.anyPunctuation, "$1")
      }, c[0], this.lexer);
    }
  }
  reflink(f, c) {
    let v;
    if ((v = this.rules.inline.reflink.exec(f)) || (v = this.rules.inline.nolink.exec(f))) {
      const w = (v[2] || v[1]).replace(/\s+/g, " "), T = c[w.toLowerCase()];
      if (!T) {
        const C = v[0].charAt(0);
        return {
          type: "text",
          raw: C,
          text: C
        };
      }
      return VR(v, T, v[0], this.lexer);
    }
  }
  emStrong(f, c, v = "") {
    let w = this.rules.inline.emStrongLDelim.exec(f);
    if (!w || w[3] && v.match(/[\p{L}\p{N}]/u))
      return;
    if (!(w[1] || w[2] || "") || !v || this.rules.inline.punctuation.exec(v)) {
      const C = [...w[0]].length - 1;
      let g, U, Q = C, z = 0;
      const j = w[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (j.lastIndex = 0, c = c.slice(-1 * f.length + C); (w = j.exec(c)) != null; ) {
        if (g = w[1] || w[2] || w[3] || w[4] || w[5] || w[6], !g)
          continue;
        if (U = [...g].length, w[3] || w[4]) {
          Q += U;
          continue;
        } else if ((w[5] || w[6]) && C % 3 && !((C + U) % 3)) {
          z += U;
          continue;
        }
        if (Q -= U, Q > 0)
          continue;
        U = Math.min(U, U + Q + z);
        const Y = [...w[0]][0].length, oe = f.slice(0, C + w.index + Y + U);
        if (Math.min(C, U) % 2) {
          const K = oe.slice(1, -1);
          return {
            type: "em",
            raw: oe,
            text: K,
            tokens: this.lexer.inlineTokens(K)
          };
        }
        const q = oe.slice(2, -2);
        return {
          type: "strong",
          raw: oe,
          text: q,
          tokens: this.lexer.inlineTokens(q)
        };
      }
    }
  }
  codespan(f) {
    const c = this.rules.inline.code.exec(f);
    if (c) {
      let v = c[2].replace(/\n/g, " ");
      const w = /[^ ]/.test(v), T = /^ /.test(v) && / $/.test(v);
      return w && T && (v = v.substring(1, v.length - 1)), v = mi(v, !0), {
        type: "codespan",
        raw: c[0],
        text: v
      };
    }
  }
  br(f) {
    const c = this.rules.inline.br.exec(f);
    if (c)
      return {
        type: "br",
        raw: c[0]
      };
  }
  del(f) {
    const c = this.rules.inline.del.exec(f);
    if (c)
      return {
        type: "del",
        raw: c[0],
        text: c[2],
        tokens: this.lexer.inlineTokens(c[2])
      };
  }
  autolink(f) {
    const c = this.rules.inline.autolink.exec(f);
    if (c) {
      let v, w;
      return c[2] === "@" ? (v = mi(c[1]), w = "mailto:" + v) : (v = mi(c[1]), w = v), {
        type: "link",
        raw: c[0],
        text: v,
        href: w,
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
  url(f) {
    var v;
    let c;
    if (c = this.rules.inline.url.exec(f)) {
      let w, T;
      if (c[2] === "@")
        w = mi(c[0]), T = "mailto:" + w;
      else {
        let C;
        do
          C = c[0], c[0] = ((v = this.rules.inline._backpedal.exec(c[0])) == null ? void 0 : v[0]) ?? "";
        while (C !== c[0]);
        w = mi(c[0]), c[1] === "www." ? T = "http://" + c[0] : T = c[0];
      }
      return {
        type: "link",
        raw: c[0],
        text: w,
        href: T,
        tokens: [
          {
            type: "text",
            raw: w,
            text: w
          }
        ]
      };
    }
  }
  inlineText(f) {
    const c = this.rules.inline.text.exec(f);
    if (c) {
      let v;
      return this.lexer.state.inRawBlock ? v = c[0] : v = mi(c[0]), {
        type: "text",
        raw: c[0],
        text: v
      };
    }
  }
}
const SN = /^(?: *(?:\n|$))+/, EN = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, CN = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Rv = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, wN = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, RT = /(?:[*+-]|\d{1,9}[.)])/, TT = ln(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, RT).getRegex(), ME = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, RN = /^[^\n]+/, AE = /(?!\s*\])(?:\\.|[^\[\]\\])+/, TN = ln(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", AE).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), xN = ln(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, RT).getRegex(), zy = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", zE = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, bN = ln("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", zE).replace("tag", zy).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), xT = ln(ME).replace("hr", Rv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zy).getRegex(), kN = ln(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", xT).getRegex(), UE = {
  blockquote: kN,
  code: EN,
  def: TN,
  fences: CN,
  heading: wN,
  hr: Rv,
  html: bN,
  lheading: TT,
  list: xN,
  newline: SN,
  paragraph: xT,
  table: yv,
  text: RN
}, $R = ln("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Rv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zy).getRegex(), _N = {
  ...UE,
  table: $R,
  paragraph: ln(ME).replace("hr", Rv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", $R).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", zy).getRegex()
}, ON = {
  ...UE,
  html: ln(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", zE).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: yv,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: ln(ME).replace("hr", Rv).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", TT).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, bT = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, DN = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, kT = /^( {2,}|\\)\n(?!\s*$)/, LN = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Tv = "\\p{P}\\p{S}", NN = ln(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Tv).getRegex(), MN = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, AN = ln(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Tv).getRegex(), zN = ln("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Tv).getRegex(), UN = ln("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Tv).getRegex(), jN = ln(/\\([punct])/, "gu").replace(/punct/g, Tv).getRegex(), FN = ln(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), PN = ln(zE).replace("(?:-->|$)", "-->").getRegex(), HN = ln("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", PN).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), by = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, BN = ln(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", by).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), _T = ln(/^!?\[(label)\]\[(ref)\]/).replace("label", by).replace("ref", AE).getRegex(), OT = ln(/^!?\[(ref)\](?:\[\])?/).replace("ref", AE).getRegex(), VN = ln("reflink|nolink(?!\\()", "g").replace("reflink", _T).replace("nolink", OT).getRegex(), jE = {
  _backpedal: yv,
  // only used for GFM url
  anyPunctuation: jN,
  autolink: FN,
  blockSkip: MN,
  br: kT,
  code: DN,
  del: yv,
  emStrongLDelim: AN,
  emStrongRDelimAst: zN,
  emStrongRDelimUnd: UN,
  escape: bT,
  link: BN,
  nolink: OT,
  punctuation: NN,
  reflink: _T,
  reflinkSearch: VN,
  tag: HN,
  text: LN,
  url: yv
}, $N = {
  ...jE,
  link: ln(/^!?\[(label)\]\((.*?)\)/).replace("label", by).getRegex(),
  reflink: ln(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", by).getRegex()
}, TE = {
  ...jE,
  escape: ln(bT).replace("])", "~|])").getRegex(),
  url: ln(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, IN = {
  ...TE,
  br: ln(kT).replace("{2,}", "*").getRegex(),
  text: ln(TE.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Sy = {
  normal: UE,
  gfm: _N,
  pedantic: ON
}, pv = {
  normal: jE,
  gfm: TE,
  breaks: IN,
  pedantic: $N
};
class io {
  constructor(f) {
    Rn(this, "tokens");
    Rn(this, "options");
    Rn(this, "state");
    Rn(this, "tokenizer");
    Rn(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = f || kc, this.options.tokenizer = this.options.tokenizer || new xy(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const c = {
      block: Sy.normal,
      inline: pv.normal
    };
    this.options.pedantic ? (c.block = Sy.pedantic, c.inline = pv.pedantic) : this.options.gfm && (c.block = Sy.gfm, this.options.breaks ? c.inline = pv.breaks : c.inline = pv.gfm), this.tokenizer.rules = c;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Sy,
      inline: pv
    };
  }
  /**
   * Static Lex Method
   */
  static lex(f, c) {
    return new io(c).lex(f);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(f, c) {
    return new io(c).inlineTokens(f);
  }
  /**
   * Preprocessing
   */
  lex(f) {
    f = f.replace(/\r\n|\r/g, `
`), this.blockTokens(f, this.tokens);
    for (let c = 0; c < this.inlineQueue.length; c++) {
      const v = this.inlineQueue[c];
      this.inlineTokens(v.src, v.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(f, c = []) {
    this.options.pedantic ? f = f.replace(/\t/g, "    ").replace(/^ +$/gm, "") : f = f.replace(/^( *)(\t+)/gm, (g, U, Q) => U + "    ".repeat(Q.length));
    let v, w, T, C;
    for (; f; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((g) => (v = g.call({ lexer: this }, f, c)) ? (f = f.substring(v.raw.length), c.push(v), !0) : !1))) {
        if (v = this.tokenizer.space(f)) {
          f = f.substring(v.raw.length), v.raw.length === 1 && c.length > 0 ? c[c.length - 1].raw += `
` : c.push(v);
          continue;
        }
        if (v = this.tokenizer.code(f)) {
          f = f.substring(v.raw.length), w = c[c.length - 1], w && (w.type === "paragraph" || w.type === "text") ? (w.raw += `
` + v.raw, w.text += `
` + v.text, this.inlineQueue[this.inlineQueue.length - 1].src = w.text) : c.push(v);
          continue;
        }
        if (v = this.tokenizer.fences(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.heading(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.hr(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.blockquote(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.list(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.html(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.def(f)) {
          f = f.substring(v.raw.length), w = c[c.length - 1], w && (w.type === "paragraph" || w.type === "text") ? (w.raw += `
` + v.raw, w.text += `
` + v.raw, this.inlineQueue[this.inlineQueue.length - 1].src = w.text) : this.tokens.links[v.tag] || (this.tokens.links[v.tag] = {
            href: v.href,
            title: v.title
          });
          continue;
        }
        if (v = this.tokenizer.table(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.lheading(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (T = f, this.options.extensions && this.options.extensions.startBlock) {
          let g = 1 / 0;
          const U = f.slice(1);
          let Q;
          this.options.extensions.startBlock.forEach((z) => {
            Q = z.call({ lexer: this }, U), typeof Q == "number" && Q >= 0 && (g = Math.min(g, Q));
          }), g < 1 / 0 && g >= 0 && (T = f.substring(0, g + 1));
        }
        if (this.state.top && (v = this.tokenizer.paragraph(T))) {
          w = c[c.length - 1], C && w.type === "paragraph" ? (w.raw += `
` + v.raw, w.text += `
` + v.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = w.text) : c.push(v), C = T.length !== f.length, f = f.substring(v.raw.length);
          continue;
        }
        if (v = this.tokenizer.text(f)) {
          f = f.substring(v.raw.length), w = c[c.length - 1], w && w.type === "text" ? (w.raw += `
` + v.raw, w.text += `
` + v.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = w.text) : c.push(v);
          continue;
        }
        if (f) {
          const g = "Infinite loop on byte: " + f.charCodeAt(0);
          if (this.options.silent) {
            console.error(g);
            break;
          } else
            throw new Error(g);
        }
      }
    return this.state.top = !0, c;
  }
  inline(f, c = []) {
    return this.inlineQueue.push({ src: f, tokens: c }), c;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(f, c = []) {
    let v, w, T, C = f, g, U, Q;
    if (this.tokens.links) {
      const z = Object.keys(this.tokens.links);
      if (z.length > 0)
        for (; (g = this.tokenizer.rules.inline.reflinkSearch.exec(C)) != null; )
          z.includes(g[0].slice(g[0].lastIndexOf("[") + 1, -1)) && (C = C.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + C.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (g = this.tokenizer.rules.inline.blockSkip.exec(C)) != null; )
      C = C.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + C.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (g = this.tokenizer.rules.inline.anyPunctuation.exec(C)) != null; )
      C = C.slice(0, g.index) + "++" + C.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; f; )
      if (U || (Q = ""), U = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((z) => (v = z.call({ lexer: this }, f, c)) ? (f = f.substring(v.raw.length), c.push(v), !0) : !1))) {
        if (v = this.tokenizer.escape(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.tag(f)) {
          f = f.substring(v.raw.length), w = c[c.length - 1], w && v.type === "text" && w.type === "text" ? (w.raw += v.raw, w.text += v.text) : c.push(v);
          continue;
        }
        if (v = this.tokenizer.link(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.reflink(f, this.tokens.links)) {
          f = f.substring(v.raw.length), w = c[c.length - 1], w && v.type === "text" && w.type === "text" ? (w.raw += v.raw, w.text += v.text) : c.push(v);
          continue;
        }
        if (v = this.tokenizer.emStrong(f, C, Q)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.codespan(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.br(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.del(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (v = this.tokenizer.autolink(f)) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (!this.state.inLink && (v = this.tokenizer.url(f))) {
          f = f.substring(v.raw.length), c.push(v);
          continue;
        }
        if (T = f, this.options.extensions && this.options.extensions.startInline) {
          let z = 1 / 0;
          const j = f.slice(1);
          let Y;
          this.options.extensions.startInline.forEach((oe) => {
            Y = oe.call({ lexer: this }, j), typeof Y == "number" && Y >= 0 && (z = Math.min(z, Y));
          }), z < 1 / 0 && z >= 0 && (T = f.substring(0, z + 1));
        }
        if (v = this.tokenizer.inlineText(T)) {
          f = f.substring(v.raw.length), v.raw.slice(-1) !== "_" && (Q = v.raw.slice(-1)), U = !0, w = c[c.length - 1], w && w.type === "text" ? (w.raw += v.raw, w.text += v.text) : c.push(v);
          continue;
        }
        if (f) {
          const z = "Infinite loop on byte: " + f.charCodeAt(0);
          if (this.options.silent) {
            console.error(z);
            break;
          } else
            throw new Error(z);
        }
      }
    return c;
  }
}
class ky {
  constructor(f) {
    Rn(this, "options");
    this.options = f || kc;
  }
  code(f, c, v) {
    var T;
    const w = (T = (c || "").match(/^\S*/)) == null ? void 0 : T[0];
    return f = f.replace(/\n$/, "") + `
`, w ? '<pre><code class="language-' + mi(w) + '">' + (v ? f : mi(f, !0)) + `</code></pre>
` : "<pre><code>" + (v ? f : mi(f, !0)) + `</code></pre>
`;
  }
  blockquote(f) {
    return `<blockquote>
${f}</blockquote>
`;
  }
  html(f, c) {
    return f;
  }
  heading(f, c, v) {
    return `<h${c}>${f}</h${c}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(f, c, v) {
    const w = c ? "ol" : "ul", T = c && v !== 1 ? ' start="' + v + '"' : "";
    return "<" + w + T + `>
` + f + "</" + w + `>
`;
  }
  listitem(f, c, v) {
    return `<li>${f}</li>
`;
  }
  checkbox(f) {
    return "<input " + (f ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(f) {
    return `<p>${f}</p>
`;
  }
  table(f, c) {
    return c && (c = `<tbody>${c}</tbody>`), `<table>
<thead>
` + f + `</thead>
` + c + `</table>
`;
  }
  tablerow(f) {
    return `<tr>
${f}</tr>
`;
  }
  tablecell(f, c) {
    const v = c.header ? "th" : "td";
    return (c.align ? `<${v} align="${c.align}">` : `<${v}>`) + f + `</${v}>
`;
  }
  /**
   * span level renderer
   */
  strong(f) {
    return `<strong>${f}</strong>`;
  }
  em(f) {
    return `<em>${f}</em>`;
  }
  codespan(f) {
    return `<code>${f}</code>`;
  }
  br() {
    return "<br>";
  }
  del(f) {
    return `<del>${f}</del>`;
  }
  link(f, c, v) {
    const w = HR(f);
    if (w === null)
      return v;
    f = w;
    let T = '<a href="' + f + '"';
    return c && (T += ' title="' + c + '"'), T += ">" + v + "</a>", T;
  }
  image(f, c, v) {
    const w = HR(f);
    if (w === null)
      return v;
    f = w;
    let T = `<img src="${f}" alt="${v}"`;
    return c && (T += ` title="${c}"`), T += ">", T;
  }
  text(f) {
    return f;
  }
}
class FE {
  // no need for block level renderers
  strong(f) {
    return f;
  }
  em(f) {
    return f;
  }
  codespan(f) {
    return f;
  }
  del(f) {
    return f;
  }
  html(f) {
    return f;
  }
  text(f) {
    return f;
  }
  link(f, c, v) {
    return "" + v;
  }
  image(f, c, v) {
    return "" + v;
  }
  br() {
    return "";
  }
}
class lo {
  constructor(f) {
    Rn(this, "options");
    Rn(this, "renderer");
    Rn(this, "textRenderer");
    this.options = f || kc, this.options.renderer = this.options.renderer || new ky(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new FE();
  }
  /**
   * Static Parse Method
   */
  static parse(f, c) {
    return new lo(c).parse(f);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(f, c) {
    return new lo(c).parseInline(f);
  }
  /**
   * Parse Loop
   */
  parse(f, c = !0) {
    let v = "";
    for (let w = 0; w < f.length; w++) {
      const T = f[w];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[T.type]) {
        const C = T, g = this.options.extensions.renderers[C.type].call({ parser: this }, C);
        if (g !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(C.type)) {
          v += g || "";
          continue;
        }
      }
      switch (T.type) {
        case "space":
          continue;
        case "hr": {
          v += this.renderer.hr();
          continue;
        }
        case "heading": {
          const C = T;
          v += this.renderer.heading(this.parseInline(C.tokens), C.depth, hN(this.parseInline(C.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const C = T;
          v += this.renderer.code(C.text, C.lang, !!C.escaped);
          continue;
        }
        case "table": {
          const C = T;
          let g = "", U = "";
          for (let z = 0; z < C.header.length; z++)
            U += this.renderer.tablecell(this.parseInline(C.header[z].tokens), { header: !0, align: C.align[z] });
          g += this.renderer.tablerow(U);
          let Q = "";
          for (let z = 0; z < C.rows.length; z++) {
            const j = C.rows[z];
            U = "";
            for (let Y = 0; Y < j.length; Y++)
              U += this.renderer.tablecell(this.parseInline(j[Y].tokens), { header: !1, align: C.align[Y] });
            Q += this.renderer.tablerow(U);
          }
          v += this.renderer.table(g, Q);
          continue;
        }
        case "blockquote": {
          const C = T, g = this.parse(C.tokens);
          v += this.renderer.blockquote(g);
          continue;
        }
        case "list": {
          const C = T, g = C.ordered, U = C.start, Q = C.loose;
          let z = "";
          for (let j = 0; j < C.items.length; j++) {
            const Y = C.items[j], oe = Y.checked, q = Y.task;
            let K = "";
            if (Y.task) {
              const Te = this.renderer.checkbox(!!oe);
              Q ? Y.tokens.length > 0 && Y.tokens[0].type === "paragraph" ? (Y.tokens[0].text = Te + " " + Y.tokens[0].text, Y.tokens[0].tokens && Y.tokens[0].tokens.length > 0 && Y.tokens[0].tokens[0].type === "text" && (Y.tokens[0].tokens[0].text = Te + " " + Y.tokens[0].tokens[0].text)) : Y.tokens.unshift({
                type: "text",
                text: Te + " "
              }) : K += Te + " ";
            }
            K += this.parse(Y.tokens, Q), z += this.renderer.listitem(K, q, !!oe);
          }
          v += this.renderer.list(z, g, U);
          continue;
        }
        case "html": {
          const C = T;
          v += this.renderer.html(C.text, C.block);
          continue;
        }
        case "paragraph": {
          const C = T;
          v += this.renderer.paragraph(this.parseInline(C.tokens));
          continue;
        }
        case "text": {
          let C = T, g = C.tokens ? this.parseInline(C.tokens) : C.text;
          for (; w + 1 < f.length && f[w + 1].type === "text"; )
            C = f[++w], g += `
` + (C.tokens ? this.parseInline(C.tokens) : C.text);
          v += c ? this.renderer.paragraph(g) : g;
          continue;
        }
        default: {
          const C = 'Token with "' + T.type + '" type was not found.';
          if (this.options.silent)
            return console.error(C), "";
          throw new Error(C);
        }
      }
    }
    return v;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(f, c) {
    c = c || this.renderer;
    let v = "";
    for (let w = 0; w < f.length; w++) {
      const T = f[w];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[T.type]) {
        const C = this.options.extensions.renderers[T.type].call({ parser: this }, T);
        if (C !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(T.type)) {
          v += C || "";
          continue;
        }
      }
      switch (T.type) {
        case "escape": {
          const C = T;
          v += c.text(C.text);
          break;
        }
        case "html": {
          const C = T;
          v += c.html(C.text);
          break;
        }
        case "link": {
          const C = T;
          v += c.link(C.href, C.title, this.parseInline(C.tokens, c));
          break;
        }
        case "image": {
          const C = T;
          v += c.image(C.href, C.title, C.text);
          break;
        }
        case "strong": {
          const C = T;
          v += c.strong(this.parseInline(C.tokens, c));
          break;
        }
        case "em": {
          const C = T;
          v += c.em(this.parseInline(C.tokens, c));
          break;
        }
        case "codespan": {
          const C = T;
          v += c.codespan(C.text);
          break;
        }
        case "br": {
          v += c.br();
          break;
        }
        case "del": {
          const C = T;
          v += c.del(this.parseInline(C.tokens, c));
          break;
        }
        case "text": {
          const C = T;
          v += c.text(C.text);
          break;
        }
        default: {
          const C = 'Token with "' + T.type + '" type was not found.';
          if (this.options.silent)
            return console.error(C), "";
          throw new Error(C);
        }
      }
    }
    return v;
  }
}
class gv {
  constructor(f) {
    Rn(this, "options");
    this.options = f || kc;
  }
  /**
   * Process markdown before marked
   */
  preprocess(f) {
    return f;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(f) {
    return f;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(f) {
    return f;
  }
}
Rn(gv, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var Ev, xE, _y, DT;
class YN {
  constructor(...f) {
    oE(this, Ev);
    oE(this, _y);
    Rn(this, "defaults", NE());
    Rn(this, "options", this.setOptions);
    Rn(this, "parse", vy(this, Ev, xE).call(this, io.lex, lo.parse));
    Rn(this, "parseInline", vy(this, Ev, xE).call(this, io.lexInline, lo.parseInline));
    Rn(this, "Parser", lo);
    Rn(this, "Renderer", ky);
    Rn(this, "TextRenderer", FE);
    Rn(this, "Lexer", io);
    Rn(this, "Tokenizer", xy);
    Rn(this, "Hooks", gv);
    this.use(...f);
  }
  /**
   * Run callback for every token
   */
  walkTokens(f, c) {
    var w, T;
    let v = [];
    for (const C of f)
      switch (v = v.concat(c.call(this, C)), C.type) {
        case "table": {
          const g = C;
          for (const U of g.header)
            v = v.concat(this.walkTokens(U.tokens, c));
          for (const U of g.rows)
            for (const Q of U)
              v = v.concat(this.walkTokens(Q.tokens, c));
          break;
        }
        case "list": {
          const g = C;
          v = v.concat(this.walkTokens(g.items, c));
          break;
        }
        default: {
          const g = C;
          (T = (w = this.defaults.extensions) == null ? void 0 : w.childTokens) != null && T[g.type] ? this.defaults.extensions.childTokens[g.type].forEach((U) => {
            const Q = g[U].flat(1 / 0);
            v = v.concat(this.walkTokens(Q, c));
          }) : g.tokens && (v = v.concat(this.walkTokens(g.tokens, c)));
        }
      }
    return v;
  }
  use(...f) {
    const c = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return f.forEach((v) => {
      const w = { ...v };
      if (w.async = this.defaults.async || w.async || !1, v.extensions && (v.extensions.forEach((T) => {
        if (!T.name)
          throw new Error("extension name required");
        if ("renderer" in T) {
          const C = c.renderers[T.name];
          C ? c.renderers[T.name] = function(...g) {
            let U = T.renderer.apply(this, g);
            return U === !1 && (U = C.apply(this, g)), U;
          } : c.renderers[T.name] = T.renderer;
        }
        if ("tokenizer" in T) {
          if (!T.level || T.level !== "block" && T.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const C = c[T.level];
          C ? C.unshift(T.tokenizer) : c[T.level] = [T.tokenizer], T.start && (T.level === "block" ? c.startBlock ? c.startBlock.push(T.start) : c.startBlock = [T.start] : T.level === "inline" && (c.startInline ? c.startInline.push(T.start) : c.startInline = [T.start]));
        }
        "childTokens" in T && T.childTokens && (c.childTokens[T.name] = T.childTokens);
      }), w.extensions = c), v.renderer) {
        const T = this.defaults.renderer || new ky(this.defaults);
        for (const C in v.renderer) {
          if (!(C in T))
            throw new Error(`renderer '${C}' does not exist`);
          if (C === "options")
            continue;
          const g = C, U = v.renderer[g], Q = T[g];
          T[g] = (...z) => {
            let j = U.apply(T, z);
            return j === !1 && (j = Q.apply(T, z)), j || "";
          };
        }
        w.renderer = T;
      }
      if (v.tokenizer) {
        const T = this.defaults.tokenizer || new xy(this.defaults);
        for (const C in v.tokenizer) {
          if (!(C in T))
            throw new Error(`tokenizer '${C}' does not exist`);
          if (["options", "rules", "lexer"].includes(C))
            continue;
          const g = C, U = v.tokenizer[g], Q = T[g];
          T[g] = (...z) => {
            let j = U.apply(T, z);
            return j === !1 && (j = Q.apply(T, z)), j;
          };
        }
        w.tokenizer = T;
      }
      if (v.hooks) {
        const T = this.defaults.hooks || new gv();
        for (const C in v.hooks) {
          if (!(C in T))
            throw new Error(`hook '${C}' does not exist`);
          if (C === "options")
            continue;
          const g = C, U = v.hooks[g], Q = T[g];
          gv.passThroughHooks.has(C) ? T[g] = (z) => {
            if (this.defaults.async)
              return Promise.resolve(U.call(T, z)).then((Y) => Q.call(T, Y));
            const j = U.call(T, z);
            return Q.call(T, j);
          } : T[g] = (...z) => {
            let j = U.apply(T, z);
            return j === !1 && (j = Q.apply(T, z)), j;
          };
        }
        w.hooks = T;
      }
      if (v.walkTokens) {
        const T = this.defaults.walkTokens, C = v.walkTokens;
        w.walkTokens = function(g) {
          let U = [];
          return U.push(C.call(this, g)), T && (U = U.concat(T.call(this, g))), U;
        };
      }
      this.defaults = { ...this.defaults, ...w };
    }), this;
  }
  setOptions(f) {
    return this.defaults = { ...this.defaults, ...f }, this;
  }
  lexer(f, c) {
    return io.lex(f, c ?? this.defaults);
  }
  parser(f, c) {
    return lo.parse(f, c ?? this.defaults);
  }
}
Ev = new WeakSet(), xE = function(f, c) {
  return (v, w) => {
    const T = { ...w }, C = { ...this.defaults, ...T };
    this.defaults.async === !0 && T.async === !1 && (C.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), C.async = !0);
    const g = vy(this, _y, DT).call(this, !!C.silent, !!C.async);
    if (typeof v > "u" || v === null)
      return g(new Error("marked(): input parameter is undefined or null"));
    if (typeof v != "string")
      return g(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(v) + ", string expected"));
    if (C.hooks && (C.hooks.options = C), C.async)
      return Promise.resolve(C.hooks ? C.hooks.preprocess(v) : v).then((U) => f(U, C)).then((U) => C.hooks ? C.hooks.processAllTokens(U) : U).then((U) => C.walkTokens ? Promise.all(this.walkTokens(U, C.walkTokens)).then(() => U) : U).then((U) => c(U, C)).then((U) => C.hooks ? C.hooks.postprocess(U) : U).catch(g);
    try {
      C.hooks && (v = C.hooks.preprocess(v));
      let U = f(v, C);
      C.hooks && (U = C.hooks.processAllTokens(U)), C.walkTokens && this.walkTokens(U, C.walkTokens);
      let Q = c(U, C);
      return C.hooks && (Q = C.hooks.postprocess(Q)), Q;
    } catch (U) {
      return g(U);
    }
  };
}, _y = new WeakSet(), DT = function(f, c) {
  return (v) => {
    if (v.message += `
Please report this to https://github.com/markedjs/marked.`, f) {
      const w = "<p>An error occurred:</p><pre>" + mi(v.message + "", !0) + "</pre>";
      return c ? Promise.resolve(w) : w;
    }
    if (c)
      return Promise.reject(v);
    throw v;
  };
};
const bc = new YN();
function Zt(h, f) {
  return bc.parse(h, f);
}
Zt.options = Zt.setOptions = function(h) {
  return bc.setOptions(h), Zt.defaults = bc.defaults, ET(Zt.defaults), Zt;
};
Zt.getDefaults = NE;
Zt.defaults = kc;
Zt.use = function(...h) {
  return bc.use(...h), Zt.defaults = bc.defaults, ET(Zt.defaults), Zt;
};
Zt.walkTokens = function(h, f) {
  return bc.walkTokens(h, f);
};
Zt.parseInline = bc.parseInline;
Zt.Parser = lo;
Zt.parser = lo.parse;
Zt.Renderer = ky;
Zt.TextRenderer = FE;
Zt.Lexer = io;
Zt.lexer = io.lex;
Zt.Tokenizer = xy;
Zt.Hooks = gv;
Zt.parse = Zt;
Zt.options;
Zt.setOptions;
Zt.use;
Zt.walkTokens;
Zt.parseInline;
lo.parse;
io.lex;
function mv(h, f) {
  return {
    content: h,
    role: f
  };
}
function IR(h) {
  document.getElementById(`message-text-${h}`).focus();
}
function WN({ iconColor: h }) {
  return /* @__PURE__ */ St.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ St.jsx("path", { d: "m60.875 276.5 99.766 53.922 174.7-143.03-161.79 206.74v77.512l72.832-96.914 115.88 63.434v0.003906c5.7188 3.1289 12.594 3.3203 18.477 0.51563 5.8828-2.8086 10.059-8.2734 11.219-14.688l69.797-384.68-400.35 201.14c-4.4648 2.2227-7.957 6.0117-9.8047 10.645-1.8477 4.6328-1.9219 9.7852-0.21094 14.469 1.7109 4.6875 5.0859 8.5781 9.4883 10.93z", fill: h }) });
}
function QN({ iconColor: h }) {
  return /* @__PURE__ */ St.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ St.jsx("path", { d: "m227.5 256-86.512 86.516c-7.8711 7.8594-7.8711 20.637 0 28.496 7.8594 7.8672 20.633 7.8672 28.492 0l86.516-86.516 86.516 86.516c7.8594 7.8672 20.637 7.8672 28.496 0 7.8672-7.8594 7.8672-20.637 0-28.496l-86.516-86.516 86.516-86.516c7.8672-7.8594 7.8672-20.633 0-28.492-7.8594-7.8711-20.637-7.8711-28.496 0l-86.516 86.512-86.516-86.512c-7.8594-7.8711-20.633-7.8711-28.492 0-7.8711 7.8594-7.8711 20.633 0 28.492z", fill: h, fillRule: "evenodd" }) });
}
const YR = ({ iconColor: h, toggleChat: f, widgetID: c, width: v, height: w, sticky: T }) => {
  const [C, g] = Ir.useState(twChatMessages[c]), [U, Q] = Ir.useState(""), [z, j] = Ir.useState(!1), [Y, oe] = Ir.useState(0), [q, K] = Ir.useState(0), [Te, lt] = Ir.useState([]), pt = Ir.useRef(null), Pe = Ir.useRef(null), _e = window.twChatPluginSettings, mt = window.twChatWidgetSettings[c], xe = _e.tw_chat_max_characters, Ze = getComputedStyle(document.documentElement).getPropertyValue("--tw-chat-header-close-color").trim();
  Ir.useEffect(() => {
    window.twChatWidgetSettings[c].thread_id === void 0 ? mt.tw_chat_suggested_answers && lt(mt.tw_chat_suggested_answers.split(",")) : (oe(window.twChatWidgetSettings[c].thread_id), window.twChatWidgetSettings[c].suggestedAnswers && lt(window.twChatWidgetSettings[c].suggestedAnswers)), T && IR(c);
  }, []), Ir.useEffect(() => {
    pt.current && Pe.current && pt.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, [C]);
  const pn = (Je, Ve) => {
    Je && Je.preventDefault(), j(!0);
    const J = Ve || U, be = {
      widget_id: c,
      message: J
    }, D = {
      headers: {
        "X-WP-Nonce": _e.nonce
      }
    };
    Y && (be.thread_id = Y), twChatMessages[c] = [...C, mv(J, "user")], g(twChatMessages[c]), XL.post(
      `${_e.root}tw-chat-assistant/v1/chat-response/`,
      be,
      D
    ).then((te) => {
      const Ee = te.data.message;
      let He;
      if (Ee.length > 0) {
        try {
          const ot = JSON.parse(Ee);
          He = ot.message, ot.suggestedAnswers && lt(ot.suggestedAnswers), window.twChatWidgetSettings[c].suggestedAnswers = ot.suggestedAnswers;
        } catch {
          He = Ee;
        }
        const $e = He.replace(/(?:\r\n|\r|\n)/g, "<br />").replace(/【\d+†source】/g, "");
        g([...twChatMessages[c], mv($e, "assistant")]), twChatMessages[c] = [...twChatMessages[c], mv($e, "assistant")];
      }
      Q(""), K(0), j(!1), window.twChatWidgetSettings[c].thread_id = te.data.thread_id, oe(te.data.thread_id), IR(c);
    }).catch((te) => {
      console.error("Error fetching messages:", te), g([...twChatMessages[c], mv(_e.tw_chat_error_message, "error")]), j(!1);
    });
  }, vn = (Je) => {
    const Ve = Je.target.value;
    let J = Ve.length;
    xe && J > xe && (Je.target.value = Ve.slice(0, xe), J = xe), Q(Je.target.value), K(J);
  }, Wt = (Je) => {
    lt([]), pn(null, Je);
  }, Et = () => C.map((Je, Ve) => {
    const J = Ve === C.length - 1;
    return /* @__PURE__ */ St.jsx(
      "p",
      {
        ref: J ? pt : null,
        id: `tw-chat-message-${c}-${Ve}`,
        className: `message ${Je.role}`,
        children: /* @__PURE__ */ St.jsx("span", { dangerouslySetInnerHTML: { __html: Zt.parse(Je.content) } })
      },
      Ve
    );
  }), Gt = () => Te.length > 0 ? /* @__PURE__ */ St.jsx("div", { className: "tw-chat-suggested-answers", children: Te.map((Je, Ve) => /* @__PURE__ */ St.jsx("button", { onClick: () => Wt(Je), children: Je }, Ve)) }) : /* @__PURE__ */ St.jsxs(
    "form",
    {
      onSubmit: pn,
      className: z ? "tw-chat-form tw-chat-visibility-0" : "tw-chat-form",
      children: [
        /* @__PURE__ */ St.jsxs("div", { className: "tw-chat-input-container", children: [
          /* @__PURE__ */ St.jsx("label", { htmlFor: `message-text-${c}`, children: "Send Message" }),
          /* @__PURE__ */ St.jsx("input", { placeholder: "Enter your message...", id: `message-text-${c}`, type: "text", onChange: vn, value: U, name: "message", required: "required" }),
          xe && /* @__PURE__ */ St.jsx("div", { className: "tw-chat-char-count", children: /* @__PURE__ */ St.jsxs("span", { className: q == xe ? "tw-chat-max-characters" : "", children: [
            q,
            " / ",
            xe,
            " characters"
          ] }) })
        ] }),
        /* @__PURE__ */ St.jsxs("button", { children: [
          /* @__PURE__ */ St.jsx(WN, { iconColor: h }),
          /* @__PURE__ */ St.jsx("span", { className: "sr-only", children: "Send Message" })
        ] })
      ]
    }
  ), Ge = cN(
    "tw-chat-interface",
    { sticky: T },
    { embedded: !T }
  );
  let nt = {};
  return v && (nt.width = v), w && (nt.height = w), /* @__PURE__ */ St.jsxs("div", { className: Ge, style: nt, children: [
    /* @__PURE__ */ St.jsxs("div", { className: "tw-chat-header", children: [
      _e.tw_chat_logo_url && /* @__PURE__ */ St.jsx("img", { className: "logo", src: _e.tw_chat_logo_url, alt: "Chat widget logo" }),
      /* @__PURE__ */ St.jsx("span", { children: window.twChatWidgetSettings[c].tw_chat_widget_name }),
      T == 1 && /* @__PURE__ */ St.jsx(
        "button",
        {
          className: "close",
          onClick: () => f(),
          "aria-label": "Close chat interface",
          children: /* @__PURE__ */ St.jsx(QN, { iconColor: Ze })
        }
      )
    ] }),
    /* @__PURE__ */ St.jsxs("div", { ref: Pe, className: "tw-chat-messages", id: `tw-chat-messages-${c}`, children: [
      Et(),
      z && /* @__PURE__ */ St.jsx("div", { className: "waiting-indicator", children: /* @__PURE__ */ St.jsx(uN, { color: "#333" }) })
    ] }),
    Gt(),
    /* @__PURE__ */ St.jsx("div", { className: "tw-chat-disclaimer-container", children: _e.tw_chat_disclaimer && /* @__PURE__ */ St.jsx("div", { dangerouslySetInnerHTML: { __html: _e.tw_chat_disclaimer } }) })
  ] });
};
function qN({ iconColor: h }) {
  return /* @__PURE__ */ St.jsx("svg", { role: "img", className: "tw-chat-icon", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ St.jsx("path", { d: "m512 179.3c0 55.102-26.008 104.11-66.41 135.45-28.969 22.477-151 107.22-190.54 107.22l8.6211-71.371h-92.371c-94.645 0-171.3-76.695-171.3-171.3v-7.9961c0-94.625 76.656-171.3 171.3-171.3h169.41c94.594 0 171.29 76.676 171.29 171.3zm-384.48-28.574c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.609 0 28.266-12.691 28.266-28.297 0.007813-15.621-12.648-28.277-28.266-28.277zm128.48 0c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.617 0 28.277-12.691 28.277-28.297-0.011719-15.621-12.66-28.277-28.277-28.277zm128.48 0c-15.641 0-28.266 12.656-28.266 28.277 0 15.605 12.633 28.297 28.266 28.297 15.617 0 28.266-12.691 28.266-28.297-0.003907-15.621-12.648-28.277-28.266-28.277z", fill: h }) });
}
const GN = getComputedStyle(document.documentElement), hE = GN.getPropertyValue("--tw-chat-icon-color").trim();
function KN({ widgetID: h, sticky: f }) {
  const [c, v] = Ir.useState(!1), w = window.twChatPluginSettings.tw_chat_button_text || "Chat", T = window.twChatWidgetSettings[h].tw_chat_width || null, C = window.twChatWidgetSettings[h].tw_chat_height || null, g = () => {
    v(!c);
  }, U = () => /* @__PURE__ */ St.jsxs("div", { className: "tw-chat-container", children: [
    /* @__PURE__ */ St.jsx("div", { className: c ? "" : "tw-chat-visibility-0", children: /* @__PURE__ */ St.jsx(YR, { widgetID: h, iconColor: hE, toggleChat: g, sticky: f }) }),
    /* @__PURE__ */ St.jsxs("button", { className: "tw-chat-bubble", onClick: g, "aria-label": "Open chat interface", children: [
      /* @__PURE__ */ St.jsx(qN, { iconColor: hE }),
      w
    ] })
  ] });
  return /* @__PURE__ */ St.jsx(St.Fragment, { children: f ? /* @__PURE__ */ St.jsx(U, {}) : /* @__PURE__ */ St.jsx(YR, { widgetID: h, iconColor: hE, toggleChat: g, width: T, height: C, sticky: f }) });
}
window.twChatMessages = window.twChatMessages || {};
window.twChatWidgetSettings = window.twChatWidgetSettings || {};
window.twChatInitWidget = function(h, f) {
  const c = document.getElementById(`tw-chat-widget-${h}`);
  twChatWidgetSettings[h] = JSON.parse(document.getElementById(`tw-chat-widget-data-${h}`).textContent), twChatMessages[h] = [mv(twChatWidgetSettings[h].tw_chat_greeting, "assistant")], hv.createRoot(c).render(
    /* @__PURE__ */ St.jsx(TD.StrictMode, { children: /* @__PURE__ */ St.jsx(KN, { widgetID: h, sticky: f }) })
  );
};
