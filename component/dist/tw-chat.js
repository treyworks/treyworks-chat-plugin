var g_ = Object.defineProperty;
var S_ = (h, f, c) => f in h ? g_(h, f, { enumerable: !0, configurable: !0, writable: !0, value: c }) : h[f] = c;
var Tn = (h, f, c) => (S_(h, typeof f != "symbol" ? f + "" : f, c), c), E_ = (h, f, c) => {
  if (!f.has(h))
    throw TypeError("Cannot " + c);
};
var o1 = (h, f, c) => {
  if (f.has(h))
    throw TypeError("Cannot add the same private member more than once");
  f instanceof WeakSet ? f.add(h) : f.set(h, c);
};
var py = (h, f, c) => (E_(h, f, "access private method"), c);
var oo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qT(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var m1 = { exports: {} }, sv = {}, y1 = { exports: {} }, vv = { exports: {} };
vv.exports;
var ET;
function R_() {
  return ET || (ET = 1, function(h, f) {
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
      var v = "18.2.0", w = Symbol.for("react.element"), C = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), A = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), st = Symbol.iterator, vt = "@@iterator";
      function Fe(E) {
        if (E === null || typeof E != "object")
          return null;
        var O = st && E[st] || E[vt];
        return typeof O == "function" ? O : null;
      }
      var Ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, yt = {
        transition: null
      }, xe = {
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
      }, Ze = {}, pn = null;
      function vn(E) {
        pn = E;
      }
      Ze.setExtraStackFrame = function(E) {
        pn = E;
      }, Ze.getCurrentStack = null, Ze.getStackAddendum = function() {
        var E = "";
        pn && (E += pn);
        var O = Ze.getCurrentStack;
        return O && (E += O() || ""), E;
      };
      var qt = !1, Et = !1, Gt = !1, $e = !1, lt = !1, tt = {
        ReactCurrentDispatcher: Ne,
        ReactCurrentBatchConfig: yt,
        ReactCurrentOwner: gt
      };
      tt.ReactDebugCurrentFrame = Ze, tt.ReactCurrentActQueue = xe;
      function He(E) {
        {
          for (var O = arguments.length, B = new Array(O > 1 ? O - 1 : 0), G = 1; G < O; G++)
            B[G - 1] = arguments[G];
          be("warn", E, B);
        }
      }
      function Z(E) {
        {
          for (var O = arguments.length, B = new Array(O > 1 ? O - 1 : 0), G = 1; G < O; G++)
            B[G - 1] = arguments[G];
          be("error", E, B);
        }
      }
      function be(E, O, B) {
        {
          var G = tt.ReactDebugCurrentFrame, ce = G.getStackAddendum();
          ce !== "" && (O += "%s", B = B.concat([ce]));
          var Le = B.map(function(Re) {
            return String(Re);
          });
          Le.unshift("Warning: " + O), Function.prototype.apply.call(console[E], console, Le);
        }
      }
      var _ = {};
      function te(E, O) {
        {
          var B = E.constructor, G = B && (B.displayName || B.name) || "ReactClass", ce = G + "." + O;
          if (_[ce])
            return;
          Z("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", O, G), _[ce] = !0;
        }
      }
      var ge = {
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
        enqueueForceUpdate: function(E, O, B) {
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
        enqueueReplaceState: function(E, O, B, G) {
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
        enqueueSetState: function(E, O, B, G) {
          te(E, "setState");
        }
      }, Pe = Object.assign, Qe = {};
      Object.freeze(Qe);
      function ot(E, O, B) {
        this.props = E, this.context = O, this.refs = Qe, this.updater = B || ge;
      }
      ot.prototype.isReactComponent = {}, ot.prototype.setState = function(E, O) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, O, "setState");
      }, ot.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Rt = function(E, O) {
          Object.defineProperty(ot.prototype, E, {
            get: function() {
              He("%s(...) is deprecated in plain JavaScript React classes. %s", O[0], O[1]);
            }
          });
        };
        for (var mt in ht)
          ht.hasOwnProperty(mt) && Rt(mt, ht[mt]);
      }
      function on() {
      }
      on.prototype = ot.prototype;
      function ir(E, O, B) {
        this.props = E, this.context = O, this.refs = Qe, this.updater = B || ge;
      }
      var lr = ir.prototype = new on();
      lr.constructor = ir, Pe(lr, ot.prototype), lr.isPureReactComponent = !0;
      function Wr() {
        var E = {
          current: null
        };
        return Object.seal(E), E;
      }
      var Rr = Array.isArray;
      function Cn(E) {
        return Rr(E);
      }
      function or(E) {
        {
          var O = typeof Symbol == "function" && Symbol.toStringTag, B = O && E[Symbol.toStringTag] || E.constructor.name || "Object";
          return B;
        }
      }
      function Wn(E) {
        try {
          return Fn(E), !1;
        } catch {
          return !0;
        }
      }
      function Fn(E) {
        return "" + E;
      }
      function Hn(E) {
        if (Wn(E))
          return Z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(E)), Fn(E);
      }
      function Lr(E, O, B) {
        var G = E.displayName;
        if (G)
          return G;
        var ce = O.displayName || O.name || "";
        return ce !== "" ? B + "(" + ce + ")" : B;
      }
      function wr(E) {
        return E.displayName || "Context";
      }
      function qn(E) {
        if (E == null)
          return null;
        if (typeof E.tag == "number" && Z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
          return E.displayName || E.name || null;
        if (typeof E == "string")
          return E;
        switch (E) {
          case R:
            return "Fragment";
          case C:
            return "Portal";
          case U:
            return "Profiler";
          case g:
            return "StrictMode";
          case W:
            return "Suspense";
          case oe:
            return "SuspenseList";
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case A:
              var O = E;
              return wr(O) + ".Consumer";
            case q:
              var B = E;
              return wr(B._context) + ".Provider";
            case I:
              return Lr(E, E.render, "ForwardRef");
            case X:
              var G = E.displayName || null;
              return G !== null ? G : qn(E.type) || "Memo";
            case $: {
              var ce = E, Le = ce._payload, Re = ce._init;
              try {
                return qn(Re(Le));
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
      }, Tr, ma, ur;
      ur = {};
      function Nr(E) {
        if (va.call(E, "ref")) {
          var O = Object.getOwnPropertyDescriptor(E, "ref").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return E.ref !== void 0;
      }
      function hn(E) {
        if (va.call(E, "key")) {
          var O = Object.getOwnPropertyDescriptor(E, "key").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return E.key !== void 0;
      }
      function ya(E, O) {
        var B = function() {
          Tr || (Tr = !0, Z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        B.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: B,
          configurable: !0
        });
      }
      function ga(E, O) {
        var B = function() {
          ma || (ma = !0, Z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        B.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: B,
          configurable: !0
        });
      }
      function Sa(E) {
        if (typeof E.ref == "string" && gt.current && E.__self && gt.current.stateNode !== E.__self) {
          var O = qn(gt.current.type);
          ur[O] || (Z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O, E.ref), ur[O] = !0);
        }
      }
      var he = function(E, O, B, G, ce, Le, Re) {
        var Ke = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: w,
          // Built-in properties that belong on the element
          type: E,
          key: O,
          ref: B,
          props: Re,
          // Record the component responsible for creating this element.
          _owner: Le
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
          value: G
        }), Object.defineProperty(Ke, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ce
        }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
      };
      function je(E, O, B) {
        var G, ce = {}, Le = null, Re = null, Ke = null, pt = null;
        if (O != null) {
          Nr(O) && (Re = O.ref, Sa(O)), hn(O) && (Hn(O.key), Le = "" + O.key), Ke = O.__self === void 0 ? null : O.__self, pt = O.__source === void 0 ? null : O.__source;
          for (G in O)
            va.call(O, G) && !ha.hasOwnProperty(G) && (ce[G] = O[G]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          ce.children = B;
        else if (Ht > 1) {
          for (var Vt = Array(Ht), Yt = 0; Yt < Ht; Yt++)
            Vt[Yt] = arguments[Yt + 2];
          Object.freeze && Object.freeze(Vt), ce.children = Vt;
        }
        if (E && E.defaultProps) {
          var Wt = E.defaultProps;
          for (G in Wt)
            ce[G] === void 0 && (ce[G] = Wt[G]);
        }
        if (Le || Re) {
          var sn = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Le && ya(ce, sn), Re && ga(ce, sn);
        }
        return he(E, Le, Re, Ke, pt, gt.current, ce);
      }
      function ft(E, O) {
        var B = he(E.type, O, E.ref, E._self, E._source, E._owner, E.props);
        return B;
      }
      function jt(E, O, B) {
        if (E == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
        var G, ce = Pe({}, E.props), Le = E.key, Re = E.ref, Ke = E._self, pt = E._source, Ht = E._owner;
        if (O != null) {
          Nr(O) && (Re = O.ref, Ht = gt.current), hn(O) && (Hn(O.key), Le = "" + O.key);
          var Vt;
          E.type && E.type.defaultProps && (Vt = E.type.defaultProps);
          for (G in O)
            va.call(O, G) && !ha.hasOwnProperty(G) && (O[G] === void 0 && Vt !== void 0 ? ce[G] = Vt[G] : ce[G] = O[G]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          ce.children = B;
        else if (Yt > 1) {
          for (var Wt = Array(Yt), sn = 0; sn < Yt; sn++)
            Wt[sn] = arguments[sn + 2];
          ce.children = Wt;
        }
        return he(E.type, Le, Re, Ke, pt, Ht, ce);
      }
      function Nt(E) {
        return typeof E == "object" && E !== null && E.$$typeof === w;
      }
      var Ln = ".", yn = ":";
      function Cr(E) {
        var O = /[=:]/g, B = {
          "=": "=0",
          ":": "=2"
        }, G = E.replace(O, function(ce) {
          return B[ce];
        });
        return "$" + G;
      }
      var Bt = !1, Kn = /\/+/g;
      function Ft(E) {
        return E.replace(Kn, "$&/");
      }
      function Zt(E, O) {
        return typeof E == "object" && E !== null && E.key != null ? (Hn(E.key), Cr("" + E.key)) : O.toString(36);
      }
      function ri(E, O, B, G, ce) {
        var Le = typeof E;
        (Le === "undefined" || Le === "boolean") && (E = null);
        var Re = !1;
        if (E === null)
          Re = !0;
        else
          switch (Le) {
            case "string":
            case "number":
              Re = !0;
              break;
            case "object":
              switch (E.$$typeof) {
                case w:
                case C:
                  Re = !0;
              }
          }
        if (Re) {
          var Ke = E, pt = ce(Ke), Ht = G === "" ? Ln + Zt(Ke, 0) : G;
          if (Cn(pt)) {
            var Vt = "";
            Ht != null && (Vt = Ft(Ht) + "/"), ri(pt, O, Vt, "", function(dd) {
              return dd;
            });
          } else
            pt != null && (Nt(pt) && (pt.key && (!Ke || Ke.key !== pt.key) && Hn(pt.key), pt = ft(
              pt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (pt.key && (!Ke || Ke.key !== pt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ft("" + pt.key) + "/"
              ) : "") + Ht
            )), O.push(pt));
          return 1;
        }
        var Yt, Wt, sn = 0, _t = G === "" ? Ln : G + yn;
        if (Cn(E))
          for (var Ol = 0; Ol < E.length; Ol++)
            Yt = E[Ol], Wt = _t + Zt(Yt, Ol), sn += ri(Yt, O, B, Wt, ce);
        else {
          var su = Fe(E);
          if (typeof su == "function") {
            var gs = E;
            su === gs.entries && (Bt || He("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var Ss = su.call(gs), Xi, Es = 0; !(Xi = Ss.next()).done; )
              Yt = Xi.value, Wt = _t + Zt(Yt, Es++), sn += ri(Yt, O, B, Wt, ce);
          } else if (Le === "object") {
            var Rs = String(E);
            throw new Error("Objects are not valid as a React child (found: " + (Rs === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : Rs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return sn;
      }
      function Ma(E, O, B) {
        if (E == null)
          return E;
        var G = [], ce = 0;
        return ri(E, G, "", "", function(Le) {
          return O.call(B, Le, ce++);
        }), G;
      }
      function El(E) {
        var O = 0;
        return Ma(E, function() {
          O++;
        }), O;
      }
      function so(E, O, B) {
        Ma(E, function() {
          O.apply(this, arguments);
        }, B);
      }
      function co(E) {
        return Ma(E, function(O) {
          return O;
        }) || [];
      }
      function Rl(E) {
        if (!Nt(E))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return E;
      }
      function ai(E) {
        var O = {
          $$typeof: A,
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
        O.Provider = {
          $$typeof: q,
          _context: O
        };
        var B = !1, G = !1, ce = !1;
        {
          var Le = {
            $$typeof: A,
            _context: O
          };
          Object.defineProperties(Le, {
            Provider: {
              get: function() {
                return G || (G = !0, Z("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), O.Provider;
              },
              set: function(Re) {
                O.Provider = Re;
              }
            },
            _currentValue: {
              get: function() {
                return O._currentValue;
              },
              set: function(Re) {
                O._currentValue = Re;
              }
            },
            _currentValue2: {
              get: function() {
                return O._currentValue2;
              },
              set: function(Re) {
                O._currentValue2 = Re;
              }
            },
            _threadCount: {
              get: function() {
                return O._threadCount;
              },
              set: function(Re) {
                O._threadCount = Re;
              }
            },
            Consumer: {
              get: function() {
                return B || (B = !0, Z("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), O.Consumer;
              }
            },
            displayName: {
              get: function() {
                return O.displayName;
              },
              set: function(Re) {
                ce || (He("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Re), ce = !0);
              }
            }
          }), O.Consumer = Le;
        }
        return O._currentRenderer = null, O._currentRenderer2 = null, O;
      }
      var ii = -1, za = 0, Pi = 1, qr = 2;
      function Qr(E) {
        if (E._status === ii) {
          var O = E._result, B = O();
          if (B.then(function(Le) {
            if (E._status === za || E._status === ii) {
              var Re = E;
              Re._status = Pi, Re._result = Le;
            }
          }, function(Le) {
            if (E._status === za || E._status === ii) {
              var Re = E;
              Re._status = qr, Re._result = Le;
            }
          }), E._status === ii) {
            var G = E;
            G._status = za, G._result = B;
          }
        }
        if (E._status === Pi) {
          var ce = E._result;
          return ce === void 0 && Z(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ce), "default" in ce || Z(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ce), ce.default;
        } else
          throw E._result;
      }
      function Ea(E) {
        var O = {
          // We use these fields to store the result.
          _status: ii,
          _result: E
        }, B = {
          $$typeof: $,
          _payload: O,
          _init: Qr
        };
        {
          var G, ce;
          Object.defineProperties(B, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return G;
              },
              set: function(Le) {
                Z("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = Le, Object.defineProperty(B, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ce;
              },
              set: function(Le) {
                Z("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ce = Le, Object.defineProperty(B, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return B;
      }
      function Bi(E) {
        E != null && E.$$typeof === X ? Z("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof E != "function" ? Z("forwardRef requires a render function but was given %s.", E === null ? "null" : typeof E) : E.length !== 0 && E.length !== 2 && Z("forwardRef render functions accept exactly two parameters: props and ref. %s", E.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), E != null && (E.defaultProps != null || E.propTypes != null) && Z("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var O = {
          $$typeof: I,
          render: E
        };
        {
          var B;
          Object.defineProperty(O, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(G) {
              B = G, !E.name && !E.displayName && (E.displayName = G);
            }
          });
        }
        return O;
      }
      var D;
      D = Symbol.for("react.module.reference");
      function ie(E) {
        return !!(typeof E == "string" || typeof E == "function" || E === R || E === U || lt || E === g || E === W || E === oe || $e || E === Ce || qt || Et || Gt || typeof E == "object" && E !== null && (E.$$typeof === $ || E.$$typeof === X || E.$$typeof === q || E.$$typeof === A || E.$$typeof === I || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        E.$$typeof === D || E.getModuleId !== void 0));
      }
      function pe(E, O) {
        ie(E) || Z("memo: The first argument must be a component. Instead received: %s", E === null ? "null" : typeof E);
        var B = {
          $$typeof: X,
          type: E,
          compare: O === void 0 ? null : O
        };
        {
          var G;
          Object.defineProperty(B, "displayName", {
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
        return B;
      }
      function me() {
        var E = Ne.current;
        return E === null && Z(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), E;
      }
      function St(E) {
        var O = me();
        if (E._context !== void 0) {
          var B = E._context;
          B.Consumer === E ? Z("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === E && Z("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return O.useContext(E);
      }
      function xt(E) {
        var O = me();
        return O.useState(E);
      }
      function ct(E, O, B) {
        var G = me();
        return G.useReducer(E, O, B);
      }
      function Be(E) {
        var O = me();
        return O.useRef(E);
      }
      function Pn(E, O) {
        var B = me();
        return B.useEffect(E, O);
      }
      function en(E, O) {
        var B = me();
        return B.useInsertionEffect(E, O);
      }
      function tn(E, O) {
        var B = me();
        return B.useLayoutEffect(E, O);
      }
      function xr(E, O) {
        var B = me();
        return B.useCallback(E, O);
      }
      function yi(E, O) {
        var B = me();
        return B.useMemo(E, O);
      }
      function nn(E, O, B) {
        var G = me();
        return G.useImperativeHandle(E, O, B);
      }
      function Xr(E, O) {
        {
          var B = me();
          return B.useDebugValue(E, O);
        }
      }
      function os() {
        var E = me();
        return E.useTransition();
      }
      function gi(E) {
        var O = me();
        return O.useDeferredValue(E);
      }
      function dt() {
        var E = me();
        return E.useId();
      }
      function fo(E, O, B) {
        var G = me();
        return G.useSyncExternalStore(E, O, B);
      }
      var Vi = 0, wl, Gr, us, Mr, ss, cs, fs;
      function po() {
      }
      po.__reactDisabledLog = !0;
      function tu() {
        {
          if (Vi === 0) {
            wl = console.log, Gr = console.info, us = console.warn, Mr = console.error, ss = console.group, cs = console.groupCollapsed, fs = console.groupEnd;
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
          Vi++;
        }
      }
      function Yi() {
        {
          if (Vi--, Vi === 0) {
            var E = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Pe({}, E, {
                value: wl
              }),
              info: Pe({}, E, {
                value: Gr
              }),
              warn: Pe({}, E, {
                value: us
              }),
              error: Pe({}, E, {
                value: Mr
              }),
              group: Pe({}, E, {
                value: ss
              }),
              groupCollapsed: Pe({}, E, {
                value: cs
              }),
              groupEnd: Pe({}, E, {
                value: fs
              })
            });
          }
          Vi < 0 && Z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Si = tt.ReactCurrentDispatcher, Aa;
      function Tl(E, O, B) {
        {
          if (Aa === void 0)
            try {
              throw Error();
            } catch (ce) {
              var G = ce.stack.trim().match(/\n( *(at )?)/);
              Aa = G && G[1] || "";
            }
          return `
` + Aa + E;
        }
      }
      var Ei = !1, vo;
      {
        var ho = typeof WeakMap == "function" ? WeakMap : Map;
        vo = new ho();
      }
      function Cl(E, O) {
        if (!E || Ei)
          return "";
        {
          var B = vo.get(E);
          if (B !== void 0)
            return B;
        }
        var G;
        Ei = !0;
        var ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Le;
        Le = Si.current, Si.current = null, tu();
        try {
          if (O) {
            var Re = function() {
              throw Error();
            };
            if (Object.defineProperty(Re.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Re, []);
              } catch (_t) {
                G = _t;
              }
              Reflect.construct(E, [], Re);
            } else {
              try {
                Re.call();
              } catch (_t) {
                G = _t;
              }
              E.call(Re.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (_t) {
              G = _t;
            }
            E();
          }
        } catch (_t) {
          if (_t && G && typeof _t.stack == "string") {
            for (var Ke = _t.stack.split(`
`), pt = G.stack.split(`
`), Ht = Ke.length - 1, Vt = pt.length - 1; Ht >= 1 && Vt >= 0 && Ke[Ht] !== pt[Vt]; )
              Vt--;
            for (; Ht >= 1 && Vt >= 0; Ht--, Vt--)
              if (Ke[Ht] !== pt[Vt]) {
                if (Ht !== 1 || Vt !== 1)
                  do
                    if (Ht--, Vt--, Vt < 0 || Ke[Ht] !== pt[Vt]) {
                      var Yt = `
` + Ke[Ht].replace(" at new ", " at ");
                      return E.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", E.displayName)), typeof E == "function" && vo.set(E, Yt), Yt;
                    }
                  while (Ht >= 1 && Vt >= 0);
                break;
              }
          }
        } finally {
          Ei = !1, Si.current = Le, Yi(), Error.prepareStackTrace = ce;
        }
        var Wt = E ? E.displayName || E.name : "", sn = Wt ? Tl(Wt) : "";
        return typeof E == "function" && vo.set(E, sn), sn;
      }
      function ds(E, O, B) {
        return Cl(E, !1);
      }
      function ps(E) {
        var O = E.prototype;
        return !!(O && O.isReactComponent);
      }
      function Ct(E, O, B) {
        if (E == null)
          return "";
        if (typeof E == "function")
          return Cl(E, ps(E));
        if (typeof E == "string")
          return Tl(E);
        switch (E) {
          case W:
            return Tl("Suspense");
          case oe:
            return Tl("SuspenseList");
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case I:
              return ds(E.render);
            case X:
              return Ct(E.type, O, B);
            case $: {
              var G = E, ce = G._payload, Le = G._init;
              try {
                return Ct(Le(ce), O, B);
              } catch {
              }
            }
          }
        return "";
      }
      var vs = {}, nu = tt.ReactDebugCurrentFrame;
      function xl(E) {
        if (E) {
          var O = E._owner, B = Ct(E.type, E._source, O ? O.type : null);
          nu.setExtraStackFrame(B);
        } else
          nu.setExtraStackFrame(null);
      }
      function hs(E, O, B, G, ce) {
        {
          var Le = Function.call.bind(va);
          for (var Re in E)
            if (Le(E, Re)) {
              var Ke = void 0;
              try {
                if (typeof E[Re] != "function") {
                  var pt = Error((G || "React class") + ": " + B + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw pt.name = "Invariant Violation", pt;
                }
                Ke = E[Re](O, Re, G, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                Ke = Ht;
              }
              Ke && !(Ke instanceof Error) && (xl(ce), Z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", B, Re, typeof Ke), xl(null)), Ke instanceof Error && !(Ke.message in vs) && (vs[Ke.message] = !0, xl(ce), Z("Failed %s type: %s", B, Ke.message), xl(null));
            }
        }
      }
      function Dt(E) {
        if (E) {
          var O = E._owner, B = Ct(E.type, E._source, O ? O.type : null);
          vn(B);
        } else
          vn(null);
      }
      var ru;
      ru = !1;
      function mo() {
        if (gt.current) {
          var E = qn(gt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
      function nt(E) {
        if (E !== void 0) {
          var O = E.fileName.replace(/^.*[\\\/]/, ""), B = E.lineNumber;
          return `

Check your code at ` + O + ":" + B + ".";
        }
        return "";
      }
      function li(E) {
        return E != null ? nt(E.__source) : "";
      }
      var gn = {};
      function $r(E) {
        var O = mo();
        if (!O) {
          var B = typeof E == "string" ? E : E.displayName || E.name;
          B && (O = `

Check the top-level render call using <` + B + ">.");
        }
        return O;
      }
      function Ua(E, O) {
        if (!(!E._store || E._store.validated || E.key != null)) {
          E._store.validated = !0;
          var B = $r(O);
          if (!gn[B]) {
            gn[B] = !0;
            var G = "";
            E && E._owner && E._owner !== gt.current && (G = " It was passed a child from " + qn(E._owner.type) + "."), Dt(E), Z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, G), Dt(null);
          }
        }
      }
      function bl(E, O) {
        if (typeof E == "object") {
          if (Cn(E))
            for (var B = 0; B < E.length; B++) {
              var G = E[B];
              Nt(G) && Ua(G, O);
            }
          else if (Nt(E))
            E._store && (E._store.validated = !0);
          else if (E) {
            var ce = Fe(E);
            if (typeof ce == "function" && ce !== E.entries)
              for (var Le = ce.call(E), Re; !(Re = Le.next()).done; )
                Nt(Re.value) && Ua(Re.value, O);
          }
        }
      }
      function un(E) {
        {
          var O = E.type;
          if (O == null || typeof O == "string")
            return;
          var B;
          if (typeof O == "function")
            B = O.propTypes;
          else if (typeof O == "object" && (O.$$typeof === I || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          O.$$typeof === X))
            B = O.propTypes;
          else
            return;
          if (B) {
            var G = qn(O);
            hs(B, E.props, "prop", G, E);
          } else if (O.PropTypes !== void 0 && !ru) {
            ru = !0;
            var ce = qn(O);
            Z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
          }
          typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && Z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Sn(E) {
        {
          for (var O = Object.keys(E.props), B = 0; B < O.length; B++) {
            var G = O[B];
            if (G !== "children" && G !== "key") {
              Dt(E), Z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), Dt(null);
              break;
            }
          }
          E.ref !== null && (Dt(E), Z("Invalid attribute `ref` supplied to `React.Fragment`."), Dt(null));
        }
      }
      function ms(E, O, B) {
        var G = ie(E);
        if (!G) {
          var ce = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = li(O);
          Le ? ce += Le : ce += mo();
          var Re;
          E === null ? Re = "null" : Cn(E) ? Re = "array" : E !== void 0 && E.$$typeof === w ? (Re = "<" + (qn(E.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof E, Z("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, ce);
        }
        var Ke = je.apply(this, arguments);
        if (Ke == null)
          return Ke;
        if (G)
          for (var pt = 2; pt < arguments.length; pt++)
            bl(arguments[pt], E);
        return E === R ? Sn(Ke) : un(Ke), Ke;
      }
      var sr = !1;
      function Jr(E) {
        var O = ms.bind(null, E);
        return O.type = E, sr || (sr = !0, He("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(O, "type", {
          enumerable: !1,
          get: function() {
            return He("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: E
            }), E;
          }
        }), O;
      }
      function oi(E, O, B) {
        for (var G = jt.apply(this, arguments), ce = 2; ce < arguments.length; ce++)
          bl(arguments[ce], G.type);
        return un(G), G;
      }
      function au(E, O) {
        var B = yt.transition;
        yt.transition = {};
        var G = yt.transition;
        yt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          E();
        } finally {
          if (yt.transition = B, B === null && G._updatedFibers) {
            var ce = G._updatedFibers.size;
            ce > 10 && He("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), G._updatedFibers.clear();
          }
        }
      }
      var yo = !1, go = null;
      function kl(E) {
        if (go === null)
          try {
            var O = ("require" + Math.random()).slice(0, 7), B = h && h[O];
            go = B.call(h, "timers").setImmediate;
          } catch {
            go = function(ce) {
              yo === !1 && (yo = !0, typeof MessageChannel > "u" && Z("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Le = new MessageChannel();
              Le.port1.onmessage = ce, Le.port2.postMessage(void 0);
            };
          }
        return go(E);
      }
      var Ia = 0, Wi = !1;
      function iu(E) {
        {
          var O = Ia;
          Ia++, xe.current === null && (xe.current = []);
          var B = xe.isBatchingLegacy, G;
          try {
            if (xe.isBatchingLegacy = !0, G = E(), !B && xe.didScheduleLegacyUpdate) {
              var ce = xe.current;
              ce !== null && (xe.didScheduleLegacyUpdate = !1, Qi(ce));
            }
          } catch (Wt) {
            throw qi(O), Wt;
          } finally {
            xe.isBatchingLegacy = B;
          }
          if (G !== null && typeof G == "object" && typeof G.then == "function") {
            var Le = G, Re = !1, Ke = {
              then: function(Wt, sn) {
                Re = !0, Le.then(function(_t) {
                  qi(O), Ia === 0 ? lu(_t, Wt, sn) : Wt(_t);
                }, function(_t) {
                  qi(O), sn(_t);
                });
              }
            };
            return !Wi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Re || (Wi = !0, Z("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ke;
          } else {
            var pt = G;
            if (qi(O), Ia === 0) {
              var Ht = xe.current;
              Ht !== null && (Qi(Ht), xe.current = null);
              var Vt = {
                then: function(Wt, sn) {
                  xe.current === null ? (xe.current = [], lu(pt, Wt, sn)) : Wt(pt);
                }
              };
              return Vt;
            } else {
              var Yt = {
                then: function(Wt, sn) {
                  Wt(pt);
                }
              };
              return Yt;
            }
          }
        }
      }
      function qi(E) {
        E !== Ia - 1 && Z("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ia = E;
      }
      function lu(E, O, B) {
        {
          var G = xe.current;
          if (G !== null)
            try {
              Qi(G), kl(function() {
                G.length === 0 ? (xe.current = null, O(E)) : lu(E, O, B);
              });
            } catch (ce) {
              B(ce);
            }
          else
            O(E);
        }
      }
      var Ri = !1;
      function Qi(E) {
        if (!Ri) {
          Ri = !0;
          var O = 0;
          try {
            for (; O < E.length; O++) {
              var B = E[O];
              do
                B = B(!0);
              while (B !== null);
            }
            E.length = 0;
          } catch (G) {
            throw E = E.slice(O + 1), G;
          } finally {
            Ri = !1;
          }
        }
      }
      var ou = ms, ys = oi, ui = Jr, uu = {
        map: Ma,
        forEach: so,
        count: El,
        toArray: co,
        only: Rl
      };
      f.Children = uu, f.Component = ot, f.Fragment = R, f.Profiler = U, f.PureComponent = ir, f.StrictMode = g, f.Suspense = W, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tt, f.cloneElement = ys, f.createContext = ai, f.createElement = ou, f.createFactory = ui, f.createRef = Wr, f.forwardRef = Bi, f.isValidElement = Nt, f.lazy = Ea, f.memo = pe, f.startTransition = au, f.unstable_act = iu, f.useCallback = xr, f.useContext = St, f.useDebugValue = Xr, f.useDeferredValue = gi, f.useEffect = Pn, f.useId = dt, f.useImperativeHandle = nn, f.useInsertionEffect = en, f.useLayoutEffect = tn, f.useMemo = yi, f.useReducer = ct, f.useRef = Be, f.useState = xt, f.useSyncExternalStore = fo, f.useTransition = os, f.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vv, vv.exports)), vv.exports;
}
var Ot = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var RT;
function w_() {
  if (RT)
    return Ot;
  RT = 1;
  var h = Symbol.for("react.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), R = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), q = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), I = Symbol.iterator;
  function W(_) {
    return _ === null || typeof _ != "object" ? null : (_ = I && _[I] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, X = Object.assign, $ = {};
  function Ce(_, te, ge) {
    this.props = _, this.context = te, this.refs = $, this.updater = ge || oe;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(_, te) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, te, "setState");
  }, Ce.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function st() {
  }
  st.prototype = Ce.prototype;
  function vt(_, te, ge) {
    this.props = _, this.context = te, this.refs = $, this.updater = ge || oe;
  }
  var Fe = vt.prototype = new st();
  Fe.constructor = vt, X(Fe, Ce.prototype), Fe.isPureReactComponent = !0;
  var Ne = Array.isArray, yt = Object.prototype.hasOwnProperty, xe = { current: null }, gt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ze(_, te, ge) {
    var Pe, Qe = {}, ot = null, ht = null;
    if (te != null)
      for (Pe in te.ref !== void 0 && (ht = te.ref), te.key !== void 0 && (ot = "" + te.key), te)
        yt.call(te, Pe) && !gt.hasOwnProperty(Pe) && (Qe[Pe] = te[Pe]);
    var Rt = arguments.length - 2;
    if (Rt === 1)
      Qe.children = ge;
    else if (1 < Rt) {
      for (var mt = Array(Rt), on = 0; on < Rt; on++)
        mt[on] = arguments[on + 2];
      Qe.children = mt;
    }
    if (_ && _.defaultProps)
      for (Pe in Rt = _.defaultProps, Rt)
        Qe[Pe] === void 0 && (Qe[Pe] = Rt[Pe]);
    return { $$typeof: h, type: _, key: ot, ref: ht, props: Qe, _owner: xe.current };
  }
  function pn(_, te) {
    return { $$typeof: h, type: _.type, key: te, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function vn(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === h;
  }
  function qt(_) {
    var te = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(ge) {
      return te[ge];
    });
  }
  var Et = /\/+/g;
  function Gt(_, te) {
    return typeof _ == "object" && _ !== null && _.key != null ? qt("" + _.key) : te.toString(36);
  }
  function $e(_, te, ge, Pe, Qe) {
    var ot = typeof _;
    (ot === "undefined" || ot === "boolean") && (_ = null);
    var ht = !1;
    if (_ === null)
      ht = !0;
    else
      switch (ot) {
        case "string":
        case "number":
          ht = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case h:
            case f:
              ht = !0;
          }
      }
    if (ht)
      return ht = _, Qe = Qe(ht), _ = Pe === "" ? "." + Gt(ht, 0) : Pe, Ne(Qe) ? (ge = "", _ != null && (ge = _.replace(Et, "$&/") + "/"), $e(Qe, te, ge, "", function(on) {
        return on;
      })) : Qe != null && (vn(Qe) && (Qe = pn(Qe, ge + (!Qe.key || ht && ht.key === Qe.key ? "" : ("" + Qe.key).replace(Et, "$&/") + "/") + _)), te.push(Qe)), 1;
    if (ht = 0, Pe = Pe === "" ? "." : Pe + ":", Ne(_))
      for (var Rt = 0; Rt < _.length; Rt++) {
        ot = _[Rt];
        var mt = Pe + Gt(ot, Rt);
        ht += $e(ot, te, ge, mt, Qe);
      }
    else if (mt = W(_), typeof mt == "function")
      for (_ = mt.call(_), Rt = 0; !(ot = _.next()).done; )
        ot = ot.value, mt = Pe + Gt(ot, Rt++), ht += $e(ot, te, ge, mt, Qe);
    else if (ot === "object")
      throw te = String(_), Error("Objects are not valid as a React child (found: " + (te === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : te) + "). If you meant to render a collection of children, use an array instead.");
    return ht;
  }
  function lt(_, te, ge) {
    if (_ == null)
      return _;
    var Pe = [], Qe = 0;
    return $e(_, Pe, "", "", function(ot) {
      return te.call(ge, ot, Qe++);
    }), Pe;
  }
  function tt(_) {
    if (_._status === -1) {
      var te = _._result;
      te = te(), te.then(function(ge) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = ge);
      }, function(ge) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = ge);
      }), _._status === -1 && (_._status = 0, _._result = te);
    }
    if (_._status === 1)
      return _._result.default;
    throw _._result;
  }
  var He = { current: null }, Z = { transition: null }, be = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: Z, ReactCurrentOwner: xe };
  return Ot.Children = { map: lt, forEach: function(_, te, ge) {
    lt(_, function() {
      te.apply(this, arguments);
    }, ge);
  }, count: function(_) {
    var te = 0;
    return lt(_, function() {
      te++;
    }), te;
  }, toArray: function(_) {
    return lt(_, function(te) {
      return te;
    }) || [];
  }, only: function(_) {
    if (!vn(_))
      throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Ot.Component = Ce, Ot.Fragment = c, Ot.Profiler = w, Ot.PureComponent = vt, Ot.StrictMode = v, Ot.Suspense = U, Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, Ot.cloneElement = function(_, te, ge) {
    if (_ == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Pe = X({}, _.props), Qe = _.key, ot = _.ref, ht = _._owner;
    if (te != null) {
      if (te.ref !== void 0 && (ot = te.ref, ht = xe.current), te.key !== void 0 && (Qe = "" + te.key), _.type && _.type.defaultProps)
        var Rt = _.type.defaultProps;
      for (mt in te)
        yt.call(te, mt) && !gt.hasOwnProperty(mt) && (Pe[mt] = te[mt] === void 0 && Rt !== void 0 ? Rt[mt] : te[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1)
      Pe.children = ge;
    else if (1 < mt) {
      Rt = Array(mt);
      for (var on = 0; on < mt; on++)
        Rt[on] = arguments[on + 2];
      Pe.children = Rt;
    }
    return { $$typeof: h, type: _.type, key: Qe, ref: ot, props: Pe, _owner: ht };
  }, Ot.createContext = function(_) {
    return _ = { $$typeof: R, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: C, _context: _ }, _.Consumer = _;
  }, Ot.createElement = Ze, Ot.createFactory = function(_) {
    var te = Ze.bind(null, _);
    return te.type = _, te;
  }, Ot.createRef = function() {
    return { current: null };
  }, Ot.forwardRef = function(_) {
    return { $$typeof: g, render: _ };
  }, Ot.isValidElement = vn, Ot.lazy = function(_) {
    return { $$typeof: A, _payload: { _status: -1, _result: _ }, _init: tt };
  }, Ot.memo = function(_, te) {
    return { $$typeof: q, type: _, compare: te === void 0 ? null : te };
  }, Ot.startTransition = function(_) {
    var te = Z.transition;
    Z.transition = {};
    try {
      _();
    } finally {
      Z.transition = te;
    }
  }, Ot.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ot.useCallback = function(_, te) {
    return He.current.useCallback(_, te);
  }, Ot.useContext = function(_) {
    return He.current.useContext(_);
  }, Ot.useDebugValue = function() {
  }, Ot.useDeferredValue = function(_) {
    return He.current.useDeferredValue(_);
  }, Ot.useEffect = function(_, te) {
    return He.current.useEffect(_, te);
  }, Ot.useId = function() {
    return He.current.useId();
  }, Ot.useImperativeHandle = function(_, te, ge) {
    return He.current.useImperativeHandle(_, te, ge);
  }, Ot.useInsertionEffect = function(_, te) {
    return He.current.useInsertionEffect(_, te);
  }, Ot.useLayoutEffect = function(_, te) {
    return He.current.useLayoutEffect(_, te);
  }, Ot.useMemo = function(_, te) {
    return He.current.useMemo(_, te);
  }, Ot.useReducer = function(_, te, ge) {
    return He.current.useReducer(_, te, ge);
  }, Ot.useRef = function(_) {
    return He.current.useRef(_);
  }, Ot.useState = function(_) {
    return He.current.useState(_);
  }, Ot.useSyncExternalStore = function(_, te, ge) {
    return He.current.useSyncExternalStore(_, te, ge);
  }, Ot.useTransition = function() {
    return He.current.useTransition();
  }, Ot.version = "18.2.0", Ot;
}
var T_ = {};
T_.NODE_ENV === "production" ? y1.exports = w_() : y1.exports = R_();
var _r = y1.exports;
const C_ = /* @__PURE__ */ qT(_r);
var wT;
function x_() {
  if (wT)
    return sv;
  wT = 1;
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
    var f = _r, c = Symbol.for("react.element"), v = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), U = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), $ = Symbol.iterator, Ce = "@@iterator";
    function st(D) {
      if (D === null || typeof D != "object")
        return null;
      var ie = $ && D[$] || D[Ce];
      return typeof ie == "function" ? ie : null;
    }
    var vt = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Fe(D) {
      {
        for (var ie = arguments.length, pe = new Array(ie > 1 ? ie - 1 : 0), me = 1; me < ie; me++)
          pe[me - 1] = arguments[me];
        Ne("error", D, pe);
      }
    }
    function Ne(D, ie, pe) {
      {
        var me = vt.ReactDebugCurrentFrame, St = me.getStackAddendum();
        St !== "" && (ie += "%s", pe = pe.concat([St]));
        var xt = pe.map(function(ct) {
          return String(ct);
        });
        xt.unshift("Warning: " + ie), Function.prototype.apply.call(console[D], console, xt);
      }
    }
    var yt = !1, xe = !1, gt = !1, Ze = !1, pn = !1, vn;
    vn = Symbol.for("react.module.reference");
    function qt(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === w || D === R || pn || D === C || D === A || D === I || Ze || D === X || yt || xe || gt || typeof D == "object" && D !== null && (D.$$typeof === oe || D.$$typeof === W || D.$$typeof === g || D.$$typeof === U || D.$$typeof === q || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === vn || D.getModuleId !== void 0));
    }
    function Et(D, ie, pe) {
      var me = D.displayName;
      if (me)
        return me;
      var St = ie.displayName || ie.name || "";
      return St !== "" ? pe + "(" + St + ")" : pe;
    }
    function Gt(D) {
      return D.displayName || "Context";
    }
    function $e(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && Fe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case w:
          return "Fragment";
        case v:
          return "Portal";
        case R:
          return "Profiler";
        case C:
          return "StrictMode";
        case A:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case U:
            var ie = D;
            return Gt(ie) + ".Consumer";
          case g:
            var pe = D;
            return Gt(pe._context) + ".Provider";
          case q:
            return Et(D, D.render, "ForwardRef");
          case W:
            var me = D.displayName || null;
            return me !== null ? me : $e(D.type) || "Memo";
          case oe: {
            var St = D, xt = St._payload, ct = St._init;
            try {
              return $e(ct(xt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var lt = Object.assign, tt = 0, He, Z, be, _, te, ge, Pe;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function ot() {
      {
        if (tt === 0) {
          He = console.log, Z = console.info, be = console.warn, _ = console.error, te = console.group, ge = console.groupCollapsed, Pe = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
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
        tt++;
      }
    }
    function ht() {
      {
        if (tt--, tt === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, D, {
              value: He
            }),
            info: lt({}, D, {
              value: Z
            }),
            warn: lt({}, D, {
              value: be
            }),
            error: lt({}, D, {
              value: _
            }),
            group: lt({}, D, {
              value: te
            }),
            groupCollapsed: lt({}, D, {
              value: ge
            }),
            groupEnd: lt({}, D, {
              value: Pe
            })
          });
        }
        tt < 0 && Fe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Rt = vt.ReactCurrentDispatcher, mt;
    function on(D, ie, pe) {
      {
        if (mt === void 0)
          try {
            throw Error();
          } catch (St) {
            var me = St.stack.trim().match(/\n( *(at )?)/);
            mt = me && me[1] || "";
          }
        return `
` + mt + D;
      }
    }
    var ir = !1, lr;
    {
      var Wr = typeof WeakMap == "function" ? WeakMap : Map;
      lr = new Wr();
    }
    function Rr(D, ie) {
      if (!D || ir)
        return "";
      {
        var pe = lr.get(D);
        if (pe !== void 0)
          return pe;
      }
      var me;
      ir = !0;
      var St = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xt;
      xt = Rt.current, Rt.current = null, ot();
      try {
        if (ie) {
          var ct = function() {
            throw Error();
          };
          if (Object.defineProperty(ct.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ct, []);
            } catch (Xr) {
              me = Xr;
            }
            Reflect.construct(D, [], ct);
          } else {
            try {
              ct.call();
            } catch (Xr) {
              me = Xr;
            }
            D.call(ct.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xr) {
            me = Xr;
          }
          D();
        }
      } catch (Xr) {
        if (Xr && me && typeof Xr.stack == "string") {
          for (var Be = Xr.stack.split(`
`), Pn = me.stack.split(`
`), en = Be.length - 1, tn = Pn.length - 1; en >= 1 && tn >= 0 && Be[en] !== Pn[tn]; )
            tn--;
          for (; en >= 1 && tn >= 0; en--, tn--)
            if (Be[en] !== Pn[tn]) {
              if (en !== 1 || tn !== 1)
                do
                  if (en--, tn--, tn < 0 || Be[en] !== Pn[tn]) {
                    var xr = `
` + Be[en].replace(" at new ", " at ");
                    return D.displayName && xr.includes("<anonymous>") && (xr = xr.replace("<anonymous>", D.displayName)), typeof D == "function" && lr.set(D, xr), xr;
                  }
                while (en >= 1 && tn >= 0);
              break;
            }
        }
      } finally {
        ir = !1, Rt.current = xt, ht(), Error.prepareStackTrace = St;
      }
      var yi = D ? D.displayName || D.name : "", nn = yi ? on(yi) : "";
      return typeof D == "function" && lr.set(D, nn), nn;
    }
    function Cn(D, ie, pe) {
      return Rr(D, !1);
    }
    function or(D) {
      var ie = D.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function Wn(D, ie, pe) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return Rr(D, or(D));
      if (typeof D == "string")
        return on(D);
      switch (D) {
        case A:
          return on("Suspense");
        case I:
          return on("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case q:
            return Cn(D.render);
          case W:
            return Wn(D.type, ie, pe);
          case oe: {
            var me = D, St = me._payload, xt = me._init;
            try {
              return Wn(xt(St), ie, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var Fn = Object.prototype.hasOwnProperty, Hn = {}, Lr = vt.ReactDebugCurrentFrame;
    function wr(D) {
      if (D) {
        var ie = D._owner, pe = Wn(D.type, D._source, ie ? ie.type : null);
        Lr.setExtraStackFrame(pe);
      } else
        Lr.setExtraStackFrame(null);
    }
    function qn(D, ie, pe, me, St) {
      {
        var xt = Function.call.bind(Fn);
        for (var ct in D)
          if (xt(D, ct)) {
            var Be = void 0;
            try {
              if (typeof D[ct] != "function") {
                var Pn = Error((me || "React class") + ": " + pe + " type `" + ct + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[ct] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pn.name = "Invariant Violation", Pn;
              }
              Be = D[ct](ie, ct, me, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              Be = en;
            }
            Be && !(Be instanceof Error) && (wr(St), Fe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", pe, ct, typeof Be), wr(null)), Be instanceof Error && !(Be.message in Hn) && (Hn[Be.message] = !0, wr(St), Fe("Failed %s type: %s", pe, Be.message), wr(null));
          }
      }
    }
    var va = Array.isArray;
    function ha(D) {
      return va(D);
    }
    function Tr(D) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, pe = ie && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return pe;
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
    function Nr(D) {
      if (ma(D))
        return Fe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(D)), ur(D);
    }
    var hn = vt.ReactCurrentOwner, ya = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ga, Sa, he;
    he = {};
    function je(D) {
      if (Fn.call(D, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function ft(D) {
      if (Fn.call(D, "key")) {
        var ie = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function jt(D, ie) {
      if (typeof D.ref == "string" && hn.current && ie && hn.current.stateNode !== ie) {
        var pe = $e(hn.current.type);
        he[pe] || (Fe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $e(hn.current.type), D.ref), he[pe] = !0);
      }
    }
    function Nt(D, ie) {
      {
        var pe = function() {
          ga || (ga = !0, Fe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        pe.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function Ln(D, ie) {
      {
        var pe = function() {
          Sa || (Sa = !0, Fe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        pe.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var yn = function(D, ie, pe, me, St, xt, ct) {
      var Be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: D,
        key: ie,
        ref: pe,
        props: ct,
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
        value: St
      }), Object.freeze && (Object.freeze(Be.props), Object.freeze(Be)), Be;
    };
    function Cr(D, ie, pe, me, St) {
      {
        var xt, ct = {}, Be = null, Pn = null;
        pe !== void 0 && (Nr(pe), Be = "" + pe), ft(ie) && (Nr(ie.key), Be = "" + ie.key), je(ie) && (Pn = ie.ref, jt(ie, St));
        for (xt in ie)
          Fn.call(ie, xt) && !ya.hasOwnProperty(xt) && (ct[xt] = ie[xt]);
        if (D && D.defaultProps) {
          var en = D.defaultProps;
          for (xt in en)
            ct[xt] === void 0 && (ct[xt] = en[xt]);
        }
        if (Be || Pn) {
          var tn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Be && Nt(ct, tn), Pn && Ln(ct, tn);
        }
        return yn(D, Be, Pn, St, me, hn.current, ct);
      }
    }
    var Bt = vt.ReactCurrentOwner, Kn = vt.ReactDebugCurrentFrame;
    function Ft(D) {
      if (D) {
        var ie = D._owner, pe = Wn(D.type, D._source, ie ? ie.type : null);
        Kn.setExtraStackFrame(pe);
      } else
        Kn.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function ri(D) {
      return typeof D == "object" && D !== null && D.$$typeof === c;
    }
    function Ma() {
      {
        if (Bt.current) {
          var D = $e(Bt.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function El(D) {
      {
        if (D !== void 0) {
          var ie = D.fileName.replace(/^.*[\\\/]/, ""), pe = D.lineNumber;
          return `

Check your code at ` + ie + ":" + pe + ".";
        }
        return "";
      }
    }
    var so = {};
    function co(D) {
      {
        var ie = Ma();
        if (!ie) {
          var pe = typeof D == "string" ? D : D.displayName || D.name;
          pe && (ie = `

Check the top-level render call using <` + pe + ">.");
        }
        return ie;
      }
    }
    function Rl(D, ie) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var pe = co(ie);
        if (so[pe])
          return;
        so[pe] = !0;
        var me = "";
        D && D._owner && D._owner !== Bt.current && (me = " It was passed a child from " + $e(D._owner.type) + "."), Ft(D), Fe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, me), Ft(null);
      }
    }
    function ai(D, ie) {
      {
        if (typeof D != "object")
          return;
        if (ha(D))
          for (var pe = 0; pe < D.length; pe++) {
            var me = D[pe];
            ri(me) && Rl(me, ie);
          }
        else if (ri(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var St = st(D);
          if (typeof St == "function" && St !== D.entries)
            for (var xt = St.call(D), ct; !(ct = xt.next()).done; )
              ri(ct.value) && Rl(ct.value, ie);
        }
      }
    }
    function ii(D) {
      {
        var ie = D.type;
        if (ie == null || typeof ie == "string")
          return;
        var pe;
        if (typeof ie == "function")
          pe = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === q || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === W))
          pe = ie.propTypes;
        else
          return;
        if (pe) {
          var me = $e(ie);
          qn(pe, D.props, "prop", me, D);
        } else if (ie.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var St = $e(ie);
          Fe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", St || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && Fe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function za(D) {
      {
        for (var ie = Object.keys(D.props), pe = 0; pe < ie.length; pe++) {
          var me = ie[pe];
          if (me !== "children" && me !== "key") {
            Ft(D), Fe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), Ft(null);
            break;
          }
        }
        D.ref !== null && (Ft(D), Fe("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
      }
    }
    function Pi(D, ie, pe, me, St, xt) {
      {
        var ct = qt(D);
        if (!ct) {
          var Be = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pn = El(St);
          Pn ? Be += Pn : Be += Ma();
          var en;
          D === null ? en = "null" : ha(D) ? en = "array" : D !== void 0 && D.$$typeof === c ? (en = "<" + ($e(D.type) || "Unknown") + " />", Be = " Did you accidentally export a JSX literal instead of a component?") : en = typeof D, Fe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, Be);
        }
        var tn = Cr(D, ie, pe, St, xt);
        if (tn == null)
          return tn;
        if (ct) {
          var xr = ie.children;
          if (xr !== void 0)
            if (me)
              if (ha(xr)) {
                for (var yi = 0; yi < xr.length; yi++)
                  ai(xr[yi], D);
                Object.freeze && Object.freeze(xr);
              } else
                Fe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ai(xr, D);
        }
        return D === w ? za(tn) : ii(tn), tn;
      }
    }
    function qr(D, ie, pe) {
      return Pi(D, ie, pe, !0);
    }
    function Qr(D, ie, pe) {
      return Pi(D, ie, pe, !1);
    }
    var Ea = Qr, Bi = qr;
    sv.Fragment = w, sv.jsx = Ea, sv.jsxs = Bi;
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
var TT;
function b_() {
  if (TT)
    return cv;
  TT = 1;
  var h = _r, f = Symbol.for("react.element"), c = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, w = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(g, U, q) {
    var A, I = {}, W = null, oe = null;
    q !== void 0 && (W = "" + q), U.key !== void 0 && (W = "" + U.key), U.ref !== void 0 && (oe = U.ref);
    for (A in U)
      v.call(U, A) && !C.hasOwnProperty(A) && (I[A] = U[A]);
    if (g && g.defaultProps)
      for (A in U = g.defaultProps, U)
        I[A] === void 0 && (I[A] = U[A]);
    return { $$typeof: f, type: g, key: W, ref: oe, props: I, _owner: w.current };
  }
  return cv.Fragment = c, cv.jsx = R, cv.jsxs = R, cv;
}
var k_ = {};
k_.NODE_ENV === "production" ? m1.exports = b_() : m1.exports = x_();
var qe = m1.exports, hv = {}, g1 = { exports: {} }, ti = {}, vy = { exports: {} }, u1 = {}, CT;
function O_() {
  return CT || (CT = 1, function(h) {
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
      function C(he, je) {
        var ft = he.length;
        he.push(je), U(he, je, ft);
      }
      function R(he) {
        return he.length === 0 ? null : he[0];
      }
      function g(he) {
        if (he.length === 0)
          return null;
        var je = he[0], ft = he.pop();
        return ft !== je && (he[0] = ft, q(he, ft, 0)), je;
      }
      function U(he, je, ft) {
        for (var jt = ft; jt > 0; ) {
          var Nt = jt - 1 >>> 1, Ln = he[Nt];
          if (A(Ln, je) > 0)
            he[Nt] = je, he[jt] = Ln, jt = Nt;
          else
            return;
        }
      }
      function q(he, je, ft) {
        for (var jt = ft, Nt = he.length, Ln = Nt >>> 1; jt < Ln; ) {
          var yn = (jt + 1) * 2 - 1, Cr = he[yn], Bt = yn + 1, Kn = he[Bt];
          if (A(Cr, je) < 0)
            Bt < Nt && A(Kn, Cr) < 0 ? (he[jt] = Kn, he[Bt] = je, jt = Bt) : (he[jt] = Cr, he[yn] = je, jt = yn);
          else if (Bt < Nt && A(Kn, je) < 0)
            he[jt] = Kn, he[Bt] = je, jt = Bt;
          else
            return;
        }
      }
      function A(he, je) {
        var ft = he.sortIndex - je.sortIndex;
        return ft !== 0 ? ft : he.id - je.id;
      }
      var I = 1, W = 2, oe = 3, X = 4, $ = 5;
      function Ce(he, je) {
      }
      var st = typeof performance == "object" && typeof performance.now == "function";
      if (st) {
        var vt = performance;
        h.unstable_now = function() {
          return vt.now();
        };
      } else {
        var Fe = Date, Ne = Fe.now();
        h.unstable_now = function() {
          return Fe.now() - Ne;
        };
      }
      var yt = 1073741823, xe = -1, gt = 250, Ze = 5e3, pn = 1e4, vn = yt, qt = [], Et = [], Gt = 1, $e = null, lt = oe, tt = !1, He = !1, Z = !1, be = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ge(he) {
        for (var je = R(Et); je !== null; ) {
          if (je.callback === null)
            g(Et);
          else if (je.startTime <= he)
            g(Et), je.sortIndex = je.expirationTime, C(qt, je);
          else
            return;
          je = R(Et);
        }
      }
      function Pe(he) {
        if (Z = !1, ge(he), !He)
          if (R(qt) !== null)
            He = !0, Nr(Qe);
          else {
            var je = R(Et);
            je !== null && hn(Pe, je.startTime - he);
          }
      }
      function Qe(he, je) {
        He = !1, Z && (Z = !1, ya()), tt = !0;
        var ft = lt;
        try {
          var jt;
          if (!v)
            return ot(he, je);
        } finally {
          $e = null, lt = ft, tt = !1;
        }
      }
      function ot(he, je) {
        var ft = je;
        for (ge(ft), $e = R(qt); $e !== null && !c && !($e.expirationTime > ft && (!he || wr())); ) {
          var jt = $e.callback;
          if (typeof jt == "function") {
            $e.callback = null, lt = $e.priorityLevel;
            var Nt = $e.expirationTime <= ft, Ln = jt(Nt);
            ft = h.unstable_now(), typeof Ln == "function" ? $e.callback = Ln : $e === R(qt) && g(qt), ge(ft);
          } else
            g(qt);
          $e = R(qt);
        }
        if ($e !== null)
          return !0;
        var yn = R(Et);
        return yn !== null && hn(Pe, yn.startTime - ft), !1;
      }
      function ht(he, je) {
        switch (he) {
          case I:
          case W:
          case oe:
          case X:
          case $:
            break;
          default:
            he = oe;
        }
        var ft = lt;
        lt = he;
        try {
          return je();
        } finally {
          lt = ft;
        }
      }
      function Rt(he) {
        var je;
        switch (lt) {
          case I:
          case W:
          case oe:
            je = oe;
            break;
          default:
            je = lt;
            break;
        }
        var ft = lt;
        lt = je;
        try {
          return he();
        } finally {
          lt = ft;
        }
      }
      function mt(he) {
        var je = lt;
        return function() {
          var ft = lt;
          lt = je;
          try {
            return he.apply(this, arguments);
          } finally {
            lt = ft;
          }
        };
      }
      function on(he, je, ft) {
        var jt = h.unstable_now(), Nt;
        if (typeof ft == "object" && ft !== null) {
          var Ln = ft.delay;
          typeof Ln == "number" && Ln > 0 ? Nt = jt + Ln : Nt = jt;
        } else
          Nt = jt;
        var yn;
        switch (he) {
          case I:
            yn = xe;
            break;
          case W:
            yn = gt;
            break;
          case $:
            yn = vn;
            break;
          case X:
            yn = pn;
            break;
          case oe:
          default:
            yn = Ze;
            break;
        }
        var Cr = Nt + yn, Bt = {
          id: Gt++,
          callback: je,
          priorityLevel: he,
          startTime: Nt,
          expirationTime: Cr,
          sortIndex: -1
        };
        return Nt > jt ? (Bt.sortIndex = Nt, C(Et, Bt), R(qt) === null && Bt === R(Et) && (Z ? ya() : Z = !0, hn(Pe, Nt - jt))) : (Bt.sortIndex = Cr, C(qt, Bt), !He && !tt && (He = !0, Nr(Qe))), Bt;
      }
      function ir() {
      }
      function lr() {
        !He && !tt && (He = !0, Nr(Qe));
      }
      function Wr() {
        return R(qt);
      }
      function Rr(he) {
        he.callback = null;
      }
      function Cn() {
        return lt;
      }
      var or = !1, Wn = null, Fn = -1, Hn = w, Lr = -1;
      function wr() {
        var he = h.unstable_now() - Lr;
        return !(he < Hn);
      }
      function qn() {
      }
      function va(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? Hn = Math.floor(1e3 / he) : Hn = w;
      }
      var ha = function() {
        if (Wn !== null) {
          var he = h.unstable_now();
          Lr = he;
          var je = !0, ft = !0;
          try {
            ft = Wn(je, he);
          } finally {
            ft ? Tr() : (or = !1, Wn = null);
          }
        } else
          or = !1;
      }, Tr;
      if (typeof te == "function")
        Tr = function() {
          te(ha);
        };
      else if (typeof MessageChannel < "u") {
        var ma = new MessageChannel(), ur = ma.port2;
        ma.port1.onmessage = ha, Tr = function() {
          ur.postMessage(null);
        };
      } else
        Tr = function() {
          be(ha, 0);
        };
      function Nr(he) {
        Wn = he, or || (or = !0, Tr());
      }
      function hn(he, je) {
        Fn = be(function() {
          he(h.unstable_now());
        }, je);
      }
      function ya() {
        _(Fn), Fn = -1;
      }
      var ga = qn, Sa = null;
      h.unstable_IdlePriority = $, h.unstable_ImmediatePriority = I, h.unstable_LowPriority = X, h.unstable_NormalPriority = oe, h.unstable_Profiling = Sa, h.unstable_UserBlockingPriority = W, h.unstable_cancelCallback = Rr, h.unstable_continueExecution = lr, h.unstable_forceFrameRate = va, h.unstable_getCurrentPriorityLevel = Cn, h.unstable_getFirstCallbackNode = Wr, h.unstable_next = Rt, h.unstable_pauseExecution = ir, h.unstable_requestPaint = ga, h.unstable_runWithPriority = ht, h.unstable_scheduleCallback = on, h.unstable_shouldYield = wr, h.unstable_wrapCallback = mt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(u1)), u1;
}
var s1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xT;
function D_() {
  return xT || (xT = 1, function(h) {
    function f(Z, be) {
      var _ = Z.length;
      Z.push(be);
      e:
        for (; 0 < _; ) {
          var te = _ - 1 >>> 1, ge = Z[te];
          if (0 < w(ge, be))
            Z[te] = be, Z[_] = ge, _ = te;
          else
            break e;
        }
    }
    function c(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function v(Z) {
      if (Z.length === 0)
        return null;
      var be = Z[0], _ = Z.pop();
      if (_ !== be) {
        Z[0] = _;
        e:
          for (var te = 0, ge = Z.length, Pe = ge >>> 1; te < Pe; ) {
            var Qe = 2 * (te + 1) - 1, ot = Z[Qe], ht = Qe + 1, Rt = Z[ht];
            if (0 > w(ot, _))
              ht < ge && 0 > w(Rt, ot) ? (Z[te] = Rt, Z[ht] = _, te = ht) : (Z[te] = ot, Z[Qe] = _, te = Qe);
            else if (ht < ge && 0 > w(Rt, _))
              Z[te] = Rt, Z[ht] = _, te = ht;
            else
              break e;
          }
      }
      return be;
    }
    function w(Z, be) {
      var _ = Z.sortIndex - be.sortIndex;
      return _ !== 0 ? _ : Z.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      h.unstable_now = function() {
        return C.now();
      };
    } else {
      var R = Date, g = R.now();
      h.unstable_now = function() {
        return R.now() - g;
      };
    }
    var U = [], q = [], A = 1, I = null, W = 3, oe = !1, X = !1, $ = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, st = typeof clearTimeout == "function" ? clearTimeout : null, vt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Fe(Z) {
      for (var be = c(q); be !== null; ) {
        if (be.callback === null)
          v(q);
        else if (be.startTime <= Z)
          v(q), be.sortIndex = be.expirationTime, f(U, be);
        else
          break;
        be = c(q);
      }
    }
    function Ne(Z) {
      if ($ = !1, Fe(Z), !X)
        if (c(U) !== null)
          X = !0, tt(yt);
        else {
          var be = c(q);
          be !== null && He(Ne, be.startTime - Z);
        }
    }
    function yt(Z, be) {
      X = !1, $ && ($ = !1, st(Ze), Ze = -1), oe = !0;
      var _ = W;
      try {
        for (Fe(be), I = c(U); I !== null && (!(I.expirationTime > be) || Z && !qt()); ) {
          var te = I.callback;
          if (typeof te == "function") {
            I.callback = null, W = I.priorityLevel;
            var ge = te(I.expirationTime <= be);
            be = h.unstable_now(), typeof ge == "function" ? I.callback = ge : I === c(U) && v(U), Fe(be);
          } else
            v(U);
          I = c(U);
        }
        if (I !== null)
          var Pe = !0;
        else {
          var Qe = c(q);
          Qe !== null && He(Ne, Qe.startTime - be), Pe = !1;
        }
        return Pe;
      } finally {
        I = null, W = _, oe = !1;
      }
    }
    var xe = !1, gt = null, Ze = -1, pn = 5, vn = -1;
    function qt() {
      return !(h.unstable_now() - vn < pn);
    }
    function Et() {
      if (gt !== null) {
        var Z = h.unstable_now();
        vn = Z;
        var be = !0;
        try {
          be = gt(!0, Z);
        } finally {
          be ? Gt() : (xe = !1, gt = null);
        }
      } else
        xe = !1;
    }
    var Gt;
    if (typeof vt == "function")
      Gt = function() {
        vt(Et);
      };
    else if (typeof MessageChannel < "u") {
      var $e = new MessageChannel(), lt = $e.port2;
      $e.port1.onmessage = Et, Gt = function() {
        lt.postMessage(null);
      };
    } else
      Gt = function() {
        Ce(Et, 0);
      };
    function tt(Z) {
      gt = Z, xe || (xe = !0, Gt());
    }
    function He(Z, be) {
      Ze = Ce(function() {
        Z(h.unstable_now());
      }, be);
    }
    h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, h.unstable_continueExecution = function() {
      X || oe || (X = !0, tt(yt));
    }, h.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pn = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, h.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, h.unstable_getFirstCallbackNode = function() {
      return c(U);
    }, h.unstable_next = function(Z) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = W;
      }
      var _ = W;
      W = be;
      try {
        return Z();
      } finally {
        W = _;
      }
    }, h.unstable_pauseExecution = function() {
    }, h.unstable_requestPaint = function() {
    }, h.unstable_runWithPriority = function(Z, be) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var _ = W;
      W = Z;
      try {
        return be();
      } finally {
        W = _;
      }
    }, h.unstable_scheduleCallback = function(Z, be, _) {
      var te = h.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? te + _ : te) : _ = te, Z) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return ge = _ + ge, Z = { id: A++, callback: be, priorityLevel: Z, startTime: _, expirationTime: ge, sortIndex: -1 }, _ > te ? (Z.sortIndex = _, f(q, Z), c(U) === null && Z === c(q) && ($ ? (st(Ze), Ze = -1) : $ = !0, He(Ne, _ - te))) : (Z.sortIndex = ge, f(U, Z), X || oe || (X = !0, tt(yt))), Z;
    }, h.unstable_shouldYield = qt, h.unstable_wrapCallback = function(Z) {
      var be = W;
      return function() {
        var _ = W;
        W = be;
        try {
          return Z.apply(this, arguments);
        } finally {
          W = _;
        }
      };
    };
  }(s1)), s1;
}
var bT;
function QT() {
  if (bT)
    return vy.exports;
  bT = 1;
  var h = {};
  return h.NODE_ENV === "production" ? vy.exports = D_() : vy.exports = O_(), vy.exports;
}
var kT;
function __() {
  if (kT)
    return ti;
  kT = 1;
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
    var f = _r, c = QT(), v = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = !1;
    function C(e) {
      w = e;
    }
    function R(e) {
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
    var q = 0, A = 1, I = 2, W = 3, oe = 4, X = 5, $ = 6, Ce = 7, st = 8, vt = 9, Fe = 10, Ne = 11, yt = 12, xe = 13, gt = 14, Ze = 15, pn = 16, vn = 17, qt = 18, Et = 19, Gt = 21, $e = 22, lt = 23, tt = 24, He = 25, Z = !0, be = !1, _ = !1, te = !1, ge = !1, Pe = !0, Qe = !1, ot = !1, ht = !0, Rt = !0, mt = !0, on = /* @__PURE__ */ new Set(), ir = {}, lr = {};
    function Wr(e, t) {
      Rr(e, t), Rr(e + "Capture", t);
    }
    function Rr(e, t) {
      ir[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ir[e] = t;
      {
        var a = e.toLowerCase();
        lr[a] = e, e === "onDoubleClick" && (lr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        on.add(t[i]);
    }
    var Cn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", or = Object.prototype.hasOwnProperty;
    function Wn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Fn(e) {
      try {
        return Hn(e), !1;
      } catch {
        return !0;
      }
    }
    function Hn(e) {
      return "" + e;
    }
    function Lr(e, t) {
      if (Fn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wn(e)), Hn(e);
    }
    function wr(e) {
      if (Fn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wn(e)), Hn(e);
    }
    function qn(e, t) {
      if (Fn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wn(e)), Hn(e);
    }
    function va(e, t) {
      if (Fn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wn(e)), Hn(e);
    }
    function ha(e) {
      if (Fn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Wn(e)), Hn(e);
    }
    function Tr(e) {
      if (Fn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Wn(e)), Hn(e);
    }
    var ma = 0, ur = 1, Nr = 2, hn = 3, ya = 4, ga = 5, Sa = 6, he = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", je = he + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ft = new RegExp("^[" + he + "][" + je + "]*$"), jt = {}, Nt = {};
    function Ln(e) {
      return or.call(Nt, e) ? !0 : or.call(jt, e) ? !1 : ft.test(e) ? (Nt[e] = !0, !0) : (jt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function yn(e, t, a) {
      return t !== null ? t.type === ma : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Cr(e, t, a, i) {
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
    function Bt(e, t, a, i) {
      if (t === null || typeof t > "u" || Cr(e, t, a, i))
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
    function Kn(e) {
      return Zt.hasOwnProperty(e) ? Zt[e] : null;
    }
    function Ft(e, t, a, i, o, s, p) {
      this.acceptsBooleans = t === Nr || t === hn || t === ya, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = p;
    }
    var Zt = {}, ri = [
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
      Zt[e] = new Ft(
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
      Zt[t] = new Ft(
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
      Zt[e] = new Ft(
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
      Zt[e] = new Ft(
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
      Zt[e] = new Ft(
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
      Zt[e] = new Ft(
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
      Zt[e] = new Ft(
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
      Zt[e] = new Ft(
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
      Zt[e] = new Ft(
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
      Zt[t] = new Ft(
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
      Zt[t] = new Ft(
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
      Zt[t] = new Ft(
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
      Zt[e] = new Ft(
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
    Zt[so] = new Ft(
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
      Zt[e] = new Ft(
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
    var co = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Rl = !1;
    function ai(e) {
      !Rl && co.test(e) && (Rl = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ii(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Lr(a, t), i.sanitizeURL && ai("" + a);
        var s = i.attributeName, p = null;
        if (i.type === ya) {
          if (e.hasAttribute(s)) {
            var y = e.getAttribute(s);
            return y === "" ? !0 : Bt(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(s)) {
          if (Bt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === hn)
            return a;
          p = e.getAttribute(s);
        }
        return Bt(t, a, i, !1) ? p === null ? a : p : p === "" + a ? a : p;
      }
    }
    function za(e, t, a, i) {
      {
        if (!Ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Lr(a, t), o === "" + a ? a : o;
      }
    }
    function Pi(e, t, a, i) {
      var o = Kn(t);
      if (!yn(t, o, i)) {
        if (Bt(t, a, o, i) && (a = null), i || o === null) {
          if (Ln(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Lr(a, t), e.setAttribute(s, "" + a));
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
          var z = o.type, N;
          z === hn || z === ya && a === !0 ? N = "" : (Lr(a, x), N = "" + a, o.sanitizeURL && ai(N.toString())), b ? e.setAttributeNS(b, x, N) : e.setAttribute(x, N);
        }
      }
    }
    var qr = Symbol.for("react.element"), Qr = Symbol.for("react.portal"), Ea = Symbol.for("react.fragment"), Bi = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), pe = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), St = Symbol.for("react.suspense"), xt = Symbol.for("react.suspense_list"), ct = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), Pn = Symbol.for("react.scope"), en = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), xr = Symbol.for("react.legacy_hidden"), yi = Symbol.for("react.cache"), nn = Symbol.for("react.tracing_marker"), Xr = Symbol.iterator, os = "@@iterator";
    function gi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xr && e[Xr] || e[os];
      return typeof t == "function" ? t : null;
    }
    var dt = Object.assign, fo = 0, Vi, wl, Gr, us, Mr, ss, cs;
    function fs() {
    }
    fs.__reactDisabledLog = !0;
    function po() {
      {
        if (fo === 0) {
          Vi = console.log, wl = console.info, Gr = console.warn, us = console.error, Mr = console.group, ss = console.groupCollapsed, cs = console.groupEnd;
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
            log: dt({}, e, {
              value: Vi
            }),
            info: dt({}, e, {
              value: wl
            }),
            warn: dt({}, e, {
              value: Gr
            }),
            error: dt({}, e, {
              value: us
            }),
            group: dt({}, e, {
              value: Mr
            }),
            groupCollapsed: dt({}, e, {
              value: ss
            }),
            groupEnd: dt({}, e, {
              value: cs
            })
          });
        }
        fo < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Yi = v.ReactCurrentDispatcher, Si;
    function Aa(e, t, a) {
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
    var Tl = !1, Ei;
    {
      var vo = typeof WeakMap == "function" ? WeakMap : Map;
      Ei = new vo();
    }
    function ho(e, t) {
      if (!e || Tl)
        return "";
      {
        var a = Ei.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Tl = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Yi.current, Yi.current = null, po();
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
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (Y) {
              i = Y;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var y = Y.stack.split(`
`), S = i.stack.split(`
`), x = y.length - 1, b = S.length - 1; x >= 1 && b >= 0 && y[x] !== S[b]; )
            b--;
          for (; x >= 1 && b >= 0; x--, b--)
            if (y[x] !== S[b]) {
              if (x !== 1 || b !== 1)
                do
                  if (x--, b--, b < 0 || y[x] !== S[b]) {
                    var z = `
` + y[x].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && Ei.set(e, z), z;
                  }
                while (x >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        Tl = !1, Yi.current = s, tu(), Error.prepareStackTrace = o;
      }
      var N = e ? e.displayName || e.name : "", V = N ? Aa(N) : "";
      return typeof e == "function" && Ei.set(e, V), V;
    }
    function Cl(e, t, a) {
      return ho(e, !0);
    }
    function ds(e, t, a) {
      return ho(e, !1);
    }
    function ps(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ct(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ho(e, ps(e));
      if (typeof e == "string")
        return Aa(e);
      switch (e) {
        case St:
          return Aa("Suspense");
        case xt:
          return Aa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case me:
            return ds(e.render);
          case ct:
            return Ct(e.type, t, a);
          case Be: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Ct(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function vs(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case X:
          return Aa(e.type);
        case pn:
          return Aa("Lazy");
        case xe:
          return Aa("Suspense");
        case Et:
          return Aa("SuspenseList");
        case q:
        case I:
        case Ze:
          return ds(e.type);
        case Ne:
          return ds(e.type.render);
        case A:
          return Cl(e.type);
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
    function Dt(e) {
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
        case Bi:
          return "StrictMode";
        case St:
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
          case ct:
            var i = e.displayName || null;
            return i !== null ? i : Dt(e.type) || "Memo";
          case Be: {
            var o = e, s = o._payload, p = o._init;
            try {
              return Dt(p(s));
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
    function nt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case tt:
          return "Cache";
        case vt:
          var i = a;
          return mo(i) + ".Consumer";
        case Fe:
          var o = a;
          return mo(o._context) + ".Provider";
        case qt:
          return "DehydratedFragment";
        case Ne:
          return ru(a, a.render, "ForwardRef");
        case Ce:
          return "Fragment";
        case X:
          return a;
        case oe:
          return "Portal";
        case W:
          return "Root";
        case $:
          return "Text";
        case pn:
          return Dt(a);
        case st:
          return a === Bi ? "StrictMode" : "Mode";
        case $e:
          return "Offscreen";
        case yt:
          return "Profiler";
        case Gt:
          return "Scope";
        case xe:
          return "Suspense";
        case Et:
          return "SuspenseList";
        case He:
          return "TracingMarker";
        case A:
        case q:
        case vn:
        case I:
        case gt:
        case Ze:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var li = v.ReactDebugCurrentFrame, gn = null, $r = !1;
    function Ua() {
      {
        if (gn === null)
          return null;
        var e = gn._debugOwner;
        if (e !== null && typeof e < "u")
          return nt(e);
      }
      return null;
    }
    function bl() {
      return gn === null ? "" : nu(gn);
    }
    function un() {
      li.getCurrentStack = null, gn = null, $r = !1;
    }
    function Sn(e) {
      li.getCurrentStack = e === null ? null : bl, gn = e, $r = !1;
    }
    function ms() {
      return gn;
    }
    function sr(e) {
      $r = e;
    }
    function Jr(e) {
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
          return Tr(e), e;
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
    function Ia(e) {
      e._valueTracker = null;
    }
    function Wi(e) {
      var t = "";
      return e && (go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function iu(e) {
      var t = go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(y) {
            Tr(y), i = "" + y, s.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var p = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            Tr(y), i = "" + y;
          },
          stopTracking: function() {
            Ia(e), delete e[t];
          }
        };
        return p;
      }
    }
    function qi(e) {
      kl(e) || (e._valueTracker = iu(e));
    }
    function lu(e) {
      if (!e)
        return !1;
      var t = kl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Wi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ri(e) {
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
      var a = e, i = t.checked, o = dt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function O(e, t) {
      yo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ou && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component", t.type), ou = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Qi && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component", t.type), Qi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: oi(t.value != null ? t.value : i),
        controlled: uu(t)
      };
    }
    function B(e, t) {
      var a = e, i = t.checked;
      i != null && Pi(a, "checked", i, !1);
    }
    function G(e, t) {
      var a = e;
      {
        var i = uu(t);
        !a._wrapperState.controlled && i && !ui && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ui = !0), a._wrapperState.controlled && !i && !ys && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ys = !0);
      }
      B(e, t);
      var o = oi(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Jr(o)) : a.value !== Jr(o) && (a.value = Jr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ke(a, t.type, o) : t.hasOwnProperty("defaultValue") && Ke(a, t.type, oi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ce(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var p = Jr(i._wrapperState.initialValue);
        a || p !== i.value && (i.value = p), i.defaultValue = p;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function Le(e, t) {
      var a = e;
      G(a, t), Re(a, t);
    }
    function Re(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Lr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var p = o[s];
          if (!(p === e || p.form !== e.form)) {
            var y = Zh(p);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            lu(p), G(p, y);
          }
        }
      }
    }
    function Ke(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ri(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Jr(e._wrapperState.initialValue) : e.defaultValue !== Jr(a) && (e.defaultValue = Jr(a)));
    }
    var pt = !1, Ht = !1, Vt = !1;
    function Yt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? f.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ht || (Ht = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Vt || (Vt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !pt && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), pt = !0);
    }
    function Wt(e, t) {
      t.value != null && e.setAttribute("value", Jr(oi(t.value)));
    }
    var sn = Array.isArray;
    function _t(e) {
      return sn(e);
    }
    var Ol;
    Ol = !1;
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
            var i = _t(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, su()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, su());
          }
        }
      }
    }
    function Xi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, p = {}, y = 0; y < s.length; y++)
          p["$" + s[y]] = !0;
        for (var S = 0; S < o.length; S++) {
          var x = p.hasOwnProperty("$" + o[S].value);
          o[S].selected !== x && (o[S].selected = x), x && i && (o[S].defaultSelected = !0);
        }
      } else {
        for (var b = Jr(oi(a)), z = null, N = 0; N < o.length; N++) {
          if (o[N].value === b) {
            o[N].selected = !0, i && (o[N].defaultSelected = !0);
            return;
          }
          z === null && !o[N].disabled && (z = o[N]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function Es(e, t) {
      return dt({}, t, {
        value: void 0
      });
    }
    function Rs(e, t) {
      var a = e;
      Ss(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ol && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ol = !0);
    }
    function dd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Xi(a, !!t.multiple, i, !1) : t.defaultValue != null && Xi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Uy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Xi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Xi(a, !!t.multiple, t.defaultValue, !0) : Xi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Cv(e, t) {
      var a = e, i = t.value;
      i != null && Xi(a, !!t.multiple, i, !1);
    }
    var xv = !1;
    function pd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = dt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Jr(a._wrapperState.initialValue)
      });
      return i;
    }
    function bv(e, t) {
      var a = e;
      yo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !xv && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ua() || "A component"), xv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (_t(o)) {
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
    function kv(e, t) {
      var a = e, i = oi(t.value), o = oi(t.defaultValue);
      if (i != null) {
        var s = Jr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Jr(o));
    }
    function Oc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Iy(e, t) {
      kv(e, t);
    }
    var Gi = "http://www.w3.org/1999/xhtml", jy = "http://www.w3.org/1998/Math/MathML", Dc = "http://www.w3.org/2000/svg";
    function vd(e) {
      switch (e) {
        case "svg":
          return Dc;
        case "math":
          return jy;
        default:
          return Gi;
      }
    }
    function hd(e, t) {
      return e == null || e === Gi ? vd(t) : e === Dc && t === "foreignObject" ? Gi : e;
    }
    var Fy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, _c, Ov = Fy(function(e, t) {
      if (e.namespaceURI === Dc && !("innerHTML" in e)) {
        _c = _c || document.createElement("div"), _c.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = _c.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Kr = 1, $i = 3, xn = 8, Ra = 9, md = 11, ws = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
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
    function _v(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Lv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(cu).forEach(function(e) {
      Lv.forEach(function(t) {
        cu[_v(t, e)] = cu[e];
      });
    });
    function Dl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(cu.hasOwnProperty(e) && cu[e]) ? t + "px" : (va(t, e), ("" + t).trim());
    }
    var Hy = /([A-Z])/g, Py = /^ms-/;
    function By(e) {
      return e.replace(Hy, "-$1").toLowerCase().replace(Py, "-ms-");
    }
    var yd = function() {
    };
    {
      var Nv = /^(?:webkit|moz|o)[A-Z]/, Ts = /^-ms-/, Cs = /-(.)/g, Mv = /;\s*$/, Ji = {}, gd = {}, Sd = !1, Lc = !1, Ed = function(e) {
        return e.replace(Cs, function(t, a) {
          return a.toUpperCase();
        });
      }, zv = function(e) {
        Ji.hasOwnProperty(e) && Ji[e] || (Ji[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ed(e.replace(Ts, "ms-"))
        ));
      }, Av = function(e) {
        Ji.hasOwnProperty(e) && Ji[e] || (Ji[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Uv = function(e, t) {
        gd.hasOwnProperty(t) && gd[t] || (gd[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Mv, "")));
      }, Vy = function(e, t) {
        Sd || (Sd = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Yy = function(e, t) {
        Lc || (Lc = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      yd = function(e, t) {
        e.indexOf("-") > -1 ? zv(e) : Nv.test(e) ? Av(e) : Mv.test(t) && Uv(e, t), typeof t == "number" && (isNaN(t) ? Vy(e, t) : isFinite(t) || Yy(e, t));
      };
    }
    var Wy = yd;
    function qy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : By(i)) + ":", t += Dl(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Iv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Wy(i, t[i]);
          var s = Dl(i, t[i], o);
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
    function jv(e, t) {
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
    var Fv = {
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
    }, Hv = dt({
      menuitem: !0
    }, Fv), Pv = "__html";
    function xs(e, t) {
      if (t) {
        if (Hv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Pv in t.dangerouslySetInnerHTML))
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
    }, _l = {}, bs = new RegExp("^(aria)-[" + je + "]*$"), Rd = new RegExp("^(aria)[A-Z][" + je + "]*$");
    function Bv(e, t) {
      {
        if (or.call(_l, t) && _l[t])
          return !0;
        if (Rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Eo.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), _l[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), _l[t] = !0, !0;
        }
        if (bs.test(t)) {
          var o = t.toLowerCase(), s = Eo.hasOwnProperty(o) ? o : null;
          if (s == null)
            return _l[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), _l[t] = !0, !0;
        }
      }
      return !0;
    }
    function Mc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = Bv(e, i);
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
    var zc = !1;
    function Vv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !zc && (zc = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ks = function() {
    };
    {
      var br = {}, wd = /^on./, Yv = /^on[^A-Z]/, Wv = new RegExp("^(aria)-[" + je + "]*$"), qv = new RegExp("^(aria)[A-Z][" + je + "]*$");
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
        if (Wv.test(t) || qv.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), br[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), br[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), br[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), br[t] = !0, !0;
        var S = Kn(t), x = S !== null && S.type === ma;
        if (Nc.hasOwnProperty(o)) {
          var b = Nc[o];
          if (b !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, b), br[t] = !0, !0;
        } else if (!x && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), br[t] = !0, !0;
        return typeof a == "boolean" && Cr(t, a, S, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), br[t] = !0, !0) : x ? !0 : Cr(t, a, S, !1) ? (br[t] = !0, !1) : ((a === "false" || a === "true") && S !== null && S.type === hn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), br[t] = !0), !0);
      };
    }
    var Qv = function(e, t, a) {
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
      So(e, t) || Qv(e, t, a);
    }
    var Ac = 1, Os = 2, Ds = 4, Qy = Ac | Os | Ds, Ki = null;
    function Xy(e) {
      Ki !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ki = e;
    }
    function Xv() {
      Ki === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ki = null;
    }
    function Gv(e) {
      return e === Ki;
    }
    function $t(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var _s = null, Zi = null, wi = null;
    function Td(e) {
      var t = Yu(e);
      if (t) {
        if (typeof _s != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Zh(a);
          _s(t.stateNode, t.type, i);
        }
      }
    }
    function Cd(e) {
      _s = e;
    }
    function pu(e) {
      Zi ? wi ? wi.push(e) : wi = [e] : Zi = e;
    }
    function Uc() {
      return Zi !== null || wi !== null;
    }
    function Ro() {
      if (Zi) {
        var e = Zi, t = wi;
        if (Zi = null, wi = null, Td(e), t)
          for (var a = 0; a < t.length; a++)
            Td(t[a]);
      }
    }
    var xd = function(e, t) {
      return e(t);
    }, $v = function() {
    }, bd = !1;
    function Jv() {
      var e = Uc();
      e && ($v(), Ro());
    }
    function Ls(e, t, a) {
      if (bd)
        return e(t, a);
      bd = !0;
      try {
        return xd(e, t, a);
      } finally {
        bd = !1, Jv();
      }
    }
    function Ic(e, t, a) {
      xd = e, $v = a;
    }
    function kd(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Od(e, t, a) {
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
      var i = Zh(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Od(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var Ns = !1;
    if (Cn)
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
    function Dd(e, t, a, i, o, s, p, y, S) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (b) {
        this.onError(b);
      }
    }
    var Kv = Dd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var _d = document.createElement("react");
      Kv = function(t, a, i, o, s, p, y, S, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var b = document.createEvent("Event"), z = !1, N = !0, V = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function J() {
          _d.removeEventListener(K, We, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var we = Array.prototype.slice.call(arguments, 3);
        function We() {
          z = !0, J(), a.apply(i, we), N = !1;
        }
        var Ie, kt = !1, Tt = !1;
        function F(H) {
          if (Ie = H.error, kt = !0, Ie === null && H.colno === 0 && H.lineno === 0 && (Tt = !0), H.defaultPrevented && Ie != null && typeof Ie == "object")
            try {
              Ie._suppressLogging = !0;
            } catch {
            }
        }
        var K = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), _d.addEventListener(K, We, !1), b.initEvent(K, !1, !1), _d.dispatchEvent(b), Y && Object.defineProperty(window, "event", Y), z && N && (kt ? Tt && (Ie = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ie = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ie)), window.removeEventListener("error", F), !z)
          return J(), Dd.apply(this, arguments);
      };
    }
    var Ld = Kv, wa = !1, zs = null, el = !1, ja = null, As = {
      onError: function(e) {
        wa = !0, zs = e;
      }
    };
    function ci(e, t, a, i, o, s, p, y, S) {
      wa = !1, zs = null, Ld.apply(As, arguments);
    }
    function Nd(e, t, a, i, o, s, p, y, S) {
      if (ci.apply(this, arguments), wa) {
        var x = tl();
        el || (el = !0, ja = x);
      }
    }
    function Gy() {
      if (el) {
        var e = ja;
        throw el = !1, ja = null, e;
      }
    }
    function $y() {
      return wa;
    }
    function tl() {
      if (wa) {
        var e = zs;
        return wa = !1, zs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ti(e) {
      return e._reactInternals;
    }
    function vu(e) {
      return e._reactInternals !== void 0;
    }
    function jc(e, t) {
      e._reactInternals = t;
    }
    var Ve = (
      /*                      */
      0
    ), fi = (
      /*                */
      1
    ), Jt = (
      /*                    */
      2
    ), ze = (
      /*                       */
      4
    ), Mt = (
      /*                */
      16
    ), Fa = (
      /*                 */
      32
    ), Zn = (
      /*                     */
      64
    ), rt = (
      /*                   */
      128
    ), zr = (
      /*            */
      256
    ), Ta = (
      /*                          */
      512
    ), Bn = (
      /*                     */
      1024
    ), Zr = (
      /*                      */
      2048
    ), Ci = (
      /*                    */
      4096
    ), Nl = (
      /*                   */
      8192
    ), To = (
      /*             */
      16384
    ), Zv = Zr | ze | Zn | Ta | Bn | To, nl = (
      /*               */
      32767
    ), Ml = (
      /*                   */
      32768
    ), cr = (
      /*                */
      65536
    ), Fc = (
      /* */
      131072
    ), eh = (
      /*                       */
      1048576
    ), xi = (
      /*                    */
      2097152
    ), Ha = (
      /*                 */
      4194304
    ), zl = (
      /*                */
      8388608
    ), Pa = (
      /*               */
      16777216
    ), Co = (
      /*              */
      33554432
    ), ea = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ze | Bn | 0
    ), ta = Jt | ze | Mt | Fa | Ta | Ci | Nl, di = ze | Zn | Ta | Nl, na = Zr | Mt, fr = Ha | zl | xi, xo = v.ReactCurrentOwner;
    function Al(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Jt | Ci)) !== Ve && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === W ? a : null;
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
    function Pc(e) {
      return e.tag === W ? e.stateNode.containerInfo : null;
    }
    function Ca(e) {
      return Al(e) === e;
    }
    function xa(e) {
      {
        var t = xo.current;
        if (t !== null && t.tag === A) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Ti(e);
      return o ? Al(o) === o : !1;
    }
    function cn(e) {
      if (Al(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Ba(e) {
      var t = e.alternate;
      if (!t) {
        var a = Al(e);
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
      if (i.tag !== W)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Md(e) {
      var t = Ba(e);
      return t !== null ? zd(t) : null;
    }
    function zd(e) {
      if (e.tag === X || e.tag === $)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = zd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Ad(e) {
      var t = Ba(e);
      return t !== null ? Bc(t) : null;
    }
    function Bc(e) {
      if (e.tag === X || e.tag === $)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== oe) {
          var a = Bc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ud = c.unstable_scheduleCallback, Vc = c.unstable_cancelCallback, th = c.unstable_shouldYield, hu = c.unstable_requestPaint, Vn = c.unstable_now, Jy = c.unstable_getCurrentPriorityLevel, ra = c.unstable_ImmediatePriority, mu = c.unstable_UserBlockingPriority, bi = c.unstable_NormalPriority, yu = c.unstable_LowPriority, Us = c.unstable_IdlePriority, Id = c.unstable_yieldValue, jd = c.unstable_setDisableYieldValue, Ul = null, Nn = null, de = null, kr = !1, ba = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function nh(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ht && (e = dt({}, e, {
          getLaneLabelMap: Yc,
          injectProfilingHooks: jl
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
    function Il(e, t) {
      if (Nn && typeof Nn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & rt) === rt;
          if (Rt) {
            var i;
            switch (t) {
              case Un:
                i = ra;
                break;
              case il:
                i = mu;
                break;
              case Di:
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
    function Fd(e) {
      if (Nn && typeof Nn.onPostCommitFiberRoot == "function")
        try {
          Nn.onPostCommitFiberRoot(Ul, e);
        } catch (t) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function rh(e) {
      if (Nn && typeof Nn.onCommitFiberUnmount == "function")
        try {
          Nn.onCommitFiberUnmount(Ul, e);
        } catch (t) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function rn(e) {
      if (typeof Id == "function" && (jd(e), C(e)), Nn && typeof Nn.setStrictMode == "function")
        try {
          Nn.setStrictMode(Ul, e);
        } catch (t) {
          kr || (kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function jl(e) {
      de = e;
    }
    function Yc() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Mn; a++) {
          var i = fh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function ah(e) {
      de !== null && typeof de.markCommitStarted == "function" && de.markCommitStarted(e);
    }
    function Is() {
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
    function Wc() {
      de !== null && typeof de.markComponentPassiveEffectMountStopped == "function" && de.markComponentPassiveEffectMountStopped();
    }
    function ih(e) {
      de !== null && typeof de.markComponentPassiveEffectUnmountStarted == "function" && de.markComponentPassiveEffectUnmountStarted(e);
    }
    function lh() {
      de !== null && typeof de.markComponentPassiveEffectUnmountStopped == "function" && de.markComponentPassiveEffectUnmountStopped();
    }
    function oh(e) {
      de !== null && typeof de.markComponentLayoutEffectMountStarted == "function" && de.markComponentLayoutEffectMountStarted(e);
    }
    function Pd() {
      de !== null && typeof de.markComponentLayoutEffectMountStopped == "function" && de.markComponentLayoutEffectMountStopped();
    }
    function Su(e) {
      de !== null && typeof de.markComponentLayoutEffectUnmountStarted == "function" && de.markComponentLayoutEffectUnmountStarted(e);
    }
    function js() {
      de !== null && typeof de.markComponentLayoutEffectUnmountStopped == "function" && de.markComponentLayoutEffectUnmountStopped();
    }
    function uh(e, t, a) {
      de !== null && typeof de.markComponentErrored == "function" && de.markComponentErrored(e, t, a);
    }
    function sh(e, t, a) {
      de !== null && typeof de.markComponentSuspended == "function" && de.markComponentSuspended(e, t, a);
    }
    function Eu(e) {
      de !== null && typeof de.markLayoutEffectsStarted == "function" && de.markLayoutEffectsStarted(e);
    }
    function ch() {
      de !== null && typeof de.markLayoutEffectsStopped == "function" && de.markLayoutEffectsStopped();
    }
    function Fs(e) {
      de !== null && typeof de.markPassiveEffectsStarted == "function" && de.markPassiveEffectsStarted(e);
    }
    function ki() {
      de !== null && typeof de.markPassiveEffectsStopped == "function" && de.markPassiveEffectsStopped();
    }
    function Ru(e) {
      de !== null && typeof de.markRenderStarted == "function" && de.markRenderStarted(e);
    }
    function Hs() {
      de !== null && typeof de.markRenderYielded == "function" && de.markRenderYielded();
    }
    function Fl() {
      de !== null && typeof de.markRenderStopped == "function" && de.markRenderStopped();
    }
    function Bd(e) {
      de !== null && typeof de.markRenderScheduled == "function" && de.markRenderScheduled(e);
    }
    function wu(e, t) {
      de !== null && typeof de.markForceUpdateScheduled == "function" && de.markForceUpdateScheduled(e, t);
    }
    function qc(e, t) {
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
    ), Va = (
      /*              */
      16
    ), Ps = Math.clz32 ? Math.clz32 : En, Vd = Math.log, ko = Math.LN2;
    function En(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Vd(t) / ko | 0) | 0;
    }
    var Mn = 31, ee = (
      /*                        */
      0
    ), zn = (
      /*                          */
      0
    ), Xe = (
      /*                        */
      1
    ), Oi = (
      /*    */
      2
    ), al = (
      /*             */
      4
    ), kn = (
      /*            */
      8
    ), Ya = (
      /*                     */
      16
    ), Oo = (
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
    ), Do = (
      /*                        */
      256
    ), Bs = (
      /*                        */
      512
    ), Vs = (
      /*                        */
      1024
    ), Qc = (
      /*                        */
      2048
    ), Xc = (
      /*                        */
      4096
    ), Gc = (
      /*                        */
      8192
    ), $c = (
      /*                        */
      16384
    ), Jc = (
      /*                       */
      32768
    ), Kc = (
      /*                       */
      65536
    ), Zc = (
      /*                       */
      131072
    ), ef = (
      /*                       */
      262144
    ), _o = (
      /*                       */
      524288
    ), tf = (
      /*                       */
      1048576
    ), Tu = (
      /*                       */
      2097152
    ), Lo = (
      /*                            */
      130023424
    ), No = (
      /*                             */
      4194304
    ), Ys = (
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
    ), Yd = No, Mo = (
      /*          */
      134217728
    ), Wd = (
      /*                          */
      268435455
    ), Cu = (
      /*               */
      268435456
    ), Pl = (
      /*                        */
      536870912
    ), ka = (
      /*                   */
      1073741824
    );
    function fh(e) {
      {
        if (e & Xe)
          return "Sync";
        if (e & Oi)
          return "InputContinuousHydration";
        if (e & al)
          return "InputContinuous";
        if (e & kn)
          return "DefaultHydration";
        if (e & Ya)
          return "Default";
        if (e & Oo)
          return "TransitionHydration";
        if (e & Hl)
          return "Transition";
        if (e & Lo)
          return "Retry";
        if (e & Mo)
          return "SelectiveHydration";
        if (e & Cu)
          return "IdleHydration";
        if (e & Pl)
          return "Idle";
        if (e & ka)
          return "Offscreen";
      }
    }
    var an = -1, lf = aa, Ws = No;
    function xu(e) {
      switch (An(e)) {
        case Xe:
          return Xe;
        case Oi:
          return Oi;
        case al:
          return al;
        case kn:
          return kn;
        case Ya:
          return Ya;
        case Oo:
          return Oo;
        case aa:
        case ia:
        case Do:
        case Bs:
        case Vs:
        case Qc:
        case Xc:
        case Gc:
        case $c:
        case Jc:
        case Kc:
        case Zc:
        case ef:
        case _o:
        case tf:
        case Tu:
          return e & Hl;
        case No:
        case Ys:
        case nf:
        case rf:
        case af:
          return e & Lo;
        case Mo:
          return Mo;
        case Cu:
          return Cu;
        case Pl:
          return Pl;
        case ka:
          return ka;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function qs(e, t) {
      var a = e.pendingLanes;
      if (a === ee)
        return ee;
      var i = ee, o = e.suspendedLanes, s = e.pingedLanes, p = a & Wd;
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
        var b = An(i), z = An(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          b >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          b === Ya && (z & Hl) !== ee
        )
          return t;
      }
      (i & al) !== ee && (i |= a & Ya);
      var N = e.entangledLanes;
      if (N !== ee)
        for (var V = e.entanglements, Y = i & N; Y > 0; ) {
          var J = Vl(Y), we = 1 << J;
          i |= V[J], Y &= ~we;
        }
      return i;
    }
    function of(e, t) {
      for (var a = e.eventTimes, i = an; t > 0; ) {
        var o = Vl(t), s = 1 << o, p = a[o];
        p > i && (i = p), t &= ~s;
      }
      return i;
    }
    function Ky(e, t) {
      switch (e) {
        case Xe:
        case Oi:
        case al:
          return t + 250;
        case kn:
        case Ya:
        case Oo:
        case aa:
        case ia:
        case Do:
        case Bs:
        case Vs:
        case Qc:
        case Xc:
        case Gc:
        case $c:
        case Jc:
        case Kc:
        case Zc:
        case ef:
        case _o:
        case tf:
        case Tu:
          return t + 5e3;
        case No:
        case Ys:
        case nf:
        case rf:
        case af:
          return an;
        case Mo:
        case Cu:
        case Pl:
        case ka:
          return an;
        default:
          return g("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function Zy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, p = a; p > 0; ) {
        var y = Vl(p), S = 1 << y, x = s[y];
        x === an ? ((S & i) === ee || (S & o) !== ee) && (s[y] = Ky(S, t)) : x <= t && (e.expiredLanes |= S), p &= ~S;
      }
    }
    function eg(e) {
      return xu(e.pendingLanes);
    }
    function Bl(e) {
      var t = e.pendingLanes & ~ka;
      return t !== ee ? t : t & ka ? ka : ee;
    }
    function qd(e) {
      return (e & Xe) !== ee;
    }
    function Qs(e) {
      return (e & Wd) !== ee;
    }
    function dh(e) {
      return (e & Lo) === e;
    }
    function ph(e) {
      var t = Xe | al | Ya;
      return (e & t) === ee;
    }
    function vh(e) {
      return (e & Hl) === e;
    }
    function Xs(e, t) {
      var a = Oi | al | kn | Ya;
      return (t & a) !== ee;
    }
    function hh(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function Qd(e) {
      return (e & Hl) !== ee;
    }
    function mh() {
      var e = lf;
      return lf <<= 1, (lf & Hl) === ee && (lf = aa), e;
    }
    function la() {
      var e = Ws;
      return Ws <<= 1, (Ws & Lo) === ee && (Ws = No), e;
    }
    function An(e) {
      return e & -e;
    }
    function bu(e) {
      return An(e);
    }
    function Vl(e) {
      return 31 - Ps(e);
    }
    function uf(e) {
      return Vl(e);
    }
    function oa(e, t) {
      return (e & t) !== ee;
    }
    function zo(e, t) {
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
    function yh(e, t) {
      return e !== zn && e < t ? e : t;
    }
    function $s(e) {
      for (var t = [], a = 0; a < Mn; a++)
        t.push(e);
      return t;
    }
    function Ao(e, t, a) {
      e.pendingLanes |= t, t !== Pl && (e.suspendedLanes = ee, e.pingedLanes = ee);
      var i = e.eventTimes, o = uf(t);
      i[o] = a;
    }
    function gh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Vl(i), s = 1 << o;
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
        var y = Vl(p), S = 1 << y;
        i[y] = ee, o[y] = an, s[y] = an, p &= ~S;
      }
    }
    function Xd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Vl(o), p = 1 << s;
        // Is this one of the newly entangled lanes?
        p & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~p;
      }
    }
    function Sh(e, t) {
      var a = An(t), i;
      switch (a) {
        case al:
          i = Oi;
          break;
        case Ya:
          i = kn;
          break;
        case aa:
        case ia:
        case Do:
        case Bs:
        case Vs:
        case Qc:
        case Xc:
        case Gc:
        case $c:
        case Jc:
        case Kc:
        case Zc:
        case ef:
        case _o:
        case tf:
        case Tu:
        case No:
        case Ys:
        case nf:
        case rf:
        case af:
          i = Oo;
          break;
        case Pl:
          i = Cu;
          break;
        default:
          i = zn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== zn ? zn : i;
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
    function Js(e, t) {
      return null;
    }
    var Un = Xe, il = al, Di = Ya, ku = Pl, Ou = zn;
    function Wa() {
      return Ou;
    }
    function On(e) {
      Ou = e;
    }
    function Or(e, t) {
      var a = Ou;
      try {
        return Ou = e, t();
      } finally {
        Ou = a;
      }
    }
    function ng(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function rg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Du(e, t) {
      return e !== 0 && e < t;
    }
    function dr(e) {
      var t = An(e);
      return Du(Un, t) ? Du(il, t) ? Qs(t) ? Di : ku : il : Un;
    }
    function pf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ke;
    function _u(e) {
      ke = e;
    }
    function $d(e) {
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
    function Eh(e) {
      mf = e;
    }
    var Jd;
    function Rh(e) {
      Jd = e;
    }
    var Ks = !1, Nu = [], mn = null, er = null, Ar = null, Mu = /* @__PURE__ */ new Map(), zu = /* @__PURE__ */ new Map(), tr = [], wh = [
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
    function _i(e) {
      return wh.indexOf(e) > -1;
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
    function Kd(e, t) {
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
          zu.delete(i);
          break;
        }
      }
    }
    function Au(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var p = ig(t, a, i, o, s);
        if (t !== null) {
          var y = Yu(t);
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
          return mn = Au(mn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var p = o;
          return er = Au(er, e, t, a, i, p), !0;
        }
        case "mouseover": {
          var y = o;
          return Ar = Au(Ar, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var S = o, x = S.pointerId;
          return Mu.set(x, Au(Mu.get(x) || null, e, t, a, i, S)), !0;
        }
        case "gotpointercapture": {
          var b = o, z = b.pointerId;
          return zu.set(z, Au(zu.get(z) || null, e, t, a, i, b)), !0;
        }
      }
      return !1;
    }
    function Zd(e) {
      var t = cc(e.target);
      if (t !== null) {
        var a = Al(t);
        if (a !== null) {
          var i = a.tag;
          if (i === xe) {
            var o = Hc(a);
            if (o !== null) {
              e.blockedOn = o, Jd(e.priority, function() {
                Lu(a);
              });
              return;
            }
          } else if (i === W) {
            var s = a.stateNode;
            if (pf(s)) {
              e.blockedOn = Pc(a);
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
      }, i = 0; i < tr.length && Du(t, tr[i].priority); i++)
        ;
      tr.splice(i, 0, a), i === 0 && Zd(a);
    }
    function Uo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Dr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          Xy(s), o.target.dispatchEvent(s), Xv();
        } else {
          var p = Yu(i);
          return p !== null && vf(p), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function yf(e, t, a) {
      Uo(e) && a.delete(t);
    }
    function qa() {
      Ks = !1, mn !== null && Uo(mn) && (mn = null), er !== null && Uo(er) && (er = null), Ar !== null && Uo(Ar) && (Ar = null), Mu.forEach(yf), zu.forEach(yf);
    }
    function wt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ks || (Ks = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, qa)));
    }
    function Dn(e) {
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
      Mu.forEach(i), zu.forEach(i);
      for (var o = 0; o < tr.length; o++) {
        var s = tr[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; tr.length > 0; ) {
        var p = tr[0];
        if (p.blockedOn !== null)
          break;
        Zd(p), p.blockedOn === null && tr.shift();
      }
    }
    var fn = v.ReactCurrentBatchConfig, Qn = !0;
    function ua(e) {
      Qn = !!e;
    }
    function Uu() {
      return Qn;
    }
    function Xn(e, t, a) {
      var i = gf(t), o;
      switch (i) {
        case Un:
          o = Zs;
          break;
        case il:
          o = Io;
          break;
        case Di:
        default:
          o = Iu;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Zs(e, t, a, i) {
      var o = Wa(), s = fn.transition;
      fn.transition = null;
      try {
        On(Un), Iu(e, t, a, i);
      } finally {
        On(o), fn.transition = s;
      }
    }
    function Io(e, t, a, i) {
      var o = Wa(), s = fn.transition;
      fn.transition = null;
      try {
        On(il), Iu(e, t, a, i);
      } finally {
        On(o), fn.transition = s;
      }
    }
    function Iu(e, t, a, i) {
      Qn && ep(e, t, a, i);
    }
    function ep(e, t, a, i) {
      var o = Dr(e, t, a, i);
      if (o === null) {
        Tg(e, t, i, Yl, a), Kd(e, i);
        return;
      }
      if (Th(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Kd(e, i), t & Ds && _i(e)) {
        for (; o !== null; ) {
          var s = Yu(o);
          s !== null && $d(s);
          var p = Dr(e, t, a, i);
          if (p === null && Tg(e, t, i, Yl, a), p === o)
            break;
          o = p;
        }
        o !== null && i.stopPropagation();
        return;
      }
      Tg(e, t, i, null, a);
    }
    var Yl = null;
    function Dr(e, t, a, i) {
      Yl = null;
      var o = $t(i), s = cc(o);
      if (s !== null) {
        var p = Al(s);
        if (p === null)
          s = null;
        else {
          var y = p.tag;
          if (y === xe) {
            var S = Hc(p);
            if (S !== null)
              return S;
            s = null;
          } else if (y === W) {
            var x = p.stateNode;
            if (pf(x))
              return Pc(p);
            s = null;
          } else
            p !== s && (s = null);
        }
      }
      return Yl = s, null;
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
          var t = Jy();
          switch (t) {
            case ra:
              return Un;
            case mu:
              return il;
            case bi:
            case yu:
              return Di;
            case Us:
              return ku;
            default:
              return Di;
          }
        }
        default:
          return Di;
      }
    }
    function ju(e, t, a) {
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
    var Qa = null, Fu = null, Xa = null;
    function Ef(e) {
      return Qa = e, Fu = tc(), !0;
    }
    function ec() {
      Qa = null, Fu = null, Xa = null;
    }
    function Rf() {
      if (Xa)
        return Xa;
      var e, t = Fu, a = t.length, i, o = tc(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var p = a - e;
      for (i = 1; i <= p && t[a - i] === o[s - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return Xa = o.slice(e, y), Xa;
    }
    function tc() {
      return "value" in Qa ? Qa.value : Qa.textContent;
    }
    function jo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function nr() {
      return !0;
    }
    function ol() {
      return !1;
    }
    function Rn(e) {
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
      return dt(t.prototype, {
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
    }, wf = Rn(Gn), Fo = dt({}, Gn, {
      view: 0,
      detail: 0
    }), np = Rn(Fo), rp, Li, Hu;
    function ap(e) {
      e !== Hu && (Hu && e.type === "mousemove" ? (rp = e.screenX - Hu.screenX, Li = e.screenY - Hu.screenY) : (rp = 0, Li = 0), Hu = e);
    }
    var Ni = dt({}, Fo, {
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
    }), Tf = Rn(Ni), Ho = dt({}, Ni, {
      dataTransfer: 0
    }), Ch = Rn(Ho), xh = dt({}, Fo, {
      relatedTarget: 0
    }), nc = Rn(xh), Cf = dt({}, Gn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), og = Rn(Cf), ug = dt({}, Gn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), bh = Rn(ug), kh = dt({}, Gn, {
      data: 0
    }), Wl = Rn(kh), sg = Wl, Pu = {
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
    function _n(e) {
      if (e.key) {
        var t = Pu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = jo(e);
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
    var fg = dt({}, Fo, {
      key: _n,
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
        return e.type === "keypress" ? jo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), _h = Rn(fg), Lh = dt({}, Ni, {
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
    }), Nh = Rn(Lh), Ga = dt({}, Fo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ip
    }), lp = Rn(Ga), dg = dt({}, Gn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ql = Rn(dg), xf = dt({}, Ni, {
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
    }), Po = Rn(xf), bf = [9, 13, 27, 32], kf = 229, rc = Cn && "CompositionEvent" in window, ac = null;
    Cn && "documentMode" in document && (ac = document.documentMode);
    var op = Cn && "TextEvent" in window && !ac, Mh = Cn && (!rc || ac && ac > 8 && ac <= 11), up = 32, sp = String.fromCharCode(up);
    function Of() {
      Wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Wr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Wr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Wr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
    function Df(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function lc(e) {
      return e.locale === "ko";
    }
    var Ql = !1;
    function _f(e, t, a, i, o) {
      var s, p;
      if (rc ? s = cp(t) : Ql ? fp(t, i) && (s = "onCompositionEnd") : pg(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Mh && !lc(i) && (!Ql && s === "onCompositionStart" ? Ql = Ef(o) : s === "onCompositionEnd" && Ql && (p = Rf()));
      var y = Hh(a, s);
      if (y.length > 0) {
        var S = new Wl(s, t, null, i, o);
        if (e.push({
          event: S,
          listeners: y
        }), p)
          S.data = p;
        else {
          var x = Df(i);
          x !== null && (S.data = x);
        }
      }
    }
    function Ah(e, t) {
      switch (e) {
        case "compositionend":
          return Df(t);
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
          var a = Rf();
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
          return Mh && !lc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Lf(e, t, a, i, o) {
      var s;
      if (op ? s = Ah(t, i) : s = vg(t, i), !s)
        return null;
      var p = Hh(a, "onBeforeInput");
      if (p.length > 0) {
        var y = new sg("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: y,
          listeners: p
        }), y.data = s;
      }
    }
    function hg(e, t, a, i, o, s, p) {
      _f(e, t, a, i, o), Lf(e, t, a, i, o);
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
    function Uh(e) {
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
      if (!Cn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Wr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      pu(i);
      var o = Hh(t, "onChange");
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
      r(t, u, e, $t(e)), Ls(T, t);
    }
    function T(e) {
      K1(e, 0);
    }
    function k(e) {
      var t = jf(e);
      if (lu(t))
        return e;
    }
    function L(e, t) {
      if (e === "change")
        return t;
    }
    var Q = !1;
    Cn && (Q = Nf("input") && (!document.documentMode || document.documentMode > 9));
    function le(e, t) {
      l = e, u = t, l.attachEvent("onpropertychange", ae);
    }
    function ue() {
      l && (l.detachEvent("onpropertychange", ae), l = null, u = null);
    }
    function ae(e) {
      e.propertyName === "value" && k(u) && m(e);
    }
    function Se(e, t, a) {
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
    function In(e, t) {
      if (e === "click")
        return k(t);
    }
    function j(e, t) {
      if (e === "input" || e === "change")
        return k(t);
    }
    function M(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ke(e, "number", e.value);
    }
    function P(e, t, a, i, o, s, p) {
      var y = a ? jf(a) : window, S, x;
      if (d(y) ? S = L : Uh(y) ? Q ? S = j : (S = Oe, x = Se) : Me(y) && (S = In), S) {
        var b = S(t, a);
        if (b) {
          r(e, b, i, o);
          return;
        }
      }
      x && x(t, y, a), t === "focusout" && M(y);
    }
    function fe() {
      Rr("onMouseEnter", ["mouseout", "mouseover"]), Rr("onMouseLeave", ["mouseout", "mouseover"]), Rr("onPointerEnter", ["pointerout", "pointerover"]), Rr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ae(e, t, a, i, o, s, p) {
      var y = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
      if (y && !Gv(i)) {
        var x = i.relatedTarget || i.fromElement;
        if (x && (cc(x) || xp(x)))
          return;
      }
      if (!(!S && !y)) {
        var b;
        if (o.window === o)
          b = o;
        else {
          var z = o.ownerDocument;
          z ? b = z.defaultView || z.parentWindow : b = window;
        }
        var N, V;
        if (S) {
          var Y = i.relatedTarget || i.toElement;
          if (N = a, V = Y ? cc(Y) : null, V !== null) {
            var J = Al(V);
            (V !== J || V.tag !== X && V.tag !== $) && (V = null);
          }
        } else
          N = null, V = a;
        if (N !== V) {
          var we = Tf, We = "onMouseLeave", Ie = "onMouseEnter", kt = "mouse";
          (t === "pointerout" || t === "pointerover") && (we = Nh, We = "onPointerLeave", Ie = "onPointerEnter", kt = "pointer");
          var Tt = N == null ? b : jf(N), F = V == null ? b : jf(V), K = new we(We, kt + "leave", N, i, o);
          K.target = Tt, K.relatedTarget = F;
          var H = null, se = cc(o);
          if (se === a) {
            var Te = new we(Ie, kt + "enter", V, i, o);
            Te.target = F, Te.relatedTarget = Tt, H = Te;
          }
          JC(e, K, H, N, V);
        }
      }
    }
    function Ge(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var De = typeof Object.is == "function" ? Object.is : Ge;
    function Je(e, t) {
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
    function $n(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function zt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ul(e, t) {
      for (var a = $n(e), i = 0, o = 0; a; ) {
        if (a.nodeType === $i) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = $n(zt(a));
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
      return LC(e, o, s, p, y);
    }
    function LC(e, t, a, i, o) {
      var s = 0, p = -1, y = -1, S = 0, x = 0, b = e, z = null;
      e:
        for (; ; ) {
          for (var N = null; b === t && (a === 0 || b.nodeType === $i) && (p = s + a), b === i && (o === 0 || b.nodeType === $i) && (y = s + o), b.nodeType === $i && (s += b.nodeValue.length), (N = b.firstChild) !== null; )
            z = b, b = N;
          for (; ; ) {
            if (b === e)
              break e;
            if (z === t && ++S === a && (p = s), z === i && ++x === o && (y = s), (N = b.nextSibling) !== null)
              break;
            b = z, z = b.parentNode;
          }
          b = N;
        }
      return p === -1 || y === -1 ? null : {
        start: p,
        end: y
      };
    }
    function NC(e, t) {
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
          var z = a.createRange();
          z.setStart(x.node, x.offset), o.removeAllRanges(), p > y ? (o.addRange(z), o.extend(b.node, b.offset)) : (z.setEnd(b.node, b.offset), o.addRange(z));
        }
      }
    }
    function H1(e) {
      return e && e.nodeType === $i;
    }
    function P1(e, t) {
      return !e || !t ? !1 : e === t ? !0 : H1(e) ? !1 : H1(t) ? P1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function MC(e) {
      return e && e.ownerDocument && P1(e.ownerDocument.documentElement, e);
    }
    function zC(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function B1() {
      for (var e = window, t = Ri(); t instanceof e.HTMLIFrameElement; ) {
        if (zC(t))
          e = t.contentWindow;
        else
          return t;
        t = Ri(e.document);
      }
      return t;
    }
    function yg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function AC() {
      var e = B1();
      return {
        focusedElem: e,
        selectionRange: yg(e) ? IC(e) : null
      };
    }
    function UC(e) {
      var t = B1(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && MC(a)) {
        i !== null && yg(a) && jC(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Kr && o.push({
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
    function IC(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = mg(e), t || {
        start: 0,
        end: 0
      };
    }
    function jC(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : NC(e, t);
    }
    var FC = Cn && "documentMode" in document && document.documentMode <= 11;
    function HC() {
      Wr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Mf = null, gg = null, dp = null, Sg = !1;
    function PC(e) {
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
    function BC(e) {
      return e.window === e ? e.document : e.nodeType === Ra ? e : e.ownerDocument;
    }
    function V1(e, t, a) {
      var i = BC(a);
      if (!(Sg || Mf == null || Mf !== Ri(i))) {
        var o = PC(Mf);
        if (!dp || !Je(dp, o)) {
          dp = o;
          var s = Hh(gg, "onSelect");
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
    function VC(e, t, a, i, o, s, p) {
      var y = a ? jf(a) : window;
      switch (t) {
        case "focusin":
          (Uh(y) || y.contentEditable === "true") && (Mf = y, gg = a, dp = null);
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
          Sg = !1, V1(e, i, o);
          break;
        case "selectionchange":
          if (FC)
            break;
        case "keydown":
        case "keyup":
          V1(e, i, o);
      }
    }
    function Ih(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var zf = {
      animationend: Ih("Animation", "AnimationEnd"),
      animationiteration: Ih("Animation", "AnimationIteration"),
      animationstart: Ih("Animation", "AnimationStart"),
      transitionend: Ih("Transition", "TransitionEnd")
    }, Eg = {}, Y1 = {};
    Cn && (Y1 = document.createElement("div").style, "AnimationEvent" in window || (delete zf.animationend.animation, delete zf.animationiteration.animation, delete zf.animationstart.animation), "TransitionEvent" in window || delete zf.transitionend.transition);
    function jh(e) {
      if (Eg[e])
        return Eg[e];
      if (!zf[e])
        return e;
      var t = zf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in Y1)
          return Eg[e] = t[a];
      return e;
    }
    var W1 = jh("animationend"), q1 = jh("animationiteration"), Q1 = jh("animationstart"), X1 = jh("transitionend"), G1 = /* @__PURE__ */ new Map(), $1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Bu(e, t) {
      G1.set(e, t), Wr(t, [e]);
    }
    function YC() {
      for (var e = 0; e < $1.length; e++) {
        var t = $1[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Bu(a, "on" + i);
      }
      Bu(W1, "onAnimationEnd"), Bu(q1, "onAnimationIteration"), Bu(Q1, "onAnimationStart"), Bu("dblclick", "onDoubleClick"), Bu("focusin", "onFocus"), Bu("focusout", "onBlur"), Bu(X1, "onTransitionEnd");
    }
    function WC(e, t, a, i, o, s, p) {
      var y = G1.get(t);
      if (y !== void 0) {
        var S = wf, x = t;
        switch (t) {
          case "keypress":
            if (jo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            S = _h;
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
            S = Tf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Ch;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = lp;
            break;
          case W1:
          case q1:
          case Q1:
            S = og;
            break;
          case X1:
            S = ql;
            break;
          case "scroll":
            S = np;
            break;
          case "wheel":
            S = Po;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = bh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Nh;
            break;
        }
        var b = (s & Ds) !== 0;
        {
          var z = !b && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = GC(a, y, i.type, b, z);
          if (N.length > 0) {
            var V = new S(y, x, null, i, o);
            e.push({
              event: V,
              listeners: N
            });
          }
        }
      }
    }
    YC(), fe(), n(), HC(), Of();
    function qC(e, t, a, i, o, s, p) {
      WC(e, t, a, i, o, s);
      var y = (s & Qy) === 0;
      y && (Ae(e, t, a, i, o), P(e, t, a, i, o), VC(e, t, a, i, o), hg(e, t, a, i, o));
    }
    var pp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Rg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(pp));
    function J1(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Nd(i, t, void 0, e), e.currentTarget = null;
    }
    function QC(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], p = s.instance, y = s.currentTarget, S = s.listener;
          if (p !== i && e.isPropagationStopped())
            return;
          J1(e, S, y), i = p;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var b = t[x], z = b.instance, N = b.currentTarget, V = b.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          J1(e, V, N), i = z;
        }
    }
    function K1(e, t) {
      for (var a = (t & Ds) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, p = o.listeners;
        QC(s, p, a);
      }
      Gy();
    }
    function XC(e, t, a, i, o) {
      var s = $t(a), p = [];
      qC(p, e, i, a, s, t), K1(p, t);
    }
    function wn(e, t) {
      Rg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Cb(t), o = KC(e, a);
      i.has(o) || (Z1(t, e, Os, a), i.add(o));
    }
    function wg(e, t, a) {
      Rg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ds), Z1(a, e, i, t);
    }
    var Fh = "_reactListening" + Math.random().toString(36).slice(2);
    function vp(e) {
      if (!e[Fh]) {
        e[Fh] = !0, on.forEach(function(a) {
          a !== "selectionchange" && (Rg.has(a) || wg(a, !1, e), wg(a, !0, e));
        });
        var t = e.nodeType === Ra ? e : e.ownerDocument;
        t !== null && (t[Fh] || (t[Fh] = !0, wg("selectionchange", !1, t)));
      }
    }
    function Z1(e, t, a, i, o) {
      var s = Xn(e, t, a), p = void 0;
      Ns && (t === "touchstart" || t === "touchmove" || t === "wheel") && (p = !0), e = e, i ? p !== void 0 ? Sf(e, t, s, p) : ll(e, t, s) : p !== void 0 ? tp(e, t, s, p) : ju(e, t, s);
    }
    function eE(e, t) {
      return e === t || e.nodeType === xn && e.parentNode === t;
    }
    function Tg(e, t, a, i, o) {
      var s = i;
      if (!(t & Ac) && !(t & Os)) {
        var p = o;
        if (i !== null) {
          var y = i;
          e:
            for (; ; ) {
              if (y === null)
                return;
              var S = y.tag;
              if (S === W || S === oe) {
                var x = y.stateNode.containerInfo;
                if (eE(x, p))
                  break;
                if (S === oe)
                  for (var b = y.return; b !== null; ) {
                    var z = b.tag;
                    if (z === W || z === oe) {
                      var N = b.stateNode.containerInfo;
                      if (eE(N, p))
                        return;
                    }
                    b = b.return;
                  }
                for (; x !== null; ) {
                  var V = cc(x);
                  if (V === null)
                    return;
                  var Y = V.tag;
                  if (Y === X || Y === $) {
                    y = s = V;
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
        return XC(e, t, a, s);
      });
    }
    function hp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function GC(e, t, a, i, o, s) {
      for (var p = t !== null ? t + "Capture" : null, y = i ? p : t, S = [], x = e, b = null; x !== null; ) {
        var z = x, N = z.stateNode, V = z.tag;
        if (V === X && N !== null && (b = N, y !== null)) {
          var Y = wo(x, y);
          Y != null && S.push(hp(x, Y, b));
        }
        if (o)
          break;
        x = x.return;
      }
      return S;
    }
    function Hh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, p = s.stateNode, y = s.tag;
        if (y === X && p !== null) {
          var S = p, x = wo(o, a);
          x != null && i.unshift(hp(o, x, S));
          var b = wo(o, t);
          b != null && i.push(hp(o, b, S));
        }
        o = o.return;
      }
      return i;
    }
    function Af(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== X);
      return e || null;
    }
    function $C(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Af(s))
        o++;
      for (var p = 0, y = i; y; y = Af(y))
        p++;
      for (; o - p > 0; )
        a = Af(a), o--;
      for (; p - o > 0; )
        i = Af(i), p--;
      for (var S = o; S--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Af(a), i = Af(i);
      }
      return null;
    }
    function tE(e, t, a, i, o) {
      for (var s = t._reactName, p = [], y = a; y !== null && y !== i; ) {
        var S = y, x = S.alternate, b = S.stateNode, z = S.tag;
        if (x !== null && x === i)
          break;
        if (z === X && b !== null) {
          var N = b;
          if (o) {
            var V = wo(y, s);
            V != null && p.unshift(hp(y, V, N));
          } else if (!o) {
            var Y = wo(y, s);
            Y != null && p.push(hp(y, Y, N));
          }
        }
        y = y.return;
      }
      p.length !== 0 && e.push({
        event: t,
        listeners: p
      });
    }
    function JC(e, t, a, i, o) {
      var s = i && o ? $C(i, o) : null;
      i !== null && tE(e, t, i, s, !1), o !== null && a !== null && tE(e, a, o, s, !0);
    }
    function KC(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var $a = !1, mp = "dangerouslySetInnerHTML", Ph = "suppressContentEditableWarning", Vu = "suppressHydrationWarning", nE = "autoFocus", uc = "children", sc = "style", Bh = "__html", Cg, Vh, yp, rE, Yh, aE, iE;
    Cg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Vh = function(e, t) {
      du(e, t), Vv(e, t), Ll(e, t, {
        registrationNameDependencies: ir,
        possibleRegistrationNames: lr
      });
    }, aE = Cn && !document.documentMode, yp = function(e, t, a) {
      if (!$a) {
        var i = Wh(a), o = Wh(t);
        o !== i && ($a = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, rE = function(e) {
      if (!$a) {
        $a = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Yh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, iE = function(e, t) {
      var a = e.namespaceURI === Gi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var ZC = /\r\n?/g, ex = /\u0000|\uFFFD/g;
    function Wh(e) {
      ha(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(ZC, `
`).replace(ex, "");
    }
    function qh(e, t, a, i) {
      var o = Wh(t), s = Wh(e);
      if (s !== o && (i && ($a || ($a = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && Z))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function lE(e) {
      return e.nodeType === Ra ? e : e.ownerDocument;
    }
    function tx() {
    }
    function Qh(e) {
      e.onclick = tx;
    }
    function nx(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var p = i[s];
          if (s === sc)
            p && Object.freeze(p), Iv(t, p);
          else if (s === mp) {
            var y = p ? p[Bh] : void 0;
            y != null && Ov(t, y);
          } else if (s === uc)
            if (typeof p == "string") {
              var S = e !== "textarea" || p !== "";
              S && ws(t, p);
            } else
              typeof p == "number" && ws(t, "" + p);
          else
            s === Ph || s === Vu || s === nE || (ir.hasOwnProperty(s) ? p != null && (typeof p != "function" && Yh(s, p), s === "onScroll" && wn("scroll", t)) : p != null && Pi(t, s, p, o));
        }
    }
    function rx(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], p = t[o + 1];
        s === sc ? Iv(e, p) : s === mp ? Ov(e, p) : s === uc ? ws(e, p) : Pi(e, s, p, i);
      }
    }
    function ax(e, t, a, i) {
      var o, s = lE(a), p, y = i;
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
      return y === Gi && !o && Object.prototype.toString.call(p) === "[object HTMLUnknownElement]" && !or.call(Cg, e) && (Cg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), p;
    }
    function ix(e, t) {
      return lE(t).createTextNode(e);
    }
    function lx(e, t, a, i) {
      var o = So(t, a);
      Vh(t, a);
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
          O(e, a), s = E(e, a), wn("invalid", e);
          break;
        case "option":
          Yt(e, a), s = a;
          break;
        case "select":
          Rs(e, a), s = Es(e, a), wn("invalid", e);
          break;
        case "textarea":
          bv(e, a), s = pd(e, a), wn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (xs(t, s), nx(t, e, i, s, o), t) {
        case "input":
          qi(e), ce(e, a, !1);
          break;
        case "textarea":
          qi(e), Oc(e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          dd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Qh(e);
          break;
      }
    }
    function ox(e, t, a, i, o) {
      Vh(t, i);
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
          p = a, y = i, typeof p.onClick != "function" && typeof y.onClick == "function" && Qh(e);
          break;
      }
      xs(t, y);
      var S, x, b = null;
      for (S in p)
        if (!(y.hasOwnProperty(S) || !p.hasOwnProperty(S) || p[S] == null))
          if (S === sc) {
            var z = p[S];
            for (x in z)
              z.hasOwnProperty(x) && (b || (b = {}), b[x] = "");
          } else
            S === mp || S === uc || S === Ph || S === Vu || S === nE || (ir.hasOwnProperty(S) ? s || (s = []) : (s = s || []).push(S, null));
      for (S in y) {
        var N = y[S], V = p != null ? p[S] : void 0;
        if (!(!y.hasOwnProperty(S) || N === V || N == null && V == null))
          if (S === sc)
            if (N && Object.freeze(N), V) {
              for (x in V)
                V.hasOwnProperty(x) && (!N || !N.hasOwnProperty(x)) && (b || (b = {}), b[x] = "");
              for (x in N)
                N.hasOwnProperty(x) && V[x] !== N[x] && (b || (b = {}), b[x] = N[x]);
            } else
              b || (s || (s = []), s.push(S, b)), b = N;
          else if (S === mp) {
            var Y = N ? N[Bh] : void 0, J = V ? V[Bh] : void 0;
            Y != null && J !== Y && (s = s || []).push(S, Y);
          } else
            S === uc ? (typeof N == "string" || typeof N == "number") && (s = s || []).push(S, "" + N) : S === Ph || S === Vu || (ir.hasOwnProperty(S) ? (N != null && (typeof N != "function" && Yh(S, N), S === "onScroll" && wn("scroll", e)), !s && V !== N && (s = [])) : (s = s || []).push(S, N));
      }
      return b && (jv(b, y[sc]), (s = s || []).push(sc, b)), s;
    }
    function ux(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && B(e, o);
      var s = So(a, i), p = So(a, o);
      switch (rx(e, t, s, p), a) {
        case "input":
          G(e, o);
          break;
        case "textarea":
          kv(e, o);
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
      switch (y = So(t, a), Vh(t, a), t) {
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
          O(e, a), wn("invalid", e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          Rs(e, a), wn("invalid", e);
          break;
        case "textarea":
          bv(e, a), wn("invalid", e);
          break;
      }
      xs(t, a);
      {
        S = /* @__PURE__ */ new Set();
        for (var b = e.attributes, z = 0; z < b.length; z++) {
          var N = b[z].name.toLowerCase();
          switch (N) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              S.add(b[z].name);
          }
        }
      }
      var V = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var J = a[Y];
          if (Y === uc)
            typeof J == "string" ? e.textContent !== J && (a[Vu] !== !0 && qh(e.textContent, J, s, p), V = [uc, J]) : typeof J == "number" && e.textContent !== "" + J && (a[Vu] !== !0 && qh(e.textContent, J, s, p), V = [uc, "" + J]);
          else if (ir.hasOwnProperty(Y))
            J != null && (typeof J != "function" && Yh(Y, J), Y === "onScroll" && wn("scroll", e));
          else if (p && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var we = void 0, We = y && Qe ? null : Kn(Y);
            if (a[Vu] !== !0) {
              if (!(Y === Ph || Y === Vu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === mp) {
                  var Ie = e.innerHTML, kt = J ? J[Bh] : void 0;
                  if (kt != null) {
                    var Tt = iE(e, kt);
                    Tt !== Ie && yp(Y, Ie, Tt);
                  }
                } else if (Y === sc) {
                  if (S.delete(Y), aE) {
                    var F = qy(J);
                    we = e.getAttribute("style"), F !== we && yp(Y, we, F);
                  }
                } else if (y && !Qe)
                  S.delete(Y.toLowerCase()), we = za(e, Y, J), J !== we && yp(Y, we, J);
                else if (!yn(Y, We, y) && !Bt(Y, J, We, y)) {
                  var K = !1;
                  if (We !== null)
                    S.delete(We.attributeName), we = ii(e, Y, J, We);
                  else {
                    var H = i;
                    if (H === Gi && (H = vd(t)), H === Gi)
                      S.delete(Y.toLowerCase());
                    else {
                      var se = sx(Y);
                      se !== null && se !== Y && (K = !0, S.delete(se)), S.delete(Y);
                    }
                    we = za(e, Y, J);
                  }
                  var Te = Qe;
                  !Te && J !== we && !K && yp(Y, we, J);
                }
              }
            }
          }
        }
      switch (p && // $FlowFixMe - Should be inferred as not undefined.
      S.size > 0 && a[Vu] !== !0 && rE(S), t) {
        case "input":
          qi(e), ce(e, a, !0);
          break;
        case "textarea":
          qi(e), Oc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Qh(e);
          break;
      }
      return V;
    }
    function fx(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function xg(e, t) {
      {
        if ($a)
          return;
        $a = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function bg(e, t) {
      {
        if ($a)
          return;
        $a = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function kg(e, t, a) {
      {
        if ($a)
          return;
        $a = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Og(e, t) {
      {
        if (t === "" || $a)
          return;
        $a = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function dx(e, t, a) {
      switch (t) {
        case "input":
          Le(e, a);
          return;
        case "textarea":
          Iy(e, a);
          return;
        case "select":
          Cv(e, a);
          return;
      }
    }
    var gp = function() {
    }, Sp = function() {
    };
    {
      var px = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], oE = [
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
      ], vx = oE.concat(["button"]), hx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], uE = {
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
        var a = dt({}, e || uE), i = {
          tag: t
        };
        return oE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), vx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), px.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
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
      }, sE = {};
      gp = function(e, t, a) {
        a = a || uE;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = mx(e, o) ? null : i, p = s ? null : yx(e, a), y = s || p;
        if (y) {
          var S = y.tag, x = !!s + "|" + e + "|" + S;
          if (!sE[x]) {
            sE[x] = !0;
            var b = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? b = "Text nodes" : (b = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : b = "<" + e + ">", s) {
              var N = "";
              S === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", b, S, z, N);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", b, S);
          }
        }
      };
    }
    var Xh = "suppressHydrationWarning", Gh = "$", $h = "/$", Ep = "$?", Rp = "$!", gx = "style", Dg = null, _g = null;
    function Sx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ra:
        case md: {
          t = i === Ra ? "#document" : "#fragment";
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
    function eM(e) {
      return e;
    }
    function Rx(e) {
      Dg = Uu(), _g = AC();
      var t = null;
      return ua(!1), t;
    }
    function wx(e) {
      UC(_g), ua(Dg), Dg = null, _g = null;
    }
    function Tx(e, t, a, i, o) {
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
      return Cp(o, x), jg(x, t), x;
    }
    function Cx(e, t) {
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
      return Cp(i, s), s;
    }
    function Ox() {
      var e = window.event;
      return e === void 0 ? Di : gf(e.type);
    }
    var Ng = typeof setTimeout == "function" ? setTimeout : void 0, Dx = typeof clearTimeout == "function" ? clearTimeout : void 0, Mg = -1, cE = typeof Promise == "function" ? Promise : void 0, _x = typeof queueMicrotask == "function" ? queueMicrotask : typeof cE < "u" ? function(e) {
      return cE.resolve(null).then(e).catch(Lx);
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
      ux(e, t, a, i, o), jg(e, o);
    }
    function fE(e) {
      ws(e, "");
    }
    function zx(e, t, a) {
      e.nodeValue = a;
    }
    function Ax(e, t) {
      e.appendChild(t);
    }
    function Ux(e, t) {
      var a;
      e.nodeType === xn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Qh(a);
    }
    function Ix(e, t, a) {
      e.insertBefore(t, a);
    }
    function jx(e, t, a) {
      e.nodeType === xn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Fx(e, t) {
      e.removeChild(t);
    }
    function Hx(e, t) {
      e.nodeType === xn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function zg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === xn) {
          var s = o.data;
          if (s === $h)
            if (i === 0) {
              e.removeChild(o), Dn(t);
              return;
            } else
              i--;
          else
            (s === Gh || s === Ep || s === Rp) && i++;
        }
        a = o;
      } while (a);
      Dn(t);
    }
    function Px(e, t) {
      e.nodeType === xn ? zg(e.parentNode, t) : e.nodeType === Kr && zg(e, t), Dn(e);
    }
    function Bx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Vx(e) {
      e.nodeValue = "";
    }
    function Yx(e, t) {
      e = e;
      var a = t[gx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Dl("display", i);
    }
    function Wx(e, t) {
      e.nodeValue = t;
    }
    function qx(e) {
      e.nodeType === Kr ? e.textContent = "" : e.nodeType === Ra && e.documentElement && e.removeChild(e.documentElement);
    }
    function Qx(e, t, a) {
      return e.nodeType !== Kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Xx(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function Gx(e) {
      return e.nodeType !== xn ? null : e;
    }
    function dE(e) {
      return e.data === Ep;
    }
    function Ag(e) {
      return e.data === Rp;
    }
    function $x(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function Jx(e, t) {
      e._reactRetry = t;
    }
    function Jh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Kr || t === $i)
          break;
        if (t === xn) {
          var a = e.data;
          if (a === Gh || a === Rp || a === Ep)
            break;
          if (a === $h)
            return null;
        }
      }
      return e;
    }
    function wp(e) {
      return Jh(e.nextSibling);
    }
    function Kx(e) {
      return Jh(e.firstChild);
    }
    function Zx(e) {
      return Jh(e.firstChild);
    }
    function eb(e) {
      return Jh(e.nextSibling);
    }
    function tb(e, t, a, i, o, s, p) {
      Cp(s, e), jg(e, a);
      var y;
      {
        var S = o;
        y = S.namespace;
      }
      var x = (s.mode & Ue) !== Ye;
      return cx(e, t, a, y, i, x, p);
    }
    function nb(e, t, a, i) {
      return Cp(a, e), a.mode & Ue, fx(e, t);
    }
    function rb(e, t) {
      Cp(t, e);
    }
    function ab(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === xn) {
          var i = t.data;
          if (i === $h) {
            if (a === 0)
              return wp(t);
            a--;
          } else
            (i === Gh || i === Rp || i === Ep) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function pE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === xn) {
          var i = t.data;
          if (i === Gh || i === Rp || i === Ep) {
            if (a === 0)
              return t;
            a--;
          } else
            i === $h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ib(e) {
      Dn(e);
    }
    function lb(e) {
      Dn(e);
    }
    function ob(e) {
      return e !== "head" && e !== "body";
    }
    function ub(e, t, a, i) {
      var o = !0;
      qh(t.nodeValue, a, i, o);
    }
    function sb(e, t, a, i, o, s) {
      if (t[Xh] !== !0) {
        var p = !0;
        qh(i.nodeValue, o, s, p);
      }
    }
    function cb(e, t) {
      t.nodeType === Kr ? xg(e, t) : t.nodeType === xn || bg(e, t);
    }
    function fb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Kr ? xg(a, t) : t.nodeType === xn || bg(a, t));
      }
    }
    function db(e, t, a, i, o) {
      (o || t[Xh] !== !0) && (i.nodeType === Kr ? xg(a, i) : i.nodeType === xn || bg(a, i));
    }
    function pb(e, t, a) {
      kg(e, t);
    }
    function vb(e, t) {
      Og(e, t);
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
        a !== null && Og(a, t);
      }
    }
    function yb(e, t, a, i, o, s) {
      (s || t[Xh] !== !0) && kg(a, i);
    }
    function gb(e, t, a, i, o) {
      (o || t[Xh] !== !0) && Og(a, i);
    }
    function Sb(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Eb(e) {
      vp(e);
    }
    var Uf = Math.random().toString(36).slice(2), If = "__reactFiber$" + Uf, Ug = "__reactProps$" + Uf, Tp = "__reactContainer$" + Uf, Ig = "__reactEvents$" + Uf, Rb = "__reactListeners$" + Uf, wb = "__reactHandles$" + Uf;
    function Tb(e) {
      delete e[If], delete e[Ug], delete e[Ig], delete e[Rb], delete e[wb];
    }
    function Cp(e, t) {
      t[If] = e;
    }
    function Kh(e, t) {
      t[Tp] = e;
    }
    function vE(e) {
      e[Tp] = null;
    }
    function xp(e) {
      return !!e[Tp];
    }
    function cc(e) {
      var t = e[If];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Tp] || a[If], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = pE(e); o !== null; ) {
              var s = o[If];
              if (s)
                return s;
              o = pE(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Yu(e) {
      var t = e[If] || e[Tp];
      return t && (t.tag === X || t.tag === $ || t.tag === xe || t.tag === W) ? t : null;
    }
    function jf(e) {
      if (e.tag === X || e.tag === $)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Zh(e) {
      return e[Ug] || null;
    }
    function jg(e, t) {
      e[Ug] = t;
    }
    function Cb(e) {
      var t = e[Ig];
      return t === void 0 && (t = e[Ig] = /* @__PURE__ */ new Set()), t;
    }
    var hE = {}, mE = v.ReactDebugCurrentFrame;
    function em(e) {
      if (e) {
        var t = e._owner, a = Ct(e.type, e._source, t ? t.type : null);
        mE.setExtraStackFrame(a);
      } else
        mE.setExtraStackFrame(null);
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
            y && !(y instanceof Error) && (em(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, p, typeof y), em(null)), y instanceof Error && !(y.message in hE) && (hE[y.message] = !0, em(o), g("Failed %s type: %s", a, y.message), em(null));
          }
      }
    }
    var Fg = [], tm;
    tm = [];
    var Bo = -1;
    function Wu(e) {
      return {
        current: e
      };
    }
    function sa(e, t) {
      if (Bo < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== tm[Bo] && g("Unexpected Fiber popped."), e.current = Fg[Bo], Fg[Bo] = null, tm[Bo] = null, Bo--;
    }
    function ca(e, t, a) {
      Bo++, Fg[Bo] = e.current, tm[Bo] = a, e.current = t;
    }
    var Hg;
    Hg = {};
    var pi = {};
    Object.freeze(pi);
    var Vo = Wu(pi), Xl = Wu(!1), Pg = pi;
    function Ff(e, t, a) {
      return a && Gl(t) ? Pg : Vo.current;
    }
    function yE(e, t, a) {
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
          var y = nt(e) || "Unknown";
          sl(i, s, "context", y);
        }
        return o && yE(e, t, s), s;
      }
    }
    function nm() {
      return Xl.current;
    }
    function Gl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function rm(e) {
      sa(Xl, e), sa(Vo, e);
    }
    function Bg(e) {
      sa(Xl, e), sa(Vo, e);
    }
    function gE(e, t, a) {
      {
        if (Vo.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca(Vo, t, e), ca(Xl, a, e);
      }
    }
    function SE(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = nt(e) || "Unknown";
            Hg[s] || (Hg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var p = i.getChildContext();
        for (var y in p)
          if (!(y in o))
            throw new Error((nt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var S = nt(e) || "Unknown";
          sl(o, p, "child context", S);
        }
        return dt({}, a, p);
      }
    }
    function am(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return Pg = Vo.current, ca(Vo, a, e), ca(Xl, Xl.current, e), !0;
      }
    }
    function EE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = SE(e, t, Pg);
          i.__reactInternalMemoizedMergedChildContext = o, sa(Xl, e), sa(Vo, e), ca(Vo, o, e), ca(Xl, a, e);
        } else
          sa(Xl, e), ca(Xl, a, e);
      }
    }
    function xb(e) {
      {
        if (!Ca(e) || e.tag !== A)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case W:
              return t.stateNode.context;
            case A: {
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
    var qu = 0, im = 1, Yo = null, Vg = !1, Yg = !1;
    function RE(e) {
      Yo === null ? Yo = [e] : Yo.push(e);
    }
    function bb(e) {
      Vg = !0, RE(e);
    }
    function wE() {
      Vg && Qu();
    }
    function Qu() {
      if (!Yg && Yo !== null) {
        Yg = !0;
        var e = 0, t = Wa();
        try {
          var a = !0, i = Yo;
          for (On(Un); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Yo = null, Vg = !1;
        } catch (s) {
          throw Yo !== null && (Yo = Yo.slice(e + 1)), Ud(ra, Qu), s;
        } finally {
          On(t), Yg = !1;
        }
      }
      return null;
    }
    var Pf = [], Bf = 0, lm = null, om = 0, Mi = [], zi = 0, fc = null, Wo = 1, qo = "";
    function kb(e) {
      return pc(), (e.flags & eh) !== Ve;
    }
    function Ob(e) {
      return pc(), om;
    }
    function Db() {
      var e = qo, t = Wo, a = t & ~_b(t);
      return a.toString(32) + e;
    }
    function dc(e, t) {
      pc(), Pf[Bf++] = om, Pf[Bf++] = lm, lm = e, om = t;
    }
    function TE(e, t, a) {
      pc(), Mi[zi++] = Wo, Mi[zi++] = qo, Mi[zi++] = fc, fc = e;
      var i = Wo, o = qo, s = um(i) - 1, p = i & ~(1 << s), y = a + 1, S = um(t) + s;
      if (S > 30) {
        var x = s - s % 5, b = (1 << x) - 1, z = (p & b).toString(32), N = p >> x, V = s - x, Y = um(t) + V, J = y << V, we = J | N, We = z + o;
        Wo = 1 << Y | we, qo = We;
      } else {
        var Ie = y << s, kt = Ie | p, Tt = o;
        Wo = 1 << S | kt, qo = Tt;
      }
    }
    function Wg(e) {
      pc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        dc(e, a), TE(e, a, i);
      }
    }
    function um(e) {
      return 32 - Ps(e);
    }
    function _b(e) {
      return 1 << um(e) - 1;
    }
    function qg(e) {
      for (; e === lm; )
        lm = Pf[--Bf], Pf[Bf] = null, om = Pf[--Bf], Pf[Bf] = null;
      for (; e === fc; )
        fc = Mi[--zi], Mi[zi] = null, qo = Mi[--zi], Mi[zi] = null, Wo = Mi[--zi], Mi[zi] = null;
    }
    function Lb() {
      return pc(), fc !== null ? {
        id: Wo,
        overflow: qo
      } : null;
    }
    function Nb(e, t) {
      pc(), Mi[zi++] = Wo, Mi[zi++] = qo, Mi[zi++] = fc, Wo = t.id, qo = t.overflow, fc = e;
    }
    function pc() {
      Ir() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Ai = null, cl = !1, vc = !1, Xu = null;
    function Mb() {
      cl && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function CE() {
      vc = !0;
    }
    function zb() {
      return vc;
    }
    function Ab(e) {
      var t = e.stateNode.containerInfo;
      return Ai = Zx(t), Ur = e, cl = !0, Xu = null, vc = !1, !0;
    }
    function Ub(e, t, a) {
      return Ai = eb(t), Ur = e, cl = !0, Xu = null, vc = !1, a !== null && Nb(e, a), !0;
    }
    function xE(e, t) {
      switch (e.tag) {
        case W: {
          cb(e.stateNode.containerInfo, t);
          break;
        }
        case X: {
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
    function bE(e, t) {
      xE(e, t);
      var a = FD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Mt) : i.push(a);
    }
    function Qg(e, t) {
      {
        if (vc)
          return;
        switch (e.tag) {
          case W: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case X:
                var i = t.type;
                t.pendingProps, pb(a, i);
                break;
              case $:
                var o = t.pendingProps;
                vb(a, o);
                break;
            }
            break;
          }
          case X: {
            var s = e.type, p = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case X: {
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
              case $: {
                var z = t.pendingProps, N = (e.mode & Ue) !== Ye;
                gb(
                  s,
                  p,
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
          case xe: {
            var V = e.memoizedState, Y = V.dehydrated;
            if (Y !== null)
              switch (t.tag) {
                case X:
                  var J = t.type;
                  t.pendingProps, hb(Y, J);
                  break;
                case $:
                  var we = t.pendingProps;
                  mb(Y, we);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function kE(e, t) {
      t.flags = t.flags & ~Ci | Jt, Qg(e, t);
    }
    function OE(e, t) {
      switch (e.tag) {
        case X: {
          var a = e.type;
          e.pendingProps;
          var i = Qx(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Ai = Kx(i), !0) : !1;
        }
        case $: {
          var o = e.pendingProps, s = Xx(t, o);
          return s !== null ? (e.stateNode = s, Ur = e, Ai = null, !0) : !1;
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
            var S = HD(p);
            return S.return = e, e.child = S, Ur = e, Ai = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Xg(e) {
      return (e.mode & Ue) !== Ye && (e.flags & rt) === Ve;
    }
    function Gg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function $g(e) {
      if (cl) {
        var t = Ai;
        if (!t) {
          Xg(e) && (Qg(Ur, e), Gg()), kE(Ur, e), cl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!OE(e, t)) {
          Xg(e) && (Qg(Ur, e), Gg()), t = wp(a);
          var i = Ur;
          if (!t || !OE(e, t)) {
            kE(Ur, e), cl = !1, Ur = e;
            return;
          }
          bE(i, a);
        }
      }
    }
    function Ib(e, t, a) {
      var i = e.stateNode, o = !vc, s = tb(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function jb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = nb(t, a, e);
      if (i) {
        var o = Ur;
        if (o !== null)
          switch (o.tag) {
            case W: {
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
            case X: {
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
    function Fb(e) {
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
    function DE(e) {
      for (var t = e.return; t !== null && t.tag !== X && t.tag !== W && t.tag !== xe; )
        t = t.return;
      Ur = t;
    }
    function sm(e) {
      if (e !== Ur)
        return !1;
      if (!cl)
        return DE(e), cl = !0, !1;
      if (e.tag !== W && (e.tag !== X || ob(e.type) && !Lg(e.type, e.memoizedProps))) {
        var t = Ai;
        if (t)
          if (Xg(e))
            _E(e), Gg();
          else
            for (; t; )
              bE(e, t), t = wp(t);
      }
      return DE(e), e.tag === xe ? Ai = Hb(e) : Ai = Ur ? wp(e.stateNode) : null, !0;
    }
    function Pb() {
      return cl && Ai !== null;
    }
    function _E(e) {
      for (var t = Ai; t; )
        xE(e, t), t = wp(t);
    }
    function Vf() {
      Ur = null, Ai = null, cl = !1, vc = !1;
    }
    function LE() {
      Xu !== null && (xw(Xu), Xu = null);
    }
    function Ir() {
      return cl;
    }
    function Jg(e) {
      Xu === null ? Xu = [e] : Xu.push(e);
    }
    var Bb = v.ReactCurrentBatchConfig, Vb = null;
    function Yb() {
      return Bb.transition;
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
      var Wb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & bn && (t = a), a = a.return;
        return t;
      }, hc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, bp = [], kp = [], Op = [], Dp = [], _p = [], Lp = [], mc = /* @__PURE__ */ new Set();
      fl.recordUnsafeLifecycleWarnings = function(e, t) {
        mc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && bp.push(e), e.mode & bn && typeof t.UNSAFE_componentWillMount == "function" && kp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & bn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Dp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && _p.push(e), e.mode & bn && typeof t.UNSAFE_componentWillUpdate == "function" && Lp.push(e));
      }, fl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        bp.length > 0 && (bp.forEach(function(N) {
          e.add(nt(N) || "Component"), mc.add(N.type);
        }), bp = []);
        var t = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(N) {
          t.add(nt(N) || "Component"), mc.add(N.type);
        }), kp = []);
        var a = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(N) {
          a.add(nt(N) || "Component"), mc.add(N.type);
        }), Op = []);
        var i = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(N) {
          i.add(nt(N) || "Component"), mc.add(N.type);
        }), Dp = []);
        var o = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(N) {
          o.add(nt(N) || "Component"), mc.add(N.type);
        }), _p = []);
        var s = /* @__PURE__ */ new Set();
        if (Lp.length > 0 && (Lp.forEach(function(N) {
          s.add(nt(N) || "Component"), mc.add(N.type);
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
          R(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var b = hc(a);
          R(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (o.size > 0) {
          var z = hc(o);
          R(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var cm = /* @__PURE__ */ new Map(), NE = /* @__PURE__ */ new Set();
      fl.recordLegacyContextWarning = function(e, t) {
        var a = Wb(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!NE.has(e.type)) {
          var i = cm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cm.set(a, i)), i.push(e));
        }
      }, fl.flushLegacyContextWarning = function() {
        cm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(nt(s) || "Component"), NE.add(s.type);
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
        bp = [], kp = [], Op = [], Dp = [], _p = [], Lp = [], cm = /* @__PURE__ */ new Map();
      };
    }
    function dl(e, t) {
      if (e && e.defaultProps) {
        var a = dt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var Kg = Wu(null), Zg;
    Zg = {};
    var fm = null, Yf = null, e0 = null, dm = !1;
    function pm() {
      fm = null, Yf = null, e0 = null, dm = !1;
    }
    function ME() {
      dm = !0;
    }
    function zE() {
      dm = !1;
    }
    function AE(e, t, a) {
      ca(Kg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Zg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Zg;
    }
    function t0(e, t) {
      var a = Kg.current;
      sa(Kg, t), e._currentValue = a;
    }
    function n0(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (zo(i.childLanes, t) ? o !== null && !zo(o.childLanes, t) && (o.childLanes = ut(o.childLanes, t)) : (i.childLanes = ut(i.childLanes, t), o !== null && (o.childLanes = ut(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function qb(e, t, a) {
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
              if (i.tag === A) {
                var y = bu(a), S = Qo(an, y);
                S.tag = hm;
                var x = i.updateQueue;
                if (x !== null) {
                  var b = x.shared, z = b.pending;
                  z === null ? S.next = S : (S.next = z.next, z.next = S), b.pending = S;
                }
              }
              i.lanes = ut(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = ut(N.lanes, a)), n0(i.return, a, e), s.lanes = ut(s.lanes, a);
              break;
            }
            p = p.next;
          }
        } else if (i.tag === Fe)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === qt) {
          var V = i.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = ut(V.lanes, a);
          var Y = V.alternate;
          Y !== null && (Y.lanes = ut(Y.lanes, a)), n0(V, a, e), o = i.sibling;
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
            var J = o.sibling;
            if (J !== null) {
              J.return = o.return, o = J;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Wf(e, t) {
      fm = e, Yf = null, e0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Wp(), a.firstContext = null);
      }
    }
    function rr(e) {
      dm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (e0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Yf === null) {
          if (fm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Yf = a, fm.dependencies = {
            lanes: ee,
            firstContext: a
          };
        } else
          Yf = Yf.next = a;
      }
      return t;
    }
    var yc = null;
    function r0(e) {
      yc === null ? yc = [e] : yc.push(e);
    }
    function Xb() {
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
    function UE(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, r0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, vm(e, i);
    }
    function Gb(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, r0(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function $b(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, r0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, vm(e, i);
    }
    function Ja(e, t) {
      return vm(e, t);
    }
    var Jb = vm;
    function vm(e, t) {
      e.lanes = ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ut(a.lanes, t)), a === null && (e.flags & (Jt | Ci)) !== Ve && Iw(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = ut(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = ut(a.childLanes, t) : (o.flags & (Jt | Ci)) !== Ve && Iw(e), i = o, o = o.return;
      if (i.tag === W) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var IE = 0, jE = 1, hm = 2, a0 = 3, mm = !1, i0, ym;
    i0 = !1, ym = null;
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
    function FE(e, t) {
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
        tag: IE,
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
      if (ym === o && !i0 && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), i0 = !0), JO()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, Jb(e, a);
      } else
        return $b(e, o, t, a);
    }
    function gm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Qd(a)) {
          var s = o.lanes;
          s = sf(s, e.pendingLanes);
          var p = ut(s, a);
          o.lanes = p, Xd(e, p);
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
    function Kb(e, t, a, i, o, s) {
      switch (a.tag) {
        case jE: {
          var p = a.payload;
          if (typeof p == "function") {
            ME();
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
              zE();
            }
            return y;
          }
          return p;
        }
        case a0:
          e.flags = e.flags & ~cr | rt;
        case IE: {
          var S = a.payload, x;
          if (typeof S == "function") {
            ME(), x = S.call(s, i, o);
            {
              if (e.mode & bn) {
                rn(!0);
                try {
                  S.call(s, i, o);
                } finally {
                  rn(!1);
                }
              }
              zE();
            }
          } else
            x = S;
          return x == null ? i : dt({}, i, x);
        }
        case hm:
          return mm = !0, i;
      }
      return i;
    }
    function Sm(e, t, a, i) {
      var o = e.updateQueue;
      mm = !1, ym = o.shared;
      var s = o.firstBaseUpdate, p = o.lastBaseUpdate, y = o.shared.pending;
      if (y !== null) {
        o.shared.pending = null;
        var S = y, x = S.next;
        S.next = null, p === null ? s = x : p.next = x, p = S;
        var b = e.alternate;
        if (b !== null) {
          var z = b.updateQueue, N = z.lastBaseUpdate;
          N !== p && (N === null ? z.firstBaseUpdate = x : N.next = x, z.lastBaseUpdate = S);
        }
      }
      if (s !== null) {
        var V = o.baseState, Y = ee, J = null, we = null, We = null, Ie = s;
        do {
          var kt = Ie.lane, Tt = Ie.eventTime;
          if (zo(i, kt)) {
            if (We !== null) {
              var K = {
                eventTime: Tt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zn,
                tag: Ie.tag,
                payload: Ie.payload,
                callback: Ie.callback,
                next: null
              };
              We = We.next = K;
            }
            V = Kb(e, o, Ie, V, t, a);
            var H = Ie.callback;
            if (H !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ie.lane !== zn) {
              e.flags |= Zn;
              var se = o.effects;
              se === null ? o.effects = [Ie] : se.push(Ie);
            }
          } else {
            var F = {
              eventTime: Tt,
              lane: kt,
              tag: Ie.tag,
              payload: Ie.payload,
              callback: Ie.callback,
              next: null
            };
            We === null ? (we = We = F, J = V) : We = We.next = F, Y = ut(Y, kt);
          }
          if (Ie = Ie.next, Ie === null) {
            if (y = o.shared.pending, y === null)
              break;
            var Te = y, ye = Te.next;
            Te.next = null, Ie = ye, o.lastBaseUpdate = Te, o.shared.pending = null;
          }
        } while (!0);
        We === null && (J = V), o.baseState = J, o.firstBaseUpdate = we, o.lastBaseUpdate = We;
        var et = o.shared.interleaved;
        if (et !== null) {
          var it = et;
          do
            Y = ut(Y, it.lane), it = it.next;
          while (it !== et);
        } else
          s === null && (o.shared.lanes = ee);
        rv(Y), e.lanes = Y, e.memoizedState = V;
      }
      ym = null;
    }
    function Zb(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function HE() {
      mm = !1;
    }
    function Em() {
      return mm;
    }
    function PE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], p = s.callback;
          p !== null && (s.callback = null, Zb(p, a));
        }
    }
    var u0 = {}, BE = new f.Component().refs, s0, c0, f0, d0, p0, VE, Rm, v0, h0, m0;
    {
      s0 = /* @__PURE__ */ new Set(), c0 = /* @__PURE__ */ new Set(), f0 = /* @__PURE__ */ new Set(), d0 = /* @__PURE__ */ new Set(), v0 = /* @__PURE__ */ new Set(), p0 = /* @__PURE__ */ new Set(), h0 = /* @__PURE__ */ new Set(), m0 = /* @__PURE__ */ new Set();
      var YE = /* @__PURE__ */ new Set();
      Rm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          YE.has(a) || (YE.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, VE = function(e, t) {
        if (t === void 0) {
          var a = Dt(e) || "Component";
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
        VE(t, s);
      }
      var p = s == null ? o : dt({}, o, s);
      if (e.memoizedState = p, e.lanes === ee) {
        var y = e.updateQueue;
        y.baseState = p;
      }
    }
    var g0 = {
      isMounted: xa,
      enqueueSetState: function(e, t, a) {
        var i = Ti(e), o = _a(), s = rs(i), p = Qo(o, s);
        p.payload = t, a != null && (Rm(a, "setState"), p.callback = a);
        var y = Gu(i, p, s);
        y !== null && (Er(y, i, s, o), gm(y, i, s)), qc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ti(e), o = _a(), s = rs(i), p = Qo(o, s);
        p.tag = jE, p.payload = t, a != null && (Rm(a, "replaceState"), p.callback = a);
        var y = Gu(i, p, s);
        y !== null && (Er(y, i, s, o), gm(y, i, s)), qc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ti(e), i = _a(), o = rs(a), s = Qo(i, o);
        s.tag = hm, t != null && (Rm(t, "forceUpdate"), s.callback = t);
        var p = Gu(a, s, o);
        p !== null && (Er(p, a, o, i), gm(p, a, o)), wu(a, o);
      }
    };
    function WE(e, t, a, i, o, s, p) {
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
          S === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Dt(t) || "Component");
        }
        return S;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Je(a, i) || !Je(o, s) : !0;
    }
    function ek(e, t, a) {
      var i = e.stateNode;
      {
        var o = Dt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !h0.has(t) && (h0.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Dt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var p = i.props !== a;
        i.props !== void 0 && p && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !f0.has(t) && (f0.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Dt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var y = i.state;
        y && (typeof y != "object" || _t(y)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function qE(e, t) {
      t.updater = g0, e.stateNode = t, jc(t, e), t._reactInternalInstance = u0;
    }
    function QE(e, t, a) {
      var i = !1, o = pi, s = pi, p = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          p === null || p !== void 0 && p.$$typeof === pe && p._context === void 0
        );
        if (!y && !m0.has(t)) {
          m0.add(t);
          var S = "";
          p === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? S = " However, it is set to a " + typeof p + "." : p.$$typeof === ie ? S = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Dt(t) || "Component", S);
        }
      }
      if (typeof p == "object" && p !== null)
        s = rr(p);
      else {
        o = Ff(e, t, !0);
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
      var z = e.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
      qE(e, b);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var N = Dt(t) || "Component";
          c0.has(N) || (c0.add(N), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, b.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
          var V = null, Y = null, J = null;
          if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? J = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (J = "UNSAFE_componentWillUpdate"), V !== null || Y !== null || J !== null) {
            var we = Dt(t) || "Component", We = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            d0.has(we) || (d0.add(we), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, we, We, V !== null ? `
  ` + V : "", Y !== null ? `
  ` + Y : "", J !== null ? `
  ` + J : ""));
          }
        }
      }
      return i && yE(e, o, s), b;
    }
    function tk(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", nt(e) || "Component"), g0.enqueueReplaceState(t, t.state, null));
    }
    function XE(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = nt(e) || "Component";
          s0.has(s) || (s0.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        g0.enqueueReplaceState(t, t.state, null);
      }
    }
    function S0(e, t, a, i) {
      ek(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = BE, l0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = rr(s);
      else {
        var p = Ff(e, t, !0);
        o.context = Hf(e, p);
      }
      {
        if (o.state === a) {
          var y = Dt(t) || "Component";
          v0.has(y) || (v0.add(y), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & bn && fl.recordLegacyContextWarning(e, o), fl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var S = t.getDerivedStateFromProps;
      if (typeof S == "function" && (y0(e, t, S, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (tk(e, o), Sm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var x = ze;
        x |= Ha, (e.mode & Va) !== Ye && (x |= Pa), e.flags |= x;
      }
    }
    function nk(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var p = o.context, y = t.contextType, S = pi;
      if (typeof y == "object" && y !== null)
        S = rr(y);
      else {
        var x = Ff(e, t, !0);
        S = Hf(e, x);
      }
      var b = t.getDerivedStateFromProps, z = typeof b == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !z && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || p !== S) && XE(e, o, a, S), HE();
      var N = e.memoizedState, V = o.state = N;
      if (Sm(e, a, o, i), V = e.memoizedState, s === a && N === V && !nm() && !Em()) {
        if (typeof o.componentDidMount == "function") {
          var Y = ze;
          Y |= Ha, (e.mode & Va) !== Ye && (Y |= Pa), e.flags |= Y;
        }
        return !1;
      }
      typeof b == "function" && (y0(e, t, b, a), V = e.memoizedState);
      var J = Em() || WE(e, t, s, a, N, V, S);
      if (J) {
        if (!z && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var we = ze;
          we |= Ha, (e.mode & Va) !== Ye && (we |= Pa), e.flags |= we;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var We = ze;
          We |= Ha, (e.mode & Va) !== Ye && (We |= Pa), e.flags |= We;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return o.props = a, o.state = V, o.context = S, J;
    }
    function rk(e, t, a, i, o) {
      var s = t.stateNode;
      FE(e, t);
      var p = t.memoizedProps, y = t.type === t.elementType ? p : dl(t.type, p);
      s.props = y;
      var S = t.pendingProps, x = s.context, b = a.contextType, z = pi;
      if (typeof b == "object" && b !== null)
        z = rr(b);
      else {
        var N = Ff(t, a, !0);
        z = Hf(t, N);
      }
      var V = a.getDerivedStateFromProps, Y = typeof V == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (p !== S || x !== z) && XE(t, s, i, z), HE();
      var J = t.memoizedState, we = s.state = J;
      if (Sm(t, i, s, o), we = t.memoizedState, p === S && J === we && !nm() && !Em() && !_)
        return typeof s.componentDidUpdate == "function" && (p !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Bn), !1;
      typeof V == "function" && (y0(t, a, V, i), we = t.memoizedState);
      var We = Em() || WE(t, a, y, i, J, we, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      _;
      return We ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, we, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, we, z)), typeof s.componentDidUpdate == "function" && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Bn)) : (typeof s.componentDidUpdate == "function" && (p !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= ze), typeof s.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Bn), t.memoizedProps = i, t.memoizedState = we), s.props = i, s.state = we, s.context = z, We;
    }
    var E0, R0, w0, T0, C0, GE = function(e, t) {
    };
    E0 = !1, R0 = !1, w0 = {}, T0 = {}, C0 = {}, GE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = nt(t) || "Component";
        T0[a] || (T0[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Np(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & bn || ot) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = nt(e) || "Component";
          w0[o] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), w0[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, p;
          if (s) {
            var y = s;
            if (y.tag !== A)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            p = y.stateNode;
          }
          if (!p)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var S = p;
          qn(i, "ref");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var b = function(z) {
            var N = S.refs;
            N === BE && (N = S.refs = {}), z === null ? delete N[x] : N[x] = z;
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
    function wm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Tm(e) {
      {
        var t = nt(e) || "Component";
        if (C0[t])
          return;
        C0[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function $E(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function JE(e) {
      function t(F, K) {
        if (e) {
          var H = F.deletions;
          H === null ? (F.deletions = [K], F.flags |= Mt) : H.push(K);
        }
      }
      function a(F, K) {
        if (!e)
          return null;
        for (var H = K; H !== null; )
          t(F, H), H = H.sibling;
        return null;
      }
      function i(F, K) {
        for (var H = /* @__PURE__ */ new Map(), se = K; se !== null; )
          se.key !== null ? H.set(se.key, se) : H.set(se.index, se), se = se.sibling;
        return H;
      }
      function o(F, K) {
        var H = xc(F, K);
        return H.index = 0, H.sibling = null, H;
      }
      function s(F, K, H) {
        if (F.index = H, !e)
          return F.flags |= eh, K;
        var se = F.alternate;
        if (se !== null) {
          var Te = se.index;
          return Te < K ? (F.flags |= Jt, K) : Te;
        } else
          return F.flags |= Jt, K;
      }
      function p(F) {
        return e && F.alternate === null && (F.flags |= Jt), F;
      }
      function y(F, K, H, se) {
        if (K === null || K.tag !== $) {
          var Te = JS(H, F.mode, se);
          return Te.return = F, Te;
        } else {
          var ye = o(K, H);
          return ye.return = F, ye;
        }
      }
      function S(F, K, H, se) {
        var Te = H.type;
        if (Te === Ea)
          return b(F, K, H.props.children, se, H.key);
        if (K !== null && (K.elementType === Te || // Keep this check inline so it only runs on the false path:
        Pw(K, H) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Te == "object" && Te !== null && Te.$$typeof === Be && $E(Te) === K.type)) {
          var ye = o(K, H.props);
          return ye.ref = Np(F, K, H), ye.return = F, ye._debugSource = H._source, ye._debugOwner = H._owner, ye;
        }
        var et = $S(H, F.mode, se);
        return et.ref = Np(F, K, H), et.return = F, et;
      }
      function x(F, K, H, se) {
        if (K === null || K.tag !== oe || K.stateNode.containerInfo !== H.containerInfo || K.stateNode.implementation !== H.implementation) {
          var Te = KS(H, F.mode, se);
          return Te.return = F, Te;
        } else {
          var ye = o(K, H.children || []);
          return ye.return = F, ye;
        }
      }
      function b(F, K, H, se, Te) {
        if (K === null || K.tag !== Ce) {
          var ye = is(H, F.mode, se, Te);
          return ye.return = F, ye;
        } else {
          var et = o(K, H);
          return et.return = F, et;
        }
      }
      function z(F, K, H) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var se = JS("" + K, F.mode, H);
          return se.return = F, se;
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case qr: {
              var Te = $S(K, F.mode, H);
              return Te.ref = Np(F, null, K), Te.return = F, Te;
            }
            case Qr: {
              var ye = KS(K, F.mode, H);
              return ye.return = F, ye;
            }
            case Be: {
              var et = K._payload, it = K._init;
              return z(F, it(et), H);
            }
          }
          if (_t(K) || gi(K)) {
            var Xt = is(K, F.mode, H, null);
            return Xt.return = F, Xt;
          }
          wm(F, K);
        }
        return typeof K == "function" && Tm(F), null;
      }
      function N(F, K, H, se) {
        var Te = K !== null ? K.key : null;
        if (typeof H == "string" && H !== "" || typeof H == "number")
          return Te !== null ? null : y(F, K, "" + H, se);
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case qr:
              return H.key === Te ? S(F, K, H, se) : null;
            case Qr:
              return H.key === Te ? x(F, K, H, se) : null;
            case Be: {
              var ye = H._payload, et = H._init;
              return N(F, K, et(ye), se);
            }
          }
          if (_t(H) || gi(H))
            return Te !== null ? null : b(F, K, H, se, null);
          wm(F, H);
        }
        return typeof H == "function" && Tm(F), null;
      }
      function V(F, K, H, se, Te) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var ye = F.get(H) || null;
          return y(K, ye, "" + se, Te);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case qr: {
              var et = F.get(se.key === null ? H : se.key) || null;
              return S(K, et, se, Te);
            }
            case Qr: {
              var it = F.get(se.key === null ? H : se.key) || null;
              return x(K, it, se, Te);
            }
            case Be:
              var Xt = se._payload, At = se._init;
              return V(F, K, H, At(Xt), Te);
          }
          if (_t(se) || gi(se)) {
            var Jn = F.get(H) || null;
            return b(K, Jn, se, Te, null);
          }
          wm(K, se);
        }
        return typeof se == "function" && Tm(K), null;
      }
      function Y(F, K, H) {
        {
          if (typeof F != "object" || F === null)
            return K;
          switch (F.$$typeof) {
            case qr:
            case Qr:
              GE(F, H);
              var se = F.key;
              if (typeof se != "string")
                break;
              if (K === null) {
                K = /* @__PURE__ */ new Set(), K.add(se);
                break;
              }
              if (!K.has(se)) {
                K.add(se);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case Be:
              var Te = F._payload, ye = F._init;
              Y(ye(Te), K, H);
              break;
          }
        }
        return K;
      }
      function J(F, K, H, se) {
        for (var Te = null, ye = 0; ye < H.length; ye++) {
          var et = H[ye];
          Te = Y(et, Te, F);
        }
        for (var it = null, Xt = null, At = K, Jn = 0, Ut = 0, Yn = null; At !== null && Ut < H.length; Ut++) {
          At.index > Ut ? (Yn = At, At = null) : Yn = At.sibling;
          var da = N(F, At, H[Ut], se);
          if (da === null) {
            At === null && (At = Yn);
            break;
          }
          e && At && da.alternate === null && t(F, At), Jn = s(da, Jn, Ut), Xt === null ? it = da : Xt.sibling = da, Xt = da, At = Yn;
        }
        if (Ut === H.length) {
          if (a(F, At), Ir()) {
            var Yr = Ut;
            dc(F, Yr);
          }
          return it;
        }
        if (At === null) {
          for (; Ut < H.length; Ut++) {
            var hi = z(F, H[Ut], se);
            hi !== null && (Jn = s(hi, Jn, Ut), Xt === null ? it = hi : Xt.sibling = hi, Xt = hi);
          }
          if (Ir()) {
            var La = Ut;
            dc(F, La);
          }
          return it;
        }
        for (var Na = i(F, At); Ut < H.length; Ut++) {
          var pa = V(Na, F, Ut, H[Ut], se);
          pa !== null && (e && pa.alternate !== null && Na.delete(pa.key === null ? Ut : pa.key), Jn = s(pa, Jn, Ut), Xt === null ? it = pa : Xt.sibling = pa, Xt = pa);
        }
        if (e && Na.forEach(function(ud) {
          return t(F, ud);
        }), Ir()) {
          var Zo = Ut;
          dc(F, Zo);
        }
        return it;
      }
      function we(F, K, H, se) {
        var Te = gi(H);
        if (typeof Te != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          H[Symbol.toStringTag] === "Generator" && (R0 || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), R0 = !0), H.entries === Te && (E0 || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), E0 = !0);
          var ye = Te.call(H);
          if (ye)
            for (var et = null, it = ye.next(); !it.done; it = ye.next()) {
              var Xt = it.value;
              et = Y(Xt, et, F);
            }
        }
        var At = Te.call(H);
        if (At == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, Ut = null, Yn = K, da = 0, Yr = 0, hi = null, La = At.next(); Yn !== null && !La.done; Yr++, La = At.next()) {
          Yn.index > Yr ? (hi = Yn, Yn = null) : hi = Yn.sibling;
          var Na = N(F, Yn, La.value, se);
          if (Na === null) {
            Yn === null && (Yn = hi);
            break;
          }
          e && Yn && Na.alternate === null && t(F, Yn), da = s(Na, da, Yr), Ut === null ? Jn = Na : Ut.sibling = Na, Ut = Na, Yn = hi;
        }
        if (La.done) {
          if (a(F, Yn), Ir()) {
            var pa = Yr;
            dc(F, pa);
          }
          return Jn;
        }
        if (Yn === null) {
          for (; !La.done; Yr++, La = At.next()) {
            var Zo = z(F, La.value, se);
            Zo !== null && (da = s(Zo, da, Yr), Ut === null ? Jn = Zo : Ut.sibling = Zo, Ut = Zo);
          }
          if (Ir()) {
            var ud = Yr;
            dc(F, ud);
          }
          return Jn;
        }
        for (var uv = i(F, Yn); !La.done; Yr++, La = At.next()) {
          var ro = V(uv, F, Yr, La.value, se);
          ro !== null && (e && ro.alternate !== null && uv.delete(ro.key === null ? Yr : ro.key), da = s(ro, da, Yr), Ut === null ? Jn = ro : Ut.sibling = ro, Ut = ro);
        }
        if (e && uv.forEach(function(y_) {
          return t(F, y_);
        }), Ir()) {
          var m_ = Yr;
          dc(F, m_);
        }
        return Jn;
      }
      function We(F, K, H, se) {
        if (K !== null && K.tag === $) {
          a(F, K.sibling);
          var Te = o(K, H);
          return Te.return = F, Te;
        }
        a(F, K);
        var ye = JS(H, F.mode, se);
        return ye.return = F, ye;
      }
      function Ie(F, K, H, se) {
        for (var Te = H.key, ye = K; ye !== null; ) {
          if (ye.key === Te) {
            var et = H.type;
            if (et === Ea) {
              if (ye.tag === Ce) {
                a(F, ye.sibling);
                var it = o(ye, H.props.children);
                return it.return = F, it._debugSource = H._source, it._debugOwner = H._owner, it;
              }
            } else if (ye.elementType === et || // Keep this check inline so it only runs on the false path:
            Pw(ye, H) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof et == "object" && et !== null && et.$$typeof === Be && $E(et) === ye.type) {
              a(F, ye.sibling);
              var Xt = o(ye, H.props);
              return Xt.ref = Np(F, ye, H), Xt.return = F, Xt._debugSource = H._source, Xt._debugOwner = H._owner, Xt;
            }
            a(F, ye);
            break;
          } else
            t(F, ye);
          ye = ye.sibling;
        }
        if (H.type === Ea) {
          var At = is(H.props.children, F.mode, se, H.key);
          return At.return = F, At;
        } else {
          var Jn = $S(H, F.mode, se);
          return Jn.ref = Np(F, K, H), Jn.return = F, Jn;
        }
      }
      function kt(F, K, H, se) {
        for (var Te = H.key, ye = K; ye !== null; ) {
          if (ye.key === Te)
            if (ye.tag === oe && ye.stateNode.containerInfo === H.containerInfo && ye.stateNode.implementation === H.implementation) {
              a(F, ye.sibling);
              var et = o(ye, H.children || []);
              return et.return = F, et;
            } else {
              a(F, ye);
              break;
            }
          else
            t(F, ye);
          ye = ye.sibling;
        }
        var it = KS(H, F.mode, se);
        return it.return = F, it;
      }
      function Tt(F, K, H, se) {
        var Te = typeof H == "object" && H !== null && H.type === Ea && H.key === null;
        if (Te && (H = H.props.children), typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case qr:
              return p(Ie(F, K, H, se));
            case Qr:
              return p(kt(F, K, H, se));
            case Be:
              var ye = H._payload, et = H._init;
              return Tt(F, K, et(ye), se);
          }
          if (_t(H))
            return J(F, K, H, se);
          if (gi(H))
            return we(F, K, H, se);
          wm(F, H);
        }
        return typeof H == "string" && H !== "" || typeof H == "number" ? p(We(F, K, "" + H, se)) : (typeof H == "function" && Tm(F), a(F, K));
      }
      return Tt;
    }
    var qf = JE(!0), KE = JE(!1);
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
        zD(a, t), a = a.sibling;
    }
    var Mp = {}, $u = Wu(Mp), zp = Wu(Mp), Cm = Wu(Mp);
    function xm(e) {
      if (e === Mp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function ZE() {
      var e = xm(Cm.current);
      return e;
    }
    function x0(e, t) {
      ca(Cm, t, e), ca(zp, e, e), ca($u, Mp, e);
      var a = Sx(t);
      sa($u, e), ca($u, a, e);
    }
    function Qf(e) {
      sa($u, e), sa(zp, e), sa(Cm, e);
    }
    function b0() {
      var e = xm($u.current);
      return e;
    }
    function eR(e) {
      xm(Cm.current);
      var t = xm($u.current), a = Ex(t, e.type);
      t !== a && (ca(zp, e, e), ca($u, a, e));
    }
    function k0(e) {
      zp.current === e && (sa($u, e), sa(zp, e));
    }
    var lk = 0, tR = 1, nR = 1, Ap = 2, pl = Wu(lk);
    function O0(e, t) {
      return (e & t) !== 0;
    }
    function Xf(e) {
      return e & tR;
    }
    function D0(e, t) {
      return e & tR | t;
    }
    function ok(e, t) {
      return e | t;
    }
    function Ju(e, t) {
      ca(pl, t, e);
    }
    function Gf(e) {
      sa(pl, e);
    }
    function uk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function bm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === xe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || dE(i) || Ag(i))
              return t;
          }
        } else if (t.tag === Et && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & rt) !== Ve;
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
    var Ka = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), $l = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), jr = (
      /*   */
      8
    ), _0 = [];
    function L0() {
      for (var e = 0; e < _0.length; e++) {
        var t = _0[e];
        t._workInProgressVersionPrimary = null;
      }
      _0.length = 0;
    }
    function sk(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ee = v.ReactCurrentDispatcher, Up = v.ReactCurrentBatchConfig, N0, $f;
    N0 = /* @__PURE__ */ new Set();
    var gc = ee, Qt = null, hr = null, mr = null, km = !1, Ip = !1, jp = 0, ck = 0, fk = 25, ne = null, Ui = null, Ku = -1, M0 = !1;
    function Pt() {
      {
        var e = ne;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function ve() {
      {
        var e = ne;
        Ui !== null && (Ku++, Ui[Ku] !== e && dk(e));
      }
    }
    function Jf(e) {
      e != null && !_t(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function dk(e) {
      {
        var t = nt(Qt);
        if (!N0.has(t) && (N0.add(t), Ui !== null)) {
          for (var a = "", i = 30, o = 0; o <= Ku; o++) {
            for (var s = Ui[o], p = o === Ku ? e : s, y = o + 1 + ". " + s; y.length < i; )
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
    function z0(e, t) {
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
    function Kf(e, t, a, i, o, s) {
      gc = s, Qt = t, Ui = e !== null ? e._debugHookTypes : null, Ku = -1, M0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? Ee.current = CR : Ui !== null ? Ee.current = TR : Ee.current = wR;
      var p = a(i, o);
      if (Ip) {
        var y = 0;
        do {
          if (Ip = !1, jp = 0, y >= fk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, M0 = !1, hr = null, mr = null, t.updateQueue = null, Ku = -1, Ee.current = xR, p = a(i, o);
        } while (Ip);
      }
      Ee.current = Hm, t._debugHookTypes = Ui;
      var S = hr !== null && hr.next !== null;
      if (gc = ee, Qt = null, hr = null, mr = null, ne = null, Ui = null, Ku = -1, e !== null && (e.flags & fr) !== (t.flags & fr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ue) !== Ye && g("Internal React error: Expected static flag was missing. Please notify the React team."), km = !1, S)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return p;
    }
    function Zf() {
      var e = jp !== 0;
      return jp = 0, e;
    }
    function rR(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Va) !== Ye ? t.flags &= ~(Co | Pa | Zr | ze) : t.flags &= ~(Zr | ze), e.lanes = Gs(e.lanes, a);
    }
    function aR() {
      if (Ee.current = Hm, km) {
        for (var e = Qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        km = !1;
      }
      gc = ee, Qt = null, hr = null, mr = null, Ui = null, Ku = -1, ne = null, yR = !1, Ip = !1, jp = 0;
    }
    function Jl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? Qt.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function Ii() {
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
    function iR() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function A0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function U0(e, t, a) {
      var i = Jl(), o;
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
    function I0(e, t, a) {
      var i = Ii(), o = i.queue;
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
        var b = p.next, z = s.baseState, N = null, V = null, Y = null, J = b;
        do {
          var we = J.lane;
          if (zo(gc, we)) {
            if (Y !== null) {
              var Ie = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: zn,
                action: J.action,
                hasEagerState: J.hasEagerState,
                eagerState: J.eagerState,
                next: null
              };
              Y = Y.next = Ie;
            }
            if (J.hasEagerState)
              z = J.eagerState;
            else {
              var kt = J.action;
              z = e(z, kt);
            }
          } else {
            var We = {
              lane: we,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null
            };
            Y === null ? (V = Y = We, N = z) : Y = Y.next = We, Qt.lanes = ut(Qt.lanes, we), rv(we);
          }
          J = J.next;
        } while (J !== null && J !== b);
        Y === null ? N = z : Y.next = V, De(z, i.memoizedState) || Wp(), i.memoizedState = z, i.baseState = N, i.baseQueue = Y, o.lastRenderedState = z;
      }
      var Tt = o.interleaved;
      if (Tt !== null) {
        var F = Tt;
        do {
          var K = F.lane;
          Qt.lanes = ut(Qt.lanes, K), rv(K), F = F.next;
        } while (F !== Tt);
      } else
        p === null && (o.lanes = ee);
      var H = o.dispatch;
      return [i.memoizedState, H];
    }
    function j0(e, t, a) {
      var i = Ii(), o = i.queue;
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
        De(y, i.memoizedState) || Wp(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), o.lastRenderedState = y;
      }
      return [y, s];
    }
    function tM(e, t, a) {
    }
    function nM(e, t, a) {
    }
    function F0(e, t, a) {
      var i = Qt, o = Jl(), s, p = Ir();
      if (p) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), $f || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), $f = !0);
      } else {
        if (s = t(), !$f) {
          var y = t();
          De(s, y) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), $f = !0);
        }
        var S = ay();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Xs(S, gc) || lR(i, t, s);
      }
      o.memoizedState = s;
      var x = {
        value: s,
        getSnapshot: t
      };
      return o.queue = x, Nm(uR.bind(null, i, x, e), [e]), i.flags |= Zr, Fp(pr | jr, oR.bind(null, i, x, s, t), void 0, null), s;
    }
    function Om(e, t, a) {
      var i = Qt, o = Ii(), s = t();
      if (!$f) {
        var p = t();
        De(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), $f = !0);
      }
      var y = o.memoizedState, S = !De(y, s);
      S && (o.memoizedState = s, Wp());
      var x = o.queue;
      if (Pp(uR.bind(null, i, x, e), [e]), x.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= Zr, Fp(pr | jr, oR.bind(null, i, x, s, t), void 0, null);
        var b = ay();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Xs(b, gc) || lR(i, t, s);
      }
      return s;
    }
    function lR(e, t, a) {
      e.flags |= To;
      var i = {
        getSnapshot: t,
        value: a
      }, o = Qt.updateQueue;
      if (o === null)
        o = iR(), Qt.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function oR(e, t, a, i) {
      t.value = a, t.getSnapshot = i, sR(t) && cR(e);
    }
    function uR(e, t, a) {
      var i = function() {
        sR(t) && cR(e);
      };
      return a(i);
    }
    function sR(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !De(a, i);
      } catch {
        return !0;
      }
    }
    function cR(e) {
      var t = Ja(e, Xe);
      t !== null && Er(t, e, Xe, an);
    }
    function Dm(e) {
      var t = Jl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: A0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = yk.bind(null, Qt, a);
      return [t.memoizedState, i];
    }
    function H0(e) {
      return I0(A0);
    }
    function P0(e) {
      return j0(A0);
    }
    function Fp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Qt.updateQueue;
      if (s === null)
        s = iR(), Qt.updateQueue = s, s.lastEffect = o.next = o;
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
    function B0(e) {
      var t = Jl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function _m(e) {
      var t = Ii();
      return t.memoizedState;
    }
    function Hp(e, t, a, i) {
      var o = Jl(), s = i === void 0 ? null : i;
      Qt.flags |= e, o.memoizedState = Fp(pr | t, a, void 0, s);
    }
    function Lm(e, t, a, i) {
      var o = Ii(), s = i === void 0 ? null : i, p = void 0;
      if (hr !== null) {
        var y = hr.memoizedState;
        if (p = y.destroy, s !== null) {
          var S = y.deps;
          if (z0(s, S)) {
            o.memoizedState = Fp(t, a, p, s);
            return;
          }
        }
      }
      Qt.flags |= e, o.memoizedState = Fp(pr | t, a, p, s);
    }
    function Nm(e, t) {
      return (Qt.mode & Va) !== Ye ? Hp(Co | Zr | zl, jr, e, t) : Hp(Zr | zl, jr, e, t);
    }
    function Pp(e, t) {
      return Lm(Zr, jr, e, t);
    }
    function V0(e, t) {
      return Hp(ze, $l, e, t);
    }
    function Mm(e, t) {
      return Lm(ze, $l, e, t);
    }
    function Y0(e, t) {
      var a = ze;
      return a |= Ha, (Qt.mode & Va) !== Ye && (a |= Pa), Hp(a, vr, e, t);
    }
    function zm(e, t) {
      return Lm(ze, vr, e, t);
    }
    function fR(e, t) {
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
    function W0(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = ze;
      return o |= Ha, (Qt.mode & Va) !== Ye && (o |= Pa), Hp(o, vr, fR.bind(null, t, e), i);
    }
    function Am(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Lm(ze, vr, fR.bind(null, t, e), i);
    }
    function pk(e, t) {
    }
    var Um = pk;
    function q0(e, t) {
      var a = Jl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Im(e, t) {
      var a = Ii(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (z0(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Q0(e, t) {
      var a = Jl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function jm(e, t) {
      var a = Ii(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (z0(i, s))
          return o[0];
      }
      var p = e();
      return a.memoizedState = [p, i], p;
    }
    function X0(e) {
      var t = Jl();
      return t.memoizedState = e, e;
    }
    function dR(e) {
      var t = Ii(), a = hr, i = a.memoizedState;
      return vR(t, i, e);
    }
    function pR(e) {
      var t = Ii();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return vR(t, a, e);
    }
    function vR(e, t, a) {
      var i = !ph(gc);
      if (i) {
        if (!De(a, t)) {
          var o = mh();
          Qt.lanes = ut(Qt.lanes, o), rv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Wp()), e.memoizedState = a, a;
    }
    function vk(e, t, a) {
      var i = Wa();
      On(ng(i, il)), e(!0);
      var o = Up.transition;
      Up.transition = {};
      var s = Up.transition;
      Up.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (On(i), Up.transition = o, o === null && s._updatedFibers) {
          var p = s._updatedFibers.size;
          p > 10 && R("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function G0() {
      var e = Dm(!1), t = e[0], a = e[1], i = vk.bind(null, a), o = Jl();
      return o.memoizedState = i, [t, i];
    }
    function hR() {
      var e = H0(), t = e[0], a = Ii(), i = a.memoizedState;
      return [t, i];
    }
    function mR() {
      var e = P0(), t = e[0], a = Ii(), i = a.memoizedState;
      return [t, i];
    }
    var yR = !1;
    function hk() {
      return yR;
    }
    function $0() {
      var e = Jl(), t = ay(), a = t.identifierPrefix, i;
      if (Ir()) {
        var o = Db();
        i = ":" + a + "R" + o;
        var s = jp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var p = ck++;
        i = ":" + a + "r" + p.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Fm() {
      var e = Ii(), t = e.memoizedState;
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
      if (gR(e))
        SR(t, o);
      else {
        var s = UE(e, t, o, i);
        if (s !== null) {
          var p = _a();
          Er(s, e, i, p), ER(s, t, i);
        }
      }
      RR(e, i);
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
      if (gR(e))
        SR(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === ee && (s === null || s.lanes === ee)) {
          var p = t.lastRenderedReducer;
          if (p !== null) {
            var y;
            y = Ee.current, Ee.current = vl;
            try {
              var S = t.lastRenderedState, x = p(S, a);
              if (o.hasEagerState = !0, o.eagerState = x, De(x, S)) {
                Gb(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Ee.current = y;
            }
          }
        }
        var b = UE(e, t, o, i);
        if (b !== null) {
          var z = _a();
          Er(b, e, i, z), ER(b, t, i);
        }
      }
      RR(e, i);
    }
    function gR(e) {
      var t = e.alternate;
      return e === Qt || t !== null && t === Qt;
    }
    function SR(e, t) {
      Ip = km = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function ER(e, t, a) {
      if (Qd(a)) {
        var i = t.lanes;
        i = sf(i, e.pendingLanes);
        var o = ut(i, a);
        t.lanes = o, Xd(e, o);
      }
    }
    function RR(e, t, a) {
      qc(e, t);
    }
    var Hm = {
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
    }, wR = null, TR = null, CR = null, xR = null, Kl = null, vl = null, Pm = null;
    {
      var J0 = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, at = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      wR = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Pt(), Jf(t), q0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Pt(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Pt(), Jf(t), Nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Pt(), Jf(a), W0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Pt(), Jf(t), V0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Pt(), Jf(t), Y0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Pt(), Jf(t);
          var a = Ee.current;
          Ee.current = Kl;
          try {
            return Q0(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Pt();
          var i = Ee.current;
          Ee.current = Kl;
          try {
            return U0(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Pt(), B0(e);
        },
        useState: function(e) {
          ne = "useState", Pt();
          var t = Ee.current;
          Ee.current = Kl;
          try {
            return Dm(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Pt(), X0(e);
        },
        useTransition: function() {
          return ne = "useTransition", Pt(), G0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Pt(), F0(e, t, a);
        },
        useId: function() {
          return ne = "useId", Pt(), $0();
        },
        unstable_isNewReconciler: be
      }, TR = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ve(), q0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ve(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ve(), Nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ve(), W0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ve(), V0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ve(), Y0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ve();
          var a = Ee.current;
          Ee.current = Kl;
          try {
            return Q0(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ve();
          var i = Ee.current;
          Ee.current = Kl;
          try {
            return U0(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ve(), B0(e);
        },
        useState: function(e) {
          ne = "useState", ve();
          var t = Ee.current;
          Ee.current = Kl;
          try {
            return Dm(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ve(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ve(), X0(e);
        },
        useTransition: function() {
          return ne = "useTransition", ve(), G0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ve(), F0(e, t, a);
        },
        useId: function() {
          return ne = "useId", ve(), $0();
        },
        unstable_isNewReconciler: be
      }, CR = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ve(), Im(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ve(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ve(), Pp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ve(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ve(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ve(), zm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ve();
          var a = Ee.current;
          Ee.current = vl;
          try {
            return jm(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ve();
          var i = Ee.current;
          Ee.current = vl;
          try {
            return I0(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ve(), _m();
        },
        useState: function(e) {
          ne = "useState", ve();
          var t = Ee.current;
          Ee.current = vl;
          try {
            return H0(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ve(), Um();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ve(), dR(e);
        },
        useTransition: function() {
          return ne = "useTransition", ve(), hR();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ve(), Om(e, t);
        },
        useId: function() {
          return ne = "useId", ve(), Fm();
        },
        unstable_isNewReconciler: be
      }, xR = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", ve(), Im(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", ve(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", ve(), Pp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", ve(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", ve(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", ve(), zm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", ve();
          var a = Ee.current;
          Ee.current = Pm;
          try {
            return jm(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", ve();
          var i = Ee.current;
          Ee.current = Pm;
          try {
            return j0(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", ve(), _m();
        },
        useState: function(e) {
          ne = "useState", ve();
          var t = Ee.current;
          Ee.current = Pm;
          try {
            return P0(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", ve(), Um();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", ve(), pR(e);
        },
        useTransition: function() {
          return ne = "useTransition", ve(), mR();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", ve(), Om(e, t);
        },
        useId: function() {
          return ne = "useId", ve(), Fm();
        },
        unstable_isNewReconciler: be
      }, Kl = {
        readContext: function(e) {
          return J0(), rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", at(), Pt(), q0(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", at(), Pt(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", at(), Pt(), Nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", at(), Pt(), W0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", at(), Pt(), V0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", at(), Pt(), Y0(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", at(), Pt();
          var a = Ee.current;
          Ee.current = Kl;
          try {
            return Q0(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", at(), Pt();
          var i = Ee.current;
          Ee.current = Kl;
          try {
            return U0(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", at(), Pt(), B0(e);
        },
        useState: function(e) {
          ne = "useState", at(), Pt();
          var t = Ee.current;
          Ee.current = Kl;
          try {
            return Dm(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", at(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", at(), Pt(), X0(e);
        },
        useTransition: function() {
          return ne = "useTransition", at(), Pt(), G0();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", at(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", at(), Pt(), F0(e, t, a);
        },
        useId: function() {
          return ne = "useId", at(), Pt(), $0();
        },
        unstable_isNewReconciler: be
      }, vl = {
        readContext: function(e) {
          return J0(), rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", at(), ve(), Im(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", at(), ve(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", at(), ve(), Pp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", at(), ve(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", at(), ve(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", at(), ve(), zm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", at(), ve();
          var a = Ee.current;
          Ee.current = vl;
          try {
            return jm(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", at(), ve();
          var i = Ee.current;
          Ee.current = vl;
          try {
            return I0(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", at(), ve(), _m();
        },
        useState: function(e) {
          ne = "useState", at(), ve();
          var t = Ee.current;
          Ee.current = vl;
          try {
            return H0(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", at(), ve(), Um();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", at(), ve(), dR(e);
        },
        useTransition: function() {
          return ne = "useTransition", at(), ve(), hR();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", at(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", at(), ve(), Om(e, t);
        },
        useId: function() {
          return ne = "useId", at(), ve(), Fm();
        },
        unstable_isNewReconciler: be
      }, Pm = {
        readContext: function(e) {
          return J0(), rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", at(), ve(), Im(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", at(), ve(), rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", at(), ve(), Pp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", at(), ve(), Am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", at(), ve(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", at(), ve(), zm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", at(), ve();
          var a = Ee.current;
          Ee.current = vl;
          try {
            return jm(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", at(), ve();
          var i = Ee.current;
          Ee.current = vl;
          try {
            return j0(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", at(), ve(), _m();
        },
        useState: function(e) {
          ne = "useState", at(), ve();
          var t = Ee.current;
          Ee.current = vl;
          try {
            return P0(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", at(), ve(), Um();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", at(), ve(), pR(e);
        },
        useTransition: function() {
          return ne = "useTransition", at(), ve(), mR();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", at(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", at(), ve(), Om(e, t);
        },
        useId: function() {
          return ne = "useId", at(), ve(), Fm();
        },
        unstable_isNewReconciler: be
      };
    }
    var Zu = c.unstable_now, bR = 0, Bm = -1, Bp = -1, Vm = -1, K0 = !1, Ym = !1;
    function kR() {
      return K0;
    }
    function gk() {
      Ym = !0;
    }
    function Sk() {
      K0 = !1, Ym = !1;
    }
    function Ek() {
      K0 = Ym, Ym = !1;
    }
    function OR() {
      return bR;
    }
    function DR() {
      bR = Zu();
    }
    function Z0(e) {
      Bp = Zu(), e.actualStartTime < 0 && (e.actualStartTime = Zu());
    }
    function _R(e) {
      Bp = -1;
    }
    function Wm(e, t) {
      if (Bp >= 0) {
        var a = Zu() - Bp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Bp = -1;
      }
    }
    function Zl(e) {
      if (Bm >= 0) {
        var t = Zu() - Bm;
        Bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
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
    function eS(e) {
      if (Vm >= 0) {
        var t = Zu() - Vm;
        Vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
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
    function eo() {
      Bm = Zu();
    }
    function tS() {
      Vm = Zu();
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
    function Rk(e, t) {
      return !0;
    }
    function aS(e, t) {
      try {
        var a = Rk(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, p = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === A)
            return;
          console.error(i);
        }
        var y = o ? nt(o) : null, S = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === W)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var b = nt(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + b + ".");
        }
        var z = S + `
` + p + `

` + ("" + x);
        console.error(z);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var wk = typeof WeakMap == "function" ? WeakMap : Map;
    function LR(e, t, a) {
      var i = Qo(an, a);
      i.tag = a0, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        vD(o), aS(e, t);
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
        Bw(e), aS(e, t), typeof o != "function" && dD(this);
        var S = t.value, x = t.stack;
        this.componentDidCatch(S, {
          componentStack: x !== null ? x : ""
        }), typeof o != "function" && (oa(e.lanes, Xe) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", nt(e) || "Unknown"));
      }), i;
    }
    function NR(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new wk(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = hD.bind(null, e, t, a);
        ba && av(e, a), t.then(s, s);
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
    function Ck(e, t) {
      var a = e.tag;
      if ((e.mode & Ue) === Ye && (a === q || a === Ne || a === Ze)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function MR(e) {
      var t = e;
      do {
        if (t.tag === xe && uk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function zR(e, t, a, i, o) {
      if ((e.mode & Ue) === Ye) {
        if (e === t)
          e.flags |= cr;
        else {
          if (e.flags |= rt, a.flags |= Fc, a.flags &= ~(Zv | Ml), a.tag === A) {
            var s = a.alternate;
            if (s === null)
              a.tag = vn;
            else {
              var p = Qo(an, Xe);
              p.tag = hm, Gu(a, p, Xe);
            }
          }
          a.lanes = ut(a.lanes, Xe);
        }
        return e;
      }
      return e.flags |= cr, e.lanes = o, e;
    }
    function xk(e, t, a, i, o) {
      if (a.flags |= Ml, ba && av(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Ck(a), Ir() && a.mode & Ue && CE();
        var p = MR(t);
        if (p !== null) {
          p.flags &= ~zr, zR(p, t, a, e, o), p.mode & Ue && NR(e, s, o), Tk(p, e, s);
          return;
        } else {
          if (!qd(o)) {
            NR(e, s, o), jS();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (Ir() && a.mode & Ue) {
        CE();
        var S = MR(t);
        if (S !== null) {
          (S.flags & cr) === Ve && (S.flags |= zr), zR(S, t, a, e, o), Jg(Sc(i, a));
          return;
        }
      }
      i = Sc(i, a), aD(i);
      var x = t;
      do {
        switch (x.tag) {
          case W: {
            var b = i;
            x.flags |= cr;
            var z = bu(o);
            x.lanes = ut(x.lanes, z);
            var N = LR(x, b, z);
            o0(x, N);
            return;
          }
          case A:
            var V = i, Y = x.type, J = x.stateNode;
            if ((x.flags & rt) === Ve && (typeof Y.getDerivedStateFromError == "function" || J !== null && typeof J.componentDidCatch == "function" && !Mw(J))) {
              x.flags |= cr;
              var we = bu(o);
              x.lanes = ut(x.lanes, we);
              var We = iS(x, V, we);
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
    var Vp = v.ReactCurrentOwner, hl = !1, lS, Yp, oS, uS, sS, Ec, cS, qm;
    lS = {}, Yp = {}, oS = {}, uS = {}, sS = {}, Ec = !1, cS = {}, qm = {};
    function Oa(e, t, a, i) {
      e === null ? t.child = KE(t, null, a, i) : t.child = qf(t, e.child, a, i);
    }
    function kk(e, t, a, i) {
      t.child = qf(t, e.child, null, i), t.child = qf(t, null, a, i);
    }
    function AR(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && sl(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var p = a.render, y = t.ref, S, x;
      Wf(t, o), gu(t);
      {
        if (Vp.current = t, sr(!0), S = Kf(e, t, p, i, y, o), x = Zf(), t.mode & bn) {
          rn(!0);
          try {
            S = Kf(e, t, p, i, y, o), x = Zf();
          } finally {
            rn(!1);
          }
        }
        sr(!1);
      }
      return bo(), e !== null && !hl ? (rR(e, t, o), Xo(e, t, o)) : (Ir() && x && Wg(t), t.flags |= fi, Oa(e, t, S, o), t.child);
    }
    function UR(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (ND(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var p = s;
          return p = od(s), t.tag = Ze, t.type = p, pS(t, s), IR(e, t, p, i, o);
        }
        {
          var y = s.propTypes;
          y && sl(
            y,
            i,
            // Resolved props
            "prop",
            Dt(s)
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
          Dt(x)
        );
      }
      var z = e.child, N = SS(e, o);
      if (!N) {
        var V = z.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : Je, Y(V, i) && e.ref === t.ref)
          return Xo(e, t, o);
      }
      t.flags |= fi;
      var J = xc(z, i);
      return J.ref = t.ref, J.return = t, t.child = J, J;
    }
    function IR(e, t, a, i, o) {
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
            Dt(s)
          );
        }
      }
      if (e !== null) {
        var b = e.memoizedProps;
        if (Je(b, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (hl = !1, t.pendingProps = i = b, SS(e, o))
            (e.flags & Fc) !== Ve && (hl = !0);
          else
            return t.lanes = e.lanes, Xo(e, t, o);
      }
      return fS(e, t, a, i, o);
    }
    function jR(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || te)
        if ((t.mode & Ue) === Ye) {
          var p = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = p, iy(t, a);
        } else if (oa(a, ka)) {
          var z = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var N = s !== null ? s.baseLanes : a;
          iy(t, N);
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
          return t.memoizedState = b, t.updateQueue = null, iy(t, S), null;
        }
      else {
        var V;
        s !== null ? (V = ut(s.baseLanes, a), t.memoizedState = null) : V = a, iy(t, V);
      }
      return Oa(e, t, o, a), t.child;
    }
    function Ok(e, t, a) {
      var i = t.pendingProps;
      return Oa(e, t, i, a), t.child;
    }
    function Dk(e, t, a) {
      var i = t.pendingProps.children;
      return Oa(e, t, i, a), t.child;
    }
    function _k(e, t, a) {
      {
        t.flags |= ze;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return Oa(e, t, s, a), t.child;
    }
    function FR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ta, t.flags |= xi);
    }
    function fS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && sl(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var p;
      {
        var y = Ff(t, a, !0);
        p = Hf(t, y);
      }
      var S, x;
      Wf(t, o), gu(t);
      {
        if (Vp.current = t, sr(!0), S = Kf(e, t, a, i, p, o), x = Zf(), t.mode & bn) {
          rn(!0);
          try {
            S = Kf(e, t, a, i, p, o), x = Zf();
          } finally {
            rn(!1);
          }
        }
        sr(!1);
      }
      return bo(), e !== null && !hl ? (rR(e, t, o), Xo(e, t, o)) : (Ir() && x && Wg(t), t.flags |= fi, Oa(e, t, S, o), t.child);
    }
    function HR(e, t, a, i, o) {
      {
        switch (QD(t)) {
          case !1: {
            var s = t.stateNode, p = t.type, y = new p(t.memoizedProps, s.context), S = y.state;
            s.updater.enqueueSetState(s, S, null);
            break;
          }
          case !0: {
            t.flags |= rt, t.flags |= cr;
            var x = new Error("Simulated error coming from DevTools"), b = bu(o);
            t.lanes = ut(t.lanes, b);
            var z = iS(t, Sc(x, t), b);
            o0(t, z);
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
            Dt(a)
          );
        }
      }
      var V;
      Gl(a) ? (V = !0, am(t)) : V = !1, Wf(t, o);
      var Y = t.stateNode, J;
      Y === null ? (Xm(e, t), QE(t, a, i), S0(t, a, i, o), J = !0) : e === null ? J = nk(t, a, i, o) : J = rk(e, t, a, i, o);
      var we = dS(e, t, a, J, V, o);
      {
        var We = t.stateNode;
        J && We.props !== i && (Ec || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", nt(t) || "a component"), Ec = !0);
      }
      return we;
    }
    function dS(e, t, a, i, o, s) {
      FR(e, t);
      var p = (t.flags & rt) !== Ve;
      if (!i && !p)
        return o && EE(t, a, !1), Xo(e, t, s);
      var y = t.stateNode;
      Vp.current = t;
      var S;
      if (p && typeof a.getDerivedStateFromError != "function")
        S = null, _R();
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
      return t.flags |= fi, e !== null && p ? kk(e, t, S, s) : Oa(e, t, S, s), t.memoizedState = y.state, o && EE(t, a, !0), t.child;
    }
    function PR(e) {
      var t = e.stateNode;
      t.pendingContext ? gE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && gE(e, t.context, !1), x0(e, t.containerInfo);
    }
    function Lk(e, t, a) {
      if (PR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      FE(e, t), Sm(t, i, null, a);
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
        if (x.baseState = S, t.memoizedState = S, t.flags & zr) {
          var b = Sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return BR(e, t, y, a, b);
        } else if (y !== s) {
          var z = Sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return BR(e, t, y, a, z);
        } else {
          Ab(t);
          var N = KE(t, null, y, a);
          t.child = N;
          for (var V = N; V; )
            V.flags = V.flags & ~Jt | Ci, V = V.sibling;
        }
      } else {
        if (Vf(), y === s)
          return Xo(e, t, a);
        Oa(e, t, y, a);
      }
      return t.child;
    }
    function BR(e, t, a, i, o) {
      return Vf(), Jg(o), t.flags |= zr, Oa(e, t, a, i), t.child;
    }
    function Nk(e, t, a) {
      eR(t), e === null && $g(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, p = o.children, y = Lg(i, o);
      return y ? p = null : s !== null && Lg(i, s) && (t.flags |= Fa), FR(e, t), Oa(e, t, p, a), t.child;
    }
    function Mk(e, t) {
      return e === null && $g(t), null;
    }
    function zk(e, t, a, i) {
      Xm(e, t);
      var o = t.pendingProps, s = a, p = s._payload, y = s._init, S = y(p);
      t.type = S;
      var x = t.tag = MD(S), b = dl(S, o), z;
      switch (x) {
        case q:
          return pS(t, S), t.type = S = od(S), z = fS(null, t, S, b, i), z;
        case A:
          return t.type = S = VS(S), z = HR(null, t, S, b, i), z;
        case Ne:
          return t.type = S = YS(S), z = AR(null, t, S, b, i), z;
        case gt: {
          if (t.type !== t.elementType) {
            var N = S.propTypes;
            N && sl(
              N,
              b,
              // Resolved for outer only
              "prop",
              Dt(S)
            );
          }
          return z = UR(
            null,
            t,
            S,
            dl(S.type, b),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var V = "";
      throw S !== null && typeof S == "object" && S.$$typeof === Be && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function Ak(e, t, a, i, o) {
      Xm(e, t), t.tag = A;
      var s;
      return Gl(a) ? (s = !0, am(t)) : s = !1, Wf(t, o), QE(t, a, i), S0(t, a, i, o), dS(null, t, a, !0, s, o);
    }
    function Uk(e, t, a, i) {
      Xm(e, t);
      var o = t.pendingProps, s;
      {
        var p = Ff(t, a, !1);
        s = Hf(t, p);
      }
      Wf(t, i);
      var y, S;
      gu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = Dt(a) || "Unknown";
          lS[x] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), lS[x] = !0);
        }
        t.mode & bn && fl.recordLegacyContextWarning(t, null), sr(!0), Vp.current = t, y = Kf(null, t, a, o, s, i), S = Zf(), sr(!1);
      }
      if (bo(), t.flags |= fi, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var b = Dt(a) || "Unknown";
        Yp[b] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Yp[b] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var z = Dt(a) || "Unknown";
          Yp[z] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Yp[z] = !0);
        }
        t.tag = A, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return Gl(a) ? (N = !0, am(t)) : N = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, l0(t), qE(t, y), S0(t, a, o, i), dS(null, t, a, !0, N, i);
      } else {
        if (t.tag = q, t.mode & bn) {
          rn(!0);
          try {
            y = Kf(null, t, a, o, s, i), S = Zf();
          } finally {
            rn(!1);
          }
        }
        return Ir() && S && Wg(t), Oa(null, t, y, i), pS(t, a), t.child;
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
          var p = Dt(t) || "Unknown";
          uS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), uS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = Dt(t) || "Unknown";
          oS[y] || (g("%s: Function components do not support contextType.", y), oS[y] = !0);
        }
      }
    }
    var vS = {
      dehydrated: null,
      treeContext: null,
      retryLane: zn
    };
    function hS(e) {
      return {
        baseLanes: e,
        cachePool: bk(),
        transitions: null
      };
    }
    function Ik(e, t) {
      var a = null;
      return {
        baseLanes: ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function jk(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return O0(e, Ap);
    }
    function Fk(e, t) {
      return Gs(e.childLanes, t);
    }
    function VR(e, t, a) {
      var i = t.pendingProps;
      XD(t) && (t.flags |= rt);
      var o = pl.current, s = !1, p = (t.flags & rt) !== Ve;
      if (p || jk(o, e) ? (s = !0, t.flags &= ~rt) : (e === null || e.memoizedState !== null) && (o = ok(o, nR)), o = Xf(o), Ju(t, o), e === null) {
        $g(t);
        var y = t.memoizedState;
        if (y !== null) {
          var S = y.dehydrated;
          if (S !== null)
            return Yk(t, S);
        }
        var x = i.children, b = i.fallback;
        if (s) {
          var z = Hk(t, x, b, a), N = t.child;
          return N.memoizedState = hS(a), t.memoizedState = vS, z;
        } else
          return mS(t, x);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var Y = V.dehydrated;
          if (Y !== null)
            return Wk(e, t, p, i, Y, V, a);
        }
        if (s) {
          var J = i.fallback, we = i.children, We = Bk(e, t, we, J, a), Ie = t.child, kt = e.child.memoizedState;
          return Ie.memoizedState = kt === null ? hS(a) : Ik(kt, a), Ie.childLanes = Fk(e, a), t.memoizedState = vS, We;
        } else {
          var Tt = i.children, F = Pk(e, t, Tt, a);
          return t.memoizedState = null, F;
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
      return Yw(e, t, ee, null);
    }
    function YR(e, t) {
      return xc(e, t);
    }
    function Pk(e, t, a, i) {
      var o = e.child, s = o.sibling, p = YR(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ue) === Ye && (p.lanes = i), p.return = t, p.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= Mt) : y.push(s);
      }
      return t.child = p, p;
    }
    function Bk(e, t, a, i, o) {
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
        x = YR(p, S), x.subtreeFlags = p.subtreeFlags & fr;
      var z;
      return y !== null ? z = xc(y, i) : (z = is(i, s, o, null), z.flags |= Jt), z.return = t, x.return = t, x.sibling = z, t.child = x, z;
    }
    function Qm(e, t, a, i) {
      i !== null && Jg(i), qf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, p = mS(t, s);
      return p.flags |= Jt, t.memoizedState = null, p;
    }
    function Vk(e, t, a, i, o) {
      var s = t.mode, p = {
        mode: "visible",
        children: a
      }, y = yS(p, s), S = is(i, s, o, null);
      return S.flags |= Jt, y.return = t, S.return = t, y.sibling = S, t.child = y, (t.mode & Ue) !== Ye && qf(t, e.child, null, o), S;
    }
    function Yk(e, t, a) {
      return (e.mode & Ue) === Ye ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Xe) : Ag(t) ? e.lanes = kn : e.lanes = ka, null;
    }
    function Wk(e, t, a, i, o, s, p) {
      if (a)
        if (t.flags & zr) {
          t.flags &= ~zr;
          var F = rS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Qm(e, t, p, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= rt, null;
          var K = i.children, H = i.fallback, se = Vk(e, t, K, H, p), Te = t.child;
          return Te.memoizedState = hS(p), t.memoizedState = vS, se;
        }
      else {
        if (Mb(), (t.mode & Ue) === Ye)
          return Qm(
            e,
            t,
            p,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ag(o)) {
          var y, S, x;
          {
            var b = $x(o);
            y = b.digest, S = b.message, x = b.stack;
          }
          var z;
          S ? z = new Error(S) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = rS(z, y, x);
          return Qm(e, t, p, N);
        }
        var V = oa(p, e.childLanes);
        if (hl || V) {
          var Y = ay();
          if (Y !== null) {
            var J = Sh(Y, p);
            if (J !== zn && J !== s.retryLane) {
              s.retryLane = J;
              var we = an;
              Ja(e, J), Er(Y, e, J, we);
            }
          }
          jS();
          var We = rS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Qm(e, t, p, We);
        } else if (dE(o)) {
          t.flags |= rt, t.child = e.child;
          var Ie = mD.bind(null, e);
          return Jx(o, Ie), null;
        } else {
          Ub(t, o, s.treeContext);
          var kt = i.children, Tt = mS(t, kt);
          return Tt.flags |= Ci, Tt;
        }
      }
    }
    function WR(e, t, a) {
      e.lanes = ut(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ut(i.lanes, t)), n0(e.return, t, a);
    }
    function qk(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === xe) {
          var o = i.memoizedState;
          o !== null && WR(i, a, e);
        } else if (i.tag === Et)
          WR(i, a, e);
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
        i !== null && bm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Xk(e) {
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
      e !== void 0 && !qm[e] && (e !== "collapsed" && e !== "hidden" ? (qm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (qm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function qR(e, t) {
      {
        var a = _t(e), i = !a && typeof gi(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function $k(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (_t(e)) {
          for (var a = 0; a < e.length; a++)
            if (!qR(e[a], a))
              return;
        } else {
          var i = gi(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), p = 0; !s.done; s = o.next()) {
                if (!qR(s.value, p))
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
    function QR(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, p = i.children;
      Xk(o), Gk(s, o), $k(p, o), Oa(e, t, p, a);
      var y = pl.current, S = O0(y, Ap);
      if (S)
        y = D0(y, Ap), t.flags |= rt;
      else {
        var x = e !== null && (e.flags & rt) !== Ve;
        x && qk(t, t.child, a), y = Xf(y);
      }
      if (Ju(t, y), (t.mode & Ue) === Ye)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var b = Qk(t.child), z;
            b === null ? (z = t.child, t.child = null) : (z = b.sibling, b.sibling = null), gS(
              t,
              !1,
              // isBackwards
              z,
              b,
              s
            );
            break;
          }
          case "backwards": {
            var N = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var Y = V.alternate;
              if (Y !== null && bm(Y) === null) {
                t.child = V;
                break;
              }
              var J = V.sibling;
              V.sibling = N, N = V, V = J;
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
    function Jk(e, t, a) {
      x0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = qf(t, null, i, a) : Oa(e, t, i, a), t.child;
    }
    var XR = !1;
    function Kk(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, p = t.memoizedProps, y = s.value;
      {
        "value" in s || XR || (XR = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var S = t.type.propTypes;
        S && sl(S, s, "prop", "Context.Provider");
      }
      if (AE(t, o, y), p !== null) {
        var x = p.value;
        if (De(x, y)) {
          if (p.children === s.children && !nm())
            return Xo(e, t, a);
        } else
          qb(t, o, a);
      }
      var b = s.children;
      return Oa(e, t, b, a), t.child;
    }
    var GR = !1;
    function Zk(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (GR || (GR = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Wf(t, a);
      var p = rr(i);
      gu(t);
      var y;
      return Vp.current = t, sr(!0), y = s(p), sr(!1), bo(), t.flags |= fi, Oa(e, t, y, a), t.child;
    }
    function Wp() {
      hl = !0;
    }
    function Xm(e, t) {
      (t.mode & Ue) === Ye && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Jt);
    }
    function Xo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), _R(), rv(t.lanes), oa(a, t.childLanes) ? (ak(e, t), t.child) : null;
    }
    function eO(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Mt) : s.push(e), a.flags |= Jt, a;
      }
    }
    function SS(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function tO(e, t, a) {
      switch (t.tag) {
        case W:
          PR(t), t.stateNode, Vf();
          break;
        case X:
          eR(t);
          break;
        case A: {
          var i = t.type;
          Gl(i) && am(t);
          break;
        }
        case oe:
          x0(t, t.stateNode.containerInfo);
          break;
        case Fe: {
          var o = t.memoizedProps.value, s = t.type._context;
          AE(t, s, o);
          break;
        }
        case yt:
          {
            var p = oa(a, t.childLanes);
            p && (t.flags |= ze);
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
              return Ju(t, Xf(pl.current)), t.flags |= rt, null;
            var x = t.child, b = x.childLanes;
            if (oa(a, b))
              return VR(e, t, a);
            Ju(t, Xf(pl.current));
            var z = Xo(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            Ju(t, Xf(pl.current));
          break;
        }
        case Et: {
          var N = (e.flags & rt) !== Ve, V = oa(a, t.childLanes);
          if (N) {
            if (V)
              return QR(e, t, a);
            t.flags |= rt;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Ju(t, pl.current), V)
            break;
          return null;
        }
        case $e:
        case lt:
          return t.lanes = ee, jR(e, t, a);
      }
      return Xo(e, t, a);
    }
    function $R(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return eO(e, t, GS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || nm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          hl = !0;
        else {
          var s = SS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & rt) === Ve)
            return hl = !1, tO(e, t, a);
          (e.flags & Fc) !== Ve ? hl = !0 : hl = !1;
        }
      } else if (hl = !1, Ir() && kb(t)) {
        var p = t.index, y = Ob();
        TE(t, y, p);
      }
      switch (t.lanes = ee, t.tag) {
        case I:
          return Uk(e, t, t.type, a);
        case pn: {
          var S = t.elementType;
          return zk(e, t, S, a);
        }
        case q: {
          var x = t.type, b = t.pendingProps, z = t.elementType === x ? b : dl(x, b);
          return fS(e, t, x, z, a);
        }
        case A: {
          var N = t.type, V = t.pendingProps, Y = t.elementType === N ? V : dl(N, V);
          return HR(e, t, N, Y, a);
        }
        case W:
          return Lk(e, t, a);
        case X:
          return Nk(e, t, a);
        case $:
          return Mk(e, t);
        case xe:
          return VR(e, t, a);
        case oe:
          return Jk(e, t, a);
        case Ne: {
          var J = t.type, we = t.pendingProps, We = t.elementType === J ? we : dl(J, we);
          return AR(e, t, J, We, a);
        }
        case Ce:
          return Ok(e, t, a);
        case st:
          return Dk(e, t, a);
        case yt:
          return _k(e, t, a);
        case Fe:
          return Kk(e, t, a);
        case vt:
          return Zk(e, t, a);
        case gt: {
          var Ie = t.type, kt = t.pendingProps, Tt = dl(Ie, kt);
          if (t.type !== t.elementType) {
            var F = Ie.propTypes;
            F && sl(
              F,
              Tt,
              // Resolved for outer only
              "prop",
              Dt(Ie)
            );
          }
          return Tt = dl(Ie.type, Tt), UR(e, t, Ie, Tt, a);
        }
        case Ze:
          return IR(e, t, t.type, t.pendingProps, a);
        case vn: {
          var K = t.type, H = t.pendingProps, se = t.elementType === K ? H : dl(K, H);
          return Ak(e, t, K, se, a);
        }
        case Et:
          return QR(e, t, a);
        case Gt:
          break;
        case $e:
          return jR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ed(e) {
      e.flags |= ze;
    }
    function JR(e) {
      e.flags |= Ta, e.flags |= xi;
    }
    var KR, ES, ZR, ew;
    KR = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === X || o.tag === $)
          Cx(e, o.stateNode);
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
    }, ZR = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var p = t.stateNode, y = b0(), S = bx(p, a, s, i, o, y);
        t.updateQueue = S, S && ed(t);
      }
    }, ew = function(e, t, a, i) {
      a !== i && ed(t);
    };
    function qp(e, t) {
      if (!Ir())
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = ee, i = Ve;
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
    function nO(e, t, a) {
      if (Pb() && (t.mode & Ue) !== Ye && (t.flags & rt) === Ve)
        return _E(t), Vf(), t.flags |= zr | Ml | cr, !1;
      var i = sm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Fb(t), Fr(t), (t.mode & Lt) !== Ye) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Vf(), (t.flags & rt) === Ve && (t.memoizedState = null), t.flags |= ze, Fr(t), (t.mode & Lt) !== Ye) {
            var p = a !== null;
            if (p) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return LE(), !0;
    }
    function tw(e, t, a) {
      var i = t.pendingProps;
      switch (qg(t), t.tag) {
        case I:
        case pn:
        case Ze:
        case q:
        case Ne:
        case Ce:
        case st:
        case yt:
        case vt:
        case gt:
          return Fr(t), null;
        case A: {
          var o = t.type;
          return Gl(o) && rm(t), Fr(t), null;
        }
        case W: {
          var s = t.stateNode;
          if (Qf(t), Bg(t), L0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var p = sm(t);
            if (p)
              ed(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & zr) !== Ve) && (t.flags |= Bn, LE());
            }
          }
          return ES(e, t), Fr(t), null;
        }
        case X: {
          k0(t);
          var S = ZE(), x = t.type;
          if (e !== null && t.stateNode != null)
            ZR(e, t, x, i, S), e.ref !== t.ref && JR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var b = b0(), z = sm(t);
            if (z)
              Ib(t, S, b) && ed(t);
            else {
              var N = Tx(x, i, S, b, t);
              KR(N, t, !1, !1), t.stateNode = N, xx(N, x, i, S) && ed(t);
            }
            t.ref !== null && JR(t);
          }
          return Fr(t), null;
        }
        case $: {
          var V = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            ew(e, t, Y, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var J = ZE(), we = b0(), We = sm(t);
            We ? jb(t) && ed(t) : t.stateNode = kx(V, J, we, t);
          }
          return Fr(t), null;
        }
        case xe: {
          Gf(t);
          var Ie = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var kt = nO(e, t, Ie);
            if (!kt)
              return t.flags & cr ? t : null;
          }
          if ((t.flags & rt) !== Ve)
            return t.lanes = a, (t.mode & Lt) !== Ye && nS(t), t;
          var Tt = Ie !== null, F = e !== null && e.memoizedState !== null;
          if (Tt !== F && Tt) {
            var K = t.child;
            if (K.flags |= Nl, (t.mode & Ue) !== Ye) {
              var H = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ge);
              H || O0(pl.current, nR) ? rD() : jS();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= ze), Fr(t), (t.mode & Lt) !== Ye && Tt) {
            var Te = t.child;
            Te !== null && (t.treeBaseDuration -= Te.treeBaseDuration);
          }
          return null;
        }
        case oe:
          return Qf(t), ES(e, t), e === null && Eb(t.stateNode.containerInfo), Fr(t), null;
        case Fe:
          var ye = t.type._context;
          return t0(ye, t), Fr(t), null;
        case vn: {
          var et = t.type;
          return Gl(et) && rm(t), Fr(t), null;
        }
        case Et: {
          Gf(t);
          var it = t.memoizedState;
          if (it === null)
            return Fr(t), null;
          var Xt = (t.flags & rt) !== Ve, At = it.rendering;
          if (At === null)
            if (Xt)
              qp(it, !1);
            else {
              var Jn = iD() && (e === null || (e.flags & rt) === Ve);
              if (!Jn)
                for (var Ut = t.child; Ut !== null; ) {
                  var Yn = bm(Ut);
                  if (Yn !== null) {
                    Xt = !0, t.flags |= rt, qp(it, !1);
                    var da = Yn.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= ze), t.subtreeFlags = Ve, ik(t, a), Ju(t, D0(pl.current, Ap)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              it.tail !== null && Vn() > ww() && (t.flags |= rt, Xt = !0, qp(it, !1), t.lanes = Yd);
            }
          else {
            if (!Xt) {
              var Yr = bm(At);
              if (Yr !== null) {
                t.flags |= rt, Xt = !0;
                var hi = Yr.updateQueue;
                if (hi !== null && (t.updateQueue = hi, t.flags |= ze), qp(it, !0), it.tail === null && it.tailMode === "hidden" && !At.alternate && !Ir())
                  return Fr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Vn() * 2 - it.renderingStartTime > ww() && a !== ka && (t.flags |= rt, Xt = !0, qp(it, !1), t.lanes = Yd);
            }
            if (it.isBackwards)
              At.sibling = t.child, t.child = At;
            else {
              var La = it.last;
              La !== null ? La.sibling = At : t.child = At, it.last = At;
            }
          }
          if (it.tail !== null) {
            var Na = it.tail;
            it.rendering = Na, it.tail = Na.sibling, it.renderingStartTime = Vn(), Na.sibling = null;
            var pa = pl.current;
            return Xt ? pa = D0(pa, Ap) : pa = Xf(pa), Ju(t, pa), Na;
          }
          return Fr(t), null;
        }
        case Gt:
          break;
        case $e:
        case lt: {
          IS(t);
          var Zo = t.memoizedState, ud = Zo !== null;
          if (e !== null) {
            var uv = e.memoizedState, ro = uv !== null;
            ro !== ud && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !te && (t.flags |= Nl);
          }
          return !ud || (t.mode & Ue) === Ye ? Fr(t) : oa(no, ka) && (Fr(t), t.subtreeFlags & (Jt | ze) && (t.flags |= Nl)), null;
        }
        case tt:
          return null;
        case He:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function rO(e, t, a) {
      switch (qg(t), t.tag) {
        case A: {
          var i = t.type;
          Gl(i) && rm(t);
          var o = t.flags;
          return o & cr ? (t.flags = o & ~cr | rt, (t.mode & Lt) !== Ye && nS(t), t) : null;
        }
        case W: {
          t.stateNode, Qf(t), Bg(t), L0();
          var s = t.flags;
          return (s & cr) !== Ve && (s & rt) === Ve ? (t.flags = s & ~cr | rt, t) : null;
        }
        case X:
          return k0(t), null;
        case xe: {
          Gf(t);
          var p = t.memoizedState;
          if (p !== null && p.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Vf();
          }
          var y = t.flags;
          return y & cr ? (t.flags = y & ~cr | rt, (t.mode & Lt) !== Ye && nS(t), t) : null;
        }
        case Et:
          return Gf(t), null;
        case oe:
          return Qf(t), null;
        case Fe:
          var S = t.type._context;
          return t0(S, t), null;
        case $e:
        case lt:
          return IS(t), null;
        case tt:
          return null;
        default:
          return null;
      }
    }
    function nw(e, t, a) {
      switch (qg(t), t.tag) {
        case A: {
          var i = t.type.childContextTypes;
          i != null && rm(t);
          break;
        }
        case W: {
          t.stateNode, Qf(t), Bg(t), L0();
          break;
        }
        case X: {
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
        case Fe:
          var o = t.type._context;
          t0(o, t);
          break;
        case $e:
        case lt:
          IS(t);
          break;
      }
    }
    var rw = null;
    rw = /* @__PURE__ */ new Set();
    var Gm = !1, Hr = !1, aO = typeof WeakSet == "function" ? WeakSet : Set, _e = null, td = null, nd = null;
    function iO(e) {
      ci(null, function() {
        throw e;
      }), tl();
    }
    var lO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Lt)
        try {
          eo(), t.componentWillUnmount();
        } finally {
          Zl(e);
        }
      else
        t.componentWillUnmount();
    };
    function aw(e, t) {
      try {
        es(vr, e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        lO(e, a);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function oO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dn(e, t, i);
      }
    }
    function iw(e, t) {
      try {
        ow(e);
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
            if (Rt && mt && e.mode & Lt)
              try {
                eo(), i = a(null);
              } finally {
                Zl(e);
              }
            else
              i = a(null);
          } catch (o) {
            dn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          a.current = null;
    }
    function $m(e, t, a) {
      try {
        a();
      } catch (i) {
        dn(e, t, i);
      }
    }
    var lw = !1;
    function uO(e, t) {
      Rx(e.containerInfo), _e = t, sO();
      var a = lw;
      return lw = !1, a;
    }
    function sO() {
      for (; _e !== null; ) {
        var e = _e, t = e.child;
        (e.subtreeFlags & ea) !== Ve && t !== null ? (t.return = e, _e = t) : cO();
      }
    }
    function cO() {
      for (; _e !== null; ) {
        var e = _e;
        Sn(e);
        try {
          fO(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, _e = t;
          return;
        }
        _e = e.return;
      }
    }
    function fO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Bn) !== Ve) {
        switch (Sn(e), e.tag) {
          case q:
          case Ne:
          case Ze:
            break;
          case A: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ec && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(e) || "instance"));
              var p = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : dl(e.type, i), o);
              {
                var y = rw;
                p === void 0 && !y.has(e.type) && (y.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", nt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          }
          case W: {
            {
              var S = e.stateNode;
              qx(S.containerInfo);
            }
            break;
          }
          case X:
          case $:
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
            p.destroy = void 0, y !== void 0 && ((e & jr) !== Ka ? ih(t) : (e & vr) !== Ka && Su(t), (e & $l) !== Ka && iv(!0), $m(t, a, y), (e & $l) !== Ka && iv(!1), (e & jr) !== Ka ? lh() : (e & vr) !== Ka && js());
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
            (e & jr) !== Ka ? Hd(t) : (e & vr) !== Ka && oh(t);
            var p = s.create;
            (e & $l) !== Ka && iv(!0), s.destroy = p(), (e & $l) !== Ka && iv(!1), (e & jr) !== Ka ? Wc() : (e & vr) !== Ka && Pd();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var S = void 0;
                (s.tag & vr) !== Ve ? S = "useLayoutEffect" : (s.tag & $l) !== Ve ? S = "useInsertionEffect" : S = "useEffect";
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
    function dO(e, t) {
      if ((t.flags & ze) !== Ve)
        switch (t.tag) {
          case yt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, p = OR(), y = t.alternate === null ? "mount" : "update";
            kR() && (y = "nested-update"), typeof s == "function" && s(o, y, a, p);
            var S = t.return;
            e:
              for (; S !== null; ) {
                switch (S.tag) {
                  case W:
                    var x = S.stateNode;
                    x.passiveEffectDuration += a;
                    break e;
                  case yt:
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
    function pO(e, t, a, i) {
      if ((a.flags & di) !== Ve)
        switch (a.tag) {
          case q:
          case Ne:
          case Ze: {
            if (!Hr)
              if (a.mode & Lt)
                try {
                  eo(), es(vr | pr, a);
                } finally {
                  Zl(a);
                }
              else
                es(vr | pr, a);
            break;
          }
          case A: {
            var o = a.stateNode;
            if (a.flags & ze && !Hr)
              if (t === null)
                if (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), a.mode & Lt)
                  try {
                    eo(), o.componentDidMount();
                  } finally {
                    Zl(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : dl(a.type, t.memoizedProps), p = t.memoizedState;
                if (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), a.mode & Lt)
                  try {
                    eo(), o.componentDidUpdate(s, p, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Zl(a);
                  }
                else
                  o.componentDidUpdate(s, p, o.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), PE(a, y, o));
            break;
          }
          case W: {
            var S = a.updateQueue;
            if (S !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case X:
                    x = a.child.stateNode;
                    break;
                  case A:
                    x = a.child.stateNode;
                    break;
                }
              PE(a, S, x);
            }
            break;
          }
          case X: {
            var b = a.stateNode;
            if (t === null && a.flags & ze) {
              var z = a.type, N = a.memoizedProps;
              Nx(b, z, N);
            }
            break;
          }
          case $:
            break;
          case oe:
            break;
          case yt: {
            {
              var V = a.memoizedProps, Y = V.onCommit, J = V.onRender, we = a.stateNode.effectDuration, We = OR(), Ie = t === null ? "mount" : "update";
              kR() && (Ie = "nested-update"), typeof J == "function" && J(a.memoizedProps.id, Ie, a.actualDuration, a.treeBaseDuration, a.actualStartTime, We);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Ie, we, We), cD(a);
                var kt = a.return;
                e:
                  for (; kt !== null; ) {
                    switch (kt.tag) {
                      case W:
                        var Tt = kt.stateNode;
                        Tt.effectDuration += we;
                        break e;
                      case yt:
                        var F = kt.stateNode;
                        F.effectDuration += we;
                        break e;
                    }
                    kt = kt.return;
                  }
              }
            }
            break;
          }
          case xe: {
            RO(e, a);
            break;
          }
          case Et:
          case vn:
          case Gt:
          case $e:
          case lt:
          case He:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & Ta && ow(a);
    }
    function vO(e) {
      switch (e.tag) {
        case q:
        case Ne:
        case Ze: {
          if (e.mode & Lt)
            try {
              eo(), aw(e, e.return);
            } finally {
              Zl(e);
            }
          else
            aw(e, e.return);
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && oO(e, e.return, t), iw(e, e.return);
          break;
        }
        case X: {
          iw(e, e.return);
          break;
        }
      }
    }
    function hO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === X) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Bx(o) : Yx(i.stateNode, i.memoizedProps);
            } catch (p) {
              dn(e, e.return, p);
            }
          }
        } else if (i.tag === $) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Vx(s) : Wx(s, i.memoizedProps);
            } catch (p) {
              dn(e, e.return, p);
            }
        } else if (!((i.tag === $e || i.tag === lt) && i.memoizedState !== null && i !== e)) {
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
    function ow(e) {
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
          if (e.mode & Lt)
            try {
              eo(), o = t(i);
            } finally {
              Zl(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", nt(e)), t.current = i;
      }
    }
    function mO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function uw(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, uw(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === X) {
          var a = e.stateNode;
          a !== null && Tb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function yO(e) {
      for (var t = e.return; t !== null; ) {
        if (sw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function sw(e) {
      return e.tag === X || e.tag === W || e.tag === oe;
    }
    function cw(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || sw(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== X && t.tag !== $ && t.tag !== qt; ) {
            if (t.flags & Jt || t.child === null || t.tag === oe)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Jt))
            return t.stateNode;
        }
    }
    function gO(e) {
      var t = yO(e);
      switch (t.tag) {
        case X: {
          var a = t.stateNode;
          t.flags & Fa && (fE(a), t.flags &= ~Fa);
          var i = cw(e);
          TS(e, i, a);
          break;
        }
        case W:
        case oe: {
          var o = t.stateNode.containerInfo, s = cw(e);
          wS(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, o = i === X || i === $;
      if (o) {
        var s = e.stateNode;
        t ? jx(a, s, t) : Ux(a, s);
      } else if (i !== oe) {
        var p = e.child;
        if (p !== null) {
          wS(p, t, a);
          for (var y = p.sibling; y !== null; )
            wS(y, t, a), y = y.sibling;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.tag, o = i === X || i === $;
      if (o) {
        var s = e.stateNode;
        t ? Ix(a, s, t) : Ax(a, s);
      } else if (i !== oe) {
        var p = e.child;
        if (p !== null) {
          TS(p, t, a);
          for (var y = p.sibling; y !== null; )
            TS(y, t, a), y = y.sibling;
        }
      }
    }
    var Pr = null, yl = !1;
    function SO(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case X: {
                Pr = i.stateNode, yl = !1;
                break e;
              }
              case W: {
                Pr = i.stateNode.containerInfo, yl = !0;
                break e;
              }
              case oe: {
                Pr = i.stateNode.containerInfo, yl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        fw(e, t, a), Pr = null, yl = !1;
      }
      mO(a);
    }
    function ts(e, t, a) {
      for (var i = a.child; i !== null; )
        fw(e, t, i), i = i.sibling;
    }
    function fw(e, t, a) {
      switch (rh(a), a.tag) {
        case X:
          Hr || rd(a, t);
        case $: {
          {
            var i = Pr, o = yl;
            Pr = null, ts(e, t, a), Pr = i, yl = o, Pr !== null && (yl ? Hx(Pr, a.stateNode) : Fx(Pr, a.stateNode));
          }
          return;
        }
        case qt: {
          Pr !== null && (yl ? Px(Pr, a.stateNode) : zg(Pr, a.stateNode));
          return;
        }
        case oe: {
          {
            var s = Pr, p = yl;
            Pr = a.stateNode.containerInfo, yl = !0, ts(e, t, a), Pr = s, yl = p;
          }
          return;
        }
        case q:
        case Ne:
        case gt:
        case Ze: {
          if (!Hr) {
            var y = a.updateQueue;
            if (y !== null) {
              var S = y.lastEffect;
              if (S !== null) {
                var x = S.next, b = x;
                do {
                  var z = b, N = z.destroy, V = z.tag;
                  N !== void 0 && ((V & $l) !== Ka ? $m(a, t, N) : (V & vr) !== Ka && (Su(a), a.mode & Lt ? (eo(), $m(a, t, N), Zl(a)) : $m(a, t, N), js())), b = b.next;
                } while (b !== x);
              }
            }
          }
          ts(e, t, a);
          return;
        }
        case A: {
          if (!Hr) {
            rd(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && RS(a, t, Y);
          }
          ts(e, t, a);
          return;
        }
        case Gt: {
          ts(e, t, a);
          return;
        }
        case $e: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ue
          ) {
            var J = Hr;
            Hr = J || a.memoizedState !== null, ts(e, t, a), Hr = J;
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
    function EO(e) {
      e.memoizedState;
    }
    function RO(e, t) {
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
    function dw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new aO()), t.forEach(function(i) {
          var o = yD.bind(null, e, i);
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
    function wO(e, t, a) {
      td = a, nd = e, Sn(t), pw(t, e), Sn(t), td = null, nd = null;
    }
    function gl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            SO(e, t, s);
          } catch (S) {
            dn(s, t, S);
          }
        }
      var p = ms();
      if (t.subtreeFlags & ta)
        for (var y = t.child; y !== null; )
          Sn(y), pw(y, e), y = y.sibling;
      Sn(p);
    }
    function pw(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case q:
        case Ne:
        case gt:
        case Ze: {
          if (gl(t, e), to(e), o & ze) {
            try {
              ml($l | pr, e, e.return), es($l | pr, e);
            } catch (et) {
              dn(e, e.return, et);
            }
            if (e.mode & Lt) {
              try {
                eo(), ml(vr | pr, e, e.return);
              } catch (et) {
                dn(e, e.return, et);
              }
              Zl(e);
            } else
              try {
                ml(vr | pr, e, e.return);
              } catch (et) {
                dn(e, e.return, et);
              }
          }
          return;
        }
        case A: {
          gl(t, e), to(e), o & Ta && i !== null && rd(i, i.return);
          return;
        }
        case X: {
          gl(t, e), to(e), o & Ta && i !== null && rd(i, i.return);
          {
            if (e.flags & Fa) {
              var s = e.stateNode;
              try {
                fE(s);
              } catch (et) {
                dn(e, e.return, et);
              }
            }
            if (o & ze) {
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
        case $: {
          if (gl(t, e), to(e), o & ze) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, N = e.memoizedProps, V = i !== null ? i.memoizedProps : N;
            try {
              zx(z, V, N);
            } catch (et) {
              dn(e, e.return, et);
            }
          }
          return;
        }
        case W: {
          if (gl(t, e), to(e), o & ze && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
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
          var J = e.child;
          if (J.flags & Nl) {
            var we = J.stateNode, We = J.memoizedState, Ie = We !== null;
            if (we.isHidden = Ie, Ie) {
              var kt = J.alternate !== null && J.alternate.memoizedState !== null;
              kt || nD();
            }
          }
          if (o & ze) {
            try {
              EO(e);
            } catch (et) {
              dn(e, e.return, et);
            }
            dw(e);
          }
          return;
        }
        case $e: {
          var Tt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ue
          ) {
            var F = Hr;
            Hr = F || Tt, gl(t, e), Hr = F;
          } else
            gl(t, e);
          if (to(e), o & Nl) {
            var K = e.stateNode, H = e.memoizedState, se = H !== null, Te = e;
            if (K.isHidden = se, se && !Tt && (Te.mode & Ue) !== Ye) {
              _e = Te;
              for (var ye = Te.child; ye !== null; )
                _e = ye, CO(ye), ye = ye.sibling;
            }
            hO(Te, se);
          }
          return;
        }
        case Et: {
          gl(t, e), to(e), o & ze && dw(e);
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
      if (t & Jt) {
        try {
          gO(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        e.flags &= ~Jt;
      }
      t & Ci && (e.flags &= ~Ci);
    }
    function TO(e, t, a) {
      td = a, nd = t, _e = e, vw(e, t, a), td = null, nd = null;
    }
    function vw(e, t, a) {
      for (var i = (e.mode & Ue) !== Ye; _e !== null; ) {
        var o = _e, s = o.child;
        if (o.tag === $e && i) {
          var p = o.memoizedState !== null, y = p || Gm;
          if (y) {
            CS(e, t, a);
            continue;
          } else {
            var S = o.alternate, x = S !== null && S.memoizedState !== null, b = x || Hr, z = Gm, N = Hr;
            Gm = y, Hr = b, Hr && !N && (_e = o, xO(o));
            for (var V = s; V !== null; )
              _e = V, vw(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            _e = o, Gm = z, Hr = N, CS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & di) !== Ve && s !== null ? (s.return = o, _e = s) : CS(e, t, a);
      }
    }
    function CS(e, t, a) {
      for (; _e !== null; ) {
        var i = _e;
        if ((i.flags & di) !== Ve) {
          var o = i.alternate;
          Sn(i);
          try {
            pO(t, o, i, a);
          } catch (p) {
            dn(i, i.return, p);
          }
          un();
        }
        if (i === e) {
          _e = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, _e = s;
          return;
        }
        _e = i.return;
      }
    }
    function CO(e) {
      for (; _e !== null; ) {
        var t = _e, a = t.child;
        switch (t.tag) {
          case q:
          case Ne:
          case gt:
          case Ze: {
            if (t.mode & Lt)
              try {
                eo(), ml(vr, t, t.return);
              } finally {
                Zl(t);
              }
            else
              ml(vr, t, t.return);
            break;
          }
          case A: {
            rd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case X: {
            rd(t, t.return);
            break;
          }
          case $e: {
            var o = t.memoizedState !== null;
            if (o) {
              hw(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, _e = a) : hw(e);
      }
    }
    function hw(e) {
      for (; _e !== null; ) {
        var t = _e;
        if (t === e) {
          _e = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, _e = a;
          return;
        }
        _e = t.return;
      }
    }
    function xO(e) {
      for (; _e !== null; ) {
        var t = _e, a = t.child;
        if (t.tag === $e) {
          var i = t.memoizedState !== null;
          if (i) {
            mw(e);
            continue;
          }
        }
        a !== null ? (a.return = t, _e = a) : mw(e);
      }
    }
    function mw(e) {
      for (; _e !== null; ) {
        var t = _e;
        Sn(t);
        try {
          vO(t);
        } catch (i) {
          dn(t, t.return, i);
        }
        if (un(), t === e) {
          _e = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, _e = a;
          return;
        }
        _e = t.return;
      }
    }
    function bO(e, t, a, i) {
      _e = t, kO(t, e, a, i);
    }
    function kO(e, t, a, i) {
      for (; _e !== null; ) {
        var o = _e, s = o.child;
        (o.subtreeFlags & na) !== Ve && s !== null ? (s.return = o, _e = s) : OO(e, t, a, i);
      }
    }
    function OO(e, t, a, i) {
      for (; _e !== null; ) {
        var o = _e;
        if ((o.flags & Zr) !== Ve) {
          Sn(o);
          try {
            DO(t, o, a, i);
          } catch (p) {
            dn(o, o.return, p);
          }
          un();
        }
        if (o === e) {
          _e = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, _e = s;
          return;
        }
        _e = o.return;
      }
    }
    function DO(e, t, a, i) {
      switch (t.tag) {
        case q:
        case Ne:
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
    function _O(e) {
      _e = e, LO();
    }
    function LO() {
      for (; _e !== null; ) {
        var e = _e, t = e.child;
        if ((_e.flags & Mt) !== Ve) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              _e = o, zO(o, e);
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
            _e = e;
          }
        }
        (e.subtreeFlags & na) !== Ve && t !== null ? (t.return = e, _e = t) : NO();
      }
    }
    function NO() {
      for (; _e !== null; ) {
        var e = _e;
        (e.flags & Zr) !== Ve && (Sn(e), MO(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, _e = t;
          return;
        }
        _e = e.return;
      }
    }
    function MO(e) {
      switch (e.tag) {
        case q:
        case Ne:
        case Ze: {
          e.mode & Lt ? (tS(), ml(jr | pr, e, e.return), eS(e)) : ml(jr | pr, e, e.return);
          break;
        }
      }
    }
    function zO(e, t) {
      for (; _e !== null; ) {
        var a = _e;
        Sn(a), UO(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, _e = i) : AO(e);
      }
    }
    function AO(e) {
      for (; _e !== null; ) {
        var t = _e, a = t.sibling, i = t.return;
        if (uw(t), t === e) {
          _e = null;
          return;
        }
        if (a !== null) {
          a.return = i, _e = a;
          return;
        }
        _e = i;
      }
    }
    function UO(e, t) {
      switch (e.tag) {
        case q:
        case Ne:
        case Ze: {
          e.mode & Lt ? (tS(), ml(jr, e, t), eS(e)) : ml(jr, e, t);
          break;
        }
      }
    }
    function IO(e) {
      switch (e.tag) {
        case q:
        case Ne:
        case Ze: {
          try {
            es(vr | pr, e);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case A: {
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
    function jO(e) {
      switch (e.tag) {
        case q:
        case Ne:
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
    function FO(e) {
      switch (e.tag) {
        case q:
        case Ne:
        case Ze: {
          try {
            ml(vr | pr, e, e.return);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function HO(e) {
      switch (e.tag) {
        case q:
        case Ne:
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
    var PO = [];
    function BO() {
      PO.forEach(function(e) {
        return e();
      });
    }
    var VO = v.ReactCurrentActQueue;
    function YO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function yw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && VO.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var WO = Math.ceil, xS = v.ReactCurrentDispatcher, bS = v.ReactCurrentOwner, Br = v.ReactCurrentBatchConfig, Sl = v.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), gw = (
      /*               */
      1
    ), Vr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Go = 0, Xp = 1, Rc = 2, Jm = 3, Gp = 4, Sw = 5, kS = 6, bt = yr, Da = null, jn = null, gr = ee, no = ee, OS = Wu(ee), Sr = Go, $p = null, Km = ee, Jp = ee, Zm = ee, Kp = null, Za = null, DS = 0, Ew = 500, Rw = 1 / 0, qO = 500, $o = null;
    function Zp() {
      Rw = Vn() + qO;
    }
    function ww() {
      return Rw;
    }
    var ey = !1, _S = null, ad = null, wc = !1, ns = null, ev = ee, LS = [], NS = null, QO = 50, tv = 0, MS = null, zS = !1, ty = !1, XO = 50, id = 0, ny = null, nv = an, ry = ee, Tw = !1;
    function ay() {
      return Da;
    }
    function _a() {
      return (bt & (Vr | ji)) !== yr ? Vn() : (nv !== an || (nv = Vn()), nv);
    }
    function rs(e) {
      var t = e.mode;
      if ((t & Ue) === Ye)
        return Xe;
      if ((bt & Vr) !== yr && gr !== ee)
        return bu(gr);
      var a = Yb() !== Vb;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ry === zn && (ry = mh()), ry;
      }
      var o = Wa();
      if (o !== zn)
        return o;
      var s = Ox();
      return s;
    }
    function GO(e) {
      var t = e.mode;
      return (t & Ue) === Ye ? Xe : la();
    }
    function Er(e, t, a, i) {
      SD(), Tw && g("useInsertionEffect must not schedule updates."), zS && (ty = !0), Ao(e, a, i), (bt & Vr) !== ee && e === Da ? wD(t) : (ba && df(e, t, a), TD(t), e === Da && ((bt & Vr) === yr && (Jp = ut(Jp, a)), Sr === Gp && as(e, gr)), ei(e, i), a === Xe && bt === yr && (t.mode & Ue) === Ye && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Sl.isBatchingLegacy && (Zp(), wE()));
    }
    function $O(e, t, a) {
      var i = e.current;
      i.lanes = t, Ao(e, t, a), ei(e, a);
    }
    function JO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (bt & Vr) !== yr
      );
    }
    function ei(e, t) {
      var a = e.callbackNode;
      Zy(e, t);
      var i = qs(e, e === Da ? gr : ee);
      if (i === ee) {
        a !== null && Fw(a), e.callbackNode = null, e.callbackPriority = zn;
        return;
      }
      var o = An(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Sl.current !== null && a !== PS)) {
        a == null && s !== Xe && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Fw(a);
      var p;
      if (o === Xe)
        e.tag === qu ? (Sl.isBatchingLegacy !== null && (Sl.didScheduleLegacyUpdate = !0), bb(bw.bind(null, e))) : RE(bw.bind(null, e)), Sl.current !== null ? Sl.current.push(Qu) : _x(function() {
          (bt & (Vr | ji)) === yr && Qu();
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
          case Di:
            y = bi;
            break;
          case ku:
            y = Us;
            break;
          default:
            y = bi;
            break;
        }
        p = BS(y, Cw.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = p;
    }
    function Cw(e, t) {
      if (Sk(), nv = an, ry = ee, (bt & (Vr | ji)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ko();
      if (i && e.callbackNode !== a)
        return null;
      var o = qs(e, e === Da ? gr : ee);
      if (o === ee)
        return null;
      var s = !Xs(e, o) && !hh(e, o) && !t, p = s ? oD(e, o) : ly(e, o);
      if (p !== Go) {
        if (p === Rc) {
          var y = Bl(e);
          y !== ee && (o = y, p = AS(e, y));
        }
        if (p === Xp) {
          var S = $p;
          throw Tc(e, ee), as(e, o), ei(e, Vn()), S;
        }
        if (p === kS)
          as(e, o);
        else {
          var x = !Xs(e, o), b = e.current.alternate;
          if (x && !ZO(b)) {
            if (p = ly(e, o), p === Rc) {
              var z = Bl(e);
              z !== ee && (o = z, p = AS(e, z));
            }
            if (p === Xp) {
              var N = $p;
              throw Tc(e, ee), as(e, o), ei(e, Vn()), N;
            }
          }
          e.finishedWork = b, e.finishedLanes = o, KO(e, p, o);
        }
      }
      return ei(e, Vn()), e.callbackNode === a ? Cw.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = Kp;
      if (pf(e)) {
        var i = Tc(e, t);
        i.flags |= zr, Sb(e.containerInfo);
      }
      var o = ly(e, t);
      if (o !== Rc) {
        var s = Za;
        Za = a, s !== null && xw(s);
      }
      return o;
    }
    function xw(e) {
      Za === null ? Za = e : Za.push.apply(Za, e);
    }
    function KO(e, t, a) {
      switch (t) {
        case Go:
        case Xp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Rc: {
          Cc(e, Za, $o);
          break;
        }
        case Jm: {
          if (as(e, a), dh(a) && // do not delay if we're inside an act() scope
          !Hw()) {
            var i = DS + Ew - Vn();
            if (i > 10) {
              var o = qs(e, ee);
              if (o !== ee)
                break;
              var s = e.suspendedLanes;
              if (!zo(s, a)) {
                _a(), cf(e, s);
                break;
              }
              e.timeoutHandle = Ng(Cc.bind(null, e, Za, $o), i);
              break;
            }
          }
          Cc(e, Za, $o);
          break;
        }
        case Gp: {
          if (as(e, a), vh(a))
            break;
          if (!Hw()) {
            var p = of(e, a), y = p, S = Vn() - y, x = gD(S) - S;
            if (x > 10) {
              e.timeoutHandle = Ng(Cc.bind(null, e, Za, $o), x);
              break;
            }
          }
          Cc(e, Za, $o);
          break;
        }
        case Sw: {
          Cc(e, Za, $o);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function ZO(e) {
      for (var t = e; ; ) {
        if (t.flags & To) {
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
        if (t.subtreeFlags & To && S !== null) {
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
      t = Gs(t, Zm), t = Gs(t, Jp), gh(e, t);
    }
    function bw(e) {
      if (Ek(), (bt & (Vr | ji)) !== yr)
        throw new Error("Should not already be working.");
      Ko();
      var t = qs(e, ee);
      if (!oa(t, Xe))
        return ei(e, Vn()), null;
      var a = ly(e, t);
      if (e.tag !== qu && a === Rc) {
        var i = Bl(e);
        i !== ee && (t = i, a = AS(e, i));
      }
      if (a === Xp) {
        var o = $p;
        throw Tc(e, ee), as(e, t), ei(e, Vn()), o;
      }
      if (a === kS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Cc(e, Za, $o), ei(e, Vn()), null;
    }
    function eD(e, t) {
      t !== ee && (Xd(e, ut(t, Xe)), ei(e, Vn()), (bt & (Vr | ji)) === yr && (Zp(), Qu()));
    }
    function US(e, t) {
      var a = bt;
      bt |= gw;
      try {
        return e(t);
      } finally {
        bt = a, bt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Sl.isBatchingLegacy && (Zp(), wE());
      }
    }
    function tD(e, t, a, i, o) {
      var s = Wa(), p = Br.transition;
      try {
        return Br.transition = null, On(Un), e(t, a, i, o);
      } finally {
        On(s), Br.transition = p, bt === yr && Zp();
      }
    }
    function Jo(e) {
      ns !== null && ns.tag === qu && (bt & (Vr | ji)) === yr && Ko();
      var t = bt;
      bt |= gw;
      var a = Br.transition, i = Wa();
      try {
        return Br.transition = null, On(Un), e ? e() : void 0;
      } finally {
        On(i), Br.transition = a, bt = t, (bt & (Vr | ji)) === yr && Qu();
      }
    }
    function kw() {
      return (bt & (Vr | ji)) !== yr;
    }
    function iy(e, t) {
      ca(OS, no, e), no = ut(no, t);
    }
    function IS(e) {
      no = OS.current, sa(OS, e);
    }
    function Tc(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var a = e.timeoutHandle;
      if (a !== Mg && (e.timeoutHandle = Mg, Dx(a)), jn !== null)
        for (var i = jn.return; i !== null; ) {
          var o = i.alternate;
          nw(o, i), i = i.return;
        }
      Da = e;
      var s = xc(e.current, null);
      return jn = s, gr = no = t, Sr = Go, $p = null, Km = ee, Jp = ee, Zm = ee, Kp = null, Za = null, Xb(), fl.discardPendingWarnings(), s;
    }
    function Ow(e, t) {
      do {
        var a = jn;
        try {
          if (pm(), aR(), un(), bS.current = null, a === null || a.return === null) {
            Sr = Xp, $p = t, jn = null;
            return;
          }
          if (Rt && a.mode & Lt && Wm(a, !0), ht)
            if (bo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              sh(a, i, gr);
            } else
              uh(a, t, gr);
          xk(e, a.return, a, t, gr), Nw(a);
        } catch (o) {
          t = o, jn === a && a !== null ? (a = a.return, jn = a) : a = jn;
          continue;
        }
        return;
      } while (!0);
    }
    function Dw() {
      var e = xS.current;
      return xS.current = Hm, e === null ? Hm : e;
    }
    function _w(e) {
      xS.current = e;
    }
    function nD() {
      DS = Vn();
    }
    function rv(e) {
      Km = ut(e, Km);
    }
    function rD() {
      Sr === Go && (Sr = Jm);
    }
    function jS() {
      (Sr === Go || Sr === Jm || Sr === Rc) && (Sr = Gp), Da !== null && (Qs(Km) || Qs(Jp)) && as(Da, gr);
    }
    function aD(e) {
      Sr !== Gp && (Sr = Rc), Kp === null ? Kp = [e] : Kp.push(e);
    }
    function iD() {
      return Sr === Go;
    }
    function ly(e, t) {
      var a = bt;
      bt |= Vr;
      var i = Dw();
      if (Da !== e || gr !== t) {
        if (ba) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (av(e, gr), o.clear()), Gd(e, t);
        }
        $o = Js(), Tc(e, t);
      }
      Ru(t);
      do
        try {
          lD();
          break;
        } catch (s) {
          Ow(e, s);
        }
      while (!0);
      if (pm(), bt = a, _w(i), jn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Fl(), Da = null, gr = ee, Sr;
    }
    function lD() {
      for (; jn !== null; )
        Lw(jn);
    }
    function oD(e, t) {
      var a = bt;
      bt |= Vr;
      var i = Dw();
      if (Da !== e || gr !== t) {
        if (ba) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (av(e, gr), o.clear()), Gd(e, t);
        }
        $o = Js(), Zp(), Tc(e, t);
      }
      Ru(t);
      do
        try {
          uD();
          break;
        } catch (s) {
          Ow(e, s);
        }
      while (!0);
      return pm(), _w(i), bt = a, jn !== null ? (Hs(), Go) : (Fl(), Da = null, gr = ee, Sr);
    }
    function uD() {
      for (; jn !== null && !th(); )
        Lw(jn);
    }
    function Lw(e) {
      var t = e.alternate;
      Sn(e);
      var a;
      (e.mode & Lt) !== Ye ? (Z0(e), a = FS(t, e, no), Wm(e, !0)) : a = FS(t, e, no), un(), e.memoizedProps = e.pendingProps, a === null ? Nw(e) : jn = a, bS.current = null;
    }
    function Nw(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ml) === Ve) {
          Sn(t);
          var o = void 0;
          if ((t.mode & Lt) === Ye ? o = tw(a, t, no) : (Z0(t), o = tw(a, t, no), Wm(t, !1)), un(), o !== null) {
            jn = o;
            return;
          }
        } else {
          var s = rO(a, t);
          if (s !== null) {
            s.flags &= nl, jn = s;
            return;
          }
          if ((t.mode & Lt) !== Ye) {
            Wm(t, !1);
            for (var p = t.actualDuration, y = t.child; y !== null; )
              p += y.actualDuration, y = y.sibling;
            t.actualDuration = p;
          }
          if (i !== null)
            i.flags |= Ml, i.subtreeFlags = Ve, i.deletions = null;
          else {
            Sr = kS, jn = null;
            return;
          }
        }
        var S = t.sibling;
        if (S !== null) {
          jn = S;
          return;
        }
        t = i, jn = t;
      } while (t !== null);
      Sr === Go && (Sr = Sw);
    }
    function Cc(e, t, a) {
      var i = Wa(), o = Br.transition;
      try {
        Br.transition = null, On(Un), sD(e, t, a, i);
      } finally {
        Br.transition = o, On(i);
      }
      return null;
    }
    function sD(e, t, a, i) {
      do
        Ko();
      while (ns !== null);
      if (ED(), (bt & (Vr | ji)) !== yr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (ah(s), o === null)
        return Is(), null;
      if (s === ee && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = zn;
      var p = ut(o.lanes, o.childLanes);
      ff(e, p), e === Da && (Da = null, jn = null, gr = ee), ((o.subtreeFlags & na) !== Ve || (o.flags & na) !== Ve) && (wc || (wc = !0, NS = a, BS(bi, function() {
        return Ko(), null;
      })));
      var y = (o.subtreeFlags & (ea | ta | di | na)) !== Ve, S = (o.flags & (ea | ta | di | na)) !== Ve;
      if (y || S) {
        var x = Br.transition;
        Br.transition = null;
        var b = Wa();
        On(Un);
        var z = bt;
        bt |= ji, bS.current = null, uO(e, o), DR(), wO(e, o, s), wx(e.containerInfo), e.current = o, Eu(s), TO(o, e, s), ch(), hu(), bt = z, On(b), Br.transition = x;
      } else
        e.current = o, DR();
      var N = wc;
      if (wc ? (wc = !1, ns = e, ev = s) : (id = 0, ny = null), p = e.pendingLanes, p === ee && (ad = null), N || Uw(e.current, !1), Il(o.stateNode, i), ba && e.memoizedUpdaters.clear(), BO(), ei(e, Vn()), t !== null)
        for (var V = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var J = t[Y], we = J.stack, We = J.digest;
          V(J.value, {
            componentStack: we,
            digest: We
          });
        }
      if (ey) {
        ey = !1;
        var Ie = _S;
        throw _S = null, Ie;
      }
      return oa(ev, Xe) && e.tag !== qu && Ko(), p = e.pendingLanes, oa(p, Xe) ? (gk(), e === MS ? tv++ : (tv = 0, MS = e)) : tv = 0, Qu(), Is(), null;
    }
    function Ko() {
      if (ns !== null) {
        var e = dr(ev), t = rg(Di, e), a = Br.transition, i = Wa();
        try {
          return Br.transition = null, On(t), fD();
        } finally {
          On(i), Br.transition = a;
        }
      }
      return !1;
    }
    function cD(e) {
      LS.push(e), wc || (wc = !0, BS(bi, function() {
        return Ko(), null;
      }));
    }
    function fD() {
      if (ns === null)
        return !1;
      var e = NS;
      NS = null;
      var t = ns, a = ev;
      if (ns = null, ev = ee, (bt & (Vr | ji)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      zS = !0, ty = !1, Fs(a);
      var i = bt;
      bt |= ji, _O(t.current), bO(t, t.current, a, e);
      {
        var o = LS;
        LS = [];
        for (var s = 0; s < o.length; s++) {
          var p = o[s];
          dO(t, p);
        }
      }
      ki(), Uw(t.current, !0), bt = i, Qu(), ty ? t === ny ? id++ : (id = 0, ny = t) : id = 0, zS = !1, ty = !1, Fd(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Mw(e) {
      return ad !== null && ad.has(e);
    }
    function dD(e) {
      ad === null ? ad = /* @__PURE__ */ new Set([e]) : ad.add(e);
    }
    function pD(e) {
      ey || (ey = !0, _S = e);
    }
    var vD = pD;
    function zw(e, t, a) {
      var i = Sc(a, t), o = LR(e, i, Xe), s = Gu(e, o, Xe), p = _a();
      s !== null && (Ao(s, Xe, p), ei(s, p));
    }
    function dn(e, t, a) {
      if (iO(a), iv(!1), e.tag === W) {
        zw(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === W) {
          zw(i, e, a);
          return;
        } else if (i.tag === A) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !Mw(s)) {
            var p = Sc(a, e), y = iS(i, p, Xe), S = Gu(i, y, Xe), x = _a();
            S !== null && (Ao(S, Xe, x), ei(S, x));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function hD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = _a();
      cf(e, a), CD(e), Da === e && zo(gr, a) && (Sr === Gp || Sr === Jm && dh(gr) && Vn() - DS < Ew ? Tc(e, ee) : Zm = ut(Zm, a)), ei(e, o);
    }
    function Aw(e, t) {
      t === zn && (t = GO(e));
      var a = _a(), i = Ja(e, t);
      i !== null && (Ao(i, t, a), ei(i, a));
    }
    function mD(e) {
      var t = e.memoizedState, a = zn;
      t !== null && (a = t.retryLane), Aw(e, a);
    }
    function yD(e, t) {
      var a = zn, i;
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
    function gD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : WO(e / 1960) * 1960;
    }
    function SD() {
      if (tv > QO)
        throw tv = 0, MS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      id > XO && (id = 0, ny = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ED() {
      fl.flushLegacyContextWarning(), fl.flushPendingUnsafeLifecycleWarnings();
    }
    function Uw(e, t) {
      Sn(e), oy(e, Pa, FO), t && oy(e, Co, HO), oy(e, Pa, IO), t && oy(e, Co, jO), un();
    }
    function oy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ve ? i = i.child : ((i.flags & t) !== Ve && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var uy = null;
    function Iw(e) {
      {
        if ((bt & Vr) !== yr || !(e.mode & Ue))
          return;
        var t = e.tag;
        if (t !== I && t !== W && t !== A && t !== q && t !== Ne && t !== gt && t !== Ze)
          return;
        var a = nt(e) || "ReactComponent";
        if (uy !== null) {
          if (uy.has(a))
            return;
          uy.add(a);
        } else
          uy = /* @__PURE__ */ new Set([a]);
        var i = gn;
        try {
          Sn(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Sn(e) : un();
        }
      }
    }
    var FS;
    {
      var RD = null;
      FS = function(e, t, a) {
        var i = Ww(RD, t);
        try {
          return $R(e, t, a);
        } catch (s) {
          if (zb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (pm(), aR(), nw(e, t), Ww(t, i), t.mode & Lt && Z0(t), ci(null, $R, null, e, t, a), $y()) {
            var o = tl();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var jw = !1, HS;
    HS = /* @__PURE__ */ new Set();
    function wD(e) {
      if ($r && !hk())
        switch (e.tag) {
          case q:
          case Ne:
          case Ze: {
            var t = jn && nt(jn) || "Unknown", a = t;
            if (!HS.has(a)) {
              HS.add(a);
              var i = nt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case A: {
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
    var PS = {};
    function BS(e, t) {
      {
        var a = Sl.current;
        return a !== null ? (a.push(t), PS) : Ud(e, t);
      }
    }
    function Fw(e) {
      if (e !== PS)
        return Vc(e);
    }
    function Hw() {
      return Sl.current !== null;
    }
    function TD(e) {
      {
        if (e.mode & Ue) {
          if (!yw())
            return;
        } else if (!YO() || bt !== yr || e.tag !== q && e.tag !== Ne && e.tag !== Ze)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, nt(e));
          } finally {
            t ? Sn(e) : un();
          }
        }
      }
    }
    function CD(e) {
      e.tag !== qu && yw() && Sl.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function iv(e) {
      Tw = e;
    }
    var Fi = null, ld = null, xD = function(e) {
      Fi = e;
    };
    function od(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function VS(e) {
      return od(e);
    }
    function YS(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
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
    function Pw(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case A: {
            typeof i == "function" && (o = !0);
            break;
          }
          case q: {
            (typeof i == "function" || s === Be) && (o = !0);
            break;
          }
          case Ne: {
            (s === me || s === Be) && (o = !0);
            break;
          }
          case gt:
          case Ze: {
            (s === ct || s === Be) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var p = Fi(a);
          if (p !== void 0 && p === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function Bw(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        ld === null && (ld = /* @__PURE__ */ new WeakSet()), ld.add(e);
      }
    }
    var bD = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ko(), Jo(function() {
          WS(e.current, i, a);
        });
      }
    }, kD = function(e, t) {
      {
        if (e.context !== pi)
          return;
        Ko(), Jo(function() {
          lv(t, e, null, null);
        });
      }
    };
    function WS(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, p = e.tag, y = e.type, S = null;
        switch (p) {
          case q:
          case Ze:
          case A:
            S = y;
            break;
          case Ne:
            S = y.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, b = !1;
        if (S !== null) {
          var z = Fi(S);
          z !== void 0 && (a.has(z) ? b = !0 : t.has(z) && (p === A ? b = !0 : x = !0));
        }
        if (ld !== null && (ld.has(e) || i !== null && ld.has(i)) && (b = !0), b && (e._debugNeedsRemount = !0), b || x) {
          var N = Ja(e, Xe);
          N !== null && Er(N, e, Xe, an);
        }
        o !== null && !b && WS(o, t, a), s !== null && WS(s, t, a);
      }
    }
    var OD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, p = e.type, y = null;
        switch (s) {
          case q:
          case Ze:
          case A:
            y = p;
            break;
          case Ne:
            y = p.render;
            break;
        }
        var S = !1;
        y !== null && t.has(y) && (S = !0), S ? DD(e, a) : i !== null && qS(i, t, a), o !== null && qS(o, t, a);
      }
    }
    function DD(e, t) {
      {
        var a = _D(e, t);
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
            case W:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function _D(e, t) {
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
    var QS;
    {
      QS = !1;
      try {
        var Vw = Object.preventExtensions({});
      } catch {
        QS = !0;
      }
    }
    function LD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ve, this.subtreeFlags = Ve, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !QS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var vi = function(e, t, a, i) {
      return new LD(e, t, a, i);
    };
    function XS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ND(e) {
      return typeof e == "function" && !XS(e) && e.defaultProps === void 0;
    }
    function MD(e) {
      if (typeof e == "function")
        return XS(e) ? A : q;
      if (e != null) {
        var t = e.$$typeof;
        if (t === me)
          return Ne;
        if (t === ct)
          return gt;
      }
      return I;
    }
    function xc(e, t) {
      var a = e.alternate;
      a === null ? (a = vi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ve, a.subtreeFlags = Ve, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & fr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case I:
        case q:
        case Ze:
          a.type = od(e.type);
          break;
        case A:
          a.type = VS(e.type);
          break;
        case Ne:
          a.type = YS(e.type);
          break;
      }
      return a;
    }
    function zD(e, t) {
      e.flags &= fr | Jt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ee, e.lanes = t, e.child = null, e.subtreeFlags = Ve, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ve, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function AD(e, t, a) {
      var i;
      return e === im ? (i = Ue, t === !0 && (i |= bn, i |= Va)) : i = Ye, ba && (i |= Lt), vi(W, null, null, i);
    }
    function GS(e, t, a, i, o, s) {
      var p = I, y = e;
      if (typeof e == "function")
        XS(e) ? (p = A, y = VS(y)) : y = od(y);
      else if (typeof e == "string")
        p = X;
      else
        e:
          switch (e) {
            case Ea:
              return is(a.children, o, s, t);
            case Bi:
              p = st, o |= bn, (o & Ue) !== Ye && (o |= Va);
              break;
            case D:
              return UD(a, o, s, t);
            case St:
              return ID(a, o, s, t);
            case xt:
              return jD(a, o, s, t);
            case tn:
              return Yw(a, o, s, t);
            case xr:
            case Pn:
            case yi:
            case nn:
            case en:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ie:
                    p = Fe;
                    break e;
                  case pe:
                    p = vt;
                    break e;
                  case me:
                    p = Ne, y = YS(y);
                    break e;
                  case ct:
                    p = gt;
                    break e;
                  case Be:
                    p = pn, y = null;
                    break e;
                }
              var S = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var x = i ? nt(i) : null;
                x && (S += `

Check the render method of \`` + x + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
            }
          }
      var b = vi(p, a, t, o);
      return b.elementType = e, b.type = y, b.lanes = s, b._debugOwner = i, b;
    }
    function $S(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, p = e.props, y = GS(o, s, p, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function is(e, t, a, i) {
      var o = vi(Ce, e, i, t);
      return o.lanes = a, o;
    }
    function UD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = vi(yt, e, i, t | Lt);
      return o.elementType = D, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function ID(e, t, a, i) {
      var o = vi(xe, e, i, t);
      return o.elementType = St, o.lanes = a, o;
    }
    function jD(e, t, a, i) {
      var o = vi(Et, e, i, t);
      return o.elementType = xt, o.lanes = a, o;
    }
    function Yw(e, t, a, i) {
      var o = vi($e, e, i, t);
      o.elementType = tn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function JS(e, t, a) {
      var i = vi($, e, null, t);
      return i.lanes = a, i;
    }
    function FD() {
      var e = vi(X, null, null, Ye);
      return e.elementType = "DELETED", e;
    }
    function HD(e) {
      var t = vi(qt, null, null, Ye);
      return t.stateNode = e, t;
    }
    function KS(e, t, a) {
      var i = e.children !== null ? e.children : [], o = vi(oe, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function Ww(e, t) {
      return e === null && (e = vi(I, null, null, Ye)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function PD(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Mg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = zn, this.eventTimes = $s(ee), this.expirationTimes = $s(an), this.pendingLanes = ee, this.suspendedLanes = ee, this.pingedLanes = ee, this.expiredLanes = ee, this.mutableReadLanes = ee, this.finishedLanes = ee, this.entangledLanes = ee, this.entanglements = $s(ee), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], p = 0; p < Mn; p++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case im:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function qw(e, t, a, i, o, s, p, y, S, x) {
      var b = new PD(e, t, a, y, S), z = AD(t, s);
      b.current = z, z.stateNode = b;
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
      return l0(z), b;
    }
    var ZS = "18.2.0";
    function BD(e, t, a) {
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
    var e1, t1;
    e1 = !1, t1 = {};
    function Qw(e) {
      if (!e)
        return pi;
      var t = Ti(e), a = xb(t);
      if (t.tag === A) {
        var i = t.type;
        if (Gl(i))
          return SE(t, i, a);
      }
      return a;
    }
    function VD(e, t) {
      {
        var a = Ti(e);
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
          var s = nt(a) || "Component";
          if (!t1[s]) {
            t1[s] = !0;
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
    function Xw(e, t, a, i, o, s, p, y) {
      var S = !1, x = null;
      return qw(e, t, S, x, a, i, o, s, p);
    }
    function Gw(e, t, a, i, o, s, p, y, S, x) {
      var b = !0, z = qw(a, i, b, e, o, s, p, y, S);
      z.context = Qw(null);
      var N = z.current, V = _a(), Y = rs(N), J = Qo(V, Y);
      return J.callback = t ?? null, Gu(N, J, Y), $O(z, Y, V), z;
    }
    function lv(e, t, a, i) {
      rl(t, e);
      var o = t.current, s = _a(), p = rs(o);
      Bd(p);
      var y = Qw(a);
      t.context === null ? t.context = y : t.pendingContext = y, $r && gn !== null && !e1 && (e1 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, nt(gn) || "Unknown"));
      var S = Qo(s, p);
      S.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), S.callback = i);
      var x = Gu(o, S, p);
      return x !== null && (Er(x, o, p, s), gm(x, o, p)), p;
    }
    function sy(e) {
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
    function YD(e) {
      switch (e.tag) {
        case W: {
          var t = e.stateNode;
          if (pf(t)) {
            var a = eg(t);
            eD(t, a);
          }
          break;
        }
        case xe: {
          Jo(function() {
            var o = Ja(e, Xe);
            if (o !== null) {
              var s = _a();
              Er(o, e, Xe, s);
            }
          });
          var i = Xe;
          n1(e, i);
          break;
        }
      }
    }
    function $w(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = yh(a.retryLane, t));
    }
    function n1(e, t) {
      $w(e, t);
      var a = e.alternate;
      a && $w(a, t);
    }
    function WD(e) {
      if (e.tag === xe) {
        var t = Mo, a = Ja(e, t);
        if (a !== null) {
          var i = _a();
          Er(a, e, t, i);
        }
        n1(e, t);
      }
    }
    function qD(e) {
      if (e.tag === xe) {
        var t = rs(e), a = Ja(e, t);
        if (a !== null) {
          var i = _a();
          Er(a, e, t, i);
        }
        n1(e, t);
      }
    }
    function Jw(e) {
      var t = Ad(e);
      return t === null ? null : t.stateNode;
    }
    var Kw = function(e) {
      return null;
    };
    function QD(e) {
      return Kw(e);
    }
    var Zw = function(e) {
      return !1;
    };
    function XD(e) {
      return Zw(e);
    }
    var eT = null, tT = null, nT = null, rT = null, aT = null, iT = null, lT = null, oT = null, uT = null;
    {
      var sT = function(e, t, a) {
        var i = t[a], o = _t(e) ? e.slice() : dt({}, e);
        return a + 1 === t.length ? (_t(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = sT(e[i], t, a + 1), o);
      }, cT = function(e, t) {
        return sT(e, t, 0);
      }, fT = function(e, t, a, i) {
        var o = t[i], s = _t(e) ? e.slice() : dt({}, e);
        if (i + 1 === t.length) {
          var p = a[i];
          s[p] = s[o], _t(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = fT(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, dT = function(e, t, a) {
        if (t.length !== a.length) {
          R("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              R("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return fT(e, t, a, 0);
      }, pT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = _t(e) ? e.slice() : dt({}, e);
        return s[o] = pT(e[o], t, a + 1, i), s;
      }, vT = function(e, t, a) {
        return pT(e, t, 0, a);
      }, r1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      eT = function(e, t, a, i) {
        var o = r1(e, t);
        if (o !== null) {
          var s = vT(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = dt({}, e.memoizedProps);
          var p = Ja(e, Xe);
          p !== null && Er(p, e, Xe, an);
        }
      }, tT = function(e, t, a) {
        var i = r1(e, t);
        if (i !== null) {
          var o = cT(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = dt({}, e.memoizedProps);
          var s = Ja(e, Xe);
          s !== null && Er(s, e, Xe, an);
        }
      }, nT = function(e, t, a, i) {
        var o = r1(e, t);
        if (o !== null) {
          var s = dT(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = dt({}, e.memoizedProps);
          var p = Ja(e, Xe);
          p !== null && Er(p, e, Xe, an);
        }
      }, rT = function(e, t, a) {
        e.pendingProps = vT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ja(e, Xe);
        i !== null && Er(i, e, Xe, an);
      }, aT = function(e, t) {
        e.pendingProps = cT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ja(e, Xe);
        a !== null && Er(a, e, Xe, an);
      }, iT = function(e, t, a) {
        e.pendingProps = dT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ja(e, Xe);
        i !== null && Er(i, e, Xe, an);
      }, lT = function(e) {
        var t = Ja(e, Xe);
        t !== null && Er(t, e, Xe, an);
      }, oT = function(e) {
        Kw = e;
      }, uT = function(e) {
        Zw = e;
      };
    }
    function GD(e) {
      var t = Md(e);
      return t === null ? null : t.stateNode;
    }
    function $D(e) {
      return null;
    }
    function JD() {
      return gn;
    }
    function KD(e) {
      var t = e.findFiberByHostInstance, a = v.ReactCurrentDispatcher;
      return nh({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: eT,
        overrideHookStateDeletePath: tT,
        overrideHookStateRenamePath: nT,
        overrideProps: rT,
        overridePropsDeletePath: aT,
        overridePropsRenamePath: iT,
        setErrorHandler: oT,
        setSuspenseHandler: uT,
        scheduleUpdate: lT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: GD,
        findFiberByHostInstance: t || $D,
        // React Refresh
        findHostInstancesForRefresh: OD,
        scheduleRefresh: bD,
        scheduleRoot: kD,
        setRefreshHandler: xD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: JD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ZS
      });
    }
    var hT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function a1(e) {
      this._internalRoot = e;
    }
    cy.prototype.render = a1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : fy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== xn) {
          var i = Jw(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      lv(e, t, null, null);
    }, cy.prototype.unmount = a1.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        kw() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Jo(function() {
          lv(null, e, null, null);
        }), vE(t);
      }
    };
    function ZD(e, t) {
      if (!fy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      mT(e);
      var a = !1, i = !1, o = "", s = hT;
      t != null && (t.hydrate ? R("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === qr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var p = Xw(e, im, null, a, i, o, s);
      Kh(p.current, e);
      var y = e.nodeType === xn ? e.parentNode : e;
      return vp(y), new a1(p);
    }
    function cy(e) {
      this._internalRoot = e;
    }
    function e_(e) {
      e && lg(e);
    }
    cy.prototype.unstable_scheduleHydration = e_;
    function t_(e, t, a) {
      if (!fy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      mT(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, p = !1, y = "", S = hT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError));
      var x = Gw(t, null, e, im, i, s, p, y, S);
      if (Kh(x.current, e), vp(e), o)
        for (var b = 0; b < o.length; b++) {
          var z = o[b];
          sk(x, z);
        }
      return new cy(x);
    }
    function fy(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === Ra || e.nodeType === md || !Pe));
    }
    function ov(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === Ra || e.nodeType === md || e.nodeType === xn && e.nodeValue === " react-mount-point-unstable "));
    }
    function mT(e) {
      e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), xp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var n_ = v.ReactCurrentOwner, yT;
    yT = function(e) {
      if (e._reactRootContainer && e.nodeType !== xn) {
        var t = Jw(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = i1(e), o = !!(i && Yu(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function i1(e) {
      return e ? e.nodeType === Ra ? e.documentElement : e.firstChild : null;
    }
    function gT() {
    }
    function r_(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var N = sy(p);
            s.call(N);
          };
        }
        var p = Gw(
          t,
          i,
          e,
          qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          gT
        );
        e._reactRootContainer = p, Kh(p.current, e);
        var y = e.nodeType === xn ? e.parentNode : e;
        return vp(y), Jo(), p;
      } else {
        for (var S; S = e.lastChild; )
          e.removeChild(S);
        if (typeof i == "function") {
          var x = i;
          i = function() {
            var N = sy(b);
            x.call(N);
          };
        }
        var b = Xw(
          e,
          qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          gT
        );
        e._reactRootContainer = b, Kh(b.current, e);
        var z = e.nodeType === xn ? e.parentNode : e;
        return vp(z), Jo(function() {
          lv(t, b, a, i);
        }), b;
      }
    }
    function a_(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function dy(e, t, a, i, o) {
      yT(a), a_(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, p;
      if (!s)
        p = r_(a, t, e, o, i);
      else {
        if (p = s, typeof o == "function") {
          var y = o;
          o = function() {
            var S = sy(p);
            y.call(S);
          };
        }
        lv(t, p, e, o);
      }
      return sy(p);
    }
    function i_(e) {
      {
        var t = n_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Dt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Kr ? e : VD(e, "findDOMNode");
    }
    function l_(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ov(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return dy(null, e, t, !0, a);
    }
    function o_(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ov(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = xp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return dy(null, e, t, !1, a);
    }
    function u_(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ov(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !vu(e))
        throw new Error("parentComponent must be a valid React Component");
      return dy(e, t, a, !1, i);
    }
    function s_(e) {
      if (!ov(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = xp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = i1(e), i = a && !Yu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Jo(function() {
          dy(null, null, e, !1, function() {
            e._reactRootContainer = null, vE(e);
          });
        }), !0;
      } else {
        {
          var o = i1(e), s = !!(o && Yu(o)), p = e.nodeType === Kr && ov(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", p ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    _u(YD), ag(WD), hf(qD), Eh(Wa), Rh(Or), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Cd(dx), Ic(US, tD, Jo);
    function c_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fy(t))
        throw new Error("Target container is not a DOM element.");
      return BD(e, t, null, a);
    }
    function f_(e, t, a, i) {
      return u_(e, t, a, i);
    }
    var l1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Yu, jf, Zh, pu, Ro, US]
    };
    function d_(e, t) {
      return l1.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ZD(e, t);
    }
    function p_(e, t, a) {
      return l1.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), t_(e, t, a);
    }
    function v_(e) {
      return kw() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Jo(e);
    }
    var h_ = KD({
      findFiberByHostInstance: cc,
      bundleType: 1,
      version: ZS,
      rendererPackageName: "react-dom"
    });
    if (!h_ && Cn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var ST = window.location.protocol;
      /^(https?|file):$/.test(ST) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (ST === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l1, ti.createPortal = c_, ti.createRoot = d_, ti.findDOMNode = i_, ti.flushSync = v_, ti.hydrate = l_, ti.hydrateRoot = p_, ti.render = o_, ti.unmountComponentAtNode = s_, ti.unstable_batchedUpdates = US, ti.unstable_renderSubtreeIntoContainer = f_, ti.version = ZS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
var OT;
function L_() {
  if (OT)
    return ni;
  OT = 1;
  var h = _r, f = QT();
  function c(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var v = /* @__PURE__ */ new Set(), w = {};
  function C(n, r) {
    R(n, r), R(n + "Capture", r);
  }
  function R(n, r) {
    for (w[n] = r, n = 0; n < r.length; n++)
      v.add(r[n]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = Object.prototype.hasOwnProperty, q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, A = {}, I = {};
  function W(n) {
    return U.call(I, n) ? !0 : U.call(A, n) ? !1 : q.test(n) ? I[n] = !0 : (A[n] = !0, !1);
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
  function X(n, r, l, u) {
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
  function $(n, r, l, u, d, m, T) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = d, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = T;
  }
  var Ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ce[n] = new $(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ce[r] = new $(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ce[n] = new $(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ce[n] = new $(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ce[n] = new $(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ce[n] = new $(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ce[n] = new $(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ce[n] = new $(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ce[n] = new $(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var st = /[\-:]([a-z])/g;
  function vt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      st,
      vt
    );
    Ce[r] = new $(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(st, vt);
    Ce[r] = new $(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(st, vt);
    Ce[r] = new $(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ce[n] = new $(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ce.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ce[n] = new $(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Fe(n, r, l, u) {
    var d = Ce.hasOwnProperty(r) ? Ce[r] : null;
    (d !== null ? d.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (X(r, l, d, u) && (l = null), u || d === null ? W(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : d.mustUseProperty ? n[d.propertyName] = l === null ? d.type === 3 ? !1 : "" : l : (r = d.attributeName, u = d.attributeNamespace, l === null ? n.removeAttribute(r) : (d = d.type, l = d === 3 || d === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Ne = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, yt = Symbol.for("react.element"), xe = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), Ze = Symbol.for("react.strict_mode"), pn = Symbol.for("react.profiler"), vn = Symbol.for("react.provider"), qt = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), Gt = Symbol.for("react.suspense"), $e = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), He = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var _ = Object.assign, te;
  function ge(n) {
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
  var Pe = !1;
  function Qe(n, r) {
    if (!n || Pe)
      return "";
    Pe = !0;
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
`), T = d.length - 1, k = m.length - 1; 1 <= T && 0 <= k && d[T] !== m[k]; )
          k--;
        for (; 1 <= T && 0 <= k; T--, k--)
          if (d[T] !== m[k]) {
            if (T !== 1 || k !== 1)
              do
                if (T--, k--, 0 > k || d[T] !== m[k]) {
                  var L = `
` + d[T].replace(" at new ", " at ");
                  return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
                }
              while (1 <= T && 0 <= k);
            break;
          }
      }
    } finally {
      Pe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ge(n) : "";
  }
  function ot(n) {
    switch (n.tag) {
      case 5:
        return ge(n.type);
      case 16:
        return ge("Lazy");
      case 13:
        return ge("Suspense");
      case 19:
        return ge("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Qe(n.type, !1), n;
      case 11:
        return n = Qe(n.type.render, !1), n;
      case 1:
        return n = Qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function ht(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case gt:
        return "Fragment";
      case xe:
        return "Portal";
      case pn:
        return "Profiler";
      case Ze:
        return "StrictMode";
      case Gt:
        return "Suspense";
      case $e:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case qt:
          return (n.displayName || "Context") + ".Consumer";
        case vn:
          return (n._context.displayName || "Context") + ".Provider";
        case Et:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case lt:
          return r = n.displayName || null, r !== null ? r : ht(n.type) || "Memo";
        case tt:
          r = n._payload, n = n._init;
          try {
            return ht(n(r));
          } catch {
          }
      }
    return null;
  }
  function Rt(n) {
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
        return ht(r);
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
  function mt(n) {
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
      }, set: function(T) {
        u = "" + T, m.call(this, T);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(T) {
        u = "" + T;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function lr(n) {
    n._valueTracker || (n._valueTracker = ir(n));
  }
  function Wr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), u = "";
    return n && (u = on(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Rr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Cn(n, r) {
    var l = r.checked;
    return _({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function or(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = mt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wn(n, r) {
    r = r.checked, r != null && Fe(n, "checked", r, !1);
  }
  function Fn(n, r) {
    Wn(n, r);
    var l = mt(r.value), u = r.type;
    if (l != null)
      u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Lr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Lr(n, r.type, mt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
  function Lr(n, r, l) {
    (r !== "number" || Rr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var wr = Array.isArray;
  function qn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var d = 0; d < l.length; d++)
        r["$" + l[d]] = !0;
      for (l = 0; l < n.length; l++)
        d = r.hasOwnProperty("$" + n[l].value), n[l].selected !== d && (n[l].selected = d), d && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + mt(l), r = null, d = 0; d < n.length; d++) {
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
    return _({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
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
    n._wrapperState = { initialValue: mt(l) };
  }
  function Tr(n, r) {
    var l = mt(r.value), u = mt(r.defaultValue);
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
  function Nr(n, r) {
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
  function je(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Sa.hasOwnProperty(n) && Sa[n] ? ("" + r).trim() : r + "px";
  }
  function ft(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var u = l.indexOf("--") === 0, d = je(l, r[l], u);
        l === "float" && (l = "cssFloat"), u ? n.setProperty(l, d) : n[l] = d;
      }
  }
  var jt = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Nt(n, r) {
    if (r) {
      if (jt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
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
  function Cr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Bt = null, Kn = null, Ft = null;
  function Zt(n) {
    if (n = Ti(n)) {
      if (typeof Bt != "function")
        throw Error(c(280));
      var r = n.stateNode;
      r && (r = jc(r), Bt(n.stateNode, n.type, r));
    }
  }
  function ri(n) {
    Kn ? Ft ? Ft.push(n) : Ft = [n] : Kn = n;
  }
  function Ma() {
    if (Kn) {
      var n = Kn, r = Ft;
      if (Ft = Kn = null, Zt(n), r)
        for (n = 0; n < r.length; n++)
          Zt(r[n]);
    }
  }
  function El(n, r) {
    return n(r);
  }
  function so() {
  }
  var co = !1;
  function Rl(n, r, l) {
    if (co)
      return n(r, l);
    co = !0;
    try {
      return El(n, r, l);
    } finally {
      co = !1, (Kn !== null || Ft !== null) && (so(), Ma());
    }
  }
  function ai(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var u = jc(l);
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
      var za = {};
      Object.defineProperty(za, "passive", { get: function() {
        ii = !0;
      } }), window.addEventListener("test", za, za), window.removeEventListener("test", za, za);
    } catch {
      ii = !1;
    }
  function Pi(n, r, l, u, d, m, T, k, L) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, Q);
    } catch (le) {
      this.onError(le);
    }
  }
  var qr = !1, Qr = null, Ea = !1, Bi = null, D = { onError: function(n) {
    qr = !0, Qr = n;
  } };
  function ie(n, r, l, u, d, m, T, k, L) {
    qr = !1, Qr = null, Pi.apply(D, arguments);
  }
  function pe(n, r, l, u, d, m, T, k, L) {
    if (ie.apply(this, arguments), qr) {
      if (qr) {
        var Q = Qr;
        qr = !1, Qr = null;
      } else
        throw Error(c(198));
      Ea || (Ea = !0, Bi = Q);
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
  function St(n) {
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
  function ct(n) {
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
        for (var T = !1, k = d.child; k; ) {
          if (k === l) {
            T = !0, l = d, u = m;
            break;
          }
          if (k === u) {
            T = !0, u = d, l = m;
            break;
          }
          k = k.sibling;
        }
        if (!T) {
          for (k = m.child; k; ) {
            if (k === l) {
              T = !0, l = m, u = d;
              break;
            }
            if (k === u) {
              T = !0, u = m, l = d;
              break;
            }
            k = k.sibling;
          }
          if (!T)
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
    return n = ct(n), n !== null ? Pn(n) : null;
  }
  function Pn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Pn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var en = f.unstable_scheduleCallback, tn = f.unstable_cancelCallback, xr = f.unstable_shouldYield, yi = f.unstable_requestPaint, nn = f.unstable_now, Xr = f.unstable_getCurrentPriorityLevel, os = f.unstable_ImmediatePriority, gi = f.unstable_UserBlockingPriority, dt = f.unstable_NormalPriority, fo = f.unstable_LowPriority, Vi = f.unstable_IdlePriority, wl = null, Gr = null;
  function us(n) {
    if (Gr && typeof Gr.onCommitFiberRoot == "function")
      try {
        Gr.onCommitFiberRoot(wl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Mr = Math.clz32 ? Math.clz32 : fs, ss = Math.log, cs = Math.LN2;
  function fs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ss(n) / cs | 0) | 0;
  }
  var po = 64, tu = 4194304;
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
    if (l === 0)
      return 0;
    var u = 0, d = n.suspendedLanes, m = n.pingedLanes, T = l & 268435455;
    if (T !== 0) {
      var k = T & ~d;
      k !== 0 ? u = Yi(k) : (m &= T, m !== 0 && (u = Yi(m)));
    } else
      T = l & ~d, T !== 0 ? u = Yi(T) : m !== 0 && (u = Yi(m));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & d) && (d = u & -u, m = r & -r, d >= m || d === 16 && (m & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        l = 31 - Mr(r), d = 1 << l, u |= n[l], r &= ~d;
    return u;
  }
  function Aa(n, r) {
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
  function Tl(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, d = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var T = 31 - Mr(m), k = 1 << T, L = d[T];
      L === -1 ? (!(k & l) || k & u) && (d[T] = Aa(k, r)) : L <= r && (n.expiredLanes |= k), m &= ~k;
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
  function Cl(n, r, l) {
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
  var Ct = 0;
  function vs(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nu, xl, hs, Dt, ru, mo = !1, nt = [], li = null, gn = null, $r = null, Ua = /* @__PURE__ */ new Map(), bl = /* @__PURE__ */ new Map(), un = [], Sn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        $r = null;
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
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: m, targetContainers: [d] }, r !== null && (r = Ti(r), r !== null && xl(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function Jr(n, r, l, u, d) {
    switch (r) {
      case "focusin":
        return li = sr(li, n, r, l, u, d), !0;
      case "dragenter":
        return gn = sr(gn, n, r, l, u, d), !0;
      case "mouseover":
        return $r = sr($r, n, r, l, u, d), !0;
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
          if (r = St(l), r !== null) {
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
        return r = Ti(l), r !== null && xl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function yo(n, r, l) {
    au(n) && l.delete(r);
  }
  function go() {
    mo = !1, li !== null && au(li) && (li = null), gn !== null && au(gn) && (gn = null), $r !== null && au($r) && ($r = null), Ua.forEach(yo), bl.forEach(yo);
  }
  function kl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, mo || (mo = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, go)));
  }
  function Ia(n) {
    function r(d) {
      return kl(d, n);
    }
    if (0 < nt.length) {
      kl(nt[0], n);
      for (var l = 1; l < nt.length; l++) {
        var u = nt[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (li !== null && kl(li, n), gn !== null && kl(gn, n), $r !== null && kl($r, n), Ua.forEach(r), bl.forEach(r), l = 0; l < un.length; l++)
      u = un[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < un.length && (l = un[0], l.blockedOn === null); )
      oi(l), l.blockedOn === null && un.shift();
  }
  var Wi = Ne.ReactCurrentBatchConfig, iu = !0;
  function qi(n, r, l, u) {
    var d = Ct, m = Wi.transition;
    Wi.transition = null;
    try {
      Ct = 1, Ri(n, r, l, u);
    } finally {
      Ct = d, Wi.transition = m;
    }
  }
  function lu(n, r, l, u) {
    var d = Ct, m = Wi.transition;
    Wi.transition = null;
    try {
      Ct = 4, Ri(n, r, l, u);
    } finally {
      Ct = d, Wi.transition = m;
    }
  }
  function Ri(n, r, l, u) {
    if (iu) {
      var d = ou(n, r, l, u);
      if (d === null)
        Cd(n, r, u, Qi, l), ms(n, u);
      else if (Jr(d, n, r, l, u))
        u.stopPropagation();
      else if (ms(n, u), r & 4 && -1 < Sn.indexOf(n)) {
        for (; d !== null; ) {
          var m = Ti(d);
          if (m !== null && nu(m), m = ou(n, r, l, u), m === null && Cd(n, r, u, Qi, l), m === d)
            break;
          d = m;
        }
        d !== null && u.stopPropagation();
      } else
        Cd(n, r, u, null, l);
    }
  }
  var Qi = null;
  function ou(n, r, l, u) {
    if (Qi = null, n = Cr(u), n = tl(n), n !== null)
      if (r = me(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = St(r), n !== null)
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
        switch (Xr()) {
          case os:
            return 1;
          case gi:
            return 4;
          case dt:
          case fo:
            return 16;
          case Vi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ui = null, uu = null, E = null;
  function O() {
    if (E)
      return E;
    var n, r = uu, l = r.length, u, d = "value" in ui ? ui.value : ui.textContent, m = d.length;
    for (n = 0; n < l && r[n] === d[n]; n++)
      ;
    var T = l - n;
    for (u = 1; u <= T && r[l - u] === d[m - u]; u++)
      ;
    return E = d.slice(n, 1 < u ? 1 - u : void 0);
  }
  function B(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function G() {
    return !0;
  }
  function ce() {
    return !1;
  }
  function Le(n) {
    function r(l, u, d, m, T) {
      this._reactName = l, this._targetInst = d, this.type = u, this.nativeEvent = m, this.target = T, this.currentTarget = null;
      for (var k in n)
        n.hasOwnProperty(k) && (l = n[k], this[k] = l ? l(m) : m[k]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? G : ce, this.isPropagationStopped = ce, this;
    }
    return _(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = G);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = G);
    }, persist: function() {
    }, isPersistent: G }), r;
  }
  var Re = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ke = Le(Re), pt = _({}, Re, { view: 0, detail: 0 }), Ht = Le(pt), Vt, Yt, Wt, sn = _({}, pt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Oc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Wt && (Wt && n.type === "mousemove" ? (Vt = n.screenX - Wt.screenX, Yt = n.screenY - Wt.screenY) : Yt = Vt = 0, Wt = n), Vt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Yt;
  } }), _t = Le(sn), Ol = _({}, sn, { dataTransfer: 0 }), su = Le(Ol), gs = _({}, pt, { relatedTarget: 0 }), Ss = Le(gs), Xi = _({}, Re, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Es = Le(Xi), Rs = _({}, Re, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), dd = Le(Rs), Uy = _({}, Re, { data: 0 }), Cv = Le(Uy), xv = {
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
  }, bv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function kv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = bv[n]) ? !!r[n] : !1;
  }
  function Oc() {
    return kv;
  }
  var Iy = _({}, pt, { key: function(n) {
    if (n.key) {
      var r = xv[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = B(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? pd[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Oc, charCode: function(n) {
    return n.type === "keypress" ? B(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? B(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Gi = Le(Iy), jy = _({}, sn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Dc = Le(jy), vd = _({}, pt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Oc }), hd = Le(vd), Fy = _({}, Re, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _c = Le(Fy), Ov = _({}, sn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Kr = Le(Ov), $i = [9, 13, 27, 32], xn = g && "CompositionEvent" in window, Ra = null;
  g && "documentMode" in document && (Ra = document.documentMode);
  var md = g && "TextEvent" in window && !Ra, ws = g && (!xn || Ra && 8 < Ra && 11 >= Ra), Dv = " ", cu = !1;
  function _v(n, r) {
    switch (n) {
      case "keyup":
        return $i.indexOf(r.keyCode) !== -1;
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
  function Lv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Dl = !1;
  function Hy(n, r) {
    switch (n) {
      case "compositionend":
        return Lv(r);
      case "keypress":
        return r.which !== 32 ? null : (cu = !0, Dv);
      case "textInput":
        return n = r.data, n === Dv && cu ? null : n;
      default:
        return null;
    }
  }
  function Py(n, r) {
    if (Dl)
      return n === "compositionend" || !xn && _v(n, r) ? (n = O(), E = uu = ui = null, Dl = !1, n) : null;
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
  var By = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yd(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!By[n.type] : r === "textarea";
  }
  function Nv(n, r, l, u) {
    ri(u), r = Uc(r, "onChange"), 0 < r.length && (l = new Ke("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var Ts = null, Cs = null;
  function Mv(n) {
    Gv(n, 0);
  }
  function Ji(n) {
    var r = vu(n);
    if (Wr(r))
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
  function Av() {
    Ts && (Ts.detachEvent("onpropertychange", Uv), Cs = Ts = null);
  }
  function Uv(n) {
    if (n.propertyName === "value" && Ji(Cs)) {
      var r = [];
      Nv(r, Cs, n, Cr(n)), Rl(Mv, r);
    }
  }
  function Vy(n, r, l) {
    n === "focusin" ? (Av(), Ts = r, Cs = l, Ts.attachEvent("onpropertychange", Uv)) : n === "focusout" && Av();
  }
  function Yy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ji(Cs);
  }
  function Wy(n, r) {
    if (n === "click")
      return Ji(r);
  }
  function qy(n, r) {
    if (n === "input" || n === "change")
      return Ji(r);
  }
  function Iv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var si = typeof Object.is == "function" ? Object.is : Iv;
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
  function jv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Fv(n, r) {
    var l = jv(n);
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
      l = jv(l);
    }
  }
  function Hv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Hv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Pv() {
    for (var n = window, r = Rr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = Rr(n.document);
    }
    return r;
  }
  function xs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function So(n) {
    var r = Pv(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Hv(l.ownerDocument.documentElement, l)) {
      if (u !== null && xs(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = l.textContent.length, m = Math.min(u.start, d);
          u = u.end === void 0 ? m : Math.min(u.end, d), !n.extend && m > u && (d = u, u = m, m = d), d = Fv(l, m);
          var T = Fv(
            l,
            u
          );
          d && T && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== T.node || n.focusOffset !== T.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), n.removeAllRanges(), m > u ? (n.addRange(r), n.extend(T.node, T.offset)) : (r.setEnd(T.node, T.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Nc = g && "documentMode" in document && 11 >= document.documentMode, Eo = null, _l = null, bs = null, Rd = !1;
  function Bv(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Rd || Eo == null || Eo !== Rr(u) || (u = Eo, "selectionStart" in u && xs(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), bs && fu(bs, u) || (bs = u, u = Uc(_l, "onSelect"), 0 < u.length && (r = new Ke("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = Eo)));
  }
  function Mc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var du = { animationend: Mc("Animation", "AnimationEnd"), animationiteration: Mc("Animation", "AnimationIteration"), animationstart: Mc("Animation", "AnimationStart"), transitionend: Mc("Transition", "TransitionEnd") }, zc = {}, Vv = {};
  g && (Vv = document.createElement("div").style, "AnimationEvent" in window || (delete du.animationend.animation, delete du.animationiteration.animation, delete du.animationstart.animation), "TransitionEvent" in window || delete du.transitionend.transition);
  function ks(n) {
    if (zc[n])
      return zc[n];
    if (!du[n])
      return n;
    var r = du[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Vv)
        return zc[n] = r[l];
    return n;
  }
  var br = ks("animationend"), wd = ks("animationiteration"), Yv = ks("animationstart"), Wv = ks("transitionend"), qv = /* @__PURE__ */ new Map(), Qv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ll(n, r) {
    qv.set(n, r), C(r, [n]);
  }
  for (var Ac = 0; Ac < Qv.length; Ac++) {
    var Os = Qv[Ac], Ds = Os.toLowerCase(), Qy = Os[0].toUpperCase() + Os.slice(1);
    Ll(Ds, "on" + Qy);
  }
  Ll(br, "onAnimationEnd"), Ll(wd, "onAnimationIteration"), Ll(Yv, "onAnimationStart"), Ll("dblclick", "onDoubleClick"), Ll("focusin", "onFocus"), Ll("focusout", "onBlur"), Ll(Wv, "onTransitionEnd"), R("onMouseEnter", ["mouseout", "mouseover"]), R("onMouseLeave", ["mouseout", "mouseover"]), R("onPointerEnter", ["pointerout", "pointerover"]), R("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ki = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ki));
  function Xv(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, pe(u, r, void 0, n), n.currentTarget = null;
  }
  function Gv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], d = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var T = u.length - 1; 0 <= T; T--) {
            var k = u[T], L = k.instance, Q = k.currentTarget;
            if (k = k.listener, L !== m && d.isPropagationStopped())
              break e;
            Xv(d, k, Q), m = L;
          }
        else
          for (T = 0; T < u.length; T++) {
            if (k = u[T], L = k.instance, Q = k.currentTarget, k = k.listener, L !== m && d.isPropagationStopped())
              break e;
            Xv(d, k, Q), m = L;
          }
      }
    }
    if (Ea)
      throw n = Bi, Ea = !1, Bi = null, n;
  }
  function $t(n, r) {
    var l = r[Nd];
    l === void 0 && (l = r[Nd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (Td(r, n, 2, !1), l.add(u));
  }
  function _s(n, r, l) {
    var u = 0;
    r && (u |= 4), Td(l, n, u, r);
  }
  var Zi = "_reactListening" + Math.random().toString(36).slice(2);
  function wi(n) {
    if (!n[Zi]) {
      n[Zi] = !0, v.forEach(function(l) {
        l !== "selectionchange" && (Xy.has(l) || _s(l, !1, n), _s(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Zi] || (r[Zi] = !0, _s("selectionchange", !1, r));
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
        d = Ri;
    }
    l = d.bind(null, r, l, n), d = void 0, !ii || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), u ? d !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: d }) : n.addEventListener(r, l, !0) : d !== void 0 ? n.addEventListener(r, l, { passive: d }) : n.addEventListener(r, l, !1);
  }
  function Cd(n, r, l, u, d) {
    var m = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var T = u.tag;
          if (T === 3 || T === 4) {
            var k = u.stateNode.containerInfo;
            if (k === d || k.nodeType === 8 && k.parentNode === d)
              break;
            if (T === 4)
              for (T = u.return; T !== null; ) {
                var L = T.tag;
                if ((L === 3 || L === 4) && (L = T.stateNode.containerInfo, L === d || L.nodeType === 8 && L.parentNode === d))
                  return;
                T = T.return;
              }
            for (; k !== null; ) {
              if (T = tl(k), T === null)
                return;
              if (L = T.tag, L === 5 || L === 6) {
                u = m = T;
                continue e;
              }
              k = k.parentNode;
            }
          }
          u = u.return;
        }
    Rl(function() {
      var Q = m, le = Cr(l), ue = [];
      e: {
        var ae = qv.get(n);
        if (ae !== void 0) {
          var Se = Ke, Oe = n;
          switch (n) {
            case "keypress":
              if (B(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Se = Gi;
              break;
            case "focusin":
              Oe = "focus", Se = Ss;
              break;
            case "focusout":
              Oe = "blur", Se = Ss;
              break;
            case "beforeblur":
            case "afterblur":
              Se = Ss;
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
              Se = _t;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Se = su;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Se = hd;
              break;
            case br:
            case wd:
            case Yv:
              Se = Es;
              break;
            case Wv:
              Se = _c;
              break;
            case "scroll":
              Se = Ht;
              break;
            case "wheel":
              Se = Kr;
              break;
            case "copy":
            case "cut":
            case "paste":
              Se = dd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Se = Dc;
          }
          var Me = (r & 4) !== 0, In = !Me && n === "scroll", j = Me ? ae !== null ? ae + "Capture" : null : ae;
          Me = [];
          for (var M = Q, P; M !== null; ) {
            P = M;
            var fe = P.stateNode;
            if (P.tag === 5 && fe !== null && (P = fe, j !== null && (fe = ai(M, j), fe != null && Me.push(pu(M, fe, P)))), In)
              break;
            M = M.return;
          }
          0 < Me.length && (ae = new Se(ae, Oe, null, l, le), ue.push({ event: ae, listeners: Me }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ae = n === "mouseover" || n === "pointerover", Se = n === "mouseout" || n === "pointerout", ae && l !== yn && (Oe = l.relatedTarget || l.fromElement) && (tl(Oe) || Oe[ci]))
            break e;
          if ((Se || ae) && (ae = le.window === le ? le : (ae = le.ownerDocument) ? ae.defaultView || ae.parentWindow : window, Se ? (Oe = l.relatedTarget || l.toElement, Se = Q, Oe = Oe ? tl(Oe) : null, Oe !== null && (In = me(Oe), Oe !== In || Oe.tag !== 5 && Oe.tag !== 6) && (Oe = null)) : (Se = null, Oe = Q), Se !== Oe)) {
            if (Me = _t, fe = "onMouseLeave", j = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && (Me = Dc, fe = "onPointerLeave", j = "onPointerEnter", M = "pointer"), In = Se == null ? ae : vu(Se), P = Oe == null ? ae : vu(Oe), ae = new Me(fe, M + "leave", Se, l, le), ae.target = In, ae.relatedTarget = P, fe = null, tl(le) === Q && (Me = new Me(j, M + "enter", Oe, l, le), Me.target = P, Me.relatedTarget = In, fe = Me), In = fe, Se && Oe)
              t: {
                for (Me = Se, j = Oe, M = 0, P = Me; P; P = Ro(P))
                  M++;
                for (P = 0, fe = j; fe; fe = Ro(fe))
                  P++;
                for (; 0 < M - P; )
                  Me = Ro(Me), M--;
                for (; 0 < P - M; )
                  j = Ro(j), P--;
                for (; M--; ) {
                  if (Me === j || j !== null && Me === j.alternate)
                    break t;
                  Me = Ro(Me), j = Ro(j);
                }
                Me = null;
              }
            else
              Me = null;
            Se !== null && xd(ue, ae, Se, Me, !1), Oe !== null && In !== null && xd(ue, In, Oe, Me, !0);
          }
        }
        e: {
          if (ae = Q ? vu(Q) : window, Se = ae.nodeName && ae.nodeName.toLowerCase(), Se === "select" || Se === "input" && ae.type === "file")
            var Ae = gd;
          else if (yd(ae))
            if (Sd)
              Ae = qy;
            else {
              Ae = Yy;
              var Ge = Vy;
            }
          else
            (Se = ae.nodeName) && Se.toLowerCase() === "input" && (ae.type === "checkbox" || ae.type === "radio") && (Ae = Wy);
          if (Ae && (Ae = Ae(n, Q))) {
            Nv(ue, Ae, l, le);
            break e;
          }
          Ge && Ge(n, ae, Q), n === "focusout" && (Ge = ae._wrapperState) && Ge.controlled && ae.type === "number" && Lr(ae, "number", ae.value);
        }
        switch (Ge = Q ? vu(Q) : window, n) {
          case "focusin":
            (yd(Ge) || Ge.contentEditable === "true") && (Eo = Ge, _l = Q, bs = null);
            break;
          case "focusout":
            bs = _l = Eo = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rd = !1, Bv(ue, l, le);
            break;
          case "selectionchange":
            if (Nc)
              break;
          case "keydown":
          case "keyup":
            Bv(ue, l, le);
        }
        var De;
        if (xn)
          e: {
            switch (n) {
              case "compositionstart":
                var Je = "onCompositionStart";
                break e;
              case "compositionend":
                Je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Je = "onCompositionUpdate";
                break e;
            }
            Je = void 0;
          }
        else
          Dl ? _v(n, l) && (Je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Je = "onCompositionStart");
        Je && (ws && l.locale !== "ko" && (Dl || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && Dl && (De = O()) : (ui = le, uu = "value" in ui ? ui.value : ui.textContent, Dl = !0)), Ge = Uc(Q, Je), 0 < Ge.length && (Je = new Cv(Je, n, null, l, le), ue.push({ event: Je, listeners: Ge }), De ? Je.data = De : (De = Lv(l), De !== null && (Je.data = De)))), (De = md ? Hy(n, l) : Py(n, l)) && (Q = Uc(Q, "onBeforeInput"), 0 < Q.length && (le = new Cv("onBeforeInput", "beforeinput", null, l, le), ue.push({ event: le, listeners: Q }), le.data = De));
      }
      Gv(ue, r);
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
  function Ro(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function xd(n, r, l, u, d) {
    for (var m = r._reactName, T = []; l !== null && l !== u; ) {
      var k = l, L = k.alternate, Q = k.stateNode;
      if (L !== null && L === u)
        break;
      k.tag === 5 && Q !== null && (k = Q, d ? (L = ai(l, m), L != null && T.unshift(pu(l, L, k))) : d || (L = ai(l, m), L != null && T.push(pu(l, L, k)))), l = l.return;
    }
    T.length !== 0 && n.push({ event: r, listeners: T });
  }
  var $v = /\r\n?/g, bd = /\u0000|\uFFFD/g;
  function Jv(n) {
    return (typeof n == "string" ? n : "" + n).replace($v, `
`).replace(bd, "");
  }
  function Ls(n, r, l) {
    if (r = Jv(r), Jv(n) !== r && l)
      throw Error(c(425));
  }
  function Ic() {
  }
  var kd = null, Od = null;
  function wo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ns = typeof setTimeout == "function" ? setTimeout : void 0, Ms = typeof clearTimeout == "function" ? clearTimeout : void 0, Dd = typeof Promise == "function" ? Promise : void 0, Kv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dd < "u" ? function(n) {
    return Dd.resolve(null).then(n).catch(_d);
  } : Ns;
  function _d(n) {
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
            n.removeChild(d), Ia(r);
            return;
          }
          u--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = d;
    } while (l);
    Ia(r);
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
  function zs(n) {
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
  var el = Math.random().toString(36).slice(2), ja = "__reactFiber$" + el, As = "__reactProps$" + el, ci = "__reactContainer$" + el, Nd = "__reactEvents$" + el, Gy = "__reactListeners$" + el, $y = "__reactHandles$" + el;
  function tl(n) {
    var r = n[ja];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ci] || l[ja]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = zs(n); n !== null; ) {
            if (l = n[ja])
              return l;
            n = zs(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ti(n) {
    return n = n[ja] || n[ci], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function vu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(c(33));
  }
  function jc(n) {
    return n[As] || null;
  }
  var Ve = [], fi = -1;
  function Jt(n) {
    return { current: n };
  }
  function ze(n) {
    0 > fi || (n.current = Ve[fi], Ve[fi] = null, fi--);
  }
  function Mt(n, r) {
    fi++, Ve[fi] = n.current, n.current = r;
  }
  var Fa = {}, Zn = Jt(Fa), rt = Jt(!1), zr = Fa;
  function Ta(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Fa;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var d = {}, m;
    for (m in l)
      d[m] = r[m];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Bn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Zr() {
    ze(rt), ze(Zn);
  }
  function Ci(n, r, l) {
    if (Zn.current !== Fa)
      throw Error(c(168));
    Mt(Zn, r), Mt(rt, l);
  }
  function Nl(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return l;
    u = u.getChildContext();
    for (var d in u)
      if (!(d in r))
        throw Error(c(108, Rt(n) || "Unknown", d));
    return _({}, l, u);
  }
  function To(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Fa, zr = Zn.current, Mt(Zn, n), Mt(rt, rt.current), !0;
  }
  function Zv(n, r, l) {
    var u = n.stateNode;
    if (!u)
      throw Error(c(169));
    l ? (n = Nl(n, r, zr), u.__reactInternalMemoizedMergedChildContext = n, ze(rt), ze(Zn), Mt(Zn, n)) : ze(rt), Mt(rt, l);
  }
  var nl = null, Ml = !1, cr = !1;
  function Fc(n) {
    nl === null ? nl = [n] : nl.push(n);
  }
  function eh(n) {
    Ml = !0, Fc(n);
  }
  function xi() {
    if (!cr && nl !== null) {
      cr = !0;
      var n = 0, r = Ct;
      try {
        var l = nl;
        for (Ct = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        nl = null, Ml = !1;
      } catch (d) {
        throw nl !== null && (nl = nl.slice(n + 1)), en(os, xi), d;
      } finally {
        Ct = r, cr = !1;
      }
    }
    return null;
  }
  var Ha = [], zl = 0, Pa = null, Co = 0, ea = [], ta = 0, di = null, na = 1, fr = "";
  function xo(n, r) {
    Ha[zl++] = Co, Ha[zl++] = Pa, Pa = n, Co = r;
  }
  function Al(n, r, l) {
    ea[ta++] = na, ea[ta++] = fr, ea[ta++] = di, di = n;
    var u = na;
    n = fr;
    var d = 32 - Mr(u) - 1;
    u &= ~(1 << d), l += 1;
    var m = 32 - Mr(r) + d;
    if (30 < m) {
      var T = d - d % 5;
      m = (u & (1 << T) - 1).toString(32), u >>= T, d -= T, na = 1 << 32 - Mr(r) + d | l << d | u, fr = m + n;
    } else
      na = 1 << m | l << d | u, fr = n;
  }
  function Hc(n) {
    n.return !== null && (xo(n, 1), Al(n, 1, 0));
  }
  function Pc(n) {
    for (; n === Pa; )
      Pa = Ha[--zl], Ha[zl] = null, Co = Ha[--zl], Ha[zl] = null;
    for (; n === di; )
      di = ea[--ta], ea[ta] = null, fr = ea[--ta], ea[ta] = null, na = ea[--ta], ea[ta] = null;
  }
  var Ca = null, xa = null, cn = !1, Ba = null;
  function Md(n, r) {
    var l = Ga(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function zd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ca = n, xa = wa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ca = n, xa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = di !== null ? { id: na, overflow: fr } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ga(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ca = n, xa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ad(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Bc(n) {
    if (cn) {
      var r = xa;
      if (r) {
        var l = r;
        if (!zd(n, r)) {
          if (Ad(n))
            throw Error(c(418));
          r = wa(l.nextSibling);
          var u = Ca;
          r && zd(n, r) ? Md(u, l) : (n.flags = n.flags & -4097 | 2, cn = !1, Ca = n);
        }
      } else {
        if (Ad(n))
          throw Error(c(418));
        n.flags = n.flags & -4097 | 2, cn = !1, Ca = n;
      }
    }
  }
  function Ud(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ca = n;
  }
  function Vc(n) {
    if (n !== Ca)
      return !1;
    if (!cn)
      return Ud(n), cn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !wo(n.type, n.memoizedProps)), r && (r = xa)) {
      if (Ad(n))
        throw th(), Error(c(418));
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
      xa = Ca ? wa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function th() {
    for (var n = xa; n; )
      n = wa(n.nextSibling);
  }
  function hu() {
    xa = Ca = null, cn = !1;
  }
  function Vn(n) {
    Ba === null ? Ba = [n] : Ba.push(n);
  }
  var Jy = Ne.ReactCurrentBatchConfig;
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = _({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var mu = Jt(null), bi = null, yu = null, Us = null;
  function Id() {
    Us = yu = bi = null;
  }
  function jd(n) {
    var r = mu.current;
    ze(mu), n._currentValue = r;
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
  function nh(n, r, l, u) {
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
  var Il = !1;
  function Fd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function rh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function rn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function jl(n, r, l) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, wt & 2) {
      var d = u.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), u.pending = r, rl(n, l);
    }
    return d = u.interleaved, d === null ? (r.next = r, ba(u)) : (r.next = d.next, d.next = r), u.interleaved = r, rl(n, l);
  }
  function Yc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ps(n, l);
    }
  }
  function ah(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var d = null, m = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var T = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          m === null ? d = m = T : m = m.next = T, l = l.next;
        } while (l !== null);
        m === null ? d = m = r : m = m.next = r;
      } else
        d = m = r;
      l = { baseState: u.baseState, firstBaseUpdate: d, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Is(n, r, l, u) {
    var d = n.updateQueue;
    Il = !1;
    var m = d.firstBaseUpdate, T = d.lastBaseUpdate, k = d.shared.pending;
    if (k !== null) {
      d.shared.pending = null;
      var L = k, Q = L.next;
      L.next = null, T === null ? m = Q : T.next = Q, T = L;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, k = le.lastBaseUpdate, k !== T && (k === null ? le.firstBaseUpdate = Q : k.next = Q, le.lastBaseUpdate = L));
    }
    if (m !== null) {
      var ue = d.baseState;
      T = 0, le = Q = L = null, k = m;
      do {
        var ae = k.lane, Se = k.eventTime;
        if ((u & ae) === ae) {
          le !== null && (le = le.next = {
            eventTime: Se,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var Oe = n, Me = k;
            switch (ae = r, Se = l, Me.tag) {
              case 1:
                if (Oe = Me.payload, typeof Oe == "function") {
                  ue = Oe.call(Se, ue, ae);
                  break e;
                }
                ue = Oe;
                break e;
              case 3:
                Oe.flags = Oe.flags & -65537 | 128;
              case 0:
                if (Oe = Me.payload, ae = typeof Oe == "function" ? Oe.call(Se, ue, ae) : Oe, ae == null)
                  break e;
                ue = _({}, ue, ae);
                break e;
              case 2:
                Il = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (n.flags |= 64, ae = d.effects, ae === null ? d.effects = [k] : ae.push(k));
        } else
          Se = { eventTime: Se, lane: ae, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, le === null ? (Q = le = Se, L = ue) : le = le.next = Se, T |= ae;
        if (k = k.next, k === null) {
          if (k = d.shared.pending, k === null)
            break;
          ae = k, k = ae.next, ae.next = null, d.lastBaseUpdate = ae, d.shared.pending = null;
        }
      } while (!0);
      if (le === null && (L = ue), d.baseState = L, d.firstBaseUpdate = Q, d.lastBaseUpdate = le, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          T |= d.lane, d = d.next;
        while (d !== r);
      } else
        m === null && (d.shared.lanes = 0);
      Io |= T, n.lanes = T, n.memoizedState = ue;
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
    r = n.memoizedState, l = l(u, r), l = l == null ? r : _({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Wc = { isMounted: function(n) {
    return (n = n._reactInternals) ? me(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = nr(), d = ol(n), m = rn(u, d);
    m.payload = r, l != null && (m.callback = l), r = jl(n, m, d), r !== null && (Rn(r, n, d, u), Yc(r, n, d));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = nr(), d = ol(n), m = rn(u, d);
    m.tag = 1, m.payload = r, l != null && (m.callback = l), r = jl(n, m, d), r !== null && (Rn(r, n, d, u), Yc(r, n, d));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = nr(), u = ol(n), d = rn(l, u);
    d.tag = 2, r != null && (d.callback = r), r = jl(n, d, u), r !== null && (Rn(r, n, u, l), Yc(r, n, u));
  } };
  function ih(n, r, l, u, d, m, T) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, m, T) : r.prototype && r.prototype.isPureReactComponent ? !fu(l, u) || !fu(d, m) : !0;
  }
  function lh(n, r, l) {
    var u = !1, d = Fa, m = r.contextType;
    return typeof m == "object" && m !== null ? m = de(m) : (d = Bn(r) ? zr : Zn.current, u = r.contextTypes, m = (u = u != null) ? Ta(n, d) : Fa), r = new r(l, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Wc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function oh(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Wc.enqueueReplaceState(r, r.state, null);
  }
  function Pd(n, r, l, u) {
    var d = n.stateNode;
    d.props = l, d.state = n.memoizedState, d.refs = bo, Fd(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? d.context = de(m) : (m = Bn(r) ? zr : Zn.current, d.context = Ta(n, m)), d.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Hd(n, r, m, l), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && Wc.enqueueReplaceState(d, d.state, null), Is(n, l, d, u), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
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
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(T) {
          var k = d.refs;
          k === bo && (k = d.refs = {}), T === null ? delete k[m] : k[m] = T;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string")
        throw Error(c(284));
      if (!l._owner)
        throw Error(c(290, n));
    }
    return n;
  }
  function js(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function uh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function sh(n) {
    function r(j, M) {
      if (n) {
        var P = j.deletions;
        P === null ? (j.deletions = [M], j.flags |= 16) : P.push(M);
      }
    }
    function l(j, M) {
      if (!n)
        return null;
      for (; M !== null; )
        r(j, M), M = M.sibling;
      return null;
    }
    function u(j, M) {
      for (j = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? j.set(M.key, M) : j.set(M.index, M), M = M.sibling;
      return j;
    }
    function d(j, M) {
      return j = ql(j, M), j.index = 0, j.sibling = null, j;
    }
    function m(j, M, P) {
      return j.index = P, n ? (P = j.alternate, P !== null ? (P = P.index, P < M ? (j.flags |= 2, M) : P) : (j.flags |= 2, M)) : (j.flags |= 1048576, M);
    }
    function T(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function k(j, M, P, fe) {
      return M === null || M.tag !== 6 ? (M = kf(P, j.mode, fe), M.return = j, M) : (M = d(M, P), M.return = j, M);
    }
    function L(j, M, P, fe) {
      var Ae = P.type;
      return Ae === gt ? le(j, M, P.props.children, fe, P.key) : M !== null && (M.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === tt && uh(Ae) === M.type) ? (fe = d(M, P.props), fe.ref = Su(j, M, P), fe.return = j, fe) : (fe = xf(P.type, P.key, P.props, null, j.mode, fe), fe.ref = Su(j, M, P), fe.return = j, fe);
    }
    function Q(j, M, P, fe) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== P.containerInfo || M.stateNode.implementation !== P.implementation ? (M = rc(P, j.mode, fe), M.return = j, M) : (M = d(M, P.children || []), M.return = j, M);
    }
    function le(j, M, P, fe, Ae) {
      return M === null || M.tag !== 7 ? (M = Po(P, j.mode, fe, Ae), M.return = j, M) : (M = d(M, P), M.return = j, M);
    }
    function ue(j, M, P) {
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return M = kf("" + M, j.mode, P), M.return = j, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case yt:
            return P = xf(M.type, M.key, M.props, null, j.mode, P), P.ref = Su(j, null, M), P.return = j, P;
          case xe:
            return M = rc(M, j.mode, P), M.return = j, M;
          case tt:
            var fe = M._init;
            return ue(j, fe(M._payload), P);
        }
        if (wr(M) || be(M))
          return M = Po(M, j.mode, P, null), M.return = j, M;
        js(j, M);
      }
      return null;
    }
    function ae(j, M, P, fe) {
      var Ae = M !== null ? M.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return Ae !== null ? null : k(j, M, "" + P, fe);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case yt:
            return P.key === Ae ? L(j, M, P, fe) : null;
          case xe:
            return P.key === Ae ? Q(j, M, P, fe) : null;
          case tt:
            return Ae = P._init, ae(
              j,
              M,
              Ae(P._payload),
              fe
            );
        }
        if (wr(P) || be(P))
          return Ae !== null ? null : le(j, M, P, fe, null);
        js(j, P);
      }
      return null;
    }
    function Se(j, M, P, fe, Ae) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number")
        return j = j.get(P) || null, k(M, j, "" + fe, Ae);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case yt:
            return j = j.get(fe.key === null ? P : fe.key) || null, L(M, j, fe, Ae);
          case xe:
            return j = j.get(fe.key === null ? P : fe.key) || null, Q(M, j, fe, Ae);
          case tt:
            var Ge = fe._init;
            return Se(j, M, P, Ge(fe._payload), Ae);
        }
        if (wr(fe) || be(fe))
          return j = j.get(P) || null, le(M, j, fe, Ae, null);
        js(M, fe);
      }
      return null;
    }
    function Oe(j, M, P, fe) {
      for (var Ae = null, Ge = null, De = M, Je = M = 0, $n = null; De !== null && Je < P.length; Je++) {
        De.index > Je ? ($n = De, De = null) : $n = De.sibling;
        var zt = ae(j, De, P[Je], fe);
        if (zt === null) {
          De === null && (De = $n);
          break;
        }
        n && De && zt.alternate === null && r(j, De), M = m(zt, M, Je), Ge === null ? Ae = zt : Ge.sibling = zt, Ge = zt, De = $n;
      }
      if (Je === P.length)
        return l(j, De), cn && xo(j, Je), Ae;
      if (De === null) {
        for (; Je < P.length; Je++)
          De = ue(j, P[Je], fe), De !== null && (M = m(De, M, Je), Ge === null ? Ae = De : Ge.sibling = De, Ge = De);
        return cn && xo(j, Je), Ae;
      }
      for (De = u(j, De); Je < P.length; Je++)
        $n = Se(De, j, Je, P[Je], fe), $n !== null && (n && $n.alternate !== null && De.delete($n.key === null ? Je : $n.key), M = m($n, M, Je), Ge === null ? Ae = $n : Ge.sibling = $n, Ge = $n);
      return n && De.forEach(function(ul) {
        return r(j, ul);
      }), cn && xo(j, Je), Ae;
    }
    function Me(j, M, P, fe) {
      var Ae = be(P);
      if (typeof Ae != "function")
        throw Error(c(150));
      if (P = Ae.call(P), P == null)
        throw Error(c(151));
      for (var Ge = Ae = null, De = M, Je = M = 0, $n = null, zt = P.next(); De !== null && !zt.done; Je++, zt = P.next()) {
        De.index > Je ? ($n = De, De = null) : $n = De.sibling;
        var ul = ae(j, De, zt.value, fe);
        if (ul === null) {
          De === null && (De = $n);
          break;
        }
        n && De && ul.alternate === null && r(j, De), M = m(ul, M, Je), Ge === null ? Ae = ul : Ge.sibling = ul, Ge = ul, De = $n;
      }
      if (zt.done)
        return l(
          j,
          De
        ), cn && xo(j, Je), Ae;
      if (De === null) {
        for (; !zt.done; Je++, zt = P.next())
          zt = ue(j, zt.value, fe), zt !== null && (M = m(zt, M, Je), Ge === null ? Ae = zt : Ge.sibling = zt, Ge = zt);
        return cn && xo(j, Je), Ae;
      }
      for (De = u(j, De); !zt.done; Je++, zt = P.next())
        zt = Se(De, j, Je, zt.value, fe), zt !== null && (n && zt.alternate !== null && De.delete(zt.key === null ? Je : zt.key), M = m(zt, M, Je), Ge === null ? Ae = zt : Ge.sibling = zt, Ge = zt);
      return n && De.forEach(function(mg) {
        return r(j, mg);
      }), cn && xo(j, Je), Ae;
    }
    function In(j, M, P, fe) {
      if (typeof P == "object" && P !== null && P.type === gt && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case yt:
            e: {
              for (var Ae = P.key, Ge = M; Ge !== null; ) {
                if (Ge.key === Ae) {
                  if (Ae = P.type, Ae === gt) {
                    if (Ge.tag === 7) {
                      l(j, Ge.sibling), M = d(Ge, P.props.children), M.return = j, j = M;
                      break e;
                    }
                  } else if (Ge.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === tt && uh(Ae) === Ge.type) {
                    l(j, Ge.sibling), M = d(Ge, P.props), M.ref = Su(j, Ge, P), M.return = j, j = M;
                    break e;
                  }
                  l(j, Ge);
                  break;
                } else
                  r(j, Ge);
                Ge = Ge.sibling;
              }
              P.type === gt ? (M = Po(P.props.children, j.mode, fe, P.key), M.return = j, j = M) : (fe = xf(P.type, P.key, P.props, null, j.mode, fe), fe.ref = Su(j, M, P), fe.return = j, j = fe);
            }
            return T(j);
          case xe:
            e: {
              for (Ge = P.key; M !== null; ) {
                if (M.key === Ge)
                  if (M.tag === 4 && M.stateNode.containerInfo === P.containerInfo && M.stateNode.implementation === P.implementation) {
                    l(j, M.sibling), M = d(M, P.children || []), M.return = j, j = M;
                    break e;
                  } else {
                    l(j, M);
                    break;
                  }
                else
                  r(j, M);
                M = M.sibling;
              }
              M = rc(P, j.mode, fe), M.return = j, j = M;
            }
            return T(j);
          case tt:
            return Ge = P._init, In(j, M, Ge(P._payload), fe);
        }
        if (wr(P))
          return Oe(j, M, P, fe);
        if (be(P))
          return Me(j, M, P, fe);
        js(j, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, M !== null && M.tag === 6 ? (l(j, M.sibling), M = d(M, P), M.return = j, j = M) : (l(j, M), M = kf(P, j.mode, fe), M.return = j, j = M), T(j)) : l(j, M);
    }
    return In;
  }
  var Eu = sh(!0), ch = sh(!1), Fs = {}, ki = Jt(Fs), Ru = Jt(Fs), Hs = Jt(Fs);
  function Fl(n) {
    if (n === Fs)
      throw Error(c(174));
    return n;
  }
  function Bd(n, r) {
    switch (Mt(Hs, r), Mt(Ru, n), Mt(ki, Fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Nr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Nr(r, n);
    }
    ze(ki), Mt(ki, r);
  }
  function wu() {
    ze(ki), ze(Ru), ze(Hs);
  }
  function qc(n) {
    Fl(Hs.current);
    var r = Fl(ki.current), l = Nr(r, n.type);
    r !== l && (Mt(Ru, n), Mt(ki, l));
  }
  function Ye(n) {
    Ru.current === n && (ze(ki), ze(Ru));
  }
  var Ue = Jt(0);
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
  function Va() {
    for (var n = 0; n < bn.length; n++)
      bn[n]._workInProgressVersionPrimary = null;
    bn.length = 0;
  }
  var Ps = Ne.ReactCurrentDispatcher, Vd = Ne.ReactCurrentBatchConfig, ko = 0, En = null, Mn = null, ee = null, zn = !1, Xe = !1, Oi = 0, al = 0;
  function kn() {
    throw Error(c(321));
  }
  function Ya(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!si(n[l], r[l]))
        return !1;
    return !0;
  }
  function Oo(n, r, l, u, d, m) {
    if (ko = m, En = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ps.current = n === null || n.memoizedState === null ? Ky : Zy, n = l(u, d), Xe) {
      m = 0;
      do {
        if (Xe = !1, Oi = 0, 25 <= m)
          throw Error(c(301));
        m += 1, ee = Mn = null, r.updateQueue = null, Ps.current = eg, n = l(u, d);
      } while (Xe);
    }
    if (Ps.current = of, r = Mn !== null && Mn.next !== null, ko = 0, ee = Mn = En = null, zn = !1, r)
      throw Error(c(300));
    return n;
  }
  function Hl() {
    var n = Oi !== 0;
    return Oi = 0, n;
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
  function Do(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Bs(n) {
    var r = ia(), l = r.queue;
    if (l === null)
      throw Error(c(311));
    l.lastRenderedReducer = n;
    var u = Mn, d = u.baseQueue, m = l.pending;
    if (m !== null) {
      if (d !== null) {
        var T = d.next;
        d.next = m.next, m.next = T;
      }
      u.baseQueue = d = m, l.pending = null;
    }
    if (d !== null) {
      m = d.next, u = u.baseState;
      var k = T = null, L = null, Q = m;
      do {
        var le = Q.lane;
        if ((ko & le) === le)
          L !== null && (L = L.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), u = Q.hasEagerState ? Q.eagerState : n(u, Q.action);
        else {
          var ue = {
            lane: le,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          L === null ? (k = L = ue, T = u) : L = L.next = ue, En.lanes |= le, Io |= le;
        }
        Q = Q.next;
      } while (Q !== null && Q !== m);
      L === null ? T = u : L.next = k, si(u, r.memoizedState) || (la = !0), r.memoizedState = u, r.baseState = T, r.baseQueue = L, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      d = n;
      do
        m = d.lane, En.lanes |= m, Io |= m, d = d.next;
      while (d !== n);
    } else
      d === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Vs(n) {
    var r = ia(), l = r.queue;
    if (l === null)
      throw Error(c(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, d = l.pending, m = r.memoizedState;
    if (d !== null) {
      l.pending = null;
      var T = d = d.next;
      do
        m = n(m, T.action), T = T.next;
      while (T !== d);
      si(m, r.memoizedState) || (la = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), l.lastRenderedState = m;
    }
    return [m, u];
  }
  function Qc() {
  }
  function Xc(n, r) {
    var l = En, u = ia(), d = r(), m = !si(u.memoizedState, d);
    if (m && (u.memoizedState = d, la = !0), u = u.queue, Ys(Jc.bind(null, l, u, n), [n]), u.getSnapshot !== r || m || ee !== null && ee.memoizedState.tag & 1) {
      if (l.flags |= 2048, _o(9, $c.bind(null, l, u, d, r), void 0, null), Dn === null)
        throw Error(c(349));
      ko & 30 || Gc(l, r, d);
    }
    return d;
  }
  function Gc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function $c(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Kc(r) && Zc(n);
  }
  function Jc(n, r, l) {
    return l(function() {
      Kc(r) && Zc(n);
    });
  }
  function Kc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !si(n, l);
    } catch {
      return !0;
    }
  }
  function Zc(n) {
    var r = rl(n, 1);
    r !== null && Rn(r, n, 1, -1);
  }
  function ef(n) {
    var r = aa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Do, lastRenderedState: n }, r.queue = n, n = n.dispatch = lf.bind(null, En, n), [r.memoizedState, n];
  }
  function _o(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function tf() {
    return ia().memoizedState;
  }
  function Tu(n, r, l, u) {
    var d = aa();
    En.flags |= n, d.memoizedState = _o(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function Lo(n, r, l, u) {
    var d = ia();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (Mn !== null) {
      var T = Mn.memoizedState;
      if (m = T.destroy, u !== null && Ya(u, T.deps)) {
        d.memoizedState = _o(r, l, m, u);
        return;
      }
    }
    En.flags |= n, d.memoizedState = _o(1 | r, l, m, u);
  }
  function No(n, r) {
    return Tu(8390656, 8, n, r);
  }
  function Ys(n, r) {
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
  function Yd(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Lo(4, 4, af.bind(null, r, n), l);
  }
  function Mo() {
  }
  function Wd(n, r) {
    var l = ia();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ya(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Cu(n, r) {
    var l = ia();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ya(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Pl(n, r, l) {
    return ko & 21 ? (si(l, r) || (l = vo(), En.lanes |= l, Io |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, la = !0), n.memoizedState = l);
  }
  function ka(n, r) {
    var l = Ct;
    Ct = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Vd.transition;
    Vd.transition = {};
    try {
      n(!1), r();
    } finally {
      Ct = l, Vd.transition = u;
    }
  }
  function fh() {
    return ia().memoizedState;
  }
  function an(n, r, l) {
    var u = ol(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Ws(n))
      xu(r, l);
    else if (l = nh(n, r, l, u), l !== null) {
      var d = nr();
      Rn(l, n, u, d), qs(l, r, u);
    }
  }
  function lf(n, r, l) {
    var u = ol(n), d = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Ws(n))
      xu(r, d);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null))
        try {
          var T = r.lastRenderedState, k = m(T, l);
          if (d.hasEagerState = !0, d.eagerState = k, si(k, T)) {
            var L = r.interleaved;
            L === null ? (d.next = d, ba(r)) : (d.next = L.next, L.next = d), r.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
      l = nh(n, r, d, u), l !== null && (d = nr(), Rn(l, n, u, d), qs(l, r, u));
    }
  }
  function Ws(n) {
    var r = n.alternate;
    return n === En || r !== null && r === En;
  }
  function xu(n, r) {
    Xe = zn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function qs(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ps(n, l);
    }
  }
  var of = { readContext: de, useCallback: kn, useContext: kn, useEffect: kn, useImperativeHandle: kn, useInsertionEffect: kn, useLayoutEffect: kn, useMemo: kn, useReducer: kn, useRef: kn, useState: kn, useDebugValue: kn, useDeferredValue: kn, useTransition: kn, useMutableSource: kn, useSyncExternalStore: kn, useId: kn, unstable_isNewReconciler: !1 }, Ky = { readContext: de, useCallback: function(n, r) {
    return aa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: de, useEffect: No, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Tu(
      4194308,
      4,
      af.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Tu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Tu(4, 2, n, r);
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
      if (l = r(), Dn === null)
        throw Error(c(349));
      ko & 30 || Gc(u, r, l);
    }
    d.memoizedState = l;
    var m = { value: l, getSnapshot: r };
    return d.queue = m, No(Jc.bind(
      null,
      u,
      m,
      n
    ), [n]), u.flags |= 2048, _o(9, $c.bind(null, u, m, l, r), void 0, null), l;
  }, useId: function() {
    var n = aa(), r = Dn.identifierPrefix;
    if (cn) {
      var l = fr, u = na;
      l = (u & ~(1 << 32 - Mr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Oi++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = al++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Zy = {
    readContext: de,
    useCallback: Wd,
    useContext: de,
    useEffect: Ys,
    useImperativeHandle: Yd,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: Cu,
    useReducer: Bs,
    useRef: tf,
    useState: function() {
      return Bs(Do);
    },
    useDebugValue: Mo,
    useDeferredValue: function(n) {
      var r = ia();
      return Pl(r, Mn.memoizedState, n);
    },
    useTransition: function() {
      var n = Bs(Do)[0], r = ia().memoizedState;
      return [n, r];
    },
    useMutableSource: Qc,
    useSyncExternalStore: Xc,
    useId: fh,
    unstable_isNewReconciler: !1
  }, eg = { readContext: de, useCallback: Wd, useContext: de, useEffect: Ys, useImperativeHandle: Yd, useInsertionEffect: nf, useLayoutEffect: rf, useMemo: Cu, useReducer: Vs, useRef: tf, useState: function() {
    return Vs(Do);
  }, useDebugValue: Mo, useDeferredValue: function(n) {
    var r = ia();
    return Mn === null ? r.memoizedState = n : Pl(r, Mn.memoizedState, n);
  }, useTransition: function() {
    var n = Vs(Do)[0], r = ia().memoizedState;
    return [n, r];
  }, useMutableSource: Qc, useSyncExternalStore: Xc, useId: fh, unstable_isNewReconciler: !1 };
  function Bl(n, r) {
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
  function qd(n, r, l) {
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
  var dh = typeof WeakMap == "function" ? WeakMap : Map;
  function ph(n, r, l) {
    l = rn(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      Sf || (Sf = !0, tp = u), Qs(n, r);
    }, l;
  }
  function vh(n, r, l) {
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
      var T = r.stack;
      this.componentDidCatch(r.value, { componentStack: T !== null ? T : "" });
    }), l;
  }
  function Xs(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new dh();
      var d = /* @__PURE__ */ new Set();
      u.set(r, d);
    } else
      d = u.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), u.set(r, d));
    d.has(l) || (d.add(l), n = cg.bind(null, n, r, l), r.then(n, n));
  }
  function hh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Qd(n, r, l, u, d) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = d, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = rn(-1, 1), r.tag = 2, jl(l, r, 1))), l.lanes |= 1), n);
  }
  var mh = Ne.ReactCurrentOwner, la = !1;
  function An(n, r, l, u) {
    r.child = n === null ? ch(r, null, l, u) : Eu(r, n.child, l, u);
  }
  function bu(n, r, l, u, d) {
    l = l.render;
    var m = r.ref;
    return Nn(r, d), u = Oo(n, r, l, u, m, d), l = Hl(), n !== null && !la ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Un(n, r, d)) : (cn && l && Hc(r), r.flags |= 1, An(n, r, u, d), r.child);
  }
  function Vl(n, r, l, u, d) {
    if (n === null) {
      var m = l.type;
      return typeof m == "function" && !lp(m) && m.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = m, uf(n, r, m, u, d)) : (n = xf(l.type, null, u, r, r.mode, d), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & d)) {
      var T = m.memoizedProps;
      if (l = l.compare, l = l !== null ? l : fu, l(T, u) && n.ref === r.ref)
        return Un(n, r, d);
    }
    return r.flags |= 1, n = ql(m, u), n.ref = r.ref, n.return = r, r.child = n;
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
    return An(n, r, d, l), r.child;
  }
  function zo(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ut(n, r, l, u, d) {
    var m = Bn(l) ? zr : Zn.current;
    return m = Ta(r, m), Nn(r, d), l = Oo(n, r, l, u, m, d), u = Hl(), n !== null && !la ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Un(n, r, d)) : (cn && u && Hc(r), r.flags |= 1, An(n, r, l, d), r.child);
  }
  function Gs(n, r, l, u, d) {
    if (Bn(l)) {
      var m = !0;
      To(r);
    } else
      m = !1;
    if (Nn(r, d), r.stateNode === null)
      Js(n, r), lh(r, l, u), Pd(r, l, u, d), u = !0;
    else if (n === null) {
      var T = r.stateNode, k = r.memoizedProps;
      T.props = k;
      var L = T.context, Q = l.contextType;
      typeof Q == "object" && Q !== null ? Q = de(Q) : (Q = Bn(l) ? zr : Zn.current, Q = Ta(r, Q));
      var le = l.getDerivedStateFromProps, ue = typeof le == "function" || typeof T.getSnapshotBeforeUpdate == "function";
      ue || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (k !== u || L !== Q) && oh(r, T, u, Q), Il = !1;
      var ae = r.memoizedState;
      T.state = ae, Is(r, u, T, d), L = r.memoizedState, k !== u || ae !== L || rt.current || Il ? (typeof le == "function" && (Hd(r, l, le, u), L = r.memoizedState), (k = Il || ih(r, l, k, u, ae, L, Q)) ? (ue || typeof T.UNSAFE_componentWillMount != "function" && typeof T.componentWillMount != "function" || (typeof T.componentWillMount == "function" && T.componentWillMount(), typeof T.UNSAFE_componentWillMount == "function" && T.UNSAFE_componentWillMount()), typeof T.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof T.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), T.props = u, T.state = L, T.context = Q, u = k) : (typeof T.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      T = r.stateNode, rh(n, r), k = r.memoizedProps, Q = r.type === r.elementType ? k : ra(r.type, k), T.props = Q, ue = r.pendingProps, ae = T.context, L = l.contextType, typeof L == "object" && L !== null ? L = de(L) : (L = Bn(l) ? zr : Zn.current, L = Ta(r, L));
      var Se = l.getDerivedStateFromProps;
      (le = typeof Se == "function" || typeof T.getSnapshotBeforeUpdate == "function") || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (k !== ue || ae !== L) && oh(r, T, u, L), Il = !1, ae = r.memoizedState, T.state = ae, Is(r, u, T, d);
      var Oe = r.memoizedState;
      k !== ue || ae !== Oe || rt.current || Il ? (typeof Se == "function" && (Hd(r, l, Se, u), Oe = r.memoizedState), (Q = Il || ih(r, l, Q, u, ae, Oe, L) || !1) ? (le || typeof T.UNSAFE_componentWillUpdate != "function" && typeof T.componentWillUpdate != "function" || (typeof T.componentWillUpdate == "function" && T.componentWillUpdate(u, Oe, L), typeof T.UNSAFE_componentWillUpdate == "function" && T.UNSAFE_componentWillUpdate(u, Oe, L)), typeof T.componentDidUpdate == "function" && (r.flags |= 4), typeof T.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof T.componentDidUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Oe), T.props = u, T.state = Oe, T.context = L, u = Q) : (typeof T.componentDidUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return sf(n, r, l, u, m, d);
  }
  function sf(n, r, l, u, d, m) {
    zo(n, r);
    var T = (r.flags & 128) !== 0;
    if (!u && !T)
      return d && Zv(r, l, !1), Un(n, r, m);
    u = r.stateNode, mh.current = r;
    var k = T && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && T ? (r.child = Eu(r, n.child, null, m), r.child = Eu(r, null, k, m)) : An(n, r, k, m), r.memoizedState = u.state, d && Zv(r, l, !0), r.child;
  }
  function tg(n) {
    var r = n.stateNode;
    r.pendingContext ? Ci(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ci(n, r.context, !1), Bd(n, r.containerInfo);
  }
  function yh(n, r, l, u, d) {
    return hu(), Vn(d), r.flags |= 256, An(n, r, l, u), r.child;
  }
  var $s = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ao(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function gh(n, r, l) {
    var u = r.pendingProps, d = Ue.current, m = !1, T = (r.flags & 128) !== 0, k;
    if ((k = T) || (k = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), k ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), Mt(Ue, d & 1), n === null)
      return Bc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (T = u.children, n = u.fallback, m ? (u = r.mode, m = r.child, T = { mode: "hidden", children: T }, !(u & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = T) : m = bf(T, u, 0, null), n = Po(n, u, l, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = Ao(l), r.memoizedState = $s, n) : cf(r, T));
    if (d = n.memoizedState, d !== null && (k = d.dehydrated, k !== null))
      return Xd(n, r, T, u, k, d, l);
    if (m) {
      m = u.fallback, T = r.mode, d = n.child, k = d.sibling;
      var L = { mode: "hidden", children: u.children };
      return !(T & 1) && r.child !== d ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = ql(d, L), u.subtreeFlags = d.subtreeFlags & 14680064), k !== null ? m = ql(k, m) : (m = Po(m, T, l, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, T = n.child.memoizedState, T = T === null ? Ao(l) : { baseLanes: T.baseLanes | l, cachePool: null, transitions: T.transitions }, m.memoizedState = T, m.childLanes = n.childLanes & ~l, r.memoizedState = $s, u;
    }
    return m = n.child, n = m.sibling, u = ql(m, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function cf(n, r) {
    return r = bf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ff(n, r, l, u) {
    return u !== null && Vn(u), Eu(r, n.child, null, l), n = cf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Xd(n, r, l, u, d, m, T) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = qd(Error(c(422))), ff(n, r, T, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = u.fallback, d = r.mode, u = bf({ mode: "visible", children: u.children }, d, 0, null), m = Po(m, d, T, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, r.mode & 1 && Eu(r, n.child, null, T), r.child.memoizedState = Ao(T), r.memoizedState = $s, m);
    if (!(r.mode & 1))
      return ff(n, r, T, null);
    if (d.data === "$!") {
      if (u = d.nextSibling && d.nextSibling.dataset, u)
        var k = u.dgst;
      return u = k, m = Error(c(419)), u = qd(m, u, void 0), ff(n, r, T, u);
    }
    if (k = (T & n.childLanes) !== 0, la || k) {
      if (u = Dn, u !== null) {
        switch (T & -T) {
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
        d = d & (u.suspendedLanes | T) ? 0 : d, d !== 0 && d !== m.retryLane && (m.retryLane = d, rl(n, d), Rn(u, n, d, -1));
      }
      return nc(), u = qd(Error(c(421))), ff(n, r, T, u);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = n.child, r = ip.bind(null, n), d._reactRetry = r, null) : (n = m.treeContext, xa = wa(d.nextSibling), Ca = r, cn = !0, Ba = null, n !== null && (ea[ta++] = na, ea[ta++] = fr, ea[ta++] = di, na = n.id, fr = n.overflow, di = r), r = cf(r, u.children), r.flags |= 4096, r);
  }
  function Sh(n, r, l) {
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
    if (An(n, r, u.children, l), u = Ue.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Sh(n, l, r);
            else if (n.tag === 19)
              Sh(n, l, r);
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
  function Js(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Un(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Io |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, l = ql(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = ql(n, n.pendingProps), l.return = r;
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
        qc(r);
        break;
      case 1:
        Bn(r.type) && To(r);
        break;
      case 4:
        Bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, d = r.memoizedProps.value;
        Mt(mu, u._currentValue), u._currentValue = d;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Mt(Ue, Ue.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? gh(n, r, l) : (Mt(Ue, Ue.current & 1), n = Un(n, r, l), n !== null ? n.sibling : null);
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
  var Di, ku, Ou, Wa;
  Di = function(n, r) {
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
  }, Ou = function(n, r, l, u) {
    var d = n.memoizedProps;
    if (d !== u) {
      n = r.stateNode, Fl(ki.current);
      var m = null;
      switch (l) {
        case "input":
          d = Cn(n, d), u = Cn(n, u), m = [];
          break;
        case "select":
          d = _({}, d, { value: void 0 }), u = _({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          d = va(n, d), u = va(n, u), m = [];
          break;
        default:
          typeof d.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Ic);
      }
      Nt(l, u);
      var T;
      l = null;
      for (Q in d)
        if (!u.hasOwnProperty(Q) && d.hasOwnProperty(Q) && d[Q] != null)
          if (Q === "style") {
            var k = d[Q];
            for (T in k)
              k.hasOwnProperty(T) && (l || (l = {}), l[T] = "");
          } else
            Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (w.hasOwnProperty(Q) ? m || (m = []) : (m = m || []).push(Q, null));
      for (Q in u) {
        var L = u[Q];
        if (k = d != null ? d[Q] : void 0, u.hasOwnProperty(Q) && L !== k && (L != null || k != null))
          if (Q === "style")
            if (k) {
              for (T in k)
                !k.hasOwnProperty(T) || L && L.hasOwnProperty(T) || (l || (l = {}), l[T] = "");
              for (T in L)
                L.hasOwnProperty(T) && k[T] !== L[T] && (l || (l = {}), l[T] = L[T]);
            } else
              l || (m || (m = []), m.push(
                Q,
                l
              )), l = L;
          else
            Q === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, k = k ? k.__html : void 0, L != null && k !== L && (m = m || []).push(Q, L)) : Q === "children" ? typeof L != "string" && typeof L != "number" || (m = m || []).push(Q, "" + L) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (w.hasOwnProperty(Q) ? (L != null && Q === "onScroll" && $t("scroll", n), m || k === L || (m = [])) : (m = m || []).push(Q, L));
      }
      l && (m = m || []).push("style", l);
      var Q = m;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, Wa = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function On(n, r) {
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
  function Or(n) {
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
    switch (Pc(r), r.tag) {
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
        return Bn(r.type) && Zr(), Or(r), null;
      case 3:
        return u = r.stateNode, wu(), ze(rt), ze(Zn), Va(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Vc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ba !== null && (np(Ba), Ba = null))), ku(n, r), Or(r), null;
      case 5:
        Ye(r);
        var d = Fl(Hs.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ou(n, r, l, u, d), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(c(166));
            return Or(r), null;
          }
          if (n = Fl(ki.current), Vc(r)) {
            u = r.stateNode, l = r.type;
            var m = r.memoizedProps;
            switch (u[ja] = r, u[As] = m, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                $t("cancel", u), $t("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                $t("load", u);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Ki.length; d++)
                  $t(Ki[d], u);
                break;
              case "source":
                $t("error", u);
                break;
              case "img":
              case "image":
              case "link":
                $t(
                  "error",
                  u
                ), $t("load", u);
                break;
              case "details":
                $t("toggle", u);
                break;
              case "input":
                or(u, m), $t("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, $t("invalid", u);
                break;
              case "textarea":
                ha(u, m), $t("invalid", u);
            }
            Nt(l, m), d = null;
            for (var T in m)
              if (m.hasOwnProperty(T)) {
                var k = m[T];
                T === "children" ? typeof k == "string" ? u.textContent !== k && (m.suppressHydrationWarning !== !0 && Ls(u.textContent, k, n), d = ["children", k]) : typeof k == "number" && u.textContent !== "" + k && (m.suppressHydrationWarning !== !0 && Ls(
                  u.textContent,
                  k,
                  n
                ), d = ["children", "" + k]) : w.hasOwnProperty(T) && k != null && T === "onScroll" && $t("scroll", u);
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
                typeof m.onClick == "function" && (u.onclick = Ic);
            }
            u = d, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            T = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ur(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = T.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = T.createElement(l, { is: u.is }) : (n = T.createElement(l), l === "select" && (T = n, u.multiple ? T.multiple = !0 : u.size && (T.size = u.size))) : n = T.createElementNS(n, l), n[ja] = r, n[As] = u, Di(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (T = Ln(l, u), l) {
                case "dialog":
                  $t("cancel", n), $t("close", n), d = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  $t("load", n), d = u;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Ki.length; d++)
                    $t(Ki[d], n);
                  d = u;
                  break;
                case "source":
                  $t("error", n), d = u;
                  break;
                case "img":
                case "image":
                case "link":
                  $t(
                    "error",
                    n
                  ), $t("load", n), d = u;
                  break;
                case "details":
                  $t("toggle", n), d = u;
                  break;
                case "input":
                  or(n, u), d = Cn(n, u), $t("invalid", n);
                  break;
                case "option":
                  d = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, d = _({}, u, { value: void 0 }), $t("invalid", n);
                  break;
                case "textarea":
                  ha(n, u), d = va(n, u), $t("invalid", n);
                  break;
                default:
                  d = u;
              }
              Nt(l, d), k = d;
              for (m in k)
                if (k.hasOwnProperty(m)) {
                  var L = k[m];
                  m === "style" ? ft(n, L) : m === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && ya(n, L)) : m === "children" ? typeof L == "string" ? (l !== "textarea" || L !== "") && ga(n, L) : typeof L == "number" && ga(n, "" + L) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (w.hasOwnProperty(m) ? L != null && m === "onScroll" && $t("scroll", n) : L != null && Fe(n, m, L, T));
                }
              switch (l) {
                case "input":
                  lr(n), Hn(n, u, !1);
                  break;
                case "textarea":
                  lr(n), ma(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + mt(u.value));
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
                  typeof d.onClick == "function" && (n.onclick = Ic);
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
        if (n && r.stateNode != null)
          Wa(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(c(166));
          if (l = Fl(Hs.current), Fl(ki.current), Vc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[ja] = r, (m = u.nodeValue !== l) && (n = Ca, n !== null))
              switch (n.tag) {
                case 3:
                  Ls(u.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ls(u.nodeValue, l, (n.mode & 1) !== 0);
              }
            m && (r.flags |= 4);
          } else
            u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[ja] = r, r.stateNode = u;
        }
        return Or(r), null;
      case 13:
        if (ze(Ue), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (cn && xa !== null && r.mode & 1 && !(r.flags & 128))
            th(), hu(), r.flags |= 98560, m = !1;
          else if (m = Vc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!m)
                throw Error(c(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m)
                throw Error(c(317));
              m[ja] = r;
            } else
              hu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Or(r), m = !1;
          } else
            Ba !== null && (np(Ba), Ba = null), m = !0;
          if (!m)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ue.current & 1 ? Xn === 0 && (Xn = 3) : nc())), r.updateQueue !== null && (r.flags |= 4), Or(r), null);
      case 4:
        return wu(), ku(n, r), n === null && wi(r.stateNode.containerInfo), Or(r), null;
      case 10:
        return jd(r.type._context), Or(r), null;
      case 17:
        return Bn(r.type) && Zr(), Or(r), null;
      case 19:
        if (ze(Ue), m = r.memoizedState, m === null)
          return Or(r), null;
        if (u = (r.flags & 128) !== 0, T = m.rendering, T === null)
          if (u)
            On(m, !1);
          else {
            if (Xn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (T = Lt(n), T !== null) {
                  for (r.flags |= 128, On(m, !1), u = T.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; )
                    m = l, n = u, m.flags &= 14680066, T = m.alternate, T === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = T.childLanes, m.lanes = T.lanes, m.child = T.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = T.memoizedProps, m.memoizedState = T.memoizedState, m.updateQueue = T.updateQueue, m.type = T.type, n = T.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Mt(Ue, Ue.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            m.tail !== null && nn() > ju && (r.flags |= 128, u = !0, On(m, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = Lt(T), n !== null) {
              if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), On(m, !0), m.tail === null && m.tailMode === "hidden" && !T.alternate && !cn)
                return Or(r), null;
            } else
              2 * nn() - m.renderingStartTime > ju && l !== 1073741824 && (r.flags |= 128, u = !0, On(m, !1), r.lanes = 4194304);
          m.isBackwards ? (T.sibling = r.child, r.child = T) : (l = m.last, l !== null ? l.sibling = T : r.child = T, m.last = T);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = nn(), r.sibling = null, l = Ue.current, Mt(Ue, u ? l & 1 | 2 : l & 1), r) : (Or(r), null);
      case 22:
      case 23:
        return Tf(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ua & 1073741824 && (Or(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Or(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function rg(n, r) {
    switch (Pc(r), r.tag) {
      case 1:
        return Bn(r.type) && Zr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wu(), ze(rt), ze(Zn), Va(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ye(r), null;
      case 13:
        if (ze(Ue), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(c(340));
          hu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return ze(Ue), null;
      case 4:
        return wu(), null;
      case 10:
        return jd(r.type._context), null;
      case 22:
      case 23:
        return Tf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Du = !1, dr = !1, pf = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function _u(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          _n(n, r, u);
        }
      else
        l.current = null;
  }
  function $d(n, r, l) {
    try {
      l();
    } catch (u) {
      _n(n, r, u);
    }
  }
  var vf = !1;
  function ag(n, r) {
    if (kd = iu, n = Pv(), xs(n)) {
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
            var T = 0, k = -1, L = -1, Q = 0, le = 0, ue = n, ae = null;
            t:
              for (; ; ) {
                for (var Se; ue !== l || d !== 0 && ue.nodeType !== 3 || (k = T + d), ue !== m || u !== 0 && ue.nodeType !== 3 || (L = T + u), ue.nodeType === 3 && (T += ue.nodeValue.length), (Se = ue.firstChild) !== null; )
                  ae = ue, ue = Se;
                for (; ; ) {
                  if (ue === n)
                    break t;
                  if (ae === l && ++Q === d && (k = T), ae === m && ++le === u && (L = T), (Se = ue.nextSibling) !== null)
                    break;
                  ue = ae, ae = ue.parentNode;
                }
                ue = Se;
              }
            l = k === -1 || L === -1 ? null : { start: k, end: L };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Od = { focusedElem: n, selectionRange: l }, iu = !1, ke = r; ke !== null; )
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
                    var Me = Oe.memoizedProps, In = Oe.memoizedState, j = r.stateNode, M = j.getSnapshotBeforeUpdate(r.elementType === r.type ? Me : ra(r.type, Me), In);
                    j.__reactInternalSnapshotBeforeUpdate = M;
                  }
                  break;
                case 3:
                  var P = r.stateNode.containerInfo;
                  P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
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
            _n(r, r.return, fe);
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
          d.destroy = void 0, m !== void 0 && $d(r, l, m);
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
  function Eh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Eh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ja], delete r[As], delete r[Nd], delete r[Gy], delete r[$y])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Jd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Rh(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Jd(n.return))
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
  function Ks(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ic));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Ks(n, r, l), n = n.sibling; n !== null; )
        Ks(n, r, l), n = n.sibling;
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
        dr || _u(l, r);
      case 6:
        var u = mn, d = er;
        mn = null, Ar(n, r, l), mn = u, er = d, mn !== null && (er ? (n = mn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : mn.removeChild(l.stateNode));
        break;
      case 18:
        mn !== null && (er ? (n = mn, l = l.stateNode, n.nodeType === 8 ? Ld(n.parentNode, l) : n.nodeType === 1 && Ld(n, l), Ia(n)) : Ld(mn, l.stateNode));
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
            var m = d, T = m.destroy;
            m = m.tag, T !== void 0 && (m & 2 || m & 4) && $d(l, r, T), d = d.next;
          } while (d !== u);
        }
        Ar(n, r, l);
        break;
      case 1:
        if (!dr && (_u(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
          } catch (k) {
            _n(l, r, k);
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
  function zu(n) {
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
          var m = n, T = r, k = T;
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
          Mu(m, T, d), mn = null, er = !1;
          var L = d.alternate;
          L !== null && (L.return = null), d.return = null;
        } catch (Q) {
          _n(d, r, Q);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        wh(r, n), r = r.sibling;
  }
  function wh(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (tr(r, n), _i(n), u & 4) {
          try {
            Lu(3, n, n.return), hf(3, n);
          } catch (Me) {
            _n(n, n.return, Me);
          }
          try {
            Lu(5, n, n.return);
          } catch (Me) {
            _n(n, n.return, Me);
          }
        }
        break;
      case 1:
        tr(r, n), _i(n), u & 512 && l !== null && _u(l, l.return);
        break;
      case 5:
        if (tr(r, n), _i(n), u & 512 && l !== null && _u(l, l.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            ga(d, "");
          } catch (Me) {
            _n(n, n.return, Me);
          }
        }
        if (u & 4 && (d = n.stateNode, d != null)) {
          var m = n.memoizedProps, T = l !== null ? l.memoizedProps : m, k = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null)
            try {
              k === "input" && m.type === "radio" && m.name != null && Wn(d, m), Ln(k, T);
              var Q = Ln(k, m);
              for (T = 0; T < L.length; T += 2) {
                var le = L[T], ue = L[T + 1];
                le === "style" ? ft(d, ue) : le === "dangerouslySetInnerHTML" ? ya(d, ue) : le === "children" ? ga(d, ue) : Fe(d, le, ue, Q);
              }
              switch (k) {
                case "input":
                  Fn(d, m);
                  break;
                case "textarea":
                  Tr(d, m);
                  break;
                case "select":
                  var ae = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!m.multiple;
                  var Se = m.value;
                  Se != null ? qn(d, !!m.multiple, Se, !1) : ae !== !!m.multiple && (m.defaultValue != null ? qn(
                    d,
                    !!m.multiple,
                    m.defaultValue,
                    !0
                  ) : qn(d, !!m.multiple, m.multiple ? [] : "", !1));
              }
              d[As] = m;
            } catch (Me) {
              _n(n, n.return, Me);
            }
        }
        break;
      case 6:
        if (tr(r, n), _i(n), u & 4) {
          if (n.stateNode === null)
            throw Error(c(162));
          d = n.stateNode, m = n.memoizedProps;
          try {
            d.nodeValue = m;
          } catch (Me) {
            _n(n, n.return, Me);
          }
        }
        break;
      case 3:
        if (tr(r, n), _i(n), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ia(r.containerInfo);
          } catch (Me) {
            _n(n, n.return, Me);
          }
        break;
      case 4:
        tr(r, n), _i(n);
        break;
      case 13:
        tr(r, n), _i(n), d = n.child, d.flags & 8192 && (m = d.memoizedState !== null, d.stateNode.isHidden = m, !m || d.alternate !== null && d.alternate.memoizedState !== null || (gf = nn())), u & 4 && zu(n);
        break;
      case 22:
        if (le = l !== null && l.memoizedState !== null, n.mode & 1 ? (dr = (Q = dr) || le, tr(r, n), dr = Q) : tr(r, n), _i(n), u & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !le && n.mode & 1)
            for (ke = n, le = n.child; le !== null; ) {
              for (ue = ke = le; ke !== null; ) {
                switch (ae = ke, Se = ae.child, ae.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Lu(4, ae, ae.return);
                    break;
                  case 1:
                    _u(ae, ae.return);
                    var Oe = ae.stateNode;
                    if (typeof Oe.componentWillUnmount == "function") {
                      u = ae, l = ae.return;
                      try {
                        r = u, Oe.props = r.memoizedProps, Oe.state = r.memoizedState, Oe.componentWillUnmount();
                      } catch (Me) {
                        _n(u, l, Me);
                      }
                    }
                    break;
                  case 5:
                    _u(ae, ae.return);
                    break;
                  case 22:
                    if (ae.memoizedState !== null) {
                      Th(ue);
                      continue;
                    }
                }
                Se !== null ? (Se.return = ae, ke = Se) : Th(ue);
              }
              le = le.sibling;
            }
          e:
            for (le = null, ue = n; ; ) {
              if (ue.tag === 5) {
                if (le === null) {
                  le = ue;
                  try {
                    d = ue.stateNode, Q ? (m = d.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (k = ue.stateNode, L = ue.memoizedProps.style, T = L != null && L.hasOwnProperty("display") ? L.display : null, k.style.display = je("display", T));
                  } catch (Me) {
                    _n(n, n.return, Me);
                  }
                }
              } else if (ue.tag === 6) {
                if (le === null)
                  try {
                    ue.stateNode.nodeValue = Q ? "" : ue.memoizedProps;
                  } catch (Me) {
                    _n(n, n.return, Me);
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
        tr(r, n), _i(n), u & 4 && zu(n);
        break;
      case 21:
        break;
      default:
        tr(
          r,
          n
        ), _i(n);
    }
  }
  function _i(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Jd(l)) {
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
            var m = Rh(n);
            Nu(n, m, d);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, k = Rh(n);
            Ks(n, k, T);
            break;
          default:
            throw Error(c(161));
        }
      } catch (L) {
        _n(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ig(n, r, l) {
    ke = n, Kd(n);
  }
  function Kd(n, r, l) {
    for (var u = (n.mode & 1) !== 0; ke !== null; ) {
      var d = ke, m = d.child;
      if (d.tag === 22 && u) {
        var T = d.memoizedState !== null || Du;
        if (!T) {
          var k = d.alternate, L = k !== null && k.memoizedState !== null || dr;
          k = Du;
          var Q = dr;
          if (Du = T, (dr = L) && !Q)
            for (ke = d; ke !== null; )
              T = ke, L = T.child, T.tag === 22 && T.memoizedState !== null ? Zd(d) : L !== null ? (L.return = T, ke = L) : Zd(d);
          for (; m !== null; )
            ke = m, Kd(m), m = m.sibling;
          ke = d, Du = k, dr = Q;
        }
        Au(n);
      } else
        d.subtreeFlags & 8772 && m !== null ? (m.return = d, ke = m) : Au(n);
    }
  }
  function Au(n) {
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
                var T = r.updateQueue;
                if (T !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  gu(r, T, l);
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
                  var Q = r.alternate;
                  if (Q !== null) {
                    var le = Q.memoizedState;
                    if (le !== null) {
                      var ue = le.dehydrated;
                      ue !== null && Ia(ue);
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
          _n(r, r.return, ae);
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
  function Zd(n) {
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
              _n(r, l, L);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var d = r.return;
              try {
                u.componentDidMount();
              } catch (L) {
                _n(r, d, L);
              }
            }
            var m = r.return;
            try {
              mf(r);
            } catch (L) {
              _n(r, m, L);
            }
            break;
          case 5:
            var T = r.return;
            try {
              mf(r);
            } catch (L) {
              _n(r, T, L);
            }
        }
      } catch (L) {
        _n(r, r.return, L);
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
  var lg = Math.ceil, Uo = Ne.ReactCurrentDispatcher, yf = Ne.ReactCurrentOwner, qa = Ne.ReactCurrentBatchConfig, wt = 0, Dn = null, fn = null, Qn = 0, ua = 0, Uu = Jt(0), Xn = 0, Zs = null, Io = 0, Iu = 0, ep = 0, Yl = null, Dr = null, gf = 0, ju = 1 / 0, ll = null, Sf = !1, tp = null, Qa = null, Fu = !1, Xa = null, Ef = 0, ec = 0, Rf = null, tc = -1, jo = 0;
  function nr() {
    return wt & 6 ? nn() : tc !== -1 ? tc : tc = nn();
  }
  function ol(n) {
    return n.mode & 1 ? wt & 2 && Qn !== 0 ? Qn & -Qn : Jy.transition !== null ? (jo === 0 && (jo = vo()), jo) : (n = Ct, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ys(n.type)), n) : 1;
  }
  function Rn(n, r, l, u) {
    if (50 < ec)
      throw ec = 0, Rf = null, Error(c(185));
    Cl(n, l, u), (!(wt & 2) || n !== Dn) && (n === Dn && (!(wt & 2) && (Iu |= l), Xn === 4 && Li(n, Qn)), Gn(n, u), l === 1 && wt === 0 && !(r.mode & 1) && (ju = nn() + 500, Ml && xi()));
  }
  function Gn(n, r) {
    var l = n.callbackNode;
    Tl(n, r);
    var u = Si(n, n === Dn ? Qn : 0);
    if (u === 0)
      l !== null && tn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && tn(l), r === 1)
        n.tag === 0 ? eh(Hu.bind(null, n)) : Fc(Hu.bind(null, n)), Kv(function() {
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
            l = dt;
            break;
          case 536870912:
            l = Vi;
            break;
          default:
            l = dt;
        }
        l = Lh(l, wf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function wf(n, r) {
    if (tc = -1, jo = 0, wt & 6)
      throw Error(c(327));
    var l = n.callbackNode;
    if (Pu() && n.callbackNode !== l)
      return null;
    var u = Si(n, n === Dn ? Qn : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = Cf(n, u);
    else {
      r = u;
      var d = wt;
      wt |= 2;
      var m = xh();
      (Dn !== n || Qn !== r) && (ll = null, ju = nn() + 500, Ho(n, r));
      do
        try {
          ug();
          break;
        } catch (k) {
          Ch(n, k);
        }
      while (!0);
      Id(), Uo.current = m, wt = d, fn !== null ? r = 0 : (Dn = null, Qn = 0, r = Xn);
    }
    if (r !== 0) {
      if (r === 2 && (d = Ei(n), d !== 0 && (u = d, r = Fo(n, d))), r === 1)
        throw l = Zs, Ho(n, 0), Li(n, u), Gn(n, nn()), l;
      if (r === 6)
        Li(n, u);
      else {
        if (d = n.current.alternate, !(u & 30) && !rp(d) && (r = Cf(n, u), r === 2 && (m = Ei(n), m !== 0 && (u = m, r = Fo(n, m))), r === 1))
          throw l = Zs, Ho(n, 0), Li(n, u), Gn(n, nn()), l;
        switch (n.finishedWork = d, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            Wl(n, Dr, ll);
            break;
          case 3:
            if (Li(n, u), (u & 130023424) === u && (r = gf + 500 - nn(), 10 < r)) {
              if (Si(n, 0) !== 0)
                break;
              if (d = n.suspendedLanes, (d & u) !== u) {
                nr(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = Ns(Wl.bind(null, n, Dr, ll), r);
              break;
            }
            Wl(n, Dr, ll);
            break;
          case 4:
            if (Li(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, d = -1; 0 < u; ) {
              var T = 31 - Mr(u);
              m = 1 << T, T = r[T], T > d && (d = T), u &= ~m;
            }
            if (u = d, u = nn() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * lg(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Ns(Wl.bind(null, n, Dr, ll), u);
              break;
            }
            Wl(n, Dr, ll);
            break;
          case 5:
            Wl(n, Dr, ll);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return Gn(n, nn()), n.callbackNode === l ? wf.bind(null, n) : null;
  }
  function Fo(n, r) {
    var l = Yl;
    return n.current.memoizedState.isDehydrated && (Ho(n, r).flags |= 256), n = Cf(n, r), n !== 2 && (r = Dr, Dr = l, r !== null && np(r)), n;
  }
  function np(n) {
    Dr === null ? Dr = n : Dr.push.apply(Dr, n);
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
    for (r &= ~ep, r &= ~Iu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Mr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Hu(n) {
    if (wt & 6)
      throw Error(c(327));
    Pu();
    var r = Si(n, 0);
    if (!(r & 1))
      return Gn(n, nn()), null;
    var l = Cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Ei(n);
      u !== 0 && (r = u, l = Fo(n, u));
    }
    if (l === 1)
      throw l = Zs, Ho(n, 0), Li(n, r), Gn(n, nn()), l;
    if (l === 6)
      throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Wl(n, Dr, ll), Gn(n, nn()), null;
  }
  function ap(n, r) {
    var l = wt;
    wt |= 1;
    try {
      return n(r);
    } finally {
      wt = l, wt === 0 && (ju = nn() + 500, Ml && xi());
    }
  }
  function Ni(n) {
    Xa !== null && Xa.tag === 0 && !(wt & 6) && Pu();
    var r = wt;
    wt |= 1;
    var l = qa.transition, u = Ct;
    try {
      if (qa.transition = null, Ct = 1, n)
        return n();
    } finally {
      Ct = u, qa.transition = l, wt = r, !(wt & 6) && xi();
    }
  }
  function Tf() {
    ua = Uu.current, ze(Uu);
  }
  function Ho(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ms(l)), fn !== null)
      for (l = fn.return; l !== null; ) {
        var u = l;
        switch (Pc(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Zr();
            break;
          case 3:
            wu(), ze(rt), ze(Zn), Va();
            break;
          case 5:
            Ye(u);
            break;
          case 4:
            wu();
            break;
          case 13:
            ze(Ue);
            break;
          case 19:
            ze(Ue);
            break;
          case 10:
            jd(u.type._context);
            break;
          case 22:
          case 23:
            Tf();
        }
        l = l.return;
      }
    if (Dn = n, fn = n = ql(n.current, null), Qn = ua = r, Xn = 0, Zs = null, ep = Iu = Io = 0, Dr = Yl = null, kr !== null) {
      for (r = 0; r < kr.length; r++)
        if (l = kr[r], u = l.interleaved, u !== null) {
          l.interleaved = null;
          var d = u.next, m = l.pending;
          if (m !== null) {
            var T = m.next;
            m.next = d, u.next = T;
          }
          l.pending = u;
        }
      kr = null;
    }
    return n;
  }
  function Ch(n, r) {
    do {
      var l = fn;
      try {
        if (Id(), Ps.current = of, zn) {
          for (var u = En.memoizedState; u !== null; ) {
            var d = u.queue;
            d !== null && (d.pending = null), u = u.next;
          }
          zn = !1;
        }
        if (ko = 0, ee = Mn = En = null, Xe = !1, Oi = 0, yf.current = null, l === null || l.return === null) {
          Xn = 1, Zs = r, fn = null;
          break;
        }
        e: {
          var m = n, T = l.return, k = l, L = r;
          if (r = Qn, k.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var Q = L, le = k, ue = le.tag;
            if (!(le.mode & 1) && (ue === 0 || ue === 11 || ue === 15)) {
              var ae = le.alternate;
              ae ? (le.updateQueue = ae.updateQueue, le.memoizedState = ae.memoizedState, le.lanes = ae.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var Se = hh(T);
            if (Se !== null) {
              Se.flags &= -257, Qd(Se, T, k, m, r), Se.mode & 1 && Xs(m, Q, r), r = Se, L = Q;
              var Oe = r.updateQueue;
              if (Oe === null) {
                var Me = /* @__PURE__ */ new Set();
                Me.add(L), r.updateQueue = Me;
              } else
                Oe.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                Xs(m, Q, r), nc();
                break e;
              }
              L = Error(c(426));
            }
          } else if (cn && k.mode & 1) {
            var In = hh(T);
            if (In !== null) {
              !(In.flags & 65536) && (In.flags |= 256), Qd(In, T, k, m, r), Vn(Bl(L, k));
              break e;
            }
          }
          m = L = Bl(L, k), Xn !== 4 && (Xn = 2), Yl === null ? Yl = [m] : Yl.push(m), m = T;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var j = ph(m, L, r);
                ah(m, j);
                break e;
              case 1:
                k = L;
                var M = m.type, P = m.stateNode;
                if (!(m.flags & 128) && (typeof M.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (Qa === null || !Qa.has(P)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var fe = vh(m, k, r);
                  ah(m, fe);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        kh(l);
      } catch (Ae) {
        r = Ae, fn === l && l !== null && (fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function xh() {
    var n = Uo.current;
    return Uo.current = of, n === null ? of : n;
  }
  function nc() {
    (Xn === 0 || Xn === 3 || Xn === 2) && (Xn = 4), Dn === null || !(Io & 268435455) && !(Iu & 268435455) || Li(Dn, Qn);
  }
  function Cf(n, r) {
    var l = wt;
    wt |= 2;
    var u = xh();
    (Dn !== n || Qn !== r) && (ll = null, Ho(n, r));
    do
      try {
        og();
        break;
      } catch (d) {
        Ch(n, d);
      }
    while (!0);
    if (Id(), wt = l, Uo.current = u, fn !== null)
      throw Error(c(261));
    return Dn = null, Qn = 0, Xn;
  }
  function og() {
    for (; fn !== null; )
      bh(fn);
  }
  function ug() {
    for (; fn !== null && !xr(); )
      bh(fn);
  }
  function bh(n) {
    var r = _h(n.alternate, n, ua);
    n.memoizedProps = n.pendingProps, r === null ? kh(n) : fn = r, yf.current = null;
  }
  function kh(n) {
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
          Xn = 6, fn = null;
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
    Xn === 0 && (Xn = 5);
  }
  function Wl(n, r, l) {
    var u = Ct, d = qa.transition;
    try {
      qa.transition = null, Ct = 1, sg(n, r, l, u);
    } finally {
      qa.transition = d, Ct = u;
    }
    return null;
  }
  function sg(n, r, l, u) {
    do
      Pu();
    while (Xa !== null);
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
    if (ds(n, m), n === Dn && (fn = Dn = null, Qn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Fu || (Fu = !0, Lh(dt, function() {
      return Pu(), null;
    })), m = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || m) {
      m = qa.transition, qa.transition = null;
      var T = Ct;
      Ct = 1;
      var k = wt;
      wt |= 4, yf.current = null, ag(n, l), wh(l, n), So(Od), iu = !!kd, Od = kd = null, n.current = l, ig(l), yi(), wt = k, Ct = T, qa.transition = m;
    } else
      n.current = l;
    if (Fu && (Fu = !1, Xa = n, Ef = d), m = n.pendingLanes, m === 0 && (Qa = null), us(l.stateNode), Gn(n, nn()), r !== null)
      for (u = n.onRecoverableError, l = 0; l < r.length; l++)
        d = r[l], u(d.value, { componentStack: d.stack, digest: d.digest });
    if (Sf)
      throw Sf = !1, n = tp, tp = null, n;
    return Ef & 1 && n.tag !== 0 && Pu(), m = n.pendingLanes, m & 1 ? n === Rf ? ec++ : (ec = 0, Rf = n) : ec = 0, xi(), null;
  }
  function Pu() {
    if (Xa !== null) {
      var n = vs(Ef), r = qa.transition, l = Ct;
      try {
        if (qa.transition = null, Ct = 16 > n ? 16 : n, Xa === null)
          var u = !1;
        else {
          if (n = Xa, Xa = null, Ef = 0, wt & 6)
            throw Error(c(331));
          var d = wt;
          for (wt |= 4, ke = n.current; ke !== null; ) {
            var m = ke, T = m.child;
            if (ke.flags & 16) {
              var k = m.deletions;
              if (k !== null) {
                for (var L = 0; L < k.length; L++) {
                  var Q = k[L];
                  for (ke = Q; ke !== null; ) {
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
                        var ae = le.sibling, Se = le.return;
                        if (Eh(le), le === Q) {
                          ke = null;
                          break;
                        }
                        if (ae !== null) {
                          ae.return = Se, ke = ae;
                          break;
                        }
                        ke = Se;
                      }
                  }
                }
                var Oe = m.alternate;
                if (Oe !== null) {
                  var Me = Oe.child;
                  if (Me !== null) {
                    Oe.child = null;
                    do {
                      var In = Me.sibling;
                      Me.sibling = null, Me = In;
                    } while (Me !== null);
                  }
                }
                ke = m;
              }
            }
            if (m.subtreeFlags & 2064 && T !== null)
              T.return = m, ke = T;
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
                  var j = m.sibling;
                  if (j !== null) {
                    j.return = m.return, ke = j;
                    break e;
                  }
                  ke = m.return;
                }
          }
          var M = n.current;
          for (ke = M; ke !== null; ) {
            T = ke;
            var P = T.child;
            if (T.subtreeFlags & 2064 && P !== null)
              P.return = T, ke = P;
            else
              e:
                for (T = M; ke !== null; ) {
                  if (k = ke, k.flags & 2048)
                    try {
                      switch (k.tag) {
                        case 0:
                        case 11:
                        case 15:
                          hf(9, k);
                      }
                    } catch (Ae) {
                      _n(k, k.return, Ae);
                    }
                  if (k === T) {
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
        Ct = l, qa.transition = r;
      }
    }
    return !1;
  }
  function Oh(n, r, l) {
    r = Bl(l, r), r = ph(n, r, 1), n = jl(n, r, 1), r = nr(), n !== null && (Cl(n, 1, r), Gn(n, r));
  }
  function _n(n, r, l) {
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
            n = Bl(l, n), n = vh(r, n, 1), r = jl(r, n, 1), n = nr(), r !== null && (Cl(r, 1, n), Gn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function cg(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = nr(), n.pingedLanes |= n.suspendedLanes & l, Dn === n && (Qn & l) === l && (Xn === 4 || Xn === 3 && (Qn & 130023424) === Qn && 500 > nn() - gf ? Ho(n, 0) : ep |= l), Gn(n, r);
  }
  function Dh(n, r) {
    r === 0 && (n.mode & 1 ? (r = tu, tu <<= 1, !(tu & 130023424) && (tu = 4194304)) : r = 1);
    var l = nr();
    n = rl(n, r), n !== null && (Cl(n, r, l), Gn(n, l));
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
  var _h;
  _h = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || rt.current)
        la = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return la = !1, il(n, r, l);
        la = !!(n.flags & 131072);
      }
    else
      la = !1, cn && r.flags & 1048576 && Al(r, Co, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Js(n, r), n = r.pendingProps;
        var d = Ta(r, Zn.current);
        Nn(r, l), d = Oo(null, r, u, n, d, l);
        var m = Hl();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Bn(u) ? (m = !0, To(r)) : m = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Fd(r), d.updater = Wc, r.stateNode = d, d._reactInternals = r, Pd(r, u, n, l), r = sf(null, r, u, !0, m, l)) : (r.tag = 0, cn && m && Hc(r), An(null, r, d, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Js(n, r), n = r.pendingProps, d = u._init, u = d(u._payload), r.type = u, d = r.tag = dg(u), n = ra(u, n), d) {
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
              r = Vl(null, r, u, ra(u.type, n), l);
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
          u = r.pendingProps, m = r.memoizedState, d = m.element, rh(n, r), Is(r, u, null, l);
          var T = r.memoizedState;
          if (u = T.element, m.isDehydrated)
            if (m = { element: u, isDehydrated: !1, cache: T.cache, pendingSuspenseBoundaries: T.pendingSuspenseBoundaries, transitions: T.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
              d = Bl(Error(c(423)), r), r = yh(n, r, u, l, d);
              break e;
            } else if (u !== d) {
              d = Bl(Error(c(424)), r), r = yh(n, r, u, l, d);
              break e;
            } else
              for (xa = wa(r.stateNode.containerInfo.firstChild), Ca = r, cn = !0, Ba = null, l = ch(r, null, u, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (hu(), u === d) {
              r = Un(n, r, l);
              break e;
            }
            An(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return qc(r), n === null && Bc(r), u = r.type, d = r.pendingProps, m = n !== null ? n.memoizedProps : null, T = d.children, wo(u, d) ? T = null : m !== null && wo(u, m) && (r.flags |= 32), zo(n, r), An(n, r, T, l), r.child;
      case 6:
        return n === null && Bc(r), null;
      case 13:
        return gh(n, r, l);
      case 4:
        return Bd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Eu(r, null, u, l) : An(n, r, u, l), r.child;
      case 11:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), bu(n, r, u, d, l);
      case 7:
        return An(n, r, r.pendingProps, l), r.child;
      case 8:
        return An(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return An(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, d = r.pendingProps, m = r.memoizedProps, T = d.value, Mt(mu, u._currentValue), u._currentValue = T, m !== null)
            if (si(m.value, T)) {
              if (m.children === d.children && !rt.current) {
                r = Un(n, r, l);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var k = m.dependencies;
                if (k !== null) {
                  T = m.child;
                  for (var L = k.firstContext; L !== null; ) {
                    if (L.context === u) {
                      if (m.tag === 1) {
                        L = rn(-1, l & -l), L.tag = 2;
                        var Q = m.updateQueue;
                        if (Q !== null) {
                          Q = Q.shared;
                          var le = Q.pending;
                          le === null ? L.next = L : (L.next = le.next, le.next = L), Q.pending = L;
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
                  T = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (T = m.return, T === null)
                    throw Error(c(341));
                  T.lanes |= l, k = T.alternate, k !== null && (k.lanes |= l), Ul(T, l, r), T = m.sibling;
                } else
                  T = m.child;
                if (T !== null)
                  T.return = m;
                else
                  for (T = m; T !== null; ) {
                    if (T === r) {
                      T = null;
                      break;
                    }
                    if (m = T.sibling, m !== null) {
                      m.return = T.return, T = m;
                      break;
                    }
                    T = T.return;
                  }
                m = T;
              }
          An(n, r, d.children, l), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, u = r.pendingProps.children, Nn(r, l), d = de(d), u = u(d), r.flags |= 1, An(n, r, u, l), r.child;
      case 14:
        return u = r.type, d = ra(u, r.pendingProps), d = ra(u.type, d), Vl(n, r, u, d, l);
      case 15:
        return uf(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : ra(u, d), Js(n, r), r.tag = 1, Bn(u) ? (n = !0, To(r)) : n = !1, Nn(r, l), lh(r, u, d), Pd(r, u, d, l), sf(null, r, u, !0, n, l);
      case 19:
        return Gd(n, r, l);
      case 22:
        return oa(n, r, l);
    }
    throw Error(c(156, r.tag));
  };
  function Lh(n, r) {
    return en(n, r);
  }
  function Nh(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ga(n, r, l, u) {
    return new Nh(n, r, l, u);
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
      if (n === lt)
        return 14;
    }
    return 2;
  }
  function ql(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ga(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function xf(n, r, l, u, d, m) {
    var T = 2;
    if (u = n, typeof n == "function")
      lp(n) && (T = 1);
    else if (typeof n == "string")
      T = 5;
    else
      e:
        switch (n) {
          case gt:
            return Po(l.children, d, m, r);
          case Ze:
            T = 8, d |= 8;
            break;
          case pn:
            return n = Ga(12, l, r, d | 2), n.elementType = pn, n.lanes = m, n;
          case Gt:
            return n = Ga(13, l, r, d), n.elementType = Gt, n.lanes = m, n;
          case $e:
            return n = Ga(19, l, r, d), n.elementType = $e, n.lanes = m, n;
          case He:
            return bf(l, d, m, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case vn:
                  T = 10;
                  break e;
                case qt:
                  T = 9;
                  break e;
                case Et:
                  T = 11;
                  break e;
                case lt:
                  T = 14;
                  break e;
                case tt:
                  T = 16, u = null;
                  break e;
              }
            throw Error(c(130, n == null ? n : typeof n, ""));
        }
    return r = Ga(T, l, r, d), r.elementType = n, r.type = u, r.lanes = m, r;
  }
  function Po(n, r, l, u) {
    return n = Ga(7, n, u, r), n.lanes = l, n;
  }
  function bf(n, r, l, u) {
    return n = Ga(22, n, u, r), n.elementType = He, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
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
  function op(n, r, l, u, d, m, T, k, L) {
    return n = new ac(n, r, l, k, L), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Ga(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fd(m), n;
  }
  function Mh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: xe, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function up(n) {
    if (!n)
      return Fa;
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
            if (Bn(r.type)) {
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
      if (Bn(l))
        return Nl(n, l, r);
    }
    return r;
  }
  function sp(n, r, l, u, d, m, T, k, L) {
    return n = op(l, u, !0, n, d, m, T, k, L), n.context = up(null), l = n.current, u = nr(), d = ol(l), m = rn(u, d), m.callback = r ?? null, jl(l, m, d), n.current.lanes = d, Cl(n, d, u), Gn(n, u), n;
  }
  function Of(n, r, l, u) {
    var d = r.current, m = nr(), T = ol(d);
    return l = up(l), r.context === null ? r.context = l : r.pendingContext = l, r = rn(m, T), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = jl(d, r, T), n !== null && (Rn(n, d, T, m), Yc(n, d, T)), T;
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
  function Df(n) {
    this._internalRoot = n;
  }
  lc.prototype.render = Df.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(c(409));
    Of(n, r, null, null);
  }, lc.prototype.unmount = Df.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ni(function() {
        Of(null, n, null, null);
      }), r[ci] = null;
    }
  };
  function lc(n) {
    this._internalRoot = n;
  }
  lc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Dt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < un.length && r !== 0 && r < un[l].priority; l++)
        ;
      un.splice(l, 0, n), l === 0 && oi(n);
    }
  };
  function Ql(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function _f(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ah() {
  }
  function vg(n, r, l, u, d) {
    if (d) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var Q = ic(T);
          m.call(Q);
        };
      }
      var T = sp(r, u, n, 0, null, !1, !1, "", Ah);
      return n._reactRootContainer = T, n[ci] = T.current, wi(n.nodeType === 8 ? n.parentNode : n), Ni(), T;
    }
    for (; d = n.lastChild; )
      n.removeChild(d);
    if (typeof u == "function") {
      var k = u;
      u = function() {
        var Q = ic(L);
        k.call(Q);
      };
    }
    var L = op(n, 0, !1, null, null, !1, !1, "", Ah);
    return n._reactRootContainer = L, n[ci] = L.current, wi(n.nodeType === 8 ? n.parentNode : n), Ni(function() {
      Of(r, L, l, u);
    }), L;
  }
  function Lf(n, r, l, u, d) {
    var m = l._reactRootContainer;
    if (m) {
      var T = m;
      if (typeof d == "function") {
        var k = d;
        d = function() {
          var L = ic(T);
          k.call(L);
        };
      }
      Of(r, T, n, d);
    } else
      T = vg(l, r, n, d, u);
    return ic(T);
  }
  nu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Yi(r.pendingLanes);
          l !== 0 && (ps(r, l | 1), Gn(r, nn()), !(wt & 6) && (ju = nn() + 500, xi()));
        }
        break;
      case 13:
        Ni(function() {
          var u = rl(n, 1);
          if (u !== null) {
            var d = nr();
            Rn(u, n, 1, d);
          }
        }), cp(n, 1);
    }
  }, xl = function(n) {
    if (n.tag === 13) {
      var r = rl(n, 134217728);
      if (r !== null) {
        var l = nr();
        Rn(r, n, 134217728, l);
      }
      cp(n, 134217728);
    }
  }, hs = function(n) {
    if (n.tag === 13) {
      var r = ol(n), l = rl(n, r);
      if (l !== null) {
        var u = nr();
        Rn(l, n, r, u);
      }
      cp(n, r);
    }
  }, Dt = function() {
    return Ct;
  }, ru = function(n, r) {
    var l = Ct;
    try {
      return Ct = n, r();
    } finally {
      Ct = l;
    }
  }, Bt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Fn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var d = jc(u);
              if (!d)
                throw Error(c(90));
              Wr(u), Fn(u, d);
            }
          }
        }
        break;
      case "textarea":
        Tr(n, l);
        break;
      case "select":
        r = l.value, r != null && qn(n, !!l.multiple, r, !1);
    }
  }, El = ap, so = Ni;
  var hg = { usingClientEntryPoint: !1, Events: [Ti, vu, jc, ri, Ma, ap] }, oc = { findFiberByHostInstance: tl, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Uh = { bundleType: oc.bundleType, version: oc.version, rendererPackageName: oc.rendererPackageName, rendererConfig: oc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ne.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Be(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: oc.findFiberByHostInstance || pg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nf.isDisabled && Nf.supportsFiber)
      try {
        wl = Nf.inject(Uh), Gr = Nf;
      } catch {
      }
  }
  return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hg, ni.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ql(r))
      throw Error(c(200));
    return Mh(n, r, null, l);
  }, ni.createRoot = function(n, r) {
    if (!Ql(n))
      throw Error(c(299));
    var l = !1, u = "", d = fp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = op(n, 1, !1, null, null, l, !1, u, d), n[ci] = r.current, wi(n.nodeType === 8 ? n.parentNode : n), new Df(r);
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
    if (!_f(r))
      throw Error(c(200));
    return Lf(null, n, r, !0, l);
  }, ni.hydrateRoot = function(n, r, l) {
    if (!Ql(n))
      throw Error(c(405));
    var u = l != null && l.hydratedSources || null, d = !1, m = "", T = fp;
    if (l != null && (l.unstable_strictMode === !0 && (d = !0), l.identifierPrefix !== void 0 && (m = l.identifierPrefix), l.onRecoverableError !== void 0 && (T = l.onRecoverableError)), r = sp(r, null, n, 1, l ?? null, d, !1, m, T), n[ci] = r.current, wi(n), u)
      for (n = 0; n < u.length; n++)
        l = u[n], d = l._getVersion, d = d(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, d] : r.mutableSourceEagerHydrationData.push(
          l,
          d
        );
    return new lc(r);
  }, ni.render = function(n, r, l) {
    if (!_f(r))
      throw Error(c(200));
    return Lf(null, n, r, !1, l);
  }, ni.unmountComponentAtNode = function(n) {
    if (!_f(n))
      throw Error(c(40));
    return n._reactRootContainer ? (Ni(function() {
      Lf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ci] = null;
      });
    }), !0) : !1;
  }, ni.unstable_batchedUpdates = ap, ni.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!_f(l))
      throw Error(c(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(c(38));
    return Lf(n, r, l, !1, u);
  }, ni.version = "18.2.0-next-9e3b772b8-20220608", ni;
}
var XT = {};
function GT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (XT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GT);
    } catch (h) {
      console.error(h);
    }
  }
}
XT.NODE_ENV === "production" ? (GT(), g1.exports = L_()) : g1.exports = __();
var N_ = g1.exports, M_ = {}, fv = N_;
if (M_.NODE_ENV === "production")
  hv.createRoot = fv.createRoot, hv.hydrateRoot = fv.hydrateRoot;
else {
  var hy = fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  hv.createRoot = function(h, f) {
    hy.usingClientEntryPoint = !0;
    try {
      return fv.createRoot(h, f);
    } finally {
      hy.usingClientEntryPoint = !1;
    }
  }, hv.hydrateRoot = function(h, f, c) {
    hy.usingClientEntryPoint = !0;
    try {
      return fv.hydrateRoot(h, f, c);
    } finally {
      hy.usingClientEntryPoint = !1;
    }
  };
}
function $T(h, f) {
  return function() {
    return h.apply(f, arguments);
  };
}
const { toString: z_ } = Object.prototype, { getPrototypeOf: k1 } = Object, Dy = /* @__PURE__ */ ((h) => (f) => {
  const c = z_.call(f);
  return h[c] || (h[c] = c.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), uo = (h) => (h = h.toLowerCase(), (f) => Dy(f) === h), _y = (h) => (f) => typeof f === h, { isArray: fd } = Array, gv = _y("undefined");
function A_(h) {
  return h !== null && !gv(h) && h.constructor !== null && !gv(h.constructor) && Hi(h.constructor.isBuffer) && h.constructor.isBuffer(h);
}
const JT = uo("ArrayBuffer");
function U_(h) {
  let f;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? f = ArrayBuffer.isView(h) : f = h && h.buffer && JT(h.buffer), f;
}
const I_ = _y("string"), Hi = _y("function"), KT = _y("number"), Ly = (h) => h !== null && typeof h == "object", j_ = (h) => h === !0 || h === !1, Sy = (h) => {
  if (Dy(h) !== "object")
    return !1;
  const f = k1(h);
  return (f === null || f === Object.prototype || Object.getPrototypeOf(f) === null) && !(Symbol.toStringTag in h) && !(Symbol.iterator in h);
}, F_ = uo("Date"), H_ = uo("File"), P_ = uo("Blob"), B_ = uo("FileList"), V_ = (h) => Ly(h) && Hi(h.pipe), Y_ = (h) => {
  let f;
  return h && (typeof FormData == "function" && h instanceof FormData || Hi(h.append) && ((f = Dy(h)) === "formdata" || // detect form-data instance
  f === "object" && Hi(h.toString) && h.toString() === "[object FormData]"));
}, W_ = uo("URLSearchParams"), q_ = (h) => h.trim ? h.trim() : h.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ev(h, f, { allOwnKeys: c = !1 } = {}) {
  if (h === null || typeof h > "u")
    return;
  let v, w;
  if (typeof h != "object" && (h = [h]), fd(h))
    for (v = 0, w = h.length; v < w; v++)
      f.call(null, h[v], v, h);
  else {
    const C = c ? Object.getOwnPropertyNames(h) : Object.keys(h), R = C.length;
    let g;
    for (v = 0; v < R; v++)
      g = C[v], f.call(null, h[g], g, h);
  }
}
function ZT(h, f) {
  f = f.toLowerCase();
  const c = Object.keys(h);
  let v = c.length, w;
  for (; v-- > 0; )
    if (w = c[v], f === w.toLowerCase())
      return w;
  return null;
}
const eC = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, tC = (h) => !gv(h) && h !== eC;
function S1() {
  const { caseless: h } = tC(this) && this || {}, f = {}, c = (v, w) => {
    const C = h && ZT(f, w) || w;
    Sy(f[C]) && Sy(v) ? f[C] = S1(f[C], v) : Sy(v) ? f[C] = S1({}, v) : fd(v) ? f[C] = v.slice() : f[C] = v;
  };
  for (let v = 0, w = arguments.length; v < w; v++)
    arguments[v] && Ev(arguments[v], c);
  return f;
}
const Q_ = (h, f, c, { allOwnKeys: v } = {}) => (Ev(f, (w, C) => {
  c && Hi(w) ? h[C] = $T(w, c) : h[C] = w;
}, { allOwnKeys: v }), h), X_ = (h) => (h.charCodeAt(0) === 65279 && (h = h.slice(1)), h), G_ = (h, f, c, v) => {
  h.prototype = Object.create(f.prototype, v), h.prototype.constructor = h, Object.defineProperty(h, "super", {
    value: f.prototype
  }), c && Object.assign(h.prototype, c);
}, $_ = (h, f, c, v) => {
  let w, C, R;
  const g = {};
  if (f = f || {}, h == null)
    return f;
  do {
    for (w = Object.getOwnPropertyNames(h), C = w.length; C-- > 0; )
      R = w[C], (!v || v(R, h, f)) && !g[R] && (f[R] = h[R], g[R] = !0);
    h = c !== !1 && k1(h);
  } while (h && (!c || c(h, f)) && h !== Object.prototype);
  return f;
}, J_ = (h, f, c) => {
  h = String(h), (c === void 0 || c > h.length) && (c = h.length), c -= f.length;
  const v = h.indexOf(f, c);
  return v !== -1 && v === c;
}, K_ = (h) => {
  if (!h)
    return null;
  if (fd(h))
    return h;
  let f = h.length;
  if (!KT(f))
    return null;
  const c = new Array(f);
  for (; f-- > 0; )
    c[f] = h[f];
  return c;
}, Z_ = /* @__PURE__ */ ((h) => (f) => h && f instanceof h)(typeof Uint8Array < "u" && k1(Uint8Array)), eL = (h, f) => {
  const v = (h && h[Symbol.iterator]).call(h);
  let w;
  for (; (w = v.next()) && !w.done; ) {
    const C = w.value;
    f.call(h, C[0], C[1]);
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
), DT = (({ hasOwnProperty: h }) => (f, c) => h.call(f, c))(Object.prototype), aL = uo("RegExp"), nC = (h, f) => {
  const c = Object.getOwnPropertyDescriptors(h), v = {};
  Ev(c, (w, C) => {
    let R;
    (R = f(w, C, h)) !== !1 && (v[C] = R || w);
  }), Object.defineProperties(h, v);
}, iL = (h) => {
  nC(h, (f, c) => {
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
    w.forEach((C) => {
      c[C] = !0;
    });
  };
  return fd(h) ? v(h) : v(String(h).split(f)), c;
}, oL = () => {
}, uL = (h, f) => (h = +h, Number.isFinite(h) ? h : f), c1 = "abcdefghijklmnopqrstuvwxyz", _T = "0123456789", rC = {
  DIGIT: _T,
  ALPHA: c1,
  ALPHA_DIGIT: c1 + c1.toUpperCase() + _T
}, sL = (h = 16, f = rC.ALPHA_DIGIT) => {
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
        const C = fd(v) ? [] : {};
        return Ev(v, (R, g) => {
          const U = c(R, w + 1);
          !gv(U) && (C[g] = U);
        }), f[w] = void 0, C;
      }
    }
    return v;
  };
  return c(h, 0);
}, dL = uo("AsyncFunction"), pL = (h) => h && (Ly(h) || Hi(h)) && Hi(h.then) && Hi(h.catch), re = {
  isArray: fd,
  isArrayBuffer: JT,
  isBuffer: A_,
  isFormData: Y_,
  isArrayBufferView: U_,
  isString: I_,
  isNumber: KT,
  isBoolean: j_,
  isObject: Ly,
  isPlainObject: Sy,
  isUndefined: gv,
  isDate: F_,
  isFile: H_,
  isBlob: P_,
  isRegExp: aL,
  isFunction: Hi,
  isStream: V_,
  isURLSearchParams: W_,
  isTypedArray: Z_,
  isFileList: B_,
  forEach: Ev,
  merge: S1,
  extend: Q_,
  trim: q_,
  stripBOM: X_,
  inherits: G_,
  toFlatObject: $_,
  kindOf: Dy,
  kindOfTest: uo,
  endsWith: J_,
  toArray: K_,
  forEachEntry: eL,
  matchAll: tL,
  isHTMLForm: nL,
  hasOwnProperty: DT,
  hasOwnProp: DT,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: nC,
  freezeMethods: iL,
  toObjectSet: lL,
  toCamelCase: rL,
  noop: oL,
  toFiniteNumber: uL,
  findKey: ZT,
  global: eC,
  isContextDefined: tC,
  ALPHABET: rC,
  generateString: sL,
  isSpecCompliantForm: cL,
  toJSONObject: fL,
  isAsyncFn: dL,
  isThenable: pL
};
function It(h, f, c, v, w) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = h, this.name = "AxiosError", f && (this.code = f), c && (this.config = c), v && (this.request = v), w && (this.response = w);
}
re.inherits(It, Error, {
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
const aC = It.prototype, iC = {};
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
  iC[h] = { value: h };
});
Object.defineProperties(It, iC);
Object.defineProperty(aC, "isAxiosError", { value: !0 });
It.from = (h, f, c, v, w, C) => {
  const R = Object.create(aC);
  return re.toFlatObject(h, R, function(U) {
    return U !== Error.prototype;
  }, (g) => g !== "isAxiosError"), It.call(R, h.message, f, c, v, w), R.cause = h, R.name = h.name, C && Object.assign(R, C), R;
};
const vL = null;
function E1(h) {
  return re.isPlainObject(h) || re.isArray(h);
}
function lC(h) {
  return re.endsWith(h, "[]") ? h.slice(0, -2) : h;
}
function LT(h, f, c) {
  return h ? h.concat(f).map(function(w, C) {
    return w = lC(w), !c && C ? "[" + w + "]" : w;
  }).join(c ? "." : "") : f;
}
function hL(h) {
  return re.isArray(h) && !h.some(E1);
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
  }, !1, function($, Ce) {
    return !re.isUndefined(Ce[$]);
  });
  const v = c.metaTokens, w = c.visitor || A, C = c.dots, R = c.indexes, U = (c.Blob || typeof Blob < "u" && Blob) && re.isSpecCompliantForm(f);
  if (!re.isFunction(w))
    throw new TypeError("visitor must be a function");
  function q(X) {
    if (X === null)
      return "";
    if (re.isDate(X))
      return X.toISOString();
    if (!U && re.isBlob(X))
      throw new It("Blob is not supported. Use a Buffer instead.");
    return re.isArrayBuffer(X) || re.isTypedArray(X) ? U && typeof Blob == "function" ? new Blob([X]) : Buffer.from(X) : X;
  }
  function A(X, $, Ce) {
    let st = X;
    if (X && !Ce && typeof X == "object") {
      if (re.endsWith($, "{}"))
        $ = v ? $ : $.slice(0, -2), X = JSON.stringify(X);
      else if (re.isArray(X) && hL(X) || (re.isFileList(X) || re.endsWith($, "[]")) && (st = re.toArray(X)))
        return $ = lC($), st.forEach(function(Fe, Ne) {
          !(re.isUndefined(Fe) || Fe === null) && f.append(
            // eslint-disable-next-line no-nested-ternary
            R === !0 ? LT([$], Ne, C) : R === null ? $ : $ + "[]",
            q(Fe)
          );
        }), !1;
    }
    return E1(X) ? !0 : (f.append(LT(Ce, $, C), q(X)), !1);
  }
  const I = [], W = Object.assign(mL, {
    defaultVisitor: A,
    convertValue: q,
    isVisitable: E1
  });
  function oe(X, $) {
    if (!re.isUndefined(X)) {
      if (I.indexOf(X) !== -1)
        throw Error("Circular reference detected in " + $.join("."));
      I.push(X), re.forEach(X, function(st, vt) {
        (!(re.isUndefined(st) || st === null) && w.call(
          f,
          st,
          re.isString(vt) ? vt.trim() : vt,
          $,
          W
        )) === !0 && oe(st, $ ? $.concat(vt) : [vt]);
      }), I.pop();
    }
  }
  if (!re.isObject(h))
    throw new TypeError("data must be an object");
  return oe(h), f;
}
function NT(h) {
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
function O1(h, f) {
  this._pairs = [], h && Ny(h, this, f);
}
const oC = O1.prototype;
oC.append = function(f, c) {
  this._pairs.push([f, c]);
};
oC.toString = function(f) {
  const c = f ? function(v) {
    return f.call(this, v, NT);
  } : NT;
  return this._pairs.map(function(w) {
    return c(w[0]) + "=" + c(w[1]);
  }, "").join("&");
};
function yL(h) {
  return encodeURIComponent(h).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function uC(h, f, c) {
  if (!f)
    return h;
  const v = c && c.encode || yL, w = c && c.serialize;
  let C;
  if (w ? C = w(f, c) : C = re.isURLSearchParams(f) ? f.toString() : new O1(f, c).toString(v), C) {
    const R = h.indexOf("#");
    R !== -1 && (h = h.slice(0, R)), h += (h.indexOf("?") === -1 ? "?" : "&") + C;
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
const MT = gL, sC = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, SL = typeof URLSearchParams < "u" ? URLSearchParams : O1, EL = typeof FormData < "u" ? FormData : null, RL = typeof Blob < "u" ? Blob : null, wL = {
  isBrowser: !0,
  classes: {
    URLSearchParams: SL,
    FormData: EL,
    Blob: RL
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, cC = typeof window < "u" && typeof document < "u", TL = ((h) => cC && ["ReactNative", "NativeScript", "NS"].indexOf(h) < 0)(typeof navigator < "u" && navigator.product), CL = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: cC,
  hasStandardBrowserEnv: TL,
  hasStandardBrowserWebWorkerEnv: CL
}, Symbol.toStringTag, { value: "Module" })), ao = {
  ...xL,
  ...wL
};
function bL(h, f) {
  return Ny(h, new ao.classes.URLSearchParams(), Object.assign({
    visitor: function(c, v, w, C) {
      return ao.isNode && re.isBuffer(c) ? (this.append(v, c.toString("base64")), !1) : C.defaultVisitor.apply(this, arguments);
    }
  }, f));
}
function kL(h) {
  return re.matchAll(/\w+|\[(\w*)]/g, h).map((f) => f[0] === "[]" ? "" : f[1] || f[0]);
}
function OL(h) {
  const f = {}, c = Object.keys(h);
  let v;
  const w = c.length;
  let C;
  for (v = 0; v < w; v++)
    C = c[v], f[C] = h[C];
  return f;
}
function fC(h) {
  function f(c, v, w, C) {
    let R = c[C++];
    const g = Number.isFinite(+R), U = C >= c.length;
    return R = !R && re.isArray(w) ? w.length : R, U ? (re.hasOwnProp(w, R) ? w[R] = [w[R], v] : w[R] = v, !g) : ((!w[R] || !re.isObject(w[R])) && (w[R] = []), f(c, v, w[R], C) && re.isArray(w[R]) && (w[R] = OL(w[R])), !g);
  }
  if (re.isFormData(h) && re.isFunction(h.entries)) {
    const c = {};
    return re.forEachEntry(h, (v, w) => {
      f(kL(v), w, c, 0);
    }), c;
  }
  return null;
}
function DL(h, f, c) {
  if (re.isString(h))
    try {
      return (f || JSON.parse)(h), re.trim(h);
    } catch (v) {
      if (v.name !== "SyntaxError")
        throw v;
    }
  return (c || JSON.stringify)(h);
}
const D1 = {
  transitional: sC,
  adapter: ["xhr", "http"],
  transformRequest: [function(f, c) {
    const v = c.getContentType() || "", w = v.indexOf("application/json") > -1, C = re.isObject(f);
    if (C && re.isHTMLForm(f) && (f = new FormData(f)), re.isFormData(f))
      return w && w ? JSON.stringify(fC(f)) : f;
    if (re.isArrayBuffer(f) || re.isBuffer(f) || re.isStream(f) || re.isFile(f) || re.isBlob(f))
      return f;
    if (re.isArrayBufferView(f))
      return f.buffer;
    if (re.isURLSearchParams(f))
      return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), f.toString();
    let g;
    if (C) {
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
    return C || w ? (c.setContentType("application/json", !1), DL(f)) : f;
  }],
  transformResponse: [function(f) {
    const c = this.transitional || D1.transitional, v = c && c.forcedJSONParsing, w = this.responseType === "json";
    if (f && re.isString(f) && (v && !this.responseType || w)) {
      const R = !(c && c.silentJSONParsing) && w;
      try {
        return JSON.parse(f);
      } catch (g) {
        if (R)
          throw g.name === "SyntaxError" ? It.from(g, It.ERR_BAD_RESPONSE, this, null, this.response) : g;
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
  D1.headers[h] = {};
});
const _1 = D1, _L = re.toObjectSet([
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
`).forEach(function(R) {
    w = R.indexOf(":"), c = R.substring(0, w).trim().toLowerCase(), v = R.substring(w + 1).trim(), !(!c || f[c] && _L[c]) && (c === "set-cookie" ? f[c] ? f[c].push(v) : f[c] = [v] : f[c] = f[c] ? f[c] + ", " + v : v);
  }), f;
}, zT = Symbol("internals");
function dv(h) {
  return h && String(h).trim().toLowerCase();
}
function Ey(h) {
  return h === !1 || h == null ? h : re.isArray(h) ? h.map(Ey) : String(h);
}
function NL(h) {
  const f = /* @__PURE__ */ Object.create(null), c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let v;
  for (; v = c.exec(h); )
    f[v[1]] = v[2];
  return f;
}
const ML = (h) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(h.trim());
function f1(h, f, c, v, w) {
  if (re.isFunction(v))
    return v.call(this, f, c);
  if (w && (f = c), !!re.isString(f)) {
    if (re.isString(v))
      return f.indexOf(v) !== -1;
    if (re.isRegExp(v))
      return v.test(f);
  }
}
function zL(h) {
  return h.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (f, c, v) => c.toUpperCase() + v);
}
function AL(h, f) {
  const c = re.toCamelCase(" " + f);
  ["get", "set", "has"].forEach((v) => {
    Object.defineProperty(h, v + c, {
      value: function(w, C, R) {
        return this[v].call(this, f, w, C, R);
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
    function C(g, U, q) {
      const A = dv(U);
      if (!A)
        throw new Error("header name must be a non-empty string");
      const I = re.findKey(w, A);
      (!I || w[I] === void 0 || q === !0 || q === void 0 && w[I] !== !1) && (w[I || U] = Ey(g));
    }
    const R = (g, U) => re.forEach(g, (q, A) => C(q, A, U));
    return re.isPlainObject(f) || f instanceof this.constructor ? R(f, c) : re.isString(f) && (f = f.trim()) && !ML(f) ? R(LL(f), c) : f != null && C(c, f, v), this;
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
      return !!(v && this[v] !== void 0 && (!c || f1(this, this[v], v, c)));
    }
    return !1;
  }
  delete(f, c) {
    const v = this;
    let w = !1;
    function C(R) {
      if (R = dv(R), R) {
        const g = re.findKey(v, R);
        g && (!c || f1(v, v[g], g, c)) && (delete v[g], w = !0);
      }
    }
    return re.isArray(f) ? f.forEach(C) : C(f), w;
  }
  clear(f) {
    const c = Object.keys(this);
    let v = c.length, w = !1;
    for (; v--; ) {
      const C = c[v];
      (!f || f1(this, this[C], C, f, !0)) && (delete this[C], w = !0);
    }
    return w;
  }
  normalize(f) {
    const c = this, v = {};
    return re.forEach(this, (w, C) => {
      const R = re.findKey(v, C);
      if (R) {
        c[R] = Ey(w), delete c[C];
        return;
      }
      const g = f ? zL(C) : String(C).trim();
      g !== C && delete c[C], c[g] = Ey(w), v[g] = !0;
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
    const v = (this[zT] = this[zT] = {
      accessors: {}
    }).accessors, w = this.prototype;
    function C(R) {
      const g = dv(R);
      v[g] || (AL(w, R), v[g] = !0);
    }
    return re.isArray(f) ? f.forEach(C) : C(f), this;
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
function d1(h, f) {
  const c = this || _1, v = f || c, w = eu.from(v.headers);
  let C = v.data;
  return re.forEach(h, function(g) {
    C = g.call(c, C, w.normalize(), f ? f.status : void 0);
  }), w.normalize(), C;
}
function dC(h) {
  return !!(h && h.__CANCEL__);
}
function Rv(h, f, c) {
  It.call(this, h ?? "canceled", It.ERR_CANCELED, f, c), this.name = "CanceledError";
}
re.inherits(Rv, It, {
  __CANCEL__: !0
});
function UL(h, f, c) {
  const v = c.config.validateStatus;
  !c.status || !v || v(c.status) ? h(c) : f(new It(
    "Request failed with status code " + c.status,
    [It.ERR_BAD_REQUEST, It.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4],
    c.config,
    c.request,
    c
  ));
}
const IL = ao.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(h, f, c, v, w, C) {
      const R = [h + "=" + encodeURIComponent(f)];
      re.isNumber(c) && R.push("expires=" + new Date(c).toGMTString()), re.isString(v) && R.push("path=" + v), re.isString(w) && R.push("domain=" + w), C === !0 && R.push("secure"), document.cookie = R.join("; ");
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
function jL(h) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(h);
}
function FL(h, f) {
  return f ? h.replace(/\/+$/, "") + "/" + f.replace(/^\/+/, "") : h;
}
function pC(h, f) {
  return h && !jL(f) ? FL(h, f) : f;
}
const HL = ao.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const f = /(msie|trident)/i.test(navigator.userAgent), c = document.createElement("a");
    let v;
    function w(C) {
      let R = C;
      return f && (c.setAttribute("href", R), R = c.href), c.setAttribute("href", R), {
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
    return v = w(window.location.href), function(R) {
      const g = re.isString(R) ? w(R) : R;
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
function PL(h) {
  const f = /^([-+\w]{1,25})(:?\/\/|:)/.exec(h);
  return f && f[1] || "";
}
function BL(h, f) {
  h = h || 10;
  const c = new Array(h), v = new Array(h);
  let w = 0, C = 0, R;
  return f = f !== void 0 ? f : 1e3, function(U) {
    const q = Date.now(), A = v[C];
    R || (R = q), c[w] = U, v[w] = q;
    let I = C, W = 0;
    for (; I !== w; )
      W += c[I++], I = I % h;
    if (w = (w + 1) % h, w === C && (C = (C + 1) % h), q - R < f)
      return;
    const oe = A && q - A;
    return oe ? Math.round(W * 1e3 / oe) : void 0;
  };
}
function AT(h, f) {
  let c = 0;
  const v = BL(50, 250);
  return (w) => {
    const C = w.loaded, R = w.lengthComputable ? w.total : void 0, g = C - c, U = v(g), q = C <= R;
    c = C;
    const A = {
      loaded: C,
      total: R,
      progress: R ? C / R : void 0,
      bytes: g,
      rate: U || void 0,
      estimated: U && R && q ? (R - C) / U : void 0,
      event: w
    };
    A[f ? "download" : "upload"] = !0, h(A);
  };
}
const VL = typeof XMLHttpRequest < "u", YL = VL && function(h) {
  return new Promise(function(c, v) {
    let w = h.data;
    const C = eu.from(h.headers).normalize();
    let { responseType: R, withXSRFToken: g } = h, U;
    function q() {
      h.cancelToken && h.cancelToken.unsubscribe(U), h.signal && h.signal.removeEventListener("abort", U);
    }
    let A;
    if (re.isFormData(w)) {
      if (ao.hasStandardBrowserEnv || ao.hasStandardBrowserWebWorkerEnv)
        C.setContentType(!1);
      else if ((A = C.getContentType()) !== !1) {
        const [$, ...Ce] = A ? A.split(";").map((st) => st.trim()).filter(Boolean) : [];
        C.setContentType([$ || "multipart/form-data", ...Ce].join("; "));
      }
    }
    let I = new XMLHttpRequest();
    if (h.auth) {
      const $ = h.auth.username || "", Ce = h.auth.password ? unescape(encodeURIComponent(h.auth.password)) : "";
      C.set("Authorization", "Basic " + btoa($ + ":" + Ce));
    }
    const W = pC(h.baseURL, h.url);
    I.open(h.method.toUpperCase(), uC(W, h.params, h.paramsSerializer), !0), I.timeout = h.timeout;
    function oe() {
      if (!I)
        return;
      const $ = eu.from(
        "getAllResponseHeaders" in I && I.getAllResponseHeaders()
      ), st = {
        data: !R || R === "text" || R === "json" ? I.responseText : I.response,
        status: I.status,
        statusText: I.statusText,
        headers: $,
        config: h,
        request: I
      };
      UL(function(Fe) {
        c(Fe), q();
      }, function(Fe) {
        v(Fe), q();
      }, st), I = null;
    }
    if ("onloadend" in I ? I.onloadend = oe : I.onreadystatechange = function() {
      !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout(oe);
    }, I.onabort = function() {
      I && (v(new It("Request aborted", It.ECONNABORTED, h, I)), I = null);
    }, I.onerror = function() {
      v(new It("Network Error", It.ERR_NETWORK, h, I)), I = null;
    }, I.ontimeout = function() {
      let Ce = h.timeout ? "timeout of " + h.timeout + "ms exceeded" : "timeout exceeded";
      const st = h.transitional || sC;
      h.timeoutErrorMessage && (Ce = h.timeoutErrorMessage), v(new It(
        Ce,
        st.clarifyTimeoutError ? It.ETIMEDOUT : It.ECONNABORTED,
        h,
        I
      )), I = null;
    }, ao.hasStandardBrowserEnv && (g && re.isFunction(g) && (g = g(h)), g || g !== !1 && HL(W))) {
      const $ = h.xsrfHeaderName && h.xsrfCookieName && IL.read(h.xsrfCookieName);
      $ && C.set(h.xsrfHeaderName, $);
    }
    w === void 0 && C.setContentType(null), "setRequestHeader" in I && re.forEach(C.toJSON(), function(Ce, st) {
      I.setRequestHeader(st, Ce);
    }), re.isUndefined(h.withCredentials) || (I.withCredentials = !!h.withCredentials), R && R !== "json" && (I.responseType = h.responseType), typeof h.onDownloadProgress == "function" && I.addEventListener("progress", AT(h.onDownloadProgress, !0)), typeof h.onUploadProgress == "function" && I.upload && I.upload.addEventListener("progress", AT(h.onUploadProgress)), (h.cancelToken || h.signal) && (U = ($) => {
      I && (v(!$ || $.type ? new Rv(null, h, I) : $), I.abort(), I = null);
    }, h.cancelToken && h.cancelToken.subscribe(U), h.signal && (h.signal.aborted ? U() : h.signal.addEventListener("abort", U)));
    const X = PL(W);
    if (X && ao.protocols.indexOf(X) === -1) {
      v(new It("Unsupported protocol " + X + ":", It.ERR_BAD_REQUEST, h));
      return;
    }
    I.send(w || null);
  });
}, R1 = {
  http: vL,
  xhr: YL
};
re.forEach(R1, (h, f) => {
  if (h) {
    try {
      Object.defineProperty(h, "name", { value: f });
    } catch {
    }
    Object.defineProperty(h, "adapterName", { value: f });
  }
});
const UT = (h) => `- ${h}`, WL = (h) => re.isFunction(h) || h === null || h === !1, vC = {
  getAdapter: (h) => {
    h = re.isArray(h) ? h : [h];
    const { length: f } = h;
    let c, v;
    const w = {};
    for (let C = 0; C < f; C++) {
      c = h[C];
      let R;
      if (v = c, !WL(c) && (v = R1[(R = String(c)).toLowerCase()], v === void 0))
        throw new It(`Unknown adapter '${R}'`);
      if (v)
        break;
      w[R || "#" + C] = v;
    }
    if (!v) {
      const C = Object.entries(w).map(
        ([g, U]) => `adapter ${g} ` + (U === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let R = f ? C.length > 1 ? `since :
` + C.map(UT).join(`
`) : " " + UT(C[0]) : "as no adapter specified";
      throw new It(
        "There is no suitable adapter to dispatch the request " + R,
        "ERR_NOT_SUPPORT"
      );
    }
    return v;
  },
  adapters: R1
};
function p1(h) {
  if (h.cancelToken && h.cancelToken.throwIfRequested(), h.signal && h.signal.aborted)
    throw new Rv(null, h);
}
function IT(h) {
  return p1(h), h.headers = eu.from(h.headers), h.data = d1.call(
    h,
    h.transformRequest
  ), ["post", "put", "patch"].indexOf(h.method) !== -1 && h.headers.setContentType("application/x-www-form-urlencoded", !1), vC.getAdapter(h.adapter || _1.adapter)(h).then(function(v) {
    return p1(h), v.data = d1.call(
      h,
      h.transformResponse,
      v
    ), v.headers = eu.from(v.headers), v;
  }, function(v) {
    return dC(v) || (p1(h), v && v.response && (v.response.data = d1.call(
      h,
      h.transformResponse,
      v.response
    ), v.response.headers = eu.from(v.response.headers))), Promise.reject(v);
  });
}
const jT = (h) => h instanceof eu ? h.toJSON() : h;
function sd(h, f) {
  f = f || {};
  const c = {};
  function v(q, A, I) {
    return re.isPlainObject(q) && re.isPlainObject(A) ? re.merge.call({ caseless: I }, q, A) : re.isPlainObject(A) ? re.merge({}, A) : re.isArray(A) ? A.slice() : A;
  }
  function w(q, A, I) {
    if (re.isUndefined(A)) {
      if (!re.isUndefined(q))
        return v(void 0, q, I);
    } else
      return v(q, A, I);
  }
  function C(q, A) {
    if (!re.isUndefined(A))
      return v(void 0, A);
  }
  function R(q, A) {
    if (re.isUndefined(A)) {
      if (!re.isUndefined(q))
        return v(void 0, q);
    } else
      return v(void 0, A);
  }
  function g(q, A, I) {
    if (I in f)
      return v(q, A);
    if (I in h)
      return v(void 0, q);
  }
  const U = {
    url: C,
    method: C,
    data: C,
    baseURL: R,
    transformRequest: R,
    transformResponse: R,
    paramsSerializer: R,
    timeout: R,
    timeoutMessage: R,
    withCredentials: R,
    withXSRFToken: R,
    adapter: R,
    responseType: R,
    xsrfCookieName: R,
    xsrfHeaderName: R,
    onUploadProgress: R,
    onDownloadProgress: R,
    decompress: R,
    maxContentLength: R,
    maxBodyLength: R,
    beforeRedirect: R,
    transport: R,
    httpAgent: R,
    httpsAgent: R,
    cancelToken: R,
    socketPath: R,
    responseEncoding: R,
    validateStatus: g,
    headers: (q, A) => w(jT(q), jT(A), !0)
  };
  return re.forEach(Object.keys(Object.assign({}, h, f)), function(A) {
    const I = U[A] || w, W = I(h[A], f[A], A);
    re.isUndefined(W) && I !== g || (c[A] = W);
  }), c;
}
const hC = "1.6.2", L1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((h, f) => {
  L1[h] = function(v) {
    return typeof v === h || "a" + (f < 1 ? "n " : " ") + h;
  };
});
const FT = {};
L1.transitional = function(f, c, v) {
  function w(C, R) {
    return "[Axios v" + hC + "] Transitional option '" + C + "'" + R + (v ? ". " + v : "");
  }
  return (C, R, g) => {
    if (f === !1)
      throw new It(
        w(R, " has been removed" + (c ? " in " + c : "")),
        It.ERR_DEPRECATED
      );
    return c && !FT[R] && (FT[R] = !0, console.warn(
      w(
        R,
        " has been deprecated since v" + c + " and will be removed in the near future"
      )
    )), f ? f(C, R, g) : !0;
  };
};
function qL(h, f, c) {
  if (typeof h != "object")
    throw new It("options must be an object", It.ERR_BAD_OPTION_VALUE);
  const v = Object.keys(h);
  let w = v.length;
  for (; w-- > 0; ) {
    const C = v[w], R = f[C];
    if (R) {
      const g = h[C], U = g === void 0 || R(g, C, h);
      if (U !== !0)
        throw new It("option " + C + " must be " + U, It.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0)
      throw new It("Unknown option " + C, It.ERR_BAD_OPTION);
  }
}
const w1 = {
  assertOptions: qL,
  validators: L1
}, ls = w1.validators;
class Ty {
  constructor(f) {
    this.defaults = f, this.interceptors = {
      request: new MT(),
      response: new MT()
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
    const { transitional: v, paramsSerializer: w, headers: C } = c;
    v !== void 0 && w1.assertOptions(v, {
      silentJSONParsing: ls.transitional(ls.boolean),
      forcedJSONParsing: ls.transitional(ls.boolean),
      clarifyTimeoutError: ls.transitional(ls.boolean)
    }, !1), w != null && (re.isFunction(w) ? c.paramsSerializer = {
      serialize: w
    } : w1.assertOptions(w, {
      encode: ls.function,
      serialize: ls.function
    }, !0)), c.method = (c.method || this.defaults.method || "get").toLowerCase();
    let R = C && re.merge(
      C.common,
      C[c.method]
    );
    C && re.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (X) => {
        delete C[X];
      }
    ), c.headers = eu.concat(R, C);
    const g = [];
    let U = !0;
    this.interceptors.request.forEach(function($) {
      typeof $.runWhen == "function" && $.runWhen(c) === !1 || (U = U && $.synchronous, g.unshift($.fulfilled, $.rejected));
    });
    const q = [];
    this.interceptors.response.forEach(function($) {
      q.push($.fulfilled, $.rejected);
    });
    let A, I = 0, W;
    if (!U) {
      const X = [IT.bind(this), void 0];
      for (X.unshift.apply(X, g), X.push.apply(X, q), W = X.length, A = Promise.resolve(c); I < W; )
        A = A.then(X[I++], X[I++]);
      return A;
    }
    W = g.length;
    let oe = c;
    for (I = 0; I < W; ) {
      const X = g[I++], $ = g[I++];
      try {
        oe = X(oe);
      } catch (Ce) {
        $.call(this, Ce);
        break;
      }
    }
    try {
      A = IT.call(this, oe);
    } catch (X) {
      return Promise.reject(X);
    }
    for (I = 0, W = q.length; I < W; )
      A = A.then(q[I++], q[I++]);
    return A;
  }
  getUri(f) {
    f = sd(this.defaults, f);
    const c = pC(f.baseURL, f.url);
    return uC(c, f.params, f.paramsSerializer);
  }
}
re.forEach(["delete", "get", "head", "options"], function(f) {
  Ty.prototype[f] = function(c, v) {
    return this.request(sd(v || {}, {
      method: f,
      url: c,
      data: (v || {}).data
    }));
  };
});
re.forEach(["post", "put", "patch"], function(f) {
  function c(v) {
    return function(C, R, g) {
      return this.request(sd(g || {}, {
        method: f,
        headers: v ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: C,
        data: R
      }));
    };
  }
  Ty.prototype[f] = c(), Ty.prototype[f + "Form"] = c(!0);
});
const Ry = Ty;
class N1 {
  constructor(f) {
    if (typeof f != "function")
      throw new TypeError("executor must be a function.");
    let c;
    this.promise = new Promise(function(C) {
      c = C;
    });
    const v = this;
    this.promise.then((w) => {
      if (!v._listeners)
        return;
      let C = v._listeners.length;
      for (; C-- > 0; )
        v._listeners[C](w);
      v._listeners = null;
    }), this.promise.then = (w) => {
      let C;
      const R = new Promise((g) => {
        v.subscribe(g), C = g;
      }).then(w);
      return R.cancel = function() {
        v.unsubscribe(C);
      }, R;
    }, f(function(C, R, g) {
      v.reason || (v.reason = new Rv(C, R, g), c(v.reason));
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
      token: new N1(function(w) {
        f = w;
      }),
      cancel: f
    };
  }
}
const QL = N1;
function XL(h) {
  return function(c) {
    return h.apply(null, c);
  };
}
function GL(h) {
  return re.isObject(h) && h.isAxiosError === !0;
}
const T1 = {
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
Object.entries(T1).forEach(([h, f]) => {
  T1[f] = h;
});
const $L = T1;
function mC(h) {
  const f = new Ry(h), c = $T(Ry.prototype.request, f);
  return re.extend(c, Ry.prototype, f, { allOwnKeys: !0 }), re.extend(c, f, null, { allOwnKeys: !0 }), c.create = function(w) {
    return mC(sd(h, w));
  }, c;
}
const ar = mC(_1);
ar.Axios = Ry;
ar.CanceledError = Rv;
ar.CancelToken = QL;
ar.isCancel = dC;
ar.VERSION = hC;
ar.toFormData = Ny;
ar.AxiosError = It;
ar.Cancel = ar.CanceledError;
ar.all = function(f) {
  return Promise.all(f);
};
ar.spread = XL;
ar.isAxiosError = GL;
ar.mergeConfig = sd;
ar.AxiosHeaders = eu;
ar.formToJSON = (h) => fC(re.isHTMLForm(h) ? new FormData(h) : h);
ar.getAdapter = vC.getAdapter;
ar.HttpStatusCode = $L;
ar.default = ar;
const JL = ar;
var yC = {}, cd = {};
Object.defineProperty(cd, "__esModule", { value: !0 });
cd.cssValue = cd.parseLengthAndUnit = void 0;
var KL = {
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
function gC(h) {
  if (typeof h == "number")
    return {
      value: h,
      unit: "px"
    };
  var f, c = (h.match(/^[0-9.]*/) || "").toString();
  c.includes(".") ? f = parseFloat(c) : f = parseInt(c, 10);
  var v = (h.match(/[^0-9]*$/) || "").toString();
  return KL[v] ? {
    value: f,
    unit: v
  } : (console.warn("React Spinners: ".concat(h, " is not a valid css value. Defaulting to ").concat(f, "px.")), {
    value: f,
    unit: "px"
  });
}
cd.parseLengthAndUnit = gC;
function ZL(h) {
  var f = gC(h);
  return "".concat(f.value).concat(f.unit);
}
cd.cssValue = ZL;
var zy = {};
Object.defineProperty(zy, "__esModule", { value: !0 });
zy.createAnimation = void 0;
var eN = function(h, f, c) {
  var v = "react-spinners-".concat(h, "-").concat(c);
  if (typeof window > "u" || !window.document)
    return v;
  var w = document.createElement("style");
  document.head.appendChild(w);
  var C = w.sheet, R = `
    @keyframes `.concat(v, ` {
      `).concat(f, `
    }
  `);
  return C && C.insertRule(R, 0), v;
};
zy.createAnimation = eN;
var Cy = oo && oo.__assign || function() {
  return Cy = Object.assign || function(h) {
    for (var f, c = 1, v = arguments.length; c < v; c++) {
      f = arguments[c];
      for (var w in f)
        Object.prototype.hasOwnProperty.call(f, w) && (h[w] = f[w]);
    }
    return h;
  }, Cy.apply(this, arguments);
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
Object.defineProperty(yC, "__esModule", { value: !0 });
var my = rN(_r), v1 = cd, iN = zy, lN = (0, iN.createAnimation)("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function oN(h) {
  var f = h.loading, c = f === void 0 ? !0 : f, v = h.color, w = v === void 0 ? "#000000" : v, C = h.speedMultiplier, R = C === void 0 ? 1 : C, g = h.cssOverride, U = g === void 0 ? {} : g, q = h.size, A = q === void 0 ? 15 : q, I = h.margin, W = I === void 0 ? 2 : I, oe = aN(h, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), X = Cy({ display: "inherit" }, U), $ = function(Ce) {
    return {
      backgroundColor: w,
      width: (0, v1.cssValue)(A),
      height: (0, v1.cssValue)(A),
      margin: (0, v1.cssValue)(W),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(lN, " ").concat(0.75 / R, "s ").concat(Ce * 0.12 / R, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return c ? my.createElement(
    "span",
    Cy({ style: X }, oe),
    my.createElement("span", { style: $(1) }),
    my.createElement("span", { style: $(2) }),
    my.createElement("span", { style: $(3) })
  ) : null;
}
var uN = yC.default = oN, SC = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(h) {
  (function() {
    var f = {}.hasOwnProperty;
    function c() {
      for (var C = "", R = 0; R < arguments.length; R++) {
        var g = arguments[R];
        g && (C = w(C, v(g)));
      }
      return C;
    }
    function v(C) {
      if (typeof C == "string" || typeof C == "number")
        return C;
      if (typeof C != "object")
        return "";
      if (Array.isArray(C))
        return c.apply(null, C);
      if (C.toString !== Object.prototype.toString && !C.toString.toString().includes("[native code]"))
        return C.toString();
      var R = "";
      for (var g in C)
        f.call(C, g) && C[g] && (R = w(R, g));
      return R;
    }
    function w(C, R) {
      return R ? C ? C + " " + R : C + R : C;
    }
    h.exports ? (c.default = c, h.exports = c) : window.classNames = c;
  })();
})(SC);
var sN = SC.exports;
const cN = /* @__PURE__ */ qT(sN);
function M1() {
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
let kc = M1();
function EC(h) {
  kc = h;
}
const RC = /[&<>"']/, fN = new RegExp(RC.source, "g"), wC = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, dN = new RegExp(wC.source, "g"), pN = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, HT = (h) => pN[h];
function mi(h, f) {
  if (f) {
    if (RC.test(h))
      return h.replace(fN, HT);
  } else if (wC.test(h))
    return h.replace(dN, HT);
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
    replace: (w, C) => {
      let R = typeof C == "string" ? C : C.source;
      return R = R.replace(mN, "$1"), c = c.replace(w, R), v;
    },
    getRegex: () => new RegExp(c, f)
  };
  return v;
}
function PT(h) {
  try {
    h = encodeURI(h).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return h;
}
const mv = { exec: () => null };
function BT(h, f) {
  const c = h.replace(/\|/g, (C, R, g) => {
    let U = !1, q = R;
    for (; --q >= 0 && g[q] === "\\"; )
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
function yy(h, f, c) {
  const v = h.length;
  if (v === 0)
    return "";
  let w = 0;
  for (; w < v; ) {
    const C = h.charAt(v - w - 1);
    if (C === f && !c)
      w++;
    else if (C !== f && c)
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
function VT(h, f, c, v) {
  const w = f.href, C = f.title ? mi(f.title) : null, R = h[1].replace(/\\([\[\]])/g, "$1");
  if (h[0].charAt(0) !== "!") {
    v.state.inLink = !0;
    const g = {
      type: "link",
      raw: c,
      href: w,
      title: C,
      text: R,
      tokens: v.inlineTokens(R)
    };
    return v.state.inLink = !1, g;
  }
  return {
    type: "image",
    raw: c,
    href: w,
    title: C,
    text: mi(R)
  };
}
function gN(h, f) {
  const c = h.match(/^(\s+)(?:```)/);
  if (c === null)
    return f;
  const v = c[1];
  return f.split(`
`).map((w) => {
    const C = w.match(/^\s+/);
    if (C === null)
      return w;
    const [R] = C;
    return R.length >= v.length ? w.slice(v.length) : w;
  }).join(`
`);
}
class xy {
  // set by the lexer
  constructor(f) {
    Tn(this, "options");
    Tn(this, "rules");
    // set by the lexer
    Tn(this, "lexer");
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
        text: this.options.pedantic ? v : yy(v, `
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
        const w = yy(v, "#");
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
      const v = yy(c[0].replace(/^ *>[ \t]?/gm, ""), `
`), w = this.lexer.state.top;
      this.lexer.state.top = !0;
      const C = this.lexer.blockTokens(v);
      return this.lexer.state.top = w, {
        type: "blockquote",
        raw: c[0],
        tokens: C,
        text: v
      };
    }
  }
  list(f) {
    let c = this.rules.block.list.exec(f);
    if (c) {
      let v = c[1].trim();
      const w = v.length > 1, C = {
        type: "list",
        raw: "",
        ordered: w,
        start: w ? +v.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      v = w ? `\\d{1,9}\\${v.slice(-1)}` : `\\${v}`, this.options.pedantic && (v = w ? v : "[*+-]");
      const R = new RegExp(`^( {0,3}${v})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let g = "", U = "", q = !1;
      for (; f; ) {
        let A = !1;
        if (!(c = R.exec(f)) || this.rules.block.hr.test(f))
          break;
        g = c[0], f = f.substring(g.length);
        let I = c[2].split(`
`, 1)[0].replace(/^\t+/, (st) => " ".repeat(3 * st.length)), W = f.split(`
`, 1)[0], oe = 0;
        this.options.pedantic ? (oe = 2, U = I.trimStart()) : (oe = c[2].search(/[^ ]/), oe = oe > 4 ? 1 : oe, U = I.slice(oe), oe += c[1].length);
        let X = !1;
        if (!I && /^ *$/.test(W) && (g += W + `
`, f = f.substring(W.length + 1), A = !0), !A) {
          const st = new RegExp(`^ {0,${Math.min(3, oe - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), vt = new RegExp(`^ {0,${Math.min(3, oe - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), Fe = new RegExp(`^ {0,${Math.min(3, oe - 1)}}(?:\`\`\`|~~~)`), Ne = new RegExp(`^ {0,${Math.min(3, oe - 1)}}#`);
          for (; f; ) {
            const yt = f.split(`
`, 1)[0];
            if (W = yt, this.options.pedantic && (W = W.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), Fe.test(W) || Ne.test(W) || st.test(W) || vt.test(f))
              break;
            if (W.search(/[^ ]/) >= oe || !W.trim())
              U += `
` + W.slice(oe);
            else {
              if (X || I.search(/[^ ]/) >= 4 || Fe.test(I) || Ne.test(I) || vt.test(I))
                break;
              U += `
` + W;
            }
            !X && !W.trim() && (X = !0), g += yt + `
`, f = f.substring(yt.length + 1), I = W.slice(oe);
          }
        }
        C.loose || (q ? C.loose = !0 : /\n *\n *$/.test(g) && (q = !0));
        let $ = null, Ce;
        this.options.gfm && ($ = /^\[[ xX]\] /.exec(U), $ && (Ce = $[0] !== "[ ] ", U = U.replace(/^\[[ xX]\] +/, ""))), C.items.push({
          type: "list_item",
          raw: g,
          task: !!$,
          checked: Ce,
          loose: !1,
          text: U,
          tokens: []
        }), C.raw += g;
      }
      C.items[C.items.length - 1].raw = g.trimEnd(), C.items[C.items.length - 1].text = U.trimEnd(), C.raw = C.raw.trimEnd();
      for (let A = 0; A < C.items.length; A++)
        if (this.lexer.state.top = !1, C.items[A].tokens = this.lexer.blockTokens(C.items[A].text, []), !C.loose) {
          const I = C.items[A].tokens.filter((oe) => oe.type === "space"), W = I.length > 0 && I.some((oe) => /\n.*\n/.test(oe.raw));
          C.loose = W;
        }
      if (C.loose)
        for (let A = 0; A < C.items.length; A++)
          C.items[A].loose = !0;
      return C;
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
      const v = c[1].toLowerCase().replace(/\s+/g, " "), w = c[2] ? c[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", C = c[3] ? c[3].substring(1, c[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : c[3];
      return {
        type: "def",
        tag: v,
        raw: c[0],
        href: w,
        title: C
      };
    }
  }
  table(f) {
    const c = this.rules.block.table.exec(f);
    if (!c || !/[:|]/.test(c[2]))
      return;
    const v = BT(c[1]), w = c[2].replace(/^\||\| *$/g, "").split("|"), C = c[3] && c[3].trim() ? c[3].replace(/\n[ \t]*$/, "").split(`
`) : [], R = {
      type: "table",
      raw: c[0],
      header: [],
      align: [],
      rows: []
    };
    if (v.length === w.length) {
      for (const g of w)
        /^ *-+: *$/.test(g) ? R.align.push("right") : /^ *:-+: *$/.test(g) ? R.align.push("center") : /^ *:-+ *$/.test(g) ? R.align.push("left") : R.align.push(null);
      for (const g of v)
        R.header.push({
          text: g,
          tokens: this.lexer.inline(g)
        });
      for (const g of C)
        R.rows.push(BT(g, R.header.length).map((U) => ({
          text: U,
          tokens: this.lexer.inline(U)
        })));
      return R;
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
        const R = yy(v.slice(0, -1), "\\");
        if ((v.length - R.length) % 2 === 0)
          return;
      } else {
        const R = yN(c[2], "()");
        if (R > -1) {
          const U = (c[0].indexOf("!") === 0 ? 5 : 4) + c[1].length + R;
          c[2] = c[2].substring(0, R), c[0] = c[0].substring(0, U).trim(), c[3] = "";
        }
      }
      let w = c[2], C = "";
      if (this.options.pedantic) {
        const R = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(w);
        R && (w = R[1], C = R[3]);
      } else
        C = c[3] ? c[3].slice(1, -1) : "";
      return w = w.trim(), /^</.test(w) && (this.options.pedantic && !/>$/.test(v) ? w = w.slice(1) : w = w.slice(1, -1)), VT(c, {
        href: w && w.replace(this.rules.inline.anyPunctuation, "$1"),
        title: C && C.replace(this.rules.inline.anyPunctuation, "$1")
      }, c[0], this.lexer);
    }
  }
  reflink(f, c) {
    let v;
    if ((v = this.rules.inline.reflink.exec(f)) || (v = this.rules.inline.nolink.exec(f))) {
      const w = (v[2] || v[1]).replace(/\s+/g, " "), C = c[w.toLowerCase()];
      if (!C) {
        const R = v[0].charAt(0);
        return {
          type: "text",
          raw: R,
          text: R
        };
      }
      return VT(v, C, v[0], this.lexer);
    }
  }
  emStrong(f, c, v = "") {
    let w = this.rules.inline.emStrongLDelim.exec(f);
    if (!w || w[3] && v.match(/[\p{L}\p{N}]/u))
      return;
    if (!(w[1] || w[2] || "") || !v || this.rules.inline.punctuation.exec(v)) {
      const R = [...w[0]].length - 1;
      let g, U, q = R, A = 0;
      const I = w[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (I.lastIndex = 0, c = c.slice(-1 * f.length + R); (w = I.exec(c)) != null; ) {
        if (g = w[1] || w[2] || w[3] || w[4] || w[5] || w[6], !g)
          continue;
        if (U = [...g].length, w[3] || w[4]) {
          q += U;
          continue;
        } else if ((w[5] || w[6]) && R % 3 && !((R + U) % 3)) {
          A += U;
          continue;
        }
        if (q -= U, q > 0)
          continue;
        U = Math.min(U, U + q + A);
        const W = [...w[0]][0].length, oe = f.slice(0, R + w.index + W + U);
        if (Math.min(R, U) % 2) {
          const $ = oe.slice(1, -1);
          return {
            type: "em",
            raw: oe,
            text: $,
            tokens: this.lexer.inlineTokens($)
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
  codespan(f) {
    const c = this.rules.inline.code.exec(f);
    if (c) {
      let v = c[2].replace(/\n/g, " ");
      const w = /[^ ]/.test(v), C = /^ /.test(v) && / $/.test(v);
      return w && C && (v = v.substring(1, v.length - 1)), v = mi(v, !0), {
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
      let w, C;
      if (c[2] === "@")
        w = mi(c[0]), C = "mailto:" + w;
      else {
        let R;
        do
          R = c[0], c[0] = ((v = this.rules.inline._backpedal.exec(c[0])) == null ? void 0 : v[0]) ?? "";
        while (R !== c[0]);
        w = mi(c[0]), c[1] === "www." ? C = "http://" + c[0] : C = c[0];
      }
      return {
        type: "link",
        raw: c[0],
        text: w,
        href: C,
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
const SN = /^(?: *(?:\n|$))+/, EN = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, RN = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, wv = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, wN = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, TC = /(?:[*+-]|\d{1,9}[.)])/, CC = ln(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, TC).getRegex(), z1 = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, TN = /^[^\n]+/, A1 = /(?!\s*\])(?:\\.|[^\[\]\\])+/, CN = ln(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", A1).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), xN = ln(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, TC).getRegex(), Ay = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", U1 = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, bN = ln("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", U1).replace("tag", Ay).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), xC = ln(z1).replace("hr", wv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ay).getRegex(), kN = ln(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", xC).getRegex(), I1 = {
  blockquote: kN,
  code: EN,
  def: CN,
  fences: RN,
  heading: wN,
  hr: wv,
  html: bN,
  lheading: CC,
  list: xN,
  newline: SN,
  paragraph: xC,
  table: mv,
  text: TN
}, YT = ln("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", wv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ay).getRegex(), ON = {
  ...I1,
  table: YT,
  paragraph: ln(z1).replace("hr", wv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", YT).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ay).getRegex()
}, DN = {
  ...I1,
  html: ln(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", U1).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: mv,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: ln(z1).replace("hr", wv).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", CC).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, bC = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, _N = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, kC = /^( {2,}|\\)\n(?!\s*$)/, LN = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Tv = "\\p{P}\\p{S}", NN = ln(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Tv).getRegex(), MN = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, zN = ln(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Tv).getRegex(), AN = ln("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Tv).getRegex(), UN = ln("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Tv).getRegex(), IN = ln(/\\([punct])/, "gu").replace(/punct/g, Tv).getRegex(), jN = ln(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), FN = ln(U1).replace("(?:-->|$)", "-->").getRegex(), HN = ln("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", FN).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), by = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, PN = ln(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", by).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), OC = ln(/^!?\[(label)\]\[(ref)\]/).replace("label", by).replace("ref", A1).getRegex(), DC = ln(/^!?\[(ref)\](?:\[\])?/).replace("ref", A1).getRegex(), BN = ln("reflink|nolink(?!\\()", "g").replace("reflink", OC).replace("nolink", DC).getRegex(), j1 = {
  _backpedal: mv,
  // only used for GFM url
  anyPunctuation: IN,
  autolink: jN,
  blockSkip: MN,
  br: kC,
  code: _N,
  del: mv,
  emStrongLDelim: zN,
  emStrongRDelimAst: AN,
  emStrongRDelimUnd: UN,
  escape: bC,
  link: PN,
  nolink: DC,
  punctuation: NN,
  reflink: OC,
  reflinkSearch: BN,
  tag: HN,
  text: LN,
  url: mv
}, VN = {
  ...j1,
  link: ln(/^!?\[(label)\]\((.*?)\)/).replace("label", by).getRegex(),
  reflink: ln(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", by).getRegex()
}, C1 = {
  ...j1,
  escape: ln(bC).replace("])", "~|])").getRegex(),
  url: ln(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, YN = {
  ...C1,
  br: ln(kC).replace("{2,}", "*").getRegex(),
  text: ln(C1.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, gy = {
  normal: I1,
  gfm: ON,
  pedantic: DN
}, pv = {
  normal: j1,
  gfm: C1,
  breaks: YN,
  pedantic: VN
};
class io {
  constructor(f) {
    Tn(this, "tokens");
    Tn(this, "options");
    Tn(this, "state");
    Tn(this, "tokenizer");
    Tn(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = f || kc, this.options.tokenizer = this.options.tokenizer || new xy(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const c = {
      block: gy.normal,
      inline: pv.normal
    };
    this.options.pedantic ? (c.block = gy.pedantic, c.inline = pv.pedantic) : this.options.gfm && (c.block = gy.gfm, this.options.breaks ? c.inline = pv.breaks : c.inline = pv.gfm), this.tokenizer.rules = c;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: gy,
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
    this.options.pedantic ? f = f.replace(/\t/g, "    ").replace(/^ +$/gm, "") : f = f.replace(/^( *)(\t+)/gm, (g, U, q) => U + "    ".repeat(q.length));
    let v, w, C, R;
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
        if (C = f, this.options.extensions && this.options.extensions.startBlock) {
          let g = 1 / 0;
          const U = f.slice(1);
          let q;
          this.options.extensions.startBlock.forEach((A) => {
            q = A.call({ lexer: this }, U), typeof q == "number" && q >= 0 && (g = Math.min(g, q));
          }), g < 1 / 0 && g >= 0 && (C = f.substring(0, g + 1));
        }
        if (this.state.top && (v = this.tokenizer.paragraph(C))) {
          w = c[c.length - 1], R && w.type === "paragraph" ? (w.raw += `
` + v.raw, w.text += `
` + v.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = w.text) : c.push(v), R = C.length !== f.length, f = f.substring(v.raw.length);
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
    let v, w, C, R = f, g, U, q;
    if (this.tokens.links) {
      const A = Object.keys(this.tokens.links);
      if (A.length > 0)
        for (; (g = this.tokenizer.rules.inline.reflinkSearch.exec(R)) != null; )
          A.includes(g[0].slice(g[0].lastIndexOf("[") + 1, -1)) && (R = R.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + R.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (g = this.tokenizer.rules.inline.blockSkip.exec(R)) != null; )
      R = R.slice(0, g.index) + "[" + "a".repeat(g[0].length - 2) + "]" + R.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (g = this.tokenizer.rules.inline.anyPunctuation.exec(R)) != null; )
      R = R.slice(0, g.index) + "++" + R.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; f; )
      if (U || (q = ""), U = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((A) => (v = A.call({ lexer: this }, f, c)) ? (f = f.substring(v.raw.length), c.push(v), !0) : !1))) {
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
        if (v = this.tokenizer.emStrong(f, R, q)) {
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
        if (C = f, this.options.extensions && this.options.extensions.startInline) {
          let A = 1 / 0;
          const I = f.slice(1);
          let W;
          this.options.extensions.startInline.forEach((oe) => {
            W = oe.call({ lexer: this }, I), typeof W == "number" && W >= 0 && (A = Math.min(A, W));
          }), A < 1 / 0 && A >= 0 && (C = f.substring(0, A + 1));
        }
        if (v = this.tokenizer.inlineText(C)) {
          f = f.substring(v.raw.length), v.raw.slice(-1) !== "_" && (q = v.raw.slice(-1)), U = !0, w = c[c.length - 1], w && w.type === "text" ? (w.raw += v.raw, w.text += v.text) : c.push(v);
          continue;
        }
        if (f) {
          const A = "Infinite loop on byte: " + f.charCodeAt(0);
          if (this.options.silent) {
            console.error(A);
            break;
          } else
            throw new Error(A);
        }
      }
    return c;
  }
}
class ky {
  constructor(f) {
    Tn(this, "options");
    this.options = f || kc;
  }
  code(f, c, v) {
    var C;
    const w = (C = (c || "").match(/^\S*/)) == null ? void 0 : C[0];
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
    const w = c ? "ol" : "ul", C = c && v !== 1 ? ' start="' + v + '"' : "";
    return "<" + w + C + `>
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
    const w = PT(f);
    if (w === null)
      return v;
    f = w;
    let C = '<a href="' + f + '"';
    return c && (C += ' title="' + c + '"'), C += ">" + v + "</a>", C;
  }
  image(f, c, v) {
    const w = PT(f);
    if (w === null)
      return v;
    f = w;
    let C = `<img src="${f}" alt="${v}"`;
    return c && (C += ` title="${c}"`), C += ">", C;
  }
  text(f) {
    return f;
  }
}
class F1 {
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
    Tn(this, "options");
    Tn(this, "renderer");
    Tn(this, "textRenderer");
    this.options = f || kc, this.options.renderer = this.options.renderer || new ky(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new F1();
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
      const C = f[w];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[C.type]) {
        const R = C, g = this.options.extensions.renderers[R.type].call({ parser: this }, R);
        if (g !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(R.type)) {
          v += g || "";
          continue;
        }
      }
      switch (C.type) {
        case "space":
          continue;
        case "hr": {
          v += this.renderer.hr();
          continue;
        }
        case "heading": {
          const R = C;
          v += this.renderer.heading(this.parseInline(R.tokens), R.depth, hN(this.parseInline(R.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const R = C;
          v += this.renderer.code(R.text, R.lang, !!R.escaped);
          continue;
        }
        case "table": {
          const R = C;
          let g = "", U = "";
          for (let A = 0; A < R.header.length; A++)
            U += this.renderer.tablecell(this.parseInline(R.header[A].tokens), { header: !0, align: R.align[A] });
          g += this.renderer.tablerow(U);
          let q = "";
          for (let A = 0; A < R.rows.length; A++) {
            const I = R.rows[A];
            U = "";
            for (let W = 0; W < I.length; W++)
              U += this.renderer.tablecell(this.parseInline(I[W].tokens), { header: !1, align: R.align[W] });
            q += this.renderer.tablerow(U);
          }
          v += this.renderer.table(g, q);
          continue;
        }
        case "blockquote": {
          const R = C, g = this.parse(R.tokens);
          v += this.renderer.blockquote(g);
          continue;
        }
        case "list": {
          const R = C, g = R.ordered, U = R.start, q = R.loose;
          let A = "";
          for (let I = 0; I < R.items.length; I++) {
            const W = R.items[I], oe = W.checked, X = W.task;
            let $ = "";
            if (W.task) {
              const Ce = this.renderer.checkbox(!!oe);
              q ? W.tokens.length > 0 && W.tokens[0].type === "paragraph" ? (W.tokens[0].text = Ce + " " + W.tokens[0].text, W.tokens[0].tokens && W.tokens[0].tokens.length > 0 && W.tokens[0].tokens[0].type === "text" && (W.tokens[0].tokens[0].text = Ce + " " + W.tokens[0].tokens[0].text)) : W.tokens.unshift({
                type: "text",
                text: Ce + " "
              }) : $ += Ce + " ";
            }
            $ += this.parse(W.tokens, q), A += this.renderer.listitem($, X, !!oe);
          }
          v += this.renderer.list(A, g, U);
          continue;
        }
        case "html": {
          const R = C;
          v += this.renderer.html(R.text, R.block);
          continue;
        }
        case "paragraph": {
          const R = C;
          v += this.renderer.paragraph(this.parseInline(R.tokens));
          continue;
        }
        case "text": {
          let R = C, g = R.tokens ? this.parseInline(R.tokens) : R.text;
          for (; w + 1 < f.length && f[w + 1].type === "text"; )
            R = f[++w], g += `
` + (R.tokens ? this.parseInline(R.tokens) : R.text);
          v += c ? this.renderer.paragraph(g) : g;
          continue;
        }
        default: {
          const R = 'Token with "' + C.type + '" type was not found.';
          if (this.options.silent)
            return console.error(R), "";
          throw new Error(R);
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
      const C = f[w];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[C.type]) {
        const R = this.options.extensions.renderers[C.type].call({ parser: this }, C);
        if (R !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(C.type)) {
          v += R || "";
          continue;
        }
      }
      switch (C.type) {
        case "escape": {
          const R = C;
          v += c.text(R.text);
          break;
        }
        case "html": {
          const R = C;
          v += c.html(R.text);
          break;
        }
        case "link": {
          const R = C;
          v += c.link(R.href, R.title, this.parseInline(R.tokens, c));
          break;
        }
        case "image": {
          const R = C;
          v += c.image(R.href, R.title, R.text);
          break;
        }
        case "strong": {
          const R = C;
          v += c.strong(this.parseInline(R.tokens, c));
          break;
        }
        case "em": {
          const R = C;
          v += c.em(this.parseInline(R.tokens, c));
          break;
        }
        case "codespan": {
          const R = C;
          v += c.codespan(R.text);
          break;
        }
        case "br": {
          v += c.br();
          break;
        }
        case "del": {
          const R = C;
          v += c.del(this.parseInline(R.tokens, c));
          break;
        }
        case "text": {
          const R = C;
          v += c.text(R.text);
          break;
        }
        default: {
          const R = 'Token with "' + C.type + '" type was not found.';
          if (this.options.silent)
            return console.error(R), "";
          throw new Error(R);
        }
      }
    }
    return v;
  }
}
class yv {
  constructor(f) {
    Tn(this, "options");
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
Tn(yv, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var Sv, x1, Oy, _C;
class WN {
  constructor(...f) {
    o1(this, Sv);
    o1(this, Oy);
    Tn(this, "defaults", M1());
    Tn(this, "options", this.setOptions);
    Tn(this, "parse", py(this, Sv, x1).call(this, io.lex, lo.parse));
    Tn(this, "parseInline", py(this, Sv, x1).call(this, io.lexInline, lo.parseInline));
    Tn(this, "Parser", lo);
    Tn(this, "Renderer", ky);
    Tn(this, "TextRenderer", F1);
    Tn(this, "Lexer", io);
    Tn(this, "Tokenizer", xy);
    Tn(this, "Hooks", yv);
    this.use(...f);
  }
  /**
   * Run callback for every token
   */
  walkTokens(f, c) {
    var w, C;
    let v = [];
    for (const R of f)
      switch (v = v.concat(c.call(this, R)), R.type) {
        case "table": {
          const g = R;
          for (const U of g.header)
            v = v.concat(this.walkTokens(U.tokens, c));
          for (const U of g.rows)
            for (const q of U)
              v = v.concat(this.walkTokens(q.tokens, c));
          break;
        }
        case "list": {
          const g = R;
          v = v.concat(this.walkTokens(g.items, c));
          break;
        }
        default: {
          const g = R;
          (C = (w = this.defaults.extensions) == null ? void 0 : w.childTokens) != null && C[g.type] ? this.defaults.extensions.childTokens[g.type].forEach((U) => {
            const q = g[U].flat(1 / 0);
            v = v.concat(this.walkTokens(q, c));
          }) : g.tokens && (v = v.concat(this.walkTokens(g.tokens, c)));
        }
      }
    return v;
  }
  use(...f) {
    const c = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return f.forEach((v) => {
      const w = { ...v };
      if (w.async = this.defaults.async || w.async || !1, v.extensions && (v.extensions.forEach((C) => {
        if (!C.name)
          throw new Error("extension name required");
        if ("renderer" in C) {
          const R = c.renderers[C.name];
          R ? c.renderers[C.name] = function(...g) {
            let U = C.renderer.apply(this, g);
            return U === !1 && (U = R.apply(this, g)), U;
          } : c.renderers[C.name] = C.renderer;
        }
        if ("tokenizer" in C) {
          if (!C.level || C.level !== "block" && C.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const R = c[C.level];
          R ? R.unshift(C.tokenizer) : c[C.level] = [C.tokenizer], C.start && (C.level === "block" ? c.startBlock ? c.startBlock.push(C.start) : c.startBlock = [C.start] : C.level === "inline" && (c.startInline ? c.startInline.push(C.start) : c.startInline = [C.start]));
        }
        "childTokens" in C && C.childTokens && (c.childTokens[C.name] = C.childTokens);
      }), w.extensions = c), v.renderer) {
        const C = this.defaults.renderer || new ky(this.defaults);
        for (const R in v.renderer) {
          if (!(R in C))
            throw new Error(`renderer '${R}' does not exist`);
          if (R === "options")
            continue;
          const g = R, U = v.renderer[g], q = C[g];
          C[g] = (...A) => {
            let I = U.apply(C, A);
            return I === !1 && (I = q.apply(C, A)), I || "";
          };
        }
        w.renderer = C;
      }
      if (v.tokenizer) {
        const C = this.defaults.tokenizer || new xy(this.defaults);
        for (const R in v.tokenizer) {
          if (!(R in C))
            throw new Error(`tokenizer '${R}' does not exist`);
          if (["options", "rules", "lexer"].includes(R))
            continue;
          const g = R, U = v.tokenizer[g], q = C[g];
          C[g] = (...A) => {
            let I = U.apply(C, A);
            return I === !1 && (I = q.apply(C, A)), I;
          };
        }
        w.tokenizer = C;
      }
      if (v.hooks) {
        const C = this.defaults.hooks || new yv();
        for (const R in v.hooks) {
          if (!(R in C))
            throw new Error(`hook '${R}' does not exist`);
          if (R === "options")
            continue;
          const g = R, U = v.hooks[g], q = C[g];
          yv.passThroughHooks.has(R) ? C[g] = (A) => {
            if (this.defaults.async)
              return Promise.resolve(U.call(C, A)).then((W) => q.call(C, W));
            const I = U.call(C, A);
            return q.call(C, I);
          } : C[g] = (...A) => {
            let I = U.apply(C, A);
            return I === !1 && (I = q.apply(C, A)), I;
          };
        }
        w.hooks = C;
      }
      if (v.walkTokens) {
        const C = this.defaults.walkTokens, R = v.walkTokens;
        w.walkTokens = function(g) {
          let U = [];
          return U.push(R.call(this, g)), C && (U = U.concat(C.call(this, g))), U;
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
Sv = new WeakSet(), x1 = function(f, c) {
  return (v, w) => {
    const C = { ...w }, R = { ...this.defaults, ...C };
    this.defaults.async === !0 && C.async === !1 && (R.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), R.async = !0);
    const g = py(this, Oy, _C).call(this, !!R.silent, !!R.async);
    if (typeof v > "u" || v === null)
      return g(new Error("marked(): input parameter is undefined or null"));
    if (typeof v != "string")
      return g(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(v) + ", string expected"));
    if (R.hooks && (R.hooks.options = R), R.async)
      return Promise.resolve(R.hooks ? R.hooks.preprocess(v) : v).then((U) => f(U, R)).then((U) => R.hooks ? R.hooks.processAllTokens(U) : U).then((U) => R.walkTokens ? Promise.all(this.walkTokens(U, R.walkTokens)).then(() => U) : U).then((U) => c(U, R)).then((U) => R.hooks ? R.hooks.postprocess(U) : U).catch(g);
    try {
      R.hooks && (v = R.hooks.preprocess(v));
      let U = f(v, R);
      R.hooks && (U = R.hooks.processAllTokens(U)), R.walkTokens && this.walkTokens(U, R.walkTokens);
      let q = c(U, R);
      return R.hooks && (q = R.hooks.postprocess(q)), q;
    } catch (U) {
      return g(U);
    }
  };
}, Oy = new WeakSet(), _C = function(f, c) {
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
const bc = new WN();
function Kt(h, f) {
  return bc.parse(h, f);
}
Kt.options = Kt.setOptions = function(h) {
  return bc.setOptions(h), Kt.defaults = bc.defaults, EC(Kt.defaults), Kt;
};
Kt.getDefaults = M1;
Kt.defaults = kc;
Kt.use = function(...h) {
  return bc.use(...h), Kt.defaults = bc.defaults, EC(Kt.defaults), Kt;
};
Kt.walkTokens = function(h, f) {
  return bc.walkTokens(h, f);
};
Kt.parseInline = bc.parseInline;
Kt.Parser = lo;
Kt.parser = lo.parse;
Kt.Renderer = ky;
Kt.TextRenderer = F1;
Kt.Lexer = io;
Kt.lexer = io.lex;
Kt.Tokenizer = xy;
Kt.Hooks = yv;
Kt.parse = Kt;
Kt.options;
Kt.setOptions;
Kt.use;
Kt.walkTokens;
Kt.parseInline;
lo.parse;
io.lex;
function wy(h, f) {
  return {
    content: h,
    role: f
  };
}
function b1(h) {
  document.getElementById(`message-text-${h}`).focus();
}
const qN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAw4AAADyCAYAAADk+pKyAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3Xd4FFXbBvB7N430hEBo0ntNQHrvAkqTJiIo0ov03ot0RHoVBQRpIgrSe2gJBAIIoUPoPSGk1/3+4IsvQsicszuzuwn377q8vveDc2aehGR2npnzPEcHwAAiIiIiIqI02AKAzskDOmdPS8dCRERERERWxhAVBkP0y/9PHJw9YeNdwNIxERERERGRlUl6eguG6JfQWzoQIiIiIiKyfkwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISJGtpQNIiyExDoiNtHQYAnTQuWS2dBBERERERJqx7sQhMgxJDy5ZOgxlehvYFa9t6SiIiIiIiDTDpUpERERERKQoXSQOXl5eMBgMVvffxo0bLf2tISIiIiIyi3SROBARERERkWUxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFNlaOgAiIiKS553ZA6WLFkCpwvmRO4c3XJ2d4ObsBA83V7g6OyI6Ng6RUdF4FRWNiKgYPAt9ieAbIbh4/TZu3HmAxKQkS38JRGaTzcsTRfPnRqG8H6FgnpzIlS0LMtnbw93VBY6Z7KHT6RAdE4fwiEhEx8bhZUQkrt2+h2sh93At5D7uP35m6S/BKjBxyEAWjuuP8qWKWjoMTY3+8SccOHlWeLytjQ2OrV+gYUTvehUZjaSkZETHxOL+k2d4+iIMV2/fs5oP67WzRqNQ3lwWjcEUMbHxqNNpQKp/Z29niz8XT0Fmd1fh4125dRffjJiuVnhGsbO1xdZF3yOLp5vwnJNBwRg4beG////yyUNQpmgB4fkL127F2m37pOI01bYlU+Ht5SE09lVkND7pMhQGg0HjqP6n1Se1MLRLO+Hxw2YuhV/gBQ0j+q+CeXKhSc1KqF/1Y5QrWQTZvDyNPlZsXDyCb4bgyKnz2Hv8NI6cOm/xa1MKeztb+K2bb9Zzvn3dfvI8FNdC7lvNdfu32WNRIE8OobHHz17E4OmLNY7oXTOG9ECtij5ScwwGYODUhfA/H6x6PK7OTmhYvQLqVPJFnYplUTjfRyYdL+xVBA4HnMPe46ex78QZ3H34RKVI0xcmDhlI4bwfoVyJIpYOQ1MebuI3hACg0+ms6nsSERUNv9Pnsfd4ILbsOYKnoS/NHkOxAnlQpmhBs59XLVExse/9u/iERPx96CTmjuorfLxyJYpg085D2OkXoEZ4Runa5lM0rFZeeHxysgF9Js79z5/de/QU37RsJHyMlvVrmDVxyJ3DG41qVJSaU6xAHly+eUejiN7VvG414etFYlISLly9pXFEgFMmB3Ro1gCdmn+CSj7FVTtuJgd7lCtRBOVKFMHAb9rgaehLbNp1CEvXb8O1kHuqnccYer3eqq7bryKj4Xf63L/X7Wdh4WaPoXjBvChZOJ/Q2MfPw7QNJhVje3fCwG/aSM8bNmup6klD+VJF0bXNp2jbuA5cnBxVO66nmytaNqiBlg1qAADOBl/D0vXbsHHnIcTExal2HmvHGgciM3J1dsKntatg3ujvcPvgBmyZPwlVy5a0dFgZyvKN26VvNqcO6gYbvWUuh24uThjdq6PUnLXb9uLMpWv/+bPdR09JHaNGhTJm/ZprVZB7EmnsHFPInO9k0CW8jIjULBYXJ0eM7d0JN/evx6JxA1RNGlLjndkDfTu0xIVtP2PrwsnwKZZ+Hy6ozc3FCZ/VqYr5Y/oh5NBG/D5vIir7lLB0WFajR7umGNu7k/S8mT9twNzVv6sWR2WfEjiwag5ObFiEb1s1UTVpSE25EkWwfPIQ3D64AVMHdZN6052eMXEgshA7W1s0rVsVh3+dh10rZqJYgTyWDilDSExKwtCZS6TmlCiUD19LPK1X0+Bv28E7s9jyHQCIjI7B2Hkr3/nzM5euSr3B8nB1gW/xQsLjTWXtiUORfLmRw9tLeLxsoiaj/Wf1cHnXGozt3QleHuLL19Sg1+vwae0qCNi0FD9PHS71s/khsLO1RbN61eC3bj52LJ+OIvlyWzoki/q8YU3MHf2d9Lyft+xM9TpmjFzZsuL3eRPht24+apQvo8oxZWR2d8WQb9vh0o7V6PlFM4s9hDKXjP3VEaUT9aqUQ+CW5RjZvQP0ep2lw0n39h4PxI4j/lJzxvf5Gs6OmTSKKHU5vbOgf6fWUnNmrliPR89C3/nz5GQD9kjezNau6Cs13hS1jDhXjQo+0OnM8/sg+73Y6Sf38yUii6c7NswZh9XTR5pUv6AGvV6Hr5o1wPltP6NNo9oWjcVaNahaHme3rsDwbu3N9nNqTWpX9MXq6SOlb5T/OnAMfSbOVaV+qWWDGjjzx3I0q1fN5GOZysvDDfPH9MOp35eidBHxerP0hokDkZWwt7PFxH6d8dfiqXBzcbJ0OOne8FnLkJCYKDw+h7cXBnwtdxNvqgnffQOnTA7C40MePMbcNe9/tb9Lsk7DmJt5Y+TJmQ35cmWXnued2QPFC+bVIKJ3yRR13nv0FJeuh6h6/obVXt+Eft6wpqrHNZWXhxvWzR6DReMGwN6OZZFvs7ezxeT+XbB10fdwdf5wrtu+xQvh9/mT4GBvJzXv8Klz6DhsKpKSk006v06nw6xhvbDxx/FWt0SodJECOLZ+ATq1+MTSoWgiXVwFEhMTERgYaOkw3nHrlvaFcfTh+aR6Bez9eTaa9hhpkSK8jOJayD0s/u0v9O/USnjOoM5t8dPmHXjyQvviwlKF86Nj84ZSc0b8sByxcfHv/fv9J84gMSkJtjY2Qser/nFp2NnaSiVYxqhpwvKB2hV9EXwjRL1gUqHT6VBTYlnUrqPqFtJ3aNoAK74fIvzvZgnd2n6GIvlzo23/CQh7FWHpcKxOk5qVsGflLDTtORIvXr6ydDiaKpA7J7YtkX/AFRR8Ha37jUvzGibCRq/H0omDLLa8VISjgwN++n4oqviWRL/v52t+jTWndJE4hIeHo0KFCpYOg8hsypUogm1Lp6He1wMRHfvhdGtQ25Qlv+LLpvWR1dNdaLyrsxPG9umEvpPmaRyZfEG2X+AF/LHXL80xLyMicSLokvCNuouTI8qXKoqT5y4Jx2EMU2oValXwweLf/lQxmncVL5hXamnQLj/16hv6dGiBOSP6pIulLrUq+GDvz7PRqOvQDH9zbIzypYpi25KpqP/N4AzbZSeblyd2Lp+O7FkyS827cecBmvYciVeR0SbHsHDcAKtOGt7UpXUTeHm4ocOQ7zNM8sClSkRW6uOSRbByyjBLh5GuvYyIxMQFq6TmfNuqCYrm17bgsV6VclKtSZOTDRgyQ6wv+27J5UrmqHMwZUlUjfJlNL+plklsYuPicTggSJXzDvymDX4c2TddJA0pfIoVxI7l06WW2H1IKpQuhuWTB1s6DE24uThh+9JpKJA7p9S8h0+fo3H34aq0H+/Sugm6tG5i8nHMqUX96lj/w9gMs9TPqr8Kvbs39K7iXS6ITBUdG4e4eONfo3pK7jOhpNUntdD+0Ams//uAqsf9kKz8fQd6tm+GUoXzC423tbHB1IHd0KrfOE3i0et1mDaou9ScVVt34dzlG0Jjd/oFYOqgbsLHrlXRF9OWr5OKR4ax9Q0psni6o2ShfLh4/baKUf2XTPLkF3ghzb1ERDWqUVH65yA1cfEJCLhwGecuX8eFq7fw4MkzhEdEITwyCo4ODnB3dYa7qwtKFMyDssULo2KZ4sidw9ukc5YrUQTLJg1Gx2FTTY5fDdZ23W7XpC62HTyBzbsPq3pcS3Kwt8PmeROlO7GFhkfg0x4jcOfBY5NjKFU4P+aOku/glCI+IRFHTp+D/7lgnL96E/cePcXTFy8R/f+/z7Y2erg4OyGzuyvyf5QDxQvmRanC+VGroq/JdRTN6lXDqmkj0WHo92bd1FILVp04QKcHbPhSRFTrfuM1WyN79/Am4SKobQeOo9vY2ZrEERUTo8lxU4yYvQxLN2wz6Riuzk5wcXZE8QJ54FOsEKr4lkTjmpWki8hSzB7eG38fOomIKNNf8co66B+E9oMmmf28aZG96CYlJ2PIjMXY/dMs4TlN61ZF9Y9L49iZf2TDU9T+0/pSH76vIqMxfv4vwuODb4Tg7sMnyJMzm9D4KmVLwMHeDnHxCcLnkKFGS9XaFX01Sxx0Op1UC0fZNzqpKZQ3F9bMHGVSB7VjZ/7Bmj/34M/9x4T2k/j70AkAr7/eSmWKo12TuujUoqHRBb3tmtTFmUvXVO3Db6yhM5dgxaa/TTrG29ftqmVLolEN46/bc0b2wc4j/qokmZam1+uwevpI1KlUVmpedGwcWvQerVojgTkj+xj173H7/iPMW7MFG3YcQGh42vU5z8LCcfv+o//sk2Oj16Oybwl83rAmvmnZyOjfmdaNauHcleuY+dMGo+ZbC+tOHEiKJW4sUxOfkPhBF89FREUjIioaj56+wEH/IPyIzcjs7opOLT7BmF6dpAvKsnq6o8+XLTB9xW8aRfx+CYkZ49/yoH8Qth88gaZ1qwrPmT64O2p06Kfq06FMDvaY1K+z1Jxpy9ZKF2vv9AtAzy+aCY11dHBAZZ8SOHL6vNQ5RKmRONSq6IOF67aqEM27ShXOjyyCNTAAsMvE/RscHRzw+7yJ8HB1MWr+2eBrGPPjSuw/ecao+QaDAf7ng+F/PhjTlq3FqJ5foWubz4xaRjF1UDcEXryqSYJtbu9ct1e9vm5/07IxRvf6SvpmMZuXJ3q1b47ZP2/UKGLzmTvqO+luXwmJifhi4ETVdoVuXq+69LLK+IRETF68GnN+2WxSfUFScjKOn72I42cvYtLC1ejS+lMM797eqDdVE/t9i7OXrhv9+2sN+DifyAxCwyMwd/Xv8G3RxagP2Z7tM/6mMlobNnuZ1FP1imWKo5XKrTH7dmgptUzk5t0HRt0wyz4V17Itq1LiEHD+smIhafWPy2i2v4nMzcj1kPu4efeBSecb0qUdShTKJz0vOdmAyYvXoOoXfVS76Xga+hIDpi5E7Y79cffhE+n5tjY2WDCmv1V3gzJFaHgE5qzaBN8WXXEi6KL0/F7tm6f7fXnG9Ooo/BAiRXKyAV1Gz1R1k8RBndtIjY+KiUWzXiMxY8V6VYuSwyOjMGfVJpRp+q1RS4ht9Hp81/Fz1eKxBN6JEJnR/cfP0Lz36P+8BhWR0zuL9Gti+i9jbsK/H9BFtYI2Lw83DOvWXmrO8B+WG7WE6FDAOamuLloVSOfNlR15FeobDgacVazf8PJwQ6nC2myoJPO1m9qGNV+u7BjSpZ30vKiYWDTvPQqTF69BcrL666MDL15Fpba94Bd4QXpuycL5pG8s05t7j56iWa9RCAq+LjUvdw5v1Cxvvt3P1dat7WcY1+dr6XlDZizGhh0HVYujWIE8qOJbUmpOrwlzcNBfnSYGqXnyIgxfj5iGr4ZOkbrWBl68ik5WUhtkLCYORGYWERWNdgMnSt8QNqop3oWHUie77KdA7pzo0U6dm6KRPTpILU856B+EbQeOG3WumLg4HA44Jzy+YpnimuyaLdIWNvDiVQRevKo4To0lT2/T63WoXr608PjdJrZh/WF4bzg6yHUjiotPQJt+47Hn2GmTzq3kxctXaNlnjNC/xdvG9ukk3PI4vXoV+fq6HZ8g9/Q6vV63W9Svjvlj+knPm7J0rerLCts1qSs1fvfRU6omLmnZtOsQ6n09CI+evlAcGxR8HZ92H4HwyCgzRKYdJg5EFnD34RPpIuz0/OTKWsgWGgPAqJ5fGb0ePUX+j3Kg5xfNhcenFHSbQmaZgL2dLaqWLWXS+VIjcrMfePEqzlxUfgOnxVsRn2KFhNcpR0bH4OgZ+SfyKaqWLSlVY5Oi88jpZlsPHREVjWa9RiFEsgOOp5srRvTooFFU1iPkwWMs37Rdak56vG7XquCDNTNGSS+PXb5pOyYuXKV6PNXKyV2b5q/ZonoMaQm8eBX1Og9K86HU+Ss30bjbsAxRM/hhJQ5JiTDERlr/f3HKHTIo/Vu9dbfU+OIF87LOQQWrtu6SWirm5eGGoV2/MOmcUwZ0lVry9NPmHSZ3Efr78Emp8TI7J4tSutl/8OQZHj19gdMXrygeq9rHpVVfLy6TjBw8edakzlO9v2whPeeXP3bh9z1HjD6nMZ6HheObEdOQlJwsNa9L608z/FsHQP66XbJwvnS1T0epwvmxad4EZHKwl5q37cBx9P9+gerx2Oj1KF+qqPD4mLg4zRo9pOXGnQdo3HVYql2b/rl2C427pf536dEH1VUpOfIFku7LFziZnd4GdsVrWzoK0tilGyF4/DxUeAdOB3s75Mqe1agiRvqf5GQDhs9aiv2r5gjP+e6rz7F0wzbce/RU+nwVShdDq0/Ei6xfRkRikgpP7e49eorgGyHChbh1Kqn7RD9vruyKLWFT3jTcuPMALyMi03yzk9ndFWWKFhTez0KETLK0+5jxy5SyeXmiRf0aUnPuPHiMITOWGH1OU5wIuoTFv/2J774SL+J0yuSAb1s3wYwV6zWMzPIuXL2Fp6Ev4Z3ZQ2i8o4MDcmT1wsOnzzWOzHT5P8qBHctnSHcLOnDyLL4cMlk62RSRw9sLLk6OwuNv3X1ksR2aL16/jbb9x2P3yln/NgwIvhGCRl2G4nlYuEVi0gIfXxJZiMFgwIWrt6TmiH5YUdr8Ai/gj71+wuONaaOaYvrg7lJPHKcs+RXPVPqQkWkdWq5kEelWwWkRXaYEvP5dOHtJufBUzToHWxsb1PhYbP8Gg8GAXSbUN3Rp3US6yH7CwtUWbbE9ZcmveBUpd/7OnzdOV0/XjWEwGPCP7HXby/qv296ZPbBz+XTkyCr2ICtF4MWraNN/vHTthyjZJEamUFkLfoEX/l2udeXWXXzSZahq13Nr8UG9cUjh7u6O4GB1eguraefOnejWTXzHV0r/noe9lBov8+SF0jbih+VoUquy8Cv59p/Wx7w1W6SeeDetW1Vqc7FrIfew+Le/hMcr2e0XgMGd2wqNTbmR3nHEX5VzyyQOKf+7buW0O4fVruiLeSqtXy5borBwovTPtdc7MhurU4tPpMZfvX0PG3ZYdrf40PAILF7/J0Z0+1J4ToHcOVGpTHHVevdbq4x23XZ1dsK2pVNRME8uqXlXb99Ds16jEBmt3casnm5y9WXWsFxu1soNyJYlM2b9tF56D5704INMHHQ6HXLmzGnpMN7h6elp6RDIzF6+kqtnyaj90i0h5MFjzFuzBcMFW6Tq9TpMG9QdjbsNExpva2ODqQPlHgQMn7VM1dfsJ4IuKS4BelOtir5mSxwMBsN/ak0CBescbPR6VZZEyLy9MOVtQ4HcOVEgt9znzayVGzRZ9iFr/potGPh1G6ndehtWr5DhE4eXEXJdcaz5um1vZ4vN8yaiXIkiUvPuP36Gxt2Gab4EJzEpSWp8npzZkMPbS6jLkVaSkw0YNG2Rxc6vNS5VIrIg2d1Io2JiNYrkwzTzp/V49CxUeHy9KuXQoGp5obGdWzVG0fy5hY+993igajftKRISE7H/uHhHHrU6F+UTqG+4effhfzqMiLQB9XB1gU+xQibHB8hterfbhP0b6lf5WGp8dGwctu47avT51PQ8LBy7JDcTbFhN7PcjPXN1lnuDYK3Xbb1eh1+mjVB80/e252HhaNJ9OO4/Nv4tnCjZ5XI6nQ5fNW2gUTQEMHEgsigvydeq6b3/s7WJiIrG2HkrpeaM76u8IVImB3uMkmhPmZiUhKEztSmElSnqLVO0ILw83Ew+p0jR8duJwv3Hz/D4uXISV6ui6XUOdra2wi0eQ8MjEHD+stHnalBNLnH4+9AJi9Y2vO3XbXulxn9cqqgqP0PWzMtD8rot+YbCXOaM6IM2jWpLzYmMjkHz3qNx5dZdbYJ6izHJyeBv20nXapA4Jg5EFlRM4om0wWDAHcn+6qRs7ba9Uu1ZK5Ypjk9rVU5zTI92TZErW1bhYy7fuB2Xb94RHi9jz9FTwrsN6/U6qZqM95Gtb0hxRmQjOBXeinxcsojwuvP9JwKll0uk0Ot10vFu3X/MqHNpZc/RU1JPzG30etTO4Lvcy1y3k5MNuPvI+jrhjerRQbpFcHxCItr2n4DT/ygvK1TLy4hI6fqizO6u2Dh3gqrNHuh/mDgQWUj+j3JIrX1+/CzUal95p2fJyQYMnr4IBoPYzTUAjOvz9Xu7x7g4OWJoV7G6CeD1E+1Ji1YLj5f15EUYzlwS3w1YjeVKYonDuzcfIsuVqpUrZfJ+JjJfoyn1DblzZJPePPDE2X+MPp8W4hMS4X9OrmahTNECGkVjeYXy5kLeXNmFxz948gyxcfEaRiSvS+smGN/3G6k5yckGfDNimtk2I3zTySD5mpnKPiXgv3EJKvkU1yCiDxsTByILadu4ttT4k+cuaRMI4UTQJWzefVh4fNkShd+7C/B3X30u1TZ38uLVmm8MJLOLtKmJg0h9Q2JSUqrdqUQSB3cXZ5QtUdjo+ADxtxbJyQbsNWH/hiJ5P5IaH/LgsVTNjbkcl0xmiuYTfyKf3rSVXNpjbdftZvWqYeG4AdJtc/tPmW/2zQhTbD98wqh5hfLmgt/a+dgyfxKqlSuV4VsFmwsTByIL8HRzxSDBNpkpDp86p1E0BAAj56yQ6gE+vs/X7+xk7OnmioGd2wgf4/LNO1i2YbvweGPJFLgWL5gX2byM7/AmclN++eYdRMe++70WXTJmyn4O9na2qFK2pNDYwItXTOrBXjifXOJgziUgMmTfOBSRWMqTnnh5uGHAN+K/34B1XbdrlC+DtTNHS7+xm7RoNZZt1P469T7bD574TyMFGTqdDk3rVsWhNXNx6e9VGNfna1TyKW7yW8sPGb9zRGZmo9dj2aTBUhvbJCYlWU2nlYzq3qOnmPPLZuHxpYsUQMsG/90RemDnNlJLU4bOXGL0+nkZZ4OvCRUeA68/aE2pIzC2vgF43a3l9v1HivNldnx+W8UyxeGUyUForMybmtQUkUwcbt57aNL5tHLj7gOp8YXy5MpwN2Y2ej2WTxoi9fsdn5CIP62kZqV0kQLYsmCS8L41KU7/cwXfL/lVo6jEREbHqJK4FMqbC2N6dcTRdQtw3+93bJk/CUO7fIEa5cvA2TGTCpF+GD7IfRyILMXRwQELxvZDi/rVpebtOhJgkY1kcmfPiq5tPjXrORMTk7Bq626znjPF7JUb0PnzRsjpnUVo/LjenbB1nx+Skw3wzuyBvh1aCp9rp18A9h4PNDZUKcnJBuw5egpft2wkNL52RV9s2nXIqHOJJA5HAy+89++OnfkH+T/Kkeb86h+Xhq2NjVFJl1x9g/FtWAEofh1vs9bmB/cfP0NCYiLsbMVuGTI52CNntiy49+ipxpGZh6ODAxZPGPDe5Ynvs+PwSc33ORCRN1d2/L10mnS9DQCUL1UUdSqVxaGAIA0iEzfrpw1o36SuVH1JWrw83NC0btV//00Tk5Lwz9Vb8D8fjIDzl+F/Phi3rDSRtzQmDkRmoNPp0KDqx/hxZF/p5QsGgwFTl63VKLK0lSiUD4vHDzTrOWPi4iyWOETFxGLUnJ+wavoIofHFC+ZF28Z1sGHHQQzt2l64U09CYiKGzVxqSqjSdkkkDnUqGffGIf9HOZA7h7fiuEMB71++cdA/CB2bN0xzvquzE8qVLIJTF+TbpIq+rXj8PBRng69LH/9N7q7OUuPvPLC+7jvA65uq+4+fSSVCHq4u6T5x0Ol0aFitPOaO6iu9q7Ilr9tvyurpjp3LpiOHt5dR83U6HZZMGIhyLbulurzQXCKiovHt6JnY/dNM4QRWhq2NDcqWKIyyJQqjV/vmAICnoS9x6nwwAi5chv+5YARevMoGJWDiQKQZ78we8ClWCFXKlkSHpvWlnz6m2LjzkFS7UDLN+h0H0PvL5qhYRqwbx5heHXEi6BJ6tGsqfI7Fv/2FayH3jA3RKAdOnBF+alwwTy58lD2rdA91kZvy6yH302yveDDgrNC5alXwkU4cMjnYo7JPCaGxe46ekuq0lRrRRDLFi/BXJp1PS8/DwqWuYbJfu7XI5uUJn2IFUaVsKXRoWh/5jHzCvW77fpy/clPl6OS4ODli29Jp0g+r3lYgd06M7/sNhs9eplJkxjkaeAHdx/6An6cOM0uhs3dmD3xWpyo+q/O/txJBwdex/+QZ7D9xBv7ngpGQmKh5HNaGiQPRG4Z2+QLffC72VDY1tjY2cHV2gpeHuyo9pB8/D8XAaQt1nRspAAAf1klEQVRNPg6JMxgMGDxjMfzWzhf6cCqSLzd2r5gpvHb4eVg4plhgzXB4ZBSOn70ovFSndkVfrN22T+ocIsuUDioseXj09AUu37yD4gXzpjmuZgUfzFq5QSq+yj4lhP+ddplY3wDI3zzHWPCJrhLZp82yuyubYkS3L9GldROj59va2MDNxRmZ3d1UuW4/evoCg6cvNvk4prC3s8WmeRPwcckiqhyvX6dW2Lz7sFDnMy2t274PNjZ6LJkwUJM3D2mxtbFBhdLFUKF0MYzs3gGR0TE45B+Etdv34e9DJz+YJIKJA9EbcufwFlpqYQ6xcfFoN2AiXry03qeQGVXA+ctYv+MAvvysvtD4QnnFlzFMXLgKLyMijQ3NJLv9Tlk8cRBZK33QP0gxcahWrhTsbG2lPqxFlyklJCbiwAnT+9U7SRZcWnIpiBLZJRrOZnzjYE3X7Zi4OLQZMMHoLkBq0Ot0WDllGOpXkdu1PC02ej2WTx6CSm16WfwGec2fe3D/8VOsmj4S2bNYbodoFyfHf+skHj8PxZo/92Ll7zuEGjykZxmr7QFRBhEXn4Cvhk2xuh7gH5LRP65UfT3rxeu38dPmHaoeU8ZOP3/hsXUkd/8VqW9ITjbgiEB7SpHlSi5OjtJPU0WTphNBlxAeGSV17NTIdmqJs7KNwt4UK5nUfIhdamLj4vHloMlG1d6oqV6VcmjXpK7qxy1VOD+Gdf1C9eMa46B/EMq17Ibfd1tmb4m3Zc+SGcO6foGLf/+CH0b0luqamN4wcSCyMuGRUWjeexS2HThu6VA+aA+ePMMPP29U9ZhDZixGUnKyqseUceXWXYQIdu7JncNbamdzkbcNF67eFHqDdvT0BaHvU62K4m1ZnTI5CNet7Daxm1KKuPgEqfG2Zl56IcPeTi422a89vXsZEYmmPUdixxHx5FwrWi7hGdG9g+LbQHN5HhaOL4dMRvUvv8O+E+bpUKfEztYW3331OYJ3rkb3tk0z5KZzTByIrMipC5dRsXVPHPS3bOs7eu2Hnzep1hlm+8ETVvHvulPixkamdanITbxo4fPLiEicEVhLLbOfQ5WyJYVvftWobwCAqOgYqfGOmeR67JuTYya5NwiyX3t65n8+GBVa98SR0+ctHYqUR09f4Ne/9krNcbC3w7JJg9/Z/NKSTl24jE+7j0DZll2xdMM2Vd4WmsrLww0Lx/XHhjnjhPeNSS+YOBBZgbBXERg4bSFqdxyQ4ddHpicxcXEYOWeFyceJT0jEMAt3JEkhs6mZVOJQQXns4TTasL5NqYgaAKqWLSWcDIhuanf34RME3wgRGqtEdqmbk+TNuTk5O8nFFvEBJA5hryLQf8oC1Ok4wGr34HifsFcRaNJjOPpOmoebkhv8VfYpgd7tW2gUmfEuXQ9Bv+/n46OardGy71is3bYPT0NfWjSmlg1qYNvSaRkqeWDiQGRBj5+HYty8n1GsUScsWvenWXYRJjmbdx/GiaCLJh1jwdo/pD+ctXL41DnhItxaFX2FXrUXyJ0TH2XPmuaYhMREHDvzj9B5AeCQwNsZZ8dMKF+qqNDxRJMgtd42AK93vJVhzk5Estyc5boNyX7t6cmjZ6EYO28lin7SEUvW/2XR5YfGiI6NQ4veY3Dpeghi4uLQe+Jc6dbDk/p/q9pmbGqLi0/AjsMn8e2oGchdqw3Kt+qBYbOWYtuB43j8PNTs8dQsXwaLxg8w+3m1Yr0LKokyqKTkZKzbtg+bdx/GgZNnrTpZOBp4AV3HzDLrOU3tna82g8GAwdMX4/j6RUa9nn/yIgzTrGAjqBSxcfE4FBCET2tVVhybI2tmFM2fG1du3U1zXM3yZRSPderCFambyZPnLiEmLg6ODmk/qatVwRcngtJuIiBTSK1WfQMAREbLvXGwls5AqcmTM5vU+IioaI0isYyk5GSs/WsvNu8+jIP+QVZ93U5LQmIi2g+a9J/GG4cCgvDLH7vwbSvxlrYuTo5YPH4APu0utlmmpRgMBly4ehMXrt7E3NW/A3jdyKGKb0lU9i2BKr4lUapIftjotX2O3qFpA/ifC8ayjds1PY85MHEgMjMbvR57jwdiz7HTlg5FUXRsHJdOAThz6RrWbtuLTi0+kZ47fv4veBVpXTdRu/0ChBIH4PWTeqXEQaS+QaQN65ti4+Jx4uwl1KtSLs1xNSv4YNrydWmOSWndKnJO2TjTcv+xXH1MvpzW+QTXO7OH1J4UyckGPHj8XMOIzM9Gr8fuY6ex97h1FOEaw2AwoNuY2diVSnI88ocVaFyzMnJkFW9v2qBqeXRs3lC6TsLSbt9/hNv3H+G3v/cDeJ0EVSxTDFV8S6KSTwlU8imuSVekmcN64i8LvfVQExMHojfsOxGIc5dvSM+r4lsS1T8uLTz+x1F9cdD/LJ6HhUufiyxj7LyV+LxhTakbqPNXbmL11t0aRmWcnX4BWCA4tnZFXyzdsC3NMSL1DcbckB8KOKuYOKQUPccnvL+3vGh9g8wyLhGyu4Pn+8g6E4d8krve33v0BDFx5tuTYu/xQJy/In/drlauFKqWLSU8fu6ovjgcEJRu99YZMmPJvzfLbwt7FYEBUxdg44/jpY45a1gv7D12Gk9ehKkRokVERsfgoH/Qv80rdDodihXIg8o+JVC17OvP9oJ5xPfqeR9HBwcM/KaNxXfgNhUTB6I3bD94QvEmKTXZs2TG+W0rhZ9SZPV0x5wRfdBp+FTpc5FlPHoWinlrtmB0z6+E54z+cYVVrn++9+gpLl0PQcnC+RTH1qzgA71eh+Tk1JeQidQ3RMXEIuB8sHScIl2oUtqsplU/IdIqFgD2HFOvvgEAroXclxpfpmhBVc+vlrLFC0mNv3JbLmEy1V8HjmHFpr+l5+XImhkXtv8CdxdnofHZvDwxe3gvdB45Q/pcljZt+TosWPtHmmO27juKvw4cQ/N61YWPm9ndFXNH9UX7wZNNDdFqGAwGXL55B5dv3sEvf+wCAOTLlR2NalREx+YNUaF0MaOP3b1dU8xY8RtCwy23QaCpWBxNpILHz0Mx+sefpOZ88Wld4eUiZB1kO6eEPHiiUSSmE90MLounO0oVLvDevxe5KT9+9mKabwTeJyj4utAOvGnF4ObihLIlCgudb5efuonD9TtyiYNPsYJW2X1F5m0qIP+mxVIePQvFGMnrdoemDdC4ZiWNItLGT5t3YPz8X4TG9puyQHpn+1af1EKzetWMCS3dCHnwGEs3bEO19n1RuW1vo1trOztmQj0Vd/S2BCYORCpZ+ftOHD8r131n0fgBwk+7iNSkVltWkfqGw0bWDSQlJ+PIKeXe+Gnt51Dj4zKwtbFRPMbV2/dw695DqfiU3Lz7UKqI1s7WVrhLlDlVKyeXOCjVxFiTFZv//k+hsIhF4wbAzUWuy5SlbN13FN9Nnic8/tHTFxj5w3Lp8ywY3Q8eri7S89Kjs8HX0KjrUHw3eZ5RRfJ1K6e9/NLaMXEgUonBYEDviT9KPVnN6Z0F04f00DAqotSdDLok9DQfAGqnkRyIvHEwZeO7g/7Km8ZV9i0BB3u7VP9OdJO41ApGTRUbF49TFy5LzalfrbzqcZiiZOF8ikvR3nb4lPh+HZaWnPz6up2QKH7d/ih7Vkwd1E3DqNRx0D8InYZPlV4u+fOWXdKb2eXw9sL0Id2l5qR3yzZuR7/v50vPE106aa2YOBCp6PLNO5i1coPUnG9bNUadSmU1iogodYlJSdh/4ozQ2Orly6TarrBgnlzIlS3tm8rQ8AijCldTiCQdjg4OqFSmeKp/J7p/w+6j6icOAIS/xynaNa4jtHeGuXz5WX2p8SEPHuO6ZG2HpV26HoIfftkkNadbm8+E2hBbyplL19Cm/3jExSdIzzUYDOg1YY50gXvnzz+8z7KfNu+Q7rQlm4hbGyYORCqbseI3qQ9OnU6HpRMHwdnReneNpYxJ9Cm7h6tLqnUCIk/OjgaeN6lA/FrIPTx48kxxXGqdkzzdXOFTTLmwNyIqWmpzOhmyiUP+j3KgYhnjiy/VpNfr0P7TelJz9qXTdqXTlq6T2qRRp9Nh2aTBVlmTcvfhEzTrOdKkvTRu3HmAKUt+lZqj0+mwZMJATb8nmd1dhWuWzGW25MPCTA72cJXcUNGaMHEgUllsXDz6TJLbiTP/Rzkw4bvOGkZF9K49R0+9t1vS21J7cl+zgvITV1OWKckcI7UlSdXLlxbatO+g/1mjirdFBF68Kl1s2ufLlprEIqtZ3WrST0fT6z4HMXFx6CtRCwC8fuM2ru/XGkVkvIs3QvBMhVbfc37ZLN2evEDunBjf9xuTz50aNxcnbF86Db/NHmNVD9qOnflHOknz8nDTKBrtMXEg0sDhU+ekN8Xp+1VLVPJJfbkFkRaehYXj9D9XhMam9kRf5I2DGhuqiSQOlcoURyYH+//8megyJbW7Kb0pMSkJf+4/JjWnbeM6KFU4v0YRidHpdBjbu5PUnLBXEdh33Po3tnyfAyfPYt32fVJz+ndqbVJ7TmuWmJSEnuPnSBcA9+vUSvUif2fHTPhr8VRUKF0MBfPkwvwx/VQ9vikSk5Jw75HcZo/pdedxgIkDkWaGz14m9dTHRq/H8klD3lvkSaQF0bX9b+++LFLf8OjpC1U67BwMUC6QzuRgj8o+Jf7zZyKJg8FgkOowZYyl6+X2htHrdZg8oItG0Yhp/UktlC7y/ja8qfnlj12qbqBnCcNmLpXa4C3lum1vlzG3xTobfA1zV/8uNcdGr8eySYOFdmsXkcnBHr/Pn4Rq5f63WV/H5g3x3Vefq3J8NcgmAqHpdBNBgIkDkWZevHyF4bOWSs0pXjAvRvYQ32CMyFSiT9tdnBxRofT/niIKvW04ZfrbBuB1AnL55h3FcW8uV3q9/4TyU/sLV2/h4dPnJsWn5GzwNenuSp/WqoyvmjXQKKK0eWf2wI+j+krNSUpOlk6QrNGzsHCMkGxHWrJwPgzv9qVGEVne5EVrpOo/AKB0kQIY1vULk89tb2eL9XPGpbqD/KxhvdCuSV2Tz6GGHN5ZhMfGxMWl6wSbiQORhtZt3y+9xntol3ZWu4MsZTxBl6/j0bNQobFvPsHXug2rMcd6M6Ya5csIdSfapVE3pbcZsyP93FHfIV+u7BpE8346nQ6Lxw+Ed2YPqXm7jvgjRHKDRGu15s890i1lh3f70uLLy7QSExeH3hPl6vYAYET3DiheMK/R57W1scGaGaPeu1GqXq/Dz1OHWTx5KJzvI2T1dBcef/HabQ2j0R4TByINGQwG9Jk0V6qtnZ2tLZZPHiy0aRWRqV4v1RG7eX6zzkFk4zc16htSiCxXqlimOBwdXnd0EW7DqsH+DanZtOsQbtyRe2rr5uKEv5dNQzYvT42ieteUgV2ldwFOTjZg6rJ1GkVkfinX7di4eOE59na2WD55SKptizOCQwFBWLV1t9QcB3s7LJs0WKhBwdv0eh1+mjIUnzesmeY4O1tbrJ4+EgO/aSN9DrV83aKR1HjZDQetTcb8CSeyIjfvPsC0pXIfquVKFLHohZA+LKJr/Kv4lkQmB3sUypsLORVezd+480C6YDAtR09fUGzr6mBvhyplX9c5iCQOoeERCDgvt4TIWPEJiRg4baH0vCL5cmPnihnIIvFE01ije36FId+2k5635q89CLx4VYOILOd6yH3MWPGb1JzypYqif6fWGkVkeSNmLxd+O5misk8J9G7fQmqOTqfDonEDhfcQ0et1mDGkBzbNnQBPN1epc5kqX67s6P1lc6k5RwO1af1sLkwciMxgzqpNuHQ9RGrO2N6dUCRfbm0CInrDgZNnhNqRphQgm6ub0pteRkTijMDNac0Kvsjm5YliBfIojt177LRJe0zI2nPsNLYdOC49r3SRAgjYtESz7j1OmRywavoIo9pohkdGYezcleoHZQVmrdwgXdw//ruvUShvLo0isqywVxEYMHWB9LxJ/b9FXokld2WKFkDnzxtLn6dF/eo4v22l2ZYuZXZ3xaa5E+Di5Cg851lYuGabTZoLEwciM4hPSETviT8K98wHXt+kGfual0jGq0jxDdBqVfRFzfLmTxwA4KDAMWtV8EHNCj5C9Q1ad1NKzeCZSxAVEys9L3cObxxc/SPG9OoodaOipE6lsji+fpH0DtEpJi1cjScvwlSLx5qkXLdl1vY7Ojhg6cTBVrX7t5q27juKvw7ItRd2cXLEonEDhMefv3IT3y9ZIxsaACB7lsz4deYo+K2bj0+qVzDqGCLKFC0Iv3Xz4VtceYPJN/2yZZdRu3lbk4zZP0yBwWDAw4cPLR3GO8LCMubFl147ee4Sfvr9b3Rv21R4TrVypdDzi+ZY/NufGkZG9Lota93KZRXH1ankq1iwm5xswBHJ4lIRh/yDMEKhe02F0sXQpFYlxWMlJSdjrwX2HLjz4DG6jpmF32aPkb65dLC3w7g+X6PHF83ww88b8dv2/Xga+lI6Br1eh9oVfTGoczs0rFZeen6K7QdPYOG6rUbPTw+OnfkHP2/ZhS6tmwjPqVm+DLq3/QzLNm7XMDLL6TdlAWpV9IWHq4vwnIbVyqNj84bC+xtNXbYWJQvlQ6tPahkVY2WfEti+dBouXr+NnzbvwMadB6Xa7L5PvlzZMfjbdvi2VWPpdrOR0TFYsv4vk2OwtA8ycQgPD0euXBnzVSJZtzE/rkTTOtWQI2tm4TnfD+iCvw+fxN2HTzSMLHXlSxXFrhUzzX5eEXN+2YR9J9LnLrXWaJdfAGYO7ak4rrJPScW3YBev31Jl59q3nTx3CTFxcf8WQKfG3s4WbRvXUTzW6X+u4LkGMYrYsucIZhYrhOHd2hs1P5uXJ2YO7Ympg7rhwMmz2Hc8EOcuX8f5KzcRHhn1zngbvR6F8uaCb/HCqORTHK0a1EQOby+Tvoart++h86jp0p120qNRc1bgszpVpIrUpw7qhp1+AarW+ViLR09fYNScFVg8fqDUvFnDemHvsdNCb6iSkw34esQ0uLu5oH6Vj40NFaUK58fcUX3xw4jeCPznKg74n0VQ8HWcv3ID9x49VVyq6OHqgpKF86GKb0nUr1oetSv6Gr0K4PvFv+LBk2dGzbUmH2TiQGQpLyMiMXj6Ivz2w1jhOS5OjlgyYSA+6zHS7B/SXh5uqfbPtgbrdxywdAgZytXb93Dr3kMUyJ0zzXEiH5pqtmF9U2xcPE6cvaT4MynyJNBc3ZTeZ/yCn+FTrCAa1aho9DFsbWzwSfUK/1mSERkdg/CISIRHRMExkwPcXV3g4eqi6pLHV5HRaNN/PF5FRqt2TGsW9ioCQ2Yswa8zRwnPcXV2wqJxA9Csl/ic9GTl7zvRrkldoXqnFJndXTF3VF+0HzxZaHx8QiLa9BuPTfMmoEFV49+MAa+T50o+xVHJp/i/f5aYlIQnz0Px5EUYoqJjEZ+QCAd7O7i7OsPD1QVurs5wd3E26bwpzl2+gfm/blHlWJb2QSUOehcv6Aoqv8K2uIy5NJL+3+97juCr5g3RpKb4z2KDqq9f8675c4+GkdGHbqdfAPp2aGnycQ5rUN+Q4lDAWVWS2V0WqG94U3KyAV8MnIiNcyeouhbbxckRLk6Oirt6GysyOgYt+oxWZUfw9GTjzoP4qlkDqX+rRjUqokPTBli3fZ+GkVmGwWBA74k/InDLsjTfAL6t1Se10GznQeEmAVExsWjZZwxWTRuJ1o2MW7b0PrY2NsiVLatmvyspHj0LRat+46R3l7ZWH1ZxtI0tdJlcrP8/B/F1g5Q+9ft+vnSB5KxhPaWWOBHJUuMpfEJiIo4KFlobQ423GY+eheLc5RsqRGOa6Ng4tPpuLDbvPmzpUISEhkfgsx4jhAvpM5rvJs+T3vF39vBeZt2Hw5yuh9zHlCW/Ss9bMLqfVH1EfEIiOgz9HhMXrpJqMGINomJi8XnfMRlqydqHlTgQWYm7D59g4sJVUnM83Vwxf0w/bQIiAuAXeMGojj9vCrx4FRFR2i1hCQq+jrBXESYdY8+xU1azNj8+IREdh02x+gYI10LuoWaHfjgRlL43rzJFyIPHmLxotdQcLw83zBv9nUYRWd6cXzbj/JWbUnNyeHth2uDuUnMMBgOmLF2LFn1GS+8lYSmPn4ei/jeDcObSNUuHoiomDkQWsnDtVgQFX5ea07xedaO7TBApiY2LxyF/5R2a06JVfUOKpORkHDl13qRj7LJwfcPbkpMNGDB1IVr2HYvHz63rpshgMGDJ+r9QsXVPXAu5Z+lwLG7emi24cFXuRvnzhjXRon51jSKyrMSkJPQY94P0MpxvWzVGnUrKXdzetvvoKfg274K12/ZZTfKfmovXb6NGh34ZLmkAmDgQWUxiUhJ6T/xRegOquaP6wsvDTaOo6ENn6tp/LesbUhw0IblJSEzEgZNnVIxGPTsOn0S5lt3wx14/S4cCAHj49Dk+6zES/acskF6ik1ElJiWh1wT56/b8Mf2Q2d28uxqby9nga5i3Rq7wV6fTYcmEgXDKJF4fkSLsVQS+HTUDtb7qjxNBF6Xnayk+IRGTF69B5ba9cOfBY0uHowkmDkQWdObSNSyS7IOezcsTs4f30igi+tCZ8jQ+OjYO/ueDVYwmdaa81Th+9qJVdwN6HhaOLwZNQpNuw3E22DJPK19FRmPSotUo9VlntjxOxel/rmDp+m1Sc7JnySzU7ji9mrxoNW7efSA1p0DunBjX92ujz+l/Phi1Ow5Ai96jceS0aW8hTZWcbMDWfUdRoXUPTF68BvEJiRaNR0tMHIgsbMKCVbj/WK63c4emDdBYoisTkaj7j5/hn2u3jJp7IuiiWXZFvRZyz+h+6Lv9LNtNSdT+k2dQpV0ffNp9BHb5BZilI8utew8x8oflKFi/Pb5f8isio2M0P2d6NX7Bz9I/g51afGLShnvWLDo2Dr0nzpVePtS/U2uUL1XUpHPv9AtAg86DUaltL6zY9LfJNVAyIqNjsObPPfBt0QXtBk7E5Zt3zHZuS7HuxMGQDCQlpI//iIwUGR2DflMWSM9bNG4A3FycNIiIPnQ7jxj31sEcy5RSGPvWYddR66pvSIvBYMC+E4Fo3ns0ctdqg25jZ2PHEX9Vk7PLN+9g6rJ1qNimJ4o17oQfftmU6iZy9F+vIqMxYOoi6XmLxw+Eq3PGvG4fCgjCqq27pebY6PVYNmmw9C7MqQkKvo4+k+YiT+22aN1/PJZv2q5JXc7zsHD8sdcP7QdPRq4ardF1zKwPqj2xDoBBnzU/bLwLWDqWdyS/fIykB+mgg4PeBnbFa1s6Ck3ly5UdOp3YBhPRMbFCO0Oag06nQ75c2YXHv3gZbrFlDHlzZYde8Huc4umLMOkuOLmyZYW9XfrfwuV5WLim3XtS4+rshCye7sLj7z9+hoTE9PfK2sXJEVkze0jPM+bn0Vgeri7wNGLN+O37jzSIxrycHTOhdJECKFUk/+v/Wzg/cufwhrurM9xd3t3sLTI6BhGR0XgR/grBN0Lwz7VbuHjtNi5cu2WVbSLT03Vb5rMxxZPnodI1IzLX7ZjYOIsV2WdysEeOrPK7kj98+lyzt5U5smZGmaIFUapwfhQvmBf5PsqBbF6eyOntlWYS9zIiEncfPsGdB09w+8EjXLh6C/7ngj/YJgFJT28h+dltJg6q+AASByIiSh9cnBzh6uyI2LgEhEdGprve90Tm5O7iDL1eDxdnR0RGxSA2Lh4xcWwG8LaUxCFdPHZ0d3fH/v37LR3GO/bv34+RI0daOgwiIqJ/RUbHsD6BSFDK0jxz1kakZ+kicbC1tUX58tZXUHTrlnEFhERERERE6Y11F0cTEREREZFVYOJARERERESKmDgQEREREZEiJg5ERERERKSIiQMRERERESli4kBERERERIqYOBARERERkSImDkREREREpIiJAxERERERKWLiQEREREREipg4EBERERGRIiYORERERESkiIkDEREREREpYuJARERERESKmDgQEREREZEiJg5ERERERKSIiQMRERERESli4kBERERERIqYOBARERERkSImDkREREREpIiJAxERERERKWLiQEREREREipg4EBERERGRIiYORERERESkiIkDEREREREpYuJARERERESKmDgQEREREZEiJg5ERERERKSIiQMRERERESli4kBERERERIqYOBARERERkSImDkREREREpIiJAxERERERKWLiQEREREREipg4EBERERGRIiYORERERESkyNbSAYh48eIFdDqdpcMgIiIiIvpg8Y0DEREREREpsuo3DjoXT9jm9bV0GAL4NoSIiIiIMjbrThxsHQAXB0uHQURERET0weNSJSIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBTpABh0Th7QOXtaOhYiIiIiIrIyhqgwGKJfvk4cLB0MERERERFZt/8DIAA0PUbrwnkAAAAASUVORK5CYII=";
function QN({ iconColor: h }) {
  return /* @__PURE__ */ qe.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ qe.jsx("path", { d: "m60.875 276.5 99.766 53.922 174.7-143.03-161.79 206.74v77.512l72.832-96.914 115.88 63.434v0.003906c5.7188 3.1289 12.594 3.3203 18.477 0.51563 5.8828-2.8086 10.059-8.2734 11.219-14.688l69.797-384.68-400.35 201.14c-4.4648 2.2227-7.957 6.0117-9.8047 10.645-1.8477 4.6328-1.9219 9.7852-0.21094 14.469 1.7109 4.6875 5.0859 8.5781 9.4883 10.93z", fill: h }) });
}
function XN({ iconColor: h }) {
  return /* @__PURE__ */ qe.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ qe.jsx("path", { d: "m256 112c89.859 0 172.86 51.543 219.85 136.24l4.3047 7.7617-4.3047 7.7617c-46.973 84.691-129.99 136.24-219.85 136.24-89.852 0-172.86-51.547-219.84-136.24l-4.3047-7.7617 4.3047-7.7617c46.98-84.695 129.99-136.24 219.84-136.24zm0 32c-73.402 0-141.95 39.918-184.33 107.04l-3.0508 4.9609 3.0508 4.9609c42.375 67.117 110.93 107.04 184.33 107.04 75.199 0 145.3-41.895 187.38-112-42.086-70.109-112.19-112-187.38-112zm0 32c44.184 0 80 35.816 80 80s-35.816 80-80 80-80-35.816-80-80 35.816-80 80-80zm0 32c-26.508 0-48 21.492-48 48s21.492 48 48 48 48-21.492 48-48-21.492-48-48-48z", fill: h }) });
}
function GN({ iconColor: h }) {
  return /* @__PURE__ */ qe.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ qe.jsxs("g", { fill: h, children: [
    /* @__PURE__ */ qe.jsx("path", { d: "m83.84 360.16 22.879-22.719c-25.051-22.496-44.734-50.328-57.598-81.441 32.48-81.121 122.08-144 206.88-144 21.824 0.28906 43.445 4.1797 64 11.52l24.801-24.961c-28.117-11.883-58.277-18.184-88.801-18.559-52.152 1.9609-102.59 19.16-145.07 49.473-42.48 30.312-75.152 72.41-93.969 121.09-1.2734 3.5156-1.2734 7.3672 0 10.883 14.211 37.711 37.125 71.535 66.879 98.719z" }),
    /* @__PURE__ */ qe.jsx("path", { d: "m192 251.68c1.1133-15.332 7.707-29.754 18.578-40.621 10.871-10.871 25.289-17.465 40.621-18.578l28.961-29.121c-16.227-4.2734-33.293-4.2148-49.492 0.16016-16.199 4.3789-30.969 12.93-42.836 24.793-11.863 11.867-20.414 26.637-24.793 42.836-4.375 16.199-4.4336 33.266-0.16016 49.492z" }),
    /* @__PURE__ */ qe.jsx("path", { d: "m495.04 250.56c-18.344-47.789-50.27-89.168-91.84-119.04l76.801-76.961-22.559-22.559-425.44 425.44 22.559 22.559 81.602-81.602c36.383 21.344 77.664 32.922 119.84 33.602 52.152-1.9609 102.59-19.16 145.07-49.473 42.48-30.312 75.152-72.41 93.969-121.09 1.2695-3.5156 1.2695-7.3672 0-10.883zm-175.04 5.4414c-0.066406 11.203-3.0742 22.188-8.7188 31.863s-13.73 17.703-23.449 23.273c-9.7148 5.5703-20.727 8.4961-31.93 8.4766-11.199-0.015625-22.203-2.9727-31.902-8.5742l87.039-87.039c5.7539 9.6914 8.8438 20.73 8.9609 32zm-64 144c-33.566-0.58594-66.496-9.2578-96-25.281l40.641-40.641c18.484 12.828 40.887 18.754 63.297 16.746 22.41-2.0078 43.402-11.824 59.309-27.734 15.914-15.91 25.73-36.902 27.734-59.312 2.0117-22.41-3.9141-44.812-16.742-63.297l45.922-45.922c36.715 25.199 65.426 60.406 82.719 101.44-32.48 81.121-122.08 144-206.88 144z" })
  ] }) });
}
function $N({ iconColor: h }) {
  return /* @__PURE__ */ qe.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ qe.jsx("path", { d: "m227.5 256-86.512 86.516c-7.8711 7.8594-7.8711 20.637 0 28.496 7.8594 7.8672 20.633 7.8672 28.492 0l86.516-86.516 86.516 86.516c7.8594 7.8672 20.637 7.8672 28.496 0 7.8672-7.8594 7.8672-20.637 0-28.496l-86.516-86.516 86.516-86.516c7.8672-7.8594 7.8672-20.633 0-28.492-7.8594-7.8711-20.637-7.8711-28.496 0l-86.516 86.512-86.516-86.512c-7.8594-7.8711-20.633-7.8711-28.492 0-7.8711 7.8594-7.8711 20.633 0 28.492z", fill: h, fillRule: "evenodd" }) });
}
const WT = ({ iconColor: h, toggleChat: f, widgetID: c, sticky: v }) => {
  const [w, C] = _r.useState(twChatMessages[c]), [R, g] = _r.useState(""), [U, q] = _r.useState(!1), [A, I] = _r.useState(!1), [W, oe] = _r.useState(0), [X, $] = _r.useState(0), [Ce, st] = _r.useState([]), vt = _r.useRef(null), Fe = _r.useRef(null), Ne = window.twChatPluginSettings, yt = window.twChatWidgetSettings[c], xe = Ne.tw_chat_max_characters, Ze = getComputedStyle(document.documentElement).getPropertyValue("--tw-chat-header-close-color").trim();
  _r.useEffect(() => {
    v && b1(c), yt.tw_chat_suggested_answers && st(yt.tw_chat_suggested_answers.split(","));
  }, []), _r.useEffect(() => {
    vt.current && Fe.current && vt.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, [w]);
  const pn = (tt, He) => {
    tt && tt.preventDefault(), q(!0);
    const Z = He || R, be = {
      widget_id: c,
      message: Z
    }, _ = {
      headers: {
        "X-WP-Nonce": Ne.nonce
      }
    };
    W && (be.thread_id = W), twChatMessages[c] = [...w, wy(Z, "user")], C(twChatMessages[c]), JL.post(
      `${Ne.root}tw-chat-assistant/v1/chat-response/`,
      be,
      _
    ).then((te) => {
      const ge = te.data.message;
      let Pe;
      if (console.log(ge), ge.length > 0) {
        try {
          const ot = JSON.parse(ge);
          console.log(ot), Pe = ot.message, ot.suggestedAnswers && st(ot.suggestedAnswers);
        } catch {
          Pe = ge;
        }
        const Qe = Pe.replace(/(?:\r\n|\r|\n)/g, "<br />").replace(/【\d+†source】/g, "");
        C([...twChatMessages[c], wy(Qe, "assistant")]);
      }
      g(""), $(0), q(!1), oe(te.data.thread_id), b1(c);
    }).catch((te) => {
      console.error("Error fetching messages:", te), C([...twChatMessages[c], wy(Ne.tw_chat_error_message, "error")]), q(!1);
    });
  }, vn = (tt) => {
    const He = tt.target.value;
    let Z = He.length;
    xe && Z > xe && (tt.target.value = He.slice(0, xe), Z = xe), g(tt.target.value), $(Z);
  }, qt = (tt) => {
    st([]), pn(null, tt);
  }, Et = () => A ? /* @__PURE__ */ qe.jsxs(qe.Fragment, { children: [
    /* @__PURE__ */ qe.jsx(GN, { iconColor: h }),
    " Hide Disclaimer"
  ] }) : /* @__PURE__ */ qe.jsxs(qe.Fragment, { children: [
    /* @__PURE__ */ qe.jsx(XN, { iconColor: h }),
    " Show Disclaimer "
  ] }), Gt = () => w.map((tt, He) => {
    const Z = He === w.length - 1;
    return /* @__PURE__ */ qe.jsx(
      "p",
      {
        ref: Z ? vt : null,
        id: `tw-chat-message-${c}-${He}`,
        className: `message ${tt.role}`,
        children: /* @__PURE__ */ qe.jsx("span", { dangerouslySetInnerHTML: { __html: Kt.parse(tt.content) } })
      },
      He
    );
  }), $e = () => Ce.length > 0 ? Ce.map((He, Z) => /* @__PURE__ */ qe.jsx("button", { onClick: () => qt(He), children: He }, Z)) : /* @__PURE__ */ qe.jsxs(
    "form",
    {
      onSubmit: pn,
      className: U ? "tw-chat-form tw-chat-visibility-0" : "tw-chat-form",
      children: [
        /* @__PURE__ */ qe.jsxs("div", { className: "tw-chat-input-container", children: [
          /* @__PURE__ */ qe.jsx("label", { htmlFor: `message-text-${c}`, children: "Send Message" }),
          /* @__PURE__ */ qe.jsx("input", { placeholder: "Enter your message...", id: `message-text-${c}`, type: "text", onChange: vn, value: R, name: "message", required: "required" }),
          xe && /* @__PURE__ */ qe.jsx("div", { className: "tw-chat-char-count", children: /* @__PURE__ */ qe.jsxs("span", { className: X == xe ? "tw-chat-max-characters" : "", children: [
            X,
            " / ",
            xe,
            " characters"
          ] }) })
        ] }),
        /* @__PURE__ */ qe.jsxs("button", { children: [
          /* @__PURE__ */ qe.jsx(QN, { iconColor: h }),
          /* @__PURE__ */ qe.jsx("span", { className: "sr-only", children: "Send Message" })
        ] })
      ]
    }
  ), lt = cN(
    "tw-chat-interface",
    { sticky: v },
    { embedded: !v }
  );
  return /* @__PURE__ */ qe.jsxs("div", { className: lt, children: [
    /* @__PURE__ */ qe.jsxs("div", { className: "tw-chat-header", children: [
      /* @__PURE__ */ qe.jsx("span", { children: window.twChatWidgetSettings[c].tw_chat_widget_name }),
      v == 1 && /* @__PURE__ */ qe.jsx(
        "button",
        {
          className: "close",
          onClick: () => f(),
          "aria-label": "Close chat interface",
          children: /* @__PURE__ */ qe.jsx($N, { iconColor: Ze })
        }
      )
    ] }),
    /* @__PURE__ */ qe.jsxs("div", { ref: Fe, className: "tw-chat-messages", id: `tw-chat-messages-${c}`, children: [
      Gt(),
      U && /* @__PURE__ */ qe.jsx("div", { className: "waiting-indicator", children: /* @__PURE__ */ qe.jsx(uN, { color: "#333" }) })
    ] }),
    $e(),
    /* @__PURE__ */ qe.jsxs("div", { className: "tw-chat-disclaimer-container", children: [
      A && /* @__PURE__ */ qe.jsx("div", { dangerouslySetInnerHTML: { __html: Ne.tw_chat_disclaimer } }),
      /* @__PURE__ */ qe.jsxs("div", { className: "tw-chat-disclaimer-links", children: [
        Ne.tw_chat_disclaimer && /* @__PURE__ */ qe.jsx("button", { onClick: () => I(!A), children: Et() }),
        /* @__PURE__ */ qe.jsx("a", { className: "brand-link", href: "https://treyworks.com/?utm_source=tw-chat-ui&utm_medium=referral", target: "_blank", children: /* @__PURE__ */ qe.jsx("img", { src: qN, alt: "Powered by Treyworks" }) })
      ] })
    ] })
  ] });
};
function JN({ iconColor: h }) {
  return /* @__PURE__ */ qe.jsx("svg", { role: "img", className: "tw-chat-icon", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ qe.jsx("path", { d: "m512 179.3c0 55.102-26.008 104.11-66.41 135.45-28.969 22.477-151 107.22-190.54 107.22l8.6211-71.371h-92.371c-94.645 0-171.3-76.695-171.3-171.3v-7.9961c0-94.625 76.656-171.3 171.3-171.3h169.41c94.594 0 171.29 76.676 171.29 171.3zm-384.48-28.574c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.609 0 28.266-12.691 28.266-28.297 0.007813-15.621-12.648-28.277-28.266-28.277zm128.48 0c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.617 0 28.277-12.691 28.277-28.297-0.011719-15.621-12.66-28.277-28.277-28.277zm128.48 0c-15.641 0-28.266 12.656-28.266 28.277 0 15.605 12.633 28.297 28.266 28.297 15.617 0 28.266-12.691 28.266-28.297-0.003907-15.621-12.648-28.277-28.266-28.277z", fill: h }) });
}
const KN = getComputedStyle(document.documentElement), h1 = KN.getPropertyValue("--tw-chat-icon-color").trim();
function ZN({ widgetID: h, sticky: f }) {
  const [c, v] = _r.useState(!1), w = window.twChatPluginSettings.tw_chat_button_text || "Chat", C = () => {
    c || b1(h), v(!c);
  }, R = () => /* @__PURE__ */ qe.jsxs("div", { className: "tw-chat-container", children: [
    /* @__PURE__ */ qe.jsx("div", { className: c ? "" : "tw-chat-visibility-0", children: /* @__PURE__ */ qe.jsx(WT, { widgetID: h, iconColor: h1, toggleChat: C, sticky: f }) }),
    /* @__PURE__ */ qe.jsxs("button", { className: "tw-chat-bubble", onClick: C, "aria-label": "Open chat interface", children: [
      /* @__PURE__ */ qe.jsx(JN, { iconColor: h1 }),
      w
    ] })
  ] });
  return /* @__PURE__ */ qe.jsx(qe.Fragment, { children: f ? /* @__PURE__ */ qe.jsx(R, {}) : /* @__PURE__ */ qe.jsx(WT, { widgetID: h, iconColor: h1, toggleChat: C, sticky: f }) });
}
window.twChatMessages = window.twChatMessages || {};
window.twChatWidgetSettings = window.twChatWidgetSettings || {};
window.twChatInitWidget = function(h, f) {
  const c = document.getElementById(`tw-chat-widget-${h}`);
  twChatWidgetSettings[h] = JSON.parse(document.getElementById(`tw-chat-widget-data-${h}`).textContent), twChatMessages[h] = [wy(twChatWidgetSettings[h].tw_chat_greeting, "assistant")], hv.createRoot(c).render(
    /* @__PURE__ */ qe.jsx(C_.StrictMode, { children: /* @__PURE__ */ qe.jsx(ZN, { widgetID: h, sticky: f }) })
  );
};
